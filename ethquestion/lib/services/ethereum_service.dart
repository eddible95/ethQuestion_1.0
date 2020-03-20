import 'package:web3dart/web3dart.dart';
import 'package:http/http.dart'; //You can also import the browser version

// Contains code that provide API calls to Ethereum Node
class EthereumService {
  //static final apiUrl = "http://192.168.86.21:8543";
  static final int chainId = 2019;
  static final apiUrl = "http://172.21.148.184:8543";
  static final httpClient = new Client();
  static final ethClient = new Web3Client(apiUrl, httpClient);

  // Getting Ethereum Wallet Public Address from Private Key
  Future<String> getAddress(privateKey) async {
    Credentials credentials = await ethClient.credentialsFromPrivateKey(privateKey);
    var address = await credentials.extractAddress();
    return address.toString();
  }
}

