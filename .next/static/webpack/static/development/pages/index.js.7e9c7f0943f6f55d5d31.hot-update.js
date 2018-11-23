webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tile/graphs/line.js":
/*!****************************************!*\
  !*** ./components/Tile/graphs/line.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-charts */ "./node_modules/react-charts/dist/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
var _jsxFileName = "/Users/sagar/Desktop/sagar/repo/recko/dashboard/components/Tile/graphs/line.js";





var lineChart = function lineChart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "400px",
      height: "300px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_charts__WEBPACK_IMPORTED_MODULE_1__["Chart"], {
    data: [{
      label: "Series 1",
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    }, {
      label: "Series 2",
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }],
    axes: [{
      primary: true,
      type: "linear",
      position: "bottom"
    }, {
      type: "linear",
      position: "left"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    hideSearchBarFitlers: actionCreators.hideSearchBarFitlers
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(lineChart));

/***/ })

})
//# sourceMappingURL=index.js.7e9c7f0943f6f55d5d31.hot-update.js.map