pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

// A factory that handles the creation of Questions and Profiles dynamically
contract QuestionFactory {
  address[] private deployedQuestions;
  address[] private ethWallets;
  mapping(address => address) private userProfileMapping;

  function createQuestion(string _questionTitle, string _content, string[] _tag, uint _reward, uint _maxDuration,
      string[] imageHashes, string[] imageNames, string _transaction) public payable {
    // First time user
    createProfile();

    // Check that user has sufficient tokens to pay the reward
    require(_reward<Profile(userProfileMapping[msg.sender]).getToken());
    address newQuestion = new Question(_questionTitle, _content, _tag, _reward, _maxDuration,
        imageHashes, imageNames, msg.sender, userProfileMapping[msg.sender]);
    deployedQuestions.push(newQuestion);

    // Transfer the deposit from the profile contract to the question contract
    Question question = Question(newQuestion);
    Profile(userProfileMapping[msg.sender]).decreaseToken(_reward);
    Profile(userProfileMapping[msg.sender]).increasePoint(5);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
    question.postQuestion();
  }

  function deleteQuestion(address _question, string _transaction) public {
    // Question question = Question(_question);
    // question.deleteQuestion(msg.sender);
    // for (uint i = 0; i < deployedQuestions.length; i++) {
    //   if (deployedQuestions[i] == _question) {
    //     uint index = i;
    //   }
    // }
    // for (i = index ; i < deployedQuestions.length-1; i++) {
    //   deployedQuestions[i] = deployedQuestions[i+1];
    // }
    // delete deployedQuestions[i-1];
    // deployedQuestions.length--;
    Question question = Question(_question);
    question.flagQuestion();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function createAnswer(address _question, string _content, string[] imageHashes, string[] imageNames, string _transaction) public {
    // First time user
    createProfile();

    Question question = Question(_question);
    question.createAnswer(_content, msg.sender, imageHashes, imageNames, userProfileMapping[msg.sender]);
    Profile(userProfileMapping[msg.sender]).increasePoint(2);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function setAdmin() public {
    Profile(userProfileMapping[msg.sender]).setAdmin();
  }

  function upVote(address _question, uint _index, string _transaction) public payable {
    createProfile();
    // User requires at least 1 token to give a vote
    require(Profile(userProfileMapping[msg.sender]).getToken() >= 1);

    Question question = Question(_question);
    question.transfer(msg.value);
    question.upVoteAnswer(_index, Profile(userProfileMapping[msg.sender]));
    Profile(userProfileMapping[msg.sender]).increasePoint(1);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function downVote(address _question, uint _index, string _transaction) public payable {
    createProfile();
    // User requires at least 1 token to give a vote
    require(Profile(userProfileMapping[msg.sender]).getToken() >= 1);

    Question question = Question(_question);
    question.transfer(msg.value);
    question.downVoteAnswer(_index, Profile(userProfileMapping[msg.sender]));
    Profile(userProfileMapping[msg.sender]).increasePoint(1);
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  // Register first time user with a Profile
  function createProfile() public {
    if (userProfileMapping[msg.sender] == 0) {
      address profile = new Profile(msg.sender);
      ethWallets.push(msg.sender);
      userProfileMapping[msg.sender] = profile;
    }
  }

  // Distribute the reward to the answer with the highest upvotes
  function shareTokenAt(address _question, string _transaction) public payable {
    createProfile();

    Question question = Question(_question);
    question.shareToken();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function increaseReward(address _question, string _transaction) public payable {
    require(Profile(userProfileMapping[msg.sender]).getToken() >= 1);
    Profile(userProfileMapping[msg.sender]).decreaseToken(1);
    Question question = Question(_question);
    question.increaseReward();
    Profile(userProfileMapping[msg.sender]).logTransaction(_transaction);
  }

  function getProfile(address _user) public view returns(address){
    require(userProfileMapping[_user] != 0);
    return userProfileMapping[_user];
  }


  function getDeployedQuestions() public view returns(address[]) {
    return deployedQuestions;
  }

  function getEthWallets() public view returns(address[]) {
    return ethWallets;
  }
}

// Stores the information of each Question created by users
contract Question {

  struct Answer {
    string replyContent;
    address answerer;
    Profile answererP;
    uint numOfUpVotes;
    uint numOfDownVotes;
    uint answerTime;
    Profile[] upVoteUsers;
    Profile[] downVoteUsers;
    string[] imageNames;
    string[] imageHashes;
  }

  Answer[] public answerList;
  string public questionTitle;
  string public content;
  string[] public tag;
  uint public reward;
  uint public maxDuration;
  uint public state = 0; // To differentiate between Answering (0), Rating (1) and Rewarding Phase (2)
  uint public start; // Stores the time the Question is posted
  uint public votingStart; // Stores the time Voting Phase started
  string[] imageNames;
  string[] imageHashes;
  address public creator;
  Profile public creatorProfile;
  bool public flagged;

  function() public payable {}

  constructor(string _questionTitle, string _content, string[] _tag, uint _reward, uint _maxDuration,
      string[] _imageHashes, string[] _imageNames, address _creator, address _creatorProfile) public {
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
  }

  function flagQuestion() public {
    flagged = true;
  }

  function createAnswer(string _content, address _answerer, string[] _imageHashes, string[] _imageNames, address _answererP) public {
    Answer memory newAnswer = Answer({
        replyContent: _content,
        answerer: _answerer,
        answererP: Profile(_answererP),
        answerTime: now,
        numOfUpVotes: 0,
        numOfDownVotes: 0,
        upVoteUsers: new Profile[](0),
        downVoteUsers: new Profile[](0),
        imageNames: _imageNames,
        imageHashes: _imageHashes
        });
    answerList.push(newAnswer);
  }

  // Sets the Question Posted time as the current block timestamp value
  function postQuestion() public {
    start = now;
  }

  function getTime() public view returns (uint, uint, uint, uint){
    return(start, now, maxDuration, votingStart);
  }

  // For testing
  function setStart(uint time) public {
    start = time;
  }

  function timeExtension() public {
    start = now;
    maxDuration = 3600;
  }

  function increaseReward() public {
    reward +=1;
  }

  function getSummary() public view returns (string, string, uint, uint, uint, string[], string[], address, string[], bool) {
    return(questionTitle, content, reward, maxDuration, state, imageHashes, imageNames, creator, tag, flagged);
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

  function checkVoter(uint index, Profile voter) public view returns(bool) {
    for(uint i=0; i<answerList[index].upVoteUsers.length; i++) {
      if(answerList[index].upVoteUsers[i] == voter) {
        return true;
      }
    }
    for(i=0; i<answerList[index].downVoteUsers.length; i++) {
      if(answerList[index].downVoteUsers[i] == voter) {
        return true;
      }
    }
    return false;
  }

  function upVoteAnswer(uint index, Profile voter) public {
    answerList[index].numOfUpVotes ++;
    answerList[index].upVoteUsers.push(voter);
  }

  function downVoteAnswer(uint index, Profile voter) public {
    answerList[index].numOfDownVotes ++;
    answerList[index].downVoteUsers.push(voter);
  }

  function getVotes(uint index) public view returns (uint, uint) {
    return(answerList[index].numOfUpVotes, answerList[index].numOfDownVotes);
  }

  function getQuestionState() public returns (uint) {
    // Answering Phase
    if (state == 0) {
      uint publishingTime = now - start;
      if (publishingTime > maxDuration) {
        state = 1;
        votingStart = now;
      }
    }

    // Voting Phase
    if (state == 1) {
      uint votingTime = now - votingStart;
      if (votingTime > maxDuration) {
        state = 2;
      }
    }
    return state;
  }

  function shareToken() public {
    uint topResponse = 0;

    // If no answers given, reward returned to owner
    if (answerList.length == 0) {
      creatorProfile.increaseToken(reward);
    } else {
      // Search for the response with the most up votes
      for (uint i = 1; i < answerList.length;i++) {
          if(answerList[i].numOfUpVotes >= answerList[topResponse].numOfUpVotes){
              topResponse = i;
          }
      }
      // Ensures that if no votes, no rewards will be given to anyone
      if (answerList[topResponse].numOfUpVotes != 0) {
        // Reward the answerer
        Profile(answerList[topResponse].answererP).increaseToken(reward);
        Profile(answerList[topResponse].answererP).increasePoint(4);

        // Reward up voters of the best answer with 2 tokens
        for (i = 0; i < answerList[topResponse].upVoteUsers.length; i++) {
          answerList[topResponse].upVoteUsers[i].increaseToken(2);
          Profile(answerList[topResponse].answererP).increasePoint(2);
        }
      }  else {
        // Return the question owner the deposit
        creatorProfile.increaseToken(reward);
      }
    }
  }
}

// Stores all the information of each user
contract Profile {
  address public ethAccount; // Stores the address of the Ethereum account
  uint public token = 10;    // Token to participate in the application
  uint public points = 0;    // Points accumulated based on participation
  string[] public transactions; // Stores all transactions history
  uint public accountType = 1; // 0 for Admin and 1 for user

  constructor(address _address) public {
    ethAccount = _address;
  }

  function setAdmin() public {
    accountType = 0;
  }

  function getAccountType() public view returns(uint) {
    return accountType;
  }

  function increaseToken(uint _value) public {
    token += (_value);
  }

  function decreaseToken(uint _value) public {
    token -= (_value);
  }

  function increasePoint(uint _value) public {
    points +=(_value);
  }

  function logTransaction(string transaction) public {
    transactions.push(transaction);
  }

  function getToken() public view returns(uint) {
    return token;
  }

  function getPoints() public view returns(uint) {
    return points;
  }

  function getTransactions() public view returns(string[]) {
    return transactions;
  }
}
