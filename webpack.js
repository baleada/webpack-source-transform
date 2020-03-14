"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
  type: 'object',
  properties: {
    transform: {
      instanceof: 'Function'
    }
  },
  additionalProperties: false
};

function _default(source) {
  this.cacheable();
  const options = {
    transform: source => source,
    ...(0, _loaderUtils.getOptions)(this)
  };
  (0, _schemaUtils.default)(schema, options, {
    name: 'Baleada Loader',
    baseDataPath: 'options',
    postFormatter: (formattedError, error) => {
      return error.keyword === 'type' ? `${formattedError}\nSee the Baleada docs for more info: https://baleada.netlify.com/docs/loader` : formattedError;
    }
  });
  const {
    transform
  } = options;
  return transform({
    source,
    ...this
  });
}
