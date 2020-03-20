pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

// Stores all the information of each user
contract Profile {
  address public ethAccount;          // Stores the address of the Ethereum account
  enum AccountType { ADMIN, USER }
  AccountType public accountType;     // Determine if the account is an admin or user
  uint public points;                 // Points accumulated based on participation
  uint public pointsExchanged;        // Points used for EQT exchange
  string[] public transactions;       // Stores all transactions history

  constructor(address _address) public {
    ethAccount = _address;
    accountType = AccountType.USER;
    points = 0;
    pointsExchanged = 0;
  }

  function setAdmin() public {
    accountType = AccountType.ADMIN;
  }

  function getAccountType() public view returns(AccountType) {
    return accountType;
  }

  function increasePoint(uint _value) public {
    points +=(_value);
  }

  function logTransaction(string transaction) public {
    transactions.push(transaction);
  }

  function getPoints() public view returns(uint) {
    return points;
  }

  function getPointsExchanged() public view returns(uint) {
    return pointsExchanged;
  }

  function updatePointsExchange(uint _value) public {
    pointsExchanged += _value;
  }

  function getTransactions() public view returns(string[]) {
    return transactions;
  }

  function getEthAccount() public view returns(address) {
    return ethAccount;
  }
}
