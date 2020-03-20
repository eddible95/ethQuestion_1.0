import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class QuestionFactoryContract {
  final EthereumAddress contractAddress =
      EthereumAddress.fromHex('0xc82918Bd8970D2774343e239437B2A40E2ffDA23');
  DeployedContract _contract;

  void initialiseContract() async {
    String abiCode = await rootBundle.loadString('assets/QuestionFactory.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'QuestionFactory'),
        this.contractAddress);
  }

  Future<TransactionReceipt> createQuestion(
      String questionTitle,
      String content,
      List<String> tags,
      BigInt reward,
      BigInt maxDuration,
      List<String> imageHashes,
      List<String> imageNames,
      String transactionMessage,
      EthereumAddress tokenAddress,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('createQuestion'),
          parameters: [
            questionTitle,
            content,
            tags,
            reward,
            maxDuration,
            imageHashes,
            imageNames,
            transactionMessage,
            tokenAddress
          ],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> deleteQuestion(EthereumAddress questionAddress,
      String logTransaction, String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('deleteQuestion'),
          parameters: [questionAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> undoDeleteQuestion(EthereumAddress questionAddress,
      String logTransaction, String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('undoDeleteQuestion'),
          parameters: [questionAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> createAnswer(
      EthereumAddress questionAddress,
      String content,
      List<String> imageHashes,
      List<String> imageNames,
      String transactionMessage,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('createAnswer'),
          parameters: [
            questionAddress,
            content,
            imageHashes,
            imageNames,
            transactionMessage
          ],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> approveAnswer(
      EthereumAddress questionAddress,
      BigInt index,
      String logTransaction,
      EthereumAddress tokenAddress,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('approveAnswer'),
          parameters: [questionAddress, index, logTransaction, tokenAddress],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> createProfile(
      EthereumAddress credentialAddress,
      String emailAddress,
      EthereumAddress tokenAddress,
      EthereumAddress tokenSaleAddress,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('createProfile'),
          parameters: [
            credentialAddress,
            emailAddress,
            tokenAddress,
            tokenSaleAddress
          ],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> createAdmin(
      EthereumAddress credentialAddress,
      String emailAddress,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
    await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('createProfile'),
          parameters: [
            credentialAddress,
            emailAddress
          ],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
      await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> changeQuestionPhase(
      EthereumAddress questionAddress,
      String logTransaction,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('changeQuestionPhase'),
          parameters: [questionAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> shareTokenAt(
      EthereumAddress questionAddress,
      String logTransaction,
      String rewardMessage,
      String voteMessage,
      String refundMessage,
      EthereumAddress tokenAddress,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('shareTokenAt'),
          parameters: [
            questionAddress,
            logTransaction,
            rewardMessage,
            voteMessage,
            refundMessage,
            tokenAddress
          ],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> increaseReward(
      EthereumAddress questionAddress,
      String logTransaction,
      EthereumAddress tokenAddress,
      String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('increaseReward'),
          parameters: [questionAddress, logTransaction, tokenAddress],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<TransactionReceipt> timeExtension(EthereumAddress questionAddress,
      String logTransaction, String privateKey) async {
    TransactionReceipt receipt;
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    String transaction = await EthereumService.ethClient.sendTransaction(
        credentials,
        Transaction.callContract(
          contract: _contract,
          function: _contract.function('timeExtension'),
          parameters: [questionAddress, logTransaction],
          maxGas: 10000000,
        ),
        chainId: EthereumService.chainId);
    while (receipt == null) {
      receipt =
          await EthereumService.ethClient.getTransactionReceipt(transaction);
    }
    return receipt;
  }

  Future<List> getProfile(String privateKey) async {
    Credentials credentials =
        await EthereumService.ethClient.credentialsFromPrivateKey(privateKey);
    final profileAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getProfile'),
        params: [await credentials.extractAddress()]);
    return profileAddress;
  }

  Future<List> getProfileByEthWallet(EthereumAddress ethWallet) async {
    final profileAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getProfile'),
        params: [ethWallet]);
    return profileAddress;
  }

  Future<List> getDeployedQuestions() async {
    final deployedQuestions = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getDeployedQuestions'),
        params: []);
    return deployedQuestions;
  }

  Future<List> getLastDeployedQuestion() async {
    final questionAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getLastDeployedQuestion'),
        params: []);
    return questionAddress;
  }

  Future<List> getEthWallets() async {
    final ethWallets = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getEthWallets'),
        params: []);
    return ethWallets;
  }
}
