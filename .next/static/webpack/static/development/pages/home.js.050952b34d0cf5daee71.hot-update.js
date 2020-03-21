webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobile-detect */ "./node_modules/mobile-detect/mobile-detect.js");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_credentials__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ethereum/credentials */ "./ethereum/credentials.js");
/* harmony import */ var _ethereum_question__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ethereum/question */ "./ethereum/question.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_25__);



























var HomePage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(HomePage, _Component);

  function HomePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HomePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(HomePage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleSort", function (clickedColumn) {
      return function () {
        var _this$state = _this.state,
            column = _this$state.column,
            leaderboardData = _this$state.leaderboardData,
            direction = _this$state.direction;

        if (column !== clickedColumn) {
          _this.setState({
            column: clickedColumn,
            leaderboardData: lodash__WEBPACK_IMPORTED_MODULE_13___default.a.sortBy(leaderboardData, [clickedColumn]),
            direction: 'ascending'
          });

          return;
        }

        _this.setState({
          leaderboardData: leaderboardData.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending'
        });
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleChange", function (e, _ref) {
      var value = _ref.value;
      return _this.setState({
        sortBy: value
      });
    });

    _this.state = {
      login: false,
      accountType: null,
      column: null,
      direction: null,
      leaderboardData: [],
      tags: [],
      topTags: [],
      loading: true,
      sortBy: null,
      data: [],
      summaries: [],
      questionLimit: 30,
      questionLimitChoice: [],
      isSSR: false,
      isMining: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(HomePage, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(prevProps) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.props != prevProps) {
                  this.fetchQuestionData();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var login, profileAddress, profile, accountType, ethWallet, accountPointMapping, i, points;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_23__["default"] === 'undefined')) {
                  _context2.next = 3;
                  break;
                }

                this.setState({
                  loading: false
                });
                return _context2.abrupt("return");

              case 3:
                login = false;

                if (!this.props.isLogin) {
                  _context2.next = 36;
                  break;
                }

                login = true; // Get Account Type

                _context2.next = 8;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getProfile(this.props.account).call();

              case 8:
                profileAddress = _context2.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_20__["default"])(profileAddress);
                _context2.next = 12;
                return profile.methods.getAccountType().call();

              case 12:
                accountType = _context2.sent;
                accountType == 0 ? accountType = "Admin" : accountType = "User"; // Retireve an array of addresses of ethWallets registered

                _context2.next = 16;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getEthWallets().call();

              case 16:
                ethWallet = _context2.sent;
                accountPointMapping = [];
                i = 0;

              case 19:
                if (!(i < ethWallet.length)) {
                  _context2.next = 31;
                  break;
                }

                _context2.next = 22;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getProfile(ethWallet[i]).call();

              case 22:
                profileAddress = _context2.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_20__["default"])(profileAddress);
                _context2.next = 26;
                return profile.methods.getPoints().call();

              case 26:
                points = _context2.sent;
                accountPointMapping.push({
                  account: ethWallet[i],
                  points: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(points)
                });

              case 28:
                i++;
                _context2.next = 19;
                break;

              case 31:
                _context2.next = 33;
                return this.fetchQuestionData();

              case 33:
                // Set the states required for the Leaderboard and ensure it is descending by default
                this.setState({
                  leaderboardData: lodash__WEBPACK_IMPORTED_MODULE_13___default.a.sortBy(accountPointMapping, ['points']).reverse()
                });
                this.setState({
                  login: login
                });
                this.setState({
                  accountType: accountType
                });

              case 36:
                this.setState({
                  loading: false
                });

              case 37:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "fetchQuestionData",
    value: function () {
      var _fetchQuestionData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        var deployedQuestions, deployedQuestionsCount, summaries, searchItem, i, question, summary, answerList, questionLimitChoice, choice, _i, tags, sortedTags, tagList, isMining, blockNumber;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_17__["default"].methods.getDeployedQuestions().call();

              case 2:
                deployedQuestions = _context3.sent;
                deployedQuestionsCount = deployedQuestions.length;
                this.setState({
                  deployedQuestionsCount: deployedQuestionsCount
                }); // Retrieve the summaries of all deployed questions

                summaries = [];

                if (!(this.props.queryValue != undefined && this.props.queryValue != 'favicon.ico')) {
                  _context3.next = 12;
                  break;
                }

                searchItem = decodeURIComponent(this.props.queryValue);
                _context3.next = 10;
                return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_24__["search"])(searchItem, deployedQuestions);

              case 10:
                deployedQuestions = _context3.sent;
                deployedQuestionsCount = deployedQuestions.length;

              case 12:
                i = 0;

              case 13:
                if (!(i < deployedQuestionsCount)) {
                  _context3.next = 28;
                  break;
                }

                question = Object(_ethereum_question__WEBPACK_IMPORTED_MODULE_19__["default"])(deployedQuestions[i]);
                _context3.next = 17;
                return question.methods.getSummary().call();

              case 17:
                summary = _context3.sent;

                if (summary[9]) {
                  _context3.next = 25;
                  break;
                }

                summaries[i] = summary;
                _context3.next = 22;
                return question.methods.getAnswerList().call();

              case 22:
                answerList = _context3.sent;
                summaries[i][10] = answerList.length;
                summaries[i][11] = deployedQuestions[i];

              case 25:
                i++;
                _context3.next = 13;
                break;

              case 28:
                summaries = summaries.reverse(); // Displays questions in interval of 30

                questionLimitChoice = [30];
                choice = Math.floor(summaries.length / 30);

                for (_i = 1; _i <= choice; _i++) {
                  questionLimitChoice.push(30 * (_i + 1));
                } // Get the top 10 used tags


                tags = {};
                summaries = summaries.slice(0, this.state.questionLimit);
                summaries.forEach(function (summary) {
                  summary[8].forEach(function (tag) {
                    if (tags[tag] == undefined) {
                      tags[tag] = 1;
                    } else {
                      tags[tag] = tags[tag] + 1;
                    }
                  });
                });
                sortedTags = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(tags).map(function (key) {
                  return [key, tags[key]];
                }); // Sort the array based on the second element

                sortedTags.sort(function (first, second) {
                  return second[1] - first[1];
                }); // Array of all tags

                tagList = [];
                sortedTags.forEach(function (tag) {
                  tagList.push(tag[0]);
                }); // Array with only the first 10 items

                tags = [];
                sortedTags.slice(0, 10).forEach(function (tag) {
                  tags.push(tag[0]);
                });
                _context3.next = 43;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_23__["default"].eth.isMining();

              case 43:
                isMining = _context3.sent;
                _context3.next = 46;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_23__["default"].eth.getBlockNumber();

              case 46:
                blockNumber = _context3.sent;
                this.setState({
                  isMining: isMining,
                  blockNumber: blockNumber
                });
                this.setState({
                  topTags: tags
                });
                this.setState({
                  tags: tagList
                });
                this.setState({
                  summaries: summaries
                });
                this.setState({
                  questionLimitChoice: questionLimitChoice
                });

              case 52:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchQuestionData() {
        return _fetchQuestionData.apply(this, arguments);
      }

      return fetchQuestionData;
    }() // Function to handle the sorting of leaderboard

  }, {
    key: "renderQuestionHeader",
    value: function renderQuestionHeader() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
        textAlign: "center",
        width: 2
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontSize: 15,
          color: '#6A737C'
        }
      }, "Current Phase")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
        textAlign: "center",
        width: 2
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontSize: 15,
          color: '#6A737C'
        }
      }, "Answers Submitted")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
        textAlign: "center",
        width: 2
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontSize: 15,
          color: '#6A737C'
        }
      }, "Reward")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontSize: 15,
          color: '#6A737C'
        }
      }, "Question Title")));
    } // Renders out the list of question

  }, {
    key: "renderQuestionList",
    value: function renderQuestionList() {
      var _this2 = this;

      var summaries = this.state.summaries;
      summaries = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_24__["sortingQuestions"])(summaries, this.state.sortBy);
      return summaries.map(function (summary, index) {
        var questionState = summary[4];
        var tagList = summary[8];
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          textAlign: "center",
          width: 2
        }, questionState == 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], {
          size: "mini",
          color: "red"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: 'red'
          }
        }, " Answering")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, "Phase"))) : questionState == 1 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], {
          size: "mini",
          color: "red"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#C9C633'
          }
        }, " Voting")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, "Phase"))) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], {
          size: "mini",
          color: "red"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#10EE44'
          }
        }, " Rewarded")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, "Phase")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          textAlign: "center",
          width: 2
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], {
          size: "mini",
          color: "red"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, summary[10])), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, "answer(s)")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          textAlign: "center",
          width: 2
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], {
          size: "mini",
          color: "red"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, summary[2] * 1e-4)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 15,
            color: '#6A737C'
          }
        }, "EQT(s)")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, {
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          style: {
            fontSize: 18,
            color: '#6A737C',
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute("/questions/".concat(summary[11]));
          }
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", null, summary[0]))), _this2.renderTag(tagList, "mini")));
      });
    }
  }, {
    key: "renderMobileQuestionList",
    value: function renderMobileQuestionList() {
      var _this3 = this;

      return this.state.summaries.map(function (summary, index) {
        var tags = summary[8];
        var questionState = summary[4];
        var tagList = summary[8];
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Item, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Icon, {
          name: "question circle",
          size: "large",
          verticalAlign: "middle"
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Header, {
          as: "a",
          onClick: function onClick() {
            return _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute("/questions/".concat(summary[11]));
          }
        }, summary[0]), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 10
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Description, null, "Number of Answer(s): " + summary[10]), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Description, null, "Reward: " + summary[2] * 1e-4 + " EQT(s)"), _this3.renderTag(tags, "mini")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 4
        }, questionState == 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Description, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("font", {
          color: "red"
        }, "ANSWERING PHASE"))) : questionState == 1 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Description, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("font", {
          color: "#C9C633"
        }, "VOTING PHASE"))) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"].Description, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("font", {
          color: "#10EE44"
        }, "REWARDED PHASE")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
          hidden: true
        }));
      });
    } // Render each tag individually for each question

  }, {
    key: "renderTag",
    value: function renderTag(tagList, tagSize) {
      var tagColours = ["red", "olive", "blue", "teal", "green"];
      return tagList.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Label"], {
          as: "a",
          onClick: function onClick() {
            return _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute("/".concat('search/' + encodeURIComponent(tag)));
          },
          tag: true,
          size: tagSize,
          key: index,
          color: tagColours[index % 5]
        }, tag);
      });
    }
  }, {
    key: "renderLeaderBoard",
    value: function renderLeaderBoard() {
      var _this$state2 = this.state,
          column = _this$state2.column,
          data = _this$state2.data,
          direction = _this$state2.direction;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        as: "h3",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "chess king"
      }), "Leaderboard"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"], {
        basic: "very",
        celled: true,
        collapsing: true,
        sortable: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, null, "Account"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
        sorted: column === 'points' ? direction : null,
        onClick: this.handleSort('points')
      }, "Point(s)"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Body, null, this.renderUserList())), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"], {
        basic: "very",
        celled: true,
        collapsing: true,
        sortable: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, null, "Employee"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, null, "Correct Guesses"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Body, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        as: "h4",
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"].Content, null, "Matthew", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"].Subheader, null, "Fabric Design")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, null, "15")))));
    }
  }, {
    key: "renderUserList",
    value: function renderUserList() {
      return this.state.leaderboardData.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          textAlign: "center"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          style: {
            fontSize: "12px"
          }
        }, item.account)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          textAlign: "center"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          style: {
            fontSize: "12px"
          }
        }, item.points)));
      });
    }
  }, {
    key: "renderTopTags",
    value: function renderTopTags() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        as: "h3",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "tags"
      }), "Top 10 Tags"), this.renderTag(this.state.topTags, "medium"));
    }
  }, {
    key: "renderQuestionStatistics",
    value: function renderQuestionStatistics() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Group, {
        horizontal: true,
        color: "red"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, this.state.deployedQuestionsCount), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, "Questions Asked"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Group, {
        horizontal: true,
        color: "yellow"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, this.state.leaderboardData.length), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, "Active Users"))));
    }
  }, {
    key: "renderBlockChainStatistics",
    value: function renderBlockChainStatistics() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        as: "h3",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "ethereum"
      }), "Block-Chain Status"), this.state.isMining ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontSize: 18,
          color: 'green'
        }
      }, "Currently Mining")) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          fontSize: 18,
          color: 'red'
        }
      }, "Currently Not Mining")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Group, {
        horizontal: true,
        color: "green"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Value, null, this.state.blockNumber), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Statistic"].Label, null, "Blocks Mined"))), "*When blockchain is not mining, do not create any transaction");
    }
  }, {
    key: "renderSortSettings",
    value: function renderSortSettings() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "sort"
      }), "Sort Questions By: ", ' ', react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        inline: true,
        options: [{
          key: 'Ascending Phase',
          text: 'Ascending Phase',
          value: 0
        }, {
          key: 'Descending Phase',
          text: 'Descending Phase',
          value: 1
        }, {
          key: 'Ascending Answers',
          text: 'Ascending Answers',
          value: 2
        }, {
          key: 'Descending Answers',
          text: 'Descending Answers',
          value: 3
        }, {
          key: 'Ascending Rewards',
          text: 'Ascending Rewards',
          value: 4
        }, {
          key: 'Descending Rewards',
          text: 'Descending Rewards',
          value: 5
        }],
        onChange: this.handleChange
      }));
    }
  }, {
    key: "renderFilterSettings",
    value: function renderFilterSettings() {
      var tagColours = ["red", "olive", "blue", "teal", "green"];
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "filter"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        text: "Filter Questions",
        multiple: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Menu, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Header, {
        icon: "tags",
        content: "Tag Label"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Menu, {
        scrolling: true
      }, this.state.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
          key: index,
          text: tag,
          label: {
            color: tagColours[index % 6],
            empty: true,
            circular: true
          },
          onClick: function onClick() {
            return _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute("/".concat('search/' + encodeURIComponent(tag)));
          }
        });
      })))));
    }
  }, {
    key: "renderQuestionLimitSettings",
    value: function renderQuestionLimitSettings() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        text: "Questions To Show",
        multiple: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Menu, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Header, {
        icon: "list",
        content: "Question Limit"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Menu, {
        scrolling: true
      }, this.state.questionLimitChoice.map(function (choice, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
          key: index,
          text: choice,
          onClick:
          /*#__PURE__*/
          Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this4.setState({
                      questionLimit: choice
                    });

                  case 2:
                    _this4.fetchQuestionData();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }))
        });
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.login) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_21__["default"], {
          accountType: this.state.accountType,
          page: "Home"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Responsive"], {
          fireOnMount: true,
          getWidth: Object(_utils_device__WEBPACK_IMPORTED_MODULE_16__["getWidthFactory"])(this.props.isMobileFromSSR),
          minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Responsive"].onlyTablet.minWidth
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
          centered: true
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 4
        }, this.renderLeaderBoard()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 8
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "Questions Posted"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 5
        }, this.renderSortSettings()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 5
        }, this.renderFilterSettings(), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
            circular: true,
            icon: "cancel",
            onClick: function onClick() {
              return _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute("/home");
            }
          }),
          content: "Clear Filter"
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 6
        }, this.renderQuestionLimitSettings())), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Header, null, this.renderQuestionHeader()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Body, null, this.renderQuestionList())), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          style: {
            marginTop: 20
          }
        }, "Found ", this.state.summaries.length, " Item(s).")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
          width: 3
        }, this.renderQuestionStatistics(), this.renderTopTags(), this.renderBlockChainStatistics()))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Responsive"], {
          fireOnMount: true,
          getWidth: Object(_utils_device__WEBPACK_IMPORTED_MODULE_16__["getWidthFactory"])(this.props.isMobileFromSSR),
          maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Responsive"].onlyMobile.maxWidth
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
          centered: true
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "Questions Posted"), this.renderSortSettings(), this.renderFilterSettings(), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
            circular: true,
            icon: "cancel",
            onClick: function onClick() {
              return _routes__WEBPACK_IMPORTED_MODULE_22__["Router"].pushRoute("/home");
            }
          }),
          content: "Clear Filter"
        }), this.renderQuestionLimitSettings(), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["List"], {
          divided: true,
          relaxed: true
        }, this.renderMobileQuestionList()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          style: {
            marginTop: 20
          }
        }, "Found ", this.state.summaries.length, " Item(s).")))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_21__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
          loading: this.state.loading,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(props) {
        var isMobileFromSSR, queryValue, device, md;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isMobileFromSSR = false;
                queryValue = props.query.value;

                if (props.req) {
                  device = props.req.headers["user-agent"];
                  md = new mobile_detect__WEBPACK_IMPORTED_MODULE_12___default.a(device);
                  isMobileFromSSR = !!md.mobile();
                }

                return _context5.abrupt("return", {
                  isMobileFromSSR: isMobileFromSSR,
                  queryValue: queryValue,
                  isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_25___default()(props).login || '',
                  account: next_cookies__WEBPACK_IMPORTED_MODULE_25___default()(props).wallet || ''
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=home.js.050952b34d0cf5daee71.hot-update.js.map