pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;
import "./Profile.sol";
import "./EthQuestionToken.sol";
import "./EthQuestionTokenSale.sol";
import "./Credentials.sol";

// A factory that handles the creation of Questions and Profiles smart contract
contract QuestionFactory {
  address[] private deployedQuestions;
  address[] private ethWallets;
  mapping(address => address) private userProfileMapping;

  function createQuestion(string _questionTitle, string _content, string[] _tag,
     uint _reward, uint _maxDuration, string[] imageHashes, string[] imageNames,
     string _transaction, address tokenAddress) public payable returns (address) {

    // Check that user has sufficient tokens to pay the reward
    require(EthQuestionToken(tokenAddress).balanceOf(msg.sender) >= _reward);
    address newQuestion = new Question(_questionTitle, _content, _tag, _reward,
      _maxDuration, imageHashes, imageNames, msg.sender, userProfileMapping[msg.sender]);
    deployedQuestions.push(newQuestion);

    // Creates the question and logs the transaction
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function deleteQuestion(address _question, string _transaction) public {
    Question question = Question(_question);
    question.flagQuestion();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function undoDeleteQuestion(address _question, string _transaction) public {
    Question question = Question(_question);
    question.unflagQuestion();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function createAnswer(address _question, string _content, string[] imageHashes,
    string[] imageNames, string _transaction) public {
    Question question = Question(_question);
    require(question.getCreator() != msg.sender);
    question.createAnswer(_content, msg.sender, imageHashes, imageNames,
      userProfileMapping[msg.sender]);
    Profile(userProfileMapping[msg.sender]).increasePoint(2);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function approveAnswer(address _question, uint _index, string _transaction) public payable {
    Question question = Question(_question);
    require(question.getAnswerer(_index) != msg.sender);
    question.approveAnswer(_index, Profile(userProfileMapping[msg.sender]));
    Profile(userProfileMapping[msg.sender]).increasePoint(1);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function createProfile(address _contractAddress, string _emailAddress, string _passwordHash,
    address _tokenAddress, address _tokenSaleAddress, string _logTransaction) public {
    // Register only first time user with a Profile
    require(userProfileMapping[msg.sender] == 0);
    // Binds EthWallet Address to Email Address
    Credentials credentials = Credentials(_contractAddress);
    credentials.createBinding(msg.sender, _emailAddress, _passwordHash);
    // Creates the Profile Contract
    address profile = new Profile(msg.sender);
    Profile(profile).logTransaction(_logTransaction);
    EthQuestionTokenSale ethQuestionTokenSale = EthQuestionTokenSale(_tokenSaleAddress);
    ethQuestionTokenSale.dispenseTokens(msg.sender, _tokenAddress);
    ethWallets.push(msg.sender);
    userProfileMapping[msg.sender] = profile;
  }

  function createAdmin(address _contractAddress, string _emailAddress, string _passwordHash) public {
    // Register only first time user with a Profile
    require(userProfileMapping[msg.sender] == 0);
    // Binds EthWallet Address to Email Address
    Credentials credentials = Credentials(_contractAddress);
    credentials.createBinding(msg.sender, _emailAddress, _passwordHash);
    // Creates the Profile Contract
    address profile = new Profile(msg.sender);
    Profile(profile).setAdmin();
    ethWallets.push(msg.sender);
    userProfileMapping[msg.sender] = profile;
  }

  // Distribute the reward to the answer with the highest upvotes
  function changeQuestionPhase(address _question, string _transaction) public {
    Question question = Question(_question);
    // Allow creator can access this function
    require(question.getCreator() == msg.sender);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
    question.changeQuestionPhase();
  }

  // Distribute the reward to the answer with the highest upvotes
  function shareTokenAt(address _question, string _transaction, string rewardMessage,
    string votingMessage, string refundMessage, address tokenAddress) public payable {
    Question question = Question(_question);
    // Allow creator can access this function
    require(question.getCreator() == msg.sender);
    if (question.shareToken(tokenAddress, rewardMessage, votingMessage, refundMessage)) {
      Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
      Profile(userProfileMapping[msg.sender]).increasePoint(5);
    }
    question.changeQuestionPhase();
  }

  function increaseReward(address _question, string _transaction, address tokenAddress) public payable {
    // User requires at least 1 token to increase reward
    require(EthQuestionToken(tokenAddress).balanceOf(msg.sender) >= 10000);
    Question question = Question(_question);
    // Allow creator can access this function
    require(question.getCreator() == msg.sender);
    question.increaseReward();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function timeExtension(address _question, string _transaction) public {
    Question question = Question(_question);
    // Allow creator can access this function
    require(question.getCreator() == msg.sender);
    question.timeExtension();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function getProfile(address _user) public view returns(address){
    require(userProfileMapping[_user] != 0);
    return userProfileMapping[_user];
  }

  function getDeployedQuestions() public view returns(address[]) {
    return deployedQuestions;
  }

  function getLastDeployedQuestion() public view returns(address) {
    return deployedQuestions[deployedQuestions.length-1];
  }

  function getEthWallets() public view returns(address[]) {
    return ethWallets;
  }
}

// Stores the information of each Question created by users
contract Question {

  struct Answer {
    string replyContent;
    bool rewarded;
    address answerer;
    Profile answererP;
    uint numOfApprovals;
    uint answerTime;
    Profile[] approveUsers;
    string[] imageNames;
    string[] imageHashes;
  }

  Answer[] public answerList;
  string public questionTitle;
  string public content;
  string[] public tag;
  uint public reward;
  uint public maxDuration;
  uint public start; // Stores the time the Question is posted
  uint public votingStart; // Stores the time Voting Phase started
  string[] imageNames;
  string[] imageHashes;
  address public creator;
  Profile public creatorProfile;
  bool public flagged;
  mapping(uint => mapping(address => bool)) voted;
  mapping(address => bool) answered;

  enum State { ANSWERING, VOTING, REWARDED }
  State public state;

  function() public payable {}

  constructor(string _questionTitle, string _content, string[] _tag, uint _reward,
     uint _maxDuration, string[] _imageHashes, string[] _imageNames, address _creator,
     address _creatorProfile) public {
    questionTitle = _questionTitle;
    content = _content;
    tag = _tag;
    reward = _reward;
    maxDuration = _maxDuration;
    imageNames = _imageNames;
    imageHashes = _imageHashes;
    creator = _creator;
    creatorProfile = Profile(_creatorProfile); // Maps the Ethereum Account address to the Profile Contract Address
    flagged = false;
    start = now;
    state = State.ANSWERING;
  }

  function flagQuestion() public {
    flagged = true;
  }

  function unflagQuestion() public {
    flagged = false;
  }

  function createAnswer(string _content, address _answerer, string[] _imageHashes,
    string[] _imageNames, address _answererP) public {
    require(!answered[_answerer]);
    Answer memory newAnswer = Answer({
        replyContent: _content,
        rewarded: false,
        answerer: _answerer,
        answererP: Profile(_answererP),
        answerTime: now,
        numOfApprovals: 0,
        approveUsers: new Profile[](0),
        imageNames: _imageNames,
        imageHashes: _imageHashes
        });
    answerList.push(newAnswer);
    answered[_answerer] = true;
  }

  function getTime() public view returns (uint, uint, uint, uint){
    return(start, now, maxDuration, votingStart);
  }

  function timeExtension() public {
    start = now;
    maxDuration = 3600;
  }

  function increaseReward() public {
    reward +=10000;
  }

  function getSummary() public view returns (string, string, uint, uint, State,
    string[], string[], address, string[], bool) {
    return(questionTitle, content, reward, maxDuration, state, imageHashes,
      imageNames, creator, tag, flagged);
  }

  function getCreator() public view returns (address) {
    return creator;
  }

  function getCreatorProfile() public view returns (Profile) {
    return creatorProfile;
  }

  function getAnswerList() public view returns(Answer[]) {
    return answerList;
  }

  function getAnswerer(uint index) public view returns(address) {
    return answerList[index].answerer;
  }

  function checkIfAnswered(address _user) public view returns(bool) {
    return answered[_user];
  }

  function checkVoter(uint index, Profile voter) public view returns(bool) {
    return voted[index][voter];
  }

  function approveAnswer(uint index, Profile voter) public {
    answerList[index].numOfApprovals ++;
    answerList[index].approveUsers.push(voter);
    voted[index][voter] = true;
  }

  function getApprovals(uint index) public view returns (uint) {
    return(answerList[index].numOfApprovals);
  }

  function changeQuestionPhase() public {
    if (state == State.ANSWERING) {
      uint publishingTime = now - start;
      if (publishingTime > maxDuration) {
        state = State.VOTING;
        votingStart = now;
      }
    }
    // Voting Phase
    if (state == State.VOTING) {
      uint votingTime = now - votingStart;
      if (votingTime > maxDuration) {
        state = State.REWARDED;
      }
    }
  }

  function shareToken(address tokenAddress, string rewardMessage, string votingMessage,
    string refundMessage) public returns(bool) {
    EthQuestionToken token = EthQuestionToken(tokenAddress);
    uint topResponse = 0;
    uint balance = token.balanceOf(address(this)) - reward;
    // If no answers given, reward returned to owner
    if (answerList.length == 0) {
      token.transfer(creatorProfile.getEthAccount(), reward);
      creatorProfile.logTransaction(refundMessage);
      return false;
    } else {
      // Search for the response with the most approvals
      for (uint i = 1; i < answerList.length;i++) {
          if(answerList[i].numOfApprovals > answerList[topResponse].numOfApprovals){
              topResponse = i;
          }
      }
      // Ensures that if no approvals, no rewards will be given to anyone
      if (answerList[topResponse].numOfApprovals != 0) {
        // Reward the answerer
        answerList[topResponse].rewarded = true;
        token.transfer(answerList[topResponse].answererP.getEthAccount(), reward);
        Profile(answerList[topResponse].answererP).increasePoint(4);
        Profile(answerList[topResponse].answererP).logTransaction(rewardMessage);

        // Reward users who approve of the answer
        uint numOfVoters = answerList[topResponse].approveUsers.length;
        uint proportion = balance/numOfVoters;
        for (i = 0; i < numOfVoters; i++) {
          token.transfer(answerList[topResponse].approveUsers[i].getEthAccount(), proportion);
          Profile(answerList[topResponse].approveUsers[i]).increasePoint(2);
          Profile(answerList[topResponse].approveUsers[i]).logTransaction(votingMessage);
        }
        return true;
      } else {
        // Return the question owner the deposit
        token.transfer(creatorProfile.getEthAccount(), reward);
        creatorProfile.logTransaction(refundMessage);
        return false;
      }
    }
  }
}
