import 'package:web3dart/web3dart.dart';
import 'package:ethereum/ethereum_server_client.dart';
import 'package:http/http.dart';

// Contains code that provide API calls to Ethereum Node
class EthereumService {
  static final apiUrl = "http://192.168.86.248:8543";
  static final int chainId = 2019;
  static final httpClient = new Client();
  static final ethClient = new Web3Client(apiUrl, httpClient);
  // Client to import new Ethereum Wallets to the private Blockchain Network
  static final EthereumServerClient client =
  EthereumServerClient.withConnectionParameters('192.168.86.248', 8543);

  // Getting Ethereum Wallet Public Address from Private Key
  Future<String> getAddress(privateKey) async {
    Credentials credentials = await ethClient.credentialsFromPrivateKey(privateKey);
    var address = await credentials.extractAddress();
    return address.toString();
  }
}

