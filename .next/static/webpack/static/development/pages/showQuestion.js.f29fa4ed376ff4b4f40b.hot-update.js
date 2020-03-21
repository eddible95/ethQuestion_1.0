webpackHotUpdate("static\\development\\pages\\showQuestion.js",{

/***/ "./pages/showQuestion.js":
/*!*******************************!*\
  !*** ./pages/showQuestion.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");
/* harmony import */ var react_mathjax2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-mathjax2 */ "./node_modules/react-mathjax2/lib/index.js");
/* harmony import */ var react_mathjax2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_mathjax2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var _components_TimeOutModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TimeOutModal */ "./components/TimeOutModal.js");
/* harmony import */ var _components_ErrorModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/ErrorModal */ "./components/ErrorModal.js");
/* harmony import */ var _components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/LoadingModal */ "./components/LoadingModal.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_question__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ethereum/question */ "./ethereum/question.js");
/* harmony import */ var _ethereum_token__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../ethereum/token */ "./ethereum/token.js");
/* harmony import */ var _ethereum_credentials__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ethereum/credentials */ "./ethereum/credentials.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../utils/ipfs */ "./utils/ipfs.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_31__);

































var QuestionRow =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(QuestionRow, _Component);

  function QuestionRow(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuestionRow);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(QuestionRow).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "votePhase",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var accounts, question, account, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(_this.state.questionState == 0)) {
                _context.next = 20;
                break;
              }

              _context.next = 4;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"].eth.getAccounts();

            case 4:
              accounts = _context.sent;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress); // Ensure that only Creator of Question can access this function

              account = _this.props.account;
              _context.t0 = account;
              _context.next = 10;
              return question.methods.getCreator().call();

            case 10:
              _context.t1 = _context.sent;

              if (!(_context.t0 == _context.t1)) {
                _context.next = 19;
                break;
              }

              _this.setState({
                changeToVoting: true
              });

              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Change to Voting Phase for Question Titled: " + _this.state.summary[0]);
              _context.next = 16;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.changeQuestionPhase(_this.state.questionAddress, logTransaction).send({
                from: account,
                gasPrice: '0'
              });

            case 16:
              _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/questions/".concat(_this.state.questionAddress));
              _context.next = 20;
              break;

            case 19:
              _this.setState({
                ownerError: true
              });

            case 20:
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t2 = _context["catch"](0);

              if (_context.t2.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context.t2.message
              });

            case 26:
              _this.setState({
                changeToVoting: false
              });

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 22]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "rewardPhase",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var accounts, question, account, logTransaction, rewardMessage, voteMessage, refundMessage;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(_this.state.questionState == 1)) {
                _context2.next = 23;
                break;
              }

              _context2.next = 4;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"].eth.getAccounts();

            case 4:
              accounts = _context2.sent;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress); // Ensure that only Creator of Question can access this function

              account = _this.props.account;
              _context2.t0 = account;
              _context2.next = 10;
              return question.methods.getCreator().call();

            case 10:
              _context2.t1 = _context2.sent;

              if (!(_context2.t0 == _context2.t1)) {
                _context2.next = 22;
                break;
              }

              _this.setState({
                changeToRewarded: true
              });

              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Awarded " + _this.state.summary[2] * 1e-4 + " EQT(s) as reward for Question Titled: " + _this.state.summary[0]);
              rewardMessage = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Rewarded " + _this.state.summary[2] * 1e-4 + " EQT(s) for most approved answer");
              voteMessage = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Rewarded EQT(s) for approving the most approved answer");
              refundMessage = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Refunded " + _this.state.summary[2] * 1e-4 + " EQT(s) as there are no answers or answers with approvals");
              _context2.next = 19;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.shareTokenAt(_this.state.questionAddress, logTransaction, rewardMessage, voteMessage, refundMessage, _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"]._address).send({
                from: account,
                gasPrice: '0'
              });

            case 19:
              _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/questions/".concat(_this.state.questionAddress));
              _context2.next = 23;
              break;

            case 22:
              _this.setState({
                ownerError: true
              });

            case 23:
              _context2.next = 29;
              break;

            case 25:
              _context2.prev = 25;
              _context2.t2 = _context2["catch"](0);

              if (_context2.t2.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context2.t2.message
              });

            case 29:
              _this.setState({
                changeToRewarded: false
              });

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 25]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "fixBalance",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var accounts, question, account, balance;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"].eth.getAccounts();

            case 3:
              accounts = _context3.sent;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress); // Ensure that only Creator of Question can access this function

              account = _this.props.account;
              _context3.t0 = account;
              _context3.next = 9;
              return question.methods.getCreator().call();

            case 9:
              _context3.t1 = _context3.sent;

              if (!(_context3.t0 == _context3.t1)) {
                _context3.next = 22;
                break;
              }

              _this.setState({
                fixError: true
              });

              _context3.t2 = _this.state.summary[2];
              _context3.next = 15;
              return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.balanceOf(_this.state.questionAddress).call();

            case 15:
              _context3.t3 = _context3.sent;
              balance = _context3.t2 - _context3.t3;
              _context3.next = 19;
              return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.transfer(_this.state.questionAddress, balance).send({
                from: account,
                gasPrice: '0'
              });

            case 19:
              _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/home");
              _context3.next = 23;
              break;

            case 22:
              _this.setState({
                ownerError: true
              });

            case 23:
              _context3.next = 29;
              break;

            case 25:
              _context3.prev = 25;
              _context3.t4 = _context3["catch"](0);

              if (_context3.t4.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context3.t4.message
              });

            case 29:
              _this.setState({
                fixError: false
              });

            case 30:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 25]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "timeExtension",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var accounts, question, account, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"].eth.getAccounts();

            case 3:
              accounts = _context4.sent;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress); // Ensure that only Creator of Question can access this function

              account = _this.props.account;
              _context4.t0 = account;
              _context4.next = 9;
              return question.methods.getCreator().call();

            case 9:
              _context4.t1 = _context4.sent;

              if (!(_context4.t0 == _context4.t1)) {
                _context4.next = 18;
                break;
              }

              _this.setState({
                timeExtension: true
              });

              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Duration Extended for Question Titled: " + _this.state.summary[0]);
              _context4.next = 15;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.timeExtension(_this.state.questionAddress, logTransaction).send({
                from: account,
                gasPrice: '0'
              });

            case 15:
              _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/questions/".concat(_this.state.questionAddress));
              _context4.next = 19;
              break;

            case 18:
              _this.setState({
                ownerError: true
              });

            case 19:
              _context4.next = 25;
              break;

            case 21:
              _context4.prev = 21;
              _context4.t2 = _context4["catch"](0);

              if (_context4.t2.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeExtension: false
                });

                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context4.t2.message
              });

            case 25:
              _this.setState({
                timeExtension: false
              });

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 21]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "increaseReward",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var accounts, question, account, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"].eth.getAccounts();

            case 3:
              accounts = _context5.sent;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress); // Ensure that only Creator of Question can access this function

              account = _this.props.account;
              _context5.t0 = account;
              _context5.next = 9;
              return question.methods.getCreator().call();

            case 9:
              _context5.t1 = _context5.sent;

              if (!(_context5.t0 == _context5.t1)) {
                _context5.next = 20;
                break;
              }

              _this.setState({
                changeReward: true
              });

              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Increase Reward by 1 EQT(s) for Question Titled: " + _this.state.summary[0]);
              _context5.next = 15;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.increaseReward(_this.state.questionAddress, logTransaction, _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"]._address).send({
                from: account,
                gasPrice: '0'
              });

            case 15:
              _context5.next = 17;
              return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.transfer(_this.state.questionAddress, 10e3).send({
                from: account,
                gasPrice: '0'
              });

            case 17:
              _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/questions/".concat(_this.state.questionAddress));
              _context5.next = 21;
              break;

            case 20:
              _this.setState({
                ownerError: true
              });

            case 21:
              _context5.next = 27;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t2 = _context5["catch"](0);

              if (_context5.t2.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context5.t2.message
              });

            case 27:
              _this.setState({
                changeReward: false
              });

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 23]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onSubmitAnswer",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6() {
      var question, account, logTransaction;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["checkFieldEmpty"])(_this.state.answer)) {
                _context6.next = 30;
                break;
              }

              _context6.prev = 2;
              question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress); // Ensure that creator of question cannot provide answers

              account = _this.props.account;
              _context6.t1 = account;
              _context6.next = 8;
              return question.methods.getCreator().call();

            case 8:
              _context6.t2 = _context6.sent;
              _context6.t0 = _context6.t1 != _context6.t2;

              if (!_context6.t0) {
                _context6.next = 14;
                break;
              }

              _context6.next = 13;
              return question.methods.checkIfAnswered(account).call();

            case 13:
              _context6.t0 = !_context6.sent;

            case 14:
              if (!_context6.t0) {
                _context6.next = 21;
                break;
              }

              // Logs the transactions
              logTransaction = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_30__["logging"])("Submitted Answer for Question Titled: " + _this.state.summary[0]); // Create new answer

              _context6.next = 18;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.createAnswer(_this.state.questionAddress, _this.state.answer, _this.state.fileHashes_array, _this.state.fileNames_array, logTransaction).send({
                from: account,
                gasPrice: '0'
              });

            case 18:
              _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/questions/".concat(_this.state.questionAddress));
              _context6.next = 22;
              break;

            case 21:
              _this.setState({
                loading: false,
                errorMessage: "You cannot provide answer for your own question or already provided answer."
              });

            case 22:
              _context6.next = 28;
              break;

            case 24:
              _context6.prev = 24;
              _context6.t3 = _context6["catch"](2);

              if (_context6.t3.message == "Returned error: authentication needed: password or unlock") {
                _this.setState({
                  timeout: true
                });
              }

              _this.setState({
                errorMessage: _context6.t3.message
              });

            case 28:
              _context6.next = 31;
              break;

            case 30:
              _this.setState({
                loading: false,
                errorMessage: "Answer Field Empty"
              });

            case 31:
              _this.setState({
                loading: false,
                answer: ''
              });

            case 32:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 24]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "approveAnswer",
    /*#__PURE__*/
    function () {
      var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(index) {
        var account, question, profile, answerList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this.setState({
                  voting: true
                });

                account = _this.props.account;
                _context7.next = 4;
                return Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(_this.state.questionAddress);

              case 4:
                question = _context7.sent;
                _context7.next = 7;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.getProfile(account).call();

              case 7:
                profile = _context7.sent;
                _context7.next = 10;
                return question.methods.getAnswerList().call();

              case 10:
                answerList = _context7.sent;
                //const answer = await question.methods.getAnswerer(index).call()
                //console.log(answer)
                // Ensure that voter is not the answerer
                console.log(index); // try {
                //   if (account != await question.methods.getAnswerer(index).call()){
                //     // Cannot vote twice
                //     if (! await question.methods.checkVoter(index, profile).call()) {
                //       // No cost for voting after the voting phase
                //       // if (await question.methods.state().call() != 2) {
                //       //   await EthQuestionToken.methods.transfer(await this.state.questionAddress, 10e3)
                //       //   .send({
                //       //       from: account,
                //       //       gasPrice: '0'
                //       //   })
                //       // }
                //       // let logTransaction = logging("Approved An Answer for Question Titled: " + this.state.summary[0]);
                //       // await factory.methods
                //       // .approveAnswer(this.state.questionAddress, index, logTransaction)
                //       // .send({
                //       //     from: account,
                //       //     gasPrice: '0'
                //       // });
                //       // Router.pushRoute(`/questions/${this.state.questionAddress}`)
                //     } else {
                //       this.setState({ voteMultipleError: true});
                //     }
                //   } else {
                //     this.setState({ voteError: true});
                //   }
                // } catch (err) {
                //   if (err.message == "Returned error: authentication needed: password or unlock") {
                //     this.setState({ timeout: true });
                //   }
                //   this.setState({ errorMessage: err.message });
                // }

                _this.setState({
                  voting: false
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x) {
        return _ref7.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onFileSelected",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9() {
      var reader, file, _this$state, files_array, fileNames_array, fileHashes_array;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
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
                Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8() {
                  var fileHash;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return _this.setState({
                            fileUrl: reader.result,
                            fileLoading: true,
                            buffer: Buffer.from(reader.result) // File is converted to a buffer for upload to IPFS

                          });

                        case 2:
                          if (!_this.state.buffer) {
                            _context8.next = 8;
                            break;
                          }

                          _context8.next = 5;
                          return Object(_utils_ipfs__WEBPACK_IMPORTED_MODULE_29__["getIpfsHash"])(file);

                        case 5:
                          _context8.t0 = _context8.sent;
                          _context8.next = 9;
                          break;

                        case 8:
                          _context8.t0 = '0';

                        case 9:
                          fileHash = _context8.t0;
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
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));
                reader.readAsDataURL(file);
              }

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onFileRemoved", function (file) {
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

    _this.state = {
      questionAddress: '',
      questionState: '',
      summary: [],
      time: '',
      answerList: [],
      avatarListIcon: [],
      votingTime: '',
      voting: false,
      answer: '',
      errorMessage: '',
      loading: false,
      voteError: false,
      ownerError: false,
      voteMultipleError: false,
      changeToVoting: false,
      changeToRewarded: false,
      timeExtension: false,
      changeReward: false,
      fileLoading: false,
      buffer: null,
      files_array: [],
      fileHashes_array: [],
      fileNames_array: [],
      login: false,
      timeout: false,
      resourceLoading: true,
      accountType: null,
      balanceError: false,
      fixError: false,
      sorted: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QuestionRow, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10() {
        var login, account, profileAddress, profile, accountType;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_20__["default"] === 'undefined')) {
                  _context10.next = 3;
                  break;
                }

                this.setState({
                  resourceLoading: false
                });
                return _context10.abrupt("return");

              case 3:
                login = false;

                if (!this.props.isLogin) {
                  _context10.next = 18;
                  break;
                }

                login = true; // Get Account Type

                account = this.props.account;
                _context10.next = 9;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_25__["default"].methods.getProfile(account).call();

              case 9:
                profileAddress = _context10.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_24__["default"])(profileAddress);
                _context10.next = 13;
                return profile.methods.getAccountType().call();

              case 13:
                accountType = _context10.sent;
                accountType == 0 ? accountType = "Admin" : accountType = "User";
                _context10.next = 17;
                return this.fetchQuestionData();

              case 17:
                this.setState({
                  login: login,
                  accountType: accountType
                });

              case 18:
                this.setState({
                  resourceLoading: false
                });

              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(prevProps) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.props != prevProps) {
                  this.fetchQuestionData();
                }

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function componentDidUpdate(_x2) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "fetchQuestionData",
    value: function () {
      var _fetchQuestionData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12() {
        var error, questionAddress, question, summary, time, answerList, iconList, avatarListIcon;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                error = false;
                questionAddress = this.props.questionAddress;
                question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_21__["default"])(questionAddress); // Fetch Question Information

                _context12.next = 5;
                return question.methods.getSummary().call();

              case 5:
                summary = _context12.sent;
                _context12.next = 8;
                return question.methods.getTime().call();

              case 8:
                time = _context12.sent;
                _context12.next = 11;
                return question.methods.getAnswerList().call();

              case 11:
                answerList = _context12.sent;
                console.log(answerList); // Fetch Avatar Icons

                iconList = ['alligator', 'anteater', 'armadillo', 'auroch', 'axolotl', 'badger', 'bat', 'beaver', 'buffalo', 'camel', 'capybara', 'chameleon', 'cheetah', 'chinchilla', 'chipmunk', 'chupacabra', 'cormorant', 'coyote', 'crow', 'dingo', 'dinosaur', 'dolphin', 'duck', 'elephant', 'ferret', 'fox', 'frog', 'giraffe', 'gopher', 'grizzly', 'hedgehog', 'hippo', 'hyena', 'ibex', 'ifrit', 'iguana', 'jackal', 'kangaroo', 'koala', 'kraken', 'lemur', 'leopard', 'liger', 'llama', 'manatee', 'mink', 'monkey', 'moose', 'narwhal', 'orangutan', 'otter', 'panda', 'penguin', 'platypus', 'pumpkin', 'python', 'quagga', 'rabbit', 'raccoon', 'rhino', 'sheep', 'shrew', 'skunk', 'squirrel', 'tiger', 'turtle', 'walrus', 'wolf', 'wolverine', 'wombat'];
                avatarListIcon = iconList.map(function (item) {
                  return 'https://ssl.gstatic.com/docs/common/profile/' + item + '_lg.png';
                }); // Check for balance error

                _context12.next = 17;
                return _ethereum_token__WEBPACK_IMPORTED_MODULE_22__["default"].methods.balanceOf(questionAddress).call();

              case 17:
                _context12.t0 = _context12.sent;
                _context12.t1 = summary[2];

                if (!(_context12.t0 != _context12.t1)) {
                  _context12.next = 23;
                  break;
                }

                error = true;
                _context12.next = 24;
                break;

              case 23:
                error = false;

              case 24:
                this.setState({
                  questionAddress: questionAddress,
                  questionState: summary[4],
                  summary: summary,
                  time: time,
                  avatarListIcon: avatarListIcon,
                  answerList: answerList.reverse(),
                  votingTime: time[3],
                  balanceError: error
                });

              case 25:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function fetchQuestionData() {
        return _fetchQuestionData.apply(this, arguments);
      }

      return fetchQuestionData;
    }()
  }, {
    key: "renderTag",
    // Render each tag individually for each question
    value: function renderTag(tagList, tagSize) {
      var tagColours = ["red", "olive", "blue", "teal", "green"];
      return tagList.map(function (tag, index) {
        var id = index % 5;
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Label"], {
          as: "a",
          onClick: function onClick() {
            return _routes__WEBPACK_IMPORTED_MODULE_28__["Router"].pushRoute("/".concat('search/' + encodeURIComponent(tag)));
          },
          tag: true,
          size: tagSize,
          key: index,
          color: tagColours[id]
        }, tag);
      });
    }
  }, {
    key: "renderQuestion",
    value: function renderQuestion() {
      var summary = this.state.summary;
      var time = this.state.time;
      var currentTime = new Date().getTime();
      var maxDuration = (_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(summary[3]) / 60 / 60).toFixed(2).toString().toString();
      var publishTime = moment__WEBPACK_IMPORTED_MODULE_11___default.a.unix(time[0]).format('dddd, Do MMMM YYYY, h:mm:ss a');
      var votingTime = moment__WEBPACK_IMPORTED_MODULE_11___default.a.unix(this.state.votingTime).format('dddd, Do MMMM YYYY, h:mm:ss a');
      var publishTimeMs = moment__WEBPACK_IMPORTED_MODULE_11___default.a.unix(time[0]).valueOf();
      var maxDurationMs = moment__WEBPACK_IMPORTED_MODULE_11___default.a.unix(time[2]).valueOf();
      var votingTimeMs = moment__WEBPACK_IMPORTED_MODULE_11___default.a.unix(this.state.votingTime).valueOf();
      var remainingTime = 0;

      if (this.state.questionState == 0) {
        remainingTime = publishTimeMs + maxDurationMs - currentTime;

        if (remainingTime < 0) {
          remainingTime = 0;
        }
      } else {
        remainingTime = votingTimeMs + maxDurationMs - currentTime;

        if (remainingTime < 0) {
          remainingTime = 0;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        definition: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Body, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        width: 2
      }, "Question Title"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        style: {
          fontSize: '20px',
          lineHeight: '1.5'
        }
      }, summary[0])), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        width: 2
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        style: {
          fontSize: '20px',
          lineHeight: '1.5'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_mathjax2__WEBPACK_IMPORTED_MODULE_14__["Context"], {
        input: "tex",
        onLoad: function onLoad() {
          return console.log("Loaded MathJax script!");
        },
        onError: function onError(MathJax, error) {
          console.warn(error);
          console.log("Encountered a MathJax error, re-attempting a typeset!");
          MathJax.Hub.Queue(MathJax.Hub.Typeset());
        },
        options: {
          asciimath2jax: {
            useMathMLspacing: true,
            delimiters: [["$$", "$$"]],
            preview: "none"
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_mathjax2__WEBPACK_IMPORTED_MODULE_14__["Text"], {
        text: summary[1]
      })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        width: 2
      }, "Tags"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, null, this.renderTag(summary[8], "small"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, null, "Reward (EQT)"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        style: {
          fontSize: '20px'
        }
      }, summary[2] * 1e-4, this.state.questionState == 0 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "ethereum",
          color: "black",
          onClick: this.increaseReward
        }),
        content: "Increase Reward",
        position: "bottom right",
        inverted: true
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "ethereum",
          color: "black",
          disabled: true
        }),
        position: "bottom right",
        inverted: true
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, null, "Publish Time"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        style: {
          fontSize: '20px'
        }
      }, publishTime)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, null, "Answering Duration (hours)"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        style: {
          fontSize: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          verticalAlign: 'middle',
          lineHeight: '33px'
        }
      }, maxDuration), this.state.questionState == 0 && remainingTime > 0 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "violet"
        }),
        content: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, "Remaining time - "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_countdown_now__WEBPACK_IMPORTED_MODULE_13__["default"], {
          date: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + remainingTime
        })),
        position: "bottom right",
        inverted: true
      }) : this.state.questionState == 0 && remainingTime == 0 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "red"
        }),
        flowing: true,
        hoverable: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        centered: true,
        divided: true,
        columns: 2
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, "Extends the validity of question by 1 hour"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        onClick: this.timeExtension
      }, "Extend Deadline")), this.state.balanceError == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, "Reward Balance Error"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        onClick: this.fixBalance
      }, "Fix Balance")) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, "Proceed to the voting phase"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        onClick: this.votePhase
      }, "Voting Phase")))) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "red",
          disabled: true
        }),
        position: "bottom right",
        inverted: true
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, null, "Voting Duration (hours)"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Table"].Cell, {
        style: {
          fontSize: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          verticalAlign: 'middle',
          lineHeight: '33px'
        }
      }, maxDuration), this.state.questionState == 1 && remainingTime > 0 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "violet"
        }),
        content: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, "Remaining time - "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_countdown_now__WEBPACK_IMPORTED_MODULE_13__["default"], {
          date: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + remainingTime
        })),
        position: "bottom right",
        inverted: true
      }) : this.state.questionState == 1 && remainingTime == 0 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "red",
          onClick: this.rewardPhase
        }),
        content: "Reward",
        position: "bottom right",
        inverted: true
      }) : this.state.questionState == 0 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "red",
          disabled: true
        }),
        position: "bottom right",
        inverted: true
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          style: {
            float: 'right',
            verticalAlign: 'middle'
          },
          icon: "clock",
          color: "red",
          disabled: true
        }),
        position: "bottom right",
        inverted: true
      }))))));
    }
  }, {
    key: "renderAnswers",
    value: function renderAnswers() {
      var _this2 = this;

      var answers = this.state.answerList; //answers = sortingAnswers(answers, this.state.sorted);
      // Answering Phase no answers are shown

      if (this.state.questionState != 0) {
        return answers.map(function (answer, index) {
          var answeredTime = moment__WEBPACK_IMPORTED_MODULE_11___default.a.unix(answer[5]).format('Do MMMM YYYY, h:mm a');
          var id = index % 70;
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"], {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Avatar, {
            src: _this2.state.avatarListIcon[id],
            style: {
              backgroundColor: '#8D8741'
            }
          }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Content, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Author, {
            as: "a"
          }, answer[2]), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Metadata, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, answeredTime)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", null), answer[1] ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("font", {
            color: "red"
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
            name: "certificate"
          }), "Rewarded")) : null, _this2.state.questionState == 2 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Metadata, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
            name: "thumbs up"
          }), answer[4])) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Metadata, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
            name: "thumbs up"
          }), "0")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Text, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_mathjax2__WEBPACK_IMPORTED_MODULE_14__["Context"], {
            input: "tex",
            onLoad: function onLoad() {
              return console.log("Loaded MathJax script!");
            },
            onError: function onError(MathJax, error) {
              console.warn(error);
              console.log("Encountered a MathJax error, re-attempting a typeset!");
              MathJax.Hub.Queue(MathJax.Hub.Typeset());
            },
            options: {
              asciimath2jax: {
                useMathMLspacing: true,
                delimiters: [["$$", "$$"]],
                preview: "none"
              }
            }
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_mathjax2__WEBPACK_IMPORTED_MODULE_14__["Text"], {
            text: answer[0]
          })), answer[7].map(function (imageName, index) {
            return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
              style: {
                marginBottom: '10px'
              },
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Image"], {
              src: "https://ipfs.io/ipfs/" + answer[8][index],
              centered: true
            }));
          })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Actions, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Action, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
            style: {
              float: 'right',
              verticalAlign: 'middle'
            },
            icon: "thumbs up",
            onClick: function onClick() {
              return _this2.approveAnswer(answer[2]);
            },
            size: "tiny",
            content: "Approve Answer",
            color: "green"
          })))));
        });
      }
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var fileHashes = this.state.summary[5];
      var fileNames = this.state.summary[6];

      if (fileHashes.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Segment"], {
          placeholder: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Header"], {
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          name: "images outline"
        }), "No images are uploaded for this question"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Segment"], {
          placeholder: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, "Image(s) Uploaded"), fileNames.map(function (fileName, index) {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            style: {
              marginBottom: '10px'
            },
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Image"], {
            src: "https://ipfs.io/ipfs/" + fileHashes[index]
          }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Divider"], {
            hidden: true
          }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, " To download: "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Label"], {
            as: "a",
            size: "big",
            href: "https://ipfs.io/ipfs/" + fileHashes[index]
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
            name: "download"
          }), fileName));
        })));
      }
    }
  }, {
    key: "renderAnswersForm",
    value: function renderAnswersForm() {
      var _this3 = this;

      var files_array = this.state.files_array;
      var elmFiles = null;

      if (files_array !== null) {
        elmFiles = files_array.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Label"], {
            as: "a",
            key: index,
            size: "big"
          }, item.name, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
            name: "delete",
            onClick: function onClick() {
              return _this3.onFileRemoved(item);
            }
          }));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Form"], {
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Form"].TextArea, {
        placeholder: "Enter Answers",
        value: this.state.answer,
        onChange: function onChange(event) {
          return _this3.setState({
            answer: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Form"].Field, null, this.renderFilesUpload(elmFiles)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Modal"], {
        open: this.state.loading,
        trigger: this.state.questionState == 1 ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          content: "Submit Answers",
          disabled: true,
          labelPosition: "left",
          icon: "edit",
          primary: true
        }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          content: "Submit Answers",
          onClick: this.onSubmitAnswer,
          loading: this.state.loading,
          labelPosition: "left",
          icon: "edit",
          primary: true
        }),
        basic: true,
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Header"], {
        content: "Posting New Answers"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, "Please Confirm the MetaMask Transaction Request to submit your Answers to the Block-Chain Network. Upon successful submission, you will be redirected back to the Question Page. This process might take awhile."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Loader"], {
        active: true,
        inline: "centered"
      }, "Loading"))));
    }
  }, {
    key: "renderFilesUpload",
    value: function renderFilesUpload(files) {
      var _this4 = this;

      var files_array = this.state.files_array;

      if (this.state.files_array.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Segment"], {
          placeholder: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Header"], {
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          name: "images outline"
        }), "No images are uploaded for this answer"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          style: {
            display: 'none'
          },
          type: "file",
          onChange: function onChange() {
            return _this4.onFileSelected();
          },
          ref: function ref(fileInput) {
            return _this4.fileInput = fileInput;
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          primary: true,
          onClick: function onClick() {
            return _this4.fileInput.click();
          },
          loading: this.state.fileLoading
        }, "Upload Image"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Segment"], {
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
            return _this4.onFileSelected();
          },
          ref: function ref(fileInput) {
            return _this4.fileInput = fileInput;
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          primary: true,
          onClick: function onClick() {
            return _this4.fileInput.click();
          },
          loading: this.state.fileLoading
        }, "Upload Files")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.login) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_26__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Divider"], {
          hidden: true
        }), this.renderQuestion(), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Divider"], null), this.renderFiles(), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "Submit Your Answers Here"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, "Note:"), " To include math equations, delimit the latex format with $$."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
          style: {
            display: "table-cell"
          },
          href: "https://www.codecogs.com/latex/eqneditor.php",
          target: "_blank"
        }, "Link to Supported Latex Editor"), this.renderAnswersForm(), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          icon: this.state.sorted ? "sort numeric down" : "sort numeric up",
          onClick: function onClick() {
            _this5.setState({
              sorted: !_this5.state.sorted
            });
          },
          floated: "right",
          size: "mini"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "Answer(s) Submitted: ", this.state.answerList.length), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Comment"].Group, {
          size: "large"
        }, this.renderAnswers()), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ErrorModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
          error: this.state.voteError,
          title: 'Cannot Approve Own Answers',
          content: "You have selected to approve the answer you have provided. Please only approve answers provided by others.",
          questionAddress: this.state.questionAddress,
          stateChange: function stateChange() {
            _this5.setState({
              voteError: false
            });
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ErrorModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
          error: this.state.ownerError,
          title: 'Only Available For Owner Of Question',
          content: "You cannot change the state of the question as you are not the owner.",
          questionAddress: this.state.questionAddress,
          stateChange: function stateChange() {
            _this5.setState({
              ownerError: false
            });
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ErrorModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
          error: this.state.voteMultipleError,
          title: 'Answer Already Approved',
          content: "You cannot approve the same answer more than once. Please approve another answer.",
          questionAddress: this.state.questionAddress,
          stateChange: function stateChange() {
            _this5.setState({
              voteMultipleError: false
            });
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ErrorModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
          error: this.state.voteMultipleError,
          title: 'Answer Already Approved',
          content: "You cannot approve the same answer more than once. Please approve another answer.",
          questionAddress: this.state.questionAddress,
          stateChange: function stateChange() {
            _this5.setState({
              voteMultipleError: false
            });
          }
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          trigger: this.state.changeToVoting,
          title: 'Changing Question State to Voting Phase',
          content: "Please Confirm the MetaMask Transaction Request to change question state to Voting Phase.",
          loader: "Changing Question State"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          trigger: this.state.changeToRewarded,
          title: 'Changing Question State to Rewarded Phase',
          content: "Please Confirm the MetaMask Transaction Request to change question state to Rewarded Phase.",
          loader: "Changing Question State"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          trigger: this.state.timeExtension,
          title: 'Extending Question Deadline',
          content: "Please Confirm the MetaMask Transaction Request to extend the duration of the question.",
          loader: "Extending Deadline"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          trigger: this.state.changeReward,
          title: 'Increasing Reward',
          content: "Please Confirm the MetaMask Transaction Request to increase reward.",
          loader: "Increasing Reward"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          trigger: this.state.voting,
          title: 'Approving Answer',
          content: "Please Confirm the MetaMask Transaction Request to approve an answer. You cannot change your choice upon submission.",
          loader: "Approving"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          trigger: this.state.fixError,
          title: 'Fixing Balance Error',
          content: "Please Confirm the MetaMask Transaction Request to fix the balance error.",
          loader: "Fixing Balance"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_TimeOutModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
          timeout: this.state.timeout
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_26__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
          loading: this.state.resourceLoading,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee13(props) {
        var questionAddress;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                // Retrieve question data
                questionAddress = props.query.value;
                return _context13.abrupt("return", {
                  questionAddress: questionAddress,
                  isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_31___default()(props).login || '',
                  account: next_cookies__WEBPACK_IMPORTED_MODULE_31___default()(props).wallet || ''
                });

              case 2:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return QuestionRow;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionRow);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=showQuestion.js.f29fa4ed376ff4b4f40b.hot-update.js.map