import 'package:web3dart/credentials.dart';

class Question {
  String questionTitle;
  String content;
  BigInt reward;
  BigInt maxDuration;
  BigInt state;
  List imageHashes;
  List imageNames;
  EthereumAddress creatorProfileAddress;
  List tag;
  bool flagged;
  int numOfAnswers;
  EthereumAddress questionAddress;
  List answerList;

  Question(
      this.questionTitle,
      this.content,
      this.reward,
      this.maxDuration,
      this.state,
      this.imageHashes,
      this.imageNames,
      this.creatorProfileAddress,
      this.tag,
      this.flagged,
      this.numOfAnswers,
      this.questionAddress,
      this.answerList);
}
