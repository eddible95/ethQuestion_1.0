webpackHotUpdate("static\\development\\pages\\newQuestion.js",{

/***/ "./pages/newQuestion.js":
/*!******************************!*\
  !*** ./pages/newQuestion.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var _components_TimeOutModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/TimeOutModal */ "./components/TimeOutModal.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_question__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ethereum/question */ "./ethereum/question.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_token__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ethereum/token */ "./ethereum/token.js");
/* harmony import */ var _ethereum_credentials__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../ethereum/credentials */ "./ethereum/credentials.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/ipfs */ "./utils/ipfs.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_26__);




























var NewQuestion =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(NewQuestion, _Component);

  function NewQuestion(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NewQuestion);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(NewQuestion).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var account, logTransaction, address;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              }); // Ensures all fields are filled


              if (!(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_25__["checkFieldEmpty"])(_this.state.questionTitle) && Object(_utils_functions__WEBPACK_IMPORTED_MODULE_25__["checkFieldEmpty"])(_this.state.content) && Object(_utils_functions__WEBPACK_IMPORTED_MODULE_25__["checkRewardField"])(_this.state.reward) && Object(_utils_functions__WEBPACK_IMPORTED_MODULE_25__["checkTimeField"])(_this.state.maxDuration))) {
                _context.next = 22;
                break;
              }

              _context.prev = 2;
              account = _this.props.account; // Logs the transactions

              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_25__["logging"])("Created New Question: " + _this.state.questionTitle + " [" + _this.state.reward + " EQT(s) as reward]"); // Create new question

              _context.next = 7;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.createQuestion(_this.state.questionTitle, _this.state.content, Object(_utils_functions__WEBPACK_IMPORTED_MODULE_25__["lowerCase"])(_this.state.tag), Number(_this.state.reward) * 10e3, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.maxDuration) * 60 * 60, _this.state.fileHashes_array, _this.state.fileNames_array, logTransaction, _ethereum_token__WEBPACK_IMPORTED_MODULE_21__["default"]._address).send({
                from: account,
                gasPrice: '0'
              });

            case 7:
              _context.next = 9;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getLastDeployedQuestion().call();

            case 9:
              address = _context.sent;
              _context.next = 12;
              return _ethereum_token__WEBPACK_IMPORTED_MODULE_21__["default"].methods.transfer(address, Number(_this.state.reward) * 10e3).send({
                from: account,
                gasPrice: '0'
              });

            case 12:
              _routes__WEBPACK_IMPORTED_MODULE_23__["Router"].pushRoute('/home'); // Automatic redirect the user.

              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              if (_context.t0.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  loading: false
                });

                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context.t0.message + " Or check if you have sufficient EQT(s)"
              });

            case 19:
              _this.setState({
                loading: false
              });

              _context.next = 24;
              break;

            case 22:
              _this.setState({
                errorMessage: "Required Field(s) Empty or Invalid Input"
              });

              _this.setState({
                loading: false
              });

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onFileSelected",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var reader, file, _this$state, files_array, fileNames_array, fileHashes_array;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // Access JavaScript FileReader() method for conversion to buffer
              reader = new FileReader();
              file = _this.fileInput.files[0];

              _this.setState({
                fileLoading: true
              });

              if (file instanceof Blob) {
                _this$state = _this.state, files_array = _this$state.files_array, fileNames_array = _this$state.fileNames_array, fileHashes_array = _this$state.fileHashes_array;
                files_array.push(file);
                fileNames_array.push(file.name);

                _this.setState({
                  files_array: files_array,
                  fileNames_array: fileNames_array
                });

                console.log("fileNames_array: ", fileNames_array);
                reader.onloadend =
                /*#__PURE__*/
                Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
                  var fileHash;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this.setState({
                            fileUrl: reader.result,
                            fileLoading: true,
                            buffer: Buffer.from(reader.result) // File is converted to a buffer for upload to IPFS

                          });

                        case 2:
                          if (!_this.state.buffer) {
                            _context2.next = 8;
                            break;
                          }

                          _context2.next = 5;
                          return Object(_utils_ipfs__WEBPACK_IMPORTED_MODULE_24__["getIpfsHash"])(file);

                        case 5:
                          _context2.t0 = _context2.sent;
                          _context2.next = 9;
                          break;

                        case 8:
                          _context2.t0 = '0';

                        case 9:
                          fileHash = _context2.t0;
                          fileHashes_array.push(fileHash);

                          _this.setState({
                            fileHashes_array: fileHashes_array
                          });

                          console.log("fileHashes_array: ", fileHashes_array);

                          _this.setState({
                            fileLoading: false
                          });

                        case 14:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                reader.readAsDataURL(file);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onFileRemoved", function (file) {
      var i = 0;
      var _this$state2 = _this.state,
          files_array = _this$state2.files_array,
          fileHashes_array = _this$state2.fileHashes_array,
          fileNames_array = _this$state2.fileNames_array;
      console.log('file: ', file);

      for (i = 0; i < files_array.length; i++) {
        if (file === files_array[i]) {
          files_array.splice(i, 1);
          fileNames_array.splice(i, 1);
          fileHashes_array.splice(i, 1);
          break;
        }
      }

      _this.setState({
        files_array: files_array,
        fileNames_array: fileNames_array,
        fileHashes_array: fileHashes_array
      });

      console.log('fileNames_array', fileNames_array);
      console.log("fileHashes_array: ", fileHashes_array);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleAddition", function (e, _ref4) {
      var value = _ref4.value;

      _this.setState({
        tagOptions: [{
          text: value,
          value: value
        }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.tagOptions))
      });
    });

    _this.state = {
      questionTitle: '',
      content: '',
      tag: [],
      tagOptions: [],
      reward: '',
      maxDuration: '',
      errorMessage: '',
      loading: false,
      fileLoading: false,
      buffer: null,
      files_array: [],
      fileHashes_array: [],
      fileNames_array: [],
      login: false,
      resourceLoading: true,
      timeout: false,
      accountType: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NewQuestion, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
        var login, profileAddress, profile, accountType, deployedQuestions, deployedQuestionsCount, tags, tagOptions, i, question, summary, _i;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"] === 'undefined')) {
                  _context4.next = 3;
                  break;
                }

                this.setState({
                  loading: false
                });
                return _context4.abrupt("return");

              case 3:
                login = false;

                if (!this.props.isLogin) {
                  _context4.next = 34;
                  break;
                }

                login = true; // Get Account Type

                _context4.next = 8;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getProfile(this.props.account).call();

              case 8:
                profileAddress = _context4.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_19__["default"])(profileAddress);
                _context4.next = 12;
                return profile.methods.getAccountType().call();

              case 12:
                accountType = _context4.sent;
                accountType == 0 ? accountType = "Admin" : accountType = "User"; // Retrieve previously used tags and ether balance

                _context4.next = 16;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getDeployedQuestions().call();

              case 16:
                deployedQuestions = _context4.sent;
                deployedQuestionsCount = deployedQuestions.length;
                tags = [];
                tagOptions = [];
                i = 0;

              case 21:
                if (!(i < deployedQuestionsCount)) {
                  _context4.next = 30;
                  break;
                }

                question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_18__["default"])(deployedQuestions[i]);
                _context4.next = 25;
                return question.methods.getSummary().call();

              case 25:
                summary = _context4.sent;
                tags = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tags), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(summary[8]));

              case 27:
                i++;
                _context4.next = 21;
                break;

              case 30:
                // Remove duplicated tags and select recently used tags
                tags = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(tags));
                tags = tags.reverse().slice(0, 30);

                for (_i = 0; _i < tags.length; _i++) {
                  tagOptions.push({
                    key: _i,
                    text: tags[_i],
                    value: tags[_i]
                  });
                }

                this.setState({
                  login: login,
                  accountType: accountType,
                  tagOptions: tagOptions
                });

              case 34:
                this.setState({
                  resourceLoading: false
                });

              case 35:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // Submit the question to be stored on the Ethereum Blockchain

  }, {
    key: "renderFilesUpload",
    value: function renderFilesUpload(files) {
      var _this2 = this;

      var files_array = this.state.files_array;

      if (this.state.files_array.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Segment"], {
          placeholder: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Header"], {
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
          name: "images outline"
        }), "No images are uploaded for this question"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          style: {
            display: 'none'
          },
          type: "file",
          onChange: function onChange() {
            return _this2.onFileSelected();
          },
          ref: function ref(fileInput) {
            return _this2.fileInput = fileInput;
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
          primary: true,
          onClick: function onClick() {
            return _this2.fileInput.click();
          },
          loading: this.state.fileLoading
        }, "Upload Image"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Segment"], {
          placeholder: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            marginBottom: '20px'
          }
        }, files), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          style: {
            display: 'none'
          },
          type: "file",
          onChange: function onChange() {
            return _this2.onFileSelected();
          },
          ref: function ref(fileInput) {
            return _this2.fileInput = fileInput;
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
          primary: true,
          onClick: function onClick() {
            return _this2.fileInput.click();
          },
          loading: this.state.fileLoading
        }, "Upload Files")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.login) {
        var files_array = this.state.files_array;
        var elmFiles = null;

        if (files_array !== null) {
          elmFiles = files_array.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Label"], {
              as: "a",
              key: index,
              size: "big"
            }, item.name, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
              name: "delete",
              onClick: function onClick() {
                return _this3.onFileRemoved(item);
              }
            }));
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
          accountType: this.state.accountType,
          page: "New"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Segment"], {
          textAlign: "center",
          as: "h3"
        }, "Creating Of New Question"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"], {
          error: !!this.state.errorMessage,
          style: {
            marginTop: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, {
          required: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, "Question Title"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Input"], {
          placeholder: "Enter Title",
          value: this.state.questionTitle,
          onChange: function onChange(event) {
            return _this3.setState({
              questionTitle: event.target.value
            });
          }
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, {
          required: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, "Question Description (To include math questions, delimit the latex format with $$)"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Label"], null, "Example: This is my equation: $$1 \\triangleright 1 \\bigcirc  \\bigcirc $$"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
          style: {
            display: "table-cell"
          },
          href: "https://www.codecogs.com/latex/eqneditor.php",
          target: "_blank"
        }, "Link to Supported Latex Editor"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["TextArea"], {
          placeholder: "Enter Description",
          value: this.state.content,
          onChange: function onChange(event) {
            return _this3.setState({
              content: event.target.value
            });
          }
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Dropdown"], {
          clearable: true,
          options: this.state.tagOptions,
          selection: true,
          multiple: true,
          allowAdditions: true,
          search: true,
          placeholder: "Select from recently used tags or create your own tags",
          value: this.state.tag,
          onChange: function onChange(e, _ref5) {
            var value = _ref5.value;
            return _this3.setState({
              tag: value
            });
          },
          onAddItem: this.handleAddition
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, {
          required: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, "EQT(s)"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Input"], {
          label: "EQT(s)",
          labelPosition: "right",
          placeholder: "Enter your value of reward",
          value: this.state.reward,
          onChange: function onChange(event) {
            return _this3.setState({
              reward: event.target.value
            });
          }
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, {
          required: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, "Maximum Duration"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Input"], {
          label: "hour(s)",
          labelPosition: "right",
          placeholder: "Enter the duration for the question to be valid",
          value: this.state.maxDuration,
          onChange: function onChange(event) {
            return _this3.setState({
              maxDuration: event.target.value
            });
          }
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, null, this.renderFilesUpload(elmFiles)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Message"], {
          error: true,
          header: "Oops!",
          content: this.state.errorMessage
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
          open: this.state.loading,
          trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
            primary: true,
            onClick: this.onSubmit
          }, "Submit Question"),
          basic: true,
          size: "small"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Header"], {
          content: "Posting New Question"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, "System is submitting your question to the blockchain. Upon successful submission, you will be redirected to the Home Page. This process might take awhile."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Loader"], {
          active: true,
          inline: "centered"
        }, "Loading"))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_TimeOutModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
          timeout: this.state.timeout
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          loading: this.state.resourceLoading,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(props) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", {
                  isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_26___default()(props).login || '',
                  account: next_cookies__WEBPACK_IMPORTED_MODULE_26___default()(props).wallet || ''
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NewQuestion;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NewQuestion);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=newQuestion.js.5873aacc549081465772.hot-update.js.map