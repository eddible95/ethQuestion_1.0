pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

// Stores the feedback gathered from users
contract Feedback {
  uint public numOfLikes = 0;
  uint public numOfDislikes = 0;
  uint public numOfUseful = 0;
  uint public numOfNotUseful = 0;
  uint public numOfEasy = 0;
  uint public numOfNotEasy = 0;
  string[] public comments;

  function updateFeedback(bool _like, bool _useful, bool _easy, string _comment) public {
    updateLikes(_like);
    updateUseful(_useful);
    updateEasy(_easy);
    updateComments(_comment);
  }

  function updateLikes(bool value) public {
    if(value){
      numOfLikes += 1;
    } else {
      numOfDislikes +=1;
    }
  }

  function updateUseful(bool value) public {
    if(value){
      numOfUseful += 1;
    } else {
      numOfNotUseful +=1;
    }
  }

  function updateEasy(bool value) public {
    if(value){
      numOfEasy += 1;
    } else {
      numOfNotEasy +=1;
    }
  }

  function updateComments(string _comment) public {
    require(bytes(_comment).length >= 0);
    comments.push(_comment);
  }

  function getSummaryStatistics() public view returns (uint, uint, uint, uint, uint, uint) {
    return (numOfLikes, numOfDislikes, numOfUseful, numOfNotUseful, numOfEasy, numOfNotEasy);
  }

  function getComments() public view returns (string[]) {
    return comments;
  }
}
