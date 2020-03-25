// Imports Web3 API
import Web3 from 'web3';

// New instance of Web3 with the provider that is automatically provided to us by MetaMask inside the browser.
// This makes the assumption that the user has MetaMask.
let web3;

// Modern DApp broswer
if (typeof window !== 'undefined' && window.ethereum) {
  let instance = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.enable();
    // Acccounts now exposed
    web3 = instance;
  } catch (error) {
    // User denied account access
    alert('Please allow access for the app to work');
  }
} else if (typeof window !== 'undefined' && window.web3) {
  //Legacy DApp browser
  web3 = new Web3(web3.currentProvider);
  // Acccounts always exposed
  resolve(web3);
} else {
  // Metamask not available
  const provider = new Web3.providers.HttpProvider('http://192.168.86.248:8543');
  web3 = new Web3(provider);
  console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

export default web3;
