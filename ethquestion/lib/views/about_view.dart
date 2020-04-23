import 'package:flutter/material.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/gestures.dart';

class AboutView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  AboutView({Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _AboutViewState(emailAddress, privateKey, accountType);
  }
}

class _AboutViewState extends State<AboutView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;

  _AboutViewState(this._emailAddress, this._privateKey, this._accountType);

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
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.all(24),
          child: Column(
            children: <Widget>[
              Container(
                child: Column(
                  children: <Widget>[
                    Material(
                      color: Colors.white,
                      elevation: 5.0,
                      shadowColor: Color(0x802196F3),
                      child: Center(
                        heightFactor: 2.0,
                        child: Text(
                          'What Can I Do Here?',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 15,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: Text(
                          'Ask New Question',
                          textAlign: TextAlign.left,
                          style: GoogleFonts.ubuntu(
                            textStyle: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: RichText(
                          text: TextSpan(
                            style: GoogleFonts.ubuntu(
                              textStyle: TextStyle(
                                fontSize: 13,
                                color: Colors.black,
                              ),
                            ),
                            children: <TextSpan>[
                              TextSpan(text: "You need to have at least "),
                              TextSpan(
                                text: "1 EQT ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "as the reward for the question. If your question has no answers provided within the duration specified, the reward will be returned to you. Do note that you cannot ask  "),
                              TextSpan(
                                text: "Assignments ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "or "),
                              TextSpan(
                                text: "Tutorial Questions. ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "Fraudulent accounts will be "),
                              TextSpan(
                                text:
                                    "removed from the system and banned from future use.",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: Text(
                          'Answer Question',
                          textAlign: TextAlign.left,
                          style: GoogleFonts.ubuntu(
                            textStyle: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: Text(
                          'You can provide answers to questions asked by others on the Home page. Do note that you do not need to use any EQT to provide an answer.',
                          textAlign: TextAlign.left,
                          style: GoogleFonts.ubuntu(
                            textStyle: TextStyle(
                              fontSize: 15,
                            ),
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: Text(
                          'Approve Answers',
                          textAlign: TextAlign.left,
                          style: GoogleFonts.ubuntu(
                            textStyle: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: RichText(
                          text: TextSpan(
                            style: GoogleFonts.ubuntu(
                              textStyle: TextStyle(
                                fontSize: 13,
                                color: Colors.black,
                              ),
                            ),
                            children: <TextSpan>[
                              TextSpan(
                                  text:
                                      "You can approve answers provided for each question during "),
                              TextSpan(
                                text: "Voting Phase ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "depending on its relevance and usefulness. A deposit of "),
                              TextSpan(
                                text: "1 EQT ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "will be deducted for each answer you approve. The deposit will be returned to you only if the answer you approved of is eventually awarded the reward. All forefited deposits will be distributed among other users who approved the answer that is awarded."),
                            ],
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Material(
                      color: Colors.white,
                      elevation: 5.0,
                      shadowColor: Color(0x802196F3),
                      child: Center(
                        heightFactor: 2.0,
                        child: Text(
                          'What is EthQuestionToken (EQT)?',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        child: RichText(
                          text: TextSpan(
                            style: GoogleFonts.ubuntu(
                              textStyle: TextStyle(
                                fontSize: 13,
                                color: Colors.black,
                              ),
                            ),
                            children: <TextSpan>[
                              TextSpan(
                                  text:
                                  "Cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given "),
                              TextSpan(
                                text: "10 EQTs ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                  "upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question."),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
