import 'dart:async';
import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class CredentialContract {
  final EthereumAddress contractAddress =
      EthereumAddress.fromHex('0x24F324e559FD33741Baf45d9F0D4c22834636E7d');
  static var _contract;

  void initialiseContract() async {
    String abiCode = await rootBundle.loadString('assets/Credentials.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'Credentials'),
        this.contractAddress);
  }

  Future<TransactionReceipt> createBinding(String privateKey, String emailAddress) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('createBinding'),
          parameters: [emailAddress],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<List> getBinding(String privateKey) async {
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    final emailAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getBinding'),
        params: [await credentials.extractAddress()]);
    return emailAddress;
  }

  Future<List> getBindingFromPublicAddress(EthereumAddress publicAddress) async {
    final emailAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getBinding'),
        params: [publicAddress]);
    return emailAddress;
  }

  Future<List> emailNotExist(String emailAddress) async {
    final emailNotExist = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('emailNotExist'),
        params: [emailAddress]);
    return emailNotExist;
  }

  Future<List> ethWalletNotRegistered(String privateKey) async {
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    final ethWalletNotRegistered = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('ethWalletNotRegistered'),
        params: [await credentials.extractAddress()]);
    return ethWalletNotRegistered;
  }

  Future<TransactionReceipt> blacklistEmail(String privateKey, String emailAddress) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('blacklistEmail'),
          parameters: [emailAddress],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
      await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> unBlacklistEmail(String privateKey, String emailAddress) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('unBlacklistEmail'),
          parameters: [emailAddress],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
      await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<List> emailNotBlackList(String emailAddress) async {
    final blackList = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('emailNotBlackList'),
        params: [emailAddress]);
    return blackList;
  }
}
