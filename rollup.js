"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _pluginutils = require("@rollup/pluginutils");

function _default(options = {}) {
  const {
    transform,
    include,
    exclude
  } = options,
        filter = (0, _pluginutils.createFilter)(include, exclude);
  return {
    name: 'loader',
    transform: (source, id) => {
      if (!filter(id)) {
        return null;
      }

      return transform({
        source,
        ...this,
        id
      });
    }
  };
}
