import 'package:ethquestion/components/dialogs.dart';
import 'package:ethquestion/components/loader.dart';
import 'package:ethquestion/contracts/token_contract.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter/gestures.dart';
import 'package:autocomplete_textfield/autocomplete_textfield.dart';
import 'package:ethquestion/contracts/question_contract.dart';
import 'package:ethquestion/contracts/question_factory_contract.dart';
import 'package:ethquestion/services/ipfs_service.dart';
import 'package:ethquestion/util/functions.dart';
import 'package:flutter/material.dart';
import 'package:ethquestion/components/drawer_menu.dart';
import 'package:image_picker/image_picker.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:web3dart/web3dart.dart';
import 'package:google_fonts/google_fonts.dart';

class NewQuestionView extends StatefulWidget {
  final String emailAddress;
  final String privateKey;
  final String accountType;

  NewQuestionView(
      {Key key, this.emailAddress, this.privateKey, this.accountType})
      : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _NewQuestionViewState(emailAddress, privateKey, accountType);
  }
}

class _NewQuestionViewState extends State<NewQuestionView> {
  String _emailAddress;
  String _privateKey;
  String _accountType;
  bool _loading = false;
  bool _uploading = false;

  final _formKey = GlobalKey<FormState>();
  String _questionTitle;
  String _content;
  List<String> _tag = List<String>();
  BigInt _reward;
  BigInt _maxDuration;
  List<String> _imageHashesArray = List<String>();
  List<String> _imageNameArray = List<String>();

  IpfsService _ipfsService = IpfsService();
  QuestionFactoryContract _questionFactoryContract = QuestionFactoryContract();
  EthQuestionTokenContract _ethQuestionTokenContract =
      EthQuestionTokenContract();
  Logger logger = Logger();

  GlobalKey<AutoCompleteTextFieldState<String>> key = new GlobalKey();
  List<String> _tagSuggestions;
  List _tagColors = [
    Colors.red,
    Colors.greenAccent,
    Colors.teal,
    Colors.black,
    Colors.deepOrange,
    Colors.indigoAccent
  ];

  _NewQuestionViewState(
      this._emailAddress, this._privateKey, this._accountType);

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  _fetchData() async {
    await _questionFactoryContract.initialiseContract();
    var deployedQuestions =
        await _questionFactoryContract.getDeployedQuestions();
    if (deployedQuestions != null) {
      List<String> tags = List<String>();
      for (var question in deployedQuestions[0]) {
        QuestionContract questionContract = new QuestionContract(question);
        await questionContract.initialiseContract();
        var summary = await questionContract.getSummary();
        tags = [...tags, ...summary[8]];
      }

      tags = [...new Set.from(tags)];
      tags = tags.reversed.toList();
      if (tags.length > 30) {
        tags = tags.sublist(0, 30);
      }
      setState(() {
        _tagSuggestions = tags;
      });
    } else {
      _tagSuggestions = [];
    }
  }

  void _onSubmit() async {
    if (_questionTitle == null ||
        _content == null ||
        _reward == null ||
        _maxDuration == null) {
      return;
    }
    setState(() {
      _loading = true;
    });
    try {
      await _ethQuestionTokenContract.initialiseContract();
      var logTransaction = logger.logging(
          "Created New Question: $_questionTitle [${_reward.toInt() * 10e-5} EQT(s) as reward]");
      EthereumAddress tokenAddress = _ethQuestionTokenContract.contractAddress;
      TransactionReceipt receipt =
          await _questionFactoryContract.createQuestion(
              _questionTitle,
              _content,
              _tag,
              _reward,
              _maxDuration,
              _imageHashesArray,
              _imageNameArray,
              logTransaction,
              tokenAddress,
              _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Creating Question Unsuccessful. Please Try Again.");
        return;
      }
      var questionAddress =
          await _questionFactoryContract.getLastDeployedQuestion();
      print("Question Address ${questionAddress[0]}");
      receipt = await _ethQuestionTokenContract.transfer(
          questionAddress[0], _reward, _privateKey);
      if (!receipt.status) {
        CustomDialog(context, "Ethereum Error",
            "Transfer Tokens To Question Unsuccessful. Please Try Again.");
        return;
      }
      setState(() {
        _loading = false;
        Navigator.pushReplacementNamed(context, "/home",
            arguments: [_emailAddress, _privateKey, _accountType]);
      });
    } catch (err) {
      setState(() {
        _loading = false;
      });
      CustomDialog(context, "Ethereum Error", err.toString());
    }
  }

  Widget _buildTitle() {
    return TextFormField(
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter Title",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _questionTitle = null;
          });
          return 'Title is Required!';
        }
        return null;
      },
      onSaved: (String value) {
        _questionTitle = value;
      },
    );
  }

  Widget _buildDescription() {
    return TextFormField(
      maxLines: 10,
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter Description",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _content = null;
          });
          return 'Description is Required!';
        }
        return null;
      },
      onSaved: (String value) {
        _content = value;
      },
    );
  }

  Widget _buildTags() {
    if (_tagSuggestions == null) {
      return Loader("Fetching Used Tags");
    }
    return SimpleAutoCompleteTextField(
      key: key,
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter Tags",
      ),
      controller: TextEditingController(),
      suggestions: _tagSuggestions,
      clearOnSubmit: true,
      textSubmitted: (text) => setState(() {
        if (text != "" && !_tag.contains(text.toLowerCase())) {
          setState(() {
            _tag.add(text.toLowerCase());
            _tagSuggestions.add(text.toLowerCase());
          });
        }
      }),
    );
  }

  Widget _buildSelectedTags() {
    return Wrap(
      spacing: 2.0,
      runSpacing: 2.0,
      children: List<Widget>.generate(_tag.length, (int index) {
        return Chip(
          backgroundColor: _tagColors[index % 6],
          labelStyle: TextStyle(color: Colors.white),
          label: Text(_tag[index]),
          onDeleted: () {
            setState(() {
              _tag.removeAt(index);
            });
          },
        );
      }),
    );
  }

  Widget _buildReward() {
    return TextFormField(
      keyboardType: TextInputType.numberWithOptions(),
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter your value of reward",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _reward = null;
          });
          return 'Reward is Required!';
        }
        if (num.parse(value) <= 0) {
          setState(() {
            _reward = null;
          });
          return 'Invalid Format!';
        }
        return null;
      },
      onSaved: (String value) {
        _reward = BigInt.from(num.parse(value) * 10e3);
      },
    );
  }

  Widget _buildDuration() {
    return TextFormField(
      keyboardType: TextInputType.numberWithOptions(),
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
        hintText: "Enter your duration for the question to be valid",
      ),
      validator: (String value) {
        if (value.isEmpty) {
          setState(() {
            _maxDuration = null;
          });
          return 'Duration is Required!';
        }
        if (num.parse(value) <= 0) {
          setState(() {
            _maxDuration = null;
          });
          return 'Invalid Format!';
        }
        return null;
      },
      onSaved: (String value) {
        _maxDuration = BigInt.from(num.parse(value) * 60 * 60);
      },
    );
  }

  Widget _buildImage(BuildContext context) {
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
          _buildUploadedImage(),
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

  Widget _buildUploadedImage() {
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
    return RaisedButton(
      elevation: 4.0,
      color: Colors.blue,
      child: Text(
        'Submit Question',
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
      onPressed: () => {
        if (!_formKey.currentState.validate())
          {}
        else
          {_formKey.currentState.save()},
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
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.all(24),
          child: _loading
              ? Loader("Submitting Question")
              : Column(
                  children: <Widget>[
                    Material(
                      color: Colors.white,
                      elevation: 5.0,
                      shadowColor: Color(0x802196F3),
                      child: Center(
                        heightFactor: 2.0,
                        child: Text(
                          'Creating of New Question',
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
                    Builder(
                      builder: (context) => Form(
                        key: _formKey,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Padding(
                              padding: const EdgeInsets.only(
                                bottom: 4.0,
                              ),
                              child: Text(
                                'Question Title*',
                                style: TextStyle(fontWeight: FontWeight.bold),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            _buildTitle(),
                            Padding(
                              padding: const EdgeInsets.only(
                                bottom: 4.0,
                                top: 4.0,
                              ),
                              child: Text(
                                'Question Description (To include math questions, delimit the latex format with \$\$)*',
                                style: TextStyle(fontWeight: FontWeight.bold),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(bottom: 8.0),
                              child: Text(
                                'Example: This is my equation: \$\$1 \\triangleright 1 \\bigcirc \\bigcirc \$\$',
                                style: TextStyle(color: Colors.grey),
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
                                      launch(
                                          'https://www.codecogs.com/latex/eqneditor.php');
                                    },
                                ),
                              ),
                            ),
                            _buildDescription(),
                            Padding(
                              padding: const EdgeInsets.only(
                                bottom: 4.0,
                                top: 4.0,
                              ),
                              child: Text(
                                'Tags',
                                style: TextStyle(fontWeight: FontWeight.bold),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            _buildSelectedTags(),
                            _buildTags(),
                            Padding(
                              padding: const EdgeInsets.only(
                                bottom: 4.0,
                                top: 4.0,
                              ),
                              child: Text(
                                'EQT(s)*',
                                style: TextStyle(fontWeight: FontWeight.bold),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            _buildReward(),
                            Padding(
                              padding: const EdgeInsets.only(
                                bottom: 4.0,
                                top: 4.0,
                              ),
                              child: Text(
                                'Maximum Duration [Number of Hour(s)]*',
                                style: TextStyle(fontWeight: FontWeight.bold),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            _buildDuration(),
                            Padding(
                              padding: const EdgeInsets.only(
                                bottom: 4.0,
                                top: 4.0,
                              ),
                              child: Text(
                                'Image(s) Uploaded',
                                style: TextStyle(fontWeight: FontWeight.bold),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            _buildImage(context),
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
      ),
    );
  }
}
