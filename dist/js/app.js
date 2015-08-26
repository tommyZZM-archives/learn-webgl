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
	
	var _coreSampleManagerJs = __webpack_require__(31);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var _coreAnimationManagerJs = __webpack_require__(44);
	
	var _coreAnimationManagerJs2 = _interopRequireDefault(_coreAnimationManagerJs);
	
	var _viewContentSampleFieldJs = __webpack_require__(41);
	
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
	
	var _layoutHeaderJs = __webpack_require__(4);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(6);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(43);
	
	var _layoutFooterJs2 = _interopRequireDefault(_layoutFooterJs);
	
	var _coreSampleManagerJs = __webpack_require__(31);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        var _this = this;
	
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	
	        this.state = this.initializeState;
	        _coreSampleManagerJs2['default'].addListener(_coreSampleManagerJs2['default'].CONFIG_LOADED, this.onSampleConfigReady.bind(this));
	        _coreSampleManagerJs2['default'].addListener(_coreSampleManagerJs2['default'].TOGGLE_TO_SAMPLE, this.onSampleToggle.bind(this));
	
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
	        key: 'onSampleToggle',
	        value: function onSampleToggle(e) {
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
	                    minHeight: window.innerHeight - 16 //document margin
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
	                                "笔记"
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
	var config = {
	    url: "http://www.chalet581.xyz"
	};
	exports.config = config;

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
	
	var _incSideBarJs = __webpack_require__(42);
	
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
/* 7 */
/***/ function(module, exports) {

	module.exports = window.ReactBootstrap;

/***/ },
/* 8 */
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
	
	var _reactBootstrap = __webpack_require__(7);
	
	var _contentSampleRendererJs = __webpack_require__(9);
	
	var _contentSampleRendererJs2 = _interopRequireDefault(_contentSampleRendererJs);
	
	var _coreSampleManagerJs = __webpack_require__(31);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).call(this);
	    }
	
	    _createClass(Content, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            return _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { className: 'content ', md: 9 },
	                (function () {
	                    if (_this.props.sampleContent && _this.props.sampleContent.id) {
	                        return _react2['default'].createElement(Markdown, { id: _this.props.sampleContent.id, source: _this.props.sampleContent.markdown });
	                    }
	                })()
	            );
	        }
	    }]);
	
	    return Content;
	})(_react2['default'].Component);
	
	var Markdown = (function (_React$Component2) {
	    _inherits(Markdown, _React$Component2);
	
	    function Markdown() {
	        var _this2 = this;
	
	        _classCallCheck(this, Markdown);
	
	        _get(Object.getPrototypeOf(Markdown.prototype), 'constructor', this).call(this);
	        this.markRenderer = new _contentSampleRendererJs2['default']({ sourcepos: true });
	        this.isRenderSuccess = false;
	
	        this.canvasQuery = [];
	        this.canvasDict = {};
	
	        this.markRenderer.renderHtml("canvas", function (tag, attrs) {
	            return _react2['default'].createElement(Canvas, { parent: _this2, attrs: attrs });
	        });
	    }
	
	    _createClass(Markdown, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dict = {};
	            for (var i in this.canvasDict) {
	                dict[i] = _react2['default'].findDOMNode(this.canvasDict[i]);
	            }
	
	            var data = {
	                canvas: {
	                    query: this.canvasQuery.map(function (canvas) {
	                        return _react2['default'].findDOMNode(canvas);
	                    }),
	                    dirct: dict
	                }
	            };
	            if (this.isRenderSuccess) {
	                _coreSampleManagerJs2['default'].readySample(this.props.id, data);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (typeof this.props.source === "string") {
	                var elements = this.markRenderer.render(this.props.source || '');
	
	                if (elements && !elements.some(function (ele) {
	                    return !_react2['default'].isValidElement(ele);
	                })) {
	                    this.isRenderSuccess = true;
	                    return _react2['default'].createElement.apply(_react2['default'], ["div", { className: "markdown" }].concat(elements));
	                }
	            }
	            return _react2['default'].createElement('div', { className: 'noop' });
	        }
	    }]);
	
	    return Markdown;
	})(_react2['default'].Component);
	
	var Canvas = (function (_React$Component3) {
	    _inherits(Canvas, _React$Component3);
	
	    function Canvas() {
	        _classCallCheck(this, Canvas);
	
	        _get(Object.getPrototypeOf(Canvas.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Canvas, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var parent = this.props.parent;
	            var canvas = _react2['default'].findDOMNode(this);
	            parent.canvasQuery.push(canvas);
	            if (this.props.attrs.name) parent.canvasDict[this.props.attrs.name] = canvas;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement("canvas", this.props.attrs);
	        }
	    }]);
	
	    return Canvas;
	})(_react2['default'].Component);
	
	exports['default'] = Content;
	module.exports = exports['default'];

/***/ },
/* 9 */
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
	
	var _CommonMarkRenderJs = __webpack_require__(10);
	
	//import MarkedRenderer from "./markdown/MarkedRenderer.js";

	var _CommonMarkRenderJs2 = _interopRequireDefault(_CommonMarkRenderJs);

	exports["default"] = _CommonMarkRenderJs2["default"];
	module.exports = exports["default"];

/***/ },
/* 10 */
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
	
	var _commonmark = __webpack_require__(11);
	
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
/* 11 */
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
	
	module.exports.Node = __webpack_require__(12);
	module.exports.Parser = __webpack_require__(13);
	module.exports.HtmlRenderer = __webpack_require__(29);
	module.exports.XmlRenderer = __webpack_require__(30);


/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Node = __webpack_require__(12);
	var unescapeString = __webpack_require__(14).unescapeString;
	var OPENTAG = __webpack_require__(14).OPENTAG;
	var CLOSETAG = __webpack_require__(14).CLOSETAG;
	
	var CODE_INDENT = 4;
	
	var C_NEWLINE = 10;
	var C_GREATERTHAN = 62;
	var C_LESSTHAN = 60;
	var C_SPACE = 32;
	var C_OPEN_BRACKET = 91;
	
	var InlineParser = __webpack_require__(25);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var encode = __webpack_require__(15);
	var decode = __webpack_require__(16);
	
	var C_BACKSLASH = 92;
	
	var decodeHTML = __webpack_require__(17).decodeHTML;
	
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var encode = __webpack_require__(18),
	    decode = __webpack_require__(21);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var inverseXML = getInverseObj(__webpack_require__(19)),
	    xmlReplacer = getInverseReplacer(inverseXML);
	
	exports.XML = getInverse(inverseXML, xmlReplacer);
	
	var inverseHTML = getInverseObj(__webpack_require__(20)),
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
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		"amp": "&",
		"apos": "'",
		"gt": ">",
		"lt": "<",
		"quot": "\""
	}

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var entityMap = __webpack_require__(20),
	    legacyMap = __webpack_require__(22),
	    xmlMap    = __webpack_require__(19),
	    decodeCodePoint = __webpack_require__(23);
	
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var decodeMap = __webpack_require__(24);
	
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Node = __webpack_require__(12);
	var common = __webpack_require__(14);
	var normalizeReference = __webpack_require__(27);
	
	var normalizeURI = common.normalizeURI;
	var unescapeString = common.unescapeString;
	var fromCodePoint = __webpack_require__(26);
	var decodeHTML = __webpack_require__(17).decodeHTML;
	__webpack_require__(28); // Polyfill for String.prototype.repeat
	
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var escapeXml = __webpack_require__(14).escapeXml;
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var escapeXml = __webpack_require__(14).escapeXml;
	
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
/* 31 */
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
	
	var _alsc = __webpack_require__(32);
	
	var _superagent = __webpack_require__(35);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _async = __webpack_require__(38);
	
	var async = _interopRequireWildcard(_async);
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var _viewContentSampleFieldJs = __webpack_require__(41);
	
	var _viewContentSampleFieldJs2 = _interopRequireDefault(_viewContentSampleFieldJs);
	
	var SampleManager = (function (_EventDispatcher) {
	    _inherits(SampleManager, _EventDispatcher);
	
	    _createClass(SampleManager, [{
	        key: "CONFIG_LOADED",
	
	        /**@return {string}*/
	        get: function get() {
	            return "CONFIG_LOADED";
	        }
	    }, {
	        key: "TOGGLE_TO_SAMPLE",
	
	        /**@return {string}*/
	        get: function get() {
	            return "TOGGLE_TO_SAMPLE";
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
	        this.currExample = null;
	        agent.get("dist/post_data.json").then(function (res) {
	            _this.samplesData = JSON.parse(res.text);
	
	            _this.samplesDict["HEAD"] = _this.samplesData.posts[0];
	            _this.samplesIdDict = {};
	            var id = 1;
	            _this.samplesData.posts.forEach(function (post) {
	                post.id = id;
	                id++;
	                _this.samplesDict[post.title + post.date] = post;
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
	        value: function toggleToSample(id) {
	            var _this2 = this;
	
	            if (this.currExample) {
	                this.currExample.destruct();
	            }
	
	            var sample = this.samplesDict[id];
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
	
	                        _this2.emit(_this2.TOGGLE_TO_SAMPLE, { sample: sample });
	                    });
	                } else {
	                    this.emit(this.TOGGLE_TO_SAMPLE, { sample: sample });
	                }
	            }
	        }
	    }, {
	        key: "readySample",
	        value: function readySample(id, data) {
	            var sample = this.samplesIdDict[id];
	            if (sample) {
	                if (!sample.runingScript) {
	                    sample.runingScript = new sample.script(_utilsUtilsJs.url.join("src-post/", sample.path), _utilsUtilsJs.url.join("dist/post", sample.path));
	                }
	                sample.runingScript.launch(data.canvas);
	                this.currExample = sample.runingScript;
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	
	exports.EventDispatcher = __webpack_require__(33);
	//exports.Ajax  = require("./dist/ajax/AjaxProxy.js")

/***/ },
/* 33 */
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
	
	var _utilsJs = __webpack_require__(34);
	
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(36);
	var reduce = __webpack_require__(37);
	
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(39).setImmediate, __webpack_require__(40)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(40).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39).setImmediate, __webpack_require__(39).clearImmediate))

/***/ },
/* 40 */
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
/* 41 */
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
	
	var _alsc = __webpack_require__(32);
	
	var _superagent = __webpack_require__(35);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _async = __webpack_require__(38);
	
	var async = _interopRequireWildcard(_async);
	
	var _utilsUtilsJs = __webpack_require__(5);
	
	var utils = _interopRequireWildcard(_utilsUtilsJs);
	
	var SHADER_TYPE = {};
	SHADER_TYPE["vertex"] = WebGLRenderingContext.VERTEX_SHADER;
	SHADER_TYPE["fragment"] = WebGLRenderingContext.FRAGMENT_SHADER;
	
	var SampleField = (function (_EventDispatcher) {
	    _inherits(SampleField, _EventDispatcher);
	
	    function SampleField(src, dist) {
	        _classCallCheck(this, SampleField);
	
	        _get(Object.getPrototypeOf(SampleField.prototype), "constructor", this).call(this);
	        this["_srcPath"] = src;
	        this["_distPath"] = dist;
	        this.shadersDict = {};
	        this.CONSTANTS = Object.assign({}, utils.constants);
	        this.CONSTANTS.V = this.CONSTANTS.VERTEX_SHADER = "vertex";
	        this.CONSTANTS.F = this.CONSTANTS.FRAGMENT_SHADER = "fragment";
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
	                cb();
	            });
	        }
	    }, {
	        key: "launch",
	        value: function launch(canvas) {
	            //TODO:需要传入canvas
	        }
	    }, {
	        key: "onDestruct",
	        value: function onDestruct() {
	            console.error("onDestruct not implement yet!", this._srcPath, this._distPath);
	        }
	    }, {
	        key: "destruct",
	        get: function get() {
	            var _this3 = this;
	
	            return function () {
	                _this3.onDestruct();
	                _this3.emit("destruct");
	            };
	        }
	    }]);
	
	    return SampleField;
	})(_alsc.EventDispatcher);
	
	exports["default"] = SampleField;
	module.exports = exports["default"];

/***/ },
/* 42 */
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
	                { className: "sidebar", md: 3 },
	                _react2["default"].createElement(_reactBootstrap.Input, {
	                    type: "text",
	                    placeholder: "Enter key words...",
	                    label: "Search",
	                    hasFeedback: true
	                }),
	                _react2["default"].createElement(
	                    "div",
	                    null,
	                    _react2["default"].createElement(
	                        "ul",
	                        null,
	                        this.renderSampleItem()
	                    )
	                )
	            );
	        }
	    }, {
	        key: "renderSampleItem",
	        value: function renderSampleItem() {
	            return this.props.samplesList.map(function (sample) {
	                return _react2["default"].createElement(
	                    "li",
	                    { key: sample.id },
	                    sample.title
	                );
	            });
	        }
	    }]);
	
	    return SideBar;
	})(_react2["default"].Component);
	
	exports["default"] = SideBar;
	module.exports = exports["default"];

/***/ },
/* 43 */
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
/* 44 */
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
	
	var _alsc = __webpack_require__(32);
	
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
	        this.run();
	    }
	
	    _createClass(AnimationManager, [{
	        key: "run",
	        value: function run() {
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODgwMmFkNjk2MzdlZDRjNmZhNDYiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy9hcHAuZXM2fiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvQXBwLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2xheW91dC9Cb2R5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdEJvb3RzdHJhcFwiIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9pbmMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvY29udGVudC9Db21tb25NYXJrUmVuZGVyLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvYmxvY2tzLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvY29tbW9uLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL3htbC5qc29uIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvbGVnYWN5Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9kZWNvZGUuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2lubGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ub3JtYWxpemUtcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L3N0cmluZy5wcm90b3R5cGUucmVwZWF0L3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi94bWwuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy9jb3JlL1NhbXBsZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL34vYWxzYy9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvZXZlbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9+L3JlZHVjZS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hc3luYy9saWIvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2NvbnRlbnQvU2FtcGxlRmllbGQuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2luYy9TaWRlQmFyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztB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QyxVQUFTO0FBQ1QsaUNBQWdDLGNBQWMsRUFBRTtBQUNoRDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsaUNBQWdDLGNBQWMsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaURBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFL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QTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBK0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUM5a0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXNCLGlCQUFpQjtBQUN2QztBQUNBLGlCQUFnQjtBQUNoQjtBQUNBLElBQUc7QUFDSCxpQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQSxvRUFBbUUsUUFBUTtBQUMzRTs7QUFFQTtBQUNBLDJCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUMzR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUM3QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQW1DOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3RkFBdUYsZ0JBQWdCLElBQUk7O0FBRTNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0RBQXFELEVBQUUsZ0NBQWdDLEtBQUssNkNBQTZDLEtBQUs7O0FBRTlJOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsV0FBVSxPQUFPOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSyxPQUFPOztBQUVaLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQSwwQkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0EsMEJBQXlCLG1DQUFtQyw4Q0FBOEM7QUFDMUc7QUFDQTtBQUNBLDBCQUF5QixPQUFPLHFDQUFxQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWM7QUFDZDtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2g2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQSxZQUFXLE9BQU8sc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFEQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOzs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7Ozs7Ozs7QUNqREE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF1QiwyQkFBMkI7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzUUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBdUIsMkJBQTJCOztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQ3RLOEIsRUFBTTs7dUNBQ2IsRUFB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0EsNENBQTJDLCs4Szs7Ozs7O0FDekkzQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLHVCQUF1QjtBQUN6RDtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLDZCQUE2QjtBQUNqRTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQseUJBQXlCO0FBQ3ZGLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsMENBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDcnNDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLGlCQUFpQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDM0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDckZSLEVBQU07O3VDQUViLEVBQVk7O0tBQXZCLEtBQUs7O2tDQUNNLEVBQU87O0tBQWxCLEtBQUs7O3lDQUVNLENBQXNCOztLQUFqQyxLQUFLOztBQUVqQixLQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDckIsWUFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztBQUM1RCxZQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDOztLQUUxRCxXQUFXO2VBQVgsV0FBVzs7QUFDRixjQURULFdBQVcsQ0FDRCxHQUFHLEVBQUMsSUFBSSxFQUFDOytCQURuQixXQUFXOztBQUVULG9DQUZGLFdBQVcsNkNBRUQ7QUFDUixhQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3ZCLGFBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDekIsYUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsYUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsYUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBQzNELGFBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztNQUNsRTs7a0JBVEMsV0FBVzs7Z0JBV04saUJBQUMsR0FBRyxFQUFDO0FBQ1Isb0JBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQztVQUM1Qzs7O2dCQUVPLGtCQUFDLEdBQUcsRUFBQztBQUNULG9CQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUM7VUFDN0M7OztnQkFFWSx1QkFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDOzs7QUFDOUIsb0JBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFHO0FBQ2pDLHFCQUFHLENBQUMsR0FBRyxFQUFDO0FBQ0oseUJBQUcsRUFBRSxJQUFJLElBQUksV0FBVyxDQUFDLEVBQUM7QUFDdEIsZ0NBQU87c0JBQ1Y7O0FBRUQseUJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsdUJBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyx1QkFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFekIseUJBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUNuRCw4QkFBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ25DLGdDQUFPLElBQUksQ0FBQztzQkFDZjs7QUFFRCwyQkFBSyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2tCQUNuQztBQUNELHFCQUFHLE9BQU8sRUFBRSxLQUFHLFVBQVUsRUFBQztBQUN0Qix1QkFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsSUFBSSxJQUFFLEVBQUUsQ0FBQyxDQUFDO2tCQUN4QjtjQUNKLENBQUM7VUFDTDs7O2dCQUVVLHFCQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDOzs7QUFDdEIsaUJBQUcsT0FBTyxFQUFFLEtBQUcsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBQyxPQUFPOztBQUVqRixpQkFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRztBQUM1QixxQkFBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztBQUNsQyw0QkFBTyxVQUFDLElBQUksRUFBRztBQUNYLGdDQUFLLGFBQWEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDO3NCQUMzRDtrQkFDSjtBQUNELHdCQUFPLFVBQUMsSUFBSSxFQUFHO0FBQUMseUJBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2tCQUFDO2NBQ2xDLENBQUMsQ0FBQzs7QUFFSCxrQkFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsWUFBSTtBQUNuQixtQkFBRSxFQUFFLENBQUM7Y0FDUixDQUFDO1VBQ0w7OztnQkFFSyxnQkFBQyxNQUFNLEVBQUM7O1VBRWI7OztnQkFTUyxzQkFBRTtBQUNSLG9CQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1VBQy9FOzs7Y0FUVyxlQUFFOzs7QUFDVixvQkFBTyxZQUFJO0FBQ1Asd0JBQUssVUFBVSxFQUFFLENBQUM7QUFDbEIsd0JBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztjQUN4QjtVQUNKOzs7WUFyRUMsV0FBVztVQVhULGVBQWU7O3NCQXVGUixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0N4RlIsQ0FBTzs7OzsyQ0FDRCxDQUFpQjs7S0FFbkMsT0FBTztlQUFQLE9BQU87O2NBQVAsT0FBTzsrQkFBUCxPQUFPOztvQ0FBUCxPQUFPOzs7a0JBQVAsT0FBTzs7Z0JBQ0gsa0JBQUU7QUFDSixvQkFDQTtpQ0FMQSxHQUFHO21CQUtFLFNBQVMsRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFFLENBQUU7aUJBQzNCLGlEQU5BLEtBQUs7QUFPRCx5QkFBSSxFQUFDLE1BQU07QUFDWCxnQ0FBVyxFQUFDLG9CQUFvQjtBQUNoQywwQkFBSyxFQUFDLFFBQVE7QUFDZCxnQ0FBVzttQkFDVDtpQkFDTjs7O3FCQUNJOzs7eUJBQ0ssSUFBSSxDQUFDLGdCQUFnQixFQUFFO3NCQUN2QjtrQkFDSDtjQUNKLENBQ0w7VUFDSjs7O2dCQUVlLDRCQUFFO0FBQ2Qsb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxFQUFHO0FBQ3hDLHdCQUFPOzt1QkFBSSxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUc7cUJBQUUsTUFBTSxDQUFDLEtBQUs7a0JBQU07Y0FDakQsQ0FBQyxDQUFDO1VBQ047OztZQXZCQyxPQUFPO0lBQVMsbUJBQU0sU0FBUzs7c0JBMEJ0QixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0M3QkosQ0FBTzs7Ozt5Q0FDSixDQUFzQjs7S0FFckMsTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ0Ysa0JBQUU7QUFDSixvQkFDSTs7O2lCQUNJOzs7O3FCQUFlOzsyQkFBRyxJQUFJLEVBQUUsY0FOaEMsTUFBTSxDQU1pQyxHQUFJOztzQkFBYTtrQkFBSTtpQkFDcEQ7Ozs7cUJBQWM7OzJCQUFHLElBQUksRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLEVBQUMsUUFBUTs7c0JBQVU7O3FCQUFLOzsyQkFBRyxJQUFJLEVBQUMsb0NBQW9DLEVBQUMsTUFBTSxFQUFDLFFBQVE7O3NCQUFjO2tCQUFJO2NBQ2hLLENBQ1g7VUFDTDs7O1lBUkMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQVdyQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDZFMsRUFBTTs7QUFFcEMsS0FBSSxJQUFJLEdBQUcsTUFBTSxDQUFDOztLQUVaLGdCQUFnQjtlQUFoQixnQkFBZ0I7O2tCQUFoQixnQkFBZ0I7O2NBR0MsZUFBRTtBQUNqQixpQkFBRyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsWUFBWSxnQkFBZ0IsQ0FBQyxFQUFDO0FBQ3pELGlDQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7Y0FDdkQ7QUFDRCxvQkFBTyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7VUFDckM7OztBQUVVLGNBVlQsZ0JBQWdCLEdBVUw7K0JBVlgsZ0JBQWdCOztBQVdkLG9DQVhGLGdCQUFnQiw2Q0FXTjtBQUNSLGFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGFBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztNQUNkOztrQkFkQyxnQkFBZ0I7O2dCQWdCZixlQUFFO0FBQ0QsaUJBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLGlCQUFJLENBQUMsS0FBSyxFQUFFO1VBQ2Y7OztnQkFFRyxnQkFBWTtpQkFBWCxLQUFLLHlEQUFDLElBQUk7O0FBQ1gsaUJBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGlCQUFHLEtBQUssRUFBQztBQUNMLHFCQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDaEM7VUFDSjs7O2dCQUVLLGdCQUFDLEVBQUUsRUFBQztBQUNOLGlCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztVQUM3Qjs7O2dCQUVJLGlCQUFFO0FBQ0gsaUJBQUcsSUFBSSxDQUFDLFVBQVUsRUFBQyxPQUFPO0FBQzFCLGtDQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0MsaUJBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7VUFDbkI7OztZQXBDQyxnQkFBZ0I7VUFKZCxlQUFlOztzQkEyQ1IsZ0JBQWdCLENBQUMsUUFBUSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg4MDJhZDY5NjM3ZWQ0YzZmYTQ2XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS83LzE2LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlldy9BcHAuanMnO1xuXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuL2NvcmUvU2FtcGxlTWFuYWdlci5qcyc7XG5pbXBvcnQgQW5pbWF0aW9uTWFuYWdlciBmcm9tICcuL2NvcmUvQW5pbWF0aW9uTWFuYWdlci5qcyc7XG5pbXBvcnQgU2FtcGxlRmllbGQgZnJvbSAnLi92aWV3L2NvbnRlbnQvU2FtcGxlRmllbGQuanMnO1xuXG5jbGFzcyBNYWlue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsvL1xuICAgIH1cbn1cblxudmFyIGFwcDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGxhdW5jaDpmdW5jdGlvbigpe1xuICAgICAgICBpZigoYXBwIGluc3RhbmNlb2YgTWFpbikpcmV0dXJuO1xuICAgICAgICBhcHAgPSBuZXcgTWFpbigpO1xuICAgIH0sXG4gICAgU2FtcGxlRmllbGQ6U2FtcGxlRmllbGQsXG4gICAgQW5pbWF0aW9uTWFuYWdlcjpBbmltYXRpb25NYW5hZ2VyXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL2FwcC5lczZ+XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2xheW91dC9IZWFkZXIuanMnO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL2xheW91dC9Cb2R5LmpzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2xheW91dC9Gb290ZXIuanMnO1xyXG5cclxuaW1wb3J0IFNhbXBsZU1hbmFnZXIgZnJvbSAnLi4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxpemVTdGF0ZTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLmFkZExpc3RlbmVyKFNhbXBsZU1hbmFnZXIuQ09ORklHX0xPQURFRCx0aGlzLm9uU2FtcGxlQ29uZmlnUmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgU2FtcGxlTWFuYWdlci5hZGRMaXN0ZW5lcihTYW1wbGVNYW5hZ2VyLlRPR0dMRV9UT19TQU1QTEUsdGhpcy5vblNhbXBsZVRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc01vdW50KXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbml0aWFsaXplU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0LTE2IC8vZG9jdW1lbnQgbWFyZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhbXBsZXNEYXRhOm51bGwsXHJcbiAgICAgICAgICAgIHNhbXBsZUN1cnI6bnVsbCAvL+W9k+WJjeS+i+WtkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3R5bGUubWluSGVpZ2h0IT09d2luZG93LmlubmVySGVpZ2h0LTE2KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodC0xNiAvL2RvY3VtZW50IG1hcmdpblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVDb25maWdSZWFkeSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzYW1wbGVzRGF0YTpTYW1wbGVNYW5hZ2VyLnNhbXBsZXNEYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYW1wbGVUb2dnbGUoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNhbXBsZUN1cnI6ZS5zYW1wbGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt0aGlzLmlzTW91bnQgPSB0cnVlO31cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge3RoaXMuaXNNb3VudCA9IGZhbHNlfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLndpbmRvd1Jlc2l6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhcHAgPVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29sLW1kLTEwIHBhZ2UgcHVsbC1jZW50ZXIgcGFwZXJcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5IHNhbXBsZUN1cnI9e3RoaXMuc3RhdGUuc2FtcGxlQ3Vycn0gc2FtcGxlc0RhdGE9e3RoaXMuc3RhdGUuc2FtcGxlc0RhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvQXBwLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cInNpdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPldlYkdMIHRlc3Q8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic29jaWFsLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90b21teVpaTS93ZWJHTFByYXRpY2VcIiB0aXRsZT1cIndhdGNoIHNvdXJjZSBvbiBnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1naXRodWItYWx0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb25maWcudXJsfSB0aXRsZT1cImJsb2dcIj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2l0ZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJyXCI+PGE+56yU6K6wPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIwLlxyXG4gKi9cclxuZXhwb3J0IHZhciB1cmwgPSB7XHJcbiAgICBqb2luOmZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgam9pbmVkID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLmpvaW4oJy8nKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcPy9nLCAnPycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwjL2csICcjJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXDpcXC8vZywgJzovLycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwuXFwvL2csICdcXC8nKTtcclxuICAgICAgICB9KShqb2luZWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciByZXggPSB7XHJcbiAgICBodG1sU2luZ2xlVGFnOigvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy9cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgY29uc3RhbnRzID0ge1xyXG4gICAgUEk6TWF0aC5QSSxcclxuICAgIFBJXzI6IE1hdGguUEkgKiAyLFxyXG4gICAgUkFEX1RPX0RFRzoxODAgLyBNYXRoLlBJLFxyXG4gICAgREVHX1RPX1JBRDpNYXRoLlBJIC8gMTgwXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGNvbmZpZyA9IHtcclxuICAgIHVybDpcImh0dHA6Ly93d3cuY2hhbGV0NTgxLnh5elwiXHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3V0aWxzL3V0aWxzLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2luYy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9pbmMvU2lkZUJhci5qc1wiO1xyXG5cclxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gIDxkaXYgaWQ9XCJzaXRlLW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBzYW1wbGVDb250ZW50PXt0aGlzLnByb3BzLnNhbXBsZUN1cnJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzYW1wbGVzTGlzdD17KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2FtcGxlc0RhdGEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLnNhbXBsZXNEYXRhLnBvc3RzKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zYW1wbGVzRGF0YS5wb3N0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvQm9keS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Qm9vdHN0cmFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2x9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5cclxuaW1wb3J0IFNhbXBsZVJlbmRlcmVyIGZyb20gJy4uL2NvbnRlbnQvU2FtcGxlUmVuZGVyZXIuanMnXHJcbmltcG9ydCBTYW1wbGVNYW5hZ2VyIGZyb20gJy4uLy4uL2NvcmUvU2FtcGxlTWFuYWdlci5qcyc7XHJcblxyXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29udGVudCBcIiBtZD17OX0+XHJcbiAgICAgICAgICAgICAgICB7KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zYW1wbGVDb250ZW50JiZ0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1hcmtkb3duIGlkPXt0aGlzLnByb3BzLnNhbXBsZUNvbnRlbnQuaWR9IHNvdXJjZT17dGhpcy5wcm9wcy5zYW1wbGVDb250ZW50Lm1hcmtkb3dufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tYXJrUmVuZGVyZXIgPSBuZXcgU2FtcGxlUmVuZGVyZXIoe3NvdXJjZXBvczogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuaXNSZW5kZXJTdWNjZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzUXVlcnkgPSBbXTtcclxuICAgICAgICB0aGlzLmNhbnZhc0RpY3QgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrUmVuZGVyZXIucmVuZGVySHRtbChcImNhbnZhc1wiLCh0YWcsYXR0cnMpPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2FudmFzIHBhcmVudD17dGhpc30gYXR0cnM9e2F0dHJzfS8+O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5jYW52YXNEaWN0KXtcclxuICAgICAgICAgICAgZGljdFtpXSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuY2FudmFzRGljdFtpXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYW52YXM6e1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6dGhpcy5jYW52YXNRdWVyeS5tYXAoKGNhbnZhcyk9PntyZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY2FudmFzKX0pLFxyXG4gICAgICAgICAgICAgICAgZGlyY3Q6ZGljdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih0aGlzLmlzUmVuZGVyU3VjY2Vzcyl7XHJcbiAgICAgICAgICAgIFNhbXBsZU1hbmFnZXIucmVhZHlTYW1wbGUodGhpcy5wcm9wcy5pZCxkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodHlwZW9mIHRoaXMucHJvcHMuc291cmNlID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5tYXJrUmVuZGVyZXIucmVuZGVyKHRoaXMucHJvcHMuc291cmNlIHx8ICcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRzJiYhZWxlbWVudHMuc29tZSgoZWxlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlKVxyXG4gICAgICAgICAgICAgICAgfSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlbmRlclN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkoUmVhY3QsW1wiZGl2XCIse2NsYXNzTmFtZTpcIm1hcmtkb3duXCJ9XS5jb25jYXQoZWxlbWVudHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJub29wXCI+PC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENhbnZhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnByb3BzLnBhcmVudDtcclxuICAgICAgICB2YXIgY2FudmFzID0gUmVhY3QuZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgcGFyZW50LmNhbnZhc1F1ZXJ5LnB1c2goY2FudmFzKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmF0dHJzLm5hbWUpcGFyZW50LmNhbnZhc0RpY3RbdGhpcy5wcm9wcy5hdHRycy5uYW1lXT1jYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIix0aGlzLnByb3BzLmF0dHJzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2luYy9Db250ZW50LmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIzLlxyXG4gKi9cclxuLy/muLLmn5NTYW1wbGVcclxuXHJcbmltcG9ydCBDb21tb25NYXJrUmVuZGVyIGZyb20gXCIuL0NvbW1vbk1hcmtSZW5kZXIuanNcIjtcclxuXHJcbi8vaW1wb3J0IE1hcmtlZFJlbmRlcmVyIGZyb20gXCIuL21hcmtkb3duL01hcmtlZFJlbmRlcmVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25NYXJrUmVuZGVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9jb250ZW50L1NhbXBsZVJlbmRlcmVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzI0LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgQ29tbW9ubWFyayBmcm9tICdjb21tb25tYXJrJztcclxuXHJcbnZhciByZXggPSB7XHJcbiAgICBodG1sU2luZ2xlVGFnOigvXjwoXFx3KylcXHMqKC4qKVxcLz8+KD86PFxcL1xcMT58KSQvKSxcclxuICAgIGh0bWw6Lzx8JiM/XFx3KzsvLFxyXG4gICAgaHRtbFByb3BzOi8oXFx3Kyk9KFtePl0rKS9pXHJcbn07XHJcblxyXG52YXIgZG9tSWRlbnRpdHk7XHJcbmlmKHR5cGVvZiBkb2N1bWVudCE9PVwidW5kZWZpbmVkXCIpe1xyXG4gICAgZG9tSWRlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG59ZWxzZXtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJkb2N1bWVudCB1bmRlZmluZWQhXCIpO1xyXG59XHJcblxyXG52YXIgbWFya1ByYXNlciA9IG5ldyBDb21tb25tYXJrLlBhcnNlcigpO1xyXG5cclxuY2xhc3MgUmVuZGVyZXIgaW1wbGVtZW50cyBJQ29tbW9ubWFya1JlbmRlcmVye1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyl7XHJcbiAgICAgICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc291cmNlUG9zPW9wdHMuc291cmNlUG9zO1xyXG4gICAgICAgIHRoaXMuc29mdEJyZWFrID0gb3B0cy5zb2Z0QnJlYWsgfHwgJ1xcbic7XHJcbiAgICAgICAgdGhpcy5lc2NhcGVIdG1sID0gISFvcHRzLmVzY2FwZUh0bWw7XHJcbiAgICAgICAgdGhpcy5za2lwSHRtbCA9ICEhb3B0cy5za2lwSHRtbDtcclxuXHJcbiAgICAgICAgdGhpcy5ob3dSZW5kZXJIdG1sID0ge307XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJIdG1sKHRhZ05hbWUsZm4pe1xyXG4gICAgICAgIGlmKHR5cGVvZiBmbiE9PVwiZnVuY3Rpb25cIilyZXR1cm47XHJcbiAgICAgICAgdGhpcy5ob3dSZW5kZXJIdG1sW3RhZ05hbWVdPWZuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNvdXJjZSl7XHJcbiAgICAgICAgdmFyIGJsb2NrID0gbWFya1ByYXNlci5wYXJzZShzb3VyY2UgfHwgJycpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IE1hcmtkb3duTm9kZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHZhciB3YWxrZXIgPSBibG9jay53YWxrZXIoKTtcclxuICAgICAgICB2YXIgc291cmNlUG9zID0gdGhpcy5zb3VyY2VQb3M7XHJcbiAgICAgICAgdmFyIGVzY2FwZUh0bWwgPSB0aGlzLmVzY2FwZUh0bWw7XHJcbiAgICAgICAgdmFyIHNraXBIdG1sID0gdGhpcy5za2lwSHRtbDtcclxuICAgICAgICB2YXIgaW5mb1dvcmRzO1xyXG4gICAgICAgIHZhciBzb2Z0QnJlYWsgPSAoXHJcbiAgICAgICAgICAgIHRoaXMuc29mdEJyZWFrID09PSAnYnInID9cclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJykgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2Z0QnJlYWtcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgZSwgbm9kZSwgZW50ZXJpbmcsIGxlYXZpbmcsIGF0dHJzLCBkb2M7XHJcbiAgICAgICAgd2hpbGUgKChlID0gd2Fsa2VyLm5leHQoKSkpIHtcclxuICAgICAgICAgICAgZW50ZXJpbmcgPSBlLmVudGVyaW5nO1xyXG4gICAgICAgICAgICBsZWF2aW5nID0gIWVudGVyaW5nO1xyXG4gICAgICAgICAgICBub2RlID0gZS5ub2RlO1xyXG4gICAgICAgICAgICBhdHRycyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkb2MpIHtcclxuICAgICAgICAgICAgICAgIGRvYyA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlYWN0ID0geyBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNvdXJjZVBvcyAmJiBub2RlLnNvdXJjZXBvcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IG5vZGUuc291cmNlcG9zO1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbJ2RhdGEtc291cmNlcG9zJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWzBdWzBdLCAnOicsIHBvc1swXVsxXSwgJy0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc1sxXVswXSwgJzonLCBwb3NbMV1bMV1cclxuICAgICAgICAgICAgICAgIF0ubWFwKFN0cmluZykuam9pbignJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdQYXJhZ3JhcGgnICYmIHNlbGYuaXNHcmFuZFBhcmVudE9mTGlzdChub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsZWF2aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnSW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC5wcm9wcy5hbHQgPSBub2RlLnJlYWN0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSAhPT0gZG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QudGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LnByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVudGVyaW5nIGEgbmV3IG5vZGVcclxuICAgICAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0h0bWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnSHRtbEJsb2NrJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNjYXBlSHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIG5vZGUubGl0ZXJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2tpcEh0bWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1scHJhc2UgPSByZXguaHRtbFNpbmdsZVRhZy5leGVjKG5vZGUubGl0ZXJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaHRtbHByYXNlKSYmaHRtbHByYXNlWzFdKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbHRhZyA9IGh0bWxwcmFzZVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sZWxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUlkZW50aXR5LmlubmVySFRNTCA9IG5vZGUubGl0ZXJhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sYXR0cmlidXRlcyA9IGRvbUlkZW50aXR5LmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8aHRtbGF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBodG1sYXR0cmlidXRlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmFtZS50b0xvd2VyQ2FzZSgpPT09XCJjbGFzc25hbWVcIil7bmFtZT1cImNsYXNzTmFtZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1tuYW1lXSA9IGEubm9kZVZhbHVlLmxlbmd0aD4wP2Eubm9kZVZhbHVlOnRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLmhvd1JlbmRlckh0bWxbaHRtbHRhZ109PT1cImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxlbGUgPSB0aGlzLmhvd1JlbmRlckh0bWxbaHRtbHRhZ10oaHRtbHRhZyxhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sZWxlID0gc2VsZi5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sdGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaHRtbGVsZS5fX3Byb3RvX18gJiYgaHRtbGVsZS5fX3Byb3RvX18uX2lzUmVhY3RFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIGh0bWxlbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPi4uLntodG1scHJhc2VbMF19IHByYXNlIGZhaWwuLi48L3A+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgbm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1BhcmFncmFwaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ3AnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIZWFkZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdoJyArIG5vZGUubGV2ZWwsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NvZnRicmVhayc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzb2Z0QnJlYWspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU3Ryb25nJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnc3Ryb25nJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGluayc6XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMuaHJlZiA9IG5vZGUuZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy50aXRsZSA9IG5vZGUudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdhJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnNyYyA9IG5vZGUuZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMudGl0bGUgPSBub2RlLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnaW1nJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRW1waCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2VtJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ29kZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtub2RlLmxpdGVyYWxdXHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDb2RlQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9Xb3JkcyA9IG5vZGUuaW5mbyA/IG5vZGUuaW5mby5zcGxpdCgvICsvKSA6IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86aGlnaGxpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaW5mb1dvcmRzWzBdfHxcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlV3JhcHBlci5hcHBlbmRDaGlsZChjb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGhsanMhPT1cInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhobGpzLmhpZ2hsaWdodEF1dG8obm9kZS5saXRlcmFsLFtpbmZvV29yZHNbMF1dKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBobGpzLmhpZ2hsaWdodEF1dG8obm9kZS5saXRlcmFsLFtpbmZvV29yZHNbMF1dKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgY29kZSA9IHNlbGYuY3JlYXRlRWxlbWVudCgnY29kZScsIGF0dHJzLCBbbm9kZS5saXRlcmFsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoJ3ByZScsIHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmNvZGVXcmFwcGVyLmlubmVySFRNTH19KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdCbG9ja1F1b3RlJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnYmxvY2txdW90ZScsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG5vZGUubGlzdFN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCAhPT0gbnVsbCAmJiBzdGFydCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5zdGFydCA9IHN0YXJ0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsIG5vZGUubGlzdFR5cGUgPT09ICdCdWxsZXQnID8gJ3VsJyA6ICdvbCcsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0l0ZW0nOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdsaScsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hvcml6b250YWxSdWxlJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudCgnaHInLCBhdHRycykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRG9jdW1lbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbm9kZSB0eXBlIFwiJyArIG5vZGUudHlwZSArICdcIicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9jLnJlYWN0LmNoaWxkcmVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNYXJrZG93bk5vZGVFbGVtZW50e1xyXG4gICAgc3RhdGljIHRhZyhub2RlLCBuYW1lLCBhdHRycywgY2hpbGRyZW4pe1xyXG4gICAgICAgIG5vZGUucmVhY3QgPSB7XHJcbiAgICAgICAgICAgIHRhZzogbmFtZSxcclxuICAgICAgICAgICAgcHJvcHM6IGF0dHJzLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4gfHwgW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0dyYW5kUGFyZW50T2ZMaXN0KG5vZGUpe1xyXG4gICAgICAgIGlmKCFub2RlfHwhbm9kZS5wYXJlbnQpe3JldHVybiBmYWxzZX1cclxuICAgICAgICB2YXIgZ3JhbmRwYXJlbnQgPSBub2RlLnBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQgJiZcclxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQudHlwZSA9PT0gJ0xpc3QnICYmXHJcbiAgICAgICAgICAgIGdyYW5kcGFyZW50Lmxpc3RUaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZENoaWxkKG5vZGUsIGNoaWxkKXtcclxuICAgICAgICB2YXIgcGFyZW50ID0gbm9kZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgfSB3aGlsZSAoIXBhcmVudC5yZWFjdCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5yZWFjdC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFnTmFtZVxyXG4gICAgICogQHBhcmFtIHByb3BzXHJcbiAgICAgKiBAcGFyYW0gY2hpbGRyZW5cclxuICAgICAqIEByZXR1cm5zIHtET01FbGVtZW50PEFycmF5PGFueT58YW55W10+fENsYXNzaWNFbGVtZW50PEFycmF5PGFueT58YW55W10+fFJlYWN0RWxlbWVudDxBcnJheTxhbnk+fGFueVtdPn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIGNoaWxkcmVuKXtcclxuICAgICAgICB2YXIgYXJncyA9IFt0YWdOYW1lLCBwcm9wc10uY29uY2F0KGNoaWxkcmVuKTtcclxuICAgICAgICB2YXIgY2hpbGQgPSBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KFJlYWN0LCBhcmdzKTtcclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2NvbnRlbnQvQ29tbW9uTWFya1JlbmRlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBjb21tb25tYXJrLmpzIC0gQ29tbW9tTWFyayBpbiBKYXZhU2NyaXB0XG4vLyBDb3B5cmlnaHQgKEMpIDIwMTQgSm9obiBNYWNGYXJsYW5lXG4vLyBMaWNlbnNlOiBCU0QzLlxuXG4vLyBCYXNpYyB1c2FnZTpcbi8vXG4vLyB2YXIgY29tbW9ubWFyayA9IHJlcXVpcmUoJ2NvbW1vbm1hcmsnKTtcbi8vIHZhciBwYXJzZXIgPSBuZXcgY29tbW9ubWFyay5QYXJzZXIoKTtcbi8vIHZhciByZW5kZXJlciA9IG5ldyBjb21tb25tYXJrLkh0bWxSZW5kZXJlcigpO1xuLy8gY29uc29sZS5sb2cocmVuZGVyZXIucmVuZGVyKHBhcnNlci5wYXJzZSgnSGVsbG8gKndvcmxkKicpKSk7XG5cbm1vZHVsZS5leHBvcnRzLk5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbm1vZHVsZS5leHBvcnRzLlBhcnNlciA9IHJlcXVpcmUoJy4vYmxvY2tzJyk7XG5tb2R1bGUuZXhwb3J0cy5IdG1sUmVuZGVyZXIgPSByZXF1aXJlKCcuL2h0bWwnKTtcbm1vZHVsZS5leHBvcnRzLlhtbFJlbmRlcmVyID0gcmVxdWlyZSgnLi94bWwnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBpc0NvbnRhaW5lcihub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLl90eXBlKSB7XG4gICAgY2FzZSAnRG9jdW1lbnQnOlxuICAgIGNhc2UgJ0Jsb2NrUXVvdGUnOlxuICAgIGNhc2UgJ0xpc3QnOlxuICAgIGNhc2UgJ0l0ZW0nOlxuICAgIGNhc2UgJ1BhcmFncmFwaCc6XG4gICAgY2FzZSAnSGVhZGVyJzpcbiAgICBjYXNlICdFbXBoJzpcbiAgICBjYXNlICdTdHJvbmcnOlxuICAgIGNhc2UgJ0xpbmsnOlxuICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxudmFyIHJlc3VtZUF0ID0gZnVuY3Rpb24obm9kZSwgZW50ZXJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBub2RlO1xuICAgIHRoaXMuZW50ZXJpbmcgPSAoZW50ZXJpbmcgPT09IHRydWUpO1xufTtcblxudmFyIG5leHQgPSBmdW5jdGlvbigpe1xuICAgIHZhciBjdXIgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdmFyIGVudGVyaW5nID0gdGhpcy5lbnRlcmluZztcblxuICAgIGlmIChjdXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGlzQ29udGFpbmVyKGN1cik7XG5cbiAgICBpZiAoZW50ZXJpbmcgJiYgY29udGFpbmVyKSB7XG4gICAgICAgIGlmIChjdXIuX2ZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGN1ci5fZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc3RheSBvbiBub2RlIGJ1dCBleGl0XG4gICAgICAgICAgICB0aGlzLmVudGVyaW5nID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoY3VyID09PSB0aGlzLnJvb3QpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcblxuICAgIH0gZWxzZSBpZiAoY3VyLl9uZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1ci5fcGFyZW50O1xuICAgICAgICB0aGlzLmVudGVyaW5nID0gZmFsc2U7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXIuX25leHQ7XG4gICAgICAgIHRoaXMuZW50ZXJpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7ZW50ZXJpbmc6IGVudGVyaW5nLCBub2RlOiBjdXJ9O1xufTtcblxudmFyIE5vZGVXYWxrZXIgPSBmdW5jdGlvbihyb290KSB7XG4gICAgcmV0dXJuIHsgY3VycmVudDogcm9vdCxcbiAgICAgICAgICAgICByb290OiByb290LFxuICAgICAgICAgICAgIGVudGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgIG5leHQ6IG5leHQsXG4gICAgICAgICAgICAgcmVzdW1lQXQ6IHJlc3VtZUF0IH07XG59O1xuXG52YXIgTm9kZSA9IGZ1bmN0aW9uKG5vZGVUeXBlLCBzb3VyY2Vwb3MpIHtcbiAgICB0aGlzLl90eXBlID0gbm9kZVR5cGU7XG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9maXJzdENoaWxkID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q2hpbGQgPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICAgIHRoaXMuX25leHQgPSBudWxsO1xuICAgIHRoaXMuX3NvdXJjZXBvcyA9IHNvdXJjZXBvcztcbiAgICB0aGlzLl9sYXN0TGluZUJsYW5rID0gZmFsc2U7XG4gICAgdGhpcy5fb3BlbiA9IHRydWU7XG4gICAgdGhpcy5fc3RyaW5nX2NvbnRlbnQgPSBudWxsO1xuICAgIHRoaXMuX2xpdGVyYWwgPSBudWxsO1xuICAgIHRoaXMuX2xpc3REYXRhID0gbnVsbDtcbiAgICB0aGlzLl9pbmZvID0gbnVsbDtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgIHRoaXMuX2lzRmVuY2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZmVuY2VDaGFyID0gbnVsbDtcbiAgICB0aGlzLl9mZW5jZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZmVuY2VPZmZzZXQgPSBudWxsO1xuICAgIHRoaXMuX2xldmVsID0gbnVsbDtcbn07XG5cbnZhciBwcm90byA9IE5vZGUucHJvdG90eXBlO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdpc0NvbnRhaW5lcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzQ29udGFpbmVyKHRoaXMpOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAndHlwZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2ZpcnN0Q2hpbGQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2ZpcnN0Q2hpbGQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsYXN0Q2hpbGQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xhc3RDaGlsZDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ25leHQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX25leHQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwcmV2Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9wcmV2OyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAncGFyZW50Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdzb3VyY2Vwb3MnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3NvdXJjZXBvczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpdGVyYWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpdGVyYWw7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2xpdGVyYWwgPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZGVzdGluYXRpb24nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl9kZXN0aW5hdGlvbiA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICd0aXRsZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX3RpdGxlID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2luZm8nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2luZm87IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2luZm8gPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGV2ZWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xldmVsOyB9LFxuICAgIHNldDogZnVuY3Rpb24ocykgeyB0aGlzLl9sZXZlbCA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0VHlwZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEudHlwZTsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHQpIHsgdGhpcy5fbGlzdERhdGEudHlwZSA9IHQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0VGlnaHQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLnRpZ2h0OyB9LFxuICAgIHNldDogZnVuY3Rpb24odCkgeyB0aGlzLl9saXN0RGF0YS50aWdodCA9IHQ7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0U3RhcnQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLnN0YXJ0OyB9LFxuICAgIHNldDogZnVuY3Rpb24obikgeyB0aGlzLl9saXN0RGF0YS5zdGFydCA9IG47IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsaXN0RGVsaW1pdGVyJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXN0RGF0YS5kZWxpbWl0ZXI7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihkZWxpbSkgeyB0aGlzLl9saXN0RGF0YS5kZWxpbWl0ZXIgPSBkZWxpbTsgfVxufSk7XG5cbk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24oY2hpbGQpIHtcbiAgICBjaGlsZC51bmxpbmsoKTtcbiAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcbiAgICBpZiAodGhpcy5fbGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZC5fbmV4dCA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5fcHJldiA9IHRoaXMuX2xhc3RDaGlsZDtcbiAgICAgICAgdGhpcy5fbGFzdENoaWxkID0gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbihjaGlsZCkge1xuICAgIGNoaWxkLnVubGluaygpO1xuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hpbGQuX3ByZXYgPSBjaGlsZDtcbiAgICAgICAgY2hpbGQuX25leHQgPSB0aGlzLl9maXJzdENoaWxkO1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcHJldikge1xuICAgICAgICB0aGlzLl9wcmV2Ll9uZXh0ID0gdGhpcy5fbmV4dDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuX2ZpcnN0Q2hpbGQgPSB0aGlzLl9uZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmV4dCkge1xuICAgICAgICB0aGlzLl9uZXh0Ll9wcmV2ID0gdGhpcy5fcHJldjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQuX2xhc3RDaGlsZCA9IHRoaXMuX3ByZXY7XG4gICAgfVxuICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fbmV4dCA9IG51bGw7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG59O1xuXG5Ob2RlLnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uKHNpYmxpbmcpIHtcbiAgICBzaWJsaW5nLnVubGluaygpO1xuICAgIHNpYmxpbmcuX25leHQgPSB0aGlzLl9uZXh0O1xuICAgIGlmIChzaWJsaW5nLl9uZXh0KSB7XG4gICAgICAgIHNpYmxpbmcuX25leHQuX3ByZXYgPSBzaWJsaW5nO1xuICAgIH1cbiAgICBzaWJsaW5nLl9wcmV2ID0gdGhpcztcbiAgICB0aGlzLl9uZXh0ID0gc2libGluZztcbiAgICBzaWJsaW5nLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgaWYgKCFzaWJsaW5nLl9uZXh0KSB7XG4gICAgICAgIHNpYmxpbmcuX3BhcmVudC5fbGFzdENoaWxkID0gc2libGluZztcbiAgICB9XG59O1xuXG5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbihzaWJsaW5nKSB7XG4gICAgc2libGluZy51bmxpbmsoKTtcbiAgICBzaWJsaW5nLl9wcmV2ID0gdGhpcy5fcHJldjtcbiAgICBpZiAoc2libGluZy5fcHJldikge1xuICAgICAgICBzaWJsaW5nLl9wcmV2Ll9uZXh0ID0gc2libGluZztcbiAgICB9XG4gICAgc2libGluZy5fbmV4dCA9IHRoaXM7XG4gICAgdGhpcy5fcHJldiA9IHNpYmxpbmc7XG4gICAgc2libGluZy5fcGFyZW50ID0gdGhpcy5fcGFyZW50O1xuICAgIGlmICghc2libGluZy5fcHJldikge1xuICAgICAgICBzaWJsaW5nLl9wYXJlbnQuX2ZpcnN0Q2hpbGQgPSBzaWJsaW5nO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLndhbGtlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3YWxrZXIgPSBuZXcgTm9kZVdhbGtlcih0aGlzKTtcbiAgICByZXR1cm4gd2Fsa2VyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlO1xuXG5cbi8qIEV4YW1wbGUgb2YgdXNlIG9mIHdhbGtlcjpcblxuIHZhciB3YWxrZXIgPSB3LndhbGtlcigpO1xuIHZhciBldmVudDtcblxuIHdoaWxlIChldmVudCA9IHdhbGtlci5uZXh0KCkpIHtcbiBjb25zb2xlLmxvZyhldmVudC5lbnRlcmluZywgZXZlbnQubm9kZS50eXBlKTtcbiB9XG5cbiAqL1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvbm9kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbnZhciB1bmVzY2FwZVN0cmluZyA9IHJlcXVpcmUoJy4vY29tbW9uJykudW5lc2NhcGVTdHJpbmc7XG52YXIgT1BFTlRBRyA9IHJlcXVpcmUoJy4vY29tbW9uJykuT1BFTlRBRztcbnZhciBDTE9TRVRBRyA9IHJlcXVpcmUoJy4vY29tbW9uJykuQ0xPU0VUQUc7XG5cbnZhciBDT0RFX0lOREVOVCA9IDQ7XG5cbnZhciBDX05FV0xJTkUgPSAxMDtcbnZhciBDX0dSRUFURVJUSEFOID0gNjI7XG52YXIgQ19MRVNTVEhBTiA9IDYwO1xudmFyIENfU1BBQ0UgPSAzMjtcbnZhciBDX09QRU5fQlJBQ0tFVCA9IDkxO1xuXG52YXIgSW5saW5lUGFyc2VyID0gcmVxdWlyZSgnLi9pbmxpbmVzJyk7XG5cbnZhciByZUh0bWxCbG9ja09wZW4gPSBbXG4gICAvLi8sIC8vIGR1bW15IGZvciAwXG4gICAvXjwoPzpzY3JpcHR8cHJlfHN0eWxlKSg/Olxcc3w+fCQpL2ksXG4gICAvXjwhLS0vLFxuICAgL148Wz9dLyxcbiAgIC9ePCFbQS1aXS8sXG4gICAvXjwhXFxbQ0RBVEFcXFsvLFxuICAgL148Wy9dPyg/OmFkZHJlc3N8YXJ0aWNsZXxhc2lkZXxiYXNlfGJhc2Vmb250fGJsb2NrcXVvdGV8Ym9keXxjYXB0aW9ufGNlbnRlcnxjb2x8Y29sZ3JvdXB8ZGR8ZGV0YWlsc3xkaWFsb2d8ZGlyfGRpdnxkbHxkdHxmaWVsZHNldHxmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8Zm9ybXxmcmFtZXxmcmFtZXNldHxoMXxoZWFkfGhlYWRlcnxocnxodG1sfGxlZ2VuZHxsaXxsaW5rfG1haW58bWVudXxtZW51aXRlbXxtZXRhfG5hdnxub2ZyYW1lc3xvbHxvcHRncm91cHxvcHRpb258cHxwYXJhbXxwcmV8c2VjdGlvbnxzb3VyY2V8dGl0bGV8c3VtbWFyeXx0YWJsZXx0Ym9keXx0ZHx0Zm9vdHx0aHx0aGVhZHx0aXRsZXx0cnx0cmFja3x1bCkoPzpcXHN8Wy9dP1s+XXwkKS9pLFxuICAgIG5ldyBSZWdFeHAoJ14oPzonICsgT1BFTlRBRyArICd8JyArIENMT1NFVEFHICsgJylcXHMqJCcsICdpJylcbl07XG5cbnZhciByZUh0bWxCbG9ja0Nsb3NlID0gW1xuICAgLy4vLCAvLyBkdW1teSBmb3IgMFxuICAgLzxcXC8oPzpzY3JpcHR8cHJlfHN0eWxlKT4vaSxcbiAgIC8tLT4vLFxuICAgL1xcPz4vLFxuICAgLz4vLFxuICAgL1xcXVxcXT4vXG5dO1xuXG52YXIgcmVIcnVsZSA9IC9eKD86KD86XFwqICopezMsfXwoPzpfICopezMsfXwoPzotICopezMsfSkgKiQvO1xuXG52YXIgcmVNYXliZVNwZWNpYWwgPSAvXlsjYH4qK189PD4wLTktXS87XG5cbnZhciByZU5vblNwYWNlID0gL1teIFxcdFxcZlxcdlxcclxcbl0vO1xuXG52YXIgcmVCdWxsZXRMaXN0TWFya2VyID0gL15bKistXSggK3wkKS87XG5cbnZhciByZU9yZGVyZWRMaXN0TWFya2VyID0gL14oXFxkezEsOX0pKFsuKV0pKCArfCQpLztcblxudmFyIHJlQVRYSGVhZGVyTWFya2VyID0gL14jezEsNn0oPzogK3wkKS87XG5cbnZhciByZUNvZGVGZW5jZSA9IC9eYHszLH0oPyEuKmApfF5+ezMsfSg/IS4qfikvO1xuXG52YXIgcmVDbG9zaW5nQ29kZUZlbmNlID0gL14oPzpgezMsfXx+ezMsfSkoPz0gKiQpLztcblxudmFyIHJlU2V0ZXh0SGVhZGVyTGluZSA9IC9eKD86PSt8LSspICokLztcblxudmFyIHJlTGluZUVuZGluZyA9IC9cXHJcXG58XFxufFxcci87XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiBzdHJpbmcgY29udGFpbnMgb25seSBzcGFjZSBjaGFyYWN0ZXJzLlxudmFyIGlzQmxhbmsgPSBmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuICEocmVOb25TcGFjZS50ZXN0KHMpKTtcbn07XG5cbnZhciBwZWVrID0gZnVuY3Rpb24obG4sIHBvcykge1xuICAgIGlmIChwb3MgPCBsbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxuLmNoYXJDb2RlQXQocG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufTtcblxuLy8gRE9DIFBBUlNFUlxuXG4vLyBUaGVzZSBhcmUgbWV0aG9kcyBvZiBhIFBhcnNlciBvYmplY3QsIGRlZmluZWQgYmVsb3cuXG5cbi8vIFJldHVybnMgdHJ1ZSBpZiBibG9jayBlbmRzIHdpdGggYSBibGFuayBsaW5lLCBkZXNjZW5kaW5nIGlmIG5lZWRlZFxuLy8gaW50byBsaXN0cyBhbmQgc3VibGlzdHMuXG52YXIgZW5kc1dpdGhCbGFua0xpbmUgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHdoaWxlIChibG9jaykge1xuICAgICAgICBpZiAoYmxvY2suX2xhc3RMaW5lQmxhbmspIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gYmxvY2sudHlwZTtcbiAgICAgICAgaWYgKHQgPT09ICdMaXN0JyB8fCB0ID09PSAnSXRlbScpIHtcbiAgICAgICAgICAgIGJsb2NrID0gYmxvY2suX2xhc3RDaGlsZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIEJyZWFrIG91dCBvZiBhbGwgY29udGFpbmluZyBsaXN0cywgcmVzZXR0aW5nIHRoZSB0aXAgb2YgdGhlXG4vLyBkb2N1bWVudCB0byB0aGUgcGFyZW50IG9mIHRoZSBoaWdoZXN0IGxpc3QsIGFuZCBmaW5hbGl6aW5nXG4vLyBhbGwgdGhlIGxpc3RzLiAgKFRoaXMgaXMgdXNlZCB0byBpbXBsZW1lbnQgdGhlIFwidHdvIGJsYW5rIGxpbmVzXG4vLyBicmVhayBvZiBvZiBhbGwgbGlzdHNcIiBmZWF0dXJlLilcbnZhciBicmVha091dE9mTGlzdHMgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBiID0gYmxvY2s7XG4gICAgdmFyIGxhc3RfbGlzdCA9IG51bGw7XG4gICAgZG8ge1xuICAgICAgICBpZiAoYi50eXBlID09PSAnTGlzdCcpIHtcbiAgICAgICAgICAgIGxhc3RfbGlzdCA9IGI7XG4gICAgICAgIH1cbiAgICAgICAgYiA9IGIuX3BhcmVudDtcbiAgICB9IHdoaWxlIChiKTtcblxuICAgIGlmIChsYXN0X2xpc3QpIHtcbiAgICAgICAgd2hpbGUgKGJsb2NrICE9PSBsYXN0X2xpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZmluYWxpemUoYmxvY2ssIHRoaXMubGluZU51bWJlcik7XG4gICAgICAgICAgICBibG9jayA9IGJsb2NrLl9wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5hbGl6ZShsYXN0X2xpc3QsIHRoaXMubGluZU51bWJlcik7XG4gICAgICAgIHRoaXMudGlwID0gbGFzdF9saXN0Ll9wYXJlbnQ7XG4gICAgfVxufTtcblxuLy8gQWRkIGEgbGluZSB0byB0aGUgYmxvY2sgYXQgdGhlIHRpcC4gIFdlIGFzc3VtZSB0aGUgdGlwXG4vLyBjYW4gYWNjZXB0IGxpbmVzIC0tIHRoYXQgY2hlY2sgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIGNhbGxpbmcgdGhpcy5cbnZhciBhZGRMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50aXAuX3N0cmluZ19jb250ZW50ICs9IHRoaXMuY3VycmVudExpbmUuc2xpY2UodGhpcy5vZmZzZXQpICsgJ1xcbic7XG59O1xuXG4vLyBBZGQgYmxvY2sgb2YgdHlwZSB0YWcgYXMgYSBjaGlsZCBvZiB0aGUgdGlwLiAgSWYgdGhlIHRpcCBjYW4ndFxuLy8gYWNjZXB0IGNoaWxkcmVuLCBjbG9zZSBhbmQgZmluYWxpemUgaXQgYW5kIHRyeSBpdHMgcGFyZW50LFxuLy8gYW5kIHNvIG9uIHRpbCB3ZSBmaW5kIGEgYmxvY2sgdGhhdCBjYW4gYWNjZXB0IGNoaWxkcmVuLlxudmFyIGFkZENoaWxkID0gZnVuY3Rpb24odGFnLCBvZmZzZXQpIHtcbiAgICB3aGlsZSAoIXRoaXMuYmxvY2tzW3RoaXMudGlwLnR5cGVdLmNhbkNvbnRhaW4odGFnKSkge1xuICAgICAgICB0aGlzLmZpbmFsaXplKHRoaXMudGlwLCB0aGlzLmxpbmVOdW1iZXIgLSAxKTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uX251bWJlciA9IG9mZnNldCArIDE7IC8vIG9mZnNldCAwID0gY29sdW1uIDFcbiAgICB2YXIgbmV3QmxvY2sgPSBuZXcgTm9kZSh0YWcsIFtbdGhpcy5saW5lTnVtYmVyLCBjb2x1bW5fbnVtYmVyXSwgWzAsIDBdXSk7XG4gICAgbmV3QmxvY2suX3N0cmluZ19jb250ZW50ID0gJyc7XG4gICAgdGhpcy50aXAuYXBwZW5kQ2hpbGQobmV3QmxvY2spO1xuICAgIHRoaXMudGlwID0gbmV3QmxvY2s7XG4gICAgcmV0dXJuIG5ld0Jsb2NrO1xufTtcblxuLy8gUGFyc2UgYSBsaXN0IG1hcmtlciBhbmQgcmV0dXJuIGRhdGEgb24gdGhlIG1hcmtlciAodHlwZSxcbi8vIHN0YXJ0LCBkZWxpbWl0ZXIsIGJ1bGxldCBjaGFyYWN0ZXIsIHBhZGRpbmcpIG9yIG51bGwuXG52YXIgcGFyc2VMaXN0TWFya2VyID0gZnVuY3Rpb24obG4sIG9mZnNldCwgaW5kZW50KSB7XG4gICAgdmFyIHJlc3QgPSBsbi5zbGljZShvZmZzZXQpO1xuICAgIHZhciBtYXRjaDtcbiAgICB2YXIgc3BhY2VzX2FmdGVyX21hcmtlcjtcbiAgICB2YXIgZGF0YSA9IHsgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgdGlnaHQ6IHRydWUsICAvLyBsaXN0cyBhcmUgdGlnaHQgYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgICBidWxsZXRDaGFyOiBudWxsLFxuICAgICAgICAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICBtYXJrZXJPZmZzZXQ6IGluZGVudCB9O1xuICAgIGlmICgobWF0Y2ggPSByZXN0Lm1hdGNoKHJlQnVsbGV0TGlzdE1hcmtlcikpKSB7XG4gICAgICAgIHNwYWNlc19hZnRlcl9tYXJrZXIgPSBtYXRjaFsxXS5sZW5ndGg7XG4gICAgICAgIGRhdGEudHlwZSA9ICdCdWxsZXQnO1xuICAgICAgICBkYXRhLmJ1bGxldENoYXIgPSBtYXRjaFswXVswXTtcblxuICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gcmVzdC5tYXRjaChyZU9yZGVyZWRMaXN0TWFya2VyKSkpIHtcbiAgICAgICAgc3BhY2VzX2FmdGVyX21hcmtlciA9IG1hdGNoWzNdLmxlbmd0aDtcbiAgICAgICAgZGF0YS50eXBlID0gJ09yZGVyZWQnO1xuICAgICAgICBkYXRhLnN0YXJ0ID0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgICAgICBkYXRhLmRlbGltaXRlciA9IG1hdGNoWzJdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgYmxhbmtfaXRlbSA9IG1hdGNoWzBdLmxlbmd0aCA9PT0gcmVzdC5sZW5ndGg7XG4gICAgaWYgKHNwYWNlc19hZnRlcl9tYXJrZXIgPj0gNSB8fFxuICAgICAgICBzcGFjZXNfYWZ0ZXJfbWFya2VyIDwgMSB8fFxuICAgICAgICBibGFua19pdGVtKSB7XG4gICAgICAgIGRhdGEucGFkZGluZyA9IG1hdGNoWzBdLmxlbmd0aCAtIHNwYWNlc19hZnRlcl9tYXJrZXIgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEucGFkZGluZyA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBsaXN0IGl0ZW1zIGFyZSBvZiB0aGUgc2FtZSB0eXBlLFxuLy8gd2l0aCB0aGUgc2FtZSBkZWxpbWl0ZXIgYW5kIGJ1bGxldCBjaGFyYWN0ZXIuICBUaGlzIGlzIHVzZWRcbi8vIGluIGFnZ2xvbWVyYXRpbmcgbGlzdCBpdGVtcyBpbnRvIGxpc3RzLlxudmFyIGxpc3RzTWF0Y2ggPSBmdW5jdGlvbihsaXN0X2RhdGEsIGl0ZW1fZGF0YSkge1xuICAgIHJldHVybiAobGlzdF9kYXRhLnR5cGUgPT09IGl0ZW1fZGF0YS50eXBlICYmXG4gICAgICAgICAgICBsaXN0X2RhdGEuZGVsaW1pdGVyID09PSBpdGVtX2RhdGEuZGVsaW1pdGVyICYmXG4gICAgICAgICAgICBsaXN0X2RhdGEuYnVsbGV0Q2hhciA9PT0gaXRlbV9kYXRhLmJ1bGxldENoYXIpO1xufTtcblxuLy8gRmluYWxpemUgYW5kIGNsb3NlIGFueSB1bm1hdGNoZWQgYmxvY2tzLiBSZXR1cm5zIHRydWUuXG52YXIgY2xvc2VVbm1hdGNoZWRCbG9ja3MgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuYWxsQ2xvc2VkKSB7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBibG9ja3Mgbm90IG1hdGNoZWRcbiAgICAgICAgd2hpbGUgKHRoaXMub2xkdGlwICE9PSB0aGlzLmxhc3RNYXRjaGVkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5vbGR0aXAuX3BhcmVudDtcbiAgICAgICAgICAgIHRoaXMuZmluYWxpemUodGhpcy5vbGR0aXAsIHRoaXMubGluZU51bWJlciAtIDEpO1xuICAgICAgICAgICAgdGhpcy5vbGR0aXAgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGxDbG9zZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbi8vICdmaW5hbGl6ZScgaXMgcnVuIHdoZW4gdGhlIGJsb2NrIGlzIGNsb3NlZC5cbi8vICdjb250aW51ZScgaXMgcnVuIHRvIGNoZWNrIHdoZXRoZXIgdGhlIGJsb2NrIGlzIGNvbnRpbnVpbmdcbi8vIGF0IGEgY2VydGFpbiBsaW5lIGFuZCBvZmZzZXQgKGUuZy4gd2hldGhlciBhIGJsb2NrIHF1b3RlXG4vLyBjb250YWlucyBhIGA+YC4gIEl0IHJldHVybnMgMCBmb3IgbWF0Y2hlZCwgMSBmb3Igbm90IG1hdGNoZWQsXG4vLyBhbmQgMiBmb3IgXCJ3ZSd2ZSBkZWFsdCB3aXRoIHRoaXMgbGluZSBjb21wbGV0ZWx5LCBnbyB0byBuZXh0LlwiXG52YXIgYmxvY2tzID0ge1xuICAgIERvY3VtZW50OiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCAhPT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgTGlzdDoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBibG9jay5fZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG5vbi1maW5hbCBsaXN0IGl0ZW0gZW5kaW5nIHdpdGggYmxhbmsgbGluZTpcbiAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGhCbGFua0xpbmUoaXRlbSkgJiYgaXRlbS5fbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBibG9jay5fbGlzdERhdGEudGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaW50byBjaGlsZHJlbiBvZiBsaXN0IGl0ZW0sIHRvIHNlZSBpZiB0aGVyZSBhcmVcbiAgICAgICAgICAgICAgICAvLyBzcGFjZXMgYmV0d2VlbiBhbnkgb2YgdGhlbTpcbiAgICAgICAgICAgICAgICB2YXIgc3ViaXRlbSA9IGl0ZW0uX2ZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHN1Yml0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoQmxhbmtMaW5lKHN1Yml0ZW0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5fbmV4dCB8fCBzdWJpdGVtLl9uZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suX2xpc3REYXRhLnRpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJpdGVtID0gc3ViaXRlbS5fbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uX25leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0ID09PSAnSXRlbScpOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBCbG9ja1F1b3RlOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgICAgIHZhciBsbiA9IHBhcnNlci5jdXJyZW50TGluZTtcbiAgICAgICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICAgICAgcGVlayhsbiwgcGFyc2VyLm5leHROb25zcGFjZSkgPT09IENfR1JFQVRFUlRIQU4pIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVlayhsbiwgcGFyc2VyLm9mZnNldCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLm9mZnNldCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0ICE9PSAnSXRlbScpOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBJdGVtOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHBhcnNlci5ibGFuaykge1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlci5pbmRlbnQgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YS5tYXJrZXJPZmZzZXQgK1xuICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChjb250YWluZXIuX2xpc3REYXRhLm1hcmtlck9mZnNldCArXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEucGFkZGluZywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCAhPT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgSGVhZGVyOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGEgaGVhZGVyIGNhbiBuZXZlciBjb250YWluZXIgPiAxIGxpbmUsIHNvIGZhaWwgdG8gbWF0Y2g6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIEhvcml6b250YWxSdWxlOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGFuIGhydWxlIGNhbiBuZXZlciBjb250YWluZXIgPiAxIGxpbmUsIHNvIGZhaWwgdG8gbWF0Y2g6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIENvZGVCbG9jazoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBsbiA9IHBhcnNlci5jdXJyZW50TGluZTtcbiAgICAgICAgICAgIHZhciBpbmRlbnQgPSBwYXJzZXIuaW5kZW50O1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5faXNGZW5jZWQpIHsgLy8gZmVuY2VkXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gKGluZGVudCA8PSAzICYmXG4gICAgICAgICAgICAgICAgICAgIGxuLmNoYXJBdChwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gY29udGFpbmVyLl9mZW5jZUNoYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgbG4uc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVDbG9zaW5nQ29kZUZlbmNlKSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzBdLmxlbmd0aCA+PSBjb250YWluZXIuX2ZlbmNlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3NpbmcgZmVuY2UgLSB3ZSdyZSBhdCBlbmQgb2YgbGluZSwgc28gd2UgY2FuIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuZmluYWxpemUoY29udGFpbmVyLCBwYXJzZXIubGluZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgb3B0aW9uYWwgc3BhY2VzIG9mIGZlbmNlIG9mZnNldFxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNvbnRhaW5lci5fZmVuY2VPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBwZWVrKGxuLCBwYXJzZXIub2Zmc2V0KSA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaW5kZW50ZWRcbiAgICAgICAgICAgICAgICBpZiAoaW5kZW50ID49IENPREVfSU5ERU5UKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KENPREVfSU5ERU5ULCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlci5ibGFuaykge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgaWYgKGJsb2NrLl9pc0ZlbmNlZCkgeyAvLyBmZW5jZWRcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBsaW5lIGJlY29tZXMgaW5mbyBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGJsb2NrLl9zdHJpbmdfY29udGVudDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3bGluZVBvcyA9IGNvbnRlbnQuaW5kZXhPZignXFxuJyk7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0TGluZSA9IGNvbnRlbnQuc2xpY2UoMCwgbmV3bGluZVBvcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3QgPSBjb250ZW50LnNsaWNlKG5ld2xpbmVQb3MgKyAxKTtcbiAgICAgICAgICAgICAgICBibG9jay5pbmZvID0gdW5lc2NhcGVTdHJpbmcoZmlyc3RMaW5lLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgYmxvY2suX2xpdGVyYWwgPSByZXN0O1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaW5kZW50ZWRcbiAgICAgICAgICAgICAgICBibG9jay5fbGl0ZXJhbCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC5yZXBsYWNlKC8oXFxuICopKyQvLCAnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5fc3RyaW5nX2NvbnRlbnQgPSBudWxsOyAvLyBhbGxvdyBHQ1xuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IHRydWVcbiAgICB9LFxuICAgIEh0bWxCbG9jazoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoKHBhcnNlci5ibGFuayAmJlxuICAgICAgICAgICAgICAgICAgICAgKGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA9PT0gNiB8fFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA9PT0gNykpID8gMSA6IDApO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgYmxvY2suX2xpdGVyYWwgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQucmVwbGFjZSgvKFxcbiAqKSskLywgJycpO1xuICAgICAgICAgICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gbnVsbDsgLy8gYWxsb3cgR0NcbiAgICAgICAgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiB0cnVlXG4gICAgfSxcbiAgICBQYXJhZ3JhcGg6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICAgICAgcmV0dXJuIChwYXJzZXIuYmxhbmsgPyAxIDogMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbihwYXJzZXIsIGJsb2NrKSB7XG4gICAgICAgICAgICB2YXIgcG9zO1xuICAgICAgICAgICAgdmFyIGhhc1JlZmVyZW5jZURlZnMgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gdHJ5IHBhcnNpbmcgdGhlIGJlZ2lubmluZyBhcyBsaW5rIHJlZmVyZW5jZSBkZWZpbml0aW9uczpcbiAgICAgICAgICAgIHdoaWxlIChwZWVrKGJsb2NrLl9zdHJpbmdfY29udGVudCwgMCkgPT09IENfT1BFTl9CUkFDS0VUICYmXG4gICAgICAgICAgICAgICAgICAgKHBvcyA9XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5pbmxpbmVQYXJzZXIucGFyc2VSZWZlcmVuY2UoYmxvY2suX3N0cmluZ19jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5yZWZtYXApKSkge1xuICAgICAgICAgICAgICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC5zbGljZShwb3MpO1xuICAgICAgICAgICAgICAgIGhhc1JlZmVyZW5jZURlZnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc1JlZmVyZW5jZURlZnMgJiYgaXNCbGFuayhibG9jay5fc3RyaW5nX2NvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sudW5saW5rKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogdHJ1ZVxuICAgIH1cbn07XG5cbi8vIGJsb2NrIHN0YXJ0IGZ1bmN0aW9ucy4gIFJldHVybiB2YWx1ZXM6XG4vLyAwID0gbm8gbWF0Y2hcbi8vIDEgPSBtYXRjaGVkIGNvbnRhaW5lciwga2VlcCBnb2luZ1xuLy8gMiA9IG1hdGNoZWQgbGVhZiwgbm8gbW9yZSBibG9jayBzdGFydHNcbnZhciBibG9ja1N0YXJ0cyA9IFtcbiAgICAvLyBibG9jayBxdW90ZVxuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgcGVlayhwYXJzZXIuY3VycmVudExpbmUsIHBhcnNlci5uZXh0Tm9uc3BhY2UpID09PSBDX0dSRUFURVJUSEFOKSB7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gb3B0aW9uYWwgZm9sbG93aW5nIHNwYWNlXG4gICAgICAgICAgICBpZiAocGVlayhwYXJzZXIuY3VycmVudExpbmUsIHBhcnNlci5vZmZzZXQpID09PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoMSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWRkQ2hpbGQoJ0Jsb2NrUXVvdGUnLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQVRYIGhlYWRlclxuICAgIGZ1bmN0aW9uKHBhcnNlcikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICAobWF0Y2ggPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVBVFhIZWFkZXJNYXJrZXIpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KG1hdGNoWzBdLmxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gcGFyc2VyLmFkZENoaWxkKCdIZWFkZXInLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5sZXZlbCA9IG1hdGNoWzBdLnRyaW0oKS5sZW5ndGg7IC8vIG51bWJlciBvZiAjc1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRyYWlsaW5nICMjI3M6XG4gICAgICAgICAgICBjb250YWluZXIuX3N0cmluZ19jb250ZW50ID1cbiAgICAgICAgICAgICAgICBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm9mZnNldCkucmVwbGFjZSgvXiAqIysgKiQvLCAnJykucmVwbGFjZSgvICsjKyAqJC8sICcnKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KHBhcnNlci5jdXJyZW50TGluZS5sZW5ndGggLSBwYXJzZXIub2Zmc2V0KTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRmVuY2VkIGNvZGUgYmxvY2tcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgKG1hdGNoID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlQ29kZUZlbmNlKSkpIHtcbiAgICAgICAgICAgIHZhciBmZW5jZUxlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnQ29kZUJsb2NrJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBjb250YWluZXIuX2lzRmVuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fZmVuY2VMZW5ndGggPSBmZW5jZUxlbmd0aDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fZmVuY2VDaGFyID0gbWF0Y2hbMF1bMF07XG4gICAgICAgICAgICBjb250YWluZXIuX2ZlbmNlT2Zmc2V0ID0gcGFyc2VyLmluZGVudDtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChmZW5jZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBIVE1MIGJsb2NrXG4gICAgZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHBlZWsocGFyc2VyLmN1cnJlbnRMaW5lLCBwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gQ19MRVNTVEhBTikge1xuICAgICAgICAgICAgdmFyIHMgPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICB2YXIgYmxvY2tUeXBlO1xuXG4gICAgICAgICAgICBmb3IgKGJsb2NrVHlwZSA9IDE7IGJsb2NrVHlwZSA8PSA3OyBibG9ja1R5cGUrKykge1xuICAgICAgICAgICAgICAgIGlmIChyZUh0bWxCbG9ja09wZW5bYmxvY2tUeXBlXS50ZXN0KHMpICYmXG4gICAgICAgICAgICAgICAgICAgIChibG9ja1R5cGUgPCA3IHx8XG4gICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudHlwZSAhPT0gJ1BhcmFncmFwaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBhZGp1c3QgcGFyc2VyLm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2VzIGFyZSBwYXJ0IG9mIHRoZSBIVE1MIGJsb2NrOlxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHBhcnNlci5hZGRDaGlsZCgnSHRtbEJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIGIuX2h0bWxCbG9ja1R5cGUgPSBibG9ja1R5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgfSxcblxuICAgIC8vIFNldGV4dCBoZWFkZXJcbiAgICBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICBjb250YWluZXIudHlwZSA9PT0gJ1BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgICAgICAgICAoY29udGFpbmVyLl9zdHJpbmdfY29udGVudC5pbmRleE9mKCdcXG4nKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX3N0cmluZ19jb250ZW50Lmxlbmd0aCAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgKChtYXRjaCA9IHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKS5tYXRjaChyZVNldGV4dEhlYWRlckxpbmUpKSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IG5ldyBOb2RlKCdIZWFkZXInLCBjb250YWluZXIuc291cmNlcG9zKTtcbiAgICAgICAgICAgIGhlYWRlci5sZXZlbCA9IG1hdGNoWzBdWzBdID09PSAnPScgPyAxIDogMjtcbiAgICAgICAgICAgIGhlYWRlci5fc3RyaW5nX2NvbnRlbnQgPSBjb250YWluZXIuX3N0cmluZ19jb250ZW50O1xuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEFmdGVyKGhlYWRlcik7XG4gICAgICAgICAgICBjb250YWluZXIudW5saW5rKCk7XG4gICAgICAgICAgICBwYXJzZXIudGlwID0gaGVhZGVyO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQocGFyc2VyLmN1cnJlbnRMaW5lLmxlbmd0aCAtIHBhcnNlci5vZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gaHJ1bGVcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHJlSHJ1bGUudGVzdChwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkpKSB7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZGRDaGlsZCgnSG9yaXpvbnRhbFJ1bGUnLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KHBhcnNlci5jdXJyZW50TGluZS5sZW5ndGggLSBwYXJzZXIub2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGxpc3QgaXRlbVxuICAgIGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKChkYXRhID0gcGFyc2VMaXN0TWFya2VyKHBhcnNlci5jdXJyZW50TGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5uZXh0Tm9uc3BhY2UsIHBhcnNlci5pbmRlbnQpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBpZiAocGFyc2VyLmluZGVudGVkICYmIHBhcnNlci50aXAudHlwZSAhPT0gJ0xpc3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgLy8gcmVjYWxjdWxhdGUgZGF0YS5wYWRkaW5nLCB0YWtpbmcgaW50byBhY2NvdW50IHRhYnM6XG4gICAgICAgICAgICBpID0gcGFyc2VyLmNvbHVtbjtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KGRhdGEucGFkZGluZywgZmFsc2UpO1xuICAgICAgICAgICAgZGF0YS5wYWRkaW5nID0gcGFyc2VyLmNvbHVtbiAtIGk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbGlzdCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChwYXJzZXIudGlwLnR5cGUgIT09ICdMaXN0JyB8fFxuICAgICAgICAgICAgICAgICEobGlzdHNNYXRjaChjb250YWluZXIuX2xpc3REYXRhLCBkYXRhKSkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0xpc3QnLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhID0gZGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBsaXN0IGl0ZW1cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnSXRlbScsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGluZGVudGVkIGNvZGUgYmxvY2tcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgaWYgKHBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgcGFyc2VyLnRpcC50eXBlICE9PSAnUGFyYWdyYXBoJyAmJlxuICAgICAgICAgICAgIXBhcnNlci5ibGFuaykge1xuICAgICAgICAgICAgLy8gaW5kZW50ZWQgY29kZVxuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoQ09ERV9JTkRFTlQsIHRydWUpO1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWRkQ2hpbGQoJ0NvZGVCbG9jaycsIHBhcnNlci5vZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICB9XG5cbl07XG5cbnZhciBhZHZhbmNlT2Zmc2V0ID0gZnVuY3Rpb24oY291bnQsIGNvbHVtbnMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGNvbHMgPSAwO1xuICAgIHZhciBjdXJyZW50TGluZSA9IHRoaXMuY3VycmVudExpbmU7XG4gICAgd2hpbGUgKGNvbHVtbnMgPyAoY29scyA8IGNvdW50KSA6IChpIDwgY291bnQpKSB7XG4gICAgICAgIGlmIChjdXJyZW50TGluZVt0aGlzLm9mZnNldCArIGldID09PSAnXFx0Jykge1xuICAgICAgICAgICAgY29scyArPSAoNCAtICh0aGlzLmNvbHVtbiAlIDQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbHMgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHRoaXMub2Zmc2V0ICs9IGk7XG4gICAgdGhpcy5jb2x1bW4gKz0gY29scztcbn07XG5cbnZhciBhZHZhbmNlTmV4dE5vbnNwYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vZmZzZXQgPSB0aGlzLm5leHROb25zcGFjZTtcbiAgICB0aGlzLmNvbHVtbiA9IHRoaXMubmV4dE5vbnNwYWNlQ29sdW1uO1xufTtcblxudmFyIGZpbmROZXh0Tm9uc3BhY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudExpbmUgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgIHZhciBpID0gdGhpcy5vZmZzZXQ7XG4gICAgdmFyIGNvbHMgPSB0aGlzLmNvbHVtbjtcbiAgICB2YXIgYztcblxuICAgIHdoaWxlICgoYyA9IGN1cnJlbnRMaW5lLmNoYXJBdChpKSkgIT09ICcnKSB7XG4gICAgICAgIGlmIChjID09PSAnICcpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbHMrKztcbiAgICAgICAgfSBlbHNlIGlmIChjID09PSAnXFx0Jykge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29scyArPSAoNCAtIChjb2xzICUgNCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ibGFuayA9IChjID09PSAnXFxuJyB8fCBjID09PSAnXFxyJyB8fCBjID09PSAnJyk7XG4gICAgdGhpcy5uZXh0Tm9uc3BhY2UgPSBpO1xuICAgIHRoaXMubmV4dE5vbnNwYWNlQ29sdW1uID0gY29scztcbiAgICB0aGlzLmluZGVudCA9IHRoaXMubmV4dE5vbnNwYWNlQ29sdW1uIC0gdGhpcy5jb2x1bW47XG4gICAgdGhpcy5pbmRlbnRlZCA9IHRoaXMuaW5kZW50ID49IENPREVfSU5ERU5UO1xufTtcblxuLy8gQW5hbHl6ZSBhIGxpbmUgb2YgdGV4dCBhbmQgdXBkYXRlIHRoZSBkb2N1bWVudCBhcHByb3ByaWF0ZWx5LlxuLy8gV2UgcGFyc2UgbWFya2Rvd24gdGV4dCBieSBjYWxsaW5nIHRoaXMgb24gZWFjaCBsaW5lIG9mIGlucHV0LFxuLy8gdGhlbiBmaW5hbGl6aW5nIHRoZSBkb2N1bWVudC5cbnZhciBpbmNvcnBvcmF0ZUxpbmUgPSBmdW5jdGlvbihsbikge1xuICAgIHZhciBhbGxfbWF0Y2hlZCA9IHRydWU7XG4gICAgdmFyIHQ7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5kb2M7XG4gICAgdGhpcy5vbGR0aXAgPSB0aGlzLnRpcDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5saW5lTnVtYmVyICs9IDE7XG5cbiAgICAvLyByZXBsYWNlIE5VTCBjaGFyYWN0ZXJzIGZvciBzZWN1cml0eVxuICAgIGlmIChsbi5pbmRleE9mKCdcXHUwMDAwJykgIT09IC0xKSB7XG4gICAgICAgIGxuID0gbG4ucmVwbGFjZSgvXFwwL2csICdcXHVGRkZEJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50TGluZSA9IGxuO1xuXG4gICAgLy8gRm9yIGVhY2ggY29udGFpbmluZyBibG9jaywgdHJ5IHRvIHBhcnNlIHRoZSBhc3NvY2lhdGVkIGxpbmUgc3RhcnQuXG4gICAgLy8gQmFpbCBvdXQgb24gZmFpbHVyZTogY29udGFpbmVyIHdpbGwgcG9pbnQgdG8gdGhlIGxhc3QgbWF0Y2hpbmcgYmxvY2suXG4gICAgLy8gU2V0IGFsbF9tYXRjaGVkIHRvIGZhbHNlIGlmIG5vdCBhbGwgY29udGFpbmVycyBtYXRjaC5cbiAgICB2YXIgbGFzdENoaWxkO1xuICAgIHdoaWxlICgobGFzdENoaWxkID0gY29udGFpbmVyLl9sYXN0Q2hpbGQpICYmIGxhc3RDaGlsZC5fb3Blbikge1xuICAgICAgICBjb250YWluZXIgPSBsYXN0Q2hpbGQ7XG5cbiAgICAgICAgdGhpcy5maW5kTmV4dE5vbnNwYWNlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmJsb2Nrc1tjb250YWluZXIudHlwZV0uY29udGludWUodGhpcywgY29udGFpbmVyKSkge1xuICAgICAgICBjYXNlIDA6IC8vIHdlJ3ZlIG1hdGNoZWQsIGtlZXAgZ29pbmdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6IC8vIHdlJ3ZlIGZhaWxlZCB0byBtYXRjaCBhIGJsb2NrXG4gICAgICAgICAgICBhbGxfbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogLy8gd2UndmUgaGl0IGVuZCBvZiBsaW5lIGZvciBmZW5jZWQgY29kZSBjbG9zZSBhbmQgY2FuIHJldHVyblxuICAgICAgICAgICAgdGhpcy5sYXN0TGluZUxlbmd0aCA9IGxuLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93ICdjb250aW51ZSByZXR1cm5lZCBpbGxlZ2FsIHZhbHVlLCBtdXN0IGJlIDAsIDEsIG9yIDInO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsX21hdGNoZWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5fcGFyZW50OyAvLyBiYWNrIHVwIHRvIGxhc3QgbWF0Y2hpbmcgYmxvY2tcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbGxDbG9zZWQgPSAoY29udGFpbmVyID09PSB0aGlzLm9sZHRpcCk7XG4gICAgdGhpcy5sYXN0TWF0Y2hlZENvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSd2ZSBoaXQgMm5kIGJsYW5rIGxpbmU7IGlmIHNvIGJyZWFrIG91dCBvZiBsaXN0OlxuICAgIGlmICh0aGlzLmJsYW5rICYmIGNvbnRhaW5lci5fbGFzdExpbmVCbGFuaykge1xuICAgICAgICB0aGlzLmJyZWFrT3V0T2ZMaXN0cyhjb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkTGVhZiA9IGNvbnRhaW5lci50eXBlICE9PSAnUGFyYWdyYXBoJyAmJlxuICAgICAgICAgICAgYmxvY2tzW2NvbnRhaW5lci50eXBlXS5hY2NlcHRzTGluZXM7XG4gICAgdmFyIHN0YXJ0cyA9IHRoaXMuYmxvY2tTdGFydHM7XG4gICAgdmFyIHN0YXJ0c0xlbiA9IHN0YXJ0cy5sZW5ndGg7XG4gICAgLy8gVW5sZXNzIGxhc3QgbWF0Y2hlZCBjb250YWluZXIgaXMgYSBjb2RlIGJsb2NrLCB0cnkgbmV3IGNvbnRhaW5lciBzdGFydHMsXG4gICAgLy8gYWRkaW5nIGNoaWxkcmVuIHRvIHRoZSBsYXN0IG1hdGNoZWQgY29udGFpbmVyOlxuICAgIHdoaWxlICghbWF0Y2hlZExlYWYpIHtcblxuICAgICAgICB0aGlzLmZpbmROZXh0Tm9uc3BhY2UoKTtcblxuICAgICAgICAvLyB0aGlzIGlzIGEgbGl0dGxlIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbjpcbiAgICAgICAgaWYgKCF0aGlzLmluZGVudGVkICYmXG4gICAgICAgICAgICAhcmVNYXliZVNwZWNpYWwudGVzdChsbi5zbGljZSh0aGlzLm5leHROb25zcGFjZSkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHN0YXJ0c0xlbikge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHN0YXJ0c1tpXSh0aGlzLCBjb250YWluZXIpO1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMudGlwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLnRpcDtcbiAgICAgICAgICAgICAgICBtYXRjaGVkTGVhZiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBzdGFydHNMZW4pIHsgLy8gbm90aGluZyBtYXRjaGVkXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hhdCByZW1haW5zIGF0IHRoZSBvZmZzZXQgaXMgYSB0ZXh0IGxpbmUuICBBZGQgdGhlIHRleHQgdG8gdGhlXG4gICAgLy8gYXBwcm9wcmlhdGUgY29udGFpbmVyLlxuXG4gICAvLyBGaXJzdCBjaGVjayBmb3IgYSBsYXp5IHBhcmFncmFwaCBjb250aW51YXRpb246XG4gICAgaWYgKCF0aGlzLmFsbENsb3NlZCAmJiAhdGhpcy5ibGFuayAmJlxuICAgICAgICB0aGlzLnRpcC50eXBlID09PSAnUGFyYWdyYXBoJykge1xuICAgICAgICAvLyBsYXp5IHBhcmFncmFwaCBjb250aW51YXRpb25cbiAgICAgICAgdGhpcy5hZGRMaW5lKCk7XG5cbiAgICB9IGVsc2UgeyAvLyBub3QgYSBsYXp5IGNvbnRpbnVhdGlvblxuXG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBibG9ja3Mgbm90IG1hdGNoZWRcbiAgICAgICAgdGhpcy5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICBpZiAodGhpcy5ibGFuayAmJiBjb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250YWluZXIubGFzdENoaWxkLl9sYXN0TGluZUJsYW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQgPSBjb250YWluZXIudHlwZTtcblxuICAgICAgICAvLyBCbG9jayBxdW90ZSBsaW5lcyBhcmUgbmV2ZXIgYmxhbmsgYXMgdGhleSBzdGFydCB3aXRoID5cbiAgICAgICAgLy8gYW5kIHdlIGRvbid0IGNvdW50IGJsYW5rcyBpbiBmZW5jZWQgY29kZSBmb3IgcHVycG9zZXMgb2YgdGlnaHQvbG9vc2VcbiAgICAgICAgLy8gbGlzdHMgb3IgYnJlYWtpbmcgb3V0IG9mIGxpc3RzLiAgV2UgYWxzbyBkb24ndCBzZXQgX2xhc3RMaW5lQmxhbmtcbiAgICAgICAgLy8gb24gYW4gZW1wdHkgbGlzdCBpdGVtLCBvciBpZiB3ZSBqdXN0IGNsb3NlZCBhIGZlbmNlZCBibG9jay5cbiAgICAgICAgdmFyIGxhc3RMaW5lQmxhbmsgPSB0aGlzLmJsYW5rICYmXG4gICAgICAgICAgICAhKHQgPT09ICdCbG9ja1F1b3RlJyB8fFxuICAgICAgICAgICAgICAodCA9PT0gJ0NvZGVCbG9jaycgJiYgY29udGFpbmVyLl9pc0ZlbmNlZCkgfHxcbiAgICAgICAgICAgICAgKHQgPT09ICdJdGVtJyAmJlxuICAgICAgICAgICAgICAgIWNvbnRhaW5lci5fZmlyc3RDaGlsZCAmJlxuICAgICAgICAgICAgICAgY29udGFpbmVyLnNvdXJjZXBvc1swXVswXSA9PT0gdGhpcy5saW5lTnVtYmVyKSk7XG5cbiAgICAgICAgLy8gcHJvcGFnYXRlIGxhc3RMaW5lQmxhbmsgdXAgdGhyb3VnaCBwYXJlbnRzOlxuICAgICAgICB2YXIgY29udCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNvbnQpIHtcbiAgICAgICAgICAgIGNvbnQuX2xhc3RMaW5lQmxhbmsgPSBsYXN0TGluZUJsYW5rO1xuICAgICAgICAgICAgY29udCA9IGNvbnQuX3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJsb2Nrc1t0XS5hY2NlcHRzTGluZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZSgpO1xuICAgICAgICAgICAgLy8gaWYgSHRtbEJsb2NrLCBjaGVjayBmb3IgZW5kIGNvbmRpdGlvblxuICAgICAgICAgICAgaWYgKHQgPT09ICdIdG1sQmxvY2snICYmXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLl9odG1sQmxvY2tUeXBlID49IDEgJiZcbiAgICAgICAgICAgICAgICBjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPD0gNSAmJlxuICAgICAgICAgICAgICAgIHJlSHRtbEJsb2NrQ2xvc2VbY29udGFpbmVyLl9odG1sQmxvY2tUeXBlXS50ZXN0KHRoaXMuY3VycmVudExpbmUuc2xpY2UodGhpcy5vZmZzZXQpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxpemUoY29udGFpbmVyLCB0aGlzLmxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vZmZzZXQgPCBsbi5sZW5ndGggJiYgIXRoaXMuYmxhbmspIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwYXJhZ3JhcGggY29udGFpbmVyIGZvciBsaW5lXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmFkZENoaWxkKCdQYXJhZ3JhcGgnLCB0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFzdExpbmVMZW5ndGggPSBsbi5sZW5ndGg7XG59O1xuXG4vLyBGaW5hbGl6ZSBhIGJsb2NrLiAgQ2xvc2UgaXQgYW5kIGRvIGFueSBuZWNlc3NhcnkgcG9zdHByb2Nlc3NpbmcsXG4vLyBlLmcuIGNyZWF0aW5nIHN0cmluZ19jb250ZW50IGZyb20gc3RyaW5ncywgc2V0dGluZyB0aGUgJ3RpZ2h0J1xuLy8gb3IgJ2xvb3NlJyBzdGF0dXMgb2YgYSBsaXN0LCBhbmQgcGFyc2luZyB0aGUgYmVnaW5uaW5nc1xuLy8gb2YgcGFyYWdyYXBocyBmb3IgcmVmZXJlbmNlIGRlZmluaXRpb25zLiAgUmVzZXQgdGhlIHRpcCB0byB0aGVcbi8vIHBhcmVudCBvZiB0aGUgY2xvc2VkIGJsb2NrLlxudmFyIGZpbmFsaXplID0gZnVuY3Rpb24oYmxvY2ssIGxpbmVOdW1iZXIpIHtcbiAgICB2YXIgYWJvdmUgPSBibG9jay5fcGFyZW50O1xuICAgIGJsb2NrLl9vcGVuID0gZmFsc2U7XG4gICAgYmxvY2suc291cmNlcG9zWzFdID0gW2xpbmVOdW1iZXIsIHRoaXMubGFzdExpbmVMZW5ndGhdO1xuXG4gICAgdGhpcy5ibG9ja3NbYmxvY2sudHlwZV0uZmluYWxpemUodGhpcywgYmxvY2spO1xuXG4gICAgdGhpcy50aXAgPSBhYm92ZTtcbn07XG5cbi8vIFdhbGsgdGhyb3VnaCBhIGJsb2NrICYgY2hpbGRyZW4gcmVjdXJzaXZlbHksIHBhcnNpbmcgc3RyaW5nIGNvbnRlbnRcbi8vIGludG8gaW5saW5lIGNvbnRlbnQgd2hlcmUgYXBwcm9wcmlhdGUuXG52YXIgcHJvY2Vzc0lubGluZXMgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBub2RlLCBldmVudCwgdDtcbiAgICB2YXIgd2Fsa2VyID0gYmxvY2sud2Fsa2VyKCk7XG4gICAgdGhpcy5pbmxpbmVQYXJzZXIucmVmbWFwID0gdGhpcy5yZWZtYXA7XG4gICAgdGhpcy5pbmxpbmVQYXJzZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB3aGlsZSAoKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkpIHtcbiAgICAgICAgbm9kZSA9IGV2ZW50Lm5vZGU7XG4gICAgICAgIHQgPSBub2RlLnR5cGU7XG4gICAgICAgIGlmICghZXZlbnQuZW50ZXJpbmcgJiYgKHQgPT09ICdQYXJhZ3JhcGgnIHx8IHQgPT09ICdIZWFkZXInKSkge1xuICAgICAgICAgICAgdGhpcy5pbmxpbmVQYXJzZXIucGFyc2Uobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgRG9jdW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jID0gbmV3IE5vZGUoJ0RvY3VtZW50JywgW1sxLCAxXSwgWzAsIDBdXSk7XG4gICAgcmV0dXJuIGRvYztcbn07XG5cbi8vIFRoZSBtYWluIHBhcnNpbmcgZnVuY3Rpb24uICBSZXR1cm5zIGEgcGFyc2VkIGRvY3VtZW50IEFTVC5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5kb2MgPSBuZXcgRG9jdW1lbnQoKTtcbiAgICB0aGlzLnRpcCA9IHRoaXMuZG9jO1xuICAgIHRoaXMucmVmbWFwID0ge307XG4gICAgdGhpcy5saW5lTnVtYmVyID0gMDtcbiAgICB0aGlzLmxhc3RMaW5lTGVuZ3RoID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5jb2x1bW4gPSAwO1xuICAgIHRoaXMubGFzdE1hdGNoZWRDb250YWluZXIgPSB0aGlzLmRvYztcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gXCJcIjtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwicHJlcGFyaW5nIGlucHV0XCIpOyB9XG4gICAgdmFyIGxpbmVzID0gaW5wdXQuc3BsaXQocmVMaW5lRW5kaW5nKTtcbiAgICB2YXIgbGVuID0gbGluZXMubGVuZ3RoO1xuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpID09PSBDX05FV0xJTkUpIHtcbiAgICAgICAgLy8gaWdub3JlIGxhc3QgYmxhbmsgbGluZSBjcmVhdGVkIGJ5IGZpbmFsIG5ld2xpbmVcbiAgICAgICAgbGVuIC09IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJwcmVwYXJpbmcgaW5wdXRcIik7IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwiYmxvY2sgcGFyc2luZ1wiKTsgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5pbmNvcnBvcmF0ZUxpbmUobGluZXNbaV0pO1xuICAgIH1cbiAgICB3aGlsZSAodGhpcy50aXApIHtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSh0aGlzLnRpcCwgbGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcImJsb2NrIHBhcnNpbmdcIik7IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwiaW5saW5lIHBhcnNpbmdcIik7IH1cbiAgICB0aGlzLnByb2Nlc3NJbmxpbmVzKHRoaXMuZG9jKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwiaW5saW5lIHBhcnNpbmdcIik7IH1cbiAgICByZXR1cm4gdGhpcy5kb2M7XG59O1xuXG5cbi8vIFRoZSBQYXJzZXIgb2JqZWN0LlxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIGRvYzogbmV3IERvY3VtZW50KCksXG4gICAgICAgIGJsb2NrczogYmxvY2tzLFxuICAgICAgICBibG9ja1N0YXJ0czogYmxvY2tTdGFydHMsXG4gICAgICAgIHRpcDogdGhpcy5kb2MsXG4gICAgICAgIG9sZHRpcDogdGhpcy5kb2MsXG4gICAgICAgIGN1cnJlbnRMaW5lOiBcIlwiLFxuICAgICAgICBsaW5lTnVtYmVyOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGNvbHVtbjogMCxcbiAgICAgICAgbmV4dE5vbnNwYWNlOiAwLFxuICAgICAgICBuZXh0Tm9uc3BhY2VDb2x1bW46IDAsXG4gICAgICAgIGluZGVudDogMCxcbiAgICAgICAgaW5kZW50ZWQ6IGZhbHNlLFxuICAgICAgICBibGFuazogZmFsc2UsXG4gICAgICAgIGFsbENsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGFzdE1hdGNoZWRDb250YWluZXI6IHRoaXMuZG9jLFxuICAgICAgICByZWZtYXA6IHt9LFxuICAgICAgICBsYXN0TGluZUxlbmd0aDogMCxcbiAgICAgICAgaW5saW5lUGFyc2VyOiBuZXcgSW5saW5lUGFyc2VyKG9wdGlvbnMpLFxuICAgICAgICBmaW5kTmV4dE5vbnNwYWNlOiBmaW5kTmV4dE5vbnNwYWNlLFxuICAgICAgICBhZHZhbmNlT2Zmc2V0OiBhZHZhbmNlT2Zmc2V0LFxuICAgICAgICBhZHZhbmNlTmV4dE5vbnNwYWNlOiBhZHZhbmNlTmV4dE5vbnNwYWNlLFxuICAgICAgICBicmVha091dE9mTGlzdHM6IGJyZWFrT3V0T2ZMaXN0cyxcbiAgICAgICAgYWRkTGluZTogYWRkTGluZSxcbiAgICAgICAgYWRkQ2hpbGQ6IGFkZENoaWxkLFxuICAgICAgICBpbmNvcnBvcmF0ZUxpbmU6IGluY29ycG9yYXRlTGluZSxcbiAgICAgICAgZmluYWxpemU6IGZpbmFsaXplLFxuICAgICAgICBwcm9jZXNzSW5saW5lczogcHJvY2Vzc0lubGluZXMsXG4gICAgICAgIGNsb3NlVW5tYXRjaGVkQmxvY2tzOiBjbG9zZVVubWF0Y2hlZEJsb2NrcyxcbiAgICAgICAgcGFyc2U6IHBhcnNlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9ibG9ja3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdtZHVybC9kZWNvZGUnKTtcblxudmFyIENfQkFDS1NMQVNIID0gOTI7XG5cbnZhciBkZWNvZGVIVE1MID0gcmVxdWlyZSgnZW50aXRpZXMnKS5kZWNvZGVIVE1MO1xuXG52YXIgRU5USVRZID0gXCImKD86I3hbYS1mMC05XXsxLDh9fCNbMC05XXsxLDh9fFthLXpdW2EtejAtOV17MSwzMX0pO1wiO1xuXG52YXIgVEFHTkFNRSA9ICdbQS1aYS16XVtBLVphLXowLTktXSonO1xudmFyIEFUVFJJQlVURU5BTUUgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonO1xudmFyIFVOUVVPVEVEVkFMVUUgPSBcIlteXFxcIic9PD5gXFxcXHgwMC1cXFxceDIwXStcIjtcbnZhciBTSU5HTEVRVU9URURWQUxVRSA9IFwiJ1teJ10qJ1wiO1xudmFyIERPVUJMRVFVT1RFRFZBTFVFID0gJ1wiW15cIl0qXCInO1xudmFyIEFUVFJJQlVURVZBTFVFID0gXCIoPzpcIiArIFVOUVVPVEVEVkFMVUUgKyBcInxcIiArIFNJTkdMRVFVT1RFRFZBTFVFICsgXCJ8XCIgKyBET1VCTEVRVU9URURWQUxVRSArIFwiKVwiO1xudmFyIEFUVFJJQlVURVZBTFVFU1BFQyA9IFwiKD86XCIgKyBcIlxcXFxzKj1cIiArIFwiXFxcXHMqXCIgKyBBVFRSSUJVVEVWQUxVRSArIFwiKVwiO1xudmFyIEFUVFJJQlVURSA9IFwiKD86XCIgKyBcIlxcXFxzK1wiICsgQVRUUklCVVRFTkFNRSArIEFUVFJJQlVURVZBTFVFU1BFQyArIFwiPylcIjtcbnZhciBPUEVOVEFHID0gXCI8XCIgKyBUQUdOQU1FICsgQVRUUklCVVRFICsgXCIqXCIgKyBcIlxcXFxzKi8/PlwiO1xudmFyIENMT1NFVEFHID0gXCI8L1wiICsgVEFHTkFNRSArIFwiXFxcXHMqWz5dXCI7XG52YXIgSFRNTENPTU1FTlQgPSBcIjwhLS0tLT58PCEtLSg/Oi0/W14+LV0pKD86LT9bXi1dKSotLT5cIjtcbnZhciBQUk9DRVNTSU5HSU5TVFJVQ1RJT04gPSBcIls8XVs/XS4qP1s/XVs+XVwiO1xudmFyIERFQ0xBUkFUSU9OID0gXCI8IVtBLVpdK1wiICsgXCJcXFxccytbXj5dKj5cIjtcbnZhciBDREFUQSA9IFwiPCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+XCI7XG52YXIgSFRNTFRBRyA9IFwiKD86XCIgKyBPUEVOVEFHICsgXCJ8XCIgKyBDTE9TRVRBRyArIFwifFwiICsgSFRNTENPTU1FTlQgKyBcInxcIiArXG4gICAgICAgIFBST0NFU1NJTkdJTlNUUlVDVElPTiArIFwifFwiICsgREVDTEFSQVRJT04gKyBcInxcIiArIENEQVRBICsgXCIpXCI7XG52YXIgcmVIdG1sVGFnID0gbmV3IFJlZ0V4cCgnXicgKyBIVE1MVEFHLCAnaScpO1xuXG52YXIgcmVCYWNrc2xhc2hPckFtcCA9IC9bXFxcXCZdLztcblxudmFyIEVTQ0FQQUJMRSA9ICdbIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW1xcXFxcXFxcXFxcXF1eX2B7fH1+LV0nO1xuXG52YXIgcmVFbnRpdHlPckVzY2FwZWRDaGFyID0gbmV3IFJlZ0V4cCgnXFxcXFxcXFwnICsgRVNDQVBBQkxFICsgJ3wnICsgRU5USVRZLCAnZ2knKTtcblxudmFyIFhNTFNQRUNJQUwgPSAnWyY8PlwiXSc7XG5cbnZhciByZVhtbFNwZWNpYWwgPSBuZXcgUmVnRXhwKFhNTFNQRUNJQUwsICdnJyk7XG5cbnZhciByZVhtbFNwZWNpYWxPckVudGl0eSA9IG5ldyBSZWdFeHAoRU5USVRZICsgJ3wnICsgWE1MU1BFQ0lBTCwgJ2dpJyk7XG5cbnZhciB1bmVzY2FwZUNoYXIgPSBmdW5jdGlvbihzKSB7XG4gICAgaWYgKHMuY2hhckNvZGVBdCgwKSA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgICAgcmV0dXJuIHMuY2hhckF0KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVIVE1MKHMpO1xuICAgIH1cbn07XG5cbi8vIFJlcGxhY2UgZW50aXRpZXMgYW5kIGJhY2tzbGFzaCBlc2NhcGVzIHdpdGggbGl0ZXJhbCBjaGFyYWN0ZXJzLlxudmFyIHVuZXNjYXBlU3RyaW5nID0gZnVuY3Rpb24ocykge1xuICAgIGlmIChyZUJhY2tzbGFzaE9yQW1wLnRlc3QocykpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZShyZUVudGl0eU9yRXNjYXBlZENoYXIsIHVuZXNjYXBlQ2hhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufTtcblxudmFyIG5vcm1hbGl6ZVVSSSA9IGZ1bmN0aW9uKHVyaSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBlbmNvZGUoZGVjb2RlKHVyaSkpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHVyaTtcbiAgICB9XG59O1xuXG52YXIgcmVwbGFjZVVuc2FmZUNoYXIgPSBmdW5jdGlvbihzKSB7XG4gICAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAnJic6XG4gICAgICAgIHJldHVybiAnJmFtcDsnO1xuICAgIGNhc2UgJzwnOlxuICAgICAgICByZXR1cm4gJyZsdDsnO1xuICAgIGNhc2UgJz4nOlxuICAgICAgICByZXR1cm4gJyZndDsnO1xuICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcmV0dXJuICcmcXVvdDsnO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn07XG5cbnZhciBlc2NhcGVYbWwgPSBmdW5jdGlvbihzLCBwcmVzZXJ2ZV9lbnRpdGllcykge1xuICAgIGlmIChyZVhtbFNwZWNpYWwudGVzdChzKSkge1xuICAgICAgICBpZiAocHJlc2VydmVfZW50aXRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UocmVYbWxTcGVjaWFsT3JFbnRpdHksIHJlcGxhY2VVbnNhZmVDaGFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UocmVYbWxTcGVjaWFsLCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdW5lc2NhcGVTdHJpbmc6IHVuZXNjYXBlU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVVSSTogbm9ybWFsaXplVVJJLFxuICAgICAgICAgICAgICAgICAgIGVzY2FwZVhtbDogZXNjYXBlWG1sLFxuICAgICAgICAgICAgICAgICAgIHJlSHRtbFRhZzogcmVIdG1sVGFnLFxuICAgICAgICAgICAgICAgICAgIE9QRU5UQUc6IE9QRU5UQUcsXG4gICAgICAgICAgICAgICAgICAgQ0xPU0VUQUc6IENMT1NFVEFHLFxuICAgICAgICAgICAgICAgICAgIEVOVElUWTogRU5USVRZLFxuICAgICAgICAgICAgICAgICAgIEVTQ0FQQUJMRTogRVNDQVBBQkxFXG4gICAgICAgICAgICAgICAgIH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9jb21tb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGVuY29kZUNhY2hlID0ge307XG5cblxuLy8gQ3JlYXRlIGEgbG9va3VwIGFycmF5IHdoZXJlIGFueXRoaW5nIGJ1dCBjaGFyYWN0ZXJzIGluIGBjaGFyc2Agc3RyaW5nXG4vLyBhbmQgYWxwaGFudW1lcmljIGNoYXJzIGlzIHBlcmNlbnQtZW5jb2RlZC5cbi8vXG5mdW5jdGlvbiBnZXRFbmNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG5cbiAgICBpZiAoL15bMC05YS16XSQvaS50ZXN0KGNoKSkge1xuICAgICAgLy8gYWx3YXlzIGFsbG93IHVuZW5jb2RlZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVyc1xuICAgICAgY2FjaGUucHVzaChjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLnB1c2goJyUnICsgKCcwJyArIGkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4Y2x1ZGUubGVuZ3RoOyBpKyspIHtcbiAgICBjYWNoZVtleGNsdWRlLmNoYXJDb2RlQXQoaSldID0gZXhjbHVkZVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuXG4vLyBFbmNvZGUgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nLCBza2lwcGluZyBhbHJlYWR5XG4vLyBlbmNvZGVkIHNlcXVlbmNlcy5cbi8vXG4vLyAgLSBzdHJpbmcgICAgICAgLSBzdHJpbmcgdG8gZW5jb2RlXG4vLyAgLSBleGNsdWRlICAgICAgLSBsaXN0IG9mIGNoYXJhY3RlcnMgdG8gaWdub3JlIChpbiBhZGRpdGlvbiB0byBhLXpBLVowLTkpXG4vLyAgLSBrZWVwRXNjYXBlZCAgLSBkb24ndCBlbmNvZGUgJyUnIGluIGEgY29ycmVjdCBlc2NhcGUgc2VxdWVuY2UgKGRlZmF1bHQ6IHRydWUpXG4vL1xuZnVuY3Rpb24gZW5jb2RlKHN0cmluZywgZXhjbHVkZSwga2VlcEVzY2FwZWQpIHtcbiAgdmFyIGksIGwsIGNvZGUsIG5leHRDb2RlLCBjYWNoZSxcbiAgICAgIHJlc3VsdCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBlbmNvZGUoc3RyaW5nLCBrZWVwRXNjYXBlZClcbiAgICBrZWVwRXNjYXBlZCAgPSBleGNsdWRlO1xuICAgIGV4Y2x1ZGUgPSBlbmNvZGUuZGVmYXVsdENoYXJzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZWVwRXNjYXBlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBrZWVwRXNjYXBlZCA9IHRydWU7XG4gIH1cblxuICBjYWNoZSA9IGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpO1xuXG4gIGZvciAoaSA9IDAsIGwgPSBzdHJpbmcubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGtlZXBFc2NhcGVkICYmIGNvZGUgPT09IDB4MjUgLyogJSAqLyAmJiBpICsgMiA8IGwpIHtcbiAgICAgIGlmICgvXlswLTlhLWZdezJ9JC9pLnRlc3Qoc3RyaW5nLnNsaWNlKGkgKyAxLCBpICsgMykpKSB7XG4gICAgICAgIHJlc3VsdCArPSBzdHJpbmcuc2xpY2UoaSwgaSArIDMpO1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICByZXN1bHQgKz0gY2FjaGVbY29kZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERGRkYpIHtcbiAgICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REJGRiAmJiBpICsgMSA8IGwpIHtcbiAgICAgICAgbmV4dENvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIGlmIChuZXh0Q29kZSA+PSAweERDMDAgJiYgbmV4dENvZGUgPD0gMHhERkZGKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0gKyBzdHJpbmdbaSArIDFdKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnJUVGJUJGJUJEJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmVuY29kZS5kZWZhdWx0Q2hhcnMgICA9IFwiOy8/OkAmPSskLC1fLiF+KicoKSNcIjtcbmVuY29kZS5jb21wb25lbnRDaGFycyA9IFwiLV8uIX4qJygpXCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vbWR1cmwvZW5jb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxudmFyIGRlY29kZUNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldERlY29kZUNhY2hlKGV4Y2x1ZGUpIHtcbiAgdmFyIGksIGNoLCBjYWNoZSA9IGRlY29kZUNhY2hlW2V4Y2x1ZGVdO1xuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlOyB9XG5cbiAgY2FjaGUgPSBkZWNvZGVDYWNoZVtleGNsdWRlXSA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICBjYWNoZS5wdXNoKGNoKTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2ggPSBleGNsdWRlLmNoYXJDb2RlQXQoaSk7XG4gICAgY2FjaGVbY2hdID0gJyUnICsgKCcwJyArIGNoLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMik7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRGVjb2RlIHBlcmNlbnQtZW5jb2RlZCBzdHJpbmcuXG4vL1xuZnVuY3Rpb24gZGVjb2RlKHN0cmluZywgZXhjbHVkZSkge1xuICB2YXIgY2FjaGU7XG5cbiAgaWYgKHR5cGVvZiBleGNsdWRlICE9PSAnc3RyaW5nJykge1xuICAgIGV4Y2x1ZGUgPSBkZWNvZGUuZGVmYXVsdENoYXJzO1xuICB9XG5cbiAgY2FjaGUgPSBnZXREZWNvZGVDYWNoZShleGNsdWRlKTtcblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyglW2EtZjAtOV17Mn0pKy9naSwgZnVuY3Rpb24oc2VxKSB7XG4gICAgdmFyIGksIGwsIGIxLCBiMiwgYjMsIGI0LCBjaGFyLFxuICAgICAgICByZXN1bHQgPSAnJztcblxuICAgIGZvciAoaSA9IDAsIGwgPSBzZXEubGVuZ3RoOyBpIDwgbDsgaSArPSAzKSB7XG4gICAgICBiMSA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMSwgaSArIDMpLCAxNik7XG5cbiAgICAgIGlmIChiMSA8IDB4ODApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNhY2hlW2IxXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEUwKSA9PT0gMHhDMCAmJiAoaSArIDMgPCBsKSkge1xuICAgICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hhciA9ICgoYjEgPDwgNikgJiAweDdDMCkgfCAoYjIgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaGFyIDwgMHg4MCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGMCkgPT09IDB4RTAgJiYgKGkgKyA2IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuICAgICAgICBiMyA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNywgaSArIDkpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hhciA9ICgoYjEgPDwgMTIpICYgMHhGMDAwKSB8ICgoYjIgPDwgNikgJiAweEZDMCkgfCAoYjMgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaGFyIDwgMHg4MDAgfHwgKGNoYXIgPj0gMHhEODAwICYmIGNoYXIgPD0gMHhERkZGKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDY7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RjgpID09PSAweEYwICYmIChpICsgOSA8IGwpKSB7XG4gICAgICAgIC8vIDExMTExMHh4IDEweHh4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KTtcbiAgICAgICAgYjMgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDcsIGkgKyA5KSwgMTYpO1xuICAgICAgICBiNCA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMTAsIGkgKyAxMiksIDE2KTtcblxuICAgICAgICBpZiAoKGIyICYgMHhDMCkgPT09IDB4ODAgJiYgKGIzICYgMHhDMCkgPT09IDB4ODAgJiYgKGI0ICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICBjaGFyID0gKChiMSA8PCAxOCkgJiAweDFDMDAwMCkgfCAoKGIyIDw8IDEyKSAmIDB4M0YwMDApIHwgKChiMyA8PCA2KSAmIDB4RkMwKSB8IChiNCAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPCAweDEwMDAwIHx8IGNoYXIgPiAweDEwRkZGRikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZFxcdWZmZmRcXHVmZmZkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhciAtPSAweDEwMDAwO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwICsgKGNoYXIgPj4gMTApLCAweERDMDAgKyAoY2hhciAmIDB4M0ZGKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA5O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59XG5cblxuZGVjb2RlLmRlZmF1bHRDaGFycyAgID0gJzsvPzpAJj0rJCwjJztcbmRlY29kZS5jb21wb25lbnRDaGFycyA9ICcnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L21kdXJsL2RlY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZW5jb2RlID0gcmVxdWlyZShcIi4vbGliL2VuY29kZS5qc1wiKSxcbiAgICBkZWNvZGUgPSByZXF1aXJlKFwiLi9saWIvZGVjb2RlLmpzXCIpO1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKGRhdGEsIGxldmVsKXtcblx0cmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZS5YTUwgOiBkZWNvZGUuSFRNTCkoZGF0YSk7XG59O1xuXG5leHBvcnRzLmRlY29kZVN0cmljdCA9IGZ1bmN0aW9uKGRhdGEsIGxldmVsKXtcblx0cmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZS5YTUwgOiBkZWNvZGUuSFRNTFN0cmljdCkoZGF0YSk7XG59O1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGRhdGEsIGxldmVsKXtcblx0cmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGVuY29kZS5YTUwgOiBlbmNvZGUuSFRNTCkoZGF0YSk7XG59O1xuXG5leHBvcnRzLmVuY29kZVhNTCA9IGVuY29kZS5YTUw7XG5cbmV4cG9ydHMuZW5jb2RlSFRNTDQgPVxuZXhwb3J0cy5lbmNvZGVIVE1MNSA9XG5leHBvcnRzLmVuY29kZUhUTUwgID0gZW5jb2RlLkhUTUw7XG5cbmV4cG9ydHMuZGVjb2RlWE1MID1cbmV4cG9ydHMuZGVjb2RlWE1MU3RyaWN0ID0gZGVjb2RlLlhNTDtcblxuZXhwb3J0cy5kZWNvZGVIVE1MNCA9XG5leHBvcnRzLmRlY29kZUhUTUw1ID1cbmV4cG9ydHMuZGVjb2RlSFRNTCA9IGRlY29kZS5IVE1MO1xuXG5leHBvcnRzLmRlY29kZUhUTUw0U3RyaWN0ID1cbmV4cG9ydHMuZGVjb2RlSFRNTDVTdHJpY3QgPVxuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZGVjb2RlLkhUTUxTdHJpY3Q7XG5cbmV4cG9ydHMuZXNjYXBlID0gZW5jb2RlLmVzY2FwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaW52ZXJzZVhNTCA9IGdldEludmVyc2VPYmoocmVxdWlyZShcIi4uL21hcHMveG1sLmpzb25cIikpLFxuICAgIHhtbFJlcGxhY2VyID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VYTUwpO1xuXG5leHBvcnRzLlhNTCA9IGdldEludmVyc2UoaW52ZXJzZVhNTCwgeG1sUmVwbGFjZXIpO1xuXG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKHJlcXVpcmUoXCIuLi9tYXBzL2VudGl0aWVzLmpzb25cIikpLFxuICAgIGh0bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlSFRNTCk7XG5cbmV4cG9ydHMuSFRNTCA9IGdldEludmVyc2UoaW52ZXJzZUhUTUwsIGh0bWxSZXBsYWNlcik7XG5cbmZ1bmN0aW9uIGdldEludmVyc2VPYmoob2JqKXtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZShmdW5jdGlvbihpbnZlcnNlLCBuYW1lKXtcblx0XHRpbnZlcnNlW29ialtuYW1lXV0gPSBcIiZcIiArIG5hbWUgKyBcIjtcIjtcblx0XHRyZXR1cm4gaW52ZXJzZTtcblx0fSwge30pO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZSl7XG5cdHZhciBzaW5nbGUgPSBbXSxcblx0ICAgIG11bHRpcGxlID0gW107XG5cblx0T2JqZWN0LmtleXMoaW52ZXJzZSkuZm9yRWFjaChmdW5jdGlvbihrKXtcblx0XHRpZihrLmxlbmd0aCA9PT0gMSl7XG5cdFx0XHRzaW5nbGUucHVzaChcIlxcXFxcIiArIGspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtdWx0aXBsZS5wdXNoKGspO1xuXHRcdH1cblx0fSk7XG5cblx0Ly9UT0RPIGFkZCByYW5nZXNcblx0bXVsdGlwbGUudW5zaGlmdChcIltcIiArIHNpbmdsZS5qb2luKFwiXCIpICsgXCJdXCIpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKG11bHRpcGxlLmpvaW4oXCJ8XCIpLCBcImdcIik7XG59XG5cbnZhciByZV9ub25BU0NJSSA9IC9bXlxcMC1cXHg3Rl0vZyxcbiAgICByZV9hc3RyYWxTeW1ib2xzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZztcblxuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpe1xuXHRyZXR1cm4gXCImI3hcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuXG5mdW5jdGlvbiBhc3RyYWxSZXBsYWNlcihjKXtcblx0Ly8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcblx0dmFyIGhpZ2ggPSBjLmNoYXJDb2RlQXQoMCk7XG5cdHZhciBsb3cgID0gYy5jaGFyQ29kZUF0KDEpO1xuXHR2YXIgY29kZVBvaW50ID0gKGhpZ2ggLSAweEQ4MDApICogMHg0MDAgKyBsb3cgLSAweERDMDAgKyAweDEwMDAwO1xuXHRyZXR1cm4gXCImI3hcIiArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZlcnNlKGludmVyc2UsIHJlKXtcblx0ZnVuY3Rpb24gZnVuYyhuYW1lKXtcblx0XHRyZXR1cm4gaW52ZXJzZVtuYW1lXTtcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbihkYXRhKXtcblx0XHRyZXR1cm4gZGF0YVxuXHRcdFx0XHQucmVwbGFjZShyZSwgZnVuYylcblx0XHRcdFx0LnJlcGxhY2UocmVfYXN0cmFsU3ltYm9scywgYXN0cmFsUmVwbGFjZXIpXG5cdFx0XHRcdC5yZXBsYWNlKHJlX25vbkFTQ0lJLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xuXHR9O1xufVxuXG52YXIgcmVfeG1sQ2hhcnMgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG5cbmZ1bmN0aW9uIGVzY2FwZVhNTChkYXRhKXtcblx0cmV0dXJuIGRhdGFcblx0XHRcdC5yZXBsYWNlKHJlX3htbENoYXJzLCBzaW5nbGVDaGFyUmVwbGFjZXIpXG5cdFx0XHQucmVwbGFjZShyZV9hc3RyYWxTeW1ib2xzLCBhc3RyYWxSZXBsYWNlcilcblx0XHRcdC5yZXBsYWNlKHJlX25vbkFTQ0lJLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xufVxuXG5leHBvcnRzLmVzY2FwZSA9IGVzY2FwZVhNTDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZW5jb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFtcFwiOiBcIiZcIixcblx0XCJhcG9zXCI6IFwiJ1wiLFxuXHRcImd0XCI6IFwiPlwiLFxuXHRcImx0XCI6IFwiPFwiLFxuXHRcInF1b3RcIjogXCJcXFwiXCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy94bWwuanNvblxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBYWN1dGVcIjogXCLDgVwiLFxuXHRcImFhY3V0ZVwiOiBcIsOhXCIsXG5cdFwiQWJyZXZlXCI6IFwixIJcIixcblx0XCJhYnJldmVcIjogXCLEg1wiLFxuXHRcImFjXCI6IFwi4oi+XCIsXG5cdFwiYWNkXCI6IFwi4oi/XCIsXG5cdFwiYWNFXCI6IFwi4oi+zLNcIixcblx0XCJBY2lyY1wiOiBcIsOCXCIsXG5cdFwiYWNpcmNcIjogXCLDolwiLFxuXHRcImFjdXRlXCI6IFwiwrRcIixcblx0XCJBY3lcIjogXCLQkFwiLFxuXHRcImFjeVwiOiBcItCwXCIsXG5cdFwiQUVsaWdcIjogXCLDhlwiLFxuXHRcImFlbGlnXCI6IFwiw6ZcIixcblx0XCJhZlwiOiBcIuKBoVwiLFxuXHRcIkFmclwiOiBcIvCdlIRcIixcblx0XCJhZnJcIjogXCLwnZSeXCIsXG5cdFwiQWdyYXZlXCI6IFwiw4BcIixcblx0XCJhZ3JhdmVcIjogXCLDoFwiLFxuXHRcImFsZWZzeW1cIjogXCLihLVcIixcblx0XCJhbGVwaFwiOiBcIuKEtVwiLFxuXHRcIkFscGhhXCI6IFwizpFcIixcblx0XCJhbHBoYVwiOiBcIs6xXCIsXG5cdFwiQW1hY3JcIjogXCLEgFwiLFxuXHRcImFtYWNyXCI6IFwixIFcIixcblx0XCJhbWFsZ1wiOiBcIuKov1wiLFxuXHRcImFtcFwiOiBcIiZcIixcblx0XCJBTVBcIjogXCImXCIsXG5cdFwiYW5kYW5kXCI6IFwi4qmVXCIsXG5cdFwiQW5kXCI6IFwi4qmTXCIsXG5cdFwiYW5kXCI6IFwi4oinXCIsXG5cdFwiYW5kZFwiOiBcIuKpnFwiLFxuXHRcImFuZHNsb3BlXCI6IFwi4qmYXCIsXG5cdFwiYW5kdlwiOiBcIuKpmlwiLFxuXHRcImFuZ1wiOiBcIuKIoFwiLFxuXHRcImFuZ2VcIjogXCLipqRcIixcblx0XCJhbmdsZVwiOiBcIuKIoFwiLFxuXHRcImFuZ21zZGFhXCI6IFwi4qaoXCIsXG5cdFwiYW5nbXNkYWJcIjogXCLipqlcIixcblx0XCJhbmdtc2RhY1wiOiBcIuKmqlwiLFxuXHRcImFuZ21zZGFkXCI6IFwi4qarXCIsXG5cdFwiYW5nbXNkYWVcIjogXCLipqxcIixcblx0XCJhbmdtc2RhZlwiOiBcIuKmrVwiLFxuXHRcImFuZ21zZGFnXCI6IFwi4qauXCIsXG5cdFwiYW5nbXNkYWhcIjogXCLipq9cIixcblx0XCJhbmdtc2RcIjogXCLiiKFcIixcblx0XCJhbmdydFwiOiBcIuKIn1wiLFxuXHRcImFuZ3J0dmJcIjogXCLiir5cIixcblx0XCJhbmdydHZiZFwiOiBcIuKmnVwiLFxuXHRcImFuZ3NwaFwiOiBcIuKIolwiLFxuXHRcImFuZ3N0XCI6IFwiw4VcIixcblx0XCJhbmd6YXJyXCI6IFwi4o28XCIsXG5cdFwiQW9nb25cIjogXCLEhFwiLFxuXHRcImFvZ29uXCI6IFwixIVcIixcblx0XCJBb3BmXCI6IFwi8J2UuFwiLFxuXHRcImFvcGZcIjogXCLwnZWSXCIsXG5cdFwiYXBhY2lyXCI6IFwi4qmvXCIsXG5cdFwiYXBcIjogXCLiiYhcIixcblx0XCJhcEVcIjogXCLiqbBcIixcblx0XCJhcGVcIjogXCLiiYpcIixcblx0XCJhcGlkXCI6IFwi4omLXCIsXG5cdFwiYXBvc1wiOiBcIidcIixcblx0XCJBcHBseUZ1bmN0aW9uXCI6IFwi4oGhXCIsXG5cdFwiYXBwcm94XCI6IFwi4omIXCIsXG5cdFwiYXBwcm94ZXFcIjogXCLiiYpcIixcblx0XCJBcmluZ1wiOiBcIsOFXCIsXG5cdFwiYXJpbmdcIjogXCLDpVwiLFxuXHRcIkFzY3JcIjogXCLwnZKcXCIsXG5cdFwiYXNjclwiOiBcIvCdkrZcIixcblx0XCJBc3NpZ25cIjogXCLiiZRcIixcblx0XCJhc3RcIjogXCIqXCIsXG5cdFwiYXN5bXBcIjogXCLiiYhcIixcblx0XCJhc3ltcGVxXCI6IFwi4omNXCIsXG5cdFwiQXRpbGRlXCI6IFwiw4NcIixcblx0XCJhdGlsZGVcIjogXCLDo1wiLFxuXHRcIkF1bWxcIjogXCLDhFwiLFxuXHRcImF1bWxcIjogXCLDpFwiLFxuXHRcImF3Y29uaW50XCI6IFwi4oizXCIsXG5cdFwiYXdpbnRcIjogXCLiqJFcIixcblx0XCJiYWNrY29uZ1wiOiBcIuKJjFwiLFxuXHRcImJhY2tlcHNpbG9uXCI6IFwiz7ZcIixcblx0XCJiYWNrcHJpbWVcIjogXCLigLVcIixcblx0XCJiYWNrc2ltXCI6IFwi4oi9XCIsXG5cdFwiYmFja3NpbWVxXCI6IFwi4ouNXCIsXG5cdFwiQmFja3NsYXNoXCI6IFwi4oiWXCIsXG5cdFwiQmFydlwiOiBcIuKrp1wiLFxuXHRcImJhcnZlZVwiOiBcIuKKvVwiLFxuXHRcImJhcndlZFwiOiBcIuKMhVwiLFxuXHRcIkJhcndlZFwiOiBcIuKMhlwiLFxuXHRcImJhcndlZGdlXCI6IFwi4oyFXCIsXG5cdFwiYmJya1wiOiBcIuKOtVwiLFxuXHRcImJicmt0YnJrXCI6IFwi4o62XCIsXG5cdFwiYmNvbmdcIjogXCLiiYxcIixcblx0XCJCY3lcIjogXCLQkVwiLFxuXHRcImJjeVwiOiBcItCxXCIsXG5cdFwiYmRxdW9cIjogXCLigJ5cIixcblx0XCJiZWNhdXNcIjogXCLiiLVcIixcblx0XCJiZWNhdXNlXCI6IFwi4oi1XCIsXG5cdFwiQmVjYXVzZVwiOiBcIuKItVwiLFxuXHRcImJlbXB0eXZcIjogXCLiprBcIixcblx0XCJiZXBzaVwiOiBcIs+2XCIsXG5cdFwiYmVybm91XCI6IFwi4oSsXCIsXG5cdFwiQmVybm91bGxpc1wiOiBcIuKErFwiLFxuXHRcIkJldGFcIjogXCLOklwiLFxuXHRcImJldGFcIjogXCLOslwiLFxuXHRcImJldGhcIjogXCLihLZcIixcblx0XCJiZXR3ZWVuXCI6IFwi4omsXCIsXG5cdFwiQmZyXCI6IFwi8J2UhVwiLFxuXHRcImJmclwiOiBcIvCdlJ9cIixcblx0XCJiaWdjYXBcIjogXCLii4JcIixcblx0XCJiaWdjaXJjXCI6IFwi4pevXCIsXG5cdFwiYmlnY3VwXCI6IFwi4ouDXCIsXG5cdFwiYmlnb2RvdFwiOiBcIuKogFwiLFxuXHRcImJpZ29wbHVzXCI6IFwi4qiBXCIsXG5cdFwiYmlnb3RpbWVzXCI6IFwi4qiCXCIsXG5cdFwiYmlnc3FjdXBcIjogXCLiqIZcIixcblx0XCJiaWdzdGFyXCI6IFwi4piFXCIsXG5cdFwiYmlndHJpYW5nbGVkb3duXCI6IFwi4pa9XCIsXG5cdFwiYmlndHJpYW5nbGV1cFwiOiBcIuKWs1wiLFxuXHRcImJpZ3VwbHVzXCI6IFwi4qiEXCIsXG5cdFwiYmlndmVlXCI6IFwi4ouBXCIsXG5cdFwiYmlnd2VkZ2VcIjogXCLii4BcIixcblx0XCJia2Fyb3dcIjogXCLipI1cIixcblx0XCJibGFja2xvemVuZ2VcIjogXCLip6tcIixcblx0XCJibGFja3NxdWFyZVwiOiBcIuKWqlwiLFxuXHRcImJsYWNrdHJpYW5nbGVcIjogXCLilrRcIixcblx0XCJibGFja3RyaWFuZ2xlZG93blwiOiBcIuKWvlwiLFxuXHRcImJsYWNrdHJpYW5nbGVsZWZ0XCI6IFwi4peCXCIsXG5cdFwiYmxhY2t0cmlhbmdsZXJpZ2h0XCI6IFwi4pa4XCIsXG5cdFwiYmxhbmtcIjogXCLikKNcIixcblx0XCJibGsxMlwiOiBcIuKWklwiLFxuXHRcImJsazE0XCI6IFwi4paRXCIsXG5cdFwiYmxrMzRcIjogXCLilpNcIixcblx0XCJibG9ja1wiOiBcIuKWiFwiLFxuXHRcImJuZVwiOiBcIj3ig6VcIixcblx0XCJibmVxdWl2XCI6IFwi4omh4oOlXCIsXG5cdFwiYk5vdFwiOiBcIuKrrVwiLFxuXHRcImJub3RcIjogXCLijJBcIixcblx0XCJCb3BmXCI6IFwi8J2UuVwiLFxuXHRcImJvcGZcIjogXCLwnZWTXCIsXG5cdFwiYm90XCI6IFwi4oqlXCIsXG5cdFwiYm90dG9tXCI6IFwi4oqlXCIsXG5cdFwiYm93dGllXCI6IFwi4ouIXCIsXG5cdFwiYm94Ym94XCI6IFwi4qeJXCIsXG5cdFwiYm94ZGxcIjogXCLilJBcIixcblx0XCJib3hkTFwiOiBcIuKVlVwiLFxuXHRcImJveERsXCI6IFwi4pWWXCIsXG5cdFwiYm94RExcIjogXCLilZdcIixcblx0XCJib3hkclwiOiBcIuKUjFwiLFxuXHRcImJveGRSXCI6IFwi4pWSXCIsXG5cdFwiYm94RHJcIjogXCLilZNcIixcblx0XCJib3hEUlwiOiBcIuKVlFwiLFxuXHRcImJveGhcIjogXCLilIBcIixcblx0XCJib3hIXCI6IFwi4pWQXCIsXG5cdFwiYm94aGRcIjogXCLilKxcIixcblx0XCJib3hIZFwiOiBcIuKVpFwiLFxuXHRcImJveGhEXCI6IFwi4pWlXCIsXG5cdFwiYm94SERcIjogXCLilaZcIixcblx0XCJib3hodVwiOiBcIuKUtFwiLFxuXHRcImJveEh1XCI6IFwi4pWnXCIsXG5cdFwiYm94aFVcIjogXCLilahcIixcblx0XCJib3hIVVwiOiBcIuKVqVwiLFxuXHRcImJveG1pbnVzXCI6IFwi4oqfXCIsXG5cdFwiYm94cGx1c1wiOiBcIuKKnlwiLFxuXHRcImJveHRpbWVzXCI6IFwi4oqgXCIsXG5cdFwiYm94dWxcIjogXCLilJhcIixcblx0XCJib3h1TFwiOiBcIuKVm1wiLFxuXHRcImJveFVsXCI6IFwi4pWcXCIsXG5cdFwiYm94VUxcIjogXCLilZ1cIixcblx0XCJib3h1clwiOiBcIuKUlFwiLFxuXHRcImJveHVSXCI6IFwi4pWYXCIsXG5cdFwiYm94VXJcIjogXCLilZlcIixcblx0XCJib3hVUlwiOiBcIuKVmlwiLFxuXHRcImJveHZcIjogXCLilIJcIixcblx0XCJib3hWXCI6IFwi4pWRXCIsXG5cdFwiYm94dmhcIjogXCLilLxcIixcblx0XCJib3h2SFwiOiBcIuKVqlwiLFxuXHRcImJveFZoXCI6IFwi4pWrXCIsXG5cdFwiYm94VkhcIjogXCLilaxcIixcblx0XCJib3h2bFwiOiBcIuKUpFwiLFxuXHRcImJveHZMXCI6IFwi4pWhXCIsXG5cdFwiYm94VmxcIjogXCLilaJcIixcblx0XCJib3hWTFwiOiBcIuKVo1wiLFxuXHRcImJveHZyXCI6IFwi4pScXCIsXG5cdFwiYm94dlJcIjogXCLilZ5cIixcblx0XCJib3hWclwiOiBcIuKVn1wiLFxuXHRcImJveFZSXCI6IFwi4pWgXCIsXG5cdFwiYnByaW1lXCI6IFwi4oC1XCIsXG5cdFwiYnJldmVcIjogXCLLmFwiLFxuXHRcIkJyZXZlXCI6IFwiy5hcIixcblx0XCJicnZiYXJcIjogXCLCplwiLFxuXHRcImJzY3JcIjogXCLwnZK3XCIsXG5cdFwiQnNjclwiOiBcIuKErFwiLFxuXHRcImJzZW1pXCI6IFwi4oGPXCIsXG5cdFwiYnNpbVwiOiBcIuKIvVwiLFxuXHRcImJzaW1lXCI6IFwi4ouNXCIsXG5cdFwiYnNvbGJcIjogXCLip4VcIixcblx0XCJic29sXCI6IFwiXFxcXFwiLFxuXHRcImJzb2xoc3ViXCI6IFwi4p+IXCIsXG5cdFwiYnVsbFwiOiBcIuKAolwiLFxuXHRcImJ1bGxldFwiOiBcIuKAolwiLFxuXHRcImJ1bXBcIjogXCLiiY5cIixcblx0XCJidW1wRVwiOiBcIuKqrlwiLFxuXHRcImJ1bXBlXCI6IFwi4omPXCIsXG5cdFwiQnVtcGVxXCI6IFwi4omOXCIsXG5cdFwiYnVtcGVxXCI6IFwi4omPXCIsXG5cdFwiQ2FjdXRlXCI6IFwixIZcIixcblx0XCJjYWN1dGVcIjogXCLEh1wiLFxuXHRcImNhcGFuZFwiOiBcIuKphFwiLFxuXHRcImNhcGJyY3VwXCI6IFwi4qmJXCIsXG5cdFwiY2FwY2FwXCI6IFwi4qmLXCIsXG5cdFwiY2FwXCI6IFwi4oipXCIsXG5cdFwiQ2FwXCI6IFwi4ouSXCIsXG5cdFwiY2FwY3VwXCI6IFwi4qmHXCIsXG5cdFwiY2FwZG90XCI6IFwi4qmAXCIsXG5cdFwiQ2FwaXRhbERpZmZlcmVudGlhbERcIjogXCLihYVcIixcblx0XCJjYXBzXCI6IFwi4oip77iAXCIsXG5cdFwiY2FyZXRcIjogXCLigYFcIixcblx0XCJjYXJvblwiOiBcIsuHXCIsXG5cdFwiQ2F5bGV5c1wiOiBcIuKErVwiLFxuXHRcImNjYXBzXCI6IFwi4qmNXCIsXG5cdFwiQ2Nhcm9uXCI6IFwixIxcIixcblx0XCJjY2Fyb25cIjogXCLEjVwiLFxuXHRcIkNjZWRpbFwiOiBcIsOHXCIsXG5cdFwiY2NlZGlsXCI6IFwiw6dcIixcblx0XCJDY2lyY1wiOiBcIsSIXCIsXG5cdFwiY2NpcmNcIjogXCLEiVwiLFxuXHRcIkNjb25pbnRcIjogXCLiiLBcIixcblx0XCJjY3Vwc1wiOiBcIuKpjFwiLFxuXHRcImNjdXBzc21cIjogXCLiqZBcIixcblx0XCJDZG90XCI6IFwixIpcIixcblx0XCJjZG90XCI6IFwixItcIixcblx0XCJjZWRpbFwiOiBcIsK4XCIsXG5cdFwiQ2VkaWxsYVwiOiBcIsK4XCIsXG5cdFwiY2VtcHR5dlwiOiBcIuKmslwiLFxuXHRcImNlbnRcIjogXCLColwiLFxuXHRcImNlbnRlcmRvdFwiOiBcIsK3XCIsXG5cdFwiQ2VudGVyRG90XCI6IFwiwrdcIixcblx0XCJjZnJcIjogXCLwnZSgXCIsXG5cdFwiQ2ZyXCI6IFwi4oStXCIsXG5cdFwiQ0hjeVwiOiBcItCnXCIsXG5cdFwiY2hjeVwiOiBcItGHXCIsXG5cdFwiY2hlY2tcIjogXCLinJNcIixcblx0XCJjaGVja21hcmtcIjogXCLinJNcIixcblx0XCJDaGlcIjogXCLOp1wiLFxuXHRcImNoaVwiOiBcIs+HXCIsXG5cdFwiY2lyY1wiOiBcIsuGXCIsXG5cdFwiY2lyY2VxXCI6IFwi4omXXCIsXG5cdFwiY2lyY2xlYXJyb3dsZWZ0XCI6IFwi4oa6XCIsXG5cdFwiY2lyY2xlYXJyb3dyaWdodFwiOiBcIuKGu1wiLFxuXHRcImNpcmNsZWRhc3RcIjogXCLiiptcIixcblx0XCJjaXJjbGVkY2lyY1wiOiBcIuKKmlwiLFxuXHRcImNpcmNsZWRkYXNoXCI6IFwi4oqdXCIsXG5cdFwiQ2lyY2xlRG90XCI6IFwi4oqZXCIsXG5cdFwiY2lyY2xlZFJcIjogXCLCrlwiLFxuXHRcImNpcmNsZWRTXCI6IFwi4pOIXCIsXG5cdFwiQ2lyY2xlTWludXNcIjogXCLiipZcIixcblx0XCJDaXJjbGVQbHVzXCI6IFwi4oqVXCIsXG5cdFwiQ2lyY2xlVGltZXNcIjogXCLiipdcIixcblx0XCJjaXJcIjogXCLil4tcIixcblx0XCJjaXJFXCI6IFwi4qeDXCIsXG5cdFwiY2lyZVwiOiBcIuKJl1wiLFxuXHRcImNpcmZuaW50XCI6IFwi4qiQXCIsXG5cdFwiY2lybWlkXCI6IFwi4quvXCIsXG5cdFwiY2lyc2NpclwiOiBcIuKnglwiLFxuXHRcIkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIslwiLFxuXHRcIkNsb3NlQ3VybHlEb3VibGVRdW90ZVwiOiBcIuKAnVwiLFxuXHRcIkNsb3NlQ3VybHlRdW90ZVwiOiBcIuKAmVwiLFxuXHRcImNsdWJzXCI6IFwi4pmjXCIsXG5cdFwiY2x1YnN1aXRcIjogXCLimaNcIixcblx0XCJjb2xvblwiOiBcIjpcIixcblx0XCJDb2xvblwiOiBcIuKIt1wiLFxuXHRcIkNvbG9uZVwiOiBcIuKptFwiLFxuXHRcImNvbG9uZVwiOiBcIuKJlFwiLFxuXHRcImNvbG9uZXFcIjogXCLiiZRcIixcblx0XCJjb21tYVwiOiBcIixcIixcblx0XCJjb21tYXRcIjogXCJAXCIsXG5cdFwiY29tcFwiOiBcIuKIgVwiLFxuXHRcImNvbXBmblwiOiBcIuKImFwiLFxuXHRcImNvbXBsZW1lbnRcIjogXCLiiIFcIixcblx0XCJjb21wbGV4ZXNcIjogXCLihIJcIixcblx0XCJjb25nXCI6IFwi4omFXCIsXG5cdFwiY29uZ2RvdFwiOiBcIuKprVwiLFxuXHRcIkNvbmdydWVudFwiOiBcIuKJoVwiLFxuXHRcImNvbmludFwiOiBcIuKIrlwiLFxuXHRcIkNvbmludFwiOiBcIuKIr1wiLFxuXHRcIkNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIrlwiLFxuXHRcImNvcGZcIjogXCLwnZWUXCIsXG5cdFwiQ29wZlwiOiBcIuKEglwiLFxuXHRcImNvcHJvZFwiOiBcIuKIkFwiLFxuXHRcIkNvcHJvZHVjdFwiOiBcIuKIkFwiLFxuXHRcImNvcHlcIjogXCLCqVwiLFxuXHRcIkNPUFlcIjogXCLCqVwiLFxuXHRcImNvcHlzclwiOiBcIuKEl1wiLFxuXHRcIkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjogXCLiiLNcIixcblx0XCJjcmFyclwiOiBcIuKGtVwiLFxuXHRcImNyb3NzXCI6IFwi4pyXXCIsXG5cdFwiQ3Jvc3NcIjogXCLiqK9cIixcblx0XCJDc2NyXCI6IFwi8J2SnlwiLFxuXHRcImNzY3JcIjogXCLwnZK4XCIsXG5cdFwiY3N1YlwiOiBcIuKrj1wiLFxuXHRcImNzdWJlXCI6IFwi4quRXCIsXG5cdFwiY3N1cFwiOiBcIuKrkFwiLFxuXHRcImNzdXBlXCI6IFwi4quSXCIsXG5cdFwiY3Rkb3RcIjogXCLii69cIixcblx0XCJjdWRhcnJsXCI6IFwi4qS4XCIsXG5cdFwiY3VkYXJyclwiOiBcIuKktVwiLFxuXHRcImN1ZXByXCI6IFwi4oueXCIsXG5cdFwiY3Vlc2NcIjogXCLii59cIixcblx0XCJjdWxhcnJcIjogXCLihrZcIixcblx0XCJjdWxhcnJwXCI6IFwi4qS9XCIsXG5cdFwiY3VwYnJjYXBcIjogXCLiqYhcIixcblx0XCJjdXBjYXBcIjogXCLiqYZcIixcblx0XCJDdXBDYXBcIjogXCLiiY1cIixcblx0XCJjdXBcIjogXCLiiKpcIixcblx0XCJDdXBcIjogXCLii5NcIixcblx0XCJjdXBjdXBcIjogXCLiqYpcIixcblx0XCJjdXBkb3RcIjogXCLiio1cIixcblx0XCJjdXBvclwiOiBcIuKphVwiLFxuXHRcImN1cHNcIjogXCLiiKrvuIBcIixcblx0XCJjdXJhcnJcIjogXCLihrdcIixcblx0XCJjdXJhcnJtXCI6IFwi4qS8XCIsXG5cdFwiY3VybHllcXByZWNcIjogXCLii55cIixcblx0XCJjdXJseWVxc3VjY1wiOiBcIuKLn1wiLFxuXHRcImN1cmx5dmVlXCI6IFwi4ouOXCIsXG5cdFwiY3VybHl3ZWRnZVwiOiBcIuKLj1wiLFxuXHRcImN1cnJlblwiOiBcIsKkXCIsXG5cdFwiY3VydmVhcnJvd2xlZnRcIjogXCLihrZcIixcblx0XCJjdXJ2ZWFycm93cmlnaHRcIjogXCLihrdcIixcblx0XCJjdXZlZVwiOiBcIuKLjlwiLFxuXHRcImN1d2VkXCI6IFwi4ouPXCIsXG5cdFwiY3djb25pbnRcIjogXCLiiLJcIixcblx0XCJjd2ludFwiOiBcIuKIsVwiLFxuXHRcImN5bGN0eVwiOiBcIuKMrVwiLFxuXHRcImRhZ2dlclwiOiBcIuKAoFwiLFxuXHRcIkRhZ2dlclwiOiBcIuKAoVwiLFxuXHRcImRhbGV0aFwiOiBcIuKEuFwiLFxuXHRcImRhcnJcIjogXCLihpNcIixcblx0XCJEYXJyXCI6IFwi4oahXCIsXG5cdFwiZEFyclwiOiBcIuKHk1wiLFxuXHRcImRhc2hcIjogXCLigJBcIixcblx0XCJEYXNodlwiOiBcIuKrpFwiLFxuXHRcImRhc2h2XCI6IFwi4oqjXCIsXG5cdFwiZGJrYXJvd1wiOiBcIuKkj1wiLFxuXHRcImRibGFjXCI6IFwiy51cIixcblx0XCJEY2Fyb25cIjogXCLEjlwiLFxuXHRcImRjYXJvblwiOiBcIsSPXCIsXG5cdFwiRGN5XCI6IFwi0JRcIixcblx0XCJkY3lcIjogXCLQtFwiLFxuXHRcImRkYWdnZXJcIjogXCLigKFcIixcblx0XCJkZGFyclwiOiBcIuKHilwiLFxuXHRcIkREXCI6IFwi4oWFXCIsXG5cdFwiZGRcIjogXCLihYZcIixcblx0XCJERG90cmFoZFwiOiBcIuKkkVwiLFxuXHRcImRkb3RzZXFcIjogXCLiqbdcIixcblx0XCJkZWdcIjogXCLCsFwiLFxuXHRcIkRlbFwiOiBcIuKIh1wiLFxuXHRcIkRlbHRhXCI6IFwizpRcIixcblx0XCJkZWx0YVwiOiBcIs60XCIsXG5cdFwiZGVtcHR5dlwiOiBcIuKmsVwiLFxuXHRcImRmaXNodFwiOiBcIuKlv1wiLFxuXHRcIkRmclwiOiBcIvCdlIdcIixcblx0XCJkZnJcIjogXCLwnZShXCIsXG5cdFwiZEhhclwiOiBcIuKlpVwiLFxuXHRcImRoYXJsXCI6IFwi4oeDXCIsXG5cdFwiZGhhcnJcIjogXCLih4JcIixcblx0XCJEaWFjcml0aWNhbEFjdXRlXCI6IFwiwrRcIixcblx0XCJEaWFjcml0aWNhbERvdFwiOiBcIsuZXCIsXG5cdFwiRGlhY3JpdGljYWxEb3VibGVBY3V0ZVwiOiBcIsudXCIsXG5cdFwiRGlhY3JpdGljYWxHcmF2ZVwiOiBcImBcIixcblx0XCJEaWFjcml0aWNhbFRpbGRlXCI6IFwiy5xcIixcblx0XCJkaWFtXCI6IFwi4ouEXCIsXG5cdFwiZGlhbW9uZFwiOiBcIuKLhFwiLFxuXHRcIkRpYW1vbmRcIjogXCLii4RcIixcblx0XCJkaWFtb25kc3VpdFwiOiBcIuKZplwiLFxuXHRcImRpYW1zXCI6IFwi4pmmXCIsXG5cdFwiZGllXCI6IFwiwqhcIixcblx0XCJEaWZmZXJlbnRpYWxEXCI6IFwi4oWGXCIsXG5cdFwiZGlnYW1tYVwiOiBcIs+dXCIsXG5cdFwiZGlzaW5cIjogXCLii7JcIixcblx0XCJkaXZcIjogXCLDt1wiLFxuXHRcImRpdmlkZVwiOiBcIsO3XCIsXG5cdFwiZGl2aWRlb250aW1lc1wiOiBcIuKLh1wiLFxuXHRcImRpdm9ueFwiOiBcIuKLh1wiLFxuXHRcIkRKY3lcIjogXCLQglwiLFxuXHRcImRqY3lcIjogXCLRklwiLFxuXHRcImRsY29yblwiOiBcIuKMnlwiLFxuXHRcImRsY3JvcFwiOiBcIuKMjVwiLFxuXHRcImRvbGxhclwiOiBcIiRcIixcblx0XCJEb3BmXCI6IFwi8J2Uu1wiLFxuXHRcImRvcGZcIjogXCLwnZWVXCIsXG5cdFwiRG90XCI6IFwiwqhcIixcblx0XCJkb3RcIjogXCLLmVwiLFxuXHRcIkRvdERvdFwiOiBcIuKDnFwiLFxuXHRcImRvdGVxXCI6IFwi4omQXCIsXG5cdFwiZG90ZXFkb3RcIjogXCLiiZFcIixcblx0XCJEb3RFcXVhbFwiOiBcIuKJkFwiLFxuXHRcImRvdG1pbnVzXCI6IFwi4oi4XCIsXG5cdFwiZG90cGx1c1wiOiBcIuKIlFwiLFxuXHRcImRvdHNxdWFyZVwiOiBcIuKKoVwiLFxuXHRcImRvdWJsZWJhcndlZGdlXCI6IFwi4oyGXCIsXG5cdFwiRG91YmxlQ29udG91ckludGVncmFsXCI6IFwi4oivXCIsXG5cdFwiRG91YmxlRG90XCI6IFwiwqhcIixcblx0XCJEb3VibGVEb3duQXJyb3dcIjogXCLih5NcIixcblx0XCJEb3VibGVMZWZ0QXJyb3dcIjogXCLih5BcIixcblx0XCJEb3VibGVMZWZ0UmlnaHRBcnJvd1wiOiBcIuKHlFwiLFxuXHRcIkRvdWJsZUxlZnRUZWVcIjogXCLiq6RcIixcblx0XCJEb3VibGVMb25nTGVmdEFycm93XCI6IFwi4p+4XCIsXG5cdFwiRG91YmxlTG9uZ0xlZnRSaWdodEFycm93XCI6IFwi4p+6XCIsXG5cdFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3dcIjogXCLin7lcIixcblx0XCJEb3VibGVSaWdodEFycm93XCI6IFwi4oeSXCIsXG5cdFwiRG91YmxlUmlnaHRUZWVcIjogXCLiiqhcIixcblx0XCJEb3VibGVVcEFycm93XCI6IFwi4oeRXCIsXG5cdFwiRG91YmxlVXBEb3duQXJyb3dcIjogXCLih5VcIixcblx0XCJEb3VibGVWZXJ0aWNhbEJhclwiOiBcIuKIpVwiLFxuXHRcIkRvd25BcnJvd0JhclwiOiBcIuKkk1wiLFxuXHRcImRvd25hcnJvd1wiOiBcIuKGk1wiLFxuXHRcIkRvd25BcnJvd1wiOiBcIuKGk1wiLFxuXHRcIkRvd25hcnJvd1wiOiBcIuKHk1wiLFxuXHRcIkRvd25BcnJvd1VwQXJyb3dcIjogXCLih7VcIixcblx0XCJEb3duQnJldmVcIjogXCLMkVwiLFxuXHRcImRvd25kb3duYXJyb3dzXCI6IFwi4oeKXCIsXG5cdFwiZG93bmhhcnBvb25sZWZ0XCI6IFwi4oeDXCIsXG5cdFwiZG93bmhhcnBvb25yaWdodFwiOiBcIuKHglwiLFxuXHRcIkRvd25MZWZ0UmlnaHRWZWN0b3JcIjogXCLipZBcIixcblx0XCJEb3duTGVmdFRlZVZlY3RvclwiOiBcIuKlnlwiLFxuXHRcIkRvd25MZWZ0VmVjdG9yQmFyXCI6IFwi4qWWXCIsXG5cdFwiRG93bkxlZnRWZWN0b3JcIjogXCLihr1cIixcblx0XCJEb3duUmlnaHRUZWVWZWN0b3JcIjogXCLipZ9cIixcblx0XCJEb3duUmlnaHRWZWN0b3JCYXJcIjogXCLipZdcIixcblx0XCJEb3duUmlnaHRWZWN0b3JcIjogXCLih4FcIixcblx0XCJEb3duVGVlQXJyb3dcIjogXCLihqdcIixcblx0XCJEb3duVGVlXCI6IFwi4oqkXCIsXG5cdFwiZHJia2Fyb3dcIjogXCLipJBcIixcblx0XCJkcmNvcm5cIjogXCLijJ9cIixcblx0XCJkcmNyb3BcIjogXCLijIxcIixcblx0XCJEc2NyXCI6IFwi8J2Sn1wiLFxuXHRcImRzY3JcIjogXCLwnZK5XCIsXG5cdFwiRFNjeVwiOiBcItCFXCIsXG5cdFwiZHNjeVwiOiBcItGVXCIsXG5cdFwiZHNvbFwiOiBcIuKntlwiLFxuXHRcIkRzdHJva1wiOiBcIsSQXCIsXG5cdFwiZHN0cm9rXCI6IFwixJFcIixcblx0XCJkdGRvdFwiOiBcIuKLsVwiLFxuXHRcImR0cmlcIjogXCLilr9cIixcblx0XCJkdHJpZlwiOiBcIuKWvlwiLFxuXHRcImR1YXJyXCI6IFwi4oe1XCIsXG5cdFwiZHVoYXJcIjogXCLipa9cIixcblx0XCJkd2FuZ2xlXCI6IFwi4qamXCIsXG5cdFwiRFpjeVwiOiBcItCPXCIsXG5cdFwiZHpjeVwiOiBcItGfXCIsXG5cdFwiZHppZ3JhcnJcIjogXCLin79cIixcblx0XCJFYWN1dGVcIjogXCLDiVwiLFxuXHRcImVhY3V0ZVwiOiBcIsOpXCIsXG5cdFwiZWFzdGVyXCI6IFwi4qmuXCIsXG5cdFwiRWNhcm9uXCI6IFwixJpcIixcblx0XCJlY2Fyb25cIjogXCLEm1wiLFxuXHRcIkVjaXJjXCI6IFwiw4pcIixcblx0XCJlY2lyY1wiOiBcIsOqXCIsXG5cdFwiZWNpclwiOiBcIuKJllwiLFxuXHRcImVjb2xvblwiOiBcIuKJlVwiLFxuXHRcIkVjeVwiOiBcItCtXCIsXG5cdFwiZWN5XCI6IFwi0Y1cIixcblx0XCJlRERvdFwiOiBcIuKpt1wiLFxuXHRcIkVkb3RcIjogXCLEllwiLFxuXHRcImVkb3RcIjogXCLEl1wiLFxuXHRcImVEb3RcIjogXCLiiZFcIixcblx0XCJlZVwiOiBcIuKFh1wiLFxuXHRcImVmRG90XCI6IFwi4omSXCIsXG5cdFwiRWZyXCI6IFwi8J2UiFwiLFxuXHRcImVmclwiOiBcIvCdlKJcIixcblx0XCJlZ1wiOiBcIuKqmlwiLFxuXHRcIkVncmF2ZVwiOiBcIsOIXCIsXG5cdFwiZWdyYXZlXCI6IFwiw6hcIixcblx0XCJlZ3NcIjogXCLiqpZcIixcblx0XCJlZ3Nkb3RcIjogXCLiqphcIixcblx0XCJlbFwiOiBcIuKqmVwiLFxuXHRcIkVsZW1lbnRcIjogXCLiiIhcIixcblx0XCJlbGludGVyc1wiOiBcIuKPp1wiLFxuXHRcImVsbFwiOiBcIuKEk1wiLFxuXHRcImVsc1wiOiBcIuKqlVwiLFxuXHRcImVsc2RvdFwiOiBcIuKql1wiLFxuXHRcIkVtYWNyXCI6IFwixJJcIixcblx0XCJlbWFjclwiOiBcIsSTXCIsXG5cdFwiZW1wdHlcIjogXCLiiIVcIixcblx0XCJlbXB0eXNldFwiOiBcIuKIhVwiLFxuXHRcIkVtcHR5U21hbGxTcXVhcmVcIjogXCLil7tcIixcblx0XCJlbXB0eXZcIjogXCLiiIVcIixcblx0XCJFbXB0eVZlcnlTbWFsbFNxdWFyZVwiOiBcIuKWq1wiLFxuXHRcImVtc3AxM1wiOiBcIuKAhFwiLFxuXHRcImVtc3AxNFwiOiBcIuKAhVwiLFxuXHRcImVtc3BcIjogXCLigINcIixcblx0XCJFTkdcIjogXCLFilwiLFxuXHRcImVuZ1wiOiBcIsWLXCIsXG5cdFwiZW5zcFwiOiBcIuKAglwiLFxuXHRcIkVvZ29uXCI6IFwixJhcIixcblx0XCJlb2dvblwiOiBcIsSZXCIsXG5cdFwiRW9wZlwiOiBcIvCdlLxcIixcblx0XCJlb3BmXCI6IFwi8J2VllwiLFxuXHRcImVwYXJcIjogXCLii5VcIixcblx0XCJlcGFyc2xcIjogXCLip6NcIixcblx0XCJlcGx1c1wiOiBcIuKpsVwiLFxuXHRcImVwc2lcIjogXCLOtVwiLFxuXHRcIkVwc2lsb25cIjogXCLOlVwiLFxuXHRcImVwc2lsb25cIjogXCLOtVwiLFxuXHRcImVwc2l2XCI6IFwiz7VcIixcblx0XCJlcWNpcmNcIjogXCLiiZZcIixcblx0XCJlcWNvbG9uXCI6IFwi4omVXCIsXG5cdFwiZXFzaW1cIjogXCLiiYJcIixcblx0XCJlcXNsYW50Z3RyXCI6IFwi4qqWXCIsXG5cdFwiZXFzbGFudGxlc3NcIjogXCLiqpVcIixcblx0XCJFcXVhbFwiOiBcIuKptVwiLFxuXHRcImVxdWFsc1wiOiBcIj1cIixcblx0XCJFcXVhbFRpbGRlXCI6IFwi4omCXCIsXG5cdFwiZXF1ZXN0XCI6IFwi4omfXCIsXG5cdFwiRXF1aWxpYnJpdW1cIjogXCLih4xcIixcblx0XCJlcXVpdlwiOiBcIuKJoVwiLFxuXHRcImVxdWl2RERcIjogXCLiqbhcIixcblx0XCJlcXZwYXJzbFwiOiBcIuKnpVwiLFxuXHRcImVyYXJyXCI6IFwi4qWxXCIsXG5cdFwiZXJEb3RcIjogXCLiiZNcIixcblx0XCJlc2NyXCI6IFwi4oSvXCIsXG5cdFwiRXNjclwiOiBcIuKEsFwiLFxuXHRcImVzZG90XCI6IFwi4omQXCIsXG5cdFwiRXNpbVwiOiBcIuKps1wiLFxuXHRcImVzaW1cIjogXCLiiYJcIixcblx0XCJFdGFcIjogXCLOl1wiLFxuXHRcImV0YVwiOiBcIs63XCIsXG5cdFwiRVRIXCI6IFwiw5BcIixcblx0XCJldGhcIjogXCLDsFwiLFxuXHRcIkV1bWxcIjogXCLDi1wiLFxuXHRcImV1bWxcIjogXCLDq1wiLFxuXHRcImV1cm9cIjogXCLigqxcIixcblx0XCJleGNsXCI6IFwiIVwiLFxuXHRcImV4aXN0XCI6IFwi4oiDXCIsXG5cdFwiRXhpc3RzXCI6IFwi4oiDXCIsXG5cdFwiZXhwZWN0YXRpb25cIjogXCLihLBcIixcblx0XCJleHBvbmVudGlhbGVcIjogXCLihYdcIixcblx0XCJFeHBvbmVudGlhbEVcIjogXCLihYdcIixcblx0XCJmYWxsaW5nZG90c2VxXCI6IFwi4omSXCIsXG5cdFwiRmN5XCI6IFwi0KRcIixcblx0XCJmY3lcIjogXCLRhFwiLFxuXHRcImZlbWFsZVwiOiBcIuKZgFwiLFxuXHRcImZmaWxpZ1wiOiBcIu+sg1wiLFxuXHRcImZmbGlnXCI6IFwi76yAXCIsXG5cdFwiZmZsbGlnXCI6IFwi76yEXCIsXG5cdFwiRmZyXCI6IFwi8J2UiVwiLFxuXHRcImZmclwiOiBcIvCdlKNcIixcblx0XCJmaWxpZ1wiOiBcIu+sgVwiLFxuXHRcIkZpbGxlZFNtYWxsU3F1YXJlXCI6IFwi4pe8XCIsXG5cdFwiRmlsbGVkVmVyeVNtYWxsU3F1YXJlXCI6IFwi4paqXCIsXG5cdFwiZmpsaWdcIjogXCJmalwiLFxuXHRcImZsYXRcIjogXCLima1cIixcblx0XCJmbGxpZ1wiOiBcIu+sglwiLFxuXHRcImZsdG5zXCI6IFwi4paxXCIsXG5cdFwiZm5vZlwiOiBcIsaSXCIsXG5cdFwiRm9wZlwiOiBcIvCdlL1cIixcblx0XCJmb3BmXCI6IFwi8J2Vl1wiLFxuXHRcImZvcmFsbFwiOiBcIuKIgFwiLFxuXHRcIkZvckFsbFwiOiBcIuKIgFwiLFxuXHRcImZvcmtcIjogXCLii5RcIixcblx0XCJmb3JrdlwiOiBcIuKrmVwiLFxuXHRcIkZvdXJpZXJ0cmZcIjogXCLihLFcIixcblx0XCJmcGFydGludFwiOiBcIuKojVwiLFxuXHRcImZyYWMxMlwiOiBcIsK9XCIsXG5cdFwiZnJhYzEzXCI6IFwi4oWTXCIsXG5cdFwiZnJhYzE0XCI6IFwiwrxcIixcblx0XCJmcmFjMTVcIjogXCLihZVcIixcblx0XCJmcmFjMTZcIjogXCLihZlcIixcblx0XCJmcmFjMThcIjogXCLihZtcIixcblx0XCJmcmFjMjNcIjogXCLihZRcIixcblx0XCJmcmFjMjVcIjogXCLihZZcIixcblx0XCJmcmFjMzRcIjogXCLCvlwiLFxuXHRcImZyYWMzNVwiOiBcIuKFl1wiLFxuXHRcImZyYWMzOFwiOiBcIuKFnFwiLFxuXHRcImZyYWM0NVwiOiBcIuKFmFwiLFxuXHRcImZyYWM1NlwiOiBcIuKFmlwiLFxuXHRcImZyYWM1OFwiOiBcIuKFnVwiLFxuXHRcImZyYWM3OFwiOiBcIuKFnlwiLFxuXHRcImZyYXNsXCI6IFwi4oGEXCIsXG5cdFwiZnJvd25cIjogXCLijKJcIixcblx0XCJmc2NyXCI6IFwi8J2Su1wiLFxuXHRcIkZzY3JcIjogXCLihLFcIixcblx0XCJnYWN1dGVcIjogXCLHtVwiLFxuXHRcIkdhbW1hXCI6IFwizpNcIixcblx0XCJnYW1tYVwiOiBcIs6zXCIsXG5cdFwiR2FtbWFkXCI6IFwiz5xcIixcblx0XCJnYW1tYWRcIjogXCLPnVwiLFxuXHRcImdhcFwiOiBcIuKqhlwiLFxuXHRcIkdicmV2ZVwiOiBcIsSeXCIsXG5cdFwiZ2JyZXZlXCI6IFwixJ9cIixcblx0XCJHY2VkaWxcIjogXCLEolwiLFxuXHRcIkdjaXJjXCI6IFwixJxcIixcblx0XCJnY2lyY1wiOiBcIsSdXCIsXG5cdFwiR2N5XCI6IFwi0JNcIixcblx0XCJnY3lcIjogXCLQs1wiLFxuXHRcIkdkb3RcIjogXCLEoFwiLFxuXHRcImdkb3RcIjogXCLEoVwiLFxuXHRcImdlXCI6IFwi4omlXCIsXG5cdFwiZ0VcIjogXCLiiadcIixcblx0XCJnRWxcIjogXCLiqoxcIixcblx0XCJnZWxcIjogXCLii5tcIixcblx0XCJnZXFcIjogXCLiiaVcIixcblx0XCJnZXFxXCI6IFwi4omnXCIsXG5cdFwiZ2Vxc2xhbnRcIjogXCLiqb5cIixcblx0XCJnZXNjY1wiOiBcIuKqqVwiLFxuXHRcImdlc1wiOiBcIuKpvlwiLFxuXHRcImdlc2RvdFwiOiBcIuKqgFwiLFxuXHRcImdlc2RvdG9cIjogXCLiqoJcIixcblx0XCJnZXNkb3RvbFwiOiBcIuKqhFwiLFxuXHRcImdlc2xcIjogXCLii5vvuIBcIixcblx0XCJnZXNsZXNcIjogXCLiqpRcIixcblx0XCJHZnJcIjogXCLwnZSKXCIsXG5cdFwiZ2ZyXCI6IFwi8J2UpFwiLFxuXHRcImdnXCI6IFwi4omrXCIsXG5cdFwiR2dcIjogXCLii5lcIixcblx0XCJnZ2dcIjogXCLii5lcIixcblx0XCJnaW1lbFwiOiBcIuKEt1wiLFxuXHRcIkdKY3lcIjogXCLQg1wiLFxuXHRcImdqY3lcIjogXCLRk1wiLFxuXHRcImdsYVwiOiBcIuKqpVwiLFxuXHRcImdsXCI6IFwi4om3XCIsXG5cdFwiZ2xFXCI6IFwi4qqSXCIsXG5cdFwiZ2xqXCI6IFwi4qqkXCIsXG5cdFwiZ25hcFwiOiBcIuKqilwiLFxuXHRcImduYXBwcm94XCI6IFwi4qqKXCIsXG5cdFwiZ25lXCI6IFwi4qqIXCIsXG5cdFwiZ25FXCI6IFwi4ompXCIsXG5cdFwiZ25lcVwiOiBcIuKqiFwiLFxuXHRcImduZXFxXCI6IFwi4ompXCIsXG5cdFwiZ25zaW1cIjogXCLii6dcIixcblx0XCJHb3BmXCI6IFwi8J2UvlwiLFxuXHRcImdvcGZcIjogXCLwnZWYXCIsXG5cdFwiZ3JhdmVcIjogXCJgXCIsXG5cdFwiR3JlYXRlckVxdWFsXCI6IFwi4omlXCIsXG5cdFwiR3JlYXRlckVxdWFsTGVzc1wiOiBcIuKLm1wiLFxuXHRcIkdyZWF0ZXJGdWxsRXF1YWxcIjogXCLiiadcIixcblx0XCJHcmVhdGVyR3JlYXRlclwiOiBcIuKqolwiLFxuXHRcIkdyZWF0ZXJMZXNzXCI6IFwi4om3XCIsXG5cdFwiR3JlYXRlclNsYW50RXF1YWxcIjogXCLiqb5cIixcblx0XCJHcmVhdGVyVGlsZGVcIjogXCLiibNcIixcblx0XCJHc2NyXCI6IFwi8J2SolwiLFxuXHRcImdzY3JcIjogXCLihIpcIixcblx0XCJnc2ltXCI6IFwi4omzXCIsXG5cdFwiZ3NpbWVcIjogXCLiqo5cIixcblx0XCJnc2ltbFwiOiBcIuKqkFwiLFxuXHRcImd0Y2NcIjogXCLiqqdcIixcblx0XCJndGNpclwiOiBcIuKpulwiLFxuXHRcImd0XCI6IFwiPlwiLFxuXHRcIkdUXCI6IFwiPlwiLFxuXHRcIkd0XCI6IFwi4omrXCIsXG5cdFwiZ3Rkb3RcIjogXCLii5dcIixcblx0XCJndGxQYXJcIjogXCLippVcIixcblx0XCJndHF1ZXN0XCI6IFwi4qm8XCIsXG5cdFwiZ3RyYXBwcm94XCI6IFwi4qqGXCIsXG5cdFwiZ3RyYXJyXCI6IFwi4qW4XCIsXG5cdFwiZ3RyZG90XCI6IFwi4ouXXCIsXG5cdFwiZ3RyZXFsZXNzXCI6IFwi4oubXCIsXG5cdFwiZ3RyZXFxbGVzc1wiOiBcIuKqjFwiLFxuXHRcImd0cmxlc3NcIjogXCLiibdcIixcblx0XCJndHJzaW1cIjogXCLiibNcIixcblx0XCJndmVydG5lcXFcIjogXCLiianvuIBcIixcblx0XCJndm5FXCI6IFwi4omp77iAXCIsXG5cdFwiSGFjZWtcIjogXCLLh1wiLFxuXHRcImhhaXJzcFwiOiBcIuKAilwiLFxuXHRcImhhbGZcIjogXCLCvVwiLFxuXHRcImhhbWlsdFwiOiBcIuKEi1wiLFxuXHRcIkhBUkRjeVwiOiBcItCqXCIsXG5cdFwiaGFyZGN5XCI6IFwi0YpcIixcblx0XCJoYXJyY2lyXCI6IFwi4qWIXCIsXG5cdFwiaGFyclwiOiBcIuKGlFwiLFxuXHRcImhBcnJcIjogXCLih5RcIixcblx0XCJoYXJyd1wiOiBcIuKGrVwiLFxuXHRcIkhhdFwiOiBcIl5cIixcblx0XCJoYmFyXCI6IFwi4oSPXCIsXG5cdFwiSGNpcmNcIjogXCLEpFwiLFxuXHRcImhjaXJjXCI6IFwixKVcIixcblx0XCJoZWFydHNcIjogXCLimaVcIixcblx0XCJoZWFydHN1aXRcIjogXCLimaVcIixcblx0XCJoZWxsaXBcIjogXCLigKZcIixcblx0XCJoZXJjb25cIjogXCLiirlcIixcblx0XCJoZnJcIjogXCLwnZSlXCIsXG5cdFwiSGZyXCI6IFwi4oSMXCIsXG5cdFwiSGlsYmVydFNwYWNlXCI6IFwi4oSLXCIsXG5cdFwiaGtzZWFyb3dcIjogXCLipKVcIixcblx0XCJoa3N3YXJvd1wiOiBcIuKkplwiLFxuXHRcImhvYXJyXCI6IFwi4oe/XCIsXG5cdFwiaG9tdGh0XCI6IFwi4oi7XCIsXG5cdFwiaG9va2xlZnRhcnJvd1wiOiBcIuKGqVwiLFxuXHRcImhvb2tyaWdodGFycm93XCI6IFwi4oaqXCIsXG5cdFwiaG9wZlwiOiBcIvCdlZlcIixcblx0XCJIb3BmXCI6IFwi4oSNXCIsXG5cdFwiaG9yYmFyXCI6IFwi4oCVXCIsXG5cdFwiSG9yaXpvbnRhbExpbmVcIjogXCLilIBcIixcblx0XCJoc2NyXCI6IFwi8J2SvVwiLFxuXHRcIkhzY3JcIjogXCLihItcIixcblx0XCJoc2xhc2hcIjogXCLihI9cIixcblx0XCJIc3Ryb2tcIjogXCLEplwiLFxuXHRcImhzdHJva1wiOiBcIsSnXCIsXG5cdFwiSHVtcERvd25IdW1wXCI6IFwi4omOXCIsXG5cdFwiSHVtcEVxdWFsXCI6IFwi4omPXCIsXG5cdFwiaHlidWxsXCI6IFwi4oGDXCIsXG5cdFwiaHlwaGVuXCI6IFwi4oCQXCIsXG5cdFwiSWFjdXRlXCI6IFwiw41cIixcblx0XCJpYWN1dGVcIjogXCLDrVwiLFxuXHRcImljXCI6IFwi4oGjXCIsXG5cdFwiSWNpcmNcIjogXCLDjlwiLFxuXHRcImljaXJjXCI6IFwiw65cIixcblx0XCJJY3lcIjogXCLQmFwiLFxuXHRcImljeVwiOiBcItC4XCIsXG5cdFwiSWRvdFwiOiBcIsSwXCIsXG5cdFwiSUVjeVwiOiBcItCVXCIsXG5cdFwiaWVjeVwiOiBcItC1XCIsXG5cdFwiaWV4Y2xcIjogXCLCoVwiLFxuXHRcImlmZlwiOiBcIuKHlFwiLFxuXHRcImlmclwiOiBcIvCdlKZcIixcblx0XCJJZnJcIjogXCLihJFcIixcblx0XCJJZ3JhdmVcIjogXCLDjFwiLFxuXHRcImlncmF2ZVwiOiBcIsOsXCIsXG5cdFwiaWlcIjogXCLihYhcIixcblx0XCJpaWlpbnRcIjogXCLiqIxcIixcblx0XCJpaWludFwiOiBcIuKIrVwiLFxuXHRcImlpbmZpblwiOiBcIuKnnFwiLFxuXHRcImlpb3RhXCI6IFwi4oSpXCIsXG5cdFwiSUpsaWdcIjogXCLEslwiLFxuXHRcImlqbGlnXCI6IFwixLNcIixcblx0XCJJbWFjclwiOiBcIsSqXCIsXG5cdFwiaW1hY3JcIjogXCLEq1wiLFxuXHRcImltYWdlXCI6IFwi4oSRXCIsXG5cdFwiSW1hZ2luYXJ5SVwiOiBcIuKFiFwiLFxuXHRcImltYWdsaW5lXCI6IFwi4oSQXCIsXG5cdFwiaW1hZ3BhcnRcIjogXCLihJFcIixcblx0XCJpbWF0aFwiOiBcIsSxXCIsXG5cdFwiSW1cIjogXCLihJFcIixcblx0XCJpbW9mXCI6IFwi4oq3XCIsXG5cdFwiaW1wZWRcIjogXCLGtVwiLFxuXHRcIkltcGxpZXNcIjogXCLih5JcIixcblx0XCJpbmNhcmVcIjogXCLihIVcIixcblx0XCJpblwiOiBcIuKIiFwiLFxuXHRcImluZmluXCI6IFwi4oieXCIsXG5cdFwiaW5maW50aWVcIjogXCLip51cIixcblx0XCJpbm9kb3RcIjogXCLEsVwiLFxuXHRcImludGNhbFwiOiBcIuKKulwiLFxuXHRcImludFwiOiBcIuKIq1wiLFxuXHRcIkludFwiOiBcIuKIrFwiLFxuXHRcImludGVnZXJzXCI6IFwi4oSkXCIsXG5cdFwiSW50ZWdyYWxcIjogXCLiiKtcIixcblx0XCJpbnRlcmNhbFwiOiBcIuKKulwiLFxuXHRcIkludGVyc2VjdGlvblwiOiBcIuKLglwiLFxuXHRcImludGxhcmhrXCI6IFwi4qiXXCIsXG5cdFwiaW50cHJvZFwiOiBcIuKovFwiLFxuXHRcIkludmlzaWJsZUNvbW1hXCI6IFwi4oGjXCIsXG5cdFwiSW52aXNpYmxlVGltZXNcIjogXCLigaJcIixcblx0XCJJT2N5XCI6IFwi0IFcIixcblx0XCJpb2N5XCI6IFwi0ZFcIixcblx0XCJJb2dvblwiOiBcIsSuXCIsXG5cdFwiaW9nb25cIjogXCLEr1wiLFxuXHRcIklvcGZcIjogXCLwnZWAXCIsXG5cdFwiaW9wZlwiOiBcIvCdlZpcIixcblx0XCJJb3RhXCI6IFwizplcIixcblx0XCJpb3RhXCI6IFwizrlcIixcblx0XCJpcHJvZFwiOiBcIuKovFwiLFxuXHRcImlxdWVzdFwiOiBcIsK/XCIsXG5cdFwiaXNjclwiOiBcIvCdkr5cIixcblx0XCJJc2NyXCI6IFwi4oSQXCIsXG5cdFwiaXNpblwiOiBcIuKIiFwiLFxuXHRcImlzaW5kb3RcIjogXCLii7VcIixcblx0XCJpc2luRVwiOiBcIuKLuVwiLFxuXHRcImlzaW5zXCI6IFwi4ou0XCIsXG5cdFwiaXNpbnN2XCI6IFwi4ouzXCIsXG5cdFwiaXNpbnZcIjogXCLiiIhcIixcblx0XCJpdFwiOiBcIuKBolwiLFxuXHRcIkl0aWxkZVwiOiBcIsSoXCIsXG5cdFwiaXRpbGRlXCI6IFwixKlcIixcblx0XCJJdWtjeVwiOiBcItCGXCIsXG5cdFwiaXVrY3lcIjogXCLRllwiLFxuXHRcIkl1bWxcIjogXCLDj1wiLFxuXHRcIml1bWxcIjogXCLDr1wiLFxuXHRcIkpjaXJjXCI6IFwixLRcIixcblx0XCJqY2lyY1wiOiBcIsS1XCIsXG5cdFwiSmN5XCI6IFwi0JlcIixcblx0XCJqY3lcIjogXCLQuVwiLFxuXHRcIkpmclwiOiBcIvCdlI1cIixcblx0XCJqZnJcIjogXCLwnZSnXCIsXG5cdFwiam1hdGhcIjogXCLIt1wiLFxuXHRcIkpvcGZcIjogXCLwnZWBXCIsXG5cdFwiam9wZlwiOiBcIvCdlZtcIixcblx0XCJKc2NyXCI6IFwi8J2SpVwiLFxuXHRcImpzY3JcIjogXCLwnZK/XCIsXG5cdFwiSnNlcmN5XCI6IFwi0IhcIixcblx0XCJqc2VyY3lcIjogXCLRmFwiLFxuXHRcIkp1a2N5XCI6IFwi0IRcIixcblx0XCJqdWtjeVwiOiBcItGUXCIsXG5cdFwiS2FwcGFcIjogXCLOmlwiLFxuXHRcImthcHBhXCI6IFwizrpcIixcblx0XCJrYXBwYXZcIjogXCLPsFwiLFxuXHRcIktjZWRpbFwiOiBcIsS2XCIsXG5cdFwia2NlZGlsXCI6IFwixLdcIixcblx0XCJLY3lcIjogXCLQmlwiLFxuXHRcImtjeVwiOiBcItC6XCIsXG5cdFwiS2ZyXCI6IFwi8J2UjlwiLFxuXHRcImtmclwiOiBcIvCdlKhcIixcblx0XCJrZ3JlZW5cIjogXCLEuFwiLFxuXHRcIktIY3lcIjogXCLQpVwiLFxuXHRcImtoY3lcIjogXCLRhVwiLFxuXHRcIktKY3lcIjogXCLQjFwiLFxuXHRcImtqY3lcIjogXCLRnFwiLFxuXHRcIktvcGZcIjogXCLwnZWCXCIsXG5cdFwia29wZlwiOiBcIvCdlZxcIixcblx0XCJLc2NyXCI6IFwi8J2SplwiLFxuXHRcImtzY3JcIjogXCLwnZOAXCIsXG5cdFwibEFhcnJcIjogXCLih5pcIixcblx0XCJMYWN1dGVcIjogXCLEuVwiLFxuXHRcImxhY3V0ZVwiOiBcIsS6XCIsXG5cdFwibGFlbXB0eXZcIjogXCLiprRcIixcblx0XCJsYWdyYW5cIjogXCLihJJcIixcblx0XCJMYW1iZGFcIjogXCLOm1wiLFxuXHRcImxhbWJkYVwiOiBcIs67XCIsXG5cdFwibGFuZ1wiOiBcIuKfqFwiLFxuXHRcIkxhbmdcIjogXCLin6pcIixcblx0XCJsYW5nZFwiOiBcIuKmkVwiLFxuXHRcImxhbmdsZVwiOiBcIuKfqFwiLFxuXHRcImxhcFwiOiBcIuKqhVwiLFxuXHRcIkxhcGxhY2V0cmZcIjogXCLihJJcIixcblx0XCJsYXF1b1wiOiBcIsKrXCIsXG5cdFwibGFycmJcIjogXCLih6RcIixcblx0XCJsYXJyYmZzXCI6IFwi4qSfXCIsXG5cdFwibGFyclwiOiBcIuKGkFwiLFxuXHRcIkxhcnJcIjogXCLihp5cIixcblx0XCJsQXJyXCI6IFwi4oeQXCIsXG5cdFwibGFycmZzXCI6IFwi4qSdXCIsXG5cdFwibGFycmhrXCI6IFwi4oapXCIsXG5cdFwibGFycmxwXCI6IFwi4oarXCIsXG5cdFwibGFycnBsXCI6IFwi4qS5XCIsXG5cdFwibGFycnNpbVwiOiBcIuKls1wiLFxuXHRcImxhcnJ0bFwiOiBcIuKGolwiLFxuXHRcImxhdGFpbFwiOiBcIuKkmVwiLFxuXHRcImxBdGFpbFwiOiBcIuKkm1wiLFxuXHRcImxhdFwiOiBcIuKqq1wiLFxuXHRcImxhdGVcIjogXCLiqq1cIixcblx0XCJsYXRlc1wiOiBcIuKqre+4gFwiLFxuXHRcImxiYXJyXCI6IFwi4qSMXCIsXG5cdFwibEJhcnJcIjogXCLipI5cIixcblx0XCJsYmJya1wiOiBcIuKdslwiLFxuXHRcImxicmFjZVwiOiBcIntcIixcblx0XCJsYnJhY2tcIjogXCJbXCIsXG5cdFwibGJya2VcIjogXCLipotcIixcblx0XCJsYnJrc2xkXCI6IFwi4qaPXCIsXG5cdFwibGJya3NsdVwiOiBcIuKmjVwiLFxuXHRcIkxjYXJvblwiOiBcIsS9XCIsXG5cdFwibGNhcm9uXCI6IFwixL5cIixcblx0XCJMY2VkaWxcIjogXCLEu1wiLFxuXHRcImxjZWRpbFwiOiBcIsS8XCIsXG5cdFwibGNlaWxcIjogXCLijIhcIixcblx0XCJsY3ViXCI6IFwie1wiLFxuXHRcIkxjeVwiOiBcItCbXCIsXG5cdFwibGN5XCI6IFwi0LtcIixcblx0XCJsZGNhXCI6IFwi4qS2XCIsXG5cdFwibGRxdW9cIjogXCLigJxcIixcblx0XCJsZHF1b3JcIjogXCLigJ5cIixcblx0XCJsZHJkaGFyXCI6IFwi4qWnXCIsXG5cdFwibGRydXNoYXJcIjogXCLipYtcIixcblx0XCJsZHNoXCI6IFwi4oayXCIsXG5cdFwibGVcIjogXCLiiaRcIixcblx0XCJsRVwiOiBcIuKJplwiLFxuXHRcIkxlZnRBbmdsZUJyYWNrZXRcIjogXCLin6hcIixcblx0XCJMZWZ0QXJyb3dCYXJcIjogXCLih6RcIixcblx0XCJsZWZ0YXJyb3dcIjogXCLihpBcIixcblx0XCJMZWZ0QXJyb3dcIjogXCLihpBcIixcblx0XCJMZWZ0YXJyb3dcIjogXCLih5BcIixcblx0XCJMZWZ0QXJyb3dSaWdodEFycm93XCI6IFwi4oeGXCIsXG5cdFwibGVmdGFycm93dGFpbFwiOiBcIuKGolwiLFxuXHRcIkxlZnRDZWlsaW5nXCI6IFwi4oyIXCIsXG5cdFwiTGVmdERvdWJsZUJyYWNrZXRcIjogXCLin6ZcIixcblx0XCJMZWZ0RG93blRlZVZlY3RvclwiOiBcIuKloVwiLFxuXHRcIkxlZnREb3duVmVjdG9yQmFyXCI6IFwi4qWZXCIsXG5cdFwiTGVmdERvd25WZWN0b3JcIjogXCLih4NcIixcblx0XCJMZWZ0Rmxvb3JcIjogXCLijIpcIixcblx0XCJsZWZ0aGFycG9vbmRvd25cIjogXCLihr1cIixcblx0XCJsZWZ0aGFycG9vbnVwXCI6IFwi4oa8XCIsXG5cdFwibGVmdGxlZnRhcnJvd3NcIjogXCLih4dcIixcblx0XCJsZWZ0cmlnaHRhcnJvd1wiOiBcIuKGlFwiLFxuXHRcIkxlZnRSaWdodEFycm93XCI6IFwi4oaUXCIsXG5cdFwiTGVmdHJpZ2h0YXJyb3dcIjogXCLih5RcIixcblx0XCJsZWZ0cmlnaHRhcnJvd3NcIjogXCLih4ZcIixcblx0XCJsZWZ0cmlnaHRoYXJwb29uc1wiOiBcIuKHi1wiLFxuXHRcImxlZnRyaWdodHNxdWlnYXJyb3dcIjogXCLihq1cIixcblx0XCJMZWZ0UmlnaHRWZWN0b3JcIjogXCLipY5cIixcblx0XCJMZWZ0VGVlQXJyb3dcIjogXCLihqRcIixcblx0XCJMZWZ0VGVlXCI6IFwi4oqjXCIsXG5cdFwiTGVmdFRlZVZlY3RvclwiOiBcIuKlmlwiLFxuXHRcImxlZnR0aHJlZXRpbWVzXCI6IFwi4ouLXCIsXG5cdFwiTGVmdFRyaWFuZ2xlQmFyXCI6IFwi4qePXCIsXG5cdFwiTGVmdFRyaWFuZ2xlXCI6IFwi4oqyXCIsXG5cdFwiTGVmdFRyaWFuZ2xlRXF1YWxcIjogXCLiirRcIixcblx0XCJMZWZ0VXBEb3duVmVjdG9yXCI6IFwi4qWRXCIsXG5cdFwiTGVmdFVwVGVlVmVjdG9yXCI6IFwi4qWgXCIsXG5cdFwiTGVmdFVwVmVjdG9yQmFyXCI6IFwi4qWYXCIsXG5cdFwiTGVmdFVwVmVjdG9yXCI6IFwi4oa/XCIsXG5cdFwiTGVmdFZlY3RvckJhclwiOiBcIuKlklwiLFxuXHRcIkxlZnRWZWN0b3JcIjogXCLihrxcIixcblx0XCJsRWdcIjogXCLiqotcIixcblx0XCJsZWdcIjogXCLii5pcIixcblx0XCJsZXFcIjogXCLiiaRcIixcblx0XCJsZXFxXCI6IFwi4ommXCIsXG5cdFwibGVxc2xhbnRcIjogXCLiqb1cIixcblx0XCJsZXNjY1wiOiBcIuKqqFwiLFxuXHRcImxlc1wiOiBcIuKpvVwiLFxuXHRcImxlc2RvdFwiOiBcIuKpv1wiLFxuXHRcImxlc2RvdG9cIjogXCLiqoFcIixcblx0XCJsZXNkb3RvclwiOiBcIuKqg1wiLFxuXHRcImxlc2dcIjogXCLii5rvuIBcIixcblx0XCJsZXNnZXNcIjogXCLiqpNcIixcblx0XCJsZXNzYXBwcm94XCI6IFwi4qqFXCIsXG5cdFwibGVzc2RvdFwiOiBcIuKLllwiLFxuXHRcImxlc3NlcWd0clwiOiBcIuKLmlwiLFxuXHRcImxlc3NlcXFndHJcIjogXCLiqotcIixcblx0XCJMZXNzRXF1YWxHcmVhdGVyXCI6IFwi4ouaXCIsXG5cdFwiTGVzc0Z1bGxFcXVhbFwiOiBcIuKJplwiLFxuXHRcIkxlc3NHcmVhdGVyXCI6IFwi4om2XCIsXG5cdFwibGVzc2d0clwiOiBcIuKJtlwiLFxuXHRcIkxlc3NMZXNzXCI6IFwi4qqhXCIsXG5cdFwibGVzc3NpbVwiOiBcIuKJslwiLFxuXHRcIkxlc3NTbGFudEVxdWFsXCI6IFwi4qm9XCIsXG5cdFwiTGVzc1RpbGRlXCI6IFwi4omyXCIsXG5cdFwibGZpc2h0XCI6IFwi4qW8XCIsXG5cdFwibGZsb29yXCI6IFwi4oyKXCIsXG5cdFwiTGZyXCI6IFwi8J2Uj1wiLFxuXHRcImxmclwiOiBcIvCdlKlcIixcblx0XCJsZ1wiOiBcIuKJtlwiLFxuXHRcImxnRVwiOiBcIuKqkVwiLFxuXHRcImxIYXJcIjogXCLipaJcIixcblx0XCJsaGFyZFwiOiBcIuKGvVwiLFxuXHRcImxoYXJ1XCI6IFwi4oa8XCIsXG5cdFwibGhhcnVsXCI6IFwi4qWqXCIsXG5cdFwibGhibGtcIjogXCLiloRcIixcblx0XCJMSmN5XCI6IFwi0IlcIixcblx0XCJsamN5XCI6IFwi0ZlcIixcblx0XCJsbGFyclwiOiBcIuKHh1wiLFxuXHRcImxsXCI6IFwi4omqXCIsXG5cdFwiTGxcIjogXCLii5hcIixcblx0XCJsbGNvcm5lclwiOiBcIuKMnlwiLFxuXHRcIkxsZWZ0YXJyb3dcIjogXCLih5pcIixcblx0XCJsbGhhcmRcIjogXCLipatcIixcblx0XCJsbHRyaVwiOiBcIuKXulwiLFxuXHRcIkxtaWRvdFwiOiBcIsS/XCIsXG5cdFwibG1pZG90XCI6IFwixYBcIixcblx0XCJsbW91c3RhY2hlXCI6IFwi4o6wXCIsXG5cdFwibG1vdXN0XCI6IFwi4o6wXCIsXG5cdFwibG5hcFwiOiBcIuKqiVwiLFxuXHRcImxuYXBwcm94XCI6IFwi4qqJXCIsXG5cdFwibG5lXCI6IFwi4qqHXCIsXG5cdFwibG5FXCI6IFwi4omoXCIsXG5cdFwibG5lcVwiOiBcIuKqh1wiLFxuXHRcImxuZXFxXCI6IFwi4omoXCIsXG5cdFwibG5zaW1cIjogXCLii6ZcIixcblx0XCJsb2FuZ1wiOiBcIuKfrFwiLFxuXHRcImxvYXJyXCI6IFwi4oe9XCIsXG5cdFwibG9icmtcIjogXCLin6ZcIixcblx0XCJsb25nbGVmdGFycm93XCI6IFwi4p+1XCIsXG5cdFwiTG9uZ0xlZnRBcnJvd1wiOiBcIuKftVwiLFxuXHRcIkxvbmdsZWZ0YXJyb3dcIjogXCLin7hcIixcblx0XCJsb25nbGVmdHJpZ2h0YXJyb3dcIjogXCLin7dcIixcblx0XCJMb25nTGVmdFJpZ2h0QXJyb3dcIjogXCLin7dcIixcblx0XCJMb25nbGVmdHJpZ2h0YXJyb3dcIjogXCLin7pcIixcblx0XCJsb25nbWFwc3RvXCI6IFwi4p+8XCIsXG5cdFwibG9uZ3JpZ2h0YXJyb3dcIjogXCLin7ZcIixcblx0XCJMb25nUmlnaHRBcnJvd1wiOiBcIuKftlwiLFxuXHRcIkxvbmdyaWdodGFycm93XCI6IFwi4p+5XCIsXG5cdFwibG9vcGFycm93bGVmdFwiOiBcIuKGq1wiLFxuXHRcImxvb3BhcnJvd3JpZ2h0XCI6IFwi4oasXCIsXG5cdFwibG9wYXJcIjogXCLipoVcIixcblx0XCJMb3BmXCI6IFwi8J2Vg1wiLFxuXHRcImxvcGZcIjogXCLwnZWdXCIsXG5cdFwibG9wbHVzXCI6IFwi4qitXCIsXG5cdFwibG90aW1lc1wiOiBcIuKotFwiLFxuXHRcImxvd2FzdFwiOiBcIuKIl1wiLFxuXHRcImxvd2JhclwiOiBcIl9cIixcblx0XCJMb3dlckxlZnRBcnJvd1wiOiBcIuKGmVwiLFxuXHRcIkxvd2VyUmlnaHRBcnJvd1wiOiBcIuKGmFwiLFxuXHRcImxvelwiOiBcIuKXilwiLFxuXHRcImxvemVuZ2VcIjogXCLil4pcIixcblx0XCJsb3pmXCI6IFwi4qerXCIsXG5cdFwibHBhclwiOiBcIihcIixcblx0XCJscGFybHRcIjogXCLippNcIixcblx0XCJscmFyclwiOiBcIuKHhlwiLFxuXHRcImxyY29ybmVyXCI6IFwi4oyfXCIsXG5cdFwibHJoYXJcIjogXCLih4tcIixcblx0XCJscmhhcmRcIjogXCLipa1cIixcblx0XCJscm1cIjogXCLigI5cIixcblx0XCJscnRyaVwiOiBcIuKKv1wiLFxuXHRcImxzYXF1b1wiOiBcIuKAuVwiLFxuXHRcImxzY3JcIjogXCLwnZOBXCIsXG5cdFwiTHNjclwiOiBcIuKEklwiLFxuXHRcImxzaFwiOiBcIuKGsFwiLFxuXHRcIkxzaFwiOiBcIuKGsFwiLFxuXHRcImxzaW1cIjogXCLiibJcIixcblx0XCJsc2ltZVwiOiBcIuKqjVwiLFxuXHRcImxzaW1nXCI6IFwi4qqPXCIsXG5cdFwibHNxYlwiOiBcIltcIixcblx0XCJsc3F1b1wiOiBcIuKAmFwiLFxuXHRcImxzcXVvclwiOiBcIuKAmlwiLFxuXHRcIkxzdHJva1wiOiBcIsWBXCIsXG5cdFwibHN0cm9rXCI6IFwixYJcIixcblx0XCJsdGNjXCI6IFwi4qqmXCIsXG5cdFwibHRjaXJcIjogXCLiqblcIixcblx0XCJsdFwiOiBcIjxcIixcblx0XCJMVFwiOiBcIjxcIixcblx0XCJMdFwiOiBcIuKJqlwiLFxuXHRcImx0ZG90XCI6IFwi4ouWXCIsXG5cdFwibHRocmVlXCI6IFwi4ouLXCIsXG5cdFwibHRpbWVzXCI6IFwi4ouJXCIsXG5cdFwibHRsYXJyXCI6IFwi4qW2XCIsXG5cdFwibHRxdWVzdFwiOiBcIuKpu1wiLFxuXHRcImx0cmlcIjogXCLil4NcIixcblx0XCJsdHJpZVwiOiBcIuKKtFwiLFxuXHRcImx0cmlmXCI6IFwi4peCXCIsXG5cdFwibHRyUGFyXCI6IFwi4qaWXCIsXG5cdFwibHVyZHNoYXJcIjogXCLipYpcIixcblx0XCJsdXJ1aGFyXCI6IFwi4qWmXCIsXG5cdFwibHZlcnRuZXFxXCI6IFwi4omo77iAXCIsXG5cdFwibHZuRVwiOiBcIuKJqO+4gFwiLFxuXHRcIm1hY3JcIjogXCLCr1wiLFxuXHRcIm1hbGVcIjogXCLimYJcIixcblx0XCJtYWx0XCI6IFwi4pygXCIsXG5cdFwibWFsdGVzZVwiOiBcIuKcoFwiLFxuXHRcIk1hcFwiOiBcIuKkhVwiLFxuXHRcIm1hcFwiOiBcIuKGplwiLFxuXHRcIm1hcHN0b1wiOiBcIuKGplwiLFxuXHRcIm1hcHN0b2Rvd25cIjogXCLihqdcIixcblx0XCJtYXBzdG9sZWZ0XCI6IFwi4oakXCIsXG5cdFwibWFwc3RvdXBcIjogXCLihqVcIixcblx0XCJtYXJrZXJcIjogXCLilq5cIixcblx0XCJtY29tbWFcIjogXCLiqKlcIixcblx0XCJNY3lcIjogXCLQnFwiLFxuXHRcIm1jeVwiOiBcItC8XCIsXG5cdFwibWRhc2hcIjogXCLigJRcIixcblx0XCJtRERvdFwiOiBcIuKIulwiLFxuXHRcIm1lYXN1cmVkYW5nbGVcIjogXCLiiKFcIixcblx0XCJNZWRpdW1TcGFjZVwiOiBcIuKBn1wiLFxuXHRcIk1lbGxpbnRyZlwiOiBcIuKEs1wiLFxuXHRcIk1mclwiOiBcIvCdlJBcIixcblx0XCJtZnJcIjogXCLwnZSqXCIsXG5cdFwibWhvXCI6IFwi4oSnXCIsXG5cdFwibWljcm9cIjogXCLCtVwiLFxuXHRcIm1pZGFzdFwiOiBcIipcIixcblx0XCJtaWRjaXJcIjogXCLiq7BcIixcblx0XCJtaWRcIjogXCLiiKNcIixcblx0XCJtaWRkb3RcIjogXCLCt1wiLFxuXHRcIm1pbnVzYlwiOiBcIuKKn1wiLFxuXHRcIm1pbnVzXCI6IFwi4oiSXCIsXG5cdFwibWludXNkXCI6IFwi4oi4XCIsXG5cdFwibWludXNkdVwiOiBcIuKoqlwiLFxuXHRcIk1pbnVzUGx1c1wiOiBcIuKIk1wiLFxuXHRcIm1sY3BcIjogXCLiq5tcIixcblx0XCJtbGRyXCI6IFwi4oCmXCIsXG5cdFwibW5wbHVzXCI6IFwi4oiTXCIsXG5cdFwibW9kZWxzXCI6IFwi4oqnXCIsXG5cdFwiTW9wZlwiOiBcIvCdlYRcIixcblx0XCJtb3BmXCI6IFwi8J2VnlwiLFxuXHRcIm1wXCI6IFwi4oiTXCIsXG5cdFwibXNjclwiOiBcIvCdk4JcIixcblx0XCJNc2NyXCI6IFwi4oSzXCIsXG5cdFwibXN0cG9zXCI6IFwi4oi+XCIsXG5cdFwiTXVcIjogXCLOnFwiLFxuXHRcIm11XCI6IFwizrxcIixcblx0XCJtdWx0aW1hcFwiOiBcIuKKuFwiLFxuXHRcIm11bWFwXCI6IFwi4oq4XCIsXG5cdFwibmFibGFcIjogXCLiiIdcIixcblx0XCJOYWN1dGVcIjogXCLFg1wiLFxuXHRcIm5hY3V0ZVwiOiBcIsWEXCIsXG5cdFwibmFuZ1wiOiBcIuKIoOKDklwiLFxuXHRcIm5hcFwiOiBcIuKJiVwiLFxuXHRcIm5hcEVcIjogXCLiqbDMuFwiLFxuXHRcIm5hcGlkXCI6IFwi4omLzLhcIixcblx0XCJuYXBvc1wiOiBcIsWJXCIsXG5cdFwibmFwcHJveFwiOiBcIuKJiVwiLFxuXHRcIm5hdHVyYWxcIjogXCLima5cIixcblx0XCJuYXR1cmFsc1wiOiBcIuKElVwiLFxuXHRcIm5hdHVyXCI6IFwi4pmuXCIsXG5cdFwibmJzcFwiOiBcIsKgXCIsXG5cdFwibmJ1bXBcIjogXCLiiY7MuFwiLFxuXHRcIm5idW1wZVwiOiBcIuKJj8y4XCIsXG5cdFwibmNhcFwiOiBcIuKpg1wiLFxuXHRcIk5jYXJvblwiOiBcIsWHXCIsXG5cdFwibmNhcm9uXCI6IFwixYhcIixcblx0XCJOY2VkaWxcIjogXCLFhVwiLFxuXHRcIm5jZWRpbFwiOiBcIsWGXCIsXG5cdFwibmNvbmdcIjogXCLiiYdcIixcblx0XCJuY29uZ2RvdFwiOiBcIuKprcy4XCIsXG5cdFwibmN1cFwiOiBcIuKpglwiLFxuXHRcIk5jeVwiOiBcItCdXCIsXG5cdFwibmN5XCI6IFwi0L1cIixcblx0XCJuZGFzaFwiOiBcIuKAk1wiLFxuXHRcIm5lYXJoa1wiOiBcIuKkpFwiLFxuXHRcIm5lYXJyXCI6IFwi4oaXXCIsXG5cdFwibmVBcnJcIjogXCLih5dcIixcblx0XCJuZWFycm93XCI6IFwi4oaXXCIsXG5cdFwibmVcIjogXCLiiaBcIixcblx0XCJuZWRvdFwiOiBcIuKJkMy4XCIsXG5cdFwiTmVnYXRpdmVNZWRpdW1TcGFjZVwiOiBcIuKAi1wiLFxuXHRcIk5lZ2F0aXZlVGhpY2tTcGFjZVwiOiBcIuKAi1wiLFxuXHRcIk5lZ2F0aXZlVGhpblNwYWNlXCI6IFwi4oCLXCIsXG5cdFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlXCI6IFwi4oCLXCIsXG5cdFwibmVxdWl2XCI6IFwi4omiXCIsXG5cdFwibmVzZWFyXCI6IFwi4qSoXCIsXG5cdFwibmVzaW1cIjogXCLiiYLMuFwiLFxuXHRcIk5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6IFwi4omrXCIsXG5cdFwiTmVzdGVkTGVzc0xlc3NcIjogXCLiiapcIixcblx0XCJOZXdMaW5lXCI6IFwiXFxuXCIsXG5cdFwibmV4aXN0XCI6IFwi4oiEXCIsXG5cdFwibmV4aXN0c1wiOiBcIuKIhFwiLFxuXHRcIk5mclwiOiBcIvCdlJFcIixcblx0XCJuZnJcIjogXCLwnZSrXCIsXG5cdFwibmdFXCI6IFwi4omnzLhcIixcblx0XCJuZ2VcIjogXCLiibFcIixcblx0XCJuZ2VxXCI6IFwi4omxXCIsXG5cdFwibmdlcXFcIjogXCLiiafMuFwiLFxuXHRcIm5nZXFzbGFudFwiOiBcIuKpvsy4XCIsXG5cdFwibmdlc1wiOiBcIuKpvsy4XCIsXG5cdFwibkdnXCI6IFwi4ouZzLhcIixcblx0XCJuZ3NpbVwiOiBcIuKJtVwiLFxuXHRcIm5HdFwiOiBcIuKJq+KDklwiLFxuXHRcIm5ndFwiOiBcIuKJr1wiLFxuXHRcIm5ndHJcIjogXCLiia9cIixcblx0XCJuR3R2XCI6IFwi4omrzLhcIixcblx0XCJuaGFyclwiOiBcIuKGrlwiLFxuXHRcIm5oQXJyXCI6IFwi4oeOXCIsXG5cdFwibmhwYXJcIjogXCLiq7JcIixcblx0XCJuaVwiOiBcIuKIi1wiLFxuXHRcIm5pc1wiOiBcIuKLvFwiLFxuXHRcIm5pc2RcIjogXCLii7pcIixcblx0XCJuaXZcIjogXCLiiItcIixcblx0XCJOSmN5XCI6IFwi0IpcIixcblx0XCJuamN5XCI6IFwi0ZpcIixcblx0XCJubGFyclwiOiBcIuKGmlwiLFxuXHRcIm5sQXJyXCI6IFwi4oeNXCIsXG5cdFwibmxkclwiOiBcIuKApVwiLFxuXHRcIm5sRVwiOiBcIuKJpsy4XCIsXG5cdFwibmxlXCI6IFwi4omwXCIsXG5cdFwibmxlZnRhcnJvd1wiOiBcIuKGmlwiLFxuXHRcIm5MZWZ0YXJyb3dcIjogXCLih41cIixcblx0XCJubGVmdHJpZ2h0YXJyb3dcIjogXCLihq5cIixcblx0XCJuTGVmdHJpZ2h0YXJyb3dcIjogXCLih45cIixcblx0XCJubGVxXCI6IFwi4omwXCIsXG5cdFwibmxlcXFcIjogXCLiiabMuFwiLFxuXHRcIm5sZXFzbGFudFwiOiBcIuKpvcy4XCIsXG5cdFwibmxlc1wiOiBcIuKpvcy4XCIsXG5cdFwibmxlc3NcIjogXCLiia5cIixcblx0XCJuTGxcIjogXCLii5jMuFwiLFxuXHRcIm5sc2ltXCI6IFwi4om0XCIsXG5cdFwibkx0XCI6IFwi4omq4oOSXCIsXG5cdFwibmx0XCI6IFwi4omuXCIsXG5cdFwibmx0cmlcIjogXCLii6pcIixcblx0XCJubHRyaWVcIjogXCLii6xcIixcblx0XCJuTHR2XCI6IFwi4omqzLhcIixcblx0XCJubWlkXCI6IFwi4oikXCIsXG5cdFwiTm9CcmVha1wiOiBcIuKBoFwiLFxuXHRcIk5vbkJyZWFraW5nU3BhY2VcIjogXCLCoFwiLFxuXHRcIm5vcGZcIjogXCLwnZWfXCIsXG5cdFwiTm9wZlwiOiBcIuKElVwiLFxuXHRcIk5vdFwiOiBcIuKrrFwiLFxuXHRcIm5vdFwiOiBcIsKsXCIsXG5cdFwiTm90Q29uZ3J1ZW50XCI6IFwi4omiXCIsXG5cdFwiTm90Q3VwQ2FwXCI6IFwi4omtXCIsXG5cdFwiTm90RG91YmxlVmVydGljYWxCYXJcIjogXCLiiKZcIixcblx0XCJOb3RFbGVtZW50XCI6IFwi4oiJXCIsXG5cdFwiTm90RXF1YWxcIjogXCLiiaBcIixcblx0XCJOb3RFcXVhbFRpbGRlXCI6IFwi4omCzLhcIixcblx0XCJOb3RFeGlzdHNcIjogXCLiiIRcIixcblx0XCJOb3RHcmVhdGVyXCI6IFwi4omvXCIsXG5cdFwiTm90R3JlYXRlckVxdWFsXCI6IFwi4omxXCIsXG5cdFwiTm90R3JlYXRlckZ1bGxFcXVhbFwiOiBcIuKJp8y4XCIsXG5cdFwiTm90R3JlYXRlckdyZWF0ZXJcIjogXCLiiavMuFwiLFxuXHRcIk5vdEdyZWF0ZXJMZXNzXCI6IFwi4om5XCIsXG5cdFwiTm90R3JlYXRlclNsYW50RXF1YWxcIjogXCLiqb7MuFwiLFxuXHRcIk5vdEdyZWF0ZXJUaWxkZVwiOiBcIuKJtVwiLFxuXHRcIk5vdEh1bXBEb3duSHVtcFwiOiBcIuKJjsy4XCIsXG5cdFwiTm90SHVtcEVxdWFsXCI6IFwi4omPzLhcIixcblx0XCJub3RpblwiOiBcIuKIiVwiLFxuXHRcIm5vdGluZG90XCI6IFwi4ou1zLhcIixcblx0XCJub3RpbkVcIjogXCLii7nMuFwiLFxuXHRcIm5vdGludmFcIjogXCLiiIlcIixcblx0XCJub3RpbnZiXCI6IFwi4ou3XCIsXG5cdFwibm90aW52Y1wiOiBcIuKLtlwiLFxuXHRcIk5vdExlZnRUcmlhbmdsZUJhclwiOiBcIuKnj8y4XCIsXG5cdFwiTm90TGVmdFRyaWFuZ2xlXCI6IFwi4ouqXCIsXG5cdFwiTm90TGVmdFRyaWFuZ2xlRXF1YWxcIjogXCLii6xcIixcblx0XCJOb3RMZXNzXCI6IFwi4omuXCIsXG5cdFwiTm90TGVzc0VxdWFsXCI6IFwi4omwXCIsXG5cdFwiTm90TGVzc0dyZWF0ZXJcIjogXCLiibhcIixcblx0XCJOb3RMZXNzTGVzc1wiOiBcIuKJqsy4XCIsXG5cdFwiTm90TGVzc1NsYW50RXF1YWxcIjogXCLiqb3MuFwiLFxuXHRcIk5vdExlc3NUaWxkZVwiOiBcIuKJtFwiLFxuXHRcIk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6IFwi4qqizLhcIixcblx0XCJOb3ROZXN0ZWRMZXNzTGVzc1wiOiBcIuKqocy4XCIsXG5cdFwibm90bmlcIjogXCLiiIxcIixcblx0XCJub3RuaXZhXCI6IFwi4oiMXCIsXG5cdFwibm90bml2YlwiOiBcIuKLvlwiLFxuXHRcIm5vdG5pdmNcIjogXCLii71cIixcblx0XCJOb3RQcmVjZWRlc1wiOiBcIuKKgFwiLFxuXHRcIk5vdFByZWNlZGVzRXF1YWxcIjogXCLiqq/MuFwiLFxuXHRcIk5vdFByZWNlZGVzU2xhbnRFcXVhbFwiOiBcIuKLoFwiLFxuXHRcIk5vdFJldmVyc2VFbGVtZW50XCI6IFwi4oiMXCIsXG5cdFwiTm90UmlnaHRUcmlhbmdsZUJhclwiOiBcIuKnkMy4XCIsXG5cdFwiTm90UmlnaHRUcmlhbmdsZVwiOiBcIuKLq1wiLFxuXHRcIk5vdFJpZ2h0VHJpYW5nbGVFcXVhbFwiOiBcIuKLrVwiLFxuXHRcIk5vdFNxdWFyZVN1YnNldFwiOiBcIuKKj8y4XCIsXG5cdFwiTm90U3F1YXJlU3Vic2V0RXF1YWxcIjogXCLii6JcIixcblx0XCJOb3RTcXVhcmVTdXBlcnNldFwiOiBcIuKKkMy4XCIsXG5cdFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbFwiOiBcIuKLo1wiLFxuXHRcIk5vdFN1YnNldFwiOiBcIuKKguKDklwiLFxuXHRcIk5vdFN1YnNldEVxdWFsXCI6IFwi4oqIXCIsXG5cdFwiTm90U3VjY2VlZHNcIjogXCLiioFcIixcblx0XCJOb3RTdWNjZWVkc0VxdWFsXCI6IFwi4qqwzLhcIixcblx0XCJOb3RTdWNjZWVkc1NsYW50RXF1YWxcIjogXCLii6FcIixcblx0XCJOb3RTdWNjZWVkc1RpbGRlXCI6IFwi4om/zLhcIixcblx0XCJOb3RTdXBlcnNldFwiOiBcIuKKg+KDklwiLFxuXHRcIk5vdFN1cGVyc2V0RXF1YWxcIjogXCLiiolcIixcblx0XCJOb3RUaWxkZVwiOiBcIuKJgVwiLFxuXHRcIk5vdFRpbGRlRXF1YWxcIjogXCLiiYRcIixcblx0XCJOb3RUaWxkZUZ1bGxFcXVhbFwiOiBcIuKJh1wiLFxuXHRcIk5vdFRpbGRlVGlsZGVcIjogXCLiiYlcIixcblx0XCJOb3RWZXJ0aWNhbEJhclwiOiBcIuKIpFwiLFxuXHRcIm5wYXJhbGxlbFwiOiBcIuKIplwiLFxuXHRcIm5wYXJcIjogXCLiiKZcIixcblx0XCJucGFyc2xcIjogXCLiq73ig6VcIixcblx0XCJucGFydFwiOiBcIuKIgsy4XCIsXG5cdFwibnBvbGludFwiOiBcIuKolFwiLFxuXHRcIm5wclwiOiBcIuKKgFwiLFxuXHRcIm5wcmN1ZVwiOiBcIuKLoFwiLFxuXHRcIm5wcmVjXCI6IFwi4oqAXCIsXG5cdFwibnByZWNlcVwiOiBcIuKqr8y4XCIsXG5cdFwibnByZVwiOiBcIuKqr8y4XCIsXG5cdFwibnJhcnJjXCI6IFwi4qSzzLhcIixcblx0XCJucmFyclwiOiBcIuKGm1wiLFxuXHRcIm5yQXJyXCI6IFwi4oePXCIsXG5cdFwibnJhcnJ3XCI6IFwi4oadzLhcIixcblx0XCJucmlnaHRhcnJvd1wiOiBcIuKGm1wiLFxuXHRcIm5SaWdodGFycm93XCI6IFwi4oePXCIsXG5cdFwibnJ0cmlcIjogXCLii6tcIixcblx0XCJucnRyaWVcIjogXCLii61cIixcblx0XCJuc2NcIjogXCLiioFcIixcblx0XCJuc2NjdWVcIjogXCLii6FcIixcblx0XCJuc2NlXCI6IFwi4qqwzLhcIixcblx0XCJOc2NyXCI6IFwi8J2SqVwiLFxuXHRcIm5zY3JcIjogXCLwnZODXCIsXG5cdFwibnNob3J0bWlkXCI6IFwi4oikXCIsXG5cdFwibnNob3J0cGFyYWxsZWxcIjogXCLiiKZcIixcblx0XCJuc2ltXCI6IFwi4omBXCIsXG5cdFwibnNpbWVcIjogXCLiiYRcIixcblx0XCJuc2ltZXFcIjogXCLiiYRcIixcblx0XCJuc21pZFwiOiBcIuKIpFwiLFxuXHRcIm5zcGFyXCI6IFwi4oimXCIsXG5cdFwibnNxc3ViZVwiOiBcIuKLolwiLFxuXHRcIm5zcXN1cGVcIjogXCLii6NcIixcblx0XCJuc3ViXCI6IFwi4oqEXCIsXG5cdFwibnN1YkVcIjogXCLiq4XMuFwiLFxuXHRcIm5zdWJlXCI6IFwi4oqIXCIsXG5cdFwibnN1YnNldFwiOiBcIuKKguKDklwiLFxuXHRcIm5zdWJzZXRlcVwiOiBcIuKKiFwiLFxuXHRcIm5zdWJzZXRlcXFcIjogXCLiq4XMuFwiLFxuXHRcIm5zdWNjXCI6IFwi4oqBXCIsXG5cdFwibnN1Y2NlcVwiOiBcIuKqsMy4XCIsXG5cdFwibnN1cFwiOiBcIuKKhVwiLFxuXHRcIm5zdXBFXCI6IFwi4quGzLhcIixcblx0XCJuc3VwZVwiOiBcIuKKiVwiLFxuXHRcIm5zdXBzZXRcIjogXCLiioPig5JcIixcblx0XCJuc3Vwc2V0ZXFcIjogXCLiiolcIixcblx0XCJuc3Vwc2V0ZXFxXCI6IFwi4quGzLhcIixcblx0XCJudGdsXCI6IFwi4om5XCIsXG5cdFwiTnRpbGRlXCI6IFwiw5FcIixcblx0XCJudGlsZGVcIjogXCLDsVwiLFxuXHRcIm50bGdcIjogXCLiibhcIixcblx0XCJudHJpYW5nbGVsZWZ0XCI6IFwi4ouqXCIsXG5cdFwibnRyaWFuZ2xlbGVmdGVxXCI6IFwi4ousXCIsXG5cdFwibnRyaWFuZ2xlcmlnaHRcIjogXCLii6tcIixcblx0XCJudHJpYW5nbGVyaWdodGVxXCI6IFwi4outXCIsXG5cdFwiTnVcIjogXCLOnVwiLFxuXHRcIm51XCI6IFwizr1cIixcblx0XCJudW1cIjogXCIjXCIsXG5cdFwibnVtZXJvXCI6IFwi4oSWXCIsXG5cdFwibnVtc3BcIjogXCLigIdcIixcblx0XCJudmFwXCI6IFwi4omN4oOSXCIsXG5cdFwibnZkYXNoXCI6IFwi4oqsXCIsXG5cdFwibnZEYXNoXCI6IFwi4oqtXCIsXG5cdFwiblZkYXNoXCI6IFwi4oquXCIsXG5cdFwiblZEYXNoXCI6IFwi4oqvXCIsXG5cdFwibnZnZVwiOiBcIuKJpeKDklwiLFxuXHRcIm52Z3RcIjogXCI+4oOSXCIsXG5cdFwibnZIYXJyXCI6IFwi4qSEXCIsXG5cdFwibnZpbmZpblwiOiBcIuKnnlwiLFxuXHRcIm52bEFyclwiOiBcIuKkglwiLFxuXHRcIm52bGVcIjogXCLiiaTig5JcIixcblx0XCJudmx0XCI6IFwiPOKDklwiLFxuXHRcIm52bHRyaWVcIjogXCLiirTig5JcIixcblx0XCJudnJBcnJcIjogXCLipINcIixcblx0XCJudnJ0cmllXCI6IFwi4oq14oOSXCIsXG5cdFwibnZzaW1cIjogXCLiiLzig5JcIixcblx0XCJud2FyaGtcIjogXCLipKNcIixcblx0XCJud2FyclwiOiBcIuKGllwiLFxuXHRcIm53QXJyXCI6IFwi4oeWXCIsXG5cdFwibndhcnJvd1wiOiBcIuKGllwiLFxuXHRcIm53bmVhclwiOiBcIuKkp1wiLFxuXHRcIk9hY3V0ZVwiOiBcIsOTXCIsXG5cdFwib2FjdXRlXCI6IFwiw7NcIixcblx0XCJvYXN0XCI6IFwi4oqbXCIsXG5cdFwiT2NpcmNcIjogXCLDlFwiLFxuXHRcIm9jaXJjXCI6IFwiw7RcIixcblx0XCJvY2lyXCI6IFwi4oqaXCIsXG5cdFwiT2N5XCI6IFwi0J5cIixcblx0XCJvY3lcIjogXCLQvlwiLFxuXHRcIm9kYXNoXCI6IFwi4oqdXCIsXG5cdFwiT2RibGFjXCI6IFwixZBcIixcblx0XCJvZGJsYWNcIjogXCLFkVwiLFxuXHRcIm9kaXZcIjogXCLiqLhcIixcblx0XCJvZG90XCI6IFwi4oqZXCIsXG5cdFwib2Rzb2xkXCI6IFwi4qa8XCIsXG5cdFwiT0VsaWdcIjogXCLFklwiLFxuXHRcIm9lbGlnXCI6IFwixZNcIixcblx0XCJvZmNpclwiOiBcIuKmv1wiLFxuXHRcIk9mclwiOiBcIvCdlJJcIixcblx0XCJvZnJcIjogXCLwnZSsXCIsXG5cdFwib2dvblwiOiBcIsubXCIsXG5cdFwiT2dyYXZlXCI6IFwiw5JcIixcblx0XCJvZ3JhdmVcIjogXCLDslwiLFxuXHRcIm9ndFwiOiBcIuKngVwiLFxuXHRcIm9oYmFyXCI6IFwi4qa1XCIsXG5cdFwib2htXCI6IFwizqlcIixcblx0XCJvaW50XCI6IFwi4oiuXCIsXG5cdFwib2xhcnJcIjogXCLihrpcIixcblx0XCJvbGNpclwiOiBcIuKmvlwiLFxuXHRcIm9sY3Jvc3NcIjogXCLiprtcIixcblx0XCJvbGluZVwiOiBcIuKAvlwiLFxuXHRcIm9sdFwiOiBcIuKngFwiLFxuXHRcIk9tYWNyXCI6IFwixYxcIixcblx0XCJvbWFjclwiOiBcIsWNXCIsXG5cdFwiT21lZ2FcIjogXCLOqVwiLFxuXHRcIm9tZWdhXCI6IFwiz4lcIixcblx0XCJPbWljcm9uXCI6IFwizp9cIixcblx0XCJvbWljcm9uXCI6IFwizr9cIixcblx0XCJvbWlkXCI6IFwi4qa2XCIsXG5cdFwib21pbnVzXCI6IFwi4oqWXCIsXG5cdFwiT29wZlwiOiBcIvCdlYZcIixcblx0XCJvb3BmXCI6IFwi8J2VoFwiLFxuXHRcIm9wYXJcIjogXCLiprdcIixcblx0XCJPcGVuQ3VybHlEb3VibGVRdW90ZVwiOiBcIuKAnFwiLFxuXHRcIk9wZW5DdXJseVF1b3RlXCI6IFwi4oCYXCIsXG5cdFwib3BlcnBcIjogXCLiprlcIixcblx0XCJvcGx1c1wiOiBcIuKKlVwiLFxuXHRcIm9yYXJyXCI6IFwi4oa7XCIsXG5cdFwiT3JcIjogXCLiqZRcIixcblx0XCJvclwiOiBcIuKIqFwiLFxuXHRcIm9yZFwiOiBcIuKpnVwiLFxuXHRcIm9yZGVyXCI6IFwi4oS0XCIsXG5cdFwib3JkZXJvZlwiOiBcIuKEtFwiLFxuXHRcIm9yZGZcIjogXCLCqlwiLFxuXHRcIm9yZG1cIjogXCLCulwiLFxuXHRcIm9yaWdvZlwiOiBcIuKKtlwiLFxuXHRcIm9yb3JcIjogXCLiqZZcIixcblx0XCJvcnNsb3BlXCI6IFwi4qmXXCIsXG5cdFwib3J2XCI6IFwi4qmbXCIsXG5cdFwib1NcIjogXCLik4hcIixcblx0XCJPc2NyXCI6IFwi8J2SqlwiLFxuXHRcIm9zY3JcIjogXCLihLRcIixcblx0XCJPc2xhc2hcIjogXCLDmFwiLFxuXHRcIm9zbGFzaFwiOiBcIsO4XCIsXG5cdFwib3NvbFwiOiBcIuKKmFwiLFxuXHRcIk90aWxkZVwiOiBcIsOVXCIsXG5cdFwib3RpbGRlXCI6IFwiw7VcIixcblx0XCJvdGltZXNhc1wiOiBcIuKotlwiLFxuXHRcIk90aW1lc1wiOiBcIuKot1wiLFxuXHRcIm90aW1lc1wiOiBcIuKKl1wiLFxuXHRcIk91bWxcIjogXCLDllwiLFxuXHRcIm91bWxcIjogXCLDtlwiLFxuXHRcIm92YmFyXCI6IFwi4oy9XCIsXG5cdFwiT3ZlckJhclwiOiBcIuKAvlwiLFxuXHRcIk92ZXJCcmFjZVwiOiBcIuKPnlwiLFxuXHRcIk92ZXJCcmFja2V0XCI6IFwi4o60XCIsXG5cdFwiT3ZlclBhcmVudGhlc2lzXCI6IFwi4o+cXCIsXG5cdFwicGFyYVwiOiBcIsK2XCIsXG5cdFwicGFyYWxsZWxcIjogXCLiiKVcIixcblx0XCJwYXJcIjogXCLiiKVcIixcblx0XCJwYXJzaW1cIjogXCLiq7NcIixcblx0XCJwYXJzbFwiOiBcIuKrvVwiLFxuXHRcInBhcnRcIjogXCLiiIJcIixcblx0XCJQYXJ0aWFsRFwiOiBcIuKIglwiLFxuXHRcIlBjeVwiOiBcItCfXCIsXG5cdFwicGN5XCI6IFwi0L9cIixcblx0XCJwZXJjbnRcIjogXCIlXCIsXG5cdFwicGVyaW9kXCI6IFwiLlwiLFxuXHRcInBlcm1pbFwiOiBcIuKAsFwiLFxuXHRcInBlcnBcIjogXCLiiqVcIixcblx0XCJwZXJ0ZW5rXCI6IFwi4oCxXCIsXG5cdFwiUGZyXCI6IFwi8J2Uk1wiLFxuXHRcInBmclwiOiBcIvCdlK1cIixcblx0XCJQaGlcIjogXCLOplwiLFxuXHRcInBoaVwiOiBcIs+GXCIsXG5cdFwicGhpdlwiOiBcIs+VXCIsXG5cdFwicGhtbWF0XCI6IFwi4oSzXCIsXG5cdFwicGhvbmVcIjogXCLimI5cIixcblx0XCJQaVwiOiBcIs6gXCIsXG5cdFwicGlcIjogXCLPgFwiLFxuXHRcInBpdGNoZm9ya1wiOiBcIuKLlFwiLFxuXHRcInBpdlwiOiBcIs+WXCIsXG5cdFwicGxhbmNrXCI6IFwi4oSPXCIsXG5cdFwicGxhbmNraFwiOiBcIuKEjlwiLFxuXHRcInBsYW5rdlwiOiBcIuKEj1wiLFxuXHRcInBsdXNhY2lyXCI6IFwi4qijXCIsXG5cdFwicGx1c2JcIjogXCLiip5cIixcblx0XCJwbHVzY2lyXCI6IFwi4qiiXCIsXG5cdFwicGx1c1wiOiBcIitcIixcblx0XCJwbHVzZG9cIjogXCLiiJRcIixcblx0XCJwbHVzZHVcIjogXCLiqKVcIixcblx0XCJwbHVzZVwiOiBcIuKpslwiLFxuXHRcIlBsdXNNaW51c1wiOiBcIsKxXCIsXG5cdFwicGx1c21uXCI6IFwiwrFcIixcblx0XCJwbHVzc2ltXCI6IFwi4qimXCIsXG5cdFwicGx1c3R3b1wiOiBcIuKop1wiLFxuXHRcInBtXCI6IFwiwrFcIixcblx0XCJQb2luY2FyZXBsYW5lXCI6IFwi4oSMXCIsXG5cdFwicG9pbnRpbnRcIjogXCLiqJVcIixcblx0XCJwb3BmXCI6IFwi8J2VoVwiLFxuXHRcIlBvcGZcIjogXCLihJlcIixcblx0XCJwb3VuZFwiOiBcIsKjXCIsXG5cdFwicHJhcFwiOiBcIuKqt1wiLFxuXHRcIlByXCI6IFwi4qq7XCIsXG5cdFwicHJcIjogXCLiibpcIixcblx0XCJwcmN1ZVwiOiBcIuKJvFwiLFxuXHRcInByZWNhcHByb3hcIjogXCLiqrdcIixcblx0XCJwcmVjXCI6IFwi4om6XCIsXG5cdFwicHJlY2N1cmx5ZXFcIjogXCLiibxcIixcblx0XCJQcmVjZWRlc1wiOiBcIuKJulwiLFxuXHRcIlByZWNlZGVzRXF1YWxcIjogXCLiqq9cIixcblx0XCJQcmVjZWRlc1NsYW50RXF1YWxcIjogXCLiibxcIixcblx0XCJQcmVjZWRlc1RpbGRlXCI6IFwi4om+XCIsXG5cdFwicHJlY2VxXCI6IFwi4qqvXCIsXG5cdFwicHJlY25hcHByb3hcIjogXCLiqrlcIixcblx0XCJwcmVjbmVxcVwiOiBcIuKqtVwiLFxuXHRcInByZWNuc2ltXCI6IFwi4ouoXCIsXG5cdFwicHJlXCI6IFwi4qqvXCIsXG5cdFwicHJFXCI6IFwi4qqzXCIsXG5cdFwicHJlY3NpbVwiOiBcIuKJvlwiLFxuXHRcInByaW1lXCI6IFwi4oCyXCIsXG5cdFwiUHJpbWVcIjogXCLigLNcIixcblx0XCJwcmltZXNcIjogXCLihJlcIixcblx0XCJwcm5hcFwiOiBcIuKquVwiLFxuXHRcInBybkVcIjogXCLiqrVcIixcblx0XCJwcm5zaW1cIjogXCLii6hcIixcblx0XCJwcm9kXCI6IFwi4oiPXCIsXG5cdFwiUHJvZHVjdFwiOiBcIuKIj1wiLFxuXHRcInByb2ZhbGFyXCI6IFwi4oyuXCIsXG5cdFwicHJvZmxpbmVcIjogXCLijJJcIixcblx0XCJwcm9mc3VyZlwiOiBcIuKMk1wiLFxuXHRcInByb3BcIjogXCLiiJ1cIixcblx0XCJQcm9wb3J0aW9uYWxcIjogXCLiiJ1cIixcblx0XCJQcm9wb3J0aW9uXCI6IFwi4oi3XCIsXG5cdFwicHJvcHRvXCI6IFwi4oidXCIsXG5cdFwicHJzaW1cIjogXCLiib5cIixcblx0XCJwcnVyZWxcIjogXCLiirBcIixcblx0XCJQc2NyXCI6IFwi8J2Sq1wiLFxuXHRcInBzY3JcIjogXCLwnZOFXCIsXG5cdFwiUHNpXCI6IFwizqhcIixcblx0XCJwc2lcIjogXCLPiFwiLFxuXHRcInB1bmNzcFwiOiBcIuKAiFwiLFxuXHRcIlFmclwiOiBcIvCdlJRcIixcblx0XCJxZnJcIjogXCLwnZSuXCIsXG5cdFwicWludFwiOiBcIuKojFwiLFxuXHRcInFvcGZcIjogXCLwnZWiXCIsXG5cdFwiUW9wZlwiOiBcIuKEmlwiLFxuXHRcInFwcmltZVwiOiBcIuKBl1wiLFxuXHRcIlFzY3JcIjogXCLwnZKsXCIsXG5cdFwicXNjclwiOiBcIvCdk4ZcIixcblx0XCJxdWF0ZXJuaW9uc1wiOiBcIuKEjVwiLFxuXHRcInF1YXRpbnRcIjogXCLiqJZcIixcblx0XCJxdWVzdFwiOiBcIj9cIixcblx0XCJxdWVzdGVxXCI6IFwi4omfXCIsXG5cdFwicXVvdFwiOiBcIlxcXCJcIixcblx0XCJRVU9UXCI6IFwiXFxcIlwiLFxuXHRcInJBYXJyXCI6IFwi4oebXCIsXG5cdFwicmFjZVwiOiBcIuKIvcyxXCIsXG5cdFwiUmFjdXRlXCI6IFwixZRcIixcblx0XCJyYWN1dGVcIjogXCLFlVwiLFxuXHRcInJhZGljXCI6IFwi4oiaXCIsXG5cdFwicmFlbXB0eXZcIjogXCLiprNcIixcblx0XCJyYW5nXCI6IFwi4p+pXCIsXG5cdFwiUmFuZ1wiOiBcIuKfq1wiLFxuXHRcInJhbmdkXCI6IFwi4qaSXCIsXG5cdFwicmFuZ2VcIjogXCLipqVcIixcblx0XCJyYW5nbGVcIjogXCLin6lcIixcblx0XCJyYXF1b1wiOiBcIsK7XCIsXG5cdFwicmFycmFwXCI6IFwi4qW1XCIsXG5cdFwicmFycmJcIjogXCLih6VcIixcblx0XCJyYXJyYmZzXCI6IFwi4qSgXCIsXG5cdFwicmFycmNcIjogXCLipLNcIixcblx0XCJyYXJyXCI6IFwi4oaSXCIsXG5cdFwiUmFyclwiOiBcIuKGoFwiLFxuXHRcInJBcnJcIjogXCLih5JcIixcblx0XCJyYXJyZnNcIjogXCLipJ5cIixcblx0XCJyYXJyaGtcIjogXCLihqpcIixcblx0XCJyYXJybHBcIjogXCLihqxcIixcblx0XCJyYXJycGxcIjogXCLipYVcIixcblx0XCJyYXJyc2ltXCI6IFwi4qW0XCIsXG5cdFwiUmFycnRsXCI6IFwi4qSWXCIsXG5cdFwicmFycnRsXCI6IFwi4oajXCIsXG5cdFwicmFycndcIjogXCLihp1cIixcblx0XCJyYXRhaWxcIjogXCLipJpcIixcblx0XCJyQXRhaWxcIjogXCLipJxcIixcblx0XCJyYXRpb1wiOiBcIuKItlwiLFxuXHRcInJhdGlvbmFsc1wiOiBcIuKEmlwiLFxuXHRcInJiYXJyXCI6IFwi4qSNXCIsXG5cdFwickJhcnJcIjogXCLipI9cIixcblx0XCJSQmFyclwiOiBcIuKkkFwiLFxuXHRcInJiYnJrXCI6IFwi4p2zXCIsXG5cdFwicmJyYWNlXCI6IFwifVwiLFxuXHRcInJicmFja1wiOiBcIl1cIixcblx0XCJyYnJrZVwiOiBcIuKmjFwiLFxuXHRcInJicmtzbGRcIjogXCLipo5cIixcblx0XCJyYnJrc2x1XCI6IFwi4qaQXCIsXG5cdFwiUmNhcm9uXCI6IFwixZhcIixcblx0XCJyY2Fyb25cIjogXCLFmVwiLFxuXHRcIlJjZWRpbFwiOiBcIsWWXCIsXG5cdFwicmNlZGlsXCI6IFwixZdcIixcblx0XCJyY2VpbFwiOiBcIuKMiVwiLFxuXHRcInJjdWJcIjogXCJ9XCIsXG5cdFwiUmN5XCI6IFwi0KBcIixcblx0XCJyY3lcIjogXCLRgFwiLFxuXHRcInJkY2FcIjogXCLipLdcIixcblx0XCJyZGxkaGFyXCI6IFwi4qWpXCIsXG5cdFwicmRxdW9cIjogXCLigJ1cIixcblx0XCJyZHF1b3JcIjogXCLigJ1cIixcblx0XCJyZHNoXCI6IFwi4oazXCIsXG5cdFwicmVhbFwiOiBcIuKEnFwiLFxuXHRcInJlYWxpbmVcIjogXCLihJtcIixcblx0XCJyZWFscGFydFwiOiBcIuKEnFwiLFxuXHRcInJlYWxzXCI6IFwi4oSdXCIsXG5cdFwiUmVcIjogXCLihJxcIixcblx0XCJyZWN0XCI6IFwi4patXCIsXG5cdFwicmVnXCI6IFwiwq5cIixcblx0XCJSRUdcIjogXCLCrlwiLFxuXHRcIlJldmVyc2VFbGVtZW50XCI6IFwi4oiLXCIsXG5cdFwiUmV2ZXJzZUVxdWlsaWJyaXVtXCI6IFwi4oeLXCIsXG5cdFwiUmV2ZXJzZVVwRXF1aWxpYnJpdW1cIjogXCLipa9cIixcblx0XCJyZmlzaHRcIjogXCLipb1cIixcblx0XCJyZmxvb3JcIjogXCLijItcIixcblx0XCJyZnJcIjogXCLwnZSvXCIsXG5cdFwiUmZyXCI6IFwi4oScXCIsXG5cdFwickhhclwiOiBcIuKlpFwiLFxuXHRcInJoYXJkXCI6IFwi4oeBXCIsXG5cdFwicmhhcnVcIjogXCLih4BcIixcblx0XCJyaGFydWxcIjogXCLipaxcIixcblx0XCJSaG9cIjogXCLOoVwiLFxuXHRcInJob1wiOiBcIs+BXCIsXG5cdFwicmhvdlwiOiBcIs+xXCIsXG5cdFwiUmlnaHRBbmdsZUJyYWNrZXRcIjogXCLin6lcIixcblx0XCJSaWdodEFycm93QmFyXCI6IFwi4oelXCIsXG5cdFwicmlnaHRhcnJvd1wiOiBcIuKGklwiLFxuXHRcIlJpZ2h0QXJyb3dcIjogXCLihpJcIixcblx0XCJSaWdodGFycm93XCI6IFwi4oeSXCIsXG5cdFwiUmlnaHRBcnJvd0xlZnRBcnJvd1wiOiBcIuKHhFwiLFxuXHRcInJpZ2h0YXJyb3d0YWlsXCI6IFwi4oajXCIsXG5cdFwiUmlnaHRDZWlsaW5nXCI6IFwi4oyJXCIsXG5cdFwiUmlnaHREb3VibGVCcmFja2V0XCI6IFwi4p+nXCIsXG5cdFwiUmlnaHREb3duVGVlVmVjdG9yXCI6IFwi4qWdXCIsXG5cdFwiUmlnaHREb3duVmVjdG9yQmFyXCI6IFwi4qWVXCIsXG5cdFwiUmlnaHREb3duVmVjdG9yXCI6IFwi4oeCXCIsXG5cdFwiUmlnaHRGbG9vclwiOiBcIuKMi1wiLFxuXHRcInJpZ2h0aGFycG9vbmRvd25cIjogXCLih4FcIixcblx0XCJyaWdodGhhcnBvb251cFwiOiBcIuKHgFwiLFxuXHRcInJpZ2h0bGVmdGFycm93c1wiOiBcIuKHhFwiLFxuXHRcInJpZ2h0bGVmdGhhcnBvb25zXCI6IFwi4oeMXCIsXG5cdFwicmlnaHRyaWdodGFycm93c1wiOiBcIuKHiVwiLFxuXHRcInJpZ2h0c3F1aWdhcnJvd1wiOiBcIuKGnVwiLFxuXHRcIlJpZ2h0VGVlQXJyb3dcIjogXCLihqZcIixcblx0XCJSaWdodFRlZVwiOiBcIuKKolwiLFxuXHRcIlJpZ2h0VGVlVmVjdG9yXCI6IFwi4qWbXCIsXG5cdFwicmlnaHR0aHJlZXRpbWVzXCI6IFwi4ouMXCIsXG5cdFwiUmlnaHRUcmlhbmdsZUJhclwiOiBcIuKnkFwiLFxuXHRcIlJpZ2h0VHJpYW5nbGVcIjogXCLiirNcIixcblx0XCJSaWdodFRyaWFuZ2xlRXF1YWxcIjogXCLiirVcIixcblx0XCJSaWdodFVwRG93blZlY3RvclwiOiBcIuKlj1wiLFxuXHRcIlJpZ2h0VXBUZWVWZWN0b3JcIjogXCLipZxcIixcblx0XCJSaWdodFVwVmVjdG9yQmFyXCI6IFwi4qWUXCIsXG5cdFwiUmlnaHRVcFZlY3RvclwiOiBcIuKGvlwiLFxuXHRcIlJpZ2h0VmVjdG9yQmFyXCI6IFwi4qWTXCIsXG5cdFwiUmlnaHRWZWN0b3JcIjogXCLih4BcIixcblx0XCJyaW5nXCI6IFwiy5pcIixcblx0XCJyaXNpbmdkb3RzZXFcIjogXCLiiZNcIixcblx0XCJybGFyclwiOiBcIuKHhFwiLFxuXHRcInJsaGFyXCI6IFwi4oeMXCIsXG5cdFwicmxtXCI6IFwi4oCPXCIsXG5cdFwicm1vdXN0YWNoZVwiOiBcIuKOsVwiLFxuXHRcInJtb3VzdFwiOiBcIuKOsVwiLFxuXHRcInJubWlkXCI6IFwi4quuXCIsXG5cdFwicm9hbmdcIjogXCLin61cIixcblx0XCJyb2FyclwiOiBcIuKHvlwiLFxuXHRcInJvYnJrXCI6IFwi4p+nXCIsXG5cdFwicm9wYXJcIjogXCLipoZcIixcblx0XCJyb3BmXCI6IFwi8J2Vo1wiLFxuXHRcIlJvcGZcIjogXCLihJ1cIixcblx0XCJyb3BsdXNcIjogXCLiqK5cIixcblx0XCJyb3RpbWVzXCI6IFwi4qi1XCIsXG5cdFwiUm91bmRJbXBsaWVzXCI6IFwi4qWwXCIsXG5cdFwicnBhclwiOiBcIilcIixcblx0XCJycGFyZ3RcIjogXCLippRcIixcblx0XCJycHBvbGludFwiOiBcIuKoklwiLFxuXHRcInJyYXJyXCI6IFwi4oeJXCIsXG5cdFwiUnJpZ2h0YXJyb3dcIjogXCLih5tcIixcblx0XCJyc2FxdW9cIjogXCLigLpcIixcblx0XCJyc2NyXCI6IFwi8J2Th1wiLFxuXHRcIlJzY3JcIjogXCLihJtcIixcblx0XCJyc2hcIjogXCLihrFcIixcblx0XCJSc2hcIjogXCLihrFcIixcblx0XCJyc3FiXCI6IFwiXVwiLFxuXHRcInJzcXVvXCI6IFwi4oCZXCIsXG5cdFwicnNxdW9yXCI6IFwi4oCZXCIsXG5cdFwicnRocmVlXCI6IFwi4ouMXCIsXG5cdFwicnRpbWVzXCI6IFwi4ouKXCIsXG5cdFwicnRyaVwiOiBcIuKWuVwiLFxuXHRcInJ0cmllXCI6IFwi4oq1XCIsXG5cdFwicnRyaWZcIjogXCLilrhcIixcblx0XCJydHJpbHRyaVwiOiBcIuKnjlwiLFxuXHRcIlJ1bGVEZWxheWVkXCI6IFwi4qe0XCIsXG5cdFwicnVsdWhhclwiOiBcIuKlqFwiLFxuXHRcInJ4XCI6IFwi4oSeXCIsXG5cdFwiU2FjdXRlXCI6IFwixZpcIixcblx0XCJzYWN1dGVcIjogXCLFm1wiLFxuXHRcInNicXVvXCI6IFwi4oCaXCIsXG5cdFwic2NhcFwiOiBcIuKquFwiLFxuXHRcIlNjYXJvblwiOiBcIsWgXCIsXG5cdFwic2Nhcm9uXCI6IFwixaFcIixcblx0XCJTY1wiOiBcIuKqvFwiLFxuXHRcInNjXCI6IFwi4om7XCIsXG5cdFwic2NjdWVcIjogXCLiib1cIixcblx0XCJzY2VcIjogXCLiqrBcIixcblx0XCJzY0VcIjogXCLiqrRcIixcblx0XCJTY2VkaWxcIjogXCLFnlwiLFxuXHRcInNjZWRpbFwiOiBcIsWfXCIsXG5cdFwiU2NpcmNcIjogXCLFnFwiLFxuXHRcInNjaXJjXCI6IFwixZ1cIixcblx0XCJzY25hcFwiOiBcIuKqulwiLFxuXHRcInNjbkVcIjogXCLiqrZcIixcblx0XCJzY25zaW1cIjogXCLii6lcIixcblx0XCJzY3BvbGludFwiOiBcIuKok1wiLFxuXHRcInNjc2ltXCI6IFwi4om/XCIsXG5cdFwiU2N5XCI6IFwi0KFcIixcblx0XCJzY3lcIjogXCLRgVwiLFxuXHRcInNkb3RiXCI6IFwi4oqhXCIsXG5cdFwic2RvdFwiOiBcIuKLhVwiLFxuXHRcInNkb3RlXCI6IFwi4qmmXCIsXG5cdFwic2VhcmhrXCI6IFwi4qSlXCIsXG5cdFwic2VhcnJcIjogXCLihphcIixcblx0XCJzZUFyclwiOiBcIuKHmFwiLFxuXHRcInNlYXJyb3dcIjogXCLihphcIixcblx0XCJzZWN0XCI6IFwiwqdcIixcblx0XCJzZW1pXCI6IFwiO1wiLFxuXHRcInNlc3dhclwiOiBcIuKkqVwiLFxuXHRcInNldG1pbnVzXCI6IFwi4oiWXCIsXG5cdFwic2V0bW5cIjogXCLiiJZcIixcblx0XCJzZXh0XCI6IFwi4py2XCIsXG5cdFwiU2ZyXCI6IFwi8J2UllwiLFxuXHRcInNmclwiOiBcIvCdlLBcIixcblx0XCJzZnJvd25cIjogXCLijKJcIixcblx0XCJzaGFycFwiOiBcIuKZr1wiLFxuXHRcIlNIQ0hjeVwiOiBcItCpXCIsXG5cdFwic2hjaGN5XCI6IFwi0YlcIixcblx0XCJTSGN5XCI6IFwi0KhcIixcblx0XCJzaGN5XCI6IFwi0YhcIixcblx0XCJTaG9ydERvd25BcnJvd1wiOiBcIuKGk1wiLFxuXHRcIlNob3J0TGVmdEFycm93XCI6IFwi4oaQXCIsXG5cdFwic2hvcnRtaWRcIjogXCLiiKNcIixcblx0XCJzaG9ydHBhcmFsbGVsXCI6IFwi4oilXCIsXG5cdFwiU2hvcnRSaWdodEFycm93XCI6IFwi4oaSXCIsXG5cdFwiU2hvcnRVcEFycm93XCI6IFwi4oaRXCIsXG5cdFwic2h5XCI6IFwiwq1cIixcblx0XCJTaWdtYVwiOiBcIs6jXCIsXG5cdFwic2lnbWFcIjogXCLPg1wiLFxuXHRcInNpZ21hZlwiOiBcIs+CXCIsXG5cdFwic2lnbWF2XCI6IFwiz4JcIixcblx0XCJzaW1cIjogXCLiiLxcIixcblx0XCJzaW1kb3RcIjogXCLiqapcIixcblx0XCJzaW1lXCI6IFwi4omDXCIsXG5cdFwic2ltZXFcIjogXCLiiYNcIixcblx0XCJzaW1nXCI6IFwi4qqeXCIsXG5cdFwic2ltZ0VcIjogXCLiqqBcIixcblx0XCJzaW1sXCI6IFwi4qqdXCIsXG5cdFwic2ltbEVcIjogXCLiqp9cIixcblx0XCJzaW1uZVwiOiBcIuKJhlwiLFxuXHRcInNpbXBsdXNcIjogXCLiqKRcIixcblx0XCJzaW1yYXJyXCI6IFwi4qWyXCIsXG5cdFwic2xhcnJcIjogXCLihpBcIixcblx0XCJTbWFsbENpcmNsZVwiOiBcIuKImFwiLFxuXHRcInNtYWxsc2V0bWludXNcIjogXCLiiJZcIixcblx0XCJzbWFzaHBcIjogXCLiqLNcIixcblx0XCJzbWVwYXJzbFwiOiBcIuKnpFwiLFxuXHRcInNtaWRcIjogXCLiiKNcIixcblx0XCJzbWlsZVwiOiBcIuKMo1wiLFxuXHRcInNtdFwiOiBcIuKqqlwiLFxuXHRcInNtdGVcIjogXCLiqqxcIixcblx0XCJzbXRlc1wiOiBcIuKqrO+4gFwiLFxuXHRcIlNPRlRjeVwiOiBcItCsXCIsXG5cdFwic29mdGN5XCI6IFwi0YxcIixcblx0XCJzb2xiYXJcIjogXCLijL9cIixcblx0XCJzb2xiXCI6IFwi4qeEXCIsXG5cdFwic29sXCI6IFwiL1wiLFxuXHRcIlNvcGZcIjogXCLwnZWKXCIsXG5cdFwic29wZlwiOiBcIvCdlaRcIixcblx0XCJzcGFkZXNcIjogXCLimaBcIixcblx0XCJzcGFkZXN1aXRcIjogXCLimaBcIixcblx0XCJzcGFyXCI6IFwi4oilXCIsXG5cdFwic3FjYXBcIjogXCLiipNcIixcblx0XCJzcWNhcHNcIjogXCLiipPvuIBcIixcblx0XCJzcWN1cFwiOiBcIuKKlFwiLFxuXHRcInNxY3Vwc1wiOiBcIuKKlO+4gFwiLFxuXHRcIlNxcnRcIjogXCLiiJpcIixcblx0XCJzcXN1YlwiOiBcIuKKj1wiLFxuXHRcInNxc3ViZVwiOiBcIuKKkVwiLFxuXHRcInNxc3Vic2V0XCI6IFwi4oqPXCIsXG5cdFwic3FzdWJzZXRlcVwiOiBcIuKKkVwiLFxuXHRcInNxc3VwXCI6IFwi4oqQXCIsXG5cdFwic3FzdXBlXCI6IFwi4oqSXCIsXG5cdFwic3FzdXBzZXRcIjogXCLiipBcIixcblx0XCJzcXN1cHNldGVxXCI6IFwi4oqSXCIsXG5cdFwic3F1YXJlXCI6IFwi4pahXCIsXG5cdFwiU3F1YXJlXCI6IFwi4pahXCIsXG5cdFwiU3F1YXJlSW50ZXJzZWN0aW9uXCI6IFwi4oqTXCIsXG5cdFwiU3F1YXJlU3Vic2V0XCI6IFwi4oqPXCIsXG5cdFwiU3F1YXJlU3Vic2V0RXF1YWxcIjogXCLiipFcIixcblx0XCJTcXVhcmVTdXBlcnNldFwiOiBcIuKKkFwiLFxuXHRcIlNxdWFyZVN1cGVyc2V0RXF1YWxcIjogXCLiipJcIixcblx0XCJTcXVhcmVVbmlvblwiOiBcIuKKlFwiLFxuXHRcInNxdWFyZlwiOiBcIuKWqlwiLFxuXHRcInNxdVwiOiBcIuKWoVwiLFxuXHRcInNxdWZcIjogXCLilqpcIixcblx0XCJzcmFyclwiOiBcIuKGklwiLFxuXHRcIlNzY3JcIjogXCLwnZKuXCIsXG5cdFwic3NjclwiOiBcIvCdk4hcIixcblx0XCJzc2V0bW5cIjogXCLiiJZcIixcblx0XCJzc21pbGVcIjogXCLijKNcIixcblx0XCJzc3RhcmZcIjogXCLii4ZcIixcblx0XCJTdGFyXCI6IFwi4ouGXCIsXG5cdFwic3RhclwiOiBcIuKYhlwiLFxuXHRcInN0YXJmXCI6IFwi4piFXCIsXG5cdFwic3RyYWlnaHRlcHNpbG9uXCI6IFwiz7VcIixcblx0XCJzdHJhaWdodHBoaVwiOiBcIs+VXCIsXG5cdFwic3RybnNcIjogXCLCr1wiLFxuXHRcInN1YlwiOiBcIuKKglwiLFxuXHRcIlN1YlwiOiBcIuKLkFwiLFxuXHRcInN1YmRvdFwiOiBcIuKqvVwiLFxuXHRcInN1YkVcIjogXCLiq4VcIixcblx0XCJzdWJlXCI6IFwi4oqGXCIsXG5cdFwic3ViZWRvdFwiOiBcIuKrg1wiLFxuXHRcInN1Ym11bHRcIjogXCLiq4FcIixcblx0XCJzdWJuRVwiOiBcIuKri1wiLFxuXHRcInN1Ym5lXCI6IFwi4oqKXCIsXG5cdFwic3VicGx1c1wiOiBcIuKqv1wiLFxuXHRcInN1YnJhcnJcIjogXCLipblcIixcblx0XCJzdWJzZXRcIjogXCLiioJcIixcblx0XCJTdWJzZXRcIjogXCLii5BcIixcblx0XCJzdWJzZXRlcVwiOiBcIuKKhlwiLFxuXHRcInN1YnNldGVxcVwiOiBcIuKrhVwiLFxuXHRcIlN1YnNldEVxdWFsXCI6IFwi4oqGXCIsXG5cdFwic3Vic2V0bmVxXCI6IFwi4oqKXCIsXG5cdFwic3Vic2V0bmVxcVwiOiBcIuKri1wiLFxuXHRcInN1YnNpbVwiOiBcIuKrh1wiLFxuXHRcInN1YnN1YlwiOiBcIuKrlVwiLFxuXHRcInN1YnN1cFwiOiBcIuKrk1wiLFxuXHRcInN1Y2NhcHByb3hcIjogXCLiqrhcIixcblx0XCJzdWNjXCI6IFwi4om7XCIsXG5cdFwic3VjY2N1cmx5ZXFcIjogXCLiib1cIixcblx0XCJTdWNjZWVkc1wiOiBcIuKJu1wiLFxuXHRcIlN1Y2NlZWRzRXF1YWxcIjogXCLiqrBcIixcblx0XCJTdWNjZWVkc1NsYW50RXF1YWxcIjogXCLiib1cIixcblx0XCJTdWNjZWVkc1RpbGRlXCI6IFwi4om/XCIsXG5cdFwic3VjY2VxXCI6IFwi4qqwXCIsXG5cdFwic3VjY25hcHByb3hcIjogXCLiqrpcIixcblx0XCJzdWNjbmVxcVwiOiBcIuKqtlwiLFxuXHRcInN1Y2Nuc2ltXCI6IFwi4oupXCIsXG5cdFwic3VjY3NpbVwiOiBcIuKJv1wiLFxuXHRcIlN1Y2hUaGF0XCI6IFwi4oiLXCIsXG5cdFwic3VtXCI6IFwi4oiRXCIsXG5cdFwiU3VtXCI6IFwi4oiRXCIsXG5cdFwic3VuZ1wiOiBcIuKZqlwiLFxuXHRcInN1cDFcIjogXCLCuVwiLFxuXHRcInN1cDJcIjogXCLCslwiLFxuXHRcInN1cDNcIjogXCLCs1wiLFxuXHRcInN1cFwiOiBcIuKKg1wiLFxuXHRcIlN1cFwiOiBcIuKLkVwiLFxuXHRcInN1cGRvdFwiOiBcIuKqvlwiLFxuXHRcInN1cGRzdWJcIjogXCLiq5hcIixcblx0XCJzdXBFXCI6IFwi4quGXCIsXG5cdFwic3VwZVwiOiBcIuKKh1wiLFxuXHRcInN1cGVkb3RcIjogXCLiq4RcIixcblx0XCJTdXBlcnNldFwiOiBcIuKKg1wiLFxuXHRcIlN1cGVyc2V0RXF1YWxcIjogXCLiiodcIixcblx0XCJzdXBoc29sXCI6IFwi4p+JXCIsXG5cdFwic3VwaHN1YlwiOiBcIuKrl1wiLFxuXHRcInN1cGxhcnJcIjogXCLipbtcIixcblx0XCJzdXBtdWx0XCI6IFwi4quCXCIsXG5cdFwic3VwbkVcIjogXCLiq4xcIixcblx0XCJzdXBuZVwiOiBcIuKKi1wiLFxuXHRcInN1cHBsdXNcIjogXCLiq4BcIixcblx0XCJzdXBzZXRcIjogXCLiioNcIixcblx0XCJTdXBzZXRcIjogXCLii5FcIixcblx0XCJzdXBzZXRlcVwiOiBcIuKKh1wiLFxuXHRcInN1cHNldGVxcVwiOiBcIuKrhlwiLFxuXHRcInN1cHNldG5lcVwiOiBcIuKKi1wiLFxuXHRcInN1cHNldG5lcXFcIjogXCLiq4xcIixcblx0XCJzdXBzaW1cIjogXCLiq4hcIixcblx0XCJzdXBzdWJcIjogXCLiq5RcIixcblx0XCJzdXBzdXBcIjogXCLiq5ZcIixcblx0XCJzd2FyaGtcIjogXCLipKZcIixcblx0XCJzd2FyclwiOiBcIuKGmVwiLFxuXHRcInN3QXJyXCI6IFwi4oeZXCIsXG5cdFwic3dhcnJvd1wiOiBcIuKGmVwiLFxuXHRcInN3bndhclwiOiBcIuKkqlwiLFxuXHRcInN6bGlnXCI6IFwiw59cIixcblx0XCJUYWJcIjogXCJcXHRcIixcblx0XCJ0YXJnZXRcIjogXCLijJZcIixcblx0XCJUYXVcIjogXCLOpFwiLFxuXHRcInRhdVwiOiBcIs+EXCIsXG5cdFwidGJya1wiOiBcIuKOtFwiLFxuXHRcIlRjYXJvblwiOiBcIsWkXCIsXG5cdFwidGNhcm9uXCI6IFwixaVcIixcblx0XCJUY2VkaWxcIjogXCLFolwiLFxuXHRcInRjZWRpbFwiOiBcIsWjXCIsXG5cdFwiVGN5XCI6IFwi0KJcIixcblx0XCJ0Y3lcIjogXCLRglwiLFxuXHRcInRkb3RcIjogXCLig5tcIixcblx0XCJ0ZWxyZWNcIjogXCLijJVcIixcblx0XCJUZnJcIjogXCLwnZSXXCIsXG5cdFwidGZyXCI6IFwi8J2UsVwiLFxuXHRcInRoZXJlNFwiOiBcIuKItFwiLFxuXHRcInRoZXJlZm9yZVwiOiBcIuKItFwiLFxuXHRcIlRoZXJlZm9yZVwiOiBcIuKItFwiLFxuXHRcIlRoZXRhXCI6IFwizphcIixcblx0XCJ0aGV0YVwiOiBcIs64XCIsXG5cdFwidGhldGFzeW1cIjogXCLPkVwiLFxuXHRcInRoZXRhdlwiOiBcIs+RXCIsXG5cdFwidGhpY2thcHByb3hcIjogXCLiiYhcIixcblx0XCJ0aGlja3NpbVwiOiBcIuKIvFwiLFxuXHRcIlRoaWNrU3BhY2VcIjogXCLigZ/igIpcIixcblx0XCJUaGluU3BhY2VcIjogXCLigIlcIixcblx0XCJ0aGluc3BcIjogXCLigIlcIixcblx0XCJ0aGthcFwiOiBcIuKJiFwiLFxuXHRcInRoa3NpbVwiOiBcIuKIvFwiLFxuXHRcIlRIT1JOXCI6IFwiw55cIixcblx0XCJ0aG9yblwiOiBcIsO+XCIsXG5cdFwidGlsZGVcIjogXCLLnFwiLFxuXHRcIlRpbGRlXCI6IFwi4oi8XCIsXG5cdFwiVGlsZGVFcXVhbFwiOiBcIuKJg1wiLFxuXHRcIlRpbGRlRnVsbEVxdWFsXCI6IFwi4omFXCIsXG5cdFwiVGlsZGVUaWxkZVwiOiBcIuKJiFwiLFxuXHRcInRpbWVzYmFyXCI6IFwi4qixXCIsXG5cdFwidGltZXNiXCI6IFwi4oqgXCIsXG5cdFwidGltZXNcIjogXCLDl1wiLFxuXHRcInRpbWVzZFwiOiBcIuKosFwiLFxuXHRcInRpbnRcIjogXCLiiK1cIixcblx0XCJ0b2VhXCI6IFwi4qSoXCIsXG5cdFwidG9wYm90XCI6IFwi4oy2XCIsXG5cdFwidG9wY2lyXCI6IFwi4quxXCIsXG5cdFwidG9wXCI6IFwi4oqkXCIsXG5cdFwiVG9wZlwiOiBcIvCdlYtcIixcblx0XCJ0b3BmXCI6IFwi8J2VpVwiLFxuXHRcInRvcGZvcmtcIjogXCLiq5pcIixcblx0XCJ0b3NhXCI6IFwi4qSpXCIsXG5cdFwidHByaW1lXCI6IFwi4oC0XCIsXG5cdFwidHJhZGVcIjogXCLihKJcIixcblx0XCJUUkFERVwiOiBcIuKEolwiLFxuXHRcInRyaWFuZ2xlXCI6IFwi4pa1XCIsXG5cdFwidHJpYW5nbGVkb3duXCI6IFwi4pa/XCIsXG5cdFwidHJpYW5nbGVsZWZ0XCI6IFwi4peDXCIsXG5cdFwidHJpYW5nbGVsZWZ0ZXFcIjogXCLiirRcIixcblx0XCJ0cmlhbmdsZXFcIjogXCLiiZxcIixcblx0XCJ0cmlhbmdsZXJpZ2h0XCI6IFwi4pa5XCIsXG5cdFwidHJpYW5nbGVyaWdodGVxXCI6IFwi4oq1XCIsXG5cdFwidHJpZG90XCI6IFwi4pesXCIsXG5cdFwidHJpZVwiOiBcIuKJnFwiLFxuXHRcInRyaW1pbnVzXCI6IFwi4qi6XCIsXG5cdFwiVHJpcGxlRG90XCI6IFwi4oObXCIsXG5cdFwidHJpcGx1c1wiOiBcIuKouVwiLFxuXHRcInRyaXNiXCI6IFwi4qeNXCIsXG5cdFwidHJpdGltZVwiOiBcIuKou1wiLFxuXHRcInRycGV6aXVtXCI6IFwi4o+iXCIsXG5cdFwiVHNjclwiOiBcIvCdkq9cIixcblx0XCJ0c2NyXCI6IFwi8J2TiVwiLFxuXHRcIlRTY3lcIjogXCLQplwiLFxuXHRcInRzY3lcIjogXCLRhlwiLFxuXHRcIlRTSGN5XCI6IFwi0ItcIixcblx0XCJ0c2hjeVwiOiBcItGbXCIsXG5cdFwiVHN0cm9rXCI6IFwixaZcIixcblx0XCJ0c3Ryb2tcIjogXCLFp1wiLFxuXHRcInR3aXh0XCI6IFwi4omsXCIsXG5cdFwidHdvaGVhZGxlZnRhcnJvd1wiOiBcIuKGnlwiLFxuXHRcInR3b2hlYWRyaWdodGFycm93XCI6IFwi4oagXCIsXG5cdFwiVWFjdXRlXCI6IFwiw5pcIixcblx0XCJ1YWN1dGVcIjogXCLDulwiLFxuXHRcInVhcnJcIjogXCLihpFcIixcblx0XCJVYXJyXCI6IFwi4oafXCIsXG5cdFwidUFyclwiOiBcIuKHkVwiLFxuXHRcIlVhcnJvY2lyXCI6IFwi4qWJXCIsXG5cdFwiVWJyY3lcIjogXCLQjlwiLFxuXHRcInVicmN5XCI6IFwi0Z5cIixcblx0XCJVYnJldmVcIjogXCLFrFwiLFxuXHRcInVicmV2ZVwiOiBcIsWtXCIsXG5cdFwiVWNpcmNcIjogXCLDm1wiLFxuXHRcInVjaXJjXCI6IFwiw7tcIixcblx0XCJVY3lcIjogXCLQo1wiLFxuXHRcInVjeVwiOiBcItGDXCIsXG5cdFwidWRhcnJcIjogXCLih4VcIixcblx0XCJVZGJsYWNcIjogXCLFsFwiLFxuXHRcInVkYmxhY1wiOiBcIsWxXCIsXG5cdFwidWRoYXJcIjogXCLipa5cIixcblx0XCJ1ZmlzaHRcIjogXCLipb5cIixcblx0XCJVZnJcIjogXCLwnZSYXCIsXG5cdFwidWZyXCI6IFwi8J2UslwiLFxuXHRcIlVncmF2ZVwiOiBcIsOZXCIsXG5cdFwidWdyYXZlXCI6IFwiw7lcIixcblx0XCJ1SGFyXCI6IFwi4qWjXCIsXG5cdFwidWhhcmxcIjogXCLihr9cIixcblx0XCJ1aGFyclwiOiBcIuKGvlwiLFxuXHRcInVoYmxrXCI6IFwi4paAXCIsXG5cdFwidWxjb3JuXCI6IFwi4oycXCIsXG5cdFwidWxjb3JuZXJcIjogXCLijJxcIixcblx0XCJ1bGNyb3BcIjogXCLijI9cIixcblx0XCJ1bHRyaVwiOiBcIuKXuFwiLFxuXHRcIlVtYWNyXCI6IFwixapcIixcblx0XCJ1bWFjclwiOiBcIsWrXCIsXG5cdFwidW1sXCI6IFwiwqhcIixcblx0XCJVbmRlckJhclwiOiBcIl9cIixcblx0XCJVbmRlckJyYWNlXCI6IFwi4o+fXCIsXG5cdFwiVW5kZXJCcmFja2V0XCI6IFwi4o61XCIsXG5cdFwiVW5kZXJQYXJlbnRoZXNpc1wiOiBcIuKPnVwiLFxuXHRcIlVuaW9uXCI6IFwi4ouDXCIsXG5cdFwiVW5pb25QbHVzXCI6IFwi4oqOXCIsXG5cdFwiVW9nb25cIjogXCLFslwiLFxuXHRcInVvZ29uXCI6IFwixbNcIixcblx0XCJVb3BmXCI6IFwi8J2VjFwiLFxuXHRcInVvcGZcIjogXCLwnZWmXCIsXG5cdFwiVXBBcnJvd0JhclwiOiBcIuKkklwiLFxuXHRcInVwYXJyb3dcIjogXCLihpFcIixcblx0XCJVcEFycm93XCI6IFwi4oaRXCIsXG5cdFwiVXBhcnJvd1wiOiBcIuKHkVwiLFxuXHRcIlVwQXJyb3dEb3duQXJyb3dcIjogXCLih4VcIixcblx0XCJ1cGRvd25hcnJvd1wiOiBcIuKGlVwiLFxuXHRcIlVwRG93bkFycm93XCI6IFwi4oaVXCIsXG5cdFwiVXBkb3duYXJyb3dcIjogXCLih5VcIixcblx0XCJVcEVxdWlsaWJyaXVtXCI6IFwi4qWuXCIsXG5cdFwidXBoYXJwb29ubGVmdFwiOiBcIuKGv1wiLFxuXHRcInVwaGFycG9vbnJpZ2h0XCI6IFwi4oa+XCIsXG5cdFwidXBsdXNcIjogXCLiio5cIixcblx0XCJVcHBlckxlZnRBcnJvd1wiOiBcIuKGllwiLFxuXHRcIlVwcGVyUmlnaHRBcnJvd1wiOiBcIuKGl1wiLFxuXHRcInVwc2lcIjogXCLPhVwiLFxuXHRcIlVwc2lcIjogXCLPklwiLFxuXHRcInVwc2loXCI6IFwiz5JcIixcblx0XCJVcHNpbG9uXCI6IFwizqVcIixcblx0XCJ1cHNpbG9uXCI6IFwiz4VcIixcblx0XCJVcFRlZUFycm93XCI6IFwi4oalXCIsXG5cdFwiVXBUZWVcIjogXCLiiqVcIixcblx0XCJ1cHVwYXJyb3dzXCI6IFwi4oeIXCIsXG5cdFwidXJjb3JuXCI6IFwi4oydXCIsXG5cdFwidXJjb3JuZXJcIjogXCLijJ1cIixcblx0XCJ1cmNyb3BcIjogXCLijI5cIixcblx0XCJVcmluZ1wiOiBcIsWuXCIsXG5cdFwidXJpbmdcIjogXCLFr1wiLFxuXHRcInVydHJpXCI6IFwi4pe5XCIsXG5cdFwiVXNjclwiOiBcIvCdkrBcIixcblx0XCJ1c2NyXCI6IFwi8J2TilwiLFxuXHRcInV0ZG90XCI6IFwi4ouwXCIsXG5cdFwiVXRpbGRlXCI6IFwixahcIixcblx0XCJ1dGlsZGVcIjogXCLFqVwiLFxuXHRcInV0cmlcIjogXCLilrVcIixcblx0XCJ1dHJpZlwiOiBcIuKWtFwiLFxuXHRcInV1YXJyXCI6IFwi4oeIXCIsXG5cdFwiVXVtbFwiOiBcIsOcXCIsXG5cdFwidXVtbFwiOiBcIsO8XCIsXG5cdFwidXdhbmdsZVwiOiBcIuKmp1wiLFxuXHRcInZhbmdydFwiOiBcIuKmnFwiLFxuXHRcInZhcmVwc2lsb25cIjogXCLPtVwiLFxuXHRcInZhcmthcHBhXCI6IFwiz7BcIixcblx0XCJ2YXJub3RoaW5nXCI6IFwi4oiFXCIsXG5cdFwidmFycGhpXCI6IFwiz5VcIixcblx0XCJ2YXJwaVwiOiBcIs+WXCIsXG5cdFwidmFycHJvcHRvXCI6IFwi4oidXCIsXG5cdFwidmFyclwiOiBcIuKGlVwiLFxuXHRcInZBcnJcIjogXCLih5VcIixcblx0XCJ2YXJyaG9cIjogXCLPsVwiLFxuXHRcInZhcnNpZ21hXCI6IFwiz4JcIixcblx0XCJ2YXJzdWJzZXRuZXFcIjogXCLiiorvuIBcIixcblx0XCJ2YXJzdWJzZXRuZXFxXCI6IFwi4quL77iAXCIsXG5cdFwidmFyc3Vwc2V0bmVxXCI6IFwi4oqL77iAXCIsXG5cdFwidmFyc3Vwc2V0bmVxcVwiOiBcIuKrjO+4gFwiLFxuXHRcInZhcnRoZXRhXCI6IFwiz5FcIixcblx0XCJ2YXJ0cmlhbmdsZWxlZnRcIjogXCLiirJcIixcblx0XCJ2YXJ0cmlhbmdsZXJpZ2h0XCI6IFwi4oqzXCIsXG5cdFwidkJhclwiOiBcIuKrqFwiLFxuXHRcIlZiYXJcIjogXCLiq6tcIixcblx0XCJ2QmFydlwiOiBcIuKrqVwiLFxuXHRcIlZjeVwiOiBcItCSXCIsXG5cdFwidmN5XCI6IFwi0LJcIixcblx0XCJ2ZGFzaFwiOiBcIuKKolwiLFxuXHRcInZEYXNoXCI6IFwi4oqoXCIsXG5cdFwiVmRhc2hcIjogXCLiiqlcIixcblx0XCJWRGFzaFwiOiBcIuKKq1wiLFxuXHRcIlZkYXNobFwiOiBcIuKrplwiLFxuXHRcInZlZWJhclwiOiBcIuKKu1wiLFxuXHRcInZlZVwiOiBcIuKIqFwiLFxuXHRcIlZlZVwiOiBcIuKLgVwiLFxuXHRcInZlZWVxXCI6IFwi4omaXCIsXG5cdFwidmVsbGlwXCI6IFwi4ouuXCIsXG5cdFwidmVyYmFyXCI6IFwifFwiLFxuXHRcIlZlcmJhclwiOiBcIuKAllwiLFxuXHRcInZlcnRcIjogXCJ8XCIsXG5cdFwiVmVydFwiOiBcIuKAllwiLFxuXHRcIlZlcnRpY2FsQmFyXCI6IFwi4oijXCIsXG5cdFwiVmVydGljYWxMaW5lXCI6IFwifFwiLFxuXHRcIlZlcnRpY2FsU2VwYXJhdG9yXCI6IFwi4p2YXCIsXG5cdFwiVmVydGljYWxUaWxkZVwiOiBcIuKJgFwiLFxuXHRcIlZlcnlUaGluU3BhY2VcIjogXCLigIpcIixcblx0XCJWZnJcIjogXCLwnZSZXCIsXG5cdFwidmZyXCI6IFwi8J2Us1wiLFxuXHRcInZsdHJpXCI6IFwi4oqyXCIsXG5cdFwidm5zdWJcIjogXCLiioLig5JcIixcblx0XCJ2bnN1cFwiOiBcIuKKg+KDklwiLFxuXHRcIlZvcGZcIjogXCLwnZWNXCIsXG5cdFwidm9wZlwiOiBcIvCdladcIixcblx0XCJ2cHJvcFwiOiBcIuKInVwiLFxuXHRcInZydHJpXCI6IFwi4oqzXCIsXG5cdFwiVnNjclwiOiBcIvCdkrFcIixcblx0XCJ2c2NyXCI6IFwi8J2Ti1wiLFxuXHRcInZzdWJuRVwiOiBcIuKri++4gFwiLFxuXHRcInZzdWJuZVwiOiBcIuKKiu+4gFwiLFxuXHRcInZzdXBuRVwiOiBcIuKrjO+4gFwiLFxuXHRcInZzdXBuZVwiOiBcIuKKi++4gFwiLFxuXHRcIlZ2ZGFzaFwiOiBcIuKKqlwiLFxuXHRcInZ6aWd6YWdcIjogXCLipppcIixcblx0XCJXY2lyY1wiOiBcIsW0XCIsXG5cdFwid2NpcmNcIjogXCLFtVwiLFxuXHRcIndlZGJhclwiOiBcIuKpn1wiLFxuXHRcIndlZGdlXCI6IFwi4oinXCIsXG5cdFwiV2VkZ2VcIjogXCLii4BcIixcblx0XCJ3ZWRnZXFcIjogXCLiiZlcIixcblx0XCJ3ZWllcnBcIjogXCLihJhcIixcblx0XCJXZnJcIjogXCLwnZSaXCIsXG5cdFwid2ZyXCI6IFwi8J2UtFwiLFxuXHRcIldvcGZcIjogXCLwnZWOXCIsXG5cdFwid29wZlwiOiBcIvCdlahcIixcblx0XCJ3cFwiOiBcIuKEmFwiLFxuXHRcIndyXCI6IFwi4omAXCIsXG5cdFwid3JlYXRoXCI6IFwi4omAXCIsXG5cdFwiV3NjclwiOiBcIvCdkrJcIixcblx0XCJ3c2NyXCI6IFwi8J2TjFwiLFxuXHRcInhjYXBcIjogXCLii4JcIixcblx0XCJ4Y2lyY1wiOiBcIuKXr1wiLFxuXHRcInhjdXBcIjogXCLii4NcIixcblx0XCJ4ZHRyaVwiOiBcIuKWvVwiLFxuXHRcIlhmclwiOiBcIvCdlJtcIixcblx0XCJ4ZnJcIjogXCLwnZS1XCIsXG5cdFwieGhhcnJcIjogXCLin7dcIixcblx0XCJ4aEFyclwiOiBcIuKfulwiLFxuXHRcIlhpXCI6IFwizp5cIixcblx0XCJ4aVwiOiBcIs6+XCIsXG5cdFwieGxhcnJcIjogXCLin7VcIixcblx0XCJ4bEFyclwiOiBcIuKfuFwiLFxuXHRcInhtYXBcIjogXCLin7xcIixcblx0XCJ4bmlzXCI6IFwi4ou7XCIsXG5cdFwieG9kb3RcIjogXCLiqIBcIixcblx0XCJYb3BmXCI6IFwi8J2Vj1wiLFxuXHRcInhvcGZcIjogXCLwnZWpXCIsXG5cdFwieG9wbHVzXCI6IFwi4qiBXCIsXG5cdFwieG90aW1lXCI6IFwi4qiCXCIsXG5cdFwieHJhcnJcIjogXCLin7ZcIixcblx0XCJ4ckFyclwiOiBcIuKfuVwiLFxuXHRcIlhzY3JcIjogXCLwnZKzXCIsXG5cdFwieHNjclwiOiBcIvCdk41cIixcblx0XCJ4c3FjdXBcIjogXCLiqIZcIixcblx0XCJ4dXBsdXNcIjogXCLiqIRcIixcblx0XCJ4dXRyaVwiOiBcIuKWs1wiLFxuXHRcInh2ZWVcIjogXCLii4FcIixcblx0XCJ4d2VkZ2VcIjogXCLii4BcIixcblx0XCJZYWN1dGVcIjogXCLDnVwiLFxuXHRcInlhY3V0ZVwiOiBcIsO9XCIsXG5cdFwiWUFjeVwiOiBcItCvXCIsXG5cdFwieWFjeVwiOiBcItGPXCIsXG5cdFwiWWNpcmNcIjogXCLFtlwiLFxuXHRcInljaXJjXCI6IFwixbdcIixcblx0XCJZY3lcIjogXCLQq1wiLFxuXHRcInljeVwiOiBcItGLXCIsXG5cdFwieWVuXCI6IFwiwqVcIixcblx0XCJZZnJcIjogXCLwnZScXCIsXG5cdFwieWZyXCI6IFwi8J2UtlwiLFxuXHRcIllJY3lcIjogXCLQh1wiLFxuXHRcInlpY3lcIjogXCLRl1wiLFxuXHRcIllvcGZcIjogXCLwnZWQXCIsXG5cdFwieW9wZlwiOiBcIvCdlapcIixcblx0XCJZc2NyXCI6IFwi8J2StFwiLFxuXHRcInlzY3JcIjogXCLwnZOOXCIsXG5cdFwiWVVjeVwiOiBcItCuXCIsXG5cdFwieXVjeVwiOiBcItGOXCIsXG5cdFwieXVtbFwiOiBcIsO/XCIsXG5cdFwiWXVtbFwiOiBcIsW4XCIsXG5cdFwiWmFjdXRlXCI6IFwixblcIixcblx0XCJ6YWN1dGVcIjogXCLFulwiLFxuXHRcIlpjYXJvblwiOiBcIsW9XCIsXG5cdFwiemNhcm9uXCI6IFwixb5cIixcblx0XCJaY3lcIjogXCLQl1wiLFxuXHRcInpjeVwiOiBcItC3XCIsXG5cdFwiWmRvdFwiOiBcIsW7XCIsXG5cdFwiemRvdFwiOiBcIsW8XCIsXG5cdFwiemVldHJmXCI6IFwi4oSoXCIsXG5cdFwiWmVyb1dpZHRoU3BhY2VcIjogXCLigItcIixcblx0XCJaZXRhXCI6IFwizpZcIixcblx0XCJ6ZXRhXCI6IFwizrZcIixcblx0XCJ6ZnJcIjogXCLwnZS3XCIsXG5cdFwiWmZyXCI6IFwi4oSoXCIsXG5cdFwiWkhjeVwiOiBcItCWXCIsXG5cdFwiemhjeVwiOiBcItC2XCIsXG5cdFwiemlncmFyclwiOiBcIuKHnVwiLFxuXHRcInpvcGZcIjogXCLwnZWrXCIsXG5cdFwiWm9wZlwiOiBcIuKEpFwiLFxuXHRcIlpzY3JcIjogXCLwnZK1XCIsXG5cdFwienNjclwiOiBcIvCdk49cIixcblx0XCJ6d2pcIjogXCLigI1cIixcblx0XCJ6d25qXCI6IFwi4oCMXCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9lbnRpdGllcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlbnRpdHlNYXAgPSByZXF1aXJlKFwiLi4vbWFwcy9lbnRpdGllcy5qc29uXCIpLFxuICAgIGxlZ2FjeU1hcCA9IHJlcXVpcmUoXCIuLi9tYXBzL2xlZ2FjeS5qc29uXCIpLFxuICAgIHhtbE1hcCAgICA9IHJlcXVpcmUoXCIuLi9tYXBzL3htbC5qc29uXCIpLFxuICAgIGRlY29kZUNvZGVQb2ludCA9IHJlcXVpcmUoXCIuL2RlY29kZV9jb2RlcG9pbnQuanNcIik7XG5cbnZhciBkZWNvZGVYTUxTdHJpY3QgID0gZ2V0U3RyaWN0RGVjb2Rlcih4bWxNYXApLFxuICAgIGRlY29kZUhUTUxTdHJpY3QgPSBnZXRTdHJpY3REZWNvZGVyKGVudGl0eU1hcCk7XG5cbmZ1bmN0aW9uIGdldFN0cmljdERlY29kZXIobWFwKXtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhtYXApLmpvaW4oXCJ8XCIpLFxuXHQgICAgcmVwbGFjZSA9IGdldFJlcGxhY2VyKG1hcCk7XG5cblx0a2V5cyArPSBcInwjW3hYXVtcXFxcZGEtZkEtRl0rfCNcXFxcZCtcIjtcblxuXHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cyArIFwiKTtcIiwgXCJnXCIpO1xuXG5cdHJldHVybiBmdW5jdGlvbihzdHIpe1xuXHRcdHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlKTtcblx0fTtcbn1cblxudmFyIGRlY29kZUhUTUwgPSAoZnVuY3Rpb24oKXtcblx0dmFyIGxlZ2FjeSA9IE9iamVjdC5rZXlzKGxlZ2FjeU1hcClcblx0XHQuc29ydChzb3J0ZXIpO1xuXG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMoZW50aXR5TWFwKVxuXHRcdC5zb3J0KHNvcnRlcik7XG5cblx0Zm9yKHZhciBpID0gMCwgaiA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcblx0XHRpZihsZWdhY3lbal0gPT09IGtleXNbaV0pe1xuXHRcdFx0a2V5c1tpXSArPSBcIjs/XCI7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGtleXNbaV0gKz0gXCI7XCI7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMuam9pbihcInxcIikgKyBcInwjW3hYXVtcXFxcZGEtZkEtRl0rOz98I1xcXFxkKzs/KVwiLCBcImdcIiksXG5cdCAgICByZXBsYWNlID0gZ2V0UmVwbGFjZXIoZW50aXR5TWFwKTtcblxuXHRmdW5jdGlvbiByZXBsYWNlcihzdHIpe1xuXHRcdGlmKHN0ci5zdWJzdHIoLTEpICE9PSBcIjtcIikgc3RyICs9IFwiO1wiO1xuXHRcdHJldHVybiByZXBsYWNlKHN0cik7XG5cdH1cblxuXHQvL1RPRE8gY29uc2lkZXIgY3JlYXRpbmcgYSBtZXJnZWQgbWFwXG5cdHJldHVybiBmdW5jdGlvbihzdHIpe1xuXHRcdHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlcik7XG5cdH07XG59KCkpO1xuXG5mdW5jdGlvbiBzb3J0ZXIoYSwgYil7XG5cdHJldHVybiBhIDwgYiA/IDEgOiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVwbGFjZXIobWFwKXtcblx0cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKXtcblx0XHRpZihzdHIuY2hhckF0KDEpID09PSBcIiNcIil7XG5cdFx0XHRpZihzdHIuY2hhckF0KDIpID09PSBcIlhcIiB8fCBzdHIuY2hhckF0KDIpID09PSBcInhcIil7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVDb2RlUG9pbnQocGFyc2VJbnQoc3RyLnN1YnN0cigzKSwgMTYpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkZWNvZGVDb2RlUG9pbnQocGFyc2VJbnQoc3RyLnN1YnN0cigyKSwgMTApKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcFtzdHIuc2xpY2UoMSwgLTEpXTtcblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFhNTDogZGVjb2RlWE1MU3RyaWN0LFxuXHRIVE1MOiBkZWNvZGVIVE1MLFxuXHRIVE1MU3RyaWN0OiBkZWNvZGVIVE1MU3RyaWN0XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFhY3V0ZVwiOiBcIsOBXCIsXG5cdFwiYWFjdXRlXCI6IFwiw6FcIixcblx0XCJBY2lyY1wiOiBcIsOCXCIsXG5cdFwiYWNpcmNcIjogXCLDolwiLFxuXHRcImFjdXRlXCI6IFwiwrRcIixcblx0XCJBRWxpZ1wiOiBcIsOGXCIsXG5cdFwiYWVsaWdcIjogXCLDplwiLFxuXHRcIkFncmF2ZVwiOiBcIsOAXCIsXG5cdFwiYWdyYXZlXCI6IFwiw6BcIixcblx0XCJhbXBcIjogXCImXCIsXG5cdFwiQU1QXCI6IFwiJlwiLFxuXHRcIkFyaW5nXCI6IFwiw4VcIixcblx0XCJhcmluZ1wiOiBcIsOlXCIsXG5cdFwiQXRpbGRlXCI6IFwiw4NcIixcblx0XCJhdGlsZGVcIjogXCLDo1wiLFxuXHRcIkF1bWxcIjogXCLDhFwiLFxuXHRcImF1bWxcIjogXCLDpFwiLFxuXHRcImJydmJhclwiOiBcIsKmXCIsXG5cdFwiQ2NlZGlsXCI6IFwiw4dcIixcblx0XCJjY2VkaWxcIjogXCLDp1wiLFxuXHRcImNlZGlsXCI6IFwiwrhcIixcblx0XCJjZW50XCI6IFwiwqJcIixcblx0XCJjb3B5XCI6IFwiwqlcIixcblx0XCJDT1BZXCI6IFwiwqlcIixcblx0XCJjdXJyZW5cIjogXCLCpFwiLFxuXHRcImRlZ1wiOiBcIsKwXCIsXG5cdFwiZGl2aWRlXCI6IFwiw7dcIixcblx0XCJFYWN1dGVcIjogXCLDiVwiLFxuXHRcImVhY3V0ZVwiOiBcIsOpXCIsXG5cdFwiRWNpcmNcIjogXCLDilwiLFxuXHRcImVjaXJjXCI6IFwiw6pcIixcblx0XCJFZ3JhdmVcIjogXCLDiFwiLFxuXHRcImVncmF2ZVwiOiBcIsOoXCIsXG5cdFwiRVRIXCI6IFwiw5BcIixcblx0XCJldGhcIjogXCLDsFwiLFxuXHRcIkV1bWxcIjogXCLDi1wiLFxuXHRcImV1bWxcIjogXCLDq1wiLFxuXHRcImZyYWMxMlwiOiBcIsK9XCIsXG5cdFwiZnJhYzE0XCI6IFwiwrxcIixcblx0XCJmcmFjMzRcIjogXCLCvlwiLFxuXHRcImd0XCI6IFwiPlwiLFxuXHRcIkdUXCI6IFwiPlwiLFxuXHRcIklhY3V0ZVwiOiBcIsONXCIsXG5cdFwiaWFjdXRlXCI6IFwiw61cIixcblx0XCJJY2lyY1wiOiBcIsOOXCIsXG5cdFwiaWNpcmNcIjogXCLDrlwiLFxuXHRcImlleGNsXCI6IFwiwqFcIixcblx0XCJJZ3JhdmVcIjogXCLDjFwiLFxuXHRcImlncmF2ZVwiOiBcIsOsXCIsXG5cdFwiaXF1ZXN0XCI6IFwiwr9cIixcblx0XCJJdW1sXCI6IFwiw49cIixcblx0XCJpdW1sXCI6IFwiw69cIixcblx0XCJsYXF1b1wiOiBcIsKrXCIsXG5cdFwibHRcIjogXCI8XCIsXG5cdFwiTFRcIjogXCI8XCIsXG5cdFwibWFjclwiOiBcIsKvXCIsXG5cdFwibWljcm9cIjogXCLCtVwiLFxuXHRcIm1pZGRvdFwiOiBcIsK3XCIsXG5cdFwibmJzcFwiOiBcIsKgXCIsXG5cdFwibm90XCI6IFwiwqxcIixcblx0XCJOdGlsZGVcIjogXCLDkVwiLFxuXHRcIm50aWxkZVwiOiBcIsOxXCIsXG5cdFwiT2FjdXRlXCI6IFwiw5NcIixcblx0XCJvYWN1dGVcIjogXCLDs1wiLFxuXHRcIk9jaXJjXCI6IFwiw5RcIixcblx0XCJvY2lyY1wiOiBcIsO0XCIsXG5cdFwiT2dyYXZlXCI6IFwiw5JcIixcblx0XCJvZ3JhdmVcIjogXCLDslwiLFxuXHRcIm9yZGZcIjogXCLCqlwiLFxuXHRcIm9yZG1cIjogXCLCulwiLFxuXHRcIk9zbGFzaFwiOiBcIsOYXCIsXG5cdFwib3NsYXNoXCI6IFwiw7hcIixcblx0XCJPdGlsZGVcIjogXCLDlVwiLFxuXHRcIm90aWxkZVwiOiBcIsO1XCIsXG5cdFwiT3VtbFwiOiBcIsOWXCIsXG5cdFwib3VtbFwiOiBcIsO2XCIsXG5cdFwicGFyYVwiOiBcIsK2XCIsXG5cdFwicGx1c21uXCI6IFwiwrFcIixcblx0XCJwb3VuZFwiOiBcIsKjXCIsXG5cdFwicXVvdFwiOiBcIlxcXCJcIixcblx0XCJRVU9UXCI6IFwiXFxcIlwiLFxuXHRcInJhcXVvXCI6IFwiwrtcIixcblx0XCJyZWdcIjogXCLCrlwiLFxuXHRcIlJFR1wiOiBcIsKuXCIsXG5cdFwic2VjdFwiOiBcIsKnXCIsXG5cdFwic2h5XCI6IFwiwq1cIixcblx0XCJzdXAxXCI6IFwiwrlcIixcblx0XCJzdXAyXCI6IFwiwrJcIixcblx0XCJzdXAzXCI6IFwiwrNcIixcblx0XCJzemxpZ1wiOiBcIsOfXCIsXG5cdFwiVEhPUk5cIjogXCLDnlwiLFxuXHRcInRob3JuXCI6IFwiw75cIixcblx0XCJ0aW1lc1wiOiBcIsOXXCIsXG5cdFwiVWFjdXRlXCI6IFwiw5pcIixcblx0XCJ1YWN1dGVcIjogXCLDulwiLFxuXHRcIlVjaXJjXCI6IFwiw5tcIixcblx0XCJ1Y2lyY1wiOiBcIsO7XCIsXG5cdFwiVWdyYXZlXCI6IFwiw5lcIixcblx0XCJ1Z3JhdmVcIjogXCLDuVwiLFxuXHRcInVtbFwiOiBcIsKoXCIsXG5cdFwiVXVtbFwiOiBcIsOcXCIsXG5cdFwidXVtbFwiOiBcIsO8XCIsXG5cdFwiWWFjdXRlXCI6IFwiw51cIixcblx0XCJ5YWN1dGVcIjogXCLDvVwiLFxuXHRcInllblwiOiBcIsKlXCIsXG5cdFwieXVtbFwiOiBcIsO/XCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9sZWdhY3kuanNvblxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVjb2RlTWFwID0gcmVxdWlyZShcIi4uL21hcHMvZGVjb2RlLmpzb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlQ29kZVBvaW50O1xuXG4vLyBtb2RpZmllZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50KGNvZGVQb2ludCl7XG5cblx0aWYoKGNvZGVQb2ludCA+PSAweEQ4MDAgJiYgY29kZVBvaW50IDw9IDB4REZGRikgfHwgY29kZVBvaW50ID4gMHgxMEZGRkYpe1xuXHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0fVxuXG5cdGlmKGNvZGVQb2ludCBpbiBkZWNvZGVNYXApe1xuXHRcdGNvZGVQb2ludCA9IGRlY29kZU1hcFtjb2RlUG9pbnRdO1xuXHR9XG5cblx0dmFyIG91dHB1dCA9IFwiXCI7XG5cblx0aWYoY29kZVBvaW50ID4gMHhGRkZGKXtcblx0XHRjb2RlUG9pbnQgLT0gMHgxMDAwMDtcblx0XHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGO1xuXHR9XG5cblx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcblx0cmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlX2NvZGVwb2ludC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCIwXCI6IDY1NTMzLFxuXHRcIjEyOFwiOiA4MzY0LFxuXHRcIjEzMFwiOiA4MjE4LFxuXHRcIjEzMVwiOiA0MDIsXG5cdFwiMTMyXCI6IDgyMjIsXG5cdFwiMTMzXCI6IDgyMzAsXG5cdFwiMTM0XCI6IDgyMjQsXG5cdFwiMTM1XCI6IDgyMjUsXG5cdFwiMTM2XCI6IDcxMCxcblx0XCIxMzdcIjogODI0MCxcblx0XCIxMzhcIjogMzUyLFxuXHRcIjEzOVwiOiA4MjQ5LFxuXHRcIjE0MFwiOiAzMzgsXG5cdFwiMTQyXCI6IDM4MSxcblx0XCIxNDVcIjogODIxNixcblx0XCIxNDZcIjogODIxNyxcblx0XCIxNDdcIjogODIyMCxcblx0XCIxNDhcIjogODIyMSxcblx0XCIxNDlcIjogODIyNixcblx0XCIxNTBcIjogODIxMSxcblx0XCIxNTFcIjogODIxMixcblx0XCIxNTJcIjogNzMyLFxuXHRcIjE1M1wiOiA4NDgyLFxuXHRcIjE1NFwiOiAzNTMsXG5cdFwiMTU1XCI6IDgyNTAsXG5cdFwiMTU2XCI6IDMzOSxcblx0XCIxNThcIjogMzgyLFxuXHRcIjE1OVwiOiAzNzZcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9kZWNvZGUuanNvblxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplLXJlZmVyZW5jZScpO1xuXG52YXIgbm9ybWFsaXplVVJJID0gY29tbW9uLm5vcm1hbGl6ZVVSSTtcbnZhciB1bmVzY2FwZVN0cmluZyA9IGNvbW1vbi51bmVzY2FwZVN0cmluZztcbnZhciBmcm9tQ29kZVBvaW50ID0gcmVxdWlyZSgnLi9mcm9tLWNvZGUtcG9pbnQuanMnKTtcbnZhciBkZWNvZGVIVE1MID0gcmVxdWlyZSgnZW50aXRpZXMnKS5kZWNvZGVIVE1MO1xucmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS5yZXBlYXQnKTsgLy8gUG9seWZpbGwgZm9yIFN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5cbi8vIENvbnN0YW50cyBmb3IgY2hhcmFjdGVyIGNvZGVzOlxuXG52YXIgQ19ORVdMSU5FID0gMTA7XG52YXIgQ19BU1RFUklTSyA9IDQyO1xudmFyIENfVU5ERVJTQ09SRSA9IDk1O1xudmFyIENfQkFDS1RJQ0sgPSA5NjtcbnZhciBDX09QRU5fQlJBQ0tFVCA9IDkxO1xudmFyIENfQ0xPU0VfQlJBQ0tFVCA9IDkzO1xudmFyIENfTEVTU1RIQU4gPSA2MDtcbnZhciBDX0JBTkcgPSAzMztcbnZhciBDX0JBQ0tTTEFTSCA9IDkyO1xudmFyIENfQU1QRVJTQU5EID0gMzg7XG52YXIgQ19PUEVOX1BBUkVOID0gNDA7XG52YXIgQ19DTE9TRV9QQVJFTiA9IDQxO1xudmFyIENfQ09MT04gPSA1ODtcbnZhciBDX1NJTkdMRVFVT1RFID0gMzk7XG52YXIgQ19ET1VCTEVRVU9URSA9IDM0O1xuXG4vLyBTb21lIHJlZ2V4cHMgdXNlZCBpbiBpbmxpbmUgcGFyc2VyOlxuXG52YXIgRVNDQVBBQkxFID0gY29tbW9uLkVTQ0FQQUJMRTtcbnZhciBFU0NBUEVEX0NIQVIgPSAnXFxcXFxcXFwnICsgRVNDQVBBQkxFO1xudmFyIFJFR19DSEFSID0gJ1teXFxcXFxcXFwoKVxcXFx4MDAtXFxcXHgyMF0nO1xudmFyIElOX1BBUkVOU19OT1NQID0gJ1xcXFwoKCcgKyBSRUdfQ0hBUiArICd8JyArIEVTQ0FQRURfQ0hBUiArICd8XFxcXFxcXFwpKlxcXFwpJztcblxudmFyIEVOVElUWSA9IGNvbW1vbi5FTlRJVFk7XG52YXIgcmVIdG1sVGFnID0gY29tbW9uLnJlSHRtbFRhZztcblxudmFyIHJlUHVuY3R1YXRpb24gPSBuZXcgUmVnRXhwKC9eW1xcdTIwMDAtXFx1MjA2RlxcdTJFMDAtXFx1MkU3RlxcXFwnIVwiI1xcJCUmXFwoXFwpXFwqXFwrLFxcLVxcLlxcLzo7PD0+XFw/QFxcW1xcXVxcXl9gXFx7XFx8XFx9fl0vKTtcblxudmFyIHJlTGlua1RpdGxlID0gbmV3IFJlZ0V4cChcbiAgICAnXig/OlwiKCcgKyBFU0NBUEVEX0NIQVIgKyAnfFteXCJcXFxceDAwXSkqXCInICtcbiAgICAgICAgJ3wnICtcbiAgICAgICAgJ1xcJygnICsgRVNDQVBFRF9DSEFSICsgJ3xbXlxcJ1xcXFx4MDBdKSpcXCcnICtcbiAgICAgICAgJ3wnICtcbiAgICAgICAgJ1xcXFwoKCcgKyBFU0NBUEVEX0NIQVIgKyAnfFteKVxcXFx4MDBdKSpcXFxcKSknKTtcblxudmFyIHJlTGlua0Rlc3RpbmF0aW9uQnJhY2VzID0gbmV3IFJlZ0V4cChcbiAgICAnXig/Ols8XSg/OltePD5cXFxcblxcXFxcXFxcXFxcXHgwMF0nICsgJ3wnICsgRVNDQVBFRF9DSEFSICsgJ3wnICsgJ1xcXFxcXFxcKSpbPl0pJyk7XG5cbnZhciByZUxpbmtEZXN0aW5hdGlvbiA9IG5ldyBSZWdFeHAoXG4gICAgJ14oPzonICsgUkVHX0NIQVIgKyAnK3wnICsgRVNDQVBFRF9DSEFSICsgJ3xcXFxcXFxcXHwnICsgSU5fUEFSRU5TX05PU1AgKyAnKSonKTtcblxudmFyIHJlRXNjYXBhYmxlID0gbmV3IFJlZ0V4cCgnXicgKyBFU0NBUEFCTEUpO1xuXG52YXIgcmVFbnRpdHlIZXJlID0gbmV3IFJlZ0V4cCgnXicgKyBFTlRJVFksICdpJyk7XG5cbnZhciByZVRpY2tzID0gL2ArLztcblxudmFyIHJlVGlja3NIZXJlID0gL15gKy87XG5cbnZhciByZUVsbGlwc2VzID0gL1xcLlxcLlxcLi9nO1xuXG52YXIgcmVEYXNoID0gLy0tKy9nO1xuXG52YXIgcmVFbWFpbEF1dG9saW5rID0gL148KFthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSopPi87XG5cbnZhciByZUF1dG9saW5rID0gL148KD86Y29hcHxkb2l8amF2YXNjcmlwdHxhYWF8YWFhc3xhYm91dHxhY2FwfGNhcHxjaWR8Y3JpZHxkYXRhfGRhdnxkaWN0fGRuc3xmaWxlfGZ0cHxnZW98Z298Z29waGVyfGgzMjN8aHR0cHxodHRwc3xpYXh8aWNhcHxpbXxpbWFwfGluZm98aXBwfGlyaXN8aXJpcy5iZWVwfGlyaXMueHBjfGlyaXMueHBjc3xpcmlzLmx3enxsZGFwfG1haWx0b3xtaWR8bXNycHxtc3Jwc3xtdHFwfG11cGRhdGV8bmV3c3xuZnN8bml8bmlofG5udHB8b3BhcXVlbG9ja3Rva2VufHBvcHxwcmVzfHJ0c3B8c2VydmljZXxzZXNzaW9ufHNodHRwfHNpZXZlfHNpcHxzaXBzfHNtc3xzbm1wfHNvYXAuYmVlcHxzb2FwLmJlZXBzfHRhZ3x0ZWx8dGVsbmV0fHRmdHB8dGhpc21lc3NhZ2V8dG4zMjcwfHRpcHx0dnx1cm58dmVtbWl8d3N8d3NzfHhjb258eGNvbi11c2VyaWR8eG1scnBjLmJlZXB8eG1scnBjLmJlZXBzfHhtcHB8ejM5LjUwcnx6MzkuNTBzfGFkaXVteHRyYXxhZnB8YWZzfGFpbXxhcHR8YXR0YWNobWVudHxhd3xiZXNoYXJlfGJpdGNvaW58Ym9sb3xjYWxsdG98Y2hyb21lfGNocm9tZS1leHRlbnNpb258Y29tLWV2ZW50YnJpdGUtYXR0ZW5kZWV8Y29udGVudHxjdnN8ZGxuYS1wbGF5c2luZ2xlfGRsbmEtcGxheWNvbnRhaW5lcnxkdG58ZHZifGVkMmt8ZmFjZXRpbWV8ZmVlZHxmaW5nZXJ8ZmlzaHxnZ3xnaXR8Z2l6bW9wcm9qZWN0fGd0YWxrfGhjcHxpY29ufGlwbnxpcmN8aXJjNnxpcmNzfGl0bXN8amFyfGptc3xrZXlwYXJjfGxhc3RmbXxsZGFwc3xtYWduZXR8bWFwc3xtYXJrZXR8bWVzc2FnZXxtbXN8bXMtaGVscHxtc25pbXxtdW1ibGV8bXZufG5vdGVzfG9pZHxwYWxtfHBhcGFyYXp6aXxwbGF0Zm9ybXxwcm94eXxwc3ljfHF1ZXJ5fHJlc3xyZXNvdXJjZXxybWl8cnN5bmN8cnRtcHxzZWNvbmRsaWZlfHNmdHB8c2dufHNreXBlfHNtYnxzb2xkYXR8c3BvdGlmeXxzc2h8c3RlYW18c3ZufHRlYW1zcGVha3x0aGluZ3N8dWRwfHVucmVhbHx1dDIwMDR8dmVudHJpbG98dmlldy1zb3VyY2V8d2ViY2FsfHd0YWl8d3ljaXd5Z3x4ZmlyZXx4cml8eW1zZ3IpOltePD5cXHgwMC1cXHgyMF0qPi9pO1xuXG52YXIgcmVTcG5sID0gL14gKig/OlxcbiAqKT8vO1xuXG52YXIgcmVXaGl0ZXNwYWNlQ2hhciA9IC9eXFxzLztcblxudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMrL2c7XG5cbnZhciByZUZpbmFsU3BhY2UgPSAvICokLztcblxudmFyIHJlSW5pdGlhbFNwYWNlID0gL14gKi87XG5cbnZhciByZVNwYWNlQXRFbmRPZkxpbmUgPSAvXiAqKD86XFxufCQpLztcblxudmFyIHJlTGlua0xhYmVsID0gbmV3IFJlZ0V4cCgnXlxcXFxbKD86W15cXFxcXFxcXFxcXFxbXFxcXF1dfCcgKyBFU0NBUEVEX0NIQVIgK1xuICAnfFxcXFxcXFxcKXswLDEwMDB9XFxcXF0nKTtcblxuLy8gTWF0Y2hlcyBhIHN0cmluZyBvZiBub24tc3BlY2lhbCBjaGFyYWN0ZXJzLlxudmFyIHJlTWFpbiA9IC9eW15cXG5gXFxbXFxdXFxcXCE8JipfJ1wiXSsvbTtcblxudmFyIHRleHQgPSBmdW5jdGlvbihzKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgTm9kZSgnVGV4dCcpO1xuICAgIG5vZGUuX2xpdGVyYWwgPSBzO1xuICAgIHJldHVybiBub2RlO1xufTtcblxuLy8gSU5MSU5FIFBBUlNFUlxuXG4vLyBUaGVzZSBhcmUgbWV0aG9kcyBvZiBhbiBJbmxpbmVQYXJzZXIgb2JqZWN0LCBkZWZpbmVkIGJlbG93LlxuLy8gQW4gSW5saW5lUGFyc2VyIGtlZXBzIHRyYWNrIG9mIGEgc3ViamVjdCAoYSBzdHJpbmcgdG8gYmVcbi8vIHBhcnNlZCkgYW5kIGEgcG9zaXRpb24gaW4gdGhhdCBzdWJqZWN0LlxuXG4vLyBJZiByZSBtYXRjaGVzIGF0IGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHN1YmplY3QsIGFkdmFuY2Vcbi8vIHBvc2l0aW9uIGluIHN1YmplY3QgYW5kIHJldHVybiB0aGUgbWF0Y2g7IG90aGVyd2lzZSByZXR1cm4gbnVsbC5cbnZhciBtYXRjaCA9IGZ1bmN0aW9uKHJlKSB7XG4gICAgdmFyIG0gPSByZS5leGVjKHRoaXMuc3ViamVjdC5zbGljZSh0aGlzLnBvcykpO1xuICAgIGlmIChtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zICs9IG0uaW5kZXggKyBtWzBdLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIG1bMF07XG4gICAgfVxufTtcblxuLy8gUmV0dXJucyB0aGUgY29kZSBmb3IgdGhlIGNoYXJhY3RlciBhdCB0aGUgY3VycmVudCBzdWJqZWN0IHBvc2l0aW9uLCBvciAtMVxuLy8gdGhlcmUgYXJlIG5vIG1vcmUgY2hhcmFjdGVycy5cbnZhciBwZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zIDwgdGhpcy5zdWJqZWN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59O1xuXG4vLyBQYXJzZSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVycywgaW5jbHVkaW5nIGF0IG1vc3Qgb25lIG5ld2xpbmVcbnZhciBzcG5sID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXRjaChyZVNwbmwpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gQWxsIG9mIHRoZSBwYXJzZXJzIGJlbG93IHRyeSB0byBtYXRjaCBzb21ldGhpbmcgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbi8vIGluIHRoZSBzdWJqZWN0LiAgSWYgdGhleSBzdWNjZWVkIGluIG1hdGNoaW5nIGFueXRoaW5nLCB0aGV5XG4vLyByZXR1cm4gdGhlIGlubGluZSBtYXRjaGVkLCBhZHZhbmNpbmcgdGhlIHN1YmplY3QuXG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYmFja3RpY2tzLCBhZGRpbmcgZWl0aGVyIGEgYmFja3RpY2sgY29kZSBzcGFuIG9yIGFcbi8vIGxpdGVyYWwgc2VxdWVuY2Ugb2YgYmFja3RpY2tzLlxudmFyIHBhcnNlQmFja3RpY2tzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgdGlja3MgPSB0aGlzLm1hdGNoKHJlVGlja3NIZXJlKTtcbiAgICBpZiAodGlja3MgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgYWZ0ZXJPcGVuVGlja3MgPSB0aGlzLnBvcztcbiAgICB2YXIgbWF0Y2hlZDtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAoKG1hdGNoZWQgPSB0aGlzLm1hdGNoKHJlVGlja3MpKSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAobWF0Y2hlZCA9PT0gdGlja3MpIHtcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnQ29kZScpO1xuICAgICAgICAgICAgbm9kZS5fbGl0ZXJhbCA9IHRoaXMuc3ViamVjdC5zbGljZShhZnRlck9wZW5UaWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyAtIHRpY2tzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKS5yZXBsYWNlKHJlV2hpdGVzcGFjZSwgJyAnKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgZ290IGhlcmUsIHdlIGRpZG4ndCBtYXRjaCBhIGNsb3NpbmcgYmFja3RpY2sgc2VxdWVuY2UuXG4gICAgdGhpcy5wb3MgPSBhZnRlck9wZW5UaWNrcztcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KHRpY2tzKSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBQYXJzZSBhIGJhY2tzbGFzaC1lc2NhcGVkIHNwZWNpYWwgY2hhcmFjdGVyLCBhZGRpbmcgZWl0aGVyIHRoZSBlc2NhcGVkXG4vLyBjaGFyYWN0ZXIsIGEgaGFyZCBsaW5lIGJyZWFrIChpZiB0aGUgYmFja3NsYXNoIGlzIGZvbGxvd2VkIGJ5IGEgbmV3bGluZSksXG4vLyBvciBhIGxpdGVyYWwgYmFja3NsYXNoIHRvIHRoZSBibG9jaydzIGNoaWxkcmVuLiAgQXNzdW1lcyBjdXJyZW50IGNoYXJhY3RlclxuLy8gaXMgYSBiYWNrc2xhc2guXG52YXIgcGFyc2VCYWNrc2xhc2ggPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdWJqID0gdGhpcy5zdWJqZWN0O1xuICAgIHZhciBub2RlO1xuICAgIHRoaXMucG9zICs9IDE7XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX05FV0xJTkUpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCdIYXJkYnJlYWsnKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChyZUVzY2FwYWJsZS50ZXN0KHN1YmouY2hhckF0KHRoaXMucG9zKSkpIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChzdWJqLmNoYXJBdCh0aGlzLnBvcykpKTtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCdcXFxcJykpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYW4gYXV0b2xpbmsgKFVSTCBvciBlbWFpbCBpbiBwb2ludHkgYnJhY2tldHMpLlxudmFyIHBhcnNlQXV0b2xpbmsgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtO1xuICAgIHZhciBkZXN0O1xuICAgIHZhciBub2RlO1xuICAgIGlmICgobSA9IHRoaXMubWF0Y2gocmVFbWFpbEF1dG9saW5rKSkpIHtcbiAgICAgICAgZGVzdCA9IG0uc2xpY2UoMSwgbS5sZW5ndGggLSAxKTtcbiAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCdMaW5rJyk7XG4gICAgICAgIG5vZGUuX2Rlc3RpbmF0aW9uID0gbm9ybWFsaXplVVJJKCdtYWlsdG86JyArIGRlc3QpO1xuICAgICAgICBub2RlLl90aXRsZSA9ICcnO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRleHQoZGVzdCkpO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICgobSA9IHRoaXMubWF0Y2gocmVBdXRvbGluaykpKSB7XG4gICAgICAgIGRlc3QgPSBtLnNsaWNlKDEsIG0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnTGluaycpO1xuICAgICAgICBub2RlLl9kZXN0aW5hdGlvbiA9IG5vcm1hbGl6ZVVSSShkZXN0KTtcbiAgICAgICAgbm9kZS5fdGl0bGUgPSAnJztcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0KGRlc3QpKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGEgcmF3IEhUTUwgdGFnLlxudmFyIHBhcnNlSHRtbFRhZyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG0gPSB0aGlzLm1hdGNoKHJlSHRtbFRhZyk7XG4gICAgaWYgKG0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoJ0h0bWwnKTtcbiAgICAgICAgbm9kZS5fbGl0ZXJhbCA9IG07XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG4vLyBTY2FuIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB3aXRoIGNvZGUgY2MsIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXRcbi8vIHRoZSBudW1iZXIgb2YgZGVsaW1pdGVycyBhbmQgd2hldGhlciB0aGV5IGFyZSBwb3NpdGlvbmVkIHN1Y2ggdGhhdFxuLy8gdGhleSBjYW4gb3BlbiBhbmQvb3IgY2xvc2UgZW1waGFzaXMgb3Igc3Ryb25nIGVtcGhhc2lzLiAgQSB1dGlsaXR5XG4vLyBmdW5jdGlvbiBmb3Igc3Ryb25nL2VtcGggcGFyc2luZy5cbnZhciBzY2FuRGVsaW1zID0gZnVuY3Rpb24oY2MpIHtcbiAgICB2YXIgbnVtZGVsaW1zID0gMDtcbiAgICB2YXIgY2hhcl9iZWZvcmUsIGNoYXJfYWZ0ZXIsIGNjX2FmdGVyO1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHZhciBsZWZ0X2ZsYW5raW5nLCByaWdodF9mbGFua2luZywgY2FuX29wZW4sIGNhbl9jbG9zZTtcbiAgICB2YXIgYWZ0ZXJfaXNfd2hpdGVzcGFjZSwgYWZ0ZXJfaXNfcHVuY3R1YXRpb24sIGJlZm9yZV9pc193aGl0ZXNwYWNlLCBiZWZvcmVfaXNfcHVuY3R1YXRpb247XG5cbiAgICBpZiAoY2MgPT09IENfU0lOR0xFUVVPVEUgfHwgY2MgPT09IENfRE9VQkxFUVVPVEUpIHtcbiAgICAgICAgbnVtZGVsaW1zKys7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpID09PSBjYykge1xuICAgICAgICAgICAgbnVtZGVsaW1zKys7XG4gICAgICAgICAgICB0aGlzLnBvcysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bWRlbGltcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjaGFyX2JlZm9yZSA9IHN0YXJ0cG9zID09PSAwID8gJ1xcbicgOiB0aGlzLnN1YmplY3QuY2hhckF0KHN0YXJ0cG9zIC0gMSk7XG5cbiAgICBjY19hZnRlciA9IHRoaXMucGVlaygpO1xuICAgIGlmIChjY19hZnRlciA9PT0gLTEpIHtcbiAgICAgICAgY2hhcl9hZnRlciA9ICdcXG4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYXJfYWZ0ZXIgPSBmcm9tQ29kZVBvaW50KGNjX2FmdGVyKTtcbiAgICB9XG5cbiAgICBhZnRlcl9pc193aGl0ZXNwYWNlID0gcmVXaGl0ZXNwYWNlQ2hhci50ZXN0KGNoYXJfYWZ0ZXIpO1xuICAgIGFmdGVyX2lzX3B1bmN0dWF0aW9uID0gcmVQdW5jdHVhdGlvbi50ZXN0KGNoYXJfYWZ0ZXIpO1xuICAgIGJlZm9yZV9pc193aGl0ZXNwYWNlID0gcmVXaGl0ZXNwYWNlQ2hhci50ZXN0KGNoYXJfYmVmb3JlKTtcbiAgICBiZWZvcmVfaXNfcHVuY3R1YXRpb24gPSByZVB1bmN0dWF0aW9uLnRlc3QoY2hhcl9iZWZvcmUpO1xuXG4gICAgbGVmdF9mbGFua2luZyA9ICFhZnRlcl9pc193aGl0ZXNwYWNlICYmXG4gICAgICAgICAgICAhKGFmdGVyX2lzX3B1bmN0dWF0aW9uICYmICFiZWZvcmVfaXNfd2hpdGVzcGFjZSAmJiAhYmVmb3JlX2lzX3B1bmN0dWF0aW9uKTtcbiAgICByaWdodF9mbGFua2luZyA9ICFiZWZvcmVfaXNfd2hpdGVzcGFjZSAmJlxuICAgICAgICAgICAgIShiZWZvcmVfaXNfcHVuY3R1YXRpb24gJiYgIWFmdGVyX2lzX3doaXRlc3BhY2UgJiYgIWFmdGVyX2lzX3B1bmN0dWF0aW9uKTtcbiAgICBpZiAoY2MgPT09IENfVU5ERVJTQ09SRSkge1xuICAgICAgICBjYW5fb3BlbiA9IGxlZnRfZmxhbmtpbmcgJiZcbiAgICAgICAgICAgICghcmlnaHRfZmxhbmtpbmcgfHwgYmVmb3JlX2lzX3B1bmN0dWF0aW9uKTtcbiAgICAgICAgY2FuX2Nsb3NlID0gcmlnaHRfZmxhbmtpbmcgJiZcbiAgICAgICAgICAgICghbGVmdF9mbGFua2luZyB8fCBhZnRlcl9pc19wdW5jdHVhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FuX29wZW4gPSBsZWZ0X2ZsYW5raW5nO1xuICAgICAgICBjYW5fY2xvc2UgPSByaWdodF9mbGFua2luZztcbiAgICB9XG4gICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICByZXR1cm4geyBudW1kZWxpbXM6IG51bWRlbGltcyxcbiAgICAgICAgICAgICBjYW5fb3BlbjogY2FuX29wZW4sXG4gICAgICAgICAgICAgY2FuX2Nsb3NlOiBjYW5fY2xvc2UgfTtcbn07XG5cbi8vIEhhbmRsZSBhIGRlbGltaXRlciBtYXJrZXIgZm9yIGVtcGhhc2lzIG9yIGEgcXVvdGUuXG52YXIgaGFuZGxlRGVsaW0gPSBmdW5jdGlvbihjYywgYmxvY2spIHtcbiAgICB2YXIgcmVzID0gdGhpcy5zY2FuRGVsaW1zKGNjKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBudW1kZWxpbXMgPSByZXMubnVtZGVsaW1zO1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHZhciBjb250ZW50cztcblxuICAgIHRoaXMucG9zICs9IG51bWRlbGltcztcbiAgICBpZiAoY2MgPT09IENfU0lOR0xFUVVPVEUpIHtcbiAgICAgICAgY29udGVudHMgPSBcIlxcdTIwMTlcIjtcbiAgICB9IGVsc2UgaWYgKGNjID09PSBDX0RPVUJMRVFVT1RFKSB7XG4gICAgICAgIGNvbnRlbnRzID0gXCJcXHUyMDFDXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudHMgPSB0aGlzLnN1YmplY3Quc2xpY2Uoc3RhcnRwb3MsIHRoaXMucG9zKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSB0ZXh0KGNvbnRlbnRzKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIC8vIEFkZCBlbnRyeSB0byBzdGFjayBmb3IgdGhpcyBvcGVuZXJcbiAgICB0aGlzLmRlbGltaXRlcnMgPSB7IGNjOiBjYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWRlbGltczogbnVtZGVsaW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiB0aGlzLmRlbGltaXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuX29wZW46IHJlcy5jYW5fb3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9jbG9zZTogcmVzLmNhbl9jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSB9O1xuICAgIGlmICh0aGlzLmRlbGltaXRlcnMucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzLm5leHQgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn07XG5cbnZhciByZW1vdmVEZWxpbWl0ZXIgPSBmdW5jdGlvbihkZWxpbSkge1xuICAgIGlmIChkZWxpbS5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICBkZWxpbS5wcmV2aW91cy5uZXh0ID0gZGVsaW0ubmV4dDtcbiAgICB9XG4gICAgaWYgKGRlbGltLm5leHQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gdG9wIG9mIHN0YWNrXG4gICAgICAgIHRoaXMuZGVsaW1pdGVycyA9IGRlbGltLnByZXZpb3VzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGltLm5leHQucHJldmlvdXMgPSBkZWxpbS5wcmV2aW91cztcbiAgICB9XG59O1xuXG52YXIgcmVtb3ZlRGVsaW1pdGVyc0JldHdlZW4gPSBmdW5jdGlvbihib3R0b20sIHRvcCkge1xuICAgIGlmIChib3R0b20ubmV4dCAhPT0gdG9wKSB7XG4gICAgICAgIGJvdHRvbS5uZXh0ID0gdG9wO1xuICAgICAgICB0b3AucHJldmlvdXMgPSBib3R0b207XG4gICAgfVxufTtcblxudmFyIHByb2Nlc3NFbXBoYXNpcyA9IGZ1bmN0aW9uKHN0YWNrX2JvdHRvbSkge1xuICAgIHZhciBvcGVuZXIsIGNsb3Nlciwgb2xkX2Nsb3NlcjtcbiAgICB2YXIgb3BlbmVyX2lubCwgY2xvc2VyX2lubDtcbiAgICB2YXIgdGVtcHN0YWNrO1xuICAgIHZhciB1c2VfZGVsaW1zO1xuICAgIHZhciB0bXAsIG5leHQ7XG4gICAgdmFyIG9wZW5lcl9mb3VuZDtcbiAgICB2YXIgb3BlbmVyc19ib3R0b20gPSBbXTtcblxuICAgIG9wZW5lcnNfYm90dG9tW0NfVU5ERVJTQ09SRV0gPSBzdGFja19ib3R0b207XG4gICAgb3BlbmVyc19ib3R0b21bQ19BU1RFUklTS10gPSBzdGFja19ib3R0b207XG4gICAgb3BlbmVyc19ib3R0b21bQ19TSU5HTEVRVU9URV0gPSBzdGFja19ib3R0b207XG4gICAgb3BlbmVyc19ib3R0b21bQ19ET1VCTEVRVU9URV0gPSBzdGFja19ib3R0b207XG5cbiAgICAvLyBmaW5kIGZpcnN0IGNsb3NlciBhYm92ZSBzdGFja19ib3R0b206XG4gICAgY2xvc2VyID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgIHdoaWxlIChjbG9zZXIgIT09IG51bGwgJiYgY2xvc2VyLnByZXZpb3VzICE9PSBzdGFja19ib3R0b20pIHtcbiAgICAgICAgY2xvc2VyID0gY2xvc2VyLnByZXZpb3VzO1xuICAgIH1cbiAgICAvLyBtb3ZlIGZvcndhcmQsIGxvb2tpbmcgZm9yIGNsb3NlcnMsIGFuZCBoYW5kbGluZyBlYWNoXG4gICAgd2hpbGUgKGNsb3NlciAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgY2xvc2VyY2MgPSBjbG9zZXIuY2M7XG4gICAgICAgIGlmICghKGNsb3Nlci5jYW5fY2xvc2UgJiYgKGNsb3NlcmNjID09PSBDX1VOREVSU0NPUkUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyY2MgPT09IENfQVNURVJJU0sgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyY2MgPT09IENfU0lOR0xFUVVPVEUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyY2MgPT09IENfRE9VQkxFUVVPVEUpKSkge1xuICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3VuZCBlbXBoYXNpcyBjbG9zZXIuIG5vdyBsb29rIGJhY2sgZm9yIGZpcnN0IG1hdGNoaW5nIG9wZW5lcjpcbiAgICAgICAgICAgIG9wZW5lciA9IGNsb3Nlci5wcmV2aW91cztcbiAgICAgICAgICAgIG9wZW5lcl9mb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKG9wZW5lciAhPT0gbnVsbCAmJiBvcGVuZXIgIT09IHN0YWNrX2JvdHRvbSAmJlxuICAgICAgICAgICAgICAgICAgIG9wZW5lciAhPT0gb3BlbmVyc19ib3R0b21bY2xvc2VyY2NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lci5jYyA9PT0gY2xvc2VyLmNjICYmIG9wZW5lci5jYW5fb3Blbikge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXJfZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3BlbmVyID0gb3BlbmVyLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2xkX2Nsb3NlciA9IGNsb3NlcjtcblxuICAgICAgICAgICAgaWYgKGNsb3NlcmNjID09PSBDX0FTVEVSSVNLIHx8IGNsb3NlcmNjID09PSBDX1VOREVSU0NPUkUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXIgPSBjbG9zZXIubmV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgYWN0dWFsIG51bWJlciBvZiBkZWxpbWl0ZXJzIHVzZWQgZnJvbSBjbG9zZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlci5udW1kZWxpbXMgPCAzIHx8IG9wZW5lci5udW1kZWxpbXMgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VfZGVsaW1zID0gY2xvc2VyLm51bWRlbGltcyA8PSBvcGVuZXIubnVtZGVsaW1zID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXIubnVtZGVsaW1zIDogb3BlbmVyLm51bWRlbGltcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9kZWxpbXMgPSBjbG9zZXIubnVtZGVsaW1zICUgMiA9PT0gMCA/IDIgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubCA9IG9wZW5lci5ub2RlO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sID0gY2xvc2VyLm5vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHVzZWQgZGVsaW1pdGVycyBmcm9tIHN0YWNrIGVsdHMgYW5kIGlubGluZXNcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyLm51bWRlbGltcyAtPSB1c2VfZGVsaW1zO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXIubnVtZGVsaW1zIC09IHVzZV9kZWxpbXM7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuX2xpdGVyYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5fbGl0ZXJhbC5zbGljZSgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLl9saXRlcmFsLmxlbmd0aCAtIHVzZV9kZWxpbXMpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sLl9saXRlcmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwuX2xpdGVyYWwuc2xpY2UoMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC5fbGl0ZXJhbC5sZW5ndGggLSB1c2VfZGVsaW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBidWlsZCBjb250ZW50cyBmb3IgbmV3IGVtcGggZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1waCA9IG5ldyBOb2RlKHVzZV9kZWxpbXMgPT09IDEgPyAnRW1waCcgOiAnU3Ryb25nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG1wID0gb3BlbmVyX2lubC5fbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRtcCAmJiB0bXAgIT09IGNsb3Nlcl9pbmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0bXAuX25leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAudW5saW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBoLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5pbnNlcnRBZnRlcihlbXBoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZWx0cyBiZXR3ZWVuIG9wZW5lciBhbmQgY2xvc2VyIGluIGRlbGltaXRlcnMgc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGVsaW1pdGVyc0JldHdlZW4ob3BlbmVyLCBjbG9zZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG9wZW5lciBoYXMgMCBkZWxpbXMsIHJlbW92ZSBpdCBhbmQgdGhlIGlubGluZVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbmVyLm51bWRlbGltcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC51bmxpbmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKG9wZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VyLm51bWRlbGltcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC51bmxpbmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBzdGFjayA9IGNsb3Nlci5uZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIoY2xvc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlciA9IHRlbXBzdGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlcmNjID09PSBDX1NJTkdMRVFVT1RFKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyLm5vZGUuX2xpdGVyYWwgPSBcIlxcdTIwMTlcIjtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lci5ub2RlLl9saXRlcmFsID0gXCJcXHUyMDE4XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlcmNjID09PSBDX0RPVUJMRVFVT1RFKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyLm5vZGUuX2xpdGVyYWwgPSBcIlxcdTIwMURcIjtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lci5ub2RlLmxpdGVyYWwgPSBcIlxcdTIwMUNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghb3BlbmVyX2ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGxvd2VyIGJvdW5kIGZvciBmdXR1cmUgc2VhcmNoZXMgZm9yIG9wZW5lcnM6XG4gICAgICAgICAgICAgICAgb3BlbmVyc19ib3R0b21bY2xvc2VyY2NdID0gb2xkX2Nsb3Nlci5wcmV2aW91cztcbiAgICAgICAgICAgICAgICBpZiAoIW9sZF9jbG9zZXIuY2FuX29wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHJlbW92ZSBhIGNsb3NlciB0aGF0IGNhbid0IGJlIGFuIG9wZW5lcixcbiAgICAgICAgICAgICAgICAgICAgLy8gb25jZSB3ZSd2ZSBzZWVuIHRoZXJlJ3Mgbm8gbWF0Y2hpbmcgb3BlbmVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvbGRfY2xvc2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgZGVsaW1pdGVyc1xuICAgIHdoaWxlICh0aGlzLmRlbGltaXRlcnMgIT09IG51bGwgJiYgdGhpcy5kZWxpbWl0ZXJzICE9PSBzdGFja19ib3R0b20pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIodGhpcy5kZWxpbWl0ZXJzKTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGxpbmsgdGl0bGUgKHNhbnMgcXVvdGVzKSwgcmV0dXJuaW5nIHRoZSBzdHJpbmdcbi8vIG9yIG51bGwgaWYgbm8gbWF0Y2guXG52YXIgcGFyc2VMaW5rVGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLm1hdGNoKHJlTGlua1RpdGxlKTtcbiAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2hvcCBvZmYgcXVvdGVzIGZyb20gdGl0bGUgYW5kIHVuZXNjYXBlOlxuICAgICAgICByZXR1cm4gdW5lc2NhcGVTdHJpbmcodGl0bGUuc3Vic3RyKDEsIHRpdGxlLmxlbmd0aCAtIDIpKTtcbiAgICB9XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGxpbmsgZGVzdGluYXRpb24sIHJldHVybmluZyB0aGUgc3RyaW5nIG9yXG4vLyBudWxsIGlmIG5vIG1hdGNoLlxudmFyIHBhcnNlTGlua0Rlc3RpbmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlcyA9IHRoaXMubWF0Y2gocmVMaW5rRGVzdGluYXRpb25CcmFjZXMpO1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmVzID0gdGhpcy5tYXRjaChyZUxpbmtEZXN0aW5hdGlvbik7XG4gICAgICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVSSSh1bmVzY2FwZVN0cmluZyhyZXMpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7ICAvLyBjaG9wIG9mZiBzdXJyb3VuZGluZyA8Li4+OlxuICAgICAgICByZXR1cm4gbm9ybWFsaXplVVJJKHVuZXNjYXBlU3RyaW5nKHJlcy5zdWJzdHIoMSwgcmVzLmxlbmd0aCAtIDIpKSk7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhIGxpbmsgbGFiZWwsIHJldHVybmluZyBudW1iZXIgb2YgY2hhcmFjdGVycyBwYXJzZWQuXG52YXIgcGFyc2VMaW5rTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbSA9IHRoaXMubWF0Y2gocmVMaW5rTGFiZWwpO1xuICAgIGlmIChtID09PSBudWxsIHx8IG0ubGVuZ3RoID4gMTAwMSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbS5sZW5ndGg7XG4gICAgfVxufTtcblxuLy8gQWRkIG9wZW4gYnJhY2tldCB0byBkZWxpbWl0ZXIgc3RhY2sgYW5kIGFkZCBhIHRleHQgbm9kZSB0byBibG9jaydzIGNoaWxkcmVuLlxudmFyIHBhcnNlT3BlbkJyYWNrZXQgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHRoaXMucG9zICs9IDE7XG5cbiAgICB2YXIgbm9kZSA9IHRleHQoJ1snKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIC8vIEFkZCBlbnRyeSB0byBzdGFjayBmb3IgdGhpcyBvcGVuZXJcbiAgICB0aGlzLmRlbGltaXRlcnMgPSB7IGNjOiBDX09QRU5fQlJBQ0tFVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWRlbGltczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogdGhpcy5kZWxpbWl0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9vcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuX2Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSB9O1xuICAgIGlmICh0aGlzLmRlbGltaXRlcnMucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzLm5leHQgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn07XG5cbi8vIElGIG5leHQgY2hhcmFjdGVyIGlzIFssIGFuZCAhIGRlbGltaXRlciB0byBkZWxpbWl0ZXIgc3RhY2sgYW5kXG4vLyBhZGQgYSB0ZXh0IG5vZGUgdG8gYmxvY2sncyBjaGlsZHJlbi4gIE90aGVyd2lzZSBqdXN0IGFkZCBhIHRleHQgbm9kZS5cbnZhciBwYXJzZUJhbmcgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuICAgIHRoaXMucG9zICs9IDE7XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX09QRU5fQlJBQ0tFVCkge1xuICAgICAgICB0aGlzLnBvcyArPSAxO1xuXG4gICAgICAgIHZhciBub2RlID0gdGV4dCgnIVsnKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgLy8gQWRkIGVudHJ5IHRvIHN0YWNrIGZvciB0aGlzIG9wZW5lclxuICAgICAgICB0aGlzLmRlbGltaXRlcnMgPSB7IGNjOiBDX0JBTkcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZGVsaW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHRoaXMuZGVsaW1pdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9vcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9jbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0cG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUgfTtcbiAgICAgICAgaWYgKHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzLm5leHQgPSB0aGlzLmRlbGltaXRlcnM7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCchJykpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFRyeSB0byBtYXRjaCBjbG9zZSBicmFja2V0IGFnYWluc3QgYW4gb3BlbmluZyBpbiB0aGUgZGVsaW1pdGVyXG4vLyBzdGFjay4gIEFkZCBlaXRoZXIgYSBsaW5rIG9yIGltYWdlLCBvciBhIHBsYWluIFsgY2hhcmFjdGVyLFxuLy8gdG8gYmxvY2sncyBjaGlsZHJlbi4gIElmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZGVsaW1pdGVyLFxuLy8gcmVtb3ZlIGl0IGZyb20gdGhlIGRlbGltaXRlciBzdGFjay5cbnZhciBwYXJzZUNsb3NlQnJhY2tldCA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHN0YXJ0cG9zO1xuICAgIHZhciBpc19pbWFnZTtcbiAgICB2YXIgZGVzdDtcbiAgICB2YXIgdGl0bGU7XG4gICAgdmFyIG1hdGNoZWQgPSBmYWxzZTtcbiAgICB2YXIgcmVmbGFiZWw7XG4gICAgdmFyIG9wZW5lcjtcblxuICAgIHRoaXMucG9zICs9IDE7XG4gICAgc3RhcnRwb3MgPSB0aGlzLnBvcztcblxuICAgIC8vIGxvb2sgdGhyb3VnaCBzdGFjayBvZiBkZWxpbWl0ZXJzIGZvciBhIFsgb3IgIVtcbiAgICBvcGVuZXIgPSB0aGlzLmRlbGltaXRlcnM7XG5cbiAgICB3aGlsZSAob3BlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChvcGVuZXIuY2MgPT09IENfT1BFTl9CUkFDS0VUIHx8IG9wZW5lci5jYyA9PT0gQ19CQU5HKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvcGVuZXIgPSBvcGVuZXIucHJldmlvdXM7XG4gICAgfVxuXG4gICAgaWYgKG9wZW5lciA9PT0gbnVsbCkge1xuICAgICAgICAvLyBubyBtYXRjaGVkIG9wZW5lciwganVzdCByZXR1cm4gYSBsaXRlcmFsXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJ10nKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghb3BlbmVyLmFjdGl2ZSkge1xuICAgICAgICAvLyBubyBtYXRjaGVkIG9wZW5lciwganVzdCByZXR1cm4gYSBsaXRlcmFsXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoJ10nKSk7XG4gICAgICAgIC8vIHRha2Ugb3BlbmVyIG9mZiBlbXBoYXNpcyBzdGFja1xuICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvcGVuZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBnb3QgaGVyZSwgb3BlbiBpcyBhIHBvdGVudGlhbCBvcGVuZXJcbiAgICBpc19pbWFnZSA9IG9wZW5lci5jYyA9PT0gQ19CQU5HO1xuXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSBsaW5rL2ltYWdlXG5cbiAgICAvLyBJbmxpbmUgbGluaz9cbiAgICBpZiAodGhpcy5wZWVrKCkgPT09IENfT1BFTl9QQVJFTikge1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgICAgICBpZiAodGhpcy5zcG5sKCkgJiZcbiAgICAgICAgICAgICgoZGVzdCA9IHRoaXMucGFyc2VMaW5rRGVzdGluYXRpb24oKSkgIT09IG51bGwpICYmXG4gICAgICAgICAgICB0aGlzLnNwbmwoKSAmJlxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgYSBzcGFjZSBiZWZvcmUgdGhlIHRpdGxlOlxuICAgICAgICAgICAgKHJlV2hpdGVzcGFjZUNoYXIudGVzdCh0aGlzLnN1YmplY3QuY2hhckF0KHRoaXMucG9zIC0gMSkpICYmXG4gICAgICAgICAgICAgKHRpdGxlID0gdGhpcy5wYXJzZUxpbmtUaXRsZSgpKSB8fCB0cnVlKSAmJlxuICAgICAgICAgICAgdGhpcy5zcG5sKCkgJiZcbiAgICAgICAgICAgIHRoaXMucGVlaygpID09PSBDX0NMT1NFX1BBUkVOKSB7XG4gICAgICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIE5leHQsIHNlZSBpZiB0aGVyZSdzIGEgbGluayBsYWJlbFxuICAgICAgICB2YXIgc2F2ZXBvcyA9IHRoaXMucG9zO1xuICAgICAgICB0aGlzLnNwbmwoKTtcbiAgICAgICAgdmFyIGJlZm9yZWxhYmVsID0gdGhpcy5wb3M7XG4gICAgICAgIHZhciBuID0gdGhpcy5wYXJzZUxpbmtMYWJlbCgpO1xuICAgICAgICBpZiAobiA9PT0gMCB8fCBuID09PSAyKSB7XG4gICAgICAgICAgICAvLyBlbXB0eSBvciBtaXNzaW5nIHNlY29uZCBsYWJlbFxuICAgICAgICAgICAgcmVmbGFiZWwgPSB0aGlzLnN1YmplY3Quc2xpY2Uob3BlbmVyLmluZGV4LCBzdGFydHBvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZsYWJlbCA9IHRoaXMuc3ViamVjdC5zbGljZShiZWZvcmVsYWJlbCwgYmVmb3JlbGFiZWwgKyBuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmssIHJld2luZCBiZWZvcmUgc3BhY2VzIHdlIHNraXBwZWQuXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHNhdmVwb3M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb29rdXAgcmF3bGFiZWwgaW4gcmVmbWFwXG4gICAgICAgIHZhciBsaW5rID0gdGhpcy5yZWZtYXBbbm9ybWFsaXplUmVmZXJlbmNlKHJlZmxhYmVsKV07XG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgICBkZXN0ID0gbGluay5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIHRpdGxlID0gbGluay50aXRsZTtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShpc19pbWFnZSA/ICdJbWFnZScgOiAnTGluaycpO1xuICAgICAgICBub2RlLl9kZXN0aW5hdGlvbiA9IGRlc3Q7XG4gICAgICAgIG5vZGUuX3RpdGxlID0gdGl0bGUgfHwgJyc7XG5cbiAgICAgICAgdmFyIHRtcCwgbmV4dDtcbiAgICAgICAgdG1wID0gb3BlbmVyLm5vZGUuX25leHQ7XG4gICAgICAgIHdoaWxlICh0bXApIHtcbiAgICAgICAgICAgIG5leHQgPSB0bXAuX25leHQ7XG4gICAgICAgICAgICB0bXAudW5saW5rKCk7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgICAgICB0bXAgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLnByb2Nlc3NFbXBoYXNpcyhvcGVuZXIucHJldmlvdXMpO1xuXG4gICAgICAgIG9wZW5lci5ub2RlLnVubGluaygpO1xuXG4gICAgICAgIC8vIHByb2Nlc3NFbXBoYXNpcyB3aWxsIHJlbW92ZSB0aGlzIGFuZCBsYXRlciBkZWxpbWl0ZXJzLlxuICAgICAgICAvLyBOb3csIGZvciBhIGxpbmssIHdlIGFsc28gZGVhY3RpdmF0ZSBlYXJsaWVyIGxpbmsgb3BlbmVycy5cbiAgICAgICAgLy8gKG5vIGxpbmtzIGluIGxpbmtzKVxuICAgICAgICBpZiAoIWlzX2ltYWdlKSB7XG4gICAgICAgICAgb3BlbmVyID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgICAgICAgIHdoaWxlIChvcGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChvcGVuZXIuY2MgPT09IENfT1BFTl9CUkFDS0VUKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVyLmFjdGl2ZSA9IGZhbHNlOyAvLyBkZWFjdGl2YXRlIHRoaXMgb3BlbmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcGVuZXIgPSBvcGVuZXIucHJldmlvdXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9IGVsc2UgeyAvLyBubyBtYXRjaFxuXG4gICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKG9wZW5lcik7ICAvLyByZW1vdmUgdGhpcyBvcGVuZXIgZnJvbSBzdGFja1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCddJykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYW4gZW50aXR5LlxudmFyIHBhcnNlRW50aXR5ID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlRW50aXR5SGVyZSkpKSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoZGVjb2RlSFRNTChtKSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuLy8gUGFyc2UgYSBydW4gb2Ygb3JkaW5hcnkgY2hhcmFjdGVycywgb3IgYSBzaW5nbGUgY2hhcmFjdGVyIHdpdGhcbi8vIGEgc3BlY2lhbCBtZWFuaW5nIGluIG1hcmtkb3duLCBhcyBhIHBsYWluIHN0cmluZy5cbnZhciBwYXJzZVN0cmluZyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKChtID0gdGhpcy5tYXRjaChyZU1haW4pKSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNtYXJ0KSB7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KFxuICAgICAgICAgICAgICAgIG0ucmVwbGFjZShyZUVsbGlwc2VzLCBcIlxcdTIwMjZcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVEYXNoLCBmdW5jdGlvbihjaGFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJzLmxlbmd0aCAlIDMgPT09IDApIHsgLy8gSWYgZGl2aXNpYmxlIGJ5IDMsIHVzZSBhbGwgZW0gZGFzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1Db3VudCA9IGNoYXJzLmxlbmd0aCAvIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJzLmxlbmd0aCAlIDIgPT09IDApIHsgLy8gSWYgZGl2aXNpYmxlIGJ5IDIsIHVzZSBhbGwgZW4gZGFzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5Db3VudCA9IGNoYXJzLmxlbmd0aCAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJzLmxlbmd0aCAlIDMgPT09IDIpIHsgLy8gSWYgMiBleHRyYSBkYXNoZXMsIHVzZSBlbiBkYXNoIGZvciBsYXN0IDI7IGVtIGRhc2hlcyBmb3IgcmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuQ291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtQ291bnQgPSAoY2hhcnMubGVuZ3RoIC0gMikgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gVXNlIGVuIGRhc2hlcyBmb3IgbGFzdCA0IGh5cGhlbnM7IGVtIGRhc2hlcyBmb3IgcmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuQ291bnQgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtQ291bnQgPSAoY2hhcnMubGVuZ3RoIC0gNCkgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXFx1MjAxNFwiLnJlcGVhdChlbUNvdW50KSArIFwiXFx1MjAxM1wiLnJlcGVhdChlbkNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQobSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG4vLyBQYXJzZSBhIG5ld2xpbmUuICBJZiBpdCB3YXMgcHJlY2VkZWQgYnkgdHdvIHNwYWNlcywgcmV0dXJuIGEgaGFyZFxuLy8gbGluZSBicmVhazsgb3RoZXJ3aXNlIGEgc29mdCBsaW5lIGJyZWFrLlxudmFyIHBhcnNlTmV3bGluZSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdGhpcy5wb3MgKz0gMTsgLy8gYXNzdW1lIHdlJ3JlIGF0IGEgXFxuXG4gICAgLy8gY2hlY2sgcHJldmlvdXMgbm9kZSBmb3IgdHJhaWxpbmcgc3BhY2VzXG4gICAgdmFyIGxhc3RjID0gYmxvY2suX2xhc3RDaGlsZDtcbiAgICBpZiAobGFzdGMgJiYgbGFzdGMudHlwZSA9PT0gJ1RleHQnICYmIGxhc3RjLl9saXRlcmFsW2xhc3RjLl9saXRlcmFsLmxlbmd0aCAtIDFdID09PSAnICcpIHtcbiAgICAgICAgdmFyIGhhcmRicmVhayA9IGxhc3RjLl9saXRlcmFsW2xhc3RjLl9saXRlcmFsLmxlbmd0aCAtIDJdID09PSAnICc7XG4gICAgICAgIGxhc3RjLl9saXRlcmFsID0gbGFzdGMuX2xpdGVyYWwucmVwbGFjZShyZUZpbmFsU3BhY2UsICcnKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobmV3IE5vZGUoaGFyZGJyZWFrID8gJ0hhcmRicmVhaycgOiAnU29mdGJyZWFrJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5ldyBOb2RlKCdTb2Z0YnJlYWsnKSk7XG4gICAgfVxuICAgIHRoaXMubWF0Y2gocmVJbml0aWFsU3BhY2UpOyAvLyBnb2JibGUgbGVhZGluZyBzcGFjZXMgaW4gbmV4dCBsaW5lXG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGEgbGluayByZWZlcmVuY2UsIG1vZGlmeWluZyByZWZtYXAuXG52YXIgcGFyc2VSZWZlcmVuY2UgPSBmdW5jdGlvbihzLCByZWZtYXApIHtcbiAgICB0aGlzLnN1YmplY3QgPSBzO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB2YXIgcmF3bGFiZWw7XG4gICAgdmFyIGRlc3Q7XG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBtYXRjaENoYXJzO1xuICAgIHZhciBzdGFydHBvcyA9IHRoaXMucG9zO1xuXG4gICAgLy8gbGFiZWw6XG4gICAgbWF0Y2hDaGFycyA9IHRoaXMucGFyc2VMaW5rTGFiZWwoKTtcbiAgICBpZiAobWF0Y2hDaGFycyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXdsYWJlbCA9IHRoaXMuc3ViamVjdC5zdWJzdHIoMCwgbWF0Y2hDaGFycyk7XG4gICAgfVxuXG4gICAgLy8gY29sb246XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX0NPTE9OKSB7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gIGxpbmsgdXJsXG4gICAgdGhpcy5zcG5sKCk7XG5cbiAgICBkZXN0ID0gdGhpcy5wYXJzZUxpbmtEZXN0aW5hdGlvbigpO1xuICAgIGlmIChkZXN0ID09PSBudWxsIHx8IGRlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBiZWZvcmV0aXRsZSA9IHRoaXMucG9zO1xuICAgIHRoaXMuc3BubCgpO1xuICAgIHRpdGxlID0gdGhpcy5wYXJzZUxpbmtUaXRsZSgpO1xuICAgIGlmICh0aXRsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aXRsZSA9ICcnO1xuICAgICAgICAvLyByZXdpbmQgYmVmb3JlIHNwYWNlc1xuICAgICAgICB0aGlzLnBvcyA9IGJlZm9yZXRpdGxlO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBhdCBsaW5lIGVuZDpcbiAgICB2YXIgYXRMaW5lRW5kID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5tYXRjaChyZVNwYWNlQXRFbmRPZkxpbmUpID09PSBudWxsKSB7XG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGF0TGluZUVuZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhlIHBvdGVudGlhbCB0aXRsZSB3ZSBmb3VuZCBpcyBub3QgYXQgdGhlIGxpbmUgZW5kLFxuICAgICAgICAgICAgLy8gYnV0IGl0IGNvdWxkIHN0aWxsIGJlIGEgbGVnYWwgbGluayByZWZlcmVuY2UgaWYgd2VcbiAgICAgICAgICAgIC8vIGRpc2NhcmQgdGhlIHRpdGxlXG4gICAgICAgICAgICB0aXRsZSA9ICcnO1xuICAgICAgICAgICAgLy8gcmV3aW5kIGJlZm9yZSBzcGFjZXNcbiAgICAgICAgICAgIHRoaXMucG9zID0gYmVmb3JldGl0bGU7XG4gICAgICAgICAgICAvLyBhbmQgaW5zdGVhZCBjaGVjayBpZiB0aGUgbGluayBVUkwgaXMgYXQgdGhlIGxpbmUgZW5kXG4gICAgICAgICAgICBhdExpbmVFbmQgPSB0aGlzLm1hdGNoKHJlU3BhY2VBdEVuZE9mTGluZSkgIT09IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWF0TGluZUVuZCkge1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgbm9ybWxhYmVsID0gbm9ybWFsaXplUmVmZXJlbmNlKHJhd2xhYmVsKTtcbiAgICBpZiAobm9ybWxhYmVsID09PSAnJykge1xuICAgICAgICAvLyBsYWJlbCBtdXN0IGNvbnRhaW4gbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoIXJlZm1hcFtub3JtbGFiZWxdKSB7XG4gICAgICAgIHJlZm1hcFtub3JtbGFiZWxdID0geyBkZXN0aW5hdGlvbjogZGVzdCwgdGl0bGU6IHRpdGxlIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvcyAtIHN0YXJ0cG9zO1xufTtcblxuLy8gUGFyc2UgdGhlIG5leHQgaW5saW5lIGVsZW1lbnQgaW4gc3ViamVjdCwgYWR2YW5jaW5nIHN1YmplY3QgcG9zaXRpb24uXG4vLyBPbiBzdWNjZXNzLCBhZGQgdGhlIHJlc3VsdCB0byBibG9jaydzIGNoaWxkcmVuIGFuZCByZXR1cm4gdHJ1ZS5cbi8vIE9uIGZhaWx1cmUsIHJldHVybiBmYWxzZS5cbnZhciBwYXJzZUlubGluZSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHJlcyA9IGZhbHNlO1xuICAgIHZhciBjID0gdGhpcy5wZWVrKCk7XG4gICAgaWYgKGMgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3dpdGNoKGMpIHtcbiAgICBjYXNlIENfTkVXTElORTpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZU5ld2xpbmUoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQkFDS1NMQVNIOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQmFja3NsYXNoKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0JBQ0tUSUNLOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlQmFja3RpY2tzKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0FTVEVSSVNLOlxuICAgIGNhc2UgQ19VTkRFUlNDT1JFOlxuICAgICAgICByZXMgPSB0aGlzLmhhbmRsZURlbGltKGMsIGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX1NJTkdMRVFVT1RFOlxuICAgIGNhc2UgQ19ET1VCTEVRVU9URTpcbiAgICAgICAgcmVzID0gdGhpcy5vcHRpb25zLnNtYXJ0ICYmIHRoaXMuaGFuZGxlRGVsaW0oYywgYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfT1BFTl9CUkFDS0VUOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlT3BlbkJyYWNrZXQoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQkFORzpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUJhbmcoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQ0xPU0VfQlJBQ0tFVDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUNsb3NlQnJhY2tldChibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19MRVNTVEhBTjpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUF1dG9saW5rKGJsb2NrKSB8fCB0aGlzLnBhcnNlSHRtbFRhZyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19BTVBFUlNBTkQ6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VFbnRpdHkoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlU3RyaW5nKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghcmVzKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoZnJvbUNvZGVQb2ludChjKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gUGFyc2Ugc3RyaW5nIGNvbnRlbnQgaW4gYmxvY2sgaW50byBpbmxpbmUgY2hpbGRyZW4sXG4vLyB1c2luZyByZWZtYXAgdG8gcmVzb2x2ZSByZWZlcmVuY2VzLlxudmFyIHBhcnNlSW5saW5lcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdGhpcy5zdWJqZWN0ID0gYmxvY2suX3N0cmluZ19jb250ZW50LnRyaW0oKTtcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdGhpcy5kZWxpbWl0ZXJzID0gbnVsbDtcbiAgICB3aGlsZSAodGhpcy5wYXJzZUlubGluZShibG9jaykpIHtcbiAgICB9XG4gICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gbnVsbDsgLy8gYWxsb3cgcmF3IHN0cmluZyB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZFxuICAgIHRoaXMucHJvY2Vzc0VtcGhhc2lzKG51bGwpO1xufTtcblxuLy8gVGhlIElubGluZVBhcnNlciBvYmplY3QuXG5mdW5jdGlvbiBJbmxpbmVQYXJzZXIob3B0aW9ucyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgIGRlbGltaXRlcnM6IG51bGwsICAvLyB1c2VkIGJ5IGhhbmRsZURlbGltIG1ldGhvZFxuICAgICAgICBwb3M6IDAsXG4gICAgICAgIHJlZm1hcDoge30sXG4gICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgcGVlazogcGVlayxcbiAgICAgICAgc3BubDogc3BubCxcbiAgICAgICAgcGFyc2VCYWNrdGlja3M6IHBhcnNlQmFja3RpY2tzLFxuICAgICAgICBwYXJzZUJhY2tzbGFzaDogcGFyc2VCYWNrc2xhc2gsXG4gICAgICAgIHBhcnNlQXV0b2xpbms6IHBhcnNlQXV0b2xpbmssXG4gICAgICAgIHBhcnNlSHRtbFRhZzogcGFyc2VIdG1sVGFnLFxuICAgICAgICBzY2FuRGVsaW1zOiBzY2FuRGVsaW1zLFxuICAgICAgICBoYW5kbGVEZWxpbTogaGFuZGxlRGVsaW0sXG4gICAgICAgIHBhcnNlTGlua1RpdGxlOiBwYXJzZUxpbmtUaXRsZSxcbiAgICAgICAgcGFyc2VMaW5rRGVzdGluYXRpb246IHBhcnNlTGlua0Rlc3RpbmF0aW9uLFxuICAgICAgICBwYXJzZUxpbmtMYWJlbDogcGFyc2VMaW5rTGFiZWwsXG4gICAgICAgIHBhcnNlT3BlbkJyYWNrZXQ6IHBhcnNlT3BlbkJyYWNrZXQsXG4gICAgICAgIHBhcnNlQ2xvc2VCcmFja2V0OiBwYXJzZUNsb3NlQnJhY2tldCxcbiAgICAgICAgcGFyc2VCYW5nOiBwYXJzZUJhbmcsXG4gICAgICAgIHBhcnNlRW50aXR5OiBwYXJzZUVudGl0eSxcbiAgICAgICAgcGFyc2VTdHJpbmc6IHBhcnNlU3RyaW5nLFxuICAgICAgICBwYXJzZU5ld2xpbmU6IHBhcnNlTmV3bGluZSxcbiAgICAgICAgcGFyc2VSZWZlcmVuY2U6IHBhcnNlUmVmZXJlbmNlLFxuICAgICAgICBwYXJzZUlubGluZTogcGFyc2VJbmxpbmUsXG4gICAgICAgIHByb2Nlc3NFbXBoYXNpczogcHJvY2Vzc0VtcGhhc2lzLFxuICAgICAgICByZW1vdmVEZWxpbWl0ZXI6IHJlbW92ZURlbGltaXRlcixcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgcGFyc2U6IHBhcnNlSW5saW5lc1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5saW5lUGFyc2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvaW5saW5lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZGVyaXZlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5mcm9tQ29kZVBvaW50XG4vKiEgaHR0cDovL210aHMuYmUvZnJvbWNvZGVwb2ludCB2MC4yLjEgYnkgQG1hdGhpYXMgKi9cbmlmIChTdHJpbmcuZnJvbUNvZGVQb2ludCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludChfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSYW5nZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG59IGVsc2Uge1xuXG4gIHZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgZnJvbUNvZGVQb2ludCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwO1xuICAgICAgdmFyIGNvZGVVbml0cyA9IFtdO1xuICAgICAgdmFyIGhpZ2hTdXJyb2dhdGU7XG4gICAgICB2YXIgbG93U3Vycm9nYXRlO1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICAgICAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgICAgICAgICAgIGNvZGVQb2ludCA+IDB4MTBGRkZGIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICAgICAgICAgICAgZmxvb3IoY29kZVBvaW50KSAhPT0gY29kZVBvaW50IC8vIG5vdCBhbiBpbnRlZ2VyXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhGRkZGKSB7IC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludCk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gQXN0cmFsIGNvZGUgcG9pbnQ7IHNwbGl0IGluIHN1cnJvZ2F0ZSBoYWx2ZXNcbiAgICAgICAgICAgICAgLy8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4RDgwMDtcbiAgICAgICAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4REMwMDtcbiAgICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiBNQVhfU0laRSkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cyk7XG4gICAgICAgICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzID0gZnJvbUNvZGVQb2ludDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2Zyb20tY29kZS1wb2ludC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLyogVGhlIGJ1bGsgb2YgdGhpcyBjb2RlIGRlcml2ZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZG1vc2Nyb3AvZm9sZC1jYXNlXG5CdXQgaW4gYWRkaXRpb24gdG8gY2FzZS1mb2xkaW5nLCB3ZSBhbHNvIG5vcm1hbGl6ZSB3aGl0ZXNwYWNlLlxuXG5mb2xkLWNhc2UgaXMgQ29weXJpZ2h0IE1hdGhpYXMgQnluZW5zIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG5OT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG5MSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG5PRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbldJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLyplc2xpbnQtZGlzYWJsZSAga2V5LXNwYWNpbmcsIGNvbW1hLXNwYWNpbmcgKi9cblxudmFyIHJlZ2V4ID0gL1sgXFx0XFxyXFxuXSt8W0EtWlxceEI1XFx4QzAtXFx4RDZcXHhEOC1cXHhERlxcdTAxMDBcXHUwMTAyXFx1MDEwNFxcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMTBFXFx1MDExMFxcdTAxMTJcXHUwMTE0XFx1MDExNlxcdTAxMThcXHUwMTFBXFx1MDExQ1xcdTAxMUVcXHUwMTIwXFx1MDEyMlxcdTAxMjRcXHUwMTI2XFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEyRVxcdTAxMzBcXHUwMTMyXFx1MDEzNFxcdTAxMzZcXHUwMTM5XFx1MDEzQlxcdTAxM0RcXHUwMTNGXFx1MDE0MVxcdTAxNDNcXHUwMTQ1XFx1MDE0N1xcdTAxNDlcXHUwMTRBXFx1MDE0Q1xcdTAxNEVcXHUwMTUwXFx1MDE1MlxcdTAxNTRcXHUwMTU2XFx1MDE1OFxcdTAxNUFcXHUwMTVDXFx1MDE1RVxcdTAxNjBcXHUwMTYyXFx1MDE2NFxcdTAxNjZcXHUwMTY4XFx1MDE2QVxcdTAxNkNcXHUwMTZFXFx1MDE3MFxcdTAxNzJcXHUwMTc0XFx1MDE3NlxcdTAxNzhcXHUwMTc5XFx1MDE3QlxcdTAxN0RcXHUwMTdGXFx1MDE4MVxcdTAxODJcXHUwMTg0XFx1MDE4NlxcdTAxODdcXHUwMTg5LVxcdTAxOEJcXHUwMThFLVxcdTAxOTFcXHUwMTkzXFx1MDE5NFxcdTAxOTYtXFx1MDE5OFxcdTAxOUNcXHUwMTlEXFx1MDE5RlxcdTAxQTBcXHUwMUEyXFx1MDFBNFxcdTAxQTZcXHUwMUE3XFx1MDFBOVxcdTAxQUNcXHUwMUFFXFx1MDFBRlxcdTAxQjEtXFx1MDFCM1xcdTAxQjVcXHUwMUI3XFx1MDFCOFxcdTAxQkNcXHUwMUM0XFx1MDFDNVxcdTAxQzdcXHUwMUM4XFx1MDFDQVxcdTAxQ0JcXHUwMUNEXFx1MDFDRlxcdTAxRDFcXHUwMUQzXFx1MDFENVxcdTAxRDdcXHUwMUQ5XFx1MDFEQlxcdTAxREVcXHUwMUUwXFx1MDFFMlxcdTAxRTRcXHUwMUU2XFx1MDFFOFxcdTAxRUFcXHUwMUVDXFx1MDFFRVxcdTAxRjAtXFx1MDFGMlxcdTAxRjRcXHUwMUY2LVxcdTAxRjhcXHUwMUZBXFx1MDFGQ1xcdTAxRkVcXHUwMjAwXFx1MDIwMlxcdTAyMDRcXHUwMjA2XFx1MDIwOFxcdTAyMEFcXHUwMjBDXFx1MDIwRVxcdTAyMTBcXHUwMjEyXFx1MDIxNFxcdTAyMTZcXHUwMjE4XFx1MDIxQVxcdTAyMUNcXHUwMjFFXFx1MDIyMFxcdTAyMjJcXHUwMjI0XFx1MDIyNlxcdTAyMjhcXHUwMjJBXFx1MDIyQ1xcdTAyMkVcXHUwMjMwXFx1MDIzMlxcdTAyM0FcXHUwMjNCXFx1MDIzRFxcdTAyM0VcXHUwMjQxXFx1MDI0My1cXHUwMjQ2XFx1MDI0OFxcdTAyNEFcXHUwMjRDXFx1MDI0RVxcdTAzNDVcXHUwMzcwXFx1MDM3MlxcdTAzNzZcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzQUJcXHUwM0IwXFx1MDNDMlxcdTAzQ0YtXFx1MDNEMVxcdTAzRDVcXHUwM0Q2XFx1MDNEOFxcdTAzREFcXHUwM0RDXFx1MDNERVxcdTAzRTBcXHUwM0UyXFx1MDNFNFxcdTAzRTZcXHUwM0U4XFx1MDNFQVxcdTAzRUNcXHUwM0VFXFx1MDNGMFxcdTAzRjFcXHUwM0Y0XFx1MDNGNVxcdTAzRjdcXHUwM0Y5XFx1MDNGQVxcdTAzRkQtXFx1MDQyRlxcdTA0NjBcXHUwNDYyXFx1MDQ2NFxcdTA0NjZcXHUwNDY4XFx1MDQ2QVxcdTA0NkNcXHUwNDZFXFx1MDQ3MFxcdTA0NzJcXHUwNDc0XFx1MDQ3NlxcdTA0NzhcXHUwNDdBXFx1MDQ3Q1xcdTA0N0VcXHUwNDgwXFx1MDQ4QVxcdTA0OENcXHUwNDhFXFx1MDQ5MFxcdTA0OTJcXHUwNDk0XFx1MDQ5NlxcdTA0OThcXHUwNDlBXFx1MDQ5Q1xcdTA0OUVcXHUwNEEwXFx1MDRBMlxcdTA0QTRcXHUwNEE2XFx1MDRBOFxcdTA0QUFcXHUwNEFDXFx1MDRBRVxcdTA0QjBcXHUwNEIyXFx1MDRCNFxcdTA0QjZcXHUwNEI4XFx1MDRCQVxcdTA0QkNcXHUwNEJFXFx1MDRDMFxcdTA0QzFcXHUwNEMzXFx1MDRDNVxcdTA0QzdcXHUwNEM5XFx1MDRDQlxcdTA0Q0RcXHUwNEQwXFx1MDREMlxcdTA0RDRcXHUwNEQ2XFx1MDREOFxcdTA0REFcXHUwNERDXFx1MDRERVxcdTA0RTBcXHUwNEUyXFx1MDRFNFxcdTA0RTZcXHUwNEU4XFx1MDRFQVxcdTA0RUNcXHUwNEVFXFx1MDRGMFxcdTA0RjJcXHUwNEY0XFx1MDRGNlxcdTA0RjhcXHUwNEZBXFx1MDRGQ1xcdTA0RkVcXHUwNTAwXFx1MDUwMlxcdTA1MDRcXHUwNTA2XFx1MDUwOFxcdTA1MEFcXHUwNTBDXFx1MDUwRVxcdTA1MTBcXHUwNTEyXFx1MDUxNFxcdTA1MTZcXHUwNTE4XFx1MDUxQVxcdTA1MUNcXHUwNTFFXFx1MDUyMFxcdTA1MjJcXHUwNTI0XFx1MDUyNlxcdTA1MjhcXHUwNTJBXFx1MDUyQ1xcdTA1MkVcXHUwNTMxLVxcdTA1NTZcXHUwNTg3XFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxRTAwXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MUUwOFxcdTFFMEFcXHUxRTBDXFx1MUUwRVxcdTFFMTBcXHUxRTEyXFx1MUUxNFxcdTFFMTZcXHUxRTE4XFx1MUUxQVxcdTFFMUNcXHUxRTFFXFx1MUUyMFxcdTFFMjJcXHUxRTI0XFx1MUUyNlxcdTFFMjhcXHUxRTJBXFx1MUUyQ1xcdTFFMkVcXHUxRTMwXFx1MUUzMlxcdTFFMzRcXHUxRTM2XFx1MUUzOFxcdTFFM0FcXHUxRTNDXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MUU0NFxcdTFFNDZcXHUxRTQ4XFx1MUU0QVxcdTFFNENcXHUxRTRFXFx1MUU1MFxcdTFFNTJcXHUxRTU0XFx1MUU1NlxcdTFFNThcXHUxRTVBXFx1MUU1Q1xcdTFFNUVcXHUxRTYwXFx1MUU2MlxcdTFFNjRcXHUxRTY2XFx1MUU2OFxcdTFFNkFcXHUxRTZDXFx1MUU2RVxcdTFFNzBcXHUxRTcyXFx1MUU3NFxcdTFFNzZcXHUxRTc4XFx1MUU3QVxcdTFFN0NcXHUxRTdFXFx1MUU4MFxcdTFFODJcXHUxRTg0XFx1MUU4NlxcdTFFODhcXHUxRThBXFx1MUU4Q1xcdTFFOEVcXHUxRTkwXFx1MUU5MlxcdTFFOTRcXHUxRTk2LVxcdTFFOUJcXHUxRTlFXFx1MUVBMFxcdTFFQTJcXHUxRUE0XFx1MUVBNlxcdTFFQThcXHUxRUFBXFx1MUVBQ1xcdTFFQUVcXHUxRUIwXFx1MUVCMlxcdTFFQjRcXHUxRUI2XFx1MUVCOFxcdTFFQkFcXHUxRUJDXFx1MUVCRVxcdTFFQzBcXHUxRUMyXFx1MUVDNFxcdTFFQzZcXHUxRUM4XFx1MUVDQVxcdTFFQ0NcXHUxRUNFXFx1MUVEMFxcdTFFRDJcXHUxRUQ0XFx1MUVENlxcdTFFRDhcXHUxRURBXFx1MUVEQ1xcdTFFREVcXHUxRUUwXFx1MUVFMlxcdTFFRTRcXHUxRUU2XFx1MUVFOFxcdTFFRUFcXHUxRUVDXFx1MUVFRVxcdTFFRjBcXHUxRUYyXFx1MUVGNFxcdTFFRjZcXHUxRUY4XFx1MUVGQVxcdTFFRkNcXHUxRUZFXFx1MUYwOC1cXHUxRjBGXFx1MUYxOC1cXHUxRjFEXFx1MUYyOC1cXHUxRjJGXFx1MUYzOC1cXHUxRjNGXFx1MUY0OC1cXHUxRjREXFx1MUY1MFxcdTFGNTJcXHUxRjU0XFx1MUY1NlxcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUZcXHUxRjY4LVxcdTFGNkZcXHUxRjgwLVxcdTFGQUZcXHUxRkIyLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMlxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUyLVxcdTFGRTRcXHUxRkU2LVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMTI2XFx1MjEyQVxcdTIxMkJcXHUyMTMyXFx1MjE2MC1cXHUyMTZGXFx1MjE4M1xcdTI0QjYtXFx1MjRDRlxcdTJDMDAtXFx1MkMyRVxcdTJDNjBcXHUyQzYyLVxcdTJDNjRcXHUyQzY3XFx1MkM2OVxcdTJDNkJcXHUyQzZELVxcdTJDNzBcXHUyQzcyXFx1MkM3NVxcdTJDN0UtXFx1MkM4MFxcdTJDODJcXHUyQzg0XFx1MkM4NlxcdTJDODhcXHUyQzhBXFx1MkM4Q1xcdTJDOEVcXHUyQzkwXFx1MkM5MlxcdTJDOTRcXHUyQzk2XFx1MkM5OFxcdTJDOUFcXHUyQzlDXFx1MkM5RVxcdTJDQTBcXHUyQ0EyXFx1MkNBNFxcdTJDQTZcXHUyQ0E4XFx1MkNBQVxcdTJDQUNcXHUyQ0FFXFx1MkNCMFxcdTJDQjJcXHUyQ0I0XFx1MkNCNlxcdTJDQjhcXHUyQ0JBXFx1MkNCQ1xcdTJDQkVcXHUyQ0MwXFx1MkNDMlxcdTJDQzRcXHUyQ0M2XFx1MkNDOFxcdTJDQ0FcXHUyQ0NDXFx1MkNDRVxcdTJDRDBcXHUyQ0QyXFx1MkNENFxcdTJDRDZcXHUyQ0Q4XFx1MkNEQVxcdTJDRENcXHUyQ0RFXFx1MkNFMFxcdTJDRTJcXHUyQ0VCXFx1MkNFRFxcdTJDRjJcXHVBNjQwXFx1QTY0MlxcdUE2NDRcXHVBNjQ2XFx1QTY0OFxcdUE2NEFcXHVBNjRDXFx1QTY0RVxcdUE2NTBcXHVBNjUyXFx1QTY1NFxcdUE2NTZcXHVBNjU4XFx1QTY1QVxcdUE2NUNcXHVBNjVFXFx1QTY2MFxcdUE2NjJcXHVBNjY0XFx1QTY2NlxcdUE2NjhcXHVBNjZBXFx1QTY2Q1xcdUE2ODBcXHVBNjgyXFx1QTY4NFxcdUE2ODZcXHVBNjg4XFx1QTY4QVxcdUE2OENcXHVBNjhFXFx1QTY5MFxcdUE2OTJcXHVBNjk0XFx1QTY5NlxcdUE2OThcXHVBNjlBXFx1QTcyMlxcdUE3MjRcXHVBNzI2XFx1QTcyOFxcdUE3MkFcXHVBNzJDXFx1QTcyRVxcdUE3MzJcXHVBNzM0XFx1QTczNlxcdUE3MzhcXHVBNzNBXFx1QTczQ1xcdUE3M0VcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBNzQ2XFx1QTc0OFxcdUE3NEFcXHVBNzRDXFx1QTc0RVxcdUE3NTBcXHVBNzUyXFx1QTc1NFxcdUE3NTZcXHVBNzU4XFx1QTc1QVxcdUE3NUNcXHVBNzVFXFx1QTc2MFxcdUE3NjJcXHVBNzY0XFx1QTc2NlxcdUE3NjhcXHVBNzZBXFx1QTc2Q1xcdUE3NkVcXHVBNzc5XFx1QTc3QlxcdUE3N0RcXHVBNzdFXFx1QTc4MFxcdUE3ODJcXHVBNzg0XFx1QTc4NlxcdUE3OEJcXHVBNzhEXFx1QTc5MFxcdUE3OTJcXHVBNzk2XFx1QTc5OFxcdUE3OUFcXHVBNzlDXFx1QTc5RVxcdUE3QTBcXHVBN0EyXFx1QTdBNFxcdUE3QTZcXHVBN0E4XFx1QTdBQS1cXHVBN0FEXFx1QTdCMFxcdUE3QjFcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGRjIxLVxcdUZGM0FdfFxcdUQ4MDFbXFx1REMwMC1cXHVEQzI3XXxcXHVEODA2W1xcdURDQTAtXFx1RENCRl0vZztcblxudmFyIG1hcCA9IHsnQSc6J2EnLCdCJzonYicsJ0MnOidjJywnRCc6J2QnLCdFJzonZScsJ0YnOidmJywnRyc6J2cnLCdIJzonaCcsJ0knOidpJywnSic6J2onLCdLJzonaycsJ0wnOidsJywnTSc6J20nLCdOJzonbicsJ08nOidvJywnUCc6J3AnLCdRJzoncScsJ1InOidyJywnUyc6J3MnLCdUJzondCcsJ1UnOid1JywnVic6J3YnLCdXJzondycsJ1gnOid4JywnWSc6J3knLCdaJzoneicsJ1xceEI1JzonXFx1MDNCQycsJ1xceEMwJzonXFx4RTAnLCdcXHhDMSc6J1xceEUxJywnXFx4QzInOidcXHhFMicsJ1xceEMzJzonXFx4RTMnLCdcXHhDNCc6J1xceEU0JywnXFx4QzUnOidcXHhFNScsJ1xceEM2JzonXFx4RTYnLCdcXHhDNyc6J1xceEU3JywnXFx4QzgnOidcXHhFOCcsJ1xceEM5JzonXFx4RTknLCdcXHhDQSc6J1xceEVBJywnXFx4Q0InOidcXHhFQicsJ1xceENDJzonXFx4RUMnLCdcXHhDRCc6J1xceEVEJywnXFx4Q0UnOidcXHhFRScsJ1xceENGJzonXFx4RUYnLCdcXHhEMCc6J1xceEYwJywnXFx4RDEnOidcXHhGMScsJ1xceEQyJzonXFx4RjInLCdcXHhEMyc6J1xceEYzJywnXFx4RDQnOidcXHhGNCcsJ1xceEQ1JzonXFx4RjUnLCdcXHhENic6J1xceEY2JywnXFx4RDgnOidcXHhGOCcsJ1xceEQ5JzonXFx4RjknLCdcXHhEQSc6J1xceEZBJywnXFx4REInOidcXHhGQicsJ1xceERDJzonXFx4RkMnLCdcXHhERCc6J1xceEZEJywnXFx4REUnOidcXHhGRScsJ1xcdTAxMDAnOidcXHUwMTAxJywnXFx1MDEwMic6J1xcdTAxMDMnLCdcXHUwMTA0JzonXFx1MDEwNScsJ1xcdTAxMDYnOidcXHUwMTA3JywnXFx1MDEwOCc6J1xcdTAxMDknLCdcXHUwMTBBJzonXFx1MDEwQicsJ1xcdTAxMEMnOidcXHUwMTBEJywnXFx1MDEwRSc6J1xcdTAxMEYnLCdcXHUwMTEwJzonXFx1MDExMScsJ1xcdTAxMTInOidcXHUwMTEzJywnXFx1MDExNCc6J1xcdTAxMTUnLCdcXHUwMTE2JzonXFx1MDExNycsJ1xcdTAxMTgnOidcXHUwMTE5JywnXFx1MDExQSc6J1xcdTAxMUInLCdcXHUwMTFDJzonXFx1MDExRCcsJ1xcdTAxMUUnOidcXHUwMTFGJywnXFx1MDEyMCc6J1xcdTAxMjEnLCdcXHUwMTIyJzonXFx1MDEyMycsJ1xcdTAxMjQnOidcXHUwMTI1JywnXFx1MDEyNic6J1xcdTAxMjcnLCdcXHUwMTI4JzonXFx1MDEyOScsJ1xcdTAxMkEnOidcXHUwMTJCJywnXFx1MDEyQyc6J1xcdTAxMkQnLCdcXHUwMTJFJzonXFx1MDEyRicsJ1xcdTAxMzInOidcXHUwMTMzJywnXFx1MDEzNCc6J1xcdTAxMzUnLCdcXHUwMTM2JzonXFx1MDEzNycsJ1xcdTAxMzknOidcXHUwMTNBJywnXFx1MDEzQic6J1xcdTAxM0MnLCdcXHUwMTNEJzonXFx1MDEzRScsJ1xcdTAxM0YnOidcXHUwMTQwJywnXFx1MDE0MSc6J1xcdTAxNDInLCdcXHUwMTQzJzonXFx1MDE0NCcsJ1xcdTAxNDUnOidcXHUwMTQ2JywnXFx1MDE0Nyc6J1xcdTAxNDgnLCdcXHUwMTRBJzonXFx1MDE0QicsJ1xcdTAxNEMnOidcXHUwMTREJywnXFx1MDE0RSc6J1xcdTAxNEYnLCdcXHUwMTUwJzonXFx1MDE1MScsJ1xcdTAxNTInOidcXHUwMTUzJywnXFx1MDE1NCc6J1xcdTAxNTUnLCdcXHUwMTU2JzonXFx1MDE1NycsJ1xcdTAxNTgnOidcXHUwMTU5JywnXFx1MDE1QSc6J1xcdTAxNUInLCdcXHUwMTVDJzonXFx1MDE1RCcsJ1xcdTAxNUUnOidcXHUwMTVGJywnXFx1MDE2MCc6J1xcdTAxNjEnLCdcXHUwMTYyJzonXFx1MDE2MycsJ1xcdTAxNjQnOidcXHUwMTY1JywnXFx1MDE2Nic6J1xcdTAxNjcnLCdcXHUwMTY4JzonXFx1MDE2OScsJ1xcdTAxNkEnOidcXHUwMTZCJywnXFx1MDE2Qyc6J1xcdTAxNkQnLCdcXHUwMTZFJzonXFx1MDE2RicsJ1xcdTAxNzAnOidcXHUwMTcxJywnXFx1MDE3Mic6J1xcdTAxNzMnLCdcXHUwMTc0JzonXFx1MDE3NScsJ1xcdTAxNzYnOidcXHUwMTc3JywnXFx1MDE3OCc6J1xceEZGJywnXFx1MDE3OSc6J1xcdTAxN0EnLCdcXHUwMTdCJzonXFx1MDE3QycsJ1xcdTAxN0QnOidcXHUwMTdFJywnXFx1MDE3Ric6J3MnLCdcXHUwMTgxJzonXFx1MDI1MycsJ1xcdTAxODInOidcXHUwMTgzJywnXFx1MDE4NCc6J1xcdTAxODUnLCdcXHUwMTg2JzonXFx1MDI1NCcsJ1xcdTAxODcnOidcXHUwMTg4JywnXFx1MDE4OSc6J1xcdTAyNTYnLCdcXHUwMThBJzonXFx1MDI1NycsJ1xcdTAxOEInOidcXHUwMThDJywnXFx1MDE4RSc6J1xcdTAxREQnLCdcXHUwMThGJzonXFx1MDI1OScsJ1xcdTAxOTAnOidcXHUwMjVCJywnXFx1MDE5MSc6J1xcdTAxOTInLCdcXHUwMTkzJzonXFx1MDI2MCcsJ1xcdTAxOTQnOidcXHUwMjYzJywnXFx1MDE5Nic6J1xcdTAyNjknLCdcXHUwMTk3JzonXFx1MDI2OCcsJ1xcdTAxOTgnOidcXHUwMTk5JywnXFx1MDE5Qyc6J1xcdTAyNkYnLCdcXHUwMTlEJzonXFx1MDI3MicsJ1xcdTAxOUYnOidcXHUwMjc1JywnXFx1MDFBMCc6J1xcdTAxQTEnLCdcXHUwMUEyJzonXFx1MDFBMycsJ1xcdTAxQTQnOidcXHUwMUE1JywnXFx1MDFBNic6J1xcdTAyODAnLCdcXHUwMUE3JzonXFx1MDFBOCcsJ1xcdTAxQTknOidcXHUwMjgzJywnXFx1MDFBQyc6J1xcdTAxQUQnLCdcXHUwMUFFJzonXFx1MDI4OCcsJ1xcdTAxQUYnOidcXHUwMUIwJywnXFx1MDFCMSc6J1xcdTAyOEEnLCdcXHUwMUIyJzonXFx1MDI4QicsJ1xcdTAxQjMnOidcXHUwMUI0JywnXFx1MDFCNSc6J1xcdTAxQjYnLCdcXHUwMUI3JzonXFx1MDI5MicsJ1xcdTAxQjgnOidcXHUwMUI5JywnXFx1MDFCQyc6J1xcdTAxQkQnLCdcXHUwMUM0JzonXFx1MDFDNicsJ1xcdTAxQzUnOidcXHUwMUM2JywnXFx1MDFDNyc6J1xcdTAxQzknLCdcXHUwMUM4JzonXFx1MDFDOScsJ1xcdTAxQ0EnOidcXHUwMUNDJywnXFx1MDFDQic6J1xcdTAxQ0MnLCdcXHUwMUNEJzonXFx1MDFDRScsJ1xcdTAxQ0YnOidcXHUwMUQwJywnXFx1MDFEMSc6J1xcdTAxRDInLCdcXHUwMUQzJzonXFx1MDFENCcsJ1xcdTAxRDUnOidcXHUwMUQ2JywnXFx1MDFENyc6J1xcdTAxRDgnLCdcXHUwMUQ5JzonXFx1MDFEQScsJ1xcdTAxREInOidcXHUwMURDJywnXFx1MDFERSc6J1xcdTAxREYnLCdcXHUwMUUwJzonXFx1MDFFMScsJ1xcdTAxRTInOidcXHUwMUUzJywnXFx1MDFFNCc6J1xcdTAxRTUnLCdcXHUwMUU2JzonXFx1MDFFNycsJ1xcdTAxRTgnOidcXHUwMUU5JywnXFx1MDFFQSc6J1xcdTAxRUInLCdcXHUwMUVDJzonXFx1MDFFRCcsJ1xcdTAxRUUnOidcXHUwMUVGJywnXFx1MDFGMSc6J1xcdTAxRjMnLCdcXHUwMUYyJzonXFx1MDFGMycsJ1xcdTAxRjQnOidcXHUwMUY1JywnXFx1MDFGNic6J1xcdTAxOTUnLCdcXHUwMUY3JzonXFx1MDFCRicsJ1xcdTAxRjgnOidcXHUwMUY5JywnXFx1MDFGQSc6J1xcdTAxRkInLCdcXHUwMUZDJzonXFx1MDFGRCcsJ1xcdTAxRkUnOidcXHUwMUZGJywnXFx1MDIwMCc6J1xcdTAyMDEnLCdcXHUwMjAyJzonXFx1MDIwMycsJ1xcdTAyMDQnOidcXHUwMjA1JywnXFx1MDIwNic6J1xcdTAyMDcnLCdcXHUwMjA4JzonXFx1MDIwOScsJ1xcdTAyMEEnOidcXHUwMjBCJywnXFx1MDIwQyc6J1xcdTAyMEQnLCdcXHUwMjBFJzonXFx1MDIwRicsJ1xcdTAyMTAnOidcXHUwMjExJywnXFx1MDIxMic6J1xcdTAyMTMnLCdcXHUwMjE0JzonXFx1MDIxNScsJ1xcdTAyMTYnOidcXHUwMjE3JywnXFx1MDIxOCc6J1xcdTAyMTknLCdcXHUwMjFBJzonXFx1MDIxQicsJ1xcdTAyMUMnOidcXHUwMjFEJywnXFx1MDIxRSc6J1xcdTAyMUYnLCdcXHUwMjIwJzonXFx1MDE5RScsJ1xcdTAyMjInOidcXHUwMjIzJywnXFx1MDIyNCc6J1xcdTAyMjUnLCdcXHUwMjI2JzonXFx1MDIyNycsJ1xcdTAyMjgnOidcXHUwMjI5JywnXFx1MDIyQSc6J1xcdTAyMkInLCdcXHUwMjJDJzonXFx1MDIyRCcsJ1xcdTAyMkUnOidcXHUwMjJGJywnXFx1MDIzMCc6J1xcdTAyMzEnLCdcXHUwMjMyJzonXFx1MDIzMycsJ1xcdTAyM0EnOidcXHUyQzY1JywnXFx1MDIzQic6J1xcdTAyM0MnLCdcXHUwMjNEJzonXFx1MDE5QScsJ1xcdTAyM0UnOidcXHUyQzY2JywnXFx1MDI0MSc6J1xcdTAyNDInLCdcXHUwMjQzJzonXFx1MDE4MCcsJ1xcdTAyNDQnOidcXHUwMjg5JywnXFx1MDI0NSc6J1xcdTAyOEMnLCdcXHUwMjQ2JzonXFx1MDI0NycsJ1xcdTAyNDgnOidcXHUwMjQ5JywnXFx1MDI0QSc6J1xcdTAyNEInLCdcXHUwMjRDJzonXFx1MDI0RCcsJ1xcdTAyNEUnOidcXHUwMjRGJywnXFx1MDM0NSc6J1xcdTAzQjknLCdcXHUwMzcwJzonXFx1MDM3MScsJ1xcdTAzNzInOidcXHUwMzczJywnXFx1MDM3Nic6J1xcdTAzNzcnLCdcXHUwMzdGJzonXFx1MDNGMycsJ1xcdTAzODYnOidcXHUwM0FDJywnXFx1MDM4OCc6J1xcdTAzQUQnLCdcXHUwMzg5JzonXFx1MDNBRScsJ1xcdTAzOEEnOidcXHUwM0FGJywnXFx1MDM4Qyc6J1xcdTAzQ0MnLCdcXHUwMzhFJzonXFx1MDNDRCcsJ1xcdTAzOEYnOidcXHUwM0NFJywnXFx1MDM5MSc6J1xcdTAzQjEnLCdcXHUwMzkyJzonXFx1MDNCMicsJ1xcdTAzOTMnOidcXHUwM0IzJywnXFx1MDM5NCc6J1xcdTAzQjQnLCdcXHUwMzk1JzonXFx1MDNCNScsJ1xcdTAzOTYnOidcXHUwM0I2JywnXFx1MDM5Nyc6J1xcdTAzQjcnLCdcXHUwMzk4JzonXFx1MDNCOCcsJ1xcdTAzOTknOidcXHUwM0I5JywnXFx1MDM5QSc6J1xcdTAzQkEnLCdcXHUwMzlCJzonXFx1MDNCQicsJ1xcdTAzOUMnOidcXHUwM0JDJywnXFx1MDM5RCc6J1xcdTAzQkQnLCdcXHUwMzlFJzonXFx1MDNCRScsJ1xcdTAzOUYnOidcXHUwM0JGJywnXFx1MDNBMCc6J1xcdTAzQzAnLCdcXHUwM0ExJzonXFx1MDNDMScsJ1xcdTAzQTMnOidcXHUwM0MzJywnXFx1MDNBNCc6J1xcdTAzQzQnLCdcXHUwM0E1JzonXFx1MDNDNScsJ1xcdTAzQTYnOidcXHUwM0M2JywnXFx1MDNBNyc6J1xcdTAzQzcnLCdcXHUwM0E4JzonXFx1MDNDOCcsJ1xcdTAzQTknOidcXHUwM0M5JywnXFx1MDNBQSc6J1xcdTAzQ0EnLCdcXHUwM0FCJzonXFx1MDNDQicsJ1xcdTAzQzInOidcXHUwM0MzJywnXFx1MDNDRic6J1xcdTAzRDcnLCdcXHUwM0QwJzonXFx1MDNCMicsJ1xcdTAzRDEnOidcXHUwM0I4JywnXFx1MDNENSc6J1xcdTAzQzYnLCdcXHUwM0Q2JzonXFx1MDNDMCcsJ1xcdTAzRDgnOidcXHUwM0Q5JywnXFx1MDNEQSc6J1xcdTAzREInLCdcXHUwM0RDJzonXFx1MDNERCcsJ1xcdTAzREUnOidcXHUwM0RGJywnXFx1MDNFMCc6J1xcdTAzRTEnLCdcXHUwM0UyJzonXFx1MDNFMycsJ1xcdTAzRTQnOidcXHUwM0U1JywnXFx1MDNFNic6J1xcdTAzRTcnLCdcXHUwM0U4JzonXFx1MDNFOScsJ1xcdTAzRUEnOidcXHUwM0VCJywnXFx1MDNFQyc6J1xcdTAzRUQnLCdcXHUwM0VFJzonXFx1MDNFRicsJ1xcdTAzRjAnOidcXHUwM0JBJywnXFx1MDNGMSc6J1xcdTAzQzEnLCdcXHUwM0Y0JzonXFx1MDNCOCcsJ1xcdTAzRjUnOidcXHUwM0I1JywnXFx1MDNGNyc6J1xcdTAzRjgnLCdcXHUwM0Y5JzonXFx1MDNGMicsJ1xcdTAzRkEnOidcXHUwM0ZCJywnXFx1MDNGRCc6J1xcdTAzN0InLCdcXHUwM0ZFJzonXFx1MDM3QycsJ1xcdTAzRkYnOidcXHUwMzdEJywnXFx1MDQwMCc6J1xcdTA0NTAnLCdcXHUwNDAxJzonXFx1MDQ1MScsJ1xcdTA0MDInOidcXHUwNDUyJywnXFx1MDQwMyc6J1xcdTA0NTMnLCdcXHUwNDA0JzonXFx1MDQ1NCcsJ1xcdTA0MDUnOidcXHUwNDU1JywnXFx1MDQwNic6J1xcdTA0NTYnLCdcXHUwNDA3JzonXFx1MDQ1NycsJ1xcdTA0MDgnOidcXHUwNDU4JywnXFx1MDQwOSc6J1xcdTA0NTknLCdcXHUwNDBBJzonXFx1MDQ1QScsJ1xcdTA0MEInOidcXHUwNDVCJywnXFx1MDQwQyc6J1xcdTA0NUMnLCdcXHUwNDBEJzonXFx1MDQ1RCcsJ1xcdTA0MEUnOidcXHUwNDVFJywnXFx1MDQwRic6J1xcdTA0NUYnLCdcXHUwNDEwJzonXFx1MDQzMCcsJ1xcdTA0MTEnOidcXHUwNDMxJywnXFx1MDQxMic6J1xcdTA0MzInLCdcXHUwNDEzJzonXFx1MDQzMycsJ1xcdTA0MTQnOidcXHUwNDM0JywnXFx1MDQxNSc6J1xcdTA0MzUnLCdcXHUwNDE2JzonXFx1MDQzNicsJ1xcdTA0MTcnOidcXHUwNDM3JywnXFx1MDQxOCc6J1xcdTA0MzgnLCdcXHUwNDE5JzonXFx1MDQzOScsJ1xcdTA0MUEnOidcXHUwNDNBJywnXFx1MDQxQic6J1xcdTA0M0InLCdcXHUwNDFDJzonXFx1MDQzQycsJ1xcdTA0MUQnOidcXHUwNDNEJywnXFx1MDQxRSc6J1xcdTA0M0UnLCdcXHUwNDFGJzonXFx1MDQzRicsJ1xcdTA0MjAnOidcXHUwNDQwJywnXFx1MDQyMSc6J1xcdTA0NDEnLCdcXHUwNDIyJzonXFx1MDQ0MicsJ1xcdTA0MjMnOidcXHUwNDQzJywnXFx1MDQyNCc6J1xcdTA0NDQnLCdcXHUwNDI1JzonXFx1MDQ0NScsJ1xcdTA0MjYnOidcXHUwNDQ2JywnXFx1MDQyNyc6J1xcdTA0NDcnLCdcXHUwNDI4JzonXFx1MDQ0OCcsJ1xcdTA0MjknOidcXHUwNDQ5JywnXFx1MDQyQSc6J1xcdTA0NEEnLCdcXHUwNDJCJzonXFx1MDQ0QicsJ1xcdTA0MkMnOidcXHUwNDRDJywnXFx1MDQyRCc6J1xcdTA0NEQnLCdcXHUwNDJFJzonXFx1MDQ0RScsJ1xcdTA0MkYnOidcXHUwNDRGJywnXFx1MDQ2MCc6J1xcdTA0NjEnLCdcXHUwNDYyJzonXFx1MDQ2MycsJ1xcdTA0NjQnOidcXHUwNDY1JywnXFx1MDQ2Nic6J1xcdTA0NjcnLCdcXHUwNDY4JzonXFx1MDQ2OScsJ1xcdTA0NkEnOidcXHUwNDZCJywnXFx1MDQ2Qyc6J1xcdTA0NkQnLCdcXHUwNDZFJzonXFx1MDQ2RicsJ1xcdTA0NzAnOidcXHUwNDcxJywnXFx1MDQ3Mic6J1xcdTA0NzMnLCdcXHUwNDc0JzonXFx1MDQ3NScsJ1xcdTA0NzYnOidcXHUwNDc3JywnXFx1MDQ3OCc6J1xcdTA0NzknLCdcXHUwNDdBJzonXFx1MDQ3QicsJ1xcdTA0N0MnOidcXHUwNDdEJywnXFx1MDQ3RSc6J1xcdTA0N0YnLCdcXHUwNDgwJzonXFx1MDQ4MScsJ1xcdTA0OEEnOidcXHUwNDhCJywnXFx1MDQ4Qyc6J1xcdTA0OEQnLCdcXHUwNDhFJzonXFx1MDQ4RicsJ1xcdTA0OTAnOidcXHUwNDkxJywnXFx1MDQ5Mic6J1xcdTA0OTMnLCdcXHUwNDk0JzonXFx1MDQ5NScsJ1xcdTA0OTYnOidcXHUwNDk3JywnXFx1MDQ5OCc6J1xcdTA0OTknLCdcXHUwNDlBJzonXFx1MDQ5QicsJ1xcdTA0OUMnOidcXHUwNDlEJywnXFx1MDQ5RSc6J1xcdTA0OUYnLCdcXHUwNEEwJzonXFx1MDRBMScsJ1xcdTA0QTInOidcXHUwNEEzJywnXFx1MDRBNCc6J1xcdTA0QTUnLCdcXHUwNEE2JzonXFx1MDRBNycsJ1xcdTA0QTgnOidcXHUwNEE5JywnXFx1MDRBQSc6J1xcdTA0QUInLCdcXHUwNEFDJzonXFx1MDRBRCcsJ1xcdTA0QUUnOidcXHUwNEFGJywnXFx1MDRCMCc6J1xcdTA0QjEnLCdcXHUwNEIyJzonXFx1MDRCMycsJ1xcdTA0QjQnOidcXHUwNEI1JywnXFx1MDRCNic6J1xcdTA0QjcnLCdcXHUwNEI4JzonXFx1MDRCOScsJ1xcdTA0QkEnOidcXHUwNEJCJywnXFx1MDRCQyc6J1xcdTA0QkQnLCdcXHUwNEJFJzonXFx1MDRCRicsJ1xcdTA0QzAnOidcXHUwNENGJywnXFx1MDRDMSc6J1xcdTA0QzInLCdcXHUwNEMzJzonXFx1MDRDNCcsJ1xcdTA0QzUnOidcXHUwNEM2JywnXFx1MDRDNyc6J1xcdTA0QzgnLCdcXHUwNEM5JzonXFx1MDRDQScsJ1xcdTA0Q0InOidcXHUwNENDJywnXFx1MDRDRCc6J1xcdTA0Q0UnLCdcXHUwNEQwJzonXFx1MDREMScsJ1xcdTA0RDInOidcXHUwNEQzJywnXFx1MDRENCc6J1xcdTA0RDUnLCdcXHUwNEQ2JzonXFx1MDRENycsJ1xcdTA0RDgnOidcXHUwNEQ5JywnXFx1MDREQSc6J1xcdTA0REInLCdcXHUwNERDJzonXFx1MDRERCcsJ1xcdTA0REUnOidcXHUwNERGJywnXFx1MDRFMCc6J1xcdTA0RTEnLCdcXHUwNEUyJzonXFx1MDRFMycsJ1xcdTA0RTQnOidcXHUwNEU1JywnXFx1MDRFNic6J1xcdTA0RTcnLCdcXHUwNEU4JzonXFx1MDRFOScsJ1xcdTA0RUEnOidcXHUwNEVCJywnXFx1MDRFQyc6J1xcdTA0RUQnLCdcXHUwNEVFJzonXFx1MDRFRicsJ1xcdTA0RjAnOidcXHUwNEYxJywnXFx1MDRGMic6J1xcdTA0RjMnLCdcXHUwNEY0JzonXFx1MDRGNScsJ1xcdTA0RjYnOidcXHUwNEY3JywnXFx1MDRGOCc6J1xcdTA0RjknLCdcXHUwNEZBJzonXFx1MDRGQicsJ1xcdTA0RkMnOidcXHUwNEZEJywnXFx1MDRGRSc6J1xcdTA0RkYnLCdcXHUwNTAwJzonXFx1MDUwMScsJ1xcdTA1MDInOidcXHUwNTAzJywnXFx1MDUwNCc6J1xcdTA1MDUnLCdcXHUwNTA2JzonXFx1MDUwNycsJ1xcdTA1MDgnOidcXHUwNTA5JywnXFx1MDUwQSc6J1xcdTA1MEInLCdcXHUwNTBDJzonXFx1MDUwRCcsJ1xcdTA1MEUnOidcXHUwNTBGJywnXFx1MDUxMCc6J1xcdTA1MTEnLCdcXHUwNTEyJzonXFx1MDUxMycsJ1xcdTA1MTQnOidcXHUwNTE1JywnXFx1MDUxNic6J1xcdTA1MTcnLCdcXHUwNTE4JzonXFx1MDUxOScsJ1xcdTA1MUEnOidcXHUwNTFCJywnXFx1MDUxQyc6J1xcdTA1MUQnLCdcXHUwNTFFJzonXFx1MDUxRicsJ1xcdTA1MjAnOidcXHUwNTIxJywnXFx1MDUyMic6J1xcdTA1MjMnLCdcXHUwNTI0JzonXFx1MDUyNScsJ1xcdTA1MjYnOidcXHUwNTI3JywnXFx1MDUyOCc6J1xcdTA1MjknLCdcXHUwNTJBJzonXFx1MDUyQicsJ1xcdTA1MkMnOidcXHUwNTJEJywnXFx1MDUyRSc6J1xcdTA1MkYnLCdcXHUwNTMxJzonXFx1MDU2MScsJ1xcdTA1MzInOidcXHUwNTYyJywnXFx1MDUzMyc6J1xcdTA1NjMnLCdcXHUwNTM0JzonXFx1MDU2NCcsJ1xcdTA1MzUnOidcXHUwNTY1JywnXFx1MDUzNic6J1xcdTA1NjYnLCdcXHUwNTM3JzonXFx1MDU2NycsJ1xcdTA1MzgnOidcXHUwNTY4JywnXFx1MDUzOSc6J1xcdTA1NjknLCdcXHUwNTNBJzonXFx1MDU2QScsJ1xcdTA1M0InOidcXHUwNTZCJywnXFx1MDUzQyc6J1xcdTA1NkMnLCdcXHUwNTNEJzonXFx1MDU2RCcsJ1xcdTA1M0UnOidcXHUwNTZFJywnXFx1MDUzRic6J1xcdTA1NkYnLCdcXHUwNTQwJzonXFx1MDU3MCcsJ1xcdTA1NDEnOidcXHUwNTcxJywnXFx1MDU0Mic6J1xcdTA1NzInLCdcXHUwNTQzJzonXFx1MDU3MycsJ1xcdTA1NDQnOidcXHUwNTc0JywnXFx1MDU0NSc6J1xcdTA1NzUnLCdcXHUwNTQ2JzonXFx1MDU3NicsJ1xcdTA1NDcnOidcXHUwNTc3JywnXFx1MDU0OCc6J1xcdTA1NzgnLCdcXHUwNTQ5JzonXFx1MDU3OScsJ1xcdTA1NEEnOidcXHUwNTdBJywnXFx1MDU0Qic6J1xcdTA1N0InLCdcXHUwNTRDJzonXFx1MDU3QycsJ1xcdTA1NEQnOidcXHUwNTdEJywnXFx1MDU0RSc6J1xcdTA1N0UnLCdcXHUwNTRGJzonXFx1MDU3RicsJ1xcdTA1NTAnOidcXHUwNTgwJywnXFx1MDU1MSc6J1xcdTA1ODEnLCdcXHUwNTUyJzonXFx1MDU4MicsJ1xcdTA1NTMnOidcXHUwNTgzJywnXFx1MDU1NCc6J1xcdTA1ODQnLCdcXHUwNTU1JzonXFx1MDU4NScsJ1xcdTA1NTYnOidcXHUwNTg2JywnXFx1MTBBMCc6J1xcdTJEMDAnLCdcXHUxMEExJzonXFx1MkQwMScsJ1xcdTEwQTInOidcXHUyRDAyJywnXFx1MTBBMyc6J1xcdTJEMDMnLCdcXHUxMEE0JzonXFx1MkQwNCcsJ1xcdTEwQTUnOidcXHUyRDA1JywnXFx1MTBBNic6J1xcdTJEMDYnLCdcXHUxMEE3JzonXFx1MkQwNycsJ1xcdTEwQTgnOidcXHUyRDA4JywnXFx1MTBBOSc6J1xcdTJEMDknLCdcXHUxMEFBJzonXFx1MkQwQScsJ1xcdTEwQUInOidcXHUyRDBCJywnXFx1MTBBQyc6J1xcdTJEMEMnLCdcXHUxMEFEJzonXFx1MkQwRCcsJ1xcdTEwQUUnOidcXHUyRDBFJywnXFx1MTBBRic6J1xcdTJEMEYnLCdcXHUxMEIwJzonXFx1MkQxMCcsJ1xcdTEwQjEnOidcXHUyRDExJywnXFx1MTBCMic6J1xcdTJEMTInLCdcXHUxMEIzJzonXFx1MkQxMycsJ1xcdTEwQjQnOidcXHUyRDE0JywnXFx1MTBCNSc6J1xcdTJEMTUnLCdcXHUxMEI2JzonXFx1MkQxNicsJ1xcdTEwQjcnOidcXHUyRDE3JywnXFx1MTBCOCc6J1xcdTJEMTgnLCdcXHUxMEI5JzonXFx1MkQxOScsJ1xcdTEwQkEnOidcXHUyRDFBJywnXFx1MTBCQic6J1xcdTJEMUInLCdcXHUxMEJDJzonXFx1MkQxQycsJ1xcdTEwQkQnOidcXHUyRDFEJywnXFx1MTBCRSc6J1xcdTJEMUUnLCdcXHUxMEJGJzonXFx1MkQxRicsJ1xcdTEwQzAnOidcXHUyRDIwJywnXFx1MTBDMSc6J1xcdTJEMjEnLCdcXHUxMEMyJzonXFx1MkQyMicsJ1xcdTEwQzMnOidcXHUyRDIzJywnXFx1MTBDNCc6J1xcdTJEMjQnLCdcXHUxMEM1JzonXFx1MkQyNScsJ1xcdTEwQzcnOidcXHUyRDI3JywnXFx1MTBDRCc6J1xcdTJEMkQnLCdcXHUxRTAwJzonXFx1MUUwMScsJ1xcdTFFMDInOidcXHUxRTAzJywnXFx1MUUwNCc6J1xcdTFFMDUnLCdcXHUxRTA2JzonXFx1MUUwNycsJ1xcdTFFMDgnOidcXHUxRTA5JywnXFx1MUUwQSc6J1xcdTFFMEInLCdcXHUxRTBDJzonXFx1MUUwRCcsJ1xcdTFFMEUnOidcXHUxRTBGJywnXFx1MUUxMCc6J1xcdTFFMTEnLCdcXHUxRTEyJzonXFx1MUUxMycsJ1xcdTFFMTQnOidcXHUxRTE1JywnXFx1MUUxNic6J1xcdTFFMTcnLCdcXHUxRTE4JzonXFx1MUUxOScsJ1xcdTFFMUEnOidcXHUxRTFCJywnXFx1MUUxQyc6J1xcdTFFMUQnLCdcXHUxRTFFJzonXFx1MUUxRicsJ1xcdTFFMjAnOidcXHUxRTIxJywnXFx1MUUyMic6J1xcdTFFMjMnLCdcXHUxRTI0JzonXFx1MUUyNScsJ1xcdTFFMjYnOidcXHUxRTI3JywnXFx1MUUyOCc6J1xcdTFFMjknLCdcXHUxRTJBJzonXFx1MUUyQicsJ1xcdTFFMkMnOidcXHUxRTJEJywnXFx1MUUyRSc6J1xcdTFFMkYnLCdcXHUxRTMwJzonXFx1MUUzMScsJ1xcdTFFMzInOidcXHUxRTMzJywnXFx1MUUzNCc6J1xcdTFFMzUnLCdcXHUxRTM2JzonXFx1MUUzNycsJ1xcdTFFMzgnOidcXHUxRTM5JywnXFx1MUUzQSc6J1xcdTFFM0InLCdcXHUxRTNDJzonXFx1MUUzRCcsJ1xcdTFFM0UnOidcXHUxRTNGJywnXFx1MUU0MCc6J1xcdTFFNDEnLCdcXHUxRTQyJzonXFx1MUU0MycsJ1xcdTFFNDQnOidcXHUxRTQ1JywnXFx1MUU0Nic6J1xcdTFFNDcnLCdcXHUxRTQ4JzonXFx1MUU0OScsJ1xcdTFFNEEnOidcXHUxRTRCJywnXFx1MUU0Qyc6J1xcdTFFNEQnLCdcXHUxRTRFJzonXFx1MUU0RicsJ1xcdTFFNTAnOidcXHUxRTUxJywnXFx1MUU1Mic6J1xcdTFFNTMnLCdcXHUxRTU0JzonXFx1MUU1NScsJ1xcdTFFNTYnOidcXHUxRTU3JywnXFx1MUU1OCc6J1xcdTFFNTknLCdcXHUxRTVBJzonXFx1MUU1QicsJ1xcdTFFNUMnOidcXHUxRTVEJywnXFx1MUU1RSc6J1xcdTFFNUYnLCdcXHUxRTYwJzonXFx1MUU2MScsJ1xcdTFFNjInOidcXHUxRTYzJywnXFx1MUU2NCc6J1xcdTFFNjUnLCdcXHUxRTY2JzonXFx1MUU2NycsJ1xcdTFFNjgnOidcXHUxRTY5JywnXFx1MUU2QSc6J1xcdTFFNkInLCdcXHUxRTZDJzonXFx1MUU2RCcsJ1xcdTFFNkUnOidcXHUxRTZGJywnXFx1MUU3MCc6J1xcdTFFNzEnLCdcXHUxRTcyJzonXFx1MUU3MycsJ1xcdTFFNzQnOidcXHUxRTc1JywnXFx1MUU3Nic6J1xcdTFFNzcnLCdcXHUxRTc4JzonXFx1MUU3OScsJ1xcdTFFN0EnOidcXHUxRTdCJywnXFx1MUU3Qyc6J1xcdTFFN0QnLCdcXHUxRTdFJzonXFx1MUU3RicsJ1xcdTFFODAnOidcXHUxRTgxJywnXFx1MUU4Mic6J1xcdTFFODMnLCdcXHUxRTg0JzonXFx1MUU4NScsJ1xcdTFFODYnOidcXHUxRTg3JywnXFx1MUU4OCc6J1xcdTFFODknLCdcXHUxRThBJzonXFx1MUU4QicsJ1xcdTFFOEMnOidcXHUxRThEJywnXFx1MUU4RSc6J1xcdTFFOEYnLCdcXHUxRTkwJzonXFx1MUU5MScsJ1xcdTFFOTInOidcXHUxRTkzJywnXFx1MUU5NCc6J1xcdTFFOTUnLCdcXHUxRTlCJzonXFx1MUU2MScsJ1xcdTFFQTAnOidcXHUxRUExJywnXFx1MUVBMic6J1xcdTFFQTMnLCdcXHUxRUE0JzonXFx1MUVBNScsJ1xcdTFFQTYnOidcXHUxRUE3JywnXFx1MUVBOCc6J1xcdTFFQTknLCdcXHUxRUFBJzonXFx1MUVBQicsJ1xcdTFFQUMnOidcXHUxRUFEJywnXFx1MUVBRSc6J1xcdTFFQUYnLCdcXHUxRUIwJzonXFx1MUVCMScsJ1xcdTFFQjInOidcXHUxRUIzJywnXFx1MUVCNCc6J1xcdTFFQjUnLCdcXHUxRUI2JzonXFx1MUVCNycsJ1xcdTFFQjgnOidcXHUxRUI5JywnXFx1MUVCQSc6J1xcdTFFQkInLCdcXHUxRUJDJzonXFx1MUVCRCcsJ1xcdTFFQkUnOidcXHUxRUJGJywnXFx1MUVDMCc6J1xcdTFFQzEnLCdcXHUxRUMyJzonXFx1MUVDMycsJ1xcdTFFQzQnOidcXHUxRUM1JywnXFx1MUVDNic6J1xcdTFFQzcnLCdcXHUxRUM4JzonXFx1MUVDOScsJ1xcdTFFQ0EnOidcXHUxRUNCJywnXFx1MUVDQyc6J1xcdTFFQ0QnLCdcXHUxRUNFJzonXFx1MUVDRicsJ1xcdTFFRDAnOidcXHUxRUQxJywnXFx1MUVEMic6J1xcdTFFRDMnLCdcXHUxRUQ0JzonXFx1MUVENScsJ1xcdTFFRDYnOidcXHUxRUQ3JywnXFx1MUVEOCc6J1xcdTFFRDknLCdcXHUxRURBJzonXFx1MUVEQicsJ1xcdTFFREMnOidcXHUxRUREJywnXFx1MUVERSc6J1xcdTFFREYnLCdcXHUxRUUwJzonXFx1MUVFMScsJ1xcdTFFRTInOidcXHUxRUUzJywnXFx1MUVFNCc6J1xcdTFFRTUnLCdcXHUxRUU2JzonXFx1MUVFNycsJ1xcdTFFRTgnOidcXHUxRUU5JywnXFx1MUVFQSc6J1xcdTFFRUInLCdcXHUxRUVDJzonXFx1MUVFRCcsJ1xcdTFFRUUnOidcXHUxRUVGJywnXFx1MUVGMCc6J1xcdTFFRjEnLCdcXHUxRUYyJzonXFx1MUVGMycsJ1xcdTFFRjQnOidcXHUxRUY1JywnXFx1MUVGNic6J1xcdTFFRjcnLCdcXHUxRUY4JzonXFx1MUVGOScsJ1xcdTFFRkEnOidcXHUxRUZCJywnXFx1MUVGQyc6J1xcdTFFRkQnLCdcXHUxRUZFJzonXFx1MUVGRicsJ1xcdTFGMDgnOidcXHUxRjAwJywnXFx1MUYwOSc6J1xcdTFGMDEnLCdcXHUxRjBBJzonXFx1MUYwMicsJ1xcdTFGMEInOidcXHUxRjAzJywnXFx1MUYwQyc6J1xcdTFGMDQnLCdcXHUxRjBEJzonXFx1MUYwNScsJ1xcdTFGMEUnOidcXHUxRjA2JywnXFx1MUYwRic6J1xcdTFGMDcnLCdcXHUxRjE4JzonXFx1MUYxMCcsJ1xcdTFGMTknOidcXHUxRjExJywnXFx1MUYxQSc6J1xcdTFGMTInLCdcXHUxRjFCJzonXFx1MUYxMycsJ1xcdTFGMUMnOidcXHUxRjE0JywnXFx1MUYxRCc6J1xcdTFGMTUnLCdcXHUxRjI4JzonXFx1MUYyMCcsJ1xcdTFGMjknOidcXHUxRjIxJywnXFx1MUYyQSc6J1xcdTFGMjInLCdcXHUxRjJCJzonXFx1MUYyMycsJ1xcdTFGMkMnOidcXHUxRjI0JywnXFx1MUYyRCc6J1xcdTFGMjUnLCdcXHUxRjJFJzonXFx1MUYyNicsJ1xcdTFGMkYnOidcXHUxRjI3JywnXFx1MUYzOCc6J1xcdTFGMzAnLCdcXHUxRjM5JzonXFx1MUYzMScsJ1xcdTFGM0EnOidcXHUxRjMyJywnXFx1MUYzQic6J1xcdTFGMzMnLCdcXHUxRjNDJzonXFx1MUYzNCcsJ1xcdTFGM0QnOidcXHUxRjM1JywnXFx1MUYzRSc6J1xcdTFGMzYnLCdcXHUxRjNGJzonXFx1MUYzNycsJ1xcdTFGNDgnOidcXHUxRjQwJywnXFx1MUY0OSc6J1xcdTFGNDEnLCdcXHUxRjRBJzonXFx1MUY0MicsJ1xcdTFGNEInOidcXHUxRjQzJywnXFx1MUY0Qyc6J1xcdTFGNDQnLCdcXHUxRjREJzonXFx1MUY0NScsJ1xcdTFGNTknOidcXHUxRjUxJywnXFx1MUY1Qic6J1xcdTFGNTMnLCdcXHUxRjVEJzonXFx1MUY1NScsJ1xcdTFGNUYnOidcXHUxRjU3JywnXFx1MUY2OCc6J1xcdTFGNjAnLCdcXHUxRjY5JzonXFx1MUY2MScsJ1xcdTFGNkEnOidcXHUxRjYyJywnXFx1MUY2Qic6J1xcdTFGNjMnLCdcXHUxRjZDJzonXFx1MUY2NCcsJ1xcdTFGNkQnOidcXHUxRjY1JywnXFx1MUY2RSc6J1xcdTFGNjYnLCdcXHUxRjZGJzonXFx1MUY2NycsJ1xcdTFGQjgnOidcXHUxRkIwJywnXFx1MUZCOSc6J1xcdTFGQjEnLCdcXHUxRkJBJzonXFx1MUY3MCcsJ1xcdTFGQkInOidcXHUxRjcxJywnXFx1MUZCRSc6J1xcdTAzQjknLCdcXHUxRkM4JzonXFx1MUY3MicsJ1xcdTFGQzknOidcXHUxRjczJywnXFx1MUZDQSc6J1xcdTFGNzQnLCdcXHUxRkNCJzonXFx1MUY3NScsJ1xcdTFGRDgnOidcXHUxRkQwJywnXFx1MUZEOSc6J1xcdTFGRDEnLCdcXHUxRkRBJzonXFx1MUY3NicsJ1xcdTFGREInOidcXHUxRjc3JywnXFx1MUZFOCc6J1xcdTFGRTAnLCdcXHUxRkU5JzonXFx1MUZFMScsJ1xcdTFGRUEnOidcXHUxRjdBJywnXFx1MUZFQic6J1xcdTFGN0InLCdcXHUxRkVDJzonXFx1MUZFNScsJ1xcdTFGRjgnOidcXHUxRjc4JywnXFx1MUZGOSc6J1xcdTFGNzknLCdcXHUxRkZBJzonXFx1MUY3QycsJ1xcdTFGRkInOidcXHUxRjdEJywnXFx1MjEyNic6J1xcdTAzQzknLCdcXHUyMTJBJzonaycsJ1xcdTIxMkInOidcXHhFNScsJ1xcdTIxMzInOidcXHUyMTRFJywnXFx1MjE2MCc6J1xcdTIxNzAnLCdcXHUyMTYxJzonXFx1MjE3MScsJ1xcdTIxNjInOidcXHUyMTcyJywnXFx1MjE2Myc6J1xcdTIxNzMnLCdcXHUyMTY0JzonXFx1MjE3NCcsJ1xcdTIxNjUnOidcXHUyMTc1JywnXFx1MjE2Nic6J1xcdTIxNzYnLCdcXHUyMTY3JzonXFx1MjE3NycsJ1xcdTIxNjgnOidcXHUyMTc4JywnXFx1MjE2OSc6J1xcdTIxNzknLCdcXHUyMTZBJzonXFx1MjE3QScsJ1xcdTIxNkInOidcXHUyMTdCJywnXFx1MjE2Qyc6J1xcdTIxN0MnLCdcXHUyMTZEJzonXFx1MjE3RCcsJ1xcdTIxNkUnOidcXHUyMTdFJywnXFx1MjE2Ric6J1xcdTIxN0YnLCdcXHUyMTgzJzonXFx1MjE4NCcsJ1xcdTI0QjYnOidcXHUyNEQwJywnXFx1MjRCNyc6J1xcdTI0RDEnLCdcXHUyNEI4JzonXFx1MjREMicsJ1xcdTI0QjknOidcXHUyNEQzJywnXFx1MjRCQSc6J1xcdTI0RDQnLCdcXHUyNEJCJzonXFx1MjRENScsJ1xcdTI0QkMnOidcXHUyNEQ2JywnXFx1MjRCRCc6J1xcdTI0RDcnLCdcXHUyNEJFJzonXFx1MjREOCcsJ1xcdTI0QkYnOidcXHUyNEQ5JywnXFx1MjRDMCc6J1xcdTI0REEnLCdcXHUyNEMxJzonXFx1MjREQicsJ1xcdTI0QzInOidcXHUyNERDJywnXFx1MjRDMyc6J1xcdTI0REQnLCdcXHUyNEM0JzonXFx1MjRERScsJ1xcdTI0QzUnOidcXHUyNERGJywnXFx1MjRDNic6J1xcdTI0RTAnLCdcXHUyNEM3JzonXFx1MjRFMScsJ1xcdTI0QzgnOidcXHUyNEUyJywnXFx1MjRDOSc6J1xcdTI0RTMnLCdcXHUyNENBJzonXFx1MjRFNCcsJ1xcdTI0Q0InOidcXHUyNEU1JywnXFx1MjRDQyc6J1xcdTI0RTYnLCdcXHUyNENEJzonXFx1MjRFNycsJ1xcdTI0Q0UnOidcXHUyNEU4JywnXFx1MjRDRic6J1xcdTI0RTknLCdcXHUyQzAwJzonXFx1MkMzMCcsJ1xcdTJDMDEnOidcXHUyQzMxJywnXFx1MkMwMic6J1xcdTJDMzInLCdcXHUyQzAzJzonXFx1MkMzMycsJ1xcdTJDMDQnOidcXHUyQzM0JywnXFx1MkMwNSc6J1xcdTJDMzUnLCdcXHUyQzA2JzonXFx1MkMzNicsJ1xcdTJDMDcnOidcXHUyQzM3JywnXFx1MkMwOCc6J1xcdTJDMzgnLCdcXHUyQzA5JzonXFx1MkMzOScsJ1xcdTJDMEEnOidcXHUyQzNBJywnXFx1MkMwQic6J1xcdTJDM0InLCdcXHUyQzBDJzonXFx1MkMzQycsJ1xcdTJDMEQnOidcXHUyQzNEJywnXFx1MkMwRSc6J1xcdTJDM0UnLCdcXHUyQzBGJzonXFx1MkMzRicsJ1xcdTJDMTAnOidcXHUyQzQwJywnXFx1MkMxMSc6J1xcdTJDNDEnLCdcXHUyQzEyJzonXFx1MkM0MicsJ1xcdTJDMTMnOidcXHUyQzQzJywnXFx1MkMxNCc6J1xcdTJDNDQnLCdcXHUyQzE1JzonXFx1MkM0NScsJ1xcdTJDMTYnOidcXHUyQzQ2JywnXFx1MkMxNyc6J1xcdTJDNDcnLCdcXHUyQzE4JzonXFx1MkM0OCcsJ1xcdTJDMTknOidcXHUyQzQ5JywnXFx1MkMxQSc6J1xcdTJDNEEnLCdcXHUyQzFCJzonXFx1MkM0QicsJ1xcdTJDMUMnOidcXHUyQzRDJywnXFx1MkMxRCc6J1xcdTJDNEQnLCdcXHUyQzFFJzonXFx1MkM0RScsJ1xcdTJDMUYnOidcXHUyQzRGJywnXFx1MkMyMCc6J1xcdTJDNTAnLCdcXHUyQzIxJzonXFx1MkM1MScsJ1xcdTJDMjInOidcXHUyQzUyJywnXFx1MkMyMyc6J1xcdTJDNTMnLCdcXHUyQzI0JzonXFx1MkM1NCcsJ1xcdTJDMjUnOidcXHUyQzU1JywnXFx1MkMyNic6J1xcdTJDNTYnLCdcXHUyQzI3JzonXFx1MkM1NycsJ1xcdTJDMjgnOidcXHUyQzU4JywnXFx1MkMyOSc6J1xcdTJDNTknLCdcXHUyQzJBJzonXFx1MkM1QScsJ1xcdTJDMkInOidcXHUyQzVCJywnXFx1MkMyQyc6J1xcdTJDNUMnLCdcXHUyQzJEJzonXFx1MkM1RCcsJ1xcdTJDMkUnOidcXHUyQzVFJywnXFx1MkM2MCc6J1xcdTJDNjEnLCdcXHUyQzYyJzonXFx1MDI2QicsJ1xcdTJDNjMnOidcXHUxRDdEJywnXFx1MkM2NCc6J1xcdTAyN0QnLCdcXHUyQzY3JzonXFx1MkM2OCcsJ1xcdTJDNjknOidcXHUyQzZBJywnXFx1MkM2Qic6J1xcdTJDNkMnLCdcXHUyQzZEJzonXFx1MDI1MScsJ1xcdTJDNkUnOidcXHUwMjcxJywnXFx1MkM2Ric6J1xcdTAyNTAnLCdcXHUyQzcwJzonXFx1MDI1MicsJ1xcdTJDNzInOidcXHUyQzczJywnXFx1MkM3NSc6J1xcdTJDNzYnLCdcXHUyQzdFJzonXFx1MDIzRicsJ1xcdTJDN0YnOidcXHUwMjQwJywnXFx1MkM4MCc6J1xcdTJDODEnLCdcXHUyQzgyJzonXFx1MkM4MycsJ1xcdTJDODQnOidcXHUyQzg1JywnXFx1MkM4Nic6J1xcdTJDODcnLCdcXHUyQzg4JzonXFx1MkM4OScsJ1xcdTJDOEEnOidcXHUyQzhCJywnXFx1MkM4Qyc6J1xcdTJDOEQnLCdcXHUyQzhFJzonXFx1MkM4RicsJ1xcdTJDOTAnOidcXHUyQzkxJywnXFx1MkM5Mic6J1xcdTJDOTMnLCdcXHUyQzk0JzonXFx1MkM5NScsJ1xcdTJDOTYnOidcXHUyQzk3JywnXFx1MkM5OCc6J1xcdTJDOTknLCdcXHUyQzlBJzonXFx1MkM5QicsJ1xcdTJDOUMnOidcXHUyQzlEJywnXFx1MkM5RSc6J1xcdTJDOUYnLCdcXHUyQ0EwJzonXFx1MkNBMScsJ1xcdTJDQTInOidcXHUyQ0EzJywnXFx1MkNBNCc6J1xcdTJDQTUnLCdcXHUyQ0E2JzonXFx1MkNBNycsJ1xcdTJDQTgnOidcXHUyQ0E5JywnXFx1MkNBQSc6J1xcdTJDQUInLCdcXHUyQ0FDJzonXFx1MkNBRCcsJ1xcdTJDQUUnOidcXHUyQ0FGJywnXFx1MkNCMCc6J1xcdTJDQjEnLCdcXHUyQ0IyJzonXFx1MkNCMycsJ1xcdTJDQjQnOidcXHUyQ0I1JywnXFx1MkNCNic6J1xcdTJDQjcnLCdcXHUyQ0I4JzonXFx1MkNCOScsJ1xcdTJDQkEnOidcXHUyQ0JCJywnXFx1MkNCQyc6J1xcdTJDQkQnLCdcXHUyQ0JFJzonXFx1MkNCRicsJ1xcdTJDQzAnOidcXHUyQ0MxJywnXFx1MkNDMic6J1xcdTJDQzMnLCdcXHUyQ0M0JzonXFx1MkNDNScsJ1xcdTJDQzYnOidcXHUyQ0M3JywnXFx1MkNDOCc6J1xcdTJDQzknLCdcXHUyQ0NBJzonXFx1MkNDQicsJ1xcdTJDQ0MnOidcXHUyQ0NEJywnXFx1MkNDRSc6J1xcdTJDQ0YnLCdcXHUyQ0QwJzonXFx1MkNEMScsJ1xcdTJDRDInOidcXHUyQ0QzJywnXFx1MkNENCc6J1xcdTJDRDUnLCdcXHUyQ0Q2JzonXFx1MkNENycsJ1xcdTJDRDgnOidcXHUyQ0Q5JywnXFx1MkNEQSc6J1xcdTJDREInLCdcXHUyQ0RDJzonXFx1MkNERCcsJ1xcdTJDREUnOidcXHUyQ0RGJywnXFx1MkNFMCc6J1xcdTJDRTEnLCdcXHUyQ0UyJzonXFx1MkNFMycsJ1xcdTJDRUInOidcXHUyQ0VDJywnXFx1MkNFRCc6J1xcdTJDRUUnLCdcXHUyQ0YyJzonXFx1MkNGMycsJ1xcdUE2NDAnOidcXHVBNjQxJywnXFx1QTY0Mic6J1xcdUE2NDMnLCdcXHVBNjQ0JzonXFx1QTY0NScsJ1xcdUE2NDYnOidcXHVBNjQ3JywnXFx1QTY0OCc6J1xcdUE2NDknLCdcXHVBNjRBJzonXFx1QTY0QicsJ1xcdUE2NEMnOidcXHVBNjREJywnXFx1QTY0RSc6J1xcdUE2NEYnLCdcXHVBNjUwJzonXFx1QTY1MScsJ1xcdUE2NTInOidcXHVBNjUzJywnXFx1QTY1NCc6J1xcdUE2NTUnLCdcXHVBNjU2JzonXFx1QTY1NycsJ1xcdUE2NTgnOidcXHVBNjU5JywnXFx1QTY1QSc6J1xcdUE2NUInLCdcXHVBNjVDJzonXFx1QTY1RCcsJ1xcdUE2NUUnOidcXHVBNjVGJywnXFx1QTY2MCc6J1xcdUE2NjEnLCdcXHVBNjYyJzonXFx1QTY2MycsJ1xcdUE2NjQnOidcXHVBNjY1JywnXFx1QTY2Nic6J1xcdUE2NjcnLCdcXHVBNjY4JzonXFx1QTY2OScsJ1xcdUE2NkEnOidcXHVBNjZCJywnXFx1QTY2Qyc6J1xcdUE2NkQnLCdcXHVBNjgwJzonXFx1QTY4MScsJ1xcdUE2ODInOidcXHVBNjgzJywnXFx1QTY4NCc6J1xcdUE2ODUnLCdcXHVBNjg2JzonXFx1QTY4NycsJ1xcdUE2ODgnOidcXHVBNjg5JywnXFx1QTY4QSc6J1xcdUE2OEInLCdcXHVBNjhDJzonXFx1QTY4RCcsJ1xcdUE2OEUnOidcXHVBNjhGJywnXFx1QTY5MCc6J1xcdUE2OTEnLCdcXHVBNjkyJzonXFx1QTY5MycsJ1xcdUE2OTQnOidcXHVBNjk1JywnXFx1QTY5Nic6J1xcdUE2OTcnLCdcXHVBNjk4JzonXFx1QTY5OScsJ1xcdUE2OUEnOidcXHVBNjlCJywnXFx1QTcyMic6J1xcdUE3MjMnLCdcXHVBNzI0JzonXFx1QTcyNScsJ1xcdUE3MjYnOidcXHVBNzI3JywnXFx1QTcyOCc6J1xcdUE3MjknLCdcXHVBNzJBJzonXFx1QTcyQicsJ1xcdUE3MkMnOidcXHVBNzJEJywnXFx1QTcyRSc6J1xcdUE3MkYnLCdcXHVBNzMyJzonXFx1QTczMycsJ1xcdUE3MzQnOidcXHVBNzM1JywnXFx1QTczNic6J1xcdUE3MzcnLCdcXHVBNzM4JzonXFx1QTczOScsJ1xcdUE3M0EnOidcXHVBNzNCJywnXFx1QTczQyc6J1xcdUE3M0QnLCdcXHVBNzNFJzonXFx1QTczRicsJ1xcdUE3NDAnOidcXHVBNzQxJywnXFx1QTc0Mic6J1xcdUE3NDMnLCdcXHVBNzQ0JzonXFx1QTc0NScsJ1xcdUE3NDYnOidcXHVBNzQ3JywnXFx1QTc0OCc6J1xcdUE3NDknLCdcXHVBNzRBJzonXFx1QTc0QicsJ1xcdUE3NEMnOidcXHVBNzREJywnXFx1QTc0RSc6J1xcdUE3NEYnLCdcXHVBNzUwJzonXFx1QTc1MScsJ1xcdUE3NTInOidcXHVBNzUzJywnXFx1QTc1NCc6J1xcdUE3NTUnLCdcXHVBNzU2JzonXFx1QTc1NycsJ1xcdUE3NTgnOidcXHVBNzU5JywnXFx1QTc1QSc6J1xcdUE3NUInLCdcXHVBNzVDJzonXFx1QTc1RCcsJ1xcdUE3NUUnOidcXHVBNzVGJywnXFx1QTc2MCc6J1xcdUE3NjEnLCdcXHVBNzYyJzonXFx1QTc2MycsJ1xcdUE3NjQnOidcXHVBNzY1JywnXFx1QTc2Nic6J1xcdUE3NjcnLCdcXHVBNzY4JzonXFx1QTc2OScsJ1xcdUE3NkEnOidcXHVBNzZCJywnXFx1QTc2Qyc6J1xcdUE3NkQnLCdcXHVBNzZFJzonXFx1QTc2RicsJ1xcdUE3NzknOidcXHVBNzdBJywnXFx1QTc3Qic6J1xcdUE3N0MnLCdcXHVBNzdEJzonXFx1MUQ3OScsJ1xcdUE3N0UnOidcXHVBNzdGJywnXFx1QTc4MCc6J1xcdUE3ODEnLCdcXHVBNzgyJzonXFx1QTc4MycsJ1xcdUE3ODQnOidcXHVBNzg1JywnXFx1QTc4Nic6J1xcdUE3ODcnLCdcXHVBNzhCJzonXFx1QTc4QycsJ1xcdUE3OEQnOidcXHUwMjY1JywnXFx1QTc5MCc6J1xcdUE3OTEnLCdcXHVBNzkyJzonXFx1QTc5MycsJ1xcdUE3OTYnOidcXHVBNzk3JywnXFx1QTc5OCc6J1xcdUE3OTknLCdcXHVBNzlBJzonXFx1QTc5QicsJ1xcdUE3OUMnOidcXHVBNzlEJywnXFx1QTc5RSc6J1xcdUE3OUYnLCdcXHVBN0EwJzonXFx1QTdBMScsJ1xcdUE3QTInOidcXHVBN0EzJywnXFx1QTdBNCc6J1xcdUE3QTUnLCdcXHVBN0E2JzonXFx1QTdBNycsJ1xcdUE3QTgnOidcXHVBN0E5JywnXFx1QTdBQSc6J1xcdTAyNjYnLCdcXHVBN0FCJzonXFx1MDI1QycsJ1xcdUE3QUMnOidcXHUwMjYxJywnXFx1QTdBRCc6J1xcdTAyNkMnLCdcXHVBN0IwJzonXFx1MDI5RScsJ1xcdUE3QjEnOidcXHUwMjg3JywnXFx1RkYyMSc6J1xcdUZGNDEnLCdcXHVGRjIyJzonXFx1RkY0MicsJ1xcdUZGMjMnOidcXHVGRjQzJywnXFx1RkYyNCc6J1xcdUZGNDQnLCdcXHVGRjI1JzonXFx1RkY0NScsJ1xcdUZGMjYnOidcXHVGRjQ2JywnXFx1RkYyNyc6J1xcdUZGNDcnLCdcXHVGRjI4JzonXFx1RkY0OCcsJ1xcdUZGMjknOidcXHVGRjQ5JywnXFx1RkYyQSc6J1xcdUZGNEEnLCdcXHVGRjJCJzonXFx1RkY0QicsJ1xcdUZGMkMnOidcXHVGRjRDJywnXFx1RkYyRCc6J1xcdUZGNEQnLCdcXHVGRjJFJzonXFx1RkY0RScsJ1xcdUZGMkYnOidcXHVGRjRGJywnXFx1RkYzMCc6J1xcdUZGNTAnLCdcXHVGRjMxJzonXFx1RkY1MScsJ1xcdUZGMzInOidcXHVGRjUyJywnXFx1RkYzMyc6J1xcdUZGNTMnLCdcXHVGRjM0JzonXFx1RkY1NCcsJ1xcdUZGMzUnOidcXHVGRjU1JywnXFx1RkYzNic6J1xcdUZGNTYnLCdcXHVGRjM3JzonXFx1RkY1NycsJ1xcdUZGMzgnOidcXHVGRjU4JywnXFx1RkYzOSc6J1xcdUZGNTknLCdcXHVGRjNBJzonXFx1RkY1QScsJ1xcdUQ4MDFcXHVEQzAwJzonXFx1RDgwMVxcdURDMjgnLCdcXHVEODAxXFx1REMwMSc6J1xcdUQ4MDFcXHVEQzI5JywnXFx1RDgwMVxcdURDMDInOidcXHVEODAxXFx1REMyQScsJ1xcdUQ4MDFcXHVEQzAzJzonXFx1RDgwMVxcdURDMkInLCdcXHVEODAxXFx1REMwNCc6J1xcdUQ4MDFcXHVEQzJDJywnXFx1RDgwMVxcdURDMDUnOidcXHVEODAxXFx1REMyRCcsJ1xcdUQ4MDFcXHVEQzA2JzonXFx1RDgwMVxcdURDMkUnLCdcXHVEODAxXFx1REMwNyc6J1xcdUQ4MDFcXHVEQzJGJywnXFx1RDgwMVxcdURDMDgnOidcXHVEODAxXFx1REMzMCcsJ1xcdUQ4MDFcXHVEQzA5JzonXFx1RDgwMVxcdURDMzEnLCdcXHVEODAxXFx1REMwQSc6J1xcdUQ4MDFcXHVEQzMyJywnXFx1RDgwMVxcdURDMEInOidcXHVEODAxXFx1REMzMycsJ1xcdUQ4MDFcXHVEQzBDJzonXFx1RDgwMVxcdURDMzQnLCdcXHVEODAxXFx1REMwRCc6J1xcdUQ4MDFcXHVEQzM1JywnXFx1RDgwMVxcdURDMEUnOidcXHVEODAxXFx1REMzNicsJ1xcdUQ4MDFcXHVEQzBGJzonXFx1RDgwMVxcdURDMzcnLCdcXHVEODAxXFx1REMxMCc6J1xcdUQ4MDFcXHVEQzM4JywnXFx1RDgwMVxcdURDMTEnOidcXHVEODAxXFx1REMzOScsJ1xcdUQ4MDFcXHVEQzEyJzonXFx1RDgwMVxcdURDM0EnLCdcXHVEODAxXFx1REMxMyc6J1xcdUQ4MDFcXHVEQzNCJywnXFx1RDgwMVxcdURDMTQnOidcXHVEODAxXFx1REMzQycsJ1xcdUQ4MDFcXHVEQzE1JzonXFx1RDgwMVxcdURDM0QnLCdcXHVEODAxXFx1REMxNic6J1xcdUQ4MDFcXHVEQzNFJywnXFx1RDgwMVxcdURDMTcnOidcXHVEODAxXFx1REMzRicsJ1xcdUQ4MDFcXHVEQzE4JzonXFx1RDgwMVxcdURDNDAnLCdcXHVEODAxXFx1REMxOSc6J1xcdUQ4MDFcXHVEQzQxJywnXFx1RDgwMVxcdURDMUEnOidcXHVEODAxXFx1REM0MicsJ1xcdUQ4MDFcXHVEQzFCJzonXFx1RDgwMVxcdURDNDMnLCdcXHVEODAxXFx1REMxQyc6J1xcdUQ4MDFcXHVEQzQ0JywnXFx1RDgwMVxcdURDMUQnOidcXHVEODAxXFx1REM0NScsJ1xcdUQ4MDFcXHVEQzFFJzonXFx1RDgwMVxcdURDNDYnLCdcXHVEODAxXFx1REMxRic6J1xcdUQ4MDFcXHVEQzQ3JywnXFx1RDgwMVxcdURDMjAnOidcXHVEODAxXFx1REM0OCcsJ1xcdUQ4MDFcXHVEQzIxJzonXFx1RDgwMVxcdURDNDknLCdcXHVEODAxXFx1REMyMic6J1xcdUQ4MDFcXHVEQzRBJywnXFx1RDgwMVxcdURDMjMnOidcXHVEODAxXFx1REM0QicsJ1xcdUQ4MDFcXHVEQzI0JzonXFx1RDgwMVxcdURDNEMnLCdcXHVEODAxXFx1REMyNSc6J1xcdUQ4MDFcXHVEQzREJywnXFx1RDgwMVxcdURDMjYnOidcXHVEODAxXFx1REM0RScsJ1xcdUQ4MDFcXHVEQzI3JzonXFx1RDgwMVxcdURDNEYnLCdcXHVEODA2XFx1RENBMCc6J1xcdUQ4MDZcXHVEQ0MwJywnXFx1RDgwNlxcdURDQTEnOidcXHVEODA2XFx1RENDMScsJ1xcdUQ4MDZcXHVEQ0EyJzonXFx1RDgwNlxcdURDQzInLCdcXHVEODA2XFx1RENBMyc6J1xcdUQ4MDZcXHVEQ0MzJywnXFx1RDgwNlxcdURDQTQnOidcXHVEODA2XFx1RENDNCcsJ1xcdUQ4MDZcXHVEQ0E1JzonXFx1RDgwNlxcdURDQzUnLCdcXHVEODA2XFx1RENBNic6J1xcdUQ4MDZcXHVEQ0M2JywnXFx1RDgwNlxcdURDQTcnOidcXHVEODA2XFx1RENDNycsJ1xcdUQ4MDZcXHVEQ0E4JzonXFx1RDgwNlxcdURDQzgnLCdcXHVEODA2XFx1RENBOSc6J1xcdUQ4MDZcXHVEQ0M5JywnXFx1RDgwNlxcdURDQUEnOidcXHVEODA2XFx1RENDQScsJ1xcdUQ4MDZcXHVEQ0FCJzonXFx1RDgwNlxcdURDQ0InLCdcXHVEODA2XFx1RENBQyc6J1xcdUQ4MDZcXHVEQ0NDJywnXFx1RDgwNlxcdURDQUQnOidcXHVEODA2XFx1RENDRCcsJ1xcdUQ4MDZcXHVEQ0FFJzonXFx1RDgwNlxcdURDQ0UnLCdcXHVEODA2XFx1RENBRic6J1xcdUQ4MDZcXHVEQ0NGJywnXFx1RDgwNlxcdURDQjAnOidcXHVEODA2XFx1RENEMCcsJ1xcdUQ4MDZcXHVEQ0IxJzonXFx1RDgwNlxcdURDRDEnLCdcXHVEODA2XFx1RENCMic6J1xcdUQ4MDZcXHVEQ0QyJywnXFx1RDgwNlxcdURDQjMnOidcXHVEODA2XFx1RENEMycsJ1xcdUQ4MDZcXHVEQ0I0JzonXFx1RDgwNlxcdURDRDQnLCdcXHVEODA2XFx1RENCNSc6J1xcdUQ4MDZcXHVEQ0Q1JywnXFx1RDgwNlxcdURDQjYnOidcXHVEODA2XFx1RENENicsJ1xcdUQ4MDZcXHVEQ0I3JzonXFx1RDgwNlxcdURDRDcnLCdcXHVEODA2XFx1RENCOCc6J1xcdUQ4MDZcXHVEQ0Q4JywnXFx1RDgwNlxcdURDQjknOidcXHVEODA2XFx1RENEOScsJ1xcdUQ4MDZcXHVEQ0JBJzonXFx1RDgwNlxcdURDREEnLCdcXHVEODA2XFx1RENCQic6J1xcdUQ4MDZcXHVEQ0RCJywnXFx1RDgwNlxcdURDQkMnOidcXHVEODA2XFx1RENEQycsJ1xcdUQ4MDZcXHVEQ0JEJzonXFx1RDgwNlxcdURDREQnLCdcXHVEODA2XFx1RENCRSc6J1xcdUQ4MDZcXHVEQ0RFJywnXFx1RDgwNlxcdURDQkYnOidcXHVEODA2XFx1RENERicsJ1xceERGJzonc3MnLCdcXHUwMTMwJzonaVxcdTAzMDcnLCdcXHUwMTQ5JzonXFx1MDJCQ24nLCdcXHUwMUYwJzonalxcdTAzMEMnLCdcXHUwMzkwJzonXFx1MDNCOVxcdTAzMDhcXHUwMzAxJywnXFx1MDNCMCc6J1xcdTAzQzVcXHUwMzA4XFx1MDMwMScsJ1xcdTA1ODcnOidcXHUwNTY1XFx1MDU4MicsJ1xcdTFFOTYnOidoXFx1MDMzMScsJ1xcdTFFOTcnOid0XFx1MDMwOCcsJ1xcdTFFOTgnOid3XFx1MDMwQScsJ1xcdTFFOTknOid5XFx1MDMwQScsJ1xcdTFFOUEnOidhXFx1MDJCRScsJ1xcdTFFOUUnOidzcycsJ1xcdTFGNTAnOidcXHUwM0M1XFx1MDMxMycsJ1xcdTFGNTInOidcXHUwM0M1XFx1MDMxM1xcdTAzMDAnLCdcXHUxRjU0JzonXFx1MDNDNVxcdTAzMTNcXHUwMzAxJywnXFx1MUY1Nic6J1xcdTAzQzVcXHUwMzEzXFx1MDM0MicsJ1xcdTFGODAnOidcXHUxRjAwXFx1MDNCOScsJ1xcdTFGODEnOidcXHUxRjAxXFx1MDNCOScsJ1xcdTFGODInOidcXHUxRjAyXFx1MDNCOScsJ1xcdTFGODMnOidcXHUxRjAzXFx1MDNCOScsJ1xcdTFGODQnOidcXHUxRjA0XFx1MDNCOScsJ1xcdTFGODUnOidcXHUxRjA1XFx1MDNCOScsJ1xcdTFGODYnOidcXHUxRjA2XFx1MDNCOScsJ1xcdTFGODcnOidcXHUxRjA3XFx1MDNCOScsJ1xcdTFGODgnOidcXHUxRjAwXFx1MDNCOScsJ1xcdTFGODknOidcXHUxRjAxXFx1MDNCOScsJ1xcdTFGOEEnOidcXHUxRjAyXFx1MDNCOScsJ1xcdTFGOEInOidcXHUxRjAzXFx1MDNCOScsJ1xcdTFGOEMnOidcXHUxRjA0XFx1MDNCOScsJ1xcdTFGOEQnOidcXHUxRjA1XFx1MDNCOScsJ1xcdTFGOEUnOidcXHUxRjA2XFx1MDNCOScsJ1xcdTFGOEYnOidcXHUxRjA3XFx1MDNCOScsJ1xcdTFGOTAnOidcXHUxRjIwXFx1MDNCOScsJ1xcdTFGOTEnOidcXHUxRjIxXFx1MDNCOScsJ1xcdTFGOTInOidcXHUxRjIyXFx1MDNCOScsJ1xcdTFGOTMnOidcXHUxRjIzXFx1MDNCOScsJ1xcdTFGOTQnOidcXHUxRjI0XFx1MDNCOScsJ1xcdTFGOTUnOidcXHUxRjI1XFx1MDNCOScsJ1xcdTFGOTYnOidcXHUxRjI2XFx1MDNCOScsJ1xcdTFGOTcnOidcXHUxRjI3XFx1MDNCOScsJ1xcdTFGOTgnOidcXHUxRjIwXFx1MDNCOScsJ1xcdTFGOTknOidcXHUxRjIxXFx1MDNCOScsJ1xcdTFGOUEnOidcXHUxRjIyXFx1MDNCOScsJ1xcdTFGOUInOidcXHUxRjIzXFx1MDNCOScsJ1xcdTFGOUMnOidcXHUxRjI0XFx1MDNCOScsJ1xcdTFGOUQnOidcXHUxRjI1XFx1MDNCOScsJ1xcdTFGOUUnOidcXHUxRjI2XFx1MDNCOScsJ1xcdTFGOUYnOidcXHUxRjI3XFx1MDNCOScsJ1xcdTFGQTAnOidcXHUxRjYwXFx1MDNCOScsJ1xcdTFGQTEnOidcXHUxRjYxXFx1MDNCOScsJ1xcdTFGQTInOidcXHUxRjYyXFx1MDNCOScsJ1xcdTFGQTMnOidcXHUxRjYzXFx1MDNCOScsJ1xcdTFGQTQnOidcXHUxRjY0XFx1MDNCOScsJ1xcdTFGQTUnOidcXHUxRjY1XFx1MDNCOScsJ1xcdTFGQTYnOidcXHUxRjY2XFx1MDNCOScsJ1xcdTFGQTcnOidcXHUxRjY3XFx1MDNCOScsJ1xcdTFGQTgnOidcXHUxRjYwXFx1MDNCOScsJ1xcdTFGQTknOidcXHUxRjYxXFx1MDNCOScsJ1xcdTFGQUEnOidcXHUxRjYyXFx1MDNCOScsJ1xcdTFGQUInOidcXHUxRjYzXFx1MDNCOScsJ1xcdTFGQUMnOidcXHUxRjY0XFx1MDNCOScsJ1xcdTFGQUQnOidcXHUxRjY1XFx1MDNCOScsJ1xcdTFGQUUnOidcXHUxRjY2XFx1MDNCOScsJ1xcdTFGQUYnOidcXHUxRjY3XFx1MDNCOScsJ1xcdTFGQjInOidcXHUxRjcwXFx1MDNCOScsJ1xcdTFGQjMnOidcXHUwM0IxXFx1MDNCOScsJ1xcdTFGQjQnOidcXHUwM0FDXFx1MDNCOScsJ1xcdTFGQjYnOidcXHUwM0IxXFx1MDM0MicsJ1xcdTFGQjcnOidcXHUwM0IxXFx1MDM0MlxcdTAzQjknLCdcXHUxRkJDJzonXFx1MDNCMVxcdTAzQjknLCdcXHUxRkMyJzonXFx1MUY3NFxcdTAzQjknLCdcXHUxRkMzJzonXFx1MDNCN1xcdTAzQjknLCdcXHUxRkM0JzonXFx1MDNBRVxcdTAzQjknLCdcXHUxRkM2JzonXFx1MDNCN1xcdTAzNDInLCdcXHUxRkM3JzonXFx1MDNCN1xcdTAzNDJcXHUwM0I5JywnXFx1MUZDQyc6J1xcdTAzQjdcXHUwM0I5JywnXFx1MUZEMic6J1xcdTAzQjlcXHUwMzA4XFx1MDMwMCcsJ1xcdTFGRDMnOidcXHUwM0I5XFx1MDMwOFxcdTAzMDEnLCdcXHUxRkQ2JzonXFx1MDNCOVxcdTAzNDInLCdcXHUxRkQ3JzonXFx1MDNCOVxcdTAzMDhcXHUwMzQyJywnXFx1MUZFMic6J1xcdTAzQzVcXHUwMzA4XFx1MDMwMCcsJ1xcdTFGRTMnOidcXHUwM0M1XFx1MDMwOFxcdTAzMDEnLCdcXHUxRkU0JzonXFx1MDNDMVxcdTAzMTMnLCdcXHUxRkU2JzonXFx1MDNDNVxcdTAzNDInLCdcXHUxRkU3JzonXFx1MDNDNVxcdTAzMDhcXHUwMzQyJywnXFx1MUZGMic6J1xcdTFGN0NcXHUwM0I5JywnXFx1MUZGMyc6J1xcdTAzQzlcXHUwM0I5JywnXFx1MUZGNCc6J1xcdTAzQ0VcXHUwM0I5JywnXFx1MUZGNic6J1xcdTAzQzlcXHUwMzQyJywnXFx1MUZGNyc6J1xcdTAzQzlcXHUwMzQyXFx1MDNCOScsJ1xcdTFGRkMnOidcXHUwM0M5XFx1MDNCOScsJ1xcdUZCMDAnOidmZicsJ1xcdUZCMDEnOidmaScsJ1xcdUZCMDInOidmbCcsJ1xcdUZCMDMnOidmZmknLCdcXHVGQjA0JzonZmZsJywnXFx1RkIwNSc6J3N0JywnXFx1RkIwNic6J3N0JywnXFx1RkIxMyc6J1xcdTA1NzRcXHUwNTc2JywnXFx1RkIxNCc6J1xcdTA1NzRcXHUwNTY1JywnXFx1RkIxNSc6J1xcdTA1NzRcXHUwNTZCJywnXFx1RkIxNic6J1xcdTA1N0VcXHUwNTc2JywnXFx1RkIxNyc6J1xcdTA1NzRcXHUwNTZEJ307XG5cbi8vIE5vcm1hbGl6ZSByZWZlcmVuY2UgbGFiZWw6IGNvbGxhcHNlIGludGVybmFsIHdoaXRlc3BhY2Vcbi8vIHRvIHNpbmdsZSBzcGFjZSwgcmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FzZSBmb2xkLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDEsIHN0cmluZy5sZW5ndGggLSAxKS50cmltKCkucmVwbGFjZShyZWdleCwgZnVuY3Rpb24oJDApIHtcbiAgICAgICAgLy8gTm90ZTogdGhlcmUgaXMgbm8gbmVlZCB0byBjaGVjayBgaGFzT3duUHJvcGVydHkoJDApYCBoZXJlLlxuICAgICAgICAvLyBJZiBjaGFyYWN0ZXIgbm90IGZvdW5kIGluIGxvb2t1cCB0YWJsZSwgaXQgbXVzdCBiZSB3aGl0ZXNwYWNlLlxuICAgICAgICByZXR1cm4gbWFwWyQwXSB8fCAnICc7XG4gICAgfSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvbm9ybWFsaXplLXJlZmVyZW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiEgaHR0cDovL210aHMuYmUvcmVwZWF0IHYwLjIuMCBieSBAbWF0aGlhcyAqL1xuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuXHQoZnVuY3Rpb24oKSB7XG5cdFx0J3VzZSBzdHJpY3QnOyAvLyBuZWVkZWQgdG8gc3VwcG9ydCBgYXBwbHlgL2BjYWxsYCB3aXRoIGB1bmRlZmluZWRgL2BudWxsYFxuXHRcdHZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcblx0XHRcdC8vIElFIDggb25seSBzdXBwb3J0cyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBvbiBET00gZWxlbWVudHNcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSB7fTtcblx0XHRcdFx0dmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblx0XHRcdFx0dmFyIHJlc3VsdCA9ICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG9iamVjdCwgb2JqZWN0KSAmJiAkZGVmaW5lUHJvcGVydHk7XG5cdFx0XHR9IGNhdGNoKGVycm9yKSB7fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KCkpO1xuXHRcdHZhciByZXBlYXQgPSBmdW5jdGlvbihjb3VudCkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbnVsbCkge1xuXHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoKTtcblx0XHRcdH1cblx0XHRcdHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG5cdFx0XHQvLyBgVG9JbnRlZ2VyYFxuXHRcdFx0dmFyIG4gPSBjb3VudCA/IE51bWJlcihjb3VudCkgOiAwO1xuXHRcdFx0aWYgKG4gIT0gbikgeyAvLyBiZXR0ZXIgYGlzTmFOYFxuXHRcdFx0XHRuID0gMDtcblx0XHRcdH1cblx0XHRcdC8vIEFjY291bnQgZm9yIG91dC1vZi1ib3VuZHMgaW5kaWNlc1xuXHRcdFx0aWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHtcblx0XHRcdFx0dGhyb3cgUmFuZ2VFcnJvcigpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdFx0d2hpbGUgKG4pIHtcblx0XHRcdFx0aWYgKG4gJSAyID09IDEpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuID4gMSkge1xuXHRcdFx0XHRcdHN0cmluZyArPSBzdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0biA+Pj0gMTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0XHRpZiAoZGVmaW5lUHJvcGVydHkpIHtcblx0XHRcdGRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsICdyZXBlYXQnLCB7XG5cdFx0XHRcdCd2YWx1ZSc6IHJlcGVhdCxcblx0XHRcdFx0J2NvbmZpZ3VyYWJsZSc6IHRydWUsXG5cdFx0XHRcdCd3cml0YWJsZSc6IHRydWVcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IHJlcGVhdDtcblx0XHR9XG5cdH0oKSk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vc3RyaW5nLnByb3RvdHlwZS5yZXBlYXQvcmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZXNjYXBlWG1sID0gcmVxdWlyZSgnLi9jb21tb24nKS5lc2NhcGVYbWw7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwcm9kdWNlIGFuIEhUTUwgdGFnLlxudmFyIHRhZyA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJzLCBzZWxmY2xvc2luZykge1xuICAgIHZhciByZXN1bHQgPSAnPCcgKyBuYW1lO1xuICAgIGlmIChhdHRycyAmJiBhdHRycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGF0dHJpYjtcbiAgICAgICAgd2hpbGUgKChhdHRyaWIgPSBhdHRyc1tpXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcgJyArIGF0dHJpYlswXSArICc9XCInICsgYXR0cmliWzFdICsgJ1wiJztcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VsZmNsb3NpbmcpIHtcbiAgICAgICAgcmVzdWx0ICs9ICcgLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9ICc+JztcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHJlSHRtbFRhZyA9IC9cXDxbXj5dKlxcPi87XG52YXIgcmVVbnNhZmVQcm90b2NvbCA9IC9eamF2YXNjcmlwdDp8dmJzY3JpcHQ6fGZpbGU6fGRhdGE6L2k7XG52YXIgcmVTYWZlRGF0YVByb3RvY29sID0gL15kYXRhOmltYWdlXFwvKD86cG5nfGdpZnxqcGVnfHdlYnApL2k7XG5cbnZhciBwb3RlbnRpYWxseVVuc2FmZSA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHJldHVybiByZVVuc2FmZVByb3RvY29sLnRlc3QodXJsKSAmJlxuICAgICAgICAhcmVTYWZlRGF0YVByb3RvY29sLnRlc3QodXJsKTtcbn07XG5cbnZhciByZW5kZXJOb2RlcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG5cbiAgICB2YXIgYXR0cnM7XG4gICAgdmFyIGluZm9fd29yZHM7XG4gICAgdmFyIHRhZ25hbWU7XG4gICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xuICAgIHZhciBldmVudCwgbm9kZSwgZW50ZXJpbmc7XG4gICAgdmFyIGJ1ZmZlciA9IFwiXCI7XG4gICAgdmFyIGxhc3RPdXQgPSBcIlxcblwiO1xuICAgIHZhciBkaXNhYmxlVGFncyA9IDA7XG4gICAgdmFyIGdyYW5kcGFyZW50O1xuICAgIHZhciBvdXQgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChkaXNhYmxlVGFncyA+IDApIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSBzLnJlcGxhY2UocmVIdG1sVGFnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcztcbiAgICAgICAgfVxuICAgICAgICBsYXN0T3V0ID0gcztcbiAgICB9O1xuICAgIHZhciBlc2MgPSB0aGlzLmVzY2FwZTtcbiAgICB2YXIgY3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxhc3RPdXQgIT09ICdcXG4nKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gJ1xcbic7XG4gICAgICAgICAgICBsYXN0T3V0ID0gJ1xcbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcInJlbmRlcmluZ1wiKTsgfVxuXG4gICAgd2hpbGUgKChldmVudCA9IHdhbGtlci5uZXh0KCkpKSB7XG4gICAgICAgIGVudGVyaW5nID0gZXZlbnQuZW50ZXJpbmc7XG4gICAgICAgIG5vZGUgPSBldmVudC5ub2RlO1xuXG4gICAgICAgIGF0dHJzID0gW107XG4gICAgICAgIGlmIChvcHRpb25zLnNvdXJjZXBvcykge1xuICAgICAgICAgICAgdmFyIHBvcyA9IG5vZGUuc291cmNlcG9zO1xuICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydkYXRhLXNvdXJjZXBvcycsIFN0cmluZyhwb3NbMF1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzBdWzFdKSArICctJyArIFN0cmluZyhwb3NbMV1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzFdWzFdKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVGV4dCc6XG4gICAgICAgICAgICBvdXQoZXNjKG5vZGUubGl0ZXJhbCwgZmFsc2UpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1NvZnRicmVhayc6XG4gICAgICAgICAgICBvdXQodGhpcy5zb2Z0YnJlYWspO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSGFyZGJyZWFrJzpcbiAgICAgICAgICAgIG91dCh0YWcoJ2JyJywgW10sIHRydWUpKTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbXBoJzpcbiAgICAgICAgICAgIG91dCh0YWcoZW50ZXJpbmcgPyAnZW0nIDogJy9lbScpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1N0cm9uZyc6XG4gICAgICAgICAgICBvdXQodGFnKGVudGVyaW5nID8gJ3N0cm9uZycgOiAnL3N0cm9uZycpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0h0bWwnOlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2FmZSkge1xuICAgICAgICAgICAgICAgIG91dCgnPCEtLSByYXcgSFRNTCBvbWl0dGVkIC0tPicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQobm9kZS5saXRlcmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xpbmsnOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEob3B0aW9ucy5zYWZlICYmIHBvdGVudGlhbGx5VW5zYWZlKG5vZGUuZGVzdGluYXRpb24pKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnaHJlZicsIGVzYyhub2RlLmRlc3RpbmF0aW9uLCB0cnVlKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsndGl0bGUnLCBlc2Mobm9kZS50aXRsZSwgdHJ1ZSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnYScsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9hJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc2FibGVUYWdzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNhZmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICBwb3RlbnRpYWxseVVuc2FmZShub2RlLmRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0KCc8aW1nIHNyYz1cIlwiIGFsdD1cIicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0KCc8aW1nIHNyYz1cIicgKyBlc2Mobm9kZS5kZXN0aW5hdGlvbiwgdHJ1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBhbHQ9XCInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlVGFncyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlVGFncyAtPSAxO1xuICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlVGFncyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0KCdcIiB0aXRsZT1cIicgKyBlc2Mobm9kZS50aXRsZSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dCgnXCIgLz4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgICAgIG91dCh0YWcoJ2NvZGUnKSArIGVzYyhub2RlLmxpdGVyYWwsIGZhbHNlKSArIHRhZygnL2NvZGUnKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdEb2N1bWVudCc6XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQYXJhZ3JhcGgnOlxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQgPSBub2RlLnBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoZ3JhbmRwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBncmFuZHBhcmVudC50eXBlID09PSAnTGlzdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbmRwYXJlbnQubGlzdFRpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygncCcsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9wJykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdCbG9ja1F1b3RlJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnYmxvY2txdW90ZScsIGF0dHJzKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvYmxvY2txdW90ZScpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSXRlbSc6XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCdsaScsIGF0dHJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy9saScpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgICAgICB0YWduYW1lID0gbm9kZS5saXN0VHlwZSA9PT0gJ0J1bGxldCcgPyAndWwnIDogJ29sJztcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG5vZGUubGlzdFN0YXJ0O1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCAhPT0gbnVsbCAmJiBzdGFydCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnc3RhcnQnLCBzdGFydC50b1N0cmluZygpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZyh0YWduYW1lLCBhdHRycykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hlYWRlcic6XG4gICAgICAgICAgICB0YWduYW1lID0gJ2gnICsgbm9kZS5sZXZlbDtcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZyh0YWduYW1lLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvJyArIHRhZ25hbWUpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQ29kZUJsb2NrJzpcbiAgICAgICAgICAgIGluZm9fd29yZHMgPSBub2RlLmluZm8gPyBub2RlLmluZm8uc3BsaXQoL1xccysvKSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluZm9fd29yZHMubGVuZ3RoID4gMCAmJiBpbmZvX3dvcmRzWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnY2xhc3MnLCAnbGFuZ3VhZ2UtJyArIGVzYyhpbmZvX3dvcmRzWzBdLCB0cnVlKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcoJ3ByZScpICsgdGFnKCdjb2RlJywgYXR0cnMpKTtcbiAgICAgICAgICAgIG91dChlc2Mobm9kZS5saXRlcmFsLCBmYWxzZSkpO1xuICAgICAgICAgICAgb3V0KHRhZygnL2NvZGUnKSArIHRhZygnL3ByZScpKTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIdG1sQmxvY2snOlxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNhZmUpIHtcbiAgICAgICAgICAgICAgICBvdXQoJzwhLS0gcmF3IEhUTUwgb21pdHRlZCAtLT4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KG5vZGUubGl0ZXJhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9yaXpvbnRhbFJ1bGUnOlxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcoJ2hyJywgYXR0cnMsIHRydWUpKTtcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgXCJVbmtub3duIG5vZGUgdHlwZSBcIiArIG5vZGUudHlwZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwicmVuZGVyaW5nXCIpOyB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8vIFRoZSBIdG1sUmVuZGVyZXIgb2JqZWN0LlxuZnVuY3Rpb24gSHRtbFJlbmRlcmVyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlZmF1bHQgb3B0aW9uczpcbiAgICAgICAgc29mdGJyZWFrOiAnXFxuJywgLy8gYnkgZGVmYXVsdCwgc29mdCBicmVha3MgYXJlIHJlbmRlcmVkIGFzIG5ld2xpbmVzIGluIEhUTUxcbiAgICAgICAgLy8gc2V0IHRvIFwiPGJyIC8+XCIgdG8gbWFrZSB0aGVtIGhhcmQgYnJlYWtzXG4gICAgICAgIC8vIHNldCB0byBcIiBcIiBpZiB5b3Ugd2FudCB0byBpZ25vcmUgbGluZSB3cmFwcGluZyBpbiBzb3VyY2VcbiAgICAgICAgZXNjYXBlOiBlc2NhcGVYbWwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHJlbmRlcjogcmVuZGVyTm9kZXNcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWxSZW5kZXJlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2h0bWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlc2NhcGVYbWwgPSByZXF1aXJlKCcuL2NvbW1vbicpLmVzY2FwZVhtbDtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHByb2R1Y2UgYW4gWE1MIHRhZy5cbnZhciB0YWcgPSBmdW5jdGlvbihuYW1lLCBhdHRycywgc2VsZmNsb3NpbmcpIHtcbiAgICB2YXIgcmVzdWx0ID0gJzwnICsgbmFtZTtcbiAgICBpZiAoYXR0cnMgJiYgYXR0cnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBhdHRyaWI7XG4gICAgICAgIHdoaWxlICgoYXR0cmliID0gYXR0cnNbaV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnICcgKyBhdHRyaWJbMF0gKyAnPVwiJyArIGF0dHJpYlsxXSArICdcIic7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGZjbG9zaW5nKSB7XG4gICAgICAgIHJlc3VsdCArPSAnIC8nO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSAnPic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciByZVhNTFRhZyA9IC9cXDxbXj5dKlxcPi87XG5cbnZhciB0b1RhZ05hbWUgPSBmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMV8kMlwiKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIHJlbmRlck5vZGVzID0gZnVuY3Rpb24oYmxvY2spIHtcblxuICAgIHZhciBhdHRycztcbiAgICB2YXIgdGFnbmFtZTtcbiAgICB2YXIgd2Fsa2VyID0gYmxvY2sud2Fsa2VyKCk7XG4gICAgdmFyIGV2ZW50LCBub2RlLCBlbnRlcmluZztcbiAgICB2YXIgYnVmZmVyID0gXCJcIjtcbiAgICB2YXIgbGFzdE91dCA9IFwiXFxuXCI7XG4gICAgdmFyIGRpc2FibGVUYWdzID0gMDtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSAwO1xuICAgIHZhciBpbmRlbnQgPSAnICAnO1xuICAgIHZhciB1bmVzY2FwZWRDb250ZW50cztcbiAgICB2YXIgY29udGFpbmVyO1xuICAgIHZhciBzZWxmQ2xvc2luZztcbiAgICB2YXIgbm9kZXR5cGU7XG5cbiAgICB2YXIgb3V0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPiAwKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcy5yZXBsYWNlKHJlWE1MVGFnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcztcbiAgICAgICAgfVxuICAgICAgICBsYXN0T3V0ID0gcztcbiAgICB9O1xuICAgIHZhciBlc2MgPSB0aGlzLmVzY2FwZTtcbiAgICB2YXIgY3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxhc3RPdXQgIT09ICdcXG4nKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gJ1xcbic7XG4gICAgICAgICAgICBsYXN0T3V0ID0gJ1xcbic7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZW50TGV2ZWw7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gaW5kZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJyZW5kZXJpbmdcIik7IH1cblxuICAgIGJ1ZmZlciArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XFxuJztcbiAgICBidWZmZXIgKz0gJzwhRE9DVFlQRSBDb21tb25NYXJrIFNZU1RFTSBcIkNvbW1vbk1hcmsuZHRkXCI+XFxuJztcblxuICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICBlbnRlcmluZyA9IGV2ZW50LmVudGVyaW5nO1xuICAgICAgICBub2RlID0gZXZlbnQubm9kZTtcbiAgICAgICAgbm9kZXR5cGUgPSBub2RlLnR5cGU7XG5cbiAgICAgICAgY29udGFpbmVyID0gbm9kZS5pc0NvbnRhaW5lcjtcbiAgICAgICAgc2VsZkNsb3NpbmcgPSBub2RldHlwZSA9PT0gJ0hvcml6b250YWxSdWxlJyB8fCBub2RldHlwZSA9PT0gJ0hhcmRicmVhaycgfHxcbiAgICAgICAgICAgIG5vZGV0eXBlID09PSAnU29mdGJyZWFrJztcbiAgICAgICAgdW5lc2NhcGVkQ29udGVudHMgPSBub2RldHlwZSA9PT0gJ0h0bWwnIHx8IG5vZGV0eXBlID09PSAnSHRtbElubGluZSc7XG4gICAgICAgIHRhZ25hbWUgPSB0b1RhZ05hbWUobm9kZXR5cGUpO1xuXG4gICAgICAgIGlmIChlbnRlcmluZykge1xuXG4gICAgICAgICAgICBhdHRycyA9IFtdO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGV0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdMaXN0JzpcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0VHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsndHlwZScsIG5vZGUubGlzdFR5cGUudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0U3RhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3N0YXJ0JywgU3RyaW5nKG5vZGUubGlzdFN0YXJ0KV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0VGlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3RpZ2h0JywgKG5vZGUubGlzdFRpZ2h0ID8gJ3RydWUnIDogJ2ZhbHNlJyldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGRlbGltID0gbm9kZS5saXN0RGVsaW1pdGVyO1xuICAgICAgICAgICAgICAgIGlmIChkZWxpbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsaW13b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxpbSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbXdvcmQgPSAncGVyaW9kJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltd29yZCA9ICdwYXJlbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2RlbGltaXRlcicsIGRlbGltd29yZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NvZGVCbG9jayc6XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnaW5mbycsIG5vZGUuaW5mb10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0hlYWRlcic6XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2xldmVsJywgU3RyaW5nKG5vZGUubGV2ZWwpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnZGVzdGluYXRpb24nLCBub2RlLmRlc3RpbmF0aW9uXSk7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3RpdGxlJywgbm9kZS50aXRsZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNvdXJjZXBvcykge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBub2RlLnNvdXJjZXBvcztcbiAgICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydzb3VyY2Vwb3MnLCBTdHJpbmcocG9zWzBdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhwb3NbMF1bMV0pICsgJy0nICsgU3RyaW5nKHBvc1sxXVswXSkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzFdWzFdKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcodGFnbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nKSk7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNvbnRhaW5lciAmJiAhc2VsZkNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGl0ID0gbm9kZS5saXRlcmFsO1xuICAgICAgICAgICAgICAgIGlmIChsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0KHVuZXNjYXBlZENvbnRlbnRzID8gbGl0IDogZXNjKGxpdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvJyArIHRhZ25hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGVudExldmVsIC09IDE7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwicmVuZGVyaW5nXCIpOyB9XG4gICAgYnVmZmVyICs9ICdcXG4nO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG4vLyBUaGUgWG1sUmVuZGVyZXIgb2JqZWN0LlxuZnVuY3Rpb24gWG1sUmVuZGVyZXIob3B0aW9ucyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZGVmYXVsdCBvcHRpb25zOlxuICAgICAgICBzb2Z0YnJlYWs6ICdcXG4nLCAvLyBieSBkZWZhdWx0LCBzb2Z0IGJyZWFrcyBhcmUgcmVuZGVyZWQgYXMgbmV3bGluZXMgaW4gSFRNTFxuICAgICAgICAvLyBzZXQgdG8gXCI8YnIgLz5cIiB0byBtYWtlIHRoZW0gaGFyZCBicmVha3NcbiAgICAgICAgLy8gc2V0IHRvIFwiIFwiIGlmIHlvdSB3YW50IHRvIGlnbm9yZSBsaW5lIHdyYXBwaW5nIGluIHNvdXJjZVxuICAgICAgICBlc2NhcGU6IGVzY2FwZVhtbCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgcmVuZGVyOiByZW5kZXJOb2Rlc1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWG1sUmVuZGVyZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi94bWwuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzEwLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICdhbHNjJztcclxuaW1wb3J0ICogYXMgYWdlbnQgZnJvbSBcInN1cGVyYWdlbnRcIjtcclxuaW1wb3J0ICogYXMgYXN5bmMgZnJvbSBcImFzeW5jXCI7XHJcblxyXG5pbXBvcnQge3VybCxmbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcbmltcG9ydCBTYW1wbGVGaWVsZCBmcm9tIFwiLi8uLi92aWV3L2NvbnRlbnQvU2FtcGxlRmllbGQuanNcIjtcclxuXHJcbmNsYXNzIFNhbXBsZU1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcbiAgICAvKipAcmV0dXJuIHtzdHJpbmd9Ki9cclxuICAgIGdldCBDT05GSUdfTE9BREVEKCl7cmV0dXJuIFwiQ09ORklHX0xPQURFRFwiO307XHJcbiAgICAvKipAcmV0dXJuIHtzdHJpbmd9Ki9cclxuICAgIGdldCBUT0dHTEVfVE9fU0FNUExFKCl7cmV0dXJuIFwiVE9HR0xFX1RPX1NBTVBMRVwiO307XHJcbiAgICAvKipAcmV0dXJuIHtzdHJpbmd9Ki9cclxuICAgIC8vZ2V0IFJFQURZX1NBTVBMRSgpe3JldHVybiBcIlJFQURZX1NBTVBMRVwiO307XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICBpZighKFNhbXBsZU1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgU2FtcGxlTWFuYWdlcikpe1xyXG4gICAgICAgICAgICBTYW1wbGVNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTYW1wbGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTYW1wbGVNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zYW1wbGVzRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuc2FtcGxlc0RpY3QgPSB7fTsvL+S+i+WtkOS7o+eggeaWh+S7tlxyXG4gICAgICAgIHRoaXMuY3VyckV4YW1wbGUgPSBudWxsO1xyXG4gICAgICAgIGFnZW50LmdldChcImRpc3QvcG9zdF9kYXRhLmpzb25cIikudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNEYXRhID0gSlNPTi5wYXJzZShyZXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNEaWN0W1wiSEVBRFwiXSA9IHRoaXMuc2FtcGxlc0RhdGEucG9zdHNbMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0lkRGljdCA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgaWQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZXNEYXRhLnBvc3RzLmZvckVhY2goKHBvc3QpPT57XHJcbiAgICAgICAgICAgICAgICBwb3N0LmlkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICBpZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVzRGljdFtwb3N0LnRpdGxlK3Bvc3QuZGF0ZV0gPSBwb3N0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVzSWREaWN0W3Bvc3QuaWRdID0gcG9zdDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpbnNpc2hMb2FkQ29uZmlnKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hZGRMaXN0ZW5lcih0aGlzLlJFQURZX1NBTVBMRSx0aGlzLnJlYWR5U2FtcGxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgZmluc2lzaExvYWRDb25maWcoKXtcclxuICAgICAgICB0aGlzLmVtaXQodGhpcy5DT05GSUdfTE9BREVEKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRvU2FtcGxlKFwiSEVBRFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUb1NhbXBsZShpZCl7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyRXhhbXBsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckV4YW1wbGUuZGVzdHJ1Y3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzYW1wbGUgPSB0aGlzLnNhbXBsZXNEaWN0W2lkXTtcclxuICAgICAgICBpZihzYW1wbGUpe1xyXG4gICAgICAgICAgICBpZighc2FtcGxlW1wibWFyZGRvd25cIl0gJiYgIXNhbXBsZVtcInNjcmlwdFwiXSl7XHJcbiAgICAgICAgICAgICAgICBhc3luYy5zZXJpZXMoW1xyXG4gICAgICAgICAgICAgICAgICAgIChuZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudC5nZXQodXJsLmpvaW4oXCJkaXN0L3Bvc3RcIixzYW1wbGUucGF0aCxcIi9FbnRyeS5qc1wiKSkuZW5kKChlcnIscmVzKT0+e25leHQoZXJyLHJlcy50ZXh0KTt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChuZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudC5nZXQodXJsLmpvaW4oXCJzcmMtcG9zdC9cIixzYW1wbGUucGF0aCxcIk5vdGUubWRcIikpLmVuZCgoZXJyLHJlcyk9PntuZXh0KGVycixyZXMudGV4dCk7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSwoZXJyLCByZXN1bHRzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNfc2NyaXB0ID0gcmVzdWx0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzX21hcmtkb3duID0gcmVzdWx0c1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZhbC5hcHBseSh0aGlzLCBbXCJ2YXIgc2NyaXB0ID1cIiArIHJlc19zY3JpcHRdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNjcmlwdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzY3JpcHQucHJvdG90eXBlICYmIHNjcmlwdC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTYW1wbGVGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVbXCJzY3JpcHRcIl0gPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibG9hZCBzYW1wbGUgc2NyaXB0IGVycm9yXCIsIHNhbXBsZS5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlW1wibWFya2Rvd25cIl09cmVzX21hcmtkb3duO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5UT0dHTEVfVE9fU0FNUExFLHtzYW1wbGU6c2FtcGxlfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5UT0dHTEVfVE9fU0FNUExFLHtzYW1wbGU6c2FtcGxlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZHlTYW1wbGUoaWQsZGF0YSl7XHJcbiAgICAgICAgdmFyIHNhbXBsZSA9IHRoaXMuc2FtcGxlc0lkRGljdFtpZF07XHJcbiAgICAgICAgaWYoc2FtcGxlKXtcclxuICAgICAgICAgICAgaWYoIXNhbXBsZS5ydW5pbmdTY3JpcHQpe1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlLnJ1bmluZ1NjcmlwdCA9IG5ldyBzYW1wbGUuc2NyaXB0KHVybC5qb2luKFwic3JjLXBvc3QvXCIsc2FtcGxlLnBhdGgpLHVybC5qb2luKFwiZGlzdC9wb3N0XCIsc2FtcGxlLnBhdGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzYW1wbGUucnVuaW5nU2NyaXB0LmxhdW5jaChkYXRhLmNhbnZhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckV4YW1wbGUgPSBzYW1wbGUucnVuaW5nU2NyaXB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlTWFuYWdlci5pbnN0YW5jZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy9jb3JlL1NhbXBsZU1hbmFnZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcblxyXG5leHBvcnRzLkV2ZW50RGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qc1wiKTtcclxuLy9leHBvcnRzLkFqYXggID0gcmVxdWlyZShcIi4vZGlzdC9hamF4L0FqYXhQcm94eS5qc1wiKVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Fsc2MvZW50cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3V0aWxzSnMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcblxuLy92YXIgZXZlbnRzTWFwID0gdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIj9TeW1ib2woKTpcIl9fZXZlbnRzTWFwX19cIjtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzSnMpO1xuXG52YXIgZXZlbnRzTWFwID0gXCJfX2V2ZW50c01hcF9fXCI7XG5cbnZhciBFdmVudERpc3BhdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50RGlzcGF0Y2hlcik7XG5cbiAgICAgICAgdGhpc1tldmVudHNNYXBdID0ge307XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiDmtL7lj5HkuIDkuKrkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqL1xuXG4gICAgX2NyZWF0ZUNsYXNzKEV2ZW50RGlzcGF0Y2hlciwgW3tcbiAgICAgICAga2V5OiBcImVtaXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudG1hcCA9IHRoaXNbZXZlbnRzTWFwXVtldmVudF07XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudG1hcCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXRpbHMubm90aWZ5QXJyYXkoZXZlbnRtYXAsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6L+U5Zue5omA5pyJ5Zue6LCD5pa55rOVXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibGlzdGVuZXJzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50c01hcF1bZXZlbnRdID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24gKGJpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW4uY2FsbGJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImhhc0xpc3RlbmVyc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXNbZXZlbnRzTWFwXVtldmVudF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tldmVudHNNYXBdW2V2ZW50XS5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAgICAgKiBAcGFyYW0gcHJpb3JpdHlcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhZGRMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBudWxsLCBwcmlvcml0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnp7vpmaTkuIDlj6rkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZUxpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHV0aWxzLnVucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+mZpOaJgOacieS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZUFsbExpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2TLOeugOaYk+inpuWPkeWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZMs5ZSv5LiA6Kem5Y+R5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwib25jZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRXZlbnREaXNwYXRjaGVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudERpc3BhdGNoZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltVjJaVzUwY3k5RmRtVnVkRVJwYzNCaGRHTm9aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSMEVzV1VGQldTeERRVUZET3pzN096czdPenM3T3p0MVFrRkRWU3haUVVGWk96czdPMGxCUVhaQ0xFdEJRVXM3TzBGQlIycENMRWxCUVVrc1UwRkJVeXhIUVVGSExHVkJRV1VzUTBGQlF6czdTVUZETVVJc1pVRkJaVHRCUVVOT0xHRkJSRlFzWlVGQlpTeEhRVU5JT3poQ1FVUmFMR1ZCUVdVN08wRkJSV0lzV1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVONFFqczdPenM3T3pzN2FVSkJTRU1zWlVGQlpUczdaVUZWWWl4alFVRkRMRXRCUVVzc1JVRkJWenRCUVVOcVFpeG5Ra0ZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTNSRExHZENRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3YTBSQlJteENMRWxCUVVrN1FVRkJTaXgzUWtGQlNUczdPMEZCUjFnc2NVSkJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGQk8yRkJRM0JETzFOQlEwbzdPenM3T3pzN096dGxRVTlSTEcxQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOaUxHZENRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEY0VNc1owSkJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVTTdRVUZEVUN4elFrRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5hTEc5Q1FVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUTI1RE8wRkJRMFFzYlVKQlFVOHNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVExFZEJRVWNzUlVGQlF6dEJRVU16UWl4MVFrRkJUeXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETzJGQlEzWkNMRU5CUVVNc1EwRkJRenRUUVVOT096czdaVUZGVnl4elFrRkJReXhMUVVGTExFVkJRVU03UVVGRFppeG5Ra0ZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUXp0QlFVRkRMSFZDUVVGUExFdEJRVXNzUTBGQlF6dGhRVUZETzBGQlF6RkRMRzFDUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVU1zUTBGQlF5eERRVUZETzFOQlF6RkRPenM3T3pzN096czdPenRsUVZOVkxIRkNRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU12UXl4cFFrRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xTkJRM0JHT3pzN096czdPenM3TzJWQlVXRXNkMEpCUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFZRVUZWTEVWQlFVVTdRVUZEZUVNc2FVSkJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1UwRkRkRVU3T3pzN096czdPMlZCVFdkQ0xESkNRVUZETEV0QlFVc3NSVUZCUlR0QlFVTnlRaXhuUWtGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU12UWpzN096czdPenM3TzJWQlQwTXNXVUZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRk8wRkJRMmhDTEdsQ1FVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VTBGRGVFUTdPenM3T3pzN096dGxRVTlITEdOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVOc1FpeHBRa0ZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOb1JqczdPMWRCYmtaRExHVkJRV1U3T3p0eFFrRnpSazRzWlVGQlpTSXNJbVpwYkdVaU9pSmxkbVZ1ZEhNdlJYWmxiblJFYVhOd1lYUmphR1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEhKY2JpQXFJRU55WldGMFpXUWdZbmtnZEc5dGJYbGFXazBnYjI0Z01qQXhOUzg0THpRdVhISmNiaUFxTDF4eVhHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2NseHVhVzF3YjNKMElDb2dZWE1nZFhScGJITWdabkp2YlNCY0lpNHZkWFJwYkhNdWFuTmNJanRjY2x4dVhISmNiaTh2ZG1GeUlHVjJaVzUwYzAxaGNDQTlJSFI1Y0dWdlppQlRlVzFpYjJ3OVBUMWNJbVoxYm1OMGFXOXVYQ0kvVTNsdFltOXNLQ2s2WENKZlgyVjJaVzUwYzAxaGNGOWZYQ0k3WEhKY2JuWmhjaUJsZG1WdWRITk5ZWEFnUFNCY0lsOWZaWFpsYm5SelRXRndYMTljSWp0Y2NseHVZMnhoYzNNZ1JYWmxiblJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTmJaWFpsYm5SelRXRndYU0E5SUh0OU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZzVyUys1WStSNUxpQTVMaXE1THFMNUx1MlhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JoY21kelhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHVnRhWFFvWlhabGJuUXNJQzR1TG1GeVozTXBJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdaWFpsYm5SdFlYQWdQU0IwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZE8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNoQmNuSmhlUzVwYzBGeWNtRjVLR1YyWlc1MGJXRndLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NXViM1JwWm5sQmNuSmhlU2hsZG1WdWRHMWhjQ3dnWVhKbmN5bGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURvdjVUbG01N21pWURtbklubG01N29zSVBtbHJubXM1VmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2V5cDlYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJR3hwYzNSbGJtVnljeWhsZG1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1LQ0Z5WlhOMWJIUXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQmJYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0bGRtVnVkSE5OWVhCZFcyVjJaVzUwWFNBOUlISmxjM1ZzZER0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2RDNXRZWEFvWm5WdVkzUnBiMjRvWW1sdUtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdKcGJpNWpZV3hzWW1GamF6dGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm9ZWE5NYVhOMFpXNWxjbk1vWlhabGJuUXBlMXh5WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkS1h0eVpYUjFjbTRnWm1Gc2MyVTdmVnh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZExteGxibWQwYUQ0d08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZzVyZTc1WXFnNUxpQTVZK3E1TDZtNVpDczVabW9YSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaWFpsYm5SY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCallXeHNZbUZqYTF4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhSb2FYTlBZbXBsWTNSY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCd2NtbHZjbWwwZVZ4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCaFpHUk1hWE4wWlc1bGNpaGxkbVZ1ZEN3Z1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUXNJSEJ5YVc5eWFYUjVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RYUnBiSE11Y21WbmFYTjBUbTkwYVdaNUtIUm9hWE5iWlhabGJuUnpUV0Z3WFN3Z1pYWmxiblFzSUdOaGJHeGlZV05yTENCMGFHbHpUMkpxWldOMExDQnVkV3hzTENCd2NtbHZjbWwwZVNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEbnA3dnBtYVRrdUlEbGo2cmt2cWJsa0t6bG1haGNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUdOaGJHeGlZV05yWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZEdocGMwOWlhbVZqZEZ4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCeVpXMXZkbVZNYVhOMFpXNWxjaWhsZG1WdWRDd2dZMkZzYkdKaFkyc3NJSFJvYVhOUFltcGxZM1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQjFkR2xzY3k1MWJuSmxaMmx6ZEU1dmRHbG1lU2gwYUdselcyVjJaVzUwYzAxaGNGMHNJR1YyWlc1MExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURucDd2cG1hVG1pWURtbklua3ZxYmxrS3psbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J5WlcxdmRtVkJiR3hNYVhOMFpXNWxjaWhsZG1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTmJaWFpsYm5SelRXRndYVnRsZG1WdWRGMGdQU0JiWFR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSU9XOWt5em5yb0RtbUpQb3A2YmxqNUhsbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05oYkd4aVlXTnJYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJRzl1S0dWMlpXNTBMQ0JqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXlrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEbHZaTXM1WlN2NUxpQTZLZW01WStSNVptb1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JqWVd4c1ltRmphMXh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J2Ym1ObEtHVjJaVzUwTENCallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFYwYVd4ekxuSmxaMmx6ZEU1dmRHbG1lU2gwYUdselcyVjJaVzUwYzAxaGNGMHNJR1YyWlc1MExDQmpZV3hzWW1GamF5d2diblZzYkN3Z2JuVnNiQ3dnYm5Wc2JDd2dkSEoxWlNrN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElFVjJaVzUwUkdsemNHRjBZMmhsY2pzaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWk5emIzVnlZMlV2SW4wPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Fsc2MvZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xOS5cclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlZ2lzdE5vdGlmeSA9IHJlZ2lzdE5vdGlmeTtcbmV4cG9ydHMudW5yZWdpc3ROb3RpZnkgPSB1bnJlZ2lzdE5vdGlmeTtcbmV4cG9ydHMubm90aWZ5ID0gbm90aWZ5O1xuZXhwb3J0cy5ub3RpZnlBcnJheSA9IG5vdGlmeUFycmF5O1xuXG5mdW5jdGlvbiByZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCwgcGFyYW0sIHByaW9yaXR5LCBvbmNlKSB7XG4gICAgLy8scmVzZXJ2ZT86YW55XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIG5vdGlmeW1hcFtuYW1lXSA9IFtdO1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG5cbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgaW5zZXJ0SW5kZXggPSAtMTtcbiAgICB2YXIgYmluO1xuXG4gICAgaWYgKHByaW9yaXR5ID09PSB1bmRlZmluZWQpIHByaW9yaXR5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJpbiA9IGFycltpXTtcbiAgICAgICAgaWYgKGJpbiAmJiBiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8v6Ziy5q2i6YeN5aSN5o+S5YWlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpbiAmJiBpbnNlcnRJbmRleCA9PSAtMSAmJiBiaW4ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xuICAgICAgICAgICAgaW5zZXJ0SW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluID0geyBjYWxsYmFjazogY2FsbGJhY2ssIHRoaXNPYmplY3Q6IHRoaXNPYmplY3QsIHBhcmFtOiBwYXJhbSA/IHBhcmFtIDogW10sIHByaW9yaXR5OiBwcmlvcml0eSwgb25jZTogb25jZSB9O1xuICAgIGlmIChpbnNlcnRJbmRleCAhPSAtMSkge1xuICAgICAgICBhcnIuc3BsaWNlKGluc2VydEluZGV4LCAwLCBiaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyci5wdXNoKGJpbik7XG4gICAgfVxuICAgIG5vdGlmeW1hcFtuYW1lXSA9IGFycjtcbn1cblxuZnVuY3Rpb24gdW5yZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKSByZXR1cm47XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIG5vdGlmeW1hcFtuYW1lXSA9IGFyci5maWx0ZXIoZnVuY3Rpb24gKGJpbikge1xuICAgICAgICAgICAgcmV0dXJuICEoYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5KG5vdGlmeW1hcCwgbmFtZSwgcGFyYW0pIHtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeUFycmF5KGFyciwgcGFyYW0pIHtcbiAgICBmb3IgKHZhciBpIGluIGFycikge1xuICAgICAgICBpZiAodHlwZW9mICtpID09PSBcIm51bWJlclwiICYmICFpc05hTigraSkpIHtcbiAgICAgICAgICAgIHZhciBiaW4gPSBhcnJbaV07XG4gICAgICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmICghcGFyYW0pIHBhcmFtID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGJpbi5wYXJhbSkgcGFyYW0gPSBiaW4ucGFyYW0uY29uY2F0KHBhcmFtKTtcbiAgICAgICAgICAgICAgICBiaW4uY2FsbGJhY2suYXBwbHkoYmluLnRoaXNPYmplY3QsIHBhcmFtKTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1WMlpXNTBjeTkxZEdsc2N5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3p0QlFVbFBMRk5CUVZNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZETEVsQlFVa3NSVUZCUlRzN1FVRkRkRVlzVVVGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUXpGRExGRkJRVWtzUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRk1VSXNVVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU40UWl4UlFVRkpMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU55UWl4UlFVRkpMRWRCUVVjc1EwRkJRenM3UVVGRlVpeFJRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU40UXl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRemRDTEZkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFlpeFpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4TFFVRkxMRlZCUVZVc1JVRkJSVHRCUVVOdVJTeHRRa0ZCVHl4TFFVRkxMRU5CUVVNN1UwRkRhRUk3UVVGRFJDeFpRVUZKTEVkQlFVY3NTVUZCU1N4WFFVRlhMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRVZCUVVVN1FVRkRja1FzZFVKQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRia0k3UzBGRFNqczdRVUZGUkN4UFFVRkhMRWRCUVVjc1JVRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUjBGQlJ5eExRVUZMTEVkQlFVY3NSVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUXl4RFFVRkRPMEZCUXpkSExGRkJRVWtzVjBGQlZ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTI1Q0xGZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dExRVU51UXl4TlFVTkpPMEZCUTBRc1YwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnFRanRCUVVORUxHRkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1EwRkRla0k3TzBGQlJVMHNVMEZCVXl4alFVRmpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNWVUZCVlN4RlFVRkZPMEZCUTJ4RkxGRkJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVNc1QwRkJUenRCUVVNMVFpeFJRVUZKTEVkQlFVY3NSMEZCUnl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRE1VSXNVVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRUQ3hwUWtGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlV5eEhRVUZITEVWQlFVTTdRVUZEZEVNc2JVSkJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeExRVUZMTEZWQlFWVXNRMEZCUVN4QlFVRkRMRU5CUVVFN1UwRkRka1VzUTBGQlF5eERRVUZETzB0QlEwNDdRMEZEU2pzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSVHRCUVVNelF5eFJRVUZKTEVkQlFVY3NSMEZCUnl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRE1VSXNVVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRUQ3h0UWtGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVONFFpeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1MRTFCUVUwN1FVRkRTQ3hsUVVGUExFdEJRVXNzUTBGQlF6dExRVU5vUWp0RFFVTktPenRCUVVWTkxGTkJRVk1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVN1FVRkRjRU1zVTBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRaaXhaUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVTTdRVUZEY0VNc1owSkJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOcVFpeG5Ra0ZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU55UWl4dlFrRkJTU3hEUVVGRExFdEJRVXNzUlVGQlF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNSQ0xHOUNRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRemxETEcxQ1FVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRekZETEc5Q1FVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVU03UVVGRFZDeDFRa0ZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNCQ08yRkJRMG83VTBGRFNqdExRVU5LTzBOQlEwb2lMQ0ptYVd4bElqb2laWFpsYm5SekwzVjBhV3h6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEhKY2JpQXFJRU55WldGMFpXUWdZbmtnZEc5dGJYbGFXazBnYjI0Z01qQXhOUzg0THpFNUxseHlYRzRnS2k5Y2NseHVYSEpjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ5WldkcGMzUk9iM1JwWm5rb2JtOTBhV1o1YldGd0xDQnVZVzFsTENCallXeHNZbUZqYXl3Z2RHaHBjMDlpYW1WamRDd2djR0Z5WVcwc0lIQnlhVzl5YVhSNUxHOXVZMlVwSUhzdkx5eHlaWE5sY25abFB6cGhibmxjY2x4dUlDQWdJR2xtSUNnaGJtOTBhV1o1YldGd1cyNWhiV1ZkS1c1dmRHbG1lVzFoY0Z0dVlXMWxYU0E5SUZ0ZE8xeHlYRzRnSUNBZ2RtRnlJR0Z5Y2lBOUlHNXZkR2xtZVcxaGNGdHVZVzFsWFR0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYkdWdVozUm9JRDBnWVhKeUxteGxibWQwYUR0Y2NseHVJQ0FnSUhaaGNpQnBibk5sY25SSmJtUmxlQ0E5SUMweE8xeHlYRzRnSUNBZ2RtRnlJR0pwYmp0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvY0hKcGIzSnBkSGtnUFQwOUlIVnVaR1ZtYVc1bFpDbHdjbWx2Y21sMGVTQTlJREE3WEhKY2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnWW1sdUlEMGdZWEp5VzJsZE8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNoaWFXNGdKaVlnWW1sdUxtTmhiR3hpWVdOcklEMDlQU0JqWVd4c1ltRmpheUFtSmlCaWFXNHVkR2hwYzA5aWFtVmpkQ0E5UFQwZ2RHaHBjMDlpYW1WamRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3THkvcG1MTG1yYUxwaDQzbHBJM21qNUxsaGFWY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHSnBiaUFtSmlCcGJuTmxjblJKYm1SbGVDQTlQU0F0TVNBbUppQmlhVzR1Y0hKcGIzSnBkSGtnUENCd2NtbHZjbWwwZVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuTmxjblJKYm1SbGVDQTlJR2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0pwYmlBOUlIdGpZV3hzWW1GamF6b2dZMkZzYkdKaFkyc3NJSFJvYVhOUFltcGxZM1E2SUhSb2FYTlBZbXBsWTNRc0lIQmhjbUZ0T2lCd1lYSmhiU0EvSUhCaGNtRnRJRG9nVzEwc0lIQnlhVzl5YVhSNU9pQndjbWx2Y21sMGVTQXNiMjVqWlRwdmJtTmxmVHRjY2x4dUlDQWdJR2xtSUNocGJuTmxjblJKYm1SbGVDQWhQU0F0TVNrZ2UxeHlYRzRnSUNBZ0lDQWdJR0Z5Y2k1emNHeHBZMlVvYVc1elpYSjBTVzVrWlhnc0lEQXNJR0pwYmlrN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNCaGNuSXVjSFZ6YUNoaWFXNHBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdibTkwYVdaNWJXRndXMjVoYldWZElEMGdZWEp5TzF4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2RXNXlaV2RwYzNST2IzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZENrZ2UxeHlYRzRnSUNBZ2FXWWdLQ0Z1YjNScFpubHRZWEJiYm1GdFpWMHBjbVYwZFhKdU8xeHlYRzRnSUNBZ2RtRnlJR0Z5Y2lBOUlHNXZkR2xtZVcxaGNGdHVZVzFsWFR0Y2NseHVJQ0FnSUdsbUlDaGhjbklwSUh0Y2NseHVJQ0FnSUNBZ0lDQnViM1JwWm5sdFlYQmJibUZ0WlYwZ1BTQmhjbkl1Wm1sc2RHVnlLR1oxYm1OMGFXOXVLR0pwYmlsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUFoS0dKcGJpNWpZV3hzWW1GamF5QTlQVDBnWTJGc2JHSmhZMnNnSmlZZ1ltbHVMblJvYVhOUFltcGxZM1FnUFQwOUlIUm9hWE5QWW1wbFkzUXBYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnViM1JwWm5rb2JtOTBhV1o1YldGd0xDQnVZVzFsTENCd1lYSmhiU2tnZTF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dUlDQWdJR2xtSUNoaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCdWIzUnBabmxCY25KaGVTaGhjbklzSUhCaGNtRnRLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2JtOTBhV1o1UVhKeVlYa29ZWEp5TENCd1lYSmhiU2tnZTF4eVhHNGdJQ0FnWm05eUlDaDJZWElnYVNCcGJpQmhjbklwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWWdLMmtnUFQwOUlGd2liblZ0WW1WeVhDSWdKaVlnSVdselRtRk9LQ3RwS1NsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmlhVzRnUFNCaGNuSmJhVjA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaWFXNGdKaVlnWW1sdUxtTmhiR3hpWVdOcktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYQmhjbUZ0S1hCaGNtRnRJRDBnVzEwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWW1sdUxuQmhjbUZ0S1hCaGNtRnRJRDBnWW1sdUxuQmhjbUZ0TG1OdmJtTmhkQ2h3WVhKaGJTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpYVc0dVkyRnNiR0poWTJzdVlYQndiSGtvWW1sdUxuUm9hWE5QWW1wbFkzUXNJSEJoY21GdEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaWFXNHViMjVqWlNsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhKeUxuTndiR2xqWlNocExDQXhLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlNKZExDSnpiM1Z5WTJWU2IyOTBJam9pTDNOdmRYSmpaUzhpZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Fsc2MvZGlzdC9ldmVudHMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJ3JlZHVjZScpO1xuXG4vKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290ID0gJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHdpbmRvd1xuICA/ICh0aGlzIHx8IHNlbGYpXG4gIDogd2luZG93O1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe307XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqIHdlIGRvbid0IHdhbnQgdG8gc2VyaWFsaXplIHRoZXNlIDopXG4gKlxuICogVE9ETzogZnV0dXJlIHByb29mLCBtb3ZlIHRvIGNvbXBvZW50IGxhbmRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNIb3N0KG9iaikge1xuICB2YXIgc3RyID0ge30udG9TdHJpbmcuY2FsbChvYmopO1xuXG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSAnW29iamVjdCBGaWxlXSc6XG4gICAgY2FzZSAnW29iamVjdCBCbG9iXSc6XG4gICAgY2FzZSAnW29iamVjdCBGb3JtRGF0YV0nOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxucmVxdWVzdC5nZXRYSFIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgICAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sXG4gICAgICAgICAgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbi8qKlxuICogRXhwb3NlIHNlcmlhbGl6YXRpb24gbWV0aG9kLlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcblxuIC8qKlxuICAqIFBhcnNlIHRoZSBnaXZlbiB4LXd3dy1mb3JtLXVybGVuY29kZWQgYHN0cmAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqIEBhcGkgcHJpdmF0ZVxuICAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhcnRzO1xuICB2YXIgcGFpcjtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcGFydHMgPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogRXhwb3NlIHBhcnNlci5cbiAqL1xuXG5yZXF1ZXN0LnBhcnNlU3RyaW5nID0gcGFyc2VTdHJpbmc7XG5cbi8qKlxuICogRGVmYXVsdCBNSU1FIHR5cGUgbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqL1xuXG5yZXF1ZXN0LnR5cGVzID0ge1xuICBodG1sOiAndGV4dC9odG1sJyxcbiAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB4bWw6ICdhcHBsaWNhdGlvbi94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbiB9O1xuXG4gLyoqXG4gICogRGVmYXVsdCBwYXJzZXJzLlxuICAqXG4gICogICAgIHN1cGVyYWdlbnQucGFyc2VbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24oc3RyKXtcbiAgKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gICogICAgIH07XG4gICpcbiAgKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdmFyIGluZGV4O1xuICB2YXIgbGluZTtcbiAgdmFyIGZpZWxkO1xuICB2YXIgdmFsO1xuXG4gIGxpbmVzLnBvcCgpOyAvLyB0cmFpbGluZyBDUkxGXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGluZGV4KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHRyaW0obGluZS5zbGljZShpbmRleCArIDEpKTtcbiAgICBmaWVsZHNbZmllbGRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHR5cGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyYW1zKHN0cil7XG4gIHJldHVybiByZWR1Y2Uoc3RyLnNwbGl0KC8gKjsgKi8pLCBmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKj0gKi8pXG4gICAgICAsIGtleSA9IHBhcnRzLnNoaWZ0KClcbiAgICAgICwgdmFsID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsKSBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZShyZXEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgLy8gcmVzcG9uc2VUZXh0IGlzIGFjY2Vzc2libGUgb25seSBpZiByZXNwb25zZVR5cGUgaXMgJycgb3IgJ3RleHQnIGFuZCBvbiBvbGRlciBicm93c2Vyc1xuICB0aGlzLnRleHQgPSAoKHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyAmJiAodGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAnJyB8fCB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JykpIHx8IHR5cGVvZiB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnKVxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dFxuICAgICA6IG51bGw7XG4gIHRoaXMuc3RhdHVzVGV4dCA9IHRoaXMucmVxLnhoci5zdGF0dXNUZXh0O1xuICB0aGlzLnNldFN0YXR1c1Byb3BlcnRpZXModGhpcy54aHIuc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLnNldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgPyB0aGlzLnBhcnNlQm9keSh0aGlzLnRleHQgPyB0aGlzLnRleHQgOiB0aGlzLnhoci5yZXNwb25zZSlcbiAgICA6IG51bGw7XG59XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24oaGVhZGVyKXtcbiAgLy8gY29udGVudC10eXBlXG4gIHZhciBjdCA9IHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgdGhpcy50eXBlID0gdHlwZShjdCk7XG5cbiAgLy8gcGFyYW1zXG4gIHZhciBvYmogPSBwYXJhbXMoY3QpO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB0aGlzW2tleV0gPSBvYmpba2V5XTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUucGFyc2VCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHBhcnNlID0gcmVxdWVzdC5wYXJzZVt0aGlzLnR5cGVdO1xuICByZXR1cm4gcGFyc2UgJiYgc3RyICYmIChzdHIubGVuZ3RoIHx8IHN0ciBpbnN0YW5jZW9mIE9iamVjdClcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRTdGF0dXNQcm9wZXJ0aWVzID0gZnVuY3Rpb24oc3RhdHVzKXtcbiAgLy8gaGFuZGxlIElFOSBidWc6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxuICBpZiAoc3RhdHVzID09PSAxMjIzKSB7XG4gICAgc3RhdHVzID0gMjA0O1xuICB9XG5cbiAgdmFyIHR5cGUgPSBzdGF0dXMgLyAxMDAgfCAwO1xuXG4gIC8vIHN0YXR1cyAvIGNsYXNzXG4gIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB0aGlzLnN0YXR1c1R5cGUgPSB0eXBlO1xuXG4gIC8vIGJhc2ljc1xuICB0aGlzLmluZm8gPSAxID09IHR5cGU7XG4gIHRoaXMub2sgPSAyID09IHR5cGU7XG4gIHRoaXMuY2xpZW50RXJyb3IgPSA0ID09IHR5cGU7XG4gIHRoaXMuc2VydmVyRXJyb3IgPSA1ID09IHR5cGU7XG4gIHRoaXMuZXJyb3IgPSAoNCA9PSB0eXBlIHx8IDUgPT0gdHlwZSlcbiAgICA/IHRoaXMudG9FcnJvcigpXG4gICAgOiBmYWxzZTtcblxuICAvLyBzdWdhclxuICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgdGhpcy5ub0NvbnRlbnQgPSAyMDQgPT0gc3RhdHVzO1xuICB0aGlzLmJhZFJlcXVlc3QgPSA0MDAgPT0gc3RhdHVzO1xuICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gIHRoaXMubm90QWNjZXB0YWJsZSA9IDQwNiA9PSBzdGF0dXM7XG4gIHRoaXMubm90Rm91bmQgPSA0MDQgPT0gc3RhdHVzO1xuICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBgRXJyb3JgIHJlcHJlc2VudGF0aXZlIG9mIHRoaXMgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybiB7RXJyb3J9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZDtcbiAgdmFyIHVybCA9IHJlcS51cmw7XG5cbiAgdmFyIG1zZyA9ICdjYW5ub3QgJyArIG1ldGhvZCArICcgJyArIHVybCArICcgKCcgKyB0aGlzLnN0YXR1cyArICcpJztcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBtZXRob2Q7XG4gIGVyci51cmwgPSB1cmw7XG5cbiAgcmV0dXJuIGVycjtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZWAuXG4gKi9cblxucmVxdWVzdC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RgIHdpdGggdGhlIGdpdmVuIGBtZXRob2RgIGFuZCBgdXJsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBFbWl0dGVyLmNhbGwodGhpcyk7XG4gIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkgfHwgW107XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgdGhpcy5faGVhZGVyID0ge307XG4gIHRoaXMub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVyciA9IG51bGw7XG4gICAgdmFyIHJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIpO1xuICAgIH1cblxuICAgIHNlbGYuZW1pdCgncmVzcG9uc2UnLCByZXMpO1xuXG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH1cblxuICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgfVxuXG4gICAgdmFyIG5ld19lcnIgPSBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQgfHwgJ1Vuc3VjY2Vzc2Z1bCBIVFRQIHJlc3BvbnNlJyk7XG4gICAgbmV3X2Vyci5vcmlnaW5hbCA9IGVycjtcbiAgICBuZXdfZXJyLnJlc3BvbnNlID0gcmVzO1xuICAgIG5ld19lcnIuc3RhdHVzID0gcmVzLnN0YXR1cztcblxuICAgIHNlbGYuY2FsbGJhY2sobmV3X2VyciwgcmVzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl90aW1lb3V0ID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbGVhciBwcmV2aW91cyB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5hYm9ydGVkKSByZXR1cm47XG4gIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gIHRoaXMueGhyLmFib3J0KCk7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtQVBJLUtleSc6ICdmb29iYXInIH0pXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWwpe1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICB0aGlzLnNldChrZXksIGZpZWxkW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gIHRoaXMuaGVhZGVyW2ZpZWxkXSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGhlYWRlciBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgQ29udGVudC1UeXBlIHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi94bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0FjY2VwdCcsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFzc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzKXtcbiAgdmFyIHN0ciA9IGJ0b2EodXNlciArICc6JyArIHBhc3MpO1xuICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgc3RyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiogQWRkIHF1ZXJ5LXN0cmluZyBgdmFsYC5cbipcbiogRXhhbXBsZXM6XG4qXG4qICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4qICAgICAucXVlcnkoJ3NpemU9MTAnKVxuKiAgICAgLnF1ZXJ5KHsgY29sb3I6ICdibHVlJyB9KVxuKlxuKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiogQGFwaSBwdWJsaWNcbiovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24odmFsKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXcml0ZSB0aGUgZmllbGQgYG5hbWVgIGFuZCBgdmFsYCBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAqIHJlcXVlc3QgYm9kaWVzLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmZpZWxkKCdmb28nLCAnYmFyJylcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgZmlsZW5hbWVgLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmF0dGFjaChuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgZmlsZW5hbWUpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChmaWVsZCwgZmlsZSwgZmlsZW5hbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZCBgZGF0YWAsIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gcXVlcnlzdHJpbmdcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtdWx0aXBsZSBkYXRhIFwid3JpdGVzXCJcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLnNlbmQoeyBzZWFyY2g6ICdxdWVyeScgfSlcbiAqICAgICAgICAgLnNlbmQoeyByYW5nZTogJzEuLjUnIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgb3JkZXI6ICdkZXNjJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAgKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAgKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBvYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKG9iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyA9PSB0eXBlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YVxuICAgICAgICA/IHRoaXMuX2RhdGEgKyAnJicgKyBkYXRhXG4gICAgICAgIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFvYmogfHwgaXNIb3N0KGRhdGEpKSByZXR1cm4gdGhpcztcbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgZm4oZXJyLCByZXMpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcm9zc0RvbWFpbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicpO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dEVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCd0aW1lb3V0IG9mICcgKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBFbmFibGUgdHJhbnNtaXNzaW9uIG9mIGNvb2tpZXMgd2l0aCB4LWRvbWFpbiByZXF1ZXN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yayB0aGUgb3JpZ2luIG11c3Qgbm90IGJlXG4gKiB1c2luZyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIHdpdGggYSB3aWxkY2FyZCxcbiAqIGFuZCBhbHNvIG11c3Qgc2V0IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIlxuICogdG8gXCJ0cnVlXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpe1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gdGhpcy54aHIgPSByZXF1ZXN0LmdldFhIUigpO1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBzdGF0ZSBjaGFuZ2VcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKDQgIT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcblxuICAgIC8vIEluIElFOSwgcmVhZHMgdG8gYW55IHByb3BlcnR5IChlLmcuIHN0YXR1cykgb2ZmIG9mIGFuIGFib3J0ZWQgWEhSIHdpbGxcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVycm9yIFwiQ291bGQgbm90IGNvbXBsZXRlIHRoZSBvcGVyYXRpb24gZHVlIHRvIGVycm9yIGMwMGMwMjNmXCJcbiAgICB2YXIgc3RhdHVzO1xuICAgIHRyeSB7IHN0YXR1cyA9IHhoci5zdGF0dXMgfSBjYXRjaChlKSB7IHN0YXR1cyA9IDA7IH1cblxuICAgIGlmICgwID09IHN0YXR1cykge1xuICAgICAgaWYgKHNlbGYudGltZWRvdXQpIHJldHVybiBzZWxmLnRpbWVvdXRFcnJvcigpO1xuICAgICAgaWYgKHNlbGYuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIHZhciBoYW5kbGVQcm9ncmVzcyA9IGZ1bmN0aW9uKGUpe1xuICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gIH07XG4gIGlmICh0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3M7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAoeGhyLnVwbG9hZCAmJiB0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3M7XG4gICAgfVxuICB9IGNhdGNoKGUpIHtcbiAgICAvLyBBY2Nlc3NpbmcgeGhyLnVwbG9hZCBmYWlscyBpbiBJRSBmcm9tIGEgd2ViIHdvcmtlciwgc28ganVzdCBwcmV0ZW5kIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgLy8gUmVwb3J0ZWQgaGVyZTpcbiAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgzNzI0NS94bWxodHRwcmVxdWVzdC11cGxvYWQtdGhyb3dzLWludmFsaWQtYXJndW1lbnQtd2hlbi11c2VkLWZyb20td2ViLXdvcmtlci1jb250ZXh0XG4gIH1cblxuICAvLyB0aW1lb3V0XG4gIGlmICh0aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi50aW1lZG91dCA9IHRydWU7XG4gICAgICBzZWxmLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICAvLyBxdWVyeXN0cmluZ1xuICBpZiAocXVlcnkpIHtcbiAgICBxdWVyeSA9IHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0KHF1ZXJ5KTtcbiAgICB0aGlzLnVybCArPSB+dGhpcy51cmwuaW5kZXhPZignPycpXG4gICAgICA/ICcmJyArIHF1ZXJ5XG4gICAgICA6ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgLy8gaW5pdGlhdGUgcmVxdWVzdFxuICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICFpc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgY29udGVudFR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgdmFyIHNlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgLy8gc2V0IGhlYWRlciBmaWVsZHNcbiAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICB9XG5cbiAgLy8gc2VuZCBzdHVmZlxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcbiAgeGhyLnNlbmQoZGF0YSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBGYXV4IHByb21pc2Ugc3VwcG9ydFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdFxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xuICByZXR1cm4gdGhpcy5lbmQoZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICBlcnIgPyByZWplY3QoZXJyKSA6IGZ1bGZpbGwocmVzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0YC5cbiAqL1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIElzc3VlIGEgcmVxdWVzdDpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICByZXF1ZXN0KCdHRVQnLCAnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJywgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHVybCBvciBjYWxsYmFja1xuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0dFVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBERUxFVEUgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZGVsID0gZnVuY3Rpb24odXJsLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBhdGNoID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucHV0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdXBlcmFnZW50L34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIFJlZHVjZSBgYXJyYCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFxuICpcbiAqIFRPRE86IGNvbWJhdGlibGUgZXJyb3IgaGFuZGxpbmc/XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKXsgIFxuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBjdXJyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAzXG4gICAgPyBpbml0aWFsXG4gICAgOiBhcnJbaWR4KytdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBjdXJyID0gZm4uY2FsbChudWxsLCBjdXJyLCBhcnJbaWR4XSwgKytpZHgsIGFycik7XG4gIH1cbiAgXG4gIHJldHVybiBjdXJyO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdXBlcmFnZW50L34vcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIGFzeW5jXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2FvbGFuL2FzeW5jXG4gKlxuICogQ29weXJpZ2h0IDIwMTAtMjAxNCBDYW9sYW4gTWNNYWhvblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgYXN5bmMgPSB7fTtcbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmdW5jdGlvbiBpZGVudGl0eSh2KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0Jvb2wodikge1xuICAgICAgICByZXR1cm4gISF2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3RJZCh2KSB7XG4gICAgICAgIHJldHVybiAhdjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWwgb24gdGhlIHNlcnZlciwgd2luZG93IGluIHRoZSBicm93c2VyXG4gICAgdmFyIHByZXZpb3VzX2FzeW5jO1xuXG4gICAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgKGBzZWxmYCkgaW4gdGhlIGJyb3dzZXIsIGBnbG9iYWxgXG4gICAgLy8gb24gdGhlIHNlcnZlciwgb3IgYHRoaXNgIGluIHNvbWUgdmlydHVhbCBtYWNoaW5lcy4gV2UgdXNlIGBzZWxmYFxuICAgIC8vIGluc3RlYWQgb2YgYHdpbmRvd2AgZm9yIGBXZWJXb3JrZXJgIHN1cHBvcnQuXG4gICAgdmFyIHJvb3QgPSB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYgfHxcbiAgICAgICAgICAgIHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHxcbiAgICAgICAgICAgIHRoaXM7XG5cbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XG4gICAgICAgIHByZXZpb3VzX2FzeW5jID0gcm9vdC5hc3luYztcbiAgICB9XG5cbiAgICBhc3luYy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LmFzeW5jID0gcHJldmlvdXNfYXN5bmM7XG4gICAgICAgIHJldHVybiBhc3luYztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25seV9vbmNlKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChmbiA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbGJhY2sgd2FzIGFscmVhZHkgY2FsbGVkLlwiKTtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBmbiA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX29uY2UoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGZuID09PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgZm4gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vLy8gY3Jvc3MtYnJvd3NlciBjb21wYXRpYmxpdHkgZnVuY3Rpb25zIC8vLy9cblxuICAgIHZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gICAgdmFyIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG5cbiAgICAvLyBQb3J0ZWQgZnJvbSB1bmRlcnNjb3JlLmpzIGlzT2JqZWN0XG4gICAgdmFyIF9pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgICAgIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfaXNBcnJheUxpa2UoYXJyKSB7XG4gICAgICAgIHJldHVybiBfaXNBcnJheShhcnIpIHx8IChcbiAgICAgICAgICAgIC8vIGhhcyBhIHBvc2l0aXZlIGludGVnZXIgbGVuZ3RoIHByb3BlcnR5XG4gICAgICAgICAgICB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgYXJyLmxlbmd0aCA+PSAwICYmXG4gICAgICAgICAgICBhcnIubGVuZ3RoICUgMSA9PT0gMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9lYWNoKGNvbGwsIGl0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBfaXNBcnJheUxpa2UoY29sbCkgP1xuICAgICAgICAgICAgX2FycmF5RWFjaChjb2xsLCBpdGVyYXRvcikgOlxuICAgICAgICAgICAgX2ZvckVhY2hPZihjb2xsLCBpdGVyYXRvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FycmF5RWFjaChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2luZGV4XSwgaW5kZXgsIGFycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfbWFwKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoLFxuICAgICAgICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdG9yKGFycltpbmRleF0sIGluZGV4LCBhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JhbmdlKGNvdW50KSB7XG4gICAgICAgIHJldHVybiBfbWFwKEFycmF5KGNvdW50KSwgZnVuY3Rpb24gKHYsIGkpIHsgcmV0dXJuIGk7IH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZWR1Y2UoYXJyLCBpdGVyYXRvciwgbWVtbykge1xuICAgICAgICBfYXJyYXlFYWNoKGFyciwgZnVuY3Rpb24gKHgsIGksIGEpIHtcbiAgICAgICAgICAgIG1lbW8gPSBpdGVyYXRvcihtZW1vLCB4LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9mb3JFYWNoT2Yob2JqZWN0LCBpdGVyYXRvcikge1xuICAgICAgICBfYXJyYXlFYWNoKF9rZXlzKG9iamVjdCksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG9iamVjdFtrZXldLCBrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5kZXhPZihhcnIsIGl0ZW0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICB2YXIgX2tleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfa2V5SXRlcmF0b3IoY29sbCkge1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB2YXIgbGVuO1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAgaWYgKF9pc0FycmF5TGlrZShjb2xsKSkge1xuICAgICAgICAgICAgbGVuID0gY29sbC5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPCBsZW4gPyBpIDogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXlzID0gX2tleXMoY29sbCk7XG4gICAgICAgICAgICBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gaSA8IGxlbiA/IGtleXNbaV0gOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNpbWlsYXIgdG8gRVM2J3MgcmVzdCBwYXJhbSAoaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMDMvZXM2LWFuZC1yZXN0LXBhcmFtZXRlci5odG1sKVxuICAgIC8vIFRoaXMgYWNjdW11bGF0ZXMgdGhlIGFyZ3VtZW50cyBwYXNzZWQgaW50byBhbiBhcnJheSwgYWZ0ZXIgYSBnaXZlbiBpbmRleC5cbiAgICAvLyBGcm9tIHVuZGVyc2NvcmUuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9wdWxsLzIxNDApLlxuICAgIGZ1bmN0aW9uIF9yZXN0UGFyYW0oZnVuYywgc3RhcnRJbmRleCkge1xuICAgICAgICBzdGFydEluZGV4ID0gc3RhcnRJbmRleCA9PSBudWxsID8gZnVuYy5sZW5ndGggLSAxIDogK3N0YXJ0SW5kZXg7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChhcmd1bWVudHMubGVuZ3RoIC0gc3RhcnRJbmRleCwgMCk7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IEFycmF5KGxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXggKyBzdGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoc3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCByZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEN1cnJlbnRseSB1bnVzZWQgYnV0IGhhbmRsZSBjYXNlcyBvdXRzaWRlIG9mIHRoZSBzd2l0Y2ggc3RhdGVtZW50OlxuICAgICAgICAgICAgLy8gdmFyIGFyZ3MgPSBBcnJheShzdGFydEluZGV4ICsgMSk7XG4gICAgICAgICAgICAvLyBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzdGFydEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gYXJnc1tzdGFydEluZGV4XSA9IHJlc3Q7XG4gICAgICAgICAgICAvLyByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfd2l0aG91dEluZGV4KGl0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yKHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8vLyBleHBvcnRlZCBhc3luYyBtb2R1bGUgZnVuY3Rpb25zIC8vLy9cblxuICAgIC8vLy8gbmV4dFRpY2sgaW1wbGVtZW50YXRpb24gd2l0aCBicm93c2VyLWNvbXBhdGlibGUgZmFsbGJhY2sgLy8vL1xuXG4gICAgLy8gY2FwdHVyZSB0aGUgZ2xvYmFsIHJlZmVyZW5jZSB0byBndWFyZCBhZ2FpbnN0IGZha2VUaW1lciBtb2Nrc1xuICAgIHZhciBfc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzZXRJbW1lZGlhdGU7XG5cbiAgICB2YXIgX2RlbGF5ID0gX3NldEltbWVkaWF0ZSA/IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIC8vIG5vdCBhIGRpcmVjdCBhbGlhcyBmb3IgSUUxMCBjb21wYXRpYmlsaXR5XG4gICAgICAgIF9zZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0gOiBmdW5jdGlvbihmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhc3luYy5uZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBfZGVsYXk7XG4gICAgfVxuICAgIGFzeW5jLnNldEltbWVkaWF0ZSA9IF9zZXRJbW1lZGlhdGUgPyBfZGVsYXkgOiBhc3luYy5uZXh0VGljaztcblxuXG4gICAgYXN5bmMuZm9yRWFjaCA9XG4gICAgYXN5bmMuZWFjaCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gYXN5bmMuZWFjaE9mKGFyciwgX3dpdGhvdXRJbmRleChpdGVyYXRvciksIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZm9yRWFjaFNlcmllcyA9XG4gICAgYXN5bmMuZWFjaFNlcmllcyA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gYXN5bmMuZWFjaE9mU2VyaWVzKGFyciwgX3dpdGhvdXRJbmRleChpdGVyYXRvciksIGNhbGxiYWNrKTtcbiAgICB9O1xuXG5cbiAgICBhc3luYy5mb3JFYWNoTGltaXQgPVxuICAgIGFzeW5jLmVhY2hMaW1pdCA9IGZ1bmN0aW9uIChhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIF9lYWNoT2ZMaW1pdChsaW1pdCkoYXJyLCBfd2l0aG91dEluZGV4KGl0ZXJhdG9yKSwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5mb3JFYWNoT2YgPVxuICAgIGFzeW5jLmVhY2hPZiA9IGZ1bmN0aW9uIChvYmplY3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICBvYmplY3QgPSBvYmplY3QgfHwgW107XG4gICAgICAgIHZhciBzaXplID0gX2lzQXJyYXlMaWtlKG9iamVjdCkgPyBvYmplY3QubGVuZ3RoIDogX2tleXMob2JqZWN0KS5sZW5ndGg7XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICBpZiAoIXNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBfZWFjaChvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpdGVyYXRvcihvYmplY3Rba2V5XSwga2V5LCBvbmx5X29uY2UoZG9uZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5mb3JFYWNoT2ZTZXJpZXMgPVxuICAgIGFzeW5jLmVhY2hPZlNlcmllcyA9IGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICBvYmogPSBvYmogfHwgW107XG4gICAgICAgIHZhciBuZXh0S2V5ID0gX2tleUl0ZXJhdG9yKG9iaik7XG4gICAgICAgIHZhciBrZXkgPSBuZXh0S2V5KCk7XG4gICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGUoKSB7XG4gICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlcmF0b3Iob2JqW2tleV0sIGtleSwgb25seV9vbmNlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBuZXh0S2V5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soaXRlcmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRlKCk7XG4gICAgfTtcblxuXG5cbiAgICBhc3luYy5mb3JFYWNoT2ZMaW1pdCA9XG4gICAgYXN5bmMuZWFjaE9mTGltaXQgPSBmdW5jdGlvbiAob2JqLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9lYWNoT2ZMaW1pdChsaW1pdCkob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZWFjaE9mTGltaXQobGltaXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICAgICAgb2JqID0gb2JqIHx8IFtdO1xuICAgICAgICAgICAgdmFyIG5leHRLZXkgPSBfa2V5SXRlcmF0b3Iob2JqKTtcbiAgICAgICAgICAgIGlmIChsaW1pdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBydW5uaW5nID0gMDtcbiAgICAgICAgICAgIHZhciBlcnJvcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIChmdW5jdGlvbiByZXBsZW5pc2ggKCkge1xuICAgICAgICAgICAgICAgIGlmIChkb25lICYmIHJ1bm5pbmcgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJ1bm5pbmcgPCBsaW1pdCAmJiAhZXJyb3JlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gbmV4dEtleSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5uaW5nICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKG9ialtrZXldLCBrZXksIG9ubHlfb25jZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxlbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRvUGFyYWxsZWwoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGFzeW5jLmVhY2hPZiwgb2JqLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkb1BhcmFsbGVsTGltaXQoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmbihfZWFjaE9mTGltaXQobGltaXQpLCBvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvU2VyaWVzKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmbihhc3luYy5lYWNoT2ZTZXJpZXMsIG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXN5bmNNYXAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IodmFsdWUsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHY7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYy5tYXAgPSBkb1BhcmFsbGVsKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwU2VyaWVzID0gZG9TZXJpZXMoX2FzeW5jTWFwKTtcbiAgICBhc3luYy5tYXBMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfYXN5bmNNYXApO1xuXG4gICAgLy8gcmVkdWNlIG9ubHkgaGFzIGEgc2VyaWVzIHZlcnNpb24sIGFzIGRvaW5nIHJlZHVjZSBpbiBwYXJhbGxlbCB3b24ndFxuICAgIC8vIHdvcmsgaW4gbWFueSBzaXR1YXRpb25zLlxuICAgIGFzeW5jLmluamVjdCA9XG4gICAgYXN5bmMuZm9sZGwgPVxuICAgIGFzeW5jLnJlZHVjZSA9IGZ1bmN0aW9uIChhcnIsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoT2ZTZXJpZXMoYXJyLCBmdW5jdGlvbiAoeCwgaSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG1lbW8sIHgsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICBtZW1vID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciB8fCBudWxsLCBtZW1vKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFzeW5jLmZvbGRyID1cbiAgICBhc3luYy5yZWR1Y2VSaWdodCA9IGZ1bmN0aW9uIChhcnIsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmV2ZXJzZWQgPSBfbWFwKGFyciwgaWRlbnRpdHkpLnJldmVyc2UoKTtcbiAgICAgICAgYXN5bmMucmVkdWNlKHJldmVyc2VkLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZmlsdGVyKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe2luZGV4OiBpbmRleCwgdmFsdWU6IHh9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfbWFwKHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYy5zZWxlY3QgPVxuICAgIGFzeW5jLmZpbHRlciA9IGRvUGFyYWxsZWwoX2ZpbHRlcik7XG5cbiAgICBhc3luYy5zZWxlY3RMaW1pdCA9XG4gICAgYXN5bmMuZmlsdGVyTGltaXQgPSBkb1BhcmFsbGVsTGltaXQoX2ZpbHRlcik7XG5cbiAgICBhc3luYy5zZWxlY3RTZXJpZXMgPVxuICAgIGFzeW5jLmZpbHRlclNlcmllcyA9IGRvU2VyaWVzKF9maWx0ZXIpO1xuXG4gICAgZnVuY3Rpb24gX3JlamVjdChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9maWx0ZXIoZWFjaGZuLCBhcnIsIGZ1bmN0aW9uKHZhbHVlLCBjYikge1xuICAgICAgICAgICAgaXRlcmF0b3IodmFsdWUsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBjYighdik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBhc3luYy5yZWplY3QgPSBkb1BhcmFsbGVsKF9yZWplY3QpO1xuICAgIGFzeW5jLnJlamVjdExpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9yZWplY3QpO1xuICAgIGFzeW5jLnJlamVjdFNlcmllcyA9IGRvU2VyaWVzKF9yZWplY3QpO1xuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVRlc3RlcihlYWNoZm4sIGNoZWNrLCBnZXRSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyciwgbGltaXQsIGl0ZXJhdG9yLCBjYikge1xuICAgICAgICAgICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IpIGNiKGdldFJlc3VsdChmYWxzZSwgdm9pZCAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpdGVyYXRlZSh4LCBfLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmICghY2IpIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYiAmJiBjaGVjayh2KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZ2V0UmVzdWx0KHRydWUsIHgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiID0gaXRlcmF0b3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgZWFjaGZuKGFyciwgbGltaXQsIGl0ZXJhdGVlLCBkb25lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IgPSBpdGVyYXRvcjtcbiAgICAgICAgICAgICAgICBpdGVyYXRvciA9IGxpbWl0O1xuICAgICAgICAgICAgICAgIGVhY2hmbihhcnIsIGl0ZXJhdGVlLCBkb25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYy5hbnkgPVxuICAgIGFzeW5jLnNvbWUgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZiwgdG9Cb29sLCBpZGVudGl0eSk7XG5cbiAgICBhc3luYy5zb21lTGltaXQgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZkxpbWl0LCB0b0Jvb2wsIGlkZW50aXR5KTtcblxuICAgIGFzeW5jLmFsbCA9XG4gICAgYXN5bmMuZXZlcnkgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZiwgbm90SWQsIG5vdElkKTtcblxuICAgIGFzeW5jLmV2ZXJ5TGltaXQgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZkxpbWl0LCBub3RJZCwgbm90SWQpO1xuXG4gICAgZnVuY3Rpb24gX2ZpbmRHZXRSZXN1bHQodiwgeCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgYXN5bmMuZGV0ZWN0ID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2YsIGlkZW50aXR5LCBfZmluZEdldFJlc3VsdCk7XG4gICAgYXN5bmMuZGV0ZWN0U2VyaWVzID0gX2NyZWF0ZVRlc3Rlcihhc3luYy5lYWNoT2ZTZXJpZXMsIGlkZW50aXR5LCBfZmluZEdldFJlc3VsdCk7XG4gICAgYXN5bmMuZGV0ZWN0TGltaXQgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZkxpbWl0LCBpZGVudGl0eSwgX2ZpbmRHZXRSZXN1bHQpO1xuXG4gICAgYXN5bmMuc29ydEJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLm1hcChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKGVyciwgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7dmFsdWU6IHgsIGNyaXRlcmlhOiBjcml0ZXJpYX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBfbWFwKHJlc3VsdHMuc29ydChjb21wYXJhdG9yKSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNvbXBhcmF0b3IobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYSwgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmF1dG8gPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIHZhciBrZXlzID0gX2tleXModGFza3MpO1xuICAgICAgICB2YXIgcmVtYWluaW5nVGFza3MgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgaWYgKCFyZW1haW5pbmdUYXNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGZuKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMudW5zaGlmdChmbik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZm4pIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfaW5kZXhPZihsaXN0ZW5lcnMsIGZuKTtcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRhc2tDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ1Rhc2tzLS07XG4gICAgICAgICAgICBfYXJyYXlFYWNoKGxpc3RlbmVycy5zbGljZSgwKSwgZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFyZW1haW5pbmdUYXNrcykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfYXJyYXlFYWNoKGtleXMsIGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IF9pc0FycmF5KHRhc2tzW2tdKSA/IHRhc2tzW2tdOiBbdGFza3Nba11dO1xuICAgICAgICAgICAgdmFyIHRhc2tDYWxsYmFjayA9IF9yZXN0UGFyYW0oZnVuY3Rpb24oZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhZmVSZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIF9mb3JFYWNoT2YocmVzdWx0cywgZnVuY3Rpb24odmFsLCBya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1tya2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBzYWZlUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHRhc2tDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVxdWlyZXMgPSB0YXNrLnNsaWNlKDAsIHRhc2subGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRlYWQtbG9ja3NcbiAgICAgICAgICAgIHZhciBsZW4gPSByZXF1aXJlcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGVwO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZGVwID0gdGFza3NbcmVxdWlyZXNbbGVuXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFzIGluZXhpc3RhbnQgZGVwZW5kZW5jeScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkoZGVwKSAmJiBfaW5kZXhPZihkZXAsIGspID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXMgY3ljbGljIGRlcGVuZGVuY2llcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVkdWNlKHJlcXVpcmVzLCBmdW5jdGlvbiAoYSwgeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGEgJiYgcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eSh4KSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSkgJiYgIXJlc3VsdHMuaGFzT3duUHJvcGVydHkoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhZHkoKSkge1xuICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuXG4gICAgYXN5bmMucmV0cnkgPSBmdW5jdGlvbih0aW1lcywgdGFzaywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIERFRkFVTFRfVElNRVMgPSA1O1xuICAgICAgICB2YXIgREVGQVVMVF9JTlRFUlZBTCA9IDA7XG5cbiAgICAgICAgdmFyIGF0dGVtcHRzID0gW107XG5cbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICB0aW1lczogREVGQVVMVF9USU1FUyxcbiAgICAgICAgICAgIGludGVydmFsOiBERUZBVUxUX0lOVEVSVkFMXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VUaW1lcyhhY2MsIHQpe1xuICAgICAgICAgICAgaWYodHlwZW9mIHQgPT09ICdudW1iZXInKXtcbiAgICAgICAgICAgICAgICBhY2MudGltZXMgPSBwYXJzZUludCh0LCAxMCkgfHwgREVGQVVMVF9USU1FUztcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgdCA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgICAgIGFjYy50aW1lcyA9IHBhcnNlSW50KHQudGltZXMsIDEwKSB8fCBERUZBVUxUX1RJTUVTO1xuICAgICAgICAgICAgICAgIGFjYy5pbnRlcnZhbCA9IHBhcnNlSW50KHQuaW50ZXJ2YWwsIDEwKSB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGFyZ3VtZW50IHR5cGUgZm9yIFxcJ3RpbWVzXFwnOiAnICsgdHlwZW9mIHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPCAxIHx8IGxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMgLSBtdXN0IGJlIGVpdGhlciAodGFzayksICh0YXNrLCBjYWxsYmFjayksICh0aW1lcywgdGFzaykgb3IgKHRpbWVzLCB0YXNrLCBjYWxsYmFjayknKTtcbiAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPD0gMiAmJiB0eXBlb2YgdGltZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gdGFzaztcbiAgICAgICAgICAgIHRhc2sgPSB0aW1lcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRpbWVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwYXJzZVRpbWVzKG9wdHMsIHRpbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIG9wdHMudGFzayA9IHRhc2s7XG5cbiAgICAgICAgZnVuY3Rpb24gd3JhcHBlZFRhc2sod3JhcHBlZENhbGxiYWNrLCB3cmFwcGVkUmVzdWx0cykge1xuICAgICAgICAgICAgZnVuY3Rpb24gcmV0cnlBdHRlbXB0KHRhc2ssIGZpbmFsQXR0ZW1wdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzZXJpZXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrKGZ1bmN0aW9uKGVyciwgcmVzdWx0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc0NhbGxiYWNrKCFlcnIgfHwgZmluYWxBdHRlbXB0LCB7ZXJyOiBlcnIsIHJlc3VsdDogcmVzdWx0fSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHdyYXBwZWRSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXRyeUludGVydmFsKGludGVydmFsKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2VyaWVzQ2FsbGJhY2spe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNDYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChvcHRzLnRpbWVzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmluYWxBdHRlbXB0ID0gIShvcHRzLnRpbWVzLT0xKTtcbiAgICAgICAgICAgICAgICBhdHRlbXB0cy5wdXNoKHJldHJ5QXR0ZW1wdChvcHRzLnRhc2ssIGZpbmFsQXR0ZW1wdCkpO1xuICAgICAgICAgICAgICAgIGlmKCFmaW5hbEF0dGVtcHQgJiYgb3B0cy5pbnRlcnZhbCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0cy5wdXNoKHJldHJ5SW50ZXJ2YWwob3B0cy5pbnRlcnZhbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXN5bmMuc2VyaWVzKGF0dGVtcHRzLCBmdW5jdGlvbihkb25lLCBkYXRhKXtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICh3cmFwcGVkQ2FsbGJhY2sgfHwgb3B0cy5jYWxsYmFjaykoZGF0YS5lcnIsIGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgYSBjYWxsYmFjayBpcyBwYXNzZWQsIHJ1biB0aGlzIGFzIGEgY29udHJvbGwgZmxvd1xuICAgICAgICByZXR1cm4gb3B0cy5jYWxsYmFjayA/IHdyYXBwZWRUYXNrKCkgOiB3cmFwcGVkVGFzaztcbiAgICB9O1xuXG4gICAgYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IF9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICBpZiAoIV9pc0FycmF5KHRhc2tzKSkge1xuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gd2F0ZXJmYWxsIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd3JhcEl0ZXJhdG9yKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBbZXJyXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZW5zdXJlQXN5bmMoaXRlcmF0b3IpLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9wYXJhbGxlbChlYWNoZm4sIHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gICAgICAgIHZhciByZXN1bHRzID0gX2lzQXJyYXlMaWtlKHRhc2tzKSA/IFtdIDoge307XG5cbiAgICAgICAgZWFjaGZuKHRhc2tzLCBmdW5jdGlvbiAodGFzaywga2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGFzayhfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0c1trZXldID0gYXJncztcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYy5wYXJhbGxlbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgX3BhcmFsbGVsKGFzeW5jLmVhY2hPZiwgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMucGFyYWxsZWxMaW1pdCA9IGZ1bmN0aW9uKHRhc2tzLCBsaW1pdCwgY2FsbGJhY2spIHtcbiAgICAgICAgX3BhcmFsbGVsKF9lYWNoT2ZMaW1pdChsaW1pdCksIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnNlcmllcyA9IGZ1bmN0aW9uKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoYXN5bmMuZWFjaE9mU2VyaWVzLCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5pdGVyYXRvciA9IGZ1bmN0aW9uICh0YXNrcykge1xuICAgICAgICBmdW5jdGlvbiBtYWtlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xuICAgIH07XG5cbiAgICBhc3luYy5hcHBseSA9IF9yZXN0UGFyYW0oZnVuY3Rpb24gKGZuLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChjYWxsQXJncykge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KFxuICAgICAgICAgICAgICAgIG51bGwsIGFyZ3MuY29uY2F0KGNhbGxBcmdzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBfY29uY2F0KGVhY2hmbiwgYXJyLCBmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgaW5kZXgsIGNiKSB7XG4gICAgICAgICAgICBmbih4LCBmdW5jdGlvbiAoZXJyLCB5KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh5IHx8IFtdKTtcbiAgICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jLmNvbmNhdCA9IGRvUGFyYWxsZWwoX2NvbmNhdCk7XG4gICAgYXN5bmMuY29uY2F0U2VyaWVzID0gZG9TZXJpZXMoX2NvbmNhdCk7XG5cbiAgICBhc3luYy53aGlsc3QgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICAgICAgaWYgKHRlc3QoKSkge1xuICAgICAgICAgICAgdmFyIG5leHQgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRlc3QuYXBwbHkodGhpcywgYXJncykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IobmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdGVyYXRvcihuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmRvV2hpbHN0ID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY2FsbHMgPSAwO1xuICAgICAgICByZXR1cm4gYXN5bmMud2hpbHN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICsrY2FsbHMgPD0gMSB8fCB0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnVudGlsID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gYXN5bmMud2hpbHN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmRvVW50aWwgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5kb1doaWxzdChpdGVyYXRvciwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5kdXJpbmcgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcblxuICAgICAgICB2YXIgbmV4dCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24oZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGNoZWNrKTtcbiAgICAgICAgICAgICAgICB0ZXN0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbihlcnIsIHRydXRoKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHJ1dGgpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihuZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGVzdChjaGVjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmRvRHVyaW5nID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY2FsbHMgPSAwO1xuICAgICAgICBhc3luYy5kdXJpbmcoZnVuY3Rpb24obmV4dCkge1xuICAgICAgICAgICAgaWYgKGNhbGxzKysgPCAxKSB7XG4gICAgICAgICAgICAgICAgbmV4dChudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfcXVldWUod29ya2VyLCBjb25jdXJyZW5jeSwgcGF5bG9hZCkge1xuICAgICAgICBpZiAoY29uY3VycmVuY3kgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uY3VycmVuY3kgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29uY3VycmVuY3kgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uY3VycmVuY3kgbXVzdCBub3QgYmUgemVybycpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pbnNlcnQocSwgZGF0YSwgcG9zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YXNrIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHEuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIV9pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID09PSAwICYmIHEuaWRsZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCBkcmFpbiBpbW1lZGlhdGVseSBpZiB0aGVyZSBhcmUgbm8gdGFza3NcbiAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYXJyYXlFYWNoKGRhdGEsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrIHx8IG5vb3BcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcS50YXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChxLnRhc2tzLmxlbmd0aCA9PT0gcS5jb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgICAgICAgICBxLnNhdHVyYXRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHEucHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX25leHQocSwgdGFza3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHdvcmtlcnMgLT0gMTtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICBfYXJyYXlFYWNoKHRhc2tzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChxLnRhc2tzLmxlbmd0aCArIHdvcmtlcnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxLnByb2Nlc3MoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd29ya2VycyA9IDA7XG4gICAgICAgIHZhciBxID0ge1xuICAgICAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICAgICAgY29uY3VycmVuY3k6IGNvbmN1cnJlbmN5LFxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgICAgIHNhdHVyYXRlZDogbm9vcCxcbiAgICAgICAgICAgIGVtcHR5OiBub29wLFxuICAgICAgICAgICAgZHJhaW46IG5vb3AsXG4gICAgICAgICAgICBzdGFydGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgICAgICBwdXNoOiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2lsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHEuZHJhaW4gPSBub29wO1xuICAgICAgICAgICAgICAgIHEudGFza3MgPSBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIHRydWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFxLnBhdXNlZCAmJiB3b3JrZXJzIDwgcS5jb25jdXJyZW5jeSAmJiBxLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSh3b3JrZXJzIDwgcS5jb25jdXJyZW5jeSAmJiBxLnRhc2tzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFza3MgPSBxLnBheWxvYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEudGFza3Muc3BsaWNlKDAsIHEucGF5bG9hZCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEudGFza3Muc3BsaWNlKDAsIHEudGFza3MubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfbWFwKHRhc2tzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VycyArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiID0gb25seV9vbmNlKF9uZXh0KHEsIHRhc2tzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIoZGF0YSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5uaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlcnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWRsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHEucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocS5wYXVzZWQgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIHEucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VtZUNvdW50ID0gTWF0aC5taW4ocS5jb25jdXJyZW5jeSwgcS50YXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gY2FsbCBxLnByb2Nlc3Mgb25jZSBwZXIgY29uY3VycmVudFxuICAgICAgICAgICAgICAgIC8vIHdvcmtlciB0byBwcmVzZXJ2ZSBmdWxsIGNvbmN1cnJlbmN5IGFmdGVyIHBhdXNlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdyA9IDE7IHcgPD0gcmVzdW1lQ291bnQ7IHcrKykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUocS5wcm9jZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxO1xuICAgIH1cblxuICAgIGFzeW5jLnF1ZXVlID0gZnVuY3Rpb24gKHdvcmtlciwgY29uY3VycmVuY3kpIHtcbiAgICAgICAgdmFyIHEgPSBfcXVldWUoZnVuY3Rpb24gKGl0ZW1zLCBjYikge1xuICAgICAgICAgICAgd29ya2VyKGl0ZW1zWzBdLCBjYik7XG4gICAgICAgIH0sIGNvbmN1cnJlbmN5LCAxKTtcblxuICAgICAgICByZXR1cm4gcTtcbiAgICB9O1xuXG4gICAgYXN5bmMucHJpb3JpdHlRdWV1ZSA9IGZ1bmN0aW9uICh3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG5cbiAgICAgICAgZnVuY3Rpb24gX2NvbXBhcmVUYXNrcyhhLCBiKXtcbiAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5hcnlTZWFyY2goc2VxdWVuY2UsIGl0ZW0sIGNvbXBhcmUpIHtcbiAgICAgICAgICAgIHZhciBiZWcgPSAtMSxcbiAgICAgICAgICAgICAgICBlbmQgPSBzZXF1ZW5jZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGJlZyA8IGVuZCkge1xuICAgICAgICAgICAgICAgIHZhciBtaWQgPSBiZWcgKyAoKGVuZCAtIGJlZyArIDEpID4+PiAxKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBzZXF1ZW5jZVttaWRdKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZyA9IG1pZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiZWc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YXNrIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHEuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIV9pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCBkcmFpbiBpbW1lZGlhdGVseSBpZiB0aGVyZSBhcmUgbm8gdGFza3NcbiAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYXJyYXlFYWNoKGRhdGEsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHEudGFza3Muc3BsaWNlKF9iaW5hcnlTZWFyY2gocS50YXNrcywgaXRlbSwgX2NvbXBhcmVUYXNrcykgKyAxLCAwLCBpdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmIChxLnRhc2tzLmxlbmd0aCA9PT0gcS5jb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgICAgICAgICBxLnNhdHVyYXRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUocS5wcm9jZXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG5vcm1hbCBxdWV1ZVxuICAgICAgICB2YXIgcSA9IGFzeW5jLnF1ZXVlKHdvcmtlciwgY29uY3VycmVuY3kpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIHB1c2ggdG8gYWNjZXB0IHNlY29uZCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIHByaW9yaXR5XG4gICAgICAgIHEucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgcHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgdW5zaGlmdCBmdW5jdGlvblxuICAgICAgICBkZWxldGUgcS51bnNoaWZ0O1xuXG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5jYXJnbyA9IGZ1bmN0aW9uICh3b3JrZXIsIHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF9xdWV1ZSh3b3JrZXIsIDEsIHBheWxvYWQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY29uc29sZV9mbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChmbiwgYXJncykge1xuICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW19yZXN0UGFyYW0oZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uc29sZVtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FycmF5RWFjaChhcmdzLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGVbbmFtZV0oeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMubG9nID0gX2NvbnNvbGVfZm4oJ2xvZycpO1xuICAgIGFzeW5jLmRpciA9IF9jb25zb2xlX2ZuKCdkaXInKTtcbiAgICAvKmFzeW5jLmluZm8gPSBfY29uc29sZV9mbignaW5mbycpO1xuICAgIGFzeW5jLndhcm4gPSBfY29uc29sZV9mbignd2FybicpO1xuICAgIGFzeW5jLmVycm9yID0gX2NvbnNvbGVfZm4oJ2Vycm9yJyk7Ki9cblxuICAgIGFzeW5jLm1lbW9pemUgPSBmdW5jdGlvbiAoZm4sIGhhc2hlcikge1xuICAgICAgICB2YXIgbWVtbyA9IHt9O1xuICAgICAgICB2YXIgcXVldWVzID0ge307XG4gICAgICAgIGhhc2hlciA9IGhhc2hlciB8fCBpZGVudGl0eTtcbiAgICAgICAgdmFyIG1lbW9pemVkID0gX3Jlc3RQYXJhbShmdW5jdGlvbiBtZW1vaXplZChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gbWVtbykge1xuICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgbWVtb1trZXldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSBpbiBxdWV1ZXMpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXVlc1trZXldID0gW2NhbGxiYWNrXTtcbiAgICAgICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbX3Jlc3RQYXJhbShmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBtZW1vW2tleV0gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcSA9IHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHFbaV0uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1lbW9pemVkLm1lbW8gPSBtZW1vO1xuICAgICAgICBtZW1vaXplZC51bm1lbW9pemVkID0gZm47XG4gICAgICAgIHJldHVybiBtZW1vaXplZDtcbiAgICB9O1xuXG4gICAgYXN5bmMudW5tZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGZuLnVubWVtb2l6ZWQgfHwgZm4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF90aW1lcyhtYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb3VudCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBtYXBwZXIoX3JhbmdlKGNvdW50KSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYy50aW1lcyA9IF90aW1lcyhhc3luYy5tYXApO1xuICAgIGFzeW5jLnRpbWVzU2VyaWVzID0gX3RpbWVzKGFzeW5jLm1hcFNlcmllcyk7XG4gICAgYXN5bmMudGltZXNMaW1pdCA9IGZ1bmN0aW9uIChjb3VudCwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gYXN5bmMubWFwTGltaXQoX3JhbmdlKGNvdW50KSwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnNlcSA9IGZ1bmN0aW9uICgvKiBmdW5jdGlvbnMuLi4gKi8pIHtcbiAgICAgICAgdmFyIGZucyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wb3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBub29wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhc3luYy5yZWR1Y2UoZm5zLCBhcmdzLCBmdW5jdGlvbiAobmV3YXJncywgZm4sIGNiKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgbmV3YXJncy5jb25jYXQoW19yZXN0UGFyYW0oZnVuY3Rpb24gKGVyciwgbmV4dGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoZXJyLCBuZXh0YXJncyk7XG4gICAgICAgICAgICAgICAgfSldKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoYXQsIFtlcnJdLmNvbmNhdChyZXN1bHRzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFzeW5jLmNvbXBvc2UgPSBmdW5jdGlvbiAoLyogZnVuY3Rpb25zLi4uICovKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5zZXEuYXBwbHkobnVsbCwgQXJyYXkucHJvdG90eXBlLnJldmVyc2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBfYXBwbHlFYWNoKGVhY2hmbikge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbihmbnMsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBnbyA9IF9yZXN0UGFyYW0oZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlYWNoZm4oZm5zLCBmdW5jdGlvbiAoZm4sIF8sIGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MuY29uY2F0KFtjYl0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYy5hcHBseUVhY2ggPSBfYXBwbHlFYWNoKGFzeW5jLmVhY2hPZik7XG4gICAgYXN5bmMuYXBwbHlFYWNoU2VyaWVzID0gX2FwcGx5RWFjaChhc3luYy5lYWNoT2ZTZXJpZXMpO1xuXG5cbiAgICBhc3luYy5mb3JldmVyID0gZnVuY3Rpb24gKGZuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZG9uZSA9IG9ubHlfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgdmFyIHRhc2sgPSBlbnN1cmVBc3luYyhmbik7XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2sobmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBlbnN1cmVBc3luYyhmbikge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlubmVyQXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgaW5uZXJBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgaW5uZXJBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYy5lbnN1cmVBc3luYyA9IGVuc3VyZUFzeW5jO1xuXG4gICAgYXN5bmMuY29uc3RhbnQgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICB2YXIgYXJncyA9IFtudWxsXS5jb25jYXQodmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgYXN5bmMud3JhcFN5bmMgPVxuICAgIGFzeW5jLmFzeW5jaWZ5ID0gZnVuY3Rpb24gYXN5bmNpZnkoZnVuYykge1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgcmVzdWx0IGlzIFByb21pc2Ugb2JqZWN0XG4gICAgICAgICAgICBpZiAoX2lzT2JqZWN0KHJlc3VsdCkgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLm1lc3NhZ2UgPyBlcnIgOiBuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBOb2RlLmpzXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gYXN5bmM7XG4gICAgfVxuICAgIC8vIEFNRCAvIFJlcXVpcmVKU1xuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhc3luYztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGluY2x1ZGVkIGRpcmVjdGx5IHZpYSA8c2NyaXB0PiB0YWdcbiAgICBlbHNlIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IGFzeW5jO1xuICAgIH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FzeW5jL2xpYi9hc3luYy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzL2Jyb3dzZXIuanMnKS5uZXh0VGljaztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpbW1lZGlhdGVJZHMgPSB7fTtcbnZhciBuZXh0SW1tZWRpYXRlSWQgPSAwO1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkgeyB0aW1lb3V0LmNsb3NlKCk7IH07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gVGhhdCdzIG5vdCBob3cgbm9kZS5qcyBpbXBsZW1lbnRzIGl0IGJ1dCB0aGUgZXhwb3NlZCBhcGkgaXMgdGhlIHNhbWUuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG4gIHZhciBpZCA9IG5leHRJbW1lZGlhdGVJZCsrO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZmFsc2UgOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgaW1tZWRpYXRlSWRzW2lkXSA9IHRydWU7XG5cbiAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcbiAgICBpZiAoaW1tZWRpYXRlSWRzW2lkXSkge1xuICAgICAgLy8gZm4uY2FsbCgpIGlzIGZhc3RlciBzbyB3ZSBvcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiB1c2UtY2FzZVxuICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3VcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuICAgICAgZXhwb3J0cy5jbGVhckltbWVkaWF0ZShpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaWQ7XG59O1xuXG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gdHlwZW9mIGNsZWFySW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBjbGVhckltbWVkaWF0ZSA6IGZ1bmN0aW9uKGlkKSB7XG4gIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIxLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7RXZlbnREaXNwYXRjaGVyfSBmcm9tICdhbHNjJztcclxuXHJcbmltcG9ydCAqIGFzIGFnZW50IGZyb20gXCJzdXBlcmFnZW50XCI7XHJcbmltcG9ydCAqIGFzIGFzeW5jIGZyb20gXCJhc3luY1wiO1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG52YXIgU0hBREVSX1RZUEUgPSB7fTtcclxuU0hBREVSX1RZUEVbXCJ2ZXJ0ZXhcIl0gPSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuVkVSVEVYX1NIQURFUjtcclxuU0hBREVSX1RZUEVbXCJmcmFnbWVudFwiXSA9IFdlYkdMUmVuZGVyaW5nQ29udGV4dC5GUkFHTUVOVF9TSEFERVI7XHJcblxyXG5jbGFzcyBTYW1wbGVGaWVsZCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlcntcclxuICAgIGNvbnN0cnVjdG9yKHNyYyxkaXN0KXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXNbXCJfc3JjUGF0aFwiXSA9IHNyYztcclxuICAgICAgICB0aGlzW1wiX2Rpc3RQYXRoXCJdID0gZGlzdDtcclxuICAgICAgICB0aGlzLnNoYWRlcnNEaWN0ID0ge307XHJcbiAgICAgICAgdGhpcy5DT05TVEFOVFMgPSBPYmplY3QuYXNzaWduKHt9LHV0aWxzLmNvbnN0YW50cyk7XHJcbiAgICAgICAgdGhpcy5DT05TVEFOVFMuViA9IHRoaXMuQ09OU1RBTlRTLlZFUlRFWF9TSEFERVIgPSBcInZlcnRleFwiO1xyXG4gICAgICAgIHRoaXMuQ09OU1RBTlRTLkYgPSB0aGlzLkNPTlNUQU5UUy5GUkFHTUVOVF9TSEFERVIgPSBcImZyYWdtZW50XCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3JjUGF0aCh1cmwpe1xyXG4gICAgICAgIHJldHVybiB1dGlscy51cmwuam9pbih0aGlzLl9zcmNQYXRoLHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdFBhdGgodXJsKXtcclxuICAgICAgICByZXR1cm4gdXRpbHMudXJsLmpvaW4odGhpcy5fZGlzdFBhdGgsdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkT25lU2hhZGVyKGdsLHVybCx0eXBlLG5hbWUsY2Ipe1xyXG4gICAgICAgIHJldHVybiBhZ2VudC5nZXQodXJsKS5lbmQoKGVycixyZXMpPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgaWYoISh0eXBlIGluIFNIQURFUl9UWVBFKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoU0hBREVSX1RZUEVbdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgcmVzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcnNEaWN0W25hbWVdID0gc2hhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYj09PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICBjYihlcnIscmVzLnRleHR8fFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2hhZGVycyhnbCxjYixsb2Fkb2JqKXtcclxuICAgICAgICBpZih0eXBlb2YgY2IhPT1cImZ1bmN0aW9uXCIgfHwgIUFycmF5LmlzQXJyYXkobG9hZG9iaikgfHwgbG9hZG9iai5sZW5ndGg8PTApcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgdGFza3MgPSBsb2Fkb2JqLm1hcCgobG9hZCk9PntcclxuICAgICAgICAgICAgaWYobG9hZC51cmwgJiYgbG9hZC50eXBlICYmIGxvYWQubmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkT25lU2hhZGVyKGdsLGxvYWQudXJsLGxvYWQudHlwZSxsb2FkLm5hbWUsbmV4dClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKG5leHQpPT57bmV4dChudWxsLCBcIlwiKX1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXN5bmMuc2VyaWVzKHRhc2tzLCgpPT57XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsYXVuY2goY2FudmFzKXtcclxuICAgICAgICAvL1RPRE866ZyA6KaB5Lyg5YWlY2FudmFzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlc3RydWN0KCl7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMub25EZXN0cnVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkZXN0cnVjdFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3RydWN0KCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIm9uRGVzdHJ1Y3Qgbm90IGltcGxlbWVudCB5ZXQhXCIsdGhpcy5fc3JjUGF0aCx0aGlzLl9kaXN0UGF0aCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZUZpZWxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy92aWV3L2NvbnRlbnQvU2FtcGxlRmllbGQuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvOC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLElucHV0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic2lkZWJhclwiIG1kPXszfT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGtleSB3b3Jkcy4uLidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTYW1wbGVJdGVtKCl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2FtcGxlSXRlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNhbXBsZXNMaXN0Lm1hcCgoc2FtcGxlKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17c2FtcGxlLmlkfT57c2FtcGxlLnRpdGxlfTwvbGk+XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL3ZpZXcvaW5jL1NpZGVCYXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+wqkgMjAxNSZuYnNwOzxhIGhyZWY9e2NvbmZpZy51cmx9PnRvbW15enptPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlBvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhY3Q8L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL1wiIHRhcmdldD1cIl9ibGFua1wiPkJvb3RTdHJhcDwvYT48L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzIzLlxyXG4gKi9cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5cclxudmFyIGxvb3AgPSBcImxvb3BcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGlvbk1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICBpZighKEFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgQW5pbWF0aW9uTWFuYWdlcikpe1xyXG4gICAgICAgICAgICBBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBBbmltYXRpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIHRoaXMuX3N0b3BTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xvb3AoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoZm9yY2U9dHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICBpZihmb3JjZSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXIobG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9vcChmbil7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcihsb29wLGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9vcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX3N0b3BTdGF0ZSlyZXR1cm47XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KGxvb3ApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25NYW5hZ2VyLmluc3RhbmNlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjL2NvcmUvQW5pbWF0aW9uTWFuYWdlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=