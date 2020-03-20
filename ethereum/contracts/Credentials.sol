pragma solidity ^0.4.25;

// Stores the binding between valid Email Address and Ethereum EWallet
contract Credentials {
  mapping(string => string) emailPasswordMapping;
  mapping(address => string) walletEmailBinding;
  mapping(string => address) emailWalletBinding;
  mapping(address => bool) registeredEthWallets;
  mapping(string => bool) registeredEmailAddresses;
  mapping(string => bool) blacklist;

  function createBinding(address _ethWallet, string _emailAddress, string _passwordHash) public {
    require(registeredEmailAddresses[_emailAddress] == false && registeredEthWallets[_ethWallet] == false);
    walletEmailBinding[_ethWallet] = _emailAddress;
    emailWalletBinding[_emailAddress] = _ethWallet;
    emailPasswordMapping[_emailAddress] = _passwordHash;
    registeredEthWallets[_ethWallet] = true;
    registeredEmailAddresses[_emailAddress] = true;
    blacklist[_emailAddress] = false;
  }

  function getBinding(address _user) public view returns(string) {
    return walletEmailBinding[_user];
  }

  function getEthWallet(string _emailAddres) public view returns(address) {
    return emailWalletBinding[_emailAddres];
  }

  function getPasswordHash(string _emailAddress) public view returns(string) {
    return emailPasswordMapping[_emailAddress];
  }

  function emailNotExist(string _emailAddress) public view returns(bool) {
    return registeredEmailAddresses[_emailAddress];
  }

  function ethWalletNotRegistered(address _user) public view returns(bool) {
    return registeredEthWallets[_user];
  }

  function blacklistEmail(string _emailAddress) public {
    blacklist[_emailAddress] = true;
  }

  function unBlacklistEmail(string _emailAddress) public {
    blacklist[_emailAddress] = false;
  }

  function emailNotBlackList(string _emailAddress) public view returns(bool) {
    return blacklist[_emailAddress];
  }

  function deleteMapping(address _user, string _emailAddress) public {
    delete walletEmailBinding[_user];
    delete emailWalletBinding[_emailAddress];
    delete emailPasswordMapping[_emailAddress];
    delete registeredEthWallets[_user];
    delete registeredEmailAddresses[_emailAddress];
    delete blacklist[_emailAddress];
  }
}
