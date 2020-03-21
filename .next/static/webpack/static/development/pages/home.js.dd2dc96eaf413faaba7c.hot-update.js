webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/MobileHeader.js":
/*!************************************!*\
  !*** ./components/MobileHeader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);










var HeaderMobile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeaderMobile, _Component);

  function HeaderMobile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderMobile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderMobile).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.keyPress = _this.keyPress.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderMobile, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      if (e.keyCode == 13) {
        if (this.state.value != '') _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute("/".concat('search/' + encodeURIComponent(this.state.value)));
      }
    }
  }, {
    key: "renderSideBar",
    value: function renderSideBar() {
      var _this2 = this;

      var _this$props = this.props,
          handleSidebarHide = _this$props.handleSidebarHide,
          handleToggle = _this$props.handleToggle,
          sidebarOpened = _this$props.sidebarOpened,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Sidebar"].Pushable, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Sidebar"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"],
        animation: "push",
        inverted: true,
        onHide: handleSidebarHide,
        vertical: true,
        visible: sidebarOpened,
        width: "thin",
        icon: "labeled"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        header: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Question Answering System")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/home"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "home"
      }), "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "question"
      }), "About")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/userProfile"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "user"
      }), "Profile")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "pencil alternate"
      }), "Ask Question")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/feedback"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "comment"
      }), "Feedback")), this.props.accountType == "Admin" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/admin"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "settings"
      }), "Admin Settings")) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "power off"
      }), "Log Out"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Sidebar"].Pusher, {
        dimmed: sidebarOpened,
        style: {
          minHeight: '100vh'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Rail"], {
        internal: true,
        position: "left",
        attached: true,
        style: {
          top: "auto",
          height: "auto",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Sticky"], {
        context: this.props.contextRef
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        inverted: true,
        vertical: true,
        style: {
          minHeight: 50,
          padding: '1em 0em 0em 0em',
          textAlign: 'flex-end'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
        inverted: true,
        fixed: "top",
        size: "large",
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        onClick: handleToggle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "sidebar"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
        header: true,
        style: {
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        name: "ethereum",
        style: {
          float: 'left'
        }
      }), "Ethereum Question Answering System"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        style: {
          marginTop: '40px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        inverted: true,
        style: {
          padding: '0em 0.7em 0em 1.5em'
        },
        verticalAlign: "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
        secondary: true,
        inverted: true,
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "search",
          link: true,
          onClick: function onClick() {
            if (_this2.state.value != '') {
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute("/".concat('search/' + encodeURIComponent(_this2.state.value)));
            }
          }
        }),
        placeholder: "Search...",
        onKeyDown: this.keyPress,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          circular: true,
          icon: "pencil alternate",
          inverted: true,
          onClick: function onClick() {
            return _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute("/home");
          }
        }),
        content: "Clear Filter"
      })))))))), children)));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.renderSideBar());
    }
  }]);

  return HeaderMobile;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeaderMobile);

/***/ })

})
//# sourceMappingURL=home.js.dd2dc96eaf413faaba7c.hot-update.js.map