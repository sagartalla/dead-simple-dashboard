webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tile/index.js":
/*!**********************************!*\
  !*** ./components/Tile/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphs_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphs/line */ "./components/Tile/graphs/line.js");
/* harmony import */ var _graphs_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphs/bar */ "./components/Tile/graphs/bar.js");
/* harmony import */ var _graphs_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphs/area */ "./components/Tile/graphs/area.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/Tile/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/sagar/Desktop/sagar/repo/recko/dashboard/components/Tile/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Tile =
/*#__PURE__*/
function (_Component) {
  _inherits(Tile, _Component);

  function Tile(props) {
    var _this;

    _classCallCheck(this, Tile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tile).call(this, props));
    _this.state = {
      edit: false,
      title: 'test title'
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.editModeOn = _this.editModeOn.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.editModeOff = _this.editModeOff.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tile, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        title: e.target.value
      });
    }
  }, {
    key: "editModeOn",
    value: function editModeOn(e) {
      this.setState({
        edit: true
      });
    }
  }, {
    key: "editModeOff",
    value: function editModeOff(e) {
      this.setState({
        edit: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          i = _this$props.i,
          type = _this$props.type;
      var _this$state = this.state,
          edit = _this$state.edit,
          title = _this$state.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, edit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        defaultValue: title,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "tile-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, title), "\xA0", edit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: this.editModeOff,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "save")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: this.editModeOn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, function () {
        return {
          line: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphs_line__WEBPACK_IMPORTED_MODULE_1__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }),
          bar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphs_bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }),
          area: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphs_area__WEBPACK_IMPORTED_MODULE_3__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }),
          none: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, "none")
        }[type];
      }()));
    }
  }]);

  return Tile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ })

})
//# sourceMappingURL=index.js.e869c80899366d672301.hot-update.js.map