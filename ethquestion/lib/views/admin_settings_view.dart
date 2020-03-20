import 'package:ethquestion/components/dialogs.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/contracts/credentials_contract.dart';
import 'package:ethquestion/contracts/feedback_contract.dart';
import 'package:ethquestion/contracts/profile_contract.dart';
import 'package:ethquestion/contracts/question_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:ethquestion/contracts/token_contract.dart';
import 'package:ethquestion/contracts/token_sale_contract.dart';
import 'package:ethquestion/data_object/question.dart';
import 'package:ethquestion/util/functions.dart';
import 'package:flutter/material.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:web3dart/web3dart.dart';
import 'package:ethquestion/data_object/user_details.dart';
import 'package:ethquestion/services/pdf_creator_service.dart';
import 'package:google_fonts/google_fonts.dart';

class AdminView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  AdminView({Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _AdminViewState(emailAddress, privateKey, accountType);
  }
}

class _AdminViewState extends State<AdminView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;

  bool _loading = false;
  List<Question> _questionSummary;
  List<UserDetails> _userInformation;
  int _currentTokenPrice;
  double _tokenBalance;
  double _etherBalance;
  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();
  FeedbackContract _feedbackContract = FeedbackContract();
  CredentialContract _credentialContract = CredentialContract();
  EthQuestionTokenContract _ethQuestionTokenContract =
      EthQuestionTokenContract();
  EthQuestionTokenSaleContract _ethQuestionTokenSaleContract =
      EthQuestionTokenSaleContract();
  Logger _logger = Logger();

  final _formTopUpKey = GlobalKey<FormState>();
  final _formTokenPriceKey = GlobalKey<FormState>();
  int _topUpAmount;
  int _tokenPrice;

  bool _blacklisting = false;
  bool _unblacklisting = false;
  bool _dispensing = false;
  bool _flaggingQuestion = false;
  bool _revertingQuestion = false;
  bool _showUser = false;
  bool _showQuestion = false;
  bool _toppingUp = false;
  bool _changingTokenPrice = false;
  bool _collectingEther = false;

  _AdminViewState(this._emailAddress, this._privateKey, this._accountType);

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  _fetchData() async {
    setState(() {
      _loading = true;
    });
    await _questionFactoryContract.initialiseContract();
    await _credentialContract.initialiseContract();
    await _ethQuestionTokenSaleContract.initialiseContract();
    await _ethQuestionTokenContract.initialiseContract();

    var deployedQuestions =
        await _questionFactoryContract.getDeployedQuestions();
    var summaries = [];
    List<Question> questions = [];

    for (var question in deployedQuestions[0]) {
      QuestionContract questionContract = QuestionContract(question);
      await questionContract.initialiseContract();
      var summary = await questionContract.getSummary();
      var answerList = await questionContract.getAnswerList();
      summary.add(answerList[0].length);
      summary.add(question);
      summary.add(answerList[0]);
      summaries.add(summary);
    }

    for (var summary in summaries) {
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
      questions.add(question);
    }

    List<UserDetails> userInformation = List<UserDetails>();
    var ethWallets = await _questionFactoryContract.getEthWallets();
    for (EthereumAddress publicAddress in ethWallets[0]) {
      var emailAddress =
          await _credentialContract.getBindingFromPublicAddress(publicAddress);
      var status = await _credentialContract.emailNotBlackList(emailAddress[0]);
      UserDetails userDetails =
          UserDetails(publicAddress, emailAddress[0], status[0]);
      userInformation.add(userDetails);
    }

    var tokenPrice = await _ethQuestionTokenSaleContract.getTokenPrice();
    var tokenBalance =
        await _ethQuestionTokenContract.balanceOfQuestionContract(
            _ethQuestionTokenSaleContract.contractAddress);
    var etherBalance = await _ethQuestionTokenSaleContract.getEtherBalance();
    setState(() {
      _loading = false;
      _questionSummary = questions;
      _userInformation = userInformation;
      _currentTokenPrice = tokenPrice[0].toInt();
      _tokenBalance = tokenBalance[0].toDouble();
      _etherBalance = etherBalance[0].toDouble();
    });
  }

  void _export(Question question) async {
    PDFCreator pdfCreator = PDFCreator();
    await pdfCreator.createQuestionPDF(question);
  }

  void _exportFeedback() async {
    await _feedbackContract.initialiseContract();
    var comments = await _feedbackContract.getComments();
    PDFCreator pdfCreator = PDFCreator();
    await pdfCreator.createFeedbackPDF(comments[0]);
  }

  void _blackList(emailAddress) async {
    setState(() {
      _blacklisting = true;
    });
    try {
      await _credentialContract.initialiseContract();
      TransactionReceipt receipt =
          await _credentialContract.blacklistEmail(_privateKey, emailAddress);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Blaclisting User Unsuccessful. Please Try Again.");
        setState(() {
          _blacklisting = false;
        });
        return;
      }
      setState(() {
        _blacklisting = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _blacklisting = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _unblackList(emailAddress) async {
    setState(() {
      _unblacklisting = true;
    });
    try {
      await _credentialContract.initialiseContract();
      TransactionReceipt receipt =
          await _credentialContract.unBlacklistEmail(_privateKey, emailAddress);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Blaclisting User Unsuccessful. Please Try Again.");
        setState(() {
          _unblacklisting = false;
        });
        return;
      }
      setState(() {
        _unblacklisting = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _unblacklisting = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _dispense(ethWallet) async {
    await _questionFactoryContract.initialiseContract();
    setState(() {
      _dispensing = true;
    });
    try {
      TransactionReceipt receipt = await _ethQuestionTokenContract.transfer(
          ethWallet, BigInt.from(10e4), _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Dispensing EQT(s) Unsuccessful. Please Try Again.");
        setState(() {
          _dispensing = false;
        });
        return;
      }
      var profileAddress =
          await _questionFactoryContract.getProfile(_privateKey);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      var logTransaction =
          _logger.logging("Awarded 10 EQT(s) for first time user");
      receipt =
          await profileContract.logTransaction(logTransaction, _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Dispensing EQT(s) Unsuccessful. Please Try Again.");
        setState(() {
          _dispensing = false;
        });
        return;
      }
      setState(() {
        _dispensing = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _dispensing = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _deleteQuestion(EthereumAddress questionAddress, String title) async {
    setState(() {
      _flaggingQuestion = true;
    });
    try {
      var logTransaction = _logger.logging("Delete Question Titled: $title");
      await _questionFactoryContract.initialiseContract();
      TransactionReceipt receipt = await _questionFactoryContract
          .deleteQuestion(questionAddress, logTransaction, _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Flagging Question Unsuccessful. Please Try Again.");
        setState(() {
          _flaggingQuestion = false;
        });
        return;
      }
      setState(() {
        _flaggingQuestion = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _flaggingQuestion = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _undoDeleteQuestion(
      EthereumAddress questionAddress, String title) async {
    setState(() {
      _revertingQuestion = true;
    });
    try {
      var logTransaction =
          _logger.logging("Undo Deletion Of Question Titled: $title");
      await _questionFactoryContract.initialiseContract();
      TransactionReceipt receipt = await _questionFactoryContract
          .undoDeleteQuestion(questionAddress, logTransaction, _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Undo Deletion Of Question Unsuccessful. Please Try Again.");
        setState(() {
          _revertingQuestion = false;
        });
        return;
      }
      setState(() {
        _revertingQuestion = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _revertingQuestion = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _topUp() async {
    if (_topUpAmount == null) {
      return;
    }
    setState(() {
      _toppingUp = true;
    });
    try {
      var logTransaction = _logger
          .logging("Added ${_topUpAmount.toString()} EQT(s) for exchange");
      TransactionReceipt receipt = await _ethQuestionTokenContract.transfer(
          _ethQuestionTokenSaleContract.contractAddress,
          BigInt.from(_topUpAmount * 1e4),
          _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Topping Up Of EQT Balance Unsuccessful. Please Try Again.");
        setState(() {
          _toppingUp = false;
        });
        return;
      }
      var profileAddress =
          await _questionFactoryContract.getProfile(_privateKey);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      receipt =
          await profileContract.logTransaction(logTransaction, _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Topping Up Of EQT Balance Unsuccessful. Please Try Again.");
        setState(() {
          _toppingUp = false;
        });
        return;
      }
      setState(() {
        _toppingUp = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _toppingUp = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _changeTokenPrice() async {
    if (_tokenPrice == null) {
      print("here");
      return;
    }
    setState(() {
      _changingTokenPrice = true;
    });
    try {
      var logTransaction = _logger.logging(
          "Change Token Price to ${_tokenPrice.toString()} wei per EQT");
      var profileAddress =
          await _questionFactoryContract.getProfile(_privateKey);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      TransactionReceipt receipt =
          await _ethQuestionTokenSaleContract.changeTokenPrice(
              BigInt.from(_tokenPrice),
              profileContract.contractAddress,
              logTransaction,
              _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Changing Of Token Price Unsuccessful. Please Try Again.");
        setState(() {
          _changingTokenPrice = false;
        });
        return;
      }
      setState(() {
        _changingTokenPrice = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _changingTokenPrice = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _collectEther() async {
    setState(() {
      _collectingEther = true;
    });
    try {
      var logTransaction =
          _logger.logging("Collect Ether from exchange of EQT(s)");
      var profileAddress =
          await _questionFactoryContract.getProfile(_privateKey);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      TransactionReceipt receipt = await _ethQuestionTokenSaleContract.endSale(
          _ethQuestionTokenContract.contractAddress,
          profileContract.contractAddress,
          logTransaction,
          _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Collecting Of Ether Unsuccessful. Please Try Again.");
        setState(() {
          _collectingEther = false;
        });
        return;
      }
      setState(() {
        _collectingEther = false;
      });
      Navigator.pushReplacementNamed(context, "/admin",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _collectingEther = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  Widget _buildList(List data) {
    if (data == null)
      return Loader("Loading Information");
    else if (data.runtimeType == _questionSummary.runtimeType) {
      return Wrap(
        spacing: 2.0,
        runSpacing: 2.0,
        children: List<Widget>.generate(data.length, (int index) {
          final question = data[index];
          return Card(
            shape: RoundedRectangleBorder(
              side: BorderSide(color: Colors.deepOrange, width: 1.0),
              borderRadius: BorderRadius.circular(4.0),
            ),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: <Widget>[
                  Text(
                    question.questionAddress.toString(),
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  RichText(
                    text: TextSpan(
                      style: TextStyle(
                        fontSize: 12.0,
                        color: Colors.black,
                      ),
                      children: <TextSpan>[
                        TextSpan(
                          text: "Title ",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        TextSpan(text: question.questionTitle),
                      ],
                    ),
                  ),
                  RichText(
                    text: TextSpan(
                      style: TextStyle(
                        fontSize: 12.0,
                        color: Colors.black,
                      ),
                      children: <TextSpan>[
                        TextSpan(
                          text: "Status: ",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        TextSpan(text: question.flagged ? "Flagged" : "Active"),
                      ],
                    ),
                  ),
                  question.flagged
                      ? FlatButton.icon(
                          color: Colors.green,
                          icon: Icon(
                            MdiIcons.undo,
                            color: Colors.white,
                          ),
                          label: Text(
                            'Revert',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 12.0,
                            ),
                          ),
                          onPressed: () {
                            _undoDeleteQuestion(question.questionAddress,
                                question.questionTitle);
                          },
                        )
                      : FlatButton.icon(
                          color: Colors.redAccent,
                          icon: Icon(
                            MdiIcons.flag,
                            color: Colors.white,
                          ),
                          label: Text(
                            'Flag',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 12.0,
                            ),
                          ),
                          onPressed: () {
                            _deleteQuestion(question.questionAddress,
                                question.questionTitle);
                          },
                        )
                ],
              ),
            ),
          );
        }),
      );
    } else {
      return Wrap(
        spacing: 2.0,
        runSpacing: 2.0,
        children: List<Widget>.generate(data.length, (int index) {
          final user = data[index];
          return Card(
            shape: RoundedRectangleBorder(
              side: BorderSide(color: Colors.deepOrange, width: 1.0),
              borderRadius: BorderRadius.circular(4.0),
            ),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: <Widget>[
                  Text(
                    user.ethereumAddress.toString(),
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  RichText(
                    text: TextSpan(
                      style: TextStyle(
                        fontSize: 12.0,
                        color: Colors.black,
                      ),
                      children: <TextSpan>[
                        TextSpan(
                          text: "Email Address: ",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        TextSpan(text: user.emailAddress),
                      ],
                    ),
                  ),
                  RichText(
                    text: TextSpan(
                      style: TextStyle(
                        fontSize: 12.0,
                        color: Colors.black,
                      ),
                      children: <TextSpan>[
                        TextSpan(
                          text: "Status: ",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        TextSpan(text: user.status ? "Blacklisted" : "Active"),
                      ],
                    ),
                  ),
                  Row(
                    children: <Widget>[
                      user.status
                          ? FlatButton.icon(
                              color: Colors.green,
                              icon: Icon(
                                MdiIcons.accountPlus,
                                color: Colors.white,
                              ),
                              label: Text(
                                'Revert',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 12.0,
                                ),
                              ),
                              onPressed: () {
                                _unblackList(user.emailAddress);
                              },
                            )
                          : FlatButton.icon(
                              color: Colors.redAccent,
                              icon: Icon(
                                MdiIcons.accountMinus,
                                color: Colors.white,
                              ),
                              label: Text(
                                'Blacklist',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 12.0,
                                ),
                              ),
                              onPressed: () {
                                _blackList(user.emailAddress);
                              },
                            ),
                      Spacer(),
                      FlatButton.icon(
                        color: Colors.lightGreen,
                        icon: Icon(
                          MdiIcons.ethereum,
                          color: Colors.white,
                        ),
                        label: Text(
                          'Dispense Tokens',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 12.0,
                          ),
                        ),
                        onPressed: () {
                          _dispense(user.ethereumAddress);
                        },
                      ),
                    ],
                  )
                ],
              ),
            ),
          );
        }),
      );
    }
  }

  Future<void> _showChoiceDialog(BuildContext context) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Select Question To Export:"),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                for (Question question in _questionSummary)
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: GestureDetector(
                      child: Text(
                        question.questionTitle,
                        style: TextStyle(fontSize: 16.0),
                      ),
                      onTap: () {
                        _export(question);
                        Navigator.of(context).pop();
                      },
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildUserListButton() {
    return Padding(
      padding: const EdgeInsets.only(right: 8.0),
      child: Material(
        color: Colors.white,
        child: Center(
          widthFactor: 0.5,
          heightFactor: 0.5,
          child: Ink(
            decoration: const ShapeDecoration(
              color: Colors.grey,
              shape: CircleBorder(),
            ),
            child: _showUser
                ? IconButton(
                    icon: Icon(MdiIcons.minus),
                    color: Colors.white,
                    onPressed: () {
                      setState(() {
                        _showUser = false;
                      });
                    })
                : IconButton(
                    icon: Icon(MdiIcons.plus),
                    color: Colors.white,
                    onPressed: () {
                      setState(() {
                        _showUser = true;
                      });
                    },
                  ),
          ),
        ),
      ),
    );
  }

  Widget _buildQuestionListButton() {
    return Padding(
      padding: const EdgeInsets.only(right: 8.0),
      child: Material(
        color: Colors.white,
        child: Center(
          widthFactor: 0.5,
          heightFactor: 0.5,
          child: Ink(
            decoration: const ShapeDecoration(
              color: Colors.grey,
              shape: CircleBorder(),
            ),
            child: _showQuestion
                ? IconButton(
                    icon: Icon(MdiIcons.minus),
                    color: Colors.white,
                    onPressed: () {
                      setState(() {
                        _showQuestion = false;
                      });
                    })
                : IconButton(
                    icon: Icon(MdiIcons.plus),
                    color: Colors.white,
                    onPressed: () {
                      setState(() {
                        _showQuestion = true;
                      });
                    },
                  ),
          ),
        ),
      ),
    );
  }

  Widget _buildTopUp() {
    return TextFormField(
      keyboardType: TextInputType.numberWithOptions(),
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter EQT Value",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _topUpAmount = null;
          });
          return 'Amount is Required!';
        }
        if (num.parse(value) <= 0) {
          setState(() {
            _topUpAmount = null;
          });
          return 'Invalid Format!';
        }
        return null;
      },
      onSaved: (String value) {
        _topUpAmount = int.parse(value);
      },
    );
  }

  Widget _buildTokenPrice() {
    return TextFormField(
      keyboardType: TextInputType.numberWithOptions(),
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "New Token Price",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _tokenPrice = null;
          });
          return 'Token Price is Required!';
        }
        if (num.parse(value) <= 0) {
          setState(() {
            _tokenPrice = null;
          });
          return 'Invalid Format!';
        }
        return null;
      },
      onSaved: (String value) {
        _tokenPrice = int.parse(value);
      },
    );
  }

  Widget _buildTopUpButton() {
    return RaisedButton(
      elevation: 4.0,
      color: Colors.red,
      child: Text(
        'Top Up Balance',
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
      onPressed: () => {
        if (!_formTopUpKey.currentState.validate())
          {}
        else
          {_formTopUpKey.currentState.save()},
        _topUp(),
      },
    );
  }

  Widget _buildTokenPriceButton() {
    return RaisedButton(
      elevation: 4.0,
      color: Colors.red,
      child: Text(
        'Change Token Price',
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
      onPressed: () => {
        if (!_formTokenPriceKey.currentState.validate())
          {}
        else
          {_formTokenPriceKey.currentState.save()},
        _changeTokenPrice(),
      },
    );
  }

  Widget _buildCollectButton() {
    return RaisedButton(
        elevation: 4.0,
        color: Colors.red,
        child: Text(
          'Collect Ether',
          style: TextStyle(
            color: Colors.white,
            fontSize: 16,
          ),
        ),
        onPressed: () => {_collectEther()});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          'Ethereum Question Answering System',
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
      body: ListView(
        children: <Widget>[
          Container(
            margin: EdgeInsets.all(24),
            child: _loading
                ? Loader("Loading Information")
                : _blacklisting
                    ? Loader("Blackisting User")
                    : _unblacklisting
                        ? Loader("Unblacklisting User")
                        : _dispensing
                            ? Loader('Dispensing Tokens')
                            : _flaggingQuestion
                                ? Loader("Flagging Question")
                                : _revertingQuestion
                                    ? Loader("Reverting Deleted Question")
                                    : _toppingUp
                                        ? Loader("Topping Up EQT Balance")
                                        : _changingTokenPrice
                                            ? Loader("Changing Token Price")
                                            : _collectingEther
                                                ? Loader("Collecting Ether")
                                                : Column(
                                                    children: <Widget>[
                                                      Container(
                                                        child: Column(
                                                          children: <Widget>[
                                                            Material(
                                                              color:
                                                                  Colors.white,
                                                              elevation: 5.0,
                                                              shadowColor: Color(
                                                                  0x802196F3),
                                                              child: Center(
                                                                heightFactor:
                                                                    2.0,
                                                                child: Text(
                                                                  'Exporting Questions & Answers As PDF',
                                                                  textAlign:
                                                                      TextAlign
                                                                          .center,
                                                                  style:
                                                                      TextStyle(
                                                                    fontSize:
                                                                        20,
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .bold,
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            Align(
                                                              alignment: Alignment
                                                                  .centerLeft,
                                                              child: Container(
                                                                child: Padding(
                                                                  padding:
                                                                      const EdgeInsets
                                                                              .all(
                                                                          8.0),
                                                                  child: Text(
                                                                    'Select the question to export the question and it\'s corresponding answers',
                                                                    textAlign:
                                                                        TextAlign
                                                                            .left,
                                                                    style:
                                                                        TextStyle(
                                                                      fontSize:
                                                                          14.0,
                                                                    ),
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            Align(
                                                              alignment:
                                                                  Alignment
                                                                      .topLeft,
                                                              child: FlatButton
                                                                  .icon(
                                                                color:
                                                                    Colors.red,
                                                                icon: Icon(
                                                                  MdiIcons
                                                                      .download,
                                                                  color: Colors
                                                                      .white,
                                                                ),
                                                                label: Text(
                                                                  'Select Question',
                                                                  style:
                                                                      TextStyle(
                                                                    color: Colors
                                                                        .white,
                                                                    fontSize:
                                                                        14,
                                                                  ),
                                                                ),
                                                                onPressed: () {
                                                                  _showChoiceDialog(
                                                                      context);
                                                                },
                                                              ),
                                                            ),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            Material(
                                                              color:
                                                                  Colors.white,
                                                              elevation: 5.0,
                                                              shadowColor: Color(
                                                                  0x802196F3),
                                                              child: Center(
                                                                heightFactor:
                                                                    2.0,
                                                                child: Text(
                                                                  'Exporting Feedback',
                                                                  textAlign:
                                                                      TextAlign
                                                                          .center,
                                                                  style:
                                                                      TextStyle(
                                                                    fontSize:
                                                                        20,
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .bold,
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            Align(
                                                              alignment:
                                                                  Alignment
                                                                      .topLeft,
                                                              child: FlatButton
                                                                  .icon(
                                                                color:
                                                                    Colors.red,
                                                                icon: Icon(
                                                                  MdiIcons
                                                                      .download,
                                                                  color: Colors
                                                                      .white,
                                                                ),
                                                                label: Text(
                                                                  'Export As PDF',
                                                                  style:
                                                                      TextStyle(
                                                                    color: Colors
                                                                        .white,
                                                                    fontSize:
                                                                        14,
                                                                  ),
                                                                ),
                                                                onPressed: () {
                                                                  _exportFeedback();
                                                                },
                                                              ),
                                                            ),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            Material(
                                                              color:
                                                                  Colors.white,
                                                              elevation: 5.0,
                                                              shadowColor: Color(
                                                                  0x802196F3),
                                                              child: Center(
                                                                heightFactor:
                                                                    2.0,
                                                                child: Text(
                                                                  'EthQuestionTokens (EQT) Exchange Settings',
                                                                  textAlign:
                                                                      TextAlign
                                                                          .center,
                                                                  style:
                                                                      TextStyle(
                                                                    fontSize:
                                                                        20,
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .bold,
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            Align(
                                                              alignment:
                                                                  Alignment
                                                                      .topLeft,
                                                              child: Padding(
                                                                padding:
                                                                    const EdgeInsets
                                                                            .only(
                                                                        top:
                                                                            8.0,
                                                                        bottom:
                                                                            8.0),
                                                                child:
                                                                    Container(
                                                                  child:
                                                                      RichText(
                                                                    text:
                                                                        TextSpan(
                                                                      style:
                                                                          TextStyle(
                                                                        fontSize:
                                                                            14.0,
                                                                        color: Colors
                                                                            .black,
                                                                      ),
                                                                      children: <
                                                                          TextSpan>[
                                                                        TextSpan(
                                                                            text:
                                                                                "Balance Available For Exchange: "),
                                                                        TextSpan(
                                                                          text:
                                                                              "${(_tokenBalance * 1e-4).toStringAsFixed(4)} EQT(s)",
                                                                          style:
                                                                              TextStyle(fontWeight: FontWeight.bold),
                                                                        ),
                                                                      ],
                                                                    ),
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            Form(
                                                                key:
                                                                    _formTopUpKey,
                                                                child: Column(
                                                                    crossAxisAlignment:
                                                                        CrossAxisAlignment
                                                                            .start,
                                                                    children: <
                                                                        Widget>[
                                                                      Padding(
                                                                        padding:
                                                                            const EdgeInsets.only(
                                                                          bottom:
                                                                              4.0,
                                                                        ),
                                                                        child:
                                                                            Text(
                                                                          'Top Up Amount*',
                                                                          style:
                                                                              TextStyle(fontWeight: FontWeight.bold),
                                                                          textAlign:
                                                                              TextAlign.left,
                                                                        ),
                                                                      ),
                                                                      _buildTopUp(),
                                                                    ])),
                                                            _buildTopUpButton(),
                                                            Align(
                                                              alignment:
                                                                  Alignment
                                                                      .topLeft,
                                                              child: Padding(
                                                                padding:
                                                                    const EdgeInsets
                                                                            .only(
                                                                        top:
                                                                            8.0,
                                                                        bottom:
                                                                            8.0),
                                                                child:
                                                                    Container(
                                                                  child:
                                                                      RichText(
                                                                    text:
                                                                        TextSpan(
                                                                      style:
                                                                          TextStyle(
                                                                        fontSize:
                                                                            14.0,
                                                                        color: Colors
                                                                            .black,
                                                                      ),
                                                                      children: <
                                                                          TextSpan>[
                                                                        TextSpan(
                                                                            text:
                                                                                "Ether Collected From Exchange: "),
                                                                        TextSpan(
                                                                          text:
                                                                              "${(_etherBalance * 1e-18).toString()} Ether(s)",
                                                                          style:
                                                                              TextStyle(fontWeight: FontWeight.bold),
                                                                        ),
                                                                      ],
                                                                    ),
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            _buildCollectButton(),
                                                            Align(
                                                              alignment:
                                                                  Alignment
                                                                      .topLeft,
                                                              child: Padding(
                                                                padding:
                                                                    const EdgeInsets
                                                                            .only(
                                                                        top:
                                                                            8.0,
                                                                        bottom:
                                                                            8.0),
                                                                child:
                                                                    Container(
                                                                  child:
                                                                      RichText(
                                                                    text:
                                                                        TextSpan(
                                                                      style:
                                                                          TextStyle(
                                                                        fontSize:
                                                                            14.0,
                                                                        color: Colors
                                                                            .black,
                                                                      ),
                                                                      children: <
                                                                          TextSpan>[
                                                                        TextSpan(
                                                                            text:
                                                                                "Current Token Price "),
                                                                        TextSpan(
                                                                          text:
                                                                              "${(_currentTokenPrice * 1e-18).toString()} Ether(s)",
                                                                          style:
                                                                              TextStyle(fontWeight: FontWeight.bold),
                                                                        ),
                                                                      ],
                                                                    ),
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                            Form(
                                                                key:
                                                                    _formTokenPriceKey,
                                                                child: Column(
                                                                    crossAxisAlignment:
                                                                        CrossAxisAlignment
                                                                            .start,
                                                                    children: <
                                                                        Widget>[
                                                                      Padding(
                                                                        padding:
                                                                            const EdgeInsets.only(
                                                                          bottom:
                                                                              4.0,
                                                                        ),
                                                                        child:
                                                                            Text(
                                                                          'Token Price in Wei*',
                                                                          style:
                                                                              TextStyle(fontWeight: FontWeight.bold),
                                                                          textAlign:
                                                                              TextAlign.left,
                                                                        ),
                                                                      ),
                                                                      _buildTokenPrice(),
                                                                    ])),
                                                            _buildTokenPriceButton(),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            Material(
                                                              color:
                                                                  Colors.white,
                                                              elevation: 5.0,
                                                              shadowColor: Color(
                                                                  0x802196F3),
                                                              child: Row(
                                                                  children: <
                                                                      Widget>[
                                                                    Center(
                                                                      heightFactor:
                                                                          2.0,
                                                                      child:
                                                                          Padding(
                                                                        padding:
                                                                            const EdgeInsets.only(left: 80.0),
                                                                        child:
                                                                            Text(
                                                                          'User Management',
                                                                          textAlign:
                                                                              TextAlign.center,
                                                                          style:
                                                                              TextStyle(
                                                                            fontSize:
                                                                                20,
                                                                            fontWeight:
                                                                                FontWeight.bold,
                                                                          ),
                                                                        ),
                                                                      ),
                                                                    ),
                                                                    Spacer(),
                                                                    _buildUserListButton(),
                                                                  ]),
                                                            ),
                                                            SizedBox(
                                                              height: 10,
                                                            ),
                                                            _showUser
                                                                ? _buildList(
                                                                    _userInformation)
                                                                : SizedBox(),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            Material(
                                                              color:
                                                                  Colors.white,
                                                              elevation: 5.0,
                                                              shadowColor: Color(
                                                                  0x802196F3),
                                                              child: Row(
                                                                  children: <
                                                                      Widget>[
                                                                    Center(
                                                                      heightFactor:
                                                                          2.0,
                                                                      child:
                                                                          Padding(
                                                                        padding:
                                                                            const EdgeInsets.only(left: 80.0),
                                                                        child:
                                                                            Text(
                                                                          'Removing Question',
                                                                          textAlign:
                                                                              TextAlign.center,
                                                                          style:
                                                                              TextStyle(
                                                                            fontSize:
                                                                                20,
                                                                            fontWeight:
                                                                                FontWeight.bold,
                                                                          ),
                                                                        ),
                                                                      ),
                                                                    ),
                                                                    Spacer(),
                                                                    _buildQuestionListButton(),
                                                                  ]),
                                                            ),
                                                            SizedBox(
                                                              height: 15,
                                                            ),
                                                            _showQuestion
                                                                ? _buildList(
                                                                    _questionSummary)
                                                                : SizedBox(),
                                                          ],
                                                        ),
                                                      ),
                                                    ],
                                                  ),
          ),
        ],
      ),
    );
  }
}
