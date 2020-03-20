import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class EthQuestionTokenSaleContract {
  final EthereumAddress contractAddress =
      EthereumAddress.fromHex('0x498885040eAdBeA9990b6bF4E6AE2dbb5E8d9c99');
  DeployedContract _contract;

  void initialiseContract() async {
    String abiCode =
        await rootBundle.loadString('assets/EthQuestionTokenSale.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'EthQuestionTokenSale'),
        this.contractAddress);
  }

  Future<TransactionReceipt> buyTokens(
      BigInt numOfTokens,
      EthereumAddress tokenAddress,
      EthereumAddress profileAddress,
      String logTransaction,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('buyTokens'),
          parameters: [numOfTokens, tokenAddress, profileAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> exchangeTokens(
      EthereumAddress tokenAddress,
      EthereumAddress profileAddress,
      String logTransaction,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('exchangeTokens'),
          parameters: [tokenAddress, profileAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
      await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> endSale(
      EthereumAddress tokenAddress,
      EthereumAddress profileAddress,
      String logTransaction,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('endSale'),
          parameters: [tokenAddress, profileAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> changeTokenPrice(
      BigInt tokenPrice,
      EthereumAddress profileAddress,
      String logTransaction,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('changeTokenPrice'),
          parameters: [tokenPrice, profileAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<List> getTokenPrice() async {
    final tokenPrice = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getTokenPrice'),
        params: []);
    return tokenPrice;
  }

  Future<List> getEtherBalance() async {
    final etherBalance = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getEtherBalance'),
        params: []);
    return etherBalance;
  }
}
