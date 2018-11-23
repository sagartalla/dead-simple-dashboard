webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tile/graphs/area.js":
/*!****************************************!*\
  !*** ./components/Tile/graphs/area.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-charts */ "./node_modules/react-charts/dist/index.es.js");
var _jsxFileName = "/Users/sagar/Desktop/sagar/repo/recko/dashboard/components/Tile/graphs/area.js";



var AreaChart = function AreaChart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "400px",
      height: "300px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
    series: {
      type: 'area'
    },
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
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AreaChart);

/***/ })

})
//# sourceMappingURL=index.js.7c437d84775f3fc9535b.hot-update.js.map