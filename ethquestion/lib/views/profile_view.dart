import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/contracts/token_sale_contract.dart';
import 'package:ethquestion/util/functions.dart';
import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:ethquestion/contracts/profile_contract.dart';
import 'package:ethquestion/contracts/token_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:ethquestion/components/dialogs.dart';
import 'package:web3dart/web3dart.dart';
import 'package:google_fonts/google_fonts.dart';

class ProfileView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  ProfileView({Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _ProfileViewState(emailAddress, privateKey, accountType);
  }
}

class _ProfileViewState extends State<ProfileView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;
  String _publicAddress;
  BigInt _token;
  BigInt _points;
  List _transactions;
  bool _loading = true;
  bool _showTransactions = false;

  final _formTopUpKey = GlobalKey<FormState>();
  int _currentTokenPrice;
  int _topUpAmount;
  bool _toppingUp = false;
  bool _exchanging = false;

  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();
  EthQuestionTokenContract _ethQuestionTokenContract =
      EthQuestionTokenContract();
  EthQuestionTokenSaleContract _ethQuestionTokenSaleContract =
      EthQuestionTokenSaleContract();
  Logger _logger = Logger();

  _ProfileViewState(this._emailAddress, this._privateKey, this._accountType);

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  _fetchData() async {
    await _questionFactoryContract.initialiseContract();
    await _ethQuestionTokenContract.initialiseContract();
    await _ethQuestionTokenSaleContract.initialiseContract();
    final profileAddress =
        await _questionFactoryContract.getProfile(_privateKey);
    ProfileContract profileContract = new ProfileContract(profileAddress[0]);
    await profileContract.initialiseContract();
    var token = await _ethQuestionTokenContract.balanceOf(_privateKey);
    var point = await profileContract.getPoints();
    var transactions = await profileContract.getTransactions();
    var publicAddress = await profileContract.getEthAccount();
    var currentTokenPrice = await _ethQuestionTokenSaleContract.getTokenPrice();
    setState(() {
      _token = token[0];
      _points = point[0];
      _transactions = transactions[0];
      _publicAddress = publicAddress[0].toString();
      _loading = false;
      _currentTokenPrice = currentTokenPrice[0].toInt();
    });
  }

  void _topUp() async {
    if (_topUpAmount == null) {
      return;
    }
    setState(() {
      _toppingUp = true;
    });
    try {
      var logTransaction = _logger.logging("Top Up: $_topUpAmount EQT(s)");
      var profileAddress =
          await _questionFactoryContract.getProfile(_privateKey);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      TransactionReceipt receipt =
          await _ethQuestionTokenSaleContract.buyTokens(
              BigInt.from(_topUpAmount * 1e4),
              _ethQuestionTokenContract.contractAddress,
              profileContract.contractAddress,
              logTransaction,
              _privateKey);
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
      Navigator.pushNamed(context, "/home",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _toppingUp = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  void _exchange() async {
    setState(() {
      _exchanging = true;
    });
    try {
      var logTransaction = _logger.logging("Exchange: 100 Points for 5 EQT(s)");
      var profileAddress =
          await _questionFactoryContract.getProfile(_privateKey);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      TransactionReceipt receipt =
          await _ethQuestionTokenSaleContract.exchangeTokens(
              _ethQuestionTokenContract.contractAddress,
              profileContract.contractAddress,
              logTransaction,
              _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Exchange of EQT Balance Unsuccessful. Please Try Again.");
        setState(() {
          _exchanging = false;
        });
        return;
      }
      setState(() {
        _exchanging = false;
      });
      Navigator.pushNamed(context, "/home",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _exchanging = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  Widget _buildProfileCard() {
    if (_token == null ||
        _points == null ||
        _transactions == null ||
        _transactions == null ||
        _accountType == null ||
        _publicAddress == null) {
      return Loader("Loading Profile Details");
    }
    return Container(
      padding: const EdgeInsets.all(4.0),
      width: double.infinity,
      child: Card(
        shape: RoundedRectangleBorder(
          side: BorderSide(
            color: Colors.redAccent,
            width: 1.0,
          ),
          borderRadius: BorderRadius.circular(
            4.0,
          ),
        ),
        elevation: 4.0,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              Icon(
                Icons.account_circle,
                size: 60.0,
              ),
              Text(
                "Account Details:",
                style: GoogleFonts.ubuntu(
                  textStyle: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ),
              Text(_publicAddress,
                  style:
                  GoogleFonts.ubuntu(
                    textStyle: TextStyle(
                      color: Colors.red,
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
              ),
              Padding(
                padding: const EdgeInsets.all(4.0),
                child: Text(_accountType,
                    style: TextStyle(
                      color: Colors.grey,
                    )),
              ),
              RichText(
                text: TextSpan(
                  style: GoogleFonts.ubuntu(
                    textStyle: TextStyle(
                      fontSize: 14,
                      color: Colors.black,
                    ),
                  ),
                  children: <TextSpan>[
                    TextSpan(
                      text: "EQT Balance: ",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    TextSpan(
                        text: "${(_token.toInt() * 10e-5).toStringAsFixed(4)}"),
                  ],
                ),
              ),
              RichText(
                text: TextSpan(
                  style: GoogleFonts.ubuntu(
                    textStyle: TextStyle(
                      fontSize: 14,
                      color: Colors.black,
                    ),
                  ),
                  children: <TextSpan>[
                    TextSpan(
                      text: "Points Accumulated: ",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    TextSpan(text: "${(_points).toString()}"),
                  ],
                ),
              ),
              RichText(
                text: TextSpan(
                  style: GoogleFonts.ubuntu(
                    textStyle: TextStyle(
                      fontSize: 14,
                      color: Colors.black,
                    ),
                  ),
                  children: <TextSpan>[
                    TextSpan(
                      text: "Valid Email Address: ",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    TextSpan(text: _emailAddress),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTransaction() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Material(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(
            4.0,
          ),
        ),
        color: Colors.white,
        elevation: 4.0,
        shadowColor: Color(0x802196F3),
        child: Row(
          children: <Widget>[
            Center(
              heightFactor: 2.0,
              child: Padding(
                padding: const EdgeInsets.only(left: 80.0),
                child: Text(
                  'Transaction History',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            Spacer(),
            _buildButton(),
          ],
        ),
      ),
    );
  }

  Widget _buildButton() {
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
            child: _showTransactions
                ? IconButton(
                    icon: Icon(MdiIcons.minus),
                    color: Colors.white,
                    onPressed: () {
                      setState(() {
                        _showTransactions = false;
                      });
                    })
                : IconButton(
                    icon: Icon(MdiIcons.plus),
                    color: Colors.white,
                    onPressed: () {
                      setState(() {
                        _showTransactions = true;
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

  Widget _buildTopUpButton() {
    return RaisedButton(
      elevation: 4.0,
      color: Colors.red,
      child: Text(
        'Top Up',
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

  Widget _buildExchangeButton() {
    return RaisedButton(
      elevation: 4.0,
      color: Colors.red,
      child: Text(
        'Exchange EQT',
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
      onPressed: () => {_exchange()},
    );
  }

  Widget _buildTransactionList() {
    return Wrap(
      spacing: 2.0,
      runSpacing: 2.0,
      children: List<Widget>.generate(_transactions.length, (int index) {
        return ListTile(
          leading: Icon(MdiIcons.calendarMonth),
          title: Text(_transactions[index]),
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
      body: _loading
          ? Loader("Loading User Profile")
          : _toppingUp
              ? Loader("Topping Up EQT Balance")
              : _exchanging
                  ? Loader("Exchanging Points For EQTs")
                  : ListView(children: <Widget>[
                      Column(
                        children: <Widget>[
                          SizedBox(
                            height: 20,
                          ),
                          _buildProfileCard(),
                          Padding(
                            padding: const EdgeInsets.only(
                                top: 4.0, left: 16.0, right: 16.0),
                            child: Form(
                                key: _formTopUpKey,
                                child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: <Widget>[
                                      Padding(
                                        padding: const EdgeInsets.only(
                                          bottom: 4.0,
                                        ),
                                        child: Text(
                                          'Top Up EQT Balance [1 EQT = ${_currentTokenPrice * 1e-18} Ether(s)]',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                          textAlign: TextAlign.left,
                                        ),
                                      ),
                                      _buildTopUp(),
                                    ])),
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              _buildTopUpButton(),
                              SizedBox(width: 20),
                              _buildExchangeButton(),
                            ],
                          ),
                          _buildTransaction(),
                          _showTransactions
                              ? _buildTransactionList()
                              : SizedBox(
                                  height: 0,
                                ),
                        ],
                      ),
                    ]),
    );
  }
}
