const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

// Creates the directory for the compile contracts
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// Ensure directory exist, if not create one
fs.ensureDirSync(buildPath);

// Get the path for each contract
const profileContractPath = path.resolve(__dirname, 'contracts', 'Profile.sol');
const credentialsContractPath = path.resolve(__dirname, 'contracts', 'Credentials.sol');
const feedbackContractPath = path.resolve(__dirname, 'contracts', 'Feedback.sol');
const ethQuestionTokenContractPath = path.resolve(__dirname, 'contracts', 'EthQuestionToken.sol');
const ethQuestionTokenSaleContractPath = path.resolve(__dirname, 'contracts', 'EthQuestionTokenSale.sol');
const questionContractPath = path.resolve(__dirname, 'contracts', 'Question.sol');

const profile = fs.readFileSync(profileContractPath, 'utf8');
const credentials = fs.readFileSync(credentialsContractPath, 'utf8');
const feedback = fs.readFileSync(feedbackContractPath, 'utf8');
const ethQuestionToken = fs.readFileSync(ethQuestionTokenContractPath, 'utf8');
const ethQuestionTokenSale = fs.readFileSync(ethQuestionTokenSaleContractPath, 'utf8');
const question = fs.readFileSync(questionContractPath, 'utf8');

const input = {
  sources: {
    'Profile.sol': profile,
    'Credentials.sol': credentials,
    'Feedback.sol': feedback,
    'EthQuestionToken.sol': ethQuestionToken,
    'EthQuestionTokenSale.sol': ethQuestionTokenSale,
    'Question.sol': question
  }
};

// Log Errors
console.log(solc.compile(input, 1).errors);

// Write the compiled contracts to directory
let output = solc.compile(input, 1).contracts;
for(let contract in output) {
  fileName = contract.split(":")
  fs.outputJsonSync(          //write json file (path, data)
    path.resolve(buildPath, fileName[1] + '.json'),
    output[contract]
  );
}
