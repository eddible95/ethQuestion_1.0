module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0cGM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UZm1");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5Yp1");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oZBQ");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("OIDg");
/* harmony import */ var _ethereum_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XPRw");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class LeaderboardPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSort", clickedColumn => () => {
      const {
        column,
        leaderboardData,
        direction
      } = this.state;

      if (column !== clickedColumn) {
        this.setState({
          column: clickedColumn,
          leaderboardData: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.sortBy(leaderboardData, [clickedColumn]),
          direction: 'ascending'
        });
        return;
      }

      this.setState({
        leaderboardData: leaderboardData.reverse(),
        direction: direction === 'ascending' ? 'descending' : 'ascending'
      });
    });

    this.state = {
      login: false,
      loading: true,
      accountType: null,
      column: null,
      direction: null,
      leaderboardData: []
    };
  }

  static async getInitialProps(props) {
    return {
      isLogin: next_cookies__WEBPACK_IMPORTED_MODULE_8___default()(props).login || '',
      account: next_cookies__WEBPACK_IMPORTED_MODULE_8___default()(props).wallet || ''
    };
  }

  async componentDidMount() {
    if (typeof _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] === 'undefined') {
      this.setState({
        loading: false
      });
      return;
    }

    let login = false;

    if (this.props.isLogin) {
      login = true; // Get Account Type

      let profileAddress = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].methods.getProfile(this.props.account).call();
      let profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(profileAddress);
      let accountType = await profile.methods.getAccountType().call();
      accountType == 0 ? accountType = "Admin" : accountType = "User"; // Retireve an array of addresses of ethWallets registered

      let ethWallet = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].methods.getEthWallets().call();
      let accountPointMapping = [];

      for (let i = 0; i < ethWallet.length; i++) {
        profileAddress = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].methods.getProfile(ethWallet[i]).call();
        profile = Object(_ethereum_profile__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(profileAddress);
        let points = await profile.methods.getPoints().call();
        accountPointMapping.push({
          account: ethWallet[i],
          points: parseInt(points)
        });
      } // Set the states required for the Leaderboard and ensure it is descending by default


      this.setState({
        leaderboardData: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.sortBy(accountPointMapping, ['points']).reverse()
      });
      this.setState({
        login: login
      });
      this.setState({
        accountType: accountType
      });
    }

    this.setState({
      loading: false
    });
  } // Function to handle the sorting of leaderboard


  renderLeaderBoard() {
    const {
      column,
      data,
      direction
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
      basic: "very",
      celled: true,
      sortable: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, {
      textAlign: "center"
    }, "Account"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, {
      textAlign: "center",
      sorted: column === 'points' ? direction : null,
      onClick: this.handleSort('points')
    }, "Point(s)"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, this.renderUserList())));
  }

  renderUserList() {
    return this.state.leaderboardData.map((item, index) => {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, {
        key: index
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
        textAlign: "center"
      }, item.account), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
        textAlign: "center"
      }, item.points));
    });
  }

  render() {
    if (this.state.login) {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        accountType: this.state.accountType,
        page: 'Leaderboard'
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        hidden: true
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        raised: true,
        textAlign: "left"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h2",
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "chess king"
      }), "Current Leaderboard Standings")), this.renderLeaderBoard(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), __jsx("p", {
        style: {
          fontSize: '20px'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "question"
      }), "How are points awarded?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, __jsx("b", null, "When you ask a question:"), " 5 Points"), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, __jsx("b", null, "When you are rewarded for your answer:"), " 4 Points"), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, __jsx("b", null, "When you submit an answer:"), " 2 Points"), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, __jsx("b", null, "When the answer you approved gets awarded:"), " 2 Points"), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, __jsx("b", null, "When you approve an answer:"), " 1 Point"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), __jsx("p", {
        style: {
          fontSize: '20px'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "question"
      }), "What can I do with my points?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, "Upon reaching ", __jsx("b", null, "100 points"), ", you can exchange for ", __jsx("b", null, "5 EQTs")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), __jsx("p", {
        style: {
          fontSize: '20px'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "question"
      }), "What is EthQuestionToken (EQT)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), __jsx("p", {
        style: {
          fontSize: '16px'
        }
      }, "Cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s). Each user is given ", __jsx("b", null, "10 EQTs"), " upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals for each question.")));
    } else {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        accountType: this.state.accountType
      }, __jsx(_components_AccountIssueModal__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        loading: this.state.loading,
        login: this.state.login
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LeaderboardPage);

/***/ }),

/***/ "3JbG":
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":107,\"end\":1529,\"name\":\"MSTORE\"},{\"begin\":568,\"end\":719,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":568,\"end\":719,\"name\":\"POP\"},{\"begin\":568,\"end\":719,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":568,\"end\":719,\"name\":\"MLOAD\"},{\"begin\":568,\"end\":719,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":568,\"end\":719,\"name\":\"DUP1\"},{\"begin\":568,\"end\":719,\"name\":\"PUSHSIZE\"},{\"begin\":568,\"end\":719,\"name\":\"DUP4\"},{\"begin\":568,\"end\":719,\"name\":\"CODECOPY\"},{\"begin\":568,\"end\":719,\"name\":\"DUP2\"},{\"begin\":568,\"end\":719,\"name\":\"ADD\"},{\"begin\":568,\"end\":719,\"name\":\"DUP1\"},{\"begin\":568,\"end\":719,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":568,\"end\":719,\"name\":\"MSTORE\"},{\"begin\":568,\"end\":719,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":568,\"end\":719,\"name\":\"SWAP2\"},{\"begin\":568,\"end\":719,\"name\":\"SWAP1\"},{\"begin\":568,\"end\":719,\"name\":\"DUP2\"},{\"begin\":568,\"end\":719,\"name\":\"ADD\"},{\"begin\":568,\"end\":719,\"name\":\"SWAP1\"},{\"begin\":568,\"end\":719,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":568,\"end\":719,\"name\":\"JUMP\"},{\"begin\":568,\"end\":719,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":568,\"end\":719,\"name\":\"JUMPDEST\"},{\"begin\":612,\"end\":622,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":612,\"end\":633,\"name\":\"DUP1\"},{\"begin\":612,\"end\":633,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":612,\"end\":633,\"name\":\"AND\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":612,\"end\":633,\"name\":\"DUP4\"},{\"begin\":612,\"end\":633,\"name\":\"AND\"},{\"begin\":612,\"end\":633,\"name\":\"OR\"},{\"begin\":612,\"end\":633,\"name\":\"DUP1\"},{\"begin\":612,\"end\":633,\"name\":\"DUP3\"},{\"begin\":612,\"end\":633,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"SWAP2\"},{\"begin\":612,\"end\":622,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":640,\"end\":670,\"name\":\"AND\"},{\"begin\":640,\"end\":670,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"DUP4\"},{\"begin\":640,\"end\":670,\"name\":\"MUL\"},{\"begin\":640,\"end\":670,\"name\":\"OR\"},{\"begin\":640,\"end\":670,\"name\":\"SWAP1\"},{\"begin\":640,\"end\":670,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":686,\"end\":687,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":677,\"end\":683,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":677,\"end\":687,\"name\":\"DUP2\"},{\"begin\":677,\"end\":687,\"name\":\"SWAP1\"},{\"begin\":677,\"end\":687,\"name\":\"SSTORE\"},{\"begin\":694,\"end\":709,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":694,\"end\":713,\"name\":\"SSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMP\"},{\"begin\":5,\"end\":127,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":5,\"end\":127,\"name\":\"JUMPDEST\"},{\"begin\":5,\"end\":127,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":83,\"end\":122,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":114,\"end\":120,\"name\":\"DUP3\"},{\"begin\":108,\"end\":121,\"name\":\"MLOAD\"},{\"begin\":83,\"end\":122,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":83,\"end\":122,\"name\":\"JUMP\"},{\"begin\":83,\"end\":122,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":83,\"end\":122,\"name\":\"JUMPDEST\"},{\"begin\":74,\"end\":122,\"name\":\"SWAP4\"},{\"begin\":68,\"end\":127,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":68,\"end\":127,\"name\":\"JUMP\"},{\"begin\":134,\"end\":397,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":134,\"end\":397,\"name\":\"JUMPDEST\"},{\"begin\":134,\"end\":397,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":249,\"end\":251,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":237,\"end\":246,\"name\":\"DUP3\"},{\"begin\":228,\"end\":235,\"name\":\"DUP5\"},{\"begin\":224,\"end\":247,\"name\":\"SUB\"},{\"begin\":220,\"end\":252,\"name\":\"SLT\"},{\"begin\":217,\"end\":219,\"name\":\"ISZERO\"},{\"begin\":217,\"end\":219,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":217,\"end\":219,\"name\":\"JUMPI\"},{\"begin\":265,\"end\":266,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":262,\"end\":263,\"name\":\"DUP1\"},{\"begin\":255,\"end\":267,\"name\":\"REVERT\"},{\"begin\":217,\"end\":219,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":217,\"end\":219,\"name\":\"JUMPDEST\"},{\"begin\":300,\"end\":301,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":317,\"end\":381,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":373,\"end\":380,\"name\":\"DUP5\"},{\"begin\":353,\"end\":362,\"name\":\"DUP5\"},{\"begin\":317,\"end\":381,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":317,\"end\":381,\"name\":\"JUMP\"},{\"begin\":317,\"end\":381,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":317,\"end\":381,\"name\":\"JUMPDEST\"},{\"begin\":307,\"end\":381,\"name\":\"SWAP5\"},{\"begin\":211,\"end\":397,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":211,\"end\":397,\"name\":\"JUMP\"},{\"begin\":404,\"end\":532,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":404,\"end\":532,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":473,\"end\":527,\"name\":\"AND\"},{\"begin\":473,\"end\":527,\"name\":\"SWAP1\"},{\"begin\":456,\"end\":532,\"name\":\"JUMP\"},{\"begin\":456,\"end\":532,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":456,\"end\":532,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"CODECOPY\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a265627a7a72305820104ff0702dcb242043fba9b15fee13172fd56e4cc492c2b9ddcedf73ff5400546c6578706572696d656e74616cf50037\",\".code\":[{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":107,\"end\":1529,\"name\":\"MSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":107,\"end\":1529,\"name\":\"CALLDATASIZE\"},{\"begin\":107,\"end\":1529,\"name\":\"LT\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"CALLDATALOAD\"},{\"begin\":107,\"end\":1529,\"name\":\"DIV\"},{\"begin\":107,\"end\":1529,\"name\":\"AND\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"16540941\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP2\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1BE6DD64\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"2CAE2096\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"41413B2F\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"52D6A0A3\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"83920E90\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"95EEC3C9\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"9ACE38C2\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"9BFC4A8F\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"A0296BE1\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"A7E33BA8\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"B0848304\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"B2036198\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"F4B7095B\"},{\"begin\":107,\"end\":1529,\"name\":\"EQ\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"REVERT\"},{\"begin\":1442,\"end\":1526,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMPDEST\"},{\"begin\":1442,\"end\":1526,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1442,\"end\":1526,\"name\":\"POP\"},{\"begin\":1442,\"end\":1526,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":1442,\"end\":1526,\"name\":\"PUSH [tag]\",\"value\":\"18\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMP\"},{\"begin\":1442,\"end\":1526,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMPDEST\"},{\"begin\":1442,\"end\":1526,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1442,\"end\":1526,\"name\":\"MLOAD\"},{\"begin\":1442,\"end\":1526,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":1442,\"end\":1526,\"name\":\"SWAP2\"},{\"begin\":1442,\"end\":1526,\"name\":\"SWAP1\"},{\"begin\":1442,\"end\":1526,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMP\"},{\"begin\":1442,\"end\":1526,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMPDEST\"},{\"begin\":1442,\"end\":1526,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1442,\"end\":1526,\"name\":\"MLOAD\"},{\"begin\":1442,\"end\":1526,\"name\":\"DUP1\"},{\"begin\":1442,\"end\":1526,\"name\":\"SWAP2\"},{\"begin\":1442,\"end\":1526,\"name\":\"SUB\"},{\"begin\":1442,\"end\":1526,\"name\":\"SWAP1\"},{\"begin\":1442,\"end\":1526,\"name\":\"RETURN\"},{\"begin\":337,\"end\":355,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":337,\"end\":355,\"name\":\"JUMPDEST\"},{\"begin\":337,\"end\":355,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"21\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"21\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":337,\"end\":355,\"name\":\"POP\"},{\"begin\":337,\"end\":355,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":337,\"end\":355,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":337,\"end\":355,\"name\":\"JUMP\"},{\"begin\":337,\"end\":355,\"name\":\"tag\",\"value\":\"22\"},{\"begin\":337,\"end\":355,\"name\":\"JUMPDEST\"},{\"begin\":337,\"end\":355,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":337,\"end\":355,\"name\":\"MLOAD\"},{\"begin\":337,\"end\":355,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":337,\"end\":355,\"name\":\"SWAP2\"},{\"begin\":337,\"end\":355,\"name\":\"SWAP1\"},{\"begin\":337,\"end\":355,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":337,\"end\":355,\"name\":\"JUMP\"},{\"begin\":725,\"end\":796,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":725,\"end\":796,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":796,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":796,\"name\":\"POP\"},{\"begin\":725,\"end\":796,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":725,\"end\":796,\"name\":\"PUSH [tag]\",\"value\":\"28\"},{\"begin\":725,\"end\":796,\"name\":\"JUMP\"},{\"begin\":725,\"end\":796,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":725,\"end\":796,\"name\":\"JUMPDEST\"},{\"begin\":725,\"end\":796,\"name\":\"STOP\"},{\"begin\":421,\"end\":448,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":421,\"end\":448,\"name\":\"JUMPDEST\"},{\"begin\":421,\"end\":448,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":421,\"end\":448,\"name\":\"POP\"},{\"begin\":421,\"end\":448,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":421,\"end\":448,\"name\":\"PUSH [tag]\",\"value\":\"31\"},{\"begin\":421,\"end\":448,\"name\":\"JUMP\"},{\"begin\":802,\"end\":892,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":802,\"end\":892,\"name\":\"JUMPDEST\"},{\"begin\":802,\"end\":892,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":802,\"end\":892,\"name\":\"POP\"},{\"begin\":802,\"end\":892,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":802,\"end\":892,\"name\":\"PUSH [tag]\",\"value\":\"35\"},{\"begin\":802,\"end\":892,\"name\":\"JUMP\"},{\"begin\":802,\"end\":892,\"name\":\"tag\",\"value\":\"34\"},{\"begin\":802,\"end\":892,\"name\":\"JUMPDEST\"},{\"begin\":802,\"end\":892,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":802,\"end\":892,\"name\":\"MLOAD\"},{\"begin\":802,\"end\":892,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":802,\"end\":892,\"name\":\"SWAP2\"},{\"begin\":802,\"end\":892,\"name\":\"SWAP1\"},{\"begin\":802,\"end\":892,\"name\":\"PUSH [tag]\",\"value\":\"37\"},{\"begin\":802,\"end\":892,\"name\":\"JUMP\"},{\"begin\":1347,\"end\":1436,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":1347,\"end\":1436,\"name\":\"JUMPDEST\"},{\"begin\":1347,\"end\":1436,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"38\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"38\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1347,\"end\":1436,\"name\":\"POP\"},{\"begin\":1347,\"end\":1436,\"name\":\"PUSH [tag]\",\"value\":\"39\"},{\"begin\":1347,\"end\":1436,\"name\":\"PUSH [tag]\",\"value\":\"40\"},{\"begin\":1347,\"end\":1436,\"name\":\"JUMP\"},{\"begin\":1347,\"end\":1436,\"name\":\"tag\",\"value\":\"39\"},{\"begin\":1347,\"end\":1436,\"name\":\"JUMPDEST\"},{\"begin\":1347,\"end\":1436,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1347,\"end\":1436,\"name\":\"MLOAD\"},{\"begin\":1347,\"end\":1436,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":1347,\"end\":1436,\"name\":\"SWAP2\"},{\"begin\":1347,\"end\":1436,\"name\":\"SWAP1\"},{\"begin\":1347,\"end\":1436,\"name\":\"PUSH [tag]\",\"value\":\"42\"},{\"begin\":1347,\"end\":1436,\"name\":\"JUMP\"},{\"begin\":250,\"end\":280,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":250,\"end\":280,\"name\":\"JUMPDEST\"},{\"begin\":250,\"end\":280,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"43\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"43\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":250,\"end\":280,\"name\":\"POP\"},{\"begin\":250,\"end\":280,\"name\":\"PUSH [tag]\",\"value\":\"34\"},{\"begin\":250,\"end\":280,\"name\":\"PUSH [tag]\",\"value\":\"45\"},{\"begin\":250,\"end\":280,\"name\":\"JUMP\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"47\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"47\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"48\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"49\"},{\"begin\":492,\"end\":520,\"name\":\"CALLDATASIZE\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"50\"},{\"begin\":492,\"end\":520,\"name\":\"JUMP\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"49\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"51\"},{\"begin\":492,\"end\":520,\"name\":\"JUMP\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"48\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":492,\"end\":520,\"name\":\"MLOAD\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"53\"},{\"begin\":492,\"end\":520,\"name\":\"JUMP\"},{\"begin\":1156,\"end\":1247,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":1156,\"end\":1247,\"name\":\"JUMPDEST\"},{\"begin\":1156,\"end\":1247,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"54\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"54\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1156,\"end\":1247,\"name\":\"POP\"},{\"begin\":1156,\"end\":1247,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":1156,\"end\":1247,\"name\":\"PUSH [tag]\",\"value\":\"56\"},{\"begin\":1156,\"end\":1247,\"name\":\"JUMP\"},{\"begin\":977,\"end\":1071,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":977,\"end\":1071,\"name\":\"JUMPDEST\"},{\"begin\":977,\"end\":1071,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"58\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"58\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":977,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":977,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"60\"},{\"begin\":977,\"end\":1071,\"name\":\"CALLDATASIZE\"},{\"begin\":977,\"end\":1071,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":977,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"61\"},{\"begin\":977,\"end\":1071,\"name\":\"JUMP\"},{\"begin\":977,\"end\":1071,\"name\":\"tag\",\"value\":\"60\"},{\"begin\":977,\"end\":1071,\"name\":\"JUMPDEST\"},{\"begin\":977,\"end\":1071,\"name\":\"PUSH [tag]\",\"value\":\"62\"},{\"begin\":977,\"end\":1071,\"name\":\"JUMP\"},{\"begin\":129,\"end\":154,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":129,\"end\":154,\"name\":\"JUMPDEST\"},{\"begin\":129,\"end\":154,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"63\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"63\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":129,\"end\":154,\"name\":\"POP\"},{\"begin\":129,\"end\":154,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":129,\"end\":154,\"name\":\"PUSH [tag]\",\"value\":\"65\"},{\"begin\":129,\"end\":154,\"name\":\"JUMP\"},{\"begin\":898,\"end\":971,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":898,\"end\":971,\"name\":\"JUMPDEST\"},{\"begin\":898,\"end\":971,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"67\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"67\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":898,\"end\":971,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":898,\"end\":971,\"name\":\"PUSH [tag]\",\"value\":\"69\"},{\"begin\":898,\"end\":971,\"name\":\"CALLDATASIZE\"},{\"begin\":898,\"end\":971,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":898,\"end\":971,\"name\":\"PUSH [tag]\",\"value\":\"50\"},{\"begin\":898,\"end\":971,\"name\":\"JUMP\"},{\"begin\":898,\"end\":971,\"name\":\"tag\",\"value\":\"69\"},{\"begin\":898,\"end\":971,\"name\":\"JUMPDEST\"},{\"begin\":898,\"end\":971,\"name\":\"PUSH [tag]\",\"value\":\"70\"},{\"begin\":898,\"end\":971,\"name\":\"JUMP\"},{\"begin\":1253,\"end\":1341,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":1253,\"end\":1341,\"name\":\"JUMPDEST\"},{\"begin\":1253,\"end\":1341,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"71\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"71\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1253,\"end\":1341,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":1253,\"end\":1341,\"name\":\"PUSH [tag]\",\"value\":\"73\"},{\"begin\":1253,\"end\":1341,\"name\":\"CALLDATASIZE\"},{\"begin\":1253,\"end\":1341,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1253,\"end\":1341,\"name\":\"PUSH [tag]\",\"value\":\"50\"},{\"begin\":1253,\"end\":1341,\"name\":\"JUMP\"},{\"begin\":1253,\"end\":1341,\"name\":\"tag\",\"value\":\"73\"},{\"begin\":1253,\"end\":1341,\"name\":\"JUMPDEST\"},{\"begin\":1253,\"end\":1341,\"name\":\"PUSH [tag]\",\"value\":\"74\"},{\"begin\":1253,\"end\":1341,\"name\":\"JUMP\"},{\"begin\":1077,\"end\":1150,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":1077,\"end\":1150,\"name\":\"JUMPDEST\"},{\"begin\":1077,\"end\":1150,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"75\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"75\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":1077,\"end\":1150,\"name\":\"POP\"},{\"begin\":1077,\"end\":1150,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":1077,\"end\":1150,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":1077,\"end\":1150,\"name\":\"JUMP\"},{\"begin\":1442,\"end\":1526,\"name\":\"tag\",\"value\":\"18\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMPDEST\"},{\"begin\":1487,\"end\":1494,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1510,\"end\":1520,\"name\":\"SLOAD\"},{\"begin\":1510,\"end\":1520,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":1510,\"end\":1520,\"name\":\"AND\"},{\"begin\":1442,\"end\":1526,\"name\":\"tag\",\"value\":\"79\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMPDEST\"},{\"begin\":1442,\"end\":1526,\"name\":\"SWAP1\"},{\"begin\":1442,\"end\":1526,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":337,\"end\":355,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":337,\"end\":355,\"name\":\"JUMPDEST\"},{\"begin\":337,\"end\":355,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":337,\"end\":355,\"name\":\"SLOAD\"},{\"begin\":337,\"end\":355,\"name\":\"DUP2\"},{\"begin\":337,\"end\":355,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":725,\"end\":796,\"name\":\"tag\",\"value\":\"28\"},{\"begin\":725,\"end\":796,\"name\":\"JUMPDEST\"},{\"begin\":773,\"end\":790,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":759,\"end\":790,\"name\":\"DUP1\"},{\"begin\":759,\"end\":790,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF0000000000000000000000000000000000000000\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":759,\"end\":790,\"name\":\"AND\"},{\"begin\":759,\"end\":790,\"name\":\"SWAP1\"},{\"begin\":759,\"end\":790,\"name\":\"SSTORE\"},{\"begin\":725,\"end\":796,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":421,\"end\":448,\"name\":\"tag\",\"value\":\"31\"},{\"begin\":421,\"end\":448,\"name\":\"JUMPDEST\"},{\"begin\":421,\"end\":448,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":421,\"end\":448,\"name\":\"SLOAD\"},{\"begin\":421,\"end\":448,\"name\":\"DUP2\"},{\"begin\":421,\"end\":448,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":802,\"end\":892,\"name\":\"tag\",\"value\":\"35\"},{\"begin\":802,\"end\":892,\"name\":\"JUMPDEST\"},{\"begin\":848,\"end\":859,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":875,\"end\":886,\"name\":\"SLOAD\"},{\"begin\":875,\"end\":886,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":875,\"end\":886,\"name\":\"SWAP1\"},{\"begin\":875,\"end\":886,\"name\":\"DIV\"},{\"begin\":875,\"end\":886,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":875,\"end\":886,\"name\":\"AND\"},{\"begin\":875,\"end\":886,\"name\":\"SWAP1\"},{\"begin\":802,\"end\":892,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1347,\"end\":1436,\"name\":\"tag\",\"value\":\"40\"},{\"begin\":1347,\"end\":1436,\"name\":\"JUMPDEST\"},{\"begin\":1394,\"end\":1402,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1418,\"end\":1430,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SLOAD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"MUL\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1411,\"end\":1430,\"name\":\"MLOAD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"tag\",\"value\":\"84\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPDEST\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"LT\"},{\"begin\":1411,\"end\":1430,\"name\":\"ISZERO\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH [tag]\",\"value\":\"85\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPI\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP5\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"KECCAK256\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SLOAD\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"MLOAD\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP5\"},{\"begin\":1411,\"end\":1430,\"name\":\"AND\"},{\"begin\":1411,\"end\":1430,\"name\":\"ISZERO\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":1411,\"end\":1430,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"AND\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"DIV\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP6\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DIV\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP6\"},{\"begin\":1411,\"end\":1430,\"name\":\"MUL\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP6\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"ISZERO\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPI\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1411,\"end\":1430,\"name\":\"LT\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH [tag]\",\"value\":\"88\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPI\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"SLOAD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DIV\"},{\"begin\":1411,\"end\":1430,\"name\":\"MUL\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMP\"},{\"begin\":1411,\"end\":1430,\"name\":\"tag\",\"value\":\"88\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPDEST\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1411,\"end\":1430,\"name\":\"KECCAK256\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"tag\",\"value\":\"89\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPDEST\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"SLOAD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP4\"},{\"begin\":1411,\"end\":1430,\"name\":\"GT\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH [tag]\",\"value\":\"89\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPI\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"SUB\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1411,\"end\":1430,\"name\":\"AND\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP3\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"tag\",\"value\":\"87\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPDEST\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"DUP2\"},{\"begin\":1411,\"end\":1430,\"name\":\"MSTORE\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1411,\"end\":1430,\"name\":\"ADD\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"PUSH [tag]\",\"value\":\"84\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMP\"},{\"begin\":1411,\"end\":1430,\"name\":\"tag\",\"value\":\"85\"},{\"begin\":1411,\"end\":1430,\"name\":\"JUMPDEST\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1411,\"end\":1430,\"name\":\"SWAP1\"},{\"begin\":1411,\"end\":1430,\"name\":\"POP\"},{\"begin\":1347,\"end\":1436,\"name\":\"SWAP1\"},{\"begin\":1347,\"end\":1436,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":250,\"end\":280,\"name\":\"tag\",\"value\":\"45\"},{\"begin\":250,\"end\":280,\"name\":\"JUMPDEST\"},{\"begin\":250,\"end\":280,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":250,\"end\":280,\"name\":\"SLOAD\"},{\"begin\":250,\"end\":280,\"name\":\"PUSH\",\"value\":\"10000000000000000000000000000000000000000\"},{\"begin\":250,\"end\":280,\"name\":\"SWAP1\"},{\"begin\":250,\"end\":280,\"name\":\"DIV\"},{\"begin\":250,\"end\":280,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":250,\"end\":280,\"name\":\"AND\"},{\"begin\":250,\"end\":280,\"name\":\"DUP2\"},{\"begin\":250,\"end\":280,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"51\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"SLOAD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"DUP2\"},{\"begin\":492,\"end\":520,\"name\":\"LT\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"90\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPI\"},{\"begin\":492,\"end\":520,\"name\":\"INVALID\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"90\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"MSTORE\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"KECCAK256\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"SLOAD\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"MLOAD\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":492,\"end\":520,\"name\":\"DUP5\"},{\"begin\":492,\"end\":520,\"name\":\"AND\"},{\"begin\":492,\"end\":520,\"name\":\"ISZERO\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":492,\"end\":520,\"name\":\"MUL\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP4\"},{\"begin\":492,\"end\":520,\"name\":\"AND\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP3\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP3\"},{\"begin\":492,\"end\":520,\"name\":\"DIV\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":492,\"end\":520,\"name\":\"DUP2\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP6\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"DIV\"},{\"begin\":492,\"end\":520,\"name\":\"DUP6\"},{\"begin\":492,\"end\":520,\"name\":\"MUL\"},{\"begin\":492,\"end\":520,\"name\":\"DUP4\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP6\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"MSTORE\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"MSTORE\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"DUP4\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"ISZERO\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"92\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPI\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":492,\"end\":520,\"name\":\"LT\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"93\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPI\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"DUP4\"},{\"begin\":492,\"end\":520,\"name\":\"SLOAD\"},{\"begin\":492,\"end\":520,\"name\":\"DIV\"},{\"begin\":492,\"end\":520,\"name\":\"MUL\"},{\"begin\":492,\"end\":520,\"name\":\"DUP4\"},{\"begin\":492,\"end\":520,\"name\":\"MSTORE\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"92\"},{\"begin\":492,\"end\":520,\"name\":\"JUMP\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"93\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":492,\"end\":520,\"name\":\"MSTORE\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":492,\"end\":520,\"name\":\"KECCAK256\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"94\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"DUP2\"},{\"begin\":492,\"end\":520,\"name\":\"SLOAD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP2\"},{\"begin\":492,\"end\":520,\"name\":\"MSTORE\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"DUP1\"},{\"begin\":492,\"end\":520,\"name\":\"DUP4\"},{\"begin\":492,\"end\":520,\"name\":\"GT\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH [tag]\",\"value\":\"94\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPI\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP1\"},{\"begin\":492,\"end\":520,\"name\":\"SUB\"},{\"begin\":492,\"end\":520,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":492,\"end\":520,\"name\":\"AND\"},{\"begin\":492,\"end\":520,\"name\":\"DUP3\"},{\"begin\":492,\"end\":520,\"name\":\"ADD\"},{\"begin\":492,\"end\":520,\"name\":\"SWAP2\"},{\"begin\":492,\"end\":520,\"name\":\"tag\",\"value\":\"92\"},{\"begin\":492,\"end\":520,\"name\":\"JUMPDEST\"},{\"begin\":492,\"end\":520,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"POP\"},{\"begin\":492,\"end\":520,\"name\":\"DUP2\"},{\"begin\":492,\"end\":520,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1156,\"end\":1247,\"name\":\"tag\",\"value\":\"56\"},{\"begin\":1156,\"end\":1247,\"name\":\"JUMPDEST\"},{\"begin\":1226,\"end\":1241,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1226,\"end\":1241,\"name\":\"SLOAD\"},{\"begin\":1156,\"end\":1247,\"name\":\"SWAP1\"},{\"begin\":1156,\"end\":1247,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":977,\"end\":1071,\"name\":\"tag\",\"value\":\"62\"},{\"begin\":977,\"end\":1071,\"name\":\"JUMPDEST\"},{\"begin\":1035,\"end\":1047,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":27,\"end\":37,\"name\":\"DUP1\"},{\"begin\":27,\"end\":37,\"name\":\"SLOAD\"},{\"begin\":39,\"end\":40,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":23,\"end\":41,\"name\":\"DUP2\"},{\"begin\":23,\"end\":41,\"name\":\"ADD\"},{\"begin\":45,\"end\":68,\"name\":\"DUP1\"},{\"begin\":45,\"end\":68,\"name\":\"DUP4\"},{\"begin\":45,\"end\":68,\"name\":\"SSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1035,\"end\":1065,\"name\":\"SWAP3\"},{\"begin\":1035,\"end\":1065,\"name\":\"SWAP1\"},{\"begin\":1035,\"end\":1065,\"name\":\"SWAP3\"},{\"begin\":1035,\"end\":1065,\"name\":\"MSTORE\"},{\"begin\":1035,\"end\":1065,\"name\":\"DUP3\"},{\"begin\":1035,\"end\":1065,\"name\":\"MLOAD\"},{\"begin\":1035,\"end\":1065,\"name\":\"PUSH [tag]\",\"value\":\"98\"},{\"begin\":1035,\"end\":1065,\"name\":\"SWAP2\"},{\"begin\":1035,\"end\":1065,\"name\":\"PUSH\",\"value\":\"C2575A0E9E593C00F959F8C92F12DB2869C3395A3B0502D05E2516446F71F85B\"},{\"begin\":1035,\"end\":1065,\"name\":\"ADD\"},{\"begin\":1035,\"end\":1065,\"name\":\"SWAP1\"},{\"begin\":1035,\"end\":1065,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1035,\"end\":1065,\"name\":\"DUP6\"},{\"begin\":1035,\"end\":1065,\"name\":\"ADD\"},{\"begin\":1035,\"end\":1065,\"name\":\"SWAP1\"},{\"begin\":1035,\"end\":1065,\"name\":\"PUSH [tag]\",\"value\":\"99\"},{\"begin\":1035,\"end\":1065,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1035,\"end\":1065,\"name\":\"tag\",\"value\":\"98\"},{\"begin\":1035,\"end\":1065,\"name\":\"JUMPDEST\"},{\"begin\":1035,\"end\":1065,\"name\":\"POP\"},{\"begin\":1035,\"end\":1065,\"name\":\"POP\"},{\"begin\":977,\"end\":1071,\"name\":\"POP\"},{\"begin\":977,\"end\":1071,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":129,\"end\":154,\"name\":\"tag\",\"value\":\"65\"},{\"begin\":129,\"end\":154,\"name\":\"JUMPDEST\"},{\"begin\":129,\"end\":154,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":129,\"end\":154,\"name\":\"SLOAD\"},{\"begin\":129,\"end\":154,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":129,\"end\":154,\"name\":\"AND\"},{\"begin\":129,\"end\":154,\"name\":\"DUP2\"},{\"begin\":129,\"end\":154,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":898,\"end\":971,\"name\":\"tag\",\"value\":\"70\"},{\"begin\":898,\"end\":971,\"name\":\"JUMPDEST\"},{\"begin\":948,\"end\":954,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":948,\"end\":965,\"name\":\"DUP1\"},{\"begin\":948,\"end\":965,\"name\":\"SLOAD\"},{\"begin\":948,\"end\":965,\"name\":\"SWAP1\"},{\"begin\":948,\"end\":965,\"name\":\"SWAP2\"},{\"begin\":948,\"end\":965,\"name\":\"ADD\"},{\"begin\":948,\"end\":965,\"name\":\"SWAP1\"},{\"begin\":948,\"end\":965,\"name\":\"SSTORE\"},{\"begin\":898,\"end\":971,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1253,\"end\":1341,\"name\":\"tag\",\"value\":\"74\"},{\"begin\":1253,\"end\":1341,\"name\":\"JUMPDEST\"},{\"begin\":1310,\"end\":1325,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1310,\"end\":1335,\"name\":\"DUP1\"},{\"begin\":1310,\"end\":1335,\"name\":\"SLOAD\"},{\"begin\":1310,\"end\":1335,\"name\":\"SWAP1\"},{\"begin\":1310,\"end\":1335,\"name\":\"SWAP2\"},{\"begin\":1310,\"end\":1335,\"name\":\"ADD\"},{\"begin\":1310,\"end\":1335,\"name\":\"SWAP1\"},{\"begin\":1310,\"end\":1335,\"name\":\"SSTORE\"},{\"begin\":1253,\"end\":1341,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1077,\"end\":1150,\"name\":\"tag\",\"value\":\"77\"},{\"begin\":1077,\"end\":1150,\"name\":\"JUMPDEST\"},{\"begin\":1138,\"end\":1144,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1138,\"end\":1144,\"name\":\"SLOAD\"},{\"begin\":1077,\"end\":1150,\"name\":\"SWAP1\"},{\"begin\":1077,\"end\":1150,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"99\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"SLOAD\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP2\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"AND\"},{\"begin\":107,\"end\":1529,\"name\":\"ISZERO\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":107,\"end\":1529,\"name\":\"MUL\"},{\"begin\":107,\"end\":1529,\"name\":\"SUB\"},{\"begin\":107,\"end\":1529,\"name\":\"AND\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"DIV\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"MSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"KECCAK256\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"DIV\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP2\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP3\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":107,\"end\":1529,\"name\":\"LT\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"104\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"MLOAD\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":107,\"end\":1529,\"name\":\"NOT\"},{\"begin\":107,\"end\":1529,\"name\":\"AND\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP4\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"OR\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP6\"},{\"begin\":107,\"end\":1529,\"name\":\"SSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"106\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMP\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"104\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP6\"},{\"begin\":107,\"end\":1529,\"name\":\"SSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"ISZERO\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"106\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP2\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"105\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP2\"},{\"begin\":107,\"end\":1529,\"name\":\"GT\"},{\"begin\":107,\"end\":1529,\"name\":\"ISZERO\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"106\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"MLOAD\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"SSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP2\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP2\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"105\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMP\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"106\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"107\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP3\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"108\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"107\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"POP\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"108\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP2\"},{\"begin\":107,\"end\":1529,\"name\":\"SWAP1\"},{\"begin\":107,\"end\":1529,\"name\":\"tag\",\"value\":\"110\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPDEST\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP1\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP3\"},{\"begin\":107,\"end\":1529,\"name\":\"GT\"},{\"begin\":107,\"end\":1529,\"name\":\"ISZERO\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"107\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMPI\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":107,\"end\":1529,\"name\":\"DUP2\"},{\"begin\":107,\"end\":1529,\"name\":\"SSTORE\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":107,\"end\":1529,\"name\":\"ADD\"},{\"begin\":107,\"end\":1529,\"name\":\"PUSH [tag]\",\"value\":\"110\"},{\"begin\":107,\"end\":1529,\"name\":\"JUMP\"},{\"begin\":6,\"end\":448,\"name\":\"tag\",\"value\":\"113\"},{\"begin\":6,\"end\":448,\"name\":\"JUMPDEST\"},{\"begin\":6,\"end\":448,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":101,\"end\":105,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":89,\"end\":106,\"name\":\"DUP3\"},{\"begin\":89,\"end\":106,\"name\":\"ADD\"},{\"begin\":85,\"end\":112,\"name\":\"DUP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"SGT\"},{\"begin\":75,\"end\":77,\"name\":\"PUSH [tag]\",\"value\":\"114\"},{\"begin\":75,\"end\":77,\"name\":\"JUMPI\"},{\"begin\":126,\"end\":127,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":123,\"end\":124,\"name\":\"DUP1\"},{\"begin\":116,\"end\":128,\"name\":\"REVERT\"},{\"begin\":75,\"end\":77,\"name\":\"tag\",\"value\":\"114\"},{\"begin\":75,\"end\":77,\"name\":\"JUMPDEST\"},{\"begin\":163,\"end\":169,\"name\":\"DUP2\"},{\"begin\":150,\"end\":170,\"name\":\"CALLDATALOAD\"},{\"begin\":185,\"end\":250,\"name\":\"PUSH [tag]\",\"value\":\"115\"},{\"begin\":200,\"end\":249,\"name\":\"PUSH [tag]\",\"value\":\"116\"},{\"begin\":242,\"end\":248,\"name\":\"DUP3\"},{\"begin\":200,\"end\":249,\"name\":\"PUSH [tag]\",\"value\":\"117\"},{\"begin\":200,\"end\":249,\"name\":\"JUMP\"},{\"begin\":200,\"end\":249,\"name\":\"tag\",\"value\":\"116\"},{\"begin\":200,\"end\":249,\"name\":\"JUMPDEST\"},{\"begin\":185,\"end\":250,\"name\":\"PUSH [tag]\",\"value\":\"118\"},{\"begin\":185,\"end\":250,\"name\":\"JUMP\"},{\"begin\":185,\"end\":250,\"name\":\"tag\",\"value\":\"115\"},{\"begin\":185,\"end\":250,\"name\":\"JUMPDEST\"},{\"begin\":176,\"end\":250,\"name\":\"SWAP2\"},{\"begin\":176,\"end\":250,\"name\":\"POP\"},{\"begin\":270,\"end\":276,\"name\":\"DUP1\"},{\"begin\":263,\"end\":268,\"name\":\"DUP3\"},{\"begin\":256,\"end\":277,\"name\":\"MSTORE\"},{\"begin\":306,\"end\":310,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":298,\"end\":304,\"name\":\"DUP4\"},{\"begin\":294,\"end\":311,\"name\":\"ADD\"},{\"begin\":339,\"end\":343,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":332,\"end\":337,\"name\":\"DUP4\"},{\"begin\":328,\"end\":344,\"name\":\"ADD\"},{\"begin\":374,\"end\":377,\"name\":\"DUP6\"},{\"begin\":365,\"end\":371,\"name\":\"DUP4\"},{\"begin\":360,\"end\":363,\"name\":\"DUP4\"},{\"begin\":356,\"end\":372,\"name\":\"ADD\"},{\"begin\":353,\"end\":378,\"name\":\"GT\"},{\"begin\":350,\"end\":352,\"name\":\"ISZERO\"},{\"begin\":350,\"end\":352,\"name\":\"PUSH [tag]\",\"value\":\"119\"},{\"begin\":350,\"end\":352,\"name\":\"JUMPI\"},{\"begin\":391,\"end\":392,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":388,\"end\":389,\"name\":\"DUP1\"},{\"begin\":381,\"end\":393,\"name\":\"REVERT\"},{\"begin\":350,\"end\":352,\"name\":\"tag\",\"value\":\"119\"},{\"begin\":350,\"end\":352,\"name\":\"JUMPDEST\"},{\"begin\":401,\"end\":442,\"name\":\"PUSH [tag]\",\"value\":\"120\"},{\"begin\":435,\"end\":441,\"name\":\"DUP4\"},{\"begin\":430,\"end\":433,\"name\":\"DUP3\"},{\"begin\":425,\"end\":428,\"name\":\"DUP5\"},{\"begin\":401,\"end\":442,\"name\":\"PUSH [tag]\",\"value\":\"121\"},{\"begin\":401,\"end\":442,\"name\":\"JUMP\"},{\"begin\":401,\"end\":442,\"name\":\"tag\",\"value\":\"120\"},{\"begin\":401,\"end\":442,\"name\":\"JUMPDEST\"},{\"begin\":68,\"end\":448,\"name\":\"POP\"},{\"begin\":68,\"end\":448,\"name\":\"POP\"},{\"begin\":68,\"end\":448,\"name\":\"POP\"},{\"begin\":68,\"end\":448,\"name\":\"SWAP3\"},{\"begin\":68,\"end\":448,\"name\":\"SWAP2\"},{\"begin\":68,\"end\":448,\"name\":\"POP\"},{\"begin\":68,\"end\":448,\"name\":\"POP\"},{\"begin\":68,\"end\":448,\"name\":\"JUMP\"},{\"begin\":456,\"end\":574,\"name\":\"tag\",\"value\":\"123\"},{\"begin\":456,\"end\":574,\"name\":\"JUMPDEST\"},{\"begin\":456,\"end\":574,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":523,\"end\":569,\"name\":\"PUSH [tag]\",\"value\":\"124\"},{\"begin\":561,\"end\":567,\"name\":\"DUP3\"},{\"begin\":548,\"end\":568,\"name\":\"CALLDATALOAD\"},{\"begin\":523,\"end\":569,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":523,\"end\":569,\"name\":\"JUMP\"},{\"begin\":523,\"end\":569,\"name\":\"tag\",\"value\":\"124\"},{\"begin\":523,\"end\":569,\"name\":\"JUMPDEST\"},{\"begin\":514,\"end\":569,\"name\":\"SWAP4\"},{\"begin\":508,\"end\":574,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":508,\"end\":574,\"name\":\"JUMP\"},{\"begin\":581,\"end\":928,\"name\":\"tag\",\"value\":\"61\"},{\"begin\":581,\"end\":928,\"name\":\"JUMPDEST\"},{\"begin\":581,\"end\":928,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":695,\"end\":697,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":683,\"end\":692,\"name\":\"DUP3\"},{\"begin\":674,\"end\":681,\"name\":\"DUP5\"},{\"begin\":670,\"end\":693,\"name\":\"SUB\"},{\"begin\":666,\"end\":698,\"name\":\"SLT\"},{\"begin\":663,\"end\":665,\"name\":\"ISZERO\"},{\"begin\":663,\"end\":665,\"name\":\"PUSH [tag]\",\"value\":\"127\"},{\"begin\":663,\"end\":665,\"name\":\"JUMPI\"},{\"begin\":711,\"end\":712,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":708,\"end\":709,\"name\":\"DUP1\"},{\"begin\":701,\"end\":713,\"name\":\"REVERT\"},{\"begin\":663,\"end\":665,\"name\":\"tag\",\"value\":\"127\"},{\"begin\":663,\"end\":665,\"name\":\"JUMPDEST\"},{\"begin\":746,\"end\":777,\"name\":\"DUP2\"},{\"begin\":746,\"end\":777,\"name\":\"CALLDATALOAD\"},{\"begin\":797,\"end\":815,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFF\"},{\"begin\":786,\"end\":816,\"name\":\"DUP2\"},{\"begin\":786,\"end\":816,\"name\":\"GT\"},{\"begin\":783,\"end\":785,\"name\":\"ISZERO\"},{\"begin\":783,\"end\":785,\"name\":\"PUSH [tag]\",\"value\":\"128\"},{\"begin\":783,\"end\":785,\"name\":\"JUMPI\"},{\"begin\":829,\"end\":830,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":826,\"end\":827,\"name\":\"DUP1\"},{\"begin\":819,\"end\":831,\"name\":\"REVERT\"},{\"begin\":783,\"end\":785,\"name\":\"tag\",\"value\":\"128\"},{\"begin\":783,\"end\":785,\"name\":\"JUMPDEST\"},{\"begin\":849,\"end\":912,\"name\":\"PUSH [tag]\",\"value\":\"129\"},{\"begin\":904,\"end\":911,\"name\":\"DUP5\"},{\"begin\":895,\"end\":901,\"name\":\"DUP3\"},{\"begin\":884,\"end\":893,\"name\":\"DUP6\"},{\"begin\":880,\"end\":902,\"name\":\"ADD\"},{\"begin\":849,\"end\":912,\"name\":\"PUSH [tag]\",\"value\":\"113\"},{\"begin\":849,\"end\":912,\"name\":\"JUMP\"},{\"begin\":849,\"end\":912,\"name\":\"tag\",\"value\":\"129\"},{\"begin\":849,\"end\":912,\"name\":\"JUMPDEST\"},{\"begin\":839,\"end\":912,\"name\":\"SWAP5\"},{\"begin\":657,\"end\":928,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":657,\"end\":928,\"name\":\"JUMP\"},{\"begin\":935,\"end\":1176,\"name\":\"tag\",\"value\":\"50\"},{\"begin\":935,\"end\":1176,\"name\":\"JUMPDEST\"},{\"begin\":935,\"end\":1176,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1039,\"end\":1041,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1027,\"end\":1036,\"name\":\"DUP3\"},{\"begin\":1018,\"end\":1025,\"name\":\"DUP5\"},{\"begin\":1014,\"end\":1037,\"name\":\"SUB\"},{\"begin\":1010,\"end\":1042,\"name\":\"SLT\"},{\"begin\":1007,\"end\":1009,\"name\":\"ISZERO\"},{\"begin\":1007,\"end\":1009,\"name\":\"PUSH [tag]\",\"value\":\"131\"},{\"begin\":1007,\"end\":1009,\"name\":\"JUMPI\"},{\"begin\":1055,\"end\":1056,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1052,\"end\":1053,\"name\":\"DUP1\"},{\"begin\":1045,\"end\":1057,\"name\":\"REVERT\"},{\"begin\":1007,\"end\":1009,\"name\":\"tag\",\"value\":\"131\"},{\"begin\":1007,\"end\":1009,\"name\":\"JUMPDEST\"},{\"begin\":1090,\"end\":1091,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1107,\"end\":1160,\"name\":\"PUSH [tag]\",\"value\":\"129\"},{\"begin\":1152,\"end\":1159,\"name\":\"DUP5\"},{\"begin\":1132,\"end\":1141,\"name\":\"DUP5\"},{\"begin\":1107,\"end\":1160,\"name\":\"PUSH [tag]\",\"value\":\"123\"},{\"begin\":1107,\"end\":1160,\"name\":\"JUMP\"},{\"begin\":1183,\"end\":1293,\"name\":\"tag\",\"value\":\"134\"},{\"begin\":1183,\"end\":1293,\"name\":\"JUMPDEST\"},{\"begin\":1256,\"end\":1287,\"name\":\"PUSH [tag]\",\"value\":\"135\"},{\"begin\":1281,\"end\":1286,\"name\":\"DUP2\"},{\"begin\":1256,\"end\":1287,\"name\":\"PUSH [tag]\",\"value\":\"136\"},{\"begin\":1256,\"end\":1287,\"name\":\"JUMP\"},{\"begin\":1256,\"end\":1287,\"name\":\"tag\",\"value\":\"135\"},{\"begin\":1256,\"end\":1287,\"name\":\"JUMPDEST\"},{\"begin\":1251,\"end\":1254,\"name\":\"DUP3\"},{\"begin\":1244,\"end\":1288,\"name\":\"MSTORE\"},{\"begin\":1238,\"end\":1293,\"name\":\"POP\"},{\"begin\":1238,\"end\":1293,\"name\":\"POP\"},{\"begin\":1238,\"end\":1293,\"name\":\"JUMP\"},{\"begin\":1329,\"end\":2102,\"name\":\"tag\",\"value\":\"138\"},{\"begin\":1329,\"end\":2102,\"name\":\"JUMPDEST\"},{\"begin\":1329,\"end\":2102,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1476,\"end\":1536,\"name\":\"PUSH [tag]\",\"value\":\"139\"},{\"begin\":1530,\"end\":1535,\"name\":\"DUP3\"},{\"begin\":1476,\"end\":1536,\"name\":\"PUSH [tag]\",\"value\":\"140\"},{\"begin\":1476,\"end\":1536,\"name\":\"JUMP\"},{\"begin\":1476,\"end\":1536,\"name\":\"tag\",\"value\":\"139\"},{\"begin\":1476,\"end\":1536,\"name\":\"JUMPDEST\"},{\"begin\":1554,\"end\":1560,\"name\":\"DUP1\"},{\"begin\":1549,\"end\":1552,\"name\":\"DUP5\"},{\"begin\":1542,\"end\":1561,\"name\":\"MSTORE\"},{\"begin\":1578,\"end\":1582,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1573,\"end\":1576,\"name\":\"DUP5\"},{\"begin\":1569,\"end\":1583,\"name\":\"ADD\"},{\"begin\":1562,\"end\":1583,\"name\":\"SWAP4\"},{\"begin\":1562,\"end\":1583,\"name\":\"POP\"},{\"begin\":1626,\"end\":1629,\"name\":\"DUP4\"},{\"begin\":1668,\"end\":1672,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1660,\"end\":1666,\"name\":\"DUP3\"},{\"begin\":1656,\"end\":1673,\"name\":\"MUL\"},{\"begin\":1651,\"end\":1654,\"name\":\"DUP6\"},{\"begin\":1647,\"end\":1674,\"name\":\"ADD\"},{\"begin\":1694,\"end\":1756,\"name\":\"PUSH [tag]\",\"value\":\"141\"},{\"begin\":1750,\"end\":1755,\"name\":\"DUP6\"},{\"begin\":1694,\"end\":1756,\"name\":\"PUSH [tag]\",\"value\":\"142\"},{\"begin\":1694,\"end\":1756,\"name\":\"JUMP\"},{\"begin\":1694,\"end\":1756,\"name\":\"tag\",\"value\":\"141\"},{\"begin\":1694,\"end\":1756,\"name\":\"JUMPDEST\"},{\"begin\":1777,\"end\":1778,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1762,\"end\":2063,\"name\":\"tag\",\"value\":\"143\"},{\"begin\":1762,\"end\":2063,\"name\":\"JUMPDEST\"},{\"begin\":1787,\"end\":1793,\"name\":\"DUP5\"},{\"begin\":1784,\"end\":1785,\"name\":\"DUP2\"},{\"begin\":1781,\"end\":1794,\"name\":\"LT\"},{\"begin\":1762,\"end\":2063,\"name\":\"ISZERO\"},{\"begin\":1762,\"end\":2063,\"name\":\"PUSH [tag]\",\"value\":\"144\"},{\"begin\":1762,\"end\":2063,\"name\":\"JUMPI\"},{\"begin\":1849,\"end\":1858,\"name\":\"DUP4\"},{\"begin\":1843,\"end\":1847,\"name\":\"DUP4\"},{\"begin\":1839,\"end\":1859,\"name\":\"SUB\"},{\"begin\":1834,\"end\":1837,\"name\":\"DUP9\"},{\"begin\":1827,\"end\":1860,\"name\":\"MSTORE\"},{\"begin\":1875,\"end\":1945,\"name\":\"PUSH [tag]\",\"value\":\"146\"},{\"begin\":1940,\"end\":1944,\"name\":\"DUP4\"},{\"begin\":1931,\"end\":1937,\"name\":\"DUP4\"},{\"begin\":1925,\"end\":1938,\"name\":\"MLOAD\"},{\"begin\":1875,\"end\":1945,\"name\":\"PUSH [tag]\",\"value\":\"147\"},{\"begin\":1875,\"end\":1945,\"name\":\"JUMP\"},{\"begin\":1875,\"end\":1945,\"name\":\"tag\",\"value\":\"146\"},{\"begin\":1875,\"end\":1945,\"name\":\"JUMPDEST\"},{\"begin\":1867,\"end\":1945,\"name\":\"SWAP3\"},{\"begin\":1867,\"end\":1945,\"name\":\"POP\"},{\"begin\":1962,\"end\":2028,\"name\":\"PUSH [tag]\",\"value\":\"148\"},{\"begin\":2021,\"end\":2027,\"name\":\"DUP3\"},{\"begin\":1962,\"end\":2028,\"name\":\"PUSH [tag]\",\"value\":\"142\"},{\"begin\":1962,\"end\":2028,\"name\":\"JUMP\"},{\"begin\":1962,\"end\":2028,\"name\":\"tag\",\"value\":\"148\"},{\"begin\":1962,\"end\":2028,\"name\":\"JUMPDEST\"},{\"begin\":2051,\"end\":2055,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2042,\"end\":2056,\"name\":\"SWAP9\"},{\"begin\":2042,\"end\":2056,\"name\":\"SWAP1\"},{\"begin\":2042,\"end\":2056,\"name\":\"SWAP9\"},{\"begin\":2042,\"end\":2056,\"name\":\"ADD\"},{\"begin\":2042,\"end\":2056,\"name\":\"SWAP8\"},{\"begin\":1952,\"end\":2028,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1809,\"end\":1810,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1802,\"end\":1811,\"name\":\"ADD\"},{\"begin\":1762,\"end\":2063,\"name\":\"PUSH [tag]\",\"value\":\"143\"},{\"begin\":1762,\"end\":2063,\"name\":\"JUMP\"},{\"begin\":1762,\"end\":2063,\"name\":\"tag\",\"value\":\"144\"},{\"begin\":1762,\"end\":2063,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2076,\"end\":2080,\"name\":\"SWAP1\"},{\"begin\":2076,\"end\":2080,\"name\":\"SWAP7\"},{\"begin\":1455,\"end\":2102,\"name\":\"SWAP6\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1455,\"end\":2102,\"name\":\"JUMP\"},{\"begin\":2110,\"end\":2254,\"name\":\"tag\",\"value\":\"151\"},{\"begin\":2110,\"end\":2254,\"name\":\"JUMPDEST\"},{\"begin\":2197,\"end\":2248,\"name\":\"PUSH [tag]\",\"value\":\"135\"},{\"begin\":2242,\"end\":2247,\"name\":\"DUP2\"},{\"begin\":2197,\"end\":2248,\"name\":\"PUSH [tag]\",\"value\":\"153\"},{\"begin\":2197,\"end\":2248,\"name\":\"JUMP\"},{\"begin\":2261,\"end\":2553,\"name\":\"tag\",\"value\":\"147\"},{\"begin\":2261,\"end\":2553,\"name\":\"JUMPDEST\"},{\"begin\":2261,\"end\":2553,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2359,\"end\":2394,\"name\":\"PUSH [tag]\",\"value\":\"155\"},{\"begin\":2388,\"end\":2393,\"name\":\"DUP3\"},{\"begin\":2359,\"end\":2394,\"name\":\"PUSH [tag]\",\"value\":\"140\"},{\"begin\":2359,\"end\":2394,\"name\":\"JUMP\"},{\"begin\":2359,\"end\":2394,\"name\":\"tag\",\"value\":\"155\"},{\"begin\":2359,\"end\":2394,\"name\":\"JUMPDEST\"},{\"begin\":2411,\"end\":2417,\"name\":\"DUP1\"},{\"begin\":2406,\"end\":2409,\"name\":\"DUP5\"},{\"begin\":2399,\"end\":2418,\"name\":\"MSTORE\"},{\"begin\":2423,\"end\":2486,\"name\":\"PUSH [tag]\",\"value\":\"157\"},{\"begin\":2479,\"end\":2485,\"name\":\"DUP2\"},{\"begin\":2472,\"end\":2476,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2467,\"end\":2470,\"name\":\"DUP7\"},{\"begin\":2463,\"end\":2477,\"name\":\"ADD\"},{\"begin\":2456,\"end\":2460,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2449,\"end\":2454,\"name\":\"DUP7\"},{\"begin\":2445,\"end\":2461,\"name\":\"ADD\"},{\"begin\":2423,\"end\":2486,\"name\":\"PUSH [tag]\",\"value\":\"158\"},{\"begin\":2423,\"end\":2486,\"name\":\"JUMP\"},{\"begin\":2423,\"end\":2486,\"name\":\"tag\",\"value\":\"157\"},{\"begin\":2423,\"end\":2486,\"name\":\"JUMPDEST\"},{\"begin\":2518,\"end\":2547,\"name\":\"PUSH [tag]\",\"value\":\"159\"},{\"begin\":2540,\"end\":2546,\"name\":\"DUP2\"},{\"begin\":2518,\"end\":2547,\"name\":\"PUSH [tag]\",\"value\":\"160\"},{\"begin\":2518,\"end\":2547,\"name\":\"JUMP\"},{\"begin\":2518,\"end\":2547,\"name\":\"tag\",\"value\":\"159\"},{\"begin\":2518,\"end\":2547,\"name\":\"JUMPDEST\"},{\"begin\":2498,\"end\":2548,\"name\":\"SWAP1\"},{\"begin\":2498,\"end\":2548,\"name\":\"SWAP4\"},{\"begin\":2498,\"end\":2548,\"name\":\"ADD\"},{\"begin\":2511,\"end\":2515,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2498,\"end\":2548,\"name\":\"ADD\"},{\"begin\":2498,\"end\":2548,\"name\":\"SWAP4\"},{\"begin\":2339,\"end\":2553,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2339,\"end\":2553,\"name\":\"JUMP\"},{\"begin\":2560,\"end\":2670,\"name\":\"tag\",\"value\":\"162\"},{\"begin\":2560,\"end\":2670,\"name\":\"JUMPDEST\"},{\"begin\":2633,\"end\":2664,\"name\":\"PUSH [tag]\",\"value\":\"135\"},{\"begin\":2658,\"end\":2663,\"name\":\"DUP2\"},{\"begin\":2633,\"end\":2664,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":2633,\"end\":2664,\"name\":\"JUMP\"},{\"begin\":2677,\"end\":2870,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":2677,\"end\":2870,\"name\":\"JUMPDEST\"},{\"begin\":2785,\"end\":2787,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2770,\"end\":2788,\"name\":\"DUP2\"},{\"begin\":2770,\"end\":2788,\"name\":\"ADD\"},{\"begin\":2799,\"end\":2860,\"name\":\"PUSH [tag]\",\"value\":\"166\"},{\"begin\":2774,\"end\":2783,\"name\":\"DUP3\"},{\"begin\":2833,\"end\":2839,\"name\":\"DUP5\"},{\"begin\":2799,\"end\":2860,\"name\":\"PUSH [tag]\",\"value\":\"134\"},{\"begin\":2799,\"end\":2860,\"name\":\"JUMP\"},{\"begin\":2799,\"end\":2860,\"name\":\"tag\",\"value\":\"166\"},{\"begin\":2799,\"end\":2860,\"name\":\"JUMPDEST\"},{\"begin\":2756,\"end\":2870,\"name\":\"SWAP3\"},{\"begin\":2756,\"end\":2870,\"name\":\"SWAP2\"},{\"begin\":2756,\"end\":2870,\"name\":\"POP\"},{\"begin\":2756,\"end\":2870,\"name\":\"POP\"},{\"begin\":2756,\"end\":2870,\"name\":\"JUMP\"},{\"begin\":2877,\"end\":3242,\"name\":\"tag\",\"value\":\"42\"},{\"begin\":2877,\"end\":3242,\"name\":\"JUMPDEST\"},{\"begin\":3047,\"end\":3049,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3061,\"end\":3108,\"name\":\"DUP1\"},{\"begin\":3061,\"end\":3108,\"name\":\"DUP3\"},{\"begin\":3061,\"end\":3108,\"name\":\"MSTORE\"},{\"begin\":3032,\"end\":3050,\"name\":\"DUP2\"},{\"begin\":3032,\"end\":3050,\"name\":\"ADD\"},{\"begin\":3122,\"end\":3232,\"name\":\"PUSH [tag]\",\"value\":\"124\"},{\"begin\":3032,\"end\":3050,\"name\":\"DUP2\"},{\"begin\":3218,\"end\":3224,\"name\":\"DUP5\"},{\"begin\":3122,\"end\":3232,\"name\":\"PUSH [tag]\",\"value\":\"138\"},{\"begin\":3122,\"end\":3232,\"name\":\"JUMP\"},{\"begin\":3249,\"end\":3470,\"name\":\"tag\",\"value\":\"37\"},{\"begin\":3249,\"end\":3470,\"name\":\"JUMPDEST\"},{\"begin\":3371,\"end\":3373,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3356,\"end\":3374,\"name\":\"DUP2\"},{\"begin\":3356,\"end\":3374,\"name\":\"ADD\"},{\"begin\":3385,\"end\":3460,\"name\":\"PUSH [tag]\",\"value\":\"166\"},{\"begin\":3360,\"end\":3369,\"name\":\"DUP3\"},{\"begin\":3433,\"end\":3439,\"name\":\"DUP5\"},{\"begin\":3385,\"end\":3460,\"name\":\"PUSH [tag]\",\"value\":\"151\"},{\"begin\":3385,\"end\":3460,\"name\":\"JUMP\"},{\"begin\":3477,\"end\":3750,\"name\":\"tag\",\"value\":\"53\"},{\"begin\":3477,\"end\":3750,\"name\":\"JUMPDEST\"},{\"begin\":3601,\"end\":3603,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3615,\"end\":3662,\"name\":\"DUP1\"},{\"begin\":3615,\"end\":3662,\"name\":\"DUP3\"},{\"begin\":3615,\"end\":3662,\"name\":\"MSTORE\"},{\"begin\":3586,\"end\":3604,\"name\":\"DUP2\"},{\"begin\":3586,\"end\":3604,\"name\":\"ADD\"},{\"begin\":3676,\"end\":3740,\"name\":\"PUSH [tag]\",\"value\":\"124\"},{\"begin\":3586,\"end\":3604,\"name\":\"DUP2\"},{\"begin\":3726,\"end\":3732,\"name\":\"DUP5\"},{\"begin\":3676,\"end\":3740,\"name\":\"PUSH [tag]\",\"value\":\"147\"},{\"begin\":3676,\"end\":3740,\"name\":\"JUMP\"},{\"begin\":3757,\"end\":3950,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":3757,\"end\":3950,\"name\":\"JUMPDEST\"},{\"begin\":3865,\"end\":3867,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3850,\"end\":3868,\"name\":\"DUP2\"},{\"begin\":3850,\"end\":3868,\"name\":\"ADD\"},{\"begin\":3879,\"end\":3940,\"name\":\"PUSH [tag]\",\"value\":\"166\"},{\"begin\":3854,\"end\":3863,\"name\":\"DUP3\"},{\"begin\":3913,\"end\":3919,\"name\":\"DUP5\"},{\"begin\":3879,\"end\":3940,\"name\":\"PUSH [tag]\",\"value\":\"162\"},{\"begin\":3879,\"end\":3940,\"name\":\"JUMP\"},{\"begin\":3957,\"end\":4213,\"name\":\"tag\",\"value\":\"118\"},{\"begin\":3957,\"end\":4213,\"name\":\"JUMPDEST\"},{\"begin\":4019,\"end\":4021,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4013,\"end\":4022,\"name\":\"MLOAD\"},{\"begin\":4045,\"end\":4062,\"name\":\"DUP2\"},{\"begin\":4045,\"end\":4062,\"name\":\"DUP2\"},{\"begin\":4045,\"end\":4062,\"name\":\"ADD\"},{\"begin\":4120,\"end\":4138,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFF\"},{\"begin\":4105,\"end\":4139,\"name\":\"DUP2\"},{\"begin\":4105,\"end\":4139,\"name\":\"GT\"},{\"begin\":4141,\"end\":4163,\"name\":\"DUP3\"},{\"begin\":4141,\"end\":4163,\"name\":\"DUP3\"},{\"begin\":4141,\"end\":4163,\"name\":\"LT\"},{\"begin\":4102,\"end\":4164,\"name\":\"OR\"},{\"begin\":4099,\"end\":4101,\"name\":\"ISZERO\"},{\"begin\":4099,\"end\":4101,\"name\":\"PUSH [tag]\",\"value\":\"176\"},{\"begin\":4099,\"end\":4101,\"name\":\"JUMPI\"},{\"begin\":4177,\"end\":4178,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4174,\"end\":4175,\"name\":\"DUP1\"},{\"begin\":4167,\"end\":4179,\"name\":\"REVERT\"},{\"begin\":4099,\"end\":4101,\"name\":\"tag\",\"value\":\"176\"},{\"begin\":4099,\"end\":4101,\"name\":\"JUMPDEST\"},{\"begin\":4193,\"end\":4195,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":4186,\"end\":4208,\"name\":\"MSTORE\"},{\"begin\":3997,\"end\":4213,\"name\":\"SWAP2\"},{\"begin\":3997,\"end\":4213,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3997,\"end\":4213,\"name\":\"JUMP\"},{\"begin\":4220,\"end\":4479,\"name\":\"tag\",\"value\":\"117\"},{\"begin\":4220,\"end\":4479,\"name\":\"JUMPDEST\"},{\"begin\":4220,\"end\":4479,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4364,\"end\":4382,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFF\"},{\"begin\":4356,\"end\":4362,\"name\":\"DUP3\"},{\"begin\":4353,\"end\":4383,\"name\":\"GT\"},{\"begin\":4350,\"end\":4352,\"name\":\"ISZERO\"},{\"begin\":4350,\"end\":4352,\"name\":\"PUSH [tag]\",\"value\":\"178\"},{\"begin\":4350,\"end\":4352,\"name\":\"JUMPI\"},{\"begin\":4396,\"end\":4397,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":4393,\"end\":4394,\"name\":\"DUP1\"},{\"begin\":4386,\"end\":4398,\"name\":\"REVERT\"},{\"begin\":4350,\"end\":4352,\"name\":\"tag\",\"value\":\"178\"},{\"begin\":4350,\"end\":4352,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":4440,\"end\":4444,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":4417,\"end\":4434,\"name\":\"SWAP2\"},{\"begin\":4417,\"end\":4434,\"name\":\"SWAP1\"},{\"begin\":4417,\"end\":4434,\"name\":\"SWAP2\"},{\"begin\":4417,\"end\":4434,\"name\":\"ADD\"},{\"begin\":4413,\"end\":4446,\"name\":\"AND\"},{\"begin\":4469,\"end\":4473,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4459,\"end\":4474,\"name\":\"ADD\"},{\"begin\":4459,\"end\":4474,\"name\":\"SWAP1\"},{\"begin\":4287,\"end\":4479,\"name\":\"JUMP\"},{\"begin\":4488,\"end\":4615,\"name\":\"tag\",\"value\":\"142\"},{\"begin\":4488,\"end\":4615,\"name\":\"JUMPDEST\"},{\"begin\":4603,\"end\":4607,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":4591,\"end\":4608,\"name\":\"ADD\"},{\"begin\":4591,\"end\":4608,\"name\":\"SWAP1\"},{\"begin\":4572,\"end\":4615,\"name\":\"JUMP\"},{\"begin\":4624,\"end\":4737,\"name\":\"tag\",\"value\":\"140\"},{\"begin\":4624,\"end\":4737,\"name\":\"JUMPDEST\"},{\"begin\":4720,\"end\":4732,\"name\":\"MLOAD\"},{\"begin\":4720,\"end\":4732,\"name\":\"SWAP1\"},{\"begin\":4704,\"end\":4737,\"name\":\"JUMP\"},{\"begin\":4976,\"end\":5104,\"name\":\"tag\",\"value\":\"136\"},{\"begin\":4976,\"end\":5104,\"name\":\"JUMPDEST\"},{\"begin\":5056,\"end\":5098,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":5045,\"end\":5099,\"name\":\"AND\"},{\"begin\":5045,\"end\":5099,\"name\":\"SWAP1\"},{\"begin\":5028,\"end\":5104,\"name\":\"JUMP\"},{\"begin\":5111,\"end\":5244,\"name\":\"tag\",\"value\":\"185\"},{\"begin\":5111,\"end\":5244,\"name\":\"JUMPDEST\"},{\"begin\":5111,\"end\":5244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":5205,\"end\":5206,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":5195,\"end\":5207,\"name\":\"DUP3\"},{\"begin\":5195,\"end\":5207,\"name\":\"LT\"},{\"begin\":5185,\"end\":5187,\"name\":\"PUSH [tag]\",\"value\":\"107\"},{\"begin\":5185,\"end\":5187,\"name\":\"JUMPI\"},{\"begin\":5211,\"end\":5220,\"name\":\"INVALID\"},{\"begin\":5423,\"end\":5568,\"name\":\"tag\",\"value\":\"153\"},{\"begin\":5423,\"end\":5568,\"name\":\"JUMPDEST\"},{\"begin\":5423,\"end\":5568,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":5516,\"end\":5563,\"name\":\"PUSH [tag]\",\"value\":\"166\"},{\"begin\":5557,\"end\":5562,\"name\":\"DUP3\"},{\"begin\":5516,\"end\":5563,\"name\":\"PUSH [tag]\",\"value\":\"185\"},{\"begin\":5516,\"end\":5563,\"name\":\"JUMP\"},{\"begin\":5576,\"end\":5721,\"name\":\"tag\",\"value\":\"121\"},{\"begin\":5576,\"end\":5721,\"name\":\"JUMPDEST\"},{\"begin\":5657,\"end\":5663,\"name\":\"DUP3\"},{\"begin\":5652,\"end\":5655,\"name\":\"DUP2\"},{\"begin\":5647,\"end\":5650,\"name\":\"DUP4\"},{\"begin\":5634,\"end\":5664,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":5713,\"end\":5714,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":5695,\"end\":5711,\"name\":\"SWAP2\"},{\"begin\":5695,\"end\":5711,\"name\":\"ADD\"},{\"begin\":5688,\"end\":5715,\"name\":\"MSTORE\"},{\"begin\":5627,\"end\":5721,\"name\":\"JUMP\"},{\"begin\":5730,\"end\":5998,\"name\":\"tag\",\"value\":\"158\"},{\"begin\":5730,\"end\":5998,\"name\":\"JUMPDEST\"},{\"begin\":5795,\"end\":5796,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":5802,\"end\":5903,\"name\":\"tag\",\"value\":\"193\"},{\"begin\":5802,\"end\":5903,\"name\":\"JUMPDEST\"},{\"begin\":5816,\"end\":5822,\"name\":\"DUP4\"},{\"begin\":5813,\"end\":5814,\"name\":\"DUP2\"},{\"begin\":5810,\"end\":5823,\"name\":\"LT\"},{\"begin\":5802,\"end\":5903,\"name\":\"ISZERO\"},{\"begin\":5802,\"end\":5903,\"name\":\"PUSH [tag]\",\"value\":\"194\"},{\"begin\":5802,\"end\":5903,\"name\":\"JUMPI\"},{\"begin\":5883,\"end\":5894,\"name\":\"DUP2\"},{\"begin\":5883,\"end\":5894,\"name\":\"DUP2\"},{\"begin\":5883,\"end\":5894,\"name\":\"ADD\"},{\"begin\":5877,\"end\":5895,\"name\":\"MLOAD\"},{\"begin\":5864,\"end\":5875,\"name\":\"DUP4\"},{\"begin\":5864,\"end\":5875,\"name\":\"DUP3\"},{\"begin\":5864,\"end\":5875,\"name\":\"ADD\"},{\"begin\":5857,\"end\":5896,\"name\":\"MSTORE\"},{\"begin\":5838,\"end\":5840,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":5831,\"end\":5841,\"name\":\"ADD\"},{\"begin\":5802,\"end\":5903,\"name\":\"PUSH [tag]\",\"value\":\"193\"},{\"begin\":5802,\"end\":5903,\"name\":\"JUMP\"},{\"begin\":5802,\"end\":5903,\"name\":\"tag\",\"value\":\"194\"},{\"begin\":5802,\"end\":5903,\"name\":\"JUMPDEST\"},{\"begin\":5918,\"end\":5924,\"name\":\"DUP4\"},{\"begin\":5915,\"end\":5916,\"name\":\"DUP2\"},{\"begin\":5912,\"end\":5925,\"name\":\"GT\"},{\"begin\":5909,\"end\":5911,\"name\":\"ISZERO\"},{\"begin\":5909,\"end\":5911,\"name\":\"PUSH [tag]\",\"value\":\"196\"},{\"begin\":5909,\"end\":5911,\"name\":\"JUMPI\"},{\"begin\":5983,\"end\":5984,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":5974,\"end\":5980,\"name\":\"DUP5\"},{\"begin\":5969,\"end\":5972,\"name\":\"DUP5\"},{\"begin\":5965,\"end\":5981,\"name\":\"ADD\"},{\"begin\":5958,\"end\":5985,\"name\":\"MSTORE\"},{\"begin\":5909,\"end\":5911,\"name\":\"tag\",\"value\":\"196\"},{\"begin\":5909,\"end\":5911,\"name\":\"JUMPDEST\"},{\"begin\":5779,\"end\":5998,\"name\":\"POP\"},{\"begin\":5779,\"end\":5998,\"name\":\"POP\"},{\"begin\":5779,\"end\":5998,\"name\":\"POP\"},{\"begin\":5779,\"end\":5998,\"name\":\"POP\"},{\"begin\":5779,\"end\":5998,\"name\":\"JUMP\"},{\"begin\":6006,\"end\":6103,\"name\":\"tag\",\"value\":\"160\"},{\"begin\":6006,\"end\":6103,\"name\":\"JUMPDEST\"},{\"begin\":6094,\"end\":6096,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":6074,\"end\":6088,\"name\":\"ADD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":6070,\"end\":6098,\"name\":\"AND\"},{\"begin\":6070,\"end\":6098,\"name\":\"SWAP1\"},{\"begin\":6054,\"end\":6103,\"name\":\"JUMP\"}]}}},\"bytecode\":\"608060405234801561001057600080fd5b5060405160208061094e833981018060405261002f9190810190610098565b60008054600160a060020a031916600160a060020a038316178082556001919060a060020a60ff0219167401000000000000000000000000000000000000000083021790555050600060018190556002556100ca565b600061009182516100be565b9392505050565b6000602082840312156100aa57600080fd5b60006100b68484610085565b949350505050565b600160a060020a031690565b610875806100d96000396000f3006080604052600436106100cf5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631654094181146100d45780631be6dd64146100ff5780632cae20961461012157806341413b2f1461013857806352d6a0a31461014d57806383920e901461016f57806395eec3c9146101915780639ace38c2146101a65780639bfc4a8f146101d3578063a0296be1146101e8578063a7e33ba814610208578063b08483041461021d578063b20361981461023d578063f4b7095b1461025d575b600080fd5b3480156100e057600080fd5b506100e9610272565b6040516100f6919061071a565b60405180910390f35b34801561010b57600080fd5b5061011461028f565b6040516100f6919061075e565b34801561012d57600080fd5b50610136610295565b005b34801561014457600080fd5b506101146102b5565b34801561015957600080fd5b506101626102bb565b6040516100f6919061073f565b34801561017b57600080fd5b506101846102dc565b6040516100f6919061072e565b34801561019d57600080fd5b506101626103b4565b3480156101b257600080fd5b506101c66101c136600461063f565b6103d5565b6040516100f6919061074d565b3480156101df57600080fd5b5061011461047c565b3480156101f457600080fd5b50610136610203366004610602565b610482565b34801561021457600080fd5b506100e96104cb565b34801561022957600080fd5b5061013661023836600461063f565b6104e7565b34801561024957600080fd5b5061013661025836600461063f565b6104f2565b34801561026957600080fd5b506101146104fd565b60005473ffffffffffffffffffffffffffffffffffffffff165b90565b60015481565b6000805474ff000000000000000000000000000000000000000019169055565b60025481565b60005474010000000000000000000000000000000000000000900460ff1690565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156103ab5760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156103975780601f1061036c57610100808354040283529160200191610397565b820191906000526020600020905b81548152906001019060200180831161037a57829003601f168201915b505050505081526020019060010190610300565b50505050905090565b60005474010000000000000000000000000000000000000000900460ff1681565b60038054829081106103e357fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b505050505081565b60025490565b600380546001810180835560009290925282516104c6917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01906020850190610503565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600180549091019055565b600280549091019055565b60015490565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061054457805160ff1916838001178555610571565b82800160010185558215610571579182015b82811115610571578251825591602001919060010190610556565b5061057d929150610581565b5090565b61028c91905b8082111561057d5760008155600101610587565b6000601f820183136105ac57600080fd5b81356105bf6105ba82610793565b61076c565b915080825260208301602083018583830111156105db57600080fd5b6105e68382846107f5565b50505092915050565b60006105fb823561028c565b9392505050565b60006020828403121561061457600080fd5b813567ffffffffffffffff81111561062b57600080fd5b6106378482850161059b565b949350505050565b60006020828403121561065157600080fd5b600061063784846105ef565b610666816107c5565b82525050565b6000610677826107c1565b80845260208401935083602082028501610690856107bb565b60005b848110156106c75783830388526106ab8383516106dc565b92506106b6826107bb565b602098909801979150600101610693565b50909695505050505050565b610666816107ea565b60006106e7826107c1565b8084526106fb816020860160208601610801565b61070481610831565b9093016020019392505050565b6106668161028c565b60208101610728828461065d565b92915050565b602080825281016105fb818461066c565b6020810161072882846106d3565b602080825281016105fb81846106dc565b602081016107288284610711565b60405181810167ffffffffffffffff8111828210171561078b57600080fd5b604052919050565b600067ffffffffffffffff8211156107aa57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b73ffffffffffffffffffffffffffffffffffffffff1690565b60006002821061057d57fe5b6000610728826107de565b82818337506000910152565b60005b8381101561081c578181015183820152602001610804565b8381111561082b576000848401525b50505050565b601f01601f1916905600a265627a7a72305820104ff0702dcb242043fba9b15fee13172fd56e4cc492c2b9ddcedf73ff5400546c6578706572696d656e74616cf50037\",\"functionHashes\":{\"accountType()\":\"95eec3c9\",\"ethAccount()\":\"a7e33ba8\",\"getAccountType()\":\"52d6a0a3\",\"getEthAccount()\":\"16540941\",\"getPoints()\":\"f4b7095b\",\"getPointsExchanged()\":\"9bfc4a8f\",\"getTransactions()\":\"83920e90\",\"increasePoint(uint256)\":\"b0848304\",\"logTransaction(string)\":\"a0296be1\",\"points()\":\"1be6dd64\",\"pointsExchanged()\":\"41413b2f\",\"setAdmin()\":\"2cae2096\",\"transactions(uint256)\":\"9ace38c2\",\"updatePointsExchange(uint256)\":\"b2036198\"},\"gasEstimates\":{\"creation\":[51259,433000],\"external\":{\"accountType()\":null,\"ethAccount()\":717,\"getAccountType()\":null,\"getEthAccount()\":498,\"getPoints()\":771,\"getPointsExchanged()\":661,\"getTransactions()\":null,\"increasePoint(uint256)\":20749,\"logTransaction(string)\":null,\"points()\":507,\"pointsExchanged()\":551,\"setAdmin()\":20392,\"transactions(uint256)\":null,\"updatePointsExchange(uint256)\":20771},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getEthAccount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"points\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"setAdmin\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"pointsExchanged\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getAccountType\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getTransactions\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"accountType\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transactions\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getPointsExchanged\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"transaction\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"logTransaction\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"ethAccount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"increasePoint\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"updatePointsExchange\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getPoints\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"name\\\":\\\"_address\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.25+commit.59dbf8f1\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getEthAccount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"points\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[],\\\"name\\\":\\\"setAdmin\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"pointsExchanged\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getAccountType\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getTransactions\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"accountType\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transactions\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getPointsExchanged\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"transaction\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"logTransaction\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"ethAccount\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"increasePoint\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"updatePointsExchange\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getPoints\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"name\\\":\\\"_address\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"Profile.sol\\\":\\\"Profile\\\"},\\\"evmVersion\\\":\\\"byzantium\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"Profile.sol\\\":{\\\"keccak256\\\":\\\"0xc4193c731992a80f06f72c9f5c5d09a5c563d7992e37f76fe226dd6d1132f9d6\\\",\\\"urls\\\":[\\\"bzzr://e69be22216f9dbd34c1dcc8c9133810037e3af4876158ac2bbdd857ae020a95b\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 PUSH2 0x94E DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE PUSH2 0x2F SWAP2 SWAP1 DUP2 ADD SWAP1 PUSH2 0x98 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND OR DUP1 DUP3 SSTORE PUSH1 0x1 SWAP2 SWAP1 PUSH1 0xA0 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT AND PUSH21 0x10000000000000000000000000000000000000000 DUP4 MUL OR SWAP1 SSTORE POP POP PUSH1 0x0 PUSH1 0x1 DUP2 SWAP1 SSTORE PUSH1 0x2 SSTORE PUSH2 0xCA JUMP JUMPDEST PUSH1 0x0 PUSH2 0x91 DUP3 MLOAD PUSH2 0xBE JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xAA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xB6 DUP5 DUP5 PUSH2 0x85 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 JUMP JUMPDEST PUSH2 0x875 DUP1 PUSH2 0xD9 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xCF JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x16540941 DUP2 EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0x1BE6DD64 EQ PUSH2 0xFF JUMPI DUP1 PUSH4 0x2CAE2096 EQ PUSH2 0x121 JUMPI DUP1 PUSH4 0x41413B2F EQ PUSH2 0x138 JUMPI DUP1 PUSH4 0x52D6A0A3 EQ PUSH2 0x14D JUMPI DUP1 PUSH4 0x83920E90 EQ PUSH2 0x16F JUMPI DUP1 PUSH4 0x95EEC3C9 EQ PUSH2 0x191 JUMPI DUP1 PUSH4 0x9ACE38C2 EQ PUSH2 0x1A6 JUMPI DUP1 PUSH4 0x9BFC4A8F EQ PUSH2 0x1D3 JUMPI DUP1 PUSH4 0xA0296BE1 EQ PUSH2 0x1E8 JUMPI DUP1 PUSH4 0xA7E33BA8 EQ PUSH2 0x208 JUMPI DUP1 PUSH4 0xB0848304 EQ PUSH2 0x21D JUMPI DUP1 PUSH4 0xB2036198 EQ PUSH2 0x23D JUMPI DUP1 PUSH4 0xF4B7095B EQ PUSH2 0x25D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE9 PUSH2 0x272 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF6 SWAP2 SWAP1 PUSH2 0x71A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x10B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH2 0x28F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF6 SWAP2 SWAP1 PUSH2 0x75E JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x12D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x136 PUSH2 0x295 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x144 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH2 0x2B5 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x159 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x162 PUSH2 0x2BB JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF6 SWAP2 SWAP1 PUSH2 0x73F JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x184 PUSH2 0x2DC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF6 SWAP2 SWAP1 PUSH2 0x72E JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x19D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x162 PUSH2 0x3B4 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1B2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C6 PUSH2 0x1C1 CALLDATASIZE PUSH1 0x4 PUSH2 0x63F JUMP JUMPDEST PUSH2 0x3D5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF6 SWAP2 SWAP1 PUSH2 0x74D JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1DF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH2 0x47C JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1F4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x136 PUSH2 0x203 CALLDATASIZE PUSH1 0x4 PUSH2 0x602 JUMP JUMPDEST PUSH2 0x482 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x214 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE9 PUSH2 0x4CB JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x229 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x136 PUSH2 0x238 CALLDATASIZE PUSH1 0x4 PUSH2 0x63F JUMP JUMPDEST PUSH2 0x4E7 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x249 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x136 PUSH2 0x258 CALLDATASIZE PUSH1 0x4 PUSH2 0x63F JUMP JUMPDEST PUSH2 0x4F2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x269 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH2 0x4FD JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH21 0xFF0000000000000000000000000000000000000000 NOT AND SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH21 0x10000000000000000000000000000000000000000 SWAP1 DIV PUSH1 0xFF AND SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 SWAP1 JUMPDEST DUP3 DUP3 LT ISZERO PUSH2 0x3AB JUMPI PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 SWAP1 DUP2 SWAP1 KECCAK256 DUP4 ADD DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F PUSH1 0x2 PUSH1 0x0 NOT PUSH2 0x100 PUSH1 0x1 DUP8 AND ISZERO MUL ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV SWAP3 DUP4 ADD DUP6 SWAP1 DIV DUP6 MUL DUP2 ADD DUP6 ADD SWAP1 SWAP2 MSTORE DUP2 DUP2 MSTORE SWAP3 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x397 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x36C JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x397 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x37A JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 MSTORE PUSH1 0x20 ADD SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x300 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH21 0x10000000000000000000000000000000000000000 SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x3E3 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP2 DUP3 SWAP1 KECCAK256 ADD DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F PUSH1 0x2 PUSH1 0x0 NOT PUSH2 0x100 PUSH1 0x1 DUP8 AND ISZERO MUL ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV SWAP3 DUP4 ADD DUP6 SWAP1 DIV DUP6 MUL DUP2 ADD DUP6 ADD SWAP1 SWAP2 MSTORE DUP2 DUP2 MSTORE SWAP4 POP SWAP1 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x474 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x449 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x474 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x457 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD SWAP1 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP1 DUP4 SSTORE PUSH1 0x0 SWAP3 SWAP1 SWAP3 MSTORE DUP3 MLOAD PUSH2 0x4C6 SWAP2 PUSH32 0xC2575A0E9E593C00F959F8C92F12DB2869C3395A3B0502D05E2516446F71F85B ADD SWAP1 PUSH1 0x20 DUP6 ADD SWAP1 PUSH2 0x503 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x1 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x2 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD SWAP1 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x544 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x571 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x571 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x571 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x556 JUMP JUMPDEST POP PUSH2 0x57D SWAP3 SWAP2 POP PUSH2 0x581 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x28C SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x57D JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x587 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F DUP3 ADD DUP4 SGT PUSH2 0x5AC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x5BF PUSH2 0x5BA DUP3 PUSH2 0x793 JUMP JUMPDEST PUSH2 0x76C JUMP JUMPDEST SWAP2 POP DUP1 DUP3 MSTORE PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP4 ADD DUP6 DUP4 DUP4 ADD GT ISZERO PUSH2 0x5DB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x5E6 DUP4 DUP3 DUP5 PUSH2 0x7F5 JUMP JUMPDEST POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5FB DUP3 CALLDATALOAD PUSH2 0x28C JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x614 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x62B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x637 DUP5 DUP3 DUP6 ADD PUSH2 0x59B JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x651 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x637 DUP5 DUP5 PUSH2 0x5EF JUMP JUMPDEST PUSH2 0x666 DUP2 PUSH2 0x7C5 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x677 DUP3 PUSH2 0x7C1 JUMP JUMPDEST DUP1 DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP4 POP DUP4 PUSH1 0x20 DUP3 MUL DUP6 ADD PUSH2 0x690 DUP6 PUSH2 0x7BB JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP5 DUP2 LT ISZERO PUSH2 0x6C7 JUMPI DUP4 DUP4 SUB DUP9 MSTORE PUSH2 0x6AB DUP4 DUP4 MLOAD PUSH2 0x6DC JUMP JUMPDEST SWAP3 POP PUSH2 0x6B6 DUP3 PUSH2 0x7BB JUMP JUMPDEST PUSH1 0x20 SWAP9 SWAP1 SWAP9 ADD SWAP8 SWAP2 POP PUSH1 0x1 ADD PUSH2 0x693 JUMP JUMPDEST POP SWAP1 SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH2 0x666 DUP2 PUSH2 0x7EA JUMP JUMPDEST PUSH1 0x0 PUSH2 0x6E7 DUP3 PUSH2 0x7C1 JUMP JUMPDEST DUP1 DUP5 MSTORE PUSH2 0x6FB DUP2 PUSH1 0x20 DUP7 ADD PUSH1 0x20 DUP7 ADD PUSH2 0x801 JUMP JUMPDEST PUSH2 0x704 DUP2 PUSH2 0x831 JUMP JUMPDEST SWAP1 SWAP4 ADD PUSH1 0x20 ADD SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH2 0x666 DUP2 PUSH2 0x28C JUMP JUMPDEST PUSH1 0x20 DUP2 ADD PUSH2 0x728 DUP3 DUP5 PUSH2 0x65D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 ADD PUSH2 0x5FB DUP2 DUP5 PUSH2 0x66C JUMP JUMPDEST PUSH1 0x20 DUP2 ADD PUSH2 0x728 DUP3 DUP5 PUSH2 0x6D3 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 ADD PUSH2 0x5FB DUP2 DUP5 PUSH2 0x6DC JUMP JUMPDEST PUSH1 0x20 DUP2 ADD PUSH2 0x728 DUP3 DUP5 PUSH2 0x711 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP2 DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x78B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 MSTORE SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x7AA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x20 PUSH1 0x1F SWAP2 SWAP1 SWAP2 ADD PUSH1 0x1F NOT AND ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST MLOAD SWAP1 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 LT PUSH2 0x57D JUMPI INVALID JUMPDEST PUSH1 0x0 PUSH2 0x728 DUP3 PUSH2 0x7DE JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY POP PUSH1 0x0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x81C JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x804 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x82B JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP1 JUMP STOP LOG2 PUSH6 0x627A7A723058 KECCAK256 LT 0x4f CREATE PUSH17 0x2DCB242043FBA9B15FEE13172FD56E4CC4 SWAP3 0xc2 0xb9 0xdd 0xce 0xdf PUSH20 0xFF5400546C6578706572696D656E74616CF50037 \",\"runtimeBytecode\":\"6080604052600436106100cf5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631654094181146100d45780631be6dd64146100ff5780632cae20961461012157806341413b2f1461013857806352d6a0a31461014d57806383920e901461016f57806395eec3c9146101915780639ace38c2146101a65780639bfc4a8f146101d3578063a0296be1146101e8578063a7e33ba814610208578063b08483041461021d578063b20361981461023d578063f4b7095b1461025d575b600080fd5b3480156100e057600080fd5b506100e9610272565b6040516100f6919061071a565b60405180910390f35b34801561010b57600080fd5b5061011461028f565b6040516100f6919061075e565b34801561012d57600080fd5b50610136610295565b005b34801561014457600080fd5b506101146102b5565b34801561015957600080fd5b506101626102bb565b6040516100f6919061073f565b34801561017b57600080fd5b506101846102dc565b6040516100f6919061072e565b34801561019d57600080fd5b506101626103b4565b3480156101b257600080fd5b506101c66101c136600461063f565b6103d5565b6040516100f6919061074d565b3480156101df57600080fd5b5061011461047c565b3480156101f457600080fd5b50610136610203366004610602565b610482565b34801561021457600080fd5b506100e96104cb565b34801561022957600080fd5b5061013661023836600461063f565b6104e7565b34801561024957600080fd5b5061013661025836600461063f565b6104f2565b34801561026957600080fd5b506101146104fd565b60005473ffffffffffffffffffffffffffffffffffffffff165b90565b60015481565b6000805474ff000000000000000000000000000000000000000019169055565b60025481565b60005474010000000000000000000000000000000000000000900460ff1690565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156103ab5760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156103975780601f1061036c57610100808354040283529160200191610397565b820191906000526020600020905b81548152906001019060200180831161037a57829003601f168201915b505050505081526020019060010190610300565b50505050905090565b60005474010000000000000000000000000000000000000000900460ff1681565b60038054829081106103e357fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b505050505081565b60025490565b600380546001810180835560009290925282516104c6917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01906020850190610503565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600180549091019055565b600280549091019055565b60015490565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061054457805160ff1916838001178555610571565b82800160010185558215610571579182015b82811115610571578251825591602001919060010190610556565b5061057d929150610581565b5090565b61028c91905b8082111561057d5760008155600101610587565b6000601f820183136105ac57600080fd5b81356105bf6105ba82610793565b61076c565b915080825260208301602083018583830111156105db57600080fd5b6105e68382846107f5565b50505092915050565b60006105fb823561028c565b9392505050565b60006020828403121561061457600080fd5b813567ffffffffffffffff81111561062b57600080fd5b6106378482850161059b565b949350505050565b60006020828403121561065157600080fd5b600061063784846105ef565b610666816107c5565b82525050565b6000610677826107c1565b80845260208401935083602082028501610690856107bb565b60005b848110156106c75783830388526106ab8383516106dc565b92506106b6826107bb565b602098909801979150600101610693565b50909695505050505050565b610666816107ea565b60006106e7826107c1565b8084526106fb816020860160208601610801565b61070481610831565b9093016020019392505050565b6106668161028c565b60208101610728828461065d565b92915050565b602080825281016105fb818461066c565b6020810161072882846106d3565b602080825281016105fb81846106dc565b602081016107288284610711565b60405181810167ffffffffffffffff8111828210171561078b57600080fd5b604052919050565b600067ffffffffffffffff8211156107aa57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b73ffffffffffffffffffffffffffffffffffffffff1690565b60006002821061057d57fe5b6000610728826107de565b82818337506000910152565b60005b8381101561081c578181015183820152602001610804565b8381111561082b576000848401525b50505050565b601f01601f1916905600a265627a7a72305820104ff0702dcb242043fba9b15fee13172fd56e4cc492c2b9ddcedf73ff5400546c6578706572696d656e74616cf50037\",\"srcmap\":\"107:1422:4:-;;;568:151;8:9:-1;5:2;;;30:1;27;20:12;5:2;568:151:4;;;;;;;;;;;;;;;;;;;;;;612:10;:21;;-1:-1:-1;;;;;;612:21:4;-1:-1:-1;;;;;612:21:4;;;;;;-1:-1:-1;;612:10:4;-1:-1:-1;;;;;;640:30:4;;-1:-1:-1;640:30:4;;;;-1:-1:-1;;686:1:4;677:6;:10;;;694:15;:19;107:1422;;5:122:-1;;83:39;114:6;108:13;83:39;;;74:48;68:59;-1:-1;;;68:59;134:263;;249:2;237:9;228:7;224:23;220:32;217:2;;;265:1;262;255:12;217:2;300:1;317:64;373:7;353:9;317:64;;;307:74;211:186;-1:-1;;;;211:186;404:128;-1:-1;;;;;473:54;;456:76;;107:1422:4;;;;;;\",\"srcmapRuntime\":\"107:1422:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1442:84;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1442:84:4;;;;;;;;;;;;;;;;;;;;337:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;337:18:4;;;;;;;;;;;;725:71;;8:9:-1;5:2;;;30:1;27;20:12;5:2;725:71:4;;;;;;421:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;421:27:4;;;;802:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;802:90:4;;;;;;;;;;;;1347:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1347:89:4;;;;;;;;;;;;250:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;250:30:4;;;;492:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;492:28:4;;;;;;;;;;;;;;;;;1156:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1156:91:4;;;;977:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;977:94:4;;;;;;;;;129:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;129:25:4;;;;898:73;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;898:73:4;;;;;;;;;1253:88;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1253:88:4;;;;;;;;;1077:73;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1077:73:4;;;;1442:84;1487:7;1510:10;;;1442:84;;:::o;337:18::-;;;;:::o;725:71::-;773:17;759:31;;-1:-1:-1;;759:31:4;;;725:71::o;421:27::-;;;;:::o;802:90::-;848:11;875;;;;;;;802:90::o;1347:89::-;1394:8;1418:12;1411:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1411:19:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1347:89;:::o;250:30::-;;;;;;;;;:::o;492:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;492:28:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;492:28:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1156:91::-;1226:15;;1156:91;:::o;977:94::-;1035:12;27:10:-1;;39:1;23:18;;45:23;;;-1:-1;1035:30:4;;;;;;;;;;;;;;;;:::i;:::-;;;977:94;:::o;129:25::-;;;;;;:::o;898:73::-;948:6;:17;;;;;;;898:73::o;1253:88::-;1310:15;:25;;;;;;;1253:88::o;1077:73::-;1138:6;;1077:73;:::o;107:1422::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;107:1422:4;;;-1:-1:-1;107:1422:4;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;6:442:-1;;101:4;89:17;;85:27;-1:-1;75:2;;126:1;123;116:12;75:2;163:6;150:20;185:65;200:49;242:6;200:49;;;185:65;;;176:74;;270:6;263:5;256:21;306:4;298:6;294:17;339:4;332:5;328:16;374:3;365:6;360:3;356:16;353:25;350:2;;;391:1;388;381:12;350:2;401:41;435:6;430:3;425;401:41;;;68:380;;;;;;;;456:118;;523:46;561:6;548:20;523:46;;;514:55;508:66;-1:-1;;;508:66;581:347;;695:2;683:9;674:7;670:23;666:32;663:2;;;711:1;708;701:12;663:2;746:31;;797:18;786:30;;783:2;;;829:1;826;819:12;783:2;849:63;904:7;895:6;884:9;880:22;849:63;;;839:73;657:271;-1:-1;;;;657:271;935:241;;1039:2;1027:9;1018:7;1014:23;1010:32;1007:2;;;1055:1;1052;1045:12;1007:2;1090:1;1107:53;1152:7;1132:9;1107:53;;1183:110;1256:31;1281:5;1256:31;;;1251:3;1244:44;1238:55;;;1329:773;;1476:60;1530:5;1476:60;;;1554:6;1549:3;1542:19;1578:4;1573:3;1569:14;1562:21;;1626:3;1668:4;1660:6;1656:17;1651:3;1647:27;1694:62;1750:5;1694:62;;;1777:1;1762:301;1787:6;1784:1;1781:13;1762:301;;;1849:9;1843:4;1839:20;1834:3;1827:33;1875:70;1940:4;1931:6;1925:13;1875:70;;;1867:78;;1962:66;2021:6;1962:66;;;2051:4;2042:14;;;;;1952:76;-1:-1;1809:1;1802:9;1762:301;;;-1:-1;2076:4;;1455:647;-1:-1;;;;;;1455:647;2110:144;2197:51;2242:5;2197:51;;2261:292;;2359:35;2388:5;2359:35;;;2411:6;2406:3;2399:19;2423:63;2479:6;2472:4;2467:3;2463:14;2456:4;2449:5;2445:16;2423:63;;;2518:29;2540:6;2518:29;;;2498:50;;;2511:4;2498:50;;2339:214;-1:-1;;;2339:214;2560:110;2633:31;2658:5;2633:31;;2677:193;2785:2;2770:18;;2799:61;2774:9;2833:6;2799:61;;;2756:114;;;;;2877:365;3047:2;3061:47;;;3032:18;;3122:110;3032:18;3218:6;3122:110;;3249:221;3371:2;3356:18;;3385:75;3360:9;3433:6;3385:75;;3477:273;3601:2;3615:47;;;3586:18;;3676:64;3586:18;3726:6;3676:64;;3757:193;3865:2;3850:18;;3879:61;3854:9;3913:6;3879:61;;3957:256;4019:2;4013:9;4045:17;;;4120:18;4105:34;;4141:22;;;4102:62;4099:2;;;4177:1;4174;4167:12;4099:2;4193;4186:22;3997:216;;-1:-1;3997:216;4220:259;;4364:18;4356:6;4353:30;4350:2;;;4396:1;4393;4386:12;4350:2;-1:-1;;;4440:4;4417:17;;;;4413:33;4469:4;4459:15;;4287:192;4488:127;4603:4;4591:17;;4572:43;4624:113;4720:12;;4704:33;4976:128;5056:42;5045:54;;5028:76;5111:133;;5205:1;5195:12;;5185:2;;5211:9;5423:145;;5516:47;5557:5;5516:47;;5576:145;5657:6;5652:3;5647;5634:30;-1:-1;5713:1;5695:16;;5688:27;5627:94;5730:268;5795:1;5802:101;5816:6;5813:1;5810:13;5802:101;;;5883:11;;;5877:18;5864:11;;;5857:39;5838:2;5831:10;5802:101;;;5918:6;5915:1;5912:13;5909:2;;;5983:1;5974:6;5969:3;5965:16;5958:27;5909:2;5779:219;;;;;6006:97;6094:2;6074:14;-1:-1;;6070:28;;6054:49\"}");

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0cGM");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "mobile-detect"
var external_mobile_detect_ = __webpack_require__("A1cq");
var external_mobile_detect_default = /*#__PURE__*/__webpack_require__.n(external_mobile_detect_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./utils/device.js
var utils_device = __webpack_require__("CFn4");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// CONCATENATED MODULE: ./components/DesktopHeader.js
var __jsx = external_react_default.a.createElement;




class DesktopHeader_DesktopHeader extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      if (this.state.value != '') routes["Router"].pushRoute(`/${'search/' + encodeURIComponent(this.state.value)}`);
    }
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx(external_semantic_ui_react_["Segment"], {
      inverted: true,
      style: {
        marginBottom: '0px',
        fontSize: '20px',
        borderRadius: '0px',
        border: '0px',
        paddingRight: '5%'
      },
      as: "h1",
      textAlign: "center"
    }, __jsx(external_semantic_ui_react_["Icon"], {
      name: "ethereum"
    }), "Block-Chain Based Question Answering System", __jsx(external_semantic_ui_react_["Button"], {
      compact: true,
      floated: "right",
      inverted: true,
      color: "orange",
      onClick: () => {
        routes["Router"].pushRoute('/');
      }
    }, __jsx(external_semantic_ui_react_["Icon"], {
      name: "user",
      circular: true,
      size: "small"
    }), "Log Out")), __jsx(external_semantic_ui_react_["Sticky"], {
      context: this.props.contextRef
    }, __jsx(external_semantic_ui_react_["Menu"], {
      inverted: true,
      size: "massive",
      fluid: true,
      style: {
        marginTop: '0px',
        borderRadius: '0px',
        border: '0px',
        paddingLeft: '5%',
        paddingRight: '5%'
      }
    }, __jsx(routes["Link"], {
      route: "/home"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "Home",
      icon: "home",
      active: this.props.page === 'Home',
      color: "orange"
    })), __jsx(routes["Link"], {
      route: "/about"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "About",
      icon: "question",
      active: this.props.page === 'About',
      color: "orange"
    })), __jsx(routes["Link"], {
      route: "/userProfile"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "Profile",
      icon: "user",
      active: this.props.page === 'Profile',
      color: "orange"
    })), __jsx(routes["Link"], {
      route: "/new"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "Ask Question",
      icon: "pencil alternate",
      active: this.props.page === 'New',
      color: "orange"
    })), __jsx(routes["Link"], {
      route: "/feedback"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "Feedback",
      icon: "comment",
      active: this.props.page === 'Feedback',
      color: "orange"
    })), __jsx(routes["Link"], {
      route: "/leaderboard"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "Leaderboard",
      icon: "trophy",
      active: this.props.page === 'Leaderboard',
      color: "orange"
    })), this.props.accountType == "Admin" ? __jsx(routes["Link"], {
      route: "/admin"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, {
      name: "Admin Options",
      icon: "settings",
      active: this.props.page === 'Admin',
      color: "orange"
    })) : null, __jsx(external_semantic_ui_react_["Menu"].Menu, {
      position: "right"
    }, __jsx(external_semantic_ui_react_["Menu"].Item, null, __jsx(external_semantic_ui_react_["Input"], {
      icon: __jsx(external_semantic_ui_react_["Icon"], {
        name: "search",
        link: true,
        onClick: () => {
          if (this.state.value != '') {
            routes["Router"].pushRoute(`/${'search/' + encodeURIComponent(this.state.value)}`);
          }
        }
      }),
      placeholder: "Search...",
      onKeyDown: this.keyPress,
      onChange: this.handleChange
    }))))), this.props.children);
  }

}

/* harmony default export */ var components_DesktopHeader = (DesktopHeader_DesktopHeader);
// CONCATENATED MODULE: ./components/MobileHeader.js
var MobileHeader_jsx = external_react_default.a.createElement;




class MobileHeader_HeaderMobile extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      if (this.state.value != '') routes["Router"].pushRoute(`/${'search/' + encodeURIComponent(this.state.value)}`);
    }
  }

  renderSideBar() {
    const {
      handleSidebarHide,
      handleToggle,
      sidebarOpened,
      children
    } = this.props;
    return MobileHeader_jsx(external_react_default.a.Fragment, null, MobileHeader_jsx(external_semantic_ui_react_["Sidebar"].Pushable, null, MobileHeader_jsx(external_semantic_ui_react_["Sidebar"], {
      as: external_semantic_ui_react_["Menu"],
      animation: "push",
      inverted: true,
      onHide: handleSidebarHide,
      vertical: true,
      visible: sidebarOpened,
      width: "thin",
      icon: "labeled"
    }, MobileHeader_jsx(external_semantic_ui_react_["Menu"].Item, {
      header: true
    }, MobileHeader_jsx("h3", null, "Question Answering System")), MobileHeader_jsx(routes["Link"], {
      route: "/home"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "home"
    }), "Home")), MobileHeader_jsx(routes["Link"], {
      route: "/about"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "question"
    }), "About")), MobileHeader_jsx(routes["Link"], {
      route: "/userProfile"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "user"
    }), "Profile")), MobileHeader_jsx(routes["Link"], {
      route: "/new"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "pencil alternate"
    }), "Ask Question")), MobileHeader_jsx(routes["Link"], {
      route: "/feedback"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "comment"
    }), "Feedback")), MobileHeader_jsx(routes["Link"], {
      route: "/leaderboard"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "trophy"
    }), "Leaderboard")), this.props.accountType == "Admin" ? MobileHeader_jsx(routes["Link"], {
      route: "/admin"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "settings"
    }), "Admin Settings")) : null, MobileHeader_jsx(routes["Link"], {
      route: "/login"
    }, MobileHeader_jsx("a", {
      className: "item"
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "power off"
    }), "Log Out"))), MobileHeader_jsx(external_semantic_ui_react_["Sidebar"].Pusher, {
      dimmed: sidebarOpened,
      style: {
        minHeight: '100vh'
      }
    }, MobileHeader_jsx(external_semantic_ui_react_["Rail"], {
      internal: true,
      position: "left",
      attached: true,
      style: {
        top: "auto",
        height: "auto",
        width: "100%"
      }
    }, MobileHeader_jsx(external_semantic_ui_react_["Sticky"], {
      context: this.props.contextRef
    }, MobileHeader_jsx(external_semantic_ui_react_["Segment"], {
      inverted: true,
      vertical: true,
      style: {
        minHeight: 50,
        padding: '1em 0em 0em 0em',
        textAlign: 'flex-end'
      }
    }, MobileHeader_jsx(external_semantic_ui_react_["Menu"], {
      inverted: true,
      fixed: "top",
      size: "large",
      secondary: true
    }, MobileHeader_jsx(external_semantic_ui_react_["Container"], null, MobileHeader_jsx(external_semantic_ui_react_["Menu"].Item, {
      onClick: handleToggle
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "sidebar"
    })), MobileHeader_jsx(external_semantic_ui_react_["Menu"].Item, {
      header: true,
      style: {
        padding: 0
      }
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "ethereum",
      style: {
        float: 'left'
      }
    }), "Ethereum Question Answering System"))), MobileHeader_jsx(external_semantic_ui_react_["Container"], {
      style: {
        marginTop: '40px'
      }
    }, MobileHeader_jsx(external_semantic_ui_react_["Grid"], {
      inverted: true,
      style: {
        padding: '0em 0.7em 0em 1.5em'
      },
      verticalAlign: "bottom"
    }, MobileHeader_jsx(external_semantic_ui_react_["Grid"].Row, null, MobileHeader_jsx(external_semantic_ui_react_["Menu"], {
      secondary: true,
      inverted: true,
      fluid: true
    }, MobileHeader_jsx(external_semantic_ui_react_["Menu"].Item, null, MobileHeader_jsx(external_semantic_ui_react_["Input"], {
      icon: MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
        name: "search",
        link: true,
        onClick: () => {
          if (this.state.value != '') {
            routes["Router"].pushRoute(`/${'search/' + encodeURIComponent(this.state.value)}`);
          }
        }
      }),
      placeholder: "Search...",
      onKeyDown: this.keyPress,
      onChange: this.handleChange
    })), MobileHeader_jsx(external_semantic_ui_react_["Button"], {
      compact: true,
      floated: "right",
      inverted: true,
      color: "orange",
      onClick: () => {
        routes["Router"].pushRoute('/new');
      }
    }, MobileHeader_jsx(external_semantic_ui_react_["Icon"], {
      name: "pencil alternate",
      circular: true,
      size: "small"
    }), "Ask Question")))))))), children)));
  }

  render() {
    return MobileHeader_jsx(external_react_default.a.Fragment, null, this.renderSideBar());
  }

}

/* harmony default export */ var MobileHeader = (MobileHeader_HeaderMobile);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Layout_DesktopContainer extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const {
      accountType,
      page,
      getWidth,
      contextRef,
      children
    } = this.props;
    return Layout_jsx(external_semantic_ui_react_["Responsive"], {
      fireOnMount: true,
      getWidth: getWidth,
      minWidth: external_semantic_ui_react_["Responsive"].onlyTablet.minWidth
    }, Layout_jsx(components_DesktopHeader, {
      accountType: accountType,
      contextRef: contextRef,
      page: page
    }, Layout_jsx(external_semantic_ui_react_["Container"], {
      style: {
        minHeight: "100vh",
        width: "100vw"
      }
    }, children)));
  }

}

class Layout_MobileContainer extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      sidebarOpened: false
    });

    _defineProperty(this, "handleSidebarHide", () => this.setState({
      sidebarOpened: false
    }));

    _defineProperty(this, "handleToggle", () => this.setState({
      sidebarOpened: true
    }));
  }

  render() {
    const {
      accountType,
      getWidth,
      contextRef,
      children
    } = this.props;
    return Layout_jsx(external_semantic_ui_react_["Responsive"], {
      fireOnMount: true,
      as: external_semantic_ui_react_["Sidebar"].Pushable,
      getWidth: getWidth,
      maxWidth: external_semantic_ui_react_["Responsive"].onlyMobile.maxWidth
    }, Layout_jsx(MobileHeader, {
      contextRef: contextRef,
      accountType: accountType,
      handleSidebarHide: this.handleSidebarHide,
      handleToggle: this.handleToggle,
      sidebarOpened: this.state.sidebarOpened
    }, Layout_jsx(external_semantic_ui_react_["Container"], {
      style: {
        paddingTop: "10em",
        minHeight: "100vh",
        width: "100vw"
      }
    }, children)));
  }

}

class Layout_Layout extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleContextRef", contextRef => this.setState({
      contextRef
    }));
  }

  static async getInitialProps(props) {
    let isMobileFromSSR = false;

    if (props.req) {
      const device = props.req.headers["user-agent"];
      const md = new external_mobile_detect_default.a(device);
      isMobileFromSSR = !!md.mobile();
    }

    return {
      isMobileFromSSR
    };
  }

  render() {
    return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(head_default.a, null, Layout_jsx("link", {
      rel: "stylesheet",
      href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
    }), Layout_jsx("link", {
      rel: "shortcut icon",
      href: "/static/ethIcon.ico"
    }), Layout_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), Layout_jsx("title", null, "Block-Chain Based Question Answering System")), Layout_jsx("div", {
      ref: this.handleContextRef
    }, Layout_jsx(Layout_DesktopContainer, {
      accountType: this.props.accountType,
      getWidth: Object(utils_device["a" /* getWidthFactory */])(this.props.isMobileFromSSR),
      page: this.props.page
    }, this.props.children), Layout_jsx(Layout_MobileContainer, {
      accountType: this.props.accountType,
      getWidth: Object(utils_device["a" /* getWidthFactory */])(this.props.isMobileFromSSR)
    }, this.props.children)), Layout_jsx(external_semantic_ui_react_["Divider"], {
      hidden: true
    }), Layout_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__("90Kz")(); // Define a new route mapping
// Arguments: The pattern to look for, which route inside the page directory
// we want to display


routes.add('/', '/login').add('/home', 'home').add('/about', '/about').add('/userProfile/:value', '/userProfile').add('/feedback', '/feedback').add('/admin', '/admin').add('/new', '/newQuestion').add('/questions/:value', '/showQuestion').add('/search/:value', '/home').add('/leaderboard', '/leaderboard').add('/register', '/register');
module.exports = routes;

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      inverted: true,
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h4",
      inverted: true,
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "ethereum"
    }), "Block-Chain Based Question Answering System"), __jsx("p", {
      style: {
        textAlign: "center"
      }
    }, "SCSE Final Year Project | Powered By Ethereum | Created Using React JS"));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "A1cq":
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "CFn4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isMobileSSR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWidthFactory; });
const MobileDetect = __webpack_require__("A1cq");

const {
  Responsive
} = __webpack_require__("FfxO");

const isMobileSSR = req => {
  const md = new MobileDetect(req.headers["user-agent"]);
  console.log(md);
  return !!md.mobile();
};

const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = true;
  const ssrValue = isMobileFromSSR ? Responsive.onlyMobile.maxWidth : Responsive.onlyTablet.minWidth;
  return isSSR ? ssrValue : window.innerWidth;
};



/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "MDWq":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "OIDg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oZBQ");
/* harmony import */ var _build_QuestionFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zEb0");
var _build_QuestionFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("zEb0", 1);
// The idea: If we need to get access to our deployed factory instance from somewhere else in our app,
//     we won't have to go through the entire process of importing web3, and the interface and get the address and etc.
//     Instead, we can import this factory.js file.
// Import the copy of web3 that we created (The instance that is created there).
 // Import the compiled contract that is placed in the build directory.
// Any time that we want to tell web3 about an already deployed contract, we have to give web3 that contract's interface (ABI).
// The ABI is defined inside the PostFactory.JSON file.

 // Create the contract instance that refers to the specific address that we deployed the contract to
// and we we'll export it from this file.
// So, if we need excess to our deployed factory - We can import factory.js.
// arguments: Our contract ABI, The address that we deployed our factory to

let instance;

if (typeof _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] !== 'undefined') {
  instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].eth.Contract(JSON.parse(_build_QuestionFactory_json__WEBPACK_IMPORTED_MODULE_1__.interface), "0xc82918Bd8970D2774343e239437B2A40E2ffDA23");
}

/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "UZm1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class AccountIssueModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.props.loading,
      basic: true,
      size: "small"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "ethereum",
      content: "Loading Resources"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
      active: true,
      inline: "centered"
    }, "Fetching Data From Blockchain"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: !this.props.login && !this.props.loading,
      basic: true,
      size: "small"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "ethereum",
      content: "Account Issue"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, __jsx("p", null, "You are facing one of the following issues:"), __jsx("p", null, "(1) Banned from accessing the platform."), __jsx("p", null, "(2) Currently not registered to access the platform. Please have your account registered.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "green",
      inverted: true,
      attached: "bottom",
      onClick: () => {
        _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/');
      }
    }, "Register For Account"))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AccountIssueModal);

/***/ }),

/***/ "XPRw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oZBQ");
/* harmony import */ var _build_Profile_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3JbG");
var _build_Profile_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("3JbG", 1);


/* harmony default export */ __webpack_exports__["a"] = (address => {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].eth.Contract( // The interface from the build/Profile:
  JSON.parse(_build_Profile_json__WEBPACK_IMPORTED_MODULE_1__.interface), address);
});

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oZBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MDWq");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
// Imports Web3 API

let web3;
const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('http://127.0.0.1:8543');
web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zEb0":
/***/ (function(module) {


/***/ })

/******/ });