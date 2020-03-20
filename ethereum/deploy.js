const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/QuestionFactory.json');
const compiledCredentials = require('./build/Credentials.json');
const compiledFeedbacks = require('./build/Feedback.json');
const compiledTokens = require('./build/EthQuestionToken.json');
const compiledTokenSale = require('./build/EthQuestionTokenSale.json');

// Unlock account using private key and give the web3 provieder to Ethereum node
const provider = new HDWalletProvider(
    'cf91503ca13ef6136bb1eb1e2979c103cd9bef2bf9c1bfafdbf9a319eb963951',
    //'http://127.0.0.1:8543'
    'http://192.168.86.21:8543'
    //'http://172.21.148.184:8543'
);

// Test on ganache network
// const provider = new HDWalletProvider(
//     '0x60c990c77dce62870c018d8335afb18781346c38ce635e57a4e0d7d3a1b9b22a',
//     'http://localhost:8545'
// );

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    let result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: '0x' + compiledFactory.bytecode })
      .send({ gas:'6000000', from: accounts[0] });
    console.log('Contract deployed to ', result.options.address);

    console.log('Attempting to deploy from account', accounts[0]);
    result = await new web3.eth.Contract(JSON.parse(compiledCredentials.interface))
      .deploy({ data: '0x' + compiledCredentials.bytecode })
      .send({ gas:'1000000', from: accounts[0] });
    console.log('Contract deployed to ', result.options.address);

    console.log('Attempting to deploy from account', accounts[0]);
    result = await new web3.eth.Contract(JSON.parse(compiledFeedbacks.interface))
      .deploy({ data: '0x' + compiledFeedbacks.bytecode })
      .send({ gas:'1000000', from: accounts[0] });
    console.log('Contract deployed to ', result.options.address);

    console.log('Attempting to deploy from account', accounts[0]);
    result = await new web3.eth.Contract(JSON.parse(compiledTokens.interface))
      .deploy({ data: '0x' + compiledTokens.bytecode })
      .send({ gas:'1000000', from: accounts[0] });
    console.log('Contract deployed to ', result.options.address);

    console.log('Attempting to deploy from account', accounts[0]);
    result = await new web3.eth.Contract(JSON.parse(compiledTokenSale.interface))
      .deploy({ data: '0x' + compiledTokenSale.bytecode })
      .send({ gas:'1000000', from: accounts[0] });
    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop()
};
// run deploy function
deploy();
