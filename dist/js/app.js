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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBkMmE5ODEwNDEyOTA3ODUzMGMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy9hcHAuZXM2fiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvQXBwLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9Cb2R5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdEJvb3RzdHJhcFwiIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9Db21tb25NYXJrUmVuZGVyLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvYmxvY2tzLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvY29tbW9uLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL3htbC5qc29uIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvbGVnYWN5Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9kZWNvZGUuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2lubGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub3JtYWxpemUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L3N0cmluZy5wcm90b3R5cGUucmVwZWF0L3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL34vY29sb3ItbmFtZS9pbmRleC5qc29uIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9TYW1wbGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYWxzYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7Ozs7Ozs7O2tDQUtLLENBQU87Ozs7c0NBQ1QsQ0FBZTs7OztnREFFTCxFQUF5Qjs7OzttREFDdEIsRUFBNEI7Ozs7cURBQ2pDLEVBQStCOzs7O0tBRWpELElBQUksR0FDSyxTQURULElBQUksR0FDTzsyQkFEWCxJQUFJOztBQUVGLHdCQUFNLE1BQU0sQ0FBQyw4REFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4RDs7QUFHTCxLQUFJLEdBQUcsQ0FBQztBQUNSLE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixXQUFNLEVBQUMsa0JBQVU7QUFDYixhQUFJLEdBQUcsWUFBWSxJQUFJLEVBQUUsT0FBTztBQUNoQyxZQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztNQUNwQjtBQUNELGdCQUFXLHVDQUFZO0FBQ3ZCLHFCQUFnQixxQ0FBaUI7RUFDcEMsQzs7Ozs7O0FDMUJELCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0drQixDQUFPOzs7OzJDQUVOLENBQW9COzs7O3lDQUN0QixDQUFrQjs7OzsyQ0FDaEIsQ0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaENBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0EsR0FBRSxJQUFJO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdFQUErRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzlrRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0EsSUFBRztBQUNILGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBLG9FQUFtRSxRQUFRO0FBQzNFOztBQUVBO0FBQ0EsMkJBQTBCLFlBQVk7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzNHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzdCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBbUM7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF1RixnQkFBZ0IsSUFBSTs7QUFFM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzREFBcUQsRUFBRSxnQ0FBZ0MsS0FBSyw2Q0FBNkMsS0FBSzs7QUFFOUk7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxXQUFVLE9BQU87O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFLLE9BQU87O0FBRVosc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRDtBQUNBLDBCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQSwwQkFBeUIsbUNBQW1DLDhDQUE4QztBQUMxRztBQUNBO0FBQ0EsMEJBQXlCLE9BQU8scUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaDZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBLFlBQVcsT0FBTyxzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjs7Ozs7OztBQ2pEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXVCLDJCQUEyQjs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNRQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF1QiwyQkFBMkI7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0Esc0JBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9hQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1COztBQUVuQixzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCwwQjs7Ozs7O0FDM0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixPQUFPLFFBQVE7QUFDakMsbUJBQWtCLE9BQU8sUUFBUTtBQUNqQyxvQkFBbUIsT0FBTyxPQUFPO0FBQ2pDLG9CQUFtQixPQUFPLE9BQU87QUFDakMsbUJBQWtCLFFBQVEsT0FBTztBQUNqQyxtQkFBa0IsUUFBUSxPQUFPO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixFQUFFO0FBQ2pDLCtCQUE4QixFQUFFO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QixZQUFXLFNBQVM7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQixZQUFXLFNBQVM7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsZUFBZTtBQUMxQixZQUFXLFNBQVM7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2huQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFNBQVM7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxNQUFNO0FBQ2pCLGFBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLFNBQVM7QUFDcEIsWUFBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQSw2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O2lFQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFtRCxVQUFVLEVBQUU7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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biBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzBkMmE5ODEwNDEyOTA3ODUzMGNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzcvMTYuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3L0FwcC5qcyc7XG5cbmltcG9ydCBTYW1wbGVNYW5hZ2VyIGZyb20gJy4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcbmltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gJy4vY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzJztcbmltcG9ydCBTYW1wbGVGaWVsZCBmcm9tICcuL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qcyc7XG5cbmNsYXNzIE1haW57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOy8vXG4gICAgfVxufVxuXG52YXIgYXBwO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGF1bmNoOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKChhcHAgaW5zdGFuY2VvZiBNYWluKSlyZXR1cm47XG4gICAgICAgIGFwcCA9IG5ldyBNYWluKCk7XG4gICAgfSxcbiAgICBTYW1wbGVGaWVsZDpTYW1wbGVGaWVsZCxcbiAgICBBbmltYXRpb25NYW5hZ2VyOkFuaW1hdGlvbk1hbmFnZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvYXBwLmVzNn5cbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vbGF5b3V0L0hlYWRlci5qcyc7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vbGF5b3V0L0JvZHkuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vbGF5b3V0L0Zvb3Rlci5qcyc7XHJcblxyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCJcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxpemVTdGF0ZTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLmFkZExpc3RlbmVyKFNhbXBsZU1hbmFnZXIuQ09ORklHX0xPQURFRCx0aGlzLm9uU2FtcGxlQ29uZmlnUmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlBSRV9SRUFEWV9TQU1QTEUsdGhpcy5vblNhbXBsZVByZVJlYWR5LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzTW91bnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluaXRpYWxpemVTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDpjb25maWcubWluSGVpZ2h0IC8vZG9jdW1lbnQgbWFyZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhbXBsZXNEYXRhOm51bGwsXHJcbiAgICAgICAgICAgIHNhbXBsZUN1cnI6bnVsbCAvL+W9k+WJjeS+i+WtkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3R5bGUubWluSGVpZ2h0IT09d2luZG93LmlubmVySGVpZ2h0LTE2KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodC0xNiAvL2RvY3VtZW50IG1hcmdpblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVDb25maWdSZWFkeSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzYW1wbGVzRGF0YTpTYW1wbGVNYW5hZ2VyLnNhbXBsZXNEYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVQcmVSZWFkeShlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2FtcGxlQ3VycjplLnNhbXBsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge3RoaXMuaXNNb3VudCA9IHRydWU7fVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7dGhpcy5pc01vdW50ID0gZmFsc2V9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvL3RoaXMuc3RhdGUud2luZG93UmVzaXplZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFwcCA9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcGFnZSBwdWxsLWNlbnRlciBwYXBlclwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkgc2FtcGxlQ3Vycj17dGhpcy5zdGF0ZS5zYW1wbGVDdXJyfSBzYW1wbGVzRGF0YT17dGhpcy5zdGF0ZS5zYW1wbGVzRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9BcHAuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+wqkgMjAxNSZuYnNwOzxhIGhyZWY9e2NvbmZpZy51cmx9PnRvbW15enptPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlBvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhY3Q8L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL1wiIHRhcmdldD1cIl9ibGFua1wiPkJvb3RTdHJhcDwvYT48L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIwLlxyXG4gKi9cclxuZXhwb3J0IHZhciB1cmwgPSB7XHJcbiAgICBqb2luOmZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgam9pbmVkID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLmpvaW4oJy8nKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcPy9nLCAnPycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwjL2csICcjJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXDpcXC8vZywgJzovLycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwuXFwvL2csICdcXC8nKTtcclxuICAgICAgICB9KShqb2luZWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciByZXggPSB7XHJcbiAgICBodG1sU2luZ2xlVGFnOigvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy9cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgY29uc3RhbnRzID0ge1xyXG4gICAgUEk6TWF0aC5QSSxcclxuICAgIFBJXzI6IE1hdGguUEkgKiAyLFxyXG4gICAgUkFEX1RPX0RFRzoxODAgLyBNYXRoLlBJLFxyXG4gICAgREVHX1RPX1JBRDpNYXRoLlBJIC8gMTgwXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IHtcclxuICAgIHVybDpcImh0dHA6Ly93d3cuY2hhbGV0NTgxLnh5elwiLFxyXG4gICAgZ2V0IG1pbkhlaWdodCgpe1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQtMTY7XHJcbiAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3V0aWxzL3V0aWxzLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cInNpdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPldlYkdMIHRlc3Q8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90b21teVpaTS93ZWJHTFByYXRpY2VcIiB0aXRsZT1cIndhdGNoIHNvdXJjZSBvbiBnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1naXRodWItYWx0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb25maWcudXJsfSB0aXRsZT1cImJsb2dcIj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2l0ZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJyXCI+PGE+5qCX5a2QPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2luYy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9pbmMvU2lkZUJhci5qc1wiO1xyXG5cclxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gIDxkaXYgaWQ9XCJzaXRlLW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBzYW1wbGVDb250ZW50PXt0aGlzLnByb3BzLnNhbXBsZUN1cnJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzYW1wbGVzTGlzdD17KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2FtcGxlc0RhdGEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLnNhbXBsZXNEYXRhLnBvc3RzKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zYW1wbGVzRGF0YS5wb3N0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvQm9keS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Qm9vdHN0cmFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2x9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5pbXBvcnQgY29sb3IgZnJvbSBcImNvbG9yXCI7XHJcblxyXG5pbXBvcnQgU2FtcGxlUmVuZGVyZXIgZnJvbSAnLi4vY29udGVudC9TYW1wbGVSZW5kZXJlci5qcydcclxuaW1wb3J0IFNhbXBsZU1hbmFnZXIgZnJvbSAnLi4vLi4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcclxuXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIlxyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlBSRV9SRUFEWV9TQU1QTEUsdGhpcy5vblNhbXBsZVByZVJlYWR5LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb25TYW1wbGVQcmVSZWFkeSgpIHtcclxuICAgIC8vXHJcbiAgICAvL31cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbnRlbnQgXCIgbWQ9ezl9IHN0eWxlPXt7bWluSGVpZ2h0OmNvbmZpZy5taW5IZWlnaHQtMTM4LTkxfX0+XHJcbiAgICAgICAgICAgICAgICB7KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zYW1wbGVDb250ZW50JiZ0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1hcmtkb3duIGlkPXt0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWR9IHNvdXJjZT17dGhpcy5wcm9wcy5zYW1wbGVDb250ZW50Lm1hcmtkb3dufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyID0gbmV3IFNhbXBsZVJlbmRlcmVyKHtzb3VyY2Vwb3M6IHRydWV9KTtcclxuICAgICAgICB0aGlzLmlzUmVuZGVyU3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1F1ZXJ5ID0gW107XHJcbiAgICAgICAgdGhpcy5jYW52YXNEaWN0ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyLnJlbmRlckh0bWwoXCJjYW52YXNcIiwodGFnLGF0dHJzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPENhbnZhcyBwYXJlbnQ9e3RoaXN9IG5hbWU9e2F0dHJzLm5hbWV8fFwiXCJ9IGJlbG9uZ3N0bz17dGhpcy5wcm9wcy5pZH0vPjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5jYW52YXNEaWN0KXtcclxuICAgICAgICAgICAgZGljdFtpXSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuY2FudmFzRGljdFtpXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYW52YXM6e1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6dGhpcy5jYW52YXNRdWVyeS5tYXAoKGNhbnZhcyk9PntyZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY2FudmFzKX0pLFxyXG4gICAgICAgICAgICAgICAgZGlyY3Q6ZGljdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLnJlYWR5U2FtcGxlKHRoaXMucHJvcHMuaWQsZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNRdWVyeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLnNvdXJjZSA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMubWFya1JlbmRlcmVyLnJlbmRlcih0aGlzLnByb3BzLnNvdXJjZSB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICBpZihlbGVtZW50cyYmIWVsZW1lbnRzLnNvbWUoKGVsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZSlcclxuICAgICAgICAgICAgICAgIH0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZW5kZXJTdWNjZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShSZWFjdCxbXCJkaXZcIix7Y2xhc3NOYW1lOlwibWFya2Rvd25cIn1dLmNvbmNhdChlbGVtZW50cykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vb3BcIj48L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2FudmFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wcm9wcy5wYXJlbnQ7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5jYW52YXNRdWVyeS5wdXNoKGNhbnZhcyk7XHJcbiAgICAgICAgLy92YXIgZ2w9Y2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuICAgICAgICAvL3ZhciBiYWNrZ3JvdW5kID0gY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvcnx8d2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kID0gY29sb3IoYmFja2dyb3VuZCkucmdiKCk7XHJcbiAgICAgICAgLy9nbC5jbGVhckNvbG9yKGJhY2tncm91bmQuci8yNTUsIGJhY2tncm91bmQuZy8yNTUsIGJhY2tncm91bmQuYi8yNTUsIDEuMCk7XHJcbiAgICAgICAgLy9nbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5uYW1lKXBhcmVudC5jYW52YXNEaWN0W3RoaXMucHJvcHMubmFtZV09Y2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxjYW52YXMga2V5PXt0aGlzLnByb3BzLmJlbG9uZ3N0bytcIl9cIit0aGlzLnByb3BzLm5hbWV9IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gZGF0YS1iZWxvbmdzdG89e3RoaXMucHJvcHMuYmVsb25nc3RvfT48L2NhbnZhcz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvaW5jL0NvbnRlbnQuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjMuXHJcbiAqL1xyXG4vL+a4suafk1NhbXBsZVxyXG5cclxuaW1wb3J0IENvbW1vbk1hcmtSZW5kZXIgZnJvbSBcIi4vQ29tbW9uTWFya1JlbmRlci5qc1wiO1xyXG5cclxuLy9pbXBvcnQgTWFya2VkUmVuZGVyZXIgZnJvbSBcIi4vbWFya2Rvd24vTWFya2VkUmVuZGVyZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbk1hcmtSZW5kZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2NvbnRlbnQvU2FtcGxlUmVuZGVyZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjQuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBDb21tb25tYXJrIGZyb20gJ2NvbW1vbm1hcmsnO1xyXG5cclxudmFyIHJleCA9IHtcclxuICAgIGh0bWxTaW5nbGVUYWc6KC9ePChcXHcrKVxccyooLiopXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy8sXHJcbiAgICBodG1sUHJvcHM6LyhcXHcrKT0oW14+XSspL2lcclxufTtcclxuXHJcbnZhciBkb21JZGVudGl0eTtcclxuaWYodHlwZW9mIGRvY3VtZW50IT09XCJ1bmRlZmluZWRcIil7XHJcbiAgICBkb21JZGVudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbn1lbHNle1xyXG4gICAgY29uc29sZS5lcnJvcihcImRvY3VtZW50IHVuZGVmaW5lZCFcIik7XHJcbn1cclxuXHJcbnZhciBtYXJrUHJhc2VyID0gbmV3IENvbW1vbm1hcmsuUGFyc2VyKCk7XHJcblxyXG5jbGFzcyBSZW5kZXJlciBpbXBsZW1lbnRzIElDb21tb25tYXJrUmVuZGVyZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuICAgICAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5zb3VyY2VQb3M9b3B0cy5zb3VyY2VQb3M7XHJcbiAgICAgICAgdGhpcy5zb2Z0QnJlYWsgPSBvcHRzLnNvZnRCcmVhayB8fCAnXFxuJztcclxuICAgICAgICB0aGlzLmVzY2FwZUh0bWwgPSAhIW9wdHMuZXNjYXBlSHRtbDtcclxuICAgICAgICB0aGlzLnNraXBIdG1sID0gISFvcHRzLnNraXBIdG1sO1xyXG5cclxuICAgICAgICB0aGlzLmhvd1JlbmRlckh0bWwgPSB7fTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckh0bWwodGFnTmFtZSxmbil7XHJcbiAgICAgICAgaWYodHlwZW9mIGZuIT09XCJmdW5jdGlvblwiKXJldHVybjtcclxuICAgICAgICB0aGlzLmhvd1JlbmRlckh0bWxbdGFnTmFtZV09Zm5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc291cmNlKXtcclxuICAgICAgICB2YXIgYmxvY2sgPSBtYXJrUHJhc2VyLnBhcnNlKHNvdXJjZSB8fCAnJyk7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gTWFya2Rvd25Ob2RlRWxlbWVudDtcclxuXHJcbiAgICAgICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xyXG4gICAgICAgIHZhciBzb3VyY2VQb3MgPSB0aGlzLnNvdXJjZVBvcztcclxuICAgICAgICB2YXIgZXNjYXBlSHRtbCA9IHRoaXMuZXNjYXBlSHRtbDtcclxuICAgICAgICB2YXIgc2tpcEh0bWwgPSB0aGlzLnNraXBIdG1sO1xyXG4gICAgICAgIHZhciBpbmZvV29yZHM7XHJcbiAgICAgICAgdmFyIHNvZnRCcmVhayA9IChcclxuICAgICAgICAgICAgdGhpcy5zb2Z0QnJlYWsgPT09ICdicicgP1xyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInKSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvZnRCcmVha1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBlLCBub2RlLCBlbnRlcmluZywgbGVhdmluZywgYXR0cnMsIGRvYztcclxuICAgICAgICB3aGlsZSAoKGUgPSB3YWxrZXIubmV4dCgpKSkge1xyXG4gICAgICAgICAgICBlbnRlcmluZyA9IGUuZW50ZXJpbmc7XHJcbiAgICAgICAgICAgIGxlYXZpbmcgPSAhZW50ZXJpbmc7XHJcbiAgICAgICAgICAgIG5vZGUgPSBlLm5vZGU7XHJcbiAgICAgICAgICAgIGF0dHJzID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRvYykge1xyXG4gICAgICAgICAgICAgICAgZG9jID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucmVhY3QgPSB7IGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc291cmNlUG9zICYmIG5vZGUuc291cmNlcG9zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbm9kZS5zb3VyY2Vwb3M7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1snZGF0YS1zb3VyY2Vwb3MnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICBwb3NbMF1bMF0sICc6JywgcG9zWzBdWzFdLCAnLScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWzFdWzBdLCAnOicsIHBvc1sxXVsxXVxyXG4gICAgICAgICAgICAgICAgXS5tYXAoU3RyaW5nKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1BhcmFncmFwaCcgJiYgc2VsZi5pc0dyYW5kUGFyZW50T2ZMaXN0KG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxlYXZpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdJbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LnByb3BzLmFsdCA9IG5vZGUucmVhY3QuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlICE9PSBkb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC50YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QucHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRW50ZXJpbmcgYSBuZXcgbm9kZVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSHRtbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIdG1sQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGVIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgbm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFza2lwSHRtbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxwcmFzZSA9IHJleC5odG1sU2luZ2xlVGFnLmV4ZWMobm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShodG1scHJhc2UpJiZodG1scHJhc2VbMV0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sdGFnID0gaHRtbHByYXNlWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxlbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tSWRlbnRpdHkuaW5uZXJIVE1MID0gbm9kZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxhdHRyaWJ1dGVzID0gZG9tSWRlbnRpdHkuY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxodG1sYXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGh0bWxhdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gYS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuYW1lLnRvTG93ZXJDYXNlKCk9PT1cImNsYXNzbmFtZVwiKXtuYW1lPVwiY2xhc3NOYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzW25hbWVdID0gYS5ub2RlVmFsdWUubGVuZ3RoPjA/YS5ub2RlVmFsdWU6dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuaG93UmVuZGVySHRtbFtodG1sdGFnXT09PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbGVsZSA9IHRoaXMuaG93UmVuZGVySHRtbFtodG1sdGFnXShodG1sdGFnLGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxlbGUgPSBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWx0YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihodG1sZWxlLl9fcHJvdG9fXyAmJiBodG1sZWxlLl9fcHJvdG9fXy5faXNSZWFjdEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgaHRtbGVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Li4ue2h0bWxwcmFzZVswXX0gcHJhc2UgZmFpbC4uLjwvcD4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnVGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBub2RlLmxpdGVyYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUGFyYWdyYXBoJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAncCcsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hlYWRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2gnICsgbm9kZS5sZXZlbCwgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU29mdGJyZWFrJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNvZnRCcmVhayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJvbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdzdHJvbmcnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaW5rJzpcclxuICAgICAgICAgICAgICAgICAgICBhdHRycy5ocmVmID0gbm9kZS5kZXN0aW5hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBhdHRycy50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLnRpdGxlID0gbm9kZS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2EnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdJbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMuc3JjID0gbm9kZS5kZXN0aW5hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy50aXRsZSA9IG5vZGUudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdpbWcnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdFbXBoJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnZW0nLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDb2RlJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25vZGUubGl0ZXJhbF1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0NvZGVCbG9jayc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb1dvcmRzID0gbm9kZS5pbmZvID8gbm9kZS5pbmZvLnNwbGl0KC8gKy8pIDogW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzpoaWdobGlnaHRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixpbmZvV29yZHNbMF18fFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGVXcmFwcGVyLmFwcGVuZENoaWxkKGNvZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgaGxqcyE9PVwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGhsanMuaGlnaGxpZ2h0QXV0byhub2RlLmxpdGVyYWwsW2luZm9Xb3Jkc1swXV0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGhsanMuaGlnaGxpZ2h0QXV0byhub2RlLmxpdGVyYWwsW2luZm9Xb3Jkc1swXV0pLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBjb2RlID0gc2VsZi5jcmVhdGVFbGVtZW50KCdjb2RlJywgYXR0cnMsIFtub2RlLmxpdGVyYWxdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudCgncHJlJywge2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6Y29kZVdyYXBwZXIuaW5uZXJIVE1MfX0pKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Jsb2NrUXVvdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdibG9ja3F1b3RlJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGlzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbm9kZS5saXN0U3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ICE9PSBudWxsICYmIHN0YXJ0ICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLnN0YXJ0ID0gc3RhcnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgbm9kZS5saXN0VHlwZSA9PT0gJ0J1bGxldCcgPyAndWwnIDogJ29sJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSXRlbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2xpJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSG9yaXpvbnRhbFJ1bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgc2VsZi5jcmVhdGVFbGVtZW50KCdocicsIGF0dHJzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdEb2N1bWVudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBub2RlIHR5cGUgXCInICsgbm9kZS50eXBlICsgJ1wiJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2MucmVhY3QuY2hpbGRyZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1hcmtkb3duTm9kZUVsZW1lbnR7XHJcbiAgICBzdGF0aWMgdGFnKG5vZGUsIG5hbWUsIGF0dHJzLCBjaGlsZHJlbil7XHJcbiAgICAgICAgbm9kZS5yZWFjdCA9IHtcclxuICAgICAgICAgICAgdGFnOiBuYW1lLFxyXG4gICAgICAgICAgICBwcm9wczogYXR0cnMsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzR3JhbmRQYXJlbnRPZkxpc3Qobm9kZSl7XHJcbiAgICAgICAgaWYoIW5vZGV8fCFub2RlLnBhcmVudCl7cmV0dXJuIGZhbHNlfVxyXG4gICAgICAgIHZhciBncmFuZHBhcmVudCA9IG5vZGUucGFyZW50LnBhcmVudDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBncmFuZHBhcmVudCAmJlxyXG4gICAgICAgICAgICBncmFuZHBhcmVudC50eXBlID09PSAnTGlzdCcgJiZcclxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQubGlzdFRpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkQ2hpbGQobm9kZSwgY2hpbGQpe1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9IHdoaWxlICghcGFyZW50LnJlYWN0KTtcclxuXHJcbiAgICAgICAgcGFyZW50LnJlYWN0LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0YWdOYW1lXHJcbiAgICAgKiBAcGFyYW0gcHJvcHNcclxuICAgICAqIEBwYXJhbSBjaGlsZHJlblxyXG4gICAgICogQHJldHVybnMge0RPTUVsZW1lbnQ8QXJyYXk8YW55PnxhbnlbXT58Q2xhc3NpY0VsZW1lbnQ8QXJyYXk8YW55PnxhbnlbXT58UmVhY3RFbGVtZW50PEFycmF5PGFueT58YW55W10+fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgY2hpbGRyZW4pe1xyXG4gICAgICAgIHZhciBhcmdzID0gW3RhZ05hbWUsIHByb3BzXS5jb25jYXQoY2hpbGRyZW4pO1xyXG4gICAgICAgIHZhciBjaGlsZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkoUmVhY3QsIGFyZ3MpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9Db21tb25NYXJrUmVuZGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGNvbW1vbm1hcmsuanMgLSBDb21tb21NYXJrIGluIEphdmFTY3JpcHRcbi8vIENvcHlyaWdodCAoQykgMjAxNCBKb2huIE1hY0ZhcmxhbmVcbi8vIExpY2Vuc2U6IEJTRDMuXG5cbi8vIEJhc2ljIHVzYWdlOlxuLy9cbi8vIHZhciBjb21tb25tYXJrID0gcmVxdWlyZSgnY29tbW9ubWFyaycpO1xuLy8gdmFyIHBhcnNlciA9IG5ldyBjb21tb25tYXJrLlBhcnNlcigpO1xuLy8gdmFyIHJlbmRlcmVyID0gbmV3IGNvbW1vbm1hcmsuSHRtbFJlbmRlcmVyKCk7XG4vLyBjb25zb2xlLmxvZyhyZW5kZXJlci5yZW5kZXIocGFyc2VyLnBhcnNlKCdIZWxsbyAqd29ybGQqJykpKTtcblxubW9kdWxlLmV4cG9ydHMuTm9kZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xubW9kdWxlLmV4cG9ydHMuUGFyc2VyID0gcmVxdWlyZSgnLi9ibG9ja3MnKTtcbm1vZHVsZS5leHBvcnRzLkh0bWxSZW5kZXJlciA9IHJlcXVpcmUoJy4vaHRtbCcpO1xubW9kdWxlLmV4cG9ydHMuWG1sUmVuZGVyZXIgPSByZXF1aXJlKCcuL3htbCcpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGlzQ29udGFpbmVyKG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUuX3R5cGUpIHtcbiAgICBjYXNlICdEb2N1bWVudCc6XG4gICAgY2FzZSAnQmxvY2tRdW90ZSc6XG4gICAgY2FzZSAnTGlzdCc6XG4gICAgY2FzZSAnSXRlbSc6XG4gICAgY2FzZSAnUGFyYWdyYXBoJzpcbiAgICBjYXNlICdIZWFkZXInOlxuICAgIGNhc2UgJ0VtcGgnOlxuICAgIGNhc2UgJ1N0cm9uZyc6XG4gICAgY2FzZSAnTGluayc6XG4gICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG52YXIgcmVzdW1lQXQgPSBmdW5jdGlvbihub2RlLCBlbnRlcmluZykge1xuICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XG4gICAgdGhpcy5lbnRlcmluZyA9IChlbnRlcmluZyA9PT0gdHJ1ZSk7XG59O1xuXG52YXIgbmV4dCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGN1ciA9IHRoaXMuY3VycmVudDtcbiAgICB2YXIgZW50ZXJpbmcgPSB0aGlzLmVudGVyaW5nO1xuXG4gICAgaWYgKGN1ciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gaXNDb250YWluZXIoY3VyKTtcblxuICAgIGlmIChlbnRlcmluZyAmJiBjb250YWluZXIpIHtcbiAgICAgICAgaWYgKGN1ci5fZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VyLl9maXJzdENoaWxkO1xuICAgICAgICAgICAgdGhpcy5lbnRlcmluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzdGF5IG9uIG5vZGUgYnV0IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZW50ZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjdXIgPT09IHRoaXMucm9vdCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgfSBlbHNlIGlmIChjdXIuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VyLl9wYXJlbnQ7XG4gICAgICAgIHRoaXMuZW50ZXJpbmcgPSBmYWxzZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1ci5fbmV4dDtcbiAgICAgICAgdGhpcy5lbnRlcmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtlbnRlcmluZzogZW50ZXJpbmcsIG5vZGU6IGN1cn07XG59O1xuXG52YXIgTm9kZVdhbGtlciA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgICByZXR1cm4geyBjdXJyZW50OiByb290LFxuICAgICAgICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgICAgICAgZW50ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgbmV4dDogbmV4dCxcbiAgICAgICAgICAgICByZXN1bWVBdDogcmVzdW1lQXQgfTtcbn07XG5cbnZhciBOb2RlID0gZnVuY3Rpb24obm9kZVR5cGUsIHNvdXJjZXBvcykge1xuICAgIHRoaXMuX3R5cGUgPSBub2RlVHlwZTtcbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX2ZpcnN0Q2hpbGQgPSBudWxsO1xuICAgIHRoaXMuX2xhc3RDaGlsZCA9IG51bGw7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgdGhpcy5fbmV4dCA9IG51bGw7XG4gICAgdGhpcy5fc291cmNlcG9zID0gc291cmNlcG9zO1xuICAgIHRoaXMuX2xhc3RMaW5lQmxhbmsgPSBmYWxzZTtcbiAgICB0aGlzLl9vcGVuID0gdHJ1ZTtcbiAgICB0aGlzLl9zdHJpbmdfY29udGVudCA9IG51bGw7XG4gICAgdGhpcy5fbGl0ZXJhbCA9IG51bGw7XG4gICAgdGhpcy5fbGlzdERhdGEgPSBudWxsO1xuICAgIHRoaXMuX2luZm8gPSBudWxsO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gbnVsbDtcbiAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgdGhpcy5faXNGZW5jZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9mZW5jZUNoYXIgPSBudWxsO1xuICAgIHRoaXMuX2ZlbmNlTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mZW5jZU9mZnNldCA9IG51bGw7XG4gICAgdGhpcy5fbGV2ZWwgPSBudWxsO1xufTtcblxudmFyIHByb3RvID0gTm9kZS5wcm90b3R5cGU7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2lzQ29udGFpbmVyJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNDb250YWluZXIodGhpcyk7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICd0eXBlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90eXBlOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZmlyc3RDaGlsZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZmlyc3RDaGlsZDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xhc3RDaGlsZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGFzdENoaWxkOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbmV4dCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbmV4dDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3ByZXYnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3ByZXY7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwYXJlbnQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3BhcmVudDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3NvdXJjZXBvcycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fc291cmNlcG9zOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGl0ZXJhbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGl0ZXJhbDsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5fbGl0ZXJhbCA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdkZXN0aW5hdGlvbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGVzdGluYXRpb247IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2Rlc3RpbmF0aW9uID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3RpdGxlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5fdGl0bGUgPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnaW5mbycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5faW5mbzsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5faW5mbyA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsZXZlbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2xldmVsID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3RUeXBlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXN0RGF0YS50eXBlOyB9LFxuICAgIHNldDogZnVuY3Rpb24odCkgeyB0aGlzLl9saXN0RGF0YS50eXBlID0gdDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3RUaWdodCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEudGlnaHQ7IH0sXG4gICAgc2V0OiBmdW5jdGlvbih0KSB7IHRoaXMuX2xpc3REYXRhLnRpZ2h0ID0gdDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3RTdGFydCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEuc3RhcnQ7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihuKSB7IHRoaXMuX2xpc3REYXRhLnN0YXJ0ID0gbjsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3REZWxpbWl0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLmRlbGltaXRlcjsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGRlbGltKSB7IHRoaXMuX2xpc3REYXRhLmRlbGltaXRlciA9IGRlbGltOyB9XG59KTtcblxuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbihjaGlsZCkge1xuICAgIGNoaWxkLnVubGluaygpO1xuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5fbGFzdENoaWxkLl9uZXh0ID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLl9wcmV2ID0gdGhpcy5fbGFzdENoaWxkO1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZCA9IGNoaWxkO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLnByZXBlbmRDaGlsZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgY2hpbGQudW5saW5rKCk7XG4gICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2ZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZC5fcHJldiA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5fbmV4dCA9IHRoaXMuX2ZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZCA9IGNoaWxkO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLnVubGluayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wcmV2KSB7XG4gICAgICAgIHRoaXMuX3ByZXYuX25leHQgPSB0aGlzLl9uZXh0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5fZmlyc3RDaGlsZCA9IHRoaXMuX25leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXh0KSB7XG4gICAgICAgIHRoaXMuX25leHQuX3ByZXYgPSB0aGlzLl9wcmV2O1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5fbGFzdENoaWxkID0gdGhpcy5fcHJldjtcbiAgICB9XG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbn07XG5cbk5vZGUucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24oc2libGluZykge1xuICAgIHNpYmxpbmcudW5saW5rKCk7XG4gICAgc2libGluZy5fbmV4dCA9IHRoaXMuX25leHQ7XG4gICAgaWYgKHNpYmxpbmcuX25leHQpIHtcbiAgICAgICAgc2libGluZy5fbmV4dC5fcHJldiA9IHNpYmxpbmc7XG4gICAgfVxuICAgIHNpYmxpbmcuX3ByZXYgPSB0aGlzO1xuICAgIHRoaXMuX25leHQgPSBzaWJsaW5nO1xuICAgIHNpYmxpbmcuX3BhcmVudCA9IHRoaXMuX3BhcmVudDtcbiAgICBpZiAoIXNpYmxpbmcuX25leHQpIHtcbiAgICAgICAgc2libGluZy5fcGFyZW50Ll9sYXN0Q2hpbGQgPSBzaWJsaW5nO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uKHNpYmxpbmcpIHtcbiAgICBzaWJsaW5nLnVubGluaygpO1xuICAgIHNpYmxpbmcuX3ByZXYgPSB0aGlzLl9wcmV2O1xuICAgIGlmIChzaWJsaW5nLl9wcmV2KSB7XG4gICAgICAgIHNpYmxpbmcuX3ByZXYuX25leHQgPSBzaWJsaW5nO1xuICAgIH1cbiAgICBzaWJsaW5nLl9uZXh0ID0gdGhpcztcbiAgICB0aGlzLl9wcmV2ID0gc2libGluZztcbiAgICBzaWJsaW5nLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgaWYgKCFzaWJsaW5nLl9wcmV2KSB7XG4gICAgICAgIHNpYmxpbmcuX3BhcmVudC5fZmlyc3RDaGlsZCA9IHNpYmxpbmc7XG4gICAgfVxufTtcblxuTm9kZS5wcm90b3R5cGUud2Fsa2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBOb2RlV2Fsa2VyKHRoaXMpO1xuICAgIHJldHVybiB3YWxrZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGU7XG5cblxuLyogRXhhbXBsZSBvZiB1c2Ugb2Ygd2Fsa2VyOlxuXG4gdmFyIHdhbGtlciA9IHcud2Fsa2VyKCk7XG4gdmFyIGV2ZW50O1xuXG4gd2hpbGUgKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkge1xuIGNvbnNvbGUubG9nKGV2ZW50LmVudGVyaW5nLCBldmVudC5ub2RlLnR5cGUpO1xuIH1cblxuICovXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9ub2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTm9kZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xudmFyIHVuZXNjYXBlU3RyaW5nID0gcmVxdWlyZSgnLi9jb21tb24nKS51bmVzY2FwZVN0cmluZztcbnZhciBPUEVOVEFHID0gcmVxdWlyZSgnLi9jb21tb24nKS5PUEVOVEFHO1xudmFyIENMT1NFVEFHID0gcmVxdWlyZSgnLi9jb21tb24nKS5DTE9TRVRBRztcblxudmFyIENPREVfSU5ERU5UID0gNDtcblxudmFyIENfTkVXTElORSA9IDEwO1xudmFyIENfR1JFQVRFUlRIQU4gPSA2MjtcbnZhciBDX0xFU1NUSEFOID0gNjA7XG52YXIgQ19TUEFDRSA9IDMyO1xudmFyIENfT1BFTl9CUkFDS0VUID0gOTE7XG5cbnZhciBJbmxpbmVQYXJzZXIgPSByZXF1aXJlKCcuL2lubGluZXMnKTtcblxudmFyIHJlSHRtbEJsb2NrT3BlbiA9IFtcbiAgIC8uLywgLy8gZHVtbXkgZm9yIDBcbiAgIC9ePCg/OnNjcmlwdHxwcmV8c3R5bGUpKD86XFxzfD58JCkvaSxcbiAgIC9ePCEtLS8sXG4gICAvXjxbP10vLFxuICAgL148IVtBLVpdLyxcbiAgIC9ePCFcXFtDREFUQVxcWy8sXG4gICAvXjxbL10/KD86YWRkcmVzc3xhcnRpY2xlfGFzaWRlfGJhc2V8YmFzZWZvbnR8YmxvY2txdW90ZXxib2R5fGNhcHRpb258Y2VudGVyfGNvbHxjb2xncm91cHxkZHxkZXRhaWxzfGRpYWxvZ3xkaXJ8ZGl2fGRsfGR0fGZpZWxkc2V0fGZpZ2NhcHRpb258ZmlndXJlfGZvb3Rlcnxmb3JtfGZyYW1lfGZyYW1lc2V0fGgxfGhlYWR8aGVhZGVyfGhyfGh0bWx8bGVnZW5kfGxpfGxpbmt8bWFpbnxtZW51fG1lbnVpdGVtfG1ldGF8bmF2fG5vZnJhbWVzfG9sfG9wdGdyb3VwfG9wdGlvbnxwfHBhcmFtfHByZXxzZWN0aW9ufHNvdXJjZXx0aXRsZXxzdW1tYXJ5fHRhYmxlfHRib2R5fHRkfHRmb290fHRofHRoZWFkfHRpdGxlfHRyfHRyYWNrfHVsKSg/Olxcc3xbL10/Wz5dfCQpL2ksXG4gICAgbmV3IFJlZ0V4cCgnXig/OicgKyBPUEVOVEFHICsgJ3wnICsgQ0xPU0VUQUcgKyAnKVxccyokJywgJ2knKVxuXTtcblxudmFyIHJlSHRtbEJsb2NrQ2xvc2UgPSBbXG4gICAvLi8sIC8vIGR1bW15IGZvciAwXG4gICAvPFxcLyg/OnNjcmlwdHxwcmV8c3R5bGUpPi9pLFxuICAgLy0tPi8sXG4gICAvXFw/Pi8sXG4gICAvPi8sXG4gICAvXFxdXFxdPi9cbl07XG5cbnZhciByZUhydWxlID0gL14oPzooPzpcXCogKil7Myx9fCg/Ol8gKil7Myx9fCg/Oi0gKil7Myx9KSAqJC87XG5cbnZhciByZU1heWJlU3BlY2lhbCA9IC9eWyNgfiorXz08PjAtOS1dLztcblxudmFyIHJlTm9uU3BhY2UgPSAvW14gXFx0XFxmXFx2XFxyXFxuXS87XG5cbnZhciByZUJ1bGxldExpc3RNYXJrZXIgPSAvXlsqKy1dKCArfCQpLztcblxudmFyIHJlT3JkZXJlZExpc3RNYXJrZXIgPSAvXihcXGR7MSw5fSkoWy4pXSkoICt8JCkvO1xuXG52YXIgcmVBVFhIZWFkZXJNYXJrZXIgPSAvXiN7MSw2fSg/OiArfCQpLztcblxudmFyIHJlQ29kZUZlbmNlID0gL15gezMsfSg/IS4qYCl8Xn57Myx9KD8hLip+KS87XG5cbnZhciByZUNsb3NpbmdDb2RlRmVuY2UgPSAvXig/OmB7Myx9fH57Myx9KSg/PSAqJCkvO1xuXG52YXIgcmVTZXRleHRIZWFkZXJMaW5lID0gL14oPzo9K3wtKykgKiQvO1xuXG52YXIgcmVMaW5lRW5kaW5nID0gL1xcclxcbnxcXG58XFxyLztcblxuLy8gUmV0dXJucyB0cnVlIGlmIHN0cmluZyBjb250YWlucyBvbmx5IHNwYWNlIGNoYXJhY3RlcnMuXG52YXIgaXNCbGFuayA9IGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gIShyZU5vblNwYWNlLnRlc3QocykpO1xufTtcblxudmFyIHBlZWsgPSBmdW5jdGlvbihsbiwgcG9zKSB7XG4gICAgaWYgKHBvcyA8IGxuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbG4uY2hhckNvZGVBdChwb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59O1xuXG4vLyBET0MgUEFSU0VSXG5cbi8vIFRoZXNlIGFyZSBtZXRob2RzIG9mIGEgUGFyc2VyIG9iamVjdCwgZGVmaW5lZCBiZWxvdy5cblxuLy8gUmV0dXJucyB0cnVlIGlmIGJsb2NrIGVuZHMgd2l0aCBhIGJsYW5rIGxpbmUsIGRlc2NlbmRpbmcgaWYgbmVlZGVkXG4vLyBpbnRvIGxpc3RzIGFuZCBzdWJsaXN0cy5cbnZhciBlbmRzV2l0aEJsYW5rTGluZSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgd2hpbGUgKGJsb2NrKSB7XG4gICAgICAgIGlmIChibG9jay5fbGFzdExpbmVCbGFuaykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHQgPSBibG9jay50eXBlO1xuICAgICAgICBpZiAodCA9PT0gJ0xpc3QnIHx8IHQgPT09ICdJdGVtJykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9jay5fbGFzdENoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gQnJlYWsgb3V0IG9mIGFsbCBjb250YWluaW5nIGxpc3RzLCByZXNldHRpbmcgdGhlIHRpcCBvZiB0aGVcbi8vIGRvY3VtZW50IHRvIHRoZSBwYXJlbnQgb2YgdGhlIGhpZ2hlc3QgbGlzdCwgYW5kIGZpbmFsaXppbmdcbi8vIGFsbCB0aGUgbGlzdHMuICAoVGhpcyBpcyB1c2VkIHRvIGltcGxlbWVudCB0aGUgXCJ0d28gYmxhbmsgbGluZXNcbi8vIGJyZWFrIG9mIG9mIGFsbCBsaXN0c1wiIGZlYXR1cmUuKVxudmFyIGJyZWFrT3V0T2ZMaXN0cyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIGIgPSBibG9jaztcbiAgICB2YXIgbGFzdF9saXN0ID0gbnVsbDtcbiAgICBkbyB7XG4gICAgICAgIGlmIChiLnR5cGUgPT09ICdMaXN0Jykge1xuICAgICAgICAgICAgbGFzdF9saXN0ID0gYjtcbiAgICAgICAgfVxuICAgICAgICBiID0gYi5fcGFyZW50O1xuICAgIH0gd2hpbGUgKGIpO1xuXG4gICAgaWYgKGxhc3RfbGlzdCkge1xuICAgICAgICB3aGlsZSAoYmxvY2sgIT09IGxhc3RfbGlzdCkge1xuICAgICAgICAgICAgdGhpcy5maW5hbGl6ZShibG9jaywgdGhpcy5saW5lTnVtYmVyKTtcbiAgICAgICAgICAgIGJsb2NrID0gYmxvY2suX3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbmFsaXplKGxhc3RfbGlzdCwgdGhpcy5saW5lTnVtYmVyKTtcbiAgICAgICAgdGhpcy50aXAgPSBsYXN0X2xpc3QuX3BhcmVudDtcbiAgICB9XG59O1xuXG4vLyBBZGQgYSBsaW5lIHRvIHRoZSBibG9jayBhdCB0aGUgdGlwLiAgV2UgYXNzdW1lIHRoZSB0aXBcbi8vIGNhbiBhY2NlcHQgbGluZXMgLS0gdGhhdCBjaGVjayBzaG91bGQgYmUgZG9uZSBiZWZvcmUgY2FsbGluZyB0aGlzLlxudmFyIGFkZExpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRpcC5fc3RyaW5nX2NvbnRlbnQgKz0gdGhpcy5jdXJyZW50TGluZS5zbGljZSh0aGlzLm9mZnNldCkgKyAnXFxuJztcbn07XG5cbi8vIEFkZCBibG9jayBvZiB0eXBlIHRhZyBhcyBhIGNoaWxkIG9mIHRoZSB0aXAuICBJZiB0aGUgdGlwIGNhbid0XG4vLyBhY2NlcHQgY2hpbGRyZW4sIGNsb3NlIGFuZCBmaW5hbGl6ZSBpdCBhbmQgdHJ5IGl0cyBwYXJlbnQsXG4vLyBhbmQgc28gb24gdGlsIHdlIGZpbmQgYSBibG9jayB0aGF0IGNhbiBhY2NlcHQgY2hpbGRyZW4uXG52YXIgYWRkQ2hpbGQgPSBmdW5jdGlvbih0YWcsIG9mZnNldCkge1xuICAgIHdoaWxlICghdGhpcy5ibG9ja3NbdGhpcy50aXAudHlwZV0uY2FuQ29udGFpbih0YWcpKSB7XG4gICAgICAgIHRoaXMuZmluYWxpemUodGhpcy50aXAsIHRoaXMubGluZU51bWJlciAtIDEpO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5fbnVtYmVyID0gb2Zmc2V0ICsgMTsgLy8gb2Zmc2V0IDAgPSBjb2x1bW4gMVxuICAgIHZhciBuZXdCbG9jayA9IG5ldyBOb2RlKHRhZywgW1t0aGlzLmxpbmVOdW1iZXIsIGNvbHVtbl9udW1iZXJdLCBbMCwgMF1dKTtcbiAgICBuZXdCbG9jay5fc3RyaW5nX2NvbnRlbnQgPSAnJztcbiAgICB0aGlzLnRpcC5hcHBlbmRDaGlsZChuZXdCbG9jayk7XG4gICAgdGhpcy50aXAgPSBuZXdCbG9jaztcbiAgICByZXR1cm4gbmV3QmxvY2s7XG59O1xuXG4vLyBQYXJzZSBhIGxpc3QgbWFya2VyIGFuZCByZXR1cm4gZGF0YSBvbiB0aGUgbWFya2VyICh0eXBlLFxuLy8gc3RhcnQsIGRlbGltaXRlciwgYnVsbGV0IGNoYXJhY3RlciwgcGFkZGluZykgb3IgbnVsbC5cbnZhciBwYXJzZUxpc3RNYXJrZXIgPSBmdW5jdGlvbihsbiwgb2Zmc2V0LCBpbmRlbnQpIHtcbiAgICB2YXIgcmVzdCA9IGxuLnNsaWNlKG9mZnNldCk7XG4gICAgdmFyIG1hdGNoO1xuICAgIHZhciBzcGFjZXNfYWZ0ZXJfbWFya2VyO1xuICAgIHZhciBkYXRhID0geyB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgICB0aWdodDogdHJ1ZSwgIC8vIGxpc3RzIGFyZSB0aWdodCBieSBkZWZhdWx0XG4gICAgICAgICAgICAgICAgIGJ1bGxldENoYXI6IG51bGwsXG4gICAgICAgICAgICAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgIG1hcmtlck9mZnNldDogaW5kZW50IH07XG4gICAgaWYgKChtYXRjaCA9IHJlc3QubWF0Y2gocmVCdWxsZXRMaXN0TWFya2VyKSkpIHtcbiAgICAgICAgc3BhY2VzX2FmdGVyX21hcmtlciA9IG1hdGNoWzFdLmxlbmd0aDtcbiAgICAgICAgZGF0YS50eXBlID0gJ0J1bGxldCc7XG4gICAgICAgIGRhdGEuYnVsbGV0Q2hhciA9IG1hdGNoWzBdWzBdO1xuXG4gICAgfSBlbHNlIGlmICgobWF0Y2ggPSByZXN0Lm1hdGNoKHJlT3JkZXJlZExpc3RNYXJrZXIpKSkge1xuICAgICAgICBzcGFjZXNfYWZ0ZXJfbWFya2VyID0gbWF0Y2hbM10ubGVuZ3RoO1xuICAgICAgICBkYXRhLnR5cGUgPSAnT3JkZXJlZCc7XG4gICAgICAgIGRhdGEuc3RhcnQgPSBwYXJzZUludChtYXRjaFsxXSk7XG4gICAgICAgIGRhdGEuZGVsaW1pdGVyID0gbWF0Y2hbMl07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBibGFua19pdGVtID0gbWF0Y2hbMF0ubGVuZ3RoID09PSByZXN0Lmxlbmd0aDtcbiAgICBpZiAoc3BhY2VzX2FmdGVyX21hcmtlciA+PSA1IHx8XG4gICAgICAgIHNwYWNlc19hZnRlcl9tYXJrZXIgPCAxIHx8XG4gICAgICAgIGJsYW5rX2l0ZW0pIHtcbiAgICAgICAgZGF0YS5wYWRkaW5nID0gbWF0Y2hbMF0ubGVuZ3RoIC0gc3BhY2VzX2FmdGVyX21hcmtlciArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5wYWRkaW5nID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIGxpc3QgaXRlbXMgYXJlIG9mIHRoZSBzYW1lIHR5cGUsXG4vLyB3aXRoIHRoZSBzYW1lIGRlbGltaXRlciBhbmQgYnVsbGV0IGNoYXJhY3Rlci4gIFRoaXMgaXMgdXNlZFxuLy8gaW4gYWdnbG9tZXJhdGluZyBsaXN0IGl0ZW1zIGludG8gbGlzdHMuXG52YXIgbGlzdHNNYXRjaCA9IGZ1bmN0aW9uKGxpc3RfZGF0YSwgaXRlbV9kYXRhKSB7XG4gICAgcmV0dXJuIChsaXN0X2RhdGEudHlwZSA9PT0gaXRlbV9kYXRhLnR5cGUgJiZcbiAgICAgICAgICAgIGxpc3RfZGF0YS5kZWxpbWl0ZXIgPT09IGl0ZW1fZGF0YS5kZWxpbWl0ZXIgJiZcbiAgICAgICAgICAgIGxpc3RfZGF0YS5idWxsZXRDaGFyID09PSBpdGVtX2RhdGEuYnVsbGV0Q2hhcik7XG59O1xuXG4vLyBGaW5hbGl6ZSBhbmQgY2xvc2UgYW55IHVubWF0Y2hlZCBibG9ja3MuIFJldHVybnMgdHJ1ZS5cbnZhciBjbG9zZVVubWF0Y2hlZEJsb2NrcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5hbGxDbG9zZWQpIHtcbiAgICAgICAgLy8gZmluYWxpemUgYW55IGJsb2NrcyBub3QgbWF0Y2hlZFxuICAgICAgICB3aGlsZSAodGhpcy5vbGR0aXAgIT09IHRoaXMubGFzdE1hdGNoZWRDb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLm9sZHRpcC5fcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5maW5hbGl6ZSh0aGlzLm9sZHRpcCwgdGhpcy5saW5lTnVtYmVyIC0gMSk7XG4gICAgICAgICAgICB0aGlzLm9sZHRpcCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbENsb3NlZCA9IHRydWU7XG4gICAgfVxufTtcblxuLy8gJ2ZpbmFsaXplJyBpcyBydW4gd2hlbiB0aGUgYmxvY2sgaXMgY2xvc2VkLlxuLy8gJ2NvbnRpbnVlJyBpcyBydW4gdG8gY2hlY2sgd2hldGhlciB0aGUgYmxvY2sgaXMgY29udGludWluZ1xuLy8gYXQgYSBjZXJ0YWluIGxpbmUgYW5kIG9mZnNldCAoZS5nLiB3aGV0aGVyIGEgYmxvY2sgcXVvdGVcbi8vIGNvbnRhaW5zIGEgYD5gLiAgSXQgcmV0dXJucyAwIGZvciBtYXRjaGVkLCAxIGZvciBub3QgbWF0Y2hlZCxcbi8vIGFuZCAyIGZvciBcIndlJ3ZlIGRlYWx0IHdpdGggdGhpcyBsaW5lIGNvbXBsZXRlbHksIGdvIHRvIG5leHQuXCJcbnZhciBibG9ja3MgPSB7XG4gICAgRG9jdW1lbnQ6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0ICE9PSAnSXRlbScpOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBMaXN0OiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbihwYXJzZXIsIGJsb2NrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGJsb2NrLl9maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igbm9uLWZpbmFsIGxpc3QgaXRlbSBlbmRpbmcgd2l0aCBibGFuayBsaW5lOlxuICAgICAgICAgICAgICAgIGlmIChlbmRzV2l0aEJsYW5rTGluZShpdGVtKSAmJiBpdGVtLl9uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLl9saXN0RGF0YS50aWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcmVjdXJzZSBpbnRvIGNoaWxkcmVuIG9mIGxpc3QgaXRlbSwgdG8gc2VlIGlmIHRoZXJlIGFyZVxuICAgICAgICAgICAgICAgIC8vIHNwYWNlcyBiZXR3ZWVuIGFueSBvZiB0aGVtOlxuICAgICAgICAgICAgICAgIHZhciBzdWJpdGVtID0gaXRlbS5fZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3ViaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGhCbGFua0xpbmUoc3ViaXRlbSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLl9uZXh0IHx8IHN1Yml0ZW0uX25leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5fbGlzdERhdGEudGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1Yml0ZW0gPSBzdWJpdGVtLl9uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5fbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24odCkgeyByZXR1cm4gKHQgPT09ICdJdGVtJyk7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIEJsb2NrUXVvdGU6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICAgICAgdmFyIGxuID0gcGFyc2VyLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgICAgICBwZWVrKGxuLCBwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gQ19HUkVBVEVSVEhBTikge1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChwZWVrKGxuLCBwYXJzZXIub2Zmc2V0KSA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIub2Zmc2V0Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24odCkgeyByZXR1cm4gKHQgIT09ICdJdGVtJyk7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIEl0ZW06IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VyLmJsYW5rKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluZGVudCA+PVxuICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhLm1hcmtlck9mZnNldCArXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEucGFkZGluZykge1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KGNvbnRhaW5lci5fbGlzdERhdGEubWFya2VyT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YS5wYWRkaW5nLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0ICE9PSAnSXRlbScpOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBIZWFkZXI6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gYSBoZWFkZXIgY2FuIG5ldmVyIGNvbnRhaW5lciA+IDEgbGluZSwgc28gZmFpbCB0byBtYXRjaDpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgSG9yaXpvbnRhbFJ1bGU6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gYW4gaHJ1bGUgY2FuIG5ldmVyIGNvbnRhaW5lciA+IDEgbGluZSwgc28gZmFpbCB0byBtYXRjaDpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgQ29kZUJsb2NrOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGxuID0gcGFyc2VyLmN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgdmFyIGluZGVudCA9IHBhcnNlci5pbmRlbnQ7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLl9pc0ZlbmNlZCkgeyAvLyBmZW5jZWRcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSAoaW5kZW50IDw9IDMgJiZcbiAgICAgICAgICAgICAgICAgICAgbG4uY2hhckF0KHBhcnNlci5uZXh0Tm9uc3BhY2UpID09PSBjb250YWluZXIuX2ZlbmNlQ2hhciAmJlxuICAgICAgICAgICAgICAgICAgICBsbi5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKS5tYXRjaChyZUNsb3NpbmdDb2RlRmVuY2UpKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMF0ubGVuZ3RoID49IGNvbnRhaW5lci5fZmVuY2VMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2luZyBmZW5jZSAtIHdlJ3JlIGF0IGVuZCBvZiBsaW5lLCBzbyB3ZSBjYW4gcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5maW5hbGl6ZShjb250YWluZXIsIHBhcnNlci5saW5lTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBvcHRpb25hbCBzcGFjZXMgb2YgZmVuY2Ugb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gY29udGFpbmVyLl9mZW5jZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIHBlZWsobG4sIHBhcnNlci5vZmZzZXQpID09PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldCgxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBpbmRlbnRlZFxuICAgICAgICAgICAgICAgIGlmIChpbmRlbnQgPj0gQ09ERV9JTkRFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoQ09ERV9JTkRFTlQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmJsYW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbihwYXJzZXIsIGJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoYmxvY2suX2lzRmVuY2VkKSB7IC8vIGZlbmNlZFxuICAgICAgICAgICAgICAgIC8vIGZpcnN0IGxpbmUgYmVjb21lcyBpbmZvIHN0cmluZ1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gYmxvY2suX3N0cmluZ19jb250ZW50O1xuICAgICAgICAgICAgICAgIHZhciBuZXdsaW5lUG9zID0gY29udGVudC5pbmRleE9mKCdcXG4nKTtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RMaW5lID0gY29udGVudC5zbGljZSgwLCBuZXdsaW5lUG9zKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdCA9IGNvbnRlbnQuc2xpY2UobmV3bGluZVBvcyArIDEpO1xuICAgICAgICAgICAgICAgIGJsb2NrLmluZm8gPSB1bmVzY2FwZVN0cmluZyhmaXJzdExpbmUudHJpbSgpKTtcbiAgICAgICAgICAgICAgICBibG9jay5fbGl0ZXJhbCA9IHJlc3Q7XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBpbmRlbnRlZFxuICAgICAgICAgICAgICAgIGJsb2NrLl9saXRlcmFsID0gYmxvY2suX3N0cmluZ19jb250ZW50LnJlcGxhY2UoLyhcXG4gKikrJC8sICdcXG4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IG51bGw7IC8vIGFsbG93IEdDXG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogdHJ1ZVxuICAgIH0sXG4gICAgSHRtbEJsb2NrOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuICgocGFyc2VyLmJsYW5rICYmXG4gICAgICAgICAgICAgICAgICAgICAoY29udGFpbmVyLl9odG1sQmxvY2tUeXBlID09PSA2IHx8XG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9odG1sQmxvY2tUeXBlID09PSA3KSkgPyAxIDogMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbihwYXJzZXIsIGJsb2NrKSB7XG4gICAgICAgICAgICBibG9jay5fbGl0ZXJhbCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC5yZXBsYWNlKC8oXFxuICopKyQvLCAnJyk7XG4gICAgICAgICAgICBibG9jay5fc3RyaW5nX2NvbnRlbnQgPSBudWxsOyAvLyBhbGxvdyBHQ1xuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IHRydWVcbiAgICB9LFxuICAgIFBhcmFncmFwaDoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlci5ibGFuayA/IDEgOiAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIHZhciBwb3M7XG4gICAgICAgICAgICB2YXIgaGFzUmVmZXJlbmNlRGVmcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyB0cnkgcGFyc2luZyB0aGUgYmVnaW5uaW5nIGFzIGxpbmsgcmVmZXJlbmNlIGRlZmluaXRpb25zOlxuICAgICAgICAgICAgd2hpbGUgKHBlZWsoYmxvY2suX3N0cmluZ19jb250ZW50LCAwKSA9PT0gQ19PUEVOX0JSQUNLRVQgJiZcbiAgICAgICAgICAgICAgICAgICAocG9zID1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmlubGluZVBhcnNlci5wYXJzZVJlZmVyZW5jZShibG9jay5fc3RyaW5nX2NvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLnJlZm1hcCkpKSB7XG4gICAgICAgICAgICAgICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gYmxvY2suX3N0cmluZ19jb250ZW50LnNsaWNlKHBvcyk7XG4gICAgICAgICAgICAgICAgaGFzUmVmZXJlbmNlRGVmcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzUmVmZXJlbmNlRGVmcyAmJiBpc0JsYW5rKGJsb2NrLl9zdHJpbmdfY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBibG9jay51bmxpbmsoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiB0cnVlXG4gICAgfVxufTtcblxuLy8gYmxvY2sgc3RhcnQgZnVuY3Rpb25zLiAgUmV0dXJuIHZhbHVlczpcbi8vIDAgPSBubyBtYXRjaFxuLy8gMSA9IG1hdGNoZWQgY29udGFpbmVyLCBrZWVwIGdvaW5nXG4vLyAyID0gbWF0Y2hlZCBsZWFmLCBubyBtb3JlIGJsb2NrIHN0YXJ0c1xudmFyIGJsb2NrU3RhcnRzID0gW1xuICAgIC8vIGJsb2NrIHF1b3RlXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICBwZWVrKHBhcnNlci5jdXJyZW50TGluZSwgcGFyc2VyLm5leHROb25zcGFjZSkgPT09IENfR1JFQVRFUlRIQU4pIHtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldCgxLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBvcHRpb25hbCBmb2xsb3dpbmcgc3BhY2VcbiAgICAgICAgICAgIGlmIChwZWVrKHBhcnNlci5jdXJyZW50TGluZSwgcGFyc2VyLm9mZnNldCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldCgxLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZGRDaGlsZCgnQmxvY2tRdW90ZScsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBVFggaGVhZGVyXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIChtYXRjaCA9IHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKS5tYXRjaChyZUFUWEhlYWRlck1hcmtlcikpKSB7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQobWF0Y2hbMF0ubGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0hlYWRlcicsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLmxldmVsID0gbWF0Y2hbMF0udHJpbSgpLmxlbmd0aDsgLy8gbnVtYmVyIG9mICNzXG4gICAgICAgICAgICAvLyByZW1vdmUgdHJhaWxpbmcgIyMjczpcbiAgICAgICAgICAgIGNvbnRhaW5lci5fc3RyaW5nX2NvbnRlbnQgPVxuICAgICAgICAgICAgICAgIHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIub2Zmc2V0KS5yZXBsYWNlKC9eICojKyAqJC8sICcnKS5yZXBsYWNlKC8gKyMrICokLywgJycpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQocGFyc2VyLmN1cnJlbnRMaW5lLmxlbmd0aCAtIHBhcnNlci5vZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBGZW5jZWQgY29kZSBibG9ja1xuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICAobWF0Y2ggPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVDb2RlRmVuY2UpKSkge1xuICAgICAgICAgICAgdmFyIGZlbmNlTGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gcGFyc2VyLmFkZENoaWxkKCdDb2RlQmxvY2snLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5faXNGZW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29udGFpbmVyLl9mZW5jZUxlbmd0aCA9IGZlbmNlTGVuZ3RoO1xuICAgICAgICAgICAgY29udGFpbmVyLl9mZW5jZUNoYXIgPSBtYXRjaFswXVswXTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fZmVuY2VPZmZzZXQgPSBwYXJzZXIuaW5kZW50O1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KGZlbmNlTGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEhUTUwgYmxvY2tcbiAgICBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgcGVlayhwYXJzZXIuY3VycmVudExpbmUsIHBhcnNlci5uZXh0Tm9uc3BhY2UpID09PSBDX0xFU1NUSEFOKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIHZhciBibG9ja1R5cGU7XG5cbiAgICAgICAgICAgIGZvciAoYmxvY2tUeXBlID0gMTsgYmxvY2tUeXBlIDw9IDc7IGJsb2NrVHlwZSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlSHRtbEJsb2NrT3BlbltibG9ja1R5cGVdLnRlc3QocykgJiZcbiAgICAgICAgICAgICAgICAgICAgKGJsb2NrVHlwZSA8IDcgfHxcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci50eXBlICE9PSAnUGFyYWdyYXBoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGFkanVzdCBwYXJzZXIub2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAvLyBzcGFjZXMgYXJlIHBhcnQgb2YgdGhlIEhUTUwgYmxvY2s6XG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gcGFyc2VyLmFkZENoaWxkKCdIdG1sQmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXIub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYi5faHRtbEJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICB9LFxuXG4gICAgLy8gU2V0ZXh0IGhlYWRlclxuICAgIGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci50eXBlID09PSAnUGFyYWdyYXBoJyAmJlxuICAgICAgICAgICAgICAgICAgIChjb250YWluZXIuX3N0cmluZ19jb250ZW50LmluZGV4T2YoJ1xcbicpID09PVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fc3RyaW5nX2NvbnRlbnQubGVuZ3RoIC0gMSkgJiZcbiAgICAgICAgICAgICAgICAgICAoKG1hdGNoID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlU2V0ZXh0SGVhZGVyTGluZSkpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gbmV3IE5vZGUoJ0hlYWRlcicsIGNvbnRhaW5lci5zb3VyY2Vwb3MpO1xuICAgICAgICAgICAgaGVhZGVyLmxldmVsID0gbWF0Y2hbMF1bMF0gPT09ICc9JyA/IDEgOiAyO1xuICAgICAgICAgICAgaGVhZGVyLl9zdHJpbmdfY29udGVudCA9IGNvbnRhaW5lci5fc3RyaW5nX2NvbnRlbnQ7XG4gICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QWZ0ZXIoaGVhZGVyKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci51bmxpbmsoKTtcbiAgICAgICAgICAgIHBhcnNlci50aXAgPSBoZWFkZXI7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChwYXJzZXIuY3VycmVudExpbmUubGVuZ3RoIC0gcGFyc2VyLm9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBocnVsZVxuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgcmVIcnVsZS50ZXN0KHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgcGFyc2VyLmFkZENoaWxkKCdIb3Jpem9udGFsUnVsZScsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQocGFyc2VyLmN1cnJlbnRMaW5lLmxlbmd0aCAtIHBhcnNlci5vZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gbGlzdCBpdGVtXG4gICAgZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoKGRhdGEgPSBwYXJzZUxpc3RNYXJrZXIocGFyc2VyLmN1cnJlbnRMaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLm5leHROb25zcGFjZSwgcGFyc2VyLmluZGVudCkpKSB7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIGlmIChwYXJzZXIuaW5kZW50ZWQgJiYgcGFyc2VyLnRpcC50eXBlICE9PSAnTGlzdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICAvLyByZWNhbGN1bGF0ZSBkYXRhLnBhZGRpbmcsIHRha2luZyBpbnRvIGFjY291bnQgdGFiczpcbiAgICAgICAgICAgIGkgPSBwYXJzZXIuY29sdW1uO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoZGF0YS5wYWRkaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICBkYXRhLnBhZGRpbmcgPSBwYXJzZXIuY29sdW1uIC0gaTtcblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBsaXN0IGlmIG5lZWRlZFxuICAgICAgICAgICAgaWYgKHBhcnNlci50aXAudHlwZSAhPT0gJ0xpc3QnIHx8XG4gICAgICAgICAgICAgICAgIShsaXN0c01hdGNoKGNvbnRhaW5lci5fbGlzdERhdGEsIGRhdGEpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnTGlzdCcsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGxpc3QgaXRlbVxuICAgICAgICAgICAgY29udGFpbmVyID0gcGFyc2VyLmFkZENoaWxkKCdJdGVtJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gaW5kZW50ZWQgY29kZSBibG9ja1xuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICBpZiAocGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICBwYXJzZXIudGlwLnR5cGUgIT09ICdQYXJhZ3JhcGgnICYmXG4gICAgICAgICAgICAhcGFyc2VyLmJsYW5rKSB7XG4gICAgICAgICAgICAvLyBpbmRlbnRlZCBjb2RlXG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChDT0RFX0lOREVOVCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZGRDaGlsZCgnQ29kZUJsb2NrJywgcGFyc2VyLm9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgIH1cblxuXTtcblxudmFyIGFkdmFuY2VPZmZzZXQgPSBmdW5jdGlvbihjb3VudCwgY29sdW1ucykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY29scyA9IDA7XG4gICAgdmFyIGN1cnJlbnRMaW5lID0gdGhpcy5jdXJyZW50TGluZTtcbiAgICB3aGlsZSAoY29sdW1ucyA/IChjb2xzIDwgY291bnQpIDogKGkgPCBjb3VudCkpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRMaW5lW3RoaXMub2Zmc2V0ICsgaV0gPT09ICdcXHQnKSB7XG4gICAgICAgICAgICBjb2xzICs9ICg0IC0gKHRoaXMuY29sdW1uICUgNCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29scyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgdGhpcy5vZmZzZXQgKz0gaTtcbiAgICB0aGlzLmNvbHVtbiArPSBjb2xzO1xufTtcblxudmFyIGFkdmFuY2VOZXh0Tm9uc3BhY2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMubmV4dE5vbnNwYWNlO1xuICAgIHRoaXMuY29sdW1uID0gdGhpcy5uZXh0Tm9uc3BhY2VDb2x1bW47XG59O1xuXG52YXIgZmluZE5leHROb25zcGFjZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50TGluZSA9IHRoaXMuY3VycmVudExpbmU7XG4gICAgdmFyIGkgPSB0aGlzLm9mZnNldDtcbiAgICB2YXIgY29scyA9IHRoaXMuY29sdW1uO1xuICAgIHZhciBjO1xuXG4gICAgd2hpbGUgKChjID0gY3VycmVudExpbmUuY2hhckF0KGkpKSAhPT0gJycpIHtcbiAgICAgICAgaWYgKGMgPT09ICcgJykge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29scysrO1xuICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICdcXHQnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb2xzICs9ICg0IC0gKGNvbHMgJSA0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJsYW5rID0gKGMgPT09ICdcXG4nIHx8IGMgPT09ICdcXHInIHx8IGMgPT09ICcnKTtcbiAgICB0aGlzLm5leHROb25zcGFjZSA9IGk7XG4gICAgdGhpcy5uZXh0Tm9uc3BhY2VDb2x1bW4gPSBjb2xzO1xuICAgIHRoaXMuaW5kZW50ID0gdGhpcy5uZXh0Tm9uc3BhY2VDb2x1bW4gLSB0aGlzLmNvbHVtbjtcbiAgICB0aGlzLmluZGVudGVkID0gdGhpcy5pbmRlbnQgPj0gQ09ERV9JTkRFTlQ7XG59O1xuXG4vLyBBbmFseXplIGEgbGluZSBvZiB0ZXh0IGFuZCB1cGRhdGUgdGhlIGRvY3VtZW50IGFwcHJvcHJpYXRlbHkuXG4vLyBXZSBwYXJzZSBtYXJrZG93biB0ZXh0IGJ5IGNhbGxpbmcgdGhpcyBvbiBlYWNoIGxpbmUgb2YgaW5wdXQsXG4vLyB0aGVuIGZpbmFsaXppbmcgdGhlIGRvY3VtZW50LlxudmFyIGluY29ycG9yYXRlTGluZSA9IGZ1bmN0aW9uKGxuKSB7XG4gICAgdmFyIGFsbF9tYXRjaGVkID0gdHJ1ZTtcbiAgICB2YXIgdDtcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmRvYztcbiAgICB0aGlzLm9sZHRpcCA9IHRoaXMudGlwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmxpbmVOdW1iZXIgKz0gMTtcblxuICAgIC8vIHJlcGxhY2UgTlVMIGNoYXJhY3RlcnMgZm9yIHNlY3VyaXR5XG4gICAgaWYgKGxuLmluZGV4T2YoJ1xcdTAwMDAnKSAhPT0gLTEpIHtcbiAgICAgICAgbG4gPSBsbi5yZXBsYWNlKC9cXDAvZywgJ1xcdUZGRkQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gbG47XG5cbiAgICAvLyBGb3IgZWFjaCBjb250YWluaW5nIGJsb2NrLCB0cnkgdG8gcGFyc2UgdGhlIGFzc29jaWF0ZWQgbGluZSBzdGFydC5cbiAgICAvLyBCYWlsIG91dCBvbiBmYWlsdXJlOiBjb250YWluZXIgd2lsbCBwb2ludCB0byB0aGUgbGFzdCBtYXRjaGluZyBibG9jay5cbiAgICAvLyBTZXQgYWxsX21hdGNoZWQgdG8gZmFsc2UgaWYgbm90IGFsbCBjb250YWluZXJzIG1hdGNoLlxuICAgIHZhciBsYXN0Q2hpbGQ7XG4gICAgd2hpbGUgKChsYXN0Q2hpbGQgPSBjb250YWluZXIuX2xhc3RDaGlsZCkgJiYgbGFzdENoaWxkLl9vcGVuKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGxhc3RDaGlsZDtcblxuICAgICAgICB0aGlzLmZpbmROZXh0Tm9uc3BhY2UoKTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuYmxvY2tzW2NvbnRhaW5lci50eXBlXS5jb250aW51ZSh0aGlzLCBjb250YWluZXIpKSB7XG4gICAgICAgIGNhc2UgMDogLy8gd2UndmUgbWF0Y2hlZCwga2VlcCBnb2luZ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogLy8gd2UndmUgZmFpbGVkIHRvIG1hdGNoIGEgYmxvY2tcbiAgICAgICAgICAgIGFsbF9tYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyB3ZSd2ZSBoaXQgZW5kIG9mIGxpbmUgZm9yIGZlbmNlZCBjb2RlIGNsb3NlIGFuZCBjYW4gcmV0dXJuXG4gICAgICAgICAgICB0aGlzLmxhc3RMaW5lTGVuZ3RoID0gbG4ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgJ2NvbnRpbnVlIHJldHVybmVkIGlsbGVnYWwgdmFsdWUsIG11c3QgYmUgMCwgMSwgb3IgMic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxfbWF0Y2hlZCkge1xuICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLl9wYXJlbnQ7IC8vIGJhY2sgdXAgdG8gbGFzdCBtYXRjaGluZyBibG9ja1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFsbENsb3NlZCA9IChjb250YWluZXIgPT09IHRoaXMub2xkdGlwKTtcbiAgICB0aGlzLmxhc3RNYXRjaGVkQ29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlJ3ZlIGhpdCAybmQgYmxhbmsgbGluZTsgaWYgc28gYnJlYWsgb3V0IG9mIGxpc3Q6XG4gICAgaWYgKHRoaXMuYmxhbmsgJiYgY29udGFpbmVyLl9sYXN0TGluZUJsYW5rKSB7XG4gICAgICAgIHRoaXMuYnJlYWtPdXRPZkxpc3RzKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRMZWFmID0gY29udGFpbmVyLnR5cGUgIT09ICdQYXJhZ3JhcGgnICYmXG4gICAgICAgICAgICBibG9ja3NbY29udGFpbmVyLnR5cGVdLmFjY2VwdHNMaW5lcztcbiAgICB2YXIgc3RhcnRzID0gdGhpcy5ibG9ja1N0YXJ0cztcbiAgICB2YXIgc3RhcnRzTGVuID0gc3RhcnRzLmxlbmd0aDtcbiAgICAvLyBVbmxlc3MgbGFzdCBtYXRjaGVkIGNvbnRhaW5lciBpcyBhIGNvZGUgYmxvY2ssIHRyeSBuZXcgY29udGFpbmVyIHN0YXJ0cyxcbiAgICAvLyBhZGRpbmcgY2hpbGRyZW4gdG8gdGhlIGxhc3QgbWF0Y2hlZCBjb250YWluZXI6XG4gICAgd2hpbGUgKCFtYXRjaGVkTGVhZikge1xuXG4gICAgICAgIHRoaXMuZmluZE5leHROb25zcGFjZSgpO1xuXG4gICAgICAgIC8vIHRoaXMgaXMgYSBsaXR0bGUgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uOlxuICAgICAgICBpZiAoIXRoaXMuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgICFyZU1heWJlU3BlY2lhbC50ZXN0KGxuLnNsaWNlKHRoaXMubmV4dE5vbnNwYWNlKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc3RhcnRzTGVuKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gc3RhcnRzW2ldKHRoaXMsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICBpZiAocmVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy50aXA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMudGlwO1xuICAgICAgICAgICAgICAgIG1hdGNoZWRMZWFmID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IHN0YXJ0c0xlbikgeyAvLyBub3RoaW5nIG1hdGNoZWRcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGF0IHJlbWFpbnMgYXQgdGhlIG9mZnNldCBpcyBhIHRleHQgbGluZS4gIEFkZCB0aGUgdGV4dCB0byB0aGVcbiAgICAvLyBhcHByb3ByaWF0ZSBjb250YWluZXIuXG5cbiAgIC8vIEZpcnN0IGNoZWNrIGZvciBhIGxhenkgcGFyYWdyYXBoIGNvbnRpbnVhdGlvbjpcbiAgICBpZiAoIXRoaXMuYWxsQ2xvc2VkICYmICF0aGlzLmJsYW5rICYmXG4gICAgICAgIHRoaXMudGlwLnR5cGUgPT09ICdQYXJhZ3JhcGgnKSB7XG4gICAgICAgIC8vIGxhenkgcGFyYWdyYXBoIGNvbnRpbnVhdGlvblxuICAgICAgICB0aGlzLmFkZExpbmUoKTtcblxuICAgIH0gZWxzZSB7IC8vIG5vdCBhIGxhenkgY29udGludWF0aW9uXG5cbiAgICAgICAgLy8gZmluYWxpemUgYW55IGJsb2NrcyBub3QgbWF0Y2hlZFxuICAgICAgICB0aGlzLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgIGlmICh0aGlzLmJsYW5rICYmIGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5sYXN0Q2hpbGQuX2xhc3RMaW5lQmxhbmsgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdCA9IGNvbnRhaW5lci50eXBlO1xuXG4gICAgICAgIC8vIEJsb2NrIHF1b3RlIGxpbmVzIGFyZSBuZXZlciBibGFuayBhcyB0aGV5IHN0YXJ0IHdpdGggPlxuICAgICAgICAvLyBhbmQgd2UgZG9uJ3QgY291bnQgYmxhbmtzIGluIGZlbmNlZCBjb2RlIGZvciBwdXJwb3NlcyBvZiB0aWdodC9sb29zZVxuICAgICAgICAvLyBsaXN0cyBvciBicmVha2luZyBvdXQgb2YgbGlzdHMuICBXZSBhbHNvIGRvbid0IHNldCBfbGFzdExpbmVCbGFua1xuICAgICAgICAvLyBvbiBhbiBlbXB0eSBsaXN0IGl0ZW0sIG9yIGlmIHdlIGp1c3QgY2xvc2VkIGEgZmVuY2VkIGJsb2NrLlxuICAgICAgICB2YXIgbGFzdExpbmVCbGFuayA9IHRoaXMuYmxhbmsgJiZcbiAgICAgICAgICAgICEodCA9PT0gJ0Jsb2NrUXVvdGUnIHx8XG4gICAgICAgICAgICAgICh0ID09PSAnQ29kZUJsb2NrJyAmJiBjb250YWluZXIuX2lzRmVuY2VkKSB8fFxuICAgICAgICAgICAgICAodCA9PT0gJ0l0ZW0nICYmXG4gICAgICAgICAgICAgICAhY29udGFpbmVyLl9maXJzdENoaWxkICYmXG4gICAgICAgICAgICAgICBjb250YWluZXIuc291cmNlcG9zWzBdWzBdID09PSB0aGlzLmxpbmVOdW1iZXIpKTtcblxuICAgICAgICAvLyBwcm9wYWdhdGUgbGFzdExpbmVCbGFuayB1cCB0aHJvdWdoIHBhcmVudHM6XG4gICAgICAgIHZhciBjb250ID0gY29udGFpbmVyO1xuICAgICAgICB3aGlsZSAoY29udCkge1xuICAgICAgICAgICAgY29udC5fbGFzdExpbmVCbGFuayA9IGxhc3RMaW5lQmxhbms7XG4gICAgICAgICAgICBjb250ID0gY29udC5fcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzW3RdLmFjY2VwdHNMaW5lcykge1xuICAgICAgICAgICAgdGhpcy5hZGRMaW5lKCk7XG4gICAgICAgICAgICAvLyBpZiBIdG1sQmxvY2ssIGNoZWNrIGZvciBlbmQgY29uZGl0aW9uXG4gICAgICAgICAgICBpZiAodCA9PT0gJ0h0bWxCbG9jaycgJiZcbiAgICAgICAgICAgICAgICBjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPj0gMSAmJlxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA8PSA1ICYmXG4gICAgICAgICAgICAgICAgcmVIdG1sQmxvY2tDbG9zZVtjb250YWluZXIuX2h0bWxCbG9ja1R5cGVdLnRlc3QodGhpcy5jdXJyZW50TGluZS5zbGljZSh0aGlzLm9mZnNldCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5hbGl6ZShjb250YWluZXIsIHRoaXMubGluZU51bWJlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9mZnNldCA8IGxuLmxlbmd0aCAmJiAhdGhpcy5ibGFuaykge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHBhcmFncmFwaCBjb250YWluZXIgZm9yIGxpbmVcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuYWRkQ2hpbGQoJ1BhcmFncmFwaCcsIHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgdGhpcy5hZGRMaW5lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXN0TGluZUxlbmd0aCA9IGxuLmxlbmd0aDtcbn07XG5cbi8vIEZpbmFsaXplIGEgYmxvY2suICBDbG9zZSBpdCBhbmQgZG8gYW55IG5lY2Vzc2FyeSBwb3N0cHJvY2Vzc2luZyxcbi8vIGUuZy4gY3JlYXRpbmcgc3RyaW5nX2NvbnRlbnQgZnJvbSBzdHJpbmdzLCBzZXR0aW5nIHRoZSAndGlnaHQnXG4vLyBvciAnbG9vc2UnIHN0YXR1cyBvZiBhIGxpc3QsIGFuZCBwYXJzaW5nIHRoZSBiZWdpbm5pbmdzXG4vLyBvZiBwYXJhZ3JhcGhzIGZvciByZWZlcmVuY2UgZGVmaW5pdGlvbnMuICBSZXNldCB0aGUgdGlwIHRvIHRoZVxuLy8gcGFyZW50IG9mIHRoZSBjbG9zZWQgYmxvY2suXG52YXIgZmluYWxpemUgPSBmdW5jdGlvbihibG9jaywgbGluZU51bWJlcikge1xuICAgIHZhciBhYm92ZSA9IGJsb2NrLl9wYXJlbnQ7XG4gICAgYmxvY2suX29wZW4gPSBmYWxzZTtcbiAgICBibG9jay5zb3VyY2Vwb3NbMV0gPSBbbGluZU51bWJlciwgdGhpcy5sYXN0TGluZUxlbmd0aF07XG5cbiAgICB0aGlzLmJsb2Nrc1tibG9jay50eXBlXS5maW5hbGl6ZSh0aGlzLCBibG9jayk7XG5cbiAgICB0aGlzLnRpcCA9IGFib3ZlO1xufTtcblxuLy8gV2FsayB0aHJvdWdoIGEgYmxvY2sgJiBjaGlsZHJlbiByZWN1cnNpdmVseSwgcGFyc2luZyBzdHJpbmcgY29udGVudFxuLy8gaW50byBpbmxpbmUgY29udGVudCB3aGVyZSBhcHByb3ByaWF0ZS5cbnZhciBwcm9jZXNzSW5saW5lcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG5vZGUsIGV2ZW50LCB0O1xuICAgIHZhciB3YWxrZXIgPSBibG9jay53YWxrZXIoKTtcbiAgICB0aGlzLmlubGluZVBhcnNlci5yZWZtYXAgPSB0aGlzLnJlZm1hcDtcbiAgICB0aGlzLmlubGluZVBhcnNlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICBub2RlID0gZXZlbnQubm9kZTtcbiAgICAgICAgdCA9IG5vZGUudHlwZTtcbiAgICAgICAgaWYgKCFldmVudC5lbnRlcmluZyAmJiAodCA9PT0gJ1BhcmFncmFwaCcgfHwgdCA9PT0gJ0hlYWRlcicpKSB7XG4gICAgICAgICAgICB0aGlzLmlubGluZVBhcnNlci5wYXJzZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBEb2N1bWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2MgPSBuZXcgTm9kZSgnRG9jdW1lbnQnLCBbWzEsIDFdLCBbMCwgMF1dKTtcbiAgICByZXR1cm4gZG9jO1xufTtcblxuLy8gVGhlIG1haW4gcGFyc2luZyBmdW5jdGlvbi4gIFJldHVybnMgYSBwYXJzZWQgZG9jdW1lbnQgQVNULlxudmFyIHBhcnNlID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICB0aGlzLmRvYyA9IG5ldyBEb2N1bWVudCgpO1xuICAgIHRoaXMudGlwID0gdGhpcy5kb2M7XG4gICAgdGhpcy5yZWZtYXAgPSB7fTtcbiAgICB0aGlzLmxpbmVOdW1iZXIgPSAwO1xuICAgIHRoaXMubGFzdExpbmVMZW5ndGggPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmNvbHVtbiA9IDA7XG4gICAgdGhpcy5sYXN0TWF0Y2hlZENvbnRhaW5lciA9IHRoaXMuZG9jO1xuICAgIHRoaXMuY3VycmVudExpbmUgPSBcIlwiO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJwcmVwYXJpbmcgaW5wdXRcIik7IH1cbiAgICB2YXIgbGluZXMgPSBpbnB1dC5zcGxpdChyZUxpbmVFbmRpbmcpO1xuICAgIHZhciBsZW4gPSBsaW5lcy5sZW5ndGg7XG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQoaW5wdXQubGVuZ3RoIC0gMSkgPT09IENfTkVXTElORSkge1xuICAgICAgICAvLyBpZ25vcmUgbGFzdCBibGFuayBsaW5lIGNyZWF0ZWQgYnkgZmluYWwgbmV3bGluZVxuICAgICAgICBsZW4gLT0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcInByZXBhcmluZyBpbnB1dFwiKTsgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJibG9jayBwYXJzaW5nXCIpOyB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLmluY29ycG9yYXRlTGluZShsaW5lc1tpXSk7XG4gICAgfVxuICAgIHdoaWxlICh0aGlzLnRpcCkge1xuICAgICAgICB0aGlzLmZpbmFsaXplKHRoaXMudGlwLCBsZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwiYmxvY2sgcGFyc2luZ1wiKTsgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJpbmxpbmUgcGFyc2luZ1wiKTsgfVxuICAgIHRoaXMucHJvY2Vzc0lubGluZXModGhpcy5kb2MpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJpbmxpbmUgcGFyc2luZ1wiKTsgfVxuICAgIHJldHVybiB0aGlzLmRvYztcbn07XG5cblxuLy8gVGhlIFBhcnNlciBvYmplY3QuXG5mdW5jdGlvbiBQYXJzZXIob3B0aW9ucyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZG9jOiBuZXcgRG9jdW1lbnQoKSxcbiAgICAgICAgYmxvY2tzOiBibG9ja3MsXG4gICAgICAgIGJsb2NrU3RhcnRzOiBibG9ja1N0YXJ0cyxcbiAgICAgICAgdGlwOiB0aGlzLmRvYyxcbiAgICAgICAgb2xkdGlwOiB0aGlzLmRvYyxcbiAgICAgICAgY3VycmVudExpbmU6IFwiXCIsXG4gICAgICAgIGxpbmVOdW1iZXI6IDAsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgY29sdW1uOiAwLFxuICAgICAgICBuZXh0Tm9uc3BhY2U6IDAsXG4gICAgICAgIG5leHROb25zcGFjZUNvbHVtbjogMCxcbiAgICAgICAgaW5kZW50OiAwLFxuICAgICAgICBpbmRlbnRlZDogZmFsc2UsXG4gICAgICAgIGJsYW5rOiBmYWxzZSxcbiAgICAgICAgYWxsQ2xvc2VkOiB0cnVlLFxuICAgICAgICBsYXN0TWF0Y2hlZENvbnRhaW5lcjogdGhpcy5kb2MsXG4gICAgICAgIHJlZm1hcDoge30sXG4gICAgICAgIGxhc3RMaW5lTGVuZ3RoOiAwLFxuICAgICAgICBpbmxpbmVQYXJzZXI6IG5ldyBJbmxpbmVQYXJzZXIob3B0aW9ucyksXG4gICAgICAgIGZpbmROZXh0Tm9uc3BhY2U6IGZpbmROZXh0Tm9uc3BhY2UsXG4gICAgICAgIGFkdmFuY2VPZmZzZXQ6IGFkdmFuY2VPZmZzZXQsXG4gICAgICAgIGFkdmFuY2VOZXh0Tm9uc3BhY2U6IGFkdmFuY2VOZXh0Tm9uc3BhY2UsXG4gICAgICAgIGJyZWFrT3V0T2ZMaXN0czogYnJlYWtPdXRPZkxpc3RzLFxuICAgICAgICBhZGRMaW5lOiBhZGRMaW5lLFxuICAgICAgICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gICAgICAgIGluY29ycG9yYXRlTGluZTogaW5jb3Jwb3JhdGVMaW5lLFxuICAgICAgICBmaW5hbGl6ZTogZmluYWxpemUsXG4gICAgICAgIHByb2Nlc3NJbmxpbmVzOiBwcm9jZXNzSW5saW5lcyxcbiAgICAgICAgY2xvc2VVbm1hdGNoZWRCbG9ja3M6IGNsb3NlVW5tYXRjaGVkQmxvY2tzLFxuICAgICAgICBwYXJzZTogcGFyc2UsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge31cbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2Jsb2Nrcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJ21kdXJsL2RlY29kZScpO1xuXG52YXIgQ19CQUNLU0xBU0ggPSA5MjtcblxudmFyIGRlY29kZUhUTUwgPSByZXF1aXJlKCdlbnRpdGllcycpLmRlY29kZUhUTUw7XG5cbnZhciBFTlRJVFkgPSBcIiYoPzojeFthLWYwLTldezEsOH18I1swLTldezEsOH18W2Etel1bYS16MC05XXsxLDMxfSk7XCI7XG5cbnZhciBUQUdOQU1FID0gJ1tBLVphLXpdW0EtWmEtejAtOS1dKic7XG52YXIgQVRUUklCVVRFTkFNRSA9ICdbYS16QS1aXzpdW2EtekEtWjAtOTouXy1dKic7XG52YXIgVU5RVU9URURWQUxVRSA9IFwiW15cXFwiJz08PmBcXFxceDAwLVxcXFx4MjBdK1wiO1xudmFyIFNJTkdMRVFVT1RFRFZBTFVFID0gXCInW14nXSonXCI7XG52YXIgRE9VQkxFUVVPVEVEVkFMVUUgPSAnXCJbXlwiXSpcIic7XG52YXIgQVRUUklCVVRFVkFMVUUgPSBcIig/OlwiICsgVU5RVU9URURWQUxVRSArIFwifFwiICsgU0lOR0xFUVVPVEVEVkFMVUUgKyBcInxcIiArIERPVUJMRVFVT1RFRFZBTFVFICsgXCIpXCI7XG52YXIgQVRUUklCVVRFVkFMVUVTUEVDID0gXCIoPzpcIiArIFwiXFxcXHMqPVwiICsgXCJcXFxccypcIiArIEFUVFJJQlVURVZBTFVFICsgXCIpXCI7XG52YXIgQVRUUklCVVRFID0gXCIoPzpcIiArIFwiXFxcXHMrXCIgKyBBVFRSSUJVVEVOQU1FICsgQVRUUklCVVRFVkFMVUVTUEVDICsgXCI/KVwiO1xudmFyIE9QRU5UQUcgPSBcIjxcIiArIFRBR05BTUUgKyBBVFRSSUJVVEUgKyBcIipcIiArIFwiXFxcXHMqLz8+XCI7XG52YXIgQ0xPU0VUQUcgPSBcIjwvXCIgKyBUQUdOQU1FICsgXCJcXFxccypbPl1cIjtcbnZhciBIVE1MQ09NTUVOVCA9IFwiPCEtLS0tPnw8IS0tKD86LT9bXj4tXSkoPzotP1teLV0pKi0tPlwiO1xudmFyIFBST0NFU1NJTkdJTlNUUlVDVElPTiA9IFwiWzxdWz9dLio/Wz9dWz5dXCI7XG52YXIgREVDTEFSQVRJT04gPSBcIjwhW0EtWl0rXCIgKyBcIlxcXFxzK1tePl0qPlwiO1xudmFyIENEQVRBID0gXCI8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT5cIjtcbnZhciBIVE1MVEFHID0gXCIoPzpcIiArIE9QRU5UQUcgKyBcInxcIiArIENMT1NFVEFHICsgXCJ8XCIgKyBIVE1MQ09NTUVOVCArIFwifFwiICtcbiAgICAgICAgUFJPQ0VTU0lOR0lOU1RSVUNUSU9OICsgXCJ8XCIgKyBERUNMQVJBVElPTiArIFwifFwiICsgQ0RBVEEgKyBcIilcIjtcbnZhciByZUh0bWxUYWcgPSBuZXcgUmVnRXhwKCdeJyArIEhUTUxUQUcsICdpJyk7XG5cbnZhciByZUJhY2tzbGFzaE9yQW1wID0gL1tcXFxcJl0vO1xuXG52YXIgRVNDQVBBQkxFID0gJ1shXCIjJCUmXFwnKCkqKywuLzo7PD0+P0BbXFxcXFxcXFxcXFxcXV5fYHt8fX4tXSc7XG5cbnZhciByZUVudGl0eU9yRXNjYXBlZENoYXIgPSBuZXcgUmVnRXhwKCdcXFxcXFxcXCcgKyBFU0NBUEFCTEUgKyAnfCcgKyBFTlRJVFksICdnaScpO1xuXG52YXIgWE1MU1BFQ0lBTCA9ICdbJjw+XCJdJztcblxudmFyIHJlWG1sU3BlY2lhbCA9IG5ldyBSZWdFeHAoWE1MU1BFQ0lBTCwgJ2cnKTtcblxudmFyIHJlWG1sU3BlY2lhbE9yRW50aXR5ID0gbmV3IFJlZ0V4cChFTlRJVFkgKyAnfCcgKyBYTUxTUEVDSUFMLCAnZ2knKTtcblxudmFyIHVuZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKHMpIHtcbiAgICBpZiAocy5jaGFyQ29kZUF0KDApID09PSBDX0JBQ0tTTEFTSCkge1xuICAgICAgICByZXR1cm4gcy5jaGFyQXQoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZUhUTUwocyk7XG4gICAgfVxufTtcblxuLy8gUmVwbGFjZSBlbnRpdGllcyBhbmQgYmFja3NsYXNoIGVzY2FwZXMgd2l0aCBsaXRlcmFsIGNoYXJhY3RlcnMuXG52YXIgdW5lc2NhcGVTdHJpbmcgPSBmdW5jdGlvbihzKSB7XG4gICAgaWYgKHJlQmFja3NsYXNoT3JBbXAudGVzdChzKSkge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKHJlRW50aXR5T3JFc2NhcGVkQ2hhciwgdW5lc2NhcGVDaGFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59O1xuXG52YXIgbm9ybWFsaXplVVJJID0gZnVuY3Rpb24odXJpKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGVuY29kZShkZWNvZGUodXJpKSk7XG4gICAgfVxuICAgIGNhdGNoKGVycikge1xuICAgICAgICByZXR1cm4gdXJpO1xuICAgIH1cbn07XG5cbnZhciByZXBsYWNlVW5zYWZlQ2hhciA9IGZ1bmN0aW9uKHMpIHtcbiAgICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlICcmJzpcbiAgICAgICAgcmV0dXJuICcmYW1wOyc7XG4gICAgY2FzZSAnPCc6XG4gICAgICAgIHJldHVybiAnJmx0Oyc7XG4gICAgY2FzZSAnPic6XG4gICAgICAgIHJldHVybiAnJmd0Oyc7XG4gICAgY2FzZSAnXCInOlxuICAgICAgICByZXR1cm4gJyZxdW90Oyc7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufTtcblxudmFyIGVzY2FwZVhtbCA9IGZ1bmN0aW9uKHMsIHByZXNlcnZlX2VudGl0aWVzKSB7XG4gICAgaWYgKHJlWG1sU3BlY2lhbC50ZXN0KHMpKSB7XG4gICAgICAgIGlmIChwcmVzZXJ2ZV9lbnRpdGllcykge1xuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZShyZVhtbFNwZWNpYWxPckVudGl0eSwgcmVwbGFjZVVuc2FmZUNoYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZShyZVhtbFNwZWNpYWwsIHJlcGxhY2VVbnNhZmVDaGFyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyB1bmVzY2FwZVN0cmluZzogdW5lc2NhcGVTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgbm9ybWFsaXplVVJJOiBub3JtYWxpemVVUkksXG4gICAgICAgICAgICAgICAgICAgZXNjYXBlWG1sOiBlc2NhcGVYbWwsXG4gICAgICAgICAgICAgICAgICAgcmVIdG1sVGFnOiByZUh0bWxUYWcsXG4gICAgICAgICAgICAgICAgICAgT1BFTlRBRzogT1BFTlRBRyxcbiAgICAgICAgICAgICAgICAgICBDTE9TRVRBRzogQ0xPU0VUQUcsXG4gICAgICAgICAgICAgICAgICAgRU5USVRZOiBFTlRJVFksXG4gICAgICAgICAgICAgICAgICAgRVNDQVBBQkxFOiBFU0NBUEFCTEVcbiAgICAgICAgICAgICAgICAgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2NvbW1vbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgZW5jb2RlQ2FjaGUgPSB7fTtcblxuXG4vLyBDcmVhdGUgYSBsb29rdXAgYXJyYXkgd2hlcmUgYW55dGhpbmcgYnV0IGNoYXJhY3RlcnMgaW4gYGNoYXJzYCBzdHJpbmdcbi8vIGFuZCBhbHBoYW51bWVyaWMgY2hhcnMgaXMgcGVyY2VudC1lbmNvZGVkLlxuLy9cbmZ1bmN0aW9uIGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpIHtcbiAgdmFyIGksIGNoLCBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdO1xuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlOyB9XG5cbiAgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXSA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcblxuICAgIGlmICgvXlswLTlhLXpdJC9pLnRlc3QoY2gpKSB7XG4gICAgICAvLyBhbHdheXMgYWxsb3cgdW5lbmNvZGVkIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgICBjYWNoZS5wdXNoKGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUucHVzaCgnJScgKyAoJzAnICsgaS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW2V4Y2x1ZGUuY2hhckNvZGVBdChpKV0gPSBleGNsdWRlW2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIEVuY29kZSB1bnNhZmUgY2hhcmFjdGVycyB3aXRoIHBlcmNlbnQtZW5jb2RpbmcsIHNraXBwaW5nIGFscmVhZHlcbi8vIGVuY29kZWQgc2VxdWVuY2VzLlxuLy9cbi8vICAtIHN0cmluZyAgICAgICAtIHN0cmluZyB0byBlbmNvZGVcbi8vICAtIGV4Y2x1ZGUgICAgICAtIGxpc3Qgb2YgY2hhcmFjdGVycyB0byBpZ25vcmUgKGluIGFkZGl0aW9uIHRvIGEtekEtWjAtOSlcbi8vICAtIGtlZXBFc2NhcGVkICAtIGRvbid0IGVuY29kZSAnJScgaW4gYSBjb3JyZWN0IGVzY2FwZSBzZXF1ZW5jZSAoZGVmYXVsdDogdHJ1ZSlcbi8vXG5mdW5jdGlvbiBlbmNvZGUoc3RyaW5nLCBleGNsdWRlLCBrZWVwRXNjYXBlZCkge1xuICB2YXIgaSwgbCwgY29kZSwgbmV4dENvZGUsIGNhY2hlLFxuICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBleGNsdWRlICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGVuY29kZShzdHJpbmcsIGtlZXBFc2NhcGVkKVxuICAgIGtlZXBFc2NhcGVkICA9IGV4Y2x1ZGU7XG4gICAgZXhjbHVkZSA9IGVuY29kZS5kZWZhdWx0Q2hhcnM7XG4gIH1cblxuICBpZiAodHlwZW9mIGtlZXBFc2NhcGVkID09PSAndW5kZWZpbmVkJykge1xuICAgIGtlZXBFc2NhcGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgZm9yIChpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoa2VlcEVzY2FwZWQgJiYgY29kZSA9PT0gMHgyNSAvKiAlICovICYmIGkgKyAyIDwgbCkge1xuICAgICAgaWYgKC9eWzAtOWEtZl17Mn0kL2kudGVzdChzdHJpbmcuc2xpY2UoaSArIDEsIGkgKyAzKSkpIHtcbiAgICAgICAgcmVzdWx0ICs9IHN0cmluZy5zbGljZShpLCBpICsgMyk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgIHJlc3VsdCArPSBjYWNoZVtjb2RlXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REZGRikge1xuICAgICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhEQkZGICYmIGkgKyAxIDwgbCkge1xuICAgICAgICBuZXh0Q29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgaWYgKG5leHRDb2RlID49IDB4REMwMCAmJiBuZXh0Q29kZSA8PSAweERGRkYpIHtcbiAgICAgICAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSArIHN0cmluZ1tpICsgMV0pO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0ICs9ICclRUYlQkYlQkQnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZW5jb2RlLmRlZmF1bHRDaGFycyAgID0gXCI7Lz86QCY9KyQsLV8uIX4qJygpI1wiO1xuZW5jb2RlLmNvbXBvbmVudENoYXJzID0gXCItXy4hfionKClcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9lbmNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4ndXNlIHN0cmljdCc7XG5cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG52YXIgZGVjb2RlQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RGVjb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGRlY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgIGNhY2hlLnB1c2goY2gpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4Y2x1ZGUubGVuZ3RoOyBpKyspIHtcbiAgICBjaCA9IGV4Y2x1ZGUuY2hhckNvZGVBdChpKTtcbiAgICBjYWNoZVtjaF0gPSAnJScgKyAoJzAnICsgY2gudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuXG4vLyBEZWNvZGUgcGVyY2VudC1lbmNvZGVkIHN0cmluZy5cbi8vXG5mdW5jdGlvbiBkZWNvZGUoc3RyaW5nLCBleGNsdWRlKSB7XG4gIHZhciBjYWNoZTtcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgZXhjbHVkZSA9IGRlY29kZS5kZWZhdWx0Q2hhcnM7XG4gIH1cblxuICBjYWNoZSA9IGdldERlY29kZUNhY2hlKGV4Y2x1ZGUpO1xuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2dpLCBmdW5jdGlvbihzZXEpIHtcbiAgICB2YXIgaSwgbCwgYjEsIGIyLCBiMywgYjQsIGNoYXIsXG4gICAgICAgIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yIChpID0gMCwgbCA9IHNlcS5sZW5ndGg7IGkgPCBsOyBpICs9IDMpIHtcbiAgICAgIGIxID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyAxLCBpICsgMyksIDE2KTtcblxuICAgICAgaWYgKGIxIDwgMHg4MCkge1xuICAgICAgICByZXN1bHQgKz0gY2FjaGVbYjFdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RTApID09PSAweEMwICYmIChpICsgMyA8IGwpKSB7XG4gICAgICAgIC8vIDExMHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KTtcblxuICAgICAgICBpZiAoKGIyICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICBjaGFyID0gKChiMSA8PCA2KSAmIDB4N0MwKSB8IChiMiAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPCAweDgwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSAzO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEYwKSA9PT0gMHhFMCAmJiAoaSArIDYgPCBsKSkge1xuICAgICAgICAvLyAxMTEweHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG4gICAgICAgIGIzID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA3LCBpICsgOSksIDE2KTtcblxuICAgICAgICBpZiAoKGIyICYgMHhDMCkgPT09IDB4ODAgJiYgKGIzICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICBjaGFyID0gKChiMSA8PCAxMikgJiAweEYwMDApIHwgKChiMiA8PCA2KSAmIDB4RkMwKSB8IChiMyAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPCAweDgwMCB8fCAoY2hhciA+PSAweEQ4MDAgJiYgY2hhciA8PSAweERGRkYpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gNjtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGOCkgPT09IDB4RjAgJiYgKGkgKyA5IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMTEweHggMTB4eHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuICAgICAgICBiMyA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNywgaSArIDkpLCAxNik7XG4gICAgICAgIGI0ID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyAxMCwgaSArIDEyKSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjMgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjQgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNoYXIgPSAoKGIxIDw8IDE4KSAmIDB4MUMwMDAwKSB8ICgoYjIgPDwgMTIpICYgMHgzRjAwMCkgfCAoKGIzIDw8IDYpICYgMHhGQzApIHwgKGI0ICYgMHgzRik7XG5cbiAgICAgICAgICBpZiAoY2hhciA8IDB4MTAwMDAgfHwgY2hhciA+IDB4MTBGRkZGKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFyIC09IDB4MTAwMDA7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweEQ4MDAgKyAoY2hhciA+PiAxMCksIDB4REMwMCArIChjaGFyICYgMHgzRkYpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkJztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuXG5kZWNvZGUuZGVmYXVsdENoYXJzICAgPSAnOy8/OkAmPSskLCMnO1xuZGVjb2RlLmNvbXBvbmVudENoYXJzID0gJyc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vbWR1cmwvZGVjb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlbmNvZGUgPSByZXF1aXJlKFwiLi9saWIvZW5jb2RlLmpzXCIpLFxuICAgIGRlY29kZSA9IHJlcXVpcmUoXCIuL2xpYi9kZWNvZGUuanNcIik7XG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24oZGF0YSwgbGV2ZWwpe1xuXHRyZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlLlhNTCA6IGRlY29kZS5IVE1MKShkYXRhKTtcbn07XG5cbmV4cG9ydHMuZGVjb2RlU3RyaWN0ID0gZnVuY3Rpb24oZGF0YSwgbGV2ZWwpe1xuXHRyZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlLlhNTCA6IGRlY29kZS5IVE1MU3RyaWN0KShkYXRhKTtcbn07XG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oZGF0YSwgbGV2ZWwpe1xuXHRyZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZW5jb2RlLlhNTCA6IGVuY29kZS5IVE1MKShkYXRhKTtcbn07XG5cbmV4cG9ydHMuZW5jb2RlWE1MID0gZW5jb2RlLlhNTDtcblxuZXhwb3J0cy5lbmNvZGVIVE1MNCA9XG5leHBvcnRzLmVuY29kZUhUTUw1ID1cbmV4cG9ydHMuZW5jb2RlSFRNTCAgPSBlbmNvZGUuSFRNTDtcblxuZXhwb3J0cy5kZWNvZGVYTUwgPVxuZXhwb3J0cy5kZWNvZGVYTUxTdHJpY3QgPSBkZWNvZGUuWE1MO1xuXG5leHBvcnRzLmRlY29kZUhUTUw0ID1cbmV4cG9ydHMuZGVjb2RlSFRNTDUgPVxuZXhwb3J0cy5kZWNvZGVIVE1MID0gZGVjb2RlLkhUTUw7XG5cbmV4cG9ydHMuZGVjb2RlSFRNTDRTdHJpY3QgPVxuZXhwb3J0cy5kZWNvZGVIVE1MNVN0cmljdCA9XG5leHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBkZWNvZGUuSFRNTFN0cmljdDtcblxuZXhwb3J0cy5lc2NhcGUgPSBlbmNvZGUuZXNjYXBlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpbnZlcnNlWE1MID0gZ2V0SW52ZXJzZU9iaihyZXF1aXJlKFwiLi4vbWFwcy94bWwuanNvblwiKSksXG4gICAgeG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG5cbmV4cG9ydHMuWE1MID0gZ2V0SW52ZXJzZShpbnZlcnNlWE1MLCB4bWxSZXBsYWNlcik7XG5cbnZhciBpbnZlcnNlSFRNTCA9IGdldEludmVyc2VPYmoocmVxdWlyZShcIi4uL21hcHMvZW50aXRpZXMuanNvblwiKSksXG4gICAgaHRtbFJlcGxhY2VyID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VIVE1MKTtcblxuZXhwb3J0cy5IVE1MID0gZ2V0SW52ZXJzZShpbnZlcnNlSFRNTCwgaHRtbFJlcGxhY2VyKTtcblxuZnVuY3Rpb24gZ2V0SW52ZXJzZU9iaihvYmope1xuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uKGludmVyc2UsIG5hbWUpe1xuXHRcdGludmVyc2Vbb2JqW25hbWVdXSA9IFwiJlwiICsgbmFtZSArIFwiO1wiO1xuXHRcdHJldHVybiBpbnZlcnNlO1xuXHR9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlKXtcblx0dmFyIHNpbmdsZSA9IFtdLFxuXHQgICAgbXVsdGlwbGUgPSBbXTtcblxuXHRPYmplY3Qua2V5cyhpbnZlcnNlKS5mb3JFYWNoKGZ1bmN0aW9uKGspe1xuXHRcdGlmKGsubGVuZ3RoID09PSAxKXtcblx0XHRcdHNpbmdsZS5wdXNoKFwiXFxcXFwiICsgayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG11bHRpcGxlLnB1c2goayk7XG5cdFx0fVxuXHR9KTtcblxuXHQvL1RPRE8gYWRkIHJhbmdlc1xuXHRtdWx0aXBsZS51bnNoaWZ0KFwiW1wiICsgc2luZ2xlLmpvaW4oXCJcIikgKyBcIl1cIik7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAobXVsdGlwbGUuam9pbihcInxcIiksIFwiZ1wiKTtcbn1cblxudmFyIHJlX25vbkFTQ0lJID0gL1teXFwwLVxceDdGXS9nLFxuICAgIHJlX2FzdHJhbFN5bWJvbHMgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuXG5mdW5jdGlvbiBzaW5nbGVDaGFyUmVwbGFjZXIoYyl7XG5cdHJldHVybiBcIiYjeFwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICsgXCI7XCI7XG59XG5cbmZ1bmN0aW9uIGFzdHJhbFJlcGxhY2VyKGMpe1xuXHQvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuXHR2YXIgaGlnaCA9IGMuY2hhckNvZGVBdCgwKTtcblx0dmFyIGxvdyAgPSBjLmNoYXJDb2RlQXQoMSk7XG5cdHZhciBjb2RlUG9pbnQgPSAoaGlnaCAtIDB4RDgwMCkgKiAweDQwMCArIGxvdyAtIDB4REMwMCArIDB4MTAwMDA7XG5cdHJldHVybiBcIiYjeFwiICsgY29kZVBvaW50LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICsgXCI7XCI7XG59XG5cbmZ1bmN0aW9uIGdldEludmVyc2UoaW52ZXJzZSwgcmUpe1xuXHRmdW5jdGlvbiBmdW5jKG5hbWUpe1xuXHRcdHJldHVybiBpbnZlcnNlW25hbWVdO1xuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHJldHVybiBkYXRhXG5cdFx0XHRcdC5yZXBsYWNlKHJlLCBmdW5jKVxuXHRcdFx0XHQucmVwbGFjZShyZV9hc3RyYWxTeW1ib2xzLCBhc3RyYWxSZXBsYWNlcilcblx0XHRcdFx0LnJlcGxhY2UocmVfbm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG5cdH07XG59XG5cbnZhciByZV94bWxDaGFycyA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcblxuZnVuY3Rpb24gZXNjYXBlWE1MKGRhdGEpe1xuXHRyZXR1cm4gZGF0YVxuXHRcdFx0LnJlcGxhY2UocmVfeG1sQ2hhcnMsIHNpbmdsZUNoYXJSZXBsYWNlcilcblx0XHRcdC5yZXBsYWNlKHJlX2FzdHJhbFN5bWJvbHMsIGFzdHJhbFJlcGxhY2VyKVxuXHRcdFx0LnJlcGxhY2UocmVfbm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG59XG5cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlWE1MO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL2xpYi9lbmNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYW1wXCI6IFwiJlwiLFxuXHRcImFwb3NcIjogXCInXCIsXG5cdFwiZ3RcIjogXCI+XCIsXG5cdFwibHRcIjogXCI8XCIsXG5cdFwicXVvdFwiOiBcIlxcXCJcIlxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL3htbC5qc29uXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFhY3V0ZVwiOiBcIsOBXCIsXG5cdFwiYWFjdXRlXCI6IFwiw6FcIixcblx0XCJBYnJldmVcIjogXCLEglwiLFxuXHRcImFicmV2ZVwiOiBcIsSDXCIsXG5cdFwiYWNcIjogXCLiiL5cIixcblx0XCJhY2RcIjogXCLiiL9cIixcblx0XCJhY0VcIjogXCLiiL7Ms1wiLFxuXHRcIkFjaXJjXCI6IFwiw4JcIixcblx0XCJhY2lyY1wiOiBcIsOiXCIsXG5cdFwiYWN1dGVcIjogXCLCtFwiLFxuXHRcIkFjeVwiOiBcItCQXCIsXG5cdFwiYWN5XCI6IFwi0LBcIixcblx0XCJBRWxpZ1wiOiBcIsOGXCIsXG5cdFwiYWVsaWdcIjogXCLDplwiLFxuXHRcImFmXCI6IFwi4oGhXCIsXG5cdFwiQWZyXCI6IFwi8J2UhFwiLFxuXHRcImFmclwiOiBcIvCdlJ5cIixcblx0XCJBZ3JhdmVcIjogXCLDgFwiLFxuXHRcImFncmF2ZVwiOiBcIsOgXCIsXG5cdFwiYWxlZnN5bVwiOiBcIuKEtVwiLFxuXHRcImFsZXBoXCI6IFwi4oS1XCIsXG5cdFwiQWxwaGFcIjogXCLOkVwiLFxuXHRcImFscGhhXCI6IFwizrFcIixcblx0XCJBbWFjclwiOiBcIsSAXCIsXG5cdFwiYW1hY3JcIjogXCLEgVwiLFxuXHRcImFtYWxnXCI6IFwi4qi/XCIsXG5cdFwiYW1wXCI6IFwiJlwiLFxuXHRcIkFNUFwiOiBcIiZcIixcblx0XCJhbmRhbmRcIjogXCLiqZVcIixcblx0XCJBbmRcIjogXCLiqZNcIixcblx0XCJhbmRcIjogXCLiiKdcIixcblx0XCJhbmRkXCI6IFwi4qmcXCIsXG5cdFwiYW5kc2xvcGVcIjogXCLiqZhcIixcblx0XCJhbmR2XCI6IFwi4qmaXCIsXG5cdFwiYW5nXCI6IFwi4oigXCIsXG5cdFwiYW5nZVwiOiBcIuKmpFwiLFxuXHRcImFuZ2xlXCI6IFwi4oigXCIsXG5cdFwiYW5nbXNkYWFcIjogXCLipqhcIixcblx0XCJhbmdtc2RhYlwiOiBcIuKmqVwiLFxuXHRcImFuZ21zZGFjXCI6IFwi4qaqXCIsXG5cdFwiYW5nbXNkYWRcIjogXCLipqtcIixcblx0XCJhbmdtc2RhZVwiOiBcIuKmrFwiLFxuXHRcImFuZ21zZGFmXCI6IFwi4qatXCIsXG5cdFwiYW5nbXNkYWdcIjogXCLipq5cIixcblx0XCJhbmdtc2RhaFwiOiBcIuKmr1wiLFxuXHRcImFuZ21zZFwiOiBcIuKIoVwiLFxuXHRcImFuZ3J0XCI6IFwi4oifXCIsXG5cdFwiYW5ncnR2YlwiOiBcIuKKvlwiLFxuXHRcImFuZ3J0dmJkXCI6IFwi4qadXCIsXG5cdFwiYW5nc3BoXCI6IFwi4oiiXCIsXG5cdFwiYW5nc3RcIjogXCLDhVwiLFxuXHRcImFuZ3phcnJcIjogXCLijbxcIixcblx0XCJBb2dvblwiOiBcIsSEXCIsXG5cdFwiYW9nb25cIjogXCLEhVwiLFxuXHRcIkFvcGZcIjogXCLwnZS4XCIsXG5cdFwiYW9wZlwiOiBcIvCdlZJcIixcblx0XCJhcGFjaXJcIjogXCLiqa9cIixcblx0XCJhcFwiOiBcIuKJiFwiLFxuXHRcImFwRVwiOiBcIuKpsFwiLFxuXHRcImFwZVwiOiBcIuKJilwiLFxuXHRcImFwaWRcIjogXCLiiYtcIixcblx0XCJhcG9zXCI6IFwiJ1wiLFxuXHRcIkFwcGx5RnVuY3Rpb25cIjogXCLigaFcIixcblx0XCJhcHByb3hcIjogXCLiiYhcIixcblx0XCJhcHByb3hlcVwiOiBcIuKJilwiLFxuXHRcIkFyaW5nXCI6IFwiw4VcIixcblx0XCJhcmluZ1wiOiBcIsOlXCIsXG5cdFwiQXNjclwiOiBcIvCdkpxcIixcblx0XCJhc2NyXCI6IFwi8J2StlwiLFxuXHRcIkFzc2lnblwiOiBcIuKJlFwiLFxuXHRcImFzdFwiOiBcIipcIixcblx0XCJhc3ltcFwiOiBcIuKJiFwiLFxuXHRcImFzeW1wZXFcIjogXCLiiY1cIixcblx0XCJBdGlsZGVcIjogXCLDg1wiLFxuXHRcImF0aWxkZVwiOiBcIsOjXCIsXG5cdFwiQXVtbFwiOiBcIsOEXCIsXG5cdFwiYXVtbFwiOiBcIsOkXCIsXG5cdFwiYXdjb25pbnRcIjogXCLiiLNcIixcblx0XCJhd2ludFwiOiBcIuKokVwiLFxuXHRcImJhY2tjb25nXCI6IFwi4omMXCIsXG5cdFwiYmFja2Vwc2lsb25cIjogXCLPtlwiLFxuXHRcImJhY2twcmltZVwiOiBcIuKAtVwiLFxuXHRcImJhY2tzaW1cIjogXCLiiL1cIixcblx0XCJiYWNrc2ltZXFcIjogXCLii41cIixcblx0XCJCYWNrc2xhc2hcIjogXCLiiJZcIixcblx0XCJCYXJ2XCI6IFwi4qunXCIsXG5cdFwiYmFydmVlXCI6IFwi4oq9XCIsXG5cdFwiYmFyd2VkXCI6IFwi4oyFXCIsXG5cdFwiQmFyd2VkXCI6IFwi4oyGXCIsXG5cdFwiYmFyd2VkZ2VcIjogXCLijIVcIixcblx0XCJiYnJrXCI6IFwi4o61XCIsXG5cdFwiYmJya3RicmtcIjogXCLijrZcIixcblx0XCJiY29uZ1wiOiBcIuKJjFwiLFxuXHRcIkJjeVwiOiBcItCRXCIsXG5cdFwiYmN5XCI6IFwi0LFcIixcblx0XCJiZHF1b1wiOiBcIuKAnlwiLFxuXHRcImJlY2F1c1wiOiBcIuKItVwiLFxuXHRcImJlY2F1c2VcIjogXCLiiLVcIixcblx0XCJCZWNhdXNlXCI6IFwi4oi1XCIsXG5cdFwiYmVtcHR5dlwiOiBcIuKmsFwiLFxuXHRcImJlcHNpXCI6IFwiz7ZcIixcblx0XCJiZXJub3VcIjogXCLihKxcIixcblx0XCJCZXJub3VsbGlzXCI6IFwi4oSsXCIsXG5cdFwiQmV0YVwiOiBcIs6SXCIsXG5cdFwiYmV0YVwiOiBcIs6yXCIsXG5cdFwiYmV0aFwiOiBcIuKEtlwiLFxuXHRcImJldHdlZW5cIjogXCLiiaxcIixcblx0XCJCZnJcIjogXCLwnZSFXCIsXG5cdFwiYmZyXCI6IFwi8J2Un1wiLFxuXHRcImJpZ2NhcFwiOiBcIuKLglwiLFxuXHRcImJpZ2NpcmNcIjogXCLil69cIixcblx0XCJiaWdjdXBcIjogXCLii4NcIixcblx0XCJiaWdvZG90XCI6IFwi4qiAXCIsXG5cdFwiYmlnb3BsdXNcIjogXCLiqIFcIixcblx0XCJiaWdvdGltZXNcIjogXCLiqIJcIixcblx0XCJiaWdzcWN1cFwiOiBcIuKohlwiLFxuXHRcImJpZ3N0YXJcIjogXCLimIVcIixcblx0XCJiaWd0cmlhbmdsZWRvd25cIjogXCLilr1cIixcblx0XCJiaWd0cmlhbmdsZXVwXCI6IFwi4pazXCIsXG5cdFwiYmlndXBsdXNcIjogXCLiqIRcIixcblx0XCJiaWd2ZWVcIjogXCLii4FcIixcblx0XCJiaWd3ZWRnZVwiOiBcIuKLgFwiLFxuXHRcImJrYXJvd1wiOiBcIuKkjVwiLFxuXHRcImJsYWNrbG96ZW5nZVwiOiBcIuKnq1wiLFxuXHRcImJsYWNrc3F1YXJlXCI6IFwi4paqXCIsXG5cdFwiYmxhY2t0cmlhbmdsZVwiOiBcIuKWtFwiLFxuXHRcImJsYWNrdHJpYW5nbGVkb3duXCI6IFwi4pa+XCIsXG5cdFwiYmxhY2t0cmlhbmdsZWxlZnRcIjogXCLil4JcIixcblx0XCJibGFja3RyaWFuZ2xlcmlnaHRcIjogXCLilrhcIixcblx0XCJibGFua1wiOiBcIuKQo1wiLFxuXHRcImJsazEyXCI6IFwi4paSXCIsXG5cdFwiYmxrMTRcIjogXCLilpFcIixcblx0XCJibGszNFwiOiBcIuKWk1wiLFxuXHRcImJsb2NrXCI6IFwi4paIXCIsXG5cdFwiYm5lXCI6IFwiPeKDpVwiLFxuXHRcImJuZXF1aXZcIjogXCLiiaHig6VcIixcblx0XCJiTm90XCI6IFwi4qutXCIsXG5cdFwiYm5vdFwiOiBcIuKMkFwiLFxuXHRcIkJvcGZcIjogXCLwnZS5XCIsXG5cdFwiYm9wZlwiOiBcIvCdlZNcIixcblx0XCJib3RcIjogXCLiiqVcIixcblx0XCJib3R0b21cIjogXCLiiqVcIixcblx0XCJib3d0aWVcIjogXCLii4hcIixcblx0XCJib3hib3hcIjogXCLip4lcIixcblx0XCJib3hkbFwiOiBcIuKUkFwiLFxuXHRcImJveGRMXCI6IFwi4pWVXCIsXG5cdFwiYm94RGxcIjogXCLilZZcIixcblx0XCJib3hETFwiOiBcIuKVl1wiLFxuXHRcImJveGRyXCI6IFwi4pSMXCIsXG5cdFwiYm94ZFJcIjogXCLilZJcIixcblx0XCJib3hEclwiOiBcIuKVk1wiLFxuXHRcImJveERSXCI6IFwi4pWUXCIsXG5cdFwiYm94aFwiOiBcIuKUgFwiLFxuXHRcImJveEhcIjogXCLilZBcIixcblx0XCJib3hoZFwiOiBcIuKUrFwiLFxuXHRcImJveEhkXCI6IFwi4pWkXCIsXG5cdFwiYm94aERcIjogXCLilaVcIixcblx0XCJib3hIRFwiOiBcIuKVplwiLFxuXHRcImJveGh1XCI6IFwi4pS0XCIsXG5cdFwiYm94SHVcIjogXCLiladcIixcblx0XCJib3hoVVwiOiBcIuKVqFwiLFxuXHRcImJveEhVXCI6IFwi4pWpXCIsXG5cdFwiYm94bWludXNcIjogXCLiip9cIixcblx0XCJib3hwbHVzXCI6IFwi4oqeXCIsXG5cdFwiYm94dGltZXNcIjogXCLiiqBcIixcblx0XCJib3h1bFwiOiBcIuKUmFwiLFxuXHRcImJveHVMXCI6IFwi4pWbXCIsXG5cdFwiYm94VWxcIjogXCLilZxcIixcblx0XCJib3hVTFwiOiBcIuKVnVwiLFxuXHRcImJveHVyXCI6IFwi4pSUXCIsXG5cdFwiYm94dVJcIjogXCLilZhcIixcblx0XCJib3hVclwiOiBcIuKVmVwiLFxuXHRcImJveFVSXCI6IFwi4pWaXCIsXG5cdFwiYm94dlwiOiBcIuKUglwiLFxuXHRcImJveFZcIjogXCLilZFcIixcblx0XCJib3h2aFwiOiBcIuKUvFwiLFxuXHRcImJveHZIXCI6IFwi4pWqXCIsXG5cdFwiYm94VmhcIjogXCLilatcIixcblx0XCJib3hWSFwiOiBcIuKVrFwiLFxuXHRcImJveHZsXCI6IFwi4pSkXCIsXG5cdFwiYm94dkxcIjogXCLilaFcIixcblx0XCJib3hWbFwiOiBcIuKVolwiLFxuXHRcImJveFZMXCI6IFwi4pWjXCIsXG5cdFwiYm94dnJcIjogXCLilJxcIixcblx0XCJib3h2UlwiOiBcIuKVnlwiLFxuXHRcImJveFZyXCI6IFwi4pWfXCIsXG5cdFwiYm94VlJcIjogXCLilaBcIixcblx0XCJicHJpbWVcIjogXCLigLVcIixcblx0XCJicmV2ZVwiOiBcIsuYXCIsXG5cdFwiQnJldmVcIjogXCLLmFwiLFxuXHRcImJydmJhclwiOiBcIsKmXCIsXG5cdFwiYnNjclwiOiBcIvCdkrdcIixcblx0XCJCc2NyXCI6IFwi4oSsXCIsXG5cdFwiYnNlbWlcIjogXCLigY9cIixcblx0XCJic2ltXCI6IFwi4oi9XCIsXG5cdFwiYnNpbWVcIjogXCLii41cIixcblx0XCJic29sYlwiOiBcIuKnhVwiLFxuXHRcImJzb2xcIjogXCJcXFxcXCIsXG5cdFwiYnNvbGhzdWJcIjogXCLin4hcIixcblx0XCJidWxsXCI6IFwi4oCiXCIsXG5cdFwiYnVsbGV0XCI6IFwi4oCiXCIsXG5cdFwiYnVtcFwiOiBcIuKJjlwiLFxuXHRcImJ1bXBFXCI6IFwi4qquXCIsXG5cdFwiYnVtcGVcIjogXCLiiY9cIixcblx0XCJCdW1wZXFcIjogXCLiiY5cIixcblx0XCJidW1wZXFcIjogXCLiiY9cIixcblx0XCJDYWN1dGVcIjogXCLEhlwiLFxuXHRcImNhY3V0ZVwiOiBcIsSHXCIsXG5cdFwiY2FwYW5kXCI6IFwi4qmEXCIsXG5cdFwiY2FwYnJjdXBcIjogXCLiqYlcIixcblx0XCJjYXBjYXBcIjogXCLiqYtcIixcblx0XCJjYXBcIjogXCLiiKlcIixcblx0XCJDYXBcIjogXCLii5JcIixcblx0XCJjYXBjdXBcIjogXCLiqYdcIixcblx0XCJjYXBkb3RcIjogXCLiqYBcIixcblx0XCJDYXBpdGFsRGlmZmVyZW50aWFsRFwiOiBcIuKFhVwiLFxuXHRcImNhcHNcIjogXCLiiKnvuIBcIixcblx0XCJjYXJldFwiOiBcIuKBgVwiLFxuXHRcImNhcm9uXCI6IFwiy4dcIixcblx0XCJDYXlsZXlzXCI6IFwi4oStXCIsXG5cdFwiY2NhcHNcIjogXCLiqY1cIixcblx0XCJDY2Fyb25cIjogXCLEjFwiLFxuXHRcImNjYXJvblwiOiBcIsSNXCIsXG5cdFwiQ2NlZGlsXCI6IFwiw4dcIixcblx0XCJjY2VkaWxcIjogXCLDp1wiLFxuXHRcIkNjaXJjXCI6IFwixIhcIixcblx0XCJjY2lyY1wiOiBcIsSJXCIsXG5cdFwiQ2NvbmludFwiOiBcIuKIsFwiLFxuXHRcImNjdXBzXCI6IFwi4qmMXCIsXG5cdFwiY2N1cHNzbVwiOiBcIuKpkFwiLFxuXHRcIkNkb3RcIjogXCLEilwiLFxuXHRcImNkb3RcIjogXCLEi1wiLFxuXHRcImNlZGlsXCI6IFwiwrhcIixcblx0XCJDZWRpbGxhXCI6IFwiwrhcIixcblx0XCJjZW1wdHl2XCI6IFwi4qayXCIsXG5cdFwiY2VudFwiOiBcIsKiXCIsXG5cdFwiY2VudGVyZG90XCI6IFwiwrdcIixcblx0XCJDZW50ZXJEb3RcIjogXCLCt1wiLFxuXHRcImNmclwiOiBcIvCdlKBcIixcblx0XCJDZnJcIjogXCLihK1cIixcblx0XCJDSGN5XCI6IFwi0KdcIixcblx0XCJjaGN5XCI6IFwi0YdcIixcblx0XCJjaGVja1wiOiBcIuKck1wiLFxuXHRcImNoZWNrbWFya1wiOiBcIuKck1wiLFxuXHRcIkNoaVwiOiBcIs6nXCIsXG5cdFwiY2hpXCI6IFwiz4dcIixcblx0XCJjaXJjXCI6IFwiy4ZcIixcblx0XCJjaXJjZXFcIjogXCLiiZdcIixcblx0XCJjaXJjbGVhcnJvd2xlZnRcIjogXCLihrpcIixcblx0XCJjaXJjbGVhcnJvd3JpZ2h0XCI6IFwi4oa7XCIsXG5cdFwiY2lyY2xlZGFzdFwiOiBcIuKKm1wiLFxuXHRcImNpcmNsZWRjaXJjXCI6IFwi4oqaXCIsXG5cdFwiY2lyY2xlZGRhc2hcIjogXCLiip1cIixcblx0XCJDaXJjbGVEb3RcIjogXCLiiplcIixcblx0XCJjaXJjbGVkUlwiOiBcIsKuXCIsXG5cdFwiY2lyY2xlZFNcIjogXCLik4hcIixcblx0XCJDaXJjbGVNaW51c1wiOiBcIuKKllwiLFxuXHRcIkNpcmNsZVBsdXNcIjogXCLiipVcIixcblx0XCJDaXJjbGVUaW1lc1wiOiBcIuKKl1wiLFxuXHRcImNpclwiOiBcIuKXi1wiLFxuXHRcImNpckVcIjogXCLip4NcIixcblx0XCJjaXJlXCI6IFwi4omXXCIsXG5cdFwiY2lyZm5pbnRcIjogXCLiqJBcIixcblx0XCJjaXJtaWRcIjogXCLiq69cIixcblx0XCJjaXJzY2lyXCI6IFwi4qeCXCIsXG5cdFwiQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6IFwi4oiyXCIsXG5cdFwiQ2xvc2VDdXJseURvdWJsZVF1b3RlXCI6IFwi4oCdXCIsXG5cdFwiQ2xvc2VDdXJseVF1b3RlXCI6IFwi4oCZXCIsXG5cdFwiY2x1YnNcIjogXCLimaNcIixcblx0XCJjbHVic3VpdFwiOiBcIuKZo1wiLFxuXHRcImNvbG9uXCI6IFwiOlwiLFxuXHRcIkNvbG9uXCI6IFwi4oi3XCIsXG5cdFwiQ29sb25lXCI6IFwi4qm0XCIsXG5cdFwiY29sb25lXCI6IFwi4omUXCIsXG5cdFwiY29sb25lcVwiOiBcIuKJlFwiLFxuXHRcImNvbW1hXCI6IFwiLFwiLFxuXHRcImNvbW1hdFwiOiBcIkBcIixcblx0XCJjb21wXCI6IFwi4oiBXCIsXG5cdFwiY29tcGZuXCI6IFwi4oiYXCIsXG5cdFwiY29tcGxlbWVudFwiOiBcIuKIgVwiLFxuXHRcImNvbXBsZXhlc1wiOiBcIuKEglwiLFxuXHRcImNvbmdcIjogXCLiiYVcIixcblx0XCJjb25nZG90XCI6IFwi4qmtXCIsXG5cdFwiQ29uZ3J1ZW50XCI6IFwi4omhXCIsXG5cdFwiY29uaW50XCI6IFwi4oiuXCIsXG5cdFwiQ29uaW50XCI6IFwi4oivXCIsXG5cdFwiQ29udG91ckludGVncmFsXCI6IFwi4oiuXCIsXG5cdFwiY29wZlwiOiBcIvCdlZRcIixcblx0XCJDb3BmXCI6IFwi4oSCXCIsXG5cdFwiY29wcm9kXCI6IFwi4oiQXCIsXG5cdFwiQ29wcm9kdWN0XCI6IFwi4oiQXCIsXG5cdFwiY29weVwiOiBcIsKpXCIsXG5cdFwiQ09QWVwiOiBcIsKpXCIsXG5cdFwiY29weXNyXCI6IFwi4oSXXCIsXG5cdFwiQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIs1wiLFxuXHRcImNyYXJyXCI6IFwi4oa1XCIsXG5cdFwiY3Jvc3NcIjogXCLinJdcIixcblx0XCJDcm9zc1wiOiBcIuKor1wiLFxuXHRcIkNzY3JcIjogXCLwnZKeXCIsXG5cdFwiY3NjclwiOiBcIvCdkrhcIixcblx0XCJjc3ViXCI6IFwi4quPXCIsXG5cdFwiY3N1YmVcIjogXCLiq5FcIixcblx0XCJjc3VwXCI6IFwi4quQXCIsXG5cdFwiY3N1cGVcIjogXCLiq5JcIixcblx0XCJjdGRvdFwiOiBcIuKLr1wiLFxuXHRcImN1ZGFycmxcIjogXCLipLhcIixcblx0XCJjdWRhcnJyXCI6IFwi4qS1XCIsXG5cdFwiY3VlcHJcIjogXCLii55cIixcblx0XCJjdWVzY1wiOiBcIuKLn1wiLFxuXHRcImN1bGFyclwiOiBcIuKGtlwiLFxuXHRcImN1bGFycnBcIjogXCLipL1cIixcblx0XCJjdXBicmNhcFwiOiBcIuKpiFwiLFxuXHRcImN1cGNhcFwiOiBcIuKphlwiLFxuXHRcIkN1cENhcFwiOiBcIuKJjVwiLFxuXHRcImN1cFwiOiBcIuKIqlwiLFxuXHRcIkN1cFwiOiBcIuKLk1wiLFxuXHRcImN1cGN1cFwiOiBcIuKpilwiLFxuXHRcImN1cGRvdFwiOiBcIuKKjVwiLFxuXHRcImN1cG9yXCI6IFwi4qmFXCIsXG5cdFwiY3Vwc1wiOiBcIuKIqu+4gFwiLFxuXHRcImN1cmFyclwiOiBcIuKGt1wiLFxuXHRcImN1cmFycm1cIjogXCLipLxcIixcblx0XCJjdXJseWVxcHJlY1wiOiBcIuKLnlwiLFxuXHRcImN1cmx5ZXFzdWNjXCI6IFwi4oufXCIsXG5cdFwiY3VybHl2ZWVcIjogXCLii45cIixcblx0XCJjdXJseXdlZGdlXCI6IFwi4ouPXCIsXG5cdFwiY3VycmVuXCI6IFwiwqRcIixcblx0XCJjdXJ2ZWFycm93bGVmdFwiOiBcIuKGtlwiLFxuXHRcImN1cnZlYXJyb3dyaWdodFwiOiBcIuKGt1wiLFxuXHRcImN1dmVlXCI6IFwi4ouOXCIsXG5cdFwiY3V3ZWRcIjogXCLii49cIixcblx0XCJjd2NvbmludFwiOiBcIuKIslwiLFxuXHRcImN3aW50XCI6IFwi4oixXCIsXG5cdFwiY3lsY3R5XCI6IFwi4oytXCIsXG5cdFwiZGFnZ2VyXCI6IFwi4oCgXCIsXG5cdFwiRGFnZ2VyXCI6IFwi4oChXCIsXG5cdFwiZGFsZXRoXCI6IFwi4oS4XCIsXG5cdFwiZGFyclwiOiBcIuKGk1wiLFxuXHRcIkRhcnJcIjogXCLihqFcIixcblx0XCJkQXJyXCI6IFwi4oeTXCIsXG5cdFwiZGFzaFwiOiBcIuKAkFwiLFxuXHRcIkRhc2h2XCI6IFwi4qukXCIsXG5cdFwiZGFzaHZcIjogXCLiiqNcIixcblx0XCJkYmthcm93XCI6IFwi4qSPXCIsXG5cdFwiZGJsYWNcIjogXCLLnVwiLFxuXHRcIkRjYXJvblwiOiBcIsSOXCIsXG5cdFwiZGNhcm9uXCI6IFwixI9cIixcblx0XCJEY3lcIjogXCLQlFwiLFxuXHRcImRjeVwiOiBcItC0XCIsXG5cdFwiZGRhZ2dlclwiOiBcIuKAoVwiLFxuXHRcImRkYXJyXCI6IFwi4oeKXCIsXG5cdFwiRERcIjogXCLihYVcIixcblx0XCJkZFwiOiBcIuKFhlwiLFxuXHRcIkREb3RyYWhkXCI6IFwi4qSRXCIsXG5cdFwiZGRvdHNlcVwiOiBcIuKpt1wiLFxuXHRcImRlZ1wiOiBcIsKwXCIsXG5cdFwiRGVsXCI6IFwi4oiHXCIsXG5cdFwiRGVsdGFcIjogXCLOlFwiLFxuXHRcImRlbHRhXCI6IFwizrRcIixcblx0XCJkZW1wdHl2XCI6IFwi4qaxXCIsXG5cdFwiZGZpc2h0XCI6IFwi4qW/XCIsXG5cdFwiRGZyXCI6IFwi8J2Uh1wiLFxuXHRcImRmclwiOiBcIvCdlKFcIixcblx0XCJkSGFyXCI6IFwi4qWlXCIsXG5cdFwiZGhhcmxcIjogXCLih4NcIixcblx0XCJkaGFyclwiOiBcIuKHglwiLFxuXHRcIkRpYWNyaXRpY2FsQWN1dGVcIjogXCLCtFwiLFxuXHRcIkRpYWNyaXRpY2FsRG90XCI6IFwiy5lcIixcblx0XCJEaWFjcml0aWNhbERvdWJsZUFjdXRlXCI6IFwiy51cIixcblx0XCJEaWFjcml0aWNhbEdyYXZlXCI6IFwiYFwiLFxuXHRcIkRpYWNyaXRpY2FsVGlsZGVcIjogXCLLnFwiLFxuXHRcImRpYW1cIjogXCLii4RcIixcblx0XCJkaWFtb25kXCI6IFwi4ouEXCIsXG5cdFwiRGlhbW9uZFwiOiBcIuKLhFwiLFxuXHRcImRpYW1vbmRzdWl0XCI6IFwi4pmmXCIsXG5cdFwiZGlhbXNcIjogXCLimaZcIixcblx0XCJkaWVcIjogXCLCqFwiLFxuXHRcIkRpZmZlcmVudGlhbERcIjogXCLihYZcIixcblx0XCJkaWdhbW1hXCI6IFwiz51cIixcblx0XCJkaXNpblwiOiBcIuKLslwiLFxuXHRcImRpdlwiOiBcIsO3XCIsXG5cdFwiZGl2aWRlXCI6IFwiw7dcIixcblx0XCJkaXZpZGVvbnRpbWVzXCI6IFwi4ouHXCIsXG5cdFwiZGl2b254XCI6IFwi4ouHXCIsXG5cdFwiREpjeVwiOiBcItCCXCIsXG5cdFwiZGpjeVwiOiBcItGSXCIsXG5cdFwiZGxjb3JuXCI6IFwi4oyeXCIsXG5cdFwiZGxjcm9wXCI6IFwi4oyNXCIsXG5cdFwiZG9sbGFyXCI6IFwiJFwiLFxuXHRcIkRvcGZcIjogXCLwnZS7XCIsXG5cdFwiZG9wZlwiOiBcIvCdlZVcIixcblx0XCJEb3RcIjogXCLCqFwiLFxuXHRcImRvdFwiOiBcIsuZXCIsXG5cdFwiRG90RG90XCI6IFwi4oOcXCIsXG5cdFwiZG90ZXFcIjogXCLiiZBcIixcblx0XCJkb3RlcWRvdFwiOiBcIuKJkVwiLFxuXHRcIkRvdEVxdWFsXCI6IFwi4omQXCIsXG5cdFwiZG90bWludXNcIjogXCLiiLhcIixcblx0XCJkb3RwbHVzXCI6IFwi4oiUXCIsXG5cdFwiZG90c3F1YXJlXCI6IFwi4oqhXCIsXG5cdFwiZG91YmxlYmFyd2VkZ2VcIjogXCLijIZcIixcblx0XCJEb3VibGVDb250b3VySW50ZWdyYWxcIjogXCLiiK9cIixcblx0XCJEb3VibGVEb3RcIjogXCLCqFwiLFxuXHRcIkRvdWJsZURvd25BcnJvd1wiOiBcIuKHk1wiLFxuXHRcIkRvdWJsZUxlZnRBcnJvd1wiOiBcIuKHkFwiLFxuXHRcIkRvdWJsZUxlZnRSaWdodEFycm93XCI6IFwi4oeUXCIsXG5cdFwiRG91YmxlTGVmdFRlZVwiOiBcIuKrpFwiLFxuXHRcIkRvdWJsZUxvbmdMZWZ0QXJyb3dcIjogXCLin7hcIixcblx0XCJEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3dcIjogXCLin7pcIixcblx0XCJEb3VibGVMb25nUmlnaHRBcnJvd1wiOiBcIuKfuVwiLFxuXHRcIkRvdWJsZVJpZ2h0QXJyb3dcIjogXCLih5JcIixcblx0XCJEb3VibGVSaWdodFRlZVwiOiBcIuKKqFwiLFxuXHRcIkRvdWJsZVVwQXJyb3dcIjogXCLih5FcIixcblx0XCJEb3VibGVVcERvd25BcnJvd1wiOiBcIuKHlVwiLFxuXHRcIkRvdWJsZVZlcnRpY2FsQmFyXCI6IFwi4oilXCIsXG5cdFwiRG93bkFycm93QmFyXCI6IFwi4qSTXCIsXG5cdFwiZG93bmFycm93XCI6IFwi4oaTXCIsXG5cdFwiRG93bkFycm93XCI6IFwi4oaTXCIsXG5cdFwiRG93bmFycm93XCI6IFwi4oeTXCIsXG5cdFwiRG93bkFycm93VXBBcnJvd1wiOiBcIuKHtVwiLFxuXHRcIkRvd25CcmV2ZVwiOiBcIsyRXCIsXG5cdFwiZG93bmRvd25hcnJvd3NcIjogXCLih4pcIixcblx0XCJkb3duaGFycG9vbmxlZnRcIjogXCLih4NcIixcblx0XCJkb3duaGFycG9vbnJpZ2h0XCI6IFwi4oeCXCIsXG5cdFwiRG93bkxlZnRSaWdodFZlY3RvclwiOiBcIuKlkFwiLFxuXHRcIkRvd25MZWZ0VGVlVmVjdG9yXCI6IFwi4qWeXCIsXG5cdFwiRG93bkxlZnRWZWN0b3JCYXJcIjogXCLipZZcIixcblx0XCJEb3duTGVmdFZlY3RvclwiOiBcIuKGvVwiLFxuXHRcIkRvd25SaWdodFRlZVZlY3RvclwiOiBcIuKln1wiLFxuXHRcIkRvd25SaWdodFZlY3RvckJhclwiOiBcIuKll1wiLFxuXHRcIkRvd25SaWdodFZlY3RvclwiOiBcIuKHgVwiLFxuXHRcIkRvd25UZWVBcnJvd1wiOiBcIuKGp1wiLFxuXHRcIkRvd25UZWVcIjogXCLiiqRcIixcblx0XCJkcmJrYXJvd1wiOiBcIuKkkFwiLFxuXHRcImRyY29yblwiOiBcIuKMn1wiLFxuXHRcImRyY3JvcFwiOiBcIuKMjFwiLFxuXHRcIkRzY3JcIjogXCLwnZKfXCIsXG5cdFwiZHNjclwiOiBcIvCdkrlcIixcblx0XCJEU2N5XCI6IFwi0IVcIixcblx0XCJkc2N5XCI6IFwi0ZVcIixcblx0XCJkc29sXCI6IFwi4qe2XCIsXG5cdFwiRHN0cm9rXCI6IFwixJBcIixcblx0XCJkc3Ryb2tcIjogXCLEkVwiLFxuXHRcImR0ZG90XCI6IFwi4ouxXCIsXG5cdFwiZHRyaVwiOiBcIuKWv1wiLFxuXHRcImR0cmlmXCI6IFwi4pa+XCIsXG5cdFwiZHVhcnJcIjogXCLih7VcIixcblx0XCJkdWhhclwiOiBcIuKlr1wiLFxuXHRcImR3YW5nbGVcIjogXCLipqZcIixcblx0XCJEWmN5XCI6IFwi0I9cIixcblx0XCJkemN5XCI6IFwi0Z9cIixcblx0XCJkemlncmFyclwiOiBcIuKfv1wiLFxuXHRcIkVhY3V0ZVwiOiBcIsOJXCIsXG5cdFwiZWFjdXRlXCI6IFwiw6lcIixcblx0XCJlYXN0ZXJcIjogXCLiqa5cIixcblx0XCJFY2Fyb25cIjogXCLEmlwiLFxuXHRcImVjYXJvblwiOiBcIsSbXCIsXG5cdFwiRWNpcmNcIjogXCLDilwiLFxuXHRcImVjaXJjXCI6IFwiw6pcIixcblx0XCJlY2lyXCI6IFwi4omWXCIsXG5cdFwiZWNvbG9uXCI6IFwi4omVXCIsXG5cdFwiRWN5XCI6IFwi0K1cIixcblx0XCJlY3lcIjogXCLRjVwiLFxuXHRcImVERG90XCI6IFwi4qm3XCIsXG5cdFwiRWRvdFwiOiBcIsSWXCIsXG5cdFwiZWRvdFwiOiBcIsSXXCIsXG5cdFwiZURvdFwiOiBcIuKJkVwiLFxuXHRcImVlXCI6IFwi4oWHXCIsXG5cdFwiZWZEb3RcIjogXCLiiZJcIixcblx0XCJFZnJcIjogXCLwnZSIXCIsXG5cdFwiZWZyXCI6IFwi8J2UolwiLFxuXHRcImVnXCI6IFwi4qqaXCIsXG5cdFwiRWdyYXZlXCI6IFwiw4hcIixcblx0XCJlZ3JhdmVcIjogXCLDqFwiLFxuXHRcImVnc1wiOiBcIuKqllwiLFxuXHRcImVnc2RvdFwiOiBcIuKqmFwiLFxuXHRcImVsXCI6IFwi4qqZXCIsXG5cdFwiRWxlbWVudFwiOiBcIuKIiFwiLFxuXHRcImVsaW50ZXJzXCI6IFwi4o+nXCIsXG5cdFwiZWxsXCI6IFwi4oSTXCIsXG5cdFwiZWxzXCI6IFwi4qqVXCIsXG5cdFwiZWxzZG90XCI6IFwi4qqXXCIsXG5cdFwiRW1hY3JcIjogXCLEklwiLFxuXHRcImVtYWNyXCI6IFwixJNcIixcblx0XCJlbXB0eVwiOiBcIuKIhVwiLFxuXHRcImVtcHR5c2V0XCI6IFwi4oiFXCIsXG5cdFwiRW1wdHlTbWFsbFNxdWFyZVwiOiBcIuKXu1wiLFxuXHRcImVtcHR5dlwiOiBcIuKIhVwiLFxuXHRcIkVtcHR5VmVyeVNtYWxsU3F1YXJlXCI6IFwi4parXCIsXG5cdFwiZW1zcDEzXCI6IFwi4oCEXCIsXG5cdFwiZW1zcDE0XCI6IFwi4oCFXCIsXG5cdFwiZW1zcFwiOiBcIuKAg1wiLFxuXHRcIkVOR1wiOiBcIsWKXCIsXG5cdFwiZW5nXCI6IFwixYtcIixcblx0XCJlbnNwXCI6IFwi4oCCXCIsXG5cdFwiRW9nb25cIjogXCLEmFwiLFxuXHRcImVvZ29uXCI6IFwixJlcIixcblx0XCJFb3BmXCI6IFwi8J2UvFwiLFxuXHRcImVvcGZcIjogXCLwnZWWXCIsXG5cdFwiZXBhclwiOiBcIuKLlVwiLFxuXHRcImVwYXJzbFwiOiBcIuKno1wiLFxuXHRcImVwbHVzXCI6IFwi4qmxXCIsXG5cdFwiZXBzaVwiOiBcIs61XCIsXG5cdFwiRXBzaWxvblwiOiBcIs6VXCIsXG5cdFwiZXBzaWxvblwiOiBcIs61XCIsXG5cdFwiZXBzaXZcIjogXCLPtVwiLFxuXHRcImVxY2lyY1wiOiBcIuKJllwiLFxuXHRcImVxY29sb25cIjogXCLiiZVcIixcblx0XCJlcXNpbVwiOiBcIuKJglwiLFxuXHRcImVxc2xhbnRndHJcIjogXCLiqpZcIixcblx0XCJlcXNsYW50bGVzc1wiOiBcIuKqlVwiLFxuXHRcIkVxdWFsXCI6IFwi4qm1XCIsXG5cdFwiZXF1YWxzXCI6IFwiPVwiLFxuXHRcIkVxdWFsVGlsZGVcIjogXCLiiYJcIixcblx0XCJlcXVlc3RcIjogXCLiiZ9cIixcblx0XCJFcXVpbGlicml1bVwiOiBcIuKHjFwiLFxuXHRcImVxdWl2XCI6IFwi4omhXCIsXG5cdFwiZXF1aXZERFwiOiBcIuKpuFwiLFxuXHRcImVxdnBhcnNsXCI6IFwi4qelXCIsXG5cdFwiZXJhcnJcIjogXCLipbFcIixcblx0XCJlckRvdFwiOiBcIuKJk1wiLFxuXHRcImVzY3JcIjogXCLihK9cIixcblx0XCJFc2NyXCI6IFwi4oSwXCIsXG5cdFwiZXNkb3RcIjogXCLiiZBcIixcblx0XCJFc2ltXCI6IFwi4qmzXCIsXG5cdFwiZXNpbVwiOiBcIuKJglwiLFxuXHRcIkV0YVwiOiBcIs6XXCIsXG5cdFwiZXRhXCI6IFwizrdcIixcblx0XCJFVEhcIjogXCLDkFwiLFxuXHRcImV0aFwiOiBcIsOwXCIsXG5cdFwiRXVtbFwiOiBcIsOLXCIsXG5cdFwiZXVtbFwiOiBcIsOrXCIsXG5cdFwiZXVyb1wiOiBcIuKCrFwiLFxuXHRcImV4Y2xcIjogXCIhXCIsXG5cdFwiZXhpc3RcIjogXCLiiINcIixcblx0XCJFeGlzdHNcIjogXCLiiINcIixcblx0XCJleHBlY3RhdGlvblwiOiBcIuKEsFwiLFxuXHRcImV4cG9uZW50aWFsZVwiOiBcIuKFh1wiLFxuXHRcIkV4cG9uZW50aWFsRVwiOiBcIuKFh1wiLFxuXHRcImZhbGxpbmdkb3RzZXFcIjogXCLiiZJcIixcblx0XCJGY3lcIjogXCLQpFwiLFxuXHRcImZjeVwiOiBcItGEXCIsXG5cdFwiZmVtYWxlXCI6IFwi4pmAXCIsXG5cdFwiZmZpbGlnXCI6IFwi76yDXCIsXG5cdFwiZmZsaWdcIjogXCLvrIBcIixcblx0XCJmZmxsaWdcIjogXCLvrIRcIixcblx0XCJGZnJcIjogXCLwnZSJXCIsXG5cdFwiZmZyXCI6IFwi8J2Uo1wiLFxuXHRcImZpbGlnXCI6IFwi76yBXCIsXG5cdFwiRmlsbGVkU21hbGxTcXVhcmVcIjogXCLil7xcIixcblx0XCJGaWxsZWRWZXJ5U21hbGxTcXVhcmVcIjogXCLilqpcIixcblx0XCJmamxpZ1wiOiBcImZqXCIsXG5cdFwiZmxhdFwiOiBcIuKZrVwiLFxuXHRcImZsbGlnXCI6IFwi76yCXCIsXG5cdFwiZmx0bnNcIjogXCLilrFcIixcblx0XCJmbm9mXCI6IFwixpJcIixcblx0XCJGb3BmXCI6IFwi8J2UvVwiLFxuXHRcImZvcGZcIjogXCLwnZWXXCIsXG5cdFwiZm9yYWxsXCI6IFwi4oiAXCIsXG5cdFwiRm9yQWxsXCI6IFwi4oiAXCIsXG5cdFwiZm9ya1wiOiBcIuKLlFwiLFxuXHRcImZvcmt2XCI6IFwi4quZXCIsXG5cdFwiRm91cmllcnRyZlwiOiBcIuKEsVwiLFxuXHRcImZwYXJ0aW50XCI6IFwi4qiNXCIsXG5cdFwiZnJhYzEyXCI6IFwiwr1cIixcblx0XCJmcmFjMTNcIjogXCLihZNcIixcblx0XCJmcmFjMTRcIjogXCLCvFwiLFxuXHRcImZyYWMxNVwiOiBcIuKFlVwiLFxuXHRcImZyYWMxNlwiOiBcIuKFmVwiLFxuXHRcImZyYWMxOFwiOiBcIuKFm1wiLFxuXHRcImZyYWMyM1wiOiBcIuKFlFwiLFxuXHRcImZyYWMyNVwiOiBcIuKFllwiLFxuXHRcImZyYWMzNFwiOiBcIsK+XCIsXG5cdFwiZnJhYzM1XCI6IFwi4oWXXCIsXG5cdFwiZnJhYzM4XCI6IFwi4oWcXCIsXG5cdFwiZnJhYzQ1XCI6IFwi4oWYXCIsXG5cdFwiZnJhYzU2XCI6IFwi4oWaXCIsXG5cdFwiZnJhYzU4XCI6IFwi4oWdXCIsXG5cdFwiZnJhYzc4XCI6IFwi4oWeXCIsXG5cdFwiZnJhc2xcIjogXCLigYRcIixcblx0XCJmcm93blwiOiBcIuKMolwiLFxuXHRcImZzY3JcIjogXCLwnZK7XCIsXG5cdFwiRnNjclwiOiBcIuKEsVwiLFxuXHRcImdhY3V0ZVwiOiBcIse1XCIsXG5cdFwiR2FtbWFcIjogXCLOk1wiLFxuXHRcImdhbW1hXCI6IFwizrNcIixcblx0XCJHYW1tYWRcIjogXCLPnFwiLFxuXHRcImdhbW1hZFwiOiBcIs+dXCIsXG5cdFwiZ2FwXCI6IFwi4qqGXCIsXG5cdFwiR2JyZXZlXCI6IFwixJ5cIixcblx0XCJnYnJldmVcIjogXCLEn1wiLFxuXHRcIkdjZWRpbFwiOiBcIsSiXCIsXG5cdFwiR2NpcmNcIjogXCLEnFwiLFxuXHRcImdjaXJjXCI6IFwixJ1cIixcblx0XCJHY3lcIjogXCLQk1wiLFxuXHRcImdjeVwiOiBcItCzXCIsXG5cdFwiR2RvdFwiOiBcIsSgXCIsXG5cdFwiZ2RvdFwiOiBcIsShXCIsXG5cdFwiZ2VcIjogXCLiiaVcIixcblx0XCJnRVwiOiBcIuKJp1wiLFxuXHRcImdFbFwiOiBcIuKqjFwiLFxuXHRcImdlbFwiOiBcIuKLm1wiLFxuXHRcImdlcVwiOiBcIuKJpVwiLFxuXHRcImdlcXFcIjogXCLiiadcIixcblx0XCJnZXFzbGFudFwiOiBcIuKpvlwiLFxuXHRcImdlc2NjXCI6IFwi4qqpXCIsXG5cdFwiZ2VzXCI6IFwi4qm+XCIsXG5cdFwiZ2VzZG90XCI6IFwi4qqAXCIsXG5cdFwiZ2VzZG90b1wiOiBcIuKqglwiLFxuXHRcImdlc2RvdG9sXCI6IFwi4qqEXCIsXG5cdFwiZ2VzbFwiOiBcIuKLm++4gFwiLFxuXHRcImdlc2xlc1wiOiBcIuKqlFwiLFxuXHRcIkdmclwiOiBcIvCdlIpcIixcblx0XCJnZnJcIjogXCLwnZSkXCIsXG5cdFwiZ2dcIjogXCLiiatcIixcblx0XCJHZ1wiOiBcIuKLmVwiLFxuXHRcImdnZ1wiOiBcIuKLmVwiLFxuXHRcImdpbWVsXCI6IFwi4oS3XCIsXG5cdFwiR0pjeVwiOiBcItCDXCIsXG5cdFwiZ2pjeVwiOiBcItGTXCIsXG5cdFwiZ2xhXCI6IFwi4qqlXCIsXG5cdFwiZ2xcIjogXCLiibdcIixcblx0XCJnbEVcIjogXCLiqpJcIixcblx0XCJnbGpcIjogXCLiqqRcIixcblx0XCJnbmFwXCI6IFwi4qqKXCIsXG5cdFwiZ25hcHByb3hcIjogXCLiqopcIixcblx0XCJnbmVcIjogXCLiqohcIixcblx0XCJnbkVcIjogXCLiialcIixcblx0XCJnbmVxXCI6IFwi4qqIXCIsXG5cdFwiZ25lcXFcIjogXCLiialcIixcblx0XCJnbnNpbVwiOiBcIuKLp1wiLFxuXHRcIkdvcGZcIjogXCLwnZS+XCIsXG5cdFwiZ29wZlwiOiBcIvCdlZhcIixcblx0XCJncmF2ZVwiOiBcImBcIixcblx0XCJHcmVhdGVyRXF1YWxcIjogXCLiiaVcIixcblx0XCJHcmVhdGVyRXF1YWxMZXNzXCI6IFwi4oubXCIsXG5cdFwiR3JlYXRlckZ1bGxFcXVhbFwiOiBcIuKJp1wiLFxuXHRcIkdyZWF0ZXJHcmVhdGVyXCI6IFwi4qqiXCIsXG5cdFwiR3JlYXRlckxlc3NcIjogXCLiibdcIixcblx0XCJHcmVhdGVyU2xhbnRFcXVhbFwiOiBcIuKpvlwiLFxuXHRcIkdyZWF0ZXJUaWxkZVwiOiBcIuKJs1wiLFxuXHRcIkdzY3JcIjogXCLwnZKiXCIsXG5cdFwiZ3NjclwiOiBcIuKEilwiLFxuXHRcImdzaW1cIjogXCLiibNcIixcblx0XCJnc2ltZVwiOiBcIuKqjlwiLFxuXHRcImdzaW1sXCI6IFwi4qqQXCIsXG5cdFwiZ3RjY1wiOiBcIuKqp1wiLFxuXHRcImd0Y2lyXCI6IFwi4qm6XCIsXG5cdFwiZ3RcIjogXCI+XCIsXG5cdFwiR1RcIjogXCI+XCIsXG5cdFwiR3RcIjogXCLiiatcIixcblx0XCJndGRvdFwiOiBcIuKLl1wiLFxuXHRcImd0bFBhclwiOiBcIuKmlVwiLFxuXHRcImd0cXVlc3RcIjogXCLiqbxcIixcblx0XCJndHJhcHByb3hcIjogXCLiqoZcIixcblx0XCJndHJhcnJcIjogXCLipbhcIixcblx0XCJndHJkb3RcIjogXCLii5dcIixcblx0XCJndHJlcWxlc3NcIjogXCLii5tcIixcblx0XCJndHJlcXFsZXNzXCI6IFwi4qqMXCIsXG5cdFwiZ3RybGVzc1wiOiBcIuKJt1wiLFxuXHRcImd0cnNpbVwiOiBcIuKJs1wiLFxuXHRcImd2ZXJ0bmVxcVwiOiBcIuKJqe+4gFwiLFxuXHRcImd2bkVcIjogXCLiianvuIBcIixcblx0XCJIYWNla1wiOiBcIsuHXCIsXG5cdFwiaGFpcnNwXCI6IFwi4oCKXCIsXG5cdFwiaGFsZlwiOiBcIsK9XCIsXG5cdFwiaGFtaWx0XCI6IFwi4oSLXCIsXG5cdFwiSEFSRGN5XCI6IFwi0KpcIixcblx0XCJoYXJkY3lcIjogXCLRilwiLFxuXHRcImhhcnJjaXJcIjogXCLipYhcIixcblx0XCJoYXJyXCI6IFwi4oaUXCIsXG5cdFwiaEFyclwiOiBcIuKHlFwiLFxuXHRcImhhcnJ3XCI6IFwi4oatXCIsXG5cdFwiSGF0XCI6IFwiXlwiLFxuXHRcImhiYXJcIjogXCLihI9cIixcblx0XCJIY2lyY1wiOiBcIsSkXCIsXG5cdFwiaGNpcmNcIjogXCLEpVwiLFxuXHRcImhlYXJ0c1wiOiBcIuKZpVwiLFxuXHRcImhlYXJ0c3VpdFwiOiBcIuKZpVwiLFxuXHRcImhlbGxpcFwiOiBcIuKAplwiLFxuXHRcImhlcmNvblwiOiBcIuKKuVwiLFxuXHRcImhmclwiOiBcIvCdlKVcIixcblx0XCJIZnJcIjogXCLihIxcIixcblx0XCJIaWxiZXJ0U3BhY2VcIjogXCLihItcIixcblx0XCJoa3NlYXJvd1wiOiBcIuKkpVwiLFxuXHRcImhrc3dhcm93XCI6IFwi4qSmXCIsXG5cdFwiaG9hcnJcIjogXCLih79cIixcblx0XCJob210aHRcIjogXCLiiLtcIixcblx0XCJob29rbGVmdGFycm93XCI6IFwi4oapXCIsXG5cdFwiaG9va3JpZ2h0YXJyb3dcIjogXCLihqpcIixcblx0XCJob3BmXCI6IFwi8J2VmVwiLFxuXHRcIkhvcGZcIjogXCLihI1cIixcblx0XCJob3JiYXJcIjogXCLigJVcIixcblx0XCJIb3Jpem9udGFsTGluZVwiOiBcIuKUgFwiLFxuXHRcImhzY3JcIjogXCLwnZK9XCIsXG5cdFwiSHNjclwiOiBcIuKEi1wiLFxuXHRcImhzbGFzaFwiOiBcIuKEj1wiLFxuXHRcIkhzdHJva1wiOiBcIsSmXCIsXG5cdFwiaHN0cm9rXCI6IFwixKdcIixcblx0XCJIdW1wRG93bkh1bXBcIjogXCLiiY5cIixcblx0XCJIdW1wRXF1YWxcIjogXCLiiY9cIixcblx0XCJoeWJ1bGxcIjogXCLigYNcIixcblx0XCJoeXBoZW5cIjogXCLigJBcIixcblx0XCJJYWN1dGVcIjogXCLDjVwiLFxuXHRcImlhY3V0ZVwiOiBcIsOtXCIsXG5cdFwiaWNcIjogXCLigaNcIixcblx0XCJJY2lyY1wiOiBcIsOOXCIsXG5cdFwiaWNpcmNcIjogXCLDrlwiLFxuXHRcIkljeVwiOiBcItCYXCIsXG5cdFwiaWN5XCI6IFwi0LhcIixcblx0XCJJZG90XCI6IFwixLBcIixcblx0XCJJRWN5XCI6IFwi0JVcIixcblx0XCJpZWN5XCI6IFwi0LVcIixcblx0XCJpZXhjbFwiOiBcIsKhXCIsXG5cdFwiaWZmXCI6IFwi4oeUXCIsXG5cdFwiaWZyXCI6IFwi8J2UplwiLFxuXHRcIklmclwiOiBcIuKEkVwiLFxuXHRcIklncmF2ZVwiOiBcIsOMXCIsXG5cdFwiaWdyYXZlXCI6IFwiw6xcIixcblx0XCJpaVwiOiBcIuKFiFwiLFxuXHRcImlpaWludFwiOiBcIuKojFwiLFxuXHRcImlpaW50XCI6IFwi4oitXCIsXG5cdFwiaWluZmluXCI6IFwi4qecXCIsXG5cdFwiaWlvdGFcIjogXCLihKlcIixcblx0XCJJSmxpZ1wiOiBcIsSyXCIsXG5cdFwiaWpsaWdcIjogXCLEs1wiLFxuXHRcIkltYWNyXCI6IFwixKpcIixcblx0XCJpbWFjclwiOiBcIsSrXCIsXG5cdFwiaW1hZ2VcIjogXCLihJFcIixcblx0XCJJbWFnaW5hcnlJXCI6IFwi4oWIXCIsXG5cdFwiaW1hZ2xpbmVcIjogXCLihJBcIixcblx0XCJpbWFncGFydFwiOiBcIuKEkVwiLFxuXHRcImltYXRoXCI6IFwixLFcIixcblx0XCJJbVwiOiBcIuKEkVwiLFxuXHRcImltb2ZcIjogXCLiirdcIixcblx0XCJpbXBlZFwiOiBcIsa1XCIsXG5cdFwiSW1wbGllc1wiOiBcIuKHklwiLFxuXHRcImluY2FyZVwiOiBcIuKEhVwiLFxuXHRcImluXCI6IFwi4oiIXCIsXG5cdFwiaW5maW5cIjogXCLiiJ5cIixcblx0XCJpbmZpbnRpZVwiOiBcIuKnnVwiLFxuXHRcImlub2RvdFwiOiBcIsSxXCIsXG5cdFwiaW50Y2FsXCI6IFwi4oq6XCIsXG5cdFwiaW50XCI6IFwi4oirXCIsXG5cdFwiSW50XCI6IFwi4oisXCIsXG5cdFwiaW50ZWdlcnNcIjogXCLihKRcIixcblx0XCJJbnRlZ3JhbFwiOiBcIuKIq1wiLFxuXHRcImludGVyY2FsXCI6IFwi4oq6XCIsXG5cdFwiSW50ZXJzZWN0aW9uXCI6IFwi4ouCXCIsXG5cdFwiaW50bGFyaGtcIjogXCLiqJdcIixcblx0XCJpbnRwcm9kXCI6IFwi4qi8XCIsXG5cdFwiSW52aXNpYmxlQ29tbWFcIjogXCLigaNcIixcblx0XCJJbnZpc2libGVUaW1lc1wiOiBcIuKBolwiLFxuXHRcIklPY3lcIjogXCLQgVwiLFxuXHRcImlvY3lcIjogXCLRkVwiLFxuXHRcIklvZ29uXCI6IFwixK5cIixcblx0XCJpb2dvblwiOiBcIsSvXCIsXG5cdFwiSW9wZlwiOiBcIvCdlYBcIixcblx0XCJpb3BmXCI6IFwi8J2VmlwiLFxuXHRcIklvdGFcIjogXCLOmVwiLFxuXHRcImlvdGFcIjogXCLOuVwiLFxuXHRcImlwcm9kXCI6IFwi4qi8XCIsXG5cdFwiaXF1ZXN0XCI6IFwiwr9cIixcblx0XCJpc2NyXCI6IFwi8J2SvlwiLFxuXHRcIklzY3JcIjogXCLihJBcIixcblx0XCJpc2luXCI6IFwi4oiIXCIsXG5cdFwiaXNpbmRvdFwiOiBcIuKLtVwiLFxuXHRcImlzaW5FXCI6IFwi4ou5XCIsXG5cdFwiaXNpbnNcIjogXCLii7RcIixcblx0XCJpc2luc3ZcIjogXCLii7NcIixcblx0XCJpc2ludlwiOiBcIuKIiFwiLFxuXHRcIml0XCI6IFwi4oGiXCIsXG5cdFwiSXRpbGRlXCI6IFwixKhcIixcblx0XCJpdGlsZGVcIjogXCLEqVwiLFxuXHRcIkl1a2N5XCI6IFwi0IZcIixcblx0XCJpdWtjeVwiOiBcItGWXCIsXG5cdFwiSXVtbFwiOiBcIsOPXCIsXG5cdFwiaXVtbFwiOiBcIsOvXCIsXG5cdFwiSmNpcmNcIjogXCLEtFwiLFxuXHRcImpjaXJjXCI6IFwixLVcIixcblx0XCJKY3lcIjogXCLQmVwiLFxuXHRcImpjeVwiOiBcItC5XCIsXG5cdFwiSmZyXCI6IFwi8J2UjVwiLFxuXHRcImpmclwiOiBcIvCdlKdcIixcblx0XCJqbWF0aFwiOiBcIsi3XCIsXG5cdFwiSm9wZlwiOiBcIvCdlYFcIixcblx0XCJqb3BmXCI6IFwi8J2Vm1wiLFxuXHRcIkpzY3JcIjogXCLwnZKlXCIsXG5cdFwianNjclwiOiBcIvCdkr9cIixcblx0XCJKc2VyY3lcIjogXCLQiFwiLFxuXHRcImpzZXJjeVwiOiBcItGYXCIsXG5cdFwiSnVrY3lcIjogXCLQhFwiLFxuXHRcImp1a2N5XCI6IFwi0ZRcIixcblx0XCJLYXBwYVwiOiBcIs6aXCIsXG5cdFwia2FwcGFcIjogXCLOulwiLFxuXHRcImthcHBhdlwiOiBcIs+wXCIsXG5cdFwiS2NlZGlsXCI6IFwixLZcIixcblx0XCJrY2VkaWxcIjogXCLEt1wiLFxuXHRcIktjeVwiOiBcItCaXCIsXG5cdFwia2N5XCI6IFwi0LpcIixcblx0XCJLZnJcIjogXCLwnZSOXCIsXG5cdFwia2ZyXCI6IFwi8J2UqFwiLFxuXHRcImtncmVlblwiOiBcIsS4XCIsXG5cdFwiS0hjeVwiOiBcItClXCIsXG5cdFwia2hjeVwiOiBcItGFXCIsXG5cdFwiS0pjeVwiOiBcItCMXCIsXG5cdFwia2pjeVwiOiBcItGcXCIsXG5cdFwiS29wZlwiOiBcIvCdlYJcIixcblx0XCJrb3BmXCI6IFwi8J2VnFwiLFxuXHRcIktzY3JcIjogXCLwnZKmXCIsXG5cdFwia3NjclwiOiBcIvCdk4BcIixcblx0XCJsQWFyclwiOiBcIuKHmlwiLFxuXHRcIkxhY3V0ZVwiOiBcIsS5XCIsXG5cdFwibGFjdXRlXCI6IFwixLpcIixcblx0XCJsYWVtcHR5dlwiOiBcIuKmtFwiLFxuXHRcImxhZ3JhblwiOiBcIuKEklwiLFxuXHRcIkxhbWJkYVwiOiBcIs6bXCIsXG5cdFwibGFtYmRhXCI6IFwizrtcIixcblx0XCJsYW5nXCI6IFwi4p+oXCIsXG5cdFwiTGFuZ1wiOiBcIuKfqlwiLFxuXHRcImxhbmdkXCI6IFwi4qaRXCIsXG5cdFwibGFuZ2xlXCI6IFwi4p+oXCIsXG5cdFwibGFwXCI6IFwi4qqFXCIsXG5cdFwiTGFwbGFjZXRyZlwiOiBcIuKEklwiLFxuXHRcImxhcXVvXCI6IFwiwqtcIixcblx0XCJsYXJyYlwiOiBcIuKHpFwiLFxuXHRcImxhcnJiZnNcIjogXCLipJ9cIixcblx0XCJsYXJyXCI6IFwi4oaQXCIsXG5cdFwiTGFyclwiOiBcIuKGnlwiLFxuXHRcImxBcnJcIjogXCLih5BcIixcblx0XCJsYXJyZnNcIjogXCLipJ1cIixcblx0XCJsYXJyaGtcIjogXCLihqlcIixcblx0XCJsYXJybHBcIjogXCLihqtcIixcblx0XCJsYXJycGxcIjogXCLipLlcIixcblx0XCJsYXJyc2ltXCI6IFwi4qWzXCIsXG5cdFwibGFycnRsXCI6IFwi4oaiXCIsXG5cdFwibGF0YWlsXCI6IFwi4qSZXCIsXG5cdFwibEF0YWlsXCI6IFwi4qSbXCIsXG5cdFwibGF0XCI6IFwi4qqrXCIsXG5cdFwibGF0ZVwiOiBcIuKqrVwiLFxuXHRcImxhdGVzXCI6IFwi4qqt77iAXCIsXG5cdFwibGJhcnJcIjogXCLipIxcIixcblx0XCJsQmFyclwiOiBcIuKkjlwiLFxuXHRcImxiYnJrXCI6IFwi4p2yXCIsXG5cdFwibGJyYWNlXCI6IFwie1wiLFxuXHRcImxicmFja1wiOiBcIltcIixcblx0XCJsYnJrZVwiOiBcIuKmi1wiLFxuXHRcImxicmtzbGRcIjogXCLipo9cIixcblx0XCJsYnJrc2x1XCI6IFwi4qaNXCIsXG5cdFwiTGNhcm9uXCI6IFwixL1cIixcblx0XCJsY2Fyb25cIjogXCLEvlwiLFxuXHRcIkxjZWRpbFwiOiBcIsS7XCIsXG5cdFwibGNlZGlsXCI6IFwixLxcIixcblx0XCJsY2VpbFwiOiBcIuKMiFwiLFxuXHRcImxjdWJcIjogXCJ7XCIsXG5cdFwiTGN5XCI6IFwi0JtcIixcblx0XCJsY3lcIjogXCLQu1wiLFxuXHRcImxkY2FcIjogXCLipLZcIixcblx0XCJsZHF1b1wiOiBcIuKAnFwiLFxuXHRcImxkcXVvclwiOiBcIuKAnlwiLFxuXHRcImxkcmRoYXJcIjogXCLipadcIixcblx0XCJsZHJ1c2hhclwiOiBcIuKli1wiLFxuXHRcImxkc2hcIjogXCLihrJcIixcblx0XCJsZVwiOiBcIuKJpFwiLFxuXHRcImxFXCI6IFwi4ommXCIsXG5cdFwiTGVmdEFuZ2xlQnJhY2tldFwiOiBcIuKfqFwiLFxuXHRcIkxlZnRBcnJvd0JhclwiOiBcIuKHpFwiLFxuXHRcImxlZnRhcnJvd1wiOiBcIuKGkFwiLFxuXHRcIkxlZnRBcnJvd1wiOiBcIuKGkFwiLFxuXHRcIkxlZnRhcnJvd1wiOiBcIuKHkFwiLFxuXHRcIkxlZnRBcnJvd1JpZ2h0QXJyb3dcIjogXCLih4ZcIixcblx0XCJsZWZ0YXJyb3d0YWlsXCI6IFwi4oaiXCIsXG5cdFwiTGVmdENlaWxpbmdcIjogXCLijIhcIixcblx0XCJMZWZ0RG91YmxlQnJhY2tldFwiOiBcIuKfplwiLFxuXHRcIkxlZnREb3duVGVlVmVjdG9yXCI6IFwi4qWhXCIsXG5cdFwiTGVmdERvd25WZWN0b3JCYXJcIjogXCLipZlcIixcblx0XCJMZWZ0RG93blZlY3RvclwiOiBcIuKHg1wiLFxuXHRcIkxlZnRGbG9vclwiOiBcIuKMilwiLFxuXHRcImxlZnRoYXJwb29uZG93blwiOiBcIuKGvVwiLFxuXHRcImxlZnRoYXJwb29udXBcIjogXCLihrxcIixcblx0XCJsZWZ0bGVmdGFycm93c1wiOiBcIuKHh1wiLFxuXHRcImxlZnRyaWdodGFycm93XCI6IFwi4oaUXCIsXG5cdFwiTGVmdFJpZ2h0QXJyb3dcIjogXCLihpRcIixcblx0XCJMZWZ0cmlnaHRhcnJvd1wiOiBcIuKHlFwiLFxuXHRcImxlZnRyaWdodGFycm93c1wiOiBcIuKHhlwiLFxuXHRcImxlZnRyaWdodGhhcnBvb25zXCI6IFwi4oeLXCIsXG5cdFwibGVmdHJpZ2h0c3F1aWdhcnJvd1wiOiBcIuKGrVwiLFxuXHRcIkxlZnRSaWdodFZlY3RvclwiOiBcIuKljlwiLFxuXHRcIkxlZnRUZWVBcnJvd1wiOiBcIuKGpFwiLFxuXHRcIkxlZnRUZWVcIjogXCLiiqNcIixcblx0XCJMZWZ0VGVlVmVjdG9yXCI6IFwi4qWaXCIsXG5cdFwibGVmdHRocmVldGltZXNcIjogXCLii4tcIixcblx0XCJMZWZ0VHJpYW5nbGVCYXJcIjogXCLip49cIixcblx0XCJMZWZ0VHJpYW5nbGVcIjogXCLiirJcIixcblx0XCJMZWZ0VHJpYW5nbGVFcXVhbFwiOiBcIuKKtFwiLFxuXHRcIkxlZnRVcERvd25WZWN0b3JcIjogXCLipZFcIixcblx0XCJMZWZ0VXBUZWVWZWN0b3JcIjogXCLipaBcIixcblx0XCJMZWZ0VXBWZWN0b3JCYXJcIjogXCLipZhcIixcblx0XCJMZWZ0VXBWZWN0b3JcIjogXCLihr9cIixcblx0XCJMZWZ0VmVjdG9yQmFyXCI6IFwi4qWSXCIsXG5cdFwiTGVmdFZlY3RvclwiOiBcIuKGvFwiLFxuXHRcImxFZ1wiOiBcIuKqi1wiLFxuXHRcImxlZ1wiOiBcIuKLmlwiLFxuXHRcImxlcVwiOiBcIuKJpFwiLFxuXHRcImxlcXFcIjogXCLiiaZcIixcblx0XCJsZXFzbGFudFwiOiBcIuKpvVwiLFxuXHRcImxlc2NjXCI6IFwi4qqoXCIsXG5cdFwibGVzXCI6IFwi4qm9XCIsXG5cdFwibGVzZG90XCI6IFwi4qm/XCIsXG5cdFwibGVzZG90b1wiOiBcIuKqgVwiLFxuXHRcImxlc2RvdG9yXCI6IFwi4qqDXCIsXG5cdFwibGVzZ1wiOiBcIuKLmu+4gFwiLFxuXHRcImxlc2dlc1wiOiBcIuKqk1wiLFxuXHRcImxlc3NhcHByb3hcIjogXCLiqoVcIixcblx0XCJsZXNzZG90XCI6IFwi4ouWXCIsXG5cdFwibGVzc2VxZ3RyXCI6IFwi4ouaXCIsXG5cdFwibGVzc2VxcWd0clwiOiBcIuKqi1wiLFxuXHRcIkxlc3NFcXVhbEdyZWF0ZXJcIjogXCLii5pcIixcblx0XCJMZXNzRnVsbEVxdWFsXCI6IFwi4ommXCIsXG5cdFwiTGVzc0dyZWF0ZXJcIjogXCLiibZcIixcblx0XCJsZXNzZ3RyXCI6IFwi4om2XCIsXG5cdFwiTGVzc0xlc3NcIjogXCLiqqFcIixcblx0XCJsZXNzc2ltXCI6IFwi4omyXCIsXG5cdFwiTGVzc1NsYW50RXF1YWxcIjogXCLiqb1cIixcblx0XCJMZXNzVGlsZGVcIjogXCLiibJcIixcblx0XCJsZmlzaHRcIjogXCLipbxcIixcblx0XCJsZmxvb3JcIjogXCLijIpcIixcblx0XCJMZnJcIjogXCLwnZSPXCIsXG5cdFwibGZyXCI6IFwi8J2UqVwiLFxuXHRcImxnXCI6IFwi4om2XCIsXG5cdFwibGdFXCI6IFwi4qqRXCIsXG5cdFwibEhhclwiOiBcIuKlolwiLFxuXHRcImxoYXJkXCI6IFwi4oa9XCIsXG5cdFwibGhhcnVcIjogXCLihrxcIixcblx0XCJsaGFydWxcIjogXCLipapcIixcblx0XCJsaGJsa1wiOiBcIuKWhFwiLFxuXHRcIkxKY3lcIjogXCLQiVwiLFxuXHRcImxqY3lcIjogXCLRmVwiLFxuXHRcImxsYXJyXCI6IFwi4oeHXCIsXG5cdFwibGxcIjogXCLiiapcIixcblx0XCJMbFwiOiBcIuKLmFwiLFxuXHRcImxsY29ybmVyXCI6IFwi4oyeXCIsXG5cdFwiTGxlZnRhcnJvd1wiOiBcIuKHmlwiLFxuXHRcImxsaGFyZFwiOiBcIuKlq1wiLFxuXHRcImxsdHJpXCI6IFwi4pe6XCIsXG5cdFwiTG1pZG90XCI6IFwixL9cIixcblx0XCJsbWlkb3RcIjogXCLFgFwiLFxuXHRcImxtb3VzdGFjaGVcIjogXCLijrBcIixcblx0XCJsbW91c3RcIjogXCLijrBcIixcblx0XCJsbmFwXCI6IFwi4qqJXCIsXG5cdFwibG5hcHByb3hcIjogXCLiqolcIixcblx0XCJsbmVcIjogXCLiqodcIixcblx0XCJsbkVcIjogXCLiiahcIixcblx0XCJsbmVxXCI6IFwi4qqHXCIsXG5cdFwibG5lcXFcIjogXCLiiahcIixcblx0XCJsbnNpbVwiOiBcIuKLplwiLFxuXHRcImxvYW5nXCI6IFwi4p+sXCIsXG5cdFwibG9hcnJcIjogXCLih71cIixcblx0XCJsb2Jya1wiOiBcIuKfplwiLFxuXHRcImxvbmdsZWZ0YXJyb3dcIjogXCLin7VcIixcblx0XCJMb25nTGVmdEFycm93XCI6IFwi4p+1XCIsXG5cdFwiTG9uZ2xlZnRhcnJvd1wiOiBcIuKfuFwiLFxuXHRcImxvbmdsZWZ0cmlnaHRhcnJvd1wiOiBcIuKft1wiLFxuXHRcIkxvbmdMZWZ0UmlnaHRBcnJvd1wiOiBcIuKft1wiLFxuXHRcIkxvbmdsZWZ0cmlnaHRhcnJvd1wiOiBcIuKfulwiLFxuXHRcImxvbmdtYXBzdG9cIjogXCLin7xcIixcblx0XCJsb25ncmlnaHRhcnJvd1wiOiBcIuKftlwiLFxuXHRcIkxvbmdSaWdodEFycm93XCI6IFwi4p+2XCIsXG5cdFwiTG9uZ3JpZ2h0YXJyb3dcIjogXCLin7lcIixcblx0XCJsb29wYXJyb3dsZWZ0XCI6IFwi4oarXCIsXG5cdFwibG9vcGFycm93cmlnaHRcIjogXCLihqxcIixcblx0XCJsb3BhclwiOiBcIuKmhVwiLFxuXHRcIkxvcGZcIjogXCLwnZWDXCIsXG5cdFwibG9wZlwiOiBcIvCdlZ1cIixcblx0XCJsb3BsdXNcIjogXCLiqK1cIixcblx0XCJsb3RpbWVzXCI6IFwi4qi0XCIsXG5cdFwibG93YXN0XCI6IFwi4oiXXCIsXG5cdFwibG93YmFyXCI6IFwiX1wiLFxuXHRcIkxvd2VyTGVmdEFycm93XCI6IFwi4oaZXCIsXG5cdFwiTG93ZXJSaWdodEFycm93XCI6IFwi4oaYXCIsXG5cdFwibG96XCI6IFwi4peKXCIsXG5cdFwibG96ZW5nZVwiOiBcIuKXilwiLFxuXHRcImxvemZcIjogXCLip6tcIixcblx0XCJscGFyXCI6IFwiKFwiLFxuXHRcImxwYXJsdFwiOiBcIuKmk1wiLFxuXHRcImxyYXJyXCI6IFwi4oeGXCIsXG5cdFwibHJjb3JuZXJcIjogXCLijJ9cIixcblx0XCJscmhhclwiOiBcIuKHi1wiLFxuXHRcImxyaGFyZFwiOiBcIuKlrVwiLFxuXHRcImxybVwiOiBcIuKAjlwiLFxuXHRcImxydHJpXCI6IFwi4oq/XCIsXG5cdFwibHNhcXVvXCI6IFwi4oC5XCIsXG5cdFwibHNjclwiOiBcIvCdk4FcIixcblx0XCJMc2NyXCI6IFwi4oSSXCIsXG5cdFwibHNoXCI6IFwi4oawXCIsXG5cdFwiTHNoXCI6IFwi4oawXCIsXG5cdFwibHNpbVwiOiBcIuKJslwiLFxuXHRcImxzaW1lXCI6IFwi4qqNXCIsXG5cdFwibHNpbWdcIjogXCLiqo9cIixcblx0XCJsc3FiXCI6IFwiW1wiLFxuXHRcImxzcXVvXCI6IFwi4oCYXCIsXG5cdFwibHNxdW9yXCI6IFwi4oCaXCIsXG5cdFwiTHN0cm9rXCI6IFwixYFcIixcblx0XCJsc3Ryb2tcIjogXCLFglwiLFxuXHRcImx0Y2NcIjogXCLiqqZcIixcblx0XCJsdGNpclwiOiBcIuKpuVwiLFxuXHRcImx0XCI6IFwiPFwiLFxuXHRcIkxUXCI6IFwiPFwiLFxuXHRcIkx0XCI6IFwi4omqXCIsXG5cdFwibHRkb3RcIjogXCLii5ZcIixcblx0XCJsdGhyZWVcIjogXCLii4tcIixcblx0XCJsdGltZXNcIjogXCLii4lcIixcblx0XCJsdGxhcnJcIjogXCLipbZcIixcblx0XCJsdHF1ZXN0XCI6IFwi4qm7XCIsXG5cdFwibHRyaVwiOiBcIuKXg1wiLFxuXHRcImx0cmllXCI6IFwi4oq0XCIsXG5cdFwibHRyaWZcIjogXCLil4JcIixcblx0XCJsdHJQYXJcIjogXCLippZcIixcblx0XCJsdXJkc2hhclwiOiBcIuKlilwiLFxuXHRcImx1cnVoYXJcIjogXCLipaZcIixcblx0XCJsdmVydG5lcXFcIjogXCLiiajvuIBcIixcblx0XCJsdm5FXCI6IFwi4omo77iAXCIsXG5cdFwibWFjclwiOiBcIsKvXCIsXG5cdFwibWFsZVwiOiBcIuKZglwiLFxuXHRcIm1hbHRcIjogXCLinKBcIixcblx0XCJtYWx0ZXNlXCI6IFwi4pygXCIsXG5cdFwiTWFwXCI6IFwi4qSFXCIsXG5cdFwibWFwXCI6IFwi4oamXCIsXG5cdFwibWFwc3RvXCI6IFwi4oamXCIsXG5cdFwibWFwc3RvZG93blwiOiBcIuKGp1wiLFxuXHRcIm1hcHN0b2xlZnRcIjogXCLihqRcIixcblx0XCJtYXBzdG91cFwiOiBcIuKGpVwiLFxuXHRcIm1hcmtlclwiOiBcIuKWrlwiLFxuXHRcIm1jb21tYVwiOiBcIuKoqVwiLFxuXHRcIk1jeVwiOiBcItCcXCIsXG5cdFwibWN5XCI6IFwi0LxcIixcblx0XCJtZGFzaFwiOiBcIuKAlFwiLFxuXHRcIm1ERG90XCI6IFwi4oi6XCIsXG5cdFwibWVhc3VyZWRhbmdsZVwiOiBcIuKIoVwiLFxuXHRcIk1lZGl1bVNwYWNlXCI6IFwi4oGfXCIsXG5cdFwiTWVsbGludHJmXCI6IFwi4oSzXCIsXG5cdFwiTWZyXCI6IFwi8J2UkFwiLFxuXHRcIm1mclwiOiBcIvCdlKpcIixcblx0XCJtaG9cIjogXCLihKdcIixcblx0XCJtaWNyb1wiOiBcIsK1XCIsXG5cdFwibWlkYXN0XCI6IFwiKlwiLFxuXHRcIm1pZGNpclwiOiBcIuKrsFwiLFxuXHRcIm1pZFwiOiBcIuKIo1wiLFxuXHRcIm1pZGRvdFwiOiBcIsK3XCIsXG5cdFwibWludXNiXCI6IFwi4oqfXCIsXG5cdFwibWludXNcIjogXCLiiJJcIixcblx0XCJtaW51c2RcIjogXCLiiLhcIixcblx0XCJtaW51c2R1XCI6IFwi4qiqXCIsXG5cdFwiTWludXNQbHVzXCI6IFwi4oiTXCIsXG5cdFwibWxjcFwiOiBcIuKrm1wiLFxuXHRcIm1sZHJcIjogXCLigKZcIixcblx0XCJtbnBsdXNcIjogXCLiiJNcIixcblx0XCJtb2RlbHNcIjogXCLiiqdcIixcblx0XCJNb3BmXCI6IFwi8J2VhFwiLFxuXHRcIm1vcGZcIjogXCLwnZWeXCIsXG5cdFwibXBcIjogXCLiiJNcIixcblx0XCJtc2NyXCI6IFwi8J2TglwiLFxuXHRcIk1zY3JcIjogXCLihLNcIixcblx0XCJtc3Rwb3NcIjogXCLiiL5cIixcblx0XCJNdVwiOiBcIs6cXCIsXG5cdFwibXVcIjogXCLOvFwiLFxuXHRcIm11bHRpbWFwXCI6IFwi4oq4XCIsXG5cdFwibXVtYXBcIjogXCLiirhcIixcblx0XCJuYWJsYVwiOiBcIuKIh1wiLFxuXHRcIk5hY3V0ZVwiOiBcIsWDXCIsXG5cdFwibmFjdXRlXCI6IFwixYRcIixcblx0XCJuYW5nXCI6IFwi4oig4oOSXCIsXG5cdFwibmFwXCI6IFwi4omJXCIsXG5cdFwibmFwRVwiOiBcIuKpsMy4XCIsXG5cdFwibmFwaWRcIjogXCLiiYvMuFwiLFxuXHRcIm5hcG9zXCI6IFwixYlcIixcblx0XCJuYXBwcm94XCI6IFwi4omJXCIsXG5cdFwibmF0dXJhbFwiOiBcIuKZrlwiLFxuXHRcIm5hdHVyYWxzXCI6IFwi4oSVXCIsXG5cdFwibmF0dXJcIjogXCLima5cIixcblx0XCJuYnNwXCI6IFwiwqBcIixcblx0XCJuYnVtcFwiOiBcIuKJjsy4XCIsXG5cdFwibmJ1bXBlXCI6IFwi4omPzLhcIixcblx0XCJuY2FwXCI6IFwi4qmDXCIsXG5cdFwiTmNhcm9uXCI6IFwixYdcIixcblx0XCJuY2Fyb25cIjogXCLFiFwiLFxuXHRcIk5jZWRpbFwiOiBcIsWFXCIsXG5cdFwibmNlZGlsXCI6IFwixYZcIixcblx0XCJuY29uZ1wiOiBcIuKJh1wiLFxuXHRcIm5jb25nZG90XCI6IFwi4qmtzLhcIixcblx0XCJuY3VwXCI6IFwi4qmCXCIsXG5cdFwiTmN5XCI6IFwi0J1cIixcblx0XCJuY3lcIjogXCLQvVwiLFxuXHRcIm5kYXNoXCI6IFwi4oCTXCIsXG5cdFwibmVhcmhrXCI6IFwi4qSkXCIsXG5cdFwibmVhcnJcIjogXCLihpdcIixcblx0XCJuZUFyclwiOiBcIuKHl1wiLFxuXHRcIm5lYXJyb3dcIjogXCLihpdcIixcblx0XCJuZVwiOiBcIuKJoFwiLFxuXHRcIm5lZG90XCI6IFwi4omQzLhcIixcblx0XCJOZWdhdGl2ZU1lZGl1bVNwYWNlXCI6IFwi4oCLXCIsXG5cdFwiTmVnYXRpdmVUaGlja1NwYWNlXCI6IFwi4oCLXCIsXG5cdFwiTmVnYXRpdmVUaGluU3BhY2VcIjogXCLigItcIixcblx0XCJOZWdhdGl2ZVZlcnlUaGluU3BhY2VcIjogXCLigItcIixcblx0XCJuZXF1aXZcIjogXCLiiaJcIixcblx0XCJuZXNlYXJcIjogXCLipKhcIixcblx0XCJuZXNpbVwiOiBcIuKJgsy4XCIsXG5cdFwiTmVzdGVkR3JlYXRlckdyZWF0ZXJcIjogXCLiiatcIixcblx0XCJOZXN0ZWRMZXNzTGVzc1wiOiBcIuKJqlwiLFxuXHRcIk5ld0xpbmVcIjogXCJcXG5cIixcblx0XCJuZXhpc3RcIjogXCLiiIRcIixcblx0XCJuZXhpc3RzXCI6IFwi4oiEXCIsXG5cdFwiTmZyXCI6IFwi8J2UkVwiLFxuXHRcIm5mclwiOiBcIvCdlKtcIixcblx0XCJuZ0VcIjogXCLiiafMuFwiLFxuXHRcIm5nZVwiOiBcIuKJsVwiLFxuXHRcIm5nZXFcIjogXCLiibFcIixcblx0XCJuZ2VxcVwiOiBcIuKJp8y4XCIsXG5cdFwibmdlcXNsYW50XCI6IFwi4qm+zLhcIixcblx0XCJuZ2VzXCI6IFwi4qm+zLhcIixcblx0XCJuR2dcIjogXCLii5nMuFwiLFxuXHRcIm5nc2ltXCI6IFwi4om1XCIsXG5cdFwibkd0XCI6IFwi4omr4oOSXCIsXG5cdFwibmd0XCI6IFwi4omvXCIsXG5cdFwibmd0clwiOiBcIuKJr1wiLFxuXHRcIm5HdHZcIjogXCLiiavMuFwiLFxuXHRcIm5oYXJyXCI6IFwi4oauXCIsXG5cdFwibmhBcnJcIjogXCLih45cIixcblx0XCJuaHBhclwiOiBcIuKrslwiLFxuXHRcIm5pXCI6IFwi4oiLXCIsXG5cdFwibmlzXCI6IFwi4ou8XCIsXG5cdFwibmlzZFwiOiBcIuKLulwiLFxuXHRcIm5pdlwiOiBcIuKIi1wiLFxuXHRcIk5KY3lcIjogXCLQilwiLFxuXHRcIm5qY3lcIjogXCLRmlwiLFxuXHRcIm5sYXJyXCI6IFwi4oaaXCIsXG5cdFwibmxBcnJcIjogXCLih41cIixcblx0XCJubGRyXCI6IFwi4oClXCIsXG5cdFwibmxFXCI6IFwi4ommzLhcIixcblx0XCJubGVcIjogXCLiibBcIixcblx0XCJubGVmdGFycm93XCI6IFwi4oaaXCIsXG5cdFwibkxlZnRhcnJvd1wiOiBcIuKHjVwiLFxuXHRcIm5sZWZ0cmlnaHRhcnJvd1wiOiBcIuKGrlwiLFxuXHRcIm5MZWZ0cmlnaHRhcnJvd1wiOiBcIuKHjlwiLFxuXHRcIm5sZXFcIjogXCLiibBcIixcblx0XCJubGVxcVwiOiBcIuKJpsy4XCIsXG5cdFwibmxlcXNsYW50XCI6IFwi4qm9zLhcIixcblx0XCJubGVzXCI6IFwi4qm9zLhcIixcblx0XCJubGVzc1wiOiBcIuKJrlwiLFxuXHRcIm5MbFwiOiBcIuKLmMy4XCIsXG5cdFwibmxzaW1cIjogXCLiibRcIixcblx0XCJuTHRcIjogXCLiiarig5JcIixcblx0XCJubHRcIjogXCLiia5cIixcblx0XCJubHRyaVwiOiBcIuKLqlwiLFxuXHRcIm5sdHJpZVwiOiBcIuKLrFwiLFxuXHRcIm5MdHZcIjogXCLiiarMuFwiLFxuXHRcIm5taWRcIjogXCLiiKRcIixcblx0XCJOb0JyZWFrXCI6IFwi4oGgXCIsXG5cdFwiTm9uQnJlYWtpbmdTcGFjZVwiOiBcIsKgXCIsXG5cdFwibm9wZlwiOiBcIvCdlZ9cIixcblx0XCJOb3BmXCI6IFwi4oSVXCIsXG5cdFwiTm90XCI6IFwi4qusXCIsXG5cdFwibm90XCI6IFwiwqxcIixcblx0XCJOb3RDb25ncnVlbnRcIjogXCLiiaJcIixcblx0XCJOb3RDdXBDYXBcIjogXCLiia1cIixcblx0XCJOb3REb3VibGVWZXJ0aWNhbEJhclwiOiBcIuKIplwiLFxuXHRcIk5vdEVsZW1lbnRcIjogXCLiiIlcIixcblx0XCJOb3RFcXVhbFwiOiBcIuKJoFwiLFxuXHRcIk5vdEVxdWFsVGlsZGVcIjogXCLiiYLMuFwiLFxuXHRcIk5vdEV4aXN0c1wiOiBcIuKIhFwiLFxuXHRcIk5vdEdyZWF0ZXJcIjogXCLiia9cIixcblx0XCJOb3RHcmVhdGVyRXF1YWxcIjogXCLiibFcIixcblx0XCJOb3RHcmVhdGVyRnVsbEVxdWFsXCI6IFwi4omnzLhcIixcblx0XCJOb3RHcmVhdGVyR3JlYXRlclwiOiBcIuKJq8y4XCIsXG5cdFwiTm90R3JlYXRlckxlc3NcIjogXCLiiblcIixcblx0XCJOb3RHcmVhdGVyU2xhbnRFcXVhbFwiOiBcIuKpvsy4XCIsXG5cdFwiTm90R3JlYXRlclRpbGRlXCI6IFwi4om1XCIsXG5cdFwiTm90SHVtcERvd25IdW1wXCI6IFwi4omOzLhcIixcblx0XCJOb3RIdW1wRXF1YWxcIjogXCLiiY/MuFwiLFxuXHRcIm5vdGluXCI6IFwi4oiJXCIsXG5cdFwibm90aW5kb3RcIjogXCLii7XMuFwiLFxuXHRcIm5vdGluRVwiOiBcIuKLucy4XCIsXG5cdFwibm90aW52YVwiOiBcIuKIiVwiLFxuXHRcIm5vdGludmJcIjogXCLii7dcIixcblx0XCJub3RpbnZjXCI6IFwi4ou2XCIsXG5cdFwiTm90TGVmdFRyaWFuZ2xlQmFyXCI6IFwi4qePzLhcIixcblx0XCJOb3RMZWZ0VHJpYW5nbGVcIjogXCLii6pcIixcblx0XCJOb3RMZWZ0VHJpYW5nbGVFcXVhbFwiOiBcIuKLrFwiLFxuXHRcIk5vdExlc3NcIjogXCLiia5cIixcblx0XCJOb3RMZXNzRXF1YWxcIjogXCLiibBcIixcblx0XCJOb3RMZXNzR3JlYXRlclwiOiBcIuKJuFwiLFxuXHRcIk5vdExlc3NMZXNzXCI6IFwi4omqzLhcIixcblx0XCJOb3RMZXNzU2xhbnRFcXVhbFwiOiBcIuKpvcy4XCIsXG5cdFwiTm90TGVzc1RpbGRlXCI6IFwi4om0XCIsXG5cdFwiTm90TmVzdGVkR3JlYXRlckdyZWF0ZXJcIjogXCLiqqLMuFwiLFxuXHRcIk5vdE5lc3RlZExlc3NMZXNzXCI6IFwi4qqhzLhcIixcblx0XCJub3RuaVwiOiBcIuKIjFwiLFxuXHRcIm5vdG5pdmFcIjogXCLiiIxcIixcblx0XCJub3RuaXZiXCI6IFwi4ou+XCIsXG5cdFwibm90bml2Y1wiOiBcIuKLvVwiLFxuXHRcIk5vdFByZWNlZGVzXCI6IFwi4oqAXCIsXG5cdFwiTm90UHJlY2VkZXNFcXVhbFwiOiBcIuKqr8y4XCIsXG5cdFwiTm90UHJlY2VkZXNTbGFudEVxdWFsXCI6IFwi4ougXCIsXG5cdFwiTm90UmV2ZXJzZUVsZW1lbnRcIjogXCLiiIxcIixcblx0XCJOb3RSaWdodFRyaWFuZ2xlQmFyXCI6IFwi4qeQzLhcIixcblx0XCJOb3RSaWdodFRyaWFuZ2xlXCI6IFwi4ourXCIsXG5cdFwiTm90UmlnaHRUcmlhbmdsZUVxdWFsXCI6IFwi4outXCIsXG5cdFwiTm90U3F1YXJlU3Vic2V0XCI6IFwi4oqPzLhcIixcblx0XCJOb3RTcXVhcmVTdWJzZXRFcXVhbFwiOiBcIuKLolwiLFxuXHRcIk5vdFNxdWFyZVN1cGVyc2V0XCI6IFwi4oqQzLhcIixcblx0XCJOb3RTcXVhcmVTdXBlcnNldEVxdWFsXCI6IFwi4oujXCIsXG5cdFwiTm90U3Vic2V0XCI6IFwi4oqC4oOSXCIsXG5cdFwiTm90U3Vic2V0RXF1YWxcIjogXCLiiohcIixcblx0XCJOb3RTdWNjZWVkc1wiOiBcIuKKgVwiLFxuXHRcIk5vdFN1Y2NlZWRzRXF1YWxcIjogXCLiqrDMuFwiLFxuXHRcIk5vdFN1Y2NlZWRzU2xhbnRFcXVhbFwiOiBcIuKLoVwiLFxuXHRcIk5vdFN1Y2NlZWRzVGlsZGVcIjogXCLiib/MuFwiLFxuXHRcIk5vdFN1cGVyc2V0XCI6IFwi4oqD4oOSXCIsXG5cdFwiTm90U3VwZXJzZXRFcXVhbFwiOiBcIuKKiVwiLFxuXHRcIk5vdFRpbGRlXCI6IFwi4omBXCIsXG5cdFwiTm90VGlsZGVFcXVhbFwiOiBcIuKJhFwiLFxuXHRcIk5vdFRpbGRlRnVsbEVxdWFsXCI6IFwi4omHXCIsXG5cdFwiTm90VGlsZGVUaWxkZVwiOiBcIuKJiVwiLFxuXHRcIk5vdFZlcnRpY2FsQmFyXCI6IFwi4oikXCIsXG5cdFwibnBhcmFsbGVsXCI6IFwi4oimXCIsXG5cdFwibnBhclwiOiBcIuKIplwiLFxuXHRcIm5wYXJzbFwiOiBcIuKrveKDpVwiLFxuXHRcIm5wYXJ0XCI6IFwi4oiCzLhcIixcblx0XCJucG9saW50XCI6IFwi4qiUXCIsXG5cdFwibnByXCI6IFwi4oqAXCIsXG5cdFwibnByY3VlXCI6IFwi4ougXCIsXG5cdFwibnByZWNcIjogXCLiioBcIixcblx0XCJucHJlY2VxXCI6IFwi4qqvzLhcIixcblx0XCJucHJlXCI6IFwi4qqvzLhcIixcblx0XCJucmFycmNcIjogXCLipLPMuFwiLFxuXHRcIm5yYXJyXCI6IFwi4oabXCIsXG5cdFwibnJBcnJcIjogXCLih49cIixcblx0XCJucmFycndcIjogXCLihp3MuFwiLFxuXHRcIm5yaWdodGFycm93XCI6IFwi4oabXCIsXG5cdFwiblJpZ2h0YXJyb3dcIjogXCLih49cIixcblx0XCJucnRyaVwiOiBcIuKLq1wiLFxuXHRcIm5ydHJpZVwiOiBcIuKLrVwiLFxuXHRcIm5zY1wiOiBcIuKKgVwiLFxuXHRcIm5zY2N1ZVwiOiBcIuKLoVwiLFxuXHRcIm5zY2VcIjogXCLiqrDMuFwiLFxuXHRcIk5zY3JcIjogXCLwnZKpXCIsXG5cdFwibnNjclwiOiBcIvCdk4NcIixcblx0XCJuc2hvcnRtaWRcIjogXCLiiKRcIixcblx0XCJuc2hvcnRwYXJhbGxlbFwiOiBcIuKIplwiLFxuXHRcIm5zaW1cIjogXCLiiYFcIixcblx0XCJuc2ltZVwiOiBcIuKJhFwiLFxuXHRcIm5zaW1lcVwiOiBcIuKJhFwiLFxuXHRcIm5zbWlkXCI6IFwi4oikXCIsXG5cdFwibnNwYXJcIjogXCLiiKZcIixcblx0XCJuc3FzdWJlXCI6IFwi4ouiXCIsXG5cdFwibnNxc3VwZVwiOiBcIuKLo1wiLFxuXHRcIm5zdWJcIjogXCLiioRcIixcblx0XCJuc3ViRVwiOiBcIuKrhcy4XCIsXG5cdFwibnN1YmVcIjogXCLiiohcIixcblx0XCJuc3Vic2V0XCI6IFwi4oqC4oOSXCIsXG5cdFwibnN1YnNldGVxXCI6IFwi4oqIXCIsXG5cdFwibnN1YnNldGVxcVwiOiBcIuKrhcy4XCIsXG5cdFwibnN1Y2NcIjogXCLiioFcIixcblx0XCJuc3VjY2VxXCI6IFwi4qqwzLhcIixcblx0XCJuc3VwXCI6IFwi4oqFXCIsXG5cdFwibnN1cEVcIjogXCLiq4bMuFwiLFxuXHRcIm5zdXBlXCI6IFwi4oqJXCIsXG5cdFwibnN1cHNldFwiOiBcIuKKg+KDklwiLFxuXHRcIm5zdXBzZXRlcVwiOiBcIuKKiVwiLFxuXHRcIm5zdXBzZXRlcXFcIjogXCLiq4bMuFwiLFxuXHRcIm50Z2xcIjogXCLiiblcIixcblx0XCJOdGlsZGVcIjogXCLDkVwiLFxuXHRcIm50aWxkZVwiOiBcIsOxXCIsXG5cdFwibnRsZ1wiOiBcIuKJuFwiLFxuXHRcIm50cmlhbmdsZWxlZnRcIjogXCLii6pcIixcblx0XCJudHJpYW5nbGVsZWZ0ZXFcIjogXCLii6xcIixcblx0XCJudHJpYW5nbGVyaWdodFwiOiBcIuKLq1wiLFxuXHRcIm50cmlhbmdsZXJpZ2h0ZXFcIjogXCLii61cIixcblx0XCJOdVwiOiBcIs6dXCIsXG5cdFwibnVcIjogXCLOvVwiLFxuXHRcIm51bVwiOiBcIiNcIixcblx0XCJudW1lcm9cIjogXCLihJZcIixcblx0XCJudW1zcFwiOiBcIuKAh1wiLFxuXHRcIm52YXBcIjogXCLiiY3ig5JcIixcblx0XCJudmRhc2hcIjogXCLiiqxcIixcblx0XCJudkRhc2hcIjogXCLiiq1cIixcblx0XCJuVmRhc2hcIjogXCLiiq5cIixcblx0XCJuVkRhc2hcIjogXCLiiq9cIixcblx0XCJudmdlXCI6IFwi4oml4oOSXCIsXG5cdFwibnZndFwiOiBcIj7ig5JcIixcblx0XCJudkhhcnJcIjogXCLipIRcIixcblx0XCJudmluZmluXCI6IFwi4qeeXCIsXG5cdFwibnZsQXJyXCI6IFwi4qSCXCIsXG5cdFwibnZsZVwiOiBcIuKJpOKDklwiLFxuXHRcIm52bHRcIjogXCI84oOSXCIsXG5cdFwibnZsdHJpZVwiOiBcIuKKtOKDklwiLFxuXHRcIm52ckFyclwiOiBcIuKkg1wiLFxuXHRcIm52cnRyaWVcIjogXCLiirXig5JcIixcblx0XCJudnNpbVwiOiBcIuKIvOKDklwiLFxuXHRcIm53YXJoa1wiOiBcIuKko1wiLFxuXHRcIm53YXJyXCI6IFwi4oaWXCIsXG5cdFwibndBcnJcIjogXCLih5ZcIixcblx0XCJud2Fycm93XCI6IFwi4oaWXCIsXG5cdFwibnduZWFyXCI6IFwi4qSnXCIsXG5cdFwiT2FjdXRlXCI6IFwiw5NcIixcblx0XCJvYWN1dGVcIjogXCLDs1wiLFxuXHRcIm9hc3RcIjogXCLiiptcIixcblx0XCJPY2lyY1wiOiBcIsOUXCIsXG5cdFwib2NpcmNcIjogXCLDtFwiLFxuXHRcIm9jaXJcIjogXCLiippcIixcblx0XCJPY3lcIjogXCLQnlwiLFxuXHRcIm9jeVwiOiBcItC+XCIsXG5cdFwib2Rhc2hcIjogXCLiip1cIixcblx0XCJPZGJsYWNcIjogXCLFkFwiLFxuXHRcIm9kYmxhY1wiOiBcIsWRXCIsXG5cdFwib2RpdlwiOiBcIuKouFwiLFxuXHRcIm9kb3RcIjogXCLiiplcIixcblx0XCJvZHNvbGRcIjogXCLiprxcIixcblx0XCJPRWxpZ1wiOiBcIsWSXCIsXG5cdFwib2VsaWdcIjogXCLFk1wiLFxuXHRcIm9mY2lyXCI6IFwi4qa/XCIsXG5cdFwiT2ZyXCI6IFwi8J2UklwiLFxuXHRcIm9mclwiOiBcIvCdlKxcIixcblx0XCJvZ29uXCI6IFwiy5tcIixcblx0XCJPZ3JhdmVcIjogXCLDklwiLFxuXHRcIm9ncmF2ZVwiOiBcIsOyXCIsXG5cdFwib2d0XCI6IFwi4qeBXCIsXG5cdFwib2hiYXJcIjogXCLiprVcIixcblx0XCJvaG1cIjogXCLOqVwiLFxuXHRcIm9pbnRcIjogXCLiiK5cIixcblx0XCJvbGFyclwiOiBcIuKGulwiLFxuXHRcIm9sY2lyXCI6IFwi4qa+XCIsXG5cdFwib2xjcm9zc1wiOiBcIuKmu1wiLFxuXHRcIm9saW5lXCI6IFwi4oC+XCIsXG5cdFwib2x0XCI6IFwi4qeAXCIsXG5cdFwiT21hY3JcIjogXCLFjFwiLFxuXHRcIm9tYWNyXCI6IFwixY1cIixcblx0XCJPbWVnYVwiOiBcIs6pXCIsXG5cdFwib21lZ2FcIjogXCLPiVwiLFxuXHRcIk9taWNyb25cIjogXCLOn1wiLFxuXHRcIm9taWNyb25cIjogXCLOv1wiLFxuXHRcIm9taWRcIjogXCLiprZcIixcblx0XCJvbWludXNcIjogXCLiipZcIixcblx0XCJPb3BmXCI6IFwi8J2VhlwiLFxuXHRcIm9vcGZcIjogXCLwnZWgXCIsXG5cdFwib3BhclwiOiBcIuKmt1wiLFxuXHRcIk9wZW5DdXJseURvdWJsZVF1b3RlXCI6IFwi4oCcXCIsXG5cdFwiT3BlbkN1cmx5UXVvdGVcIjogXCLigJhcIixcblx0XCJvcGVycFwiOiBcIuKmuVwiLFxuXHRcIm9wbHVzXCI6IFwi4oqVXCIsXG5cdFwib3JhcnJcIjogXCLihrtcIixcblx0XCJPclwiOiBcIuKplFwiLFxuXHRcIm9yXCI6IFwi4oioXCIsXG5cdFwib3JkXCI6IFwi4qmdXCIsXG5cdFwib3JkZXJcIjogXCLihLRcIixcblx0XCJvcmRlcm9mXCI6IFwi4oS0XCIsXG5cdFwib3JkZlwiOiBcIsKqXCIsXG5cdFwib3JkbVwiOiBcIsK6XCIsXG5cdFwib3JpZ29mXCI6IFwi4oq2XCIsXG5cdFwib3JvclwiOiBcIuKpllwiLFxuXHRcIm9yc2xvcGVcIjogXCLiqZdcIixcblx0XCJvcnZcIjogXCLiqZtcIixcblx0XCJvU1wiOiBcIuKTiFwiLFxuXHRcIk9zY3JcIjogXCLwnZKqXCIsXG5cdFwib3NjclwiOiBcIuKEtFwiLFxuXHRcIk9zbGFzaFwiOiBcIsOYXCIsXG5cdFwib3NsYXNoXCI6IFwiw7hcIixcblx0XCJvc29sXCI6IFwi4oqYXCIsXG5cdFwiT3RpbGRlXCI6IFwiw5VcIixcblx0XCJvdGlsZGVcIjogXCLDtVwiLFxuXHRcIm90aW1lc2FzXCI6IFwi4qi2XCIsXG5cdFwiT3RpbWVzXCI6IFwi4qi3XCIsXG5cdFwib3RpbWVzXCI6IFwi4oqXXCIsXG5cdFwiT3VtbFwiOiBcIsOWXCIsXG5cdFwib3VtbFwiOiBcIsO2XCIsXG5cdFwib3ZiYXJcIjogXCLijL1cIixcblx0XCJPdmVyQmFyXCI6IFwi4oC+XCIsXG5cdFwiT3ZlckJyYWNlXCI6IFwi4o+eXCIsXG5cdFwiT3ZlckJyYWNrZXRcIjogXCLijrRcIixcblx0XCJPdmVyUGFyZW50aGVzaXNcIjogXCLij5xcIixcblx0XCJwYXJhXCI6IFwiwrZcIixcblx0XCJwYXJhbGxlbFwiOiBcIuKIpVwiLFxuXHRcInBhclwiOiBcIuKIpVwiLFxuXHRcInBhcnNpbVwiOiBcIuKrs1wiLFxuXHRcInBhcnNsXCI6IFwi4qu9XCIsXG5cdFwicGFydFwiOiBcIuKIglwiLFxuXHRcIlBhcnRpYWxEXCI6IFwi4oiCXCIsXG5cdFwiUGN5XCI6IFwi0J9cIixcblx0XCJwY3lcIjogXCLQv1wiLFxuXHRcInBlcmNudFwiOiBcIiVcIixcblx0XCJwZXJpb2RcIjogXCIuXCIsXG5cdFwicGVybWlsXCI6IFwi4oCwXCIsXG5cdFwicGVycFwiOiBcIuKKpVwiLFxuXHRcInBlcnRlbmtcIjogXCLigLFcIixcblx0XCJQZnJcIjogXCLwnZSTXCIsXG5cdFwicGZyXCI6IFwi8J2UrVwiLFxuXHRcIlBoaVwiOiBcIs6mXCIsXG5cdFwicGhpXCI6IFwiz4ZcIixcblx0XCJwaGl2XCI6IFwiz5VcIixcblx0XCJwaG1tYXRcIjogXCLihLNcIixcblx0XCJwaG9uZVwiOiBcIuKYjlwiLFxuXHRcIlBpXCI6IFwizqBcIixcblx0XCJwaVwiOiBcIs+AXCIsXG5cdFwicGl0Y2hmb3JrXCI6IFwi4ouUXCIsXG5cdFwicGl2XCI6IFwiz5ZcIixcblx0XCJwbGFuY2tcIjogXCLihI9cIixcblx0XCJwbGFuY2toXCI6IFwi4oSOXCIsXG5cdFwicGxhbmt2XCI6IFwi4oSPXCIsXG5cdFwicGx1c2FjaXJcIjogXCLiqKNcIixcblx0XCJwbHVzYlwiOiBcIuKKnlwiLFxuXHRcInBsdXNjaXJcIjogXCLiqKJcIixcblx0XCJwbHVzXCI6IFwiK1wiLFxuXHRcInBsdXNkb1wiOiBcIuKIlFwiLFxuXHRcInBsdXNkdVwiOiBcIuKopVwiLFxuXHRcInBsdXNlXCI6IFwi4qmyXCIsXG5cdFwiUGx1c01pbnVzXCI6IFwiwrFcIixcblx0XCJwbHVzbW5cIjogXCLCsVwiLFxuXHRcInBsdXNzaW1cIjogXCLiqKZcIixcblx0XCJwbHVzdHdvXCI6IFwi4qinXCIsXG5cdFwicG1cIjogXCLCsVwiLFxuXHRcIlBvaW5jYXJlcGxhbmVcIjogXCLihIxcIixcblx0XCJwb2ludGludFwiOiBcIuKolVwiLFxuXHRcInBvcGZcIjogXCLwnZWhXCIsXG5cdFwiUG9wZlwiOiBcIuKEmVwiLFxuXHRcInBvdW5kXCI6IFwiwqNcIixcblx0XCJwcmFwXCI6IFwi4qq3XCIsXG5cdFwiUHJcIjogXCLiqrtcIixcblx0XCJwclwiOiBcIuKJulwiLFxuXHRcInByY3VlXCI6IFwi4om8XCIsXG5cdFwicHJlY2FwcHJveFwiOiBcIuKqt1wiLFxuXHRcInByZWNcIjogXCLiibpcIixcblx0XCJwcmVjY3VybHllcVwiOiBcIuKJvFwiLFxuXHRcIlByZWNlZGVzXCI6IFwi4om6XCIsXG5cdFwiUHJlY2VkZXNFcXVhbFwiOiBcIuKqr1wiLFxuXHRcIlByZWNlZGVzU2xhbnRFcXVhbFwiOiBcIuKJvFwiLFxuXHRcIlByZWNlZGVzVGlsZGVcIjogXCLiib5cIixcblx0XCJwcmVjZXFcIjogXCLiqq9cIixcblx0XCJwcmVjbmFwcHJveFwiOiBcIuKquVwiLFxuXHRcInByZWNuZXFxXCI6IFwi4qq1XCIsXG5cdFwicHJlY25zaW1cIjogXCLii6hcIixcblx0XCJwcmVcIjogXCLiqq9cIixcblx0XCJwckVcIjogXCLiqrNcIixcblx0XCJwcmVjc2ltXCI6IFwi4om+XCIsXG5cdFwicHJpbWVcIjogXCLigLJcIixcblx0XCJQcmltZVwiOiBcIuKAs1wiLFxuXHRcInByaW1lc1wiOiBcIuKEmVwiLFxuXHRcInBybmFwXCI6IFwi4qq5XCIsXG5cdFwicHJuRVwiOiBcIuKqtVwiLFxuXHRcInBybnNpbVwiOiBcIuKLqFwiLFxuXHRcInByb2RcIjogXCLiiI9cIixcblx0XCJQcm9kdWN0XCI6IFwi4oiPXCIsXG5cdFwicHJvZmFsYXJcIjogXCLijK5cIixcblx0XCJwcm9mbGluZVwiOiBcIuKMklwiLFxuXHRcInByb2ZzdXJmXCI6IFwi4oyTXCIsXG5cdFwicHJvcFwiOiBcIuKInVwiLFxuXHRcIlByb3BvcnRpb25hbFwiOiBcIuKInVwiLFxuXHRcIlByb3BvcnRpb25cIjogXCLiiLdcIixcblx0XCJwcm9wdG9cIjogXCLiiJ1cIixcblx0XCJwcnNpbVwiOiBcIuKJvlwiLFxuXHRcInBydXJlbFwiOiBcIuKKsFwiLFxuXHRcIlBzY3JcIjogXCLwnZKrXCIsXG5cdFwicHNjclwiOiBcIvCdk4VcIixcblx0XCJQc2lcIjogXCLOqFwiLFxuXHRcInBzaVwiOiBcIs+IXCIsXG5cdFwicHVuY3NwXCI6IFwi4oCIXCIsXG5cdFwiUWZyXCI6IFwi8J2UlFwiLFxuXHRcInFmclwiOiBcIvCdlK5cIixcblx0XCJxaW50XCI6IFwi4qiMXCIsXG5cdFwicW9wZlwiOiBcIvCdlaJcIixcblx0XCJRb3BmXCI6IFwi4oSaXCIsXG5cdFwicXByaW1lXCI6IFwi4oGXXCIsXG5cdFwiUXNjclwiOiBcIvCdkqxcIixcblx0XCJxc2NyXCI6IFwi8J2ThlwiLFxuXHRcInF1YXRlcm5pb25zXCI6IFwi4oSNXCIsXG5cdFwicXVhdGludFwiOiBcIuKollwiLFxuXHRcInF1ZXN0XCI6IFwiP1wiLFxuXHRcInF1ZXN0ZXFcIjogXCLiiZ9cIixcblx0XCJxdW90XCI6IFwiXFxcIlwiLFxuXHRcIlFVT1RcIjogXCJcXFwiXCIsXG5cdFwickFhcnJcIjogXCLih5tcIixcblx0XCJyYWNlXCI6IFwi4oi9zLFcIixcblx0XCJSYWN1dGVcIjogXCLFlFwiLFxuXHRcInJhY3V0ZVwiOiBcIsWVXCIsXG5cdFwicmFkaWNcIjogXCLiiJpcIixcblx0XCJyYWVtcHR5dlwiOiBcIuKms1wiLFxuXHRcInJhbmdcIjogXCLin6lcIixcblx0XCJSYW5nXCI6IFwi4p+rXCIsXG5cdFwicmFuZ2RcIjogXCLippJcIixcblx0XCJyYW5nZVwiOiBcIuKmpVwiLFxuXHRcInJhbmdsZVwiOiBcIuKfqVwiLFxuXHRcInJhcXVvXCI6IFwiwrtcIixcblx0XCJyYXJyYXBcIjogXCLipbVcIixcblx0XCJyYXJyYlwiOiBcIuKHpVwiLFxuXHRcInJhcnJiZnNcIjogXCLipKBcIixcblx0XCJyYXJyY1wiOiBcIuKks1wiLFxuXHRcInJhcnJcIjogXCLihpJcIixcblx0XCJSYXJyXCI6IFwi4oagXCIsXG5cdFwickFyclwiOiBcIuKHklwiLFxuXHRcInJhcnJmc1wiOiBcIuKknlwiLFxuXHRcInJhcnJoa1wiOiBcIuKGqlwiLFxuXHRcInJhcnJscFwiOiBcIuKGrFwiLFxuXHRcInJhcnJwbFwiOiBcIuKlhVwiLFxuXHRcInJhcnJzaW1cIjogXCLipbRcIixcblx0XCJSYXJydGxcIjogXCLipJZcIixcblx0XCJyYXJydGxcIjogXCLihqNcIixcblx0XCJyYXJyd1wiOiBcIuKGnVwiLFxuXHRcInJhdGFpbFwiOiBcIuKkmlwiLFxuXHRcInJBdGFpbFwiOiBcIuKknFwiLFxuXHRcInJhdGlvXCI6IFwi4oi2XCIsXG5cdFwicmF0aW9uYWxzXCI6IFwi4oSaXCIsXG5cdFwicmJhcnJcIjogXCLipI1cIixcblx0XCJyQmFyclwiOiBcIuKkj1wiLFxuXHRcIlJCYXJyXCI6IFwi4qSQXCIsXG5cdFwicmJicmtcIjogXCLinbNcIixcblx0XCJyYnJhY2VcIjogXCJ9XCIsXG5cdFwicmJyYWNrXCI6IFwiXVwiLFxuXHRcInJicmtlXCI6IFwi4qaMXCIsXG5cdFwicmJya3NsZFwiOiBcIuKmjlwiLFxuXHRcInJicmtzbHVcIjogXCLippBcIixcblx0XCJSY2Fyb25cIjogXCLFmFwiLFxuXHRcInJjYXJvblwiOiBcIsWZXCIsXG5cdFwiUmNlZGlsXCI6IFwixZZcIixcblx0XCJyY2VkaWxcIjogXCLFl1wiLFxuXHRcInJjZWlsXCI6IFwi4oyJXCIsXG5cdFwicmN1YlwiOiBcIn1cIixcblx0XCJSY3lcIjogXCLQoFwiLFxuXHRcInJjeVwiOiBcItGAXCIsXG5cdFwicmRjYVwiOiBcIuKkt1wiLFxuXHRcInJkbGRoYXJcIjogXCLipalcIixcblx0XCJyZHF1b1wiOiBcIuKAnVwiLFxuXHRcInJkcXVvclwiOiBcIuKAnVwiLFxuXHRcInJkc2hcIjogXCLihrNcIixcblx0XCJyZWFsXCI6IFwi4oScXCIsXG5cdFwicmVhbGluZVwiOiBcIuKEm1wiLFxuXHRcInJlYWxwYXJ0XCI6IFwi4oScXCIsXG5cdFwicmVhbHNcIjogXCLihJ1cIixcblx0XCJSZVwiOiBcIuKEnFwiLFxuXHRcInJlY3RcIjogXCLilq1cIixcblx0XCJyZWdcIjogXCLCrlwiLFxuXHRcIlJFR1wiOiBcIsKuXCIsXG5cdFwiUmV2ZXJzZUVsZW1lbnRcIjogXCLiiItcIixcblx0XCJSZXZlcnNlRXF1aWxpYnJpdW1cIjogXCLih4tcIixcblx0XCJSZXZlcnNlVXBFcXVpbGlicml1bVwiOiBcIuKlr1wiLFxuXHRcInJmaXNodFwiOiBcIuKlvVwiLFxuXHRcInJmbG9vclwiOiBcIuKMi1wiLFxuXHRcInJmclwiOiBcIvCdlK9cIixcblx0XCJSZnJcIjogXCLihJxcIixcblx0XCJySGFyXCI6IFwi4qWkXCIsXG5cdFwicmhhcmRcIjogXCLih4FcIixcblx0XCJyaGFydVwiOiBcIuKHgFwiLFxuXHRcInJoYXJ1bFwiOiBcIuKlrFwiLFxuXHRcIlJob1wiOiBcIs6hXCIsXG5cdFwicmhvXCI6IFwiz4FcIixcblx0XCJyaG92XCI6IFwiz7FcIixcblx0XCJSaWdodEFuZ2xlQnJhY2tldFwiOiBcIuKfqVwiLFxuXHRcIlJpZ2h0QXJyb3dCYXJcIjogXCLih6VcIixcblx0XCJyaWdodGFycm93XCI6IFwi4oaSXCIsXG5cdFwiUmlnaHRBcnJvd1wiOiBcIuKGklwiLFxuXHRcIlJpZ2h0YXJyb3dcIjogXCLih5JcIixcblx0XCJSaWdodEFycm93TGVmdEFycm93XCI6IFwi4oeEXCIsXG5cdFwicmlnaHRhcnJvd3RhaWxcIjogXCLihqNcIixcblx0XCJSaWdodENlaWxpbmdcIjogXCLijIlcIixcblx0XCJSaWdodERvdWJsZUJyYWNrZXRcIjogXCLin6dcIixcblx0XCJSaWdodERvd25UZWVWZWN0b3JcIjogXCLipZ1cIixcblx0XCJSaWdodERvd25WZWN0b3JCYXJcIjogXCLipZVcIixcblx0XCJSaWdodERvd25WZWN0b3JcIjogXCLih4JcIixcblx0XCJSaWdodEZsb29yXCI6IFwi4oyLXCIsXG5cdFwicmlnaHRoYXJwb29uZG93blwiOiBcIuKHgVwiLFxuXHRcInJpZ2h0aGFycG9vbnVwXCI6IFwi4oeAXCIsXG5cdFwicmlnaHRsZWZ0YXJyb3dzXCI6IFwi4oeEXCIsXG5cdFwicmlnaHRsZWZ0aGFycG9vbnNcIjogXCLih4xcIixcblx0XCJyaWdodHJpZ2h0YXJyb3dzXCI6IFwi4oeJXCIsXG5cdFwicmlnaHRzcXVpZ2Fycm93XCI6IFwi4oadXCIsXG5cdFwiUmlnaHRUZWVBcnJvd1wiOiBcIuKGplwiLFxuXHRcIlJpZ2h0VGVlXCI6IFwi4oqiXCIsXG5cdFwiUmlnaHRUZWVWZWN0b3JcIjogXCLipZtcIixcblx0XCJyaWdodHRocmVldGltZXNcIjogXCLii4xcIixcblx0XCJSaWdodFRyaWFuZ2xlQmFyXCI6IFwi4qeQXCIsXG5cdFwiUmlnaHRUcmlhbmdsZVwiOiBcIuKKs1wiLFxuXHRcIlJpZ2h0VHJpYW5nbGVFcXVhbFwiOiBcIuKKtVwiLFxuXHRcIlJpZ2h0VXBEb3duVmVjdG9yXCI6IFwi4qWPXCIsXG5cdFwiUmlnaHRVcFRlZVZlY3RvclwiOiBcIuKlnFwiLFxuXHRcIlJpZ2h0VXBWZWN0b3JCYXJcIjogXCLipZRcIixcblx0XCJSaWdodFVwVmVjdG9yXCI6IFwi4oa+XCIsXG5cdFwiUmlnaHRWZWN0b3JCYXJcIjogXCLipZNcIixcblx0XCJSaWdodFZlY3RvclwiOiBcIuKHgFwiLFxuXHRcInJpbmdcIjogXCLLmlwiLFxuXHRcInJpc2luZ2RvdHNlcVwiOiBcIuKJk1wiLFxuXHRcInJsYXJyXCI6IFwi4oeEXCIsXG5cdFwicmxoYXJcIjogXCLih4xcIixcblx0XCJybG1cIjogXCLigI9cIixcblx0XCJybW91c3RhY2hlXCI6IFwi4o6xXCIsXG5cdFwicm1vdXN0XCI6IFwi4o6xXCIsXG5cdFwicm5taWRcIjogXCLiq65cIixcblx0XCJyb2FuZ1wiOiBcIuKfrVwiLFxuXHRcInJvYXJyXCI6IFwi4oe+XCIsXG5cdFwicm9icmtcIjogXCLin6dcIixcblx0XCJyb3BhclwiOiBcIuKmhlwiLFxuXHRcInJvcGZcIjogXCLwnZWjXCIsXG5cdFwiUm9wZlwiOiBcIuKEnVwiLFxuXHRcInJvcGx1c1wiOiBcIuKorlwiLFxuXHRcInJvdGltZXNcIjogXCLiqLVcIixcblx0XCJSb3VuZEltcGxpZXNcIjogXCLipbBcIixcblx0XCJycGFyXCI6IFwiKVwiLFxuXHRcInJwYXJndFwiOiBcIuKmlFwiLFxuXHRcInJwcG9saW50XCI6IFwi4qiSXCIsXG5cdFwicnJhcnJcIjogXCLih4lcIixcblx0XCJScmlnaHRhcnJvd1wiOiBcIuKHm1wiLFxuXHRcInJzYXF1b1wiOiBcIuKAulwiLFxuXHRcInJzY3JcIjogXCLwnZOHXCIsXG5cdFwiUnNjclwiOiBcIuKEm1wiLFxuXHRcInJzaFwiOiBcIuKGsVwiLFxuXHRcIlJzaFwiOiBcIuKGsVwiLFxuXHRcInJzcWJcIjogXCJdXCIsXG5cdFwicnNxdW9cIjogXCLigJlcIixcblx0XCJyc3F1b3JcIjogXCLigJlcIixcblx0XCJydGhyZWVcIjogXCLii4xcIixcblx0XCJydGltZXNcIjogXCLii4pcIixcblx0XCJydHJpXCI6IFwi4pa5XCIsXG5cdFwicnRyaWVcIjogXCLiirVcIixcblx0XCJydHJpZlwiOiBcIuKWuFwiLFxuXHRcInJ0cmlsdHJpXCI6IFwi4qeOXCIsXG5cdFwiUnVsZURlbGF5ZWRcIjogXCLip7RcIixcblx0XCJydWx1aGFyXCI6IFwi4qWoXCIsXG5cdFwicnhcIjogXCLihJ5cIixcblx0XCJTYWN1dGVcIjogXCLFmlwiLFxuXHRcInNhY3V0ZVwiOiBcIsWbXCIsXG5cdFwic2JxdW9cIjogXCLigJpcIixcblx0XCJzY2FwXCI6IFwi4qq4XCIsXG5cdFwiU2Nhcm9uXCI6IFwixaBcIixcblx0XCJzY2Fyb25cIjogXCLFoVwiLFxuXHRcIlNjXCI6IFwi4qq8XCIsXG5cdFwic2NcIjogXCLiibtcIixcblx0XCJzY2N1ZVwiOiBcIuKJvVwiLFxuXHRcInNjZVwiOiBcIuKqsFwiLFxuXHRcInNjRVwiOiBcIuKqtFwiLFxuXHRcIlNjZWRpbFwiOiBcIsWeXCIsXG5cdFwic2NlZGlsXCI6IFwixZ9cIixcblx0XCJTY2lyY1wiOiBcIsWcXCIsXG5cdFwic2NpcmNcIjogXCLFnVwiLFxuXHRcInNjbmFwXCI6IFwi4qq6XCIsXG5cdFwic2NuRVwiOiBcIuKqtlwiLFxuXHRcInNjbnNpbVwiOiBcIuKLqVwiLFxuXHRcInNjcG9saW50XCI6IFwi4qiTXCIsXG5cdFwic2NzaW1cIjogXCLiib9cIixcblx0XCJTY3lcIjogXCLQoVwiLFxuXHRcInNjeVwiOiBcItGBXCIsXG5cdFwic2RvdGJcIjogXCLiiqFcIixcblx0XCJzZG90XCI6IFwi4ouFXCIsXG5cdFwic2RvdGVcIjogXCLiqaZcIixcblx0XCJzZWFyaGtcIjogXCLipKVcIixcblx0XCJzZWFyclwiOiBcIuKGmFwiLFxuXHRcInNlQXJyXCI6IFwi4oeYXCIsXG5cdFwic2VhcnJvd1wiOiBcIuKGmFwiLFxuXHRcInNlY3RcIjogXCLCp1wiLFxuXHRcInNlbWlcIjogXCI7XCIsXG5cdFwic2Vzd2FyXCI6IFwi4qSpXCIsXG5cdFwic2V0bWludXNcIjogXCLiiJZcIixcblx0XCJzZXRtblwiOiBcIuKIllwiLFxuXHRcInNleHRcIjogXCLinLZcIixcblx0XCJTZnJcIjogXCLwnZSWXCIsXG5cdFwic2ZyXCI6IFwi8J2UsFwiLFxuXHRcInNmcm93blwiOiBcIuKMolwiLFxuXHRcInNoYXJwXCI6IFwi4pmvXCIsXG5cdFwiU0hDSGN5XCI6IFwi0KlcIixcblx0XCJzaGNoY3lcIjogXCLRiVwiLFxuXHRcIlNIY3lcIjogXCLQqFwiLFxuXHRcInNoY3lcIjogXCLRiFwiLFxuXHRcIlNob3J0RG93bkFycm93XCI6IFwi4oaTXCIsXG5cdFwiU2hvcnRMZWZ0QXJyb3dcIjogXCLihpBcIixcblx0XCJzaG9ydG1pZFwiOiBcIuKIo1wiLFxuXHRcInNob3J0cGFyYWxsZWxcIjogXCLiiKVcIixcblx0XCJTaG9ydFJpZ2h0QXJyb3dcIjogXCLihpJcIixcblx0XCJTaG9ydFVwQXJyb3dcIjogXCLihpFcIixcblx0XCJzaHlcIjogXCLCrVwiLFxuXHRcIlNpZ21hXCI6IFwizqNcIixcblx0XCJzaWdtYVwiOiBcIs+DXCIsXG5cdFwic2lnbWFmXCI6IFwiz4JcIixcblx0XCJzaWdtYXZcIjogXCLPglwiLFxuXHRcInNpbVwiOiBcIuKIvFwiLFxuXHRcInNpbWRvdFwiOiBcIuKpqlwiLFxuXHRcInNpbWVcIjogXCLiiYNcIixcblx0XCJzaW1lcVwiOiBcIuKJg1wiLFxuXHRcInNpbWdcIjogXCLiqp5cIixcblx0XCJzaW1nRVwiOiBcIuKqoFwiLFxuXHRcInNpbWxcIjogXCLiqp1cIixcblx0XCJzaW1sRVwiOiBcIuKqn1wiLFxuXHRcInNpbW5lXCI6IFwi4omGXCIsXG5cdFwic2ltcGx1c1wiOiBcIuKopFwiLFxuXHRcInNpbXJhcnJcIjogXCLipbJcIixcblx0XCJzbGFyclwiOiBcIuKGkFwiLFxuXHRcIlNtYWxsQ2lyY2xlXCI6IFwi4oiYXCIsXG5cdFwic21hbGxzZXRtaW51c1wiOiBcIuKIllwiLFxuXHRcInNtYXNocFwiOiBcIuKos1wiLFxuXHRcInNtZXBhcnNsXCI6IFwi4qekXCIsXG5cdFwic21pZFwiOiBcIuKIo1wiLFxuXHRcInNtaWxlXCI6IFwi4oyjXCIsXG5cdFwic210XCI6IFwi4qqqXCIsXG5cdFwic210ZVwiOiBcIuKqrFwiLFxuXHRcInNtdGVzXCI6IFwi4qqs77iAXCIsXG5cdFwiU09GVGN5XCI6IFwi0KxcIixcblx0XCJzb2Z0Y3lcIjogXCLRjFwiLFxuXHRcInNvbGJhclwiOiBcIuKMv1wiLFxuXHRcInNvbGJcIjogXCLip4RcIixcblx0XCJzb2xcIjogXCIvXCIsXG5cdFwiU29wZlwiOiBcIvCdlYpcIixcblx0XCJzb3BmXCI6IFwi8J2VpFwiLFxuXHRcInNwYWRlc1wiOiBcIuKZoFwiLFxuXHRcInNwYWRlc3VpdFwiOiBcIuKZoFwiLFxuXHRcInNwYXJcIjogXCLiiKVcIixcblx0XCJzcWNhcFwiOiBcIuKKk1wiLFxuXHRcInNxY2Fwc1wiOiBcIuKKk++4gFwiLFxuXHRcInNxY3VwXCI6IFwi4oqUXCIsXG5cdFwic3FjdXBzXCI6IFwi4oqU77iAXCIsXG5cdFwiU3FydFwiOiBcIuKImlwiLFxuXHRcInNxc3ViXCI6IFwi4oqPXCIsXG5cdFwic3FzdWJlXCI6IFwi4oqRXCIsXG5cdFwic3FzdWJzZXRcIjogXCLiio9cIixcblx0XCJzcXN1YnNldGVxXCI6IFwi4oqRXCIsXG5cdFwic3FzdXBcIjogXCLiipBcIixcblx0XCJzcXN1cGVcIjogXCLiipJcIixcblx0XCJzcXN1cHNldFwiOiBcIuKKkFwiLFxuXHRcInNxc3Vwc2V0ZXFcIjogXCLiipJcIixcblx0XCJzcXVhcmVcIjogXCLilqFcIixcblx0XCJTcXVhcmVcIjogXCLilqFcIixcblx0XCJTcXVhcmVJbnRlcnNlY3Rpb25cIjogXCLiipNcIixcblx0XCJTcXVhcmVTdWJzZXRcIjogXCLiio9cIixcblx0XCJTcXVhcmVTdWJzZXRFcXVhbFwiOiBcIuKKkVwiLFxuXHRcIlNxdWFyZVN1cGVyc2V0XCI6IFwi4oqQXCIsXG5cdFwiU3F1YXJlU3VwZXJzZXRFcXVhbFwiOiBcIuKKklwiLFxuXHRcIlNxdWFyZVVuaW9uXCI6IFwi4oqUXCIsXG5cdFwic3F1YXJmXCI6IFwi4paqXCIsXG5cdFwic3F1XCI6IFwi4pahXCIsXG5cdFwic3F1ZlwiOiBcIuKWqlwiLFxuXHRcInNyYXJyXCI6IFwi4oaSXCIsXG5cdFwiU3NjclwiOiBcIvCdkq5cIixcblx0XCJzc2NyXCI6IFwi8J2TiFwiLFxuXHRcInNzZXRtblwiOiBcIuKIllwiLFxuXHRcInNzbWlsZVwiOiBcIuKMo1wiLFxuXHRcInNzdGFyZlwiOiBcIuKLhlwiLFxuXHRcIlN0YXJcIjogXCLii4ZcIixcblx0XCJzdGFyXCI6IFwi4piGXCIsXG5cdFwic3RhcmZcIjogXCLimIVcIixcblx0XCJzdHJhaWdodGVwc2lsb25cIjogXCLPtVwiLFxuXHRcInN0cmFpZ2h0cGhpXCI6IFwiz5VcIixcblx0XCJzdHJuc1wiOiBcIsKvXCIsXG5cdFwic3ViXCI6IFwi4oqCXCIsXG5cdFwiU3ViXCI6IFwi4ouQXCIsXG5cdFwic3ViZG90XCI6IFwi4qq9XCIsXG5cdFwic3ViRVwiOiBcIuKrhVwiLFxuXHRcInN1YmVcIjogXCLiioZcIixcblx0XCJzdWJlZG90XCI6IFwi4quDXCIsXG5cdFwic3VibXVsdFwiOiBcIuKrgVwiLFxuXHRcInN1Ym5FXCI6IFwi4quLXCIsXG5cdFwic3VibmVcIjogXCLiiopcIixcblx0XCJzdWJwbHVzXCI6IFwi4qq/XCIsXG5cdFwic3VicmFyclwiOiBcIuKluVwiLFxuXHRcInN1YnNldFwiOiBcIuKKglwiLFxuXHRcIlN1YnNldFwiOiBcIuKLkFwiLFxuXHRcInN1YnNldGVxXCI6IFwi4oqGXCIsXG5cdFwic3Vic2V0ZXFxXCI6IFwi4quFXCIsXG5cdFwiU3Vic2V0RXF1YWxcIjogXCLiioZcIixcblx0XCJzdWJzZXRuZXFcIjogXCLiiopcIixcblx0XCJzdWJzZXRuZXFxXCI6IFwi4quLXCIsXG5cdFwic3Vic2ltXCI6IFwi4quHXCIsXG5cdFwic3Vic3ViXCI6IFwi4quVXCIsXG5cdFwic3Vic3VwXCI6IFwi4quTXCIsXG5cdFwic3VjY2FwcHJveFwiOiBcIuKquFwiLFxuXHRcInN1Y2NcIjogXCLiibtcIixcblx0XCJzdWNjY3VybHllcVwiOiBcIuKJvVwiLFxuXHRcIlN1Y2NlZWRzXCI6IFwi4om7XCIsXG5cdFwiU3VjY2VlZHNFcXVhbFwiOiBcIuKqsFwiLFxuXHRcIlN1Y2NlZWRzU2xhbnRFcXVhbFwiOiBcIuKJvVwiLFxuXHRcIlN1Y2NlZWRzVGlsZGVcIjogXCLiib9cIixcblx0XCJzdWNjZXFcIjogXCLiqrBcIixcblx0XCJzdWNjbmFwcHJveFwiOiBcIuKqulwiLFxuXHRcInN1Y2NuZXFxXCI6IFwi4qq2XCIsXG5cdFwic3VjY25zaW1cIjogXCLii6lcIixcblx0XCJzdWNjc2ltXCI6IFwi4om/XCIsXG5cdFwiU3VjaFRoYXRcIjogXCLiiItcIixcblx0XCJzdW1cIjogXCLiiJFcIixcblx0XCJTdW1cIjogXCLiiJFcIixcblx0XCJzdW5nXCI6IFwi4pmqXCIsXG5cdFwic3VwMVwiOiBcIsK5XCIsXG5cdFwic3VwMlwiOiBcIsKyXCIsXG5cdFwic3VwM1wiOiBcIsKzXCIsXG5cdFwic3VwXCI6IFwi4oqDXCIsXG5cdFwiU3VwXCI6IFwi4ouRXCIsXG5cdFwic3VwZG90XCI6IFwi4qq+XCIsXG5cdFwic3VwZHN1YlwiOiBcIuKrmFwiLFxuXHRcInN1cEVcIjogXCLiq4ZcIixcblx0XCJzdXBlXCI6IFwi4oqHXCIsXG5cdFwic3VwZWRvdFwiOiBcIuKrhFwiLFxuXHRcIlN1cGVyc2V0XCI6IFwi4oqDXCIsXG5cdFwiU3VwZXJzZXRFcXVhbFwiOiBcIuKKh1wiLFxuXHRcInN1cGhzb2xcIjogXCLin4lcIixcblx0XCJzdXBoc3ViXCI6IFwi4quXXCIsXG5cdFwic3VwbGFyclwiOiBcIuKlu1wiLFxuXHRcInN1cG11bHRcIjogXCLiq4JcIixcblx0XCJzdXBuRVwiOiBcIuKrjFwiLFxuXHRcInN1cG5lXCI6IFwi4oqLXCIsXG5cdFwic3VwcGx1c1wiOiBcIuKrgFwiLFxuXHRcInN1cHNldFwiOiBcIuKKg1wiLFxuXHRcIlN1cHNldFwiOiBcIuKLkVwiLFxuXHRcInN1cHNldGVxXCI6IFwi4oqHXCIsXG5cdFwic3Vwc2V0ZXFxXCI6IFwi4quGXCIsXG5cdFwic3Vwc2V0bmVxXCI6IFwi4oqLXCIsXG5cdFwic3Vwc2V0bmVxcVwiOiBcIuKrjFwiLFxuXHRcInN1cHNpbVwiOiBcIuKriFwiLFxuXHRcInN1cHN1YlwiOiBcIuKrlFwiLFxuXHRcInN1cHN1cFwiOiBcIuKrllwiLFxuXHRcInN3YXJoa1wiOiBcIuKkplwiLFxuXHRcInN3YXJyXCI6IFwi4oaZXCIsXG5cdFwic3dBcnJcIjogXCLih5lcIixcblx0XCJzd2Fycm93XCI6IFwi4oaZXCIsXG5cdFwic3dud2FyXCI6IFwi4qSqXCIsXG5cdFwic3psaWdcIjogXCLDn1wiLFxuXHRcIlRhYlwiOiBcIlxcdFwiLFxuXHRcInRhcmdldFwiOiBcIuKMllwiLFxuXHRcIlRhdVwiOiBcIs6kXCIsXG5cdFwidGF1XCI6IFwiz4RcIixcblx0XCJ0YnJrXCI6IFwi4o60XCIsXG5cdFwiVGNhcm9uXCI6IFwixaRcIixcblx0XCJ0Y2Fyb25cIjogXCLFpVwiLFxuXHRcIlRjZWRpbFwiOiBcIsWiXCIsXG5cdFwidGNlZGlsXCI6IFwixaNcIixcblx0XCJUY3lcIjogXCLQolwiLFxuXHRcInRjeVwiOiBcItGCXCIsXG5cdFwidGRvdFwiOiBcIuKDm1wiLFxuXHRcInRlbHJlY1wiOiBcIuKMlVwiLFxuXHRcIlRmclwiOiBcIvCdlJdcIixcblx0XCJ0ZnJcIjogXCLwnZSxXCIsXG5cdFwidGhlcmU0XCI6IFwi4oi0XCIsXG5cdFwidGhlcmVmb3JlXCI6IFwi4oi0XCIsXG5cdFwiVGhlcmVmb3JlXCI6IFwi4oi0XCIsXG5cdFwiVGhldGFcIjogXCLOmFwiLFxuXHRcInRoZXRhXCI6IFwizrhcIixcblx0XCJ0aGV0YXN5bVwiOiBcIs+RXCIsXG5cdFwidGhldGF2XCI6IFwiz5FcIixcblx0XCJ0aGlja2FwcHJveFwiOiBcIuKJiFwiLFxuXHRcInRoaWNrc2ltXCI6IFwi4oi8XCIsXG5cdFwiVGhpY2tTcGFjZVwiOiBcIuKBn+KAilwiLFxuXHRcIlRoaW5TcGFjZVwiOiBcIuKAiVwiLFxuXHRcInRoaW5zcFwiOiBcIuKAiVwiLFxuXHRcInRoa2FwXCI6IFwi4omIXCIsXG5cdFwidGhrc2ltXCI6IFwi4oi8XCIsXG5cdFwiVEhPUk5cIjogXCLDnlwiLFxuXHRcInRob3JuXCI6IFwiw75cIixcblx0XCJ0aWxkZVwiOiBcIsucXCIsXG5cdFwiVGlsZGVcIjogXCLiiLxcIixcblx0XCJUaWxkZUVxdWFsXCI6IFwi4omDXCIsXG5cdFwiVGlsZGVGdWxsRXF1YWxcIjogXCLiiYVcIixcblx0XCJUaWxkZVRpbGRlXCI6IFwi4omIXCIsXG5cdFwidGltZXNiYXJcIjogXCLiqLFcIixcblx0XCJ0aW1lc2JcIjogXCLiiqBcIixcblx0XCJ0aW1lc1wiOiBcIsOXXCIsXG5cdFwidGltZXNkXCI6IFwi4qiwXCIsXG5cdFwidGludFwiOiBcIuKIrVwiLFxuXHRcInRvZWFcIjogXCLipKhcIixcblx0XCJ0b3Bib3RcIjogXCLijLZcIixcblx0XCJ0b3BjaXJcIjogXCLiq7FcIixcblx0XCJ0b3BcIjogXCLiiqRcIixcblx0XCJUb3BmXCI6IFwi8J2Vi1wiLFxuXHRcInRvcGZcIjogXCLwnZWlXCIsXG5cdFwidG9wZm9ya1wiOiBcIuKrmlwiLFxuXHRcInRvc2FcIjogXCLipKlcIixcblx0XCJ0cHJpbWVcIjogXCLigLRcIixcblx0XCJ0cmFkZVwiOiBcIuKEolwiLFxuXHRcIlRSQURFXCI6IFwi4oSiXCIsXG5cdFwidHJpYW5nbGVcIjogXCLilrVcIixcblx0XCJ0cmlhbmdsZWRvd25cIjogXCLilr9cIixcblx0XCJ0cmlhbmdsZWxlZnRcIjogXCLil4NcIixcblx0XCJ0cmlhbmdsZWxlZnRlcVwiOiBcIuKKtFwiLFxuXHRcInRyaWFuZ2xlcVwiOiBcIuKJnFwiLFxuXHRcInRyaWFuZ2xlcmlnaHRcIjogXCLilrlcIixcblx0XCJ0cmlhbmdsZXJpZ2h0ZXFcIjogXCLiirVcIixcblx0XCJ0cmlkb3RcIjogXCLil6xcIixcblx0XCJ0cmllXCI6IFwi4omcXCIsXG5cdFwidHJpbWludXNcIjogXCLiqLpcIixcblx0XCJUcmlwbGVEb3RcIjogXCLig5tcIixcblx0XCJ0cmlwbHVzXCI6IFwi4qi5XCIsXG5cdFwidHJpc2JcIjogXCLip41cIixcblx0XCJ0cml0aW1lXCI6IFwi4qi7XCIsXG5cdFwidHJwZXppdW1cIjogXCLij6JcIixcblx0XCJUc2NyXCI6IFwi8J2Sr1wiLFxuXHRcInRzY3JcIjogXCLwnZOJXCIsXG5cdFwiVFNjeVwiOiBcItCmXCIsXG5cdFwidHNjeVwiOiBcItGGXCIsXG5cdFwiVFNIY3lcIjogXCLQi1wiLFxuXHRcInRzaGN5XCI6IFwi0ZtcIixcblx0XCJUc3Ryb2tcIjogXCLFplwiLFxuXHRcInRzdHJva1wiOiBcIsWnXCIsXG5cdFwidHdpeHRcIjogXCLiiaxcIixcblx0XCJ0d29oZWFkbGVmdGFycm93XCI6IFwi4oaeXCIsXG5cdFwidHdvaGVhZHJpZ2h0YXJyb3dcIjogXCLihqBcIixcblx0XCJVYWN1dGVcIjogXCLDmlwiLFxuXHRcInVhY3V0ZVwiOiBcIsO6XCIsXG5cdFwidWFyclwiOiBcIuKGkVwiLFxuXHRcIlVhcnJcIjogXCLihp9cIixcblx0XCJ1QXJyXCI6IFwi4oeRXCIsXG5cdFwiVWFycm9jaXJcIjogXCLipYlcIixcblx0XCJVYnJjeVwiOiBcItCOXCIsXG5cdFwidWJyY3lcIjogXCLRnlwiLFxuXHRcIlVicmV2ZVwiOiBcIsWsXCIsXG5cdFwidWJyZXZlXCI6IFwixa1cIixcblx0XCJVY2lyY1wiOiBcIsObXCIsXG5cdFwidWNpcmNcIjogXCLDu1wiLFxuXHRcIlVjeVwiOiBcItCjXCIsXG5cdFwidWN5XCI6IFwi0YNcIixcblx0XCJ1ZGFyclwiOiBcIuKHhVwiLFxuXHRcIlVkYmxhY1wiOiBcIsWwXCIsXG5cdFwidWRibGFjXCI6IFwixbFcIixcblx0XCJ1ZGhhclwiOiBcIuKlrlwiLFxuXHRcInVmaXNodFwiOiBcIuKlvlwiLFxuXHRcIlVmclwiOiBcIvCdlJhcIixcblx0XCJ1ZnJcIjogXCLwnZSyXCIsXG5cdFwiVWdyYXZlXCI6IFwiw5lcIixcblx0XCJ1Z3JhdmVcIjogXCLDuVwiLFxuXHRcInVIYXJcIjogXCLipaNcIixcblx0XCJ1aGFybFwiOiBcIuKGv1wiLFxuXHRcInVoYXJyXCI6IFwi4oa+XCIsXG5cdFwidWhibGtcIjogXCLiloBcIixcblx0XCJ1bGNvcm5cIjogXCLijJxcIixcblx0XCJ1bGNvcm5lclwiOiBcIuKMnFwiLFxuXHRcInVsY3JvcFwiOiBcIuKMj1wiLFxuXHRcInVsdHJpXCI6IFwi4pe4XCIsXG5cdFwiVW1hY3JcIjogXCLFqlwiLFxuXHRcInVtYWNyXCI6IFwixatcIixcblx0XCJ1bWxcIjogXCLCqFwiLFxuXHRcIlVuZGVyQmFyXCI6IFwiX1wiLFxuXHRcIlVuZGVyQnJhY2VcIjogXCLij59cIixcblx0XCJVbmRlckJyYWNrZXRcIjogXCLijrVcIixcblx0XCJVbmRlclBhcmVudGhlc2lzXCI6IFwi4o+dXCIsXG5cdFwiVW5pb25cIjogXCLii4NcIixcblx0XCJVbmlvblBsdXNcIjogXCLiio5cIixcblx0XCJVb2dvblwiOiBcIsWyXCIsXG5cdFwidW9nb25cIjogXCLFs1wiLFxuXHRcIlVvcGZcIjogXCLwnZWMXCIsXG5cdFwidW9wZlwiOiBcIvCdlaZcIixcblx0XCJVcEFycm93QmFyXCI6IFwi4qSSXCIsXG5cdFwidXBhcnJvd1wiOiBcIuKGkVwiLFxuXHRcIlVwQXJyb3dcIjogXCLihpFcIixcblx0XCJVcGFycm93XCI6IFwi4oeRXCIsXG5cdFwiVXBBcnJvd0Rvd25BcnJvd1wiOiBcIuKHhVwiLFxuXHRcInVwZG93bmFycm93XCI6IFwi4oaVXCIsXG5cdFwiVXBEb3duQXJyb3dcIjogXCLihpVcIixcblx0XCJVcGRvd25hcnJvd1wiOiBcIuKHlVwiLFxuXHRcIlVwRXF1aWxpYnJpdW1cIjogXCLipa5cIixcblx0XCJ1cGhhcnBvb25sZWZ0XCI6IFwi4oa/XCIsXG5cdFwidXBoYXJwb29ucmlnaHRcIjogXCLihr5cIixcblx0XCJ1cGx1c1wiOiBcIuKKjlwiLFxuXHRcIlVwcGVyTGVmdEFycm93XCI6IFwi4oaWXCIsXG5cdFwiVXBwZXJSaWdodEFycm93XCI6IFwi4oaXXCIsXG5cdFwidXBzaVwiOiBcIs+FXCIsXG5cdFwiVXBzaVwiOiBcIs+SXCIsXG5cdFwidXBzaWhcIjogXCLPklwiLFxuXHRcIlVwc2lsb25cIjogXCLOpVwiLFxuXHRcInVwc2lsb25cIjogXCLPhVwiLFxuXHRcIlVwVGVlQXJyb3dcIjogXCLihqVcIixcblx0XCJVcFRlZVwiOiBcIuKKpVwiLFxuXHRcInVwdXBhcnJvd3NcIjogXCLih4hcIixcblx0XCJ1cmNvcm5cIjogXCLijJ1cIixcblx0XCJ1cmNvcm5lclwiOiBcIuKMnVwiLFxuXHRcInVyY3JvcFwiOiBcIuKMjlwiLFxuXHRcIlVyaW5nXCI6IFwixa5cIixcblx0XCJ1cmluZ1wiOiBcIsWvXCIsXG5cdFwidXJ0cmlcIjogXCLil7lcIixcblx0XCJVc2NyXCI6IFwi8J2SsFwiLFxuXHRcInVzY3JcIjogXCLwnZOKXCIsXG5cdFwidXRkb3RcIjogXCLii7BcIixcblx0XCJVdGlsZGVcIjogXCLFqFwiLFxuXHRcInV0aWxkZVwiOiBcIsWpXCIsXG5cdFwidXRyaVwiOiBcIuKWtVwiLFxuXHRcInV0cmlmXCI6IFwi4pa0XCIsXG5cdFwidXVhcnJcIjogXCLih4hcIixcblx0XCJVdW1sXCI6IFwiw5xcIixcblx0XCJ1dW1sXCI6IFwiw7xcIixcblx0XCJ1d2FuZ2xlXCI6IFwi4qanXCIsXG5cdFwidmFuZ3J0XCI6IFwi4qacXCIsXG5cdFwidmFyZXBzaWxvblwiOiBcIs+1XCIsXG5cdFwidmFya2FwcGFcIjogXCLPsFwiLFxuXHRcInZhcm5vdGhpbmdcIjogXCLiiIVcIixcblx0XCJ2YXJwaGlcIjogXCLPlVwiLFxuXHRcInZhcnBpXCI6IFwiz5ZcIixcblx0XCJ2YXJwcm9wdG9cIjogXCLiiJ1cIixcblx0XCJ2YXJyXCI6IFwi4oaVXCIsXG5cdFwidkFyclwiOiBcIuKHlVwiLFxuXHRcInZhcnJob1wiOiBcIs+xXCIsXG5cdFwidmFyc2lnbWFcIjogXCLPglwiLFxuXHRcInZhcnN1YnNldG5lcVwiOiBcIuKKiu+4gFwiLFxuXHRcInZhcnN1YnNldG5lcXFcIjogXCLiq4vvuIBcIixcblx0XCJ2YXJzdXBzZXRuZXFcIjogXCLiiovvuIBcIixcblx0XCJ2YXJzdXBzZXRuZXFxXCI6IFwi4quM77iAXCIsXG5cdFwidmFydGhldGFcIjogXCLPkVwiLFxuXHRcInZhcnRyaWFuZ2xlbGVmdFwiOiBcIuKKslwiLFxuXHRcInZhcnRyaWFuZ2xlcmlnaHRcIjogXCLiirNcIixcblx0XCJ2QmFyXCI6IFwi4quoXCIsXG5cdFwiVmJhclwiOiBcIuKrq1wiLFxuXHRcInZCYXJ2XCI6IFwi4qupXCIsXG5cdFwiVmN5XCI6IFwi0JJcIixcblx0XCJ2Y3lcIjogXCLQslwiLFxuXHRcInZkYXNoXCI6IFwi4oqiXCIsXG5cdFwidkRhc2hcIjogXCLiiqhcIixcblx0XCJWZGFzaFwiOiBcIuKKqVwiLFxuXHRcIlZEYXNoXCI6IFwi4oqrXCIsXG5cdFwiVmRhc2hsXCI6IFwi4qumXCIsXG5cdFwidmVlYmFyXCI6IFwi4oq7XCIsXG5cdFwidmVlXCI6IFwi4oioXCIsXG5cdFwiVmVlXCI6IFwi4ouBXCIsXG5cdFwidmVlZXFcIjogXCLiiZpcIixcblx0XCJ2ZWxsaXBcIjogXCLii65cIixcblx0XCJ2ZXJiYXJcIjogXCJ8XCIsXG5cdFwiVmVyYmFyXCI6IFwi4oCWXCIsXG5cdFwidmVydFwiOiBcInxcIixcblx0XCJWZXJ0XCI6IFwi4oCWXCIsXG5cdFwiVmVydGljYWxCYXJcIjogXCLiiKNcIixcblx0XCJWZXJ0aWNhbExpbmVcIjogXCJ8XCIsXG5cdFwiVmVydGljYWxTZXBhcmF0b3JcIjogXCLinZhcIixcblx0XCJWZXJ0aWNhbFRpbGRlXCI6IFwi4omAXCIsXG5cdFwiVmVyeVRoaW5TcGFjZVwiOiBcIuKAilwiLFxuXHRcIlZmclwiOiBcIvCdlJlcIixcblx0XCJ2ZnJcIjogXCLwnZSzXCIsXG5cdFwidmx0cmlcIjogXCLiirJcIixcblx0XCJ2bnN1YlwiOiBcIuKKguKDklwiLFxuXHRcInZuc3VwXCI6IFwi4oqD4oOSXCIsXG5cdFwiVm9wZlwiOiBcIvCdlY1cIixcblx0XCJ2b3BmXCI6IFwi8J2Vp1wiLFxuXHRcInZwcm9wXCI6IFwi4oidXCIsXG5cdFwidnJ0cmlcIjogXCLiirNcIixcblx0XCJWc2NyXCI6IFwi8J2SsVwiLFxuXHRcInZzY3JcIjogXCLwnZOLXCIsXG5cdFwidnN1Ym5FXCI6IFwi4quL77iAXCIsXG5cdFwidnN1Ym5lXCI6IFwi4oqK77iAXCIsXG5cdFwidnN1cG5FXCI6IFwi4quM77iAXCIsXG5cdFwidnN1cG5lXCI6IFwi4oqL77iAXCIsXG5cdFwiVnZkYXNoXCI6IFwi4oqqXCIsXG5cdFwidnppZ3phZ1wiOiBcIuKmmlwiLFxuXHRcIldjaXJjXCI6IFwixbRcIixcblx0XCJ3Y2lyY1wiOiBcIsW1XCIsXG5cdFwid2VkYmFyXCI6IFwi4qmfXCIsXG5cdFwid2VkZ2VcIjogXCLiiKdcIixcblx0XCJXZWRnZVwiOiBcIuKLgFwiLFxuXHRcIndlZGdlcVwiOiBcIuKJmVwiLFxuXHRcIndlaWVycFwiOiBcIuKEmFwiLFxuXHRcIldmclwiOiBcIvCdlJpcIixcblx0XCJ3ZnJcIjogXCLwnZS0XCIsXG5cdFwiV29wZlwiOiBcIvCdlY5cIixcblx0XCJ3b3BmXCI6IFwi8J2VqFwiLFxuXHRcIndwXCI6IFwi4oSYXCIsXG5cdFwid3JcIjogXCLiiYBcIixcblx0XCJ3cmVhdGhcIjogXCLiiYBcIixcblx0XCJXc2NyXCI6IFwi8J2SslwiLFxuXHRcIndzY3JcIjogXCLwnZOMXCIsXG5cdFwieGNhcFwiOiBcIuKLglwiLFxuXHRcInhjaXJjXCI6IFwi4pevXCIsXG5cdFwieGN1cFwiOiBcIuKLg1wiLFxuXHRcInhkdHJpXCI6IFwi4pa9XCIsXG5cdFwiWGZyXCI6IFwi8J2Um1wiLFxuXHRcInhmclwiOiBcIvCdlLVcIixcblx0XCJ4aGFyclwiOiBcIuKft1wiLFxuXHRcInhoQXJyXCI6IFwi4p+6XCIsXG5cdFwiWGlcIjogXCLOnlwiLFxuXHRcInhpXCI6IFwizr5cIixcblx0XCJ4bGFyclwiOiBcIuKftVwiLFxuXHRcInhsQXJyXCI6IFwi4p+4XCIsXG5cdFwieG1hcFwiOiBcIuKfvFwiLFxuXHRcInhuaXNcIjogXCLii7tcIixcblx0XCJ4b2RvdFwiOiBcIuKogFwiLFxuXHRcIlhvcGZcIjogXCLwnZWPXCIsXG5cdFwieG9wZlwiOiBcIvCdlalcIixcblx0XCJ4b3BsdXNcIjogXCLiqIFcIixcblx0XCJ4b3RpbWVcIjogXCLiqIJcIixcblx0XCJ4cmFyclwiOiBcIuKftlwiLFxuXHRcInhyQXJyXCI6IFwi4p+5XCIsXG5cdFwiWHNjclwiOiBcIvCdkrNcIixcblx0XCJ4c2NyXCI6IFwi8J2TjVwiLFxuXHRcInhzcWN1cFwiOiBcIuKohlwiLFxuXHRcInh1cGx1c1wiOiBcIuKohFwiLFxuXHRcInh1dHJpXCI6IFwi4pazXCIsXG5cdFwieHZlZVwiOiBcIuKLgVwiLFxuXHRcInh3ZWRnZVwiOiBcIuKLgFwiLFxuXHRcIllhY3V0ZVwiOiBcIsOdXCIsXG5cdFwieWFjdXRlXCI6IFwiw71cIixcblx0XCJZQWN5XCI6IFwi0K9cIixcblx0XCJ5YWN5XCI6IFwi0Y9cIixcblx0XCJZY2lyY1wiOiBcIsW2XCIsXG5cdFwieWNpcmNcIjogXCLFt1wiLFxuXHRcIlljeVwiOiBcItCrXCIsXG5cdFwieWN5XCI6IFwi0YtcIixcblx0XCJ5ZW5cIjogXCLCpVwiLFxuXHRcIllmclwiOiBcIvCdlJxcIixcblx0XCJ5ZnJcIjogXCLwnZS2XCIsXG5cdFwiWUljeVwiOiBcItCHXCIsXG5cdFwieWljeVwiOiBcItGXXCIsXG5cdFwiWW9wZlwiOiBcIvCdlZBcIixcblx0XCJ5b3BmXCI6IFwi8J2VqlwiLFxuXHRcIllzY3JcIjogXCLwnZK0XCIsXG5cdFwieXNjclwiOiBcIvCdk45cIixcblx0XCJZVWN5XCI6IFwi0K5cIixcblx0XCJ5dWN5XCI6IFwi0Y5cIixcblx0XCJ5dW1sXCI6IFwiw79cIixcblx0XCJZdW1sXCI6IFwixbhcIixcblx0XCJaYWN1dGVcIjogXCLFuVwiLFxuXHRcInphY3V0ZVwiOiBcIsW6XCIsXG5cdFwiWmNhcm9uXCI6IFwixb1cIixcblx0XCJ6Y2Fyb25cIjogXCLFvlwiLFxuXHRcIlpjeVwiOiBcItCXXCIsXG5cdFwiemN5XCI6IFwi0LdcIixcblx0XCJaZG90XCI6IFwixbtcIixcblx0XCJ6ZG90XCI6IFwixbxcIixcblx0XCJ6ZWV0cmZcIjogXCLihKhcIixcblx0XCJaZXJvV2lkdGhTcGFjZVwiOiBcIuKAi1wiLFxuXHRcIlpldGFcIjogXCLOllwiLFxuXHRcInpldGFcIjogXCLOtlwiLFxuXHRcInpmclwiOiBcIvCdlLdcIixcblx0XCJaZnJcIjogXCLihKhcIixcblx0XCJaSGN5XCI6IFwi0JZcIixcblx0XCJ6aGN5XCI6IFwi0LZcIixcblx0XCJ6aWdyYXJyXCI6IFwi4oedXCIsXG5cdFwiem9wZlwiOiBcIvCdlatcIixcblx0XCJab3BmXCI6IFwi4oSkXCIsXG5cdFwiWnNjclwiOiBcIvCdkrVcIixcblx0XCJ6c2NyXCI6IFwi8J2Tj1wiLFxuXHRcInp3alwiOiBcIuKAjVwiLFxuXHRcInp3bmpcIjogXCLigIxcIlxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL2VudGl0aWVzLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVudGl0eU1hcCA9IHJlcXVpcmUoXCIuLi9tYXBzL2VudGl0aWVzLmpzb25cIiksXG4gICAgbGVnYWN5TWFwID0gcmVxdWlyZShcIi4uL21hcHMvbGVnYWN5Lmpzb25cIiksXG4gICAgeG1sTWFwICAgID0gcmVxdWlyZShcIi4uL21hcHMveG1sLmpzb25cIiksXG4gICAgZGVjb2RlQ29kZVBvaW50ID0gcmVxdWlyZShcIi4vZGVjb2RlX2NvZGVwb2ludC5qc1wiKTtcblxudmFyIGRlY29kZVhNTFN0cmljdCAgPSBnZXRTdHJpY3REZWNvZGVyKHhtbE1hcCksXG4gICAgZGVjb2RlSFRNTFN0cmljdCA9IGdldFN0cmljdERlY29kZXIoZW50aXR5TWFwKTtcblxuZnVuY3Rpb24gZ2V0U3RyaWN0RGVjb2RlcihtYXApe1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG1hcCkuam9pbihcInxcIiksXG5cdCAgICByZXBsYWNlID0gZ2V0UmVwbGFjZXIobWFwKTtcblxuXHRrZXlzICs9IFwifCNbeFhdW1xcXFxkYS1mQS1GXSt8I1xcXFxkK1wiO1xuXG5cdHZhciByZSA9IG5ldyBSZWdFeHAoXCImKD86XCIgKyBrZXlzICsgXCIpO1wiLCBcImdcIik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHN0cil7XG5cdFx0cmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2UpO1xuXHR9O1xufVxuXG52YXIgZGVjb2RlSFRNTCA9IChmdW5jdGlvbigpe1xuXHR2YXIgbGVnYWN5ID0gT2JqZWN0LmtleXMobGVnYWN5TWFwKVxuXHRcdC5zb3J0KHNvcnRlcik7XG5cblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnRpdHlNYXApXG5cdFx0LnNvcnQoc29ydGVyKTtcblxuXHRmb3IodmFyIGkgPSAwLCBqID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuXHRcdGlmKGxlZ2FjeVtqXSA9PT0ga2V5c1tpXSl7XG5cdFx0XHRrZXlzW2ldICs9IFwiOz9cIjtcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0a2V5c1tpXSArPSBcIjtcIjtcblx0XHR9XG5cdH1cblxuXHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cy5qb2luKFwifFwiKSArIFwifCNbeFhdW1xcXFxkYS1mQS1GXSs7P3wjXFxcXGQrOz8pXCIsIFwiZ1wiKSxcblx0ICAgIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihlbnRpdHlNYXApO1xuXG5cdGZ1bmN0aW9uIHJlcGxhY2VyKHN0cil7XG5cdFx0aWYoc3RyLnN1YnN0cigtMSkgIT09IFwiO1wiKSBzdHIgKz0gXCI7XCI7XG5cdFx0cmV0dXJuIHJlcGxhY2Uoc3RyKTtcblx0fVxuXG5cdC8vVE9ETyBjb25zaWRlciBjcmVhdGluZyBhIG1lcmdlZCBtYXBcblx0cmV0dXJuIGZ1bmN0aW9uKHN0cil7XG5cdFx0cmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2VyKTtcblx0fTtcbn0oKSk7XG5cbmZ1bmN0aW9uIHNvcnRlcihhLCBiKXtcblx0cmV0dXJuIGEgPCBiID8gMSA6IC0xO1xufVxuXG5mdW5jdGlvbiBnZXRSZXBsYWNlcihtYXApe1xuXHRyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShzdHIpe1xuXHRcdGlmKHN0ci5jaGFyQXQoMSkgPT09IFwiI1wiKXtcblx0XHRcdGlmKHN0ci5jaGFyQXQoMikgPT09IFwiWFwiIHx8IHN0ci5jaGFyQXQoMikgPT09IFwieFwiKXtcblx0XHRcdFx0cmV0dXJuIGRlY29kZUNvZGVQb2ludChwYXJzZUludChzdHIuc3Vic3RyKDMpLCAxNikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRlY29kZUNvZGVQb2ludChwYXJzZUludChzdHIuc3Vic3RyKDIpLCAxMCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWFwW3N0ci5zbGljZSgxLCAtMSldO1xuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0WE1MOiBkZWNvZGVYTUxTdHJpY3QsXG5cdEhUTUw6IGRlY29kZUhUTUwsXG5cdEhUTUxTdHJpY3Q6IGRlY29kZUhUTUxTdHJpY3Rcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL2xpYi9kZWNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQWFjdXRlXCI6IFwiw4FcIixcblx0XCJhYWN1dGVcIjogXCLDoVwiLFxuXHRcIkFjaXJjXCI6IFwiw4JcIixcblx0XCJhY2lyY1wiOiBcIsOiXCIsXG5cdFwiYWN1dGVcIjogXCLCtFwiLFxuXHRcIkFFbGlnXCI6IFwiw4ZcIixcblx0XCJhZWxpZ1wiOiBcIsOmXCIsXG5cdFwiQWdyYXZlXCI6IFwiw4BcIixcblx0XCJhZ3JhdmVcIjogXCLDoFwiLFxuXHRcImFtcFwiOiBcIiZcIixcblx0XCJBTVBcIjogXCImXCIsXG5cdFwiQXJpbmdcIjogXCLDhVwiLFxuXHRcImFyaW5nXCI6IFwiw6VcIixcblx0XCJBdGlsZGVcIjogXCLDg1wiLFxuXHRcImF0aWxkZVwiOiBcIsOjXCIsXG5cdFwiQXVtbFwiOiBcIsOEXCIsXG5cdFwiYXVtbFwiOiBcIsOkXCIsXG5cdFwiYnJ2YmFyXCI6IFwiwqZcIixcblx0XCJDY2VkaWxcIjogXCLDh1wiLFxuXHRcImNjZWRpbFwiOiBcIsOnXCIsXG5cdFwiY2VkaWxcIjogXCLCuFwiLFxuXHRcImNlbnRcIjogXCLColwiLFxuXHRcImNvcHlcIjogXCLCqVwiLFxuXHRcIkNPUFlcIjogXCLCqVwiLFxuXHRcImN1cnJlblwiOiBcIsKkXCIsXG5cdFwiZGVnXCI6IFwiwrBcIixcblx0XCJkaXZpZGVcIjogXCLDt1wiLFxuXHRcIkVhY3V0ZVwiOiBcIsOJXCIsXG5cdFwiZWFjdXRlXCI6IFwiw6lcIixcblx0XCJFY2lyY1wiOiBcIsOKXCIsXG5cdFwiZWNpcmNcIjogXCLDqlwiLFxuXHRcIkVncmF2ZVwiOiBcIsOIXCIsXG5cdFwiZWdyYXZlXCI6IFwiw6hcIixcblx0XCJFVEhcIjogXCLDkFwiLFxuXHRcImV0aFwiOiBcIsOwXCIsXG5cdFwiRXVtbFwiOiBcIsOLXCIsXG5cdFwiZXVtbFwiOiBcIsOrXCIsXG5cdFwiZnJhYzEyXCI6IFwiwr1cIixcblx0XCJmcmFjMTRcIjogXCLCvFwiLFxuXHRcImZyYWMzNFwiOiBcIsK+XCIsXG5cdFwiZ3RcIjogXCI+XCIsXG5cdFwiR1RcIjogXCI+XCIsXG5cdFwiSWFjdXRlXCI6IFwiw41cIixcblx0XCJpYWN1dGVcIjogXCLDrVwiLFxuXHRcIkljaXJjXCI6IFwiw45cIixcblx0XCJpY2lyY1wiOiBcIsOuXCIsXG5cdFwiaWV4Y2xcIjogXCLCoVwiLFxuXHRcIklncmF2ZVwiOiBcIsOMXCIsXG5cdFwiaWdyYXZlXCI6IFwiw6xcIixcblx0XCJpcXVlc3RcIjogXCLCv1wiLFxuXHRcIkl1bWxcIjogXCLDj1wiLFxuXHRcIml1bWxcIjogXCLDr1wiLFxuXHRcImxhcXVvXCI6IFwiwqtcIixcblx0XCJsdFwiOiBcIjxcIixcblx0XCJMVFwiOiBcIjxcIixcblx0XCJtYWNyXCI6IFwiwq9cIixcblx0XCJtaWNyb1wiOiBcIsK1XCIsXG5cdFwibWlkZG90XCI6IFwiwrdcIixcblx0XCJuYnNwXCI6IFwiwqBcIixcblx0XCJub3RcIjogXCLCrFwiLFxuXHRcIk50aWxkZVwiOiBcIsORXCIsXG5cdFwibnRpbGRlXCI6IFwiw7FcIixcblx0XCJPYWN1dGVcIjogXCLDk1wiLFxuXHRcIm9hY3V0ZVwiOiBcIsOzXCIsXG5cdFwiT2NpcmNcIjogXCLDlFwiLFxuXHRcIm9jaXJjXCI6IFwiw7RcIixcblx0XCJPZ3JhdmVcIjogXCLDklwiLFxuXHRcIm9ncmF2ZVwiOiBcIsOyXCIsXG5cdFwib3JkZlwiOiBcIsKqXCIsXG5cdFwib3JkbVwiOiBcIsK6XCIsXG5cdFwiT3NsYXNoXCI6IFwiw5hcIixcblx0XCJvc2xhc2hcIjogXCLDuFwiLFxuXHRcIk90aWxkZVwiOiBcIsOVXCIsXG5cdFwib3RpbGRlXCI6IFwiw7VcIixcblx0XCJPdW1sXCI6IFwiw5ZcIixcblx0XCJvdW1sXCI6IFwiw7ZcIixcblx0XCJwYXJhXCI6IFwiwrZcIixcblx0XCJwbHVzbW5cIjogXCLCsVwiLFxuXHRcInBvdW5kXCI6IFwiwqNcIixcblx0XCJxdW90XCI6IFwiXFxcIlwiLFxuXHRcIlFVT1RcIjogXCJcXFwiXCIsXG5cdFwicmFxdW9cIjogXCLCu1wiLFxuXHRcInJlZ1wiOiBcIsKuXCIsXG5cdFwiUkVHXCI6IFwiwq5cIixcblx0XCJzZWN0XCI6IFwiwqdcIixcblx0XCJzaHlcIjogXCLCrVwiLFxuXHRcInN1cDFcIjogXCLCuVwiLFxuXHRcInN1cDJcIjogXCLCslwiLFxuXHRcInN1cDNcIjogXCLCs1wiLFxuXHRcInN6bGlnXCI6IFwiw59cIixcblx0XCJUSE9STlwiOiBcIsOeXCIsXG5cdFwidGhvcm5cIjogXCLDvlwiLFxuXHRcInRpbWVzXCI6IFwiw5dcIixcblx0XCJVYWN1dGVcIjogXCLDmlwiLFxuXHRcInVhY3V0ZVwiOiBcIsO6XCIsXG5cdFwiVWNpcmNcIjogXCLDm1wiLFxuXHRcInVjaXJjXCI6IFwiw7tcIixcblx0XCJVZ3JhdmVcIjogXCLDmVwiLFxuXHRcInVncmF2ZVwiOiBcIsO5XCIsXG5cdFwidW1sXCI6IFwiwqhcIixcblx0XCJVdW1sXCI6IFwiw5xcIixcblx0XCJ1dW1sXCI6IFwiw7xcIixcblx0XCJZYWN1dGVcIjogXCLDnVwiLFxuXHRcInlhY3V0ZVwiOiBcIsO9XCIsXG5cdFwieWVuXCI6IFwiwqVcIixcblx0XCJ5dW1sXCI6IFwiw79cIlxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL2xlZ2FjeS5qc29uXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkZWNvZGVNYXAgPSByZXF1aXJlKFwiLi4vbWFwcy9kZWNvZGUuanNvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVDb2RlUG9pbnQ7XG5cbi8vIG1vZGlmaWVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvaGUvYmxvYi9tYXN0ZXIvc3JjL2hlLmpzI0w5NC1MMTE5XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnQoY29kZVBvaW50KXtcblxuXHRpZigoY29kZVBvaW50ID49IDB4RDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhERkZGKSB8fCBjb2RlUG9pbnQgPiAweDEwRkZGRil7XG5cdFx0cmV0dXJuIFwiXFx1RkZGRFwiO1xuXHR9XG5cblx0aWYoY29kZVBvaW50IGluIGRlY29kZU1hcCl7XG5cdFx0Y29kZVBvaW50ID0gZGVjb2RlTWFwW2NvZGVQb2ludF07XG5cdH1cblxuXHR2YXIgb3V0cHV0ID0gXCJcIjtcblxuXHRpZihjb2RlUG9pbnQgPiAweEZGRkYpe1xuXHRcdGNvZGVQb2ludCAtPSAweDEwMDAwO1xuXHRcdG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0Y29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkY7XG5cdH1cblxuXHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIjBcIjogNjU1MzMsXG5cdFwiMTI4XCI6IDgzNjQsXG5cdFwiMTMwXCI6IDgyMTgsXG5cdFwiMTMxXCI6IDQwMixcblx0XCIxMzJcIjogODIyMixcblx0XCIxMzNcIjogODIzMCxcblx0XCIxMzRcIjogODIyNCxcblx0XCIxMzVcIjogODIyNSxcblx0XCIxMzZcIjogNzEwLFxuXHRcIjEzN1wiOiA4MjQwLFxuXHRcIjEzOFwiOiAzNTIsXG5cdFwiMTM5XCI6IDgyNDksXG5cdFwiMTQwXCI6IDMzOCxcblx0XCIxNDJcIjogMzgxLFxuXHRcIjE0NVwiOiA4MjE2LFxuXHRcIjE0NlwiOiA4MjE3LFxuXHRcIjE0N1wiOiA4MjIwLFxuXHRcIjE0OFwiOiA4MjIxLFxuXHRcIjE0OVwiOiA4MjI2LFxuXHRcIjE1MFwiOiA4MjExLFxuXHRcIjE1MVwiOiA4MjEyLFxuXHRcIjE1MlwiOiA3MzIsXG5cdFwiMTUzXCI6IDg0ODIsXG5cdFwiMTU0XCI6IDM1Myxcblx0XCIxNTVcIjogODI1MCxcblx0XCIxNTZcIjogMzM5LFxuXHRcIjE1OFwiOiAzODIsXG5cdFwiMTU5XCI6IDM3NlxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL2RlY29kZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTm9kZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG52YXIgbm9ybWFsaXplUmVmZXJlbmNlID0gcmVxdWlyZSgnLi9ub3JtYWxpemUtcmVmZXJlbmNlJyk7XG5cbnZhciBub3JtYWxpemVVUkkgPSBjb21tb24ubm9ybWFsaXplVVJJO1xudmFyIHVuZXNjYXBlU3RyaW5nID0gY29tbW9uLnVuZXNjYXBlU3RyaW5nO1xudmFyIGZyb21Db2RlUG9pbnQgPSByZXF1aXJlKCcuL2Zyb20tY29kZS1wb2ludC5qcycpO1xudmFyIGRlY29kZUhUTUwgPSByZXF1aXJlKCdlbnRpdGllcycpLmRlY29kZUhUTUw7XG5yZXF1aXJlKCdzdHJpbmcucHJvdG90eXBlLnJlcGVhdCcpOyAvLyBQb2x5ZmlsbCBmb3IgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcblxuLy8gQ29uc3RhbnRzIGZvciBjaGFyYWN0ZXIgY29kZXM6XG5cbnZhciBDX05FV0xJTkUgPSAxMDtcbnZhciBDX0FTVEVSSVNLID0gNDI7XG52YXIgQ19VTkRFUlNDT1JFID0gOTU7XG52YXIgQ19CQUNLVElDSyA9IDk2O1xudmFyIENfT1BFTl9CUkFDS0VUID0gOTE7XG52YXIgQ19DTE9TRV9CUkFDS0VUID0gOTM7XG52YXIgQ19MRVNTVEhBTiA9IDYwO1xudmFyIENfQkFORyA9IDMzO1xudmFyIENfQkFDS1NMQVNIID0gOTI7XG52YXIgQ19BTVBFUlNBTkQgPSAzODtcbnZhciBDX09QRU5fUEFSRU4gPSA0MDtcbnZhciBDX0NMT1NFX1BBUkVOID0gNDE7XG52YXIgQ19DT0xPTiA9IDU4O1xudmFyIENfU0lOR0xFUVVPVEUgPSAzOTtcbnZhciBDX0RPVUJMRVFVT1RFID0gMzQ7XG5cbi8vIFNvbWUgcmVnZXhwcyB1c2VkIGluIGlubGluZSBwYXJzZXI6XG5cbnZhciBFU0NBUEFCTEUgPSBjb21tb24uRVNDQVBBQkxFO1xudmFyIEVTQ0FQRURfQ0hBUiA9ICdcXFxcXFxcXCcgKyBFU0NBUEFCTEU7XG52YXIgUkVHX0NIQVIgPSAnW15cXFxcXFxcXCgpXFxcXHgwMC1cXFxceDIwXSc7XG52YXIgSU5fUEFSRU5TX05PU1AgPSAnXFxcXCgoJyArIFJFR19DSEFSICsgJ3wnICsgRVNDQVBFRF9DSEFSICsgJ3xcXFxcXFxcXCkqXFxcXCknO1xuXG52YXIgRU5USVRZID0gY29tbW9uLkVOVElUWTtcbnZhciByZUh0bWxUYWcgPSBjb21tb24ucmVIdG1sVGFnO1xuXG52YXIgcmVQdW5jdHVhdGlvbiA9IG5ldyBSZWdFeHAoL15bXFx1MjAwMC1cXHUyMDZGXFx1MkUwMC1cXHUyRTdGXFxcXCchXCIjXFwkJSZcXChcXClcXCpcXCssXFwtXFwuXFwvOjs8PT5cXD9AXFxbXFxdXFxeX2BcXHtcXHxcXH1+XS8pO1xuXG52YXIgcmVMaW5rVGl0bGUgPSBuZXcgUmVnRXhwKFxuICAgICdeKD86XCIoJyArIEVTQ0FQRURfQ0hBUiArICd8W15cIlxcXFx4MDBdKSpcIicgK1xuICAgICAgICAnfCcgK1xuICAgICAgICAnXFwnKCcgKyBFU0NBUEVEX0NIQVIgKyAnfFteXFwnXFxcXHgwMF0pKlxcJycgK1xuICAgICAgICAnfCcgK1xuICAgICAgICAnXFxcXCgoJyArIEVTQ0FQRURfQ0hBUiArICd8W14pXFxcXHgwMF0pKlxcXFwpKScpO1xuXG52YXIgcmVMaW5rRGVzdGluYXRpb25CcmFjZXMgPSBuZXcgUmVnRXhwKFxuICAgICdeKD86WzxdKD86W148PlxcXFxuXFxcXFxcXFxcXFxceDAwXScgKyAnfCcgKyBFU0NBUEVEX0NIQVIgKyAnfCcgKyAnXFxcXFxcXFwpKls+XSknKTtcblxudmFyIHJlTGlua0Rlc3RpbmF0aW9uID0gbmV3IFJlZ0V4cChcbiAgICAnXig/OicgKyBSRUdfQ0hBUiArICcrfCcgKyBFU0NBUEVEX0NIQVIgKyAnfFxcXFxcXFxcfCcgKyBJTl9QQVJFTlNfTk9TUCArICcpKicpO1xuXG52YXIgcmVFc2NhcGFibGUgPSBuZXcgUmVnRXhwKCdeJyArIEVTQ0FQQUJMRSk7XG5cbnZhciByZUVudGl0eUhlcmUgPSBuZXcgUmVnRXhwKCdeJyArIEVOVElUWSwgJ2knKTtcblxudmFyIHJlVGlja3MgPSAvYCsvO1xuXG52YXIgcmVUaWNrc0hlcmUgPSAvXmArLztcblxudmFyIHJlRWxsaXBzZXMgPSAvXFwuXFwuXFwuL2c7XG5cbnZhciByZURhc2ggPSAvLS0rL2c7XG5cbnZhciByZUVtYWlsQXV0b2xpbmsgPSAvXjwoW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKik+LztcblxudmFyIHJlQXV0b2xpbmsgPSAvXjwoPzpjb2FwfGRvaXxqYXZhc2NyaXB0fGFhYXxhYWFzfGFib3V0fGFjYXB8Y2FwfGNpZHxjcmlkfGRhdGF8ZGF2fGRpY3R8ZG5zfGZpbGV8ZnRwfGdlb3xnb3xnb3BoZXJ8aDMyM3xodHRwfGh0dHBzfGlheHxpY2FwfGltfGltYXB8aW5mb3xpcHB8aXJpc3xpcmlzLmJlZXB8aXJpcy54cGN8aXJpcy54cGNzfGlyaXMubHd6fGxkYXB8bWFpbHRvfG1pZHxtc3JwfG1zcnBzfG10cXB8bXVwZGF0ZXxuZXdzfG5mc3xuaXxuaWh8bm50cHxvcGFxdWVsb2NrdG9rZW58cG9wfHByZXN8cnRzcHxzZXJ2aWNlfHNlc3Npb258c2h0dHB8c2lldmV8c2lwfHNpcHN8c21zfHNubXB8c29hcC5iZWVwfHNvYXAuYmVlcHN8dGFnfHRlbHx0ZWxuZXR8dGZ0cHx0aGlzbWVzc2FnZXx0bjMyNzB8dGlwfHR2fHVybnx2ZW1taXx3c3x3c3N8eGNvbnx4Y29uLXVzZXJpZHx4bWxycGMuYmVlcHx4bWxycGMuYmVlcHN8eG1wcHx6MzkuNTByfHozOS41MHN8YWRpdW14dHJhfGFmcHxhZnN8YWltfGFwdHxhdHRhY2htZW50fGF3fGJlc2hhcmV8Yml0Y29pbnxib2xvfGNhbGx0b3xjaHJvbWV8Y2hyb21lLWV4dGVuc2lvbnxjb20tZXZlbnRicml0ZS1hdHRlbmRlZXxjb250ZW50fGN2c3xkbG5hLXBsYXlzaW5nbGV8ZGxuYS1wbGF5Y29udGFpbmVyfGR0bnxkdmJ8ZWQya3xmYWNldGltZXxmZWVkfGZpbmdlcnxmaXNofGdnfGdpdHxnaXptb3Byb2plY3R8Z3RhbGt8aGNwfGljb258aXBufGlyY3xpcmM2fGlyY3N8aXRtc3xqYXJ8am1zfGtleXBhcmN8bGFzdGZtfGxkYXBzfG1hZ25ldHxtYXBzfG1hcmtldHxtZXNzYWdlfG1tc3xtcy1oZWxwfG1zbmltfG11bWJsZXxtdm58bm90ZXN8b2lkfHBhbG18cGFwYXJhenppfHBsYXRmb3JtfHByb3h5fHBzeWN8cXVlcnl8cmVzfHJlc291cmNlfHJtaXxyc3luY3xydG1wfHNlY29uZGxpZmV8c2Z0cHxzZ258c2t5cGV8c21ifHNvbGRhdHxzcG90aWZ5fHNzaHxzdGVhbXxzdm58dGVhbXNwZWFrfHRoaW5nc3x1ZHB8dW5yZWFsfHV0MjAwNHx2ZW50cmlsb3x2aWV3LXNvdXJjZXx3ZWJjYWx8d3RhaXx3eWNpd3lnfHhmaXJlfHhyaXx5bXNncik6W148PlxceDAwLVxceDIwXSo+L2k7XG5cbnZhciByZVNwbmwgPSAvXiAqKD86XFxuICopPy87XG5cbnZhciByZVdoaXRlc3BhY2VDaGFyID0gL15cXHMvO1xuXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccysvZztcblxudmFyIHJlRmluYWxTcGFjZSA9IC8gKiQvO1xuXG52YXIgcmVJbml0aWFsU3BhY2UgPSAvXiAqLztcblxudmFyIHJlU3BhY2VBdEVuZE9mTGluZSA9IC9eICooPzpcXG58JCkvO1xuXG52YXIgcmVMaW5rTGFiZWwgPSBuZXcgUmVnRXhwKCdeXFxcXFsoPzpbXlxcXFxcXFxcXFxcXFtcXFxcXV18JyArIEVTQ0FQRURfQ0hBUiArXG4gICd8XFxcXFxcXFwpezAsMTAwMH1cXFxcXScpO1xuXG4vLyBNYXRjaGVzIGEgc3RyaW5nIG9mIG5vbi1zcGVjaWFsIGNoYXJhY3RlcnMuXG52YXIgcmVNYWluID0gL15bXlxcbmBcXFtcXF1cXFxcITwmKl8nXCJdKy9tO1xuXG52YXIgdGV4dCA9IGZ1bmN0aW9uKHMpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKCdUZXh0Jyk7XG4gICAgbm9kZS5fbGl0ZXJhbCA9IHM7XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG4vLyBJTkxJTkUgUEFSU0VSXG5cbi8vIFRoZXNlIGFyZSBtZXRob2RzIG9mIGFuIElubGluZVBhcnNlciBvYmplY3QsIGRlZmluZWQgYmVsb3cuXG4vLyBBbiBJbmxpbmVQYXJzZXIga2VlcHMgdHJhY2sgb2YgYSBzdWJqZWN0IChhIHN0cmluZyB0byBiZVxuLy8gcGFyc2VkKSBhbmQgYSBwb3NpdGlvbiBpbiB0aGF0IHN1YmplY3QuXG5cbi8vIElmIHJlIG1hdGNoZXMgYXQgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgc3ViamVjdCwgYWR2YW5jZVxuLy8gcG9zaXRpb24gaW4gc3ViamVjdCBhbmQgcmV0dXJuIHRoZSBtYXRjaDsgb3RoZXJ3aXNlIHJldHVybiBudWxsLlxudmFyIG1hdGNoID0gZnVuY3Rpb24ocmUpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWModGhpcy5zdWJqZWN0LnNsaWNlKHRoaXMucG9zKSk7XG4gICAgaWYgKG0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gbS5pbmRleCArIG1bMF0ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbVswXTtcbiAgICB9XG59O1xuXG4vLyBSZXR1cm5zIHRoZSBjb2RlIGZvciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBjdXJyZW50IHN1YmplY3QgcG9zaXRpb24sIG9yIC0xXG4vLyB0aGVyZSBhcmUgbm8gbW9yZSBjaGFyYWN0ZXJzLlxudmFyIHBlZWsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wb3MgPCB0aGlzLnN1YmplY3QubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn07XG5cbi8vIFBhcnNlIHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzLCBpbmNsdWRpbmcgYXQgbW9zdCBvbmUgbmV3bGluZVxudmFyIHNwbmwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1hdGNoKHJlU3BubCk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBbGwgb2YgdGhlIHBhcnNlcnMgYmVsb3cgdHJ5IHRvIG1hdGNoIHNvbWV0aGluZyBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuLy8gaW4gdGhlIHN1YmplY3QuICBJZiB0aGV5IHN1Y2NlZWQgaW4gbWF0Y2hpbmcgYW55dGhpbmcsIHRoZXlcbi8vIHJldHVybiB0aGUgaW5saW5lIG1hdGNoZWQsIGFkdmFuY2luZyB0aGUgc3ViamVjdC5cblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBiYWNrdGlja3MsIGFkZGluZyBlaXRoZXIgYSBiYWNrdGljayBjb2RlIHNwYW4gb3IgYVxuLy8gbGl0ZXJhbCBzZXF1ZW5jZSBvZiBiYWNrdGlja3MuXG52YXIgcGFyc2VCYWNrdGlja3MgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciB0aWNrcyA9IHRoaXMubWF0Y2gocmVUaWNrc0hlcmUpO1xuICAgIGlmICh0aWNrcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhZnRlck9wZW5UaWNrcyA9IHRoaXMucG9zO1xuICAgIHZhciBtYXRjaGVkO1xuICAgIHZhciBub2RlO1xuICAgIHdoaWxlICgobWF0Y2hlZCA9IHRoaXMubWF0Y2gocmVUaWNrcykpICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChtYXRjaGVkID09PSB0aWNrcykge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCdDb2RlJyk7XG4gICAgICAgICAgICBub2RlLl9saXRlcmFsID0gdGhpcy5zdWJqZWN0LnNsaWNlKGFmdGVyT3BlblRpY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zIC0gdGlja3MubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpLnJlcGxhY2UocmVXaGl0ZXNwYWNlLCAnICcpO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBnb3QgaGVyZSwgd2UgZGlkbid0IG1hdGNoIGEgY2xvc2luZyBiYWNrdGljayBzZXF1ZW5jZS5cbiAgICB0aGlzLnBvcyA9IGFmdGVyT3BlblRpY2tzO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQodGlja3MpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFBhcnNlIGEgYmFja3NsYXNoLWVzY2FwZWQgc3BlY2lhbCBjaGFyYWN0ZXIsIGFkZGluZyBlaXRoZXIgdGhlIGVzY2FwZWRcbi8vIGNoYXJhY3RlciwgYSBoYXJkIGxpbmUgYnJlYWsgKGlmIHRoZSBiYWNrc2xhc2ggaXMgZm9sbG93ZWQgYnkgYSBuZXdsaW5lKSxcbi8vIG9yIGEgbGl0ZXJhbCBiYWNrc2xhc2ggdG8gdGhlIGJsb2NrJ3MgY2hpbGRyZW4uICBBc3N1bWVzIGN1cnJlbnQgY2hhcmFjdGVyXG4vLyBpcyBhIGJhY2tzbGFzaC5cbnZhciBwYXJzZUJhY2tzbGFzaCA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHN1YmogPSB0aGlzLnN1YmplY3Q7XG4gICAgdmFyIG5vZGU7XG4gICAgdGhpcy5wb3MgKz0gMTtcbiAgICBpZiAodGhpcy5wZWVrKCkgPT09IENfTkVXTElORSkge1xuICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICBub2RlID0gbmV3IE5vZGUoJ0hhcmRicmVhaycpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9IGVsc2UgaWYgKHJlRXNjYXBhYmxlLnRlc3Qoc3Viai5jaGFyQXQodGhpcy5wb3MpKSkge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KHN1YmouY2hhckF0KHRoaXMucG9zKSkpO1xuICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJ1xcXFwnKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhbiBhdXRvbGluayAoVVJMIG9yIGVtYWlsIGluIHBvaW50eSBicmFja2V0cykuXG52YXIgcGFyc2VBdXRvbGluayA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG07XG4gICAgdmFyIGRlc3Q7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKChtID0gdGhpcy5tYXRjaChyZUVtYWlsQXV0b2xpbmspKSkge1xuICAgICAgICBkZXN0ID0gbS5zbGljZSgxLCBtLmxlbmd0aCAtIDEpO1xuICAgICAgICBub2RlID0gbmV3IE5vZGUoJ0xpbmsnKTtcbiAgICAgICAgbm9kZS5fZGVzdGluYXRpb24gPSBub3JtYWxpemVVUkkoJ21haWx0bzonICsgZGVzdCk7XG4gICAgICAgIG5vZGUuX3RpdGxlID0gJyc7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dChkZXN0KSk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChtID0gdGhpcy5tYXRjaChyZUF1dG9saW5rKSkpIHtcbiAgICAgICAgZGVzdCA9IG0uc2xpY2UoMSwgbS5sZW5ndGggLSAxKTtcbiAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCdMaW5rJyk7XG4gICAgICAgIG5vZGUuX2Rlc3RpbmF0aW9uID0gbm9ybWFsaXplVVJJKGRlc3QpO1xuICAgICAgICBub2RlLl90aXRsZSA9ICcnO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRleHQoZGVzdCkpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYSByYXcgSFRNTCB0YWcuXG52YXIgcGFyc2VIdG1sVGFnID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbSA9IHRoaXMubWF0Y2gocmVIdG1sVGFnKTtcbiAgICBpZiAobSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZSgnSHRtbCcpO1xuICAgICAgICBub2RlLl9saXRlcmFsID0gbTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cbi8vIFNjYW4gYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHdpdGggY29kZSBjYywgYW5kIHJldHVybiBpbmZvcm1hdGlvbiBhYm91dFxuLy8gdGhlIG51bWJlciBvZiBkZWxpbWl0ZXJzIGFuZCB3aGV0aGVyIHRoZXkgYXJlIHBvc2l0aW9uZWQgc3VjaCB0aGF0XG4vLyB0aGV5IGNhbiBvcGVuIGFuZC9vciBjbG9zZSBlbXBoYXNpcyBvciBzdHJvbmcgZW1waGFzaXMuICBBIHV0aWxpdHlcbi8vIGZ1bmN0aW9uIGZvciBzdHJvbmcvZW1waCBwYXJzaW5nLlxudmFyIHNjYW5EZWxpbXMgPSBmdW5jdGlvbihjYykge1xuICAgIHZhciBudW1kZWxpbXMgPSAwO1xuICAgIHZhciBjaGFyX2JlZm9yZSwgY2hhcl9hZnRlciwgY2NfYWZ0ZXI7XG4gICAgdmFyIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG4gICAgdmFyIGxlZnRfZmxhbmtpbmcsIHJpZ2h0X2ZsYW5raW5nLCBjYW5fb3BlbiwgY2FuX2Nsb3NlO1xuICAgIHZhciBhZnRlcl9pc193aGl0ZXNwYWNlLCBhZnRlcl9pc19wdW5jdHVhdGlvbiwgYmVmb3JlX2lzX3doaXRlc3BhY2UsIGJlZm9yZV9pc19wdW5jdHVhdGlvbjtcblxuICAgIGlmIChjYyA9PT0gQ19TSU5HTEVRVU9URSB8fCBjYyA9PT0gQ19ET1VCTEVRVU9URSkge1xuICAgICAgICBudW1kZWxpbXMrKztcbiAgICAgICAgdGhpcy5wb3MrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgPT09IGNjKSB7XG4gICAgICAgICAgICBudW1kZWxpbXMrKztcbiAgICAgICAgICAgIHRoaXMucG9zKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobnVtZGVsaW1zID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYXJfYmVmb3JlID0gc3RhcnRwb3MgPT09IDAgPyAnXFxuJyA6IHRoaXMuc3ViamVjdC5jaGFyQXQoc3RhcnRwb3MgLSAxKTtcblxuICAgIGNjX2FmdGVyID0gdGhpcy5wZWVrKCk7XG4gICAgaWYgKGNjX2FmdGVyID09PSAtMSkge1xuICAgICAgICBjaGFyX2FmdGVyID0gJ1xcbic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hhcl9hZnRlciA9IGZyb21Db2RlUG9pbnQoY2NfYWZ0ZXIpO1xuICAgIH1cblxuICAgIGFmdGVyX2lzX3doaXRlc3BhY2UgPSByZVdoaXRlc3BhY2VDaGFyLnRlc3QoY2hhcl9hZnRlcik7XG4gICAgYWZ0ZXJfaXNfcHVuY3R1YXRpb24gPSByZVB1bmN0dWF0aW9uLnRlc3QoY2hhcl9hZnRlcik7XG4gICAgYmVmb3JlX2lzX3doaXRlc3BhY2UgPSByZVdoaXRlc3BhY2VDaGFyLnRlc3QoY2hhcl9iZWZvcmUpO1xuICAgIGJlZm9yZV9pc19wdW5jdHVhdGlvbiA9IHJlUHVuY3R1YXRpb24udGVzdChjaGFyX2JlZm9yZSk7XG5cbiAgICBsZWZ0X2ZsYW5raW5nID0gIWFmdGVyX2lzX3doaXRlc3BhY2UgJiZcbiAgICAgICAgICAgICEoYWZ0ZXJfaXNfcHVuY3R1YXRpb24gJiYgIWJlZm9yZV9pc193aGl0ZXNwYWNlICYmICFiZWZvcmVfaXNfcHVuY3R1YXRpb24pO1xuICAgIHJpZ2h0X2ZsYW5raW5nID0gIWJlZm9yZV9pc193aGl0ZXNwYWNlICYmXG4gICAgICAgICAgICAhKGJlZm9yZV9pc19wdW5jdHVhdGlvbiAmJiAhYWZ0ZXJfaXNfd2hpdGVzcGFjZSAmJiAhYWZ0ZXJfaXNfcHVuY3R1YXRpb24pO1xuICAgIGlmIChjYyA9PT0gQ19VTkRFUlNDT1JFKSB7XG4gICAgICAgIGNhbl9vcGVuID0gbGVmdF9mbGFua2luZyAmJlxuICAgICAgICAgICAgKCFyaWdodF9mbGFua2luZyB8fCBiZWZvcmVfaXNfcHVuY3R1YXRpb24pO1xuICAgICAgICBjYW5fY2xvc2UgPSByaWdodF9mbGFua2luZyAmJlxuICAgICAgICAgICAgKCFsZWZ0X2ZsYW5raW5nIHx8IGFmdGVyX2lzX3B1bmN0dWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYW5fb3BlbiA9IGxlZnRfZmxhbmtpbmc7XG4gICAgICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nO1xuICAgIH1cbiAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgIHJldHVybiB7IG51bWRlbGltczogbnVtZGVsaW1zLFxuICAgICAgICAgICAgIGNhbl9vcGVuOiBjYW5fb3BlbixcbiAgICAgICAgICAgICBjYW5fY2xvc2U6IGNhbl9jbG9zZSB9O1xufTtcblxuLy8gSGFuZGxlIGEgZGVsaW1pdGVyIG1hcmtlciBmb3IgZW1waGFzaXMgb3IgYSBxdW90ZS5cbnZhciBoYW5kbGVEZWxpbSA9IGZ1bmN0aW9uKGNjLCBibG9jaykge1xuICAgIHZhciByZXMgPSB0aGlzLnNjYW5EZWxpbXMoY2MpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIG51bWRlbGltcyA9IHJlcy5udW1kZWxpbXM7XG4gICAgdmFyIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG4gICAgdmFyIGNvbnRlbnRzO1xuXG4gICAgdGhpcy5wb3MgKz0gbnVtZGVsaW1zO1xuICAgIGlmIChjYyA9PT0gQ19TSU5HTEVRVU9URSkge1xuICAgICAgICBjb250ZW50cyA9IFwiXFx1MjAxOVwiO1xuICAgIH0gZWxzZSBpZiAoY2MgPT09IENfRE9VQkxFUVVPVEUpIHtcbiAgICAgICAgY29udGVudHMgPSBcIlxcdTIwMUNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50cyA9IHRoaXMuc3ViamVjdC5zbGljZShzdGFydHBvcywgdGhpcy5wb3MpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IHRleHQoY29udGVudHMpO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgLy8gQWRkIGVudHJ5IHRvIHN0YWNrIGZvciB0aGlzIG9wZW5lclxuICAgIHRoaXMuZGVsaW1pdGVycyA9IHsgY2M6IGNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZGVsaW1zOiBudW1kZWxpbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHRoaXMuZGVsaW1pdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5fb3BlbjogcmVzLmNhbl9vcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuX2Nsb3NlOiByZXMuY2FuX2Nsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlIH07XG4gICAgaWYgKHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRlbGltaXRlcnMucHJldmlvdXMubmV4dCA9IHRoaXMuZGVsaW1pdGVycztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxufTtcblxudmFyIHJlbW92ZURlbGltaXRlciA9IGZ1bmN0aW9uKGRlbGltKSB7XG4gICAgaWYgKGRlbGltLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGltLnByZXZpb3VzLm5leHQgPSBkZWxpbS5uZXh0O1xuICAgIH1cbiAgICBpZiAoZGVsaW0ubmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAvLyB0b3Agb2Ygc3RhY2tcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzID0gZGVsaW0ucHJldmlvdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsaW0ubmV4dC5wcmV2aW91cyA9IGRlbGltLnByZXZpb3VzO1xuICAgIH1cbn07XG5cbnZhciByZW1vdmVEZWxpbWl0ZXJzQmV0d2VlbiA9IGZ1bmN0aW9uKGJvdHRvbSwgdG9wKSB7XG4gICAgaWYgKGJvdHRvbS5uZXh0ICE9PSB0b3ApIHtcbiAgICAgICAgYm90dG9tLm5leHQgPSB0b3A7XG4gICAgICAgIHRvcC5wcmV2aW91cyA9IGJvdHRvbTtcbiAgICB9XG59O1xuXG52YXIgcHJvY2Vzc0VtcGhhc2lzID0gZnVuY3Rpb24oc3RhY2tfYm90dG9tKSB7XG4gICAgdmFyIG9wZW5lciwgY2xvc2VyLCBvbGRfY2xvc2VyO1xuICAgIHZhciBvcGVuZXJfaW5sLCBjbG9zZXJfaW5sO1xuICAgIHZhciB0ZW1wc3RhY2s7XG4gICAgdmFyIHVzZV9kZWxpbXM7XG4gICAgdmFyIHRtcCwgbmV4dDtcbiAgICB2YXIgb3BlbmVyX2ZvdW5kO1xuICAgIHZhciBvcGVuZXJzX2JvdHRvbSA9IFtdO1xuXG4gICAgb3BlbmVyc19ib3R0b21bQ19VTkRFUlNDT1JFXSA9IHN0YWNrX2JvdHRvbTtcbiAgICBvcGVuZXJzX2JvdHRvbVtDX0FTVEVSSVNLXSA9IHN0YWNrX2JvdHRvbTtcbiAgICBvcGVuZXJzX2JvdHRvbVtDX1NJTkdMRVFVT1RFXSA9IHN0YWNrX2JvdHRvbTtcbiAgICBvcGVuZXJzX2JvdHRvbVtDX0RPVUJMRVFVT1RFXSA9IHN0YWNrX2JvdHRvbTtcblxuICAgIC8vIGZpbmQgZmlyc3QgY2xvc2VyIGFib3ZlIHN0YWNrX2JvdHRvbTpcbiAgICBjbG9zZXIgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgd2hpbGUgKGNsb3NlciAhPT0gbnVsbCAmJiBjbG9zZXIucHJldmlvdXMgIT09IHN0YWNrX2JvdHRvbSkge1xuICAgICAgICBjbG9zZXIgPSBjbG9zZXIucHJldmlvdXM7XG4gICAgfVxuICAgIC8vIG1vdmUgZm9yd2FyZCwgbG9va2luZyBmb3IgY2xvc2VycywgYW5kIGhhbmRsaW5nIGVhY2hcbiAgICB3aGlsZSAoY2xvc2VyICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBjbG9zZXJjYyA9IGNsb3Nlci5jYztcbiAgICAgICAgaWYgKCEoY2xvc2VyLmNhbl9jbG9zZSAmJiAoY2xvc2VyY2MgPT09IENfVU5ERVJTQ09SRSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJjYyA9PT0gQ19BU1RFUklTSyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJjYyA9PT0gQ19TSU5HTEVRVU9URSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJjYyA9PT0gQ19ET1VCTEVRVU9URSkpKSB7XG4gICAgICAgICAgICBjbG9zZXIgPSBjbG9zZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvdW5kIGVtcGhhc2lzIGNsb3Nlci4gbm93IGxvb2sgYmFjayBmb3IgZmlyc3QgbWF0Y2hpbmcgb3BlbmVyOlxuICAgICAgICAgICAgb3BlbmVyID0gY2xvc2VyLnByZXZpb3VzO1xuICAgICAgICAgICAgb3BlbmVyX2ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAob3BlbmVyICE9PSBudWxsICYmIG9wZW5lciAhPT0gc3RhY2tfYm90dG9tICYmXG4gICAgICAgICAgICAgICAgICAgb3BlbmVyICE9PSBvcGVuZXJzX2JvdHRvbVtjbG9zZXJjY10pIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVyLmNjID09PSBjbG9zZXIuY2MgJiYgb3BlbmVyLmNhbl9vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9mb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcGVuZXIgPSBvcGVuZXIucHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbGRfY2xvc2VyID0gY2xvc2VyO1xuXG4gICAgICAgICAgICBpZiAoY2xvc2VyY2MgPT09IENfQVNURVJJU0sgfHwgY2xvc2VyY2MgPT09IENfVU5ERVJTQ09SRSkge1xuICAgICAgICAgICAgICAgIGlmICghb3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBhY3R1YWwgbnVtYmVyIG9mIGRlbGltaXRlcnMgdXNlZCBmcm9tIGNsb3NlclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VyLm51bWRlbGltcyA8IDMgfHwgb3BlbmVyLm51bWRlbGltcyA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9kZWxpbXMgPSBjbG9zZXIubnVtZGVsaW1zIDw9IG9wZW5lci5udW1kZWxpbXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlci5udW1kZWxpbXMgOiBvcGVuZXIubnVtZGVsaW1zO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX2RlbGltcyA9IGNsb3Nlci5udW1kZWxpbXMgJSAyID09PSAwID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sID0gb3BlbmVyLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwgPSBjbG9zZXIubm9kZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdXNlZCBkZWxpbWl0ZXJzIGZyb20gc3RhY2sgZWx0cyBhbmQgaW5saW5lc1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXIubnVtZGVsaW1zIC09IHVzZV9kZWxpbXM7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlci5udW1kZWxpbXMgLT0gdXNlX2RlbGltcztcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5fbGl0ZXJhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLl9saXRlcmFsLnNsaWNlKDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuX2xpdGVyYWwubGVuZ3RoIC0gdXNlX2RlbGltcyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwuX2xpdGVyYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC5fbGl0ZXJhbC5zbGljZSgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sLl9saXRlcmFsLmxlbmd0aCAtIHVzZV9kZWxpbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1aWxkIGNvbnRlbnRzIGZvciBuZXcgZW1waCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbXBoID0gbmV3IE5vZGUodXNlX2RlbGltcyA9PT0gMSA/ICdFbXBoJyA6ICdTdHJvbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0bXAgPSBvcGVuZXJfaW5sLl9uZXh0O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodG1wICYmIHRtcCAhPT0gY2xvc2VyX2lubCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRtcC5fbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcC51bmxpbmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGguYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IG5leHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLmluc2VydEFmdGVyKGVtcGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBlbHRzIGJldHdlZW4gb3BlbmVyIGFuZCBjbG9zZXIgaW4gZGVsaW1pdGVycyBzdGFja1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVEZWxpbWl0ZXJzQmV0d2VlbihvcGVuZXIsIGNsb3Nlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgb3BlbmVyIGhhcyAwIGRlbGltcywgcmVtb3ZlIGl0IGFuZCB0aGUgaW5saW5lXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVuZXIubnVtZGVsaW1zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLnVubGluaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIob3BlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXIubnVtZGVsaW1zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sLnVubGluaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcHN0YWNrID0gY2xvc2VyLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihjbG9zZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyID0gdGVtcHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xvc2VyY2MgPT09IENfU0lOR0xFUVVPVEUpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXIubm9kZS5fbGl0ZXJhbCA9IFwiXFx1MjAxOVwiO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZXJfZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyLm5vZGUuX2xpdGVyYWwgPSBcIlxcdTIwMThcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xvc2VyY2MgPT09IENfRE9VQkxFUVVPVEUpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXIubm9kZS5fbGl0ZXJhbCA9IFwiXFx1MjAxRFwiO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZXJfZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyLm5vZGUubGl0ZXJhbCA9IFwiXFx1MjAxQ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZXIgPSBjbG9zZXIubmV4dDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvcGVuZXJfZm91bmQpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgbG93ZXIgYm91bmQgZm9yIGZ1dHVyZSBzZWFyY2hlcyBmb3Igb3BlbmVyczpcbiAgICAgICAgICAgICAgICBvcGVuZXJzX2JvdHRvbVtjbG9zZXJjY10gPSBvbGRfY2xvc2VyLnByZXZpb3VzO1xuICAgICAgICAgICAgICAgIGlmICghb2xkX2Nsb3Nlci5jYW5fb3Blbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gcmVtb3ZlIGEgY2xvc2VyIHRoYXQgY2FuJ3QgYmUgYW4gb3BlbmVyLFxuICAgICAgICAgICAgICAgICAgICAvLyBvbmNlIHdlJ3ZlIHNlZW4gdGhlcmUncyBubyBtYXRjaGluZyBvcGVuZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKG9sZF9jbG9zZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBkZWxpbWl0ZXJzXG4gICAgd2hpbGUgKHRoaXMuZGVsaW1pdGVycyAhPT0gbnVsbCAmJiB0aGlzLmRlbGltaXRlcnMgIT09IHN0YWNrX2JvdHRvbSkge1xuICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcih0aGlzLmRlbGltaXRlcnMpO1xuICAgIH1cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgbGluayB0aXRsZSAoc2FucyBxdW90ZXMpLCByZXR1cm5pbmcgdGhlIHN0cmluZ1xuLy8gb3IgbnVsbCBpZiBubyBtYXRjaC5cbnZhciBwYXJzZUxpbmtUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aXRsZSA9IHRoaXMubWF0Y2gocmVMaW5rVGl0bGUpO1xuICAgIGlmICh0aXRsZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjaG9wIG9mZiBxdW90ZXMgZnJvbSB0aXRsZSBhbmQgdW5lc2NhcGU6XG4gICAgICAgIHJldHVybiB1bmVzY2FwZVN0cmluZyh0aXRsZS5zdWJzdHIoMSwgdGl0bGUubGVuZ3RoIC0gMikpO1xuICAgIH1cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgbGluayBkZXN0aW5hdGlvbiwgcmV0dXJuaW5nIHRoZSBzdHJpbmcgb3Jcbi8vIG51bGwgaWYgbm8gbWF0Y2guXG52YXIgcGFyc2VMaW5rRGVzdGluYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzID0gdGhpcy5tYXRjaChyZUxpbmtEZXN0aW5hdGlvbkJyYWNlcyk7XG4gICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICByZXMgPSB0aGlzLm1hdGNoKHJlTGlua0Rlc3RpbmF0aW9uKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplVVJJKHVuZXNjYXBlU3RyaW5nKHJlcykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHsgIC8vIGNob3Agb2ZmIHN1cnJvdW5kaW5nIDwuLj46XG4gICAgICAgIHJldHVybiBub3JtYWxpemVVUkkodW5lc2NhcGVTdHJpbmcocmVzLnN1YnN0cigxLCByZXMubGVuZ3RoIC0gMikpKTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGEgbGluayBsYWJlbCwgcmV0dXJuaW5nIG51bWJlciBvZiBjaGFyYWN0ZXJzIHBhcnNlZC5cbnZhciBwYXJzZUxpbmtMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtID0gdGhpcy5tYXRjaChyZUxpbmtMYWJlbCk7XG4gICAgaWYgKG0gPT09IG51bGwgfHwgbS5sZW5ndGggPiAxMDAxKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtLmxlbmd0aDtcbiAgICB9XG59O1xuXG4vLyBBZGQgb3BlbiBicmFja2V0IHRvIGRlbGltaXRlciBzdGFjayBhbmQgYWRkIGEgdGV4dCBub2RlIHRvIGJsb2NrJ3MgY2hpbGRyZW4uXG52YXIgcGFyc2VPcGVuQnJhY2tldCA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG4gICAgdGhpcy5wb3MgKz0gMTtcblxuICAgIHZhciBub2RlID0gdGV4dCgnWycpO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgLy8gQWRkIGVudHJ5IHRvIHN0YWNrIGZvciB0aGlzIG9wZW5lclxuICAgIHRoaXMuZGVsaW1pdGVycyA9IHsgY2M6IENfT1BFTl9CUkFDS0VULFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZGVsaW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiB0aGlzLmRlbGltaXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuX29wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5fY2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0cG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlIH07XG4gICAgaWYgKHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRlbGltaXRlcnMucHJldmlvdXMubmV4dCA9IHRoaXMuZGVsaW1pdGVycztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxufTtcblxuLy8gSUYgbmV4dCBjaGFyYWN0ZXIgaXMgWywgYW5kICEgZGVsaW1pdGVyIHRvIGRlbGltaXRlciBzdGFjayBhbmRcbi8vIGFkZCBhIHRleHQgbm9kZSB0byBibG9jaydzIGNoaWxkcmVuLiAgT3RoZXJ3aXNlIGp1c3QgYWRkIGEgdGV4dCBub2RlLlxudmFyIHBhcnNlQmFuZyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG4gICAgdGhpcy5wb3MgKz0gMTtcbiAgICBpZiAodGhpcy5wZWVrKCkgPT09IENfT1BFTl9CUkFDS0VUKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0ZXh0KCchWycpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgICAgICAvLyBBZGQgZW50cnkgdG8gc3RhY2sgZm9yIHRoaXMgb3BlbmVyXG4gICAgICAgIHRoaXMuZGVsaW1pdGVycyA9IHsgY2M6IENfQkFORyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1kZWxpbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogdGhpcy5kZWxpbWl0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuX29wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuX2Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnRwb3MgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSB9O1xuICAgICAgICBpZiAodGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGltaXRlcnMucHJldmlvdXMubmV4dCA9IHRoaXMuZGVsaW1pdGVycztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJyEnKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gVHJ5IHRvIG1hdGNoIGNsb3NlIGJyYWNrZXQgYWdhaW5zdCBhbiBvcGVuaW5nIGluIHRoZSBkZWxpbWl0ZXJcbi8vIHN0YWNrLiAgQWRkIGVpdGhlciBhIGxpbmsgb3IgaW1hZ2UsIG9yIGEgcGxhaW4gWyBjaGFyYWN0ZXIsXG4vLyB0byBibG9jaydzIGNoaWxkcmVuLiAgSWYgdGhlcmUgaXMgYSBtYXRjaGluZyBkZWxpbWl0ZXIsXG4vLyByZW1vdmUgaXQgZnJvbSB0aGUgZGVsaW1pdGVyIHN0YWNrLlxudmFyIHBhcnNlQ2xvc2VCcmFja2V0ID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3RhcnRwb3M7XG4gICAgdmFyIGlzX2ltYWdlO1xuICAgIHZhciBkZXN0O1xuICAgIHZhciB0aXRsZTtcbiAgICB2YXIgbWF0Y2hlZCA9IGZhbHNlO1xuICAgIHZhciByZWZsYWJlbDtcbiAgICB2YXIgb3BlbmVyO1xuXG4gICAgdGhpcy5wb3MgKz0gMTtcbiAgICBzdGFydHBvcyA9IHRoaXMucG9zO1xuXG4gICAgLy8gbG9vayB0aHJvdWdoIHN0YWNrIG9mIGRlbGltaXRlcnMgZm9yIGEgWyBvciAhW1xuICAgIG9wZW5lciA9IHRoaXMuZGVsaW1pdGVycztcblxuICAgIHdoaWxlIChvcGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG9wZW5lci5jYyA9PT0gQ19PUEVOX0JSQUNLRVQgfHwgb3BlbmVyLmNjID09PSBDX0JBTkcpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5lciA9IG9wZW5lci5wcmV2aW91cztcbiAgICB9XG5cbiAgICBpZiAob3BlbmVyID09PSBudWxsKSB7XG4gICAgICAgIC8vIG5vIG1hdGNoZWQgb3BlbmVyLCBqdXN0IHJldHVybiBhIGxpdGVyYWxcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnXScpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFvcGVuZXIuYWN0aXZlKSB7XG4gICAgICAgIC8vIG5vIG1hdGNoZWQgb3BlbmVyLCBqdXN0IHJldHVybiBhIGxpdGVyYWxcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnXScpKTtcbiAgICAgICAgLy8gdGFrZSBvcGVuZXIgb2ZmIGVtcGhhc2lzIHN0YWNrXG4gICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKG9wZW5lcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGdvdCBoZXJlLCBvcGVuIGlzIGEgcG90ZW50aWFsIG9wZW5lclxuICAgIGlzX2ltYWdlID0gb3BlbmVyLmNjID09PSBDX0JBTkc7XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIGxpbmsvaW1hZ2VcblxuICAgIC8vIElubGluZSBsaW5rP1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19PUEVOX1BBUkVOKSB7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgICAgIGlmICh0aGlzLnNwbmwoKSAmJlxuICAgICAgICAgICAgKChkZXN0ID0gdGhpcy5wYXJzZUxpbmtEZXN0aW5hdGlvbigpKSAhPT0gbnVsbCkgJiZcbiAgICAgICAgICAgIHRoaXMuc3BubCgpICYmXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUncyBhIHNwYWNlIGJlZm9yZSB0aGUgdGl0bGU6XG4gICAgICAgICAgICAocmVXaGl0ZXNwYWNlQ2hhci50ZXN0KHRoaXMuc3ViamVjdC5jaGFyQXQodGhpcy5wb3MgLSAxKSkgJiZcbiAgICAgICAgICAgICAodGl0bGUgPSB0aGlzLnBhcnNlTGlua1RpdGxlKCkpIHx8IHRydWUpICYmXG4gICAgICAgICAgICB0aGlzLnNwbmwoKSAmJlxuICAgICAgICAgICAgdGhpcy5wZWVrKCkgPT09IENfQ0xPU0VfUEFSRU4pIHtcbiAgICAgICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gTmV4dCwgc2VlIGlmIHRoZXJlJ3MgYSBsaW5rIGxhYmVsXG4gICAgICAgIHZhciBzYXZlcG9zID0gdGhpcy5wb3M7XG4gICAgICAgIHRoaXMuc3BubCgpO1xuICAgICAgICB2YXIgYmVmb3JlbGFiZWwgPSB0aGlzLnBvcztcbiAgICAgICAgdmFyIG4gPSB0aGlzLnBhcnNlTGlua0xhYmVsKCk7XG4gICAgICAgIGlmIChuID09PSAwIHx8IG4gPT09IDIpIHtcbiAgICAgICAgICAgIC8vIGVtcHR5IG9yIG1pc3Npbmcgc2Vjb25kIGxhYmVsXG4gICAgICAgICAgICByZWZsYWJlbCA9IHRoaXMuc3ViamVjdC5zbGljZShvcGVuZXIuaW5kZXgsIHN0YXJ0cG9zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZmxhYmVsID0gdGhpcy5zdWJqZWN0LnNsaWNlKGJlZm9yZWxhYmVsLCBiZWZvcmVsYWJlbCArIG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuID09PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiBzaG9ydGN1dCByZWZlcmVuY2UgbGluaywgcmV3aW5kIGJlZm9yZSBzcGFjZXMgd2Ugc2tpcHBlZC5cbiAgICAgICAgICAgIHRoaXMucG9zID0gc2F2ZXBvcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvb2t1cCByYXdsYWJlbCBpbiByZWZtYXBcbiAgICAgICAgdmFyIGxpbmsgPSB0aGlzLnJlZm1hcFtub3JtYWxpemVSZWZlcmVuY2UocmVmbGFiZWwpXTtcbiAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICAgIGRlc3QgPSBsaW5rLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgdGl0bGUgPSBsaW5rLnRpdGxlO1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGlzX2ltYWdlID8gJ0ltYWdlJyA6ICdMaW5rJyk7XG4gICAgICAgIG5vZGUuX2Rlc3RpbmF0aW9uID0gZGVzdDtcbiAgICAgICAgbm9kZS5fdGl0bGUgPSB0aXRsZSB8fCAnJztcblxuICAgICAgICB2YXIgdG1wLCBuZXh0O1xuICAgICAgICB0bXAgPSBvcGVuZXIubm9kZS5fbmV4dDtcbiAgICAgICAgd2hpbGUgKHRtcCkge1xuICAgICAgICAgICAgbmV4dCA9IHRtcC5fbmV4dDtcbiAgICAgICAgICAgIHRtcC51bmxpbmsoKTtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgICAgIHRtcCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMucHJvY2Vzc0VtcGhhc2lzKG9wZW5lci5wcmV2aW91cyk7XG5cbiAgICAgICAgb3BlbmVyLm5vZGUudW5saW5rKCk7XG5cbiAgICAgICAgLy8gcHJvY2Vzc0VtcGhhc2lzIHdpbGwgcmVtb3ZlIHRoaXMgYW5kIGxhdGVyIGRlbGltaXRlcnMuXG4gICAgICAgIC8vIE5vdywgZm9yIGEgbGluaywgd2UgYWxzbyBkZWFjdGl2YXRlIGVhcmxpZXIgbGluayBvcGVuZXJzLlxuICAgICAgICAvLyAobm8gbGlua3MgaW4gbGlua3MpXG4gICAgICAgIGlmICghaXNfaW1hZ2UpIHtcbiAgICAgICAgICBvcGVuZXIgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgICAgICAgd2hpbGUgKG9wZW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG9wZW5lci5jYyA9PT0gQ19PUEVOX0JSQUNLRVQpIHtcbiAgICAgICAgICAgICAgICBvcGVuZXIuYWN0aXZlID0gZmFsc2U7IC8vIGRlYWN0aXZhdGUgdGhpcyBvcGVuZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wZW5lciA9IG9wZW5lci5wcmV2aW91cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0gZWxzZSB7IC8vIG5vIG1hdGNoXG5cbiAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIob3BlbmVyKTsgIC8vIHJlbW92ZSB0aGlzIG9wZW5lciBmcm9tIHN0YWNrXG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJ10nKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhbiBlbnRpdHkuXG52YXIgcGFyc2VFbnRpdHkgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtO1xuICAgIGlmICgobSA9IHRoaXMubWF0Y2gocmVFbnRpdHlIZXJlKSkpIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChkZWNvZGVIVE1MKG0pKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG4vLyBQYXJzZSBhIHJ1biBvZiBvcmRpbmFyeSBjaGFyYWN0ZXJzLCBvciBhIHNpbmdsZSBjaGFyYWN0ZXIgd2l0aFxuLy8gYSBzcGVjaWFsIG1lYW5pbmcgaW4gbWFya2Rvd24sIGFzIGEgcGxhaW4gc3RyaW5nLlxudmFyIHBhcnNlU3RyaW5nID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlTWFpbikpKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc21hcnQpIHtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoXG4gICAgICAgICAgICAgICAgbS5yZXBsYWNlKHJlRWxsaXBzZXMsIFwiXFx1MjAyNlwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZURhc2gsIGZ1bmN0aW9uKGNoYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnMubGVuZ3RoICUgMyA9PT0gMCkgeyAvLyBJZiBkaXZpc2libGUgYnkgMywgdXNlIGFsbCBlbSBkYXNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbUNvdW50ID0gY2hhcnMubGVuZ3RoIC8gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcnMubGVuZ3RoICUgMiA9PT0gMCkgeyAvLyBJZiBkaXZpc2libGUgYnkgMiwgdXNlIGFsbCBlbiBkYXNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbkNvdW50ID0gY2hhcnMubGVuZ3RoIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcnMubGVuZ3RoICUgMyA9PT0gMikgeyAvLyBJZiAyIGV4dHJhIGRhc2hlcywgdXNlIGVuIGRhc2ggZm9yIGxhc3QgMjsgZW0gZGFzaGVzIGZvciByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5Db3VudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1Db3VudCA9IChjaGFycy5sZW5ndGggLSAyKSAvIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBVc2UgZW4gZGFzaGVzIGZvciBsYXN0IDQgaHlwaGVuczsgZW0gZGFzaGVzIGZvciByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5Db3VudCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1Db3VudCA9IChjaGFycy5sZW5ndGggLSA0KSAvIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcXHUyMDE0XCIucmVwZWF0KGVtQ291bnQpICsgXCJcXHUyMDEzXCIucmVwZWF0KGVuQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbi8vIFBhcnNlIGEgbmV3bGluZS4gIElmIGl0IHdhcyBwcmVjZWRlZCBieSB0d28gc3BhY2VzLCByZXR1cm4gYSBoYXJkXG4vLyBsaW5lIGJyZWFrOyBvdGhlcndpc2UgYSBzb2Z0IGxpbmUgYnJlYWsuXG52YXIgcGFyc2VOZXdsaW5lID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB0aGlzLnBvcyArPSAxOyAvLyBhc3N1bWUgd2UncmUgYXQgYSBcXG5cbiAgICAvLyBjaGVjayBwcmV2aW91cyBub2RlIGZvciB0cmFpbGluZyBzcGFjZXNcbiAgICB2YXIgbGFzdGMgPSBibG9jay5fbGFzdENoaWxkO1xuICAgIGlmIChsYXN0YyAmJiBsYXN0Yy50eXBlID09PSAnVGV4dCcgJiYgbGFzdGMuX2xpdGVyYWxbbGFzdGMuX2xpdGVyYWwubGVuZ3RoIC0gMV0gPT09ICcgJykge1xuICAgICAgICB2YXIgaGFyZGJyZWFrID0gbGFzdGMuX2xpdGVyYWxbbGFzdGMuX2xpdGVyYWwubGVuZ3RoIC0gMl0gPT09ICcgJztcbiAgICAgICAgbGFzdGMuX2xpdGVyYWwgPSBsYXN0Yy5fbGl0ZXJhbC5yZXBsYWNlKHJlRmluYWxTcGFjZSwgJycpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChuZXcgTm9kZShoYXJkYnJlYWsgPyAnSGFyZGJyZWFrJyA6ICdTb2Z0YnJlYWsnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobmV3IE5vZGUoJ1NvZnRicmVhaycpKTtcbiAgICB9XG4gICAgdGhpcy5tYXRjaChyZUluaXRpYWxTcGFjZSk7IC8vIGdvYmJsZSBsZWFkaW5nIHNwYWNlcyBpbiBuZXh0IGxpbmVcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYSBsaW5rIHJlZmVyZW5jZSwgbW9kaWZ5aW5nIHJlZm1hcC5cbnZhciBwYXJzZVJlZmVyZW5jZSA9IGZ1bmN0aW9uKHMsIHJlZm1hcCkge1xuICAgIHRoaXMuc3ViamVjdCA9IHM7XG4gICAgdGhpcy5wb3MgPSAwO1xuICAgIHZhciByYXdsYWJlbDtcbiAgICB2YXIgZGVzdDtcbiAgICB2YXIgdGl0bGU7XG4gICAgdmFyIG1hdGNoQ2hhcnM7XG4gICAgdmFyIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG5cbiAgICAvLyBsYWJlbDpcbiAgICBtYXRjaENoYXJzID0gdGhpcy5wYXJzZUxpbmtMYWJlbCgpO1xuICAgIGlmIChtYXRjaENoYXJzID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd2xhYmVsID0gdGhpcy5zdWJqZWN0LnN1YnN0cigwLCBtYXRjaENoYXJzKTtcbiAgICB9XG5cbiAgICAvLyBjb2xvbjpcbiAgICBpZiAodGhpcy5wZWVrKCkgPT09IENfQ09MT04pIHtcbiAgICAgICAgdGhpcy5wb3MrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyAgbGluayB1cmxcbiAgICB0aGlzLnNwbmwoKTtcblxuICAgIGRlc3QgPSB0aGlzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKCk7XG4gICAgaWYgKGRlc3QgPT09IG51bGwgfHwgZGVzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGJlZm9yZXRpdGxlID0gdGhpcy5wb3M7XG4gICAgdGhpcy5zcG5sKCk7XG4gICAgdGl0bGUgPSB0aGlzLnBhcnNlTGlua1RpdGxlKCk7XG4gICAgaWYgKHRpdGxlID09PSBudWxsKSB7XG4gICAgICAgIHRpdGxlID0gJyc7XG4gICAgICAgIC8vIHJld2luZCBiZWZvcmUgc3BhY2VzXG4gICAgICAgIHRoaXMucG9zID0gYmVmb3JldGl0bGU7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHdlJ3JlIGF0IGxpbmUgZW5kOlxuICAgIHZhciBhdExpbmVFbmQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm1hdGNoKHJlU3BhY2VBdEVuZE9mTGluZSkgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgICAgICAgYXRMaW5lRW5kID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGUgcG90ZW50aWFsIHRpdGxlIHdlIGZvdW5kIGlzIG5vdCBhdCB0aGUgbGluZSBlbmQsXG4gICAgICAgICAgICAvLyBidXQgaXQgY291bGQgc3RpbGwgYmUgYSBsZWdhbCBsaW5rIHJlZmVyZW5jZSBpZiB3ZVxuICAgICAgICAgICAgLy8gZGlzY2FyZCB0aGUgdGl0bGVcbiAgICAgICAgICAgIHRpdGxlID0gJyc7XG4gICAgICAgICAgICAvLyByZXdpbmQgYmVmb3JlIHNwYWNlc1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBiZWZvcmV0aXRsZTtcbiAgICAgICAgICAgIC8vIGFuZCBpbnN0ZWFkIGNoZWNrIGlmIHRoZSBsaW5rIFVSTCBpcyBhdCB0aGUgbGluZSBlbmRcbiAgICAgICAgICAgIGF0TGluZUVuZCA9IHRoaXMubWF0Y2gocmVTcGFjZUF0RW5kT2ZMaW5lKSAhPT0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXRMaW5lRW5kKSB7XG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBub3JtbGFiZWwgPSBub3JtYWxpemVSZWZlcmVuY2UocmF3bGFiZWwpO1xuICAgIGlmIChub3JtbGFiZWwgPT09ICcnKSB7XG4gICAgICAgIC8vIGxhYmVsIG11c3QgY29udGFpbiBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmICghcmVmbWFwW25vcm1sYWJlbF0pIHtcbiAgICAgICAgcmVmbWFwW25vcm1sYWJlbF0gPSB7IGRlc3RpbmF0aW9uOiBkZXN0LCB0aXRsZTogdGl0bGUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9zIC0gc3RhcnRwb3M7XG59O1xuXG4vLyBQYXJzZSB0aGUgbmV4dCBpbmxpbmUgZWxlbWVudCBpbiBzdWJqZWN0LCBhZHZhbmNpbmcgc3ViamVjdCBwb3NpdGlvbi5cbi8vIE9uIHN1Y2Nlc3MsIGFkZCB0aGUgcmVzdWx0IHRvIGJsb2NrJ3MgY2hpbGRyZW4gYW5kIHJldHVybiB0cnVlLlxuLy8gT24gZmFpbHVyZSwgcmV0dXJuIGZhbHNlLlxudmFyIHBhcnNlSW5saW5lID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgcmVzID0gZmFsc2U7XG4gICAgdmFyIGMgPSB0aGlzLnBlZWsoKTtcbiAgICBpZiAoYyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzd2l0Y2goYykge1xuICAgIGNhc2UgQ19ORVdMSU5FOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlTmV3bGluZShibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19CQUNLU0xBU0g6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VCYWNrc2xhc2goYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQkFDS1RJQ0s6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VCYWNrdGlja3MoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQVNURVJJU0s6XG4gICAgY2FzZSBDX1VOREVSU0NPUkU6XG4gICAgICAgIHJlcyA9IHRoaXMuaGFuZGxlRGVsaW0oYywgYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfU0lOR0xFUVVPVEU6XG4gICAgY2FzZSBDX0RPVUJMRVFVT1RFOlxuICAgICAgICByZXMgPSB0aGlzLm9wdGlvbnMuc21hcnQgJiYgdGhpcy5oYW5kbGVEZWxpbShjLCBibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19PUEVOX0JSQUNLRVQ6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VPcGVuQnJhY2tldChibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19CQU5HOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQmFuZyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19DTE9TRV9CUkFDS0VUOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQ2xvc2VCcmFja2V0KGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0xFU1NUSEFOOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQXV0b2xpbmsoYmxvY2spIHx8IHRoaXMucGFyc2VIdG1sVGFnKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0FNUEVSU0FORDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUVudGl0eShibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VTdHJpbmcoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChmcm9tQ29kZVBvaW50KGMpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBQYXJzZSBzdHJpbmcgY29udGVudCBpbiBibG9jayBpbnRvIGlubGluZSBjaGlsZHJlbixcbi8vIHVzaW5nIHJlZm1hcCB0byByZXNvbHZlIHJlZmVyZW5jZXMuXG52YXIgcGFyc2VJbmxpbmVzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB0aGlzLnN1YmplY3QgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQudHJpbSgpO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLmRlbGltaXRlcnMgPSBudWxsO1xuICAgIHdoaWxlICh0aGlzLnBhcnNlSW5saW5lKGJsb2NrKSkge1xuICAgIH1cbiAgICBibG9jay5fc3RyaW5nX2NvbnRlbnQgPSBudWxsOyAvLyBhbGxvdyByYXcgc3RyaW5nIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkXG4gICAgdGhpcy5wcm9jZXNzRW1waGFzaXMobnVsbCk7XG59O1xuXG4vLyBUaGUgSW5saW5lUGFyc2VyIG9iamVjdC5cbmZ1bmN0aW9uIElubGluZVBhcnNlcihvcHRpb25zKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJqZWN0OiAnJyxcbiAgICAgICAgZGVsaW1pdGVyczogbnVsbCwgIC8vIHVzZWQgYnkgaGFuZGxlRGVsaW0gbWV0aG9kXG4gICAgICAgIHBvczogMCxcbiAgICAgICAgcmVmbWFwOiB7fSxcbiAgICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgICBwZWVrOiBwZWVrLFxuICAgICAgICBzcG5sOiBzcG5sLFxuICAgICAgICBwYXJzZUJhY2t0aWNrczogcGFyc2VCYWNrdGlja3MsXG4gICAgICAgIHBhcnNlQmFja3NsYXNoOiBwYXJzZUJhY2tzbGFzaCxcbiAgICAgICAgcGFyc2VBdXRvbGluazogcGFyc2VBdXRvbGluayxcbiAgICAgICAgcGFyc2VIdG1sVGFnOiBwYXJzZUh0bWxUYWcsXG4gICAgICAgIHNjYW5EZWxpbXM6IHNjYW5EZWxpbXMsXG4gICAgICAgIGhhbmRsZURlbGltOiBoYW5kbGVEZWxpbSxcbiAgICAgICAgcGFyc2VMaW5rVGl0bGU6IHBhcnNlTGlua1RpdGxlLFxuICAgICAgICBwYXJzZUxpbmtEZXN0aW5hdGlvbjogcGFyc2VMaW5rRGVzdGluYXRpb24sXG4gICAgICAgIHBhcnNlTGlua0xhYmVsOiBwYXJzZUxpbmtMYWJlbCxcbiAgICAgICAgcGFyc2VPcGVuQnJhY2tldDogcGFyc2VPcGVuQnJhY2tldCxcbiAgICAgICAgcGFyc2VDbG9zZUJyYWNrZXQ6IHBhcnNlQ2xvc2VCcmFja2V0LFxuICAgICAgICBwYXJzZUJhbmc6IHBhcnNlQmFuZyxcbiAgICAgICAgcGFyc2VFbnRpdHk6IHBhcnNlRW50aXR5LFxuICAgICAgICBwYXJzZVN0cmluZzogcGFyc2VTdHJpbmcsXG4gICAgICAgIHBhcnNlTmV3bGluZTogcGFyc2VOZXdsaW5lLFxuICAgICAgICBwYXJzZVJlZmVyZW5jZTogcGFyc2VSZWZlcmVuY2UsXG4gICAgICAgIHBhcnNlSW5saW5lOiBwYXJzZUlubGluZSxcbiAgICAgICAgcHJvY2Vzc0VtcGhhc2lzOiBwcm9jZXNzRW1waGFzaXMsXG4gICAgICAgIHJlbW92ZURlbGltaXRlcjogcmVtb3ZlRGVsaW1pdGVyLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgICAgICBwYXJzZTogcGFyc2VJbmxpbmVzXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbmxpbmVQYXJzZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9pbmxpbmVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBkZXJpdmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLmZyb21Db2RlUG9pbnRcbi8qISBodHRwOi8vbXRocy5iZS9mcm9tY29kZXBvaW50IHYwLjIuMSBieSBAbWF0aGlhcyAqL1xuaWYgKFN0cmluZy5mcm9tQ29kZVBvaW50KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFJhbmdlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0gZWxzZSB7XG5cbiAgdmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciBmcm9tQ29kZVBvaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgTUFYX1NJWkUgPSAweDQwMDA7XG4gICAgICB2YXIgY29kZVVuaXRzID0gW107XG4gICAgICB2YXIgaGlnaFN1cnJvZ2F0ZTtcbiAgICAgIHZhciBsb3dTdXJyb2dhdGU7XG4gICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIHZhciBjb2RlUG9pbnQgPSBOdW1iZXIoYXJndW1lbnRzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhaXNGaW5pdGUoY29kZVBvaW50KSB8fCAvLyBgTmFOYCwgYCtJbmZpbml0eWAsIG9yIGAtSW5maW5pdHlgXG4gICAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPCAwIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICAgICAgICAgICAgY29kZVBvaW50ID4gMHgxMEZGRkYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgICAgICAgICAgICBmbG9vcihjb2RlUG9pbnQpICE9PSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweEZGRkYpIHsgLy8gQk1QIGNvZGUgcG9pbnRcbiAgICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgaGlnaFN1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgPj4gMTApICsgMHhEODAwO1xuICAgICAgICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhEQzAwO1xuICAgICAgICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmdGcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKTtcbiAgICAgICAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBmcm9tQ29kZVBvaW50O1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvZnJvbS1jb2RlLXBvaW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBUaGUgYnVsayBvZiB0aGlzIGNvZGUgZGVyaXZlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kbW9zY3JvcC9mb2xkLWNhc2VcbkJ1dCBpbiBhZGRpdGlvbiB0byBjYXNlLWZvbGRpbmcsIHdlIGFsc28gbm9ybWFsaXplIHdoaXRlc3BhY2UuXG5cbmZvbGQtY2FzZSBpcyBDb3B5cmlnaHQgTWF0aGlhcyBCeW5lbnMgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS8+XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vKmVzbGludC1kaXNhYmxlICBrZXktc3BhY2luZywgY29tbWEtc3BhY2luZyAqL1xuXG52YXIgcmVnZXggPSAvWyBcXHRcXHJcXG5dK3xbQS1aXFx4QjVcXHhDMC1cXHhENlxceEQ4LVxceERGXFx1MDEwMFxcdTAxMDJcXHUwMTA0XFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAxMEVcXHUwMTEwXFx1MDExMlxcdTAxMTRcXHUwMTE2XFx1MDExOFxcdTAxMUFcXHUwMTFDXFx1MDExRVxcdTAxMjBcXHUwMTIyXFx1MDEyNFxcdTAxMjZcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTJFXFx1MDEzMFxcdTAxMzJcXHUwMTM0XFx1MDEzNlxcdTAxMzlcXHUwMTNCXFx1MDEzRFxcdTAxM0ZcXHUwMTQxXFx1MDE0M1xcdTAxNDVcXHUwMTQ3XFx1MDE0OVxcdTAxNEFcXHUwMTRDXFx1MDE0RVxcdTAxNTBcXHUwMTUyXFx1MDE1NFxcdTAxNTZcXHUwMTU4XFx1MDE1QVxcdTAxNUNcXHUwMTVFXFx1MDE2MFxcdTAxNjJcXHUwMTY0XFx1MDE2NlxcdTAxNjhcXHUwMTZBXFx1MDE2Q1xcdTAxNkVcXHUwMTcwXFx1MDE3MlxcdTAxNzRcXHUwMTc2XFx1MDE3OFxcdTAxNzlcXHUwMTdCXFx1MDE3RFxcdTAxN0ZcXHUwMTgxXFx1MDE4MlxcdTAxODRcXHUwMTg2XFx1MDE4N1xcdTAxODktXFx1MDE4QlxcdTAxOEUtXFx1MDE5MVxcdTAxOTNcXHUwMTk0XFx1MDE5Ni1cXHUwMTk4XFx1MDE5Q1xcdTAxOURcXHUwMTlGXFx1MDFBMFxcdTAxQTJcXHUwMUE0XFx1MDFBNlxcdTAxQTdcXHUwMUE5XFx1MDFBQ1xcdTAxQUVcXHUwMUFGXFx1MDFCMS1cXHUwMUIzXFx1MDFCNVxcdTAxQjdcXHUwMUI4XFx1MDFCQ1xcdTAxQzRcXHUwMUM1XFx1MDFDN1xcdTAxQzhcXHUwMUNBXFx1MDFDQlxcdTAxQ0RcXHUwMUNGXFx1MDFEMVxcdTAxRDNcXHUwMUQ1XFx1MDFEN1xcdTAxRDlcXHUwMURCXFx1MDFERVxcdTAxRTBcXHUwMUUyXFx1MDFFNFxcdTAxRTZcXHUwMUU4XFx1MDFFQVxcdTAxRUNcXHUwMUVFXFx1MDFGMC1cXHUwMUYyXFx1MDFGNFxcdTAxRjYtXFx1MDFGOFxcdTAxRkFcXHUwMUZDXFx1MDFGRVxcdTAyMDBcXHUwMjAyXFx1MDIwNFxcdTAyMDZcXHUwMjA4XFx1MDIwQVxcdTAyMENcXHUwMjBFXFx1MDIxMFxcdTAyMTJcXHUwMjE0XFx1MDIxNlxcdTAyMThcXHUwMjFBXFx1MDIxQ1xcdTAyMUVcXHUwMjIwXFx1MDIyMlxcdTAyMjRcXHUwMjI2XFx1MDIyOFxcdTAyMkFcXHUwMjJDXFx1MDIyRVxcdTAyMzBcXHUwMjMyXFx1MDIzQVxcdTAyM0JcXHUwMjNEXFx1MDIzRVxcdTAyNDFcXHUwMjQzLVxcdTAyNDZcXHUwMjQ4XFx1MDI0QVxcdTAyNENcXHUwMjRFXFx1MDM0NVxcdTAzNzBcXHUwMzcyXFx1MDM3NlxcdTAzN0ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNBQlxcdTAzQjBcXHUwM0MyXFx1MDNDRi1cXHUwM0QxXFx1MDNENVxcdTAzRDZcXHUwM0Q4XFx1MDNEQVxcdTAzRENcXHUwM0RFXFx1MDNFMFxcdTAzRTJcXHUwM0U0XFx1MDNFNlxcdTAzRThcXHUwM0VBXFx1MDNFQ1xcdTAzRUVcXHUwM0YwXFx1MDNGMVxcdTAzRjRcXHUwM0Y1XFx1MDNGN1xcdTAzRjlcXHUwM0ZBXFx1MDNGRC1cXHUwNDJGXFx1MDQ2MFxcdTA0NjJcXHUwNDY0XFx1MDQ2NlxcdTA0NjhcXHUwNDZBXFx1MDQ2Q1xcdTA0NkVcXHUwNDcwXFx1MDQ3MlxcdTA0NzRcXHUwNDc2XFx1MDQ3OFxcdTA0N0FcXHUwNDdDXFx1MDQ3RVxcdTA0ODBcXHUwNDhBXFx1MDQ4Q1xcdTA0OEVcXHUwNDkwXFx1MDQ5MlxcdTA0OTRcXHUwNDk2XFx1MDQ5OFxcdTA0OUFcXHUwNDlDXFx1MDQ5RVxcdTA0QTBcXHUwNEEyXFx1MDRBNFxcdTA0QTZcXHUwNEE4XFx1MDRBQVxcdTA0QUNcXHUwNEFFXFx1MDRCMFxcdTA0QjJcXHUwNEI0XFx1MDRCNlxcdTA0QjhcXHUwNEJBXFx1MDRCQ1xcdTA0QkVcXHUwNEMwXFx1MDRDMVxcdTA0QzNcXHUwNEM1XFx1MDRDN1xcdTA0QzlcXHUwNENCXFx1MDRDRFxcdTA0RDBcXHUwNEQyXFx1MDRENFxcdTA0RDZcXHUwNEQ4XFx1MDREQVxcdTA0RENcXHUwNERFXFx1MDRFMFxcdTA0RTJcXHUwNEU0XFx1MDRFNlxcdTA0RThcXHUwNEVBXFx1MDRFQ1xcdTA0RUVcXHUwNEYwXFx1MDRGMlxcdTA0RjRcXHUwNEY2XFx1MDRGOFxcdTA0RkFcXHUwNEZDXFx1MDRGRVxcdTA1MDBcXHUwNTAyXFx1MDUwNFxcdTA1MDZcXHUwNTA4XFx1MDUwQVxcdTA1MENcXHUwNTBFXFx1MDUxMFxcdTA1MTJcXHUwNTE0XFx1MDUxNlxcdTA1MThcXHUwNTFBXFx1MDUxQ1xcdTA1MUVcXHUwNTIwXFx1MDUyMlxcdTA1MjRcXHUwNTI2XFx1MDUyOFxcdTA1MkFcXHUwNTJDXFx1MDUyRVxcdTA1MzEtXFx1MDU1NlxcdTA1ODdcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTFFMDBcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUxRTA4XFx1MUUwQVxcdTFFMENcXHUxRTBFXFx1MUUxMFxcdTFFMTJcXHUxRTE0XFx1MUUxNlxcdTFFMThcXHUxRTFBXFx1MUUxQ1xcdTFFMUVcXHUxRTIwXFx1MUUyMlxcdTFFMjRcXHUxRTI2XFx1MUUyOFxcdTFFMkFcXHUxRTJDXFx1MUUyRVxcdTFFMzBcXHUxRTMyXFx1MUUzNFxcdTFFMzZcXHUxRTM4XFx1MUUzQVxcdTFFM0NcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUxRTQ0XFx1MUU0NlxcdTFFNDhcXHUxRTRBXFx1MUU0Q1xcdTFFNEVcXHUxRTUwXFx1MUU1MlxcdTFFNTRcXHUxRTU2XFx1MUU1OFxcdTFFNUFcXHUxRTVDXFx1MUU1RVxcdTFFNjBcXHUxRTYyXFx1MUU2NFxcdTFFNjZcXHUxRTY4XFx1MUU2QVxcdTFFNkNcXHUxRTZFXFx1MUU3MFxcdTFFNzJcXHUxRTc0XFx1MUU3NlxcdTFFNzhcXHUxRTdBXFx1MUU3Q1xcdTFFN0VcXHUxRTgwXFx1MUU4MlxcdTFFODRcXHUxRTg2XFx1MUU4OFxcdTFFOEFcXHUxRThDXFx1MUU4RVxcdTFFOTBcXHUxRTkyXFx1MUU5NFxcdTFFOTYtXFx1MUU5QlxcdTFFOUVcXHUxRUEwXFx1MUVBMlxcdTFFQTRcXHUxRUE2XFx1MUVBOFxcdTFFQUFcXHUxRUFDXFx1MUVBRVxcdTFFQjBcXHUxRUIyXFx1MUVCNFxcdTFFQjZcXHUxRUI4XFx1MUVCQVxcdTFFQkNcXHUxRUJFXFx1MUVDMFxcdTFFQzJcXHUxRUM0XFx1MUVDNlxcdTFFQzhcXHUxRUNBXFx1MUVDQ1xcdTFFQ0VcXHUxRUQwXFx1MUVEMlxcdTFFRDRcXHUxRUQ2XFx1MUVEOFxcdTFFREFcXHUxRURDXFx1MUVERVxcdTFFRTBcXHUxRUUyXFx1MUVFNFxcdTFFRTZcXHUxRUU4XFx1MUVFQVxcdTFFRUNcXHUxRUVFXFx1MUVGMFxcdTFFRjJcXHUxRUY0XFx1MUVGNlxcdTFFRjhcXHUxRUZBXFx1MUVGQ1xcdTFFRkVcXHUxRjA4LVxcdTFGMEZcXHUxRjE4LVxcdTFGMURcXHUxRjI4LVxcdTFGMkZcXHUxRjM4LVxcdTFGM0ZcXHUxRjQ4LVxcdTFGNERcXHUxRjUwXFx1MUY1MlxcdTFGNTRcXHUxRjU2XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1RlxcdTFGNjgtXFx1MUY2RlxcdTFGODAtXFx1MUZBRlxcdTFGQjItXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQyXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTItXFx1MUZFNFxcdTFGRTYtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIxMjZcXHUyMTJBXFx1MjEyQlxcdTIxMzJcXHUyMTYwLVxcdTIxNkZcXHUyMTgzXFx1MjRCNi1cXHUyNENGXFx1MkMwMC1cXHUyQzJFXFx1MkM2MFxcdTJDNjItXFx1MkM2NFxcdTJDNjdcXHUyQzY5XFx1MkM2QlxcdTJDNkQtXFx1MkM3MFxcdTJDNzJcXHUyQzc1XFx1MkM3RS1cXHUyQzgwXFx1MkM4MlxcdTJDODRcXHUyQzg2XFx1MkM4OFxcdTJDOEFcXHUyQzhDXFx1MkM4RVxcdTJDOTBcXHUyQzkyXFx1MkM5NFxcdTJDOTZcXHUyQzk4XFx1MkM5QVxcdTJDOUNcXHUyQzlFXFx1MkNBMFxcdTJDQTJcXHUyQ0E0XFx1MkNBNlxcdTJDQThcXHUyQ0FBXFx1MkNBQ1xcdTJDQUVcXHUyQ0IwXFx1MkNCMlxcdTJDQjRcXHUyQ0I2XFx1MkNCOFxcdTJDQkFcXHUyQ0JDXFx1MkNCRVxcdTJDQzBcXHUyQ0MyXFx1MkNDNFxcdTJDQzZcXHUyQ0M4XFx1MkNDQVxcdTJDQ0NcXHUyQ0NFXFx1MkNEMFxcdTJDRDJcXHUyQ0Q0XFx1MkNENlxcdTJDRDhcXHUyQ0RBXFx1MkNEQ1xcdTJDREVcXHUyQ0UwXFx1MkNFMlxcdTJDRUJcXHUyQ0VEXFx1MkNGMlxcdUE2NDBcXHVBNjQyXFx1QTY0NFxcdUE2NDZcXHVBNjQ4XFx1QTY0QVxcdUE2NENcXHVBNjRFXFx1QTY1MFxcdUE2NTJcXHVBNjU0XFx1QTY1NlxcdUE2NThcXHVBNjVBXFx1QTY1Q1xcdUE2NUVcXHVBNjYwXFx1QTY2MlxcdUE2NjRcXHVBNjY2XFx1QTY2OFxcdUE2NkFcXHVBNjZDXFx1QTY4MFxcdUE2ODJcXHVBNjg0XFx1QTY4NlxcdUE2ODhcXHVBNjhBXFx1QTY4Q1xcdUE2OEVcXHVBNjkwXFx1QTY5MlxcdUE2OTRcXHVBNjk2XFx1QTY5OFxcdUE2OUFcXHVBNzIyXFx1QTcyNFxcdUE3MjZcXHVBNzI4XFx1QTcyQVxcdUE3MkNcXHVBNzJFXFx1QTczMlxcdUE3MzRcXHVBNzM2XFx1QTczOFxcdUE3M0FcXHVBNzNDXFx1QTczRVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3NDZcXHVBNzQ4XFx1QTc0QVxcdUE3NENcXHVBNzRFXFx1QTc1MFxcdUE3NTJcXHVBNzU0XFx1QTc1NlxcdUE3NThcXHVBNzVBXFx1QTc1Q1xcdUE3NUVcXHVBNzYwXFx1QTc2MlxcdUE3NjRcXHVBNzY2XFx1QTc2OFxcdUE3NkFcXHVBNzZDXFx1QTc2RVxcdUE3NzlcXHVBNzdCXFx1QTc3RFxcdUE3N0VcXHVBNzgwXFx1QTc4MlxcdUE3ODRcXHVBNzg2XFx1QTc4QlxcdUE3OERcXHVBNzkwXFx1QTc5MlxcdUE3OTZcXHVBNzk4XFx1QTc5QVxcdUE3OUNcXHVBNzlFXFx1QTdBMFxcdUE3QTJcXHVBN0E0XFx1QTdBNlxcdUE3QThcXHVBN0FBLVxcdUE3QURcXHVBN0IwXFx1QTdCMVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZGMjEtXFx1RkYzQV18XFx1RDgwMVtcXHVEQzAwLVxcdURDMjddfFxcdUQ4MDZbXFx1RENBMC1cXHVEQ0JGXS9nO1xuXG52YXIgbWFwID0geydBJzonYScsJ0InOidiJywnQyc6J2MnLCdEJzonZCcsJ0UnOidlJywnRic6J2YnLCdHJzonZycsJ0gnOidoJywnSSc6J2knLCdKJzonaicsJ0snOidrJywnTCc6J2wnLCdNJzonbScsJ04nOiduJywnTyc6J28nLCdQJzoncCcsJ1EnOidxJywnUic6J3InLCdTJzoncycsJ1QnOid0JywnVSc6J3UnLCdWJzondicsJ1cnOid3JywnWCc6J3gnLCdZJzoneScsJ1onOid6JywnXFx4QjUnOidcXHUwM0JDJywnXFx4QzAnOidcXHhFMCcsJ1xceEMxJzonXFx4RTEnLCdcXHhDMic6J1xceEUyJywnXFx4QzMnOidcXHhFMycsJ1xceEM0JzonXFx4RTQnLCdcXHhDNSc6J1xceEU1JywnXFx4QzYnOidcXHhFNicsJ1xceEM3JzonXFx4RTcnLCdcXHhDOCc6J1xceEU4JywnXFx4QzknOidcXHhFOScsJ1xceENBJzonXFx4RUEnLCdcXHhDQic6J1xceEVCJywnXFx4Q0MnOidcXHhFQycsJ1xceENEJzonXFx4RUQnLCdcXHhDRSc6J1xceEVFJywnXFx4Q0YnOidcXHhFRicsJ1xceEQwJzonXFx4RjAnLCdcXHhEMSc6J1xceEYxJywnXFx4RDInOidcXHhGMicsJ1xceEQzJzonXFx4RjMnLCdcXHhENCc6J1xceEY0JywnXFx4RDUnOidcXHhGNScsJ1xceEQ2JzonXFx4RjYnLCdcXHhEOCc6J1xceEY4JywnXFx4RDknOidcXHhGOScsJ1xceERBJzonXFx4RkEnLCdcXHhEQic6J1xceEZCJywnXFx4REMnOidcXHhGQycsJ1xceEREJzonXFx4RkQnLCdcXHhERSc6J1xceEZFJywnXFx1MDEwMCc6J1xcdTAxMDEnLCdcXHUwMTAyJzonXFx1MDEwMycsJ1xcdTAxMDQnOidcXHUwMTA1JywnXFx1MDEwNic6J1xcdTAxMDcnLCdcXHUwMTA4JzonXFx1MDEwOScsJ1xcdTAxMEEnOidcXHUwMTBCJywnXFx1MDEwQyc6J1xcdTAxMEQnLCdcXHUwMTBFJzonXFx1MDEwRicsJ1xcdTAxMTAnOidcXHUwMTExJywnXFx1MDExMic6J1xcdTAxMTMnLCdcXHUwMTE0JzonXFx1MDExNScsJ1xcdTAxMTYnOidcXHUwMTE3JywnXFx1MDExOCc6J1xcdTAxMTknLCdcXHUwMTFBJzonXFx1MDExQicsJ1xcdTAxMUMnOidcXHUwMTFEJywnXFx1MDExRSc6J1xcdTAxMUYnLCdcXHUwMTIwJzonXFx1MDEyMScsJ1xcdTAxMjInOidcXHUwMTIzJywnXFx1MDEyNCc6J1xcdTAxMjUnLCdcXHUwMTI2JzonXFx1MDEyNycsJ1xcdTAxMjgnOidcXHUwMTI5JywnXFx1MDEyQSc6J1xcdTAxMkInLCdcXHUwMTJDJzonXFx1MDEyRCcsJ1xcdTAxMkUnOidcXHUwMTJGJywnXFx1MDEzMic6J1xcdTAxMzMnLCdcXHUwMTM0JzonXFx1MDEzNScsJ1xcdTAxMzYnOidcXHUwMTM3JywnXFx1MDEzOSc6J1xcdTAxM0EnLCdcXHUwMTNCJzonXFx1MDEzQycsJ1xcdTAxM0QnOidcXHUwMTNFJywnXFx1MDEzRic6J1xcdTAxNDAnLCdcXHUwMTQxJzonXFx1MDE0MicsJ1xcdTAxNDMnOidcXHUwMTQ0JywnXFx1MDE0NSc6J1xcdTAxNDYnLCdcXHUwMTQ3JzonXFx1MDE0OCcsJ1xcdTAxNEEnOidcXHUwMTRCJywnXFx1MDE0Qyc6J1xcdTAxNEQnLCdcXHUwMTRFJzonXFx1MDE0RicsJ1xcdTAxNTAnOidcXHUwMTUxJywnXFx1MDE1Mic6J1xcdTAxNTMnLCdcXHUwMTU0JzonXFx1MDE1NScsJ1xcdTAxNTYnOidcXHUwMTU3JywnXFx1MDE1OCc6J1xcdTAxNTknLCdcXHUwMTVBJzonXFx1MDE1QicsJ1xcdTAxNUMnOidcXHUwMTVEJywnXFx1MDE1RSc6J1xcdTAxNUYnLCdcXHUwMTYwJzonXFx1MDE2MScsJ1xcdTAxNjInOidcXHUwMTYzJywnXFx1MDE2NCc6J1xcdTAxNjUnLCdcXHUwMTY2JzonXFx1MDE2NycsJ1xcdTAxNjgnOidcXHUwMTY5JywnXFx1MDE2QSc6J1xcdTAxNkInLCdcXHUwMTZDJzonXFx1MDE2RCcsJ1xcdTAxNkUnOidcXHUwMTZGJywnXFx1MDE3MCc6J1xcdTAxNzEnLCdcXHUwMTcyJzonXFx1MDE3MycsJ1xcdTAxNzQnOidcXHUwMTc1JywnXFx1MDE3Nic6J1xcdTAxNzcnLCdcXHUwMTc4JzonXFx4RkYnLCdcXHUwMTc5JzonXFx1MDE3QScsJ1xcdTAxN0InOidcXHUwMTdDJywnXFx1MDE3RCc6J1xcdTAxN0UnLCdcXHUwMTdGJzoncycsJ1xcdTAxODEnOidcXHUwMjUzJywnXFx1MDE4Mic6J1xcdTAxODMnLCdcXHUwMTg0JzonXFx1MDE4NScsJ1xcdTAxODYnOidcXHUwMjU0JywnXFx1MDE4Nyc6J1xcdTAxODgnLCdcXHUwMTg5JzonXFx1MDI1NicsJ1xcdTAxOEEnOidcXHUwMjU3JywnXFx1MDE4Qic6J1xcdTAxOEMnLCdcXHUwMThFJzonXFx1MDFERCcsJ1xcdTAxOEYnOidcXHUwMjU5JywnXFx1MDE5MCc6J1xcdTAyNUInLCdcXHUwMTkxJzonXFx1MDE5MicsJ1xcdTAxOTMnOidcXHUwMjYwJywnXFx1MDE5NCc6J1xcdTAyNjMnLCdcXHUwMTk2JzonXFx1MDI2OScsJ1xcdTAxOTcnOidcXHUwMjY4JywnXFx1MDE5OCc6J1xcdTAxOTknLCdcXHUwMTlDJzonXFx1MDI2RicsJ1xcdTAxOUQnOidcXHUwMjcyJywnXFx1MDE5Ric6J1xcdTAyNzUnLCdcXHUwMUEwJzonXFx1MDFBMScsJ1xcdTAxQTInOidcXHUwMUEzJywnXFx1MDFBNCc6J1xcdTAxQTUnLCdcXHUwMUE2JzonXFx1MDI4MCcsJ1xcdTAxQTcnOidcXHUwMUE4JywnXFx1MDFBOSc6J1xcdTAyODMnLCdcXHUwMUFDJzonXFx1MDFBRCcsJ1xcdTAxQUUnOidcXHUwMjg4JywnXFx1MDFBRic6J1xcdTAxQjAnLCdcXHUwMUIxJzonXFx1MDI4QScsJ1xcdTAxQjInOidcXHUwMjhCJywnXFx1MDFCMyc6J1xcdTAxQjQnLCdcXHUwMUI1JzonXFx1MDFCNicsJ1xcdTAxQjcnOidcXHUwMjkyJywnXFx1MDFCOCc6J1xcdTAxQjknLCdcXHUwMUJDJzonXFx1MDFCRCcsJ1xcdTAxQzQnOidcXHUwMUM2JywnXFx1MDFDNSc6J1xcdTAxQzYnLCdcXHUwMUM3JzonXFx1MDFDOScsJ1xcdTAxQzgnOidcXHUwMUM5JywnXFx1MDFDQSc6J1xcdTAxQ0MnLCdcXHUwMUNCJzonXFx1MDFDQycsJ1xcdTAxQ0QnOidcXHUwMUNFJywnXFx1MDFDRic6J1xcdTAxRDAnLCdcXHUwMUQxJzonXFx1MDFEMicsJ1xcdTAxRDMnOidcXHUwMUQ0JywnXFx1MDFENSc6J1xcdTAxRDYnLCdcXHUwMUQ3JzonXFx1MDFEOCcsJ1xcdTAxRDknOidcXHUwMURBJywnXFx1MDFEQic6J1xcdTAxREMnLCdcXHUwMURFJzonXFx1MDFERicsJ1xcdTAxRTAnOidcXHUwMUUxJywnXFx1MDFFMic6J1xcdTAxRTMnLCdcXHUwMUU0JzonXFx1MDFFNScsJ1xcdTAxRTYnOidcXHUwMUU3JywnXFx1MDFFOCc6J1xcdTAxRTknLCdcXHUwMUVBJzonXFx1MDFFQicsJ1xcdTAxRUMnOidcXHUwMUVEJywnXFx1MDFFRSc6J1xcdTAxRUYnLCdcXHUwMUYxJzonXFx1MDFGMycsJ1xcdTAxRjInOidcXHUwMUYzJywnXFx1MDFGNCc6J1xcdTAxRjUnLCdcXHUwMUY2JzonXFx1MDE5NScsJ1xcdTAxRjcnOidcXHUwMUJGJywnXFx1MDFGOCc6J1xcdTAxRjknLCdcXHUwMUZBJzonXFx1MDFGQicsJ1xcdTAxRkMnOidcXHUwMUZEJywnXFx1MDFGRSc6J1xcdTAxRkYnLCdcXHUwMjAwJzonXFx1MDIwMScsJ1xcdTAyMDInOidcXHUwMjAzJywnXFx1MDIwNCc6J1xcdTAyMDUnLCdcXHUwMjA2JzonXFx1MDIwNycsJ1xcdTAyMDgnOidcXHUwMjA5JywnXFx1MDIwQSc6J1xcdTAyMEInLCdcXHUwMjBDJzonXFx1MDIwRCcsJ1xcdTAyMEUnOidcXHUwMjBGJywnXFx1MDIxMCc6J1xcdTAyMTEnLCdcXHUwMjEyJzonXFx1MDIxMycsJ1xcdTAyMTQnOidcXHUwMjE1JywnXFx1MDIxNic6J1xcdTAyMTcnLCdcXHUwMjE4JzonXFx1MDIxOScsJ1xcdTAyMUEnOidcXHUwMjFCJywnXFx1MDIxQyc6J1xcdTAyMUQnLCdcXHUwMjFFJzonXFx1MDIxRicsJ1xcdTAyMjAnOidcXHUwMTlFJywnXFx1MDIyMic6J1xcdTAyMjMnLCdcXHUwMjI0JzonXFx1MDIyNScsJ1xcdTAyMjYnOidcXHUwMjI3JywnXFx1MDIyOCc6J1xcdTAyMjknLCdcXHUwMjJBJzonXFx1MDIyQicsJ1xcdTAyMkMnOidcXHUwMjJEJywnXFx1MDIyRSc6J1xcdTAyMkYnLCdcXHUwMjMwJzonXFx1MDIzMScsJ1xcdTAyMzInOidcXHUwMjMzJywnXFx1MDIzQSc6J1xcdTJDNjUnLCdcXHUwMjNCJzonXFx1MDIzQycsJ1xcdTAyM0QnOidcXHUwMTlBJywnXFx1MDIzRSc6J1xcdTJDNjYnLCdcXHUwMjQxJzonXFx1MDI0MicsJ1xcdTAyNDMnOidcXHUwMTgwJywnXFx1MDI0NCc6J1xcdTAyODknLCdcXHUwMjQ1JzonXFx1MDI4QycsJ1xcdTAyNDYnOidcXHUwMjQ3JywnXFx1MDI0OCc6J1xcdTAyNDknLCdcXHUwMjRBJzonXFx1MDI0QicsJ1xcdTAyNEMnOidcXHUwMjREJywnXFx1MDI0RSc6J1xcdTAyNEYnLCdcXHUwMzQ1JzonXFx1MDNCOScsJ1xcdTAzNzAnOidcXHUwMzcxJywnXFx1MDM3Mic6J1xcdTAzNzMnLCdcXHUwMzc2JzonXFx1MDM3NycsJ1xcdTAzN0YnOidcXHUwM0YzJywnXFx1MDM4Nic6J1xcdTAzQUMnLCdcXHUwMzg4JzonXFx1MDNBRCcsJ1xcdTAzODknOidcXHUwM0FFJywnXFx1MDM4QSc6J1xcdTAzQUYnLCdcXHUwMzhDJzonXFx1MDNDQycsJ1xcdTAzOEUnOidcXHUwM0NEJywnXFx1MDM4Ric6J1xcdTAzQ0UnLCdcXHUwMzkxJzonXFx1MDNCMScsJ1xcdTAzOTInOidcXHUwM0IyJywnXFx1MDM5Myc6J1xcdTAzQjMnLCdcXHUwMzk0JzonXFx1MDNCNCcsJ1xcdTAzOTUnOidcXHUwM0I1JywnXFx1MDM5Nic6J1xcdTAzQjYnLCdcXHUwMzk3JzonXFx1MDNCNycsJ1xcdTAzOTgnOidcXHUwM0I4JywnXFx1MDM5OSc6J1xcdTAzQjknLCdcXHUwMzlBJzonXFx1MDNCQScsJ1xcdTAzOUInOidcXHUwM0JCJywnXFx1MDM5Qyc6J1xcdTAzQkMnLCdcXHUwMzlEJzonXFx1MDNCRCcsJ1xcdTAzOUUnOidcXHUwM0JFJywnXFx1MDM5Ric6J1xcdTAzQkYnLCdcXHUwM0EwJzonXFx1MDNDMCcsJ1xcdTAzQTEnOidcXHUwM0MxJywnXFx1MDNBMyc6J1xcdTAzQzMnLCdcXHUwM0E0JzonXFx1MDNDNCcsJ1xcdTAzQTUnOidcXHUwM0M1JywnXFx1MDNBNic6J1xcdTAzQzYnLCdcXHUwM0E3JzonXFx1MDNDNycsJ1xcdTAzQTgnOidcXHUwM0M4JywnXFx1MDNBOSc6J1xcdTAzQzknLCdcXHUwM0FBJzonXFx1MDNDQScsJ1xcdTAzQUInOidcXHUwM0NCJywnXFx1MDNDMic6J1xcdTAzQzMnLCdcXHUwM0NGJzonXFx1MDNENycsJ1xcdTAzRDAnOidcXHUwM0IyJywnXFx1MDNEMSc6J1xcdTAzQjgnLCdcXHUwM0Q1JzonXFx1MDNDNicsJ1xcdTAzRDYnOidcXHUwM0MwJywnXFx1MDNEOCc6J1xcdTAzRDknLCdcXHUwM0RBJzonXFx1MDNEQicsJ1xcdTAzREMnOidcXHUwM0REJywnXFx1MDNERSc6J1xcdTAzREYnLCdcXHUwM0UwJzonXFx1MDNFMScsJ1xcdTAzRTInOidcXHUwM0UzJywnXFx1MDNFNCc6J1xcdTAzRTUnLCdcXHUwM0U2JzonXFx1MDNFNycsJ1xcdTAzRTgnOidcXHUwM0U5JywnXFx1MDNFQSc6J1xcdTAzRUInLCdcXHUwM0VDJzonXFx1MDNFRCcsJ1xcdTAzRUUnOidcXHUwM0VGJywnXFx1MDNGMCc6J1xcdTAzQkEnLCdcXHUwM0YxJzonXFx1MDNDMScsJ1xcdTAzRjQnOidcXHUwM0I4JywnXFx1MDNGNSc6J1xcdTAzQjUnLCdcXHUwM0Y3JzonXFx1MDNGOCcsJ1xcdTAzRjknOidcXHUwM0YyJywnXFx1MDNGQSc6J1xcdTAzRkInLCdcXHUwM0ZEJzonXFx1MDM3QicsJ1xcdTAzRkUnOidcXHUwMzdDJywnXFx1MDNGRic6J1xcdTAzN0QnLCdcXHUwNDAwJzonXFx1MDQ1MCcsJ1xcdTA0MDEnOidcXHUwNDUxJywnXFx1MDQwMic6J1xcdTA0NTInLCdcXHUwNDAzJzonXFx1MDQ1MycsJ1xcdTA0MDQnOidcXHUwNDU0JywnXFx1MDQwNSc6J1xcdTA0NTUnLCdcXHUwNDA2JzonXFx1MDQ1NicsJ1xcdTA0MDcnOidcXHUwNDU3JywnXFx1MDQwOCc6J1xcdTA0NTgnLCdcXHUwNDA5JzonXFx1MDQ1OScsJ1xcdTA0MEEnOidcXHUwNDVBJywnXFx1MDQwQic6J1xcdTA0NUInLCdcXHUwNDBDJzonXFx1MDQ1QycsJ1xcdTA0MEQnOidcXHUwNDVEJywnXFx1MDQwRSc6J1xcdTA0NUUnLCdcXHUwNDBGJzonXFx1MDQ1RicsJ1xcdTA0MTAnOidcXHUwNDMwJywnXFx1MDQxMSc6J1xcdTA0MzEnLCdcXHUwNDEyJzonXFx1MDQzMicsJ1xcdTA0MTMnOidcXHUwNDMzJywnXFx1MDQxNCc6J1xcdTA0MzQnLCdcXHUwNDE1JzonXFx1MDQzNScsJ1xcdTA0MTYnOidcXHUwNDM2JywnXFx1MDQxNyc6J1xcdTA0MzcnLCdcXHUwNDE4JzonXFx1MDQzOCcsJ1xcdTA0MTknOidcXHUwNDM5JywnXFx1MDQxQSc6J1xcdTA0M0EnLCdcXHUwNDFCJzonXFx1MDQzQicsJ1xcdTA0MUMnOidcXHUwNDNDJywnXFx1MDQxRCc6J1xcdTA0M0QnLCdcXHUwNDFFJzonXFx1MDQzRScsJ1xcdTA0MUYnOidcXHUwNDNGJywnXFx1MDQyMCc6J1xcdTA0NDAnLCdcXHUwNDIxJzonXFx1MDQ0MScsJ1xcdTA0MjInOidcXHUwNDQyJywnXFx1MDQyMyc6J1xcdTA0NDMnLCdcXHUwNDI0JzonXFx1MDQ0NCcsJ1xcdTA0MjUnOidcXHUwNDQ1JywnXFx1MDQyNic6J1xcdTA0NDYnLCdcXHUwNDI3JzonXFx1MDQ0NycsJ1xcdTA0MjgnOidcXHUwNDQ4JywnXFx1MDQyOSc6J1xcdTA0NDknLCdcXHUwNDJBJzonXFx1MDQ0QScsJ1xcdTA0MkInOidcXHUwNDRCJywnXFx1MDQyQyc6J1xcdTA0NEMnLCdcXHUwNDJEJzonXFx1MDQ0RCcsJ1xcdTA0MkUnOidcXHUwNDRFJywnXFx1MDQyRic6J1xcdTA0NEYnLCdcXHUwNDYwJzonXFx1MDQ2MScsJ1xcdTA0NjInOidcXHUwNDYzJywnXFx1MDQ2NCc6J1xcdTA0NjUnLCdcXHUwNDY2JzonXFx1MDQ2NycsJ1xcdTA0NjgnOidcXHUwNDY5JywnXFx1MDQ2QSc6J1xcdTA0NkInLCdcXHUwNDZDJzonXFx1MDQ2RCcsJ1xcdTA0NkUnOidcXHUwNDZGJywnXFx1MDQ3MCc6J1xcdTA0NzEnLCdcXHUwNDcyJzonXFx1MDQ3MycsJ1xcdTA0NzQnOidcXHUwNDc1JywnXFx1MDQ3Nic6J1xcdTA0NzcnLCdcXHUwNDc4JzonXFx1MDQ3OScsJ1xcdTA0N0EnOidcXHUwNDdCJywnXFx1MDQ3Qyc6J1xcdTA0N0QnLCdcXHUwNDdFJzonXFx1MDQ3RicsJ1xcdTA0ODAnOidcXHUwNDgxJywnXFx1MDQ4QSc6J1xcdTA0OEInLCdcXHUwNDhDJzonXFx1MDQ4RCcsJ1xcdTA0OEUnOidcXHUwNDhGJywnXFx1MDQ5MCc6J1xcdTA0OTEnLCdcXHUwNDkyJzonXFx1MDQ5MycsJ1xcdTA0OTQnOidcXHUwNDk1JywnXFx1MDQ5Nic6J1xcdTA0OTcnLCdcXHUwNDk4JzonXFx1MDQ5OScsJ1xcdTA0OUEnOidcXHUwNDlCJywnXFx1MDQ5Qyc6J1xcdTA0OUQnLCdcXHUwNDlFJzonXFx1MDQ5RicsJ1xcdTA0QTAnOidcXHUwNEExJywnXFx1MDRBMic6J1xcdTA0QTMnLCdcXHUwNEE0JzonXFx1MDRBNScsJ1xcdTA0QTYnOidcXHUwNEE3JywnXFx1MDRBOCc6J1xcdTA0QTknLCdcXHUwNEFBJzonXFx1MDRBQicsJ1xcdTA0QUMnOidcXHUwNEFEJywnXFx1MDRBRSc6J1xcdTA0QUYnLCdcXHUwNEIwJzonXFx1MDRCMScsJ1xcdTA0QjInOidcXHUwNEIzJywnXFx1MDRCNCc6J1xcdTA0QjUnLCdcXHUwNEI2JzonXFx1MDRCNycsJ1xcdTA0QjgnOidcXHUwNEI5JywnXFx1MDRCQSc6J1xcdTA0QkInLCdcXHUwNEJDJzonXFx1MDRCRCcsJ1xcdTA0QkUnOidcXHUwNEJGJywnXFx1MDRDMCc6J1xcdTA0Q0YnLCdcXHUwNEMxJzonXFx1MDRDMicsJ1xcdTA0QzMnOidcXHUwNEM0JywnXFx1MDRDNSc6J1xcdTA0QzYnLCdcXHUwNEM3JzonXFx1MDRDOCcsJ1xcdTA0QzknOidcXHUwNENBJywnXFx1MDRDQic6J1xcdTA0Q0MnLCdcXHUwNENEJzonXFx1MDRDRScsJ1xcdTA0RDAnOidcXHUwNEQxJywnXFx1MDREMic6J1xcdTA0RDMnLCdcXHUwNEQ0JzonXFx1MDRENScsJ1xcdTA0RDYnOidcXHUwNEQ3JywnXFx1MDREOCc6J1xcdTA0RDknLCdcXHUwNERBJzonXFx1MDREQicsJ1xcdTA0REMnOidcXHUwNEREJywnXFx1MDRERSc6J1xcdTA0REYnLCdcXHUwNEUwJzonXFx1MDRFMScsJ1xcdTA0RTInOidcXHUwNEUzJywnXFx1MDRFNCc6J1xcdTA0RTUnLCdcXHUwNEU2JzonXFx1MDRFNycsJ1xcdTA0RTgnOidcXHUwNEU5JywnXFx1MDRFQSc6J1xcdTA0RUInLCdcXHUwNEVDJzonXFx1MDRFRCcsJ1xcdTA0RUUnOidcXHUwNEVGJywnXFx1MDRGMCc6J1xcdTA0RjEnLCdcXHUwNEYyJzonXFx1MDRGMycsJ1xcdTA0RjQnOidcXHUwNEY1JywnXFx1MDRGNic6J1xcdTA0RjcnLCdcXHUwNEY4JzonXFx1MDRGOScsJ1xcdTA0RkEnOidcXHUwNEZCJywnXFx1MDRGQyc6J1xcdTA0RkQnLCdcXHUwNEZFJzonXFx1MDRGRicsJ1xcdTA1MDAnOidcXHUwNTAxJywnXFx1MDUwMic6J1xcdTA1MDMnLCdcXHUwNTA0JzonXFx1MDUwNScsJ1xcdTA1MDYnOidcXHUwNTA3JywnXFx1MDUwOCc6J1xcdTA1MDknLCdcXHUwNTBBJzonXFx1MDUwQicsJ1xcdTA1MEMnOidcXHUwNTBEJywnXFx1MDUwRSc6J1xcdTA1MEYnLCdcXHUwNTEwJzonXFx1MDUxMScsJ1xcdTA1MTInOidcXHUwNTEzJywnXFx1MDUxNCc6J1xcdTA1MTUnLCdcXHUwNTE2JzonXFx1MDUxNycsJ1xcdTA1MTgnOidcXHUwNTE5JywnXFx1MDUxQSc6J1xcdTA1MUInLCdcXHUwNTFDJzonXFx1MDUxRCcsJ1xcdTA1MUUnOidcXHUwNTFGJywnXFx1MDUyMCc6J1xcdTA1MjEnLCdcXHUwNTIyJzonXFx1MDUyMycsJ1xcdTA1MjQnOidcXHUwNTI1JywnXFx1MDUyNic6J1xcdTA1MjcnLCdcXHUwNTI4JzonXFx1MDUyOScsJ1xcdTA1MkEnOidcXHUwNTJCJywnXFx1MDUyQyc6J1xcdTA1MkQnLCdcXHUwNTJFJzonXFx1MDUyRicsJ1xcdTA1MzEnOidcXHUwNTYxJywnXFx1MDUzMic6J1xcdTA1NjInLCdcXHUwNTMzJzonXFx1MDU2MycsJ1xcdTA1MzQnOidcXHUwNTY0JywnXFx1MDUzNSc6J1xcdTA1NjUnLCdcXHUwNTM2JzonXFx1MDU2NicsJ1xcdTA1MzcnOidcXHUwNTY3JywnXFx1MDUzOCc6J1xcdTA1NjgnLCdcXHUwNTM5JzonXFx1MDU2OScsJ1xcdTA1M0EnOidcXHUwNTZBJywnXFx1MDUzQic6J1xcdTA1NkInLCdcXHUwNTNDJzonXFx1MDU2QycsJ1xcdTA1M0QnOidcXHUwNTZEJywnXFx1MDUzRSc6J1xcdTA1NkUnLCdcXHUwNTNGJzonXFx1MDU2RicsJ1xcdTA1NDAnOidcXHUwNTcwJywnXFx1MDU0MSc6J1xcdTA1NzEnLCdcXHUwNTQyJzonXFx1MDU3MicsJ1xcdTA1NDMnOidcXHUwNTczJywnXFx1MDU0NCc6J1xcdTA1NzQnLCdcXHUwNTQ1JzonXFx1MDU3NScsJ1xcdTA1NDYnOidcXHUwNTc2JywnXFx1MDU0Nyc6J1xcdTA1NzcnLCdcXHUwNTQ4JzonXFx1MDU3OCcsJ1xcdTA1NDknOidcXHUwNTc5JywnXFx1MDU0QSc6J1xcdTA1N0EnLCdcXHUwNTRCJzonXFx1MDU3QicsJ1xcdTA1NEMnOidcXHUwNTdDJywnXFx1MDU0RCc6J1xcdTA1N0QnLCdcXHUwNTRFJzonXFx1MDU3RScsJ1xcdTA1NEYnOidcXHUwNTdGJywnXFx1MDU1MCc6J1xcdTA1ODAnLCdcXHUwNTUxJzonXFx1MDU4MScsJ1xcdTA1NTInOidcXHUwNTgyJywnXFx1MDU1Myc6J1xcdTA1ODMnLCdcXHUwNTU0JzonXFx1MDU4NCcsJ1xcdTA1NTUnOidcXHUwNTg1JywnXFx1MDU1Nic6J1xcdTA1ODYnLCdcXHUxMEEwJzonXFx1MkQwMCcsJ1xcdTEwQTEnOidcXHUyRDAxJywnXFx1MTBBMic6J1xcdTJEMDInLCdcXHUxMEEzJzonXFx1MkQwMycsJ1xcdTEwQTQnOidcXHUyRDA0JywnXFx1MTBBNSc6J1xcdTJEMDUnLCdcXHUxMEE2JzonXFx1MkQwNicsJ1xcdTEwQTcnOidcXHUyRDA3JywnXFx1MTBBOCc6J1xcdTJEMDgnLCdcXHUxMEE5JzonXFx1MkQwOScsJ1xcdTEwQUEnOidcXHUyRDBBJywnXFx1MTBBQic6J1xcdTJEMEInLCdcXHUxMEFDJzonXFx1MkQwQycsJ1xcdTEwQUQnOidcXHUyRDBEJywnXFx1MTBBRSc6J1xcdTJEMEUnLCdcXHUxMEFGJzonXFx1MkQwRicsJ1xcdTEwQjAnOidcXHUyRDEwJywnXFx1MTBCMSc6J1xcdTJEMTEnLCdcXHUxMEIyJzonXFx1MkQxMicsJ1xcdTEwQjMnOidcXHUyRDEzJywnXFx1MTBCNCc6J1xcdTJEMTQnLCdcXHUxMEI1JzonXFx1MkQxNScsJ1xcdTEwQjYnOidcXHUyRDE2JywnXFx1MTBCNyc6J1xcdTJEMTcnLCdcXHUxMEI4JzonXFx1MkQxOCcsJ1xcdTEwQjknOidcXHUyRDE5JywnXFx1MTBCQSc6J1xcdTJEMUEnLCdcXHUxMEJCJzonXFx1MkQxQicsJ1xcdTEwQkMnOidcXHUyRDFDJywnXFx1MTBCRCc6J1xcdTJEMUQnLCdcXHUxMEJFJzonXFx1MkQxRScsJ1xcdTEwQkYnOidcXHUyRDFGJywnXFx1MTBDMCc6J1xcdTJEMjAnLCdcXHUxMEMxJzonXFx1MkQyMScsJ1xcdTEwQzInOidcXHUyRDIyJywnXFx1MTBDMyc6J1xcdTJEMjMnLCdcXHUxMEM0JzonXFx1MkQyNCcsJ1xcdTEwQzUnOidcXHUyRDI1JywnXFx1MTBDNyc6J1xcdTJEMjcnLCdcXHUxMENEJzonXFx1MkQyRCcsJ1xcdTFFMDAnOidcXHUxRTAxJywnXFx1MUUwMic6J1xcdTFFMDMnLCdcXHUxRTA0JzonXFx1MUUwNScsJ1xcdTFFMDYnOidcXHUxRTA3JywnXFx1MUUwOCc6J1xcdTFFMDknLCdcXHUxRTBBJzonXFx1MUUwQicsJ1xcdTFFMEMnOidcXHUxRTBEJywnXFx1MUUwRSc6J1xcdTFFMEYnLCdcXHUxRTEwJzonXFx1MUUxMScsJ1xcdTFFMTInOidcXHUxRTEzJywnXFx1MUUxNCc6J1xcdTFFMTUnLCdcXHUxRTE2JzonXFx1MUUxNycsJ1xcdTFFMTgnOidcXHUxRTE5JywnXFx1MUUxQSc6J1xcdTFFMUInLCdcXHUxRTFDJzonXFx1MUUxRCcsJ1xcdTFFMUUnOidcXHUxRTFGJywnXFx1MUUyMCc6J1xcdTFFMjEnLCdcXHUxRTIyJzonXFx1MUUyMycsJ1xcdTFFMjQnOidcXHUxRTI1JywnXFx1MUUyNic6J1xcdTFFMjcnLCdcXHUxRTI4JzonXFx1MUUyOScsJ1xcdTFFMkEnOidcXHUxRTJCJywnXFx1MUUyQyc6J1xcdTFFMkQnLCdcXHUxRTJFJzonXFx1MUUyRicsJ1xcdTFFMzAnOidcXHUxRTMxJywnXFx1MUUzMic6J1xcdTFFMzMnLCdcXHUxRTM0JzonXFx1MUUzNScsJ1xcdTFFMzYnOidcXHUxRTM3JywnXFx1MUUzOCc6J1xcdTFFMzknLCdcXHUxRTNBJzonXFx1MUUzQicsJ1xcdTFFM0MnOidcXHUxRTNEJywnXFx1MUUzRSc6J1xcdTFFM0YnLCdcXHUxRTQwJzonXFx1MUU0MScsJ1xcdTFFNDInOidcXHUxRTQzJywnXFx1MUU0NCc6J1xcdTFFNDUnLCdcXHUxRTQ2JzonXFx1MUU0NycsJ1xcdTFFNDgnOidcXHUxRTQ5JywnXFx1MUU0QSc6J1xcdTFFNEInLCdcXHUxRTRDJzonXFx1MUU0RCcsJ1xcdTFFNEUnOidcXHUxRTRGJywnXFx1MUU1MCc6J1xcdTFFNTEnLCdcXHUxRTUyJzonXFx1MUU1MycsJ1xcdTFFNTQnOidcXHUxRTU1JywnXFx1MUU1Nic6J1xcdTFFNTcnLCdcXHUxRTU4JzonXFx1MUU1OScsJ1xcdTFFNUEnOidcXHUxRTVCJywnXFx1MUU1Qyc6J1xcdTFFNUQnLCdcXHUxRTVFJzonXFx1MUU1RicsJ1xcdTFFNjAnOidcXHUxRTYxJywnXFx1MUU2Mic6J1xcdTFFNjMnLCdcXHUxRTY0JzonXFx1MUU2NScsJ1xcdTFFNjYnOidcXHUxRTY3JywnXFx1MUU2OCc6J1xcdTFFNjknLCdcXHUxRTZBJzonXFx1MUU2QicsJ1xcdTFFNkMnOidcXHUxRTZEJywnXFx1MUU2RSc6J1xcdTFFNkYnLCdcXHUxRTcwJzonXFx1MUU3MScsJ1xcdTFFNzInOidcXHUxRTczJywnXFx1MUU3NCc6J1xcdTFFNzUnLCdcXHUxRTc2JzonXFx1MUU3NycsJ1xcdTFFNzgnOidcXHUxRTc5JywnXFx1MUU3QSc6J1xcdTFFN0InLCdcXHUxRTdDJzonXFx1MUU3RCcsJ1xcdTFFN0UnOidcXHUxRTdGJywnXFx1MUU4MCc6J1xcdTFFODEnLCdcXHUxRTgyJzonXFx1MUU4MycsJ1xcdTFFODQnOidcXHUxRTg1JywnXFx1MUU4Nic6J1xcdTFFODcnLCdcXHUxRTg4JzonXFx1MUU4OScsJ1xcdTFFOEEnOidcXHUxRThCJywnXFx1MUU4Qyc6J1xcdTFFOEQnLCdcXHUxRThFJzonXFx1MUU4RicsJ1xcdTFFOTAnOidcXHUxRTkxJywnXFx1MUU5Mic6J1xcdTFFOTMnLCdcXHUxRTk0JzonXFx1MUU5NScsJ1xcdTFFOUInOidcXHUxRTYxJywnXFx1MUVBMCc6J1xcdTFFQTEnLCdcXHUxRUEyJzonXFx1MUVBMycsJ1xcdTFFQTQnOidcXHUxRUE1JywnXFx1MUVBNic6J1xcdTFFQTcnLCdcXHUxRUE4JzonXFx1MUVBOScsJ1xcdTFFQUEnOidcXHUxRUFCJywnXFx1MUVBQyc6J1xcdTFFQUQnLCdcXHUxRUFFJzonXFx1MUVBRicsJ1xcdTFFQjAnOidcXHUxRUIxJywnXFx1MUVCMic6J1xcdTFFQjMnLCdcXHUxRUI0JzonXFx1MUVCNScsJ1xcdTFFQjYnOidcXHUxRUI3JywnXFx1MUVCOCc6J1xcdTFFQjknLCdcXHUxRUJBJzonXFx1MUVCQicsJ1xcdTFFQkMnOidcXHUxRUJEJywnXFx1MUVCRSc6J1xcdTFFQkYnLCdcXHUxRUMwJzonXFx1MUVDMScsJ1xcdTFFQzInOidcXHUxRUMzJywnXFx1MUVDNCc6J1xcdTFFQzUnLCdcXHUxRUM2JzonXFx1MUVDNycsJ1xcdTFFQzgnOidcXHUxRUM5JywnXFx1MUVDQSc6J1xcdTFFQ0InLCdcXHUxRUNDJzonXFx1MUVDRCcsJ1xcdTFFQ0UnOidcXHUxRUNGJywnXFx1MUVEMCc6J1xcdTFFRDEnLCdcXHUxRUQyJzonXFx1MUVEMycsJ1xcdTFFRDQnOidcXHUxRUQ1JywnXFx1MUVENic6J1xcdTFFRDcnLCdcXHUxRUQ4JzonXFx1MUVEOScsJ1xcdTFFREEnOidcXHUxRURCJywnXFx1MUVEQyc6J1xcdTFFREQnLCdcXHUxRURFJzonXFx1MUVERicsJ1xcdTFFRTAnOidcXHUxRUUxJywnXFx1MUVFMic6J1xcdTFFRTMnLCdcXHUxRUU0JzonXFx1MUVFNScsJ1xcdTFFRTYnOidcXHUxRUU3JywnXFx1MUVFOCc6J1xcdTFFRTknLCdcXHUxRUVBJzonXFx1MUVFQicsJ1xcdTFFRUMnOidcXHUxRUVEJywnXFx1MUVFRSc6J1xcdTFFRUYnLCdcXHUxRUYwJzonXFx1MUVGMScsJ1xcdTFFRjInOidcXHUxRUYzJywnXFx1MUVGNCc6J1xcdTFFRjUnLCdcXHUxRUY2JzonXFx1MUVGNycsJ1xcdTFFRjgnOidcXHUxRUY5JywnXFx1MUVGQSc6J1xcdTFFRkInLCdcXHUxRUZDJzonXFx1MUVGRCcsJ1xcdTFFRkUnOidcXHUxRUZGJywnXFx1MUYwOCc6J1xcdTFGMDAnLCdcXHUxRjA5JzonXFx1MUYwMScsJ1xcdTFGMEEnOidcXHUxRjAyJywnXFx1MUYwQic6J1xcdTFGMDMnLCdcXHUxRjBDJzonXFx1MUYwNCcsJ1xcdTFGMEQnOidcXHUxRjA1JywnXFx1MUYwRSc6J1xcdTFGMDYnLCdcXHUxRjBGJzonXFx1MUYwNycsJ1xcdTFGMTgnOidcXHUxRjEwJywnXFx1MUYxOSc6J1xcdTFGMTEnLCdcXHUxRjFBJzonXFx1MUYxMicsJ1xcdTFGMUInOidcXHUxRjEzJywnXFx1MUYxQyc6J1xcdTFGMTQnLCdcXHUxRjFEJzonXFx1MUYxNScsJ1xcdTFGMjgnOidcXHUxRjIwJywnXFx1MUYyOSc6J1xcdTFGMjEnLCdcXHUxRjJBJzonXFx1MUYyMicsJ1xcdTFGMkInOidcXHUxRjIzJywnXFx1MUYyQyc6J1xcdTFGMjQnLCdcXHUxRjJEJzonXFx1MUYyNScsJ1xcdTFGMkUnOidcXHUxRjI2JywnXFx1MUYyRic6J1xcdTFGMjcnLCdcXHUxRjM4JzonXFx1MUYzMCcsJ1xcdTFGMzknOidcXHUxRjMxJywnXFx1MUYzQSc6J1xcdTFGMzInLCdcXHUxRjNCJzonXFx1MUYzMycsJ1xcdTFGM0MnOidcXHUxRjM0JywnXFx1MUYzRCc6J1xcdTFGMzUnLCdcXHUxRjNFJzonXFx1MUYzNicsJ1xcdTFGM0YnOidcXHUxRjM3JywnXFx1MUY0OCc6J1xcdTFGNDAnLCdcXHUxRjQ5JzonXFx1MUY0MScsJ1xcdTFGNEEnOidcXHUxRjQyJywnXFx1MUY0Qic6J1xcdTFGNDMnLCdcXHUxRjRDJzonXFx1MUY0NCcsJ1xcdTFGNEQnOidcXHUxRjQ1JywnXFx1MUY1OSc6J1xcdTFGNTEnLCdcXHUxRjVCJzonXFx1MUY1MycsJ1xcdTFGNUQnOidcXHUxRjU1JywnXFx1MUY1Ric6J1xcdTFGNTcnLCdcXHUxRjY4JzonXFx1MUY2MCcsJ1xcdTFGNjknOidcXHUxRjYxJywnXFx1MUY2QSc6J1xcdTFGNjInLCdcXHUxRjZCJzonXFx1MUY2MycsJ1xcdTFGNkMnOidcXHUxRjY0JywnXFx1MUY2RCc6J1xcdTFGNjUnLCdcXHUxRjZFJzonXFx1MUY2NicsJ1xcdTFGNkYnOidcXHUxRjY3JywnXFx1MUZCOCc6J1xcdTFGQjAnLCdcXHUxRkI5JzonXFx1MUZCMScsJ1xcdTFGQkEnOidcXHUxRjcwJywnXFx1MUZCQic6J1xcdTFGNzEnLCdcXHUxRkJFJzonXFx1MDNCOScsJ1xcdTFGQzgnOidcXHUxRjcyJywnXFx1MUZDOSc6J1xcdTFGNzMnLCdcXHUxRkNBJzonXFx1MUY3NCcsJ1xcdTFGQ0InOidcXHUxRjc1JywnXFx1MUZEOCc6J1xcdTFGRDAnLCdcXHUxRkQ5JzonXFx1MUZEMScsJ1xcdTFGREEnOidcXHUxRjc2JywnXFx1MUZEQic6J1xcdTFGNzcnLCdcXHUxRkU4JzonXFx1MUZFMCcsJ1xcdTFGRTknOidcXHUxRkUxJywnXFx1MUZFQSc6J1xcdTFGN0EnLCdcXHUxRkVCJzonXFx1MUY3QicsJ1xcdTFGRUMnOidcXHUxRkU1JywnXFx1MUZGOCc6J1xcdTFGNzgnLCdcXHUxRkY5JzonXFx1MUY3OScsJ1xcdTFGRkEnOidcXHUxRjdDJywnXFx1MUZGQic6J1xcdTFGN0QnLCdcXHUyMTI2JzonXFx1MDNDOScsJ1xcdTIxMkEnOidrJywnXFx1MjEyQic6J1xceEU1JywnXFx1MjEzMic6J1xcdTIxNEUnLCdcXHUyMTYwJzonXFx1MjE3MCcsJ1xcdTIxNjEnOidcXHUyMTcxJywnXFx1MjE2Mic6J1xcdTIxNzInLCdcXHUyMTYzJzonXFx1MjE3MycsJ1xcdTIxNjQnOidcXHUyMTc0JywnXFx1MjE2NSc6J1xcdTIxNzUnLCdcXHUyMTY2JzonXFx1MjE3NicsJ1xcdTIxNjcnOidcXHUyMTc3JywnXFx1MjE2OCc6J1xcdTIxNzgnLCdcXHUyMTY5JzonXFx1MjE3OScsJ1xcdTIxNkEnOidcXHUyMTdBJywnXFx1MjE2Qic6J1xcdTIxN0InLCdcXHUyMTZDJzonXFx1MjE3QycsJ1xcdTIxNkQnOidcXHUyMTdEJywnXFx1MjE2RSc6J1xcdTIxN0UnLCdcXHUyMTZGJzonXFx1MjE3RicsJ1xcdTIxODMnOidcXHUyMTg0JywnXFx1MjRCNic6J1xcdTI0RDAnLCdcXHUyNEI3JzonXFx1MjREMScsJ1xcdTI0QjgnOidcXHUyNEQyJywnXFx1MjRCOSc6J1xcdTI0RDMnLCdcXHUyNEJBJzonXFx1MjRENCcsJ1xcdTI0QkInOidcXHUyNEQ1JywnXFx1MjRCQyc6J1xcdTI0RDYnLCdcXHUyNEJEJzonXFx1MjRENycsJ1xcdTI0QkUnOidcXHUyNEQ4JywnXFx1MjRCRic6J1xcdTI0RDknLCdcXHUyNEMwJzonXFx1MjREQScsJ1xcdTI0QzEnOidcXHUyNERCJywnXFx1MjRDMic6J1xcdTI0REMnLCdcXHUyNEMzJzonXFx1MjRERCcsJ1xcdTI0QzQnOidcXHUyNERFJywnXFx1MjRDNSc6J1xcdTI0REYnLCdcXHUyNEM2JzonXFx1MjRFMCcsJ1xcdTI0QzcnOidcXHUyNEUxJywnXFx1MjRDOCc6J1xcdTI0RTInLCdcXHUyNEM5JzonXFx1MjRFMycsJ1xcdTI0Q0EnOidcXHUyNEU0JywnXFx1MjRDQic6J1xcdTI0RTUnLCdcXHUyNENDJzonXFx1MjRFNicsJ1xcdTI0Q0QnOidcXHUyNEU3JywnXFx1MjRDRSc6J1xcdTI0RTgnLCdcXHUyNENGJzonXFx1MjRFOScsJ1xcdTJDMDAnOidcXHUyQzMwJywnXFx1MkMwMSc6J1xcdTJDMzEnLCdcXHUyQzAyJzonXFx1MkMzMicsJ1xcdTJDMDMnOidcXHUyQzMzJywnXFx1MkMwNCc6J1xcdTJDMzQnLCdcXHUyQzA1JzonXFx1MkMzNScsJ1xcdTJDMDYnOidcXHUyQzM2JywnXFx1MkMwNyc6J1xcdTJDMzcnLCdcXHUyQzA4JzonXFx1MkMzOCcsJ1xcdTJDMDknOidcXHUyQzM5JywnXFx1MkMwQSc6J1xcdTJDM0EnLCdcXHUyQzBCJzonXFx1MkMzQicsJ1xcdTJDMEMnOidcXHUyQzNDJywnXFx1MkMwRCc6J1xcdTJDM0QnLCdcXHUyQzBFJzonXFx1MkMzRScsJ1xcdTJDMEYnOidcXHUyQzNGJywnXFx1MkMxMCc6J1xcdTJDNDAnLCdcXHUyQzExJzonXFx1MkM0MScsJ1xcdTJDMTInOidcXHUyQzQyJywnXFx1MkMxMyc6J1xcdTJDNDMnLCdcXHUyQzE0JzonXFx1MkM0NCcsJ1xcdTJDMTUnOidcXHUyQzQ1JywnXFx1MkMxNic6J1xcdTJDNDYnLCdcXHUyQzE3JzonXFx1MkM0NycsJ1xcdTJDMTgnOidcXHUyQzQ4JywnXFx1MkMxOSc6J1xcdTJDNDknLCdcXHUyQzFBJzonXFx1MkM0QScsJ1xcdTJDMUInOidcXHUyQzRCJywnXFx1MkMxQyc6J1xcdTJDNEMnLCdcXHUyQzFEJzonXFx1MkM0RCcsJ1xcdTJDMUUnOidcXHUyQzRFJywnXFx1MkMxRic6J1xcdTJDNEYnLCdcXHUyQzIwJzonXFx1MkM1MCcsJ1xcdTJDMjEnOidcXHUyQzUxJywnXFx1MkMyMic6J1xcdTJDNTInLCdcXHUyQzIzJzonXFx1MkM1MycsJ1xcdTJDMjQnOidcXHUyQzU0JywnXFx1MkMyNSc6J1xcdTJDNTUnLCdcXHUyQzI2JzonXFx1MkM1NicsJ1xcdTJDMjcnOidcXHUyQzU3JywnXFx1MkMyOCc6J1xcdTJDNTgnLCdcXHUyQzI5JzonXFx1MkM1OScsJ1xcdTJDMkEnOidcXHUyQzVBJywnXFx1MkMyQic6J1xcdTJDNUInLCdcXHUyQzJDJzonXFx1MkM1QycsJ1xcdTJDMkQnOidcXHUyQzVEJywnXFx1MkMyRSc6J1xcdTJDNUUnLCdcXHUyQzYwJzonXFx1MkM2MScsJ1xcdTJDNjInOidcXHUwMjZCJywnXFx1MkM2Myc6J1xcdTFEN0QnLCdcXHUyQzY0JzonXFx1MDI3RCcsJ1xcdTJDNjcnOidcXHUyQzY4JywnXFx1MkM2OSc6J1xcdTJDNkEnLCdcXHUyQzZCJzonXFx1MkM2QycsJ1xcdTJDNkQnOidcXHUwMjUxJywnXFx1MkM2RSc6J1xcdTAyNzEnLCdcXHUyQzZGJzonXFx1MDI1MCcsJ1xcdTJDNzAnOidcXHUwMjUyJywnXFx1MkM3Mic6J1xcdTJDNzMnLCdcXHUyQzc1JzonXFx1MkM3NicsJ1xcdTJDN0UnOidcXHUwMjNGJywnXFx1MkM3Ric6J1xcdTAyNDAnLCdcXHUyQzgwJzonXFx1MkM4MScsJ1xcdTJDODInOidcXHUyQzgzJywnXFx1MkM4NCc6J1xcdTJDODUnLCdcXHUyQzg2JzonXFx1MkM4NycsJ1xcdTJDODgnOidcXHUyQzg5JywnXFx1MkM4QSc6J1xcdTJDOEInLCdcXHUyQzhDJzonXFx1MkM4RCcsJ1xcdTJDOEUnOidcXHUyQzhGJywnXFx1MkM5MCc6J1xcdTJDOTEnLCdcXHUyQzkyJzonXFx1MkM5MycsJ1xcdTJDOTQnOidcXHUyQzk1JywnXFx1MkM5Nic6J1xcdTJDOTcnLCdcXHUyQzk4JzonXFx1MkM5OScsJ1xcdTJDOUEnOidcXHUyQzlCJywnXFx1MkM5Qyc6J1xcdTJDOUQnLCdcXHUyQzlFJzonXFx1MkM5RicsJ1xcdTJDQTAnOidcXHUyQ0ExJywnXFx1MkNBMic6J1xcdTJDQTMnLCdcXHUyQ0E0JzonXFx1MkNBNScsJ1xcdTJDQTYnOidcXHUyQ0E3JywnXFx1MkNBOCc6J1xcdTJDQTknLCdcXHUyQ0FBJzonXFx1MkNBQicsJ1xcdTJDQUMnOidcXHUyQ0FEJywnXFx1MkNBRSc6J1xcdTJDQUYnLCdcXHUyQ0IwJzonXFx1MkNCMScsJ1xcdTJDQjInOidcXHUyQ0IzJywnXFx1MkNCNCc6J1xcdTJDQjUnLCdcXHUyQ0I2JzonXFx1MkNCNycsJ1xcdTJDQjgnOidcXHUyQ0I5JywnXFx1MkNCQSc6J1xcdTJDQkInLCdcXHUyQ0JDJzonXFx1MkNCRCcsJ1xcdTJDQkUnOidcXHUyQ0JGJywnXFx1MkNDMCc6J1xcdTJDQzEnLCdcXHUyQ0MyJzonXFx1MkNDMycsJ1xcdTJDQzQnOidcXHUyQ0M1JywnXFx1MkNDNic6J1xcdTJDQzcnLCdcXHUyQ0M4JzonXFx1MkNDOScsJ1xcdTJDQ0EnOidcXHUyQ0NCJywnXFx1MkNDQyc6J1xcdTJDQ0QnLCdcXHUyQ0NFJzonXFx1MkNDRicsJ1xcdTJDRDAnOidcXHUyQ0QxJywnXFx1MkNEMic6J1xcdTJDRDMnLCdcXHUyQ0Q0JzonXFx1MkNENScsJ1xcdTJDRDYnOidcXHUyQ0Q3JywnXFx1MkNEOCc6J1xcdTJDRDknLCdcXHUyQ0RBJzonXFx1MkNEQicsJ1xcdTJDREMnOidcXHUyQ0REJywnXFx1MkNERSc6J1xcdTJDREYnLCdcXHUyQ0UwJzonXFx1MkNFMScsJ1xcdTJDRTInOidcXHUyQ0UzJywnXFx1MkNFQic6J1xcdTJDRUMnLCdcXHUyQ0VEJzonXFx1MkNFRScsJ1xcdTJDRjInOidcXHUyQ0YzJywnXFx1QTY0MCc6J1xcdUE2NDEnLCdcXHVBNjQyJzonXFx1QTY0MycsJ1xcdUE2NDQnOidcXHVBNjQ1JywnXFx1QTY0Nic6J1xcdUE2NDcnLCdcXHVBNjQ4JzonXFx1QTY0OScsJ1xcdUE2NEEnOidcXHVBNjRCJywnXFx1QTY0Qyc6J1xcdUE2NEQnLCdcXHVBNjRFJzonXFx1QTY0RicsJ1xcdUE2NTAnOidcXHVBNjUxJywnXFx1QTY1Mic6J1xcdUE2NTMnLCdcXHVBNjU0JzonXFx1QTY1NScsJ1xcdUE2NTYnOidcXHVBNjU3JywnXFx1QTY1OCc6J1xcdUE2NTknLCdcXHVBNjVBJzonXFx1QTY1QicsJ1xcdUE2NUMnOidcXHVBNjVEJywnXFx1QTY1RSc6J1xcdUE2NUYnLCdcXHVBNjYwJzonXFx1QTY2MScsJ1xcdUE2NjInOidcXHVBNjYzJywnXFx1QTY2NCc6J1xcdUE2NjUnLCdcXHVBNjY2JzonXFx1QTY2NycsJ1xcdUE2NjgnOidcXHVBNjY5JywnXFx1QTY2QSc6J1xcdUE2NkInLCdcXHVBNjZDJzonXFx1QTY2RCcsJ1xcdUE2ODAnOidcXHVBNjgxJywnXFx1QTY4Mic6J1xcdUE2ODMnLCdcXHVBNjg0JzonXFx1QTY4NScsJ1xcdUE2ODYnOidcXHVBNjg3JywnXFx1QTY4OCc6J1xcdUE2ODknLCdcXHVBNjhBJzonXFx1QTY4QicsJ1xcdUE2OEMnOidcXHVBNjhEJywnXFx1QTY4RSc6J1xcdUE2OEYnLCdcXHVBNjkwJzonXFx1QTY5MScsJ1xcdUE2OTInOidcXHVBNjkzJywnXFx1QTY5NCc6J1xcdUE2OTUnLCdcXHVBNjk2JzonXFx1QTY5NycsJ1xcdUE2OTgnOidcXHVBNjk5JywnXFx1QTY5QSc6J1xcdUE2OUInLCdcXHVBNzIyJzonXFx1QTcyMycsJ1xcdUE3MjQnOidcXHVBNzI1JywnXFx1QTcyNic6J1xcdUE3MjcnLCdcXHVBNzI4JzonXFx1QTcyOScsJ1xcdUE3MkEnOidcXHVBNzJCJywnXFx1QTcyQyc6J1xcdUE3MkQnLCdcXHVBNzJFJzonXFx1QTcyRicsJ1xcdUE3MzInOidcXHVBNzMzJywnXFx1QTczNCc6J1xcdUE3MzUnLCdcXHVBNzM2JzonXFx1QTczNycsJ1xcdUE3MzgnOidcXHVBNzM5JywnXFx1QTczQSc6J1xcdUE3M0InLCdcXHVBNzNDJzonXFx1QTczRCcsJ1xcdUE3M0UnOidcXHVBNzNGJywnXFx1QTc0MCc6J1xcdUE3NDEnLCdcXHVBNzQyJzonXFx1QTc0MycsJ1xcdUE3NDQnOidcXHVBNzQ1JywnXFx1QTc0Nic6J1xcdUE3NDcnLCdcXHVBNzQ4JzonXFx1QTc0OScsJ1xcdUE3NEEnOidcXHVBNzRCJywnXFx1QTc0Qyc6J1xcdUE3NEQnLCdcXHVBNzRFJzonXFx1QTc0RicsJ1xcdUE3NTAnOidcXHVBNzUxJywnXFx1QTc1Mic6J1xcdUE3NTMnLCdcXHVBNzU0JzonXFx1QTc1NScsJ1xcdUE3NTYnOidcXHVBNzU3JywnXFx1QTc1OCc6J1xcdUE3NTknLCdcXHVBNzVBJzonXFx1QTc1QicsJ1xcdUE3NUMnOidcXHVBNzVEJywnXFx1QTc1RSc6J1xcdUE3NUYnLCdcXHVBNzYwJzonXFx1QTc2MScsJ1xcdUE3NjInOidcXHVBNzYzJywnXFx1QTc2NCc6J1xcdUE3NjUnLCdcXHVBNzY2JzonXFx1QTc2NycsJ1xcdUE3NjgnOidcXHVBNzY5JywnXFx1QTc2QSc6J1xcdUE3NkInLCdcXHVBNzZDJzonXFx1QTc2RCcsJ1xcdUE3NkUnOidcXHVBNzZGJywnXFx1QTc3OSc6J1xcdUE3N0EnLCdcXHVBNzdCJzonXFx1QTc3QycsJ1xcdUE3N0QnOidcXHUxRDc5JywnXFx1QTc3RSc6J1xcdUE3N0YnLCdcXHVBNzgwJzonXFx1QTc4MScsJ1xcdUE3ODInOidcXHVBNzgzJywnXFx1QTc4NCc6J1xcdUE3ODUnLCdcXHVBNzg2JzonXFx1QTc4NycsJ1xcdUE3OEInOidcXHVBNzhDJywnXFx1QTc4RCc6J1xcdTAyNjUnLCdcXHVBNzkwJzonXFx1QTc5MScsJ1xcdUE3OTInOidcXHVBNzkzJywnXFx1QTc5Nic6J1xcdUE3OTcnLCdcXHVBNzk4JzonXFx1QTc5OScsJ1xcdUE3OUEnOidcXHVBNzlCJywnXFx1QTc5Qyc6J1xcdUE3OUQnLCdcXHVBNzlFJzonXFx1QTc5RicsJ1xcdUE3QTAnOidcXHVBN0ExJywnXFx1QTdBMic6J1xcdUE3QTMnLCdcXHVBN0E0JzonXFx1QTdBNScsJ1xcdUE3QTYnOidcXHVBN0E3JywnXFx1QTdBOCc6J1xcdUE3QTknLCdcXHVBN0FBJzonXFx1MDI2NicsJ1xcdUE3QUInOidcXHUwMjVDJywnXFx1QTdBQyc6J1xcdTAyNjEnLCdcXHVBN0FEJzonXFx1MDI2QycsJ1xcdUE3QjAnOidcXHUwMjlFJywnXFx1QTdCMSc6J1xcdTAyODcnLCdcXHVGRjIxJzonXFx1RkY0MScsJ1xcdUZGMjInOidcXHVGRjQyJywnXFx1RkYyMyc6J1xcdUZGNDMnLCdcXHVGRjI0JzonXFx1RkY0NCcsJ1xcdUZGMjUnOidcXHVGRjQ1JywnXFx1RkYyNic6J1xcdUZGNDYnLCdcXHVGRjI3JzonXFx1RkY0NycsJ1xcdUZGMjgnOidcXHVGRjQ4JywnXFx1RkYyOSc6J1xcdUZGNDknLCdcXHVGRjJBJzonXFx1RkY0QScsJ1xcdUZGMkInOidcXHVGRjRCJywnXFx1RkYyQyc6J1xcdUZGNEMnLCdcXHVGRjJEJzonXFx1RkY0RCcsJ1xcdUZGMkUnOidcXHVGRjRFJywnXFx1RkYyRic6J1xcdUZGNEYnLCdcXHVGRjMwJzonXFx1RkY1MCcsJ1xcdUZGMzEnOidcXHVGRjUxJywnXFx1RkYzMic6J1xcdUZGNTInLCdcXHVGRjMzJzonXFx1RkY1MycsJ1xcdUZGMzQnOidcXHVGRjU0JywnXFx1RkYzNSc6J1xcdUZGNTUnLCdcXHVGRjM2JzonXFx1RkY1NicsJ1xcdUZGMzcnOidcXHVGRjU3JywnXFx1RkYzOCc6J1xcdUZGNTgnLCdcXHVGRjM5JzonXFx1RkY1OScsJ1xcdUZGM0EnOidcXHVGRjVBJywnXFx1RDgwMVxcdURDMDAnOidcXHVEODAxXFx1REMyOCcsJ1xcdUQ4MDFcXHVEQzAxJzonXFx1RDgwMVxcdURDMjknLCdcXHVEODAxXFx1REMwMic6J1xcdUQ4MDFcXHVEQzJBJywnXFx1RDgwMVxcdURDMDMnOidcXHVEODAxXFx1REMyQicsJ1xcdUQ4MDFcXHVEQzA0JzonXFx1RDgwMVxcdURDMkMnLCdcXHVEODAxXFx1REMwNSc6J1xcdUQ4MDFcXHVEQzJEJywnXFx1RDgwMVxcdURDMDYnOidcXHVEODAxXFx1REMyRScsJ1xcdUQ4MDFcXHVEQzA3JzonXFx1RDgwMVxcdURDMkYnLCdcXHVEODAxXFx1REMwOCc6J1xcdUQ4MDFcXHVEQzMwJywnXFx1RDgwMVxcdURDMDknOidcXHVEODAxXFx1REMzMScsJ1xcdUQ4MDFcXHVEQzBBJzonXFx1RDgwMVxcdURDMzInLCdcXHVEODAxXFx1REMwQic6J1xcdUQ4MDFcXHVEQzMzJywnXFx1RDgwMVxcdURDMEMnOidcXHVEODAxXFx1REMzNCcsJ1xcdUQ4MDFcXHVEQzBEJzonXFx1RDgwMVxcdURDMzUnLCdcXHVEODAxXFx1REMwRSc6J1xcdUQ4MDFcXHVEQzM2JywnXFx1RDgwMVxcdURDMEYnOidcXHVEODAxXFx1REMzNycsJ1xcdUQ4MDFcXHVEQzEwJzonXFx1RDgwMVxcdURDMzgnLCdcXHVEODAxXFx1REMxMSc6J1xcdUQ4MDFcXHVEQzM5JywnXFx1RDgwMVxcdURDMTInOidcXHVEODAxXFx1REMzQScsJ1xcdUQ4MDFcXHVEQzEzJzonXFx1RDgwMVxcdURDM0InLCdcXHVEODAxXFx1REMxNCc6J1xcdUQ4MDFcXHVEQzNDJywnXFx1RDgwMVxcdURDMTUnOidcXHVEODAxXFx1REMzRCcsJ1xcdUQ4MDFcXHVEQzE2JzonXFx1RDgwMVxcdURDM0UnLCdcXHVEODAxXFx1REMxNyc6J1xcdUQ4MDFcXHVEQzNGJywnXFx1RDgwMVxcdURDMTgnOidcXHVEODAxXFx1REM0MCcsJ1xcdUQ4MDFcXHVEQzE5JzonXFx1RDgwMVxcdURDNDEnLCdcXHVEODAxXFx1REMxQSc6J1xcdUQ4MDFcXHVEQzQyJywnXFx1RDgwMVxcdURDMUInOidcXHVEODAxXFx1REM0MycsJ1xcdUQ4MDFcXHVEQzFDJzonXFx1RDgwMVxcdURDNDQnLCdcXHVEODAxXFx1REMxRCc6J1xcdUQ4MDFcXHVEQzQ1JywnXFx1RDgwMVxcdURDMUUnOidcXHVEODAxXFx1REM0NicsJ1xcdUQ4MDFcXHVEQzFGJzonXFx1RDgwMVxcdURDNDcnLCdcXHVEODAxXFx1REMyMCc6J1xcdUQ4MDFcXHVEQzQ4JywnXFx1RDgwMVxcdURDMjEnOidcXHVEODAxXFx1REM0OScsJ1xcdUQ4MDFcXHVEQzIyJzonXFx1RDgwMVxcdURDNEEnLCdcXHVEODAxXFx1REMyMyc6J1xcdUQ4MDFcXHVEQzRCJywnXFx1RDgwMVxcdURDMjQnOidcXHVEODAxXFx1REM0QycsJ1xcdUQ4MDFcXHVEQzI1JzonXFx1RDgwMVxcdURDNEQnLCdcXHVEODAxXFx1REMyNic6J1xcdUQ4MDFcXHVEQzRFJywnXFx1RDgwMVxcdURDMjcnOidcXHVEODAxXFx1REM0RicsJ1xcdUQ4MDZcXHVEQ0EwJzonXFx1RDgwNlxcdURDQzAnLCdcXHVEODA2XFx1RENBMSc6J1xcdUQ4MDZcXHVEQ0MxJywnXFx1RDgwNlxcdURDQTInOidcXHVEODA2XFx1RENDMicsJ1xcdUQ4MDZcXHVEQ0EzJzonXFx1RDgwNlxcdURDQzMnLCdcXHVEODA2XFx1RENBNCc6J1xcdUQ4MDZcXHVEQ0M0JywnXFx1RDgwNlxcdURDQTUnOidcXHVEODA2XFx1RENDNScsJ1xcdUQ4MDZcXHVEQ0E2JzonXFx1RDgwNlxcdURDQzYnLCdcXHVEODA2XFx1RENBNyc6J1xcdUQ4MDZcXHVEQ0M3JywnXFx1RDgwNlxcdURDQTgnOidcXHVEODA2XFx1RENDOCcsJ1xcdUQ4MDZcXHVEQ0E5JzonXFx1RDgwNlxcdURDQzknLCdcXHVEODA2XFx1RENBQSc6J1xcdUQ4MDZcXHVEQ0NBJywnXFx1RDgwNlxcdURDQUInOidcXHVEODA2XFx1RENDQicsJ1xcdUQ4MDZcXHVEQ0FDJzonXFx1RDgwNlxcdURDQ0MnLCdcXHVEODA2XFx1RENBRCc6J1xcdUQ4MDZcXHVEQ0NEJywnXFx1RDgwNlxcdURDQUUnOidcXHVEODA2XFx1RENDRScsJ1xcdUQ4MDZcXHVEQ0FGJzonXFx1RDgwNlxcdURDQ0YnLCdcXHVEODA2XFx1RENCMCc6J1xcdUQ4MDZcXHVEQ0QwJywnXFx1RDgwNlxcdURDQjEnOidcXHVEODA2XFx1RENEMScsJ1xcdUQ4MDZcXHVEQ0IyJzonXFx1RDgwNlxcdURDRDInLCdcXHVEODA2XFx1RENCMyc6J1xcdUQ4MDZcXHVEQ0QzJywnXFx1RDgwNlxcdURDQjQnOidcXHVEODA2XFx1RENENCcsJ1xcdUQ4MDZcXHVEQ0I1JzonXFx1RDgwNlxcdURDRDUnLCdcXHVEODA2XFx1RENCNic6J1xcdUQ4MDZcXHVEQ0Q2JywnXFx1RDgwNlxcdURDQjcnOidcXHVEODA2XFx1RENENycsJ1xcdUQ4MDZcXHVEQ0I4JzonXFx1RDgwNlxcdURDRDgnLCdcXHVEODA2XFx1RENCOSc6J1xcdUQ4MDZcXHVEQ0Q5JywnXFx1RDgwNlxcdURDQkEnOidcXHVEODA2XFx1RENEQScsJ1xcdUQ4MDZcXHVEQ0JCJzonXFx1RDgwNlxcdURDREInLCdcXHVEODA2XFx1RENCQyc6J1xcdUQ4MDZcXHVEQ0RDJywnXFx1RDgwNlxcdURDQkQnOidcXHVEODA2XFx1RENERCcsJ1xcdUQ4MDZcXHVEQ0JFJzonXFx1RDgwNlxcdURDREUnLCdcXHVEODA2XFx1RENCRic6J1xcdUQ4MDZcXHVEQ0RGJywnXFx4REYnOidzcycsJ1xcdTAxMzAnOidpXFx1MDMwNycsJ1xcdTAxNDknOidcXHUwMkJDbicsJ1xcdTAxRjAnOidqXFx1MDMwQycsJ1xcdTAzOTAnOidcXHUwM0I5XFx1MDMwOFxcdTAzMDEnLCdcXHUwM0IwJzonXFx1MDNDNVxcdTAzMDhcXHUwMzAxJywnXFx1MDU4Nyc6J1xcdTA1NjVcXHUwNTgyJywnXFx1MUU5Nic6J2hcXHUwMzMxJywnXFx1MUU5Nyc6J3RcXHUwMzA4JywnXFx1MUU5OCc6J3dcXHUwMzBBJywnXFx1MUU5OSc6J3lcXHUwMzBBJywnXFx1MUU5QSc6J2FcXHUwMkJFJywnXFx1MUU5RSc6J3NzJywnXFx1MUY1MCc6J1xcdTAzQzVcXHUwMzEzJywnXFx1MUY1Mic6J1xcdTAzQzVcXHUwMzEzXFx1MDMwMCcsJ1xcdTFGNTQnOidcXHUwM0M1XFx1MDMxM1xcdTAzMDEnLCdcXHUxRjU2JzonXFx1MDNDNVxcdTAzMTNcXHUwMzQyJywnXFx1MUY4MCc6J1xcdTFGMDBcXHUwM0I5JywnXFx1MUY4MSc6J1xcdTFGMDFcXHUwM0I5JywnXFx1MUY4Mic6J1xcdTFGMDJcXHUwM0I5JywnXFx1MUY4Myc6J1xcdTFGMDNcXHUwM0I5JywnXFx1MUY4NCc6J1xcdTFGMDRcXHUwM0I5JywnXFx1MUY4NSc6J1xcdTFGMDVcXHUwM0I5JywnXFx1MUY4Nic6J1xcdTFGMDZcXHUwM0I5JywnXFx1MUY4Nyc6J1xcdTFGMDdcXHUwM0I5JywnXFx1MUY4OCc6J1xcdTFGMDBcXHUwM0I5JywnXFx1MUY4OSc6J1xcdTFGMDFcXHUwM0I5JywnXFx1MUY4QSc6J1xcdTFGMDJcXHUwM0I5JywnXFx1MUY4Qic6J1xcdTFGMDNcXHUwM0I5JywnXFx1MUY4Qyc6J1xcdTFGMDRcXHUwM0I5JywnXFx1MUY4RCc6J1xcdTFGMDVcXHUwM0I5JywnXFx1MUY4RSc6J1xcdTFGMDZcXHUwM0I5JywnXFx1MUY4Ric6J1xcdTFGMDdcXHUwM0I5JywnXFx1MUY5MCc6J1xcdTFGMjBcXHUwM0I5JywnXFx1MUY5MSc6J1xcdTFGMjFcXHUwM0I5JywnXFx1MUY5Mic6J1xcdTFGMjJcXHUwM0I5JywnXFx1MUY5Myc6J1xcdTFGMjNcXHUwM0I5JywnXFx1MUY5NCc6J1xcdTFGMjRcXHUwM0I5JywnXFx1MUY5NSc6J1xcdTFGMjVcXHUwM0I5JywnXFx1MUY5Nic6J1xcdTFGMjZcXHUwM0I5JywnXFx1MUY5Nyc6J1xcdTFGMjdcXHUwM0I5JywnXFx1MUY5OCc6J1xcdTFGMjBcXHUwM0I5JywnXFx1MUY5OSc6J1xcdTFGMjFcXHUwM0I5JywnXFx1MUY5QSc6J1xcdTFGMjJcXHUwM0I5JywnXFx1MUY5Qic6J1xcdTFGMjNcXHUwM0I5JywnXFx1MUY5Qyc6J1xcdTFGMjRcXHUwM0I5JywnXFx1MUY5RCc6J1xcdTFGMjVcXHUwM0I5JywnXFx1MUY5RSc6J1xcdTFGMjZcXHUwM0I5JywnXFx1MUY5Ric6J1xcdTFGMjdcXHUwM0I5JywnXFx1MUZBMCc6J1xcdTFGNjBcXHUwM0I5JywnXFx1MUZBMSc6J1xcdTFGNjFcXHUwM0I5JywnXFx1MUZBMic6J1xcdTFGNjJcXHUwM0I5JywnXFx1MUZBMyc6J1xcdTFGNjNcXHUwM0I5JywnXFx1MUZBNCc6J1xcdTFGNjRcXHUwM0I5JywnXFx1MUZBNSc6J1xcdTFGNjVcXHUwM0I5JywnXFx1MUZBNic6J1xcdTFGNjZcXHUwM0I5JywnXFx1MUZBNyc6J1xcdTFGNjdcXHUwM0I5JywnXFx1MUZBOCc6J1xcdTFGNjBcXHUwM0I5JywnXFx1MUZBOSc6J1xcdTFGNjFcXHUwM0I5JywnXFx1MUZBQSc6J1xcdTFGNjJcXHUwM0I5JywnXFx1MUZBQic6J1xcdTFGNjNcXHUwM0I5JywnXFx1MUZBQyc6J1xcdTFGNjRcXHUwM0I5JywnXFx1MUZBRCc6J1xcdTFGNjVcXHUwM0I5JywnXFx1MUZBRSc6J1xcdTFGNjZcXHUwM0I5JywnXFx1MUZBRic6J1xcdTFGNjdcXHUwM0I5JywnXFx1MUZCMic6J1xcdTFGNzBcXHUwM0I5JywnXFx1MUZCMyc6J1xcdTAzQjFcXHUwM0I5JywnXFx1MUZCNCc6J1xcdTAzQUNcXHUwM0I5JywnXFx1MUZCNic6J1xcdTAzQjFcXHUwMzQyJywnXFx1MUZCNyc6J1xcdTAzQjFcXHUwMzQyXFx1MDNCOScsJ1xcdTFGQkMnOidcXHUwM0IxXFx1MDNCOScsJ1xcdTFGQzInOidcXHUxRjc0XFx1MDNCOScsJ1xcdTFGQzMnOidcXHUwM0I3XFx1MDNCOScsJ1xcdTFGQzQnOidcXHUwM0FFXFx1MDNCOScsJ1xcdTFGQzYnOidcXHUwM0I3XFx1MDM0MicsJ1xcdTFGQzcnOidcXHUwM0I3XFx1MDM0MlxcdTAzQjknLCdcXHUxRkNDJzonXFx1MDNCN1xcdTAzQjknLCdcXHUxRkQyJzonXFx1MDNCOVxcdTAzMDhcXHUwMzAwJywnXFx1MUZEMyc6J1xcdTAzQjlcXHUwMzA4XFx1MDMwMScsJ1xcdTFGRDYnOidcXHUwM0I5XFx1MDM0MicsJ1xcdTFGRDcnOidcXHUwM0I5XFx1MDMwOFxcdTAzNDInLCdcXHUxRkUyJzonXFx1MDNDNVxcdTAzMDhcXHUwMzAwJywnXFx1MUZFMyc6J1xcdTAzQzVcXHUwMzA4XFx1MDMwMScsJ1xcdTFGRTQnOidcXHUwM0MxXFx1MDMxMycsJ1xcdTFGRTYnOidcXHUwM0M1XFx1MDM0MicsJ1xcdTFGRTcnOidcXHUwM0M1XFx1MDMwOFxcdTAzNDInLCdcXHUxRkYyJzonXFx1MUY3Q1xcdTAzQjknLCdcXHUxRkYzJzonXFx1MDNDOVxcdTAzQjknLCdcXHUxRkY0JzonXFx1MDNDRVxcdTAzQjknLCdcXHUxRkY2JzonXFx1MDNDOVxcdTAzNDInLCdcXHUxRkY3JzonXFx1MDNDOVxcdTAzNDJcXHUwM0I5JywnXFx1MUZGQyc6J1xcdTAzQzlcXHUwM0I5JywnXFx1RkIwMCc6J2ZmJywnXFx1RkIwMSc6J2ZpJywnXFx1RkIwMic6J2ZsJywnXFx1RkIwMyc6J2ZmaScsJ1xcdUZCMDQnOidmZmwnLCdcXHVGQjA1Jzonc3QnLCdcXHVGQjA2Jzonc3QnLCdcXHVGQjEzJzonXFx1MDU3NFxcdTA1NzYnLCdcXHVGQjE0JzonXFx1MDU3NFxcdTA1NjUnLCdcXHVGQjE1JzonXFx1MDU3NFxcdTA1NkInLCdcXHVGQjE2JzonXFx1MDU3RVxcdTA1NzYnLCdcXHVGQjE3JzonXFx1MDU3NFxcdTA1NkQnfTtcblxuLy8gTm9ybWFsaXplIHJlZmVyZW5jZSBsYWJlbDogY29sbGFwc2UgaW50ZXJuYWwgd2hpdGVzcGFjZVxuLy8gdG8gc2luZ2xlIHNwYWNlLCByZW1vdmUgbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXNlIGZvbGQuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMSwgc3RyaW5nLmxlbmd0aCAtIDEpLnRyaW0oKS5yZXBsYWNlKHJlZ2V4LCBmdW5jdGlvbigkMCkge1xuICAgICAgICAvLyBOb3RlOiB0aGVyZSBpcyBubyBuZWVkIHRvIGNoZWNrIGBoYXNPd25Qcm9wZXJ0eSgkMClgIGhlcmUuXG4gICAgICAgIC8vIElmIGNoYXJhY3RlciBub3QgZm91bmQgaW4gbG9va3VwIHRhYmxlLCBpdCBtdXN0IGJlIHdoaXRlc3BhY2UuXG4gICAgICAgIHJldHVybiBtYXBbJDBdIHx8ICcgJztcbiAgICB9KTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9ub3JtYWxpemUtcmVmZXJlbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qISBodHRwOi8vbXRocy5iZS9yZXBlYXQgdjAuMi4wIGJ5IEBtYXRoaWFzICovXG5pZiAoIVN0cmluZy5wcm90b3R5cGUucmVwZWF0KSB7XG5cdChmdW5jdGlvbigpIHtcblx0XHQndXNlIHN0cmljdCc7IC8vIG5lZWRlZCB0byBzdXBwb3J0IGBhcHBseWAvYGNhbGxgIHdpdGggYHVuZGVmaW5lZGAvYG51bGxgXG5cdFx0dmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gSUUgOCBvbmx5IHN1cHBvcnRzIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG9uIERPTSBlbGVtZW50c1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIG9iamVjdCA9IHt9O1xuXHRcdFx0XHR2YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gJGRlZmluZVByb3BlcnR5KG9iamVjdCwgb2JqZWN0LCBvYmplY3QpICYmICRkZWZpbmVQcm9wZXJ0eTtcblx0XHRcdH0gY2F0Y2goZXJyb3IpIHt9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0oKSk7XG5cdFx0dmFyIHJlcGVhdCA9IGZ1bmN0aW9uKGNvdW50KSB7XG5cdFx0XHRpZiAodGhpcyA9PSBudWxsKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcigpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcblx0XHRcdC8vIGBUb0ludGVnZXJgXG5cdFx0XHR2YXIgbiA9IGNvdW50ID8gTnVtYmVyKGNvdW50KSA6IDA7XG5cdFx0XHRpZiAobiAhPSBuKSB7IC8vIGJldHRlciBgaXNOYU5gXG5cdFx0XHRcdG4gPSAwO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQWNjb3VudCBmb3Igb3V0LW9mLWJvdW5kcyBpbmRpY2VzXG5cdFx0XHRpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkge1xuXHRcdFx0XHR0aHJvdyBSYW5nZUVycm9yKCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0XHR3aGlsZSAobikge1xuXHRcdFx0XHRpZiAobiAlIDIgPT0gMSkge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBzdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG4gPiAxKSB7XG5cdFx0XHRcdFx0c3RyaW5nICs9IHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRuID4+PSAxO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHRcdGlmIChkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdFx0ZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgJ3JlcGVhdCcsIHtcblx0XHRcdFx0J3ZhbHVlJzogcmVwZWF0LFxuXHRcdFx0XHQnY29uZmlndXJhYmxlJzogdHJ1ZSxcblx0XHRcdFx0J3dyaXRhYmxlJzogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID0gcmVwZWF0O1xuXHRcdH1cblx0fSgpKTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9zdHJpbmcucHJvdG90eXBlLnJlcGVhdC9yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlc2NhcGVYbWwgPSByZXF1aXJlKCcuL2NvbW1vbicpLmVzY2FwZVhtbDtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHByb2R1Y2UgYW4gSFRNTCB0YWcuXG52YXIgdGFnID0gZnVuY3Rpb24obmFtZSwgYXR0cnMsIHNlbGZjbG9zaW5nKSB7XG4gICAgdmFyIHJlc3VsdCA9ICc8JyArIG5hbWU7XG4gICAgaWYgKGF0dHJzICYmIGF0dHJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgYXR0cmliO1xuICAgICAgICB3aGlsZSAoKGF0dHJpYiA9IGF0dHJzW2ldKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyAnICsgYXR0cmliWzBdICsgJz1cIicgKyBhdHRyaWJbMV0gKyAnXCInO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzZWxmY2xvc2luZykge1xuICAgICAgICByZXN1bHQgKz0gJyAvJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gJz4nO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgcmVIdG1sVGFnID0gL1xcPFtePl0qXFw+LztcbnZhciByZVVuc2FmZVByb3RvY29sID0gL15qYXZhc2NyaXB0Onx2YnNjcmlwdDp8ZmlsZTp8ZGF0YTovaTtcbnZhciByZVNhZmVEYXRhUHJvdG9jb2wgPSAvXmRhdGE6aW1hZ2VcXC8oPzpwbmd8Z2lmfGpwZWd8d2VicCkvaTtcblxudmFyIHBvdGVudGlhbGx5VW5zYWZlID0gZnVuY3Rpb24odXJsKSB7XG4gICAgcmV0dXJuIHJlVW5zYWZlUHJvdG9jb2wudGVzdCh1cmwpICYmXG4gICAgICAgICFyZVNhZmVEYXRhUHJvdG9jb2wudGVzdCh1cmwpO1xufTtcblxudmFyIHJlbmRlck5vZGVzID0gZnVuY3Rpb24oYmxvY2spIHtcblxuICAgIHZhciBhdHRycztcbiAgICB2YXIgaW5mb193b3JkcztcbiAgICB2YXIgdGFnbmFtZTtcbiAgICB2YXIgd2Fsa2VyID0gYmxvY2sud2Fsa2VyKCk7XG4gICAgdmFyIGV2ZW50LCBub2RlLCBlbnRlcmluZztcbiAgICB2YXIgYnVmZmVyID0gXCJcIjtcbiAgICB2YXIgbGFzdE91dCA9IFwiXFxuXCI7XG4gICAgdmFyIGRpc2FibGVUYWdzID0gMDtcbiAgICB2YXIgZ3JhbmRwYXJlbnQ7XG4gICAgdmFyIG91dCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgaWYgKGRpc2FibGVUYWdzID4gMCkge1xuICAgICAgICAgICAgYnVmZmVyICs9IHMucmVwbGFjZShyZUh0bWxUYWcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSBzO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RPdXQgPSBzO1xuICAgIH07XG4gICAgdmFyIGVzYyA9IHRoaXMuZXNjYXBlO1xuICAgIHZhciBjciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobGFzdE91dCAhPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSAnXFxuJztcbiAgICAgICAgICAgIGxhc3RPdXQgPSAnXFxuJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwicmVuZGVyaW5nXCIpOyB9XG5cbiAgICB3aGlsZSAoKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkpIHtcbiAgICAgICAgZW50ZXJpbmcgPSBldmVudC5lbnRlcmluZztcbiAgICAgICAgbm9kZSA9IGV2ZW50Lm5vZGU7XG5cbiAgICAgICAgYXR0cnMgPSBbXTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc291cmNlcG9zKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gbm9kZS5zb3VyY2Vwb3M7XG4gICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2RhdGEtc291cmNlcG9zJywgU3RyaW5nKHBvc1swXVswXSkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhwb3NbMF1bMV0pICsgJy0nICsgU3RyaW5nKHBvc1sxXVswXSkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhwb3NbMV1bMV0pXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlICdUZXh0JzpcbiAgICAgICAgICAgIG91dChlc2Mobm9kZS5saXRlcmFsLCBmYWxzZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnU29mdGJyZWFrJzpcbiAgICAgICAgICAgIG91dCh0aGlzLnNvZnRicmVhayk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIYXJkYnJlYWsnOlxuICAgICAgICAgICAgb3V0KHRhZygnYnInLCBbXSwgdHJ1ZSkpO1xuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VtcGgnOlxuICAgICAgICAgICAgb3V0KHRhZyhlbnRlcmluZyA/ICdlbScgOiAnL2VtJykpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnU3Ryb25nJzpcbiAgICAgICAgICAgIG91dCh0YWcoZW50ZXJpbmcgPyAnc3Ryb25nJyA6ICcvc3Ryb25nJykpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSHRtbCc6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zYWZlKSB7XG4gICAgICAgICAgICAgICAgb3V0KCc8IS0tIHJhdyBIVE1MIG9taXR0ZWQgLS0+Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dChub2RlLmxpdGVyYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTGluayc6XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShvcHRpb25zLnNhZmUgJiYgcG90ZW50aWFsbHlVbnNhZmUobm9kZS5kZXN0aW5hdGlvbikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydocmVmJywgZXNjKG5vZGUuZGVzdGluYXRpb24sIHRydWUpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWyd0aXRsZScsIGVzYyhub2RlLnRpdGxlLCB0cnVlKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXQodGFnKCdhJywgYXR0cnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnL2EnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2FmZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbGx5VW5zYWZlKG5vZGUuZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQoJzxpbWcgc3JjPVwiXCIgYWx0PVwiJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQoJzxpbWcgc3JjPVwiJyArIGVzYyhub2RlLmRlc3RpbmF0aW9uLCB0cnVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIGFsdD1cIicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc2FibGVUYWdzICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc2FibGVUYWdzIC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGRpc2FibGVUYWdzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQoJ1wiIHRpdGxlPVwiJyArIGVzYyhub2RlLnRpdGxlLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0KCdcIiAvPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0NvZGUnOlxuICAgICAgICAgICAgb3V0KHRhZygnY29kZScpICsgZXNjKG5vZGUubGl0ZXJhbCwgZmFsc2UpICsgdGFnKCcvY29kZScpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0RvY3VtZW50JzpcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhcmFncmFwaCc6XG4gICAgICAgICAgICBncmFuZHBhcmVudCA9IG5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIGlmIChncmFuZHBhcmVudCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIGdyYW5kcGFyZW50LnR5cGUgPT09ICdMaXN0Jykge1xuICAgICAgICAgICAgICAgIGlmIChncmFuZHBhcmVudC5saXN0VGlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCdwJywgYXR0cnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnL3AnKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Jsb2NrUXVvdGUnOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCdibG9ja3F1b3RlJywgYXR0cnMpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9ibG9ja3F1b3RlJykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdJdGVtJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJ2xpJywgYXR0cnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnL2xpJykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdMaXN0JzpcbiAgICAgICAgICAgIHRhZ25hbWUgPSBub2RlLmxpc3RUeXBlID09PSAnQnVsbGV0JyA/ICd1bCcgOiAnb2wnO1xuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbm9kZS5saXN0U3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ICE9PSBudWxsICYmIHN0YXJ0ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydzdGFydCcsIHN0YXJ0LnRvU3RyaW5nKCldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKHRhZ25hbWUsIGF0dHJzKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvJyArIHRhZ25hbWUpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSGVhZGVyJzpcbiAgICAgICAgICAgIHRhZ25hbWUgPSAnaCcgKyBub2RlLmxldmVsO1xuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKHRhZ25hbWUsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy8nICsgdGFnbmFtZSkpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdDb2RlQmxvY2snOlxuICAgICAgICAgICAgaW5mb193b3JkcyA9IG5vZGUuaW5mbyA/IG5vZGUuaW5mby5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgICAgICAgICBpZiAoaW5mb193b3Jkcy5sZW5ndGggPiAwICYmIGluZm9fd29yZHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydjbGFzcycsICdsYW5ndWFnZS0nICsgZXNjKGluZm9fd29yZHNbMF0sIHRydWUpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgb3V0KHRhZygncHJlJykgKyB0YWcoJ2NvZGUnLCBhdHRycykpO1xuICAgICAgICAgICAgb3V0KGVzYyhub2RlLmxpdGVyYWwsIGZhbHNlKSk7XG4gICAgICAgICAgICBvdXQodGFnKCcvY29kZScpICsgdGFnKCcvcHJlJykpO1xuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0h0bWxCbG9jayc6XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2FmZSkge1xuICAgICAgICAgICAgICAgIG91dCgnPCEtLSByYXcgSFRNTCBvbWl0dGVkIC0tPicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQobm9kZS5saXRlcmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIb3Jpem9udGFsUnVsZSc6XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgb3V0KHRhZygnaHInLCBhdHRycywgdHJ1ZSkpO1xuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBcIlVua25vd24gbm9kZSB0eXBlIFwiICsgbm9kZS50eXBlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJyZW5kZXJpbmdcIik7IH1cbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxuLy8gVGhlIEh0bWxSZW5kZXJlciBvYmplY3QuXG5mdW5jdGlvbiBIdG1sUmVuZGVyZXIob3B0aW9ucyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZGVmYXVsdCBvcHRpb25zOlxuICAgICAgICBzb2Z0YnJlYWs6ICdcXG4nLCAvLyBieSBkZWZhdWx0LCBzb2Z0IGJyZWFrcyBhcmUgcmVuZGVyZWQgYXMgbmV3bGluZXMgaW4gSFRNTFxuICAgICAgICAvLyBzZXQgdG8gXCI8YnIgLz5cIiB0byBtYWtlIHRoZW0gaGFyZCBicmVha3NcbiAgICAgICAgLy8gc2V0IHRvIFwiIFwiIGlmIHlvdSB3YW50IHRvIGlnbm9yZSBsaW5lIHdyYXBwaW5nIGluIHNvdXJjZVxuICAgICAgICBlc2NhcGU6IGVzY2FwZVhtbCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgcmVuZGVyOiByZW5kZXJOb2Rlc1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbFJlbmRlcmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvaHRtbC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVzY2FwZVhtbCA9IHJlcXVpcmUoJy4vY29tbW9uJykuZXNjYXBlWG1sO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBYTUwgdGFnLlxudmFyIHRhZyA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJzLCBzZWxmY2xvc2luZykge1xuICAgIHZhciByZXN1bHQgPSAnPCcgKyBuYW1lO1xuICAgIGlmIChhdHRycyAmJiBhdHRycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGF0dHJpYjtcbiAgICAgICAgd2hpbGUgKChhdHRyaWIgPSBhdHRyc1tpXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcgJyArIGF0dHJpYlswXSArICc9XCInICsgYXR0cmliWzFdICsgJ1wiJztcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VsZmNsb3NpbmcpIHtcbiAgICAgICAgcmVzdWx0ICs9ICcgLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9ICc+JztcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHJlWE1MVGFnID0gL1xcPFtePl0qXFw+LztcblxudmFyIHRvVGFnTmFtZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXyQyXCIpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgcmVuZGVyTm9kZXMgPSBmdW5jdGlvbihibG9jaykge1xuXG4gICAgdmFyIGF0dHJzO1xuICAgIHZhciB0YWduYW1lO1xuICAgIHZhciB3YWxrZXIgPSBibG9jay53YWxrZXIoKTtcbiAgICB2YXIgZXZlbnQsIG5vZGUsIGVudGVyaW5nO1xuICAgIHZhciBidWZmZXIgPSBcIlwiO1xuICAgIHZhciBsYXN0T3V0ID0gXCJcXG5cIjtcbiAgICB2YXIgZGlzYWJsZVRhZ3MgPSAwO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9IDA7XG4gICAgdmFyIGluZGVudCA9ICcgICc7XG4gICAgdmFyIHVuZXNjYXBlZENvbnRlbnRzO1xuICAgIHZhciBjb250YWluZXI7XG4gICAgdmFyIHNlbGZDbG9zaW5nO1xuICAgIHZhciBub2RldHlwZTtcblxuICAgIHZhciBvdXQgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChkaXNhYmxlVGFncyA+IDApIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSBzLnJlcGxhY2UocmVYTUxUYWcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSBzO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RPdXQgPSBzO1xuICAgIH07XG4gICAgdmFyIGVzYyA9IHRoaXMuZXNjYXBlO1xuICAgIHZhciBjciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobGFzdE91dCAhPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSAnXFxuJztcbiAgICAgICAgICAgIGxhc3RPdXQgPSAnXFxuJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRlbnRMZXZlbDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBpbmRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcInJlbmRlcmluZ1wiKTsgfVxuXG4gICAgYnVmZmVyICs9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cXG4nO1xuICAgIGJ1ZmZlciArPSAnPCFET0NUWVBFIENvbW1vbk1hcmsgU1lTVEVNIFwiQ29tbW9uTWFyay5kdGRcIj5cXG4nO1xuXG4gICAgd2hpbGUgKChldmVudCA9IHdhbGtlci5uZXh0KCkpKSB7XG4gICAgICAgIGVudGVyaW5nID0gZXZlbnQuZW50ZXJpbmc7XG4gICAgICAgIG5vZGUgPSBldmVudC5ub2RlO1xuICAgICAgICBub2RldHlwZSA9IG5vZGUudHlwZTtcblxuICAgICAgICBjb250YWluZXIgPSBub2RlLmlzQ29udGFpbmVyO1xuICAgICAgICBzZWxmQ2xvc2luZyA9IG5vZGV0eXBlID09PSAnSG9yaXpvbnRhbFJ1bGUnIHx8IG5vZGV0eXBlID09PSAnSGFyZGJyZWFrJyB8fFxuICAgICAgICAgICAgbm9kZXR5cGUgPT09ICdTb2Z0YnJlYWsnO1xuICAgICAgICB1bmVzY2FwZWRDb250ZW50cyA9IG5vZGV0eXBlID09PSAnSHRtbCcgfHwgbm9kZXR5cGUgPT09ICdIdG1sSW5saW5lJztcbiAgICAgICAgdGFnbmFtZSA9IHRvVGFnTmFtZShub2RldHlwZSk7XG5cbiAgICAgICAgaWYgKGVudGVyaW5nKSB7XG5cbiAgICAgICAgICAgIGF0dHJzID0gW107XG5cbiAgICAgICAgICAgIHN3aXRjaCAobm9kZXR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmxpc3RUeXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWyd0eXBlJywgbm9kZS5saXN0VHlwZS50b0xvd2VyQ2FzZSgpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmxpc3RTdGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnc3RhcnQnLCBTdHJpbmcobm9kZS5saXN0U3RhcnQpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmxpc3RUaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsndGlnaHQnLCAobm9kZS5saXN0VGlnaHQgPyAndHJ1ZScgOiAnZmFsc2UnKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGVsaW0gPSBub2RlLmxpc3REZWxpbWl0ZXI7XG4gICAgICAgICAgICAgICAgaWYgKGRlbGltICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxpbXdvcmQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGltID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltd29yZCA9ICdwZXJpb2QnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW13b3JkID0gJ3BhcmVuJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnZGVsaW1pdGVyJywgZGVsaW13b3JkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29kZUJsb2NrJzpcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydpbmZvJywgbm9kZS5pbmZvXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSGVhZGVyJzpcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnbGV2ZWwnLCBTdHJpbmcobm9kZS5sZXZlbCldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0xpbmsnOlxuICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydkZXN0aW5hdGlvbicsIG5vZGUuZGVzdGluYXRpb25dKTtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsndGl0bGUnLCBub2RlLnRpdGxlXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc291cmNlcG9zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5vZGUuc291cmNlcG9zO1xuICAgICAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3NvdXJjZXBvcycsIFN0cmluZyhwb3NbMF1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1swXVsxXSkgKyAnLScgKyBTdHJpbmcocG9zWzFdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhwb3NbMV1bMV0pXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgb3V0KHRhZyh0YWduYW1lLCBhdHRycywgc2VsZkNsb3NpbmcpKTtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpbmRlbnRMZXZlbCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghY29udGFpbmVyICYmICFzZWxmQ2xvc2luZykge1xuICAgICAgICAgICAgICAgIHZhciBsaXQgPSBub2RlLmxpdGVyYWw7XG4gICAgICAgICAgICAgICAgaWYgKGxpdCkge1xuICAgICAgICAgICAgICAgICAgICBvdXQodW5lc2NhcGVkQ29udGVudHMgPyBsaXQgOiBlc2MobGl0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dCh0YWcoJy8nICsgdGFnbmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZW50TGV2ZWwgLT0gMTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKCcvJyArIHRhZ25hbWUpKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJyZW5kZXJpbmdcIik7IH1cbiAgICBidWZmZXIgKz0gJ1xcbic7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8vIFRoZSBYbWxSZW5kZXJlciBvYmplY3QuXG5mdW5jdGlvbiBYbWxSZW5kZXJlcihvcHRpb25zKXtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZhdWx0IG9wdGlvbnM6XG4gICAgICAgIHNvZnRicmVhazogJ1xcbicsIC8vIGJ5IGRlZmF1bHQsIHNvZnQgYnJlYWtzIGFyZSByZW5kZXJlZCBhcyBuZXdsaW5lcyBpbiBIVE1MXG4gICAgICAgIC8vIHNldCB0byBcIjxiciAvPlwiIHRvIG1ha2UgdGhlbSBoYXJkIGJyZWFrc1xuICAgICAgICAvLyBzZXQgdG8gXCIgXCIgaWYgeW91IHdhbnQgdG8gaWdub3JlIGxpbmUgd3JhcHBpbmcgaW4gc291cmNlXG4gICAgICAgIGVzY2FwZTogZXNjYXBlWG1sLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgICAgICByZW5kZXI6IHJlbmRlck5vZGVzXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBYbWxSZW5kZXJlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL3htbC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbnZlcnQgPSByZXF1aXJlKFwiY29sb3ItY29udmVydFwiKSxcbiAgICBzdHJpbmcgPSByZXF1aXJlKFwiY29sb3Itc3RyaW5nXCIpO1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSByZXR1cm4gb2JqO1xuICBpZiAoISAodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkgcmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXG4gICB0aGlzLnZhbHVlcyA9IHtcbiAgICAgIHJnYjogWzAsIDAsIDBdLFxuICAgICAgaHNsOiBbMCwgMCwgMF0sXG4gICAgICBoc3Y6IFswLCAwLCAwXSxcbiAgICAgIGh3YjogWzAsIDAsIDBdLFxuICAgICAgY215azogWzAsIDAsIDAsIDBdLFxuICAgICAgYWxwaGE6IDFcbiAgIH1cblxuICAgLy8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuICAgaWYgKHR5cGVvZiBvYmogPT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIHZhbHMgPSBzdHJpbmcuZ2V0UmdiYShvYmopO1xuICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsIHZhbHMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih2YWxzID0gc3RyaW5nLmdldEhzbGEob2JqKSkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdmFscyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHZhbHMgPSBzdHJpbmcuZ2V0SHdiKG9iaikpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsIHZhbHMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcXFwiXCIgKyBvYmogKyBcIlxcXCJcIik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmICh0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhciB2YWxzID0gb2JqO1xuICAgICAgaWYodmFsc1tcInJcIl0gIT09IHVuZGVmaW5lZCB8fCB2YWxzW1wicmVkXCJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsIHZhbHMpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKHZhbHNbXCJsXCJdICE9PSB1bmRlZmluZWQgfHwgdmFsc1tcImxpZ2h0bmVzc1wiXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB2YWxzKVxuICAgICAgfVxuICAgICAgZWxzZSBpZih2YWxzW1widlwiXSAhPT0gdW5kZWZpbmVkIHx8IHZhbHNbXCJ2YWx1ZVwiXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcImhzdlwiLCB2YWxzKVxuICAgICAgfVxuICAgICAgZWxzZSBpZih2YWxzW1wid1wiXSAhPT0gdW5kZWZpbmVkIHx8IHZhbHNbXCJ3aGl0ZW5lc3NcIl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJod2JcIiwgdmFscylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodmFsc1tcImNcIl0gIT09IHVuZGVmaW5lZCB8fCB2YWxzW1wiY3lhblwiXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnNldFZhbHVlcyhcImNteWtcIiwgdmFscylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3QgXCIgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgIH1cbiAgIH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuICAgcmdiOiBmdW5jdGlvbiAodmFscykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJyZ2JcIiwgYXJndW1lbnRzKTtcbiAgIH0sXG4gICBoc2w6IGZ1bmN0aW9uKHZhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFNwYWNlKFwiaHNsXCIsIGFyZ3VtZW50cyk7XG4gICB9LFxuICAgaHN2OiBmdW5jdGlvbih2YWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTcGFjZShcImhzdlwiLCBhcmd1bWVudHMpO1xuICAgfSxcbiAgIGh3YjogZnVuY3Rpb24odmFscykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJod2JcIiwgYXJndW1lbnRzKTtcbiAgIH0sXG4gICBjbXlrOiBmdW5jdGlvbih2YWxzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTcGFjZShcImNteWtcIiwgYXJndW1lbnRzKTtcbiAgIH0sXG5cbiAgIHJnYkFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5yZ2I7XG4gICB9LFxuICAgaHNsQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmhzbDtcbiAgIH0sXG4gICBoc3ZBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMuaHN2O1xuICAgfSxcbiAgIGh3YkFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuaHdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmh3YjtcbiAgIH0sXG4gICBjbXlrQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmNteWs7XG4gICB9LFxuICAgcmdiYUFycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG4gICAgICByZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcbiAgIH0sXG4gICBoc2xhQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcbiAgICAgIHJldHVybiBoc2wuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuICAgfSxcbiAgIGFscGhhOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmFscGhhO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICByZWQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLCAwLCB2YWwpO1xuICAgfSxcbiAgIGdyZWVuOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwgMSwgdmFsKTtcbiAgIH0sXG4gICBibHVlOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwgMiwgdmFsKTtcbiAgIH0sXG4gICBodWU6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLCAwLCB2YWwpO1xuICAgfSxcbiAgIHNhdHVyYXRpb246IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLCAxLCB2YWwpO1xuICAgfSxcbiAgIGxpZ2h0bmVzczogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsIDIsIHZhbCk7XG4gICB9LFxuICAgc2F0dXJhdGlvbnY6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzdlwiLCAxLCB2YWwpO1xuICAgfSxcbiAgIHdoaXRlbmVzczogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHdiXCIsIDEsIHZhbCk7XG4gICB9LFxuICAgYmxhY2tuZXNzOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENoYW5uZWwoXCJod2JcIiwgMiwgdmFsKTtcbiAgIH0sXG4gICB2YWx1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHN2XCIsIDIsIHZhbCk7XG4gICB9LFxuICAgY3lhbjogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLCAwLCB2YWwpO1xuICAgfSxcbiAgIG1hZ2VudGE6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwgMSwgdmFsKTtcbiAgIH0sXG4gICB5ZWxsb3c6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwgMiwgdmFsKTtcbiAgIH0sXG4gICBibGFjazogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLCAzLCB2YWwpO1xuICAgfSxcblxuICAgaGV4U3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuaGV4U3RyaW5nKHRoaXMudmFsdWVzLnJnYik7XG4gICB9LFxuICAgcmdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcucmdiU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcbiAgIHJnYmFTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZ2JhU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcbiAgIHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5wZXJjZW50U3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuICAgfSxcbiAgIGhzbFN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmhzbFN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG4gICBoc2xhU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuaHNsYVN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcbiAgIH0sXG4gICBod2JTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5od2JTdHJpbmcodGhpcy52YWx1ZXMuaHdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuICAga2V5d29yZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmtleXdvcmQodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG4gICB9LFxuXG4gICByZ2JOdW1iZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnZhbHVlcy5yZ2JbMF0gPDwgMTYpIHwgKHRoaXMudmFsdWVzLnJnYlsxXSA8PCA4KSB8IHRoaXMudmFsdWVzLnJnYlsyXTtcbiAgIH0sXG5cbiAgIGx1bWlub3NpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgdmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcbiAgICAgIHZhciBsdW0gPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICB2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcbiAgICAgICAgIGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyXG4gICAgICAgICAgICAgICAgICA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KVxuICAgICAgfVxuICAgICAgcmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcbiAgIH0sXG5cbiAgIGNvbnRyYXN0OiBmdW5jdGlvbihjb2xvcjIpIHtcbiAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcbiAgICAgIHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG4gICAgICB2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG4gICAgICBpZiAobHVtMSA+IGx1bTIpIHtcbiAgICAgICAgIHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KVxuICAgICAgfTtcbiAgICAgIHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcbiAgIH0sXG5cbiAgIGxldmVsOiBmdW5jdGlvbihjb2xvcjIpIHtcbiAgICAgdmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG4gICAgIHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA3LjEpXG4gICAgICAgPyAnQUFBJ1xuICAgICAgIDogKGNvbnRyYXN0UmF0aW8gPj0gNC41KVxuICAgICAgICA/ICdBQSdcbiAgICAgICAgOiAnJztcbiAgIH0sXG5cbiAgIGRhcms6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuICAgICAgdmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYixcbiAgICAgICAgICB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG4gICAgICByZXR1cm4geWlxIDwgMTI4O1xuICAgfSxcblxuICAgbGlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmRhcmsoKTtcbiAgIH0sXG5cbiAgIG5lZ2F0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmdiID0gW11cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSAyNTUgLSB0aGlzLnZhbHVlcy5yZ2JbaV07XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlcyhcInJnYlwiLCByZ2IpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBsaWdodGVuOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy52YWx1ZXMuaHNsWzJdICs9IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdGhpcy52YWx1ZXMuaHNsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgZGFya2VuOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy52YWx1ZXMuaHNsWzJdIC09IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdGhpcy52YWx1ZXMuaHNsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgc2F0dXJhdGU6IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnZhbHVlcy5oc2xbMV0gKz0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImhzbFwiLCB0aGlzLnZhbHVlcy5oc2wpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICBkZXNhdHVyYXRlOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy52YWx1ZXMuaHNsWzFdIC09IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdGhpcy52YWx1ZXMuaHNsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgd2hpdGVuOiBmdW5jdGlvbihyYXRpbykge1xuICAgICAgdGhpcy52YWx1ZXMuaHdiWzFdICs9IHRoaXMudmFsdWVzLmh3YlsxXSAqIHJhdGlvO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJod2JcIiwgdGhpcy52YWx1ZXMuaHdiKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgYmxhY2tlbjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMudmFsdWVzLmh3YlsyXSArPSB0aGlzLnZhbHVlcy5od2JbMl0gKiByYXRpbztcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsIHRoaXMudmFsdWVzLmh3Yik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIGdyZXlzY2FsZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuICAgICAgLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcbiAgICAgIHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsIFt2YWwsIHZhbCwgdmFsXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIGNsZWFyZXI6IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgICB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsIHRoaXMudmFsdWVzLmFscGhhIC0gKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgb3BhcXVlcjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIiwgdGhpcy52YWx1ZXMuYWxwaGEgKyAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICByb3RhdGU6IGZ1bmN0aW9uKGRlZ3JlZXMpIHtcbiAgICAgIHZhciBodWUgPSB0aGlzLnZhbHVlcy5oc2xbMF07XG4gICAgICBodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG4gICAgICBodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuICAgICAgdGhpcy52YWx1ZXMuaHNsWzBdID0gaHVlO1xuICAgICAgdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIiwgdGhpcy52YWx1ZXMuaHNsKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBQb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcbiAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuICAgICovXG4gICBtaXg6IGZ1bmN0aW9uKG1peGluQ29sb3IsIHdlaWdodCkge1xuICAgICAgdmFyIGNvbG9yMSA9IHRoaXM7XG4gICAgICB2YXIgY29sb3IyID0gbWl4aW5Db2xvcjtcbiAgICAgIHZhciBwID0gd2VpZ2h0ICE9PSB1bmRlZmluZWQgPyB3ZWlnaHQgOiAwLjU7XG5cbiAgICAgIHZhciB3ID0gMiAqIHAgLSAxO1xuICAgICAgdmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG4gICAgICB2YXIgdzEgPSAoKCh3ICogYSA9PSAtMSkgPyB3IDogKHcgKyBhKS8oMSArIHcqYSkpICsgMSkgLyAyLjA7XG4gICAgICB2YXIgdzIgPSAxIC0gdzE7XG5cbiAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIC5yZ2IoXG4gICAgICAgICAgdzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcbiAgICAgICAgICB3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcbiAgICAgICAgICB3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKClcbiAgICAgICAgKVxuICAgICAgICAuYWxwaGEoY29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcbiAgIH0sXG5cbiAgIHRvSlNPTjogZnVuY3Rpb24oKSB7XG4gICAgIHJldHVybiB0aGlzLnJnYigpO1xuICAgfSxcblxuICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMucmdiKCkpO1xuICAgfVxufVxuXG5cbkNvbG9yLnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbihzcGFjZSkge1xuICAgdmFyIHZhbHMgPSB7fTtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcbiAgIH1cbiAgIGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPSAxKSB7XG4gICAgICB2YWxzW1wiYVwiXSA9IHRoaXMudmFsdWVzLmFscGhhO1xuICAgfVxuICAgLy8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cbiAgIHJldHVybiB2YWxzO1xufVxuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24oc3BhY2UsIHZhbHMpIHtcbiAgIHZhciBzcGFjZXMgPSB7XG4gICAgICBcInJnYlwiOiBbXCJyZWRcIiwgXCJncmVlblwiLCBcImJsdWVcIl0sXG4gICAgICBcImhzbFwiOiBbXCJodWVcIiwgXCJzYXR1cmF0aW9uXCIsIFwibGlnaHRuZXNzXCJdLFxuICAgICAgXCJoc3ZcIjogW1wiaHVlXCIsIFwic2F0dXJhdGlvblwiLCBcInZhbHVlXCJdLFxuICAgICAgXCJod2JcIjogW1wiaHVlXCIsIFwid2hpdGVuZXNzXCIsIFwiYmxhY2tuZXNzXCJdLFxuICAgICAgXCJjbXlrXCI6IFtcImN5YW5cIiwgXCJtYWdlbnRhXCIsIFwieWVsbG93XCIsIFwiYmxhY2tcIl1cbiAgIH07XG5cbiAgIHZhciBtYXhlcyA9IHtcbiAgICAgIFwicmdiXCI6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgIFwiaHNsXCI6IFszNjAsIDEwMCwgMTAwXSxcbiAgICAgIFwiaHN2XCI6IFszNjAsIDEwMCwgMTAwXSxcbiAgICAgIFwiaHdiXCI6IFszNjAsIDEwMCwgMTAwXSxcbiAgICAgIFwiY215a1wiOiBbMTAwLCAxMDAsIDEwMCwgMTAwXVxuICAgfTtcblxuICAgdmFyIGFscGhhID0gMTtcbiAgIGlmIChzcGFjZSA9PSBcImFscGhhXCIpIHtcbiAgICAgIGFscGhhID0gdmFscztcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMubGVuZ3RoKSB7XG4gICAgICAvLyBbMTAsIDEwLCAxMF1cbiAgICAgIHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcbiAgICAgIGFscGhhID0gdmFsc1tzcGFjZS5sZW5ndGhdO1xuICAgfVxuICAgZWxzZSBpZiAodmFsc1tzcGFjZS5jaGFyQXQoMCldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW3NwYWNlLmNoYXJBdChpKV07XG4gICAgICB9XG4gICAgICBhbHBoYSA9IHZhbHMuYTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8ge3JlZDogMTAsIGdyZWVuOiAxMCwgYmx1ZTogMTB9XG4gICAgICB2YXIgY2hhbnMgPSBzcGFjZXNbc3BhY2VdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW2NoYW5zW2ldXTtcbiAgICAgIH1cbiAgICAgIGFscGhhID0gdmFscy5hbHBoYTtcbiAgIH1cbiAgIHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhICE9PSB1bmRlZmluZWQgPyBhbHBoYSA6IHRoaXMudmFsdWVzLmFscGhhKSApKTtcbiAgIGlmIChzcGFjZSA9PSBcImFscGhhXCIpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cblxuICAgLy8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc3BhY2VdW2ldLCB0aGlzLnZhbHVlc1tzcGFjZV1baV0pKTtcbiAgICAgIHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcbiAgIH1cblxuICAgLy8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuICAgZm9yICh2YXIgc25hbWUgaW4gc3BhY2VzKSB7XG4gICAgICBpZiAoc25hbWUgIT0gc3BhY2UpIHtcbiAgICAgICAgIHRoaXMudmFsdWVzW3NuYW1lXSA9IGNvbnZlcnRbc3BhY2VdW3NuYW1lXSh0aGlzLnZhbHVlc1tzcGFjZV0pXG4gICAgICB9XG5cbiAgICAgIC8vIGNhcCB2YWx1ZXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc25hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHZhciBjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuICAgICAgICAgdGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuICAgICAgfVxuICAgfVxuICAgcmV0dXJuIHRydWU7XG59XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRTcGFjZSA9IGZ1bmN0aW9uKHNwYWNlLCBhcmdzKSB7XG4gICB2YXIgdmFscyA9IGFyZ3NbMF07XG4gICBpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb2xvci5yZ2IoKVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKHNwYWNlKTtcbiAgIH1cbiAgIC8vIGNvbG9yLnJnYigxMCwgMTAsIDEwKVxuICAgaWYgKHR5cGVvZiB2YWxzID09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbiAgIH1cbiAgIHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB2YWxzKTtcbiAgIHJldHVybiB0aGlzO1xufVxuXG5Db2xvci5wcm90b3R5cGUuc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uKHNwYWNlLCBpbmRleCwgdmFsKSB7XG4gICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbG9yLnJlZCgpXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcbiAgIH1cbiAgIC8vIGNvbG9yLnJlZCgxMDApXG4gICB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuICAgdGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHRoaXMudmFsdWVzW3NwYWNlXSk7XG4gICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbG9yL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoXCIuL2NvbnZlcnNpb25zXCIpO1xuXG52YXIgY29udmVydCA9IGZ1bmN0aW9uKCkge1xuICAgcmV0dXJuIG5ldyBDb252ZXJ0ZXIoKTtcbn1cblxuZm9yICh2YXIgZnVuYyBpbiBjb252ZXJzaW9ucykge1xuICAvLyBleHBvcnQgUmF3IHZlcnNpb25zXG4gIGNvbnZlcnRbZnVuYyArIFwiUmF3XCJdID0gIChmdW5jdGlvbihmdW5jKSB7XG4gICAgLy8gYWNjZXB0IGFycmF5IG9yIHBsYWluIGFyZ3NcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZyA9PSBcIm51bWJlclwiKVxuICAgICAgICBhcmcgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNvbnZlcnNpb25zW2Z1bmNdKGFyZyk7XG4gICAgfVxuICB9KShmdW5jKTtcblxuICB2YXIgcGFpciA9IC8oXFx3KykyKFxcdyspLy5leGVjKGZ1bmMpLFxuICAgICAgZnJvbSA9IHBhaXJbMV0sXG4gICAgICB0byA9IHBhaXJbMl07XG5cbiAgLy8gZXhwb3J0IHJnYjJoc2wgYW5kIFtcInJnYlwiXVtcImhzbFwiXVxuICBjb252ZXJ0W2Zyb21dID0gY29udmVydFtmcm9tXSB8fCB7fTtcblxuICBjb252ZXJ0W2Zyb21dW3RvXSA9IGNvbnZlcnRbZnVuY10gPSAoZnVuY3Rpb24oZnVuYykgeyBcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZyA9PSBcIm51bWJlclwiKVxuICAgICAgICBhcmcgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgXG4gICAgICB2YXIgdmFsID0gY29udmVyc2lvbnNbZnVuY10oYXJnKTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09IFwic3RyaW5nXCIgfHwgdmFsID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB2YWw7IC8vIGtleXdvcmRcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspXG4gICAgICAgIHZhbFtpXSA9IE1hdGgucm91bmQodmFsW2ldKTtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9KShmdW5jKTtcbn1cblxuXG4vKiBDb252ZXJ0ZXIgZG9lcyBsYXp5IGNvbnZlcnNpb24gYW5kIGNhY2hpbmcgKi9cbnZhciBDb252ZXJ0ZXIgPSBmdW5jdGlvbigpIHtcbiAgIHRoaXMuY29udnMgPSB7fTtcbn07XG5cbi8qIEVpdGhlciBnZXQgdGhlIHZhbHVlcyBmb3IgYSBzcGFjZSBvclxuICBzZXQgdGhlIHZhbHVlcyBmb3IgYSBzcGFjZSwgZGVwZW5kaW5nIG9uIGFyZ3MgKi9cbkNvbnZlcnRlci5wcm90b3R5cGUucm91dGVTcGFjZSA9IGZ1bmN0aW9uKHNwYWNlLCBhcmdzKSB7XG4gICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgIGlmICh2YWx1ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29sb3IucmdiKClcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlcyhzcGFjZSk7XG4gICB9XG4gICAvLyBjb2xvci5yZ2IoMTAsIDEwLCAxMClcbiAgIGlmICh0eXBlb2YgdmFsdWVzID09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpOyAgICAgICAgXG4gICB9XG5cbiAgIHJldHVybiB0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFsdWVzKTtcbn07XG4gIFxuLyogU2V0IHRoZSB2YWx1ZXMgZm9yIGEgc3BhY2UsIGludmFsaWRhdGluZyBjYWNoZSAqL1xuQ29udmVydGVyLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbihzcGFjZSwgdmFsdWVzKSB7XG4gICB0aGlzLnNwYWNlID0gc3BhY2U7XG4gICB0aGlzLmNvbnZzID0ge307XG4gICB0aGlzLmNvbnZzW3NwYWNlXSA9IHZhbHVlcztcbiAgIHJldHVybiB0aGlzO1xufTtcblxuLyogR2V0IHRoZSB2YWx1ZXMgZm9yIGEgc3BhY2UuIElmIHRoZXJlJ3MgYWxyZWFkeVxuICBhIGNvbnZlcnNpb24gZm9yIHRoZSBzcGFjZSwgZmV0Y2ggaXQsIG90aGVyd2lzZVxuICBjb21wdXRlIGl0ICovXG5Db252ZXJ0ZXIucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uKHNwYWNlKSB7XG4gICB2YXIgdmFscyA9IHRoaXMuY29udnNbc3BhY2VdO1xuICAgaWYgKCF2YWxzKSB7XG4gICAgICB2YXIgZnNwYWNlID0gdGhpcy5zcGFjZSxcbiAgICAgICAgICBmcm9tID0gdGhpcy5jb252c1tmc3BhY2VdO1xuICAgICAgdmFscyA9IGNvbnZlcnRbZnNwYWNlXVtzcGFjZV0oZnJvbSk7XG5cbiAgICAgIHRoaXMuY29udnNbc3BhY2VdID0gdmFscztcbiAgIH1cbiAgcmV0dXJuIHZhbHM7XG59O1xuXG5bXCJyZ2JcIiwgXCJoc2xcIiwgXCJoc3ZcIiwgXCJjbXlrXCIsIFwia2V5d29yZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKHNwYWNlKSB7XG4gICBDb252ZXJ0ZXIucHJvdG90eXBlW3NwYWNlXSA9IGZ1bmN0aW9uKHZhbHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlU3BhY2Uoc3BhY2UsIGFyZ3VtZW50cyk7XG4gICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbG9yL34vY29sb3ItY29udmVydC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBNSVQgbGljZW5zZSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmdiMmhzbDogcmdiMmhzbCxcbiAgcmdiMmhzdjogcmdiMmhzdixcbiAgcmdiMmh3YjogcmdiMmh3YixcbiAgcmdiMmNteWs6IHJnYjJjbXlrLFxuICByZ2Iya2V5d29yZDogcmdiMmtleXdvcmQsXG4gIHJnYjJ4eXo6IHJnYjJ4eXosXG4gIHJnYjJsYWI6IHJnYjJsYWIsXG4gIHJnYjJsY2g6IHJnYjJsY2gsXG5cbiAgaHNsMnJnYjogaHNsMnJnYixcbiAgaHNsMmhzdjogaHNsMmhzdixcbiAgaHNsMmh3YjogaHNsMmh3YixcbiAgaHNsMmNteWs6IGhzbDJjbXlrLFxuICBoc2wya2V5d29yZDogaHNsMmtleXdvcmQsXG5cbiAgaHN2MnJnYjogaHN2MnJnYixcbiAgaHN2MmhzbDogaHN2MmhzbCxcbiAgaHN2Mmh3YjogaHN2Mmh3YixcbiAgaHN2MmNteWs6IGhzdjJjbXlrLFxuICBoc3Yya2V5d29yZDogaHN2MmtleXdvcmQsXG5cbiAgaHdiMnJnYjogaHdiMnJnYixcbiAgaHdiMmhzbDogaHdiMmhzbCxcbiAgaHdiMmhzdjogaHdiMmhzdixcbiAgaHdiMmNteWs6IGh3YjJjbXlrLFxuICBod2Iya2V5d29yZDogaHdiMmtleXdvcmQsXG5cbiAgY215azJyZ2I6IGNteWsycmdiLFxuICBjbXlrMmhzbDogY215azJoc2wsXG4gIGNteWsyaHN2OiBjbXlrMmhzdixcbiAgY215azJod2I6IGNteWsyaHdiLFxuICBjbXlrMmtleXdvcmQ6IGNteWsya2V5d29yZCxcblxuICBrZXl3b3JkMnJnYjoga2V5d29yZDJyZ2IsXG4gIGtleXdvcmQyaHNsOiBrZXl3b3JkMmhzbCxcbiAga2V5d29yZDJoc3Y6IGtleXdvcmQyaHN2LFxuICBrZXl3b3JkMmh3Yjoga2V5d29yZDJod2IsXG4gIGtleXdvcmQyY215azoga2V5d29yZDJjbXlrLFxuICBrZXl3b3JkMmxhYjoga2V5d29yZDJsYWIsXG4gIGtleXdvcmQyeHl6OiBrZXl3b3JkMnh5eixcblxuICB4eXoycmdiOiB4eXoycmdiLFxuICB4eXoybGFiOiB4eXoybGFiLFxuICB4eXoybGNoOiB4eXoybGNoLFxuXG4gIGxhYjJ4eXo6IGxhYjJ4eXosXG4gIGxhYjJyZ2I6IGxhYjJyZ2IsXG4gIGxhYjJsY2g6IGxhYjJsY2gsXG5cbiAgbGNoMmxhYjogbGNoMmxhYixcbiAgbGNoMnh5ejogbGNoMnh5eixcbiAgbGNoMnJnYjogbGNoMnJnYlxufVxuXG5cbmZ1bmN0aW9uIHJnYjJoc2wocmdiKSB7XG4gIHZhciByID0gcmdiWzBdLzI1NSxcbiAgICAgIGcgPSByZ2JbMV0vMjU1LFxuICAgICAgYiA9IHJnYlsyXS8yNTUsXG4gICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgZGVsdGEgPSBtYXggLSBtaW4sXG4gICAgICBoLCBzLCBsO1xuXG4gIGlmIChtYXggPT0gbWluKVxuICAgIGggPSAwO1xuICBlbHNlIGlmIChyID09IG1heClcbiAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICBlbHNlIGlmIChnID09IG1heClcbiAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgZWxzZSBpZiAoYiA9PSBtYXgpXG4gICAgaCA9IDQgKyAociAtIGcpLyBkZWx0YTtcblxuICBoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG4gIGlmIChoIDwgMClcbiAgICBoICs9IDM2MDtcblxuICBsID0gKG1pbiArIG1heCkgLyAyO1xuXG4gIGlmIChtYXggPT0gbWluKVxuICAgIHMgPSAwO1xuICBlbHNlIGlmIChsIDw9IDAuNSlcbiAgICBzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcbiAgZWxzZVxuICAgIHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblxuICByZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufVxuXG5mdW5jdGlvbiByZ2IyaHN2KHJnYikge1xuICB2YXIgciA9IHJnYlswXSxcbiAgICAgIGcgPSByZ2JbMV0sXG4gICAgICBiID0gcmdiWzJdLFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGRlbHRhID0gbWF4IC0gbWluLFxuICAgICAgaCwgcywgdjtcblxuICBpZiAobWF4ID09IDApXG4gICAgcyA9IDA7XG4gIGVsc2VcbiAgICBzID0gKGRlbHRhL21heCAqIDEwMDApLzEwO1xuXG4gIGlmIChtYXggPT0gbWluKVxuICAgIGggPSAwO1xuICBlbHNlIGlmIChyID09IG1heClcbiAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICBlbHNlIGlmIChnID09IG1heClcbiAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgZWxzZSBpZiAoYiA9PSBtYXgpXG4gICAgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cbiAgaCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuICBpZiAoaCA8IDApXG4gICAgaCArPSAzNjA7XG5cbiAgdiA9ICgobWF4IC8gMjU1KSAqIDEwMDApIC8gMTA7XG5cbiAgcmV0dXJuIFtoLCBzLCB2XTtcbn1cblxuZnVuY3Rpb24gcmdiMmh3YihyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0sXG4gICAgICBnID0gcmdiWzFdLFxuICAgICAgYiA9IHJnYlsyXSxcbiAgICAgIGggPSByZ2IyaHNsKHJnYilbMF0sXG4gICAgICB3ID0gMS8yNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSksXG4gICAgICBiID0gMSAtIDEvMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG4gIHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIHJnYjJjbXlrKHJnYikge1xuICB2YXIgciA9IHJnYlswXSAvIDI1NSxcbiAgICAgIGcgPSByZ2JbMV0gLyAyNTUsXG4gICAgICBiID0gcmdiWzJdIC8gMjU1LFxuICAgICAgYywgbSwgeSwgaztcblxuICBrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG4gIGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcbiAgbSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuICB5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG4gIHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIHJnYjJrZXl3b3JkKHJnYikge1xuICByZXR1cm4gcmV2ZXJzZUtleXdvcmRzW0pTT04uc3RyaW5naWZ5KHJnYildO1xufVxuXG5mdW5jdGlvbiByZ2IyeHl6KHJnYikge1xuICB2YXIgciA9IHJnYlswXSAvIDI1NSxcbiAgICAgIGcgPSByZ2JbMV0gLyAyNTUsXG4gICAgICBiID0gcmdiWzJdIC8gMjU1O1xuXG4gIC8vIGFzc3VtZSBzUkdCXG4gIHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuICBnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcbiAgYiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cbiAgdmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG4gIHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuICB2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuICByZXR1cm4gW3ggKiAxMDAsIHkgKjEwMCwgeiAqIDEwMF07XG59XG5cbmZ1bmN0aW9uIHJnYjJsYWIocmdiKSB7XG4gIHZhciB4eXogPSByZ2IyeHl6KHJnYiksXG4gICAgICAgIHggPSB4eXpbMF0sXG4gICAgICAgIHkgPSB4eXpbMV0sXG4gICAgICAgIHogPSB4eXpbMl0sXG4gICAgICAgIGwsIGEsIGI7XG5cbiAgeCAvPSA5NS4wNDc7XG4gIHkgLz0gMTAwO1xuICB6IC89IDEwOC44ODM7XG5cbiAgeCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEvMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG4gIHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxLzMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuICB6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMS8zKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuICBsID0gKDExNiAqIHkpIC0gMTY7XG4gIGEgPSA1MDAgKiAoeCAtIHkpO1xuICBiID0gMjAwICogKHkgLSB6KTtcblxuICByZXR1cm4gW2wsIGEsIGJdO1xufVxuXG5mdW5jdGlvbiByZ2IybGNoKGFyZ3MpIHtcbiAgcmV0dXJuIGxhYjJsY2gocmdiMmxhYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGhzbDJyZ2IoaHNsKSB7XG4gIHZhciBoID0gaHNsWzBdIC8gMzYwLFxuICAgICAgcyA9IGhzbFsxXSAvIDEwMCxcbiAgICAgIGwgPSBoc2xbMl0gLyAxMDAsXG4gICAgICB0MSwgdDIsIHQzLCByZ2IsIHZhbDtcblxuICBpZiAocyA9PSAwKSB7XG4gICAgdmFsID0gbCAqIDI1NTtcbiAgICByZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuICB9XG5cbiAgaWYgKGwgPCAwLjUpXG4gICAgdDIgPSBsICogKDEgKyBzKTtcbiAgZWxzZVxuICAgIHQyID0gbCArIHMgLSBsICogcztcbiAgdDEgPSAyICogbCAtIHQyO1xuXG4gIHJnYiA9IFswLCAwLCAwXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICB0MyA9IGggKyAxIC8gMyAqIC0gKGkgLSAxKTtcbiAgICB0MyA8IDAgJiYgdDMrKztcbiAgICB0MyA+IDEgJiYgdDMtLTtcblxuICAgIGlmICg2ICogdDMgPCAxKVxuICAgICAgdmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG4gICAgZWxzZSBpZiAoMiAqIHQzIDwgMSlcbiAgICAgIHZhbCA9IHQyO1xuICAgIGVsc2UgaWYgKDMgKiB0MyA8IDIpXG4gICAgICB2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG4gICAgZWxzZVxuICAgICAgdmFsID0gdDE7XG5cbiAgICByZ2JbaV0gPSB2YWwgKiAyNTU7XG4gIH1cblxuICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBoc2wyaHN2KGhzbCkge1xuICB2YXIgaCA9IGhzbFswXSxcbiAgICAgIHMgPSBoc2xbMV0gLyAxMDAsXG4gICAgICBsID0gaHNsWzJdIC8gMTAwLFxuICAgICAgc3YsIHY7XG5cbiAgaWYobCA9PT0gMCkge1xuICAgICAgLy8gbm8gbmVlZCB0byBkbyBjYWxjIG9uIGJsYWNrXG4gICAgICAvLyBhbHNvIGF2b2lkcyBkaXZpZGUgYnkgMCBlcnJvclxuICAgICAgcmV0dXJuIFswLCAwLCAwXTtcbiAgfVxuXG4gIGwgKj0gMjtcbiAgcyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcbiAgdiA9IChsICsgcykgLyAyO1xuICBzdiA9ICgyICogcykgLyAobCArIHMpO1xuICByZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn1cblxuZnVuY3Rpb24gaHNsMmh3YihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHdiKGhzbDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBoc2wyY215ayhhcmdzKSB7XG4gIHJldHVybiByZ2IyY215ayhoc2wycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHNsMmtleXdvcmQoYXJncykge1xuICByZXR1cm4gcmdiMmtleXdvcmQoaHNsMnJnYihhcmdzKSk7XG59XG5cblxuZnVuY3Rpb24gaHN2MnJnYihoc3YpIHtcbiAgdmFyIGggPSBoc3ZbMF0gLyA2MCxcbiAgICAgIHMgPSBoc3ZbMV0gLyAxMDAsXG4gICAgICB2ID0gaHN2WzJdIC8gMTAwLFxuICAgICAgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuICB2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpLFxuICAgICAgcCA9IDI1NSAqIHYgKiAoMSAtIHMpLFxuICAgICAgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpLFxuICAgICAgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpLFxuICAgICAgdiA9IDI1NSAqIHY7XG5cbiAgc3dpdGNoKGhpKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIFt2LCB0LCBwXTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gW3EsIHYsIHBdO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbcCwgdiwgdF07XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFtwLCBxLCB2XTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gW3QsIHAsIHZdO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBbdiwgcCwgcV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaHN2MmhzbChoc3YpIHtcbiAgdmFyIGggPSBoc3ZbMF0sXG4gICAgICBzID0gaHN2WzFdIC8gMTAwLFxuICAgICAgdiA9IGhzdlsyXSAvIDEwMCxcbiAgICAgIHNsLCBsO1xuXG4gIGwgPSAoMiAtIHMpICogdjtcbiAgc2wgPSBzICogdjtcbiAgc2wgLz0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG4gIHNsID0gc2wgfHwgMDtcbiAgbCAvPSAyO1xuICByZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn1cblxuZnVuY3Rpb24gaHN2Mmh3YihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHdiKGhzdjJyZ2IoYXJncykpXG59XG5cbmZ1bmN0aW9uIGhzdjJjbXlrKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJjbXlrKGhzdjJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBoc3Yya2V5d29yZChhcmdzKSB7XG4gIHJldHVybiByZ2Iya2V5d29yZChoc3YycmdiKGFyZ3MpKTtcbn1cblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5mdW5jdGlvbiBod2IycmdiKGh3Yikge1xuICB2YXIgaCA9IGh3YlswXSAvIDM2MCxcbiAgICAgIHdoID0gaHdiWzFdIC8gMTAwLFxuICAgICAgYmwgPSBod2JbMl0gLyAxMDAsXG4gICAgICByYXRpbyA9IHdoICsgYmwsXG4gICAgICBpLCB2LCBmLCBuO1xuXG4gIC8vIHdoICsgYmwgY2FudCBiZSA+IDFcbiAgaWYgKHJhdGlvID4gMSkge1xuICAgIHdoIC89IHJhdGlvO1xuICAgIGJsIC89IHJhdGlvO1xuICB9XG5cbiAgaSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuICB2ID0gMSAtIGJsO1xuICBmID0gNiAqIGggLSBpO1xuICBpZiAoKGkgJiAweDAxKSAhPSAwKSB7XG4gICAgZiA9IDEgLSBmO1xuICB9XG4gIG4gPSB3aCArIGYgKiAodiAtIHdoKTsgIC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cbiAgc3dpdGNoIChpKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIDY6XG4gICAgY2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG4gICAgY2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG4gICAgY2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG4gICAgY2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG4gICAgY2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG4gICAgY2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufVxuXG5mdW5jdGlvbiBod2IyaHNsKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJoc2woaHdiMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGh3YjJoc3YoYXJncykge1xuICByZXR1cm4gcmdiMmhzdihod2IycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gaHdiMmNteWsoYXJncykge1xuICByZXR1cm4gcmdiMmNteWsoaHdiMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGh3YjJrZXl3b3JkKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJrZXl3b3JkKGh3YjJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBjbXlrMnJnYihjbXlrKSB7XG4gIHZhciBjID0gY215a1swXSAvIDEwMCxcbiAgICAgIG0gPSBjbXlrWzFdIC8gMTAwLFxuICAgICAgeSA9IGNteWtbMl0gLyAxMDAsXG4gICAgICBrID0gY215a1szXSAvIDEwMCxcbiAgICAgIHIsIGcsIGI7XG5cbiAgciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuICBnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG4gIGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcbiAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn1cblxuZnVuY3Rpb24gY215azJoc2woYXJncykge1xuICByZXR1cm4gcmdiMmhzbChjbXlrMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGNteWsyaHN2KGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJoc3YoY215azJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBjbXlrMmh3YihhcmdzKSB7XG4gIHJldHVybiByZ2IyaHdiKGNteWsycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gY215azJrZXl3b3JkKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJrZXl3b3JkKGNteWsycmdiKGFyZ3MpKTtcbn1cblxuXG5mdW5jdGlvbiB4eXoycmdiKHh5eikge1xuICB2YXIgeCA9IHh5elswXSAvIDEwMCxcbiAgICAgIHkgPSB4eXpbMV0gLyAxMDAsXG4gICAgICB6ID0geHl6WzJdIC8gMTAwLFxuICAgICAgciwgZywgYjtcblxuICByID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG4gIGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuICBiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuICAvLyBhc3N1bWUgc1JHQlxuICByID0gciA+IDAuMDAzMTMwOCA/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuICAgIDogciA9IChyICogMTIuOTIpO1xuXG4gIGcgPSBnID4gMC4wMDMxMzA4ID8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG4gICAgOiBnID0gKGcgKiAxMi45Mik7XG5cbiAgYiA9IGIgPiAwLjAwMzEzMDggPyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcbiAgICA6IGIgPSAoYiAqIDEyLjkyKTtcblxuICByID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuICBnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuICBiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG4gIHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59XG5cbmZ1bmN0aW9uIHh5ejJsYWIoeHl6KSB7XG4gIHZhciB4ID0geHl6WzBdLFxuICAgICAgeSA9IHh5elsxXSxcbiAgICAgIHogPSB4eXpbMl0sXG4gICAgICBsLCBhLCBiO1xuXG4gIHggLz0gOTUuMDQ3O1xuICB5IC89IDEwMDtcbiAgeiAvPSAxMDguODgzO1xuXG4gIHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxLzMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuICB5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMS8zKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcbiAgeiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEvMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cbiAgbCA9ICgxMTYgKiB5KSAtIDE2O1xuICBhID0gNTAwICogKHggLSB5KTtcbiAgYiA9IDIwMCAqICh5IC0geik7XG5cbiAgcmV0dXJuIFtsLCBhLCBiXTtcbn1cblxuZnVuY3Rpb24geHl6MmxjaChhcmdzKSB7XG4gIHJldHVybiBsYWIybGNoKHh5ejJsYWIoYXJncykpO1xufVxuXG5mdW5jdGlvbiBsYWIyeHl6KGxhYikge1xuICB2YXIgbCA9IGxhYlswXSxcbiAgICAgIGEgPSBsYWJbMV0sXG4gICAgICBiID0gbGFiWzJdLFxuICAgICAgeCwgeSwgeiwgeTI7XG5cbiAgaWYgKGwgPD0gOCkge1xuICAgIHkgPSAobCAqIDEwMCkgLyA5MDMuMztcbiAgICB5MiA9ICg3Ljc4NyAqICh5IC8gMTAwKSkgKyAoMTYgLyAxMTYpO1xuICB9IGVsc2Uge1xuICAgIHkgPSAxMDAgKiBNYXRoLnBvdygobCArIDE2KSAvIDExNiwgMyk7XG4gICAgeTIgPSBNYXRoLnBvdyh5IC8gMTAwLCAxLzMpO1xuICB9XG5cbiAgeCA9IHggLyA5NS4wNDcgPD0gMC4wMDg4NTYgPyB4ID0gKDk1LjA0NyAqICgoYSAvIDUwMCkgKyB5MiAtICgxNiAvIDExNikpKSAvIDcuNzg3IDogOTUuMDQ3ICogTWF0aC5wb3coKGEgLyA1MDApICsgeTIsIDMpO1xuXG4gIHogPSB6IC8gMTA4Ljg4MyA8PSAwLjAwODg1OSA/IHogPSAoMTA4Ljg4MyAqICh5MiAtIChiIC8gMjAwKSAtICgxNiAvIDExNikpKSAvIDcuNzg3IDogMTA4Ljg4MyAqIE1hdGgucG93KHkyIC0gKGIgLyAyMDApLCAzKTtcblxuICByZXR1cm4gW3gsIHksIHpdO1xufVxuXG5mdW5jdGlvbiBsYWIybGNoKGxhYikge1xuICB2YXIgbCA9IGxhYlswXSxcbiAgICAgIGEgPSBsYWJbMV0sXG4gICAgICBiID0gbGFiWzJdLFxuICAgICAgaHIsIGgsIGM7XG5cbiAgaHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuICBoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcbiAgaWYgKGggPCAwKSB7XG4gICAgaCArPSAzNjA7XG4gIH1cbiAgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbiAgcmV0dXJuIFtsLCBjLCBoXTtcbn1cblxuZnVuY3Rpb24gbGFiMnJnYihhcmdzKSB7XG4gIHJldHVybiB4eXoycmdiKGxhYjJ4eXooYXJncykpO1xufVxuXG5mdW5jdGlvbiBsY2gybGFiKGxjaCkge1xuICB2YXIgbCA9IGxjaFswXSxcbiAgICAgIGMgPSBsY2hbMV0sXG4gICAgICBoID0gbGNoWzJdLFxuICAgICAgYSwgYiwgaHI7XG5cbiAgaHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG4gIGEgPSBjICogTWF0aC5jb3MoaHIpO1xuICBiID0gYyAqIE1hdGguc2luKGhyKTtcbiAgcmV0dXJuIFtsLCBhLCBiXTtcbn1cblxuZnVuY3Rpb24gbGNoMnh5eihhcmdzKSB7XG4gIHJldHVybiBsYWIyeHl6KGxjaDJsYWIoYXJncykpO1xufVxuXG5mdW5jdGlvbiBsY2gycmdiKGFyZ3MpIHtcbiAgcmV0dXJuIGxhYjJyZ2IobGNoMmxhYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQycmdiKGtleXdvcmQpIHtcbiAgcmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMmhzbChhcmdzKSB7XG4gIHJldHVybiByZ2IyaHNsKGtleXdvcmQycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJoc3YoYXJncykge1xuICByZXR1cm4gcmdiMmhzdihrZXl3b3JkMnJnYihhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQyaHdiKGFyZ3MpIHtcbiAgcmV0dXJuIHJnYjJod2Ioa2V5d29yZDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMmNteWsoYXJncykge1xuICByZXR1cm4gcmdiMmNteWsoa2V5d29yZDJyZ2IoYXJncykpO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkMmxhYihhcmdzKSB7XG4gIHJldHVybiByZ2IybGFiKGtleXdvcmQycmdiKGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24ga2V5d29yZDJ4eXooYXJncykge1xuICByZXR1cm4gcmdiMnh5eihrZXl3b3JkMnJnYihhcmdzKSk7XG59XG5cbnZhciBjc3NLZXl3b3JkcyA9IHtcbiAgYWxpY2VibHVlOiAgWzI0MCwyNDgsMjU1XSxcbiAgYW50aXF1ZXdoaXRlOiBbMjUwLDIzNSwyMTVdLFxuICBhcXVhOiBbMCwyNTUsMjU1XSxcbiAgYXF1YW1hcmluZTogWzEyNywyNTUsMjEyXSxcbiAgYXp1cmU6ICBbMjQwLDI1NSwyNTVdLFxuICBiZWlnZTogIFsyNDUsMjQ1LDIyMF0sXG4gIGJpc3F1ZTogWzI1NSwyMjgsMTk2XSxcbiAgYmxhY2s6ICBbMCwwLDBdLFxuICBibGFuY2hlZGFsbW9uZDogWzI1NSwyMzUsMjA1XSxcbiAgYmx1ZTogWzAsMCwyNTVdLFxuICBibHVldmlvbGV0OiBbMTM4LDQzLDIyNl0sXG4gIGJyb3duOiAgWzE2NSw0Miw0Ml0sXG4gIGJ1cmx5d29vZDogIFsyMjIsMTg0LDEzNV0sXG4gIGNhZGV0Ymx1ZTogIFs5NSwxNTgsMTYwXSxcbiAgY2hhcnRyZXVzZTogWzEyNywyNTUsMF0sXG4gIGNob2NvbGF0ZTogIFsyMTAsMTA1LDMwXSxcbiAgY29yYWw6ICBbMjU1LDEyNyw4MF0sXG4gIGNvcm5mbG93ZXJibHVlOiBbMTAwLDE0OSwyMzddLFxuICBjb3Juc2lsazogWzI1NSwyNDgsMjIwXSxcbiAgY3JpbXNvbjogIFsyMjAsMjAsNjBdLFxuICBjeWFuOiBbMCwyNTUsMjU1XSxcbiAgZGFya2JsdWU6IFswLDAsMTM5XSxcbiAgZGFya2N5YW46IFswLDEzOSwxMzldLFxuICBkYXJrZ29sZGVucm9kOiAgWzE4NCwxMzQsMTFdLFxuICBkYXJrZ3JheTogWzE2OSwxNjksMTY5XSxcbiAgZGFya2dyZWVuOiAgWzAsMTAwLDBdLFxuICBkYXJrZ3JleTogWzE2OSwxNjksMTY5XSxcbiAgZGFya2toYWtpOiAgWzE4OSwxODMsMTA3XSxcbiAgZGFya21hZ2VudGE6ICBbMTM5LDAsMTM5XSxcbiAgZGFya29saXZlZ3JlZW46IFs4NSwxMDcsNDddLFxuICBkYXJrb3JhbmdlOiBbMjU1LDE0MCwwXSxcbiAgZGFya29yY2hpZDogWzE1Myw1MCwyMDRdLFxuICBkYXJrcmVkOiAgWzEzOSwwLDBdLFxuICBkYXJrc2FsbW9uOiBbMjMzLDE1MCwxMjJdLFxuICBkYXJrc2VhZ3JlZW46IFsxNDMsMTg4LDE0M10sXG4gIGRhcmtzbGF0ZWJsdWU6ICBbNzIsNjEsMTM5XSxcbiAgZGFya3NsYXRlZ3JheTogIFs0Nyw3OSw3OV0sXG4gIGRhcmtzbGF0ZWdyZXk6ICBbNDcsNzksNzldLFxuICBkYXJrdHVycXVvaXNlOiAgWzAsMjA2LDIwOV0sXG4gIGRhcmt2aW9sZXQ6IFsxNDgsMCwyMTFdLFxuICBkZWVwcGluazogWzI1NSwyMCwxNDddLFxuICBkZWVwc2t5Ymx1ZTogIFswLDE5MSwyNTVdLFxuICBkaW1ncmF5OiAgWzEwNSwxMDUsMTA1XSxcbiAgZGltZ3JleTogIFsxMDUsMTA1LDEwNV0sXG4gIGRvZGdlcmJsdWU6IFszMCwxNDQsMjU1XSxcbiAgZmlyZWJyaWNrOiAgWzE3OCwzNCwzNF0sXG4gIGZsb3JhbHdoaXRlOiAgWzI1NSwyNTAsMjQwXSxcbiAgZm9yZXN0Z3JlZW46ICBbMzQsMTM5LDM0XSxcbiAgZnVjaHNpYTogIFsyNTUsMCwyNTVdLFxuICBnYWluc2Jvcm86ICBbMjIwLDIyMCwyMjBdLFxuICBnaG9zdHdoaXRlOiBbMjQ4LDI0OCwyNTVdLFxuICBnb2xkOiBbMjU1LDIxNSwwXSxcbiAgZ29sZGVucm9kOiAgWzIxOCwxNjUsMzJdLFxuICBncmF5OiBbMTI4LDEyOCwxMjhdLFxuICBncmVlbjogIFswLDEyOCwwXSxcbiAgZ3JlZW55ZWxsb3c6ICBbMTczLDI1NSw0N10sXG4gIGdyZXk6IFsxMjgsMTI4LDEyOF0sXG4gIGhvbmV5ZGV3OiBbMjQwLDI1NSwyNDBdLFxuICBob3RwaW5rOiAgWzI1NSwxMDUsMTgwXSxcbiAgaW5kaWFucmVkOiAgWzIwNSw5Miw5Ml0sXG4gIGluZGlnbzogWzc1LDAsMTMwXSxcbiAgaXZvcnk6ICBbMjU1LDI1NSwyNDBdLFxuICBraGFraTogIFsyNDAsMjMwLDE0MF0sXG4gIGxhdmVuZGVyOiBbMjMwLDIzMCwyNTBdLFxuICBsYXZlbmRlcmJsdXNoOiAgWzI1NSwyNDAsMjQ1XSxcbiAgbGF3bmdyZWVuOiAgWzEyNCwyNTIsMF0sXG4gIGxlbW9uY2hpZmZvbjogWzI1NSwyNTAsMjA1XSxcbiAgbGlnaHRibHVlOiAgWzE3MywyMTYsMjMwXSxcbiAgbGlnaHRjb3JhbDogWzI0MCwxMjgsMTI4XSxcbiAgbGlnaHRjeWFuOiAgWzIyNCwyNTUsMjU1XSxcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsMjUwLDIxMF0sXG4gIGxpZ2h0Z3JheTogIFsyMTEsMjExLDIxMV0sXG4gIGxpZ2h0Z3JlZW46IFsxNDQsMjM4LDE0NF0sXG4gIGxpZ2h0Z3JleTogIFsyMTEsMjExLDIxMV0sXG4gIGxpZ2h0cGluazogIFsyNTUsMTgyLDE5M10sXG4gIGxpZ2h0c2FsbW9uOiAgWzI1NSwxNjAsMTIyXSxcbiAgbGlnaHRzZWFncmVlbjogIFszMiwxNzgsMTcwXSxcbiAgbGlnaHRza3libHVlOiBbMTM1LDIwNiwyNTBdLFxuICBsaWdodHNsYXRlZ3JheTogWzExOSwxMzYsMTUzXSxcbiAgbGlnaHRzbGF0ZWdyZXk6IFsxMTksMTM2LDE1M10sXG4gIGxpZ2h0c3RlZWxibHVlOiBbMTc2LDE5NiwyMjJdLFxuICBsaWdodHllbGxvdzogIFsyNTUsMjU1LDIyNF0sXG4gIGxpbWU6IFswLDI1NSwwXSxcbiAgbGltZWdyZWVuOiAgWzUwLDIwNSw1MF0sXG4gIGxpbmVuOiAgWzI1MCwyNDAsMjMwXSxcbiAgbWFnZW50YTogIFsyNTUsMCwyNTVdLFxuICBtYXJvb246IFsxMjgsMCwwXSxcbiAgbWVkaXVtYXF1YW1hcmluZTogWzEwMiwyMDUsMTcwXSxcbiAgbWVkaXVtYmx1ZTogWzAsMCwyMDVdLFxuICBtZWRpdW1vcmNoaWQ6IFsxODYsODUsMjExXSxcbiAgbWVkaXVtcHVycGxlOiBbMTQ3LDExMiwyMTldLFxuICBtZWRpdW1zZWFncmVlbjogWzYwLDE3OSwxMTNdLFxuICBtZWRpdW1zbGF0ZWJsdWU6ICBbMTIzLDEwNCwyMzhdLFxuICBtZWRpdW1zcHJpbmdncmVlbjogIFswLDI1MCwxNTRdLFxuICBtZWRpdW10dXJxdW9pc2U6ICBbNzIsMjA5LDIwNF0sXG4gIG1lZGl1bXZpb2xldHJlZDogIFsxOTksMjEsMTMzXSxcbiAgbWlkbmlnaHRibHVlOiBbMjUsMjUsMTEyXSxcbiAgbWludGNyZWFtOiAgWzI0NSwyNTUsMjUwXSxcbiAgbWlzdHlyb3NlOiAgWzI1NSwyMjgsMjI1XSxcbiAgbW9jY2FzaW46IFsyNTUsMjI4LDE4MV0sXG4gIG5hdmFqb3doaXRlOiAgWzI1NSwyMjIsMTczXSxcbiAgbmF2eTogWzAsMCwxMjhdLFxuICBvbGRsYWNlOiAgWzI1MywyNDUsMjMwXSxcbiAgb2xpdmU6ICBbMTI4LDEyOCwwXSxcbiAgb2xpdmVkcmFiOiAgWzEwNywxNDIsMzVdLFxuICBvcmFuZ2U6IFsyNTUsMTY1LDBdLFxuICBvcmFuZ2VyZWQ6ICBbMjU1LDY5LDBdLFxuICBvcmNoaWQ6IFsyMTgsMTEyLDIxNF0sXG4gIHBhbGVnb2xkZW5yb2Q6ICBbMjM4LDIzMiwxNzBdLFxuICBwYWxlZ3JlZW46ICBbMTUyLDI1MSwxNTJdLFxuICBwYWxldHVycXVvaXNlOiAgWzE3NSwyMzgsMjM4XSxcbiAgcGFsZXZpb2xldHJlZDogIFsyMTksMTEyLDE0N10sXG4gIHBhcGF5YXdoaXA6IFsyNTUsMjM5LDIxM10sXG4gIHBlYWNocHVmZjogIFsyNTUsMjE4LDE4NV0sXG4gIHBlcnU6IFsyMDUsMTMzLDYzXSxcbiAgcGluazogWzI1NSwxOTIsMjAzXSxcbiAgcGx1bTogWzIyMSwxNjAsMjIxXSxcbiAgcG93ZGVyYmx1ZTogWzE3NiwyMjQsMjMwXSxcbiAgcHVycGxlOiBbMTI4LDAsMTI4XSxcbiAgcmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1M10sXG4gIHJlZDogIFsyNTUsMCwwXSxcbiAgcm9zeWJyb3duOiAgWzE4OCwxNDMsMTQzXSxcbiAgcm95YWxibHVlOiAgWzY1LDEwNSwyMjVdLFxuICBzYWRkbGVicm93bjogIFsxMzksNjksMTldLFxuICBzYWxtb246IFsyNTAsMTI4LDExNF0sXG4gIHNhbmR5YnJvd246IFsyNDQsMTY0LDk2XSxcbiAgc2VhZ3JlZW46IFs0NiwxMzksODddLFxuICBzZWFzaGVsbDogWzI1NSwyNDUsMjM4XSxcbiAgc2llbm5hOiBbMTYwLDgyLDQ1XSxcbiAgc2lsdmVyOiBbMTkyLDE5MiwxOTJdLFxuICBza3libHVlOiAgWzEzNSwyMDYsMjM1XSxcbiAgc2xhdGVibHVlOiAgWzEwNiw5MCwyMDVdLFxuICBzbGF0ZWdyYXk6ICBbMTEyLDEyOCwxNDRdLFxuICBzbGF0ZWdyZXk6ICBbMTEyLDEyOCwxNDRdLFxuICBzbm93OiBbMjU1LDI1MCwyNTBdLFxuICBzcHJpbmdncmVlbjogIFswLDI1NSwxMjddLFxuICBzdGVlbGJsdWU6ICBbNzAsMTMwLDE4MF0sXG4gIHRhbjogIFsyMTAsMTgwLDE0MF0sXG4gIHRlYWw6IFswLDEyOCwxMjhdLFxuICB0aGlzdGxlOiAgWzIxNiwxOTEsMjE2XSxcbiAgdG9tYXRvOiBbMjU1LDk5LDcxXSxcbiAgdHVycXVvaXNlOiAgWzY0LDIyNCwyMDhdLFxuICB2aW9sZXQ6IFsyMzgsMTMwLDIzOF0sXG4gIHdoZWF0OiAgWzI0NSwyMjIsMTc5XSxcbiAgd2hpdGU6ICBbMjU1LDI1NSwyNTVdLFxuICB3aGl0ZXNtb2tlOiBbMjQ1LDI0NSwyNDVdLFxuICB5ZWxsb3c6IFsyNTUsMjU1LDBdLFxuICB5ZWxsb3dncmVlbjogIFsxNTQsMjA1LDUwXVxufTtcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG4gIHJldmVyc2VLZXl3b3Jkc1tKU09OLnN0cmluZ2lmeShjc3NLZXl3b3Jkc1trZXldKV0gPSBrZXk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb2xvci9+L2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIGdldFJnYmE6IGdldFJnYmEsXG4gICBnZXRIc2xhOiBnZXRIc2xhLFxuICAgZ2V0UmdiOiBnZXRSZ2IsXG4gICBnZXRIc2w6IGdldEhzbCxcbiAgIGdldEh3YjogZ2V0SHdiLFxuICAgZ2V0QWxwaGE6IGdldEFscGhhLFxuXG4gICBoZXhTdHJpbmc6IGhleFN0cmluZyxcbiAgIHJnYlN0cmluZzogcmdiU3RyaW5nLFxuICAgcmdiYVN0cmluZzogcmdiYVN0cmluZyxcbiAgIHBlcmNlbnRTdHJpbmc6IHBlcmNlbnRTdHJpbmcsXG4gICBwZXJjZW50YVN0cmluZzogcGVyY2VudGFTdHJpbmcsXG4gICBoc2xTdHJpbmc6IGhzbFN0cmluZyxcbiAgIGhzbGFTdHJpbmc6IGhzbGFTdHJpbmcsXG4gICBod2JTdHJpbmc6IGh3YlN0cmluZyxcbiAgIGtleXdvcmQ6IGtleXdvcmRcbn1cblxuZnVuY3Rpb24gZ2V0UmdiYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgYWJiciA9ICAvXiMoW2EtZkEtRjAtOV17M30pJC8sXG4gICAgICAgaGV4ID0gIC9eIyhbYS1mQS1GMC05XXs2fSkkLyxcbiAgICAgICByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAga2V5d29yZCA9IC8oXFxEKykvO1xuXG4gICB2YXIgcmdiID0gWzAsIDAsIDBdLFxuICAgICAgIGEgPSAxLFxuICAgICAgIG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdKTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcbiAgICAgIGlmIChtYXRjaFsxXSA9PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG4gICAgICByZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcbiAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICB9XG5cbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZ2JbaV0gPSBzY2FsZShyZ2JbaV0sIDAsIDI1NSk7XG4gICB9XG4gICBpZiAoIWEgJiYgYSAhPSAwKSB7XG4gICAgICBhID0gMTtcbiAgIH1cbiAgIGVsc2Uge1xuICAgICAgYSA9IHNjYWxlKGEsIDAsIDEpO1xuICAgfVxuICAgcmdiWzNdID0gYTtcbiAgIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGdldEhzbGEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHMgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBsID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHMsIGwsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRId2Ioc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcbiAgIGlmIChtYXRjaCkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgdyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGIgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgdywgYiwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldFJnYihzdHJpbmcpIHtcbiAgIHZhciByZ2JhID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgcmV0dXJuIHJnYmEgJiYgcmdiYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsKHN0cmluZykge1xuICB2YXIgaHNsYSA9IGdldEhzbGEoc3RyaW5nKTtcbiAgcmV0dXJuIGhzbGEgJiYgaHNsYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxwaGEoc3RyaW5nKSB7XG4gICB2YXIgdmFscyA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIGlmICh2YWxzKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRIc2xhKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEh3YihzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbn1cblxuLy8gZ2VuZXJhdG9yc1xuZnVuY3Rpb24gaGV4U3RyaW5nKHJnYikge1xuICAgcmV0dXJuIFwiI1wiICsgaGV4RG91YmxlKHJnYlswXSkgKyBoZXhEb3VibGUocmdiWzFdKVxuICAgICAgICAgICAgICArIGhleERvdWJsZShyZ2JbMl0pO1xufVxuXG5mdW5jdGlvbiByZ2JTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2IoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl0gKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKHJnYmFbM10gIT09IHVuZGVmaW5lZCA/IHJnYmFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl1cbiAgICAgICAgICAgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50U3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcblxuICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUsIFwiICsgKGFscGhhIHx8IHJnYmFbM10gfHwgMSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gaHNsU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChoc2xhWzNdICYmIGhzbGFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGhzbGFbM10gIT09IHVuZGVmaW5lZCA/IGhzbGFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlLCBcIlxuICAgICAgICAgICArIGFscGhhICsgXCIpXCI7XG59XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5mdW5jdGlvbiBod2JTdHJpbmcoaHdiLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGh3YlszXSAhPT0gdW5kZWZpbmVkID8gaHdiWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJod2IoXCIgKyBod2JbMF0gKyBcIiwgXCIgKyBod2JbMV0gKyBcIiUsIFwiICsgaHdiWzJdICsgXCIlXCJcbiAgICAgICAgICAgKyAoYWxwaGEgIT09IHVuZGVmaW5lZCAmJiBhbHBoYSAhPT0gMSA/IFwiLCBcIiArIGFscGhhIDogXCJcIikgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24ga2V5d29yZChyZ2IpIHtcbiAgcmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBzY2FsZShudW0sIG1pbiwgbWF4KSB7XG4gICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG4gIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gXCIwXCIgKyBzdHIgOiBzdHI7XG59XG5cblxuLy9jcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuICAgcmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbG9yL34vY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhbGljZWJsdWVcIjogW1xuXHRcdDI0MCxcblx0XHQyNDgsXG5cdFx0MjU1XG5cdF0sXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFtcblx0XHQyNTAsXG5cdFx0MjM1LFxuXHRcdDIxNVxuXHRdLFxuXHRcImFxdWFcIjogW1xuXHRcdDAsXG5cdFx0MjU1LFxuXHRcdDI1NVxuXHRdLFxuXHRcImFxdWFtYXJpbmVcIjogW1xuXHRcdDEyNyxcblx0XHQyNTUsXG5cdFx0MjEyXG5cdF0sXG5cdFwiYXp1cmVcIjogW1xuXHRcdDI0MCxcblx0XHQyNTUsXG5cdFx0MjU1XG5cdF0sXG5cdFwiYmVpZ2VcIjogW1xuXHRcdDI0NSxcblx0XHQyNDUsXG5cdFx0MjIwXG5cdF0sXG5cdFwiYmlzcXVlXCI6IFtcblx0XHQyNTUsXG5cdFx0MjI4LFxuXHRcdDE5NlxuXHRdLFxuXHRcImJsYWNrXCI6IFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdLFxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFtcblx0XHQyNTUsXG5cdFx0MjM1LFxuXHRcdDIwNVxuXHRdLFxuXHRcImJsdWVcIjogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQyNTVcblx0XSxcblx0XCJibHVldmlvbGV0XCI6IFtcblx0XHQxMzgsXG5cdFx0NDMsXG5cdFx0MjI2XG5cdF0sXG5cdFwiYnJvd25cIjogW1xuXHRcdDE2NSxcblx0XHQ0Mixcblx0XHQ0MlxuXHRdLFxuXHRcImJ1cmx5d29vZFwiOiBbXG5cdFx0MjIyLFxuXHRcdDE4NCxcblx0XHQxMzVcblx0XSxcblx0XCJjYWRldGJsdWVcIjogW1xuXHRcdDk1LFxuXHRcdDE1OCxcblx0XHQxNjBcblx0XSxcblx0XCJjaGFydHJldXNlXCI6IFtcblx0XHQxMjcsXG5cdFx0MjU1LFxuXHRcdDBcblx0XSxcblx0XCJjaG9jb2xhdGVcIjogW1xuXHRcdDIxMCxcblx0XHQxMDUsXG5cdFx0MzBcblx0XSxcblx0XCJjb3JhbFwiOiBbXG5cdFx0MjU1LFxuXHRcdDEyNyxcblx0XHQ4MFxuXHRdLFxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFtcblx0XHQxMDAsXG5cdFx0MTQ5LFxuXHRcdDIzN1xuXHRdLFxuXHRcImNvcm5zaWxrXCI6IFtcblx0XHQyNTUsXG5cdFx0MjQ4LFxuXHRcdDIyMFxuXHRdLFxuXHRcImNyaW1zb25cIjogW1xuXHRcdDIyMCxcblx0XHQyMCxcblx0XHQ2MFxuXHRdLFxuXHRcImN5YW5cIjogW1xuXHRcdDAsXG5cdFx0MjU1LFxuXHRcdDI1NVxuXHRdLFxuXHRcImRhcmtibHVlXCI6IFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MTM5XG5cdF0sXG5cdFwiZGFya2N5YW5cIjogW1xuXHRcdDAsXG5cdFx0MTM5LFxuXHRcdDEzOVxuXHRdLFxuXHRcImRhcmtnb2xkZW5yb2RcIjogW1xuXHRcdDE4NCxcblx0XHQxMzQsXG5cdFx0MTFcblx0XSxcblx0XCJkYXJrZ3JheVwiOiBbXG5cdFx0MTY5LFxuXHRcdDE2OSxcblx0XHQxNjlcblx0XSxcblx0XCJkYXJrZ3JlZW5cIjogW1xuXHRcdDAsXG5cdFx0MTAwLFxuXHRcdDBcblx0XSxcblx0XCJkYXJrZ3JleVwiOiBbXG5cdFx0MTY5LFxuXHRcdDE2OSxcblx0XHQxNjlcblx0XSxcblx0XCJkYXJra2hha2lcIjogW1xuXHRcdDE4OSxcblx0XHQxODMsXG5cdFx0MTA3XG5cdF0sXG5cdFwiZGFya21hZ2VudGFcIjogW1xuXHRcdDEzOSxcblx0XHQwLFxuXHRcdDEzOVxuXHRdLFxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFtcblx0XHQ4NSxcblx0XHQxMDcsXG5cdFx0NDdcblx0XSxcblx0XCJkYXJrb3JhbmdlXCI6IFtcblx0XHQyNTUsXG5cdFx0MTQwLFxuXHRcdDBcblx0XSxcblx0XCJkYXJrb3JjaGlkXCI6IFtcblx0XHQxNTMsXG5cdFx0NTAsXG5cdFx0MjA0XG5cdF0sXG5cdFwiZGFya3JlZFwiOiBbXG5cdFx0MTM5LFxuXHRcdDAsXG5cdFx0MFxuXHRdLFxuXHRcImRhcmtzYWxtb25cIjogW1xuXHRcdDIzMyxcblx0XHQxNTAsXG5cdFx0MTIyXG5cdF0sXG5cdFwiZGFya3NlYWdyZWVuXCI6IFtcblx0XHQxNDMsXG5cdFx0MTg4LFxuXHRcdDE0M1xuXHRdLFxuXHRcImRhcmtzbGF0ZWJsdWVcIjogW1xuXHRcdDcyLFxuXHRcdDYxLFxuXHRcdDEzOVxuXHRdLFxuXHRcImRhcmtzbGF0ZWdyYXlcIjogW1xuXHRcdDQ3LFxuXHRcdDc5LFxuXHRcdDc5XG5cdF0sXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbXG5cdFx0NDcsXG5cdFx0NzksXG5cdFx0Nzlcblx0XSxcblx0XCJkYXJrdHVycXVvaXNlXCI6IFtcblx0XHQwLFxuXHRcdDIwNixcblx0XHQyMDlcblx0XSxcblx0XCJkYXJrdmlvbGV0XCI6IFtcblx0XHQxNDgsXG5cdFx0MCxcblx0XHQyMTFcblx0XSxcblx0XCJkZWVwcGlua1wiOiBbXG5cdFx0MjU1LFxuXHRcdDIwLFxuXHRcdDE0N1xuXHRdLFxuXHRcImRlZXBza3libHVlXCI6IFtcblx0XHQwLFxuXHRcdDE5MSxcblx0XHQyNTVcblx0XSxcblx0XCJkaW1ncmF5XCI6IFtcblx0XHQxMDUsXG5cdFx0MTA1LFxuXHRcdDEwNVxuXHRdLFxuXHRcImRpbWdyZXlcIjogW1xuXHRcdDEwNSxcblx0XHQxMDUsXG5cdFx0MTA1XG5cdF0sXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbXG5cdFx0MzAsXG5cdFx0MTQ0LFxuXHRcdDI1NVxuXHRdLFxuXHRcImZpcmVicmlja1wiOiBbXG5cdFx0MTc4LFxuXHRcdDM0LFxuXHRcdDM0XG5cdF0sXG5cdFwiZmxvcmFsd2hpdGVcIjogW1xuXHRcdDI1NSxcblx0XHQyNTAsXG5cdFx0MjQwXG5cdF0sXG5cdFwiZm9yZXN0Z3JlZW5cIjogW1xuXHRcdDM0LFxuXHRcdDEzOSxcblx0XHQzNFxuXHRdLFxuXHRcImZ1Y2hzaWFcIjogW1xuXHRcdDI1NSxcblx0XHQwLFxuXHRcdDI1NVxuXHRdLFxuXHRcImdhaW5zYm9yb1wiOiBbXG5cdFx0MjIwLFxuXHRcdDIyMCxcblx0XHQyMjBcblx0XSxcblx0XCJnaG9zdHdoaXRlXCI6IFtcblx0XHQyNDgsXG5cdFx0MjQ4LFxuXHRcdDI1NVxuXHRdLFxuXHRcImdvbGRcIjogW1xuXHRcdDI1NSxcblx0XHQyMTUsXG5cdFx0MFxuXHRdLFxuXHRcImdvbGRlbnJvZFwiOiBbXG5cdFx0MjE4LFxuXHRcdDE2NSxcblx0XHQzMlxuXHRdLFxuXHRcImdyYXlcIjogW1xuXHRcdDEyOCxcblx0XHQxMjgsXG5cdFx0MTI4XG5cdF0sXG5cdFwiZ3JlZW5cIjogW1xuXHRcdDAsXG5cdFx0MTI4LFxuXHRcdDBcblx0XSxcblx0XCJncmVlbnllbGxvd1wiOiBbXG5cdFx0MTczLFxuXHRcdDI1NSxcblx0XHQ0N1xuXHRdLFxuXHRcImdyZXlcIjogW1xuXHRcdDEyOCxcblx0XHQxMjgsXG5cdFx0MTI4XG5cdF0sXG5cdFwiaG9uZXlkZXdcIjogW1xuXHRcdDI0MCxcblx0XHQyNTUsXG5cdFx0MjQwXG5cdF0sXG5cdFwiaG90cGlua1wiOiBbXG5cdFx0MjU1LFxuXHRcdDEwNSxcblx0XHQxODBcblx0XSxcblx0XCJpbmRpYW5yZWRcIjogW1xuXHRcdDIwNSxcblx0XHQ5Mixcblx0XHQ5MlxuXHRdLFxuXHRcImluZGlnb1wiOiBbXG5cdFx0NzUsXG5cdFx0MCxcblx0XHQxMzBcblx0XSxcblx0XCJpdm9yeVwiOiBbXG5cdFx0MjU1LFxuXHRcdDI1NSxcblx0XHQyNDBcblx0XSxcblx0XCJraGFraVwiOiBbXG5cdFx0MjQwLFxuXHRcdDIzMCxcblx0XHQxNDBcblx0XSxcblx0XCJsYXZlbmRlclwiOiBbXG5cdFx0MjMwLFxuXHRcdDIzMCxcblx0XHQyNTBcblx0XSxcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFtcblx0XHQyNTUsXG5cdFx0MjQwLFxuXHRcdDI0NVxuXHRdLFxuXHRcImxhd25ncmVlblwiOiBbXG5cdFx0MTI0LFxuXHRcdDI1Mixcblx0XHQwXG5cdF0sXG5cdFwibGVtb25jaGlmZm9uXCI6IFtcblx0XHQyNTUsXG5cdFx0MjUwLFxuXHRcdDIwNVxuXHRdLFxuXHRcImxpZ2h0Ymx1ZVwiOiBbXG5cdFx0MTczLFxuXHRcdDIxNixcblx0XHQyMzBcblx0XSxcblx0XCJsaWdodGNvcmFsXCI6IFtcblx0XHQyNDAsXG5cdFx0MTI4LFxuXHRcdDEyOFxuXHRdLFxuXHRcImxpZ2h0Y3lhblwiOiBbXG5cdFx0MjI0LFxuXHRcdDI1NSxcblx0XHQyNTVcblx0XSxcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbXG5cdFx0MjUwLFxuXHRcdDI1MCxcblx0XHQyMTBcblx0XSxcblx0XCJsaWdodGdyYXlcIjogW1xuXHRcdDIxMSxcblx0XHQyMTEsXG5cdFx0MjExXG5cdF0sXG5cdFwibGlnaHRncmVlblwiOiBbXG5cdFx0MTQ0LFxuXHRcdDIzOCxcblx0XHQxNDRcblx0XSxcblx0XCJsaWdodGdyZXlcIjogW1xuXHRcdDIxMSxcblx0XHQyMTEsXG5cdFx0MjExXG5cdF0sXG5cdFwibGlnaHRwaW5rXCI6IFtcblx0XHQyNTUsXG5cdFx0MTgyLFxuXHRcdDE5M1xuXHRdLFxuXHRcImxpZ2h0c2FsbW9uXCI6IFtcblx0XHQyNTUsXG5cdFx0MTYwLFxuXHRcdDEyMlxuXHRdLFxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogW1xuXHRcdDMyLFxuXHRcdDE3OCxcblx0XHQxNzBcblx0XSxcblx0XCJsaWdodHNreWJsdWVcIjogW1xuXHRcdDEzNSxcblx0XHQyMDYsXG5cdFx0MjUwXG5cdF0sXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogW1xuXHRcdDExOSxcblx0XHQxMzYsXG5cdFx0MTUzXG5cdF0sXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogW1xuXHRcdDExOSxcblx0XHQxMzYsXG5cdFx0MTUzXG5cdF0sXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogW1xuXHRcdDE3Nixcblx0XHQxOTYsXG5cdFx0MjIyXG5cdF0sXG5cdFwibGlnaHR5ZWxsb3dcIjogW1xuXHRcdDI1NSxcblx0XHQyNTUsXG5cdFx0MjI0XG5cdF0sXG5cdFwibGltZVwiOiBbXG5cdFx0MCxcblx0XHQyNTUsXG5cdFx0MFxuXHRdLFxuXHRcImxpbWVncmVlblwiOiBbXG5cdFx0NTAsXG5cdFx0MjA1LFxuXHRcdDUwXG5cdF0sXG5cdFwibGluZW5cIjogW1xuXHRcdDI1MCxcblx0XHQyNDAsXG5cdFx0MjMwXG5cdF0sXG5cdFwibWFnZW50YVwiOiBbXG5cdFx0MjU1LFxuXHRcdDAsXG5cdFx0MjU1XG5cdF0sXG5cdFwibWFyb29uXCI6IFtcblx0XHQxMjgsXG5cdFx0MCxcblx0XHQwXG5cdF0sXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbXG5cdFx0MTAyLFxuXHRcdDIwNSxcblx0XHQxNzBcblx0XSxcblx0XCJtZWRpdW1ibHVlXCI6IFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MjA1XG5cdF0sXG5cdFwibWVkaXVtb3JjaGlkXCI6IFtcblx0XHQxODYsXG5cdFx0ODUsXG5cdFx0MjExXG5cdF0sXG5cdFwibWVkaXVtcHVycGxlXCI6IFtcblx0XHQxNDcsXG5cdFx0MTEyLFxuXHRcdDIxOVxuXHRdLFxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFtcblx0XHQ2MCxcblx0XHQxNzksXG5cdFx0MTEzXG5cdF0sXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFtcblx0XHQxMjMsXG5cdFx0MTA0LFxuXHRcdDIzOFxuXHRdLFxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFtcblx0XHQwLFxuXHRcdDI1MCxcblx0XHQxNTRcblx0XSxcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogW1xuXHRcdDcyLFxuXHRcdDIwOSxcblx0XHQyMDRcblx0XSxcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogW1xuXHRcdDE5OSxcblx0XHQyMSxcblx0XHQxMzNcblx0XSxcblx0XCJtaWRuaWdodGJsdWVcIjogW1xuXHRcdDI1LFxuXHRcdDI1LFxuXHRcdDExMlxuXHRdLFxuXHRcIm1pbnRjcmVhbVwiOiBbXG5cdFx0MjQ1LFxuXHRcdDI1NSxcblx0XHQyNTBcblx0XSxcblx0XCJtaXN0eXJvc2VcIjogW1xuXHRcdDI1NSxcblx0XHQyMjgsXG5cdFx0MjI1XG5cdF0sXG5cdFwibW9jY2FzaW5cIjogW1xuXHRcdDI1NSxcblx0XHQyMjgsXG5cdFx0MTgxXG5cdF0sXG5cdFwibmF2YWpvd2hpdGVcIjogW1xuXHRcdDI1NSxcblx0XHQyMjIsXG5cdFx0MTczXG5cdF0sXG5cdFwibmF2eVwiOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDEyOFxuXHRdLFxuXHRcIm9sZGxhY2VcIjogW1xuXHRcdDI1Myxcblx0XHQyNDUsXG5cdFx0MjMwXG5cdF0sXG5cdFwib2xpdmVcIjogW1xuXHRcdDEyOCxcblx0XHQxMjgsXG5cdFx0MFxuXHRdLFxuXHRcIm9saXZlZHJhYlwiOiBbXG5cdFx0MTA3LFxuXHRcdDE0Mixcblx0XHQzNVxuXHRdLFxuXHRcIm9yYW5nZVwiOiBbXG5cdFx0MjU1LFxuXHRcdDE2NSxcblx0XHQwXG5cdF0sXG5cdFwib3JhbmdlcmVkXCI6IFtcblx0XHQyNTUsXG5cdFx0NjksXG5cdFx0MFxuXHRdLFxuXHRcIm9yY2hpZFwiOiBbXG5cdFx0MjE4LFxuXHRcdDExMixcblx0XHQyMTRcblx0XSxcblx0XCJwYWxlZ29sZGVucm9kXCI6IFtcblx0XHQyMzgsXG5cdFx0MjMyLFxuXHRcdDE3MFxuXHRdLFxuXHRcInBhbGVncmVlblwiOiBbXG5cdFx0MTUyLFxuXHRcdDI1MSxcblx0XHQxNTJcblx0XSxcblx0XCJwYWxldHVycXVvaXNlXCI6IFtcblx0XHQxNzUsXG5cdFx0MjM4LFxuXHRcdDIzOFxuXHRdLFxuXHRcInBhbGV2aW9sZXRyZWRcIjogW1xuXHRcdDIxOSxcblx0XHQxMTIsXG5cdFx0MTQ3XG5cdF0sXG5cdFwicGFwYXlhd2hpcFwiOiBbXG5cdFx0MjU1LFxuXHRcdDIzOSxcblx0XHQyMTNcblx0XSxcblx0XCJwZWFjaHB1ZmZcIjogW1xuXHRcdDI1NSxcblx0XHQyMTgsXG5cdFx0MTg1XG5cdF0sXG5cdFwicGVydVwiOiBbXG5cdFx0MjA1LFxuXHRcdDEzMyxcblx0XHQ2M1xuXHRdLFxuXHRcInBpbmtcIjogW1xuXHRcdDI1NSxcblx0XHQxOTIsXG5cdFx0MjAzXG5cdF0sXG5cdFwicGx1bVwiOiBbXG5cdFx0MjIxLFxuXHRcdDE2MCxcblx0XHQyMjFcblx0XSxcblx0XCJwb3dkZXJibHVlXCI6IFtcblx0XHQxNzYsXG5cdFx0MjI0LFxuXHRcdDIzMFxuXHRdLFxuXHRcInB1cnBsZVwiOiBbXG5cdFx0MTI4LFxuXHRcdDAsXG5cdFx0MTI4XG5cdF0sXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbXG5cdFx0MTAyLFxuXHRcdDUxLFxuXHRcdDE1M1xuXHRdLFxuXHRcInJlZFwiOiBbXG5cdFx0MjU1LFxuXHRcdDAsXG5cdFx0MFxuXHRdLFxuXHRcInJvc3licm93blwiOiBbXG5cdFx0MTg4LFxuXHRcdDE0Myxcblx0XHQxNDNcblx0XSxcblx0XCJyb3lhbGJsdWVcIjogW1xuXHRcdDY1LFxuXHRcdDEwNSxcblx0XHQyMjVcblx0XSxcblx0XCJzYWRkbGVicm93blwiOiBbXG5cdFx0MTM5LFxuXHRcdDY5LFxuXHRcdDE5XG5cdF0sXG5cdFwic2FsbW9uXCI6IFtcblx0XHQyNTAsXG5cdFx0MTI4LFxuXHRcdDExNFxuXHRdLFxuXHRcInNhbmR5YnJvd25cIjogW1xuXHRcdDI0NCxcblx0XHQxNjQsXG5cdFx0OTZcblx0XSxcblx0XCJzZWFncmVlblwiOiBbXG5cdFx0NDYsXG5cdFx0MTM5LFxuXHRcdDg3XG5cdF0sXG5cdFwic2Vhc2hlbGxcIjogW1xuXHRcdDI1NSxcblx0XHQyNDUsXG5cdFx0MjM4XG5cdF0sXG5cdFwic2llbm5hXCI6IFtcblx0XHQxNjAsXG5cdFx0ODIsXG5cdFx0NDVcblx0XSxcblx0XCJzaWx2ZXJcIjogW1xuXHRcdDE5Mixcblx0XHQxOTIsXG5cdFx0MTkyXG5cdF0sXG5cdFwic2t5Ymx1ZVwiOiBbXG5cdFx0MTM1LFxuXHRcdDIwNixcblx0XHQyMzVcblx0XSxcblx0XCJzbGF0ZWJsdWVcIjogW1xuXHRcdDEwNixcblx0XHQ5MCxcblx0XHQyMDVcblx0XSxcblx0XCJzbGF0ZWdyYXlcIjogW1xuXHRcdDExMixcblx0XHQxMjgsXG5cdFx0MTQ0XG5cdF0sXG5cdFwic2xhdGVncmV5XCI6IFtcblx0XHQxMTIsXG5cdFx0MTI4LFxuXHRcdDE0NFxuXHRdLFxuXHRcInNub3dcIjogW1xuXHRcdDI1NSxcblx0XHQyNTAsXG5cdFx0MjUwXG5cdF0sXG5cdFwic3ByaW5nZ3JlZW5cIjogW1xuXHRcdDAsXG5cdFx0MjU1LFxuXHRcdDEyN1xuXHRdLFxuXHRcInN0ZWVsYmx1ZVwiOiBbXG5cdFx0NzAsXG5cdFx0MTMwLFxuXHRcdDE4MFxuXHRdLFxuXHRcInRhblwiOiBbXG5cdFx0MjEwLFxuXHRcdDE4MCxcblx0XHQxNDBcblx0XSxcblx0XCJ0ZWFsXCI6IFtcblx0XHQwLFxuXHRcdDEyOCxcblx0XHQxMjhcblx0XSxcblx0XCJ0aGlzdGxlXCI6IFtcblx0XHQyMTYsXG5cdFx0MTkxLFxuXHRcdDIxNlxuXHRdLFxuXHRcInRvbWF0b1wiOiBbXG5cdFx0MjU1LFxuXHRcdDk5LFxuXHRcdDcxXG5cdF0sXG5cdFwidHVycXVvaXNlXCI6IFtcblx0XHQ2NCxcblx0XHQyMjQsXG5cdFx0MjA4XG5cdF0sXG5cdFwidmlvbGV0XCI6IFtcblx0XHQyMzgsXG5cdFx0MTMwLFxuXHRcdDIzOFxuXHRdLFxuXHRcIndoZWF0XCI6IFtcblx0XHQyNDUsXG5cdFx0MjIyLFxuXHRcdDE3OVxuXHRdLFxuXHRcIndoaXRlXCI6IFtcblx0XHQyNTUsXG5cdFx0MjU1LFxuXHRcdDI1NVxuXHRdLFxuXHRcIndoaXRlc21va2VcIjogW1xuXHRcdDI0NSxcblx0XHQyNDUsXG5cdFx0MjQ1XG5cdF0sXG5cdFwieWVsbG93XCI6IFtcblx0XHQyNTUsXG5cdFx0MjU1LFxuXHRcdDBcblx0XSxcblx0XCJ5ZWxsb3dncmVlblwiOiBbXG5cdFx0MTU0LFxuXHRcdDIwNSxcblx0XHQ1MFxuXHRdXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29sb3Ivfi9jb2xvci1zdHJpbmcvfi9jb2xvci1uYW1lL2luZGV4Lmpzb25cbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzEwLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICdhbHNjJztcclxuaW1wb3J0ICogYXMgYWdlbnQgZnJvbSBcInN1cGVyYWdlbnRcIjtcclxuaW1wb3J0ICogYXMgYXN5bmMgZnJvbSBcImFzeW5jXCI7XHJcblxyXG5pbXBvcnQge3VybCxmbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcbmltcG9ydCBTYW1wbGVGaWVsZCBmcm9tIFwiLi8uLi92aWV3L2NvbnRlbnQvU2FtcGxlRmllbGQuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbk1hbmFnZXIgZnJvbSBcIi4vQW5pbWF0aW9uTWFuYWdlci5qc1wiO1xyXG5cclxuY2xhc3MgU2FtcGxlTWFuYWdlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlcntcclxuICAgIC8qKkByZXR1cm4ge3N0cmluZ30qL1xyXG4gICAgZ2V0IENPTkZJR19MT0FERUQoKXtyZXR1cm4gXCJDT05GSUdfTE9BREVEXCI7fTtcclxuICAgIC8qKkByZXR1cm4ge3N0cmluZ30qL1xyXG4gICAgZ2V0IFBSRV9SRUFEWV9TQU1QTEUoKXtyZXR1cm4gXCJQUkVfUkVBRFlfU0FNUExFXCI7fTtcclxuICAgIC8qKkByZXR1cm4ge3N0cmluZ30qL1xyXG4gICAgLy9nZXQgUkVBRFlfU0FNUExFKCl7cmV0dXJuIFwiUkVBRFlfU0FNUExFXCI7fTtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlO1xyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCEoU2FtcGxlTWFuYWdlci5faW5zdGFuY2UgaW5zdGFuY2VvZiBTYW1wbGVNYW5hZ2VyKSl7XHJcbiAgICAgICAgICAgIFNhbXBsZU1hbmFnZXIuX2luc3RhbmNlID0gbmV3IFNhbXBsZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNhbXBsZU1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNhbXBsZXNEYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5zYW1wbGVzRGljdCA9IHt9Oy8v5L6L5a2Q5Luj56CB5paH5Lu2XHJcbiAgICAgICAgdGhpcy5jdXJyU2FtcGxlU2NyaXB0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJTYW1wbGVJRCA9IG51bGw7XHJcbiAgICAgICAgYWdlbnQuZ2V0KFwiZGlzdC9wb3N0X2RhdGEuanNvblwiKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RhdGEgPSBKU09OLnBhcnNlKHJlcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RpY3RbXCJIRUFEXCJdID0gdGhpcy5zYW1wbGVzRGF0YS5wb3N0c1swXTtcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVzSWREaWN0ID0ge307XHJcbiAgICAgICAgICAgIHZhciBpZCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RhdGEucG9zdHMuZm9yRWFjaCgocG9zdCk9PntcclxuICAgICAgICAgICAgICAgIHBvc3QuYWN0aXZlU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBvc3QuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIGlkKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXNEaWN0W2lkK3Bvc3QudGl0bGUrcG9zdC5kYXRlXSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXNJZERpY3RbcG9zdC5pZF0gPSBwb3N0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmluc2lzaExvYWRDb25maWcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZExpc3RlbmVyKHRoaXMuUkVBRFlfU0FNUExFLHRoaXMucmVhZHlTYW1wbGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBmaW5zaXNoTG9hZENvbmZpZygpe1xyXG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLkNPTkZJR19MT0FERUQpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9TYW1wbGUoXCJIRUFEXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRvU2FtcGxlKGhhc2hvcmlkLGNiKXtcclxuICAgICAgICB2YXIgc2FtcGxlID0gdGhpcy5zYW1wbGVzRGljdFtoYXNob3JpZF07XHJcbiAgICAgICAgaWYoIXNhbXBsZSl7XHJcbiAgICAgICAgICAgIHNhbXBsZSA9IHRoaXMuc2FtcGxlc0lkRGljdFtoYXNob3JpZF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHNhbXBsZSl7XHJcbiAgICAgICAgICAgIGlmKCFzYW1wbGVbXCJtYXJkZG93blwiXSAmJiAhc2FtcGxlW1wic2NyaXB0XCJdKXtcclxuICAgICAgICAgICAgICAgIGFzeW5jLnNlcmllcyhbXHJcbiAgICAgICAgICAgICAgICAgICAgKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50LmdldCh1cmwuam9pbihcImRpc3QvcG9zdFwiLHNhbXBsZS5wYXRoLFwiL0VudHJ5LmpzXCIpKS5lbmQoKGVycixyZXMpPT57bmV4dChlcnIscmVzLnRleHQpO30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50LmdldCh1cmwuam9pbihcInNyYy1wb3N0L1wiLHNhbXBsZS5wYXRoLFwiTm90ZS5tZFwiKSkuZW5kKChlcnIscmVzKT0+e25leHQoZXJyLHJlcy50ZXh0KTt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLChlcnIsIHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc19zY3JpcHQgPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNfbWFya2Rvd24gPSByZXN1bHRzWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmFsLmFwcGx5KHRoaXMsIFtcInZhciBzY3JpcHQgPVwiICsgcmVzX3NjcmlwdF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2NyaXB0ICE9PSBcInVuZGVmaW5lZFwiICYmIHNjcmlwdC5wcm90b3R5cGUgJiYgc2NyaXB0LnByb3RvdHlwZSBpbnN0YW5jZW9mIFNhbXBsZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVtcInNjcmlwdFwiXSA9IHNjcmlwdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsb2FkIHNhbXBsZSBzY3JpcHQgZXJyb3JcIiwgc2FtcGxlLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVbXCJtYXJrZG93blwiXT1yZXNfbWFya2Rvd247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZVJlYWR5U2FtcGxlKHNhbXBsZSxjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBjYj09PVwiZnVuY3Rpb25cIil7Y2IoKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVSZWFkeVNhbXBsZShzYW1wbGUsY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZVJlYWR5U2FtcGxlKHNhbXBsZSxjYil7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInByZVJlYWR5U2FtcGxlXCIpXHJcbiAgICAgICAgdGhpcy5zYW1wbGVzRGF0YS5wb3N0cy5mb3JFYWNoKChwb3N0KT0+e1xyXG4gICAgICAgICAgICBwb3N0LmFjdGl2ZVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNhbXBsZS5hY3RpdmVTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYodHlwZW9mIGNiPT09XCJmdW5jdGlvblwiKXtjYigpO31cclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuUFJFX1JFQURZX1NBTVBMRSx7c2FtcGxlOnNhbXBsZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWR5U2FtcGxlKGlkLGRhdGEpe1xyXG4gICAgICAgIGlmKGlkPT09dGhpcy5jdXJyU2FtcGxlSUQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VyclNhbXBsZUlEPWlkO1xyXG5cclxuICAgICAgICB2YXIgc2FtcGxlID0gdGhpcy5zYW1wbGVzSWREaWN0W2lkXTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jdXJyU2FtcGxlU2NyaXB0KXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyU2FtcGxlU2NyaXB0LmRlc3RydWN0KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VyclNhbXBsZVNjcmlwdC5ub3RJbXBsZW1lbnRPbkRlc3RydWN0KXtcclxuICAgICAgICAgICAgICAgIEFuaW1hdGlvbk1hbmFnZXIuc3RvcCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2FtcGxlKXtcclxuICAgICAgICAgICAgaWYoIXNhbXBsZS5ydW5pbmdTY3JpcHQpe1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlLnJ1bmluZ1NjcmlwdCA9IG5ldyBzYW1wbGUuc2NyaXB0KHNhbXBsZS5pZCx1cmwuam9pbihcInNyYy1wb3N0L1wiLHNhbXBsZS5wYXRoKSx1cmwuam9pbihcImRpc3QvcG9zdFwiLHNhbXBsZS5wYXRoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2FtcGxlLnJ1bmluZ1NjcmlwdC5sYXVuY2goZGF0YS5jYW52YXMsZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclNhbXBsZVNjcmlwdCA9IHNhbXBsZS5ydW5pbmdTY3JpcHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVNYW5hZ2VyLmluc3RhbmNlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL2NvcmUvU2FtcGxlTWFuYWdlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cclxuXHJcbmV4cG9ydHMuRXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZShcIi4vZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXCIpO1xyXG4vL2V4cG9ydHMuQWpheCAgPSByZXF1aXJlKFwiLi9kaXN0L2FqYXgvQWpheFByb3h5LmpzXCIpXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfdXRpbHNKcyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG4vL3ZhciBldmVudHNNYXAgPSB0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiP1N5bWJvbCgpOlwiX19ldmVudHNNYXBfX1wiO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHNKcyk7XG5cbnZhciBldmVudHNNYXAgPSBcIl9fZXZlbnRzTWFwX19cIjtcblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnREaXNwYXRjaGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnREaXNwYXRjaGVyKTtcblxuICAgICAgICB0aGlzW2V2ZW50c01hcF0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIOa0vuWPkeS4gOS4quS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXG5cbiAgICBfY3JlYXRlQ2xhc3MoRXZlbnREaXNwYXRjaGVyLCBbe1xuICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50bWFwID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50bWFwKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1dGlscy5ub3RpZnlBcnJheShldmVudG1hcCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDov5Tlm57miYDmnInlm57osIPmlrnms5VcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJsaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXNbZXZlbnRzTWFwXVtldmVudF07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbi5jYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiaGFzTGlzdGVuZXJzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpc1tldmVudHNNYXBdW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzW2V2ZW50c01hcF1bZXZlbnRdLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDkuIDlj6rkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICAgICAqIEBwYXJhbSBwcmlvcml0eVxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImFkZExpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIG51bGwsIHByaW9yaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+mZpOS4gOWPquS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB0aGlzT2JqZWN0XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVtb3ZlTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xuICAgICAgICAgICAgdXRpbHMudW5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56e76Zmk5omA5pyJ5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVtb3ZlQWxsTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzW2V2ZW50c01hcF1bZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZMs566A5piT6Kem5Y+R5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwib25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9kyzllK/kuIDop6blj5HlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJvbmNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50RGlzcGF0Y2hlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1WMlpXNTBjeTlGZG1WdWRFUnBjM0JoZEdOb1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlIwRXNXVUZCV1N4RFFVRkRPenM3T3pzN096czdPenQxUWtGRFZTeFpRVUZaT3pzN08wbEJRWFpDTEV0QlFVczdPMEZCUjJwQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEdWQlFXVXNRMEZCUXpzN1NVRkRNVUlzWlVGQlpUdEJRVU5PTEdGQlJGUXNaVUZCWlN4SFFVTklPemhDUVVSYUxHVkJRV1U3TzBGQlJXSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU40UWpzN096czdPenM3YVVKQlNFTXNaVUZCWlRzN1pVRlZZaXhqUVVGRExFdEJRVXNzUlVGQlZ6dEJRVU5xUWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JETEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdhMFJCUm14Q0xFbEJRVWs3UVVGQlNpeDNRa0ZCU1RzN08wRkJSMWdzY1VKQlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZCTzJGQlEzQkRPMU5CUTBvN096czdPenM3T3p0bFFVOVJMRzFDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5pTEdkQ1FVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRjRU1zWjBKQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVNN1FVRkRVQ3h6UWtGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmFMRzlDUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8yRkJRMjVETzBGQlEwUXNiVUpCUVU4c1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZUTEVkQlFVY3NSVUZCUXp0QlFVTXpRaXgxUWtGQlR5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRPMkZCUTNaQ0xFTkJRVU1zUTBGQlF6dFRRVU5PT3pzN1pVRkZWeXh6UWtGQlF5eExRVUZMTEVWQlFVTTdRVUZEWml4blFrRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJRenRCUVVGRExIVkNRVUZQTEV0QlFVc3NRMEZCUXp0aFFVRkRPMEZCUXpGRExHMUNRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpGRE96czdPenM3T3pzN096dGxRVk5WTEhGQ1FVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZGQlFWRXNSVUZCUlR0QlFVTXZReXhwUWtGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFOQlEzQkdPenM3T3pzN096czdPMlZCVVdFc2QwSkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVN1FVRkRlRU1zYVVKQlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VTBGRGRFVTdPenM3T3pzN08yVkJUV2RDTERKQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOeVFpeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTXZRanM3T3pzN096czdPMlZCVDBNc1dVRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZGTzBGQlEyaENMR2xDUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVMEZEZUVRN096czdPenM3T3p0bFFVOUhMR05CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU5zUWl4cFFrRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5vUmpzN08xZEJia1pETEdWQlFXVTdPenR4UWtGelJrNHNaVUZCWlNJc0ltWnBiR1VpT2lKbGRtVnVkSE12UlhabGJuUkVhWE53WVhSamFHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMelF1WEhKY2JpQXFMMXh5WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjY2x4dWFXMXdiM0owSUNvZ1lYTWdkWFJwYkhNZ1puSnZiU0JjSWk0dmRYUnBiSE11YW5OY0lqdGNjbHh1WEhKY2JpOHZkbUZ5SUdWMlpXNTBjMDFoY0NBOUlIUjVjR1Z2WmlCVGVXMWliMnc5UFQxY0ltWjFibU4wYVc5dVhDSS9VM2x0WW05c0tDazZYQ0pmWDJWMlpXNTBjMDFoY0Y5ZlhDSTdYSEpjYm5aaGNpQmxkbVZ1ZEhOTllYQWdQU0JjSWw5ZlpYWmxiblJ6VFdGd1gxOWNJanRjY2x4dVkyeGhjM01nUlhabGJuUkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhOYlpYWmxiblJ6VFdGd1hTQTlJSHQ5TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nNXJTKzVZK1I1TGlBNUxpcTVMcUw1THUyWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmhjbWR6WEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUdWdGFYUW9aWFpsYm5Rc0lDNHVMbUZ5WjNNcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1pYWmxiblJ0WVhBZ1BTQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHVjJaVzUwYldGd0tTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1dWIzUnBabmxCY25KaGVTaGxkbVZ1ZEcxaGNDd2dZWEpuY3lsY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG92NVRsbTU3bWlZRG1uSW5sbTU3b3NJUG1scm5tczVWY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZXlwOVhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHeHBjM1JsYm1WeWN5aGxkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpYTjFiSFFnUFNCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUtDRnlaWE4xYkhRcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCYlhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRsZG1WdWRITk5ZWEJkVzJWMlpXNTBYU0E5SUhKbGMzVnNkRHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEM1dFlYQW9ablZ1WTNScGIyNG9ZbWx1S1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0pwYmk1allXeHNZbUZqYXp0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCb1lYTk1hWE4wWlc1bGNuTW9aWFpsYm5RcGUxeHlYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRLWHR5WlhSMWNtNGdabUZzYzJVN2ZWeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTG14bGJtZDBhRDR3TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nNXJlNzVZcWc1TGlBNVkrcTVMNm01WkNzNVptb1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JqWVd4c1ltRmphMXh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSFJvYVhOUFltcGxZM1JjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0J3Y21sdmNtbDBlVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JoWkdSTWFYTjBaVzVsY2lobGRtVnVkQ3dnWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRc0lIQnlhVzl5YVhSNUtTQjdYSEpjYmlBZ0lDQWdJQ0FnZFhScGJITXVjbVZuYVhOMFRtOTBhV1o1S0hSb2FYTmJaWFpsYm5SelRXRndYU3dnWlhabGJuUXNJR05oYkd4aVlXTnJMQ0IwYUdselQySnFaV04wTENCdWRXeHNMQ0J3Y21sdmNtbDBlU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURucDd2cG1hVGt1SURsajZya3ZxYmxrS3psbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05oYkd4aVlXTnJYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdkR2hwYzA5aWFtVmpkRnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J5WlcxdmRtVk1hWE4wWlc1bGNpaGxkbVZ1ZEN3Z1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUXBJSHRjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTUxYm5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXl3Z2RHaHBjMDlpYW1WamRDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG5wN3ZwbWFUbWlZRG1uSW5rdnFibGtLemxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNpaGxkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhOYlpYWmxiblJ6VFdGd1hWdGxkbVZ1ZEYwZ1BTQmJYVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJT1c5a3l6bnJvRG1tSlBvcDZibGo1SGxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElHTmhiR3hpWVdOclhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHOXVLR1YyWlc1MExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhWMGFXeHpMbkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURsdlpNczVaU3Y1TGlBNktlbTVZK1I1Wm1vWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmpZV3hzWW1GamExeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnZibU5sS0dWMlpXNTBMQ0JqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXl3Z2JuVnNiQ3dnYm5Wc2JDd2diblZzYkN3Z2RISjFaU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVWMlpXNTBSR2x6Y0dGMFkyaGxjanNpWFN3aWMyOTFjbU5sVW05dmRDSTZJaTl6YjNWeVkyVXZJbjA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVnaXN0Tm90aWZ5ID0gcmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy51bnJlZ2lzdE5vdGlmeSA9IHVucmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy5ub3RpZnkgPSBub3RpZnk7XG5leHBvcnRzLm5vdGlmeUFycmF5ID0gbm90aWZ5QXJyYXk7XG5cbmZ1bmN0aW9uIHJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwYXJhbSwgcHJpb3JpdHksIG9uY2UpIHtcbiAgICAvLyxyZXNlcnZlPzphbnlcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgbm90aWZ5bWFwW25hbWVdID0gW107XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcblxuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xuICAgIHZhciBiaW47XG5cbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgcHJpb3JpdHkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmluID0gYXJyW2ldO1xuICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy/pmLLmraLph43lpI3mj5LlhaVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmluICYmIGluc2VydEluZGV4ID09IC0xICYmIGJpbi5wcmlvcml0eSA8IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW4gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGhpc09iamVjdDogdGhpc09iamVjdCwgcGFyYW06IHBhcmFtID8gcGFyYW0gOiBbXSwgcHJpb3JpdHk6IHByaW9yaXR5LCBvbmNlOiBvbmNlIH07XG4gICAgaWYgKGluc2VydEluZGV4ICE9IC0xKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2goYmluKTtcbiAgICB9XG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIHJldHVybjtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5bWFwW25hbWVdID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICByZXR1cm4gIShiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSkge1xuICAgICAgICAgICAgdmFyIGJpbiA9IGFycltpXTtcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkgcGFyYW0gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKSBwYXJhbSA9IGJpbi5wYXJhbS5jb25jYXQocGFyYW0pO1xuICAgICAgICAgICAgICAgIGJpbi5jYWxsYmFjay5hcHBseShiaW4udGhpc09iamVjdCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVYyWlc1MGN5OTFkR2xzY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenRCUVVsUExGTkJRVk1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkRMRWxCUVVrc1JVRkJSVHM3UVVGRGRFWXNVVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRekZETEZGQlFVa3NSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTVVJc1VVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTjRRaXhSUVVGSkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnlRaXhSUVVGSkxFZEJRVWNzUTBGQlF6czdRVUZGVWl4UlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6ZENMRmRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEWWl4WlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUlVGQlJUdEJRVU51UlN4dFFrRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdRVUZEUkN4WlFVRkpMRWRCUVVjc1NVRkJTU3hYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFVkJRVVU3UVVGRGNrUXNkVUpCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJrSTdTMEZEU2pzN1FVRkZSQ3hQUVVGSExFZEJRVWNzUlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRE8wRkJRemRITEZGQlFVa3NWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMjVDTEZkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnVReXhOUVVOSk8wRkJRMFFzVjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOcVFqdEJRVU5FTEdGQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03UTBGRGVrSTdPMEZCUlUwc1UwRkJVeXhqUVVGakxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wRkJRMnhGTEZGQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU1zVDBGQlR6dEJRVU0xUWl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHBRa0ZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVXl4SFFVRkhMRVZCUVVNN1FVRkRkRU1zYlVKQlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4TFFVRkxMRlZCUVZVc1EwRkJRU3hCUVVGRExFTkJRVUU3VTBGRGRrVXNRMEZCUXl4RFFVRkRPMHRCUTA0N1EwRkRTanM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJUdEJRVU16UXl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHRRa0ZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU40UWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObUxFMUJRVTA3UVVGRFNDeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RanREUVVOS096dEJRVVZOTEZOQlFWTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFppeFpRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNN1FVRkRjRU1zWjBKQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4blFrRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnlRaXh2UWtGQlNTeERRVUZETEV0QlFVc3NSVUZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEc5Q1FVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6bERMRzFDUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6RkRMRzlDUVVGSkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVTTdRVUZEVkN4MVFrRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JDTzJGQlEwbzdVMEZEU2p0TFFVTktPME5CUTBvaUxDSm1hV3hsSWpvaVpYWmxiblJ6TDNWMGFXeHpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMekU1TGx4eVhHNGdLaTljY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlaV2RwYzNST2IzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZEN3Z2NHRnlZVzBzSUhCeWFXOXlhWFI1TEc5dVkyVXBJSHN2THl4eVpYTmxjblpsUHpwaGJubGNjbHh1SUNBZ0lHbG1JQ2doYm05MGFXWjViV0Z3VzI1aGJXVmRLVzV2ZEdsbWVXMWhjRnR1WVcxbFhTQTlJRnRkTzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dVhISmNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdZWEp5TG14bGJtZDBhRHRjY2x4dUlDQWdJSFpoY2lCcGJuTmxjblJKYm1SbGVDQTlJQzB4TzF4eVhHNGdJQ0FnZG1GeUlHSnBianRjY2x4dVhISmNiaUFnSUNCcFppQW9jSEpwYjNKcGRIa2dQVDA5SUhWdVpHVm1hVzVsWkNsd2NtbHZjbWwwZVNBOUlEQTdYSEpjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdZbWx1SUQwZ1lYSnlXMmxkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05ySUQwOVBTQmpZV3hzWW1GamF5QW1KaUJpYVc0dWRHaHBjMDlpYW1WamRDQTlQVDBnZEdocGMwOWlhbVZqZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdMeS9wbUxMbXJhTHBoNDNscEkzbWo1TGxoYVZjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dKcGJpQW1KaUJwYm5ObGNuUkpibVJsZUNBOVBTQXRNU0FtSmlCaWFXNHVjSEpwYjNKcGRIa2dQQ0J3Y21sdmNtbDBlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5ObGNuUkpibVJsZUNBOUlHazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHSnBiaUE5SUh0allXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUTZJSFJvYVhOUFltcGxZM1FzSUhCaGNtRnRPaUJ3WVhKaGJTQS9JSEJoY21GdElEb2dXMTBzSUhCeWFXOXlhWFI1T2lCd2NtbHZjbWwwZVNBc2IyNWpaVHB2Ym1ObGZUdGNjbHh1SUNBZ0lHbG1JQ2hwYm5ObGNuUkpibVJsZUNBaFBTQXRNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHRnljaTV6Y0d4cFkyVW9hVzV6WlhKMFNXNWtaWGdzSURBc0lHSnBiaWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JoY25JdWNIVnphQ2hpYVc0cE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2JtOTBhV1o1YldGd1cyNWhiV1ZkSUQwZ1lYSnlPMXh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFc1eVpXZHBjM1JPYjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDRnViM1JwWm5sdFlYQmJibUZ0WlYwcGNtVjBkWEp1TzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dUlDQWdJR2xtSUNoaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCdWIzUnBabmx0WVhCYmJtRnRaVjBnUFNCaGNuSXVabWxzZEdWeUtHWjFibU4wYVc5dUtHSnBiaWw3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQWhLR0pwYmk1allXeHNZbUZqYXlBOVBUMGdZMkZzYkdKaFkyc2dKaVlnWW1sdUxuUm9hWE5QWW1wbFkzUWdQVDA5SUhSb2FYTlBZbXBsWTNRcFhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdWIzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1SUNBZ0lHbG1JQ2hoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0J1YjNScFpubEJjbkpoZVNoaGNuSXNJSEJoY21GdEtUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYm05MGFXWjVRWEp5WVhrb1lYSnlMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdabTl5SUNoMllYSWdhU0JwYmlCaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppaDBlWEJsYjJZZ0sya2dQVDA5SUZ3aWJuVnRZbVZ5WENJZ0ppWWdJV2x6VG1GT0tDdHBLU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaWFXNGdQU0JoY25KYmFWMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05yS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhCaGNtRnRLWEJoY21GdElEMGdXMTA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZbWx1TG5CaGNtRnRLWEJoY21GdElEMGdZbWx1TG5CaGNtRnRMbU52Ym1OaGRDaHdZWEpoYlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlhVzR1WTJGc2JHSmhZMnN1WVhCd2JIa29ZbWx1TG5Sb2FYTlBZbXBsWTNRc0lIQmhjbUZ0S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0dWIyNWpaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEp5TG5Od2JHbGpaU2hwTENBeEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0pkTENKemIzVnlZMlZTYjI5MElqb2lMM052ZFhKalpTOGlmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XG4gID8gKHRoaXMgfHwgc2VsZilcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgKHN0ci5sZW5ndGggfHwgc3RyIGluc3RhbmNlb2YgT2JqZWN0KVxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICAvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDA0Njk3Mi9tc2llLXJldHVybnMtc3RhdHVzLWNvZGUtb2YtMTIyMy1mb3ItYWpheC1yZXF1ZXN0XG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICBuZXdfZXJyLm9yaWdpbmFsID0gZXJyO1xuICAgIG5ld19lcnIucmVzcG9uc2UgPSByZXM7XG4gICAgbmV3X2Vyci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuXG4gICAgc2VsZi5jYWxsYmFjayhuZXdfZXJyLCByZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX3RpbWVvdXQgPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLmFib3J0ZWQpIHJldHVybjtcbiAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIuYWJvcnQoKTtcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3Mpe1xuICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICogcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKG5ldyBCbG9iKFsnPGEgaWQ9XCJhXCI+PGIgaWQ9XCJiXCI+aGV5ITwvYj48L2E+J10sIHsgdHlwZTogXCJ0ZXh0L2h0bWxcIn0pKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBxdWVyeXN0cmluZ1xuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG11bHRpcGxlIGRhdGEgXCJ3cml0ZXNcIlxuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuc2VuZCh7IHNlYXJjaDogJ3F1ZXJ5JyB9KVxuICogICAgICAgICAuc2VuZCh7IHJhbmdlOiAnMS4uNScgfSlcbiAqICAgICAgICAgLnNlbmQoeyBvcmRlcjogJ2Rlc2MnIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcblxuICAvLyBtZXJnZVxuICBpZiAob2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIW9iaiB8fCBpc0hvc3QoZGF0YSkpIHJldHVybiB0aGlzO1xuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IHJlcXVlc3QuZ2V0WEhSKCk7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZGF0YSA9IHRoaXMuX2Zvcm1EYXRhIHx8IHRoaXMuX2RhdGE7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gSW4gSUU5LCByZWFkcyB0byBhbnkgcHJvcGVydHkgKGUuZy4gc3RhdHVzKSBvZmYgb2YgYW4gYWJvcnRlZCBYSFIgd2lsbFxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZXJyb3IgXCJDb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbiBkdWUgdG8gZXJyb3IgYzAwYzAyM2ZcIlxuICAgIHZhciBzdGF0dXM7XG4gICAgdHJ5IHsgc3RhdHVzID0geGhyLnN0YXR1cyB9IGNhdGNoKGUpIHsgc3RhdHVzID0gMDsgfVxuXG4gICAgaWYgKDAgPT0gc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCkgcmV0dXJuIHNlbGYudGltZW91dEVycm9yKCk7XG4gICAgICBpZiAoc2VsZi5hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgfTtcbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgfVxuICB0cnkge1xuICAgIGlmICh4aHIudXBsb2FkICYmIHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge1xuICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAvLyBSZXBvcnRlZCBoZXJlOlxuICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcbiAgfVxuXG4gIC8vIHRpbWVvdXRcbiAgaWYgKHRpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLnRpbWVkb3V0ID0gdHJ1ZTtcbiAgICAgIHNlbGYuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIGlmIChxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QocXVlcnkpO1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICB2YXIgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdIDogJyddO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuICB4aHIuc2VuZChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZhdXggcHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG4gIHJldHVybiB0aGlzLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgIGVyciA/IHJlamVjdChlcnIpIDogZnVsZmlsbChyZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5kZWwgPSBmdW5jdGlvbih1cmwsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0RFTEVURScsIHVybCk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBBVENIIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogYXN5bmNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW9sYW4vYXN5bmNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMC0yMDE0IENhb2xhbiBNY01haG9uXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBhc3luYyA9IHt9O1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgIGZ1bmN0aW9uIGlkZW50aXR5KHYpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvQm9vbCh2KSB7XG4gICAgICAgIHJldHVybiAhIXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vdElkKHYpIHtcbiAgICAgICAgcmV0dXJuICF2O1xuICAgIH1cblxuICAgIC8vIGdsb2JhbCBvbiB0aGUgc2VydmVyLCB3aW5kb3cgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgcHJldmlvdXNfYXN5bmM7XG5cbiAgICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbiAgICAvLyBvbiB0aGUgc2VydmVyLCBvciBgdGhpc2AgaW4gc29tZSB2aXJ0dWFsIG1hY2hpbmVzLiBXZSB1c2UgYHNlbGZgXG4gICAgLy8gaW5zdGVhZCBvZiBgd2luZG93YCBmb3IgYFdlYldvcmtlcmAgc3VwcG9ydC5cbiAgICB2YXIgcm9vdCA9IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZiB8fFxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCB8fFxuICAgICAgICAgICAgdGhpcztcblxuICAgIGlmIChyb290ICE9IG51bGwpIHtcbiAgICAgICAgcHJldmlvdXNfYXN5bmMgPSByb290LmFzeW5jO1xuICAgIH1cblxuICAgIGFzeW5jLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuYXN5bmMgPSBwcmV2aW91c19hc3luYztcbiAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvbmx5X29uY2UoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGZuID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsYmFjayB3YXMgYWxyZWFkeSBjYWxsZWQuXCIpO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfb25jZShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZm4gPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBmbiA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8vLyBjcm9zcy1icm93c2VyIGNvbXBhdGlibGl0eSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgdmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgICB2YXIgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIC8vIFBvcnRlZCBmcm9tIHVuZGVyc2NvcmUuanMgaXNPYmplY3RcbiAgICB2YXIgX2lzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9pc0FycmF5TGlrZShhcnIpIHtcbiAgICAgICAgcmV0dXJuIF9pc0FycmF5KGFycikgfHwgKFxuICAgICAgICAgICAgLy8gaGFzIGEgcG9zaXRpdmUgaW50ZWdlciBsZW5ndGggcHJvcGVydHlcbiAgICAgICAgICAgIHR5cGVvZiBhcnIubGVuZ3RoID09PSBcIm51bWJlclwiICYmXG4gICAgICAgICAgICBhcnIubGVuZ3RoID49IDAgJiZcbiAgICAgICAgICAgIGFyci5sZW5ndGggJSAxID09PSAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2VhY2goY29sbCwgaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9pc0FycmF5TGlrZShjb2xsKSA/XG4gICAgICAgICAgICBfYXJyYXlFYWNoKGNvbGwsIGl0ZXJhdG9yKSA6XG4gICAgICAgICAgICBfZm9yRWFjaE9mKGNvbGwsIGl0ZXJhdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXJyYXlFYWNoKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihhcnJbaW5kZXhdLCBpbmRleCwgYXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYXAoYXJyLCBpdGVyYXRvcikge1xuICAgICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGgsXG4gICAgICAgICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0b3IoYXJyW2luZGV4XSwgaW5kZXgsIGFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmFuZ2UoY291bnQpIHtcbiAgICAgICAgcmV0dXJuIF9tYXAoQXJyYXkoY291bnQpLCBmdW5jdGlvbiAodiwgaSkgeyByZXR1cm4gaTsgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlZHVjZShhcnIsIGl0ZXJhdG9yLCBtZW1vKSB7XG4gICAgICAgIF9hcnJheUVhY2goYXJyLCBmdW5jdGlvbiAoeCwgaSwgYSkge1xuICAgICAgICAgICAgbWVtbyA9IGl0ZXJhdG9yKG1lbW8sIHgsIGksIGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2ZvckVhY2hPZihvYmplY3QsIGl0ZXJhdG9yKSB7XG4gICAgICAgIF9hcnJheUVhY2goX2tleXMob2JqZWN0KSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaXRlcmF0b3Iob2JqZWN0W2tleV0sIGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmRleE9mKGFyciwgaXRlbSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBfa2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9rZXlJdGVyYXRvcihjb2xsKSB7XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHZhciBsZW47XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICBpZiAoX2lzQXJyYXlMaWtlKGNvbGwpKSB7XG4gICAgICAgICAgICBsZW4gPSBjb2xsLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gaSA8IGxlbiA/IGkgOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleXMgPSBfa2V5cyhjb2xsKTtcbiAgICAgICAgICAgIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBpIDwgbGVuID8ga2V5c1tpXSA6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2ltaWxhciB0byBFUzYncyByZXN0IHBhcmFtIChodHRwOi8vYXJpeWEub2ZpbGFicy5jb20vMjAxMy8wMy9lczYtYW5kLXJlc3QtcGFyYW1ldGVyLmh0bWwpXG4gICAgLy8gVGhpcyBhY2N1bXVsYXRlcyB0aGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIGFuIGFycmF5LCBhZnRlciBhIGdpdmVuIGluZGV4LlxuICAgIC8vIEZyb20gdW5kZXJzY29yZS5qcyAoaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL3B1bGwvMjE0MCkuXG4gICAgZnVuY3Rpb24gX3Jlc3RQYXJhbShmdW5jLCBzdGFydEluZGV4KSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ID09IG51bGwgPyBmdW5jLmxlbmd0aCAtIDEgOiArc3RhcnRJbmRleDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGFyZ3VtZW50cy5sZW5ndGggLSBzdGFydEluZGV4LCAwKTtcbiAgICAgICAgICAgIHZhciByZXN0ID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICByZXN0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCArIHN0YXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChzdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIHJlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3VycmVudGx5IHVudXNlZCBidXQgaGFuZGxlIGNhc2VzIG91dHNpZGUgb2YgdGhlIHN3aXRjaCBzdGF0ZW1lbnQ6XG4gICAgICAgICAgICAvLyB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgICAgICAgIC8vIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHN0YXJ0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vICAgICBhcmdzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBhcmdzW3N0YXJ0SW5kZXhdID0gcmVzdDtcbiAgICAgICAgICAgIC8vIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3IodmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLy8vIGV4cG9ydGVkIGFzeW5jIG1vZHVsZSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgLy8vLyBuZXh0VGljayBpbXBsZW1lbnRhdGlvbiB3aXRoIGJyb3dzZXItY29tcGF0aWJsZSBmYWxsYmFjayAvLy8vXG5cbiAgICAvLyBjYXB0dXJlIHRoZSBnbG9iYWwgcmVmZXJlbmNlIHRvIGd1YXJkIGFnYWluc3QgZmFrZVRpbWVyIG1vY2tzXG4gICAgdmFyIF9zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIHNldEltbWVkaWF0ZTtcblxuICAgIHZhciBfZGVsYXkgPSBfc2V0SW1tZWRpYXRlID8gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgLy8gbm90IGEgZGlyZWN0IGFsaWFzIGZvciBJRTEwIGNvbXBhdGliaWxpdHlcbiAgICAgICAgX3NldEltbWVkaWF0ZShmbik7XG4gICAgfSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9jZXNzLm5leHRUaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhc3luYy5uZXh0VGljayA9IF9kZWxheTtcbiAgICB9XG4gICAgYXN5bmMuc2V0SW1tZWRpYXRlID0gX3NldEltbWVkaWF0ZSA/IF9kZWxheSA6IGFzeW5jLm5leHRUaWNrO1xuXG5cbiAgICBhc3luYy5mb3JFYWNoID1cbiAgICBhc3luYy5lYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5lYWNoT2YoYXJyLCBfd2l0aG91dEluZGV4KGl0ZXJhdG9yKSwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5mb3JFYWNoU2VyaWVzID1cbiAgICBhc3luYy5lYWNoU2VyaWVzID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5lYWNoT2ZTZXJpZXMoYXJyLCBfd2l0aG91dEluZGV4KGl0ZXJhdG9yKSwgY2FsbGJhY2spO1xuICAgIH07XG5cblxuICAgIGFzeW5jLmZvckVhY2hMaW1pdCA9XG4gICAgYXN5bmMuZWFjaExpbWl0ID0gZnVuY3Rpb24gKGFyciwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gX2VhY2hPZkxpbWl0KGxpbWl0KShhcnIsIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmZvckVhY2hPZiA9XG4gICAgYXN5bmMuZWFjaE9mID0gZnVuY3Rpb24gKG9iamVjdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIG9iamVjdCA9IG9iamVjdCB8fCBbXTtcbiAgICAgICAgdmFyIHNpemUgPSBfaXNBcnJheUxpa2Uob2JqZWN0KSA/IG9iamVjdC5sZW5ndGggOiBfa2V5cyhvYmplY3QpLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIGlmICghc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIF9lYWNoKG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG9iamVjdFtrZXldLCBrZXksIG9ubHlfb25jZShkb25lKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmZvckVhY2hPZlNlcmllcyA9XG4gICAgYXN5bmMuZWFjaE9mU2VyaWVzID0gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIG9iaiA9IG9iaiB8fCBbXTtcbiAgICAgICAgdmFyIG5leHRLZXkgPSBfa2V5SXRlcmF0b3Iob2JqKTtcbiAgICAgICAgdmFyIGtleSA9IG5leHRLZXkoKTtcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZSgpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVyYXRvcihvYmpba2V5XSwga2V5LCBvbmx5X29uY2UoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG5leHRLZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhpdGVyYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZXJhdGUoKTtcbiAgICB9O1xuXG5cblxuICAgIGFzeW5jLmZvckVhY2hPZkxpbWl0ID1cbiAgICBhc3luYy5lYWNoT2ZMaW1pdCA9IGZ1bmN0aW9uIChvYmosIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgX2VhY2hPZkxpbWl0KGxpbWl0KShvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9lYWNoT2ZMaW1pdChsaW1pdCkge1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgICAgICBvYmogPSBvYmogfHwgW107XG4gICAgICAgICAgICB2YXIgbmV4dEtleSA9IF9rZXlJdGVyYXRvcihvYmopO1xuICAgICAgICAgICAgaWYgKGxpbWl0IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHJ1bm5pbmcgPSAwO1xuICAgICAgICAgICAgdmFyIGVycm9yZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgKGZ1bmN0aW9uIHJlcGxlbmlzaCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUgJiYgcnVubmluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocnVubmluZyA8IGxpbWl0ICYmICFlcnJvcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBuZXh0S2V5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3Iob2JqW2tleV0sIGtleSwgb25seV9vbmNlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZG9QYXJhbGxlbChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oYXN5bmMuZWFjaE9mLCBvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvUGFyYWxsZWxMaW1pdChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGZuKF9lYWNoT2ZMaW1pdChsaW1pdCksIG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9TZXJpZXMoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGFzeW5jLmVhY2hPZlNlcmllcywgb2JqLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3luY01hcChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih2YWx1ZSwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLm1hcCA9IGRvUGFyYWxsZWwoX2FzeW5jTWFwKTtcbiAgICBhc3luYy5tYXBTZXJpZXMgPSBkb1NlcmllcyhfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcExpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9hc3luY01hcCk7XG5cbiAgICAvLyByZWR1Y2Ugb25seSBoYXMgYSBzZXJpZXMgdmVyc2lvbiwgYXMgZG9pbmcgcmVkdWNlIGluIHBhcmFsbGVsIHdvbid0XG4gICAgLy8gd29yayBpbiBtYW55IHNpdHVhdGlvbnMuXG4gICAgYXN5bmMuaW5qZWN0ID1cbiAgICBhc3luYy5mb2xkbCA9XG4gICAgYXN5bmMucmVkdWNlID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLmVhY2hPZlNlcmllcyhhcnIsIGZ1bmN0aW9uICh4LCBpLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IobWVtbywgeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIG1lbW8gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyIHx8IG51bGwsIG1lbW8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZm9sZHIgPVxuICAgIGFzeW5jLnJlZHVjZVJpZ2h0ID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXZlcnNlZCA9IF9tYXAoYXJyLCBpZGVudGl0eSkucmV2ZXJzZSgpO1xuICAgICAgICBhc3luYy5yZWR1Y2UocmV2ZXJzZWQsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9maWx0ZXIoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7aW5kZXg6IGluZGV4LCB2YWx1ZTogeH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKF9tYXAocmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgfSksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLnNlbGVjdCA9XG4gICAgYXN5bmMuZmlsdGVyID0gZG9QYXJhbGxlbChfZmlsdGVyKTtcblxuICAgIGFzeW5jLnNlbGVjdExpbWl0ID1cbiAgICBhc3luYy5maWx0ZXJMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfZmlsdGVyKTtcblxuICAgIGFzeW5jLnNlbGVjdFNlcmllcyA9XG4gICAgYXN5bmMuZmlsdGVyU2VyaWVzID0gZG9TZXJpZXMoX2ZpbHRlcik7XG5cbiAgICBmdW5jdGlvbiBfcmVqZWN0KGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgX2ZpbHRlcihlYWNoZm4sIGFyciwgZnVuY3Rpb24odmFsdWUsIGNiKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih2YWx1ZSwgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGNiKCF2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGFzeW5jLnJlamVjdCA9IGRvUGFyYWxsZWwoX3JlamVjdCk7XG4gICAgYXN5bmMucmVqZWN0TGltaXQgPSBkb1BhcmFsbGVsTGltaXQoX3JlamVjdCk7XG4gICAgYXN5bmMucmVqZWN0U2VyaWVzID0gZG9TZXJpZXMoX3JlamVjdCk7XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlVGVzdGVyKGVhY2hmbiwgY2hlY2ssIGdldFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNiKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgICAgICAgICAgIGlmIChjYikgY2IoZ2V0UmVzdWx0KGZhbHNlLCB2b2lkIDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGVlKHgsIF8sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYikgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiICYmIGNoZWNrKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihnZXRSZXN1bHQodHJ1ZSwgeCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IgPSBpdGVyYXRvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICBlYWNoZm4oYXJyLCBsaW1pdCwgaXRlcmF0ZWUsIGRvbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYiA9IGl0ZXJhdG9yO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgZWFjaGZuKGFyciwgaXRlcmF0ZWUsIGRvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jLmFueSA9XG4gICAgYXN5bmMuc29tZSA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mLCB0b0Jvb2wsIGlkZW50aXR5KTtcblxuICAgIGFzeW5jLnNvbWVMaW1pdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mTGltaXQsIHRvQm9vbCwgaWRlbnRpdHkpO1xuXG4gICAgYXN5bmMuYWxsID1cbiAgICBhc3luYy5ldmVyeSA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mLCBub3RJZCwgbm90SWQpO1xuXG4gICAgYXN5bmMuZXZlcnlMaW1pdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mTGltaXQsIG5vdElkLCBub3RJZCk7XG5cbiAgICBmdW5jdGlvbiBfZmluZEdldFJlc3VsdCh2LCB4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBhc3luYy5kZXRlY3QgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZiwgaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KTtcbiAgICBhc3luYy5kZXRlY3RTZXJpZXMgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZlNlcmllcywgaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KTtcbiAgICBhc3luYy5kZXRlY3RMaW1pdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mTGltaXQsIGlkZW50aXR5LCBfZmluZEdldFJlc3VsdCk7XG5cbiAgICBhc3luYy5zb3J0QnkgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMubWFwKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAoZXJyLCBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHt2YWx1ZTogeCwgY3JpdGVyaWE6IGNyaXRlcmlhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIF9tYXAocmVzdWx0cy5zb3J0KGNvbXBhcmF0b3IpLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY29tcGFyYXRvcihsZWZ0LCByaWdodCkge1xuICAgICAgICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhLCBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuYXV0byA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgdmFyIGtleXMgPSBfa2V5cyh0YXNrcyk7XG4gICAgICAgIHZhciByZW1haW5pbmdUYXNrcyA9IGtleXMubGVuZ3RoO1xuICAgICAgICBpZiAoIXJlbWFpbmluZ1Rhc2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZm4pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihmbikge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9pbmRleE9mKGxpc3RlbmVycywgZm4pO1xuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdGFza0NvbXBsZXRlKCkge1xuICAgICAgICAgICAgcmVtYWluaW5nVGFza3MtLTtcbiAgICAgICAgICAgIF9hcnJheUVhY2gobGlzdGVuZXJzLnNsaWNlKDApLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXJlbWFpbmluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9hcnJheUVhY2goa2V5cywgZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gX2lzQXJyYXkodGFza3Nba10pID8gdGFza3Nba106IFt0YXNrc1trXV07XG4gICAgICAgICAgICB2YXIgdGFza0NhbGxiYWNrID0gX3Jlc3RQYXJhbShmdW5jdGlvbihlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2FmZVJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgX2ZvckVhY2hPZihyZXN1bHRzLCBmdW5jdGlvbih2YWwsIHJrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW3JrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2FmZVJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHNhZmVSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUodGFza0NvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXF1aXJlcyA9IHRhc2suc2xpY2UoMCwgdGFzay5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZGVhZC1sb2Nrc1xuICAgICAgICAgICAgdmFyIGxlbiA9IHJlcXVpcmVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkZXA7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShkZXAgPSB0YXNrc1tyZXF1aXJlc1tsZW5dXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXMgaW5leGlzdGFudCBkZXBlbmRlbmN5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheShkZXApICYmIF9pbmRleE9mKGRlcCwgaykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBjeWNsaWMgZGVwZW5kZW5jaWVzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWR1Y2UocmVxdWlyZXMsIGZ1bmN0aW9uIChhLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYSAmJiByZXN1bHRzLmhhc093blByb3BlcnR5KHgpKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKSAmJiAhcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkoKSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgICBhc3luYy5yZXRyeSA9IGZ1bmN0aW9uKHRpbWVzLCB0YXNrLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgREVGQVVMVF9USU1FUyA9IDU7XG4gICAgICAgIHZhciBERUZBVUxUX0lOVEVSVkFMID0gMDtcblxuICAgICAgICB2YXIgYXR0ZW1wdHMgPSBbXTtcblxuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIHRpbWVzOiBERUZBVUxUX1RJTUVTLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IERFRkFVTFRfSU5URVJWQUxcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBwYXJzZVRpbWVzKGFjYywgdCl7XG4gICAgICAgICAgICBpZih0eXBlb2YgdCA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgICAgIGFjYy50aW1lcyA9IHBhcnNlSW50KHQsIDEwKSB8fCBERUZBVUxUX1RJTUVTO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiB0ID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgICAgYWNjLnRpbWVzID0gcGFyc2VJbnQodC50aW1lcywgMTApIHx8IERFRkFVTFRfVElNRVM7XG4gICAgICAgICAgICAgICAgYWNjLmludGVydmFsID0gcGFyc2VJbnQodC5pbnRlcnZhbCwgMTApIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYXJndW1lbnQgdHlwZSBmb3IgXFwndGltZXNcXCc6ICcgKyB0eXBlb2YgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA8IDEgfHwgbGVuZ3RoID4gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cyAtIG11c3QgYmUgZWl0aGVyICh0YXNrKSwgKHRhc2ssIGNhbGxiYWNrKSwgKHRpbWVzLCB0YXNrKSBvciAodGltZXMsIHRhc2ssIGNhbGxiYWNrKScpO1xuICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA8PSAyICYmIHR5cGVvZiB0aW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB0YXNrO1xuICAgICAgICAgICAgdGFzayA9IHRpbWVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGltZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnNlVGltZXMob3B0cywgdGltZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgb3B0cy50YXNrID0gdGFzaztcblxuICAgICAgICBmdW5jdGlvbiB3cmFwcGVkVGFzayh3cmFwcGVkQ2FsbGJhY2ssIHdyYXBwZWRSZXN1bHRzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXRyeUF0dGVtcHQodGFzaywgZmluYWxBdHRlbXB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNlcmllc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2soZnVuY3Rpb24oZXJyLCByZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzQ2FsbGJhY2soIWVyciB8fCBmaW5hbEF0dGVtcHQsIHtlcnI6IGVyciwgcmVzdWx0OiByZXN1bHR9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgd3JhcHBlZFJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHJ5SW50ZXJ2YWwoaW50ZXJ2YWwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzZXJpZXNDYWxsYmFjayl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc0NhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKG9wdHMudGltZXMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBmaW5hbEF0dGVtcHQgPSAhKG9wdHMudGltZXMtPTEpO1xuICAgICAgICAgICAgICAgIGF0dGVtcHRzLnB1c2gocmV0cnlBdHRlbXB0KG9wdHMudGFzaywgZmluYWxBdHRlbXB0KSk7XG4gICAgICAgICAgICAgICAgaWYoIWZpbmFsQXR0ZW1wdCAmJiBvcHRzLmludGVydmFsID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzLnB1c2gocmV0cnlJbnRlcnZhbChvcHRzLmludGVydmFsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhc3luYy5zZXJpZXMoYXR0ZW1wdHMsIGZ1bmN0aW9uKGRvbmUsIGRhdGEpe1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgKHdyYXBwZWRDYWxsYmFjayB8fCBvcHRzLmNhbGxiYWNrKShkYXRhLmVyciwgZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhIGNhbGxiYWNrIGlzIHBhc3NlZCwgcnVuIHRoaXMgYXMgYSBjb250cm9sbCBmbG93XG4gICAgICAgIHJldHVybiBvcHRzLmNhbGxiYWNrID8gd3JhcHBlZFRhc2soKSA6IHdyYXBwZWRUYXNrO1xuICAgIH07XG5cbiAgICBhc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIGlmICghX2lzQXJyYXkodGFza3MpKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3cmFwSXRlcmF0b3IoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtlcnJdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbnN1cmVBc3luYyhpdGVyYXRvcikuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3BhcmFsbGVsKGVhY2hmbiwgdGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBfaXNBcnJheUxpa2UodGFza3MpID8gW10gOiB7fTtcblxuICAgICAgICBlYWNoZm4odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXNrKF9yZXN0UGFyYW0oZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHRzW2tleV0gPSBhcmdzO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLnBhcmFsbGVsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoYXN5bmMuZWFjaE9mLCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5wYXJhbGxlbExpbWl0ID0gZnVuY3Rpb24odGFza3MsIGxpbWl0LCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoX2VhY2hPZkxpbWl0KGxpbWl0KSwgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuc2VyaWVzID0gZnVuY3Rpb24odGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbChhc3luYy5lYWNoT2ZTZXJpZXMsIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLml0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDYWxsYmFjayhpbmRleCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChpbmRleCA8IHRhc2tzLmxlbmd0aCAtIDEpID8gbWFrZUNhbGxiYWNrKGluZGV4ICsgMSk6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG4gICAgfTtcblxuICAgIGFzeW5jLmFwcGx5ID0gX3Jlc3RQYXJhbShmdW5jdGlvbiAoZm4sIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGNhbGxBcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoXG4gICAgICAgICAgICAgICAgbnVsbCwgYXJncy5jb25jYXQoY2FsbEFyZ3MpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIF9jb25jYXQoZWFjaGZuLCBhcnIsIGZuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBpbmRleCwgY2IpIHtcbiAgICAgICAgICAgIGZuKHgsIGZ1bmN0aW9uIChlcnIsIHkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHkgfHwgW10pO1xuICAgICAgICAgICAgICAgIGNiKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMuY29uY2F0ID0gZG9QYXJhbGxlbChfY29uY2F0KTtcbiAgICBhc3luYy5jb25jYXRTZXJpZXMgPSBkb1NlcmllcyhfY29uY2F0KTtcblxuICAgIGFzeW5jLndoaWxzdCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgICAgICBpZiAodGVzdCgpKSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24oZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdC5hcHBseSh0aGlzLCBhcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZG9XaGlsc3QgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxscyA9IDA7XG4gICAgICAgIHJldHVybiBhc3luYy53aGlsc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKytjYWxscyA8PSAxIHx8IHRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMudW50aWwgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy53aGlsc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZG9VbnRpbCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmR1cmluZyA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuXG4gICAgICAgIHZhciBuZXh0ID0gX3Jlc3RQYXJhbShmdW5jdGlvbihlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2hlY2spO1xuICAgICAgICAgICAgICAgIHRlc3QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uKGVyciwgdHJ1dGgpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0cnV0aCkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKG5leHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0ZXN0KGNoZWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZG9EdXJpbmcgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxscyA9IDA7XG4gICAgICAgIGFzeW5jLmR1cmluZyhmdW5jdGlvbihuZXh0KSB7XG4gICAgICAgICAgICBpZiAoY2FsbHMrKyA8IDEpIHtcbiAgICAgICAgICAgICAgICBuZXh0KG51bGwsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9xdWV1ZSh3b3JrZXIsIGNvbmN1cnJlbmN5LCBwYXlsb2FkKSB7XG4gICAgICAgIGlmIChjb25jdXJyZW5jeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25jdXJyZW5jeSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjb25jdXJyZW5jeSA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25jdXJyZW5jeSBtdXN0IG5vdCBiZSB6ZXJvJyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2luc2VydChxLCBkYXRhLCBwb3MsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhc2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT09IDAgJiYgcS5pZGxlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGRyYWluIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyB0YXNrc1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9hcnJheUVhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2sgfHwgbm9vcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHEudGFza3MudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoID09PSBxLmNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUocS5wcm9jZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfbmV4dChxLCB0YXNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgd29ya2VycyAtPSAxO1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIF9hcnJheUVhY2godGFza3MsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3b3JrZXJzID0gMDtcbiAgICAgICAgdmFyIHEgPSB7XG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgc2F0dXJhdGVkOiBub29wLFxuICAgICAgICAgICAgZW1wdHk6IG5vb3AsXG4gICAgICAgICAgICBkcmFpbjogbm9vcCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBraWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcS5kcmFpbiA9IG5vb3A7XG4gICAgICAgICAgICAgICAgcS50YXNrcyA9IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuc2hpZnQ6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXEucGF1c2VkICYmIHdvcmtlcnMgPCBxLmNvbmN1cnJlbmN5ICYmIHEudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHdvcmtlcnMgPCBxLmNvbmN1cnJlbmN5ICYmIHEudGFza3MubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHEucGF5bG9hZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS50YXNrcy5zcGxpY2UoMCwgcS5wYXlsb2FkKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS50YXNrcy5zcGxpY2UoMCwgcS50YXNrcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9tYXAodGFza3MsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBvbmx5X29uY2UoX25leHQocSwgdGFza3MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcihkYXRhLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHEudGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VycztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZGxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcS50YXNrcy5sZW5ndGggKyB3b3JrZXJzID09PSAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChxLnBhdXNlZCA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgcS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdW1lQ291bnQgPSBNYXRoLm1pbihxLmNvbmN1cnJlbmN5LCBxLnRhc2tzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byBjYWxsIHEucHJvY2VzcyBvbmNlIHBlciBjb25jdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gd29ya2VyIHRvIHByZXNlcnZlIGZ1bGwgY29uY3VycmVuY3kgYWZ0ZXIgcGF1c2VcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8PSByZXN1bWVDb3VudDsgdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShxLnByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfVxuXG4gICAgYXN5bmMucXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuICAgICAgICB2YXIgcSA9IF9xdWV1ZShmdW5jdGlvbiAoaXRlbXMsIGNiKSB7XG4gICAgICAgICAgICB3b3JrZXIoaXRlbXNbMF0sIGNiKTtcbiAgICAgICAgfSwgY29uY3VycmVuY3ksIDEpO1xuXG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5wcmlvcml0eVF1ZXVlID0gZnVuY3Rpb24gKHdvcmtlciwgY29uY3VycmVuY3kpIHtcblxuICAgICAgICBmdW5jdGlvbiBfY29tcGFyZVRhc2tzKGEsIGIpe1xuICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2JpbmFyeVNlYXJjaChzZXF1ZW5jZSwgaXRlbSwgY29tcGFyZSkge1xuICAgICAgICAgICAgdmFyIGJlZyA9IC0xLFxuICAgICAgICAgICAgICAgIGVuZCA9IHNlcXVlbmNlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoYmVnIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pZCA9IGJlZyArICgoZW5kIC0gYmVnICsgMSkgPj4+IDEpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIHNlcXVlbmNlW21pZF0pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnID0gbWlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9pbnNlcnQocSwgZGF0YSwgcHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhc2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGRyYWluIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyB0YXNrc1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9hcnJheUVhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG5vb3BcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcS50YXNrcy5zcGxpY2UoX2JpbmFyeVNlYXJjaChxLnRhc2tzLCBpdGVtLCBfY29tcGFyZVRhc2tzKSArIDEsIDAsIGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoID09PSBxLmNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShxLnByb2Nlc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydCB3aXRoIGEgbm9ybWFsIHF1ZXVlXG4gICAgICAgIHZhciBxID0gYXN5bmMucXVldWUod29ya2VyLCBjb25jdXJyZW5jeSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgcHVzaCB0byBhY2NlcHQgc2Vjb25kIHBhcmFtZXRlciByZXByZXNlbnRpbmcgcHJpb3JpdHlcbiAgICAgICAgcS5wdXNoID0gZnVuY3Rpb24gKGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSB1bnNoaWZ0IGZ1bmN0aW9uXG4gICAgICAgIGRlbGV0ZSBxLnVuc2hpZnQ7XG5cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfTtcblxuICAgIGFzeW5jLmNhcmdvID0gZnVuY3Rpb24gKHdvcmtlciwgcGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gX3F1ZXVlKHdvcmtlciwgMSwgcGF5bG9hZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jb25zb2xlX2ZuKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGZuLCBhcmdzKSB7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25zb2xlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyYXlFYWNoKGFyZ3MsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSldKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYy5sb2cgPSBfY29uc29sZV9mbignbG9nJyk7XG4gICAgYXN5bmMuZGlyID0gX2NvbnNvbGVfZm4oJ2RpcicpO1xuICAgIC8qYXN5bmMuaW5mbyA9IF9jb25zb2xlX2ZuKCdpbmZvJyk7XG4gICAgYXN5bmMud2FybiA9IF9jb25zb2xlX2ZuKCd3YXJuJyk7XG4gICAgYXN5bmMuZXJyb3IgPSBfY29uc29sZV9mbignZXJyb3InKTsqL1xuXG4gICAgYXN5bmMubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbiwgaGFzaGVyKSB7XG4gICAgICAgIHZhciBtZW1vID0ge307XG4gICAgICAgIHZhciBxdWV1ZXMgPSB7fTtcbiAgICAgICAgaGFzaGVyID0gaGFzaGVyIHx8IGlkZW50aXR5O1xuICAgICAgICB2YXIgbWVtb2l6ZWQgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uIG1lbW9pemVkKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGtleSBpbiBtZW1vKSB7XG4gICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBtZW1vW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5IGluIHF1ZXVlcykge1xuICAgICAgICAgICAgICAgIHF1ZXVlc1trZXldLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0gPSBbY2FsbGJhY2tdO1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KFtfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9ba2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxID0gcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcVtpXS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVtb2l6ZWQubWVtbyA9IG1lbW87XG4gICAgICAgIG1lbW9pemVkLnVubWVtb2l6ZWQgPSBmbjtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkO1xuICAgIH07XG5cbiAgICBhc3luYy51bm1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoZm4udW5tZW1vaXplZCB8fCBmbikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3RpbWVzKG1hcHBlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvdW50LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIG1hcHBlcihfcmFuZ2UoY291bnQpLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jLnRpbWVzID0gX3RpbWVzKGFzeW5jLm1hcCk7XG4gICAgYXN5bmMudGltZXNTZXJpZXMgPSBfdGltZXMoYXN5bmMubWFwU2VyaWVzKTtcbiAgICBhc3luYy50aW1lc0xpbWl0ID0gZnVuY3Rpb24gKGNvdW50LCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5tYXBMaW1pdChfcmFuZ2UoY291bnQpLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuc2VxID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICB2YXIgZm5zID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IG5vb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jLnJlZHVjZShmbnMsIGFyZ3MsIGZ1bmN0aW9uIChuZXdhcmdzLCBmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBuZXdhcmdzLmNvbmNhdChbX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBuZXh0YXJncykge1xuICAgICAgICAgICAgICAgICAgICBjYihlcnIsIG5leHRhcmdzKTtcbiAgICAgICAgICAgICAgICB9KV0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhhdCwgW2Vycl0uY29uY2F0KHJlc3VsdHMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuY29tcG9zZSA9IGZ1bmN0aW9uICgvKiBmdW5jdGlvbnMuLi4gKi8pIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLnNlcS5hcHBseShudWxsLCBBcnJheS5wcm90b3R5cGUucmV2ZXJzZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIF9hcHBseUVhY2goZWFjaGZuKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uKGZucywgYXJncykge1xuICAgICAgICAgICAgdmFyIGdvID0gX3Jlc3RQYXJhbShmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhY2hmbihmbnMsIGZ1bmN0aW9uIChmbiwgXywgY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncy5jb25jYXQoW2NiXSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ28uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLmFwcGx5RWFjaCA9IF9hcHBseUVhY2goYXN5bmMuZWFjaE9mKTtcbiAgICBhc3luYy5hcHBseUVhY2hTZXJpZXMgPSBfYXBwbHlFYWNoKGFzeW5jLmVhY2hPZlNlcmllcyk7XG5cblxuICAgIGFzeW5jLmZvcmV2ZXIgPSBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkb25lID0gb25seV9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICB2YXIgdGFzayA9IGVuc3VyZUFzeW5jKGZuKTtcbiAgICAgICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzayhuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVuc3VyZUFzeW5jKGZuKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgYXJncy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLmVuc3VyZUFzeW5jID0gZW5zdXJlQXN5bmM7XG5cbiAgICBhc3luYy5jb25zdGFudCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIHZhciBhcmdzID0gW251bGxdLmNvbmNhdCh2YWx1ZXMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBhc3luYy53cmFwU3luYyA9XG4gICAgYXN5bmMuYXN5bmNpZnkgPSBmdW5jdGlvbiBhc3luY2lmeShmdW5jKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiByZXN1bHQgaXMgUHJvbWlzZSBvYmplY3RcbiAgICAgICAgICAgIGlmIChfaXNPYmplY3QocmVzdWx0KSAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIubWVzc2FnZSA/IGVyciA6IG5ldyBFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIE5vZGUuanNcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBhc3luYztcbiAgICB9XG4gICAgLy8gQU1EIC8gUmVxdWlyZUpTXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gaW5jbHVkZWQgZGlyZWN0bHkgdmlhIDxzY3JpcHQ+IHRhZ1xuICAgIGVsc2Uge1xuICAgICAgICByb290LmFzeW5jID0gYXN5bmM7XG4gICAgfVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXN5bmMvbGliL2FzeW5jLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjEuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5cclxuaW1wb3J0ICogYXMgYWdlbnQgZnJvbSBcInN1cGVyYWdlbnRcIjtcclxuaW1wb3J0ICogYXMgYXN5bmMgZnJvbSBcImFzeW5jXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbnZhciBTSEFERVJfVFlQRSA9IHt9O1xyXG5TSEFERVJfVFlQRVtcInZlcnRleFwiXSA9IFdlYkdMUmVuZGVyaW5nQ29udGV4dC5WRVJURVhfU0hBREVSO1xyXG5TSEFERVJfVFlQRVtcImZyYWdtZW50XCJdID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0LkZSQUdNRU5UX1NIQURFUjtcclxuXHJcbmNsYXNzIFNhbXBsZUZpZWxkIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVye1xyXG4gICAgY29uc3RydWN0b3IoaWQsc3JjLGRpc3Qpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpc1tcIl9zcmNQYXRoXCJdID0gc3JjO1xyXG4gICAgICAgIHRoaXNbXCJfZGlzdFBhdGhcIl0gPSBkaXN0O1xyXG4gICAgICAgIHRoaXMuc2hhZGVyc0RpY3QgPSB7fTtcclxuICAgICAgICB0aGlzLkNPTlNUQU5UUyA9IE9iamVjdC5hc3NpZ24oe30sdXRpbHMuY29uc3RhbnRzKTtcclxuICAgICAgICB0aGlzLkNPTlNUQU5UUy5WID0gdGhpcy5DT05TVEFOVFMuVkVSVEVYX1NIQURFUiA9IFwidmVydGV4XCI7XHJcbiAgICAgICAgdGhpcy5DT05TVEFOVFMuRiA9IHRoaXMuQ09OU1RBTlRTLkZSQUdNRU5UX1NIQURFUiA9IFwiZnJhZ21lbnRcIjtcclxuICAgICAgICB0aGlzLl9sYXVuY2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNyY1BhdGgodXJsKXtcclxuICAgICAgICByZXR1cm4gdXRpbHMudXJsLmpvaW4odGhpcy5fc3JjUGF0aCx1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RQYXRoKHVybCl7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnVybC5qb2luKHRoaXMuX2Rpc3RQYXRoLHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9uZVNoYWRlcihnbCx1cmwsdHlwZSxuYW1lLGNiKXtcclxuICAgICAgICByZXR1cm4gYWdlbnQuZ2V0KHVybCkuZW5kKChlcnIscmVzKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtcclxuICAgICAgICAgICAgICAgIGlmKCEodHlwZSBpbiBTSEFERVJfVFlQRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKFNIQURFUl9UWVBFW3R5cGVdKTtcclxuICAgICAgICAgICAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHJlcy50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkZXJzRGljdFtuYW1lXSA9IHNoYWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2I9PT1cImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgY2IoZXJyLHJlcy50ZXh0fHxcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNoYWRlcnMoZ2wsY2IsbG9hZG9iail7XHJcbiAgICAgICAgaWYodHlwZW9mIGNiIT09XCJmdW5jdGlvblwiIHx8ICFBcnJheS5pc0FycmF5KGxvYWRvYmopIHx8IGxvYWRvYmoubGVuZ3RoPD0wKXJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHRhc2tzID0gbG9hZG9iai5tYXAoKGxvYWQpPT57XHJcbiAgICAgICAgICAgIGlmKGxvYWQudXJsICYmIGxvYWQudHlwZSAmJiBsb2FkLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChuZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE9uZVNoYWRlcihnbCxsb2FkLnVybCxsb2FkLnR5cGUsbG9hZC5uYW1lLG5leHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChuZXh0KT0+e25leHQobnVsbCwgXCJcIil9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzeW5jLnNlcmllcyh0YXNrcywoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmxhdW5jaFN0YXRlKXtcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXVuY2goKXtcclxuICAgICAgICByZXR1cm4gKGNhbnZhcyxkYXRhKT0+e1xyXG4gICAgICAgICAgICB0aGlzLl9sYXVuY2hTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub25MYXVuY2guYXBwbHkodGhpcyxbY2FudmFzLGRhdGF8fHt9XSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImxhdW5jaFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlc3RydWN0KCl7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuX2xhdW5jaFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXN0cnVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cnVjdFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGF1bmNoU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF1bmNoU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25MYXVuY2goY2FudmFzKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cnVjdCgpe1xyXG4gICAgICAgIHRoaXMubm90SW1wbGVtZW50T25EZXN0cnVjdCA9IHRydWU7XHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKFwib25EZXN0cnVjdCBub3QgaW1wbGVtZW50IHlldCFcIix0aGlzLl9zcmNQYXRoLHRoaXMuX2Rpc3RQYXRoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlRmllbGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yMy5cclxuICovXHJcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICdhbHNjJztcclxuXHJcbnZhciBsb29wID0gXCJsb29wXCI7XHJcblxyXG5jbGFzcyBBbmltYXRpb25NYW5hZ2VyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVye1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2U7XHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYoIShBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZSBpbnN0YW5jZW9mIEFuaW1hdGlvbk1hbmFnZXIpKXtcclxuICAgICAgICAgICAgQW5pbWF0aW9uTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgQW5pbWF0aW9uTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQW5pbWF0aW9uTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgLy90aGlzLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9zdG9wU3RhdGUpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3N0b3BTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xvb3AoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoZm9yY2U9dHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICBpZihmb3JjZSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXIobG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9vcChmbil7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcihsb29wLGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9vcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX3N0b3BTdGF0ZSlyZXR1cm47XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KGxvb3ApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25NYW5hZ2VyLmluc3RhbmNlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL2NvcmUvQW5pbWF0aW9uTWFuYWdlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2wsSW5wdXQsTGlzdEdyb3VwLExpc3RHcm91cEl0ZW0sUGFnaW5hdGlvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi8uLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5cclxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic2lkZWJhclwiIG1kPXszfT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGtleSB3b3Jkcy4uLidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU2FtcGxlSXRlbSgpfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKmBcclxuICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgcHJldlxyXG4gICAgICAgICAgICAgICAgbmV4dFxyXG4gICAgICAgICAgICAgICAgaXRlbXM9ezN9XHJcbiAgICAgICAgICAgICAgICBtYXhCdXR0b25zPXszfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17MX1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKT0+e319IC8+XHJcbiAgICAgICAgYCovXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2FtcGxlSXRlbSgpe1xyXG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5wcm9wcy5zYW1wbGVzTGlzdC5maWx0ZXIoKHNhbXBsZSk9PntyZXR1cm4gc2FtcGxlLmlkPjF9KTtcclxuXHJcbiAgICAgICAgdmFyIGhlbGxvd29ybGQgPSB0aGlzLnByb3BzLnNhbXBsZXNMaXN0WzBdO1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSBsaXN0Lm1hcCgoc2FtcGxlKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXJMaXN0SXRlbSBrZXk9e3NhbXBsZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlSWQgPSB7c2FtcGxlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9eyEhc2FtcGxlLmFjdGl2ZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2FtcGxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvU2lkZUJhckxpc3RJdGVtPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGhlbGxvd29ybGQpIHtcclxuICAgICAgICAgICAgaXRlbXMudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIDxTaWRlQmFyTGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2hlbGxvd29ybGQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlSWQ9e2hlbGxvd29ybGQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXshIWhlbGxvd29ybGQuYWN0aXZlU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2hlbGxvd29ybGQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlQmFyTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNpZGVCYXJMaXN0SXRlbSBleHRlbmRzIExpc3RHcm91cEl0ZW17XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrU2FtcGxlSXRlbShlKXtcclxuICAgICAgICB2YXIgc2FtcGxlID0gU2FtcGxlTWFuYWdlci5zYW1wbGVzSWREaWN0W3RoaXMucHJvcHMuc2FtcGxlSWRdO1xyXG4gICAgICAgIGlmKCEhc2FtcGxlLmFjdGl2ZVN0YXRlKXJldHVybjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6dHJ1ZX0pO1xyXG4gICAgICAgIFNhbXBsZU1hbmFnZXIudG9nZ2xlVG9TYW1wbGUoc2FtcGxlLmlkLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXshIXRoaXMucHJvcHMuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja1NhbXBsZUl0ZW0uYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHsoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmlzTG9hZGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJzaWduIGxvYWRpbmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvaW5jL1NpZGVCYXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9