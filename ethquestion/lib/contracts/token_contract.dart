import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class EthQuestionTokenContract {
  final EthereumAddress contractAddress =
  EthereumAddress.fromHex('0xD6b20F97777ed67deB51B5d15fa63389e5fBaA99');
  DeployedContract _contract;

  void initialiseContract() async {
    String abiCode = await rootBundle.loadString('assets/EthQuestionToken.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'EthQuestionToken'),
        this.contractAddress);
  }

  Future<List> balanceOf(privateKey) async {
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    final balance = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('balanceOf'),
        params: [await credentials.extractAddress()]);
    return balance;
  }

  Future<List> balanceOfQuestionContract(EthereumAddress contractAddress) async {
    final balance = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('balanceOf'),
        params: [contractAddress]);
    return balance;
  }

  Future<TransactionReceipt> transfer(EthereumAddress questionAddress, BigInt reward, String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('transfer'),
          parameters: [questionAddress, reward],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
      await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }
}