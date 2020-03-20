import 'package:web3dart/credentials.dart';

class Answer {
  String content;
  bool rewarded;
  EthereumAddress answerer;
  int numOfApprovals;
  int answerTime;
  List imageHashes;
  bool showLatex;

  Answer(this.content, this.rewarded, this.answerer, this.numOfApprovals,
      this.answerTime, this.imageHashes, this.showLatex);
}
