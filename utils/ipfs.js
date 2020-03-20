// Using the ipfs.infura.io node
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// Save document to IPFS and returns its hash value to be stored on the blockchain
const getIpfsHash = (data) => {
   return new Promise((resolve, reject) => {
       ipfs.add(data, (error, result) => {
           if(error) {
               return reject(error);
           }
           resolve(result[0].hash);
       })
   });
}

// Retrieve an image from the hash value
const convertToImage = (hash) => {
   return new Promise((resolve, reject) => {
       ipfs.cat(hash, (error, result) => {
           if(error) {
               return reject(error);
           }
           resolve("data:image/jpeg;base64," + Buffer(result).toString('base64'));
       })
   });
}

// Retrieve the document from its hash value
const getString = (hash) => {
   return new Promise((resolve, reject) => {
       ipfs.cat(hash, (error, result) => {
           if(error) {
               return reject(error);
           }
           resolve(result.toString());
       })
   });
}


export {ipfs, getIpfsHash, convertToImage, getString};
