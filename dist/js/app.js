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
	            var gl = canvas.getContext("webgl");
	            var background = canvas.style.backgroundColor || window.getComputedStyle(canvas).backgroundColor;
	            background = (0, _color2["default"])(background).rgb();
	            gl.clearColor(background.r / 255, background.g / 255, background.b / 255, 1.0);
	            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	            if (this.props.name) parent.canvasDict[this.props.name] = canvas;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            console.log(this.props.belongsto + "_" + this.props.name);
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
	                                    htmlele = self.createElement(htmltag, attrs);
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
	                sample.runingScript.launch(data.canvas);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlPLFNBQVMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBRTs7QUFDdEYsUUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDLFFBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFMUIsUUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUN4QixRQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQixRQUFJLEdBQUcsQ0FBQzs7QUFFUixRQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUN4QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdCLFdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDYixZQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUNuRSxtQkFBTyxLQUFLLENBQUM7U0FDaEI7QUFDRCxZQUFJLEdBQUcsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUU7QUFDckQsdUJBQVcsR0FBRyxDQUFDLENBQUM7U0FDbkI7S0FDSjs7QUFFRCxPQUFHLEdBQUcsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDO0FBQzdHLFFBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxFQUFFO0FBQ25CLFdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuQyxNQUNJO0FBQ0QsV0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNELGFBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDekI7O0FBRU0sU0FBUyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO0FBQ2xFLFFBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTztBQUM1QixRQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsUUFBSSxHQUFHLEVBQUU7QUFDTCxpQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBUyxHQUFHLEVBQUM7QUFDdEMsbUJBQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQSxBQUFDLENBQUE7U0FDdkUsQ0FBQyxDQUFDO0tBQ047Q0FDSjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUMzQyxRQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsUUFBSSxHQUFHLEVBQUU7QUFDTCxtQkFBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QixlQUFPLElBQUksQ0FBQztLQUNmLE1BQU07QUFDSCxlQUFPLEtBQUssQ0FBQztLQUNoQjtDQUNKOztBQUVNLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDcEMsU0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDZixZQUFHLE9BQU8sQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFDcEMsZ0JBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixnQkFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtBQUNyQixvQkFBSSxDQUFDLEtBQUssRUFBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLG9CQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLG1CQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFDLG9CQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDVCx1QkFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0o7U0FDSjtLQUNKO0NBQ0oiLCJmaWxlIjoiZXZlbnRzL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCwgcGFyYW0sIHByaW9yaXR5LG9uY2UpIHsvLyxyZXNlcnZlPzphbnlcclxuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKW5vdGlmeW1hcFtuYW1lXSA9IFtdO1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xyXG4gICAgdmFyIGJpbjtcclxuXHJcbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZClwcmlvcml0eSA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYmluID0gYXJyW2ldO1xyXG4gICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7Ly/pmLLmraLph43lpI3mj5LlhaVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpbiAmJiBpbnNlcnRJbmRleCA9PSAtMSAmJiBiaW4ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbiA9IHtjYWxsYmFjazogY2FsbGJhY2ssIHRoaXNPYmplY3Q6IHRoaXNPYmplY3QsIHBhcmFtOiBwYXJhbSA/IHBhcmFtIDogW10sIHByaW9yaXR5OiBwcmlvcml0eSAsb25jZTpvbmNlfTtcclxuICAgIGlmIChpbnNlcnRJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcnIucHVzaChiaW4pO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xyXG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pcmV0dXJuO1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuICAgIGlmIChhcnIpIHtcclxuICAgICAgICBub3RpZnltYXBbbmFtZV0gPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKGJpbil7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuICAgIGlmIChhcnIpIHtcclxuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xyXG4gICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcclxuICAgICAgICBpZih0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSl7XHJcbiAgICAgICAgICAgIHZhciBiaW4gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtKXBhcmFtID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKXBhcmFtID0gYmluLnBhcmFtLmNvbmNhdChwYXJhbSk7XHJcbiAgICAgICAgICAgICAgICBiaW4uY2FsbGJhY2suYXBwbHkoYmluLnRoaXNPYmplY3QsIHBhcmFtKTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
	
	            return function (canvas) {
	                _this3._launchState = true;
	                _this3.onLaunch(canvas);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDYzOTQwMmVhODBjOTM5ZjE2ZTQiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy9hcHAuZXM2fiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvQXBwLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9Cb2R5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdEJvb3RzdHJhcFwiIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9Db21tb25NYXJrUmVuZGVyLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvYmxvY2tzLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvY29tbW9uLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL3htbC5qc29uIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvbGVnYWN5Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9kZWNvZGUuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2lubGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub3JtYWxpemUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L3N0cmluZy5wcm90b3R5cGUucmVwZWF0L3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL34vY29sb3ItbmFtZS9pbmRleC5qc29uIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9TYW1wbGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYWxzYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7Ozs7Ozs7O2tDQUtLLENBQU87Ozs7c0NBQ1QsQ0FBZTs7OztnREFFTCxFQUF5Qjs7OzttREFDdEIsRUFBNEI7Ozs7cURBQ2pDLEVBQStCOzs7O0tBRWpELElBQUksR0FDSyxTQURULElBQUksR0FDTzsyQkFEWCxJQUFJOztBQUVGLHdCQUFNLE1BQU0sQ0FBQyw4REFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4RDs7QUFHTCxLQUFJLEdBQUcsQ0FBQztBQUNSLE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixXQUFNLEVBQUMsa0JBQVU7QUFDYixhQUFJLEdBQUcsWUFBWSxJQUFJLEVBQUUsT0FBTztBQUNoQyxZQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztNQUNwQjtBQUNELGdCQUFXLHVDQUFZO0FBQ3ZCLHFCQUFnQixxQ0FBaUI7RUFDcEMsQzs7Ozs7O0FDMUJELCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0drQixDQUFPOzs7OzJDQUVOLENBQW9COzs7O3lDQUN0QixDQUFrQjs7OzsyQ0FDaEIsQ0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSyxPQUFPOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFD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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDOWtFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUssT0FBTztBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQUssT0FBTzs7QUFFWixzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEO0FBQ0EsMEJBQXlCLG1DQUFtQztBQUM1RDtBQUNBLDBCQUF5QixtQ0FBbUMsOENBQThDO0FBQzFHO0FBQ0E7QUFDQSwwQkFBeUIsT0FBTyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoNkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0EsWUFBVyxPQUFPLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxREE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWUFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7Ozs7O0FDakRBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBdUIsMkJBQTJCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLDhCQUE4QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM1FBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXVCLDJCQUEyQjs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHdCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxzQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Ysc0JBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0Esc0JBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL2FBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUI7O0FBRW5CLHNCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELDBCOzs7Ozs7QUMzRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLE9BQU8sUUFBUTtBQUNqQyxtQkFBa0IsT0FBTyxRQUFRO0FBQ2pDLG9CQUFtQixPQUFPLE9BQU87QUFDakMsb0JBQW1CLE9BQU8sT0FBTztBQUNqQyxtQkFBa0IsUUFBUSxPQUFPO0FBQ2pDLG1CQUFrQixRQUFRLE9BQU87QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDenJCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLEVBQUU7QUFDakMsK0JBQThCLEVBQUU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VDtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QyxDQUFDLENBQUM7Y0FDcEMsQ0FBQyxDQUFDO1VBQ047OztnQkFFSyxrQkFBRTs7O0FBQ0osb0JBQ0k7aUNBM0VnQixhQUFhOztBQTRFbEIsMkJBQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFPO0FBQzVCLDRCQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7aUJBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztpQkFDaEIsQ0FBQyxZQUFJO0FBQ0YseUJBQUcsT0FBSyxLQUFLLENBQUMsU0FBUyxFQUFDO0FBQ3BCLGdDQUFPLDJDQUFNLFNBQVMsRUFBQyxjQUFjLEdBQVE7c0JBQ2hEO2tCQUNKLEdBQUc7Y0FDUSxDQUNsQjtVQUNMOzs7WUE5QkMsZUFBZTtvQkF4RE8sYUFBYTs7c0JBeUYxQixPQUFPIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDYzOTQwMmVhODBjOTM5ZjE2ZTRcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzcvMTYuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3L0FwcC5qcyc7XG5cbmltcG9ydCBTYW1wbGVNYW5hZ2VyIGZyb20gJy4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcbmltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gJy4vY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzJztcbmltcG9ydCBTYW1wbGVGaWVsZCBmcm9tICcuL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qcyc7XG5cbmNsYXNzIE1haW57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOy8vXG4gICAgfVxufVxuXG52YXIgYXBwO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGF1bmNoOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKChhcHAgaW5zdGFuY2VvZiBNYWluKSlyZXR1cm47XG4gICAgICAgIGFwcCA9IG5ldyBNYWluKCk7XG4gICAgfSxcbiAgICBTYW1wbGVGaWVsZDpTYW1wbGVGaWVsZCxcbiAgICBBbmltYXRpb25NYW5hZ2VyOkFuaW1hdGlvbk1hbmFnZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvYXBwLmVzNn5cbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vbGF5b3V0L0hlYWRlci5qcyc7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vbGF5b3V0L0JvZHkuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vbGF5b3V0L0Zvb3Rlci5qcyc7XHJcblxyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCJcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxpemVTdGF0ZTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLmFkZExpc3RlbmVyKFNhbXBsZU1hbmFnZXIuQ09ORklHX0xPQURFRCx0aGlzLm9uU2FtcGxlQ29uZmlnUmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlBSRV9SRUFEWV9TQU1QTEUsdGhpcy5vblNhbXBsZVByZVJlYWR5LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzTW91bnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluaXRpYWxpemVTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDpjb25maWcubWluSGVpZ2h0IC8vZG9jdW1lbnQgbWFyZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhbXBsZXNEYXRhOm51bGwsXHJcbiAgICAgICAgICAgIHNhbXBsZUN1cnI6bnVsbCAvL+W9k+WJjeS+i+WtkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3R5bGUubWluSGVpZ2h0IT09d2luZG93LmlubmVySGVpZ2h0LTE2KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodC0xNiAvL2RvY3VtZW50IG1hcmdpblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVDb25maWdSZWFkeSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzYW1wbGVzRGF0YTpTYW1wbGVNYW5hZ2VyLnNhbXBsZXNEYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVQcmVSZWFkeShlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2FtcGxlQ3VycjplLnNhbXBsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge3RoaXMuaXNNb3VudCA9IHRydWU7fVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7dGhpcy5pc01vdW50ID0gZmFsc2V9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvL3RoaXMuc3RhdGUud2luZG93UmVzaXplZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFwcCA9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcGFnZSBwdWxsLWNlbnRlciBwYXBlclwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkgc2FtcGxlQ3Vycj17dGhpcy5zdGF0ZS5zYW1wbGVDdXJyfSBzYW1wbGVzRGF0YT17dGhpcy5zdGF0ZS5zYW1wbGVzRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9BcHAuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+wqkgMjAxNSZuYnNwOzxhIGhyZWY9e2NvbmZpZy51cmx9PnRvbW15enptPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlBvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhY3Q8L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL1wiIHRhcmdldD1cIl9ibGFua1wiPkJvb3RTdHJhcDwvYT48L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIwLlxyXG4gKi9cclxuZXhwb3J0IHZhciB1cmwgPSB7XHJcbiAgICBqb2luOmZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgam9pbmVkID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLmpvaW4oJy8nKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcPy9nLCAnPycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwjL2csICcjJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXDpcXC8vZywgJzovLycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwuXFwvL2csICdcXC8nKTtcclxuICAgICAgICB9KShqb2luZWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciByZXggPSB7XHJcbiAgICBodG1sU2luZ2xlVGFnOigvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy9cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgY29uc3RhbnRzID0ge1xyXG4gICAgUEk6TWF0aC5QSSxcclxuICAgIFBJXzI6IE1hdGguUEkgKiAyLFxyXG4gICAgUkFEX1RPX0RFRzoxODAgLyBNYXRoLlBJLFxyXG4gICAgREVHX1RPX1JBRDpNYXRoLlBJIC8gMTgwXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IHtcclxuICAgIHVybDpcImh0dHA6Ly93d3cuY2hhbGV0NTgxLnh5elwiLFxyXG4gICAgZ2V0IG1pbkhlaWdodCgpe1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQtMTY7XHJcbiAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3V0aWxzL3V0aWxzLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cInNpdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPldlYkdMIHRlc3Q8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90b21teVpaTS93ZWJHTFByYXRpY2VcIiB0aXRsZT1cIndhdGNoIHNvdXJjZSBvbiBnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1naXRodWItYWx0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb25maWcudXJsfSB0aXRsZT1cImJsb2dcIj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2l0ZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJyXCI+PGE+5qCX5a2QPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2luYy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9pbmMvU2lkZUJhci5qc1wiO1xyXG5cclxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gIDxkaXYgaWQ9XCJzaXRlLW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBzYW1wbGVDb250ZW50PXt0aGlzLnByb3BzLnNhbXBsZUN1cnJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzYW1wbGVzTGlzdD17KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2FtcGxlc0RhdGEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLnNhbXBsZXNEYXRhLnBvc3RzKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zYW1wbGVzRGF0YS5wb3N0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvQm9keS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Qm9vdHN0cmFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2x9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5pbXBvcnQgY29sb3IgZnJvbSBcImNvbG9yXCI7XHJcblxyXG5pbXBvcnQgU2FtcGxlUmVuZGVyZXIgZnJvbSAnLi4vY29udGVudC9TYW1wbGVSZW5kZXJlci5qcydcclxuaW1wb3J0IFNhbXBsZU1hbmFnZXIgZnJvbSAnLi4vLi4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcclxuXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIlxyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlBSRV9SRUFEWV9TQU1QTEUsdGhpcy5vblNhbXBsZVByZVJlYWR5LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb25TYW1wbGVQcmVSZWFkeSgpIHtcclxuICAgIC8vXHJcbiAgICAvL31cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbnRlbnQgXCIgbWQ9ezl9IHN0eWxlPXt7bWluSGVpZ2h0OmNvbmZpZy5taW5IZWlnaHQtMTM4LTkxfX0+XHJcbiAgICAgICAgICAgICAgICB7KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zYW1wbGVDb250ZW50JiZ0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1hcmtkb3duIGlkPXt0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWR9IHNvdXJjZT17dGhpcy5wcm9wcy5zYW1wbGVDb250ZW50Lm1hcmtkb3dufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyID0gbmV3IFNhbXBsZVJlbmRlcmVyKHtzb3VyY2Vwb3M6IHRydWV9KTtcclxuICAgICAgICB0aGlzLmlzUmVuZGVyU3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1F1ZXJ5ID0gW107XHJcbiAgICAgICAgdGhpcy5jYW52YXNEaWN0ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyLnJlbmRlckh0bWwoXCJjYW52YXNcIiwodGFnLGF0dHJzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPENhbnZhcyBwYXJlbnQ9e3RoaXN9IG5hbWU9e2F0dHJzLm5hbWV8fFwiXCJ9IGJlbG9uZ3N0bz17dGhpcy5wcm9wcy5pZH0vPjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5jYW52YXNEaWN0KXtcclxuICAgICAgICAgICAgZGljdFtpXSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuY2FudmFzRGljdFtpXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYW52YXM6e1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6dGhpcy5jYW52YXNRdWVyeS5tYXAoKGNhbnZhcyk9PntyZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY2FudmFzKX0pLFxyXG4gICAgICAgICAgICAgICAgZGlyY3Q6ZGljdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLnJlYWR5U2FtcGxlKHRoaXMucHJvcHMuaWQsZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNRdWVyeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLnNvdXJjZSA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMubWFya1JlbmRlcmVyLnJlbmRlcih0aGlzLnByb3BzLnNvdXJjZSB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICBpZihlbGVtZW50cyYmIWVsZW1lbnRzLnNvbWUoKGVsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZSlcclxuICAgICAgICAgICAgICAgIH0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZW5kZXJTdWNjZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShSZWFjdCxbXCJkaXZcIix7Y2xhc3NOYW1lOlwibWFya2Rvd25cIn1dLmNvbmNhdChlbGVtZW50cykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vb3BcIj48L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wcm9wcy5wYXJlbnQ7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5jYW52YXNRdWVyeS5wdXNoKGNhbnZhcyk7XHJcbiAgICAgICAgdmFyIGdsPWNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yfHx3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kID0gY29sb3IoYmFja2dyb3VuZCkucmdiKCk7XHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcihiYWNrZ3JvdW5kLnIvMjU1LCBiYWNrZ3JvdW5kLmcvMjU1LCBiYWNrZ3JvdW5kLmIvMjU1LCAxLjApO1xyXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLm5hbWUpcGFyZW50LmNhbnZhc0RpY3RbdGhpcy5wcm9wcy5uYW1lXT1jYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5iZWxvbmdzdG8rXCJfXCIrdGhpcy5wcm9wcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Y2FudmFzIGtleT17dGhpcy5wcm9wcy5iZWxvbmdzdG8rXCJfXCIrdGhpcy5wcm9wcy5uYW1lfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IGRhdGEtYmVsb25nc3RvPXt0aGlzLnByb3BzLmJlbG9uZ3N0b30+PC9jYW52YXM+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2luYy9Db250ZW50LmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIzLlxyXG4gKi9cclxuLy/muLLmn5NTYW1wbGVcclxuXHJcbmltcG9ydCBDb21tb25NYXJrUmVuZGVyIGZyb20gXCIuL0NvbW1vbk1hcmtSZW5kZXIuanNcIjtcclxuXHJcbi8vaW1wb3J0IE1hcmtlZFJlbmRlcmVyIGZyb20gXCIuL21hcmtkb3duL01hcmtlZFJlbmRlcmVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25NYXJrUmVuZGVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZVJlbmRlcmVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzI0LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgQ29tbW9ubWFyayBmcm9tICdjb21tb25tYXJrJztcclxuXHJcbnZhciByZXggPSB7XHJcbiAgICBodG1sU2luZ2xlVGFnOigvXjwoXFx3KylcXHMqKC4qKVxcLz8+KD86PFxcL1xcMT58KSQvKSxcclxuICAgIGh0bWw6Lzx8JiM/XFx3KzsvLFxyXG4gICAgaHRtbFByb3BzOi8oXFx3Kyk9KFtePl0rKS9pXHJcbn07XHJcblxyXG52YXIgZG9tSWRlbnRpdHk7XHJcbmlmKHR5cGVvZiBkb2N1bWVudCE9PVwidW5kZWZpbmVkXCIpe1xyXG4gICAgZG9tSWRlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG59ZWxzZXtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJkb2N1bWVudCB1bmRlZmluZWQhXCIpO1xyXG59XHJcblxyXG52YXIgbWFya1ByYXNlciA9IG5ldyBDb21tb25tYXJrLlBhcnNlcigpO1xyXG5cclxuY2xhc3MgUmVuZGVyZXIgaW1wbGVtZW50cyBJQ29tbW9ubWFya1JlbmRlcmVye1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyl7XHJcbiAgICAgICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc291cmNlUG9zPW9wdHMuc291cmNlUG9zO1xyXG4gICAgICAgIHRoaXMuc29mdEJyZWFrID0gb3B0cy5zb2Z0QnJlYWsgfHwgJ1xcbic7XHJcbiAgICAgICAgdGhpcy5lc2NhcGVIdG1sID0gISFvcHRzLmVzY2FwZUh0bWw7XHJcbiAgICAgICAgdGhpcy5za2lwSHRtbCA9ICEhb3B0cy5za2lwSHRtbDtcclxuXHJcbiAgICAgICAgdGhpcy5ob3dSZW5kZXJIdG1sID0ge307XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJIdG1sKHRhZ05hbWUsZm4pe1xyXG4gICAgICAgIGlmKHR5cGVvZiBmbiE9PVwiZnVuY3Rpb25cIilyZXR1cm47XHJcbiAgICAgICAgdGhpcy5ob3dSZW5kZXJIdG1sW3RhZ05hbWVdPWZuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNvdXJjZSl7XHJcbiAgICAgICAgdmFyIGJsb2NrID0gbWFya1ByYXNlci5wYXJzZShzb3VyY2UgfHwgJycpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IE1hcmtkb3duTm9kZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHZhciB3YWxrZXIgPSBibG9jay53YWxrZXIoKTtcclxuICAgICAgICB2YXIgc291cmNlUG9zID0gdGhpcy5zb3VyY2VQb3M7XHJcbiAgICAgICAgdmFyIGVzY2FwZUh0bWwgPSB0aGlzLmVzY2FwZUh0bWw7XHJcbiAgICAgICAgdmFyIHNraXBIdG1sID0gdGhpcy5za2lwSHRtbDtcclxuICAgICAgICB2YXIgaW5mb1dvcmRzO1xyXG4gICAgICAgIHZhciBzb2Z0QnJlYWsgPSAoXHJcbiAgICAgICAgICAgIHRoaXMuc29mdEJyZWFrID09PSAnYnInID9cclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJykgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2Z0QnJlYWtcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgZSwgbm9kZSwgZW50ZXJpbmcsIGxlYXZpbmcsIGF0dHJzLCBkb2M7XHJcbiAgICAgICAgd2hpbGUgKChlID0gd2Fsa2VyLm5leHQoKSkpIHtcclxuICAgICAgICAgICAgZW50ZXJpbmcgPSBlLmVudGVyaW5nO1xyXG4gICAgICAgICAgICBsZWF2aW5nID0gIWVudGVyaW5nO1xyXG4gICAgICAgICAgICBub2RlID0gZS5ub2RlO1xyXG4gICAgICAgICAgICBhdHRycyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkb2MpIHtcclxuICAgICAgICAgICAgICAgIGRvYyA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlYWN0ID0geyBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNvdXJjZVBvcyAmJiBub2RlLnNvdXJjZXBvcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5vZGUuc291cmNlcG9zO1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbJ2RhdGEtc291cmNlcG9zJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWzBdWzBdLCAnOicsIHBvc1swXVsxXSwgJy0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc1sxXVswXSwgJzonLCBwb3NbMV1bMV1cclxuICAgICAgICAgICAgICAgIF0ubWFwKFN0cmluZykuam9pbignJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdQYXJhZ3JhcGgnICYmIHNlbGYuaXNHcmFuZFBhcmVudE9mTGlzdChub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsZWF2aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnSW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC5wcm9wcy5hbHQgPSBub2RlLnJlYWN0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSAhPT0gZG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QudGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LnByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVudGVyaW5nIGEgbmV3IG5vZGVcclxuICAgICAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0h0bWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnSHRtbEJsb2NrJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNjYXBlSHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIG5vZGUubGl0ZXJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2tpcEh0bWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1scHJhc2UgPSByZXguaHRtbFNpbmdsZVRhZy5leGVjKG5vZGUubGl0ZXJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaHRtbHByYXNlKSYmaHRtbHByYXNlWzFdKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbHRhZyA9IGh0bWxwcmFzZVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sZWxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUlkZW50aXR5LmlubmVySFRNTCA9IG5vZGUubGl0ZXJhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sYXR0cmlidXRlcyA9IGRvbUlkZW50aXR5LmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8aHRtbGF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBodG1sYXR0cmlidXRlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmFtZS50b0xvd2VyQ2FzZSgpPT09XCJjbGFzc25hbWVcIil7bmFtZT1cImNsYXNzTmFtZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1tuYW1lXSA9IGEubm9kZVZhbHVlLmxlbmd0aD4wP2Eubm9kZVZhbHVlOnRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLmhvd1JlbmRlckh0bWxbaHRtbHRhZ109PT1cImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxlbGUgPSB0aGlzLmhvd1JlbmRlckh0bWxbaHRtbHRhZ10oaHRtbHRhZyxhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sZWxlID0gc2VsZi5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sdGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaHRtbGVsZS5fX3Byb3RvX18gJiYgaHRtbGVsZS5fX3Byb3RvX18uX2lzUmVhY3RFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIGh0bWxlbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPi4uLntodG1scHJhc2VbMF19IHByYXNlIGZhaWwuLi48L3A+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgbm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1BhcmFncmFwaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ3AnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIZWFkZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdoJyArIG5vZGUubGV2ZWwsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NvZnRicmVhayc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzb2Z0QnJlYWspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU3Ryb25nJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnc3Ryb25nJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGluayc6XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMuaHJlZiA9IG5vZGUuZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy50aXRsZSA9IG5vZGUudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdhJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnNyYyA9IG5vZGUuZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMudGl0bGUgPSBub2RlLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnaW1nJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRW1waCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2VtJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ29kZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtub2RlLmxpdGVyYWxdXHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDb2RlQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9Xb3JkcyA9IG5vZGUuaW5mbyA/IG5vZGUuaW5mby5zcGxpdCgvICsvKSA6IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86aGlnaGxpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaW5mb1dvcmRzWzBdfHxcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlV3JhcHBlci5hcHBlbmRDaGlsZChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGhsanMhPT1cInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhobGpzLmhpZ2hsaWdodEF1dG8obm9kZS5saXRlcmFsLFtpbmZvV29yZHNbMF1dKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBobGpzLmhpZ2hsaWdodEF1dG8obm9kZS5saXRlcmFsLFtpbmZvV29yZHNbMF1dKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgY29kZSA9IHNlbGYuY3JlYXRlRWxlbWVudCgnY29kZScsIGF0dHJzLCBbbm9kZS5saXRlcmFsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoJ3ByZScsIHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmNvZGVXcmFwcGVyLmlubmVySFRNTH19KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdCbG9ja1F1b3RlJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnYmxvY2txdW90ZScsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG5vZGUubGlzdFN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCAhPT0gbnVsbCAmJiBzdGFydCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5zdGFydCA9IHN0YXJ0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsIG5vZGUubGlzdFR5cGUgPT09ICdCdWxsZXQnID8gJ3VsJyA6ICdvbCcsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0l0ZW0nOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdsaScsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hvcml6b250YWxSdWxlJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudCgnaHInLCBhdHRycykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRG9jdW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbm9kZSB0eXBlIFwiJyArIG5vZGUudHlwZSArICdcIicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9jLnJlYWN0LmNoaWxkcmVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNYXJrZG93bk5vZGVFbGVtZW50e1xyXG4gICAgc3RhdGljIHRhZyhub2RlLCBuYW1lLCBhdHRycywgY2hpbGRyZW4pe1xyXG4gICAgICAgIG5vZGUucmVhY3QgPSB7XHJcbiAgICAgICAgICAgIHRhZzogbmFtZSxcclxuICAgICAgICAgICAgcHJvcHM6IGF0dHJzLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4gfHwgW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0dyYW5kUGFyZW50T2ZMaXN0KG5vZGUpe1xyXG4gICAgICAgIGlmKCFub2RlfHwhbm9kZS5wYXJlbnQpe3JldHVybiBmYWxzZX1cclxuICAgICAgICB2YXIgZ3JhbmRwYXJlbnQgPSBub2RlLnBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQgJiZcclxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQudHlwZSA9PT0gJ0xpc3QnICYmXHJcbiAgICAgICAgICAgIGdyYW5kcGFyZW50Lmxpc3RUaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZENoaWxkKG5vZGUsIGNoaWxkKXtcclxuICAgICAgICB2YXIgcGFyZW50ID0gbm9kZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgfSB3aGlsZSAoIXBhcmVudC5yZWFjdCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5yZWFjdC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFnTmFtZVxyXG4gICAgICogQHBhcmFtIHByb3BzXHJcbiAgICAgKiBAcGFyYW0gY2hpbGRyZW5cclxuICAgICAqIEByZXR1cm5zIHtET01FbGVtZW50PEFycmF5PGFueT58YW55W10+fENsYXNzaWNFbGVtZW50PEFycmF5PGFueT58YW55W10+fFJlYWN0RWxlbWVudDxBcnJheTxhbnk+fGFueVtdPn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIGNoaWxkcmVuKXtcclxuICAgICAgICB2YXIgYXJncyA9IFt0YWdOYW1lLCBwcm9wc10uY29uY2F0KGNoaWxkcmVuKTtcclxuICAgICAgICB2YXIgY2hpbGQgPSBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KFJlYWN0LCBhcmdzKTtcclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2NvbnRlbnQvQ29tbW9uTWFya1JlbmRlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBjb21tb25tYXJrLmpzIC0gQ29tbW9tTWFyayBpbiBKYXZhU2NyaXB0XG4vLyBDb3B5cmlnaHQgKEMpIDIwMTQgSm9obiBNYWNGYXJsYW5lXG4vLyBMaWNlbnNlOiBCU0QzLlxuXG4vLyBCYXNpYyB1c2FnZTpcbi8vXG4vLyB2YXIgY29tbW9ubWFyayA9IHJlcXVpcmUoJ2NvbW1vbm1hcmsnKTtcbi8vIHZhciBwYXJzZXIgPSBuZXcgY29tbW9ubWFyay5QYXJzZXIoKTtcbi8vIHZhciByZW5kZXJlciA9IG5ldyBjb21tb25tYXJrLkh0bWxSZW5kZXJlcigpO1xuLy8gY29uc29sZS5sb2cocmVuZGVyZXIucmVuZGVyKHBhcnNlci5wYXJzZSgnSGVsbG8gKndvcmxkKicpKSk7XG5cbm1vZHVsZS5leHBvcnRzLk5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbm1vZHVsZS5leHBvcnRzLlBhcnNlciA9IHJlcXVpcmUoJy4vYmxvY2tzJyk7XG5tb2R1bGUuZXhwb3J0cy5IdG1sUmVuZGVyZXIgPSByZXF1aXJlKCcuL2h0bWwnKTtcbm1vZHVsZS5leHBvcnRzLlhtbFJlbmRlcmVyID0gcmVxdWlyZSgnLi94bWwnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBpc0NvbnRhaW5lcihub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLl90eXBlKSB7XG4gICAgY2FzZSAnRG9jdW1lbnQnOlxuICAgIGNhc2UgJ0Jsb2NrUXVvdGUnOlxuICAgIGNhc2UgJ0xpc3QnOlxuICAgIGNhc2UgJ0l0ZW0nOlxuICAgIGNhc2UgJ1BhcmFncmFwaCc6XG4gICAgY2FzZSAnSGVhZGVyJzpcbiAgICBjYXNlICdFbXBoJzpcbiAgICBjYXNlICdTdHJvbmcnOlxuICAgIGNhc2UgJ0xpbmsnOlxuICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxudmFyIHJlc3VtZUF0ID0gZnVuY3Rpb24obm9kZSwgZW50ZXJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBub2RlO1xuICAgIHRoaXMuZW50ZXJpbmcgPSAoZW50ZXJpbmcgPT09IHRydWUpO1xufTtcblxudmFyIG5leHQgPSBmdW5jdGlvbigpe1xuICAgIHZhciBjdXIgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdmFyIGVudGVyaW5nID0gdGhpcy5lbnRlcmluZztcblxuICAgIGlmIChjdXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGlzQ29udGFpbmVyKGN1cik7XG5cbiAgICBpZiAoZW50ZXJpbmcgJiYgY29udGFpbmVyKSB7XG4gICAgICAgIGlmIChjdXIuX2ZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGN1ci5fZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc3RheSBvbiBub2RlIGJ1dCBleGl0XG4gICAgICAgICAgICB0aGlzLmVudGVyaW5nID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoY3VyID09PSB0aGlzLnJvb3QpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcblxuICAgIH0gZWxzZSBpZiAoY3VyLl9uZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1ci5fcGFyZW50O1xuICAgICAgICB0aGlzLmVudGVyaW5nID0gZmFsc2U7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXIuX25leHQ7XG4gICAgICAgIHRoaXMuZW50ZXJpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7ZW50ZXJpbmc6IGVudGVyaW5nLCBub2RlOiBjdXJ9O1xufTtcblxudmFyIE5vZGVXYWxrZXIgPSBmdW5jdGlvbihyb290KSB7XG4gICAgcmV0dXJuIHsgY3VycmVudDogcm9vdCxcbiAgICAgICAgICAgICByb290OiByb290LFxuICAgICAgICAgICAgIGVudGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgIG5leHQ6IG5leHQsXG4gICAgICAgICAgICAgcmVzdW1lQXQ6IHJlc3VtZUF0IH07XG59O1xuXG52YXIgTm9kZSA9IGZ1bmN0aW9uKG5vZGVUeXBlLCBzb3VyY2Vwb3MpIHtcbiAgICB0aGlzLl90eXBlID0gbm9kZVR5cGU7XG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9maXJzdENoaWxkID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q2hpbGQgPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICAgIHRoaXMuX25leHQgPSBudWxsO1xuICAgIHRoaXMuX3NvdXJjZXBvcyA9IHNvdXJjZXBvcztcbiAgICB0aGlzLl9sYXN0TGluZUJsYW5rID0gZmFsc2U7XG4gICAgdGhpcy5fb3BlbiA9IHRydWU7XG4gICAgdGhpcy5fc3RyaW5nX2NvbnRlbnQgPSBudWxsO1xuICAgIHRoaXMuX2xpdGVyYWwgPSBudWxsO1xuICAgIHRoaXMuX2xpc3REYXRhID0gbnVsbDtcbiAgICB0aGlzLl9pbmZvID0gbnVsbDtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgIHRoaXMuX2lzRmVuY2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZmVuY2VDaGFyID0gbnVsbDtcbiAgICB0aGlzLl9mZW5jZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZmVuY2VPZmZzZXQgPSBudWxsO1xuICAgIHRoaXMuX2xldmVsID0gbnVsbDtcbn07XG5cbnZhciBwcm90byA9IE5vZGUucHJvdG90eXBlO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdpc0NvbnRhaW5lcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzQ29udGFpbmVyKHRoaXMpOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAndHlwZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2ZpcnN0Q2hpbGQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2ZpcnN0Q2hpbGQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsYXN0Q2hpbGQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xhc3RDaGlsZDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ25leHQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX25leHQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwcmV2Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9wcmV2OyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAncGFyZW50Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdzb3VyY2Vwb3MnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3NvdXJjZXBvczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpdGVyYWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpdGVyYWw7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2xpdGVyYWwgPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZGVzdGluYXRpb24nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl9kZXN0aW5hdGlvbiA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICd0aXRsZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX3RpdGxlID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2luZm8nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2luZm87IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2luZm8gPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGV2ZWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xldmVsOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl9sZXZlbCA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0VHlwZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEudHlwZTsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHQpIHsgdGhpcy5fbGlzdERhdGEudHlwZSA9IHQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0VGlnaHQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLnRpZ2h0OyB9LFxuICAgIHNldDogZnVuY3Rpb24odCkgeyB0aGlzLl9saXN0RGF0YS50aWdodCA9IHQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0U3RhcnQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLnN0YXJ0OyB9LFxuICAgIHNldDogZnVuY3Rpb24obikgeyB0aGlzLl9saXN0RGF0YS5zdGFydCA9IG47IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0RGVsaW1pdGVyJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXN0RGF0YS5kZWxpbWl0ZXI7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihkZWxpbSkgeyB0aGlzLl9saXN0RGF0YS5kZWxpbWl0ZXIgPSBkZWxpbTsgfVxufSk7XG5cbk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24oY2hpbGQpIHtcbiAgICBjaGlsZC51bmxpbmsoKTtcbiAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcbiAgICBpZiAodGhpcy5fbGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZC5fbmV4dCA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5fcHJldiA9IHRoaXMuX2xhc3RDaGlsZDtcbiAgICAgICAgdGhpcy5fbGFzdENoaWxkID0gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbihjaGlsZCkge1xuICAgIGNoaWxkLnVubGluaygpO1xuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hpbGQuX3ByZXYgPSBjaGlsZDtcbiAgICAgICAgY2hpbGQuX25leHQgPSB0aGlzLl9maXJzdENoaWxkO1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcHJldikge1xuICAgICAgICB0aGlzLl9wcmV2Ll9uZXh0ID0gdGhpcy5fbmV4dDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuX2ZpcnN0Q2hpbGQgPSB0aGlzLl9uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmV4dCkge1xuICAgICAgICB0aGlzLl9uZXh0Ll9wcmV2ID0gdGhpcy5fcHJldjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuX2xhc3RDaGlsZCA9IHRoaXMuX3ByZXY7XG4gICAgfVxuICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fbmV4dCA9IG51bGw7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG59O1xuXG5Ob2RlLnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uKHNpYmxpbmcpIHtcbiAgICBzaWJsaW5nLnVubGluaygpO1xuICAgIHNpYmxpbmcuX25leHQgPSB0aGlzLl9uZXh0O1xuICAgIGlmIChzaWJsaW5nLl9uZXh0KSB7XG4gICAgICAgIHNpYmxpbmcuX25leHQuX3ByZXYgPSBzaWJsaW5nO1xuICAgIH1cbiAgICBzaWJsaW5nLl9wcmV2ID0gdGhpcztcbiAgICB0aGlzLl9uZXh0ID0gc2libGluZztcbiAgICBzaWJsaW5nLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgaWYgKCFzaWJsaW5nLl9uZXh0KSB7XG4gICAgICAgIHNpYmxpbmcuX3BhcmVudC5fbGFzdENoaWxkID0gc2libGluZztcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbihzaWJsaW5nKSB7XG4gICAgc2libGluZy51bmxpbmsoKTtcbiAgICBzaWJsaW5nLl9wcmV2ID0gdGhpcy5fcHJldjtcbiAgICBpZiAoc2libGluZy5fcHJldikge1xuICAgICAgICBzaWJsaW5nLl9wcmV2Ll9uZXh0ID0gc2libGluZztcbiAgICB9XG4gICAgc2libGluZy5fbmV4dCA9IHRoaXM7XG4gICAgdGhpcy5fcHJldiA9IHNpYmxpbmc7XG4gICAgc2libGluZy5fcGFyZW50ID0gdGhpcy5fcGFyZW50O1xuICAgIGlmICghc2libGluZy5fcHJldikge1xuICAgICAgICBzaWJsaW5nLl9wYXJlbnQuX2ZpcnN0Q2hpbGQgPSBzaWJsaW5nO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLndhbGtlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3YWxrZXIgPSBuZXcgTm9kZVdhbGtlcih0aGlzKTtcbiAgICByZXR1cm4gd2Fsa2VyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlO1xuXG5cbi8qIEV4YW1wbGUgb2YgdXNlIG9mIHdhbGtlcjpcblxuIHZhciB3YWxrZXIgPSB3LndhbGtlcigpO1xuIHZhciBldmVudDtcblxuIHdoaWxlIChldmVudCA9IHdhbGtlci5uZXh0KCkpIHtcbiBjb25zb2xlLmxvZyhldmVudC5lbnRlcmluZywgZXZlbnQubm9kZS50eXBlKTtcbiB9XG5cbiAqL1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvbm9kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbnZhciB1bmVzY2FwZVN0cmluZyA9IHJlcXVpcmUoJy4vY29tbW9uJykudW5lc2NhcGVTdHJpbmc7XG52YXIgT1BFTlRBRyA9IHJlcXVpcmUoJy4vY29tbW9uJykuT1BFTlRBRztcbnZhciBDTE9TRVRBRyA9IHJlcXVpcmUoJy4vY29tbW9uJykuQ0xPU0VUQUc7XG5cbnZhciBDT0RFX0lOREVOVCA9IDQ7XG5cbnZhciBDX05FV0xJTkUgPSAxMDtcbnZhciBDX0dSRUFURVJUSEFOID0gNjI7XG52YXIgQ19MRVNTVEhBTiA9IDYwO1xudmFyIENfU1BBQ0UgPSAzMjtcbnZhciBDX09QRU5fQlJBQ0tFVCA9IDkxO1xuXG52YXIgSW5saW5lUGFyc2VyID0gcmVxdWlyZSgnLi9pbmxpbmVzJyk7XG5cbnZhciByZUh0bWxCbG9ja09wZW4gPSBbXG4gICAvLi8sIC8vIGR1bW15IGZvciAwXG4gICAvXjwoPzpzY3JpcHR8cHJlfHN0eWxlKSg/Olxcc3w+fCQpL2ksXG4gICAvXjwhLS0vLFxuICAgL148Wz9dLyxcbiAgIC9ePCFbQS1aXS8sXG4gICAvXjwhXFxbQ0RBVEFcXFsvLFxuICAgL148Wy9dPyg/OmFkZHJlc3N8YXJ0aWNsZXxhc2lkZXxiYXNlfGJhc2Vmb250fGJsb2NrcXVvdGV8Ym9keXxjYXB0aW9ufGNlbnRlcnxjb2x8Y29sZ3JvdXB8ZGR8ZGV0YWlsc3xkaWFsb2d8ZGlyfGRpdnxkbHxkdHxmaWVsZHNldHxmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8Zm9ybXxmcmFtZXxmcmFtZXNldHxoMXxoZWFkfGhlYWRlcnxocnxodG1sfGxlZ2VuZHxsaXxsaW5rfG1haW58bWVudXxtZW51aXRlbXxtZXRhfG5hdnxub2ZyYW1lc3xvbHxvcHRncm91cHxvcHRpb258cHxwYXJhbXxwcmV8c2VjdGlvbnxzb3VyY2V8dGl0bGV8c3VtbWFyeXx0YWJsZXx0Ym9keXx0ZHx0Zm9vdHx0aHx0aGVhZHx0aXRsZXx0cnx0cmFja3x1bCkoPzpcXHN8Wy9dP1s+XXwkKS9pLFxuICAgIG5ldyBSZWdFeHAoJ14oPzonICsgT1BFTlRBRyArICd8JyArIENMT1NFVEFHICsgJylcXHMqJCcsICdpJylcbl07XG5cbnZhciByZUh0bWxCbG9ja0Nsb3NlID0gW1xuICAgLy4vLCAvLyBkdW1teSBmb3IgMFxuICAgLzxcXC8oPzpzY3JpcHR8cHJlfHN0eWxlKT4vaSxcbiAgIC8tLT4vLFxuICAgL1xcPz4vLFxuICAgLz4vLFxuICAgL1xcXVxcXT4vXG5dO1xuXG52YXIgcmVIcnVsZSA9IC9eKD86KD86XFwqICopezMsfXwoPzpfICopezMsfXwoPzotICopezMsfSkgKiQvO1xuXG52YXIgcmVNYXliZVNwZWNpYWwgPSAvXlsjYH4qK189PD4wLTktXS87XG5cbnZhciByZU5vblNwYWNlID0gL1teIFxcdFxcZlxcdlxcclxcbl0vO1xuXG52YXIgcmVCdWxsZXRMaXN0TWFya2VyID0gL15bKistXSggK3wkKS87XG5cbnZhciByZU9yZGVyZWRMaXN0TWFya2VyID0gL14oXFxkezEsOX0pKFsuKV0pKCArfCQpLztcblxudmFyIHJlQVRYSGVhZGVyTWFya2VyID0gL14jezEsNn0oPzogK3wkKS87XG5cbnZhciByZUNvZGVGZW5jZSA9IC9eYHszLH0oPyEuKmApfF5+ezMsfSg/IS4qfikvO1xuXG52YXIgcmVDbG9zaW5nQ29kZUZlbmNlID0gL14oPzpgezMsfXx+ezMsfSkoPz0gKiQpLztcblxudmFyIHJlU2V0ZXh0SGVhZGVyTGluZSA9IC9eKD86PSt8LSspICokLztcblxudmFyIHJlTGluZUVuZGluZyA9IC9cXHJcXG58XFxufFxcci87XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiBzdHJpbmcgY29udGFpbnMgb25seSBzcGFjZSBjaGFyYWN0ZXJzLlxudmFyIGlzQmxhbmsgPSBmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuICEocmVOb25TcGFjZS50ZXN0KHMpKTtcbn07XG5cbnZhciBwZWVrID0gZnVuY3Rpb24obG4sIHBvcykge1xuICAgIGlmIChwb3MgPCBsbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxuLmNoYXJDb2RlQXQocG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufTtcblxuLy8gRE9DIFBBUlNFUlxuXG4vLyBUaGVzZSBhcmUgbWV0aG9kcyBvZiBhIFBhcnNlciBvYmplY3QsIGRlZmluZWQgYmVsb3cuXG5cbi8vIFJldHVybnMgdHJ1ZSBpZiBibG9jayBlbmRzIHdpdGggYSBibGFuayBsaW5lLCBkZXNjZW5kaW5nIGlmIG5lZWRlZFxuLy8gaW50byBsaXN0cyBhbmQgc3VibGlzdHMuXG52YXIgZW5kc1dpdGhCbGFua0xpbmUgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHdoaWxlIChibG9jaykge1xuICAgICAgICBpZiAoYmxvY2suX2xhc3RMaW5lQmxhbmspIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gYmxvY2sudHlwZTtcbiAgICAgICAgaWYgKHQgPT09ICdMaXN0JyB8fCB0ID09PSAnSXRlbScpIHtcbiAgICAgICAgICAgIGJsb2NrID0gYmxvY2suX2xhc3RDaGlsZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIEJyZWFrIG91dCBvZiBhbGwgY29udGFpbmluZyBsaXN0cywgcmVzZXR0aW5nIHRoZSB0aXAgb2YgdGhlXG4vLyBkb2N1bWVudCB0byB0aGUgcGFyZW50IG9mIHRoZSBoaWdoZXN0IGxpc3QsIGFuZCBmaW5hbGl6aW5nXG4vLyBhbGwgdGhlIGxpc3RzLiAgKFRoaXMgaXMgdXNlZCB0byBpbXBsZW1lbnQgdGhlIFwidHdvIGJsYW5rIGxpbmVzXG4vLyBicmVhayBvZiBvZiBhbGwgbGlzdHNcIiBmZWF0dXJlLilcbnZhciBicmVha091dE9mTGlzdHMgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBiID0gYmxvY2s7XG4gICAgdmFyIGxhc3RfbGlzdCA9IG51bGw7XG4gICAgZG8ge1xuICAgICAgICBpZiAoYi50eXBlID09PSAnTGlzdCcpIHtcbiAgICAgICAgICAgIGxhc3RfbGlzdCA9IGI7XG4gICAgICAgIH1cbiAgICAgICAgYiA9IGIuX3BhcmVudDtcbiAgICB9IHdoaWxlIChiKTtcblxuICAgIGlmIChsYXN0X2xpc3QpIHtcbiAgICAgICAgd2hpbGUgKGJsb2NrICE9PSBsYXN0X2xpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZmluYWxpemUoYmxvY2ssIHRoaXMubGluZU51bWJlcik7XG4gICAgICAgICAgICBibG9jayA9IGJsb2NrLl9wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5hbGl6ZShsYXN0X2xpc3QsIHRoaXMubGluZU51bWJlcik7XG4gICAgICAgIHRoaXMudGlwID0gbGFzdF9saXN0Ll9wYXJlbnQ7XG4gICAgfVxufTtcblxuLy8gQWRkIGEgbGluZSB0byB0aGUgYmxvY2sgYXQgdGhlIHRpcC4gIFdlIGFzc3VtZSB0aGUgdGlwXG4vLyBjYW4gYWNjZXB0IGxpbmVzIC0tIHRoYXQgY2hlY2sgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIGNhbGxpbmcgdGhpcy5cbnZhciBhZGRMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50aXAuX3N0cmluZ19jb250ZW50ICs9IHRoaXMuY3VycmVudExpbmUuc2xpY2UodGhpcy5vZmZzZXQpICsgJ1xcbic7XG59O1xuXG4vLyBBZGQgYmxvY2sgb2YgdHlwZSB0YWcgYXMgYSBjaGlsZCBvZiB0aGUgdGlwLiAgSWYgdGhlIHRpcCBjYW4ndFxuLy8gYWNjZXB0IGNoaWxkcmVuLCBjbG9zZSBhbmQgZmluYWxpemUgaXQgYW5kIHRyeSBpdHMgcGFyZW50LFxuLy8gYW5kIHNvIG9uIHRpbCB3ZSBmaW5kIGEgYmxvY2sgdGhhdCBjYW4gYWNjZXB0IGNoaWxkcmVuLlxudmFyIGFkZENoaWxkID0gZnVuY3Rpb24odGFnLCBvZmZzZXQpIHtcbiAgICB3aGlsZSAoIXRoaXMuYmxvY2tzW3RoaXMudGlwLnR5cGVdLmNhbkNvbnRhaW4odGFnKSkge1xuICAgICAgICB0aGlzLmZpbmFsaXplKHRoaXMudGlwLCB0aGlzLmxpbmVOdW1iZXIgLSAxKTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uX251bWJlciA9IG9mZnNldCArIDE7IC8vIG9mZnNldCAwID0gY29sdW1uIDFcbiAgICB2YXIgbmV3QmxvY2sgPSBuZXcgTm9kZSh0YWcsIFtbdGhpcy5saW5lTnVtYmVyLCBjb2x1bW5fbnVtYmVyXSwgWzAsIDBdXSk7XG4gICAgbmV3QmxvY2suX3N0cmluZ19jb250ZW50ID0gJyc7XG4gICAgdGhpcy50aXAuYXBwZW5kQ2hpbGQobmV3QmxvY2spO1xuICAgIHRoaXMudGlwID0gbmV3QmxvY2s7XG4gICAgcmV0dXJuIG5ld0Jsb2NrO1xufTtcblxuLy8gUGFyc2UgYSBsaXN0IG1hcmtlciBhbmQgcmV0dXJuIGRhdGEgb24gdGhlIG1hcmtlciAodHlwZSxcbi8vIHN0YXJ0LCBkZWxpbWl0ZXIsIGJ1bGxldCBjaGFyYWN0ZXIsIHBhZGRpbmcpIG9yIG51bGwuXG52YXIgcGFyc2VMaXN0TWFya2VyID0gZnVuY3Rpb24obG4sIG9mZnNldCwgaW5kZW50KSB7XG4gICAgdmFyIHJlc3QgPSBsbi5zbGljZShvZmZzZXQpO1xuICAgIHZhciBtYXRjaDtcbiAgICB2YXIgc3BhY2VzX2FmdGVyX21hcmtlcjtcbiAgICB2YXIgZGF0YSA9IHsgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgdGlnaHQ6IHRydWUsICAvLyBsaXN0cyBhcmUgdGlnaHQgYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgICBidWxsZXRDaGFyOiBudWxsLFxuICAgICAgICAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICBtYXJrZXJPZmZzZXQ6IGluZGVudCB9O1xuICAgIGlmICgobWF0Y2ggPSByZXN0Lm1hdGNoKHJlQnVsbGV0TGlzdE1hcmtlcikpKSB7XG4gICAgICAgIHNwYWNlc19hZnRlcl9tYXJrZXIgPSBtYXRjaFsxXS5sZW5ndGg7XG4gICAgICAgIGRhdGEudHlwZSA9ICdCdWxsZXQnO1xuICAgICAgICBkYXRhLmJ1bGxldENoYXIgPSBtYXRjaFswXVswXTtcblxuICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gcmVzdC5tYXRjaChyZU9yZGVyZWRMaXN0TWFya2VyKSkpIHtcbiAgICAgICAgc3BhY2VzX2FmdGVyX21hcmtlciA9IG1hdGNoWzNdLmxlbmd0aDtcbiAgICAgICAgZGF0YS50eXBlID0gJ09yZGVyZWQnO1xuICAgICAgICBkYXRhLnN0YXJ0ID0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgICAgICBkYXRhLmRlbGltaXRlciA9IG1hdGNoWzJdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgYmxhbmtfaXRlbSA9IG1hdGNoWzBdLmxlbmd0aCA9PT0gcmVzdC5sZW5ndGg7XG4gICAgaWYgKHNwYWNlc19hZnRlcl9tYXJrZXIgPj0gNSB8fFxuICAgICAgICBzcGFjZXNfYWZ0ZXJfbWFya2VyIDwgMSB8fFxuICAgICAgICBibGFua19pdGVtKSB7XG4gICAgICAgIGRhdGEucGFkZGluZyA9IG1hdGNoWzBdLmxlbmd0aCAtIHNwYWNlc19hZnRlcl9tYXJrZXIgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEucGFkZGluZyA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBsaXN0IGl0ZW1zIGFyZSBvZiB0aGUgc2FtZSB0eXBlLFxuLy8gd2l0aCB0aGUgc2FtZSBkZWxpbWl0ZXIgYW5kIGJ1bGxldCBjaGFyYWN0ZXIuICBUaGlzIGlzIHVzZWRcbi8vIGluIGFnZ2xvbWVyYXRpbmcgbGlzdCBpdGVtcyBpbnRvIGxpc3RzLlxudmFyIGxpc3RzTWF0Y2ggPSBmdW5jdGlvbihsaXN0X2RhdGEsIGl0ZW1fZGF0YSkge1xuICAgIHJldHVybiAobGlzdF9kYXRhLnR5cGUgPT09IGl0ZW1fZGF0YS50eXBlICYmXG4gICAgICAgICAgICBsaXN0X2RhdGEuZGVsaW1pdGVyID09PSBpdGVtX2RhdGEuZGVsaW1pdGVyICYmXG4gICAgICAgICAgICBsaXN0X2RhdGEuYnVsbGV0Q2hhciA9PT0gaXRlbV9kYXRhLmJ1bGxldENoYXIpO1xufTtcblxuLy8gRmluYWxpemUgYW5kIGNsb3NlIGFueSB1bm1hdGNoZWQgYmxvY2tzLiBSZXR1cm5zIHRydWUuXG52YXIgY2xvc2VVbm1hdGNoZWRCbG9ja3MgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuYWxsQ2xvc2VkKSB7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBibG9ja3Mgbm90IG1hdGNoZWRcbiAgICAgICAgd2hpbGUgKHRoaXMub2xkdGlwICE9PSB0aGlzLmxhc3RNYXRjaGVkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5vbGR0aXAuX3BhcmVudDtcbiAgICAgICAgICAgIHRoaXMuZmluYWxpemUodGhpcy5vbGR0aXAsIHRoaXMubGluZU51bWJlciAtIDEpO1xuICAgICAgICAgICAgdGhpcy5vbGR0aXAgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGxDbG9zZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbi8vICdmaW5hbGl6ZScgaXMgcnVuIHdoZW4gdGhlIGJsb2NrIGlzIGNsb3NlZC5cbi8vICdjb250aW51ZScgaXMgcnVuIHRvIGNoZWNrIHdoZXRoZXIgdGhlIGJsb2NrIGlzIGNvbnRpbnVpbmdcbi8vIGF0IGEgY2VydGFpbiBsaW5lIGFuZCBvZmZzZXQgKGUuZy4gd2hldGhlciBhIGJsb2NrIHF1b3RlXG4vLyBjb250YWlucyBhIGA+YC4gIEl0IHJldHVybnMgMCBmb3IgbWF0Y2hlZCwgMSBmb3Igbm90IG1hdGNoZWQsXG4vLyBhbmQgMiBmb3IgXCJ3ZSd2ZSBkZWFsdCB3aXRoIHRoaXMgbGluZSBjb21wbGV0ZWx5LCBnbyB0byBuZXh0LlwiXG52YXIgYmxvY2tzID0ge1xuICAgIERvY3VtZW50OiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCAhPT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgTGlzdDoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBibG9jay5fZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG5vbi1maW5hbCBsaXN0IGl0ZW0gZW5kaW5nIHdpdGggYmxhbmsgbGluZTpcbiAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGhCbGFua0xpbmUoaXRlbSkgJiYgaXRlbS5fbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBibG9jay5fbGlzdERhdGEudGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaW50byBjaGlsZHJlbiBvZiBsaXN0IGl0ZW0sIHRvIHNlZSBpZiB0aGVyZSBhcmVcbiAgICAgICAgICAgICAgICAvLyBzcGFjZXMgYmV0d2VlbiBhbnkgb2YgdGhlbTpcbiAgICAgICAgICAgICAgICB2YXIgc3ViaXRlbSA9IGl0ZW0uX2ZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHN1Yml0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoQmxhbmtMaW5lKHN1Yml0ZW0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5fbmV4dCB8fCBzdWJpdGVtLl9uZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suX2xpc3REYXRhLnRpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJpdGVtID0gc3ViaXRlbS5fbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uX25leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0ID09PSAnSXRlbScpOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBCbG9ja1F1b3RlOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgICAgIHZhciBsbiA9IHBhcnNlci5jdXJyZW50TGluZTtcbiAgICAgICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICAgICAgcGVlayhsbiwgcGFyc2VyLm5leHROb25zcGFjZSkgPT09IENfR1JFQVRFUlRIQU4pIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVlayhsbiwgcGFyc2VyLm9mZnNldCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLm9mZnNldCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0ICE9PSAnSXRlbScpOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBJdGVtOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHBhcnNlci5ibGFuaykge1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlci5pbmRlbnQgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YS5tYXJrZXJPZmZzZXQgK1xuICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChjb250YWluZXIuX2xpc3REYXRhLm1hcmtlck9mZnNldCArXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEucGFkZGluZywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCAhPT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgSGVhZGVyOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGEgaGVhZGVyIGNhbiBuZXZlciBjb250YWluZXIgPiAxIGxpbmUsIHNvIGZhaWwgdG8gbWF0Y2g6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIEhvcml6b250YWxSdWxlOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGFuIGhydWxlIGNhbiBuZXZlciBjb250YWluZXIgPiAxIGxpbmUsIHNvIGZhaWwgdG8gbWF0Y2g6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIENvZGVCbG9jazoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBsbiA9IHBhcnNlci5jdXJyZW50TGluZTtcbiAgICAgICAgICAgIHZhciBpbmRlbnQgPSBwYXJzZXIuaW5kZW50O1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5faXNGZW5jZWQpIHsgLy8gZmVuY2VkXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gKGluZGVudCA8PSAzICYmXG4gICAgICAgICAgICAgICAgICAgIGxuLmNoYXJBdChwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gY29udGFpbmVyLl9mZW5jZUNoYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgbG4uc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVDbG9zaW5nQ29kZUZlbmNlKSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzBdLmxlbmd0aCA+PSBjb250YWluZXIuX2ZlbmNlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3NpbmcgZmVuY2UgLSB3ZSdyZSBhdCBlbmQgb2YgbGluZSwgc28gd2UgY2FuIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuZmluYWxpemUoY29udGFpbmVyLCBwYXJzZXIubGluZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgb3B0aW9uYWwgc3BhY2VzIG9mIGZlbmNlIG9mZnNldFxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNvbnRhaW5lci5fZmVuY2VPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBwZWVrKGxuLCBwYXJzZXIub2Zmc2V0KSA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaW5kZW50ZWRcbiAgICAgICAgICAgICAgICBpZiAoaW5kZW50ID49IENPREVfSU5ERU5UKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KENPREVfSU5ERU5ULCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlci5ibGFuaykge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgaWYgKGJsb2NrLl9pc0ZlbmNlZCkgeyAvLyBmZW5jZWRcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBsaW5lIGJlY29tZXMgaW5mbyBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGJsb2NrLl9zdHJpbmdfY29udGVudDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3bGluZVBvcyA9IGNvbnRlbnQuaW5kZXhPZignXFxuJyk7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0TGluZSA9IGNvbnRlbnQuc2xpY2UoMCwgbmV3bGluZVBvcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3QgPSBjb250ZW50LnNsaWNlKG5ld2xpbmVQb3MgKyAxKTtcbiAgICAgICAgICAgICAgICBibG9jay5pbmZvID0gdW5lc2NhcGVTdHJpbmcoZmlyc3RMaW5lLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgYmxvY2suX2xpdGVyYWwgPSByZXN0O1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaW5kZW50ZWRcbiAgICAgICAgICAgICAgICBibG9jay5fbGl0ZXJhbCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC5yZXBsYWNlKC8oXFxuICopKyQvLCAnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5fc3RyaW5nX2NvbnRlbnQgPSBudWxsOyAvLyBhbGxvdyBHQ1xuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IHRydWVcbiAgICB9LFxuICAgIEh0bWxCbG9jazoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoKHBhcnNlci5ibGFuayAmJlxuICAgICAgICAgICAgICAgICAgICAgKGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA9PT0gNiB8fFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA9PT0gNykpID8gMSA6IDApO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgYmxvY2suX2xpdGVyYWwgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQucmVwbGFjZSgvKFxcbiAqKSskLywgJycpO1xuICAgICAgICAgICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gbnVsbDsgLy8gYWxsb3cgR0NcbiAgICAgICAgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiB0cnVlXG4gICAgfSxcbiAgICBQYXJhZ3JhcGg6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICAgICAgcmV0dXJuIChwYXJzZXIuYmxhbmsgPyAxIDogMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbihwYXJzZXIsIGJsb2NrKSB7XG4gICAgICAgICAgICB2YXIgcG9zO1xuICAgICAgICAgICAgdmFyIGhhc1JlZmVyZW5jZURlZnMgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gdHJ5IHBhcnNpbmcgdGhlIGJlZ2lubmluZyBhcyBsaW5rIHJlZmVyZW5jZSBkZWZpbml0aW9uczpcbiAgICAgICAgICAgIHdoaWxlIChwZWVrKGJsb2NrLl9zdHJpbmdfY29udGVudCwgMCkgPT09IENfT1BFTl9CUkFDS0VUICYmXG4gICAgICAgICAgICAgICAgICAgKHBvcyA9XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5pbmxpbmVQYXJzZXIucGFyc2VSZWZlcmVuY2UoYmxvY2suX3N0cmluZ19jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5yZWZtYXApKSkge1xuICAgICAgICAgICAgICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC5zbGljZShwb3MpO1xuICAgICAgICAgICAgICAgIGhhc1JlZmVyZW5jZURlZnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc1JlZmVyZW5jZURlZnMgJiYgaXNCbGFuayhibG9jay5fc3RyaW5nX2NvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sudW5saW5rKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogdHJ1ZVxuICAgIH1cbn07XG5cbi8vIGJsb2NrIHN0YXJ0IGZ1bmN0aW9ucy4gIFJldHVybiB2YWx1ZXM6XG4vLyAwID0gbm8gbWF0Y2hcbi8vIDEgPSBtYXRjaGVkIGNvbnRhaW5lciwga2VlcCBnb2luZ1xuLy8gMiA9IG1hdGNoZWQgbGVhZiwgbm8gbW9yZSBibG9jayBzdGFydHNcbnZhciBibG9ja1N0YXJ0cyA9IFtcbiAgICAvLyBibG9jayBxdW90ZVxuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgcGVlayhwYXJzZXIuY3VycmVudExpbmUsIHBhcnNlci5uZXh0Tm9uc3BhY2UpID09PSBDX0dSRUFURVJUSEFOKSB7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gb3B0aW9uYWwgZm9sbG93aW5nIHNwYWNlXG4gICAgICAgICAgICBpZiAocGVlayhwYXJzZXIuY3VycmVudExpbmUsIHBhcnNlci5vZmZzZXQpID09PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWRkQ2hpbGQoJ0Jsb2NrUXVvdGUnLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQVRYIGhlYWRlclxuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICAobWF0Y2ggPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVBVFhIZWFkZXJNYXJrZXIpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KG1hdGNoWzBdLmxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gcGFyc2VyLmFkZENoaWxkKCdIZWFkZXInLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5sZXZlbCA9IG1hdGNoWzBdLnRyaW0oKS5sZW5ndGg7IC8vIG51bWJlciBvZiAjc1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRyYWlsaW5nICMjI3M6XG4gICAgICAgICAgICBjb250YWluZXIuX3N0cmluZ19jb250ZW50ID1cbiAgICAgICAgICAgICAgICBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm9mZnNldCkucmVwbGFjZSgvXiAqIysgKiQvLCAnJykucmVwbGFjZSgvICsjKyAqJC8sICcnKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KHBhcnNlci5jdXJyZW50TGluZS5sZW5ndGggLSBwYXJzZXIub2Zmc2V0KTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRmVuY2VkIGNvZGUgYmxvY2tcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgKG1hdGNoID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlQ29kZUZlbmNlKSkpIHtcbiAgICAgICAgICAgIHZhciBmZW5jZUxlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnQ29kZUJsb2NrJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBjb250YWluZXIuX2lzRmVuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fZmVuY2VMZW5ndGggPSBmZW5jZUxlbmd0aDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fZmVuY2VDaGFyID0gbWF0Y2hbMF1bMF07XG4gICAgICAgICAgICBjb250YWluZXIuX2ZlbmNlT2Zmc2V0ID0gcGFyc2VyLmluZGVudDtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChmZW5jZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBIVE1MIGJsb2NrXG4gICAgZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHBlZWsocGFyc2VyLmN1cnJlbnRMaW5lLCBwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gQ19MRVNTVEhBTikge1xuICAgICAgICAgICAgdmFyIHMgPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICB2YXIgYmxvY2tUeXBlO1xuXG4gICAgICAgICAgICBmb3IgKGJsb2NrVHlwZSA9IDE7IGJsb2NrVHlwZSA8PSA3OyBibG9ja1R5cGUrKykge1xuICAgICAgICAgICAgICAgIGlmIChyZUh0bWxCbG9ja09wZW5bYmxvY2tUeXBlXS50ZXN0KHMpICYmXG4gICAgICAgICAgICAgICAgICAgIChibG9ja1R5cGUgPCA3IHx8XG4gICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudHlwZSAhPT0gJ1BhcmFncmFwaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBhZGp1c3QgcGFyc2VyLm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2VzIGFyZSBwYXJ0IG9mIHRoZSBIVE1MIGJsb2NrOlxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHBhcnNlci5hZGRDaGlsZCgnSHRtbEJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIGIuX2h0bWxCbG9ja1R5cGUgPSBibG9ja1R5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgfSxcblxuICAgIC8vIFNldGV4dCBoZWFkZXJcbiAgICBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICBjb250YWluZXIudHlwZSA9PT0gJ1BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgICAgICAgICAoY29udGFpbmVyLl9zdHJpbmdfY29udGVudC5pbmRleE9mKCdcXG4nKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX3N0cmluZ19jb250ZW50Lmxlbmd0aCAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgKChtYXRjaCA9IHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKS5tYXRjaChyZVNldGV4dEhlYWRlckxpbmUpKSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IG5ldyBOb2RlKCdIZWFkZXInLCBjb250YWluZXIuc291cmNlcG9zKTtcbiAgICAgICAgICAgIGhlYWRlci5sZXZlbCA9IG1hdGNoWzBdWzBdID09PSAnPScgPyAxIDogMjtcbiAgICAgICAgICAgIGhlYWRlci5fc3RyaW5nX2NvbnRlbnQgPSBjb250YWluZXIuX3N0cmluZ19jb250ZW50O1xuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEFmdGVyKGhlYWRlcik7XG4gICAgICAgICAgICBjb250YWluZXIudW5saW5rKCk7XG4gICAgICAgICAgICBwYXJzZXIudGlwID0gaGVhZGVyO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQocGFyc2VyLmN1cnJlbnRMaW5lLmxlbmd0aCAtIHBhcnNlci5vZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gaHJ1bGVcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHJlSHJ1bGUudGVzdChwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkpKSB7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZGRDaGlsZCgnSG9yaXpvbnRhbFJ1bGUnLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KHBhcnNlci5jdXJyZW50TGluZS5sZW5ndGggLSBwYXJzZXIub2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGxpc3QgaXRlbVxuICAgIGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKChkYXRhID0gcGFyc2VMaXN0TWFya2VyKHBhcnNlci5jdXJyZW50TGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5uZXh0Tm9uc3BhY2UsIHBhcnNlci5pbmRlbnQpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBpZiAocGFyc2VyLmluZGVudGVkICYmIHBhcnNlci50aXAudHlwZSAhPT0gJ0xpc3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgLy8gcmVjYWxjdWxhdGUgZGF0YS5wYWRkaW5nLCB0YWtpbmcgaW50byBhY2NvdW50IHRhYnM6XG4gICAgICAgICAgICBpID0gcGFyc2VyLmNvbHVtbjtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KGRhdGEucGFkZGluZywgZmFsc2UpO1xuICAgICAgICAgICAgZGF0YS5wYWRkaW5nID0gcGFyc2VyLmNvbHVtbiAtIGk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbGlzdCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChwYXJzZXIudGlwLnR5cGUgIT09ICdMaXN0JyB8fFxuICAgICAgICAgICAgICAgICEobGlzdHNNYXRjaChjb250YWluZXIuX2xpc3REYXRhLCBkYXRhKSkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0xpc3QnLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhID0gZGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBsaXN0IGl0ZW1cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnSXRlbScsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGluZGVudGVkIGNvZGUgYmxvY2tcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgaWYgKHBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgcGFyc2VyLnRpcC50eXBlICE9PSAnUGFyYWdyYXBoJyAmJlxuICAgICAgICAgICAgIXBhcnNlci5ibGFuaykge1xuICAgICAgICAgICAgLy8gaW5kZW50ZWQgY29kZVxuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoQ09ERV9JTkRFTlQsIHRydWUpO1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWRkQ2hpbGQoJ0NvZGVCbG9jaycsIHBhcnNlci5vZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICB9XG5cbl07XG5cbnZhciBhZHZhbmNlT2Zmc2V0ID0gZnVuY3Rpb24oY291bnQsIGNvbHVtbnMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGNvbHMgPSAwO1xuICAgIHZhciBjdXJyZW50TGluZSA9IHRoaXMuY3VycmVudExpbmU7XG4gICAgd2hpbGUgKGNvbHVtbnMgPyAoY29scyA8IGNvdW50KSA6IChpIDwgY291bnQpKSB7XG4gICAgICAgIGlmIChjdXJyZW50TGluZVt0aGlzLm9mZnNldCArIGldID09PSAnXFx0Jykge1xuICAgICAgICAgICAgY29scyArPSAoNCAtICh0aGlzLmNvbHVtbiAlIDQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbHMgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHRoaXMub2Zmc2V0ICs9IGk7XG4gICAgdGhpcy5jb2x1bW4gKz0gY29scztcbn07XG5cbnZhciBhZHZhbmNlTmV4dE5vbnNwYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vZmZzZXQgPSB0aGlzLm5leHROb25zcGFjZTtcbiAgICB0aGlzLmNvbHVtbiA9IHRoaXMubmV4dE5vbnNwYWNlQ29sdW1uO1xufTtcblxudmFyIGZpbmROZXh0Tm9uc3BhY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudExpbmUgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgIHZhciBpID0gdGhpcy5vZmZzZXQ7XG4gICAgdmFyIGNvbHMgPSB0aGlzLmNvbHVtbjtcbiAgICB2YXIgYztcblxuICAgIHdoaWxlICgoYyA9IGN1cnJlbnRMaW5lLmNoYXJBdChpKSkgIT09ICcnKSB7XG4gICAgICAgIGlmIChjID09PSAnICcpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbHMrKztcbiAgICAgICAgfSBlbHNlIGlmIChjID09PSAnXFx0Jykge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29scyArPSAoNCAtIChjb2xzICUgNCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ibGFuayA9IChjID09PSAnXFxuJyB8fCBjID09PSAnXFxyJyB8fCBjID09PSAnJyk7XG4gICAgdGhpcy5uZXh0Tm9uc3BhY2UgPSBpO1xuICAgIHRoaXMubmV4dE5vbnNwYWNlQ29sdW1uID0gY29scztcbiAgICB0aGlzLmluZGVudCA9IHRoaXMubmV4dE5vbnNwYWNlQ29sdW1uIC0gdGhpcy5jb2x1bW47XG4gICAgdGhpcy5pbmRlbnRlZCA9IHRoaXMuaW5kZW50ID49IENPREVfSU5ERU5UO1xufTtcblxuLy8gQW5hbHl6ZSBhIGxpbmUgb2YgdGV4dCBhbmQgdXBkYXRlIHRoZSBkb2N1bWVudCBhcHByb3ByaWF0ZWx5LlxuLy8gV2UgcGFyc2UgbWFya2Rvd24gdGV4dCBieSBjYWxsaW5nIHRoaXMgb24gZWFjaCBsaW5lIG9mIGlucHV0LFxuLy8gdGhlbiBmaW5hbGl6aW5nIHRoZSBkb2N1bWVudC5cbnZhciBpbmNvcnBvcmF0ZUxpbmUgPSBmdW5jdGlvbihsbikge1xuICAgIHZhciBhbGxfbWF0Y2hlZCA9IHRydWU7XG4gICAgdmFyIHQ7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5kb2M7XG4gICAgdGhpcy5vbGR0aXAgPSB0aGlzLnRpcDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5saW5lTnVtYmVyICs9IDE7XG5cbiAgICAvLyByZXBsYWNlIE5VTCBjaGFyYWN0ZXJzIGZvciBzZWN1cml0eVxuICAgIGlmIChsbi5pbmRleE9mKCdcXHUwMDAwJykgIT09IC0xKSB7XG4gICAgICAgIGxuID0gbG4ucmVwbGFjZSgvXFwwL2csICdcXHVGRkZEJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50TGluZSA9IGxuO1xuXG4gICAgLy8gRm9yIGVhY2ggY29udGFpbmluZyBibG9jaywgdHJ5IHRvIHBhcnNlIHRoZSBhc3NvY2lhdGVkIGxpbmUgc3RhcnQuXG4gICAgLy8gQmFpbCBvdXQgb24gZmFpbHVyZTogY29udGFpbmVyIHdpbGwgcG9pbnQgdG8gdGhlIGxhc3QgbWF0Y2hpbmcgYmxvY2suXG4gICAgLy8gU2V0IGFsbF9tYXRjaGVkIHRvIGZhbHNlIGlmIG5vdCBhbGwgY29udGFpbmVycyBtYXRjaC5cbiAgICB2YXIgbGFzdENoaWxkO1xuICAgIHdoaWxlICgobGFzdENoaWxkID0gY29udGFpbmVyLl9sYXN0Q2hpbGQpICYmIGxhc3RDaGlsZC5fb3Blbikge1xuICAgICAgICBjb250YWluZXIgPSBsYXN0Q2hpbGQ7XG5cbiAgICAgICAgdGhpcy5maW5kTmV4dE5vbnNwYWNlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmJsb2Nrc1tjb250YWluZXIudHlwZV0uY29udGludWUodGhpcywgY29udGFpbmVyKSkge1xuICAgICAgICBjYXNlIDA6IC8vIHdlJ3ZlIG1hdGNoZWQsIGtlZXAgZ29pbmdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6IC8vIHdlJ3ZlIGZhaWxlZCB0byBtYXRjaCBhIGJsb2NrXG4gICAgICAgICAgICBhbGxfbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogLy8gd2UndmUgaGl0IGVuZCBvZiBsaW5lIGZvciBmZW5jZWQgY29kZSBjbG9zZSBhbmQgY2FuIHJldHVyblxuICAgICAgICAgICAgdGhpcy5sYXN0TGluZUxlbmd0aCA9IGxuLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93ICdjb250aW51ZSByZXR1cm5lZCBpbGxlZ2FsIHZhbHVlLCBtdXN0IGJlIDAsIDEsIG9yIDInO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsX21hdGNoZWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5fcGFyZW50OyAvLyBiYWNrIHVwIHRvIGxhc3QgbWF0Y2hpbmcgYmxvY2tcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbGxDbG9zZWQgPSAoY29udGFpbmVyID09PSB0aGlzLm9sZHRpcCk7XG4gICAgdGhpcy5sYXN0TWF0Y2hlZENvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSd2ZSBoaXQgMm5kIGJsYW5rIGxpbmU7IGlmIHNvIGJyZWFrIG91dCBvZiBsaXN0OlxuICAgIGlmICh0aGlzLmJsYW5rICYmIGNvbnRhaW5lci5fbGFzdExpbmVCbGFuaykge1xuICAgICAgICB0aGlzLmJyZWFrT3V0T2ZMaXN0cyhjb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkTGVhZiA9IGNvbnRhaW5lci50eXBlICE9PSAnUGFyYWdyYXBoJyAmJlxuICAgICAgICAgICAgYmxvY2tzW2NvbnRhaW5lci50eXBlXS5hY2NlcHRzTGluZXM7XG4gICAgdmFyIHN0YXJ0cyA9IHRoaXMuYmxvY2tTdGFydHM7XG4gICAgdmFyIHN0YXJ0c0xlbiA9IHN0YXJ0cy5sZW5ndGg7XG4gICAgLy8gVW5sZXNzIGxhc3QgbWF0Y2hlZCBjb250YWluZXIgaXMgYSBjb2RlIGJsb2NrLCB0cnkgbmV3IGNvbnRhaW5lciBzdGFydHMsXG4gICAgLy8gYWRkaW5nIGNoaWxkcmVuIHRvIHRoZSBsYXN0IG1hdGNoZWQgY29udGFpbmVyOlxuICAgIHdoaWxlICghbWF0Y2hlZExlYWYpIHtcblxuICAgICAgICB0aGlzLmZpbmROZXh0Tm9uc3BhY2UoKTtcblxuICAgICAgICAvLyB0aGlzIGlzIGEgbGl0dGxlIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbjpcbiAgICAgICAgaWYgKCF0aGlzLmluZGVudGVkICYmXG4gICAgICAgICAgICAhcmVNYXliZVNwZWNpYWwudGVzdChsbi5zbGljZSh0aGlzLm5leHROb25zcGFjZSkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHN0YXJ0c0xlbikge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHN0YXJ0c1tpXSh0aGlzLCBjb250YWluZXIpO1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMudGlwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLnRpcDtcbiAgICAgICAgICAgICAgICBtYXRjaGVkTGVhZiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBzdGFydHNMZW4pIHsgLy8gbm90aGluZyBtYXRjaGVkXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hhdCByZW1haW5zIGF0IHRoZSBvZmZzZXQgaXMgYSB0ZXh0IGxpbmUuICBBZGQgdGhlIHRleHQgdG8gdGhlXG4gICAgLy8gYXBwcm9wcmlhdGUgY29udGFpbmVyLlxuXG4gICAvLyBGaXJzdCBjaGVjayBmb3IgYSBsYXp5IHBhcmFncmFwaCBjb250aW51YXRpb246XG4gICAgaWYgKCF0aGlzLmFsbENsb3NlZCAmJiAhdGhpcy5ibGFuayAmJlxuICAgICAgICB0aGlzLnRpcC50eXBlID09PSAnUGFyYWdyYXBoJykge1xuICAgICAgICAvLyBsYXp5IHBhcmFncmFwaCBjb250aW51YXRpb25cbiAgICAgICAgdGhpcy5hZGRMaW5lKCk7XG5cbiAgICB9IGVsc2UgeyAvLyBub3QgYSBsYXp5IGNvbnRpbnVhdGlvblxuXG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBibG9ja3Mgbm90IG1hdGNoZWRcbiAgICAgICAgdGhpcy5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICBpZiAodGhpcy5ibGFuayAmJiBjb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250YWluZXIubGFzdENoaWxkLl9sYXN0TGluZUJsYW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQgPSBjb250YWluZXIudHlwZTtcblxuICAgICAgICAvLyBCbG9jayBxdW90ZSBsaW5lcyBhcmUgbmV2ZXIgYmxhbmsgYXMgdGhleSBzdGFydCB3aXRoID5cbiAgICAgICAgLy8gYW5kIHdlIGRvbid0IGNvdW50IGJsYW5rcyBpbiBmZW5jZWQgY29kZSBmb3IgcHVycG9zZXMgb2YgdGlnaHQvbG9vc2VcbiAgICAgICAgLy8gbGlzdHMgb3IgYnJlYWtpbmcgb3V0IG9mIGxpc3RzLiAgV2UgYWxzbyBkb24ndCBzZXQgX2xhc3RMaW5lQmxhbmtcbiAgICAgICAgLy8gb24gYW4gZW1wdHkgbGlzdCBpdGVtLCBvciBpZiB3ZSBqdXN0IGNsb3NlZCBhIGZlbmNlZCBibG9jay5cbiAgICAgICAgdmFyIGxhc3RMaW5lQmxhbmsgPSB0aGlzLmJsYW5rICYmXG4gICAgICAgICAgICAhKHQgPT09ICdCbG9ja1F1b3RlJyB8fFxuICAgICAgICAgICAgICAodCA9PT0gJ0NvZGVCbG9jaycgJiYgY29udGFpbmVyLl9pc0ZlbmNlZCkgfHxcbiAgICAgICAgICAgICAgKHQgPT09ICdJdGVtJyAmJlxuICAgICAgICAgICAgICAgIWNvbnRhaW5lci5fZmlyc3RDaGlsZCAmJlxuICAgICAgICAgICAgICAgY29udGFpbmVyLnNvdXJjZXBvc1swXVswXSA9PT0gdGhpcy5saW5lTnVtYmVyKSk7XG5cbiAgICAgICAgLy8gcHJvcGFnYXRlIGxhc3RMaW5lQmxhbmsgdXAgdGhyb3VnaCBwYXJlbnRzOlxuICAgICAgICB2YXIgY29udCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNvbnQpIHtcbiAgICAgICAgICAgIGNvbnQuX2xhc3RMaW5lQmxhbmsgPSBsYXN0TGluZUJsYW5rO1xuICAgICAgICAgICAgY29udCA9IGNvbnQuX3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJsb2Nrc1t0XS5hY2NlcHRzTGluZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZSgpO1xuICAgICAgICAgICAgLy8gaWYgSHRtbEJsb2NrLCBjaGVjayBmb3IgZW5kIGNvbmRpdGlvblxuICAgICAgICAgICAgaWYgKHQgPT09ICdIdG1sQmxvY2snICYmXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLl9odG1sQmxvY2tUeXBlID49IDEgJiZcbiAgICAgICAgICAgICAgICBjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPD0gNSAmJlxuICAgICAgICAgICAgICAgIHJlSHRtbEJsb2NrQ2xvc2VbY29udGFpbmVyLl9odG1sQmxvY2tUeXBlXS50ZXN0KHRoaXMuY3VycmVudExpbmUuc2xpY2UodGhpcy5vZmZzZXQpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxpemUoY29udGFpbmVyLCB0aGlzLmxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vZmZzZXQgPCBsbi5sZW5ndGggJiYgIXRoaXMuYmxhbmspIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwYXJhZ3JhcGggY29udGFpbmVyIGZvciBsaW5lXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmFkZENoaWxkKCdQYXJhZ3JhcGgnLCB0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFzdExpbmVMZW5ndGggPSBsbi5sZW5ndGg7XG59O1xuXG4vLyBGaW5hbGl6ZSBhIGJsb2NrLiAgQ2xvc2UgaXQgYW5kIGRvIGFueSBuZWNlc3NhcnkgcG9zdHByb2Nlc3NpbmcsXG4vLyBlLmcuIGNyZWF0aW5nIHN0cmluZ19jb250ZW50IGZyb20gc3RyaW5ncywgc2V0dGluZyB0aGUgJ3RpZ2h0J1xuLy8gb3IgJ2xvb3NlJyBzdGF0dXMgb2YgYSBsaXN0LCBhbmQgcGFyc2luZyB0aGUgYmVnaW5uaW5nc1xuLy8gb2YgcGFyYWdyYXBocyBmb3IgcmVmZXJlbmNlIGRlZmluaXRpb25zLiAgUmVzZXQgdGhlIHRpcCB0byB0aGVcbi8vIHBhcmVudCBvZiB0aGUgY2xvc2VkIGJsb2NrLlxudmFyIGZpbmFsaXplID0gZnVuY3Rpb24oYmxvY2ssIGxpbmVOdW1iZXIpIHtcbiAgICB2YXIgYWJvdmUgPSBibG9jay5fcGFyZW50O1xuICAgIGJsb2NrLl9vcGVuID0gZmFsc2U7XG4gICAgYmxvY2suc291cmNlcG9zWzFdID0gW2xpbmVOdW1iZXIsIHRoaXMubGFzdExpbmVMZW5ndGhdO1xuXG4gICAgdGhpcy5ibG9ja3NbYmxvY2sudHlwZV0uZmluYWxpemUodGhpcywgYmxvY2spO1xuXG4gICAgdGhpcy50aXAgPSBhYm92ZTtcbn07XG5cbi8vIFdhbGsgdGhyb3VnaCBhIGJsb2NrICYgY2hpbGRyZW4gcmVjdXJzaXZlbHksIHBhcnNpbmcgc3RyaW5nIGNvbnRlbnRcbi8vIGludG8gaW5saW5lIGNvbnRlbnQgd2hlcmUgYXBwcm9wcmlhdGUuXG52YXIgcHJvY2Vzc0lubGluZXMgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBub2RlLCBldmVudCwgdDtcbiAgICB2YXIgd2Fsa2VyID0gYmxvY2sud2Fsa2VyKCk7XG4gICAgdGhpcy5pbmxpbmVQYXJzZXIucmVmbWFwID0gdGhpcy5yZWZtYXA7XG4gICAgdGhpcy5pbmxpbmVQYXJzZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB3aGlsZSAoKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkpIHtcbiAgICAgICAgbm9kZSA9IGV2ZW50Lm5vZGU7XG4gICAgICAgIHQgPSBub2RlLnR5cGU7XG4gICAgICAgIGlmICghZXZlbnQuZW50ZXJpbmcgJiYgKHQgPT09ICdQYXJhZ3JhcGgnIHx8IHQgPT09ICdIZWFkZXInKSkge1xuICAgICAgICAgICAgdGhpcy5pbmxpbmVQYXJzZXIucGFyc2Uobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgRG9jdW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jID0gbmV3IE5vZGUoJ0RvY3VtZW50JywgW1sxLCAxXSwgWzAsIDBdXSk7XG4gICAgcmV0dXJuIGRvYztcbn07XG5cbi8vIFRoZSBtYWluIHBhcnNpbmcgZnVuY3Rpb24uICBSZXR1cm5zIGEgcGFyc2VkIGRvY3VtZW50IEFTVC5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5kb2MgPSBuZXcgRG9jdW1lbnQoKTtcbiAgICB0aGlzLnRpcCA9IHRoaXMuZG9jO1xuICAgIHRoaXMucmVmbWFwID0ge307XG4gICAgdGhpcy5saW5lTnVtYmVyID0gMDtcbiAgICB0aGlzLmxhc3RMaW5lTGVuZ3RoID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5jb2x1bW4gPSAwO1xuICAgIHRoaXMubGFzdE1hdGNoZWRDb250YWluZXIgPSB0aGlzLmRvYztcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gXCJcIjtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwicHJlcGFyaW5nIGlucHV0XCIpOyB9XG4gICAgdmFyIGxpbmVzID0gaW5wdXQuc3BsaXQocmVMaW5lRW5kaW5nKTtcbiAgICB2YXIgbGVuID0gbGluZXMubGVuZ3RoO1xuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpID09PSBDX05FV0xJTkUpIHtcbiAgICAgICAgLy8gaWdub3JlIGxhc3QgYmxhbmsgbGluZSBjcmVhdGVkIGJ5IGZpbmFsIG5ld2xpbmVcbiAgICAgICAgbGVuIC09IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJwcmVwYXJpbmcgaW5wdXRcIik7IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwiYmxvY2sgcGFyc2luZ1wiKTsgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5pbmNvcnBvcmF0ZUxpbmUobGluZXNbaV0pO1xuICAgIH1cbiAgICB3aGlsZSAodGhpcy50aXApIHtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSh0aGlzLnRpcCwgbGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcImJsb2NrIHBhcnNpbmdcIik7IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwiaW5saW5lIHBhcnNpbmdcIik7IH1cbiAgICB0aGlzLnByb2Nlc3NJbmxpbmVzKHRoaXMuZG9jKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwiaW5saW5lIHBhcnNpbmdcIik7IH1cbiAgICByZXR1cm4gdGhpcy5kb2M7XG59O1xuXG5cbi8vIFRoZSBQYXJzZXIgb2JqZWN0LlxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIGRvYzogbmV3IERvY3VtZW50KCksXG4gICAgICAgIGJsb2NrczogYmxvY2tzLFxuICAgICAgICBibG9ja1N0YXJ0czogYmxvY2tTdGFydHMsXG4gICAgICAgIHRpcDogdGhpcy5kb2MsXG4gICAgICAgIG9sZHRpcDogdGhpcy5kb2MsXG4gICAgICAgIGN1cnJlbnRMaW5lOiBcIlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGNvbHVtbjogMCxcbiAgICAgICAgbmV4dE5vbnNwYWNlOiAwLFxuICAgICAgICBuZXh0Tm9uc3BhY2VDb2x1bW46IDAsXG4gICAgICAgIGluZGVudDogMCxcbiAgICAgICAgaW5kZW50ZWQ6IGZhbHNlLFxuICAgICAgICBibGFuazogZmFsc2UsXG4gICAgICAgIGFsbENsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGFzdE1hdGNoZWRDb250YWluZXI6IHRoaXMuZG9jLFxuICAgICAgICByZWZtYXA6IHt9LFxuICAgICAgICBsYXN0TGluZUxlbmd0aDogMCxcbiAgICAgICAgaW5saW5lUGFyc2VyOiBuZXcgSW5saW5lUGFyc2VyKG9wdGlvbnMpLFxuICAgICAgICBmaW5kTmV4dE5vbnNwYWNlOiBmaW5kTmV4dE5vbnNwYWNlLFxuICAgICAgICBhZHZhbmNlT2Zmc2V0OiBhZHZhbmNlT2Zmc2V0LFxuICAgICAgICBhZHZhbmNlTmV4dE5vbnNwYWNlOiBhZHZhbmNlTmV4dE5vbnNwYWNlLFxuICAgICAgICBicmVha091dE9mTGlzdHM6IGJyZWFrT3V0T2ZMaXN0cyxcbiAgICAgICAgYWRkTGluZTogYWRkTGluZSxcbiAgICAgICAgYWRkQ2hpbGQ6IGFkZENoaWxkLFxuICAgICAgICBpbmNvcnBvcmF0ZUxpbmU6IGluY29ycG9yYXRlTGluZSxcbiAgICAgICAgZmluYWxpemU6IGZpbmFsaXplLFxuICAgICAgICBwcm9jZXNzSW5saW5lczogcHJvY2Vzc0lubGluZXMsXG4gICAgICAgIGNsb3NlVW5tYXRjaGVkQmxvY2tzOiBjbG9zZVVubWF0Y2hlZEJsb2NrcyxcbiAgICAgICAgcGFyc2U6IHBhcnNlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9ibG9ja3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdtZHVybC9kZWNvZGUnKTtcblxudmFyIENfQkFDS1NMQVNIID0gOTI7XG5cbnZhciBkZWNvZGVIVE1MID0gcmVxdWlyZSgnZW50aXRpZXMnKS5kZWNvZGVIVE1MO1xuXG52YXIgRU5USVRZID0gXCImKD86I3hbYS1mMC05XXsxLDh9fCNbMC05XXsxLDh9fFthLXpdW2EtejAtOV17MSwzMX0pO1wiO1xuXG52YXIgVEFHTkFNRSA9ICdbQS1aYS16XVtBLVphLXowLTktXSonO1xudmFyIEFUVFJJQlVURU5BTUUgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonO1xudmFyIFVOUVVPVEVEVkFMVUUgPSBcIlteXFxcIic9PD5gXFxcXHgwMC1cXFxceDIwXStcIjtcbnZhciBTSU5HTEVRVU9URURWQUxVRSA9IFwiJ1teJ10qJ1wiO1xudmFyIERPVUJMRVFVT1RFRFZBTFVFID0gJ1wiW15cIl0qXCInO1xudmFyIEFUVFJJQlVURVZBTFVFID0gXCIoPzpcIiArIFVOUVVPVEVEVkFMVUUgKyBcInxcIiArIFNJTkdMRVFVT1RFRFZBTFVFICsgXCJ8XCIgKyBET1VCTEVRVU9URURWQUxVRSArIFwiKVwiO1xudmFyIEFUVFJJQlVURVZBTFVFU1BFQyA9IFwiKD86XCIgKyBcIlxcXFxzKj1cIiArIFwiXFxcXHMqXCIgKyBBVFRSSUJVVEVWQUxVRSArIFwiKVwiO1xudmFyIEFUVFJJQlVURSA9IFwiKD86XCIgKyBcIlxcXFxzK1wiICsgQVRUUklCVVRFTkFNRSArIEFUVFJJQlVURVZBTFVFU1BFQyArIFwiPylcIjtcbnZhciBPUEVOVEFHID0gXCI8XCIgKyBUQUdOQU1FICsgQVRUUklCVVRFICsgXCIqXCIgKyBcIlxcXFxzKi8/PlwiO1xudmFyIENMT1NFVEFHID0gXCI8L1wiICsgVEFHTkFNRSArIFwiXFxcXHMqWz5dXCI7XG52YXIgSFRNTENPTU1FTlQgPSBcIjwhLS0tLT58PCEtLSg/Oi0/W14+LV0pKD86LT9bXi1dKSotLT5cIjtcbnZhciBQUk9DRVNTSU5HSU5TVFJVQ1RJT04gPSBcIls8XVs/XS4qP1s/XVs+XVwiO1xudmFyIERFQ0xBUkFUSU9OID0gXCI8IVtBLVpdK1wiICsgXCJcXFxccytbXj5dKj5cIjtcbnZhciBDREFUQSA9IFwiPCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+XCI7XG52YXIgSFRNTFRBRyA9IFwiKD86XCIgKyBPUEVOVEFHICsgXCJ8XCIgKyBDTE9TRVRBRyArIFwifFwiICsgSFRNTENPTU1FTlQgKyBcInxcIiArXG4gICAgICAgIFBST0NFU1NJTkdJTlNUUlVDVElPTiArIFwifFwiICsgREVDTEFSQVRJT04gKyBcInxcIiArIENEQVRBICsgXCIpXCI7XG52YXIgcmVIdG1sVGFnID0gbmV3IFJlZ0V4cCgnXicgKyBIVE1MVEFHLCAnaScpO1xuXG52YXIgcmVCYWNrc2xhc2hPckFtcCA9IC9bXFxcXCZdLztcblxudmFyIEVTQ0FQQUJMRSA9ICdbIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW1xcXFxcXFxcXFxcXF1eX2B7fH1+LV0nO1xuXG52YXIgcmVFbnRpdHlPckVzY2FwZWRDaGFyID0gbmV3IFJlZ0V4cCgnXFxcXFxcXFwnICsgRVNDQVBBQkxFICsgJ3wnICsgRU5USVRZLCAnZ2knKTtcblxudmFyIFhNTFNQRUNJQUwgPSAnWyY8PlwiXSc7XG5cbnZhciByZVhtbFNwZWNpYWwgPSBuZXcgUmVnRXhwKFhNTFNQRUNJQUwsICdnJyk7XG5cbnZhciByZVhtbFNwZWNpYWxPckVudGl0eSA9IG5ldyBSZWdFeHAoRU5USVRZICsgJ3wnICsgWE1MU1BFQ0lBTCwgJ2dpJyk7XG5cbnZhciB1bmVzY2FwZUNoYXIgPSBmdW5jdGlvbihzKSB7XG4gICAgaWYgKHMuY2hhckNvZGVBdCgwKSA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgICAgcmV0dXJuIHMuY2hhckF0KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVIVE1MKHMpO1xuICAgIH1cbn07XG5cbi8vIFJlcGxhY2UgZW50aXRpZXMgYW5kIGJhY2tzbGFzaCBlc2NhcGVzIHdpdGggbGl0ZXJhbCBjaGFyYWN0ZXJzLlxudmFyIHVuZXNjYXBlU3RyaW5nID0gZnVuY3Rpb24ocykge1xuICAgIGlmIChyZUJhY2tzbGFzaE9yQW1wLnRlc3QocykpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZShyZUVudGl0eU9yRXNjYXBlZENoYXIsIHVuZXNjYXBlQ2hhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufTtcblxudmFyIG5vcm1hbGl6ZVVSSSA9IGZ1bmN0aW9uKHVyaSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBlbmNvZGUoZGVjb2RlKHVyaSkpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHVyaTtcbiAgICB9XG59O1xuXG52YXIgcmVwbGFjZVVuc2FmZUNoYXIgPSBmdW5jdGlvbihzKSB7XG4gICAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAnJic6XG4gICAgICAgIHJldHVybiAnJmFtcDsnO1xuICAgIGNhc2UgJzwnOlxuICAgICAgICByZXR1cm4gJyZsdDsnO1xuICAgIGNhc2UgJz4nOlxuICAgICAgICByZXR1cm4gJyZndDsnO1xuICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcmV0dXJuICcmcXVvdDsnO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn07XG5cbnZhciBlc2NhcGVYbWwgPSBmdW5jdGlvbihzLCBwcmVzZXJ2ZV9lbnRpdGllcykge1xuICAgIGlmIChyZVhtbFNwZWNpYWwudGVzdChzKSkge1xuICAgICAgICBpZiAocHJlc2VydmVfZW50aXRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UocmVYbWxTcGVjaWFsT3JFbnRpdHksIHJlcGxhY2VVbnNhZmVDaGFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UocmVYbWxTcGVjaWFsLCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdW5lc2NhcGVTdHJpbmc6IHVuZXNjYXBlU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVVSSTogbm9ybWFsaXplVVJJLFxuICAgICAgICAgICAgICAgICAgIGVzY2FwZVhtbDogZXNjYXBlWG1sLFxuICAgICAgICAgICAgICAgICAgIHJlSHRtbFRhZzogcmVIdG1sVGFnLFxuICAgICAgICAgICAgICAgICAgIE9QRU5UQUc6IE9QRU5UQUcsXG4gICAgICAgICAgICAgICAgICAgQ0xPU0VUQUc6IENMT1NFVEFHLFxuICAgICAgICAgICAgICAgICAgIEVOVElUWTogRU5USVRZLFxuICAgICAgICAgICAgICAgICAgIEVTQ0FQQUJMRTogRVNDQVBBQkxFXG4gICAgICAgICAgICAgICAgIH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9jb21tb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGVuY29kZUNhY2hlID0ge307XG5cblxuLy8gQ3JlYXRlIGEgbG9va3VwIGFycmF5IHdoZXJlIGFueXRoaW5nIGJ1dCBjaGFyYWN0ZXJzIGluIGBjaGFyc2Agc3RyaW5nXG4vLyBhbmQgYWxwaGFudW1lcmljIGNoYXJzIGlzIHBlcmNlbnQtZW5jb2RlZC5cbi8vXG5mdW5jdGlvbiBnZXRFbmNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG5cbiAgICBpZiAoL15bMC05YS16XSQvaS50ZXN0KGNoKSkge1xuICAgICAgLy8gYWx3YXlzIGFsbG93IHVuZW5jb2RlZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVyc1xuICAgICAgY2FjaGUucHVzaChjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLnB1c2goJyUnICsgKCcwJyArIGkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4Y2x1ZGUubGVuZ3RoOyBpKyspIHtcbiAgICBjYWNoZVtleGNsdWRlLmNoYXJDb2RlQXQoaSldID0gZXhjbHVkZVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuXG4vLyBFbmNvZGUgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nLCBza2lwcGluZyBhbHJlYWR5XG4vLyBlbmNvZGVkIHNlcXVlbmNlcy5cbi8vXG4vLyAgLSBzdHJpbmcgICAgICAgLSBzdHJpbmcgdG8gZW5jb2RlXG4vLyAgLSBleGNsdWRlICAgICAgLSBsaXN0IG9mIGNoYXJhY3RlcnMgdG8gaWdub3JlIChpbiBhZGRpdGlvbiB0byBhLXpBLVowLTkpXG4vLyAgLSBrZWVwRXNjYXBlZCAgLSBkb24ndCBlbmNvZGUgJyUnIGluIGEgY29ycmVjdCBlc2NhcGUgc2VxdWVuY2UgKGRlZmF1bHQ6IHRydWUpXG4vL1xuZnVuY3Rpb24gZW5jb2RlKHN0cmluZywgZXhjbHVkZSwga2VlcEVzY2FwZWQpIHtcbiAgdmFyIGksIGwsIGNvZGUsIG5leHRDb2RlLCBjYWNoZSxcbiAgICAgIHJlc3VsdCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBlbmNvZGUoc3RyaW5nLCBrZWVwRXNjYXBlZClcbiAgICBrZWVwRXNjYXBlZCAgPSBleGNsdWRlO1xuICAgIGV4Y2x1ZGUgPSBlbmNvZGUuZGVmYXVsdENoYXJzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZWVwRXNjYXBlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBrZWVwRXNjYXBlZCA9IHRydWU7XG4gIH1cblxuICBjYWNoZSA9IGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpO1xuXG4gIGZvciAoaSA9IDAsIGwgPSBzdHJpbmcubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGtlZXBFc2NhcGVkICYmIGNvZGUgPT09IDB4MjUgLyogJSAqLyAmJiBpICsgMiA8IGwpIHtcbiAgICAgIGlmICgvXlswLTlhLWZdezJ9JC9pLnRlc3Qoc3RyaW5nLnNsaWNlKGkgKyAxLCBpICsgMykpKSB7XG4gICAgICAgIHJlc3VsdCArPSBzdHJpbmcuc2xpY2UoaSwgaSArIDMpO1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICByZXN1bHQgKz0gY2FjaGVbY29kZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERGRkYpIHtcbiAgICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REJGRiAmJiBpICsgMSA8IGwpIHtcbiAgICAgICAgbmV4dENvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIGlmIChuZXh0Q29kZSA+PSAweERDMDAgJiYgbmV4dENvZGUgPD0gMHhERkZGKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0gKyBzdHJpbmdbaSArIDFdKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnJUVGJUJGJUJEJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmVuY29kZS5kZWZhdWx0Q2hhcnMgICA9IFwiOy8/OkAmPSskLC1fLiF+KicoKSNcIjtcbmVuY29kZS5jb21wb25lbnRDaGFycyA9IFwiLV8uIX4qJygpXCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vbWR1cmwvZW5jb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxudmFyIGRlY29kZUNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldERlY29kZUNhY2hlKGV4Y2x1ZGUpIHtcbiAgdmFyIGksIGNoLCBjYWNoZSA9IGRlY29kZUNhY2hlW2V4Y2x1ZGVdO1xuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlOyB9XG5cbiAgY2FjaGUgPSBkZWNvZGVDYWNoZVtleGNsdWRlXSA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICBjYWNoZS5wdXNoKGNoKTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2ggPSBleGNsdWRlLmNoYXJDb2RlQXQoaSk7XG4gICAgY2FjaGVbY2hdID0gJyUnICsgKCcwJyArIGNoLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMik7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRGVjb2RlIHBlcmNlbnQtZW5jb2RlZCBzdHJpbmcuXG4vL1xuZnVuY3Rpb24gZGVjb2RlKHN0cmluZywgZXhjbHVkZSkge1xuICB2YXIgY2FjaGU7XG5cbiAgaWYgKHR5cGVvZiBleGNsdWRlICE9PSAnc3RyaW5nJykge1xuICAgIGV4Y2x1ZGUgPSBkZWNvZGUuZGVmYXVsdENoYXJzO1xuICB9XG5cbiAgY2FjaGUgPSBnZXREZWNvZGVDYWNoZShleGNsdWRlKTtcblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyglW2EtZjAtOV17Mn0pKy9naSwgZnVuY3Rpb24oc2VxKSB7XG4gICAgdmFyIGksIGwsIGIxLCBiMiwgYjMsIGI0LCBjaGFyLFxuICAgICAgICByZXN1bHQgPSAnJztcblxuICAgIGZvciAoaSA9IDAsIGwgPSBzZXEubGVuZ3RoOyBpIDwgbDsgaSArPSAzKSB7XG4gICAgICBiMSA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMSwgaSArIDMpLCAxNik7XG5cbiAgICAgIGlmIChiMSA8IDB4ODApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNhY2hlW2IxXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEUwKSA9PT0gMHhDMCAmJiAoaSArIDMgPCBsKSkge1xuICAgICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hhciA9ICgoYjEgPDwgNikgJiAweDdDMCkgfCAoYjIgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaGFyIDwgMHg4MCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGMCkgPT09IDB4RTAgJiYgKGkgKyA2IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuICAgICAgICBiMyA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNywgaSArIDkpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hhciA9ICgoYjEgPDwgMTIpICYgMHhGMDAwKSB8ICgoYjIgPDwgNikgJiAweEZDMCkgfCAoYjMgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaGFyIDwgMHg4MDAgfHwgKGNoYXIgPj0gMHhEODAwICYmIGNoYXIgPD0gMHhERkZGKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDY7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RjgpID09PSAweEYwICYmIChpICsgOSA8IGwpKSB7XG4gICAgICAgIC8vIDExMTExMHh4IDEweHh4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KTtcbiAgICAgICAgYjMgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDcsIGkgKyA5KSwgMTYpO1xuICAgICAgICBiNCA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMTAsIGkgKyAxMiksIDE2KTtcblxuICAgICAgICBpZiAoKGIyICYgMHhDMCkgPT09IDB4ODAgJiYgKGIzICYgMHhDMCkgPT09IDB4ODAgJiYgKGI0ICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICBjaGFyID0gKChiMSA8PCAxOCkgJiAweDFDMDAwMCkgfCAoKGIyIDw8IDEyKSAmIDB4M0YwMDApIHwgKChiMyA8PCA2KSAmIDB4RkMwKSB8IChiNCAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPCAweDEwMDAwIHx8IGNoYXIgPiAweDEwRkZGRikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZFxcdWZmZmRcXHVmZmZkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhciAtPSAweDEwMDAwO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwICsgKGNoYXIgPj4gMTApLCAweERDMDAgKyAoY2hhciAmIDB4M0ZGKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA5O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59XG5cblxuZGVjb2RlLmRlZmF1bHRDaGFycyAgID0gJzsvPzpAJj0rJCwjJztcbmRlY29kZS5jb21wb25lbnRDaGFycyA9ICcnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L21kdXJsL2RlY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZW5jb2RlID0gcmVxdWlyZShcIi4vbGliL2VuY29kZS5qc1wiKSxcbiAgICBkZWNvZGUgPSByZXF1aXJlKFwiLi9saWIvZGVjb2RlLmpzXCIpO1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKGRhdGEsIGxldmVsKXtcblx0cmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZS5YTUwgOiBkZWNvZGUuSFRNTCkoZGF0YSk7XG59O1xuXG5leHBvcnRzLmRlY29kZVN0cmljdCA9IGZ1bmN0aW9uKGRhdGEsIGxldmVsKXtcblx0cmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZS5YTUwgOiBkZWNvZGUuSFRNTFN0cmljdCkoZGF0YSk7XG59O1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGRhdGEsIGxldmVsKXtcblx0cmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGVuY29kZS5YTUwgOiBlbmNvZGUuSFRNTCkoZGF0YSk7XG59O1xuXG5leHBvcnRzLmVuY29kZVhNTCA9IGVuY29kZS5YTUw7XG5cbmV4cG9ydHMuZW5jb2RlSFRNTDQgPVxuZXhwb3J0cy5lbmNvZGVIVE1MNSA9XG5leHBvcnRzLmVuY29kZUhUTUwgID0gZW5jb2RlLkhUTUw7XG5cbmV4cG9ydHMuZGVjb2RlWE1MID1cbmV4cG9ydHMuZGVjb2RlWE1MU3RyaWN0ID0gZGVjb2RlLlhNTDtcblxuZXhwb3J0cy5kZWNvZGVIVE1MNCA9XG5leHBvcnRzLmRlY29kZUhUTUw1ID1cbmV4cG9ydHMuZGVjb2RlSFRNTCA9IGRlY29kZS5IVE1MO1xuXG5leHBvcnRzLmRlY29kZUhUTUw0U3RyaWN0ID1cbmV4cG9ydHMuZGVjb2RlSFRNTDVTdHJpY3QgPVxuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZGVjb2RlLkhUTUxTdHJpY3Q7XG5cbmV4cG9ydHMuZXNjYXBlID0gZW5jb2RlLmVzY2FwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaW52ZXJzZVhNTCA9IGdldEludmVyc2VPYmoocmVxdWlyZShcIi4uL21hcHMveG1sLmpzb25cIikpLFxuICAgIHhtbFJlcGxhY2VyID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VYTUwpO1xuXG5leHBvcnRzLlhNTCA9IGdldEludmVyc2UoaW52ZXJzZVhNTCwgeG1sUmVwbGFjZXIpO1xuXG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKHJlcXVpcmUoXCIuLi9tYXBzL2VudGl0aWVzLmpzb25cIikpLFxuICAgIGh0bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlSFRNTCk7XG5cbmV4cG9ydHMuSFRNTCA9IGdldEludmVyc2UoaW52ZXJzZUhUTUwsIGh0bWxSZXBsYWNlcik7XG5cbmZ1bmN0aW9uIGdldEludmVyc2VPYmoob2JqKXtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZShmdW5jdGlvbihpbnZlcnNlLCBuYW1lKXtcblx0XHRpbnZlcnNlW29ialtuYW1lXV0gPSBcIiZcIiArIG5hbWUgKyBcIjtcIjtcblx0XHRyZXR1cm4gaW52ZXJzZTtcblx0fSwge30pO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZSl7XG5cdHZhciBzaW5nbGUgPSBbXSxcblx0ICAgIG11bHRpcGxlID0gW107XG5cblx0T2JqZWN0LmtleXMoaW52ZXJzZSkuZm9yRWFjaChmdW5jdGlvbihrKXtcblx0XHRpZihrLmxlbmd0aCA9PT0gMSl7XG5cdFx0XHRzaW5nbGUucHVzaChcIlxcXFxcIiArIGspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtdWx0aXBsZS5wdXNoKGspO1xuXHRcdH1cblx0fSk7XG5cblx0Ly9UT0RPIGFkZCByYW5nZXNcblx0bXVsdGlwbGUudW5zaGlmdChcIltcIiArIHNpbmdsZS5qb2luKFwiXCIpICsgXCJdXCIpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKG11bHRpcGxlLmpvaW4oXCJ8XCIpLCBcImdcIik7XG59XG5cbnZhciByZV9ub25BU0NJSSA9IC9bXlxcMC1cXHg3Rl0vZyxcbiAgICByZV9hc3RyYWxTeW1ib2xzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZztcblxuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpe1xuXHRyZXR1cm4gXCImI3hcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuXG5mdW5jdGlvbiBhc3RyYWxSZXBsYWNlcihjKXtcblx0Ly8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcblx0dmFyIGhpZ2ggPSBjLmNoYXJDb2RlQXQoMCk7XG5cdHZhciBsb3cgID0gYy5jaGFyQ29kZUF0KDEpO1xuXHR2YXIgY29kZVBvaW50ID0gKGhpZ2ggLSAweEQ4MDApICogMHg0MDAgKyBsb3cgLSAweERDMDAgKyAweDEwMDAwO1xuXHRyZXR1cm4gXCImI3hcIiArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZlcnNlKGludmVyc2UsIHJlKXtcblx0ZnVuY3Rpb24gZnVuYyhuYW1lKXtcblx0XHRyZXR1cm4gaW52ZXJzZVtuYW1lXTtcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbihkYXRhKXtcblx0XHRyZXR1cm4gZGF0YVxuXHRcdFx0XHQucmVwbGFjZShyZSwgZnVuYylcblx0XHRcdFx0LnJlcGxhY2UocmVfYXN0cmFsU3ltYm9scywgYXN0cmFsUmVwbGFjZXIpXG5cdFx0XHRcdC5yZXBsYWNlKHJlX25vbkFTQ0lJLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xuXHR9O1xufVxuXG52YXIgcmVfeG1sQ2hhcnMgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG5cbmZ1bmN0aW9uIGVzY2FwZVhNTChkYXRhKXtcblx0cmV0dXJuIGRhdGFcblx0XHRcdC5yZXBsYWNlKHJlX3htbENoYXJzLCBzaW5nbGVDaGFyUmVwbGFjZXIpXG5cdFx0XHQucmVwbGFjZShyZV9hc3RyYWxTeW1ib2xzLCBhc3RyYWxSZXBsYWNlcilcblx0XHRcdC5yZXBsYWNlKHJlX25vbkFTQ0lJLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xufVxuXG5leHBvcnRzLmVzY2FwZSA9IGVzY2FwZVhNTDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZW5jb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFtcFwiOiBcIiZcIixcblx0XCJhcG9zXCI6IFwiJ1wiLFxuXHRcImd0XCI6IFwiPlwiLFxuXHRcImx0XCI6IFwiPFwiLFxuXHRcInF1b3RcIjogXCJcXFwiXCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy94bWwuanNvblxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBYWN1dGVcIjogXCLDgVwiLFxuXHRcImFhY3V0ZVwiOiBcIsOhXCIsXG5cdFwiQWJyZXZlXCI6IFwixIJcIixcblx0XCJhYnJldmVcIjogXCLEg1wiLFxuXHRcImFjXCI6IFwi4oi+XCIsXG5cdFwiYWNkXCI6IFwi4oi/XCIsXG5cdFwiYWNFXCI6IFwi4oi+zLNcIixcblx0XCJBY2lyY1wiOiBcIsOCXCIsXG5cdFwiYWNpcmNcIjogXCLDolwiLFxuXHRcImFjdXRlXCI6IFwiwrRcIixcblx0XCJBY3lcIjogXCLQkFwiLFxuXHRcImFjeVwiOiBcItCwXCIsXG5cdFwiQUVsaWdcIjogXCLDhlwiLFxuXHRcImFlbGlnXCI6IFwiw6ZcIixcblx0XCJhZlwiOiBcIuKBoVwiLFxuXHRcIkFmclwiOiBcIvCdlIRcIixcblx0XCJhZnJcIjogXCLwnZSeXCIsXG5cdFwiQWdyYXZlXCI6IFwiw4BcIixcblx0XCJhZ3JhdmVcIjogXCLDoFwiLFxuXHRcImFsZWZzeW1cIjogXCLihLVcIixcblx0XCJhbGVwaFwiOiBcIuKEtVwiLFxuXHRcIkFscGhhXCI6IFwizpFcIixcblx0XCJhbHBoYVwiOiBcIs6xXCIsXG5cdFwiQW1hY3JcIjogXCLEgFwiLFxuXHRcImFtYWNyXCI6IFwixIFcIixcblx0XCJhbWFsZ1wiOiBcIuKov1wiLFxuXHRcImFtcFwiOiBcIiZcIixcblx0XCJBTVBcIjogXCImXCIsXG5cdFwiYW5kYW5kXCI6IFwi4qmVXCIsXG5cdFwiQW5kXCI6IFwi4qmTXCIsXG5cdFwiYW5kXCI6IFwi4oinXCIsXG5cdFwiYW5kZFwiOiBcIuKpnFwiLFxuXHRcImFuZHNsb3BlXCI6IFwi4qmYXCIsXG5cdFwiYW5kdlwiOiBcIuKpmlwiLFxuXHRcImFuZ1wiOiBcIuKIoFwiLFxuXHRcImFuZ2VcIjogXCLipqRcIixcblx0XCJhbmdsZVwiOiBcIuKIoFwiLFxuXHRcImFuZ21zZGFhXCI6IFwi4qaoXCIsXG5cdFwiYW5nbXNkYWJcIjogXCLipqlcIixcblx0XCJhbmdtc2RhY1wiOiBcIuKmqlwiLFxuXHRcImFuZ21zZGFkXCI6IFwi4qarXCIsXG5cdFwiYW5nbXNkYWVcIjogXCLipqxcIixcblx0XCJhbmdtc2RhZlwiOiBcIuKmrVwiLFxuXHRcImFuZ21zZGFnXCI6IFwi4qauXCIsXG5cdFwiYW5nbXNkYWhcIjogXCLipq9cIixcblx0XCJhbmdtc2RcIjogXCLiiKFcIixcblx0XCJhbmdydFwiOiBcIuKIn1wiLFxuXHRcImFuZ3J0dmJcIjogXCLiir5cIixcblx0XCJhbmdydHZiZFwiOiBcIuKmnVwiLFxuXHRcImFuZ3NwaFwiOiBcIuKIolwiLFxuXHRcImFuZ3N0XCI6IFwiw4VcIixcblx0XCJhbmd6YXJyXCI6IFwi4o28XCIsXG5cdFwiQW9nb25cIjogXCLEhFwiLFxuXHRcImFvZ29uXCI6IFwixIVcIixcblx0XCJBb3BmXCI6IFwi8J2UuFwiLFxuXHRcImFvcGZcIjogXCLwnZWSXCIsXG5cdFwiYXBhY2lyXCI6IFwi4qmvXCIsXG5cdFwiYXBcIjogXCLiiYhcIixcblx0XCJhcEVcIjogXCLiqbBcIixcblx0XCJhcGVcIjogXCLiiYpcIixcblx0XCJhcGlkXCI6IFwi4omLXCIsXG5cdFwiYXBvc1wiOiBcIidcIixcblx0XCJBcHBseUZ1bmN0aW9uXCI6IFwi4oGhXCIsXG5cdFwiYXBwcm94XCI6IFwi4omIXCIsXG5cdFwiYXBwcm94ZXFcIjogXCLiiYpcIixcblx0XCJBcmluZ1wiOiBcIsOFXCIsXG5cdFwiYXJpbmdcIjogXCLDpVwiLFxuXHRcIkFzY3JcIjogXCLwnZKcXCIsXG5cdFwiYXNjclwiOiBcIvCdkrZcIixcblx0XCJBc3NpZ25cIjogXCLiiZRcIixcblx0XCJhc3RcIjogXCIqXCIsXG5cdFwiYXN5bXBcIjogXCLiiYhcIixcblx0XCJhc3ltcGVxXCI6IFwi4omNXCIsXG5cdFwiQXRpbGRlXCI6IFwiw4NcIixcblx0XCJhdGlsZGVcIjogXCLDo1wiLFxuXHRcIkF1bWxcIjogXCLDhFwiLFxuXHRcImF1bWxcIjogXCLDpFwiLFxuXHRcImF3Y29uaW50XCI6IFwi4oizXCIsXG5cdFwiYXdpbnRcIjogXCLiqJFcIixcblx0XCJiYWNrY29uZ1wiOiBcIuKJjFwiLFxuXHRcImJhY2tlcHNpbG9uXCI6IFwiz7ZcIixcblx0XCJiYWNrcHJpbWVcIjogXCLigLVcIixcblx0XCJiYWNrc2ltXCI6IFwi4oi9XCIsXG5cdFwiYmFja3NpbWVxXCI6IFwi4ouNXCIsXG5cdFwiQmFja3NsYXNoXCI6IFwi4oiWXCIsXG5cdFwiQmFydlwiOiBcIuKrp1wiLFxuXHRcImJhcnZlZVwiOiBcIuKKvVwiLFxuXHRcImJhcndlZFwiOiBcIuKMhVwiLFxuXHRcIkJhcndlZFwiOiBcIuKMhlwiLFxuXHRcImJhcndlZGdlXCI6IFwi4oyFXCIsXG5cdFwiYmJya1wiOiBcIuKOtVwiLFxuXHRcImJicmt0YnJrXCI6IFwi4o62XCIsXG5cdFwiYmNvbmdcIjogXCLiiYxcIixcblx0XCJCY3lcIjogXCLQkVwiLFxuXHRcImJjeVwiOiBcItCxXCIsXG5cdFwiYmRxdW9cIjogXCLigJ5cIixcblx0XCJiZWNhdXNcIjogXCLiiLVcIixcblx0XCJiZWNhdXNlXCI6IFwi4oi1XCIsXG5cdFwiQmVjYXVzZVwiOiBcIuKItVwiLFxuXHRcImJlbXB0eXZcIjogXCLiprBcIixcblx0XCJiZXBzaVwiOiBcIs+2XCIsXG5cdFwiYmVybm91XCI6IFwi4oSsXCIsXG5cdFwiQmVybm91bGxpc1wiOiBcIuKErFwiLFxuXHRcIkJldGFcIjogXCLOklwiLFxuXHRcImJldGFcIjogXCLOslwiLFxuXHRcImJldGhcIjogXCLihLZcIixcblx0XCJiZXR3ZWVuXCI6IFwi4omsXCIsXG5cdFwiQmZyXCI6IFwi8J2UhVwiLFxuXHRcImJmclwiOiBcIvCdlJ9cIixcblx0XCJiaWdjYXBcIjogXCLii4JcIixcblx0XCJiaWdjaXJjXCI6IFwi4pevXCIsXG5cdFwiYmlnY3VwXCI6IFwi4ouDXCIsXG5cdFwiYmlnb2RvdFwiOiBcIuKogFwiLFxuXHRcImJpZ29wbHVzXCI6IFwi4qiBXCIsXG5cdFwiYmlnb3RpbWVzXCI6IFwi4qiCXCIsXG5cdFwiYmlnc3FjdXBcIjogXCLiqIZcIixcblx0XCJiaWdzdGFyXCI6IFwi4piFXCIsXG5cdFwiYmlndHJpYW5nbGVkb3duXCI6IFwi4pa9XCIsXG5cdFwiYmlndHJpYW5nbGV1cFwiOiBcIuKWs1wiLFxuXHRcImJpZ3VwbHVzXCI6IFwi4qiEXCIsXG5cdFwiYmlndmVlXCI6IFwi4ouBXCIsXG5cdFwiYmlnd2VkZ2VcIjogXCLii4BcIixcblx0XCJia2Fyb3dcIjogXCLipI1cIixcblx0XCJibGFja2xvemVuZ2VcIjogXCLip6tcIixcblx0XCJibGFja3NxdWFyZVwiOiBcIuKWqlwiLFxuXHRcImJsYWNrdHJpYW5nbGVcIjogXCLilrRcIixcblx0XCJibGFja3RyaWFuZ2xlZG93blwiOiBcIuKWvlwiLFxuXHRcImJsYWNrdHJpYW5nbGVsZWZ0XCI6IFwi4peCXCIsXG5cdFwiYmxhY2t0cmlhbmdsZXJpZ2h0XCI6IFwi4pa4XCIsXG5cdFwiYmxhbmtcIjogXCLikKNcIixcblx0XCJibGsxMlwiOiBcIuKWklwiLFxuXHRcImJsazE0XCI6IFwi4paRXCIsXG5cdFwiYmxrMzRcIjogXCLilpNcIixcblx0XCJibG9ja1wiOiBcIuKWiFwiLFxuXHRcImJuZVwiOiBcIj3ig6VcIixcblx0XCJibmVxdWl2XCI6IFwi4omh4oOlXCIsXG5cdFwiYk5vdFwiOiBcIuKrrVwiLFxuXHRcImJub3RcIjogXCLijJBcIixcblx0XCJCb3BmXCI6IFwi8J2UuVwiLFxuXHRcImJvcGZcIjogXCLwnZWTXCIsXG5cdFwiYm90XCI6IFwi4oqlXCIsXG5cdFwiYm90dG9tXCI6IFwi4oqlXCIsXG5cdFwiYm93dGllXCI6IFwi4ouIXCIsXG5cdFwiYm94Ym94XCI6IFwi4qeJXCIsXG5cdFwiYm94ZGxcIjogXCLilJBcIixcblx0XCJib3hkTFwiOiBcIuKVlVwiLFxuXHRcImJveERsXCI6IFwi4pWWXCIsXG5cdFwiYm94RExcIjogXCLilZdcIixcblx0XCJib3hkclwiOiBcIuKUjFwiLFxuXHRcImJveGRSXCI6IFwi4pWSXCIsXG5cdFwiYm94RHJcIjogXCLilZNcIixcblx0XCJib3hEUlwiOiBcIuKVlFwiLFxuXHRcImJveGhcIjogXCLilIBcIixcblx0XCJib3hIXCI6IFwi4pWQXCIsXG5cdFwiYm94aGRcIjogXCLilKxcIixcblx0XCJib3hIZFwiOiBcIuKVpFwiLFxuXHRcImJveGhEXCI6IFwi4pWlXCIsXG5cdFwiYm94SERcIjogXCLilaZcIixcblx0XCJib3hodVwiOiBcIuKUtFwiLFxuXHRcImJveEh1XCI6IFwi4pWnXCIsXG5cdFwiYm94aFVcIjogXCLilahcIixcblx0XCJib3hIVVwiOiBcIuKVqVwiLFxuXHRcImJveG1pbnVzXCI6IFwi4oqfXCIsXG5cdFwiYm94cGx1c1wiOiBcIuKKnlwiLFxuXHRcImJveHRpbWVzXCI6IFwi4oqgXCIsXG5cdFwiYm94dWxcIjogXCLilJhcIixcblx0XCJib3h1TFwiOiBcIuKVm1wiLFxuXHRcImJveFVsXCI6IFwi4pWcXCIsXG5cdFwiYm94VUxcIjogXCLilZ1cIixcblx0XCJib3h1clwiOiBcIuKUlFwiLFxuXHRcImJveHVSXCI6IFwi4pWYXCIsXG5cdFwiYm94VXJcIjogXCLilZlcIixcblx0XCJib3hVUlwiOiBcIuKVmlwiLFxuXHRcImJveHZcIjogXCLilIJcIixcblx0XCJib3hWXCI6IFwi4pWRXCIsXG5cdFwiYm94dmhcIjogXCLilLxcIixcblx0XCJib3h2SFwiOiBcIuKVqlwiLFxuXHRcImJveFZoXCI6IFwi4pWrXCIsXG5cdFwiYm94VkhcIjogXCLilaxcIixcblx0XCJib3h2bFwiOiBcIuKUpFwiLFxuXHRcImJveHZMXCI6IFwi4pWhXCIsXG5cdFwiYm94VmxcIjogXCLilaJcIixcblx0XCJib3hWTFwiOiBcIuKVo1wiLFxuXHRcImJveHZyXCI6IFwi4pScXCIsXG5cdFwiYm94dlJcIjogXCLilZ5cIixcblx0XCJib3hWclwiOiBcIuKVn1wiLFxuXHRcImJveFZSXCI6IFwi4pWgXCIsXG5cdFwiYnByaW1lXCI6IFwi4oC1XCIsXG5cdFwiYnJldmVcIjogXCLLmFwiLFxuXHRcIkJyZXZlXCI6IFwiy5hcIixcblx0XCJicnZiYXJcIjogXCLCplwiLFxuXHRcImJzY3JcIjogXCLwnZK3XCIsXG5cdFwiQnNjclwiOiBcIuKErFwiLFxuXHRcImJzZW1pXCI6IFwi4oGPXCIsXG5cdFwiYnNpbVwiOiBcIuKIvVwiLFxuXHRcImJzaW1lXCI6IFwi4ouNXCIsXG5cdFwiYnNvbGJcIjogXCLip4VcIixcblx0XCJic29sXCI6IFwiXFxcXFwiLFxuXHRcImJzb2xoc3ViXCI6IFwi4p+IXCIsXG5cdFwiYnVsbFwiOiBcIuKAolwiLFxuXHRcImJ1bGxldFwiOiBcIuKAolwiLFxuXHRcImJ1bXBcIjogXCLiiY5cIixcblx0XCJidW1wRVwiOiBcIuKqrlwiLFxuXHRcImJ1bXBlXCI6IFwi4omPXCIsXG5cdFwiQnVtcGVxXCI6IFwi4omOXCIsXG5cdFwiYnVtcGVxXCI6IFwi4omPXCIsXG5cdFwiQ2FjdXRlXCI6IFwixIZcIixcblx0XCJjYWN1dGVcIjogXCLEh1wiLFxuXHRcImNhcGFuZFwiOiBcIuKphFwiLFxuXHRcImNhcGJyY3VwXCI6IFwi4qmJXCIsXG5cdFwiY2FwY2FwXCI6IFwi4qmLXCIsXG5cdFwiY2FwXCI6IFwi4oipXCIsXG5cdFwiQ2FwXCI6IFwi4ouSXCIsXG5cdFwiY2FwY3VwXCI6IFwi4qmHXCIsXG5cdFwiY2FwZG90XCI6IFwi4qmAXCIsXG5cdFwiQ2FwaXRhbERpZmZlcmVudGlhbERcIjogXCLihYVcIixcblx0XCJjYXBzXCI6IFwi4oip77iAXCIsXG5cdFwiY2FyZXRcIjogXCLigYFcIixcblx0XCJjYXJvblwiOiBcIsuHXCIsXG5cdFwiQ2F5bGV5c1wiOiBcIuKErVwiLFxuXHRcImNjYXBzXCI6IFwi4qmNXCIsXG5cdFwiQ2Nhcm9uXCI6IFwixIxcIixcblx0XCJjY2Fyb25cIjogXCLEjVwiLFxuXHRcIkNjZWRpbFwiOiBcIsOHXCIsXG5cdFwiY2NlZGlsXCI6IFwiw6dcIixcblx0XCJDY2lyY1wiOiBcIsSIXCIsXG5cdFwiY2NpcmNcIjogXCLEiVwiLFxuXHRcIkNjb25pbnRcIjogXCLiiLBcIixcblx0XCJjY3Vwc1wiOiBcIuKpjFwiLFxuXHRcImNjdXBzc21cIjogXCLiqZBcIixcblx0XCJDZG90XCI6IFwixIpcIixcblx0XCJjZG90XCI6IFwixItcIixcblx0XCJjZWRpbFwiOiBcIsK4XCIsXG5cdFwiQ2VkaWxsYVwiOiBcIsK4XCIsXG5cdFwiY2VtcHR5dlwiOiBcIuKmslwiLFxuXHRcImNlbnRcIjogXCLColwiLFxuXHRcImNlbnRlcmRvdFwiOiBcIsK3XCIsXG5cdFwiQ2VudGVyRG90XCI6IFwiwrdcIixcblx0XCJjZnJcIjogXCLwnZSgXCIsXG5cdFwiQ2ZyXCI6IFwi4oStXCIsXG5cdFwiQ0hjeVwiOiBcItCnXCIsXG5cdFwiY2hjeVwiOiBcItGHXCIsXG5cdFwiY2hlY2tcIjogXCLinJNcIixcblx0XCJjaGVja21hcmtcIjogXCLinJNcIixcblx0XCJDaGlcIjogXCLOp1wiLFxuXHRcImNoaVwiOiBcIs+HXCIsXG5cdFwiY2lyY1wiOiBcIsuGXCIsXG5cdFwiY2lyY2VxXCI6IFwi4omXXCIsXG5cdFwiY2lyY2xlYXJyb3dsZWZ0XCI6IFwi4oa6XCIsXG5cdFwiY2lyY2xlYXJyb3dyaWdodFwiOiBcIuKGu1wiLFxuXHRcImNpcmNsZWRhc3RcIjogXCLiiptcIixcblx0XCJjaXJjbGVkY2lyY1wiOiBcIuKKmlwiLFxuXHRcImNpcmNsZWRkYXNoXCI6IFwi4oqdXCIsXG5cdFwiQ2lyY2xlRG90XCI6IFwi4oqZXCIsXG5cdFwiY2lyY2xlZFJcIjogXCLCrlwiLFxuXHRcImNpcmNsZWRTXCI6IFwi4pOIXCIsXG5cdFwiQ2lyY2xlTWludXNcIjogXCLiipZcIixcblx0XCJDaXJjbGVQbHVzXCI6IFwi4oqVXCIsXG5cdFwiQ2lyY2xlVGltZXNcIjogXCLiipdcIixcblx0XCJjaXJcIjogXCLil4tcIixcblx0XCJjaXJFXCI6IFwi4qeDXCIsXG5cdFwiY2lyZVwiOiBcIuKJl1wiLFxuXHRcImNpcmZuaW50XCI6IFwi4qiQXCIsXG5cdFwiY2lybWlkXCI6IFwi4quvXCIsXG5cdFwiY2lyc2NpclwiOiBcIuKnglwiLFxuXHRcIkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIslwiLFxuXHRcIkNsb3NlQ3VybHlEb3VibGVRdW90ZVwiOiBcIuKAnVwiLFxuXHRcIkNsb3NlQ3VybHlRdW90ZVwiOiBcIuKAmVwiLFxuXHRcImNsdWJzXCI6IFwi4pmjXCIsXG5cdFwiY2x1YnN1aXRcIjogXCLimaNcIixcblx0XCJjb2xvblwiOiBcIjpcIixcblx0XCJDb2xvblwiOiBcIuKIt1wiLFxuXHRcIkNvbG9uZVwiOiBcIuKptFwiLFxuXHRcImNvbG9uZVwiOiBcIuKJlFwiLFxuXHRcImNvbG9uZXFcIjogXCLiiZRcIixcblx0XCJjb21tYVwiOiBcIixcIixcblx0XCJjb21tYXRcIjogXCJAXCIsXG5cdFwiY29tcFwiOiBcIuKIgVwiLFxuXHRcImNvbXBmblwiOiBcIuKImFwiLFxuXHRcImNvbXBsZW1lbnRcIjogXCLiiIFcIixcblx0XCJjb21wbGV4ZXNcIjogXCLihIJcIixcblx0XCJjb25nXCI6IFwi4omFXCIsXG5cdFwiY29uZ2RvdFwiOiBcIuKprVwiLFxuXHRcIkNvbmdydWVudFwiOiBcIuKJoVwiLFxuXHRcImNvbmludFwiOiBcIuKIrlwiLFxuXHRcIkNvbmludFwiOiBcIuKIr1wiLFxuXHRcIkNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIrlwiLFxuXHRcImNvcGZcIjogXCLwnZWUXCIsXG5cdFwiQ29wZlwiOiBcIuKEglwiLFxuXHRcImNvcHJvZFwiOiBcIuKIkFwiLFxuXHRcIkNvcHJvZHVjdFwiOiBcIuKIkFwiLFxuXHRcImNvcHlcIjogXCLCqVwiLFxuXHRcIkNPUFlcIjogXCLCqVwiLFxuXHRcImNvcHlzclwiOiBcIuKEl1wiLFxuXHRcIkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjogXCLiiLNcIixcblx0XCJjcmFyclwiOiBcIuKGtVwiLFxuXHRcImNyb3NzXCI6IFwi4pyXXCIsXG5cdFwiQ3Jvc3NcIjogXCLiqK9cIixcblx0XCJDc2NyXCI6IFwi8J2SnlwiLFxuXHRcImNzY3JcIjogXCLwnZK4XCIsXG5cdFwiY3N1YlwiOiBcIuKrj1wiLFxuXHRcImNzdWJlXCI6IFwi4quRXCIsXG5cdFwiY3N1cFwiOiBcIuKrkFwiLFxuXHRcImNzdXBlXCI6IFwi4quSXCIsXG5cdFwiY3Rkb3RcIjogXCLii69cIixcblx0XCJjdWRhcnJsXCI6IFwi4qS4XCIsXG5cdFwiY3VkYXJyclwiOiBcIuKktVwiLFxuXHRcImN1ZXByXCI6IFwi4oueXCIsXG5cdFwiY3Vlc2NcIjogXCLii59cIixcblx0XCJjdWxhcnJcIjogXCLihrZcIixcblx0XCJjdWxhcnJwXCI6IFwi4qS9XCIsXG5cdFwiY3VwYnJjYXBcIjogXCLiqYhcIixcblx0XCJjdXBjYXBcIjogXCLiqYZcIixcblx0XCJDdXBDYXBcIjogXCLiiY1cIixcblx0XCJjdXBcIjogXCLiiKpcIixcblx0XCJDdXBcIjogXCLii5NcIixcblx0XCJjdXBjdXBcIjogXCLiqYpcIixcblx0XCJjdXBkb3RcIjogXCLiio1cIixcblx0XCJjdXBvclwiOiBcIuKphVwiLFxuXHRcImN1cHNcIjogXCLiiKrvuIBcIixcblx0XCJjdXJhcnJcIjogXCLihrdcIixcblx0XCJjdXJhcnJtXCI6IFwi4qS8XCIsXG5cdFwiY3VybHllcXByZWNcIjogXCLii55cIixcblx0XCJjdXJseWVxc3VjY1wiOiBcIuKLn1wiLFxuXHRcImN1cmx5dmVlXCI6IFwi4ouOXCIsXG5cdFwiY3VybHl3ZWRnZVwiOiBcIuKLj1wiLFxuXHRcImN1cnJlblwiOiBcIsKkXCIsXG5cdFwiY3VydmVhcnJvd2xlZnRcIjogXCLihrZcIixcblx0XCJjdXJ2ZWFycm93cmlnaHRcIjogXCLihrdcIixcblx0XCJjdXZlZVwiOiBcIuKLjlwiLFxuXHRcImN1d2VkXCI6IFwi4ouPXCIsXG5cdFwiY3djb25pbnRcIjogXCLiiLJcIixcblx0XCJjd2ludFwiOiBcIuKIsVwiLFxuXHRcImN5bGN0eVwiOiBcIuKMrVwiLFxuXHRcImRhZ2dlclwiOiBcIuKAoFwiLFxuXHRcIkRhZ2dlclwiOiBcIuKAoVwiLFxuXHRcImRhbGV0aFwiOiBcIuKEuFwiLFxuXHRcImRhcnJcIjogXCLihpNcIixcblx0XCJEYXJyXCI6IFwi4oahXCIsXG5cdFwiZEFyclwiOiBcIuKHk1wiLFxuXHRcImRhc2hcIjogXCLigJBcIixcblx0XCJEYXNodlwiOiBcIuKrpFwiLFxuXHRcImRhc2h2XCI6IFwi4oqjXCIsXG5cdFwiZGJrYXJvd1wiOiBcIuKkj1wiLFxuXHRcImRibGFjXCI6IFwiy51cIixcblx0XCJEY2Fyb25cIjogXCLEjlwiLFxuXHRcImRjYXJvblwiOiBcIsSPXCIsXG5cdFwiRGN5XCI6IFwi0JRcIixcblx0XCJkY3lcIjogXCLQtFwiLFxuXHRcImRkYWdnZXJcIjogXCLigKFcIixcblx0XCJkZGFyclwiOiBcIuKHilwiLFxuXHRcIkREXCI6IFwi4oWFXCIsXG5cdFwiZGRcIjogXCLihYZcIixcblx0XCJERG90cmFoZFwiOiBcIuKkkVwiLFxuXHRcImRkb3RzZXFcIjogXCLiqbdcIixcblx0XCJkZWdcIjogXCLCsFwiLFxuXHRcIkRlbFwiOiBcIuKIh1wiLFxuXHRcIkRlbHRhXCI6IFwizpRcIixcblx0XCJkZWx0YVwiOiBcIs60XCIsXG5cdFwiZGVtcHR5dlwiOiBcIuKmsVwiLFxuXHRcImRmaXNodFwiOiBcIuKlv1wiLFxuXHRcIkRmclwiOiBcIvCdlIdcIixcblx0XCJkZnJcIjogXCLwnZShXCIsXG5cdFwiZEhhclwiOiBcIuKlpVwiLFxuXHRcImRoYXJsXCI6IFwi4oeDXCIsXG5cdFwiZGhhcnJcIjogXCLih4JcIixcblx0XCJEaWFjcml0aWNhbEFjdXRlXCI6IFwiwrRcIixcblx0XCJEaWFjcml0aWNhbERvdFwiOiBcIsuZXCIsXG5cdFwiRGlhY3JpdGljYWxEb3VibGVBY3V0ZVwiOiBcIsudXCIsXG5cdFwiRGlhY3JpdGljYWxHcmF2ZVwiOiBcImBcIixcblx0XCJEaWFjcml0aWNhbFRpbGRlXCI6IFwiy5xcIixcblx0XCJkaWFtXCI6IFwi4ouEXCIsXG5cdFwiZGlhbW9uZFwiOiBcIuKLhFwiLFxuXHRcIkRpYW1vbmRcIjogXCLii4RcIixcblx0XCJkaWFtb25kc3VpdFwiOiBcIuKZplwiLFxuXHRcImRpYW1zXCI6IFwi4pmmXCIsXG5cdFwiZGllXCI6IFwiwqhcIixcblx0XCJEaWZmZXJlbnRpYWxEXCI6IFwi4oWGXCIsXG5cdFwiZGlnYW1tYVwiOiBcIs+dXCIsXG5cdFwiZGlzaW5cIjogXCLii7JcIixcblx0XCJkaXZcIjogXCLDt1wiLFxuXHRcImRpdmlkZVwiOiBcIsO3XCIsXG5cdFwiZGl2aWRlb250aW1lc1wiOiBcIuKLh1wiLFxuXHRcImRpdm9ueFwiOiBcIuKLh1wiLFxuXHRcIkRKY3lcIjogXCLQglwiLFxuXHRcImRqY3lcIjogXCLRklwiLFxuXHRcImRsY29yblwiOiBcIuKMnlwiLFxuXHRcImRsY3JvcFwiOiBcIuKMjVwiLFxuXHRcImRvbGxhclwiOiBcIiRcIixcblx0XCJEb3BmXCI6IFwi8J2Uu1wiLFxuXHRcImRvcGZcIjogXCLwnZWVXCIsXG5cdFwiRG90XCI6IFwiwqhcIixcblx0XCJkb3RcIjogXCLLmVwiLFxuXHRcIkRvdERvdFwiOiBcIuKDnFwiLFxuXHRcImRvdGVxXCI6IFwi4omQXCIsXG5cdFwiZG90ZXFkb3RcIjogXCLiiZFcIixcblx0XCJEb3RFcXVhbFwiOiBcIuKJkFwiLFxuXHRcImRvdG1pbnVzXCI6IFwi4oi4XCIsXG5cdFwiZG90cGx1c1wiOiBcIuKIlFwiLFxuXHRcImRvdHNxdWFyZVwiOiBcIuKKoVwiLFxuXHRcImRvdWJsZWJhcndlZGdlXCI6IFwi4oyGXCIsXG5cdFwiRG91YmxlQ29udG91ckludGVncmFsXCI6IFwi4oivXCIsXG5cdFwiRG91YmxlRG90XCI6IFwiwqhcIixcblx0XCJEb3VibGVEb3duQXJyb3dcIjogXCLih5NcIixcblx0XCJEb3VibGVMZWZ0QXJyb3dcIjogXCLih5BcIixcblx0XCJEb3VibGVMZWZ0UmlnaHRBcnJvd1wiOiBcIuKHlFwiLFxuXHRcIkRvdWJsZUxlZnRUZWVcIjogXCLiq6RcIixcblx0XCJEb3VibGVMb25nTGVmdEFycm93XCI6IFwi4p+4XCIsXG5cdFwiRG91YmxlTG9uZ0xlZnRSaWdodEFycm93XCI6IFwi4p+6XCIsXG5cdFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3dcIjogXCLin7lcIixcblx0XCJEb3VibGVSaWdodEFycm93XCI6IFwi4oeSXCIsXG5cdFwiRG91YmxlUmlnaHRUZWVcIjogXCLiiqhcIixcblx0XCJEb3VibGVVcEFycm93XCI6IFwi4oeRXCIsXG5cdFwiRG91YmxlVXBEb3duQXJyb3dcIjogXCLih5VcIixcblx0XCJEb3VibGVWZXJ0aWNhbEJhclwiOiBcIuKIpVwiLFxuXHRcIkRvd25BcnJvd0JhclwiOiBcIuKkk1wiLFxuXHRcImRvd25hcnJvd1wiOiBcIuKGk1wiLFxuXHRcIkRvd25BcnJvd1wiOiBcIuKGk1wiLFxuXHRcIkRvd25hcnJvd1wiOiBcIuKHk1wiLFxuXHRcIkRvd25BcnJvd1VwQXJyb3dcIjogXCLih7VcIixcblx0XCJEb3duQnJldmVcIjogXCLMkVwiLFxuXHRcImRvd25kb3duYXJyb3dzXCI6IFwi4oeKXCIsXG5cdFwiZG93bmhhcnBvb25sZWZ0XCI6IFwi4oeDXCIsXG5cdFwiZG93bmhhcnBvb25yaWdodFwiOiBcIuKHglwiLFxuXHRcIkRvd25MZWZ0UmlnaHRWZWN0b3JcIjogXCLipZBcIixcblx0XCJEb3duTGVmdFRlZVZlY3RvclwiOiBcIuKlnlwiLFxuXHRcIkRvd25MZWZ0VmVjdG9yQmFyXCI6IFwi4qWWXCIsXG5cdFwiRG93bkxlZnRWZWN0b3JcIjogXCLihr1cIixcblx0XCJEb3duUmlnaHRUZWVWZWN0b3JcIjogXCLipZ9cIixcblx0XCJEb3duUmlnaHRWZWN0b3JCYXJcIjogXCLipZdcIixcblx0XCJEb3duUmlnaHRWZWN0b3JcIjogXCLih4FcIixcblx0XCJEb3duVGVlQXJyb3dcIjogXCLihqdcIixcblx0XCJEb3duVGVlXCI6IFwi4oqkXCIsXG5cdFwiZHJia2Fyb3dcIjogXCLipJBcIixcblx0XCJkcmNvcm5cIjogXCLijJ9cIixcblx0XCJkcmNyb3BcIjogXCLijIxcIixcblx0XCJEc2NyXCI6IFwi8J2Sn1wiLFxuXHRcImRzY3JcIjogXCLwnZK5XCIsXG5cdFwiRFNjeVwiOiBcItCFXCIsXG5cdFwiZHNjeVwiOiBcItGVXCIsXG5cdFwiZHNvbFwiOiBcIuKntlwiLFxuXHRcIkRzdHJva1wiOiBcIsSQXCIsXG5cdFwiZHN0cm9rXCI6IFwixJFcIixcblx0XCJkdGRvdFwiOiBcIuKLsVwiLFxuXHRcImR0cmlcIjogXCLilr9cIixcblx0XCJkdHJpZlwiOiBcIuKWvlwiLFxuXHRcImR1YXJyXCI6IFwi4oe1XCIsXG5cdFwiZHVoYXJcIjogXCLipa9cIixcblx0XCJkd2FuZ2xlXCI6IFwi4qamXCIsXG5cdFwiRFpjeVwiOiBcItCPXCIsXG5cdFwiZHpjeVwiOiBcItGfXCIsXG5cdFwiZHppZ3JhcnJcIjogXCLin79cIixcblx0XCJFYWN1dGVcIjogXCLDiVwiLFxuXHRcImVhY3V0ZVwiOiBcIsOpXCIsXG5cdFwiZWFzdGVyXCI6IFwi4qmuXCIsXG5cdFwiRWNhcm9uXCI6IFwixJpcIixcblx0XCJlY2Fyb25cIjogXCLEm1wiLFxuXHRcIkVjaXJjXCI6IFwiw4pcIixcblx0XCJlY2lyY1wiOiBcIsOqXCIsXG5cdFwiZWNpclwiOiBcIuKJllwiLFxuXHRcImVjb2xvblwiOiBcIuKJlVwiLFxuXHRcIkVjeVwiOiBcItCtXCIsXG5cdFwiZWN5XCI6IFwi0Y1cIixcblx0XCJlRERvdFwiOiBcIuKpt1wiLFxuXHRcIkVkb3RcIjogXCLEllwiLFxuXHRcImVkb3RcIjogXCLEl1wiLFxuXHRcImVEb3RcIjogXCLiiZFcIixcblx0XCJlZVwiOiBcIuKFh1wiLFxuXHRcImVmRG90XCI6IFwi4omSXCIsXG5cdFwiRWZyXCI6IFwi8J2UiFwiLFxuXHRcImVmclwiOiBcIvCdlKJcIixcblx0XCJlZ1wiOiBcIuKqmlwiLFxuXHRcIkVncmF2ZVwiOiBcIsOIXCIsXG5cdFwiZWdyYXZlXCI6IFwiw6hcIixcblx0XCJlZ3NcIjogXCLiqpZcIixcblx0XCJlZ3Nkb3RcIjogXCLiqphcIixcblx0XCJlbFwiOiBcIuKqmVwiLFxuXHRcIkVsZW1lbnRcIjogXCLiiIhcIixcblx0XCJlbGludGVyc1wiOiBcIuKPp1wiLFxuXHRcImVsbFwiOiBcIuKEk1wiLFxuXHRcImVsc1wiOiBcIuKqlVwiLFxuXHRcImVsc2RvdFwiOiBcIuKql1wiLFxuXHRcIkVtYWNyXCI6IFwixJJcIixcblx0XCJlbWFjclwiOiBcIsSTXCIsXG5cdFwiZW1wdHlcIjogXCLiiIVcIixcblx0XCJlbXB0eXNldFwiOiBcIuKIhVwiLFxuXHRcIkVtcHR5U21hbGxTcXVhcmVcIjogXCLil7tcIixcblx0XCJlbXB0eXZcIjogXCLiiIVcIixcblx0XCJFbXB0eVZlcnlTbWFsbFNxdWFyZVwiOiBcIuKWq1wiLFxuXHRcImVtc3AxM1wiOiBcIuKAhFwiLFxuXHRcImVtc3AxNFwiOiBcIuKAhVwiLFxuXHRcImVtc3BcIjogXCLigINcIixcblx0XCJFTkdcIjogXCLFilwiLFxuXHRcImVuZ1wiOiBcIsWLXCIsXG5cdFwiZW5zcFwiOiBcIuKAglwiLFxuXHRcIkVvZ29uXCI6IFwixJhcIixcblx0XCJlb2dvblwiOiBcIsSZXCIsXG5cdFwiRW9wZlwiOiBcIvCdlLxcIixcblx0XCJlb3BmXCI6IFwi8J2VllwiLFxuXHRcImVwYXJcIjogXCLii5VcIixcblx0XCJlcGFyc2xcIjogXCLip6NcIixcblx0XCJlcGx1c1wiOiBcIuKpsVwiLFxuXHRcImVwc2lcIjogXCLOtVwiLFxuXHRcIkVwc2lsb25cIjogXCLOlVwiLFxuXHRcImVwc2lsb25cIjogXCLOtVwiLFxuXHRcImVwc2l2XCI6IFwiz7VcIixcblx0XCJlcWNpcmNcIjogXCLiiZZcIixcblx0XCJlcWNvbG9uXCI6IFwi4omVXCIsXG5cdFwiZXFzaW1cIjogXCLiiYJcIixcblx0XCJlcXNsYW50Z3RyXCI6IFwi4qqWXCIsXG5cdFwiZXFzbGFudGxlc3NcIjogXCLiqpVcIixcblx0XCJFcXVhbFwiOiBcIuKptVwiLFxuXHRcImVxdWFsc1wiOiBcIj1cIixcblx0XCJFcXVhbFRpbGRlXCI6IFwi4omCXCIsXG5cdFwiZXF1ZXN0XCI6IFwi4omfXCIsXG5cdFwiRXF1aWxpYnJpdW1cIjogXCLih4xcIixcblx0XCJlcXVpdlwiOiBcIuKJoVwiLFxuXHRcImVxdWl2RERcIjogXCLiqbhcIixcblx0XCJlcXZwYXJzbFwiOiBcIuKnpVwiLFxuXHRcImVyYXJyXCI6IFwi4qWxXCIsXG5cdFwiZXJEb3RcIjogXCLiiZNcIixcblx0XCJlc2NyXCI6IFwi4oSvXCIsXG5cdFwiRXNjclwiOiBcIuKEsFwiLFxuXHRcImVzZG90XCI6IFwi4omQXCIsXG5cdFwiRXNpbVwiOiBcIuKps1wiLFxuXHRcImVzaW1cIjogXCLiiYJcIixcblx0XCJFdGFcIjogXCLOl1wiLFxuXHRcImV0YVwiOiBcIs63XCIsXG5cdFwiRVRIXCI6IFwiw5BcIixcblx0XCJldGhcIjogXCLDsFwiLFxuXHRcIkV1bWxcIjogXCLDi1wiLFxuXHRcImV1bWxcIjogXCLDq1wiLFxuXHRcImV1cm9cIjogXCLigqxcIixcblx0XCJleGNsXCI6IFwiIVwiLFxuXHRcImV4aXN0XCI6IFwi4oiDXCIsXG5cdFwiRXhpc3RzXCI6IFwi4oiDXCIsXG5cdFwiZXhwZWN0YXRpb25cIjogXCLihLBcIixcblx0XCJleHBvbmVudGlhbGVcIjogXCLihYdcIixcblx0XCJFeHBvbmVudGlhbEVcIjogXCLihYdcIixcblx0XCJmYWxsaW5nZG90c2VxXCI6IFwi4omSXCIsXG5cdFwiRmN5XCI6IFwi0KRcIixcblx0XCJmY3lcIjogXCLRhFwiLFxuXHRcImZlbWFsZVwiOiBcIuKZgFwiLFxuXHRcImZmaWxpZ1wiOiBcIu+sg1wiLFxuXHRcImZmbGlnXCI6IFwi76yAXCIsXG5cdFwiZmZsbGlnXCI6IFwi76yEXCIsXG5cdFwiRmZyXCI6IFwi8J2UiVwiLFxuXHRcImZmclwiOiBcIvCdlKNcIixcblx0XCJmaWxpZ1wiOiBcIu+sgVwiLFxuXHRcIkZpbGxlZFNtYWxsU3F1YXJlXCI6IFwi4pe8XCIsXG5cdFwiRmlsbGVkVmVyeVNtYWxsU3F1YXJlXCI6IFwi4paqXCIsXG5cdFwiZmpsaWdcIjogXCJmalwiLFxuXHRcImZsYXRcIjogXCLima1cIixcblx0XCJmbGxpZ1wiOiBcIu+sglwiLFxuXHRcImZsdG5zXCI6IFwi4paxXCIsXG5cdFwiZm5vZlwiOiBcIsaSXCIsXG5cdFwiRm9wZlwiOiBcIvCdlL1cIixcblx0XCJmb3BmXCI6IFwi8J2Vl1wiLFxuXHRcImZvcmFsbFwiOiBcIuKIgFwiLFxuXHRcIkZvckFsbFwiOiBcIuKIgFwiLFxuXHRcImZvcmtcIjogXCLii5RcIixcblx0XCJmb3JrdlwiOiBcIuKrmVwiLFxuXHRcIkZvdXJpZXJ0cmZcIjogXCLihLFcIixcblx0XCJmcGFydGludFwiOiBcIuKojVwiLFxuXHRcImZyYWMxMlwiOiBcIsK9XCIsXG5cdFwiZnJhYzEzXCI6IFwi4oWTXCIsXG5cdFwiZnJhYzE0XCI6IFwiwrxcIixcblx0XCJmcmFjMTVcIjogXCLihZVcIixcblx0XCJmcmFjMTZcIjogXCLihZlcIixcblx0XCJmcmFjMThcIjogXCLihZtcIixcblx0XCJmcmFjMjNcIjogXCLihZRcIixcblx0XCJmcmFjMjVcIjogXCLihZZcIixcblx0XCJmcmFjMzRcIjogXCLCvlwiLFxuXHRcImZyYWMzNVwiOiBcIuKFl1wiLFxuXHRcImZyYWMzOFwiOiBcIuKFnFwiLFxuXHRcImZyYWM0NVwiOiBcIuKFmFwiLFxuXHRcImZyYWM1NlwiOiBcIuKFmlwiLFxuXHRcImZyYWM1OFwiOiBcIuKFnVwiLFxuXHRcImZyYWM3OFwiOiBcIuKFnlwiLFxuXHRcImZyYXNsXCI6IFwi4oGEXCIsXG5cdFwiZnJvd25cIjogXCLijKJcIixcblx0XCJmc2NyXCI6IFwi8J2Su1wiLFxuXHRcIkZzY3JcIjogXCLihLFcIixcblx0XCJnYWN1dGVcIjogXCLHtVwiLFxuXHRcIkdhbW1hXCI6IFwizpNcIixcblx0XCJnYW1tYVwiOiBcIs6zXCIsXG5cdFwiR2FtbWFkXCI6IFwiz5xcIixcblx0XCJnYW1tYWRcIjogXCLPnVwiLFxuXHRcImdhcFwiOiBcIuKqhlwiLFxuXHRcIkdicmV2ZVwiOiBcIsSeXCIsXG5cdFwiZ2JyZXZlXCI6IFwixJ9cIixcblx0XCJHY2VkaWxcIjogXCLEolwiLFxuXHRcIkdjaXJjXCI6IFwixJxcIixcblx0XCJnY2lyY1wiOiBcIsSdXCIsXG5cdFwiR2N5XCI6IFwi0JNcIixcblx0XCJnY3lcIjogXCLQs1wiLFxuXHRcIkdkb3RcIjogXCLEoFwiLFxuXHRcImdkb3RcIjogXCLEoVwiLFxuXHRcImdlXCI6IFwi4omlXCIsXG5cdFwiZ0VcIjogXCLiiadcIixcblx0XCJnRWxcIjogXCLiqoxcIixcblx0XCJnZWxcIjogXCLii5tcIixcblx0XCJnZXFcIjogXCLiiaVcIixcblx0XCJnZXFxXCI6IFwi4omnXCIsXG5cdFwiZ2Vxc2xhbnRcIjogXCLiqb5cIixcblx0XCJnZXNjY1wiOiBcIuKqqVwiLFxuXHRcImdlc1wiOiBcIuKpvlwiLFxuXHRcImdlc2RvdFwiOiBcIuKqgFwiLFxuXHRcImdlc2RvdG9cIjogXCLiqoJcIixcblx0XCJnZXNkb3RvbFwiOiBcIuKqhFwiLFxuXHRcImdlc2xcIjogXCLii5vvuIBcIixcblx0XCJnZXNsZXNcIjogXCLiqpRcIixcblx0XCJHZnJcIjogXCLwnZSKXCIsXG5cdFwiZ2ZyXCI6IFwi8J2UpFwiLFxuXHRcImdnXCI6IFwi4omrXCIsXG5cdFwiR2dcIjogXCLii5lcIixcblx0XCJnZ2dcIjogXCLii5lcIixcblx0XCJnaW1lbFwiOiBcIuKEt1wiLFxuXHRcIkdKY3lcIjogXCLQg1wiLFxuXHRcImdqY3lcIjogXCLRk1wiLFxuXHRcImdsYVwiOiBcIuKqpVwiLFxuXHRcImdsXCI6IFwi4om3XCIsXG5cdFwiZ2xFXCI6IFwi4qqSXCIsXG5cdFwiZ2xqXCI6IFwi4qqkXCIsXG5cdFwiZ25hcFwiOiBcIuKqilwiLFxuXHRcImduYXBwcm94XCI6IFwi4qqKXCIsXG5cdFwiZ25lXCI6IFwi4qqIXCIsXG5cdFwiZ25FXCI6IFwi4ompXCIsXG5cdFwiZ25lcVwiOiBcIuKqiFwiLFxuXHRcImduZXFxXCI6IFwi4ompXCIsXG5cdFwiZ25zaW1cIjogXCLii6dcIixcblx0XCJHb3BmXCI6IFwi8J2UvlwiLFxuXHRcImdvcGZcIjogXCLwnZWYXCIsXG5cdFwiZ3JhdmVcIjogXCJgXCIsXG5cdFwiR3JlYXRlckVxdWFsXCI6IFwi4omlXCIsXG5cdFwiR3JlYXRlckVxdWFsTGVzc1wiOiBcIuKLm1wiLFxuXHRcIkdyZWF0ZXJGdWxsRXF1YWxcIjogXCLiiadcIixcblx0XCJHcmVhdGVyR3JlYXRlclwiOiBcIuKqolwiLFxuXHRcIkdyZWF0ZXJMZXNzXCI6IFwi4om3XCIsXG5cdFwiR3JlYXRlclNsYW50RXF1YWxcIjogXCLiqb5cIixcblx0XCJHcmVhdGVyVGlsZGVcIjogXCLiibNcIixcblx0XCJHc2NyXCI6IFwi8J2SolwiLFxuXHRcImdzY3JcIjogXCLihIpcIixcblx0XCJnc2ltXCI6IFwi4omzXCIsXG5cdFwiZ3NpbWVcIjogXCLiqo5cIixcblx0XCJnc2ltbFwiOiBcIuKqkFwiLFxuXHRcImd0Y2NcIjogXCLiqqdcIixcblx0XCJndGNpclwiOiBcIuKpulwiLFxuXHRcImd0XCI6IFwiPlwiLFxuXHRcIkdUXCI6IFwiPlwiLFxuXHRcIkd0XCI6IFwi4omrXCIsXG5cdFwiZ3Rkb3RcIjogXCLii5dcIixcblx0XCJndGxQYXJcIjogXCLippVcIixcblx0XCJndHF1ZXN0XCI6IFwi4qm8XCIsXG5cdFwiZ3RyYXBwcm94XCI6IFwi4qqGXCIsXG5cdFwiZ3RyYXJyXCI6IFwi4qW4XCIsXG5cdFwiZ3RyZG90XCI6IFwi4ouXXCIsXG5cdFwiZ3RyZXFsZXNzXCI6IFwi4oubXCIsXG5cdFwiZ3RyZXFxbGVzc1wiOiBcIuKqjFwiLFxuXHRcImd0cmxlc3NcIjogXCLiibdcIixcblx0XCJndHJzaW1cIjogXCLiibNcIixcblx0XCJndmVydG5lcXFcIjogXCLiianvuIBcIixcblx0XCJndm5FXCI6IFwi4omp77iAXCIsXG5cdFwiSGFjZWtcIjogXCLLh1wiLFxuXHRcImhhaXJzcFwiOiBcIuKAilwiLFxuXHRcImhhbGZcIjogXCLCvVwiLFxuXHRcImhhbWlsdFwiOiBcIuKEi1wiLFxuXHRcIkhBUkRjeVwiOiBcItCqXCIsXG5cdFwiaGFyZGN5XCI6IFwi0YpcIixcblx0XCJoYXJyY2lyXCI6IFwi4qWIXCIsXG5cdFwiaGFyclwiOiBcIuKGlFwiLFxuXHRcImhBcnJcIjogXCLih5RcIixcblx0XCJoYXJyd1wiOiBcIuKGrVwiLFxuXHRcIkhhdFwiOiBcIl5cIixcblx0XCJoYmFyXCI6IFwi4oSPXCIsXG5cdFwiSGNpcmNcIjogXCLEpFwiLFxuXHRcImhjaXJjXCI6IFwixKVcIixcblx0XCJoZWFydHNcIjogXCLimaVcIixcblx0XCJoZWFydHN1aXRcIjogXCLimaVcIixcblx0XCJoZWxsaXBcIjogXCLigKZcIixcblx0XCJoZXJjb25cIjogXCLiirlcIixcblx0XCJoZnJcIjogXCLwnZSlXCIsXG5cdFwiSGZyXCI6IFwi4oSMXCIsXG5cdFwiSGlsYmVydFNwYWNlXCI6IFwi4oSLXCIsXG5cdFwiaGtzZWFyb3dcIjogXCLipKVcIixcblx0XCJoa3N3YXJvd1wiOiBcIuKkplwiLFxuXHRcImhvYXJyXCI6IFwi4oe/XCIsXG5cdFwiaG9tdGh0XCI6IFwi4oi7XCIsXG5cdFwiaG9va2xlZnRhcnJvd1wiOiBcIuKGqVwiLFxuXHRcImhvb2tyaWdodGFycm93XCI6IFwi4oaqXCIsXG5cdFwiaG9wZlwiOiBcIvCdlZlcIixcblx0XCJIb3BmXCI6IFwi4oSNXCIsXG5cdFwiaG9yYmFyXCI6IFwi4oCVXCIsXG5cdFwiSG9yaXpvbnRhbExpbmVcIjogXCLilIBcIixcblx0XCJoc2NyXCI6IFwi8J2SvVwiLFxuXHRcIkhzY3JcIjogXCLihItcIixcblx0XCJoc2xhc2hcIjogXCLihI9cIixcblx0XCJIc3Ryb2tcIjogXCLEplwiLFxuXHRcImhzdHJva1wiOiBcIsSnXCIsXG5cdFwiSHVtcERvd25IdW1wXCI6IFwi4omOXCIsXG5cdFwiSHVtcEVxdWFsXCI6IFwi4omPXCIsXG5cdFwiaHlidWxsXCI6IFwi4oGDXCIsXG5cdFwiaHlwaGVuXCI6IFwi4oCQXCIsXG5cdFwiSWFjdXRlXCI6IFwiw41cIixcblx0XCJpYWN1dGVcIjogXCLDrVwiLFxuXHRcImljXCI6IFwi4oGjXCIsXG5cdFwiSWNpcmNcIjogXCLDjlwiLFxuXHRcImljaXJjXCI6IFwiw65cIixcblx0XCJJY3lcIjogXCLQmFwiLFxuXHRcImljeVwiOiBcItC4XCIsXG5cdFwiSWRvdFwiOiBcIsSwXCIsXG5cdFwiSUVjeVwiOiBcItCVXCIsXG5cdFwiaWVjeVwiOiBcItC1XCIsXG5cdFwiaWV4Y2xcIjogXCLCoVwiLFxuXHRcImlmZlwiOiBcIuKHlFwiLFxuXHRcImlmclwiOiBcIvCdlKZcIixcblx0XCJJZnJcIjogXCLihJFcIixcblx0XCJJZ3JhdmVcIjogXCLDjFwiLFxuXHRcImlncmF2ZVwiOiBcIsOsXCIsXG5cdFwiaWlcIjogXCLihYhcIixcblx0XCJpaWlpbnRcIjogXCLiqIxcIixcblx0XCJpaWludFwiOiBcIuKIrVwiLFxuXHRcImlpbmZpblwiOiBcIuKnnFwiLFxuXHRcImlpb3RhXCI6IFwi4oSpXCIsXG5cdFwiSUpsaWdcIjogXCLEslwiLFxuXHRcImlqbGlnXCI6IFwixLNcIixcblx0XCJJbWFjclwiOiBcIsSqXCIsXG5cdFwiaW1hY3JcIjogXCLEq1wiLFxuXHRcImltYWdlXCI6IFwi4oSRXCIsXG5cdFwiSW1hZ2luYXJ5SVwiOiBcIuKFiFwiLFxuXHRcImltYWdsaW5lXCI6IFwi4oSQXCIsXG5cdFwiaW1hZ3BhcnRcIjogXCLihJFcIixcblx0XCJpbWF0aFwiOiBcIsSxXCIsXG5cdFwiSW1cIjogXCLihJFcIixcblx0XCJpbW9mXCI6IFwi4oq3XCIsXG5cdFwiaW1wZWRcIjogXCLGtVwiLFxuXHRcIkltcGxpZXNcIjogXCLih5JcIixcblx0XCJpbmNhcmVcIjogXCLihIVcIixcblx0XCJpblwiOiBcIuKIiFwiLFxuXHRcImluZmluXCI6IFwi4oieXCIsXG5cdFwiaW5maW50aWVcIjogXCLip51cIixcblx0XCJpbm9kb3RcIjogXCLEsVwiLFxuXHRcImludGNhbFwiOiBcIuKKulwiLFxuXHRcImludFwiOiBcIuKIq1wiLFxuXHRcIkludFwiOiBcIuKIrFwiLFxuXHRcImludGVnZXJzXCI6IFwi4oSkXCIsXG5cdFwiSW50ZWdyYWxcIjogXCLiiKtcIixcblx0XCJpbnRlcmNhbFwiOiBcIuKKulwiLFxuXHRcIkludGVyc2VjdGlvblwiOiBcIuKLglwiLFxuXHRcImludGxhcmhrXCI6IFwi4qiXXCIsXG5cdFwiaW50cHJvZFwiOiBcIuKovFwiLFxuXHRcIkludmlzaWJsZUNvbW1hXCI6IFwi4oGjXCIsXG5cdFwiSW52aXNpYmxlVGltZXNcIjogXCLigaJcIixcblx0XCJJT2N5XCI6IFwi0IFcIixcblx0XCJpb2N5XCI6IFwi0ZFcIixcblx0XCJJb2dvblwiOiBcIsSuXCIsXG5cdFwiaW9nb25cIjogXCLEr1wiLFxuXHRcIklvcGZcIjogXCLwnZWAXCIsXG5cdFwiaW9wZlwiOiBcIvCdlZpcIixcblx0XCJJb3RhXCI6IFwizplcIixcblx0XCJpb3RhXCI6IFwizrlcIixcblx0XCJpcHJvZFwiOiBcIuKovFwiLFxuXHRcImlxdWVzdFwiOiBcIsK/XCIsXG5cdFwiaXNjclwiOiBcIvCdkr5cIixcblx0XCJJc2NyXCI6IFwi4oSQXCIsXG5cdFwiaXNpblwiOiBcIuKIiFwiLFxuXHRcImlzaW5kb3RcIjogXCLii7VcIixcblx0XCJpc2luRVwiOiBcIuKLuVwiLFxuXHRcImlzaW5zXCI6IFwi4ou0XCIsXG5cdFwiaXNpbnN2XCI6IFwi4ouzXCIsXG5cdFwiaXNpbnZcIjogXCLiiIhcIixcblx0XCJpdFwiOiBcIuKBolwiLFxuXHRcIkl0aWxkZVwiOiBcIsSoXCIsXG5cdFwiaXRpbGRlXCI6IFwixKlcIixcblx0XCJJdWtjeVwiOiBcItCGXCIsXG5cdFwiaXVrY3lcIjogXCLRllwiLFxuXHRcIkl1bWxcIjogXCLDj1wiLFxuXHRcIml1bWxcIjogXCLDr1wiLFxuXHRcIkpjaXJjXCI6IFwixLRcIixcblx0XCJqY2lyY1wiOiBcIsS1XCIsXG5cdFwiSmN5XCI6IFwi0JlcIixcblx0XCJqY3lcIjogXCLQuVwiLFxuXHRcIkpmclwiOiBcIvCdlI1cIixcblx0XCJqZnJcIjogXCLwnZSnXCIsXG5cdFwiam1hdGhcIjogXCLIt1wiLFxuXHRcIkpvcGZcIjogXCLwnZWBXCIsXG5cdFwiam9wZlwiOiBcIvCdlZtcIixcblx0XCJKc2NyXCI6IFwi8J2SpVwiLFxuXHRcImpzY3JcIjogXCLwnZK/XCIsXG5cdFwiSnNlcmN5XCI6IFwi0IhcIixcblx0XCJqc2VyY3lcIjogXCLRmFwiLFxuXHRcIkp1a2N5XCI6IFwi0IRcIixcblx0XCJqdWtjeVwiOiBcItGUXCIsXG5cdFwiS2FwcGFcIjogXCLOmlwiLFxuXHRcImthcHBhXCI6IFwizrpcIixcblx0XCJrYXBwYXZcIjogXCLPsFwiLFxuXHRcIktjZWRpbFwiOiBcIsS2XCIsXG5cdFwia2NlZGlsXCI6IFwixLdcIixcblx0XCJLY3lcIjogXCLQmlwiLFxuXHRcImtjeVwiOiBcItC6XCIsXG5cdFwiS2ZyXCI6IFwi8J2UjlwiLFxuXHRcImtmclwiOiBcIvCdlKhcIixcblx0XCJrZ3JlZW5cIjogXCLEuFwiLFxuXHRcIktIY3lcIjogXCLQpVwiLFxuXHRcImtoY3lcIjogXCLRhVwiLFxuXHRcIktKY3lcIjogXCLQjFwiLFxuXHRcImtqY3lcIjogXCLRnFwiLFxuXHRcIktvcGZcIjogXCLwnZWCXCIsXG5cdFwia29wZlwiOiBcIvCdlZxcIixcblx0XCJLc2NyXCI6IFwi8J2SplwiLFxuXHRcImtzY3JcIjogXCLwnZOAXCIsXG5cdFwibEFhcnJcIjogXCLih5pcIixcblx0XCJMYWN1dGVcIjogXCLEuVwiLFxuXHRcImxhY3V0ZVwiOiBcIsS6XCIsXG5cdFwibGFlbXB0eXZcIjogXCLiprRcIixcblx0XCJsYWdyYW5cIjogXCLihJJcIixcblx0XCJMYW1iZGFcIjogXCLOm1wiLFxuXHRcImxhbWJkYVwiOiBcIs67XCIsXG5cdFwibGFuZ1wiOiBcIuKfqFwiLFxuXHRcIkxhbmdcIjogXCLin6pcIixcblx0XCJsYW5nZFwiOiBcIuKmkVwiLFxuXHRcImxhbmdsZVwiOiBcIuKfqFwiLFxuXHRcImxhcFwiOiBcIuKqhVwiLFxuXHRcIkxhcGxhY2V0cmZcIjogXCLihJJcIixcblx0XCJsYXF1b1wiOiBcIsKrXCIsXG5cdFwibGFycmJcIjogXCLih6RcIixcblx0XCJsYXJyYmZzXCI6IFwi4qSfXCIsXG5cdFwibGFyclwiOiBcIuKGkFwiLFxuXHRcIkxhcnJcIjogXCLihp5cIixcblx0XCJsQXJyXCI6IFwi4oeQXCIsXG5cdFwibGFycmZzXCI6IFwi4qSdXCIsXG5cdFwibGFycmhrXCI6IFwi4oapXCIsXG5cdFwibGFycmxwXCI6IFwi4oarXCIsXG5cdFwibGFycnBsXCI6IFwi4qS5XCIsXG5cdFwibGFycnNpbVwiOiBcIuKls1wiLFxuXHRcImxhcnJ0bFwiOiBcIuKGolwiLFxuXHRcImxhdGFpbFwiOiBcIuKkmVwiLFxuXHRcImxBdGFpbFwiOiBcIuKkm1wiLFxuXHRcImxhdFwiOiBcIuKqq1wiLFxuXHRcImxhdGVcIjogXCLiqq1cIixcblx0XCJsYXRlc1wiOiBcIuKqre+4gFwiLFxuXHRcImxiYXJyXCI6IFwi4qSMXCIsXG5cdFwibEJhcnJcIjogXCLipI5cIixcblx0XCJsYmJya1wiOiBcIuKdslwiLFxuXHRcImxicmFjZVwiOiBcIntcIixcblx0XCJsYnJhY2tcIjogXCJbXCIsXG5cdFwibGJya2VcIjogXCLipotcIixcblx0XCJsYnJrc2xkXCI6IFwi4qaPXCIsXG5cdFwibGJya3NsdVwiOiBcIuKmjVwiLFxuXHRcIkxjYXJvblwiOiBcIsS9XCIsXG5cdFwibGNhcm9uXCI6IFwixL5cIixcblx0XCJMY2VkaWxcIjogXCLEu1wiLFxuXHRcImxjZWRpbFwiOiBcIsS8XCIsXG5cdFwibGNlaWxcIjogXCLijIhcIixcblx0XCJsY3ViXCI6IFwie1wiLFxuXHRcIkxjeVwiOiBcItCbXCIsXG5cdFwibGN5XCI6IFwi0LtcIixcblx0XCJsZGNhXCI6IFwi4qS2XCIsXG5cdFwibGRxdW9cIjogXCLigJxcIixcblx0XCJsZHF1b3JcIjogXCLigJ5cIixcblx0XCJsZHJkaGFyXCI6IFwi4qWnXCIsXG5cdFwibGRydXNoYXJcIjogXCLipYtcIixcblx0XCJsZHNoXCI6IFwi4oayXCIsXG5cdFwibGVcIjogXCLiiaRcIixcblx0XCJsRVwiOiBcIuKJplwiLFxuXHRcIkxlZnRBbmdsZUJyYWNrZXRcIjogXCLin6hcIixcblx0XCJMZWZ0QXJyb3dCYXJcIjogXCLih6RcIixcblx0XCJsZWZ0YXJyb3dcIjogXCLihpBcIixcblx0XCJMZWZ0QXJyb3dcIjogXCLihpBcIixcblx0XCJMZWZ0YXJyb3dcIjogXCLih5BcIixcblx0XCJMZWZ0QXJyb3dSaWdodEFycm93XCI6IFwi4oeGXCIsXG5cdFwibGVmdGFycm93dGFpbFwiOiBcIuKGolwiLFxuXHRcIkxlZnRDZWlsaW5nXCI6IFwi4oyIXCIsXG5cdFwiTGVmdERvdWJsZUJyYWNrZXRcIjogXCLin6ZcIixcblx0XCJMZWZ0RG93blRlZVZlY3RvclwiOiBcIuKloVwiLFxuXHRcIkxlZnREb3duVmVjdG9yQmFyXCI6IFwi4qWZXCIsXG5cdFwiTGVmdERvd25WZWN0b3JcIjogXCLih4NcIixcblx0XCJMZWZ0Rmxvb3JcIjogXCLijIpcIixcblx0XCJsZWZ0aGFycG9vbmRvd25cIjogXCLihr1cIixcblx0XCJsZWZ0aGFycG9vbnVwXCI6IFwi4oa8XCIsXG5cdFwibGVmdGxlZnRhcnJvd3NcIjogXCLih4dcIixcblx0XCJsZWZ0cmlnaHRhcnJvd1wiOiBcIuKGlFwiLFxuXHRcIkxlZnRSaWdodEFycm93XCI6IFwi4oaUXCIsXG5cdFwiTGVmdHJpZ2h0YXJyb3dcIjogXCLih5RcIixcblx0XCJsZWZ0cmlnaHRhcnJvd3NcIjogXCLih4ZcIixcblx0XCJsZWZ0cmlnaHRoYXJwb29uc1wiOiBcIuKHi1wiLFxuXHRcImxlZnRyaWdodHNxdWlnYXJyb3dcIjogXCLihq1cIixcblx0XCJMZWZ0UmlnaHRWZWN0b3JcIjogXCLipY5cIixcblx0XCJMZWZ0VGVlQXJyb3dcIjogXCLihqRcIixcblx0XCJMZWZ0VGVlXCI6IFwi4oqjXCIsXG5cdFwiTGVmdFRlZVZlY3RvclwiOiBcIuKlmlwiLFxuXHRcImxlZnR0aHJlZXRpbWVzXCI6IFwi4ouLXCIsXG5cdFwiTGVmdFRyaWFuZ2xlQmFyXCI6IFwi4qePXCIsXG5cdFwiTGVmdFRyaWFuZ2xlXCI6IFwi4oqyXCIsXG5cdFwiTGVmdFRyaWFuZ2xlRXF1YWxcIjogXCLiirRcIixcblx0XCJMZWZ0VXBEb3duVmVjdG9yXCI6IFwi4qWRXCIsXG5cdFwiTGVmdFVwVGVlVmVjdG9yXCI6IFwi4qWgXCIsXG5cdFwiTGVmdFVwVmVjdG9yQmFyXCI6IFwi4qWYXCIsXG5cdFwiTGVmdFVwVmVjdG9yXCI6IFwi4oa/XCIsXG5cdFwiTGVmdFZlY3RvckJhclwiOiBcIuKlklwiLFxuXHRcIkxlZnRWZWN0b3JcIjogXCLihrxcIixcblx0XCJsRWdcIjogXCLiqotcIixcblx0XCJsZWdcIjogXCLii5pcIixcblx0XCJsZXFcIjogXCLiiaRcIixcblx0XCJsZXFxXCI6IFwi4ommXCIsXG5cdFwibGVxc2xhbnRcIjogXCLiqb1cIixcblx0XCJsZXNjY1wiOiBcIuKqqFwiLFxuXHRcImxlc1wiOiBcIuKpvVwiLFxuXHRcImxlc2RvdFwiOiBcIuKpv1wiLFxuXHRcImxlc2RvdG9cIjogXCLiqoFcIixcblx0XCJsZXNkb3RvclwiOiBcIuKqg1wiLFxuXHRcImxlc2dcIjogXCLii5rvuIBcIixcblx0XCJsZXNnZXNcIjogXCLiqpNcIixcblx0XCJsZXNzYXBwcm94XCI6IFwi4qqFXCIsXG5cdFwibGVzc2RvdFwiOiBcIuKLllwiLFxuXHRcImxlc3NlcWd0clwiOiBcIuKLmlwiLFxuXHRcImxlc3NlcXFndHJcIjogXCLiqotcIixcblx0XCJMZXNzRXF1YWxHcmVhdGVyXCI6IFwi4ouaXCIsXG5cdFwiTGVzc0Z1bGxFcXVhbFwiOiBcIuKJplwiLFxuXHRcIkxlc3NHcmVhdGVyXCI6IFwi4om2XCIsXG5cdFwibGVzc2d0clwiOiBcIuKJtlwiLFxuXHRcIkxlc3NMZXNzXCI6IFwi4qqhXCIsXG5cdFwibGVzc3NpbVwiOiBcIuKJslwiLFxuXHRcIkxlc3NTbGFudEVxdWFsXCI6IFwi4qm9XCIsXG5cdFwiTGVzc1RpbGRlXCI6IFwi4omyXCIsXG5cdFwibGZpc2h0XCI6IFwi4qW8XCIsXG5cdFwibGZsb29yXCI6IFwi4oyKXCIsXG5cdFwiTGZyXCI6IFwi8J2Uj1wiLFxuXHRcImxmclwiOiBcIvCdlKlcIixcblx0XCJsZ1wiOiBcIuKJtlwiLFxuXHRcImxnRVwiOiBcIuKqkVwiLFxuXHRcImxIYXJcIjogXCLipaJcIixcblx0XCJsaGFyZFwiOiBcIuKGvVwiLFxuXHRcImxoYXJ1XCI6IFwi4oa8XCIsXG5cdFwibGhhcnVsXCI6IFwi4qWqXCIsXG5cdFwibGhibGtcIjogXCLiloRcIixcblx0XCJMSmN5XCI6IFwi0IlcIixcblx0XCJsamN5XCI6IFwi0ZlcIixcblx0XCJsbGFyclwiOiBcIuKHh1wiLFxuXHRcImxsXCI6IFwi4omqXCIsXG5cdFwiTGxcIjogXCLii5hcIixcblx0XCJsbGNvcm5lclwiOiBcIuKMnlwiLFxuXHRcIkxsZWZ0YXJyb3dcIjogXCLih5pcIixcblx0XCJsbGhhcmRcIjogXCLipatcIixcblx0XCJsbHRyaVwiOiBcIuKXulwiLFxuXHRcIkxtaWRvdFwiOiBcIsS/XCIsXG5cdFwibG1pZG90XCI6IFwixYBcIixcblx0XCJsbW91c3RhY2hlXCI6IFwi4o6wXCIsXG5cdFwibG1vdXN0XCI6IFwi4o6wXCIsXG5cdFwibG5hcFwiOiBcIuKqiVwiLFxuXHRcImxuYXBwcm94XCI6IFwi4qqJXCIsXG5cdFwibG5lXCI6IFwi4qqHXCIsXG5cdFwibG5FXCI6IFwi4omoXCIsXG5cdFwibG5lcVwiOiBcIuKqh1wiLFxuXHRcImxuZXFxXCI6IFwi4omoXCIsXG5cdFwibG5zaW1cIjogXCLii6ZcIixcblx0XCJsb2FuZ1wiOiBcIuKfrFwiLFxuXHRcImxvYXJyXCI6IFwi4oe9XCIsXG5cdFwibG9icmtcIjogXCLin6ZcIixcblx0XCJsb25nbGVmdGFycm93XCI6IFwi4p+1XCIsXG5cdFwiTG9uZ0xlZnRBcnJvd1wiOiBcIuKftVwiLFxuXHRcIkxvbmdsZWZ0YXJyb3dcIjogXCLin7hcIixcblx0XCJsb25nbGVmdHJpZ2h0YXJyb3dcIjogXCLin7dcIixcblx0XCJMb25nTGVmdFJpZ2h0QXJyb3dcIjogXCLin7dcIixcblx0XCJMb25nbGVmdHJpZ2h0YXJyb3dcIjogXCLin7pcIixcblx0XCJsb25nbWFwc3RvXCI6IFwi4p+8XCIsXG5cdFwibG9uZ3JpZ2h0YXJyb3dcIjogXCLin7ZcIixcblx0XCJMb25nUmlnaHRBcnJvd1wiOiBcIuKftlwiLFxuXHRcIkxvbmdyaWdodGFycm93XCI6IFwi4p+5XCIsXG5cdFwibG9vcGFycm93bGVmdFwiOiBcIuKGq1wiLFxuXHRcImxvb3BhcnJvd3JpZ2h0XCI6IFwi4oasXCIsXG5cdFwibG9wYXJcIjogXCLipoVcIixcblx0XCJMb3BmXCI6IFwi8J2Vg1wiLFxuXHRcImxvcGZcIjogXCLwnZWdXCIsXG5cdFwibG9wbHVzXCI6IFwi4qitXCIsXG5cdFwibG90aW1lc1wiOiBcIuKotFwiLFxuXHRcImxvd2FzdFwiOiBcIuKIl1wiLFxuXHRcImxvd2JhclwiOiBcIl9cIixcblx0XCJMb3dlckxlZnRBcnJvd1wiOiBcIuKGmVwiLFxuXHRcIkxvd2VyUmlnaHRBcnJvd1wiOiBcIuKGmFwiLFxuXHRcImxvelwiOiBcIuKXilwiLFxuXHRcImxvemVuZ2VcIjogXCLil4pcIixcblx0XCJsb3pmXCI6IFwi4qerXCIsXG5cdFwibHBhclwiOiBcIihcIixcblx0XCJscGFybHRcIjogXCLippNcIixcblx0XCJscmFyclwiOiBcIuKHhlwiLFxuXHRcImxyY29ybmVyXCI6IFwi4oyfXCIsXG5cdFwibHJoYXJcIjogXCLih4tcIixcblx0XCJscmhhcmRcIjogXCLipa1cIixcblx0XCJscm1cIjogXCLigI5cIixcblx0XCJscnRyaVwiOiBcIuKKv1wiLFxuXHRcImxzYXF1b1wiOiBcIuKAuVwiLFxuXHRcImxzY3JcIjogXCLwnZOBXCIsXG5cdFwiTHNjclwiOiBcIuKEklwiLFxuXHRcImxzaFwiOiBcIuKGsFwiLFxuXHRcIkxzaFwiOiBcIuKGsFwiLFxuXHRcImxzaW1cIjogXCLiibJcIixcblx0XCJsc2ltZVwiOiBcIuKqjVwiLFxuXHRcImxzaW1nXCI6IFwi4qqPXCIsXG5cdFwibHNxYlwiOiBcIltcIixcblx0XCJsc3F1b1wiOiBcIuKAmFwiLFxuXHRcImxzcXVvclwiOiBcIuKAmlwiLFxuXHRcIkxzdHJva1wiOiBcIsWBXCIsXG5cdFwibHN0cm9rXCI6IFwixYJcIixcblx0XCJsdGNjXCI6IFwi4qqmXCIsXG5cdFwibHRjaXJcIjogXCLiqblcIixcblx0XCJsdFwiOiBcIjxcIixcblx0XCJMVFwiOiBcIjxcIixcblx0XCJMdFwiOiBcIuKJqlwiLFxuXHRcImx0ZG90XCI6IFwi4ouWXCIsXG5cdFwibHRocmVlXCI6IFwi4ouLXCIsXG5cdFwibHRpbWVzXCI6IFwi4ouJXCIsXG5cdFwibHRsYXJyXCI6IFwi4qW2XCIsXG5cdFwibHRxdWVzdFwiOiBcIuKpu1wiLFxuXHRcImx0cmlcIjogXCLil4NcIixcblx0XCJsdHJpZVwiOiBcIuKKtFwiLFxuXHRcImx0cmlmXCI6IFwi4peCXCIsXG5cdFwibHRyUGFyXCI6IFwi4qaWXCIsXG5cdFwibHVyZHNoYXJcIjogXCLipYpcIixcblx0XCJsdXJ1aGFyXCI6IFwi4qWmXCIsXG5cdFwibHZlcnRuZXFxXCI6IFwi4omo77iAXCIsXG5cdFwibHZuRVwiOiBcIuKJqO+4gFwiLFxuXHRcIm1hY3JcIjogXCLCr1wiLFxuXHRcIm1hbGVcIjogXCLimYJcIixcblx0XCJtYWx0XCI6IFwi4pygXCIsXG5cdFwibWFsdGVzZVwiOiBcIuKcoFwiLFxuXHRcIk1hcFwiOiBcIuKkhVwiLFxuXHRcIm1hcFwiOiBcIuKGplwiLFxuXHRcIm1hcHN0b1wiOiBcIuKGplwiLFxuXHRcIm1hcHN0b2Rvd25cIjogXCLihqdcIixcblx0XCJtYXBzdG9sZWZ0XCI6IFwi4oakXCIsXG5cdFwibWFwc3RvdXBcIjogXCLihqVcIixcblx0XCJtYXJrZXJcIjogXCLilq5cIixcblx0XCJtY29tbWFcIjogXCLiqKlcIixcblx0XCJNY3lcIjogXCLQnFwiLFxuXHRcIm1jeVwiOiBcItC8XCIsXG5cdFwibWRhc2hcIjogXCLigJRcIixcblx0XCJtRERvdFwiOiBcIuKIulwiLFxuXHRcIm1lYXN1cmVkYW5nbGVcIjogXCLiiKFcIixcblx0XCJNZWRpdW1TcGFjZVwiOiBcIuKBn1wiLFxuXHRcIk1lbGxpbnRyZlwiOiBcIuKEs1wiLFxuXHRcIk1mclwiOiBcIvCdlJBcIixcblx0XCJtZnJcIjogXCLwnZSqXCIsXG5cdFwibWhvXCI6IFwi4oSnXCIsXG5cdFwibWljcm9cIjogXCLCtVwiLFxuXHRcIm1pZGFzdFwiOiBcIipcIixcblx0XCJtaWRjaXJcIjogXCLiq7BcIixcblx0XCJtaWRcIjogXCLiiKNcIixcblx0XCJtaWRkb3RcIjogXCLCt1wiLFxuXHRcIm1pbnVzYlwiOiBcIuKKn1wiLFxuXHRcIm1pbnVzXCI6IFwi4oiSXCIsXG5cdFwibWludXNkXCI6IFwi4oi4XCIsXG5cdFwibWludXNkdVwiOiBcIuKoqlwiLFxuXHRcIk1pbnVzUGx1c1wiOiBcIuKIk1wiLFxuXHRcIm1sY3BcIjogXCLiq5tcIixcblx0XCJtbGRyXCI6IFwi4oCmXCIsXG5cdFwibW5wbHVzXCI6IFwi4oiTXCIsXG5cdFwibW9kZWxzXCI6IFwi4oqnXCIsXG5cdFwiTW9wZlwiOiBcIvCdlYRcIixcblx0XCJtb3BmXCI6IFwi8J2VnlwiLFxuXHRcIm1wXCI6IFwi4oiTXCIsXG5cdFwibXNjclwiOiBcIvCdk4JcIixcblx0XCJNc2NyXCI6IFwi4oSzXCIsXG5cdFwibXN0cG9zXCI6IFwi4oi+XCIsXG5cdFwiTXVcIjogXCLOnFwiLFxuXHRcIm11XCI6IFwizrxcIixcblx0XCJtdWx0aW1hcFwiOiBcIuKKuFwiLFxuXHRcIm11bWFwXCI6IFwi4oq4XCIsXG5cdFwibmFibGFcIjogXCLiiIdcIixcblx0XCJOYWN1dGVcIjogXCLFg1wiLFxuXHRcIm5hY3V0ZVwiOiBcIsWEXCIsXG5cdFwibmFuZ1wiOiBcIuKIoOKDklwiLFxuXHRcIm5hcFwiOiBcIuKJiVwiLFxuXHRcIm5hcEVcIjogXCLiqbDMuFwiLFxuXHRcIm5hcGlkXCI6IFwi4omLzLhcIixcblx0XCJuYXBvc1wiOiBcIsWJXCIsXG5cdFwibmFwcHJveFwiOiBcIuKJiVwiLFxuXHRcIm5hdHVyYWxcIjogXCLima5cIixcblx0XCJuYXR1cmFsc1wiOiBcIuKElVwiLFxuXHRcIm5hdHVyXCI6IFwi4pmuXCIsXG5cdFwibmJzcFwiOiBcIsKgXCIsXG5cdFwibmJ1bXBcIjogXCLiiY7MuFwiLFxuXHRcIm5idW1wZVwiOiBcIuKJj8y4XCIsXG5cdFwibmNhcFwiOiBcIuKpg1wiLFxuXHRcIk5jYXJvblwiOiBcIsWHXCIsXG5cdFwibmNhcm9uXCI6IFwixYhcIixcblx0XCJOY2VkaWxcIjogXCLFhVwiLFxuXHRcIm5jZWRpbFwiOiBcIsWGXCIsXG5cdFwibmNvbmdcIjogXCLiiYdcIixcblx0XCJuY29uZ2RvdFwiOiBcIuKprcy4XCIsXG5cdFwibmN1cFwiOiBcIuKpglwiLFxuXHRcIk5jeVwiOiBcItCdXCIsXG5cdFwibmN5XCI6IFwi0L1cIixcblx0XCJuZGFzaFwiOiBcIuKAk1wiLFxuXHRcIm5lYXJoa1wiOiBcIuKkpFwiLFxuXHRcIm5lYXJyXCI6IFwi4oaXXCIsXG5cdFwibmVBcnJcIjogXCLih5dcIixcblx0XCJuZWFycm93XCI6IFwi4oaXXCIsXG5cdFwibmVcIjogXCLiiaBcIixcblx0XCJuZWRvdFwiOiBcIuKJkMy4XCIsXG5cdFwiTmVnYXRpdmVNZWRpdW1TcGFjZVwiOiBcIuKAi1wiLFxuXHRcIk5lZ2F0aXZlVGhpY2tTcGFjZVwiOiBcIuKAi1wiLFxuXHRcIk5lZ2F0aXZlVGhpblNwYWNlXCI6IFwi4oCLXCIsXG5cdFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlXCI6IFwi4oCLXCIsXG5cdFwibmVxdWl2XCI6IFwi4omiXCIsXG5cdFwibmVzZWFyXCI6IFwi4qSoXCIsXG5cdFwibmVzaW1cIjogXCLiiYLMuFwiLFxuXHRcIk5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6IFwi4omrXCIsXG5cdFwiTmVzdGVkTGVzc0xlc3NcIjogXCLiiapcIixcblx0XCJOZXdMaW5lXCI6IFwiXFxuXCIsXG5cdFwibmV4aXN0XCI6IFwi4oiEXCIsXG5cdFwibmV4aXN0c1wiOiBcIuKIhFwiLFxuXHRcIk5mclwiOiBcIvCdlJFcIixcblx0XCJuZnJcIjogXCLwnZSrXCIsXG5cdFwibmdFXCI6IFwi4omnzLhcIixcblx0XCJuZ2VcIjogXCLiibFcIixcblx0XCJuZ2VxXCI6IFwi4omxXCIsXG5cdFwibmdlcXFcIjogXCLiiafMuFwiLFxuXHRcIm5nZXFzbGFudFwiOiBcIuKpvsy4XCIsXG5cdFwibmdlc1wiOiBcIuKpvsy4XCIsXG5cdFwibkdnXCI6IFwi4ouZzLhcIixcblx0XCJuZ3NpbVwiOiBcIuKJtVwiLFxuXHRcIm5HdFwiOiBcIuKJq+KDklwiLFxuXHRcIm5ndFwiOiBcIuKJr1wiLFxuXHRcIm5ndHJcIjogXCLiia9cIixcblx0XCJuR3R2XCI6IFwi4omrzLhcIixcblx0XCJuaGFyclwiOiBcIuKGrlwiLFxuXHRcIm5oQXJyXCI6IFwi4oeOXCIsXG5cdFwibmhwYXJcIjogXCLiq7JcIixcblx0XCJuaVwiOiBcIuKIi1wiLFxuXHRcIm5pc1wiOiBcIuKLvFwiLFxuXHRcIm5pc2RcIjogXCLii7pcIixcblx0XCJuaXZcIjogXCLiiItcIixcblx0XCJOSmN5XCI6IFwi0IpcIixcblx0XCJuamN5XCI6IFwi0ZpcIixcblx0XCJubGFyclwiOiBcIuKGmlwiLFxuXHRcIm5sQXJyXCI6IFwi4oeNXCIsXG5cdFwibmxkclwiOiBcIuKApVwiLFxuXHRcIm5sRVwiOiBcIuKJpsy4XCIsXG5cdFwibmxlXCI6IFwi4omwXCIsXG5cdFwibmxlZnRhcnJvd1wiOiBcIuKGmlwiLFxuXHRcIm5MZWZ0YXJyb3dcIjogXCLih41cIixcblx0XCJubGVmdHJpZ2h0YXJyb3dcIjogXCLihq5cIixcblx0XCJuTGVmdHJpZ2h0YXJyb3dcIjogXCLih45cIixcblx0XCJubGVxXCI6IFwi4omwXCIsXG5cdFwibmxlcXFcIjogXCLiiabMuFwiLFxuXHRcIm5sZXFzbGFudFwiOiBcIuKpvcy4XCIsXG5cdFwibmxlc1wiOiBcIuKpvcy4XCIsXG5cdFwibmxlc3NcIjogXCLiia5cIixcblx0XCJuTGxcIjogXCLii5jMuFwiLFxuXHRcIm5sc2ltXCI6IFwi4om0XCIsXG5cdFwibkx0XCI6IFwi4omq4oOSXCIsXG5cdFwibmx0XCI6IFwi4omuXCIsXG5cdFwibmx0cmlcIjogXCLii6pcIixcblx0XCJubHRyaWVcIjogXCLii6xcIixcblx0XCJuTHR2XCI6IFwi4omqzLhcIixcblx0XCJubWlkXCI6IFwi4oikXCIsXG5cdFwiTm9CcmVha1wiOiBcIuKBoFwiLFxuXHRcIk5vbkJyZWFraW5nU3BhY2VcIjogXCLCoFwiLFxuXHRcIm5vcGZcIjogXCLwnZWfXCIsXG5cdFwiTm9wZlwiOiBcIuKElVwiLFxuXHRcIk5vdFwiOiBcIuKrrFwiLFxuXHRcIm5vdFwiOiBcIsKsXCIsXG5cdFwiTm90Q29uZ3J1ZW50XCI6IFwi4omiXCIsXG5cdFwiTm90Q3VwQ2FwXCI6IFwi4omtXCIsXG5cdFwiTm90RG91YmxlVmVydGljYWxCYXJcIjogXCLiiKZcIixcblx0XCJOb3RFbGVtZW50XCI6IFwi4oiJXCIsXG5cdFwiTm90RXF1YWxcIjogXCLiiaBcIixcblx0XCJOb3RFcXVhbFRpbGRlXCI6IFwi4omCzLhcIixcblx0XCJOb3RFeGlzdHNcIjogXCLiiIRcIixcblx0XCJOb3RHcmVhdGVyXCI6IFwi4omvXCIsXG5cdFwiTm90R3JlYXRlckVxdWFsXCI6IFwi4omxXCIsXG5cdFwiTm90R3JlYXRlckZ1bGxFcXVhbFwiOiBcIuKJp8y4XCIsXG5cdFwiTm90R3JlYXRlckdyZWF0ZXJcIjogXCLiiavMuFwiLFxuXHRcIk5vdEdyZWF0ZXJMZXNzXCI6IFwi4om5XCIsXG5cdFwiTm90R3JlYXRlclNsYW50RXF1YWxcIjogXCLiqb7MuFwiLFxuXHRcIk5vdEdyZWF0ZXJUaWxkZVwiOiBcIuKJtVwiLFxuXHRcIk5vdEh1bXBEb3duSHVtcFwiOiBcIuKJjsy4XCIsXG5cdFwiTm90SHVtcEVxdWFsXCI6IFwi4omPzLhcIixcblx0XCJub3RpblwiOiBcIuKIiVwiLFxuXHRcIm5vdGluZG90XCI6IFwi4ou1zLhcIixcblx0XCJub3RpbkVcIjogXCLii7nMuFwiLFxuXHRcIm5vdGludmFcIjogXCLiiIlcIixcblx0XCJub3RpbnZiXCI6IFwi4ou3XCIsXG5cdFwibm90aW52Y1wiOiBcIuKLtlwiLFxuXHRcIk5vdExlZnRUcmlhbmdsZUJhclwiOiBcIuKnj8y4XCIsXG5cdFwiTm90TGVmdFRyaWFuZ2xlXCI6IFwi4ouqXCIsXG5cdFwiTm90TGVmdFRyaWFuZ2xlRXF1YWxcIjogXCLii6xcIixcblx0XCJOb3RMZXNzXCI6IFwi4omuXCIsXG5cdFwiTm90TGVzc0VxdWFsXCI6IFwi4omwXCIsXG5cdFwiTm90TGVzc0dyZWF0ZXJcIjogXCLiibhcIixcblx0XCJOb3RMZXNzTGVzc1wiOiBcIuKJqsy4XCIsXG5cdFwiTm90TGVzc1NsYW50RXF1YWxcIjogXCLiqb3MuFwiLFxuXHRcIk5vdExlc3NUaWxkZVwiOiBcIuKJtFwiLFxuXHRcIk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6IFwi4qqizLhcIixcblx0XCJOb3ROZXN0ZWRMZXNzTGVzc1wiOiBcIuKqocy4XCIsXG5cdFwibm90bmlcIjogXCLiiIxcIixcblx0XCJub3RuaXZhXCI6IFwi4oiMXCIsXG5cdFwibm90bml2YlwiOiBcIuKLvlwiLFxuXHRcIm5vdG5pdmNcIjogXCLii71cIixcblx0XCJOb3RQcmVjZWRlc1wiOiBcIuKKgFwiLFxuXHRcIk5vdFByZWNlZGVzRXF1YWxcIjogXCLiqq/MuFwiLFxuXHRcIk5vdFByZWNlZGVzU2xhbnRFcXVhbFwiOiBcIuKLoFwiLFxuXHRcIk5vdFJldmVyc2VFbGVtZW50XCI6IFwi4oiMXCIsXG5cdFwiTm90UmlnaHRUcmlhbmdsZUJhclwiOiBcIuKnkMy4XCIsXG5cdFwiTm90UmlnaHRUcmlhbmdsZVwiOiBcIuKLq1wiLFxuXHRcIk5vdFJpZ2h0VHJpYW5nbGVFcXVhbFwiOiBcIuKLrVwiLFxuXHRcIk5vdFNxdWFyZVN1YnNldFwiOiBcIuKKj8y4XCIsXG5cdFwiTm90U3F1YXJlU3Vic2V0RXF1YWxcIjogXCLii6JcIixcblx0XCJOb3RTcXVhcmVTdXBlcnNldFwiOiBcIuKKkMy4XCIsXG5cdFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbFwiOiBcIuKLo1wiLFxuXHRcIk5vdFN1YnNldFwiOiBcIuKKguKDklwiLFxuXHRcIk5vdFN1YnNldEVxdWFsXCI6IFwi4oqIXCIsXG5cdFwiTm90U3VjY2VlZHNcIjogXCLiioFcIixcblx0XCJOb3RTdWNjZWVkc0VxdWFsXCI6IFwi4qqwzLhcIixcblx0XCJOb3RTdWNjZWVkc1NsYW50RXF1YWxcIjogXCLii6FcIixcblx0XCJOb3RTdWNjZWVkc1RpbGRlXCI6IFwi4om/zLhcIixcblx0XCJOb3RTdXBlcnNldFwiOiBcIuKKg+KDklwiLFxuXHRcIk5vdFN1cGVyc2V0RXF1YWxcIjogXCLiiolcIixcblx0XCJOb3RUaWxkZVwiOiBcIuKJgVwiLFxuXHRcIk5vdFRpbGRlRXF1YWxcIjogXCLiiYRcIixcblx0XCJOb3RUaWxkZUZ1bGxFcXVhbFwiOiBcIuKJh1wiLFxuXHRcIk5vdFRpbGRlVGlsZGVcIjogXCLiiYlcIixcblx0XCJOb3RWZXJ0aWNhbEJhclwiOiBcIuKIpFwiLFxuXHRcIm5wYXJhbGxlbFwiOiBcIuKIplwiLFxuXHRcIm5wYXJcIjogXCLiiKZcIixcblx0XCJucGFyc2xcIjogXCLiq73ig6VcIixcblx0XCJucGFydFwiOiBcIuKIgsy4XCIsXG5cdFwibnBvbGludFwiOiBcIuKolFwiLFxuXHRcIm5wclwiOiBcIuKKgFwiLFxuXHRcIm5wcmN1ZVwiOiBcIuKLoFwiLFxuXHRcIm5wcmVjXCI6IFwi4oqAXCIsXG5cdFwibnByZWNlcVwiOiBcIuKqr8y4XCIsXG5cdFwibnByZVwiOiBcIuKqr8y4XCIsXG5cdFwibnJhcnJjXCI6IFwi4qSzzLhcIixcblx0XCJucmFyclwiOiBcIuKGm1wiLFxuXHRcIm5yQXJyXCI6IFwi4oePXCIsXG5cdFwibnJhcnJ3XCI6IFwi4oadzLhcIixcblx0XCJucmlnaHRhcnJvd1wiOiBcIuKGm1wiLFxuXHRcIm5SaWdodGFycm93XCI6IFwi4oePXCIsXG5cdFwibnJ0cmlcIjogXCLii6tcIixcblx0XCJucnRyaWVcIjogXCLii61cIixcblx0XCJuc2NcIjogXCLiioFcIixcblx0XCJuc2NjdWVcIjogXCLii6FcIixcblx0XCJuc2NlXCI6IFwi4qqwzLhcIixcblx0XCJOc2NyXCI6IFwi8J2SqVwiLFxuXHRcIm5zY3JcIjogXCLwnZODXCIsXG5cdFwibnNob3J0bWlkXCI6IFwi4oikXCIsXG5cdFwibnNob3J0cGFyYWxsZWxcIjogXCLiiKZcIixcblx0XCJuc2ltXCI6IFwi4omBXCIsXG5cdFwibnNpbWVcIjogXCLiiYRcIixcblx0XCJuc2ltZXFcIjogXCLiiYRcIixcblx0XCJuc21pZFwiOiBcIuKIpFwiLFxuXHRcIm5zcGFyXCI6IFwi4oimXCIsXG5cdFwibnNxc3ViZVwiOiBcIuKLolwiLFxuXHRcIm5zcXN1cGVcIjogXCLii6NcIixcblx0XCJuc3ViXCI6IFwi4oqEXCIsXG5cdFwibnN1YkVcIjogXCLiq4XMuFwiLFxuXHRcIm5zdWJlXCI6IFwi4oqIXCIsXG5cdFwibnN1YnNldFwiOiBcIuKKguKDklwiLFxuXHRcIm5zdWJzZXRlcVwiOiBcIuKKiFwiLFxuXHRcIm5zdWJzZXRlcXFcIjogXCLiq4XMuFwiLFxuXHRcIm5zdWNjXCI6IFwi4oqBXCIsXG5cdFwibnN1Y2NlcVwiOiBcIuKqsMy4XCIsXG5cdFwibnN1cFwiOiBcIuKKhVwiLFxuXHRcIm5zdXBFXCI6IFwi4quGzLhcIixcblx0XCJuc3VwZVwiOiBcIuKKiVwiLFxuXHRcIm5zdXBzZXRcIjogXCLiioPig5JcIixcblx0XCJuc3Vwc2V0ZXFcIjogXCLiiolcIixcblx0XCJuc3Vwc2V0ZXFxXCI6IFwi4quGzLhcIixcblx0XCJudGdsXCI6IFwi4om5XCIsXG5cdFwiTnRpbGRlXCI6IFwiw5FcIixcblx0XCJudGlsZGVcIjogXCLDsVwiLFxuXHRcIm50bGdcIjogXCLiibhcIixcblx0XCJudHJpYW5nbGVsZWZ0XCI6IFwi4ouqXCIsXG5cdFwibnRyaWFuZ2xlbGVmdGVxXCI6IFwi4ousXCIsXG5cdFwibnRyaWFuZ2xlcmlnaHRcIjogXCLii6tcIixcblx0XCJudHJpYW5nbGVyaWdodGVxXCI6IFwi4outXCIsXG5cdFwiTnVcIjogXCLOnVwiLFxuXHRcIm51XCI6IFwizr1cIixcblx0XCJudW1cIjogXCIjXCIsXG5cdFwibnVtZXJvXCI6IFwi4oSWXCIsXG5cdFwibnVtc3BcIjogXCLigIdcIixcblx0XCJudmFwXCI6IFwi4omN4oOSXCIsXG5cdFwibnZkYXNoXCI6IFwi4oqsXCIsXG5cdFwibnZEYXNoXCI6IFwi4oqtXCIsXG5cdFwiblZkYXNoXCI6IFwi4oquXCIsXG5cdFwiblZEYXNoXCI6IFwi4oqvXCIsXG5cdFwibnZnZVwiOiBcIuKJpeKDklwiLFxuXHRcIm52Z3RcIjogXCI+4oOSXCIsXG5cdFwibnZIYXJyXCI6IFwi4qSEXCIsXG5cdFwibnZpbmZpblwiOiBcIuKnnlwiLFxuXHRcIm52bEFyclwiOiBcIuKkglwiLFxuXHRcIm52bGVcIjogXCLiiaTig5JcIixcblx0XCJudmx0XCI6IFwiPOKDklwiLFxuXHRcIm52bHRyaWVcIjogXCLiirTig5JcIixcblx0XCJudnJBcnJcIjogXCLipINcIixcblx0XCJudnJ0cmllXCI6IFwi4oq14oOSXCIsXG5cdFwibnZzaW1cIjogXCLiiLzig5JcIixcblx0XCJud2FyaGtcIjogXCLipKNcIixcblx0XCJud2FyclwiOiBcIuKGllwiLFxuXHRcIm53QXJyXCI6IFwi4oeWXCIsXG5cdFwibndhcnJvd1wiOiBcIuKGllwiLFxuXHRcIm53bmVhclwiOiBcIuKkp1wiLFxuXHRcIk9hY3V0ZVwiOiBcIsOTXCIsXG5cdFwib2FjdXRlXCI6IFwiw7NcIixcblx0XCJvYXN0XCI6IFwi4oqbXCIsXG5cdFwiT2NpcmNcIjogXCLDlFwiLFxuXHRcIm9jaXJjXCI6IFwiw7RcIixcblx0XCJvY2lyXCI6IFwi4oqaXCIsXG5cdFwiT2N5XCI6IFwi0J5cIixcblx0XCJvY3lcIjogXCLQvlwiLFxuXHRcIm9kYXNoXCI6IFwi4oqdXCIsXG5cdFwiT2RibGFjXCI6IFwixZBcIixcblx0XCJvZGJsYWNcIjogXCLFkVwiLFxuXHRcIm9kaXZcIjogXCLiqLhcIixcblx0XCJvZG90XCI6IFwi4oqZXCIsXG5cdFwib2Rzb2xkXCI6IFwi4qa8XCIsXG5cdFwiT0VsaWdcIjogXCLFklwiLFxuXHRcIm9lbGlnXCI6IFwixZNcIixcblx0XCJvZmNpclwiOiBcIuKmv1wiLFxuXHRcIk9mclwiOiBcIvCdlJJcIixcblx0XCJvZnJcIjogXCLwnZSsXCIsXG5cdFwib2dvblwiOiBcIsubXCIsXG5cdFwiT2dyYXZlXCI6IFwiw5JcIixcblx0XCJvZ3JhdmVcIjogXCLDslwiLFxuXHRcIm9ndFwiOiBcIuKngVwiLFxuXHRcIm9oYmFyXCI6IFwi4qa1XCIsXG5cdFwib2htXCI6IFwizqlcIixcblx0XCJvaW50XCI6IFwi4oiuXCIsXG5cdFwib2xhcnJcIjogXCLihrpcIixcblx0XCJvbGNpclwiOiBcIuKmvlwiLFxuXHRcIm9sY3Jvc3NcIjogXCLiprtcIixcblx0XCJvbGluZVwiOiBcIuKAvlwiLFxuXHRcIm9sdFwiOiBcIuKngFwiLFxuXHRcIk9tYWNyXCI6IFwixYxcIixcblx0XCJvbWFjclwiOiBcIsWNXCIsXG5cdFwiT21lZ2FcIjogXCLOqVwiLFxuXHRcIm9tZWdhXCI6IFwiz4lcIixcblx0XCJPbWljcm9uXCI6IFwizp9cIixcblx0XCJvbWljcm9uXCI6IFwizr9cIixcblx0XCJvbWlkXCI6IFwi4qa2XCIsXG5cdFwib21pbnVzXCI6IFwi4oqWXCIsXG5cdFwiT29wZlwiOiBcIvCdlYZcIixcblx0XCJvb3BmXCI6IFwi8J2VoFwiLFxuXHRcIm9wYXJcIjogXCLiprdcIixcblx0XCJPcGVuQ3VybHlEb3VibGVRdW90ZVwiOiBcIuKAnFwiLFxuXHRcIk9wZW5DdXJseVF1b3RlXCI6IFwi4oCYXCIsXG5cdFwib3BlcnBcIjogXCLiprlcIixcblx0XCJvcGx1c1wiOiBcIuKKlVwiLFxuXHRcIm9yYXJyXCI6IFwi4oa7XCIsXG5cdFwiT3JcIjogXCLiqZRcIixcblx0XCJvclwiOiBcIuKIqFwiLFxuXHRcIm9yZFwiOiBcIuKpnVwiLFxuXHRcIm9yZGVyXCI6IFwi4oS0XCIsXG5cdFwib3JkZXJvZlwiOiBcIuKEtFwiLFxuXHRcIm9yZGZcIjogXCLCqlwiLFxuXHRcIm9yZG1cIjogXCLCulwiLFxuXHRcIm9yaWdvZlwiOiBcIuKKtlwiLFxuXHRcIm9yb3JcIjogXCLiqZZcIixcblx0XCJvcnNsb3BlXCI6IFwi4qmXXCIsXG5cdFwib3J2XCI6IFwi4qmbXCIsXG5cdFwib1NcIjogXCLik4hcIixcblx0XCJPc2NyXCI6IFwi8J2SqlwiLFxuXHRcIm9zY3JcIjogXCLihLRcIixcblx0XCJPc2xhc2hcIjogXCLDmFwiLFxuXHRcIm9zbGFzaFwiOiBcIsO4XCIsXG5cdFwib3NvbFwiOiBcIuKKmFwiLFxuXHRcIk90aWxkZVwiOiBcIsOVXCIsXG5cdFwib3RpbGRlXCI6IFwiw7VcIixcblx0XCJvdGltZXNhc1wiOiBcIuKotlwiLFxuXHRcIk90aW1lc1wiOiBcIuKot1wiLFxuXHRcIm90aW1lc1wiOiBcIuKKl1wiLFxuXHRcIk91bWxcIjogXCLDllwiLFxuXHRcIm91bWxcIjogXCLDtlwiLFxuXHRcIm92YmFyXCI6IFwi4oy9XCIsXG5cdFwiT3ZlckJhclwiOiBcIuKAvlwiLFxuXHRcIk92ZXJCcmFjZVwiOiBcIuKPnlwiLFxuXHRcIk92ZXJCcmFja2V0XCI6IFwi4o60XCIsXG5cdFwiT3ZlclBhcmVudGhlc2lzXCI6IFwi4o+cXCIsXG5cdFwicGFyYVwiOiBcIsK2XCIsXG5cdFwicGFyYWxsZWxcIjogXCLiiKVcIixcblx0XCJwYXJcIjogXCLiiKVcIixcblx0XCJwYXJzaW1cIjogXCLiq7NcIixcblx0XCJwYXJzbFwiOiBcIuKrvVwiLFxuXHRcInBhcnRcIjogXCLiiIJcIixcblx0XCJQYXJ0aWFsRFwiOiBcIuKIglwiLFxuXHRcIlBjeVwiOiBcItCfXCIsXG5cdFwicGN5XCI6IFwi0L9cIixcblx0XCJwZXJjbnRcIjogXCIlXCIsXG5cdFwicGVyaW9kXCI6IFwiLlwiLFxuXHRcInBlcm1pbFwiOiBcIuKAsFwiLFxuXHRcInBlcnBcIjogXCLiiqVcIixcblx0XCJwZXJ0ZW5rXCI6IFwi4oCxXCIsXG5cdFwiUGZyXCI6IFwi8J2Uk1wiLFxuXHRcInBmclwiOiBcIvCdlK1cIixcblx0XCJQaGlcIjogXCLOplwiLFxuXHRcInBoaVwiOiBcIs+GXCIsXG5cdFwicGhpdlwiOiBcIs+VXCIsXG5cdFwicGhtbWF0XCI6IFwi4oSzXCIsXG5cdFwicGhvbmVcIjogXCLimI5cIixcblx0XCJQaVwiOiBcIs6gXCIsXG5cdFwicGlcIjogXCLPgFwiLFxuXHRcInBpdGNoZm9ya1wiOiBcIuKLlFwiLFxuXHRcInBpdlwiOiBcIs+WXCIsXG5cdFwicGxhbmNrXCI6IFwi4oSPXCIsXG5cdFwicGxhbmNraFwiOiBcIuKEjlwiLFxuXHRcInBsYW5rdlwiOiBcIuKEj1wiLFxuXHRcInBsdXNhY2lyXCI6IFwi4qijXCIsXG5cdFwicGx1c2JcIjogXCLiip5cIixcblx0XCJwbHVzY2lyXCI6IFwi4qiiXCIsXG5cdFwicGx1c1wiOiBcIitcIixcblx0XCJwbHVzZG9cIjogXCLiiJRcIixcblx0XCJwbHVzZHVcIjogXCLiqKVcIixcblx0XCJwbHVzZVwiOiBcIuKpslwiLFxuXHRcIlBsdXNNaW51c1wiOiBcIsKxXCIsXG5cdFwicGx1c21uXCI6IFwiwrFcIixcblx0XCJwbHVzc2ltXCI6IFwi4qimXCIsXG5cdFwicGx1c3R3b1wiOiBcIuKop1wiLFxuXHRcInBtXCI6IFwiwrFcIixcblx0XCJQb2luY2FyZXBsYW5lXCI6IFwi4oSMXCIsXG5cdFwicG9pbnRpbnRcIjogXCLiqJVcIixcblx0XCJwb3BmXCI6IFwi8J2VoVwiLFxuXHRcIlBvcGZcIjogXCLihJlcIixcblx0XCJwb3VuZFwiOiBcIsKjXCIsXG5cdFwicHJhcFwiOiBcIuKqt1wiLFxuXHRcIlByXCI6IFwi4qq7XCIsXG5cdFwicHJcIjogXCLiibpcIixcblx0XCJwcmN1ZVwiOiBcIuKJvFwiLFxuXHRcInByZWNhcHByb3hcIjogXCLiqrdcIixcblx0XCJwcmVjXCI6IFwi4om6XCIsXG5cdFwicHJlY2N1cmx5ZXFcIjogXCLiibxcIixcblx0XCJQcmVjZWRlc1wiOiBcIuKJulwiLFxuXHRcIlByZWNlZGVzRXF1YWxcIjogXCLiqq9cIixcblx0XCJQcmVjZWRlc1NsYW50RXF1YWxcIjogXCLiibxcIixcblx0XCJQcmVjZWRlc1RpbGRlXCI6IFwi4om+XCIsXG5cdFwicHJlY2VxXCI6IFwi4qqvXCIsXG5cdFwicHJlY25hcHByb3hcIjogXCLiqrlcIixcblx0XCJwcmVjbmVxcVwiOiBcIuKqtVwiLFxuXHRcInByZWNuc2ltXCI6IFwi4ouoXCIsXG5cdFwicHJlXCI6IFwi4qqvXCIsXG5cdFwicHJFXCI6IFwi4qqzXCIsXG5cdFwicHJlY3NpbVwiOiBcIuKJvlwiLFxuXHRcInByaW1lXCI6IFwi4oCyXCIsXG5cdFwiUHJpbWVcIjogXCLigLNcIixcblx0XCJwcmltZXNcIjogXCLihJlcIixcblx0XCJwcm5hcFwiOiBcIuKquVwiLFxuXHRcInBybkVcIjogXCLiqrVcIixcblx0XCJwcm5zaW1cIjogXCLii6hcIixcblx0XCJwcm9kXCI6IFwi4oiPXCIsXG5cdFwiUHJvZHVjdFwiOiBcIuKIj1wiLFxuXHRcInByb2ZhbGFyXCI6IFwi4oyuXCIsXG5cdFwicHJvZmxpbmVcIjogXCLijJJcIixcblx0XCJwcm9mc3VyZlwiOiBcIuKMk1wiLFxuXHRcInByb3BcIjogXCLiiJ1cIixcblx0XCJQcm9wb3J0aW9uYWxcIjogXCLiiJ1cIixcblx0XCJQcm9wb3J0aW9uXCI6IFwi4oi3XCIsXG5cdFwicHJvcHRvXCI6IFwi4oidXCIsXG5cdFwicHJzaW1cIjogXCLiib5cIixcblx0XCJwcnVyZWxcIjogXCLiirBcIixcblx0XCJQc2NyXCI6IFwi8J2Sq1wiLFxuXHRcInBzY3JcIjogXCLwnZOFXCIsXG5cdFwiUHNpXCI6IFwizqhcIixcblx0XCJwc2lcIjogXCLPiFwiLFxuXHRcInB1bmNzcFwiOiBcIuKAiFwiLFxuXHRcIlFmclwiOiBcIvCdlJRcIixcblx0XCJxZnJcIjogXCLwnZSuXCIsXG5cdFwicWludFwiOiBcIuKojFwiLFxuXHRcInFvcGZcIjogXCLwnZWiXCIsXG5cdFwiUW9wZlwiOiBcIuKEmlwiLFxuXHRcInFwcmltZVwiOiBcIuKBl1wiLFxuXHRcIlFzY3JcIjogXCLwnZKsXCIsXG5cdFwicXNjclwiOiBcIvCdk4ZcIixcblx0XCJxdWF0ZXJuaW9uc1wiOiBcIuKEjVwiLFxuXHRcInF1YXRpbnRcIjogXCLiqJZcIixcblx0XCJxdWVzdFwiOiBcIj9cIixcblx0XCJxdWVzdGVxXCI6IFwi4omfXCIsXG5cdFwicXVvdFwiOiBcIlxcXCJcIixcblx0XCJRVU9UXCI6IFwiXFxcIlwiLFxuXHRcInJBYXJyXCI6IFwi4oebXCIsXG5cdFwicmFjZVwiOiBcIuKIvcyxXCIsXG5cdFwiUmFjdXRlXCI6IFwixZRcIixcblx0XCJyYWN1dGVcIjogXCLFlVwiLFxuXHRcInJhZGljXCI6IFwi4oiaXCIsXG5cdFwicmFlbXB0eXZcIjogXCLiprNcIixcblx0XCJyYW5nXCI6IFwi4p+pXCIsXG5cdFwiUmFuZ1wiOiBcIuKfq1wiLFxuXHRcInJhbmdkXCI6IFwi4qaSXCIsXG5cdFwicmFuZ2VcIjogXCLipqVcIixcblx0XCJyYW5nbGVcIjogXCLin6lcIixcblx0XCJyYXF1b1wiOiBcIsK7XCIsXG5cdFwicmFycmFwXCI6IFwi4qW1XCIsXG5cdFwicmFycmJcIjogXCLih6VcIixcblx0XCJyYXJyYmZzXCI6IFwi4qSgXCIsXG5cdFwicmFycmNcIjogXCLipLNcIixcblx0XCJyYXJyXCI6IFwi4oaSXCIsXG5cdFwiUmFyclwiOiBcIuKGoFwiLFxuXHRcInJBcnJcIjogXCLih5JcIixcblx0XCJyYXJyZnNcIjogXCLipJ5cIixcblx0XCJyYXJyaGtcIjogXCLihqpcIixcblx0XCJyYXJybHBcIjogXCLihqxcIixcblx0XCJyYXJycGxcIjogXCLipYVcIixcblx0XCJyYXJyc2ltXCI6IFwi4qW0XCIsXG5cdFwiUmFycnRsXCI6IFwi4qSWXCIsXG5cdFwicmFycnRsXCI6IFwi4oajXCIsXG5cdFwicmFycndcIjogXCLihp1cIixcblx0XCJyYXRhaWxcIjogXCLipJpcIixcblx0XCJyQXRhaWxcIjogXCLipJxcIixcblx0XCJyYXRpb1wiOiBcIuKItlwiLFxuXHRcInJhdGlvbmFsc1wiOiBcIuKEmlwiLFxuXHRcInJiYXJyXCI6IFwi4qSNXCIsXG5cdFwickJhcnJcIjogXCLipI9cIixcblx0XCJSQmFyclwiOiBcIuKkkFwiLFxuXHRcInJiYnJrXCI6IFwi4p2zXCIsXG5cdFwicmJyYWNlXCI6IFwifVwiLFxuXHRcInJicmFja1wiOiBcIl1cIixcblx0XCJyYnJrZVwiOiBcIuKmjFwiLFxuXHRcInJicmtzbGRcIjogXCLipo5cIixcblx0XCJyYnJrc2x1XCI6IFwi4qaQXCIsXG5cdFwiUmNhcm9uXCI6IFwixZhcIixcblx0XCJyY2Fyb25cIjogXCLFmVwiLFxuXHRcIlJjZWRpbFwiOiBcIsWWXCIsXG5cdFwicmNlZGlsXCI6IFwixZdcIixcblx0XCJyY2VpbFwiOiBcIuKMiVwiLFxuXHRcInJjdWJcIjogXCJ9XCIsXG5cdFwiUmN5XCI6IFwi0KBcIixcblx0XCJyY3lcIjogXCLRgFwiLFxuXHRcInJkY2FcIjogXCLipLdcIixcblx0XCJyZGxkaGFyXCI6IFwi4qWpXCIsXG5cdFwicmRxdW9cIjogXCLigJ1cIixcblx0XCJyZHF1b3JcIjogXCLigJ1cIixcblx0XCJyZHNoXCI6IFwi4oazXCIsXG5cdFwicmVhbFwiOiBcIuKEnFwiLFxuXHRcInJlYWxpbmVcIjogXCLihJtcIixcblx0XCJyZWFscGFydFwiOiBcIuKEnFwiLFxuXHRcInJlYWxzXCI6IFwi4oSdXCIsXG5cdFwiUmVcIjogXCLihJxcIixcblx0XCJyZWN0XCI6IFwi4patXCIsXG5cdFwicmVnXCI6IFwiwq5cIixcblx0XCJSRUdcIjogXCLCrlwiLFxuXHRcIlJldmVyc2VFbGVtZW50XCI6IFwi4oiLXCIsXG5cdFwiUmV2ZXJzZUVxdWlsaWJyaXVtXCI6IFwi4oeLXCIsXG5cdFwiUmV2ZXJzZVVwRXF1aWxpYnJpdW1cIjogXCLipa9cIixcblx0XCJyZmlzaHRcIjogXCLipb1cIixcblx0XCJyZmxvb3JcIjogXCLijItcIixcblx0XCJyZnJcIjogXCLwnZSvXCIsXG5cdFwiUmZyXCI6IFwi4oScXCIsXG5cdFwickhhclwiOiBcIuKlpFwiLFxuXHRcInJoYXJkXCI6IFwi4oeBXCIsXG5cdFwicmhhcnVcIjogXCLih4BcIixcblx0XCJyaGFydWxcIjogXCLipaxcIixcblx0XCJSaG9cIjogXCLOoVwiLFxuXHRcInJob1wiOiBcIs+BXCIsXG5cdFwicmhvdlwiOiBcIs+xXCIsXG5cdFwiUmlnaHRBbmdsZUJyYWNrZXRcIjogXCLin6lcIixcblx0XCJSaWdodEFycm93QmFyXCI6IFwi4oelXCIsXG5cdFwicmlnaHRhcnJvd1wiOiBcIuKGklwiLFxuXHRcIlJpZ2h0QXJyb3dcIjogXCLihpJcIixcblx0XCJSaWdodGFycm93XCI6IFwi4oeSXCIsXG5cdFwiUmlnaHRBcnJvd0xlZnRBcnJvd1wiOiBcIuKHhFwiLFxuXHRcInJpZ2h0YXJyb3d0YWlsXCI6IFwi4oajXCIsXG5cdFwiUmlnaHRDZWlsaW5nXCI6IFwi4oyJXCIsXG5cdFwiUmlnaHREb3VibGVCcmFja2V0XCI6IFwi4p+nXCIsXG5cdFwiUmlnaHREb3duVGVlVmVjdG9yXCI6IFwi4qWdXCIsXG5cdFwiUmlnaHREb3duVmVjdG9yQmFyXCI6IFwi4qWVXCIsXG5cdFwiUmlnaHREb3duVmVjdG9yXCI6IFwi4oeCXCIsXG5cdFwiUmlnaHRGbG9vclwiOiBcIuKMi1wiLFxuXHRcInJpZ2h0aGFycG9vbmRvd25cIjogXCLih4FcIixcblx0XCJyaWdodGhhcnBvb251cFwiOiBcIuKHgFwiLFxuXHRcInJpZ2h0bGVmdGFycm93c1wiOiBcIuKHhFwiLFxuXHRcInJpZ2h0bGVmdGhhcnBvb25zXCI6IFwi4oeMXCIsXG5cdFwicmlnaHRyaWdodGFycm93c1wiOiBcIuKHiVwiLFxuXHRcInJpZ2h0c3F1aWdhcnJvd1wiOiBcIuKGnVwiLFxuXHRcIlJpZ2h0VGVlQXJyb3dcIjogXCLihqZcIixcblx0XCJSaWdodFRlZVwiOiBcIuKKolwiLFxuXHRcIlJpZ2h0VGVlVmVjdG9yXCI6IFwi4qWbXCIsXG5cdFwicmlnaHR0aHJlZXRpbWVzXCI6IFwi4ouMXCIsXG5cdFwiUmlnaHRUcmlhbmdsZUJhclwiOiBcIuKnkFwiLFxuXHRcIlJpZ2h0VHJpYW5nbGVcIjogXCLiirNcIixcblx0XCJSaWdodFRyaWFuZ2xlRXF1YWxcIjogXCLiirVcIixcblx0XCJSaWdodFVwRG93blZlY3RvclwiOiBcIuKlj1wiLFxuXHRcIlJpZ2h0VXBUZWVWZWN0b3JcIjogXCLipZxcIixcblx0XCJSaWdodFVwVmVjdG9yQmFyXCI6IFwi4qWUXCIsXG5cdFwiUmlnaHRVcFZlY3RvclwiOiBcIuKGvlwiLFxuXHRcIlJpZ2h0VmVjdG9yQmFyXCI6IFwi4qWTXCIsXG5cdFwiUmlnaHRWZWN0b3JcIjogXCLih4BcIixcblx0XCJyaW5nXCI6IFwiy5pcIixcblx0XCJyaXNpbmdkb3RzZXFcIjogXCLiiZNcIixcblx0XCJybGFyclwiOiBcIuKHhFwiLFxuXHRcInJsaGFyXCI6IFwi4oeMXCIsXG5cdFwicmxtXCI6IFwi4oCPXCIsXG5cdFwicm1vdXN0YWNoZVwiOiBcIuKOsVwiLFxuXHRcInJtb3VzdFwiOiBcIuKOsVwiLFxuXHRcInJubWlkXCI6IFwi4quuXCIsXG5cdFwicm9hbmdcIjogXCLin61cIixcblx0XCJyb2FyclwiOiBcIuKHvlwiLFxuXHRcInJvYnJrXCI6IFwi4p+nXCIsXG5cdFwicm9wYXJcIjogXCLipoZcIixcblx0XCJyb3BmXCI6IFwi8J2Vo1wiLFxuXHRcIlJvcGZcIjogXCLihJ1cIixcblx0XCJyb3BsdXNcIjogXCLiqK5cIixcblx0XCJyb3RpbWVzXCI6IFwi4qi1XCIsXG5cdFwiUm91bmRJbXBsaWVzXCI6IFwi4qWwXCIsXG5cdFwicnBhclwiOiBcIilcIixcblx0XCJycGFyZ3RcIjogXCLippRcIixcblx0XCJycHBvbGludFwiOiBcIuKoklwiLFxuXHRcInJyYXJyXCI6IFwi4oeJXCIsXG5cdFwiUnJpZ2h0YXJyb3dcIjogXCLih5tcIixcblx0XCJyc2FxdW9cIjogXCLigLpcIixcblx0XCJyc2NyXCI6IFwi8J2Th1wiLFxuXHRcIlJzY3JcIjogXCLihJtcIixcblx0XCJyc2hcIjogXCLihrFcIixcblx0XCJSc2hcIjogXCLihrFcIixcblx0XCJyc3FiXCI6IFwiXVwiLFxuXHRcInJzcXVvXCI6IFwi4oCZXCIsXG5cdFwicnNxdW9yXCI6IFwi4oCZXCIsXG5cdFwicnRocmVlXCI6IFwi4ouMXCIsXG5cdFwicnRpbWVzXCI6IFwi4ouKXCIsXG5cdFwicnRyaVwiOiBcIuKWuVwiLFxuXHRcInJ0cmllXCI6IFwi4oq1XCIsXG5cdFwicnRyaWZcIjogXCLilrhcIixcblx0XCJydHJpbHRyaVwiOiBcIuKnjlwiLFxuXHRcIlJ1bGVEZWxheWVkXCI6IFwi4qe0XCIsXG5cdFwicnVsdWhhclwiOiBcIuKlqFwiLFxuXHRcInJ4XCI6IFwi4oSeXCIsXG5cdFwiU2FjdXRlXCI6IFwixZpcIixcblx0XCJzYWN1dGVcIjogXCLFm1wiLFxuXHRcInNicXVvXCI6IFwi4oCaXCIsXG5cdFwic2NhcFwiOiBcIuKquFwiLFxuXHRcIlNjYXJvblwiOiBcIsWgXCIsXG5cdFwic2Nhcm9uXCI6IFwixaFcIixcblx0XCJTY1wiOiBcIuKqvFwiLFxuXHRcInNjXCI6IFwi4om7XCIsXG5cdFwic2NjdWVcIjogXCLiib1cIixcblx0XCJzY2VcIjogXCLiqrBcIixcblx0XCJzY0VcIjogXCLiqrRcIixcblx0XCJTY2VkaWxcIjogXCLFnlwiLFxuXHRcInNjZWRpbFwiOiBcIsWfXCIsXG5cdFwiU2NpcmNcIjogXCLFnFwiLFxuXHRcInNjaXJjXCI6IFwixZ1cIixcblx0XCJzY25hcFwiOiBcIuKqulwiLFxuXHRcInNjbkVcIjogXCLiqrZcIixcblx0XCJzY25zaW1cIjogXCLii6lcIixcblx0XCJzY3BvbGludFwiOiBcIuKok1wiLFxuXHRcInNjc2ltXCI6IFwi4om/XCIsXG5cdFwiU2N5XCI6IFwi0KFcIixcblx0XCJzY3lcIjogXCLRgVwiLFxuXHRcInNkb3RiXCI6IFwi4oqhXCIsXG5cdFwic2RvdFwiOiBcIuKLhVwiLFxuXHRcInNkb3RlXCI6IFwi4qmmXCIsXG5cdFwic2VhcmhrXCI6IFwi4qSlXCIsXG5cdFwic2VhcnJcIjogXCLihphcIixcblx0XCJzZUFyclwiOiBcIuKHmFwiLFxuXHRcInNlYXJyb3dcIjogXCLihphcIixcblx0XCJzZWN0XCI6IFwiwqdcIixcblx0XCJzZW1pXCI6IFwiO1wiLFxuXHRcInNlc3dhclwiOiBcIuKkqVwiLFxuXHRcInNldG1pbnVzXCI6IFwi4oiWXCIsXG5cdFwic2V0bW5cIjogXCLiiJZcIixcblx0XCJzZXh0XCI6IFwi4py2XCIsXG5cdFwiU2ZyXCI6IFwi8J2UllwiLFxuXHRcInNmclwiOiBcIvCdlLBcIixcblx0XCJzZnJvd25cIjogXCLijKJcIixcblx0XCJzaGFycFwiOiBcIuKZr1wiLFxuXHRcIlNIQ0hjeVwiOiBcItCpXCIsXG5cdFwic2hjaGN5XCI6IFwi0YlcIixcblx0XCJTSGN5XCI6IFwi0KhcIixcblx0XCJzaGN5XCI6IFwi0YhcIixcblx0XCJTaG9ydERvd25BcnJvd1wiOiBcIuKGk1wiLFxuXHRcIlNob3J0TGVmdEFycm93XCI6IFwi4oaQXCIsXG5cdFwic2hvcnRtaWRcIjogXCLiiKNcIixcblx0XCJzaG9ydHBhcmFsbGVsXCI6IFwi4oilXCIsXG5cdFwiU2hvcnRSaWdodEFycm93XCI6IFwi4oaSXCIsXG5cdFwiU2hvcnRVcEFycm93XCI6IFwi4oaRXCIsXG5cdFwic2h5XCI6IFwiwq1cIixcblx0XCJTaWdtYVwiOiBcIs6jXCIsXG5cdFwic2lnbWFcIjogXCLPg1wiLFxuXHRcInNpZ21hZlwiOiBcIs+CXCIsXG5cdFwic2lnbWF2XCI6IFwiz4JcIixcblx0XCJzaW1cIjogXCLiiLxcIixcblx0XCJzaW1kb3RcIjogXCLiqapcIixcblx0XCJzaW1lXCI6IFwi4omDXCIsXG5cdFwic2ltZXFcIjogXCLiiYNcIixcblx0XCJzaW1nXCI6IFwi4qqeXCIsXG5cdFwic2ltZ0VcIjogXCLiqqBcIixcblx0XCJzaW1sXCI6IFwi4qqdXCIsXG5cdFwic2ltbEVcIjogXCLiqp9cIixcblx0XCJzaW1uZVwiOiBcIuKJhlwiLFxuXHRcInNpbXBsdXNcIjogXCLiqKRcIixcblx0XCJzaW1yYXJyXCI6IFwi4qWyXCIsXG5cdFwic2xhcnJcIjogXCLihpBcIixcblx0XCJTbWFsbENpcmNsZVwiOiBcIuKImFwiLFxuXHRcInNtYWxsc2V0bWludXNcIjogXCLiiJZcIixcblx0XCJzbWFzaHBcIjogXCLiqLNcIixcblx0XCJzbWVwYXJzbFwiOiBcIuKnpFwiLFxuXHRcInNtaWRcIjogXCLiiKNcIixcblx0XCJzbWlsZVwiOiBcIuKMo1wiLFxuXHRcInNtdFwiOiBcIuKqqlwiLFxuXHRcInNtdGVcIjogXCLiqqxcIixcblx0XCJzbXRlc1wiOiBcIuKqrO+4gFwiLFxuXHRcIlNPRlRjeVwiOiBcItCsXCIsXG5cdFwic29mdGN5XCI6IFwi0YxcIixcblx0XCJzb2xiYXJcIjogXCLijL9cIixcblx0XCJzb2xiXCI6IFwi4qeEXCIsXG5cdFwic29sXCI6IFwiL1wiLFxuXHRcIlNvcGZcIjogXCLwnZWKXCIsXG5cdFwic29wZlwiOiBcIvCdlaRcIixcblx0XCJzcGFkZXNcIjogXCLimaBcIixcblx0XCJzcGFkZXN1aXRcIjogXCLimaBcIixcblx0XCJzcGFyXCI6IFwi4oilXCIsXG5cdFwic3FjYXBcIjogXCLiipNcIixcblx0XCJzcWNhcHNcIjogXCLiipPvuIBcIixcblx0XCJzcWN1cFwiOiBcIuKKlFwiLFxuXHRcInNxY3Vwc1wiOiBcIuKKlO+4gFwiLFxuXHRcIlNxcnRcIjogXCLiiJpcIixcblx0XCJzcXN1YlwiOiBcIuKKj1wiLFxuXHRcInNxc3ViZVwiOiBcIuKKkVwiLFxuXHRcInNxc3Vic2V0XCI6IFwi4oqPXCIsXG5cdFwic3FzdWJzZXRlcVwiOiBcIuKKkVwiLFxuXHRcInNxc3VwXCI6IFwi4oqQXCIsXG5cdFwic3FzdXBlXCI6IFwi4oqSXCIsXG5cdFwic3FzdXBzZXRcIjogXCLiipBcIixcblx0XCJzcXN1cHNldGVxXCI6IFwi4oqSXCIsXG5cdFwic3F1YXJlXCI6IFwi4pahXCIsXG5cdFwiU3F1YXJlXCI6IFwi4pahXCIsXG5cdFwiU3F1YXJlSW50ZXJzZWN0aW9uXCI6IFwi4oqTXCIsXG5cdFwiU3F1YXJlU3Vic2V0XCI6IFwi4oqPXCIsXG5cdFwiU3F1YXJlU3Vic2V0RXF1YWxcIjogXCLiipFcIixcblx0XCJTcXVhcmVTdXBlcnNldFwiOiBcIuKKkFwiLFxuXHRcIlNxdWFyZVN1cGVyc2V0RXF1YWxcIjogXCLiipJcIixcblx0XCJTcXVhcmVVbmlvblwiOiBcIuKKlFwiLFxuXHRcInNxdWFyZlwiOiBcIuKWqlwiLFxuXHRcInNxdVwiOiBcIuKWoVwiLFxuXHRcInNxdWZcIjogXCLilqpcIixcblx0XCJzcmFyclwiOiBcIuKGklwiLFxuXHRcIlNzY3JcIjogXCLwnZKuXCIsXG5cdFwic3NjclwiOiBcIvCdk4hcIixcblx0XCJzc2V0bW5cIjogXCLiiJZcIixcblx0XCJzc21pbGVcIjogXCLijKNcIixcblx0XCJzc3RhcmZcIjogXCLii4ZcIixcblx0XCJTdGFyXCI6IFwi4ouGXCIsXG5cdFwic3RhclwiOiBcIuKYhlwiLFxuXHRcInN0YXJmXCI6IFwi4piFXCIsXG5cdFwic3RyYWlnaHRlcHNpbG9uXCI6IFwiz7VcIixcblx0XCJzdHJhaWdodHBoaVwiOiBcIs+VXCIsXG5cdFwic3RybnNcIjogXCLCr1wiLFxuXHRcInN1YlwiOiBcIuKKglwiLFxuXHRcIlN1YlwiOiBcIuKLkFwiLFxuXHRcInN1YmRvdFwiOiBcIuKqvVwiLFxuXHRcInN1YkVcIjogXCLiq4VcIixcblx0XCJzdWJlXCI6IFwi4oqGXCIsXG5cdFwic3ViZWRvdFwiOiBcIuKrg1wiLFxuXHRcInN1Ym11bHRcIjogXCLiq4FcIixcblx0XCJzdWJuRVwiOiBcIuKri1wiLFxuXHRcInN1Ym5lXCI6IFwi4oqKXCIsXG5cdFwic3VicGx1c1wiOiBcIuKqv1wiLFxuXHRcInN1YnJhcnJcIjogXCLipblcIixcblx0XCJzdWJzZXRcIjogXCLiioJcIixcblx0XCJTdWJzZXRcIjogXCLii5BcIixcblx0XCJzdWJzZXRlcVwiOiBcIuKKhlwiLFxuXHRcInN1YnNldGVxcVwiOiBcIuKrhVwiLFxuXHRcIlN1YnNldEVxdWFsXCI6IFwi4oqGXCIsXG5cdFwic3Vic2V0bmVxXCI6IFwi4oqKXCIsXG5cdFwic3Vic2V0bmVxcVwiOiBcIuKri1wiLFxuXHRcInN1YnNpbVwiOiBcIuKrh1wiLFxuXHRcInN1YnN1YlwiOiBcIuKrlVwiLFxuXHRcInN1YnN1cFwiOiBcIuKrk1wiLFxuXHRcInN1Y2NhcHByb3hcIjogXCLiqrhcIixcblx0XCJzdWNjXCI6IFwi4om7XCIsXG5cdFwic3VjY2N1cmx5ZXFcIjogXCLiib1cIixcblx0XCJTdWNjZWVkc1wiOiBcIuKJu1wiLFxuXHRcIlN1Y2NlZWRzRXF1YWxcIjogXCLiqrBcIixcblx0XCJTdWNjZWVkc1NsYW50RXF1YWxcIjogXCLiib1cIixcblx0XCJTdWNjZWVkc1RpbGRlXCI6IFwi4om/XCIsXG5cdFwic3VjY2VxXCI6IFwi4qqwXCIsXG5cdFwic3VjY25hcHByb3hcIjogXCLiqrpcIixcblx0XCJzdWNjbmVxcVwiOiBcIuKqtlwiLFxuXHRcInN1Y2Nuc2ltXCI6IFwi4oupXCIsXG5cdFwic3VjY3NpbVwiOiBcIuKJv1wiLFxuXHRcIlN1Y2hUaGF0XCI6IFwi4oiLXCIsXG5cdFwic3VtXCI6IFwi4oiRXCIsXG5cdFwiU3VtXCI6IFwi4oiRXCIsXG5cdFwic3VuZ1wiOiBcIuKZqlwiLFxuXHRcInN1cDFcIjogXCLCuVwiLFxuXHRcInN1cDJcIjogXCLCslwiLFxuXHRcInN1cDNcIjogXCLCs1wiLFxuXHRcInN1cFwiOiBcIuKKg1wiLFxuXHRcIlN1cFwiOiBcIuKLkVwiLFxuXHRcInN1cGRvdFwiOiBcIuKqvlwiLFxuXHRcInN1cGRzdWJcIjogXCLiq5hcIixcblx0XCJzdXBFXCI6IFwi4quGXCIsXG5cdFwic3VwZVwiOiBcIuKKh1wiLFxuXHRcInN1cGVkb3RcIjogXCLiq4RcIixcblx0XCJTdXBlcnNldFwiOiBcIuKKg1wiLFxuXHRcIlN1cGVyc2V0RXF1YWxcIjogXCLiiodcIixcblx0XCJzdXBoc29sXCI6IFwi4p+JXCIsXG5cdFwic3VwaHN1YlwiOiBcIuKrl1wiLFxuXHRcInN1cGxhcnJcIjogXCLipbtcIixcblx0XCJzdXBtdWx0XCI6IFwi4quCXCIsXG5cdFwic3VwbkVcIjogXCLiq4xcIixcblx0XCJzdXBuZVwiOiBcIuKKi1wiLFxuXHRcInN1cHBsdXNcIjogXCLiq4BcIixcblx0XCJzdXBzZXRcIjogXCLiioNcIixcblx0XCJTdXBzZXRcIjogXCLii5FcIixcblx0XCJzdXBzZXRlcVwiOiBcIuKKh1wiLFxuXHRcInN1cHNldGVxcVwiOiBcIuKrhlwiLFxuXHRcInN1cHNldG5lcVwiOiBcIuKKi1wiLFxuXHRcInN1cHNldG5lcXFcIjogXCLiq4xcIixcblx0XCJzdXBzaW1cIjogXCLiq4hcIixcblx0XCJzdXBzdWJcIjogXCLiq5RcIixcblx0XCJzdXBzdXBcIjogXCLiq5ZcIixcblx0XCJzd2FyaGtcIjogXCLipKZcIixcblx0XCJzd2FyclwiOiBcIuKGmVwiLFxuXHRcInN3QXJyXCI6IFwi4oeZXCIsXG5cdFwic3dhcnJvd1wiOiBcIuKGmVwiLFxuXHRcInN3bndhclwiOiBcIuKkqlwiLFxuXHRcInN6bGlnXCI6IFwiw59cIixcblx0XCJUYWJcIjogXCJcXHRcIixcblx0XCJ0YXJnZXRcIjogXCLijJZcIixcblx0XCJUYXVcIjogXCLOpFwiLFxuXHRcInRhdVwiOiBcIs+EXCIsXG5cdFwidGJya1wiOiBcIuKOtFwiLFxuXHRcIlRjYXJvblwiOiBcIsWkXCIsXG5cdFwidGNhcm9uXCI6IFwixaVcIixcblx0XCJUY2VkaWxcIjogXCLFolwiLFxuXHRcInRjZWRpbFwiOiBcIsWjXCIsXG5cdFwiVGN5XCI6IFwi0KJcIixcblx0XCJ0Y3lcIjogXCLRglwiLFxuXHRcInRkb3RcIjogXCLig5tcIixcblx0XCJ0ZWxyZWNcIjogXCLijJVcIixcblx0XCJUZnJcIjogXCLwnZSXXCIsXG5cdFwidGZyXCI6IFwi8J2UsVwiLFxuXHRcInRoZXJlNFwiOiBcIuKItFwiLFxuXHRcInRoZXJlZm9yZVwiOiBcIuKItFwiLFxuXHRcIlRoZXJlZm9yZVwiOiBcIuKItFwiLFxuXHRcIlRoZXRhXCI6IFwizphcIixcblx0XCJ0aGV0YVwiOiBcIs64XCIsXG5cdFwidGhldGFzeW1cIjogXCLPkVwiLFxuXHRcInRoZXRhdlwiOiBcIs+RXCIsXG5cdFwidGhpY2thcHByb3hcIjogXCLiiYhcIixcblx0XCJ0aGlja3NpbVwiOiBcIuKIvFwiLFxuXHRcIlRoaWNrU3BhY2VcIjogXCLigZ/igIpcIixcblx0XCJUaGluU3BhY2VcIjogXCLigIlcIixcblx0XCJ0aGluc3BcIjogXCLigIlcIixcblx0XCJ0aGthcFwiOiBcIuKJiFwiLFxuXHRcInRoa3NpbVwiOiBcIuKIvFwiLFxuXHRcIlRIT1JOXCI6IFwiw55cIixcblx0XCJ0aG9yblwiOiBcIsO+XCIsXG5cdFwidGlsZGVcIjogXCLLnFwiLFxuXHRcIlRpbGRlXCI6IFwi4oi8XCIsXG5cdFwiVGlsZGVFcXVhbFwiOiBcIuKJg1wiLFxuXHRcIlRpbGRlRnVsbEVxdWFsXCI6IFwi4omFXCIsXG5cdFwiVGlsZGVUaWxkZVwiOiBcIuKJiFwiLFxuXHRcInRpbWVzYmFyXCI6IFwi4qixXCIsXG5cdFwidGltZXNiXCI6IFwi4oqgXCIsXG5cdFwidGltZXNcIjogXCLDl1wiLFxuXHRcInRpbWVzZFwiOiBcIuKosFwiLFxuXHRcInRpbnRcIjogXCLiiK1cIixcblx0XCJ0b2VhXCI6IFwi4qSoXCIsXG5cdFwidG9wYm90XCI6IFwi4oy2XCIsXG5cdFwidG9wY2lyXCI6IFwi4quxXCIsXG5cdFwidG9wXCI6IFwi4oqkXCIsXG5cdFwiVG9wZlwiOiBcIvCdlYtcIixcblx0XCJ0b3BmXCI6IFwi8J2VpVwiLFxuXHRcInRvcGZvcmtcIjogXCLiq5pcIixcblx0XCJ0b3NhXCI6IFwi4qSpXCIsXG5cdFwidHByaW1lXCI6IFwi4oC0XCIsXG5cdFwidHJhZGVcIjogXCLihKJcIixcblx0XCJUUkFERVwiOiBcIuKEolwiLFxuXHRcInRyaWFuZ2xlXCI6IFwi4pa1XCIsXG5cdFwidHJpYW5nbGVkb3duXCI6IFwi4pa/XCIsXG5cdFwidHJpYW5nbGVsZWZ0XCI6IFwi4peDXCIsXG5cdFwidHJpYW5nbGVsZWZ0ZXFcIjogXCLiirRcIixcblx0XCJ0cmlhbmdsZXFcIjogXCLiiZxcIixcblx0XCJ0cmlhbmdsZXJpZ2h0XCI6IFwi4pa5XCIsXG5cdFwidHJpYW5nbGVyaWdodGVxXCI6IFwi4oq1XCIsXG5cdFwidHJpZG90XCI6IFwi4pesXCIsXG5cdFwidHJpZVwiOiBcIuKJnFwiLFxuXHRcInRyaW1pbnVzXCI6IFwi4qi6XCIsXG5cdFwiVHJpcGxlRG90XCI6IFwi4oObXCIsXG5cdFwidHJpcGx1c1wiOiBcIuKouVwiLFxuXHRcInRyaXNiXCI6IFwi4qeNXCIsXG5cdFwidHJpdGltZVwiOiBcIuKou1wiLFxuXHRcInRycGV6aXVtXCI6IFwi4o+iXCIsXG5cdFwiVHNjclwiOiBcIvCdkq9cIixcblx0XCJ0c2NyXCI6IFwi8J2TiVwiLFxuXHRcIlRTY3lcIjogXCLQplwiLFxuXHRcInRzY3lcIjogXCLRhlwiLFxuXHRcIlRTSGN5XCI6IFwi0ItcIixcblx0XCJ0c2hjeVwiOiBcItGbXCIsXG5cdFwiVHN0cm9rXCI6IFwixaZcIixcblx0XCJ0c3Ryb2tcIjogXCLFp1wiLFxuXHRcInR3aXh0XCI6IFwi4omsXCIsXG5cdFwidHdvaGVhZGxlZnRhcnJvd1wiOiBcIuKGnlwiLFxuXHRcInR3b2hlYWRyaWdodGFycm93XCI6IFwi4oagXCIsXG5cdFwiVWFjdXRlXCI6IFwiw5pcIixcblx0XCJ1YWN1dGVcIjogXCLDulwiLFxuXHRcInVhcnJcIjogXCLihpFcIixcblx0XCJVYXJyXCI6IFwi4oafXCIsXG5cdFwidUFyclwiOiBcIuKHkVwiLFxuXHRcIlVhcnJvY2lyXCI6IFwi4qWJXCIsXG5cdFwiVWJyY3lcIjogXCLQjlwiLFxuXHRcInVicmN5XCI6IFwi0Z5cIixcblx0XCJVYnJldmVcIjogXCLFrFwiLFxuXHRcInVicmV2ZVwiOiBcIsWtXCIsXG5cdFwiVWNpcmNcIjogXCLDm1wiLFxuXHRcInVjaXJjXCI6IFwiw7tcIixcblx0XCJVY3lcIjogXCLQo1wiLFxuXHRcInVjeVwiOiBcItGDXCIsXG5cdFwidWRhcnJcIjogXCLih4VcIixcblx0XCJVZGJsYWNcIjogXCLFsFwiLFxuXHRcInVkYmxhY1wiOiBcIsWxXCIsXG5cdFwidWRoYXJcIjogXCLipa5cIixcblx0XCJ1ZmlzaHRcIjogXCLipb5cIixcblx0XCJVZnJcIjogXCLwnZSYXCIsXG5cdFwidWZyXCI6IFwi8J2UslwiLFxuXHRcIlVncmF2ZVwiOiBcIsOZXCIsXG5cdFwidWdyYXZlXCI6IFwiw7lcIixcblx0XCJ1SGFyXCI6IFwi4qWjXCIsXG5cdFwidWhhcmxcIjogXCLihr9cIixcblx0XCJ1aGFyclwiOiBcIuKGvlwiLFxuXHRcInVoYmxrXCI6IFwi4paAXCIsXG5cdFwidWxjb3JuXCI6IFwi4oycXCIsXG5cdFwidWxjb3JuZXJcIjogXCLijJxcIixcblx0XCJ1bGNyb3BcIjogXCLijI9cIixcblx0XCJ1bHRyaVwiOiBcIuKXuFwiLFxuXHRcIlVtYWNyXCI6IFwixapcIixcblx0XCJ1bWFjclwiOiBcIsWrXCIsXG5cdFwidW1sXCI6IFwiwqhcIixcblx0XCJVbmRlckJhclwiOiBcIl9cIixcblx0XCJVbmRlckJyYWNlXCI6IFwi4o+fXCIsXG5cdFwiVW5kZXJCcmFja2V0XCI6IFwi4o61XCIsXG5cdFwiVW5kZXJQYXJlbnRoZXNpc1wiOiBcIuKPnVwiLFxuXHRcIlVuaW9uXCI6IFwi4ouDXCIsXG5cdFwiVW5pb25QbHVzXCI6IFwi4oqOXCIsXG5cdFwiVW9nb25cIjogXCLFslwiLFxuXHRcInVvZ29uXCI6IFwixbNcIixcblx0XCJVb3BmXCI6IFwi8J2VjFwiLFxuXHRcInVvcGZcIjogXCLwnZWmXCIsXG5cdFwiVXBBcnJvd0JhclwiOiBcIuKkklwiLFxuXHRcInVwYXJyb3dcIjogXCLihpFcIixcblx0XCJVcEFycm93XCI6IFwi4oaRXCIsXG5cdFwiVXBhcnJvd1wiOiBcIuKHkVwiLFxuXHRcIlVwQXJyb3dEb3duQXJyb3dcIjogXCLih4VcIixcblx0XCJ1cGRvd25hcnJvd1wiOiBcIuKGlVwiLFxuXHRcIlVwRG93bkFycm93XCI6IFwi4oaVXCIsXG5cdFwiVXBkb3duYXJyb3dcIjogXCLih5VcIixcblx0XCJVcEVxdWlsaWJyaXVtXCI6IFwi4qWuXCIsXG5cdFwidXBoYXJwb29ubGVmdFwiOiBcIuKGv1wiLFxuXHRcInVwaGFycG9vbnJpZ2h0XCI6IFwi4oa+XCIsXG5cdFwidXBsdXNcIjogXCLiio5cIixcblx0XCJVcHBlckxlZnRBcnJvd1wiOiBcIuKGllwiLFxuXHRcIlVwcGVyUmlnaHRBcnJvd1wiOiBcIuKGl1wiLFxuXHRcInVwc2lcIjogXCLPhVwiLFxuXHRcIlVwc2lcIjogXCLPklwiLFxuXHRcInVwc2loXCI6IFwiz5JcIixcblx0XCJVcHNpbG9uXCI6IFwizqVcIixcblx0XCJ1cHNpbG9uXCI6IFwiz4VcIixcblx0XCJVcFRlZUFycm93XCI6IFwi4oalXCIsXG5cdFwiVXBUZWVcIjogXCLiiqVcIixcblx0XCJ1cHVwYXJyb3dzXCI6IFwi4oeIXCIsXG5cdFwidXJjb3JuXCI6IFwi4oydXCIsXG5cdFwidXJjb3JuZXJcIjogXCLijJ1cIixcblx0XCJ1cmNyb3BcIjogXCLijI5cIixcblx0XCJVcmluZ1wiOiBcIsWuXCIsXG5cdFwidXJpbmdcIjogXCLFr1wiLFxuXHRcInVydHJpXCI6IFwi4pe5XCIsXG5cdFwiVXNjclwiOiBcIvCdkrBcIixcblx0XCJ1c2NyXCI6IFwi8J2TilwiLFxuXHRcInV0ZG90XCI6IFwi4ouwXCIsXG5cdFwiVXRpbGRlXCI6IFwixahcIixcblx0XCJ1dGlsZGVcIjogXCLFqVwiLFxuXHRcInV0cmlcIjogXCLilrVcIixcblx0XCJ1dHJpZlwiOiBcIuKWtFwiLFxuXHRcInV1YXJyXCI6IFwi4oeIXCIsXG5cdFwiVXVtbFwiOiBcIsOcXCIsXG5cdFwidXVtbFwiOiBcIsO8XCIsXG5cdFwidXdhbmdsZVwiOiBcIuKmp1wiLFxuXHRcInZhbmdydFwiOiBcIuKmnFwiLFxuXHRcInZhcmVwc2lsb25cIjogXCLPtVwiLFxuXHRcInZhcmthcHBhXCI6IFwiz7BcIixcblx0XCJ2YXJub3RoaW5nXCI6IFwi4oiFXCIsXG5cdFwidmFycGhpXCI6IFwiz5VcIixcblx0XCJ2YXJwaVwiOiBcIs+WXCIsXG5cdFwidmFycHJvcHRvXCI6IFwi4oidXCIsXG5cdFwidmFyclwiOiBcIuKGlVwiLFxuXHRcInZBcnJcIjogXCLih5VcIixcblx0XCJ2YXJyaG9cIjogXCLPsVwiLFxuXHRcInZhcnNpZ21hXCI6IFwiz4JcIixcblx0XCJ2YXJzdWJzZXRuZXFcIjogXCLiiorvuIBcIixcblx0XCJ2YXJzdWJzZXRuZXFxXCI6IFwi4quL77iAXCIsXG5cdFwidmFyc3Vwc2V0bmVxXCI6IFwi4oqL77iAXCIsXG5cdFwidmFyc3Vwc2V0bmVxcVwiOiBcIuKrjO+4gFwiLFxuXHRcInZhcnRoZXRhXCI6IFwiz5FcIixcblx0XCJ2YXJ0cmlhbmdsZWxlZnRcIjogXCLiirJcIixcblx0XCJ2YXJ0cmlhbmdsZXJpZ2h0XCI6IFwi4oqzXCIsXG5cdFwidkJhclwiOiBcIuKrqFwiLFxuXHRcIlZiYXJcIjogXCLiq6tcIixcblx0XCJ2QmFydlwiOiBcIuKrqVwiLFxuXHRcIlZjeVwiOiBcItCSXCIsXG5cdFwidmN5XCI6IFwi0LJcIixcblx0XCJ2ZGFzaFwiOiBcIuKKolwiLFxuXHRcInZEYXNoXCI6IFwi4oqoXCIsXG5cdFwiVmRhc2hcIjogXCLiiqlcIixcblx0XCJWRGFzaFwiOiBcIuKKq1wiLFxuXHRcIlZkYXNobFwiOiBcIuKrplwiLFxuXHRcInZlZWJhclwiOiBcIuKKu1wiLFxuXHRcInZlZVwiOiBcIuKIqFwiLFxuXHRcIlZlZVwiOiBcIuKLgVwiLFxuXHRcInZlZWVxXCI6IFwi4omaXCIsXG5cdFwidmVsbGlwXCI6IFwi4ouuXCIsXG5cdFwidmVyYmFyXCI6IFwifFwiLFxuXHRcIlZlcmJhclwiOiBcIuKAllwiLFxuXHRcInZlcnRcIjogXCJ8XCIsXG5cdFwiVmVydFwiOiBcIuKAllwiLFxuXHRcIlZlcnRpY2FsQmFyXCI6IFwi4oijXCIsXG5cdFwiVmVydGljYWxMaW5lXCI6IFwifFwiLFxuXHRcIlZlcnRpY2FsU2VwYXJhdG9yXCI6IFwi4p2YXCIsXG5cdFwiVmVydGljYWxUaWxkZVwiOiBcIuKJgFwiLFxuXHRcIlZlcnlUaGluU3BhY2VcIjogXCLigIpcIixcblx0XCJWZnJcIjogXCLwnZSZXCIsXG5cdFwidmZyXCI6IFwi8J2Us1wiLFxuXHRcInZsdHJpXCI6IFwi4oqyXCIsXG5cdFwidm5zdWJcIjogXCLiioLig5JcIixcblx0XCJ2bnN1cFwiOiBcIuKKg+KDklwiLFxuXHRcIlZvcGZcIjogXCLwnZWNXCIsXG5cdFwidm9wZlwiOiBcIvCdladcIixcblx0XCJ2cHJvcFwiOiBcIuKInVwiLFxuXHRcInZydHJpXCI6IFwi4oqzXCIsXG5cdFwiVnNjclwiOiBcIvCdkrFcIixcblx0XCJ2c2NyXCI6IFwi8J2Ti1wiLFxuXHRcInZzdWJuRVwiOiBcIuKri++4gFwiLFxuXHRcInZzdWJuZVwiOiBcIuKKiu+4gFwiLFxuXHRcInZzdXBuRVwiOiBcIuKrjO+4gFwiLFxuXHRcInZzdXBuZVwiOiBcIuKKi++4gFwiLFxuXHRcIlZ2ZGFzaFwiOiBcIuKKqlwiLFxuXHRcInZ6aWd6YWdcIjogXCLipppcIixcblx0XCJXY2lyY1wiOiBcIsW0XCIsXG5cdFwid2NpcmNcIjogXCLFtVwiLFxuXHRcIndlZGJhclwiOiBcIuKpn1wiLFxuXHRcIndlZGdlXCI6IFwi4oinXCIsXG5cdFwiV2VkZ2VcIjogXCLii4BcIixcblx0XCJ3ZWRnZXFcIjogXCLiiZlcIixcblx0XCJ3ZWllcnBcIjogXCLihJhcIixcblx0XCJXZnJcIjogXCLwnZSaXCIsXG5cdFwid2ZyXCI6IFwi8J2UtFwiLFxuXHRcIldvcGZcIjogXCLwnZWOXCIsXG5cdFwid29wZlwiOiBcIvCdlahcIixcblx0XCJ3cFwiOiBcIuKEmFwiLFxuXHRcIndyXCI6IFwi4omAXCIsXG5cdFwid3JlYXRoXCI6IFwi4omAXCIsXG5cdFwiV3NjclwiOiBcIvCdkrJcIixcblx0XCJ3c2NyXCI6IFwi8J2TjFwiLFxuXHRcInhjYXBcIjogXCLii4JcIixcblx0XCJ4Y2lyY1wiOiBcIuKXr1wiLFxuXHRcInhjdXBcIjogXCLii4NcIixcblx0XCJ4ZHRyaVwiOiBcIuKWvVwiLFxuXHRcIlhmclwiOiBcIvCdlJtcIixcblx0XCJ4ZnJcIjogXCLwnZS1XCIsXG5cdFwieGhhcnJcIjogXCLin7dcIixcblx0XCJ4aEFyclwiOiBcIuKfulwiLFxuXHRcIlhpXCI6IFwizp5cIixcblx0XCJ4aVwiOiBcIs6+XCIsXG5cdFwieGxhcnJcIjogXCLin7VcIixcblx0XCJ4bEFyclwiOiBcIuKfuFwiLFxuXHRcInhtYXBcIjogXCLin7xcIixcblx0XCJ4bmlzXCI6IFwi4ou7XCIsXG5cdFwieG9kb3RcIjogXCLiqIBcIixcblx0XCJYb3BmXCI6IFwi8J2Vj1wiLFxuXHRcInhvcGZcIjogXCLwnZWpXCIsXG5cdFwieG9wbHVzXCI6IFwi4qiBXCIsXG5cdFwieG90aW1lXCI6IFwi4qiCXCIsXG5cdFwieHJhcnJcIjogXCLin7ZcIixcblx0XCJ4ckFyclwiOiBcIuKfuVwiLFxuXHRcIlhzY3JcIjogXCLwnZKzXCIsXG5cdFwieHNjclwiOiBcIvCdk41cIixcblx0XCJ4c3FjdXBcIjogXCLiqIZcIixcblx0XCJ4dXBsdXNcIjogXCLiqIRcIixcblx0XCJ4dXRyaVwiOiBcIuKWs1wiLFxuXHRcInh2ZWVcIjogXCLii4FcIixcblx0XCJ4d2VkZ2VcIjogXCLii4BcIixcblx0XCJZYWN1dGVcIjogXCLDnVwiLFxuXHRcInlhY3V0ZVwiOiBcIsO9XCIsXG5cdFwiWUFjeVwiOiBcItCvXCIsXG5cdFwieWFjeVwiOiBcItGPXCIsXG5cdFwiWWNpcmNcIjogXCLFtlwiLFxuXHRcInljaXJjXCI6IFwixbdcIixcblx0XCJZY3lcIjogXCLQq1wiLFxuXHRcInljeVwiOiBcItGLXCIsXG5cdFwieWVuXCI6IFwiwqVcIixcblx0XCJZZnJcIjogXCLwnZScXCIsXG5cdFwieWZyXCI6IFwi8J2UtlwiLFxuXHRcIllJY3lcIjogXCLQh1wiLFxuXHRcInlpY3lcIjogXCLRl1wiLFxuXHRcIllvcGZcIjogXCLwnZWQXCIsXG5cdFwieW9wZlwiOiBcIvCdlapcIixcblx0XCJZc2NyXCI6IFwi8J2StFwiLFxuXHRcInlzY3JcIjogXCLwnZOOXCIsXG5cdFwiWVVjeVwiOiBcItCuXCIsXG5cdFwieXVjeVwiOiBcItGOXCIsXG5cdFwieXVtbFwiOiBcIsO/XCIsXG5cdFwiWXVtbFwiOiBcIsW4XCIsXG5cdFwiWmFjdXRlXCI6IFwixblcIixcblx0XCJ6YWN1dGVcIjogXCLFulwiLFxuXHRcIlpjYXJvblwiOiBcIsW9XCIsXG5cdFwiemNhcm9uXCI6IFwixb5cIixcblx0XCJaY3lcIjogXCLQl1wiLFxuXHRcInpjeVwiOiBcItC3XCIsXG5cdFwiWmRvdFwiOiBcIsW7XCIsXG5cdFwiemRvdFwiOiBcIsW8XCIsXG5cdFwiemVldHJmXCI6IFwi4oSoXCIsXG5cdFwiWmVyb1dpZHRoU3BhY2VcIjogXCLigItcIixcblx0XCJaZXRhXCI6IFwizpZcIixcblx0XCJ6ZXRhXCI6IFwizrZcIixcblx0XCJ6ZnJcIjogXCLwnZS3XCIsXG5cdFwiWmZyXCI6IFwi4oSoXCIsXG5cdFwiWkhjeVwiOiBcItCWXCIsXG5cdFwiemhjeVwiOiBcItC2XCIsXG5cdFwiemlncmFyclwiOiBcIuKHnVwiLFxuXHRcInpvcGZcIjogXCLwnZWrXCIsXG5cdFwiWm9wZlwiOiBcIuKEpFwiLFxuXHRcIlpzY3JcIjogXCLwnZK1XCIsXG5cdFwienNjclwiOiBcIvCdk49cIixcblx0XCJ6d2pcIjogXCLigI1cIixcblx0XCJ6d25qXCI6IFwi4oCMXCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9lbnRpdGllcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlbnRpdHlNYXAgPSByZXF1aXJlKFwiLi4vbWFwcy9lbnRpdGllcy5qc29uXCIpLFxuICAgIGxlZ2FjeU1hcCA9IHJlcXVpcmUoXCIuLi9tYXBzL2xlZ2FjeS5qc29uXCIpLFxuICAgIHhtbE1hcCAgICA9IHJlcXVpcmUoXCIuLi9tYXBzL3htbC5qc29uXCIpLFxuICAgIGRlY29kZUNvZGVQb2ludCA9IHJlcXVpcmUoXCIuL2RlY29kZV9jb2RlcG9pbnQuanNcIik7XG5cbnZhciBkZWNvZGVYTUxTdHJpY3QgID0gZ2V0U3RyaWN0RGVjb2Rlcih4bWxNYXApLFxuICAgIGRlY29kZUhUTUxTdHJpY3QgPSBnZXRTdHJpY3REZWNvZGVyKGVudGl0eU1hcCk7XG5cbmZ1bmN0aW9uIGdldFN0cmljdERlY29kZXIobWFwKXtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhtYXApLmpvaW4oXCJ8XCIpLFxuXHQgICAgcmVwbGFjZSA9IGdldFJlcGxhY2VyKG1hcCk7XG5cblx0a2V5cyArPSBcInwjW3hYXVtcXFxcZGEtZkEtRl0rfCNcXFxcZCtcIjtcblxuXHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cyArIFwiKTtcIiwgXCJnXCIpO1xuXG5cdHJldHVybiBmdW5jdGlvbihzdHIpe1xuXHRcdHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlKTtcblx0fTtcbn1cblxudmFyIGRlY29kZUhUTUwgPSAoZnVuY3Rpb24oKXtcblx0dmFyIGxlZ2FjeSA9IE9iamVjdC5rZXlzKGxlZ2FjeU1hcClcblx0XHQuc29ydChzb3J0ZXIpO1xuXG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMoZW50aXR5TWFwKVxuXHRcdC5zb3J0KHNvcnRlcik7XG5cblx0Zm9yKHZhciBpID0gMCwgaiA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcblx0XHRpZihsZWdhY3lbal0gPT09IGtleXNbaV0pe1xuXHRcdFx0a2V5c1tpXSArPSBcIjs/XCI7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGtleXNbaV0gKz0gXCI7XCI7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMuam9pbihcInxcIikgKyBcInwjW3hYXVtcXFxcZGEtZkEtRl0rOz98I1xcXFxkKzs/KVwiLCBcImdcIiksXG5cdCAgICByZXBsYWNlID0gZ2V0UmVwbGFjZXIoZW50aXR5TWFwKTtcblxuXHRmdW5jdGlvbiByZXBsYWNlcihzdHIpe1xuXHRcdGlmKHN0ci5zdWJzdHIoLTEpICE9PSBcIjtcIikgc3RyICs9IFwiO1wiO1xuXHRcdHJldHVybiByZXBsYWNlKHN0cik7XG5cdH1cblxuXHQvL1RPRE8gY29uc2lkZXIgY3JlYXRpbmcgYSBtZXJnZWQgbWFwXG5cdHJldHVybiBmdW5jdGlvbihzdHIpe1xuXHRcdHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlcik7XG5cdH07XG59KCkpO1xuXG5mdW5jdGlvbiBzb3J0ZXIoYSwgYil7XG5cdHJldHVybiBhIDwgYiA/IDEgOiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVwbGFjZXIobWFwKXtcblx0cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKXtcblx0XHRpZihzdHIuY2hhckF0KDEpID09PSBcIiNcIil7XG5cdFx0XHRpZihzdHIuY2hhckF0KDIpID09PSBcIlhcIiB8fCBzdHIuY2hhckF0KDIpID09PSBcInhcIil7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVDb2RlUG9pbnQocGFyc2VJbnQoc3RyLnN1YnN0cigzKSwgMTYpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkZWNvZGVDb2RlUG9pbnQocGFyc2VJbnQoc3RyLnN1YnN0cigyKSwgMTApKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcFtzdHIuc2xpY2UoMSwgLTEpXTtcblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFhNTDogZGVjb2RlWE1MU3RyaWN0LFxuXHRIVE1MOiBkZWNvZGVIVE1MLFxuXHRIVE1MU3RyaWN0OiBkZWNvZGVIVE1MU3RyaWN0XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFhY3V0ZVwiOiBcIsOBXCIsXG5cdFwiYWFjdXRlXCI6IFwiw6FcIixcblx0XCJBY2lyY1wiOiBcIsOCXCIsXG5cdFwiYWNpcmNcIjogXCLDolwiLFxuXHRcImFjdXRlXCI6IFwiwrRcIixcblx0XCJBRWxpZ1wiOiBcIsOGXCIsXG5cdFwiYWVsaWdcIjogXCLDplwiLFxuXHRcIkFncmF2ZVwiOiBcIsOAXCIsXG5cdFwiYWdyYXZlXCI6IFwiw6BcIixcblx0XCJhbXBcIjogXCImXCIsXG5cdFwiQU1QXCI6IFwiJlwiLFxuXHRcIkFyaW5nXCI6IFwiw4VcIixcblx0XCJhcmluZ1wiOiBcIsOlXCIsXG5cdFwiQXRpbGRlXCI6IFwiw4NcIixcblx0XCJhdGlsZGVcIjogXCLDo1wiLFxuXHRcIkF1bWxcIjogXCLDhFwiLFxuXHRcImF1bWxcIjogXCLDpFwiLFxuXHRcImJydmJhclwiOiBcIsKmXCIsXG5cdFwiQ2NlZGlsXCI6IFwiw4dcIixcblx0XCJjY2VkaWxcIjogXCLDp1wiLFxuXHRcImNlZGlsXCI6IFwiwrhcIixcblx0XCJjZW50XCI6IFwiwqJcIixcblx0XCJjb3B5XCI6IFwiwqlcIixcblx0XCJDT1BZXCI6IFwiwqlcIixcblx0XCJjdXJyZW5cIjogXCLCpFwiLFxuXHRcImRlZ1wiOiBcIsKwXCIsXG5cdFwiZGl2aWRlXCI6IFwiw7dcIixcblx0XCJFYWN1dGVcIjogXCLDiVwiLFxuXHRcImVhY3V0ZVwiOiBcIsOpXCIsXG5cdFwiRWNpcmNcIjogXCLDilwiLFxuXHRcImVjaXJjXCI6IFwiw6pcIixcblx0XCJFZ3JhdmVcIjogXCLDiFwiLFxuXHRcImVncmF2ZVwiOiBcIsOoXCIsXG5cdFwiRVRIXCI6IFwiw5BcIixcblx0XCJldGhcIjogXCLDsFwiLFxuXHRcIkV1bWxcIjogXCLDi1wiLFxuXHRcImV1bWxcIjogXCLDq1wiLFxuXHRcImZyYWMxMlwiOiBcIsK9XCIsXG5cdFwiZnJhYzE0XCI6IFwiwrxcIixcblx0XCJmcmFjMzRcIjogXCLCvlwiLFxuXHRcImd0XCI6IFwiPlwiLFxuXHRcIkdUXCI6IFwiPlwiLFxuXHRcIklhY3V0ZVwiOiBcIsONXCIsXG5cdFwiaWFjdXRlXCI6IFwiw61cIixcblx0XCJJY2lyY1wiOiBcIsOOXCIsXG5cdFwiaWNpcmNcIjogXCLDrlwiLFxuXHRcImlleGNsXCI6IFwiwqFcIixcblx0XCJJZ3JhdmVcIjogXCLDjFwiLFxuXHRcImlncmF2ZVwiOiBcIsOsXCIsXG5cdFwiaXF1ZXN0XCI6IFwiwr9cIixcblx0XCJJdW1sXCI6IFwiw49cIixcblx0XCJpdW1sXCI6IFwiw69cIixcblx0XCJsYXF1b1wiOiBcIsKrXCIsXG5cdFwibHRcIjogXCI8XCIsXG5cdFwiTFRcIjogXCI8XCIsXG5cdFwibWFjclwiOiBcIsKvXCIsXG5cdFwibWljcm9cIjogXCLCtVwiLFxuXHRcIm1pZGRvdFwiOiBcIsK3XCIsXG5cdFwibmJzcFwiOiBcIsKgXCIsXG5cdFwibm90XCI6IFwiwqxcIixcblx0XCJOdGlsZGVcIjogXCLDkVwiLFxuXHRcIm50aWxkZVwiOiBcIsOxXCIsXG5cdFwiT2FjdXRlXCI6IFwiw5NcIixcblx0XCJvYWN1dGVcIjogXCLDs1wiLFxuXHRcIk9jaXJjXCI6IFwiw5RcIixcblx0XCJvY2lyY1wiOiBcIsO0XCIsXG5cdFwiT2dyYXZlXCI6IFwiw5JcIixcblx0XCJvZ3JhdmVcIjogXCLDslwiLFxuXHRcIm9yZGZcIjogXCLCqlwiLFxuXHRcIm9yZG1cIjogXCLCulwiLFxuXHRcIk9zbGFzaFwiOiBcIsOYXCIsXG5cdFwib3NsYXNoXCI6IFwiw7hcIixcblx0XCJPdGlsZGVcIjogXCLDlVwiLFxuXHRcIm90aWxkZVwiOiBcIsO1XCIsXG5cdFwiT3VtbFwiOiBcIsOWXCIsXG5cdFwib3VtbFwiOiBcIsO2XCIsXG5cdFwicGFyYVwiOiBcIsK2XCIsXG5cdFwicGx1c21uXCI6IFwiwrFcIixcblx0XCJwb3VuZFwiOiBcIsKjXCIsXG5cdFwicXVvdFwiOiBcIlxcXCJcIixcblx0XCJRVU9UXCI6IFwiXFxcIlwiLFxuXHRcInJhcXVvXCI6IFwiwrtcIixcblx0XCJyZWdcIjogXCLCrlwiLFxuXHRcIlJFR1wiOiBcIsKuXCIsXG5cdFwic2VjdFwiOiBcIsKnXCIsXG5cdFwic2h5XCI6IFwiwq1cIixcblx0XCJzdXAxXCI6IFwiwrlcIixcblx0XCJzdXAyXCI6IFwiwrJcIixcblx0XCJzdXAzXCI6IFwiwrNcIixcblx0XCJzemxpZ1wiOiBcIsOfXCIsXG5cdFwiVEhPUk5cIjogXCLDnlwiLFxuXHRcInRob3JuXCI6IFwiw75cIixcblx0XCJ0aW1lc1wiOiBcIsOXXCIsXG5cdFwiVWFjdXRlXCI6IFwiw5pcIixcblx0XCJ1YWN1dGVcIjogXCLDulwiLFxuXHRcIlVjaXJjXCI6IFwiw5tcIixcblx0XCJ1Y2lyY1wiOiBcIsO7XCIsXG5cdFwiVWdyYXZlXCI6IFwiw5lcIixcblx0XCJ1Z3JhdmVcIjogXCLDuVwiLFxuXHRcInVtbFwiOiBcIsKoXCIsXG5cdFwiVXVtbFwiOiBcIsOcXCIsXG5cdFwidXVtbFwiOiBcIsO8XCIsXG5cdFwiWWFjdXRlXCI6IFwiw51cIixcblx0XCJ5YWN1dGVcIjogXCLDvVwiLFxuXHRcInllblwiOiBcIsKlXCIsXG5cdFwieXVtbFwiOiBcIsO/XCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9sZWdhY3kuanNvblxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVjb2RlTWFwID0gcmVxdWlyZShcIi4uL21hcHMvZGVjb2RlLmpzb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlQ29kZVBvaW50O1xuXG4vLyBtb2RpZmllZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50KGNvZGVQb2ludCl7XG5cblx0aWYoKGNvZGVQb2ludCA+PSAweEQ4MDAgJiYgY29kZVBvaW50IDw9IDB4REZGRikgfHwgY29kZVBvaW50ID4gMHgxMEZGRkYpe1xuXHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0fVxuXG5cdGlmKGNvZGVQb2ludCBpbiBkZWNvZGVNYXApe1xuXHRcdGNvZGVQb2ludCA9IGRlY29kZU1hcFtjb2RlUG9pbnRdO1xuXHR9XG5cblx0dmFyIG91dHB1dCA9IFwiXCI7XG5cblx0aWYoY29kZVBvaW50ID4gMHhGRkZGKXtcblx0XHRjb2RlUG9pbnQgLT0gMHgxMDAwMDtcblx0XHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGO1xuXHR9XG5cblx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcblx0cmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlX2NvZGVwb2ludC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCIwXCI6IDY1NTMzLFxuXHRcIjEyOFwiOiA4MzY0LFxuXHRcIjEzMFwiOiA4MjE4LFxuXHRcIjEzMVwiOiA0MDIsXG5cdFwiMTMyXCI6IDgyMjIsXG5cdFwiMTMzXCI6IDgyMzAsXG5cdFwiMTM0XCI6IDgyMjQsXG5cdFwiMTM1XCI6IDgyMjUsXG5cdFwiMTM2XCI6IDcxMCxcblx0XCIxMzdcIjogODI0MCxcblx0XCIxMzhcIjogMzUyLFxuXHRcIjEzOVwiOiA4MjQ5LFxuXHRcIjE0MFwiOiAzMzgsXG5cdFwiMTQyXCI6IDM4MSxcblx0XCIxNDVcIjogODIxNixcblx0XCIxNDZcIjogODIxNyxcblx0XCIxNDdcIjogODIyMCxcblx0XCIxNDhcIjogODIyMSxcblx0XCIxNDlcIjogODIyNixcblx0XCIxNTBcIjogODIxMSxcblx0XCIxNTFcIjogODIxMixcblx0XCIxNTJcIjogNzMyLFxuXHRcIjE1M1wiOiA4NDgyLFxuXHRcIjE1NFwiOiAzNTMsXG5cdFwiMTU1XCI6IDgyNTAsXG5cdFwiMTU2XCI6IDMzOSxcblx0XCIxNThcIjogMzgyLFxuXHRcIjE1OVwiOiAzNzZcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9kZWNvZGUuanNvblxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplLXJlZmVyZW5jZScpO1xuXG52YXIgbm9ybWFsaXplVVJJID0gY29tbW9uLm5vcm1hbGl6ZVVSSTtcbnZhciB1bmVzY2FwZVN0cmluZyA9IGNvbW1vbi51bmVzY2FwZVN0cmluZztcbnZhciBmcm9tQ29kZVBvaW50ID0gcmVxdWlyZSgnLi9mcm9tLWNvZGUtcG9pbnQuanMnKTtcbnZhciBkZWNvZGVIVE1MID0gcmVxdWlyZSgnZW50aXRpZXMnKS5kZWNvZGVIVE1MO1xucmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS5yZXBlYXQnKTsgLy8gUG9seWZpbGwgZm9yIFN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5cbi8vIENvbnN0YW50cyBmb3IgY2hhcmFjdGVyIGNvZGVzOlxuXG52YXIgQ19ORVdMSU5FID0gMTA7XG52YXIgQ19BU1RFUklTSyA9IDQyO1xudmFyIENfVU5ERVJTQ09SRSA9IDk1O1xudmFyIENfQkFDS1RJQ0sgPSA5NjtcbnZhciBDX09QRU5fQlJBQ0tFVCA9IDkxO1xudmFyIENfQ0xPU0VfQlJBQ0tFVCA9IDkzO1xudmFyIENfTEVTU1RIQU4gPSA2MDtcbnZhciBDX0JBTkcgPSAzMztcbnZhciBDX0JBQ0tTTEFTSCA9IDkyO1xudmFyIENfQU1QRVJTQU5EID0gMzg7XG52YXIgQ19PUEVOX1BBUkVOID0gNDA7XG52YXIgQ19DTE9TRV9QQVJFTiA9IDQxO1xudmFyIENfQ09MT04gPSA1ODtcbnZhciBDX1NJTkdMRVFVT1RFID0gMzk7XG52YXIgQ19ET1VCTEVRVU9URSA9IDM0O1xuXG4vLyBTb21lIHJlZ2V4cHMgdXNlZCBpbiBpbmxpbmUgcGFyc2VyOlxuXG52YXIgRVNDQVBBQkxFID0gY29tbW9uLkVTQ0FQQUJMRTtcbnZhciBFU0NBUEVEX0NIQVIgPSAnXFxcXFxcXFwnICsgRVNDQVBBQkxFO1xudmFyIFJFR19DSEFSID0gJ1teXFxcXFxcXFwoKVxcXFx4MDAtXFxcXHgyMF0nO1xudmFyIElOX1BBUkVOU19OT1NQID0gJ1xcXFwoKCcgKyBSRUdfQ0hBUiArICd8JyArIEVTQ0FQRURfQ0hBUiArICd8XFxcXFxcXFwpKlxcXFwpJztcblxudmFyIEVOVElUWSA9IGNvbW1vbi5FTlRJVFk7XG52YXIgcmVIdG1sVGFnID0gY29tbW9uLnJlSHRtbFRhZztcblxudmFyIHJlUHVuY3R1YXRpb24gPSBuZXcgUmVnRXhwKC9eW1xcdTIwMDAtXFx1MjA2RlxcdTJFMDAtXFx1MkU3RlxcXFwnIVwiI1xcJCUmXFwoXFwpXFwqXFwrLFxcLVxcLlxcLzo7PD0+XFw/QFxcW1xcXVxcXl9gXFx7XFx8XFx9fl0vKTtcblxudmFyIHJlTGlua1RpdGxlID0gbmV3IFJlZ0V4cChcbiAgICAnXig/OlwiKCcgKyBFU0NBUEVEX0NIQVIgKyAnfFteXCJcXFxceDAwXSkqXCInICtcbiAgICAgICAgJ3wnICtcbiAgICAgICAgJ1xcJygnICsgRVNDQVBFRF9DSEFSICsgJ3xbXlxcJ1xcXFx4MDBdKSpcXCcnICtcbiAgICAgICAgJ3wnICtcbiAgICAgICAgJ1xcXFwoKCcgKyBFU0NBUEVEX0NIQVIgKyAnfFteKVxcXFx4MDBdKSpcXFxcKSknKTtcblxudmFyIHJlTGlua0Rlc3RpbmF0aW9uQnJhY2VzID0gbmV3IFJlZ0V4cChcbiAgICAnXig/Ols8XSg/OltePD5cXFxcblxcXFxcXFxcXFxcXHgwMF0nICsgJ3wnICsgRVNDQVBFRF9DSEFSICsgJ3wnICsgJ1xcXFxcXFxcKSpbPl0pJyk7XG5cbnZhciByZUxpbmtEZXN0aW5hdGlvbiA9IG5ldyBSZWdFeHAoXG4gICAgJ14oPzonICsgUkVHX0NIQVIgKyAnK3wnICsgRVNDQVBFRF9DSEFSICsgJ3xcXFxcXFxcXHwnICsgSU5fUEFSRU5TX05PU1AgKyAnKSonKTtcblxudmFyIHJlRXNjYXBhYmxlID0gbmV3IFJlZ0V4cCgnXicgKyBFU0NBUEFCTEUpO1xuXG52YXIgcmVFbnRpdHlIZXJlID0gbmV3IFJlZ0V4cCgnXicgKyBFTlRJVFksICdpJyk7XG5cbnZhciByZVRpY2tzID0gL2ArLztcblxudmFyIHJlVGlja3NIZXJlID0gL15gKy87XG5cbnZhciByZUVsbGlwc2VzID0gL1xcLlxcLlxcLi9nO1xuXG52YXIgcmVEYXNoID0gLy0tKy9nO1xuXG52YXIgcmVFbWFpbEF1dG9saW5rID0gL148KFthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSopPi87XG5cbnZhciByZUF1dG9saW5rID0gL148KD86Y29hcHxkb2l8amF2YXNjcmlwdHxhYWF8YWFhc3xhYm91dHxhY2FwfGNhcHxjaWR8Y3JpZHxkYXRhfGRhdnxkaWN0fGRuc3xmaWxlfGZ0cHxnZW98Z298Z29waGVyfGgzMjN8aHR0cHxodHRwc3xpYXh8aWNhcHxpbXxpbWFwfGluZm98aXBwfGlyaXN8aXJpcy5iZWVwfGlyaXMueHBjfGlyaXMueHBjc3xpcmlzLmx3enxsZGFwfG1haWx0b3xtaWR8bXNycHxtc3Jwc3xtdHFwfG11cGRhdGV8bmV3c3xuZnN8bml8bmlofG5udHB8b3BhcXVlbG9ja3Rva2VufHBvcHxwcmVzfHJ0c3B8c2VydmljZXxzZXNzaW9ufHNodHRwfHNpZXZlfHNpcHxzaXBzfHNtc3xzbm1wfHNvYXAuYmVlcHxzb2FwLmJlZXBzfHRhZ3x0ZWx8dGVsbmV0fHRmdHB8dGhpc21lc3NhZ2V8dG4zMjcwfHRpcHx0dnx1cm58dmVtbWl8d3N8d3NzfHhjb258eGNvbi11c2VyaWR8eG1scnBjLmJlZXB8eG1scnBjLmJlZXBzfHhtcHB8ejM5LjUwcnx6MzkuNTBzfGFkaXVteHRyYXxhZnB8YWZzfGFpbXxhcHR8YXR0YWNobWVudHxhd3xiZXNoYXJlfGJpdGNvaW58Ym9sb3xjYWxsdG98Y2hyb21lfGNocm9tZS1leHRlbnNpb258Y29tLWV2ZW50YnJpdGUtYXR0ZW5kZWV8Y29udGVudHxjdnN8ZGxuYS1wbGF5c2luZ2xlfGRsbmEtcGxheWNvbnRhaW5lcnxkdG58ZHZifGVkMmt8ZmFjZXRpbWV8ZmVlZHxmaW5nZXJ8ZmlzaHxnZ3xnaXR8Z2l6bW9wcm9qZWN0fGd0YWxrfGhjcHxpY29ufGlwbnxpcmN8aXJjNnxpcmNzfGl0bXN8amFyfGptc3xrZXlwYXJjfGxhc3RmbXxsZGFwc3xtYWduZXR8bWFwc3xtYXJrZXR8bWVzc2FnZXxtbXN8bXMtaGVscHxtc25pbXxtdW1ibGV8bXZufG5vdGVzfG9pZHxwYWxtfHBhcGFyYXp6aXxwbGF0Zm9ybXxwcm94eXxwc3ljfHF1ZXJ5fHJlc3xyZXNvdXJjZXxybWl8cnN5bmN8cnRtcHxzZWNvbmRsaWZlfHNmdHB8c2dufHNreXBlfHNtYnxzb2xkYXR8c3BvdGlmeXxzc2h8c3RlYW18c3ZufHRlYW1zcGVha3x0aGluZ3N8dWRwfHVucmVhbHx1dDIwMDR8dmVudHJpbG98dmlldy1zb3VyY2V8d2ViY2FsfHd0YWl8d3ljaXd5Z3x4ZmlyZXx4cml8eW1zZ3IpOltePD5cXHgwMC1cXHgyMF0qPi9pO1xuXG52YXIgcmVTcG5sID0gL14gKig/OlxcbiAqKT8vO1xuXG52YXIgcmVXaGl0ZXNwYWNlQ2hhciA9IC9eXFxzLztcblxudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMrL2c7XG5cbnZhciByZUZpbmFsU3BhY2UgPSAvICokLztcblxudmFyIHJlSW5pdGlhbFNwYWNlID0gL14gKi87XG5cbnZhciByZVNwYWNlQXRFbmRPZkxpbmUgPSAvXiAqKD86XFxufCQpLztcblxudmFyIHJlTGlua0xhYmVsID0gbmV3IFJlZ0V4cCgnXlxcXFxbKD86W15cXFxcXFxcXFxcXFxbXFxcXF1dfCcgKyBFU0NBUEVEX0NIQVIgK1xuICAnfFxcXFxcXFxcKXswLDEwMDB9XFxcXF0nKTtcblxuLy8gTWF0Y2hlcyBhIHN0cmluZyBvZiBub24tc3BlY2lhbCBjaGFyYWN0ZXJzLlxudmFyIHJlTWFpbiA9IC9eW15cXG5gXFxbXFxdXFxcXCE8JipfJ1wiXSsvbTtcblxudmFyIHRleHQgPSBmdW5jdGlvbihzKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgTm9kZSgnVGV4dCcpO1xuICAgIG5vZGUuX2xpdGVyYWwgPSBzO1xuICAgIHJldHVybiBub2RlO1xufTtcblxuLy8gSU5MSU5FIFBBUlNFUlxuXG4vLyBUaGVzZSBhcmUgbWV0aG9kcyBvZiBhbiBJbmxpbmVQYXJzZXIgb2JqZWN0LCBkZWZpbmVkIGJlbG93LlxuLy8gQW4gSW5saW5lUGFyc2VyIGtlZXBzIHRyYWNrIG9mIGEgc3ViamVjdCAoYSBzdHJpbmcgdG8gYmVcbi8vIHBhcnNlZCkgYW5kIGEgcG9zaXRpb24gaW4gdGhhdCBzdWJqZWN0LlxuXG4vLyBJZiByZSBtYXRjaGVzIGF0IGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHN1YmplY3QsIGFkdmFuY2Vcbi8vIHBvc2l0aW9uIGluIHN1YmplY3QgYW5kIHJldHVybiB0aGUgbWF0Y2g7IG90aGVyd2lzZSByZXR1cm4gbnVsbC5cbnZhciBtYXRjaCA9IGZ1bmN0aW9uKHJlKSB7XG4gICAgdmFyIG0gPSByZS5leGVjKHRoaXMuc3ViamVjdC5zbGljZSh0aGlzLnBvcykpO1xuICAgIGlmIChtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zICs9IG0uaW5kZXggKyBtWzBdLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIG1bMF07XG4gICAgfVxufTtcblxuLy8gUmV0dXJucyB0aGUgY29kZSBmb3IgdGhlIGNoYXJhY3RlciBhdCB0aGUgY3VycmVudCBzdWJqZWN0IHBvc2l0aW9uLCBvciAtMVxuLy8gdGhlcmUgYXJlIG5vIG1vcmUgY2hhcmFjdGVycy5cbnZhciBwZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zIDwgdGhpcy5zdWJqZWN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59O1xuXG4vLyBQYXJzZSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVycywgaW5jbHVkaW5nIGF0IG1vc3Qgb25lIG5ld2xpbmVcbnZhciBzcG5sID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXRjaChyZVNwbmwpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gQWxsIG9mIHRoZSBwYXJzZXJzIGJlbG93IHRyeSB0byBtYXRjaCBzb21ldGhpbmcgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbi8vIGluIHRoZSBzdWJqZWN0LiAgSWYgdGhleSBzdWNjZWVkIGluIG1hdGNoaW5nIGFueXRoaW5nLCB0aGV5XG4vLyByZXR1cm4gdGhlIGlubGluZSBtYXRjaGVkLCBhZHZhbmNpbmcgdGhlIHN1YmplY3QuXG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYmFja3RpY2tzLCBhZGRpbmcgZWl0aGVyIGEgYmFja3RpY2sgY29kZSBzcGFuIG9yIGFcbi8vIGxpdGVyYWwgc2VxdWVuY2Ugb2YgYmFja3RpY2tzLlxudmFyIHBhcnNlQmFja3RpY2tzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgdGlja3MgPSB0aGlzLm1hdGNoKHJlVGlja3NIZXJlKTtcbiAgICBpZiAodGlja3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgYWZ0ZXJPcGVuVGlja3MgPSB0aGlzLnBvcztcbiAgICB2YXIgbWF0Y2hlZDtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAoKG1hdGNoZWQgPSB0aGlzLm1hdGNoKHJlVGlja3MpKSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAobWF0Y2hlZCA9PT0gdGlja3MpIHtcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnQ29kZScpO1xuICAgICAgICAgICAgbm9kZS5fbGl0ZXJhbCA9IHRoaXMuc3ViamVjdC5zbGljZShhZnRlck9wZW5UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyAtIHRpY2tzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKS5yZXBsYWNlKHJlV2hpdGVzcGFjZSwgJyAnKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgZ290IGhlcmUsIHdlIGRpZG4ndCBtYXRjaCBhIGNsb3NpbmcgYmFja3RpY2sgc2VxdWVuY2UuXG4gICAgdGhpcy5wb3MgPSBhZnRlck9wZW5UaWNrcztcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KHRpY2tzKSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBQYXJzZSBhIGJhY2tzbGFzaC1lc2NhcGVkIHNwZWNpYWwgY2hhcmFjdGVyLCBhZGRpbmcgZWl0aGVyIHRoZSBlc2NhcGVkXG4vLyBjaGFyYWN0ZXIsIGEgaGFyZCBsaW5lIGJyZWFrIChpZiB0aGUgYmFja3NsYXNoIGlzIGZvbGxvd2VkIGJ5IGEgbmV3bGluZSksXG4vLyBvciBhIGxpdGVyYWwgYmFja3NsYXNoIHRvIHRoZSBibG9jaydzIGNoaWxkcmVuLiAgQXNzdW1lcyBjdXJyZW50IGNoYXJhY3RlclxuLy8gaXMgYSBiYWNrc2xhc2guXG52YXIgcGFyc2VCYWNrc2xhc2ggPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdWJqID0gdGhpcy5zdWJqZWN0O1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMucG9zICs9IDE7XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX05FV0xJTkUpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCdIYXJkYnJlYWsnKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChyZUVzY2FwYWJsZS50ZXN0KHN1YmouY2hhckF0KHRoaXMucG9zKSkpIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChzdWJqLmNoYXJBdCh0aGlzLnBvcykpKTtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCdcXFxcJykpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYW4gYXV0b2xpbmsgKFVSTCBvciBlbWFpbCBpbiBwb2ludHkgYnJhY2tldHMpLlxudmFyIHBhcnNlQXV0b2xpbmsgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtO1xuICAgIHZhciBkZXN0O1xuICAgIHZhciBub2RlO1xuICAgIGlmICgobSA9IHRoaXMubWF0Y2gocmVFbWFpbEF1dG9saW5rKSkpIHtcbiAgICAgICAgZGVzdCA9IG0uc2xpY2UoMSwgbS5sZW5ndGggLSAxKTtcbiAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCdMaW5rJyk7XG4gICAgICAgIG5vZGUuX2Rlc3RpbmF0aW9uID0gbm9ybWFsaXplVVJJKCdtYWlsdG86JyArIGRlc3QpO1xuICAgICAgICBub2RlLl90aXRsZSA9ICcnO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRleHQoZGVzdCkpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICgobSA9IHRoaXMubWF0Y2gocmVBdXRvbGluaykpKSB7XG4gICAgICAgIGRlc3QgPSBtLnNsaWNlKDEsIG0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnTGluaycpO1xuICAgICAgICBub2RlLl9kZXN0aW5hdGlvbiA9IG5vcm1hbGl6ZVVSSShkZXN0KTtcbiAgICAgICAgbm9kZS5fdGl0bGUgPSAnJztcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0KGRlc3QpKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGEgcmF3IEhUTUwgdGFnLlxudmFyIHBhcnNlSHRtbFRhZyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG0gPSB0aGlzLm1hdGNoKHJlSHRtbFRhZyk7XG4gICAgaWYgKG0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoJ0h0bWwnKTtcbiAgICAgICAgbm9kZS5fbGl0ZXJhbCA9IG07XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG4vLyBTY2FuIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB3aXRoIGNvZGUgY2MsIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXRcbi8vIHRoZSBudW1iZXIgb2YgZGVsaW1pdGVycyBhbmQgd2hldGhlciB0aGV5IGFyZSBwb3NpdGlvbmVkIHN1Y2ggdGhhdFxuLy8gdGhleSBjYW4gb3BlbiBhbmQvb3IgY2xvc2UgZW1waGFzaXMgb3Igc3Ryb25nIGVtcGhhc2lzLiAgQSB1dGlsaXR5XG4vLyBmdW5jdGlvbiBmb3Igc3Ryb25nL2VtcGggcGFyc2luZy5cbnZhciBzY2FuRGVsaW1zID0gZnVuY3Rpb24oY2MpIHtcbiAgICB2YXIgbnVtZGVsaW1zID0gMDtcbiAgICB2YXIgY2hhcl9iZWZvcmUsIGNoYXJfYWZ0ZXIsIGNjX2FmdGVyO1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHZhciBsZWZ0X2ZsYW5raW5nLCByaWdodF9mbGFua2luZywgY2FuX29wZW4sIGNhbl9jbG9zZTtcbiAgICB2YXIgYWZ0ZXJfaXNfd2hpdGVzcGFjZSwgYWZ0ZXJfaXNfcHVuY3R1YXRpb24sIGJlZm9yZV9pc193aGl0ZXNwYWNlLCBiZWZvcmVfaXNfcHVuY3R1YXRpb247XG5cbiAgICBpZiAoY2MgPT09IENfU0lOR0xFUVVPVEUgfHwgY2MgPT09IENfRE9VQkxFUVVPVEUpIHtcbiAgICAgICAgbnVtZGVsaW1zKys7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpID09PSBjYykge1xuICAgICAgICAgICAgbnVtZGVsaW1zKys7XG4gICAgICAgICAgICB0aGlzLnBvcysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bWRlbGltcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjaGFyX2JlZm9yZSA9IHN0YXJ0cG9zID09PSAwID8gJ1xcbicgOiB0aGlzLnN1YmplY3QuY2hhckF0KHN0YXJ0cG9zIC0gMSk7XG5cbiAgICBjY19hZnRlciA9IHRoaXMucGVlaygpO1xuICAgIGlmIChjY19hZnRlciA9PT0gLTEpIHtcbiAgICAgICAgY2hhcl9hZnRlciA9ICdcXG4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYXJfYWZ0ZXIgPSBmcm9tQ29kZVBvaW50KGNjX2FmdGVyKTtcbiAgICB9XG5cbiAgICBhZnRlcl9pc193aGl0ZXNwYWNlID0gcmVXaGl0ZXNwYWNlQ2hhci50ZXN0KGNoYXJfYWZ0ZXIpO1xuICAgIGFmdGVyX2lzX3B1bmN0dWF0aW9uID0gcmVQdW5jdHVhdGlvbi50ZXN0KGNoYXJfYWZ0ZXIpO1xuICAgIGJlZm9yZV9pc193aGl0ZXNwYWNlID0gcmVXaGl0ZXNwYWNlQ2hhci50ZXN0KGNoYXJfYmVmb3JlKTtcbiAgICBiZWZvcmVfaXNfcHVuY3R1YXRpb24gPSByZVB1bmN0dWF0aW9uLnRlc3QoY2hhcl9iZWZvcmUpO1xuXG4gICAgbGVmdF9mbGFua2luZyA9ICFhZnRlcl9pc193aGl0ZXNwYWNlICYmXG4gICAgICAgICAgICAhKGFmdGVyX2lzX3B1bmN0dWF0aW9uICYmICFiZWZvcmVfaXNfd2hpdGVzcGFjZSAmJiAhYmVmb3JlX2lzX3B1bmN0dWF0aW9uKTtcbiAgICByaWdodF9mbGFua2luZyA9ICFiZWZvcmVfaXNfd2hpdGVzcGFjZSAmJlxuICAgICAgICAgICAgIShiZWZvcmVfaXNfcHVuY3R1YXRpb24gJiYgIWFmdGVyX2lzX3doaXRlc3BhY2UgJiYgIWFmdGVyX2lzX3B1bmN0dWF0aW9uKTtcbiAgICBpZiAoY2MgPT09IENfVU5ERVJTQ09SRSkge1xuICAgICAgICBjYW5fb3BlbiA9IGxlZnRfZmxhbmtpbmcgJiZcbiAgICAgICAgICAgICghcmlnaHRfZmxhbmtpbmcgfHwgYmVmb3JlX2lzX3B1bmN0dWF0aW9uKTtcbiAgICAgICAgY2FuX2Nsb3NlID0gcmlnaHRfZmxhbmtpbmcgJiZcbiAgICAgICAgICAgICghbGVmdF9mbGFua2luZyB8fCBhZnRlcl9pc19wdW5jdHVhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FuX29wZW4gPSBsZWZ0X2ZsYW5raW5nO1xuICAgICAgICBjYW5fY2xvc2UgPSByaWdodF9mbGFua2luZztcbiAgICB9XG4gICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICByZXR1cm4geyBudW1kZWxpbXM6IG51bWRlbGltcyxcbiAgICAgICAgICAgICBjYW5fb3BlbjogY2FuX29wZW4sXG4gICAgICAgICAgICAgY2FuX2Nsb3NlOiBjYW5fY2xvc2UgfTtcbn07XG5cbi8vIEhhbmRsZSBhIGRlbGltaXRlciBtYXJrZXIgZm9yIGVtcGhhc2lzIG9yIGEgcXVvdGUuXG52YXIgaGFuZGxlRGVsaW0gPSBmdW5jdGlvbihjYywgYmxvY2spIHtcbiAgICB2YXIgcmVzID0gdGhpcy5zY2FuRGVsaW1zKGNjKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBudW1kZWxpbXMgPSByZXMubnVtZGVsaW1zO1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHZhciBjb250ZW50cztcblxuICAgIHRoaXMucG9zICs9IG51bWRlbGltcztcbiAgICBpZiAoY2MgPT09IENfU0lOR0xFUVVPVEUpIHtcbiAgICAgICAgY29udGVudHMgPSBcIlxcdTIwMTlcIjtcbiAgICB9IGVsc2UgaWYgKGNjID09PSBDX0RPVUJMRVFVT1RFKSB7XG4gICAgICAgIGNvbnRlbnRzID0gXCJcXHUyMDFDXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudHMgPSB0aGlzLnN1YmplY3Quc2xpY2Uoc3RhcnRwb3MsIHRoaXMucG9zKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSB0ZXh0KGNvbnRlbnRzKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIC8vIEFkZCBlbnRyeSB0byBzdGFjayBmb3IgdGhpcyBvcGVuZXJcbiAgICB0aGlzLmRlbGltaXRlcnMgPSB7IGNjOiBjYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWRlbGltczogbnVtZGVsaW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiB0aGlzLmRlbGltaXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuX29wZW46IHJlcy5jYW5fb3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9jbG9zZTogcmVzLmNhbl9jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSB9O1xuICAgIGlmICh0aGlzLmRlbGltaXRlcnMucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzLm5leHQgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn07XG5cbnZhciByZW1vdmVEZWxpbWl0ZXIgPSBmdW5jdGlvbihkZWxpbSkge1xuICAgIGlmIChkZWxpbS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICBkZWxpbS5wcmV2aW91cy5uZXh0ID0gZGVsaW0ubmV4dDtcbiAgICB9XG4gICAgaWYgKGRlbGltLm5leHQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gdG9wIG9mIHN0YWNrXG4gICAgICAgIHRoaXMuZGVsaW1pdGVycyA9IGRlbGltLnByZXZpb3VzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGltLm5leHQucHJldmlvdXMgPSBkZWxpbS5wcmV2aW91cztcbiAgICB9XG59O1xuXG52YXIgcmVtb3ZlRGVsaW1pdGVyc0JldHdlZW4gPSBmdW5jdGlvbihib3R0b20sIHRvcCkge1xuICAgIGlmIChib3R0b20ubmV4dCAhPT0gdG9wKSB7XG4gICAgICAgIGJvdHRvbS5uZXh0ID0gdG9wO1xuICAgICAgICB0b3AucHJldmlvdXMgPSBib3R0b207XG4gICAgfVxufTtcblxudmFyIHByb2Nlc3NFbXBoYXNpcyA9IGZ1bmN0aW9uKHN0YWNrX2JvdHRvbSkge1xuICAgIHZhciBvcGVuZXIsIGNsb3Nlciwgb2xkX2Nsb3NlcjtcbiAgICB2YXIgb3BlbmVyX2lubCwgY2xvc2VyX2lubDtcbiAgICB2YXIgdGVtcHN0YWNrO1xuICAgIHZhciB1c2VfZGVsaW1zO1xuICAgIHZhciB0bXAsIG5leHQ7XG4gICAgdmFyIG9wZW5lcl9mb3VuZDtcbiAgICB2YXIgb3BlbmVyc19ib3R0b20gPSBbXTtcblxuICAgIG9wZW5lcnNfYm90dG9tW0NfVU5ERVJTQ09SRV0gPSBzdGFja19ib3R0b207XG4gICAgb3BlbmVyc19ib3R0b21bQ19BU1RFUklTS10gPSBzdGFja19ib3R0b207XG4gICAgb3BlbmVyc19ib3R0b21bQ19TSU5HTEVRVU9URV0gPSBzdGFja19ib3R0b207XG4gICAgb3BlbmVyc19ib3R0b21bQ19ET1VCTEVRVU9URV0gPSBzdGFja19ib3R0b207XG5cbiAgICAvLyBmaW5kIGZpcnN0IGNsb3NlciBhYm92ZSBzdGFja19ib3R0b206XG4gICAgY2xvc2VyID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgIHdoaWxlIChjbG9zZXIgIT09IG51bGwgJiYgY2xvc2VyLnByZXZpb3VzICE9PSBzdGFja19ib3R0b20pIHtcbiAgICAgICAgY2xvc2VyID0gY2xvc2VyLnByZXZpb3VzO1xuICAgIH1cbiAgICAvLyBtb3ZlIGZvcndhcmQsIGxvb2tpbmcgZm9yIGNsb3NlcnMsIGFuZCBoYW5kbGluZyBlYWNoXG4gICAgd2hpbGUgKGNsb3NlciAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgY2xvc2VyY2MgPSBjbG9zZXIuY2M7XG4gICAgICAgIGlmICghKGNsb3Nlci5jYW5fY2xvc2UgJiYgKGNsb3NlcmNjID09PSBDX1VOREVSU0NPUkUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyY2MgPT09IENfQVNURVJJU0sgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyY2MgPT09IENfU0lOR0xFUVVPVEUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyY2MgPT09IENfRE9VQkxFUVVPVEUpKSkge1xuICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3VuZCBlbXBoYXNpcyBjbG9zZXIuIG5vdyBsb29rIGJhY2sgZm9yIGZpcnN0IG1hdGNoaW5nIG9wZW5lcjpcbiAgICAgICAgICAgIG9wZW5lciA9IGNsb3Nlci5wcmV2aW91cztcbiAgICAgICAgICAgIG9wZW5lcl9mb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKG9wZW5lciAhPT0gbnVsbCAmJiBvcGVuZXIgIT09IHN0YWNrX2JvdHRvbSAmJlxuICAgICAgICAgICAgICAgICAgIG9wZW5lciAhPT0gb3BlbmVyc19ib3R0b21bY2xvc2VyY2NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lci5jYyA9PT0gY2xvc2VyLmNjICYmIG9wZW5lci5jYW5fb3Blbikge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXJfZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3BlbmVyID0gb3BlbmVyLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2xkX2Nsb3NlciA9IGNsb3NlcjtcblxuICAgICAgICAgICAgaWYgKGNsb3NlcmNjID09PSBDX0FTVEVSSVNLIHx8IGNsb3NlcmNjID09PSBDX1VOREVSU0NPUkUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXIgPSBjbG9zZXIubmV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgYWN0dWFsIG51bWJlciBvZiBkZWxpbWl0ZXJzIHVzZWQgZnJvbSBjbG9zZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlci5udW1kZWxpbXMgPCAzIHx8IG9wZW5lci5udW1kZWxpbXMgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VfZGVsaW1zID0gY2xvc2VyLm51bWRlbGltcyA8PSBvcGVuZXIubnVtZGVsaW1zID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXIubnVtZGVsaW1zIDogb3BlbmVyLm51bWRlbGltcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9kZWxpbXMgPSBjbG9zZXIubnVtZGVsaW1zICUgMiA9PT0gMCA/IDIgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubCA9IG9wZW5lci5ub2RlO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sID0gY2xvc2VyLm5vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHVzZWQgZGVsaW1pdGVycyBmcm9tIHN0YWNrIGVsdHMgYW5kIGlubGluZXNcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyLm51bWRlbGltcyAtPSB1c2VfZGVsaW1zO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXIubnVtZGVsaW1zIC09IHVzZV9kZWxpbXM7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuX2xpdGVyYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5fbGl0ZXJhbC5zbGljZSgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLl9saXRlcmFsLmxlbmd0aCAtIHVzZV9kZWxpbXMpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sLl9saXRlcmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwuX2xpdGVyYWwuc2xpY2UoMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC5fbGl0ZXJhbC5sZW5ndGggLSB1c2VfZGVsaW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBidWlsZCBjb250ZW50cyBmb3IgbmV3IGVtcGggZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1waCA9IG5ldyBOb2RlKHVzZV9kZWxpbXMgPT09IDEgPyAnRW1waCcgOiAnU3Ryb25nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG1wID0gb3BlbmVyX2lubC5fbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRtcCAmJiB0bXAgIT09IGNsb3Nlcl9pbmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0bXAuX25leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAudW5saW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBoLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5pbnNlcnRBZnRlcihlbXBoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZWx0cyBiZXR3ZWVuIG9wZW5lciBhbmQgY2xvc2VyIGluIGRlbGltaXRlcnMgc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGVsaW1pdGVyc0JldHdlZW4ob3BlbmVyLCBjbG9zZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG9wZW5lciBoYXMgMCBkZWxpbXMsIHJlbW92ZSBpdCBhbmQgdGhlIGlubGluZVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbmVyLm51bWRlbGltcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC51bmxpbmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKG9wZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VyLm51bWRlbGltcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC51bmxpbmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBzdGFjayA9IGNsb3Nlci5uZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIoY2xvc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlciA9IHRlbXBzdGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlcmNjID09PSBDX1NJTkdMRVFVT1RFKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyLm5vZGUuX2xpdGVyYWwgPSBcIlxcdTIwMTlcIjtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lci5ub2RlLl9saXRlcmFsID0gXCJcXHUyMDE4XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlcmNjID09PSBDX0RPVUJMRVFVT1RFKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyLm5vZGUuX2xpdGVyYWwgPSBcIlxcdTIwMURcIjtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lci5ub2RlLmxpdGVyYWwgPSBcIlxcdTIwMUNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghb3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGxvd2VyIGJvdW5kIGZvciBmdXR1cmUgc2VhcmNoZXMgZm9yIG9wZW5lcnM6XG4gICAgICAgICAgICAgICAgb3BlbmVyc19ib3R0b21bY2xvc2VyY2NdID0gb2xkX2Nsb3Nlci5wcmV2aW91cztcbiAgICAgICAgICAgICAgICBpZiAoIW9sZF9jbG9zZXIuY2FuX29wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHJlbW92ZSBhIGNsb3NlciB0aGF0IGNhbid0IGJlIGFuIG9wZW5lcixcbiAgICAgICAgICAgICAgICAgICAgLy8gb25jZSB3ZSd2ZSBzZWVuIHRoZXJlJ3Mgbm8gbWF0Y2hpbmcgb3BlbmVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvbGRfY2xvc2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgZGVsaW1pdGVyc1xuICAgIHdoaWxlICh0aGlzLmRlbGltaXRlcnMgIT09IG51bGwgJiYgdGhpcy5kZWxpbWl0ZXJzICE9PSBzdGFja19ib3R0b20pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIodGhpcy5kZWxpbWl0ZXJzKTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGxpbmsgdGl0bGUgKHNhbnMgcXVvdGVzKSwgcmV0dXJuaW5nIHRoZSBzdHJpbmdcbi8vIG9yIG51bGwgaWYgbm8gbWF0Y2guXG52YXIgcGFyc2VMaW5rVGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLm1hdGNoKHJlTGlua1RpdGxlKTtcbiAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2hvcCBvZmYgcXVvdGVzIGZyb20gdGl0bGUgYW5kIHVuZXNjYXBlOlxuICAgICAgICByZXR1cm4gdW5lc2NhcGVTdHJpbmcodGl0bGUuc3Vic3RyKDEsIHRpdGxlLmxlbmd0aCAtIDIpKTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGxpbmsgZGVzdGluYXRpb24sIHJldHVybmluZyB0aGUgc3RyaW5nIG9yXG4vLyBudWxsIGlmIG5vIG1hdGNoLlxudmFyIHBhcnNlTGlua0Rlc3RpbmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlcyA9IHRoaXMubWF0Y2gocmVMaW5rRGVzdGluYXRpb25CcmFjZXMpO1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmVzID0gdGhpcy5tYXRjaChyZUxpbmtEZXN0aW5hdGlvbik7XG4gICAgICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVSSSh1bmVzY2FwZVN0cmluZyhyZXMpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7ICAvLyBjaG9wIG9mZiBzdXJyb3VuZGluZyA8Li4+OlxuICAgICAgICByZXR1cm4gbm9ybWFsaXplVVJJKHVuZXNjYXBlU3RyaW5nKHJlcy5zdWJzdHIoMSwgcmVzLmxlbmd0aCAtIDIpKSk7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhIGxpbmsgbGFiZWwsIHJldHVybmluZyBudW1iZXIgb2YgY2hhcmFjdGVycyBwYXJzZWQuXG52YXIgcGFyc2VMaW5rTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbSA9IHRoaXMubWF0Y2gocmVMaW5rTGFiZWwpO1xuICAgIGlmIChtID09PSBudWxsIHx8IG0ubGVuZ3RoID4gMTAwMSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbS5sZW5ndGg7XG4gICAgfVxufTtcblxuLy8gQWRkIG9wZW4gYnJhY2tldCB0byBkZWxpbWl0ZXIgc3RhY2sgYW5kIGFkZCBhIHRleHQgbm9kZSB0byBibG9jaydzIGNoaWxkcmVuLlxudmFyIHBhcnNlT3BlbkJyYWNrZXQgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHRoaXMucG9zICs9IDE7XG5cbiAgICB2YXIgbm9kZSA9IHRleHQoJ1snKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIC8vIEFkZCBlbnRyeSB0byBzdGFjayBmb3IgdGhpcyBvcGVuZXJcbiAgICB0aGlzLmRlbGltaXRlcnMgPSB7IGNjOiBDX09QRU5fQlJBQ0tFVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWRlbGltczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogdGhpcy5kZWxpbWl0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9vcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuX2Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSB9O1xuICAgIGlmICh0aGlzLmRlbGltaXRlcnMucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzLm5leHQgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn07XG5cbi8vIElGIG5leHQgY2hhcmFjdGVyIGlzIFssIGFuZCAhIGRlbGltaXRlciB0byBkZWxpbWl0ZXIgc3RhY2sgYW5kXG4vLyBhZGQgYSB0ZXh0IG5vZGUgdG8gYmxvY2sncyBjaGlsZHJlbi4gIE90aGVyd2lzZSBqdXN0IGFkZCBhIHRleHQgbm9kZS5cbnZhciBwYXJzZUJhbmcgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHRoaXMucG9zICs9IDE7XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX09QRU5fQlJBQ0tFVCkge1xuICAgICAgICB0aGlzLnBvcyArPSAxO1xuXG4gICAgICAgIHZhciBub2RlID0gdGV4dCgnIVsnKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgLy8gQWRkIGVudHJ5IHRvIHN0YWNrIGZvciB0aGlzIG9wZW5lclxuICAgICAgICB0aGlzLmRlbGltaXRlcnMgPSB7IGNjOiBDX0JBTkcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZGVsaW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHRoaXMuZGVsaW1pdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9vcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9jbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0cG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUgfTtcbiAgICAgICAgaWYgKHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzLm5leHQgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCchJykpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFRyeSB0byBtYXRjaCBjbG9zZSBicmFja2V0IGFnYWluc3QgYW4gb3BlbmluZyBpbiB0aGUgZGVsaW1pdGVyXG4vLyBzdGFjay4gIEFkZCBlaXRoZXIgYSBsaW5rIG9yIGltYWdlLCBvciBhIHBsYWluIFsgY2hhcmFjdGVyLFxuLy8gdG8gYmxvY2sncyBjaGlsZHJlbi4gIElmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZGVsaW1pdGVyLFxuLy8gcmVtb3ZlIGl0IGZyb20gdGhlIGRlbGltaXRlciBzdGFjay5cbnZhciBwYXJzZUNsb3NlQnJhY2tldCA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHN0YXJ0cG9zO1xuICAgIHZhciBpc19pbWFnZTtcbiAgICB2YXIgZGVzdDtcbiAgICB2YXIgdGl0bGU7XG4gICAgdmFyIG1hdGNoZWQgPSBmYWxzZTtcbiAgICB2YXIgcmVmbGFiZWw7XG4gICAgdmFyIG9wZW5lcjtcblxuICAgIHRoaXMucG9zICs9IDE7XG4gICAgc3RhcnRwb3MgPSB0aGlzLnBvcztcblxuICAgIC8vIGxvb2sgdGhyb3VnaCBzdGFjayBvZiBkZWxpbWl0ZXJzIGZvciBhIFsgb3IgIVtcbiAgICBvcGVuZXIgPSB0aGlzLmRlbGltaXRlcnM7XG5cbiAgICB3aGlsZSAob3BlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChvcGVuZXIuY2MgPT09IENfT1BFTl9CUkFDS0VUIHx8IG9wZW5lci5jYyA9PT0gQ19CQU5HKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvcGVuZXIgPSBvcGVuZXIucHJldmlvdXM7XG4gICAgfVxuXG4gICAgaWYgKG9wZW5lciA9PT0gbnVsbCkge1xuICAgICAgICAvLyBubyBtYXRjaGVkIG9wZW5lciwganVzdCByZXR1cm4gYSBsaXRlcmFsXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJ10nKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghb3BlbmVyLmFjdGl2ZSkge1xuICAgICAgICAvLyBubyBtYXRjaGVkIG9wZW5lciwganVzdCByZXR1cm4gYSBsaXRlcmFsXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJ10nKSk7XG4gICAgICAgIC8vIHRha2Ugb3BlbmVyIG9mZiBlbXBoYXNpcyBzdGFja1xuICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvcGVuZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBnb3QgaGVyZSwgb3BlbiBpcyBhIHBvdGVudGlhbCBvcGVuZXJcbiAgICBpc19pbWFnZSA9IG9wZW5lci5jYyA9PT0gQ19CQU5HO1xuXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSBsaW5rL2ltYWdlXG5cbiAgICAvLyBJbmxpbmUgbGluaz9cbiAgICBpZiAodGhpcy5wZWVrKCkgPT09IENfT1BFTl9QQVJFTikge1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgICAgICBpZiAodGhpcy5zcG5sKCkgJiZcbiAgICAgICAgICAgICgoZGVzdCA9IHRoaXMucGFyc2VMaW5rRGVzdGluYXRpb24oKSkgIT09IG51bGwpICYmXG4gICAgICAgICAgICB0aGlzLnNwbmwoKSAmJlxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgYSBzcGFjZSBiZWZvcmUgdGhlIHRpdGxlOlxuICAgICAgICAgICAgKHJlV2hpdGVzcGFjZUNoYXIudGVzdCh0aGlzLnN1YmplY3QuY2hhckF0KHRoaXMucG9zIC0gMSkpICYmXG4gICAgICAgICAgICAgKHRpdGxlID0gdGhpcy5wYXJzZUxpbmtUaXRsZSgpKSB8fCB0cnVlKSAmJlxuICAgICAgICAgICAgdGhpcy5zcG5sKCkgJiZcbiAgICAgICAgICAgIHRoaXMucGVlaygpID09PSBDX0NMT1NFX1BBUkVOKSB7XG4gICAgICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIE5leHQsIHNlZSBpZiB0aGVyZSdzIGEgbGluayBsYWJlbFxuICAgICAgICB2YXIgc2F2ZXBvcyA9IHRoaXMucG9zO1xuICAgICAgICB0aGlzLnNwbmwoKTtcbiAgICAgICAgdmFyIGJlZm9yZWxhYmVsID0gdGhpcy5wb3M7XG4gICAgICAgIHZhciBuID0gdGhpcy5wYXJzZUxpbmtMYWJlbCgpO1xuICAgICAgICBpZiAobiA9PT0gMCB8fCBuID09PSAyKSB7XG4gICAgICAgICAgICAvLyBlbXB0eSBvciBtaXNzaW5nIHNlY29uZCBsYWJlbFxuICAgICAgICAgICAgcmVmbGFiZWwgPSB0aGlzLnN1YmplY3Quc2xpY2Uob3BlbmVyLmluZGV4LCBzdGFydHBvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZsYWJlbCA9IHRoaXMuc3ViamVjdC5zbGljZShiZWZvcmVsYWJlbCwgYmVmb3JlbGFiZWwgKyBuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmssIHJld2luZCBiZWZvcmUgc3BhY2VzIHdlIHNraXBwZWQuXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHNhdmVwb3M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb29rdXAgcmF3bGFiZWwgaW4gcmVmbWFwXG4gICAgICAgIHZhciBsaW5rID0gdGhpcy5yZWZtYXBbbm9ybWFsaXplUmVmZXJlbmNlKHJlZmxhYmVsKV07XG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgICBkZXN0ID0gbGluay5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIHRpdGxlID0gbGluay50aXRsZTtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShpc19pbWFnZSA/ICdJbWFnZScgOiAnTGluaycpO1xuICAgICAgICBub2RlLl9kZXN0aW5hdGlvbiA9IGRlc3Q7XG4gICAgICAgIG5vZGUuX3RpdGxlID0gdGl0bGUgfHwgJyc7XG5cbiAgICAgICAgdmFyIHRtcCwgbmV4dDtcbiAgICAgICAgdG1wID0gb3BlbmVyLm5vZGUuX25leHQ7XG4gICAgICAgIHdoaWxlICh0bXApIHtcbiAgICAgICAgICAgIG5leHQgPSB0bXAuX25leHQ7XG4gICAgICAgICAgICB0bXAudW5saW5rKCk7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICB0bXAgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLnByb2Nlc3NFbXBoYXNpcyhvcGVuZXIucHJldmlvdXMpO1xuXG4gICAgICAgIG9wZW5lci5ub2RlLnVubGluaygpO1xuXG4gICAgICAgIC8vIHByb2Nlc3NFbXBoYXNpcyB3aWxsIHJlbW92ZSB0aGlzIGFuZCBsYXRlciBkZWxpbWl0ZXJzLlxuICAgICAgICAvLyBOb3csIGZvciBhIGxpbmssIHdlIGFsc28gZGVhY3RpdmF0ZSBlYXJsaWVyIGxpbmsgb3BlbmVycy5cbiAgICAgICAgLy8gKG5vIGxpbmtzIGluIGxpbmtzKVxuICAgICAgICBpZiAoIWlzX2ltYWdlKSB7XG4gICAgICAgICAgb3BlbmVyID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgICAgICAgIHdoaWxlIChvcGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChvcGVuZXIuY2MgPT09IENfT1BFTl9CUkFDS0VUKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVyLmFjdGl2ZSA9IGZhbHNlOyAvLyBkZWFjdGl2YXRlIHRoaXMgb3BlbmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcGVuZXIgPSBvcGVuZXIucHJldmlvdXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9IGVsc2UgeyAvLyBubyBtYXRjaFxuXG4gICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKG9wZW5lcik7ICAvLyByZW1vdmUgdGhpcyBvcGVuZXIgZnJvbSBzdGFja1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCddJykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYW4gZW50aXR5LlxudmFyIHBhcnNlRW50aXR5ID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlRW50aXR5SGVyZSkpKSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoZGVjb2RlSFRNTChtKSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuLy8gUGFyc2UgYSBydW4gb2Ygb3JkaW5hcnkgY2hhcmFjdGVycywgb3IgYSBzaW5nbGUgY2hhcmFjdGVyIHdpdGhcbi8vIGEgc3BlY2lhbCBtZWFuaW5nIGluIG1hcmtkb3duLCBhcyBhIHBsYWluIHN0cmluZy5cbnZhciBwYXJzZVN0cmluZyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKChtID0gdGhpcy5tYXRjaChyZU1haW4pKSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNtYXJ0KSB7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KFxuICAgICAgICAgICAgICAgIG0ucmVwbGFjZShyZUVsbGlwc2VzLCBcIlxcdTIwMjZcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVEYXNoLCBmdW5jdGlvbihjaGFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJzLmxlbmd0aCAlIDMgPT09IDApIHsgLy8gSWYgZGl2aXNpYmxlIGJ5IDMsIHVzZSBhbGwgZW0gZGFzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1Db3VudCA9IGNoYXJzLmxlbmd0aCAvIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJzLmxlbmd0aCAlIDIgPT09IDApIHsgLy8gSWYgZGl2aXNpYmxlIGJ5IDIsIHVzZSBhbGwgZW4gZGFzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5Db3VudCA9IGNoYXJzLmxlbmd0aCAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJzLmxlbmd0aCAlIDMgPT09IDIpIHsgLy8gSWYgMiBleHRyYSBkYXNoZXMsIHVzZSBlbiBkYXNoIGZvciBsYXN0IDI7IGVtIGRhc2hlcyBmb3IgcmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuQ291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtQ291bnQgPSAoY2hhcnMubGVuZ3RoIC0gMikgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gVXNlIGVuIGRhc2hlcyBmb3IgbGFzdCA0IGh5cGhlbnM7IGVtIGRhc2hlcyBmb3IgcmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuQ291bnQgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtQ291bnQgPSAoY2hhcnMubGVuZ3RoIC0gNCkgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXFx1MjAxNFwiLnJlcGVhdChlbUNvdW50KSArIFwiXFx1MjAxM1wiLnJlcGVhdChlbkNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQobSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG4vLyBQYXJzZSBhIG5ld2xpbmUuICBJZiBpdCB3YXMgcHJlY2VkZWQgYnkgdHdvIHNwYWNlcywgcmV0dXJuIGEgaGFyZFxuLy8gbGluZSBicmVhazsgb3RoZXJ3aXNlIGEgc29mdCBsaW5lIGJyZWFrLlxudmFyIHBhcnNlTmV3bGluZSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdGhpcy5wb3MgKz0gMTsgLy8gYXNzdW1lIHdlJ3JlIGF0IGEgXFxuXG4gICAgLy8gY2hlY2sgcHJldmlvdXMgbm9kZSBmb3IgdHJhaWxpbmcgc3BhY2VzXG4gICAgdmFyIGxhc3RjID0gYmxvY2suX2xhc3RDaGlsZDtcbiAgICBpZiAobGFzdGMgJiYgbGFzdGMudHlwZSA9PT0gJ1RleHQnICYmIGxhc3RjLl9saXRlcmFsW2xhc3RjLl9saXRlcmFsLmxlbmd0aCAtIDFdID09PSAnICcpIHtcbiAgICAgICAgdmFyIGhhcmRicmVhayA9IGxhc3RjLl9saXRlcmFsW2xhc3RjLl9saXRlcmFsLmxlbmd0aCAtIDJdID09PSAnICc7XG4gICAgICAgIGxhc3RjLl9saXRlcmFsID0gbGFzdGMuX2xpdGVyYWwucmVwbGFjZShyZUZpbmFsU3BhY2UsICcnKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobmV3IE5vZGUoaGFyZGJyZWFrID8gJ0hhcmRicmVhaycgOiAnU29mdGJyZWFrJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5ldyBOb2RlKCdTb2Z0YnJlYWsnKSk7XG4gICAgfVxuICAgIHRoaXMubWF0Y2gocmVJbml0aWFsU3BhY2UpOyAvLyBnb2JibGUgbGVhZGluZyBzcGFjZXMgaW4gbmV4dCBsaW5lXG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGEgbGluayByZWZlcmVuY2UsIG1vZGlmeWluZyByZWZtYXAuXG52YXIgcGFyc2VSZWZlcmVuY2UgPSBmdW5jdGlvbihzLCByZWZtYXApIHtcbiAgICB0aGlzLnN1YmplY3QgPSBzO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB2YXIgcmF3bGFiZWw7XG4gICAgdmFyIGRlc3Q7XG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBtYXRjaENoYXJzO1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuXG4gICAgLy8gbGFiZWw6XG4gICAgbWF0Y2hDaGFycyA9IHRoaXMucGFyc2VMaW5rTGFiZWwoKTtcbiAgICBpZiAobWF0Y2hDaGFycyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXdsYWJlbCA9IHRoaXMuc3ViamVjdC5zdWJzdHIoMCwgbWF0Y2hDaGFycyk7XG4gICAgfVxuXG4gICAgLy8gY29sb246XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX0NPTE9OKSB7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gIGxpbmsgdXJsXG4gICAgdGhpcy5zcG5sKCk7XG5cbiAgICBkZXN0ID0gdGhpcy5wYXJzZUxpbmtEZXN0aW5hdGlvbigpO1xuICAgIGlmIChkZXN0ID09PSBudWxsIHx8IGRlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBiZWZvcmV0aXRsZSA9IHRoaXMucG9zO1xuICAgIHRoaXMuc3BubCgpO1xuICAgIHRpdGxlID0gdGhpcy5wYXJzZUxpbmtUaXRsZSgpO1xuICAgIGlmICh0aXRsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aXRsZSA9ICcnO1xuICAgICAgICAvLyByZXdpbmQgYmVmb3JlIHNwYWNlc1xuICAgICAgICB0aGlzLnBvcyA9IGJlZm9yZXRpdGxlO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBhdCBsaW5lIGVuZDpcbiAgICB2YXIgYXRMaW5lRW5kID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5tYXRjaChyZVNwYWNlQXRFbmRPZkxpbmUpID09PSBudWxsKSB7XG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGF0TGluZUVuZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhlIHBvdGVudGlhbCB0aXRsZSB3ZSBmb3VuZCBpcyBub3QgYXQgdGhlIGxpbmUgZW5kLFxuICAgICAgICAgICAgLy8gYnV0IGl0IGNvdWxkIHN0aWxsIGJlIGEgbGVnYWwgbGluayByZWZlcmVuY2UgaWYgd2VcbiAgICAgICAgICAgIC8vIGRpc2NhcmQgdGhlIHRpdGxlXG4gICAgICAgICAgICB0aXRsZSA9ICcnO1xuICAgICAgICAgICAgLy8gcmV3aW5kIGJlZm9yZSBzcGFjZXNcbiAgICAgICAgICAgIHRoaXMucG9zID0gYmVmb3JldGl0bGU7XG4gICAgICAgICAgICAvLyBhbmQgaW5zdGVhZCBjaGVjayBpZiB0aGUgbGluayBVUkwgaXMgYXQgdGhlIGxpbmUgZW5kXG4gICAgICAgICAgICBhdExpbmVFbmQgPSB0aGlzLm1hdGNoKHJlU3BhY2VBdEVuZE9mTGluZSkgIT09IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWF0TGluZUVuZCkge1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgbm9ybWxhYmVsID0gbm9ybWFsaXplUmVmZXJlbmNlKHJhd2xhYmVsKTtcbiAgICBpZiAobm9ybWxhYmVsID09PSAnJykge1xuICAgICAgICAvLyBsYWJlbCBtdXN0IGNvbnRhaW4gbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoIXJlZm1hcFtub3JtbGFiZWxdKSB7XG4gICAgICAgIHJlZm1hcFtub3JtbGFiZWxdID0geyBkZXN0aW5hdGlvbjogZGVzdCwgdGl0bGU6IHRpdGxlIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvcyAtIHN0YXJ0cG9zO1xufTtcblxuLy8gUGFyc2UgdGhlIG5leHQgaW5saW5lIGVsZW1lbnQgaW4gc3ViamVjdCwgYWR2YW5jaW5nIHN1YmplY3QgcG9zaXRpb24uXG4vLyBPbiBzdWNjZXNzLCBhZGQgdGhlIHJlc3VsdCB0byBibG9jaydzIGNoaWxkcmVuIGFuZCByZXR1cm4gdHJ1ZS5cbi8vIE9uIGZhaWx1cmUsIHJldHVybiBmYWxzZS5cbnZhciBwYXJzZUlubGluZSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHJlcyA9IGZhbHNlO1xuICAgIHZhciBjID0gdGhpcy5wZWVrKCk7XG4gICAgaWYgKGMgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3dpdGNoKGMpIHtcbiAgICBjYXNlIENfTkVXTElORTpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZU5ld2xpbmUoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQkFDS1NMQVNIOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQmFja3NsYXNoKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0JBQ0tUSUNLOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQmFja3RpY2tzKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0FTVEVSSVNLOlxuICAgIGNhc2UgQ19VTkRFUlNDT1JFOlxuICAgICAgICByZXMgPSB0aGlzLmhhbmRsZURlbGltKGMsIGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX1NJTkdMRVFVT1RFOlxuICAgIGNhc2UgQ19ET1VCTEVRVU9URTpcbiAgICAgICAgcmVzID0gdGhpcy5vcHRpb25zLnNtYXJ0ICYmIHRoaXMuaGFuZGxlRGVsaW0oYywgYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfT1BFTl9CUkFDS0VUOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlT3BlbkJyYWNrZXQoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQkFORzpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUJhbmcoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQ0xPU0VfQlJBQ0tFVDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUNsb3NlQnJhY2tldChibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19MRVNTVEhBTjpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUF1dG9saW5rKGJsb2NrKSB8fCB0aGlzLnBhcnNlSHRtbFRhZyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19BTVBFUlNBTkQ6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VFbnRpdHkoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlU3RyaW5nKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghcmVzKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoZnJvbUNvZGVQb2ludChjKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gUGFyc2Ugc3RyaW5nIGNvbnRlbnQgaW4gYmxvY2sgaW50byBpbmxpbmUgY2hpbGRyZW4sXG4vLyB1c2luZyByZWZtYXAgdG8gcmVzb2x2ZSByZWZlcmVuY2VzLlxudmFyIHBhcnNlSW5saW5lcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdGhpcy5zdWJqZWN0ID0gYmxvY2suX3N0cmluZ19jb250ZW50LnRyaW0oKTtcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdGhpcy5kZWxpbWl0ZXJzID0gbnVsbDtcbiAgICB3aGlsZSAodGhpcy5wYXJzZUlubGluZShibG9jaykpIHtcbiAgICB9XG4gICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gbnVsbDsgLy8gYWxsb3cgcmF3IHN0cmluZyB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZFxuICAgIHRoaXMucHJvY2Vzc0VtcGhhc2lzKG51bGwpO1xufTtcblxuLy8gVGhlIElubGluZVBhcnNlciBvYmplY3QuXG5mdW5jdGlvbiBJbmxpbmVQYXJzZXIob3B0aW9ucyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgIGRlbGltaXRlcnM6IG51bGwsICAvLyB1c2VkIGJ5IGhhbmRsZURlbGltIG1ldGhvZFxuICAgICAgICBwb3M6IDAsXG4gICAgICAgIHJlZm1hcDoge30sXG4gICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgcGVlazogcGVlayxcbiAgICAgICAgc3BubDogc3BubCxcbiAgICAgICAgcGFyc2VCYWNrdGlja3M6IHBhcnNlQmFja3RpY2tzLFxuICAgICAgICBwYXJzZUJhY2tzbGFzaDogcGFyc2VCYWNrc2xhc2gsXG4gICAgICAgIHBhcnNlQXV0b2xpbms6IHBhcnNlQXV0b2xpbmssXG4gICAgICAgIHBhcnNlSHRtbFRhZzogcGFyc2VIdG1sVGFnLFxuICAgICAgICBzY2FuRGVsaW1zOiBzY2FuRGVsaW1zLFxuICAgICAgICBoYW5kbGVEZWxpbTogaGFuZGxlRGVsaW0sXG4gICAgICAgIHBhcnNlTGlua1RpdGxlOiBwYXJzZUxpbmtUaXRsZSxcbiAgICAgICAgcGFyc2VMaW5rRGVzdGluYXRpb246IHBhcnNlTGlua0Rlc3RpbmF0aW9uLFxuICAgICAgICBwYXJzZUxpbmtMYWJlbDogcGFyc2VMaW5rTGFiZWwsXG4gICAgICAgIHBhcnNlT3BlbkJyYWNrZXQ6IHBhcnNlT3BlbkJyYWNrZXQsXG4gICAgICAgIHBhcnNlQ2xvc2VCcmFja2V0OiBwYXJzZUNsb3NlQnJhY2tldCxcbiAgICAgICAgcGFyc2VCYW5nOiBwYXJzZUJhbmcsXG4gICAgICAgIHBhcnNlRW50aXR5OiBwYXJzZUVudGl0eSxcbiAgICAgICAgcGFyc2VTdHJpbmc6IHBhcnNlU3RyaW5nLFxuICAgICAgICBwYXJzZU5ld2xpbmU6IHBhcnNlTmV3bGluZSxcbiAgICAgICAgcGFyc2VSZWZlcmVuY2U6IHBhcnNlUmVmZXJlbmNlLFxuICAgICAgICBwYXJzZUlubGluZTogcGFyc2VJbmxpbmUsXG4gICAgICAgIHByb2Nlc3NFbXBoYXNpczogcHJvY2Vzc0VtcGhhc2lzLFxuICAgICAgICByZW1vdmVEZWxpbWl0ZXI6IHJlbW92ZURlbGltaXRlcixcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgcGFyc2U6IHBhcnNlSW5saW5lc1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5saW5lUGFyc2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvaW5saW5lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZGVyaXZlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5mcm9tQ29kZVBvaW50XG4vKiEgaHR0cDovL210aHMuYmUvZnJvbWNvZGVwb2ludCB2MC4yLjEgYnkgQG1hdGhpYXMgKi9cbmlmIChTdHJpbmcuZnJvbUNvZGVQb2ludCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludChfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSYW5nZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG59IGVsc2Uge1xuXG4gIHZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgZnJvbUNvZGVQb2ludCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwO1xuICAgICAgdmFyIGNvZGVVbml0cyA9IFtdO1xuICAgICAgdmFyIGhpZ2hTdXJyb2dhdGU7XG4gICAgICB2YXIgbG93U3Vycm9nYXRlO1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICAgICAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgICAgICAgICAgIGNvZGVQb2ludCA+IDB4MTBGRkZGIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICAgICAgICAgICAgZmxvb3IoY29kZVBvaW50KSAhPT0gY29kZVBvaW50IC8vIG5vdCBhbiBpbnRlZ2VyXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhGRkZGKSB7IC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludCk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gQXN0cmFsIGNvZGUgcG9pbnQ7IHNwbGl0IGluIHN1cnJvZ2F0ZSBoYWx2ZXNcbiAgICAgICAgICAgICAgLy8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4RDgwMDtcbiAgICAgICAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4REMwMDtcbiAgICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiBNQVhfU0laRSkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cyk7XG4gICAgICAgICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzID0gZnJvbUNvZGVQb2ludDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2Zyb20tY29kZS1wb2ludC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLyogVGhlIGJ1bGsgb2YgdGhpcyBjb2RlIGRlcml2ZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZG1vc2Nyb3AvZm9sZC1jYXNlXG5CdXQgaW4gYWRkaXRpb24gdG8gY2FzZS1mb2xkaW5nLCB3ZSBhbHNvIG5vcm1hbGl6ZSB3aGl0ZXNwYWNlLlxuXG5mb2xkLWNhc2UgaXMgQ29weXJpZ2h0IE1hdGhpYXMgQnluZW5zIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG5OT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG5MSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG5PRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbldJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLyplc2xpbnQtZGlzYWJsZSAga2V5LXNwYWNpbmcsIGNvbW1hLXNwYWNpbmcgKi9cblxudmFyIHJlZ2V4ID0gL1sgXFx0XFxyXFxuXSt8W0EtWlxceEI1XFx4QzAtXFx4RDZcXHhEOC1cXHhERlxcdTAxMDBcXHUwMTAyXFx1MDEwNFxcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMTBFXFx1MDExMFxcdTAxMTJcXHUwMTE0XFx1MDExNlxcdTAxMThcXHUwMTFBXFx1MDExQ1xcdTAxMUVcXHUwMTIwXFx1MDEyMlxcdTAxMjRcXHUwMTI2XFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEyRVxcdTAxMzBcXHUwMTMyXFx1MDEzNFxcdTAxMzZcXHUwMTM5XFx1MDEzQlxcdTAxM0RcXHUwMTNGXFx1MDE0MVxcdTAxNDNcXHUwMTQ1XFx1MDE0N1xcdTAxNDlcXHUwMTRBXFx1MDE0Q1xcdTAxNEVcXHUwMTUwXFx1MDE1MlxcdTAxNTRcXHUwMTU2XFx1MDE1OFxcdTAxNUFcXHUwMTVDXFx1MDE1RVxcdTAxNjBcXHUwMTYyXFx1MDE2NFxcdTAxNjZcXHUwMTY4XFx1MDE2QVxcdTAxNkNcXHUwMTZFXFx1MDE3MFxcdTAxNzJcXHUwMTc0XFx1MDE3NlxcdTAxNzhcXHUwMTc5XFx1MDE3QlxcdTAxN0RcXHUwMTdGXFx1MDE4MVxcdTAxODJcXHUwMTg0XFx1MDE4NlxcdTAxODdcXHUwMTg5LVxcdTAxOEJcXHUwMThFLVxcdTAxOTFcXHUwMTkzXFx1MDE5NFxcdTAxOTYtXFx1MDE5OFxcdTAxOUNcXHUwMTlEXFx1MDE5RlxcdTAxQTBcXHUwMUEyXFx1MDFBNFxcdTAxQTZcXHUwMUE3XFx1MDFBOVxcdTAxQUNcXHUwMUFFXFx1MDFBRlxcdTAxQjEtXFx1MDFCM1xcdTAxQjVcXHUwMUI3XFx1MDFCOFxcdTAxQkNcXHUwMUM0XFx1MDFDNVxcdTAxQzdcXHUwMUM4XFx1MDFDQVxcdTAxQ0JcXHUwMUNEXFx1MDFDRlxcdTAxRDFcXHUwMUQzXFx1MDFENVxcdTAxRDdcXHUwMUQ5XFx1MDFEQlxcdTAxREVcXHUwMUUwXFx1MDFFMlxcdTAxRTRcXHUwMUU2XFx1MDFFOFxcdTAxRUFcXHUwMUVDXFx1MDFFRVxcdTAxRjAtXFx1MDFGMlxcdTAxRjRcXHUwMUY2LVxcdTAxRjhcXHUwMUZBXFx1MDFGQ1xcdTAxRkVcXHUwMjAwXFx1MDIwMlxcdTAyMDRcXHUwMjA2XFx1MDIwOFxcdTAyMEFcXHUwMjBDXFx1MDIwRVxcdTAyMTBcXHUwMjEyXFx1MDIxNFxcdTAyMTZcXHUwMjE4XFx1MDIxQVxcdTAyMUNcXHUwMjFFXFx1MDIyMFxcdTAyMjJcXHUwMjI0XFx1MDIyNlxcdTAyMjhcXHUwMjJBXFx1MDIyQ1xcdTAyMkVcXHUwMjMwXFx1MDIzMlxcdTAyM0FcXHUwMjNCXFx1MDIzRFxcdTAyM0VcXHUwMjQxXFx1MDI0My1cXHUwMjQ2XFx1MDI0OFxcdTAyNEFcXHUwMjRDXFx1MDI0RVxcdTAzNDVcXHUwMzcwXFx1MDM3MlxcdTAzNzZcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzQUJcXHUwM0IwXFx1MDNDMlxcdTAzQ0YtXFx1MDNEMVxcdTAzRDVcXHUwM0Q2XFx1MDNEOFxcdTAzREFcXHUwM0RDXFx1MDNERVxcdTAzRTBcXHUwM0UyXFx1MDNFNFxcdTAzRTZcXHUwM0U4XFx1MDNFQVxcdTAzRUNcXHUwM0VFXFx1MDNGMFxcdTAzRjFcXHUwM0Y0XFx1MDNGNVxcdTAzRjdcXHUwM0Y5XFx1MDNGQVxcdTAzRkQtXFx1MDQyRlxcdTA0NjBcXHUwNDYyXFx1MDQ2NFxcdTA0NjZcXHUwNDY4XFx1MDQ2QVxcdTA0NkNcXHUwNDZFXFx1MDQ3MFxcdTA0NzJcXHUwNDc0XFx1MDQ3NlxcdTA0NzhcXHUwNDdBXFx1MDQ3Q1xcdTA0N0VcXHUwNDgwXFx1MDQ4QVxcdTA0OENcXHUwNDhFXFx1MDQ5MFxcdTA0OTJcXHUwNDk0XFx1MDQ5NlxcdTA0OThcXHUwNDlBXFx1MDQ5Q1xcdTA0OUVcXHUwNEEwXFx1MDRBMlxcdTA0QTRcXHUwNEE2XFx1MDRBOFxcdTA0QUFcXHUwNEFDXFx1MDRBRVxcdTA0QjBcXHUwNEIyXFx1MDRCNFxcdTA0QjZcXHUwNEI4XFx1MDRCQVxcdTA0QkNcXHUwNEJFXFx1MDRDMFxcdTA0QzFcXHUwNEMzXFx1MDRDNVxcdTA0QzdcXHUwNEM5XFx1MDRDQlxcdTA0Q0RcXHUwNEQwXFx1MDREMlxcdTA0RDRcXHUwNEQ2XFx1MDREOFxcdTA0REFcXHUwNERDXFx1MDRERVxcdTA0RTBcXHUwNEUyXFx1MDRFNFxcdTA0RTZcXHUwNEU4XFx1MDRFQVxcdTA0RUNcXHUwNEVFXFx1MDRGMFxcdTA0RjJcXHUwNEY0XFx1MDRGNlxcdTA0RjhcXHUwNEZBXFx1MDRGQ1xcdTA0RkVcXHUwNTAwXFx1MDUwMlxcdTA1MDRcXHUwNTA2XFx1MDUwOFxcdTA1MEFcXHUwNTBDXFx1MDUwRVxcdTA1MTBcXHUwNTEyXFx1MDUxNFxcdTA1MTZcXHUwNTE4XFx1MDUxQVxcdTA1MUNcXHUwNTFFXFx1MDUyMFxcdTA1MjJcXHUwNTI0XFx1MDUyNlxcdTA1MjhcXHUwNTJBXFx1MDUyQ1xcdTA1MkVcXHUwNTMxLVxcdTA1NTZcXHUwNTg3XFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxRTAwXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MUUwOFxcdTFFMEFcXHUxRTBDXFx1MUUwRVxcdTFFMTBcXHUxRTEyXFx1MUUxNFxcdTFFMTZcXHUxRTE4XFx1MUUxQVxcdTFFMUNcXHUxRTFFXFx1MUUyMFxcdTFFMjJcXHUxRTI0XFx1MUUyNlxcdTFFMjhcXHUxRTJBXFx1MUUyQ1xcdTFFMkVcXHUxRTMwXFx1MUUzMlxcdTFFMzRcXHUxRTM2XFx1MUUzOFxcdTFFM0FcXHUxRTNDXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MUU0NFxcdTFFNDZcXHUxRTQ4XFx1MUU0QVxcdTFFNENcXHUxRTRFXFx1MUU1MFxcdTFFNTJcXHUxRTU0XFx1MUU1NlxcdTFFNThcXHUxRTVBXFx1MUU1Q1xcdTFFNUVcXHUxRTYwXFx1MUU2MlxcdTFFNjRcXHUxRTY2XFx1MUU2OFxcdTFFNkFcXHUxRTZDXFx1MUU2RVxcdTFFNzBcXHUxRTcyXFx1MUU3NFxcdTFFNzZcXHUxRTc4XFx1MUU3QVxcdTFFN0NcXHUxRTdFXFx1MUU4MFxcdTFFODJcXHUxRTg0XFx1MUU4NlxcdTFFODhcXHUxRThBXFx1MUU4Q1xcdTFFOEVcXHUxRTkwXFx1MUU5MlxcdTFFOTRcXHUxRTk2LVxcdTFFOUJcXHUxRTlFXFx1MUVBMFxcdTFFQTJcXHUxRUE0XFx1MUVBNlxcdTFFQThcXHUxRUFBXFx1MUVBQ1xcdTFFQUVcXHUxRUIwXFx1MUVCMlxcdTFFQjRcXHUxRUI2XFx1MUVCOFxcdTFFQkFcXHUxRUJDXFx1MUVCRVxcdTFFQzBcXHUxRUMyXFx1MUVDNFxcdTFFQzZcXHUxRUM4XFx1MUVDQVxcdTFFQ0NcXHUxRUNFXFx1MUVEMFxcdTFFRDJcXHUxRUQ0XFx1MUVENlxcdTFFRDhcXHUxRURBXFx1MUVEQ1xcdTFFREVcXHUxRUUwXFx1MUVFMlxcdTFFRTRcXHUxRUU2XFx1MUVFOFxcdTFFRUFcXHUxRUVDXFx1MUVFRVxcdTFFRjBcXHUxRUYyXFx1MUVGNFxcdTFFRjZcXHUxRUY4XFx1MUVGQVxcdTFFRkNcXHUxRUZFXFx1MUYwOC1cXHUxRjBGXFx1MUYxOC1cXHUxRjFEXFx1MUYyOC1cXHUxRjJGXFx1MUYzOC1cXHUxRjNGXFx1MUY0OC1cXHUxRjREXFx1MUY1MFxcdTFGNTJcXHUxRjU0XFx1MUY1NlxcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUZcXHUxRjY4LVxcdTFGNkZcXHUxRjgwLVxcdTFGQUZcXHUxRkIyLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMlxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUyLVxcdTFGRTRcXHUxRkU2LVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMTI2XFx1MjEyQVxcdTIxMkJcXHUyMTMyXFx1MjE2MC1cXHUyMTZGXFx1MjE4M1xcdTI0QjYtXFx1MjRDRlxcdTJDMDAtXFx1MkMyRVxcdTJDNjBcXHUyQzYyLVxcdTJDNjRcXHUyQzY3XFx1MkM2OVxcdTJDNkJcXHUyQzZELVxcdTJDNzBcXHUyQzcyXFx1MkM3NVxcdTJDN0UtXFx1MkM4MFxcdTJDODJcXHUyQzg0XFx1MkM4NlxcdTJDODhcXHUyQzhBXFx1MkM4Q1xcdTJDOEVcXHUyQzkwXFx1MkM5MlxcdTJDOTRcXHUyQzk2XFx1MkM5OFxcdTJDOUFcXHUyQzlDXFx1MkM5RVxcdTJDQTBcXHUyQ0EyXFx1MkNBNFxcdTJDQTZcXHUyQ0E4XFx1MkNBQVxcdTJDQUNcXHUyQ0FFXFx1MkNCMFxcdTJDQjJcXHUyQ0I0XFx1MkNCNlxcdTJDQjhcXHUyQ0JBXFx1MkNCQ1xcdTJDQkVcXHUyQ0MwXFx1MkNDMlxcdTJDQzRcXHUyQ0M2XFx1MkNDOFxcdTJDQ0FcXHUyQ0NDXFx1MkNDRVxcdTJDRDBcXHUyQ0QyXFx1MkNENFxcdTJDRDZcXHUyQ0Q4XFx1MkNEQVxcdTJDRENcXHUyQ0RFXFx1MkNFMFxcdTJDRTJcXHUyQ0VCXFx1MkNFRFxcdTJDRjJcXHVBNjQwXFx1QTY0MlxcdUE2NDRcXHVBNjQ2XFx1QTY0OFxcdUE2NEFcXHVBNjRDXFx1QTY0RVxcdUE2NTBcXHVBNjUyXFx1QTY1NFxcdUE2NTZcXHVBNjU4XFx1QTY1QVxcdUE2NUNcXHVBNjVFXFx1QTY2MFxcdUE2NjJcXHVBNjY0XFx1QTY2NlxcdUE2NjhcXHVBNjZBXFx1QTY2Q1xcdUE2ODBcXHVBNjgyXFx1QTY4NFxcdUE2ODZcXHVBNjg4XFx1QTY4QVxcdUE2OENcXHVBNjhFXFx1QTY5MFxcdUE2OTJcXHVBNjk0XFx1QTY5NlxcdUE2OThcXHVBNjlBXFx1QTcyMlxcdUE3MjRcXHVBNzI2XFx1QTcyOFxcdUE3MkFcXHVBNzJDXFx1QTcyRVxcdUE3MzJcXHVBNzM0XFx1QTczNlxcdUE3MzhcXHVBNzNBXFx1QTczQ1xcdUE3M0VcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBNzQ2XFx1QTc0OFxcdUE3NEFcXHVBNzRDXFx1QTc0RVxcdUE3NTBcXHVBNzUyXFx1QTc1NFxcdUE3NTZcXHVBNzU4XFx1QTc1QVxcdUE3NUNcXHVBNzVFXFx1QTc2MFxcdUE3NjJcXHVBNzY0XFx1QTc2NlxcdUE3NjhcXHVBNzZBXFx1QTc2Q1xcdUE3NkVcXHVBNzc5XFx1QTc3QlxcdUE3N0RcXHVBNzdFXFx1QTc4MFxcdUE3ODJcXHVBNzg0XFx1QTc4NlxcdUE3OEJcXHVBNzhEXFx1QTc5MFxcdUE3OTJcXHVBNzk2XFx1QTc5OFxcdUE3OUFcXHVBNzlDXFx1QTc5RVxcdUE3QTBcXHVBN0EyXFx1QTdBNFxcdUE3QTZcXHVBN0E4XFx1QTdBQS1cXHVBN0FEXFx1QTdCMFxcdUE3QjFcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGRjIxLVxcdUZGM0FdfFxcdUQ4MDFbXFx1REMwMC1cXHVEQzI3XXxcXHVEODA2W1xcdURDQTAtXFx1RENCRl0vZztcblxudmFyIG1hcCA9IHsnQSc6J2EnLCdCJzonYicsJ0MnOidjJywnRCc6J2QnLCdFJzonZScsJ0YnOidmJywnRyc6J2cnLCdIJzonaCcsJ0knOidpJywnSic6J2onLCdLJzonaycsJ0wnOidsJywnTSc6J20nLCdOJzonbicsJ08nOidvJywnUCc6J3AnLCdRJzoncScsJ1InOidyJywnUyc6J3MnLCdUJzondCcsJ1UnOid1JywnVic6J3YnLCdXJzondycsJ1gnOid4JywnWSc6J3knLCdaJzoneicsJ1xceEI1JzonXFx1MDNCQycsJ1xceEMwJzonXFx4RTAnLCdcXHhDMSc6J1xceEUxJywnXFx4QzInOidcXHhFMicsJ1xceEMzJzonXFx4RTMnLCdcXHhDNCc6J1xceEU0JywnXFx4QzUnOidcXHhFNScsJ1xceEM2JzonXFx4RTYnLCdcXHhDNyc6J1xceEU3JywnXFx4QzgnOidcXHhFOCcsJ1xceEM5JzonXFx4RTknLCdcXHhDQSc6J1xceEVBJywnXFx4Q0InOidcXHhFQicsJ1xceENDJzonXFx4RUMnLCdcXHhDRCc6J1xceEVEJywnXFx4Q0UnOidcXHhFRScsJ1xceENGJzonXFx4RUYnLCdcXHhEMCc6J1xceEYwJywnXFx4RDEnOidcXHhGMScsJ1xceEQyJzonXFx4RjInLCdcXHhEMyc6J1xceEYzJywnXFx4RDQnOidcXHhGNCcsJ1xceEQ1JzonXFx4RjUnLCdcXHhENic6J1xceEY2JywnXFx4RDgnOidcXHhGOCcsJ1xceEQ5JzonXFx4RjknLCdcXHhEQSc6J1xceEZBJywnXFx4REInOidcXHhGQicsJ1xceERDJzonXFx4RkMnLCdcXHhERCc6J1xceEZEJywnXFx4REUnOidcXHhGRScsJ1xcdTAxMDAnOidcXHUwMTAxJywnXFx1MDEwMic6J1xcdTAxMDMnLCdcXHUwMTA0JzonXFx1MDEwNScsJ1xcdTAxMDYnOidcXHUwMTA3JywnXFx1MDEwOCc6J1xcdTAxMDknLCdcXHUwMTBBJzonXFx1MDEwQicsJ1xcdTAxMEMnOidcXHUwMTBEJywnXFx1MDEwRSc6J1xcdTAxMEYnLCdcXHUwMTEwJzonXFx1MDExMScsJ1xcdTAxMTInOidcXHUwMTEzJywnXFx1MDExNCc6J1xcdTAxMTUnLCdcXHUwMTE2JzonXFx1MDExNycsJ1xcdTAxMTgnOidcXHUwMTE5JywnXFx1MDExQSc6J1xcdTAxMUInLCdcXHUwMTFDJzonXFx1MDExRCcsJ1xcdTAxMUUnOidcXHUwMTFGJywnXFx1MDEyMCc6J1xcdTAxMjEnLCdcXHUwMTIyJzonXFx1MDEyMycsJ1xcdTAxMjQnOidcXHUwMTI1JywnXFx1MDEyNic6J1xcdTAxMjcnLCdcXHUwMTI4JzonXFx1MDEyOScsJ1xcdTAxMkEnOidcXHUwMTJCJywnXFx1MDEyQyc6J1xcdTAxMkQnLCdcXHUwMTJFJzonXFx1MDEyRicsJ1xcdTAxMzInOidcXHUwMTMzJywnXFx1MDEzNCc6J1xcdTAxMzUnLCdcXHUwMTM2JzonXFx1MDEzNycsJ1xcdTAxMzknOidcXHUwMTNBJywnXFx1MDEzQic6J1xcdTAxM0MnLCdcXHUwMTNEJzonXFx1MDEzRScsJ1xcdTAxM0YnOidcXHUwMTQwJywnXFx1MDE0MSc6J1xcdTAxNDInLCdcXHUwMTQzJzonXFx1MDE0NCcsJ1xcdTAxNDUnOidcXHUwMTQ2JywnXFx1MDE0Nyc6J1xcdTAxNDgnLCdcXHUwMTRBJzonXFx1MDE0QicsJ1xcdTAxNEMnOidcXHUwMTREJywnXFx1MDE0RSc6J1xcdTAxNEYnLCdcXHUwMTUwJzonXFx1MDE1MScsJ1xcdTAxNTInOidcXHUwMTUzJywnXFx1MDE1NCc6J1xcdTAxNTUnLCdcXHUwMTU2JzonXFx1MDE1NycsJ1xcdTAxNTgnOidcXHUwMTU5JywnXFx1MDE1QSc6J1xcdTAxNUInLCdcXHUwMTVDJzonXFx1MDE1RCcsJ1xcdTAxNUUnOidcXHUwMTVGJywnXFx1MDE2MCc6J1xcdTAxNjEnLCdcXHUwMTYyJzonXFx1MDE2MycsJ1xcdTAxNjQnOidcXHUwMTY1JywnXFx1MDE2Nic6J1xcdTAxNjcnLCdcXHUwMTY4JzonXFx1MDE2OScsJ1xcdTAxNkEnOidcXHUwMTZCJywnXFx1MDE2Qyc6J1xcdTAxNkQnLCdcXHUwMTZFJzonXFx1MDE2RicsJ1xcdTAxNzAnOidcXHUwMTcxJywnXFx1MDE3Mic6J1xcdTAxNzMnLCdcXHUwMTc0JzonXFx1MDE3NScsJ1xcdTAxNzYnOidcXHUwMTc3JywnXFx1MDE3OCc6J1xceEZGJywnXFx1MDE3OSc6J1xcdTAxN0EnLCdcXHUwMTdCJzonXFx1MDE3QycsJ1xcdTAxN0QnOidcXHUwMTdFJywnXFx1MDE3Ric6J3MnLCdcXHUwMTgxJzonXFx1MDI1MycsJ1xcdTAxODInOidcXHUwMTgzJywnXFx1MDE4NCc6J1xcdTAxODUnLCdcXHUwMTg2JzonXFx1MDI1NCcsJ1xcdTAxODcnOidcXHUwMTg4JywnXFx1MDE4OSc6J1xcdTAyNTYnLCdcXHUwMThBJzonXFx1MDI1NycsJ1xcdTAxOEInOidcXHUwMThDJywnXFx1MDE4RSc6J1xcdTAxREQnLCdcXHUwMThGJzonXFx1MDI1OScsJ1xcdTAxOTAnOidcXHUwMjVCJywnXFx1MDE5MSc6J1xcdTAxOTInLCdcXHUwMTkzJzonXFx1MDI2MCcsJ1xcdTAxOTQnOidcXHUwMjYzJywnXFx1MDE5Nic6J1xcdTAyNjknLCdcXHUwMTk3JzonXFx1MDI2OCcsJ1xcdTAxOTgnOidcXHUwMTk5JywnXFx1MDE5Qyc6J1xcdTAyNkYnLCdcXHUwMTlEJzonXFx1MDI3MicsJ1xcdTAxOUYnOidcXHUwMjc1JywnXFx1MDFBMCc6J1xcdTAxQTEnLCdcXHUwMUEyJzonXFx1MDFBMycsJ1xcdTAxQTQnOidcXHUwMUE1JywnXFx1MDFBNic6J1xcdTAyODAnLCdcXHUwMUE3JzonXFx1MDFBOCcsJ1xcdTAxQTknOidcXHUwMjgzJywnXFx1MDFBQyc6J1xcdTAxQUQnLCdcXHUwMUFFJzonXFx1MDI4OCcsJ1xcdTAxQUYnOidcXHUwMUIwJywnXFx1MDFCMSc6J1xcdTAyOEEnLCdcXHUwMUIyJzonXFx1MDI4QicsJ1xcdTAxQjMnOidcXHUwMUI0JywnXFx1MDFCNSc6J1xcdTAxQjYnLCdcXHUwMUI3JzonXFx1MDI5MicsJ1xcdTAxQjgnOidcXHUwMUI5JywnXFx1MDFCQyc6J1xcdTAxQkQnLCdcXHUwMUM0JzonXFx1MDFDNicsJ1xcdTAxQzUnOidcXHUwMUM2JywnXFx1MDFDNyc6J1xcdTAxQzknLCdcXHUwMUM4JzonXFx1MDFDOScsJ1xcdTAxQ0EnOidcXHUwMUNDJywnXFx1MDFDQic6J1xcdTAxQ0MnLCdcXHUwMUNEJzonXFx1MDFDRScsJ1xcdTAxQ0YnOidcXHUwMUQwJywnXFx1MDFEMSc6J1xcdTAxRDInLCdcXHUwMUQzJzonXFx1MDFENCcsJ1xcdTAxRDUnOidcXHUwMUQ2JywnXFx1MDFENyc6J1xcdTAxRDgnLCdcXHUwMUQ5JzonXFx1MDFEQScsJ1xcdTAxREInOidcXHUwMURDJywnXFx1MDFERSc6J1xcdTAxREYnLCdcXHUwMUUwJzonXFx1MDFFMScsJ1xcdTAxRTInOidcXHUwMUUzJywnXFx1MDFFNCc6J1xcdTAxRTUnLCdcXHUwMUU2JzonXFx1MDFFNycsJ1xcdTAxRTgnOidcXHUwMUU5JywnXFx1MDFFQSc6J1xcdTAxRUInLCdcXHUwMUVDJzonXFx1MDFFRCcsJ1xcdTAxRUUnOidcXHUwMUVGJywnXFx1MDFGMSc6J1xcdTAxRjMnLCdcXHUwMUYyJzonXFx1MDFGMycsJ1xcdTAxRjQnOidcXHUwMUY1JywnXFx1MDFGNic6J1xcdTAxOTUnLCdcXHUwMUY3JzonXFx1MDFCRicsJ1xcdTAxRjgnOidcXHUwMUY5JywnXFx1MDFGQSc6J1xcdTAxRkInLCdcXHUwMUZDJzonXFx1MDFGRCcsJ1xcdTAxRkUnOidcXHUwMUZGJywnXFx1MDIwMCc6J1xcdTAyMDEnLCdcXHUwMjAyJzonXFx1MDIwMycsJ1xcdTAyMDQnOidcXHUwMjA1JywnXFx1MDIwNic6J1xcdTAyMDcnLCdcXHUwMjA4JzonXFx1MDIwOScsJ1xcdTAyMEEnOidcXHUwMjBCJywnXFx1MDIwQyc6J1xcdTAyMEQnLCdcXHUwMjBFJzonXFx1MDIwRicsJ1xcdTAyMTAnOidcXHUwMjExJywnXFx1MDIxMic6J1xcdTAyMTMnLCdcXHUwMjE0JzonXFx1MDIxNScsJ1xcdTAyMTYnOidcXHUwMjE3JywnXFx1MDIxOCc6J1xcdTAyMTknLCdcXHUwMjFBJzonXFx1MDIxQicsJ1xcdTAyMUMnOidcXHUwMjFEJywnXFx1MDIxRSc6J1xcdTAyMUYnLCdcXHUwMjIwJzonXFx1MDE5RScsJ1xcdTAyMjInOidcXHUwMjIzJywnXFx1MDIyNCc6J1xcdTAyMjUnLCdcXHUwMjI2JzonXFx1MDIyNycsJ1xcdTAyMjgnOidcXHUwMjI5JywnXFx1MDIyQSc6J1xcdTAyMkInLCdcXHUwMjJDJzonXFx1MDIyRCcsJ1xcdTAyMkUnOidcXHUwMjJGJywnXFx1MDIzMCc6J1xcdTAyMzEnLCdcXHUwMjMyJzonXFx1MDIzMycsJ1xcdTAyM0EnOidcXHUyQzY1JywnXFx1MDIzQic6J1xcdTAyM0MnLCdcXHUwMjNEJzonXFx1MDE5QScsJ1xcdTAyM0UnOidcXHUyQzY2JywnXFx1MDI0MSc6J1xcdTAyNDInLCdcXHUwMjQzJzonXFx1MDE4MCcsJ1xcdTAyNDQnOidcXHUwMjg5JywnXFx1MDI0NSc6J1xcdTAyOEMnLCdcXHUwMjQ2JzonXFx1MDI0NycsJ1xcdTAyNDgnOidcXHUwMjQ5JywnXFx1MDI0QSc6J1xcdTAyNEInLCdcXHUwMjRDJzonXFx1MDI0RCcsJ1xcdTAyNEUnOidcXHUwMjRGJywnXFx1MDM0NSc6J1xcdTAzQjknLCdcXHUwMzcwJzonXFx1MDM3MScsJ1xcdTAzNzInOidcXHUwMzczJywnXFx1MDM3Nic6J1xcdTAzNzcnLCdcXHUwMzdGJzonXFx1MDNGMycsJ1xcdTAzODYnOidcXHUwM0FDJywnXFx1MDM4OCc6J1xcdTAzQUQnLCdcXHUwMzg5JzonXFx1MDNBRScsJ1xcdTAzOEEnOidcXHUwM0FGJywnXFx1MDM4Qyc6J1xcdTAzQ0MnLCdcXHUwMzhFJzonXFx1MDNDRCcsJ1xcdTAzOEYnOidcXHUwM0NFJywnXFx1MDM5MSc6J1xcdTAzQjEnLCdcXHUwMzkyJzonXFx1MDNCMicsJ1xcdTAzOTMnOidcXHUwM0IzJywnXFx1MDM5NCc6J1xcdTAzQjQnLCdcXHUwMzk1JzonXFx1MDNCNScsJ1xcdTAzOTYnOidcXHUwM0I2JywnXFx1MDM5Nyc6J1xcdTAzQjcnLCdcXHUwMzk4JzonXFx1MDNCOCcsJ1xcdTAzOTknOidcXHUwM0I5JywnXFx1MDM5QSc6J1xcdTAzQkEnLCdcXHUwMzlCJzonXFx1MDNCQicsJ1xcdTAzOUMnOidcXHUwM0JDJywnXFx1MDM5RCc6J1xcdTAzQkQnLCdcXHUwMzlFJzonXFx1MDNCRScsJ1xcdTAzOUYnOidcXHUwM0JGJywnXFx1MDNBMCc6J1xcdTAzQzAnLCdcXHUwM0ExJzonXFx1MDNDMScsJ1xcdTAzQTMnOidcXHUwM0MzJywnXFx1MDNBNCc6J1xcdTAzQzQnLCdcXHUwM0E1JzonXFx1MDNDNScsJ1xcdTAzQTYnOidcXHUwM0M2JywnXFx1MDNBNyc6J1xcdTAzQzcnLCdcXHUwM0E4JzonXFx1MDNDOCcsJ1xcdTAzQTknOidcXHUwM0M5JywnXFx1MDNBQSc6J1xcdTAzQ0EnLCdcXHUwM0FCJzonXFx1MDNDQicsJ1xcdTAzQzInOidcXHUwM0MzJywnXFx1MDNDRic6J1xcdTAzRDcnLCdcXHUwM0QwJzonXFx1MDNCMicsJ1xcdTAzRDEnOidcXHUwM0I4JywnXFx1MDNENSc6J1xcdTAzQzYnLCdcXHUwM0Q2JzonXFx1MDNDMCcsJ1xcdTAzRDgnOidcXHUwM0Q5JywnXFx1MDNEQSc6J1xcdTAzREInLCdcXHUwM0RDJzonXFx1MDNERCcsJ1xcdTAzREUnOidcXHUwM0RGJywnXFx1MDNFMCc6J1xcdTAzRTEnLCdcXHUwM0UyJzonXFx1MDNFMycsJ1xcdTAzRTQnOidcXHUwM0U1JywnXFx1MDNFNic6J1xcdTAzRTcnLCdcXHUwM0U4JzonXFx1MDNFOScsJ1xcdTAzRUEnOidcXHUwM0VCJywnXFx1MDNFQyc6J1xcdTAzRUQnLCdcXHUwM0VFJzonXFx1MDNFRicsJ1xcdTAzRjAnOidcXHUwM0JBJywnXFx1MDNGMSc6J1xcdTAzQzEnLCdcXHUwM0Y0JzonXFx1MDNCOCcsJ1xcdTAzRjUnOidcXHUwM0I1JywnXFx1MDNGNyc6J1xcdTAzRjgnLCdcXHUwM0Y5JzonXFx1MDNGMicsJ1xcdTAzRkEnOidcXHUwM0ZCJywnXFx1MDNGRCc6J1xcdTAzN0InLCdcXHUwM0ZFJzonXFx1MDM3QycsJ1xcdTAzRkYnOidcXHUwMzdEJywnXFx1MDQwMCc6J1xcdTA0NTAnLCdcXHUwNDAxJzonXFx1MDQ1MScsJ1xcdTA0MDInOidcXHUwNDUyJywnXFx1MDQwMyc6J1xcdTA0NTMnLCdcXHUwNDA0JzonXFx1MDQ1NCcsJ1xcdTA0MDUnOidcXHUwNDU1JywnXFx1MDQwNic6J1xcdTA0NTYnLCdcXHUwNDA3JzonXFx1MDQ1NycsJ1xcdTA0MDgnOidcXHUwNDU4JywnXFx1MDQwOSc6J1xcdTA0NTknLCdcXHUwNDBBJzonXFx1MDQ1QScsJ1xcdTA0MEInOidcXHUwNDVCJywnXFx1MDQwQyc6J1xcdTA0NUMnLCdcXHUwNDBEJzonXFx1MDQ1RCcsJ1xcdTA0MEUnOidcXHUwNDVFJywnXFx1MDQwRic6J1xcdTA0NUYnLCdcXHUwNDEwJzonXFx1MDQzMCcsJ1xcdTA0MTEnOidcXHUwNDMxJywnXFx1MDQxMic6J1xcdTA0MzInLCdcXHUwNDEzJzonXFx1MDQzMycsJ1xcdTA0MTQnOidcXHUwNDM0JywnXFx1MDQxNSc6J1xcdTA0MzUnLCdcXHUwNDE2JzonXFx1MDQzNicsJ1xcdTA0MTcnOidcXHUwNDM3JywnXFx1MDQxOCc6J1xcdTA0MzgnLCdcXHUwNDE5JzonXFx1MDQzOScsJ1xcdTA0MUEnOidcXHUwNDNBJywnXFx1MDQxQic6J1xcdTA0M0InLCdcXHUwNDFDJzonXFx1MDQzQycsJ1xcdTA0MUQnOidcXHUwNDNEJywnXFx1MDQxRSc6J1xcdTA0M0UnLCdcXHUwNDFGJzonXFx1MDQzRicsJ1xcdTA0MjAnOidcXHUwNDQwJywnXFx1MDQyMSc6J1xcdTA0NDEnLCdcXHUwNDIyJzonXFx1MDQ0MicsJ1xcdTA0MjMnOidcXHUwNDQzJywnXFx1MDQyNCc6J1xcdTA0NDQnLCdcXHUwNDI1JzonXFx1MDQ0NScsJ1xcdTA0MjYnOidcXHUwNDQ2JywnXFx1MDQyNyc6J1xcdTA0NDcnLCdcXHUwNDI4JzonXFx1MDQ0OCcsJ1xcdTA0MjknOidcXHUwNDQ5JywnXFx1MDQyQSc6J1xcdTA0NEEnLCdcXHUwNDJCJzonXFx1MDQ0QicsJ1xcdTA0MkMnOidcXHUwNDRDJywnXFx1MDQyRCc6J1xcdTA0NEQnLCdcXHUwNDJFJzonXFx1MDQ0RScsJ1xcdTA0MkYnOidcXHUwNDRGJywnXFx1MDQ2MCc6J1xcdTA0NjEnLCdcXHUwNDYyJzonXFx1MDQ2MycsJ1xcdTA0NjQnOidcXHUwNDY1JywnXFx1MDQ2Nic6J1xcdTA0NjcnLCdcXHUwNDY4JzonXFx1MDQ2OScsJ1xcdTA0NkEnOidcXHUwNDZCJywnXFx1MDQ2Qyc6J1xcdTA0NkQnLCdcXHUwNDZFJzonXFx1MDQ2RicsJ1xcdTA0NzAnOidcXHUwNDcxJywnXFx1MDQ3Mic6J1xcdTA0NzMnLCdcXHUwNDc0JzonXFx1MDQ3NScsJ1xcdTA0NzYnOidcXHUwNDc3JywnXFx1MDQ3OCc6J1xcdTA0NzknLCdcXHUwNDdBJzonXFx1MDQ3QicsJ1xcdTA0N0MnOidcXHUwNDdEJywnXFx1MDQ3RSc6J1xcdTA0N0YnLCdcXHUwNDgwJzonXFx1MDQ4MScsJ1xcdTA0OEEnOidcXHUwNDhCJywnXFx1MDQ4Qyc6J1xcdTA0OEQnLCdcXHUwNDhFJzonXFx1MDQ4RicsJ1xcdTA0OTAnOidcXHUwNDkxJywnXFx1MDQ5Mic6J1xcdTA0OTMnLCdcXHUwNDk0JzonXFx1MDQ5NScsJ1xcdTA0OTYnOidcXHUwNDk3JywnXFx1MDQ5OCc6J1xcdTA0OTknLCdcXHUwNDlBJzonXFx1MDQ5QicsJ1xcdTA0OUMnOidcXHUwNDlEJywnXFx1MDQ5RSc6J1xcdTA0OUYnLCdcXHUwNEEwJzonXFx1MDRBMScsJ1xcdTA0QTInOidcXHUwNEEzJywnXFx1MDRBNCc6J1xcdTA0QTUnLCdcXHUwNEE2JzonXFx1MDRBNycsJ1xcdTA0QTgnOidcXHUwNEE5JywnXFx1MDRBQSc6J1xcdTA0QUInLCdcXHUwNEFDJzonXFx1MDRBRCcsJ1xcdTA0QUUnOidcXHUwNEFGJywnXFx1MDRCMCc6J1xcdTA0QjEnLCdcXHUwNEIyJzonXFx1MDRCMycsJ1xcdTA0QjQnOidcXHUwNEI1JywnXFx1MDRCNic6J1xcdTA0QjcnLCdcXHUwNEI4JzonXFx1MDRCOScsJ1xcdTA0QkEnOidcXHUwNEJCJywnXFx1MDRCQyc6J1xcdTA0QkQnLCdcXHUwNEJFJzonXFx1MDRCRicsJ1xcdTA0QzAnOidcXHUwNENGJywnXFx1MDRDMSc6J1xcdTA0QzInLCdcXHUwNEMzJzonXFx1MDRDNCcsJ1xcdTA0QzUnOidcXHUwNEM2JywnXFx1MDRDNyc6J1xcdTA0QzgnLCdcXHUwNEM5JzonXFx1MDRDQScsJ1xcdTA0Q0InOidcXHUwNENDJywnXFx1MDRDRCc6J1xcdTA0Q0UnLCdcXHUwNEQwJzonXFx1MDREMScsJ1xcdTA0RDInOidcXHUwNEQzJywnXFx1MDRENCc6J1xcdTA0RDUnLCdcXHUwNEQ2JzonXFx1MDRENycsJ1xcdTA0RDgnOidcXHUwNEQ5JywnXFx1MDREQSc6J1xcdTA0REInLCdcXHUwNERDJzonXFx1MDRERCcsJ1xcdTA0REUnOidcXHUwNERGJywnXFx1MDRFMCc6J1xcdTA0RTEnLCdcXHUwNEUyJzonXFx1MDRFMycsJ1xcdTA0RTQnOidcXHUwNEU1JywnXFx1MDRFNic6J1xcdTA0RTcnLCdcXHUwNEU4JzonXFx1MDRFOScsJ1xcdTA0RUEnOidcXHUwNEVCJywnXFx1MDRFQyc6J1xcdTA0RUQnLCdcXHUwNEVFJzonXFx1MDRFRicsJ1xcdTA0RjAnOidcXHUwNEYxJywnXFx1MDRGMic6J1xcdTA0RjMnLCdcXHUwNEY0JzonXFx1MDRGNScsJ1xcdTA0RjYnOidcXHUwNEY3JywnXFx1MDRGOCc6J1xcdTA0RjknLCdcXHUwNEZBJzonXFx1MDRGQicsJ1xcdTA0RkMnOidcXHUwNEZEJywnXFx1MDRGRSc6J1xcdTA0RkYnLCdcXHUwNTAwJzonXFx1MDUwMScsJ1xcdTA1MDInOidcXHUwNTAzJywnXFx1MDUwNCc6J1xcdTA1MDUnLCdcXHUwNTA2JzonXFx1MDUwNycsJ1xcdTA1MDgnOidcXHUwNTA5JywnXFx1MDUwQSc6J1xcdTA1MEInLCdcXHUwNTBDJzonXFx1MDUwRCcsJ1xcdTA1MEUnOidcXHUwNTBGJywnXFx1MDUxMCc6J1xcdTA1MTEnLCdcXHUwNTEyJzonXFx1MDUxMycsJ1xcdTA1MTQnOidcXHUwNTE1JywnXFx1MDUxNic6J1xcdTA1MTcnLCdcXHUwNTE4JzonXFx1MDUxOScsJ1xcdTA1MUEnOidcXHUwNTFCJywnXFx1MDUxQyc6J1xcdTA1MUQnLCdcXHUwNTFFJzonXFx1MDUxRicsJ1xcdTA1MjAnOidcXHUwNTIxJywnXFx1MDUyMic6J1xcdTA1MjMnLCdcXHUwNTI0JzonXFx1MDUyNScsJ1xcdTA1MjYnOidcXHUwNTI3JywnXFx1MDUyOCc6J1xcdTA1MjknLCdcXHUwNTJBJzonXFx1MDUyQicsJ1xcdTA1MkMnOidcXHUwNTJEJywnXFx1MDUyRSc6J1xcdTA1MkYnLCdcXHUwNTMxJzonXFx1MDU2MScsJ1xcdTA1MzInOidcXHUwNTYyJywnXFx1MDUzMyc6J1xcdTA1NjMnLCdcXHUwNTM0JzonXFx1MDU2NCcsJ1xcdTA1MzUnOidcXHUwNTY1JywnXFx1MDUzNic6J1xcdTA1NjYnLCdcXHUwNTM3JzonXFx1MDU2NycsJ1xcdTA1MzgnOidcXHUwNTY4JywnXFx1MDUzOSc6J1xcdTA1NjknLCdcXHUwNTNBJzonXFx1MDU2QScsJ1xcdTA1M0InOidcXHUwNTZCJywnXFx1MDUzQyc6J1xcdTA1NkMnLCdcXHUwNTNEJzonXFx1MDU2RCcsJ1xcdTA1M0UnOidcXHUwNTZFJywnXFx1MDUzRic6J1xcdTA1NkYnLCdcXHUwNTQwJzonXFx1MDU3MCcsJ1xcdTA1NDEnOidcXHUwNTcxJywnXFx1MDU0Mic6J1xcdTA1NzInLCdcXHUwNTQzJzonXFx1MDU3MycsJ1xcdTA1NDQnOidcXHUwNTc0JywnXFx1MDU0NSc6J1xcdTA1NzUnLCdcXHUwNTQ2JzonXFx1MDU3NicsJ1xcdTA1NDcnOidcXHUwNTc3JywnXFx1MDU0OCc6J1xcdTA1NzgnLCdcXHUwNTQ5JzonXFx1MDU3OScsJ1xcdTA1NEEnOidcXHUwNTdBJywnXFx1MDU0Qic6J1xcdTA1N0InLCdcXHUwNTRDJzonXFx1MDU3QycsJ1xcdTA1NEQnOidcXHUwNTdEJywnXFx1MDU0RSc6J1xcdTA1N0UnLCdcXHUwNTRGJzonXFx1MDU3RicsJ1xcdTA1NTAnOidcXHUwNTgwJywnXFx1MDU1MSc6J1xcdTA1ODEnLCdcXHUwNTUyJzonXFx1MDU4MicsJ1xcdTA1NTMnOidcXHUwNTgzJywnXFx1MDU1NCc6J1xcdTA1ODQnLCdcXHUwNTU1JzonXFx1MDU4NScsJ1xcdTA1NTYnOidcXHUwNTg2JywnXFx1MTBBMCc6J1xcdTJEMDAnLCdcXHUxMEExJzonXFx1MkQwMScsJ1xcdTEwQTInOidcXHUyRDAyJywnXFx1MTBBMyc6J1xcdTJEMDMnLCdcXHUxMEE0JzonXFx1MkQwNCcsJ1xcdTEwQTUnOidcXHUyRDA1JywnXFx1MTBBNic6J1xcdTJEMDYnLCdcXHUxMEE3JzonXFx1MkQwNycsJ1xcdTEwQTgnOidcXHUyRDA4JywnXFx1MTBBOSc6J1xcdTJEMDknLCdcXHUxMEFBJzonXFx1MkQwQScsJ1xcdTEwQUInOidcXHUyRDBCJywnXFx1MTBBQyc6J1xcdTJEMEMnLCdcXHUxMEFEJzonXFx1MkQwRCcsJ1xcdTEwQUUnOidcXHUyRDBFJywnXFx1MTBBRic6J1xcdTJEMEYnLCdcXHUxMEIwJzonXFx1MkQxMCcsJ1xcdTEwQjEnOidcXHUyRDExJywnXFx1MTBCMic6J1xcdTJEMTInLCdcXHUxMEIzJzonXFx1MkQxMycsJ1xcdTEwQjQnOidcXHUyRDE0JywnXFx1MTBCNSc6J1xcdTJEMTUnLCdcXHUxMEI2JzonXFx1MkQxNicsJ1xcdTEwQjcnOidcXHUyRDE3JywnXFx1MTBCOCc6J1xcdTJEMTgnLCdcXHUxMEI5JzonXFx1MkQxOScsJ1xcdTEwQkEnOidcXHUyRDFBJywnXFx1MTBCQic6J1xcdTJEMUInLCdcXHUxMEJDJzonXFx1MkQxQycsJ1xcdTEwQkQnOidcXHUyRDFEJywnXFx1MTBCRSc6J1xcdTJEMUUnLCdcXHUxMEJGJzonXFx1MkQxRicsJ1xcdTEwQzAnOidcXHUyRDIwJywnXFx1MTBDMSc6J1xcdTJEMjEnLCdcXHUxMEMyJzonXFx1MkQyMicsJ1xcdTEwQzMnOidcXHUyRDIzJywnXFx1MTBDNCc6J1xcdTJEMjQnLCdcXHUxMEM1JzonXFx1MkQyNScsJ1xcdTEwQzcnOidcXHUyRDI3JywnXFx1MTBDRCc6J1xcdTJEMkQnLCdcXHUxRTAwJzonXFx1MUUwMScsJ1xcdTFFMDInOidcXHUxRTAzJywnXFx1MUUwNCc6J1xcdTFFMDUnLCdcXHUxRTA2JzonXFx1MUUwNycsJ1xcdTFFMDgnOidcXHUxRTA5JywnXFx1MUUwQSc6J1xcdTFFMEInLCdcXHUxRTBDJzonXFx1MUUwRCcsJ1xcdTFFMEUnOidcXHUxRTBGJywnXFx1MUUxMCc6J1xcdTFFMTEnLCdcXHUxRTEyJzonXFx1MUUxMycsJ1xcdTFFMTQnOidcXHUxRTE1JywnXFx1MUUxNic6J1xcdTFFMTcnLCdcXHUxRTE4JzonXFx1MUUxOScsJ1xcdTFFMUEnOidcXHUxRTFCJywnXFx1MUUxQyc6J1xcdTFFMUQnLCdcXHUxRTFFJzonXFx1MUUxRicsJ1xcdTFFMjAnOidcXHUxRTIxJywnXFx1MUUyMic6J1xcdTFFMjMnLCdcXHUxRTI0JzonXFx1MUUyNScsJ1xcdTFFMjYnOidcXHUxRTI3JywnXFx1MUUyOCc6J1xcdTFFMjknLCdcXHUxRTJBJzonXFx1MUUyQicsJ1xcdTFFMkMnOidcXHUxRTJEJywnXFx1MUUyRSc6J1xcdTFFMkYnLCdcXHUxRTMwJzonXFx1MUUzMScsJ1xcdTFFMzInOidcXHUxRTMzJywnXFx1MUUzNCc6J1xcdTFFMzUnLCdcXHUxRTM2JzonXFx1MUUzNycsJ1xcdTFFMzgnOidcXHUxRTM5JywnXFx1MUUzQSc6J1xcdTFFM0InLCdcXHUxRTNDJzonXFx1MUUzRCcsJ1xcdTFFM0UnOidcXHUxRTNGJywnXFx1MUU0MCc6J1xcdTFFNDEnLCdcXHUxRTQyJzonXFx1MUU0MycsJ1xcdTFFNDQnOidcXHUxRTQ1JywnXFx1MUU0Nic6J1xcdTFFNDcnLCdcXHUxRTQ4JzonXFx1MUU0OScsJ1xcdTFFNEEnOidcXHUxRTRCJywnXFx1MUU0Qyc6J1xcdTFFNEQnLCdcXHUxRTRFJzonXFx1MUU0RicsJ1xcdTFFNTAnOidcXHUxRTUxJywnXFx1MUU1Mic6J1xcdTFFNTMnLCdcXHUxRTU0JzonXFx1MUU1NScsJ1xcdTFFNTYnOidcXHUxRTU3JywnXFx1MUU1OCc6J1xcdTFFNTknLCdcXHUxRTVBJzonXFx1MUU1QicsJ1xcdTFFNUMnOidcXHUxRTVEJywnXFx1MUU1RSc6J1xcdTFFNUYnLCdcXHUxRTYwJzonXFx1MUU2MScsJ1xcdTFFNjInOidcXHUxRTYzJywnXFx1MUU2NCc6J1xcdTFFNjUnLCdcXHUxRTY2JzonXFx1MUU2NycsJ1xcdTFFNjgnOidcXHUxRTY5JywnXFx1MUU2QSc6J1xcdTFFNkInLCdcXHUxRTZDJzonXFx1MUU2RCcsJ1xcdTFFNkUnOidcXHUxRTZGJywnXFx1MUU3MCc6J1xcdTFFNzEnLCdcXHUxRTcyJzonXFx1MUU3MycsJ1xcdTFFNzQnOidcXHUxRTc1JywnXFx1MUU3Nic6J1xcdTFFNzcnLCdcXHUxRTc4JzonXFx1MUU3OScsJ1xcdTFFN0EnOidcXHUxRTdCJywnXFx1MUU3Qyc6J1xcdTFFN0QnLCdcXHUxRTdFJzonXFx1MUU3RicsJ1xcdTFFODAnOidcXHUxRTgxJywnXFx1MUU4Mic6J1xcdTFFODMnLCdcXHUxRTg0JzonXFx1MUU4NScsJ1xcdTFFODYnOidcXHUxRTg3JywnXFx1MUU4OCc6J1xcdTFFODknLCdcXHUxRThBJzonXFx1MUU4QicsJ1xcdTFFOEMnOidcXHUxRThEJywnXFx1MUU4RSc6J1xcdTFFOEYnLCdcXHUxRTkwJzonXFx1MUU5MScsJ1xcdTFFOTInOidcXHUxRTkzJywnXFx1MUU5NCc6J1xcdTFFOTUnLCdcXHUxRTlCJzonXFx1MUU2MScsJ1xcdTFFQTAnOidcXHUxRUExJywnXFx1MUVBMic6J1xcdTFFQTMnLCdcXHUxRUE0JzonXFx1MUVBNScsJ1xcdTFFQTYnOidcXHUxRUE3JywnXFx1MUVBOCc6J1xcdTFFQTknLCdcXHUxRUFBJzonXFx1MUVBQicsJ1xcdTFFQUMnOidcXHUxRUFEJywnXFx1MUVBRSc6J1xcdTFFQUYnLCdcXHUxRUIwJzonXFx1MUVCMScsJ1xcdTFFQjInOidcXHUxRUIzJywnXFx1MUVCNCc6J1xcdTFFQjUnLCdcXHUxRUI2JzonXFx1MUVCNycsJ1xcdTFFQjgnOidcXHUxRUI5JywnXFx1MUVCQSc6J1xcdTFFQkInLCdcXHUxRUJDJzonXFx1MUVCRCcsJ1xcdTFFQkUnOidcXHUxRUJGJywnXFx1MUVDMCc6J1xcdTFFQzEnLCdcXHUxRUMyJzonXFx1MUVDMycsJ1xcdTFFQzQnOidcXHUxRUM1JywnXFx1MUVDNic6J1xcdTFFQzcnLCdcXHUxRUM4JzonXFx1MUVDOScsJ1xcdTFFQ0EnOidcXHUxRUNCJywnXFx1MUVDQyc6J1xcdTFFQ0QnLCdcXHUxRUNFJzonXFx1MUVDRicsJ1xcdTFFRDAnOidcXHUxRUQxJywnXFx1MUVEMic6J1xcdTFFRDMnLCdcXHUxRUQ0JzonXFx1MUVENScsJ1xcdTFFRDYnOidcXHUxRUQ3JywnXFx1MUVEOCc6J1xcdTFFRDknLCdcXHUxRURBJzonXFx1MUVEQicsJ1xcdTFFREMnOidcXHUxRUREJywnXFx1MUVERSc6J1xcdTFFREYnLCdcXHUxRUUwJzonXFx1MUVFMScsJ1xcdTFFRTInOidcXHUxRUUzJywnXFx1MUVFNCc6J1xcdTFFRTUnLCdcXHUxRUU2JzonXFx1MUVFNycsJ1xcdTFFRTgnOidcXHUxRUU5JywnXFx1MUVFQSc6J1xcdTFFRUInLCdcXHUxRUVDJzonXFx1MUVFRCcsJ1xcdTFFRUUnOidcXHUxRUVGJywnXFx1MUVGMCc6J1xcdTFFRjEnLCdcXHUxRUYyJzonXFx1MUVGMycsJ1xcdTFFRjQnOidcXHUxRUY1JywnXFx1MUVGNic6J1xcdTFFRjcnLCdcXHUxRUY4JzonXFx1MUVGOScsJ1xcdTFFRkEnOidcXHUxRUZCJywnXFx1MUVGQyc6J1xcdTFFRkQnLCdcXHUxRUZFJzonXFx1MUVGRicsJ1xcdTFGMDgnOidcXHUxRjAwJywnXFx1MUYwOSc6J1xcdTFGMDEnLCdcXHUxRjBBJzonXFx1MUYwMicsJ1xcdTFGMEInOidcXHUxRjAzJywnXFx1MUYwQyc6J1xcdTFGMDQnLCdcXHUxRjBEJzonXFx1MUYwNScsJ1xcdTFGMEUnOidcXHUxRjA2JywnXFx1MUYwRic6J1xcdTFGMDcnLCdcXHUxRjE4JzonXFx1MUYxMCcsJ1xcdTFGMTknOidcXHUxRjExJywnXFx1MUYxQSc6J1xcdTFGMTInLCdcXHUxRjFCJzonXFx1MUYxMycsJ1xcdTFGMUMnOidcXHUxRjE0JywnXFx1MUYxRCc6J1xcdTFGMTUnLCdcXHUxRjI4JzonXFx1MUYyMCcsJ1xcdTFGMjknOidcXHUxRjIxJywnXFx1MUYyQSc6J1xcdTFGMjInLCdcXHUxRjJCJzonXFx1MUYyMycsJ1xcdTFGMkMnOidcXHUxRjI0JywnXFx1MUYyRCc6J1xcdTFGMjUnLCdcXHUxRjJFJzonXFx1MUYyNicsJ1xcdTFGMkYnOidcXHUxRjI3JywnXFx1MUYzOCc6J1xcdTFGMzAnLCdcXHUxRjM5JzonXFx1MUYzMScsJ1xcdTFGM0EnOidcXHUxRjMyJywnXFx1MUYzQic6J1xcdTFGMzMnLCdcXHUxRjNDJzonXFx1MUYzNCcsJ1xcdTFGM0QnOidcXHUxRjM1JywnXFx1MUYzRSc6J1xcdTFGMzYnLCdcXHUxRjNGJzonXFx1MUYzNycsJ1xcdTFGNDgnOidcXHUxRjQwJywnXFx1MUY0OSc6J1xcdTFGNDEnLCdcXHUxRjRBJzonXFx1MUY0MicsJ1xcdTFGNEInOidcXHUxRjQzJywnXFx1MUY0Qyc6J1xcdTFGNDQnLCdcXHUxRjREJzonXFx1MUY0NScsJ1xcdTFGNTknOidcXHUxRjUxJywnXFx1MUY1Qic6J1xcdTFGNTMnLCdcXHUxRjVEJzonXFx1MUY1NScsJ1xcdTFGNUYnOidcXHUxRjU3JywnXFx1MUY2OCc6J1xcdTFGNjAnLCdcXHUxRjY5JzonXFx1MUY2MScsJ1xcdTFGNkEnOidcXHUxRjYyJywnXFx1MUY2Qic6J1xcdTFGNjMnLCdcXHUxRjZDJzonXFx1MUY2NCcsJ1xcdTFGNkQnOidcXHUxRjY1JywnXFx1MUY2RSc6J1xcdTFGNjYnLCdcXHUxRjZGJzonXFx1MUY2NycsJ1xcdTFGQjgnOidcXHUxRkIwJywnXFx1MUZCOSc6J1xcdTFGQjEnLCdcXHUxRkJBJzonXFx1MUY3MCcsJ1xcdTFGQkInOidcXHUxRjcxJywnXFx1MUZCRSc6J1xcdTAzQjknLCdcXHUxRkM4JzonXFx1MUY3MicsJ1xcdTFGQzknOidcXHUxRjczJywnXFx1MUZDQSc6J1xcdTFGNzQnLCdcXHUxRkNCJzonXFx1MUY3NScsJ1xcdTFGRDgnOidcXHUxRkQwJywnXFx1MUZEOSc6J1xcdTFGRDEnLCdcXHUxRkRBJzonXFx1MUY3NicsJ1xcdTFGREInOidcXHUxRjc3JywnXFx1MUZFOCc6J1xcdTFGRTAnLCdcXHUxRkU5JzonXFx1MUZFMScsJ1xcdTFGRUEnOidcXHUxRjdBJywnXFx1MUZFQic6J1xcdTFGN0InLCdcXHUxRkVDJzonXFx1MUZFNScsJ1xcdTFGRjgnOidcXHUxRjc4JywnXFx1MUZGOSc6J1xcdTFGNzknLCdcXHUxRkZBJzonXFx1MUY3QycsJ1xcdTFGRkInOidcXHUxRjdEJywnXFx1MjEyNic6J1xcdTAzQzknLCdcXHUyMTJBJzonaycsJ1xcdTIxMkInOidcXHhFNScsJ1xcdTIxMzInOidcXHUyMTRFJywnXFx1MjE2MCc6J1xcdTIxNzAnLCdcXHUyMTYxJzonXFx1MjE3MScsJ1xcdTIxNjInOidcXHUyMTcyJywnXFx1MjE2Myc6J1xcdTIxNzMnLCdcXHUyMTY0JzonXFx1MjE3NCcsJ1xcdTIxNjUnOidcXHUyMTc1JywnXFx1MjE2Nic6J1xcdTIxNzYnLCdcXHUyMTY3JzonXFx1MjE3NycsJ1xcdTIxNjgnOidcXHUyMTc4JywnXFx1MjE2OSc6J1xcdTIxNzknLCdcXHUyMTZBJzonXFx1MjE3QScsJ1xcdTIxNkInOidcXHUyMTdCJywnXFx1MjE2Qyc6J1xcdTIxN0MnLCdcXHUyMTZEJzonXFx1MjE3RCcsJ1xcdTIxNkUnOidcXHUyMTdFJywnXFx1MjE2Ric6J1xcdTIxN0YnLCdcXHUyMTgzJzonXFx1MjE4NCcsJ1xcdTI0QjYnOidcXHUyNEQwJywnXFx1MjRCNyc6J1xcdTI0RDEnLCdcXHUyNEI4JzonXFx1MjREMicsJ1xcdTI0QjknOidcXHUyNEQzJywnXFx1MjRCQSc6J1xcdTI0RDQnLCdcXHUyNEJCJzonXFx1MjRENScsJ1xcdTI0QkMnOidcXHUyNEQ2JywnXFx1MjRCRCc6J1xcdTI0RDcnLCdcXHUyNEJFJzonXFx1MjREOCcsJ1xcdTI0QkYnOidcXHUyNEQ5JywnXFx1MjRDMCc6J1xcdTI0REEnLCdcXHUyNEMxJzonXFx1MjREQicsJ1xcdTI0QzInOidcXHUyNERDJywnXFx1MjRDMyc6J1xcdTI0REQnLCdcXHUyNEM0JzonXFx1MjRERScsJ1xcdTI0QzUnOidcXHUyNERGJywnXFx1MjRDNic6J1xcdTI0RTAnLCdcXHUyNEM3JzonXFx1MjRFMScsJ1xcdTI0QzgnOidcXHUyNEUyJywnXFx1MjRDOSc6J1xcdTI0RTMnLCdcXHUyNENBJzonXFx1MjRFNCcsJ1xcdTI0Q0InOidcXHUyNEU1JywnXFx1MjRDQyc6J1xcdTI0RTYnLCdcXHUyNENEJzonXFx1MjRFNycsJ1xcdTI0Q0UnOidcXHUyNEU4JywnXFx1MjRDRic6J1xcdTI0RTknLCdcXHUyQzAwJzonXFx1MkMzMCcsJ1xcdTJDMDEnOidcXHUyQzMxJywnXFx1MkMwMic6J1xcdTJDMzInLCdcXHUyQzAzJzonXFx1MkMzMycsJ1xcdTJDMDQnOidcXHUyQzM0JywnXFx1MkMwNSc6J1xcdTJDMzUnLCdcXHUyQzA2JzonXFx1MkMzNicsJ1xcdTJDMDcnOidcXHUyQzM3JywnXFx1MkMwOCc6J1xcdTJDMzgnLCdcXHUyQzA5JzonXFx1MkMzOScsJ1xcdTJDMEEnOidcXHUyQzNBJywnXFx1MkMwQic6J1xcdTJDM0InLCdcXHUyQzBDJzonXFx1MkMzQycsJ1xcdTJDMEQnOidcXHUyQzNEJywnXFx1MkMwRSc6J1xcdTJDM0UnLCdcXHUyQzBGJzonXFx1MkMzRicsJ1xcdTJDMTAnOidcXHUyQzQwJywnXFx1MkMxMSc6J1xcdTJDNDEnLCdcXHUyQzEyJzonXFx1MkM0MicsJ1xcdTJDMTMnOidcXHUyQzQzJywnXFx1MkMxNCc6J1xcdTJDNDQnLCdcXHUyQzE1JzonXFx1MkM0NScsJ1xcdTJDMTYnOidcXHUyQzQ2JywnXFx1MkMxNyc6J1xcdTJDNDcnLCdcXHUyQzE4JzonXFx1MkM0OCcsJ1xcdTJDMTknOidcXHUyQzQ5JywnXFx1MkMxQSc6J1xcdTJDNEEnLCdcXHUyQzFCJzonXFx1MkM0QicsJ1xcdTJDMUMnOidcXHUyQzRDJywnXFx1MkMxRCc6J1xcdTJDNEQnLCdcXHUyQzFFJzonXFx1MkM0RScsJ1xcdTJDMUYnOidcXHUyQzRGJywnXFx1MkMyMCc6J1xcdTJDNTAnLCdcXHUyQzIxJzonXFx1MkM1MScsJ1xcdTJDMjInOidcXHUyQzUyJywnXFx1MkMyMyc6J1xcdTJDNTMnLCdcXHUyQzI0JzonXFx1MkM1NCcsJ1xcdTJDMjUnOidcXHUyQzU1JywnXFx1MkMyNic6J1xcdTJDNTYnLCdcXHUyQzI3JzonXFx1MkM1NycsJ1xcdTJDMjgnOidcXHUyQzU4JywnXFx1MkMyOSc6J1xcdTJDNTknLCdcXHUyQzJBJzonXFx1MkM1QScsJ1xcdTJDMkInOidcXHUyQzVCJywnXFx1MkMyQyc6J1xcdTJDNUMnLCdcXHUyQzJEJzonXFx1MkM1RCcsJ1xcdTJDMkUnOidcXHUyQzVFJywnXFx1MkM2MCc6J1xcdTJDNjEnLCdcXHUyQzYyJzonXFx1MDI2QicsJ1xcdTJDNjMnOidcXHUxRDdEJywnXFx1MkM2NCc6J1xcdTAyN0QnLCdcXHUyQzY3JzonXFx1MkM2OCcsJ1xcdTJDNjknOidcXHUyQzZBJywnXFx1MkM2Qic6J1xcdTJDNkMnLCdcXHUyQzZEJzonXFx1MDI1MScsJ1xcdTJDNkUnOidcXHUwMjcxJywnXFx1MkM2Ric6J1xcdTAyNTAnLCdcXHUyQzcwJzonXFx1MDI1MicsJ1xcdTJDNzInOidcXHUyQzczJywnXFx1MkM3NSc6J1xcdTJDNzYnLCdcXHUyQzdFJzonXFx1MDIzRicsJ1xcdTJDN0YnOidcXHUwMjQwJywnXFx1MkM4MCc6J1xcdTJDODEnLCdcXHUyQzgyJzonXFx1MkM4MycsJ1xcdTJDODQnOidcXHUyQzg1JywnXFx1MkM4Nic6J1xcdTJDODcnLCdcXHUyQzg4JzonXFx1MkM4OScsJ1xcdTJDOEEnOidcXHUyQzhCJywnXFx1MkM4Qyc6J1xcdTJDOEQnLCdcXHUyQzhFJzonXFx1MkM4RicsJ1xcdTJDOTAnOidcXHUyQzkxJywnXFx1MkM5Mic6J1xcdTJDOTMnLCdcXHUyQzk0JzonXFx1MkM5NScsJ1xcdTJDOTYnOidcXHUyQzk3JywnXFx1MkM5OCc6J1xcdTJDOTknLCdcXHUyQzlBJzonXFx1MkM5QicsJ1xcdTJDOUMnOidcXHUyQzlEJywnXFx1MkM5RSc6J1xcdTJDOUYnLCdcXHUyQ0EwJzonXFx1MkNBMScsJ1xcdTJDQTInOidcXHUyQ0EzJywnXFx1MkNBNCc6J1xcdTJDQTUnLCdcXHUyQ0E2JzonXFx1MkNBNycsJ1xcdTJDQTgnOidcXHUyQ0E5JywnXFx1MkNBQSc6J1xcdTJDQUInLCdcXHUyQ0FDJzonXFx1MkNBRCcsJ1xcdTJDQUUnOidcXHUyQ0FGJywnXFx1MkNCMCc6J1xcdTJDQjEnLCdcXHUyQ0IyJzonXFx1MkNCMycsJ1xcdTJDQjQnOidcXHUyQ0I1JywnXFx1MkNCNic6J1xcdTJDQjcnLCdcXHUyQ0I4JzonXFx1MkNCOScsJ1xcdTJDQkEnOidcXHUyQ0JCJywnXFx1MkNCQyc6J1xcdTJDQkQnLCdcXHUyQ0JFJzonXFx1MkNCRicsJ1xcdTJDQzAnOidcXHUyQ0MxJywnXFx1MkNDMic6J1xcdTJDQzMnLCdcXHUyQ0M0JzonXFx1MkNDNScsJ1xcdTJDQzYnOidcXHUyQ0M3JywnXFx1MkNDOCc6J1xcdTJDQzknLCdcXHUyQ0NBJzonXFx1MkNDQicsJ1xcdTJDQ0MnOidcXHUyQ0NEJywnXFx1MkNDRSc6J1xcdTJDQ0YnLCdcXHUyQ0QwJzonXFx1MkNEMScsJ1xcdTJDRDInOidcXHUyQ0QzJywnXFx1MkNENCc6J1xcdTJDRDUnLCdcXHUyQ0Q2JzonXFx1MkNENycsJ1xcdTJDRDgnOidcXHUyQ0Q5JywnXFx1MkNEQSc6J1xcdTJDREInLCdcXHUyQ0RDJzonXFx1MkNERCcsJ1xcdTJDREUnOidcXHUyQ0RGJywnXFx1MkNFMCc6J1xcdTJDRTEnLCdcXHUyQ0UyJzonXFx1MkNFMycsJ1xcdTJDRUInOidcXHUyQ0VDJywnXFx1MkNFRCc6J1xcdTJDRUUnLCdcXHUyQ0YyJzonXFx1MkNGMycsJ1xcdUE2NDAnOidcXHVBNjQxJywnXFx1QTY0Mic6J1xcdUE2NDMnLCdcXHVBNjQ0JzonXFx1QTY0NScsJ1xcdUE2NDYnOidcXHVBNjQ3JywnXFx1QTY0OCc6J1xcdUE2NDknLCdcXHVBNjRBJzonXFx1QTY0QicsJ1xcdUE2NEMnOidcXHVBNjREJywnXFx1QTY0RSc6J1xcdUE2NEYnLCdcXHVBNjUwJzonXFx1QTY1MScsJ1xcdUE2NTInOidcXHVBNjUzJywnXFx1QTY1NCc6J1xcdUE2NTUnLCdcXHVBNjU2JzonXFx1QTY1NycsJ1xcdUE2NTgnOidcXHVBNjU5JywnXFx1QTY1QSc6J1xcdUE2NUInLCdcXHVBNjVDJzonXFx1QTY1RCcsJ1xcdUE2NUUnOidcXHVBNjVGJywnXFx1QTY2MCc6J1xcdUE2NjEnLCdcXHVBNjYyJzonXFx1QTY2MycsJ1xcdUE2NjQnOidcXHVBNjY1JywnXFx1QTY2Nic6J1xcdUE2NjcnLCdcXHVBNjY4JzonXFx1QTY2OScsJ1xcdUE2NkEnOidcXHVBNjZCJywnXFx1QTY2Qyc6J1xcdUE2NkQnLCdcXHVBNjgwJzonXFx1QTY4MScsJ1xcdUE2ODInOidcXHVBNjgzJywnXFx1QTY4NCc6J1xcdUE2ODUnLCdcXHVBNjg2JzonXFx1QTY4NycsJ1xcdUE2ODgnOidcXHVBNjg5JywnXFx1QTY4QSc6J1xcdUE2OEInLCdcXHVBNjhDJzonXFx1QTY4RCcsJ1xcdUE2OEUnOidcXHVBNjhGJywnXFx1QTY5MCc6J1xcdUE2OTEnLCdcXHVBNjkyJzonXFx1QTY5MycsJ1xcdUE2OTQnOidcXHVBNjk1JywnXFx1QTY5Nic6J1xcdUE2OTcnLCdcXHVBNjk4JzonXFx1QTY5OScsJ1xcdUE2OUEnOidcXHVBNjlCJywnXFx1QTcyMic6J1xcdUE3MjMnLCdcXHVBNzI0JzonXFx1QTcyNScsJ1xcdUE3MjYnOidcXHVBNzI3JywnXFx1QTcyOCc6J1xcdUE3MjknLCdcXHVBNzJBJzonXFx1QTcyQicsJ1xcdUE3MkMnOidcXHVBNzJEJywnXFx1QTcyRSc6J1xcdUE3MkYnLCdcXHVBNzMyJzonXFx1QTczMycsJ1xcdUE3MzQnOidcXHVBNzM1JywnXFx1QTczNic6J1xcdUE3MzcnLCdcXHVBNzM4JzonXFx1QTczOScsJ1xcdUE3M0EnOidcXHVBNzNCJywnXFx1QTczQyc6J1xcdUE3M0QnLCdcXHVBNzNFJzonXFx1QTczRicsJ1xcdUE3NDAnOidcXHVBNzQxJywnXFx1QTc0Mic6J1xcdUE3NDMnLCdcXHVBNzQ0JzonXFx1QTc0NScsJ1xcdUE3NDYnOidcXHVBNzQ3JywnXFx1QTc0OCc6J1xcdUE3NDknLCdcXHVBNzRBJzonXFx1QTc0QicsJ1xcdUE3NEMnOidcXHVBNzREJywnXFx1QTc0RSc6J1xcdUE3NEYnLCdcXHVBNzUwJzonXFx1QTc1MScsJ1xcdUE3NTInOidcXHVBNzUzJywnXFx1QTc1NCc6J1xcdUE3NTUnLCdcXHVBNzU2JzonXFx1QTc1NycsJ1xcdUE3NTgnOidcXHVBNzU5JywnXFx1QTc1QSc6J1xcdUE3NUInLCdcXHVBNzVDJzonXFx1QTc1RCcsJ1xcdUE3NUUnOidcXHVBNzVGJywnXFx1QTc2MCc6J1xcdUE3NjEnLCdcXHVBNzYyJzonXFx1QTc2MycsJ1xcdUE3NjQnOidcXHVBNzY1JywnXFx1QTc2Nic6J1xcdUE3NjcnLCdcXHVBNzY4JzonXFx1QTc2OScsJ1xcdUE3NkEnOidcXHVBNzZCJywnXFx1QTc2Qyc6J1xcdUE3NkQnLCdcXHVBNzZFJzonXFx1QTc2RicsJ1xcdUE3NzknOidcXHVBNzdBJywnXFx1QTc3Qic6J1xcdUE3N0MnLCdcXHVBNzdEJzonXFx1MUQ3OScsJ1xcdUE3N0UnOidcXHVBNzdGJywnXFx1QTc4MCc6J1xcdUE3ODEnLCdcXHVBNzgyJzonXFx1QTc4MycsJ1xcdUE3ODQnOidcXHVBNzg1JywnXFx1QTc4Nic6J1xcdUE3ODcnLCdcXHVBNzhCJzonXFx1QTc4QycsJ1xcdUE3OEQnOidcXHUwMjY1JywnXFx1QTc5MCc6J1xcdUE3OTEnLCdcXHVBNzkyJzonXFx1QTc5MycsJ1xcdUE3OTYnOidcXHVBNzk3JywnXFx1QTc5OCc6J1xcdUE3OTknLCdcXHVBNzlBJzonXFx1QTc5QicsJ1xcdUE3OUMnOidcXHVBNzlEJywnXFx1QTc5RSc6J1xcdUE3OUYnLCdcXHVBN0EwJzonXFx1QTdBMScsJ1xcdUE3QTInOidcXHVBN0EzJywnXFx1QTdBNCc6J1xcdUE3QTUnLCdcXHVBN0E2JzonXFx1QTdBNycsJ1xcdUE3QTgnOidcXHVBN0E5JywnXFx1QTdBQSc6J1xcdTAyNjYnLCdcXHVBN0FCJzonXFx1MDI1QycsJ1xcdUE3QUMnOidcXHUwMjYxJywnXFx1QTdBRCc6J1xcdTAyNkMnLCdcXHVBN0IwJzonXFx1MDI5RScsJ1xcdUE3QjEnOidcXHUwMjg3JywnXFx1RkYyMSc6J1xcdUZGNDEnLCdcXHVGRjIyJzonXFx1RkY0MicsJ1xcdUZGMjMnOidcXHVGRjQzJywnXFx1RkYyNCc6J1xcdUZGNDQnLCdcXHVGRjI1JzonXFx1RkY0NScsJ1xcdUZGMjYnOidcXHVGRjQ2JywnXFx1RkYyNyc6J1xcdUZGNDcnLCdcXHVGRjI4JzonXFx1RkY0OCcsJ1xcdUZGMjknOidcXHVGRjQ5JywnXFx1RkYyQSc6J1xcdUZGNEEnLCdcXHVGRjJCJzonXFx1RkY0QicsJ1xcdUZGMkMnOidcXHVGRjRDJywnXFx1RkYyRCc6J1xcdUZGNEQnLCdcXHVGRjJFJzonXFx1RkY0RScsJ1xcdUZGMkYnOidcXHVGRjRGJywnXFx1RkYzMCc6J1xcdUZGNTAnLCdcXHVGRjMxJzonXFx1RkY1MScsJ1xcdUZGMzInOidcXHVGRjUyJywnXFx1RkYzMyc6J1xcdUZGNTMnLCdcXHVGRjM0JzonXFx1RkY1NCcsJ1xcdUZGMzUnOidcXHVGRjU1JywnXFx1RkYzNic6J1xcdUZGNTYnLCdcXHVGRjM3JzonXFx1RkY1NycsJ1xcdUZGMzgnOidcXHVGRjU4JywnXFx1RkYzOSc6J1xcdUZGNTknLCdcXHVGRjNBJzonXFx1RkY1QScsJ1xcdUQ4MDFcXHVEQzAwJzonXFx1RDgwMVxcdURDMjgnLCdcXHVEODAxXFx1REMwMSc6J1xcdUQ4MDFcXHVEQzI5JywnXFx1RDgwMVxcdURDMDInOidcXHVEODAxXFx1REMyQScsJ1xcdUQ4MDFcXHVEQzAzJzonXFx1RDgwMVxcdURDMkInLCdcXHVEODAxXFx1REMwNCc6J1xcdUQ4MDFcXHVEQzJDJywnXFx1RDgwMVxcdURDMDUnOidcXHVEODAxXFx1REMyRCcsJ1xcdUQ4MDFcXHVEQzA2JzonXFx1RDgwMVxcdURDMkUnLCdcXHVEODAxXFx1REMwNyc6J1xcdUQ4MDFcXHVEQzJGJywnXFx1RDgwMVxcdURDMDgnOidcXHVEODAxXFx1REMzMCcsJ1xcdUQ4MDFcXHVEQzA5JzonXFx1RDgwMVxcdURDMzEnLCdcXHVEODAxXFx1REMwQSc6J1xcdUQ4MDFcXHVEQzMyJywnXFx1RDgwMVxcdURDMEInOidcXHVEODAxXFx1REMzMycsJ1xcdUQ4MDFcXHVEQzBDJzonXFx1RDgwMVxcdURDMzQnLCdcXHVEODAxXFx1REMwRCc6J1xcdUQ4MDFcXHVEQzM1JywnXFx1RDgwMVxcdURDMEUnOidcXHVEODAxXFx1REMzNicsJ1xcdUQ4MDFcXHVEQzBGJzonXFx1RDgwMVxcdURDMzcnLCdcXHVEODAxXFx1REMxMCc6J1xcdUQ4MDFcXHVEQzM4JywnXFx1RDgwMVxcdURDMTEnOidcXHVEODAxXFx1REMzOScsJ1xcdUQ4MDFcXHVEQzEyJzonXFx1RDgwMVxcdURDM0EnLCdcXHVEODAxXFx1REMxMyc6J1xcdUQ4MDFcXHVEQzNCJywnXFx1RDgwMVxcdURDMTQnOidcXHVEODAxXFx1REMzQycsJ1xcdUQ4MDFcXHVEQzE1JzonXFx1RDgwMVxcdURDM0QnLCdcXHVEODAxXFx1REMxNic6J1xcdUQ4MDFcXHVEQzNFJywnXFx1RDgwMVxcdURDMTcnOidcXHVEODAxXFx1REMzRicsJ1xcdUQ4MDFcXHVEQzE4JzonXFx1RDgwMVxcdURDNDAnLCdcXHVEODAxXFx1REMxOSc6J1xcdUQ4MDFcXHVEQzQxJywnXFx1RDgwMVxcdURDMUEnOidcXHVEODAxXFx1REM0MicsJ1xcdUQ4MDFcXHVEQzFCJzonXFx1RDgwMVxcdURDNDMnLCdcXHVEODAxXFx1REMxQyc6J1xcdUQ4MDFcXHVEQzQ0JywnXFx1RDgwMVxcdURDMUQnOidcXHVEODAxXFx1REM0NScsJ1xcdUQ4MDFcXHVEQzFFJzonXFx1RDgwMVxcdURDNDYnLCdcXHVEODAxXFx1REMxRic6J1xcdUQ4MDFcXHVEQzQ3JywnXFx1RDgwMVxcdURDMjAnOidcXHVEODAxXFx1REM0OCcsJ1xcdUQ4MDFcXHVEQzIxJzonXFx1RDgwMVxcdURDNDknLCdcXHVEODAxXFx1REMyMic6J1xcdUQ4MDFcXHVEQzRBJywnXFx1RDgwMVxcdURDMjMnOidcXHVEODAxXFx1REM0QicsJ1xcdUQ4MDFcXHVEQzI0JzonXFx1RDgwMVxcdURDNEMnLCdcXHVEODAxXFx1REMyNSc6J1xcdUQ4MDFcXHVEQzREJywnXFx1RDgwMVxcdURDMjYnOidcXHVEODAxXFx1REM0RScsJ1xcdUQ4MDFcXHVEQzI3JzonXFx1RDgwMVxcdURDNEYnLCdcXHVEODA2XFx1RENBMCc6J1xcdUQ4MDZcXHVEQ0MwJywnXFx1RDgwNlxcdURDQTEnOidcXHVEODA2XFx1RENDMScsJ1xcdUQ4MDZcXHVEQ0EyJzonXFx1RDgwNlxcdURDQzInLCdcXHVEODA2XFx1RENBMyc6J1xcdUQ4MDZcXHVEQ0MzJywnXFx1RDgwNlxcdURDQTQnOidcXHVEODA2XFx1RENDNCcsJ1xcdUQ4MDZcXHVEQ0E1JzonXFx1RDgwNlxcdURDQzUnLCdcXHVEODA2XFx1RENBNic6J1xcdUQ4MDZcXHVEQ0M2JywnXFx1RDgwNlxcdURDQTcnOidcXHVEODA2XFx1RENDNycsJ1xcdUQ4MDZcXHVEQ0E4JzonXFx1RDgwNlxcdURDQzgnLCdcXHVEODA2XFx1RENBOSc6J1xcdUQ4MDZcXHVEQ0M5JywnXFx1RDgwNlxcdURDQUEnOidcXHVEODA2XFx1RENDQScsJ1xcdUQ4MDZcXHVEQ0FCJzonXFx1RDgwNlxcdURDQ0InLCdcXHVEODA2XFx1RENBQyc6J1xcdUQ4MDZcXHVEQ0NDJywnXFx1RDgwNlxcdURDQUQnOidcXHVEODA2XFx1RENDRCcsJ1xcdUQ4MDZcXHVEQ0FFJzonXFx1RDgwNlxcdURDQ0UnLCdcXHVEODA2XFx1RENBRic6J1xcdUQ4MDZcXHVEQ0NGJywnXFx1RDgwNlxcdURDQjAnOidcXHVEODA2XFx1RENEMCcsJ1xcdUQ4MDZcXHVEQ0IxJzonXFx1RDgwNlxcdURDRDEnLCdcXHVEODA2XFx1RENCMic6J1xcdUQ4MDZcXHVEQ0QyJywnXFx1RDgwNlxcdURDQjMnOidcXHVEODA2XFx1RENEMycsJ1xcdUQ4MDZcXHVEQ0I0JzonXFx1RDgwNlxcdURDRDQnLCdcXHVEODA2XFx1RENCNSc6J1xcdUQ4MDZcXHVEQ0Q1JywnXFx1RDgwNlxcdURDQjYnOidcXHVEODA2XFx1RENENicsJ1xcdUQ4MDZcXHVEQ0I3JzonXFx1RDgwNlxcdURDRDcnLCdcXHVEODA2XFx1RENCOCc6J1xcdUQ4MDZcXHVEQ0Q4JywnXFx1RDgwNlxcdURDQjknOidcXHVEODA2XFx1RENEOScsJ1xcdUQ4MDZcXHVEQ0JBJzonXFx1RDgwNlxcdURDREEnLCdcXHVEODA2XFx1RENCQic6J1xcdUQ4MDZcXHVEQ0RCJywnXFx1RDgwNlxcdURDQkMnOidcXHVEODA2XFx1RENEQycsJ1xcdUQ4MDZcXHVEQ0JEJzonXFx1RDgwNlxcdURDREQnLCdcXHVEODA2XFx1RENCRSc6J1xcdUQ4MDZcXHVEQ0RFJywnXFx1RDgwNlxcdURDQkYnOidcXHVEODA2XFx1RENERicsJ1xceERGJzonc3MnLCdcXHUwMTMwJzonaVxcdTAzMDcnLCdcXHUwMTQ5JzonXFx1MDJCQ24nLCdcXHUwMUYwJzonalxcdTAzMEMnLCdcXHUwMzkwJzonXFx1MDNCOVxcdTAzMDhcXHUwMzAxJywnXFx1MDNCMCc6J1xcdTAzQzVcXHUwMzA4XFx1MDMwMScsJ1xcdTA1ODcnOidcXHUwNTY1XFx1MDU4MicsJ1xcdTFFOTYnOidoXFx1MDMzMScsJ1xcdTFFOTcnOid0XFx1MDMwOCcsJ1xcdTFFOTgnOid3XFx1MDMwQScsJ1xcdTFFOTknOid5XFx1MDMwQScsJ1xcdTFFOUEnOidhXFx1MDJCRScsJ1xcdTFFOUUnOidzcycsJ1xcdTFGNTAnOidcXHUwM0M1XFx1MDMxMycsJ1xcdTFGNTInOidcXHUwM0M1XFx1MDMxM1xcdTAzMDAnLCdcXHUxRjU0JzonXFx1MDNDNVxcdTAzMTNcXHUwMzAxJywnXFx1MUY1Nic6J1xcdTAzQzVcXHUwMzEzXFx1MDM0MicsJ1xcdTFGODAnOidcXHUxRjAwXFx1MDNCOScsJ1xcdTFGODEnOidcXHUxRjAxXFx1MDNCOScsJ1xcdTFGODInOidcXHUxRjAyXFx1MDNCOScsJ1xcdTFGODMnOidcXHUxRjAzXFx1MDNCOScsJ1xcdTFGODQnOidcXHUxRjA0XFx1MDNCOScsJ1xcdTFGODUnOidcXHUxRjA1XFx1MDNCOScsJ1xcdTFGODYnOidcXHUxRjA2XFx1MDNCOScsJ1xcdTFGODcnOidcXHUxRjA3XFx1MDNCOScsJ1xcdTFGODgnOidcXHUxRjAwXFx1MDNCOScsJ1xcdTFGODknOidcXHUxRjAxXFx1MDNCOScsJ1xcdTFGOEEnOidcXHUxRjAyXFx1MDNCOScsJ1xcdTFGOEInOidcXHUxRjAzXFx1MDNCOScsJ1xcdTFGOEMnOidcXHUxRjA0XFx1MDNCOScsJ1xcdTFGOEQnOidcXHUxRjA1XFx1MDNCOScsJ1xcdTFGOEUnOidcXHUxRjA2XFx1MDNCOScsJ1xcdTFGOEYnOidcXHUxRjA3XFx1MDNCOScsJ1xcdTFGOTAnOidcXHUxRjIwXFx1MDNCOScsJ1xcdTFGOTEnOidcXHUxRjIxXFx1MDNCOScsJ1xcdTFGOTInOidcXHUxRjIyXFx1MDNCOScsJ1xcdTFGOTMnOidcXHUxRjIzXFx1MDNCOScsJ1xcdTFGOTQnOidcXHUxRjI0XFx1MDNCOScsJ1xcdTFGOTUnOidcXHUxRjI1XFx1MDNCOScsJ1xcdTFGOTYnOidcXHUxRjI2XFx1MDNCOScsJ1xcdTFGOTcnOidcXHUxRjI3XFx1MDNCOScsJ1xcdTFGOTgnOidcXHUxRjIwXFx1MDNCOScsJ1xcdTFGOTknOidcXHUxRjIxXFx1MDNCOScsJ1xcdTFGOUEnOidcXHUxRjIyXFx1MDNCOScsJ1xcdTFGOUInOidcXHUxRjIzXFx1MDNCOScsJ1xcdTFGOUMnOidcXHUxRjI0XFx1MDNCOScsJ1xcdTFGOUQnOidcXHUxRjI1XFx1MDNCOScsJ1xcdTFGOUUnOidcXHUxRjI2XFx1MDNCOScsJ1xcdTFGOUYnOidcXHUxRjI3XFx1MDNCOScsJ1xcdTFGQTAnOidcXHUxRjYwXFx1MDNCOScsJ1xcdTFGQTEnOidcXHUxRjYxXFx1MDNCOScsJ1xcdTFGQTInOidcXHUxRjYyXFx1MDNCOScsJ1xcdTFGQTMnOidcXHUxRjYzXFx1MDNCOScsJ1xcdTFGQTQnOidcXHUxRjY0XFx1MDNCOScsJ1xcdTFGQTUnOidcXHUxRjY1XFx1MDNCOScsJ1xcdTFGQTYnOidcXHUxRjY2XFx1MDNCOScsJ1xcdTFGQTcnOidcXHUxRjY3XFx1MDNCOScsJ1xcdTFGQTgnOidcXHUxRjYwXFx1MDNCOScsJ1xcdTFGQTknOidcXHUxRjYxXFx1MDNCOScsJ1xcdTFGQUEnOidcXHUxRjYyXFx1MDNCOScsJ1xcdTFGQUInOidcXHUxRjYzXFx1MDNCOScsJ1xcdTFGQUMnOidcXHUxRjY0XFx1MDNCOScsJ1xcdTFGQUQnOidcXHUxRjY1XFx1MDNCOScsJ1xcdTFGQUUnOidcXHUxRjY2XFx1MDNCOScsJ1xcdTFGQUYnOidcXHUxRjY3XFx1MDNCOScsJ1xcdTFGQjInOidcXHUxRjcwXFx1MDNCOScsJ1xcdTFGQjMnOidcXHUwM0IxXFx1MDNCOScsJ1xcdTFGQjQnOidcXHUwM0FDXFx1MDNCOScsJ1xcdTFGQjYnOidcXHUwM0IxXFx1MDM0MicsJ1xcdTFGQjcnOidcXHUwM0IxXFx1MDM0MlxcdTAzQjknLCdcXHUxRkJDJzonXFx1MDNCMVxcdTAzQjknLCdcXHUxRkMyJzonXFx1MUY3NFxcdTAzQjknLCdcXHUxRkMzJzonXFx1MDNCN1xcdTAzQjknLCdcXHUxRkM0JzonXFx1MDNBRVxcdTAzQjknLCdcXHUxRkM2JzonXFx1MDNCN1xcdTAzNDInLCdcXHUxRkM3JzonXFx1MDNCN1xcdTAzNDJcXHUwM0I5JywnXFx1MUZDQyc6J1xcdTAzQjdcXHUwM0I5JywnXFx1MUZEMic6J1xcdTAzQjlcXHUwMzA4XFx1MDMwMCcsJ1xcdTFGRDMnOidcXHUwM0I5XFx1MDMwOFxcdTAzMDEnLCdcXHUxRkQ2JzonXFx1MDNCOVxcdTAzNDInLCdcXHUxRkQ3JzonXFx1MDNCOVxcdTAzMDhcXHUwMzQyJywnXFx1MUZFMic6J1xcdTAzQzVcXHUwMzA4XFx1MDMwMCcsJ1xcdTFGRTMnOidcXHUwM0M1XFx1MDMwOFxcdTAzMDEnLCdcXHUxRkU0JzonXFx1MDNDMVxcdTAzMTMnLCdcXHUxRkU2JzonXFx1MDNDNVxcdTAzNDInLCdcXHUxRkU3JzonXFx1MDNDNVxcdTAzMDhcXHUwMzQyJywnXFx1MUZGMic6J1xcdTFGN0NcXHUwM0I5JywnXFx1MUZGMyc6J1xcdTAzQzlcXHUwM0I5JywnXFx1MUZGNCc6J1xcdTAzQ0VcXHUwM0I5JywnXFx1MUZGNic6J1xcdTAzQzlcXHUwMzQyJywnXFx1MUZGNyc6J1xcdTAzQzlcXHUwMzQyXFx1MDNCOScsJ1xcdTFGRkMnOidcXHUwM0M5XFx1MDNCOScsJ1xcdUZCMDAnOidmZicsJ1xcdUZCMDEnOidmaScsJ1xcdUZCMDInOidmbCcsJ1xcdUZCMDMnOidmZmknLCdcXHVGQjA0JzonZmZsJywnXFx1RkIwNSc6J3N0JywnXFx1RkIwNic6J3N0JywnXFx1RkIxMyc6J1xcdTA1NzRcXHUwNTc2JywnXFx1RkIxNCc6J1xcdTA1NzRcXHUwNTY1JywnXFx1RkIxNSc6J1xcdTA1NzRcXHUwNTZCJywnXFx1RkIxNic6J1xcdTA1N0VcXHUwNTc2JywnXFx1RkIxNyc6J1xcdTA1NzRcXHUwNTZEJ307XG5cbi8vIE5vcm1hbGl6ZSByZWZlcmVuY2UgbGFiZWw6IGNvbGxhcHNlIGludGVybmFsIHdoaXRlc3BhY2Vcbi8vIHRvIHNpbmdsZSBzcGFjZSwgcmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FzZSBmb2xkLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDEsIHN0cmluZy5sZW5ndGggLSAxKS50cmltKCkucmVwbGFjZShyZWdleCwgZnVuY3Rpb24oJDApIHtcbiAgICAgICAgLy8gTm90ZTogdGhlcmUgaXMgbm8gbmVlZCB0byBjaGVjayBgaGFzT3duUHJvcGVydHkoJDApYCBoZXJlLlxuICAgICAgICAvLyBJZiBjaGFyYWN0ZXIgbm90IGZvdW5kIGluIGxvb2t1cCB0YWJsZSwgaXQgbXVzdCBiZSB3aGl0ZXNwYWNlLlxuICAgICAgICByZXR1cm4gbWFwWyQwXSB8fCAnICc7XG4gICAgfSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvbm9ybWFsaXplLXJlZmVyZW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiEgaHR0cDovL210aHMuYmUvcmVwZWF0IHYwLjIuMCBieSBAbWF0aGlhcyAqL1xuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuXHQoZnVuY3Rpb24oKSB7XG5cdFx0J3VzZSBzdHJpY3QnOyAvLyBuZWVkZWQgdG8gc3VwcG9ydCBgYXBwbHlgL2BjYWxsYCB3aXRoIGB1bmRlZmluZWRgL2BudWxsYFxuXHRcdHZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcblx0XHRcdC8vIElFIDggb25seSBzdXBwb3J0cyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBvbiBET00gZWxlbWVudHNcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSB7fTtcblx0XHRcdFx0dmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblx0XHRcdFx0dmFyIHJlc3VsdCA9ICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG9iamVjdCwgb2JqZWN0KSAmJiAkZGVmaW5lUHJvcGVydHk7XG5cdFx0XHR9IGNhdGNoKGVycm9yKSB7fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KCkpO1xuXHRcdHZhciByZXBlYXQgPSBmdW5jdGlvbihjb3VudCkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbnVsbCkge1xuXHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoKTtcblx0XHRcdH1cblx0XHRcdHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG5cdFx0XHQvLyBgVG9JbnRlZ2VyYFxuXHRcdFx0dmFyIG4gPSBjb3VudCA/IE51bWJlcihjb3VudCkgOiAwO1xuXHRcdFx0aWYgKG4gIT0gbikgeyAvLyBiZXR0ZXIgYGlzTmFOYFxuXHRcdFx0XHRuID0gMDtcblx0XHRcdH1cblx0XHRcdC8vIEFjY291bnQgZm9yIG91dC1vZi1ib3VuZHMgaW5kaWNlc1xuXHRcdFx0aWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHtcblx0XHRcdFx0dGhyb3cgUmFuZ2VFcnJvcigpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdFx0d2hpbGUgKG4pIHtcblx0XHRcdFx0aWYgKG4gJSAyID09IDEpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuID4gMSkge1xuXHRcdFx0XHRcdHN0cmluZyArPSBzdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0biA+Pj0gMTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0XHRpZiAoZGVmaW5lUHJvcGVydHkpIHtcblx0XHRcdGRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsICdyZXBlYXQnLCB7XG5cdFx0XHRcdCd2YWx1ZSc6IHJlcGVhdCxcblx0XHRcdFx0J2NvbmZpZ3VyYWJsZSc6IHRydWUsXG5cdFx0XHRcdCd3cml0YWJsZSc6IHRydWVcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IHJlcGVhdDtcblx0XHR9XG5cdH0oKSk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vc3RyaW5nLnByb3RvdHlwZS5yZXBlYXQvcmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZXNjYXBlWG1sID0gcmVxdWlyZSgnLi9jb21tb24nKS5lc2NhcGVYbWw7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwcm9kdWNlIGFuIEhUTUwgdGFnLlxudmFyIHRhZyA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJzLCBzZWxmY2xvc2luZykge1xuICAgIHZhciByZXN1bHQgPSAnPCcgKyBuYW1lO1xuICAgIGlmIChhdHRycyAmJiBhdHRycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGF0dHJpYjtcbiAgICAgICAgd2hpbGUgKChhdHRyaWIgPSBhdHRyc1tpXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcgJyArIGF0dHJpYlswXSArICc9XCInICsgYXR0cmliWzFdICsgJ1wiJztcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VsZmNsb3NpbmcpIHtcbiAgICAgICAgcmVzdWx0ICs9ICcgLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9ICc+JztcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHJlSHRtbFRhZyA9IC9cXDxbXj5dKlxcPi87XG52YXIgcmVVbnNhZmVQcm90b2NvbCA9IC9eamF2YXNjcmlwdDp8dmJzY3JpcHQ6fGZpbGU6fGRhdGE6L2k7XG52YXIgcmVTYWZlRGF0YVByb3RvY29sID0gL15kYXRhOmltYWdlXFwvKD86cG5nfGdpZnxqcGVnfHdlYnApL2k7XG5cbnZhciBwb3RlbnRpYWxseVVuc2FmZSA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHJldHVybiByZVVuc2FmZVByb3RvY29sLnRlc3QodXJsKSAmJlxuICAgICAgICAhcmVTYWZlRGF0YVByb3RvY29sLnRlc3QodXJsKTtcbn07XG5cbnZhciByZW5kZXJOb2RlcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG5cbiAgICB2YXIgYXR0cnM7XG4gICAgdmFyIGluZm9fd29yZHM7XG4gICAgdmFyIHRhZ25hbWU7XG4gICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xuICAgIHZhciBldmVudCwgbm9kZSwgZW50ZXJpbmc7XG4gICAgdmFyIGJ1ZmZlciA9IFwiXCI7XG4gICAgdmFyIGxhc3RPdXQgPSBcIlxcblwiO1xuICAgIHZhciBkaXNhYmxlVGFncyA9IDA7XG4gICAgdmFyIGdyYW5kcGFyZW50O1xuICAgIHZhciBvdXQgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChkaXNhYmxlVGFncyA+IDApIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSBzLnJlcGxhY2UocmVIdG1sVGFnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcztcbiAgICAgICAgfVxuICAgICAgICBsYXN0T3V0ID0gcztcbiAgICB9O1xuICAgIHZhciBlc2MgPSB0aGlzLmVzY2FwZTtcbiAgICB2YXIgY3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxhc3RPdXQgIT09ICdcXG4nKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gJ1xcbic7XG4gICAgICAgICAgICBsYXN0T3V0ID0gJ1xcbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcInJlbmRlcmluZ1wiKTsgfVxuXG4gICAgd2hpbGUgKChldmVudCA9IHdhbGtlci5uZXh0KCkpKSB7XG4gICAgICAgIGVudGVyaW5nID0gZXZlbnQuZW50ZXJpbmc7XG4gICAgICAgIG5vZGUgPSBldmVudC5ub2RlO1xuXG4gICAgICAgIGF0dHJzID0gW107XG4gICAgICAgIGlmIChvcHRpb25zLnNvdXJjZXBvcykge1xuICAgICAgICAgICAgdmFyIHBvcyA9IG5vZGUuc291cmNlcG9zO1xuICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydkYXRhLXNvdXJjZXBvcycsIFN0cmluZyhwb3NbMF1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzBdWzFdKSArICctJyArIFN0cmluZyhwb3NbMV1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzFdWzFdKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVGV4dCc6XG4gICAgICAgICAgICBvdXQoZXNjKG5vZGUubGl0ZXJhbCwgZmFsc2UpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1NvZnRicmVhayc6XG4gICAgICAgICAgICBvdXQodGhpcy5zb2Z0YnJlYWspO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSGFyZGJyZWFrJzpcbiAgICAgICAgICAgIG91dCh0YWcoJ2JyJywgW10sIHRydWUpKTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbXBoJzpcbiAgICAgICAgICAgIG91dCh0YWcoZW50ZXJpbmcgPyAnZW0nIDogJy9lbScpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1N0cm9uZyc6XG4gICAgICAgICAgICBvdXQodGFnKGVudGVyaW5nID8gJ3N0cm9uZycgOiAnL3N0cm9uZycpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0h0bWwnOlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2FmZSkge1xuICAgICAgICAgICAgICAgIG91dCgnPCEtLSByYXcgSFRNTCBvbWl0dGVkIC0tPicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQobm9kZS5saXRlcmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xpbmsnOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEob3B0aW9ucy5zYWZlICYmIHBvdGVudGlhbGx5VW5zYWZlKG5vZGUuZGVzdGluYXRpb24pKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnaHJlZicsIGVzYyhub2RlLmRlc3RpbmF0aW9uLCB0cnVlKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsndGl0bGUnLCBlc2Mobm9kZS50aXRsZSwgdHJ1ZSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnYScsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9hJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc2FibGVUYWdzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNhZmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICBwb3RlbnRpYWxseVVuc2FmZShub2RlLmRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0KCc8aW1nIHNyYz1cIlwiIGFsdD1cIicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0KCc8aW1nIHNyYz1cIicgKyBlc2Mobm9kZS5kZXN0aW5hdGlvbiwgdHJ1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBhbHQ9XCInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlVGFncyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlVGFncyAtPSAxO1xuICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlVGFncyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0KCdcIiB0aXRsZT1cIicgKyBlc2Mobm9kZS50aXRsZSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dCgnXCIgLz4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgICAgIG91dCh0YWcoJ2NvZGUnKSArIGVzYyhub2RlLmxpdGVyYWwsIGZhbHNlKSArIHRhZygnL2NvZGUnKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdEb2N1bWVudCc6XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQYXJhZ3JhcGgnOlxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQgPSBub2RlLnBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoZ3JhbmRwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBncmFuZHBhcmVudC50eXBlID09PSAnTGlzdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbmRwYXJlbnQubGlzdFRpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygncCcsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9wJykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdCbG9ja1F1b3RlJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnYmxvY2txdW90ZScsIGF0dHJzKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvYmxvY2txdW90ZScpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSXRlbSc6XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCdsaScsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9saScpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgICAgICB0YWduYW1lID0gbm9kZS5saXN0VHlwZSA9PT0gJ0J1bGxldCcgPyAndWwnIDogJ29sJztcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG5vZGUubGlzdFN0YXJ0O1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCAhPT0gbnVsbCAmJiBzdGFydCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnc3RhcnQnLCBzdGFydC50b1N0cmluZygpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZyh0YWduYW1lLCBhdHRycykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hlYWRlcic6XG4gICAgICAgICAgICB0YWduYW1lID0gJ2gnICsgbm9kZS5sZXZlbDtcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZyh0YWduYW1lLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvJyArIHRhZ25hbWUpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQ29kZUJsb2NrJzpcbiAgICAgICAgICAgIGluZm9fd29yZHMgPSBub2RlLmluZm8gPyBub2RlLmluZm8uc3BsaXQoL1xccysvKSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluZm9fd29yZHMubGVuZ3RoID4gMCAmJiBpbmZvX3dvcmRzWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnY2xhc3MnLCAnbGFuZ3VhZ2UtJyArIGVzYyhpbmZvX3dvcmRzWzBdLCB0cnVlKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcoJ3ByZScpICsgdGFnKCdjb2RlJywgYXR0cnMpKTtcbiAgICAgICAgICAgIG91dChlc2Mobm9kZS5saXRlcmFsLCBmYWxzZSkpO1xuICAgICAgICAgICAgb3V0KHRhZygnL2NvZGUnKSArIHRhZygnL3ByZScpKTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIdG1sQmxvY2snOlxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNhZmUpIHtcbiAgICAgICAgICAgICAgICBvdXQoJzwhLS0gcmF3IEhUTUwgb21pdHRlZCAtLT4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KG5vZGUubGl0ZXJhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9yaXpvbnRhbFJ1bGUnOlxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcoJ2hyJywgYXR0cnMsIHRydWUpKTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgXCJVbmtub3duIG5vZGUgdHlwZSBcIiArIG5vZGUudHlwZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwicmVuZGVyaW5nXCIpOyB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8vIFRoZSBIdG1sUmVuZGVyZXIgb2JqZWN0LlxuZnVuY3Rpb24gSHRtbFJlbmRlcmVyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlZmF1bHQgb3B0aW9uczpcbiAgICAgICAgc29mdGJyZWFrOiAnXFxuJywgLy8gYnkgZGVmYXVsdCwgc29mdCBicmVha3MgYXJlIHJlbmRlcmVkIGFzIG5ld2xpbmVzIGluIEhUTUxcbiAgICAgICAgLy8gc2V0IHRvIFwiPGJyIC8+XCIgdG8gbWFrZSB0aGVtIGhhcmQgYnJlYWtzXG4gICAgICAgIC8vIHNldCB0byBcIiBcIiBpZiB5b3Ugd2FudCB0byBpZ25vcmUgbGluZSB3cmFwcGluZyBpbiBzb3VyY2VcbiAgICAgICAgZXNjYXBlOiBlc2NhcGVYbWwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHJlbmRlcjogcmVuZGVyTm9kZXNcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWxSZW5kZXJlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2h0bWwuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlc2NhcGVYbWwgPSByZXF1aXJlKCcuL2NvbW1vbicpLmVzY2FwZVhtbDtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHByb2R1Y2UgYW4gWE1MIHRhZy5cbnZhciB0YWcgPSBmdW5jdGlvbihuYW1lLCBhdHRycywgc2VsZmNsb3NpbmcpIHtcbiAgICB2YXIgcmVzdWx0ID0gJzwnICsgbmFtZTtcbiAgICBpZiAoYXR0cnMgJiYgYXR0cnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBhdHRyaWI7XG4gICAgICAgIHdoaWxlICgoYXR0cmliID0gYXR0cnNbaV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnICcgKyBhdHRyaWJbMF0gKyAnPVwiJyArIGF0dHJpYlsxXSArICdcIic7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGZjbG9zaW5nKSB7XG4gICAgICAgIHJlc3VsdCArPSAnIC8nO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSAnPic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciByZVhNTFRhZyA9IC9cXDxbXj5dKlxcPi87XG5cbnZhciB0b1RhZ05hbWUgPSBmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIHJlbmRlck5vZGVzID0gZnVuY3Rpb24oYmxvY2spIHtcblxuICAgIHZhciBhdHRycztcbiAgICB2YXIgdGFnbmFtZTtcbiAgICB2YXIgd2Fsa2VyID0gYmxvY2sud2Fsa2VyKCk7XG4gICAgdmFyIGV2ZW50LCBub2RlLCBlbnRlcmluZztcbiAgICB2YXIgYnVmZmVyID0gXCJcIjtcbiAgICB2YXIgbGFzdE91dCA9IFwiXFxuXCI7XG4gICAgdmFyIGRpc2FibGVUYWdzID0gMDtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSAwO1xuICAgIHZhciBpbmRlbnQgPSAnICAnO1xuICAgIHZhciB1bmVzY2FwZWRDb250ZW50cztcbiAgICB2YXIgY29udGFpbmVyO1xuICAgIHZhciBzZWxmQ2xvc2luZztcbiAgICB2YXIgbm9kZXR5cGU7XG5cbiAgICB2YXIgb3V0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPiAwKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcy5yZXBsYWNlKHJlWE1MVGFnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcztcbiAgICAgICAgfVxuICAgICAgICBsYXN0T3V0ID0gcztcbiAgICB9O1xuICAgIHZhciBlc2MgPSB0aGlzLmVzY2FwZTtcbiAgICB2YXIgY3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxhc3RPdXQgIT09ICdcXG4nKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gJ1xcbic7XG4gICAgICAgICAgICBsYXN0T3V0ID0gJ1xcbic7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZW50TGV2ZWw7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gaW5kZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJyZW5kZXJpbmdcIik7IH1cblxuICAgIGJ1ZmZlciArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XFxuJztcbiAgICBidWZmZXIgKz0gJzwhRE9DVFlQRSBDb21tb25NYXJrIFNZU1RFTSBcIkNvbW1vbk1hcmsuZHRkXCI+XFxuJztcblxuICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICBlbnRlcmluZyA9IGV2ZW50LmVudGVyaW5nO1xuICAgICAgICBub2RlID0gZXZlbnQubm9kZTtcbiAgICAgICAgbm9kZXR5cGUgPSBub2RlLnR5cGU7XG5cbiAgICAgICAgY29udGFpbmVyID0gbm9kZS5pc0NvbnRhaW5lcjtcbiAgICAgICAgc2VsZkNsb3NpbmcgPSBub2RldHlwZSA9PT0gJ0hvcml6b250YWxSdWxlJyB8fCBub2RldHlwZSA9PT0gJ0hhcmRicmVhaycgfHxcbiAgICAgICAgICAgIG5vZGV0eXBlID09PSAnU29mdGJyZWFrJztcbiAgICAgICAgdW5lc2NhcGVkQ29udGVudHMgPSBub2RldHlwZSA9PT0gJ0h0bWwnIHx8IG5vZGV0eXBlID09PSAnSHRtbElubGluZSc7XG4gICAgICAgIHRhZ25hbWUgPSB0b1RhZ05hbWUobm9kZXR5cGUpO1xuXG4gICAgICAgIGlmIChlbnRlcmluZykge1xuXG4gICAgICAgICAgICBhdHRycyA9IFtdO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGV0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdMaXN0JzpcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0VHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsndHlwZScsIG5vZGUubGlzdFR5cGUudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0U3RhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3N0YXJ0JywgU3RyaW5nKG5vZGUubGlzdFN0YXJ0KV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0VGlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3RpZ2h0JywgKG5vZGUubGlzdFRpZ2h0ID8gJ3RydWUnIDogJ2ZhbHNlJyldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGRlbGltID0gbm9kZS5saXN0RGVsaW1pdGVyO1xuICAgICAgICAgICAgICAgIGlmIChkZWxpbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsaW13b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxpbSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbXdvcmQgPSAncGVyaW9kJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltd29yZCA9ICdwYXJlbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2RlbGltaXRlcicsIGRlbGltd29yZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NvZGVCbG9jayc6XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnaW5mbycsIG5vZGUuaW5mb10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0hlYWRlcic6XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2xldmVsJywgU3RyaW5nKG5vZGUubGV2ZWwpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnZGVzdGluYXRpb24nLCBub2RlLmRlc3RpbmF0aW9uXSk7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3RpdGxlJywgbm9kZS50aXRsZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNvdXJjZXBvcykge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBub2RlLnNvdXJjZXBvcztcbiAgICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydzb3VyY2Vwb3MnLCBTdHJpbmcocG9zWzBdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhwb3NbMF1bMV0pICsgJy0nICsgU3RyaW5nKHBvc1sxXVswXSkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzFdWzFdKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcodGFnbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nKSk7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNvbnRhaW5lciAmJiAhc2VsZkNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGl0ID0gbm9kZS5saXRlcmFsO1xuICAgICAgICAgICAgICAgIGlmIChsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0KHVuZXNjYXBlZENvbnRlbnRzID8gbGl0IDogZXNjKGxpdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvJyArIHRhZ25hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGVudExldmVsIC09IDE7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwicmVuZGVyaW5nXCIpOyB9XG4gICAgYnVmZmVyICs9ICdcXG4nO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG4vLyBUaGUgWG1sUmVuZGVyZXIgb2JqZWN0LlxuZnVuY3Rpb24gWG1sUmVuZGVyZXIob3B0aW9ucyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZGVmYXVsdCBvcHRpb25zOlxuICAgICAgICBzb2Z0YnJlYWs6ICdcXG4nLCAvLyBieSBkZWZhdWx0LCBzb2Z0IGJyZWFrcyBhcmUgcmVuZGVyZWQgYXMgbmV3bGluZXMgaW4gSFRNTFxuICAgICAgICAvLyBzZXQgdG8gXCI8YnIgLz5cIiB0byBtYWtlIHRoZW0gaGFyZCBicmVha3NcbiAgICAgICAgLy8gc2V0IHRvIFwiIFwiIGlmIHlvdSB3YW50IHRvIGlnbm9yZSBsaW5lIHdyYXBwaW5nIGluIHNvdXJjZVxuICAgICAgICBlc2NhcGU6IGVzY2FwZVhtbCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgcmVuZGVyOiByZW5kZXJOb2Rlc1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWG1sUmVuZGVyZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi94bWwuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb252ZXJ0ID0gcmVxdWlyZShcImNvbG9yLWNvbnZlcnRcIiksXG4gICAgc3RyaW5nID0gcmVxdWlyZShcImNvbG9yLXN0cmluZ1wiKTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikgcmV0dXJuIG9iajtcbiAgaWYgKCEgKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHJldHVybiBuZXcgQ29sb3Iob2JqKTtcblxuICAgdGhpcy52YWx1ZXMgPSB7XG4gICAgICByZ2I6IFswLCAwLCAwXSxcbiAgICAgIGhzbDogWzAsIDAsIDBdLFxuICAgICAgaHN2OiBbMCwgMCwgMF0sXG4gICAgICBod2I6IFswLCAwLCAwXSxcbiAgICAgIGNteWs6IFswLCAwLCAwLCAwXSxcbiAgICAgIGFscGhhOiAxXG4gICB9XG5cbiAgIC8vIHBhcnNlIENvbG9yKCkgYXJndW1lbnRcbiAgIGlmICh0eXBlb2Ygb2JqID09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciB2YWxzID0gc3RyaW5nLmdldFJnYmEob2JqKTtcbiAgICAgIGlmICh2YWxzKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcInJnYlwiLCB2YWxzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodmFscyA9IHN0cmluZy5nZXRIc2xhKG9iaikpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHZhbHMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcImh3YlwiLCB2YWxzKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmcgXFxcIlwiICsgb2JqICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAodHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YXIgdmFscyA9IG9iajtcbiAgICAgIGlmKHZhbHNbXCJyXCJdICE9PSB1bmRlZmluZWQgfHwgdmFsc1tcInJlZFwiXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcInJnYlwiLCB2YWxzKVxuICAgICAgfVxuICAgICAgZWxzZSBpZih2YWxzW1wibFwiXSAhPT0gdW5kZWZpbmVkIHx8IHZhbHNbXCJsaWdodG5lc3NcIl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdmFscylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodmFsc1tcInZcIl0gIT09IHVuZGVmaW5lZCB8fCB2YWxzW1widmFsdWVcIl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc3ZcIiwgdmFscylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodmFsc1tcIndcIl0gIT09IHVuZGVmaW5lZCB8fCB2YWxzW1wid2hpdGVuZXNzXCJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsIHZhbHMpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKHZhbHNbXCJjXCJdICE9PSB1bmRlZmluZWQgfHwgdmFsc1tcImN5YW5cIl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJjbXlrXCIsIHZhbHMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0IFwiICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgICB9XG4gICB9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcbiAgIHJnYjogZnVuY3Rpb24gKHZhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFNwYWNlKFwicmdiXCIsIGFyZ3VtZW50cyk7XG4gICB9LFxuICAgaHNsOiBmdW5jdGlvbih2YWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTcGFjZShcImhzbFwiLCBhcmd1bWVudHMpO1xuICAgfSxcbiAgIGhzdjogZnVuY3Rpb24odmFscykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJoc3ZcIiwgYXJndW1lbnRzKTtcbiAgIH0sXG4gICBod2I6IGZ1bmN0aW9uKHZhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFNwYWNlKFwiaHdiXCIsIGFyZ3VtZW50cyk7XG4gICB9LFxuICAgY215azogZnVuY3Rpb24odmFscykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJjbXlrXCIsIGFyZ3VtZW50cyk7XG4gICB9LFxuXG4gICByZ2JBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuICAgfSxcbiAgIGhzbEFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG4gICB9LFxuICAgaHN2QXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcbiAgIH0sXG4gICBod2JBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmh3Yi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5od2I7XG4gICB9LFxuICAgY215a0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5jbXlrO1xuICAgfSxcbiAgIHJnYmFBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuICAgICAgcmV0dXJuIHJnYi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG4gICB9LFxuICAgaHNsYUFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoc2wgPSB0aGlzLnZhbHVlcy5oc2w7XG4gICAgICByZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcbiAgIH0sXG4gICBhbHBoYTogZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIiwgdmFsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgcmVkOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwgMCwgdmFsKTtcbiAgIH0sXG4gICBncmVlbjogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsIDEsIHZhbCk7XG4gICB9LFxuICAgYmx1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsIDIsIHZhbCk7XG4gICB9LFxuICAgaHVlOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwgMCwgdmFsKTtcbiAgIH0sXG4gICBzYXR1cmF0aW9uOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwgMSwgdmFsKTtcbiAgIH0sXG4gICBsaWdodG5lc3M6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLCAyLCB2YWwpO1xuICAgfSxcbiAgIHNhdHVyYXRpb252OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc3ZcIiwgMSwgdmFsKTtcbiAgIH0sXG4gICB3aGl0ZW5lc3M6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImh3YlwiLCAxLCB2YWwpO1xuICAgfSxcbiAgIGJsYWNrbmVzczogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHdiXCIsIDIsIHZhbCk7XG4gICB9LFxuICAgdmFsdWU6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzdlwiLCAyLCB2YWwpO1xuICAgfSxcbiAgIGN5YW46IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwgMCwgdmFsKTtcbiAgIH0sXG4gICBtYWdlbnRhOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsIDEsIHZhbCk7XG4gICB9LFxuICAgeWVsbG93OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsIDIsIHZhbCk7XG4gICB9LFxuICAgYmxhY2s6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwgMywgdmFsKTtcbiAgIH0sXG5cbiAgIGhleFN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmhleFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IpO1xuICAgfSxcbiAgIHJnYlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnJnYlN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG4gICByZ2JhU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcucmdiYVN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG4gICBwZXJjZW50U3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcucGVyY2VudFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG4gICBoc2xTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5oc2xTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuICAgaHNsYVN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmhzbGFTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuICAgaHdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuaHdiU3RyaW5nKHRoaXMudmFsdWVzLmh3YiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcbiAgIGtleXdvcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5rZXl3b3JkKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcblxuICAgcmdiTnVtYmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAodGhpcy52YWx1ZXMucmdiWzBdIDw8IDE2KSB8ICh0aGlzLnZhbHVlcy5yZ2JbMV0gPDwgOCkgfCB0aGlzLnZhbHVlcy5yZ2JbMl07XG4gICB9LFxuXG4gICBsdW1pbm9zaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgIHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG4gICAgICB2YXIgbHVtID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgdmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG4gICAgICAgICBsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MlxuICAgICAgICAgICAgICAgICAgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNClcbiAgICAgIH1cbiAgICAgIHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG4gICB9LFxuXG4gICBjb250cmFzdDogZnVuY3Rpb24oY29sb3IyKSB7XG4gICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgICB2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuICAgICAgdmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuICAgICAgaWYgKGx1bTEgPiBsdW0yKSB7XG4gICAgICAgICByZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSlcbiAgICAgIH07XG4gICAgICByZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG4gICB9LFxuXG4gICBsZXZlbDogZnVuY3Rpb24oY29sb3IyKSB7XG4gICAgIHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuICAgICByZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNy4xKVxuICAgICAgID8gJ0FBQSdcbiAgICAgICA6IChjb250cmFzdFJhdGlvID49IDQuNSlcbiAgICAgICAgPyAnQUEnXG4gICAgICAgIDogJyc7XG4gICB9LFxuXG4gICBkYXJrOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3RcbiAgICAgIHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2IsXG4gICAgICAgICAgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuICAgICAgcmV0dXJuIHlpcSA8IDEyODtcbiAgIH0sXG5cbiAgIGxpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhdGhpcy5kYXJrKCk7XG4gICB9LFxuXG4gICBuZWdhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJnYiA9IFtdXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIiwgcmdiKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgbGlnaHRlbjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMudmFsdWVzLmhzbFsyXSArPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHRoaXMudmFsdWVzLmhzbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIGRhcmtlbjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMudmFsdWVzLmhzbFsyXSAtPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHRoaXMudmFsdWVzLmhzbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIHNhdHVyYXRlOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy52YWx1ZXMuaHNsWzFdICs9IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdGhpcy52YWx1ZXMuaHNsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgZGVzYXR1cmF0ZTogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMudmFsdWVzLmhzbFsxXSAtPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHRoaXMudmFsdWVzLmhzbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIHdoaXRlbjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMudmFsdWVzLmh3YlsxXSArPSB0aGlzLnZhbHVlcy5od2JbMV0gKiByYXRpbztcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsIHRoaXMudmFsdWVzLmh3Yik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIGJsYWNrZW46IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnZhbHVlcy5od2JbMl0gKz0gdGhpcy52YWx1ZXMuaHdiWzJdICogcmF0aW87XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImh3YlwiLCB0aGlzLnZhbHVlcy5od2IpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBncmV5c2NhbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcbiAgICAgIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG4gICAgICB2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG4gICAgICB0aGlzLnNldFZhbHVlcyhcInJnYlwiLCBbdmFsLCB2YWwsIHZhbF0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBjbGVhcmVyOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLCB0aGlzLnZhbHVlcy5hbHBoYSAtICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIG9wYXF1ZXI6IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgcm90YXRlOiBmdW5jdGlvbihkZWdyZWVzKSB7XG4gICAgICB2YXIgaHVlID0gdGhpcy52YWx1ZXMuaHNsWzBdO1xuICAgICAgaHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuICAgICAgaHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcbiAgICAgIHRoaXMudmFsdWVzLmhzbFswXSA9IGh1ZTtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsIHRoaXMudmFsdWVzLmhzbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIC8qKlxuICAgICogUG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG4gICAgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcbiAgICAqL1xuICAgbWl4OiBmdW5jdGlvbihtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcbiAgICAgIHZhciBjb2xvcjEgPSB0aGlzO1xuICAgICAgdmFyIGNvbG9yMiA9IG1peGluQ29sb3I7XG4gICAgICB2YXIgcCA9IHdlaWdodCAhPT0gdW5kZWZpbmVkID8gd2VpZ2h0IDogMC41O1xuXG4gICAgICB2YXIgdyA9IDIgKiBwIC0gMTtcbiAgICAgIHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuICAgICAgdmFyIHcxID0gKCgodyAqIGEgPT0gLTEpID8gdyA6ICh3ICsgYSkvKDEgKyB3KmEpKSArIDEpIC8gMi4wO1xuICAgICAgdmFyIHcyID0gMSAtIHcxO1xuXG4gICAgICByZXR1cm4gdGhpc1xuICAgICAgICAucmdiKFxuICAgICAgICAgIHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG4gICAgICAgICAgdzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG4gICAgICAgICAgdzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpXG4gICAgICAgIClcbiAgICAgICAgLmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG4gICB9LFxuXG4gICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICByZXR1cm4gdGhpcy5yZ2IoKTtcbiAgIH0sXG5cbiAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnJnYigpKTtcbiAgIH1cbn1cblxuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24oc3BhY2UpIHtcbiAgIHZhciB2YWxzID0ge307XG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxzW3NwYWNlLmNoYXJBdChpKV0gPSB0aGlzLnZhbHVlc1tzcGFjZV1baV07XG4gICB9XG4gICBpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT0gMSkge1xuICAgICAgdmFsc1tcImFcIl0gPSB0aGlzLnZhbHVlcy5hbHBoYTtcbiAgIH1cbiAgIC8vIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAwLjR9XG4gICByZXR1cm4gdmFscztcbn1cblxuQ29sb3IucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uKHNwYWNlLCB2YWxzKSB7XG4gICB2YXIgc3BhY2VzID0ge1xuICAgICAgXCJyZ2JcIjogW1wicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCJdLFxuICAgICAgXCJoc2xcIjogW1wiaHVlXCIsIFwic2F0dXJhdGlvblwiLCBcImxpZ2h0bmVzc1wiXSxcbiAgICAgIFwiaHN2XCI6IFtcImh1ZVwiLCBcInNhdHVyYXRpb25cIiwgXCJ2YWx1ZVwiXSxcbiAgICAgIFwiaHdiXCI6IFtcImh1ZVwiLCBcIndoaXRlbmVzc1wiLCBcImJsYWNrbmVzc1wiXSxcbiAgICAgIFwiY215a1wiOiBbXCJjeWFuXCIsIFwibWFnZW50YVwiLCBcInllbGxvd1wiLCBcImJsYWNrXCJdXG4gICB9O1xuXG4gICB2YXIgbWF4ZXMgPSB7XG4gICAgICBcInJnYlwiOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICBcImhzbFwiOiBbMzYwLCAxMDAsIDEwMF0sXG4gICAgICBcImhzdlwiOiBbMzYwLCAxMDAsIDEwMF0sXG4gICAgICBcImh3YlwiOiBbMzYwLCAxMDAsIDEwMF0sXG4gICAgICBcImNteWtcIjogWzEwMCwgMTAwLCAxMDAsIDEwMF1cbiAgIH07XG5cbiAgIHZhciBhbHBoYSA9IDE7XG4gICBpZiAoc3BhY2UgPT0gXCJhbHBoYVwiKSB7XG4gICAgICBhbHBoYSA9IHZhbHM7XG4gICB9XG4gICBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuICAgICAgLy8gWzEwLCAxMCwgMTBdXG4gICAgICB0aGlzLnZhbHVlc1tzcGFjZV0gPSB2YWxzLnNsaWNlKDAsIHNwYWNlLmxlbmd0aCk7XG4gICAgICBhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHNbc3BhY2UuY2hhckF0KDApXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB7cjogMTAsIGc6IDEwLCBiOiAxMH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuICAgICAgfVxuICAgICAgYWxwaGEgPSB2YWxzLmE7XG4gICB9XG4gICBlbHNlIGlmICh2YWxzW3NwYWNlc1tzcGFjZV1bMF1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuICAgICAgdmFyIGNoYW5zID0gc3BhY2VzW3NwYWNlXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tjaGFuc1tpXV07XG4gICAgICB9XG4gICAgICBhbHBoYSA9IHZhbHMuYWxwaGE7XG4gICB9XG4gICB0aGlzLnZhbHVlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChhbHBoYSAhPT0gdW5kZWZpbmVkID8gYWxwaGEgOiB0aGlzLnZhbHVlcy5hbHBoYSkgKSk7XG4gICBpZiAoc3BhY2UgPT0gXCJhbHBoYVwiKSB7XG4gICAgICByZXR1cm47XG4gICB9XG5cbiAgIC8vIGNhcCB2YWx1ZXMgb2YgdGhlIHNwYWNlIHByaW9yIGNvbnZlcnRpbmcgYWxsIHZhbHVlc1xuICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG4gICAgICB0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG4gICB9XG5cbiAgIC8vIGNvbnZlcnQgdG8gYWxsIHRoZSBvdGhlciBjb2xvciBzcGFjZXNcbiAgIGZvciAodmFyIHNuYW1lIGluIHNwYWNlcykge1xuICAgICAgaWYgKHNuYW1lICE9IHNwYWNlKSB7XG4gICAgICAgICB0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKVxuICAgICAgfVxuXG4gICAgICAvLyBjYXAgdmFsdWVzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICB2YXIgY2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc25hbWVdW2ldLCB0aGlzLnZhbHVlc1tzbmFtZV1baV0pKTtcbiAgICAgICAgIHRoaXMudmFsdWVzW3NuYW1lXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcbiAgICAgIH1cbiAgIH1cbiAgIHJldHVybiB0cnVlO1xufVxuXG5Db2xvci5wcm90b3R5cGUuc2V0U3BhY2UgPSBmdW5jdGlvbihzcGFjZSwgYXJncykge1xuICAgdmFyIHZhbHMgPSBhcmdzWzBdO1xuICAgaWYgKHZhbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29sb3IucmdiKClcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlcyhzcGFjZSk7XG4gICB9XG4gICAvLyBjb2xvci5yZ2IoMTAsIDEwLCAxMClcbiAgIGlmICh0eXBlb2YgdmFscyA9PSBcIm51bWJlclwiKSB7XG4gICAgICB2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG4gICB9XG4gICB0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG4gICByZXR1cm4gdGhpcztcbn1cblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbihzcGFjZSwgaW5kZXgsIHZhbCkge1xuICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb2xvci5yZWQoKVxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF07XG4gICB9XG4gICAvLyBjb2xvci5yZWQoMTAwKVxuICAgdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSA9IHZhbDtcbiAgIHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB0aGlzLnZhbHVlc1tzcGFjZV0pO1xuICAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb2xvci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKFwiLi9jb252ZXJzaW9uc1wiKTtcblxudmFyIGNvbnZlcnQgPSBmdW5jdGlvbigpIHtcbiAgIHJldHVybiBuZXcgQ29udmVydGVyKCk7XG59XG5cbmZvciAodmFyIGZ1bmMgaW4gY29udmVyc2lvbnMpIHtcbiAgLy8gZXhwb3J0IFJhdyB2ZXJzaW9uc1xuICBjb252ZXJ0W2Z1bmMgKyBcIlJhd1wiXSA9ICAoZnVuY3Rpb24oZnVuYykge1xuICAgIC8vIGFjY2VwdCBhcnJheSBvciBwbGFpbiBhcmdzXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgICAgaWYgKHR5cGVvZiBhcmcgPT0gXCJudW1iZXJcIilcbiAgICAgICAgYXJnID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBjb252ZXJzaW9uc1tmdW5jXShhcmcpO1xuICAgIH1cbiAgfSkoZnVuYyk7XG5cbiAgdmFyIHBhaXIgPSAvKFxcdyspMihcXHcrKS8uZXhlYyhmdW5jKSxcbiAgICAgIGZyb20gPSBwYWlyWzFdLFxuICAgICAgdG8gPSBwYWlyWzJdO1xuXG4gIC8vIGV4cG9ydCByZ2IyaHNsIGFuZCBbXCJyZ2JcIl1bXCJoc2xcIl1cbiAgY29udmVydFtmcm9tXSA9IGNvbnZlcnRbZnJvbV0gfHwge307XG5cbiAgY29udmVydFtmcm9tXVt0b10gPSBjb252ZXJ0W2Z1bmNdID0gKGZ1bmN0aW9uKGZ1bmMpIHsgXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgICAgaWYgKHR5cGVvZiBhcmcgPT0gXCJudW1iZXJcIilcbiAgICAgICAgYXJnID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIFxuICAgICAgdmFyIHZhbCA9IGNvbnZlcnNpb25zW2Z1bmNdKGFyZyk7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiIHx8IHZhbCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdmFsOyAvLyBrZXl3b3JkXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKVxuICAgICAgICB2YWxbaV0gPSBNYXRoLnJvdW5kKHZhbFtpXSk7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfSkoZnVuYyk7XG59XG5cblxuLyogQ29udmVydGVyIGRvZXMgbGF6eSBjb252ZXJzaW9uIGFuZCBjYWNoaW5nICovXG52YXIgQ29udmVydGVyID0gZnVuY3Rpb24oKSB7XG4gICB0aGlzLmNvbnZzID0ge307XG59O1xuXG4vKiBFaXRoZXIgZ2V0IHRoZSB2YWx1ZXMgZm9yIGEgc3BhY2Ugb3JcbiAgc2V0IHRoZSB2YWx1ZXMgZm9yIGEgc3BhY2UsIGRlcGVuZGluZyBvbiBhcmdzICovXG5Db252ZXJ0ZXIucHJvdG90eXBlLnJvdXRlU3BhY2UgPSBmdW5jdGlvbihzcGFjZSwgYXJncykge1xuICAgdmFyIHZhbHVlcyA9IGFyZ3NbMF07XG4gICBpZiAodmFsdWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbG9yLnJnYigpXG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuICAgfVxuICAgLy8gY29sb3IucmdiKDEwLCAxMCwgMTApXG4gICBpZiAodHlwZW9mIHZhbHVlcyA9PSBcIm51bWJlclwiKSB7XG4gICAgICB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTsgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4gdGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHZhbHVlcyk7XG59O1xuICBcbi8qIFNldCB0aGUgdmFsdWVzIGZvciBhIHNwYWNlLCBpbnZhbGlkYXRpbmcgY2FjaGUgKi9cbkNvbnZlcnRlci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24oc3BhY2UsIHZhbHVlcykge1xuICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xuICAgdGhpcy5jb252cyA9IHt9O1xuICAgdGhpcy5jb252c1tzcGFjZV0gPSB2YWx1ZXM7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qIEdldCB0aGUgdmFsdWVzIGZvciBhIHNwYWNlLiBJZiB0aGVyZSdzIGFscmVhZHlcbiAgYSBjb252ZXJzaW9uIGZvciB0aGUgc3BhY2UsIGZldGNoIGl0LCBvdGhlcndpc2VcbiAgY29tcHV0ZSBpdCAqL1xuQ29udmVydGVyLnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbihzcGFjZSkge1xuICAgdmFyIHZhbHMgPSB0aGlzLmNvbnZzW3NwYWNlXTtcbiAgIGlmICghdmFscykge1xuICAgICAgdmFyIGZzcGFjZSA9IHRoaXMuc3BhY2UsXG4gICAgICAgICAgZnJvbSA9IHRoaXMuY29udnNbZnNwYWNlXTtcbiAgICAgIHZhbHMgPSBjb252ZXJ0W2ZzcGFjZV1bc3BhY2VdKGZyb20pO1xuXG4gICAgICB0aGlzLmNvbnZzW3NwYWNlXSA9IHZhbHM7XG4gICB9XG4gIHJldHVybiB2YWxzO1xufTtcblxuW1wicmdiXCIsIFwiaHNsXCIsIFwiaHN2XCIsIFwiY215a1wiLCBcImtleXdvcmRcIl0uZm9yRWFjaChmdW5jdGlvbihzcGFjZSkge1xuICAgQ29udmVydGVyLnByb3RvdHlwZVtzcGFjZV0gPSBmdW5jdGlvbih2YWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZVNwYWNlKHNwYWNlLCBhcmd1bWVudHMpO1xuICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb2xvci9+L2NvbG9yLWNvbnZlcnQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogTUlUIGxpY2Vuc2UgKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJnYjJoc2w6IHJnYjJoc2wsXG4gIHJnYjJoc3Y6IHJnYjJoc3YsXG4gIHJnYjJod2I6IHJnYjJod2IsXG4gIHJnYjJjbXlrOiByZ2IyY215ayxcbiAgcmdiMmtleXdvcmQ6IHJnYjJrZXl3b3JkLFxuICByZ2IyeHl6OiByZ2IyeHl6LFxuICByZ2IybGFiOiByZ2IybGFiLFxuICByZ2IybGNoOiByZ2IybGNoLFxuXG4gIGhzbDJyZ2I6IGhzbDJyZ2IsXG4gIGhzbDJoc3Y6IGhzbDJoc3YsXG4gIGhzbDJod2I6IGhzbDJod2IsXG4gIGhzbDJjbXlrOiBoc2wyY215ayxcbiAgaHNsMmtleXdvcmQ6IGhzbDJrZXl3b3JkLFxuXG4gIGhzdjJyZ2I6IGhzdjJyZ2IsXG4gIGhzdjJoc2w6IGhzdjJoc2wsXG4gIGhzdjJod2I6IGhzdjJod2IsXG4gIGhzdjJjbXlrOiBoc3YyY215ayxcbiAgaHN2MmtleXdvcmQ6IGhzdjJrZXl3b3JkLFxuXG4gIGh3YjJyZ2I6IGh3YjJyZ2IsXG4gIGh3YjJoc2w6IGh3YjJoc2wsXG4gIGh3YjJoc3Y6IGh3YjJoc3YsXG4gIGh3YjJjbXlrOiBod2IyY215ayxcbiAgaHdiMmtleXdvcmQ6IGh3YjJrZXl3b3JkLFxuXG4gIGNteWsycmdiOiBjbXlrMnJnYixcbiAgY215azJoc2w6IGNteWsyaHNsLFxuICBjbXlrMmhzdjogY215azJoc3YsXG4gIGNteWsyaHdiOiBjbXlrMmh3YixcbiAgY215azJrZXl3b3JkOiBjbXlrMmtleXdvcmQsXG5cbiAga2V5d29yZDJyZ2I6IGtleXdvcmQycmdiLFxuICBrZXl3b3JkMmhzbDoga2V5d29yZDJoc2wsXG4gIGtleXdvcmQyaHN2OiBrZXl3b3JkMmhzdixcbiAga2V5d29yZDJod2I6IGtleXdvcmQyaHdiLFxuICBrZXl3b3JkMmNteWs6IGtleXdvcmQyY215ayxcbiAga2V5d29yZDJsYWI6IGtleXdvcmQybGFiLFxuICBrZXl3b3JkMnh5ejoga2V5d29yZDJ4eXosXG5cbiAgeHl6MnJnYjogeHl6MnJnYixcbiAgeHl6MmxhYjogeHl6MmxhYixcbiAgeHl6MmxjaDogeHl6MmxjaCxcblxuICBsYWIyeHl6OiBsYWIyeHl6LFxuICBsYWIycmdiOiBsYWIycmdiLFxuICBsYWIybGNoOiBsYWIybGNoLFxuXG4gIGxjaDJsYWI6IGxjaDJsYWIsXG4gIGxjaDJ4eXo6IGxjaDJ4eXosXG4gIGxjaDJyZ2I6IGxjaDJyZ2Jcbn1cblxuXG5mdW5jdGlvbiByZ2IyaHNsKHJnYikge1xuICB2YXIgciA9IHJnYlswXS8yNTUsXG4gICAgICBnID0gcmdiWzFdLzI1NSxcbiAgICAgIGIgPSByZ2JbMl0vMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGRlbHRhID0gbWF4IC0gbWluLFxuICAgICAgaCwgcywgbDtcblxuICBpZiAobWF4ID09IG1pbilcbiAgICBoID0gMDtcbiAgZWxzZSBpZiAociA9PSBtYXgpXG4gICAgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgZWxzZSBpZiAoZyA9PSBtYXgpXG4gICAgaCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG4gIGVsc2UgaWYgKGIgPT0gbWF4KVxuICAgIGggPSA0ICsgKHIgLSBnKS8gZGVsdGE7XG5cbiAgaCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuICBpZiAoaCA8IDApXG4gICAgaCArPSAzNjA7XG5cbiAgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuICBpZiAobWF4ID09IG1pbilcbiAgICBzID0gMDtcbiAgZWxzZSBpZiAobCA8PSAwLjUpXG4gICAgcyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG4gIGVsc2VcbiAgICBzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cbiAgcmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn1cblxuZnVuY3Rpb24gcmdiMmhzdihyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0sXG4gICAgICBnID0gcmdiWzFdLFxuICAgICAgYiA9IHJnYlsyXSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBkZWx0YSA9IG1heCAtIG1pbixcbiAgICAgIGgsIHMsIHY7XG5cbiAgaWYgKG1heCA9PSAwKVxuICAgIHMgPSAwO1xuICBlbHNlXG4gICAgcyA9IChkZWx0YS9tYXggKiAxMDAwKS8xMDtcblxuICBpZiAobWF4ID09IG1pbilcbiAgICBoID0gMDtcbiAgZWxzZSBpZiAociA9PSBtYXgpXG4gICAgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgZWxzZSBpZiAoZyA9PSBtYXgpXG4gICAgaCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG4gIGVsc2UgaWYgKGIgPT0gbWF4KVxuICAgIGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXG4gIGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cbiAgaWYgKGggPCAwKVxuICAgIGggKz0gMzYwO1xuXG4gIHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG4gIHJldHVybiBbaCwgcywgdl07XG59XG5cbmZ1bmN0aW9uIHJnYjJod2IocmdiKSB7XG4gIHZhciByID0gcmdiWzBdLFxuICAgICAgZyA9IHJnYlsxXSxcbiAgICAgIGIgPSByZ2JbMl0sXG4gICAgICBoID0gcmdiMmhzbChyZ2IpWzBdLFxuICAgICAgdyA9IDEvMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpLFxuICAgICAgYiA9IDEgLSAxLzI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuICByZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufVxuXG5mdW5jdGlvbiByZ2IyY215ayhyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0gLyAyNTUsXG4gICAgICBnID0gcmdiWzFdIC8gMjU1LFxuICAgICAgYiA9IHJnYlsyXSAvIDI1NSxcbiAgICAgIGMsIG0sIHksIGs7XG5cbiAgayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuICBjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG4gIG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcbiAgeSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuICByZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufVxuXG5mdW5jdGlvbiByZ2Iya2V5d29yZChyZ2IpIHtcbiAgcmV0dXJuIHJldmVyc2VLZXl3b3Jkc1tKU09OLnN0cmluZ2lmeShyZ2IpXTtcbn1cblxuZnVuY3Rpb24gcmdiMnh5eihyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0gLyAyNTUsXG4gICAgICBnID0gcmdiWzFdIC8gMjU1LFxuICAgICAgYiA9IHJnYlsyXSAvIDI1NTtcblxuICAvLyBhc3N1bWUgc1JHQlxuICByID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcbiAgZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG4gIGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG4gIHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuICB2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcbiAgdmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cbiAgcmV0dXJuIFt4ICogMTAwLCB5ICoxMDAsIHogKiAxMDBdO1xufVxuXG5mdW5jdGlvbiByZ2IybGFiKHJnYikge1xuICB2YXIgeHl6ID0gcmdiMnh5eihyZ2IpLFxuICAgICAgICB4ID0geHl6WzBdLFxuICAgICAgICB5ID0geHl6WzFdLFxuICAgICAgICB6ID0geHl6WzJdLFxuICAgICAgICBsLCBhLCBiO1xuXG4gIHggLz0gOTUuMDQ3O1xuICB5IC89IDEwMDtcbiAgeiAvPSAxMDguODgzO1xuXG4gIHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxLzMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuICB5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMS8zKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcbiAgeiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEvMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cbiAgbCA9ICgxMTYgKiB5KSAtIDE2O1xuICBhID0gNTAwICogKHggLSB5KTtcbiAgYiA9IDIwMCAqICh5IC0geik7XG5cbiAgcmV0dXJuIFtsLCBhLCBiXTtcbn1cblxuZnVuY3Rpb24gcmdiMmxjaChhcmdzKSB7XG4gIHJldHVybiBsYWIybGNoKHJnYjJsYWIoYXJncykpO1xufVxuXG5mdW5jdGlvbiBoc2wycmdiKGhzbCkge1xuICB2YXIgaCA9IGhzbFswXSAvIDM2MCxcbiAgICAgIHMgPSBoc2xbMV0gLyAxMDAsXG4gICAgICBsID0gaHNsWzJdIC8gMTAwLFxuICAgICAgdDEsIHQyLCB0MywgcmdiLCB2YWw7XG5cbiAgaWYgKHMgPT0gMCkge1xuICAgIHZhbCA9IGwgKiAyNTU7XG4gICAgcmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcbiAgfVxuXG4gIGlmIChsIDwgMC41KVxuICAgIHQyID0gbCAqICgxICsgcyk7XG4gIGVsc2VcbiAgICB0MiA9IGwgKyBzIC0gbCAqIHM7XG4gIHQxID0gMiAqIGwgLSB0MjtcblxuICByZ2IgPSBbMCwgMCwgMF07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgdDMgPSBoICsgMSAvIDMgKiAtIChpIC0gMSk7XG4gICAgdDMgPCAwICYmIHQzKys7XG4gICAgdDMgPiAxICYmIHQzLS07XG5cbiAgICBpZiAoNiAqIHQzIDwgMSlcbiAgICAgIHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuICAgIGVsc2UgaWYgKDIgKiB0MyA8IDEpXG4gICAgICB2YWwgPSB0MjtcbiAgICBlbHNlIGlmICgzICogdDMgPCAyKVxuICAgICAgdmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuICAgIGVsc2VcbiAgICAgIHZhbCA9IHQxO1xuXG4gICAgcmdiW2ldID0gdmFsICogMjU1O1xuICB9XG5cbiAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gaHNsMmhzdihoc2wpIHtcbiAgdmFyIGggPSBoc2xbMF0sXG4gICAgICBzID0gaHNsWzFdIC8gMTAwLFxuICAgICAgbCA9IGhzbFsyXSAvIDEwMCxcbiAgICAgIHN2LCB2O1xuXG4gIGlmKGwgPT09IDApIHtcbiAgICAgIC8vIG5vIG5lZWQgdG8gZG8gY2FsYyBvbiBibGFja1xuICAgICAgLy8gYWxzbyBhdm9pZHMgZGl2aWRlIGJ5IDAgZXJyb3JcbiAgICAgIHJldHVybiBbMCwgMCwgMF07XG4gIH1cblxuICBsICo9IDI7XG4gIHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG4gIHYgPSAobCArIHMpIC8gMjtcbiAgc3YgPSAoMiAqIHMpIC8gKGwgKyBzKTtcbiAgcmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIGhzbDJod2IoYXJncykge1xuICByZXR1cm4gcmdiMmh3Yihoc2wycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHNsMmNteWsoYXJncykge1xuICByZXR1cm4gcmdiMmNteWsoaHNsMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGhzbDJrZXl3b3JkKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJrZXl3b3JkKGhzbDJyZ2IoYXJncykpO1xufVxuXG5cbmZ1bmN0aW9uIGhzdjJyZ2IoaHN2KSB7XG4gIHZhciBoID0gaHN2WzBdIC8gNjAsXG4gICAgICBzID0gaHN2WzFdIC8gMTAwLFxuICAgICAgdiA9IGhzdlsyXSAvIDEwMCxcbiAgICAgIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cbiAgdmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKSxcbiAgICAgIHAgPSAyNTUgKiB2ICogKDEgLSBzKSxcbiAgICAgIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKSxcbiAgICAgIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKSxcbiAgICAgIHYgPSAyNTUgKiB2O1xuXG4gIHN3aXRjaChoaSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBbdiwgdCwgcF07XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFtxLCB2LCBwXTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW3AsIHYsIHRdO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBbcCwgcSwgdl07XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFt0LCBwLCB2XTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gW3YsIHAsIHFdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhzdjJoc2woaHN2KSB7XG4gIHZhciBoID0gaHN2WzBdLFxuICAgICAgcyA9IGhzdlsxXSAvIDEwMCxcbiAgICAgIHYgPSBoc3ZbMl0gLyAxMDAsXG4gICAgICBzbCwgbDtcblxuICBsID0gKDIgLSBzKSAqIHY7XG4gIHNsID0gcyAqIHY7XG4gIHNsIC89IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuICBzbCA9IHNsIHx8IDA7XG4gIGwgLz0gMjtcbiAgcmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIGhzdjJod2IoYXJncykge1xuICByZXR1cm4gcmdiMmh3Yihoc3YycmdiKGFyZ3MpKVxufVxuXG5mdW5jdGlvbiBoc3YyY215ayhhcmdzKSB7XG4gIHJldHVybiByZ2IyY215ayhoc3YycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHN2MmtleXdvcmQoYXJncykge1xuICByZXR1cm4gcmdiMmtleXdvcmQoaHN2MnJnYihhcmdzKSk7XG59XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuZnVuY3Rpb24gaHdiMnJnYihod2IpIHtcbiAgdmFyIGggPSBod2JbMF0gLyAzNjAsXG4gICAgICB3aCA9IGh3YlsxXSAvIDEwMCxcbiAgICAgIGJsID0gaHdiWzJdIC8gMTAwLFxuICAgICAgcmF0aW8gPSB3aCArIGJsLFxuICAgICAgaSwgdiwgZiwgbjtcblxuICAvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG4gIGlmIChyYXRpbyA+IDEpIHtcbiAgICB3aCAvPSByYXRpbztcbiAgICBibCAvPSByYXRpbztcbiAgfVxuXG4gIGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcbiAgdiA9IDEgLSBibDtcbiAgZiA9IDYgKiBoIC0gaTtcbiAgaWYgKChpICYgMHgwMSkgIT0gMCkge1xuICAgIGYgPSAxIC0gZjtcbiAgfVxuICBuID0gd2ggKyBmICogKHYgLSB3aCk7ICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG4gIHN3aXRjaCAoaSkge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSA2OlxuICAgIGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuICAgIGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuICAgIGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuICAgIGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuICAgIGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuICAgIGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn1cblxuZnVuY3Rpb24gaHdiMmhzbChhcmdzKSB7XG4gIHJldHVybiByZ2IyaHNsKGh3YjJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBod2IyaHN2KGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJoc3YoaHdiMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGh3YjJjbXlrKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJjbXlrKGh3YjJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBod2Iya2V5d29yZChhcmdzKSB7XG4gIHJldHVybiByZ2Iya2V5d29yZChod2IycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gY215azJyZ2IoY215aykge1xuICB2YXIgYyA9IGNteWtbMF0gLyAxMDAsXG4gICAgICBtID0gY215a1sxXSAvIDEwMCxcbiAgICAgIHkgPSBjbXlrWzJdIC8gMTAwLFxuICAgICAgayA9IGNteWtbM10gLyAxMDAsXG4gICAgICByLCBnLCBiO1xuXG4gIHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcbiAgZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuICBiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG4gIHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59XG5cbmZ1bmN0aW9uIGNteWsyaHNsKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJoc2woY215azJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBjbXlrMmhzdihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHN2KGNteWsycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gY215azJod2IoYXJncykge1xuICByZXR1cm4gcmdiMmh3YihjbXlrMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGNteWsya2V5d29yZChhcmdzKSB7XG4gIHJldHVybiByZ2Iya2V5d29yZChjbXlrMnJnYihhcmdzKSk7XG59XG5cblxuZnVuY3Rpb24geHl6MnJnYih4eXopIHtcbiAgdmFyIHggPSB4eXpbMF0gLyAxMDAsXG4gICAgICB5ID0geHl6WzFdIC8gMTAwLFxuICAgICAgeiA9IHh5elsyXSAvIDEwMCxcbiAgICAgIHIsIGcsIGI7XG5cbiAgciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuICBnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcbiAgYiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cbiAgLy8gYXNzdW1lIHNSR0JcbiAgciA9IHIgPiAwLjAwMzEzMDggPyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcbiAgICA6IHIgPSAociAqIDEyLjkyKTtcblxuICBnID0gZyA+IDAuMDAzMTMwOCA/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuICAgIDogZyA9IChnICogMTIuOTIpO1xuXG4gIGIgPSBiID4gMC4wMDMxMzA4ID8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG4gICAgOiBiID0gKGIgKiAxMi45Mik7XG5cbiAgciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcbiAgZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcbiAgYiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuICByZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufVxuXG5mdW5jdGlvbiB4eXoybGFiKHh5eikge1xuICB2YXIgeCA9IHh5elswXSxcbiAgICAgIHkgPSB4eXpbMV0sXG4gICAgICB6ID0geHl6WzJdLFxuICAgICAgbCwgYSwgYjtcblxuICB4IC89IDk1LjA0NztcbiAgeSAvPSAxMDA7XG4gIHogLz0gMTA4Ljg4MztcblxuICB4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMS8zKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcbiAgeSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEvMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG4gIHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxLzMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG4gIGwgPSAoMTE2ICogeSkgLSAxNjtcbiAgYSA9IDUwMCAqICh4IC0geSk7XG4gIGIgPSAyMDAgKiAoeSAtIHopO1xuXG4gIHJldHVybiBbbCwgYSwgYl07XG59XG5cbmZ1bmN0aW9uIHh5ejJsY2goYXJncykge1xuICByZXR1cm4gbGFiMmxjaCh4eXoybGFiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eihsYWIpIHtcbiAgdmFyIGwgPSBsYWJbMF0sXG4gICAgICBhID0gbGFiWzFdLFxuICAgICAgYiA9IGxhYlsyXSxcbiAgICAgIHgsIHksIHosIHkyO1xuXG4gIGlmIChsIDw9IDgpIHtcbiAgICB5ID0gKGwgKiAxMDApIC8gOTAzLjM7XG4gICAgeTIgPSAoNy43ODcgKiAoeSAvIDEwMCkpICsgKDE2IC8gMTE2KTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gMTAwICogTWF0aC5wb3coKGwgKyAxNikgLyAxMTYsIDMpO1xuICAgIHkyID0gTWF0aC5wb3coeSAvIDEwMCwgMS8zKTtcbiAgfVxuXG4gIHggPSB4IC8gOTUuMDQ3IDw9IDAuMDA4ODU2ID8geCA9ICg5NS4wNDcgKiAoKGEgLyA1MDApICsgeTIgLSAoMTYgLyAxMTYpKSkgLyA3Ljc4NyA6IDk1LjA0NyAqIE1hdGgucG93KChhIC8gNTAwKSArIHkyLCAzKTtcblxuICB6ID0geiAvIDEwOC44ODMgPD0gMC4wMDg4NTkgPyB6ID0gKDEwOC44ODMgKiAoeTIgLSAoYiAvIDIwMCkgLSAoMTYgLyAxMTYpKSkgLyA3Ljc4NyA6IDEwOC44ODMgKiBNYXRoLnBvdyh5MiAtIChiIC8gMjAwKSwgMyk7XG5cbiAgcmV0dXJuIFt4LCB5LCB6XTtcbn1cblxuZnVuY3Rpb24gbGFiMmxjaChsYWIpIHtcbiAgdmFyIGwgPSBsYWJbMF0sXG4gICAgICBhID0gbGFiWzFdLFxuICAgICAgYiA9IGxhYlsyXSxcbiAgICAgIGhyLCBoLCBjO1xuXG4gIGhyID0gTWF0aC5hdGFuMihiLCBhKTtcbiAgaCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG4gIGlmIChoIDwgMCkge1xuICAgIGggKz0gMzYwO1xuICB9XG4gIGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gIHJldHVybiBbbCwgYywgaF07XG59XG5cbmZ1bmN0aW9uIGxhYjJyZ2IoYXJncykge1xuICByZXR1cm4geHl6MnJnYihsYWIyeHl6KGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gbGNoMmxhYihsY2gpIHtcbiAgdmFyIGwgPSBsY2hbMF0sXG4gICAgICBjID0gbGNoWzFdLFxuICAgICAgaCA9IGxjaFsyXSxcbiAgICAgIGEsIGIsIGhyO1xuXG4gIGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICBhID0gYyAqIE1hdGguY29zKGhyKTtcbiAgYiA9IGMgKiBNYXRoLnNpbihocik7XG4gIHJldHVybiBbbCwgYSwgYl07XG59XG5cbmZ1bmN0aW9uIGxjaDJ4eXooYXJncykge1xuICByZXR1cm4gbGFiMnh5eihsY2gybGFiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gbGNoMnJnYihhcmdzKSB7XG4gIHJldHVybiBsYWIycmdiKGxjaDJsYWIoYXJncykpO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMnJnYihrZXl3b3JkKSB7XG4gIHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJoc2woYXJncykge1xuICByZXR1cm4gcmdiMmhzbChrZXl3b3JkMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQyaHN2KGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJoc3Yoa2V5d29yZDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMmh3YihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHdiKGtleXdvcmQycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJjbXlrKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJjbXlrKGtleXdvcmQycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJsYWIoYXJncykge1xuICByZXR1cm4gcmdiMmxhYihrZXl3b3JkMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQyeHl6KGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJ4eXooa2V5d29yZDJyZ2IoYXJncykpO1xufVxuXG52YXIgY3NzS2V5d29yZHMgPSB7XG4gIGFsaWNlYmx1ZTogIFsyNDAsMjQ4LDI1NV0sXG4gIGFudGlxdWV3aGl0ZTogWzI1MCwyMzUsMjE1XSxcbiAgYXF1YTogWzAsMjU1LDI1NV0sXG4gIGFxdWFtYXJpbmU6IFsxMjcsMjU1LDIxMl0sXG4gIGF6dXJlOiAgWzI0MCwyNTUsMjU1XSxcbiAgYmVpZ2U6ICBbMjQ1LDI0NSwyMjBdLFxuICBiaXNxdWU6IFsyNTUsMjI4LDE5Nl0sXG4gIGJsYWNrOiAgWzAsMCwwXSxcbiAgYmxhbmNoZWRhbG1vbmQ6IFsyNTUsMjM1LDIwNV0sXG4gIGJsdWU6IFswLDAsMjU1XSxcbiAgYmx1ZXZpb2xldDogWzEzOCw0MywyMjZdLFxuICBicm93bjogIFsxNjUsNDIsNDJdLFxuICBidXJseXdvb2Q6ICBbMjIyLDE4NCwxMzVdLFxuICBjYWRldGJsdWU6ICBbOTUsMTU4LDE2MF0sXG4gIGNoYXJ0cmV1c2U6IFsxMjcsMjU1LDBdLFxuICBjaG9jb2xhdGU6ICBbMjEwLDEwNSwzMF0sXG4gIGNvcmFsOiAgWzI1NSwxMjcsODBdLFxuICBjb3JuZmxvd2VyYmx1ZTogWzEwMCwxNDksMjM3XSxcbiAgY29ybnNpbGs6IFsyNTUsMjQ4LDIyMF0sXG4gIGNyaW1zb246ICBbMjIwLDIwLDYwXSxcbiAgY3lhbjogWzAsMjU1LDI1NV0sXG4gIGRhcmtibHVlOiBbMCwwLDEzOV0sXG4gIGRhcmtjeWFuOiBbMCwxMzksMTM5XSxcbiAgZGFya2dvbGRlbnJvZDogIFsxODQsMTM0LDExXSxcbiAgZGFya2dyYXk6IFsxNjksMTY5LDE2OV0sXG4gIGRhcmtncmVlbjogIFswLDEwMCwwXSxcbiAgZGFya2dyZXk6IFsxNjksMTY5LDE2OV0sXG4gIGRhcmtraGFraTogIFsxODksMTgzLDEwN10sXG4gIGRhcmttYWdlbnRhOiAgWzEzOSwwLDEzOV0sXG4gIGRhcmtvbGl2ZWdyZWVuOiBbODUsMTA3LDQ3XSxcbiAgZGFya29yYW5nZTogWzI1NSwxNDAsMF0sXG4gIGRhcmtvcmNoaWQ6IFsxNTMsNTAsMjA0XSxcbiAgZGFya3JlZDogIFsxMzksMCwwXSxcbiAgZGFya3NhbG1vbjogWzIzMywxNTAsMTIyXSxcbiAgZGFya3NlYWdyZWVuOiBbMTQzLDE4OCwxNDNdLFxuICBkYXJrc2xhdGVibHVlOiAgWzcyLDYxLDEzOV0sXG4gIGRhcmtzbGF0ZWdyYXk6ICBbNDcsNzksNzldLFxuICBkYXJrc2xhdGVncmV5OiAgWzQ3LDc5LDc5XSxcbiAgZGFya3R1cnF1b2lzZTogIFswLDIwNiwyMDldLFxuICBkYXJrdmlvbGV0OiBbMTQ4LDAsMjExXSxcbiAgZGVlcHBpbms6IFsyNTUsMjAsMTQ3XSxcbiAgZGVlcHNreWJsdWU6ICBbMCwxOTEsMjU1XSxcbiAgZGltZ3JheTogIFsxMDUsMTA1LDEwNV0sXG4gIGRpbWdyZXk6ICBbMTA1LDEwNSwxMDVdLFxuICBkb2RnZXJibHVlOiBbMzAsMTQ0LDI1NV0sXG4gIGZpcmVicmljazogIFsxNzgsMzQsMzRdLFxuICBmbG9yYWx3aGl0ZTogIFsyNTUsMjUwLDI0MF0sXG4gIGZvcmVzdGdyZWVuOiAgWzM0LDEzOSwzNF0sXG4gIGZ1Y2hzaWE6ICBbMjU1LDAsMjU1XSxcbiAgZ2FpbnNib3JvOiAgWzIyMCwyMjAsMjIwXSxcbiAgZ2hvc3R3aGl0ZTogWzI0OCwyNDgsMjU1XSxcbiAgZ29sZDogWzI1NSwyMTUsMF0sXG4gIGdvbGRlbnJvZDogIFsyMTgsMTY1LDMyXSxcbiAgZ3JheTogWzEyOCwxMjgsMTI4XSxcbiAgZ3JlZW46ICBbMCwxMjgsMF0sXG4gIGdyZWVueWVsbG93OiAgWzE3MywyNTUsNDddLFxuICBncmV5OiBbMTI4LDEyOCwxMjhdLFxuICBob25leWRldzogWzI0MCwyNTUsMjQwXSxcbiAgaG90cGluazogIFsyNTUsMTA1LDE4MF0sXG4gIGluZGlhbnJlZDogIFsyMDUsOTIsOTJdLFxuICBpbmRpZ286IFs3NSwwLDEzMF0sXG4gIGl2b3J5OiAgWzI1NSwyNTUsMjQwXSxcbiAga2hha2k6ICBbMjQwLDIzMCwxNDBdLFxuICBsYXZlbmRlcjogWzIzMCwyMzAsMjUwXSxcbiAgbGF2ZW5kZXJibHVzaDogIFsyNTUsMjQwLDI0NV0sXG4gIGxhd25ncmVlbjogIFsxMjQsMjUyLDBdLFxuICBsZW1vbmNoaWZmb246IFsyNTUsMjUwLDIwNV0sXG4gIGxpZ2h0Ymx1ZTogIFsxNzMsMjE2LDIzMF0sXG4gIGxpZ2h0Y29yYWw6IFsyNDAsMTI4LDEyOF0sXG4gIGxpZ2h0Y3lhbjogIFsyMjQsMjU1LDI1NV0sXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLDI1MCwyMTBdLFxuICBsaWdodGdyYXk6ICBbMjExLDIxMSwyMTFdLFxuICBsaWdodGdyZWVuOiBbMTQ0LDIzOCwxNDRdLFxuICBsaWdodGdyZXk6ICBbMjExLDIxMSwyMTFdLFxuICBsaWdodHBpbms6ICBbMjU1LDE4MiwxOTNdLFxuICBsaWdodHNhbG1vbjogIFsyNTUsMTYwLDEyMl0sXG4gIGxpZ2h0c2VhZ3JlZW46ICBbMzIsMTc4LDE3MF0sXG4gIGxpZ2h0c2t5Ymx1ZTogWzEzNSwyMDYsMjUwXSxcbiAgbGlnaHRzbGF0ZWdyYXk6IFsxMTksMTM2LDE1M10sXG4gIGxpZ2h0c2xhdGVncmV5OiBbMTE5LDEzNiwxNTNdLFxuICBsaWdodHN0ZWVsYmx1ZTogWzE3NiwxOTYsMjIyXSxcbiAgbGlnaHR5ZWxsb3c6ICBbMjU1LDI1NSwyMjRdLFxuICBsaW1lOiBbMCwyNTUsMF0sXG4gIGxpbWVncmVlbjogIFs1MCwyMDUsNTBdLFxuICBsaW5lbjogIFsyNTAsMjQwLDIzMF0sXG4gIG1hZ2VudGE6ICBbMjU1LDAsMjU1XSxcbiAgbWFyb29uOiBbMTI4LDAsMF0sXG4gIG1lZGl1bWFxdWFtYXJpbmU6IFsxMDIsMjA1LDE3MF0sXG4gIG1lZGl1bWJsdWU6IFswLDAsMjA1XSxcbiAgbWVkaXVtb3JjaGlkOiBbMTg2LDg1LDIxMV0sXG4gIG1lZGl1bXB1cnBsZTogWzE0NywxMTIsMjE5XSxcbiAgbWVkaXVtc2VhZ3JlZW46IFs2MCwxNzksMTEzXSxcbiAgbWVkaXVtc2xhdGVibHVlOiAgWzEyMywxMDQsMjM4XSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46ICBbMCwyNTAsMTU0XSxcbiAgbWVkaXVtdHVycXVvaXNlOiAgWzcyLDIwOSwyMDRdLFxuICBtZWRpdW12aW9sZXRyZWQ6ICBbMTk5LDIxLDEzM10sXG4gIG1pZG5pZ2h0Ymx1ZTogWzI1LDI1LDExMl0sXG4gIG1pbnRjcmVhbTogIFsyNDUsMjU1LDI1MF0sXG4gIG1pc3R5cm9zZTogIFsyNTUsMjI4LDIyNV0sXG4gIG1vY2Nhc2luOiBbMjU1LDIyOCwxODFdLFxuICBuYXZham93aGl0ZTogIFsyNTUsMjIyLDE3M10sXG4gIG5hdnk6IFswLDAsMTI4XSxcbiAgb2xkbGFjZTogIFsyNTMsMjQ1LDIzMF0sXG4gIG9saXZlOiAgWzEyOCwxMjgsMF0sXG4gIG9saXZlZHJhYjogIFsxMDcsMTQyLDM1XSxcbiAgb3JhbmdlOiBbMjU1LDE2NSwwXSxcbiAgb3JhbmdlcmVkOiAgWzI1NSw2OSwwXSxcbiAgb3JjaGlkOiBbMjE4LDExMiwyMTRdLFxuICBwYWxlZ29sZGVucm9kOiAgWzIzOCwyMzIsMTcwXSxcbiAgcGFsZWdyZWVuOiAgWzE1MiwyNTEsMTUyXSxcbiAgcGFsZXR1cnF1b2lzZTogIFsxNzUsMjM4LDIzOF0sXG4gIHBhbGV2aW9sZXRyZWQ6ICBbMjE5LDExMiwxNDddLFxuICBwYXBheWF3aGlwOiBbMjU1LDIzOSwyMTNdLFxuICBwZWFjaHB1ZmY6ICBbMjU1LDIxOCwxODVdLFxuICBwZXJ1OiBbMjA1LDEzMyw2M10sXG4gIHBpbms6IFsyNTUsMTkyLDIwM10sXG4gIHBsdW06IFsyMjEsMTYwLDIyMV0sXG4gIHBvd2RlcmJsdWU6IFsxNzYsMjI0LDIzMF0sXG4gIHB1cnBsZTogWzEyOCwwLDEyOF0sXG4gIHJlYmVjY2FwdXJwbGU6IFsxMDIsIDUxLCAxNTNdLFxuICByZWQ6ICBbMjU1LDAsMF0sXG4gIHJvc3licm93bjogIFsxODgsMTQzLDE0M10sXG4gIHJveWFsYmx1ZTogIFs2NSwxMDUsMjI1XSxcbiAgc2FkZGxlYnJvd246ICBbMTM5LDY5LDE5XSxcbiAgc2FsbW9uOiBbMjUwLDEyOCwxMTRdLFxuICBzYW5keWJyb3duOiBbMjQ0LDE2NCw5Nl0sXG4gIHNlYWdyZWVuOiBbNDYsMTM5LDg3XSxcbiAgc2Vhc2hlbGw6IFsyNTUsMjQ1LDIzOF0sXG4gIHNpZW5uYTogWzE2MCw4Miw0NV0sXG4gIHNpbHZlcjogWzE5MiwxOTIsMTkyXSxcbiAgc2t5Ymx1ZTogIFsxMzUsMjA2LDIzNV0sXG4gIHNsYXRlYmx1ZTogIFsxMDYsOTAsMjA1XSxcbiAgc2xhdGVncmF5OiAgWzExMiwxMjgsMTQ0XSxcbiAgc2xhdGVncmV5OiAgWzExMiwxMjgsMTQ0XSxcbiAgc25vdzogWzI1NSwyNTAsMjUwXSxcbiAgc3ByaW5nZ3JlZW46ICBbMCwyNTUsMTI3XSxcbiAgc3RlZWxibHVlOiAgWzcwLDEzMCwxODBdLFxuICB0YW46ICBbMjEwLDE4MCwxNDBdLFxuICB0ZWFsOiBbMCwxMjgsMTI4XSxcbiAgdGhpc3RsZTogIFsyMTYsMTkxLDIxNl0sXG4gIHRvbWF0bzogWzI1NSw5OSw3MV0sXG4gIHR1cnF1b2lzZTogIFs2NCwyMjQsMjA4XSxcbiAgdmlvbGV0OiBbMjM4LDEzMCwyMzhdLFxuICB3aGVhdDogIFsyNDUsMjIyLDE3OV0sXG4gIHdoaXRlOiAgWzI1NSwyNTUsMjU1XSxcbiAgd2hpdGVzbW9rZTogWzI0NSwyNDUsMjQ1XSxcbiAgeWVsbG93OiBbMjU1LDI1NSwwXSxcbiAgeWVsbG93Z3JlZW46ICBbMTU0LDIwNSw1MF1cbn07XG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuICByZXZlcnNlS2V5d29yZHNbSlNPTi5zdHJpbmdpZnkoY3NzS2V5d29yZHNba2V5XSldID0ga2V5O1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29sb3Ivfi9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBnZXRSZ2JhOiBnZXRSZ2JhLFxuICAgZ2V0SHNsYTogZ2V0SHNsYSxcbiAgIGdldFJnYjogZ2V0UmdiLFxuICAgZ2V0SHNsOiBnZXRIc2wsXG4gICBnZXRId2I6IGdldEh3YixcbiAgIGdldEFscGhhOiBnZXRBbHBoYSxcblxuICAgaGV4U3RyaW5nOiBoZXhTdHJpbmcsXG4gICByZ2JTdHJpbmc6IHJnYlN0cmluZyxcbiAgIHJnYmFTdHJpbmc6IHJnYmFTdHJpbmcsXG4gICBwZXJjZW50U3RyaW5nOiBwZXJjZW50U3RyaW5nLFxuICAgcGVyY2VudGFTdHJpbmc6IHBlcmNlbnRhU3RyaW5nLFxuICAgaHNsU3RyaW5nOiBoc2xTdHJpbmcsXG4gICBoc2xhU3RyaW5nOiBoc2xhU3RyaW5nLFxuICAgaHdiU3RyaW5nOiBod2JTdHJpbmcsXG4gICBrZXl3b3JkOiBrZXl3b3JkXG59XG5cbmZ1bmN0aW9uIGdldFJnYmEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGFiYnIgPSAgL14jKFthLWZBLUYwLTldezN9KSQvLFxuICAgICAgIGhleCA9ICAvXiMoW2EtZkEtRjAtOV17Nn0pJC8sXG4gICAgICAgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIGtleXdvcmQgPSAvKFxcRCspLztcblxuICAgdmFyIHJnYiA9IFswLCAwLCAwXSxcbiAgICAgICBhID0gMSxcbiAgICAgICBtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkgKiAyLCBpICogMiArIDIpLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG4gICAgICBpZiAobWF0Y2hbMV0gPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG4gICAgICBpZiAoIXJnYikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmdiW2ldID0gc2NhbGUocmdiW2ldLCAwLCAyNTUpO1xuICAgfVxuICAgaWYgKCFhICYmIGEgIT0gMCkge1xuICAgICAgYSA9IDE7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIGEgPSBzY2FsZShhLCAwLCAxKTtcbiAgIH1cbiAgIHJnYlszXSA9IGE7XG4gICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBnZXRIc2xhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICBzID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgbCA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SHdiKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHcgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBiID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHcsIGIsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZ2Ioc3RyaW5nKSB7XG4gICB2YXIgcmdiYSA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIHJldHVybiByZ2JhICYmIHJnYmEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEhzbChzdHJpbmcpIHtcbiAgdmFyIGhzbGEgPSBnZXRIc2xhKHN0cmluZyk7XG4gIHJldHVybiBoc2xhICYmIGhzbGEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEFscGhhKHN0cmluZykge1xuICAgdmFyIHZhbHMgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICBpZiAodmFscykge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHNsYShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRId2Ioc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG59XG5cbi8vIGdlbmVyYXRvcnNcbmZ1bmN0aW9uIGhleFN0cmluZyhyZ2IpIHtcbiAgIHJldHVybiBcIiNcIiArIGhleERvdWJsZShyZ2JbMF0pICsgaGV4RG91YmxlKHJnYlsxXSlcbiAgICAgICAgICAgICAgKyBoZXhEb3VibGUocmdiWzJdKTtcbn1cblxuZnVuY3Rpb24gcmdiU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChyZ2JhWzNdICE9PSB1bmRlZmluZWQgPyByZ2JhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdXG4gICAgICAgICAgICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG5cbiAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlLCBcIiArIChhbHBoYSB8fCByZ2JhWzNdIHx8IDEpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbFN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAoaHNsYVszXSAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbChcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChoc2xhWzNdICE9PSB1bmRlZmluZWQgPyBoc2xhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSwgXCJcbiAgICAgICAgICAgKyBhbHBoYSArIFwiKVwiO1xufVxuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuZnVuY3Rpb24gaHdiU3RyaW5nKGh3YiwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChod2JbM10gIT09IHVuZGVmaW5lZCA/IGh3YlszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHdiKFwiICsgaHdiWzBdICsgXCIsIFwiICsgaHdiWzFdICsgXCIlLCBcIiArIGh3YlsyXSArIFwiJVwiXG4gICAgICAgICAgICsgKGFscGhhICE9PSB1bmRlZmluZWQgJiYgYWxwaGEgIT09IDEgPyBcIiwgXCIgKyBhbHBoYSA6IFwiXCIpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gc2NhbGUobnVtLCBtaW4sIG1heCkge1xuICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/IFwiMFwiICsgc3RyIDogc3RyO1xufVxuXG5cbi8vY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcbiAgIHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb2xvci9+L2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWxpY2VibHVlXCI6IFtcblx0XHQyNDAsXG5cdFx0MjQ4LFxuXHRcdDI1NVxuXHRdLFxuXHRcImFudGlxdWV3aGl0ZVwiOiBbXG5cdFx0MjUwLFxuXHRcdDIzNSxcblx0XHQyMTVcblx0XSxcblx0XCJhcXVhXCI6IFtcblx0XHQwLFxuXHRcdDI1NSxcblx0XHQyNTVcblx0XSxcblx0XCJhcXVhbWFyaW5lXCI6IFtcblx0XHQxMjcsXG5cdFx0MjU1LFxuXHRcdDIxMlxuXHRdLFxuXHRcImF6dXJlXCI6IFtcblx0XHQyNDAsXG5cdFx0MjU1LFxuXHRcdDI1NVxuXHRdLFxuXHRcImJlaWdlXCI6IFtcblx0XHQyNDUsXG5cdFx0MjQ1LFxuXHRcdDIyMFxuXHRdLFxuXHRcImJpc3F1ZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDIyOCxcblx0XHQxOTZcblx0XSxcblx0XCJibGFja1wiOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XSxcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbXG5cdFx0MjU1LFxuXHRcdDIzNSxcblx0XHQyMDVcblx0XSxcblx0XCJibHVlXCI6IFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MjU1XG5cdF0sXG5cdFwiYmx1ZXZpb2xldFwiOiBbXG5cdFx0MTM4LFxuXHRcdDQzLFxuXHRcdDIyNlxuXHRdLFxuXHRcImJyb3duXCI6IFtcblx0XHQxNjUsXG5cdFx0NDIsXG5cdFx0NDJcblx0XSxcblx0XCJidXJseXdvb2RcIjogW1xuXHRcdDIyMixcblx0XHQxODQsXG5cdFx0MTM1XG5cdF0sXG5cdFwiY2FkZXRibHVlXCI6IFtcblx0XHQ5NSxcblx0XHQxNTgsXG5cdFx0MTYwXG5cdF0sXG5cdFwiY2hhcnRyZXVzZVwiOiBbXG5cdFx0MTI3LFxuXHRcdDI1NSxcblx0XHQwXG5cdF0sXG5cdFwiY2hvY29sYXRlXCI6IFtcblx0XHQyMTAsXG5cdFx0MTA1LFxuXHRcdDMwXG5cdF0sXG5cdFwiY29yYWxcIjogW1xuXHRcdDI1NSxcblx0XHQxMjcsXG5cdFx0ODBcblx0XSxcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbXG5cdFx0MTAwLFxuXHRcdDE0OSxcblx0XHQyMzdcblx0XSxcblx0XCJjb3Juc2lsa1wiOiBbXG5cdFx0MjU1LFxuXHRcdDI0OCxcblx0XHQyMjBcblx0XSxcblx0XCJjcmltc29uXCI6IFtcblx0XHQyMjAsXG5cdFx0MjAsXG5cdFx0NjBcblx0XSxcblx0XCJjeWFuXCI6IFtcblx0XHQwLFxuXHRcdDI1NSxcblx0XHQyNTVcblx0XSxcblx0XCJkYXJrYmx1ZVwiOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDEzOVxuXHRdLFxuXHRcImRhcmtjeWFuXCI6IFtcblx0XHQwLFxuXHRcdDEzOSxcblx0XHQxMzlcblx0XSxcblx0XCJkYXJrZ29sZGVucm9kXCI6IFtcblx0XHQxODQsXG5cdFx0MTM0LFxuXHRcdDExXG5cdF0sXG5cdFwiZGFya2dyYXlcIjogW1xuXHRcdDE2OSxcblx0XHQxNjksXG5cdFx0MTY5XG5cdF0sXG5cdFwiZGFya2dyZWVuXCI6IFtcblx0XHQwLFxuXHRcdDEwMCxcblx0XHQwXG5cdF0sXG5cdFwiZGFya2dyZXlcIjogW1xuXHRcdDE2OSxcblx0XHQxNjksXG5cdFx0MTY5XG5cdF0sXG5cdFwiZGFya2toYWtpXCI6IFtcblx0XHQxODksXG5cdFx0MTgzLFxuXHRcdDEwN1xuXHRdLFxuXHRcImRhcmttYWdlbnRhXCI6IFtcblx0XHQxMzksXG5cdFx0MCxcblx0XHQxMzlcblx0XSxcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbXG5cdFx0ODUsXG5cdFx0MTA3LFxuXHRcdDQ3XG5cdF0sXG5cdFwiZGFya29yYW5nZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDE0MCxcblx0XHQwXG5cdF0sXG5cdFwiZGFya29yY2hpZFwiOiBbXG5cdFx0MTUzLFxuXHRcdDUwLFxuXHRcdDIwNFxuXHRdLFxuXHRcImRhcmtyZWRcIjogW1xuXHRcdDEzOSxcblx0XHQwLFxuXHRcdDBcblx0XSxcblx0XCJkYXJrc2FsbW9uXCI6IFtcblx0XHQyMzMsXG5cdFx0MTUwLFxuXHRcdDEyMlxuXHRdLFxuXHRcImRhcmtzZWFncmVlblwiOiBbXG5cdFx0MTQzLFxuXHRcdDE4OCxcblx0XHQxNDNcblx0XSxcblx0XCJkYXJrc2xhdGVibHVlXCI6IFtcblx0XHQ3Mixcblx0XHQ2MSxcblx0XHQxMzlcblx0XSxcblx0XCJkYXJrc2xhdGVncmF5XCI6IFtcblx0XHQ0Nyxcblx0XHQ3OSxcblx0XHQ3OVxuXHRdLFxuXHRcImRhcmtzbGF0ZWdyZXlcIjogW1xuXHRcdDQ3LFxuXHRcdDc5LFxuXHRcdDc5XG5cdF0sXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbXG5cdFx0MCxcblx0XHQyMDYsXG5cdFx0MjA5XG5cdF0sXG5cdFwiZGFya3Zpb2xldFwiOiBbXG5cdFx0MTQ4LFxuXHRcdDAsXG5cdFx0MjExXG5cdF0sXG5cdFwiZGVlcHBpbmtcIjogW1xuXHRcdDI1NSxcblx0XHQyMCxcblx0XHQxNDdcblx0XSxcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbXG5cdFx0MCxcblx0XHQxOTEsXG5cdFx0MjU1XG5cdF0sXG5cdFwiZGltZ3JheVwiOiBbXG5cdFx0MTA1LFxuXHRcdDEwNSxcblx0XHQxMDVcblx0XSxcblx0XCJkaW1ncmV5XCI6IFtcblx0XHQxMDUsXG5cdFx0MTA1LFxuXHRcdDEwNVxuXHRdLFxuXHRcImRvZGdlcmJsdWVcIjogW1xuXHRcdDMwLFxuXHRcdDE0NCxcblx0XHQyNTVcblx0XSxcblx0XCJmaXJlYnJpY2tcIjogW1xuXHRcdDE3OCxcblx0XHQzNCxcblx0XHQzNFxuXHRdLFxuXHRcImZsb3JhbHdoaXRlXCI6IFtcblx0XHQyNTUsXG5cdFx0MjUwLFxuXHRcdDI0MFxuXHRdLFxuXHRcImZvcmVzdGdyZWVuXCI6IFtcblx0XHQzNCxcblx0XHQxMzksXG5cdFx0MzRcblx0XSxcblx0XCJmdWNoc2lhXCI6IFtcblx0XHQyNTUsXG5cdFx0MCxcblx0XHQyNTVcblx0XSxcblx0XCJnYWluc2Jvcm9cIjogW1xuXHRcdDIyMCxcblx0XHQyMjAsXG5cdFx0MjIwXG5cdF0sXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbXG5cdFx0MjQ4LFxuXHRcdDI0OCxcblx0XHQyNTVcblx0XSxcblx0XCJnb2xkXCI6IFtcblx0XHQyNTUsXG5cdFx0MjE1LFxuXHRcdDBcblx0XSxcblx0XCJnb2xkZW5yb2RcIjogW1xuXHRcdDIxOCxcblx0XHQxNjUsXG5cdFx0MzJcblx0XSxcblx0XCJncmF5XCI6IFtcblx0XHQxMjgsXG5cdFx0MTI4LFxuXHRcdDEyOFxuXHRdLFxuXHRcImdyZWVuXCI6IFtcblx0XHQwLFxuXHRcdDEyOCxcblx0XHQwXG5cdF0sXG5cdFwiZ3JlZW55ZWxsb3dcIjogW1xuXHRcdDE3Myxcblx0XHQyNTUsXG5cdFx0NDdcblx0XSxcblx0XCJncmV5XCI6IFtcblx0XHQxMjgsXG5cdFx0MTI4LFxuXHRcdDEyOFxuXHRdLFxuXHRcImhvbmV5ZGV3XCI6IFtcblx0XHQyNDAsXG5cdFx0MjU1LFxuXHRcdDI0MFxuXHRdLFxuXHRcImhvdHBpbmtcIjogW1xuXHRcdDI1NSxcblx0XHQxMDUsXG5cdFx0MTgwXG5cdF0sXG5cdFwiaW5kaWFucmVkXCI6IFtcblx0XHQyMDUsXG5cdFx0OTIsXG5cdFx0OTJcblx0XSxcblx0XCJpbmRpZ29cIjogW1xuXHRcdDc1LFxuXHRcdDAsXG5cdFx0MTMwXG5cdF0sXG5cdFwiaXZvcnlcIjogW1xuXHRcdDI1NSxcblx0XHQyNTUsXG5cdFx0MjQwXG5cdF0sXG5cdFwia2hha2lcIjogW1xuXHRcdDI0MCxcblx0XHQyMzAsXG5cdFx0MTQwXG5cdF0sXG5cdFwibGF2ZW5kZXJcIjogW1xuXHRcdDIzMCxcblx0XHQyMzAsXG5cdFx0MjUwXG5cdF0sXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbXG5cdFx0MjU1LFxuXHRcdDI0MCxcblx0XHQyNDVcblx0XSxcblx0XCJsYXduZ3JlZW5cIjogW1xuXHRcdDEyNCxcblx0XHQyNTIsXG5cdFx0MFxuXHRdLFxuXHRcImxlbW9uY2hpZmZvblwiOiBbXG5cdFx0MjU1LFxuXHRcdDI1MCxcblx0XHQyMDVcblx0XSxcblx0XCJsaWdodGJsdWVcIjogW1xuXHRcdDE3Myxcblx0XHQyMTYsXG5cdFx0MjMwXG5cdF0sXG5cdFwibGlnaHRjb3JhbFwiOiBbXG5cdFx0MjQwLFxuXHRcdDEyOCxcblx0XHQxMjhcblx0XSxcblx0XCJsaWdodGN5YW5cIjogW1xuXHRcdDIyNCxcblx0XHQyNTUsXG5cdFx0MjU1XG5cdF0sXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogW1xuXHRcdDI1MCxcblx0XHQyNTAsXG5cdFx0MjEwXG5cdF0sXG5cdFwibGlnaHRncmF5XCI6IFtcblx0XHQyMTEsXG5cdFx0MjExLFxuXHRcdDIxMVxuXHRdLFxuXHRcImxpZ2h0Z3JlZW5cIjogW1xuXHRcdDE0NCxcblx0XHQyMzgsXG5cdFx0MTQ0XG5cdF0sXG5cdFwibGlnaHRncmV5XCI6IFtcblx0XHQyMTEsXG5cdFx0MjExLFxuXHRcdDIxMVxuXHRdLFxuXHRcImxpZ2h0cGlua1wiOiBbXG5cdFx0MjU1LFxuXHRcdDE4Mixcblx0XHQxOTNcblx0XSxcblx0XCJsaWdodHNhbG1vblwiOiBbXG5cdFx0MjU1LFxuXHRcdDE2MCxcblx0XHQxMjJcblx0XSxcblx0XCJsaWdodHNlYWdyZWVuXCI6IFtcblx0XHQzMixcblx0XHQxNzgsXG5cdFx0MTcwXG5cdF0sXG5cdFwibGlnaHRza3libHVlXCI6IFtcblx0XHQxMzUsXG5cdFx0MjA2LFxuXHRcdDI1MFxuXHRdLFxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFtcblx0XHQxMTksXG5cdFx0MTM2LFxuXHRcdDE1M1xuXHRdLFxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFtcblx0XHQxMTksXG5cdFx0MTM2LFxuXHRcdDE1M1xuXHRdLFxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFtcblx0XHQxNzYsXG5cdFx0MTk2LFxuXHRcdDIyMlxuXHRdLFxuXHRcImxpZ2h0eWVsbG93XCI6IFtcblx0XHQyNTUsXG5cdFx0MjU1LFxuXHRcdDIyNFxuXHRdLFxuXHRcImxpbWVcIjogW1xuXHRcdDAsXG5cdFx0MjU1LFxuXHRcdDBcblx0XSxcblx0XCJsaW1lZ3JlZW5cIjogW1xuXHRcdDUwLFxuXHRcdDIwNSxcblx0XHQ1MFxuXHRdLFxuXHRcImxpbmVuXCI6IFtcblx0XHQyNTAsXG5cdFx0MjQwLFxuXHRcdDIzMFxuXHRdLFxuXHRcIm1hZ2VudGFcIjogW1xuXHRcdDI1NSxcblx0XHQwLFxuXHRcdDI1NVxuXHRdLFxuXHRcIm1hcm9vblwiOiBbXG5cdFx0MTI4LFxuXHRcdDAsXG5cdFx0MFxuXHRdLFxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogW1xuXHRcdDEwMixcblx0XHQyMDUsXG5cdFx0MTcwXG5cdF0sXG5cdFwibWVkaXVtYmx1ZVwiOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDIwNVxuXHRdLFxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbXG5cdFx0MTg2LFxuXHRcdDg1LFxuXHRcdDIxMVxuXHRdLFxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbXG5cdFx0MTQ3LFxuXHRcdDExMixcblx0XHQyMTlcblx0XSxcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbXG5cdFx0NjAsXG5cdFx0MTc5LFxuXHRcdDExM1xuXHRdLFxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbXG5cdFx0MTIzLFxuXHRcdDEwNCxcblx0XHQyMzhcblx0XSxcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbXG5cdFx0MCxcblx0XHQyNTAsXG5cdFx0MTU0XG5cdF0sXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFtcblx0XHQ3Mixcblx0XHQyMDksXG5cdFx0MjA0XG5cdF0sXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFtcblx0XHQxOTksXG5cdFx0MjEsXG5cdFx0MTMzXG5cdF0sXG5cdFwibWlkbmlnaHRibHVlXCI6IFtcblx0XHQyNSxcblx0XHQyNSxcblx0XHQxMTJcblx0XSxcblx0XCJtaW50Y3JlYW1cIjogW1xuXHRcdDI0NSxcblx0XHQyNTUsXG5cdFx0MjUwXG5cdF0sXG5cdFwibWlzdHlyb3NlXCI6IFtcblx0XHQyNTUsXG5cdFx0MjI4LFxuXHRcdDIyNVxuXHRdLFxuXHRcIm1vY2Nhc2luXCI6IFtcblx0XHQyNTUsXG5cdFx0MjI4LFxuXHRcdDE4MVxuXHRdLFxuXHRcIm5hdmFqb3doaXRlXCI6IFtcblx0XHQyNTUsXG5cdFx0MjIyLFxuXHRcdDE3M1xuXHRdLFxuXHRcIm5hdnlcIjogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQxMjhcblx0XSxcblx0XCJvbGRsYWNlXCI6IFtcblx0XHQyNTMsXG5cdFx0MjQ1LFxuXHRcdDIzMFxuXHRdLFxuXHRcIm9saXZlXCI6IFtcblx0XHQxMjgsXG5cdFx0MTI4LFxuXHRcdDBcblx0XSxcblx0XCJvbGl2ZWRyYWJcIjogW1xuXHRcdDEwNyxcblx0XHQxNDIsXG5cdFx0MzVcblx0XSxcblx0XCJvcmFuZ2VcIjogW1xuXHRcdDI1NSxcblx0XHQxNjUsXG5cdFx0MFxuXHRdLFxuXHRcIm9yYW5nZXJlZFwiOiBbXG5cdFx0MjU1LFxuXHRcdDY5LFxuXHRcdDBcblx0XSxcblx0XCJvcmNoaWRcIjogW1xuXHRcdDIxOCxcblx0XHQxMTIsXG5cdFx0MjE0XG5cdF0sXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbXG5cdFx0MjM4LFxuXHRcdDIzMixcblx0XHQxNzBcblx0XSxcblx0XCJwYWxlZ3JlZW5cIjogW1xuXHRcdDE1Mixcblx0XHQyNTEsXG5cdFx0MTUyXG5cdF0sXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbXG5cdFx0MTc1LFxuXHRcdDIzOCxcblx0XHQyMzhcblx0XSxcblx0XCJwYWxldmlvbGV0cmVkXCI6IFtcblx0XHQyMTksXG5cdFx0MTEyLFxuXHRcdDE0N1xuXHRdLFxuXHRcInBhcGF5YXdoaXBcIjogW1xuXHRcdDI1NSxcblx0XHQyMzksXG5cdFx0MjEzXG5cdF0sXG5cdFwicGVhY2hwdWZmXCI6IFtcblx0XHQyNTUsXG5cdFx0MjE4LFxuXHRcdDE4NVxuXHRdLFxuXHRcInBlcnVcIjogW1xuXHRcdDIwNSxcblx0XHQxMzMsXG5cdFx0NjNcblx0XSxcblx0XCJwaW5rXCI6IFtcblx0XHQyNTUsXG5cdFx0MTkyLFxuXHRcdDIwM1xuXHRdLFxuXHRcInBsdW1cIjogW1xuXHRcdDIyMSxcblx0XHQxNjAsXG5cdFx0MjIxXG5cdF0sXG5cdFwicG93ZGVyYmx1ZVwiOiBbXG5cdFx0MTc2LFxuXHRcdDIyNCxcblx0XHQyMzBcblx0XSxcblx0XCJwdXJwbGVcIjogW1xuXHRcdDEyOCxcblx0XHQwLFxuXHRcdDEyOFxuXHRdLFxuXHRcInJlYmVjY2FwdXJwbGVcIjogW1xuXHRcdDEwMixcblx0XHQ1MSxcblx0XHQxNTNcblx0XSxcblx0XCJyZWRcIjogW1xuXHRcdDI1NSxcblx0XHQwLFxuXHRcdDBcblx0XSxcblx0XCJyb3N5YnJvd25cIjogW1xuXHRcdDE4OCxcblx0XHQxNDMsXG5cdFx0MTQzXG5cdF0sXG5cdFwicm95YWxibHVlXCI6IFtcblx0XHQ2NSxcblx0XHQxMDUsXG5cdFx0MjI1XG5cdF0sXG5cdFwic2FkZGxlYnJvd25cIjogW1xuXHRcdDEzOSxcblx0XHQ2OSxcblx0XHQxOVxuXHRdLFxuXHRcInNhbG1vblwiOiBbXG5cdFx0MjUwLFxuXHRcdDEyOCxcblx0XHQxMTRcblx0XSxcblx0XCJzYW5keWJyb3duXCI6IFtcblx0XHQyNDQsXG5cdFx0MTY0LFxuXHRcdDk2XG5cdF0sXG5cdFwic2VhZ3JlZW5cIjogW1xuXHRcdDQ2LFxuXHRcdDEzOSxcblx0XHQ4N1xuXHRdLFxuXHRcInNlYXNoZWxsXCI6IFtcblx0XHQyNTUsXG5cdFx0MjQ1LFxuXHRcdDIzOFxuXHRdLFxuXHRcInNpZW5uYVwiOiBbXG5cdFx0MTYwLFxuXHRcdDgyLFxuXHRcdDQ1XG5cdF0sXG5cdFwic2lsdmVyXCI6IFtcblx0XHQxOTIsXG5cdFx0MTkyLFxuXHRcdDE5MlxuXHRdLFxuXHRcInNreWJsdWVcIjogW1xuXHRcdDEzNSxcblx0XHQyMDYsXG5cdFx0MjM1XG5cdF0sXG5cdFwic2xhdGVibHVlXCI6IFtcblx0XHQxMDYsXG5cdFx0OTAsXG5cdFx0MjA1XG5cdF0sXG5cdFwic2xhdGVncmF5XCI6IFtcblx0XHQxMTIsXG5cdFx0MTI4LFxuXHRcdDE0NFxuXHRdLFxuXHRcInNsYXRlZ3JleVwiOiBbXG5cdFx0MTEyLFxuXHRcdDEyOCxcblx0XHQxNDRcblx0XSxcblx0XCJzbm93XCI6IFtcblx0XHQyNTUsXG5cdFx0MjUwLFxuXHRcdDI1MFxuXHRdLFxuXHRcInNwcmluZ2dyZWVuXCI6IFtcblx0XHQwLFxuXHRcdDI1NSxcblx0XHQxMjdcblx0XSxcblx0XCJzdGVlbGJsdWVcIjogW1xuXHRcdDcwLFxuXHRcdDEzMCxcblx0XHQxODBcblx0XSxcblx0XCJ0YW5cIjogW1xuXHRcdDIxMCxcblx0XHQxODAsXG5cdFx0MTQwXG5cdF0sXG5cdFwidGVhbFwiOiBbXG5cdFx0MCxcblx0XHQxMjgsXG5cdFx0MTI4XG5cdF0sXG5cdFwidGhpc3RsZVwiOiBbXG5cdFx0MjE2LFxuXHRcdDE5MSxcblx0XHQyMTZcblx0XSxcblx0XCJ0b21hdG9cIjogW1xuXHRcdDI1NSxcblx0XHQ5OSxcblx0XHQ3MVxuXHRdLFxuXHRcInR1cnF1b2lzZVwiOiBbXG5cdFx0NjQsXG5cdFx0MjI0LFxuXHRcdDIwOFxuXHRdLFxuXHRcInZpb2xldFwiOiBbXG5cdFx0MjM4LFxuXHRcdDEzMCxcblx0XHQyMzhcblx0XSxcblx0XCJ3aGVhdFwiOiBbXG5cdFx0MjQ1LFxuXHRcdDIyMixcblx0XHQxNzlcblx0XSxcblx0XCJ3aGl0ZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDI1NSxcblx0XHQyNTVcblx0XSxcblx0XCJ3aGl0ZXNtb2tlXCI6IFtcblx0XHQyNDUsXG5cdFx0MjQ1LFxuXHRcdDI0NVxuXHRdLFxuXHRcInllbGxvd1wiOiBbXG5cdFx0MjU1LFxuXHRcdDI1NSxcblx0XHQwXG5cdF0sXG5cdFwieWVsbG93Z3JlZW5cIjogW1xuXHRcdDE1NCxcblx0XHQyMDUsXG5cdFx0NTBcblx0XVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL34vY29sb3ItbmFtZS9pbmRleC5qc29uXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xMC5cclxuICovXHJcblxyXG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnYWxzYyc7XHJcbmltcG9ydCAqIGFzIGFnZW50IGZyb20gXCJzdXBlcmFnZW50XCI7XHJcbmltcG9ydCAqIGFzIGFzeW5jIGZyb20gXCJhc3luY1wiO1xyXG5cclxuaW1wb3J0IHt1cmwsZm59IGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xyXG5pbXBvcnQgU2FtcGxlRmllbGQgZnJvbSBcIi4vLi4vdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gXCIuL0FuaW1hdGlvbk1hbmFnZXIuanNcIjtcclxuXHJcbmNsYXNzIFNhbXBsZU1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcbiAgICAvKipAcmV0dXJuIHtzdHJpbmd9Ki9cclxuICAgIGdldCBDT05GSUdfTE9BREVEKCl7cmV0dXJuIFwiQ09ORklHX0xPQURFRFwiO307XHJcbiAgICAvKipAcmV0dXJuIHtzdHJpbmd9Ki9cclxuICAgIGdldCBQUkVfUkVBRFlfU0FNUExFKCl7cmV0dXJuIFwiUFJFX1JFQURZX1NBTVBMRVwiO307XHJcbiAgICAvKipAcmV0dXJuIHtzdHJpbmd9Ki9cclxuICAgIC8vZ2V0IFJFQURZX1NBTVBMRSgpe3JldHVybiBcIlJFQURZX1NBTVBMRVwiO307XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICBpZighKFNhbXBsZU1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgU2FtcGxlTWFuYWdlcikpe1xyXG4gICAgICAgICAgICBTYW1wbGVNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTYW1wbGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTYW1wbGVNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zYW1wbGVzRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuc2FtcGxlc0RpY3QgPSB7fTsvL+S+i+WtkOS7o+eggeaWh+S7tlxyXG4gICAgICAgIHRoaXMuY3VyclNhbXBsZVNjcmlwdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyU2FtcGxlSUQgPSBudWxsO1xyXG4gICAgICAgIGFnZW50LmdldChcImRpc3QvcG9zdF9kYXRhLmpzb25cIikudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNEYXRhID0gSlNPTi5wYXJzZShyZXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNEaWN0W1wiSEVBRFwiXSA9IHRoaXMuc2FtcGxlc0RhdGEucG9zdHNbMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0lkRGljdCA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgaWQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNEYXRhLnBvc3RzLmZvckVhY2goKHBvc3QpPT57XHJcbiAgICAgICAgICAgICAgICBwb3N0LmFjdGl2ZVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwb3N0LmlkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICBpZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVzRGljdFtpZCtwb3N0LnRpdGxlK3Bvc3QuZGF0ZV0gPSBwb3N0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVzSWREaWN0W3Bvc3QuaWRdID0gcG9zdDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpbnNpc2hMb2FkQ29uZmlnKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hZGRMaXN0ZW5lcih0aGlzLlJFQURZX1NBTVBMRSx0aGlzLnJlYWR5U2FtcGxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgZmluc2lzaExvYWRDb25maWcoKXtcclxuICAgICAgICB0aGlzLmVtaXQodGhpcy5DT05GSUdfTE9BREVEKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRvU2FtcGxlKFwiSEVBRFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUb1NhbXBsZShoYXNob3JpZCxjYil7XHJcbiAgICAgICAgdmFyIHNhbXBsZSA9IHRoaXMuc2FtcGxlc0RpY3RbaGFzaG9yaWRdO1xyXG4gICAgICAgIGlmKCFzYW1wbGUpe1xyXG4gICAgICAgICAgICBzYW1wbGUgPSB0aGlzLnNhbXBsZXNJZERpY3RbaGFzaG9yaWRdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihzYW1wbGUpe1xyXG4gICAgICAgICAgICBpZighc2FtcGxlW1wibWFyZGRvd25cIl0gJiYgIXNhbXBsZVtcInNjcmlwdFwiXSl7XHJcbiAgICAgICAgICAgICAgICBhc3luYy5zZXJpZXMoW1xyXG4gICAgICAgICAgICAgICAgICAgIChuZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudC5nZXQodXJsLmpvaW4oXCJkaXN0L3Bvc3RcIixzYW1wbGUucGF0aCxcIi9FbnRyeS5qc1wiKSkuZW5kKChlcnIscmVzKT0+e25leHQoZXJyLHJlcy50ZXh0KTt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChuZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudC5nZXQodXJsLmpvaW4oXCJzcmMtcG9zdC9cIixzYW1wbGUucGF0aCxcIk5vdGUubWRcIikpLmVuZCgoZXJyLHJlcyk9PntuZXh0KGVycixyZXMudGV4dCk7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSwoZXJyLCByZXN1bHRzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNfc2NyaXB0ID0gcmVzdWx0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzX21hcmtkb3duID0gcmVzdWx0c1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZhbC5hcHBseSh0aGlzLCBbXCJ2YXIgc2NyaXB0ID1cIiArIHJlc19zY3JpcHRdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNjcmlwdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzY3JpcHQucHJvdG90eXBlICYmIHNjcmlwdC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTYW1wbGVGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVbXCJzY3JpcHRcIl0gPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibG9hZCBzYW1wbGUgc2NyaXB0IGVycm9yXCIsIHNhbXBsZS5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlW1wibWFya2Rvd25cIl09cmVzX21hcmtkb3duO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVSZWFkeVNhbXBsZShzYW1wbGUsY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgY2I9PT1cImZ1bmN0aW9uXCIpe2NiKCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlUmVhZHlTYW1wbGUoc2FtcGxlLGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmVSZWFkeVNhbXBsZShzYW1wbGUsY2Ipe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJwcmVSZWFkeVNhbXBsZVwiKVxyXG4gICAgICAgIHRoaXMuc2FtcGxlc0RhdGEucG9zdHMuZm9yRWFjaCgocG9zdCk9PntcclxuICAgICAgICAgICAgcG9zdC5hY3RpdmVTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzYW1wbGUuYWN0aXZlU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiBjYj09PVwiZnVuY3Rpb25cIil7Y2IoKTt9XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLlBSRV9SRUFEWV9TQU1QTEUse3NhbXBsZTpzYW1wbGV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkeVNhbXBsZShpZCxkYXRhKXtcclxuICAgICAgICBpZihpZD09PXRoaXMuY3VyclNhbXBsZUlEKXJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJTYW1wbGVJRD1pZDtcclxuXHJcbiAgICAgICAgdmFyIHNhbXBsZSA9IHRoaXMuc2FtcGxlc0lkRGljdFtpZF07XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VyclNhbXBsZVNjcmlwdCl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclNhbXBsZVNjcmlwdC5kZXN0cnVjdCgpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJTYW1wbGVTY3JpcHQubm90SW1wbGVtZW50T25EZXN0cnVjdCl7XHJcbiAgICAgICAgICAgICAgICBBbmltYXRpb25NYW5hZ2VyLnN0b3AodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHNhbXBsZSl7XHJcbiAgICAgICAgICAgIGlmKCFzYW1wbGUucnVuaW5nU2NyaXB0KXtcclxuICAgICAgICAgICAgICAgIHNhbXBsZS5ydW5pbmdTY3JpcHQgPSBuZXcgc2FtcGxlLnNjcmlwdChzYW1wbGUuaWQsdXJsLmpvaW4oXCJzcmMtcG9zdC9cIixzYW1wbGUucGF0aCksdXJsLmpvaW4oXCJkaXN0L3Bvc3RcIixzYW1wbGUucGF0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNhbXBsZS5ydW5pbmdTY3JpcHQubGF1bmNoKGRhdGEuY2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyU2FtcGxlU2NyaXB0ID0gc2FtcGxlLnJ1bmluZ1NjcmlwdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZU1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9TYW1wbGVNYW5hZ2VyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5FdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcIik7XHJcbi8vZXhwb3J0cy5BamF4ICA9IHJlcXVpcmUoXCIuL2Rpc3QvYWpheC9BamF4UHJveHkuanNcIilcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2VudHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF91dGlsc0pzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbi8vdmFyIGV2ZW50c01hcCA9IHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCI/U3ltYm9sKCk6XCJfX2V2ZW50c01hcF9fXCI7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0pzKTtcblxudmFyIGV2ZW50c01hcCA9IFwiX19ldmVudHNNYXBfX1wiO1xuXG52YXIgRXZlbnREaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudERpc3BhdGNoZXIpO1xuXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICog5rS+5Y+R5LiA5Liq5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cblxuICAgIF9jcmVhdGVDbGFzcyhFdmVudERpc3BhdGNoZXIsIFt7XG4gICAgICAgIGtleTogXCJlbWl0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRtYXAgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRtYXApKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHV0aWxzLm5vdGlmeUFycmF5KGV2ZW50bWFwLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/lOWbnuaJgOacieWbnuiwg+aWueazlVxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImxpc3RlbmVyc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubWFwKGZ1bmN0aW9uIChiaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluLmNhbGxiYWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJoYXNMaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzW2V2ZW50c01hcF1bZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbZXZlbnRzTWFwXVtldmVudF0ubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOS4gOWPquS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB0aGlzT2JqZWN0XHJcbiAgICAgICAgICogQHBhcmFtIHByaW9yaXR5XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiYWRkTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCwgbnVsbCwgcHJpb3JpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56e76Zmk5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW1vdmVMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgICAgICAgICB1dGlscy51bnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnp7vpmaTmiYDmnInkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW1vdmVBbGxMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9kyznroDmmJPop6blj5HlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2TLOWUr+S4gOinpuWPkeWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uY2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIG51bGwsIG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlcjtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnREaXNwYXRjaGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVYyWlc1MGN5OUZkbVZ1ZEVScGMzQmhkR05vWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUjBFc1dVRkJXU3hEUVVGRE96czdPenM3T3pzN096dDFRa0ZEVlN4WlFVRlpPenM3TzBsQlFYWkNMRXRCUVVzN08wRkJSMnBDTEVsQlFVa3NVMEZCVXl4SFFVRkhMR1ZCUVdVc1EwRkJRenM3U1VGRE1VSXNaVUZCWlR0QlFVTk9MR0ZCUkZRc1pVRkJaU3hIUVVOSU96aENRVVJhTEdWQlFXVTdPMEZCUldJc1dVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTjRRanM3T3pzN096czdhVUpCU0VNc1pVRkJaVHM3WlVGVllpeGpRVUZETEV0QlFVc3NSVUZCVnp0QlFVTnFRaXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEzUkRMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN2EwUkJSbXhDTEVsQlFVazdRVUZCU2l4M1FrRkJTVHM3TzBGQlIxZ3NjVUpCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkJPMkZCUTNCRE8xTkJRMG83T3pzN096czdPenRsUVU5UkxHMUNRVUZETEV0QlFVc3NSVUZCUlR0QlFVTmlMR2RDUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGNFTXNaMEpCUVVjc1EwRkJReXhOUVVGTkxFVkJRVU03UVVGRFVDeHpRa0ZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOYUxHOUNRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzJGQlEyNURPMEZCUTBRc2JVSkJRVThzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlRMRWRCUVVjc1JVRkJRenRCUVVNelFpeDFRa0ZCVHl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRE8yRkJRM1pDTEVOQlFVTXNRMEZCUXp0VFFVTk9PenM3WlVGRlZ5eHpRa0ZCUXl4TFFVRkxMRVZCUVVNN1FVRkRaaXhuUWtGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlF6dEJRVUZETEhWQ1FVRlBMRXRCUVVzc1EwRkJRenRoUVVGRE8wRkJRekZETEcxQ1FVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhEUVVGRE8xTkJRekZET3pzN096czdPenM3T3p0bFFWTlZMSEZDUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNWVUZCVlN4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVNdlF5eHBRa0ZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMU5CUTNCR096czdPenM3T3pzN08yVkJVV0VzZDBKQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVU3UVVGRGVFTXNhVUpCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVMEZEZEVVN096czdPenM3TzJWQlRXZENMREpDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU55UWl4blFrRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVNdlFqczdPenM3T3pzN08yVkJUME1zV1VGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkZPMEZCUTJoQ0xHbENRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1UwRkRlRVE3T3pzN096czdPenRsUVU5SExHTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlR0QlFVTnNRaXhwUWtGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTm9SanM3TzFkQmJrWkRMR1ZCUVdVN096dHhRa0Z6Ums0c1pVRkJaU0lzSW1acGJHVWlPaUpsZG1WdWRITXZSWFpsYm5SRWFYTndZWFJqYUdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhISmNiaUFxSUVOeVpXRjBaV1FnWW5rZ2RHOXRiWGxhV2swZ2IyNGdNakF4TlM4NEx6UXVYSEpjYmlBcUwxeHlYRzVjSW5WelpTQnpkSEpwWTNSY0lqdGNjbHh1YVcxd2IzSjBJQ29nWVhNZ2RYUnBiSE1nWm5KdmJTQmNJaTR2ZFhScGJITXVhbk5jSWp0Y2NseHVYSEpjYmk4dmRtRnlJR1YyWlc1MGMwMWhjQ0E5SUhSNWNHVnZaaUJUZVcxaWIydzlQVDFjSW1aMWJtTjBhVzl1WENJL1UzbHRZbTlzS0NrNlhDSmZYMlYyWlc1MGMwMWhjRjlmWENJN1hISmNiblpoY2lCbGRtVnVkSE5OWVhBZ1BTQmNJbDlmWlhabGJuUnpUV0Z3WDE5Y0lqdGNjbHh1WTJ4aGMzTWdSWFpsYm5SRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE5iWlhabGJuUnpUV0Z3WFNBOUlIdDlPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2c1clMrNVkrUjVMaUE1TGlxNUxxTDVMdTJYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaWFpsYm5SY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCaGNtZHpYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJR1Z0YVhRb1pYWmxiblFzSUM0dUxtRnlaM01wSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWlhabGJuUnRZWEFnUFNCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaEJjbkpoZVM1cGMwRnljbUY1S0dWMlpXNTBiV0Z3S1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTV1YjNScFpubEJjbkpoZVNobGRtVnVkRzFoY0N3Z1lYSm5jeWxjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEb3Y1VGxtNTdtaVlEbW5JbmxtNTdvc0lQbWxybm1zNVZjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdleXA5WEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUd4cGMzUmxibVZ5Y3lobGRtVnVkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ5WlhOMWJIUWdQU0IwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZE8xeHlYRzRnSUNBZ0lDQWdJR2xtS0NGeVpYTjFiSFFwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0JiWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdGxkbVZ1ZEhOTllYQmRXMlYyWlc1MFhTQTlJSEpsYzNWc2REdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkQzV0WVhBb1puVnVZM1JwYjI0b1ltbHVLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHSnBiaTVqWVd4c1ltRmphenRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JvWVhOTWFYTjBaVzVsY25Nb1pYWmxiblFwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZEtYdHlaWFIxY200Z1ptRnNjMlU3ZlZ4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRMbXhsYm1kMGFENHdPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2c1cmU3NVlxZzVMaUE1WStxNUw2bTVaQ3M1Wm1vWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmpZV3hzWW1GamExeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElIUm9hWE5QWW1wbFkzUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQndjbWx2Y21sMGVWeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQmhaR1JNYVhOMFpXNWxjaWhsZG1WdWRDd2dZMkZzYkdKaFkyc3NJSFJvYVhOUFltcGxZM1FzSUhCeWFXOXlhWFI1S1NCN1hISmNiaUFnSUNBZ0lDQWdkWFJwYkhNdWNtVm5hWE4wVG05MGFXWjVLSFJvYVhOYlpYWmxiblJ6VFdGd1hTd2daWFpsYm5Rc0lHTmhiR3hpWVdOckxDQjBhR2x6VDJKcVpXTjBMQ0J1ZFd4c0xDQndjbWx2Y21sMGVTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG5wN3ZwbWFUa3VJRGxqNnJrdnFibGtLemxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElHTmhiR3hpWVdOclhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2RHaHBjMDlpYW1WamRGeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnlaVzF2ZG1WTWFYTjBaVzVsY2lobGRtVnVkQ3dnWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRcElIdGNjbHh1SUNBZ0lDQWdJQ0IxZEdsc2N5NTFibkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZENrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEbnA3dnBtYVRtaVlEbW5Jbmt2cWJsa0t6bG1haGNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCeVpXMXZkbVZCYkd4TWFYTjBaVzVsY2lobGRtVnVkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE5iWlhabGJuUnpUV0Z3WFZ0bGRtVnVkRjBnUFNCYlhUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlPVzlreXpucm9EbW1KUG9wNmJsajVIbG1haGNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUdOaGJHeGlZV05yWEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUc5dUtHVjJaVzUwTENCallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFYwYVd4ekxuSmxaMmx6ZEU1dmRHbG1lU2gwYUdselcyVjJaVzUwYzAxaGNGMHNJR1YyWlc1MExDQmpZV3hzWW1GamF5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRGx2Wk1zNVpTdjVMaUE2S2VtNVkrUjVabW9YSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaWFpsYm5SY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCallXeHNZbUZqYTF4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCdmJtTmxLR1YyWlc1MExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhWMGFXeHpMbkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheXdnYm5Wc2JDd2diblZzYkN3Z2JuVnNiQ3dnZEhKMVpTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRVYyWlc1MFJHbHpjR0YwWTJobGNqc2lYU3dpYzI5MWNtTmxVbTl2ZENJNklpOXpiM1Z5WTJVdkluMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTkuXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZWdpc3ROb3RpZnkgPSByZWdpc3ROb3RpZnk7XG5leHBvcnRzLnVucmVnaXN0Tm90aWZ5ID0gdW5yZWdpc3ROb3RpZnk7XG5leHBvcnRzLm5vdGlmeSA9IG5vdGlmeTtcbmV4cG9ydHMubm90aWZ5QXJyYXkgPSBub3RpZnlBcnJheTtcblxuZnVuY3Rpb24gcmVnaXN0Tm90aWZ5KG5vdGlmeW1hcCwgbmFtZSwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHBhcmFtLCBwcmlvcml0eSwgb25jZSkge1xuICAgIC8vLHJlc2VydmU/OmFueVxuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKSBub3RpZnltYXBbbmFtZV0gPSBbXTtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuXG4gICAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGluc2VydEluZGV4ID0gLTE7XG4gICAgdmFyIGJpbjtcblxuICAgIGlmIChwcmlvcml0eSA9PT0gdW5kZWZpbmVkKSBwcmlvcml0eSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBiaW4gPSBhcnJbaV07XG4gICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvL+mYsuatoumHjeWkjeaPkuWFpVxuICAgICAgICB9XG4gICAgICAgIGlmIChiaW4gJiYgaW5zZXJ0SW5kZXggPT0gLTEgJiYgYmluLnByaW9yaXR5IDwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGluc2VydEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbiA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCB0aGlzT2JqZWN0OiB0aGlzT2JqZWN0LCBwYXJhbTogcGFyYW0gPyBwYXJhbSA6IFtdLCBwcmlvcml0eTogcHJpb3JpdHksIG9uY2U6IG9uY2UgfTtcbiAgICBpZiAoaW5zZXJ0SW5kZXggIT0gLTEpIHtcbiAgICAgICAgYXJyLnNwbGljZShpbnNlcnRJbmRleCwgMCwgYmluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnIucHVzaChiaW4pO1xuICAgIH1cbiAgICBub3RpZnltYXBbbmFtZV0gPSBhcnI7XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0Tm90aWZ5KG5vdGlmeW1hcCwgbmFtZSwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgcmV0dXJuO1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnltYXBbbmFtZV0gPSBhcnIuZmlsdGVyKGZ1bmN0aW9uIChiaW4pIHtcbiAgICAgICAgICAgIHJldHVybiAhKGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeShub3RpZnltYXAsIG5hbWUsIHBhcmFtKSB7XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIG5vdGlmeUFycmF5KGFyciwgcGFyYW0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnlBcnJheShhcnIsIHBhcmFtKSB7XG4gICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAraSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oK2kpKSB7XG4gICAgICAgICAgICB2YXIgYmluID0gYXJyW2ldO1xuICAgICAgICAgICAgaWYgKGJpbiAmJiBiaW4uY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtKSBwYXJhbSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ucGFyYW0pIHBhcmFtID0gYmluLnBhcmFtLmNvbmNhdChwYXJhbSk7XG4gICAgICAgICAgICAgICAgYmluLmNhbGxiYWNrLmFwcGx5KGJpbi50aGlzT2JqZWN0LCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgaWYgKGJpbi5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltVjJaVzUwY3k5MWRHbHNjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096dEJRVWxQTEZOQlFWTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRExFbEJRVWtzUlVGQlJUczdRVUZEZEVZc1VVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlF6RkRMRkZCUVVrc1IwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1FVRkZNVUlzVVVGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVONFFpeFJRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOeVFpeFJRVUZKTEVkQlFVY3NRMEZCUXpzN1FVRkZVaXhSUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONFF5eFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpkQ0xGZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRZaXhaUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeExRVUZMTEZWQlFWVXNSVUZCUlR0QlFVTnVSU3h0UWtGQlR5eExRVUZMTEVOQlFVTTdVMEZEYUVJN1FVRkRSQ3haUVVGSkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVWQlFVVTdRVUZEY2tRc2RVSkJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYmtJN1MwRkRTanM3UVVGRlJDeFBRVUZITEVkQlFVY3NSVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1IwRkJSeXhMUVVGTExFZEJRVWNzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlF5eERRVUZETzBGQlF6ZEhMRkZCUVVrc1YwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEyNUNMRmRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOdVF5eE5RVU5KTzBGQlEwUXNWMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dExRVU5xUWp0QlFVTkVMR0ZCUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdRMEZEZWtJN08wRkJSVTBzVTBGQlV5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeEZRVUZGTzBGQlEyeEZMRkZCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVTXNUMEZCVHp0QlFVTTFRaXhSUVVGSkxFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRNVUlzVVVGQlNTeEhRVUZITEVWQlFVVTdRVUZEVEN4cFFrRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJVeXhIUVVGSExFVkJRVU03UVVGRGRFTXNiVUpCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUTBGQlFTeEJRVUZETEVOQlFVRTdVMEZEZGtVc1EwRkJReXhEUVVGRE8wdEJRMDQ3UTBGRFNqczdRVUZGVFN4VFFVRlRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlR0QlFVTXpReXhSUVVGSkxFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRNVUlzVVVGQlNTeEhRVUZITEVWQlFVVTdRVUZEVEN4dFFrRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTjRRaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tTEUxQlFVMDdRVUZEU0N4bFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FqdERRVU5LT3p0QlFVVk5MRk5CUVZNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVTdRVUZEY0VNc1UwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVTdRVUZEWml4WlFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVU03UVVGRGNFTXNaMEpCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhuUWtGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVOeVFpeHZRa0ZCU1N4RFFVRkRMRXRCUVVzc1JVRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzUkNMRzlDUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXpsRExHMUNRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXpGRExHOUNRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVNN1FVRkRWQ3gxUWtGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEzQkNPMkZCUTBvN1UwRkRTanRMUVVOS08wTkJRMG9pTENKbWFXeGxJam9pWlhabGJuUnpMM1YwYVd4ekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhISmNiaUFxSUVOeVpXRjBaV1FnWW5rZ2RHOXRiWGxhV2swZ2IyNGdNakF4TlM4NEx6RTVMbHh5WEc0Z0tpOWNjbHh1WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCeVpXZHBjM1JPYjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ3dnY0dGeVlXMHNJSEJ5YVc5eWFYUjVMRzl1WTJVcElIc3ZMeXh5WlhObGNuWmxQenBoYm5sY2NseHVJQ0FnSUdsbUlDZ2hibTkwYVdaNWJXRndXMjVoYldWZEtXNXZkR2xtZVcxaGNGdHVZVzFsWFNBOUlGdGRPMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1lYSnlMbXhsYm1kMGFEdGNjbHh1SUNBZ0lIWmhjaUJwYm5ObGNuUkpibVJsZUNBOUlDMHhPMXh5WEc0Z0lDQWdkbUZ5SUdKcGJqdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2NISnBiM0pwZEhrZ1BUMDlJSFZ1WkdWbWFXNWxaQ2x3Y21sdmNtbDBlU0E5SURBN1hISmNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ1ltbHVJRDBnWVhKeVcybGRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGlhVzRnSmlZZ1ltbHVMbU5oYkd4aVlXTnJJRDA5UFNCallXeHNZbUZqYXlBbUppQmlhVzR1ZEdocGMwOWlhbVZqZENBOVBUMGdkR2hwYzA5aWFtVmpkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN0x5L3BtTExtcmFMcGg0M2xwSTNtajVMbGhhVmNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLR0pwYmlBbUppQnBibk5sY25SSmJtUmxlQ0E5UFNBdE1TQW1KaUJpYVc0dWNISnBiM0pwZEhrZ1BDQndjbWx2Y21sMGVTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibk5sY25SSmJtUmxlQ0E5SUdrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdKcGJpQTlJSHRqWVd4c1ltRmphem9nWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRNklIUm9hWE5QWW1wbFkzUXNJSEJoY21GdE9pQndZWEpoYlNBL0lIQmhjbUZ0SURvZ1cxMHNJSEJ5YVc5eWFYUjVPaUJ3Y21sdmNtbDBlU0FzYjI1alpUcHZibU5sZlR0Y2NseHVJQ0FnSUdsbUlDaHBibk5sY25SSmJtUmxlQ0FoUFNBdE1Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUdGeWNpNXpjR3hwWTJVb2FXNXpaWEowU1c1a1pYZ3NJREFzSUdKcGJpazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQmhjbkl1Y0hWemFDaGlhVzRwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYm05MGFXWjViV0Z3VzI1aGJXVmRJRDBnWVhKeU8xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdkVzV5WldkcGMzUk9iM1JwWm5rb2JtOTBhV1o1YldGd0xDQnVZVzFsTENCallXeHNZbUZqYXl3Z2RHaHBjMDlpYW1WamRDa2dlMXh5WEc0Z0lDQWdhV1lnS0NGdWIzUnBabmx0WVhCYmJtRnRaVjBwY21WMGRYSnVPMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1SUNBZ0lHbG1JQ2hoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0J1YjNScFpubHRZWEJiYm1GdFpWMGdQU0JoY25JdVptbHNkR1Z5S0daMWJtTjBhVzl1S0dKcGJpbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBaEtHSnBiaTVqWVd4c1ltRmpheUE5UFQwZ1kyRnNiR0poWTJzZ0ppWWdZbWx1TG5Sb2FYTlBZbXBsWTNRZ1BUMDlJSFJvYVhOUFltcGxZM1FwWEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ1YjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQndZWEpoYlNrZ2UxeHlYRzRnSUNBZ2RtRnlJR0Z5Y2lBOUlHNXZkR2xtZVcxaGNGdHVZVzFsWFR0Y2NseHVJQ0FnSUdsbUlDaGhjbklwSUh0Y2NseHVJQ0FnSUNBZ0lDQnViM1JwWm5sQmNuSmhlU2hoY25Jc0lIQmhjbUZ0S1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzRnSUNBZ2ZWeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdibTkwYVdaNVFYSnlZWGtvWVhKeUxDQndZWEpoYlNrZ2UxeHlYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQnBiaUJoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnSzJrZ1BUMDlJRndpYm5WdFltVnlYQ0lnSmlZZ0lXbHpUbUZPS0N0cEtTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJpYVc0Z1BTQmhjbkpiYVYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGlhVzRnSmlZZ1ltbHVMbU5oYkd4aVlXTnJLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWEJoY21GdEtYQmhjbUZ0SUQwZ1cxMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1ltbHVMbkJoY21GdEtYQmhjbUZ0SUQwZ1ltbHVMbkJoY21GdExtTnZibU5oZENod1lYSmhiU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWFXNHVZMkZzYkdKaFkyc3VZWEJ3Ykhrb1ltbHVMblJvYVhOUFltcGxZM1FzSUhCaGNtRnRLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGlhVzR1YjI1alpTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYSnlMbk53YkdsalpTaHBMQ0F4S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZTSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUwzTnZkWEpqWlM4aWZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2Rpc3QvZXZlbnRzL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCdyZWR1Y2UnKTtcblxuLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdCA9ICd1bmRlZmluZWQnID09IHR5cGVvZiB3aW5kb3dcbiAgPyAodGhpcyB8fCBzZWxmKVxuICA6IHdpbmRvdztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIFRPRE86IGZ1dHVyZSBwcm9vZiwgbW92ZSB0byBjb21wb2VudCBsYW5kXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSG9zdChvYmopIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxuICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgWEhSLlxuICovXG5cbnJlcXVlc3QuZ2V0WEhSID0gZnVuY3Rpb24gKCkge1xuICBpZiAocm9vdC5YTUxIdHRwUmVxdWVzdFxuICAgICAgJiYgKCFyb290LmxvY2F0aW9uIHx8ICdmaWxlOicgIT0gcm9vdC5sb2NhdGlvbi5wcm90b2NvbFxuICAgICAgICAgIHx8ICFyb290LkFjdGl2ZVhPYmplY3QpKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHBhaXI7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBhcnRzID0gcGFpci5zcGxpdCgnPScpO1xuICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcmFtcyhzdHIpe1xuICByZXR1cm4gcmVkdWNlKHN0ci5zcGxpdCgvICo7ICovKSwgZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKVxuICAgICAgLCBrZXkgPSBwYXJ0cy5zaGlmdCgpXG4gICAgICAsIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcbiAgdGhpcy50ZXh0ID0gKCh0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpKSB8fCB0eXBlb2YgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJylcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHRcbiAgICAgOiBudWxsO1xuICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnJlcS54aHIuc3RhdHVzVGV4dDtcbiAgdGhpcy5zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgID8gdGhpcy5wYXJzZUJvZHkodGhpcy50ZXh0ID8gdGhpcy50ZXh0IDogdGhpcy54aHIucmVzcG9uc2UpXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gIC8vIGNvbnRlbnQtdHlwZVxuICB2YXIgY3QgPSB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gIHRoaXMudHlwZSA9IHR5cGUoY3QpO1xuXG4gIC8vIHBhcmFtc1xuICB2YXIgb2JqID0gcGFyYW1zKGN0KTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgdGhpc1trZXldID0gb2JqW2tleV07XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqIHx8IGlzSG9zdChkYXRhKSkgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0KSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS50b3RhbCA+IDApIHtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICB9O1xuICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHhoci51cGxvYWQgJiYgdGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYudGltZWRvdXQgPSB0cnVlO1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmF1eCBwcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgcmV0dXJuIHRoaXMuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgZXJyID8gcmVqZWN0KGVycikgOiBmdWxmaWxsKHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdXBlcmFnZW50L2xpYi9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBSZWR1Y2UgYGFycmAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxcbiAqXG4gKiBUT0RPOiBjb21iYXRpYmxlIGVycm9yIGhhbmRsaW5nP1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBmbiwgaW5pdGlhbCl7ICBcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgY3VyciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gM1xuICAgID8gaW5pdGlhbFxuICAgIDogYXJyW2lkeCsrXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgY3VyciA9IGZuLmNhbGwobnVsbCwgY3VyciwgYXJyW2lkeF0sICsraWR4LCBhcnIpO1xuICB9XG4gIFxuICByZXR1cm4gY3Vycjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9+L3JlZHVjZS1jb21wb25lbnQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBhc3luY1xuICogaHR0cHM6Ly9naXRodWIuY29tL2Nhb2xhbi9hc3luY1xuICpcbiAqIENvcHlyaWdodCAyMDEwLTIwMTQgQ2FvbGFuIE1jTWFob25cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGFzeW5jID0ge307XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9Cb29sKHYpIHtcbiAgICAgICAgcmV0dXJuICEhdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm90SWQodikge1xuICAgICAgICByZXR1cm4gIXY7XG4gICAgfVxuXG4gICAgLy8gZ2xvYmFsIG9uIHRoZSBzZXJ2ZXIsIHdpbmRvdyBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBwcmV2aW91c19hc3luYztcblxuICAgIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIChgc2VsZmApIGluIHRoZSBicm93c2VyLCBgZ2xvYmFsYFxuICAgIC8vIG9uIHRoZSBzZXJ2ZXIsIG9yIGB0aGlzYCBpbiBzb21lIHZpcnR1YWwgbWFjaGluZXMuIFdlIHVzZSBgc2VsZmBcbiAgICAvLyBpbnN0ZWFkIG9mIGB3aW5kb3dgIGZvciBgV2ViV29ya2VyYCBzdXBwb3J0LlxuICAgIHZhciByb290ID0gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsIHx8XG4gICAgICAgICAgICB0aGlzO1xuXG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xuICAgICAgICBwcmV2aW91c19hc3luYyA9IHJvb3QuYXN5bmM7XG4gICAgfVxuXG4gICAgYXN5bmMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IHByZXZpb3VzX2FzeW5jO1xuICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9ubHlfb25jZShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZm4gPT09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIHdhcyBhbHJlYWR5IGNhbGxlZC5cIik7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZm4gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9vbmNlKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChmbiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLy8vIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJsaXR5IGZ1bmN0aW9ucyAvLy8vXG5cbiAgICB2YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICAgIHZhciBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuXG4gICAgLy8gUG9ydGVkIGZyb20gdW5kZXJzY29yZS5qcyBpc09iamVjdFxuICAgIHZhciBfaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2lzQXJyYXlMaWtlKGFycikge1xuICAgICAgICByZXR1cm4gX2lzQXJyYXkoYXJyKSB8fCAoXG4gICAgICAgICAgICAvLyBoYXMgYSBwb3NpdGl2ZSBpbnRlZ2VyIGxlbmd0aCBwcm9wZXJ0eVxuICAgICAgICAgICAgdHlwZW9mIGFyci5sZW5ndGggPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgICAgIGFyci5sZW5ndGggPj0gMCAmJlxuICAgICAgICAgICAgYXJyLmxlbmd0aCAlIDEgPT09IDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZWFjaChjb2xsLCBpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gX2lzQXJyYXlMaWtlKGNvbGwpID9cbiAgICAgICAgICAgIF9hcnJheUVhY2goY29sbCwgaXRlcmF0b3IpIDpcbiAgICAgICAgICAgIF9mb3JFYWNoT2YoY29sbCwgaXRlcmF0b3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheUVhY2goYXJyLCBpdGVyYXRvcikge1xuICAgICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGFycltpbmRleF0sIGluZGV4LCBhcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21hcChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgICAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRvcihhcnJbaW5kZXhdLCBpbmRleCwgYXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yYW5nZShjb3VudCkge1xuICAgICAgICByZXR1cm4gX21hcChBcnJheShjb3VudCksIGZ1bmN0aW9uICh2LCBpKSB7IHJldHVybiBpOyB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVkdWNlKGFyciwgaXRlcmF0b3IsIG1lbW8pIHtcbiAgICAgICAgX2FycmF5RWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICBtZW1vID0gaXRlcmF0b3IobWVtbywgeCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZm9yRWFjaE9mKG9iamVjdCwgaXRlcmF0b3IpIHtcbiAgICAgICAgX2FycmF5RWFjaChfa2V5cyhvYmplY3QpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpdGVyYXRvcihvYmplY3Rba2V5XSwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luZGV4T2YoYXJyLCBpdGVtKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIF9rZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2tleUl0ZXJhdG9yKGNvbGwpIHtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgdmFyIGxlbjtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGlmIChfaXNBcnJheUxpa2UoY29sbCkpIHtcbiAgICAgICAgICAgIGxlbiA9IGNvbGwubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBpIDwgbGVuID8gaSA6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5cyA9IF9rZXlzKGNvbGwpO1xuICAgICAgICAgICAgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPCBsZW4gPyBrZXlzW2ldIDogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaW1pbGFyIHRvIEVTNidzIHJlc3QgcGFyYW0gKGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzAzL2VzNi1hbmQtcmVzdC1wYXJhbWV0ZXIuaHRtbClcbiAgICAvLyBUaGlzIGFjY3VtdWxhdGVzIHRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gYW4gYXJyYXksIGFmdGVyIGEgZ2l2ZW4gaW5kZXguXG4gICAgLy8gRnJvbSB1bmRlcnNjb3JlLmpzIChodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvcHVsbC8yMTQwKS5cbiAgICBmdW5jdGlvbiBfcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggPT0gbnVsbCA/IGZ1bmMubGVuZ3RoIC0gMSA6ICtzdGFydEluZGV4O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aCAtIHN0YXJ0SW5kZXgsIDApO1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBBcnJheShsZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHJlc3RbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4ICsgc3RhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDdXJyZW50bHkgdW51c2VkIGJ1dCBoYW5kbGUgY2FzZXMgb3V0c2lkZSBvZiB0aGUgc3dpdGNoIHN0YXRlbWVudDpcbiAgICAgICAgICAgIC8vIHZhciBhcmdzID0gQXJyYXkoc3RhcnRJbmRleCArIDEpO1xuICAgICAgICAgICAgLy8gZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc3RhcnRJbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gICAgIGFyZ3NbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGFyZ3Nbc3RhcnRJbmRleF0gPSByZXN0O1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3dpdGhvdXRJbmRleChpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcih2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vLy8gZXhwb3J0ZWQgYXN5bmMgbW9kdWxlIGZ1bmN0aW9ucyAvLy8vXG5cbiAgICAvLy8vIG5leHRUaWNrIGltcGxlbWVudGF0aW9uIHdpdGggYnJvd3Nlci1jb21wYXRpYmxlIGZhbGxiYWNrIC8vLy9cblxuICAgIC8vIGNhcHR1cmUgdGhlIGdsb2JhbCByZWZlcmVuY2UgdG8gZ3VhcmQgYWdhaW5zdCBmYWtlVGltZXIgbW9ja3NcbiAgICB2YXIgX3NldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiYgc2V0SW1tZWRpYXRlO1xuXG4gICAgdmFyIF9kZWxheSA9IF9zZXRJbW1lZGlhdGUgPyBmdW5jdGlvbihmbikge1xuICAgICAgICAvLyBub3QgYSBkaXJlY3QgYWxpYXMgZm9yIElFMTAgY29tcGF0aWJpbGl0eVxuICAgICAgICBfc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9IDogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb2Nlc3MubmV4dFRpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gX2RlbGF5O1xuICAgIH1cbiAgICBhc3luYy5zZXRJbW1lZGlhdGUgPSBfc2V0SW1tZWRpYXRlID8gX2RlbGF5IDogYXN5bmMubmV4dFRpY2s7XG5cblxuICAgIGFzeW5jLmZvckVhY2ggPVxuICAgIGFzeW5jLmVhY2ggPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2hPZihhcnIsIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmZvckVhY2hTZXJpZXMgPVxuICAgIGFzeW5jLmVhY2hTZXJpZXMgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2hPZlNlcmllcyhhcnIsIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpLCBjYWxsYmFjayk7XG4gICAgfTtcblxuXG4gICAgYXN5bmMuZm9yRWFjaExpbWl0ID1cbiAgICBhc3luYy5lYWNoTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfZWFjaE9mTGltaXQobGltaXQpKGFyciwgX3dpdGhvdXRJbmRleChpdGVyYXRvciksIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZm9yRWFjaE9mID1cbiAgICBhc3luYy5lYWNoT2YgPSBmdW5jdGlvbiAob2JqZWN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0IHx8IFtdO1xuICAgICAgICB2YXIgc2l6ZSA9IF9pc0FycmF5TGlrZShvYmplY3QpID8gb2JqZWN0Lmxlbmd0aCA6IF9rZXlzKG9iamVjdCkubGVuZ3RoO1xuICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgaWYgKCFzaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgX2VhY2gob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaXRlcmF0b3Iob2JqZWN0W2tleV0sIGtleSwgb25seV9vbmNlKGRvbmUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZm9yRWFjaE9mU2VyaWVzID1cbiAgICBhc3luYy5lYWNoT2ZTZXJpZXMgPSBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgb2JqID0gb2JqIHx8IFtdO1xuICAgICAgICB2YXIgbmV4dEtleSA9IF9rZXlJdGVyYXRvcihvYmopO1xuICAgICAgICB2YXIga2V5ID0gbmV4dEtleSgpO1xuICAgICAgICBmdW5jdGlvbiBpdGVyYXRlKCkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZXJhdG9yKG9ialtrZXldLCBrZXksIG9ubHlfb25jZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbmV4dEtleSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGl0ZXJhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXRlcmF0ZSgpO1xuICAgIH07XG5cblxuXG4gICAgYXN5bmMuZm9yRWFjaE9mTGltaXQgPVxuICAgIGFzeW5jLmVhY2hPZkxpbWl0ID0gZnVuY3Rpb24gKG9iaiwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBfZWFjaE9mTGltaXQobGltaXQpKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2VhY2hPZkxpbWl0KGxpbWl0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgICAgIG9iaiA9IG9iaiB8fCBbXTtcbiAgICAgICAgICAgIHZhciBuZXh0S2V5ID0gX2tleUl0ZXJhdG9yKG9iaik7XG4gICAgICAgICAgICBpZiAobGltaXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcnVubmluZyA9IDA7XG4gICAgICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAoZnVuY3Rpb24gcmVwbGVuaXNoICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSAmJiBydW5uaW5nIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdoaWxlIChydW5uaW5nIDwgbGltaXQgJiYgIWVycm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IG5leHRLZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihvYmpba2V5XSwga2V5LCBvbmx5X29uY2UoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsZW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkb1BhcmFsbGVsKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmbihhc3luYy5lYWNoT2YsIG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9QYXJhbGxlbExpbWl0KGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oX2VhY2hPZkxpbWl0KGxpbWl0KSwgb2JqLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkb1Nlcmllcyhmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oYXN5bmMuZWFjaE9mU2VyaWVzLCBvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FzeW5jTWFwKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHZhbHVlLCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMubWFwID0gZG9QYXJhbGxlbChfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcFNlcmllcyA9IGRvU2VyaWVzKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwTGltaXQgPSBkb1BhcmFsbGVsTGltaXQoX2FzeW5jTWFwKTtcblxuICAgIC8vIHJlZHVjZSBvbmx5IGhhcyBhIHNlcmllcyB2ZXJzaW9uLCBhcyBkb2luZyByZWR1Y2UgaW4gcGFyYWxsZWwgd29uJ3RcbiAgICAvLyB3b3JrIGluIG1hbnkgc2l0dWF0aW9ucy5cbiAgICBhc3luYy5pbmplY3QgPVxuICAgIGFzeW5jLmZvbGRsID1cbiAgICBhc3luYy5yZWR1Y2UgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaE9mU2VyaWVzKGFyciwgZnVuY3Rpb24gKHgsIGksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihtZW1vLCB4LCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgbWVtbyA9IHY7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIgfHwgbnVsbCwgbWVtbyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy5mb2xkciA9XG4gICAgYXN5bmMucmVkdWNlUmlnaHQgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJldmVyc2VkID0gX21hcChhcnIsIGlkZW50aXR5KS5yZXZlcnNlKCk7XG4gICAgICAgIGFzeW5jLnJlZHVjZShyZXZlcnNlZCwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2ZpbHRlcihlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtpbmRleDogaW5kZXgsIHZhbHVlOiB4fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMuc2VsZWN0ID1cbiAgICBhc3luYy5maWx0ZXIgPSBkb1BhcmFsbGVsKF9maWx0ZXIpO1xuXG4gICAgYXN5bmMuc2VsZWN0TGltaXQgPVxuICAgIGFzeW5jLmZpbHRlckxpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9maWx0ZXIpO1xuXG4gICAgYXN5bmMuc2VsZWN0U2VyaWVzID1cbiAgICBhc3luYy5maWx0ZXJTZXJpZXMgPSBkb1NlcmllcyhfZmlsdGVyKTtcblxuICAgIGZ1bmN0aW9uIF9yZWplY3QoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBfZmlsdGVyKGVhY2hmbiwgYXJyLCBmdW5jdGlvbih2YWx1ZSwgY2IpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHZhbHVlLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgY2IoIXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgYXN5bmMucmVqZWN0ID0gZG9QYXJhbGxlbChfcmVqZWN0KTtcbiAgICBhc3luYy5yZWplY3RMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfcmVqZWN0KTtcbiAgICBhc3luYy5yZWplY3RTZXJpZXMgPSBkb1NlcmllcyhfcmVqZWN0KTtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVUZXN0ZXIoZWFjaGZuLCBjaGVjaywgZ2V0UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2IpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNiKSBjYihnZXRSZXN1bHQoZmFsc2UsIHZvaWQgMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZWUoeCwgXywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNiKSByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2IgJiYgY2hlY2sodikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGdldFJlc3VsdCh0cnVlLCB4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYiA9IGl0ZXJhdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIGVhY2hmbihhcnIsIGxpbWl0LCBpdGVyYXRlZSwgZG9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNiID0gaXRlcmF0b3I7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgPSBsaW1pdDtcbiAgICAgICAgICAgICAgICBlYWNoZm4oYXJyLCBpdGVyYXRlZSwgZG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMuYW55ID1cbiAgICBhc3luYy5zb21lID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2YsIHRvQm9vbCwgaWRlbnRpdHkpO1xuXG4gICAgYXN5bmMuc29tZUxpbWl0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZMaW1pdCwgdG9Cb29sLCBpZGVudGl0eSk7XG5cbiAgICBhc3luYy5hbGwgPVxuICAgIGFzeW5jLmV2ZXJ5ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2YsIG5vdElkLCBub3RJZCk7XG5cbiAgICBhc3luYy5ldmVyeUxpbWl0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZMaW1pdCwgbm90SWQsIG5vdElkKTtcblxuICAgIGZ1bmN0aW9uIF9maW5kR2V0UmVzdWx0KHYsIHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGFzeW5jLmRldGVjdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mLCBpZGVudGl0eSwgX2ZpbmRHZXRSZXN1bHQpO1xuICAgIGFzeW5jLmRldGVjdFNlcmllcyA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mU2VyaWVzLCBpZGVudGl0eSwgX2ZpbmRHZXRSZXN1bHQpO1xuICAgIGFzeW5jLmRldGVjdExpbWl0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZMaW1pdCwgaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KTtcblxuICAgIGFzeW5jLnNvcnRCeSA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhc3luYy5tYXAoYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uIChlcnIsIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwge3ZhbHVlOiB4LCBjcml0ZXJpYTogY3JpdGVyaWF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgX21hcChyZXN1bHRzLnNvcnQoY29tcGFyYXRvciksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjb21wYXJhdG9yKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWEsIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5hdXRvID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICB2YXIga2V5cyA9IF9rZXlzKHRhc2tzKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1Rhc2tzID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIGlmICghcmVtYWluaW5nVGFza3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHRzID0ge307XG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihmbikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm4pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGZuKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gX2luZGV4T2YobGlzdGVuZXJzLCBmbik7XG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0YXNrQ29tcGxldGUoKSB7XG4gICAgICAgICAgICByZW1haW5pbmdUYXNrcy0tO1xuICAgICAgICAgICAgX2FycmF5RWFjaChsaXN0ZW5lcnMuc2xpY2UoMCksIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcmVtYWluaW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2FycmF5RWFjaChrZXlzLCBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBfaXNBcnJheSh0YXNrc1trXSkgPyB0YXNrc1trXTogW3Rhc2tzW2tdXTtcbiAgICAgICAgICAgIHZhciB0YXNrQ2FsbGJhY2sgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzYWZlUmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBfZm9yRWFjaE9mKHJlc3VsdHMsIGZ1bmN0aW9uKHZhbCwgcmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZVJlc3VsdHNbcmtleV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgc2FmZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZSh0YXNrQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVzID0gdGFzay5zbGljZSgwLCB0YXNrLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBkZWFkLWxvY2tzXG4gICAgICAgICAgICB2YXIgbGVuID0gcmVxdWlyZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRlcDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIGlmICghKGRlcCA9IHRhc2tzW3JlcXVpcmVzW2xlbl1dKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBpbmV4aXN0YW50IGRlcGVuZGVuY3knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KGRlcCkgJiYgX2luZGV4T2YoZGVwLCBrKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFzIGN5Y2xpYyBkZXBlbmRlbmNpZXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZHVjZShyZXF1aXJlcywgZnVuY3Rpb24gKGEsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhICYmIHJlc3VsdHMuaGFzT3duUHJvcGVydHkoeCkpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpICYmICFyZXN1bHRzLmhhc093blByb3BlcnR5KGspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG5cblxuICAgIGFzeW5jLnJldHJ5ID0gZnVuY3Rpb24odGltZXMsIHRhc2ssIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1RJTUVTID0gNTtcbiAgICAgICAgdmFyIERFRkFVTFRfSU5URVJWQUwgPSAwO1xuXG4gICAgICAgIHZhciBhdHRlbXB0cyA9IFtdO1xuXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgdGltZXM6IERFRkFVTFRfVElNRVMsXG4gICAgICAgICAgICBpbnRlcnZhbDogREVGQVVMVF9JTlRFUlZBTFxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlVGltZXMoYWNjLCB0KXtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICAgICAgYWNjLnRpbWVzID0gcGFyc2VJbnQodCwgMTApIHx8IERFRkFVTFRfVElNRVM7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIHQgPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICBhY2MudGltZXMgPSBwYXJzZUludCh0LnRpbWVzLCAxMCkgfHwgREVGQVVMVF9USU1FUztcbiAgICAgICAgICAgICAgICBhY2MuaW50ZXJ2YWwgPSBwYXJzZUludCh0LmludGVydmFsLCAxMCkgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlIGZvciBcXCd0aW1lc1xcJzogJyArIHR5cGVvZiB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoIDwgMSB8fCBsZW5ndGggPiAzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIC0gbXVzdCBiZSBlaXRoZXIgKHRhc2spLCAodGFzaywgY2FsbGJhY2spLCAodGltZXMsIHRhc2spIG9yICh0aW1lcywgdGFzaywgY2FsbGJhY2spJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoIDw9IDIgJiYgdHlwZW9mIHRpbWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IHRhc2s7XG4gICAgICAgICAgICB0YXNrID0gdGltZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aW1lcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGFyc2VUaW1lcyhvcHRzLCB0aW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBvcHRzLnRhc2sgPSB0YXNrO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdyYXBwZWRUYXNrKHdyYXBwZWRDYWxsYmFjaywgd3JhcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHJ5QXR0ZW1wdCh0YXNrLCBmaW5hbEF0dGVtcHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2VyaWVzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzayhmdW5jdGlvbihlcnIsIHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNDYWxsYmFjayghZXJyIHx8IGZpbmFsQXR0ZW1wdCwge2VycjogZXJyLCByZXN1bHQ6IHJlc3VsdH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCB3cmFwcGVkUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0cnlJbnRlcnZhbChpbnRlcnZhbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNlcmllc0NhbGxiYWNrKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzQ2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGlsZSAob3B0cy50aW1lcykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGZpbmFsQXR0ZW1wdCA9ICEob3B0cy50aW1lcy09MSk7XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMucHVzaChyZXRyeUF0dGVtcHQob3B0cy50YXNrLCBmaW5hbEF0dGVtcHQpKTtcbiAgICAgICAgICAgICAgICBpZighZmluYWxBdHRlbXB0ICYmIG9wdHMuaW50ZXJ2YWwgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdHMucHVzaChyZXRyeUludGVydmFsKG9wdHMuaW50ZXJ2YWwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jLnNlcmllcyhhdHRlbXB0cywgZnVuY3Rpb24oZG9uZSwgZGF0YSl7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAod3JhcHBlZENhbGxiYWNrIHx8IG9wdHMuY2FsbGJhY2spKGRhdGEuZXJyLCBkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGEgY2FsbGJhY2sgaXMgcGFzc2VkLCBydW4gdGhpcyBhcyBhIGNvbnRyb2xsIGZsb3dcbiAgICAgICAgcmV0dXJuIG9wdHMuY2FsbGJhY2sgPyB3cmFwcGVkVGFzaygpIDogd3JhcHBlZFRhc2s7XG4gICAgfTtcblxuICAgIGFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgaWYgKCFfaXNBcnJheSh0YXNrcykpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJdGVyYXRvcihpdGVyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgW2Vycl0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVuc3VyZUFzeW5jKGl0ZXJhdG9yKS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB3cmFwSXRlcmF0b3IoYXN5bmMuaXRlcmF0b3IodGFza3MpKSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfcGFyYWxsZWwoZWFjaGZuLCB0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IF9pc0FycmF5TGlrZSh0YXNrcykgPyBbXSA6IHt9O1xuXG4gICAgICAgIGVhY2hmbih0YXNrcywgZnVuY3Rpb24gKHRhc2ssIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhc2soX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdHNba2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMucGFyYWxsZWwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbChhc3luYy5lYWNoT2YsIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsTGltaXQgPSBmdW5jdGlvbih0YXNrcywgbGltaXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbChfZWFjaE9mTGltaXQobGltaXQpLCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5zZXJpZXMgPSBmdW5jdGlvbih0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgX3BhcmFsbGVsKGFzeW5jLmVhY2hPZlNlcmllcywgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzW2luZGV4XS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHkgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uIChmbiwgYXJncykge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoY2FsbEFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShcbiAgICAgICAgICAgICAgICBudWxsLCBhcmdzLmNvbmNhdChjYWxsQXJncylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gX2NvbmNhdChlYWNoZm4sIGFyciwgZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGluZGV4LCBjYikge1xuICAgICAgICAgICAgZm4oeCwgZnVuY3Rpb24gKGVyciwgeSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoeSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYy5jb25jYXQgPSBkb1BhcmFsbGVsKF9jb25jYXQpO1xuICAgIGFzeW5jLmNvbmNhdFNlcmllcyA9IGRvU2VyaWVzKF9jb25jYXQpO1xuXG4gICAgYXN5bmMud2hpbHN0ID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gX3Jlc3RQYXJhbShmdW5jdGlvbihlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXN0LmFwcGx5KHRoaXMsIGFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKG5leHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXRlcmF0b3IobmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5kb1doaWxzdCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNhbGxzID0gMDtcbiAgICAgICAgcmV0dXJuIGFzeW5jLndoaWxzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiArK2NhbGxzIDw9IDEgfHwgdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy51bnRpbCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLndoaWxzdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5kb1VudGlsID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gYXN5bmMuZG9XaGlsc3QoaXRlcmF0b3IsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZHVyaW5nID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG5cbiAgICAgICAgdmFyIG5leHQgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGVyciwgYXJncykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjaGVjayk7XG4gICAgICAgICAgICAgICAgdGVzdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoZWNrID0gZnVuY3Rpb24oZXJyLCB0cnV0aCkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRydXRoKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IobmV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRlc3QoY2hlY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5kb0R1cmluZyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNhbGxzID0gMDtcbiAgICAgICAgYXN5bmMuZHVyaW5nKGZ1bmN0aW9uKG5leHQpIHtcbiAgICAgICAgICAgIGlmIChjYWxscysrIDwgMSkge1xuICAgICAgICAgICAgICAgIG5leHQobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3F1ZXVlKHdvcmtlciwgY29uY3VycmVuY3ksIHBheWxvYWQpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbmN5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNvbmN1cnJlbmN5ID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmN1cnJlbmN5IG11c3Qgbm90IGJlIHplcm8nKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFzayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCAmJiBxLmlkbGUoKSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2FycmF5RWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayB8fCBub29wXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcS50YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHEudGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggPT09IHEuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShxLnByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9uZXh0KHEsIHRhc2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB3b3JrZXJzIC09IDE7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgX2FycmF5RWFjaCh0YXNrcywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjay5hcHBseSh0YXNrLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggKyB3b3JrZXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcS5wcm9jZXNzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdvcmtlcnMgPSAwO1xuICAgICAgICB2YXIgcSA9IHtcbiAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5OiBjb25jdXJyZW5jeSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG5vb3AsXG4gICAgICAgICAgICBlbXB0eTogbm9vcCxcbiAgICAgICAgICAgIGRyYWluOiBub29wLFxuICAgICAgICAgICAgc3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtpbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBxLmRyYWluID0gbm9vcDtcbiAgICAgICAgICAgICAgICBxLnRhc2tzID0gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5zaGlmdDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcS5wYXVzZWQgJiYgd29ya2VycyA8IHEuY29uY3VycmVuY3kgJiYgcS50YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUod29ya2VycyA8IHEuY29uY3VycmVuY3kgJiYgcS50YXNrcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gcS5wYXlsb2FkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnNwbGljZSgwLCBxLnBheWxvYWQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnNwbGljZSgwLCBxLnRhc2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX21hcCh0YXNrcywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYiA9IG9ubHlfb25jZShfbmV4dChxLCB0YXNrcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyKGRhdGEsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcS50YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVubmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b3JrZXJzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlkbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnRhc2tzLmxlbmd0aCArIHdvcmtlcnMgPT09IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBxLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHEucGF1c2VkID09PSBmYWxzZSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBxLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bWVDb3VudCA9IE1hdGgubWluKHEuY29uY3VycmVuY3ksIHEudGFza3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBOZWVkIHRvIGNhbGwgcS5wcm9jZXNzIG9uY2UgcGVyIGNvbmN1cnJlbnRcbiAgICAgICAgICAgICAgICAvLyB3b3JrZXIgdG8gcHJlc2VydmUgZnVsbCBjb25jdXJyZW5jeSBhZnRlciBwYXVzZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDw9IHJlc3VtZUNvdW50OyB3KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHEucHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG5cbiAgICBhc3luYy5xdWV1ZSA9IGZ1bmN0aW9uICh3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gICAgICAgIHZhciBxID0gX3F1ZXVlKGZ1bmN0aW9uIChpdGVtcywgY2IpIHtcbiAgICAgICAgICAgIHdvcmtlcihpdGVtc1swXSwgY2IpO1xuICAgICAgICB9LCBjb25jdXJyZW5jeSwgMSk7XG5cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfTtcblxuICAgIGFzeW5jLnByaW9yaXR5UXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuXG4gICAgICAgIGZ1bmN0aW9uIF9jb21wYXJlVGFza3MoYSwgYil7XG4gICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfYmluYXJ5U2VhcmNoKHNlcXVlbmNlLCBpdGVtLCBjb21wYXJlKSB7XG4gICAgICAgICAgICB2YXIgYmVnID0gLTEsXG4gICAgICAgICAgICAgICAgZW5kID0gc2VxdWVuY2UubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlIChiZWcgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlkID0gYmVnICsgKChlbmQgLSBiZWcgKyAxKSA+Pj4gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgc2VxdWVuY2VbbWlkXSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBiZWcgPSBtaWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbWlkIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmVnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2luc2VydChxLCBkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFzayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2FycmF5RWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBxLnRhc2tzLnNwbGljZShfYmluYXJ5U2VhcmNoKHEudGFza3MsIGl0ZW0sIF9jb21wYXJlVGFza3MpICsgMSwgMCwgaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggPT09IHEuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHEucHJvY2Vzcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0IHdpdGggYSBub3JtYWwgcXVldWVcbiAgICAgICAgdmFyIHEgPSBhc3luYy5xdWV1ZSh3b3JrZXIsIGNvbmN1cnJlbmN5KTtcblxuICAgICAgICAvLyBPdmVycmlkZSBwdXNoIHRvIGFjY2VwdCBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBwcmlvcml0eVxuICAgICAgICBxLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgcHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHVuc2hpZnQgZnVuY3Rpb25cbiAgICAgICAgZGVsZXRlIHEudW5zaGlmdDtcblxuICAgICAgICByZXR1cm4gcTtcbiAgICB9O1xuXG4gICAgYXN5bmMuY2FyZ28gPSBmdW5jdGlvbiAod29ya2VyLCBwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBfcXVldWUod29ya2VyLCAxLCBwYXlsb2FkKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2NvbnNvbGVfZm4obmFtZSkge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoZm4sIGFyZ3MpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KFtfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnNvbGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcnJheUVhY2goYXJncywgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlW25hbWVdKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KV0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jLmxvZyA9IF9jb25zb2xlX2ZuKCdsb2cnKTtcbiAgICBhc3luYy5kaXIgPSBfY29uc29sZV9mbignZGlyJyk7XG4gICAgLyphc3luYy5pbmZvID0gX2NvbnNvbGVfZm4oJ2luZm8nKTtcbiAgICBhc3luYy53YXJuID0gX2NvbnNvbGVfZm4oJ3dhcm4nKTtcbiAgICBhc3luYy5lcnJvciA9IF9jb25zb2xlX2ZuKCdlcnJvcicpOyovXG5cbiAgICBhc3luYy5tZW1vaXplID0gZnVuY3Rpb24gKGZuLCBoYXNoZXIpIHtcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcbiAgICAgICAgdmFyIHF1ZXVlcyA9IHt9O1xuICAgICAgICBoYXNoZXIgPSBoYXNoZXIgfHwgaWRlbnRpdHk7XG4gICAgICAgIHZhciBtZW1vaXplZCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24gbWVtb2l6ZWQoYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICBpZiAoa2V5IGluIG1lbW8pIHtcbiAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIG1lbW9ba2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgaW4gcXVldWVzKSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW19yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHEgPSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxW2ldLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZW1vaXplZC5tZW1vID0gbWVtbztcbiAgICAgICAgbWVtb2l6ZWQudW5tZW1vaXplZCA9IGZuO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gICAgfTtcblxuICAgIGFzeW5jLnVubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChmbi51bm1lbW9pemVkIHx8IGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfdGltZXMobWFwcGVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgbWFwcGVyKF9yYW5nZShjb3VudCksIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMudGltZXMgPSBfdGltZXMoYXN5bmMubWFwKTtcbiAgICBhc3luYy50aW1lc1NlcmllcyA9IF90aW1lcyhhc3luYy5tYXBTZXJpZXMpO1xuICAgIGFzeW5jLnRpbWVzTGltaXQgPSBmdW5jdGlvbiAoY291bnQsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLm1hcExpbWl0KF9yYW5nZShjb3VudCksIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5zZXEgPSBmdW5jdGlvbiAoLyogZnVuY3Rpb25zLi4uICovKSB7XG4gICAgICAgIHZhciBmbnMgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbm9vcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXN5bmMucmVkdWNlKGZucywgYXJncywgZnVuY3Rpb24gKG5ld2FyZ3MsIGZuLCBjYikge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIG5ld2FyZ3MuY29uY2F0KFtfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIG5leHRhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKGVyciwgbmV4dGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGF0LCBbZXJyXS5jb25jYXQocmVzdWx0cykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy5jb21wb3NlID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICByZXR1cm4gYXN5bmMuc2VxLmFwcGx5KG51bGwsIEFycmF5LnByb3RvdHlwZS5yZXZlcnNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gX2FwcGx5RWFjaChlYWNoZm4pIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24oZm5zLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgZ28gPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWFjaGZuKGZucywgZnVuY3Rpb24gKGZuLCBfLCBjYikge1xuICAgICAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzLmNvbmNhdChbY2JdKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnby5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBnbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMuYXBwbHlFYWNoID0gX2FwcGx5RWFjaChhc3luYy5lYWNoT2YpO1xuICAgIGFzeW5jLmFwcGx5RWFjaFNlcmllcyA9IF9hcHBseUVhY2goYXN5bmMuZWFjaE9mU2VyaWVzKTtcblxuXG4gICAgYXN5bmMuZm9yZXZlciA9IGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRvbmUgPSBvbmx5X29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIHZhciB0YXNrID0gZW5zdXJlQXN5bmMoZm4pO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZW5zdXJlQXN5bmMoZm4pIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBhcmdzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbm5lckFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMuZW5zdXJlQXN5bmMgPSBlbnN1cmVBc3luYztcblxuICAgIGFzeW5jLmNvbnN0YW50ID0gX3Jlc3RQYXJhbShmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbbnVsbF0uY29uY2F0KHZhbHVlcyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGFzeW5jLndyYXBTeW5jID1cbiAgICBhc3luYy5hc3luY2lmeSA9IGZ1bmN0aW9uIGFzeW5jaWZ5KGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHJlc3VsdCBpcyBQcm9taXNlIG9iamVjdFxuICAgICAgICAgICAgaWYgKF9pc09iamVjdChyZXN1bHQpICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyci5tZXNzYWdlID8gZXJyIDogbmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gTm9kZS5qc1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuICAgIH1cbiAgICAvLyBBTUQgLyBSZXF1aXJlSlNcbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBpbmNsdWRlZCBkaXJlY3RseSB2aWEgPHNjcmlwdD4gdGFnXG4gICAgZWxzZSB7XG4gICAgICAgIHJvb3QuYXN5bmMgPSBhc3luYztcbiAgICB9XG5cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hc3luYy9saWIvYXN5bmMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy9icm93c2VyLmpzJykubmV4dFRpY2s7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaW1tZWRpYXRlSWRzID0ge307XG52YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBmdW5jdGlvbihmbikge1xuICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXG4gIG5leHRUaWNrKGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG4gICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcbiAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2VcbiAgICAgIC8vIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vY2FsbC1hcHBseS1zZWd1XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGlkcyBmcm9tIGxlYWtpbmdcbiAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuICBkZWxldGUgaW1tZWRpYXRlSWRzW2lkXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yMS5cclxuICovXHJcblxyXG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnYWxzYyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhZ2VudCBmcm9tIFwic3VwZXJhZ2VudFwiO1xyXG5pbXBvcnQgKiBhcyBhc3luYyBmcm9tIFwiYXN5bmNcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi8uLi91dGlscy91dGlscy5qc1wiO1xyXG5cclxudmFyIFNIQURFUl9UWVBFID0ge307XHJcblNIQURFUl9UWVBFW1widmVydGV4XCJdID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0LlZFUlRFWF9TSEFERVI7XHJcblNIQURFUl9UWVBFW1wiZnJhZ21lbnRcIl0gPSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuRlJBR01FTlRfU0hBREVSO1xyXG5cclxuY2xhc3MgU2FtcGxlRmllbGQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCxzcmMsZGlzdCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzW1wiX3NyY1BhdGhcIl0gPSBzcmM7XHJcbiAgICAgICAgdGhpc1tcIl9kaXN0UGF0aFwiXSA9IGRpc3Q7XHJcbiAgICAgICAgdGhpcy5zaGFkZXJzRGljdCA9IHt9O1xyXG4gICAgICAgIHRoaXMuQ09OU1RBTlRTID0gT2JqZWN0LmFzc2lnbih7fSx1dGlscy5jb25zdGFudHMpO1xyXG4gICAgICAgIHRoaXMuQ09OU1RBTlRTLlYgPSB0aGlzLkNPTlNUQU5UUy5WRVJURVhfU0hBREVSID0gXCJ2ZXJ0ZXhcIjtcclxuICAgICAgICB0aGlzLkNPTlNUQU5UUy5GID0gdGhpcy5DT05TVEFOVFMuRlJBR01FTlRfU0hBREVSID0gXCJmcmFnbWVudFwiO1xyXG4gICAgICAgIHRoaXMuX2xhdW5jaFN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3JjUGF0aCh1cmwpe1xyXG4gICAgICAgIHJldHVybiB1dGlscy51cmwuam9pbih0aGlzLl9zcmNQYXRoLHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdFBhdGgodXJsKXtcclxuICAgICAgICByZXR1cm4gdXRpbHMudXJsLmpvaW4odGhpcy5fZGlzdFBhdGgsdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkT25lU2hhZGVyKGdsLHVybCx0eXBlLG5hbWUsY2Ipe1xyXG4gICAgICAgIHJldHVybiBhZ2VudC5nZXQodXJsKS5lbmQoKGVycixyZXMpPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgaWYoISh0eXBlIGluIFNIQURFUl9UWVBFKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoU0hBREVSX1RZUEVbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgcmVzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcnNEaWN0W25hbWVdID0gc2hhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYj09PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICBjYihlcnIscmVzLnRleHR8fFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2hhZGVycyhnbCxjYixsb2Fkb2JqKXtcclxuICAgICAgICBpZih0eXBlb2YgY2IhPT1cImZ1bmN0aW9uXCIgfHwgIUFycmF5LmlzQXJyYXkobG9hZG9iaikgfHwgbG9hZG9iai5sZW5ndGg8PTApcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgdGFza3MgPSBsb2Fkb2JqLm1hcCgobG9hZCk9PntcclxuICAgICAgICAgICAgaWYobG9hZC51cmwgJiYgbG9hZC50eXBlICYmIGxvYWQubmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkT25lU2hhZGVyKGdsLGxvYWQudXJsLGxvYWQudHlwZSxsb2FkLm5hbWUsbmV4dClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKG5leHQpPT57bmV4dChudWxsLCBcIlwiKX1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXN5bmMuc2VyaWVzKHRhc2tzLCgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGF1bmNoU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhdW5jaCgpe1xyXG4gICAgICAgIHJldHVybiAoY2FudmFzKT0+e1xyXG4gICAgICAgICAgICB0aGlzLl9sYXVuY2hTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub25MYXVuY2goY2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwibGF1bmNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzdHJ1Y3QoKXtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgdGhpcy5fbGF1bmNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3RydWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRlc3RydWN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXVuY2hTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXVuY2hTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxhdW5jaChjYW52YXMpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3RydWN0KCl7XHJcbiAgICAgICAgdGhpcy5ub3RJbXBsZW1lbnRPbkRlc3RydWN0ID0gdHJ1ZTtcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCJvbkRlc3RydWN0IG5vdCBpbXBsZW1lbnQgeWV0IVwiLHRoaXMuX3NyY1BhdGgsdGhpcy5fZGlzdFBhdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVGaWVsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIzLlxyXG4gKi9cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5cclxudmFyIGxvb3AgPSBcImxvb3BcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGlvbk1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICBpZighKEFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgQW5pbWF0aW9uTWFuYWdlcikpe1xyXG4gICAgICAgICAgICBBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBBbmltYXRpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAvL3RoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX3N0b3BTdGF0ZSlyZXR1cm47XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbG9vcCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcChmb3JjZT10cnVlKXtcclxuICAgICAgICB0aGlzLl9zdG9wU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGZvcmNlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcihsb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb29wKGZuKXtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKGxvb3AsZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb29wKCl7XHJcbiAgICAgICAgaWYodGhpcy5fc3RvcFN0YXRlKXJldHVybjtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbG9vcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmVtaXQobG9vcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbk1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzguXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbCxJbnB1dCxMaXN0R3JvdXAsTGlzdEdyb3VwSXRlbX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi8uLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5cclxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic2lkZWJhclwiIG1kPXszfT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGtleSB3b3Jkcy4uLidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU2FtcGxlSXRlbSgpfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTYW1wbGVJdGVtKCl7XHJcbiAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnByb3BzLnNhbXBsZXNMaXN0LmZpbHRlcigoc2FtcGxlKT0+e3JldHVybiBzYW1wbGUuaWQ+MX0pO1xyXG5cclxuICAgICAgICB2YXIgaGVsbG93b3JsZCA9IHRoaXMucHJvcHMuc2FtcGxlc0xpc3RbMF07XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IGxpc3QubWFwKChzYW1wbGUpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8U2lkZUJhckxpc3RJdGVtIGtleT17c2FtcGxlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVJZCA9IHtzYW1wbGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ISFzYW1wbGUuYWN0aXZlU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzYW1wbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlQmFyTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoaGVsbG93b3JsZCkge1xyXG4gICAgICAgICAgICBpdGVtcy51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXJMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aGVsbG93b3JsZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVJZD17aGVsbG93b3JsZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9eyEhaGVsbG93b3JsZC5hY3RpdmVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aGVsbG93b3JsZC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGVCYXJMaXN0SXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU2lkZUJhckxpc3RJdGVtIGV4dGVuZHMgTGlzdEdyb3VwSXRlbXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTYW1wbGVJdGVtKGUpe1xyXG4gICAgICAgIHZhciBzYW1wbGUgPSBTYW1wbGVNYW5hZ2VyLnNhbXBsZXNJZERpY3RbdGhpcy5wcm9wcy5zYW1wbGVJZF07XHJcbiAgICAgICAgaWYoISFzYW1wbGUuYWN0aXZlU3RhdGUpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzp0cnVlfSk7XHJcbiAgICAgICAgU2FtcGxlTWFuYWdlci50b2dnbGVUb1NhbXBsZShzYW1wbGUuaWQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOmZhbHNlfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9eyEhdGhpcy5wcm9wcy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrU2FtcGxlSXRlbS5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgeygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInNpZ24gbG9hZGluZ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSgpfVxyXG4gICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvU2lkZUJhci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=