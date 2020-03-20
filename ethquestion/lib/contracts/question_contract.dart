import 'dart:convert';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:flutter/services.dart';

class QuestionContract {
  EthereumAddress contractAddress;
  DeployedContract _contract;

  QuestionContract(this.contractAddress);

  void initialiseContract() async {
    String abiCode = await rootBundle.loadString('assets/Question.json');
    // Retrieve ABI of deployed contract
    var json = jsonDecode(abiCode);
    _contract = DeployedContract(
        ContractAbi.fromJson(json['interface'], 'Question'),
        this.contractAddress);
  }

  Future<List> getTime() async {
    final publishedTime = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getTime'),
        params: []);
    return publishedTime;
  }

  Future<List> getSummary() async {
    final deployedQuestions = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getSummary'),
        params: []);
    return deployedQuestions;
  }

  Future<List> getCreator() async {
    final creatorAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getCreator'),
        params: []);
    return creatorAddress;
  }

  Future<List> getAnswerList() async {
    final answerList = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getAnswerList'),
        params: []);
    return answerList;
  }

  Future<List> getAnswerer(BigInt index) async {
    final creatorAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('getAnswerer'),
        params: [index]);
    return creatorAddress;
  }

  Future<List> checkVoter(BigInt index, EthereumAddress profileAddress) async {
    final creatorAddress = await EthereumService.ethClient.call(
        contract: _contract,
        function: _contract.function('checkVoter'),
        params: [index, profileAddress]);
    return creatorAddress;
  }
}