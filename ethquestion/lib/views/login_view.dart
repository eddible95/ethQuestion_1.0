import 'package:ethquestion/components/dialogs.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:ethquestion/contracts/profile_contract.dart';
import 'package:ethquestion/contracts/credentials_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:google_fonts/google_fonts.dart';

class LoginView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _LoginViewState();
  }
}

class _LoginViewState extends State<LoginView> {
  String _emailAddress;
  String _privateKey;
  bool _loading = false;

  CredentialContract _credentialContract = CredentialContract();
  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();

  // Common in forms in Flutter
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  void _submit(BuildContext context) async {
    try {
      if (_privateKey == null || _emailAddress == null) {
        return;
      }
      setState(() {
        _loading = true;
      });
      await _credentialContract.initialiseContract();
      await _questionFactoryContract.initialiseContract();
      var emailAddress = await _credentialContract.getBinding(_privateKey);
      var blacklist =
          await _credentialContract.emailNotBlackList(_emailAddress);
      if (emailAddress.isEmpty || blacklist[0]) {
        setState(() {
          _loading = false;
        });
        CustomDialog(context, 'Credentials Error',
            'Email Not Registered or Email Address Blacklisted');
      } else {
        if (emailAddress[0] == _emailAddress) {
          final profileAddress =
              await _questionFactoryContract.getProfile(_privateKey);
          ProfileContract profileContract =
              new ProfileContract(profileAddress[0]);
          await profileContract.initialiseContract();
          var accountType = await profileContract.getAccountType();
          accountType[0].toString() == "0"
              ? accountType[0] = "Admin"
              : accountType[0] = "User";
          Navigator.pushReplacementNamed(context, "/home",
              arguments: [_emailAddress, _privateKey, accountType[0]]);
          setState(() {
            _loading = false;
          });
        } else {
          setState(() {
            _loading = false;
          });
          CustomDialog(context, 'Credentials Error',
              'Wrong Email Address or EthWallet Private Key');
        }
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
          return 'Remove 0x from Private Key';
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
          ? Loader("Authenticating Credentials")
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
                        'Login to your Account',
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
                    padding: const EdgeInsets.all(4),
                    child: Form(
                      key: _formKey,
                      child: Column(
                        children: <Widget>[
                          _buildEmail(),
                          SizedBox(height: 10),
                          _buildPrivateKey(),
                          SizedBox(height: 10),
                          RaisedButton(
                            color: Colors.blue,
                            child: Text(
                              'Login',
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
                              _submit(context),
                            },
                          ),
                          SizedBox(
                            height: 10,
                          ),
                        ],
                      ),
                    ),
                  ),
                  Text(
                    'Hi there, first time here?',
                    textAlign: TextAlign.center,
                  ),
                  RichText(
                    text: new TextSpan(
                      text: 'Register Now',
                      style: new TextStyle(color: Colors.blue),
                      recognizer: new TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.of(context)
                              .pushReplacementNamed('/register');
                        },
                    ),
                  ),
                ],
              ),
            ),
    );
  }
}
