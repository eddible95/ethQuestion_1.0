const assert = require('assert');
const Web3 = require('web3'); // Web3 constructor
// const ganache = require('ganache-cli'); // ** creates 10 accounts
// const options = { gasLimit: 8000000 };
// const provider = ganache.provider(options);
// const web3 = new Web3(provider); // web3 instance

const provider = new Web3.providers.HttpProvider("http://localhost:8545")
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/QuestionFactory.json');
const compiledQuestion = require('../ethereum/build/Question.json');
const compiledProfile = require('../ethereum/build/Profile.json');

// List of accounts that exists on the local ganache network
let accounts;
// Reference to the deployed instance of the factory
let factory;
// An instance of a question
let question;
// The address of the post to test
let questionAddress;
// An instance of a Profile
let profile;
// Address of the profile to tests
let profileAddress;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    // Deploy an instance of the factory contract:
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '3000000' });

    factory.setProvider(provider);

    // First question created by account 0
    await factory.methods
    .createQuestion('Algorithm', 'This is a content', 1, 1)
    .send({
        from: accounts[0],
        gas: '3000000'
    });

    // Note the ES6 use -> [questionAddress] means the await will return an array and I want to assign the first element to contract address.
    //[questionAddress] = await factory.methods.getDeployedQuestions().call(); // returns an array of question addresses

    // // Gets the list of question contract address
    questionAddress = await factory.methods.getDeployedQuestions().call();

    // Creates an answer to the question using account 1
    await factory.methods.createAnswer(questionAddress[0], "This is my answer")
    .send({
      from: accounts[1],
      gas: '3000000'
    });

    // Up vote the answer using account 0
    await factory.methods.upVote(questionAddress[0], 0)
    .send({
      from: accounts[0],
      gas: '100000'
    });

    // Down vote the answer using account 0
    await factory.methods.downVote(questionAddress[0], 0)
    .send({
      from: accounts[0],
      gas: '100000'
    });

    // Creates a second answer to the question using account 2
    await factory.methods.createAnswer(questionAddress[0], "This is my second answer")
    .send({
      from: accounts[2],
      gas: '3000000'
    });

    // Create an instance of the Question contract for first question
    question = await new web3.eth.Contract(
        JSON.parse(compiledQuestion.interface),
        questionAddress[0]
    );

    // Create an instance of the Profile contract for account 0
    profileAddress = await factory.methods.getProfile(accounts[0]).call();
    profile = await new web3.eth.Contract(
        JSON.parse(compiledProfile.interface),
        profileAddress
    );

});

describe('Questions', () => {
    it('Verify the deployment of QuestionFactory contract, Question contract and a Profile contract', () => {
        assert.ok(factory.options.address);
        assert.ok(question.options.address);
        assert.ok(profile.options.address);
    });

    it('Verify the contents of a question', async () => {
        const values = await question.methods.getSummary().call();
        assert.equal('Algorithm', values[0]); // Question Title
        assert.equal('This is a content', values[1]); // Question Content
        assert.equal(1, values[2]); // reward
        assert.equal(1, values[3]); // maxDuration
        assert.equal(0, values[4]); // state
        assert.equal(accounts[0], values[5]); // Account 0 is the creator
    });

    it('Verify the contents of a profile', async () => {
      const ethAccount = await profile.methods.ethAccount().call();
      const token = await profile.methods.getToken().call();
      assert.equal(accounts[0], ethAccount);
      assert.equal(9, token); // 1 Token used for creating question
    });

    it('Verify the contents of an answer', async () => {
      const answers = await question.methods.getAnswerList().call();
      //console.log(answers);
      answer = answers[0]; //
      answererProfileAddress = await factory.methods.getProfile(accounts[1]).call();
      voterProfileAddress = await factory.methods.getProfile(accounts[0]).call();
      assert.equal("This is my answer", answer[0]);
      assert.equal(accounts[1], answer[1]);
      assert.equal(answererProfileAddress, answer[2]);
      assert.equal(1, answer[3]); // Check if up vote works
      assert.equal(1, answer[4]); // Check if down vote works
      assert.equal(voterProfileAddress, answer[6]);
      assert.equal(voterProfileAddress, answer[7]);
    });

    it('Verify getVotes function', async () => {
      const vote = await question.methods.getVotes(0).call();
      assert.equal(1, vote[0]); // Up votes
      assert.equal(1, vote[1]); // Down votes
    });

    it('Verify the getQuestionState function', async () => {
      // Set start time to 1hr ago to test the change of state
      await question.methods.setStart(1570956120).send({
        from: accounts[0],
        gas: '100000'
      });
      const start = await question.methods.start().call();
      const state = await question.methods.getQuestionState().call();
      assert.equal(1, state); // Change from answering phase to voting phase
    });

    it('Verify the shareToken function', async() => {
      await factory.methods.shareTokenAt(questionAddress[0]).send({
        from: accounts[0],
        gas: '100000'
      });

      // Create an instance of the profiles for the 2 answerers
      answererProfileAddress_1 = await factory.methods.getProfile(accounts[1]).call();
      answererProfileAddress_2 = await factory.methods.getProfile(accounts[2]).call();
      answererProfile_1 = await new web3.eth.Contract(
          JSON.parse(compiledProfile.interface),
          answererProfileAddress_1
      );
      answererProfile_2 = await new web3.eth.Contract(
          JSON.parse(compiledProfile.interface),
          answererProfileAddress_2
      );

      // Check that the answerer has been rewarded
      let token = await answererProfile_1.methods.getToken().call();
      assert.equal(11, token);

      // Check that the second answerer's token remains 10
      token = await answererProfile_2.methods.getToken().call();
      assert.equal(10, token);

      // Check that up voters are rewarded
      token = await profile.methods.getToken().call();
      assert.equal(11, token);
    });
});
