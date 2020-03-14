"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "webpack", {
  enumerable: true,
  get: function () {
    return _webpack.default;
  }
});
Object.defineProperty(exports, "rollup", {
  enumerable: true,
  get: function () {
    return _rollup.default;
  }
});

var _webpack = _interopRequireDefault(require("./webpack"));

var _rollup = _interopRequireDefault(require("./rollup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
