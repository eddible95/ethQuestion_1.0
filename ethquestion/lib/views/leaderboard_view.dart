import 'package:ethquestion/contracts/profile_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:flutter/material.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:google_fonts/google_fonts.dart';

class LeaderboardView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  LeaderboardView(
      {Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _LeaderboardViewState(emailAddress, privateKey, accountType);
  }
}

class _LeaderboardViewState extends State<LeaderboardView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;
  bool _loading = false;
  bool _ethWalletAscending = false;
  bool _pointsAscending = false;
  List _accountPointMapping = List();

  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();

  _LeaderboardViewState(
      this._emailAddress, this._privateKey, this._accountType);

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
    var ethWallets = await _questionFactoryContract.getEthWallets();
    List accountPointMapping = List();

    for (var ethWallet in ethWallets[0]) {
      List accountPoint = List();
      var profileAddress =
          await _questionFactoryContract.getProfileByEthWallet(ethWallet);
      ProfileContract profileContract = ProfileContract(profileAddress[0]);
      await profileContract.initialiseContract();
      var points = await profileContract.getPoints();
      accountPoint.add(ethWallet);
      accountPoint.add(points[0]);
      accountPointMapping.add(accountPoint);
    }
    setState(() {
      _accountPointMapping = accountPointMapping;
      _loading = false;
    });
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
      body: _loading
          ? Loader("Loading Leaderboard Data")
          : ListView(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Material(
                    color: Colors.white,
                    elevation: 5.0,
                    shadowColor: Color(0x802196F3),
                    child: Center(
                      heightFactor: 2.0,
                      child: Text(
                        'Leaderboard Ranking',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                  child: DataTable(
                    columnSpacing: 20.0,
                    columns: <DataColumn>[
                      DataColumn(
                          label: Text(
                            "Ethereum Wallet Address",
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                                fontSize: 13.0),
                          ),
                          onSort: (i, b) {
                            if (_ethWalletAscending) {
                              setState(() {
                                _accountPointMapping.sort((a, b) =>
                                    a[0].toString().compareTo(b[0].toString()));
                                _ethWalletAscending = !_ethWalletAscending;
                              });
                            } else {
                              setState(() {
                                _accountPointMapping.sort((a, b) =>
                                    b[0].toString().compareTo(a[0].toString()));
                                _ethWalletAscending = !_ethWalletAscending;
                              });
                            }
                          }),
                      DataColumn(
                          label: Text(
                            "Points",
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                                fontSize: 13.0),
                          ),
                          onSort: (i, b) {
                            if (_pointsAscending) {
                              setState(() {
                                _accountPointMapping.sort(
                                    (a, b) => b[1].toInt() - a[1].toInt());
                              });
                              _pointsAscending = !_pointsAscending;
                            } else {
                              setState(() {
                                _accountPointMapping.sort(
                                    (a, b) => a[1].toInt() - b[1].toInt());
                              });
                              _pointsAscending = !_pointsAscending;
                            }
                          }),
                    ],
                    rows: _accountPointMapping
                        .map((data) => DataRow(cells: [
                              DataCell(
                                Text(
                                  data[0].toString(),
                                  style: TextStyle(fontSize: 12.0),
                                ),
                              ),
                              DataCell(
                                Text(
                                  data[1].toString(),
                                  style: TextStyle(fontSize: 12.0),
                                ),
                              ),
                            ]))
                        .toList(),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Material(
                    color: Colors.white,
                    elevation: 5.0,
                    shadowColor: Color(0x802196F3),
                    child: Center(
                      heightFactor: 2.0,
                      child: Text(
                        'How are points awarded?',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
                  child: Container(
                    child: RichText(
                      text: TextSpan(
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: "When you ask a question: ",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          TextSpan(text: "5 Points"),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
                  child: Container(
                    child: RichText(
                      text: TextSpan(
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: "When you are rewarded for your answer: ",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          TextSpan(text: "4 Points"),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
                  child: Container(
                    child: RichText(
                      text: TextSpan(
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: "When you submit an answer: ",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          TextSpan(text: "2 Points"),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
                  child: Container(
                    child: RichText(
                      text: TextSpan(
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: "When the answer you approved gets awarded: ",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          TextSpan(text: "2 Points"),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
                  child: Container(
                    child: RichText(
                      text: TextSpan(
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: "When you approve an answer: ",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          TextSpan(text: "1 Point"),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Material(
                    color: Colors.white,
                    elevation: 5.0,
                    shadowColor: Color(0x802196F3),
                    child: Center(
                      heightFactor: 2.0,
                      child: Text(
                        'What can I do with my points?',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
                  child: Container(
                    child: RichText(
                      text: TextSpan(
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                          ),
                        ),
                        children: <TextSpan>[
                          TextSpan(text: "Upon reaching "),
                          TextSpan(
                            text: "100 Points, ",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          TextSpan(text: "you can exchange for "),
                          TextSpan(
                            text: "5 EQTs.",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Material(
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
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: 18.0, right: 18.0, bottom: 4.0),
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
                SizedBox(height: 10),
              ],
            ),
    );
  }
}
