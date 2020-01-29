exports.ids = ["icon.submodule-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/submodule.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/submodule.js ***!
  \**************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconSubmodule = function EuiIconSubmodule(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: titleId
  }, title) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    clipRule: "evenodd",
    d: "M6 2H1v12h3V7a1 1 0 011-1h5a1 1 0 011 1v1h4V4H7c-.621 0-1-.379-1-1V2zm10 6v6a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h5.25a.75.75 0 01.75.75l-.004.206C6.99 2.317 6.974 3 7 3h8a1 1 0 011 1v4zm-1 1h-4a1 1 0 01-1-1V7H5v7h10V9zM2 4.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM6.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2z"
  }));
};

var icon = EuiIconSubmodule;
EuiIconSubmodule.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconSubmodule"
};

/***/ })

};;
//# sourceMappingURL=icon.submodule-js.render-page.js.map