import web3 from './web3';
import Profile from './build/Profile.json';

export default (address) => {
  return new web3.eth.Contract(
    // The interface from the build/Profile:
    JSON.parse(Profile.interface), address
  );
} ;
