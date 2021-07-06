webpackHotUpdate("tweets",{

/***/ "./front/screens/Tweets.js":
/*!*********************************!*\
  !*** ./front/screens/Tweets.js ***!
  \*********************************/
/*! exports provided: Tweets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tweets\", function() { return Tweets; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./front/components/Navbar.js\");\n/* harmony import */ var _components_Tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tweet */ \"./front/components/Tweet.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.i);\n\nvar _s2 = __webpack_require__.$Refresh$.signature();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* eslint-disable react/self-closing-comp */\n\n/* eslint-disable jsx-a11y/anchor-is-valid */\n\n/* eslint-disable arrow-body-style */\n\n\n\n\n\n\nvar NumberCard = function NumberCard(_ref) {\n  var text = _ref.text,\n      number = _ref.number,\n      color = _ref.color;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-6 p-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-white text-center bg-\".concat(color)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, number)));\n};\n\n_c = NumberCard;\nNumberCard.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nNumberCard.defaultProps = {\n  text: \"\",\n  number: 0,\n  color: \"primary\"\n};\nvar Tweets = function Tweets(_ref2) {\n  _s2();\n\n  var _tweets = _ref2.tweets,\n      userEmail = _ref2.userEmail,\n      _positive = _ref2.positive,\n      _negative = _ref2.negative,\n      tracks = _ref2.tracks,\n      refreshLink = _ref2.refreshLink;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_tweets),\n      _useState2 = _slicedToArray(_useState, 2),\n      tweets = _useState2[0],\n      setTweets = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_positive),\n      _useState4 = _slicedToArray(_useState3, 2),\n      positive = _useState4[0],\n      setPositive = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_negative),\n      _useState6 = _slicedToArray(_useState5, 2),\n      negative = _useState6[0],\n      setNegative = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      loading = _useState8[0],\n      setLoading = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTweets(_tweets);\n  }, [_tweets]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setPositive(_positive);\n  }, [_positive]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setNegative(_negative);\n  }, [_negative]);\n\n  var btnRefreshClick = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(refreshLink === \"\")) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 2:\n              setLoading(true);\n              _context.prev = 3;\n              _context.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(refreshLink);\n\n            case 6:\n              res = _context.sent;\n              setTweets(res.data.tweets);\n              setPositive(res.data.positive);\n              setNegative(res.data.negative);\n              setLoading(false);\n              _context.next = 17;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](3);\n              // eslint-disable-next-line no-console\n              console.log(_context.t0);\n              setLoading(false);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 13]]);\n    }));\n\n    return function btnRefreshClick() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n    userEmail: userEmail\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-flex flex-column align-items-center h-100 pt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 bg-white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row mb-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NumberCard, {\n    text: \"Positivos\",\n    number: positive,\n    color: \"success\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NumberCard, {\n    text: \"Negativos\",\n    number: negative,\n    color: \"danger\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-flex justify-content-between\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"\\xFAltimos 20 tweets\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: btnRefreshClick,\n    type: \"button\",\n    className: \"btn btn-secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-redo\"\n  }))), !loading && tweets && tweets.map(function (tweet) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tweet__WEBPACK_IMPORTED_MODULE_4__[\"Tweet\"], {\n      text: tweet.text,\n      positive: tweet.positive,\n      time: tweet.time\n    });\n  }), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Carregando...\"))));\n};\n\n_s2(Tweets, \"2rHSXdX/WwVWC72/4lzmkrLu/ck=\");\n\n_c2 = Tweets;\nTweets.propTypes = {\n  tweets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any).isRequired,\n  tracks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),\n  userEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  positive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  negative: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  refreshLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nTweets.defaultProps = {\n  userEmail: \"\",\n  positive: 0,\n  negative: 0,\n  refreshLink: \"\",\n  tracks: []\n};\n\nvar _c, _c2;\n\n__webpack_require__.$Refresh$.register(_c, \"NumberCard\");\n__webpack_require__.$Refresh$.register(_c2, \"Tweets\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.i);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\")))\n\n//# sourceURL=webpack:///./front/screens/Tweets.js?");

/***/ })

})