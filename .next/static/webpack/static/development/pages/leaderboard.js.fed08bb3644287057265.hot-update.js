webpackHotUpdate("static\\development\\pages\\leaderboard.js",{

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_18__);




















var LeaderboardPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(LeaderboardPage, _Component);

  function LeaderboardPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LeaderboardPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(LeaderboardPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSort", function (clickedColumn) {
      return function () {
        var _this$state = _this.state,
            column = _this$state.column,
            leaderboardData = _this$state.leaderboardData,
            direction = _this$state.direction;

        if (column !== clickedColumn) {
          _this.setState({
            column: clickedColumn,
            leaderboardData: lodash__WEBPACK_IMPORTED_MODULE_12___default.a.sortBy(leaderboardData, [clickedColumn]),
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

    _this.state = {
      login: false,
      loading: true,
      accountType: null,
      column: null,
      direction: null,
      leaderboardData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LeaderboardPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var login, profileAddress, profile, accountType, ethWallet, accountPointMapping, i, points;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__["default"] === 'undefined')) {
                  _context.next = 3;
                  break;
                }

                this.setState({
                  loading: false
                });
                return _context.abrupt("return");

              case 3:
                login = false;

                if (!this.props.isLogin) {
                  _context.next = 34;
                  break;
                }

                login = true; // Get Account Type

                _context.next = 8;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getProfile(this.props.account).call();

              case 8:
                profileAddress = _context.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_17__["default"])(profileAddress);
                _context.next = 12;
                return profile.methods.getAccountType().call();

              case 12:
                accountType = _context.sent;
                accountType == 0 ? accountType = "Admin" : accountType = "User"; // Retireve an array of addresses of ethWallets registered

                _context.next = 16;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getEthWallets().call();

              case 16:
                ethWallet = _context.sent;
                accountPointMapping = [];
                i = 0;

              case 19:
                if (!(i < ethWallet.length)) {
                  _context.next = 31;
                  break;
                }

                _context.next = 22;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getProfile(ethWallet[i]).call();

              case 22:
                profileAddress = _context.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_17__["default"])(profileAddress);
                _context.next = 26;
                return profile.methods.getPoints().call();

              case 26:
                points = _context.sent;
                accountPointMapping.push({
                  account: ethWallet[i],
                  points: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(points)
                });

              case 28:
                i++;
                _context.next = 19;
                break;

              case 31:
                // Set the states required for the Leaderboard and ensure it is descending by default
                this.setState({
                  leaderboardData: lodash__WEBPACK_IMPORTED_MODULE_12___default.a.sortBy(accountPointMapping, ['points']).reverse()
                });
                this.setState({
                  login: login
                });
                this.setState({
                  accountType: accountType
                });

              case 34:
                this.setState({
                  loading: false
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // Function to handle the sorting of leaderboard

  }, {
    key: "renderLeaderBoard",
    value: function renderLeaderBoard() {
      var _this$state2 = this.state,
          column = _this$state2.column,
          data = _this$state2.data,
          direction = _this$state2.direction;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Container"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"], {
        basic: "very",
        celled: true,
        sortable: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].HeaderCell, {
        textAlign: "center"
      }, "Account"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].HeaderCell, {
        textAlign: "center",
        sorted: column === 'points' ? direction : null,
        onClick: this.handleSort('points')
      }, "Point(s)"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Body, null, this.renderUserList())));
    }
  }, {
    key: "renderUserList",
    value: function renderUserList() {
      return this.state.leaderboardData.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Row, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Cell, {
          textAlign: "center"
        }, item.account), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Cell, {
          textAlign: "center"
        }, item.points));
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.login) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
          accountType: this.state.accountType,
          page: 'About'
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Container"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Segment"], {
          raised: true,
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Header"], {
          as: "h2",
          textAlign: "center"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
          name: "chess king"
        }), "Current Leaderboard Standings")), this.renderLeaderBoard(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '20px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
          name: "question"
        }), "How are points awarded?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "When you ask a question:"), " 5 Points"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "When you are rewarded for your answer:"), " 4 Points"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "When you submit an answer:"), " 2 Points"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "When the answer you approved gets awarded:"), " 2 Points"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "When you approve an answer:"), " 1 Point"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '20px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
          name: "question"
        }), "What can I do with my points?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "Upon reaching ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "100 points"), ", you can exchange for ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "5 EQTs")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '20px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
          name: "question"
        }), "What is EthQuestionToken (EQT)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "Cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "10 EQTs"), " upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question.")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          loading: this.state.loading,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {
                  isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_18___default()(props).login || '',
                  account: next_cookies__WEBPACK_IMPORTED_MODULE_18___default()(props).wallet || ''
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LeaderboardPage;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LeaderboardPage);

/***/ })

})
//# sourceMappingURL=leaderboard.js.fed08bb3644287057265.hot-update.js.map