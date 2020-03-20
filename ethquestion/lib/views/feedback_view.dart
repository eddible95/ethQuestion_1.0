import 'package:ethquestion/components/dialogs.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/contracts/feedback_contract.dart';
import 'package:flutter/material.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:web3dart/web3dart.dart';
import 'package:google_fonts/google_fonts.dart';

class FeedbackView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  FeedbackView({Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _FeedbackViewState(emailAddress, privateKey, accountType);
  }
}

class _FeedbackViewState extends State<FeedbackView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;

  FeedbackContract _feedbackContract = FeedbackContract();
  final _formKey = GlobalKey<FormState>();
  String _feedback;
  bool _like = true;
  bool _usefulness = true;
  bool _easy = true;
  bool _submitting = false;

  _FeedbackViewState(this._emailAddress, this._privateKey, this._accountType);

  void _onSubmit() async {
    try {
      await _feedbackContract.initialiseContract();
      setState(() {
        _submitting = true;
      });

      _feedback = 'Comments Provided By $_emailAddress: $_feedback';

      TransactionReceipt receipt = await _feedbackContract.updateFeedback(
          _like, _usefulness, _easy, _feedback, _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Submitting Feedback Unsuccessful. Please Try Again.");
        setState(() {
          _submitting = false;
        });
        return;
      }
      setState(() {
        _submitting = false;
      });
      Navigator.pushNamed(context, "/feedback",
          arguments: [_emailAddress, _privateKey, _accountType]);
    } catch (err) {
      setState(() {
        _submitting = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  Widget _buildCommentsField() {
    return TextFormField(
      maxLines: 6,
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Tell us more",
      ),
      onSaved: (String value) {
        _feedback = value;
      },
    );
  }

  Widget _buildButton() {
    return FlatButton.icon(
      color: Colors.blue,
      icon: Icon(
        Icons.create,
        color: Colors.white,
      ),
      label: Text(
        'Submit Feedback',
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
      onPressed: () => {
        _formKey.currentState.save(),
        _onSubmit(),
      },
    );
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
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.all(24),
          child: _submitting
              ? Loader("Submitting Feedback")
              : Column(
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
                                'Collection of Feedback For System',
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
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                  'Do you like the system?',
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    fontSize: 18.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Row(
                            children: <Widget>[
                              Align(
                                alignment: Alignment.topLeft,
                                child: Padding(
                                  padding: const EdgeInsets.only(left: 8.0),
                                  child: FlatButton.icon(
                                    color: Colors.green,
                                    icon: Icon(
                                      MdiIcons.thumbUp,
                                      color: Colors.white,
                                      size: 20.0,
                                    ),
                                    disabledColor: Colors.grey,
                                    label: Text(
                                      'Yes',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 14,
                                      ),
                                    ),
                                    onPressed: _like
                                        ? null
                                        : () {
                                            setState(() {
                                              _like = true;
                                            });
                                          },
                                  ),
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Align(
                                alignment: Alignment.topLeft,
                                child: FlatButton.icon(
                                  color: Colors.red,
                                  icon: Icon(
                                    MdiIcons.thumbUp,
                                    color: Colors.white,
                                    size: 20.0,
                                  ),
                                  disabledColor: Colors.grey,
                                  label: Text(
                                    'No',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 14,
                                    ),
                                  ),
                                  onPressed: !_like
                                      ? null
                                      : () {
                                          setState(() {
                                            _like = false;
                                          });
                                        },
                                ),
                              ),
                            ],
                          ),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Container(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                  'Do you find the system useful?',
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    fontSize: 18.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Row(
                            children: <Widget>[
                              Align(
                                alignment: Alignment.topLeft,
                                child: Padding(
                                  padding: const EdgeInsets.only(left: 8.0),
                                  child: FlatButton.icon(
                                    color: Colors.green,
                                    icon: Icon(
                                      MdiIcons.thumbUp,
                                      color: Colors.white,
                                      size: 20.0,
                                    ),
                                    disabledColor: Colors.grey,
                                    label: Text(
                                      'Yes',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 14,
                                      ),
                                    ),
                                    onPressed: _usefulness
                                        ? null
                                        : () {
                                            setState(() {
                                              _usefulness = true;
                                            });
                                          },
                                  ),
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Align(
                                alignment: Alignment.topLeft,
                                child: FlatButton.icon(
                                  color: Colors.red,
                                  icon: Icon(
                                    MdiIcons.thumbUp,
                                    color: Colors.white,
                                    size: 20.0,
                                  ),
                                  disabledColor: Colors.grey,
                                  label: Text(
                                    'No',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 14,
                                    ),
                                  ),
                                  onPressed: !_usefulness
                                      ? null
                                      : () {
                                          setState(() {
                                            _usefulness = false;
                                          });
                                        },
                                ),
                              ),
                            ],
                          ),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Container(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                  'Do you like the system easy to use?',
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    fontSize: 18.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Row(
                            children: <Widget>[
                              Align(
                                alignment: Alignment.topLeft,
                                child: Padding(
                                  padding: const EdgeInsets.only(left: 8.0),
                                  child: FlatButton.icon(
                                    color: Colors.green,
                                    icon: Icon(
                                      MdiIcons.thumbUp,
                                      color: Colors.white,
                                      size: 20.0,
                                    ),
                                    disabledColor: Colors.grey,
                                    label: Text(
                                      'Yes',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 14,
                                      ),
                                    ),
                                    onPressed: _easy
                                        ? null
                                        : () {
                                            setState(() {
                                              _easy = true;
                                            });
                                          },
                                  ),
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Align(
                                alignment: Alignment.topLeft,
                                child: FlatButton.icon(
                                  color: Colors.red,
                                  icon: Icon(
                                    MdiIcons.thumbUp,
                                    color: Colors.white,
                                    size: 20.0,
                                  ),
                                  disabledColor: Colors.grey,
                                  label: Text(
                                    'No',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 14,
                                    ),
                                  ),
                                  onPressed: !_easy
                                      ? null
                                      : () {
                                          setState(() {
                                            _easy = false;
                                          });
                                        },
                                ),
                              ),
                            ],
                          ),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Container(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                  'Any Suggestions for improvments or other comments?',
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    fontSize: 18.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Builder(
                            builder: (context) => Form(
                              key: _formKey,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: <Widget>[
                                  _buildCommentsField(),
                                  SizedBox(
                                    height: 10.0,
                                  ),
                                  _buildButton(),
                                ],
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
