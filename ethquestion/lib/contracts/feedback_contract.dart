import 'dart:async';
import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class FeedbackContract {
  final EthereumAddress contractAddress =
  EthereumAddress.fromHex('0x0F5F69473A921dbbc765149Fae1fbeFA7Bbb61D3');
  static var _contract;

  void initialiseContract() async {
    String abiCode = await rootBundle.loadString('assets/Feedback.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'Feedback'),
        this.contractAddress);
  }

  Future<TransactionReceipt> updateFeedback(bool like, bool usefulness, bool easy, String comments, String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('updateFeedback'),
          parameters: [like, usefulness, easy, comments],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
      await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<List> getComments() async {
    final comments = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getComments'),
        params: []);
    return comments;
  }
}
