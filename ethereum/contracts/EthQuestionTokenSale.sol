pragma solidity ^0.4.25;
import "./EthQuestionToken.sol";
import "./Profile.sol";

contract EthQuestionTokenSale {
  address admin;
  uint public tokenPrice; // 0.00001 Ether

  constructor() public {
    admin = msg.sender;
    tokenPrice = 10000000000;
  }

  function getTokenPrice() public view returns(uint) {
    return tokenPrice;
  }

  function getEtherBalance() public view returns(uint) {
    return address(this).balance;
  }

  function multiply(uint x, uint y) internal pure returns (uint z) {
    require(y == 0 || (z = x * y) / y == x);
  }

  function safeSub(uint a, uint b) public pure returns (uint c) {
    require(b <= a); c = a - b;
  }

  function exchangeTokens(address _tokenAddress, address _profileAddress,
    string _transaction) public payable {
    EthQuestionToken tokenContract = EthQuestionToken(_tokenAddress);
    Profile profileContract = Profile(_profileAddress);
    require(safeSub(profileContract.getPoints(), profileContract.getPointsExchanged()) >= 100);
    require(tokenContract.balanceOf(this) >= 50000);
    require(tokenContract.transfer(msg.sender, 50000));
    profileContract.updatePointsExchange(100);
    profileContract.logTransaction(_transaction);
  }

  function changeTokenPrice(uint _tokenPrice, address _profileAddress,
  string _transaction) public {
    require(msg.sender == admin);
    tokenPrice = _tokenPrice;
    Profile profileContract = Profile(_profileAddress);
    profileContract.logTransaction(_transaction);
  }

  function buyTokens(uint _numberOfTokens, address _tokenAddress,
    address _profileAddress, string _transaction) public payable {
    EthQuestionToken tokenContract = EthQuestionToken(_tokenAddress);
    Profile profileContract = Profile(_profileAddress);
    require(msg.value == multiply(_numberOfTokens, tokenPrice));
    require(tokenContract.balanceOf(this) >= _numberOfTokens);
    require(tokenContract.transfer(msg.sender, _numberOfTokens));
    profileContract.logTransaction(_transaction);
  }

  function dispenseTokens(address _user, address _tokenAddress) public payable {
    EthQuestionToken tokenContract = EthQuestionToken(_tokenAddress);
    require(tokenContract.balanceOf(this) >= 100000);
    require(tokenContract.transfer(_user, 100000));
  }

  function endSale(address _tokenAddress, address _profileAddress,
    string _transaction) public payable {
    EthQuestionToken tokenContract = EthQuestionToken(_tokenAddress);
    Profile profileContract = Profile(_profileAddress);
    require(msg.sender == admin);
    require(tokenContract.transfer(admin, tokenContract.balanceOf(this)));
    admin.transfer(address(this).balance);
    profileContract.logTransaction(_transaction);
  }
}
