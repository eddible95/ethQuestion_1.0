webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_LoadingModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LoadingModal */ "./components/LoadingModal.js");
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var _components_TimeOutModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/TimeOutModal */ "./components/TimeOutModal.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var _ethereum_question__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ethereum/question */ "./ethereum/question.js");
/* harmony import */ var _ethereum_feedback__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ethereum/feedback */ "./ethereum/feedback.js");
/* harmony import */ var _ethereum_token__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../ethereum/token */ "./ethereum/token.js");
/* harmony import */ var _ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ethereum/tokenSale */ "./ethereum/tokenSale.js");
/* harmony import */ var _ethereum_credentials__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ethereum/credentials */ "./ethereum/credentials.js");
/* harmony import */ var _utils_pdf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../utils/pdf */ "./utils/pdf.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_26__);




























var AdminPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AdminPage, _Component);

  function AdminPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AdminPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AdminPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "export",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var questionNumber, question, summary, answerList;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.state.questionNumber != null)) {
                _context.next = 11;
                break;
              }

              // Retrieve all the data of selected question
              questionNumber = Number(_this.state.questionNumber) - 1;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_20__["default"])(_this.state.deployedQuestions[questionNumber]);
              _context.next = 5;
              return question.methods.getSummary().call();

            case 5:
              summary = _context.sent;
              _context.next = 8;
              return question.methods.getAnswerList().call();

            case 8:
              answerList = _context.sent;
              _context.next = 11;
              return Object(_utils_pdf__WEBPACK_IMPORTED_MODULE_25__["exportQuestion"])(summary, answerList);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "exportFeedback",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var comments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _ethereum_feedback__WEBPACK_IMPORTED_MODULE_21__["default"].methods.getComments().call();

            case 2:
              comments = _context2.sent;
              _context2.next = 5;
              return Object(_utils_pdf__WEBPACK_IMPORTED_MODULE_25__["exportComments"])(comments);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getUserTableData", function () {
      return _this.state.ethWalletEmailAddressBinding.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.ethWallet), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.emailAddress), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.status ? "Blacklisted" : "Active"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.status ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick() {
            return _this.unblacklist(item.emailAddress);
          },
          color: "green",
          size: "mini",
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "add user"
        })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick() {
            return _this.blacklist(item.emailAddress);
          },
          color: "red",
          size: "mini",
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "remove user"
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick() {
            return _this.dispense(item.ethWallet);
          },
          color: "green",
          size: "mini",
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "ethereum"
        }))));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "blacklist",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(emailAddress) {
        var account;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context3.prev = 1;
                account = _this.state.account;
                _context3.next = 5;
                return _ethereum_credentials__WEBPACK_IMPORTED_MODULE_24__["default"].methods.blacklistEmail(emailAddress).send({
                  from: account,
                  gasPrice: '0'
                });

              case 5:
                _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/admin'); // Automatic redirect the user.

                _context3.next = 13;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);

                if (_context3.t0.message == "Returned error: authentication needed: password or unlock") {
                  _this.setState({
                    timeout: true
                  });
                }

                _this.setState({
                  errorMessage: _context3.t0.message
                });

                _this.setState({
                  error: true
                });

              case 13:
                _this.setState({
                  loading: false
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 8]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "unblacklist",
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(emailAddress) {
        var account;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context4.prev = 1;
                account = _this.state.account;
                _context4.next = 5;
                return _ethereum_credentials__WEBPACK_IMPORTED_MODULE_24__["default"].methods.unBlacklistEmail(emailAddress).send({
                  from: account,
                  gasPrice: '0'
                });

              case 5:
                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);

                if (_context4.t0.message == "Returned error: authentication needed: password or unlock") {
                  _this.setState({
                    timeout: true
                  });
                }

                _this.setState({
                  errorMessage: _context4.t0.message
                });

                _this.setState({
                  error: true
                });

              case 12:
                _this.setState({
                  loading: false
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 7]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "dispense",
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(ethWallet) {
        var account, profileAddress, profile, logTransaction;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context5.prev = 1;
                account = _this.state.account;
                _context5.next = 5;
                return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.transfer(ethWallet, 10e4).send({
                  from: account,
                  gasPrice: '0'
                });

              case 5:
                _context5.next = 7;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getProfile(ethWallet).call();

              case 7:
                profileAddress = _context5.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_19__["default"])(profileAddress);
                logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["logging"])("Awarded 10 EQT(s) for first time user");
                _context5.next = 12;
                return profile.methods.logTransaction(logTransaction).send({
                  from: account,
                  gasPrice: '0'
                });

              case 12:
                _context5.next = 19;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](1);

                if (_context5.t0.message == "Returned error: authentication needed: password or unlock") {
                  _this.setState({
                    timeout: true
                  });
                }

                _this.setState({
                  errorMessage: _context5.t0.message
                });

                _this.setState({
                  error: true
                });

              case 19:
                _this.setState({
                  loading: false
                });

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 14]]);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getQuestionTableData", function () {
      return _this.state.questionAddressTitleBinding.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.questionAddress), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.flagged ? "Flagged" : "Active"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, item.flagged ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick() {
            return _this.undoDeleteQuestion(item.questionAddress);
          },
          color: "green",
          size: "mini",
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "undo"
        })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick() {
            return _this.deleteQuestion(item.questionAddress);
          },
          color: "red",
          size: "mini",
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "flag"
        }))));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteQuestion",
    /*#__PURE__*/
    function () {
      var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(questionAddress, title) {
        var account, logTransaction;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context6.prev = 1;
                account = _this.state.account;
                logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["logging"])("Deleted Question Titled: " + title);
                _context6.next = 6;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.deleteQuestion(questionAddress, logTransaction).send({
                  from: account,
                  gasPrice: '0'
                });

              case 6:
                _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/admin'); // Automatic redirect the user.

                _context6.next = 14;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);

                if (_context6.t0.message == "Returned error: authentication needed: password or unlock") {
                  _this.setState({
                    timeout: true
                  });
                }

                _this.setState({
                  errorMessage: _context6.t0.message
                });

                _this.setState({
                  error: true
                });

              case 14:
                _this.setState({
                  loading: false
                });

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 9]]);
      }));

      return function (_x4, _x5) {
        return _ref6.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "undoDeleteQuestion",
    /*#__PURE__*/
    function () {
      var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(questionAddress, title) {
        var account, logTransaction;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context7.prev = 1;
                account = _this.state.account;
                logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["logging"])("Undo Deletion Of Question Titled: " + title);
                _context7.next = 6;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.undoDeleteQuestion(questionAddress, logTransaction).send({
                  from: account,
                  gasPrice: '0'
                });

              case 6:
                _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/admin'); // Automatic redirect the user.

                _context7.next = 14;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);

                if (_context7.t0.message == "Returned error: authentication needed: password or unlock") {
                  _this.setState({
                    timeout: true
                  });
                }

                _this.setState({
                  errorMessage: _context7.t0.message
                });

                _this.setState({
                  error: true
                });

              case 14:
                _this.setState({
                  loading: false
                });

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 9]]);
      }));

      return function (_x6, _x7) {
        return _ref7.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "topUp",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
      var account, profileAddress, profile, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["checkRewardField"])(_this.state.topUpAmount)) {
                _context8.next = 26;
                break;
              }

              _context8.prev = 2;
              account = _this.state.account;
              _context8.next = 6;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.personal.unlockAccount(account, "password", 600);

            case 6:
              _context8.next = 8;
              return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.transfer(_ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__["default"]._address, _this.state.topUpAmount * 1e4).send({
                from: account,
                gasPrice: '0'
              });

            case 8:
              _context8.next = 10;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getProfile(account).call();

            case 10:
              profileAddress = _context8.sent;
              profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_19__["default"])(profileAddress);
              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["logging"])("Added " + _this.state.topUpAmount + " EQT(s) for exchange");
              _context8.next = 15;
              return profile.methods.logTransaction(logTransaction).send({
                from: account,
                gasPrice: '0'
              });

            case 15:
              _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/admin'); // Automatic redirect the user.

              _context8.next = 24;
              break;

            case 18:
              _context8.prev = 18;
              _context8.t0 = _context8["catch"](2);

              if (_context8.t0.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context8.t0.message
              });

              _this.setState({
                error: true
              });

              _this.setState({
                loading: false
              });

            case 24:
              _context8.next = 29;
              break;

            case 26:
              _this.setState({
                errorMessage: "Required Field(s) Empty or Invalid Input"
              });

              _this.setState({
                error: true
              });

              _this.setState({
                loading: false
              });

            case 29:
              _this.setState({
                loading: false
              });

            case 30:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[2, 18]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "collectEther",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
      var account, profileAddress, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context9.prev = 1;
              account = _this.state.account;
              _context9.next = 5;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getProfile(account).call();

            case 5:
              profileAddress = _context9.sent;
              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["logging"])("Collect Ether from exchange of EQT(s)");
              _context9.next = 9;
              return _ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__["default"].methods.endSale(_ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"]._address, profileAddress, logTransaction).send({
                from: account,
                gasPrice: '0'
              });

            case 9:
              _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/admin'); // Automatic redirect the user.

              _context9.next = 18;
              break;

            case 12:
              _context9.prev = 12;
              _context9.t0 = _context9["catch"](1);

              if (_context9.t0.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context9.t0.message
              });

              _this.setState({
                error: true
              });

              _this.setState({
                loading: false
              });

            case 18:
              _this.setState({
                loading: false
              });

            case 19:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 12]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changeTokenPrice",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
      var account, profileAddress, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["checkRewardField"])(_this.state.newTokenPrice)) {
                _context10.next = 21;
                break;
              }

              _context10.prev = 2;
              account = _this.state.account;
              _context10.next = 6;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getProfile(account).call();

            case 6:
              profileAddress = _context10.sent;
              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["logging"])("Changed Token Price to " + _this.state.newTokenPrice + " wei per EQT.");
              _context10.next = 10;
              return _ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__["default"].methods.changeTokenPrice(_this.state.newTokenPrice, profileAddress, logTransaction).send({
                from: account,
                gasPrice: '0'
              });

            case 10:
              _routes__WEBPACK_IMPORTED_MODULE_15__["Router"].pushRoute('/admin'); // Automatic redirect the user.

              _context10.next = 19;
              break;

            case 13:
              _context10.prev = 13;
              _context10.t0 = _context10["catch"](2);

              if (_context10.t0.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context10.t0.message
              });

              _this.setState({
                error: true
              });

              _this.setState({
                loading: false
              });

            case 19:
              _context10.next = 24;
              break;

            case 21:
              _this.setState({
                errorMessage: "Required Field(s) Empty or Invalid Input"
              });

              _this.setState({
                error: true
              });

              _this.setState({
                loading: false
              });

            case 24:
              _this.setState({
                loading: false
              });

            case 25:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[2, 13]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "toggleUserTableVisibility", function () {
      return _this.setState(function (prevState) {
        return {
          userVisible: !prevState.userVisible
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "toggleQuestionTableVisibility", function () {
      return _this.setState(function (prevState) {
        return {
          questionVisible: !prevState.questionVisible
        };
      });
    });

    _this.state = {
      account: null,
      error: false,
      loading: false,
      loadingResource: true,
      timeout: false,
      deployedQuestionsCount: null,
      deployedQuestions: [],
      ethWalletEmailAddressBinding: [],
      questionAddressTitleBinding: [],
      tokenPrice: null,
      tokenBalance: null,
      etherBalance: null,
      errorMessage: '',
      accountType: null,
      userVisible: false,
      questionOptions: [],
      questionNumber: null,
      questionVisible: false,
      newTokenPrice: '',
      topUpAmount: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminPage, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(prevProps) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.props != prevProps) {
                  this.fetchData();
                }

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function componentDidUpdate(_x8) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var login, account, profileAddress, profile, accountType, questionOptions, i, question, summary;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"] === 'undefined')) {
                  _context12.next = 3;
                  break;
                }

                this.setState({
                  loading: false
                });
                return _context12.abrupt("return");

              case 3:
                login = false;

                if (!this.props.isLogin) {
                  _context12.next = 33;
                  break;
                }

                login = true; // Get Account Type

                account = this.props.account;
                _context12.next = 9;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getProfile(account).call();

              case 9:
                profileAddress = _context12.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_19__["default"])(profileAddress);
                _context12.next = 13;
                return profile.methods.getAccountType().call();

              case 13:
                accountType = _context12.sent;
                accountType == 0 ? accountType = "Admin" : accountType = "User";

                if (accountType != "Admin") {
                  login = false;
                }

                _context12.next = 18;
                return this.fetchData();

              case 18:
                // Get Question Deployed
                questionOptions = [];
                i = 0;

              case 20:
                if (!(i < this.state.deployedQuestionsCount)) {
                  _context12.next = 29;
                  break;
                }

                question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_20__["default"])(this.state.deployedQuestions[i]);
                _context12.next = 24;
                return question.methods.getSummary().call();

              case 24:
                summary = _context12.sent;
                questionOptions.push({
                  key: i + 1,
                  text: summary[0],
                  value: i + 1
                });

              case 26:
                i++;
                _context12.next = 20;
                break;

              case 29:
                this.setState({
                  questionOptions: questionOptions
                });
                this.setState({
                  account: account
                });
                this.setState({
                  login: login
                });
                this.setState({
                  accountType: accountType
                });

              case 33:
                this.setState({
                  loadingResource: false
                });

              case 34:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "fetchData",
    value: function () {
      var _fetchData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var deployedQuestions, deployedQuestionsCount, questionAddressTitleBinding, i, question, summary, ethWallets, ethWalletEmailAddressBinding, _i, emailAddress, status, tokenPrice, tokenBalance, etherBalance;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getDeployedQuestions().call();

              case 2:
                deployedQuestions = _context13.sent;
                deployedQuestionsCount = deployedQuestions.length;
                questionAddressTitleBinding = [];
                i = 0;

              case 6:
                if (!(i < deployedQuestionsCount)) {
                  _context13.next = 15;
                  break;
                }

                question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_20__["default"])(deployedQuestions[i]);
                _context13.next = 10;
                return question.methods.getSummary().call();

              case 10:
                summary = _context13.sent;
                questionAddressTitleBinding.push({
                  questionAddress: deployedQuestions[i],
                  title: summary[0],
                  flagged: summary[9]
                });

              case 12:
                i++;
                _context13.next = 6;
                break;

              case 15:
                _context13.next = 17;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_18__["default"].methods.getEthWallets().call();

              case 17:
                ethWallets = _context13.sent;
                ethWalletEmailAddressBinding = [];
                _i = 0;

              case 20:
                if (!(_i < ethWallets.length)) {
                  _context13.next = 31;
                  break;
                }

                _context13.next = 23;
                return _ethereum_credentials__WEBPACK_IMPORTED_MODULE_24__["default"].methods.getBinding(ethWallets[_i]).call();

              case 23:
                emailAddress = _context13.sent;
                _context13.next = 26;
                return _ethereum_credentials__WEBPACK_IMPORTED_MODULE_24__["default"].methods.emailNotBlackList(emailAddress).call();

              case 26:
                status = _context13.sent;
                ethWalletEmailAddressBinding.push({
                  ethWallet: ethWallets[_i],
                  emailAddress: emailAddress,
                  status: status
                });

              case 28:
                _i++;
                _context13.next = 20;
                break;

              case 31:
                _context13.next = 33;
                return _ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__["default"].methods.getTokenPrice().call();

              case 33:
                tokenPrice = _context13.sent;
                _context13.next = 36;
                return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.balanceOf(_ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__["default"]._address).call();

              case 36:
                tokenBalance = _context13.sent;
                _context13.next = 39;
                return _ethereum_tokenSale__WEBPACK_IMPORTED_MODULE_23__["default"].methods.getEtherBalance().call();

              case 39:
                etherBalance = _context13.sent;
                this.setState({
                  deployedQuestionsCount: deployedQuestionsCount,
                  deployedQuestions: deployedQuestions,
                  ethWalletEmailAddressBinding: ethWalletEmailAddressBinding,
                  questionAddressTitleBinding: questionAddressTitleBinding,
                  tokenPrice: tokenPrice,
                  tokenBalance: tokenBalance,
                  etherBalance: etherBalance
                });

              case 41:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: "renderExport",
    value: function renderExport() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        raised: true,
        textAlign: "left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h2",
        textAlign: "center"
      }, "Exporting Questions & Answers As PDF")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          fontSize: '16px'
        }
      }, "Select the question to export the question and it's corresponding answers"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        clearable: true,
        options: this.state.questionOptions,
        selection: true,
        placeholder: "Select the question to export",
        value: this.state.questionNumber,
        onChange: function onChange(e, _ref11) {
          var value = _ref11.value;
          return _this2.setState({
            questionNumber: value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        icon: true,
        labelPosition: "left",
        color: "red",
        onClick: this.export,
        style: {
          left: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "download"
      }), "Export As PDF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        raised: true,
        textAlign: "left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h2",
        textAlign: "center"
      }, "Exporting Feedback")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        icon: true,
        labelPosition: "left",
        color: "red",
        onClick: this.exportFeedback,
        style: {
          left: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "download"
      }), "Export As PDF"));
    }
  }, {
    key: "renderEQTSettings",
    value: function renderEQTSettings() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        raised: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
        style: {
          fontSize: "20px"
        }
      }, "Users Management"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          icon: this.state.userVisible ? "minus" : "plus",
          onClick: this.toggleUserTableVisibility,
          floated: "right",
          size: "mini"
        }),
        content: "Click to expand/close",
        inverted: true
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        raised: true,
        textAlign: "left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h2",
        textAlign: "center"
      }, "EthQuestionTokens (EQT) Exchange Settings")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          fontSize: '16px'
        }
      }, "Balance Available For Exchange: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, this.state.tokenBalance * 1e-4, " EQT(s)"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        error: !!this.state.errorMessage,
        style: {
          marginTop: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, {
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Top Up Amount"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "EQT(s)",
        labelPosition: "right",
        placeholder: "Enter EQT Value",
        value: this.state.topUpAmount,
        onChange: function onChange(event) {
          return _this3.setState({
            topUpAmount: event.target.value
          });
        }
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        icon: true,
        labelPosition: "left",
        color: "red",
        onClick: this.topUp
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "dollar sign"
      }), "Top Up Balance")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          fontSize: '16px'
        }
      }, "Ether Collected From Exchange: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, this.state.etherBalance * 1e-18, " Ether(s)"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        icon: true,
        labelPosition: "left",
        color: "red",
        onClick: this.collectEther
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "ethereum"
      }), "Collect Ether")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          fontSize: '16px'
        }
      }, "Current Token Price: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, this.state.tokenPrice * 1e-18, " Ether(s)"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        error: !!this.state.errorMessage,
        style: {
          marginTop: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, {
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Token Price"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "Wei",
        labelPosition: "right",
        placeholder: "New Token Price",
        value: this.state.newTokenPrice,
        onChange: function onChange(event) {
          return _this3.setState({
            newTokenPrice: event.target.value
          });
        }
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        icon: true,
        labelPosition: "left",
        color: "red",
        onClick: this.changeTokenPrice
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "ethereum"
      }), "Change Token Price"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        hidden: true
      }));
    }
  }, {
    key: "renderUserManagement",
    value: function renderUserManagement() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        raised: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
        style: {
          fontSize: "20px"
        }
      }, "Users Management"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          icon: this.state.userVisible ? "minus" : "plus",
          onClick: this.toggleUserTableVisibility,
          floated: "right",
          size: "mini"
        }),
        content: "Click to expand/close",
        inverted: true
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        visible: this.state.userVisible,
        animation: "scale",
        duration: 500
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "user",
        circular: true
      }), "Registered Users"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        compact: true,
        celled: true,
        stackable: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Header, {
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Ethereum Wallet"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 3
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Blacklist"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Dispense Tokens"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Body, null, this.getUserTableData()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Footer, {
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        colSpan: 5
      })))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        raised: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
        style: {
          fontSize: "20px"
        }
      }, "Removing Question"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          icon: this.state.questionVisible ? "minus" : "plus",
          onClick: this.toggleQuestionTableVisibility,
          floated: "right",
          size: "mini"
        }),
        content: "Click to expand/close",
        inverted: true
      })));
    }
  }, {
    key: "renderQuestionSettings",
    value: function renderQuestionSettings() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        visible: this.state.questionVisible,
        animation: "scale",
        duration: 500
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "question circle",
        circular: true
      }), "Questions Posted"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        compact: true,
        celled: true,
        stackable: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Header, {
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Question Address"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 3
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        width: 2
      }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Body, null, this.getQuestionTableData()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Footer, {
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
        colSpan: 5
      })))))));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.login) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
          accountType: this.state.accountType,
          page: "Admin"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
          hidden: true
        }), this.renderExport(), this.renderEQTSettings(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
          error: true,
          header: "Oops!",
          content: this.state.errorMessage,
          hidden: !this.state.error
        }), this.renderUserManagement(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
          hidden: true
        }), this.renderQuestionSettings(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
          trigger: this.state.loading,
          title: 'Performing Admin Actions',
          content: "Please Confirm the MetaMask Transaction Request. This process might take awhile.",
          loader: "Loading"
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_TimeOutModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          timeout: this.state.timeout
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
          loading: this.state.loadingResource,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(props) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", {
                  isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_26___default()(props).login || '',
                  account: next_cookies__WEBPACK_IMPORTED_MODULE_26___default()(props).wallet || ''
                });

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function getInitialProps(_x9) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AdminPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ })

})
//# sourceMappingURL=admin.js.92d7437e5a022bbd0830.hot-update.js.map