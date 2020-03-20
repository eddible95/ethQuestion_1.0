import 'package:web3dart/web3dart.dart';

class UserDetails {
  EthereumAddress ethereumAddress;
  String emailAddress;
  bool status;

  UserDetails(this.ethereumAddress, this.emailAddress, this.status);
}