import 'package:ethquestion/components/dialogs.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/contracts/question_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:ethquestion/components/countdown_timer.dart';
import 'package:ethquestion/contracts/token_contract.dart';
import 'package:ethquestion/data_object/answer.dart';
import 'package:ethquestion/services/ethereum_service.dart';
import 'package:ethquestion/util/functions.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter_tags/tag.dart';
import 'package:flutter_tex/flutter_tex.dart';
import 'package:ethquestion/data_object/question.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:intl/intl.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:web3dart/web3dart.dart';
import 'package:image_picker/image_picker.dart';
import 'package:ethquestion/services/ipfs_service.dart';
import 'package:ethquestion/components/avatar.dart';
import 'package:google_fonts/google_fonts.dart';

class ShowQuestionView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;
  final Question question;

  ShowQuestionView(
      {Key key,
      this.emailAddress,
      this.privateKey,
      this.accountType,
      this.question})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _ShowQuestionViewState(
        emailAddress, privateKey, accountType, question);
  }
}

class _ShowQuestionViewState extends State<ShowQuestionView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;
  Question _question;
  List<Answer> _answerList;
  String _publishedTime;
  int _remainingTime;
  bool _loading = false;
  bool _balanceError = false;
  bool _descending = false;
  QuestionContract _questionContract;
  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();
  EthereumService _ethereumService = EthereumService();
  EthQuestionTokenContract _ethQuestionTokenContract =
      EthQuestionTokenContract();
  IpfsService _ipfsService = IpfsService();
  Logger logger = Logger();

  final _formKey = GlobalKey<FormState>();
  String _answers;
  List<String> _imageHashesArray = List<String>();
  List<String> _imageNameArray = List<String>();
  bool _submittingAnswer = false;
  bool _uploading = false;

  bool _changeToVote = false;
  bool _changeToRewarded = false;
  bool _approvingAnswer = false;
  bool _fixError = false;
  bool _extendingTime = false;
  bool _increasingReward = false;
  bool _latex = false;

  _ShowQuestionViewState(
      this._emailAddress, this._privateKey, this._accountType, this._question);

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  _fetchData() async {
    print("fetching");
    setState(() {
      _loading = true;
    });
    _questionContract = QuestionContract(this._question.questionAddress);
    await _ethQuestionTokenContract.initialiseContract();
    await _questionContract.initialiseContract();

    var summary = await _questionContract.getSummary();
    var answerData = await _questionContract.getAnswerList();
    summary.add(answerData[0].length);
    summary.add(_question.questionAddress);
    summary.add(answerData[0]);
    Question question = Question(
        summary[0],
        summary[1],
        summary[2],
        summary[3],
        summary[4],
        summary[5],
        summary[6],
        summary[7],
        summary[8],
        summary[9],
        summary[10],
        summary[11],
        summary[12]);

    var contractBalance = await _ethQuestionTokenContract
        .balanceOfQuestionContract(question.questionAddress);
    var balanceError = false;
    question.reward != contractBalance[0]
        ? balanceError = true
        : balanceError = false;
    var time = await _questionContract.getTime();
    var currentTime = DateTime.now().millisecondsSinceEpoch;
    var publishTimeMs = time[0].toInt() * 1000;
    var votingTimeMs = time[3].toInt() * 1000;
    var maxDurationMs = time[2].toInt() * 1000;
    var publishTimeFormatted = DateFormat('EEEE, d MMMM, y, h:mm:ssa')
        .format(DateTime.fromMillisecondsSinceEpoch(time[0].toInt() * 1000));
    var remainingTime = 0;
    if (question.state.toInt() == 0) {
      remainingTime = publishTimeMs + maxDurationMs - currentTime;
      if (remainingTime < 0) {
        remainingTime = 0;
      }
    } else {
      remainingTime = votingTimeMs + maxDurationMs - currentTime;
      if (remainingTime < 0) {
        remainingTime = 0;
      }
    }
    List<Answer> answerList = List<Answer>();
    for (var answerDetails in question.answerList) {
      Answer answer = Answer(
          answerDetails[0],
          answerDetails[1],
          answerDetails[2],
          answerDetails[4].toInt(),
          answerDetails[5].toInt(),
          answerDetails[8],
          false);
      answerList.add(answer);
    }
    setState(() {
      _publishedTime = publishTimeFormatted.toString();
      _remainingTime = (remainingTime ~/ 1000).toInt();
      _loading = false;
      _balanceError = balanceError;
      _answerList = answerList;
      _question = question;
    });
  }

  void _onSubmit() async {
    try {
      if (_answers == null) {
        return;
      }
      var creator = await _questionContract.getCreator();
      var publicAddress = await _ethereumService.getAddress(_privateKey);
      if (creator[0].toString() != publicAddress) {
        setState(() {
          _submittingAnswer = true;
        });
        await _questionFactoryContract.initialiseContract();
        var logTransaction = logger.logging(
            "Submitted Answer for Question Titled: $_question.questionTitle");
        TransactionReceipt receipt = await _questionFactoryContract.createAnswer(
            _question.questionAddress,
            _answers,
            _imageHashesArray,
            _imageNameArray,
            logTransaction,
            _privateKey);
        if (!receipt.status) {
          CustomDialog(context, "Ethereum Error",
              "Creating Answer Unsuccessful. Please Try Again.");
        }
        Navigator.pushReplacementNamed(context, "/showQuestion",
            arguments: [_emailAddress, _privateKey, _accountType, _question]);
      } else {
        CustomDialog(context, "Submitting Answer Error",
            "You are not allowed to submit answers for question you asked.");
      }
    } catch(err) {
      setState(() {
        _submittingAnswer = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _votePhase() async {
    var creator = await _questionContract.getCreator();
    var publicAddress = await _ethereumService.getAddress(_privateKey);
//    try {
      if (creator[0].toString() == publicAddress) {
        setState(() {
          _changeToVote = true;
        });
        await _questionFactoryContract.initialiseContract();
        var logTransaction = logger.logging(
            "Change to Voting Phase for Question Titled: ${_question.questionTitle}");
        TransactionReceipt receipt =
        await _questionFactoryContract.changeQuestionPhase(_question.questionAddress, logTransaction, _privateKey);
        if (!receipt.status) {
          setState(() {
            _changeToVote = false;
          });
          CustomDialog(context, "Ethereum Error",
              "Changing Phase Unsuccessful. Please Try Again.");
          return;
        }
        var summary = await _questionContract.getSummary();
        _question.state = summary[4];
        Navigator.pushReplacementNamed(context, "/showQuestion",
            arguments: [_emailAddress, _privateKey, _accountType, _question]);
      } else {
        CustomDialog(context, "Account Error",
            "You cannot change the state of the question as you are not the owner.");
      }
//    } catch (err) {
//      setState(() {
//        _changeToVote = false;
//      });
//      CustomDialog(context, "Ethereum Error", err.toString());
//    }
  }

  void _rewardPhase() async {
    var creator = await _questionContract.getCreator();
    var publicAddress = await _ethereumService.getAddress(_privateKey);
    try {
      if (creator[0].toString() == publicAddress) {
        setState(() {
          _changeToRewarded = true;
        });
        await _questionFactoryContract.initialiseContract();
        var logTransaction = logger.logging(
            "Awarded: ${(_question.reward.toInt() * 10e-5).toString()} EQT(s) as reward for Question Titled: ${_question.questionTitle}");
        var rewardMessage = logger.logging(
            "Rewarded: ${(_question.reward.toInt() * 10e-5).toString()} EQT(s) for most approved answer");
        var voteMessage = logger
            .logging("Rewarded EQT(s) for approving the most approved answer");
        var refundMessage = logger.logging(
            "Refunded ${(_question.reward.toInt() * 10e-5).toString()} EQT(s) as there are no answers or answers with approvals");
        TransactionReceipt receipt = await _questionFactoryContract.shareTokenAt(
            _question.questionAddress,
            logTransaction,
            rewardMessage,
            voteMessage,
            refundMessage,
            _ethQuestionTokenContract.contractAddress,
            _privateKey);
        if (!receipt.status) {
          setState(() {
            _changeToRewarded = false;
          });
          CustomDialog(context, "Ethereum Error",
              "Changing Phase Unsuccessful. Please Try Again.");
          return;
        }
        var summary = await _questionContract.getSummary();
        _question.state = summary[4];
        Navigator.pushReplacementNamed(context, "/showQuestion",
            arguments: [_emailAddress, _privateKey, _accountType, _question]);
      } else {
        CustomDialog(context, "Account Error",
            "You cannot change the state of the question as you are not the owner.");
      }
    } catch (err) {
      setState(() {
        _changeToRewarded = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _approveAnswer(int index) async {
    await _questionFactoryContract.initialiseContract();
    var profileAddress = await _questionFactoryContract.getProfile(_privateKey);
    var publicAddress = await _ethereumService.getAddress(_privateKey);
    var answererAddress =
        await _questionContract.getAnswerer(BigInt.from(index));
    try {
      // Ensure voter is not answerer
      if (publicAddress != answererAddress[0].toString()) {
        var voted = await _questionContract.checkVoter(
            BigInt.from(index), profileAddress[0]);
        if (!voted[0]) {
          setState(() {
            _approvingAnswer = true;
          });
          var logTransaction = logger.logging(
              "Approved An Answer for Question Titled: ${_question.questionTitle}");
          TransactionReceipt receipt =
          await _questionFactoryContract.approveAnswer(
              _question.questionAddress,
              BigInt.from(index),
              logTransaction,
              _ethQuestionTokenContract.contractAddress,
              _privateKey);
          if (!receipt.status) {
            CustomDialog(context, "Ethereum Error",
                "Approving Answer Unsuccessful. Please Try Again.");
            setState(() {
              _approvingAnswer = false;
            });
            return;
          }
          if (_question.state.toInt() != 2) {
            receipt = await _ethQuestionTokenContract.transfer(
                _question.questionAddress, BigInt.from(10e3), _privateKey);
            if (!receipt.status) {
              CustomDialog(context, "Ethereum Error",
                  "Approving Answer Unsuccessful. Please Try Again.");
              setState(() {
                _approvingAnswer = false;
              });
              return;
            }
          }
          Navigator.pushReplacementNamed(context, "/showQuestion",
              arguments: [_emailAddress, _privateKey, _accountType, _question]);
        } else {
          CustomDialog(context, "Answer Approved",
              "You cannot approve the same answer more than once. Please approve another answer.");
        }
      } else {
        CustomDialog(context, "Account Error",
            "You have selected to approve the answer you have provided. Please only approve answers provided by others.");
      }
    } catch (err) {
      setState(() {
        _approvingAnswer = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _fixBalance() async {
    var creator = await _questionContract.getCreator();
    var publicAddress = await _ethereumService.getAddress(_privateKey);
    try {
      if (creator[0].toString() == publicAddress) {
        setState(() {
          _fixError = true;
        });
        var questionBalance =
        await _ethQuestionTokenContract.balanceOfQuestionContract(_question.questionAddress);
        var balance = _question.reward - questionBalance[0];
        TransactionReceipt receipt = await _ethQuestionTokenContract.transfer(
            _question.questionAddress, balance, _privateKey);
        if (!receipt.status) {
          CustomDialog(context, "Ethereum Error",
              "Fixing Balance Error Unsuccessful. Please Try Again.");
          setState(() {
            _fixError = false;
          });
          return;
        }
        Navigator.pushReplacementNamed(context, "/showQuestion",
            arguments: [_emailAddress, _privateKey, _accountType, _question]);
      } else {
        CustomDialog(context, "Account Error",
            "You cannot change the state of the question as you are not the owner");
      }
    } catch (err) {
      setState(() {
        _fixError = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _timeExtension() async {
    var creator = await _questionContract.getCreator();
    var publicAddress = await _ethereumService.getAddress(_privateKey);
    try {
      if (creator[0].toString() == publicAddress) {
        setState(() {
          _extendingTime = true;
        });
        await _questionFactoryContract.initialiseContract();
        var logTransaction = logger.logging(
            "Duration Extended for Question Titled: ${_question.questionTitle}");
        TransactionReceipt receipt =
        await _questionFactoryContract.timeExtension(_question.questionAddress, logTransaction, _privateKey);
        if (!receipt.status) {
          CustomDialog(context, "Ethereum Error",
              "Extending Time Unsuccessful. Please Try Again.");
          setState(() {
            _extendingTime = false;
          });
          return;
        }
        Navigator.pushReplacementNamed(context, "/showQuestion",
            arguments: [_emailAddress, _privateKey, _accountType, _question]);
      } else {
        CustomDialog(context, "Account Error",
            "You cannot change the state of the question as you are not the owner");
      }
    } catch (err) {
      setState(() {
        _extendingTime = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _increaseReward() async {
    await _questionFactoryContract.initialiseContract();
    var creator = await _questionContract.getCreator();
    var publicAddress = await _ethereumService.getAddress(_privateKey);
    try {
      if (creator[0].toString() == publicAddress) {
        setState(() {
          _increasingReward = true;
        });
        var logTransaction = logger.logging(
            "Increase Reward by 1 EQT(s) for Question Titled: ${_question.questionTitle}");
        TransactionReceipt receipt =
        await _questionFactoryContract.increaseReward(
            _question.questionAddress,
            logTransaction,
            _ethQuestionTokenContract.contractAddress,
            _privateKey);
        if (!receipt.status) {
          CustomDialog(context, "Ethereum Error",
              "Increasing Reward Unsuccessful. Please Try Again.");
          setState(() {
            _increasingReward = false;
          });
          return;
        }
        Navigator.pushReplacementNamed(context, "/showQuestion",
            arguments: [_emailAddress, _privateKey, _accountType, _question]);
      } else {
        CustomDialog(context, "Account Error",
            "You cannot change the state of the question as you are not the owner");
      }
    } catch (err) {
      setState(() {
        _increasingReward = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _sortAnswer() {
    if (_descending) {
      setState(() {
        _answerList.sort((a, b) => a.numOfApprovals - b.numOfApprovals);
        _descending = false;
      });
      return;
    } else {
      setState(() {
        _answerList.sort((a, b) => b.numOfApprovals - a.numOfApprovals);
        _descending = true;
      });
      return;
    }
  }

  Widget _buildQuestionTable() {
    return Column(
      children: <Widget>[
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Center(
            child: Text(
              'Question Details',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        _buildQuestionDetailCard(
          "Question Title",
          _question.questionTitle,
          1,
        ),
        _buildQuestionDetailCard(
          "Description",
          _question.content,
          0,
        ),
        _buildQuestionDetailCard(
          "Tags",
          _question.tag,
          2,
        ),
        Card(
          elevation: 5.0,
          child: Column(
            children: <Widget>[
              Container(
                width: double.infinity,
                color: Color(0x1A17161A),
                padding: EdgeInsets.all(8.0),
                child: Text(
                  "Reward (EQT)",
                  style: TextStyle(
                    fontSize: 16.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ),
              _question.state.toInt() == 0
                  ? Row(children: <Widget>[
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(
                            (_question.reward.toInt() * 10e-5)
                                .toString(),
                          ),
                        ),
                      ),
                      Spacer(),
                      IconButton(
                        icon: Icon(
                          MdiIcons.ethereum,
                        ),
                        onPressed: () {
                          _increaseReward();
                        },
                      )
                    ])
                  : Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          (_question.reward.toInt() * 10e-5).toString(),
                        ),
                      ),
                    ),
            ],
          ),
        ),
        _buildQuestionDetailCard(
          "Published Time",
          _publishedTime,
          1,
        ),
        _changeToVote
            ? Loader("Changing To Voting State")
            : Card(
                elevation: 5.0,
                child: Column(
                  children: <Widget>[
                    Container(
                      width: double.infinity,
                      color: Color(0x1A17161A),
                      padding: EdgeInsets.all(8.0),
                      child: Text(
                        "Answering Duration (Hours)",
                        style: TextStyle(
                          fontSize: 16.0,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    _question.state.toInt() == 0
                        ? Row(
                            children: <Widget>[
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Text(
                                    (_question.maxDuration.toInt() / 60 / 60)
                                        .toString(),
                                  ),
                                ),
                              ),
                              Spacer(),
                              Countdown(
                                _remainingTime,
                                _question.state.toInt(),
                                _votePhase,
                                _rewardPhase,
                                _timeExtension,
                                _balanceError,
                                _fixBalance,
                              ),
                            ],
                          )
                        : Align(
                            alignment: Alignment.centerLeft,
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                (_question.maxDuration.toInt() / 60 / 60)
                                    .toString(),
                              ),
                            ),
                          ),
                  ],
                ),
              ),
        _changeToRewarded
            ? Loader("Changing To Rewarded State")
            : Card(
                elevation: 5.0,
                child: Column(
                  children: <Widget>[
                    Container(
                      width: double.infinity,
                      color: Color(0x1A17161A),
                      padding: EdgeInsets.all(8.0),
                      child: Text(
                        "Voting Duration (Hours)",
                        style: TextStyle(
                          fontSize: 16.0,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    _question.state.toInt() == 1
                        ? Row(
                            children: <Widget>[
                              Align(
                                alignment: Alignment.centerLeft,
                                child: Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Text(
                                    (_question.maxDuration.toInt() / 60 / 60)
                                        .toString(),
                                  ),
                                ),
                              ),
                              Spacer(),
                              Countdown(
                                _remainingTime,
                                _question.state.toInt(),
                                _votePhase,
                                _rewardPhase,
                                _timeExtension,
                                _balanceError,
                                _fixBalance,
                              ),
                            ],
                          )
                        : Align(
                            alignment: Alignment.centerLeft,
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                (_question.maxDuration.toInt() / 60 / 60)
                                    .toString(),
                              ),
                            ),
                          ),
                  ],
                ),
              ),
        _buildImage(),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Center(
            child: Text(
              'Submit Your Answers Here',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(
            bottom: 4.0,
            top: 4.0,
          ),
          child: Text(
            'Note: To include math questions, delimit the latex format with \$\$',
            textAlign: TextAlign.left,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 8.0),
          child: RichText(
            text: new TextSpan(
              text: 'Link to Supported Latex Editor',
              style: new TextStyle(color: Colors.blue),
              recognizer: new TapGestureRecognizer()
                ..onTap = () {
                  launch('https://www.codecogs.com/latex/eqneditor.php');
                },
            ),
          ),
        ),
        _submittingAnswer
            ? Loader('Submitting Answer')
            : Builder(
                builder: (context) => Form(
                  key: _formKey,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      _buildAnswerForm(),
                      SizedBox(
                        height: 10.0,
                      ),
                      _buildAnswerImage(context),
                      _buildButton(),
                    ],
                  ),
                ),
              ),
        Row(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(left: 90.0),
              child: Center(
                child: Text(
                  'Answer(s) Submitted: ${_question.numOfAnswers}',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            Spacer(),
            IconButton(
              icon: _descending
                  ? Icon(
                      MdiIcons.sortDescending,
                      color: Colors.blue,
                    )
                  : Icon(
                      MdiIcons.sortAscending,
                      color: Colors.blue,
                    ),
              onPressed: () {
                _sortAnswer();
              },
            ),
          ],
        ),
        Divider(
          thickness: 2.0,
          color: Colors.black,
        ),
      ],
    );
  }

  Widget _buildQuestionDetailCard(String title, var content, int widgetType) {
    return Card(
      elevation: 5.0,
      child: Column(
        children: <Widget>[
          Container(
            width: double.infinity,
            color: Color(0x1A17161A),
            padding: EdgeInsets.all(8.0),
            child: Row(children: <Widget>[
              Text(
                title,
                style: TextStyle(
                  fontSize: 16.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              widgetType == 0
                  ? Padding(
                      padding: const EdgeInsets.only(left: 8.0),
                      child: RichText(
                        text: _latex
                            ? TextSpan(
                                text: 'Hide Latex',
                                style: TextStyle(
                                    color: Colors.blue,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12.0),
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () {
                                    setState(() {
                                      _latex = !_latex;
                                    });
                                  },
                              )
                            : TextSpan(
                                text: 'Show Latex',
                                style: TextStyle(
                                    color: Colors.blue,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12.0),
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () {
                                    setState(() {
                                      _latex = !_latex;
                                    });
                                  },
                              ),
                      ),
                    )
                  : SizedBox(),
            ]),
          ),
          widgetType == 0 && _latex
              ? Align(
                  alignment: Alignment.centerLeft,
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: TeXView(
                      teXHTML: content,
                      renderingEngine: RenderingEngine.MathJax,
                    ),
                  ),
                )
              : (widgetType == 0 && !_latex) || widgetType == 1
                  ? Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          content,
                        ),
                      ),
                    )
                  : Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: _buildTags(content),
                      ),
                    ),
        ],
      ),
    );
  }

  Widget _buildTags(tags) {
    return Tags(
      itemCount: tags.length, //
      spacing: 2.0, // required
      itemBuilder: (int index) {
        final item = tags[index];
        return ItemTags(
          key: Key(index.toString()),
          index: index,
          title: item,
          textStyle: TextStyle(
            fontSize: 12.0,
          ),
          splashColor: Colors.yellow,
          activeColor: Colors.deepOrange,
        );
      },
    );
  }

  Widget _buildImage() {
    return Padding(
      padding: const EdgeInsets.all(4.0),
      child: Container(
        decoration: BoxDecoration(
          color: Color(0x1A17161A),
          border: Border.all(
            color: Colors.grey,
          ),
          borderRadius: BorderRadius.all(Radius.circular(4.0)),
        ),
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _buildUploadedImage(),
          ],
        ),
      ),
    );
  }

  Widget _buildUploadedImage() {
    return Column(
      children: <Widget>[
        _question.imageNames.length == 0
            ? SizedBox()
            : Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text("Image(s) Uploaded"),
              ),
        _question.imageNames.length == 0
            ? SizedBox()
            : _buildImages(_question.imageHashes)
      ],
    );
  }

  Widget _buildImages(List imageHashes) {
    return Wrap(
      spacing: 2.0,
      runSpacing: 2.0,
      children: List<Widget>.generate(imageHashes.length, (int index) {
        return Padding(
          padding: const EdgeInsets.all(8.0),
          child: Image.network("https://ipfs.io/ipfs/${imageHashes[index]}"),
        );
      }),
    );
  }

  Widget _buildAnswerForm() {
    return TextFormField(
      maxLines: 6,
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter Answers",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _answers = null;
          });
          return 'Answer is Required!';
        }
        return null;
      },
      onSaved: (String value) {
        _answers = value;
      },
    );
  }

  Widget _buildAnswerImage(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color(0x1A17161A),
        border: Border.all(
          color: Colors.grey,
        ),
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
      ),
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          _buildUploadedAnswerImage(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: RaisedButton(
              elevation: 4.0,
              color: Colors.blue,
              child: Text(
                'Upload Image',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                ),
              ),
              onPressed: () => {_showChoiceDialog(context)},
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildUploadedAnswerImage() {
    return Column(
      children: <Widget>[
        _imageNameArray.length == 0
            ? SizedBox()
            : _imageNameArray.length == 0
                ? Loader("Uploading Image")
                : _buildImageChip(),
        _uploading ? Loader("Uploading Images") : SizedBox()
      ],
    );
  }

  Widget _buildImageChip() {
    return Wrap(
      spacing: 2.0,
      runSpacing: 2.0,
      children: List<Widget>.generate(_imageNameArray.length, (int index) {
        return Chip(
          backgroundColor: Colors.grey,
          labelStyle: TextStyle(color: Colors.white),
          label: Text(
            _imageNameArray[index],
            overflow: TextOverflow.ellipsis,
          ),
          onDeleted: () {
            setState(() {
              _imageNameArray.removeAt(index);
            });
          },
        );
      }),
    );
  }

  Future<void> _showChoiceDialog(BuildContext context) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Upload Image From:"),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                GestureDetector(
                  child: Text("Gallery"),
                  onTap: () {
                    _openGallery(context);
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(15.0),
                ),
                GestureDetector(
                  child: Text("Camera"),
                  onTap: () {
                    _openCamera(context);
                  },
                )
              ],
            ),
          ),
        );
      },
    );
  }

  _openGallery(BuildContext context) async {
    var imageFile = await ImagePicker.pickImage(source: ImageSource.gallery);
    Navigator.of(context).pop();
    if (imageFile != null) {
      setState(() {
        _uploading = true;
      });
      var fileName = imageFile.path.split("/").last;
      String fileHashes = await _ipfsService.getIpfsHash(imageFile);
      setState(() {
        _imageHashesArray.add(fileHashes);
        _imageNameArray.add(fileName);
      });
    }
    setState(() {
      _uploading = false;
    });
  }

  _openCamera(BuildContext context) async {
    var imageFile = await ImagePicker.pickImage(source: ImageSource.camera);
    if (imageFile != null) {
      setState(() {
        _uploading = true;
      });
      var fileName = imageFile.path.split("/").last;
      String fileHashes = await _ipfsService.getIpfsHash(imageFile);
      setState(() {
        _imageHashesArray.add(fileHashes);
        _imageNameArray.add(fileName);
      });
    }
    setState(() {
      _uploading = false;
    });
  }

  Widget _buildButton() {
    return FlatButton.icon(
      color: Colors.blue,
      icon: Icon(
        Icons.create,
        color: Colors.white,
      ),
      label: Text(
        'Submit Answers',
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
      disabledColor: Colors.grey,
      onPressed: _question.state.toInt() == 1
          ? null
          : () => {
                if (!_formKey.currentState.validate())
                  {}
                else
                  {_formKey.currentState.save()},
                _onSubmit(),
              },
    );
  }

  Widget _buildAnswerList() {
    if (_loading) {
      return Loader("Loading Answers");
    }
    return Wrap(
      spacing: 2.0,
      runSpacing: 2.0,
      children: List<Widget>.generate(_answerList.length, (int index) {
        final answer = _answerList.reversed.toList()[index];
        var answeredTime = DateFormat('d MMMM, y, h:mm:ssa').format(
            DateTime.fromMillisecondsSinceEpoch(answer.answerTime * 1000));
        return ListTile(
          contentPadding: EdgeInsets.all(0.0),
          leading: AvatarIcon(index % 70),
          title: Text(
            answer.answerer.toString(),
            style: TextStyle(
                color: Colors.black,
                fontSize: 14.0,
                fontWeight: FontWeight.bold),
          ),
          subtitle: Column(
            children: <Widget>[
              Align(
                alignment: Alignment.topLeft,
                child: Text(
                  answeredTime.toString(),
                  style: TextStyle(
                    fontSize: 13.0,
                  ),
                ),
              ),
              Row(
                children: <Widget>[
                  answer.rewarded
                      ? Row(
                          children: <Widget>[
                            Icon(
                              MdiIcons.certificate,
                              color: Colors.red,
                            ),
                            Text(
                              'Rewarded',
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.red,
                              ),
                            ),
                          ],
                        )
                      : SizedBox(),
                  Padding(
                    padding: const EdgeInsets.all(4.0),
                    child: Align(
                      alignment: Alignment.topLeft,
                      child: Icon(
                        MdiIcons.thumbUp,
                        size: 14.0,
                        color: Colors.grey,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 2.0),
                    child: Text(answer.numOfApprovals.toString()),
                  ),
                ],
              ),
              Align(
                alignment: Alignment.topLeft,
                child: RichText(
                  text: answer.showLatex
                      ? TextSpan(
                          text: 'Hide Latex',
                          style: TextStyle(
                              color: Colors.blue,
                              fontWeight: FontWeight.bold,
                              fontSize: 12.0),
                          recognizer: TapGestureRecognizer()
                            ..onTap = () {
                              setState(() {
                                answer.showLatex = !answer.showLatex;
                              });
                            },
                        )
                      : TextSpan(
                          text: 'Show Latex',
                          style: TextStyle(
                              color: Colors.blue,
                              fontWeight: FontWeight.bold,
                              fontSize: 12.0),
                          recognizer: TapGestureRecognizer()
                            ..onTap = () {
                              setState(() {
                                answer.showLatex = !answer.showLatex;
                              });
                            },
                        ),
                ),
              ),
              answer.showLatex
                  ? Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: TeXView(
                          teXHTML: answer.content,
                          renderingEngine: RenderingEngine.MathJax,
                        ),
                      ),
                    )
                  : Align(
                      alignment: Alignment.topLeft,
                      child: Text(
                        answer.content,
                        style: TextStyle(
                          fontSize: 14.0,
                          color: Colors.black,
                        ),
                      ),
                    ),
              _buildImages(answer.imageHashes),
              Align(
                alignment: Alignment.topLeft,
                child: FlatButton.icon(
                  color: Colors.green,
                  icon: Icon(
                    MdiIcons.thumbUp,
                    color: Colors.white,
                  ),
                  label: Text(
                    'Approve Answers',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 14,
                    ),
                  ),
                  onPressed: () {
                    _approveAnswer(index);
                  },
                ),
              ),
            ],
          ),
        );
      }),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          'Blockchain-Based Question Answering System',
          style: GoogleFonts.ubuntu(
            textStyle: TextStyle(fontSize: 16.0),
          ),
        ),
      ),
      drawer: DrawerComponent(
        emailAddress: _emailAddress,
        privateKey: _privateKey,
        accountType: _accountType,
      ),
      body: ListView(children: <Widget>[
        _loading
            ? Loader("Loading Question Information")
            : _approvingAnswer
                ? Loader("Approving Answer")
                : _fixError
                    ? Loader("Fixing Balance Error")
                    : _extendingTime
                        ? Loader("Extending Duration")
                        : _increasingReward
                            ? Loader("Increasing Reward")
                            : Container(
                                margin: EdgeInsets.all(4.0),
                                child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: <Widget>[
                                      _buildQuestionTable(),
                                      _question.state.toInt() == 0
                                          ? SizedBox()
                                          : _buildAnswerList(),
                                    ]),
                              ),
      ]),
    );
  }
}
