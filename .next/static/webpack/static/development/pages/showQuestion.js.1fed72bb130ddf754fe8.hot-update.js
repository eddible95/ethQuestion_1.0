webpackHotUpdate("static\\development\\pages\\showQuestion.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
// Imports Web3 API
 // New instance of Web3 with the provider that is automatically provided to us by MetaMask inside the browser.
// This makes the assumption that the user has MetaMask.

var web3; // Modern DApp broswer

if (typeof window !== 'undefined' && window.ethereum) {
  var instance = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);

  try {
    // Request account access if needed
    window.ethereum.enable(); // Acccounts now exposed

    web3 = instance;
  } catch (error) {
    // User denied account access
    alert('Please allow access for the app to work');
  }
} else if (typeof window !== 'undefined' && window.web3) {
  //Legacy DApp browser
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3.currentProvider); // Acccounts always exposed

  resolve(web3);
} else {
  // Metamask not available
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('http://192.168.86.248:8543');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
  console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=showQuestion.js.1fed72bb130ddf754fe8.hot-update.js.map