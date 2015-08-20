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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _viewAppJs = __webpack_require__(3);
	
	var _viewAppJs2 = _interopRequireDefault(_viewAppJs);
	
	var Main = (function () {
	    function Main() {
	        _classCallCheck(this, Main);
	
	        _react2['default'].render(_react2['default'].createElement(_viewAppJs2['default'], null), document.getElementById("app"));
	    }
	
	    _createClass(Main, [{
	        key: 'registExample',
	        value: function registExample(example) {}
	    }]);
	
	    return Main;
	})();
	
	module.exports = Main;

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
	
	var _layoutHeaderJs = __webpack_require__(4);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(5);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(17);
	
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
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _incContentJs = __webpack_require__(7);
	
	var _incContentJs2 = _interopRequireDefault(_incContentJs);
	
	var _incSideBarJs = __webpack_require__(8);
	
	var _incSideBarJs2 = _interopRequireDefault(_incSideBarJs);
	
	var _coreExampleManagerJs = __webpack_require__(9);
	
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
/* 6 */
/***/ function(module, exports) {

	module.exports = window.ReactBootstrap;

/***/ },
/* 7 */
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
	
	var _reactBootstrap = __webpack_require__(6);
	
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
	
	var _reactBootstrap = __webpack_require__(6);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/10.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _alsc = __webpack_require__(10);
	
	var _superagent = __webpack_require__(13);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _utilsUtilsJs = __webpack_require__(16);
	
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
	        var _this = this;
	
	        _classCallCheck(this, ExampleManager);
	
	        this.dispatcher = new _alsc.EventDispatcher();
	        this.examplesData = {};
	        this.examplesDict = {}; //例子代码文件
	        this.currExample = null;
	        agent.get("dist/post_data.json").then(function (res) {
	            _this.examplesData = JSON.parse(res.text);
	
	            var need2Load = _this.examplesData.posts.length * 2;
	            if (need2Load <= 0) {
	                _this.finsishLoad();
	                return;
	            }
	
	            _this.examplesData.posts.forEach(function (post) {
	
	                //加载例子js实例
	                agent.get(_utilsUtilsJs.url.joint("dist/post", post.path, "/Entry.js")).then(function (res) {
	                    need2Load--;
	                    eval.apply(_this, ["var example =" + res.text]);
	                    post["script"] = example;
	                    if (need2Load <= 0) {
	                        _this.finsishLoad();
	                    }
	                });
	
	                //加载Markdown笔记
	                agent.get(_utilsUtilsJs.url.joint("src-post/", post.path, "Note.md")).then(function (res) {
	                    need2Load--;
	                    post["marddown"] = res.text;
	                    if (need2Load <= 0) {
	                        _this.finsishLoad();
	                    }
	                });
	            });
	        });
	    }
	
	    _createClass(ExampleManager, [{
	        key: "finsishLoad",
	        value: function finsishLoad() {
	            console.log(this.examplesData);
	        }
	    }, {
	        key: "registExample",
	        value: function registExample(example) {}
	    }, {
	        key: "toggleToExample",
	        value: function toggleToExample() {}
	    }]);
	
	    return ExampleManager;
	})();
	
	exports["default"] = ExampleManager.instance;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	
	exports.EventDispatcher = __webpack_require__(11);
	//exports.Ajax  = require("./dist/ajax/AjaxProxy.js")

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _utilsJs = __webpack_require__(12);
	
	//var eventsMap = typeof Symbol==="function"?Symbol():"__eventsMap__";
	
	var utils = _interopRequireWildcard(_utilsJs);
	
	var eventsMap = "__eventsMap__";
	
	var EventDispatcher = (function () {
	    function EventDispatcher() {
	        _classCallCheck(this, EventDispatcher);
	
	        this[eventsMap] = {};
	    }
	
	    /**
	     * 派发一个事件
	     * @param event
	     * @param args
	     */
	
	    _createClass(EventDispatcher, [{
	        key: "emit",
	        value: function emit(event) {
	            var eventmap = this[eventsMap][event];
	            if (Array.isArray(eventmap)) {
	                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    args[_key - 1] = arguments[_key];
	                }
	
	                utils.notifyArray(eventmap, args);
	            }
	        }
	
	        /**
	         * 返回所有回调方法
	         * @param event
	         * @returns {*}
	         */
	    }, {
	        key: "listeners",
	        value: function listeners(event) {
	            var result = this[eventsMap][event];
	            if (!result) {
	                result = [];
	                this[eventsMap][event] = result;
	            }
	            return result.map(function (bin) {
	                return bin.callback;
	            });
	        }
	    }, {
	        key: "hasListeners",
	        value: function hasListeners(event) {
	            if (!this[eventsMap][event]) {
	                return false;
	            }
	            return this[eventsMap][event].length > 0;
	        }
	
	        /**
	         * 添加一只侦听器
	         * @param event
	         * @param callback
	         * @param thisObject
	         * @param priority
	         */
	    }, {
	        key: "addListener",
	        value: function addListener(event, callback, thisObject, priority) {
	            utils.registNotify(this[eventsMap], event, callback, thisObject, null, priority);
	        }
	
	        /**
	         * 移除一只侦听器
	         * @param event
	         * @param callback
	         * @param thisObject
	         */
	    }, {
	        key: "removeListener",
	        value: function removeListener(event, callback, thisObject) {
	            utils.unregistNotify(this[eventsMap], event, callback, thisObject);
	        }
	
	        /**
	         * 移除所有侦听器
	         * @param event
	         */
	    }, {
	        key: "removeAllListener",
	        value: function removeAllListener(event) {
	            this[eventsMap][event] = [];
	        }
	
	        /**
	         * 当,简易触发器
	         * @param event
	         * @param callback
	         */
	    }, {
	        key: "on",
	        value: function on(event, callback) {
	            utils.registNotify(this[eventsMap], event, callback);
	        }
	
	        /**
	         * 当,唯一触发器
	         * @param event
	         * @param callback
	         */
	    }, {
	        key: "once",
	        value: function once(event, callback) {
	            utils.registNotify(this[eventsMap], event, callback, null, null, null, true);
	        }
	    }]);
	
	    return EventDispatcher;
	})();
	
	exports["default"] = EventDispatcher;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozt1QkFDVSxZQUFZOzs7O0lBQXZCLEtBQUs7O0FBR2pCLElBQUksU0FBUyxHQUFHLGVBQWUsQ0FBQzs7SUFDMUIsZUFBZTtBQUNOLGFBRFQsZUFBZSxHQUNIOzhCQURaLGVBQWU7O0FBRWIsWUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7Ozs7aUJBSEMsZUFBZTs7ZUFVYixjQUFDLEtBQUssRUFBVztBQUNqQixnQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGdCQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7a0RBRmxCLElBQUk7QUFBSix3QkFBSTs7O0FBR1gscUJBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3BDO1NBQ0o7Ozs7Ozs7OztlQU9RLG1CQUFDLEtBQUssRUFBRTtBQUNiLGdCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsZ0JBQUcsQ0FBQyxNQUFNLEVBQUM7QUFDUCxzQkFBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLG9CQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ25DO0FBQ0QsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQUcsRUFBQztBQUMzQix1QkFBTyxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztTQUNOOzs7ZUFFVyxzQkFBQyxLQUFLLEVBQUM7QUFDZixnQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQztBQUFDLHVCQUFPLEtBQUssQ0FBQzthQUFDO0FBQzFDLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1NBQzFDOzs7Ozs7Ozs7OztlQVNVLHFCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtBQUMvQyxpQkFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BGOzs7Ozs7Ozs7O2VBUWEsd0JBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDeEMsaUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdEU7Ozs7Ozs7O2VBTWdCLDJCQUFDLEtBQUssRUFBRTtBQUNyQixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMvQjs7Ozs7Ozs7O2VBT0MsWUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ2hCLGlCQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEQ7Ozs7Ozs7OztlQU9HLGNBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNsQixpQkFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRjs7O1dBbkZDLGVBQWU7OztxQkFzRk4sZUFBZSIsImZpbGUiOiJldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuXHJcbi8vdmFyIGV2ZW50c01hcCA9IHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCI/U3ltYm9sKCk6XCJfX2V2ZW50c01hcF9fXCI7XHJcbnZhciBldmVudHNNYXAgPSBcIl9fZXZlbnRzTWFwX19cIjtcclxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rS+5Y+R5LiA5Liq5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgZXZlbnRtYXAgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50bWFwKSkge1xyXG4gICAgICAgICAgICB1dGlscy5ub3RpZnlBcnJheShldmVudG1hcCwgYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57miYDmnInlm57osIPmlrnms5VcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGxpc3RlbmVycyhldmVudCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xyXG4gICAgICAgIGlmKCFyZXN1bHQpe1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24oYmluKXtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbi5jYWxsYmFjaztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNMaXN0ZW5lcnMoZXZlbnQpe1xyXG4gICAgICAgIGlmKCF0aGlzW2V2ZW50c01hcF1bZXZlbnRdKXtyZXR1cm4gZmFsc2U7fVxyXG4gICAgICAgIHJldHVybiB0aGlzW2V2ZW50c01hcF1bZXZlbnRdLmxlbmd0aD4wO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmlvcml0eVxyXG4gICAgICovXHJcbiAgICBhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBudWxsLCBwcmlvcml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTkuIDlj6rkvqblkKzlmahcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcclxuICAgICAgICB1dGlscy51bnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmiYDmnInkvqblkKzlmahcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICByZW1vdmVBbGxMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9kyznroDmmJPop6blj5HlmahcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZMs5ZSv5LiA6Kem5Y+R5ZmoXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGlzcGF0Y2hlcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/19.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.registNotify = registNotify;
	exports.unregistNotify = unregistNotify;
	exports.notify = notify;
	exports.notifyArray = notifyArray;
	
	function registNotify(notifymap, name, callback, thisObject, param, priority, once) {
	    //,reserve?:any
	    if (!notifymap[name]) notifymap[name] = [];
	    var arr = notifymap[name];
	
	    var length = arr.length;
	    var insertIndex = -1;
	    var bin;
	
	    if (priority === undefined) priority = 0;
	    for (var i = 0; i < length; i++) {
	        bin = arr[i];
	        if (bin && bin.callback === callback && bin.thisObject === thisObject) {
	            return false; //防止重复插入
	        }
	        if (bin && insertIndex == -1 && bin.priority < priority) {
	            insertIndex = i;
	        }
	    }
	
	    bin = { callback: callback, thisObject: thisObject, param: param ? param : [], priority: priority, once: once };
	    if (insertIndex != -1) {
	        arr.splice(insertIndex, 0, bin);
	    } else {
	        arr.push(bin);
	    }
	    notifymap[name] = arr;
	}
	
	function unregistNotify(notifymap, name, callback, thisObject) {
	    if (!notifymap[name]) return;
	    var arr = notifymap[name];
	    if (arr) {
	        notifymap[name] = arr.filter(function (bin) {
	            return !(bin.callback === callback && bin.thisObject === thisObject);
	        });
	    }
	}
	
	function notify(notifymap, name, param) {
	    var arr = notifymap[name];
	    if (arr) {
	        notifyArray(arr, param);
	        return true;
	    } else {
	        return false;
	    }
	}
	
	function notifyArray(arr, param) {
	    for (var i in arr) {
	        if (typeof +i === "number" && !isNaN(+i)) {
	            var bin = arr[i];
	            if (bin && bin.callback) {
	                if (!param) param = [];
	                if (bin.param) param = bin.param.concat(param);
	                bin.callback.apply(bin.thisObject, param);
	                if (bin.once) {
	                    arr.splice(i, 1);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=data:application/json;base64,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QUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFDcEMsZ0JBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixnQkFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtBQUNyQixvQkFBSSxDQUFDLEtBQUssRUFBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLG9CQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLG1CQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFDLG9CQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDVCx1QkFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0o7U0FDSjtLQUNKO0NBQ0oiLCJmaWxlIjoiZXZlbnRzL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCwgcGFyYW0sIHByaW9yaXR5LG9uY2UpIHsvLyxyZXNlcnZlPzphbnlcclxuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKW5vdGlmeW1hcFtuYW1lXSA9IFtdO1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xyXG4gICAgdmFyIGJpbjtcclxuXHJcbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZClwcmlvcml0eSA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYmluID0gYXJyW2ldO1xyXG4gICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7Ly/pmLLmraLph43lpI3mj5LlhaVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpbiAmJiBpbnNlcnRJbmRleCA9PSAtMSAmJiBiaW4ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbiA9IHtjYWxsYmFjazogY2FsbGJhY2ssIHRoaXNPYmplY3Q6IHRoaXNPYmplY3QsIHBhcmFtOiBwYXJhbSA/IHBhcmFtIDogW10sIHByaW9yaXR5OiBwcmlvcml0eSAsb25jZTpvbmNlfTtcclxuICAgIGlmIChpbnNlcnRJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcnIucHVzaChiaW4pO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xyXG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pcmV0dXJuO1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuICAgIGlmIChhcnIpIHtcclxuICAgICAgICBub3RpZnltYXBbbmFtZV0gPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKGJpbil7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuICAgIGlmIChhcnIpIHtcclxuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xyXG4gICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcclxuICAgICAgICBpZih0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSl7XHJcbiAgICAgICAgICAgIHZhciBiaW4gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtKXBhcmFtID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKXBhcmFtID0gYmluLnBhcmFtLmNvbmNhdChwYXJhbSk7XHJcbiAgICAgICAgICAgICAgICBiaW4uY2FsbGJhY2suYXBwbHkoYmluLnRoaXNPYmplY3QsIHBhcmFtKTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(14);
	var reduce = __webpack_require__(15);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root = 'undefined' == typeof window
	  ? (this || self)
	  : window;
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return obj === Object(obj);
	}
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Allow for extension
	 */
	
	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */
	
	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};
	
	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  xhr.open(this.method, this.url, true);
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }
	
	  return new Request(method, url);
	}
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.del = function(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * Expose `request`.
	 */
	
	module.exports = request;


/***/ },
/* 14 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/20.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var url = {
	    joint: function joint() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var joined = [].slice.call(arguments, 0).join('/');
	        return (function normalize(str) {
	            return str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/\#/g, '#').replace(/\:\//g, '://').replace(/\/\.\//g, '\/');
	        })(joined);
	    }
	};
	exports.url = url;

/***/ },
/* 17 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmU1OGVmMjNlNzk2OWZmYTY2NGYiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9tYWluLmVzNn4iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L0FwcC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0JvZHkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0Qm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2luYy9Db250ZW50LmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvRXhhbXBsZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL34vYWxzYy9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvZXZlbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9+L3JlZHVjZS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7a0NBS0ssQ0FBTzs7OztzQ0FDVCxDQUFlOzs7O0tBRXpCLElBQUk7QUFDSyxjQURULElBQUksR0FDTzsrQkFEWCxJQUFJOztBQUVGLDRCQUFNLE1BQU0sQ0FBQyw4REFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUN4RDs7a0JBSEMsSUFBSTs7Z0JBS08sdUJBQUMsT0FBTyxFQUFDLEVBRXJCOzs7WUFQQyxJQUFJOzs7QUFVVixPQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQzs7Ozs7O0FDbEJyQiwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NHa0IsQ0FBTzs7OzsyQ0FFTixDQUFvQjs7Ozt5Q0FDdEIsQ0FBa0I7Ozs7MkNBQ2hCLEVBQW9COzs7O0tBRWpDLEdBQUc7ZUFBSCxHQUFHOztBQUNNLGNBRFQsR0FBRyxHQUNROzs7K0JBRFgsR0FBRzs7QUFFRCxvQ0FGRixHQUFHLDZD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Q0wsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FDdkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztVQUNqQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO01BQ2Q7RUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDWmlCLENBQU87Ozs7S0FFbkIsTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ0Ysa0JBQUU7QUFDSixvQkFBTyxnREFBaUI7VUFDM0I7OztZQUhDLE1BQU07SUFBUyxtQkFBTSxTQUFTOztzQkFNckIsTUFBTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiZTU4ZWYyM2U3OTY5ZmZhNjY0ZlxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvNy8xNi5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXcvQXBwLmpzJztcblxuY2xhc3MgTWFpbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBSZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4gICAgfVxuXG4gICAgcmVnaXN0RXhhbXBsZShleGFtcGxlKXtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL21haW4uZXM2flxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9sYXlvdXQvSGVhZGVyLmpzJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9sYXlvdXQvQm9keS5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9sYXlvdXQvRm9vdGVyLmpzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNNb3VudCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHQtMTYgLy9kb2N1bWVudCBtYXJnaW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzTW91bnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNNb3VudCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLndpbmRvd1Jlc2l6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhcHAgPVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcHVsbC1jZW50ZXIgcGFwZXJcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvQXBwLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT50aXRsZTwvaDE+XHJcbiAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0hlYWRlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9pbmMvQ29udGVudC5qc1wiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vaW5jL1NpZGVCYXIuanNcIjtcclxuXHJcbmltcG9ydCBFeGFtcGxlTWFuYWdlciBmcm9tICcuLi8uLi9jb3JlL0V4YW1wbGVNYW5hZ2VyLmpzJ1xyXG5cclxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9Cb2R5LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3RCb290c3RyYXA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5SZWFjdEJvb3RzdHJhcFwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzguXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxDb2wgY2xhc3NOYW1lPVwiY29udGVudCBcIiBtZD17OH0+PC9Db2w+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL0NvbnRlbnQuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvOC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLElucHV0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic2lkZWJhclwiIG1kPXs0fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGtleSB3b3Jkcy4uLidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL1NpZGVCYXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTAuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5pbXBvcnQgKiBhcyBhZ2VudCBmcm9tIFwic3VwZXJhZ2VudFwiXHJcblxyXG5pbXBvcnQge3VybH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBFeGFtcGxlTWFuYWdlcntcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlO1xyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCEoRXhhbXBsZU1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgRXhhbXBsZU1hbmFnZXIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeGFtcGxlTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRXhhbXBsZU1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICAgICAgIHRoaXMuZXhhbXBsZXNEYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5leGFtcGxlc0RpY3QgPSB7fTsvL+S+i+WtkOS7o+eggeaWh+S7tlxyXG4gICAgICAgIHRoaXMuY3VyckV4YW1wbGUgPSBudWxsO1xyXG4gICAgICAgIGFnZW50LmdldChcImRpc3QvcG9zdF9kYXRhLmpzb25cIikudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzRGF0YSA9IEpTT04ucGFyc2UocmVzLnRleHQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5lZWQyTG9hZCA9IHRoaXMuZXhhbXBsZXNEYXRhLnBvc3RzLmxlbmd0aCoyO1xyXG4gICAgICAgICAgICBpZihuZWVkMkxvYWQ8PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5zaXNoTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzRGF0YS5wb3N0cy5mb3JFYWNoKChwb3N0KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295L6L5a2QanPlrp7kvotcclxuICAgICAgICAgICAgICAgIGFnZW50LmdldCh1cmwuam9pbnQoXCJkaXN0L3Bvc3RcIixwb3N0LnBhdGgsXCIvRW50cnkuanNcIikpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICBuZWVkMkxvYWQtLTtcclxuICAgICAgICAgICAgICAgICAgICBldmFsLmFwcGx5KHRoaXMsIFtcInZhciBleGFtcGxlID1cIityZXMudGV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RbXCJzY3JpcHRcIl09ZXhhbXBsZTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuZWVkMkxvYWQ8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbnNpc2hMb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liqDovb1NYXJrZG93bueslOiusFxyXG4gICAgICAgICAgICAgICAgYWdlbnQuZ2V0KHVybC5qb2ludChcInNyYy1wb3N0L1wiLHBvc3QucGF0aCxcIk5vdGUubWRcIikpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICBuZWVkMkxvYWQtLTtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0W1wibWFyZGRvd25cIl09cmVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmVlZDJMb2FkPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5zaXNoTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbnNpc2hMb2FkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5leGFtcGxlc0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdEV4YW1wbGUoZXhhbXBsZSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRvRXhhbXBsZSgpe1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZU1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvY29yZS9FeGFtcGxlTWFuYWdlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cclxuXHJcbmV4cG9ydHMuRXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZShcIi4vZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXCIpO1xyXG4vL2V4cG9ydHMuQWpheCAgPSByZXF1aXJlKFwiLi9kaXN0L2FqYXgvQWpheFByb3h5LmpzXCIpXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfdXRpbHNKcyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG4vL3ZhciBldmVudHNNYXAgPSB0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiP1N5bWJvbCgpOlwiX19ldmVudHNNYXBfX1wiO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHNKcyk7XG5cbnZhciBldmVudHNNYXAgPSBcIl9fZXZlbnRzTWFwX19cIjtcblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnREaXNwYXRjaGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnREaXNwYXRjaGVyKTtcblxuICAgICAgICB0aGlzW2V2ZW50c01hcF0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIOa0vuWPkeS4gOS4quS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXG5cbiAgICBfY3JlYXRlQ2xhc3MoRXZlbnREaXNwYXRjaGVyLCBbe1xuICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50bWFwID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50bWFwKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1dGlscy5ub3RpZnlBcnJheShldmVudG1hcCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDov5Tlm57miYDmnInlm57osIPmlrnms5VcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJsaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXNbZXZlbnRzTWFwXVtldmVudF07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbi5jYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiaGFzTGlzdGVuZXJzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpc1tldmVudHNNYXBdW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzW2V2ZW50c01hcF1bZXZlbnRdLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDkuIDlj6rkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICAgICAqIEBwYXJhbSBwcmlvcml0eVxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImFkZExpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIG51bGwsIHByaW9yaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+mZpOS4gOWPquS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB0aGlzT2JqZWN0XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVtb3ZlTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xuICAgICAgICAgICAgdXRpbHMudW5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56e76Zmk5omA5pyJ5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVtb3ZlQWxsTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzW2V2ZW50c01hcF1bZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZMs566A5piT6Kem5Y+R5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwib25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9kyzllK/kuIDop6blj5HlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJvbmNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50RGlzcGF0Y2hlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1WMlpXNTBjeTlGZG1WdWRFUnBjM0JoZEdOb1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlIwRXNXVUZCV1N4RFFVRkRPenM3T3pzN096czdPenQxUWtGRFZTeFpRVUZaT3pzN08wbEJRWFpDTEV0QlFVczdPMEZCUjJwQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEdWQlFXVXNRMEZCUXpzN1NVRkRNVUlzWlVGQlpUdEJRVU5PTEdGQlJGUXNaVUZCWlN4SFFVTklPemhDUVVSYUxHVkJRV1U3TzBGQlJXSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU40UWpzN096czdPenM3YVVKQlNFTXNaVUZCWlRzN1pVRlZZaXhqUVVGRExFdEJRVXNzUlVGQlZ6dEJRVU5xUWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JETEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdhMFJCUm14Q0xFbEJRVWs3UVVGQlNpeDNRa0ZCU1RzN08wRkJSMWdzY1VKQlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZCTzJGQlEzQkRPMU5CUTBvN096czdPenM3T3p0bFFVOVJMRzFDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5pTEdkQ1FVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRjRU1zWjBKQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVNN1FVRkRVQ3h6UWtGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmFMRzlDUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8yRkJRMjVETzBGQlEwUXNiVUpCUVU4c1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZUTEVkQlFVY3NSVUZCUXp0QlFVTXpRaXgxUWtGQlR5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRPMkZCUTNaQ0xFTkJRVU1zUTBGQlF6dFRRVU5PT3pzN1pVRkZWeXh6UWtGQlF5eExRVUZMTEVWQlFVTTdRVUZEWml4blFrRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJRenRCUVVGRExIVkNRVUZQTEV0QlFVc3NRMEZCUXp0aFFVRkRPMEZCUXpGRExHMUNRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpGRE96czdPenM3T3pzN096dGxRVk5WTEhGQ1FVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZGQlFWRXNSVUZCUlR0QlFVTXZReXhwUWtGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFOQlEzQkdPenM3T3pzN096czdPMlZCVVdFc2QwSkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVN1FVRkRlRU1zYVVKQlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VTBGRGRFVTdPenM3T3pzN08yVkJUV2RDTERKQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOeVFpeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTXZRanM3T3pzN096czdPMlZCVDBNc1dVRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZGTzBGQlEyaENMR2xDUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVMEZEZUVRN096czdPenM3T3p0bFFVOUhMR05CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU5zUWl4cFFrRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5vUmpzN08xZEJia1pETEdWQlFXVTdPenR4UWtGelJrNHNaVUZCWlNJc0ltWnBiR1VpT2lKbGRtVnVkSE12UlhabGJuUkVhWE53WVhSamFHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMelF1WEhKY2JpQXFMMXh5WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjY2x4dWFXMXdiM0owSUNvZ1lYTWdkWFJwYkhNZ1puSnZiU0JjSWk0dmRYUnBiSE11YW5OY0lqdGNjbHh1WEhKY2JpOHZkbUZ5SUdWMlpXNTBjMDFoY0NBOUlIUjVjR1Z2WmlCVGVXMWliMnc5UFQxY0ltWjFibU4wYVc5dVhDSS9VM2x0WW05c0tDazZYQ0pmWDJWMlpXNTBjMDFoY0Y5ZlhDSTdYSEpjYm5aaGNpQmxkbVZ1ZEhOTllYQWdQU0JjSWw5ZlpYWmxiblJ6VFdGd1gxOWNJanRjY2x4dVkyeGhjM01nUlhabGJuUkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhOYlpYWmxiblJ6VFdGd1hTQTlJSHQ5TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nNXJTKzVZK1I1TGlBNUxpcTVMcUw1THUyWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmhjbWR6WEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUdWdGFYUW9aWFpsYm5Rc0lDNHVMbUZ5WjNNcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1pYWmxiblJ0WVhBZ1BTQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHVjJaVzUwYldGd0tTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1dWIzUnBabmxCY25KaGVTaGxkbVZ1ZEcxaGNDd2dZWEpuY3lsY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG92NVRsbTU3bWlZRG1uSW5sbTU3b3NJUG1scm5tczVWY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZXlwOVhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHeHBjM1JsYm1WeWN5aGxkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpYTjFiSFFnUFNCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUtDRnlaWE4xYkhRcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCYlhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRsZG1WdWRITk5ZWEJkVzJWMlpXNTBYU0E5SUhKbGMzVnNkRHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEM1dFlYQW9ablZ1WTNScGIyNG9ZbWx1S1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0pwYmk1allXeHNZbUZqYXp0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCb1lYTk1hWE4wWlc1bGNuTW9aWFpsYm5RcGUxeHlYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRLWHR5WlhSMWNtNGdabUZzYzJVN2ZWeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTG14bGJtZDBhRDR3TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nNXJlNzVZcWc1TGlBNVkrcTVMNm01WkNzNVptb1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JqWVd4c1ltRmphMXh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSFJvYVhOUFltcGxZM1JjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0J3Y21sdmNtbDBlVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JoWkdSTWFYTjBaVzVsY2lobGRtVnVkQ3dnWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRc0lIQnlhVzl5YVhSNUtTQjdYSEpjYmlBZ0lDQWdJQ0FnZFhScGJITXVjbVZuYVhOMFRtOTBhV1o1S0hSb2FYTmJaWFpsYm5SelRXRndYU3dnWlhabGJuUXNJR05oYkd4aVlXTnJMQ0IwYUdselQySnFaV04wTENCdWRXeHNMQ0J3Y21sdmNtbDBlU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURucDd2cG1hVGt1SURsajZya3ZxYmxrS3psbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05oYkd4aVlXTnJYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdkR2hwYzA5aWFtVmpkRnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J5WlcxdmRtVk1hWE4wWlc1bGNpaGxkbVZ1ZEN3Z1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUXBJSHRjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTUxYm5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXl3Z2RHaHBjMDlpYW1WamRDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG5wN3ZwbWFUbWlZRG1uSW5rdnFibGtLemxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNpaGxkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhOYlpYWmxiblJ6VFdGd1hWdGxkbVZ1ZEYwZ1BTQmJYVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJT1c5a3l6bnJvRG1tSlBvcDZibGo1SGxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElHTmhiR3hpWVdOclhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHOXVLR1YyWlc1MExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhWMGFXeHpMbkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURsdlpNczVaU3Y1TGlBNktlbTVZK1I1Wm1vWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmpZV3hzWW1GamExeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnZibU5sS0dWMlpXNTBMQ0JqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXl3Z2JuVnNiQ3dnYm5Wc2JDd2diblZzYkN3Z2RISjFaU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVWMlpXNTBSR2x6Y0dGMFkyaGxjanNpWFN3aWMyOTFjbU5sVW05dmRDSTZJaTl6YjNWeVkyVXZJbjA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVnaXN0Tm90aWZ5ID0gcmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy51bnJlZ2lzdE5vdGlmeSA9IHVucmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy5ub3RpZnkgPSBub3RpZnk7XG5leHBvcnRzLm5vdGlmeUFycmF5ID0gbm90aWZ5QXJyYXk7XG5cbmZ1bmN0aW9uIHJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwYXJhbSwgcHJpb3JpdHksIG9uY2UpIHtcbiAgICAvLyxyZXNlcnZlPzphbnlcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgbm90aWZ5bWFwW25hbWVdID0gW107XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcblxuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xuICAgIHZhciBiaW47XG5cbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgcHJpb3JpdHkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmluID0gYXJyW2ldO1xuICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy/pmLLmraLph43lpI3mj5LlhaVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmluICYmIGluc2VydEluZGV4ID09IC0xICYmIGJpbi5wcmlvcml0eSA8IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW4gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGhpc09iamVjdDogdGhpc09iamVjdCwgcGFyYW06IHBhcmFtID8gcGFyYW0gOiBbXSwgcHJpb3JpdHk6IHByaW9yaXR5LCBvbmNlOiBvbmNlIH07XG4gICAgaWYgKGluc2VydEluZGV4ICE9IC0xKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2goYmluKTtcbiAgICB9XG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIHJldHVybjtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5bWFwW25hbWVdID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICByZXR1cm4gIShiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSkge1xuICAgICAgICAgICAgdmFyIGJpbiA9IGFycltpXTtcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkgcGFyYW0gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKSBwYXJhbSA9IGJpbi5wYXJhbS5jb25jYXQocGFyYW0pO1xuICAgICAgICAgICAgICAgIGJpbi5jYWxsYmFjay5hcHBseShiaW4udGhpc09iamVjdCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVYyWlc1MGN5OTFkR2xzY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenRCUVVsUExGTkJRVk1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkRMRWxCUVVrc1JVRkJSVHM3UVVGRGRFWXNVVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRekZETEZGQlFVa3NSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTVVJc1VVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTjRRaXhSUVVGSkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnlRaXhSUVVGSkxFZEJRVWNzUTBGQlF6czdRVUZGVWl4UlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6ZENMRmRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEWWl4WlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUlVGQlJUdEJRVU51UlN4dFFrRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdRVUZEUkN4WlFVRkpMRWRCUVVjc1NVRkJTU3hYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFVkJRVVU3UVVGRGNrUXNkVUpCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJrSTdTMEZEU2pzN1FVRkZSQ3hQUVVGSExFZEJRVWNzUlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRE8wRkJRemRITEZGQlFVa3NWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMjVDTEZkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnVReXhOUVVOSk8wRkJRMFFzVjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOcVFqdEJRVU5FTEdGQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03UTBGRGVrSTdPMEZCUlUwc1UwRkJVeXhqUVVGakxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wRkJRMnhGTEZGQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU1zVDBGQlR6dEJRVU0xUWl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHBRa0ZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVXl4SFFVRkhMRVZCUVVNN1FVRkRkRU1zYlVKQlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4TFFVRkxMRlZCUVZVc1EwRkJRU3hCUVVGRExFTkJRVUU3VTBGRGRrVXNRMEZCUXl4RFFVRkRPMHRCUTA0N1EwRkRTanM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJUdEJRVU16UXl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHRRa0ZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU40UWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObUxFMUJRVTA3UVVGRFNDeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RanREUVVOS096dEJRVVZOTEZOQlFWTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFppeFpRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNN1FVRkRjRU1zWjBKQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4blFrRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnlRaXh2UWtGQlNTeERRVUZETEV0QlFVc3NSVUZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEc5Q1FVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6bERMRzFDUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6RkRMRzlDUVVGSkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVTTdRVUZEVkN4MVFrRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JDTzJGQlEwbzdVMEZEU2p0TFFVTktPME5CUTBvaUxDSm1hV3hsSWpvaVpYWmxiblJ6TDNWMGFXeHpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMekU1TGx4eVhHNGdLaTljY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlaV2RwYzNST2IzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZEN3Z2NHRnlZVzBzSUhCeWFXOXlhWFI1TEc5dVkyVXBJSHN2THl4eVpYTmxjblpsUHpwaGJubGNjbHh1SUNBZ0lHbG1JQ2doYm05MGFXWjViV0Z3VzI1aGJXVmRLVzV2ZEdsbWVXMWhjRnR1WVcxbFhTQTlJRnRkTzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dVhISmNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdZWEp5TG14bGJtZDBhRHRjY2x4dUlDQWdJSFpoY2lCcGJuTmxjblJKYm1SbGVDQTlJQzB4TzF4eVhHNGdJQ0FnZG1GeUlHSnBianRjY2x4dVhISmNiaUFnSUNCcFppQW9jSEpwYjNKcGRIa2dQVDA5SUhWdVpHVm1hVzVsWkNsd2NtbHZjbWwwZVNBOUlEQTdYSEpjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdZbWx1SUQwZ1lYSnlXMmxkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05ySUQwOVBTQmpZV3hzWW1GamF5QW1KaUJpYVc0dWRHaHBjMDlpYW1WamRDQTlQVDBnZEdocGMwOWlhbVZqZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdMeS9wbUxMbXJhTHBoNDNscEkzbWo1TGxoYVZjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dKcGJpQW1KaUJwYm5ObGNuUkpibVJsZUNBOVBTQXRNU0FtSmlCaWFXNHVjSEpwYjNKcGRIa2dQQ0J3Y21sdmNtbDBlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5ObGNuUkpibVJsZUNBOUlHazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHSnBiaUE5SUh0allXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUTZJSFJvYVhOUFltcGxZM1FzSUhCaGNtRnRPaUJ3WVhKaGJTQS9JSEJoY21GdElEb2dXMTBzSUhCeWFXOXlhWFI1T2lCd2NtbHZjbWwwZVNBc2IyNWpaVHB2Ym1ObGZUdGNjbHh1SUNBZ0lHbG1JQ2hwYm5ObGNuUkpibVJsZUNBaFBTQXRNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHRnljaTV6Y0d4cFkyVW9hVzV6WlhKMFNXNWtaWGdzSURBc0lHSnBiaWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JoY25JdWNIVnphQ2hpYVc0cE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2JtOTBhV1o1YldGd1cyNWhiV1ZkSUQwZ1lYSnlPMXh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFc1eVpXZHBjM1JPYjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDRnViM1JwWm5sdFlYQmJibUZ0WlYwcGNtVjBkWEp1TzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dUlDQWdJR2xtSUNoaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCdWIzUnBabmx0WVhCYmJtRnRaVjBnUFNCaGNuSXVabWxzZEdWeUtHWjFibU4wYVc5dUtHSnBiaWw3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQWhLR0pwYmk1allXeHNZbUZqYXlBOVBUMGdZMkZzYkdKaFkyc2dKaVlnWW1sdUxuUm9hWE5QWW1wbFkzUWdQVDA5SUhSb2FYTlBZbXBsWTNRcFhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdWIzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1SUNBZ0lHbG1JQ2hoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0J1YjNScFpubEJjbkpoZVNoaGNuSXNJSEJoY21GdEtUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYm05MGFXWjVRWEp5WVhrb1lYSnlMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdabTl5SUNoMllYSWdhU0JwYmlCaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppaDBlWEJsYjJZZ0sya2dQVDA5SUZ3aWJuVnRZbVZ5WENJZ0ppWWdJV2x6VG1GT0tDdHBLU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaWFXNGdQU0JoY25KYmFWMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05yS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhCaGNtRnRLWEJoY21GdElEMGdXMTA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZbWx1TG5CaGNtRnRLWEJoY21GdElEMGdZbWx1TG5CaGNtRnRMbU52Ym1OaGRDaHdZWEpoYlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlhVzR1WTJGc2JHSmhZMnN1WVhCd2JIa29ZbWx1TG5Sb2FYTlBZbXBsWTNRc0lIQmhjbUZ0S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0dWIyNWpaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEp5TG5Od2JHbGpaU2hwTENBeEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0pkTENKemIzVnlZMlZTYjI5MElqb2lMM052ZFhKalpTOGlmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XG4gID8gKHRoaXMgfHwgc2VsZilcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgKHN0ci5sZW5ndGggfHwgc3RyIGluc3RhbmNlb2YgT2JqZWN0KVxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICAvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDA0Njk3Mi9tc2llLXJldHVybnMtc3RhdHVzLWNvZGUtb2YtMTIyMy1mb3ItYWpheC1yZXF1ZXN0XG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICBuZXdfZXJyLm9yaWdpbmFsID0gZXJyO1xuICAgIG5ld19lcnIucmVzcG9uc2UgPSByZXM7XG4gICAgbmV3X2Vyci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuXG4gICAgc2VsZi5jYWxsYmFjayhuZXdfZXJyLCByZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX3RpbWVvdXQgPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLmFib3J0ZWQpIHJldHVybjtcbiAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIuYWJvcnQoKTtcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3Mpe1xuICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICogcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKG5ldyBCbG9iKFsnPGEgaWQ9XCJhXCI+PGIgaWQ9XCJiXCI+aGV5ITwvYj48L2E+J10sIHsgdHlwZTogXCJ0ZXh0L2h0bWxcIn0pKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBxdWVyeXN0cmluZ1xuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG11bHRpcGxlIGRhdGEgXCJ3cml0ZXNcIlxuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuc2VuZCh7IHNlYXJjaDogJ3F1ZXJ5JyB9KVxuICogICAgICAgICAuc2VuZCh7IHJhbmdlOiAnMS4uNScgfSlcbiAqICAgICAgICAgLnNlbmQoeyBvcmRlcjogJ2Rlc2MnIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcblxuICAvLyBtZXJnZVxuICBpZiAob2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIW9iaiB8fCBpc0hvc3QoZGF0YSkpIHJldHVybiB0aGlzO1xuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IHJlcXVlc3QuZ2V0WEhSKCk7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZGF0YSA9IHRoaXMuX2Zvcm1EYXRhIHx8IHRoaXMuX2RhdGE7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gSW4gSUU5LCByZWFkcyB0byBhbnkgcHJvcGVydHkgKGUuZy4gc3RhdHVzKSBvZmYgb2YgYW4gYWJvcnRlZCBYSFIgd2lsbFxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZXJyb3IgXCJDb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbiBkdWUgdG8gZXJyb3IgYzAwYzAyM2ZcIlxuICAgIHZhciBzdGF0dXM7XG4gICAgdHJ5IHsgc3RhdHVzID0geGhyLnN0YXR1cyB9IGNhdGNoKGUpIHsgc3RhdHVzID0gMDsgfVxuXG4gICAgaWYgKDAgPT0gc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCkgcmV0dXJuIHNlbGYudGltZW91dEVycm9yKCk7XG4gICAgICBpZiAoc2VsZi5hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgfTtcbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgfVxuICB0cnkge1xuICAgIGlmICh4aHIudXBsb2FkICYmIHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge1xuICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAvLyBSZXBvcnRlZCBoZXJlOlxuICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcbiAgfVxuXG4gIC8vIHRpbWVvdXRcbiAgaWYgKHRpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLnRpbWVkb3V0ID0gdHJ1ZTtcbiAgICAgIHNlbGYuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIGlmIChxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QocXVlcnkpO1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICB2YXIgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdIDogJyddO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuICB4aHIuc2VuZChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZhdXggcHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG4gIHJldHVybiB0aGlzLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgIGVyciA/IHJlamVjdChlcnIpIDogZnVsZmlsbChyZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5kZWwgPSBmdW5jdGlvbih1cmwsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0RFTEVURScsIHVybCk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBBVENIIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yMC5cclxuICovXHJcbmV4cG9ydCB2YXIgdXJsID0ge1xyXG4gICAgam9pbnQ6ZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgIHZhciBqb2luZWQgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkuam9pbignLycpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gbm9ybWFsaXplIChzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFw/L2csICc/JylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCMvZywgJyMnKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcOlxcLy9nLCAnOi8vJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC5cXC8vZywgJ1xcLycpO1xyXG4gICAgICAgIH0pKGpvaW5lZCk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdXRpbHMvdXRpbHMuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxmb290ZXI+PC9mb290ZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==