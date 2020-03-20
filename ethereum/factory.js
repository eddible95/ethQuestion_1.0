// The idea: If we need to get access to our deployed factory instance from somewhere else in our app,
//     we won't have to go through the entire process of importing web3, and the interface and get the address and etc.
//     Instead, we can import this factory.js file.

// Import the copy of web3 that we created (The instance that is created there).
import web3 from './web3';

// Import the compiled contract that is placed in the build directory.
// Any time that we want to tell web3 about an already deployed contract, we have to give web3 that contract's interface (ABI).
// The ABI is defined inside the PostFactory.JSON file.
import QuestionFactory from './build/QuestionFactory.json';

// Create the contract instance that refers to the specific address that we deployed the contract to
// and we we'll export it from this file.
// So, if we need excess to our deployed factory - We can import factory.js.
// arguments: Our contract ABI, The address that we deployed our factory to
let instance;
if (typeof web3 !== 'undefined') {
  instance = new web3.eth.Contract(
      JSON.parse(QuestionFactory.interface),
      "0x0eceF45E6AA052CB7d66b794F9d8d8b1917dc8d7"
  );
}

export default instance;
