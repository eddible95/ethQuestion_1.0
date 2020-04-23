// Imports Web3 API
import Web3 from 'web3';

let web3;
const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8543');
web3 = new Web3(provider);

export default web3;
