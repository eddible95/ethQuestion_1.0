import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class ProfileContract {
  EthereumAddress contractAddress;
  DeployedContract _contract;

  ProfileContract(this.contractAddress);

  void initialiseContract() async {
    String abiCode = await rootBundle.loadString('assets/Profile.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'Profile'),
        this.contractAddress);
  }

  Future<List> getAccountType() async {
    final accountType = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getAccountType'),
        params: []);
    return accountType;
  }

  Future<TransactionReceipt> logTransaction(String logTransaction, String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('logTransaction'),
          parameters: [logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while(receipt == null) {
      receipt = await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<List> getPoints() async {
    final points = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getPoints'),
        params: []);
    return points;
  }

  Future<List> getTransactions() async {
    final transactions = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getTransactions'),
        params: []);
    return transactions;
  }

  Future<List> getEthAccount() async {
    final publicAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getEthAccount'),
        params: []);
    return publicAddress;
  }
}
