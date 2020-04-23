webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AccountIssueModal */ "./components/AccountIssueModal.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/profile */ "./ethereum/profile.js");
/* harmony import */ var _ethereum_credentials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/credentials */ "./ethereum/credentials.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_14__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var AboutPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutPage, _Component);

  var _super = _createSuper(AboutPage);

  function AboutPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AboutPage);

    _this = _super.call(this, props);
    _this.state = {
      login: false,
      loading: true,
      accountType: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AboutPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var login, profileAddress, profile, accountType;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__["default"] === 'undefined')) {
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_factory__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getProfile(this.props.account).call());

            case 8:
              profileAddress = _context.sent;
              profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_12__["default"])(profileAddress);
              _context.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(profile.methods.getAccountType().call());

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
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.login) {
        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          accountType: this.state.accountType,
          page: 'About'
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
          hidden: true
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
          raised: true
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
          as: "h2",
          textAlign: "center"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "question"
        }), "What Can I Do Here?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
          as: "h3",
          textAlign: "left"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "pencil alternate"
        }), "Ask New Question"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], null), __jsx("p", {
          style: {
            fontSize: '16px'
          }
        }, "You need to have at least ", __jsx("b", null, " 1 EQT"), " as the reward for the question. If your question has no answers provided within the duration specified, the reward will be returned to you. Do note that you cannot ask ", __jsx("b", null, "Assignments "), " or ", __jsx("b", null, "Tutorial Questions"), ". Fraudulent accounts will be ", __jsx("b", null, "removed from the system and banned from future use"), "."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
          as: "h3",
          textAlign: "left"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "add"
        }), "Answer Questions"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], null), __jsx("p", {
          style: {
            fontSize: '16px'
          }
        }, "You can provide answers to questions asked by others on the Home page. Do note that you do not need to use any EQT to provide an answer."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
          as: "h3",
          textAlign: "left"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "thumbs up"
        }), "Approving Answers"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], null), __jsx("p", {
          style: {
            fontSize: '16px'
          }
        }, "You can approve answers provided for each question during ", __jsx("b", null, "Voting Phase"), " depending on its relevance and usefulness. A deposit of ", __jsx("b", null, "1 EQT"), " will be deducted for each answer you approve. The deposit will be returned to you only if the answer you approved of is eventually awarded the reward. All forefited deposits will be distributed among other users who approved the answer that is awarded."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
          hidden: true
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
          raised: true
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
          as: "h2",
          textAlign: "center"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "ethereum"
        }), "What is EthQuestionToken (EQT)?")), __jsx("p", {
          style: {
            fontSize: '16px'
          }
        }, "Cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given ", __jsx("b", null, "10 EQTs"), " upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question. Exchange for EQTs ", __jsx("a", {
          href: "/userProfile"
        }, "here"), "."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
          hidden: true
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
          raised: true
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
          as: "h2",
          textAlign: "center"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "video"
        }), "Watch For More")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Embed"], {
          id: "jImWp6P62FQ",
          source: "youtube"
        })));
      } else {
        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          accountType: this.state.accountType
        }, __jsx(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
          loading: this.state.loading,
          login: this.state.login
        }));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", {
                isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_14___default()(props).login || '',
                account: next_cookies__WEBPACK_IMPORTED_MODULE_14___default()(props).wallet || ''
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return AboutPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=about.js.39204c896834f07a5911.hot-update.js.map