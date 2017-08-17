'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextJS = exports.helloWorld = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _next = require('next');

var _next2 = _interopRequireDefault(_next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dev = process.env.NODE_ENV !== 'production';
var app = (0, _next2.default)({ dev: dev, conf: { distDir: 'next' } });
var handle = app.getRequestHandler();

var helloWorld = exports.helloWorld = functions.https.onRequest(function (req, res) {
  var world = 'from ES6 in Cloud Functions!';
  res.status(200).send('Hello ' + world);
});

var nextJS = exports.nextJS = functions.https.onRequest(function (req, res) {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(function () {
    return handle(req, res);
  });
});