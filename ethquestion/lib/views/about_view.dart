import 'package:flutter/material.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:google_fonts/google_fonts.dart';

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
                          'SCSE19-0299: Block-Chain Based Question Answering System',
                          textAlign: TextAlign.center,
                          style: GoogleFonts.ubuntu(
                            textStyle: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
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
                          'Project Details',
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
                          'This is an experimental system for School Of Computer Science & Engineereing (SCSE) Final Year Project titled SCSE19-0299.',
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
                          'System Rules & Guidelines',
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
                              TextSpan(text: "No posting of "),
                              TextSpan(
                                text: "Assignments ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "or "),
                              TextSpan(
                                text: "Tutorial Questions ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "is allowed. Fradulent accounts will be "),
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
                          'Getting EthQuestionToken (EQT)',
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
                                      'EthQuestionToken (EQT) is a cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given'),
                              TextSpan(
                                text: " 10 EQTs ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      'upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question. Additionally, user can exchange points earned through their participation on the system. '),
                              TextSpan(
                                text: "5 EQTs ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "for every "),
                              TextSpan(
                                text: "100 points ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "earned."),
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
                          'Leaderboard',
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
                        child: Text(
                          'Accumulating Points',
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
                          'Points can be earned through the following ways:',
                          textAlign: TextAlign.left,
                          style: GoogleFonts.ubuntu(
                            textStyle: TextStyle(
                              fontSize: 15,
                              color: Colors.black,
                            ),
                          ),
                        ),
                      ),
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
                                text: "Asking Questions With Reward Awarded: ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "5 Points"),
                            ],
                          ),
                        ),
                      ),
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
                                text: "Answer Selected: ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "4 Points"),
                            ],
                          ),
                        ),
                      ),
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
                                text: "Submit Answer: ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "2 Points"),
                            ],
                          ),
                        ),
                      ),
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
                                text: "Approve Answer with Highest Approvals: ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "2 Points"),
                            ],
                          ),
                        ),
                      ),
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
                                text: "Approving An Answer: ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "1 Point"),
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
                          'System Functionality',
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
                              TextSpan(text: "Access using "),
                              TextSpan(
                                text: "Ask Question. ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "Each creation of new question requires at least "),
                              TextSpan(
                                text: "1 EQT ",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "as the reward. In the event that there are no answers provided within the duration specified, the reward will be returned to the owner of the question."),
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
                          'Provide Answer To Question',
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
                            style:GoogleFonts.ubuntu(
                              textStyle: TextStyle(
                                fontSize: 13,
                                color: Colors.black,
                              ),
                            ),
                            children: <TextSpan>[
                              TextSpan(
                                  text:
                                      "All questions posted can be view from the Home Page access via "),
                              TextSpan(
                                text: '"Home".',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      " Clicking on the question title will provide additional details on the question as well as providing the form to submit an answer for the question. No EQT are required for answering of question."),
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
                          'Approving of Answers',
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
                              TextSpan(text: "When the question is in the "),
                              TextSpan(
                                text: '"Voting Phase" ',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      ", all users can view all answers that are submitted and approve each answer depending on it's relevance and helpfulness. Each approval requires "),
                              TextSpan(
                                text: '1 EQT. ',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(text: "Each user can only "),
                              TextSpan(
                                text: 'approve each answer once. ',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "After the 'Voting Phase', users who approved the answer with the highest approvals will have their "),
                              TextSpan(
                                text: '1 EQT ',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                  text:
                                      "returned. Additionally, EQT from users who approve other answers would be distributed among users who approved the answer with the highest approvals."),
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
