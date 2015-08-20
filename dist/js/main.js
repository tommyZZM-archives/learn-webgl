var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by tommyZZM on 2015/7/16.
	 */
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _viewAppJs = __webpack_require__(3);
	
	var _viewAppJs2 = _interopRequireDefault(_viewAppJs);
	
	var Main = function Main() {
	    _classCallCheck(this, Main);
	
	    _react2['default'].render(_react2['default'].createElement(_viewAppJs2['default'], null), document.getElementById("app"));
	};
	
	exports['default'] = Main;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _alsc = __webpack_require__(4);
	
	var _layoutHeaderJs = __webpack_require__(5);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(6);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(11);
	
	var _layoutFooterJs2 = _interopRequireDefault(_layoutFooterJs);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        var _this = this;
	
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	
	        this.state = this.getState();
	
	        window.addEventListener('resize', function () {
	            if (_this.isMount) {
	                _this.onResize();
	            }
	        });
	    }
	
	    _createClass(App, [{
	        key: 'getState',
	        value: function getState() {
	            return {
	                style: {
	                    minHeight: window.innerHeight - 16 //document margin
	                }
	            };
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {
	            this.setState(this.getState());
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.isMount = true;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.isMount = false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            //this.state.windowResized = true;
	            var app = _react2['default'].createElement(
	                'div',
	                { className: 'row' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-md-10 pull-center paper', style: this.state.style },
	                    _react2['default'].createElement(_layoutHeaderJs2['default'], null),
	                    _react2['default'].createElement(_layoutBodyJs2['default'], null),
	                    _react2['default'].createElement(_layoutFooterJs2['default'], null)
	                )
	            );
	            return app;
	        }
	    }]);
	
	    return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	
	exports.EventDispatcher = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./dist/events/EventDispatcher.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'header',
	                null,
	                _react2['default'].createElement(
	                    'h1',
	                    null,
	                    'title'
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(7);
	
	var _incContentJs = __webpack_require__(8);
	
	var _incContentJs2 = _interopRequireDefault(_incContentJs);
	
	var _incSideBarJs = __webpack_require__(9);
	
	var _incSideBarJs2 = _interopRequireDefault(_incSideBarJs);
	
	var _coreExampleManagerJs = __webpack_require__(10);
	
	var _coreExampleManagerJs2 = _interopRequireDefault(_coreExampleManagerJs);
	
	var Body = (function (_React$Component) {
	    _inherits(Body, _React$Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'body' },
	                _react2['default'].createElement(_incContentJs2['default'], null),
	                _react2['default'].createElement(_incSideBarJs2['default'], null)
	            );
	        }
	    }]);
	
	    return Body;
	})(_react2['default'].Component);
	
	exports['default'] = Body;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = window.ReactBootstrap;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/8.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(7);
	
	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        _get(Object.getPrototypeOf(Content.prototype), "constructor", this).call(this);
	    }
	
	    _createClass(Content, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(_reactBootstrap.Col, { className: "content ", md: 8 });
	        }
	    }]);
	
	    return Content;
	})(_react2["default"].Component);
	
	exports["default"] = Content;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/8.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(7);
	
	var SideBar = (function (_React$Component) {
	    _inherits(SideBar, _React$Component);
	
	    function SideBar() {
	        _classCallCheck(this, SideBar);
	
	        _get(Object.getPrototypeOf(SideBar.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(SideBar, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                _reactBootstrap.Col,
	                { className: "sidebar", md: 4 },
	                _react2["default"].createElement(_reactBootstrap.Input, {
	                    type: "text",
	                    placeholder: "Enter key words...",
	                    label: "Search",
	                    hasFeedback: true
	                })
	            );
	        }
	    }]);
	
	    return SideBar;
	})(_react2["default"].Component);
	
	exports["default"] = SideBar;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/10.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _alsc = __webpack_require__(4);
	
	var ExampleManager = (function () {
	    _createClass(ExampleManager, null, [{
	        key: "instance",
	        get: function get() {
	            if (!(ExampleManager._instance instanceof ExampleManager)) {
	                return new ExampleManager();
	            }
	            return ExampleManager._instance;
	        }
	    }]);
	
	    function ExampleManager() {
	        _classCallCheck(this, ExampleManager);
	
	        this.listener = new _alsc.EventDispatcher();
	        this.loadexample();
	    }
	
	    //加载例子数据
	
	    _createClass(ExampleManager, [{
	        key: "loadexample",
	        value: function loadexample() {
	            _alsc.Ajax.get("dist/post_data.json").end(function (err, res) {
	                console.log(err, res);
	            });
	        }
	    }]);
	
	    return ExampleManager;
	})();
	
	exports["default"] = ExampleManager.instance;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _alsc = __webpack_require__(4);
	
	var Footer = (function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer() {
	        _classCallCheck(this, Footer);
	
	        _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('footer', null);
	        }
	    }]);
	
	    return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDU1NjZiMzExZjNjNzZiMzJmZWQiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9tYWluLmVzNn4iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZW50cnkuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9Cb2R5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdEJvb3RzdHJhcFwiIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9jb3JlL0V4YW1wbGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0FBQztNQUN0Qjs7OztrQkFiQyxjQUFjOztnQkFnQkwsdUJBQUU7QUFDVCxtQkFuQkEsSUFBSSxDQW1CQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FDMUIsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFDLEdBQUcsRUFBQztBQUNsQix3QkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO2NBQ3ZCLENBQUM7VUFDVDs7O1lBckJDLGNBQWM7OztzQkF3QkwsY0FBYyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQzNCcEIsQ0FBTzs7OztpQ0FDTyxDQUFNOztLQUVoQyxNQUFNO2VBQU4sTUFBTTs7Y0FBTixNQUFNOytCQUFOLE1BQU07O29DQUFOLE1BQU07OztrQkFBTixNQUFNOztnQkFDRixrQkFBRTtBQUNKLG9CQUFPLGdEQUFpQjtVQUMzQjs7O1lBSEMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQU1yQixNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA1NTY2YjMxMWYzYzc2YjMyZmVkXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS83LzE2LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlldy9BcHAuanMnO1xuXG5jbGFzcyBNYWlue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvbWFpbi5lczZ+XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICdhbHNjJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9sYXlvdXQvSGVhZGVyLmpzJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9sYXlvdXQvQm9keS5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9sYXlvdXQvRm9vdGVyLmpzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNNb3VudCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHQtMTYgLy9kb2N1bWVudCBtYXJnaW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzTW91bnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNNb3VudCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLndpbmRvd1Jlc2l6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhcHAgPVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcHVsbC1jZW50ZXIgcGFwZXJcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvQXBwLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5FdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+dGl0bGU8L2gxPlxyXG4gICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9IZWFkZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vaW5jL0NvbnRlbnQuanNcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2luYy9TaWRlQmFyLmpzXCI7XHJcblxyXG5pbXBvcnQgRXhhbXBsZU1hbmFnZXIgZnJvbSAnLi4vLi4vY29yZS9FeGFtcGxlTWFuYWdlci5qcydcclxuXHJcbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvQm9keS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Qm9vdHN0cmFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2x9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8Q29sIGNsYXNzTmFtZT1cImNvbnRlbnQgXCIgbWQ9ezh9PjwvQ29sPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2luYy9Db250ZW50LmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzguXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbCxJbnB1dH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInNpZGViYXJcIiBtZD17NH0+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBrZXkgd29yZHMuLi4nXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2luYy9TaWRlQmFyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzEwLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7QWpheCwgRXZlbnREaXNwYXRjaGVyfSBmcm9tICdhbHNjJztcclxuXHJcbmNsYXNzIEV4YW1wbGVNYW5hZ2Vye1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2U7XHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYoIShFeGFtcGxlTWFuYWdlci5faW5zdGFuY2UgaW5zdGFuY2VvZiBFeGFtcGxlTWFuYWdlcikpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4YW1wbGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBFeGFtcGxlTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICAgICAgIHRoaXMubG9hZGV4YW1wbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9veS+i+WtkOaVsOaNrlxyXG4gICAgbG9hZGV4YW1wbGUoKXtcclxuICAgICAgICBBamF4LmdldChcImRpc3QvcG9zdF9kYXRhLmpzb25cIilcclxuICAgICAgICAgICAgLmVuZChmdW5jdGlvbihlcnIscmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycixyZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVNYW5hZ2VyLmluc3RhbmNlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvRXhhbXBsZU1hbmFnZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ2Fsc2MnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8Zm9vdGVyPjwvZm9vdGVyPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0Zvb3Rlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=