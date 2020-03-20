import 'package:ethquestion/components/dialogs.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/contracts/credentials_contract.dart';
import 'package:ethquestion/contracts/profile_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:ethquestion/contracts/token_contract.dart';
import 'package:ethquestion/contracts/token_sale_contract.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:web3dart/web3dart.dart';
import 'package:flutter/gestures.dart';
import 'package:google_fonts/google_fonts.dart';

class RegisterView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _RegisterViewState();
  }
}

class _RegisterViewState extends State<RegisterView> {
  String _emailAddress;
  String _privateKey;
  bool _loading = false;
  CredentialContract _credentialContract = CredentialContract();
  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();
  EthQuestionTokenContract _ethQuestionTokenContract =
      EthQuestionTokenContract();
  EthQuestionTokenSaleContract _ethQuestionTokenSaleContract =
      EthQuestionTokenSaleContract();

  // Common in forms in Flutter
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  void _onSubmit() async {
    try {
      if (_privateKey == null || _emailAddress == null) {
        return;
      }
      setState(() {
        _loading = true;
      });
      await _credentialContract.initialiseContract();
      await _questionFactoryContract.initialiseContract();
      await _ethQuestionTokenContract.initialiseContract();
      await _ethQuestionTokenSaleContract.initialiseContract();
      var emailExist = await _credentialContract.emailNotExist(_emailAddress);
      var ethWalletRegistered =
          await _credentialContract.ethWalletNotRegistered(_privateKey);
      if (emailExist[0]) {
        setState(() {
          _loading = false;
        });
        CustomDialog(
            context, "Registration Error", "Email Already Registered.");
      } else if (ethWalletRegistered[0]) {
        setState(() {
          _loading = false;
        });
        CustomDialog(context, "Registration Error",
            "Ethereum Wallet Already Registered.");
      } else {
        if (_emailAddress == "admin") {
          TransactionReceipt receipt =
              await _questionFactoryContract.createAdmin(
                  _credentialContract.contractAddress,
                  _emailAddress,
                  _privateKey);
          if (!receipt.status) {
            CustomDialog(context, "Ethereum Error",
                "Creating Account Transaction Unsuccessful. Please Try Again.");
          }
        } else {
          TransactionReceipt receipt =
              await _questionFactoryContract.createProfile(
                  _credentialContract.contractAddress,
                  _emailAddress,
                  _ethQuestionTokenContract.contractAddress,
                  _ethQuestionTokenSaleContract.contractAddress,
                  _privateKey);
          if (!receipt.status) {
            CustomDialog(context, "Ethereum Error",
                "Creating Account Transaction Unsuccessful. Please Try Again.");
          }
        }
        setState(() {
          _loading = false;
        });
        final profileAddress =
        await _questionFactoryContract.getProfile(_privateKey);
        ProfileContract profileContract = ProfileContract(profileAddress[0]);
        var accountType = await profileContract.getAccountType();
        accountType[0].toString() == "0"
            ? accountType[0] = "Admin"
            : accountType[0] = "User";
        Navigator.pushReplacementNamed(context, "/home",
            arguments: [_emailAddress, _privateKey, accountType[0]]);
      }
    } catch (err) {
      setState(() {
        _loading = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  Widget _buildEmail() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: 'NTU Student Email Address',
        labelStyle: TextStyle(
          fontWeight: FontWeight.bold,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: 'example@e.ntu.edu.sg',
        icon: Icon(Icons.account_circle),
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _emailAddress = null;
          });
          return 'Email is Required!';
        }
        if (value != 'admin') {
          if (!RegExp(r"\S+@e\.ntu\.edu\.sg$").hasMatch(value)) {
            setState(() {
              _emailAddress = null;
            });
            return 'Invalid Email Address';
          }
        }
        return null;
      },
      onSaved: (String value) {
        _emailAddress = value;
      },
    );
  }

  Widget _buildPrivateKey() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: 'Ethereum Wallet Private Key',
        labelStyle: TextStyle(
          fontWeight: FontWeight.bold,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: 'c7C36f06d39d9f6E1AE44ae1Dc0a74d6A450166B',
        icon: Icon(MdiIcons.accountKey),
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _privateKey = null;
          });
          return 'Private Key is Required!';
        }
        if (RegExp(r"\0x\S+").hasMatch(value)) {
          setState(() {
            _privateKey = null;
          });
          return 'Remove 0x from private key';
        }
        if (!RegExp(r"[0-9a-fA-F]{4,}").hasMatch(value) ||
            (value.length % 2 == 1)) {
          setState(() {
            _privateKey = null;
          });
          return 'Invalid Private Key Format';
        }
        return null;
      },
      onSaved: (String value) {
        _privateKey = value;
      },
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
      resizeToAvoidBottomPadding: false,
      body: _loading
          ? Loader("Registering Account")
          : Container(
              margin: EdgeInsets.all(24),
              child: Column(
                children: <Widget>[
                  SizedBox(
                    height: 10,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Icon(
                        MdiIcons.ethereum,
                        size: 30.0,
                      ),
                      Text(
                        'Registering Account',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Container(
                    height: 300,
                    padding: const EdgeInsets.all(4),
                    child: Form(
                      key: _formKey,
                      child: Column(
                        children: <Widget>[
                          _buildEmail(),
                          SizedBox(
                            height: 10,
                          ),
                          _buildPrivateKey(),
                          SizedBox(height: 10),
                          RaisedButton(
                            color: Colors.blue,
                            child: Text(
                              'Register',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                              ),
                            ),
                            // Use formKey to tell the form to validate
                            onPressed: () => {
                              if (!_formKey.currentState.validate())
                                {}
                              else
                                {_formKey.currentState.save()},
                              _onSubmit(),
                            },
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Text(
                            'Already registered?',
                            textAlign: TextAlign.center,
                          ),
                          RichText(
                            text: new TextSpan(
                              text: 'Login Now',
                              style: new TextStyle(color: Colors.blue),
                              recognizer: new TapGestureRecognizer()
                                ..onTap = () {
                                  Navigator.of(context)
                                      .pushReplacementNamed('/login');
                                },
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
    );
  }
}
