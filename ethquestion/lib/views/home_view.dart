import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/util/functions.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter_tags/tag.dart';
import 'package:ethquestion/data_object/question.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:ethquestion/contracts/question_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:google_fonts/google_fonts.dart';

class HomeView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  HomeView({Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _HomeViewState(this.emailAddress, this.privateKey, this.accountType);
  }
}

class _HomeViewState extends State<HomeView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;
  List<Question> _questionSummary;
  bool _reloadQuestion = false;
  int _questionLimit = 30;
  List<int> _questionLimitChoice = List<int>();
  Icon _currentIcon = Icon(Icons.search);
  Widget _searchBarText = Text(
    "Ethereum Question Answering System",
    style: GoogleFonts.ubuntu(
      textStyle: TextStyle(fontSize: 16.0),
    ),
  );
  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();
  FuzzySearch _fuzzySearch = FuzzySearch();

  final TextEditingController _controller = TextEditingController();
  bool _isSearching = false;
  List<Question> _searchResult = List<Question>();

  _HomeViewState(this._emailAddress, this._privateKey, this._accountType) {
    _controller.addListener(() {
      if (_controller.text.isEmpty) {
        setState(() {
          _isSearching = false;
        });
      } else {
        setState(() {
          _isSearching = true;
        });
      }
    });
  }

  @override
  void initState() {
    super.initState();
    _fetchQuestions();
  }

  _fetchQuestions() async {
    await _questionFactoryContract.initialiseContract();
    var deployedQuestions =
        await _questionFactoryContract.getDeployedQuestions();
    var summaries = [];
    List<Question> questions = [];

    for (var question in deployedQuestions[0]) {
      QuestionContract questionContract = QuestionContract(question);
      await questionContract.initialiseContract();
      var summary = await questionContract.getSummary();
      if (!summary[9]) {
        var answerList = await questionContract.getAnswerList();
        summary.add(answerList[0].length);
        summary.add(question);
        summary.add(answerList[0]);
        summaries.add(summary);
      }
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
    List<int> questionLimitChoice = List<int>();
    int choice = questions.length ~/ 30;
    for (var i = 0; i <= choice; i++) {
      questionLimitChoice.add(30 * (i + 1));
    }
    setState(() {
      this._questionSummary = questions.reversed.toList();
      this._questionLimitChoice = questionLimitChoice;
    });
  }

  void _handleSearchStart() {
    setState(() {
      _isSearching = true;
    });
  }

  void _handleSearchEnd() {
    setState(() {
      this._currentIcon = new Icon(
        Icons.search,
        color: Colors.white,
      );
      this._searchBarText = Text(
        "Ethereum Question Answering System",
        style: GoogleFonts.ubuntu(
          textStyle: TextStyle(fontSize: 16.0),
        ),
      );
      _isSearching = false;
      _controller.clear();
      _searchResult.clear();
    });
  }

  void _searchOperation(String searchText) {
    _searchResult.clear();
    if (_isSearching != null) {
      var result = _fuzzySearch.fuzzySearch(this._questionSummary, searchText);
      result.forEach((r) {
        setState(() {
          _searchResult.add(_questionSummary[r.item['index']]);
        });
      });
    }
  }

  void _filterTag(String searchText) {
    _searchResult.clear();
    if (_isSearching != null) {
      for (int i = 0; i < _questionSummary.length; i++) {
        String tags = _questionSummary[i].tag.toString();
        if (tags.contains(searchText.toLowerCase())) {
          setState(() {
            _searchResult.add(_questionSummary[i]);
          });
        }
      }
    }
  }

  void _sortByAscendingPhase() {
    setState(() {
      _questionSummary.sort((a, b) => a.state.toInt() - b.state.toInt());
    });
  }

  void _sortByDescendingPhase() {
    setState(() {
      _questionSummary.sort((a, b) => b.state.toInt() - a.state.toInt());
    });
  }

  void _sortByAscendingAnswers() {
    setState(() {
      _questionSummary.sort((a, b) => a.numOfAnswers - b.numOfAnswers);
    });
  }

  void _sortByDescendingAnswers() {
    setState(() {
      _questionSummary.sort((a, b) => b.numOfAnswers - a.numOfAnswers);
    });
  }

  void _sortByAscendingRewards() {
    setState(() {
      _questionSummary.sort((a, b) => a.reward.toInt() - b.reward.toInt());
    });
  }

  void _sortByDescendingRewards() {
    setState(() {
      _questionSummary.sort((a, b) => b.reward.toInt() - a.reward.toInt());
    });
  }

  Widget _buildQuestionList() {
    if (_questionSummary == null || _reloadQuestion)
      return Loader("Loading Questions");
    else if (_searchResult.length != 0 || _controller.text.isNotEmpty) {
      return ListView.builder(
        itemCount: _searchResult.length,
        itemBuilder: (BuildContext context, int index) =>
            _buildQuestionCard(context, index, _searchResult),
      );
    } else {
      return ListView.builder(
        itemCount: _questionSummary.length,
        itemBuilder: (BuildContext context, int index) =>
            _buildQuestionCard(context, index, _questionSummary),
      );
    }
  }

  Widget _buildQuestionCard(BuildContext context, int index, List content) {
    final question = content[index];
    return Container(
      child: GestureDetector(
        onTap: () => Navigator.pushNamed(
          context,
          "/showQuestion",
          arguments: [_emailAddress, _privateKey, _accountType, question],
        ),
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: <Widget>[
                Column(
                  children: <Widget>[
                    Row(children: <Widget>[
                      Text(question.questionTitle,
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                            color: Colors.blue,
                          )),
                    ]),
                    Row(children: <Widget>[
                      Text(
                          "Number of Answers(s): ${question.numOfAnswers.toString()}"),
                    ]),
                    Row(children: <Widget>[
                      Text(
                          "Reward: ${(question.reward.toInt() * 10e-5).toString()} EQT(s)"),
                      Spacer(),
                      question.state.toInt() == 0
                          ? Text(
                              "ANSWERING PHASE",
                              style: TextStyle(
                                  color: Colors.red,
                                  fontWeight: FontWeight.bold),
                            )
                          : question.state.toInt() == 1
                              ? Text(
                                  "VOTING PHASE",
                                  style: TextStyle(
                                      color: Colors.amber,
                                      fontWeight: FontWeight.bold),
                                )
                              : Text(
                                  "REWARDED PHASE",
                                  style: TextStyle(
                                      color: Colors.green,
                                      fontWeight: FontWeight.bold),
                                )
                    ]),
                    Row(children: <Widget>[
                      _buildTags(question.tag),
                    ]),
                  ],
                ),
              ],
            ),
          ),
        ),
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
            fontSize: 10,
          ),
          splashColor: Colors.yellow,
          activeColor: Colors.deepOrange,
          onPressed: (item) {
            item.active ? _handleSearchEnd() : _filterTag(item.title);
          },
        );
      },
    );
  }

  Future<void> _showSortingDialog(BuildContext context) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Sort By:"),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                GestureDetector(
                  child: Text("Ascending Phase"),
                  onTap: () {
                    _sortByAscendingPhase();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
                GestureDetector(
                  child: Text("Descending Phase"),
                  onTap: () {
                    _sortByDescendingPhase();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
                GestureDetector(
                  child: Text("Ascending Answers"),
                  onTap: () {
                    _sortByAscendingAnswers();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
                GestureDetector(
                  child: Text("Descending Answers"),
                  onTap: () {
                    _sortByDescendingAnswers();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
                GestureDetector(
                  child: Text("Ascending Rewards"),
                  onTap: () {
                    _sortByAscendingRewards();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
                GestureDetector(
                  child: Text("Descending Rewards"),
                  onTap: () {
                    _sortByDescendingRewards();
                    Navigator.of(context).pop();
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
                GestureDetector(
                  child: Text("No Sort"),
                  onTap: () {
                    Navigator.pushNamed(context, "/home",
                        arguments: [_emailAddress, _privateKey, _accountType]);
                  },
                ),
                Padding(
                  padding: EdgeInsets.all(10.0),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Future<void> _showQuestionLimitDialog(BuildContext context) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Show How Many Questions"),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                for (int i in _questionLimitChoice)
                  GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text("$i Questions"),
                    ),
                    onTap: () async {
                      setState(() {
                        Navigator.of(context).pop();
                        _reloadQuestion = true;
                      });
                      await _fetchQuestions();
                      setState(() {
                        _questionLimit = i;
                        if (_questionSummary.length > _questionLimit) {
                          _questionSummary =
                              _questionSummary.sublist(0, _questionLimit);
                        }
                        _reloadQuestion = false;
                      });
                    },
                  ),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: this._searchBarText,
        actions: <Widget>[
          IconButton(
            onPressed: () {
              setState(() {
                if (this._currentIcon.icon == Icons.search) {
                  this._currentIcon = new Icon(
                    Icons.close,
                    color: Colors.white,
                  );
                  this._searchBarText = new TextField(
                    controller: _controller,
                    style: new TextStyle(
                      color: Colors.white,
                    ),
                    decoration: new InputDecoration(
                        prefixIcon: new Icon(Icons.search, color: Colors.white),
                        hintText: "Search...",
                        hintStyle: new TextStyle(color: Colors.white)),
                    onChanged: _searchOperation,
                  );
                  _handleSearchStart();
                } else {
                  _handleSearchEnd();
                }
              });
            },
            icon: _currentIcon,
          )
        ],
      ),
      drawer: DrawerComponent(
        emailAddress: _emailAddress,
        privateKey: _privateKey,
        accountType: _accountType,
      ),
      body: Container(
        margin: EdgeInsets.all(4.0),
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 10,
            ),
            Center(
              child: Text(
                'Questions Posted',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Row(
              children: <Widget>[
                Align(
                  alignment: Alignment.topLeft,
                  child: Padding(
                    padding: const EdgeInsets.only(
                        left: 6.0, top: 10.0, bottom: 10.0),
                    child: RichText(
                      text: new TextSpan(
                        text: 'Tap Here To Select Sorting Options',
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                              color: Colors.red,
                              fontWeight: FontWeight.bold,
                              fontSize: 12.0),
                        ),
                        recognizer: new TapGestureRecognizer()
                          ..onTap = () {
                            _showSortingDialog(context);
                          },
                      ),
                    ),
                  ),
                ),
                Spacer(),
                Align(
                  alignment: Alignment.topLeft,
                  child: Padding(
                    padding: const EdgeInsets.only(
                        top: 10.0, bottom: 10.0, right: 4.0),
                    child: RichText(
                      text: new TextSpan(
                        text: 'Adjust Viewing Limit',
                        style: GoogleFonts.ubuntu(
                          textStyle: TextStyle(
                              color: Colors.red,
                              fontWeight: FontWeight.bold,
                              fontSize: 12.0),
                        ),
                        recognizer: new TapGestureRecognizer()
                          ..onTap = () {
                            _showQuestionLimitDialog(context);
                          },
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Expanded(
              child: _buildQuestionList(),
            ),
          ],
        ),
      ),
    );
  }
}
