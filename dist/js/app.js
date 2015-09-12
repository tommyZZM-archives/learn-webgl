//version:8d25fc

var app =
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _viewAppJs = __webpack_require__(3);
	
	var _viewAppJs2 = _interopRequireDefault(_viewAppJs);
	
	var _coreSampleManagerJs = __webpack_require__(37);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var _coreAnimationManagerJs = __webpack_require__(48);
	
	var _coreAnimationManagerJs2 = _interopRequireDefault(_coreAnimationManagerJs);
	
	var _viewContentSampleFieldJs = __webpack_require__(47);
	
	var _viewContentSampleFieldJs2 = _interopRequireDefault(_viewContentSampleFieldJs);
	
	var Main = function Main() {
	    _classCallCheck(this, Main);
	
	    _react2['default'].render(_react2['default'].createElement(_viewAppJs2['default'], null), document.getElementById("app")); //
	};
	
	var app;
	module.exports = {
	    launch: function launch() {
	        if (app instanceof Main) return;
	        app = new Main();
	    },
	    SampleField: _viewContentSampleFieldJs2['default'],
	    AnimationManager: _coreAnimationManagerJs2['default']
	};

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
	
	var _layoutHeaderJs = __webpack_require__(6);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(7);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(4);
	
	var _layoutFooterJs2 = _interopRequireDefault(_layoutFooterJs);
	
	var _coreSampleManagerJs = __webpack_require__(37);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        var _this = this;
	
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	
	        this.state = this.initializeState;
	        _coreSampleManagerJs2['default'].addListener(_coreSampleManagerJs2['default'].CONFIG_LOADED, this.onSampleConfigReady.bind(this));
	        _coreSampleManagerJs2['default'].addListener(_coreSampleManagerJs2['default'].PRE_READY_SAMPLE, this.onSamplePreReady.bind(this));
	
	        window.addEventListener('resize', function () {
	            if (_this.isMount) {
	                _this.onResize();
	            }
	        });
	    }
	
	    _createClass(App, [{
	        key: 'onResize',
	        //当前例子
	        value: function onResize() {
	            if (this.state.style.minHeight !== window.innerHeight - 16) {
	                this.setState({
	                    style: {
	                        minHeight: window.innerHeight - 16 //document margin
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'onSampleConfigReady',
	        value: function onSampleConfigReady() {
	            this.setState({
	                samplesData: _coreSampleManagerJs2['default'].samplesData
	            });
	        }
	    }, {
	        key: 'onSamplePreReady',
	        value: function onSamplePreReady(e) {
	            this.setState({
	                sampleCurr: e.sample
	            });
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
	                    'main',
	                    { className: 'col-md-10 page pull-center paper', style: this.state.style },
	                    _react2['default'].createElement(_layoutHeaderJs2['default'], null),
	                    _react2['default'].createElement(_layoutBodyJs2['default'], { sampleCurr: this.state.sampleCurr, samplesData: this.state.samplesData }),
	                    _react2['default'].createElement(_layoutFooterJs2['default'], null)
	                )
	            );
	            return app;
	        }
	    }, {
	        key: 'initializeState',
	        get: function get() {
	            return {
	                style: {
	                    minHeight: _utilsUtilsJs.config.minHeight //document margin
	                },
	                samplesData: null,
	                sampleCurr: null };
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
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var Footer = (function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer() {
	        _classCallCheck(this, Footer);
	
	        _get(Object.getPrototypeOf(Footer.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Footer, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "footer",
	                null,
	                _react2["default"].createElement(
	                    "p",
	                    null,
	                    "© 2015 ",
	                    _react2["default"].createElement(
	                        "a",
	                        { href: _utilsUtilsJs.config.url },
	                        "tommyzzm"
	                    )
	                ),
	                _react2["default"].createElement(
	                    "p",
	                    null,
	                    "Powered by ",
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "http://facebook.github.io/react/", target: "_blank" },
	                        "React"
	                    ),
	                    " and ",
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "https://github.com/twbs/bootstrap/", target: "_blank" },
	                        "BootStrap"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Footer;
	})(_react2["default"].Component);
	
	exports["default"] = Footer;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/20.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var url = {
	    join: function join() {
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
	var rex = {
	    htmlSingleTag: /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    html: /<|&#?\w+;/
	};
	
	exports.rex = rex;
	var constants = {
	    PI: Math.PI,
	    PI_2: Math.PI * 2,
	    RAD_TO_DEG: 180 / Math.PI,
	    DEG_TO_RAD: Math.PI / 180
	};
	
	exports.constants = constants;
	var config = Object.defineProperties({
	    url: "http://www.chalet581.xyz"
	}, {
	    minHeight: {
	        get: function get() {
	            return window.innerHeight - 16;
	        },
	        configurable: true,
	        enumerable: true
	    }
	});
	exports.config = config;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
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
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "header",
	                { id: "site-header" },
	                _react2["default"].createElement(
	                    "h1",
	                    { className: "page-title" },
	                    "WebGL test"
	                ),
	                _react2["default"].createElement(
	                    "nav",
	                    { className: "social-nav" },
	                    _react2["default"].createElement(
	                        "ul",
	                        null,
	                        _react2["default"].createElement(
	                            "li",
	                            null,
	                            _react2["default"].createElement(
	                                "a",
	                                { href: "https://github.com/tommyZZM/webGLPratice", title: "watch source on github" },
	                                _react2["default"].createElement("span", { className: "fa fa-github-alt" })
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            "li",
	                            null,
	                            _react2["default"].createElement(
	                                "a",
	                                { href: _utilsUtilsJs.config.url, title: "blog" },
	                                _react2["default"].createElement("span", { className: "fa fa-home" })
	                            )
	                        )
	                    )
	                ),
	                _react2["default"].createElement(
	                    "nav",
	                    { className: "site-nav" },
	                    _react2["default"].createElement(
	                        "ul",
	                        null,
	                        _react2["default"].createElement(
	                            "li",
	                            { className: "curr" },
	                            _react2["default"].createElement(
	                                "a",
	                                null,
	                                "栗子"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2["default"].Component);
	
	exports["default"] = Header;
	module.exports = exports["default"];

/***/ },
/* 7 */
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
	
	var _reactBootstrap = __webpack_require__(8);
	
	var _incContentJs = __webpack_require__(9);
	
	var _incContentJs2 = _interopRequireDefault(_incContentJs);
	
	var _incSideBarJs = __webpack_require__(49);
	
	var _incSideBarJs2 = _interopRequireDefault(_incSideBarJs);
	
	var Body = (function (_React$Component) {
	    _inherits(Body, _React$Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            return _react2['default'].createElement(
	                'div',
	                { id: 'site-main' },
	                _react2['default'].createElement(_incContentJs2['default'], { sampleContent: this.props.sampleCurr }),
	                _react2['default'].createElement(_incSideBarJs2['default'], { samplesList: (function () {
	                        if (_this.props.samplesData && Array.isArray(_this.props.samplesData.posts)) {
	                            return _this.props.samplesData.posts;
	                        } else {
	                            return [];
	                        }
	                    })() })
	            );
	        }
	    }]);
	
	    return Body;
	})(_react2['default'].Component);
	
	exports['default'] = Body;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = window.ReactBootstrap;

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
	
	var _reactBootstrap = __webpack_require__(8);
	
	var _color = __webpack_require__(32);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _contentSampleRendererJs = __webpack_require__(10);
	
	var _contentSampleRendererJs2 = _interopRequireDefault(_contentSampleRendererJs);
	
	var _coreSampleManagerJs = __webpack_require__(37);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        _get(Object.getPrototypeOf(Content.prototype), "constructor", this).call(this);
	        //SampleManager.addListener(SampleManager.PRE_READY_SAMPLE,this.onSamplePreReady.bind(this));
	    }
	
	    //onSamplePreReady() {
	    //
	    //}
	
	    _createClass(Content, [{
	        key: "render",
	        value: function render() {
	            var _this = this;
	
	            return _react2["default"].createElement(
	                _reactBootstrap.Col,
	                { className: "content ", md: 9, style: { minHeight: _utilsUtilsJs.config.minHeight - 138 - 91 } },
	                (function () {
	                    if (_this.props.sampleContent && _this.props.sampleContent.id) {
	                        return _react2["default"].createElement(Markdown, { id: _this.props.sampleContent.id, source: _this.props.sampleContent.markdown });
	                    }
	                })()
	            );
	        }
	    }]);
	
	    return Content;
	})(_react2["default"].Component);
	
	var Markdown = (function (_React$Component2) {
	    _inherits(Markdown, _React$Component2);
	
	    function Markdown() {
	        var _this2 = this;
	
	        _classCallCheck(this, Markdown);
	
	        _get(Object.getPrototypeOf(Markdown.prototype), "constructor", this).call(this);
	
	        this.markRenderer = new _contentSampleRendererJs2["default"]({ sourcepos: true });
	        this.isRenderSuccess = false;
	
	        this.canvasQuery = [];
	        this.canvasDict = {};
	
	        this.markRenderer.renderHtml("canvas", function (tag, attrs) {
	            return _react2["default"].createElement(Canvas, { parent: _this2, name: attrs.name || "", belongsto: _this2.props.id });
	        });
	    }
	
	    _createClass(Markdown, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.componentDidUpdate();
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            var dict = {};
	            for (var i in this.canvasDict) {
	                dict[i] = _react2["default"].findDOMNode(this.canvasDict[i]);
	            }
	
	            var data = {
	                canvas: {
	                    query: this.canvasQuery.map(function (canvas) {
	                        return _react2["default"].findDOMNode(canvas);
	                    }),
	                    dirct: dict
	                }
	            };
	            _coreSampleManagerJs2["default"].readySample(this.props.id, data);
	            this.canvasQuery = [];
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (typeof this.props.source === "string") {
	                var elements = this.markRenderer.render(this.props.source || '');
	
	                if (elements && !elements.some(function (ele) {
	                    return !_react2["default"].isValidElement(ele);
	                })) {
	                    this.isRenderSuccess = true;
	
	                    return _react2["default"].createElement.apply(_react2["default"], ["div", { className: "markdown" }].concat(elements));
	                }
	            }
	            return _react2["default"].createElement("div", { className: "noop" });
	        }
	    }]);
	
	    return Markdown;
	})(_react2["default"].Component);
	
	var Canvas = (function (_React$Component3) {
	    _inherits(Canvas, _React$Component3);
	
	    function Canvas() {
	        _classCallCheck(this, Canvas);
	
	        _get(Object.getPrototypeOf(Canvas.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Canvas, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.componentDidUpdate();
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            var parent = this.props.parent;
	            var canvas = _react2["default"].findDOMNode(this);
	            parent.canvasQuery.push(canvas);
	            //var gl=canvas.getContext("webgl");
	            //var background = canvas.style.backgroundColor||window.getComputedStyle(canvas).backgroundColor;
	            //background = color(background).rgb();
	            //gl.clearColor(background.r/255, background.g/255, background.b/255, 1.0);
	            //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	            if (this.props.name) parent.canvasDict[this.props.name] = canvas;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement("canvas", { key: this.props.belongsto + "_" + this.props.name, name: this.props.name, "data-belongsto": this.props.belongsto });
	        }
	    }]);
	
	    return Canvas;
	})(_react2["default"].Component);
	
	exports["default"] = Content;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/23.
	 */
	//渲染Sample
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _CommonMarkRenderJs = __webpack_require__(11);
	
	//import MarkedRenderer from "./markdown/MarkedRenderer.js";

	var _CommonMarkRenderJs2 = _interopRequireDefault(_CommonMarkRenderJs);

	exports["default"] = _CommonMarkRenderJs2["default"];
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/24.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _commonmark = __webpack_require__(12);
	
	var Commonmark = _interopRequireWildcard(_commonmark);
	
	var rex = {
	    htmlSingleTag: /^<(\w+)\s*(.*)\/?>(?:<\/\1>|)$/,
	    html: /<|&#?\w+;/,
	    htmlProps: /(\w+)=([^>]+)/i
	};
	
	var domIdentity;
	if (typeof document !== "undefined") {
	    domIdentity = document.createElement("div");
	} else {
	    console.error("document undefined!");
	}
	
	var markPraser = new Commonmark.Parser();
	
	var Renderer = (function () {
	    function Renderer(options) {
	        _classCallCheck(this, Renderer);
	
	        var opts = options || {};
	        this.sourcePos = opts.sourcePos;
	        this.softBreak = opts.softBreak || '\n';
	        this.escapeHtml = !!opts.escapeHtml;
	        this.skipHtml = !!opts.skipHtml;
	
	        this.howRenderHtml = {};
	    }
	
	    _createClass(Renderer, [{
	        key: 'renderHtml',
	        value: function renderHtml(tagName, fn) {
	            if (typeof fn !== "function") return;
	            this.howRenderHtml[tagName] = fn;
	        }
	    }, {
	        key: 'render',
	        value: function render(source) {
	            var block = markPraser.parse(source || '');
	
	            var self = MarkdownNodeElement;
	
	            var walker = block.walker();
	            var sourcePos = this.sourcePos;
	            var escapeHtml = this.escapeHtml;
	            var skipHtml = this.skipHtml;
	            var infoWords;
	            var softBreak = this.softBreak === 'br' ? _react2['default'].createElement('br') : this.softBreak;
	
	            var e, node, entering, leaving, attrs, doc;
	            while (e = walker.next()) {
	                entering = e.entering;
	                leaving = !entering;
	                node = e.node;
	                attrs = {};
	
	                if (!doc) {
	                    doc = node;
	                    node.react = { children: [] };
	                }
	
	                if (sourcePos && node.sourcepos) {
	                    var pos = node.sourcepos;
	                    attrs['data-sourcepos'] = [pos[0][0], ':', pos[0][1], '-', pos[1][0], ':', pos[1][1]].map(String).join('');
	                }
	
	                if (node.type === 'Paragraph' && self.isGrandParentOfList(node)) {
	                    continue;
	                }
	
	                if (leaving) {
	                    if (node.type === 'Image') {
	                        node.react.props.alt = node.react.children[0];
	                        node.react.children = [];
	                    }
	
	                    if (node !== doc) {
	                        self.addChild(node, self.createElement(node.react.tag, node.react.props, node.react.children));
	                    }
	
	                    continue;
	                }
	
	                // Entering a new node
	                switch (node.type) {
	                    case 'Html':
	                    case 'HtmlBlock':
	                        if (escapeHtml) {
	                            self.addChild(node, node.literal);
	                        } else if (!skipHtml) {
	
	                            var htmlprase = rex.htmlSingleTag.exec(node.literal);
	                            if (Array.isArray(htmlprase) && htmlprase[1]) {
	
	                                var htmltag = htmlprase[1];
	                                var htmlele;
	
	                                domIdentity.innerHTML = node.literal;
	                                var htmlattributes = domIdentity.childNodes[0].attributes;
	                                for (var i = 0; i < htmlattributes.length; i++) {
	                                    var a = htmlattributes[i];
	                                    var name = a.name;
	                                    if (name) {
	                                        if (name.toLowerCase() === "classname") {
	                                            name = "className";
	                                        }
	                                        attrs[name] = a.nodeValue.length > 0 ? a.nodeValue : true;
	                                    }
	                                }
	
	                                if (typeof this.howRenderHtml[htmltag] === "function") {
	                                    htmlele = this.howRenderHtml[htmltag](htmltag, attrs);
	                                } else {
	                                    if (attrs["style"]) {
	                                        attrs["style"] = {};
	                                        var i = 0;
	                                        var style = domIdentity.childNodes[0].style[i];
	                                        while (style) {
	                                            attrs["style"][style] = domIdentity.childNodes[0].style[style];
	                                            i++;
	                                            style = domIdentity.childNodes[0].style[i];
	                                        }
	                                    }
	
	                                    htmlele = self.createElement("p", { dangerouslySetInnerHTML: { __html: node.literal } });
	                                }
	
	                                if (htmlele.__proto__ && htmlele.__proto__._isReactElement) {
	                                    self.addChild(node, htmlele);
	                                } else {
	                                    self.addChild(node, _react2['default'].createElement(
	                                        'p',
	                                        { className: 'text-danger' },
	                                        '...',
	                                        htmlprase[0],
	                                        ' prase fail...'
	                                    ));
	                                }
	                            }
	                        }
	                        break;
	                    case 'Text':
	                        self.addChild(node, node.literal);
	                        break;
	                    case 'Paragraph':
	                        self.tag(node, 'p', attrs);
	                        break;
	                    case 'Header':
	                        self.tag(node, 'h' + node.level, attrs);
	                        break;
	                    case 'Softbreak':
	                        self.addChild(node, softBreak);
	                        break;
	                    case 'Strong':
	                        self.tag(node, 'strong', attrs);
	                        break;
	                    case 'Link':
	                        attrs.href = node.destination;
	                        attrs.target = "_blank";
	                        if (node.title) {
	                            attrs.title = node.title;
	                        }
	                        self.tag(node, 'a', attrs);
	                        break;
	                    case 'Image':
	                        attrs.src = node.destination;
	                        if (node.title) {
	                            attrs.title = node.title;
	                        }
	                        self.tag(node, 'img', attrs);
	                        break;
	                    case 'Emph':
	                        self.tag(node, 'em', attrs);
	                        break;
	                    case 'Code':
	                        self.addChild(node, self.createElement('code', attrs, [node.literal]));
	                        break;
	                    case 'CodeBlock':
	                        infoWords = node.info ? node.info.split(/ +/) : [];
	
	                        //TODO:highlight
	
	                        var codeWrapper = document.createElement("pre");
	                        var code = document.createElement("code");
	                        code.setAttribute("class", infoWords[0] || "");
	                        codeWrapper.appendChild(code);
	
	                        if (typeof hljs !== "undefined") {
	                            //console.log(hljs.highlightAuto(node.literal,[infoWords[0]]))
	                            code.innerHTML = hljs.highlightAuto(node.literal, [infoWords[0]]).value;
	                        }
	
	                        //var code = self.createElement('code', attrs, [node.literal]);
	                        self.addChild(node, self.createElement('pre', { dangerouslySetInnerHTML: { __html: codeWrapper.innerHTML } }));
	                        break;
	                    case 'BlockQuote':
	                        self.tag(node, 'blockquote', attrs);
	                        break;
	                    case 'List':
	                        var start = node.listStart;
	                        if (start !== null && start !== 1) {
	                            attrs.start = start.toString();
	                        }
	                        self.tag(node, node.listType === 'Bullet' ? 'ul' : 'ol', attrs);
	                        break;
	                    case 'Item':
	                        self.tag(node, 'li', attrs);
	                        break;
	                    case 'HorizontalRule':
	                        self.addChild(node, self.createElement('hr', attrs));
	                        break;
	                    case 'Document':
	                        break;
	                    default:
	                        throw new Error('Unknown node type "' + node.type + '"');
	                }
	            }
	
	            return doc.react.children;
	        }
	    }]);
	
	    return Renderer;
	})();
	
	var MarkdownNodeElement = (function () {
	    function MarkdownNodeElement() {
	        _classCallCheck(this, MarkdownNodeElement);
	    }
	
	    _createClass(MarkdownNodeElement, null, [{
	        key: 'tag',
	        value: function tag(node, name, attrs, children) {
	            node.react = {
	                tag: name,
	                props: attrs,
	                children: children || []
	            };
	        }
	    }, {
	        key: 'isGrandParentOfList',
	        value: function isGrandParentOfList(node) {
	            if (!node || !node.parent) {
	                return false;
	            }
	            var grandparent = node.parent.parent;
	            return grandparent && grandparent.type === 'List' && grandparent.listTight;
	        }
	    }, {
	        key: 'addChild',
	        value: function addChild(node, child) {
	            var parent = node;
	            do {
	                parent = parent.parent;
	            } while (!parent.react);
	
	            parent.react.children.push(child);
	        }
	
	        /**
	         *
	         * @param tagName
	         * @param props
	         * @param children
	         * @returns {DOMElement<Array<any>|any[]>|ClassicElement<Array<any>|any[]>|ReactElement<Array<any>|any[]>}
	         */
	    }, {
	        key: 'createElement',
	        value: function createElement(tagName, props, children) {
	            var args = [tagName, props].concat(children);
	            var child = _react2['default'].createElement.apply(_react2['default'], args);
	            return child;
	        }
	    }]);
	
	    return MarkdownNodeElement;
	})();
	
	exports['default'] = Renderer;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// commonmark.js - CommomMark in JavaScript
	// Copyright (C) 2014 John MacFarlane
	// License: BSD3.
	
	// Basic usage:
	//
	// var commonmark = require('commonmark');
	// var parser = new commonmark.Parser();
	// var renderer = new commonmark.HtmlRenderer();
	// console.log(renderer.render(parser.parse('Hello *world*')));
	
	module.exports.Node = __webpack_require__(13);
	module.exports.Parser = __webpack_require__(14);
	module.exports.HtmlRenderer = __webpack_require__(30);
	module.exports.XmlRenderer = __webpack_require__(31);


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	function isContainer(node) {
	    switch (node._type) {
	    case 'Document':
	    case 'BlockQuote':
	    case 'List':
	    case 'Item':
	    case 'Paragraph':
	    case 'Header':
	    case 'Emph':
	    case 'Strong':
	    case 'Link':
	    case 'Image':
	        return true;
	    default:
	        return false;
	    }
	}
	
	var resumeAt = function(node, entering) {
	    this.current = node;
	    this.entering = (entering === true);
	};
	
	var next = function(){
	    var cur = this.current;
	    var entering = this.entering;
	
	    if (cur === null) {
	        return null;
	    }
	
	    var container = isContainer(cur);
	
	    if (entering && container) {
	        if (cur._firstChild) {
	            this.current = cur._firstChild;
	            this.entering = true;
	        } else {
	            // stay on node but exit
	            this.entering = false;
	        }
	
	    } else if (cur === this.root) {
	        this.current = null;
	
	    } else if (cur._next === null) {
	        this.current = cur._parent;
	        this.entering = false;
	
	    } else {
	        this.current = cur._next;
	        this.entering = true;
	    }
	
	    return {entering: entering, node: cur};
	};
	
	var NodeWalker = function(root) {
	    return { current: root,
	             root: root,
	             entering: true,
	             next: next,
	             resumeAt: resumeAt };
	};
	
	var Node = function(nodeType, sourcepos) {
	    this._type = nodeType;
	    this._parent = null;
	    this._firstChild = null;
	    this._lastChild = null;
	    this._prev = null;
	    this._next = null;
	    this._sourcepos = sourcepos;
	    this._lastLineBlank = false;
	    this._open = true;
	    this._string_content = null;
	    this._literal = null;
	    this._listData = null;
	    this._info = null;
	    this._destination = null;
	    this._title = null;
	    this._isFenced = false;
	    this._fenceChar = null;
	    this._fenceLength = 0;
	    this._fenceOffset = null;
	    this._level = null;
	};
	
	var proto = Node.prototype;
	
	Object.defineProperty(proto, 'isContainer', {
	    get: function () { return isContainer(this); }
	});
	
	Object.defineProperty(proto, 'type', {
	    get: function() { return this._type; }
	});
	
	Object.defineProperty(proto, 'firstChild', {
	    get: function() { return this._firstChild; }
	});
	
	Object.defineProperty(proto, 'lastChild', {
	    get: function() { return this._lastChild; }
	});
	
	Object.defineProperty(proto, 'next', {
	    get: function() { return this._next; }
	});
	
	Object.defineProperty(proto, 'prev', {
	    get: function() { return this._prev; }
	});
	
	Object.defineProperty(proto, 'parent', {
	    get: function() { return this._parent; }
	});
	
	Object.defineProperty(proto, 'sourcepos', {
	    get: function() { return this._sourcepos; }
	});
	
	Object.defineProperty(proto, 'literal', {
	    get: function() { return this._literal; },
	    set: function(s) { this._literal = s; }
	});
	
	Object.defineProperty(proto, 'destination', {
	    get: function() { return this._destination; },
	    set: function(s) { this._destination = s; }
	});
	
	Object.defineProperty(proto, 'title', {
	    get: function() { return this._title; },
	    set: function(s) { this._title = s; }
	});
	
	Object.defineProperty(proto, 'info', {
	    get: function() { return this._info; },
	    set: function(s) { this._info = s; }
	});
	
	Object.defineProperty(proto, 'level', {
	    get: function() { return this._level; },
	    set: function(s) { this._level = s; }
	});
	
	Object.defineProperty(proto, 'listType', {
	    get: function() { return this._listData.type; },
	    set: function(t) { this._listData.type = t; }
	});
	
	Object.defineProperty(proto, 'listTight', {
	    get: function() { return this._listData.tight; },
	    set: function(t) { this._listData.tight = t; }
	});
	
	Object.defineProperty(proto, 'listStart', {
	    get: function() { return this._listData.start; },
	    set: function(n) { this._listData.start = n; }
	});
	
	Object.defineProperty(proto, 'listDelimiter', {
	    get: function() { return this._listData.delimiter; },
	    set: function(delim) { this._listData.delimiter = delim; }
	});
	
	Node.prototype.appendChild = function(child) {
	    child.unlink();
	    child._parent = this;
	    if (this._lastChild) {
	        this._lastChild._next = child;
	        child._prev = this._lastChild;
	        this._lastChild = child;
	    } else {
	        this._firstChild = child;
	        this._lastChild = child;
	    }
	};
	
	Node.prototype.prependChild = function(child) {
	    child.unlink();
	    child._parent = this;
	    if (this._firstChild) {
	        this._firstChild._prev = child;
	        child._next = this._firstChild;
	        this._firstChild = child;
	    } else {
	        this._firstChild = child;
	        this._lastChild = child;
	    }
	};
	
	Node.prototype.unlink = function() {
	    if (this._prev) {
	        this._prev._next = this._next;
	    } else if (this._parent) {
	        this._parent._firstChild = this._next;
	    }
	    if (this._next) {
	        this._next._prev = this._prev;
	    } else if (this._parent) {
	        this._parent._lastChild = this._prev;
	    }
	    this._parent = null;
	    this._next = null;
	    this._prev = null;
	};
	
	Node.prototype.insertAfter = function(sibling) {
	    sibling.unlink();
	    sibling._next = this._next;
	    if (sibling._next) {
	        sibling._next._prev = sibling;
	    }
	    sibling._prev = this;
	    this._next = sibling;
	    sibling._parent = this._parent;
	    if (!sibling._next) {
	        sibling._parent._lastChild = sibling;
	    }
	};
	
	Node.prototype.insertBefore = function(sibling) {
	    sibling.unlink();
	    sibling._prev = this._prev;
	    if (sibling._prev) {
	        sibling._prev._next = sibling;
	    }
	    sibling._next = this;
	    this._prev = sibling;
	    sibling._parent = this._parent;
	    if (!sibling._prev) {
	        sibling._parent._firstChild = sibling;
	    }
	};
	
	Node.prototype.walker = function() {
	    var walker = new NodeWalker(this);
	    return walker;
	};
	
	module.exports = Node;
	
	
	/* Example of use of walker:
	
	 var walker = w.walker();
	 var event;
	
	 while (event = walker.next()) {
	 console.log(event.entering, event.node.type);
	 }
	
	 */


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Node = __webpack_require__(13);
	var unescapeString = __webpack_require__(15).unescapeString;
	var OPENTAG = __webpack_require__(15).OPENTAG;
	var CLOSETAG = __webpack_require__(15).CLOSETAG;
	
	var CODE_INDENT = 4;
	
	var C_NEWLINE = 10;
	var C_GREATERTHAN = 62;
	var C_LESSTHAN = 60;
	var C_SPACE = 32;
	var C_OPEN_BRACKET = 91;
	
	var InlineParser = __webpack_require__(26);
	
	var reHtmlBlockOpen = [
	   /./, // dummy for 0
	   /^<(?:script|pre|style)(?:\s|>|$)/i,
	   /^<!--/,
	   /^<[?]/,
	   /^<![A-Z]/,
	   /^<!\[CDATA\[/,
	   /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|head|header|hr|html|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|pre|section|source|title|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
	    new RegExp('^(?:' + OPENTAG + '|' + CLOSETAG + ')\s*$', 'i')
	];
	
	var reHtmlBlockClose = [
	   /./, // dummy for 0
	   /<\/(?:script|pre|style)>/i,
	   /-->/,
	   /\?>/,
	   />/,
	   /\]\]>/
	];
	
	var reHrule = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/;
	
	var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;
	
	var reNonSpace = /[^ \t\f\v\r\n]/;
	
	var reBulletListMarker = /^[*+-]( +|$)/;
	
	var reOrderedListMarker = /^(\d{1,9})([.)])( +|$)/;
	
	var reATXHeaderMarker = /^#{1,6}(?: +|$)/;
	
	var reCodeFence = /^`{3,}(?!.*`)|^~{3,}(?!.*~)/;
	
	var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;
	
	var reSetextHeaderLine = /^(?:=+|-+) *$/;
	
	var reLineEnding = /\r\n|\n|\r/;
	
	// Returns true if string contains only space characters.
	var isBlank = function(s) {
	    return !(reNonSpace.test(s));
	};
	
	var peek = function(ln, pos) {
	    if (pos < ln.length) {
	        return ln.charCodeAt(pos);
	    } else {
	        return -1;
	    }
	};
	
	// DOC PARSER
	
	// These are methods of a Parser object, defined below.
	
	// Returns true if block ends with a blank line, descending if needed
	// into lists and sublists.
	var endsWithBlankLine = function(block) {
	    while (block) {
	        if (block._lastLineBlank) {
	            return true;
	        }
	        var t = block.type;
	        if (t === 'List' || t === 'Item') {
	            block = block._lastChild;
	        } else {
	            break;
	        }
	    }
	    return false;
	};
	
	// Break out of all containing lists, resetting the tip of the
	// document to the parent of the highest list, and finalizing
	// all the lists.  (This is used to implement the "two blank lines
	// break of of all lists" feature.)
	var breakOutOfLists = function(block) {
	    var b = block;
	    var last_list = null;
	    do {
	        if (b.type === 'List') {
	            last_list = b;
	        }
	        b = b._parent;
	    } while (b);
	
	    if (last_list) {
	        while (block !== last_list) {
	            this.finalize(block, this.lineNumber);
	            block = block._parent;
	        }
	        this.finalize(last_list, this.lineNumber);
	        this.tip = last_list._parent;
	    }
	};
	
	// Add a line to the block at the tip.  We assume the tip
	// can accept lines -- that check should be done before calling this.
	var addLine = function() {
	    this.tip._string_content += this.currentLine.slice(this.offset) + '\n';
	};
	
	// Add block of type tag as a child of the tip.  If the tip can't
	// accept children, close and finalize it and try its parent,
	// and so on til we find a block that can accept children.
	var addChild = function(tag, offset) {
	    while (!this.blocks[this.tip.type].canContain(tag)) {
	        this.finalize(this.tip, this.lineNumber - 1);
	    }
	
	    var column_number = offset + 1; // offset 0 = column 1
	    var newBlock = new Node(tag, [[this.lineNumber, column_number], [0, 0]]);
	    newBlock._string_content = '';
	    this.tip.appendChild(newBlock);
	    this.tip = newBlock;
	    return newBlock;
	};
	
	// Parse a list marker and return data on the marker (type,
	// start, delimiter, bullet character, padding) or null.
	var parseListMarker = function(ln, offset, indent) {
	    var rest = ln.slice(offset);
	    var match;
	    var spaces_after_marker;
	    var data = { type: null,
	                 tight: true,  // lists are tight by default
	                 bulletChar: null,
	                 start: null,
	                 delimiter: null,
	                 padding: null,
	                 markerOffset: indent };
	    if ((match = rest.match(reBulletListMarker))) {
	        spaces_after_marker = match[1].length;
	        data.type = 'Bullet';
	        data.bulletChar = match[0][0];
	
	    } else if ((match = rest.match(reOrderedListMarker))) {
	        spaces_after_marker = match[3].length;
	        data.type = 'Ordered';
	        data.start = parseInt(match[1]);
	        data.delimiter = match[2];
	    } else {
	        return null;
	    }
	    var blank_item = match[0].length === rest.length;
	    if (spaces_after_marker >= 5 ||
	        spaces_after_marker < 1 ||
	        blank_item) {
	        data.padding = match[0].length - spaces_after_marker + 1;
	    } else {
	        data.padding = match[0].length;
	    }
	    return data;
	};
	
	// Returns true if the two list items are of the same type,
	// with the same delimiter and bullet character.  This is used
	// in agglomerating list items into lists.
	var listsMatch = function(list_data, item_data) {
	    return (list_data.type === item_data.type &&
	            list_data.delimiter === item_data.delimiter &&
	            list_data.bulletChar === item_data.bulletChar);
	};
	
	// Finalize and close any unmatched blocks. Returns true.
	var closeUnmatchedBlocks = function() {
	    if (!this.allClosed) {
	        // finalize any blocks not matched
	        while (this.oldtip !== this.lastMatchedContainer) {
	            var parent = this.oldtip._parent;
	            this.finalize(this.oldtip, this.lineNumber - 1);
	            this.oldtip = parent;
	        }
	        this.allClosed = true;
	    }
	};
	
	// 'finalize' is run when the block is closed.
	// 'continue' is run to check whether the block is continuing
	// at a certain line and offset (e.g. whether a block quote
	// contains a `>`.  It returns 0 for matched, 1 for not matched,
	// and 2 for "we've dealt with this line completely, go to next."
	var blocks = {
	    Document: {
	        continue: function() { return 0; },
	        finalize: function() { return; },
	        canContain: function(t) { return (t !== 'Item'); },
	        acceptsLines: false
	    },
	    List: {
	        continue: function() { return 0; },
	        finalize: function(parser, block) {
	            var item = block._firstChild;
	            while (item) {
	                // check for non-final list item ending with blank line:
	                if (endsWithBlankLine(item) && item._next) {
	                    block._listData.tight = false;
	                    break;
	                }
	                // recurse into children of list item, to see if there are
	                // spaces between any of them:
	                var subitem = item._firstChild;
	                while (subitem) {
	                    if (endsWithBlankLine(subitem) &&
	                        (item._next || subitem._next)) {
	                        block._listData.tight = false;
	                        break;
	                    }
	                    subitem = subitem._next;
	                }
	                item = item._next;
	            }
	        },
	        canContain: function(t) { return (t === 'Item'); },
	        acceptsLines: false
	    },
	    BlockQuote: {
	        continue: function(parser) {
	            var ln = parser.currentLine;
	            if (!parser.indented &&
	                peek(ln, parser.nextNonspace) === C_GREATERTHAN) {
	                parser.advanceNextNonspace();
	                parser.advanceOffset(1, false);
	                if (peek(ln, parser.offset) === C_SPACE) {
	                    parser.offset++;
	                }
	            } else {
	                return 1;
	            }
	            return 0;
	        },
	        finalize: function() { return; },
	        canContain: function(t) { return (t !== 'Item'); },
	        acceptsLines: false
	    },
	    Item: {
	        continue: function(parser, container) {
	            if (parser.blank) {
	                parser.advanceNextNonspace();
	            } else if (parser.indent >=
	                       container._listData.markerOffset +
	                       container._listData.padding) {
	                parser.advanceOffset(container._listData.markerOffset +
	                    container._listData.padding, true);
	            } else {
	                return 1;
	            }
	            return 0;
	        },
	        finalize: function() { return; },
	        canContain: function(t) { return (t !== 'Item'); },
	        acceptsLines: false
	    },
	    Header: {
	        continue: function() {
	            // a header can never container > 1 line, so fail to match:
	            return 1;
	        },
	        finalize: function() { return; },
	        canContain: function() { return false; },
	        acceptsLines: false
	    },
	    HorizontalRule: {
	        continue: function() {
	            // an hrule can never container > 1 line, so fail to match:
	            return 1;
	        },
	        finalize: function() { return; },
	        canContain: function() { return false; },
	        acceptsLines: false
	    },
	    CodeBlock: {
	        continue: function(parser, container) {
	            var ln = parser.currentLine;
	            var indent = parser.indent;
	            if (container._isFenced) { // fenced
	                var match = (indent <= 3 &&
	                    ln.charAt(parser.nextNonspace) === container._fenceChar &&
	                    ln.slice(parser.nextNonspace).match(reClosingCodeFence));
	                if (match && match[0].length >= container._fenceLength) {
	                    // closing fence - we're at end of line, so we can return
	                    parser.finalize(container, parser.lineNumber);
	                    return 2;
	                } else {
	                    // skip optional spaces of fence offset
	                    var i = container._fenceOffset;
	                    while (i > 0 && peek(ln, parser.offset) === C_SPACE) {
	                        parser.advanceOffset(1, false);
	                        i--;
	                    }
	                }
	            } else { // indented
	                if (indent >= CODE_INDENT) {
	                    parser.advanceOffset(CODE_INDENT, true);
	                } else if (parser.blank) {
	                    parser.advanceNextNonspace();
	                } else {
	                    return 1;
	                }
	            }
	            return 0;
	        },
	        finalize: function(parser, block) {
	            if (block._isFenced) { // fenced
	                // first line becomes info string
	                var content = block._string_content;
	                var newlinePos = content.indexOf('\n');
	                var firstLine = content.slice(0, newlinePos);
	                var rest = content.slice(newlinePos + 1);
	                block.info = unescapeString(firstLine.trim());
	                block._literal = rest;
	            } else { // indented
	                block._literal = block._string_content.replace(/(\n *)+$/, '\n');
	            }
	            block._string_content = null; // allow GC
	        },
	        canContain: function() { return false; },
	        acceptsLines: true
	    },
	    HtmlBlock: {
	        continue: function(parser, container) {
	            return ((parser.blank &&
	                     (container._htmlBlockType === 6 ||
	                      container._htmlBlockType === 7)) ? 1 : 0);
	        },
	        finalize: function(parser, block) {
	            block._literal = block._string_content.replace(/(\n *)+$/, '');
	            block._string_content = null; // allow GC
	        },
	        canContain: function() { return false; },
	        acceptsLines: true
	    },
	    Paragraph: {
	        continue: function(parser) {
	            return (parser.blank ? 1 : 0);
	        },
	        finalize: function(parser, block) {
	            var pos;
	            var hasReferenceDefs = false;
	
	            // try parsing the beginning as link reference definitions:
	            while (peek(block._string_content, 0) === C_OPEN_BRACKET &&
	                   (pos =
	                    parser.inlineParser.parseReference(block._string_content,
	                                                       parser.refmap))) {
	                block._string_content = block._string_content.slice(pos);
	                hasReferenceDefs = true;
	            }
	            if (hasReferenceDefs && isBlank(block._string_content)) {
	                block.unlink();
	            }
	        },
	        canContain: function() { return false; },
	        acceptsLines: true
	    }
	};
	
	// block start functions.  Return values:
	// 0 = no match
	// 1 = matched container, keep going
	// 2 = matched leaf, no more block starts
	var blockStarts = [
	    // block quote
	    function(parser) {
	        if (!parser.indented &&
	            peek(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN) {
	            parser.advanceNextNonspace();
	            parser.advanceOffset(1, false);
	            // optional following space
	            if (peek(parser.currentLine, parser.offset) === C_SPACE) {
	                parser.advanceOffset(1, false);
	            }
	            parser.closeUnmatchedBlocks();
	            parser.addChild('BlockQuote', parser.nextNonspace);
	            return 1;
	        } else {
	            return 0;
	        }
	    },
	
	    // ATX header
	    function(parser) {
	        var match;
	        if (!parser.indented &&
	            (match = parser.currentLine.slice(parser.nextNonspace).match(reATXHeaderMarker))) {
	            parser.advanceNextNonspace();
	            parser.advanceOffset(match[0].length, false);
	            parser.closeUnmatchedBlocks();
	            var container = parser.addChild('Header', parser.nextNonspace);
	            container.level = match[0].trim().length; // number of #s
	            // remove trailing ###s:
	            container._string_content =
	                parser.currentLine.slice(parser.offset).replace(/^ *#+ *$/, '').replace(/ +#+ *$/, '');
	            parser.advanceOffset(parser.currentLine.length - parser.offset);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // Fenced code block
	    function(parser) {
	        var match;
	        if (!parser.indented &&
	            (match = parser.currentLine.slice(parser.nextNonspace).match(reCodeFence))) {
	            var fenceLength = match[0].length;
	            parser.closeUnmatchedBlocks();
	            var container = parser.addChild('CodeBlock', parser.nextNonspace);
	            container._isFenced = true;
	            container._fenceLength = fenceLength;
	            container._fenceChar = match[0][0];
	            container._fenceOffset = parser.indent;
	            parser.advanceNextNonspace();
	            parser.advanceOffset(fenceLength, false);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // HTML block
	    function(parser, container) {
	        if (!parser.indented &&
	            peek(parser.currentLine, parser.nextNonspace) === C_LESSTHAN) {
	            var s = parser.currentLine.slice(parser.nextNonspace);
	            var blockType;
	
	            for (blockType = 1; blockType <= 7; blockType++) {
	                if (reHtmlBlockOpen[blockType].test(s) &&
	                    (blockType < 7 ||
	                     container.type !== 'Paragraph')) {
	                    parser.closeUnmatchedBlocks();
	                    // We don't adjust parser.offset;
	                    // spaces are part of the HTML block:
	                    var b = parser.addChild('HtmlBlock',
	                                            parser.offset);
	                    b._htmlBlockType = blockType;
	                    return 2;
	                }
	            }
	        }
	
	        return 0;
	
	    },
	
	    // Setext header
	    function(parser, container) {
	        var match;
	        if (!parser.indented &&
	            container.type === 'Paragraph' &&
	                   (container._string_content.indexOf('\n') ===
	                      container._string_content.length - 1) &&
	                   ((match = parser.currentLine.slice(parser.nextNonspace).match(reSetextHeaderLine)))) {
	            parser.closeUnmatchedBlocks();
	            var header = new Node('Header', container.sourcepos);
	            header.level = match[0][0] === '=' ? 1 : 2;
	            header._string_content = container._string_content;
	            container.insertAfter(header);
	            container.unlink();
	            parser.tip = header;
	            parser.advanceOffset(parser.currentLine.length - parser.offset, false);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // hrule
	    function(parser) {
	        if (!parser.indented &&
	            reHrule.test(parser.currentLine.slice(parser.nextNonspace))) {
	            parser.closeUnmatchedBlocks();
	            parser.addChild('HorizontalRule', parser.nextNonspace);
	            parser.advanceOffset(parser.currentLine.length - parser.offset, false);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // list item
	    function(parser, container) {
	        var data;
	        var i;
	        if ((data = parseListMarker(parser.currentLine,
	                                    parser.nextNonspace, parser.indent))) {
	            parser.closeUnmatchedBlocks();
	            if (parser.indented && parser.tip.type !== 'List') {
	                return 0;
	            }
	            parser.advanceNextNonspace();
	            // recalculate data.padding, taking into account tabs:
	            i = parser.column;
	            parser.advanceOffset(data.padding, false);
	            data.padding = parser.column - i;
	
	            // add the list if needed
	            if (parser.tip.type !== 'List' ||
	                !(listsMatch(container._listData, data))) {
	                container = parser.addChild('List', parser.nextNonspace);
	                container._listData = data;
	            }
	
	            // add the list item
	            container = parser.addChild('Item', parser.nextNonspace);
	            container._listData = data;
	            return 1;
	        } else {
	            return 0;
	        }
	    },
	
	    // indented code block
	    function(parser) {
	        if (parser.indented &&
	            parser.tip.type !== 'Paragraph' &&
	            !parser.blank) {
	            // indented code
	            parser.advanceOffset(CODE_INDENT, true);
	            parser.closeUnmatchedBlocks();
	            parser.addChild('CodeBlock', parser.offset);
	            return 2;
	        } else {
	            return 0;
	        }
	     }
	
	];
	
	var advanceOffset = function(count, columns) {
	    var i = 0;
	    var cols = 0;
	    var currentLine = this.currentLine;
	    while (columns ? (cols < count) : (i < count)) {
	        if (currentLine[this.offset + i] === '\t') {
	            cols += (4 - (this.column % 4));
	        } else {
	            cols += 1;
	        }
	        i++;
	    }
	    this.offset += i;
	    this.column += cols;
	};
	
	var advanceNextNonspace = function() {
	    this.offset = this.nextNonspace;
	    this.column = this.nextNonspaceColumn;
	};
	
	var findNextNonspace = function() {
	    var currentLine = this.currentLine;
	    var i = this.offset;
	    var cols = this.column;
	    var c;
	
	    while ((c = currentLine.charAt(i)) !== '') {
	        if (c === ' ') {
	            i++;
	            cols++;
	        } else if (c === '\t') {
	            i++;
	            cols += (4 - (cols % 4));
	        } else {
	            break;
	        }
	    }
	    this.blank = (c === '\n' || c === '\r' || c === '');
	    this.nextNonspace = i;
	    this.nextNonspaceColumn = cols;
	    this.indent = this.nextNonspaceColumn - this.column;
	    this.indented = this.indent >= CODE_INDENT;
	};
	
	// Analyze a line of text and update the document appropriately.
	// We parse markdown text by calling this on each line of input,
	// then finalizing the document.
	var incorporateLine = function(ln) {
	    var all_matched = true;
	    var t;
	
	    var container = this.doc;
	    this.oldtip = this.tip;
	    this.offset = 0;
	    this.lineNumber += 1;
	
	    // replace NUL characters for security
	    if (ln.indexOf('\u0000') !== -1) {
	        ln = ln.replace(/\0/g, '\uFFFD');
	    }
	
	    this.currentLine = ln;
	
	    // For each containing block, try to parse the associated line start.
	    // Bail out on failure: container will point to the last matching block.
	    // Set all_matched to false if not all containers match.
	    var lastChild;
	    while ((lastChild = container._lastChild) && lastChild._open) {
	        container = lastChild;
	
	        this.findNextNonspace();
	
	        switch (this.blocks[container.type].continue(this, container)) {
	        case 0: // we've matched, keep going
	            break;
	        case 1: // we've failed to match a block
	            all_matched = false;
	            break;
	        case 2: // we've hit end of line for fenced code close and can return
	            this.lastLineLength = ln.length;
	            return;
	        default:
	            throw 'continue returned illegal value, must be 0, 1, or 2';
	        }
	        if (!all_matched) {
	            container = container._parent; // back up to last matching block
	            break;
	        }
	    }
	
	    this.allClosed = (container === this.oldtip);
	    this.lastMatchedContainer = container;
	
	    // Check to see if we've hit 2nd blank line; if so break out of list:
	    if (this.blank && container._lastLineBlank) {
	        this.breakOutOfLists(container);
	    }
	
	    var matchedLeaf = container.type !== 'Paragraph' &&
	            blocks[container.type].acceptsLines;
	    var starts = this.blockStarts;
	    var startsLen = starts.length;
	    // Unless last matched container is a code block, try new container starts,
	    // adding children to the last matched container:
	    while (!matchedLeaf) {
	
	        this.findNextNonspace();
	
	        // this is a little performance optimization:
	        if (!this.indented &&
	            !reMaybeSpecial.test(ln.slice(this.nextNonspace))) {
	            this.advanceNextNonspace();
	            break;
	        }
	
	        var i = 0;
	        while (i < startsLen) {
	            var res = starts[i](this, container);
	            if (res === 1) {
	                container = this.tip;
	                break;
	            } else if (res === 2) {
	                container = this.tip;
	                matchedLeaf = true;
	                break;
	            } else {
	                i++;
	            }
	        }
	
	        if (i === startsLen) { // nothing matched
	            this.advanceNextNonspace();
	            break;
	        }
	    }
	
	    // What remains at the offset is a text line.  Add the text to the
	    // appropriate container.
	
	   // First check for a lazy paragraph continuation:
	    if (!this.allClosed && !this.blank &&
	        this.tip.type === 'Paragraph') {
	        // lazy paragraph continuation
	        this.addLine();
	
	    } else { // not a lazy continuation
	
	        // finalize any blocks not matched
	        this.closeUnmatchedBlocks();
	        if (this.blank && container.lastChild) {
	            container.lastChild._lastLineBlank = true;
	        }
	
	        t = container.type;
	
	        // Block quote lines are never blank as they start with >
	        // and we don't count blanks in fenced code for purposes of tight/loose
	        // lists or breaking out of lists.  We also don't set _lastLineBlank
	        // on an empty list item, or if we just closed a fenced block.
	        var lastLineBlank = this.blank &&
	            !(t === 'BlockQuote' ||
	              (t === 'CodeBlock' && container._isFenced) ||
	              (t === 'Item' &&
	               !container._firstChild &&
	               container.sourcepos[0][0] === this.lineNumber));
	
	        // propagate lastLineBlank up through parents:
	        var cont = container;
	        while (cont) {
	            cont._lastLineBlank = lastLineBlank;
	            cont = cont._parent;
	        }
	
	        if (this.blocks[t].acceptsLines) {
	            this.addLine();
	            // if HtmlBlock, check for end condition
	            if (t === 'HtmlBlock' &&
	                container._htmlBlockType >= 1 &&
	                container._htmlBlockType <= 5 &&
	                reHtmlBlockClose[container._htmlBlockType].test(this.currentLine.slice(this.offset))) {
	                this.finalize(container, this.lineNumber);
	            }
	
	        } else if (this.offset < ln.length && !this.blank) {
	            // create paragraph container for line
	            container = this.addChild('Paragraph', this.offset);
	            this.advanceNextNonspace();
	            this.addLine();
	        }
	    }
	    this.lastLineLength = ln.length;
	};
	
	// Finalize a block.  Close it and do any necessary postprocessing,
	// e.g. creating string_content from strings, setting the 'tight'
	// or 'loose' status of a list, and parsing the beginnings
	// of paragraphs for reference definitions.  Reset the tip to the
	// parent of the closed block.
	var finalize = function(block, lineNumber) {
	    var above = block._parent;
	    block._open = false;
	    block.sourcepos[1] = [lineNumber, this.lastLineLength];
	
	    this.blocks[block.type].finalize(this, block);
	
	    this.tip = above;
	};
	
	// Walk through a block & children recursively, parsing string content
	// into inline content where appropriate.
	var processInlines = function(block) {
	    var node, event, t;
	    var walker = block.walker();
	    this.inlineParser.refmap = this.refmap;
	    this.inlineParser.options = this.options;
	    while ((event = walker.next())) {
	        node = event.node;
	        t = node.type;
	        if (!event.entering && (t === 'Paragraph' || t === 'Header')) {
	            this.inlineParser.parse(node);
	        }
	    }
	};
	
	var Document = function() {
	    var doc = new Node('Document', [[1, 1], [0, 0]]);
	    return doc;
	};
	
	// The main parsing function.  Returns a parsed document AST.
	var parse = function(input) {
	    this.doc = new Document();
	    this.tip = this.doc;
	    this.refmap = {};
	    this.lineNumber = 0;
	    this.lastLineLength = 0;
	    this.offset = 0;
	    this.column = 0;
	    this.lastMatchedContainer = this.doc;
	    this.currentLine = "";
	    if (this.options.time) { console.time("preparing input"); }
	    var lines = input.split(reLineEnding);
	    var len = lines.length;
	    if (input.charCodeAt(input.length - 1) === C_NEWLINE) {
	        // ignore last blank line created by final newline
	        len -= 1;
	    }
	    if (this.options.time) { console.timeEnd("preparing input"); }
	    if (this.options.time) { console.time("block parsing"); }
	    for (var i = 0; i < len; i++) {
	        this.incorporateLine(lines[i]);
	    }
	    while (this.tip) {
	        this.finalize(this.tip, len);
	    }
	    if (this.options.time) { console.timeEnd("block parsing"); }
	    if (this.options.time) { console.time("inline parsing"); }
	    this.processInlines(this.doc);
	    if (this.options.time) { console.timeEnd("inline parsing"); }
	    return this.doc;
	};
	
	
	// The Parser object.
	function Parser(options){
	    return {
	        doc: new Document(),
	        blocks: blocks,
	        blockStarts: blockStarts,
	        tip: this.doc,
	        oldtip: this.doc,
	        currentLine: "",
	        lineNumber: 0,
	        offset: 0,
	        column: 0,
	        nextNonspace: 0,
	        nextNonspaceColumn: 0,
	        indent: 0,
	        indented: false,
	        blank: false,
	        allClosed: true,
	        lastMatchedContainer: this.doc,
	        refmap: {},
	        lastLineLength: 0,
	        inlineParser: new InlineParser(options),
	        findNextNonspace: findNextNonspace,
	        advanceOffset: advanceOffset,
	        advanceNextNonspace: advanceNextNonspace,
	        breakOutOfLists: breakOutOfLists,
	        addLine: addLine,
	        addChild: addChild,
	        incorporateLine: incorporateLine,
	        finalize: finalize,
	        processInlines: processInlines,
	        closeUnmatchedBlocks: closeUnmatchedBlocks,
	        parse: parse,
	        options: options || {}
	    };
	}
	
	module.exports = Parser;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var encode = __webpack_require__(16);
	var decode = __webpack_require__(17);
	
	var C_BACKSLASH = 92;
	
	var decodeHTML = __webpack_require__(18).decodeHTML;
	
	var ENTITY = "&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});";
	
	var TAGNAME = '[A-Za-z][A-Za-z0-9-]*';
	var ATTRIBUTENAME = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
	var UNQUOTEDVALUE = "[^\"'=<>`\\x00-\\x20]+";
	var SINGLEQUOTEDVALUE = "'[^']*'";
	var DOUBLEQUOTEDVALUE = '"[^"]*"';
	var ATTRIBUTEVALUE = "(?:" + UNQUOTEDVALUE + "|" + SINGLEQUOTEDVALUE + "|" + DOUBLEQUOTEDVALUE + ")";
	var ATTRIBUTEVALUESPEC = "(?:" + "\\s*=" + "\\s*" + ATTRIBUTEVALUE + ")";
	var ATTRIBUTE = "(?:" + "\\s+" + ATTRIBUTENAME + ATTRIBUTEVALUESPEC + "?)";
	var OPENTAG = "<" + TAGNAME + ATTRIBUTE + "*" + "\\s*/?>";
	var CLOSETAG = "</" + TAGNAME + "\\s*[>]";
	var HTMLCOMMENT = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
	var PROCESSINGINSTRUCTION = "[<][?].*?[?][>]";
	var DECLARATION = "<![A-Z]+" + "\\s+[^>]*>";
	var CDATA = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
	var HTMLTAG = "(?:" + OPENTAG + "|" + CLOSETAG + "|" + HTMLCOMMENT + "|" +
	        PROCESSINGINSTRUCTION + "|" + DECLARATION + "|" + CDATA + ")";
	var reHtmlTag = new RegExp('^' + HTMLTAG, 'i');
	
	var reBackslashOrAmp = /[\\&]/;
	
	var ESCAPABLE = '[!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]';
	
	var reEntityOrEscapedChar = new RegExp('\\\\' + ESCAPABLE + '|' + ENTITY, 'gi');
	
	var XMLSPECIAL = '[&<>"]';
	
	var reXmlSpecial = new RegExp(XMLSPECIAL, 'g');
	
	var reXmlSpecialOrEntity = new RegExp(ENTITY + '|' + XMLSPECIAL, 'gi');
	
	var unescapeChar = function(s) {
	    if (s.charCodeAt(0) === C_BACKSLASH) {
	        return s.charAt(1);
	    } else {
	        return decodeHTML(s);
	    }
	};
	
	// Replace entities and backslash escapes with literal characters.
	var unescapeString = function(s) {
	    if (reBackslashOrAmp.test(s)) {
	        return s.replace(reEntityOrEscapedChar, unescapeChar);
	    } else {
	        return s;
	    }
	};
	
	var normalizeURI = function(uri) {
	    try {
	        return encode(decode(uri));
	    }
	    catch(err) {
	        return uri;
	    }
	};
	
	var replaceUnsafeChar = function(s) {
	    switch (s) {
	    case '&':
	        return '&amp;';
	    case '<':
	        return '&lt;';
	    case '>':
	        return '&gt;';
	    case '"':
	        return '&quot;';
	    default:
	        return s;
	    }
	};
	
	var escapeXml = function(s, preserve_entities) {
	    if (reXmlSpecial.test(s)) {
	        if (preserve_entities) {
	            return s.replace(reXmlSpecialOrEntity, replaceUnsafeChar);
	        } else {
	            return s.replace(reXmlSpecial, replaceUnsafeChar);
	        }
	    } else {
	        return s;
	    }
	};
	
	module.exports = { unescapeString: unescapeString,
	                   normalizeURI: normalizeURI,
	                   escapeXml: escapeXml,
	                   reHtmlTag: reHtmlTag,
	                   OPENTAG: OPENTAG,
	                   CLOSETAG: CLOSETAG,
	                   ENTITY: ENTITY,
	                   ESCAPABLE: ESCAPABLE
	                 };


/***/ },
/* 16 */
/***/ function(module, exports) {

	
	'use strict';
	
	
	var encodeCache = {};
	
	
	// Create a lookup array where anything but characters in `chars` string
	// and alphanumeric chars is percent-encoded.
	//
	function getEncodeCache(exclude) {
	  var i, ch, cache = encodeCache[exclude];
	  if (cache) { return cache; }
	
	  cache = encodeCache[exclude] = [];
	
	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	
	    if (/^[0-9a-z]$/i.test(ch)) {
	      // always allow unencoded alphanumeric characters
	      cache.push(ch);
	    } else {
	      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
	    }
	  }
	
	  for (i = 0; i < exclude.length; i++) {
	    cache[exclude.charCodeAt(i)] = exclude[i];
	  }
	
	  return cache;
	}
	
	
	// Encode unsafe characters with percent-encoding, skipping already
	// encoded sequences.
	//
	//  - string       - string to encode
	//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
	//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
	//
	function encode(string, exclude, keepEscaped) {
	  var i, l, code, nextCode, cache,
	      result = '';
	
	  if (typeof exclude !== 'string') {
	    // encode(string, keepEscaped)
	    keepEscaped  = exclude;
	    exclude = encode.defaultChars;
	  }
	
	  if (typeof keepEscaped === 'undefined') {
	    keepEscaped = true;
	  }
	
	  cache = getEncodeCache(exclude);
	
	  for (i = 0, l = string.length; i < l; i++) {
	    code = string.charCodeAt(i);
	
	    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
	      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
	        result += string.slice(i, i + 3);
	        i += 2;
	        continue;
	      }
	    }
	
	    if (code < 128) {
	      result += cache[code];
	      continue;
	    }
	
	    if (code >= 0xD800 && code <= 0xDFFF) {
	      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
	        nextCode = string.charCodeAt(i + 1);
	        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
	          result += encodeURIComponent(string[i] + string[i + 1]);
	          i++;
	          continue;
	        }
	      }
	      result += '%EF%BF%BD';
	      continue;
	    }
	
	    result += encodeURIComponent(string[i]);
	  }
	
	  return result;
	}
	
	encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
	encode.componentChars = "-_.!~*'()";
	
	
	module.exports = encode;


/***/ },
/* 17 */
/***/ function(module, exports) {

	
	'use strict';
	
	
	/* eslint-disable no-bitwise */
	
	var decodeCache = {};
	
	function getDecodeCache(exclude) {
	  var i, ch, cache = decodeCache[exclude];
	  if (cache) { return cache; }
	
	  cache = decodeCache[exclude] = [];
	
	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	    cache.push(ch);
	  }
	
	  for (i = 0; i < exclude.length; i++) {
	    ch = exclude.charCodeAt(i);
	    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
	  }
	
	  return cache;
	}
	
	
	// Decode percent-encoded string.
	//
	function decode(string, exclude) {
	  var cache;
	
	  if (typeof exclude !== 'string') {
	    exclude = decode.defaultChars;
	  }
	
	  cache = getDecodeCache(exclude);
	
	  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
	    var i, l, b1, b2, b3, b4, char,
	        result = '';
	
	    for (i = 0, l = seq.length; i < l; i += 3) {
	      b1 = parseInt(seq.slice(i + 1, i + 3), 16);
	
	      if (b1 < 0x80) {
	        result += cache[b1];
	        continue;
	      }
	
	      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
	        // 110xxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	
	        if ((b2 & 0xC0) === 0x80) {
	          char = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);
	
	          if (char < 0x80) {
	            result += '\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(char);
	          }
	
	          i += 3;
	          continue;
	        }
	      }
	
	      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
	        // 1110xxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	
	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
	          char = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);
	
	          if (char < 0x800 || (char >= 0xD800 && char <= 0xDFFF)) {
	            result += '\ufffd\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(char);
	          }
	
	          i += 6;
	          continue;
	        }
	      }
	
	      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
	        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
	
	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
	          char = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);
	
	          if (char < 0x10000 || char > 0x10FFFF) {
	            result += '\ufffd\ufffd\ufffd\ufffd';
	          } else {
	            char -= 0x10000;
	            result += String.fromCharCode(0xD800 + (char >> 10), 0xDC00 + (char & 0x3FF));
	          }
	
	          i += 9;
	          continue;
	        }
	      }
	
	      result += '\ufffd';
	    }
	
	    return result;
	  });
	}
	
	
	decode.defaultChars   = ';/?:@&=+$,#';
	decode.componentChars = '';
	
	
	module.exports = decode;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var encode = __webpack_require__(19),
	    decode = __webpack_require__(22);
	
	exports.decode = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
	};
	
	exports.decodeStrict = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
	};
	
	exports.encode = function(data, level){
		return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
	};
	
	exports.encodeXML = encode.XML;
	
	exports.encodeHTML4 =
	exports.encodeHTML5 =
	exports.encodeHTML  = encode.HTML;
	
	exports.decodeXML =
	exports.decodeXMLStrict = decode.XML;
	
	exports.decodeHTML4 =
	exports.decodeHTML5 =
	exports.decodeHTML = decode.HTML;
	
	exports.decodeHTML4Strict =
	exports.decodeHTML5Strict =
	exports.decodeHTMLStrict = decode.HTMLStrict;
	
	exports.escape = encode.escape;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var inverseXML = getInverseObj(__webpack_require__(20)),
	    xmlReplacer = getInverseReplacer(inverseXML);
	
	exports.XML = getInverse(inverseXML, xmlReplacer);
	
	var inverseHTML = getInverseObj(__webpack_require__(21)),
	    htmlReplacer = getInverseReplacer(inverseHTML);
	
	exports.HTML = getInverse(inverseHTML, htmlReplacer);
	
	function getInverseObj(obj){
		return Object.keys(obj).sort().reduce(function(inverse, name){
			inverse[obj[name]] = "&" + name + ";";
			return inverse;
		}, {});
	}
	
	function getInverseReplacer(inverse){
		var single = [],
		    multiple = [];
	
		Object.keys(inverse).forEach(function(k){
			if(k.length === 1){
				single.push("\\" + k);
			} else {
				multiple.push(k);
			}
		});
	
		//TODO add ranges
		multiple.unshift("[" + single.join("") + "]");
	
		return new RegExp(multiple.join("|"), "g");
	}
	
	var re_nonASCII = /[^\0-\x7F]/g,
	    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	
	function singleCharReplacer(c){
		return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
	}
	
	function astralReplacer(c){
		// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		var high = c.charCodeAt(0);
		var low  = c.charCodeAt(1);
		var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
		return "&#x" + codePoint.toString(16).toUpperCase() + ";";
	}
	
	function getInverse(inverse, re){
		function func(name){
			return inverse[name];
		}
	
		return function(data){
			return data
					.replace(re, func)
					.replace(re_astralSymbols, astralReplacer)
					.replace(re_nonASCII, singleCharReplacer);
		};
	}
	
	var re_xmlChars = getInverseReplacer(inverseXML);
	
	function escapeXML(data){
		return data
				.replace(re_xmlChars, singleCharReplacer)
				.replace(re_astralSymbols, astralReplacer)
				.replace(re_nonASCII, singleCharReplacer);
	}
	
	exports.escape = escapeXML;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
		"amp": "&",
		"apos": "'",
		"gt": ">",
		"lt": "<",
		"quot": "\""
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Abreve": "Ă",
		"abreve": "ă",
		"ac": "∾",
		"acd": "∿",
		"acE": "∾̳",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"Acy": "А",
		"acy": "а",
		"AElig": "Æ",
		"aelig": "æ",
		"af": "⁡",
		"Afr": "𝔄",
		"afr": "𝔞",
		"Agrave": "À",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"Alpha": "Α",
		"alpha": "α",
		"Amacr": "Ā",
		"amacr": "ā",
		"amalg": "⨿",
		"amp": "&",
		"AMP": "&",
		"andand": "⩕",
		"And": "⩓",
		"and": "∧",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angmsd": "∡",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"Aogon": "Ą",
		"aogon": "ą",
		"Aopf": "𝔸",
		"aopf": "𝕒",
		"apacir": "⩯",
		"ap": "≈",
		"apE": "⩰",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"ApplyFunction": "⁡",
		"approx": "≈",
		"approxeq": "≊",
		"Aring": "Å",
		"aring": "å",
		"Ascr": "𝒜",
		"ascr": "𝒶",
		"Assign": "≔",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"Backslash": "∖",
		"Barv": "⫧",
		"barvee": "⊽",
		"barwed": "⌅",
		"Barwed": "⌆",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"Bcy": "Б",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"Because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"Bfr": "𝔅",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bNot": "⫭",
		"bnot": "⌐",
		"Bopf": "𝔹",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxbox": "⧉",
		"boxdl": "┐",
		"boxdL": "╕",
		"boxDl": "╖",
		"boxDL": "╗",
		"boxdr": "┌",
		"boxdR": "╒",
		"boxDr": "╓",
		"boxDR": "╔",
		"boxh": "─",
		"boxH": "═",
		"boxhd": "┬",
		"boxHd": "╤",
		"boxhD": "╥",
		"boxHD": "╦",
		"boxhu": "┴",
		"boxHu": "╧",
		"boxhU": "╨",
		"boxHU": "╩",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxul": "┘",
		"boxuL": "╛",
		"boxUl": "╜",
		"boxUL": "╝",
		"boxur": "└",
		"boxuR": "╘",
		"boxUr": "╙",
		"boxUR": "╚",
		"boxv": "│",
		"boxV": "║",
		"boxvh": "┼",
		"boxvH": "╪",
		"boxVh": "╫",
		"boxVH": "╬",
		"boxvl": "┤",
		"boxvL": "╡",
		"boxVl": "╢",
		"boxVL": "╣",
		"boxvr": "├",
		"boxvR": "╞",
		"boxVr": "╟",
		"boxVR": "╠",
		"bprime": "‵",
		"breve": "˘",
		"Breve": "˘",
		"brvbar": "¦",
		"bscr": "𝒷",
		"Bscr": "ℬ",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsolb": "⧅",
		"bsol": "\\",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"Bumpeq": "≎",
		"bumpeq": "≏",
		"Cacute": "Ć",
		"cacute": "ć",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"cap": "∩",
		"Cap": "⋒",
		"capcup": "⩇",
		"capdot": "⩀",
		"CapitalDifferentialD": "ⅅ",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"Cayleys": "ℭ",
		"ccaps": "⩍",
		"Ccaron": "Č",
		"ccaron": "č",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"Ccirc": "Ĉ",
		"ccirc": "ĉ",
		"Cconint": "∰",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"Cdot": "Ċ",
		"cdot": "ċ",
		"cedil": "¸",
		"Cedilla": "¸",
		"cemptyv": "⦲",
		"cent": "¢",
		"centerdot": "·",
		"CenterDot": "·",
		"cfr": "𝔠",
		"Cfr": "ℭ",
		"CHcy": "Ч",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"Chi": "Χ",
		"chi": "χ",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"CircleDot": "⊙",
		"circledR": "®",
		"circledS": "Ⓢ",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"cir": "○",
		"cirE": "⧃",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"Colon": "∷",
		"Colone": "⩴",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"Congruent": "≡",
		"conint": "∮",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"copf": "𝕔",
		"Copf": "ℂ",
		"coprod": "∐",
		"Coproduct": "∐",
		"copy": "©",
		"COPY": "©",
		"copysr": "℗",
		"CounterClockwiseContourIntegral": "∳",
		"crarr": "↵",
		"cross": "✗",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"CupCap": "≍",
		"cup": "∪",
		"Cup": "⋓",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dagger": "†",
		"Dagger": "‡",
		"daleth": "ℸ",
		"darr": "↓",
		"Darr": "↡",
		"dArr": "⇓",
		"dash": "‐",
		"Dashv": "⫤",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"Dcaron": "Ď",
		"dcaron": "ď",
		"Dcy": "Д",
		"dcy": "д",
		"ddagger": "‡",
		"ddarr": "⇊",
		"DD": "ⅅ",
		"dd": "ⅆ",
		"DDotrahd": "⤑",
		"ddotseq": "⩷",
		"deg": "°",
		"Del": "∇",
		"Delta": "Δ",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"Dfr": "𝔇",
		"dfr": "𝔡",
		"dHar": "⥥",
		"dharl": "⇃",
		"dharr": "⇂",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"diam": "⋄",
		"diamond": "⋄",
		"Diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"DifferentialD": "ⅆ",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"DJcy": "Ђ",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"Dopf": "𝔻",
		"dopf": "𝕕",
		"Dot": "¨",
		"dot": "˙",
		"DotDot": "⃜",
		"doteq": "≐",
		"doteqdot": "≑",
		"DotEqual": "≐",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrowBar": "⤓",
		"downarrow": "↓",
		"DownArrow": "↓",
		"Downarrow": "⇓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVectorBar": "⥖",
		"DownLeftVector": "↽",
		"DownRightTeeVector": "⥟",
		"DownRightVectorBar": "⥗",
		"DownRightVector": "⇁",
		"DownTeeArrow": "↧",
		"DownTee": "⊤",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"Dscr": "𝒟",
		"dscr": "𝒹",
		"DScy": "Ѕ",
		"dscy": "ѕ",
		"dsol": "⧶",
		"Dstrok": "Đ",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"DZcy": "Џ",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"Eacute": "É",
		"eacute": "é",
		"easter": "⩮",
		"Ecaron": "Ě",
		"ecaron": "ě",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"ecir": "≖",
		"ecolon": "≕",
		"Ecy": "Э",
		"ecy": "э",
		"eDDot": "⩷",
		"Edot": "Ė",
		"edot": "ė",
		"eDot": "≑",
		"ee": "ⅇ",
		"efDot": "≒",
		"Efr": "𝔈",
		"efr": "𝔢",
		"eg": "⪚",
		"Egrave": "È",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"Element": "∈",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"Emacr": "Ē",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"EmptySmallSquare": "◻",
		"emptyv": "∅",
		"EmptyVerySmallSquare": "▫",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"ENG": "Ŋ",
		"eng": "ŋ",
		"ensp": " ",
		"Eogon": "Ę",
		"eogon": "ę",
		"Eopf": "𝔼",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"Epsilon": "Ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"Equal": "⩵",
		"equals": "=",
		"EqualTilde": "≂",
		"equest": "≟",
		"Equilibrium": "⇌",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erarr": "⥱",
		"erDot": "≓",
		"escr": "ℯ",
		"Escr": "ℰ",
		"esdot": "≐",
		"Esim": "⩳",
		"esim": "≂",
		"Eta": "Η",
		"eta": "η",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"Exists": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"ExponentialE": "ⅇ",
		"fallingdotseq": "≒",
		"Fcy": "Ф",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"Ffr": "𝔉",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"Fopf": "𝔽",
		"fopf": "𝕗",
		"forall": "∀",
		"ForAll": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"Fouriertrf": "ℱ",
		"fpartint": "⨍",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"Fscr": "ℱ",
		"gacute": "ǵ",
		"Gamma": "Γ",
		"gamma": "γ",
		"Gammad": "Ϝ",
		"gammad": "ϝ",
		"gap": "⪆",
		"Gbreve": "Ğ",
		"gbreve": "ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"gcirc": "ĝ",
		"Gcy": "Г",
		"gcy": "г",
		"Gdot": "Ġ",
		"gdot": "ġ",
		"ge": "≥",
		"gE": "≧",
		"gEl": "⪌",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"gescc": "⪩",
		"ges": "⩾",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"Gfr": "𝔊",
		"gfr": "𝔤",
		"gg": "≫",
		"Gg": "⋙",
		"ggg": "⋙",
		"gimel": "ℷ",
		"GJcy": "Ѓ",
		"gjcy": "ѓ",
		"gla": "⪥",
		"gl": "≷",
		"glE": "⪒",
		"glj": "⪤",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gnE": "≩",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"Gopf": "𝔾",
		"gopf": "𝕘",
		"grave": "`",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gt": ">",
		"GT": ">",
		"Gt": "≫",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"Hacek": "ˇ",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"HARDcy": "Ъ",
		"hardcy": "ъ",
		"harrcir": "⥈",
		"harr": "↔",
		"hArr": "⇔",
		"harrw": "↭",
		"Hat": "^",
		"hbar": "ℏ",
		"Hcirc": "Ĥ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"Hopf": "ℍ",
		"horbar": "―",
		"HorizontalLine": "─",
		"hscr": "𝒽",
		"Hscr": "ℋ",
		"hslash": "ℏ",
		"Hstrok": "Ħ",
		"hstrok": "ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"hybull": "⁃",
		"hyphen": "‐",
		"Iacute": "Í",
		"iacute": "í",
		"ic": "⁣",
		"Icirc": "Î",
		"icirc": "î",
		"Icy": "И",
		"icy": "и",
		"Idot": "İ",
		"IEcy": "Е",
		"iecy": "е",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"Ifr": "ℑ",
		"Igrave": "Ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"IJlig": "Ĳ",
		"ijlig": "ĳ",
		"Imacr": "Ī",
		"imacr": "ī",
		"image": "ℑ",
		"ImaginaryI": "ⅈ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"Im": "ℑ",
		"imof": "⊷",
		"imped": "Ƶ",
		"Implies": "⇒",
		"incare": "℅",
		"in": "∈",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"intcal": "⊺",
		"int": "∫",
		"Int": "∬",
		"integers": "ℤ",
		"Integral": "∫",
		"intercal": "⊺",
		"Intersection": "⋂",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"IOcy": "Ё",
		"iocy": "ё",
		"Iogon": "Į",
		"iogon": "į",
		"Iopf": "𝕀",
		"iopf": "𝕚",
		"Iota": "Ι",
		"iota": "ι",
		"iprod": "⨼",
		"iquest": "¿",
		"iscr": "𝒾",
		"Iscr": "ℐ",
		"isin": "∈",
		"isindot": "⋵",
		"isinE": "⋹",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"Itilde": "Ĩ",
		"itilde": "ĩ",
		"Iukcy": "І",
		"iukcy": "і",
		"Iuml": "Ï",
		"iuml": "ï",
		"Jcirc": "Ĵ",
		"jcirc": "ĵ",
		"Jcy": "Й",
		"jcy": "й",
		"Jfr": "𝔍",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"Jopf": "𝕁",
		"jopf": "𝕛",
		"Jscr": "𝒥",
		"jscr": "𝒿",
		"Jsercy": "Ј",
		"jsercy": "ј",
		"Jukcy": "Є",
		"jukcy": "є",
		"Kappa": "Κ",
		"kappa": "κ",
		"kappav": "ϰ",
		"Kcedil": "Ķ",
		"kcedil": "ķ",
		"Kcy": "К",
		"kcy": "к",
		"Kfr": "𝔎",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"KHcy": "Х",
		"khcy": "х",
		"KJcy": "Ќ",
		"kjcy": "ќ",
		"Kopf": "𝕂",
		"kopf": "𝕜",
		"Kscr": "𝒦",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"Lacute": "Ĺ",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"Lambda": "Λ",
		"lambda": "λ",
		"lang": "⟨",
		"Lang": "⟪",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"Laplacetrf": "ℒ",
		"laquo": "«",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larr": "←",
		"Larr": "↞",
		"lArr": "⇐",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"latail": "⤙",
		"lAtail": "⤛",
		"lat": "⪫",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lBarr": "⤎",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"Lcaron": "Ľ",
		"lcaron": "ľ",
		"Lcedil": "Ļ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"Lcy": "Л",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"lE": "≦",
		"LeftAngleBracket": "⟨",
		"LeftArrowBar": "⇤",
		"leftarrow": "←",
		"LeftArrow": "←",
		"Leftarrow": "⇐",
		"LeftArrowRightArrow": "⇆",
		"leftarrowtail": "↢",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVectorBar": "⥙",
		"LeftDownVector": "⇃",
		"LeftFloor": "⌊",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"LeftRightArrow": "↔",
		"Leftrightarrow": "⇔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"LeftRightVector": "⥎",
		"LeftTeeArrow": "↤",
		"LeftTee": "⊣",
		"LeftTeeVector": "⥚",
		"leftthreetimes": "⋋",
		"LeftTriangleBar": "⧏",
		"LeftTriangle": "⊲",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVectorBar": "⥘",
		"LeftUpVector": "↿",
		"LeftVectorBar": "⥒",
		"LeftVector": "↼",
		"lEg": "⪋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"lescc": "⪨",
		"les": "⩽",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"lessgtr": "≶",
		"LessLess": "⪡",
		"lesssim": "≲",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"Lfr": "𝔏",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lHar": "⥢",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"LJcy": "Љ",
		"ljcy": "љ",
		"llarr": "⇇",
		"ll": "≪",
		"Ll": "⋘",
		"llcorner": "⌞",
		"Lleftarrow": "⇚",
		"llhard": "⥫",
		"lltri": "◺",
		"Lmidot": "Ŀ",
		"lmidot": "ŀ",
		"lmoustache": "⎰",
		"lmoust": "⎰",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lnE": "≨",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"LongLeftArrow": "⟵",
		"Longleftarrow": "⟸",
		"longleftrightarrow": "⟷",
		"LongLeftRightArrow": "⟷",
		"Longleftrightarrow": "⟺",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"LongRightArrow": "⟶",
		"Longrightarrow": "⟹",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"Lopf": "𝕃",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"Lscr": "ℒ",
		"lsh": "↰",
		"Lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"Lstrok": "Ł",
		"lstrok": "ł",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"lt": "<",
		"LT": "<",
		"Lt": "≪",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"ltrPar": "⦖",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"Map": "⤅",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"Mcy": "М",
		"mcy": "м",
		"mdash": "—",
		"mDDot": "∺",
		"measuredangle": "∡",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"mfr": "𝔪",
		"mho": "℧",
		"micro": "µ",
		"midast": "*",
		"midcir": "⫰",
		"mid": "∣",
		"middot": "·",
		"minusb": "⊟",
		"minus": "−",
		"minusd": "∸",
		"minusdu": "⨪",
		"MinusPlus": "∓",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"Mopf": "𝕄",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"Mscr": "ℳ",
		"mstpos": "∾",
		"Mu": "Μ",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nabla": "∇",
		"Nacute": "Ń",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natural": "♮",
		"naturals": "ℕ",
		"natur": "♮",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"Ncaron": "Ň",
		"ncaron": "ň",
		"Ncedil": "Ņ",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"Ncy": "Н",
		"ncy": "н",
		"ndash": "–",
		"nearhk": "⤤",
		"nearr": "↗",
		"neArr": "⇗",
		"nearrow": "↗",
		"ne": "≠",
		"nedot": "≐̸",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"nexist": "∄",
		"nexists": "∄",
		"Nfr": "𝔑",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"nGg": "⋙̸",
		"ngsim": "≵",
		"nGt": "≫⃒",
		"ngt": "≯",
		"ngtr": "≯",
		"nGtv": "≫̸",
		"nharr": "↮",
		"nhArr": "⇎",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"NJcy": "Њ",
		"njcy": "њ",
		"nlarr": "↚",
		"nlArr": "⇍",
		"nldr": "‥",
		"nlE": "≦̸",
		"nle": "≰",
		"nleftarrow": "↚",
		"nLeftarrow": "⇍",
		"nleftrightarrow": "↮",
		"nLeftrightarrow": "⇎",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nLl": "⋘̸",
		"nlsim": "≴",
		"nLt": "≪⃒",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nLtv": "≪̸",
		"nmid": "∤",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"nopf": "𝕟",
		"Nopf": "ℕ",
		"Not": "⫬",
		"not": "¬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"notin": "∉",
		"notindot": "⋵̸",
		"notinE": "⋹̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangle": "⋫",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"nparallel": "∦",
		"npar": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"npre": "⪯̸",
		"nrarrc": "⤳̸",
		"nrarr": "↛",
		"nrArr": "⇏",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nRightarrow": "⇏",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"Nscr": "𝒩",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"Nu": "Ν",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvDash": "⊭",
		"nVdash": "⊮",
		"nVDash": "⊯",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvHarr": "⤄",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwArr": "⇖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"Oacute": "Ó",
		"oacute": "ó",
		"oast": "⊛",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"ocir": "⊚",
		"Ocy": "О",
		"ocy": "о",
		"odash": "⊝",
		"Odblac": "Ő",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"OElig": "Œ",
		"oelig": "œ",
		"ofcir": "⦿",
		"Ofr": "𝔒",
		"ofr": "𝔬",
		"ogon": "˛",
		"Ograve": "Ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"Omacr": "Ō",
		"omacr": "ō",
		"Omega": "Ω",
		"omega": "ω",
		"Omicron": "Ο",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"Oopf": "𝕆",
		"oopf": "𝕠",
		"opar": "⦷",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"operp": "⦹",
		"oplus": "⊕",
		"orarr": "↻",
		"Or": "⩔",
		"or": "∨",
		"ord": "⩝",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oS": "Ⓢ",
		"Oscr": "𝒪",
		"oscr": "ℴ",
		"Oslash": "Ø",
		"oslash": "ø",
		"osol": "⊘",
		"Otilde": "Õ",
		"otilde": "õ",
		"otimesas": "⨶",
		"Otimes": "⨷",
		"otimes": "⊗",
		"Ouml": "Ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"para": "¶",
		"parallel": "∥",
		"par": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"PartialD": "∂",
		"Pcy": "П",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"Pfr": "𝔓",
		"pfr": "𝔭",
		"Phi": "Φ",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"Pi": "Π",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plus": "+",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"PlusMinus": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"Poincareplane": "ℌ",
		"pointint": "⨕",
		"popf": "𝕡",
		"Popf": "ℙ",
		"pound": "£",
		"prap": "⪷",
		"Pr": "⪻",
		"pr": "≺",
		"prcue": "≼",
		"precapprox": "⪷",
		"prec": "≺",
		"preccurlyeq": "≼",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"pre": "⪯",
		"prE": "⪳",
		"precsim": "≾",
		"prime": "′",
		"Prime": "″",
		"primes": "ℙ",
		"prnap": "⪹",
		"prnE": "⪵",
		"prnsim": "⋨",
		"prod": "∏",
		"Product": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"Proportional": "∝",
		"Proportion": "∷",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"Pscr": "𝒫",
		"pscr": "𝓅",
		"Psi": "Ψ",
		"psi": "ψ",
		"puncsp": " ",
		"Qfr": "𝔔",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"Qopf": "ℚ",
		"qprime": "⁗",
		"Qscr": "𝒬",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quot": "\"",
		"QUOT": "\"",
		"rAarr": "⇛",
		"race": "∽̱",
		"Racute": "Ŕ",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"Rang": "⟫",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raquo": "»",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarr": "→",
		"Rarr": "↠",
		"rArr": "⇒",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"Rarrtl": "⤖",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"rAtail": "⤜",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rBarr": "⤏",
		"RBarr": "⤐",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"Rcaron": "Ř",
		"rcaron": "ř",
		"Rcedil": "Ŗ",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"Rcy": "Р",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"Re": "ℜ",
		"rect": "▭",
		"reg": "®",
		"REG": "®",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"Rfr": "ℜ",
		"rHar": "⥤",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"Rho": "Ρ",
		"rho": "ρ",
		"rhov": "ϱ",
		"RightAngleBracket": "⟩",
		"RightArrowBar": "⇥",
		"rightarrow": "→",
		"RightArrow": "→",
		"Rightarrow": "⇒",
		"RightArrowLeftArrow": "⇄",
		"rightarrowtail": "↣",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVectorBar": "⥕",
		"RightDownVector": "⇂",
		"RightFloor": "⌋",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"RightTeeArrow": "↦",
		"RightTee": "⊢",
		"RightTeeVector": "⥛",
		"rightthreetimes": "⋌",
		"RightTriangleBar": "⧐",
		"RightTriangle": "⊳",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVectorBar": "⥔",
		"RightUpVector": "↾",
		"RightVectorBar": "⥓",
		"RightVector": "⇀",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoustache": "⎱",
		"rmoust": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"Ropf": "ℝ",
		"roplus": "⨮",
		"rotimes": "⨵",
		"RoundImplies": "⥰",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"Rrightarrow": "⇛",
		"rsaquo": "›",
		"rscr": "𝓇",
		"Rscr": "ℛ",
		"rsh": "↱",
		"Rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"RuleDelayed": "⧴",
		"ruluhar": "⥨",
		"rx": "℞",
		"Sacute": "Ś",
		"sacute": "ś",
		"sbquo": "‚",
		"scap": "⪸",
		"Scaron": "Š",
		"scaron": "š",
		"Sc": "⪼",
		"sc": "≻",
		"sccue": "≽",
		"sce": "⪰",
		"scE": "⪴",
		"Scedil": "Ş",
		"scedil": "ş",
		"Scirc": "Ŝ",
		"scirc": "ŝ",
		"scnap": "⪺",
		"scnE": "⪶",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"Scy": "С",
		"scy": "с",
		"sdotb": "⊡",
		"sdot": "⋅",
		"sdote": "⩦",
		"searhk": "⤥",
		"searr": "↘",
		"seArr": "⇘",
		"searrow": "↘",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"Sfr": "𝔖",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"SHCHcy": "Щ",
		"shchcy": "щ",
		"SHcy": "Ш",
		"shcy": "ш",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"shortmid": "∣",
		"shortparallel": "∥",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"shy": "­",
		"Sigma": "Σ",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"SmallCircle": "∘",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"SOFTcy": "Ь",
		"softcy": "ь",
		"solbar": "⌿",
		"solb": "⧄",
		"sol": "/",
		"Sopf": "𝕊",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"Sqrt": "√",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"square": "□",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"squarf": "▪",
		"squ": "□",
		"squf": "▪",
		"srarr": "→",
		"Sscr": "𝒮",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"Star": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"Sub": "⋐",
		"subdot": "⪽",
		"subE": "⫅",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"Subset": "⋐",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"SubsetEqual": "⊆",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succapprox": "⪸",
		"succ": "≻",
		"succcurlyeq": "≽",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"SuchThat": "∋",
		"sum": "∑",
		"Sum": "∑",
		"sung": "♪",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"sup": "⊃",
		"Sup": "⋑",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supE": "⫆",
		"supe": "⊇",
		"supedot": "⫄",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"Supset": "⋑",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swarhk": "⤦",
		"swarr": "↙",
		"swArr": "⇙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szlig": "ß",
		"Tab": "\t",
		"target": "⌖",
		"Tau": "Τ",
		"tau": "τ",
		"tbrk": "⎴",
		"Tcaron": "Ť",
		"tcaron": "ť",
		"Tcedil": "Ţ",
		"tcedil": "ţ",
		"Tcy": "Т",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"Tfr": "𝔗",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"Therefore": "∴",
		"Theta": "Θ",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"THORN": "Þ",
		"thorn": "þ",
		"tilde": "˜",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"timesbar": "⨱",
		"timesb": "⊠",
		"times": "×",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"topbot": "⌶",
		"topcir": "⫱",
		"top": "⊤",
		"Topf": "𝕋",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"TRADE": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"TripleDot": "⃛",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"Tscr": "𝒯",
		"tscr": "𝓉",
		"TScy": "Ц",
		"tscy": "ц",
		"TSHcy": "Ћ",
		"tshcy": "ћ",
		"Tstrok": "Ŧ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"Uacute": "Ú",
		"uacute": "ú",
		"uarr": "↑",
		"Uarr": "↟",
		"uArr": "⇑",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"ubrcy": "ў",
		"Ubreve": "Ŭ",
		"ubreve": "ŭ",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ucy": "У",
		"ucy": "у",
		"udarr": "⇅",
		"Udblac": "Ű",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"Ufr": "𝔘",
		"ufr": "𝔲",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uHar": "⥣",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"Umacr": "Ū",
		"umacr": "ū",
		"uml": "¨",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"uogon": "ų",
		"Uopf": "𝕌",
		"uopf": "𝕦",
		"UpArrowBar": "⤒",
		"uparrow": "↑",
		"UpArrow": "↑",
		"Uparrow": "⇑",
		"UpArrowDownArrow": "⇅",
		"updownarrow": "↕",
		"UpDownArrow": "↕",
		"Updownarrow": "⇕",
		"UpEquilibrium": "⥮",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"upsi": "υ",
		"Upsi": "ϒ",
		"upsih": "ϒ",
		"Upsilon": "Υ",
		"upsilon": "υ",
		"UpTeeArrow": "↥",
		"UpTee": "⊥",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"Uring": "Ů",
		"uring": "ů",
		"urtri": "◹",
		"Uscr": "𝒰",
		"uscr": "𝓊",
		"utdot": "⋰",
		"Utilde": "Ũ",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"Uuml": "Ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"vArr": "⇕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vBar": "⫨",
		"Vbar": "⫫",
		"vBarv": "⫩",
		"Vcy": "В",
		"vcy": "в",
		"vdash": "⊢",
		"vDash": "⊨",
		"Vdash": "⊩",
		"VDash": "⊫",
		"Vdashl": "⫦",
		"veebar": "⊻",
		"vee": "∨",
		"Vee": "⋁",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"Verbar": "‖",
		"vert": "|",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"Vopf": "𝕍",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"Vscr": "𝒱",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"Vvdash": "⊪",
		"vzigzag": "⦚",
		"Wcirc": "Ŵ",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"Wedge": "⋀",
		"wedgeq": "≙",
		"weierp": "℘",
		"Wfr": "𝔚",
		"wfr": "𝔴",
		"Wopf": "𝕎",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"Wscr": "𝒲",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"Xfr": "𝔛",
		"xfr": "𝔵",
		"xharr": "⟷",
		"xhArr": "⟺",
		"Xi": "Ξ",
		"xi": "ξ",
		"xlarr": "⟵",
		"xlArr": "⟸",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"Xopf": "𝕏",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrarr": "⟶",
		"xrArr": "⟹",
		"Xscr": "𝒳",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"Yacute": "Ý",
		"yacute": "ý",
		"YAcy": "Я",
		"yacy": "я",
		"Ycirc": "Ŷ",
		"ycirc": "ŷ",
		"Ycy": "Ы",
		"ycy": "ы",
		"yen": "¥",
		"Yfr": "𝔜",
		"yfr": "𝔶",
		"YIcy": "Ї",
		"yicy": "ї",
		"Yopf": "𝕐",
		"yopf": "𝕪",
		"Yscr": "𝒴",
		"yscr": "𝓎",
		"YUcy": "Ю",
		"yucy": "ю",
		"yuml": "ÿ",
		"Yuml": "Ÿ",
		"Zacute": "Ź",
		"zacute": "ź",
		"Zcaron": "Ž",
		"zcaron": "ž",
		"Zcy": "З",
		"zcy": "з",
		"Zdot": "Ż",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"Zfr": "ℨ",
		"ZHcy": "Ж",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var entityMap = __webpack_require__(21),
	    legacyMap = __webpack_require__(23),
	    xmlMap    = __webpack_require__(20),
	    decodeCodePoint = __webpack_require__(24);
	
	var decodeXMLStrict  = getStrictDecoder(xmlMap),
	    decodeHTMLStrict = getStrictDecoder(entityMap);
	
	function getStrictDecoder(map){
		var keys = Object.keys(map).join("|"),
		    replace = getReplacer(map);
	
		keys += "|#[xX][\\da-fA-F]+|#\\d+";
	
		var re = new RegExp("&(?:" + keys + ");", "g");
	
		return function(str){
			return String(str).replace(re, replace);
		};
	}
	
	var decodeHTML = (function(){
		var legacy = Object.keys(legacyMap)
			.sort(sorter);
	
		var keys = Object.keys(entityMap)
			.sort(sorter);
	
		for(var i = 0, j = 0; i < keys.length; i++){
			if(legacy[j] === keys[i]){
				keys[i] += ";?";
				j++;
			} else {
				keys[i] += ";";
			}
		}
	
		var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
		    replace = getReplacer(entityMap);
	
		function replacer(str){
			if(str.substr(-1) !== ";") str += ";";
			return replace(str);
		}
	
		//TODO consider creating a merged map
		return function(str){
			return String(str).replace(re, replacer);
		};
	}());
	
	function sorter(a, b){
		return a < b ? 1 : -1;
	}
	
	function getReplacer(map){
		return function replace(str){
			if(str.charAt(1) === "#"){
				if(str.charAt(2) === "X" || str.charAt(2) === "x"){
					return decodeCodePoint(parseInt(str.substr(3), 16));
				}
				return decodeCodePoint(parseInt(str.substr(2), 10));
			}
			return map[str.slice(1, -1)];
		};
	}
	
	module.exports = {
		XML: decodeXMLStrict,
		HTML: decodeHTML,
		HTMLStrict: decodeHTMLStrict
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"AElig": "Æ",
		"aelig": "æ",
		"Agrave": "À",
		"agrave": "à",
		"amp": "&",
		"AMP": "&",
		"Aring": "Å",
		"aring": "å",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"brvbar": "¦",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"COPY": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"Eacute": "É",
		"eacute": "é",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"Egrave": "È",
		"egrave": "è",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"GT": ">",
		"Iacute": "Í",
		"iacute": "í",
		"Icirc": "Î",
		"icirc": "î",
		"iexcl": "¡",
		"Igrave": "Ì",
		"igrave": "ì",
		"iquest": "¿",
		"Iuml": "Ï",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"LT": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": " ",
		"not": "¬",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"Oacute": "Ó",
		"oacute": "ó",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"Ograve": "Ò",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"Oslash": "Ø",
		"oslash": "ø",
		"Otilde": "Õ",
		"otilde": "õ",
		"Ouml": "Ö",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"QUOT": "\"",
		"raquo": "»",
		"reg": "®",
		"REG": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"THORN": "Þ",
		"thorn": "þ",
		"times": "×",
		"Uacute": "Ú",
		"uacute": "ú",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uml": "¨",
		"Uuml": "Ü",
		"uuml": "ü",
		"Yacute": "Ý",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var decodeMap = __webpack_require__(25);
	
	module.exports = decodeCodePoint;
	
	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	function decodeCodePoint(codePoint){
	
		if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
			return "\uFFFD";
		}
	
		if(codePoint in decodeMap){
			codePoint = decodeMap[codePoint];
		}
	
		var output = "";
	
		if(codePoint > 0xFFFF){
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
	
		output += String.fromCharCode(codePoint);
		return output;
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
		"0": 65533,
		"128": 8364,
		"130": 8218,
		"131": 402,
		"132": 8222,
		"133": 8230,
		"134": 8224,
		"135": 8225,
		"136": 710,
		"137": 8240,
		"138": 352,
		"139": 8249,
		"140": 338,
		"142": 381,
		"145": 8216,
		"146": 8217,
		"147": 8220,
		"148": 8221,
		"149": 8226,
		"150": 8211,
		"151": 8212,
		"152": 732,
		"153": 8482,
		"154": 353,
		"155": 8250,
		"156": 339,
		"158": 382,
		"159": 376
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Node = __webpack_require__(13);
	var common = __webpack_require__(15);
	var normalizeReference = __webpack_require__(28);
	
	var normalizeURI = common.normalizeURI;
	var unescapeString = common.unescapeString;
	var fromCodePoint = __webpack_require__(27);
	var decodeHTML = __webpack_require__(18).decodeHTML;
	__webpack_require__(29); // Polyfill for String.prototype.repeat
	
	// Constants for character codes:
	
	var C_NEWLINE = 10;
	var C_ASTERISK = 42;
	var C_UNDERSCORE = 95;
	var C_BACKTICK = 96;
	var C_OPEN_BRACKET = 91;
	var C_CLOSE_BRACKET = 93;
	var C_LESSTHAN = 60;
	var C_BANG = 33;
	var C_BACKSLASH = 92;
	var C_AMPERSAND = 38;
	var C_OPEN_PAREN = 40;
	var C_CLOSE_PAREN = 41;
	var C_COLON = 58;
	var C_SINGLEQUOTE = 39;
	var C_DOUBLEQUOTE = 34;
	
	// Some regexps used in inline parser:
	
	var ESCAPABLE = common.ESCAPABLE;
	var ESCAPED_CHAR = '\\\\' + ESCAPABLE;
	var REG_CHAR = '[^\\\\()\\x00-\\x20]';
	var IN_PARENS_NOSP = '\\((' + REG_CHAR + '|' + ESCAPED_CHAR + '|\\\\)*\\)';
	
	var ENTITY = common.ENTITY;
	var reHtmlTag = common.reHtmlTag;
	
	var rePunctuation = new RegExp(/^[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/);
	
	var reLinkTitle = new RegExp(
	    '^(?:"(' + ESCAPED_CHAR + '|[^"\\x00])*"' +
	        '|' +
	        '\'(' + ESCAPED_CHAR + '|[^\'\\x00])*\'' +
	        '|' +
	        '\\((' + ESCAPED_CHAR + '|[^)\\x00])*\\))');
	
	var reLinkDestinationBraces = new RegExp(
	    '^(?:[<](?:[^<>\\n\\\\\\x00]' + '|' + ESCAPED_CHAR + '|' + '\\\\)*[>])');
	
	var reLinkDestination = new RegExp(
	    '^(?:' + REG_CHAR + '+|' + ESCAPED_CHAR + '|\\\\|' + IN_PARENS_NOSP + ')*');
	
	var reEscapable = new RegExp('^' + ESCAPABLE);
	
	var reEntityHere = new RegExp('^' + ENTITY, 'i');
	
	var reTicks = /`+/;
	
	var reTicksHere = /^`+/;
	
	var reEllipses = /\.\.\./g;
	
	var reDash = /--+/g;
	
	var reEmailAutolink = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	
	var reAutolink = /^<(?:coap|doi|javascript|aaa|aaas|about|acap|cap|cid|crid|data|dav|dict|dns|file|ftp|geo|go|gopher|h323|http|https|iax|icap|im|imap|info|ipp|iris|iris.beep|iris.xpc|iris.xpcs|iris.lwz|ldap|mailto|mid|msrp|msrps|mtqp|mupdate|news|nfs|ni|nih|nntp|opaquelocktoken|pop|pres|rtsp|service|session|shttp|sieve|sip|sips|sms|snmp|soap.beep|soap.beeps|tag|tel|telnet|tftp|thismessage|tn3270|tip|tv|urn|vemmi|ws|wss|xcon|xcon-userid|xmlrpc.beep|xmlrpc.beeps|xmpp|z39.50r|z39.50s|adiumxtra|afp|afs|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|chrome|chrome-extension|com-eventbrite-attendee|content|cvs|dlna-playsingle|dlna-playcontainer|dtn|dvb|ed2k|facetime|feed|finger|fish|gg|git|gizmoproject|gtalk|hcp|icon|ipn|irc|irc6|ircs|itms|jar|jms|keyparc|lastfm|ldaps|magnet|maps|market|message|mms|ms-help|msnim|mumble|mvn|notes|oid|palm|paparazzi|platform|proxy|psyc|query|res|resource|rmi|rsync|rtmp|secondlife|sftp|sgn|skype|smb|soldat|spotify|ssh|steam|svn|teamspeak|things|udp|unreal|ut2004|ventrilo|view-source|webcal|wtai|wyciwyg|xfire|xri|ymsgr):[^<>\x00-\x20]*>/i;
	
	var reSpnl = /^ *(?:\n *)?/;
	
	var reWhitespaceChar = /^\s/;
	
	var reWhitespace = /\s+/g;
	
	var reFinalSpace = / *$/;
	
	var reInitialSpace = /^ */;
	
	var reSpaceAtEndOfLine = /^ *(?:\n|$)/;
	
	var reLinkLabel = new RegExp('^\\[(?:[^\\\\\\[\\]]|' + ESCAPED_CHAR +
	  '|\\\\){0,1000}\\]');
	
	// Matches a string of non-special characters.
	var reMain = /^[^\n`\[\]\\!<&*_'"]+/m;
	
	var text = function(s) {
	    var node = new Node('Text');
	    node._literal = s;
	    return node;
	};
	
	// INLINE PARSER
	
	// These are methods of an InlineParser object, defined below.
	// An InlineParser keeps track of a subject (a string to be
	// parsed) and a position in that subject.
	
	// If re matches at current position in the subject, advance
	// position in subject and return the match; otherwise return null.
	var match = function(re) {
	    var m = re.exec(this.subject.slice(this.pos));
	    if (m === null) {
	        return null;
	    } else {
	        this.pos += m.index + m[0].length;
	        return m[0];
	    }
	};
	
	// Returns the code for the character at the current subject position, or -1
	// there are no more characters.
	var peek = function() {
	    if (this.pos < this.subject.length) {
	        return this.subject.charCodeAt(this.pos);
	    } else {
	        return -1;
	    }
	};
	
	// Parse zero or more space characters, including at most one newline
	var spnl = function() {
	    this.match(reSpnl);
	    return true;
	};
	
	// All of the parsers below try to match something at the current position
	// in the subject.  If they succeed in matching anything, they
	// return the inline matched, advancing the subject.
	
	// Attempt to parse backticks, adding either a backtick code span or a
	// literal sequence of backticks.
	var parseBackticks = function(block) {
	    var ticks = this.match(reTicksHere);
	    if (ticks === null) {
	        return false;
	    }
	    var afterOpenTicks = this.pos;
	    var matched;
	    var node;
	    while ((matched = this.match(reTicks)) !== null) {
	        if (matched === ticks) {
	            node = new Node('Code');
	            node._literal = this.subject.slice(afterOpenTicks,
	                                        this.pos - ticks.length)
	                          .trim().replace(reWhitespace, ' ');
	            block.appendChild(node);
	            return true;
	        }
	    }
	    // If we got here, we didn't match a closing backtick sequence.
	    this.pos = afterOpenTicks;
	    block.appendChild(text(ticks));
	    return true;
	};
	
	// Parse a backslash-escaped special character, adding either the escaped
	// character, a hard line break (if the backslash is followed by a newline),
	// or a literal backslash to the block's children.  Assumes current character
	// is a backslash.
	var parseBackslash = function(block) {
	    var subj = this.subject;
	    var node;
	    this.pos += 1;
	    if (this.peek() === C_NEWLINE) {
	        this.pos += 1;
	        node = new Node('Hardbreak');
	        block.appendChild(node);
	    } else if (reEscapable.test(subj.charAt(this.pos))) {
	        block.appendChild(text(subj.charAt(this.pos)));
	        this.pos += 1;
	    } else {
	        block.appendChild(text('\\'));
	    }
	    return true;
	};
	
	// Attempt to parse an autolink (URL or email in pointy brackets).
	var parseAutolink = function(block) {
	    var m;
	    var dest;
	    var node;
	    if ((m = this.match(reEmailAutolink))) {
	        dest = m.slice(1, m.length - 1);
	        node = new Node('Link');
	        node._destination = normalizeURI('mailto:' + dest);
	        node._title = '';
	        node.appendChild(text(dest));
	        block.appendChild(node);
	        return true;
	    } else if ((m = this.match(reAutolink))) {
	        dest = m.slice(1, m.length - 1);
	        node = new Node('Link');
	        node._destination = normalizeURI(dest);
	        node._title = '';
	        node.appendChild(text(dest));
	        block.appendChild(node);
	        return true;
	    } else {
	        return false;
	    }
	};
	
	// Attempt to parse a raw HTML tag.
	var parseHtmlTag = function(block) {
	    var m = this.match(reHtmlTag);
	    if (m === null) {
	        return false;
	    } else {
	        var node = new Node('Html');
	        node._literal = m;
	        block.appendChild(node);
	        return true;
	    }
	};
	
	// Scan a sequence of characters with code cc, and return information about
	// the number of delimiters and whether they are positioned such that
	// they can open and/or close emphasis or strong emphasis.  A utility
	// function for strong/emph parsing.
	var scanDelims = function(cc) {
	    var numdelims = 0;
	    var char_before, char_after, cc_after;
	    var startpos = this.pos;
	    var left_flanking, right_flanking, can_open, can_close;
	    var after_is_whitespace, after_is_punctuation, before_is_whitespace, before_is_punctuation;
	
	    if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
	        numdelims++;
	        this.pos++;
	    } else {
	        while (this.peek() === cc) {
	            numdelims++;
	            this.pos++;
	        }
	    }
	
	    if (numdelims === 0) {
	        return null;
	    }
	
	    char_before = startpos === 0 ? '\n' : this.subject.charAt(startpos - 1);
	
	    cc_after = this.peek();
	    if (cc_after === -1) {
	        char_after = '\n';
	    } else {
	        char_after = fromCodePoint(cc_after);
	    }
	
	    after_is_whitespace = reWhitespaceChar.test(char_after);
	    after_is_punctuation = rePunctuation.test(char_after);
	    before_is_whitespace = reWhitespaceChar.test(char_before);
	    before_is_punctuation = rePunctuation.test(char_before);
	
	    left_flanking = !after_is_whitespace &&
	            !(after_is_punctuation && !before_is_whitespace && !before_is_punctuation);
	    right_flanking = !before_is_whitespace &&
	            !(before_is_punctuation && !after_is_whitespace && !after_is_punctuation);
	    if (cc === C_UNDERSCORE) {
	        can_open = left_flanking &&
	            (!right_flanking || before_is_punctuation);
	        can_close = right_flanking &&
	            (!left_flanking || after_is_punctuation);
	    } else {
	        can_open = left_flanking;
	        can_close = right_flanking;
	    }
	    this.pos = startpos;
	    return { numdelims: numdelims,
	             can_open: can_open,
	             can_close: can_close };
	};
	
	// Handle a delimiter marker for emphasis or a quote.
	var handleDelim = function(cc, block) {
	    var res = this.scanDelims(cc);
	    if (!res) {
	        return false;
	    }
	    var numdelims = res.numdelims;
	    var startpos = this.pos;
	    var contents;
	
	    this.pos += numdelims;
	    if (cc === C_SINGLEQUOTE) {
	        contents = "\u2019";
	    } else if (cc === C_DOUBLEQUOTE) {
	        contents = "\u201C";
	    } else {
	        contents = this.subject.slice(startpos, this.pos);
	    }
	    var node = text(contents);
	    block.appendChild(node);
	
	    // Add entry to stack for this opener
	    this.delimiters = { cc: cc,
	                        numdelims: numdelims,
	                        node: node,
	                        previous: this.delimiters,
	                        next: null,
	                        can_open: res.can_open,
	                        can_close: res.can_close,
	                        active: true };
	    if (this.delimiters.previous !== null) {
	        this.delimiters.previous.next = this.delimiters;
	    }
	
	    return true;
	
	};
	
	var removeDelimiter = function(delim) {
	    if (delim.previous !== null) {
	        delim.previous.next = delim.next;
	    }
	    if (delim.next === null) {
	        // top of stack
	        this.delimiters = delim.previous;
	    } else {
	        delim.next.previous = delim.previous;
	    }
	};
	
	var removeDelimitersBetween = function(bottom, top) {
	    if (bottom.next !== top) {
	        bottom.next = top;
	        top.previous = bottom;
	    }
	};
	
	var processEmphasis = function(stack_bottom) {
	    var opener, closer, old_closer;
	    var opener_inl, closer_inl;
	    var tempstack;
	    var use_delims;
	    var tmp, next;
	    var opener_found;
	    var openers_bottom = [];
	
	    openers_bottom[C_UNDERSCORE] = stack_bottom;
	    openers_bottom[C_ASTERISK] = stack_bottom;
	    openers_bottom[C_SINGLEQUOTE] = stack_bottom;
	    openers_bottom[C_DOUBLEQUOTE] = stack_bottom;
	
	    // find first closer above stack_bottom:
	    closer = this.delimiters;
	    while (closer !== null && closer.previous !== stack_bottom) {
	        closer = closer.previous;
	    }
	    // move forward, looking for closers, and handling each
	    while (closer !== null) {
	        var closercc = closer.cc;
	        if (!(closer.can_close && (closercc === C_UNDERSCORE ||
	                                   closercc === C_ASTERISK ||
	                                   closercc === C_SINGLEQUOTE ||
	                                   closercc === C_DOUBLEQUOTE))) {
	            closer = closer.next;
	        } else {
	            // found emphasis closer. now look back for first matching opener:
	            opener = closer.previous;
	            opener_found = false;
	            while (opener !== null && opener !== stack_bottom &&
	                   opener !== openers_bottom[closercc]) {
	                if (opener.cc === closer.cc && opener.can_open) {
	                    opener_found = true;
	                    break;
	                }
	                opener = opener.previous;
	            }
	            old_closer = closer;
	
	            if (closercc === C_ASTERISK || closercc === C_UNDERSCORE) {
	                if (!opener_found) {
	                    closer = closer.next;
	                } else {
	                    // calculate actual number of delimiters used from closer
	                    if (closer.numdelims < 3 || opener.numdelims < 3) {
	                        use_delims = closer.numdelims <= opener.numdelims ?
	                            closer.numdelims : opener.numdelims;
	                    } else {
	                        use_delims = closer.numdelims % 2 === 0 ? 2 : 1;
	                    }
	
	                    opener_inl = opener.node;
	                    closer_inl = closer.node;
	
	                    // remove used delimiters from stack elts and inlines
	                    opener.numdelims -= use_delims;
	                    closer.numdelims -= use_delims;
	                    opener_inl._literal =
	                        opener_inl._literal.slice(0,
	                                                  opener_inl._literal.length - use_delims);
	                    closer_inl._literal =
	                        closer_inl._literal.slice(0,
	                                                  closer_inl._literal.length - use_delims);
	
	                    // build contents for new emph element
	                    var emph = new Node(use_delims === 1 ? 'Emph' : 'Strong');
	
	                    tmp = opener_inl._next;
	                    while (tmp && tmp !== closer_inl) {
	                        next = tmp._next;
	                        tmp.unlink();
	                        emph.appendChild(tmp);
	                        tmp = next;
	                    }
	
	                    opener_inl.insertAfter(emph);
	
	                    // remove elts between opener and closer in delimiters stack
	                    removeDelimitersBetween(opener, closer);
	
	                    // if opener has 0 delims, remove it and the inline
	                    if (opener.numdelims === 0) {
	                        opener_inl.unlink();
	                        this.removeDelimiter(opener);
	                    }
	
	                    if (closer.numdelims === 0) {
	                        closer_inl.unlink();
	                        tempstack = closer.next;
	                        this.removeDelimiter(closer);
	                        closer = tempstack;
	                    }
	
	                }
	
	            } else if (closercc === C_SINGLEQUOTE) {
	                closer.node._literal = "\u2019";
	                if (opener_found) {
	                    opener.node._literal = "\u2018";
	                }
	                closer = closer.next;
	
	            } else if (closercc === C_DOUBLEQUOTE) {
	                closer.node._literal = "\u201D";
	                if (opener_found) {
	                    opener.node.literal = "\u201C";
	                }
	                closer = closer.next;
	
	            }
	            if (!opener_found) {
	                // Set lower bound for future searches for openers:
	                openers_bottom[closercc] = old_closer.previous;
	                if (!old_closer.can_open) {
	                    // We can remove a closer that can't be an opener,
	                    // once we've seen there's no matching opener:
	                    this.removeDelimiter(old_closer);
	                }
	            }
	        }
	
	    }
	
	    // remove all delimiters
	    while (this.delimiters !== null && this.delimiters !== stack_bottom) {
	        this.removeDelimiter(this.delimiters);
	    }
	};
	
	// Attempt to parse link title (sans quotes), returning the string
	// or null if no match.
	var parseLinkTitle = function() {
	    var title = this.match(reLinkTitle);
	    if (title === null) {
	        return null;
	    } else {
	        // chop off quotes from title and unescape:
	        return unescapeString(title.substr(1, title.length - 2));
	    }
	};
	
	// Attempt to parse link destination, returning the string or
	// null if no match.
	var parseLinkDestination = function() {
	    var res = this.match(reLinkDestinationBraces);
	    if (res === null) {
	        res = this.match(reLinkDestination);
	        if (res === null) {
	            return null;
	        } else {
	            return normalizeURI(unescapeString(res));
	        }
	    } else {  // chop off surrounding <..>:
	        return normalizeURI(unescapeString(res.substr(1, res.length - 2)));
	    }
	};
	
	// Attempt to parse a link label, returning number of characters parsed.
	var parseLinkLabel = function() {
	    var m = this.match(reLinkLabel);
	    if (m === null || m.length > 1001) {
	        return 0;
	    } else {
	        return m.length;
	    }
	};
	
	// Add open bracket to delimiter stack and add a text node to block's children.
	var parseOpenBracket = function(block) {
	    var startpos = this.pos;
	    this.pos += 1;
	
	    var node = text('[');
	    block.appendChild(node);
	
	    // Add entry to stack for this opener
	    this.delimiters = { cc: C_OPEN_BRACKET,
	                        numdelims: 1,
	                        node: node,
	                        previous: this.delimiters,
	                        next: null,
	                        can_open: true,
	                        can_close: false,
	                        index: startpos,
	                        active: true };
	    if (this.delimiters.previous !== null) {
	        this.delimiters.previous.next = this.delimiters;
	    }
	
	    return true;
	
	};
	
	// IF next character is [, and ! delimiter to delimiter stack and
	// add a text node to block's children.  Otherwise just add a text node.
	var parseBang = function(block) {
	    var startpos = this.pos;
	    this.pos += 1;
	    if (this.peek() === C_OPEN_BRACKET) {
	        this.pos += 1;
	
	        var node = text('![');
	        block.appendChild(node);
	
	        // Add entry to stack for this opener
	        this.delimiters = { cc: C_BANG,
	                            numdelims: 1,
	                            node: node,
	                            previous: this.delimiters,
	                            next: null,
	                            can_open: true,
	                            can_close: false,
	                            index: startpos + 1,
	                            active: true };
	        if (this.delimiters.previous !== null) {
	            this.delimiters.previous.next = this.delimiters;
	        }
	    } else {
	        block.appendChild(text('!'));
	    }
	    return true;
	};
	
	// Try to match close bracket against an opening in the delimiter
	// stack.  Add either a link or image, or a plain [ character,
	// to block's children.  If there is a matching delimiter,
	// remove it from the delimiter stack.
	var parseCloseBracket = function(block) {
	    var startpos;
	    var is_image;
	    var dest;
	    var title;
	    var matched = false;
	    var reflabel;
	    var opener;
	
	    this.pos += 1;
	    startpos = this.pos;
	
	    // look through stack of delimiters for a [ or ![
	    opener = this.delimiters;
	
	    while (opener !== null) {
	        if (opener.cc === C_OPEN_BRACKET || opener.cc === C_BANG) {
	            break;
	        }
	        opener = opener.previous;
	    }
	
	    if (opener === null) {
	        // no matched opener, just return a literal
	        block.appendChild(text(']'));
	        return true;
	    }
	
	    if (!opener.active) {
	        // no matched opener, just return a literal
	        block.appendChild(text(']'));
	        // take opener off emphasis stack
	        this.removeDelimiter(opener);
	        return true;
	    }
	
	    // If we got here, open is a potential opener
	    is_image = opener.cc === C_BANG;
	
	    // Check to see if we have a link/image
	
	    // Inline link?
	    if (this.peek() === C_OPEN_PAREN) {
	        this.pos++;
	        if (this.spnl() &&
	            ((dest = this.parseLinkDestination()) !== null) &&
	            this.spnl() &&
	            // make sure there's a space before the title:
	            (reWhitespaceChar.test(this.subject.charAt(this.pos - 1)) &&
	             (title = this.parseLinkTitle()) || true) &&
	            this.spnl() &&
	            this.peek() === C_CLOSE_PAREN) {
	            this.pos += 1;
	            matched = true;
	        }
	    } else {
	
	        // Next, see if there's a link label
	        var savepos = this.pos;
	        this.spnl();
	        var beforelabel = this.pos;
	        var n = this.parseLinkLabel();
	        if (n === 0 || n === 2) {
	            // empty or missing second label
	            reflabel = this.subject.slice(opener.index, startpos);
	        } else {
	            reflabel = this.subject.slice(beforelabel, beforelabel + n);
	        }
	        if (n === 0) {
	            // If shortcut reference link, rewind before spaces we skipped.
	            this.pos = savepos;
	        }
	
	        // lookup rawlabel in refmap
	        var link = this.refmap[normalizeReference(reflabel)];
	        if (link) {
	            dest = link.destination;
	            title = link.title;
	            matched = true;
	        }
	    }
	
	    if (matched) {
	        var node = new Node(is_image ? 'Image' : 'Link');
	        node._destination = dest;
	        node._title = title || '';
	
	        var tmp, next;
	        tmp = opener.node._next;
	        while (tmp) {
	            next = tmp._next;
	            tmp.unlink();
	            node.appendChild(tmp);
	            tmp = next;
	        }
	        block.appendChild(node);
	        this.processEmphasis(opener.previous);
	
	        opener.node.unlink();
	
	        // processEmphasis will remove this and later delimiters.
	        // Now, for a link, we also deactivate earlier link openers.
	        // (no links in links)
	        if (!is_image) {
	          opener = this.delimiters;
	          while (opener !== null) {
	            if (opener.cc === C_OPEN_BRACKET) {
	                opener.active = false; // deactivate this opener
	            }
	            opener = opener.previous;
	          }
	        }
	
	        return true;
	
	    } else { // no match
	
	        this.removeDelimiter(opener);  // remove this opener from stack
	        this.pos = startpos;
	        block.appendChild(text(']'));
	        return true;
	    }
	
	};
	
	// Attempt to parse an entity.
	var parseEntity = function(block) {
	    var m;
	    if ((m = this.match(reEntityHere))) {
	        block.appendChild(text(decodeHTML(m)));
	        return true;
	    } else {
	        return false;
	    }
	};
	
	// Parse a run of ordinary characters, or a single character with
	// a special meaning in markdown, as a plain string.
	var parseString = function(block) {
	    var m;
	    if ((m = this.match(reMain))) {
	        if (this.options.smart) {
	            block.appendChild(text(
	                m.replace(reEllipses, "\u2026")
	                    .replace(reDash, function(chars) {
	                        var enCount = 0;
	                        var emCount = 0;
	                        if (chars.length % 3 === 0) { // If divisible by 3, use all em dashes
	                            emCount = chars.length / 3;
	                        } else if (chars.length % 2 === 0) { // If divisible by 2, use all en dashes
	                            enCount = chars.length / 2;
	                        } else if (chars.length % 3 === 2) { // If 2 extra dashes, use en dash for last 2; em dashes for rest
	                            enCount = 1;
	                            emCount = (chars.length - 2) / 3;
	                        } else { // Use en dashes for last 4 hyphens; em dashes for rest
	                            enCount = 2;
	                            emCount = (chars.length - 4) / 3;
	                        }
	                        return "\u2014".repeat(emCount) + "\u2013".repeat(enCount);
	                    })));
	        } else {
	            block.appendChild(text(m));
	        }
	        return true;
	    } else {
	        return false;
	    }
	};
	
	// Parse a newline.  If it was preceded by two spaces, return a hard
	// line break; otherwise a soft line break.
	var parseNewline = function(block) {
	    this.pos += 1; // assume we're at a \n
	    // check previous node for trailing spaces
	    var lastc = block._lastChild;
	    if (lastc && lastc.type === 'Text' && lastc._literal[lastc._literal.length - 1] === ' ') {
	        var hardbreak = lastc._literal[lastc._literal.length - 2] === ' ';
	        lastc._literal = lastc._literal.replace(reFinalSpace, '');
	        block.appendChild(new Node(hardbreak ? 'Hardbreak' : 'Softbreak'));
	    } else {
	        block.appendChild(new Node('Softbreak'));
	    }
	    this.match(reInitialSpace); // gobble leading spaces in next line
	    return true;
	};
	
	// Attempt to parse a link reference, modifying refmap.
	var parseReference = function(s, refmap) {
	    this.subject = s;
	    this.pos = 0;
	    var rawlabel;
	    var dest;
	    var title;
	    var matchChars;
	    var startpos = this.pos;
	
	    // label:
	    matchChars = this.parseLinkLabel();
	    if (matchChars === 0) {
	        return 0;
	    } else {
	        rawlabel = this.subject.substr(0, matchChars);
	    }
	
	    // colon:
	    if (this.peek() === C_COLON) {
	        this.pos++;
	    } else {
	        this.pos = startpos;
	        return 0;
	    }
	
	    //  link url
	    this.spnl();
	
	    dest = this.parseLinkDestination();
	    if (dest === null || dest.length === 0) {
	        this.pos = startpos;
	        return 0;
	    }
	
	    var beforetitle = this.pos;
	    this.spnl();
	    title = this.parseLinkTitle();
	    if (title === null) {
	        title = '';
	        // rewind before spaces
	        this.pos = beforetitle;
	    }
	
	    // make sure we're at line end:
	    var atLineEnd = true;
	    if (this.match(reSpaceAtEndOfLine) === null) {
	        if (title === '') {
	            atLineEnd = false;
	        } else {
	            // the potential title we found is not at the line end,
	            // but it could still be a legal link reference if we
	            // discard the title
	            title = '';
	            // rewind before spaces
	            this.pos = beforetitle;
	            // and instead check if the link URL is at the line end
	            atLineEnd = this.match(reSpaceAtEndOfLine) !== null;
	        }
	    }
	
	    if (!atLineEnd) {
	        this.pos = startpos;
	        return 0;
	    }
	
	    var normlabel = normalizeReference(rawlabel);
	    if (normlabel === '') {
	        // label must contain non-whitespace characters
	        this.pos = startpos;
	        return 0;
	    }
	
	    if (!refmap[normlabel]) {
	        refmap[normlabel] = { destination: dest, title: title };
	    }
	    return this.pos - startpos;
	};
	
	// Parse the next inline element in subject, advancing subject position.
	// On success, add the result to block's children and return true.
	// On failure, return false.
	var parseInline = function(block) {
	    var res = false;
	    var c = this.peek();
	    if (c === -1) {
	        return false;
	    }
	    switch(c) {
	    case C_NEWLINE:
	        res = this.parseNewline(block);
	        break;
	    case C_BACKSLASH:
	        res = this.parseBackslash(block);
	        break;
	    case C_BACKTICK:
	        res = this.parseBackticks(block);
	        break;
	    case C_ASTERISK:
	    case C_UNDERSCORE:
	        res = this.handleDelim(c, block);
	        break;
	    case C_SINGLEQUOTE:
	    case C_DOUBLEQUOTE:
	        res = this.options.smart && this.handleDelim(c, block);
	        break;
	    case C_OPEN_BRACKET:
	        res = this.parseOpenBracket(block);
	        break;
	    case C_BANG:
	        res = this.parseBang(block);
	        break;
	    case C_CLOSE_BRACKET:
	        res = this.parseCloseBracket(block);
	        break;
	    case C_LESSTHAN:
	        res = this.parseAutolink(block) || this.parseHtmlTag(block);
	        break;
	    case C_AMPERSAND:
	        res = this.parseEntity(block);
	        break;
	    default:
	        res = this.parseString(block);
	        break;
	    }
	    if (!res) {
	        this.pos += 1;
	        block.appendChild(text(fromCodePoint(c)));
	    }
	
	    return true;
	};
	
	// Parse string content in block into inline children,
	// using refmap to resolve references.
	var parseInlines = function(block) {
	    this.subject = block._string_content.trim();
	    this.pos = 0;
	    this.delimiters = null;
	    while (this.parseInline(block)) {
	    }
	    block._string_content = null; // allow raw string to be garbage collected
	    this.processEmphasis(null);
	};
	
	// The InlineParser object.
	function InlineParser(options){
	    return {
	        subject: '',
	        delimiters: null,  // used by handleDelim method
	        pos: 0,
	        refmap: {},
	        match: match,
	        peek: peek,
	        spnl: spnl,
	        parseBackticks: parseBackticks,
	        parseBackslash: parseBackslash,
	        parseAutolink: parseAutolink,
	        parseHtmlTag: parseHtmlTag,
	        scanDelims: scanDelims,
	        handleDelim: handleDelim,
	        parseLinkTitle: parseLinkTitle,
	        parseLinkDestination: parseLinkDestination,
	        parseLinkLabel: parseLinkLabel,
	        parseOpenBracket: parseOpenBracket,
	        parseCloseBracket: parseCloseBracket,
	        parseBang: parseBang,
	        parseEntity: parseEntity,
	        parseString: parseString,
	        parseNewline: parseNewline,
	        parseReference: parseReference,
	        parseInline: parseInline,
	        processEmphasis: processEmphasis,
	        removeDelimiter: removeDelimiter,
	        options: options || {},
	        parse: parseInlines
	    };
	}
	
	module.exports = InlineParser;


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	// derived from https://github.com/mathiasbynens/String.fromCodePoint
	/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
	if (String.fromCodePoint) {
	    module.exports = function (_) {
	        try {
	            return String.fromCodePoint(_);
	        } catch (e) {
	            if (e instanceof RangeError) {
	                return String.fromCharCode(0xFFFD);
	            }
	            throw e;
	        }
	    };
	
	} else {
	
	  var stringFromCharCode = String.fromCharCode;
	  var floor = Math.floor;
	  var fromCodePoint = function() {
	      var MAX_SIZE = 0x4000;
	      var codeUnits = [];
	      var highSurrogate;
	      var lowSurrogate;
	      var index = -1;
	      var length = arguments.length;
	      if (!length) {
	          return '';
	      }
	      var result = '';
	      while (++index < length) {
	          var codePoint = Number(arguments[index]);
	          if (
	              !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	                  codePoint < 0 || // not a valid Unicode code point
	                  codePoint > 0x10FFFF || // not a valid Unicode code point
	                  floor(codePoint) !== codePoint // not an integer
	          ) {
	              return String.fromCharCode(0xFFFD);
	          }
	          if (codePoint <= 0xFFFF) { // BMP code point
	              codeUnits.push(codePoint);
	          } else { // Astral code point; split in surrogate halves
	              // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	              codePoint -= 0x10000;
	              highSurrogate = (codePoint >> 10) + 0xD800;
	              lowSurrogate = (codePoint % 0x400) + 0xDC00;
	              codeUnits.push(highSurrogate, lowSurrogate);
	          }
	          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	              result += stringFromCharCode.apply(null, codeUnits);
	              codeUnits.length = 0;
	          }
	      }
	      return result;
	  };
	  module.exports = fromCodePoint;
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	/* The bulk of this code derives from https://github.com/dmoscrop/fold-case
	But in addition to case-folding, we also normalize whitespace.
	
	fold-case is Copyright Mathias Bynens <https://mathiasbynens.be/>
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
	
	/*eslint-disable  key-spacing, comma-spacing */
	
	var regex = /[ \t\r\n]+|[A-Z\xB5\xC0-\xD6\xD8-\xDF\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u0149\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u017F\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C5\u01C7\u01C8\u01CA\u01CB\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F0-\u01F2\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0345\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03AB\u03B0\u03C2\u03CF-\u03D1\u03D5\u03D6\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F0\u03F1\u03F4\u03F5\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u0587\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E96-\u1E9B\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F50\u1F52\u1F54\u1F56\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1F80-\u1FAF\u1FB2-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD2\u1FD3\u1FD6-\u1FDB\u1FE2-\u1FE4\u1FE6-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A\u212B\u2132\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0\uA7B1\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27]|\uD806[\uDCA0-\uDCBF]/g;
	
	var map = {'A':'a','B':'b','C':'c','D':'d','E':'e','F':'f','G':'g','H':'h','I':'i','J':'j','K':'k','L':'l','M':'m','N':'n','O':'o','P':'p','Q':'q','R':'r','S':'s','T':'t','U':'u','V':'v','W':'w','X':'x','Y':'y','Z':'z','\xB5':'\u03BC','\xC0':'\xE0','\xC1':'\xE1','\xC2':'\xE2','\xC3':'\xE3','\xC4':'\xE4','\xC5':'\xE5','\xC6':'\xE6','\xC7':'\xE7','\xC8':'\xE8','\xC9':'\xE9','\xCA':'\xEA','\xCB':'\xEB','\xCC':'\xEC','\xCD':'\xED','\xCE':'\xEE','\xCF':'\xEF','\xD0':'\xF0','\xD1':'\xF1','\xD2':'\xF2','\xD3':'\xF3','\xD4':'\xF4','\xD5':'\xF5','\xD6':'\xF6','\xD8':'\xF8','\xD9':'\xF9','\xDA':'\xFA','\xDB':'\xFB','\xDC':'\xFC','\xDD':'\xFD','\xDE':'\xFE','\u0100':'\u0101','\u0102':'\u0103','\u0104':'\u0105','\u0106':'\u0107','\u0108':'\u0109','\u010A':'\u010B','\u010C':'\u010D','\u010E':'\u010F','\u0110':'\u0111','\u0112':'\u0113','\u0114':'\u0115','\u0116':'\u0117','\u0118':'\u0119','\u011A':'\u011B','\u011C':'\u011D','\u011E':'\u011F','\u0120':'\u0121','\u0122':'\u0123','\u0124':'\u0125','\u0126':'\u0127','\u0128':'\u0129','\u012A':'\u012B','\u012C':'\u012D','\u012E':'\u012F','\u0132':'\u0133','\u0134':'\u0135','\u0136':'\u0137','\u0139':'\u013A','\u013B':'\u013C','\u013D':'\u013E','\u013F':'\u0140','\u0141':'\u0142','\u0143':'\u0144','\u0145':'\u0146','\u0147':'\u0148','\u014A':'\u014B','\u014C':'\u014D','\u014E':'\u014F','\u0150':'\u0151','\u0152':'\u0153','\u0154':'\u0155','\u0156':'\u0157','\u0158':'\u0159','\u015A':'\u015B','\u015C':'\u015D','\u015E':'\u015F','\u0160':'\u0161','\u0162':'\u0163','\u0164':'\u0165','\u0166':'\u0167','\u0168':'\u0169','\u016A':'\u016B','\u016C':'\u016D','\u016E':'\u016F','\u0170':'\u0171','\u0172':'\u0173','\u0174':'\u0175','\u0176':'\u0177','\u0178':'\xFF','\u0179':'\u017A','\u017B':'\u017C','\u017D':'\u017E','\u017F':'s','\u0181':'\u0253','\u0182':'\u0183','\u0184':'\u0185','\u0186':'\u0254','\u0187':'\u0188','\u0189':'\u0256','\u018A':'\u0257','\u018B':'\u018C','\u018E':'\u01DD','\u018F':'\u0259','\u0190':'\u025B','\u0191':'\u0192','\u0193':'\u0260','\u0194':'\u0263','\u0196':'\u0269','\u0197':'\u0268','\u0198':'\u0199','\u019C':'\u026F','\u019D':'\u0272','\u019F':'\u0275','\u01A0':'\u01A1','\u01A2':'\u01A3','\u01A4':'\u01A5','\u01A6':'\u0280','\u01A7':'\u01A8','\u01A9':'\u0283','\u01AC':'\u01AD','\u01AE':'\u0288','\u01AF':'\u01B0','\u01B1':'\u028A','\u01B2':'\u028B','\u01B3':'\u01B4','\u01B5':'\u01B6','\u01B7':'\u0292','\u01B8':'\u01B9','\u01BC':'\u01BD','\u01C4':'\u01C6','\u01C5':'\u01C6','\u01C7':'\u01C9','\u01C8':'\u01C9','\u01CA':'\u01CC','\u01CB':'\u01CC','\u01CD':'\u01CE','\u01CF':'\u01D0','\u01D1':'\u01D2','\u01D3':'\u01D4','\u01D5':'\u01D6','\u01D7':'\u01D8','\u01D9':'\u01DA','\u01DB':'\u01DC','\u01DE':'\u01DF','\u01E0':'\u01E1','\u01E2':'\u01E3','\u01E4':'\u01E5','\u01E6':'\u01E7','\u01E8':'\u01E9','\u01EA':'\u01EB','\u01EC':'\u01ED','\u01EE':'\u01EF','\u01F1':'\u01F3','\u01F2':'\u01F3','\u01F4':'\u01F5','\u01F6':'\u0195','\u01F7':'\u01BF','\u01F8':'\u01F9','\u01FA':'\u01FB','\u01FC':'\u01FD','\u01FE':'\u01FF','\u0200':'\u0201','\u0202':'\u0203','\u0204':'\u0205','\u0206':'\u0207','\u0208':'\u0209','\u020A':'\u020B','\u020C':'\u020D','\u020E':'\u020F','\u0210':'\u0211','\u0212':'\u0213','\u0214':'\u0215','\u0216':'\u0217','\u0218':'\u0219','\u021A':'\u021B','\u021C':'\u021D','\u021E':'\u021F','\u0220':'\u019E','\u0222':'\u0223','\u0224':'\u0225','\u0226':'\u0227','\u0228':'\u0229','\u022A':'\u022B','\u022C':'\u022D','\u022E':'\u022F','\u0230':'\u0231','\u0232':'\u0233','\u023A':'\u2C65','\u023B':'\u023C','\u023D':'\u019A','\u023E':'\u2C66','\u0241':'\u0242','\u0243':'\u0180','\u0244':'\u0289','\u0245':'\u028C','\u0246':'\u0247','\u0248':'\u0249','\u024A':'\u024B','\u024C':'\u024D','\u024E':'\u024F','\u0345':'\u03B9','\u0370':'\u0371','\u0372':'\u0373','\u0376':'\u0377','\u037F':'\u03F3','\u0386':'\u03AC','\u0388':'\u03AD','\u0389':'\u03AE','\u038A':'\u03AF','\u038C':'\u03CC','\u038E':'\u03CD','\u038F':'\u03CE','\u0391':'\u03B1','\u0392':'\u03B2','\u0393':'\u03B3','\u0394':'\u03B4','\u0395':'\u03B5','\u0396':'\u03B6','\u0397':'\u03B7','\u0398':'\u03B8','\u0399':'\u03B9','\u039A':'\u03BA','\u039B':'\u03BB','\u039C':'\u03BC','\u039D':'\u03BD','\u039E':'\u03BE','\u039F':'\u03BF','\u03A0':'\u03C0','\u03A1':'\u03C1','\u03A3':'\u03C3','\u03A4':'\u03C4','\u03A5':'\u03C5','\u03A6':'\u03C6','\u03A7':'\u03C7','\u03A8':'\u03C8','\u03A9':'\u03C9','\u03AA':'\u03CA','\u03AB':'\u03CB','\u03C2':'\u03C3','\u03CF':'\u03D7','\u03D0':'\u03B2','\u03D1':'\u03B8','\u03D5':'\u03C6','\u03D6':'\u03C0','\u03D8':'\u03D9','\u03DA':'\u03DB','\u03DC':'\u03DD','\u03DE':'\u03DF','\u03E0':'\u03E1','\u03E2':'\u03E3','\u03E4':'\u03E5','\u03E6':'\u03E7','\u03E8':'\u03E9','\u03EA':'\u03EB','\u03EC':'\u03ED','\u03EE':'\u03EF','\u03F0':'\u03BA','\u03F1':'\u03C1','\u03F4':'\u03B8','\u03F5':'\u03B5','\u03F7':'\u03F8','\u03F9':'\u03F2','\u03FA':'\u03FB','\u03FD':'\u037B','\u03FE':'\u037C','\u03FF':'\u037D','\u0400':'\u0450','\u0401':'\u0451','\u0402':'\u0452','\u0403':'\u0453','\u0404':'\u0454','\u0405':'\u0455','\u0406':'\u0456','\u0407':'\u0457','\u0408':'\u0458','\u0409':'\u0459','\u040A':'\u045A','\u040B':'\u045B','\u040C':'\u045C','\u040D':'\u045D','\u040E':'\u045E','\u040F':'\u045F','\u0410':'\u0430','\u0411':'\u0431','\u0412':'\u0432','\u0413':'\u0433','\u0414':'\u0434','\u0415':'\u0435','\u0416':'\u0436','\u0417':'\u0437','\u0418':'\u0438','\u0419':'\u0439','\u041A':'\u043A','\u041B':'\u043B','\u041C':'\u043C','\u041D':'\u043D','\u041E':'\u043E','\u041F':'\u043F','\u0420':'\u0440','\u0421':'\u0441','\u0422':'\u0442','\u0423':'\u0443','\u0424':'\u0444','\u0425':'\u0445','\u0426':'\u0446','\u0427':'\u0447','\u0428':'\u0448','\u0429':'\u0449','\u042A':'\u044A','\u042B':'\u044B','\u042C':'\u044C','\u042D':'\u044D','\u042E':'\u044E','\u042F':'\u044F','\u0460':'\u0461','\u0462':'\u0463','\u0464':'\u0465','\u0466':'\u0467','\u0468':'\u0469','\u046A':'\u046B','\u046C':'\u046D','\u046E':'\u046F','\u0470':'\u0471','\u0472':'\u0473','\u0474':'\u0475','\u0476':'\u0477','\u0478':'\u0479','\u047A':'\u047B','\u047C':'\u047D','\u047E':'\u047F','\u0480':'\u0481','\u048A':'\u048B','\u048C':'\u048D','\u048E':'\u048F','\u0490':'\u0491','\u0492':'\u0493','\u0494':'\u0495','\u0496':'\u0497','\u0498':'\u0499','\u049A':'\u049B','\u049C':'\u049D','\u049E':'\u049F','\u04A0':'\u04A1','\u04A2':'\u04A3','\u04A4':'\u04A5','\u04A6':'\u04A7','\u04A8':'\u04A9','\u04AA':'\u04AB','\u04AC':'\u04AD','\u04AE':'\u04AF','\u04B0':'\u04B1','\u04B2':'\u04B3','\u04B4':'\u04B5','\u04B6':'\u04B7','\u04B8':'\u04B9','\u04BA':'\u04BB','\u04BC':'\u04BD','\u04BE':'\u04BF','\u04C0':'\u04CF','\u04C1':'\u04C2','\u04C3':'\u04C4','\u04C5':'\u04C6','\u04C7':'\u04C8','\u04C9':'\u04CA','\u04CB':'\u04CC','\u04CD':'\u04CE','\u04D0':'\u04D1','\u04D2':'\u04D3','\u04D4':'\u04D5','\u04D6':'\u04D7','\u04D8':'\u04D9','\u04DA':'\u04DB','\u04DC':'\u04DD','\u04DE':'\u04DF','\u04E0':'\u04E1','\u04E2':'\u04E3','\u04E4':'\u04E5','\u04E6':'\u04E7','\u04E8':'\u04E9','\u04EA':'\u04EB','\u04EC':'\u04ED','\u04EE':'\u04EF','\u04F0':'\u04F1','\u04F2':'\u04F3','\u04F4':'\u04F5','\u04F6':'\u04F7','\u04F8':'\u04F9','\u04FA':'\u04FB','\u04FC':'\u04FD','\u04FE':'\u04FF','\u0500':'\u0501','\u0502':'\u0503','\u0504':'\u0505','\u0506':'\u0507','\u0508':'\u0509','\u050A':'\u050B','\u050C':'\u050D','\u050E':'\u050F','\u0510':'\u0511','\u0512':'\u0513','\u0514':'\u0515','\u0516':'\u0517','\u0518':'\u0519','\u051A':'\u051B','\u051C':'\u051D','\u051E':'\u051F','\u0520':'\u0521','\u0522':'\u0523','\u0524':'\u0525','\u0526':'\u0527','\u0528':'\u0529','\u052A':'\u052B','\u052C':'\u052D','\u052E':'\u052F','\u0531':'\u0561','\u0532':'\u0562','\u0533':'\u0563','\u0534':'\u0564','\u0535':'\u0565','\u0536':'\u0566','\u0537':'\u0567','\u0538':'\u0568','\u0539':'\u0569','\u053A':'\u056A','\u053B':'\u056B','\u053C':'\u056C','\u053D':'\u056D','\u053E':'\u056E','\u053F':'\u056F','\u0540':'\u0570','\u0541':'\u0571','\u0542':'\u0572','\u0543':'\u0573','\u0544':'\u0574','\u0545':'\u0575','\u0546':'\u0576','\u0547':'\u0577','\u0548':'\u0578','\u0549':'\u0579','\u054A':'\u057A','\u054B':'\u057B','\u054C':'\u057C','\u054D':'\u057D','\u054E':'\u057E','\u054F':'\u057F','\u0550':'\u0580','\u0551':'\u0581','\u0552':'\u0582','\u0553':'\u0583','\u0554':'\u0584','\u0555':'\u0585','\u0556':'\u0586','\u10A0':'\u2D00','\u10A1':'\u2D01','\u10A2':'\u2D02','\u10A3':'\u2D03','\u10A4':'\u2D04','\u10A5':'\u2D05','\u10A6':'\u2D06','\u10A7':'\u2D07','\u10A8':'\u2D08','\u10A9':'\u2D09','\u10AA':'\u2D0A','\u10AB':'\u2D0B','\u10AC':'\u2D0C','\u10AD':'\u2D0D','\u10AE':'\u2D0E','\u10AF':'\u2D0F','\u10B0':'\u2D10','\u10B1':'\u2D11','\u10B2':'\u2D12','\u10B3':'\u2D13','\u10B4':'\u2D14','\u10B5':'\u2D15','\u10B6':'\u2D16','\u10B7':'\u2D17','\u10B8':'\u2D18','\u10B9':'\u2D19','\u10BA':'\u2D1A','\u10BB':'\u2D1B','\u10BC':'\u2D1C','\u10BD':'\u2D1D','\u10BE':'\u2D1E','\u10BF':'\u2D1F','\u10C0':'\u2D20','\u10C1':'\u2D21','\u10C2':'\u2D22','\u10C3':'\u2D23','\u10C4':'\u2D24','\u10C5':'\u2D25','\u10C7':'\u2D27','\u10CD':'\u2D2D','\u1E00':'\u1E01','\u1E02':'\u1E03','\u1E04':'\u1E05','\u1E06':'\u1E07','\u1E08':'\u1E09','\u1E0A':'\u1E0B','\u1E0C':'\u1E0D','\u1E0E':'\u1E0F','\u1E10':'\u1E11','\u1E12':'\u1E13','\u1E14':'\u1E15','\u1E16':'\u1E17','\u1E18':'\u1E19','\u1E1A':'\u1E1B','\u1E1C':'\u1E1D','\u1E1E':'\u1E1F','\u1E20':'\u1E21','\u1E22':'\u1E23','\u1E24':'\u1E25','\u1E26':'\u1E27','\u1E28':'\u1E29','\u1E2A':'\u1E2B','\u1E2C':'\u1E2D','\u1E2E':'\u1E2F','\u1E30':'\u1E31','\u1E32':'\u1E33','\u1E34':'\u1E35','\u1E36':'\u1E37','\u1E38':'\u1E39','\u1E3A':'\u1E3B','\u1E3C':'\u1E3D','\u1E3E':'\u1E3F','\u1E40':'\u1E41','\u1E42':'\u1E43','\u1E44':'\u1E45','\u1E46':'\u1E47','\u1E48':'\u1E49','\u1E4A':'\u1E4B','\u1E4C':'\u1E4D','\u1E4E':'\u1E4F','\u1E50':'\u1E51','\u1E52':'\u1E53','\u1E54':'\u1E55','\u1E56':'\u1E57','\u1E58':'\u1E59','\u1E5A':'\u1E5B','\u1E5C':'\u1E5D','\u1E5E':'\u1E5F','\u1E60':'\u1E61','\u1E62':'\u1E63','\u1E64':'\u1E65','\u1E66':'\u1E67','\u1E68':'\u1E69','\u1E6A':'\u1E6B','\u1E6C':'\u1E6D','\u1E6E':'\u1E6F','\u1E70':'\u1E71','\u1E72':'\u1E73','\u1E74':'\u1E75','\u1E76':'\u1E77','\u1E78':'\u1E79','\u1E7A':'\u1E7B','\u1E7C':'\u1E7D','\u1E7E':'\u1E7F','\u1E80':'\u1E81','\u1E82':'\u1E83','\u1E84':'\u1E85','\u1E86':'\u1E87','\u1E88':'\u1E89','\u1E8A':'\u1E8B','\u1E8C':'\u1E8D','\u1E8E':'\u1E8F','\u1E90':'\u1E91','\u1E92':'\u1E93','\u1E94':'\u1E95','\u1E9B':'\u1E61','\u1EA0':'\u1EA1','\u1EA2':'\u1EA3','\u1EA4':'\u1EA5','\u1EA6':'\u1EA7','\u1EA8':'\u1EA9','\u1EAA':'\u1EAB','\u1EAC':'\u1EAD','\u1EAE':'\u1EAF','\u1EB0':'\u1EB1','\u1EB2':'\u1EB3','\u1EB4':'\u1EB5','\u1EB6':'\u1EB7','\u1EB8':'\u1EB9','\u1EBA':'\u1EBB','\u1EBC':'\u1EBD','\u1EBE':'\u1EBF','\u1EC0':'\u1EC1','\u1EC2':'\u1EC3','\u1EC4':'\u1EC5','\u1EC6':'\u1EC7','\u1EC8':'\u1EC9','\u1ECA':'\u1ECB','\u1ECC':'\u1ECD','\u1ECE':'\u1ECF','\u1ED0':'\u1ED1','\u1ED2':'\u1ED3','\u1ED4':'\u1ED5','\u1ED6':'\u1ED7','\u1ED8':'\u1ED9','\u1EDA':'\u1EDB','\u1EDC':'\u1EDD','\u1EDE':'\u1EDF','\u1EE0':'\u1EE1','\u1EE2':'\u1EE3','\u1EE4':'\u1EE5','\u1EE6':'\u1EE7','\u1EE8':'\u1EE9','\u1EEA':'\u1EEB','\u1EEC':'\u1EED','\u1EEE':'\u1EEF','\u1EF0':'\u1EF1','\u1EF2':'\u1EF3','\u1EF4':'\u1EF5','\u1EF6':'\u1EF7','\u1EF8':'\u1EF9','\u1EFA':'\u1EFB','\u1EFC':'\u1EFD','\u1EFE':'\u1EFF','\u1F08':'\u1F00','\u1F09':'\u1F01','\u1F0A':'\u1F02','\u1F0B':'\u1F03','\u1F0C':'\u1F04','\u1F0D':'\u1F05','\u1F0E':'\u1F06','\u1F0F':'\u1F07','\u1F18':'\u1F10','\u1F19':'\u1F11','\u1F1A':'\u1F12','\u1F1B':'\u1F13','\u1F1C':'\u1F14','\u1F1D':'\u1F15','\u1F28':'\u1F20','\u1F29':'\u1F21','\u1F2A':'\u1F22','\u1F2B':'\u1F23','\u1F2C':'\u1F24','\u1F2D':'\u1F25','\u1F2E':'\u1F26','\u1F2F':'\u1F27','\u1F38':'\u1F30','\u1F39':'\u1F31','\u1F3A':'\u1F32','\u1F3B':'\u1F33','\u1F3C':'\u1F34','\u1F3D':'\u1F35','\u1F3E':'\u1F36','\u1F3F':'\u1F37','\u1F48':'\u1F40','\u1F49':'\u1F41','\u1F4A':'\u1F42','\u1F4B':'\u1F43','\u1F4C':'\u1F44','\u1F4D':'\u1F45','\u1F59':'\u1F51','\u1F5B':'\u1F53','\u1F5D':'\u1F55','\u1F5F':'\u1F57','\u1F68':'\u1F60','\u1F69':'\u1F61','\u1F6A':'\u1F62','\u1F6B':'\u1F63','\u1F6C':'\u1F64','\u1F6D':'\u1F65','\u1F6E':'\u1F66','\u1F6F':'\u1F67','\u1FB8':'\u1FB0','\u1FB9':'\u1FB1','\u1FBA':'\u1F70','\u1FBB':'\u1F71','\u1FBE':'\u03B9','\u1FC8':'\u1F72','\u1FC9':'\u1F73','\u1FCA':'\u1F74','\u1FCB':'\u1F75','\u1FD8':'\u1FD0','\u1FD9':'\u1FD1','\u1FDA':'\u1F76','\u1FDB':'\u1F77','\u1FE8':'\u1FE0','\u1FE9':'\u1FE1','\u1FEA':'\u1F7A','\u1FEB':'\u1F7B','\u1FEC':'\u1FE5','\u1FF8':'\u1F78','\u1FF9':'\u1F79','\u1FFA':'\u1F7C','\u1FFB':'\u1F7D','\u2126':'\u03C9','\u212A':'k','\u212B':'\xE5','\u2132':'\u214E','\u2160':'\u2170','\u2161':'\u2171','\u2162':'\u2172','\u2163':'\u2173','\u2164':'\u2174','\u2165':'\u2175','\u2166':'\u2176','\u2167':'\u2177','\u2168':'\u2178','\u2169':'\u2179','\u216A':'\u217A','\u216B':'\u217B','\u216C':'\u217C','\u216D':'\u217D','\u216E':'\u217E','\u216F':'\u217F','\u2183':'\u2184','\u24B6':'\u24D0','\u24B7':'\u24D1','\u24B8':'\u24D2','\u24B9':'\u24D3','\u24BA':'\u24D4','\u24BB':'\u24D5','\u24BC':'\u24D6','\u24BD':'\u24D7','\u24BE':'\u24D8','\u24BF':'\u24D9','\u24C0':'\u24DA','\u24C1':'\u24DB','\u24C2':'\u24DC','\u24C3':'\u24DD','\u24C4':'\u24DE','\u24C5':'\u24DF','\u24C6':'\u24E0','\u24C7':'\u24E1','\u24C8':'\u24E2','\u24C9':'\u24E3','\u24CA':'\u24E4','\u24CB':'\u24E5','\u24CC':'\u24E6','\u24CD':'\u24E7','\u24CE':'\u24E8','\u24CF':'\u24E9','\u2C00':'\u2C30','\u2C01':'\u2C31','\u2C02':'\u2C32','\u2C03':'\u2C33','\u2C04':'\u2C34','\u2C05':'\u2C35','\u2C06':'\u2C36','\u2C07':'\u2C37','\u2C08':'\u2C38','\u2C09':'\u2C39','\u2C0A':'\u2C3A','\u2C0B':'\u2C3B','\u2C0C':'\u2C3C','\u2C0D':'\u2C3D','\u2C0E':'\u2C3E','\u2C0F':'\u2C3F','\u2C10':'\u2C40','\u2C11':'\u2C41','\u2C12':'\u2C42','\u2C13':'\u2C43','\u2C14':'\u2C44','\u2C15':'\u2C45','\u2C16':'\u2C46','\u2C17':'\u2C47','\u2C18':'\u2C48','\u2C19':'\u2C49','\u2C1A':'\u2C4A','\u2C1B':'\u2C4B','\u2C1C':'\u2C4C','\u2C1D':'\u2C4D','\u2C1E':'\u2C4E','\u2C1F':'\u2C4F','\u2C20':'\u2C50','\u2C21':'\u2C51','\u2C22':'\u2C52','\u2C23':'\u2C53','\u2C24':'\u2C54','\u2C25':'\u2C55','\u2C26':'\u2C56','\u2C27':'\u2C57','\u2C28':'\u2C58','\u2C29':'\u2C59','\u2C2A':'\u2C5A','\u2C2B':'\u2C5B','\u2C2C':'\u2C5C','\u2C2D':'\u2C5D','\u2C2E':'\u2C5E','\u2C60':'\u2C61','\u2C62':'\u026B','\u2C63':'\u1D7D','\u2C64':'\u027D','\u2C67':'\u2C68','\u2C69':'\u2C6A','\u2C6B':'\u2C6C','\u2C6D':'\u0251','\u2C6E':'\u0271','\u2C6F':'\u0250','\u2C70':'\u0252','\u2C72':'\u2C73','\u2C75':'\u2C76','\u2C7E':'\u023F','\u2C7F':'\u0240','\u2C80':'\u2C81','\u2C82':'\u2C83','\u2C84':'\u2C85','\u2C86':'\u2C87','\u2C88':'\u2C89','\u2C8A':'\u2C8B','\u2C8C':'\u2C8D','\u2C8E':'\u2C8F','\u2C90':'\u2C91','\u2C92':'\u2C93','\u2C94':'\u2C95','\u2C96':'\u2C97','\u2C98':'\u2C99','\u2C9A':'\u2C9B','\u2C9C':'\u2C9D','\u2C9E':'\u2C9F','\u2CA0':'\u2CA1','\u2CA2':'\u2CA3','\u2CA4':'\u2CA5','\u2CA6':'\u2CA7','\u2CA8':'\u2CA9','\u2CAA':'\u2CAB','\u2CAC':'\u2CAD','\u2CAE':'\u2CAF','\u2CB0':'\u2CB1','\u2CB2':'\u2CB3','\u2CB4':'\u2CB5','\u2CB6':'\u2CB7','\u2CB8':'\u2CB9','\u2CBA':'\u2CBB','\u2CBC':'\u2CBD','\u2CBE':'\u2CBF','\u2CC0':'\u2CC1','\u2CC2':'\u2CC3','\u2CC4':'\u2CC5','\u2CC6':'\u2CC7','\u2CC8':'\u2CC9','\u2CCA':'\u2CCB','\u2CCC':'\u2CCD','\u2CCE':'\u2CCF','\u2CD0':'\u2CD1','\u2CD2':'\u2CD3','\u2CD4':'\u2CD5','\u2CD6':'\u2CD7','\u2CD8':'\u2CD9','\u2CDA':'\u2CDB','\u2CDC':'\u2CDD','\u2CDE':'\u2CDF','\u2CE0':'\u2CE1','\u2CE2':'\u2CE3','\u2CEB':'\u2CEC','\u2CED':'\u2CEE','\u2CF2':'\u2CF3','\uA640':'\uA641','\uA642':'\uA643','\uA644':'\uA645','\uA646':'\uA647','\uA648':'\uA649','\uA64A':'\uA64B','\uA64C':'\uA64D','\uA64E':'\uA64F','\uA650':'\uA651','\uA652':'\uA653','\uA654':'\uA655','\uA656':'\uA657','\uA658':'\uA659','\uA65A':'\uA65B','\uA65C':'\uA65D','\uA65E':'\uA65F','\uA660':'\uA661','\uA662':'\uA663','\uA664':'\uA665','\uA666':'\uA667','\uA668':'\uA669','\uA66A':'\uA66B','\uA66C':'\uA66D','\uA680':'\uA681','\uA682':'\uA683','\uA684':'\uA685','\uA686':'\uA687','\uA688':'\uA689','\uA68A':'\uA68B','\uA68C':'\uA68D','\uA68E':'\uA68F','\uA690':'\uA691','\uA692':'\uA693','\uA694':'\uA695','\uA696':'\uA697','\uA698':'\uA699','\uA69A':'\uA69B','\uA722':'\uA723','\uA724':'\uA725','\uA726':'\uA727','\uA728':'\uA729','\uA72A':'\uA72B','\uA72C':'\uA72D','\uA72E':'\uA72F','\uA732':'\uA733','\uA734':'\uA735','\uA736':'\uA737','\uA738':'\uA739','\uA73A':'\uA73B','\uA73C':'\uA73D','\uA73E':'\uA73F','\uA740':'\uA741','\uA742':'\uA743','\uA744':'\uA745','\uA746':'\uA747','\uA748':'\uA749','\uA74A':'\uA74B','\uA74C':'\uA74D','\uA74E':'\uA74F','\uA750':'\uA751','\uA752':'\uA753','\uA754':'\uA755','\uA756':'\uA757','\uA758':'\uA759','\uA75A':'\uA75B','\uA75C':'\uA75D','\uA75E':'\uA75F','\uA760':'\uA761','\uA762':'\uA763','\uA764':'\uA765','\uA766':'\uA767','\uA768':'\uA769','\uA76A':'\uA76B','\uA76C':'\uA76D','\uA76E':'\uA76F','\uA779':'\uA77A','\uA77B':'\uA77C','\uA77D':'\u1D79','\uA77E':'\uA77F','\uA780':'\uA781','\uA782':'\uA783','\uA784':'\uA785','\uA786':'\uA787','\uA78B':'\uA78C','\uA78D':'\u0265','\uA790':'\uA791','\uA792':'\uA793','\uA796':'\uA797','\uA798':'\uA799','\uA79A':'\uA79B','\uA79C':'\uA79D','\uA79E':'\uA79F','\uA7A0':'\uA7A1','\uA7A2':'\uA7A3','\uA7A4':'\uA7A5','\uA7A6':'\uA7A7','\uA7A8':'\uA7A9','\uA7AA':'\u0266','\uA7AB':'\u025C','\uA7AC':'\u0261','\uA7AD':'\u026C','\uA7B0':'\u029E','\uA7B1':'\u0287','\uFF21':'\uFF41','\uFF22':'\uFF42','\uFF23':'\uFF43','\uFF24':'\uFF44','\uFF25':'\uFF45','\uFF26':'\uFF46','\uFF27':'\uFF47','\uFF28':'\uFF48','\uFF29':'\uFF49','\uFF2A':'\uFF4A','\uFF2B':'\uFF4B','\uFF2C':'\uFF4C','\uFF2D':'\uFF4D','\uFF2E':'\uFF4E','\uFF2F':'\uFF4F','\uFF30':'\uFF50','\uFF31':'\uFF51','\uFF32':'\uFF52','\uFF33':'\uFF53','\uFF34':'\uFF54','\uFF35':'\uFF55','\uFF36':'\uFF56','\uFF37':'\uFF57','\uFF38':'\uFF58','\uFF39':'\uFF59','\uFF3A':'\uFF5A','\uD801\uDC00':'\uD801\uDC28','\uD801\uDC01':'\uD801\uDC29','\uD801\uDC02':'\uD801\uDC2A','\uD801\uDC03':'\uD801\uDC2B','\uD801\uDC04':'\uD801\uDC2C','\uD801\uDC05':'\uD801\uDC2D','\uD801\uDC06':'\uD801\uDC2E','\uD801\uDC07':'\uD801\uDC2F','\uD801\uDC08':'\uD801\uDC30','\uD801\uDC09':'\uD801\uDC31','\uD801\uDC0A':'\uD801\uDC32','\uD801\uDC0B':'\uD801\uDC33','\uD801\uDC0C':'\uD801\uDC34','\uD801\uDC0D':'\uD801\uDC35','\uD801\uDC0E':'\uD801\uDC36','\uD801\uDC0F':'\uD801\uDC37','\uD801\uDC10':'\uD801\uDC38','\uD801\uDC11':'\uD801\uDC39','\uD801\uDC12':'\uD801\uDC3A','\uD801\uDC13':'\uD801\uDC3B','\uD801\uDC14':'\uD801\uDC3C','\uD801\uDC15':'\uD801\uDC3D','\uD801\uDC16':'\uD801\uDC3E','\uD801\uDC17':'\uD801\uDC3F','\uD801\uDC18':'\uD801\uDC40','\uD801\uDC19':'\uD801\uDC41','\uD801\uDC1A':'\uD801\uDC42','\uD801\uDC1B':'\uD801\uDC43','\uD801\uDC1C':'\uD801\uDC44','\uD801\uDC1D':'\uD801\uDC45','\uD801\uDC1E':'\uD801\uDC46','\uD801\uDC1F':'\uD801\uDC47','\uD801\uDC20':'\uD801\uDC48','\uD801\uDC21':'\uD801\uDC49','\uD801\uDC22':'\uD801\uDC4A','\uD801\uDC23':'\uD801\uDC4B','\uD801\uDC24':'\uD801\uDC4C','\uD801\uDC25':'\uD801\uDC4D','\uD801\uDC26':'\uD801\uDC4E','\uD801\uDC27':'\uD801\uDC4F','\uD806\uDCA0':'\uD806\uDCC0','\uD806\uDCA1':'\uD806\uDCC1','\uD806\uDCA2':'\uD806\uDCC2','\uD806\uDCA3':'\uD806\uDCC3','\uD806\uDCA4':'\uD806\uDCC4','\uD806\uDCA5':'\uD806\uDCC5','\uD806\uDCA6':'\uD806\uDCC6','\uD806\uDCA7':'\uD806\uDCC7','\uD806\uDCA8':'\uD806\uDCC8','\uD806\uDCA9':'\uD806\uDCC9','\uD806\uDCAA':'\uD806\uDCCA','\uD806\uDCAB':'\uD806\uDCCB','\uD806\uDCAC':'\uD806\uDCCC','\uD806\uDCAD':'\uD806\uDCCD','\uD806\uDCAE':'\uD806\uDCCE','\uD806\uDCAF':'\uD806\uDCCF','\uD806\uDCB0':'\uD806\uDCD0','\uD806\uDCB1':'\uD806\uDCD1','\uD806\uDCB2':'\uD806\uDCD2','\uD806\uDCB3':'\uD806\uDCD3','\uD806\uDCB4':'\uD806\uDCD4','\uD806\uDCB5':'\uD806\uDCD5','\uD806\uDCB6':'\uD806\uDCD6','\uD806\uDCB7':'\uD806\uDCD7','\uD806\uDCB8':'\uD806\uDCD8','\uD806\uDCB9':'\uD806\uDCD9','\uD806\uDCBA':'\uD806\uDCDA','\uD806\uDCBB':'\uD806\uDCDB','\uD806\uDCBC':'\uD806\uDCDC','\uD806\uDCBD':'\uD806\uDCDD','\uD806\uDCBE':'\uD806\uDCDE','\uD806\uDCBF':'\uD806\uDCDF','\xDF':'ss','\u0130':'i\u0307','\u0149':'\u02BCn','\u01F0':'j\u030C','\u0390':'\u03B9\u0308\u0301','\u03B0':'\u03C5\u0308\u0301','\u0587':'\u0565\u0582','\u1E96':'h\u0331','\u1E97':'t\u0308','\u1E98':'w\u030A','\u1E99':'y\u030A','\u1E9A':'a\u02BE','\u1E9E':'ss','\u1F50':'\u03C5\u0313','\u1F52':'\u03C5\u0313\u0300','\u1F54':'\u03C5\u0313\u0301','\u1F56':'\u03C5\u0313\u0342','\u1F80':'\u1F00\u03B9','\u1F81':'\u1F01\u03B9','\u1F82':'\u1F02\u03B9','\u1F83':'\u1F03\u03B9','\u1F84':'\u1F04\u03B9','\u1F85':'\u1F05\u03B9','\u1F86':'\u1F06\u03B9','\u1F87':'\u1F07\u03B9','\u1F88':'\u1F00\u03B9','\u1F89':'\u1F01\u03B9','\u1F8A':'\u1F02\u03B9','\u1F8B':'\u1F03\u03B9','\u1F8C':'\u1F04\u03B9','\u1F8D':'\u1F05\u03B9','\u1F8E':'\u1F06\u03B9','\u1F8F':'\u1F07\u03B9','\u1F90':'\u1F20\u03B9','\u1F91':'\u1F21\u03B9','\u1F92':'\u1F22\u03B9','\u1F93':'\u1F23\u03B9','\u1F94':'\u1F24\u03B9','\u1F95':'\u1F25\u03B9','\u1F96':'\u1F26\u03B9','\u1F97':'\u1F27\u03B9','\u1F98':'\u1F20\u03B9','\u1F99':'\u1F21\u03B9','\u1F9A':'\u1F22\u03B9','\u1F9B':'\u1F23\u03B9','\u1F9C':'\u1F24\u03B9','\u1F9D':'\u1F25\u03B9','\u1F9E':'\u1F26\u03B9','\u1F9F':'\u1F27\u03B9','\u1FA0':'\u1F60\u03B9','\u1FA1':'\u1F61\u03B9','\u1FA2':'\u1F62\u03B9','\u1FA3':'\u1F63\u03B9','\u1FA4':'\u1F64\u03B9','\u1FA5':'\u1F65\u03B9','\u1FA6':'\u1F66\u03B9','\u1FA7':'\u1F67\u03B9','\u1FA8':'\u1F60\u03B9','\u1FA9':'\u1F61\u03B9','\u1FAA':'\u1F62\u03B9','\u1FAB':'\u1F63\u03B9','\u1FAC':'\u1F64\u03B9','\u1FAD':'\u1F65\u03B9','\u1FAE':'\u1F66\u03B9','\u1FAF':'\u1F67\u03B9','\u1FB2':'\u1F70\u03B9','\u1FB3':'\u03B1\u03B9','\u1FB4':'\u03AC\u03B9','\u1FB6':'\u03B1\u0342','\u1FB7':'\u03B1\u0342\u03B9','\u1FBC':'\u03B1\u03B9','\u1FC2':'\u1F74\u03B9','\u1FC3':'\u03B7\u03B9','\u1FC4':'\u03AE\u03B9','\u1FC6':'\u03B7\u0342','\u1FC7':'\u03B7\u0342\u03B9','\u1FCC':'\u03B7\u03B9','\u1FD2':'\u03B9\u0308\u0300','\u1FD3':'\u03B9\u0308\u0301','\u1FD6':'\u03B9\u0342','\u1FD7':'\u03B9\u0308\u0342','\u1FE2':'\u03C5\u0308\u0300','\u1FE3':'\u03C5\u0308\u0301','\u1FE4':'\u03C1\u0313','\u1FE6':'\u03C5\u0342','\u1FE7':'\u03C5\u0308\u0342','\u1FF2':'\u1F7C\u03B9','\u1FF3':'\u03C9\u03B9','\u1FF4':'\u03CE\u03B9','\u1FF6':'\u03C9\u0342','\u1FF7':'\u03C9\u0342\u03B9','\u1FFC':'\u03C9\u03B9','\uFB00':'ff','\uFB01':'fi','\uFB02':'fl','\uFB03':'ffi','\uFB04':'ffl','\uFB05':'st','\uFB06':'st','\uFB13':'\u0574\u0576','\uFB14':'\u0574\u0565','\uFB15':'\u0574\u056B','\uFB16':'\u057E\u0576','\uFB17':'\u0574\u056D'};
	
	// Normalize reference label: collapse internal whitespace
	// to single space, remove leading/trailing whitespace, case fold.
	module.exports = function(string) {
	    return string.slice(1, string.length - 1).trim().replace(regex, function($0) {
	        // Note: there is no need to check `hasOwnProperty($0)` here.
	        // If character not found in lookup table, it must be whitespace.
	        return map[$0] || ' ';
	    });
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	/*! http://mths.be/repeat v0.2.0 by @mathias */
	if (!String.prototype.repeat) {
		(function() {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var defineProperty = (function() {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch(error) {}
				return result;
			}());
			var repeat = function(count) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				// `ToInteger`
				var n = count ? Number(count) : 0;
				if (n != n) { // better `isNaN`
					n = 0;
				}
				// Account for out-of-bounds indices
				if (n < 0 || n == Infinity) {
					throw RangeError();
				}
				var result = '';
				while (n) {
					if (n % 2 == 1) {
						result += string;
					}
					if (n > 1) {
						string += string;
					}
					n >>= 1;
				}
				return result;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'repeat', {
					'value': repeat,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.repeat = repeat;
			}
		}());
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var escapeXml = __webpack_require__(15).escapeXml;
	
	// Helper function to produce an HTML tag.
	var tag = function(name, attrs, selfclosing) {
	    var result = '<' + name;
	    if (attrs && attrs.length > 0) {
	        var i = 0;
	        var attrib;
	        while ((attrib = attrs[i]) !== undefined) {
	            result += ' ' + attrib[0] + '="' + attrib[1] + '"';
	            i++;
	        }
	    }
	    if (selfclosing) {
	        result += ' /';
	    }
	
	    result += '>';
	    return result;
	};
	
	var reHtmlTag = /\<[^>]*\>/;
	var reUnsafeProtocol = /^javascript:|vbscript:|file:|data:/i;
	var reSafeDataProtocol = /^data:image\/(?:png|gif|jpeg|webp)/i;
	
	var potentiallyUnsafe = function(url) {
	    return reUnsafeProtocol.test(url) &&
	        !reSafeDataProtocol.test(url);
	};
	
	var renderNodes = function(block) {
	
	    var attrs;
	    var info_words;
	    var tagname;
	    var walker = block.walker();
	    var event, node, entering;
	    var buffer = "";
	    var lastOut = "\n";
	    var disableTags = 0;
	    var grandparent;
	    var out = function(s) {
	        if (disableTags > 0) {
	            buffer += s.replace(reHtmlTag, '');
	        } else {
	            buffer += s;
	        }
	        lastOut = s;
	    };
	    var esc = this.escape;
	    var cr = function() {
	        if (lastOut !== '\n') {
	            buffer += '\n';
	            lastOut = '\n';
	        }
	    };
	
	    var options = this.options;
	
	    if (options.time) { console.time("rendering"); }
	
	    while ((event = walker.next())) {
	        entering = event.entering;
	        node = event.node;
	
	        attrs = [];
	        if (options.sourcepos) {
	            var pos = node.sourcepos;
	            if (pos) {
	                attrs.push(['data-sourcepos', String(pos[0][0]) + ':' +
	                            String(pos[0][1]) + '-' + String(pos[1][0]) + ':' +
	                            String(pos[1][1])]);
	            }
	        }
	
	        switch (node.type) {
	        case 'Text':
	            out(esc(node.literal, false));
	            break;
	
	        case 'Softbreak':
	            out(this.softbreak);
	            break;
	
	        case 'Hardbreak':
	            out(tag('br', [], true));
	            cr();
	            break;
	
	        case 'Emph':
	            out(tag(entering ? 'em' : '/em'));
	            break;
	
	        case 'Strong':
	            out(tag(entering ? 'strong' : '/strong'));
	            break;
	
	        case 'Html':
	            if (options.safe) {
	                out('<!-- raw HTML omitted -->');
	            } else {
	                out(node.literal);
	            }
	            break;
	
	        case 'Link':
	            if (entering) {
	                if (!(options.safe && potentiallyUnsafe(node.destination))) {
	                    attrs.push(['href', esc(node.destination, true)]);
	                }
	                if (node.title) {
	                    attrs.push(['title', esc(node.title, true)]);
	                }
	                out(tag('a', attrs));
	            } else {
	                out(tag('/a'));
	            }
	            break;
	
	        case 'Image':
	            if (entering) {
	                if (disableTags === 0) {
	                    if (options.safe &&
	                         potentiallyUnsafe(node.destination)) {
	                        out('<img src="" alt="');
	                    } else {
	                        out('<img src="' + esc(node.destination, true) +
	                            '" alt="');
	                    }
	                }
	                disableTags += 1;
	            } else {
	                disableTags -= 1;
	                if (disableTags === 0) {
	                    if (node.title) {
	                        out('" title="' + esc(node.title, true));
	                    }
	                    out('" />');
	                }
	            }
	            break;
	
	        case 'Code':
	            out(tag('code') + esc(node.literal, false) + tag('/code'));
	            break;
	
	        case 'Document':
	            break;
	
	        case 'Paragraph':
	            grandparent = node.parent.parent;
	            if (grandparent !== null &&
	                grandparent.type === 'List') {
	                if (grandparent.listTight) {
	                    break;
	                }
	            }
	            if (entering) {
	                cr();
	                out(tag('p', attrs));
	            } else {
	                out(tag('/p'));
	                cr();
	            }
	            break;
	
	        case 'BlockQuote':
	            if (entering) {
	                cr();
	                out(tag('blockquote', attrs));
	                cr();
	            } else {
	                cr();
	                out(tag('/blockquote'));
	                cr();
	            }
	            break;
	
	        case 'Item':
	            if (entering) {
	                out(tag('li', attrs));
	            } else {
	                out(tag('/li'));
	                cr();
	            }
	            break;
	
	        case 'List':
	            tagname = node.listType === 'Bullet' ? 'ul' : 'ol';
	            if (entering) {
	                var start = node.listStart;
	                if (start !== null && start !== 1) {
	                    attrs.push(['start', start.toString()]);
	                }
	                cr();
	                out(tag(tagname, attrs));
	                cr();
	            } else {
	                cr();
	                out(tag('/' + tagname));
	                cr();
	            }
	            break;
	
	        case 'Header':
	            tagname = 'h' + node.level;
	            if (entering) {
	                cr();
	                out(tag(tagname, attrs));
	            } else {
	                out(tag('/' + tagname));
	                cr();
	            }
	            break;
	
	        case 'CodeBlock':
	            info_words = node.info ? node.info.split(/\s+/) : [];
	            if (info_words.length > 0 && info_words[0].length > 0) {
	                attrs.push(['class', 'language-' + esc(info_words[0], true)]);
	            }
	            cr();
	            out(tag('pre') + tag('code', attrs));
	            out(esc(node.literal, false));
	            out(tag('/code') + tag('/pre'));
	            cr();
	            break;
	
	        case 'HtmlBlock':
	            cr();
	            if (options.safe) {
	                out('<!-- raw HTML omitted -->');
	            } else {
	                out(node.literal);
	            }
	            cr();
	            break;
	
	        case 'HorizontalRule':
	            cr();
	            out(tag('hr', attrs, true));
	            cr();
	            break;
	
	        default:
	            throw "Unknown node type " + node.type;
	        }
	
	    }
	    if (options.time) { console.timeEnd("rendering"); }
	    return buffer;
	};
	
	// The HtmlRenderer object.
	function HtmlRenderer(options){
	    return {
	        // default options:
	        softbreak: '\n', // by default, soft breaks are rendered as newlines in HTML
	        // set to "<br />" to make them hard breaks
	        // set to " " if you want to ignore line wrapping in source
	        escape: escapeXml,
	        options: options || {},
	        render: renderNodes
	    };
	}
	
	module.exports = HtmlRenderer;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var escapeXml = __webpack_require__(15).escapeXml;
	
	// Helper function to produce an XML tag.
	var tag = function(name, attrs, selfclosing) {
	    var result = '<' + name;
	    if (attrs && attrs.length > 0) {
	        var i = 0;
	        var attrib;
	        while ((attrib = attrs[i]) !== undefined) {
	            result += ' ' + attrib[0] + '="' + attrib[1] + '"';
	            i++;
	        }
	    }
	    if (selfclosing) {
	        result += ' /';
	    }
	
	    result += '>';
	    return result;
	};
	
	var reXMLTag = /\<[^>]*\>/;
	
	var toTagName = function(s) {
	    return s.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
	};
	
	var renderNodes = function(block) {
	
	    var attrs;
	    var tagname;
	    var walker = block.walker();
	    var event, node, entering;
	    var buffer = "";
	    var lastOut = "\n";
	    var disableTags = 0;
	    var indentLevel = 0;
	    var indent = '  ';
	    var unescapedContents;
	    var container;
	    var selfClosing;
	    var nodetype;
	
	    var out = function(s) {
	        if (disableTags > 0) {
	            buffer += s.replace(reXMLTag, '');
	        } else {
	            buffer += s;
	        }
	        lastOut = s;
	    };
	    var esc = this.escape;
	    var cr = function() {
	        if (lastOut !== '\n') {
	            buffer += '\n';
	            lastOut = '\n';
	            for (var i = indentLevel; i > 0; i--) {
	                buffer += indent;
	            }
	        }
	    };
	
	    var options = this.options;
	
	    if (options.time) { console.time("rendering"); }
	
	    buffer += '<?xml version="1.0" encoding="UTF-8"?>\n';
	    buffer += '<!DOCTYPE CommonMark SYSTEM "CommonMark.dtd">\n';
	
	    while ((event = walker.next())) {
	        entering = event.entering;
	        node = event.node;
	        nodetype = node.type;
	
	        container = node.isContainer;
	        selfClosing = nodetype === 'HorizontalRule' || nodetype === 'Hardbreak' ||
	            nodetype === 'Softbreak';
	        unescapedContents = nodetype === 'Html' || nodetype === 'HtmlInline';
	        tagname = toTagName(nodetype);
	
	        if (entering) {
	
	            attrs = [];
	
	            switch (nodetype) {
	            case 'List':
	                if (node.listType !== null) {
	                    attrs.push(['type', node.listType.toLowerCase()]);
	                }
	                if (node.listStart !== null) {
	                    attrs.push(['start', String(node.listStart)]);
	                }
	                if (node.listTight !== null) {
	                    attrs.push(['tight', (node.listTight ? 'true' : 'false')]);
	                }
	                var delim = node.listDelimiter;
	                if (delim !== null) {
	                    var delimword = '';
	                    if (delim === '.') {
	                        delimword = 'period';
	                    } else {
	                        delimword = 'paren';
	                    }
	                    attrs.push(['delimiter', delimword]);
	                }
	                break;
	            case 'CodeBlock':
	                if (node.info) {
	                    attrs.push(['info', node.info]);
	                }
	                break;
	            case 'Header':
	                attrs.push(['level', String(node.level)]);
	                break;
	            case 'Link':
	            case 'Image':
	                attrs.push(['destination', node.destination]);
	                attrs.push(['title', node.title]);
	                break;
	            default:
	                break;
	            }
	            if (options.sourcepos) {
	                var pos = node.sourcepos;
	                if (pos) {
	                    attrs.push(['sourcepos', String(pos[0][0]) + ':' +
	                                String(pos[0][1]) + '-' + String(pos[1][0]) + ':' +
	                                String(pos[1][1])]);
	                }
	            }
	
	            cr();
	            out(tag(tagname, attrs, selfClosing));
	            if (container) {
	                indentLevel += 1;
	            } else if (!container && !selfClosing) {
	                var lit = node.literal;
	                if (lit) {
	                    out(unescapedContents ? lit : esc(lit));
	                }
	                out(tag('/' + tagname));
	            }
	        } else {
	            indentLevel -= 1;
	            cr();
	            out(tag('/' + tagname));
	        }
	
	
	    }
	    if (options.time) { console.timeEnd("rendering"); }
	    buffer += '\n';
	    return buffer;
	};
	
	// The XmlRenderer object.
	function XmlRenderer(options){
	    return {
	        // default options:
	        softbreak: '\n', // by default, soft breaks are rendered as newlines in HTML
	        // set to "<br />" to make them hard breaks
	        // set to " " if you want to ignore line wrapping in source
	        escape: escapeXml,
	        options: options || {},
	        render: renderNodes
	    };
	}
	
	module.exports = XmlRenderer;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var convert = __webpack_require__(33),
	    string = __webpack_require__(35);
	
	var Color = function(obj) {
	  if (obj instanceof Color) return obj;
	  if (! (this instanceof Color)) return new Color(obj);
	
	   this.values = {
	      rgb: [0, 0, 0],
	      hsl: [0, 0, 0],
	      hsv: [0, 0, 0],
	      hwb: [0, 0, 0],
	      cmyk: [0, 0, 0, 0],
	      alpha: 1
	   }
	
	   // parse Color() argument
	   if (typeof obj == "string") {
	      var vals = string.getRgba(obj);
	      if (vals) {
	         this.setValues("rgb", vals);
	      }
	      else if(vals = string.getHsla(obj)) {
	         this.setValues("hsl", vals);
	      }
	      else if(vals = string.getHwb(obj)) {
	         this.setValues("hwb", vals);
	      }
	      else {
	        throw new Error("Unable to parse color from string \"" + obj + "\"");
	      }
	   }
	   else if (typeof obj == "object") {
	      var vals = obj;
	      if(vals["r"] !== undefined || vals["red"] !== undefined) {
	         this.setValues("rgb", vals)
	      }
	      else if(vals["l"] !== undefined || vals["lightness"] !== undefined) {
	         this.setValues("hsl", vals)
	      }
	      else if(vals["v"] !== undefined || vals["value"] !== undefined) {
	         this.setValues("hsv", vals)
	      }
	      else if(vals["w"] !== undefined || vals["whiteness"] !== undefined) {
	         this.setValues("hwb", vals)
	      }
	      else if(vals["c"] !== undefined || vals["cyan"] !== undefined) {
	         this.setValues("cmyk", vals)
	      }
	      else {
	        throw new Error("Unable to parse color from object " + JSON.stringify(obj));
	      }
	   }
	}
	
	Color.prototype = {
	   rgb: function (vals) {
	      return this.setSpace("rgb", arguments);
	   },
	   hsl: function(vals) {
	      return this.setSpace("hsl", arguments);
	   },
	   hsv: function(vals) {
	      return this.setSpace("hsv", arguments);
	   },
	   hwb: function(vals) {
	      return this.setSpace("hwb", arguments);
	   },
	   cmyk: function(vals) {
	      return this.setSpace("cmyk", arguments);
	   },
	
	   rgbArray: function() {
	      return this.values.rgb;
	   },
	   hslArray: function() {
	      return this.values.hsl;
	   },
	   hsvArray: function() {
	      return this.values.hsv;
	   },
	   hwbArray: function() {
	      if (this.values.alpha !== 1) {
	        return this.values.hwb.concat([this.values.alpha])
	      }
	      return this.values.hwb;
	   },
	   cmykArray: function() {
	      return this.values.cmyk;
	   },
	   rgbaArray: function() {
	      var rgb = this.values.rgb;
	      return rgb.concat([this.values.alpha]);
	   },
	   hslaArray: function() {
	      var hsl = this.values.hsl;
	      return hsl.concat([this.values.alpha]);
	   },
	   alpha: function(val) {
	      if (val === undefined) {
	         return this.values.alpha;
	      }
	      this.setValues("alpha", val);
	      return this;
	   },
	
	   red: function(val) {
	      return this.setChannel("rgb", 0, val);
	   },
	   green: function(val) {
	      return this.setChannel("rgb", 1, val);
	   },
	   blue: function(val) {
	      return this.setChannel("rgb", 2, val);
	   },
	   hue: function(val) {
	      return this.setChannel("hsl", 0, val);
	   },
	   saturation: function(val) {
	      return this.setChannel("hsl", 1, val);
	   },
	   lightness: function(val) {
	      return this.setChannel("hsl", 2, val);
	   },
	   saturationv: function(val) {
	      return this.setChannel("hsv", 1, val);
	   },
	   whiteness: function(val) {
	      return this.setChannel("hwb", 1, val);
	   },
	   blackness: function(val) {
	      return this.setChannel("hwb", 2, val);
	   },
	   value: function(val) {
	      return this.setChannel("hsv", 2, val);
	   },
	   cyan: function(val) {
	      return this.setChannel("cmyk", 0, val);
	   },
	   magenta: function(val) {
	      return this.setChannel("cmyk", 1, val);
	   },
	   yellow: function(val) {
	      return this.setChannel("cmyk", 2, val);
	   },
	   black: function(val) {
	      return this.setChannel("cmyk", 3, val);
	   },
	
	   hexString: function() {
	      return string.hexString(this.values.rgb);
	   },
	   rgbString: function() {
	      return string.rgbString(this.values.rgb, this.values.alpha);
	   },
	   rgbaString: function() {
	      return string.rgbaString(this.values.rgb, this.values.alpha);
	   },
	   percentString: function() {
	      return string.percentString(this.values.rgb, this.values.alpha);
	   },
	   hslString: function() {
	      return string.hslString(this.values.hsl, this.values.alpha);
	   },
	   hslaString: function() {
	      return string.hslaString(this.values.hsl, this.values.alpha);
	   },
	   hwbString: function() {
	      return string.hwbString(this.values.hwb, this.values.alpha);
	   },
	   keyword: function() {
	      return string.keyword(this.values.rgb, this.values.alpha);
	   },
	
	   rgbNumber: function() {
	      return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
	   },
	
	   luminosity: function() {
	      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
	      var rgb = this.values.rgb;
	      var lum = [];
	      for (var i = 0; i < rgb.length; i++) {
	         var chan = rgb[i] / 255;
	         lum[i] = (chan <= 0.03928) ? chan / 12.92
	                  : Math.pow(((chan + 0.055) / 1.055), 2.4)
	      }
	      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	   },
	
	   contrast: function(color2) {
	      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
	      var lum1 = this.luminosity();
	      var lum2 = color2.luminosity();
	      if (lum1 > lum2) {
	         return (lum1 + 0.05) / (lum2 + 0.05)
	      };
	      return (lum2 + 0.05) / (lum1 + 0.05);
	   },
	
	   level: function(color2) {
	     var contrastRatio = this.contrast(color2);
	     return (contrastRatio >= 7.1)
	       ? 'AAA'
	       : (contrastRatio >= 4.5)
	        ? 'AA'
	        : '';
	   },
	
	   dark: function() {
	      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
	      var rgb = this.values.rgb,
	          yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	      return yiq < 128;
	   },
	
	   light: function() {
	      return !this.dark();
	   },
	
	   negate: function() {
	      var rgb = []
	      for (var i = 0; i < 3; i++) {
	         rgb[i] = 255 - this.values.rgb[i];
	      }
	      this.setValues("rgb", rgb);
	      return this;
	   },
	
	   lighten: function(ratio) {
	      this.values.hsl[2] += this.values.hsl[2] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },
	
	   darken: function(ratio) {
	      this.values.hsl[2] -= this.values.hsl[2] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },
	
	   saturate: function(ratio) {
	      this.values.hsl[1] += this.values.hsl[1] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },
	
	   desaturate: function(ratio) {
	      this.values.hsl[1] -= this.values.hsl[1] * ratio;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },
	
	   whiten: function(ratio) {
	      this.values.hwb[1] += this.values.hwb[1] * ratio;
	      this.setValues("hwb", this.values.hwb);
	      return this;
	   },
	
	   blacken: function(ratio) {
	      this.values.hwb[2] += this.values.hwb[2] * ratio;
	      this.setValues("hwb", this.values.hwb);
	      return this;
	   },
	
	   greyscale: function() {
	      var rgb = this.values.rgb;
	      // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
	      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
	      this.setValues("rgb", [val, val, val]);
	      return this;
	   },
	
	   clearer: function(ratio) {
	      this.setValues("alpha", this.values.alpha - (this.values.alpha * ratio));
	      return this;
	   },
	
	   opaquer: function(ratio) {
	      this.setValues("alpha", this.values.alpha + (this.values.alpha * ratio));
	      return this;
	   },
	
	   rotate: function(degrees) {
	      var hue = this.values.hsl[0];
	      hue = (hue + degrees) % 360;
	      hue = hue < 0 ? 360 + hue : hue;
	      this.values.hsl[0] = hue;
	      this.setValues("hsl", this.values.hsl);
	      return this;
	   },
	
	   /**
	    * Ported from sass implementation in C
	    * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	    */
	   mix: function(mixinColor, weight) {
	      var color1 = this;
	      var color2 = mixinColor;
	      var p = weight !== undefined ? weight : 0.5;
	
	      var w = 2 * p - 1;
	      var a = color1.alpha() - color2.alpha();
	
	      var w1 = (((w * a == -1) ? w : (w + a)/(1 + w*a)) + 1) / 2.0;
	      var w2 = 1 - w1;
	
	      return this
	        .rgb(
	          w1 * color1.red() + w2 * color2.red(),
	          w1 * color1.green() + w2 * color2.green(),
	          w1 * color1.blue() + w2 * color2.blue()
	        )
	        .alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	   },
	
	   toJSON: function() {
	     return this.rgb();
	   },
	
	   clone: function() {
	     return new Color(this.rgb());
	   }
	}
	
	
	Color.prototype.getValues = function(space) {
	   var vals = {};
	   for (var i = 0; i < space.length; i++) {
	      vals[space.charAt(i)] = this.values[space][i];
	   }
	   if (this.values.alpha != 1) {
	      vals["a"] = this.values.alpha;
	   }
	   // {r: 255, g: 255, b: 255, a: 0.4}
	   return vals;
	}
	
	Color.prototype.setValues = function(space, vals) {
	   var spaces = {
	      "rgb": ["red", "green", "blue"],
	      "hsl": ["hue", "saturation", "lightness"],
	      "hsv": ["hue", "saturation", "value"],
	      "hwb": ["hue", "whiteness", "blackness"],
	      "cmyk": ["cyan", "magenta", "yellow", "black"]
	   };
	
	   var maxes = {
	      "rgb": [255, 255, 255],
	      "hsl": [360, 100, 100],
	      "hsv": [360, 100, 100],
	      "hwb": [360, 100, 100],
	      "cmyk": [100, 100, 100, 100]
	   };
	
	   var alpha = 1;
	   if (space == "alpha") {
	      alpha = vals;
	   }
	   else if (vals.length) {
	      // [10, 10, 10]
	      this.values[space] = vals.slice(0, space.length);
	      alpha = vals[space.length];
	   }
	   else if (vals[space.charAt(0)] !== undefined) {
	      // {r: 10, g: 10, b: 10}
	      for (var i = 0; i < space.length; i++) {
	        this.values[space][i] = vals[space.charAt(i)];
	      }
	      alpha = vals.a;
	   }
	   else if (vals[spaces[space][0]] !== undefined) {
	      // {red: 10, green: 10, blue: 10}
	      var chans = spaces[space];
	      for (var i = 0; i < space.length; i++) {
	        this.values[space][i] = vals[chans[i]];
	      }
	      alpha = vals.alpha;
	   }
	   this.values.alpha = Math.max(0, Math.min(1, (alpha !== undefined ? alpha : this.values.alpha) ));
	   if (space == "alpha") {
	      return;
	   }
	
	   // cap values of the space prior converting all values
	   for (var i = 0; i < space.length; i++) {
	      var capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
	      this.values[space][i] = Math.round(capped);
	   }
	
	   // convert to all the other color spaces
	   for (var sname in spaces) {
	      if (sname != space) {
	         this.values[sname] = convert[space][sname](this.values[space])
	      }
	
	      // cap values
	      for (var i = 0; i < sname.length; i++) {
	         var capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
	         this.values[sname][i] = Math.round(capped);
	      }
	   }
	   return true;
	}
	
	Color.prototype.setSpace = function(space, args) {
	   var vals = args[0];
	   if (vals === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof vals == "number") {
	      vals = Array.prototype.slice.call(args);
	   }
	   this.setValues(space, vals);
	   return this;
	}
	
	Color.prototype.setChannel = function(space, index, val) {
	   if (val === undefined) {
	      // color.red()
	      return this.values[space][index];
	   }
	   // color.red(100)
	   this.values[space][index] = val;
	   this.setValues(space, this.values[space]);
	   return this;
	}
	
	module.exports = Color;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(34);
	
	var convert = function() {
	   return new Converter();
	}
	
	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);
	
	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];
	
	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};
	
	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword
	
	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}
	
	
	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};
	
	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }
	
	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};
	
	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);
	
	      this.convs[space] = vals;
	   }
	  return vals;
	};
	
	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   }
	});
	
	module.exports = convert;

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* MIT license */
	
	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,
	
	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,
	
	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,
	
	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,
	
	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,
	
	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,
	
	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,
	
	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,
	
	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	}
	
	
	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;
	
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0)
	    h += 360;
	
	  l = (min + max) / 2;
	
	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);
	
	  return [h, s * 100, l * 100];
	}
	
	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;
	
	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;
	
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0)
	    h += 360;
	
	  v = ((max / 255) * 1000) / 10;
	
	  return [h, s, v];
	}
	
	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));
	
	  return [h, w * 100, b * 100];
	}
	
	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;
	
	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}
	
	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}
	
	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;
	
	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	
	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	
	  return [x * 100, y *100, z * 100];
	}
	
	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;
	
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	
	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
	
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	
	  return [l, a, b];
	}
	
	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}
	
	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;
	
	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }
	
	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;
	
	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;
	
	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;
	
	    rgb[i] = val * 255;
	  }
	
	  return rgb;
	}
	
	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;
	
	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }
	
	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}
	
	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}
	
	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}
	
	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}
	
	
	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;
	
	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;
	
	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}
	
	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;
	
	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}
	
	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}
	
	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}
	
	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}
	
	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;
	
	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }
	
	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation
	
	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}
	
	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}
	
	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}
	
	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}
	
	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;
	
	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}
	
	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}
	
	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}
	
	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}
	
	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}
	
	
	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;
	
	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	
	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);
	
	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);
	
	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);
	
	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;
	
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	
	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
	
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	
	  return [l, a, b];
	}
	
	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}
	
	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;
	
	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }
	
	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
	
	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);
	
	  return [x, y, z];
	}
	
	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;
	
	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}
	
	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}
	
	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;
	
	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}
	
	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}
	
	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}
	
	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}
	
	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}
	
	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}
	
	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}
	
	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}
	
	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}
	
	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}
	
	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};
	
	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(36);
	
	module.exports = {
	   getRgba: getRgba,
	   getHsla: getHsla,
	   getRgb: getRgb,
	   getHsl: getHsl,
	   getHwb: getHwb,
	   getAlpha: getAlpha,
	
	   hexString: hexString,
	   rgbString: rgbString,
	   rgbaString: rgbaString,
	   percentString: percentString,
	   percentaString: percentaString,
	   hslString: hslString,
	   hslaString: hslaString,
	   hwbString: hwbString,
	   keyword: keyword
	}
	
	function getRgba(string) {
	   if (!string) {
	      return;
	   }
	   var abbr =  /^#([a-fA-F0-9]{3})$/,
	       hex =  /^#([a-fA-F0-9]{6})$/,
	       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       keyword = /(\D+)/;
	
	   var rgb = [0, 0, 0],
	       a = 1,
	       match = string.match(abbr);
	   if (match) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i] + match[i], 16);
	      }
	   }
	   else if (match = string.match(hex)) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
	      }
	   }
	   else if (match = string.match(rgba)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i + 1]);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(per)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(keyword)) {
	      if (match[1] == "transparent") {
	         return [0, 0, 0, 0];
	      }
	      rgb = colorNames[match[1]];
	      if (!rgb) {
	         return;
	      }
	   }
	
	   for (var i = 0; i < rgb.length; i++) {
	      rgb[i] = scale(rgb[i], 0, 255);
	   }
	   if (!a && a != 0) {
	      a = 1;
	   }
	   else {
	      a = scale(a, 0, 1);
	   }
	   rgb[3] = a;
	   return rgb;
	}
	
	function getHsla(string) {
	   if (!string) {
	      return;
	   }
	   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hsl);
	   if (match) {
	      var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          s = scale(parseFloat(match[2]), 0, 100),
	          l = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, s, l, a];
	   }
	}
	
	function getHwb(string) {
	   if (!string) {
	      return;
	   }
	   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hwb);
	   if (match) {
	    var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          w = scale(parseFloat(match[2]), 0, 100),
	          b = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, w, b, a];
	   }
	}
	
	function getRgb(string) {
	   var rgba = getRgba(string);
	   return rgba && rgba.slice(0, 3);
	}
	
	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}
	
	function getAlpha(string) {
	   var vals = getRgba(string);
	   if (vals) {
	      return vals[3];
	   }
	   else if (vals = getHsla(string)) {
	      return vals[3];
	   }
	   else if (vals = getHwb(string)) {
	      return vals[3];
	   }
	}
	
	// generators
	function hexString(rgb) {
	   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
	              + hexDouble(rgb[2]);
	}
	
	function rgbString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return rgbaString(rgba, alpha);
	   }
	   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}
	
	function rgbaString(rgba, alpha) {
	   if (alpha === undefined) {
	      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	   }
	   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	           + ", " + alpha + ")";
	}
	
	function percentString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return percentaString(rgba, alpha);
	   }
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	
	   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}
	
	function percentaString(rgba, alpha) {
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}
	
	function hslString(hsla, alpha) {
	   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	      return hslaString(hsla, alpha);
	   }
	   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}
	
	function hslaString(hsla, alpha) {
	   if (alpha === undefined) {
	      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	   }
	   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	           + alpha + ")";
	}
	
	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	function hwbString(hwb, alpha) {
	   if (alpha === undefined) {
	      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	   }
	   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
	           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}
	
	function keyword(rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}
	
	// helpers
	function scale(num, min, max) {
	   return Math.min(Math.max(min, num), max);
	}
	
	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}
	
	
	//create a list of reverse color names
	var reverseNames = {};
	for (var name in colorNames) {
	   reverseNames[colorNames[name]] = name;
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {
		"aliceblue": [
			240,
			248,
			255
		],
		"antiquewhite": [
			250,
			235,
			215
		],
		"aqua": [
			0,
			255,
			255
		],
		"aquamarine": [
			127,
			255,
			212
		],
		"azure": [
			240,
			255,
			255
		],
		"beige": [
			245,
			245,
			220
		],
		"bisque": [
			255,
			228,
			196
		],
		"black": [
			0,
			0,
			0
		],
		"blanchedalmond": [
			255,
			235,
			205
		],
		"blue": [
			0,
			0,
			255
		],
		"blueviolet": [
			138,
			43,
			226
		],
		"brown": [
			165,
			42,
			42
		],
		"burlywood": [
			222,
			184,
			135
		],
		"cadetblue": [
			95,
			158,
			160
		],
		"chartreuse": [
			127,
			255,
			0
		],
		"chocolate": [
			210,
			105,
			30
		],
		"coral": [
			255,
			127,
			80
		],
		"cornflowerblue": [
			100,
			149,
			237
		],
		"cornsilk": [
			255,
			248,
			220
		],
		"crimson": [
			220,
			20,
			60
		],
		"cyan": [
			0,
			255,
			255
		],
		"darkblue": [
			0,
			0,
			139
		],
		"darkcyan": [
			0,
			139,
			139
		],
		"darkgoldenrod": [
			184,
			134,
			11
		],
		"darkgray": [
			169,
			169,
			169
		],
		"darkgreen": [
			0,
			100,
			0
		],
		"darkgrey": [
			169,
			169,
			169
		],
		"darkkhaki": [
			189,
			183,
			107
		],
		"darkmagenta": [
			139,
			0,
			139
		],
		"darkolivegreen": [
			85,
			107,
			47
		],
		"darkorange": [
			255,
			140,
			0
		],
		"darkorchid": [
			153,
			50,
			204
		],
		"darkred": [
			139,
			0,
			0
		],
		"darksalmon": [
			233,
			150,
			122
		],
		"darkseagreen": [
			143,
			188,
			143
		],
		"darkslateblue": [
			72,
			61,
			139
		],
		"darkslategray": [
			47,
			79,
			79
		],
		"darkslategrey": [
			47,
			79,
			79
		],
		"darkturquoise": [
			0,
			206,
			209
		],
		"darkviolet": [
			148,
			0,
			211
		],
		"deeppink": [
			255,
			20,
			147
		],
		"deepskyblue": [
			0,
			191,
			255
		],
		"dimgray": [
			105,
			105,
			105
		],
		"dimgrey": [
			105,
			105,
			105
		],
		"dodgerblue": [
			30,
			144,
			255
		],
		"firebrick": [
			178,
			34,
			34
		],
		"floralwhite": [
			255,
			250,
			240
		],
		"forestgreen": [
			34,
			139,
			34
		],
		"fuchsia": [
			255,
			0,
			255
		],
		"gainsboro": [
			220,
			220,
			220
		],
		"ghostwhite": [
			248,
			248,
			255
		],
		"gold": [
			255,
			215,
			0
		],
		"goldenrod": [
			218,
			165,
			32
		],
		"gray": [
			128,
			128,
			128
		],
		"green": [
			0,
			128,
			0
		],
		"greenyellow": [
			173,
			255,
			47
		],
		"grey": [
			128,
			128,
			128
		],
		"honeydew": [
			240,
			255,
			240
		],
		"hotpink": [
			255,
			105,
			180
		],
		"indianred": [
			205,
			92,
			92
		],
		"indigo": [
			75,
			0,
			130
		],
		"ivory": [
			255,
			255,
			240
		],
		"khaki": [
			240,
			230,
			140
		],
		"lavender": [
			230,
			230,
			250
		],
		"lavenderblush": [
			255,
			240,
			245
		],
		"lawngreen": [
			124,
			252,
			0
		],
		"lemonchiffon": [
			255,
			250,
			205
		],
		"lightblue": [
			173,
			216,
			230
		],
		"lightcoral": [
			240,
			128,
			128
		],
		"lightcyan": [
			224,
			255,
			255
		],
		"lightgoldenrodyellow": [
			250,
			250,
			210
		],
		"lightgray": [
			211,
			211,
			211
		],
		"lightgreen": [
			144,
			238,
			144
		],
		"lightgrey": [
			211,
			211,
			211
		],
		"lightpink": [
			255,
			182,
			193
		],
		"lightsalmon": [
			255,
			160,
			122
		],
		"lightseagreen": [
			32,
			178,
			170
		],
		"lightskyblue": [
			135,
			206,
			250
		],
		"lightslategray": [
			119,
			136,
			153
		],
		"lightslategrey": [
			119,
			136,
			153
		],
		"lightsteelblue": [
			176,
			196,
			222
		],
		"lightyellow": [
			255,
			255,
			224
		],
		"lime": [
			0,
			255,
			0
		],
		"limegreen": [
			50,
			205,
			50
		],
		"linen": [
			250,
			240,
			230
		],
		"magenta": [
			255,
			0,
			255
		],
		"maroon": [
			128,
			0,
			0
		],
		"mediumaquamarine": [
			102,
			205,
			170
		],
		"mediumblue": [
			0,
			0,
			205
		],
		"mediumorchid": [
			186,
			85,
			211
		],
		"mediumpurple": [
			147,
			112,
			219
		],
		"mediumseagreen": [
			60,
			179,
			113
		],
		"mediumslateblue": [
			123,
			104,
			238
		],
		"mediumspringgreen": [
			0,
			250,
			154
		],
		"mediumturquoise": [
			72,
			209,
			204
		],
		"mediumvioletred": [
			199,
			21,
			133
		],
		"midnightblue": [
			25,
			25,
			112
		],
		"mintcream": [
			245,
			255,
			250
		],
		"mistyrose": [
			255,
			228,
			225
		],
		"moccasin": [
			255,
			228,
			181
		],
		"navajowhite": [
			255,
			222,
			173
		],
		"navy": [
			0,
			0,
			128
		],
		"oldlace": [
			253,
			245,
			230
		],
		"olive": [
			128,
			128,
			0
		],
		"olivedrab": [
			107,
			142,
			35
		],
		"orange": [
			255,
			165,
			0
		],
		"orangered": [
			255,
			69,
			0
		],
		"orchid": [
			218,
			112,
			214
		],
		"palegoldenrod": [
			238,
			232,
			170
		],
		"palegreen": [
			152,
			251,
			152
		],
		"paleturquoise": [
			175,
			238,
			238
		],
		"palevioletred": [
			219,
			112,
			147
		],
		"papayawhip": [
			255,
			239,
			213
		],
		"peachpuff": [
			255,
			218,
			185
		],
		"peru": [
			205,
			133,
			63
		],
		"pink": [
			255,
			192,
			203
		],
		"plum": [
			221,
			160,
			221
		],
		"powderblue": [
			176,
			224,
			230
		],
		"purple": [
			128,
			0,
			128
		],
		"rebeccapurple": [
			102,
			51,
			153
		],
		"red": [
			255,
			0,
			0
		],
		"rosybrown": [
			188,
			143,
			143
		],
		"royalblue": [
			65,
			105,
			225
		],
		"saddlebrown": [
			139,
			69,
			19
		],
		"salmon": [
			250,
			128,
			114
		],
		"sandybrown": [
			244,
			164,
			96
		],
		"seagreen": [
			46,
			139,
			87
		],
		"seashell": [
			255,
			245,
			238
		],
		"sienna": [
			160,
			82,
			45
		],
		"silver": [
			192,
			192,
			192
		],
		"skyblue": [
			135,
			206,
			235
		],
		"slateblue": [
			106,
			90,
			205
		],
		"slategray": [
			112,
			128,
			144
		],
		"slategrey": [
			112,
			128,
			144
		],
		"snow": [
			255,
			250,
			250
		],
		"springgreen": [
			0,
			255,
			127
		],
		"steelblue": [
			70,
			130,
			180
		],
		"tan": [
			210,
			180,
			140
		],
		"teal": [
			0,
			128,
			128
		],
		"thistle": [
			216,
			191,
			216
		],
		"tomato": [
			255,
			99,
			71
		],
		"turquoise": [
			64,
			224,
			208
		],
		"violet": [
			238,
			130,
			238
		],
		"wheat": [
			245,
			222,
			179
		],
		"white": [
			255,
			255,
			255
		],
		"whitesmoke": [
			245,
			245,
			245
		],
		"yellow": [
			255,
			255,
			0
		],
		"yellowgreen": [
			154,
			205,
			50
		]
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/10.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(38);
	
	var _superagent = __webpack_require__(41);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _async = __webpack_require__(44);
	
	var async = _interopRequireWildcard(_async);
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var _viewContentSampleFieldJs = __webpack_require__(47);
	
	var _viewContentSampleFieldJs2 = _interopRequireDefault(_viewContentSampleFieldJs);
	
	var _AnimationManagerJs = __webpack_require__(48);
	
	var _AnimationManagerJs2 = _interopRequireDefault(_AnimationManagerJs);
	
	var SampleManager = (function (_EventDispatcher) {
	    _inherits(SampleManager, _EventDispatcher);
	
	    _createClass(SampleManager, [{
	        key: "CONFIG_LOADED",
	
	        /**@return {string}*/
	        get: function get() {
	            return "CONFIG_LOADED";
	        }
	    }, {
	        key: "PRE_READY_SAMPLE",
	
	        /**@return {string}*/
	        get: function get() {
	            return "PRE_READY_SAMPLE";
	        }
	    }], [{
	        key: "instance",
	        get: function get() {
	            if (!(SampleManager._instance instanceof SampleManager)) {
	                SampleManager._instance = new SampleManager();
	            }
	            return SampleManager._instance;
	        }
	    }]);
	
	    function SampleManager() {
	        var _this = this;
	
	        _classCallCheck(this, SampleManager);
	
	        _get(Object.getPrototypeOf(SampleManager.prototype), "constructor", this).call(this);
	        this.samplesData = {};
	        this.samplesDict = {}; //例子代码文件
	        this.currSampleScript = null;
	        this.currSampleID = null;
	        agent.get("dist/post_data.json").then(function (res) {
	            _this.samplesData = JSON.parse(res.text);
	
	            _this.samplesDict["HEAD"] = _this.samplesData.posts[0];
	            _this.samplesIdDict = {};
	            var id = 1;
	            _this.samplesData.posts.forEach(function (post) {
	                post.activeState = false;
	                post.id = id;
	                id++;
	                _this.samplesDict[id + post.title + post.date] = post;
	                _this.samplesIdDict[post.id] = post;
	            });
	
	            _this.finsishLoadConfig();
	        });
	
	        //this.addListener(this.READY_SAMPLE,this.readySample.bind(this))
	    }
	
	    _createClass(SampleManager, [{
	        key: "finsishLoadConfig",
	        value: function finsishLoadConfig() {
	            this.emit(this.CONFIG_LOADED);
	            this.toggleToSample("HEAD");
	        }
	    }, {
	        key: "toggleToSample",
	        value: function toggleToSample(hashorid, cb) {
	            var _this2 = this;
	
	            var sample = this.samplesDict[hashorid];
	            if (!sample) {
	                sample = this.samplesIdDict[hashorid];
	            }
	
	            if (sample) {
	                if (!sample["marddown"] && !sample["script"]) {
	                    async.series([function (next) {
	                        agent.get(_utilsUtilsJs.url.join("dist/post", sample.path, "/Entry.js")).end(function (err, res) {
	                            next(err, res.text);
	                        });
	                    }, function (next) {
	                        agent.get(_utilsUtilsJs.url.join("src-post/", sample.path, "Note.md")).end(function (err, res) {
	                            next(err, res.text);
	                        });
	                    }], function (err, results) {
	                        var res_script = results[0];
	                        var res_markdown = results[1];
	
	                        eval.apply(_this2, ["var script =" + res_script]);
	                        if (typeof script !== "undefined" && script.prototype && script.prototype instanceof _viewContentSampleFieldJs2["default"]) {
	                            sample["script"] = script;
	                        } else {
	                            console.warn("load sample script error", sample.path);
	                        }
	
	                        sample["markdown"] = res_markdown;
	
	                        if (!err) {
	                            _this2.preReadySample(sample, cb);
	                        } else {
	                            if (typeof cb === "function") {
	                                cb();
	                            }
	                        }
	                    });
	                } else {
	                    this.preReadySample(sample, cb);
	                }
	            }
	        }
	    }, {
	        key: "preReadySample",
	        value: function preReadySample(sample, cb) {
	            //console.log("preReadySample")
	            this.samplesData.posts.forEach(function (post) {
	                post.activeState = false;
	            });
	
	            sample.activeState = true;
	            if (typeof cb === "function") {
	                cb();
	            }
	
	            this.emit(this.PRE_READY_SAMPLE, { sample: sample });
	        }
	    }, {
	        key: "readySample",
	        value: function readySample(id, data) {
	            if (id === this.currSampleID) return;
	            this.currSampleID = id;
	
	            var sample = this.samplesIdDict[id];
	
	            if (this.currSampleScript) {
	                this.currSampleScript.destruct();
	                if (this.currSampleScript.notImplementOnDestruct) {
	                    _AnimationManagerJs2["default"].stop(true);
	                }
	            }
	
	            if (sample) {
	                if (!sample.runingScript) {
	                    sample.runingScript = new sample.script(sample.id, _utilsUtilsJs.url.join("src-post/", sample.path), _utilsUtilsJs.url.join("dist/post", sample.path));
	                }
	                sample.runingScript.launch(data.canvas, data);
	                this.currSampleScript = sample.runingScript;
	            }
	        }
	    }]);
	
	    return SampleManager;
	})(_alsc.EventDispatcher);
	
	exports["default"] = SampleManager.instance;
	module.exports = exports["default"];

	/**@return {string}*/
	//get READY_SAMPLE(){return "READY_SAMPLE";};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	
	exports.EventDispatcher = __webpack_require__(39);
	//exports.Ajax  = require("./dist/ajax/AjaxProxy.js")

/***/ },
/* 39 */
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
	
	var _utilsJs = __webpack_require__(40);
	
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(42);
	var reduce = __webpack_require__(43);
	
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate, process) {/*!
	 * async
	 * https://github.com/caolan/async
	 *
	 * Copyright 2010-2014 Caolan McMahon
	 * Released under the MIT license
	 */
	(function () {
	
	    var async = {};
	    function noop() {}
	    function identity(v) {
	        return v;
	    }
	    function toBool(v) {
	        return !!v;
	    }
	    function notId(v) {
	        return !v;
	    }
	
	    // global on the server, window in the browser
	    var previous_async;
	
	    // Establish the root object, `window` (`self`) in the browser, `global`
	    // on the server, or `this` in some virtual machines. We use `self`
	    // instead of `window` for `WebWorker` support.
	    var root = typeof self === 'object' && self.self === self && self ||
	            typeof global === 'object' && global.global === global && global ||
	            this;
	
	    if (root != null) {
	        previous_async = root.async;
	    }
	
	    async.noConflict = function () {
	        root.async = previous_async;
	        return async;
	    };
	
	    function only_once(fn) {
	        return function() {
	            if (fn === null) throw new Error("Callback was already called.");
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }
	
	    function _once(fn) {
	        return function() {
	            if (fn === null) return;
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }
	
	    //// cross-browser compatiblity functions ////
	
	    var _toString = Object.prototype.toString;
	
	    var _isArray = Array.isArray || function (obj) {
	        return _toString.call(obj) === '[object Array]';
	    };
	
	    // Ported from underscore.js isObject
	    var _isObject = function(obj) {
	        var type = typeof obj;
	        return type === 'function' || type === 'object' && !!obj;
	    };
	
	    function _isArrayLike(arr) {
	        return _isArray(arr) || (
	            // has a positive integer length property
	            typeof arr.length === "number" &&
	            arr.length >= 0 &&
	            arr.length % 1 === 0
	        );
	    }
	
	    function _each(coll, iterator) {
	        return _isArrayLike(coll) ?
	            _arrayEach(coll, iterator) :
	            _forEachOf(coll, iterator);
	    }
	
	    function _arrayEach(arr, iterator) {
	        var index = -1,
	            length = arr.length;
	
	        while (++index < length) {
	            iterator(arr[index], index, arr);
	        }
	    }
	
	    function _map(arr, iterator) {
	        var index = -1,
	            length = arr.length,
	            result = Array(length);
	
	        while (++index < length) {
	            result[index] = iterator(arr[index], index, arr);
	        }
	        return result;
	    }
	
	    function _range(count) {
	        return _map(Array(count), function (v, i) { return i; });
	    }
	
	    function _reduce(arr, iterator, memo) {
	        _arrayEach(arr, function (x, i, a) {
	            memo = iterator(memo, x, i, a);
	        });
	        return memo;
	    }
	
	    function _forEachOf(object, iterator) {
	        _arrayEach(_keys(object), function (key) {
	            iterator(object[key], key);
	        });
	    }
	
	    function _indexOf(arr, item) {
	        for (var i = 0; i < arr.length; i++) {
	            if (arr[i] === item) return i;
	        }
	        return -1;
	    }
	
	    var _keys = Object.keys || function (obj) {
	        var keys = [];
	        for (var k in obj) {
	            if (obj.hasOwnProperty(k)) {
	                keys.push(k);
	            }
	        }
	        return keys;
	    };
	
	    function _keyIterator(coll) {
	        var i = -1;
	        var len;
	        var keys;
	        if (_isArrayLike(coll)) {
	            len = coll.length;
	            return function next() {
	                i++;
	                return i < len ? i : null;
	            };
	        } else {
	            keys = _keys(coll);
	            len = keys.length;
	            return function next() {
	                i++;
	                return i < len ? keys[i] : null;
	            };
	        }
	    }
	
	    // Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
	    // This accumulates the arguments passed into an array, after a given index.
	    // From underscore.js (https://github.com/jashkenas/underscore/pull/2140).
	    function _restParam(func, startIndex) {
	        startIndex = startIndex == null ? func.length - 1 : +startIndex;
	        return function() {
	            var length = Math.max(arguments.length - startIndex, 0);
	            var rest = Array(length);
	            for (var index = 0; index < length; index++) {
	                rest[index] = arguments[index + startIndex];
	            }
	            switch (startIndex) {
	                case 0: return func.call(this, rest);
	                case 1: return func.call(this, arguments[0], rest);
	            }
	            // Currently unused but handle cases outside of the switch statement:
	            // var args = Array(startIndex + 1);
	            // for (index = 0; index < startIndex; index++) {
	            //     args[index] = arguments[index];
	            // }
	            // args[startIndex] = rest;
	            // return func.apply(this, args);
	        };
	    }
	
	    function _withoutIndex(iterator) {
	        return function (value, index, callback) {
	            return iterator(value, callback);
	        };
	    }
	
	    //// exported async module functions ////
	
	    //// nextTick implementation with browser-compatible fallback ////
	
	    // capture the global reference to guard against fakeTimer mocks
	    var _setImmediate = typeof setImmediate === 'function' && setImmediate;
	
	    var _delay = _setImmediate ? function(fn) {
	        // not a direct alias for IE10 compatibility
	        _setImmediate(fn);
	    } : function(fn) {
	        setTimeout(fn, 0);
	    };
	
	    if (typeof process === 'object' && typeof process.nextTick === 'function') {
	        async.nextTick = process.nextTick;
	    } else {
	        async.nextTick = _delay;
	    }
	    async.setImmediate = _setImmediate ? _delay : async.nextTick;
	
	
	    async.forEach =
	    async.each = function (arr, iterator, callback) {
	        return async.eachOf(arr, _withoutIndex(iterator), callback);
	    };
	
	    async.forEachSeries =
	    async.eachSeries = function (arr, iterator, callback) {
	        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
	    };
	
	
	    async.forEachLimit =
	    async.eachLimit = function (arr, limit, iterator, callback) {
	        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
	    };
	
	    async.forEachOf =
	    async.eachOf = function (object, iterator, callback) {
	        callback = _once(callback || noop);
	        object = object || [];
	        var size = _isArrayLike(object) ? object.length : _keys(object).length;
	        var completed = 0;
	        if (!size) {
	            return callback(null);
	        }
	        _each(object, function (value, key) {
	            iterator(object[key], key, only_once(done));
	        });
	        function done(err) {
	            if (err) {
	                callback(err);
	            }
	            else {
	                completed += 1;
	                if (completed >= size) {
	                    callback(null);
	                }
	            }
	        }
	    };
	
	    async.forEachOfSeries =
	    async.eachOfSeries = function (obj, iterator, callback) {
	        callback = _once(callback || noop);
	        obj = obj || [];
	        var nextKey = _keyIterator(obj);
	        var key = nextKey();
	        function iterate() {
	            var sync = true;
	            if (key === null) {
	                return callback(null);
	            }
	            iterator(obj[key], key, only_once(function (err) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    key = nextKey();
	                    if (key === null) {
	                        return callback(null);
	                    } else {
	                        if (sync) {
	                            async.nextTick(iterate);
	                        } else {
	                            iterate();
	                        }
	                    }
	                }
	            }));
	            sync = false;
	        }
	        iterate();
	    };
	
	
	
	    async.forEachOfLimit =
	    async.eachOfLimit = function (obj, limit, iterator, callback) {
	        _eachOfLimit(limit)(obj, iterator, callback);
	    };
	
	    function _eachOfLimit(limit) {
	
	        return function (obj, iterator, callback) {
	            callback = _once(callback || noop);
	            obj = obj || [];
	            var nextKey = _keyIterator(obj);
	            if (limit <= 0) {
	                return callback(null);
	            }
	            var done = false;
	            var running = 0;
	            var errored = false;
	
	            (function replenish () {
	                if (done && running <= 0) {
	                    return callback(null);
	                }
	
	                while (running < limit && !errored) {
	                    var key = nextKey();
	                    if (key === null) {
	                        done = true;
	                        if (running <= 0) {
	                            callback(null);
	                        }
	                        return;
	                    }
	                    running += 1;
	                    iterator(obj[key], key, only_once(function (err) {
	                        running -= 1;
	                        if (err) {
	                            callback(err);
	                            errored = true;
	                        }
	                        else {
	                            replenish();
	                        }
	                    }));
	                }
	            })();
	        };
	    }
	
	
	    function doParallel(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOf, obj, iterator, callback);
	        };
	    }
	    function doParallelLimit(fn) {
	        return function (obj, limit, iterator, callback) {
	            return fn(_eachOfLimit(limit), obj, iterator, callback);
	        };
	    }
	    function doSeries(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOfSeries, obj, iterator, callback);
	        };
	    }
	
	    function _asyncMap(eachfn, arr, iterator, callback) {
	        callback = _once(callback || noop);
	        var results = [];
	        eachfn(arr, function (value, index, callback) {
	            iterator(value, function (err, v) {
	                results[index] = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    async.map = doParallel(_asyncMap);
	    async.mapSeries = doSeries(_asyncMap);
	    async.mapLimit = doParallelLimit(_asyncMap);
	
	    // reduce only has a series version, as doing reduce in parallel won't
	    // work in many situations.
	    async.inject =
	    async.foldl =
	    async.reduce = function (arr, memo, iterator, callback) {
	        async.eachOfSeries(arr, function (x, i, callback) {
	            iterator(memo, x, function (err, v) {
	                memo = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err || null, memo);
	        });
	    };
	
	    async.foldr =
	    async.reduceRight = function (arr, memo, iterator, callback) {
	        var reversed = _map(arr, identity).reverse();
	        async.reduce(reversed, memo, iterator, callback);
	    };
	
	    function _filter(eachfn, arr, iterator, callback) {
	        var results = [];
	        eachfn(arr, function (x, index, callback) {
	            iterator(x, function (v) {
	                if (v) {
	                    results.push({index: index, value: x});
	                }
	                callback();
	            });
	        }, function () {
	            callback(_map(results.sort(function (a, b) {
	                return a.index - b.index;
	            }), function (x) {
	                return x.value;
	            }));
	        });
	    }
	
	    async.select =
	    async.filter = doParallel(_filter);
	
	    async.selectLimit =
	    async.filterLimit = doParallelLimit(_filter);
	
	    async.selectSeries =
	    async.filterSeries = doSeries(_filter);
	
	    function _reject(eachfn, arr, iterator, callback) {
	        _filter(eachfn, arr, function(value, cb) {
	            iterator(value, function(v) {
	                cb(!v);
	            });
	        }, callback);
	    }
	    async.reject = doParallel(_reject);
	    async.rejectLimit = doParallelLimit(_reject);
	    async.rejectSeries = doSeries(_reject);
	
	    function _createTester(eachfn, check, getResult) {
	        return function(arr, limit, iterator, cb) {
	            function done() {
	                if (cb) cb(getResult(false, void 0));
	            }
	            function iteratee(x, _, callback) {
	                if (!cb) return callback();
	                iterator(x, function (v) {
	                    if (cb && check(v)) {
	                        cb(getResult(true, x));
	                        cb = iterator = false;
	                    }
	                    callback();
	                });
	            }
	            if (arguments.length > 3) {
	                eachfn(arr, limit, iteratee, done);
	            } else {
	                cb = iterator;
	                iterator = limit;
	                eachfn(arr, iteratee, done);
	            }
	        };
	    }
	
	    async.any =
	    async.some = _createTester(async.eachOf, toBool, identity);
	
	    async.someLimit = _createTester(async.eachOfLimit, toBool, identity);
	
	    async.all =
	    async.every = _createTester(async.eachOf, notId, notId);
	
	    async.everyLimit = _createTester(async.eachOfLimit, notId, notId);
	
	    function _findGetResult(v, x) {
	        return x;
	    }
	    async.detect = _createTester(async.eachOf, identity, _findGetResult);
	    async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
	    async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);
	
	    async.sortBy = function (arr, iterator, callback) {
	        async.map(arr, function (x, callback) {
	            iterator(x, function (err, criteria) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    callback(null, {value: x, criteria: criteria});
	                }
	            });
	        }, function (err, results) {
	            if (err) {
	                return callback(err);
	            }
	            else {
	                callback(null, _map(results.sort(comparator), function (x) {
	                    return x.value;
	                }));
	            }
	
	        });
	
	        function comparator(left, right) {
	            var a = left.criteria, b = right.criteria;
	            return a < b ? -1 : a > b ? 1 : 0;
	        }
	    };
	
	    async.auto = function (tasks, callback) {
	        callback = _once(callback || noop);
	        var keys = _keys(tasks);
	        var remainingTasks = keys.length;
	        if (!remainingTasks) {
	            return callback(null);
	        }
	
	        var results = {};
	
	        var listeners = [];
	        function addListener(fn) {
	            listeners.unshift(fn);
	        }
	        function removeListener(fn) {
	            var idx = _indexOf(listeners, fn);
	            if (idx >= 0) listeners.splice(idx, 1);
	        }
	        function taskComplete() {
	            remainingTasks--;
	            _arrayEach(listeners.slice(0), function (fn) {
	                fn();
	            });
	        }
	
	        addListener(function () {
	            if (!remainingTasks) {
	                callback(null, results);
	            }
	        });
	
	        _arrayEach(keys, function (k) {
	            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
	            var taskCallback = _restParam(function(err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                if (err) {
	                    var safeResults = {};
	                    _forEachOf(results, function(val, rkey) {
	                        safeResults[rkey] = val;
	                    });
	                    safeResults[k] = args;
	                    callback(err, safeResults);
	                }
	                else {
	                    results[k] = args;
	                    async.setImmediate(taskComplete);
	                }
	            });
	            var requires = task.slice(0, task.length - 1);
	            // prevent dead-locks
	            var len = requires.length;
	            var dep;
	            while (len--) {
	                if (!(dep = tasks[requires[len]])) {
	                    throw new Error('Has inexistant dependency');
	                }
	                if (_isArray(dep) && _indexOf(dep, k) >= 0) {
	                    throw new Error('Has cyclic dependencies');
	                }
	            }
	            function ready() {
	                return _reduce(requires, function (a, x) {
	                    return (a && results.hasOwnProperty(x));
	                }, true) && !results.hasOwnProperty(k);
	            }
	            if (ready()) {
	                task[task.length - 1](taskCallback, results);
	            }
	            else {
	                addListener(listener);
	            }
	            function listener() {
	                if (ready()) {
	                    removeListener(listener);
	                    task[task.length - 1](taskCallback, results);
	                }
	            }
	        });
	    };
	
	
	
	    async.retry = function(times, task, callback) {
	        var DEFAULT_TIMES = 5;
	        var DEFAULT_INTERVAL = 0;
	
	        var attempts = [];
	
	        var opts = {
	            times: DEFAULT_TIMES,
	            interval: DEFAULT_INTERVAL
	        };
	
	        function parseTimes(acc, t){
	            if(typeof t === 'number'){
	                acc.times = parseInt(t, 10) || DEFAULT_TIMES;
	            } else if(typeof t === 'object'){
	                acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
	                acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
	            } else {
	                throw new Error('Unsupported argument type for \'times\': ' + typeof t);
	            }
	        }
	
	        var length = arguments.length;
	        if (length < 1 || length > 3) {
	            throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
	        } else if (length <= 2 && typeof times === 'function') {
	            callback = task;
	            task = times;
	        }
	        if (typeof times !== 'function') {
	            parseTimes(opts, times);
	        }
	        opts.callback = callback;
	        opts.task = task;
	
	        function wrappedTask(wrappedCallback, wrappedResults) {
	            function retryAttempt(task, finalAttempt) {
	                return function(seriesCallback) {
	                    task(function(err, result){
	                        seriesCallback(!err || finalAttempt, {err: err, result: result});
	                    }, wrappedResults);
	                };
	            }
	
	            function retryInterval(interval){
	                return function(seriesCallback){
	                    setTimeout(function(){
	                        seriesCallback(null);
	                    }, interval);
	                };
	            }
	
	            while (opts.times) {
	
	                var finalAttempt = !(opts.times-=1);
	                attempts.push(retryAttempt(opts.task, finalAttempt));
	                if(!finalAttempt && opts.interval > 0){
	                    attempts.push(retryInterval(opts.interval));
	                }
	            }
	
	            async.series(attempts, function(done, data){
	                data = data[data.length - 1];
	                (wrappedCallback || opts.callback)(data.err, data.result);
	            });
	        }
	
	        // If a callback is passed, run this as a controll flow
	        return opts.callback ? wrappedTask() : wrappedTask;
	    };
	
	    async.waterfall = function (tasks, callback) {
	        callback = _once(callback || noop);
	        if (!_isArray(tasks)) {
	            var err = new Error('First argument to waterfall must be an array of functions');
	            return callback(err);
	        }
	        if (!tasks.length) {
	            return callback();
	        }
	        function wrapIterator(iterator) {
	            return _restParam(function (err, args) {
	                if (err) {
	                    callback.apply(null, [err].concat(args));
	                }
	                else {
	                    var next = iterator.next();
	                    if (next) {
	                        args.push(wrapIterator(next));
	                    }
	                    else {
	                        args.push(callback);
	                    }
	                    ensureAsync(iterator).apply(null, args);
	                }
	            });
	        }
	        wrapIterator(async.iterator(tasks))();
	    };
	
	    function _parallel(eachfn, tasks, callback) {
	        callback = callback || noop;
	        var results = _isArrayLike(tasks) ? [] : {};
	
	        eachfn(tasks, function (task, key, callback) {
	            task(_restParam(function (err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                results[key] = args;
	                callback(err);
	            }));
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    async.parallel = function (tasks, callback) {
	        _parallel(async.eachOf, tasks, callback);
	    };
	
	    async.parallelLimit = function(tasks, limit, callback) {
	        _parallel(_eachOfLimit(limit), tasks, callback);
	    };
	
	    async.series = function(tasks, callback) {
	        _parallel(async.eachOfSeries, tasks, callback);
	    };
	
	    async.iterator = function (tasks) {
	        function makeCallback(index) {
	            function fn() {
	                if (tasks.length) {
	                    tasks[index].apply(null, arguments);
	                }
	                return fn.next();
	            }
	            fn.next = function () {
	                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
	            };
	            return fn;
	        }
	        return makeCallback(0);
	    };
	
	    async.apply = _restParam(function (fn, args) {
	        return _restParam(function (callArgs) {
	            return fn.apply(
	                null, args.concat(callArgs)
	            );
	        });
	    });
	
	    function _concat(eachfn, arr, fn, callback) {
	        var result = [];
	        eachfn(arr, function (x, index, cb) {
	            fn(x, function (err, y) {
	                result = result.concat(y || []);
	                cb(err);
	            });
	        }, function (err) {
	            callback(err, result);
	        });
	    }
	    async.concat = doParallel(_concat);
	    async.concatSeries = doSeries(_concat);
	
	    async.whilst = function (test, iterator, callback) {
	        callback = callback || noop;
	        if (test()) {
	            var next = _restParam(function(err, args) {
	                if (err) {
	                    callback(err);
	                } else if (test.apply(this, args)) {
	                    iterator(next);
	                } else {
	                    callback(null);
	                }
	            });
	            iterator(next);
	        } else {
	            callback(null);
	        }
	    };
	
	    async.doWhilst = function (iterator, test, callback) {
	        var calls = 0;
	        return async.whilst(function() {
	            return ++calls <= 1 || test.apply(this, arguments);
	        }, iterator, callback);
	    };
	
	    async.until = function (test, iterator, callback) {
	        return async.whilst(function() {
	            return !test.apply(this, arguments);
	        }, iterator, callback);
	    };
	
	    async.doUntil = function (iterator, test, callback) {
	        return async.doWhilst(iterator, function() {
	            return !test.apply(this, arguments);
	        }, callback);
	    };
	
	    async.during = function (test, iterator, callback) {
	        callback = callback || noop;
	
	        var next = _restParam(function(err, args) {
	            if (err) {
	                callback(err);
	            } else {
	                args.push(check);
	                test.apply(this, args);
	            }
	        });
	
	        var check = function(err, truth) {
	            if (err) {
	                callback(err);
	            } else if (truth) {
	                iterator(next);
	            } else {
	                callback(null);
	            }
	        };
	
	        test(check);
	    };
	
	    async.doDuring = function (iterator, test, callback) {
	        var calls = 0;
	        async.during(function(next) {
	            if (calls++ < 1) {
	                next(null, true);
	            } else {
	                test.apply(this, arguments);
	            }
	        }, iterator, callback);
	    };
	
	    function _queue(worker, concurrency, payload) {
	        if (concurrency == null) {
	            concurrency = 1;
	        }
	        else if(concurrency === 0) {
	            throw new Error('Concurrency must not be zero');
	        }
	        function _insert(q, data, pos, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0 && q.idle()) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    callback: callback || noop
	                };
	
	                if (pos) {
	                    q.tasks.unshift(item);
	                } else {
	                    q.tasks.push(item);
	                }
	
	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	            });
	            async.setImmediate(q.process);
	        }
	        function _next(q, tasks) {
	            return function(){
	                workers -= 1;
	                var args = arguments;
	                _arrayEach(tasks, function (task) {
	                    task.callback.apply(task, args);
	                });
	                if (q.tasks.length + workers === 0) {
	                    q.drain();
	                }
	                q.process();
	            };
	        }
	
	        var workers = 0;
	        var q = {
	            tasks: [],
	            concurrency: concurrency,
	            payload: payload,
	            saturated: noop,
	            empty: noop,
	            drain: noop,
	            started: false,
	            paused: false,
	            push: function (data, callback) {
	                _insert(q, data, false, callback);
	            },
	            kill: function () {
	                q.drain = noop;
	                q.tasks = [];
	            },
	            unshift: function (data, callback) {
	                _insert(q, data, true, callback);
	            },
	            process: function () {
	                if (!q.paused && workers < q.concurrency && q.tasks.length) {
	                    while(workers < q.concurrency && q.tasks.length){
	                        var tasks = q.payload ?
	                            q.tasks.splice(0, q.payload) :
	                            q.tasks.splice(0, q.tasks.length);
	
	                        var data = _map(tasks, function (task) {
	                            return task.data;
	                        });
	
	                        if (q.tasks.length === 0) {
	                            q.empty();
	                        }
	                        workers += 1;
	                        var cb = only_once(_next(q, tasks));
	                        worker(data, cb);
	                    }
	                }
	            },
	            length: function () {
	                return q.tasks.length;
	            },
	            running: function () {
	                return workers;
	            },
	            idle: function() {
	                return q.tasks.length + workers === 0;
	            },
	            pause: function () {
	                q.paused = true;
	            },
	            resume: function () {
	                if (q.paused === false) { return; }
	                q.paused = false;
	                var resumeCount = Math.min(q.concurrency, q.tasks.length);
	                // Need to call q.process once per concurrent
	                // worker to preserve full concurrency after pause
	                for (var w = 1; w <= resumeCount; w++) {
	                    async.setImmediate(q.process);
	                }
	            }
	        };
	        return q;
	    }
	
	    async.queue = function (worker, concurrency) {
	        var q = _queue(function (items, cb) {
	            worker(items[0], cb);
	        }, concurrency, 1);
	
	        return q;
	    };
	
	    async.priorityQueue = function (worker, concurrency) {
	
	        function _compareTasks(a, b){
	            return a.priority - b.priority;
	        }
	
	        function _binarySearch(sequence, item, compare) {
	            var beg = -1,
	                end = sequence.length - 1;
	            while (beg < end) {
	                var mid = beg + ((end - beg + 1) >>> 1);
	                if (compare(item, sequence[mid]) >= 0) {
	                    beg = mid;
	                } else {
	                    end = mid - 1;
	                }
	            }
	            return beg;
	        }
	
	        function _insert(q, data, priority, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    priority: priority,
	                    callback: typeof callback === 'function' ? callback : noop
	                };
	
	                q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
	
	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	                async.setImmediate(q.process);
	            });
	        }
	
	        // Start with a normal queue
	        var q = async.queue(worker, concurrency);
	
	        // Override push to accept second parameter representing priority
	        q.push = function (data, priority, callback) {
	            _insert(q, data, priority, callback);
	        };
	
	        // Remove unshift function
	        delete q.unshift;
	
	        return q;
	    };
	
	    async.cargo = function (worker, payload) {
	        return _queue(worker, 1, payload);
	    };
	
	    function _console_fn(name) {
	        return _restParam(function (fn, args) {
	            fn.apply(null, args.concat([_restParam(function (err, args) {
	                if (typeof console === 'object') {
	                    if (err) {
	                        if (console.error) {
	                            console.error(err);
	                        }
	                    }
	                    else if (console[name]) {
	                        _arrayEach(args, function (x) {
	                            console[name](x);
	                        });
	                    }
	                }
	            })]));
	        });
	    }
	    async.log = _console_fn('log');
	    async.dir = _console_fn('dir');
	    /*async.info = _console_fn('info');
	    async.warn = _console_fn('warn');
	    async.error = _console_fn('error');*/
	
	    async.memoize = function (fn, hasher) {
	        var memo = {};
	        var queues = {};
	        hasher = hasher || identity;
	        var memoized = _restParam(function memoized(args) {
	            var callback = args.pop();
	            var key = hasher.apply(null, args);
	            if (key in memo) {
	                async.nextTick(function () {
	                    callback.apply(null, memo[key]);
	                });
	            }
	            else if (key in queues) {
	                queues[key].push(callback);
	            }
	            else {
	                queues[key] = [callback];
	                fn.apply(null, args.concat([_restParam(function (args) {
	                    memo[key] = args;
	                    var q = queues[key];
	                    delete queues[key];
	                    for (var i = 0, l = q.length; i < l; i++) {
	                        q[i].apply(null, args);
	                    }
	                })]));
	            }
	        });
	        memoized.memo = memo;
	        memoized.unmemoized = fn;
	        return memoized;
	    };
	
	    async.unmemoize = function (fn) {
	        return function () {
	            return (fn.unmemoized || fn).apply(null, arguments);
	        };
	    };
	
	    function _times(mapper) {
	        return function (count, iterator, callback) {
	            mapper(_range(count), iterator, callback);
	        };
	    }
	
	    async.times = _times(async.map);
	    async.timesSeries = _times(async.mapSeries);
	    async.timesLimit = function (count, limit, iterator, callback) {
	        return async.mapLimit(_range(count), limit, iterator, callback);
	    };
	
	    async.seq = function (/* functions... */) {
	        var fns = arguments;
	        return _restParam(function (args) {
	            var that = this;
	
	            var callback = args[args.length - 1];
	            if (typeof callback == 'function') {
	                args.pop();
	            } else {
	                callback = noop;
	            }
	
	            async.reduce(fns, args, function (newargs, fn, cb) {
	                fn.apply(that, newargs.concat([_restParam(function (err, nextargs) {
	                    cb(err, nextargs);
	                })]));
	            },
	            function (err, results) {
	                callback.apply(that, [err].concat(results));
	            });
	        });
	    };
	
	    async.compose = function (/* functions... */) {
	        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
	    };
	
	
	    function _applyEach(eachfn) {
	        return _restParam(function(fns, args) {
	            var go = _restParam(function(args) {
	                var that = this;
	                var callback = args.pop();
	                return eachfn(fns, function (fn, _, cb) {
	                    fn.apply(that, args.concat([cb]));
	                },
	                callback);
	            });
	            if (args.length) {
	                return go.apply(this, args);
	            }
	            else {
	                return go;
	            }
	        });
	    }
	
	    async.applyEach = _applyEach(async.eachOf);
	    async.applyEachSeries = _applyEach(async.eachOfSeries);
	
	
	    async.forever = function (fn, callback) {
	        var done = only_once(callback || noop);
	        var task = ensureAsync(fn);
	        function next(err) {
	            if (err) {
	                return done(err);
	            }
	            task(next);
	        }
	        next();
	    };
	
	    function ensureAsync(fn) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            args.push(function () {
	                var innerArgs = arguments;
	                if (sync) {
	                    async.setImmediate(function () {
	                        callback.apply(null, innerArgs);
	                    });
	                } else {
	                    callback.apply(null, innerArgs);
	                }
	            });
	            var sync = true;
	            fn.apply(this, args);
	            sync = false;
	        });
	    }
	
	    async.ensureAsync = ensureAsync;
	
	    async.constant = _restParam(function(values) {
	        var args = [null].concat(values);
	        return function (callback) {
	            return callback.apply(this, args);
	        };
	    });
	
	    async.wrapSync =
	    async.asyncify = function asyncify(func) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            var result;
	            try {
	                result = func.apply(this, args);
	            } catch (e) {
	                return callback(e);
	            }
	            // if result is Promise object
	            if (_isObject(result) && typeof result.then === "function") {
	                result.then(function(value) {
	                    callback(null, value);
	                })["catch"](function(err) {
	                    callback(err.message ? err : new Error(err));
	                });
	            } else {
	                callback(null, result);
	            }
	        });
	    };
	
	    // Node.js
	    if (typeof module === 'object' && module.exports) {
	        module.exports = async;
	    }
	    // AMD / RequireJS
	    else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return async;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    // included directly via <script> tag
	    else {
	        root.async = async;
	    }
	
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(45).setImmediate, __webpack_require__(46)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(46).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45).setImmediate, __webpack_require__(45).clearImmediate))

/***/ },
/* 46 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/21.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(38);
	
	var _superagent = __webpack_require__(41);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _async = __webpack_require__(44);
	
	var async = _interopRequireWildcard(_async);
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var utils = _interopRequireWildcard(_utilsUtilsJs);
	
	var SHADER_TYPE = {};
	SHADER_TYPE["vertex"] = WebGLRenderingContext.VERTEX_SHADER;
	SHADER_TYPE["fragment"] = WebGLRenderingContext.FRAGMENT_SHADER;
	
	var SampleField = (function (_EventDispatcher) {
	    _inherits(SampleField, _EventDispatcher);
	
	    function SampleField(id, src, dist) {
	        _classCallCheck(this, SampleField);
	
	        _get(Object.getPrototypeOf(SampleField.prototype), "constructor", this).call(this);
	        this["_srcPath"] = src;
	        this["_distPath"] = dist;
	        this.shadersDict = {};
	        this.CONSTANTS = Object.assign({}, utils.constants);
	        this.CONSTANTS.V = this.CONSTANTS.VERTEX_SHADER = "vertex";
	        this.CONSTANTS.F = this.CONSTANTS.FRAGMENT_SHADER = "fragment";
	        this._launchState = false;
	    }
	
	    _createClass(SampleField, [{
	        key: "srcPath",
	        value: function srcPath(url) {
	            return utils.url.join(this._srcPath, url);
	        }
	    }, {
	        key: "distPath",
	        value: function distPath(url) {
	            return utils.url.join(this._distPath, url);
	        }
	    }, {
	        key: "loadOneShader",
	        value: function loadOneShader(gl, url, type, name, cb) {
	            var _this = this;
	
	            return agent.get(url).end(function (err, res) {
	                if (!err) {
	                    if (!(type in SHADER_TYPE)) {
	                        return;
	                    }
	
	                    var shader = gl.createShader(SHADER_TYPE[type]);
	                    gl.shaderSource(shader, res.text);
	                    gl.compileShader(shader);
	
	                    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	                        error(gl.getShaderInfoLog(shader));
	                        return null;
	                    }
	
	                    _this.shadersDict[name] = shader;
	                }
	                if (typeof cb === "function") {
	                    cb(err, res.text || "");
	                }
	            });
	        }
	    }, {
	        key: "loadShaders",
	        value: function loadShaders(gl, cb, loadobj) {
	            var _this2 = this;
	
	            if (typeof cb !== "function" || !Array.isArray(loadobj) || loadobj.length <= 0) return;
	
	            var tasks = loadobj.map(function (load) {
	                if (load.url && load.type && load.name) {
	                    return function (next) {
	                        _this2.loadOneShader(gl, load.url, load.type, load.name, next);
	                    };
	                }
	                return function (next) {
	                    next(null, "");
	                };
	            });
	
	            async.series(tasks, function () {
	                if (_this2.launchState) {
	                    cb();
	                }
	            });
	        }
	    }, {
	        key: "onLaunch",
	        value: function onLaunch(canvas) {}
	    }, {
	        key: "onDestruct",
	        value: function onDestruct() {
	            this.notImplementOnDestruct = true;
	            //console.error("onDestruct not implement yet!",this._srcPath,this._distPath);
	        }
	    }, {
	        key: "launch",
	        get: function get() {
	            var _this3 = this;
	
	            return function (canvas, data) {
	                _this3._launchState = true;
	                _this3.onLaunch.apply(_this3, [canvas, data || {}]);
	                _this3.emit("launch");
	            };
	        }
	    }, {
	        key: "destruct",
	        get: function get() {
	            var _this4 = this;
	
	            return function () {
	                _this4._launchState = false;
	                _this4.onDestruct();
	                _this4.emit("destruct");
	            };
	        }
	    }, {
	        key: "launchState",
	        get: function get() {
	            return this._launchState;
	        }
	    }]);
	
	    return SampleField;
	})(_alsc.EventDispatcher);
	
	exports["default"] = SampleField;
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/23.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(38);
	
	var loop = "loop";
	
	var AnimationManager = (function (_EventDispatcher) {
	    _inherits(AnimationManager, _EventDispatcher);
	
	    _createClass(AnimationManager, null, [{
	        key: "instance",
	        get: function get() {
	            if (!(AnimationManager._instance instanceof AnimationManager)) {
	                AnimationManager._instance = new AnimationManager();
	            }
	            return AnimationManager._instance;
	        }
	    }]);
	
	    function AnimationManager() {
	        _classCallCheck(this, AnimationManager);
	
	        _get(Object.getPrototypeOf(AnimationManager.prototype), "constructor", this).call(this);
	        this._stopState = true;
	        //this.run();
	    }
	
	    _createClass(AnimationManager, [{
	        key: "run",
	        value: function run() {
	            if (!this._stopState) return;
	            this._stopState = false;
	            this._loop();
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            var force = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	            this._stopState = true;
	            if (force) {
	                this.removeAllListener(loop);
	            }
	        }
	    }, {
	        key: "onLoop",
	        value: function onLoop(fn) {
	            this.addListener(loop, fn);
	        }
	    }, {
	        key: "_loop",
	        value: function _loop() {
	            if (this._stopState) return;
	            requestAnimationFrame(this._loop.bind(this));
	            this.emit(loop);
	        }
	    }]);
	
	    return AnimationManager;
	})(_alsc.EventDispatcher);
	
	exports["default"] = AnimationManager.instance;
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/8.
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
	
	var _reactBootstrap = __webpack_require__(8);
	
	var _coreSampleManagerJs = __webpack_require__(37);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var SideBar = (function (_React$Component) {
	    _inherits(SideBar, _React$Component);
	
	    function SideBar() {
	        _classCallCheck(this, SideBar);
	
	        _get(Object.getPrototypeOf(SideBar.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(SideBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { className: 'sidebar', md: 3 },
	                _react2['default'].createElement(_reactBootstrap.Input, {
	                    type: 'text',
	                    placeholder: 'Enter key words...',
	                    label: 'Search',
	                    hasFeedback: true
	                }),
	                _react2['default'].createElement(
	                    'div',
	                    null,
	                    _react2['default'].createElement(
	                        _reactBootstrap.ListGroup,
	                        null,
	                        this.renderSampleItem()
	                    )
	                )
	            );
	
	            /*`
	            <Pagination
	                    prev
	                    next
	                    items={3}
	                    maxButtons={3}
	                    activePage={1}
	                    onSelect={()=>{}} />
	            `*/
	        }
	    }, {
	        key: 'renderSampleItem',
	        value: function renderSampleItem() {
	            var list = this.props.samplesList.filter(function (sample) {
	                return sample.id > 1;
	            });
	
	            var helloworld = this.props.samplesList[0];
	
	            var items = list.map(function (sample) {
	                return _react2['default'].createElement(SideBarListItem, { key: sample.id,
	                    sampleId: sample.id,
	                    active: !!sample.activeState,
	                    title: sample.title
	                });
	            });
	
	            if (helloworld) {
	                items.unshift(_react2['default'].createElement(SideBarListItem, {
	                    key: helloworld.id,
	                    sampleId: helloworld.id,
	                    active: !!helloworld.activeState,
	                    title: helloworld.title
	                }));
	            }
	
	            return items;
	        }
	    }]);
	
	    return SideBar;
	})(_react2['default'].Component);
	
	var SideBarListItem = (function (_ListGroupItem) {
	    _inherits(SideBarListItem, _ListGroupItem);
	
	    function SideBarListItem() {
	        _classCallCheck(this, SideBarListItem);
	
	        _get(Object.getPrototypeOf(SideBarListItem.prototype), 'constructor', this).call(this);
	        this.state = {
	            isLoading: false
	        };
	    }
	
	    _createClass(SideBarListItem, [{
	        key: 'onClickSampleItem',
	        value: function onClickSampleItem(e) {
	            var _this = this;
	
	            var sample = _coreSampleManagerJs2['default'].samplesIdDict[this.props.sampleId];
	            if (!!sample.activeState) return;
	            this.setState({ isLoading: true });
	            _coreSampleManagerJs2['default'].toggleToSample(sample.id, function () {
	                _this.setState({ isLoading: false });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2['default'].createElement(
	                _reactBootstrap.ListGroupItem,
	                {
	                    active: !!this.props.active,
	                    onClick: this.onClickSampleItem.bind(this) },
	                this.props.title,
	                (function () {
	                    if (_this2.state.isLoading) {
	                        return _react2['default'].createElement('span', { className: 'sign loading' });
	                    }
	                })()
	            );
	        }
	    }]);
	
	    return SideBarListItem;
	})(_reactBootstrap.ListGroupItem);
	
	exports['default'] = SideBar;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGRmZWFiOTQxMjQ1MTYxZWFlOTMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy9hcHAuZXM2fiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvQXBwLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9Cb2R5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdEJvb3RzdHJhcFwiIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9Db21tb25NYXJrUmVuZGVyLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvYmxvY2tzLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvY29tbW9uLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL3htbC5qc29uIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvbGVnYWN5Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9kZWNvZGUuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2lubGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub3JtYWxpemUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L3N0cmluZy5wcm90b3R5cGUucmVwZWF0L3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL34vY29sb3ItbmFtZS9pbmRleC5qc29uIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9TYW1wbGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYWxzYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7Ozs7Ozs7O2tDQUtLLENBQU87Ozs7c0NBQ1QsQ0FBZTs7OztnREFFTCxFQUF5Qjs7OzttREFDdEIsRUFBNEI7Ozs7cURBQ2pDLEVBQStCOzs7O0tBRWpELElBQUksR0FDSyxTQURULElBQUksR0FDTzsyQkFEWCxJQUFJOztBQUVGLHdCQUFNLE1BQU0sQ0FBQyw4REFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4RDs7QUFHTCxLQUFJLEdBQUcsQ0FBQztBQUNSLE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixXQUFNLEVBQUMsa0JBQVU7QUFDYixhQUFJLEdBQUcsWUFBWSxJQUFJLEVBQUUsT0FBTztBQUNoQyxZQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztNQUNwQjtBQUNELGdCQUFXLHVDQUFZO0FBQ3ZCLHFCQUFnQixxQ0FBaUI7RUFDcEMsQzs7Ozs7O0FDMUJELCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0drQixDQUFPOzs7OzJDQUVOLENBQW9COzs7O3lDQUN0QixDQUFrQjs7OzsyQ0FDaEIsQ0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaFFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNEIsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHOztBQUV2RDs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBZ0MsSUFBSTs7QUFFcEMsNkJBQTRCLElBQUk7O0FBRWhDLHVCQUFzQixHQUFHLFdBQVcsR0FBRzs7QUFFdkMsaUNBQWdDLEdBQUcsR0FBRyxHQUFHOztBQUV6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUssT0FBTzs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzlrRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFLLE9BQU87O0FBRVosc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRDtBQUNBLDBCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQSwwQkFBeUIsbUNBQW1DLDhDQUE4QztBQUMxRztBQUNBO0FBQ0EsMEJBQXlCLE9BQU8scUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaDZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBLFlBQVcsT0FBTyxzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjs7Ozs7OztBQ2pEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXVCLDJCQUEyQjs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNRQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF1QiwyQkFBMkI7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixPQUFPLFFBQVE7QUFDakMsbUJBQWtCLE9BQU8sUUFBUTtBQUNqQyxvQkFBbUIsT0FBTyxPQUFPO0FBQ2pDLG9CQUFtQixPQUFPLE9BQU87QUFDakMsbUJBQWtCLFFBQVEsT0FBTztBQUNqQyxtQkFBa0IsUUFBUSxPQUFPO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixFQUFFO0FBQ2pDLCtCQUE4QixFQUFFO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUyxzQkFBc0IsV0FBVyxZQUFZOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXdFO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsYUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFP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Q0E7QUFDQTs7QUFFQSw2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O2lFQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFtRCxVQUFVLEVBQUU7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7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QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDcnNDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLGlCQUFpQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDM0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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dkMsdUJBQUssUUFBUSxDQUFDLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Y0FDcEMsQ0FBQyxDQUFDO1VBQ047OztnQkFFSyxrQkFBRTs7O0FBQ0osb0JBQ0k7aUNBdEZnQixhQUFhOztBQXVGbEIsMkJBQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFPO0FBQzVCLDRCQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7aUJBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztpQkFDaEIsQ0FBQyxZQUFJO0FBQ0YseUJBQUcsT0FBSyxLQUFLLENBQUMsU0FBUyxFQUFDO0FBQ3BCLGdDQUFPLDJDQUFNLFNBQVMsRUFBQyxjQUFjLEdBQVE7c0JBQ2hEO2tCQUNKLEdBQUc7Y0FDUSxDQUNsQjtVQUNMOzs7WUE5QkMsZUFBZTtvQkFuRU8sYUFBYTs7c0JBb0cxQixPQUFPIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMGRmZWFiOTQxMjQ1MTYxZWFlOTNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzcvMTYuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3L0FwcC5qcyc7XG5cbmltcG9ydCBTYW1wbGVNYW5hZ2VyIGZyb20gJy4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcbmltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gJy4vY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzJztcbmltcG9ydCBTYW1wbGVGaWVsZCBmcm9tICcuL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qcyc7XG5cbmNsYXNzIE1haW57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOy8vXG4gICAgfVxufVxuXG52YXIgYXBwO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGF1bmNoOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKChhcHAgaW5zdGFuY2VvZiBNYWluKSlyZXR1cm47XG4gICAgICAgIGFwcCA9IG5ldyBNYWluKCk7XG4gICAgfSxcbiAgICBTYW1wbGVGaWVsZDpTYW1wbGVGaWVsZCxcbiAgICBBbmltYXRpb25NYW5hZ2VyOkFuaW1hdGlvbk1hbmFnZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvYXBwLmVzNn5cbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vbGF5b3V0L0hlYWRlci5qcyc7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vbGF5b3V0L0JvZHkuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vbGF5b3V0L0Zvb3Rlci5qcyc7XHJcblxyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCJcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxpemVTdGF0ZTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLmFkZExpc3RlbmVyKFNhbXBsZU1hbmFnZXIuQ09ORklHX0xPQURFRCx0aGlzLm9uU2FtcGxlQ29uZmlnUmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlBSRV9SRUFEWV9TQU1QTEUsdGhpcy5vblNhbXBsZVByZVJlYWR5LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzTW91bnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluaXRpYWxpemVTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDpjb25maWcubWluSGVpZ2h0IC8vZG9jdW1lbnQgbWFyZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhbXBsZXNEYXRhOm51bGwsXHJcbiAgICAgICAgICAgIHNhbXBsZUN1cnI6bnVsbCAvL+W9k+WJjeS+i+WtkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3R5bGUubWluSGVpZ2h0IT09d2luZG93LmlubmVySGVpZ2h0LTE2KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodC0xNiAvL2RvY3VtZW50IG1hcmdpblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVDb25maWdSZWFkeSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzYW1wbGVzRGF0YTpTYW1wbGVNYW5hZ2VyLnNhbXBsZXNEYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVQcmVSZWFkeShlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2FtcGxlQ3VycjplLnNhbXBsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge3RoaXMuaXNNb3VudCA9IHRydWU7fVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7dGhpcy5pc01vdW50ID0gZmFsc2V9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvL3RoaXMuc3RhdGUud2luZG93UmVzaXplZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFwcCA9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcGFnZSBwdWxsLWNlbnRlciBwYXBlclwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkgc2FtcGxlQ3Vycj17dGhpcy5zdGF0ZS5zYW1wbGVDdXJyfSBzYW1wbGVzRGF0YT17dGhpcy5zdGF0ZS5zYW1wbGVzRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9BcHAuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+wqkgMjAxNSZuYnNwOzxhIGhyZWY9e2NvbmZpZy51cmx9PnRvbW15enptPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlBvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhY3Q8L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL1wiIHRhcmdldD1cIl9ibGFua1wiPkJvb3RTdHJhcDwvYT48L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIwLlxyXG4gKi9cclxuZXhwb3J0IHZhciB1cmwgPSB7XHJcbiAgICBqb2luOmZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgam9pbmVkID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLmpvaW4oJy8nKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcPy9nLCAnPycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwjL2csICcjJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXDpcXC8vZywgJzovLycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwuXFwvL2csICdcXC8nKTtcclxuICAgICAgICB9KShqb2luZWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciByZXggPSB7XHJcbiAgICBodG1sU2luZ2xlVGFnOigvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy9cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgY29uc3RhbnRzID0ge1xyXG4gICAgUEk6TWF0aC5QSSxcclxuICAgIFBJXzI6IE1hdGguUEkgKiAyLFxyXG4gICAgUkFEX1RPX0RFRzoxODAgLyBNYXRoLlBJLFxyXG4gICAgREVHX1RPX1JBRDpNYXRoLlBJIC8gMTgwXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IHtcclxuICAgIHVybDpcImh0dHA6Ly93d3cuY2hhbGV0NTgxLnh5elwiLFxyXG4gICAgZ2V0IG1pbkhlaWdodCgpe1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQtMTY7XHJcbiAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3V0aWxzL3V0aWxzLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cInNpdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPldlYkdMIHRlc3Q8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90b21teVpaTS93ZWJHTFByYXRpY2VcIiB0aXRsZT1cIndhdGNoIHNvdXJjZSBvbiBnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1naXRodWItYWx0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb25maWcudXJsfSB0aXRsZT1cImJsb2dcIj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2l0ZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJyXCI+PGE+5qCX5a2QPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2luYy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9pbmMvU2lkZUJhci5qc1wiO1xyXG5cclxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gIDxkaXYgaWQ9XCJzaXRlLW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBzYW1wbGVDb250ZW50PXt0aGlzLnByb3BzLnNhbXBsZUN1cnJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzYW1wbGVzTGlzdD17KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2FtcGxlc0RhdGEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLnNhbXBsZXNEYXRhLnBvc3RzKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zYW1wbGVzRGF0YS5wb3N0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvQm9keS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Qm9vdHN0cmFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2x9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5pbXBvcnQgY29sb3IgZnJvbSBcImNvbG9yXCI7XHJcblxyXG5pbXBvcnQgU2FtcGxlUmVuZGVyZXIgZnJvbSAnLi4vY29udGVudC9TYW1wbGVSZW5kZXJlci5qcydcclxuaW1wb3J0IFNhbXBsZU1hbmFnZXIgZnJvbSAnLi4vLi4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcclxuXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIlxyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlBSRV9SRUFEWV9TQU1QTEUsdGhpcy5vblNhbXBsZVByZVJlYWR5LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb25TYW1wbGVQcmVSZWFkeSgpIHtcclxuICAgIC8vXHJcbiAgICAvL31cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbnRlbnQgXCIgbWQ9ezl9IHN0eWxlPXt7bWluSGVpZ2h0OmNvbmZpZy5taW5IZWlnaHQtMTM4LTkxfX0+XHJcbiAgICAgICAgICAgICAgICB7KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zYW1wbGVDb250ZW50JiZ0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1hcmtkb3duIGlkPXt0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWR9IHNvdXJjZT17dGhpcy5wcm9wcy5zYW1wbGVDb250ZW50Lm1hcmtkb3dufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyID0gbmV3IFNhbXBsZVJlbmRlcmVyKHtzb3VyY2Vwb3M6IHRydWV9KTtcclxuICAgICAgICB0aGlzLmlzUmVuZGVyU3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1F1ZXJ5ID0gW107XHJcbiAgICAgICAgdGhpcy5jYW52YXNEaWN0ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyLnJlbmRlckh0bWwoXCJjYW52YXNcIiwodGFnLGF0dHJzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPENhbnZhcyBwYXJlbnQ9e3RoaXN9IG5hbWU9e2F0dHJzLm5hbWV8fFwiXCJ9IGJlbG9uZ3N0bz17dGhpcy5wcm9wcy5pZH0vPjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5jYW52YXNEaWN0KXtcclxuICAgICAgICAgICAgZGljdFtpXSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuY2FudmFzRGljdFtpXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYW52YXM6e1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6dGhpcy5jYW52YXNRdWVyeS5tYXAoKGNhbnZhcyk9PntyZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY2FudmFzKX0pLFxyXG4gICAgICAgICAgICAgICAgZGlyY3Q6ZGljdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLnJlYWR5U2FtcGxlKHRoaXMucHJvcHMuaWQsZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNRdWVyeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLnNvdXJjZSA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMubWFya1JlbmRlcmVyLnJlbmRlcih0aGlzLnByb3BzLnNvdXJjZSB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICBpZihlbGVtZW50cyYmIWVsZW1lbnRzLnNvbWUoKGVsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZSlcclxuICAgICAgICAgICAgICAgIH0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZW5kZXJTdWNjZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShSZWFjdCxbXCJkaXZcIix7Y2xhc3NOYW1lOlwibWFya2Rvd25cIn1dLmNvbmNhdChlbGVtZW50cykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vb3BcIj48L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wcm9wcy5wYXJlbnQ7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5jYW52YXNRdWVyeS5wdXNoKGNhbnZhcyk7XHJcbiAgICAgICAgLy92YXIgZ2w9Y2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuICAgICAgICAvL3ZhciBiYWNrZ3JvdW5kID0gY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvcnx8d2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kID0gY29sb3IoYmFja2dyb3VuZCkucmdiKCk7XHJcbiAgICAgICAgLy9nbC5jbGVhckNvbG9yKGJhY2tncm91bmQuci8yNTUsIGJhY2tncm91bmQuZy8yNTUsIGJhY2tncm91bmQuYi8yNTUsIDEuMCk7XHJcbiAgICAgICAgLy9nbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5uYW1lKXBhcmVudC5jYW52YXNEaWN0W3RoaXMucHJvcHMubmFtZV09Y2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxjYW52YXMga2V5PXt0aGlzLnByb3BzLmJlbG9uZ3N0bytcIl9cIit0aGlzLnByb3BzLm5hbWV9IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gZGF0YS1iZWxvbmdzdG89e3RoaXMucHJvcHMuYmVsb25nc3RvfT48L2NhbnZhcz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvaW5jL0NvbnRlbnQuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjMuXHJcbiAqL1xyXG4vL+a4suafk1NhbXBsZVxyXG5cclxuaW1wb3J0IENvbW1vbk1hcmtSZW5kZXIgZnJvbSBcIi4vQ29tbW9uTWFya1JlbmRlci5qc1wiO1xyXG5cclxuLy9pbXBvcnQgTWFya2VkUmVuZGVyZXIgZnJvbSBcIi4vbWFya2Rvd24vTWFya2VkUmVuZGVyZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbk1hcmtSZW5kZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2NvbnRlbnQvU2FtcGxlUmVuZGVyZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjQuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBDb21tb25tYXJrIGZyb20gJ2NvbW1vbm1hcmsnO1xyXG5cclxudmFyIHJleCA9IHtcclxuICAgIGh0bWxTaW5nbGVUYWc6KC9ePChcXHcrKVxccyooLiopXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy8sXHJcbiAgICBodG1sUHJvcHM6LyhcXHcrKT0oW14+XSspL2lcclxufTtcclxuXHJcbnZhciBkb21JZGVudGl0eTtcclxuaWYodHlwZW9mIGRvY3VtZW50IT09XCJ1bmRlZmluZWRcIil7XHJcbiAgICBkb21JZGVudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbn1lbHNle1xyXG4gICAgY29uc29sZS5lcnJvcihcImRvY3VtZW50IHVuZGVmaW5lZCFcIik7XHJcbn1cclxuXHJcbnZhciBtYXJrUHJhc2VyID0gbmV3IENvbW1vbm1hcmsuUGFyc2VyKCk7XHJcblxyXG5jbGFzcyBSZW5kZXJlciBpbXBsZW1lbnRzIElDb21tb25tYXJrUmVuZGVyZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuICAgICAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5zb3VyY2VQb3M9b3B0cy5zb3VyY2VQb3M7XHJcbiAgICAgICAgdGhpcy5zb2Z0QnJlYWsgPSBvcHRzLnNvZnRCcmVhayB8fCAnXFxuJztcclxuICAgICAgICB0aGlzLmVzY2FwZUh0bWwgPSAhIW9wdHMuZXNjYXBlSHRtbDtcclxuICAgICAgICB0aGlzLnNraXBIdG1sID0gISFvcHRzLnNraXBIdG1sO1xyXG5cclxuICAgICAgICB0aGlzLmhvd1JlbmRlckh0bWwgPSB7fTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckh0bWwodGFnTmFtZSxmbil7XHJcbiAgICAgICAgaWYodHlwZW9mIGZuIT09XCJmdW5jdGlvblwiKXJldHVybjtcclxuICAgICAgICB0aGlzLmhvd1JlbmRlckh0bWxbdGFnTmFtZV09Zm5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc291cmNlKXtcclxuICAgICAgICB2YXIgYmxvY2sgPSBtYXJrUHJhc2VyLnBhcnNlKHNvdXJjZSB8fCAnJyk7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gTWFya2Rvd25Ob2RlRWxlbWVudDtcclxuXHJcbiAgICAgICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xyXG4gICAgICAgIHZhciBzb3VyY2VQb3MgPSB0aGlzLnNvdXJjZVBvcztcclxuICAgICAgICB2YXIgZXNjYXBlSHRtbCA9IHRoaXMuZXNjYXBlSHRtbDtcclxuICAgICAgICB2YXIgc2tpcEh0bWwgPSB0aGlzLnNraXBIdG1sO1xyXG4gICAgICAgIHZhciBpbmZvV29yZHM7XHJcbiAgICAgICAgdmFyIHNvZnRCcmVhayA9IChcclxuICAgICAgICAgICAgdGhpcy5zb2Z0QnJlYWsgPT09ICdicicgP1xyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInKSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvZnRCcmVha1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBlLCBub2RlLCBlbnRlcmluZywgbGVhdmluZywgYXR0cnMsIGRvYztcclxuICAgICAgICB3aGlsZSAoKGUgPSB3YWxrZXIubmV4dCgpKSkge1xyXG4gICAgICAgICAgICBlbnRlcmluZyA9IGUuZW50ZXJpbmc7XHJcbiAgICAgICAgICAgIGxlYXZpbmcgPSAhZW50ZXJpbmc7XHJcbiAgICAgICAgICAgIG5vZGUgPSBlLm5vZGU7XHJcbiAgICAgICAgICAgIGF0dHJzID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRvYykge1xyXG4gICAgICAgICAgICAgICAgZG9jID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucmVhY3QgPSB7IGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc291cmNlUG9zICYmIG5vZGUuc291cmNlcG9zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbm9kZS5zb3VyY2Vwb3M7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1snZGF0YS1zb3VyY2Vwb3MnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICBwb3NbMF1bMF0sICc6JywgcG9zWzBdWzFdLCAnLScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWzFdWzBdLCAnOicsIHBvc1sxXVsxXVxyXG4gICAgICAgICAgICAgICAgXS5tYXAoU3RyaW5nKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1BhcmFncmFwaCcgJiYgc2VsZi5pc0dyYW5kUGFyZW50T2ZMaXN0KG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxlYXZpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdJbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LnByb3BzLmFsdCA9IG5vZGUucmVhY3QuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlICE9PSBkb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC50YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QucHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRW50ZXJpbmcgYSBuZXcgbm9kZVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSHRtbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIdG1sQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGVIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgbm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFza2lwSHRtbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxwcmFzZSA9IHJleC5odG1sU2luZ2xlVGFnLmV4ZWMobm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShodG1scHJhc2UpJiZodG1scHJhc2VbMV0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sdGFnID0gaHRtbHByYXNlWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxlbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tSWRlbnRpdHkuaW5uZXJIVE1MID0gbm9kZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxhdHRyaWJ1dGVzID0gZG9tSWRlbnRpdHkuY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxodG1sYXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGh0bWxhdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gYS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuYW1lLnRvTG93ZXJDYXNlKCk9PT1cImNsYXNzbmFtZVwiKXtuYW1lPVwiY2xhc3NOYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzW25hbWVdID0gYS5ub2RlVmFsdWUubGVuZ3RoPjA/YS5ub2RlVmFsdWU6dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuaG93UmVuZGVySHRtbFtodG1sdGFnXT09PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbGVsZSA9IHRoaXMuaG93UmVuZGVySHRtbFtodG1sdGFnXShodG1sdGFnLGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF0dHJzW1wic3R5bGVcIl0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInN0eWxlXCJdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBkb21JZGVudGl0eS5jaGlsZE5vZGVzWzBdLnN0eWxlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZShzdHlsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInN0eWxlXCJdW3N0eWxlXSA9IGRvbUlkZW50aXR5LmNoaWxkTm9kZXNbMF0uc3R5bGVbc3R5bGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBkb21JZGVudGl0eS5jaGlsZE5vZGVzWzBdLnN0eWxlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sZWxlID0gc2VsZi5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6bm9kZS5saXRlcmFsfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGh0bWxlbGUuX19wcm90b19fICYmIGh0bWxlbGUuX19wcm90b19fLl9pc1JlYWN0RWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBodG1sZWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj4uLi57aHRtbHByYXNlWzBdfSBwcmFzZSBmYWlsLi4uPC9wPik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdUZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIG5vZGUubGl0ZXJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdQYXJhZ3JhcGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdwJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSGVhZGVyJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnaCcgKyBub2RlLmxldmVsLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdTb2Z0YnJlYWsnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgc29mdEJyZWFrKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1N0cm9uZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ3N0cm9uZycsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpbmsnOlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLmhyZWYgPSBub2RlLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMudGl0bGUgPSBub2RlLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnYScsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICBhdHRycy5zcmMgPSBub2RlLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLnRpdGxlID0gbm9kZS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2ltZycsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0VtcGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdlbScsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0NvZGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgc2VsZi5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbm9kZS5saXRlcmFsXVxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ29kZUJsb2NrJzpcclxuICAgICAgICAgICAgICAgICAgICBpbmZvV29yZHMgPSBub2RlLmluZm8gPyBub2RlLmluZm8uc3BsaXQoLyArLykgOiBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOmhpZ2hsaWdodFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29kZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGluZm9Xb3Jkc1swXXx8XCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZVdyYXBwZXIuYXBwZW5kQ2hpbGQoY29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBobGpzIT09XCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaGxqcy5oaWdobGlnaHRBdXRvKG5vZGUubGl0ZXJhbCxbaW5mb1dvcmRzWzBdXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaGxqcy5oaWdobGlnaHRBdXRvKG5vZGUubGl0ZXJhbCxbaW5mb1dvcmRzWzBdXSkudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIGNvZGUgPSBzZWxmLmNyZWF0ZUVsZW1lbnQoJ2NvZGUnLCBhdHRycywgW25vZGUubGl0ZXJhbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgc2VsZi5jcmVhdGVFbGVtZW50KCdwcmUnLCB7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpjb2RlV3JhcHBlci5pbm5lckhUTUx9fSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQmxvY2tRdW90ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2Jsb2NrcXVvdGUnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0JzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBub2RlLmxpc3RTdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgIT09IG51bGwgJiYgc3RhcnQgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuc3RhcnQgPSBzdGFydC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCBub2RlLmxpc3RUeXBlID09PSAnQnVsbGV0JyA/ICd1bCcgOiAnb2wnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdJdGVtJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnbGknLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIb3Jpem9udGFsUnVsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoJ2hyJywgYXR0cnMpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0RvY3VtZW50JzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZSBcIicgKyBub2RlLnR5cGUgKyAnXCInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvYy5yZWFjdC5jaGlsZHJlbjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFya2Rvd25Ob2RlRWxlbWVudHtcclxuICAgIHN0YXRpYyB0YWcobm9kZSwgbmFtZSwgYXR0cnMsIGNoaWxkcmVuKXtcclxuICAgICAgICBub2RlLnJlYWN0ID0ge1xyXG4gICAgICAgICAgICB0YWc6IG5hbWUsXHJcbiAgICAgICAgICAgIHByb3BzOiBhdHRycyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuIHx8IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNHcmFuZFBhcmVudE9mTGlzdChub2RlKXtcclxuICAgICAgICBpZighbm9kZXx8IW5vZGUucGFyZW50KXtyZXR1cm4gZmFsc2V9XHJcbiAgICAgICAgdmFyIGdyYW5kcGFyZW50ID0gbm9kZS5wYXJlbnQucGFyZW50O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGdyYW5kcGFyZW50ICYmXHJcbiAgICAgICAgICAgIGdyYW5kcGFyZW50LnR5cGUgPT09ICdMaXN0JyAmJlxyXG4gICAgICAgICAgICBncmFuZHBhcmVudC5saXN0VGlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRDaGlsZChub2RlLCBjaGlsZCl7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKCFwYXJlbnQucmVhY3QpO1xyXG5cclxuICAgICAgICBwYXJlbnQucmVhY3QuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhZ05hbWVcclxuICAgICAqIEBwYXJhbSBwcm9wc1xyXG4gICAgICogQHBhcmFtIGNoaWxkcmVuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NRWxlbWVudDxBcnJheTxhbnk+fGFueVtdPnxDbGFzc2ljRWxlbWVudDxBcnJheTxhbnk+fGFueVtdPnxSZWFjdEVsZW1lbnQ8QXJyYXk8YW55PnxhbnlbXT59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbil7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGFnTmFtZSwgcHJvcHNdLmNvbmNhdChjaGlsZHJlbik7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShSZWFjdCwgYXJncyk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L0NvbW1vbk1hcmtSZW5kZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gY29tbW9ubWFyay5qcyAtIENvbW1vbU1hcmsgaW4gSmF2YVNjcmlwdFxuLy8gQ29weXJpZ2h0IChDKSAyMDE0IEpvaG4gTWFjRmFybGFuZVxuLy8gTGljZW5zZTogQlNEMy5cblxuLy8gQmFzaWMgdXNhZ2U6XG4vL1xuLy8gdmFyIGNvbW1vbm1hcmsgPSByZXF1aXJlKCdjb21tb25tYXJrJyk7XG4vLyB2YXIgcGFyc2VyID0gbmV3IGNvbW1vbm1hcmsuUGFyc2VyKCk7XG4vLyB2YXIgcmVuZGVyZXIgPSBuZXcgY29tbW9ubWFyay5IdG1sUmVuZGVyZXIoKTtcbi8vIGNvbnNvbGUubG9nKHJlbmRlcmVyLnJlbmRlcihwYXJzZXIucGFyc2UoJ0hlbGxvICp3b3JsZConKSkpO1xuXG5tb2R1bGUuZXhwb3J0cy5Ob2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5QYXJzZXIgPSByZXF1aXJlKCcuL2Jsb2NrcycpO1xubW9kdWxlLmV4cG9ydHMuSHRtbFJlbmRlcmVyID0gcmVxdWlyZSgnLi9odG1sJyk7XG5tb2R1bGUuZXhwb3J0cy5YbWxSZW5kZXJlciA9IHJlcXVpcmUoJy4veG1sJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaXNDb250YWluZXIobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS5fdHlwZSkge1xuICAgIGNhc2UgJ0RvY3VtZW50JzpcbiAgICBjYXNlICdCbG9ja1F1b3RlJzpcbiAgICBjYXNlICdMaXN0JzpcbiAgICBjYXNlICdJdGVtJzpcbiAgICBjYXNlICdQYXJhZ3JhcGgnOlxuICAgIGNhc2UgJ0hlYWRlcic6XG4gICAgY2FzZSAnRW1waCc6XG4gICAgY2FzZSAnU3Ryb25nJzpcbiAgICBjYXNlICdMaW5rJzpcbiAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbnZhciByZXN1bWVBdCA9IGZ1bmN0aW9uKG5vZGUsIGVudGVyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcbiAgICB0aGlzLmVudGVyaW5nID0gKGVudGVyaW5nID09PSB0cnVlKTtcbn07XG5cbnZhciBuZXh0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgY3VyID0gdGhpcy5jdXJyZW50O1xuICAgIHZhciBlbnRlcmluZyA9IHRoaXMuZW50ZXJpbmc7XG5cbiAgICBpZiAoY3VyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBpc0NvbnRhaW5lcihjdXIpO1xuXG4gICAgaWYgKGVudGVyaW5nICYmIGNvbnRhaW5lcikge1xuICAgICAgICBpZiAoY3VyLl9maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXIuX2ZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB0aGlzLmVudGVyaW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHN0YXkgb24gbm9kZSBidXQgZXhpdFxuICAgICAgICAgICAgdGhpcy5lbnRlcmluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGN1ciA9PT0gdGhpcy5yb290KSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG5cbiAgICB9IGVsc2UgaWYgKGN1ci5fbmV4dCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXIuX3BhcmVudDtcbiAgICAgICAgdGhpcy5lbnRlcmluZyA9IGZhbHNlO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VyLl9uZXh0O1xuICAgICAgICB0aGlzLmVudGVyaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2VudGVyaW5nOiBlbnRlcmluZywgbm9kZTogY3VyfTtcbn07XG5cbnZhciBOb2RlV2Fsa2VyID0gZnVuY3Rpb24ocm9vdCkge1xuICAgIHJldHVybiB7IGN1cnJlbnQ6IHJvb3QsXG4gICAgICAgICAgICAgcm9vdDogcm9vdCxcbiAgICAgICAgICAgICBlbnRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgICBuZXh0OiBuZXh0LFxuICAgICAgICAgICAgIHJlc3VtZUF0OiByZXN1bWVBdCB9O1xufTtcblxudmFyIE5vZGUgPSBmdW5jdGlvbihub2RlVHlwZSwgc291cmNlcG9zKSB7XG4gICAgdGhpcy5fdHlwZSA9IG5vZGVUeXBlO1xuICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgdGhpcy5fbGFzdENoaWxkID0gbnVsbDtcbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgICB0aGlzLl9zb3VyY2Vwb3MgPSBzb3VyY2Vwb3M7XG4gICAgdGhpcy5fbGFzdExpbmVCbGFuayA9IGZhbHNlO1xuICAgIHRoaXMuX29wZW4gPSB0cnVlO1xuICAgIHRoaXMuX3N0cmluZ19jb250ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9saXRlcmFsID0gbnVsbDtcbiAgICB0aGlzLl9saXN0RGF0YSA9IG51bGw7XG4gICAgdGhpcy5faW5mbyA9IG51bGw7XG4gICAgdGhpcy5fZGVzdGluYXRpb24gPSBudWxsO1xuICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICB0aGlzLl9pc0ZlbmNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2ZlbmNlQ2hhciA9IG51bGw7XG4gICAgdGhpcy5fZmVuY2VMZW5ndGggPSAwO1xuICAgIHRoaXMuX2ZlbmNlT2Zmc2V0ID0gbnVsbDtcbiAgICB0aGlzLl9sZXZlbCA9IG51bGw7XG59O1xuXG52YXIgcHJvdG8gPSBOb2RlLnByb3RvdHlwZTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnaXNDb250YWluZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpc0NvbnRhaW5lcih0aGlzKTsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3R5cGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3R5cGU7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdmaXJzdENoaWxkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9maXJzdENoaWxkOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGFzdENoaWxkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9sYXN0Q2hpbGQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICduZXh0Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9uZXh0OyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAncHJldicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fcHJldjsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3BhcmVudCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50OyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnc291cmNlcG9zJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9zb3VyY2Vwb3M7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXRlcmFsJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXRlcmFsOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl9saXRlcmFsID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Rlc3RpbmF0aW9uJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbjsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5fZGVzdGluYXRpb24gPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAndGl0bGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3RpdGxlOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl90aXRsZSA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdpbmZvJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9pbmZvOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl9pbmZvID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xldmVsJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9sZXZlbDsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5fbGV2ZWwgPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGlzdFR5cGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLnR5cGU7IH0sXG4gICAgc2V0OiBmdW5jdGlvbih0KSB7IHRoaXMuX2xpc3REYXRhLnR5cGUgPSB0OyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGlzdFRpZ2h0Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXN0RGF0YS50aWdodDsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHQpIHsgdGhpcy5fbGlzdERhdGEudGlnaHQgPSB0OyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGlzdFN0YXJ0Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXN0RGF0YS5zdGFydDsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKG4pIHsgdGhpcy5fbGlzdERhdGEuc3RhcnQgPSBuOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGlzdERlbGltaXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEuZGVsaW1pdGVyOyB9LFxuICAgIHNldDogZnVuY3Rpb24oZGVsaW0pIHsgdGhpcy5fbGlzdERhdGEuZGVsaW1pdGVyID0gZGVsaW07IH1cbn0pO1xuXG5Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgY2hpbGQudW5saW5rKCk7XG4gICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2xhc3RDaGlsZCkge1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQuX25leHQgPSBjaGlsZDtcbiAgICAgICAgY2hpbGQuX3ByZXYgPSB0aGlzLl9sYXN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZCA9IGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5fbGFzdENoaWxkID0gY2hpbGQ7XG4gICAgfVxufTtcblxuTm9kZS5wcm90b3R5cGUucHJlcGVuZENoaWxkID0gZnVuY3Rpb24oY2hpbGQpIHtcbiAgICBjaGlsZC51bmxpbmsoKTtcbiAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcbiAgICBpZiAodGhpcy5fZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkLl9wcmV2ID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLl9uZXh0ID0gdGhpcy5fZmlyc3RDaGlsZDtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5fbGFzdENoaWxkID0gY2hpbGQ7XG4gICAgfVxufTtcblxuTm9kZS5wcm90b3R5cGUudW5saW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3ByZXYpIHtcbiAgICAgICAgdGhpcy5fcHJldi5fbmV4dCA9IHRoaXMuX25leHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9maXJzdENoaWxkID0gdGhpcy5fbmV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25leHQpIHtcbiAgICAgICAgdGhpcy5fbmV4dC5fcHJldiA9IHRoaXMuX3ByZXY7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9sYXN0Q2hpbGQgPSB0aGlzLl9wcmV2O1xuICAgIH1cbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX25leHQgPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xufTtcblxuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbihzaWJsaW5nKSB7XG4gICAgc2libGluZy51bmxpbmsoKTtcbiAgICBzaWJsaW5nLl9uZXh0ID0gdGhpcy5fbmV4dDtcbiAgICBpZiAoc2libGluZy5fbmV4dCkge1xuICAgICAgICBzaWJsaW5nLl9uZXh0Ll9wcmV2ID0gc2libGluZztcbiAgICB9XG4gICAgc2libGluZy5fcHJldiA9IHRoaXM7XG4gICAgdGhpcy5fbmV4dCA9IHNpYmxpbmc7XG4gICAgc2libGluZy5fcGFyZW50ID0gdGhpcy5fcGFyZW50O1xuICAgIGlmICghc2libGluZy5fbmV4dCkge1xuICAgICAgICBzaWJsaW5nLl9wYXJlbnQuX2xhc3RDaGlsZCA9IHNpYmxpbmc7XG4gICAgfVxufTtcblxuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24oc2libGluZykge1xuICAgIHNpYmxpbmcudW5saW5rKCk7XG4gICAgc2libGluZy5fcHJldiA9IHRoaXMuX3ByZXY7XG4gICAgaWYgKHNpYmxpbmcuX3ByZXYpIHtcbiAgICAgICAgc2libGluZy5fcHJldi5fbmV4dCA9IHNpYmxpbmc7XG4gICAgfVxuICAgIHNpYmxpbmcuX25leHQgPSB0aGlzO1xuICAgIHRoaXMuX3ByZXYgPSBzaWJsaW5nO1xuICAgIHNpYmxpbmcuX3BhcmVudCA9IHRoaXMuX3BhcmVudDtcbiAgICBpZiAoIXNpYmxpbmcuX3ByZXYpIHtcbiAgICAgICAgc2libGluZy5fcGFyZW50Ll9maXJzdENoaWxkID0gc2libGluZztcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS53YWxrZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2Fsa2VyID0gbmV3IE5vZGVXYWxrZXIodGhpcyk7XG4gICAgcmV0dXJuIHdhbGtlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTm9kZTtcblxuXG4vKiBFeGFtcGxlIG9mIHVzZSBvZiB3YWxrZXI6XG5cbiB2YXIgd2Fsa2VyID0gdy53YWxrZXIoKTtcbiB2YXIgZXZlbnQ7XG5cbiB3aGlsZSAoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSB7XG4gY29uc29sZS5sb2coZXZlbnQuZW50ZXJpbmcsIGV2ZW50Lm5vZGUudHlwZSk7XG4gfVxuXG4gKi9cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL25vZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOb2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG52YXIgdW5lc2NhcGVTdHJpbmcgPSByZXF1aXJlKCcuL2NvbW1vbicpLnVuZXNjYXBlU3RyaW5nO1xudmFyIE9QRU5UQUcgPSByZXF1aXJlKCcuL2NvbW1vbicpLk9QRU5UQUc7XG52YXIgQ0xPU0VUQUcgPSByZXF1aXJlKCcuL2NvbW1vbicpLkNMT1NFVEFHO1xuXG52YXIgQ09ERV9JTkRFTlQgPSA0O1xuXG52YXIgQ19ORVdMSU5FID0gMTA7XG52YXIgQ19HUkVBVEVSVEhBTiA9IDYyO1xudmFyIENfTEVTU1RIQU4gPSA2MDtcbnZhciBDX1NQQUNFID0gMzI7XG52YXIgQ19PUEVOX0JSQUNLRVQgPSA5MTtcblxudmFyIElubGluZVBhcnNlciA9IHJlcXVpcmUoJy4vaW5saW5lcycpO1xuXG52YXIgcmVIdG1sQmxvY2tPcGVuID0gW1xuICAgLy4vLCAvLyBkdW1teSBmb3IgMFxuICAgL148KD86c2NyaXB0fHByZXxzdHlsZSkoPzpcXHN8PnwkKS9pLFxuICAgL148IS0tLyxcbiAgIC9ePFs/XS8sXG4gICAvXjwhW0EtWl0vLFxuICAgL148IVxcW0NEQVRBXFxbLyxcbiAgIC9ePFsvXT8oPzphZGRyZXNzfGFydGljbGV8YXNpZGV8YmFzZXxiYXNlZm9udHxibG9ja3F1b3RlfGJvZHl8Y2FwdGlvbnxjZW50ZXJ8Y29sfGNvbGdyb3VwfGRkfGRldGFpbHN8ZGlhbG9nfGRpcnxkaXZ8ZGx8ZHR8ZmllbGRzZXR8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGZvcm18ZnJhbWV8ZnJhbWVzZXR8aDF8aGVhZHxoZWFkZXJ8aHJ8aHRtbHxsZWdlbmR8bGl8bGlua3xtYWlufG1lbnV8bWVudWl0ZW18bWV0YXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9ufHB8cGFyYW18cHJlfHNlY3Rpb258c291cmNlfHRpdGxlfHN1bW1hcnl8dGFibGV8dGJvZHl8dGR8dGZvb3R8dGh8dGhlYWR8dGl0bGV8dHJ8dHJhY2t8dWwpKD86XFxzfFsvXT9bPl18JCkvaSxcbiAgICBuZXcgUmVnRXhwKCdeKD86JyArIE9QRU5UQUcgKyAnfCcgKyBDTE9TRVRBRyArICcpXFxzKiQnLCAnaScpXG5dO1xuXG52YXIgcmVIdG1sQmxvY2tDbG9zZSA9IFtcbiAgIC8uLywgLy8gZHVtbXkgZm9yIDBcbiAgIC88XFwvKD86c2NyaXB0fHByZXxzdHlsZSk+L2ksXG4gICAvLS0+LyxcbiAgIC9cXD8+LyxcbiAgIC8+LyxcbiAgIC9cXF1cXF0+L1xuXTtcblxudmFyIHJlSHJ1bGUgPSAvXig/Oig/OlxcKiAqKXszLH18KD86XyAqKXszLH18KD86LSAqKXszLH0pICokLztcblxudmFyIHJlTWF5YmVTcGVjaWFsID0gL15bI2B+KitfPTw+MC05LV0vO1xuXG52YXIgcmVOb25TcGFjZSA9IC9bXiBcXHRcXGZcXHZcXHJcXG5dLztcblxudmFyIHJlQnVsbGV0TGlzdE1hcmtlciA9IC9eWyorLV0oICt8JCkvO1xuXG52YXIgcmVPcmRlcmVkTGlzdE1hcmtlciA9IC9eKFxcZHsxLDl9KShbLildKSggK3wkKS87XG5cbnZhciByZUFUWEhlYWRlck1hcmtlciA9IC9eI3sxLDZ9KD86ICt8JCkvO1xuXG52YXIgcmVDb2RlRmVuY2UgPSAvXmB7Myx9KD8hLipgKXxefnszLH0oPyEuKn4pLztcblxudmFyIHJlQ2xvc2luZ0NvZGVGZW5jZSA9IC9eKD86YHszLH18fnszLH0pKD89ICokKS87XG5cbnZhciByZVNldGV4dEhlYWRlckxpbmUgPSAvXig/Oj0rfC0rKSAqJC87XG5cbnZhciByZUxpbmVFbmRpbmcgPSAvXFxyXFxufFxcbnxcXHIvO1xuXG4vLyBSZXR1cm5zIHRydWUgaWYgc3RyaW5nIGNvbnRhaW5zIG9ubHkgc3BhY2UgY2hhcmFjdGVycy5cbnZhciBpc0JsYW5rID0gZnVuY3Rpb24ocykge1xuICAgIHJldHVybiAhKHJlTm9uU3BhY2UudGVzdChzKSk7XG59O1xuXG52YXIgcGVlayA9IGZ1bmN0aW9uKGxuLCBwb3MpIHtcbiAgICBpZiAocG9zIDwgbG4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBsbi5jaGFyQ29kZUF0KHBvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn07XG5cbi8vIERPQyBQQVJTRVJcblxuLy8gVGhlc2UgYXJlIG1ldGhvZHMgb2YgYSBQYXJzZXIgb2JqZWN0LCBkZWZpbmVkIGJlbG93LlxuXG4vLyBSZXR1cm5zIHRydWUgaWYgYmxvY2sgZW5kcyB3aXRoIGEgYmxhbmsgbGluZSwgZGVzY2VuZGluZyBpZiBuZWVkZWRcbi8vIGludG8gbGlzdHMgYW5kIHN1Ymxpc3RzLlxudmFyIGVuZHNXaXRoQmxhbmtMaW5lID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB3aGlsZSAoYmxvY2spIHtcbiAgICAgICAgaWYgKGJsb2NrLl9sYXN0TGluZUJsYW5rKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IGJsb2NrLnR5cGU7XG4gICAgICAgIGlmICh0ID09PSAnTGlzdCcgfHwgdCA9PT0gJ0l0ZW0nKSB7XG4gICAgICAgICAgICBibG9jayA9IGJsb2NrLl9sYXN0Q2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBCcmVhayBvdXQgb2YgYWxsIGNvbnRhaW5pbmcgbGlzdHMsIHJlc2V0dGluZyB0aGUgdGlwIG9mIHRoZVxuLy8gZG9jdW1lbnQgdG8gdGhlIHBhcmVudCBvZiB0aGUgaGlnaGVzdCBsaXN0LCBhbmQgZmluYWxpemluZ1xuLy8gYWxsIHRoZSBsaXN0cy4gIChUaGlzIGlzIHVzZWQgdG8gaW1wbGVtZW50IHRoZSBcInR3byBibGFuayBsaW5lc1xuLy8gYnJlYWsgb2Ygb2YgYWxsIGxpc3RzXCIgZmVhdHVyZS4pXG52YXIgYnJlYWtPdXRPZkxpc3RzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgYiA9IGJsb2NrO1xuICAgIHZhciBsYXN0X2xpc3QgPSBudWxsO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKGIudHlwZSA9PT0gJ0xpc3QnKSB7XG4gICAgICAgICAgICBsYXN0X2xpc3QgPSBiO1xuICAgICAgICB9XG4gICAgICAgIGIgPSBiLl9wYXJlbnQ7XG4gICAgfSB3aGlsZSAoYik7XG5cbiAgICBpZiAobGFzdF9saXN0KSB7XG4gICAgICAgIHdoaWxlIChibG9jayAhPT0gbGFzdF9saXN0KSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplKGJsb2NrLCB0aGlzLmxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgYmxvY2sgPSBibG9jay5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluYWxpemUobGFzdF9saXN0LCB0aGlzLmxpbmVOdW1iZXIpO1xuICAgICAgICB0aGlzLnRpcCA9IGxhc3RfbGlzdC5fcGFyZW50O1xuICAgIH1cbn07XG5cbi8vIEFkZCBhIGxpbmUgdG8gdGhlIGJsb2NrIGF0IHRoZSB0aXAuICBXZSBhc3N1bWUgdGhlIHRpcFxuLy8gY2FuIGFjY2VwdCBsaW5lcyAtLSB0aGF0IGNoZWNrIHNob3VsZCBiZSBkb25lIGJlZm9yZSBjYWxsaW5nIHRoaXMuXG52YXIgYWRkTGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGlwLl9zdHJpbmdfY29udGVudCArPSB0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKHRoaXMub2Zmc2V0KSArICdcXG4nO1xufTtcblxuLy8gQWRkIGJsb2NrIG9mIHR5cGUgdGFnIGFzIGEgY2hpbGQgb2YgdGhlIHRpcC4gIElmIHRoZSB0aXAgY2FuJ3Rcbi8vIGFjY2VwdCBjaGlsZHJlbiwgY2xvc2UgYW5kIGZpbmFsaXplIGl0IGFuZCB0cnkgaXRzIHBhcmVudCxcbi8vIGFuZCBzbyBvbiB0aWwgd2UgZmluZCBhIGJsb2NrIHRoYXQgY2FuIGFjY2VwdCBjaGlsZHJlbi5cbnZhciBhZGRDaGlsZCA9IGZ1bmN0aW9uKHRhZywgb2Zmc2V0KSB7XG4gICAgd2hpbGUgKCF0aGlzLmJsb2Nrc1t0aGlzLnRpcC50eXBlXS5jYW5Db250YWluKHRhZykpIHtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSh0aGlzLnRpcCwgdGhpcy5saW5lTnVtYmVyIC0gMSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbl9udW1iZXIgPSBvZmZzZXQgKyAxOyAvLyBvZmZzZXQgMCA9IGNvbHVtbiAxXG4gICAgdmFyIG5ld0Jsb2NrID0gbmV3IE5vZGUodGFnLCBbW3RoaXMubGluZU51bWJlciwgY29sdW1uX251bWJlcl0sIFswLCAwXV0pO1xuICAgIG5ld0Jsb2NrLl9zdHJpbmdfY29udGVudCA9ICcnO1xuICAgIHRoaXMudGlwLmFwcGVuZENoaWxkKG5ld0Jsb2NrKTtcbiAgICB0aGlzLnRpcCA9IG5ld0Jsb2NrO1xuICAgIHJldHVybiBuZXdCbG9jaztcbn07XG5cbi8vIFBhcnNlIGEgbGlzdCBtYXJrZXIgYW5kIHJldHVybiBkYXRhIG9uIHRoZSBtYXJrZXIgKHR5cGUsXG4vLyBzdGFydCwgZGVsaW1pdGVyLCBidWxsZXQgY2hhcmFjdGVyLCBwYWRkaW5nKSBvciBudWxsLlxudmFyIHBhcnNlTGlzdE1hcmtlciA9IGZ1bmN0aW9uKGxuLCBvZmZzZXQsIGluZGVudCkge1xuICAgIHZhciByZXN0ID0gbG4uc2xpY2Uob2Zmc2V0KTtcbiAgICB2YXIgbWF0Y2g7XG4gICAgdmFyIHNwYWNlc19hZnRlcl9tYXJrZXI7XG4gICAgdmFyIGRhdGEgPSB7IHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgIHRpZ2h0OiB0cnVlLCAgLy8gbGlzdHMgYXJlIHRpZ2h0IGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgYnVsbGV0Q2hhcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgbWFya2VyT2Zmc2V0OiBpbmRlbnQgfTtcbiAgICBpZiAoKG1hdGNoID0gcmVzdC5tYXRjaChyZUJ1bGxldExpc3RNYXJrZXIpKSkge1xuICAgICAgICBzcGFjZXNfYWZ0ZXJfbWFya2VyID0gbWF0Y2hbMV0ubGVuZ3RoO1xuICAgICAgICBkYXRhLnR5cGUgPSAnQnVsbGV0JztcbiAgICAgICAgZGF0YS5idWxsZXRDaGFyID0gbWF0Y2hbMF1bMF07XG5cbiAgICB9IGVsc2UgaWYgKChtYXRjaCA9IHJlc3QubWF0Y2gocmVPcmRlcmVkTGlzdE1hcmtlcikpKSB7XG4gICAgICAgIHNwYWNlc19hZnRlcl9tYXJrZXIgPSBtYXRjaFszXS5sZW5ndGg7XG4gICAgICAgIGRhdGEudHlwZSA9ICdPcmRlcmVkJztcbiAgICAgICAgZGF0YS5zdGFydCA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgZGF0YS5kZWxpbWl0ZXIgPSBtYXRjaFsyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGJsYW5rX2l0ZW0gPSBtYXRjaFswXS5sZW5ndGggPT09IHJlc3QubGVuZ3RoO1xuICAgIGlmIChzcGFjZXNfYWZ0ZXJfbWFya2VyID49IDUgfHxcbiAgICAgICAgc3BhY2VzX2FmdGVyX21hcmtlciA8IDEgfHxcbiAgICAgICAgYmxhbmtfaXRlbSkge1xuICAgICAgICBkYXRhLnBhZGRpbmcgPSBtYXRjaFswXS5sZW5ndGggLSBzcGFjZXNfYWZ0ZXJfbWFya2VyICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnBhZGRpbmcgPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuLy8gUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gbGlzdCBpdGVtcyBhcmUgb2YgdGhlIHNhbWUgdHlwZSxcbi8vIHdpdGggdGhlIHNhbWUgZGVsaW1pdGVyIGFuZCBidWxsZXQgY2hhcmFjdGVyLiAgVGhpcyBpcyB1c2VkXG4vLyBpbiBhZ2dsb21lcmF0aW5nIGxpc3QgaXRlbXMgaW50byBsaXN0cy5cbnZhciBsaXN0c01hdGNoID0gZnVuY3Rpb24obGlzdF9kYXRhLCBpdGVtX2RhdGEpIHtcbiAgICByZXR1cm4gKGxpc3RfZGF0YS50eXBlID09PSBpdGVtX2RhdGEudHlwZSAmJlxuICAgICAgICAgICAgbGlzdF9kYXRhLmRlbGltaXRlciA9PT0gaXRlbV9kYXRhLmRlbGltaXRlciAmJlxuICAgICAgICAgICAgbGlzdF9kYXRhLmJ1bGxldENoYXIgPT09IGl0ZW1fZGF0YS5idWxsZXRDaGFyKTtcbn07XG5cbi8vIEZpbmFsaXplIGFuZCBjbG9zZSBhbnkgdW5tYXRjaGVkIGJsb2Nrcy4gUmV0dXJucyB0cnVlLlxudmFyIGNsb3NlVW5tYXRjaGVkQmxvY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmFsbENsb3NlZCkge1xuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgYmxvY2tzIG5vdCBtYXRjaGVkXG4gICAgICAgIHdoaWxlICh0aGlzLm9sZHRpcCAhPT0gdGhpcy5sYXN0TWF0Y2hlZENvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2xkdGlwLl9wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplKHRoaXMub2xkdGlwLCB0aGlzLmxpbmVOdW1iZXIgLSAxKTtcbiAgICAgICAgICAgIHRoaXMub2xkdGlwID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsQ2xvc2VkID0gdHJ1ZTtcbiAgICB9XG59O1xuXG4vLyAnZmluYWxpemUnIGlzIHJ1biB3aGVuIHRoZSBibG9jayBpcyBjbG9zZWQuXG4vLyAnY29udGludWUnIGlzIHJ1biB0byBjaGVjayB3aGV0aGVyIHRoZSBibG9jayBpcyBjb250aW51aW5nXG4vLyBhdCBhIGNlcnRhaW4gbGluZSBhbmQgb2Zmc2V0IChlLmcuIHdoZXRoZXIgYSBibG9jayBxdW90ZVxuLy8gY29udGFpbnMgYSBgPmAuICBJdCByZXR1cm5zIDAgZm9yIG1hdGNoZWQsIDEgZm9yIG5vdCBtYXRjaGVkLFxuLy8gYW5kIDIgZm9yIFwid2UndmUgZGVhbHQgd2l0aCB0aGlzIGxpbmUgY29tcGxldGVseSwgZ28gdG8gbmV4dC5cIlxudmFyIGJsb2NrcyA9IHtcbiAgICBEb2N1bWVudDoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24odCkgeyByZXR1cm4gKHQgIT09ICdJdGVtJyk7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIExpc3Q6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYmxvY2suX2ZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBub24tZmluYWwgbGlzdCBpdGVtIGVuZGluZyB3aXRoIGJsYW5rIGxpbmU6XG4gICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoQmxhbmtMaW5lKGl0ZW0pICYmIGl0ZW0uX25leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suX2xpc3REYXRhLnRpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZWN1cnNlIGludG8gY2hpbGRyZW4gb2YgbGlzdCBpdGVtLCB0byBzZWUgaWYgdGhlcmUgYXJlXG4gICAgICAgICAgICAgICAgLy8gc3BhY2VzIGJldHdlZW4gYW55IG9mIHRoZW06XG4gICAgICAgICAgICAgICAgdmFyIHN1Yml0ZW0gPSBpdGVtLl9maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzdWJpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmRzV2l0aEJsYW5rTGluZShzdWJpdGVtKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uX25leHQgfHwgc3ViaXRlbS5fbmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLl9saXN0RGF0YS50aWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ViaXRlbSA9IHN1Yml0ZW0uX25leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLl9uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCA9PT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgQmxvY2tRdW90ZToge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgICAgICB2YXIgbG4gPSBwYXJzZXIuY3VycmVudExpbmU7XG4gICAgICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgICAgIHBlZWsobG4sIHBhcnNlci5uZXh0Tm9uc3BhY2UpID09PSBDX0dSRUFURVJUSEFOKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldCgxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBlZWsobG4sIHBhcnNlci5vZmZzZXQpID09PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5vZmZzZXQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCAhPT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgSXRlbToge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZXIuYmxhbmspIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuaW5kZW50ID49XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEubWFya2VyT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YS5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoY29udGFpbmVyLl9saXN0RGF0YS5tYXJrZXJPZmZzZXQgK1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhLnBhZGRpbmcsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24odCkgeyByZXR1cm4gKHQgIT09ICdJdGVtJyk7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIEhlYWRlcjoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBhIGhlYWRlciBjYW4gbmV2ZXIgY29udGFpbmVyID4gMSBsaW5lLCBzbyBmYWlsIHRvIG1hdGNoOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBIb3Jpem9udGFsUnVsZToge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBhbiBocnVsZSBjYW4gbmV2ZXIgY29udGFpbmVyID4gMSBsaW5lLCBzbyBmYWlsIHRvIG1hdGNoOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBDb2RlQmxvY2s6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgbG4gPSBwYXJzZXIuY3VycmVudExpbmU7XG4gICAgICAgICAgICB2YXIgaW5kZW50ID0gcGFyc2VyLmluZGVudDtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuX2lzRmVuY2VkKSB7IC8vIGZlbmNlZFxuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IChpbmRlbnQgPD0gMyAmJlxuICAgICAgICAgICAgICAgICAgICBsbi5jaGFyQXQocGFyc2VyLm5leHROb25zcGFjZSkgPT09IGNvbnRhaW5lci5fZmVuY2VDaGFyICYmXG4gICAgICAgICAgICAgICAgICAgIGxuLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlQ2xvc2luZ0NvZGVGZW5jZSkpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFswXS5sZW5ndGggPj0gY29udGFpbmVyLl9mZW5jZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zaW5nIGZlbmNlIC0gd2UncmUgYXQgZW5kIG9mIGxpbmUsIHNvIHdlIGNhbiByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmZpbmFsaXplKGNvbnRhaW5lciwgcGFyc2VyLmxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIG9wdGlvbmFsIHNwYWNlcyBvZiBmZW5jZSBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBjb250YWluZXIuX2ZlbmNlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgcGVlayhsbiwgcGFyc2VyLm9mZnNldCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGluZGVudGVkXG4gICAgICAgICAgICAgICAgaWYgKGluZGVudCA+PSBDT0RFX0lOREVOVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChDT0RFX0lOREVOVCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuYmxhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChibG9jay5faXNGZW5jZWQpIHsgLy8gZmVuY2VkXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgbGluZSBiZWNvbWVzIGluZm8gc3RyaW5nXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld2xpbmVQb3MgPSBjb250ZW50LmluZGV4T2YoJ1xcbicpO1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdExpbmUgPSBjb250ZW50LnNsaWNlKDAsIG5ld2xpbmVQb3MpO1xuICAgICAgICAgICAgICAgIHZhciByZXN0ID0gY29udGVudC5zbGljZShuZXdsaW5lUG9zICsgMSk7XG4gICAgICAgICAgICAgICAgYmxvY2suaW5mbyA9IHVuZXNjYXBlU3RyaW5nKGZpcnN0TGluZS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGJsb2NrLl9saXRlcmFsID0gcmVzdDtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGluZGVudGVkXG4gICAgICAgICAgICAgICAgYmxvY2suX2xpdGVyYWwgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQucmVwbGFjZSgvKFxcbiAqKSskLywgJ1xcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gbnVsbDsgLy8gYWxsb3cgR0NcbiAgICAgICAgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiB0cnVlXG4gICAgfSxcbiAgICBIdG1sQmxvY2s6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKChwYXJzZXIuYmxhbmsgJiZcbiAgICAgICAgICAgICAgICAgICAgIChjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPT09IDYgfHxcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPT09IDcpKSA/IDEgOiAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrLl9saXRlcmFsID0gYmxvY2suX3N0cmluZ19jb250ZW50LnJlcGxhY2UoLyhcXG4gKikrJC8sICcnKTtcbiAgICAgICAgICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IG51bGw7IC8vIGFsbG93IEdDXG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogdHJ1ZVxuICAgIH0sXG4gICAgUGFyYWdyYXBoOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAocGFyc2VyLmJsYW5rID8gMSA6IDApO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgdmFyIHBvcztcbiAgICAgICAgICAgIHZhciBoYXNSZWZlcmVuY2VEZWZzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBiZWdpbm5pbmcgYXMgbGluayByZWZlcmVuY2UgZGVmaW5pdGlvbnM6XG4gICAgICAgICAgICB3aGlsZSAocGVlayhibG9jay5fc3RyaW5nX2NvbnRlbnQsIDApID09PSBDX09QRU5fQlJBQ0tFVCAmJlxuICAgICAgICAgICAgICAgICAgIChwb3MgPVxuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuaW5saW5lUGFyc2VyLnBhcnNlUmVmZXJlbmNlKGJsb2NrLl9zdHJpbmdfY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXIucmVmbWFwKSkpIHtcbiAgICAgICAgICAgICAgICBibG9jay5fc3RyaW5nX2NvbnRlbnQgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQuc2xpY2UocG9zKTtcbiAgICAgICAgICAgICAgICBoYXNSZWZlcmVuY2VEZWZzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNSZWZlcmVuY2VEZWZzICYmIGlzQmxhbmsoYmxvY2suX3N0cmluZ19jb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJsb2NrLnVubGluaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IHRydWVcbiAgICB9XG59O1xuXG4vLyBibG9jayBzdGFydCBmdW5jdGlvbnMuICBSZXR1cm4gdmFsdWVzOlxuLy8gMCA9IG5vIG1hdGNoXG4vLyAxID0gbWF0Y2hlZCBjb250YWluZXIsIGtlZXAgZ29pbmdcbi8vIDIgPSBtYXRjaGVkIGxlYWYsIG5vIG1vcmUgYmxvY2sgc3RhcnRzXG52YXIgYmxvY2tTdGFydHMgPSBbXG4gICAgLy8gYmxvY2sgcXVvdGVcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHBlZWsocGFyc2VyLmN1cnJlbnRMaW5lLCBwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gQ19HUkVBVEVSVEhBTikge1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGZvbGxvd2luZyBzcGFjZVxuICAgICAgICAgICAgaWYgKHBlZWsocGFyc2VyLmN1cnJlbnRMaW5lLCBwYXJzZXIub2Zmc2V0KSA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgcGFyc2VyLmFkZENoaWxkKCdCbG9ja1F1b3RlJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFUWCBoZWFkZXJcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgKG1hdGNoID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlQVRYSGVhZGVyTWFya2VyKSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChtYXRjaFswXS5sZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnSGVhZGVyJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBjb250YWluZXIubGV2ZWwgPSBtYXRjaFswXS50cmltKCkubGVuZ3RoOyAvLyBudW1iZXIgb2YgI3NcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyAjIyNzOlxuICAgICAgICAgICAgY29udGFpbmVyLl9zdHJpbmdfY29udGVudCA9XG4gICAgICAgICAgICAgICAgcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5vZmZzZXQpLnJlcGxhY2UoL14gKiMrICokLywgJycpLnJlcGxhY2UoLyArIysgKiQvLCAnJyk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChwYXJzZXIuY3VycmVudExpbmUubGVuZ3RoIC0gcGFyc2VyLm9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEZlbmNlZCBjb2RlIGJsb2NrXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIChtYXRjaCA9IHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKS5tYXRjaChyZUNvZGVGZW5jZSkpKSB7XG4gICAgICAgICAgICB2YXIgZmVuY2VMZW5ndGggPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0NvZGVCbG9jaycsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLl9pc0ZlbmNlZCA9IHRydWU7XG4gICAgICAgICAgICBjb250YWluZXIuX2ZlbmNlTGVuZ3RoID0gZmVuY2VMZW5ndGg7XG4gICAgICAgICAgICBjb250YWluZXIuX2ZlbmNlQ2hhciA9IG1hdGNoWzBdWzBdO1xuICAgICAgICAgICAgY29udGFpbmVyLl9mZW5jZU9mZnNldCA9IHBhcnNlci5pbmRlbnQ7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoZmVuY2VMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gSFRNTCBibG9ja1xuICAgIGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICBwZWVrKHBhcnNlci5jdXJyZW50TGluZSwgcGFyc2VyLm5leHROb25zcGFjZSkgPT09IENfTEVTU1RIQU4pIHtcbiAgICAgICAgICAgIHZhciBzID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgdmFyIGJsb2NrVHlwZTtcblxuICAgICAgICAgICAgZm9yIChibG9ja1R5cGUgPSAxOyBibG9ja1R5cGUgPD0gNzsgYmxvY2tUeXBlKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmVIdG1sQmxvY2tPcGVuW2Jsb2NrVHlwZV0udGVzdChzKSAmJlxuICAgICAgICAgICAgICAgICAgICAoYmxvY2tUeXBlIDwgNyB8fFxuICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnR5cGUgIT09ICdQYXJhZ3JhcGgnKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgYWRqdXN0IHBhcnNlci5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlcyBhcmUgcGFydCBvZiB0aGUgSFRNTCBibG9jazpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0h0bWxCbG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5vZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBiLl9odG1sQmxvY2tUeXBlID0gYmxvY2tUeXBlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcblxuICAgIH0sXG5cbiAgICAvLyBTZXRleHQgaGVhZGVyXG4gICAgZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgY29udGFpbmVyLnR5cGUgPT09ICdQYXJhZ3JhcGgnICYmXG4gICAgICAgICAgICAgICAgICAgKGNvbnRhaW5lci5fc3RyaW5nX2NvbnRlbnQuaW5kZXhPZignXFxuJykgPT09XG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9zdHJpbmdfY29udGVudC5sZW5ndGggLSAxKSAmJlxuICAgICAgICAgICAgICAgICAgICgobWF0Y2ggPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVTZXRleHRIZWFkZXJMaW5lKSkpKSB7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBuZXcgTm9kZSgnSGVhZGVyJywgY29udGFpbmVyLnNvdXJjZXBvcyk7XG4gICAgICAgICAgICBoZWFkZXIubGV2ZWwgPSBtYXRjaFswXVswXSA9PT0gJz0nID8gMSA6IDI7XG4gICAgICAgICAgICBoZWFkZXIuX3N0cmluZ19jb250ZW50ID0gY29udGFpbmVyLl9zdHJpbmdfY29udGVudDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZnRlcihoZWFkZXIpO1xuICAgICAgICAgICAgY29udGFpbmVyLnVubGluaygpO1xuICAgICAgICAgICAgcGFyc2VyLnRpcCA9IGhlYWRlcjtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KHBhcnNlci5jdXJyZW50TGluZS5sZW5ndGggLSBwYXJzZXIub2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGhydWxlXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICByZUhydWxlLnRlc3QocGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWRkQ2hpbGQoJ0hvcml6b250YWxSdWxlJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChwYXJzZXIuY3VycmVudExpbmUubGVuZ3RoIC0gcGFyc2VyLm9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBsaXN0IGl0ZW1cbiAgICBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmICgoZGF0YSA9IHBhcnNlTGlzdE1hcmtlcihwYXJzZXIuY3VycmVudExpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXIubmV4dE5vbnNwYWNlLCBwYXJzZXIuaW5kZW50KSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgaWYgKHBhcnNlci5pbmRlbnRlZCAmJiBwYXJzZXIudGlwLnR5cGUgIT09ICdMaXN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIGRhdGEucGFkZGluZywgdGFraW5nIGludG8gYWNjb3VudCB0YWJzOlxuICAgICAgICAgICAgaSA9IHBhcnNlci5jb2x1bW47XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChkYXRhLnBhZGRpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgIGRhdGEucGFkZGluZyA9IHBhcnNlci5jb2x1bW4gLSBpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGxpc3QgaWYgbmVlZGVkXG4gICAgICAgICAgICBpZiAocGFyc2VyLnRpcC50eXBlICE9PSAnTGlzdCcgfHxcbiAgICAgICAgICAgICAgICAhKGxpc3RzTWF0Y2goY29udGFpbmVyLl9saXN0RGF0YSwgZGF0YSkpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gcGFyc2VyLmFkZENoaWxkKCdMaXN0JywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbGlzdCBpdGVtXG4gICAgICAgICAgICBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0l0ZW0nLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBpbmRlbnRlZCBjb2RlIGJsb2NrXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIGlmIChwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHBhcnNlci50aXAudHlwZSAhPT0gJ1BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgICFwYXJzZXIuYmxhbmspIHtcbiAgICAgICAgICAgIC8vIGluZGVudGVkIGNvZGVcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KENPREVfSU5ERU5ULCB0cnVlKTtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgcGFyc2VyLmFkZENoaWxkKCdDb2RlQmxvY2snLCBwYXJzZXIub2Zmc2V0KTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgfVxuXG5dO1xuXG52YXIgYWR2YW5jZU9mZnNldCA9IGZ1bmN0aW9uKGNvdW50LCBjb2x1bW5zKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjb2xzID0gMDtcbiAgICB2YXIgY3VycmVudExpbmUgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgIHdoaWxlIChjb2x1bW5zID8gKGNvbHMgPCBjb3VudCkgOiAoaSA8IGNvdW50KSkge1xuICAgICAgICBpZiAoY3VycmVudExpbmVbdGhpcy5vZmZzZXQgKyBpXSA9PT0gJ1xcdCcpIHtcbiAgICAgICAgICAgIGNvbHMgKz0gKDQgLSAodGhpcy5jb2x1bW4gJSA0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xzICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICB0aGlzLm9mZnNldCArPSBpO1xuICAgIHRoaXMuY29sdW1uICs9IGNvbHM7XG59O1xuXG52YXIgYWR2YW5jZU5leHROb25zcGFjZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5uZXh0Tm9uc3BhY2U7XG4gICAgdGhpcy5jb2x1bW4gPSB0aGlzLm5leHROb25zcGFjZUNvbHVtbjtcbn07XG5cbnZhciBmaW5kTmV4dE5vbnNwYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRMaW5lID0gdGhpcy5jdXJyZW50TGluZTtcbiAgICB2YXIgaSA9IHRoaXMub2Zmc2V0O1xuICAgIHZhciBjb2xzID0gdGhpcy5jb2x1bW47XG4gICAgdmFyIGM7XG5cbiAgICB3aGlsZSAoKGMgPSBjdXJyZW50TGluZS5jaGFyQXQoaSkpICE9PSAnJykge1xuICAgICAgICBpZiAoYyA9PT0gJyAnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb2xzKys7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJ1xcdCcpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbHMgKz0gKDQgLSAoY29scyAlIDQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmxhbmsgPSAoYyA9PT0gJ1xcbicgfHwgYyA9PT0gJ1xccicgfHwgYyA9PT0gJycpO1xuICAgIHRoaXMubmV4dE5vbnNwYWNlID0gaTtcbiAgICB0aGlzLm5leHROb25zcGFjZUNvbHVtbiA9IGNvbHM7XG4gICAgdGhpcy5pbmRlbnQgPSB0aGlzLm5leHROb25zcGFjZUNvbHVtbiAtIHRoaXMuY29sdW1uO1xuICAgIHRoaXMuaW5kZW50ZWQgPSB0aGlzLmluZGVudCA+PSBDT0RFX0lOREVOVDtcbn07XG5cbi8vIEFuYWx5emUgYSBsaW5lIG9mIHRleHQgYW5kIHVwZGF0ZSB0aGUgZG9jdW1lbnQgYXBwcm9wcmlhdGVseS5cbi8vIFdlIHBhcnNlIG1hcmtkb3duIHRleHQgYnkgY2FsbGluZyB0aGlzIG9uIGVhY2ggbGluZSBvZiBpbnB1dCxcbi8vIHRoZW4gZmluYWxpemluZyB0aGUgZG9jdW1lbnQuXG52YXIgaW5jb3Jwb3JhdGVMaW5lID0gZnVuY3Rpb24obG4pIHtcbiAgICB2YXIgYWxsX21hdGNoZWQgPSB0cnVlO1xuICAgIHZhciB0O1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZG9jO1xuICAgIHRoaXMub2xkdGlwID0gdGhpcy50aXA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMubGluZU51bWJlciArPSAxO1xuXG4gICAgLy8gcmVwbGFjZSBOVUwgY2hhcmFjdGVycyBmb3Igc2VjdXJpdHlcbiAgICBpZiAobG4uaW5kZXhPZignXFx1MDAwMCcpICE9PSAtMSkge1xuICAgICAgICBsbiA9IGxuLnJlcGxhY2UoL1xcMC9nLCAnXFx1RkZGRCcpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudExpbmUgPSBsbjtcblxuICAgIC8vIEZvciBlYWNoIGNvbnRhaW5pbmcgYmxvY2ssIHRyeSB0byBwYXJzZSB0aGUgYXNzb2NpYXRlZCBsaW5lIHN0YXJ0LlxuICAgIC8vIEJhaWwgb3V0IG9uIGZhaWx1cmU6IGNvbnRhaW5lciB3aWxsIHBvaW50IHRvIHRoZSBsYXN0IG1hdGNoaW5nIGJsb2NrLlxuICAgIC8vIFNldCBhbGxfbWF0Y2hlZCB0byBmYWxzZSBpZiBub3QgYWxsIGNvbnRhaW5lcnMgbWF0Y2guXG4gICAgdmFyIGxhc3RDaGlsZDtcbiAgICB3aGlsZSAoKGxhc3RDaGlsZCA9IGNvbnRhaW5lci5fbGFzdENoaWxkKSAmJiBsYXN0Q2hpbGQuX29wZW4pIHtcbiAgICAgICAgY29udGFpbmVyID0gbGFzdENoaWxkO1xuXG4gICAgICAgIHRoaXMuZmluZE5leHROb25zcGFjZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ibG9ja3NbY29udGFpbmVyLnR5cGVdLmNvbnRpbnVlKHRoaXMsIGNvbnRhaW5lcikpIHtcbiAgICAgICAgY2FzZSAwOiAvLyB3ZSd2ZSBtYXRjaGVkLCBrZWVwIGdvaW5nXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOiAvLyB3ZSd2ZSBmYWlsZWQgdG8gbWF0Y2ggYSBibG9ja1xuICAgICAgICAgICAgYWxsX21hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6IC8vIHdlJ3ZlIGhpdCBlbmQgb2YgbGluZSBmb3IgZmVuY2VkIGNvZGUgY2xvc2UgYW5kIGNhbiByZXR1cm5cbiAgICAgICAgICAgIHRoaXMubGFzdExpbmVMZW5ndGggPSBsbi5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyAnY29udGludWUgcmV0dXJuZWQgaWxsZWdhbCB2YWx1ZSwgbXVzdCBiZSAwLCAxLCBvciAyJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbF9tYXRjaGVkKSB7XG4gICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIuX3BhcmVudDsgLy8gYmFjayB1cCB0byBsYXN0IG1hdGNoaW5nIGJsb2NrXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWxsQ2xvc2VkID0gKGNvbnRhaW5lciA9PT0gdGhpcy5vbGR0aXApO1xuICAgIHRoaXMubGFzdE1hdGNoZWRDb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UndmUgaGl0IDJuZCBibGFuayBsaW5lOyBpZiBzbyBicmVhayBvdXQgb2YgbGlzdDpcbiAgICBpZiAodGhpcy5ibGFuayAmJiBjb250YWluZXIuX2xhc3RMaW5lQmxhbmspIHtcbiAgICAgICAgdGhpcy5icmVha091dE9mTGlzdHMoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZExlYWYgPSBjb250YWluZXIudHlwZSAhPT0gJ1BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgIGJsb2Nrc1tjb250YWluZXIudHlwZV0uYWNjZXB0c0xpbmVzO1xuICAgIHZhciBzdGFydHMgPSB0aGlzLmJsb2NrU3RhcnRzO1xuICAgIHZhciBzdGFydHNMZW4gPSBzdGFydHMubGVuZ3RoO1xuICAgIC8vIFVubGVzcyBsYXN0IG1hdGNoZWQgY29udGFpbmVyIGlzIGEgY29kZSBibG9jaywgdHJ5IG5ldyBjb250YWluZXIgc3RhcnRzLFxuICAgIC8vIGFkZGluZyBjaGlsZHJlbiB0byB0aGUgbGFzdCBtYXRjaGVkIGNvbnRhaW5lcjpcbiAgICB3aGlsZSAoIW1hdGNoZWRMZWFmKSB7XG5cbiAgICAgICAgdGhpcy5maW5kTmV4dE5vbnNwYWNlKCk7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhIGxpdHRsZSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246XG4gICAgICAgIGlmICghdGhpcy5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgIXJlTWF5YmVTcGVjaWFsLnRlc3QobG4uc2xpY2UodGhpcy5uZXh0Tm9uc3BhY2UpKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBzdGFydHNMZW4pIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBzdGFydHNbaV0odGhpcywgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmIChyZXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLnRpcDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy50aXA7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZExlYWYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gc3RhcnRzTGVuKSB7IC8vIG5vdGhpbmcgbWF0Y2hlZFxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoYXQgcmVtYWlucyBhdCB0aGUgb2Zmc2V0IGlzIGEgdGV4dCBsaW5lLiAgQWRkIHRoZSB0ZXh0IHRvIHRoZVxuICAgIC8vIGFwcHJvcHJpYXRlIGNvbnRhaW5lci5cblxuICAgLy8gRmlyc3QgY2hlY2sgZm9yIGEgbGF6eSBwYXJhZ3JhcGggY29udGludWF0aW9uOlxuICAgIGlmICghdGhpcy5hbGxDbG9zZWQgJiYgIXRoaXMuYmxhbmsgJiZcbiAgICAgICAgdGhpcy50aXAudHlwZSA9PT0gJ1BhcmFncmFwaCcpIHtcbiAgICAgICAgLy8gbGF6eSBwYXJhZ3JhcGggY29udGludWF0aW9uXG4gICAgICAgIHRoaXMuYWRkTGluZSgpO1xuXG4gICAgfSBlbHNlIHsgLy8gbm90IGEgbGF6eSBjb250aW51YXRpb25cblxuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgYmxvY2tzIG5vdCBtYXRjaGVkXG4gICAgICAgIHRoaXMuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgaWYgKHRoaXMuYmxhbmsgJiYgY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmxhc3RDaGlsZC5fbGFzdExpbmVCbGFuayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0ID0gY29udGFpbmVyLnR5cGU7XG5cbiAgICAgICAgLy8gQmxvY2sgcXVvdGUgbGluZXMgYXJlIG5ldmVyIGJsYW5rIGFzIHRoZXkgc3RhcnQgd2l0aCA+XG4gICAgICAgIC8vIGFuZCB3ZSBkb24ndCBjb3VudCBibGFua3MgaW4gZmVuY2VkIGNvZGUgZm9yIHB1cnBvc2VzIG9mIHRpZ2h0L2xvb3NlXG4gICAgICAgIC8vIGxpc3RzIG9yIGJyZWFraW5nIG91dCBvZiBsaXN0cy4gIFdlIGFsc28gZG9uJ3Qgc2V0IF9sYXN0TGluZUJsYW5rXG4gICAgICAgIC8vIG9uIGFuIGVtcHR5IGxpc3QgaXRlbSwgb3IgaWYgd2UganVzdCBjbG9zZWQgYSBmZW5jZWQgYmxvY2suXG4gICAgICAgIHZhciBsYXN0TGluZUJsYW5rID0gdGhpcy5ibGFuayAmJlxuICAgICAgICAgICAgISh0ID09PSAnQmxvY2tRdW90ZScgfHxcbiAgICAgICAgICAgICAgKHQgPT09ICdDb2RlQmxvY2snICYmIGNvbnRhaW5lci5faXNGZW5jZWQpIHx8XG4gICAgICAgICAgICAgICh0ID09PSAnSXRlbScgJiZcbiAgICAgICAgICAgICAgICFjb250YWluZXIuX2ZpcnN0Q2hpbGQgJiZcbiAgICAgICAgICAgICAgIGNvbnRhaW5lci5zb3VyY2Vwb3NbMF1bMF0gPT09IHRoaXMubGluZU51bWJlcikpO1xuXG4gICAgICAgIC8vIHByb3BhZ2F0ZSBsYXN0TGluZUJsYW5rIHVwIHRocm91Z2ggcGFyZW50czpcbiAgICAgICAgdmFyIGNvbnQgPSBjb250YWluZXI7XG4gICAgICAgIHdoaWxlIChjb250KSB7XG4gICAgICAgICAgICBjb250Ll9sYXN0TGluZUJsYW5rID0gbGFzdExpbmVCbGFuaztcbiAgICAgICAgICAgIGNvbnQgPSBjb250Ll9wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ibG9ja3NbdF0uYWNjZXB0c0xpbmVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoKTtcbiAgICAgICAgICAgIC8vIGlmIEh0bWxCbG9jaywgY2hlY2sgZm9yIGVuZCBjb25kaXRpb25cbiAgICAgICAgICAgIGlmICh0ID09PSAnSHRtbEJsb2NrJyAmJlxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA+PSAxICYmXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLl9odG1sQmxvY2tUeXBlIDw9IDUgJiZcbiAgICAgICAgICAgICAgICByZUh0bWxCbG9ja0Nsb3NlW2NvbnRhaW5lci5faHRtbEJsb2NrVHlwZV0udGVzdCh0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKHRoaXMub2Zmc2V0KSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFsaXplKGNvbnRhaW5lciwgdGhpcy5saW5lTnVtYmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2Zmc2V0IDwgbG4ubGVuZ3RoICYmICF0aGlzLmJsYW5rKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgcGFyYWdyYXBoIGNvbnRhaW5lciBmb3IgbGluZVxuICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5hZGRDaGlsZCgnUGFyYWdyYXBoJywgdGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxhc3RMaW5lTGVuZ3RoID0gbG4ubGVuZ3RoO1xufTtcblxuLy8gRmluYWxpemUgYSBibG9jay4gIENsb3NlIGl0IGFuZCBkbyBhbnkgbmVjZXNzYXJ5IHBvc3Rwcm9jZXNzaW5nLFxuLy8gZS5nLiBjcmVhdGluZyBzdHJpbmdfY29udGVudCBmcm9tIHN0cmluZ3MsIHNldHRpbmcgdGhlICd0aWdodCdcbi8vIG9yICdsb29zZScgc3RhdHVzIG9mIGEgbGlzdCwgYW5kIHBhcnNpbmcgdGhlIGJlZ2lubmluZ3Ncbi8vIG9mIHBhcmFncmFwaHMgZm9yIHJlZmVyZW5jZSBkZWZpbml0aW9ucy4gIFJlc2V0IHRoZSB0aXAgdG8gdGhlXG4vLyBwYXJlbnQgb2YgdGhlIGNsb3NlZCBibG9jay5cbnZhciBmaW5hbGl6ZSA9IGZ1bmN0aW9uKGJsb2NrLCBsaW5lTnVtYmVyKSB7XG4gICAgdmFyIGFib3ZlID0gYmxvY2suX3BhcmVudDtcbiAgICBibG9jay5fb3BlbiA9IGZhbHNlO1xuICAgIGJsb2NrLnNvdXJjZXBvc1sxXSA9IFtsaW5lTnVtYmVyLCB0aGlzLmxhc3RMaW5lTGVuZ3RoXTtcblxuICAgIHRoaXMuYmxvY2tzW2Jsb2NrLnR5cGVdLmZpbmFsaXplKHRoaXMsIGJsb2NrKTtcblxuICAgIHRoaXMudGlwID0gYWJvdmU7XG59O1xuXG4vLyBXYWxrIHRocm91Z2ggYSBibG9jayAmIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LCBwYXJzaW5nIHN0cmluZyBjb250ZW50XG4vLyBpbnRvIGlubGluZSBjb250ZW50IHdoZXJlIGFwcHJvcHJpYXRlLlxudmFyIHByb2Nlc3NJbmxpbmVzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbm9kZSwgZXZlbnQsIHQ7XG4gICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xuICAgIHRoaXMuaW5saW5lUGFyc2VyLnJlZm1hcCA9IHRoaXMucmVmbWFwO1xuICAgIHRoaXMuaW5saW5lUGFyc2VyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgd2hpbGUgKChldmVudCA9IHdhbGtlci5uZXh0KCkpKSB7XG4gICAgICAgIG5vZGUgPSBldmVudC5ub2RlO1xuICAgICAgICB0ID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAoIWV2ZW50LmVudGVyaW5nICYmICh0ID09PSAnUGFyYWdyYXBoJyB8fCB0ID09PSAnSGVhZGVyJykpIHtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lUGFyc2VyLnBhcnNlKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIERvY3VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvYyA9IG5ldyBOb2RlKCdEb2N1bWVudCcsIFtbMSwgMV0sIFswLCAwXV0pO1xuICAgIHJldHVybiBkb2M7XG59O1xuXG4vLyBUaGUgbWFpbiBwYXJzaW5nIGZ1bmN0aW9uLiAgUmV0dXJucyBhIHBhcnNlZCBkb2N1bWVudCBBU1QuXG52YXIgcGFyc2UgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuZG9jID0gbmV3IERvY3VtZW50KCk7XG4gICAgdGhpcy50aXAgPSB0aGlzLmRvYztcbiAgICB0aGlzLnJlZm1hcCA9IHt9O1xuICAgIHRoaXMubGluZU51bWJlciA9IDA7XG4gICAgdGhpcy5sYXN0TGluZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuY29sdW1uID0gMDtcbiAgICB0aGlzLmxhc3RNYXRjaGVkQ29udGFpbmVyID0gdGhpcy5kb2M7XG4gICAgdGhpcy5jdXJyZW50TGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcInByZXBhcmluZyBpbnB1dFwiKTsgfVxuICAgIHZhciBsaW5lcyA9IGlucHV0LnNwbGl0KHJlTGluZUVuZGluZyk7XG4gICAgdmFyIGxlbiA9IGxpbmVzLmxlbmd0aDtcbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChpbnB1dC5sZW5ndGggLSAxKSA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIC8vIGlnbm9yZSBsYXN0IGJsYW5rIGxpbmUgY3JlYXRlZCBieSBmaW5hbCBuZXdsaW5lXG4gICAgICAgIGxlbiAtPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwicHJlcGFyaW5nIGlucHV0XCIpOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcImJsb2NrIHBhcnNpbmdcIik7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuaW5jb3Jwb3JhdGVMaW5lKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgd2hpbGUgKHRoaXMudGlwKSB7XG4gICAgICAgIHRoaXMuZmluYWxpemUodGhpcy50aXAsIGxlbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJibG9jayBwYXJzaW5nXCIpOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcImlubGluZSBwYXJzaW5nXCIpOyB9XG4gICAgdGhpcy5wcm9jZXNzSW5saW5lcyh0aGlzLmRvYyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcImlubGluZSBwYXJzaW5nXCIpOyB9XG4gICAgcmV0dXJuIHRoaXMuZG9jO1xufTtcblxuXG4vLyBUaGUgUGFyc2VyIG9iamVjdC5cbmZ1bmN0aW9uIFBhcnNlcihvcHRpb25zKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBkb2M6IG5ldyBEb2N1bWVudCgpLFxuICAgICAgICBibG9ja3M6IGJsb2NrcyxcbiAgICAgICAgYmxvY2tTdGFydHM6IGJsb2NrU3RhcnRzLFxuICAgICAgICB0aXA6IHRoaXMuZG9jLFxuICAgICAgICBvbGR0aXA6IHRoaXMuZG9jLFxuICAgICAgICBjdXJyZW50TGluZTogXCJcIixcbiAgICAgICAgbGluZU51bWJlcjogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBjb2x1bW46IDAsXG4gICAgICAgIG5leHROb25zcGFjZTogMCxcbiAgICAgICAgbmV4dE5vbnNwYWNlQ29sdW1uOiAwLFxuICAgICAgICBpbmRlbnQ6IDAsXG4gICAgICAgIGluZGVudGVkOiBmYWxzZSxcbiAgICAgICAgYmxhbms6IGZhbHNlLFxuICAgICAgICBhbGxDbG9zZWQ6IHRydWUsXG4gICAgICAgIGxhc3RNYXRjaGVkQ29udGFpbmVyOiB0aGlzLmRvYyxcbiAgICAgICAgcmVmbWFwOiB7fSxcbiAgICAgICAgbGFzdExpbmVMZW5ndGg6IDAsXG4gICAgICAgIGlubGluZVBhcnNlcjogbmV3IElubGluZVBhcnNlcihvcHRpb25zKSxcbiAgICAgICAgZmluZE5leHROb25zcGFjZTogZmluZE5leHROb25zcGFjZSxcbiAgICAgICAgYWR2YW5jZU9mZnNldDogYWR2YW5jZU9mZnNldCxcbiAgICAgICAgYWR2YW5jZU5leHROb25zcGFjZTogYWR2YW5jZU5leHROb25zcGFjZSxcbiAgICAgICAgYnJlYWtPdXRPZkxpc3RzOiBicmVha091dE9mTGlzdHMsXG4gICAgICAgIGFkZExpbmU6IGFkZExpbmUsXG4gICAgICAgIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgICAgICAgaW5jb3Jwb3JhdGVMaW5lOiBpbmNvcnBvcmF0ZUxpbmUsXG4gICAgICAgIGZpbmFsaXplOiBmaW5hbGl6ZSxcbiAgICAgICAgcHJvY2Vzc0lubGluZXM6IHByb2Nlc3NJbmxpbmVzLFxuICAgICAgICBjbG9zZVVubWF0Y2hlZEJsb2NrczogY2xvc2VVbm1hdGNoZWRCbG9ja3MsXG4gICAgICAgIHBhcnNlOiBwYXJzZSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fVxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvYmxvY2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnbWR1cmwvZGVjb2RlJyk7XG5cbnZhciBDX0JBQ0tTTEFTSCA9IDkyO1xuXG52YXIgZGVjb2RlSFRNTCA9IHJlcXVpcmUoJ2VudGl0aWVzJykuZGVjb2RlSFRNTDtcblxudmFyIEVOVElUWSA9IFwiJig/OiN4W2EtZjAtOV17MSw4fXwjWzAtOV17MSw4fXxbYS16XVthLXowLTldezEsMzF9KTtcIjtcblxudmFyIFRBR05BTUUgPSAnW0EtWmEtel1bQS1aYS16MC05LV0qJztcbnZhciBBVFRSSUJVVEVOQU1FID0gJ1thLXpBLVpfOl1bYS16QS1aMC05Oi5fLV0qJztcbnZhciBVTlFVT1RFRFZBTFVFID0gXCJbXlxcXCInPTw+YFxcXFx4MDAtXFxcXHgyMF0rXCI7XG52YXIgU0lOR0xFUVVPVEVEVkFMVUUgPSBcIidbXiddKidcIjtcbnZhciBET1VCTEVRVU9URURWQUxVRSA9ICdcIlteXCJdKlwiJztcbnZhciBBVFRSSUJVVEVWQUxVRSA9IFwiKD86XCIgKyBVTlFVT1RFRFZBTFVFICsgXCJ8XCIgKyBTSU5HTEVRVU9URURWQUxVRSArIFwifFwiICsgRE9VQkxFUVVPVEVEVkFMVUUgKyBcIilcIjtcbnZhciBBVFRSSUJVVEVWQUxVRVNQRUMgPSBcIig/OlwiICsgXCJcXFxccyo9XCIgKyBcIlxcXFxzKlwiICsgQVRUUklCVVRFVkFMVUUgKyBcIilcIjtcbnZhciBBVFRSSUJVVEUgPSBcIig/OlwiICsgXCJcXFxccytcIiArIEFUVFJJQlVURU5BTUUgKyBBVFRSSUJVVEVWQUxVRVNQRUMgKyBcIj8pXCI7XG52YXIgT1BFTlRBRyA9IFwiPFwiICsgVEFHTkFNRSArIEFUVFJJQlVURSArIFwiKlwiICsgXCJcXFxccyovPz5cIjtcbnZhciBDTE9TRVRBRyA9IFwiPC9cIiArIFRBR05BTUUgKyBcIlxcXFxzKls+XVwiO1xudmFyIEhUTUxDT01NRU5UID0gXCI8IS0tLS0+fDwhLS0oPzotP1tePi1dKSg/Oi0/W14tXSkqLS0+XCI7XG52YXIgUFJPQ0VTU0lOR0lOU1RSVUNUSU9OID0gXCJbPF1bP10uKj9bP11bPl1cIjtcbnZhciBERUNMQVJBVElPTiA9IFwiPCFbQS1aXStcIiArIFwiXFxcXHMrW14+XSo+XCI7XG52YXIgQ0RBVEEgPSBcIjwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPlwiO1xudmFyIEhUTUxUQUcgPSBcIig/OlwiICsgT1BFTlRBRyArIFwifFwiICsgQ0xPU0VUQUcgKyBcInxcIiArIEhUTUxDT01NRU5UICsgXCJ8XCIgK1xuICAgICAgICBQUk9DRVNTSU5HSU5TVFJVQ1RJT04gKyBcInxcIiArIERFQ0xBUkFUSU9OICsgXCJ8XCIgKyBDREFUQSArIFwiKVwiO1xudmFyIHJlSHRtbFRhZyA9IG5ldyBSZWdFeHAoJ14nICsgSFRNTFRBRywgJ2knKTtcblxudmFyIHJlQmFja3NsYXNoT3JBbXAgPSAvW1xcXFwmXS87XG5cbnZhciBFU0NBUEFCTEUgPSAnWyFcIiMkJSZcXCcoKSorLC4vOjs8PT4/QFtcXFxcXFxcXFxcXFxdXl9ge3x9fi1dJztcblxudmFyIHJlRW50aXR5T3JFc2NhcGVkQ2hhciA9IG5ldyBSZWdFeHAoJ1xcXFxcXFxcJyArIEVTQ0FQQUJMRSArICd8JyArIEVOVElUWSwgJ2dpJyk7XG5cbnZhciBYTUxTUEVDSUFMID0gJ1smPD5cIl0nO1xuXG52YXIgcmVYbWxTcGVjaWFsID0gbmV3IFJlZ0V4cChYTUxTUEVDSUFMLCAnZycpO1xuXG52YXIgcmVYbWxTcGVjaWFsT3JFbnRpdHkgPSBuZXcgUmVnRXhwKEVOVElUWSArICd8JyArIFhNTFNQRUNJQUwsICdnaScpO1xuXG52YXIgdW5lc2NhcGVDaGFyID0gZnVuY3Rpb24ocykge1xuICAgIGlmIChzLmNoYXJDb2RlQXQoMCkgPT09IENfQkFDS1NMQVNIKSB7XG4gICAgICAgIHJldHVybiBzLmNoYXJBdCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVjb2RlSFRNTChzKTtcbiAgICB9XG59O1xuXG4vLyBSZXBsYWNlIGVudGl0aWVzIGFuZCBiYWNrc2xhc2ggZXNjYXBlcyB3aXRoIGxpdGVyYWwgY2hhcmFjdGVycy5cbnZhciB1bmVzY2FwZVN0cmluZyA9IGZ1bmN0aW9uKHMpIHtcbiAgICBpZiAocmVCYWNrc2xhc2hPckFtcC50ZXN0KHMpKSB7XG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UocmVFbnRpdHlPckVzY2FwZWRDaGFyLCB1bmVzY2FwZUNoYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn07XG5cbnZhciBub3JtYWxpemVVUkkgPSBmdW5jdGlvbih1cmkpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZW5jb2RlKGRlY29kZSh1cmkpKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKSB7XG4gICAgICAgIHJldHVybiB1cmk7XG4gICAgfVxufTtcblxudmFyIHJlcGxhY2VVbnNhZmVDaGFyID0gZnVuY3Rpb24ocykge1xuICAgIHN3aXRjaCAocykge1xuICAgIGNhc2UgJyYnOlxuICAgICAgICByZXR1cm4gJyZhbXA7JztcbiAgICBjYXNlICc8JzpcbiAgICAgICAgcmV0dXJuICcmbHQ7JztcbiAgICBjYXNlICc+JzpcbiAgICAgICAgcmV0dXJuICcmZ3Q7JztcbiAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiAnJnF1b3Q7JztcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59O1xuXG52YXIgZXNjYXBlWG1sID0gZnVuY3Rpb24ocywgcHJlc2VydmVfZW50aXRpZXMpIHtcbiAgICBpZiAocmVYbWxTcGVjaWFsLnRlc3QocykpIHtcbiAgICAgICAgaWYgKHByZXNlcnZlX2VudGl0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKHJlWG1sU3BlY2lhbE9yRW50aXR5LCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKHJlWG1sU3BlY2lhbCwgcmVwbGFjZVVuc2FmZUNoYXIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHVuZXNjYXBlU3RyaW5nOiB1bmVzY2FwZVN0cmluZyxcbiAgICAgICAgICAgICAgICAgICBub3JtYWxpemVVUkk6IG5vcm1hbGl6ZVVSSSxcbiAgICAgICAgICAgICAgICAgICBlc2NhcGVYbWw6IGVzY2FwZVhtbCxcbiAgICAgICAgICAgICAgICAgICByZUh0bWxUYWc6IHJlSHRtbFRhZyxcbiAgICAgICAgICAgICAgICAgICBPUEVOVEFHOiBPUEVOVEFHLFxuICAgICAgICAgICAgICAgICAgIENMT1NFVEFHOiBDTE9TRVRBRyxcbiAgICAgICAgICAgICAgICAgICBFTlRJVFk6IEVOVElUWSxcbiAgICAgICAgICAgICAgICAgICBFU0NBUEFCTEU6IEVTQ0FQQUJMRVxuICAgICAgICAgICAgICAgICB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvY29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbmNvZGVDYWNoZSA9IHt9O1xuXG5cbi8vIENyZWF0ZSBhIGxvb2t1cCBhcnJheSB3aGVyZSBhbnl0aGluZyBidXQgY2hhcmFjdGVycyBpbiBgY2hhcnNgIHN0cmluZ1xuLy8gYW5kIGFscGhhbnVtZXJpYyBjaGFycyBpcyBwZXJjZW50LWVuY29kZWQuXG4vL1xuZnVuY3Rpb24gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuXG4gICAgaWYgKC9eWzAtOWEtel0kL2kudGVzdChjaCkpIHtcbiAgICAgIC8vIGFsd2F5cyBhbGxvdyB1bmVuY29kZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcbiAgICAgIGNhY2hlLnB1c2goY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5wdXNoKCclJyArICgnMCcgKyBpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMikpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FjaGVbZXhjbHVkZS5jaGFyQ29kZUF0KGkpXSA9IGV4Y2x1ZGVbaV07XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZShzdHJpbmcsIGV4Y2x1ZGUsIGtlZXBFc2NhcGVkKSB7XG4gIHZhciBpLCBsLCBjb2RlLCBuZXh0Q29kZSwgY2FjaGUsXG4gICAgICByZXN1bHQgPSAnJztcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgID0gZXhjbHVkZTtcbiAgICBleGNsdWRlID0gZW5jb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FjaGUgPSBnZXRFbmNvZGVDYWNoZShleGNsdWRlKTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChrZWVwRXNjYXBlZCAmJiBjb2RlID09PSAweDI1IC8qICUgKi8gJiYgaSArIDIgPCBsKSB7XG4gICAgICBpZiAoL15bMC05YS1mXXsyfSQvaS50ZXN0KHN0cmluZy5zbGljZShpICsgMSwgaSArIDMpKSkge1xuICAgICAgICByZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGksIGkgKyAzKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgcmVzdWx0ICs9IGNhY2hlW2NvZGVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBpZiAobmV4dENvZGUgPj0gMHhEQzAwICYmIG5leHRDb2RlIDw9IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldICsgc3RyaW5nW2kgKyAxXSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gJyVFRiVCRiVCRCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5lbmNvZGUuZGVmYXVsdENoYXJzICAgPSBcIjsvPzpAJj0rJCwtXy4hfionKCkjXCI7XG5lbmNvZGUuY29tcG9uZW50Q2hhcnMgPSBcIi1fLiF+KicoKVwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L21kdXJsL2VuY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbid1c2Ugc3RyaWN0JztcblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cbnZhciBkZWNvZGVDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBkZWNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgY2FjaGUucHVzaChjaCk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNoID0gZXhjbHVkZS5jaGFyQ29kZUF0KGkpO1xuICAgIGNhY2hlW2NoXSA9ICclJyArICgnMCcgKyBjaC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIERlY29kZSBwZXJjZW50LWVuY29kZWQgc3RyaW5nLlxuLy9cbmZ1bmN0aW9uIGRlY29kZShzdHJpbmcsIGV4Y2x1ZGUpIHtcbiAgdmFyIGNhY2hlO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICBleGNsdWRlID0gZGVjb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RGVjb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oJVthLWYwLTldezJ9KSsvZ2ksIGZ1bmN0aW9uKHNlcSkge1xuICAgIHZhciBpLCBsLCBiMSwgYjIsIGIzLCBiNCwgY2hhcixcbiAgICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gc2VxLmxlbmd0aDsgaSA8IGw7IGkgKz0gMykge1xuICAgICAgYjEgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEsIGkgKyAzKSwgMTYpO1xuXG4gICAgICBpZiAoYjEgPCAweDgwKSB7XG4gICAgICAgIHJlc3VsdCArPSBjYWNoZVtiMV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhFMCkgPT09IDB4QzAgJiYgKGkgKyAzIDwgbCkpIHtcbiAgICAgICAgLy8gMTEweHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNoYXIgPSAoKGIxIDw8IDYpICYgMHg3QzApIHwgKGIyICYgMHgzRik7XG5cbiAgICAgICAgICBpZiAoY2hhciA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDM7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RjApID09PSAweEUwICYmIChpICsgNiA8IGwpKSB7XG4gICAgICAgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KTtcbiAgICAgICAgYjMgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDcsIGkgKyA5KSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjMgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNoYXIgPSAoKGIxIDw8IDEyKSAmIDB4RjAwMCkgfCAoKGIyIDw8IDYpICYgMHhGQzApIHwgKGIzICYgMHgzRik7XG5cbiAgICAgICAgICBpZiAoY2hhciA8IDB4ODAwIHx8IChjaGFyID49IDB4RDgwMCAmJiBjaGFyIDw9IDB4REZGRikpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA2O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEY4KSA9PT0gMHhGMCAmJiAoaSArIDkgPCBsKSkge1xuICAgICAgICAvLyAxMTExMTB4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG4gICAgICAgIGIzID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA3LCBpICsgOSksIDE2KTtcbiAgICAgICAgYjQgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEwLCBpICsgMTIpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwICYmIChiNCAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hhciA9ICgoYjEgPDwgMTgpICYgMHgxQzAwMDApIHwgKChiMiA8PCAxMikgJiAweDNGMDAwKSB8ICgoYjMgPDwgNikgJiAweEZDMCkgfCAoYjQgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaGFyIDwgMHgxMDAwMCB8fCBjaGFyID4gMHgxMEZGRkYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYXIgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCArIChjaGFyID4+IDEwKSwgMHhEQzAwICsgKGNoYXIgJiAweDNGRikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gOTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gJ1xcdWZmZmQnO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5cbmRlY29kZS5kZWZhdWx0Q2hhcnMgICA9ICc7Lz86QCY9KyQsIyc7XG5kZWNvZGUuY29tcG9uZW50Q2hhcnMgPSAnJztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9kZWNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVuY29kZSA9IHJlcXVpcmUoXCIuL2xpYi9lbmNvZGUuanNcIiksXG4gICAgZGVjb2RlID0gcmVxdWlyZShcIi4vbGliL2RlY29kZS5qc1wiKTtcblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihkYXRhLCBsZXZlbCl7XG5cdHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGUuWE1MIDogZGVjb2RlLkhUTUwpKGRhdGEpO1xufTtcblxuZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBmdW5jdGlvbihkYXRhLCBsZXZlbCl7XG5cdHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGUuWE1MIDogZGVjb2RlLkhUTUxTdHJpY3QpKGRhdGEpO1xufTtcblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbihkYXRhLCBsZXZlbCl7XG5cdHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBlbmNvZGUuWE1MIDogZW5jb2RlLkhUTUwpKGRhdGEpO1xufTtcblxuZXhwb3J0cy5lbmNvZGVYTUwgPSBlbmNvZGUuWE1MO1xuXG5leHBvcnRzLmVuY29kZUhUTUw0ID1cbmV4cG9ydHMuZW5jb2RlSFRNTDUgPVxuZXhwb3J0cy5lbmNvZGVIVE1MICA9IGVuY29kZS5IVE1MO1xuXG5leHBvcnRzLmRlY29kZVhNTCA9XG5leHBvcnRzLmRlY29kZVhNTFN0cmljdCA9IGRlY29kZS5YTUw7XG5cbmV4cG9ydHMuZGVjb2RlSFRNTDQgPVxuZXhwb3J0cy5kZWNvZGVIVE1MNSA9XG5leHBvcnRzLmRlY29kZUhUTUwgPSBkZWNvZGUuSFRNTDtcblxuZXhwb3J0cy5kZWNvZGVIVE1MNFN0cmljdCA9XG5leHBvcnRzLmRlY29kZUhUTUw1U3RyaWN0ID1cbmV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGRlY29kZS5IVE1MU3RyaWN0O1xuXG5leHBvcnRzLmVzY2FwZSA9IGVuY29kZS5lc2NhcGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHJlcXVpcmUoXCIuLi9tYXBzL3htbC5qc29uXCIpKSxcbiAgICB4bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcblxuZXhwb3J0cy5YTUwgPSBnZXRJbnZlcnNlKGludmVyc2VYTUwsIHhtbFJlcGxhY2VyKTtcblxudmFyIGludmVyc2VIVE1MID0gZ2V0SW52ZXJzZU9iaihyZXF1aXJlKFwiLi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKSxcbiAgICBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuXG5leHBvcnRzLkhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuXG5mdW5jdGlvbiBnZXRJbnZlcnNlT2JqKG9iail7XG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24oaW52ZXJzZSwgbmFtZSl7XG5cdFx0aW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG5cdFx0cmV0dXJuIGludmVyc2U7XG5cdH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2Upe1xuXHR2YXIgc2luZ2xlID0gW10sXG5cdCAgICBtdWx0aXBsZSA9IFtdO1xuXG5cdE9iamVjdC5rZXlzKGludmVyc2UpLmZvckVhY2goZnVuY3Rpb24oayl7XG5cdFx0aWYoay5sZW5ndGggPT09IDEpe1xuXHRcdFx0c2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bXVsdGlwbGUucHVzaChrKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vVE9ETyBhZGQgcmFuZ2VzXG5cdG11bHRpcGxlLnVuc2hpZnQoXCJbXCIgKyBzaW5nbGUuam9pbihcIlwiKSArIFwiXVwiKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChtdWx0aXBsZS5qb2luKFwifFwiKSwgXCJnXCIpO1xufVxuXG52YXIgcmVfbm9uQVNDSUkgPSAvW15cXDAtXFx4N0ZdL2csXG4gICAgcmVfYXN0cmFsU3ltYm9scyA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XG5cbmZ1bmN0aW9uIHNpbmdsZUNoYXJSZXBsYWNlcihjKXtcblx0cmV0dXJuIFwiJiN4XCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cblxuZnVuY3Rpb24gYXN0cmFsUmVwbGFjZXIoYyl7XG5cdC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG5cdHZhciBoaWdoID0gYy5jaGFyQ29kZUF0KDApO1xuXHR2YXIgbG93ICA9IGMuY2hhckNvZGVBdCgxKTtcblx0dmFyIGNvZGVQb2ludCA9IChoaWdoIC0gMHhEODAwKSAqIDB4NDAwICsgbG93IC0gMHhEQzAwICsgMHgxMDAwMDtcblx0cmV0dXJuIFwiJiN4XCIgKyBjb2RlUG9pbnQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW52ZXJzZShpbnZlcnNlLCByZSl7XG5cdGZ1bmN0aW9uIGZ1bmMobmFtZSl7XG5cdFx0cmV0dXJuIGludmVyc2VbbmFtZV07XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24oZGF0YSl7XG5cdFx0cmV0dXJuIGRhdGFcblx0XHRcdFx0LnJlcGxhY2UocmUsIGZ1bmMpXG5cdFx0XHRcdC5yZXBsYWNlKHJlX2FzdHJhbFN5bWJvbHMsIGFzdHJhbFJlcGxhY2VyKVxuXHRcdFx0XHQucmVwbGFjZShyZV9ub25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcblx0fTtcbn1cblxudmFyIHJlX3htbENoYXJzID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VYTUwpO1xuXG5mdW5jdGlvbiBlc2NhcGVYTUwoZGF0YSl7XG5cdHJldHVybiBkYXRhXG5cdFx0XHQucmVwbGFjZShyZV94bWxDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKVxuXHRcdFx0LnJlcGxhY2UocmVfYXN0cmFsU3ltYm9scywgYXN0cmFsUmVwbGFjZXIpXG5cdFx0XHQucmVwbGFjZShyZV9ub25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cblxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGVYTUw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2VuY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhbXBcIjogXCImXCIsXG5cdFwiYXBvc1wiOiBcIidcIixcblx0XCJndFwiOiBcIj5cIixcblx0XCJsdFwiOiBcIjxcIixcblx0XCJxdW90XCI6IFwiXFxcIlwiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMveG1sLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQWFjdXRlXCI6IFwiw4FcIixcblx0XCJhYWN1dGVcIjogXCLDoVwiLFxuXHRcIkFicmV2ZVwiOiBcIsSCXCIsXG5cdFwiYWJyZXZlXCI6IFwixINcIixcblx0XCJhY1wiOiBcIuKIvlwiLFxuXHRcImFjZFwiOiBcIuKIv1wiLFxuXHRcImFjRVwiOiBcIuKIvsyzXCIsXG5cdFwiQWNpcmNcIjogXCLDglwiLFxuXHRcImFjaXJjXCI6IFwiw6JcIixcblx0XCJhY3V0ZVwiOiBcIsK0XCIsXG5cdFwiQWN5XCI6IFwi0JBcIixcblx0XCJhY3lcIjogXCLQsFwiLFxuXHRcIkFFbGlnXCI6IFwiw4ZcIixcblx0XCJhZWxpZ1wiOiBcIsOmXCIsXG5cdFwiYWZcIjogXCLigaFcIixcblx0XCJBZnJcIjogXCLwnZSEXCIsXG5cdFwiYWZyXCI6IFwi8J2UnlwiLFxuXHRcIkFncmF2ZVwiOiBcIsOAXCIsXG5cdFwiYWdyYXZlXCI6IFwiw6BcIixcblx0XCJhbGVmc3ltXCI6IFwi4oS1XCIsXG5cdFwiYWxlcGhcIjogXCLihLVcIixcblx0XCJBbHBoYVwiOiBcIs6RXCIsXG5cdFwiYWxwaGFcIjogXCLOsVwiLFxuXHRcIkFtYWNyXCI6IFwixIBcIixcblx0XCJhbWFjclwiOiBcIsSBXCIsXG5cdFwiYW1hbGdcIjogXCLiqL9cIixcblx0XCJhbXBcIjogXCImXCIsXG5cdFwiQU1QXCI6IFwiJlwiLFxuXHRcImFuZGFuZFwiOiBcIuKplVwiLFxuXHRcIkFuZFwiOiBcIuKpk1wiLFxuXHRcImFuZFwiOiBcIuKIp1wiLFxuXHRcImFuZGRcIjogXCLiqZxcIixcblx0XCJhbmRzbG9wZVwiOiBcIuKpmFwiLFxuXHRcImFuZHZcIjogXCLiqZpcIixcblx0XCJhbmdcIjogXCLiiKBcIixcblx0XCJhbmdlXCI6IFwi4qakXCIsXG5cdFwiYW5nbGVcIjogXCLiiKBcIixcblx0XCJhbmdtc2RhYVwiOiBcIuKmqFwiLFxuXHRcImFuZ21zZGFiXCI6IFwi4qapXCIsXG5cdFwiYW5nbXNkYWNcIjogXCLipqpcIixcblx0XCJhbmdtc2RhZFwiOiBcIuKmq1wiLFxuXHRcImFuZ21zZGFlXCI6IFwi4qasXCIsXG5cdFwiYW5nbXNkYWZcIjogXCLipq1cIixcblx0XCJhbmdtc2RhZ1wiOiBcIuKmrlwiLFxuXHRcImFuZ21zZGFoXCI6IFwi4qavXCIsXG5cdFwiYW5nbXNkXCI6IFwi4oihXCIsXG5cdFwiYW5ncnRcIjogXCLiiJ9cIixcblx0XCJhbmdydHZiXCI6IFwi4oq+XCIsXG5cdFwiYW5ncnR2YmRcIjogXCLipp1cIixcblx0XCJhbmdzcGhcIjogXCLiiKJcIixcblx0XCJhbmdzdFwiOiBcIsOFXCIsXG5cdFwiYW5nemFyclwiOiBcIuKNvFwiLFxuXHRcIkFvZ29uXCI6IFwixIRcIixcblx0XCJhb2dvblwiOiBcIsSFXCIsXG5cdFwiQW9wZlwiOiBcIvCdlLhcIixcblx0XCJhb3BmXCI6IFwi8J2VklwiLFxuXHRcImFwYWNpclwiOiBcIuKpr1wiLFxuXHRcImFwXCI6IFwi4omIXCIsXG5cdFwiYXBFXCI6IFwi4qmwXCIsXG5cdFwiYXBlXCI6IFwi4omKXCIsXG5cdFwiYXBpZFwiOiBcIuKJi1wiLFxuXHRcImFwb3NcIjogXCInXCIsXG5cdFwiQXBwbHlGdW5jdGlvblwiOiBcIuKBoVwiLFxuXHRcImFwcHJveFwiOiBcIuKJiFwiLFxuXHRcImFwcHJveGVxXCI6IFwi4omKXCIsXG5cdFwiQXJpbmdcIjogXCLDhVwiLFxuXHRcImFyaW5nXCI6IFwiw6VcIixcblx0XCJBc2NyXCI6IFwi8J2SnFwiLFxuXHRcImFzY3JcIjogXCLwnZK2XCIsXG5cdFwiQXNzaWduXCI6IFwi4omUXCIsXG5cdFwiYXN0XCI6IFwiKlwiLFxuXHRcImFzeW1wXCI6IFwi4omIXCIsXG5cdFwiYXN5bXBlcVwiOiBcIuKJjVwiLFxuXHRcIkF0aWxkZVwiOiBcIsODXCIsXG5cdFwiYXRpbGRlXCI6IFwiw6NcIixcblx0XCJBdW1sXCI6IFwiw4RcIixcblx0XCJhdW1sXCI6IFwiw6RcIixcblx0XCJhd2NvbmludFwiOiBcIuKIs1wiLFxuXHRcImF3aW50XCI6IFwi4qiRXCIsXG5cdFwiYmFja2NvbmdcIjogXCLiiYxcIixcblx0XCJiYWNrZXBzaWxvblwiOiBcIs+2XCIsXG5cdFwiYmFja3ByaW1lXCI6IFwi4oC1XCIsXG5cdFwiYmFja3NpbVwiOiBcIuKIvVwiLFxuXHRcImJhY2tzaW1lcVwiOiBcIuKLjVwiLFxuXHRcIkJhY2tzbGFzaFwiOiBcIuKIllwiLFxuXHRcIkJhcnZcIjogXCLiq6dcIixcblx0XCJiYXJ2ZWVcIjogXCLiir1cIixcblx0XCJiYXJ3ZWRcIjogXCLijIVcIixcblx0XCJCYXJ3ZWRcIjogXCLijIZcIixcblx0XCJiYXJ3ZWRnZVwiOiBcIuKMhVwiLFxuXHRcImJicmtcIjogXCLijrVcIixcblx0XCJiYnJrdGJya1wiOiBcIuKOtlwiLFxuXHRcImJjb25nXCI6IFwi4omMXCIsXG5cdFwiQmN5XCI6IFwi0JFcIixcblx0XCJiY3lcIjogXCLQsVwiLFxuXHRcImJkcXVvXCI6IFwi4oCeXCIsXG5cdFwiYmVjYXVzXCI6IFwi4oi1XCIsXG5cdFwiYmVjYXVzZVwiOiBcIuKItVwiLFxuXHRcIkJlY2F1c2VcIjogXCLiiLVcIixcblx0XCJiZW1wdHl2XCI6IFwi4qawXCIsXG5cdFwiYmVwc2lcIjogXCLPtlwiLFxuXHRcImJlcm5vdVwiOiBcIuKErFwiLFxuXHRcIkJlcm5vdWxsaXNcIjogXCLihKxcIixcblx0XCJCZXRhXCI6IFwizpJcIixcblx0XCJiZXRhXCI6IFwizrJcIixcblx0XCJiZXRoXCI6IFwi4oS2XCIsXG5cdFwiYmV0d2VlblwiOiBcIuKJrFwiLFxuXHRcIkJmclwiOiBcIvCdlIVcIixcblx0XCJiZnJcIjogXCLwnZSfXCIsXG5cdFwiYmlnY2FwXCI6IFwi4ouCXCIsXG5cdFwiYmlnY2lyY1wiOiBcIuKXr1wiLFxuXHRcImJpZ2N1cFwiOiBcIuKLg1wiLFxuXHRcImJpZ29kb3RcIjogXCLiqIBcIixcblx0XCJiaWdvcGx1c1wiOiBcIuKogVwiLFxuXHRcImJpZ290aW1lc1wiOiBcIuKoglwiLFxuXHRcImJpZ3NxY3VwXCI6IFwi4qiGXCIsXG5cdFwiYmlnc3RhclwiOiBcIuKYhVwiLFxuXHRcImJpZ3RyaWFuZ2xlZG93blwiOiBcIuKWvVwiLFxuXHRcImJpZ3RyaWFuZ2xldXBcIjogXCLilrNcIixcblx0XCJiaWd1cGx1c1wiOiBcIuKohFwiLFxuXHRcImJpZ3ZlZVwiOiBcIuKLgVwiLFxuXHRcImJpZ3dlZGdlXCI6IFwi4ouAXCIsXG5cdFwiYmthcm93XCI6IFwi4qSNXCIsXG5cdFwiYmxhY2tsb3plbmdlXCI6IFwi4qerXCIsXG5cdFwiYmxhY2tzcXVhcmVcIjogXCLilqpcIixcblx0XCJibGFja3RyaWFuZ2xlXCI6IFwi4pa0XCIsXG5cdFwiYmxhY2t0cmlhbmdsZWRvd25cIjogXCLilr5cIixcblx0XCJibGFja3RyaWFuZ2xlbGVmdFwiOiBcIuKXglwiLFxuXHRcImJsYWNrdHJpYW5nbGVyaWdodFwiOiBcIuKWuFwiLFxuXHRcImJsYW5rXCI6IFwi4pCjXCIsXG5cdFwiYmxrMTJcIjogXCLilpJcIixcblx0XCJibGsxNFwiOiBcIuKWkVwiLFxuXHRcImJsazM0XCI6IFwi4paTXCIsXG5cdFwiYmxvY2tcIjogXCLilohcIixcblx0XCJibmVcIjogXCI94oOlXCIsXG5cdFwiYm5lcXVpdlwiOiBcIuKJoeKDpVwiLFxuXHRcImJOb3RcIjogXCLiq61cIixcblx0XCJibm90XCI6IFwi4oyQXCIsXG5cdFwiQm9wZlwiOiBcIvCdlLlcIixcblx0XCJib3BmXCI6IFwi8J2Vk1wiLFxuXHRcImJvdFwiOiBcIuKKpVwiLFxuXHRcImJvdHRvbVwiOiBcIuKKpVwiLFxuXHRcImJvd3RpZVwiOiBcIuKLiFwiLFxuXHRcImJveGJveFwiOiBcIuKniVwiLFxuXHRcImJveGRsXCI6IFwi4pSQXCIsXG5cdFwiYm94ZExcIjogXCLilZVcIixcblx0XCJib3hEbFwiOiBcIuKVllwiLFxuXHRcImJveERMXCI6IFwi4pWXXCIsXG5cdFwiYm94ZHJcIjogXCLilIxcIixcblx0XCJib3hkUlwiOiBcIuKVklwiLFxuXHRcImJveERyXCI6IFwi4pWTXCIsXG5cdFwiYm94RFJcIjogXCLilZRcIixcblx0XCJib3hoXCI6IFwi4pSAXCIsXG5cdFwiYm94SFwiOiBcIuKVkFwiLFxuXHRcImJveGhkXCI6IFwi4pSsXCIsXG5cdFwiYm94SGRcIjogXCLilaRcIixcblx0XCJib3hoRFwiOiBcIuKVpVwiLFxuXHRcImJveEhEXCI6IFwi4pWmXCIsXG5cdFwiYm94aHVcIjogXCLilLRcIixcblx0XCJib3hIdVwiOiBcIuKVp1wiLFxuXHRcImJveGhVXCI6IFwi4pWoXCIsXG5cdFwiYm94SFVcIjogXCLilalcIixcblx0XCJib3htaW51c1wiOiBcIuKKn1wiLFxuXHRcImJveHBsdXNcIjogXCLiip5cIixcblx0XCJib3h0aW1lc1wiOiBcIuKKoFwiLFxuXHRcImJveHVsXCI6IFwi4pSYXCIsXG5cdFwiYm94dUxcIjogXCLilZtcIixcblx0XCJib3hVbFwiOiBcIuKVnFwiLFxuXHRcImJveFVMXCI6IFwi4pWdXCIsXG5cdFwiYm94dXJcIjogXCLilJRcIixcblx0XCJib3h1UlwiOiBcIuKVmFwiLFxuXHRcImJveFVyXCI6IFwi4pWZXCIsXG5cdFwiYm94VVJcIjogXCLilZpcIixcblx0XCJib3h2XCI6IFwi4pSCXCIsXG5cdFwiYm94VlwiOiBcIuKVkVwiLFxuXHRcImJveHZoXCI6IFwi4pS8XCIsXG5cdFwiYm94dkhcIjogXCLilapcIixcblx0XCJib3hWaFwiOiBcIuKVq1wiLFxuXHRcImJveFZIXCI6IFwi4pWsXCIsXG5cdFwiYm94dmxcIjogXCLilKRcIixcblx0XCJib3h2TFwiOiBcIuKVoVwiLFxuXHRcImJveFZsXCI6IFwi4pWiXCIsXG5cdFwiYm94VkxcIjogXCLilaNcIixcblx0XCJib3h2clwiOiBcIuKUnFwiLFxuXHRcImJveHZSXCI6IFwi4pWeXCIsXG5cdFwiYm94VnJcIjogXCLilZ9cIixcblx0XCJib3hWUlwiOiBcIuKVoFwiLFxuXHRcImJwcmltZVwiOiBcIuKAtVwiLFxuXHRcImJyZXZlXCI6IFwiy5hcIixcblx0XCJCcmV2ZVwiOiBcIsuYXCIsXG5cdFwiYnJ2YmFyXCI6IFwiwqZcIixcblx0XCJic2NyXCI6IFwi8J2St1wiLFxuXHRcIkJzY3JcIjogXCLihKxcIixcblx0XCJic2VtaVwiOiBcIuKBj1wiLFxuXHRcImJzaW1cIjogXCLiiL1cIixcblx0XCJic2ltZVwiOiBcIuKLjVwiLFxuXHRcImJzb2xiXCI6IFwi4qeFXCIsXG5cdFwiYnNvbFwiOiBcIlxcXFxcIixcblx0XCJic29saHN1YlwiOiBcIuKfiFwiLFxuXHRcImJ1bGxcIjogXCLigKJcIixcblx0XCJidWxsZXRcIjogXCLigKJcIixcblx0XCJidW1wXCI6IFwi4omOXCIsXG5cdFwiYnVtcEVcIjogXCLiqq5cIixcblx0XCJidW1wZVwiOiBcIuKJj1wiLFxuXHRcIkJ1bXBlcVwiOiBcIuKJjlwiLFxuXHRcImJ1bXBlcVwiOiBcIuKJj1wiLFxuXHRcIkNhY3V0ZVwiOiBcIsSGXCIsXG5cdFwiY2FjdXRlXCI6IFwixIdcIixcblx0XCJjYXBhbmRcIjogXCLiqYRcIixcblx0XCJjYXBicmN1cFwiOiBcIuKpiVwiLFxuXHRcImNhcGNhcFwiOiBcIuKpi1wiLFxuXHRcImNhcFwiOiBcIuKIqVwiLFxuXHRcIkNhcFwiOiBcIuKLklwiLFxuXHRcImNhcGN1cFwiOiBcIuKph1wiLFxuXHRcImNhcGRvdFwiOiBcIuKpgFwiLFxuXHRcIkNhcGl0YWxEaWZmZXJlbnRpYWxEXCI6IFwi4oWFXCIsXG5cdFwiY2Fwc1wiOiBcIuKIqe+4gFwiLFxuXHRcImNhcmV0XCI6IFwi4oGBXCIsXG5cdFwiY2Fyb25cIjogXCLLh1wiLFxuXHRcIkNheWxleXNcIjogXCLihK1cIixcblx0XCJjY2Fwc1wiOiBcIuKpjVwiLFxuXHRcIkNjYXJvblwiOiBcIsSMXCIsXG5cdFwiY2Nhcm9uXCI6IFwixI1cIixcblx0XCJDY2VkaWxcIjogXCLDh1wiLFxuXHRcImNjZWRpbFwiOiBcIsOnXCIsXG5cdFwiQ2NpcmNcIjogXCLEiFwiLFxuXHRcImNjaXJjXCI6IFwixIlcIixcblx0XCJDY29uaW50XCI6IFwi4oiwXCIsXG5cdFwiY2N1cHNcIjogXCLiqYxcIixcblx0XCJjY3Vwc3NtXCI6IFwi4qmQXCIsXG5cdFwiQ2RvdFwiOiBcIsSKXCIsXG5cdFwiY2RvdFwiOiBcIsSLXCIsXG5cdFwiY2VkaWxcIjogXCLCuFwiLFxuXHRcIkNlZGlsbGFcIjogXCLCuFwiLFxuXHRcImNlbXB0eXZcIjogXCLiprJcIixcblx0XCJjZW50XCI6IFwiwqJcIixcblx0XCJjZW50ZXJkb3RcIjogXCLCt1wiLFxuXHRcIkNlbnRlckRvdFwiOiBcIsK3XCIsXG5cdFwiY2ZyXCI6IFwi8J2UoFwiLFxuXHRcIkNmclwiOiBcIuKErVwiLFxuXHRcIkNIY3lcIjogXCLQp1wiLFxuXHRcImNoY3lcIjogXCLRh1wiLFxuXHRcImNoZWNrXCI6IFwi4pyTXCIsXG5cdFwiY2hlY2ttYXJrXCI6IFwi4pyTXCIsXG5cdFwiQ2hpXCI6IFwizqdcIixcblx0XCJjaGlcIjogXCLPh1wiLFxuXHRcImNpcmNcIjogXCLLhlwiLFxuXHRcImNpcmNlcVwiOiBcIuKJl1wiLFxuXHRcImNpcmNsZWFycm93bGVmdFwiOiBcIuKGulwiLFxuXHRcImNpcmNsZWFycm93cmlnaHRcIjogXCLihrtcIixcblx0XCJjaXJjbGVkYXN0XCI6IFwi4oqbXCIsXG5cdFwiY2lyY2xlZGNpcmNcIjogXCLiippcIixcblx0XCJjaXJjbGVkZGFzaFwiOiBcIuKKnVwiLFxuXHRcIkNpcmNsZURvdFwiOiBcIuKKmVwiLFxuXHRcImNpcmNsZWRSXCI6IFwiwq5cIixcblx0XCJjaXJjbGVkU1wiOiBcIuKTiFwiLFxuXHRcIkNpcmNsZU1pbnVzXCI6IFwi4oqWXCIsXG5cdFwiQ2lyY2xlUGx1c1wiOiBcIuKKlVwiLFxuXHRcIkNpcmNsZVRpbWVzXCI6IFwi4oqXXCIsXG5cdFwiY2lyXCI6IFwi4peLXCIsXG5cdFwiY2lyRVwiOiBcIuKng1wiLFxuXHRcImNpcmVcIjogXCLiiZdcIixcblx0XCJjaXJmbmludFwiOiBcIuKokFwiLFxuXHRcImNpcm1pZFwiOiBcIuKrr1wiLFxuXHRcImNpcnNjaXJcIjogXCLip4JcIixcblx0XCJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjogXCLiiLJcIixcblx0XCJDbG9zZUN1cmx5RG91YmxlUXVvdGVcIjogXCLigJ1cIixcblx0XCJDbG9zZUN1cmx5UXVvdGVcIjogXCLigJlcIixcblx0XCJjbHVic1wiOiBcIuKZo1wiLFxuXHRcImNsdWJzdWl0XCI6IFwi4pmjXCIsXG5cdFwiY29sb25cIjogXCI6XCIsXG5cdFwiQ29sb25cIjogXCLiiLdcIixcblx0XCJDb2xvbmVcIjogXCLiqbRcIixcblx0XCJjb2xvbmVcIjogXCLiiZRcIixcblx0XCJjb2xvbmVxXCI6IFwi4omUXCIsXG5cdFwiY29tbWFcIjogXCIsXCIsXG5cdFwiY29tbWF0XCI6IFwiQFwiLFxuXHRcImNvbXBcIjogXCLiiIFcIixcblx0XCJjb21wZm5cIjogXCLiiJhcIixcblx0XCJjb21wbGVtZW50XCI6IFwi4oiBXCIsXG5cdFwiY29tcGxleGVzXCI6IFwi4oSCXCIsXG5cdFwiY29uZ1wiOiBcIuKJhVwiLFxuXHRcImNvbmdkb3RcIjogXCLiqa1cIixcblx0XCJDb25ncnVlbnRcIjogXCLiiaFcIixcblx0XCJjb25pbnRcIjogXCLiiK5cIixcblx0XCJDb25pbnRcIjogXCLiiK9cIixcblx0XCJDb250b3VySW50ZWdyYWxcIjogXCLiiK5cIixcblx0XCJjb3BmXCI6IFwi8J2VlFwiLFxuXHRcIkNvcGZcIjogXCLihIJcIixcblx0XCJjb3Byb2RcIjogXCLiiJBcIixcblx0XCJDb3Byb2R1Y3RcIjogXCLiiJBcIixcblx0XCJjb3B5XCI6IFwiwqlcIixcblx0XCJDT1BZXCI6IFwiwqlcIixcblx0XCJjb3B5c3JcIjogXCLihJdcIixcblx0XCJDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6IFwi4oizXCIsXG5cdFwiY3JhcnJcIjogXCLihrVcIixcblx0XCJjcm9zc1wiOiBcIuKcl1wiLFxuXHRcIkNyb3NzXCI6IFwi4qivXCIsXG5cdFwiQ3NjclwiOiBcIvCdkp5cIixcblx0XCJjc2NyXCI6IFwi8J2SuFwiLFxuXHRcImNzdWJcIjogXCLiq49cIixcblx0XCJjc3ViZVwiOiBcIuKrkVwiLFxuXHRcImNzdXBcIjogXCLiq5BcIixcblx0XCJjc3VwZVwiOiBcIuKrklwiLFxuXHRcImN0ZG90XCI6IFwi4ouvXCIsXG5cdFwiY3VkYXJybFwiOiBcIuKkuFwiLFxuXHRcImN1ZGFycnJcIjogXCLipLVcIixcblx0XCJjdWVwclwiOiBcIuKLnlwiLFxuXHRcImN1ZXNjXCI6IFwi4oufXCIsXG5cdFwiY3VsYXJyXCI6IFwi4oa2XCIsXG5cdFwiY3VsYXJycFwiOiBcIuKkvVwiLFxuXHRcImN1cGJyY2FwXCI6IFwi4qmIXCIsXG5cdFwiY3VwY2FwXCI6IFwi4qmGXCIsXG5cdFwiQ3VwQ2FwXCI6IFwi4omNXCIsXG5cdFwiY3VwXCI6IFwi4oiqXCIsXG5cdFwiQ3VwXCI6IFwi4ouTXCIsXG5cdFwiY3VwY3VwXCI6IFwi4qmKXCIsXG5cdFwiY3VwZG90XCI6IFwi4oqNXCIsXG5cdFwiY3Vwb3JcIjogXCLiqYVcIixcblx0XCJjdXBzXCI6IFwi4oiq77iAXCIsXG5cdFwiY3VyYXJyXCI6IFwi4oa3XCIsXG5cdFwiY3VyYXJybVwiOiBcIuKkvFwiLFxuXHRcImN1cmx5ZXFwcmVjXCI6IFwi4oueXCIsXG5cdFwiY3VybHllcXN1Y2NcIjogXCLii59cIixcblx0XCJjdXJseXZlZVwiOiBcIuKLjlwiLFxuXHRcImN1cmx5d2VkZ2VcIjogXCLii49cIixcblx0XCJjdXJyZW5cIjogXCLCpFwiLFxuXHRcImN1cnZlYXJyb3dsZWZ0XCI6IFwi4oa2XCIsXG5cdFwiY3VydmVhcnJvd3JpZ2h0XCI6IFwi4oa3XCIsXG5cdFwiY3V2ZWVcIjogXCLii45cIixcblx0XCJjdXdlZFwiOiBcIuKLj1wiLFxuXHRcImN3Y29uaW50XCI6IFwi4oiyXCIsXG5cdFwiY3dpbnRcIjogXCLiiLFcIixcblx0XCJjeWxjdHlcIjogXCLijK1cIixcblx0XCJkYWdnZXJcIjogXCLigKBcIixcblx0XCJEYWdnZXJcIjogXCLigKFcIixcblx0XCJkYWxldGhcIjogXCLihLhcIixcblx0XCJkYXJyXCI6IFwi4oaTXCIsXG5cdFwiRGFyclwiOiBcIuKGoVwiLFxuXHRcImRBcnJcIjogXCLih5NcIixcblx0XCJkYXNoXCI6IFwi4oCQXCIsXG5cdFwiRGFzaHZcIjogXCLiq6RcIixcblx0XCJkYXNodlwiOiBcIuKKo1wiLFxuXHRcImRia2Fyb3dcIjogXCLipI9cIixcblx0XCJkYmxhY1wiOiBcIsudXCIsXG5cdFwiRGNhcm9uXCI6IFwixI5cIixcblx0XCJkY2Fyb25cIjogXCLEj1wiLFxuXHRcIkRjeVwiOiBcItCUXCIsXG5cdFwiZGN5XCI6IFwi0LRcIixcblx0XCJkZGFnZ2VyXCI6IFwi4oChXCIsXG5cdFwiZGRhcnJcIjogXCLih4pcIixcblx0XCJERFwiOiBcIuKFhVwiLFxuXHRcImRkXCI6IFwi4oWGXCIsXG5cdFwiRERvdHJhaGRcIjogXCLipJFcIixcblx0XCJkZG90c2VxXCI6IFwi4qm3XCIsXG5cdFwiZGVnXCI6IFwiwrBcIixcblx0XCJEZWxcIjogXCLiiIdcIixcblx0XCJEZWx0YVwiOiBcIs6UXCIsXG5cdFwiZGVsdGFcIjogXCLOtFwiLFxuXHRcImRlbXB0eXZcIjogXCLiprFcIixcblx0XCJkZmlzaHRcIjogXCLipb9cIixcblx0XCJEZnJcIjogXCLwnZSHXCIsXG5cdFwiZGZyXCI6IFwi8J2UoVwiLFxuXHRcImRIYXJcIjogXCLipaVcIixcblx0XCJkaGFybFwiOiBcIuKHg1wiLFxuXHRcImRoYXJyXCI6IFwi4oeCXCIsXG5cdFwiRGlhY3JpdGljYWxBY3V0ZVwiOiBcIsK0XCIsXG5cdFwiRGlhY3JpdGljYWxEb3RcIjogXCLLmVwiLFxuXHRcIkRpYWNyaXRpY2FsRG91YmxlQWN1dGVcIjogXCLLnVwiLFxuXHRcIkRpYWNyaXRpY2FsR3JhdmVcIjogXCJgXCIsXG5cdFwiRGlhY3JpdGljYWxUaWxkZVwiOiBcIsucXCIsXG5cdFwiZGlhbVwiOiBcIuKLhFwiLFxuXHRcImRpYW1vbmRcIjogXCLii4RcIixcblx0XCJEaWFtb25kXCI6IFwi4ouEXCIsXG5cdFwiZGlhbW9uZHN1aXRcIjogXCLimaZcIixcblx0XCJkaWFtc1wiOiBcIuKZplwiLFxuXHRcImRpZVwiOiBcIsKoXCIsXG5cdFwiRGlmZmVyZW50aWFsRFwiOiBcIuKFhlwiLFxuXHRcImRpZ2FtbWFcIjogXCLPnVwiLFxuXHRcImRpc2luXCI6IFwi4ouyXCIsXG5cdFwiZGl2XCI6IFwiw7dcIixcblx0XCJkaXZpZGVcIjogXCLDt1wiLFxuXHRcImRpdmlkZW9udGltZXNcIjogXCLii4dcIixcblx0XCJkaXZvbnhcIjogXCLii4dcIixcblx0XCJESmN5XCI6IFwi0IJcIixcblx0XCJkamN5XCI6IFwi0ZJcIixcblx0XCJkbGNvcm5cIjogXCLijJ5cIixcblx0XCJkbGNyb3BcIjogXCLijI1cIixcblx0XCJkb2xsYXJcIjogXCIkXCIsXG5cdFwiRG9wZlwiOiBcIvCdlLtcIixcblx0XCJkb3BmXCI6IFwi8J2VlVwiLFxuXHRcIkRvdFwiOiBcIsKoXCIsXG5cdFwiZG90XCI6IFwiy5lcIixcblx0XCJEb3REb3RcIjogXCLig5xcIixcblx0XCJkb3RlcVwiOiBcIuKJkFwiLFxuXHRcImRvdGVxZG90XCI6IFwi4omRXCIsXG5cdFwiRG90RXF1YWxcIjogXCLiiZBcIixcblx0XCJkb3RtaW51c1wiOiBcIuKIuFwiLFxuXHRcImRvdHBsdXNcIjogXCLiiJRcIixcblx0XCJkb3RzcXVhcmVcIjogXCLiiqFcIixcblx0XCJkb3VibGViYXJ3ZWRnZVwiOiBcIuKMhlwiLFxuXHRcIkRvdWJsZUNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIr1wiLFxuXHRcIkRvdWJsZURvdFwiOiBcIsKoXCIsXG5cdFwiRG91YmxlRG93bkFycm93XCI6IFwi4oeTXCIsXG5cdFwiRG91YmxlTGVmdEFycm93XCI6IFwi4oeQXCIsXG5cdFwiRG91YmxlTGVmdFJpZ2h0QXJyb3dcIjogXCLih5RcIixcblx0XCJEb3VibGVMZWZ0VGVlXCI6IFwi4qukXCIsXG5cdFwiRG91YmxlTG9uZ0xlZnRBcnJvd1wiOiBcIuKfuFwiLFxuXHRcIkRvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvd1wiOiBcIuKfulwiLFxuXHRcIkRvdWJsZUxvbmdSaWdodEFycm93XCI6IFwi4p+5XCIsXG5cdFwiRG91YmxlUmlnaHRBcnJvd1wiOiBcIuKHklwiLFxuXHRcIkRvdWJsZVJpZ2h0VGVlXCI6IFwi4oqoXCIsXG5cdFwiRG91YmxlVXBBcnJvd1wiOiBcIuKHkVwiLFxuXHRcIkRvdWJsZVVwRG93bkFycm93XCI6IFwi4oeVXCIsXG5cdFwiRG91YmxlVmVydGljYWxCYXJcIjogXCLiiKVcIixcblx0XCJEb3duQXJyb3dCYXJcIjogXCLipJNcIixcblx0XCJkb3duYXJyb3dcIjogXCLihpNcIixcblx0XCJEb3duQXJyb3dcIjogXCLihpNcIixcblx0XCJEb3duYXJyb3dcIjogXCLih5NcIixcblx0XCJEb3duQXJyb3dVcEFycm93XCI6IFwi4oe1XCIsXG5cdFwiRG93bkJyZXZlXCI6IFwizJFcIixcblx0XCJkb3duZG93bmFycm93c1wiOiBcIuKHilwiLFxuXHRcImRvd25oYXJwb29ubGVmdFwiOiBcIuKHg1wiLFxuXHRcImRvd25oYXJwb29ucmlnaHRcIjogXCLih4JcIixcblx0XCJEb3duTGVmdFJpZ2h0VmVjdG9yXCI6IFwi4qWQXCIsXG5cdFwiRG93bkxlZnRUZWVWZWN0b3JcIjogXCLipZ5cIixcblx0XCJEb3duTGVmdFZlY3RvckJhclwiOiBcIuKlllwiLFxuXHRcIkRvd25MZWZ0VmVjdG9yXCI6IFwi4oa9XCIsXG5cdFwiRG93blJpZ2h0VGVlVmVjdG9yXCI6IFwi4qWfXCIsXG5cdFwiRG93blJpZ2h0VmVjdG9yQmFyXCI6IFwi4qWXXCIsXG5cdFwiRG93blJpZ2h0VmVjdG9yXCI6IFwi4oeBXCIsXG5cdFwiRG93blRlZUFycm93XCI6IFwi4oanXCIsXG5cdFwiRG93blRlZVwiOiBcIuKKpFwiLFxuXHRcImRyYmthcm93XCI6IFwi4qSQXCIsXG5cdFwiZHJjb3JuXCI6IFwi4oyfXCIsXG5cdFwiZHJjcm9wXCI6IFwi4oyMXCIsXG5cdFwiRHNjclwiOiBcIvCdkp9cIixcblx0XCJkc2NyXCI6IFwi8J2SuVwiLFxuXHRcIkRTY3lcIjogXCLQhVwiLFxuXHRcImRzY3lcIjogXCLRlVwiLFxuXHRcImRzb2xcIjogXCLip7ZcIixcblx0XCJEc3Ryb2tcIjogXCLEkFwiLFxuXHRcImRzdHJva1wiOiBcIsSRXCIsXG5cdFwiZHRkb3RcIjogXCLii7FcIixcblx0XCJkdHJpXCI6IFwi4pa/XCIsXG5cdFwiZHRyaWZcIjogXCLilr5cIixcblx0XCJkdWFyclwiOiBcIuKHtVwiLFxuXHRcImR1aGFyXCI6IFwi4qWvXCIsXG5cdFwiZHdhbmdsZVwiOiBcIuKmplwiLFxuXHRcIkRaY3lcIjogXCLQj1wiLFxuXHRcImR6Y3lcIjogXCLRn1wiLFxuXHRcImR6aWdyYXJyXCI6IFwi4p+/XCIsXG5cdFwiRWFjdXRlXCI6IFwiw4lcIixcblx0XCJlYWN1dGVcIjogXCLDqVwiLFxuXHRcImVhc3RlclwiOiBcIuKprlwiLFxuXHRcIkVjYXJvblwiOiBcIsSaXCIsXG5cdFwiZWNhcm9uXCI6IFwixJtcIixcblx0XCJFY2lyY1wiOiBcIsOKXCIsXG5cdFwiZWNpcmNcIjogXCLDqlwiLFxuXHRcImVjaXJcIjogXCLiiZZcIixcblx0XCJlY29sb25cIjogXCLiiZVcIixcblx0XCJFY3lcIjogXCLQrVwiLFxuXHRcImVjeVwiOiBcItGNXCIsXG5cdFwiZUREb3RcIjogXCLiqbdcIixcblx0XCJFZG90XCI6IFwixJZcIixcblx0XCJlZG90XCI6IFwixJdcIixcblx0XCJlRG90XCI6IFwi4omRXCIsXG5cdFwiZWVcIjogXCLihYdcIixcblx0XCJlZkRvdFwiOiBcIuKJklwiLFxuXHRcIkVmclwiOiBcIvCdlIhcIixcblx0XCJlZnJcIjogXCLwnZSiXCIsXG5cdFwiZWdcIjogXCLiqppcIixcblx0XCJFZ3JhdmVcIjogXCLDiFwiLFxuXHRcImVncmF2ZVwiOiBcIsOoXCIsXG5cdFwiZWdzXCI6IFwi4qqWXCIsXG5cdFwiZWdzZG90XCI6IFwi4qqYXCIsXG5cdFwiZWxcIjogXCLiqplcIixcblx0XCJFbGVtZW50XCI6IFwi4oiIXCIsXG5cdFwiZWxpbnRlcnNcIjogXCLij6dcIixcblx0XCJlbGxcIjogXCLihJNcIixcblx0XCJlbHNcIjogXCLiqpVcIixcblx0XCJlbHNkb3RcIjogXCLiqpdcIixcblx0XCJFbWFjclwiOiBcIsSSXCIsXG5cdFwiZW1hY3JcIjogXCLEk1wiLFxuXHRcImVtcHR5XCI6IFwi4oiFXCIsXG5cdFwiZW1wdHlzZXRcIjogXCLiiIVcIixcblx0XCJFbXB0eVNtYWxsU3F1YXJlXCI6IFwi4pe7XCIsXG5cdFwiZW1wdHl2XCI6IFwi4oiFXCIsXG5cdFwiRW1wdHlWZXJ5U21hbGxTcXVhcmVcIjogXCLilqtcIixcblx0XCJlbXNwMTNcIjogXCLigIRcIixcblx0XCJlbXNwMTRcIjogXCLigIVcIixcblx0XCJlbXNwXCI6IFwi4oCDXCIsXG5cdFwiRU5HXCI6IFwixYpcIixcblx0XCJlbmdcIjogXCLFi1wiLFxuXHRcImVuc3BcIjogXCLigIJcIixcblx0XCJFb2dvblwiOiBcIsSYXCIsXG5cdFwiZW9nb25cIjogXCLEmVwiLFxuXHRcIkVvcGZcIjogXCLwnZS8XCIsXG5cdFwiZW9wZlwiOiBcIvCdlZZcIixcblx0XCJlcGFyXCI6IFwi4ouVXCIsXG5cdFwiZXBhcnNsXCI6IFwi4qejXCIsXG5cdFwiZXBsdXNcIjogXCLiqbFcIixcblx0XCJlcHNpXCI6IFwizrVcIixcblx0XCJFcHNpbG9uXCI6IFwizpVcIixcblx0XCJlcHNpbG9uXCI6IFwizrVcIixcblx0XCJlcHNpdlwiOiBcIs+1XCIsXG5cdFwiZXFjaXJjXCI6IFwi4omWXCIsXG5cdFwiZXFjb2xvblwiOiBcIuKJlVwiLFxuXHRcImVxc2ltXCI6IFwi4omCXCIsXG5cdFwiZXFzbGFudGd0clwiOiBcIuKqllwiLFxuXHRcImVxc2xhbnRsZXNzXCI6IFwi4qqVXCIsXG5cdFwiRXF1YWxcIjogXCLiqbVcIixcblx0XCJlcXVhbHNcIjogXCI9XCIsXG5cdFwiRXF1YWxUaWxkZVwiOiBcIuKJglwiLFxuXHRcImVxdWVzdFwiOiBcIuKJn1wiLFxuXHRcIkVxdWlsaWJyaXVtXCI6IFwi4oeMXCIsXG5cdFwiZXF1aXZcIjogXCLiiaFcIixcblx0XCJlcXVpdkREXCI6IFwi4qm4XCIsXG5cdFwiZXF2cGFyc2xcIjogXCLip6VcIixcblx0XCJlcmFyclwiOiBcIuKlsVwiLFxuXHRcImVyRG90XCI6IFwi4omTXCIsXG5cdFwiZXNjclwiOiBcIuKEr1wiLFxuXHRcIkVzY3JcIjogXCLihLBcIixcblx0XCJlc2RvdFwiOiBcIuKJkFwiLFxuXHRcIkVzaW1cIjogXCLiqbNcIixcblx0XCJlc2ltXCI6IFwi4omCXCIsXG5cdFwiRXRhXCI6IFwizpdcIixcblx0XCJldGFcIjogXCLOt1wiLFxuXHRcIkVUSFwiOiBcIsOQXCIsXG5cdFwiZXRoXCI6IFwiw7BcIixcblx0XCJFdW1sXCI6IFwiw4tcIixcblx0XCJldW1sXCI6IFwiw6tcIixcblx0XCJldXJvXCI6IFwi4oKsXCIsXG5cdFwiZXhjbFwiOiBcIiFcIixcblx0XCJleGlzdFwiOiBcIuKIg1wiLFxuXHRcIkV4aXN0c1wiOiBcIuKIg1wiLFxuXHRcImV4cGVjdGF0aW9uXCI6IFwi4oSwXCIsXG5cdFwiZXhwb25lbnRpYWxlXCI6IFwi4oWHXCIsXG5cdFwiRXhwb25lbnRpYWxFXCI6IFwi4oWHXCIsXG5cdFwiZmFsbGluZ2RvdHNlcVwiOiBcIuKJklwiLFxuXHRcIkZjeVwiOiBcItCkXCIsXG5cdFwiZmN5XCI6IFwi0YRcIixcblx0XCJmZW1hbGVcIjogXCLimYBcIixcblx0XCJmZmlsaWdcIjogXCLvrINcIixcblx0XCJmZmxpZ1wiOiBcIu+sgFwiLFxuXHRcImZmbGxpZ1wiOiBcIu+shFwiLFxuXHRcIkZmclwiOiBcIvCdlIlcIixcblx0XCJmZnJcIjogXCLwnZSjXCIsXG5cdFwiZmlsaWdcIjogXCLvrIFcIixcblx0XCJGaWxsZWRTbWFsbFNxdWFyZVwiOiBcIuKXvFwiLFxuXHRcIkZpbGxlZFZlcnlTbWFsbFNxdWFyZVwiOiBcIuKWqlwiLFxuXHRcImZqbGlnXCI6IFwiZmpcIixcblx0XCJmbGF0XCI6IFwi4pmtXCIsXG5cdFwiZmxsaWdcIjogXCLvrIJcIixcblx0XCJmbHRuc1wiOiBcIuKWsVwiLFxuXHRcImZub2ZcIjogXCLGklwiLFxuXHRcIkZvcGZcIjogXCLwnZS9XCIsXG5cdFwiZm9wZlwiOiBcIvCdlZdcIixcblx0XCJmb3JhbGxcIjogXCLiiIBcIixcblx0XCJGb3JBbGxcIjogXCLiiIBcIixcblx0XCJmb3JrXCI6IFwi4ouUXCIsXG5cdFwiZm9ya3ZcIjogXCLiq5lcIixcblx0XCJGb3VyaWVydHJmXCI6IFwi4oSxXCIsXG5cdFwiZnBhcnRpbnRcIjogXCLiqI1cIixcblx0XCJmcmFjMTJcIjogXCLCvVwiLFxuXHRcImZyYWMxM1wiOiBcIuKFk1wiLFxuXHRcImZyYWMxNFwiOiBcIsK8XCIsXG5cdFwiZnJhYzE1XCI6IFwi4oWVXCIsXG5cdFwiZnJhYzE2XCI6IFwi4oWZXCIsXG5cdFwiZnJhYzE4XCI6IFwi4oWbXCIsXG5cdFwiZnJhYzIzXCI6IFwi4oWUXCIsXG5cdFwiZnJhYzI1XCI6IFwi4oWWXCIsXG5cdFwiZnJhYzM0XCI6IFwiwr5cIixcblx0XCJmcmFjMzVcIjogXCLihZdcIixcblx0XCJmcmFjMzhcIjogXCLihZxcIixcblx0XCJmcmFjNDVcIjogXCLihZhcIixcblx0XCJmcmFjNTZcIjogXCLihZpcIixcblx0XCJmcmFjNThcIjogXCLihZ1cIixcblx0XCJmcmFjNzhcIjogXCLihZ5cIixcblx0XCJmcmFzbFwiOiBcIuKBhFwiLFxuXHRcImZyb3duXCI6IFwi4oyiXCIsXG5cdFwiZnNjclwiOiBcIvCdkrtcIixcblx0XCJGc2NyXCI6IFwi4oSxXCIsXG5cdFwiZ2FjdXRlXCI6IFwix7VcIixcblx0XCJHYW1tYVwiOiBcIs6TXCIsXG5cdFwiZ2FtbWFcIjogXCLOs1wiLFxuXHRcIkdhbW1hZFwiOiBcIs+cXCIsXG5cdFwiZ2FtbWFkXCI6IFwiz51cIixcblx0XCJnYXBcIjogXCLiqoZcIixcblx0XCJHYnJldmVcIjogXCLEnlwiLFxuXHRcImdicmV2ZVwiOiBcIsSfXCIsXG5cdFwiR2NlZGlsXCI6IFwixKJcIixcblx0XCJHY2lyY1wiOiBcIsScXCIsXG5cdFwiZ2NpcmNcIjogXCLEnVwiLFxuXHRcIkdjeVwiOiBcItCTXCIsXG5cdFwiZ2N5XCI6IFwi0LNcIixcblx0XCJHZG90XCI6IFwixKBcIixcblx0XCJnZG90XCI6IFwixKFcIixcblx0XCJnZVwiOiBcIuKJpVwiLFxuXHRcImdFXCI6IFwi4omnXCIsXG5cdFwiZ0VsXCI6IFwi4qqMXCIsXG5cdFwiZ2VsXCI6IFwi4oubXCIsXG5cdFwiZ2VxXCI6IFwi4omlXCIsXG5cdFwiZ2VxcVwiOiBcIuKJp1wiLFxuXHRcImdlcXNsYW50XCI6IFwi4qm+XCIsXG5cdFwiZ2VzY2NcIjogXCLiqqlcIixcblx0XCJnZXNcIjogXCLiqb5cIixcblx0XCJnZXNkb3RcIjogXCLiqoBcIixcblx0XCJnZXNkb3RvXCI6IFwi4qqCXCIsXG5cdFwiZ2VzZG90b2xcIjogXCLiqoRcIixcblx0XCJnZXNsXCI6IFwi4oub77iAXCIsXG5cdFwiZ2VzbGVzXCI6IFwi4qqUXCIsXG5cdFwiR2ZyXCI6IFwi8J2UilwiLFxuXHRcImdmclwiOiBcIvCdlKRcIixcblx0XCJnZ1wiOiBcIuKJq1wiLFxuXHRcIkdnXCI6IFwi4ouZXCIsXG5cdFwiZ2dnXCI6IFwi4ouZXCIsXG5cdFwiZ2ltZWxcIjogXCLihLdcIixcblx0XCJHSmN5XCI6IFwi0INcIixcblx0XCJnamN5XCI6IFwi0ZNcIixcblx0XCJnbGFcIjogXCLiqqVcIixcblx0XCJnbFwiOiBcIuKJt1wiLFxuXHRcImdsRVwiOiBcIuKqklwiLFxuXHRcImdsalwiOiBcIuKqpFwiLFxuXHRcImduYXBcIjogXCLiqopcIixcblx0XCJnbmFwcHJveFwiOiBcIuKqilwiLFxuXHRcImduZVwiOiBcIuKqiFwiLFxuXHRcImduRVwiOiBcIuKJqVwiLFxuXHRcImduZXFcIjogXCLiqohcIixcblx0XCJnbmVxcVwiOiBcIuKJqVwiLFxuXHRcImduc2ltXCI6IFwi4ounXCIsXG5cdFwiR29wZlwiOiBcIvCdlL5cIixcblx0XCJnb3BmXCI6IFwi8J2VmFwiLFxuXHRcImdyYXZlXCI6IFwiYFwiLFxuXHRcIkdyZWF0ZXJFcXVhbFwiOiBcIuKJpVwiLFxuXHRcIkdyZWF0ZXJFcXVhbExlc3NcIjogXCLii5tcIixcblx0XCJHcmVhdGVyRnVsbEVxdWFsXCI6IFwi4omnXCIsXG5cdFwiR3JlYXRlckdyZWF0ZXJcIjogXCLiqqJcIixcblx0XCJHcmVhdGVyTGVzc1wiOiBcIuKJt1wiLFxuXHRcIkdyZWF0ZXJTbGFudEVxdWFsXCI6IFwi4qm+XCIsXG5cdFwiR3JlYXRlclRpbGRlXCI6IFwi4omzXCIsXG5cdFwiR3NjclwiOiBcIvCdkqJcIixcblx0XCJnc2NyXCI6IFwi4oSKXCIsXG5cdFwiZ3NpbVwiOiBcIuKJs1wiLFxuXHRcImdzaW1lXCI6IFwi4qqOXCIsXG5cdFwiZ3NpbWxcIjogXCLiqpBcIixcblx0XCJndGNjXCI6IFwi4qqnXCIsXG5cdFwiZ3RjaXJcIjogXCLiqbpcIixcblx0XCJndFwiOiBcIj5cIixcblx0XCJHVFwiOiBcIj5cIixcblx0XCJHdFwiOiBcIuKJq1wiLFxuXHRcImd0ZG90XCI6IFwi4ouXXCIsXG5cdFwiZ3RsUGFyXCI6IFwi4qaVXCIsXG5cdFwiZ3RxdWVzdFwiOiBcIuKpvFwiLFxuXHRcImd0cmFwcHJveFwiOiBcIuKqhlwiLFxuXHRcImd0cmFyclwiOiBcIuKluFwiLFxuXHRcImd0cmRvdFwiOiBcIuKLl1wiLFxuXHRcImd0cmVxbGVzc1wiOiBcIuKLm1wiLFxuXHRcImd0cmVxcWxlc3NcIjogXCLiqoxcIixcblx0XCJndHJsZXNzXCI6IFwi4om3XCIsXG5cdFwiZ3Ryc2ltXCI6IFwi4omzXCIsXG5cdFwiZ3ZlcnRuZXFxXCI6IFwi4omp77iAXCIsXG5cdFwiZ3ZuRVwiOiBcIuKJqe+4gFwiLFxuXHRcIkhhY2VrXCI6IFwiy4dcIixcblx0XCJoYWlyc3BcIjogXCLigIpcIixcblx0XCJoYWxmXCI6IFwiwr1cIixcblx0XCJoYW1pbHRcIjogXCLihItcIixcblx0XCJIQVJEY3lcIjogXCLQqlwiLFxuXHRcImhhcmRjeVwiOiBcItGKXCIsXG5cdFwiaGFycmNpclwiOiBcIuKliFwiLFxuXHRcImhhcnJcIjogXCLihpRcIixcblx0XCJoQXJyXCI6IFwi4oeUXCIsXG5cdFwiaGFycndcIjogXCLihq1cIixcblx0XCJIYXRcIjogXCJeXCIsXG5cdFwiaGJhclwiOiBcIuKEj1wiLFxuXHRcIkhjaXJjXCI6IFwixKRcIixcblx0XCJoY2lyY1wiOiBcIsSlXCIsXG5cdFwiaGVhcnRzXCI6IFwi4pmlXCIsXG5cdFwiaGVhcnRzdWl0XCI6IFwi4pmlXCIsXG5cdFwiaGVsbGlwXCI6IFwi4oCmXCIsXG5cdFwiaGVyY29uXCI6IFwi4oq5XCIsXG5cdFwiaGZyXCI6IFwi8J2UpVwiLFxuXHRcIkhmclwiOiBcIuKEjFwiLFxuXHRcIkhpbGJlcnRTcGFjZVwiOiBcIuKEi1wiLFxuXHRcImhrc2Vhcm93XCI6IFwi4qSlXCIsXG5cdFwiaGtzd2Fyb3dcIjogXCLipKZcIixcblx0XCJob2FyclwiOiBcIuKHv1wiLFxuXHRcImhvbXRodFwiOiBcIuKIu1wiLFxuXHRcImhvb2tsZWZ0YXJyb3dcIjogXCLihqlcIixcblx0XCJob29rcmlnaHRhcnJvd1wiOiBcIuKGqlwiLFxuXHRcImhvcGZcIjogXCLwnZWZXCIsXG5cdFwiSG9wZlwiOiBcIuKEjVwiLFxuXHRcImhvcmJhclwiOiBcIuKAlVwiLFxuXHRcIkhvcml6b250YWxMaW5lXCI6IFwi4pSAXCIsXG5cdFwiaHNjclwiOiBcIvCdkr1cIixcblx0XCJIc2NyXCI6IFwi4oSLXCIsXG5cdFwiaHNsYXNoXCI6IFwi4oSPXCIsXG5cdFwiSHN0cm9rXCI6IFwixKZcIixcblx0XCJoc3Ryb2tcIjogXCLEp1wiLFxuXHRcIkh1bXBEb3duSHVtcFwiOiBcIuKJjlwiLFxuXHRcIkh1bXBFcXVhbFwiOiBcIuKJj1wiLFxuXHRcImh5YnVsbFwiOiBcIuKBg1wiLFxuXHRcImh5cGhlblwiOiBcIuKAkFwiLFxuXHRcIklhY3V0ZVwiOiBcIsONXCIsXG5cdFwiaWFjdXRlXCI6IFwiw61cIixcblx0XCJpY1wiOiBcIuKBo1wiLFxuXHRcIkljaXJjXCI6IFwiw45cIixcblx0XCJpY2lyY1wiOiBcIsOuXCIsXG5cdFwiSWN5XCI6IFwi0JhcIixcblx0XCJpY3lcIjogXCLQuFwiLFxuXHRcIklkb3RcIjogXCLEsFwiLFxuXHRcIklFY3lcIjogXCLQlVwiLFxuXHRcImllY3lcIjogXCLQtVwiLFxuXHRcImlleGNsXCI6IFwiwqFcIixcblx0XCJpZmZcIjogXCLih5RcIixcblx0XCJpZnJcIjogXCLwnZSmXCIsXG5cdFwiSWZyXCI6IFwi4oSRXCIsXG5cdFwiSWdyYXZlXCI6IFwiw4xcIixcblx0XCJpZ3JhdmVcIjogXCLDrFwiLFxuXHRcImlpXCI6IFwi4oWIXCIsXG5cdFwiaWlpaW50XCI6IFwi4qiMXCIsXG5cdFwiaWlpbnRcIjogXCLiiK1cIixcblx0XCJpaW5maW5cIjogXCLip5xcIixcblx0XCJpaW90YVwiOiBcIuKEqVwiLFxuXHRcIklKbGlnXCI6IFwixLJcIixcblx0XCJpamxpZ1wiOiBcIsSzXCIsXG5cdFwiSW1hY3JcIjogXCLEqlwiLFxuXHRcImltYWNyXCI6IFwixKtcIixcblx0XCJpbWFnZVwiOiBcIuKEkVwiLFxuXHRcIkltYWdpbmFyeUlcIjogXCLihYhcIixcblx0XCJpbWFnbGluZVwiOiBcIuKEkFwiLFxuXHRcImltYWdwYXJ0XCI6IFwi4oSRXCIsXG5cdFwiaW1hdGhcIjogXCLEsVwiLFxuXHRcIkltXCI6IFwi4oSRXCIsXG5cdFwiaW1vZlwiOiBcIuKKt1wiLFxuXHRcImltcGVkXCI6IFwixrVcIixcblx0XCJJbXBsaWVzXCI6IFwi4oeSXCIsXG5cdFwiaW5jYXJlXCI6IFwi4oSFXCIsXG5cdFwiaW5cIjogXCLiiIhcIixcblx0XCJpbmZpblwiOiBcIuKInlwiLFxuXHRcImluZmludGllXCI6IFwi4qedXCIsXG5cdFwiaW5vZG90XCI6IFwixLFcIixcblx0XCJpbnRjYWxcIjogXCLiirpcIixcblx0XCJpbnRcIjogXCLiiKtcIixcblx0XCJJbnRcIjogXCLiiKxcIixcblx0XCJpbnRlZ2Vyc1wiOiBcIuKEpFwiLFxuXHRcIkludGVncmFsXCI6IFwi4oirXCIsXG5cdFwiaW50ZXJjYWxcIjogXCLiirpcIixcblx0XCJJbnRlcnNlY3Rpb25cIjogXCLii4JcIixcblx0XCJpbnRsYXJoa1wiOiBcIuKol1wiLFxuXHRcImludHByb2RcIjogXCLiqLxcIixcblx0XCJJbnZpc2libGVDb21tYVwiOiBcIuKBo1wiLFxuXHRcIkludmlzaWJsZVRpbWVzXCI6IFwi4oGiXCIsXG5cdFwiSU9jeVwiOiBcItCBXCIsXG5cdFwiaW9jeVwiOiBcItGRXCIsXG5cdFwiSW9nb25cIjogXCLErlwiLFxuXHRcImlvZ29uXCI6IFwixK9cIixcblx0XCJJb3BmXCI6IFwi8J2VgFwiLFxuXHRcImlvcGZcIjogXCLwnZWaXCIsXG5cdFwiSW90YVwiOiBcIs6ZXCIsXG5cdFwiaW90YVwiOiBcIs65XCIsXG5cdFwiaXByb2RcIjogXCLiqLxcIixcblx0XCJpcXVlc3RcIjogXCLCv1wiLFxuXHRcImlzY3JcIjogXCLwnZK+XCIsXG5cdFwiSXNjclwiOiBcIuKEkFwiLFxuXHRcImlzaW5cIjogXCLiiIhcIixcblx0XCJpc2luZG90XCI6IFwi4ou1XCIsXG5cdFwiaXNpbkVcIjogXCLii7lcIixcblx0XCJpc2luc1wiOiBcIuKLtFwiLFxuXHRcImlzaW5zdlwiOiBcIuKLs1wiLFxuXHRcImlzaW52XCI6IFwi4oiIXCIsXG5cdFwiaXRcIjogXCLigaJcIixcblx0XCJJdGlsZGVcIjogXCLEqFwiLFxuXHRcIml0aWxkZVwiOiBcIsSpXCIsXG5cdFwiSXVrY3lcIjogXCLQhlwiLFxuXHRcIml1a2N5XCI6IFwi0ZZcIixcblx0XCJJdW1sXCI6IFwiw49cIixcblx0XCJpdW1sXCI6IFwiw69cIixcblx0XCJKY2lyY1wiOiBcIsS0XCIsXG5cdFwiamNpcmNcIjogXCLEtVwiLFxuXHRcIkpjeVwiOiBcItCZXCIsXG5cdFwiamN5XCI6IFwi0LlcIixcblx0XCJKZnJcIjogXCLwnZSNXCIsXG5cdFwiamZyXCI6IFwi8J2Up1wiLFxuXHRcImptYXRoXCI6IFwiyLdcIixcblx0XCJKb3BmXCI6IFwi8J2VgVwiLFxuXHRcImpvcGZcIjogXCLwnZWbXCIsXG5cdFwiSnNjclwiOiBcIvCdkqVcIixcblx0XCJqc2NyXCI6IFwi8J2Sv1wiLFxuXHRcIkpzZXJjeVwiOiBcItCIXCIsXG5cdFwianNlcmN5XCI6IFwi0ZhcIixcblx0XCJKdWtjeVwiOiBcItCEXCIsXG5cdFwianVrY3lcIjogXCLRlFwiLFxuXHRcIkthcHBhXCI6IFwizppcIixcblx0XCJrYXBwYVwiOiBcIs66XCIsXG5cdFwia2FwcGF2XCI6IFwiz7BcIixcblx0XCJLY2VkaWxcIjogXCLEtlwiLFxuXHRcImtjZWRpbFwiOiBcIsS3XCIsXG5cdFwiS2N5XCI6IFwi0JpcIixcblx0XCJrY3lcIjogXCLQulwiLFxuXHRcIktmclwiOiBcIvCdlI5cIixcblx0XCJrZnJcIjogXCLwnZSoXCIsXG5cdFwia2dyZWVuXCI6IFwixLhcIixcblx0XCJLSGN5XCI6IFwi0KVcIixcblx0XCJraGN5XCI6IFwi0YVcIixcblx0XCJLSmN5XCI6IFwi0IxcIixcblx0XCJramN5XCI6IFwi0ZxcIixcblx0XCJLb3BmXCI6IFwi8J2VglwiLFxuXHRcImtvcGZcIjogXCLwnZWcXCIsXG5cdFwiS3NjclwiOiBcIvCdkqZcIixcblx0XCJrc2NyXCI6IFwi8J2TgFwiLFxuXHRcImxBYXJyXCI6IFwi4oeaXCIsXG5cdFwiTGFjdXRlXCI6IFwixLlcIixcblx0XCJsYWN1dGVcIjogXCLEulwiLFxuXHRcImxhZW1wdHl2XCI6IFwi4qa0XCIsXG5cdFwibGFncmFuXCI6IFwi4oSSXCIsXG5cdFwiTGFtYmRhXCI6IFwizptcIixcblx0XCJsYW1iZGFcIjogXCLOu1wiLFxuXHRcImxhbmdcIjogXCLin6hcIixcblx0XCJMYW5nXCI6IFwi4p+qXCIsXG5cdFwibGFuZ2RcIjogXCLippFcIixcblx0XCJsYW5nbGVcIjogXCLin6hcIixcblx0XCJsYXBcIjogXCLiqoVcIixcblx0XCJMYXBsYWNldHJmXCI6IFwi4oSSXCIsXG5cdFwibGFxdW9cIjogXCLCq1wiLFxuXHRcImxhcnJiXCI6IFwi4oekXCIsXG5cdFwibGFycmJmc1wiOiBcIuKkn1wiLFxuXHRcImxhcnJcIjogXCLihpBcIixcblx0XCJMYXJyXCI6IFwi4oaeXCIsXG5cdFwibEFyclwiOiBcIuKHkFwiLFxuXHRcImxhcnJmc1wiOiBcIuKknVwiLFxuXHRcImxhcnJoa1wiOiBcIuKGqVwiLFxuXHRcImxhcnJscFwiOiBcIuKGq1wiLFxuXHRcImxhcnJwbFwiOiBcIuKkuVwiLFxuXHRcImxhcnJzaW1cIjogXCLipbNcIixcblx0XCJsYXJydGxcIjogXCLihqJcIixcblx0XCJsYXRhaWxcIjogXCLipJlcIixcblx0XCJsQXRhaWxcIjogXCLipJtcIixcblx0XCJsYXRcIjogXCLiqqtcIixcblx0XCJsYXRlXCI6IFwi4qqtXCIsXG5cdFwibGF0ZXNcIjogXCLiqq3vuIBcIixcblx0XCJsYmFyclwiOiBcIuKkjFwiLFxuXHRcImxCYXJyXCI6IFwi4qSOXCIsXG5cdFwibGJicmtcIjogXCLinbJcIixcblx0XCJsYnJhY2VcIjogXCJ7XCIsXG5cdFwibGJyYWNrXCI6IFwiW1wiLFxuXHRcImxicmtlXCI6IFwi4qaLXCIsXG5cdFwibGJya3NsZFwiOiBcIuKmj1wiLFxuXHRcImxicmtzbHVcIjogXCLipo1cIixcblx0XCJMY2Fyb25cIjogXCLEvVwiLFxuXHRcImxjYXJvblwiOiBcIsS+XCIsXG5cdFwiTGNlZGlsXCI6IFwixLtcIixcblx0XCJsY2VkaWxcIjogXCLEvFwiLFxuXHRcImxjZWlsXCI6IFwi4oyIXCIsXG5cdFwibGN1YlwiOiBcIntcIixcblx0XCJMY3lcIjogXCLQm1wiLFxuXHRcImxjeVwiOiBcItC7XCIsXG5cdFwibGRjYVwiOiBcIuKktlwiLFxuXHRcImxkcXVvXCI6IFwi4oCcXCIsXG5cdFwibGRxdW9yXCI6IFwi4oCeXCIsXG5cdFwibGRyZGhhclwiOiBcIuKlp1wiLFxuXHRcImxkcnVzaGFyXCI6IFwi4qWLXCIsXG5cdFwibGRzaFwiOiBcIuKGslwiLFxuXHRcImxlXCI6IFwi4omkXCIsXG5cdFwibEVcIjogXCLiiaZcIixcblx0XCJMZWZ0QW5nbGVCcmFja2V0XCI6IFwi4p+oXCIsXG5cdFwiTGVmdEFycm93QmFyXCI6IFwi4oekXCIsXG5cdFwibGVmdGFycm93XCI6IFwi4oaQXCIsXG5cdFwiTGVmdEFycm93XCI6IFwi4oaQXCIsXG5cdFwiTGVmdGFycm93XCI6IFwi4oeQXCIsXG5cdFwiTGVmdEFycm93UmlnaHRBcnJvd1wiOiBcIuKHhlwiLFxuXHRcImxlZnRhcnJvd3RhaWxcIjogXCLihqJcIixcblx0XCJMZWZ0Q2VpbGluZ1wiOiBcIuKMiFwiLFxuXHRcIkxlZnREb3VibGVCcmFja2V0XCI6IFwi4p+mXCIsXG5cdFwiTGVmdERvd25UZWVWZWN0b3JcIjogXCLipaFcIixcblx0XCJMZWZ0RG93blZlY3RvckJhclwiOiBcIuKlmVwiLFxuXHRcIkxlZnREb3duVmVjdG9yXCI6IFwi4oeDXCIsXG5cdFwiTGVmdEZsb29yXCI6IFwi4oyKXCIsXG5cdFwibGVmdGhhcnBvb25kb3duXCI6IFwi4oa9XCIsXG5cdFwibGVmdGhhcnBvb251cFwiOiBcIuKGvFwiLFxuXHRcImxlZnRsZWZ0YXJyb3dzXCI6IFwi4oeHXCIsXG5cdFwibGVmdHJpZ2h0YXJyb3dcIjogXCLihpRcIixcblx0XCJMZWZ0UmlnaHRBcnJvd1wiOiBcIuKGlFwiLFxuXHRcIkxlZnRyaWdodGFycm93XCI6IFwi4oeUXCIsXG5cdFwibGVmdHJpZ2h0YXJyb3dzXCI6IFwi4oeGXCIsXG5cdFwibGVmdHJpZ2h0aGFycG9vbnNcIjogXCLih4tcIixcblx0XCJsZWZ0cmlnaHRzcXVpZ2Fycm93XCI6IFwi4oatXCIsXG5cdFwiTGVmdFJpZ2h0VmVjdG9yXCI6IFwi4qWOXCIsXG5cdFwiTGVmdFRlZUFycm93XCI6IFwi4oakXCIsXG5cdFwiTGVmdFRlZVwiOiBcIuKKo1wiLFxuXHRcIkxlZnRUZWVWZWN0b3JcIjogXCLipZpcIixcblx0XCJsZWZ0dGhyZWV0aW1lc1wiOiBcIuKLi1wiLFxuXHRcIkxlZnRUcmlhbmdsZUJhclwiOiBcIuKnj1wiLFxuXHRcIkxlZnRUcmlhbmdsZVwiOiBcIuKKslwiLFxuXHRcIkxlZnRUcmlhbmdsZUVxdWFsXCI6IFwi4oq0XCIsXG5cdFwiTGVmdFVwRG93blZlY3RvclwiOiBcIuKlkVwiLFxuXHRcIkxlZnRVcFRlZVZlY3RvclwiOiBcIuKloFwiLFxuXHRcIkxlZnRVcFZlY3RvckJhclwiOiBcIuKlmFwiLFxuXHRcIkxlZnRVcFZlY3RvclwiOiBcIuKGv1wiLFxuXHRcIkxlZnRWZWN0b3JCYXJcIjogXCLipZJcIixcblx0XCJMZWZ0VmVjdG9yXCI6IFwi4oa8XCIsXG5cdFwibEVnXCI6IFwi4qqLXCIsXG5cdFwibGVnXCI6IFwi4ouaXCIsXG5cdFwibGVxXCI6IFwi4omkXCIsXG5cdFwibGVxcVwiOiBcIuKJplwiLFxuXHRcImxlcXNsYW50XCI6IFwi4qm9XCIsXG5cdFwibGVzY2NcIjogXCLiqqhcIixcblx0XCJsZXNcIjogXCLiqb1cIixcblx0XCJsZXNkb3RcIjogXCLiqb9cIixcblx0XCJsZXNkb3RvXCI6IFwi4qqBXCIsXG5cdFwibGVzZG90b3JcIjogXCLiqoNcIixcblx0XCJsZXNnXCI6IFwi4oua77iAXCIsXG5cdFwibGVzZ2VzXCI6IFwi4qqTXCIsXG5cdFwibGVzc2FwcHJveFwiOiBcIuKqhVwiLFxuXHRcImxlc3Nkb3RcIjogXCLii5ZcIixcblx0XCJsZXNzZXFndHJcIjogXCLii5pcIixcblx0XCJsZXNzZXFxZ3RyXCI6IFwi4qqLXCIsXG5cdFwiTGVzc0VxdWFsR3JlYXRlclwiOiBcIuKLmlwiLFxuXHRcIkxlc3NGdWxsRXF1YWxcIjogXCLiiaZcIixcblx0XCJMZXNzR3JlYXRlclwiOiBcIuKJtlwiLFxuXHRcImxlc3NndHJcIjogXCLiibZcIixcblx0XCJMZXNzTGVzc1wiOiBcIuKqoVwiLFxuXHRcImxlc3NzaW1cIjogXCLiibJcIixcblx0XCJMZXNzU2xhbnRFcXVhbFwiOiBcIuKpvVwiLFxuXHRcIkxlc3NUaWxkZVwiOiBcIuKJslwiLFxuXHRcImxmaXNodFwiOiBcIuKlvFwiLFxuXHRcImxmbG9vclwiOiBcIuKMilwiLFxuXHRcIkxmclwiOiBcIvCdlI9cIixcblx0XCJsZnJcIjogXCLwnZSpXCIsXG5cdFwibGdcIjogXCLiibZcIixcblx0XCJsZ0VcIjogXCLiqpFcIixcblx0XCJsSGFyXCI6IFwi4qWiXCIsXG5cdFwibGhhcmRcIjogXCLihr1cIixcblx0XCJsaGFydVwiOiBcIuKGvFwiLFxuXHRcImxoYXJ1bFwiOiBcIuKlqlwiLFxuXHRcImxoYmxrXCI6IFwi4paEXCIsXG5cdFwiTEpjeVwiOiBcItCJXCIsXG5cdFwibGpjeVwiOiBcItGZXCIsXG5cdFwibGxhcnJcIjogXCLih4dcIixcblx0XCJsbFwiOiBcIuKJqlwiLFxuXHRcIkxsXCI6IFwi4ouYXCIsXG5cdFwibGxjb3JuZXJcIjogXCLijJ5cIixcblx0XCJMbGVmdGFycm93XCI6IFwi4oeaXCIsXG5cdFwibGxoYXJkXCI6IFwi4qWrXCIsXG5cdFwibGx0cmlcIjogXCLil7pcIixcblx0XCJMbWlkb3RcIjogXCLEv1wiLFxuXHRcImxtaWRvdFwiOiBcIsWAXCIsXG5cdFwibG1vdXN0YWNoZVwiOiBcIuKOsFwiLFxuXHRcImxtb3VzdFwiOiBcIuKOsFwiLFxuXHRcImxuYXBcIjogXCLiqolcIixcblx0XCJsbmFwcHJveFwiOiBcIuKqiVwiLFxuXHRcImxuZVwiOiBcIuKqh1wiLFxuXHRcImxuRVwiOiBcIuKJqFwiLFxuXHRcImxuZXFcIjogXCLiqodcIixcblx0XCJsbmVxcVwiOiBcIuKJqFwiLFxuXHRcImxuc2ltXCI6IFwi4oumXCIsXG5cdFwibG9hbmdcIjogXCLin6xcIixcblx0XCJsb2FyclwiOiBcIuKHvVwiLFxuXHRcImxvYnJrXCI6IFwi4p+mXCIsXG5cdFwibG9uZ2xlZnRhcnJvd1wiOiBcIuKftVwiLFxuXHRcIkxvbmdMZWZ0QXJyb3dcIjogXCLin7VcIixcblx0XCJMb25nbGVmdGFycm93XCI6IFwi4p+4XCIsXG5cdFwibG9uZ2xlZnRyaWdodGFycm93XCI6IFwi4p+3XCIsXG5cdFwiTG9uZ0xlZnRSaWdodEFycm93XCI6IFwi4p+3XCIsXG5cdFwiTG9uZ2xlZnRyaWdodGFycm93XCI6IFwi4p+6XCIsXG5cdFwibG9uZ21hcHN0b1wiOiBcIuKfvFwiLFxuXHRcImxvbmdyaWdodGFycm93XCI6IFwi4p+2XCIsXG5cdFwiTG9uZ1JpZ2h0QXJyb3dcIjogXCLin7ZcIixcblx0XCJMb25ncmlnaHRhcnJvd1wiOiBcIuKfuVwiLFxuXHRcImxvb3BhcnJvd2xlZnRcIjogXCLihqtcIixcblx0XCJsb29wYXJyb3dyaWdodFwiOiBcIuKGrFwiLFxuXHRcImxvcGFyXCI6IFwi4qaFXCIsXG5cdFwiTG9wZlwiOiBcIvCdlYNcIixcblx0XCJsb3BmXCI6IFwi8J2VnVwiLFxuXHRcImxvcGx1c1wiOiBcIuKorVwiLFxuXHRcImxvdGltZXNcIjogXCLiqLRcIixcblx0XCJsb3dhc3RcIjogXCLiiJdcIixcblx0XCJsb3diYXJcIjogXCJfXCIsXG5cdFwiTG93ZXJMZWZ0QXJyb3dcIjogXCLihplcIixcblx0XCJMb3dlclJpZ2h0QXJyb3dcIjogXCLihphcIixcblx0XCJsb3pcIjogXCLil4pcIixcblx0XCJsb3plbmdlXCI6IFwi4peKXCIsXG5cdFwibG96ZlwiOiBcIuKnq1wiLFxuXHRcImxwYXJcIjogXCIoXCIsXG5cdFwibHBhcmx0XCI6IFwi4qaTXCIsXG5cdFwibHJhcnJcIjogXCLih4ZcIixcblx0XCJscmNvcm5lclwiOiBcIuKMn1wiLFxuXHRcImxyaGFyXCI6IFwi4oeLXCIsXG5cdFwibHJoYXJkXCI6IFwi4qWtXCIsXG5cdFwibHJtXCI6IFwi4oCOXCIsXG5cdFwibHJ0cmlcIjogXCLiir9cIixcblx0XCJsc2FxdW9cIjogXCLigLlcIixcblx0XCJsc2NyXCI6IFwi8J2TgVwiLFxuXHRcIkxzY3JcIjogXCLihJJcIixcblx0XCJsc2hcIjogXCLihrBcIixcblx0XCJMc2hcIjogXCLihrBcIixcblx0XCJsc2ltXCI6IFwi4omyXCIsXG5cdFwibHNpbWVcIjogXCLiqo1cIixcblx0XCJsc2ltZ1wiOiBcIuKqj1wiLFxuXHRcImxzcWJcIjogXCJbXCIsXG5cdFwibHNxdW9cIjogXCLigJhcIixcblx0XCJsc3F1b3JcIjogXCLigJpcIixcblx0XCJMc3Ryb2tcIjogXCLFgVwiLFxuXHRcImxzdHJva1wiOiBcIsWCXCIsXG5cdFwibHRjY1wiOiBcIuKqplwiLFxuXHRcImx0Y2lyXCI6IFwi4qm5XCIsXG5cdFwibHRcIjogXCI8XCIsXG5cdFwiTFRcIjogXCI8XCIsXG5cdFwiTHRcIjogXCLiiapcIixcblx0XCJsdGRvdFwiOiBcIuKLllwiLFxuXHRcImx0aHJlZVwiOiBcIuKLi1wiLFxuXHRcImx0aW1lc1wiOiBcIuKLiVwiLFxuXHRcImx0bGFyclwiOiBcIuKltlwiLFxuXHRcImx0cXVlc3RcIjogXCLiqbtcIixcblx0XCJsdHJpXCI6IFwi4peDXCIsXG5cdFwibHRyaWVcIjogXCLiirRcIixcblx0XCJsdHJpZlwiOiBcIuKXglwiLFxuXHRcImx0clBhclwiOiBcIuKmllwiLFxuXHRcImx1cmRzaGFyXCI6IFwi4qWKXCIsXG5cdFwibHVydWhhclwiOiBcIuKlplwiLFxuXHRcImx2ZXJ0bmVxcVwiOiBcIuKJqO+4gFwiLFxuXHRcImx2bkVcIjogXCLiiajvuIBcIixcblx0XCJtYWNyXCI6IFwiwq9cIixcblx0XCJtYWxlXCI6IFwi4pmCXCIsXG5cdFwibWFsdFwiOiBcIuKcoFwiLFxuXHRcIm1hbHRlc2VcIjogXCLinKBcIixcblx0XCJNYXBcIjogXCLipIVcIixcblx0XCJtYXBcIjogXCLihqZcIixcblx0XCJtYXBzdG9cIjogXCLihqZcIixcblx0XCJtYXBzdG9kb3duXCI6IFwi4oanXCIsXG5cdFwibWFwc3RvbGVmdFwiOiBcIuKGpFwiLFxuXHRcIm1hcHN0b3VwXCI6IFwi4oalXCIsXG5cdFwibWFya2VyXCI6IFwi4pauXCIsXG5cdFwibWNvbW1hXCI6IFwi4qipXCIsXG5cdFwiTWN5XCI6IFwi0JxcIixcblx0XCJtY3lcIjogXCLQvFwiLFxuXHRcIm1kYXNoXCI6IFwi4oCUXCIsXG5cdFwibUREb3RcIjogXCLiiLpcIixcblx0XCJtZWFzdXJlZGFuZ2xlXCI6IFwi4oihXCIsXG5cdFwiTWVkaXVtU3BhY2VcIjogXCLigZ9cIixcblx0XCJNZWxsaW50cmZcIjogXCLihLNcIixcblx0XCJNZnJcIjogXCLwnZSQXCIsXG5cdFwibWZyXCI6IFwi8J2UqlwiLFxuXHRcIm1ob1wiOiBcIuKEp1wiLFxuXHRcIm1pY3JvXCI6IFwiwrVcIixcblx0XCJtaWRhc3RcIjogXCIqXCIsXG5cdFwibWlkY2lyXCI6IFwi4quwXCIsXG5cdFwibWlkXCI6IFwi4oijXCIsXG5cdFwibWlkZG90XCI6IFwiwrdcIixcblx0XCJtaW51c2JcIjogXCLiip9cIixcblx0XCJtaW51c1wiOiBcIuKIklwiLFxuXHRcIm1pbnVzZFwiOiBcIuKIuFwiLFxuXHRcIm1pbnVzZHVcIjogXCLiqKpcIixcblx0XCJNaW51c1BsdXNcIjogXCLiiJNcIixcblx0XCJtbGNwXCI6IFwi4qubXCIsXG5cdFwibWxkclwiOiBcIuKAplwiLFxuXHRcIm1ucGx1c1wiOiBcIuKIk1wiLFxuXHRcIm1vZGVsc1wiOiBcIuKKp1wiLFxuXHRcIk1vcGZcIjogXCLwnZWEXCIsXG5cdFwibW9wZlwiOiBcIvCdlZ5cIixcblx0XCJtcFwiOiBcIuKIk1wiLFxuXHRcIm1zY3JcIjogXCLwnZOCXCIsXG5cdFwiTXNjclwiOiBcIuKEs1wiLFxuXHRcIm1zdHBvc1wiOiBcIuKIvlwiLFxuXHRcIk11XCI6IFwizpxcIixcblx0XCJtdVwiOiBcIs68XCIsXG5cdFwibXVsdGltYXBcIjogXCLiirhcIixcblx0XCJtdW1hcFwiOiBcIuKKuFwiLFxuXHRcIm5hYmxhXCI6IFwi4oiHXCIsXG5cdFwiTmFjdXRlXCI6IFwixYNcIixcblx0XCJuYWN1dGVcIjogXCLFhFwiLFxuXHRcIm5hbmdcIjogXCLiiKDig5JcIixcblx0XCJuYXBcIjogXCLiiYlcIixcblx0XCJuYXBFXCI6IFwi4qmwzLhcIixcblx0XCJuYXBpZFwiOiBcIuKJi8y4XCIsXG5cdFwibmFwb3NcIjogXCLFiVwiLFxuXHRcIm5hcHByb3hcIjogXCLiiYlcIixcblx0XCJuYXR1cmFsXCI6IFwi4pmuXCIsXG5cdFwibmF0dXJhbHNcIjogXCLihJVcIixcblx0XCJuYXR1clwiOiBcIuKZrlwiLFxuXHRcIm5ic3BcIjogXCLCoFwiLFxuXHRcIm5idW1wXCI6IFwi4omOzLhcIixcblx0XCJuYnVtcGVcIjogXCLiiY/MuFwiLFxuXHRcIm5jYXBcIjogXCLiqYNcIixcblx0XCJOY2Fyb25cIjogXCLFh1wiLFxuXHRcIm5jYXJvblwiOiBcIsWIXCIsXG5cdFwiTmNlZGlsXCI6IFwixYVcIixcblx0XCJuY2VkaWxcIjogXCLFhlwiLFxuXHRcIm5jb25nXCI6IFwi4omHXCIsXG5cdFwibmNvbmdkb3RcIjogXCLiqa3MuFwiLFxuXHRcIm5jdXBcIjogXCLiqYJcIixcblx0XCJOY3lcIjogXCLQnVwiLFxuXHRcIm5jeVwiOiBcItC9XCIsXG5cdFwibmRhc2hcIjogXCLigJNcIixcblx0XCJuZWFyaGtcIjogXCLipKRcIixcblx0XCJuZWFyclwiOiBcIuKGl1wiLFxuXHRcIm5lQXJyXCI6IFwi4oeXXCIsXG5cdFwibmVhcnJvd1wiOiBcIuKGl1wiLFxuXHRcIm5lXCI6IFwi4omgXCIsXG5cdFwibmVkb3RcIjogXCLiiZDMuFwiLFxuXHRcIk5lZ2F0aXZlTWVkaXVtU3BhY2VcIjogXCLigItcIixcblx0XCJOZWdhdGl2ZVRoaWNrU3BhY2VcIjogXCLigItcIixcblx0XCJOZWdhdGl2ZVRoaW5TcGFjZVwiOiBcIuKAi1wiLFxuXHRcIk5lZ2F0aXZlVmVyeVRoaW5TcGFjZVwiOiBcIuKAi1wiLFxuXHRcIm5lcXVpdlwiOiBcIuKJolwiLFxuXHRcIm5lc2VhclwiOiBcIuKkqFwiLFxuXHRcIm5lc2ltXCI6IFwi4omCzLhcIixcblx0XCJOZXN0ZWRHcmVhdGVyR3JlYXRlclwiOiBcIuKJq1wiLFxuXHRcIk5lc3RlZExlc3NMZXNzXCI6IFwi4omqXCIsXG5cdFwiTmV3TGluZVwiOiBcIlxcblwiLFxuXHRcIm5leGlzdFwiOiBcIuKIhFwiLFxuXHRcIm5leGlzdHNcIjogXCLiiIRcIixcblx0XCJOZnJcIjogXCLwnZSRXCIsXG5cdFwibmZyXCI6IFwi8J2Uq1wiLFxuXHRcIm5nRVwiOiBcIuKJp8y4XCIsXG5cdFwibmdlXCI6IFwi4omxXCIsXG5cdFwibmdlcVwiOiBcIuKJsVwiLFxuXHRcIm5nZXFxXCI6IFwi4omnzLhcIixcblx0XCJuZ2Vxc2xhbnRcIjogXCLiqb7MuFwiLFxuXHRcIm5nZXNcIjogXCLiqb7MuFwiLFxuXHRcIm5HZ1wiOiBcIuKLmcy4XCIsXG5cdFwibmdzaW1cIjogXCLiibVcIixcblx0XCJuR3RcIjogXCLiiavig5JcIixcblx0XCJuZ3RcIjogXCLiia9cIixcblx0XCJuZ3RyXCI6IFwi4omvXCIsXG5cdFwibkd0dlwiOiBcIuKJq8y4XCIsXG5cdFwibmhhcnJcIjogXCLihq5cIixcblx0XCJuaEFyclwiOiBcIuKHjlwiLFxuXHRcIm5ocGFyXCI6IFwi4quyXCIsXG5cdFwibmlcIjogXCLiiItcIixcblx0XCJuaXNcIjogXCLii7xcIixcblx0XCJuaXNkXCI6IFwi4ou6XCIsXG5cdFwibml2XCI6IFwi4oiLXCIsXG5cdFwiTkpjeVwiOiBcItCKXCIsXG5cdFwibmpjeVwiOiBcItGaXCIsXG5cdFwibmxhcnJcIjogXCLihppcIixcblx0XCJubEFyclwiOiBcIuKHjVwiLFxuXHRcIm5sZHJcIjogXCLigKVcIixcblx0XCJubEVcIjogXCLiiabMuFwiLFxuXHRcIm5sZVwiOiBcIuKJsFwiLFxuXHRcIm5sZWZ0YXJyb3dcIjogXCLihppcIixcblx0XCJuTGVmdGFycm93XCI6IFwi4oeNXCIsXG5cdFwibmxlZnRyaWdodGFycm93XCI6IFwi4oauXCIsXG5cdFwibkxlZnRyaWdodGFycm93XCI6IFwi4oeOXCIsXG5cdFwibmxlcVwiOiBcIuKJsFwiLFxuXHRcIm5sZXFxXCI6IFwi4ommzLhcIixcblx0XCJubGVxc2xhbnRcIjogXCLiqb3MuFwiLFxuXHRcIm5sZXNcIjogXCLiqb3MuFwiLFxuXHRcIm5sZXNzXCI6IFwi4omuXCIsXG5cdFwibkxsXCI6IFwi4ouYzLhcIixcblx0XCJubHNpbVwiOiBcIuKJtFwiLFxuXHRcIm5MdFwiOiBcIuKJquKDklwiLFxuXHRcIm5sdFwiOiBcIuKJrlwiLFxuXHRcIm5sdHJpXCI6IFwi4ouqXCIsXG5cdFwibmx0cmllXCI6IFwi4ousXCIsXG5cdFwibkx0dlwiOiBcIuKJqsy4XCIsXG5cdFwibm1pZFwiOiBcIuKIpFwiLFxuXHRcIk5vQnJlYWtcIjogXCLigaBcIixcblx0XCJOb25CcmVha2luZ1NwYWNlXCI6IFwiwqBcIixcblx0XCJub3BmXCI6IFwi8J2Vn1wiLFxuXHRcIk5vcGZcIjogXCLihJVcIixcblx0XCJOb3RcIjogXCLiq6xcIixcblx0XCJub3RcIjogXCLCrFwiLFxuXHRcIk5vdENvbmdydWVudFwiOiBcIuKJolwiLFxuXHRcIk5vdEN1cENhcFwiOiBcIuKJrVwiLFxuXHRcIk5vdERvdWJsZVZlcnRpY2FsQmFyXCI6IFwi4oimXCIsXG5cdFwiTm90RWxlbWVudFwiOiBcIuKIiVwiLFxuXHRcIk5vdEVxdWFsXCI6IFwi4omgXCIsXG5cdFwiTm90RXF1YWxUaWxkZVwiOiBcIuKJgsy4XCIsXG5cdFwiTm90RXhpc3RzXCI6IFwi4oiEXCIsXG5cdFwiTm90R3JlYXRlclwiOiBcIuKJr1wiLFxuXHRcIk5vdEdyZWF0ZXJFcXVhbFwiOiBcIuKJsVwiLFxuXHRcIk5vdEdyZWF0ZXJGdWxsRXF1YWxcIjogXCLiiafMuFwiLFxuXHRcIk5vdEdyZWF0ZXJHcmVhdGVyXCI6IFwi4omrzLhcIixcblx0XCJOb3RHcmVhdGVyTGVzc1wiOiBcIuKJuVwiLFxuXHRcIk5vdEdyZWF0ZXJTbGFudEVxdWFsXCI6IFwi4qm+zLhcIixcblx0XCJOb3RHcmVhdGVyVGlsZGVcIjogXCLiibVcIixcblx0XCJOb3RIdW1wRG93bkh1bXBcIjogXCLiiY7MuFwiLFxuXHRcIk5vdEh1bXBFcXVhbFwiOiBcIuKJj8y4XCIsXG5cdFwibm90aW5cIjogXCLiiIlcIixcblx0XCJub3RpbmRvdFwiOiBcIuKLtcy4XCIsXG5cdFwibm90aW5FXCI6IFwi4ou5zLhcIixcblx0XCJub3RpbnZhXCI6IFwi4oiJXCIsXG5cdFwibm90aW52YlwiOiBcIuKLt1wiLFxuXHRcIm5vdGludmNcIjogXCLii7ZcIixcblx0XCJOb3RMZWZ0VHJpYW5nbGVCYXJcIjogXCLip4/MuFwiLFxuXHRcIk5vdExlZnRUcmlhbmdsZVwiOiBcIuKLqlwiLFxuXHRcIk5vdExlZnRUcmlhbmdsZUVxdWFsXCI6IFwi4ousXCIsXG5cdFwiTm90TGVzc1wiOiBcIuKJrlwiLFxuXHRcIk5vdExlc3NFcXVhbFwiOiBcIuKJsFwiLFxuXHRcIk5vdExlc3NHcmVhdGVyXCI6IFwi4om4XCIsXG5cdFwiTm90TGVzc0xlc3NcIjogXCLiiarMuFwiLFxuXHRcIk5vdExlc3NTbGFudEVxdWFsXCI6IFwi4qm9zLhcIixcblx0XCJOb3RMZXNzVGlsZGVcIjogXCLiibRcIixcblx0XCJOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlclwiOiBcIuKqosy4XCIsXG5cdFwiTm90TmVzdGVkTGVzc0xlc3NcIjogXCLiqqHMuFwiLFxuXHRcIm5vdG5pXCI6IFwi4oiMXCIsXG5cdFwibm90bml2YVwiOiBcIuKIjFwiLFxuXHRcIm5vdG5pdmJcIjogXCLii75cIixcblx0XCJub3RuaXZjXCI6IFwi4ou9XCIsXG5cdFwiTm90UHJlY2VkZXNcIjogXCLiioBcIixcblx0XCJOb3RQcmVjZWRlc0VxdWFsXCI6IFwi4qqvzLhcIixcblx0XCJOb3RQcmVjZWRlc1NsYW50RXF1YWxcIjogXCLii6BcIixcblx0XCJOb3RSZXZlcnNlRWxlbWVudFwiOiBcIuKIjFwiLFxuXHRcIk5vdFJpZ2h0VHJpYW5nbGVCYXJcIjogXCLip5DMuFwiLFxuXHRcIk5vdFJpZ2h0VHJpYW5nbGVcIjogXCLii6tcIixcblx0XCJOb3RSaWdodFRyaWFuZ2xlRXF1YWxcIjogXCLii61cIixcblx0XCJOb3RTcXVhcmVTdWJzZXRcIjogXCLiio/MuFwiLFxuXHRcIk5vdFNxdWFyZVN1YnNldEVxdWFsXCI6IFwi4ouiXCIsXG5cdFwiTm90U3F1YXJlU3VwZXJzZXRcIjogXCLiipDMuFwiLFxuXHRcIk5vdFNxdWFyZVN1cGVyc2V0RXF1YWxcIjogXCLii6NcIixcblx0XCJOb3RTdWJzZXRcIjogXCLiioLig5JcIixcblx0XCJOb3RTdWJzZXRFcXVhbFwiOiBcIuKKiFwiLFxuXHRcIk5vdFN1Y2NlZWRzXCI6IFwi4oqBXCIsXG5cdFwiTm90U3VjY2VlZHNFcXVhbFwiOiBcIuKqsMy4XCIsXG5cdFwiTm90U3VjY2VlZHNTbGFudEVxdWFsXCI6IFwi4ouhXCIsXG5cdFwiTm90U3VjY2VlZHNUaWxkZVwiOiBcIuKJv8y4XCIsXG5cdFwiTm90U3VwZXJzZXRcIjogXCLiioPig5JcIixcblx0XCJOb3RTdXBlcnNldEVxdWFsXCI6IFwi4oqJXCIsXG5cdFwiTm90VGlsZGVcIjogXCLiiYFcIixcblx0XCJOb3RUaWxkZUVxdWFsXCI6IFwi4omEXCIsXG5cdFwiTm90VGlsZGVGdWxsRXF1YWxcIjogXCLiiYdcIixcblx0XCJOb3RUaWxkZVRpbGRlXCI6IFwi4omJXCIsXG5cdFwiTm90VmVydGljYWxCYXJcIjogXCLiiKRcIixcblx0XCJucGFyYWxsZWxcIjogXCLiiKZcIixcblx0XCJucGFyXCI6IFwi4oimXCIsXG5cdFwibnBhcnNsXCI6IFwi4qu94oOlXCIsXG5cdFwibnBhcnRcIjogXCLiiILMuFwiLFxuXHRcIm5wb2xpbnRcIjogXCLiqJRcIixcblx0XCJucHJcIjogXCLiioBcIixcblx0XCJucHJjdWVcIjogXCLii6BcIixcblx0XCJucHJlY1wiOiBcIuKKgFwiLFxuXHRcIm5wcmVjZXFcIjogXCLiqq/MuFwiLFxuXHRcIm5wcmVcIjogXCLiqq/MuFwiLFxuXHRcIm5yYXJyY1wiOiBcIuKks8y4XCIsXG5cdFwibnJhcnJcIjogXCLihptcIixcblx0XCJuckFyclwiOiBcIuKHj1wiLFxuXHRcIm5yYXJyd1wiOiBcIuKGncy4XCIsXG5cdFwibnJpZ2h0YXJyb3dcIjogXCLihptcIixcblx0XCJuUmlnaHRhcnJvd1wiOiBcIuKHj1wiLFxuXHRcIm5ydHJpXCI6IFwi4ourXCIsXG5cdFwibnJ0cmllXCI6IFwi4outXCIsXG5cdFwibnNjXCI6IFwi4oqBXCIsXG5cdFwibnNjY3VlXCI6IFwi4ouhXCIsXG5cdFwibnNjZVwiOiBcIuKqsMy4XCIsXG5cdFwiTnNjclwiOiBcIvCdkqlcIixcblx0XCJuc2NyXCI6IFwi8J2Tg1wiLFxuXHRcIm5zaG9ydG1pZFwiOiBcIuKIpFwiLFxuXHRcIm5zaG9ydHBhcmFsbGVsXCI6IFwi4oimXCIsXG5cdFwibnNpbVwiOiBcIuKJgVwiLFxuXHRcIm5zaW1lXCI6IFwi4omEXCIsXG5cdFwibnNpbWVxXCI6IFwi4omEXCIsXG5cdFwibnNtaWRcIjogXCLiiKRcIixcblx0XCJuc3BhclwiOiBcIuKIplwiLFxuXHRcIm5zcXN1YmVcIjogXCLii6JcIixcblx0XCJuc3FzdXBlXCI6IFwi4oujXCIsXG5cdFwibnN1YlwiOiBcIuKKhFwiLFxuXHRcIm5zdWJFXCI6IFwi4quFzLhcIixcblx0XCJuc3ViZVwiOiBcIuKKiFwiLFxuXHRcIm5zdWJzZXRcIjogXCLiioLig5JcIixcblx0XCJuc3Vic2V0ZXFcIjogXCLiiohcIixcblx0XCJuc3Vic2V0ZXFxXCI6IFwi4quFzLhcIixcblx0XCJuc3VjY1wiOiBcIuKKgVwiLFxuXHRcIm5zdWNjZXFcIjogXCLiqrDMuFwiLFxuXHRcIm5zdXBcIjogXCLiioVcIixcblx0XCJuc3VwRVwiOiBcIuKrhsy4XCIsXG5cdFwibnN1cGVcIjogXCLiiolcIixcblx0XCJuc3Vwc2V0XCI6IFwi4oqD4oOSXCIsXG5cdFwibnN1cHNldGVxXCI6IFwi4oqJXCIsXG5cdFwibnN1cHNldGVxcVwiOiBcIuKrhsy4XCIsXG5cdFwibnRnbFwiOiBcIuKJuVwiLFxuXHRcIk50aWxkZVwiOiBcIsORXCIsXG5cdFwibnRpbGRlXCI6IFwiw7FcIixcblx0XCJudGxnXCI6IFwi4om4XCIsXG5cdFwibnRyaWFuZ2xlbGVmdFwiOiBcIuKLqlwiLFxuXHRcIm50cmlhbmdsZWxlZnRlcVwiOiBcIuKLrFwiLFxuXHRcIm50cmlhbmdsZXJpZ2h0XCI6IFwi4ourXCIsXG5cdFwibnRyaWFuZ2xlcmlnaHRlcVwiOiBcIuKLrVwiLFxuXHRcIk51XCI6IFwizp1cIixcblx0XCJudVwiOiBcIs69XCIsXG5cdFwibnVtXCI6IFwiI1wiLFxuXHRcIm51bWVyb1wiOiBcIuKEllwiLFxuXHRcIm51bXNwXCI6IFwi4oCHXCIsXG5cdFwibnZhcFwiOiBcIuKJjeKDklwiLFxuXHRcIm52ZGFzaFwiOiBcIuKKrFwiLFxuXHRcIm52RGFzaFwiOiBcIuKKrVwiLFxuXHRcIm5WZGFzaFwiOiBcIuKKrlwiLFxuXHRcIm5WRGFzaFwiOiBcIuKKr1wiLFxuXHRcIm52Z2VcIjogXCLiiaXig5JcIixcblx0XCJudmd0XCI6IFwiPuKDklwiLFxuXHRcIm52SGFyclwiOiBcIuKkhFwiLFxuXHRcIm52aW5maW5cIjogXCLip55cIixcblx0XCJudmxBcnJcIjogXCLipIJcIixcblx0XCJudmxlXCI6IFwi4omk4oOSXCIsXG5cdFwibnZsdFwiOiBcIjzig5JcIixcblx0XCJudmx0cmllXCI6IFwi4oq04oOSXCIsXG5cdFwibnZyQXJyXCI6IFwi4qSDXCIsXG5cdFwibnZydHJpZVwiOiBcIuKKteKDklwiLFxuXHRcIm52c2ltXCI6IFwi4oi84oOSXCIsXG5cdFwibndhcmhrXCI6IFwi4qSjXCIsXG5cdFwibndhcnJcIjogXCLihpZcIixcblx0XCJud0FyclwiOiBcIuKHllwiLFxuXHRcIm53YXJyb3dcIjogXCLihpZcIixcblx0XCJud25lYXJcIjogXCLipKdcIixcblx0XCJPYWN1dGVcIjogXCLDk1wiLFxuXHRcIm9hY3V0ZVwiOiBcIsOzXCIsXG5cdFwib2FzdFwiOiBcIuKKm1wiLFxuXHRcIk9jaXJjXCI6IFwiw5RcIixcblx0XCJvY2lyY1wiOiBcIsO0XCIsXG5cdFwib2NpclwiOiBcIuKKmlwiLFxuXHRcIk9jeVwiOiBcItCeXCIsXG5cdFwib2N5XCI6IFwi0L5cIixcblx0XCJvZGFzaFwiOiBcIuKKnVwiLFxuXHRcIk9kYmxhY1wiOiBcIsWQXCIsXG5cdFwib2RibGFjXCI6IFwixZFcIixcblx0XCJvZGl2XCI6IFwi4qi4XCIsXG5cdFwib2RvdFwiOiBcIuKKmVwiLFxuXHRcIm9kc29sZFwiOiBcIuKmvFwiLFxuXHRcIk9FbGlnXCI6IFwixZJcIixcblx0XCJvZWxpZ1wiOiBcIsWTXCIsXG5cdFwib2ZjaXJcIjogXCLipr9cIixcblx0XCJPZnJcIjogXCLwnZSSXCIsXG5cdFwib2ZyXCI6IFwi8J2UrFwiLFxuXHRcIm9nb25cIjogXCLLm1wiLFxuXHRcIk9ncmF2ZVwiOiBcIsOSXCIsXG5cdFwib2dyYXZlXCI6IFwiw7JcIixcblx0XCJvZ3RcIjogXCLip4FcIixcblx0XCJvaGJhclwiOiBcIuKmtVwiLFxuXHRcIm9obVwiOiBcIs6pXCIsXG5cdFwib2ludFwiOiBcIuKIrlwiLFxuXHRcIm9sYXJyXCI6IFwi4oa6XCIsXG5cdFwib2xjaXJcIjogXCLipr5cIixcblx0XCJvbGNyb3NzXCI6IFwi4qa7XCIsXG5cdFwib2xpbmVcIjogXCLigL5cIixcblx0XCJvbHRcIjogXCLip4BcIixcblx0XCJPbWFjclwiOiBcIsWMXCIsXG5cdFwib21hY3JcIjogXCLFjVwiLFxuXHRcIk9tZWdhXCI6IFwizqlcIixcblx0XCJvbWVnYVwiOiBcIs+JXCIsXG5cdFwiT21pY3JvblwiOiBcIs6fXCIsXG5cdFwib21pY3JvblwiOiBcIs6/XCIsXG5cdFwib21pZFwiOiBcIuKmtlwiLFxuXHRcIm9taW51c1wiOiBcIuKKllwiLFxuXHRcIk9vcGZcIjogXCLwnZWGXCIsXG5cdFwib29wZlwiOiBcIvCdlaBcIixcblx0XCJvcGFyXCI6IFwi4qa3XCIsXG5cdFwiT3BlbkN1cmx5RG91YmxlUXVvdGVcIjogXCLigJxcIixcblx0XCJPcGVuQ3VybHlRdW90ZVwiOiBcIuKAmFwiLFxuXHRcIm9wZXJwXCI6IFwi4qa5XCIsXG5cdFwib3BsdXNcIjogXCLiipVcIixcblx0XCJvcmFyclwiOiBcIuKGu1wiLFxuXHRcIk9yXCI6IFwi4qmUXCIsXG5cdFwib3JcIjogXCLiiKhcIixcblx0XCJvcmRcIjogXCLiqZ1cIixcblx0XCJvcmRlclwiOiBcIuKEtFwiLFxuXHRcIm9yZGVyb2ZcIjogXCLihLRcIixcblx0XCJvcmRmXCI6IFwiwqpcIixcblx0XCJvcmRtXCI6IFwiwrpcIixcblx0XCJvcmlnb2ZcIjogXCLiirZcIixcblx0XCJvcm9yXCI6IFwi4qmWXCIsXG5cdFwib3JzbG9wZVwiOiBcIuKpl1wiLFxuXHRcIm9ydlwiOiBcIuKpm1wiLFxuXHRcIm9TXCI6IFwi4pOIXCIsXG5cdFwiT3NjclwiOiBcIvCdkqpcIixcblx0XCJvc2NyXCI6IFwi4oS0XCIsXG5cdFwiT3NsYXNoXCI6IFwiw5hcIixcblx0XCJvc2xhc2hcIjogXCLDuFwiLFxuXHRcIm9zb2xcIjogXCLiiphcIixcblx0XCJPdGlsZGVcIjogXCLDlVwiLFxuXHRcIm90aWxkZVwiOiBcIsO1XCIsXG5cdFwib3RpbWVzYXNcIjogXCLiqLZcIixcblx0XCJPdGltZXNcIjogXCLiqLdcIixcblx0XCJvdGltZXNcIjogXCLiipdcIixcblx0XCJPdW1sXCI6IFwiw5ZcIixcblx0XCJvdW1sXCI6IFwiw7ZcIixcblx0XCJvdmJhclwiOiBcIuKMvVwiLFxuXHRcIk92ZXJCYXJcIjogXCLigL5cIixcblx0XCJPdmVyQnJhY2VcIjogXCLij55cIixcblx0XCJPdmVyQnJhY2tldFwiOiBcIuKOtFwiLFxuXHRcIk92ZXJQYXJlbnRoZXNpc1wiOiBcIuKPnFwiLFxuXHRcInBhcmFcIjogXCLCtlwiLFxuXHRcInBhcmFsbGVsXCI6IFwi4oilXCIsXG5cdFwicGFyXCI6IFwi4oilXCIsXG5cdFwicGFyc2ltXCI6IFwi4quzXCIsXG5cdFwicGFyc2xcIjogXCLiq71cIixcblx0XCJwYXJ0XCI6IFwi4oiCXCIsXG5cdFwiUGFydGlhbERcIjogXCLiiIJcIixcblx0XCJQY3lcIjogXCLQn1wiLFxuXHRcInBjeVwiOiBcItC/XCIsXG5cdFwicGVyY250XCI6IFwiJVwiLFxuXHRcInBlcmlvZFwiOiBcIi5cIixcblx0XCJwZXJtaWxcIjogXCLigLBcIixcblx0XCJwZXJwXCI6IFwi4oqlXCIsXG5cdFwicGVydGVua1wiOiBcIuKAsVwiLFxuXHRcIlBmclwiOiBcIvCdlJNcIixcblx0XCJwZnJcIjogXCLwnZStXCIsXG5cdFwiUGhpXCI6IFwizqZcIixcblx0XCJwaGlcIjogXCLPhlwiLFxuXHRcInBoaXZcIjogXCLPlVwiLFxuXHRcInBobW1hdFwiOiBcIuKEs1wiLFxuXHRcInBob25lXCI6IFwi4piOXCIsXG5cdFwiUGlcIjogXCLOoFwiLFxuXHRcInBpXCI6IFwiz4BcIixcblx0XCJwaXRjaGZvcmtcIjogXCLii5RcIixcblx0XCJwaXZcIjogXCLPllwiLFxuXHRcInBsYW5ja1wiOiBcIuKEj1wiLFxuXHRcInBsYW5ja2hcIjogXCLihI5cIixcblx0XCJwbGFua3ZcIjogXCLihI9cIixcblx0XCJwbHVzYWNpclwiOiBcIuKoo1wiLFxuXHRcInBsdXNiXCI6IFwi4oqeXCIsXG5cdFwicGx1c2NpclwiOiBcIuKoolwiLFxuXHRcInBsdXNcIjogXCIrXCIsXG5cdFwicGx1c2RvXCI6IFwi4oiUXCIsXG5cdFwicGx1c2R1XCI6IFwi4qilXCIsXG5cdFwicGx1c2VcIjogXCLiqbJcIixcblx0XCJQbHVzTWludXNcIjogXCLCsVwiLFxuXHRcInBsdXNtblwiOiBcIsKxXCIsXG5cdFwicGx1c3NpbVwiOiBcIuKoplwiLFxuXHRcInBsdXN0d29cIjogXCLiqKdcIixcblx0XCJwbVwiOiBcIsKxXCIsXG5cdFwiUG9pbmNhcmVwbGFuZVwiOiBcIuKEjFwiLFxuXHRcInBvaW50aW50XCI6IFwi4qiVXCIsXG5cdFwicG9wZlwiOiBcIvCdlaFcIixcblx0XCJQb3BmXCI6IFwi4oSZXCIsXG5cdFwicG91bmRcIjogXCLCo1wiLFxuXHRcInByYXBcIjogXCLiqrdcIixcblx0XCJQclwiOiBcIuKqu1wiLFxuXHRcInByXCI6IFwi4om6XCIsXG5cdFwicHJjdWVcIjogXCLiibxcIixcblx0XCJwcmVjYXBwcm94XCI6IFwi4qq3XCIsXG5cdFwicHJlY1wiOiBcIuKJulwiLFxuXHRcInByZWNjdXJseWVxXCI6IFwi4om8XCIsXG5cdFwiUHJlY2VkZXNcIjogXCLiibpcIixcblx0XCJQcmVjZWRlc0VxdWFsXCI6IFwi4qqvXCIsXG5cdFwiUHJlY2VkZXNTbGFudEVxdWFsXCI6IFwi4om8XCIsXG5cdFwiUHJlY2VkZXNUaWxkZVwiOiBcIuKJvlwiLFxuXHRcInByZWNlcVwiOiBcIuKqr1wiLFxuXHRcInByZWNuYXBwcm94XCI6IFwi4qq5XCIsXG5cdFwicHJlY25lcXFcIjogXCLiqrVcIixcblx0XCJwcmVjbnNpbVwiOiBcIuKLqFwiLFxuXHRcInByZVwiOiBcIuKqr1wiLFxuXHRcInByRVwiOiBcIuKqs1wiLFxuXHRcInByZWNzaW1cIjogXCLiib5cIixcblx0XCJwcmltZVwiOiBcIuKAslwiLFxuXHRcIlByaW1lXCI6IFwi4oCzXCIsXG5cdFwicHJpbWVzXCI6IFwi4oSZXCIsXG5cdFwicHJuYXBcIjogXCLiqrlcIixcblx0XCJwcm5FXCI6IFwi4qq1XCIsXG5cdFwicHJuc2ltXCI6IFwi4ouoXCIsXG5cdFwicHJvZFwiOiBcIuKIj1wiLFxuXHRcIlByb2R1Y3RcIjogXCLiiI9cIixcblx0XCJwcm9mYWxhclwiOiBcIuKMrlwiLFxuXHRcInByb2ZsaW5lXCI6IFwi4oySXCIsXG5cdFwicHJvZnN1cmZcIjogXCLijJNcIixcblx0XCJwcm9wXCI6IFwi4oidXCIsXG5cdFwiUHJvcG9ydGlvbmFsXCI6IFwi4oidXCIsXG5cdFwiUHJvcG9ydGlvblwiOiBcIuKIt1wiLFxuXHRcInByb3B0b1wiOiBcIuKInVwiLFxuXHRcInByc2ltXCI6IFwi4om+XCIsXG5cdFwicHJ1cmVsXCI6IFwi4oqwXCIsXG5cdFwiUHNjclwiOiBcIvCdkqtcIixcblx0XCJwc2NyXCI6IFwi8J2ThVwiLFxuXHRcIlBzaVwiOiBcIs6oXCIsXG5cdFwicHNpXCI6IFwiz4hcIixcblx0XCJwdW5jc3BcIjogXCLigIhcIixcblx0XCJRZnJcIjogXCLwnZSUXCIsXG5cdFwicWZyXCI6IFwi8J2UrlwiLFxuXHRcInFpbnRcIjogXCLiqIxcIixcblx0XCJxb3BmXCI6IFwi8J2VolwiLFxuXHRcIlFvcGZcIjogXCLihJpcIixcblx0XCJxcHJpbWVcIjogXCLigZdcIixcblx0XCJRc2NyXCI6IFwi8J2SrFwiLFxuXHRcInFzY3JcIjogXCLwnZOGXCIsXG5cdFwicXVhdGVybmlvbnNcIjogXCLihI1cIixcblx0XCJxdWF0aW50XCI6IFwi4qiWXCIsXG5cdFwicXVlc3RcIjogXCI/XCIsXG5cdFwicXVlc3RlcVwiOiBcIuKJn1wiLFxuXHRcInF1b3RcIjogXCJcXFwiXCIsXG5cdFwiUVVPVFwiOiBcIlxcXCJcIixcblx0XCJyQWFyclwiOiBcIuKHm1wiLFxuXHRcInJhY2VcIjogXCLiiL3MsVwiLFxuXHRcIlJhY3V0ZVwiOiBcIsWUXCIsXG5cdFwicmFjdXRlXCI6IFwixZVcIixcblx0XCJyYWRpY1wiOiBcIuKImlwiLFxuXHRcInJhZW1wdHl2XCI6IFwi4qazXCIsXG5cdFwicmFuZ1wiOiBcIuKfqVwiLFxuXHRcIlJhbmdcIjogXCLin6tcIixcblx0XCJyYW5nZFwiOiBcIuKmklwiLFxuXHRcInJhbmdlXCI6IFwi4qalXCIsXG5cdFwicmFuZ2xlXCI6IFwi4p+pXCIsXG5cdFwicmFxdW9cIjogXCLCu1wiLFxuXHRcInJhcnJhcFwiOiBcIuKltVwiLFxuXHRcInJhcnJiXCI6IFwi4oelXCIsXG5cdFwicmFycmJmc1wiOiBcIuKkoFwiLFxuXHRcInJhcnJjXCI6IFwi4qSzXCIsXG5cdFwicmFyclwiOiBcIuKGklwiLFxuXHRcIlJhcnJcIjogXCLihqBcIixcblx0XCJyQXJyXCI6IFwi4oeSXCIsXG5cdFwicmFycmZzXCI6IFwi4qSeXCIsXG5cdFwicmFycmhrXCI6IFwi4oaqXCIsXG5cdFwicmFycmxwXCI6IFwi4oasXCIsXG5cdFwicmFycnBsXCI6IFwi4qWFXCIsXG5cdFwicmFycnNpbVwiOiBcIuKltFwiLFxuXHRcIlJhcnJ0bFwiOiBcIuKkllwiLFxuXHRcInJhcnJ0bFwiOiBcIuKGo1wiLFxuXHRcInJhcnJ3XCI6IFwi4oadXCIsXG5cdFwicmF0YWlsXCI6IFwi4qSaXCIsXG5cdFwickF0YWlsXCI6IFwi4qScXCIsXG5cdFwicmF0aW9cIjogXCLiiLZcIixcblx0XCJyYXRpb25hbHNcIjogXCLihJpcIixcblx0XCJyYmFyclwiOiBcIuKkjVwiLFxuXHRcInJCYXJyXCI6IFwi4qSPXCIsXG5cdFwiUkJhcnJcIjogXCLipJBcIixcblx0XCJyYmJya1wiOiBcIuKds1wiLFxuXHRcInJicmFjZVwiOiBcIn1cIixcblx0XCJyYnJhY2tcIjogXCJdXCIsXG5cdFwicmJya2VcIjogXCLipoxcIixcblx0XCJyYnJrc2xkXCI6IFwi4qaOXCIsXG5cdFwicmJya3NsdVwiOiBcIuKmkFwiLFxuXHRcIlJjYXJvblwiOiBcIsWYXCIsXG5cdFwicmNhcm9uXCI6IFwixZlcIixcblx0XCJSY2VkaWxcIjogXCLFllwiLFxuXHRcInJjZWRpbFwiOiBcIsWXXCIsXG5cdFwicmNlaWxcIjogXCLijIlcIixcblx0XCJyY3ViXCI6IFwifVwiLFxuXHRcIlJjeVwiOiBcItCgXCIsXG5cdFwicmN5XCI6IFwi0YBcIixcblx0XCJyZGNhXCI6IFwi4qS3XCIsXG5cdFwicmRsZGhhclwiOiBcIuKlqVwiLFxuXHRcInJkcXVvXCI6IFwi4oCdXCIsXG5cdFwicmRxdW9yXCI6IFwi4oCdXCIsXG5cdFwicmRzaFwiOiBcIuKGs1wiLFxuXHRcInJlYWxcIjogXCLihJxcIixcblx0XCJyZWFsaW5lXCI6IFwi4oSbXCIsXG5cdFwicmVhbHBhcnRcIjogXCLihJxcIixcblx0XCJyZWFsc1wiOiBcIuKEnVwiLFxuXHRcIlJlXCI6IFwi4oScXCIsXG5cdFwicmVjdFwiOiBcIuKWrVwiLFxuXHRcInJlZ1wiOiBcIsKuXCIsXG5cdFwiUkVHXCI6IFwiwq5cIixcblx0XCJSZXZlcnNlRWxlbWVudFwiOiBcIuKIi1wiLFxuXHRcIlJldmVyc2VFcXVpbGlicml1bVwiOiBcIuKHi1wiLFxuXHRcIlJldmVyc2VVcEVxdWlsaWJyaXVtXCI6IFwi4qWvXCIsXG5cdFwicmZpc2h0XCI6IFwi4qW9XCIsXG5cdFwicmZsb29yXCI6IFwi4oyLXCIsXG5cdFwicmZyXCI6IFwi8J2Ur1wiLFxuXHRcIlJmclwiOiBcIuKEnFwiLFxuXHRcInJIYXJcIjogXCLipaRcIixcblx0XCJyaGFyZFwiOiBcIuKHgVwiLFxuXHRcInJoYXJ1XCI6IFwi4oeAXCIsXG5cdFwicmhhcnVsXCI6IFwi4qWsXCIsXG5cdFwiUmhvXCI6IFwizqFcIixcblx0XCJyaG9cIjogXCLPgVwiLFxuXHRcInJob3ZcIjogXCLPsVwiLFxuXHRcIlJpZ2h0QW5nbGVCcmFja2V0XCI6IFwi4p+pXCIsXG5cdFwiUmlnaHRBcnJvd0JhclwiOiBcIuKHpVwiLFxuXHRcInJpZ2h0YXJyb3dcIjogXCLihpJcIixcblx0XCJSaWdodEFycm93XCI6IFwi4oaSXCIsXG5cdFwiUmlnaHRhcnJvd1wiOiBcIuKHklwiLFxuXHRcIlJpZ2h0QXJyb3dMZWZ0QXJyb3dcIjogXCLih4RcIixcblx0XCJyaWdodGFycm93dGFpbFwiOiBcIuKGo1wiLFxuXHRcIlJpZ2h0Q2VpbGluZ1wiOiBcIuKMiVwiLFxuXHRcIlJpZ2h0RG91YmxlQnJhY2tldFwiOiBcIuKfp1wiLFxuXHRcIlJpZ2h0RG93blRlZVZlY3RvclwiOiBcIuKlnVwiLFxuXHRcIlJpZ2h0RG93blZlY3RvckJhclwiOiBcIuKllVwiLFxuXHRcIlJpZ2h0RG93blZlY3RvclwiOiBcIuKHglwiLFxuXHRcIlJpZ2h0Rmxvb3JcIjogXCLijItcIixcblx0XCJyaWdodGhhcnBvb25kb3duXCI6IFwi4oeBXCIsXG5cdFwicmlnaHRoYXJwb29udXBcIjogXCLih4BcIixcblx0XCJyaWdodGxlZnRhcnJvd3NcIjogXCLih4RcIixcblx0XCJyaWdodGxlZnRoYXJwb29uc1wiOiBcIuKHjFwiLFxuXHRcInJpZ2h0cmlnaHRhcnJvd3NcIjogXCLih4lcIixcblx0XCJyaWdodHNxdWlnYXJyb3dcIjogXCLihp1cIixcblx0XCJSaWdodFRlZUFycm93XCI6IFwi4oamXCIsXG5cdFwiUmlnaHRUZWVcIjogXCLiiqJcIixcblx0XCJSaWdodFRlZVZlY3RvclwiOiBcIuKlm1wiLFxuXHRcInJpZ2h0dGhyZWV0aW1lc1wiOiBcIuKLjFwiLFxuXHRcIlJpZ2h0VHJpYW5nbGVCYXJcIjogXCLip5BcIixcblx0XCJSaWdodFRyaWFuZ2xlXCI6IFwi4oqzXCIsXG5cdFwiUmlnaHRUcmlhbmdsZUVxdWFsXCI6IFwi4oq1XCIsXG5cdFwiUmlnaHRVcERvd25WZWN0b3JcIjogXCLipY9cIixcblx0XCJSaWdodFVwVGVlVmVjdG9yXCI6IFwi4qWcXCIsXG5cdFwiUmlnaHRVcFZlY3RvckJhclwiOiBcIuKllFwiLFxuXHRcIlJpZ2h0VXBWZWN0b3JcIjogXCLihr5cIixcblx0XCJSaWdodFZlY3RvckJhclwiOiBcIuKlk1wiLFxuXHRcIlJpZ2h0VmVjdG9yXCI6IFwi4oeAXCIsXG5cdFwicmluZ1wiOiBcIsuaXCIsXG5cdFwicmlzaW5nZG90c2VxXCI6IFwi4omTXCIsXG5cdFwicmxhcnJcIjogXCLih4RcIixcblx0XCJybGhhclwiOiBcIuKHjFwiLFxuXHRcInJsbVwiOiBcIuKAj1wiLFxuXHRcInJtb3VzdGFjaGVcIjogXCLijrFcIixcblx0XCJybW91c3RcIjogXCLijrFcIixcblx0XCJybm1pZFwiOiBcIuKrrlwiLFxuXHRcInJvYW5nXCI6IFwi4p+tXCIsXG5cdFwicm9hcnJcIjogXCLih75cIixcblx0XCJyb2Jya1wiOiBcIuKfp1wiLFxuXHRcInJvcGFyXCI6IFwi4qaGXCIsXG5cdFwicm9wZlwiOiBcIvCdlaNcIixcblx0XCJSb3BmXCI6IFwi4oSdXCIsXG5cdFwicm9wbHVzXCI6IFwi4qiuXCIsXG5cdFwicm90aW1lc1wiOiBcIuKotVwiLFxuXHRcIlJvdW5kSW1wbGllc1wiOiBcIuKlsFwiLFxuXHRcInJwYXJcIjogXCIpXCIsXG5cdFwicnBhcmd0XCI6IFwi4qaUXCIsXG5cdFwicnBwb2xpbnRcIjogXCLiqJJcIixcblx0XCJycmFyclwiOiBcIuKHiVwiLFxuXHRcIlJyaWdodGFycm93XCI6IFwi4oebXCIsXG5cdFwicnNhcXVvXCI6IFwi4oC6XCIsXG5cdFwicnNjclwiOiBcIvCdk4dcIixcblx0XCJSc2NyXCI6IFwi4oSbXCIsXG5cdFwicnNoXCI6IFwi4oaxXCIsXG5cdFwiUnNoXCI6IFwi4oaxXCIsXG5cdFwicnNxYlwiOiBcIl1cIixcblx0XCJyc3F1b1wiOiBcIuKAmVwiLFxuXHRcInJzcXVvclwiOiBcIuKAmVwiLFxuXHRcInJ0aHJlZVwiOiBcIuKLjFwiLFxuXHRcInJ0aW1lc1wiOiBcIuKLilwiLFxuXHRcInJ0cmlcIjogXCLilrlcIixcblx0XCJydHJpZVwiOiBcIuKKtVwiLFxuXHRcInJ0cmlmXCI6IFwi4pa4XCIsXG5cdFwicnRyaWx0cmlcIjogXCLip45cIixcblx0XCJSdWxlRGVsYXllZFwiOiBcIuKntFwiLFxuXHRcInJ1bHVoYXJcIjogXCLipahcIixcblx0XCJyeFwiOiBcIuKEnlwiLFxuXHRcIlNhY3V0ZVwiOiBcIsWaXCIsXG5cdFwic2FjdXRlXCI6IFwixZtcIixcblx0XCJzYnF1b1wiOiBcIuKAmlwiLFxuXHRcInNjYXBcIjogXCLiqrhcIixcblx0XCJTY2Fyb25cIjogXCLFoFwiLFxuXHRcInNjYXJvblwiOiBcIsWhXCIsXG5cdFwiU2NcIjogXCLiqrxcIixcblx0XCJzY1wiOiBcIuKJu1wiLFxuXHRcInNjY3VlXCI6IFwi4om9XCIsXG5cdFwic2NlXCI6IFwi4qqwXCIsXG5cdFwic2NFXCI6IFwi4qq0XCIsXG5cdFwiU2NlZGlsXCI6IFwixZ5cIixcblx0XCJzY2VkaWxcIjogXCLFn1wiLFxuXHRcIlNjaXJjXCI6IFwixZxcIixcblx0XCJzY2lyY1wiOiBcIsWdXCIsXG5cdFwic2NuYXBcIjogXCLiqrpcIixcblx0XCJzY25FXCI6IFwi4qq2XCIsXG5cdFwic2Nuc2ltXCI6IFwi4oupXCIsXG5cdFwic2Nwb2xpbnRcIjogXCLiqJNcIixcblx0XCJzY3NpbVwiOiBcIuKJv1wiLFxuXHRcIlNjeVwiOiBcItChXCIsXG5cdFwic2N5XCI6IFwi0YFcIixcblx0XCJzZG90YlwiOiBcIuKKoVwiLFxuXHRcInNkb3RcIjogXCLii4VcIixcblx0XCJzZG90ZVwiOiBcIuKpplwiLFxuXHRcInNlYXJoa1wiOiBcIuKkpVwiLFxuXHRcInNlYXJyXCI6IFwi4oaYXCIsXG5cdFwic2VBcnJcIjogXCLih5hcIixcblx0XCJzZWFycm93XCI6IFwi4oaYXCIsXG5cdFwic2VjdFwiOiBcIsKnXCIsXG5cdFwic2VtaVwiOiBcIjtcIixcblx0XCJzZXN3YXJcIjogXCLipKlcIixcblx0XCJzZXRtaW51c1wiOiBcIuKIllwiLFxuXHRcInNldG1uXCI6IFwi4oiWXCIsXG5cdFwic2V4dFwiOiBcIuKctlwiLFxuXHRcIlNmclwiOiBcIvCdlJZcIixcblx0XCJzZnJcIjogXCLwnZSwXCIsXG5cdFwic2Zyb3duXCI6IFwi4oyiXCIsXG5cdFwic2hhcnBcIjogXCLima9cIixcblx0XCJTSENIY3lcIjogXCLQqVwiLFxuXHRcInNoY2hjeVwiOiBcItGJXCIsXG5cdFwiU0hjeVwiOiBcItCoXCIsXG5cdFwic2hjeVwiOiBcItGIXCIsXG5cdFwiU2hvcnREb3duQXJyb3dcIjogXCLihpNcIixcblx0XCJTaG9ydExlZnRBcnJvd1wiOiBcIuKGkFwiLFxuXHRcInNob3J0bWlkXCI6IFwi4oijXCIsXG5cdFwic2hvcnRwYXJhbGxlbFwiOiBcIuKIpVwiLFxuXHRcIlNob3J0UmlnaHRBcnJvd1wiOiBcIuKGklwiLFxuXHRcIlNob3J0VXBBcnJvd1wiOiBcIuKGkVwiLFxuXHRcInNoeVwiOiBcIsKtXCIsXG5cdFwiU2lnbWFcIjogXCLOo1wiLFxuXHRcInNpZ21hXCI6IFwiz4NcIixcblx0XCJzaWdtYWZcIjogXCLPglwiLFxuXHRcInNpZ21hdlwiOiBcIs+CXCIsXG5cdFwic2ltXCI6IFwi4oi8XCIsXG5cdFwic2ltZG90XCI6IFwi4qmqXCIsXG5cdFwic2ltZVwiOiBcIuKJg1wiLFxuXHRcInNpbWVxXCI6IFwi4omDXCIsXG5cdFwic2ltZ1wiOiBcIuKqnlwiLFxuXHRcInNpbWdFXCI6IFwi4qqgXCIsXG5cdFwic2ltbFwiOiBcIuKqnVwiLFxuXHRcInNpbWxFXCI6IFwi4qqfXCIsXG5cdFwic2ltbmVcIjogXCLiiYZcIixcblx0XCJzaW1wbHVzXCI6IFwi4qikXCIsXG5cdFwic2ltcmFyclwiOiBcIuKlslwiLFxuXHRcInNsYXJyXCI6IFwi4oaQXCIsXG5cdFwiU21hbGxDaXJjbGVcIjogXCLiiJhcIixcblx0XCJzbWFsbHNldG1pbnVzXCI6IFwi4oiWXCIsXG5cdFwic21hc2hwXCI6IFwi4qizXCIsXG5cdFwic21lcGFyc2xcIjogXCLip6RcIixcblx0XCJzbWlkXCI6IFwi4oijXCIsXG5cdFwic21pbGVcIjogXCLijKNcIixcblx0XCJzbXRcIjogXCLiqqpcIixcblx0XCJzbXRlXCI6IFwi4qqsXCIsXG5cdFwic210ZXNcIjogXCLiqqzvuIBcIixcblx0XCJTT0ZUY3lcIjogXCLQrFwiLFxuXHRcInNvZnRjeVwiOiBcItGMXCIsXG5cdFwic29sYmFyXCI6IFwi4oy/XCIsXG5cdFwic29sYlwiOiBcIuKnhFwiLFxuXHRcInNvbFwiOiBcIi9cIixcblx0XCJTb3BmXCI6IFwi8J2VilwiLFxuXHRcInNvcGZcIjogXCLwnZWkXCIsXG5cdFwic3BhZGVzXCI6IFwi4pmgXCIsXG5cdFwic3BhZGVzdWl0XCI6IFwi4pmgXCIsXG5cdFwic3BhclwiOiBcIuKIpVwiLFxuXHRcInNxY2FwXCI6IFwi4oqTXCIsXG5cdFwic3FjYXBzXCI6IFwi4oqT77iAXCIsXG5cdFwic3FjdXBcIjogXCLiipRcIixcblx0XCJzcWN1cHNcIjogXCLiipTvuIBcIixcblx0XCJTcXJ0XCI6IFwi4oiaXCIsXG5cdFwic3FzdWJcIjogXCLiio9cIixcblx0XCJzcXN1YmVcIjogXCLiipFcIixcblx0XCJzcXN1YnNldFwiOiBcIuKKj1wiLFxuXHRcInNxc3Vic2V0ZXFcIjogXCLiipFcIixcblx0XCJzcXN1cFwiOiBcIuKKkFwiLFxuXHRcInNxc3VwZVwiOiBcIuKKklwiLFxuXHRcInNxc3Vwc2V0XCI6IFwi4oqQXCIsXG5cdFwic3FzdXBzZXRlcVwiOiBcIuKKklwiLFxuXHRcInNxdWFyZVwiOiBcIuKWoVwiLFxuXHRcIlNxdWFyZVwiOiBcIuKWoVwiLFxuXHRcIlNxdWFyZUludGVyc2VjdGlvblwiOiBcIuKKk1wiLFxuXHRcIlNxdWFyZVN1YnNldFwiOiBcIuKKj1wiLFxuXHRcIlNxdWFyZVN1YnNldEVxdWFsXCI6IFwi4oqRXCIsXG5cdFwiU3F1YXJlU3VwZXJzZXRcIjogXCLiipBcIixcblx0XCJTcXVhcmVTdXBlcnNldEVxdWFsXCI6IFwi4oqSXCIsXG5cdFwiU3F1YXJlVW5pb25cIjogXCLiipRcIixcblx0XCJzcXVhcmZcIjogXCLilqpcIixcblx0XCJzcXVcIjogXCLilqFcIixcblx0XCJzcXVmXCI6IFwi4paqXCIsXG5cdFwic3JhcnJcIjogXCLihpJcIixcblx0XCJTc2NyXCI6IFwi8J2SrlwiLFxuXHRcInNzY3JcIjogXCLwnZOIXCIsXG5cdFwic3NldG1uXCI6IFwi4oiWXCIsXG5cdFwic3NtaWxlXCI6IFwi4oyjXCIsXG5cdFwic3N0YXJmXCI6IFwi4ouGXCIsXG5cdFwiU3RhclwiOiBcIuKLhlwiLFxuXHRcInN0YXJcIjogXCLimIZcIixcblx0XCJzdGFyZlwiOiBcIuKYhVwiLFxuXHRcInN0cmFpZ2h0ZXBzaWxvblwiOiBcIs+1XCIsXG5cdFwic3RyYWlnaHRwaGlcIjogXCLPlVwiLFxuXHRcInN0cm5zXCI6IFwiwq9cIixcblx0XCJzdWJcIjogXCLiioJcIixcblx0XCJTdWJcIjogXCLii5BcIixcblx0XCJzdWJkb3RcIjogXCLiqr1cIixcblx0XCJzdWJFXCI6IFwi4quFXCIsXG5cdFwic3ViZVwiOiBcIuKKhlwiLFxuXHRcInN1YmVkb3RcIjogXCLiq4NcIixcblx0XCJzdWJtdWx0XCI6IFwi4quBXCIsXG5cdFwic3VibkVcIjogXCLiq4tcIixcblx0XCJzdWJuZVwiOiBcIuKKilwiLFxuXHRcInN1YnBsdXNcIjogXCLiqr9cIixcblx0XCJzdWJyYXJyXCI6IFwi4qW5XCIsXG5cdFwic3Vic2V0XCI6IFwi4oqCXCIsXG5cdFwiU3Vic2V0XCI6IFwi4ouQXCIsXG5cdFwic3Vic2V0ZXFcIjogXCLiioZcIixcblx0XCJzdWJzZXRlcXFcIjogXCLiq4VcIixcblx0XCJTdWJzZXRFcXVhbFwiOiBcIuKKhlwiLFxuXHRcInN1YnNldG5lcVwiOiBcIuKKilwiLFxuXHRcInN1YnNldG5lcXFcIjogXCLiq4tcIixcblx0XCJzdWJzaW1cIjogXCLiq4dcIixcblx0XCJzdWJzdWJcIjogXCLiq5VcIixcblx0XCJzdWJzdXBcIjogXCLiq5NcIixcblx0XCJzdWNjYXBwcm94XCI6IFwi4qq4XCIsXG5cdFwic3VjY1wiOiBcIuKJu1wiLFxuXHRcInN1Y2NjdXJseWVxXCI6IFwi4om9XCIsXG5cdFwiU3VjY2VlZHNcIjogXCLiibtcIixcblx0XCJTdWNjZWVkc0VxdWFsXCI6IFwi4qqwXCIsXG5cdFwiU3VjY2VlZHNTbGFudEVxdWFsXCI6IFwi4om9XCIsXG5cdFwiU3VjY2VlZHNUaWxkZVwiOiBcIuKJv1wiLFxuXHRcInN1Y2NlcVwiOiBcIuKqsFwiLFxuXHRcInN1Y2NuYXBwcm94XCI6IFwi4qq6XCIsXG5cdFwic3VjY25lcXFcIjogXCLiqrZcIixcblx0XCJzdWNjbnNpbVwiOiBcIuKLqVwiLFxuXHRcInN1Y2NzaW1cIjogXCLiib9cIixcblx0XCJTdWNoVGhhdFwiOiBcIuKIi1wiLFxuXHRcInN1bVwiOiBcIuKIkVwiLFxuXHRcIlN1bVwiOiBcIuKIkVwiLFxuXHRcInN1bmdcIjogXCLimapcIixcblx0XCJzdXAxXCI6IFwiwrlcIixcblx0XCJzdXAyXCI6IFwiwrJcIixcblx0XCJzdXAzXCI6IFwiwrNcIixcblx0XCJzdXBcIjogXCLiioNcIixcblx0XCJTdXBcIjogXCLii5FcIixcblx0XCJzdXBkb3RcIjogXCLiqr5cIixcblx0XCJzdXBkc3ViXCI6IFwi4quYXCIsXG5cdFwic3VwRVwiOiBcIuKrhlwiLFxuXHRcInN1cGVcIjogXCLiiodcIixcblx0XCJzdXBlZG90XCI6IFwi4quEXCIsXG5cdFwiU3VwZXJzZXRcIjogXCLiioNcIixcblx0XCJTdXBlcnNldEVxdWFsXCI6IFwi4oqHXCIsXG5cdFwic3VwaHNvbFwiOiBcIuKfiVwiLFxuXHRcInN1cGhzdWJcIjogXCLiq5dcIixcblx0XCJzdXBsYXJyXCI6IFwi4qW7XCIsXG5cdFwic3VwbXVsdFwiOiBcIuKrglwiLFxuXHRcInN1cG5FXCI6IFwi4quMXCIsXG5cdFwic3VwbmVcIjogXCLiiotcIixcblx0XCJzdXBwbHVzXCI6IFwi4quAXCIsXG5cdFwic3Vwc2V0XCI6IFwi4oqDXCIsXG5cdFwiU3Vwc2V0XCI6IFwi4ouRXCIsXG5cdFwic3Vwc2V0ZXFcIjogXCLiiodcIixcblx0XCJzdXBzZXRlcXFcIjogXCLiq4ZcIixcblx0XCJzdXBzZXRuZXFcIjogXCLiiotcIixcblx0XCJzdXBzZXRuZXFxXCI6IFwi4quMXCIsXG5cdFwic3Vwc2ltXCI6IFwi4quIXCIsXG5cdFwic3Vwc3ViXCI6IFwi4quUXCIsXG5cdFwic3Vwc3VwXCI6IFwi4quWXCIsXG5cdFwic3dhcmhrXCI6IFwi4qSmXCIsXG5cdFwic3dhcnJcIjogXCLihplcIixcblx0XCJzd0FyclwiOiBcIuKHmVwiLFxuXHRcInN3YXJyb3dcIjogXCLihplcIixcblx0XCJzd253YXJcIjogXCLipKpcIixcblx0XCJzemxpZ1wiOiBcIsOfXCIsXG5cdFwiVGFiXCI6IFwiXFx0XCIsXG5cdFwidGFyZ2V0XCI6IFwi4oyWXCIsXG5cdFwiVGF1XCI6IFwizqRcIixcblx0XCJ0YXVcIjogXCLPhFwiLFxuXHRcInRicmtcIjogXCLijrRcIixcblx0XCJUY2Fyb25cIjogXCLFpFwiLFxuXHRcInRjYXJvblwiOiBcIsWlXCIsXG5cdFwiVGNlZGlsXCI6IFwixaJcIixcblx0XCJ0Y2VkaWxcIjogXCLFo1wiLFxuXHRcIlRjeVwiOiBcItCiXCIsXG5cdFwidGN5XCI6IFwi0YJcIixcblx0XCJ0ZG90XCI6IFwi4oObXCIsXG5cdFwidGVscmVjXCI6IFwi4oyVXCIsXG5cdFwiVGZyXCI6IFwi8J2Ul1wiLFxuXHRcInRmclwiOiBcIvCdlLFcIixcblx0XCJ0aGVyZTRcIjogXCLiiLRcIixcblx0XCJ0aGVyZWZvcmVcIjogXCLiiLRcIixcblx0XCJUaGVyZWZvcmVcIjogXCLiiLRcIixcblx0XCJUaGV0YVwiOiBcIs6YXCIsXG5cdFwidGhldGFcIjogXCLOuFwiLFxuXHRcInRoZXRhc3ltXCI6IFwiz5FcIixcblx0XCJ0aGV0YXZcIjogXCLPkVwiLFxuXHRcInRoaWNrYXBwcm94XCI6IFwi4omIXCIsXG5cdFwidGhpY2tzaW1cIjogXCLiiLxcIixcblx0XCJUaGlja1NwYWNlXCI6IFwi4oGf4oCKXCIsXG5cdFwiVGhpblNwYWNlXCI6IFwi4oCJXCIsXG5cdFwidGhpbnNwXCI6IFwi4oCJXCIsXG5cdFwidGhrYXBcIjogXCLiiYhcIixcblx0XCJ0aGtzaW1cIjogXCLiiLxcIixcblx0XCJUSE9STlwiOiBcIsOeXCIsXG5cdFwidGhvcm5cIjogXCLDvlwiLFxuXHRcInRpbGRlXCI6IFwiy5xcIixcblx0XCJUaWxkZVwiOiBcIuKIvFwiLFxuXHRcIlRpbGRlRXF1YWxcIjogXCLiiYNcIixcblx0XCJUaWxkZUZ1bGxFcXVhbFwiOiBcIuKJhVwiLFxuXHRcIlRpbGRlVGlsZGVcIjogXCLiiYhcIixcblx0XCJ0aW1lc2JhclwiOiBcIuKosVwiLFxuXHRcInRpbWVzYlwiOiBcIuKKoFwiLFxuXHRcInRpbWVzXCI6IFwiw5dcIixcblx0XCJ0aW1lc2RcIjogXCLiqLBcIixcblx0XCJ0aW50XCI6IFwi4oitXCIsXG5cdFwidG9lYVwiOiBcIuKkqFwiLFxuXHRcInRvcGJvdFwiOiBcIuKMtlwiLFxuXHRcInRvcGNpclwiOiBcIuKrsVwiLFxuXHRcInRvcFwiOiBcIuKKpFwiLFxuXHRcIlRvcGZcIjogXCLwnZWLXCIsXG5cdFwidG9wZlwiOiBcIvCdlaVcIixcblx0XCJ0b3Bmb3JrXCI6IFwi4quaXCIsXG5cdFwidG9zYVwiOiBcIuKkqVwiLFxuXHRcInRwcmltZVwiOiBcIuKAtFwiLFxuXHRcInRyYWRlXCI6IFwi4oSiXCIsXG5cdFwiVFJBREVcIjogXCLihKJcIixcblx0XCJ0cmlhbmdsZVwiOiBcIuKWtVwiLFxuXHRcInRyaWFuZ2xlZG93blwiOiBcIuKWv1wiLFxuXHRcInRyaWFuZ2xlbGVmdFwiOiBcIuKXg1wiLFxuXHRcInRyaWFuZ2xlbGVmdGVxXCI6IFwi4oq0XCIsXG5cdFwidHJpYW5nbGVxXCI6IFwi4omcXCIsXG5cdFwidHJpYW5nbGVyaWdodFwiOiBcIuKWuVwiLFxuXHRcInRyaWFuZ2xlcmlnaHRlcVwiOiBcIuKKtVwiLFxuXHRcInRyaWRvdFwiOiBcIuKXrFwiLFxuXHRcInRyaWVcIjogXCLiiZxcIixcblx0XCJ0cmltaW51c1wiOiBcIuKoulwiLFxuXHRcIlRyaXBsZURvdFwiOiBcIuKDm1wiLFxuXHRcInRyaXBsdXNcIjogXCLiqLlcIixcblx0XCJ0cmlzYlwiOiBcIuKnjVwiLFxuXHRcInRyaXRpbWVcIjogXCLiqLtcIixcblx0XCJ0cnBleml1bVwiOiBcIuKPolwiLFxuXHRcIlRzY3JcIjogXCLwnZKvXCIsXG5cdFwidHNjclwiOiBcIvCdk4lcIixcblx0XCJUU2N5XCI6IFwi0KZcIixcblx0XCJ0c2N5XCI6IFwi0YZcIixcblx0XCJUU0hjeVwiOiBcItCLXCIsXG5cdFwidHNoY3lcIjogXCLRm1wiLFxuXHRcIlRzdHJva1wiOiBcIsWmXCIsXG5cdFwidHN0cm9rXCI6IFwixadcIixcblx0XCJ0d2l4dFwiOiBcIuKJrFwiLFxuXHRcInR3b2hlYWRsZWZ0YXJyb3dcIjogXCLihp5cIixcblx0XCJ0d29oZWFkcmlnaHRhcnJvd1wiOiBcIuKGoFwiLFxuXHRcIlVhY3V0ZVwiOiBcIsOaXCIsXG5cdFwidWFjdXRlXCI6IFwiw7pcIixcblx0XCJ1YXJyXCI6IFwi4oaRXCIsXG5cdFwiVWFyclwiOiBcIuKGn1wiLFxuXHRcInVBcnJcIjogXCLih5FcIixcblx0XCJVYXJyb2NpclwiOiBcIuKliVwiLFxuXHRcIlVicmN5XCI6IFwi0I5cIixcblx0XCJ1YnJjeVwiOiBcItGeXCIsXG5cdFwiVWJyZXZlXCI6IFwixaxcIixcblx0XCJ1YnJldmVcIjogXCLFrVwiLFxuXHRcIlVjaXJjXCI6IFwiw5tcIixcblx0XCJ1Y2lyY1wiOiBcIsO7XCIsXG5cdFwiVWN5XCI6IFwi0KNcIixcblx0XCJ1Y3lcIjogXCLRg1wiLFxuXHRcInVkYXJyXCI6IFwi4oeFXCIsXG5cdFwiVWRibGFjXCI6IFwixbBcIixcblx0XCJ1ZGJsYWNcIjogXCLFsVwiLFxuXHRcInVkaGFyXCI6IFwi4qWuXCIsXG5cdFwidWZpc2h0XCI6IFwi4qW+XCIsXG5cdFwiVWZyXCI6IFwi8J2UmFwiLFxuXHRcInVmclwiOiBcIvCdlLJcIixcblx0XCJVZ3JhdmVcIjogXCLDmVwiLFxuXHRcInVncmF2ZVwiOiBcIsO5XCIsXG5cdFwidUhhclwiOiBcIuKlo1wiLFxuXHRcInVoYXJsXCI6IFwi4oa/XCIsXG5cdFwidWhhcnJcIjogXCLihr5cIixcblx0XCJ1aGJsa1wiOiBcIuKWgFwiLFxuXHRcInVsY29yblwiOiBcIuKMnFwiLFxuXHRcInVsY29ybmVyXCI6IFwi4oycXCIsXG5cdFwidWxjcm9wXCI6IFwi4oyPXCIsXG5cdFwidWx0cmlcIjogXCLil7hcIixcblx0XCJVbWFjclwiOiBcIsWqXCIsXG5cdFwidW1hY3JcIjogXCLFq1wiLFxuXHRcInVtbFwiOiBcIsKoXCIsXG5cdFwiVW5kZXJCYXJcIjogXCJfXCIsXG5cdFwiVW5kZXJCcmFjZVwiOiBcIuKPn1wiLFxuXHRcIlVuZGVyQnJhY2tldFwiOiBcIuKOtVwiLFxuXHRcIlVuZGVyUGFyZW50aGVzaXNcIjogXCLij51cIixcblx0XCJVbmlvblwiOiBcIuKLg1wiLFxuXHRcIlVuaW9uUGx1c1wiOiBcIuKKjlwiLFxuXHRcIlVvZ29uXCI6IFwixbJcIixcblx0XCJ1b2dvblwiOiBcIsWzXCIsXG5cdFwiVW9wZlwiOiBcIvCdlYxcIixcblx0XCJ1b3BmXCI6IFwi8J2VplwiLFxuXHRcIlVwQXJyb3dCYXJcIjogXCLipJJcIixcblx0XCJ1cGFycm93XCI6IFwi4oaRXCIsXG5cdFwiVXBBcnJvd1wiOiBcIuKGkVwiLFxuXHRcIlVwYXJyb3dcIjogXCLih5FcIixcblx0XCJVcEFycm93RG93bkFycm93XCI6IFwi4oeFXCIsXG5cdFwidXBkb3duYXJyb3dcIjogXCLihpVcIixcblx0XCJVcERvd25BcnJvd1wiOiBcIuKGlVwiLFxuXHRcIlVwZG93bmFycm93XCI6IFwi4oeVXCIsXG5cdFwiVXBFcXVpbGlicml1bVwiOiBcIuKlrlwiLFxuXHRcInVwaGFycG9vbmxlZnRcIjogXCLihr9cIixcblx0XCJ1cGhhcnBvb25yaWdodFwiOiBcIuKGvlwiLFxuXHRcInVwbHVzXCI6IFwi4oqOXCIsXG5cdFwiVXBwZXJMZWZ0QXJyb3dcIjogXCLihpZcIixcblx0XCJVcHBlclJpZ2h0QXJyb3dcIjogXCLihpdcIixcblx0XCJ1cHNpXCI6IFwiz4VcIixcblx0XCJVcHNpXCI6IFwiz5JcIixcblx0XCJ1cHNpaFwiOiBcIs+SXCIsXG5cdFwiVXBzaWxvblwiOiBcIs6lXCIsXG5cdFwidXBzaWxvblwiOiBcIs+FXCIsXG5cdFwiVXBUZWVBcnJvd1wiOiBcIuKGpVwiLFxuXHRcIlVwVGVlXCI6IFwi4oqlXCIsXG5cdFwidXB1cGFycm93c1wiOiBcIuKHiFwiLFxuXHRcInVyY29yblwiOiBcIuKMnVwiLFxuXHRcInVyY29ybmVyXCI6IFwi4oydXCIsXG5cdFwidXJjcm9wXCI6IFwi4oyOXCIsXG5cdFwiVXJpbmdcIjogXCLFrlwiLFxuXHRcInVyaW5nXCI6IFwixa9cIixcblx0XCJ1cnRyaVwiOiBcIuKXuVwiLFxuXHRcIlVzY3JcIjogXCLwnZKwXCIsXG5cdFwidXNjclwiOiBcIvCdk4pcIixcblx0XCJ1dGRvdFwiOiBcIuKLsFwiLFxuXHRcIlV0aWxkZVwiOiBcIsWoXCIsXG5cdFwidXRpbGRlXCI6IFwixalcIixcblx0XCJ1dHJpXCI6IFwi4pa1XCIsXG5cdFwidXRyaWZcIjogXCLilrRcIixcblx0XCJ1dWFyclwiOiBcIuKHiFwiLFxuXHRcIlV1bWxcIjogXCLDnFwiLFxuXHRcInV1bWxcIjogXCLDvFwiLFxuXHRcInV3YW5nbGVcIjogXCLipqdcIixcblx0XCJ2YW5ncnRcIjogXCLippxcIixcblx0XCJ2YXJlcHNpbG9uXCI6IFwiz7VcIixcblx0XCJ2YXJrYXBwYVwiOiBcIs+wXCIsXG5cdFwidmFybm90aGluZ1wiOiBcIuKIhVwiLFxuXHRcInZhcnBoaVwiOiBcIs+VXCIsXG5cdFwidmFycGlcIjogXCLPllwiLFxuXHRcInZhcnByb3B0b1wiOiBcIuKInVwiLFxuXHRcInZhcnJcIjogXCLihpVcIixcblx0XCJ2QXJyXCI6IFwi4oeVXCIsXG5cdFwidmFycmhvXCI6IFwiz7FcIixcblx0XCJ2YXJzaWdtYVwiOiBcIs+CXCIsXG5cdFwidmFyc3Vic2V0bmVxXCI6IFwi4oqK77iAXCIsXG5cdFwidmFyc3Vic2V0bmVxcVwiOiBcIuKri++4gFwiLFxuXHRcInZhcnN1cHNldG5lcVwiOiBcIuKKi++4gFwiLFxuXHRcInZhcnN1cHNldG5lcXFcIjogXCLiq4zvuIBcIixcblx0XCJ2YXJ0aGV0YVwiOiBcIs+RXCIsXG5cdFwidmFydHJpYW5nbGVsZWZ0XCI6IFwi4oqyXCIsXG5cdFwidmFydHJpYW5nbGVyaWdodFwiOiBcIuKKs1wiLFxuXHRcInZCYXJcIjogXCLiq6hcIixcblx0XCJWYmFyXCI6IFwi4qurXCIsXG5cdFwidkJhcnZcIjogXCLiq6lcIixcblx0XCJWY3lcIjogXCLQklwiLFxuXHRcInZjeVwiOiBcItCyXCIsXG5cdFwidmRhc2hcIjogXCLiiqJcIixcblx0XCJ2RGFzaFwiOiBcIuKKqFwiLFxuXHRcIlZkYXNoXCI6IFwi4oqpXCIsXG5cdFwiVkRhc2hcIjogXCLiiqtcIixcblx0XCJWZGFzaGxcIjogXCLiq6ZcIixcblx0XCJ2ZWViYXJcIjogXCLiirtcIixcblx0XCJ2ZWVcIjogXCLiiKhcIixcblx0XCJWZWVcIjogXCLii4FcIixcblx0XCJ2ZWVlcVwiOiBcIuKJmlwiLFxuXHRcInZlbGxpcFwiOiBcIuKLrlwiLFxuXHRcInZlcmJhclwiOiBcInxcIixcblx0XCJWZXJiYXJcIjogXCLigJZcIixcblx0XCJ2ZXJ0XCI6IFwifFwiLFxuXHRcIlZlcnRcIjogXCLigJZcIixcblx0XCJWZXJ0aWNhbEJhclwiOiBcIuKIo1wiLFxuXHRcIlZlcnRpY2FsTGluZVwiOiBcInxcIixcblx0XCJWZXJ0aWNhbFNlcGFyYXRvclwiOiBcIuKdmFwiLFxuXHRcIlZlcnRpY2FsVGlsZGVcIjogXCLiiYBcIixcblx0XCJWZXJ5VGhpblNwYWNlXCI6IFwi4oCKXCIsXG5cdFwiVmZyXCI6IFwi8J2UmVwiLFxuXHRcInZmclwiOiBcIvCdlLNcIixcblx0XCJ2bHRyaVwiOiBcIuKKslwiLFxuXHRcInZuc3ViXCI6IFwi4oqC4oOSXCIsXG5cdFwidm5zdXBcIjogXCLiioPig5JcIixcblx0XCJWb3BmXCI6IFwi8J2VjVwiLFxuXHRcInZvcGZcIjogXCLwnZWnXCIsXG5cdFwidnByb3BcIjogXCLiiJ1cIixcblx0XCJ2cnRyaVwiOiBcIuKKs1wiLFxuXHRcIlZzY3JcIjogXCLwnZKxXCIsXG5cdFwidnNjclwiOiBcIvCdk4tcIixcblx0XCJ2c3VibkVcIjogXCLiq4vvuIBcIixcblx0XCJ2c3VibmVcIjogXCLiiorvuIBcIixcblx0XCJ2c3VwbkVcIjogXCLiq4zvuIBcIixcblx0XCJ2c3VwbmVcIjogXCLiiovvuIBcIixcblx0XCJWdmRhc2hcIjogXCLiiqpcIixcblx0XCJ2emlnemFnXCI6IFwi4qaaXCIsXG5cdFwiV2NpcmNcIjogXCLFtFwiLFxuXHRcIndjaXJjXCI6IFwixbVcIixcblx0XCJ3ZWRiYXJcIjogXCLiqZ9cIixcblx0XCJ3ZWRnZVwiOiBcIuKIp1wiLFxuXHRcIldlZGdlXCI6IFwi4ouAXCIsXG5cdFwid2VkZ2VxXCI6IFwi4omZXCIsXG5cdFwid2VpZXJwXCI6IFwi4oSYXCIsXG5cdFwiV2ZyXCI6IFwi8J2UmlwiLFxuXHRcIndmclwiOiBcIvCdlLRcIixcblx0XCJXb3BmXCI6IFwi8J2VjlwiLFxuXHRcIndvcGZcIjogXCLwnZWoXCIsXG5cdFwid3BcIjogXCLihJhcIixcblx0XCJ3clwiOiBcIuKJgFwiLFxuXHRcIndyZWF0aFwiOiBcIuKJgFwiLFxuXHRcIldzY3JcIjogXCLwnZKyXCIsXG5cdFwid3NjclwiOiBcIvCdk4xcIixcblx0XCJ4Y2FwXCI6IFwi4ouCXCIsXG5cdFwieGNpcmNcIjogXCLil69cIixcblx0XCJ4Y3VwXCI6IFwi4ouDXCIsXG5cdFwieGR0cmlcIjogXCLilr1cIixcblx0XCJYZnJcIjogXCLwnZSbXCIsXG5cdFwieGZyXCI6IFwi8J2UtVwiLFxuXHRcInhoYXJyXCI6IFwi4p+3XCIsXG5cdFwieGhBcnJcIjogXCLin7pcIixcblx0XCJYaVwiOiBcIs6eXCIsXG5cdFwieGlcIjogXCLOvlwiLFxuXHRcInhsYXJyXCI6IFwi4p+1XCIsXG5cdFwieGxBcnJcIjogXCLin7hcIixcblx0XCJ4bWFwXCI6IFwi4p+8XCIsXG5cdFwieG5pc1wiOiBcIuKLu1wiLFxuXHRcInhvZG90XCI6IFwi4qiAXCIsXG5cdFwiWG9wZlwiOiBcIvCdlY9cIixcblx0XCJ4b3BmXCI6IFwi8J2VqVwiLFxuXHRcInhvcGx1c1wiOiBcIuKogVwiLFxuXHRcInhvdGltZVwiOiBcIuKoglwiLFxuXHRcInhyYXJyXCI6IFwi4p+2XCIsXG5cdFwieHJBcnJcIjogXCLin7lcIixcblx0XCJYc2NyXCI6IFwi8J2Ss1wiLFxuXHRcInhzY3JcIjogXCLwnZONXCIsXG5cdFwieHNxY3VwXCI6IFwi4qiGXCIsXG5cdFwieHVwbHVzXCI6IFwi4qiEXCIsXG5cdFwieHV0cmlcIjogXCLilrNcIixcblx0XCJ4dmVlXCI6IFwi4ouBXCIsXG5cdFwieHdlZGdlXCI6IFwi4ouAXCIsXG5cdFwiWWFjdXRlXCI6IFwiw51cIixcblx0XCJ5YWN1dGVcIjogXCLDvVwiLFxuXHRcIllBY3lcIjogXCLQr1wiLFxuXHRcInlhY3lcIjogXCLRj1wiLFxuXHRcIlljaXJjXCI6IFwixbZcIixcblx0XCJ5Y2lyY1wiOiBcIsW3XCIsXG5cdFwiWWN5XCI6IFwi0KtcIixcblx0XCJ5Y3lcIjogXCLRi1wiLFxuXHRcInllblwiOiBcIsKlXCIsXG5cdFwiWWZyXCI6IFwi8J2UnFwiLFxuXHRcInlmclwiOiBcIvCdlLZcIixcblx0XCJZSWN5XCI6IFwi0IdcIixcblx0XCJ5aWN5XCI6IFwi0ZdcIixcblx0XCJZb3BmXCI6IFwi8J2VkFwiLFxuXHRcInlvcGZcIjogXCLwnZWqXCIsXG5cdFwiWXNjclwiOiBcIvCdkrRcIixcblx0XCJ5c2NyXCI6IFwi8J2TjlwiLFxuXHRcIllVY3lcIjogXCLQrlwiLFxuXHRcInl1Y3lcIjogXCLRjlwiLFxuXHRcInl1bWxcIjogXCLDv1wiLFxuXHRcIll1bWxcIjogXCLFuFwiLFxuXHRcIlphY3V0ZVwiOiBcIsW5XCIsXG5cdFwiemFjdXRlXCI6IFwixbpcIixcblx0XCJaY2Fyb25cIjogXCLFvVwiLFxuXHRcInpjYXJvblwiOiBcIsW+XCIsXG5cdFwiWmN5XCI6IFwi0JdcIixcblx0XCJ6Y3lcIjogXCLQt1wiLFxuXHRcIlpkb3RcIjogXCLFu1wiLFxuXHRcInpkb3RcIjogXCLFvFwiLFxuXHRcInplZXRyZlwiOiBcIuKEqFwiLFxuXHRcIlplcm9XaWR0aFNwYWNlXCI6IFwi4oCLXCIsXG5cdFwiWmV0YVwiOiBcIs6WXCIsXG5cdFwiemV0YVwiOiBcIs62XCIsXG5cdFwiemZyXCI6IFwi8J2Ut1wiLFxuXHRcIlpmclwiOiBcIuKEqFwiLFxuXHRcIlpIY3lcIjogXCLQllwiLFxuXHRcInpoY3lcIjogXCLQtlwiLFxuXHRcInppZ3JhcnJcIjogXCLih51cIixcblx0XCJ6b3BmXCI6IFwi8J2Vq1wiLFxuXHRcIlpvcGZcIjogXCLihKRcIixcblx0XCJac2NyXCI6IFwi8J2StVwiLFxuXHRcInpzY3JcIjogXCLwnZOPXCIsXG5cdFwiendqXCI6IFwi4oCNXCIsXG5cdFwiendualwiOiBcIuKAjFwiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvblxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZW50aXR5TWFwID0gcmVxdWlyZShcIi4uL21hcHMvZW50aXRpZXMuanNvblwiKSxcbiAgICBsZWdhY3lNYXAgPSByZXF1aXJlKFwiLi4vbWFwcy9sZWdhY3kuanNvblwiKSxcbiAgICB4bWxNYXAgICAgPSByZXF1aXJlKFwiLi4vbWFwcy94bWwuanNvblwiKSxcbiAgICBkZWNvZGVDb2RlUG9pbnQgPSByZXF1aXJlKFwiLi9kZWNvZGVfY29kZXBvaW50LmpzXCIpO1xuXG52YXIgZGVjb2RlWE1MU3RyaWN0ICA9IGdldFN0cmljdERlY29kZXIoeG1sTWFwKSxcbiAgICBkZWNvZGVIVE1MU3RyaWN0ID0gZ2V0U3RyaWN0RGVjb2RlcihlbnRpdHlNYXApO1xuXG5mdW5jdGlvbiBnZXRTdHJpY3REZWNvZGVyKG1hcCl7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMobWFwKS5qb2luKFwifFwiKSxcblx0ICAgIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihtYXApO1xuXG5cdGtleXMgKz0gXCJ8I1t4WF1bXFxcXGRhLWZBLUZdK3wjXFxcXGQrXCI7XG5cblx0dmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMgKyBcIik7XCIsIFwiZ1wiKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc3RyKXtcblx0XHRyZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZSk7XG5cdH07XG59XG5cbnZhciBkZWNvZGVIVE1MID0gKGZ1bmN0aW9uKCl7XG5cdHZhciBsZWdhY3kgPSBPYmplY3Qua2V5cyhsZWdhY3lNYXApXG5cdFx0LnNvcnQoc29ydGVyKTtcblxuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0eU1hcClcblx0XHQuc29ydChzb3J0ZXIpO1xuXG5cdGZvcih2YXIgaSA9IDAsIGogPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG5cdFx0aWYobGVnYWN5W2pdID09PSBrZXlzW2ldKXtcblx0XHRcdGtleXNbaV0gKz0gXCI7P1wiO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRrZXlzW2ldICs9IFwiO1wiO1xuXHRcdH1cblx0fVxuXG5cdHZhciByZSA9IG5ldyBSZWdFeHAoXCImKD86XCIgKyBrZXlzLmpvaW4oXCJ8XCIpICsgXCJ8I1t4WF1bXFxcXGRhLWZBLUZdKzs/fCNcXFxcZCs7PylcIiwgXCJnXCIpLFxuXHQgICAgcmVwbGFjZSA9IGdldFJlcGxhY2VyKGVudGl0eU1hcCk7XG5cblx0ZnVuY3Rpb24gcmVwbGFjZXIoc3RyKXtcblx0XHRpZihzdHIuc3Vic3RyKC0xKSAhPT0gXCI7XCIpIHN0ciArPSBcIjtcIjtcblx0XHRyZXR1cm4gcmVwbGFjZShzdHIpO1xuXHR9XG5cblx0Ly9UT0RPIGNvbnNpZGVyIGNyZWF0aW5nIGEgbWVyZ2VkIG1hcFxuXHRyZXR1cm4gZnVuY3Rpb24oc3RyKXtcblx0XHRyZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZXIpO1xuXHR9O1xufSgpKTtcblxuZnVuY3Rpb24gc29ydGVyKGEsIGIpe1xuXHRyZXR1cm4gYSA8IGIgPyAxIDogLTE7XG59XG5cbmZ1bmN0aW9uIGdldFJlcGxhY2VyKG1hcCl7XG5cdHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHN0cil7XG5cdFx0aWYoc3RyLmNoYXJBdCgxKSA9PT0gXCIjXCIpe1xuXHRcdFx0aWYoc3RyLmNoYXJBdCgyKSA9PT0gXCJYXCIgfHwgc3RyLmNoYXJBdCgyKSA9PT0gXCJ4XCIpe1xuXHRcdFx0XHRyZXR1cm4gZGVjb2RlQ29kZVBvaW50KHBhcnNlSW50KHN0ci5zdWJzdHIoMyksIDE2KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGVjb2RlQ29kZVBvaW50KHBhcnNlSW50KHN0ci5zdWJzdHIoMiksIDEwKSk7XG5cdFx0fVxuXHRcdHJldHVybiBtYXBbc3RyLnNsaWNlKDEsIC0xKV07XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRYTUw6IGRlY29kZVhNTFN0cmljdCxcblx0SFRNTDogZGVjb2RlSFRNTCxcblx0SFRNTFN0cmljdDogZGVjb2RlSFRNTFN0cmljdFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBYWN1dGVcIjogXCLDgVwiLFxuXHRcImFhY3V0ZVwiOiBcIsOhXCIsXG5cdFwiQWNpcmNcIjogXCLDglwiLFxuXHRcImFjaXJjXCI6IFwiw6JcIixcblx0XCJhY3V0ZVwiOiBcIsK0XCIsXG5cdFwiQUVsaWdcIjogXCLDhlwiLFxuXHRcImFlbGlnXCI6IFwiw6ZcIixcblx0XCJBZ3JhdmVcIjogXCLDgFwiLFxuXHRcImFncmF2ZVwiOiBcIsOgXCIsXG5cdFwiYW1wXCI6IFwiJlwiLFxuXHRcIkFNUFwiOiBcIiZcIixcblx0XCJBcmluZ1wiOiBcIsOFXCIsXG5cdFwiYXJpbmdcIjogXCLDpVwiLFxuXHRcIkF0aWxkZVwiOiBcIsODXCIsXG5cdFwiYXRpbGRlXCI6IFwiw6NcIixcblx0XCJBdW1sXCI6IFwiw4RcIixcblx0XCJhdW1sXCI6IFwiw6RcIixcblx0XCJicnZiYXJcIjogXCLCplwiLFxuXHRcIkNjZWRpbFwiOiBcIsOHXCIsXG5cdFwiY2NlZGlsXCI6IFwiw6dcIixcblx0XCJjZWRpbFwiOiBcIsK4XCIsXG5cdFwiY2VudFwiOiBcIsKiXCIsXG5cdFwiY29weVwiOiBcIsKpXCIsXG5cdFwiQ09QWVwiOiBcIsKpXCIsXG5cdFwiY3VycmVuXCI6IFwiwqRcIixcblx0XCJkZWdcIjogXCLCsFwiLFxuXHRcImRpdmlkZVwiOiBcIsO3XCIsXG5cdFwiRWFjdXRlXCI6IFwiw4lcIixcblx0XCJlYWN1dGVcIjogXCLDqVwiLFxuXHRcIkVjaXJjXCI6IFwiw4pcIixcblx0XCJlY2lyY1wiOiBcIsOqXCIsXG5cdFwiRWdyYXZlXCI6IFwiw4hcIixcblx0XCJlZ3JhdmVcIjogXCLDqFwiLFxuXHRcIkVUSFwiOiBcIsOQXCIsXG5cdFwiZXRoXCI6IFwiw7BcIixcblx0XCJFdW1sXCI6IFwiw4tcIixcblx0XCJldW1sXCI6IFwiw6tcIixcblx0XCJmcmFjMTJcIjogXCLCvVwiLFxuXHRcImZyYWMxNFwiOiBcIsK8XCIsXG5cdFwiZnJhYzM0XCI6IFwiwr5cIixcblx0XCJndFwiOiBcIj5cIixcblx0XCJHVFwiOiBcIj5cIixcblx0XCJJYWN1dGVcIjogXCLDjVwiLFxuXHRcImlhY3V0ZVwiOiBcIsOtXCIsXG5cdFwiSWNpcmNcIjogXCLDjlwiLFxuXHRcImljaXJjXCI6IFwiw65cIixcblx0XCJpZXhjbFwiOiBcIsKhXCIsXG5cdFwiSWdyYXZlXCI6IFwiw4xcIixcblx0XCJpZ3JhdmVcIjogXCLDrFwiLFxuXHRcImlxdWVzdFwiOiBcIsK/XCIsXG5cdFwiSXVtbFwiOiBcIsOPXCIsXG5cdFwiaXVtbFwiOiBcIsOvXCIsXG5cdFwibGFxdW9cIjogXCLCq1wiLFxuXHRcImx0XCI6IFwiPFwiLFxuXHRcIkxUXCI6IFwiPFwiLFxuXHRcIm1hY3JcIjogXCLCr1wiLFxuXHRcIm1pY3JvXCI6IFwiwrVcIixcblx0XCJtaWRkb3RcIjogXCLCt1wiLFxuXHRcIm5ic3BcIjogXCLCoFwiLFxuXHRcIm5vdFwiOiBcIsKsXCIsXG5cdFwiTnRpbGRlXCI6IFwiw5FcIixcblx0XCJudGlsZGVcIjogXCLDsVwiLFxuXHRcIk9hY3V0ZVwiOiBcIsOTXCIsXG5cdFwib2FjdXRlXCI6IFwiw7NcIixcblx0XCJPY2lyY1wiOiBcIsOUXCIsXG5cdFwib2NpcmNcIjogXCLDtFwiLFxuXHRcIk9ncmF2ZVwiOiBcIsOSXCIsXG5cdFwib2dyYXZlXCI6IFwiw7JcIixcblx0XCJvcmRmXCI6IFwiwqpcIixcblx0XCJvcmRtXCI6IFwiwrpcIixcblx0XCJPc2xhc2hcIjogXCLDmFwiLFxuXHRcIm9zbGFzaFwiOiBcIsO4XCIsXG5cdFwiT3RpbGRlXCI6IFwiw5VcIixcblx0XCJvdGlsZGVcIjogXCLDtVwiLFxuXHRcIk91bWxcIjogXCLDllwiLFxuXHRcIm91bWxcIjogXCLDtlwiLFxuXHRcInBhcmFcIjogXCLCtlwiLFxuXHRcInBsdXNtblwiOiBcIsKxXCIsXG5cdFwicG91bmRcIjogXCLCo1wiLFxuXHRcInF1b3RcIjogXCJcXFwiXCIsXG5cdFwiUVVPVFwiOiBcIlxcXCJcIixcblx0XCJyYXF1b1wiOiBcIsK7XCIsXG5cdFwicmVnXCI6IFwiwq5cIixcblx0XCJSRUdcIjogXCLCrlwiLFxuXHRcInNlY3RcIjogXCLCp1wiLFxuXHRcInNoeVwiOiBcIsKtXCIsXG5cdFwic3VwMVwiOiBcIsK5XCIsXG5cdFwic3VwMlwiOiBcIsKyXCIsXG5cdFwic3VwM1wiOiBcIsKzXCIsXG5cdFwic3psaWdcIjogXCLDn1wiLFxuXHRcIlRIT1JOXCI6IFwiw55cIixcblx0XCJ0aG9yblwiOiBcIsO+XCIsXG5cdFwidGltZXNcIjogXCLDl1wiLFxuXHRcIlVhY3V0ZVwiOiBcIsOaXCIsXG5cdFwidWFjdXRlXCI6IFwiw7pcIixcblx0XCJVY2lyY1wiOiBcIsObXCIsXG5cdFwidWNpcmNcIjogXCLDu1wiLFxuXHRcIlVncmF2ZVwiOiBcIsOZXCIsXG5cdFwidWdyYXZlXCI6IFwiw7lcIixcblx0XCJ1bWxcIjogXCLCqFwiLFxuXHRcIlV1bWxcIjogXCLDnFwiLFxuXHRcInV1bWxcIjogXCLDvFwiLFxuXHRcIllhY3V0ZVwiOiBcIsOdXCIsXG5cdFwieWFjdXRlXCI6IFwiw71cIixcblx0XCJ5ZW5cIjogXCLCpVwiLFxuXHRcInl1bWxcIjogXCLDv1wiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvbGVnYWN5Lmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlY29kZU1hcCA9IHJlcXVpcmUoXCIuLi9tYXBzL2RlY29kZS5qc29uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZUNvZGVQb2ludDtcblxuLy8gbW9kaWZpZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iL21hc3Rlci9zcmMvaGUuanMjTDk0LUwxMTlcbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpe1xuXG5cdGlmKChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHx8IGNvZGVQb2ludCA+IDB4MTBGRkZGKXtcblx0XHRyZXR1cm4gXCJcXHVGRkZEXCI7XG5cdH1cblxuXHRpZihjb2RlUG9pbnQgaW4gZGVjb2RlTWFwKXtcblx0XHRjb2RlUG9pbnQgPSBkZWNvZGVNYXBbY29kZVBvaW50XTtcblx0fVxuXG5cdHZhciBvdXRwdXQgPSBcIlwiO1xuXG5cdGlmKGNvZGVQb2ludCA+IDB4RkZGRil7XG5cdFx0Y29kZVBvaW50IC09IDB4MTAwMDA7XG5cdFx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRjtcblx0fVxuXG5cdG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiMFwiOiA2NTUzMyxcblx0XCIxMjhcIjogODM2NCxcblx0XCIxMzBcIjogODIxOCxcblx0XCIxMzFcIjogNDAyLFxuXHRcIjEzMlwiOiA4MjIyLFxuXHRcIjEzM1wiOiA4MjMwLFxuXHRcIjEzNFwiOiA4MjI0LFxuXHRcIjEzNVwiOiA4MjI1LFxuXHRcIjEzNlwiOiA3MTAsXG5cdFwiMTM3XCI6IDgyNDAsXG5cdFwiMTM4XCI6IDM1Mixcblx0XCIxMzlcIjogODI0OSxcblx0XCIxNDBcIjogMzM4LFxuXHRcIjE0MlwiOiAzODEsXG5cdFwiMTQ1XCI6IDgyMTYsXG5cdFwiMTQ2XCI6IDgyMTcsXG5cdFwiMTQ3XCI6IDgyMjAsXG5cdFwiMTQ4XCI6IDgyMjEsXG5cdFwiMTQ5XCI6IDgyMjYsXG5cdFwiMTUwXCI6IDgyMTEsXG5cdFwiMTUxXCI6IDgyMTIsXG5cdFwiMTUyXCI6IDczMixcblx0XCIxNTNcIjogODQ4Mixcblx0XCIxNTRcIjogMzUzLFxuXHRcIjE1NVwiOiA4MjUwLFxuXHRcIjE1NlwiOiAzMzksXG5cdFwiMTU4XCI6IDM4Mixcblx0XCIxNTlcIjogMzc2XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZGVjb2RlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOb2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBub3JtYWxpemVSZWZlcmVuY2UgPSByZXF1aXJlKCcuL25vcm1hbGl6ZS1yZWZlcmVuY2UnKTtcblxudmFyIG5vcm1hbGl6ZVVSSSA9IGNvbW1vbi5ub3JtYWxpemVVUkk7XG52YXIgdW5lc2NhcGVTdHJpbmcgPSBjb21tb24udW5lc2NhcGVTdHJpbmc7XG52YXIgZnJvbUNvZGVQb2ludCA9IHJlcXVpcmUoJy4vZnJvbS1jb2RlLXBvaW50LmpzJyk7XG52YXIgZGVjb2RlSFRNTCA9IHJlcXVpcmUoJ2VudGl0aWVzJykuZGVjb2RlSFRNTDtcbnJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUucmVwZWF0Jyk7IC8vIFBvbHlmaWxsIGZvciBTdHJpbmcucHJvdG90eXBlLnJlcGVhdFxuXG4vLyBDb25zdGFudHMgZm9yIGNoYXJhY3RlciBjb2RlczpcblxudmFyIENfTkVXTElORSA9IDEwO1xudmFyIENfQVNURVJJU0sgPSA0MjtcbnZhciBDX1VOREVSU0NPUkUgPSA5NTtcbnZhciBDX0JBQ0tUSUNLID0gOTY7XG52YXIgQ19PUEVOX0JSQUNLRVQgPSA5MTtcbnZhciBDX0NMT1NFX0JSQUNLRVQgPSA5MztcbnZhciBDX0xFU1NUSEFOID0gNjA7XG52YXIgQ19CQU5HID0gMzM7XG52YXIgQ19CQUNLU0xBU0ggPSA5MjtcbnZhciBDX0FNUEVSU0FORCA9IDM4O1xudmFyIENfT1BFTl9QQVJFTiA9IDQwO1xudmFyIENfQ0xPU0VfUEFSRU4gPSA0MTtcbnZhciBDX0NPTE9OID0gNTg7XG52YXIgQ19TSU5HTEVRVU9URSA9IDM5O1xudmFyIENfRE9VQkxFUVVPVEUgPSAzNDtcblxuLy8gU29tZSByZWdleHBzIHVzZWQgaW4gaW5saW5lIHBhcnNlcjpcblxudmFyIEVTQ0FQQUJMRSA9IGNvbW1vbi5FU0NBUEFCTEU7XG52YXIgRVNDQVBFRF9DSEFSID0gJ1xcXFxcXFxcJyArIEVTQ0FQQUJMRTtcbnZhciBSRUdfQ0hBUiA9ICdbXlxcXFxcXFxcKClcXFxceDAwLVxcXFx4MjBdJztcbnZhciBJTl9QQVJFTlNfTk9TUCA9ICdcXFxcKCgnICsgUkVHX0NIQVIgKyAnfCcgKyBFU0NBUEVEX0NIQVIgKyAnfFxcXFxcXFxcKSpcXFxcKSc7XG5cbnZhciBFTlRJVFkgPSBjb21tb24uRU5USVRZO1xudmFyIHJlSHRtbFRhZyA9IGNvbW1vbi5yZUh0bWxUYWc7XG5cbnZhciByZVB1bmN0dWF0aW9uID0gbmV3IFJlZ0V4cCgvXltcXHUyMDAwLVxcdTIwNkZcXHUyRTAwLVxcdTJFN0ZcXFxcJyFcIiNcXCQlJlxcKFxcKVxcKlxcKyxcXC1cXC5cXC86Ozw9PlxcP0BcXFtcXF1cXF5fYFxce1xcfFxcfX5dLyk7XG5cbnZhciByZUxpbmtUaXRsZSA9IG5ldyBSZWdFeHAoXG4gICAgJ14oPzpcIignICsgRVNDQVBFRF9DSEFSICsgJ3xbXlwiXFxcXHgwMF0pKlwiJyArXG4gICAgICAgICd8JyArXG4gICAgICAgICdcXCcoJyArIEVTQ0FQRURfQ0hBUiArICd8W15cXCdcXFxceDAwXSkqXFwnJyArXG4gICAgICAgICd8JyArXG4gICAgICAgICdcXFxcKCgnICsgRVNDQVBFRF9DSEFSICsgJ3xbXilcXFxceDAwXSkqXFxcXCkpJyk7XG5cbnZhciByZUxpbmtEZXN0aW5hdGlvbkJyYWNlcyA9IG5ldyBSZWdFeHAoXG4gICAgJ14oPzpbPF0oPzpbXjw+XFxcXG5cXFxcXFxcXFxcXFx4MDBdJyArICd8JyArIEVTQ0FQRURfQ0hBUiArICd8JyArICdcXFxcXFxcXCkqWz5dKScpO1xuXG52YXIgcmVMaW5rRGVzdGluYXRpb24gPSBuZXcgUmVnRXhwKFxuICAgICdeKD86JyArIFJFR19DSEFSICsgJyt8JyArIEVTQ0FQRURfQ0hBUiArICd8XFxcXFxcXFx8JyArIElOX1BBUkVOU19OT1NQICsgJykqJyk7XG5cbnZhciByZUVzY2FwYWJsZSA9IG5ldyBSZWdFeHAoJ14nICsgRVNDQVBBQkxFKTtcblxudmFyIHJlRW50aXR5SGVyZSA9IG5ldyBSZWdFeHAoJ14nICsgRU5USVRZLCAnaScpO1xuXG52YXIgcmVUaWNrcyA9IC9gKy87XG5cbnZhciByZVRpY2tzSGVyZSA9IC9eYCsvO1xuXG52YXIgcmVFbGxpcHNlcyA9IC9cXC5cXC5cXC4vZztcblxudmFyIHJlRGFzaCA9IC8tLSsvZztcblxudmFyIHJlRW1haWxBdXRvbGluayA9IC9ePChbYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqKT4vO1xuXG52YXIgcmVBdXRvbGluayA9IC9ePCg/OmNvYXB8ZG9pfGphdmFzY3JpcHR8YWFhfGFhYXN8YWJvdXR8YWNhcHxjYXB8Y2lkfGNyaWR8ZGF0YXxkYXZ8ZGljdHxkbnN8ZmlsZXxmdHB8Z2VvfGdvfGdvcGhlcnxoMzIzfGh0dHB8aHR0cHN8aWF4fGljYXB8aW18aW1hcHxpbmZvfGlwcHxpcmlzfGlyaXMuYmVlcHxpcmlzLnhwY3xpcmlzLnhwY3N8aXJpcy5sd3p8bGRhcHxtYWlsdG98bWlkfG1zcnB8bXNycHN8bXRxcHxtdXBkYXRlfG5ld3N8bmZzfG5pfG5paHxubnRwfG9wYXF1ZWxvY2t0b2tlbnxwb3B8cHJlc3xydHNwfHNlcnZpY2V8c2Vzc2lvbnxzaHR0cHxzaWV2ZXxzaXB8c2lwc3xzbXN8c25tcHxzb2FwLmJlZXB8c29hcC5iZWVwc3x0YWd8dGVsfHRlbG5ldHx0ZnRwfHRoaXNtZXNzYWdlfHRuMzI3MHx0aXB8dHZ8dXJufHZlbW1pfHdzfHdzc3x4Y29ufHhjb24tdXNlcmlkfHhtbHJwYy5iZWVwfHhtbHJwYy5iZWVwc3x4bXBwfHozOS41MHJ8ejM5LjUwc3xhZGl1bXh0cmF8YWZwfGFmc3xhaW18YXB0fGF0dGFjaG1lbnR8YXd8YmVzaGFyZXxiaXRjb2lufGJvbG98Y2FsbHRvfGNocm9tZXxjaHJvbWUtZXh0ZW5zaW9ufGNvbS1ldmVudGJyaXRlLWF0dGVuZGVlfGNvbnRlbnR8Y3ZzfGRsbmEtcGxheXNpbmdsZXxkbG5hLXBsYXljb250YWluZXJ8ZHRufGR2YnxlZDJrfGZhY2V0aW1lfGZlZWR8ZmluZ2VyfGZpc2h8Z2d8Z2l0fGdpem1vcHJvamVjdHxndGFsa3xoY3B8aWNvbnxpcG58aXJjfGlyYzZ8aXJjc3xpdG1zfGphcnxqbXN8a2V5cGFyY3xsYXN0Zm18bGRhcHN8bWFnbmV0fG1hcHN8bWFya2V0fG1lc3NhZ2V8bW1zfG1zLWhlbHB8bXNuaW18bXVtYmxlfG12bnxub3Rlc3xvaWR8cGFsbXxwYXBhcmF6eml8cGxhdGZvcm18cHJveHl8cHN5Y3xxdWVyeXxyZXN8cmVzb3VyY2V8cm1pfHJzeW5jfHJ0bXB8c2Vjb25kbGlmZXxzZnRwfHNnbnxza3lwZXxzbWJ8c29sZGF0fHNwb3RpZnl8c3NofHN0ZWFtfHN2bnx0ZWFtc3BlYWt8dGhpbmdzfHVkcHx1bnJlYWx8dXQyMDA0fHZlbnRyaWxvfHZpZXctc291cmNlfHdlYmNhbHx3dGFpfHd5Y2l3eWd8eGZpcmV8eHJpfHltc2dyKTpbXjw+XFx4MDAtXFx4MjBdKj4vaTtcblxudmFyIHJlU3BubCA9IC9eICooPzpcXG4gKik/LztcblxudmFyIHJlV2hpdGVzcGFjZUNoYXIgPSAvXlxccy87XG5cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzKy9nO1xuXG52YXIgcmVGaW5hbFNwYWNlID0gLyAqJC87XG5cbnZhciByZUluaXRpYWxTcGFjZSA9IC9eICovO1xuXG52YXIgcmVTcGFjZUF0RW5kT2ZMaW5lID0gL14gKig/OlxcbnwkKS87XG5cbnZhciByZUxpbmtMYWJlbCA9IG5ldyBSZWdFeHAoJ15cXFxcWyg/OlteXFxcXFxcXFxcXFxcW1xcXFxdXXwnICsgRVNDQVBFRF9DSEFSICtcbiAgJ3xcXFxcXFxcXCl7MCwxMDAwfVxcXFxdJyk7XG5cbi8vIE1hdGNoZXMgYSBzdHJpbmcgb2Ygbm9uLXNwZWNpYWwgY2hhcmFjdGVycy5cbnZhciByZU1haW4gPSAvXlteXFxuYFxcW1xcXVxcXFwhPCYqXydcIl0rL207XG5cbnZhciB0ZXh0ID0gZnVuY3Rpb24ocykge1xuICAgIHZhciBub2RlID0gbmV3IE5vZGUoJ1RleHQnKTtcbiAgICBub2RlLl9saXRlcmFsID0gcztcbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbi8vIElOTElORSBQQVJTRVJcblxuLy8gVGhlc2UgYXJlIG1ldGhvZHMgb2YgYW4gSW5saW5lUGFyc2VyIG9iamVjdCwgZGVmaW5lZCBiZWxvdy5cbi8vIEFuIElubGluZVBhcnNlciBrZWVwcyB0cmFjayBvZiBhIHN1YmplY3QgKGEgc3RyaW5nIHRvIGJlXG4vLyBwYXJzZWQpIGFuZCBhIHBvc2l0aW9uIGluIHRoYXQgc3ViamVjdC5cblxuLy8gSWYgcmUgbWF0Y2hlcyBhdCBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBzdWJqZWN0LCBhZHZhbmNlXG4vLyBwb3NpdGlvbiBpbiBzdWJqZWN0IGFuZCByZXR1cm4gdGhlIG1hdGNoOyBvdGhlcndpc2UgcmV0dXJuIG51bGwuXG52YXIgbWF0Y2ggPSBmdW5jdGlvbihyZSkge1xuICAgIHZhciBtID0gcmUuZXhlYyh0aGlzLnN1YmplY3Quc2xpY2UodGhpcy5wb3MpKTtcbiAgICBpZiAobSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcyArPSBtLmluZGV4ICsgbVswXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBtWzBdO1xuICAgIH1cbn07XG5cbi8vIFJldHVybnMgdGhlIGNvZGUgZm9yIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGN1cnJlbnQgc3ViamVjdCBwb3NpdGlvbiwgb3IgLTFcbi8vIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMuXG52YXIgcGVlayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvcyA8IHRoaXMuc3ViamVjdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufTtcblxuLy8gUGFyc2UgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnMsIGluY2x1ZGluZyBhdCBtb3N0IG9uZSBuZXdsaW5lXG52YXIgc3BubCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWF0Y2gocmVTcG5sKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEFsbCBvZiB0aGUgcGFyc2VycyBiZWxvdyB0cnkgdG8gbWF0Y2ggc29tZXRoaW5nIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4vLyBpbiB0aGUgc3ViamVjdC4gIElmIHRoZXkgc3VjY2VlZCBpbiBtYXRjaGluZyBhbnl0aGluZywgdGhleVxuLy8gcmV0dXJuIHRoZSBpbmxpbmUgbWF0Y2hlZCwgYWR2YW5jaW5nIHRoZSBzdWJqZWN0LlxuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGJhY2t0aWNrcywgYWRkaW5nIGVpdGhlciBhIGJhY2t0aWNrIGNvZGUgc3BhbiBvciBhXG4vLyBsaXRlcmFsIHNlcXVlbmNlIG9mIGJhY2t0aWNrcy5cbnZhciBwYXJzZUJhY2t0aWNrcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHRpY2tzID0gdGhpcy5tYXRjaChyZVRpY2tzSGVyZSk7XG4gICAgaWYgKHRpY2tzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGFmdGVyT3BlblRpY2tzID0gdGhpcy5wb3M7XG4gICAgdmFyIG1hdGNoZWQ7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKChtYXRjaGVkID0gdGhpcy5tYXRjaChyZVRpY2tzKSkgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG1hdGNoZWQgPT09IHRpY2tzKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUoJ0NvZGUnKTtcbiAgICAgICAgICAgIG5vZGUuX2xpdGVyYWwgPSB0aGlzLnN1YmplY3Quc2xpY2UoYWZ0ZXJPcGVuVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgLSB0aWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKCkucmVwbGFjZShyZVdoaXRlc3BhY2UsICcgJyk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIGdvdCBoZXJlLCB3ZSBkaWRuJ3QgbWF0Y2ggYSBjbG9zaW5nIGJhY2t0aWNrIHNlcXVlbmNlLlxuICAgIHRoaXMucG9zID0gYWZ0ZXJPcGVuVGlja3M7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCh0aWNrcykpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gUGFyc2UgYSBiYWNrc2xhc2gtZXNjYXBlZCBzcGVjaWFsIGNoYXJhY3RlciwgYWRkaW5nIGVpdGhlciB0aGUgZXNjYXBlZFxuLy8gY2hhcmFjdGVyLCBhIGhhcmQgbGluZSBicmVhayAoaWYgdGhlIGJhY2tzbGFzaCBpcyBmb2xsb3dlZCBieSBhIG5ld2xpbmUpLFxuLy8gb3IgYSBsaXRlcmFsIGJhY2tzbGFzaCB0byB0aGUgYmxvY2sncyBjaGlsZHJlbi4gIEFzc3VtZXMgY3VycmVudCBjaGFyYWN0ZXJcbi8vIGlzIGEgYmFja3NsYXNoLlxudmFyIHBhcnNlQmFja3NsYXNoID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3ViaiA9IHRoaXMuc3ViamVjdDtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnSGFyZGJyZWFrJyk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAocmVFc2NhcGFibGUudGVzdChzdWJqLmNoYXJBdCh0aGlzLnBvcykpKSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoc3Viai5jaGFyQXQodGhpcy5wb3MpKSk7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnXFxcXCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGFuIGF1dG9saW5rIChVUkwgb3IgZW1haWwgaW4gcG9pbnR5IGJyYWNrZXRzKS5cbnZhciBwYXJzZUF1dG9saW5rID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbTtcbiAgICB2YXIgZGVzdDtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlRW1haWxBdXRvbGluaykpKSB7XG4gICAgICAgIGRlc3QgPSBtLnNsaWNlKDEsIG0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnTGluaycpO1xuICAgICAgICBub2RlLl9kZXN0aW5hdGlvbiA9IG5vcm1hbGl6ZVVSSSgnbWFpbHRvOicgKyBkZXN0KTtcbiAgICAgICAgbm9kZS5fdGl0bGUgPSAnJztcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0KGRlc3QpKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlQXV0b2xpbmspKSkge1xuICAgICAgICBkZXN0ID0gbS5zbGljZSgxLCBtLmxlbmd0aCAtIDEpO1xuICAgICAgICBub2RlID0gbmV3IE5vZGUoJ0xpbmsnKTtcbiAgICAgICAgbm9kZS5fZGVzdGluYXRpb24gPSBub3JtYWxpemVVUkkoZGVzdCk7XG4gICAgICAgIG5vZGUuX3RpdGxlID0gJyc7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dChkZXN0KSk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhIHJhdyBIVE1MIHRhZy5cbnZhciBwYXJzZUh0bWxUYWcgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtID0gdGhpcy5tYXRjaChyZUh0bWxUYWcpO1xuICAgIGlmIChtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKCdIdG1sJyk7XG4gICAgICAgIG5vZGUuX2xpdGVyYWwgPSBtO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuLy8gU2NhbiBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgd2l0aCBjb2RlIGNjLCBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0XG4vLyB0aGUgbnVtYmVyIG9mIGRlbGltaXRlcnMgYW5kIHdoZXRoZXIgdGhleSBhcmUgcG9zaXRpb25lZCBzdWNoIHRoYXRcbi8vIHRoZXkgY2FuIG9wZW4gYW5kL29yIGNsb3NlIGVtcGhhc2lzIG9yIHN0cm9uZyBlbXBoYXNpcy4gIEEgdXRpbGl0eVxuLy8gZnVuY3Rpb24gZm9yIHN0cm9uZy9lbXBoIHBhcnNpbmcuXG52YXIgc2NhbkRlbGltcyA9IGZ1bmN0aW9uKGNjKSB7XG4gICAgdmFyIG51bWRlbGltcyA9IDA7XG4gICAgdmFyIGNoYXJfYmVmb3JlLCBjaGFyX2FmdGVyLCBjY19hZnRlcjtcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB2YXIgbGVmdF9mbGFua2luZywgcmlnaHRfZmxhbmtpbmcsIGNhbl9vcGVuLCBjYW5fY2xvc2U7XG4gICAgdmFyIGFmdGVyX2lzX3doaXRlc3BhY2UsIGFmdGVyX2lzX3B1bmN0dWF0aW9uLCBiZWZvcmVfaXNfd2hpdGVzcGFjZSwgYmVmb3JlX2lzX3B1bmN0dWF0aW9uO1xuXG4gICAgaWYgKGNjID09PSBDX1NJTkdMRVFVT1RFIHx8IGNjID09PSBDX0RPVUJMRVFVT1RFKSB7XG4gICAgICAgIG51bWRlbGltcysrO1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSA9PT0gY2MpIHtcbiAgICAgICAgICAgIG51bWRlbGltcysrO1xuICAgICAgICAgICAgdGhpcy5wb3MrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW1kZWxpbXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhcl9iZWZvcmUgPSBzdGFydHBvcyA9PT0gMCA/ICdcXG4nIDogdGhpcy5zdWJqZWN0LmNoYXJBdChzdGFydHBvcyAtIDEpO1xuXG4gICAgY2NfYWZ0ZXIgPSB0aGlzLnBlZWsoKTtcbiAgICBpZiAoY2NfYWZ0ZXIgPT09IC0xKSB7XG4gICAgICAgIGNoYXJfYWZ0ZXIgPSAnXFxuJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyX2FmdGVyID0gZnJvbUNvZGVQb2ludChjY19hZnRlcik7XG4gICAgfVxuXG4gICAgYWZ0ZXJfaXNfd2hpdGVzcGFjZSA9IHJlV2hpdGVzcGFjZUNoYXIudGVzdChjaGFyX2FmdGVyKTtcbiAgICBhZnRlcl9pc19wdW5jdHVhdGlvbiA9IHJlUHVuY3R1YXRpb24udGVzdChjaGFyX2FmdGVyKTtcbiAgICBiZWZvcmVfaXNfd2hpdGVzcGFjZSA9IHJlV2hpdGVzcGFjZUNoYXIudGVzdChjaGFyX2JlZm9yZSk7XG4gICAgYmVmb3JlX2lzX3B1bmN0dWF0aW9uID0gcmVQdW5jdHVhdGlvbi50ZXN0KGNoYXJfYmVmb3JlKTtcblxuICAgIGxlZnRfZmxhbmtpbmcgPSAhYWZ0ZXJfaXNfd2hpdGVzcGFjZSAmJlxuICAgICAgICAgICAgIShhZnRlcl9pc19wdW5jdHVhdGlvbiAmJiAhYmVmb3JlX2lzX3doaXRlc3BhY2UgJiYgIWJlZm9yZV9pc19wdW5jdHVhdGlvbik7XG4gICAgcmlnaHRfZmxhbmtpbmcgPSAhYmVmb3JlX2lzX3doaXRlc3BhY2UgJiZcbiAgICAgICAgICAgICEoYmVmb3JlX2lzX3B1bmN0dWF0aW9uICYmICFhZnRlcl9pc193aGl0ZXNwYWNlICYmICFhZnRlcl9pc19wdW5jdHVhdGlvbik7XG4gICAgaWYgKGNjID09PSBDX1VOREVSU0NPUkUpIHtcbiAgICAgICAgY2FuX29wZW4gPSBsZWZ0X2ZsYW5raW5nICYmXG4gICAgICAgICAgICAoIXJpZ2h0X2ZsYW5raW5nIHx8IGJlZm9yZV9pc19wdW5jdHVhdGlvbik7XG4gICAgICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nICYmXG4gICAgICAgICAgICAoIWxlZnRfZmxhbmtpbmcgfHwgYWZ0ZXJfaXNfcHVuY3R1YXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbl9vcGVuID0gbGVmdF9mbGFua2luZztcbiAgICAgICAgY2FuX2Nsb3NlID0gcmlnaHRfZmxhbmtpbmc7XG4gICAgfVxuICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgcmV0dXJuIHsgbnVtZGVsaW1zOiBudW1kZWxpbXMsXG4gICAgICAgICAgICAgY2FuX29wZW46IGNhbl9vcGVuLFxuICAgICAgICAgICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlIH07XG59O1xuXG4vLyBIYW5kbGUgYSBkZWxpbWl0ZXIgbWFya2VyIGZvciBlbXBoYXNpcyBvciBhIHF1b3RlLlxudmFyIGhhbmRsZURlbGltID0gZnVuY3Rpb24oY2MsIGJsb2NrKSB7XG4gICAgdmFyIHJlcyA9IHRoaXMuc2NhbkRlbGltcyhjYyk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbnVtZGVsaW1zID0gcmVzLm51bWRlbGltcztcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB2YXIgY29udGVudHM7XG5cbiAgICB0aGlzLnBvcyArPSBudW1kZWxpbXM7XG4gICAgaWYgKGNjID09PSBDX1NJTkdMRVFVT1RFKSB7XG4gICAgICAgIGNvbnRlbnRzID0gXCJcXHUyMDE5XCI7XG4gICAgfSBlbHNlIGlmIChjYyA9PT0gQ19ET1VCTEVRVU9URSkge1xuICAgICAgICBjb250ZW50cyA9IFwiXFx1MjAxQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRzID0gdGhpcy5zdWJqZWN0LnNsaWNlKHN0YXJ0cG9zLCB0aGlzLnBvcyk7XG4gICAgfVxuICAgIHZhciBub2RlID0gdGV4dChjb250ZW50cyk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAvLyBBZGQgZW50cnkgdG8gc3RhY2sgZm9yIHRoaXMgb3BlbmVyXG4gICAgdGhpcy5kZWxpbWl0ZXJzID0geyBjYzogY2MsXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1kZWxpbXM6IG51bWRlbGltcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogdGhpcy5kZWxpbWl0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9vcGVuOiByZXMuY2FuX29wZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5fY2xvc2U6IHJlcy5jYW5fY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUgfTtcbiAgICBpZiAodGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cy5uZXh0ID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG59O1xuXG52YXIgcmVtb3ZlRGVsaW1pdGVyID0gZnVuY3Rpb24oZGVsaW0pIHtcbiAgICBpZiAoZGVsaW0ucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgZGVsaW0ucHJldmlvdXMubmV4dCA9IGRlbGltLm5leHQ7XG4gICAgfVxuICAgIGlmIChkZWxpbS5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgIC8vIHRvcCBvZiBzdGFja1xuICAgICAgICB0aGlzLmRlbGltaXRlcnMgPSBkZWxpbS5wcmV2aW91cztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWxpbS5uZXh0LnByZXZpb3VzID0gZGVsaW0ucHJldmlvdXM7XG4gICAgfVxufTtcblxudmFyIHJlbW92ZURlbGltaXRlcnNCZXR3ZWVuID0gZnVuY3Rpb24oYm90dG9tLCB0b3ApIHtcbiAgICBpZiAoYm90dG9tLm5leHQgIT09IHRvcCkge1xuICAgICAgICBib3R0b20ubmV4dCA9IHRvcDtcbiAgICAgICAgdG9wLnByZXZpb3VzID0gYm90dG9tO1xuICAgIH1cbn07XG5cbnZhciBwcm9jZXNzRW1waGFzaXMgPSBmdW5jdGlvbihzdGFja19ib3R0b20pIHtcbiAgICB2YXIgb3BlbmVyLCBjbG9zZXIsIG9sZF9jbG9zZXI7XG4gICAgdmFyIG9wZW5lcl9pbmwsIGNsb3Nlcl9pbmw7XG4gICAgdmFyIHRlbXBzdGFjaztcbiAgICB2YXIgdXNlX2RlbGltcztcbiAgICB2YXIgdG1wLCBuZXh0O1xuICAgIHZhciBvcGVuZXJfZm91bmQ7XG4gICAgdmFyIG9wZW5lcnNfYm90dG9tID0gW107XG5cbiAgICBvcGVuZXJzX2JvdHRvbVtDX1VOREVSU0NPUkVdID0gc3RhY2tfYm90dG9tO1xuICAgIG9wZW5lcnNfYm90dG9tW0NfQVNURVJJU0tdID0gc3RhY2tfYm90dG9tO1xuICAgIG9wZW5lcnNfYm90dG9tW0NfU0lOR0xFUVVPVEVdID0gc3RhY2tfYm90dG9tO1xuICAgIG9wZW5lcnNfYm90dG9tW0NfRE9VQkxFUVVPVEVdID0gc3RhY2tfYm90dG9tO1xuXG4gICAgLy8gZmluZCBmaXJzdCBjbG9zZXIgYWJvdmUgc3RhY2tfYm90dG9tOlxuICAgIGNsb3NlciA9IHRoaXMuZGVsaW1pdGVycztcbiAgICB3aGlsZSAoY2xvc2VyICE9PSBudWxsICYmIGNsb3Nlci5wcmV2aW91cyAhPT0gc3RhY2tfYm90dG9tKSB7XG4gICAgICAgIGNsb3NlciA9IGNsb3Nlci5wcmV2aW91cztcbiAgICB9XG4gICAgLy8gbW92ZSBmb3J3YXJkLCBsb29raW5nIGZvciBjbG9zZXJzLCBhbmQgaGFuZGxpbmcgZWFjaFxuICAgIHdoaWxlIChjbG9zZXIgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGNsb3NlcmNjID0gY2xvc2VyLmNjO1xuICAgICAgICBpZiAoIShjbG9zZXIuY2FuX2Nsb3NlICYmIChjbG9zZXJjYyA9PT0gQ19VTkRFUlNDT1JFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlcmNjID09PSBDX0FTVEVSSVNLIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlcmNjID09PSBDX1NJTkdMRVFVT1RFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlcmNjID09PSBDX0RPVUJMRVFVT1RFKSkpIHtcbiAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm91bmQgZW1waGFzaXMgY2xvc2VyLiBub3cgbG9vayBiYWNrIGZvciBmaXJzdCBtYXRjaGluZyBvcGVuZXI6XG4gICAgICAgICAgICBvcGVuZXIgPSBjbG9zZXIucHJldmlvdXM7XG4gICAgICAgICAgICBvcGVuZXJfZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlIChvcGVuZXIgIT09IG51bGwgJiYgb3BlbmVyICE9PSBzdGFja19ib3R0b20gJiZcbiAgICAgICAgICAgICAgICAgICBvcGVuZXIgIT09IG9wZW5lcnNfYm90dG9tW2Nsb3NlcmNjXSkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZXIuY2MgPT09IGNsb3Nlci5jYyAmJiBvcGVuZXIuY2FuX29wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wZW5lciA9IG9wZW5lci5wcmV2aW91cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9sZF9jbG9zZXIgPSBjbG9zZXI7XG5cbiAgICAgICAgICAgIGlmIChjbG9zZXJjYyA9PT0gQ19BU1RFUklTSyB8fCBjbG9zZXJjYyA9PT0gQ19VTkRFUlNDT1JFKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcGVuZXJfZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGFjdHVhbCBudW1iZXIgb2YgZGVsaW1pdGVycyB1c2VkIGZyb20gY2xvc2VyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXIubnVtZGVsaW1zIDwgMyB8fCBvcGVuZXIubnVtZGVsaW1zIDwgMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX2RlbGltcyA9IGNsb3Nlci5udW1kZWxpbXMgPD0gb3BlbmVyLm51bWRlbGltcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyLm51bWRlbGltcyA6IG9wZW5lci5udW1kZWxpbXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VfZGVsaW1zID0gY2xvc2VyLm51bWRlbGltcyAlIDIgPT09IDAgPyAyIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwgPSBvcGVuZXIubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubCA9IGNsb3Nlci5ub2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB1c2VkIGRlbGltaXRlcnMgZnJvbSBzdGFjayBlbHRzIGFuZCBpbmxpbmVzXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lci5udW1kZWxpbXMgLT0gdXNlX2RlbGltcztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyLm51bWRlbGltcyAtPSB1c2VfZGVsaW1zO1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLl9saXRlcmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuX2xpdGVyYWwuc2xpY2UoMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5fbGl0ZXJhbC5sZW5ndGggLSB1c2VfZGVsaW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC5fbGl0ZXJhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sLl9saXRlcmFsLnNsaWNlKDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwuX2xpdGVyYWwubGVuZ3RoIC0gdXNlX2RlbGltcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgY29udGVudHMgZm9yIG5ldyBlbXBoIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtcGggPSBuZXcgTm9kZSh1c2VfZGVsaW1zID09PSAxID8gJ0VtcGgnIDogJ1N0cm9uZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9IG9wZW5lcl9pbmwuX25leHQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0bXAgJiYgdG1wICE9PSBjbG9zZXJfaW5sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdG1wLl9uZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnVubGluaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1waC5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuaW5zZXJ0QWZ0ZXIoZW1waCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGVsdHMgYmV0d2VlbiBvcGVuZXIgYW5kIGNsb3NlciBpbiBkZWxpbWl0ZXJzIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURlbGltaXRlcnNCZXR3ZWVuKG9wZW5lciwgY2xvc2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBvcGVuZXIgaGFzIDAgZGVsaW1zLCByZW1vdmUgaXQgYW5kIHRoZSBpbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lci5udW1kZWxpbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwudW5saW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvcGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlci5udW1kZWxpbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwudW5saW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wc3RhY2sgPSBjbG9zZXIubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKGNsb3Nlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXIgPSB0ZW1wc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZXJjYyA9PT0gQ19TSU5HTEVRVU9URSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlci5ub2RlLl9saXRlcmFsID0gXCJcXHUyMDE5XCI7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXIubm9kZS5fbGl0ZXJhbCA9IFwiXFx1MjAxOFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZXIgPSBjbG9zZXIubmV4dDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZXJjYyA9PT0gQ19ET1VCTEVRVU9URSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlci5ub2RlLl9saXRlcmFsID0gXCJcXHUyMDFEXCI7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXIubm9kZS5saXRlcmFsID0gXCJcXHUyMDFDXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBsb3dlciBib3VuZCBmb3IgZnV0dXJlIHNlYXJjaGVzIGZvciBvcGVuZXJzOlxuICAgICAgICAgICAgICAgIG9wZW5lcnNfYm90dG9tW2Nsb3NlcmNjXSA9IG9sZF9jbG9zZXIucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgaWYgKCFvbGRfY2xvc2VyLmNhbl9vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiByZW1vdmUgYSBjbG9zZXIgdGhhdCBjYW4ndCBiZSBhbiBvcGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uY2Ugd2UndmUgc2VlbiB0aGVyZSdzIG5vIG1hdGNoaW5nIG9wZW5lcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIob2xkX2Nsb3Nlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGRlbGltaXRlcnNcbiAgICB3aGlsZSAodGhpcy5kZWxpbWl0ZXJzICE9PSBudWxsICYmIHRoaXMuZGVsaW1pdGVycyAhPT0gc3RhY2tfYm90dG9tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKHRoaXMuZGVsaW1pdGVycyk7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBsaW5rIHRpdGxlIChzYW5zIHF1b3RlcyksIHJldHVybmluZyB0aGUgc3RyaW5nXG4vLyBvciBudWxsIGlmIG5vIG1hdGNoLlxudmFyIHBhcnNlTGlua1RpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpdGxlID0gdGhpcy5tYXRjaChyZUxpbmtUaXRsZSk7XG4gICAgaWYgKHRpdGxlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNob3Agb2ZmIHF1b3RlcyBmcm9tIHRpdGxlIGFuZCB1bmVzY2FwZTpcbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlU3RyaW5nKHRpdGxlLnN1YnN0cigxLCB0aXRsZS5sZW5ndGggLSAyKSk7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBsaW5rIGRlc3RpbmF0aW9uLCByZXR1cm5pbmcgdGhlIHN0cmluZyBvclxuLy8gbnVsbCBpZiBubyBtYXRjaC5cbnZhciBwYXJzZUxpbmtEZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXMgPSB0aGlzLm1hdGNoKHJlTGlua0Rlc3RpbmF0aW9uQnJhY2VzKTtcbiAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgIHJlcyA9IHRoaXMubWF0Y2gocmVMaW5rRGVzdGluYXRpb24pO1xuICAgICAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVVUkkodW5lc2NhcGVTdHJpbmcocmVzKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAgLy8gY2hvcCBvZmYgc3Vycm91bmRpbmcgPC4uPjpcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVSSSh1bmVzY2FwZVN0cmluZyhyZXMuc3Vic3RyKDEsIHJlcy5sZW5ndGggLSAyKSkpO1xuICAgIH1cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYSBsaW5rIGxhYmVsLCByZXR1cm5pbmcgbnVtYmVyIG9mIGNoYXJhY3RlcnMgcGFyc2VkLlxudmFyIHBhcnNlTGlua0xhYmVsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG0gPSB0aGlzLm1hdGNoKHJlTGlua0xhYmVsKTtcbiAgICBpZiAobSA9PT0gbnVsbCB8fCBtLmxlbmd0aCA+IDEwMDEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG0ubGVuZ3RoO1xuICAgIH1cbn07XG5cbi8vIEFkZCBvcGVuIGJyYWNrZXQgdG8gZGVsaW1pdGVyIHN0YWNrIGFuZCBhZGQgYSB0ZXh0IG5vZGUgdG8gYmxvY2sncyBjaGlsZHJlbi5cbnZhciBwYXJzZU9wZW5CcmFja2V0ID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB0aGlzLnBvcyArPSAxO1xuXG4gICAgdmFyIG5vZGUgPSB0ZXh0KCdbJyk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAvLyBBZGQgZW50cnkgdG8gc3RhY2sgZm9yIHRoaXMgb3BlbmVyXG4gICAgdGhpcy5kZWxpbWl0ZXJzID0geyBjYzogQ19PUEVOX0JSQUNLRVQsXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1kZWxpbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHRoaXMuZGVsaW1pdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5fb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9jbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnRwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUgfTtcbiAgICBpZiAodGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cy5uZXh0ID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG59O1xuXG4vLyBJRiBuZXh0IGNoYXJhY3RlciBpcyBbLCBhbmQgISBkZWxpbWl0ZXIgdG8gZGVsaW1pdGVyIHN0YWNrIGFuZFxuLy8gYWRkIGEgdGV4dCBub2RlIHRvIGJsb2NrJ3MgY2hpbGRyZW4uICBPdGhlcndpc2UganVzdCBhZGQgYSB0ZXh0IG5vZGUuXG52YXIgcGFyc2VCYW5nID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19PUEVOX0JSQUNLRVQpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcblxuICAgICAgICB2YXIgbm9kZSA9IHRleHQoJyFbJyk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAgIC8vIEFkZCBlbnRyeSB0byBzdGFjayBmb3IgdGhpcyBvcGVuZXJcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzID0geyBjYzogQ19CQU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWRlbGltczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiB0aGlzLmRlbGltaXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5fb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5fY2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydHBvcyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlIH07XG4gICAgICAgIGlmICh0aGlzLmRlbGltaXRlcnMucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cy5uZXh0ID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnIScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBUcnkgdG8gbWF0Y2ggY2xvc2UgYnJhY2tldCBhZ2FpbnN0IGFuIG9wZW5pbmcgaW4gdGhlIGRlbGltaXRlclxuLy8gc3RhY2suICBBZGQgZWl0aGVyIGEgbGluayBvciBpbWFnZSwgb3IgYSBwbGFpbiBbIGNoYXJhY3Rlcixcbi8vIHRvIGJsb2NrJ3MgY2hpbGRyZW4uICBJZiB0aGVyZSBpcyBhIG1hdGNoaW5nIGRlbGltaXRlcixcbi8vIHJlbW92ZSBpdCBmcm9tIHRoZSBkZWxpbWl0ZXIgc3RhY2suXG52YXIgcGFyc2VDbG9zZUJyYWNrZXQgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdGFydHBvcztcbiAgICB2YXIgaXNfaW1hZ2U7XG4gICAgdmFyIGRlc3Q7XG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBtYXRjaGVkID0gZmFsc2U7XG4gICAgdmFyIHJlZmxhYmVsO1xuICAgIHZhciBvcGVuZXI7XG5cbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG5cbiAgICAvLyBsb29rIHRocm91Z2ggc3RhY2sgb2YgZGVsaW1pdGVycyBmb3IgYSBbIG9yICFbXG4gICAgb3BlbmVyID0gdGhpcy5kZWxpbWl0ZXJzO1xuXG4gICAgd2hpbGUgKG9wZW5lciAhPT0gbnVsbCkge1xuICAgICAgICBpZiAob3BlbmVyLmNjID09PSBDX09QRU5fQlJBQ0tFVCB8fCBvcGVuZXIuY2MgPT09IENfQkFORykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyID0gb3BlbmVyLnByZXZpb3VzO1xuICAgIH1cblxuICAgIGlmIChvcGVuZXIgPT09IG51bGwpIHtcbiAgICAgICAgLy8gbm8gbWF0Y2hlZCBvcGVuZXIsIGp1c3QgcmV0dXJuIGEgbGl0ZXJhbFxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCddJykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIW9wZW5lci5hY3RpdmUpIHtcbiAgICAgICAgLy8gbm8gbWF0Y2hlZCBvcGVuZXIsIGp1c3QgcmV0dXJuIGEgbGl0ZXJhbFxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCddJykpO1xuICAgICAgICAvLyB0YWtlIG9wZW5lciBvZmYgZW1waGFzaXMgc3RhY2tcbiAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIob3BlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgZ290IGhlcmUsIG9wZW4gaXMgYSBwb3RlbnRpYWwgb3BlbmVyXG4gICAgaXNfaW1hZ2UgPSBvcGVuZXIuY2MgPT09IENfQkFORztcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgbGluay9pbWFnZVxuXG4gICAgLy8gSW5saW5lIGxpbms/XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX09QRU5fUEFSRU4pIHtcbiAgICAgICAgdGhpcy5wb3MrKztcbiAgICAgICAgaWYgKHRoaXMuc3BubCgpICYmXG4gICAgICAgICAgICAoKGRlc3QgPSB0aGlzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKCkpICE9PSBudWxsKSAmJlxuICAgICAgICAgICAgdGhpcy5zcG5sKCkgJiZcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIGEgc3BhY2UgYmVmb3JlIHRoZSB0aXRsZTpcbiAgICAgICAgICAgIChyZVdoaXRlc3BhY2VDaGFyLnRlc3QodGhpcy5zdWJqZWN0LmNoYXJBdCh0aGlzLnBvcyAtIDEpKSAmJlxuICAgICAgICAgICAgICh0aXRsZSA9IHRoaXMucGFyc2VMaW5rVGl0bGUoKSkgfHwgdHJ1ZSkgJiZcbiAgICAgICAgICAgIHRoaXMuc3BubCgpICYmXG4gICAgICAgICAgICB0aGlzLnBlZWsoKSA9PT0gQ19DTE9TRV9QQVJFTikge1xuICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyBOZXh0LCBzZWUgaWYgdGhlcmUncyBhIGxpbmsgbGFiZWxcbiAgICAgICAgdmFyIHNhdmVwb3MgPSB0aGlzLnBvcztcbiAgICAgICAgdGhpcy5zcG5sKCk7XG4gICAgICAgIHZhciBiZWZvcmVsYWJlbCA9IHRoaXMucG9zO1xuICAgICAgICB2YXIgbiA9IHRoaXMucGFyc2VMaW5rTGFiZWwoKTtcbiAgICAgICAgaWYgKG4gPT09IDAgfHwgbiA9PT0gMikge1xuICAgICAgICAgICAgLy8gZW1wdHkgb3IgbWlzc2luZyBzZWNvbmQgbGFiZWxcbiAgICAgICAgICAgIHJlZmxhYmVsID0gdGhpcy5zdWJqZWN0LnNsaWNlKG9wZW5lci5pbmRleCwgc3RhcnRwb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVmbGFiZWwgPSB0aGlzLnN1YmplY3Quc2xpY2UoYmVmb3JlbGFiZWwsIGJlZm9yZWxhYmVsICsgbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgIC8vIElmIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rLCByZXdpbmQgYmVmb3JlIHNwYWNlcyB3ZSBza2lwcGVkLlxuICAgICAgICAgICAgdGhpcy5wb3MgPSBzYXZlcG9zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9va3VwIHJhd2xhYmVsIGluIHJlZm1hcFxuICAgICAgICB2YXIgbGluayA9IHRoaXMucmVmbWFwW25vcm1hbGl6ZVJlZmVyZW5jZShyZWZsYWJlbCldO1xuICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgZGVzdCA9IGxpbmsuZGVzdGluYXRpb247XG4gICAgICAgICAgICB0aXRsZSA9IGxpbmsudGl0bGU7XG4gICAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoaXNfaW1hZ2UgPyAnSW1hZ2UnIDogJ0xpbmsnKTtcbiAgICAgICAgbm9kZS5fZGVzdGluYXRpb24gPSBkZXN0O1xuICAgICAgICBub2RlLl90aXRsZSA9IHRpdGxlIHx8ICcnO1xuXG4gICAgICAgIHZhciB0bXAsIG5leHQ7XG4gICAgICAgIHRtcCA9IG9wZW5lci5ub2RlLl9uZXh0O1xuICAgICAgICB3aGlsZSAodG1wKSB7XG4gICAgICAgICAgICBuZXh0ID0gdG1wLl9uZXh0O1xuICAgICAgICAgICAgdG1wLnVubGluaygpO1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICAgICAgdG1wID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRW1waGFzaXMob3BlbmVyLnByZXZpb3VzKTtcblxuICAgICAgICBvcGVuZXIubm9kZS51bmxpbmsoKTtcblxuICAgICAgICAvLyBwcm9jZXNzRW1waGFzaXMgd2lsbCByZW1vdmUgdGhpcyBhbmQgbGF0ZXIgZGVsaW1pdGVycy5cbiAgICAgICAgLy8gTm93LCBmb3IgYSBsaW5rLCB3ZSBhbHNvIGRlYWN0aXZhdGUgZWFybGllciBsaW5rIG9wZW5lcnMuXG4gICAgICAgIC8vIChubyBsaW5rcyBpbiBsaW5rcylcbiAgICAgICAgaWYgKCFpc19pbWFnZSkge1xuICAgICAgICAgIG9wZW5lciA9IHRoaXMuZGVsaW1pdGVycztcbiAgICAgICAgICB3aGlsZSAob3BlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVyLmNjID09PSBDX09QRU5fQlJBQ0tFVCkge1xuICAgICAgICAgICAgICAgIG9wZW5lci5hY3RpdmUgPSBmYWxzZTsgLy8gZGVhY3RpdmF0ZSB0aGlzIG9wZW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3BlbmVyID0gb3BlbmVyLnByZXZpb3VzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSBlbHNlIHsgLy8gbm8gbWF0Y2hcblxuICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvcGVuZXIpOyAgLy8gcmVtb3ZlIHRoaXMgb3BlbmVyIGZyb20gc3RhY2tcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnXScpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGFuIGVudGl0eS5cbnZhciBwYXJzZUVudGl0eSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKChtID0gdGhpcy5tYXRjaChyZUVudGl0eUhlcmUpKSkge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KGRlY29kZUhUTUwobSkpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbi8vIFBhcnNlIGEgcnVuIG9mIG9yZGluYXJ5IGNoYXJhY3RlcnMsIG9yIGEgc2luZ2xlIGNoYXJhY3RlciB3aXRoXG4vLyBhIHNwZWNpYWwgbWVhbmluZyBpbiBtYXJrZG93biwgYXMgYSBwbGFpbiBzdHJpbmcuXG52YXIgcGFyc2VTdHJpbmcgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtO1xuICAgIGlmICgobSA9IHRoaXMubWF0Y2gocmVNYWluKSkpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zbWFydCkge1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChcbiAgICAgICAgICAgICAgICBtLnJlcGxhY2UocmVFbGxpcHNlcywgXCJcXHUyMDI2XCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlRGFzaCwgZnVuY3Rpb24oY2hhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbkNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFycy5sZW5ndGggJSAzID09PSAwKSB7IC8vIElmIGRpdmlzaWJsZSBieSAzLCB1c2UgYWxsIGVtIGRhc2hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtQ291bnQgPSBjaGFycy5sZW5ndGggLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFycy5sZW5ndGggJSAyID09PSAwKSB7IC8vIElmIGRpdmlzaWJsZSBieSAyLCB1c2UgYWxsIGVuIGRhc2hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuQ291bnQgPSBjaGFycy5sZW5ndGggLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFycy5sZW5ndGggJSAzID09PSAyKSB7IC8vIElmIDIgZXh0cmEgZGFzaGVzLCB1c2UgZW4gZGFzaCBmb3IgbGFzdCAyOyBlbSBkYXNoZXMgZm9yIHJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbkNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbUNvdW50ID0gKGNoYXJzLmxlbmd0aCAtIDIpIC8gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIFVzZSBlbiBkYXNoZXMgZm9yIGxhc3QgNCBoeXBoZW5zOyBlbSBkYXNoZXMgZm9yIHJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbkNvdW50ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbUNvdW50ID0gKGNoYXJzLmxlbmd0aCAtIDQpIC8gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlxcdTIwMTRcIi5yZXBlYXQoZW1Db3VudCkgKyBcIlxcdTIwMTNcIi5yZXBlYXQoZW5Db3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KG0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuLy8gUGFyc2UgYSBuZXdsaW5lLiAgSWYgaXQgd2FzIHByZWNlZGVkIGJ5IHR3byBzcGFjZXMsIHJldHVybiBhIGhhcmRcbi8vIGxpbmUgYnJlYWs7IG90aGVyd2lzZSBhIHNvZnQgbGluZSBicmVhay5cbnZhciBwYXJzZU5ld2xpbmUgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHRoaXMucG9zICs9IDE7IC8vIGFzc3VtZSB3ZSdyZSBhdCBhIFxcblxuICAgIC8vIGNoZWNrIHByZXZpb3VzIG5vZGUgZm9yIHRyYWlsaW5nIHNwYWNlc1xuICAgIHZhciBsYXN0YyA9IGJsb2NrLl9sYXN0Q2hpbGQ7XG4gICAgaWYgKGxhc3RjICYmIGxhc3RjLnR5cGUgPT09ICdUZXh0JyAmJiBsYXN0Yy5fbGl0ZXJhbFtsYXN0Yy5fbGl0ZXJhbC5sZW5ndGggLSAxXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBoYXJkYnJlYWsgPSBsYXN0Yy5fbGl0ZXJhbFtsYXN0Yy5fbGl0ZXJhbC5sZW5ndGggLSAyXSA9PT0gJyAnO1xuICAgICAgICBsYXN0Yy5fbGl0ZXJhbCA9IGxhc3RjLl9saXRlcmFsLnJlcGxhY2UocmVGaW5hbFNwYWNlLCAnJyk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5ldyBOb2RlKGhhcmRicmVhayA/ICdIYXJkYnJlYWsnIDogJ1NvZnRicmVhaycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChuZXcgTm9kZSgnU29mdGJyZWFrJykpO1xuICAgIH1cbiAgICB0aGlzLm1hdGNoKHJlSW5pdGlhbFNwYWNlKTsgLy8gZ29iYmxlIGxlYWRpbmcgc3BhY2VzIGluIG5leHQgbGluZVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhIGxpbmsgcmVmZXJlbmNlLCBtb2RpZnlpbmcgcmVmbWFwLlxudmFyIHBhcnNlUmVmZXJlbmNlID0gZnVuY3Rpb24ocywgcmVmbWFwKSB7XG4gICAgdGhpcy5zdWJqZWN0ID0gcztcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdmFyIHJhd2xhYmVsO1xuICAgIHZhciBkZXN0O1xuICAgIHZhciB0aXRsZTtcbiAgICB2YXIgbWF0Y2hDaGFycztcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcblxuICAgIC8vIGxhYmVsOlxuICAgIG1hdGNoQ2hhcnMgPSB0aGlzLnBhcnNlTGlua0xhYmVsKCk7XG4gICAgaWYgKG1hdGNoQ2hhcnMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3bGFiZWwgPSB0aGlzLnN1YmplY3Quc3Vic3RyKDAsIG1hdGNoQ2hhcnMpO1xuICAgIH1cblxuICAgIC8vIGNvbG9uOlxuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19DT0xPTikge1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vICBsaW5rIHVybFxuICAgIHRoaXMuc3BubCgpO1xuXG4gICAgZGVzdCA9IHRoaXMucGFyc2VMaW5rRGVzdGluYXRpb24oKTtcbiAgICBpZiAoZGVzdCA9PT0gbnVsbCB8fCBkZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgYmVmb3JldGl0bGUgPSB0aGlzLnBvcztcbiAgICB0aGlzLnNwbmwoKTtcbiAgICB0aXRsZSA9IHRoaXMucGFyc2VMaW5rVGl0bGUoKTtcbiAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcbiAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgLy8gcmV3aW5kIGJlZm9yZSBzcGFjZXNcbiAgICAgICAgdGhpcy5wb3MgPSBiZWZvcmV0aXRsZTtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgd2UncmUgYXQgbGluZSBlbmQ6XG4gICAgdmFyIGF0TGluZUVuZCA9IHRydWU7XG4gICAgaWYgKHRoaXMubWF0Y2gocmVTcGFjZUF0RW5kT2ZMaW5lKSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhdExpbmVFbmQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoZSBwb3RlbnRpYWwgdGl0bGUgd2UgZm91bmQgaXMgbm90IGF0IHRoZSBsaW5lIGVuZCxcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBjb3VsZCBzdGlsbCBiZSBhIGxlZ2FsIGxpbmsgcmVmZXJlbmNlIGlmIHdlXG4gICAgICAgICAgICAvLyBkaXNjYXJkIHRoZSB0aXRsZVxuICAgICAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgICAgIC8vIHJld2luZCBiZWZvcmUgc3BhY2VzXG4gICAgICAgICAgICB0aGlzLnBvcyA9IGJlZm9yZXRpdGxlO1xuICAgICAgICAgICAgLy8gYW5kIGluc3RlYWQgY2hlY2sgaWYgdGhlIGxpbmsgVVJMIGlzIGF0IHRoZSBsaW5lIGVuZFxuICAgICAgICAgICAgYXRMaW5lRW5kID0gdGhpcy5tYXRjaChyZVNwYWNlQXRFbmRPZkxpbmUpICE9PSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhdExpbmVFbmQpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIG5vcm1sYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShyYXdsYWJlbCk7XG4gICAgaWYgKG5vcm1sYWJlbCA9PT0gJycpIHtcbiAgICAgICAgLy8gbGFiZWwgbXVzdCBjb250YWluIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKCFyZWZtYXBbbm9ybWxhYmVsXSkge1xuICAgICAgICByZWZtYXBbbm9ybWxhYmVsXSA9IHsgZGVzdGluYXRpb246IGRlc3QsIHRpdGxlOiB0aXRsZSB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb3MgLSBzdGFydHBvcztcbn07XG5cbi8vIFBhcnNlIHRoZSBuZXh0IGlubGluZSBlbGVtZW50IGluIHN1YmplY3QsIGFkdmFuY2luZyBzdWJqZWN0IHBvc2l0aW9uLlxuLy8gT24gc3VjY2VzcywgYWRkIHRoZSByZXN1bHQgdG8gYmxvY2sncyBjaGlsZHJlbiBhbmQgcmV0dXJuIHRydWUuXG4vLyBPbiBmYWlsdXJlLCByZXR1cm4gZmFsc2UuXG52YXIgcGFyc2VJbmxpbmUgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciByZXMgPSBmYWxzZTtcbiAgICB2YXIgYyA9IHRoaXMucGVlaygpO1xuICAgIGlmIChjID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN3aXRjaChjKSB7XG4gICAgY2FzZSBDX05FV0xJTkU6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VOZXdsaW5lKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0JBQ0tTTEFTSDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUJhY2tzbGFzaChibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19CQUNLVElDSzpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUJhY2t0aWNrcyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19BU1RFUklTSzpcbiAgICBjYXNlIENfVU5ERVJTQ09SRTpcbiAgICAgICAgcmVzID0gdGhpcy5oYW5kbGVEZWxpbShjLCBibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19TSU5HTEVRVU9URTpcbiAgICBjYXNlIENfRE9VQkxFUVVPVEU6XG4gICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5zbWFydCAmJiB0aGlzLmhhbmRsZURlbGltKGMsIGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX09QRU5fQlJBQ0tFVDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZU9wZW5CcmFja2V0KGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0JBTkc6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VCYW5nKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0NMT1NFX0JSQUNLRVQ6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VDbG9zZUJyYWNrZXQoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfTEVTU1RIQU46XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VBdXRvbGluayhibG9jaykgfHwgdGhpcy5wYXJzZUh0bWxUYWcoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQU1QRVJTQU5EOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlRW50aXR5KGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZVN0cmluZyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIXJlcykge1xuICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KGZyb21Db2RlUG9pbnQoYykpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFBhcnNlIHN0cmluZyBjb250ZW50IGluIGJsb2NrIGludG8gaW5saW5lIGNoaWxkcmVuLFxuLy8gdXNpbmcgcmVmbWFwIHRvIHJlc29sdmUgcmVmZXJlbmNlcy5cbnZhciBwYXJzZUlubGluZXMgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHRoaXMuc3ViamVjdCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC50cmltKCk7XG4gICAgdGhpcy5wb3MgPSAwO1xuICAgIHRoaXMuZGVsaW1pdGVycyA9IG51bGw7XG4gICAgd2hpbGUgKHRoaXMucGFyc2VJbmxpbmUoYmxvY2spKSB7XG4gICAgfVxuICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IG51bGw7IC8vIGFsbG93IHJhdyBzdHJpbmcgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWRcbiAgICB0aGlzLnByb2Nlc3NFbXBoYXNpcyhudWxsKTtcbn07XG5cbi8vIFRoZSBJbmxpbmVQYXJzZXIgb2JqZWN0LlxuZnVuY3Rpb24gSW5saW5lUGFyc2VyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICBkZWxpbWl0ZXJzOiBudWxsLCAgLy8gdXNlZCBieSBoYW5kbGVEZWxpbSBtZXRob2RcbiAgICAgICAgcG9zOiAwLFxuICAgICAgICByZWZtYXA6IHt9LFxuICAgICAgICBtYXRjaDogbWF0Y2gsXG4gICAgICAgIHBlZWs6IHBlZWssXG4gICAgICAgIHNwbmw6IHNwbmwsXG4gICAgICAgIHBhcnNlQmFja3RpY2tzOiBwYXJzZUJhY2t0aWNrcyxcbiAgICAgICAgcGFyc2VCYWNrc2xhc2g6IHBhcnNlQmFja3NsYXNoLFxuICAgICAgICBwYXJzZUF1dG9saW5rOiBwYXJzZUF1dG9saW5rLFxuICAgICAgICBwYXJzZUh0bWxUYWc6IHBhcnNlSHRtbFRhZyxcbiAgICAgICAgc2NhbkRlbGltczogc2NhbkRlbGltcyxcbiAgICAgICAgaGFuZGxlRGVsaW06IGhhbmRsZURlbGltLFxuICAgICAgICBwYXJzZUxpbmtUaXRsZTogcGFyc2VMaW5rVGl0bGUsXG4gICAgICAgIHBhcnNlTGlua0Rlc3RpbmF0aW9uOiBwYXJzZUxpbmtEZXN0aW5hdGlvbixcbiAgICAgICAgcGFyc2VMaW5rTGFiZWw6IHBhcnNlTGlua0xhYmVsLFxuICAgICAgICBwYXJzZU9wZW5CcmFja2V0OiBwYXJzZU9wZW5CcmFja2V0LFxuICAgICAgICBwYXJzZUNsb3NlQnJhY2tldDogcGFyc2VDbG9zZUJyYWNrZXQsXG4gICAgICAgIHBhcnNlQmFuZzogcGFyc2VCYW5nLFxuICAgICAgICBwYXJzZUVudGl0eTogcGFyc2VFbnRpdHksXG4gICAgICAgIHBhcnNlU3RyaW5nOiBwYXJzZVN0cmluZyxcbiAgICAgICAgcGFyc2VOZXdsaW5lOiBwYXJzZU5ld2xpbmUsXG4gICAgICAgIHBhcnNlUmVmZXJlbmNlOiBwYXJzZVJlZmVyZW5jZSxcbiAgICAgICAgcGFyc2VJbmxpbmU6IHBhcnNlSW5saW5lLFxuICAgICAgICBwcm9jZXNzRW1waGFzaXM6IHByb2Nlc3NFbXBoYXNpcyxcbiAgICAgICAgcmVtb3ZlRGVsaW1pdGVyOiByZW1vdmVEZWxpbWl0ZXIsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHBhcnNlOiBwYXJzZUlubGluZXNcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElubGluZVBhcnNlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2lubGluZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGRlcml2ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcuZnJvbUNvZGVQb2ludFxuLyohIGh0dHA6Ly9tdGhzLmJlL2Zyb21jb2RlcG9pbnQgdjAuMi4xIGJ5IEBtYXRoaWFzICovXG5pZiAoU3RyaW5nLmZyb21Db2RlUG9pbnQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgUmFuZ2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcblxufSBlbHNlIHtcblxuICB2YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIGZyb21Db2RlUG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMDtcbiAgICAgIHZhciBjb2RlVW5pdHMgPSBbXTtcbiAgICAgIHZhciBoaWdoU3Vycm9nYXRlO1xuICAgICAgdmFyIGxvd1N1cnJvZ2F0ZTtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgICAgICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPiAweDEwRkZGRiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgICAgICAgICAgIGZsb29yKGNvZGVQb2ludCkgIT09IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4RkZGRikgeyAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweEQ4MDA7XG4gICAgICAgICAgICAgIGxvd1N1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgJSAweDQwMCkgKyAweERDMDA7XG4gICAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpO1xuICAgICAgICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtb2R1bGUuZXhwb3J0cyA9IGZyb21Db2RlUG9pbnQ7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9mcm9tLWNvZGUtcG9pbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIFRoZSBidWxrIG9mIHRoaXMgY29kZSBkZXJpdmVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Rtb3Njcm9wL2ZvbGQtY2FzZVxuQnV0IGluIGFkZGl0aW9uIHRvIGNhc2UtZm9sZGluZywgd2UgYWxzbyBub3JtYWxpemUgd2hpdGVzcGFjZS5cblxuZm9sZC1jYXNlIGlzIENvcHlyaWdodCBNYXRoaWFzIEJ5bmVucyA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlLz5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8qZXNsaW50LWRpc2FibGUgIGtleS1zcGFjaW5nLCBjb21tYS1zcGFjaW5nICovXG5cbnZhciByZWdleCA9IC9bIFxcdFxcclxcbl0rfFtBLVpcXHhCNVxceEMwLVxceEQ2XFx4RDgtXFx4REZcXHUwMTAwXFx1MDEwMlxcdTAxMDRcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDEwRVxcdTAxMTBcXHUwMTEyXFx1MDExNFxcdTAxMTZcXHUwMTE4XFx1MDExQVxcdTAxMUNcXHUwMTFFXFx1MDEyMFxcdTAxMjJcXHUwMTI0XFx1MDEyNlxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMkVcXHUwMTMwXFx1MDEzMlxcdTAxMzRcXHUwMTM2XFx1MDEzOVxcdTAxM0JcXHUwMTNEXFx1MDEzRlxcdTAxNDFcXHUwMTQzXFx1MDE0NVxcdTAxNDdcXHUwMTQ5XFx1MDE0QVxcdTAxNENcXHUwMTRFXFx1MDE1MFxcdTAxNTJcXHUwMTU0XFx1MDE1NlxcdTAxNThcXHUwMTVBXFx1MDE1Q1xcdTAxNUVcXHUwMTYwXFx1MDE2MlxcdTAxNjRcXHUwMTY2XFx1MDE2OFxcdTAxNkFcXHUwMTZDXFx1MDE2RVxcdTAxNzBcXHUwMTcyXFx1MDE3NFxcdTAxNzZcXHUwMTc4XFx1MDE3OVxcdTAxN0JcXHUwMTdEXFx1MDE3RlxcdTAxODFcXHUwMTgyXFx1MDE4NFxcdTAxODZcXHUwMTg3XFx1MDE4OS1cXHUwMThCXFx1MDE4RS1cXHUwMTkxXFx1MDE5M1xcdTAxOTRcXHUwMTk2LVxcdTAxOThcXHUwMTlDXFx1MDE5RFxcdTAxOUZcXHUwMUEwXFx1MDFBMlxcdTAxQTRcXHUwMUE2XFx1MDFBN1xcdTAxQTlcXHUwMUFDXFx1MDFBRVxcdTAxQUZcXHUwMUIxLVxcdTAxQjNcXHUwMUI1XFx1MDFCN1xcdTAxQjhcXHUwMUJDXFx1MDFDNFxcdTAxQzVcXHUwMUM3XFx1MDFDOFxcdTAxQ0FcXHUwMUNCXFx1MDFDRFxcdTAxQ0ZcXHUwMUQxXFx1MDFEM1xcdTAxRDVcXHUwMUQ3XFx1MDFEOVxcdTAxREJcXHUwMURFXFx1MDFFMFxcdTAxRTJcXHUwMUU0XFx1MDFFNlxcdTAxRThcXHUwMUVBXFx1MDFFQ1xcdTAxRUVcXHUwMUYwLVxcdTAxRjJcXHUwMUY0XFx1MDFGNi1cXHUwMUY4XFx1MDFGQVxcdTAxRkNcXHUwMUZFXFx1MDIwMFxcdTAyMDJcXHUwMjA0XFx1MDIwNlxcdTAyMDhcXHUwMjBBXFx1MDIwQ1xcdTAyMEVcXHUwMjEwXFx1MDIxMlxcdTAyMTRcXHUwMjE2XFx1MDIxOFxcdTAyMUFcXHUwMjFDXFx1MDIxRVxcdTAyMjBcXHUwMjIyXFx1MDIyNFxcdTAyMjZcXHUwMjI4XFx1MDIyQVxcdTAyMkNcXHUwMjJFXFx1MDIzMFxcdTAyMzJcXHUwMjNBXFx1MDIzQlxcdTAyM0RcXHUwMjNFXFx1MDI0MVxcdTAyNDMtXFx1MDI0NlxcdTAyNDhcXHUwMjRBXFx1MDI0Q1xcdTAyNEVcXHUwMzQ1XFx1MDM3MFxcdTAzNzJcXHUwMzc2XFx1MDM3RlxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0FCXFx1MDNCMFxcdTAzQzJcXHUwM0NGLVxcdTAzRDFcXHUwM0Q1XFx1MDNENlxcdTAzRDhcXHUwM0RBXFx1MDNEQ1xcdTAzREVcXHUwM0UwXFx1MDNFMlxcdTAzRTRcXHUwM0U2XFx1MDNFOFxcdTAzRUFcXHUwM0VDXFx1MDNFRVxcdTAzRjBcXHUwM0YxXFx1MDNGNFxcdTAzRjVcXHUwM0Y3XFx1MDNGOVxcdTAzRkFcXHUwM0ZELVxcdTA0MkZcXHUwNDYwXFx1MDQ2MlxcdTA0NjRcXHUwNDY2XFx1MDQ2OFxcdTA0NkFcXHUwNDZDXFx1MDQ2RVxcdTA0NzBcXHUwNDcyXFx1MDQ3NFxcdTA0NzZcXHUwNDc4XFx1MDQ3QVxcdTA0N0NcXHUwNDdFXFx1MDQ4MFxcdTA0OEFcXHUwNDhDXFx1MDQ4RVxcdTA0OTBcXHUwNDkyXFx1MDQ5NFxcdTA0OTZcXHUwNDk4XFx1MDQ5QVxcdTA0OUNcXHUwNDlFXFx1MDRBMFxcdTA0QTJcXHUwNEE0XFx1MDRBNlxcdTA0QThcXHUwNEFBXFx1MDRBQ1xcdTA0QUVcXHUwNEIwXFx1MDRCMlxcdTA0QjRcXHUwNEI2XFx1MDRCOFxcdTA0QkFcXHUwNEJDXFx1MDRCRVxcdTA0QzBcXHUwNEMxXFx1MDRDM1xcdTA0QzVcXHUwNEM3XFx1MDRDOVxcdTA0Q0JcXHUwNENEXFx1MDREMFxcdTA0RDJcXHUwNEQ0XFx1MDRENlxcdTA0RDhcXHUwNERBXFx1MDREQ1xcdTA0REVcXHUwNEUwXFx1MDRFMlxcdTA0RTRcXHUwNEU2XFx1MDRFOFxcdTA0RUFcXHUwNEVDXFx1MDRFRVxcdTA0RjBcXHUwNEYyXFx1MDRGNFxcdTA0RjZcXHUwNEY4XFx1MDRGQVxcdTA0RkNcXHUwNEZFXFx1MDUwMFxcdTA1MDJcXHUwNTA0XFx1MDUwNlxcdTA1MDhcXHUwNTBBXFx1MDUwQ1xcdTA1MEVcXHUwNTEwXFx1MDUxMlxcdTA1MTRcXHUwNTE2XFx1MDUxOFxcdTA1MUFcXHUwNTFDXFx1MDUxRVxcdTA1MjBcXHUwNTIyXFx1MDUyNFxcdTA1MjZcXHUwNTI4XFx1MDUyQVxcdTA1MkNcXHUwNTJFXFx1MDUzMS1cXHUwNTU2XFx1MDU4N1xcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MUUwMFxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTFFMDhcXHUxRTBBXFx1MUUwQ1xcdTFFMEVcXHUxRTEwXFx1MUUxMlxcdTFFMTRcXHUxRTE2XFx1MUUxOFxcdTFFMUFcXHUxRTFDXFx1MUUxRVxcdTFFMjBcXHUxRTIyXFx1MUUyNFxcdTFFMjZcXHUxRTI4XFx1MUUyQVxcdTFFMkNcXHUxRTJFXFx1MUUzMFxcdTFFMzJcXHUxRTM0XFx1MUUzNlxcdTFFMzhcXHUxRTNBXFx1MUUzQ1xcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTFFNDRcXHUxRTQ2XFx1MUU0OFxcdTFFNEFcXHUxRTRDXFx1MUU0RVxcdTFFNTBcXHUxRTUyXFx1MUU1NFxcdTFFNTZcXHUxRTU4XFx1MUU1QVxcdTFFNUNcXHUxRTVFXFx1MUU2MFxcdTFFNjJcXHUxRTY0XFx1MUU2NlxcdTFFNjhcXHUxRTZBXFx1MUU2Q1xcdTFFNkVcXHUxRTcwXFx1MUU3MlxcdTFFNzRcXHUxRTc2XFx1MUU3OFxcdTFFN0FcXHUxRTdDXFx1MUU3RVxcdTFFODBcXHUxRTgyXFx1MUU4NFxcdTFFODZcXHUxRTg4XFx1MUU4QVxcdTFFOENcXHUxRThFXFx1MUU5MFxcdTFFOTJcXHUxRTk0XFx1MUU5Ni1cXHUxRTlCXFx1MUU5RVxcdTFFQTBcXHUxRUEyXFx1MUVBNFxcdTFFQTZcXHUxRUE4XFx1MUVBQVxcdTFFQUNcXHUxRUFFXFx1MUVCMFxcdTFFQjJcXHUxRUI0XFx1MUVCNlxcdTFFQjhcXHUxRUJBXFx1MUVCQ1xcdTFFQkVcXHUxRUMwXFx1MUVDMlxcdTFFQzRcXHUxRUM2XFx1MUVDOFxcdTFFQ0FcXHUxRUNDXFx1MUVDRVxcdTFFRDBcXHUxRUQyXFx1MUVENFxcdTFFRDZcXHUxRUQ4XFx1MUVEQVxcdTFFRENcXHUxRURFXFx1MUVFMFxcdTFFRTJcXHUxRUU0XFx1MUVFNlxcdTFFRThcXHUxRUVBXFx1MUVFQ1xcdTFFRUVcXHUxRUYwXFx1MUVGMlxcdTFFRjRcXHUxRUY2XFx1MUVGOFxcdTFFRkFcXHUxRUZDXFx1MUVGRVxcdTFGMDgtXFx1MUYwRlxcdTFGMTgtXFx1MUYxRFxcdTFGMjgtXFx1MUYyRlxcdTFGMzgtXFx1MUYzRlxcdTFGNDgtXFx1MUY0RFxcdTFGNTBcXHUxRjUyXFx1MUY1NFxcdTFGNTZcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGXFx1MUY2OC1cXHUxRjZGXFx1MUY4MC1cXHUxRkFGXFx1MUZCMi1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDJcXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMi1cXHUxRkU0XFx1MUZFNi1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjEyNlxcdTIxMkFcXHUyMTJCXFx1MjEzMlxcdTIxNjAtXFx1MjE2RlxcdTIxODNcXHUyNEI2LVxcdTI0Q0ZcXHUyQzAwLVxcdTJDMkVcXHUyQzYwXFx1MkM2Mi1cXHUyQzY0XFx1MkM2N1xcdTJDNjlcXHUyQzZCXFx1MkM2RC1cXHUyQzcwXFx1MkM3MlxcdTJDNzVcXHUyQzdFLVxcdTJDODBcXHUyQzgyXFx1MkM4NFxcdTJDODZcXHUyQzg4XFx1MkM4QVxcdTJDOENcXHUyQzhFXFx1MkM5MFxcdTJDOTJcXHUyQzk0XFx1MkM5NlxcdTJDOThcXHUyQzlBXFx1MkM5Q1xcdTJDOUVcXHUyQ0EwXFx1MkNBMlxcdTJDQTRcXHUyQ0E2XFx1MkNBOFxcdTJDQUFcXHUyQ0FDXFx1MkNBRVxcdTJDQjBcXHUyQ0IyXFx1MkNCNFxcdTJDQjZcXHUyQ0I4XFx1MkNCQVxcdTJDQkNcXHUyQ0JFXFx1MkNDMFxcdTJDQzJcXHUyQ0M0XFx1MkNDNlxcdTJDQzhcXHUyQ0NBXFx1MkNDQ1xcdTJDQ0VcXHUyQ0QwXFx1MkNEMlxcdTJDRDRcXHUyQ0Q2XFx1MkNEOFxcdTJDREFcXHUyQ0RDXFx1MkNERVxcdTJDRTBcXHUyQ0UyXFx1MkNFQlxcdTJDRURcXHUyQ0YyXFx1QTY0MFxcdUE2NDJcXHVBNjQ0XFx1QTY0NlxcdUE2NDhcXHVBNjRBXFx1QTY0Q1xcdUE2NEVcXHVBNjUwXFx1QTY1MlxcdUE2NTRcXHVBNjU2XFx1QTY1OFxcdUE2NUFcXHVBNjVDXFx1QTY1RVxcdUE2NjBcXHVBNjYyXFx1QTY2NFxcdUE2NjZcXHVBNjY4XFx1QTY2QVxcdUE2NkNcXHVBNjgwXFx1QTY4MlxcdUE2ODRcXHVBNjg2XFx1QTY4OFxcdUE2OEFcXHVBNjhDXFx1QTY4RVxcdUE2OTBcXHVBNjkyXFx1QTY5NFxcdUE2OTZcXHVBNjk4XFx1QTY5QVxcdUE3MjJcXHVBNzI0XFx1QTcyNlxcdUE3MjhcXHVBNzJBXFx1QTcyQ1xcdUE3MkVcXHVBNzMyXFx1QTczNFxcdUE3MzZcXHVBNzM4XFx1QTczQVxcdUE3M0NcXHVBNzNFXFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTc0NlxcdUE3NDhcXHVBNzRBXFx1QTc0Q1xcdUE3NEVcXHVBNzUwXFx1QTc1MlxcdUE3NTRcXHVBNzU2XFx1QTc1OFxcdUE3NUFcXHVBNzVDXFx1QTc1RVxcdUE3NjBcXHVBNzYyXFx1QTc2NFxcdUE3NjZcXHVBNzY4XFx1QTc2QVxcdUE3NkNcXHVBNzZFXFx1QTc3OVxcdUE3N0JcXHVBNzdEXFx1QTc3RVxcdUE3ODBcXHVBNzgyXFx1QTc4NFxcdUE3ODZcXHVBNzhCXFx1QTc4RFxcdUE3OTBcXHVBNzkyXFx1QTc5NlxcdUE3OThcXHVBNzlBXFx1QTc5Q1xcdUE3OUVcXHVBN0EwXFx1QTdBMlxcdUE3QTRcXHVBN0E2XFx1QTdBOFxcdUE3QUEtXFx1QTdBRFxcdUE3QjBcXHVBN0IxXFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkYyMS1cXHVGRjNBXXxcXHVEODAxW1xcdURDMDAtXFx1REMyN118XFx1RDgwNltcXHVEQ0EwLVxcdURDQkZdL2c7XG5cbnZhciBtYXAgPSB7J0EnOidhJywnQic6J2InLCdDJzonYycsJ0QnOidkJywnRSc6J2UnLCdGJzonZicsJ0cnOidnJywnSCc6J2gnLCdJJzonaScsJ0onOidqJywnSyc6J2snLCdMJzonbCcsJ00nOidtJywnTic6J24nLCdPJzonbycsJ1AnOidwJywnUSc6J3EnLCdSJzoncicsJ1MnOidzJywnVCc6J3QnLCdVJzondScsJ1YnOid2JywnVyc6J3cnLCdYJzoneCcsJ1knOid5JywnWic6J3onLCdcXHhCNSc6J1xcdTAzQkMnLCdcXHhDMCc6J1xceEUwJywnXFx4QzEnOidcXHhFMScsJ1xceEMyJzonXFx4RTInLCdcXHhDMyc6J1xceEUzJywnXFx4QzQnOidcXHhFNCcsJ1xceEM1JzonXFx4RTUnLCdcXHhDNic6J1xceEU2JywnXFx4QzcnOidcXHhFNycsJ1xceEM4JzonXFx4RTgnLCdcXHhDOSc6J1xceEU5JywnXFx4Q0EnOidcXHhFQScsJ1xceENCJzonXFx4RUInLCdcXHhDQyc6J1xceEVDJywnXFx4Q0QnOidcXHhFRCcsJ1xceENFJzonXFx4RUUnLCdcXHhDRic6J1xceEVGJywnXFx4RDAnOidcXHhGMCcsJ1xceEQxJzonXFx4RjEnLCdcXHhEMic6J1xceEYyJywnXFx4RDMnOidcXHhGMycsJ1xceEQ0JzonXFx4RjQnLCdcXHhENSc6J1xceEY1JywnXFx4RDYnOidcXHhGNicsJ1xceEQ4JzonXFx4RjgnLCdcXHhEOSc6J1xceEY5JywnXFx4REEnOidcXHhGQScsJ1xceERCJzonXFx4RkInLCdcXHhEQyc6J1xceEZDJywnXFx4REQnOidcXHhGRCcsJ1xceERFJzonXFx4RkUnLCdcXHUwMTAwJzonXFx1MDEwMScsJ1xcdTAxMDInOidcXHUwMTAzJywnXFx1MDEwNCc6J1xcdTAxMDUnLCdcXHUwMTA2JzonXFx1MDEwNycsJ1xcdTAxMDgnOidcXHUwMTA5JywnXFx1MDEwQSc6J1xcdTAxMEInLCdcXHUwMTBDJzonXFx1MDEwRCcsJ1xcdTAxMEUnOidcXHUwMTBGJywnXFx1MDExMCc6J1xcdTAxMTEnLCdcXHUwMTEyJzonXFx1MDExMycsJ1xcdTAxMTQnOidcXHUwMTE1JywnXFx1MDExNic6J1xcdTAxMTcnLCdcXHUwMTE4JzonXFx1MDExOScsJ1xcdTAxMUEnOidcXHUwMTFCJywnXFx1MDExQyc6J1xcdTAxMUQnLCdcXHUwMTFFJzonXFx1MDExRicsJ1xcdTAxMjAnOidcXHUwMTIxJywnXFx1MDEyMic6J1xcdTAxMjMnLCdcXHUwMTI0JzonXFx1MDEyNScsJ1xcdTAxMjYnOidcXHUwMTI3JywnXFx1MDEyOCc6J1xcdTAxMjknLCdcXHUwMTJBJzonXFx1MDEyQicsJ1xcdTAxMkMnOidcXHUwMTJEJywnXFx1MDEyRSc6J1xcdTAxMkYnLCdcXHUwMTMyJzonXFx1MDEzMycsJ1xcdTAxMzQnOidcXHUwMTM1JywnXFx1MDEzNic6J1xcdTAxMzcnLCdcXHUwMTM5JzonXFx1MDEzQScsJ1xcdTAxM0InOidcXHUwMTNDJywnXFx1MDEzRCc6J1xcdTAxM0UnLCdcXHUwMTNGJzonXFx1MDE0MCcsJ1xcdTAxNDEnOidcXHUwMTQyJywnXFx1MDE0Myc6J1xcdTAxNDQnLCdcXHUwMTQ1JzonXFx1MDE0NicsJ1xcdTAxNDcnOidcXHUwMTQ4JywnXFx1MDE0QSc6J1xcdTAxNEInLCdcXHUwMTRDJzonXFx1MDE0RCcsJ1xcdTAxNEUnOidcXHUwMTRGJywnXFx1MDE1MCc6J1xcdTAxNTEnLCdcXHUwMTUyJzonXFx1MDE1MycsJ1xcdTAxNTQnOidcXHUwMTU1JywnXFx1MDE1Nic6J1xcdTAxNTcnLCdcXHUwMTU4JzonXFx1MDE1OScsJ1xcdTAxNUEnOidcXHUwMTVCJywnXFx1MDE1Qyc6J1xcdTAxNUQnLCdcXHUwMTVFJzonXFx1MDE1RicsJ1xcdTAxNjAnOidcXHUwMTYxJywnXFx1MDE2Mic6J1xcdTAxNjMnLCdcXHUwMTY0JzonXFx1MDE2NScsJ1xcdTAxNjYnOidcXHUwMTY3JywnXFx1MDE2OCc6J1xcdTAxNjknLCdcXHUwMTZBJzonXFx1MDE2QicsJ1xcdTAxNkMnOidcXHUwMTZEJywnXFx1MDE2RSc6J1xcdTAxNkYnLCdcXHUwMTcwJzonXFx1MDE3MScsJ1xcdTAxNzInOidcXHUwMTczJywnXFx1MDE3NCc6J1xcdTAxNzUnLCdcXHUwMTc2JzonXFx1MDE3NycsJ1xcdTAxNzgnOidcXHhGRicsJ1xcdTAxNzknOidcXHUwMTdBJywnXFx1MDE3Qic6J1xcdTAxN0MnLCdcXHUwMTdEJzonXFx1MDE3RScsJ1xcdTAxN0YnOidzJywnXFx1MDE4MSc6J1xcdTAyNTMnLCdcXHUwMTgyJzonXFx1MDE4MycsJ1xcdTAxODQnOidcXHUwMTg1JywnXFx1MDE4Nic6J1xcdTAyNTQnLCdcXHUwMTg3JzonXFx1MDE4OCcsJ1xcdTAxODknOidcXHUwMjU2JywnXFx1MDE4QSc6J1xcdTAyNTcnLCdcXHUwMThCJzonXFx1MDE4QycsJ1xcdTAxOEUnOidcXHUwMUREJywnXFx1MDE4Ric6J1xcdTAyNTknLCdcXHUwMTkwJzonXFx1MDI1QicsJ1xcdTAxOTEnOidcXHUwMTkyJywnXFx1MDE5Myc6J1xcdTAyNjAnLCdcXHUwMTk0JzonXFx1MDI2MycsJ1xcdTAxOTYnOidcXHUwMjY5JywnXFx1MDE5Nyc6J1xcdTAyNjgnLCdcXHUwMTk4JzonXFx1MDE5OScsJ1xcdTAxOUMnOidcXHUwMjZGJywnXFx1MDE5RCc6J1xcdTAyNzInLCdcXHUwMTlGJzonXFx1MDI3NScsJ1xcdTAxQTAnOidcXHUwMUExJywnXFx1MDFBMic6J1xcdTAxQTMnLCdcXHUwMUE0JzonXFx1MDFBNScsJ1xcdTAxQTYnOidcXHUwMjgwJywnXFx1MDFBNyc6J1xcdTAxQTgnLCdcXHUwMUE5JzonXFx1MDI4MycsJ1xcdTAxQUMnOidcXHUwMUFEJywnXFx1MDFBRSc6J1xcdTAyODgnLCdcXHUwMUFGJzonXFx1MDFCMCcsJ1xcdTAxQjEnOidcXHUwMjhBJywnXFx1MDFCMic6J1xcdTAyOEInLCdcXHUwMUIzJzonXFx1MDFCNCcsJ1xcdTAxQjUnOidcXHUwMUI2JywnXFx1MDFCNyc6J1xcdTAyOTInLCdcXHUwMUI4JzonXFx1MDFCOScsJ1xcdTAxQkMnOidcXHUwMUJEJywnXFx1MDFDNCc6J1xcdTAxQzYnLCdcXHUwMUM1JzonXFx1MDFDNicsJ1xcdTAxQzcnOidcXHUwMUM5JywnXFx1MDFDOCc6J1xcdTAxQzknLCdcXHUwMUNBJzonXFx1MDFDQycsJ1xcdTAxQ0InOidcXHUwMUNDJywnXFx1MDFDRCc6J1xcdTAxQ0UnLCdcXHUwMUNGJzonXFx1MDFEMCcsJ1xcdTAxRDEnOidcXHUwMUQyJywnXFx1MDFEMyc6J1xcdTAxRDQnLCdcXHUwMUQ1JzonXFx1MDFENicsJ1xcdTAxRDcnOidcXHUwMUQ4JywnXFx1MDFEOSc6J1xcdTAxREEnLCdcXHUwMURCJzonXFx1MDFEQycsJ1xcdTAxREUnOidcXHUwMURGJywnXFx1MDFFMCc6J1xcdTAxRTEnLCdcXHUwMUUyJzonXFx1MDFFMycsJ1xcdTAxRTQnOidcXHUwMUU1JywnXFx1MDFFNic6J1xcdTAxRTcnLCdcXHUwMUU4JzonXFx1MDFFOScsJ1xcdTAxRUEnOidcXHUwMUVCJywnXFx1MDFFQyc6J1xcdTAxRUQnLCdcXHUwMUVFJzonXFx1MDFFRicsJ1xcdTAxRjEnOidcXHUwMUYzJywnXFx1MDFGMic6J1xcdTAxRjMnLCdcXHUwMUY0JzonXFx1MDFGNScsJ1xcdTAxRjYnOidcXHUwMTk1JywnXFx1MDFGNyc6J1xcdTAxQkYnLCdcXHUwMUY4JzonXFx1MDFGOScsJ1xcdTAxRkEnOidcXHUwMUZCJywnXFx1MDFGQyc6J1xcdTAxRkQnLCdcXHUwMUZFJzonXFx1MDFGRicsJ1xcdTAyMDAnOidcXHUwMjAxJywnXFx1MDIwMic6J1xcdTAyMDMnLCdcXHUwMjA0JzonXFx1MDIwNScsJ1xcdTAyMDYnOidcXHUwMjA3JywnXFx1MDIwOCc6J1xcdTAyMDknLCdcXHUwMjBBJzonXFx1MDIwQicsJ1xcdTAyMEMnOidcXHUwMjBEJywnXFx1MDIwRSc6J1xcdTAyMEYnLCdcXHUwMjEwJzonXFx1MDIxMScsJ1xcdTAyMTInOidcXHUwMjEzJywnXFx1MDIxNCc6J1xcdTAyMTUnLCdcXHUwMjE2JzonXFx1MDIxNycsJ1xcdTAyMTgnOidcXHUwMjE5JywnXFx1MDIxQSc6J1xcdTAyMUInLCdcXHUwMjFDJzonXFx1MDIxRCcsJ1xcdTAyMUUnOidcXHUwMjFGJywnXFx1MDIyMCc6J1xcdTAxOUUnLCdcXHUwMjIyJzonXFx1MDIyMycsJ1xcdTAyMjQnOidcXHUwMjI1JywnXFx1MDIyNic6J1xcdTAyMjcnLCdcXHUwMjI4JzonXFx1MDIyOScsJ1xcdTAyMkEnOidcXHUwMjJCJywnXFx1MDIyQyc6J1xcdTAyMkQnLCdcXHUwMjJFJzonXFx1MDIyRicsJ1xcdTAyMzAnOidcXHUwMjMxJywnXFx1MDIzMic6J1xcdTAyMzMnLCdcXHUwMjNBJzonXFx1MkM2NScsJ1xcdTAyM0InOidcXHUwMjNDJywnXFx1MDIzRCc6J1xcdTAxOUEnLCdcXHUwMjNFJzonXFx1MkM2NicsJ1xcdTAyNDEnOidcXHUwMjQyJywnXFx1MDI0Myc6J1xcdTAxODAnLCdcXHUwMjQ0JzonXFx1MDI4OScsJ1xcdTAyNDUnOidcXHUwMjhDJywnXFx1MDI0Nic6J1xcdTAyNDcnLCdcXHUwMjQ4JzonXFx1MDI0OScsJ1xcdTAyNEEnOidcXHUwMjRCJywnXFx1MDI0Qyc6J1xcdTAyNEQnLCdcXHUwMjRFJzonXFx1MDI0RicsJ1xcdTAzNDUnOidcXHUwM0I5JywnXFx1MDM3MCc6J1xcdTAzNzEnLCdcXHUwMzcyJzonXFx1MDM3MycsJ1xcdTAzNzYnOidcXHUwMzc3JywnXFx1MDM3Ric6J1xcdTAzRjMnLCdcXHUwMzg2JzonXFx1MDNBQycsJ1xcdTAzODgnOidcXHUwM0FEJywnXFx1MDM4OSc6J1xcdTAzQUUnLCdcXHUwMzhBJzonXFx1MDNBRicsJ1xcdTAzOEMnOidcXHUwM0NDJywnXFx1MDM4RSc6J1xcdTAzQ0QnLCdcXHUwMzhGJzonXFx1MDNDRScsJ1xcdTAzOTEnOidcXHUwM0IxJywnXFx1MDM5Mic6J1xcdTAzQjInLCdcXHUwMzkzJzonXFx1MDNCMycsJ1xcdTAzOTQnOidcXHUwM0I0JywnXFx1MDM5NSc6J1xcdTAzQjUnLCdcXHUwMzk2JzonXFx1MDNCNicsJ1xcdTAzOTcnOidcXHUwM0I3JywnXFx1MDM5OCc6J1xcdTAzQjgnLCdcXHUwMzk5JzonXFx1MDNCOScsJ1xcdTAzOUEnOidcXHUwM0JBJywnXFx1MDM5Qic6J1xcdTAzQkInLCdcXHUwMzlDJzonXFx1MDNCQycsJ1xcdTAzOUQnOidcXHUwM0JEJywnXFx1MDM5RSc6J1xcdTAzQkUnLCdcXHUwMzlGJzonXFx1MDNCRicsJ1xcdTAzQTAnOidcXHUwM0MwJywnXFx1MDNBMSc6J1xcdTAzQzEnLCdcXHUwM0EzJzonXFx1MDNDMycsJ1xcdTAzQTQnOidcXHUwM0M0JywnXFx1MDNBNSc6J1xcdTAzQzUnLCdcXHUwM0E2JzonXFx1MDNDNicsJ1xcdTAzQTcnOidcXHUwM0M3JywnXFx1MDNBOCc6J1xcdTAzQzgnLCdcXHUwM0E5JzonXFx1MDNDOScsJ1xcdTAzQUEnOidcXHUwM0NBJywnXFx1MDNBQic6J1xcdTAzQ0InLCdcXHUwM0MyJzonXFx1MDNDMycsJ1xcdTAzQ0YnOidcXHUwM0Q3JywnXFx1MDNEMCc6J1xcdTAzQjInLCdcXHUwM0QxJzonXFx1MDNCOCcsJ1xcdTAzRDUnOidcXHUwM0M2JywnXFx1MDNENic6J1xcdTAzQzAnLCdcXHUwM0Q4JzonXFx1MDNEOScsJ1xcdTAzREEnOidcXHUwM0RCJywnXFx1MDNEQyc6J1xcdTAzREQnLCdcXHUwM0RFJzonXFx1MDNERicsJ1xcdTAzRTAnOidcXHUwM0UxJywnXFx1MDNFMic6J1xcdTAzRTMnLCdcXHUwM0U0JzonXFx1MDNFNScsJ1xcdTAzRTYnOidcXHUwM0U3JywnXFx1MDNFOCc6J1xcdTAzRTknLCdcXHUwM0VBJzonXFx1MDNFQicsJ1xcdTAzRUMnOidcXHUwM0VEJywnXFx1MDNFRSc6J1xcdTAzRUYnLCdcXHUwM0YwJzonXFx1MDNCQScsJ1xcdTAzRjEnOidcXHUwM0MxJywnXFx1MDNGNCc6J1xcdTAzQjgnLCdcXHUwM0Y1JzonXFx1MDNCNScsJ1xcdTAzRjcnOidcXHUwM0Y4JywnXFx1MDNGOSc6J1xcdTAzRjInLCdcXHUwM0ZBJzonXFx1MDNGQicsJ1xcdTAzRkQnOidcXHUwMzdCJywnXFx1MDNGRSc6J1xcdTAzN0MnLCdcXHUwM0ZGJzonXFx1MDM3RCcsJ1xcdTA0MDAnOidcXHUwNDUwJywnXFx1MDQwMSc6J1xcdTA0NTEnLCdcXHUwNDAyJzonXFx1MDQ1MicsJ1xcdTA0MDMnOidcXHUwNDUzJywnXFx1MDQwNCc6J1xcdTA0NTQnLCdcXHUwNDA1JzonXFx1MDQ1NScsJ1xcdTA0MDYnOidcXHUwNDU2JywnXFx1MDQwNyc6J1xcdTA0NTcnLCdcXHUwNDA4JzonXFx1MDQ1OCcsJ1xcdTA0MDknOidcXHUwNDU5JywnXFx1MDQwQSc6J1xcdTA0NUEnLCdcXHUwNDBCJzonXFx1MDQ1QicsJ1xcdTA0MEMnOidcXHUwNDVDJywnXFx1MDQwRCc6J1xcdTA0NUQnLCdcXHUwNDBFJzonXFx1MDQ1RScsJ1xcdTA0MEYnOidcXHUwNDVGJywnXFx1MDQxMCc6J1xcdTA0MzAnLCdcXHUwNDExJzonXFx1MDQzMScsJ1xcdTA0MTInOidcXHUwNDMyJywnXFx1MDQxMyc6J1xcdTA0MzMnLCdcXHUwNDE0JzonXFx1MDQzNCcsJ1xcdTA0MTUnOidcXHUwNDM1JywnXFx1MDQxNic6J1xcdTA0MzYnLCdcXHUwNDE3JzonXFx1MDQzNycsJ1xcdTA0MTgnOidcXHUwNDM4JywnXFx1MDQxOSc6J1xcdTA0MzknLCdcXHUwNDFBJzonXFx1MDQzQScsJ1xcdTA0MUInOidcXHUwNDNCJywnXFx1MDQxQyc6J1xcdTA0M0MnLCdcXHUwNDFEJzonXFx1MDQzRCcsJ1xcdTA0MUUnOidcXHUwNDNFJywnXFx1MDQxRic6J1xcdTA0M0YnLCdcXHUwNDIwJzonXFx1MDQ0MCcsJ1xcdTA0MjEnOidcXHUwNDQxJywnXFx1MDQyMic6J1xcdTA0NDInLCdcXHUwNDIzJzonXFx1MDQ0MycsJ1xcdTA0MjQnOidcXHUwNDQ0JywnXFx1MDQyNSc6J1xcdTA0NDUnLCdcXHUwNDI2JzonXFx1MDQ0NicsJ1xcdTA0MjcnOidcXHUwNDQ3JywnXFx1MDQyOCc6J1xcdTA0NDgnLCdcXHUwNDI5JzonXFx1MDQ0OScsJ1xcdTA0MkEnOidcXHUwNDRBJywnXFx1MDQyQic6J1xcdTA0NEInLCdcXHUwNDJDJzonXFx1MDQ0QycsJ1xcdTA0MkQnOidcXHUwNDREJywnXFx1MDQyRSc6J1xcdTA0NEUnLCdcXHUwNDJGJzonXFx1MDQ0RicsJ1xcdTA0NjAnOidcXHUwNDYxJywnXFx1MDQ2Mic6J1xcdTA0NjMnLCdcXHUwNDY0JzonXFx1MDQ2NScsJ1xcdTA0NjYnOidcXHUwNDY3JywnXFx1MDQ2OCc6J1xcdTA0NjknLCdcXHUwNDZBJzonXFx1MDQ2QicsJ1xcdTA0NkMnOidcXHUwNDZEJywnXFx1MDQ2RSc6J1xcdTA0NkYnLCdcXHUwNDcwJzonXFx1MDQ3MScsJ1xcdTA0NzInOidcXHUwNDczJywnXFx1MDQ3NCc6J1xcdTA0NzUnLCdcXHUwNDc2JzonXFx1MDQ3NycsJ1xcdTA0NzgnOidcXHUwNDc5JywnXFx1MDQ3QSc6J1xcdTA0N0InLCdcXHUwNDdDJzonXFx1MDQ3RCcsJ1xcdTA0N0UnOidcXHUwNDdGJywnXFx1MDQ4MCc6J1xcdTA0ODEnLCdcXHUwNDhBJzonXFx1MDQ4QicsJ1xcdTA0OEMnOidcXHUwNDhEJywnXFx1MDQ4RSc6J1xcdTA0OEYnLCdcXHUwNDkwJzonXFx1MDQ5MScsJ1xcdTA0OTInOidcXHUwNDkzJywnXFx1MDQ5NCc6J1xcdTA0OTUnLCdcXHUwNDk2JzonXFx1MDQ5NycsJ1xcdTA0OTgnOidcXHUwNDk5JywnXFx1MDQ5QSc6J1xcdTA0OUInLCdcXHUwNDlDJzonXFx1MDQ5RCcsJ1xcdTA0OUUnOidcXHUwNDlGJywnXFx1MDRBMCc6J1xcdTA0QTEnLCdcXHUwNEEyJzonXFx1MDRBMycsJ1xcdTA0QTQnOidcXHUwNEE1JywnXFx1MDRBNic6J1xcdTA0QTcnLCdcXHUwNEE4JzonXFx1MDRBOScsJ1xcdTA0QUEnOidcXHUwNEFCJywnXFx1MDRBQyc6J1xcdTA0QUQnLCdcXHUwNEFFJzonXFx1MDRBRicsJ1xcdTA0QjAnOidcXHUwNEIxJywnXFx1MDRCMic6J1xcdTA0QjMnLCdcXHUwNEI0JzonXFx1MDRCNScsJ1xcdTA0QjYnOidcXHUwNEI3JywnXFx1MDRCOCc6J1xcdTA0QjknLCdcXHUwNEJBJzonXFx1MDRCQicsJ1xcdTA0QkMnOidcXHUwNEJEJywnXFx1MDRCRSc6J1xcdTA0QkYnLCdcXHUwNEMwJzonXFx1MDRDRicsJ1xcdTA0QzEnOidcXHUwNEMyJywnXFx1MDRDMyc6J1xcdTA0QzQnLCdcXHUwNEM1JzonXFx1MDRDNicsJ1xcdTA0QzcnOidcXHUwNEM4JywnXFx1MDRDOSc6J1xcdTA0Q0EnLCdcXHUwNENCJzonXFx1MDRDQycsJ1xcdTA0Q0QnOidcXHUwNENFJywnXFx1MDREMCc6J1xcdTA0RDEnLCdcXHUwNEQyJzonXFx1MDREMycsJ1xcdTA0RDQnOidcXHUwNEQ1JywnXFx1MDRENic6J1xcdTA0RDcnLCdcXHUwNEQ4JzonXFx1MDREOScsJ1xcdTA0REEnOidcXHUwNERCJywnXFx1MDREQyc6J1xcdTA0REQnLCdcXHUwNERFJzonXFx1MDRERicsJ1xcdTA0RTAnOidcXHUwNEUxJywnXFx1MDRFMic6J1xcdTA0RTMnLCdcXHUwNEU0JzonXFx1MDRFNScsJ1xcdTA0RTYnOidcXHUwNEU3JywnXFx1MDRFOCc6J1xcdTA0RTknLCdcXHUwNEVBJzonXFx1MDRFQicsJ1xcdTA0RUMnOidcXHUwNEVEJywnXFx1MDRFRSc6J1xcdTA0RUYnLCdcXHUwNEYwJzonXFx1MDRGMScsJ1xcdTA0RjInOidcXHUwNEYzJywnXFx1MDRGNCc6J1xcdTA0RjUnLCdcXHUwNEY2JzonXFx1MDRGNycsJ1xcdTA0RjgnOidcXHUwNEY5JywnXFx1MDRGQSc6J1xcdTA0RkInLCdcXHUwNEZDJzonXFx1MDRGRCcsJ1xcdTA0RkUnOidcXHUwNEZGJywnXFx1MDUwMCc6J1xcdTA1MDEnLCdcXHUwNTAyJzonXFx1MDUwMycsJ1xcdTA1MDQnOidcXHUwNTA1JywnXFx1MDUwNic6J1xcdTA1MDcnLCdcXHUwNTA4JzonXFx1MDUwOScsJ1xcdTA1MEEnOidcXHUwNTBCJywnXFx1MDUwQyc6J1xcdTA1MEQnLCdcXHUwNTBFJzonXFx1MDUwRicsJ1xcdTA1MTAnOidcXHUwNTExJywnXFx1MDUxMic6J1xcdTA1MTMnLCdcXHUwNTE0JzonXFx1MDUxNScsJ1xcdTA1MTYnOidcXHUwNTE3JywnXFx1MDUxOCc6J1xcdTA1MTknLCdcXHUwNTFBJzonXFx1MDUxQicsJ1xcdTA1MUMnOidcXHUwNTFEJywnXFx1MDUxRSc6J1xcdTA1MUYnLCdcXHUwNTIwJzonXFx1MDUyMScsJ1xcdTA1MjInOidcXHUwNTIzJywnXFx1MDUyNCc6J1xcdTA1MjUnLCdcXHUwNTI2JzonXFx1MDUyNycsJ1xcdTA1MjgnOidcXHUwNTI5JywnXFx1MDUyQSc6J1xcdTA1MkInLCdcXHUwNTJDJzonXFx1MDUyRCcsJ1xcdTA1MkUnOidcXHUwNTJGJywnXFx1MDUzMSc6J1xcdTA1NjEnLCdcXHUwNTMyJzonXFx1MDU2MicsJ1xcdTA1MzMnOidcXHUwNTYzJywnXFx1MDUzNCc6J1xcdTA1NjQnLCdcXHUwNTM1JzonXFx1MDU2NScsJ1xcdTA1MzYnOidcXHUwNTY2JywnXFx1MDUzNyc6J1xcdTA1NjcnLCdcXHUwNTM4JzonXFx1MDU2OCcsJ1xcdTA1MzknOidcXHUwNTY5JywnXFx1MDUzQSc6J1xcdTA1NkEnLCdcXHUwNTNCJzonXFx1MDU2QicsJ1xcdTA1M0MnOidcXHUwNTZDJywnXFx1MDUzRCc6J1xcdTA1NkQnLCdcXHUwNTNFJzonXFx1MDU2RScsJ1xcdTA1M0YnOidcXHUwNTZGJywnXFx1MDU0MCc6J1xcdTA1NzAnLCdcXHUwNTQxJzonXFx1MDU3MScsJ1xcdTA1NDInOidcXHUwNTcyJywnXFx1MDU0Myc6J1xcdTA1NzMnLCdcXHUwNTQ0JzonXFx1MDU3NCcsJ1xcdTA1NDUnOidcXHUwNTc1JywnXFx1MDU0Nic6J1xcdTA1NzYnLCdcXHUwNTQ3JzonXFx1MDU3NycsJ1xcdTA1NDgnOidcXHUwNTc4JywnXFx1MDU0OSc6J1xcdTA1NzknLCdcXHUwNTRBJzonXFx1MDU3QScsJ1xcdTA1NEInOidcXHUwNTdCJywnXFx1MDU0Qyc6J1xcdTA1N0MnLCdcXHUwNTREJzonXFx1MDU3RCcsJ1xcdTA1NEUnOidcXHUwNTdFJywnXFx1MDU0Ric6J1xcdTA1N0YnLCdcXHUwNTUwJzonXFx1MDU4MCcsJ1xcdTA1NTEnOidcXHUwNTgxJywnXFx1MDU1Mic6J1xcdTA1ODInLCdcXHUwNTUzJzonXFx1MDU4MycsJ1xcdTA1NTQnOidcXHUwNTg0JywnXFx1MDU1NSc6J1xcdTA1ODUnLCdcXHUwNTU2JzonXFx1MDU4NicsJ1xcdTEwQTAnOidcXHUyRDAwJywnXFx1MTBBMSc6J1xcdTJEMDEnLCdcXHUxMEEyJzonXFx1MkQwMicsJ1xcdTEwQTMnOidcXHUyRDAzJywnXFx1MTBBNCc6J1xcdTJEMDQnLCdcXHUxMEE1JzonXFx1MkQwNScsJ1xcdTEwQTYnOidcXHUyRDA2JywnXFx1MTBBNyc6J1xcdTJEMDcnLCdcXHUxMEE4JzonXFx1MkQwOCcsJ1xcdTEwQTknOidcXHUyRDA5JywnXFx1MTBBQSc6J1xcdTJEMEEnLCdcXHUxMEFCJzonXFx1MkQwQicsJ1xcdTEwQUMnOidcXHUyRDBDJywnXFx1MTBBRCc6J1xcdTJEMEQnLCdcXHUxMEFFJzonXFx1MkQwRScsJ1xcdTEwQUYnOidcXHUyRDBGJywnXFx1MTBCMCc6J1xcdTJEMTAnLCdcXHUxMEIxJzonXFx1MkQxMScsJ1xcdTEwQjInOidcXHUyRDEyJywnXFx1MTBCMyc6J1xcdTJEMTMnLCdcXHUxMEI0JzonXFx1MkQxNCcsJ1xcdTEwQjUnOidcXHUyRDE1JywnXFx1MTBCNic6J1xcdTJEMTYnLCdcXHUxMEI3JzonXFx1MkQxNycsJ1xcdTEwQjgnOidcXHUyRDE4JywnXFx1MTBCOSc6J1xcdTJEMTknLCdcXHUxMEJBJzonXFx1MkQxQScsJ1xcdTEwQkInOidcXHUyRDFCJywnXFx1MTBCQyc6J1xcdTJEMUMnLCdcXHUxMEJEJzonXFx1MkQxRCcsJ1xcdTEwQkUnOidcXHUyRDFFJywnXFx1MTBCRic6J1xcdTJEMUYnLCdcXHUxMEMwJzonXFx1MkQyMCcsJ1xcdTEwQzEnOidcXHUyRDIxJywnXFx1MTBDMic6J1xcdTJEMjInLCdcXHUxMEMzJzonXFx1MkQyMycsJ1xcdTEwQzQnOidcXHUyRDI0JywnXFx1MTBDNSc6J1xcdTJEMjUnLCdcXHUxMEM3JzonXFx1MkQyNycsJ1xcdTEwQ0QnOidcXHUyRDJEJywnXFx1MUUwMCc6J1xcdTFFMDEnLCdcXHUxRTAyJzonXFx1MUUwMycsJ1xcdTFFMDQnOidcXHUxRTA1JywnXFx1MUUwNic6J1xcdTFFMDcnLCdcXHUxRTA4JzonXFx1MUUwOScsJ1xcdTFFMEEnOidcXHUxRTBCJywnXFx1MUUwQyc6J1xcdTFFMEQnLCdcXHUxRTBFJzonXFx1MUUwRicsJ1xcdTFFMTAnOidcXHUxRTExJywnXFx1MUUxMic6J1xcdTFFMTMnLCdcXHUxRTE0JzonXFx1MUUxNScsJ1xcdTFFMTYnOidcXHUxRTE3JywnXFx1MUUxOCc6J1xcdTFFMTknLCdcXHUxRTFBJzonXFx1MUUxQicsJ1xcdTFFMUMnOidcXHUxRTFEJywnXFx1MUUxRSc6J1xcdTFFMUYnLCdcXHUxRTIwJzonXFx1MUUyMScsJ1xcdTFFMjInOidcXHUxRTIzJywnXFx1MUUyNCc6J1xcdTFFMjUnLCdcXHUxRTI2JzonXFx1MUUyNycsJ1xcdTFFMjgnOidcXHUxRTI5JywnXFx1MUUyQSc6J1xcdTFFMkInLCdcXHUxRTJDJzonXFx1MUUyRCcsJ1xcdTFFMkUnOidcXHUxRTJGJywnXFx1MUUzMCc6J1xcdTFFMzEnLCdcXHUxRTMyJzonXFx1MUUzMycsJ1xcdTFFMzQnOidcXHUxRTM1JywnXFx1MUUzNic6J1xcdTFFMzcnLCdcXHUxRTM4JzonXFx1MUUzOScsJ1xcdTFFM0EnOidcXHUxRTNCJywnXFx1MUUzQyc6J1xcdTFFM0QnLCdcXHUxRTNFJzonXFx1MUUzRicsJ1xcdTFFNDAnOidcXHUxRTQxJywnXFx1MUU0Mic6J1xcdTFFNDMnLCdcXHUxRTQ0JzonXFx1MUU0NScsJ1xcdTFFNDYnOidcXHUxRTQ3JywnXFx1MUU0OCc6J1xcdTFFNDknLCdcXHUxRTRBJzonXFx1MUU0QicsJ1xcdTFFNEMnOidcXHUxRTREJywnXFx1MUU0RSc6J1xcdTFFNEYnLCdcXHUxRTUwJzonXFx1MUU1MScsJ1xcdTFFNTInOidcXHUxRTUzJywnXFx1MUU1NCc6J1xcdTFFNTUnLCdcXHUxRTU2JzonXFx1MUU1NycsJ1xcdTFFNTgnOidcXHUxRTU5JywnXFx1MUU1QSc6J1xcdTFFNUInLCdcXHUxRTVDJzonXFx1MUU1RCcsJ1xcdTFFNUUnOidcXHUxRTVGJywnXFx1MUU2MCc6J1xcdTFFNjEnLCdcXHUxRTYyJzonXFx1MUU2MycsJ1xcdTFFNjQnOidcXHUxRTY1JywnXFx1MUU2Nic6J1xcdTFFNjcnLCdcXHUxRTY4JzonXFx1MUU2OScsJ1xcdTFFNkEnOidcXHUxRTZCJywnXFx1MUU2Qyc6J1xcdTFFNkQnLCdcXHUxRTZFJzonXFx1MUU2RicsJ1xcdTFFNzAnOidcXHUxRTcxJywnXFx1MUU3Mic6J1xcdTFFNzMnLCdcXHUxRTc0JzonXFx1MUU3NScsJ1xcdTFFNzYnOidcXHUxRTc3JywnXFx1MUU3OCc6J1xcdTFFNzknLCdcXHUxRTdBJzonXFx1MUU3QicsJ1xcdTFFN0MnOidcXHUxRTdEJywnXFx1MUU3RSc6J1xcdTFFN0YnLCdcXHUxRTgwJzonXFx1MUU4MScsJ1xcdTFFODInOidcXHUxRTgzJywnXFx1MUU4NCc6J1xcdTFFODUnLCdcXHUxRTg2JzonXFx1MUU4NycsJ1xcdTFFODgnOidcXHUxRTg5JywnXFx1MUU4QSc6J1xcdTFFOEInLCdcXHUxRThDJzonXFx1MUU4RCcsJ1xcdTFFOEUnOidcXHUxRThGJywnXFx1MUU5MCc6J1xcdTFFOTEnLCdcXHUxRTkyJzonXFx1MUU5MycsJ1xcdTFFOTQnOidcXHUxRTk1JywnXFx1MUU5Qic6J1xcdTFFNjEnLCdcXHUxRUEwJzonXFx1MUVBMScsJ1xcdTFFQTInOidcXHUxRUEzJywnXFx1MUVBNCc6J1xcdTFFQTUnLCdcXHUxRUE2JzonXFx1MUVBNycsJ1xcdTFFQTgnOidcXHUxRUE5JywnXFx1MUVBQSc6J1xcdTFFQUInLCdcXHUxRUFDJzonXFx1MUVBRCcsJ1xcdTFFQUUnOidcXHUxRUFGJywnXFx1MUVCMCc6J1xcdTFFQjEnLCdcXHUxRUIyJzonXFx1MUVCMycsJ1xcdTFFQjQnOidcXHUxRUI1JywnXFx1MUVCNic6J1xcdTFFQjcnLCdcXHUxRUI4JzonXFx1MUVCOScsJ1xcdTFFQkEnOidcXHUxRUJCJywnXFx1MUVCQyc6J1xcdTFFQkQnLCdcXHUxRUJFJzonXFx1MUVCRicsJ1xcdTFFQzAnOidcXHUxRUMxJywnXFx1MUVDMic6J1xcdTFFQzMnLCdcXHUxRUM0JzonXFx1MUVDNScsJ1xcdTFFQzYnOidcXHUxRUM3JywnXFx1MUVDOCc6J1xcdTFFQzknLCdcXHUxRUNBJzonXFx1MUVDQicsJ1xcdTFFQ0MnOidcXHUxRUNEJywnXFx1MUVDRSc6J1xcdTFFQ0YnLCdcXHUxRUQwJzonXFx1MUVEMScsJ1xcdTFFRDInOidcXHUxRUQzJywnXFx1MUVENCc6J1xcdTFFRDUnLCdcXHUxRUQ2JzonXFx1MUVENycsJ1xcdTFFRDgnOidcXHUxRUQ5JywnXFx1MUVEQSc6J1xcdTFFREInLCdcXHUxRURDJzonXFx1MUVERCcsJ1xcdTFFREUnOidcXHUxRURGJywnXFx1MUVFMCc6J1xcdTFFRTEnLCdcXHUxRUUyJzonXFx1MUVFMycsJ1xcdTFFRTQnOidcXHUxRUU1JywnXFx1MUVFNic6J1xcdTFFRTcnLCdcXHUxRUU4JzonXFx1MUVFOScsJ1xcdTFFRUEnOidcXHUxRUVCJywnXFx1MUVFQyc6J1xcdTFFRUQnLCdcXHUxRUVFJzonXFx1MUVFRicsJ1xcdTFFRjAnOidcXHUxRUYxJywnXFx1MUVGMic6J1xcdTFFRjMnLCdcXHUxRUY0JzonXFx1MUVGNScsJ1xcdTFFRjYnOidcXHUxRUY3JywnXFx1MUVGOCc6J1xcdTFFRjknLCdcXHUxRUZBJzonXFx1MUVGQicsJ1xcdTFFRkMnOidcXHUxRUZEJywnXFx1MUVGRSc6J1xcdTFFRkYnLCdcXHUxRjA4JzonXFx1MUYwMCcsJ1xcdTFGMDknOidcXHUxRjAxJywnXFx1MUYwQSc6J1xcdTFGMDInLCdcXHUxRjBCJzonXFx1MUYwMycsJ1xcdTFGMEMnOidcXHUxRjA0JywnXFx1MUYwRCc6J1xcdTFGMDUnLCdcXHUxRjBFJzonXFx1MUYwNicsJ1xcdTFGMEYnOidcXHUxRjA3JywnXFx1MUYxOCc6J1xcdTFGMTAnLCdcXHUxRjE5JzonXFx1MUYxMScsJ1xcdTFGMUEnOidcXHUxRjEyJywnXFx1MUYxQic6J1xcdTFGMTMnLCdcXHUxRjFDJzonXFx1MUYxNCcsJ1xcdTFGMUQnOidcXHUxRjE1JywnXFx1MUYyOCc6J1xcdTFGMjAnLCdcXHUxRjI5JzonXFx1MUYyMScsJ1xcdTFGMkEnOidcXHUxRjIyJywnXFx1MUYyQic6J1xcdTFGMjMnLCdcXHUxRjJDJzonXFx1MUYyNCcsJ1xcdTFGMkQnOidcXHUxRjI1JywnXFx1MUYyRSc6J1xcdTFGMjYnLCdcXHUxRjJGJzonXFx1MUYyNycsJ1xcdTFGMzgnOidcXHUxRjMwJywnXFx1MUYzOSc6J1xcdTFGMzEnLCdcXHUxRjNBJzonXFx1MUYzMicsJ1xcdTFGM0InOidcXHUxRjMzJywnXFx1MUYzQyc6J1xcdTFGMzQnLCdcXHUxRjNEJzonXFx1MUYzNScsJ1xcdTFGM0UnOidcXHUxRjM2JywnXFx1MUYzRic6J1xcdTFGMzcnLCdcXHUxRjQ4JzonXFx1MUY0MCcsJ1xcdTFGNDknOidcXHUxRjQxJywnXFx1MUY0QSc6J1xcdTFGNDInLCdcXHUxRjRCJzonXFx1MUY0MycsJ1xcdTFGNEMnOidcXHUxRjQ0JywnXFx1MUY0RCc6J1xcdTFGNDUnLCdcXHUxRjU5JzonXFx1MUY1MScsJ1xcdTFGNUInOidcXHUxRjUzJywnXFx1MUY1RCc6J1xcdTFGNTUnLCdcXHUxRjVGJzonXFx1MUY1NycsJ1xcdTFGNjgnOidcXHUxRjYwJywnXFx1MUY2OSc6J1xcdTFGNjEnLCdcXHUxRjZBJzonXFx1MUY2MicsJ1xcdTFGNkInOidcXHUxRjYzJywnXFx1MUY2Qyc6J1xcdTFGNjQnLCdcXHUxRjZEJzonXFx1MUY2NScsJ1xcdTFGNkUnOidcXHUxRjY2JywnXFx1MUY2Ric6J1xcdTFGNjcnLCdcXHUxRkI4JzonXFx1MUZCMCcsJ1xcdTFGQjknOidcXHUxRkIxJywnXFx1MUZCQSc6J1xcdTFGNzAnLCdcXHUxRkJCJzonXFx1MUY3MScsJ1xcdTFGQkUnOidcXHUwM0I5JywnXFx1MUZDOCc6J1xcdTFGNzInLCdcXHUxRkM5JzonXFx1MUY3MycsJ1xcdTFGQ0EnOidcXHUxRjc0JywnXFx1MUZDQic6J1xcdTFGNzUnLCdcXHUxRkQ4JzonXFx1MUZEMCcsJ1xcdTFGRDknOidcXHUxRkQxJywnXFx1MUZEQSc6J1xcdTFGNzYnLCdcXHUxRkRCJzonXFx1MUY3NycsJ1xcdTFGRTgnOidcXHUxRkUwJywnXFx1MUZFOSc6J1xcdTFGRTEnLCdcXHUxRkVBJzonXFx1MUY3QScsJ1xcdTFGRUInOidcXHUxRjdCJywnXFx1MUZFQyc6J1xcdTFGRTUnLCdcXHUxRkY4JzonXFx1MUY3OCcsJ1xcdTFGRjknOidcXHUxRjc5JywnXFx1MUZGQSc6J1xcdTFGN0MnLCdcXHUxRkZCJzonXFx1MUY3RCcsJ1xcdTIxMjYnOidcXHUwM0M5JywnXFx1MjEyQSc6J2snLCdcXHUyMTJCJzonXFx4RTUnLCdcXHUyMTMyJzonXFx1MjE0RScsJ1xcdTIxNjAnOidcXHUyMTcwJywnXFx1MjE2MSc6J1xcdTIxNzEnLCdcXHUyMTYyJzonXFx1MjE3MicsJ1xcdTIxNjMnOidcXHUyMTczJywnXFx1MjE2NCc6J1xcdTIxNzQnLCdcXHUyMTY1JzonXFx1MjE3NScsJ1xcdTIxNjYnOidcXHUyMTc2JywnXFx1MjE2Nyc6J1xcdTIxNzcnLCdcXHUyMTY4JzonXFx1MjE3OCcsJ1xcdTIxNjknOidcXHUyMTc5JywnXFx1MjE2QSc6J1xcdTIxN0EnLCdcXHUyMTZCJzonXFx1MjE3QicsJ1xcdTIxNkMnOidcXHUyMTdDJywnXFx1MjE2RCc6J1xcdTIxN0QnLCdcXHUyMTZFJzonXFx1MjE3RScsJ1xcdTIxNkYnOidcXHUyMTdGJywnXFx1MjE4Myc6J1xcdTIxODQnLCdcXHUyNEI2JzonXFx1MjREMCcsJ1xcdTI0QjcnOidcXHUyNEQxJywnXFx1MjRCOCc6J1xcdTI0RDInLCdcXHUyNEI5JzonXFx1MjREMycsJ1xcdTI0QkEnOidcXHUyNEQ0JywnXFx1MjRCQic6J1xcdTI0RDUnLCdcXHUyNEJDJzonXFx1MjRENicsJ1xcdTI0QkQnOidcXHUyNEQ3JywnXFx1MjRCRSc6J1xcdTI0RDgnLCdcXHUyNEJGJzonXFx1MjREOScsJ1xcdTI0QzAnOidcXHUyNERBJywnXFx1MjRDMSc6J1xcdTI0REInLCdcXHUyNEMyJzonXFx1MjREQycsJ1xcdTI0QzMnOidcXHUyNEREJywnXFx1MjRDNCc6J1xcdTI0REUnLCdcXHUyNEM1JzonXFx1MjRERicsJ1xcdTI0QzYnOidcXHUyNEUwJywnXFx1MjRDNyc6J1xcdTI0RTEnLCdcXHUyNEM4JzonXFx1MjRFMicsJ1xcdTI0QzknOidcXHUyNEUzJywnXFx1MjRDQSc6J1xcdTI0RTQnLCdcXHUyNENCJzonXFx1MjRFNScsJ1xcdTI0Q0MnOidcXHUyNEU2JywnXFx1MjRDRCc6J1xcdTI0RTcnLCdcXHUyNENFJzonXFx1MjRFOCcsJ1xcdTI0Q0YnOidcXHUyNEU5JywnXFx1MkMwMCc6J1xcdTJDMzAnLCdcXHUyQzAxJzonXFx1MkMzMScsJ1xcdTJDMDInOidcXHUyQzMyJywnXFx1MkMwMyc6J1xcdTJDMzMnLCdcXHUyQzA0JzonXFx1MkMzNCcsJ1xcdTJDMDUnOidcXHUyQzM1JywnXFx1MkMwNic6J1xcdTJDMzYnLCdcXHUyQzA3JzonXFx1MkMzNycsJ1xcdTJDMDgnOidcXHUyQzM4JywnXFx1MkMwOSc6J1xcdTJDMzknLCdcXHUyQzBBJzonXFx1MkMzQScsJ1xcdTJDMEInOidcXHUyQzNCJywnXFx1MkMwQyc6J1xcdTJDM0MnLCdcXHUyQzBEJzonXFx1MkMzRCcsJ1xcdTJDMEUnOidcXHUyQzNFJywnXFx1MkMwRic6J1xcdTJDM0YnLCdcXHUyQzEwJzonXFx1MkM0MCcsJ1xcdTJDMTEnOidcXHUyQzQxJywnXFx1MkMxMic6J1xcdTJDNDInLCdcXHUyQzEzJzonXFx1MkM0MycsJ1xcdTJDMTQnOidcXHUyQzQ0JywnXFx1MkMxNSc6J1xcdTJDNDUnLCdcXHUyQzE2JzonXFx1MkM0NicsJ1xcdTJDMTcnOidcXHUyQzQ3JywnXFx1MkMxOCc6J1xcdTJDNDgnLCdcXHUyQzE5JzonXFx1MkM0OScsJ1xcdTJDMUEnOidcXHUyQzRBJywnXFx1MkMxQic6J1xcdTJDNEInLCdcXHUyQzFDJzonXFx1MkM0QycsJ1xcdTJDMUQnOidcXHUyQzREJywnXFx1MkMxRSc6J1xcdTJDNEUnLCdcXHUyQzFGJzonXFx1MkM0RicsJ1xcdTJDMjAnOidcXHUyQzUwJywnXFx1MkMyMSc6J1xcdTJDNTEnLCdcXHUyQzIyJzonXFx1MkM1MicsJ1xcdTJDMjMnOidcXHUyQzUzJywnXFx1MkMyNCc6J1xcdTJDNTQnLCdcXHUyQzI1JzonXFx1MkM1NScsJ1xcdTJDMjYnOidcXHUyQzU2JywnXFx1MkMyNyc6J1xcdTJDNTcnLCdcXHUyQzI4JzonXFx1MkM1OCcsJ1xcdTJDMjknOidcXHUyQzU5JywnXFx1MkMyQSc6J1xcdTJDNUEnLCdcXHUyQzJCJzonXFx1MkM1QicsJ1xcdTJDMkMnOidcXHUyQzVDJywnXFx1MkMyRCc6J1xcdTJDNUQnLCdcXHUyQzJFJzonXFx1MkM1RScsJ1xcdTJDNjAnOidcXHUyQzYxJywnXFx1MkM2Mic6J1xcdTAyNkInLCdcXHUyQzYzJzonXFx1MUQ3RCcsJ1xcdTJDNjQnOidcXHUwMjdEJywnXFx1MkM2Nyc6J1xcdTJDNjgnLCdcXHUyQzY5JzonXFx1MkM2QScsJ1xcdTJDNkInOidcXHUyQzZDJywnXFx1MkM2RCc6J1xcdTAyNTEnLCdcXHUyQzZFJzonXFx1MDI3MScsJ1xcdTJDNkYnOidcXHUwMjUwJywnXFx1MkM3MCc6J1xcdTAyNTInLCdcXHUyQzcyJzonXFx1MkM3MycsJ1xcdTJDNzUnOidcXHUyQzc2JywnXFx1MkM3RSc6J1xcdTAyM0YnLCdcXHUyQzdGJzonXFx1MDI0MCcsJ1xcdTJDODAnOidcXHUyQzgxJywnXFx1MkM4Mic6J1xcdTJDODMnLCdcXHUyQzg0JzonXFx1MkM4NScsJ1xcdTJDODYnOidcXHUyQzg3JywnXFx1MkM4OCc6J1xcdTJDODknLCdcXHUyQzhBJzonXFx1MkM4QicsJ1xcdTJDOEMnOidcXHUyQzhEJywnXFx1MkM4RSc6J1xcdTJDOEYnLCdcXHUyQzkwJzonXFx1MkM5MScsJ1xcdTJDOTInOidcXHUyQzkzJywnXFx1MkM5NCc6J1xcdTJDOTUnLCdcXHUyQzk2JzonXFx1MkM5NycsJ1xcdTJDOTgnOidcXHUyQzk5JywnXFx1MkM5QSc6J1xcdTJDOUInLCdcXHUyQzlDJzonXFx1MkM5RCcsJ1xcdTJDOUUnOidcXHUyQzlGJywnXFx1MkNBMCc6J1xcdTJDQTEnLCdcXHUyQ0EyJzonXFx1MkNBMycsJ1xcdTJDQTQnOidcXHUyQ0E1JywnXFx1MkNBNic6J1xcdTJDQTcnLCdcXHUyQ0E4JzonXFx1MkNBOScsJ1xcdTJDQUEnOidcXHUyQ0FCJywnXFx1MkNBQyc6J1xcdTJDQUQnLCdcXHUyQ0FFJzonXFx1MkNBRicsJ1xcdTJDQjAnOidcXHUyQ0IxJywnXFx1MkNCMic6J1xcdTJDQjMnLCdcXHUyQ0I0JzonXFx1MkNCNScsJ1xcdTJDQjYnOidcXHUyQ0I3JywnXFx1MkNCOCc6J1xcdTJDQjknLCdcXHUyQ0JBJzonXFx1MkNCQicsJ1xcdTJDQkMnOidcXHUyQ0JEJywnXFx1MkNCRSc6J1xcdTJDQkYnLCdcXHUyQ0MwJzonXFx1MkNDMScsJ1xcdTJDQzInOidcXHUyQ0MzJywnXFx1MkNDNCc6J1xcdTJDQzUnLCdcXHUyQ0M2JzonXFx1MkNDNycsJ1xcdTJDQzgnOidcXHUyQ0M5JywnXFx1MkNDQSc6J1xcdTJDQ0InLCdcXHUyQ0NDJzonXFx1MkNDRCcsJ1xcdTJDQ0UnOidcXHUyQ0NGJywnXFx1MkNEMCc6J1xcdTJDRDEnLCdcXHUyQ0QyJzonXFx1MkNEMycsJ1xcdTJDRDQnOidcXHUyQ0Q1JywnXFx1MkNENic6J1xcdTJDRDcnLCdcXHUyQ0Q4JzonXFx1MkNEOScsJ1xcdTJDREEnOidcXHUyQ0RCJywnXFx1MkNEQyc6J1xcdTJDREQnLCdcXHUyQ0RFJzonXFx1MkNERicsJ1xcdTJDRTAnOidcXHUyQ0UxJywnXFx1MkNFMic6J1xcdTJDRTMnLCdcXHUyQ0VCJzonXFx1MkNFQycsJ1xcdTJDRUQnOidcXHUyQ0VFJywnXFx1MkNGMic6J1xcdTJDRjMnLCdcXHVBNjQwJzonXFx1QTY0MScsJ1xcdUE2NDInOidcXHVBNjQzJywnXFx1QTY0NCc6J1xcdUE2NDUnLCdcXHVBNjQ2JzonXFx1QTY0NycsJ1xcdUE2NDgnOidcXHVBNjQ5JywnXFx1QTY0QSc6J1xcdUE2NEInLCdcXHVBNjRDJzonXFx1QTY0RCcsJ1xcdUE2NEUnOidcXHVBNjRGJywnXFx1QTY1MCc6J1xcdUE2NTEnLCdcXHVBNjUyJzonXFx1QTY1MycsJ1xcdUE2NTQnOidcXHVBNjU1JywnXFx1QTY1Nic6J1xcdUE2NTcnLCdcXHVBNjU4JzonXFx1QTY1OScsJ1xcdUE2NUEnOidcXHVBNjVCJywnXFx1QTY1Qyc6J1xcdUE2NUQnLCdcXHVBNjVFJzonXFx1QTY1RicsJ1xcdUE2NjAnOidcXHVBNjYxJywnXFx1QTY2Mic6J1xcdUE2NjMnLCdcXHVBNjY0JzonXFx1QTY2NScsJ1xcdUE2NjYnOidcXHVBNjY3JywnXFx1QTY2OCc6J1xcdUE2NjknLCdcXHVBNjZBJzonXFx1QTY2QicsJ1xcdUE2NkMnOidcXHVBNjZEJywnXFx1QTY4MCc6J1xcdUE2ODEnLCdcXHVBNjgyJzonXFx1QTY4MycsJ1xcdUE2ODQnOidcXHVBNjg1JywnXFx1QTY4Nic6J1xcdUE2ODcnLCdcXHVBNjg4JzonXFx1QTY4OScsJ1xcdUE2OEEnOidcXHVBNjhCJywnXFx1QTY4Qyc6J1xcdUE2OEQnLCdcXHVBNjhFJzonXFx1QTY4RicsJ1xcdUE2OTAnOidcXHVBNjkxJywnXFx1QTY5Mic6J1xcdUE2OTMnLCdcXHVBNjk0JzonXFx1QTY5NScsJ1xcdUE2OTYnOidcXHVBNjk3JywnXFx1QTY5OCc6J1xcdUE2OTknLCdcXHVBNjlBJzonXFx1QTY5QicsJ1xcdUE3MjInOidcXHVBNzIzJywnXFx1QTcyNCc6J1xcdUE3MjUnLCdcXHVBNzI2JzonXFx1QTcyNycsJ1xcdUE3MjgnOidcXHVBNzI5JywnXFx1QTcyQSc6J1xcdUE3MkInLCdcXHVBNzJDJzonXFx1QTcyRCcsJ1xcdUE3MkUnOidcXHVBNzJGJywnXFx1QTczMic6J1xcdUE3MzMnLCdcXHVBNzM0JzonXFx1QTczNScsJ1xcdUE3MzYnOidcXHVBNzM3JywnXFx1QTczOCc6J1xcdUE3MzknLCdcXHVBNzNBJzonXFx1QTczQicsJ1xcdUE3M0MnOidcXHVBNzNEJywnXFx1QTczRSc6J1xcdUE3M0YnLCdcXHVBNzQwJzonXFx1QTc0MScsJ1xcdUE3NDInOidcXHVBNzQzJywnXFx1QTc0NCc6J1xcdUE3NDUnLCdcXHVBNzQ2JzonXFx1QTc0NycsJ1xcdUE3NDgnOidcXHVBNzQ5JywnXFx1QTc0QSc6J1xcdUE3NEInLCdcXHVBNzRDJzonXFx1QTc0RCcsJ1xcdUE3NEUnOidcXHVBNzRGJywnXFx1QTc1MCc6J1xcdUE3NTEnLCdcXHVBNzUyJzonXFx1QTc1MycsJ1xcdUE3NTQnOidcXHVBNzU1JywnXFx1QTc1Nic6J1xcdUE3NTcnLCdcXHVBNzU4JzonXFx1QTc1OScsJ1xcdUE3NUEnOidcXHVBNzVCJywnXFx1QTc1Qyc6J1xcdUE3NUQnLCdcXHVBNzVFJzonXFx1QTc1RicsJ1xcdUE3NjAnOidcXHVBNzYxJywnXFx1QTc2Mic6J1xcdUE3NjMnLCdcXHVBNzY0JzonXFx1QTc2NScsJ1xcdUE3NjYnOidcXHVBNzY3JywnXFx1QTc2OCc6J1xcdUE3NjknLCdcXHVBNzZBJzonXFx1QTc2QicsJ1xcdUE3NkMnOidcXHVBNzZEJywnXFx1QTc2RSc6J1xcdUE3NkYnLCdcXHVBNzc5JzonXFx1QTc3QScsJ1xcdUE3N0InOidcXHVBNzdDJywnXFx1QTc3RCc6J1xcdTFENzknLCdcXHVBNzdFJzonXFx1QTc3RicsJ1xcdUE3ODAnOidcXHVBNzgxJywnXFx1QTc4Mic6J1xcdUE3ODMnLCdcXHVBNzg0JzonXFx1QTc4NScsJ1xcdUE3ODYnOidcXHVBNzg3JywnXFx1QTc4Qic6J1xcdUE3OEMnLCdcXHVBNzhEJzonXFx1MDI2NScsJ1xcdUE3OTAnOidcXHVBNzkxJywnXFx1QTc5Mic6J1xcdUE3OTMnLCdcXHVBNzk2JzonXFx1QTc5NycsJ1xcdUE3OTgnOidcXHVBNzk5JywnXFx1QTc5QSc6J1xcdUE3OUInLCdcXHVBNzlDJzonXFx1QTc5RCcsJ1xcdUE3OUUnOidcXHVBNzlGJywnXFx1QTdBMCc6J1xcdUE3QTEnLCdcXHVBN0EyJzonXFx1QTdBMycsJ1xcdUE3QTQnOidcXHVBN0E1JywnXFx1QTdBNic6J1xcdUE3QTcnLCdcXHVBN0E4JzonXFx1QTdBOScsJ1xcdUE3QUEnOidcXHUwMjY2JywnXFx1QTdBQic6J1xcdTAyNUMnLCdcXHVBN0FDJzonXFx1MDI2MScsJ1xcdUE3QUQnOidcXHUwMjZDJywnXFx1QTdCMCc6J1xcdTAyOUUnLCdcXHVBN0IxJzonXFx1MDI4NycsJ1xcdUZGMjEnOidcXHVGRjQxJywnXFx1RkYyMic6J1xcdUZGNDInLCdcXHVGRjIzJzonXFx1RkY0MycsJ1xcdUZGMjQnOidcXHVGRjQ0JywnXFx1RkYyNSc6J1xcdUZGNDUnLCdcXHVGRjI2JzonXFx1RkY0NicsJ1xcdUZGMjcnOidcXHVGRjQ3JywnXFx1RkYyOCc6J1xcdUZGNDgnLCdcXHVGRjI5JzonXFx1RkY0OScsJ1xcdUZGMkEnOidcXHVGRjRBJywnXFx1RkYyQic6J1xcdUZGNEInLCdcXHVGRjJDJzonXFx1RkY0QycsJ1xcdUZGMkQnOidcXHVGRjREJywnXFx1RkYyRSc6J1xcdUZGNEUnLCdcXHVGRjJGJzonXFx1RkY0RicsJ1xcdUZGMzAnOidcXHVGRjUwJywnXFx1RkYzMSc6J1xcdUZGNTEnLCdcXHVGRjMyJzonXFx1RkY1MicsJ1xcdUZGMzMnOidcXHVGRjUzJywnXFx1RkYzNCc6J1xcdUZGNTQnLCdcXHVGRjM1JzonXFx1RkY1NScsJ1xcdUZGMzYnOidcXHVGRjU2JywnXFx1RkYzNyc6J1xcdUZGNTcnLCdcXHVGRjM4JzonXFx1RkY1OCcsJ1xcdUZGMzknOidcXHVGRjU5JywnXFx1RkYzQSc6J1xcdUZGNUEnLCdcXHVEODAxXFx1REMwMCc6J1xcdUQ4MDFcXHVEQzI4JywnXFx1RDgwMVxcdURDMDEnOidcXHVEODAxXFx1REMyOScsJ1xcdUQ4MDFcXHVEQzAyJzonXFx1RDgwMVxcdURDMkEnLCdcXHVEODAxXFx1REMwMyc6J1xcdUQ4MDFcXHVEQzJCJywnXFx1RDgwMVxcdURDMDQnOidcXHVEODAxXFx1REMyQycsJ1xcdUQ4MDFcXHVEQzA1JzonXFx1RDgwMVxcdURDMkQnLCdcXHVEODAxXFx1REMwNic6J1xcdUQ4MDFcXHVEQzJFJywnXFx1RDgwMVxcdURDMDcnOidcXHVEODAxXFx1REMyRicsJ1xcdUQ4MDFcXHVEQzA4JzonXFx1RDgwMVxcdURDMzAnLCdcXHVEODAxXFx1REMwOSc6J1xcdUQ4MDFcXHVEQzMxJywnXFx1RDgwMVxcdURDMEEnOidcXHVEODAxXFx1REMzMicsJ1xcdUQ4MDFcXHVEQzBCJzonXFx1RDgwMVxcdURDMzMnLCdcXHVEODAxXFx1REMwQyc6J1xcdUQ4MDFcXHVEQzM0JywnXFx1RDgwMVxcdURDMEQnOidcXHVEODAxXFx1REMzNScsJ1xcdUQ4MDFcXHVEQzBFJzonXFx1RDgwMVxcdURDMzYnLCdcXHVEODAxXFx1REMwRic6J1xcdUQ4MDFcXHVEQzM3JywnXFx1RDgwMVxcdURDMTAnOidcXHVEODAxXFx1REMzOCcsJ1xcdUQ4MDFcXHVEQzExJzonXFx1RDgwMVxcdURDMzknLCdcXHVEODAxXFx1REMxMic6J1xcdUQ4MDFcXHVEQzNBJywnXFx1RDgwMVxcdURDMTMnOidcXHVEODAxXFx1REMzQicsJ1xcdUQ4MDFcXHVEQzE0JzonXFx1RDgwMVxcdURDM0MnLCdcXHVEODAxXFx1REMxNSc6J1xcdUQ4MDFcXHVEQzNEJywnXFx1RDgwMVxcdURDMTYnOidcXHVEODAxXFx1REMzRScsJ1xcdUQ4MDFcXHVEQzE3JzonXFx1RDgwMVxcdURDM0YnLCdcXHVEODAxXFx1REMxOCc6J1xcdUQ4MDFcXHVEQzQwJywnXFx1RDgwMVxcdURDMTknOidcXHVEODAxXFx1REM0MScsJ1xcdUQ4MDFcXHVEQzFBJzonXFx1RDgwMVxcdURDNDInLCdcXHVEODAxXFx1REMxQic6J1xcdUQ4MDFcXHVEQzQzJywnXFx1RDgwMVxcdURDMUMnOidcXHVEODAxXFx1REM0NCcsJ1xcdUQ4MDFcXHVEQzFEJzonXFx1RDgwMVxcdURDNDUnLCdcXHVEODAxXFx1REMxRSc6J1xcdUQ4MDFcXHVEQzQ2JywnXFx1RDgwMVxcdURDMUYnOidcXHVEODAxXFx1REM0NycsJ1xcdUQ4MDFcXHVEQzIwJzonXFx1RDgwMVxcdURDNDgnLCdcXHVEODAxXFx1REMyMSc6J1xcdUQ4MDFcXHVEQzQ5JywnXFx1RDgwMVxcdURDMjInOidcXHVEODAxXFx1REM0QScsJ1xcdUQ4MDFcXHVEQzIzJzonXFx1RDgwMVxcdURDNEInLCdcXHVEODAxXFx1REMyNCc6J1xcdUQ4MDFcXHVEQzRDJywnXFx1RDgwMVxcdURDMjUnOidcXHVEODAxXFx1REM0RCcsJ1xcdUQ4MDFcXHVEQzI2JzonXFx1RDgwMVxcdURDNEUnLCdcXHVEODAxXFx1REMyNyc6J1xcdUQ4MDFcXHVEQzRGJywnXFx1RDgwNlxcdURDQTAnOidcXHVEODA2XFx1RENDMCcsJ1xcdUQ4MDZcXHVEQ0ExJzonXFx1RDgwNlxcdURDQzEnLCdcXHVEODA2XFx1RENBMic6J1xcdUQ4MDZcXHVEQ0MyJywnXFx1RDgwNlxcdURDQTMnOidcXHVEODA2XFx1RENDMycsJ1xcdUQ4MDZcXHVEQ0E0JzonXFx1RDgwNlxcdURDQzQnLCdcXHVEODA2XFx1RENBNSc6J1xcdUQ4MDZcXHVEQ0M1JywnXFx1RDgwNlxcdURDQTYnOidcXHVEODA2XFx1RENDNicsJ1xcdUQ4MDZcXHVEQ0E3JzonXFx1RDgwNlxcdURDQzcnLCdcXHVEODA2XFx1RENBOCc6J1xcdUQ4MDZcXHVEQ0M4JywnXFx1RDgwNlxcdURDQTknOidcXHVEODA2XFx1RENDOScsJ1xcdUQ4MDZcXHVEQ0FBJzonXFx1RDgwNlxcdURDQ0EnLCdcXHVEODA2XFx1RENBQic6J1xcdUQ4MDZcXHVEQ0NCJywnXFx1RDgwNlxcdURDQUMnOidcXHVEODA2XFx1RENDQycsJ1xcdUQ4MDZcXHVEQ0FEJzonXFx1RDgwNlxcdURDQ0QnLCdcXHVEODA2XFx1RENBRSc6J1xcdUQ4MDZcXHVEQ0NFJywnXFx1RDgwNlxcdURDQUYnOidcXHVEODA2XFx1RENDRicsJ1xcdUQ4MDZcXHVEQ0IwJzonXFx1RDgwNlxcdURDRDAnLCdcXHVEODA2XFx1RENCMSc6J1xcdUQ4MDZcXHVEQ0QxJywnXFx1RDgwNlxcdURDQjInOidcXHVEODA2XFx1RENEMicsJ1xcdUQ4MDZcXHVEQ0IzJzonXFx1RDgwNlxcdURDRDMnLCdcXHVEODA2XFx1RENCNCc6J1xcdUQ4MDZcXHVEQ0Q0JywnXFx1RDgwNlxcdURDQjUnOidcXHVEODA2XFx1RENENScsJ1xcdUQ4MDZcXHVEQ0I2JzonXFx1RDgwNlxcdURDRDYnLCdcXHVEODA2XFx1RENCNyc6J1xcdUQ4MDZcXHVEQ0Q3JywnXFx1RDgwNlxcdURDQjgnOidcXHVEODA2XFx1RENEOCcsJ1xcdUQ4MDZcXHVEQ0I5JzonXFx1RDgwNlxcdURDRDknLCdcXHVEODA2XFx1RENCQSc6J1xcdUQ4MDZcXHVEQ0RBJywnXFx1RDgwNlxcdURDQkInOidcXHVEODA2XFx1RENEQicsJ1xcdUQ4MDZcXHVEQ0JDJzonXFx1RDgwNlxcdURDREMnLCdcXHVEODA2XFx1RENCRCc6J1xcdUQ4MDZcXHVEQ0REJywnXFx1RDgwNlxcdURDQkUnOidcXHVEODA2XFx1RENERScsJ1xcdUQ4MDZcXHVEQ0JGJzonXFx1RDgwNlxcdURDREYnLCdcXHhERic6J3NzJywnXFx1MDEzMCc6J2lcXHUwMzA3JywnXFx1MDE0OSc6J1xcdTAyQkNuJywnXFx1MDFGMCc6J2pcXHUwMzBDJywnXFx1MDM5MCc6J1xcdTAzQjlcXHUwMzA4XFx1MDMwMScsJ1xcdTAzQjAnOidcXHUwM0M1XFx1MDMwOFxcdTAzMDEnLCdcXHUwNTg3JzonXFx1MDU2NVxcdTA1ODInLCdcXHUxRTk2JzonaFxcdTAzMzEnLCdcXHUxRTk3JzondFxcdTAzMDgnLCdcXHUxRTk4Jzond1xcdTAzMEEnLCdcXHUxRTk5JzoneVxcdTAzMEEnLCdcXHUxRTlBJzonYVxcdTAyQkUnLCdcXHUxRTlFJzonc3MnLCdcXHUxRjUwJzonXFx1MDNDNVxcdTAzMTMnLCdcXHUxRjUyJzonXFx1MDNDNVxcdTAzMTNcXHUwMzAwJywnXFx1MUY1NCc6J1xcdTAzQzVcXHUwMzEzXFx1MDMwMScsJ1xcdTFGNTYnOidcXHUwM0M1XFx1MDMxM1xcdTAzNDInLCdcXHUxRjgwJzonXFx1MUYwMFxcdTAzQjknLCdcXHUxRjgxJzonXFx1MUYwMVxcdTAzQjknLCdcXHUxRjgyJzonXFx1MUYwMlxcdTAzQjknLCdcXHUxRjgzJzonXFx1MUYwM1xcdTAzQjknLCdcXHUxRjg0JzonXFx1MUYwNFxcdTAzQjknLCdcXHUxRjg1JzonXFx1MUYwNVxcdTAzQjknLCdcXHUxRjg2JzonXFx1MUYwNlxcdTAzQjknLCdcXHUxRjg3JzonXFx1MUYwN1xcdTAzQjknLCdcXHUxRjg4JzonXFx1MUYwMFxcdTAzQjknLCdcXHUxRjg5JzonXFx1MUYwMVxcdTAzQjknLCdcXHUxRjhBJzonXFx1MUYwMlxcdTAzQjknLCdcXHUxRjhCJzonXFx1MUYwM1xcdTAzQjknLCdcXHUxRjhDJzonXFx1MUYwNFxcdTAzQjknLCdcXHUxRjhEJzonXFx1MUYwNVxcdTAzQjknLCdcXHUxRjhFJzonXFx1MUYwNlxcdTAzQjknLCdcXHUxRjhGJzonXFx1MUYwN1xcdTAzQjknLCdcXHUxRjkwJzonXFx1MUYyMFxcdTAzQjknLCdcXHUxRjkxJzonXFx1MUYyMVxcdTAzQjknLCdcXHUxRjkyJzonXFx1MUYyMlxcdTAzQjknLCdcXHUxRjkzJzonXFx1MUYyM1xcdTAzQjknLCdcXHUxRjk0JzonXFx1MUYyNFxcdTAzQjknLCdcXHUxRjk1JzonXFx1MUYyNVxcdTAzQjknLCdcXHUxRjk2JzonXFx1MUYyNlxcdTAzQjknLCdcXHUxRjk3JzonXFx1MUYyN1xcdTAzQjknLCdcXHUxRjk4JzonXFx1MUYyMFxcdTAzQjknLCdcXHUxRjk5JzonXFx1MUYyMVxcdTAzQjknLCdcXHUxRjlBJzonXFx1MUYyMlxcdTAzQjknLCdcXHUxRjlCJzonXFx1MUYyM1xcdTAzQjknLCdcXHUxRjlDJzonXFx1MUYyNFxcdTAzQjknLCdcXHUxRjlEJzonXFx1MUYyNVxcdTAzQjknLCdcXHUxRjlFJzonXFx1MUYyNlxcdTAzQjknLCdcXHUxRjlGJzonXFx1MUYyN1xcdTAzQjknLCdcXHUxRkEwJzonXFx1MUY2MFxcdTAzQjknLCdcXHUxRkExJzonXFx1MUY2MVxcdTAzQjknLCdcXHUxRkEyJzonXFx1MUY2MlxcdTAzQjknLCdcXHUxRkEzJzonXFx1MUY2M1xcdTAzQjknLCdcXHUxRkE0JzonXFx1MUY2NFxcdTAzQjknLCdcXHUxRkE1JzonXFx1MUY2NVxcdTAzQjknLCdcXHUxRkE2JzonXFx1MUY2NlxcdTAzQjknLCdcXHUxRkE3JzonXFx1MUY2N1xcdTAzQjknLCdcXHUxRkE4JzonXFx1MUY2MFxcdTAzQjknLCdcXHUxRkE5JzonXFx1MUY2MVxcdTAzQjknLCdcXHUxRkFBJzonXFx1MUY2MlxcdTAzQjknLCdcXHUxRkFCJzonXFx1MUY2M1xcdTAzQjknLCdcXHUxRkFDJzonXFx1MUY2NFxcdTAzQjknLCdcXHUxRkFEJzonXFx1MUY2NVxcdTAzQjknLCdcXHUxRkFFJzonXFx1MUY2NlxcdTAzQjknLCdcXHUxRkFGJzonXFx1MUY2N1xcdTAzQjknLCdcXHUxRkIyJzonXFx1MUY3MFxcdTAzQjknLCdcXHUxRkIzJzonXFx1MDNCMVxcdTAzQjknLCdcXHUxRkI0JzonXFx1MDNBQ1xcdTAzQjknLCdcXHUxRkI2JzonXFx1MDNCMVxcdTAzNDInLCdcXHUxRkI3JzonXFx1MDNCMVxcdTAzNDJcXHUwM0I5JywnXFx1MUZCQyc6J1xcdTAzQjFcXHUwM0I5JywnXFx1MUZDMic6J1xcdTFGNzRcXHUwM0I5JywnXFx1MUZDMyc6J1xcdTAzQjdcXHUwM0I5JywnXFx1MUZDNCc6J1xcdTAzQUVcXHUwM0I5JywnXFx1MUZDNic6J1xcdTAzQjdcXHUwMzQyJywnXFx1MUZDNyc6J1xcdTAzQjdcXHUwMzQyXFx1MDNCOScsJ1xcdTFGQ0MnOidcXHUwM0I3XFx1MDNCOScsJ1xcdTFGRDInOidcXHUwM0I5XFx1MDMwOFxcdTAzMDAnLCdcXHUxRkQzJzonXFx1MDNCOVxcdTAzMDhcXHUwMzAxJywnXFx1MUZENic6J1xcdTAzQjlcXHUwMzQyJywnXFx1MUZENyc6J1xcdTAzQjlcXHUwMzA4XFx1MDM0MicsJ1xcdTFGRTInOidcXHUwM0M1XFx1MDMwOFxcdTAzMDAnLCdcXHUxRkUzJzonXFx1MDNDNVxcdTAzMDhcXHUwMzAxJywnXFx1MUZFNCc6J1xcdTAzQzFcXHUwMzEzJywnXFx1MUZFNic6J1xcdTAzQzVcXHUwMzQyJywnXFx1MUZFNyc6J1xcdTAzQzVcXHUwMzA4XFx1MDM0MicsJ1xcdTFGRjInOidcXHUxRjdDXFx1MDNCOScsJ1xcdTFGRjMnOidcXHUwM0M5XFx1MDNCOScsJ1xcdTFGRjQnOidcXHUwM0NFXFx1MDNCOScsJ1xcdTFGRjYnOidcXHUwM0M5XFx1MDM0MicsJ1xcdTFGRjcnOidcXHUwM0M5XFx1MDM0MlxcdTAzQjknLCdcXHUxRkZDJzonXFx1MDNDOVxcdTAzQjknLCdcXHVGQjAwJzonZmYnLCdcXHVGQjAxJzonZmknLCdcXHVGQjAyJzonZmwnLCdcXHVGQjAzJzonZmZpJywnXFx1RkIwNCc6J2ZmbCcsJ1xcdUZCMDUnOidzdCcsJ1xcdUZCMDYnOidzdCcsJ1xcdUZCMTMnOidcXHUwNTc0XFx1MDU3NicsJ1xcdUZCMTQnOidcXHUwNTc0XFx1MDU2NScsJ1xcdUZCMTUnOidcXHUwNTc0XFx1MDU2QicsJ1xcdUZCMTYnOidcXHUwNTdFXFx1MDU3NicsJ1xcdUZCMTcnOidcXHUwNTc0XFx1MDU2RCd9O1xuXG4vLyBOb3JtYWxpemUgcmVmZXJlbmNlIGxhYmVsOiBjb2xsYXBzZSBpbnRlcm5hbCB3aGl0ZXNwYWNlXG4vLyB0byBzaW5nbGUgc3BhY2UsIHJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UsIGNhc2UgZm9sZC5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSgxLCBzdHJpbmcubGVuZ3RoIC0gMSkudHJpbSgpLnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uKCQwKSB7XG4gICAgICAgIC8vIE5vdGU6IHRoZXJlIGlzIG5vIG5lZWQgdG8gY2hlY2sgYGhhc093blByb3BlcnR5KCQwKWAgaGVyZS5cbiAgICAgICAgLy8gSWYgY2hhcmFjdGVyIG5vdCBmb3VuZCBpbiBsb29rdXAgdGFibGUsIGl0IG11c3QgYmUgd2hpdGVzcGFjZS5cbiAgICAgICAgcmV0dXJuIG1hcFskMF0gfHwgJyAnO1xuICAgIH0pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL25vcm1hbGl6ZS1yZWZlcmVuY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohIGh0dHA6Ly9tdGhzLmJlL3JlcGVhdCB2MC4yLjAgYnkgQG1hdGhpYXMgKi9cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQpIHtcblx0KGZ1bmN0aW9uKCkge1xuXHRcdCd1c2Ugc3RyaWN0JzsgLy8gbmVlZGVkIHRvIHN1cHBvcnQgYGFwcGx5YC9gY2FsbGAgd2l0aCBgdW5kZWZpbmVkYC9gbnVsbGBcblx0XHR2YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBJRSA4IG9ubHkgc3VwcG9ydHMgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgb24gRE9NIGVsZW1lbnRzXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0ge307XG5cdFx0XHRcdHZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cdFx0XHRcdHZhciByZXN1bHQgPSAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBvYmplY3QsIG9iamVjdCkgJiYgJGRlZmluZVByb3BlcnR5O1xuXHRcdFx0fSBjYXRjaChlcnJvcikge31cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSgpKTtcblx0XHR2YXIgcmVwZWF0ID0gZnVuY3Rpb24oY291bnQpIHtcblx0XHRcdGlmICh0aGlzID09IG51bGwpIHtcblx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuXHRcdFx0Ly8gYFRvSW50ZWdlcmBcblx0XHRcdHZhciBuID0gY291bnQgPyBOdW1iZXIoY291bnQpIDogMDtcblx0XHRcdGlmIChuICE9IG4pIHsgLy8gYmV0dGVyIGBpc05hTmBcblx0XHRcdFx0biA9IDA7XG5cdFx0XHR9XG5cdFx0XHQvLyBBY2NvdW50IGZvciBvdXQtb2YtYm91bmRzIGluZGljZXNcblx0XHRcdGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB7XG5cdFx0XHRcdHRocm93IFJhbmdlRXJyb3IoKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSAnJztcblx0XHRcdHdoaWxlIChuKSB7XG5cdFx0XHRcdGlmIChuICUgMiA9PSAxKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobiA+IDEpIHtcblx0XHRcdFx0XHRzdHJpbmcgKz0gc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG4gPj49IDE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdFx0aWYgKGRlZmluZVByb3BlcnR5KSB7XG5cdFx0XHRkZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCAncmVwZWF0Jywge1xuXHRcdFx0XHQndmFsdWUnOiByZXBlYXQsXG5cdFx0XHRcdCdjb25maWd1cmFibGUnOiB0cnVlLFxuXHRcdFx0XHQnd3JpdGFibGUnOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0U3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPSByZXBlYXQ7XG5cdFx0fVxuXHR9KCkpO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L3N0cmluZy5wcm90b3R5cGUucmVwZWF0L3JlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVzY2FwZVhtbCA9IHJlcXVpcmUoJy4vY29tbW9uJykuZXNjYXBlWG1sO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBIVE1MIHRhZy5cbnZhciB0YWcgPSBmdW5jdGlvbihuYW1lLCBhdHRycywgc2VsZmNsb3NpbmcpIHtcbiAgICB2YXIgcmVzdWx0ID0gJzwnICsgbmFtZTtcbiAgICBpZiAoYXR0cnMgJiYgYXR0cnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBhdHRyaWI7XG4gICAgICAgIHdoaWxlICgoYXR0cmliID0gYXR0cnNbaV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnICcgKyBhdHRyaWJbMF0gKyAnPVwiJyArIGF0dHJpYlsxXSArICdcIic7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGZjbG9zaW5nKSB7XG4gICAgICAgIHJlc3VsdCArPSAnIC8nO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSAnPic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciByZUh0bWxUYWcgPSAvXFw8W14+XSpcXD4vO1xudmFyIHJlVW5zYWZlUHJvdG9jb2wgPSAvXmphdmFzY3JpcHQ6fHZic2NyaXB0OnxmaWxlOnxkYXRhOi9pO1xudmFyIHJlU2FmZURhdGFQcm90b2NvbCA9IC9eZGF0YTppbWFnZVxcLyg/OnBuZ3xnaWZ8anBlZ3x3ZWJwKS9pO1xuXG52YXIgcG90ZW50aWFsbHlVbnNhZmUgPSBmdW5jdGlvbih1cmwpIHtcbiAgICByZXR1cm4gcmVVbnNhZmVQcm90b2NvbC50ZXN0KHVybCkgJiZcbiAgICAgICAgIXJlU2FmZURhdGFQcm90b2NvbC50ZXN0KHVybCk7XG59O1xuXG52YXIgcmVuZGVyTm9kZXMgPSBmdW5jdGlvbihibG9jaykge1xuXG4gICAgdmFyIGF0dHJzO1xuICAgIHZhciBpbmZvX3dvcmRzO1xuICAgIHZhciB0YWduYW1lO1xuICAgIHZhciB3YWxrZXIgPSBibG9jay53YWxrZXIoKTtcbiAgICB2YXIgZXZlbnQsIG5vZGUsIGVudGVyaW5nO1xuICAgIHZhciBidWZmZXIgPSBcIlwiO1xuICAgIHZhciBsYXN0T3V0ID0gXCJcXG5cIjtcbiAgICB2YXIgZGlzYWJsZVRhZ3MgPSAwO1xuICAgIHZhciBncmFuZHBhcmVudDtcbiAgICB2YXIgb3V0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPiAwKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcy5yZXBsYWNlKHJlSHRtbFRhZywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyICs9IHM7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdE91dCA9IHM7XG4gICAgfTtcbiAgICB2YXIgZXNjID0gdGhpcy5lc2NhcGU7XG4gICAgdmFyIGNyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsYXN0T3V0ICE9PSAnXFxuJykge1xuICAgICAgICAgICAgYnVmZmVyICs9ICdcXG4nO1xuICAgICAgICAgICAgbGFzdE91dCA9ICdcXG4nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJyZW5kZXJpbmdcIik7IH1cblxuICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICBlbnRlcmluZyA9IGV2ZW50LmVudGVyaW5nO1xuICAgICAgICBub2RlID0gZXZlbnQubm9kZTtcblxuICAgICAgICBhdHRycyA9IFtdO1xuICAgICAgICBpZiAob3B0aW9ucy5zb3VyY2Vwb3MpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBub2RlLnNvdXJjZXBvcztcbiAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnZGF0YS1zb3VyY2Vwb3MnLCBTdHJpbmcocG9zWzBdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1swXVsxXSkgKyAnLScgKyBTdHJpbmcocG9zWzFdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1sxXVsxXSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1RleHQnOlxuICAgICAgICAgICAgb3V0KGVzYyhub2RlLmxpdGVyYWwsIGZhbHNlKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdTb2Z0YnJlYWsnOlxuICAgICAgICAgICAgb3V0KHRoaXMuc29mdGJyZWFrKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hhcmRicmVhayc6XG4gICAgICAgICAgICBvdXQodGFnKCdicicsIFtdLCB0cnVlKSk7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW1waCc6XG4gICAgICAgICAgICBvdXQodGFnKGVudGVyaW5nID8gJ2VtJyA6ICcvZW0nKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdTdHJvbmcnOlxuICAgICAgICAgICAgb3V0KHRhZyhlbnRlcmluZyA/ICdzdHJvbmcnIDogJy9zdHJvbmcnKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIdG1sJzpcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNhZmUpIHtcbiAgICAgICAgICAgICAgICBvdXQoJzwhLS0gcmF3IEhUTUwgb21pdHRlZCAtLT4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KG5vZGUubGl0ZXJhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMuc2FmZSAmJiBwb3RlbnRpYWxseVVuc2FmZShub2RlLmRlc3RpbmF0aW9uKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2hyZWYnLCBlc2Mobm9kZS5kZXN0aW5hdGlvbiwgdHJ1ZSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3RpdGxlJywgZXNjKG5vZGUudGl0bGUsIHRydWUpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dCh0YWcoJ2EnLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvYScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlVGFncyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zYWZlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsbHlVbnNhZmUobm9kZS5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCgnPGltZyBzcmM9XCJcIiBhbHQ9XCInKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCgnPGltZyBzcmM9XCInICsgZXNjKG5vZGUuZGVzdGluYXRpb24sIHRydWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgYWx0PVwiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZVRhZ3MgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVRhZ3MgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCgnXCIgdGl0bGU9XCInICsgZXNjKG5vZGUudGl0bGUsIHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXQoJ1wiIC8+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQ29kZSc6XG4gICAgICAgICAgICBvdXQodGFnKCdjb2RlJykgKyBlc2Mobm9kZS5saXRlcmFsLCBmYWxzZSkgKyB0YWcoJy9jb2RlJykpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRG9jdW1lbnQnOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFyYWdyYXBoJzpcbiAgICAgICAgICAgIGdyYW5kcGFyZW50ID0gbm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgaWYgKGdyYW5kcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgZ3JhbmRwYXJlbnQudHlwZSA9PT0gJ0xpc3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyYW5kcGFyZW50Lmxpc3RUaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJ3AnLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvcCcpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQmxvY2tRdW90ZSc6XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJ2Jsb2NrcXVvdGUnLCBhdHRycykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnL2Jsb2NrcXVvdGUnKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0l0ZW0nOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnbGknLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvbGknKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICAgICAgdGFnbmFtZSA9IG5vZGUubGlzdFR5cGUgPT09ICdCdWxsZXQnID8gJ3VsJyA6ICdvbCc7XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBub2RlLmxpc3RTdGFydDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgIT09IG51bGwgJiYgc3RhcnQgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3N0YXJ0Jywgc3RhcnQudG9TdHJpbmcoKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcodGFnbmFtZSwgYXR0cnMpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy8nICsgdGFnbmFtZSkpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIZWFkZXInOlxuICAgICAgICAgICAgdGFnbmFtZSA9ICdoJyArIG5vZGUubGV2ZWw7XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcodGFnbmFtZSwgYXR0cnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0NvZGVCbG9jayc6XG4gICAgICAgICAgICBpbmZvX3dvcmRzID0gbm9kZS5pbmZvID8gbm9kZS5pbmZvLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICAgICAgICAgIGlmIChpbmZvX3dvcmRzLmxlbmd0aCA+IDAgJiYgaW5mb193b3Jkc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2NsYXNzJywgJ2xhbmd1YWdlLScgKyBlc2MoaW5mb193b3Jkc1swXSwgdHJ1ZSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKCdwcmUnKSArIHRhZygnY29kZScsIGF0dHJzKSk7XG4gICAgICAgICAgICBvdXQoZXNjKG5vZGUubGl0ZXJhbCwgZmFsc2UpKTtcbiAgICAgICAgICAgIG91dCh0YWcoJy9jb2RlJykgKyB0YWcoJy9wcmUnKSk7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSHRtbEJsb2NrJzpcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zYWZlKSB7XG4gICAgICAgICAgICAgICAgb3V0KCc8IS0tIHJhdyBIVE1MIG9taXR0ZWQgLS0+Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dChub2RlLmxpdGVyYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hvcml6b250YWxSdWxlJzpcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKCdocicsIGF0dHJzLCB0cnVlKSk7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IFwiVW5rbm93biBub2RlIHR5cGUgXCIgKyBub2RlLnR5cGU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcInJlbmRlcmluZ1wiKTsgfVxuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG4vLyBUaGUgSHRtbFJlbmRlcmVyIG9iamVjdC5cbmZ1bmN0aW9uIEh0bWxSZW5kZXJlcihvcHRpb25zKXtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZhdWx0IG9wdGlvbnM6XG4gICAgICAgIHNvZnRicmVhazogJ1xcbicsIC8vIGJ5IGRlZmF1bHQsIHNvZnQgYnJlYWtzIGFyZSByZW5kZXJlZCBhcyBuZXdsaW5lcyBpbiBIVE1MXG4gICAgICAgIC8vIHNldCB0byBcIjxiciAvPlwiIHRvIG1ha2UgdGhlbSBoYXJkIGJyZWFrc1xuICAgICAgICAvLyBzZXQgdG8gXCIgXCIgaWYgeW91IHdhbnQgdG8gaWdub3JlIGxpbmUgd3JhcHBpbmcgaW4gc291cmNlXG4gICAgICAgIGVzY2FwZTogZXNjYXBlWG1sLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgICAgICByZW5kZXI6IHJlbmRlck5vZGVzXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sUmVuZGVyZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZXNjYXBlWG1sID0gcmVxdWlyZSgnLi9jb21tb24nKS5lc2NhcGVYbWw7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwcm9kdWNlIGFuIFhNTCB0YWcuXG52YXIgdGFnID0gZnVuY3Rpb24obmFtZSwgYXR0cnMsIHNlbGZjbG9zaW5nKSB7XG4gICAgdmFyIHJlc3VsdCA9ICc8JyArIG5hbWU7XG4gICAgaWYgKGF0dHJzICYmIGF0dHJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgYXR0cmliO1xuICAgICAgICB3aGlsZSAoKGF0dHJpYiA9IGF0dHJzW2ldKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyAnICsgYXR0cmliWzBdICsgJz1cIicgKyBhdHRyaWJbMV0gKyAnXCInO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzZWxmY2xvc2luZykge1xuICAgICAgICByZXN1bHQgKz0gJyAvJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gJz4nO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgcmVYTUxUYWcgPSAvXFw8W14+XSpcXD4vO1xuXG52YXIgdG9UYWdOYW1lID0gZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIikudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciByZW5kZXJOb2RlcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG5cbiAgICB2YXIgYXR0cnM7XG4gICAgdmFyIHRhZ25hbWU7XG4gICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xuICAgIHZhciBldmVudCwgbm9kZSwgZW50ZXJpbmc7XG4gICAgdmFyIGJ1ZmZlciA9IFwiXCI7XG4gICAgdmFyIGxhc3RPdXQgPSBcIlxcblwiO1xuICAgIHZhciBkaXNhYmxlVGFncyA9IDA7XG4gICAgdmFyIGluZGVudExldmVsID0gMDtcbiAgICB2YXIgaW5kZW50ID0gJyAgJztcbiAgICB2YXIgdW5lc2NhcGVkQ29udGVudHM7XG4gICAgdmFyIGNvbnRhaW5lcjtcbiAgICB2YXIgc2VsZkNsb3Npbmc7XG4gICAgdmFyIG5vZGV0eXBlO1xuXG4gICAgdmFyIG91dCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgaWYgKGRpc2FibGVUYWdzID4gMCkge1xuICAgICAgICAgICAgYnVmZmVyICs9IHMucmVwbGFjZShyZVhNTFRhZywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyICs9IHM7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdE91dCA9IHM7XG4gICAgfTtcbiAgICB2YXIgZXNjID0gdGhpcy5lc2NhcGU7XG4gICAgdmFyIGNyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsYXN0T3V0ICE9PSAnXFxuJykge1xuICAgICAgICAgICAgYnVmZmVyICs9ICdcXG4nO1xuICAgICAgICAgICAgbGFzdE91dCA9ICdcXG4nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGVudExldmVsOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IGluZGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwicmVuZGVyaW5nXCIpOyB9XG5cbiAgICBidWZmZXIgKz0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Plxcbic7XG4gICAgYnVmZmVyICs9ICc8IURPQ1RZUEUgQ29tbW9uTWFyayBTWVNURU0gXCJDb21tb25NYXJrLmR0ZFwiPlxcbic7XG5cbiAgICB3aGlsZSAoKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkpIHtcbiAgICAgICAgZW50ZXJpbmcgPSBldmVudC5lbnRlcmluZztcbiAgICAgICAgbm9kZSA9IGV2ZW50Lm5vZGU7XG4gICAgICAgIG5vZGV0eXBlID0gbm9kZS50eXBlO1xuXG4gICAgICAgIGNvbnRhaW5lciA9IG5vZGUuaXNDb250YWluZXI7XG4gICAgICAgIHNlbGZDbG9zaW5nID0gbm9kZXR5cGUgPT09ICdIb3Jpem9udGFsUnVsZScgfHwgbm9kZXR5cGUgPT09ICdIYXJkYnJlYWsnIHx8XG4gICAgICAgICAgICBub2RldHlwZSA9PT0gJ1NvZnRicmVhayc7XG4gICAgICAgIHVuZXNjYXBlZENvbnRlbnRzID0gbm9kZXR5cGUgPT09ICdIdG1sJyB8fCBub2RldHlwZSA9PT0gJ0h0bWxJbmxpbmUnO1xuICAgICAgICB0YWduYW1lID0gdG9UYWdOYW1lKG5vZGV0eXBlKTtcblxuICAgICAgICBpZiAoZW50ZXJpbmcpIHtcblxuICAgICAgICAgICAgYXR0cnMgPSBbXTtcblxuICAgICAgICAgICAgc3dpdGNoIChub2RldHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdFR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3R5cGUnLCBub2RlLmxpc3RUeXBlLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdFN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydzdGFydCcsIFN0cmluZyhub2RlLmxpc3RTdGFydCldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdFRpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWyd0aWdodCcsIChub2RlLmxpc3RUaWdodCA/ICd0cnVlJyA6ICdmYWxzZScpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkZWxpbSA9IG5vZGUubGlzdERlbGltaXRlcjtcbiAgICAgICAgICAgICAgICBpZiAoZGVsaW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGltd29yZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsaW0gPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW13b3JkID0gJ3BlcmlvZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbXdvcmQgPSAncGFyZW4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydkZWxpbWl0ZXInLCBkZWxpbXdvcmRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDb2RlQmxvY2snOlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2luZm8nLCBub2RlLmluZm9dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIZWFkZXInOlxuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydsZXZlbCcsIFN0cmluZyhub2RlLmxldmVsKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTGluayc6XG4gICAgICAgICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2Rlc3RpbmF0aW9uJywgbm9kZS5kZXN0aW5hdGlvbl0pO1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWyd0aXRsZScsIG5vZGUudGl0bGVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zb3VyY2Vwb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbm9kZS5zb3VyY2Vwb3M7XG4gICAgICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnc291cmNlcG9zJywgU3RyaW5nKHBvc1swXVswXSkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzBdWzFdKSArICctJyArIFN0cmluZyhwb3NbMV1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1sxXVsxXSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKHRhZ25hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZykpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGluZGVudExldmVsICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFjb250YWluZXIgJiYgIXNlbGZDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpdCA9IG5vZGUubGl0ZXJhbDtcbiAgICAgICAgICAgICAgICBpZiAobGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCh1bmVzY2FwZWRDb250ZW50cyA/IGxpdCA6IGVzYyhsaXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRlbnRMZXZlbCAtPSAxO1xuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcoJy8nICsgdGFnbmFtZSkpO1xuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcInJlbmRlcmluZ1wiKTsgfVxuICAgIGJ1ZmZlciArPSAnXFxuJztcbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxuLy8gVGhlIFhtbFJlbmRlcmVyIG9iamVjdC5cbmZ1bmN0aW9uIFhtbFJlbmRlcmVyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlZmF1bHQgb3B0aW9uczpcbiAgICAgICAgc29mdGJyZWFrOiAnXFxuJywgLy8gYnkgZGVmYXVsdCwgc29mdCBicmVha3MgYXJlIHJlbmRlcmVkIGFzIG5ld2xpbmVzIGluIEhUTUxcbiAgICAgICAgLy8gc2V0IHRvIFwiPGJyIC8+XCIgdG8gbWFrZSB0aGVtIGhhcmQgYnJlYWtzXG4gICAgICAgIC8vIHNldCB0byBcIiBcIiBpZiB5b3Ugd2FudCB0byBpZ25vcmUgbGluZSB3cmFwcGluZyBpbiBzb3VyY2VcbiAgICAgICAgZXNjYXBlOiBlc2NhcGVYbWwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHJlbmRlcjogcmVuZGVyTm9kZXNcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbFJlbmRlcmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIveG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29udmVydCA9IHJlcXVpcmUoXCJjb2xvci1jb252ZXJ0XCIpLFxuICAgIHN0cmluZyA9IHJlcXVpcmUoXCJjb2xvci1zdHJpbmdcIik7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHJldHVybiBvYmo7XG4gIGlmICghICh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSByZXR1cm4gbmV3IENvbG9yKG9iaik7XG5cbiAgIHRoaXMudmFsdWVzID0ge1xuICAgICAgcmdiOiBbMCwgMCwgMF0sXG4gICAgICBoc2w6IFswLCAwLCAwXSxcbiAgICAgIGhzdjogWzAsIDAsIDBdLFxuICAgICAgaHdiOiBbMCwgMCwgMF0sXG4gICAgICBjbXlrOiBbMCwgMCwgMCwgMF0sXG4gICAgICBhbHBoYTogMVxuICAgfVxuXG4gICAvLyBwYXJzZSBDb2xvcigpIGFyZ3VtZW50XG4gICBpZiAodHlwZW9mIG9iaiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgdmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG4gICAgICBpZiAodmFscykge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIiwgdmFscyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB2YWxzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodmFscyA9IHN0cmluZy5nZXRId2Iob2JqKSkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJod2JcIiwgdmFscyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFxcXCJcIiArIG9iaiArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIikge1xuICAgICAgdmFyIHZhbHMgPSBvYmo7XG4gICAgICBpZih2YWxzW1wiclwiXSAhPT0gdW5kZWZpbmVkIHx8IHZhbHNbXCJyZWRcIl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIiwgdmFscylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodmFsc1tcImxcIl0gIT09IHVuZGVmaW5lZCB8fCB2YWxzW1wibGlnaHRuZXNzXCJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHZhbHMpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKHZhbHNbXCJ2XCJdICE9PSB1bmRlZmluZWQgfHwgdmFsc1tcInZhbHVlXCJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHN2XCIsIHZhbHMpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKHZhbHNbXCJ3XCJdICE9PSB1bmRlZmluZWQgfHwgdmFsc1tcIndoaXRlbmVzc1wiXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcImh3YlwiLCB2YWxzKVxuICAgICAgfVxuICAgICAgZWxzZSBpZih2YWxzW1wiY1wiXSAhPT0gdW5kZWZpbmVkIHx8IHZhbHNbXCJjeWFuXCJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwiY215a1wiLCB2YWxzKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCBcIiArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgICAgfVxuICAgfVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG4gICByZ2I6IGZ1bmN0aW9uICh2YWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTcGFjZShcInJnYlwiLCBhcmd1bWVudHMpO1xuICAgfSxcbiAgIGhzbDogZnVuY3Rpb24odmFscykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJoc2xcIiwgYXJndW1lbnRzKTtcbiAgIH0sXG4gICBoc3Y6IGZ1bmN0aW9uKHZhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFNwYWNlKFwiaHN2XCIsIGFyZ3VtZW50cyk7XG4gICB9LFxuICAgaHdiOiBmdW5jdGlvbih2YWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTcGFjZShcImh3YlwiLCBhcmd1bWVudHMpO1xuICAgfSxcbiAgIGNteWs6IGZ1bmN0aW9uKHZhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFNwYWNlKFwiY215a1wiLCBhcmd1bWVudHMpO1xuICAgfSxcblxuICAgcmdiQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLnJnYjtcbiAgIH0sXG4gICBoc2xBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMuaHNsO1xuICAgfSxcbiAgIGhzdkFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5oc3Y7XG4gICB9LFxuICAgaHdiQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuICAgfSxcbiAgIGNteWtBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMuY215aztcbiAgIH0sXG4gICByZ2JhQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcbiAgICAgIHJldHVybiByZ2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuICAgfSxcbiAgIGhzbGFBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHNsID0gdGhpcy52YWx1ZXMuaHNsO1xuICAgICAgcmV0dXJuIGhzbC5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG4gICB9LFxuICAgYWxwaGE6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuYWxwaGE7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsIHZhbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIHJlZDogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsIDAsIHZhbCk7XG4gICB9LFxuICAgZ3JlZW46IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLCAxLCB2YWwpO1xuICAgfSxcbiAgIGJsdWU6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLCAyLCB2YWwpO1xuICAgfSxcbiAgIGh1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsIDAsIHZhbCk7XG4gICB9LFxuICAgc2F0dXJhdGlvbjogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsIDEsIHZhbCk7XG4gICB9LFxuICAgbGlnaHRuZXNzOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwgMiwgdmFsKTtcbiAgIH0sXG4gICBzYXR1cmF0aW9udjogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHN2XCIsIDEsIHZhbCk7XG4gICB9LFxuICAgd2hpdGVuZXNzOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJod2JcIiwgMSwgdmFsKTtcbiAgIH0sXG4gICBibGFja25lc3M6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImh3YlwiLCAyLCB2YWwpO1xuICAgfSxcbiAgIHZhbHVlOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc3ZcIiwgMiwgdmFsKTtcbiAgIH0sXG4gICBjeWFuOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsIDAsIHZhbCk7XG4gICB9LFxuICAgbWFnZW50YTogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLCAxLCB2YWwpO1xuICAgfSxcbiAgIHllbGxvdzogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLCAyLCB2YWwpO1xuICAgfSxcbiAgIGJsYWNrOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsIDMsIHZhbCk7XG4gICB9LFxuXG4gICBoZXhTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcbiAgIH0sXG4gICByZ2JTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuICAgcmdiYVN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuICAgcGVyY2VudFN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuICAgaHNsU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcbiAgIGhzbGFTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcbiAgIGh3YlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG4gICBrZXl3b3JkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG5cbiAgIHJnYk51bWJlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuICAgfSxcblxuICAgbHVtaW5vc2l0eTogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICB2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuICAgICAgdmFyIGx1bSA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuICAgICAgICAgbHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTJcbiAgICAgICAgICAgICAgICAgIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpXG4gICAgICB9XG4gICAgICByZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuICAgfSxcblxuICAgY29udHJhc3Q6IGZ1bmN0aW9uKGNvbG9yMikge1xuICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuICAgICAgdmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcbiAgICAgIHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcbiAgICAgIGlmIChsdW0xID4gbHVtMikge1xuICAgICAgICAgcmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuICAgfSxcblxuICAgbGV2ZWw6IGZ1bmN0aW9uKGNvbG9yMikge1xuICAgICB2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcbiAgICAgcmV0dXJuIChjb250cmFzdFJhdGlvID49IDcuMSlcbiAgICAgICA/ICdBQUEnXG4gICAgICAgOiAoY29udHJhc3RSYXRpbyA+PSA0LjUpXG4gICAgICAgID8gJ0FBJ1xuICAgICAgICA6ICcnO1xuICAgfSxcblxuICAgZGFyazogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG4gICAgICB2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiLFxuICAgICAgICAgIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcbiAgICAgIHJldHVybiB5aXEgPCAxMjg7XG4gICB9LFxuXG4gICBsaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXRoaXMuZGFyaygpO1xuICAgfSxcblxuICAgbmVnYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZ2IgPSBbXVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IDI1NSAtIHRoaXMudmFsdWVzLnJnYltpXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsIHJnYik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIGxpZ2h0ZW46IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB0aGlzLnZhbHVlcy5oc2wpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBkYXJrZW46IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB0aGlzLnZhbHVlcy5oc2wpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBzYXR1cmF0ZTogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHRoaXMudmFsdWVzLmhzbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIGRlc2F0dXJhdGU6IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB0aGlzLnZhbHVlcy5oc2wpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICB3aGl0ZW46IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImh3YlwiLCB0aGlzLnZhbHVlcy5od2IpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBibGFja2VuOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJod2JcIiwgdGhpcy52YWx1ZXMuaHdiKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgZ3JleXNjYWxlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG4gICAgICAvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuICAgICAgdmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIiwgW3ZhbCwgdmFsLCB2YWxdKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgY2xlYXJlcjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIiwgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBvcGFxdWVyOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLCB0aGlzLnZhbHVlcy5hbHBoYSArICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIHJvdGF0ZTogZnVuY3Rpb24oZGVncmVlcykge1xuICAgICAgdmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcbiAgICAgIGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcbiAgICAgIGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG4gICAgICB0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB0aGlzLnZhbHVlcy5oc2wpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICAvKipcbiAgICAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuICAgICogaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG4gICAgKi9cbiAgIG1peDogZnVuY3Rpb24obWl4aW5Db2xvciwgd2VpZ2h0KSB7XG4gICAgICB2YXIgY29sb3IxID0gdGhpcztcbiAgICAgIHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuICAgICAgdmFyIHAgPSB3ZWlnaHQgIT09IHVuZGVmaW5lZCA/IHdlaWdodCA6IDAuNTtcblxuICAgICAgdmFyIHcgPSAyICogcCAtIDE7XG4gICAgICB2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cbiAgICAgIHZhciB3MSA9ICgoKHcgKiBhID09IC0xKSA/IHcgOiAodyArIGEpLygxICsgdyphKSkgKyAxKSAvIDIuMDtcbiAgICAgIHZhciB3MiA9IDEgLSB3MTtcblxuICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgLnJnYihcbiAgICAgICAgICB3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuICAgICAgICAgIHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuICAgICAgICAgIHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuICAgICAgICApXG4gICAgICAgIC5hbHBoYShjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuICAgfSxcblxuICAgdG9KU09OOiBmdW5jdGlvbigpIHtcbiAgICAgcmV0dXJuIHRoaXMucmdiKCk7XG4gICB9LFxuXG4gICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgIHJldHVybiBuZXcgQ29sb3IodGhpcy5yZ2IoKSk7XG4gICB9XG59XG5cblxuQ29sb3IucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uKHNwYWNlKSB7XG4gICB2YXIgdmFscyA9IHt9O1xuICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsc1tzcGFjZS5jaGFyQXQoaSldID0gdGhpcy52YWx1ZXNbc3BhY2VdW2ldO1xuICAgfVxuICAgaWYgKHRoaXMudmFsdWVzLmFscGhhICE9IDEpIHtcbiAgICAgIHZhbHNbXCJhXCJdID0gdGhpcy52YWx1ZXMuYWxwaGE7XG4gICB9XG4gICAvLyB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NSwgYTogMC40fVxuICAgcmV0dXJuIHZhbHM7XG59XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbihzcGFjZSwgdmFscykge1xuICAgdmFyIHNwYWNlcyA9IHtcbiAgICAgIFwicmdiXCI6IFtcInJlZFwiLCBcImdyZWVuXCIsIFwiYmx1ZVwiXSxcbiAgICAgIFwiaHNsXCI6IFtcImh1ZVwiLCBcInNhdHVyYXRpb25cIiwgXCJsaWdodG5lc3NcIl0sXG4gICAgICBcImhzdlwiOiBbXCJodWVcIiwgXCJzYXR1cmF0aW9uXCIsIFwidmFsdWVcIl0sXG4gICAgICBcImh3YlwiOiBbXCJodWVcIiwgXCJ3aGl0ZW5lc3NcIiwgXCJibGFja25lc3NcIl0sXG4gICAgICBcImNteWtcIjogW1wiY3lhblwiLCBcIm1hZ2VudGFcIiwgXCJ5ZWxsb3dcIiwgXCJibGFja1wiXVxuICAgfTtcblxuICAgdmFyIG1heGVzID0ge1xuICAgICAgXCJyZ2JcIjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgXCJoc2xcIjogWzM2MCwgMTAwLCAxMDBdLFxuICAgICAgXCJoc3ZcIjogWzM2MCwgMTAwLCAxMDBdLFxuICAgICAgXCJod2JcIjogWzM2MCwgMTAwLCAxMDBdLFxuICAgICAgXCJjbXlrXCI6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG4gICB9O1xuXG4gICB2YXIgYWxwaGEgPSAxO1xuICAgaWYgKHNwYWNlID09IFwiYWxwaGFcIikge1xuICAgICAgYWxwaGEgPSB2YWxzO1xuICAgfVxuICAgZWxzZSBpZiAodmFscy5sZW5ndGgpIHtcbiAgICAgIC8vIFsxMCwgMTAsIDEwXVxuICAgICAgdGhpcy52YWx1ZXNbc3BhY2VdID0gdmFscy5zbGljZSgwLCBzcGFjZS5sZW5ndGgpO1xuICAgICAgYWxwaGEgPSB2YWxzW3NwYWNlLmxlbmd0aF07XG4gICB9XG4gICBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8ge3I6IDEwLCBnOiAxMCwgYjogMTB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbc3BhY2UuY2hhckF0KGkpXTtcbiAgICAgIH1cbiAgICAgIGFscGhhID0gdmFscy5hO1xuICAgfVxuICAgZWxzZSBpZiAodmFsc1tzcGFjZXNbc3BhY2VdWzBdXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB7cmVkOiAxMCwgZ3JlZW46IDEwLCBibHVlOiAxMH1cbiAgICAgIHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuICAgICAgfVxuICAgICAgYWxwaGEgPSB2YWxzLmFscGhhO1xuICAgfVxuICAgdGhpcy52YWx1ZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoYWxwaGEgIT09IHVuZGVmaW5lZCA/IGFscGhhIDogdGhpcy52YWx1ZXMuYWxwaGEpICkpO1xuICAgaWYgKHNwYWNlID09IFwiYWxwaGFcIikge1xuICAgICAgcmV0dXJuO1xuICAgfVxuXG4gICAvLyBjYXAgdmFsdWVzIG9mIHRoZSBzcGFjZSBwcmlvciBjb252ZXJ0aW5nIGFsbCB2YWx1ZXNcbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzcGFjZV1baV0sIHRoaXMudmFsdWVzW3NwYWNlXVtpXSkpO1xuICAgICAgdGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuICAgfVxuXG4gICAvLyBjb252ZXJ0IHRvIGFsbCB0aGUgb3RoZXIgY29sb3Igc3BhY2VzXG4gICBmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcbiAgICAgIGlmIChzbmFtZSAhPSBzcGFjZSkge1xuICAgICAgICAgdGhpcy52YWx1ZXNbc25hbWVdID0gY29udmVydFtzcGFjZV1bc25hbWVdKHRoaXMudmFsdWVzW3NwYWNlXSlcbiAgICAgIH1cblxuICAgICAgLy8gY2FwIHZhbHVlc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgdmFyIGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NuYW1lXVtpXSwgdGhpcy52YWx1ZXNbc25hbWVdW2ldKSk7XG4gICAgICAgICB0aGlzLnZhbHVlc1tzbmFtZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG4gICAgICB9XG4gICB9XG4gICByZXR1cm4gdHJ1ZTtcbn1cblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24oc3BhY2UsIGFyZ3MpIHtcbiAgIHZhciB2YWxzID0gYXJnc1swXTtcbiAgIGlmICh2YWxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbG9yLnJnYigpXG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuICAgfVxuICAgLy8gY29sb3IucmdiKDEwLCAxMCwgMTApXG4gICBpZiAodHlwZW9mIHZhbHMgPT0gXCJudW1iZXJcIikge1xuICAgICAgdmFscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgfVxuICAgdGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHZhbHMpO1xuICAgcmV0dXJuIHRoaXM7XG59XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24oc3BhY2UsIGluZGV4LCB2YWwpIHtcbiAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29sb3IucmVkKClcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdO1xuICAgfVxuICAgLy8gY29sb3IucmVkKDEwMClcbiAgIHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0gPSB2YWw7XG4gICB0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcbiAgIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29sb3IvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZShcIi4vY29udmVyc2lvbnNcIik7XG5cbnZhciBjb252ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICByZXR1cm4gbmV3IENvbnZlcnRlcigpO1xufVxuXG5mb3IgKHZhciBmdW5jIGluIGNvbnZlcnNpb25zKSB7XG4gIC8vIGV4cG9ydCBSYXcgdmVyc2lvbnNcbiAgY29udmVydFtmdW5jICsgXCJSYXdcIl0gPSAgKGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBhY2NlcHQgYXJyYXkgb3IgcGxhaW4gYXJnc1xuICAgIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnID09IFwibnVtYmVyXCIpXG4gICAgICAgIGFyZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gY29udmVyc2lvbnNbZnVuY10oYXJnKTtcbiAgICB9XG4gIH0pKGZ1bmMpO1xuXG4gIHZhciBwYWlyID0gLyhcXHcrKTIoXFx3KykvLmV4ZWMoZnVuYyksXG4gICAgICBmcm9tID0gcGFpclsxXSxcbiAgICAgIHRvID0gcGFpclsyXTtcblxuICAvLyBleHBvcnQgcmdiMmhzbCBhbmQgW1wicmdiXCJdW1wiaHNsXCJdXG4gIGNvbnZlcnRbZnJvbV0gPSBjb252ZXJ0W2Zyb21dIHx8IHt9O1xuXG4gIGNvbnZlcnRbZnJvbV1bdG9dID0gY29udmVydFtmdW5jXSA9IChmdW5jdGlvbihmdW5jKSB7IFxuICAgIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnID09IFwibnVtYmVyXCIpXG4gICAgICAgIGFyZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICBcbiAgICAgIHZhciB2YWwgPSBjb252ZXJzaW9uc1tmdW5jXShhcmcpO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIiB8fCB2YWwgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHZhbDsgLy8ga2V5d29yZFxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKylcbiAgICAgICAgdmFsW2ldID0gTWF0aC5yb3VuZCh2YWxbaV0pO1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH0pKGZ1bmMpO1xufVxuXG5cbi8qIENvbnZlcnRlciBkb2VzIGxhenkgY29udmVyc2lvbiBhbmQgY2FjaGluZyAqL1xudmFyIENvbnZlcnRlciA9IGZ1bmN0aW9uKCkge1xuICAgdGhpcy5jb252cyA9IHt9O1xufTtcblxuLyogRWl0aGVyIGdldCB0aGUgdmFsdWVzIGZvciBhIHNwYWNlIG9yXG4gIHNldCB0aGUgdmFsdWVzIGZvciBhIHNwYWNlLCBkZXBlbmRpbmcgb24gYXJncyAqL1xuQ29udmVydGVyLnByb3RvdHlwZS5yb3V0ZVNwYWNlID0gZnVuY3Rpb24oc3BhY2UsIGFyZ3MpIHtcbiAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdO1xuICAgaWYgKHZhbHVlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb2xvci5yZ2IoKVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKHNwYWNlKTtcbiAgIH1cbiAgIC8vIGNvbG9yLnJnYigxMCwgMTAsIDEwKVxuICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT0gXCJudW1iZXJcIikge1xuICAgICAgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7ICAgICAgICBcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB2YWx1ZXMpO1xufTtcbiAgXG4vKiBTZXQgdGhlIHZhbHVlcyBmb3IgYSBzcGFjZSwgaW52YWxpZGF0aW5nIGNhY2hlICovXG5Db252ZXJ0ZXIucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uKHNwYWNlLCB2YWx1ZXMpIHtcbiAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcbiAgIHRoaXMuY29udnMgPSB7fTtcbiAgIHRoaXMuY29udnNbc3BhY2VdID0gdmFsdWVzO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKiBHZXQgdGhlIHZhbHVlcyBmb3IgYSBzcGFjZS4gSWYgdGhlcmUncyBhbHJlYWR5XG4gIGEgY29udmVyc2lvbiBmb3IgdGhlIHNwYWNlLCBmZXRjaCBpdCwgb3RoZXJ3aXNlXG4gIGNvbXB1dGUgaXQgKi9cbkNvbnZlcnRlci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24oc3BhY2UpIHtcbiAgIHZhciB2YWxzID0gdGhpcy5jb252c1tzcGFjZV07XG4gICBpZiAoIXZhbHMpIHtcbiAgICAgIHZhciBmc3BhY2UgPSB0aGlzLnNwYWNlLFxuICAgICAgICAgIGZyb20gPSB0aGlzLmNvbnZzW2ZzcGFjZV07XG4gICAgICB2YWxzID0gY29udmVydFtmc3BhY2VdW3NwYWNlXShmcm9tKTtcblxuICAgICAgdGhpcy5jb252c1tzcGFjZV0gPSB2YWxzO1xuICAgfVxuICByZXR1cm4gdmFscztcbn07XG5cbltcInJnYlwiLCBcImhzbFwiLCBcImhzdlwiLCBcImNteWtcIiwgXCJrZXl3b3JkXCJdLmZvckVhY2goZnVuY3Rpb24oc3BhY2UpIHtcbiAgIENvbnZlcnRlci5wcm90b3R5cGVbc3BhY2VdID0gZnVuY3Rpb24odmFscykge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVTcGFjZShzcGFjZSwgYXJndW1lbnRzKTtcbiAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29sb3Ivfi9jb2xvci1jb252ZXJ0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIE1JVCBsaWNlbnNlICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZ2IyaHNsOiByZ2IyaHNsLFxuICByZ2IyaHN2OiByZ2IyaHN2LFxuICByZ2IyaHdiOiByZ2IyaHdiLFxuICByZ2IyY215azogcmdiMmNteWssXG4gIHJnYjJrZXl3b3JkOiByZ2Iya2V5d29yZCxcbiAgcmdiMnh5ejogcmdiMnh5eixcbiAgcmdiMmxhYjogcmdiMmxhYixcbiAgcmdiMmxjaDogcmdiMmxjaCxcblxuICBoc2wycmdiOiBoc2wycmdiLFxuICBoc2wyaHN2OiBoc2wyaHN2LFxuICBoc2wyaHdiOiBoc2wyaHdiLFxuICBoc2wyY215azogaHNsMmNteWssXG4gIGhzbDJrZXl3b3JkOiBoc2wya2V5d29yZCxcblxuICBoc3YycmdiOiBoc3YycmdiLFxuICBoc3YyaHNsOiBoc3YyaHNsLFxuICBoc3YyaHdiOiBoc3YyaHdiLFxuICBoc3YyY215azogaHN2MmNteWssXG4gIGhzdjJrZXl3b3JkOiBoc3Yya2V5d29yZCxcblxuICBod2IycmdiOiBod2IycmdiLFxuICBod2IyaHNsOiBod2IyaHNsLFxuICBod2IyaHN2OiBod2IyaHN2LFxuICBod2IyY215azogaHdiMmNteWssXG4gIGh3YjJrZXl3b3JkOiBod2Iya2V5d29yZCxcblxuICBjbXlrMnJnYjogY215azJyZ2IsXG4gIGNteWsyaHNsOiBjbXlrMmhzbCxcbiAgY215azJoc3Y6IGNteWsyaHN2LFxuICBjbXlrMmh3YjogY215azJod2IsXG4gIGNteWsya2V5d29yZDogY215azJrZXl3b3JkLFxuXG4gIGtleXdvcmQycmdiOiBrZXl3b3JkMnJnYixcbiAga2V5d29yZDJoc2w6IGtleXdvcmQyaHNsLFxuICBrZXl3b3JkMmhzdjoga2V5d29yZDJoc3YsXG4gIGtleXdvcmQyaHdiOiBrZXl3b3JkMmh3YixcbiAga2V5d29yZDJjbXlrOiBrZXl3b3JkMmNteWssXG4gIGtleXdvcmQybGFiOiBrZXl3b3JkMmxhYixcbiAga2V5d29yZDJ4eXo6IGtleXdvcmQyeHl6LFxuXG4gIHh5ejJyZ2I6IHh5ejJyZ2IsXG4gIHh5ejJsYWI6IHh5ejJsYWIsXG4gIHh5ejJsY2g6IHh5ejJsY2gsXG5cbiAgbGFiMnh5ejogbGFiMnh5eixcbiAgbGFiMnJnYjogbGFiMnJnYixcbiAgbGFiMmxjaDogbGFiMmxjaCxcblxuICBsY2gybGFiOiBsY2gybGFiLFxuICBsY2gyeHl6OiBsY2gyeHl6LFxuICBsY2gycmdiOiBsY2gycmdiXG59XG5cblxuZnVuY3Rpb24gcmdiMmhzbChyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0vMjU1LFxuICAgICAgZyA9IHJnYlsxXS8yNTUsXG4gICAgICBiID0gcmdiWzJdLzI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBkZWx0YSA9IG1heCAtIG1pbixcbiAgICAgIGgsIHMsIGw7XG5cbiAgaWYgKG1heCA9PSBtaW4pXG4gICAgaCA9IDA7XG4gIGVsc2UgaWYgKHIgPT0gbWF4KVxuICAgIGggPSAoZyAtIGIpIC8gZGVsdGE7XG4gIGVsc2UgaWYgKGcgPT0gbWF4KVxuICAgIGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuICBlbHNlIGlmIChiID09IG1heClcbiAgICBoID0gNCArIChyIC0gZykvIGRlbHRhO1xuXG4gIGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cbiAgaWYgKGggPCAwKVxuICAgIGggKz0gMzYwO1xuXG4gIGwgPSAobWluICsgbWF4KSAvIDI7XG5cbiAgaWYgKG1heCA9PSBtaW4pXG4gICAgcyA9IDA7XG4gIGVsc2UgaWYgKGwgPD0gMC41KVxuICAgIHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuICBlbHNlXG4gICAgcyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXG4gIHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIHJnYjJoc3YocmdiKSB7XG4gIHZhciByID0gcmdiWzBdLFxuICAgICAgZyA9IHJnYlsxXSxcbiAgICAgIGIgPSByZ2JbMl0sXG4gICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgZGVsdGEgPSBtYXggLSBtaW4sXG4gICAgICBoLCBzLCB2O1xuXG4gIGlmIChtYXggPT0gMClcbiAgICBzID0gMDtcbiAgZWxzZVxuICAgIHMgPSAoZGVsdGEvbWF4ICogMTAwMCkvMTA7XG5cbiAgaWYgKG1heCA9PSBtaW4pXG4gICAgaCA9IDA7XG4gIGVsc2UgaWYgKHIgPT0gbWF4KVxuICAgIGggPSAoZyAtIGIpIC8gZGVsdGE7XG4gIGVsc2UgaWYgKGcgPT0gbWF4KVxuICAgIGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuICBlbHNlIGlmIChiID09IG1heClcbiAgICBoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblxuICBoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG4gIGlmIChoIDwgMClcbiAgICBoICs9IDM2MDtcblxuICB2ID0gKChtYXggLyAyNTUpICogMTAwMCkgLyAxMDtcblxuICByZXR1cm4gW2gsIHMsIHZdO1xufVxuXG5mdW5jdGlvbiByZ2IyaHdiKHJnYikge1xuICB2YXIgciA9IHJnYlswXSxcbiAgICAgIGcgPSByZ2JbMV0sXG4gICAgICBiID0gcmdiWzJdLFxuICAgICAgaCA9IHJnYjJoc2wocmdiKVswXSxcbiAgICAgIHcgPSAxLzI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKSxcbiAgICAgIGIgPSAxIC0gMS8yNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cbiAgcmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn1cblxuZnVuY3Rpb24gcmdiMmNteWsocmdiKSB7XG4gIHZhciByID0gcmdiWzBdIC8gMjU1LFxuICAgICAgZyA9IHJnYlsxXSAvIDI1NSxcbiAgICAgIGIgPSByZ2JbMl0gLyAyNTUsXG4gICAgICBjLCBtLCB5LCBrO1xuXG4gIGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcbiAgYyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuICBtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG4gIHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcbiAgcmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn1cblxuZnVuY3Rpb24gcmdiMmtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlS2V5d29yZHNbSlNPTi5zdHJpbmdpZnkocmdiKV07XG59XG5cbmZ1bmN0aW9uIHJnYjJ4eXoocmdiKSB7XG4gIHZhciByID0gcmdiWzBdIC8gMjU1LFxuICAgICAgZyA9IHJnYlsxXSAvIDI1NSxcbiAgICAgIGIgPSByZ2JbMl0gLyAyNTU7XG5cbiAgLy8gYXNzdW1lIHNSR0JcbiAgciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG4gIGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuICBiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuICB2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcbiAgdmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG4gIHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG4gIHJldHVybiBbeCAqIDEwMCwgeSAqMTAwLCB6ICogMTAwXTtcbn1cblxuZnVuY3Rpb24gcmdiMmxhYihyZ2IpIHtcbiAgdmFyIHh5eiA9IHJnYjJ4eXoocmdiKSxcbiAgICAgICAgeCA9IHh5elswXSxcbiAgICAgICAgeSA9IHh5elsxXSxcbiAgICAgICAgeiA9IHh5elsyXSxcbiAgICAgICAgbCwgYSwgYjtcblxuICB4IC89IDk1LjA0NztcbiAgeSAvPSAxMDA7XG4gIHogLz0gMTA4Ljg4MztcblxuICB4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMS8zKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcbiAgeSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEvMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG4gIHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxLzMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG4gIGwgPSAoMTE2ICogeSkgLSAxNjtcbiAgYSA9IDUwMCAqICh4IC0geSk7XG4gIGIgPSAyMDAgKiAoeSAtIHopO1xuXG4gIHJldHVybiBbbCwgYSwgYl07XG59XG5cbmZ1bmN0aW9uIHJnYjJsY2goYXJncykge1xuICByZXR1cm4gbGFiMmxjaChyZ2IybGFiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHNsMnJnYihoc2wpIHtcbiAgdmFyIGggPSBoc2xbMF0gLyAzNjAsXG4gICAgICBzID0gaHNsWzFdIC8gMTAwLFxuICAgICAgbCA9IGhzbFsyXSAvIDEwMCxcbiAgICAgIHQxLCB0MiwgdDMsIHJnYiwgdmFsO1xuXG4gIGlmIChzID09IDApIHtcbiAgICB2YWwgPSBsICogMjU1O1xuICAgIHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG4gIH1cblxuICBpZiAobCA8IDAuNSlcbiAgICB0MiA9IGwgKiAoMSArIHMpO1xuICBlbHNlXG4gICAgdDIgPSBsICsgcyAtIGwgKiBzO1xuICB0MSA9IDIgKiBsIC0gdDI7XG5cbiAgcmdiID0gWzAsIDAsIDBdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIHQzID0gaCArIDEgLyAzICogLSAoaSAtIDEpO1xuICAgIHQzIDwgMCAmJiB0MysrO1xuICAgIHQzID4gMSAmJiB0My0tO1xuXG4gICAgaWYgKDYgKiB0MyA8IDEpXG4gICAgICB2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0MztcbiAgICBlbHNlIGlmICgyICogdDMgPCAxKVxuICAgICAgdmFsID0gdDI7XG4gICAgZWxzZSBpZiAoMyAqIHQzIDwgMilcbiAgICAgIHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcbiAgICBlbHNlXG4gICAgICB2YWwgPSB0MTtcblxuICAgIHJnYltpXSA9IHZhbCAqIDI1NTtcbiAgfVxuXG4gIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGhzbDJoc3YoaHNsKSB7XG4gIHZhciBoID0gaHNsWzBdLFxuICAgICAgcyA9IGhzbFsxXSAvIDEwMCxcbiAgICAgIGwgPSBoc2xbMl0gLyAxMDAsXG4gICAgICBzdiwgdjtcblxuICBpZihsID09PSAwKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIGRvIGNhbGMgb24gYmxhY2tcbiAgICAgIC8vIGFsc28gYXZvaWRzIGRpdmlkZSBieSAwIGVycm9yXG4gICAgICByZXR1cm4gWzAsIDAsIDBdO1xuICB9XG5cbiAgbCAqPSAyO1xuICBzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuICB2ID0gKGwgKyBzKSAvIDI7XG4gIHN2ID0gKDIgKiBzKSAvIChsICsgcyk7XG4gIHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufVxuXG5mdW5jdGlvbiBoc2wyaHdiKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJod2IoaHNsMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGhzbDJjbXlrKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJjbXlrKGhzbDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBoc2wya2V5d29yZChhcmdzKSB7XG4gIHJldHVybiByZ2Iya2V5d29yZChoc2wycmdiKGFyZ3MpKTtcbn1cblxuXG5mdW5jdGlvbiBoc3YycmdiKGhzdikge1xuICB2YXIgaCA9IGhzdlswXSAvIDYwLFxuICAgICAgcyA9IGhzdlsxXSAvIDEwMCxcbiAgICAgIHYgPSBoc3ZbMl0gLyAxMDAsXG4gICAgICBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG4gIHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCksXG4gICAgICBwID0gMjU1ICogdiAqICgxIC0gcyksXG4gICAgICBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSksXG4gICAgICB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSksXG4gICAgICB2ID0gMjU1ICogdjtcblxuICBzd2l0Y2goaGkpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gW3YsIHQsIHBdO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbcSwgdiwgcF07XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFtwLCB2LCB0XTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gW3AsIHEsIHZdO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBbdCwgcCwgdl07XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIFt2LCBwLCBxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoc3YyaHNsKGhzdikge1xuICB2YXIgaCA9IGhzdlswXSxcbiAgICAgIHMgPSBoc3ZbMV0gLyAxMDAsXG4gICAgICB2ID0gaHN2WzJdIC8gMTAwLFxuICAgICAgc2wsIGw7XG5cbiAgbCA9ICgyIC0gcykgKiB2O1xuICBzbCA9IHMgKiB2O1xuICBzbCAvPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcbiAgc2wgPSBzbCB8fCAwO1xuICBsIC89IDI7XG4gIHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufVxuXG5mdW5jdGlvbiBoc3YyaHdiKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJod2IoaHN2MnJnYihhcmdzKSlcbn1cblxuZnVuY3Rpb24gaHN2MmNteWsoYXJncykge1xuICByZXR1cm4gcmdiMmNteWsoaHN2MnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGhzdjJrZXl3b3JkKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJrZXl3b3JkKGhzdjJyZ2IoYXJncykpO1xufVxuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmZ1bmN0aW9uIGh3YjJyZ2IoaHdiKSB7XG4gIHZhciBoID0gaHdiWzBdIC8gMzYwLFxuICAgICAgd2ggPSBod2JbMV0gLyAxMDAsXG4gICAgICBibCA9IGh3YlsyXSAvIDEwMCxcbiAgICAgIHJhdGlvID0gd2ggKyBibCxcbiAgICAgIGksIHYsIGYsIG47XG5cbiAgLy8gd2ggKyBibCBjYW50IGJlID4gMVxuICBpZiAocmF0aW8gPiAxKSB7XG4gICAgd2ggLz0gcmF0aW87XG4gICAgYmwgLz0gcmF0aW87XG4gIH1cblxuICBpID0gTWF0aC5mbG9vcig2ICogaCk7XG4gIHYgPSAxIC0gYmw7XG4gIGYgPSA2ICogaCAtIGk7XG4gIGlmICgoaSAmIDB4MDEpICE9IDApIHtcbiAgICBmID0gMSAtIGY7XG4gIH1cbiAgbiA9IHdoICsgZiAqICh2IC0gd2gpOyAgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuICBzd2l0Y2ggKGkpIHtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgNjpcbiAgICBjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcbiAgICBjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcbiAgICBjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcbiAgICBjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcbiAgICBjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcbiAgICBjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcbiAgfVxuXG4gIHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59XG5cbmZ1bmN0aW9uIGh3YjJoc2woYXJncykge1xuICByZXR1cm4gcmdiMmhzbChod2IycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHdiMmhzdihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHN2KGh3YjJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBod2IyY215ayhhcmdzKSB7XG4gIHJldHVybiByZ2IyY215ayhod2IycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHdiMmtleXdvcmQoYXJncykge1xuICByZXR1cm4gcmdiMmtleXdvcmQoaHdiMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGNteWsycmdiKGNteWspIHtcbiAgdmFyIGMgPSBjbXlrWzBdIC8gMTAwLFxuICAgICAgbSA9IGNteWtbMV0gLyAxMDAsXG4gICAgICB5ID0gY215a1syXSAvIDEwMCxcbiAgICAgIGsgPSBjbXlrWzNdIC8gMTAwLFxuICAgICAgciwgZywgYjtcblxuICByID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG4gIGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcbiAgYiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuICByZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufVxuXG5mdW5jdGlvbiBjbXlrMmhzbChhcmdzKSB7XG4gIHJldHVybiByZ2IyaHNsKGNteWsycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gY215azJoc3YoYXJncykge1xuICByZXR1cm4gcmdiMmhzdihjbXlrMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGNteWsyaHdiKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJod2IoY215azJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBjbXlrMmtleXdvcmQoYXJncykge1xuICByZXR1cm4gcmdiMmtleXdvcmQoY215azJyZ2IoYXJncykpO1xufVxuXG5cbmZ1bmN0aW9uIHh5ejJyZ2IoeHl6KSB7XG4gIHZhciB4ID0geHl6WzBdIC8gMTAwLFxuICAgICAgeSA9IHh5elsxXSAvIDEwMCxcbiAgICAgIHogPSB4eXpbMl0gLyAxMDAsXG4gICAgICByLCBnLCBiO1xuXG4gIHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcbiAgZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG4gIGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG4gIC8vIGFzc3VtZSBzUkdCXG4gIHIgPSByID4gMC4wMDMxMzA4ID8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG4gICAgOiByID0gKHIgKiAxMi45Mik7XG5cbiAgZyA9IGcgPiAwLjAwMzEzMDggPyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcbiAgICA6IGcgPSAoZyAqIDEyLjkyKTtcblxuICBiID0gYiA+IDAuMDAzMTMwOCA/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuICAgIDogYiA9IChiICogMTIuOTIpO1xuXG4gIHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG4gIGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG4gIGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cbiAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn1cblxuZnVuY3Rpb24geHl6MmxhYih4eXopIHtcbiAgdmFyIHggPSB4eXpbMF0sXG4gICAgICB5ID0geHl6WzFdLFxuICAgICAgeiA9IHh5elsyXSxcbiAgICAgIGwsIGEsIGI7XG5cbiAgeCAvPSA5NS4wNDc7XG4gIHkgLz0gMTAwO1xuICB6IC89IDEwOC44ODM7XG5cbiAgeCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEvMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG4gIHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxLzMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuICB6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMS8zKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuICBsID0gKDExNiAqIHkpIC0gMTY7XG4gIGEgPSA1MDAgKiAoeCAtIHkpO1xuICBiID0gMjAwICogKHkgLSB6KTtcblxuICByZXR1cm4gW2wsIGEsIGJdO1xufVxuXG5mdW5jdGlvbiB4eXoybGNoKGFyZ3MpIHtcbiAgcmV0dXJuIGxhYjJsY2goeHl6MmxhYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGxhYjJ4eXoobGFiKSB7XG4gIHZhciBsID0gbGFiWzBdLFxuICAgICAgYSA9IGxhYlsxXSxcbiAgICAgIGIgPSBsYWJbMl0sXG4gICAgICB4LCB5LCB6LCB5MjtcblxuICBpZiAobCA8PSA4KSB7XG4gICAgeSA9IChsICogMTAwKSAvIDkwMy4zO1xuICAgIHkyID0gKDcuNzg3ICogKHkgLyAxMDApKSArICgxNiAvIDExNik7XG4gIH0gZWxzZSB7XG4gICAgeSA9IDEwMCAqIE1hdGgucG93KChsICsgMTYpIC8gMTE2LCAzKTtcbiAgICB5MiA9IE1hdGgucG93KHkgLyAxMDAsIDEvMyk7XG4gIH1cblxuICB4ID0geCAvIDk1LjA0NyA8PSAwLjAwODg1NiA/IHggPSAoOTUuMDQ3ICogKChhIC8gNTAwKSArIHkyIC0gKDE2IC8gMTE2KSkpIC8gNy43ODcgOiA5NS4wNDcgKiBNYXRoLnBvdygoYSAvIDUwMCkgKyB5MiwgMyk7XG5cbiAgeiA9IHogLyAxMDguODgzIDw9IDAuMDA4ODU5ID8geiA9ICgxMDguODgzICogKHkyIC0gKGIgLyAyMDApIC0gKDE2IC8gMTE2KSkpIC8gNy43ODcgOiAxMDguODgzICogTWF0aC5wb3coeTIgLSAoYiAvIDIwMCksIDMpO1xuXG4gIHJldHVybiBbeCwgeSwgel07XG59XG5cbmZ1bmN0aW9uIGxhYjJsY2gobGFiKSB7XG4gIHZhciBsID0gbGFiWzBdLFxuICAgICAgYSA9IGxhYlsxXSxcbiAgICAgIGIgPSBsYWJbMl0sXG4gICAgICBociwgaCwgYztcblxuICBociA9IE1hdGguYXRhbjIoYiwgYSk7XG4gIGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuICBpZiAoaCA8IDApIHtcbiAgICBoICs9IDM2MDtcbiAgfVxuICBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICByZXR1cm4gW2wsIGMsIGhdO1xufVxuXG5mdW5jdGlvbiBsYWIycmdiKGFyZ3MpIHtcbiAgcmV0dXJuIHh5ejJyZ2IobGFiMnh5eihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGxjaDJsYWIobGNoKSB7XG4gIHZhciBsID0gbGNoWzBdLFxuICAgICAgYyA9IGxjaFsxXSxcbiAgICAgIGggPSBsY2hbMl0sXG4gICAgICBhLCBiLCBocjtcblxuICBociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcbiAgYSA9IGMgKiBNYXRoLmNvcyhocik7XG4gIGIgPSBjICogTWF0aC5zaW4oaHIpO1xuICByZXR1cm4gW2wsIGEsIGJdO1xufVxuXG5mdW5jdGlvbiBsY2gyeHl6KGFyZ3MpIHtcbiAgcmV0dXJuIGxhYjJ4eXoobGNoMmxhYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGxjaDJyZ2IoYXJncykge1xuICByZXR1cm4gbGFiMnJnYihsY2gybGFiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJyZ2Ioa2V5d29yZCkge1xuICByZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQyaHNsKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJoc2woa2V5d29yZDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMmhzdihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHN2KGtleXdvcmQycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJod2IoYXJncykge1xuICByZXR1cm4gcmdiMmh3YihrZXl3b3JkMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQyY215ayhhcmdzKSB7XG4gIHJldHVybiByZ2IyY215ayhrZXl3b3JkMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQybGFiKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJsYWIoa2V5d29yZDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMnh5eihhcmdzKSB7XG4gIHJldHVybiByZ2IyeHl6KGtleXdvcmQycmdiKGFyZ3MpKTtcbn1cblxudmFyIGNzc0tleXdvcmRzID0ge1xuICBhbGljZWJsdWU6ICBbMjQwLDI0OCwyNTVdLFxuICBhbnRpcXVld2hpdGU6IFsyNTAsMjM1LDIxNV0sXG4gIGFxdWE6IFswLDI1NSwyNTVdLFxuICBhcXVhbWFyaW5lOiBbMTI3LDI1NSwyMTJdLFxuICBhenVyZTogIFsyNDAsMjU1LDI1NV0sXG4gIGJlaWdlOiAgWzI0NSwyNDUsMjIwXSxcbiAgYmlzcXVlOiBbMjU1LDIyOCwxOTZdLFxuICBibGFjazogIFswLDAsMF0sXG4gIGJsYW5jaGVkYWxtb25kOiBbMjU1LDIzNSwyMDVdLFxuICBibHVlOiBbMCwwLDI1NV0sXG4gIGJsdWV2aW9sZXQ6IFsxMzgsNDMsMjI2XSxcbiAgYnJvd246ICBbMTY1LDQyLDQyXSxcbiAgYnVybHl3b29kOiAgWzIyMiwxODQsMTM1XSxcbiAgY2FkZXRibHVlOiAgWzk1LDE1OCwxNjBdLFxuICBjaGFydHJldXNlOiBbMTI3LDI1NSwwXSxcbiAgY2hvY29sYXRlOiAgWzIxMCwxMDUsMzBdLFxuICBjb3JhbDogIFsyNTUsMTI3LDgwXSxcbiAgY29ybmZsb3dlcmJsdWU6IFsxMDAsMTQ5LDIzN10sXG4gIGNvcm5zaWxrOiBbMjU1LDI0OCwyMjBdLFxuICBjcmltc29uOiAgWzIyMCwyMCw2MF0sXG4gIGN5YW46IFswLDI1NSwyNTVdLFxuICBkYXJrYmx1ZTogWzAsMCwxMzldLFxuICBkYXJrY3lhbjogWzAsMTM5LDEzOV0sXG4gIGRhcmtnb2xkZW5yb2Q6ICBbMTg0LDEzNCwxMV0sXG4gIGRhcmtncmF5OiBbMTY5LDE2OSwxNjldLFxuICBkYXJrZ3JlZW46ICBbMCwxMDAsMF0sXG4gIGRhcmtncmV5OiBbMTY5LDE2OSwxNjldLFxuICBkYXJra2hha2k6ICBbMTg5LDE4MywxMDddLFxuICBkYXJrbWFnZW50YTogIFsxMzksMCwxMzldLFxuICBkYXJrb2xpdmVncmVlbjogWzg1LDEwNyw0N10sXG4gIGRhcmtvcmFuZ2U6IFsyNTUsMTQwLDBdLFxuICBkYXJrb3JjaGlkOiBbMTUzLDUwLDIwNF0sXG4gIGRhcmtyZWQ6ICBbMTM5LDAsMF0sXG4gIGRhcmtzYWxtb246IFsyMzMsMTUwLDEyMl0sXG4gIGRhcmtzZWFncmVlbjogWzE0MywxODgsMTQzXSxcbiAgZGFya3NsYXRlYmx1ZTogIFs3Miw2MSwxMzldLFxuICBkYXJrc2xhdGVncmF5OiAgWzQ3LDc5LDc5XSxcbiAgZGFya3NsYXRlZ3JleTogIFs0Nyw3OSw3OV0sXG4gIGRhcmt0dXJxdW9pc2U6ICBbMCwyMDYsMjA5XSxcbiAgZGFya3Zpb2xldDogWzE0OCwwLDIxMV0sXG4gIGRlZXBwaW5rOiBbMjU1LDIwLDE0N10sXG4gIGRlZXBza3libHVlOiAgWzAsMTkxLDI1NV0sXG4gIGRpbWdyYXk6ICBbMTA1LDEwNSwxMDVdLFxuICBkaW1ncmV5OiAgWzEwNSwxMDUsMTA1XSxcbiAgZG9kZ2VyYmx1ZTogWzMwLDE0NCwyNTVdLFxuICBmaXJlYnJpY2s6ICBbMTc4LDM0LDM0XSxcbiAgZmxvcmFsd2hpdGU6ICBbMjU1LDI1MCwyNDBdLFxuICBmb3Jlc3RncmVlbjogIFszNCwxMzksMzRdLFxuICBmdWNoc2lhOiAgWzI1NSwwLDI1NV0sXG4gIGdhaW5zYm9ybzogIFsyMjAsMjIwLDIyMF0sXG4gIGdob3N0d2hpdGU6IFsyNDgsMjQ4LDI1NV0sXG4gIGdvbGQ6IFsyNTUsMjE1LDBdLFxuICBnb2xkZW5yb2Q6ICBbMjE4LDE2NSwzMl0sXG4gIGdyYXk6IFsxMjgsMTI4LDEyOF0sXG4gIGdyZWVuOiAgWzAsMTI4LDBdLFxuICBncmVlbnllbGxvdzogIFsxNzMsMjU1LDQ3XSxcbiAgZ3JleTogWzEyOCwxMjgsMTI4XSxcbiAgaG9uZXlkZXc6IFsyNDAsMjU1LDI0MF0sXG4gIGhvdHBpbms6ICBbMjU1LDEwNSwxODBdLFxuICBpbmRpYW5yZWQ6ICBbMjA1LDkyLDkyXSxcbiAgaW5kaWdvOiBbNzUsMCwxMzBdLFxuICBpdm9yeTogIFsyNTUsMjU1LDI0MF0sXG4gIGtoYWtpOiAgWzI0MCwyMzAsMTQwXSxcbiAgbGF2ZW5kZXI6IFsyMzAsMjMwLDI1MF0sXG4gIGxhdmVuZGVyYmx1c2g6ICBbMjU1LDI0MCwyNDVdLFxuICBsYXduZ3JlZW46ICBbMTI0LDI1MiwwXSxcbiAgbGVtb25jaGlmZm9uOiBbMjU1LDI1MCwyMDVdLFxuICBsaWdodGJsdWU6ICBbMTczLDIxNiwyMzBdLFxuICBsaWdodGNvcmFsOiBbMjQwLDEyOCwxMjhdLFxuICBsaWdodGN5YW46ICBbMjI0LDI1NSwyNTVdLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogWzI1MCwyNTAsMjEwXSxcbiAgbGlnaHRncmF5OiAgWzIxMSwyMTEsMjExXSxcbiAgbGlnaHRncmVlbjogWzE0NCwyMzgsMTQ0XSxcbiAgbGlnaHRncmV5OiAgWzIxMSwyMTEsMjExXSxcbiAgbGlnaHRwaW5rOiAgWzI1NSwxODIsMTkzXSxcbiAgbGlnaHRzYWxtb246ICBbMjU1LDE2MCwxMjJdLFxuICBsaWdodHNlYWdyZWVuOiAgWzMyLDE3OCwxNzBdLFxuICBsaWdodHNreWJsdWU6IFsxMzUsMjA2LDI1MF0sXG4gIGxpZ2h0c2xhdGVncmF5OiBbMTE5LDEzNiwxNTNdLFxuICBsaWdodHNsYXRlZ3JleTogWzExOSwxMzYsMTUzXSxcbiAgbGlnaHRzdGVlbGJsdWU6IFsxNzYsMTk2LDIyMl0sXG4gIGxpZ2h0eWVsbG93OiAgWzI1NSwyNTUsMjI0XSxcbiAgbGltZTogWzAsMjU1LDBdLFxuICBsaW1lZ3JlZW46ICBbNTAsMjA1LDUwXSxcbiAgbGluZW46ICBbMjUwLDI0MCwyMzBdLFxuICBtYWdlbnRhOiAgWzI1NSwwLDI1NV0sXG4gIG1hcm9vbjogWzEyOCwwLDBdLFxuICBtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLDIwNSwxNzBdLFxuICBtZWRpdW1ibHVlOiBbMCwwLDIwNV0sXG4gIG1lZGl1bW9yY2hpZDogWzE4Niw4NSwyMTFdLFxuICBtZWRpdW1wdXJwbGU6IFsxNDcsMTEyLDIxOV0sXG4gIG1lZGl1bXNlYWdyZWVuOiBbNjAsMTc5LDExM10sXG4gIG1lZGl1bXNsYXRlYmx1ZTogIFsxMjMsMTA0LDIzOF0sXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAgWzAsMjUwLDE1NF0sXG4gIG1lZGl1bXR1cnF1b2lzZTogIFs3MiwyMDksMjA0XSxcbiAgbWVkaXVtdmlvbGV0cmVkOiAgWzE5OSwyMSwxMzNdLFxuICBtaWRuaWdodGJsdWU6IFsyNSwyNSwxMTJdLFxuICBtaW50Y3JlYW06ICBbMjQ1LDI1NSwyNTBdLFxuICBtaXN0eXJvc2U6ICBbMjU1LDIyOCwyMjVdLFxuICBtb2NjYXNpbjogWzI1NSwyMjgsMTgxXSxcbiAgbmF2YWpvd2hpdGU6ICBbMjU1LDIyMiwxNzNdLFxuICBuYXZ5OiBbMCwwLDEyOF0sXG4gIG9sZGxhY2U6ICBbMjUzLDI0NSwyMzBdLFxuICBvbGl2ZTogIFsxMjgsMTI4LDBdLFxuICBvbGl2ZWRyYWI6ICBbMTA3LDE0MiwzNV0sXG4gIG9yYW5nZTogWzI1NSwxNjUsMF0sXG4gIG9yYW5nZXJlZDogIFsyNTUsNjksMF0sXG4gIG9yY2hpZDogWzIxOCwxMTIsMjE0XSxcbiAgcGFsZWdvbGRlbnJvZDogIFsyMzgsMjMyLDE3MF0sXG4gIHBhbGVncmVlbjogIFsxNTIsMjUxLDE1Ml0sXG4gIHBhbGV0dXJxdW9pc2U6ICBbMTc1LDIzOCwyMzhdLFxuICBwYWxldmlvbGV0cmVkOiAgWzIxOSwxMTIsMTQ3XSxcbiAgcGFwYXlhd2hpcDogWzI1NSwyMzksMjEzXSxcbiAgcGVhY2hwdWZmOiAgWzI1NSwyMTgsMTg1XSxcbiAgcGVydTogWzIwNSwxMzMsNjNdLFxuICBwaW5rOiBbMjU1LDE5MiwyMDNdLFxuICBwbHVtOiBbMjIxLDE2MCwyMjFdLFxuICBwb3dkZXJibHVlOiBbMTc2LDIyNCwyMzBdLFxuICBwdXJwbGU6IFsxMjgsMCwxMjhdLFxuICByZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzXSxcbiAgcmVkOiAgWzI1NSwwLDBdLFxuICByb3N5YnJvd246ICBbMTg4LDE0MywxNDNdLFxuICByb3lhbGJsdWU6ICBbNjUsMTA1LDIyNV0sXG4gIHNhZGRsZWJyb3duOiAgWzEzOSw2OSwxOV0sXG4gIHNhbG1vbjogWzI1MCwxMjgsMTE0XSxcbiAgc2FuZHlicm93bjogWzI0NCwxNjQsOTZdLFxuICBzZWFncmVlbjogWzQ2LDEzOSw4N10sXG4gIHNlYXNoZWxsOiBbMjU1LDI0NSwyMzhdLFxuICBzaWVubmE6IFsxNjAsODIsNDVdLFxuICBzaWx2ZXI6IFsxOTIsMTkyLDE5Ml0sXG4gIHNreWJsdWU6ICBbMTM1LDIwNiwyMzVdLFxuICBzbGF0ZWJsdWU6ICBbMTA2LDkwLDIwNV0sXG4gIHNsYXRlZ3JheTogIFsxMTIsMTI4LDE0NF0sXG4gIHNsYXRlZ3JleTogIFsxMTIsMTI4LDE0NF0sXG4gIHNub3c6IFsyNTUsMjUwLDI1MF0sXG4gIHNwcmluZ2dyZWVuOiAgWzAsMjU1LDEyN10sXG4gIHN0ZWVsYmx1ZTogIFs3MCwxMzAsMTgwXSxcbiAgdGFuOiAgWzIxMCwxODAsMTQwXSxcbiAgdGVhbDogWzAsMTI4LDEyOF0sXG4gIHRoaXN0bGU6ICBbMjE2LDE5MSwyMTZdLFxuICB0b21hdG86IFsyNTUsOTksNzFdLFxuICB0dXJxdW9pc2U6ICBbNjQsMjI0LDIwOF0sXG4gIHZpb2xldDogWzIzOCwxMzAsMjM4XSxcbiAgd2hlYXQ6ICBbMjQ1LDIyMiwxNzldLFxuICB3aGl0ZTogIFsyNTUsMjU1LDI1NV0sXG4gIHdoaXRlc21va2U6IFsyNDUsMjQ1LDI0NV0sXG4gIHllbGxvdzogWzI1NSwyNTUsMF0sXG4gIHllbGxvd2dyZWVuOiAgWzE1NCwyMDUsNTBdXG59O1xuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcbiAgcmV2ZXJzZUtleXdvcmRzW0pTT04uc3RyaW5naWZ5KGNzc0tleXdvcmRzW2tleV0pXSA9IGtleTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgZ2V0UmdiYTogZ2V0UmdiYSxcbiAgIGdldEhzbGE6IGdldEhzbGEsXG4gICBnZXRSZ2I6IGdldFJnYixcbiAgIGdldEhzbDogZ2V0SHNsLFxuICAgZ2V0SHdiOiBnZXRId2IsXG4gICBnZXRBbHBoYTogZ2V0QWxwaGEsXG5cbiAgIGhleFN0cmluZzogaGV4U3RyaW5nLFxuICAgcmdiU3RyaW5nOiByZ2JTdHJpbmcsXG4gICByZ2JhU3RyaW5nOiByZ2JhU3RyaW5nLFxuICAgcGVyY2VudFN0cmluZzogcGVyY2VudFN0cmluZyxcbiAgIHBlcmNlbnRhU3RyaW5nOiBwZXJjZW50YVN0cmluZyxcbiAgIGhzbFN0cmluZzogaHNsU3RyaW5nLFxuICAgaHNsYVN0cmluZzogaHNsYVN0cmluZyxcbiAgIGh3YlN0cmluZzogaHdiU3RyaW5nLFxuICAga2V5d29yZDoga2V5d29yZFxufVxuXG5mdW5jdGlvbiBnZXRSZ2JhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBhYmJyID0gIC9eIyhbYS1mQS1GMC05XXszfSkkLyxcbiAgICAgICBoZXggPSAgL14jKFthLWZBLUYwLTldezZ9KSQvLFxuICAgICAgIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBrZXl3b3JkID0gLyhcXEQrKS87XG5cbiAgIHZhciByZ2IgPSBbMCwgMCwgMF0sXG4gICAgICAgYSA9IDEsXG4gICAgICAgbWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpICogMiwgaSAqIDIgKyAyKSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0pO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuICAgICAgaWYgKG1hdGNoWzFdID09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cbiAgICAgIHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuICAgICAgaWYgKCFyZ2IpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJnYltpXSA9IHNjYWxlKHJnYltpXSwgMCwgMjU1KTtcbiAgIH1cbiAgIGlmICghYSAmJiBhICE9IDApIHtcbiAgICAgIGEgPSAxO1xuICAgfVxuICAgZWxzZSB7XG4gICAgICBhID0gc2NhbGUoYSwgMCwgMSk7XG4gICB9XG4gICByZ2JbM10gPSBhO1xuICAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgcyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGwgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgcywgbCwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldEh3YihzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICB3ID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgYiA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCB3LCBiLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmdiKHN0cmluZykge1xuICAgdmFyIHJnYmEgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICByZXR1cm4gcmdiYSAmJiByZ2JhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRIc2woc3RyaW5nKSB7XG4gIHZhciBoc2xhID0gZ2V0SHNsYShzdHJpbmcpO1xuICByZXR1cm4gaHNsYSAmJiBoc2xhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRBbHBoYShzdHJpbmcpIHtcbiAgIHZhciB2YWxzID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgaWYgKHZhbHMpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEhzbGEoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHdiKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxufVxuXG4vLyBnZW5lcmF0b3JzXG5mdW5jdGlvbiBoZXhTdHJpbmcocmdiKSB7XG4gICByZXR1cm4gXCIjXCIgKyBoZXhEb3VibGUocmdiWzBdKSArIGhleERvdWJsZShyZ2JbMV0pXG4gICAgICAgICAgICAgICsgaGV4RG91YmxlKHJnYlsyXSk7XG59XG5cbmZ1bmN0aW9uIHJnYlN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYihcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAocmdiYVszXSAhPT0gdW5kZWZpbmVkID8gcmdiYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiYShcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXVxuICAgICAgICAgICArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuXG4gICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcbiAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSwgXCIgKyAoYWxwaGEgfHwgcmdiYVszXSB8fCAxKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKGhzbGFbM10gJiYgaHNsYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2woXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHNsYVszXSAhPT0gdW5kZWZpbmVkID8gaHNsYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsYShcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUsIFwiXG4gICAgICAgICAgICsgYWxwaGEgKyBcIilcIjtcbn1cblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmZ1bmN0aW9uIGh3YlN0cmluZyhod2IsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHdiWzNdICE9PSB1bmRlZmluZWQgPyBod2JbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImh3YihcIiArIGh3YlswXSArIFwiLCBcIiArIGh3YlsxXSArIFwiJSwgXCIgKyBod2JbMl0gKyBcIiVcIlxuICAgICAgICAgICArIChhbHBoYSAhPT0gdW5kZWZpbmVkICYmIGFscGhhICE9PSAxID8gXCIsIFwiICsgYWxwaGEgOiBcIlwiKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkKHJnYikge1xuICByZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIHNjYWxlKG51bSwgbWluLCBtYXgpIHtcbiAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcbiAgdmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyBcIjBcIiArIHN0ciA6IHN0cjtcbn1cblxuXG4vL2NyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG4gICByZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29sb3Ivfi9jb2xvci1zdHJpbmcvY29sb3Itc3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFsaWNlYmx1ZVwiOiBbXG5cdFx0MjQwLFxuXHRcdDI0OCxcblx0XHQyNTVcblx0XSxcblx0XCJhbnRpcXVld2hpdGVcIjogW1xuXHRcdDI1MCxcblx0XHQyMzUsXG5cdFx0MjE1XG5cdF0sXG5cdFwiYXF1YVwiOiBbXG5cdFx0MCxcblx0XHQyNTUsXG5cdFx0MjU1XG5cdF0sXG5cdFwiYXF1YW1hcmluZVwiOiBbXG5cdFx0MTI3LFxuXHRcdDI1NSxcblx0XHQyMTJcblx0XSxcblx0XCJhenVyZVwiOiBbXG5cdFx0MjQwLFxuXHRcdDI1NSxcblx0XHQyNTVcblx0XSxcblx0XCJiZWlnZVwiOiBbXG5cdFx0MjQ1LFxuXHRcdDI0NSxcblx0XHQyMjBcblx0XSxcblx0XCJiaXNxdWVcIjogW1xuXHRcdDI1NSxcblx0XHQyMjgsXG5cdFx0MTk2XG5cdF0sXG5cdFwiYmxhY2tcIjogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQwXG5cdF0sXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogW1xuXHRcdDI1NSxcblx0XHQyMzUsXG5cdFx0MjA1XG5cdF0sXG5cdFwiYmx1ZVwiOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDI1NVxuXHRdLFxuXHRcImJsdWV2aW9sZXRcIjogW1xuXHRcdDEzOCxcblx0XHQ0Myxcblx0XHQyMjZcblx0XSxcblx0XCJicm93blwiOiBbXG5cdFx0MTY1LFxuXHRcdDQyLFxuXHRcdDQyXG5cdF0sXG5cdFwiYnVybHl3b29kXCI6IFtcblx0XHQyMjIsXG5cdFx0MTg0LFxuXHRcdDEzNVxuXHRdLFxuXHRcImNhZGV0Ymx1ZVwiOiBbXG5cdFx0OTUsXG5cdFx0MTU4LFxuXHRcdDE2MFxuXHRdLFxuXHRcImNoYXJ0cmV1c2VcIjogW1xuXHRcdDEyNyxcblx0XHQyNTUsXG5cdFx0MFxuXHRdLFxuXHRcImNob2NvbGF0ZVwiOiBbXG5cdFx0MjEwLFxuXHRcdDEwNSxcblx0XHQzMFxuXHRdLFxuXHRcImNvcmFsXCI6IFtcblx0XHQyNTUsXG5cdFx0MTI3LFxuXHRcdDgwXG5cdF0sXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogW1xuXHRcdDEwMCxcblx0XHQxNDksXG5cdFx0MjM3XG5cdF0sXG5cdFwiY29ybnNpbGtcIjogW1xuXHRcdDI1NSxcblx0XHQyNDgsXG5cdFx0MjIwXG5cdF0sXG5cdFwiY3JpbXNvblwiOiBbXG5cdFx0MjIwLFxuXHRcdDIwLFxuXHRcdDYwXG5cdF0sXG5cdFwiY3lhblwiOiBbXG5cdFx0MCxcblx0XHQyNTUsXG5cdFx0MjU1XG5cdF0sXG5cdFwiZGFya2JsdWVcIjogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQxMzlcblx0XSxcblx0XCJkYXJrY3lhblwiOiBbXG5cdFx0MCxcblx0XHQxMzksXG5cdFx0MTM5XG5cdF0sXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbXG5cdFx0MTg0LFxuXHRcdDEzNCxcblx0XHQxMVxuXHRdLFxuXHRcImRhcmtncmF5XCI6IFtcblx0XHQxNjksXG5cdFx0MTY5LFxuXHRcdDE2OVxuXHRdLFxuXHRcImRhcmtncmVlblwiOiBbXG5cdFx0MCxcblx0XHQxMDAsXG5cdFx0MFxuXHRdLFxuXHRcImRhcmtncmV5XCI6IFtcblx0XHQxNjksXG5cdFx0MTY5LFxuXHRcdDE2OVxuXHRdLFxuXHRcImRhcmtraGFraVwiOiBbXG5cdFx0MTg5LFxuXHRcdDE4Myxcblx0XHQxMDdcblx0XSxcblx0XCJkYXJrbWFnZW50YVwiOiBbXG5cdFx0MTM5LFxuXHRcdDAsXG5cdFx0MTM5XG5cdF0sXG5cdFwiZGFya29saXZlZ3JlZW5cIjogW1xuXHRcdDg1LFxuXHRcdDEwNyxcblx0XHQ0N1xuXHRdLFxuXHRcImRhcmtvcmFuZ2VcIjogW1xuXHRcdDI1NSxcblx0XHQxNDAsXG5cdFx0MFxuXHRdLFxuXHRcImRhcmtvcmNoaWRcIjogW1xuXHRcdDE1Myxcblx0XHQ1MCxcblx0XHQyMDRcblx0XSxcblx0XCJkYXJrcmVkXCI6IFtcblx0XHQxMzksXG5cdFx0MCxcblx0XHQwXG5cdF0sXG5cdFwiZGFya3NhbG1vblwiOiBbXG5cdFx0MjMzLFxuXHRcdDE1MCxcblx0XHQxMjJcblx0XSxcblx0XCJkYXJrc2VhZ3JlZW5cIjogW1xuXHRcdDE0Myxcblx0XHQxODgsXG5cdFx0MTQzXG5cdF0sXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbXG5cdFx0NzIsXG5cdFx0NjEsXG5cdFx0MTM5XG5cdF0sXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbXG5cdFx0NDcsXG5cdFx0NzksXG5cdFx0Nzlcblx0XSxcblx0XCJkYXJrc2xhdGVncmV5XCI6IFtcblx0XHQ0Nyxcblx0XHQ3OSxcblx0XHQ3OVxuXHRdLFxuXHRcImRhcmt0dXJxdW9pc2VcIjogW1xuXHRcdDAsXG5cdFx0MjA2LFxuXHRcdDIwOVxuXHRdLFxuXHRcImRhcmt2aW9sZXRcIjogW1xuXHRcdDE0OCxcblx0XHQwLFxuXHRcdDIxMVxuXHRdLFxuXHRcImRlZXBwaW5rXCI6IFtcblx0XHQyNTUsXG5cdFx0MjAsXG5cdFx0MTQ3XG5cdF0sXG5cdFwiZGVlcHNreWJsdWVcIjogW1xuXHRcdDAsXG5cdFx0MTkxLFxuXHRcdDI1NVxuXHRdLFxuXHRcImRpbWdyYXlcIjogW1xuXHRcdDEwNSxcblx0XHQxMDUsXG5cdFx0MTA1XG5cdF0sXG5cdFwiZGltZ3JleVwiOiBbXG5cdFx0MTA1LFxuXHRcdDEwNSxcblx0XHQxMDVcblx0XSxcblx0XCJkb2RnZXJibHVlXCI6IFtcblx0XHQzMCxcblx0XHQxNDQsXG5cdFx0MjU1XG5cdF0sXG5cdFwiZmlyZWJyaWNrXCI6IFtcblx0XHQxNzgsXG5cdFx0MzQsXG5cdFx0MzRcblx0XSxcblx0XCJmbG9yYWx3aGl0ZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDI1MCxcblx0XHQyNDBcblx0XSxcblx0XCJmb3Jlc3RncmVlblwiOiBbXG5cdFx0MzQsXG5cdFx0MTM5LFxuXHRcdDM0XG5cdF0sXG5cdFwiZnVjaHNpYVwiOiBbXG5cdFx0MjU1LFxuXHRcdDAsXG5cdFx0MjU1XG5cdF0sXG5cdFwiZ2FpbnNib3JvXCI6IFtcblx0XHQyMjAsXG5cdFx0MjIwLFxuXHRcdDIyMFxuXHRdLFxuXHRcImdob3N0d2hpdGVcIjogW1xuXHRcdDI0OCxcblx0XHQyNDgsXG5cdFx0MjU1XG5cdF0sXG5cdFwiZ29sZFwiOiBbXG5cdFx0MjU1LFxuXHRcdDIxNSxcblx0XHQwXG5cdF0sXG5cdFwiZ29sZGVucm9kXCI6IFtcblx0XHQyMTgsXG5cdFx0MTY1LFxuXHRcdDMyXG5cdF0sXG5cdFwiZ3JheVwiOiBbXG5cdFx0MTI4LFxuXHRcdDEyOCxcblx0XHQxMjhcblx0XSxcblx0XCJncmVlblwiOiBbXG5cdFx0MCxcblx0XHQxMjgsXG5cdFx0MFxuXHRdLFxuXHRcImdyZWVueWVsbG93XCI6IFtcblx0XHQxNzMsXG5cdFx0MjU1LFxuXHRcdDQ3XG5cdF0sXG5cdFwiZ3JleVwiOiBbXG5cdFx0MTI4LFxuXHRcdDEyOCxcblx0XHQxMjhcblx0XSxcblx0XCJob25leWRld1wiOiBbXG5cdFx0MjQwLFxuXHRcdDI1NSxcblx0XHQyNDBcblx0XSxcblx0XCJob3RwaW5rXCI6IFtcblx0XHQyNTUsXG5cdFx0MTA1LFxuXHRcdDE4MFxuXHRdLFxuXHRcImluZGlhbnJlZFwiOiBbXG5cdFx0MjA1LFxuXHRcdDkyLFxuXHRcdDkyXG5cdF0sXG5cdFwiaW5kaWdvXCI6IFtcblx0XHQ3NSxcblx0XHQwLFxuXHRcdDEzMFxuXHRdLFxuXHRcIml2b3J5XCI6IFtcblx0XHQyNTUsXG5cdFx0MjU1LFxuXHRcdDI0MFxuXHRdLFxuXHRcImtoYWtpXCI6IFtcblx0XHQyNDAsXG5cdFx0MjMwLFxuXHRcdDE0MFxuXHRdLFxuXHRcImxhdmVuZGVyXCI6IFtcblx0XHQyMzAsXG5cdFx0MjMwLFxuXHRcdDI1MFxuXHRdLFxuXHRcImxhdmVuZGVyYmx1c2hcIjogW1xuXHRcdDI1NSxcblx0XHQyNDAsXG5cdFx0MjQ1XG5cdF0sXG5cdFwibGF3bmdyZWVuXCI6IFtcblx0XHQxMjQsXG5cdFx0MjUyLFxuXHRcdDBcblx0XSxcblx0XCJsZW1vbmNoaWZmb25cIjogW1xuXHRcdDI1NSxcblx0XHQyNTAsXG5cdFx0MjA1XG5cdF0sXG5cdFwibGlnaHRibHVlXCI6IFtcblx0XHQxNzMsXG5cdFx0MjE2LFxuXHRcdDIzMFxuXHRdLFxuXHRcImxpZ2h0Y29yYWxcIjogW1xuXHRcdDI0MCxcblx0XHQxMjgsXG5cdFx0MTI4XG5cdF0sXG5cdFwibGlnaHRjeWFuXCI6IFtcblx0XHQyMjQsXG5cdFx0MjU1LFxuXHRcdDI1NVxuXHRdLFxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFtcblx0XHQyNTAsXG5cdFx0MjUwLFxuXHRcdDIxMFxuXHRdLFxuXHRcImxpZ2h0Z3JheVwiOiBbXG5cdFx0MjExLFxuXHRcdDIxMSxcblx0XHQyMTFcblx0XSxcblx0XCJsaWdodGdyZWVuXCI6IFtcblx0XHQxNDQsXG5cdFx0MjM4LFxuXHRcdDE0NFxuXHRdLFxuXHRcImxpZ2h0Z3JleVwiOiBbXG5cdFx0MjExLFxuXHRcdDIxMSxcblx0XHQyMTFcblx0XSxcblx0XCJsaWdodHBpbmtcIjogW1xuXHRcdDI1NSxcblx0XHQxODIsXG5cdFx0MTkzXG5cdF0sXG5cdFwibGlnaHRzYWxtb25cIjogW1xuXHRcdDI1NSxcblx0XHQxNjAsXG5cdFx0MTIyXG5cdF0sXG5cdFwibGlnaHRzZWFncmVlblwiOiBbXG5cdFx0MzIsXG5cdFx0MTc4LFxuXHRcdDE3MFxuXHRdLFxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbXG5cdFx0MTM1LFxuXHRcdDIwNixcblx0XHQyNTBcblx0XSxcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbXG5cdFx0MTE5LFxuXHRcdDEzNixcblx0XHQxNTNcblx0XSxcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbXG5cdFx0MTE5LFxuXHRcdDEzNixcblx0XHQxNTNcblx0XSxcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbXG5cdFx0MTc2LFxuXHRcdDE5Nixcblx0XHQyMjJcblx0XSxcblx0XCJsaWdodHllbGxvd1wiOiBbXG5cdFx0MjU1LFxuXHRcdDI1NSxcblx0XHQyMjRcblx0XSxcblx0XCJsaW1lXCI6IFtcblx0XHQwLFxuXHRcdDI1NSxcblx0XHQwXG5cdF0sXG5cdFwibGltZWdyZWVuXCI6IFtcblx0XHQ1MCxcblx0XHQyMDUsXG5cdFx0NTBcblx0XSxcblx0XCJsaW5lblwiOiBbXG5cdFx0MjUwLFxuXHRcdDI0MCxcblx0XHQyMzBcblx0XSxcblx0XCJtYWdlbnRhXCI6IFtcblx0XHQyNTUsXG5cdFx0MCxcblx0XHQyNTVcblx0XSxcblx0XCJtYXJvb25cIjogW1xuXHRcdDEyOCxcblx0XHQwLFxuXHRcdDBcblx0XSxcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFtcblx0XHQxMDIsXG5cdFx0MjA1LFxuXHRcdDE3MFxuXHRdLFxuXHRcIm1lZGl1bWJsdWVcIjogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQyMDVcblx0XSxcblx0XCJtZWRpdW1vcmNoaWRcIjogW1xuXHRcdDE4Nixcblx0XHQ4NSxcblx0XHQyMTFcblx0XSxcblx0XCJtZWRpdW1wdXJwbGVcIjogW1xuXHRcdDE0Nyxcblx0XHQxMTIsXG5cdFx0MjE5XG5cdF0sXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogW1xuXHRcdDYwLFxuXHRcdDE3OSxcblx0XHQxMTNcblx0XSxcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogW1xuXHRcdDEyMyxcblx0XHQxMDQsXG5cdFx0MjM4XG5cdF0sXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogW1xuXHRcdDAsXG5cdFx0MjUwLFxuXHRcdDE1NFxuXHRdLFxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbXG5cdFx0NzIsXG5cdFx0MjA5LFxuXHRcdDIwNFxuXHRdLFxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbXG5cdFx0MTk5LFxuXHRcdDIxLFxuXHRcdDEzM1xuXHRdLFxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbXG5cdFx0MjUsXG5cdFx0MjUsXG5cdFx0MTEyXG5cdF0sXG5cdFwibWludGNyZWFtXCI6IFtcblx0XHQyNDUsXG5cdFx0MjU1LFxuXHRcdDI1MFxuXHRdLFxuXHRcIm1pc3R5cm9zZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDIyOCxcblx0XHQyMjVcblx0XSxcblx0XCJtb2NjYXNpblwiOiBbXG5cdFx0MjU1LFxuXHRcdDIyOCxcblx0XHQxODFcblx0XSxcblx0XCJuYXZham93aGl0ZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDIyMixcblx0XHQxNzNcblx0XSxcblx0XCJuYXZ5XCI6IFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MTI4XG5cdF0sXG5cdFwib2xkbGFjZVwiOiBbXG5cdFx0MjUzLFxuXHRcdDI0NSxcblx0XHQyMzBcblx0XSxcblx0XCJvbGl2ZVwiOiBbXG5cdFx0MTI4LFxuXHRcdDEyOCxcblx0XHQwXG5cdF0sXG5cdFwib2xpdmVkcmFiXCI6IFtcblx0XHQxMDcsXG5cdFx0MTQyLFxuXHRcdDM1XG5cdF0sXG5cdFwib3JhbmdlXCI6IFtcblx0XHQyNTUsXG5cdFx0MTY1LFxuXHRcdDBcblx0XSxcblx0XCJvcmFuZ2VyZWRcIjogW1xuXHRcdDI1NSxcblx0XHQ2OSxcblx0XHQwXG5cdF0sXG5cdFwib3JjaGlkXCI6IFtcblx0XHQyMTgsXG5cdFx0MTEyLFxuXHRcdDIxNFxuXHRdLFxuXHRcInBhbGVnb2xkZW5yb2RcIjogW1xuXHRcdDIzOCxcblx0XHQyMzIsXG5cdFx0MTcwXG5cdF0sXG5cdFwicGFsZWdyZWVuXCI6IFtcblx0XHQxNTIsXG5cdFx0MjUxLFxuXHRcdDE1MlxuXHRdLFxuXHRcInBhbGV0dXJxdW9pc2VcIjogW1xuXHRcdDE3NSxcblx0XHQyMzgsXG5cdFx0MjM4XG5cdF0sXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbXG5cdFx0MjE5LFxuXHRcdDExMixcblx0XHQxNDdcblx0XSxcblx0XCJwYXBheWF3aGlwXCI6IFtcblx0XHQyNTUsXG5cdFx0MjM5LFxuXHRcdDIxM1xuXHRdLFxuXHRcInBlYWNocHVmZlwiOiBbXG5cdFx0MjU1LFxuXHRcdDIxOCxcblx0XHQxODVcblx0XSxcblx0XCJwZXJ1XCI6IFtcblx0XHQyMDUsXG5cdFx0MTMzLFxuXHRcdDYzXG5cdF0sXG5cdFwicGlua1wiOiBbXG5cdFx0MjU1LFxuXHRcdDE5Mixcblx0XHQyMDNcblx0XSxcblx0XCJwbHVtXCI6IFtcblx0XHQyMjEsXG5cdFx0MTYwLFxuXHRcdDIyMVxuXHRdLFxuXHRcInBvd2RlcmJsdWVcIjogW1xuXHRcdDE3Nixcblx0XHQyMjQsXG5cdFx0MjMwXG5cdF0sXG5cdFwicHVycGxlXCI6IFtcblx0XHQxMjgsXG5cdFx0MCxcblx0XHQxMjhcblx0XSxcblx0XCJyZWJlY2NhcHVycGxlXCI6IFtcblx0XHQxMDIsXG5cdFx0NTEsXG5cdFx0MTUzXG5cdF0sXG5cdFwicmVkXCI6IFtcblx0XHQyNTUsXG5cdFx0MCxcblx0XHQwXG5cdF0sXG5cdFwicm9zeWJyb3duXCI6IFtcblx0XHQxODgsXG5cdFx0MTQzLFxuXHRcdDE0M1xuXHRdLFxuXHRcInJveWFsYmx1ZVwiOiBbXG5cdFx0NjUsXG5cdFx0MTA1LFxuXHRcdDIyNVxuXHRdLFxuXHRcInNhZGRsZWJyb3duXCI6IFtcblx0XHQxMzksXG5cdFx0NjksXG5cdFx0MTlcblx0XSxcblx0XCJzYWxtb25cIjogW1xuXHRcdDI1MCxcblx0XHQxMjgsXG5cdFx0MTE0XG5cdF0sXG5cdFwic2FuZHlicm93blwiOiBbXG5cdFx0MjQ0LFxuXHRcdDE2NCxcblx0XHQ5NlxuXHRdLFxuXHRcInNlYWdyZWVuXCI6IFtcblx0XHQ0Nixcblx0XHQxMzksXG5cdFx0ODdcblx0XSxcblx0XCJzZWFzaGVsbFwiOiBbXG5cdFx0MjU1LFxuXHRcdDI0NSxcblx0XHQyMzhcblx0XSxcblx0XCJzaWVubmFcIjogW1xuXHRcdDE2MCxcblx0XHQ4Mixcblx0XHQ0NVxuXHRdLFxuXHRcInNpbHZlclwiOiBbXG5cdFx0MTkyLFxuXHRcdDE5Mixcblx0XHQxOTJcblx0XSxcblx0XCJza3libHVlXCI6IFtcblx0XHQxMzUsXG5cdFx0MjA2LFxuXHRcdDIzNVxuXHRdLFxuXHRcInNsYXRlYmx1ZVwiOiBbXG5cdFx0MTA2LFxuXHRcdDkwLFxuXHRcdDIwNVxuXHRdLFxuXHRcInNsYXRlZ3JheVwiOiBbXG5cdFx0MTEyLFxuXHRcdDEyOCxcblx0XHQxNDRcblx0XSxcblx0XCJzbGF0ZWdyZXlcIjogW1xuXHRcdDExMixcblx0XHQxMjgsXG5cdFx0MTQ0XG5cdF0sXG5cdFwic25vd1wiOiBbXG5cdFx0MjU1LFxuXHRcdDI1MCxcblx0XHQyNTBcblx0XSxcblx0XCJzcHJpbmdncmVlblwiOiBbXG5cdFx0MCxcblx0XHQyNTUsXG5cdFx0MTI3XG5cdF0sXG5cdFwic3RlZWxibHVlXCI6IFtcblx0XHQ3MCxcblx0XHQxMzAsXG5cdFx0MTgwXG5cdF0sXG5cdFwidGFuXCI6IFtcblx0XHQyMTAsXG5cdFx0MTgwLFxuXHRcdDE0MFxuXHRdLFxuXHRcInRlYWxcIjogW1xuXHRcdDAsXG5cdFx0MTI4LFxuXHRcdDEyOFxuXHRdLFxuXHRcInRoaXN0bGVcIjogW1xuXHRcdDIxNixcblx0XHQxOTEsXG5cdFx0MjE2XG5cdF0sXG5cdFwidG9tYXRvXCI6IFtcblx0XHQyNTUsXG5cdFx0OTksXG5cdFx0NzFcblx0XSxcblx0XCJ0dXJxdW9pc2VcIjogW1xuXHRcdDY0LFxuXHRcdDIyNCxcblx0XHQyMDhcblx0XSxcblx0XCJ2aW9sZXRcIjogW1xuXHRcdDIzOCxcblx0XHQxMzAsXG5cdFx0MjM4XG5cdF0sXG5cdFwid2hlYXRcIjogW1xuXHRcdDI0NSxcblx0XHQyMjIsXG5cdFx0MTc5XG5cdF0sXG5cdFwid2hpdGVcIjogW1xuXHRcdDI1NSxcblx0XHQyNTUsXG5cdFx0MjU1XG5cdF0sXG5cdFwid2hpdGVzbW9rZVwiOiBbXG5cdFx0MjQ1LFxuXHRcdDI0NSxcblx0XHQyNDVcblx0XSxcblx0XCJ5ZWxsb3dcIjogW1xuXHRcdDI1NSxcblx0XHQyNTUsXG5cdFx0MFxuXHRdLFxuXHRcInllbGxvd2dyZWVuXCI6IFtcblx0XHQxNTQsXG5cdFx0MjA1LFxuXHRcdDUwXG5cdF1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb2xvci9+L2NvbG9yLXN0cmluZy9+L2NvbG9yLW5hbWUvaW5kZXguanNvblxuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTAuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5pbXBvcnQgKiBhcyBhZ2VudCBmcm9tIFwic3VwZXJhZ2VudFwiO1xyXG5pbXBvcnQgKiBhcyBhc3luYyBmcm9tIFwiYXN5bmNcIjtcclxuXHJcbmltcG9ydCB7dXJsLGZufSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuaW1wb3J0IFNhbXBsZUZpZWxkIGZyb20gXCIuLy4uL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uTWFuYWdlciBmcm9tIFwiLi9BbmltYXRpb25NYW5hZ2VyLmpzXCI7XHJcblxyXG5jbGFzcyBTYW1wbGVNYW5hZ2VyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVye1xyXG4gICAgLyoqQHJldHVybiB7c3RyaW5nfSovXHJcbiAgICBnZXQgQ09ORklHX0xPQURFRCgpe3JldHVybiBcIkNPTkZJR19MT0FERURcIjt9O1xyXG4gICAgLyoqQHJldHVybiB7c3RyaW5nfSovXHJcbiAgICBnZXQgUFJFX1JFQURZX1NBTVBMRSgpe3JldHVybiBcIlBSRV9SRUFEWV9TQU1QTEVcIjt9O1xyXG4gICAgLyoqQHJldHVybiB7c3RyaW5nfSovXHJcbiAgICAvL2dldCBSRUFEWV9TQU1QTEUoKXtyZXR1cm4gXCJSRUFEWV9TQU1QTEVcIjt9O1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2U7XHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYoIShTYW1wbGVNYW5hZ2VyLl9pbnN0YW5jZSBpbnN0YW5jZW9mIFNhbXBsZU1hbmFnZXIpKXtcclxuICAgICAgICAgICAgU2FtcGxlTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgU2FtcGxlTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2FtcGxlTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2FtcGxlc0RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLnNhbXBsZXNEaWN0ID0ge307Ly/kvovlrZDku6PnoIHmlofku7ZcclxuICAgICAgICB0aGlzLmN1cnJTYW1wbGVTY3JpcHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VyclNhbXBsZUlEID0gbnVsbDtcclxuICAgICAgICBhZ2VudC5nZXQoXCJkaXN0L3Bvc3RfZGF0YS5qc29uXCIpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVzRGF0YSA9IEpTT04ucGFyc2UocmVzLnRleHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVzRGljdFtcIkhFQURcIl0gPSB0aGlzLnNhbXBsZXNEYXRhLnBvc3RzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNJZERpY3QgPSB7fTtcclxuICAgICAgICAgICAgdmFyIGlkID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVzRGF0YS5wb3N0cy5mb3JFYWNoKChwb3N0KT0+e1xyXG4gICAgICAgICAgICAgICAgcG9zdC5hY3RpdmVTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgaWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RpY3RbaWQrcG9zdC50aXRsZStwb3N0LmRhdGVdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlc0lkRGljdFtwb3N0LmlkXSA9IHBvc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5maW5zaXNoTG9hZENvbmZpZygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3RoaXMuYWRkTGlzdGVuZXIodGhpcy5SRUFEWV9TQU1QTEUsdGhpcy5yZWFkeVNhbXBsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGZpbnNpc2hMb2FkQ29uZmlnKCl7XHJcbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuQ09ORklHX0xPQURFRCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUb1NhbXBsZShcIkhFQURcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVG9TYW1wbGUoaGFzaG9yaWQsY2Ipe1xyXG4gICAgICAgIHZhciBzYW1wbGUgPSB0aGlzLnNhbXBsZXNEaWN0W2hhc2hvcmlkXTtcclxuICAgICAgICBpZighc2FtcGxlKXtcclxuICAgICAgICAgICAgc2FtcGxlID0gdGhpcy5zYW1wbGVzSWREaWN0W2hhc2hvcmlkXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2FtcGxlKXtcclxuICAgICAgICAgICAgaWYoIXNhbXBsZVtcIm1hcmRkb3duXCJdICYmICFzYW1wbGVbXCJzY3JpcHRcIl0pe1xyXG4gICAgICAgICAgICAgICAgYXN5bmMuc2VyaWVzKFtcclxuICAgICAgICAgICAgICAgICAgICAobmV4dCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdlbnQuZ2V0KHVybC5qb2luKFwiZGlzdC9wb3N0XCIsc2FtcGxlLnBhdGgsXCIvRW50cnkuanNcIikpLmVuZCgoZXJyLHJlcyk9PntuZXh0KGVycixyZXMudGV4dCk7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAobmV4dCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdlbnQuZ2V0KHVybC5qb2luKFwic3JjLXBvc3QvXCIsc2FtcGxlLnBhdGgsXCJOb3RlLm1kXCIpKS5lbmQoKGVycixyZXMpPT57bmV4dChlcnIscmVzLnRleHQpO30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sKGVyciwgcmVzdWx0cyk9PntcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzX3NjcmlwdCA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc19tYXJrZG93biA9IHJlc3VsdHNbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2YWwuYXBwbHkodGhpcywgW1widmFyIHNjcmlwdCA9XCIgKyByZXNfc2NyaXB0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzY3JpcHQgIT09IFwidW5kZWZpbmVkXCIgJiYgc2NyaXB0LnByb3RvdHlwZSAmJiBzY3JpcHQucHJvdG90eXBlIGluc3RhbmNlb2YgU2FtcGxlRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlW1wic2NyaXB0XCJdID0gc2NyaXB0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxvYWQgc2FtcGxlIHNjcmlwdCBlcnJvclwiLCBzYW1wbGUucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVtcIm1hcmtkb3duXCJdPXJlc19tYXJrZG93bjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlUmVhZHlTYW1wbGUoc2FtcGxlLGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGNiPT09XCJmdW5jdGlvblwiKXtjYigpO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZVJlYWR5U2FtcGxlKHNhbXBsZSxjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlUmVhZHlTYW1wbGUoc2FtcGxlLGNiKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJlUmVhZHlTYW1wbGVcIilcclxuICAgICAgICB0aGlzLnNhbXBsZXNEYXRhLnBvc3RzLmZvckVhY2goKHBvc3QpPT57XHJcbiAgICAgICAgICAgIHBvc3QuYWN0aXZlU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2FtcGxlLmFjdGl2ZVN0YXRlID0gdHJ1ZTtcclxuICAgICAgICBpZih0eXBlb2YgY2I9PT1cImZ1bmN0aW9uXCIpe2NiKCk7fVxyXG5cclxuICAgICAgICB0aGlzLmVtaXQodGhpcy5QUkVfUkVBRFlfU0FNUExFLHtzYW1wbGU6c2FtcGxlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZHlTYW1wbGUoaWQsZGF0YSl7XHJcbiAgICAgICAgaWYoaWQ9PT10aGlzLmN1cnJTYW1wbGVJRClyZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyU2FtcGxlSUQ9aWQ7XHJcblxyXG4gICAgICAgIHZhciBzYW1wbGUgPSB0aGlzLnNhbXBsZXNJZERpY3RbaWRdO1xyXG5cclxuICAgICAgICBpZih0aGlzLmN1cnJTYW1wbGVTY3JpcHQpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJTYW1wbGVTY3JpcHQuZGVzdHJ1Y3QoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyU2FtcGxlU2NyaXB0Lm5vdEltcGxlbWVudE9uRGVzdHJ1Y3Qpe1xyXG4gICAgICAgICAgICAgICAgQW5pbWF0aW9uTWFuYWdlci5zdG9wKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihzYW1wbGUpe1xyXG4gICAgICAgICAgICBpZighc2FtcGxlLnJ1bmluZ1NjcmlwdCl7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGUucnVuaW5nU2NyaXB0ID0gbmV3IHNhbXBsZS5zY3JpcHQoc2FtcGxlLmlkLHVybC5qb2luKFwic3JjLXBvc3QvXCIsc2FtcGxlLnBhdGgpLHVybC5qb2luKFwiZGlzdC9wb3N0XCIsc2FtcGxlLnBhdGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzYW1wbGUucnVuaW5nU2NyaXB0LmxhdW5jaChkYXRhLmNhbnZhcyxkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyU2FtcGxlU2NyaXB0ID0gc2FtcGxlLnJ1bmluZ1NjcmlwdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZU1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9TYW1wbGVNYW5hZ2VyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5FdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcIik7XHJcbi8vZXhwb3J0cy5BamF4ICA9IHJlcXVpcmUoXCIuL2Rpc3QvYWpheC9BamF4UHJveHkuanNcIilcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2VudHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF91dGlsc0pzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbi8vdmFyIGV2ZW50c01hcCA9IHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCI/U3ltYm9sKCk6XCJfX2V2ZW50c01hcF9fXCI7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0pzKTtcblxudmFyIGV2ZW50c01hcCA9IFwiX19ldmVudHNNYXBfX1wiO1xuXG52YXIgRXZlbnREaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudERpc3BhdGNoZXIpO1xuXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICog5rS+5Y+R5LiA5Liq5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cblxuICAgIF9jcmVhdGVDbGFzcyhFdmVudERpc3BhdGNoZXIsIFt7XG4gICAgICAgIGtleTogXCJlbWl0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRtYXAgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRtYXApKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHV0aWxzLm5vdGlmeUFycmF5KGV2ZW50bWFwLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/lOWbnuaJgOacieWbnuiwg+aWueazlVxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImxpc3RlbmVyc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubWFwKGZ1bmN0aW9uIChiaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluLmNhbGxiYWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJoYXNMaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzW2V2ZW50c01hcF1bZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbZXZlbnRzTWFwXVtldmVudF0ubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOS4gOWPquS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB0aGlzT2JqZWN0XHJcbiAgICAgICAgICogQHBhcmFtIHByaW9yaXR5XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiYWRkTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCwgbnVsbCwgcHJpb3JpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56e76Zmk5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW1vdmVMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgICAgICAgICB1dGlscy51bnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnp7vpmaTmiYDmnInkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW1vdmVBbGxMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9kyznroDmmJPop6blj5HlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2TLOWUr+S4gOinpuWPkeWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uY2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIG51bGwsIG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlcjtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnREaXNwYXRjaGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVYyWlc1MGN5OUZkbVZ1ZEVScGMzQmhkR05vWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUjBFc1dVRkJXU3hEUVVGRE96czdPenM3T3pzN096dDFRa0ZEVlN4WlFVRlpPenM3TzBsQlFYWkNMRXRCUVVzN08wRkJSMnBDTEVsQlFVa3NVMEZCVXl4SFFVRkhMR1ZCUVdVc1EwRkJRenM3U1VGRE1VSXNaVUZCWlR0QlFVTk9MR0ZCUkZRc1pVRkJaU3hIUVVOSU96aENRVVJhTEdWQlFXVTdPMEZCUldJc1dVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTjRRanM3T3pzN096czdhVUpCU0VNc1pVRkJaVHM3WlVGVllpeGpRVUZETEV0QlFVc3NSVUZCVnp0QlFVTnFRaXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEzUkRMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN2EwUkJSbXhDTEVsQlFVazdRVUZCU2l4M1FrRkJTVHM3TzBGQlIxZ3NjVUpCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkJPMkZCUTNCRE8xTkJRMG83T3pzN096czdPenRsUVU5UkxHMUNRVUZETEV0QlFVc3NSVUZCUlR0QlFVTmlMR2RDUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGNFTXNaMEpCUVVjc1EwRkJReXhOUVVGTkxFVkJRVU03UVVGRFVDeHpRa0ZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOYUxHOUNRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzJGQlEyNURPMEZCUTBRc2JVSkJRVThzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlRMRWRCUVVjc1JVRkJRenRCUVVNelFpeDFRa0ZCVHl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRE8yRkJRM1pDTEVOQlFVTXNRMEZCUXp0VFFVTk9PenM3WlVGRlZ5eHpRa0ZCUXl4TFFVRkxMRVZCUVVNN1FVRkRaaXhuUWtGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlF6dEJRVUZETEhWQ1FVRlBMRXRCUVVzc1EwRkJRenRoUVVGRE8wRkJRekZETEcxQ1FVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhEUVVGRE8xTkJRekZET3pzN096czdPenM3T3p0bFFWTlZMSEZDUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNWVUZCVlN4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVNdlF5eHBRa0ZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMU5CUTNCR096czdPenM3T3pzN08yVkJVV0VzZDBKQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVU3UVVGRGVFTXNhVUpCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVMEZEZEVVN096czdPenM3TzJWQlRXZENMREpDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU55UWl4blFrRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVNdlFqczdPenM3T3pzN08yVkJUME1zV1VGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkZPMEZCUTJoQ0xHbENRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1UwRkRlRVE3T3pzN096czdPenRsUVU5SExHTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlR0QlFVTnNRaXhwUWtGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTm9SanM3TzFkQmJrWkRMR1ZCUVdVN096dHhRa0Z6Ums0c1pVRkJaU0lzSW1acGJHVWlPaUpsZG1WdWRITXZSWFpsYm5SRWFYTndZWFJqYUdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhISmNiaUFxSUVOeVpXRjBaV1FnWW5rZ2RHOXRiWGxhV2swZ2IyNGdNakF4TlM4NEx6UXVYSEpjYmlBcUwxeHlYRzVjSW5WelpTQnpkSEpwWTNSY0lqdGNjbHh1YVcxd2IzSjBJQ29nWVhNZ2RYUnBiSE1nWm5KdmJTQmNJaTR2ZFhScGJITXVhbk5jSWp0Y2NseHVYSEpjYmk4dmRtRnlJR1YyWlc1MGMwMWhjQ0E5SUhSNWNHVnZaaUJUZVcxaWIydzlQVDFjSW1aMWJtTjBhVzl1WENJL1UzbHRZbTlzS0NrNlhDSmZYMlYyWlc1MGMwMWhjRjlmWENJN1hISmNiblpoY2lCbGRtVnVkSE5OWVhBZ1BTQmNJbDlmWlhabGJuUnpUV0Z3WDE5Y0lqdGNjbHh1WTJ4aGMzTWdSWFpsYm5SRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE5iWlhabGJuUnpUV0Z3WFNBOUlIdDlPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2c1clMrNVkrUjVMaUE1TGlxNUxxTDVMdTJYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaWFpsYm5SY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCaGNtZHpYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJR1Z0YVhRb1pYWmxiblFzSUM0dUxtRnlaM01wSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWlhabGJuUnRZWEFnUFNCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaEJjbkpoZVM1cGMwRnljbUY1S0dWMlpXNTBiV0Z3S1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTV1YjNScFpubEJjbkpoZVNobGRtVnVkRzFoY0N3Z1lYSm5jeWxjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEb3Y1VGxtNTdtaVlEbW5JbmxtNTdvc0lQbWxybm1zNVZjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdleXA5WEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUd4cGMzUmxibVZ5Y3lobGRtVnVkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ5WlhOMWJIUWdQU0IwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZE8xeHlYRzRnSUNBZ0lDQWdJR2xtS0NGeVpYTjFiSFFwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0JiWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdGxkbVZ1ZEhOTllYQmRXMlYyWlc1MFhTQTlJSEpsYzNWc2REdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkQzV0WVhBb1puVnVZM1JwYjI0b1ltbHVLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHSnBiaTVqWVd4c1ltRmphenRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JvWVhOTWFYTjBaVzVsY25Nb1pYWmxiblFwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZEtYdHlaWFIxY200Z1ptRnNjMlU3ZlZ4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRMbXhsYm1kMGFENHdPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2c1cmU3NVlxZzVMaUE1WStxNUw2bTVaQ3M1Wm1vWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmpZV3hzWW1GamExeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElIUm9hWE5QWW1wbFkzUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQndjbWx2Y21sMGVWeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQmhaR1JNYVhOMFpXNWxjaWhsZG1WdWRDd2dZMkZzYkdKaFkyc3NJSFJvYVhOUFltcGxZM1FzSUhCeWFXOXlhWFI1S1NCN1hISmNiaUFnSUNBZ0lDQWdkWFJwYkhNdWNtVm5hWE4wVG05MGFXWjVLSFJvYVhOYlpYWmxiblJ6VFdGd1hTd2daWFpsYm5Rc0lHTmhiR3hpWVdOckxDQjBhR2x6VDJKcVpXTjBMQ0J1ZFd4c0xDQndjbWx2Y21sMGVTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG5wN3ZwbWFUa3VJRGxqNnJrdnFibGtLemxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElHTmhiR3hpWVdOclhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2RHaHBjMDlpYW1WamRGeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnlaVzF2ZG1WTWFYTjBaVzVsY2lobGRtVnVkQ3dnWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRcElIdGNjbHh1SUNBZ0lDQWdJQ0IxZEdsc2N5NTFibkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZENrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEbnA3dnBtYVRtaVlEbW5Jbmt2cWJsa0t6bG1haGNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCeVpXMXZkbVZCYkd4TWFYTjBaVzVsY2lobGRtVnVkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE5iWlhabGJuUnpUV0Z3WFZ0bGRtVnVkRjBnUFNCYlhUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlPVzlreXpucm9EbW1KUG9wNmJsajVIbG1haGNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUdOaGJHeGlZV05yWEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUc5dUtHVjJaVzUwTENCallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFYwYVd4ekxuSmxaMmx6ZEU1dmRHbG1lU2gwYUdselcyVjJaVzUwYzAxaGNGMHNJR1YyWlc1MExDQmpZV3hzWW1GamF5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRGx2Wk1zNVpTdjVMaUE2S2VtNVkrUjVabW9YSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaWFpsYm5SY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCallXeHNZbUZqYTF4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCdmJtTmxLR1YyWlc1MExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhWMGFXeHpMbkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheXdnYm5Wc2JDd2diblZzYkN3Z2JuVnNiQ3dnZEhKMVpTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRVYyWlc1MFJHbHpjR0YwWTJobGNqc2lYU3dpYzI5MWNtTmxVbTl2ZENJNklpOXpiM1Z5WTJVdkluMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTkuXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZWdpc3ROb3RpZnkgPSByZWdpc3ROb3RpZnk7XG5leHBvcnRzLnVucmVnaXN0Tm90aWZ5ID0gdW5yZWdpc3ROb3RpZnk7XG5leHBvcnRzLm5vdGlmeSA9IG5vdGlmeTtcbmV4cG9ydHMubm90aWZ5QXJyYXkgPSBub3RpZnlBcnJheTtcblxuZnVuY3Rpb24gcmVnaXN0Tm90aWZ5KG5vdGlmeW1hcCwgbmFtZSwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHBhcmFtLCBwcmlvcml0eSwgb25jZSkge1xuICAgIC8vLHJlc2VydmU/OmFueVxuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKSBub3RpZnltYXBbbmFtZV0gPSBbXTtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuXG4gICAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGluc2VydEluZGV4ID0gLTE7XG4gICAgdmFyIGJpbjtcblxuICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSBwcmlvcml0eSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBiaW4gPSBhcnJbaV07XG4gICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvL+mYsuatoumHjeWkjeaPkuWFpVxuICAgICAgICB9XG4gICAgICAgIGlmIChiaW4gJiYgaW5zZXJ0SW5kZXggPT0gLTEgJiYgYmluLnByaW9yaXR5IDwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGluc2VydEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbiA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCB0aGlzT2JqZWN0OiB0aGlzT2JqZWN0LCBwYXJhbTogcGFyYW0gPyBwYXJhbSA6IFtdLCBwcmlvcml0eTogcHJpb3JpdHksIG9uY2U6IG9uY2UgfTtcbiAgICBpZiAoaW5zZXJ0SW5kZXggIT0gLTEpIHtcbiAgICAgICAgYXJyLnNwbGljZShpbnNlcnRJbmRleCwgMCwgYmluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnIucHVzaChiaW4pO1xuICAgIH1cbiAgICBub3RpZnltYXBbbmFtZV0gPSBhcnI7XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0Tm90aWZ5KG5vdGlmeW1hcCwgbmFtZSwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgcmV0dXJuO1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnltYXBbbmFtZV0gPSBhcnIuZmlsdGVyKGZ1bmN0aW9uIChiaW4pIHtcbiAgICAgICAgICAgIHJldHVybiAhKGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeShub3RpZnltYXAsIG5hbWUsIHBhcmFtKSB7XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIG5vdGlmeUFycmF5KGFyciwgcGFyYW0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnlBcnJheShhcnIsIHBhcmFtKSB7XG4gICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAraSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oK2kpKSB7XG4gICAgICAgICAgICB2YXIgYmluID0gYXJyW2ldO1xuICAgICAgICAgICAgaWYgKGJpbiAmJiBiaW4uY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtKSBwYXJhbSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ucGFyYW0pIHBhcmFtID0gYmluLnBhcmFtLmNvbmNhdChwYXJhbSk7XG4gICAgICAgICAgICAgICAgYmluLmNhbGxiYWNrLmFwcGx5KGJpbi50aGlzT2JqZWN0LCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgaWYgKGJpbi5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltVjJaVzUwY3k5MWRHbHNjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096dEJRVWxQTEZOQlFWTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRExFbEJRVWtzUlVGQlJUczdRVUZEZEVZc1VVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlF6RkRMRkZCUVVrc1IwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1FVRkZNVUlzVVVGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVONFFpeFJRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOeVFpeFJRVUZKTEVkQlFVY3NRMEZCUXpzN1FVRkZVaXhSUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONFF5eFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpkQ0xGZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRZaXhaUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeExRVUZMTEZWQlFWVXNSVUZCUlR0QlFVTnVSU3h0UWtGQlR5eExRVUZMTEVOQlFVTTdVMEZEYUVJN1FVRkRSQ3haUVVGSkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVWQlFVVTdRVUZEY2tRc2RVSkJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYmtJN1MwRkRTanM3UVVGRlJDeFBRVUZITEVkQlFVY3NSVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1IwRkJSeXhMUVVGTExFZEJRVWNzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlF5eERRVUZETzBGQlF6ZEhMRkZCUVVrc1YwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEyNUNMRmRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOdVF5eE5RVU5KTzBGQlEwUXNWMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dExRVU5xUWp0QlFVTkVMR0ZCUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdRMEZEZWtJN08wRkJSVTBzVTBGQlV5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeEZRVUZGTzBGQlEyeEZMRkZCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVTXNUMEZCVHp0QlFVTTFRaXhSUVVGSkxFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRNVUlzVVVGQlNTeEhRVUZITEVWQlFVVTdRVUZEVEN4cFFrRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJVeXhIUVVGSExFVkJRVU03UVVGRGRFTXNiVUpCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUTBGQlFTeEJRVUZETEVOQlFVRTdVMEZEZGtVc1EwRkJReXhEUVVGRE8wdEJRMDQ3UTBGRFNqczdRVUZGVFN4VFFVRlRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlR0QlFVTXpReXhSUVVGSkxFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRNVUlzVVVGQlNTeEhRVUZITEVWQlFVVTdRVUZEVEN4dFFrRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTjRRaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tTEUxQlFVMDdRVUZEU0N4bFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FqdERRVU5LT3p0QlFVVk5MRk5CUVZNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVTdRVUZEY0VNc1UwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVTdRVUZEWml4WlFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVU03UVVGRGNFTXNaMEpCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhuUWtGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVOeVFpeHZRa0ZCU1N4RFFVRkRMRXRCUVVzc1JVRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzUkNMRzlDUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXpsRExHMUNRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXpGRExHOUNRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVNN1FVRkRWQ3gxUWtGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEzQkNPMkZCUTBvN1UwRkRTanRMUVVOS08wTkJRMG9pTENKbWFXeGxJam9pWlhabGJuUnpMM1YwYVd4ekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhISmNiaUFxSUVOeVpXRjBaV1FnWW5rZ2RHOXRiWGxhV2swZ2IyNGdNakF4TlM4NEx6RTVMbHh5WEc0Z0tpOWNjbHh1WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCeVpXZHBjM1JPYjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ3dnY0dGeVlXMHNJSEJ5YVc5eWFYUjVMRzl1WTJVcElIc3ZMeXh5WlhObGNuWmxQenBoYm5sY2NseHVJQ0FnSUdsbUlDZ2hibTkwYVdaNWJXRndXMjVoYldWZEtXNXZkR2xtZVcxaGNGdHVZVzFsWFNBOUlGdGRPMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1lYSnlMbXhsYm1kMGFEdGNjbHh1SUNBZ0lIWmhjaUJwYm5ObGNuUkpibVJsZUNBOUlDMHhPMXh5WEc0Z0lDQWdkbUZ5SUdKcGJqdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2NISnBiM0pwZEhrZ1BUMDlJSFZ1WkdWbWFXNWxaQ2x3Y21sdmNtbDBlU0E5SURBN1hISmNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ1ltbHVJRDBnWVhKeVcybGRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGlhVzRnSmlZZ1ltbHVMbU5oYkd4aVlXTnJJRDA5UFNCallXeHNZbUZqYXlBbUppQmlhVzR1ZEdocGMwOWlhbVZqZENBOVBUMGdkR2hwYzA5aWFtVmpkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN0x5L3BtTExtcmFMcGg0M2xwSTNtajVMbGhhVmNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLR0pwYmlBbUppQnBibk5sY25SSmJtUmxlQ0E5UFNBdE1TQW1KaUJpYVc0dWNISnBiM0pwZEhrZ1BDQndjbWx2Y21sMGVTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibk5sY25SSmJtUmxlQ0E5SUdrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdKcGJpQTlJSHRqWVd4c1ltRmphem9nWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRNklIUm9hWE5QWW1wbFkzUXNJSEJoY21GdE9pQndZWEpoYlNBL0lIQmhjbUZ0SURvZ1cxMHNJSEJ5YVc5eWFYUjVPaUJ3Y21sdmNtbDBlU0FzYjI1alpUcHZibU5sZlR0Y2NseHVJQ0FnSUdsbUlDaHBibk5sY25SSmJtUmxlQ0FoUFNBdE1Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUdGeWNpNXpjR3hwWTJVb2FXNXpaWEowU1c1a1pYZ3NJREFzSUdKcGJpazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQmhjbkl1Y0hWemFDaGlhVzRwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYm05MGFXWjViV0Z3VzI1aGJXVmRJRDBnWVhKeU8xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdkVzV5WldkcGMzUk9iM1JwWm5rb2JtOTBhV1o1YldGd0xDQnVZVzFsTENCallXeHNZbUZqYXl3Z2RHaHBjMDlpYW1WamRDa2dlMXh5WEc0Z0lDQWdhV1lnS0NGdWIzUnBabmx0WVhCYmJtRnRaVjBwY21WMGRYSnVPMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1SUNBZ0lHbG1JQ2hoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0J1YjNScFpubHRZWEJiYm1GdFpWMGdQU0JoY25JdVptbHNkR1Z5S0daMWJtTjBhVzl1S0dKcGJpbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBaEtHSnBiaTVqWVd4c1ltRmpheUE5UFQwZ1kyRnNiR0poWTJzZ0ppWWdZbWx1TG5Sb2FYTlBZbXBsWTNRZ1BUMDlJSFJvYVhOUFltcGxZM1FwWEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ1YjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQndZWEpoYlNrZ2UxeHlYRzRnSUNBZ2RtRnlJR0Z5Y2lBOUlHNXZkR2xtZVcxaGNGdHVZVzFsWFR0Y2NseHVJQ0FnSUdsbUlDaGhjbklwSUh0Y2NseHVJQ0FnSUNBZ0lDQnViM1JwWm5sQmNuSmhlU2hoY25Jc0lIQmhjbUZ0S1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzRnSUNBZ2ZWeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdibTkwYVdaNVFYSnlZWGtvWVhKeUxDQndZWEpoYlNrZ2UxeHlYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQnBiaUJoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnSzJrZ1BUMDlJRndpYm5WdFltVnlYQ0lnSmlZZ0lXbHpUbUZPS0N0cEtTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJpYVc0Z1BTQmhjbkpiYVYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGlhVzRnSmlZZ1ltbHVMbU5oYkd4aVlXTnJLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWEJoY21GdEtYQmhjbUZ0SUQwZ1cxMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1ltbHVMbkJoY21GdEtYQmhjbUZ0SUQwZ1ltbHVMbkJoY21GdExtTnZibU5oZENod1lYSmhiU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWFXNHVZMkZzYkdKaFkyc3VZWEJ3Ykhrb1ltbHVMblJvYVhOUFltcGxZM1FzSUhCaGNtRnRLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGlhVzR1YjI1alpTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYSnlMbk53YkdsalpTaHBMQ0F4S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZTSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUwzTnZkWEpqWlM4aWZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2Rpc3QvZXZlbnRzL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCdyZWR1Y2UnKTtcblxuLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdCA9ICd1bmRlZmluZWQnID09IHR5cGVvZiB3aW5kb3dcbiAgPyAodGhpcyB8fCBzZWxmKVxuICA6IHdpbmRvdztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIFRPRE86IGZ1dHVyZSBwcm9vZiwgbW92ZSB0byBjb21wb2VudCBsYW5kXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSG9zdChvYmopIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxuICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgWEhSLlxuICovXG5cbnJlcXVlc3QuZ2V0WEhSID0gZnVuY3Rpb24gKCkge1xuICBpZiAocm9vdC5YTUxIdHRwUmVxdWVzdFxuICAgICAgJiYgKCFyb290LmxvY2F0aW9uIHx8ICdmaWxlOicgIT0gcm9vdC5sb2NhdGlvbi5wcm90b2NvbFxuICAgICAgICAgIHx8ICFyb290LkFjdGl2ZVhPYmplY3QpKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHBhaXI7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBhcnRzID0gcGFpci5zcGxpdCgnPScpO1xuICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcmFtcyhzdHIpe1xuICByZXR1cm4gcmVkdWNlKHN0ci5zcGxpdCgvICo7ICovKSwgZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKVxuICAgICAgLCBrZXkgPSBwYXJ0cy5zaGlmdCgpXG4gICAgICAsIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcbiAgdGhpcy50ZXh0ID0gKCh0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpKSB8fCB0eXBlb2YgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJylcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHRcbiAgICAgOiBudWxsO1xuICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnJlcS54aHIuc3RhdHVzVGV4dDtcbiAgdGhpcy5zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgID8gdGhpcy5wYXJzZUJvZHkodGhpcy50ZXh0ID8gdGhpcy50ZXh0IDogdGhpcy54aHIucmVzcG9uc2UpXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gIC8vIGNvbnRlbnQtdHlwZVxuICB2YXIgY3QgPSB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gIHRoaXMudHlwZSA9IHR5cGUoY3QpO1xuXG4gIC8vIHBhcmFtc1xuICB2YXIgb2JqID0gcGFyYW1zKGN0KTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgdGhpc1trZXldID0gb2JqW2tleV07XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqIHx8IGlzSG9zdChkYXRhKSkgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0KSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS50b3RhbCA+IDApIHtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICB9O1xuICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHhoci51cGxvYWQgJiYgdGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYudGltZWRvdXQgPSB0cnVlO1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmF1eCBwcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgcmV0dXJuIHRoaXMuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgZXJyID8gcmVqZWN0KGVycikgOiBmdWxmaWxsKHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdXBlcmFnZW50L2xpYi9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBSZWR1Y2UgYGFycmAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxcbiAqXG4gKiBUT0RPOiBjb21iYXRpYmxlIGVycm9yIGhhbmRsaW5nP1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBmbiwgaW5pdGlhbCl7ICBcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgY3VyciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gM1xuICAgID8gaW5pdGlhbFxuICAgIDogYXJyW2lkeCsrXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgY3VyciA9IGZuLmNhbGwobnVsbCwgY3VyciwgYXJyW2lkeF0sICsraWR4LCBhcnIpO1xuICB9XG4gIFxuICByZXR1cm4gY3Vycjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9+L3JlZHVjZS1jb21wb25lbnQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBhc3luY1xuICogaHR0cHM6Ly9naXRodWIuY29tL2Nhb2xhbi9hc3luY1xuICpcbiAqIENvcHlyaWdodCAyMDEwLTIwMTQgQ2FvbGFuIE1jTWFob25cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGFzeW5jID0ge307XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9Cb29sKHYpIHtcbiAgICAgICAgcmV0dXJuICEhdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm90SWQodikge1xuICAgICAgICByZXR1cm4gIXY7XG4gICAgfVxuXG4gICAgLy8gZ2xvYmFsIG9uIHRoZSBzZXJ2ZXIsIHdpbmRvdyBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBwcmV2aW91c19hc3luYztcblxuICAgIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIChgc2VsZmApIGluIHRoZSBicm93c2VyLCBgZ2xvYmFsYFxuICAgIC8vIG9uIHRoZSBzZXJ2ZXIsIG9yIGB0aGlzYCBpbiBzb21lIHZpcnR1YWwgbWFjaGluZXMuIFdlIHVzZSBgc2VsZmBcbiAgICAvLyBpbnN0ZWFkIG9mIGB3aW5kb3dgIGZvciBgV2ViV29ya2VyYCBzdXBwb3J0LlxuICAgIHZhciByb290ID0gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsIHx8XG4gICAgICAgICAgICB0aGlzO1xuXG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xuICAgICAgICBwcmV2aW91c19hc3luYyA9IHJvb3QuYXN5bmM7XG4gICAgfVxuXG4gICAgYXN5bmMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IHByZXZpb3VzX2FzeW5jO1xuICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9ubHlfb25jZShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZm4gPT09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIHdhcyBhbHJlYWR5IGNhbGxlZC5cIik7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZm4gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9vbmNlKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChmbiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLy8vIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJsaXR5IGZ1bmN0aW9ucyAvLy8vXG5cbiAgICB2YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICAgIHZhciBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuXG4gICAgLy8gUG9ydGVkIGZyb20gdW5kZXJzY29yZS5qcyBpc09iamVjdFxuICAgIHZhciBfaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2lzQXJyYXlMaWtlKGFycikge1xuICAgICAgICByZXR1cm4gX2lzQXJyYXkoYXJyKSB8fCAoXG4gICAgICAgICAgICAvLyBoYXMgYSBwb3NpdGl2ZSBpbnRlZ2VyIGxlbmd0aCBwcm9wZXJ0eVxuICAgICAgICAgICAgdHlwZW9mIGFyci5sZW5ndGggPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgICAgIGFyci5sZW5ndGggPj0gMCAmJlxuICAgICAgICAgICAgYXJyLmxlbmd0aCAlIDEgPT09IDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZWFjaChjb2xsLCBpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gX2lzQXJyYXlMaWtlKGNvbGwpID9cbiAgICAgICAgICAgIF9hcnJheUVhY2goY29sbCwgaXRlcmF0b3IpIDpcbiAgICAgICAgICAgIF9mb3JFYWNoT2YoY29sbCwgaXRlcmF0b3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheUVhY2goYXJyLCBpdGVyYXRvcikge1xuICAgICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGFycltpbmRleF0sIGluZGV4LCBhcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21hcChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgICAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRvcihhcnJbaW5kZXhdLCBpbmRleCwgYXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yYW5nZShjb3VudCkge1xuICAgICAgICByZXR1cm4gX21hcChBcnJheShjb3VudCksIGZ1bmN0aW9uICh2LCBpKSB7IHJldHVybiBpOyB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVkdWNlKGFyciwgaXRlcmF0b3IsIG1lbW8pIHtcbiAgICAgICAgX2FycmF5RWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICBtZW1vID0gaXRlcmF0b3IobWVtbywgeCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZm9yRWFjaE9mKG9iamVjdCwgaXRlcmF0b3IpIHtcbiAgICAgICAgX2FycmF5RWFjaChfa2V5cyhvYmplY3QpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpdGVyYXRvcihvYmplY3Rba2V5XSwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luZGV4T2YoYXJyLCBpdGVtKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIF9rZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2tleUl0ZXJhdG9yKGNvbGwpIHtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgdmFyIGxlbjtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGlmIChfaXNBcnJheUxpa2UoY29sbCkpIHtcbiAgICAgICAgICAgIGxlbiA9IGNvbGwubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBpIDwgbGVuID8gaSA6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5cyA9IF9rZXlzKGNvbGwpO1xuICAgICAgICAgICAgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPCBsZW4gPyBrZXlzW2ldIDogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaW1pbGFyIHRvIEVTNidzIHJlc3QgcGFyYW0gKGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzAzL2VzNi1hbmQtcmVzdC1wYXJhbWV0ZXIuaHRtbClcbiAgICAvLyBUaGlzIGFjY3VtdWxhdGVzIHRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gYW4gYXJyYXksIGFmdGVyIGEgZ2l2ZW4gaW5kZXguXG4gICAgLy8gRnJvbSB1bmRlcnNjb3JlLmpzIChodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvcHVsbC8yMTQwKS5cbiAgICBmdW5jdGlvbiBfcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggPT0gbnVsbCA/IGZ1bmMubGVuZ3RoIC0gMSA6ICtzdGFydEluZGV4O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aCAtIHN0YXJ0SW5kZXgsIDApO1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBBcnJheShsZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHJlc3RbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4ICsgc3RhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDdXJyZW50bHkgdW51c2VkIGJ1dCBoYW5kbGUgY2FzZXMgb3V0c2lkZSBvZiB0aGUgc3dpdGNoIHN0YXRlbWVudDpcbiAgICAgICAgICAgIC8vIHZhciBhcmdzID0gQXJyYXkoc3RhcnRJbmRleCArIDEpO1xuICAgICAgICAgICAgLy8gZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc3RhcnRJbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gICAgIGFyZ3NbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGFyZ3Nbc3RhcnRJbmRleF0gPSByZXN0O1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3dpdGhvdXRJbmRleChpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcih2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vLy8gZXhwb3J0ZWQgYXN5bmMgbW9kdWxlIGZ1bmN0aW9ucyAvLy8vXG5cbiAgICAvLy8vIG5leHRUaWNrIGltcGxlbWVudGF0aW9uIHdpdGggYnJvd3Nlci1jb21wYXRpYmxlIGZhbGxiYWNrIC8vLy9cblxuICAgIC8vIGNhcHR1cmUgdGhlIGdsb2JhbCByZWZlcmVuY2UgdG8gZ3VhcmQgYWdhaW5zdCBmYWtlVGltZXIgbW9ja3NcbiAgICB2YXIgX3NldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiYgc2V0SW1tZWRpYXRlO1xuXG4gICAgdmFyIF9kZWxheSA9IF9zZXRJbW1lZGlhdGUgPyBmdW5jdGlvbihmbikge1xuICAgICAgICAvLyBub3QgYSBkaXJlY3QgYWxpYXMgZm9yIElFMTAgY29tcGF0aWJpbGl0eVxuICAgICAgICBfc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9IDogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb2Nlc3MubmV4dFRpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gX2RlbGF5O1xuICAgIH1cbiAgICBhc3luYy5zZXRJbW1lZGlhdGUgPSBfc2V0SW1tZWRpYXRlID8gX2RlbGF5IDogYXN5bmMubmV4dFRpY2s7XG5cblxuICAgIGFzeW5jLmZvckVhY2ggPVxuICAgIGFzeW5jLmVhY2ggPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2hPZihhcnIsIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmZvckVhY2hTZXJpZXMgPVxuICAgIGFzeW5jLmVhY2hTZXJpZXMgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2hPZlNlcmllcyhhcnIsIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpLCBjYWxsYmFjayk7XG4gICAgfTtcblxuXG4gICAgYXN5bmMuZm9yRWFjaExpbWl0ID1cbiAgICBhc3luYy5lYWNoTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfZWFjaE9mTGltaXQobGltaXQpKGFyciwgX3dpdGhvdXRJbmRleChpdGVyYXRvciksIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZm9yRWFjaE9mID1cbiAgICBhc3luYy5lYWNoT2YgPSBmdW5jdGlvbiAob2JqZWN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0IHx8IFtdO1xuICAgICAgICB2YXIgc2l6ZSA9IF9pc0FycmF5TGlrZShvYmplY3QpID8gb2JqZWN0Lmxlbmd0aCA6IF9rZXlzKG9iamVjdCkubGVuZ3RoO1xuICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgaWYgKCFzaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgX2VhY2gob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaXRlcmF0b3Iob2JqZWN0W2tleV0sIGtleSwgb25seV9vbmNlKGRvbmUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZm9yRWFjaE9mU2VyaWVzID1cbiAgICBhc3luYy5lYWNoT2ZTZXJpZXMgPSBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgb2JqID0gb2JqIHx8IFtdO1xuICAgICAgICB2YXIgbmV4dEtleSA9IF9rZXlJdGVyYXRvcihvYmopO1xuICAgICAgICB2YXIga2V5ID0gbmV4dEtleSgpO1xuICAgICAgICBmdW5jdGlvbiBpdGVyYXRlKCkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZXJhdG9yKG9ialtrZXldLCBrZXksIG9ubHlfb25jZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbmV4dEtleSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGl0ZXJhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXRlcmF0ZSgpO1xuICAgIH07XG5cblxuXG4gICAgYXN5bmMuZm9yRWFjaE9mTGltaXQgPVxuICAgIGFzeW5jLmVhY2hPZkxpbWl0ID0gZnVuY3Rpb24gKG9iaiwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBfZWFjaE9mTGltaXQobGltaXQpKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2VhY2hPZkxpbWl0KGxpbWl0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgICAgIG9iaiA9IG9iaiB8fCBbXTtcbiAgICAgICAgICAgIHZhciBuZXh0S2V5ID0gX2tleUl0ZXJhdG9yKG9iaik7XG4gICAgICAgICAgICBpZiAobGltaXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcnVubmluZyA9IDA7XG4gICAgICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAoZnVuY3Rpb24gcmVwbGVuaXNoICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSAmJiBydW5uaW5nIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdoaWxlIChydW5uaW5nIDwgbGltaXQgJiYgIWVycm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IG5leHRLZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihvYmpba2V5XSwga2V5LCBvbmx5X29uY2UoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsZW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkb1BhcmFsbGVsKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmbihhc3luYy5lYWNoT2YsIG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9QYXJhbGxlbExpbWl0KGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oX2VhY2hPZkxpbWl0KGxpbWl0KSwgb2JqLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkb1Nlcmllcyhmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oYXN5bmMuZWFjaE9mU2VyaWVzLCBvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FzeW5jTWFwKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHZhbHVlLCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMubWFwID0gZG9QYXJhbGxlbChfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcFNlcmllcyA9IGRvU2VyaWVzKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwTGltaXQgPSBkb1BhcmFsbGVsTGltaXQoX2FzeW5jTWFwKTtcblxuICAgIC8vIHJlZHVjZSBvbmx5IGhhcyBhIHNlcmllcyB2ZXJzaW9uLCBhcyBkb2luZyByZWR1Y2UgaW4gcGFyYWxsZWwgd29uJ3RcbiAgICAvLyB3b3JrIGluIG1hbnkgc2l0dWF0aW9ucy5cbiAgICBhc3luYy5pbmplY3QgPVxuICAgIGFzeW5jLmZvbGRsID1cbiAgICBhc3luYy5yZWR1Y2UgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaE9mU2VyaWVzKGFyciwgZnVuY3Rpb24gKHgsIGksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihtZW1vLCB4LCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgbWVtbyA9IHY7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIgfHwgbnVsbCwgbWVtbyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy5mb2xkciA9XG4gICAgYXN5bmMucmVkdWNlUmlnaHQgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJldmVyc2VkID0gX21hcChhcnIsIGlkZW50aXR5KS5yZXZlcnNlKCk7XG4gICAgICAgIGFzeW5jLnJlZHVjZShyZXZlcnNlZCwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2ZpbHRlcihlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtpbmRleDogaW5kZXgsIHZhbHVlOiB4fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMuc2VsZWN0ID1cbiAgICBhc3luYy5maWx0ZXIgPSBkb1BhcmFsbGVsKF9maWx0ZXIpO1xuXG4gICAgYXN5bmMuc2VsZWN0TGltaXQgPVxuICAgIGFzeW5jLmZpbHRlckxpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9maWx0ZXIpO1xuXG4gICAgYXN5bmMuc2VsZWN0U2VyaWVzID1cbiAgICBhc3luYy5maWx0ZXJTZXJpZXMgPSBkb1NlcmllcyhfZmlsdGVyKTtcblxuICAgIGZ1bmN0aW9uIF9yZWplY3QoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBfZmlsdGVyKGVhY2hmbiwgYXJyLCBmdW5jdGlvbih2YWx1ZSwgY2IpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHZhbHVlLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgY2IoIXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgYXN5bmMucmVqZWN0ID0gZG9QYXJhbGxlbChfcmVqZWN0KTtcbiAgICBhc3luYy5yZWplY3RMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfcmVqZWN0KTtcbiAgICBhc3luYy5yZWplY3RTZXJpZXMgPSBkb1NlcmllcyhfcmVqZWN0KTtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVUZXN0ZXIoZWFjaGZuLCBjaGVjaywgZ2V0UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2IpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNiKSBjYihnZXRSZXN1bHQoZmFsc2UsIHZvaWQgMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZWUoeCwgXywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNiKSByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2IgJiYgY2hlY2sodikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGdldFJlc3VsdCh0cnVlLCB4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYiA9IGl0ZXJhdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIGVhY2hmbihhcnIsIGxpbWl0LCBpdGVyYXRlZSwgZG9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNiID0gaXRlcmF0b3I7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgPSBsaW1pdDtcbiAgICAgICAgICAgICAgICBlYWNoZm4oYXJyLCBpdGVyYXRlZSwgZG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMuYW55ID1cbiAgICBhc3luYy5zb21lID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2YsIHRvQm9vbCwgaWRlbnRpdHkpO1xuXG4gICAgYXN5bmMuc29tZUxpbWl0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZMaW1pdCwgdG9Cb29sLCBpZGVudGl0eSk7XG5cbiAgICBhc3luYy5hbGwgPVxuICAgIGFzeW5jLmV2ZXJ5ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2YsIG5vdElkLCBub3RJZCk7XG5cbiAgICBhc3luYy5ldmVyeUxpbWl0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZMaW1pdCwgbm90SWQsIG5vdElkKTtcblxuICAgIGZ1bmN0aW9uIF9maW5kR2V0UmVzdWx0KHYsIHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGFzeW5jLmRldGVjdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mLCBpZGVudGl0eSwgX2ZpbmRHZXRSZXN1bHQpO1xuICAgIGFzeW5jLmRldGVjdFNlcmllcyA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mU2VyaWVzLCBpZGVudGl0eSwgX2ZpbmRHZXRSZXN1bHQpO1xuICAgIGFzeW5jLmRldGVjdExpbWl0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZMaW1pdCwgaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KTtcblxuICAgIGFzeW5jLnNvcnRCeSA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhc3luYy5tYXAoYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uIChlcnIsIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwge3ZhbHVlOiB4LCBjcml0ZXJpYTogY3JpdGVyaWF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgX21hcChyZXN1bHRzLnNvcnQoY29tcGFyYXRvciksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjb21wYXJhdG9yKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWEsIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5hdXRvID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICB2YXIga2V5cyA9IF9rZXlzKHRhc2tzKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1Rhc2tzID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIGlmICghcmVtYWluaW5nVGFza3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHRzID0ge307XG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihmbikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm4pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGZuKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX2luZGV4T2YobGlzdGVuZXJzLCBmbik7XG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0YXNrQ29tcGxldGUoKSB7XG4gICAgICAgICAgICByZW1haW5pbmdUYXNrcy0tO1xuICAgICAgICAgICAgX2FycmF5RWFjaChsaXN0ZW5lcnMuc2xpY2UoMCksIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcmVtYWluaW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2FycmF5RWFjaChrZXlzLCBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBfaXNBcnJheSh0YXNrc1trXSkgPyB0YXNrc1trXTogW3Rhc2tzW2tdXTtcbiAgICAgICAgICAgIHZhciB0YXNrQ2FsbGJhY2sgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzYWZlUmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBfZm9yRWFjaE9mKHJlc3VsdHMsIGZ1bmN0aW9uKHZhbCwgcmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZVJlc3VsdHNbcmtleV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgc2FmZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZSh0YXNrQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVzID0gdGFzay5zbGljZSgwLCB0YXNrLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBkZWFkLWxvY2tzXG4gICAgICAgICAgICB2YXIgbGVuID0gcmVxdWlyZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRlcDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIGlmICghKGRlcCA9IHRhc2tzW3JlcXVpcmVzW2xlbl1dKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBpbmV4aXN0YW50IGRlcGVuZGVuY3knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KGRlcCkgJiYgX2luZGV4T2YoZGVwLCBrKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFzIGN5Y2xpYyBkZXBlbmRlbmNpZXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZHVjZShyZXF1aXJlcywgZnVuY3Rpb24gKGEsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhICYmIHJlc3VsdHMuaGFzT3duUHJvcGVydHkoeCkpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpICYmICFyZXN1bHRzLmhhc093blByb3BlcnR5KGspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGFzeW5jLnJldHJ5ID0gZnVuY3Rpb24odGltZXMsIHRhc2ssIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1RJTUVTID0gNTtcbiAgICAgICAgdmFyIERFRkFVTFRfSU5URVJWQUwgPSAwO1xuXG4gICAgICAgIHZhciBhdHRlbXB0cyA9IFtdO1xuXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgdGltZXM6IERFRkFVTFRfVElNRVMsXG4gICAgICAgICAgICBpbnRlcnZhbDogREVGQVVMVF9JTlRFUlZBTFxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlVGltZXMoYWNjLCB0KXtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICAgICAgYWNjLnRpbWVzID0gcGFyc2VJbnQodCwgMTApIHx8IERFRkFVTFRfVElNRVM7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIHQgPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICBhY2MudGltZXMgPSBwYXJzZUludCh0LnRpbWVzLCAxMCkgfHwgREVGQVVMVF9USU1FUztcbiAgICAgICAgICAgICAgICBhY2MuaW50ZXJ2YWwgPSBwYXJzZUludCh0LmludGVydmFsLCAxMCkgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlIGZvciBcXCd0aW1lc1xcJzogJyArIHR5cGVvZiB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoIDwgMSB8fCBsZW5ndGggPiAzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIC0gbXVzdCBiZSBlaXRoZXIgKHRhc2spLCAodGFzaywgY2FsbGJhY2spLCAodGltZXMsIHRhc2spIG9yICh0aW1lcywgdGFzaywgY2FsbGJhY2spJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoIDw9IDIgJiYgdHlwZW9mIHRpbWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IHRhc2s7XG4gICAgICAgICAgICB0YXNrID0gdGltZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aW1lcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGFyc2VUaW1lcyhvcHRzLCB0aW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBvcHRzLnRhc2sgPSB0YXNrO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdyYXBwZWRUYXNrKHdyYXBwZWRDYWxsYmFjaywgd3JhcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHJ5QXR0ZW1wdCh0YXNrLCBmaW5hbEF0dGVtcHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2VyaWVzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzayhmdW5jdGlvbihlcnIsIHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNDYWxsYmFjayghZXJyIHx8IGZpbmFsQXR0ZW1wdCwge2VycjogZXJyLCByZXN1bHQ6IHJlc3VsdH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCB3cmFwcGVkUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0cnlJbnRlcnZhbChpbnRlcnZhbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNlcmllc0NhbGxiYWNrKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzQ2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGlsZSAob3B0cy50aW1lcykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGZpbmFsQXR0ZW1wdCA9ICEob3B0cy50aW1lcy09MSk7XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMucHVzaChyZXRyeUF0dGVtcHQob3B0cy50YXNrLCBmaW5hbEF0dGVtcHQpKTtcbiAgICAgICAgICAgICAgICBpZighZmluYWxBdHRlbXB0ICYmIG9wdHMuaW50ZXJ2YWwgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdHMucHVzaChyZXRyeUludGVydmFsKG9wdHMuaW50ZXJ2YWwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jLnNlcmllcyhhdHRlbXB0cywgZnVuY3Rpb24oZG9uZSwgZGF0YSl7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAod3JhcHBlZENhbGxiYWNrIHx8IG9wdHMuY2FsbGJhY2spKGRhdGEuZXJyLCBkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGEgY2FsbGJhY2sgaXMgcGFzc2VkLCBydW4gdGhpcyBhcyBhIGNvbnRyb2xsIGZsb3dcbiAgICAgICAgcmV0dXJuIG9wdHMuY2FsbGJhY2sgPyB3cmFwcGVkVGFzaygpIDogd3JhcHBlZFRhc2s7XG4gICAgfTtcblxuICAgIGFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgaWYgKCFfaXNBcnJheSh0YXNrcykpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJdGVyYXRvcihpdGVyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgW2Vycl0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVuc3VyZUFzeW5jKGl0ZXJhdG9yKS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB3cmFwSXRlcmF0b3IoYXN5bmMuaXRlcmF0b3IodGFza3MpKSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfcGFyYWxsZWwoZWFjaGZuLCB0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IF9pc0FycmF5TGlrZSh0YXNrcykgPyBbXSA6IHt9O1xuXG4gICAgICAgIGVhY2hmbih0YXNrcywgZnVuY3Rpb24gKHRhc2ssIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhc2soX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdHNba2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMucGFyYWxsZWwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbChhc3luYy5lYWNoT2YsIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsTGltaXQgPSBmdW5jdGlvbih0YXNrcywgbGltaXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbChfZWFjaE9mTGltaXQobGltaXQpLCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5zZXJpZXMgPSBmdW5jdGlvbih0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgX3BhcmFsbGVsKGFzeW5jLmVhY2hPZlNlcmllcywgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzW2luZGV4XS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHkgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uIChmbiwgYXJncykge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoY2FsbEFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShcbiAgICAgICAgICAgICAgICBudWxsLCBhcmdzLmNvbmNhdChjYWxsQXJncylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gX2NvbmNhdChlYWNoZm4sIGFyciwgZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGluZGV4LCBjYikge1xuICAgICAgICAgICAgZm4oeCwgZnVuY3Rpb24gKGVyciwgeSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoeSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYy5jb25jYXQgPSBkb1BhcmFsbGVsKF9jb25jYXQpO1xuICAgIGFzeW5jLmNvbmNhdFNlcmllcyA9IGRvU2VyaWVzKF9jb25jYXQpO1xuXG4gICAgYXN5bmMud2hpbHN0ID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gX3Jlc3RQYXJhbShmdW5jdGlvbihlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXN0LmFwcGx5KHRoaXMsIGFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKG5leHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXRlcmF0b3IobmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5kb1doaWxzdCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNhbGxzID0gMDtcbiAgICAgICAgcmV0dXJuIGFzeW5jLndoaWxzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiArK2NhbGxzIDw9IDEgfHwgdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy51bnRpbCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLndoaWxzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5kb1VudGlsID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gYXN5bmMuZG9XaGlsc3QoaXRlcmF0b3IsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZHVyaW5nID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG5cbiAgICAgICAgdmFyIG5leHQgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGVyciwgYXJncykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjaGVjayk7XG4gICAgICAgICAgICAgICAgdGVzdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoZWNrID0gZnVuY3Rpb24oZXJyLCB0cnV0aCkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRydXRoKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IobmV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRlc3QoY2hlY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5kb0R1cmluZyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNhbGxzID0gMDtcbiAgICAgICAgYXN5bmMuZHVyaW5nKGZ1bmN0aW9uKG5leHQpIHtcbiAgICAgICAgICAgIGlmIChjYWxscysrIDwgMSkge1xuICAgICAgICAgICAgICAgIG5leHQobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3F1ZXVlKHdvcmtlciwgY29uY3VycmVuY3ksIHBheWxvYWQpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbmN5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNvbmN1cnJlbmN5ID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmN1cnJlbmN5IG11c3Qgbm90IGJlIHplcm8nKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFzayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCAmJiBxLmlkbGUoKSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2FycmF5RWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayB8fCBub29wXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcS50YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHEudGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggPT09IHEuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShxLnByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9uZXh0KHEsIHRhc2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB3b3JrZXJzIC09IDE7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgX2FycmF5RWFjaCh0YXNrcywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjay5hcHBseSh0YXNrLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggKyB3b3JrZXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcS5wcm9jZXNzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdvcmtlcnMgPSAwO1xuICAgICAgICB2YXIgcSA9IHtcbiAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5OiBjb25jdXJyZW5jeSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG5vb3AsXG4gICAgICAgICAgICBlbXB0eTogbm9vcCxcbiAgICAgICAgICAgIGRyYWluOiBub29wLFxuICAgICAgICAgICAgc3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtpbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBxLmRyYWluID0gbm9vcDtcbiAgICAgICAgICAgICAgICBxLnRhc2tzID0gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5zaGlmdDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcS5wYXVzZWQgJiYgd29ya2VycyA8IHEuY29uY3VycmVuY3kgJiYgcS50YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUod29ya2VycyA8IHEuY29uY3VycmVuY3kgJiYgcS50YXNrcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gcS5wYXlsb2FkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnNwbGljZSgwLCBxLnBheWxvYWQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnNwbGljZSgwLCBxLnRhc2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX21hcCh0YXNrcywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYiA9IG9ubHlfb25jZShfbmV4dChxLCB0YXNrcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyKGRhdGEsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcS50YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVubmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b3JrZXJzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlkbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnRhc2tzLmxlbmd0aCArIHdvcmtlcnMgPT09IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBxLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHEucGF1c2VkID09PSBmYWxzZSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBxLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bWVDb3VudCA9IE1hdGgubWluKHEuY29uY3VycmVuY3ksIHEudGFza3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBOZWVkIHRvIGNhbGwgcS5wcm9jZXNzIG9uY2UgcGVyIGNvbmN1cnJlbnRcbiAgICAgICAgICAgICAgICAvLyB3b3JrZXIgdG8gcHJlc2VydmUgZnVsbCBjb25jdXJyZW5jeSBhZnRlciBwYXVzZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDw9IHJlc3VtZUNvdW50OyB3KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHEucHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG5cbiAgICBhc3luYy5xdWV1ZSA9IGZ1bmN0aW9uICh3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gICAgICAgIHZhciBxID0gX3F1ZXVlKGZ1bmN0aW9uIChpdGVtcywgY2IpIHtcbiAgICAgICAgICAgIHdvcmtlcihpdGVtc1swXSwgY2IpO1xuICAgICAgICB9LCBjb25jdXJyZW5jeSwgMSk7XG5cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfTtcblxuICAgIGFzeW5jLnByaW9yaXR5UXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuXG4gICAgICAgIGZ1bmN0aW9uIF9jb21wYXJlVGFza3MoYSwgYil7XG4gICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfYmluYXJ5U2VhcmNoKHNlcXVlbmNlLCBpdGVtLCBjb21wYXJlKSB7XG4gICAgICAgICAgICB2YXIgYmVnID0gLTEsXG4gICAgICAgICAgICAgICAgZW5kID0gc2VxdWVuY2UubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlIChiZWcgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlkID0gYmVnICsgKChlbmQgLSBiZWcgKyAxKSA+Pj4gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgc2VxdWVuY2VbbWlkXSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBiZWcgPSBtaWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbWlkIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmVnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2luc2VydChxLCBkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFzayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2FycmF5RWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBxLnRhc2tzLnNwbGljZShfYmluYXJ5U2VhcmNoKHEudGFza3MsIGl0ZW0sIF9jb21wYXJlVGFza3MpICsgMSwgMCwgaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggPT09IHEuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHEucHJvY2Vzcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0IHdpdGggYSBub3JtYWwgcXVldWVcbiAgICAgICAgdmFyIHEgPSBhc3luYy5xdWV1ZSh3b3JrZXIsIGNvbmN1cnJlbmN5KTtcblxuICAgICAgICAvLyBPdmVycmlkZSBwdXNoIHRvIGFjY2VwdCBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBwcmlvcml0eVxuICAgICAgICBxLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgcHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHVuc2hpZnQgZnVuY3Rpb25cbiAgICAgICAgZGVsZXRlIHEudW5zaGlmdDtcblxuICAgICAgICByZXR1cm4gcTtcbiAgICB9O1xuXG4gICAgYXN5bmMuY2FyZ28gPSBmdW5jdGlvbiAod29ya2VyLCBwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBfcXVldWUod29ya2VyLCAxLCBwYXlsb2FkKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2NvbnNvbGVfZm4obmFtZSkge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoZm4sIGFyZ3MpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KFtfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnNvbGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcnJheUVhY2goYXJncywgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlW25hbWVdKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KV0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jLmxvZyA9IF9jb25zb2xlX2ZuKCdsb2cnKTtcbiAgICBhc3luYy5kaXIgPSBfY29uc29sZV9mbignZGlyJyk7XG4gICAgLyphc3luYy5pbmZvID0gX2NvbnNvbGVfZm4oJ2luZm8nKTtcbiAgICBhc3luYy53YXJuID0gX2NvbnNvbGVfZm4oJ3dhcm4nKTtcbiAgICBhc3luYy5lcnJvciA9IF9jb25zb2xlX2ZuKCdlcnJvcicpOyovXG5cbiAgICBhc3luYy5tZW1vaXplID0gZnVuY3Rpb24gKGZuLCBoYXNoZXIpIHtcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcbiAgICAgICAgdmFyIHF1ZXVlcyA9IHt9O1xuICAgICAgICBoYXNoZXIgPSBoYXNoZXIgfHwgaWRlbnRpdHk7XG4gICAgICAgIHZhciBtZW1vaXplZCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24gbWVtb2l6ZWQoYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICBpZiAoa2V5IGluIG1lbW8pIHtcbiAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIG1lbW9ba2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgaW4gcXVldWVzKSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW19yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHEgPSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxW2ldLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZW1vaXplZC5tZW1vID0gbWVtbztcbiAgICAgICAgbWVtb2l6ZWQudW5tZW1vaXplZCA9IGZuO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gICAgfTtcblxuICAgIGFzeW5jLnVubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChmbi51bm1lbW9pemVkIHx8IGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfdGltZXMobWFwcGVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgbWFwcGVyKF9yYW5nZShjb3VudCksIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMudGltZXMgPSBfdGltZXMoYXN5bmMubWFwKTtcbiAgICBhc3luYy50aW1lc1NlcmllcyA9IF90aW1lcyhhc3luYy5tYXBTZXJpZXMpO1xuICAgIGFzeW5jLnRpbWVzTGltaXQgPSBmdW5jdGlvbiAoY291bnQsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLm1hcExpbWl0KF9yYW5nZShjb3VudCksIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5zZXEgPSBmdW5jdGlvbiAoLyogZnVuY3Rpb25zLi4uICovKSB7XG4gICAgICAgIHZhciBmbnMgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbm9vcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXN5bmMucmVkdWNlKGZucywgYXJncywgZnVuY3Rpb24gKG5ld2FyZ3MsIGZuLCBjYikge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIG5ld2FyZ3MuY29uY2F0KFtfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIG5leHRhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKGVyciwgbmV4dGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGF0LCBbZXJyXS5jb25jYXQocmVzdWx0cykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy5jb21wb3NlID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICByZXR1cm4gYXN5bmMuc2VxLmFwcGx5KG51bGwsIEFycmF5LnByb3RvdHlwZS5yZXZlcnNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gX2FwcGx5RWFjaChlYWNoZm4pIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24oZm5zLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgZ28gPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWFjaGZuKGZucywgZnVuY3Rpb24gKGZuLCBfLCBjYikge1xuICAgICAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzLmNvbmNhdChbY2JdKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnby5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBnbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMuYXBwbHlFYWNoID0gX2FwcGx5RWFjaChhc3luYy5lYWNoT2YpO1xuICAgIGFzeW5jLmFwcGx5RWFjaFNlcmllcyA9IF9hcHBseUVhY2goYXN5bmMuZWFjaE9mU2VyaWVzKTtcblxuXG4gICAgYXN5bmMuZm9yZXZlciA9IGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRvbmUgPSBvbmx5X29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIHZhciB0YXNrID0gZW5zdXJlQXN5bmMoZm4pO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZW5zdXJlQXN5bmMoZm4pIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBhcmdzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbm5lckFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMuZW5zdXJlQXN5bmMgPSBlbnN1cmVBc3luYztcblxuICAgIGFzeW5jLmNvbnN0YW50ID0gX3Jlc3RQYXJhbShmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbbnVsbF0uY29uY2F0KHZhbHVlcyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGFzeW5jLndyYXBTeW5jID1cbiAgICBhc3luYy5hc3luY2lmeSA9IGZ1bmN0aW9uIGFzeW5jaWZ5KGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHJlc3VsdCBpcyBQcm9taXNlIG9iamVjdFxuICAgICAgICAgICAgaWYgKF9pc09iamVjdChyZXN1bHQpICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyci5tZXNzYWdlID8gZXJyIDogbmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gTm9kZS5qc1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuICAgIH1cbiAgICAvLyBBTUQgLyBSZXF1aXJlSlNcbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBpbmNsdWRlZCBkaXJlY3RseSB2aWEgPHNjcmlwdD4gdGFnXG4gICAgZWxzZSB7XG4gICAgICAgIHJvb3QuYXN5bmMgPSBhc3luYztcbiAgICB9XG5cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hc3luYy9saWIvYXN5bmMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy9icm93c2VyLmpzJykubmV4dFRpY2s7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaW1tZWRpYXRlSWRzID0ge307XG52YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBmdW5jdGlvbihmbikge1xuICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXG4gIG5leHRUaWNrKGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG4gICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcbiAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2VcbiAgICAgIC8vIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vY2FsbC1hcHBseS1zZWd1XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGlkcyBmcm9tIGxlYWtpbmdcbiAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuICBkZWxldGUgaW1tZWRpYXRlSWRzW2lkXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yMS5cclxuICovXHJcblxyXG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnYWxzYyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhZ2VudCBmcm9tIFwic3VwZXJhZ2VudFwiO1xyXG5pbXBvcnQgKiBhcyBhc3luYyBmcm9tIFwiYXN5bmNcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi8uLi91dGlscy91dGlscy5qc1wiO1xyXG5cclxudmFyIFNIQURFUl9UWVBFID0ge307XHJcblNIQURFUl9UWVBFW1widmVydGV4XCJdID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0LlZFUlRFWF9TSEFERVI7XHJcblNIQURFUl9UWVBFW1wiZnJhZ21lbnRcIl0gPSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuRlJBR01FTlRfU0hBREVSO1xyXG5cclxuY2xhc3MgU2FtcGxlRmllbGQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCxzcmMsZGlzdCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzW1wiX3NyY1BhdGhcIl0gPSBzcmM7XHJcbiAgICAgICAgdGhpc1tcIl9kaXN0UGF0aFwiXSA9IGRpc3Q7XHJcbiAgICAgICAgdGhpcy5zaGFkZXJzRGljdCA9IHt9O1xyXG4gICAgICAgIHRoaXMuQ09OU1RBTlRTID0gT2JqZWN0LmFzc2lnbih7fSx1dGlscy5jb25zdGFudHMpO1xyXG4gICAgICAgIHRoaXMuQ09OU1RBTlRTLlYgPSB0aGlzLkNPTlNUQU5UUy5WRVJURVhfU0hBREVSID0gXCJ2ZXJ0ZXhcIjtcclxuICAgICAgICB0aGlzLkNPTlNUQU5UUy5GID0gdGhpcy5DT05TVEFOVFMuRlJBR01FTlRfU0hBREVSID0gXCJmcmFnbWVudFwiO1xyXG4gICAgICAgIHRoaXMuX2xhdW5jaFN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3JjUGF0aCh1cmwpe1xyXG4gICAgICAgIHJldHVybiB1dGlscy51cmwuam9pbih0aGlzLl9zcmNQYXRoLHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdFBhdGgodXJsKXtcclxuICAgICAgICByZXR1cm4gdXRpbHMudXJsLmpvaW4odGhpcy5fZGlzdFBhdGgsdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkT25lU2hhZGVyKGdsLHVybCx0eXBlLG5hbWUsY2Ipe1xyXG4gICAgICAgIHJldHVybiBhZ2VudC5nZXQodXJsKS5lbmQoKGVycixyZXMpPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgaWYoISh0eXBlIGluIFNIQURFUl9UWVBFKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoU0hBREVSX1RZUEVbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgcmVzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcnNEaWN0W25hbWVdID0gc2hhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYj09PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICBjYihlcnIscmVzLnRleHR8fFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2hhZGVycyhnbCxjYixsb2Fkb2JqKXtcclxuICAgICAgICBpZih0eXBlb2YgY2IhPT1cImZ1bmN0aW9uXCIgfHwgIUFycmF5LmlzQXJyYXkobG9hZG9iaikgfHwgbG9hZG9iai5sZW5ndGg8PTApcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgdGFza3MgPSBsb2Fkb2JqLm1hcCgobG9hZCk9PntcclxuICAgICAgICAgICAgaWYobG9hZC51cmwgJiYgbG9hZC50eXBlICYmIGxvYWQubmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkT25lU2hhZGVyKGdsLGxvYWQudXJsLGxvYWQudHlwZSxsb2FkLm5hbWUsbmV4dClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKG5leHQpPT57bmV4dChudWxsLCBcIlwiKX1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXN5bmMuc2VyaWVzKHRhc2tzLCgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGF1bmNoU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhdW5jaCgpe1xyXG4gICAgICAgIHJldHVybiAoY2FudmFzLGRhdGEpPT57XHJcbiAgICAgICAgICAgIHRoaXMuX2xhdW5jaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5vbkxhdW5jaC5hcHBseSh0aGlzLFtjYW52YXMsZGF0YXx8e31dKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwibGF1bmNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzdHJ1Y3QoKXtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgdGhpcy5fbGF1bmNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3RydWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRlc3RydWN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXVuY2hTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXVuY2hTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxhdW5jaChjYW52YXMpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3RydWN0KCl7XHJcbiAgICAgICAgdGhpcy5ub3RJbXBsZW1lbnRPbkRlc3RydWN0ID0gdHJ1ZTtcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCJvbkRlc3RydWN0IG5vdCBpbXBsZW1lbnQgeWV0IVwiLHRoaXMuX3NyY1BhdGgsdGhpcy5fZGlzdFBhdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVGaWVsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIzLlxyXG4gKi9cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5cclxudmFyIGxvb3AgPSBcImxvb3BcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGlvbk1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICBpZighKEFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgQW5pbWF0aW9uTWFuYWdlcikpe1xyXG4gICAgICAgICAgICBBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBBbmltYXRpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAvL3RoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX3N0b3BTdGF0ZSlyZXR1cm47XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbG9vcCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcChmb3JjZT10cnVlKXtcclxuICAgICAgICB0aGlzLl9zdG9wU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGZvcmNlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcihsb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb29wKGZuKXtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKGxvb3AsZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb29wKCl7XHJcbiAgICAgICAgaWYodGhpcy5fc3RvcFN0YXRlKXJldHVybjtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbG9vcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmVtaXQobG9vcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbk1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzguXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbCxJbnB1dCxMaXN0R3JvdXAsTGlzdEdyb3VwSXRlbSxQYWdpbmF0aW9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmltcG9ydCBTYW1wbGVNYW5hZ2VyIGZyb20gJy4uLy4uL2NvcmUvU2FtcGxlTWFuYWdlci5qcyc7XHJcblxyXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJzaWRlYmFyXCIgbWQ9ezN9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIga2V5IHdvcmRzLi4uJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTYW1wbGVJdGVtKCl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qYFxyXG4gICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBwcmV2XHJcbiAgICAgICAgICAgICAgICBuZXh0XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17M31cclxuICAgICAgICAgICAgICAgIG1heEJ1dHRvbnM9ezN9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXsxfVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpPT57fX0gLz5cclxuICAgICAgICBgKi9cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTYW1wbGVJdGVtKCl7XHJcbiAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnByb3BzLnNhbXBsZXNMaXN0LmZpbHRlcigoc2FtcGxlKT0+e3JldHVybiBzYW1wbGUuaWQ+MX0pO1xyXG5cclxuICAgICAgICB2YXIgaGVsbG93b3JsZCA9IHRoaXMucHJvcHMuc2FtcGxlc0xpc3RbMF07XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IGxpc3QubWFwKChzYW1wbGUpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8U2lkZUJhckxpc3RJdGVtIGtleT17c2FtcGxlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVJZCA9IHtzYW1wbGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ISFzYW1wbGUuYWN0aXZlU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzYW1wbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlQmFyTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoaGVsbG93b3JsZCkge1xyXG4gICAgICAgICAgICBpdGVtcy51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXJMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aGVsbG93b3JsZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVJZD17aGVsbG93b3JsZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9eyEhaGVsbG93b3JsZC5hY3RpdmVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aGVsbG93b3JsZC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGVCYXJMaXN0SXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU2lkZUJhckxpc3RJdGVtIGV4dGVuZHMgTGlzdEdyb3VwSXRlbXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTYW1wbGVJdGVtKGUpe1xyXG4gICAgICAgIHZhciBzYW1wbGUgPSBTYW1wbGVNYW5hZ2VyLnNhbXBsZXNJZERpY3RbdGhpcy5wcm9wcy5zYW1wbGVJZF07XHJcbiAgICAgICAgaWYoISFzYW1wbGUuYWN0aXZlU3RhdGUpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzp0cnVlfSk7XHJcbiAgICAgICAgU2FtcGxlTWFuYWdlci50b2dnbGVUb1NhbXBsZShzYW1wbGUuaWQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOmZhbHNlfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9eyEhdGhpcy5wcm9wcy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrU2FtcGxlSXRlbS5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgeygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInNpZ24gbG9hZGluZ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSgpfVxyXG4gICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvU2lkZUJhci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=