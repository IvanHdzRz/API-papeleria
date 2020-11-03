"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 5000;
var app = (0, _express["default"])();
app.listen(port);
console.log('server listen on port ', port);