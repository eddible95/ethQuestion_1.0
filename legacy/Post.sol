pragma solidity ^0.4.25;

contract PostFactory {
    address[] public deployedPosts;
    mapping(address => address[]) userPosts;
    uint public numberOfPosts = 0;

    // Function that creates a new question
    function createPost(string postContent, uint postDay, uint postMonth, uint postYear) public {
        address newPost = new Post(postContent, postDay, postMonth, postYear, numberOfPosts, msg.sender); // msg.sender gets the address of the caller
        deployedPosts.push(newPost);
        userPosts[msg.sender].push(newPost); // Keep tracks of all post a user has
        numberOfPosts += 1;
    }

    function getDeployedPosts() public view returns (address[]) {
        return deployedPosts;
    }

    function getUserPosts(address user) public view returns (address[]) {
        return userPosts[user];
    }
}

contract Post {
    address public owner;
    uint day;
    uint month;
    uint year;
    string content;
    mapping(address => bool) public likes; // Track whether each user has like the post already
    uint public likesCount;
    uint postID;

    modifier restricted(){
        require(msg.sender == owner);
        _;
    }

    function Post(string postContent, uint postDay, uint postMonth, uint postYear, uint numberOfPosts, address _owner) public {
        owner = _owner;
        content = postContent;
        likesCount = 0;
        day = postDay;
        month = postMonth;
        year = postYear;
        postID = numberOfPosts;
    }

    function likePost() public {
        require(!likes[msg.sender]);
        likes[msg.sender] = true;
        likesCount++;
    }

    function getSummary() public view returns (string, uint, uint, uint, uint, address) {
        return (
        content,
        day,
        month,
        year,
        likesCount,
        owner
        );
    }
}
