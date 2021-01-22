'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ApiInterface = require('./components/ApiInterface');

var _ApiInterface2 = _interopRequireDefault(_ApiInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// JSX - JavaScript XML
var template = _react2.default.createElement(
  'p',
  null,
  'API Interface from app.js!'
);
var appRoot = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(_ApiInterface2.default, null), appRoot);
