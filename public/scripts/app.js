'use strict';

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'Boilerplate JSX from app.js!'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
