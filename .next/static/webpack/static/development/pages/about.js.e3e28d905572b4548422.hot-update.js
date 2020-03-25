webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var _ethereum_credentials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ethereum/credentials */ "./ethereum/credentials.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_15__);

















var AboutPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AboutPage, _Component);

  function AboutPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AboutPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AboutPage).call(this, props));
    _this.state = {
      login: false,
      loading: true,
      accountType: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var login, profileAddress, profile, accountType;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"] === 'undefined')) {
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
                  _context.next = 16;
                  break;
                }

                login = true; // Get Account Type

                _context.next = 8;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getProfile(this.props.account).call();

              case 8:
                profileAddress = _context.sent;
                profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_13__["default"])(profileAddress);
                _context.next = 12;
                return profile.methods.getAccountType().call();

              case 12:
                accountType = _context.sent;
                accountType == 0 ? accountType = "Admin" : accountType = "User";
                this.setState({
                  login: login
                });
                this.setState({
                  accountType: accountType
                });

              case 16:
                this.setState({
                  loading: false
                });

              case 17:
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
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.login) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
          accountType: this.state.accountType,
          page: 'About'
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
          raised: true,
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "SCSE19-0299: Block-Chain Based Question Answering System")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h3",
          textAlign: "left"
        }, "Project Details"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "This is an experimental system for School Of Computer Science & Engineereing (SCSE) Final Year Project titled SCSE19-0299."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h3",
          textAlign: "left"
        }, "System Rules & Guidelines"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "No posting of ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Assignments "), " or ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Tutorial Questions"), " is allowed. Fraudulent accounts will be ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "removed from the system and banned from future use"), "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h3",
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          name: "question"
        }), "What is EthQuestionToken (EQT)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "EthQuestionToken (EQT) is a cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "10 EQTs"), " upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question. Additionally, user can exchange points earned through their participation on the system.", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, " 5 EQTs"), " for every ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "100 points"), " earned."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
          hidden: true
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
          raised: true
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "What Can I Do Here?")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h3",
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          name: "pencil alternate"
        }), "Ask New Question"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "Access using \"", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Ask Question"), "\" tab above. Each creation of new question requires at least", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, " 1 EQT"), " as the reward. In the event that there are no answers provided within the duration specified, the reward will be returned to the owner of the question. No posting of ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Assignments "), " or ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Tutorial Questions"), " is allowed. Fraudulent accounts will be ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "removed from the system and banned from future use"), "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h3",
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          name: "add"
        }), "Answer Questions"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "All questions posted can be view from the Home Page access via ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "\"Home\""), " tab above. Clicking on the question title will provide additional details on the question as well as providing the form to submit an answer for the question. No EQT are required for answering of question."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h3",
          textAlign: "left"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          name: "thumbs up"
        }), "Approving Answers"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: {
            fontSize: '16px'
          }
        }, "When the question is in the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "\"Voting Phase\""), ", all users can view all answers that are submitted and approve each answer depending on its relevance and helpfulness. Each approval requires ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "1 EQT"), ". Each user can only", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, " approve each answer once"), ". After the \"Voting Phase\", users who approved the answer with the highest approvals will have their ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "1 EQT"), " returned. Additionally, EQT from users who approve other answers would be distributed among users who approved the answer with the highest approvals."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
          raised: true
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
          as: "h2",
          textAlign: "center"
        }, "User Guide")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Embed"], {
          id: "pdRTt2QabOg",
          source: "youtube"
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
          accountType: this.state.accountType
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          loading: this.state.loading,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {
                  isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_15___default()(props).login || '',
                  account: next_cookies__WEBPACK_IMPORTED_MODULE_15___default()(props).wallet || ''
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

  return AboutPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=about.js.e3e28d905572b4548422.hot-update.js.map