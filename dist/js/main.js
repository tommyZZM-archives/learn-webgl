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
	
	var _layoutHeaderJs = __webpack_require__(6);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(7);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(157);
	
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
	
	exports.EventDispatcher = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var eventsMap = typeof Symbol === "function" ? Symbol() : "___eventsMap";
	
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
	
	                notifyArray(eventmap, args);
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
	            registNotify(this[eventsMap], event, callback, thisObject, null, priority);
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
	            unregistNotify(this[eventsMap], event, callback, thisObject);
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
	            registNotify(this[eventsMap], event, callback);
	        }
	
	        /**
	         * 当,唯一触发器
	         * @param event
	         * @param callback
	         */
	    }, {
	        key: "once",
	        value: function once(event, callback) {
	            registNotify(this[eventsMap], event, callback, null, null, null, true);
	            //this.removeAllListener(event);
	        }
	    }]);
	
	    return EventDispatcher;
	})();
	
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
	
	module.exports = EventDispatcher;

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
	
	var _alsc = __webpack_require__(4);
	
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
	
	var _incContentJs = __webpack_require__(154);
	
	var _incContentJs2 = _interopRequireDefault(_incContentJs);
	
	var _incSideBarJs = __webpack_require__(155);
	
	var _incSideBarJs2 = _interopRequireDefault(_incSideBarJs);
	
	var _coreExampleManagerJs = __webpack_require__(156);
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	var _interopRequireWildcard = __webpack_require__(38)['default'];
	
	exports.__esModule = true;
	
	var _Accordion2 = __webpack_require__(39);
	
	var _Accordion3 = _interopRequireDefault(_Accordion2);
	
	exports.Accordion = _Accordion3['default'];
	
	var _Affix2 = __webpack_require__(49);
	
	var _Affix3 = _interopRequireDefault(_Affix2);
	
	exports.Affix = _Affix3['default'];
	
	var _AffixMixin2 = __webpack_require__(50);
	
	var _AffixMixin3 = _interopRequireDefault(_AffixMixin2);
	
	exports.AffixMixin = _AffixMixin3['default'];
	
	var _Alert2 = __webpack_require__(53);
	
	var _Alert3 = _interopRequireDefault(_Alert2);
	
	exports.Alert = _Alert3['default'];
	
	var _Badge2 = __webpack_require__(54);
	
	var _Badge3 = _interopRequireDefault(_Badge2);
	
	exports.Badge = _Badge3['default'];
	
	var _BootstrapMixin2 = __webpack_require__(41);
	
	var _BootstrapMixin3 = _interopRequireDefault(_BootstrapMixin2);
	
	exports.BootstrapMixin = _BootstrapMixin3['default'];
	
	var _Button2 = __webpack_require__(55);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	exports.Button = _Button3['default'];
	
	var _ButtonGroup2 = __webpack_require__(61);
	
	var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);
	
	exports.ButtonGroup = _ButtonGroup3['default'];
	
	var _ButtonInput2 = __webpack_require__(56);
	
	var _ButtonInput3 = _interopRequireDefault(_ButtonInput2);
	
	exports.ButtonInput = _ButtonInput3['default'];
	
	var _ButtonToolbar2 = __webpack_require__(62);
	
	var _ButtonToolbar3 = _interopRequireDefault(_ButtonToolbar2);
	
	exports.ButtonToolbar = _ButtonToolbar3['default'];
	
	var _Carousel2 = __webpack_require__(63);
	
	var _Carousel3 = _interopRequireDefault(_Carousel2);
	
	exports.Carousel = _Carousel3['default'];
	
	var _CarouselItem2 = __webpack_require__(65);
	
	var _CarouselItem3 = _interopRequireDefault(_CarouselItem2);
	
	exports.CarouselItem = _CarouselItem3['default'];
	
	var _Col2 = __webpack_require__(67);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	exports.Col = _Col3['default'];
	
	var _CollapsibleMixin2 = __webpack_require__(68);
	
	var _CollapsibleMixin3 = _interopRequireDefault(_CollapsibleMixin2);
	
	exports.CollapsibleMixin = _CollapsibleMixin3['default'];
	
	var _CollapsibleNav2 = __webpack_require__(73);
	
	var _CollapsibleNav3 = _interopRequireDefault(_CollapsibleNav2);
	
	exports.CollapsibleNav = _CollapsibleNav3['default'];
	
	var _DropdownButton2 = __webpack_require__(77);
	
	var _DropdownButton3 = _interopRequireDefault(_DropdownButton2);
	
	exports.DropdownButton = _DropdownButton3['default'];
	
	var _DropdownMenu2 = __webpack_require__(79);
	
	var _DropdownMenu3 = _interopRequireDefault(_DropdownMenu2);
	
	exports.DropdownMenu = _DropdownMenu3['default'];
	
	var _DropdownStateMixin2 = __webpack_require__(78);
	
	var _DropdownStateMixin3 = _interopRequireDefault(_DropdownStateMixin2);
	
	exports.DropdownStateMixin = _DropdownStateMixin3['default'];
	
	var _FadeMixin2 = __webpack_require__(80);
	
	var _FadeMixin3 = _interopRequireDefault(_FadeMixin2);
	
	exports.FadeMixin = _FadeMixin3['default'];
	
	var _Glyphicon2 = __webpack_require__(64);
	
	var _Glyphicon3 = _interopRequireDefault(_Glyphicon2);
	
	exports.Glyphicon = _Glyphicon3['default'];
	
	var _Grid2 = __webpack_require__(81);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	exports.Grid = _Grid3['default'];
	
	var _Input2 = __webpack_require__(82);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	exports.Input = _Input3['default'];
	
	var _Interpolate2 = __webpack_require__(85);
	
	var _Interpolate3 = _interopRequireDefault(_Interpolate2);
	
	exports.Interpolate = _Interpolate3['default'];
	
	var _Jumbotron2 = __webpack_require__(86);
	
	var _Jumbotron3 = _interopRequireDefault(_Jumbotron2);
	
	exports.Jumbotron = _Jumbotron3['default'];
	
	var _Label2 = __webpack_require__(87);
	
	var _Label3 = _interopRequireDefault(_Label2);
	
	exports.Label = _Label3['default'];
	
	var _ListGroup2 = __webpack_require__(88);
	
	var _ListGroup3 = _interopRequireDefault(_ListGroup2);
	
	exports.ListGroup = _ListGroup3['default'];
	
	var _ListGroupItem2 = __webpack_require__(89);
	
	var _ListGroupItem3 = _interopRequireDefault(_ListGroupItem2);
	
	exports.ListGroupItem = _ListGroupItem3['default'];
	
	var _MenuItem2 = __webpack_require__(91);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	exports.MenuItem = _MenuItem3['default'];
	
	var _Modal2 = __webpack_require__(92);
	
	var _Modal3 = _interopRequireDefault(_Modal2);
	
	exports.Modal = _Modal3['default'];
	
	var _ModalHeader2 = __webpack_require__(99);
	
	var _ModalHeader3 = _interopRequireDefault(_ModalHeader2);
	
	exports.ModalHeader = _ModalHeader3['default'];
	
	var _ModalTitle2 = __webpack_require__(9);
	
	var _ModalTitle3 = _interopRequireDefault(_ModalTitle2);
	
	exports.ModalTitle = _ModalTitle3['default'];
	
	var _ModalBody2 = __webpack_require__(98);
	
	var _ModalBody3 = _interopRequireDefault(_ModalBody2);
	
	exports.ModalBody = _ModalBody3['default'];
	
	var _ModalFooter2 = __webpack_require__(100);
	
	var _ModalFooter3 = _interopRequireDefault(_ModalFooter2);
	
	exports.ModalFooter = _ModalFooter3['default'];
	
	var _Nav2 = __webpack_require__(101);
	
	var _Nav3 = _interopRequireDefault(_Nav2);
	
	exports.Nav = _Nav3['default'];
	
	var _Navbar2 = __webpack_require__(102);
	
	var _Navbar3 = _interopRequireDefault(_Navbar2);
	
	exports.Navbar = _Navbar3['default'];
	
	var _NavItem2 = __webpack_require__(103);
	
	var _NavItem3 = _interopRequireDefault(_NavItem2);
	
	exports.NavItem = _NavItem3['default'];
	
	var _Overlay2 = __webpack_require__(104);
	
	var _Overlay3 = _interopRequireDefault(_Overlay2);
	
	exports.Overlay = _Overlay3['default'];
	
	var _OverlayTrigger2 = __webpack_require__(108);
	
	var _OverlayTrigger3 = _interopRequireDefault(_OverlayTrigger2);
	
	exports.OverlayTrigger = _OverlayTrigger3['default'];
	
	var _PageHeader2 = __webpack_require__(135);
	
	var _PageHeader3 = _interopRequireDefault(_PageHeader2);
	
	exports.PageHeader = _PageHeader3['default'];
	
	var _PageItem2 = __webpack_require__(136);
	
	var _PageItem3 = _interopRequireDefault(_PageItem2);
	
	exports.PageItem = _PageItem3['default'];
	
	var _Pager2 = __webpack_require__(137);
	
	var _Pager3 = _interopRequireDefault(_Pager2);
	
	exports.Pager = _Pager3['default'];
	
	var _Pagination2 = __webpack_require__(138);
	
	var _Pagination3 = _interopRequireDefault(_Pagination2);
	
	exports.Pagination = _Pagination3['default'];
	
	var _Panel2 = __webpack_require__(141);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	exports.Panel = _Panel3['default'];
	
	var _PanelGroup2 = __webpack_require__(40);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	exports.PanelGroup = _PanelGroup3['default'];
	
	var _Popover2 = __webpack_require__(142);
	
	var _Popover3 = _interopRequireDefault(_Popover2);
	
	exports.Popover = _Popover3['default'];
	
	var _ProgressBar2 = __webpack_require__(143);
	
	var _ProgressBar3 = _interopRequireDefault(_ProgressBar2);
	
	exports.ProgressBar = _ProgressBar3['default'];
	
	var _Row2 = __webpack_require__(144);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	exports.Row = _Row3['default'];
	
	var _SafeAnchor2 = __webpack_require__(90);
	
	var _SafeAnchor3 = _interopRequireDefault(_SafeAnchor2);
	
	exports.SafeAnchor = _SafeAnchor3['default'];
	
	var _SplitButton2 = __webpack_require__(145);
	
	var _SplitButton3 = _interopRequireDefault(_SplitButton2);
	
	exports.SplitButton = _SplitButton3['default'];
	
	var _styleMaps2 = __webpack_require__(42);
	
	var _styleMaps3 = _interopRequireDefault(_styleMaps2);
	
	exports.styleMaps = _styleMaps3['default'];
	
	var _SubNav2 = __webpack_require__(146);
	
	var _SubNav3 = _interopRequireDefault(_SubNav2);
	
	exports.SubNav = _SubNav3['default'];
	
	var _TabbedArea2 = __webpack_require__(147);
	
	var _TabbedArea3 = _interopRequireDefault(_TabbedArea2);
	
	exports.TabbedArea = _TabbedArea3['default'];
	
	var _Table2 = __webpack_require__(148);
	
	var _Table3 = _interopRequireDefault(_Table2);
	
	exports.Table = _Table3['default'];
	
	var _TabPane2 = __webpack_require__(149);
	
	var _TabPane3 = _interopRequireDefault(_TabPane2);
	
	exports.TabPane = _TabPane3['default'];
	
	var _Thumbnail2 = __webpack_require__(150);
	
	var _Thumbnail3 = _interopRequireDefault(_Thumbnail2);
	
	exports.Thumbnail = _Thumbnail3['default'];
	
	var _Tooltip2 = __webpack_require__(151);
	
	var _Tooltip3 = _interopRequireDefault(_Tooltip2);
	
	exports.Tooltip = _Tooltip3['default'];
	
	var _Well2 = __webpack_require__(152);
	
	var _Well3 = _interopRequireDefault(_Well2);
	
	exports.Well = _Well3['default'];
	
	var _Portal2 = __webpack_require__(95);
	
	var _Portal3 = _interopRequireDefault(_Portal2);
	
	exports.Portal = _Portal3['default'];
	
	var _Position2 = __webpack_require__(105);
	
	var _Position3 = _interopRequireDefault(_Position2);
	
	exports.Position = _Position3['default'];
	
	var _Collapse2 = __webpack_require__(74);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	exports.Collapse = _Collapse3['default'];
	
	var _Collapse4 = _interopRequireDefault(_Collapse2);
	
	exports.Fade = _Collapse4['default'];
	
	var _FormControls2 = __webpack_require__(83);
	
	var _FormControls = _interopRequireWildcard(_FormControls2);
	
	exports.FormControls = _FormControls;
	
	var _utils2 = __webpack_require__(153);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	exports.utils = _utils;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ModalTitle = (function (_React$Component) {
	  _inherits(ModalTitle, _React$Component);
	
	  function ModalTitle() {
	    _classCallCheck(this, ModalTitle);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalTitle.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'h4',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
	      this.props.children
	    );
	  };
	
	  return ModalTitle;
	})(_react2['default'].Component);
	
	ModalTitle.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string
	};
	
	ModalTitle.defaultProps = {
	  modalClassName: 'modal-title'
	};
	
	exports['default'] = ModalTitle;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(12)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(15)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17);
	module.exports = __webpack_require__(20).Object.setPrototypeOf;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(18);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(21).set});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(19)
	  , core      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 19 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(14).getDesc
	  , isObject = __webpack_require__(22)
	  , anObject = __webpack_require__(23);
	function check(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(24)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(28)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = __webpack_require__(20).Object.assign;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(18);
	$def($def.S, 'Object', {assign: __webpack_require__(31)});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var toObject  = __webpack_require__(32)
	  , ES5Object = __webpack_require__(33)
	  , enumKeys  = __webpack_require__(36);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target, true)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var ES5Object = __webpack_require__(33)
	  , defined   = __webpack_require__(35);
	module.exports = function(it, realString){
	  return (realString ? Object : ES5Object)(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for not array-like ES3 strings
	var cof     = __webpack_require__(34)
	  , $Object = Object;
	module.exports = 0 in $Object('z') ? $Object : function(it){
	  return cof(it) == 'String' ? it.split('') : $Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , isEnum     = $.isEnum
	    , getSymbols = $.getSymbols;
	  if(getSymbols)for(var symbols = getSymbols(it), i = 0, key; symbols.length > i; ){
	    if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PanelGroup = __webpack_require__(40);
	
	var _PanelGroup2 = _interopRequireDefault(_PanelGroup);
	
	var Accordion = _react2['default'].createClass({
	  displayName: 'Accordion',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _PanelGroup2['default'],
	      _extends({}, this.props, { accordion: true }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Accordion;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/prop-types: [2, {ignore: "bsStyle"}] */
	/* BootstrapMixin contains `bsStyle` type validation */
	
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var PanelGroup = _react2['default'].createClass({
	  displayName: 'PanelGroup',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    accordion: _react2['default'].PropTypes.bool,
	    activeKey: _react2['default'].PropTypes.any,
	    className: _react2['default'].PropTypes.string,
	    children: _react2['default'].PropTypes.node,
	    defaultActiveKey: _react2['default'].PropTypes.any,
	    onSelect: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'panel-group'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey;
	
	    return {
	      activeKey: defaultActiveKey
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes), onSelect: null }),
	      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPanel)
	    );
	  },
	
	  renderPanel: function renderPanel(child, index) {
	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
	
	    var props = {
	      bsStyle: child.props.bsStyle || this.props.bsStyle,
	      key: child.key ? child.key : index,
	      ref: child.ref
	    };
	
	    if (this.props.accordion) {
	      props.collapsible = true;
	      props.expanded = child.props.eventKey === activeKey;
	      props.onSelect = this.handleSelect;
	    }
	
	    return _react.cloneElement(child, props);
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },
	
	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this._isChanging = true;
	      this.props.onSelect(key);
	      this._isChanging = false;
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({
	      activeKey: key
	    });
	  }
	});
	
	exports['default'] = PanelGroup;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleMaps = __webpack_require__(42);
	
	var _styleMaps2 = _interopRequireDefault(_styleMaps);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var BootstrapMixin = {
	  propTypes: {
	    /**
	     * bootstrap className
	     * @private
	     */
	    bsClass: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].CLASSES),
	    /**
	     * Style variants
	     * @type {("default"|"primary"|"success"|"info"|"warning"|"danger"|"link")}
	     */
	    bsStyle: _react2['default'].PropTypes.oneOf(_styleMaps2['default'].STYLES),
	    /**
	     * Size variants
	     * @type {("xsmall"|"small"|"medium"|"large"|"xs"|"sm"|"md"|"lg")}
	     */
	    bsSize: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].SIZES)
	  },
	
	  getBsClassSet: function getBsClassSet() {
	    var classes = {};
	
	    var bsClass = this.props.bsClass && _styleMaps2['default'].CLASSES[this.props.bsClass];
	    if (bsClass) {
	      classes[bsClass] = true;
	
	      var prefix = bsClass + '-';
	
	      var bsSize = this.props.bsSize && _styleMaps2['default'].SIZES[this.props.bsSize];
	      if (bsSize) {
	        classes[prefix + bsSize] = true;
	      }
	
	      if (this.props.bsStyle) {
	        if (_styleMaps2['default'].STYLES.indexOf(this.props.bsStyle) >= 0) {
	          classes[prefix + this.props.bsStyle] = true;
	        } else {
	          classes[this.props.bsStyle] = true;
	        }
	      }
	    }
	
	    return classes;
	  },
	
	  prefixClass: function prefixClass(subClass) {
	    return _styleMaps2['default'].CLASSES[this.props.bsClass] + '-' + subClass;
	  }
	};
	
	exports['default'] = BootstrapMixin;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var styleMaps = {
	  CLASSES: {
	    'alert': 'alert',
	    'button': 'btn',
	    'button-group': 'btn-group',
	    'button-toolbar': 'btn-toolbar',
	    'column': 'col',
	    'input-group': 'input-group',
	    'form': 'form',
	    'glyphicon': 'glyphicon',
	    'label': 'label',
	    'thumbnail': 'thumbnail',
	    'list-group-item': 'list-group-item',
	    'panel': 'panel',
	    'panel-group': 'panel-group',
	    'pagination': 'pagination',
	    'progress-bar': 'progress-bar',
	    'nav': 'nav',
	    'navbar': 'navbar',
	    'modal': 'modal',
	    'row': 'row',
	    'well': 'well'
	  },
	  STYLES: ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link', 'inline', 'tabs', 'pills'],
	  addStyle: function addStyle(name) {
	    styleMaps.STYLES.push(name);
	  },
	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs',
	    'lg': 'lg',
	    'md': 'md',
	    'sm': 'sm',
	    'xs': 'xs'
	  },
	  GLYPHS: ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign', 'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign', 'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment', 'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open', 'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down', 'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up', 'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip', 'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt', 'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand', 'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved', 'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open', 'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file', 'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent', 'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'yen', 'ruble', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical', 'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top', 'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right', 'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left', 'menu-right', 'menu-down', 'menu-up']
	};
	
	exports['default'] = styleMaps;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(44)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ANONYMOUS = '<<anonymous>>';
	
	var CustomPropTypes = {
	
	  isRequiredForA11y: function isRequiredForA11y(propType) {
	    return function (props, propName, componentName) {
	      if (props[propName] === null) {
	        return new Error('The prop `' + propName + '` is required to make ' + componentName + ' accessible ' + 'for users using assistive technologies such as screen readers `');
	      }
	
	      return propType(props, propName, componentName);
	    };
	  },
	
	  /**
	   * Checks whether a prop provides a DOM element
	   *
	   * The element can be provided in two forms:
	   * - Directly passed
	   * - Or passed an object that has a `render` method
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  mountable: createMountableChecker(),
	
	  /**
	   * Checks whether a prop provides a type of element.
	   *
	   * The type of element can be provided in two forms:
	   * - tag name (string)
	   * - a return value of React.createClass(...)
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  elementType: createElementTypeChecker(),
	
	  /**
	   * Checks whether a prop matches a key of an associated object
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  keyOf: createKeyOfChecker,
	  /**
	   * Checks if only one of the listed properties is in use. An error is given
	   * if multiple have a value
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  singlePropFrom: createSinglePropFromChecker,
	
	  all: all
	};
	
	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}
	
	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createMountableChecker() {
	  function validate(props, propName, componentName) {
	    if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
	      return new Error(errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
	    }
	  }
	
	  return createChainableTypeChecker(validate);
	}
	
	function createKeyOfChecker(obj) {
	  function validate(props, propName, componentName) {
	    var propValue = props[propName];
	    if (!obj.hasOwnProperty(propValue)) {
	      var valuesString = JSON.stringify(_Object$keys(obj));
	      return new Error(errMsg(props, propName, componentName, ', expected one of ' + valuesString + '.'));
	    }
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createSinglePropFromChecker(arrOfProps) {
	  function validate(props, propName, componentName) {
	    var usedPropCount = arrOfProps.map(function (listedProp) {
	      return props[listedProp];
	    }).reduce(function (acc, curr) {
	      return acc + (curr !== undefined ? 1 : 0);
	    }, 0);
	
	    if (usedPropCount > 1) {
	      var first = arrOfProps[0];
	      var others = arrOfProps.slice(1);
	
	      var message = others.join(', ') + ' and ' + first;
	      return new Error('Invalid prop \'' + propName + '\', only one of the following ' + ('may be provided: ' + message));
	    }
	  }
	  return validate;
	}
	
	function all(propTypes) {
	  if (propTypes === undefined) {
	    throw new Error('No validations provided');
	  }
	
	  if (!(propTypes instanceof Array)) {
	    throw new Error('Invalid argument must be an array');
	  }
	
	  if (propTypes.length === 0) {
	    throw new Error('No validations provided');
	  }
	
	  return function (props, propName, componentName) {
	    for (var i = 0; i < propTypes.length; i++) {
	      var result = propTypes[i](props, propName, componentName);
	
	      if (result !== undefined && result !== null) {
	        return result;
	      }
	    }
	  };
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName) {
	    var errBeginning = errMsg(props, propName, componentName, '. Expected an Element `type`');
	
	    if (typeof props[propName] !== 'function') {
	      if (_react2['default'].isValidElement(props[propName])) {
	        return new Error(errBeginning + ', not an actual Element');
	      }
	
	      if (typeof props[propName] !== 'string') {
	        return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	      }
	    }
	  }
	
	  return createChainableTypeChecker(validate);
	}
	
	exports['default'] = CustomPropTypes;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	module.exports = __webpack_require__(20).Object.keys;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(14)
	  , core     = __webpack_require__(20)
	  , $def     = __webpack_require__(18)
	  , toObject = __webpack_require__(32)
	  , isObject = __webpack_require__(22);
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = (core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(toObject(it, true));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(47).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString = {}.toString
	  , toObject = __webpack_require__(32)
	  , getNames = __webpack_require__(14).getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toObject(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	/**
	 * Maps children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The mapFunction provided index will be normalised to the components mapped,
	 * so an invalid component would not increase the index.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} mapFunction.
	 * @param {*} mapContext Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	
	var _react2 = _interopRequireDefault(_react);
	
	function mapValidComponents(children, func, context) {
	  var index = 0;
	
	  return _react2['default'].Children.map(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      var lastIndex = index;
	      index++;
	      return func.call(context, child, lastIndex);
	    }
	
	    return child;
	  });
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc.
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachValidComponents(children, func, context) {
	  var index = 0;
	
	  return _react2['default'].Children.forEach(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      func.call(context, child, index);
	      index++;
	    }
	  });
	}
	
	/**
	 * Count the number of "valid components" in the Children container.
	 *
	 * @param {?*} children Children tree container.
	 * @returns {number}
	 */
	function numberOfValidComponents(children) {
	  var count = 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      count++;
	    }
	  });
	
	  return count;
	}
	
	/**
	 * Determine if the Child container has one or more "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @returns {boolean}
	 */
	function hasValidComponent(children) {
	  var hasValid = false;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!hasValid && _react2['default'].isValidElement(child)) {
	      hasValid = true;
	    }
	  });
	
	  return hasValid;
	}
	
	exports['default'] = {
	  map: mapValidComponents,
	  forEach: forEachValidComponents,
	  numberOf: numberOfValidComponents,
	  hasValidComponent: hasValidComponent
	};
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _AffixMixin = __webpack_require__(50);
	
	var _AffixMixin2 = _interopRequireDefault(_AffixMixin);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var Affix = _react2['default'].createClass({
	  displayName: 'Affix',
	
	  statics: {
	    domUtils: _utilsDomUtils2['default']
	  },
	
	  mixins: [_AffixMixin2['default']],
	
	  render: function render() {
	    var holderStyle = { top: this.state.affixPositionTop };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, this.state.affixClass),
	        style: holderStyle }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Affix;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsEventListener = __webpack_require__(52);
	
	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);
	
	var AffixMixin = {
	  propTypes: {
	    offset: _react2['default'].PropTypes.number,
	    offsetTop: _react2['default'].PropTypes.number,
	    offsetBottom: _react2['default'].PropTypes.number
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      affixClass: 'affix-top'
	    };
	  },
	
	  getPinnedOffset: function getPinnedOffset(DOMNode) {
	    if (this.pinnedOffset) {
	      return this.pinnedOffset;
	    }
	
	    DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, '');
	    DOMNode.className += DOMNode.className.length ? ' affix' : 'affix';
	
	    this.pinnedOffset = _utilsDomUtils2['default'].getOffset(DOMNode).top - window.pageYOffset;
	
	    return this.pinnedOffset;
	  },
	
	  checkPosition: function checkPosition() {
	    var DOMNode = undefined,
	        scrollHeight = undefined,
	        scrollTop = undefined,
	        position = undefined,
	        offsetTop = undefined,
	        offsetBottom = undefined,
	        affix = undefined,
	        affixType = undefined,
	        affixPositionTop = undefined;
	
	    // TODO: or not visible
	    if (!this.isMounted()) {
	      return;
	    }
	
	    DOMNode = _react2['default'].findDOMNode(this);
	    scrollHeight = document.documentElement.offsetHeight;
	    scrollTop = window.pageYOffset;
	    position = _utilsDomUtils2['default'].getOffset(DOMNode);
	
	    if (this.affixed === 'top') {
	      position.top += scrollTop;
	    }
	
	    offsetTop = this.props.offsetTop != null ? this.props.offsetTop : this.props.offset;
	    offsetBottom = this.props.offsetBottom != null ? this.props.offsetBottom : this.props.offset;
	
	    if (offsetTop == null && offsetBottom == null) {
	      return;
	    }
	    if (offsetTop == null) {
	      offsetTop = 0;
	    }
	    if (offsetBottom == null) {
	      offsetBottom = 0;
	    }
	
	    if (this.unpin != null && scrollTop + this.unpin <= position.top) {
	      affix = false;
	    } else if (offsetBottom != null && position.top + DOMNode.offsetHeight >= scrollHeight - offsetBottom) {
	      affix = 'bottom';
	    } else if (offsetTop != null && scrollTop <= offsetTop) {
	      affix = 'top';
	    } else {
	      affix = false;
	    }
	
	    if (this.affixed === affix) {
	      return;
	    }
	
	    if (this.unpin != null) {
	      DOMNode.style.top = '';
	    }
	
	    affixType = 'affix' + (affix ? '-' + affix : '');
	
	    this.affixed = affix;
	    this.unpin = affix === 'bottom' ? this.getPinnedOffset(DOMNode) : null;
	
	    if (affix === 'bottom') {
	      DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, 'affix-bottom');
	      affixPositionTop = scrollHeight - offsetBottom - DOMNode.offsetHeight - _utilsDomUtils2['default'].getOffset(DOMNode).top;
	    }
	
	    this.setState({
	      affixClass: affixType,
	      affixPositionTop: affixPositionTop
	    });
	  },
	
	  checkPositionWithEventLoop: function checkPositionWithEventLoop() {
	    setTimeout(this.checkPosition, 0);
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._onWindowScrollListener = _utilsEventListener2['default'].listen(window, 'scroll', this.checkPosition);
	    this._onDocumentClickListener = _utilsEventListener2['default'].listen(_utilsDomUtils2['default'].ownerDocument(this), 'click', this.checkPositionWithEventLoop);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._onWindowScrollListener) {
	      this._onWindowScrollListener.remove();
	    }
	
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (prevState.affixClass === this.state.affixClass) {
	      this.checkPositionWithEventLoop();
	    }
	  }
	};
	
	exports['default'] = AffixMixin;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Get elements owner document
	 *
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLElement}
	 */
	function ownerDocument(componentOrElement) {
	  var elem = _react2['default'].findDOMNode(componentOrElement);
	  return elem && elem.ownerDocument || document;
	}
	
	function ownerWindow(componentOrElement) {
	  var doc = ownerDocument(componentOrElement);
	  return doc.defaultView ? doc.defaultView : doc.parentWindow;
	}
	
	/**
	 * get the active element, safe in IE
	 * @return {HTMLElement}
	 */
	function getActiveElement(componentOrElement) {
	  var doc = ownerDocument(componentOrElement);
	
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}
	
	/**
	 * Shortcut to compute element style
	 *
	 * @param {HTMLElement} elem
	 * @returns {CssStyle}
	 */
	function getComputedStyles(elem) {
	  return ownerDocument(elem).defaultView.getComputedStyle(elem, null);
	}
	
	/**
	 * Get elements offset
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} DOMNode
	 * @returns {{top: number, left: number}}
	 */
	function getOffset(DOMNode) {
	  if (window.jQuery) {
	    return window.jQuery(DOMNode).offset();
	  }
	
	  var docElem = ownerDocument(DOMNode).documentElement;
	  var box = { top: 0, left: 0 };
	
	  // If we don't have gBCR, just use 0,0 rather than error
	  // BlackBerry 5, iOS 3 (original iPhone)
	  if (typeof DOMNode.getBoundingClientRect !== 'undefined') {
	    box = DOMNode.getBoundingClientRect();
	  }
	
	  return {
	    top: box.top + window.pageYOffset - docElem.clientTop,
	    left: box.left + window.pageXOffset - docElem.clientLeft
	  };
	}
	
	/**
	 * Get elements position
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} elem
	 * @param {HTMLElement?} offsetParent
	 * @returns {{top: number, left: number}}
	 */
	function getPosition(elem, offsetParent) {
	  var offset = undefined,
	      parentOffset = undefined;
	
	  if (window.jQuery) {
	    if (!offsetParent) {
	      return window.jQuery(elem).position();
	    }
	
	    offset = window.jQuery(elem).offset();
	    parentOffset = window.jQuery(offsetParent).offset();
	
	    // Get element offset relative to offsetParent
	    return {
	      top: offset.top - parentOffset.top,
	      left: offset.left - parentOffset.left
	    };
	  }
	
	  parentOffset = { top: 0, left: 0 };
	
	  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
	  if (getComputedStyles(elem).position === 'fixed') {
	    // We assume that getBoundingClientRect is available when computed position is fixed
	    offset = elem.getBoundingClientRect();
	  } else {
	    if (!offsetParent) {
	      // Get *real* offsetParent
	      offsetParent = offsetParentFunc(elem);
	    }
	
	    // Get correct offsets
	    offset = getOffset(elem);
	    if (offsetParent.nodeName !== 'HTML') {
	      parentOffset = getOffset(offsetParent);
	    }
	
	    // Add offsetParent borders
	    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
	    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
	  }
	
	  // Subtract parent offsets and element margins
	  return {
	    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
	    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
	  };
	}
	
	/**
	 * Get an element's size
	 *
	 * @param {HTMLElement} elem
	 * @returns {{width: number, height: number}}
	 */
	function getSize(elem) {
	  var rect = {
	    width: elem.offsetWidth || 0,
	    height: elem.offsetHeight || 0
	  };
	  if (typeof elem.getBoundingClientRect !== 'undefined') {
	    var _elem$getBoundingClientRect = elem.getBoundingClientRect();
	
	    var width = _elem$getBoundingClientRect.width;
	    var height = _elem$getBoundingClientRect.height;
	
	    rect.width = width || rect.width;
	    rect.height = height || rect.height;
	  }
	  return rect;
	}
	
	/**
	 * Get parent element
	 *
	 * @param {HTMLElement?} elem
	 * @returns {HTMLElement}
	 */
	function offsetParentFunc(elem) {
	  var docElem = ownerDocument(elem).documentElement;
	  var offsetParent = elem.offsetParent || docElem;
	
	  while (offsetParent && (offsetParent.nodeName !== 'HTML' && getComputedStyles(offsetParent).position === 'static')) {
	    offsetParent = offsetParent.offsetParent;
	  }
	
	  return offsetParent || docElem;
	}
	
	/**
	 * Cross browser .contains() polyfill
	 * @param  {HTMLElement} elem
	 * @param  {HTMLElement} inner
	 * @return {bool}
	 */
	function contains(elem, inner) {
	  function ie8Contains(root, node) {
	    while (node) {
	      if (node === root) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  }
	
	  return elem && elem.contains ? elem.contains(inner) : elem && elem.compareDocumentPosition ? elem === inner || !!(elem.compareDocumentPosition(inner) & 16) : ie8Contains(elem, inner);
	}
	
	exports['default'] = {
	  canUseDom: canUseDom,
	  contains: contains,
	  ownerWindow: ownerWindow,
	  ownerDocument: ownerDocument,
	  getComputedStyles: getComputedStyles,
	  getOffset: getOffset,
	  getPosition: getPosition,
	  getSize: getSize,
	  activeElement: getActiveElement,
	  offsetParent: offsetParentFunc
	};
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * This file contains a modified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * TODO: remove in favour of solution provided by:
	 *  https://github.com/facebook/react/issues/285
	 */
	
	/**
	 * Does not take into account specific nature of platform.
	 */
	'use strict';
	
	exports.__esModule = true;
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports['default'] = EventListener;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var Alert = _react2['default'].createClass({
	  displayName: 'Alert',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    onDismiss: _react2['default'].PropTypes.func,
	    dismissAfter: _react2['default'].PropTypes.number,
	    closeLabel: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'alert',
	      bsStyle: 'info',
	      closeLabel: 'Close Alert'
	    };
	  },
	
	  renderDismissButton: function renderDismissButton() {
	    return _react2['default'].createElement(
	      'button',
	      {
	        type: "button",
	        className: "close",
	        'aria-label': this.props.closeLabel,
	        onClick: this.props.onDismiss },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-hidden': "true" },
	        '×'
	      )
	    );
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	    var isDismissable = !!this.props.onDismiss;
	
	    classes['alert-dismissable'] = isDismissable;
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { role: 'alert', className: _classnames2['default'](this.props.className, classes) }),
	      isDismissable ? this.renderDismissButton() : null,
	      this.props.children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.props.dismissAfter && this.props.onDismiss) {
	      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.dismissTimer);
	  }
	});
	
	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Badge = _react2['default'].createClass({
	  displayName: 'Badge',
	
	  propTypes: {
	    pullRight: _react2['default'].PropTypes.bool
	  },
	
	  hasContent: function hasContent() {
	    return _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || _react2['default'].Children.count(this.props.children) > 1 || typeof this.props.children === 'string' || typeof this.props.children === 'number';
	  },
	
	  render: function render() {
	    var classes = {
	      'pull-right': this.props.pullRight,
	      'badge': this.hasContent()
	    };
	    return _react2['default'].createElement(
	      'span',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Badge;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var _ButtonInput = __webpack_require__(56);
	
	var _ButtonInput2 = _interopRequireDefault(_ButtonInput);
	
	var Button = _react2['default'].createClass({
	  displayName: 'Button',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    block: _react2['default'].PropTypes.bool,
	    navItem: _react2['default'].PropTypes.bool,
	    navDropdown: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _utilsCustomPropTypes2['default'].elementType,
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    /**
	     * Defines HTML button type Attribute
	     * @type {("button"|"reset"|"submit")}
	     */
	    type: _react2['default'].PropTypes.oneOf(_ButtonInput2['default'].types)
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'button',
	      bsStyle: 'default'
	    };
	  },
	
	  render: function render() {
	    var classes = this.props.navDropdown ? {} : this.getBsClassSet();
	    var renderFuncName = undefined;
	
	    classes = _extends({
	      active: this.props.active,
	      'btn-block': this.props.block
	    }, classes);
	
	    if (this.props.navItem) {
	      return this.renderNavItem(classes);
	    }
	
	    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';
	
	    return this[renderFuncName](classes);
	  },
	
	  renderAnchor: function renderAnchor(classes) {
	
	    var Component = this.props.componentClass || 'a';
	    var href = this.props.href || '#';
	    classes.disabled = this.props.disabled;
	
	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        href: href,
	        className: _classnames2['default'](this.props.className, classes),
	        role: "button" }),
	      this.props.children
	    );
	  },
	
	  renderButton: function renderButton(classes) {
	    var Component = this.props.componentClass || 'button';
	
	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        type: this.props.type || 'button',
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  },
	
	  renderNavItem: function renderNavItem(classes) {
	    var liClasses = {
	      active: this.props.active
	    };
	
	    return _react2['default'].createElement(
	      'li',
	      { className: _classnames2['default'](liClasses) },
	      this.renderAnchor(classes)
	    );
	  }
	});
	
	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(55);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(58);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _InputBase2 = __webpack_require__(59);
	
	var _InputBase3 = _interopRequireDefault(_InputBase2);
	
	var _utilsChildrenValueInputValidation = __webpack_require__(60);
	
	var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);
	
	var ButtonInput = (function (_InputBase) {
	  _inherits(ButtonInput, _InputBase);
	
	  function ButtonInput() {
	    _classCallCheck(this, ButtonInput);
	
	    _InputBase.apply(this, arguments);
	  }
	
	  ButtonInput.prototype.renderFormGroup = function renderFormGroup(children) {
	    var _props = this.props;
	    var bsStyle = _props.bsStyle;
	    var value = _props.value;
	
	    var other = _objectWithoutProperties(_props, ['bsStyle', 'value']);
	
	    return _react2['default'].createElement(
	      _FormGroup2['default'],
	      other,
	      children
	    );
	  };
	
	  ButtonInput.prototype.renderInput = function renderInput() {
	    var _props2 = this.props;
	    var children = _props2.children;
	    var value = _props2.value;
	
	    var other = _objectWithoutProperties(_props2, ['children', 'value']);
	
	    var val = children ? children : value;
	    return _react2['default'].createElement(_Button2['default'], _extends({}, other, { componentClass: "input", ref: "input", key: "input", value: val }));
	  };
	
	  return ButtonInput;
	})(_InputBase3['default']);
	
	ButtonInput.types = ['button', 'reset', 'submit'];
	
	ButtonInput.defaultProps = {
	  type: 'button'
	};
	
	ButtonInput.propTypes = {
	  type: _react2['default'].PropTypes.oneOf(ButtonInput.types),
	  bsStyle: function bsStyle(props) {
	    //defer to Button propTypes of bsStyle
	    return null;
	  },
	  children: _utilsChildrenValueInputValidation2['default'],
	  value: _utilsChildrenValueInputValidation2['default']
	};
	
	exports['default'] = ButtonInput;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var FormGroup = (function (_React$Component) {
	  _inherits(FormGroup, _React$Component);
	
	  function FormGroup() {
	    _classCallCheck(this, FormGroup);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  FormGroup.prototype.render = function render() {
	    var classes = {
	      'form-group': !this.props.standalone,
	      'form-group-lg': !this.props.standalone && this.props.bsSize === 'large',
	      'form-group-sm': !this.props.standalone && this.props.bsSize === 'small',
	      'has-feedback': this.props.hasFeedback,
	      'has-success': this.props.bsStyle === 'success',
	      'has-warning': this.props.bsStyle === 'warning',
	      'has-error': this.props.bsStyle === 'error'
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: _classnames2['default'](classes, this.props.groupClassName) },
	      this.props.children
	    );
	  };
	
	  return FormGroup;
	})(_react2['default'].Component);
	
	FormGroup.defaultProps = {
	  standalone: false
	};
	
	FormGroup.propTypes = {
	  standalone: _react2['default'].PropTypes.bool,
	  hasFeedback: _react2['default'].PropTypes.bool,
	  bsSize: function bsSize(props) {
	    if (props.standalone && props.bsSize !== undefined) {
	      return new Error('bsSize will not be used when `standalone` is set.');
	    }
	
	    return _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']).apply(null, arguments);
	  },
	  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
	  groupClassName: _react2['default'].PropTypes.string
	};
	
	exports['default'] = FormGroup;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _FormGroup = __webpack_require__(58);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var InputBase = (function (_React$Component) {
	  _inherits(InputBase, _React$Component);
	
	  function InputBase() {
	    _classCallCheck(this, InputBase);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  InputBase.prototype.getInputDOMNode = function getInputDOMNode() {
	    return _react2['default'].findDOMNode(this.refs.input);
	  };
	
	  InputBase.prototype.getValue = function getValue() {
	    if (this.props.type === 'static') {
	      return this.props.value;
	    } else if (this.props.type) {
	      if (this.props.type === 'select' && this.props.multiple) {
	        return this.getSelectedOptions();
	      } else {
	        return this.getInputDOMNode().value;
	      }
	    } else {
	      throw 'Cannot use getValue without specifying input type.';
	    }
	  };
	
	  InputBase.prototype.getChecked = function getChecked() {
	    return this.getInputDOMNode().checked;
	  };
	
	  InputBase.prototype.getSelectedOptions = function getSelectedOptions() {
	    var values = [];
	
	    Array.prototype.forEach.call(this.getInputDOMNode().getElementsByTagName('option'), function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;
	        values.push(value);
	      }
	    });
	
	    return values;
	  };
	
	  InputBase.prototype.isCheckboxOrRadio = function isCheckboxOrRadio() {
	    return this.props.type === 'checkbox' || this.props.type === 'radio';
	  };
	
	  InputBase.prototype.isFile = function isFile() {
	    return this.props.type === 'file';
	  };
	
	  InputBase.prototype.renderInputGroup = function renderInputGroup(children) {
	    var addonBefore = this.props.addonBefore ? _react2['default'].createElement(
	      'span',
	      { className: "input-group-addon", key: "addonBefore" },
	      this.props.addonBefore
	    ) : null;
	
	    var addonAfter = this.props.addonAfter ? _react2['default'].createElement(
	      'span',
	      { className: "input-group-addon", key: "addonAfter" },
	      this.props.addonAfter
	    ) : null;
	
	    var buttonBefore = this.props.buttonBefore ? _react2['default'].createElement(
	      'span',
	      { className: "input-group-btn" },
	      this.props.buttonBefore
	    ) : null;
	
	    var buttonAfter = this.props.buttonAfter ? _react2['default'].createElement(
	      'span',
	      { className: "input-group-btn" },
	      this.props.buttonAfter
	    ) : null;
	
	    var inputGroupClassName = undefined;
	    switch (this.props.bsSize) {
	      case 'small':
	        inputGroupClassName = 'input-group-sm';break;
	      case 'large':
	        inputGroupClassName = 'input-group-lg';break;
	    }
	
	    return addonBefore || addonAfter || buttonBefore || buttonAfter ? _react2['default'].createElement(
	      'div',
	      { className: _classnames2['default'](inputGroupClassName, 'input-group'), key: "input-group" },
	      addonBefore,
	      buttonBefore,
	      children,
	      addonAfter,
	      buttonAfter
	    ) : children;
	  };
	
	  InputBase.prototype.renderIcon = function renderIcon() {
	    var classes = {
	      'glyphicon': true,
	      'form-control-feedback': true,
	      'glyphicon-ok': this.props.bsStyle === 'success',
	      'glyphicon-warning-sign': this.props.bsStyle === 'warning',
	      'glyphicon-remove': this.props.bsStyle === 'error'
	    };
	
	    return this.props.hasFeedback ? _react2['default'].createElement('span', { className: _classnames2['default'](classes), key: "icon" }) : null;
	  };
	
	  InputBase.prototype.renderHelp = function renderHelp() {
	    return this.props.help ? _react2['default'].createElement(
	      'span',
	      { className: "help-block", key: "help" },
	      this.props.help
	    ) : null;
	  };
	
	  InputBase.prototype.renderCheckboxAndRadioWrapper = function renderCheckboxAndRadioWrapper(children) {
	    var classes = {
	      'checkbox': this.props.type === 'checkbox',
	      'radio': this.props.type === 'radio'
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: _classnames2['default'](classes), key: "checkboxRadioWrapper" },
	      children
	    );
	  };
	
	  InputBase.prototype.renderWrapper = function renderWrapper(children) {
	    return this.props.wrapperClassName ? _react2['default'].createElement(
	      'div',
	      { className: this.props.wrapperClassName, key: "wrapper" },
	      children
	    ) : children;
	  };
	
	  InputBase.prototype.renderLabel = function renderLabel(children) {
	    var classes = {
	      'control-label': !this.isCheckboxOrRadio()
	    };
	    classes[this.props.labelClassName] = this.props.labelClassName;
	
	    return this.props.label ? _react2['default'].createElement(
	      'label',
	      { htmlFor: this.props.id, className: _classnames2['default'](classes), key: "label" },
	      children,
	      this.props.label
	    ) : children;
	  };
	
	  InputBase.prototype.renderInput = function renderInput() {
	    if (!this.props.type) {
	      return this.props.children;
	    }
	
	    switch (this.props.type) {
	      case 'select':
	        return _react2['default'].createElement(
	          'select',
	          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: "input", key: "input" }),
	          this.props.children
	        );
	      case 'textarea':
	        return _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: "input", key: "input" }));
	      case 'static':
	        return _react2['default'].createElement(
	          'p',
	          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: "input", key: "input" }),
	          this.props.value
	        );
	    }
	
	    var className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
	    return _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default'](this.props.className, className), ref: "input", key: "input" }));
	  };
	
	  InputBase.prototype.renderFormGroup = function renderFormGroup(children) {
	    return _react2['default'].createElement(
	      _FormGroup2['default'],
	      this.props,
	      children
	    );
	  };
	
	  InputBase.prototype.renderChildren = function renderChildren() {
	    return !this.isCheckboxOrRadio() ? [this.renderLabel(), this.renderWrapper([this.renderInputGroup(this.renderInput()), this.renderIcon(), this.renderHelp()])] : this.renderWrapper([this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())), this.renderHelp()]);
	  };
	
	  InputBase.prototype.render = function render() {
	    var children = this.renderChildren();
	    return this.renderFormGroup(children);
	  };
	
	  return InputBase;
	})(_react2['default'].Component);
	
	InputBase.propTypes = {
	  type: _react2['default'].PropTypes.string,
	  label: _react2['default'].PropTypes.node,
	  help: _react2['default'].PropTypes.node,
	  addonBefore: _react2['default'].PropTypes.node,
	  addonAfter: _react2['default'].PropTypes.node,
	  buttonBefore: _react2['default'].PropTypes.node,
	  buttonAfter: _react2['default'].PropTypes.node,
	  bsSize: _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']),
	  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
	  hasFeedback: _react2['default'].PropTypes.bool,
	  id: _react2['default'].PropTypes.string,
	  groupClassName: _react2['default'].PropTypes.string,
	  wrapperClassName: _react2['default'].PropTypes.string,
	  labelClassName: _react2['default'].PropTypes.string,
	  multiple: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool,
	  value: _react2['default'].PropTypes.any
	};
	
	exports['default'] = InputBase;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	exports['default'] = valueValidation;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CustomPropTypes = __webpack_require__(43);
	
	var propList = ['children', 'value'];
	var typeList = [_react2['default'].PropTypes.number, _react2['default'].PropTypes.string];
	
	function valueValidation(props, propName, componentName) {
	  var error = _CustomPropTypes.singlePropFrom(propList)(props, propName, componentName);
	  if (!error) {
	    var oneOfType = _react2['default'].PropTypes.oneOfType(typeList);
	    error = oneOfType(props, propName, componentName);
	  }
	  return error;
	}
	
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var ButtonGroup = _react2['default'].createClass({
	  displayName: 'ButtonGroup',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    vertical: _react2['default'].PropTypes.bool,
	    justified: _react2['default'].PropTypes.bool,
	    /**
	     * Display block buttons, only useful when used with the "vertical" prop.
	     * @type {bool}
	     */
	    block: _utilsCustomPropTypes2['default'].all([_react2['default'].PropTypes.bool, function (props, propName, componentName) {
	      if (props.block && !props.vertical) {
	        return new Error('The block property requires the vertical property to be set to have any effect');
	      }
	    }])
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'button-group'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	    classes['btn-group'] = !this.props.vertical;
	    classes['btn-group-vertical'] = this.props.vertical;
	    classes['btn-group-justified'] = this.props.justified;
	    classes['btn-block'] = this.props.block;
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var ButtonToolbar = _react2['default'].createClass({
	  displayName: 'ButtonToolbar',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'button-toolbar'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        role: "toolbar",
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = ButtonToolbar;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _Glyphicon = __webpack_require__(64);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var Carousel = _react2['default'].createClass({
	  displayName: 'Carousel',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    slide: _react2['default'].PropTypes.bool,
	    indicators: _react2['default'].PropTypes.bool,
	    interval: _react2['default'].PropTypes.number,
	    controls: _react2['default'].PropTypes.bool,
	    pauseOnHover: _react2['default'].PropTypes.bool,
	    wrap: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    onSlideEnd: _react2['default'].PropTypes.func,
	    activeIndex: _react2['default'].PropTypes.number,
	    defaultActiveIndex: _react2['default'].PropTypes.number,
	    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
	    prevIcon: _react2['default'].PropTypes.node,
	    nextIcon: _react2['default'].PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      slide: true,
	      interval: 5000,
	      pauseOnHover: true,
	      wrap: true,
	      indicators: true,
	      controls: true,
	      prevIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: "chevron-left" }),
	      nextIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: "chevron-right" })
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
	      previousActiveIndex: null,
	      direction: null
	    };
	  },
	
	  getDirection: function getDirection(prevIndex, index) {
	    if (prevIndex === index) {
	      return null;
	    }
	
	    return prevIndex > index ? 'prev' : 'next';
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var activeIndex = this.getActiveIndex();
	
	    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
	      clearTimeout(this.timeout);
	      this.setState({
	        previousActiveIndex: activeIndex,
	        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
	      });
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.waitForNext();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timeout);
	  },
	
	  next: function next(e) {
	    if (e) {
	      e.preventDefault();
	    }
	
	    var index = this.getActiveIndex() + 1;
	    var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);
	
	    if (index > count - 1) {
	      if (!this.props.wrap) {
	        return;
	      }
	      index = 0;
	    }
	
	    this.handleSelect(index, 'next');
	  },
	
	  prev: function prev(e) {
	    if (e) {
	      e.preventDefault();
	    }
	
	    var index = this.getActiveIndex() - 1;
	
	    if (index < 0) {
	      if (!this.props.wrap) {
	        return;
	      }
	      index = _utilsValidComponentChildren2['default'].numberOf(this.props.children) - 1;
	    }
	
	    this.handleSelect(index, 'prev');
	  },
	
	  pause: function pause() {
	    this.isPaused = true;
	    clearTimeout(this.timeout);
	  },
	
	  play: function play() {
	    this.isPaused = false;
	    this.waitForNext();
	  },
	
	  waitForNext: function waitForNext() {
	    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
	      this.timeout = setTimeout(this.next, this.props.interval);
	    }
	  },
	
	  handleMouseOver: function handleMouseOver() {
	    if (this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	
	  handleMouseOut: function handleMouseOut() {
	    if (this.isPaused) {
	      this.play();
	    }
	  },
	
	  render: function render() {
	    var classes = {
	      carousel: true,
	      slide: this.props.slide
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes),
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut }),
	      this.props.indicators ? this.renderIndicators() : null,
	      _react2['default'].createElement(
	        'div',
	        { className: "carousel-inner", ref: "inner" },
	        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderItem)
	      ),
	      this.props.controls ? this.renderControls() : null
	    );
	  },
	
	  renderPrev: function renderPrev() {
	    return _react2['default'].createElement(
	      'a',
	      { className: "left carousel-control", href: "#prev", key: 0, onClick: this.prev },
	      this.props.prevIcon
	    );
	  },
	
	  renderNext: function renderNext() {
	    return _react2['default'].createElement(
	      'a',
	      { className: "right carousel-control", href: "#next", key: 1, onClick: this.next },
	      this.props.nextIcon
	    );
	  },
	
	  renderControls: function renderControls() {
	    if (!this.props.wrap) {
	      var activeIndex = this.getActiveIndex();
	      var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);
	
	      return [activeIndex !== 0 ? this.renderPrev() : null, activeIndex !== count - 1 ? this.renderNext() : null];
	    }
	
	    return [this.renderPrev(), this.renderNext()];
	  },
	
	  renderIndicator: function renderIndicator(child, index) {
	    var className = index === this.getActiveIndex() ? 'active' : null;
	
	    return _react2['default'].createElement('li', {
	      key: index,
	      className: className,
	      onClick: this.handleSelect.bind(this, index, null) });
	  },
	
	  renderIndicators: function renderIndicators() {
	    var indicators = [];
	    _utilsValidComponentChildren2['default'].forEach(this.props.children, function (child, index) {
	      indicators.push(this.renderIndicator(child, index),
	
	      // Force whitespace between indicator elements, bootstrap
	      // requires this for correct spacing of elements.
	      ' ');
	    }, this);
	
	    return _react2['default'].createElement(
	      'ol',
	      { className: "carousel-indicators" },
	      indicators
	    );
	  },
	
	  getActiveIndex: function getActiveIndex() {
	    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
	  },
	
	  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
	    this.setState({
	      previousActiveIndex: null,
	      direction: null
	    }, function () {
	      this.waitForNext();
	
	      if (this.props.onSlideEnd) {
	        this.props.onSlideEnd();
	      }
	    });
	  },
	
	  renderItem: function renderItem(child, index) {
	    var activeIndex = this.getActiveIndex();
	    var isActive = index === activeIndex;
	    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;
	
	    return _react.cloneElement(child, {
	      active: isActive,
	      ref: child.ref,
	      key: child.key ? child.key : index,
	      index: index,
	      animateOut: isPreviousActive,
	      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
	      direction: this.state.direction,
	      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
	    });
	  },
	
	  handleSelect: function handleSelect(index, direction) {
	    clearTimeout(this.timeout);
	
	    if (this.isMounted()) {
	      var previousActiveIndex = this.getActiveIndex();
	      direction = direction || this.getDirection(previousActiveIndex, index);
	
	      if (this.props.onSelect) {
	        this.props.onSelect(index, direction);
	      }
	
	      if (this.props.activeIndex == null && index !== previousActiveIndex) {
	        if (this.state.previousActiveIndex != null) {
	          // If currently animating don't activate the new index.
	          // TODO: look into queuing this canceled call and
	          // animating after the current animation has ended.
	          return;
	        }
	
	        this.setState({
	          activeIndex: index,
	          previousActiveIndex: previousActiveIndex,
	          direction: direction
	        });
	      }
	    }
	  }
	});
	
	exports['default'] = Carousel;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _styleMaps = __webpack_require__(42);
	
	var _styleMaps2 = _interopRequireDefault(_styleMaps);
	
	var Glyphicon = _react2['default'].createClass({
	  displayName: 'Glyphicon',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    glyph: _react2['default'].PropTypes.oneOf(_styleMaps2['default'].GLYPHS).isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'glyphicon'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	
	    classes['glyphicon-' + this.props.glyph] = true;
	
	    return _react2['default'].createElement(
	      'span',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Glyphicon;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsTransitionEvents = __webpack_require__(66);
	
	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);
	
	var CarouselItem = _react2['default'].createClass({
	  displayName: 'CarouselItem',
	
	  propTypes: {
	    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
	    onAnimateOutEnd: _react2['default'].PropTypes.func,
	    active: _react2['default'].PropTypes.bool,
	    animateIn: _react2['default'].PropTypes.bool,
	    animateOut: _react2['default'].PropTypes.bool,
	    caption: _react2['default'].PropTypes.node,
	    index: _react2['default'].PropTypes.number
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      direction: null
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },
	
	  handleAnimateOutEnd: function handleAnimateOutEnd() {
	    if (this.props.onAnimateOutEnd && this.isMounted()) {
	      this.props.onAnimateOutEnd(this.props.index);
	    }
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.active !== nextProps.active) {
	      this.setState({
	        direction: null
	      });
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!this.props.active && prevProps.active) {
	      _utilsTransitionEvents2['default'].addEndEventListener(_react2['default'].findDOMNode(this), this.handleAnimateOutEnd);
	    }
	
	    if (this.props.active !== prevProps.active) {
	      setTimeout(this.startAnimation, 20);
	    }
	  },
	
	  startAnimation: function startAnimation() {
	    if (!this.isMounted()) {
	      return;
	    }
	
	    this.setState({
	      direction: this.props.direction === 'prev' ? 'right' : 'left'
	    });
	  },
	
	  render: function render() {
	    var classes = {
	      item: true,
	      active: this.props.active && !this.props.animateIn || this.props.animateOut,
	      next: this.props.active && this.props.animateIn && this.props.direction === 'next',
	      prev: this.props.active && this.props.animateIn && this.props.direction === 'prev'
	    };
	
	    if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
	      classes[this.state.direction] = true;
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children,
	      this.props.caption ? this.renderCaption() : null
	    );
	  },
	
	  renderCaption: function renderCaption() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "carousel-caption" },
	      this.props.caption
	    );
	  }
	});
	
	exports['default'] = CarouselItem;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains a modified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports['default'] = ReactTransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _Object$keys = __webpack_require__(44)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _styleMaps = __webpack_require__(42);
	
	var _styleMaps2 = _interopRequireDefault(_styleMaps);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Col = _react2['default'].createClass({
	  displayName: 'Col',
	
	  propTypes: {
	    /**
	     * The number of columns you wish to span
	     *
	     * for Extra small devices Phones (<768px)
	     *
	     * class-prefix `col-xs-`
	     */
	    xs: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Small devices Tablets (≥768px)
	     *
	     * class-prefix `col-sm-`
	     */
	    sm: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Medium devices Desktops (≥992px)
	     *
	     * class-prefix `col-md-`
	     */
	    md: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Large devices Desktops (≥1200px)
	     *
	     * class-prefix `col-lg-`
	     */
	    lg: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-offset-`
	     */
	    xsOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-offset-`
	     */
	    smOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-offset-`
	     */
	    mdOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-offset-`
	     */
	    lgOffset: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-push-`
	     */
	    xsPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-push-`
	     */
	    smPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-push-`
	     */
	    mdPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-push-`
	     */
	    lgPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-pull-`
	     */
	    xsPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-pull-`
	     */
	    smPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-pull-`
	     */
	    mdPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-pull-`
	     */
	    lgPull: _react2['default'].PropTypes.number,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _utilsCustomPropTypes2['default'].elementType
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },
	
	  render: function render() {
	    var ComponentClass = this.props.componentClass;
	    var classes = {};
	
	    _Object$keys(_styleMaps2['default'].SIZES).forEach(function (key) {
	      var size = _styleMaps2['default'].SIZES[key];
	      var prop = size;
	      var classPart = size + '-';
	
	      if (this.props[prop]) {
	        classes['col-' + classPart + this.props[prop]] = true;
	      }
	
	      prop = size + 'Offset';
	      classPart = size + '-offset-';
	      if (this.props[prop] >= 0) {
	        classes['col-' + classPart + this.props[prop]] = true;
	      }
	
	      prop = size + 'Push';
	      classPart = size + '-push-';
	      if (this.props[prop] >= 0) {
	        classes['col-' + classPart + this.props[prop]] = true;
	      }
	
	      prop = size + 'Pull';
	      classPart = size + '-pull-';
	      if (this.props[prop] >= 0) {
	        classes['col-' + classPart + this.props[prop]] = true;
	      }
	    }, this);
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsTransitionEvents = __webpack_require__(66);
	
	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);
	
	var _utilsDeprecationWarning = __webpack_require__(69);
	
	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);
	
	var warned = false;
	
	var CollapsibleMixin = {
	
	  propTypes: {
	    defaultExpanded: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;
	
	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    if (!warned) {
	      _utilsDeprecationWarning2['default']('CollapsibleMixin', 'Collapse Component');
	      warned = true;
	    }
	  },
	
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;
	    if (willExpanded === this.isExpanded()) {
	      return;
	    }
	
	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)
	
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';
	
	    if (!willExpanded) {
	      value = this.getCollapsibleDimensionValue();
	    }
	
	    node.style[dimension] = value + 'px';
	
	    this._afterWillUpdate();
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);
	
	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },
	
	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},
	
	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }
	
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();
	
	    // setting the dimension here starts the transition animation
	    var result = undefined;
	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },
	
	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();
	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },
	
	  _handleExpand: function _handleExpand() {
	    var _this = this;
	
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      _this.setState({
	        collapsing: false
	      });
	    };
	
	    this._addEndEventListener(node, complete);
	
	    this.setState({
	      collapsing: true
	    });
	  },
	
	  _handleCollapse: function _handleCollapse() {
	    var _this2 = this;
	
	    var node = this.getCollapsibleDOMNode();
	
	    var complete = function complete() {
	      _this2._removeEndEventListener(node, complete);
	      _this2.setState({
	        collapsing: false
	      });
	    };
	
	    this._addEndEventListener(node, complete);
	
	    this.setState({
	      collapsing: true
	    });
	  },
	
	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    _utilsTransitionEvents2['default'].addEndEventListener(node, complete);
	  },
	
	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    _utilsTransitionEvents2['default'].removeEndEventListener(node, complete);
	  },
	
	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },
	
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	
	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classes = {};
	
	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClasses) {
	        if (subClasses) {
	          classes[subClasses] = true;
	        }
	      });
	    }
	
	    classes.collapsing = this.state.collapsing;
	    classes.collapse = !this.state.collapsing;
	    classes['in'] = this.isExpanded() && !this.state.collapsing;
	
	    return classes;
	  }
	};
	
	exports['default'] = CollapsibleMixin;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	exports['default'] = deprecationWarning;
	
	var _reactLibWarning = __webpack_require__(70);
	
	var _reactLibWarning2 = _interopRequireDefault(_reactLibWarning);
	
	function deprecationWarning(oldname, newname, link) {
	  var message = oldname + ' is deprecated. Use ' + newname + ' instead.';
	
	  if (link) {
	    message += '\nYou can read more about it at ' + link;
	  }
	
	  _reactLibWarning2['default'](false, message);
	}
	
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */
	
	"use strict";
	
	var emptyFunction = __webpack_require__(72);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if ("production" !== process.env.NODE_ENV) {
	  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
	      console.warn(message);
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ },
/* 71 */
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
/* 72 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */
	
	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };
	
	module.exports = emptyFunction;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _Collapse = __webpack_require__(74);
	
	var _Collapse2 = _interopRequireDefault(_Collapse);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var CollapsibleNav = _react2['default'].createClass({
	  displayName: 'CollapsibleNav',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    onSelect: _react2['default'].PropTypes.func,
	    activeHref: _react2['default'].PropTypes.string,
	    activeKey: _react2['default'].PropTypes.any,
	    collapsible: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool,
	    eventKey: _react2['default'].PropTypes.any
	  },
	
	  render: function render() {
	    /*
	     * this.props.collapsible is set in NavBar when an eventKey is supplied.
	     */
	    var classes = this.props.collapsible ? 'navbar-collapse' : null;
	    var renderChildren = this.props.collapsible ? this.renderCollapsibleNavChildren : this.renderChildren;
	
	    var nav = _react2['default'].createElement(
	      'div',
	      { eventKey: this.props.eventKey, className: _classnames2['default'](this.props.className, classes) },
	      _utilsValidComponentChildren2['default'].map(this.props.children, renderChildren)
	    );
	
	    if (this.props.collapsible) {
	      return _react2['default'].createElement(
	        _Collapse2['default'],
	        { 'in': this.props.expanded },
	        nav
	      );
	    } else {
	      return nav;
	    }
	  },
	
	  getChildActiveProp: function getChildActiveProp(child) {
	    if (child.props.active) {
	      return true;
	    }
	    if (this.props.activeKey != null) {
	      if (child.props.eventKey === this.props.activeKey) {
	        return true;
	      }
	    }
	    if (this.props.activeHref != null) {
	      if (child.props.href === this.props.activeHref) {
	        return true;
	      }
	    }
	
	    return child.props.active;
	  },
	
	  renderChildren: function renderChildren(child, index) {
	    var key = child.key ? child.key : index;
	    return _react.cloneElement(child, {
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      ref: 'nocollapse_' + key,
	      key: key,
	      navItem: true
	    });
	  },
	
	  renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
	    var key = child.key ? child.key : index;
	    return _react.cloneElement(child, {
	      active: this.getChildActiveProp(child),
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
	      ref: 'collapsible_' + key,
	      key: key,
	      navItem: true
	    });
	  }
	});
	
	exports['default'] = CollapsibleNav;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transition = __webpack_require__(75);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var capitalize = function capitalize(str) {
	  return str[0].toUpperCase() + str.substr(1);
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	var triggerBrowserReflow = function triggerBrowserReflow(node) {
	  return node.offsetHeight;
	};
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + capitalize(dimension)];
	  var computedStyles = _utilsDomUtils2['default'].getComputedStyles(elem);
	  var margins = MARGINS[dimension];
	
	  return value + parseInt(computedStyles[margins[0]], 10) + parseInt(computedStyles[margins[1]], 10);
	}
	
	var Collapse = (function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    _React$Component.call(this, props, context);
	
	    this.onEnterListener = this.handleEnter.bind(this);
	    this.onEnteringListener = this.handleEntering.bind(this);
	    this.onEnteredListener = this.handleEntered.bind(this);
	    this.onExitListener = this.handleExit.bind(this);
	    this.onExitingListener = this.handleExiting.bind(this);
	  }
	
	  // Explicitly copied from Transition for doc generation.
	  // TODO: Remove duplication once #977 is resolved.
	
	  Collapse.prototype.render = function render() {
	    var enter = _utilsCreateChainedFunction2['default'](this.onEnterListener, this.props.onEnter);
	    var entering = _utilsCreateChainedFunction2['default'](this.onEnteringListener, this.props.onEntering);
	    var entered = _utilsCreateChainedFunction2['default'](this.onEnteredListener, this.props.onEntered);
	    var exit = _utilsCreateChainedFunction2['default'](this.onExitListener, this.props.onExit);
	    var exiting = _utilsCreateChainedFunction2['default'](this.onExitingListener, this.props.onExiting);
	
	    return _react2['default'].createElement(
	      _Transition2['default'],
	      _extends({
	        ref: 'transition'
	      }, this.props, {
	        'aria-expanded': this.props['in'],
	        className: this._dimension() === 'width' ? 'width' : '',
	        exitedClassName: 'collapse',
	        exitingClassName: 'collapsing',
	        enteredClassName: 'collapse in',
	        enteringClassName: 'collapsing',
	        onEnter: enter,
	        onEntering: entering,
	        onEntered: entered,
	        onExit: exit,
	        onExiting: exiting,
	        onExited: this.props.onExited
	      }),
	      this.props.children
	    );
	  };
	
	  /* -- Expanding -- */
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	
	    triggerBrowserReflow(elem);
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  //for testing
	
	  Collapse.prototype._getTransitionInstance = function _getTransitionInstance() {
	    return this.refs.transition;
	  };
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + capitalize(dimension)] + 'px';
	  };
	
	  return Collapse;
	})(_react2['default'].Component);
	
	Collapse.propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  'in': _react2['default'].PropTypes.bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _react2['default'].PropTypes.bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2['default'].PropTypes.bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  duration: _react2['default'].PropTypes.number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _react2['default'].PropTypes.func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['height', 'width']), _react2['default'].PropTypes.func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _react2['default'].PropTypes.func
	};
	
	Collapse.defaultProps = {
	  'in': false,
	  duration: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	exports['default'] = Collapse;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _Object$keys = __webpack_require__(44)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsTransitionEvents = __webpack_require__(66);
	
	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var UNMOUNTED = 0;
	exports.UNMOUNTED = UNMOUNTED;
	var EXITED = 1;
	exports.EXITED = EXITED;
	var ENTERING = 2;
	exports.ENTERING = ENTERING;
	var ENTERED = 3;
	exports.ENTERED = ENTERED;
	var EXITING = 4;
	
	exports.EXITING = EXITING;
	
	var Transition = (function (_React$Component) {
	  _inherits(Transition, _React$Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    _React$Component.call(this, props, context);
	
	    var initialStatus = undefined;
	    if (props['in']) {
	      // Start enter transition in componentDidMount.
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    this.state = { status: initialStatus };
	
	    this.nextCallback = null;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props['in']) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var status = this.state.status;
	    if (nextProps['in']) {
	      if (status === EXITING) {
	        this.performEnter(nextProps);
	      } else if (this.props.unmountOnExit) {
	        if (status === UNMOUNTED) {
	          // Start enter transition in componentDidUpdate.
	          this.setState({ status: EXITED });
	        }
	      } else if (status === EXITED) {
	        this.performEnter(nextProps);
	      }
	
	      // Otherwise we're already entering or entered.
	    } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(nextProps);
	        }
	
	        // Otherwise we're already exited or exiting.
	      }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this.props.unmountOnExit && this.state.status === EXITED) {
	      // EXITED is always a transitional state to either ENTERING or UNMOUNTED
	      // when using unmountOnExit.
	      if (this.props['in']) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this = this;
	
	    this.cancelNextCallback();
	    var node = _react2['default'].findDOMNode(this);
	
	    // Not this.props, because we might be about to receive new props.
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this.props.onEntering(node);
	
	      _this.onTransitionEnd(node, function () {
	        _this.safeSetState({ status: ENTERED }, function () {
	          _this.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _react2['default'].findDOMNode(this);
	
	    // Not this.props, because we might be about to receive new props.
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this2.props.onExiting(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: EXITED }, function () {
	          _this2.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this3 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this3.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      _utilsTransitionEvents2['default'].addEndEventListener(node, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.duration);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	
	    var childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    _Object$keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = undefined;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2['default'].Children.only(children);
	    return _react2['default'].cloneElement(child, _extends({}, childProps, {
	      className: _classnames2['default'](child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	})(_react2['default'].Component);
	
	Transition.propTypes = {
	  /**
	   * Show the component; triggers the enter or exit animation
	   */
	  'in': _react2['default'].PropTypes.bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown
	   */
	  unmountOnExit: _react2['default'].PropTypes.bool,
	
	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2['default'].PropTypes.bool,
	
	  /**
	   * Duration of the animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  duration: _react2['default'].PropTypes.number,
	
	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  exitedClassName: _react2['default'].PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is exiting
	   */
	  exitingClassName: _react2['default'].PropTypes.string,
	  /**
	   * CSS class or classes applied when the component is entered
	   */
	  enteredClassName: _react2['default'].PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is entering
	   */
	  enteringClassName: _react2['default'].PropTypes.string,
	
	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _react2['default'].PropTypes.func
	};
	
	// Name the function so it is clearer in the documentation
	function noop() {}
	
	Transition.defaultProps = {
	  'in': false,
	  duration: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	exports['default'] = Transition;

/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	
	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/prop-types: [2, {ignore: "bsSize"}] */
	/* BootstrapMixin contains `bsSize` type validation */
	
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _DropdownStateMixin = __webpack_require__(78);
	
	var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);
	
	var _Button = __webpack_require__(55);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ButtonGroup = __webpack_require__(61);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _DropdownMenu = __webpack_require__(79);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var DropdownButton = _react2['default'].createClass({
	  displayName: 'DropdownButton',
	
	  mixins: [_BootstrapMixin2['default'], _DropdownStateMixin2['default']],
	
	  propTypes: {
	    pullRight: _react2['default'].PropTypes.bool,
	    dropup: _react2['default'].PropTypes.bool,
	    title: _react2['default'].PropTypes.node,
	    href: _react2['default'].PropTypes.string,
	    id: _react2['default'].PropTypes.string,
	    onClick: _react2['default'].PropTypes.func,
	    onSelect: _react2['default'].PropTypes.func,
	    navItem: _react2['default'].PropTypes.bool,
	    noCaret: _react2['default'].PropTypes.bool,
	    buttonClassName: _react2['default'].PropTypes.string,
	    className: _react2['default'].PropTypes.string,
	    children: _react2['default'].PropTypes.node
	  },
	
	  render: function render() {
	    var renderMethod = this.props.navItem ? 'renderNavItem' : 'renderButtonGroup';
	
	    var caret = this.props.noCaret ? null : _react2['default'].createElement('span', { className: "caret" });
	
	    return this[renderMethod]([_react2['default'].createElement(
	      _Button2['default'],
	      _extends({}, this.props, {
	        ref: "dropdownButton",
	        className: _classnames2['default']('dropdown-toggle', this.props.buttonClassName),
	        onClick: _utilsCreateChainedFunction2['default'](this.props.onClick, this.handleDropdownClick),
	        key: 0,
	        navDropdown: this.props.navItem,
	        navItem: null,
	        title: null,
	        pullRight: null,
	        dropup: null }),
	      this.props.title,
	      ' ',
	      caret
	    ), _react2['default'].createElement(
	      _DropdownMenu2['default'],
	      {
	        ref: "menu",
	        'aria-labelledby': this.props.id,
	        pullRight: this.props.pullRight,
	        key: 1 },
	      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderMenuItem)
	    )]);
	  },
	
	  renderButtonGroup: function renderButtonGroup(children) {
	    var groupClasses = {
	      'open': this.state.open,
	      'dropup': this.props.dropup
	    };
	
	    return _react2['default'].createElement(
	      _ButtonGroup2['default'],
	      {
	        bsSize: this.props.bsSize,
	        className: _classnames2['default'](this.props.className, groupClasses) },
	      children
	    );
	  },
	
	  renderNavItem: function renderNavItem(children) {
	    var classes = {
	      'dropdown': true,
	      'open': this.state.open,
	      'dropup': this.props.dropup
	    };
	
	    return _react2['default'].createElement(
	      'li',
	      { className: _classnames2['default'](this.props.className, classes) },
	      children
	    );
	  },
	
	  renderMenuItem: function renderMenuItem(child, index) {
	    // Only handle the option selection if an onSelect prop has been set on the
	    // component or it's child, this allows a user not to pass an onSelect
	    // handler and have the browser preform the default action.
	    var handleOptionSelect = this.props.onSelect || child.props.onSelect ? this.handleOptionSelect : null;
	
	    return _react.cloneElement(child, {
	      // Capture onSelect events
	      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, handleOptionSelect),
	      key: child.key ? child.key : index
	    });
	  },
	
	  handleDropdownClick: function handleDropdownClick(e) {
	    e.preventDefault();
	
	    this.setDropdownState(!this.state.open);
	  },
	
	  handleOptionSelect: function handleOptionSelect(key) {
	    if (this.props.onSelect) {
	      this.props.onSelect(key);
	    }
	
	    this.setDropdownState(false);
	  }
	});
	
	exports['default'] = DropdownButton;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsEventListener = __webpack_require__(52);
	
	/**
	 * Checks whether a node is within
	 * a root nodes tree
	 *
	 * @param {DOMElement} node
	 * @param {DOMElement} root
	 * @returns {boolean}
	 */
	
	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);
	
	function isNodeInRoot(node, root) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}
	
	var DropdownStateMixin = {
	  getInitialState: function getInitialState() {
	    return {
	      open: false
	    };
	  },
	
	  setDropdownState: function setDropdownState(newState, onStateChangeComplete) {
	    if (newState) {
	      this.bindRootCloseHandlers();
	    } else {
	      this.unbindRootCloseHandlers();
	    }
	
	    this.setState({
	      open: newState
	    }, onStateChangeComplete);
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === 27) {
	      this.setDropdownState(false);
	    }
	  },
	
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    // e.srcElement is required for IE8 as e.target is undefined
	    var target = e.target || e.srcElement;
	    if (isNodeInRoot(target, _react2['default'].findDOMNode(this))) {
	      return;
	    }
	
	    this.setDropdownState(false);
	  },
	
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    var doc = _utilsDomUtils2['default'].ownerDocument(this);
	
	    this._onDocumentClickListener = _utilsEventListener2['default'].listen(doc, 'click', this.handleDocumentClick);
	    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
	  },
	
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	
	exports['default'] = DropdownStateMixin;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var DropdownMenu = _react2['default'].createClass({
	  displayName: 'DropdownMenu',
	
	  propTypes: {
	    pullRight: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func
	  },
	
	  render: function render() {
	    var classes = {
	      'dropdown-menu': true,
	      'dropdown-menu-right': this.props.pullRight
	    };
	
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes),
	        role: "menu" }),
	      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderMenuItem)
	    );
	  },
	
	  renderMenuItem: function renderMenuItem(child, index) {
	    return _react.cloneElement(child, {
	      // Capture onSelect events
	      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
	
	      // Force special props to be transferred
	      key: child.key ? child.key : index
	    });
	  }
	});
	
	exports['default'] = DropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsDeprecationWarning = __webpack_require__(69);
	
	// TODO: listen for onTransitionEnd to remove el
	
	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);
	
	function getElementsAndSelf(root, classes) {
	  var els = root.querySelectorAll('.' + classes.join('.'));
	
	  els = [].map.call(els, function (e) {
	    return e;
	  });
	
	  for (var i = 0; i < classes.length; i++) {
	    if (!root.className.match(new RegExp('\\b' + classes[i] + '\\b'))) {
	      return els;
	    }
	  }
	  els.unshift(root);
	  return els;
	}
	
	var warned = false;
	
	exports['default'] = {
	  componentWillMount: function componentWillMount() {
	    if (!warned) {
	      _utilsDeprecationWarning2['default']('FadeMixin', 'Fade Component');
	      warned = true;
	    }
	  },
	
	  _fadeIn: function _fadeIn() {
	    var els = undefined;
	
	    if (this.isMounted()) {
	      els = getElementsAndSelf(_react2['default'].findDOMNode(this), ['fade']);
	
	      if (els.length) {
	        els.forEach(function (el) {
	          el.className += ' in';
	        });
	      }
	    }
	  },
	
	  _fadeOut: function _fadeOut() {
	    var els = getElementsAndSelf(this._fadeOutEl, ['fade', 'in']);
	
	    if (els.length) {
	      els.forEach(function (el) {
	        el.className = el.className.replace(/\bin\b/, '');
	      });
	    }
	
	    setTimeout(this._handleFadeOutEnd, 300);
	  },
	
	  _handleFadeOutEnd: function _handleFadeOutEnd() {
	    if (this._fadeOutEl && this._fadeOutEl.parentNode) {
	      this._fadeOutEl.parentNode.removeChild(this._fadeOutEl);
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (document.querySelectorAll) {
	      // Firefox needs delay for transition to be triggered
	      setTimeout(this._fadeIn, 20);
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var els = getElementsAndSelf(_react2['default'].findDOMNode(this), ['fade']);
	    var container = this.props.container && _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
	
	    if (els.length) {
	      this._fadeOutEl = document.createElement('div');
	      container.appendChild(this._fadeOutEl);
	      this._fadeOutEl.appendChild(_react2['default'].findDOMNode(this).cloneNode(true));
	      // Firefox needs delay for transition to be triggered
	      setTimeout(this._fadeOut, 20);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Grid = _react2['default'].createClass({
	  displayName: 'Grid',
	
	  propTypes: {
	    /**
	     * Turn any fixed-width grid layout into a full-width layout by this property.
	     *
	     * Adds `container-fluid` class.
	     */
	    fluid: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _utilsCustomPropTypes2['default'].elementType
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },
	
	  render: function render() {
	    var ComponentClass = this.props.componentClass;
	    var className = this.props.fluid ? 'container-fluid' : 'container';
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, className) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	var _interopRequireWildcard = __webpack_require__(38)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InputBase2 = __webpack_require__(59);
	
	var _InputBase3 = _interopRequireDefault(_InputBase2);
	
	var _FormControls = __webpack_require__(83);
	
	var FormControls = _interopRequireWildcard(_FormControls);
	
	var _utilsDeprecationWarning = __webpack_require__(69);
	
	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);
	
	var Input = (function (_InputBase) {
	  _inherits(Input, _InputBase);
	
	  function Input() {
	    _classCallCheck(this, Input);
	
	    _InputBase.apply(this, arguments);
	  }
	
	  Input.prototype.render = function render() {
	    if (this.props.type === 'static') {
	      _utilsDeprecationWarning2['default']('Input type=static', 'StaticText');
	      return _react2['default'].createElement(FormControls.Static, this.props);
	    }
	
	    return _InputBase.prototype.render.call(this);
	  };
	
	  return Input;
	})(_InputBase3['default']);
	
	Input.propTypes = {
	  type: _react2['default'].PropTypes.string
	};
	
	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _Static2 = __webpack_require__(84);
	
	var _Static3 = _interopRequireDefault(_Static2);
	
	exports.Static = _Static3['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _InputBase2 = __webpack_require__(59);
	
	var _InputBase3 = _interopRequireDefault(_InputBase2);
	
	var _utilsChildrenValueInputValidation = __webpack_require__(60);
	
	var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);
	
	var Static = (function (_InputBase) {
	  _inherits(Static, _InputBase);
	
	  function Static() {
	    _classCallCheck(this, Static);
	
	    _InputBase.apply(this, arguments);
	  }
	
	  Static.prototype.getValue = function getValue() {
	    var _props = this.props;
	    var children = _props.children;
	    var value = _props.value;
	
	    return children ? children : value;
	  };
	
	  Static.prototype.renderInput = function renderInput() {
	    return _react2['default'].createElement(
	      'p',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: "input", key: "input" }),
	      this.getValue()
	    );
	  };
	
	  return Static;
	})(_InputBase3['default']);
	
	Static.propTypes = {
	  value: _utilsChildrenValueInputValidation2['default'],
	  children: _utilsChildrenValueInputValidation2['default']
	};
	
	exports['default'] = Static;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// https://www.npmjs.org/package/react-interpolate-component
	// TODO: Drop this in favor of es6 string interpolation
	
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var REGEXP = /\%\((.+?)\)s/;
	
	var Interpolate = _react2['default'].createClass({
	  displayName: 'Interpolate',
	
	  propTypes: {
	    component: _react2['default'].PropTypes.node,
	    format: _react2['default'].PropTypes.string,
	    unsafe: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return { component: 'span' };
	  },
	
	  render: function render() {
	    var format = _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || typeof this.props.children === 'string' ? this.props.children : this.props.format;
	    var parent = this.props.component;
	    var unsafe = this.props.unsafe === true;
	    var props = _extends({}, this.props);
	
	    delete props.children;
	    delete props.format;
	    delete props.component;
	    delete props.unsafe;
	
	    if (unsafe) {
	      var content = format.split(REGEXP).reduce(function (memo, match, index) {
	        var html = undefined;
	
	        if (index % 2 === 0) {
	          html = match;
	        } else {
	          html = props[match];
	          delete props[match];
	        }
	
	        if (_react2['default'].isValidElement(html)) {
	          throw new Error('cannot interpolate a React component into unsafe text');
	        }
	
	        memo += html;
	
	        return memo;
	      }, '');
	
	      props.dangerouslySetInnerHTML = { __html: content };
	
	      return _react2['default'].createElement(parent, props);
	    } else {
	      var kids = format.split(REGEXP).reduce(function (memo, match, index) {
	        var child = undefined;
	
	        if (index % 2 === 0) {
	          if (match.length === 0) {
	            return memo;
	          }
	
	          child = match;
	        } else {
	          child = props[match];
	          delete props[match];
	        }
	
	        memo.push(child);
	
	        return memo;
	      }, []);
	
	      return _react2['default'].createElement(parent, props, kids);
	    }
	  }
	});
	
	exports['default'] = Interpolate;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Jumbotron = _react2['default'].createClass({
	  displayName: 'Jumbotron',
	
	  propTypes: {
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _utilsCustomPropTypes2['default'].elementType
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return { componentClass: 'div' };
	  },
	
	  render: function render() {
	    var ComponentClass = this.props.componentClass;
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'jumbotron') }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Jumbotron;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var Label = _react2['default'].createClass({
	  displayName: 'Label',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'label',
	      bsStyle: 'default'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	
	    return _react2['default'].createElement(
	      'span',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var ListGroup = (function (_React$Component) {
	  _inherits(ListGroup, _React$Component);
	
	  function ListGroup() {
	    _classCallCheck(this, ListGroup);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ListGroup.prototype.render = function render() {
	    var _this = this;
	
	    var items = _utilsValidComponentChildren2['default'].map(this.props.children, function (item, index) {
	      return _react.cloneElement(item, { key: item.key ? item.key : index });
	    });
	
	    var childrenAnchors = false;
	
	    if (!this.props.children) {
	      return this.renderDiv(items);
	    } else {
	      _react2['default'].Children.forEach(this.props.children, function (child) {
	        if (_this.isAnchor(child.props)) {
	          childrenAnchors = true;
	        }
	      });
	    }
	
	    if (childrenAnchors) {
	      return this.renderDiv(items);
	    } else {
	      return this.renderUL(items);
	    }
	  };
	
	  ListGroup.prototype.isAnchor = function isAnchor(props) {
	    return props.href || props.onClick;
	  };
	
	  ListGroup.prototype.renderUL = function renderUL(items) {
	    var listItems = _utilsValidComponentChildren2['default'].map(items, function (item, index) {
	      return _react.cloneElement(item, { listItem: true });
	    });
	
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, 'list-group') }),
	      listItems
	    );
	  };
	
	  ListGroup.prototype.renderDiv = function renderDiv(items) {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, 'list-group') }),
	      items
	    );
	  };
	
	  return ListGroup;
	})(_react2['default'].Component);
	
	ListGroup.propTypes = {
	  className: _react2['default'].PropTypes.string,
	  id: _react2['default'].PropTypes.string
	};
	
	exports['default'] = ListGroup;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var ListGroupItem = _react2['default'].createClass({
	  displayName: 'ListGroupItem',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    bsStyle: _react2['default'].PropTypes.oneOf(['danger', 'info', 'success', 'warning']),
	    className: _react2['default'].PropTypes.string,
	    active: _react2['default'].PropTypes.any,
	    disabled: _react2['default'].PropTypes.any,
	    header: _react2['default'].PropTypes.node,
	    listItem: _react2['default'].PropTypes.bool,
	    onClick: _react2['default'].PropTypes.func,
	    eventKey: _react2['default'].PropTypes.any,
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'list-group-item'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	
	    classes.active = this.props.active;
	    classes.disabled = this.props.disabled;
	
	    if (this.props.href || this.props.onClick) {
	      return this.renderAnchor(classes);
	    } else if (this.props.listItem) {
	      return this.renderLi(classes);
	    } else {
	      return this.renderSpan(classes);
	    }
	  },
	
	  renderLi: function renderLi(classes) {
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  },
	
	  renderAnchor: function renderAnchor(classes) {
	    return _react2['default'].createElement(
	      _SafeAnchor2['default'],
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes)
	      }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  },
	
	  renderSpan: function renderSpan(classes) {
	    return _react2['default'].createElement(
	      'span',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  },
	
	  renderStructuredContent: function renderStructuredContent() {
	    var header = undefined;
	    if (_react2['default'].isValidElement(this.props.header)) {
	      header = _react.cloneElement(this.props.header, {
	        key: 'header',
	        className: _classnames2['default'](this.props.header.props.className, 'list-group-item-heading')
	      });
	    } else {
	      header = _react2['default'].createElement(
	        'h4',
	        { key: 'header', className: "list-group-item-heading" },
	        this.props.header
	      );
	    }
	
	    var content = _react2['default'].createElement(
	      'p',
	      { key: 'content', className: "list-group-item-text" },
	      this.props.children
	    );
	
	    return [header, content];
	  }
	});
	
	exports['default'] = ListGroupItem;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	/**
	 * Note: This is intended as a stop-gap for accessibility concerns that the
	 * Bootstrap CSS does not address as they have styled anchors and not buttons
	 * in many cases.
	 */
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var SafeAnchor = (function (_React$Component) {
	  _inherits(SafeAnchor, _React$Component);
	
	  function SafeAnchor(props) {
	    _classCallCheck(this, SafeAnchor);
	
	    _React$Component.call(this, props);
	
	    this.handleClick = this.handleClick.bind(this);
	  }
	
	  SafeAnchor.prototype.handleClick = function handleClick(event) {
	    if (this.props.href === undefined) {
	      event.preventDefault();
	    }
	  };
	
	  SafeAnchor.prototype.render = function render() {
	    return _react2['default'].createElement('a', _extends({ role: this.props.href ? undefined : 'button'
	    }, this.props, {
	      onClick: _utilsCreateChainedFunction2['default'](this.props.onClick, this.handleClick),
	      href: this.props.href || '' }));
	  };
	
	  return SafeAnchor;
	})(_react2['default'].Component);
	
	exports['default'] = SafeAnchor;
	
	SafeAnchor.propTypes = {
	  href: _react2['default'].PropTypes.string,
	  onClick: _react2['default'].PropTypes.func
	};
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var MenuItem = _react2['default'].createClass({
	  displayName: 'MenuItem',
	
	  propTypes: {
	    header: _react2['default'].PropTypes.bool,
	    divider: _react2['default'].PropTypes.bool,
	    href: _react2['default'].PropTypes.string,
	    title: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func,
	    eventKey: _react2['default'].PropTypes.any,
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false
	    };
	  },
	
	  handleClick: function handleClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }
	    if (this.props.onSelect) {
	      e.preventDefault();
	      this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
	    }
	  },
	
	  renderAnchor: function renderAnchor() {
	    return _react2['default'].createElement(
	      _SafeAnchor2['default'],
	      { onClick: this.handleClick, href: this.props.href, target: this.props.target, title: this.props.title, tabIndex: "-1" },
	      this.props.children
	    );
	  },
	
	  render: function render() {
	    var classes = {
	      'dropdown-header': this.props.header,
	      'divider': this.props.divider,
	      'active': this.props.active,
	      'disabled': this.props.disabled
	    };
	
	    var children = null;
	    if (this.props.header) {
	      children = this.props.children;
	    } else if (!this.props.divider) {
	      children = this.renderAnchor();
	    }
	
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, this.props, { role: "presentation", title: null, href: null,
	        className: _classnames2['default'](this.props.className, classes) }),
	      children
	    );
	  }
	});
	
	exports['default'] = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _Object$isFrozen = __webpack_require__(93)['default'];
	
	var _Object$keys = __webpack_require__(44)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsEventListener = __webpack_require__(52);
	
	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var _Portal = __webpack_require__(95);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _Fade = __webpack_require__(96);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ModalDialog = __webpack_require__(97);
	
	var _ModalDialog2 = _interopRequireDefault(_ModalDialog);
	
	var _ModalBody = __webpack_require__(98);
	
	var _ModalBody2 = _interopRequireDefault(_ModalBody);
	
	var _ModalHeader = __webpack_require__(99);
	
	var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
	
	var _ModalTitle = __webpack_require__(9);
	
	var _ModalTitle2 = _interopRequireDefault(_ModalTitle);
	
	var _ModalFooter = __webpack_require__(100);
	
	/**
	 * Gets the correct clientHeight of the modal container
	 * when the body/window/document you need to use the docElement clientHeight
	 * @param  {HTMLElement} container
	 * @param  {ReactElement|HTMLElement} context
	 * @return {Number}
	 */
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	function containerClientHeight(container, context) {
	  var doc = _utilsDomUtils2['default'].ownerDocument(context);
	
	  return container === doc.body || container === doc.documentElement ? doc.documentElement.clientHeight : container.clientHeight;
	}
	
	function getContainer(context) {
	  return context.props.container && _react2['default'].findDOMNode(context.props.container) || _utilsDomUtils2['default'].ownerDocument(context).body;
	}
	
	var currentFocusListener = undefined;
	
	/**
	 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
	 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
	 *
	 * We only allow one Listener at a time to avoid stack overflows
	 *
	 * @param  {ReactElement|HTMLElement} context
	 * @param  {Function} handler
	 */
	function onFocus(context, handler) {
	  var doc = _utilsDomUtils2['default'].ownerDocument(context);
	  var useFocusin = !doc.addEventListener;
	  var remove = undefined;
	
	  if (currentFocusListener) {
	    currentFocusListener.remove();
	  }
	
	  if (useFocusin) {
	    document.attachEvent('onfocusin', handler);
	    remove = function () {
	      return document.detachEvent('onfocusin', handler);
	    };
	  } else {
	    document.addEventListener('focus', handler, true);
	    remove = function () {
	      return document.removeEventListener('focus', handler, true);
	    };
	  }
	
	  currentFocusListener = { remove: remove };
	
	  return currentFocusListener;
	}
	
	var scrollbarSize = undefined;
	
	function getScrollbarSize() {
	  if (scrollbarSize !== undefined) {
	    return scrollbarSize;
	  }
	
	  var scrollDiv = document.createElement('div');
	
	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	
	  document.body.appendChild(scrollDiv);
	  scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	
	  scrollDiv = null;
	  return scrollbarSize;
	}
	
	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',
	
	  propTypes: _extends({}, _Portal2['default'].propTypes, _ModalDialog2['default'].propTypes, {
	
	    /**
	     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
	     */
	    backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),
	    /**
	     * Close the modal when escape key is pressed
	     */
	    keyboard: _react2['default'].PropTypes.bool,
	
	    /**
	     * Open and close the Modal with a slide and fade animation.
	     */
	    animation: _react2['default'].PropTypes.bool,
	
	    /**
	     * A Component type that provides the modal content Markup. This is a useful prop when you want to use your own
	     * styles and markup to create a custom modal component.
	     */
	    dialogComponent: _utilsCustomPropTypes2['default'].elementType,
	
	    /**
	     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
	     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
	     */
	    autoFocus: _react2['default'].PropTypes.bool,
	
	    /**
	     * When `true` The modal will prevent focus from leaving the Modal while open.
	     * Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies,
	     * such as screen readers.
	     */
	    enforceFocus: _react2['default'].PropTypes.bool
	  }),
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'modal',
	      dialogComponent: _ModalDialog2['default'],
	      show: false,
	      animation: true,
	      backdrop: true,
	      keyboard: true,
	      autoFocus: true,
	      enforceFocus: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return { exited: !this.props.show };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var animation = _props.animation;
	    var backdrop = _props.backdrop;
	
	    var props = _objectWithoutProperties(_props, ['children', 'animation', 'backdrop']);
	
	    var onExit = props.onExit;
	    var onExiting = props.onExiting;
	    var onEnter = props.onEnter;
	    var onEntering = props.onEntering;
	    var onEntered = props.onEntered;
	
	    var show = !!props.show;
	    var Dialog = props.dialogComponent;
	
	    var mountModal = show || animation && !this.state.exited;
	    if (!mountModal) {
	      return null;
	    }
	
	    var modal = _react2['default'].createElement(
	      Dialog,
	      _extends({}, props, {
	        ref: this._setDialogRef,
	        className: _classnames2['default']({ 'in': show && !animation }),
	        onClick: backdrop === true ? this.handleBackdropClick : null
	      }),
	      this.renderContent()
	    );
	
	    if (animation) {
	      modal = _react2['default'].createElement(
	        _Fade2['default'],
	        {
	          transitionAppear: true,
	          unmountOnExit: true,
	          'in': show,
	          duration: Modal.TRANSITION_DURATION,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.handleHidden,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        modal
	      );
	    }
	
	    if (backdrop) {
	      modal = this.renderBackdrop(modal);
	    }
	
	    return _react2['default'].createElement(
	      _Portal2['default'],
	      { container: props.container },
	      modal
	    );
	  },
	
	  renderContent: function renderContent() {
	    var _this = this;
	
	    return _react2['default'].Children.map(this.props.children, function (child) {
	      // TODO: use context in 0.14
	      if (child && child.type && child.type.__isModalHeader) {
	        return _react.cloneElement(child, {
	          onHide: _utilsCreateChainedFunction2['default'](_this.props.onHide, child.props.onHide)
	        });
	      }
	      return child;
	    });
	  },
	
	  renderBackdrop: function renderBackdrop(modal) {
	    var _props2 = this.props;
	    var animation = _props2.animation;
	    var bsClass = _props2.bsClass;
	
	    var duration = Modal.BACKDROP_TRANSITION_DURATION;
	
	    // Don't handle clicks for "static" backdrops
	    var onClick = this.props.backdrop === true ? this.handleBackdropClick : null;
	
	    var backdrop = _react2['default'].createElement('div', { ref: "backdrop",
	      className: _classnames2['default'](bsClass + '-backdrop', { 'in': this.props.show && !animation }),
	      onClick: onClick
	    });
	
	    return _react2['default'].createElement(
	      'div',
	      { ref: 'modal' },
	      animation ? _react2['default'].createElement(
	        _Fade2['default'],
	        { transitionAppear: true, 'in': this.props.show, duration: duration },
	        backdrop
	      ) : backdrop,
	      modal
	    );
	  },
	
	  _setDialogRef: function _setDialogRef(ref) {
	    // issue #1074
	    // due to: https://github.com/facebook/react/blob/v0.13.3/src/core/ReactCompositeComponent.js#L842
	    //
	    // when backdrop is `false` react hasn't had a chance to reassign the refs to a usable object, b/c there are no other
	    // "classic" refs on the component (or they haven't been processed yet)
	    // TODO: Remove the need for this in next breaking release
	    if (_Object$isFrozen(this.refs) && !_Object$keys(this.refs).length) {
	      this.refs = {};
	    }
	
	    this.refs.dialog = ref;
	
	    //maintains backwards compat with older component breakdown
	    if (!this.props.backdrop) {
	      this.refs.modal = ref;
	    }
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.animation) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  },
	
	  componentWillUpdate: function componentWillUpdate(nextProps) {
	    if (nextProps.show) {
	      this.checkForFocus();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this.onShow();
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var animation = this.props.animation;
	
	    if (prevProps.show && !this.props.show && !animation) {
	      //otherwise handleHidden will call this.
	      this.onHide();
	    } else if (!prevProps.show && this.props.show) {
	      this.onShow();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.show) {
	      this.onHide();
	    }
	  },
	
	  onShow: function onShow() {
	    var _this2 = this;
	
	    var doc = _utilsDomUtils2['default'].ownerDocument(this);
	    var win = _utilsDomUtils2['default'].ownerWindow(this);
	
	    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
	
	    this._onWindowResizeListener = _utilsEventListener2['default'].listen(win, 'resize', this.handleWindowResize);
	
	    if (this.props.enforceFocus) {
	      this._onFocusinListener = onFocus(this, this.enforceFocus);
	    }
	
	    var container = getContainer(this);
	
	    container.className += container.className.length ? ' modal-open' : 'modal-open';
	
	    this._containerIsOverflowing = container.scrollHeight > containerClientHeight(container, this);
	
	    this._originalPadding = container.style.paddingRight;
	
	    if (this._containerIsOverflowing) {
	      container.style.paddingRight = parseInt(this._originalPadding || 0, 10) + getScrollbarSize() + 'px';
	    }
	
	    if (this.props.backdrop) {
	      this.iosClickHack();
	    }
	
	    this.setState(this._getStyles(), //eslint-disable-line react/no-did-mount-set-state
	    function () {
	      return _this2.focusModalContent();
	    });
	  },
	
	  onHide: function onHide() {
	    this._onDocumentKeyupListener.remove();
	    this._onWindowResizeListener.remove();
	
	    if (this._onFocusinListener) {
	      this._onFocusinListener.remove();
	    }
	
	    var container = getContainer(this);
	
	    container.style.paddingRight = this._originalPadding;
	
	    container.className = container.className.replace(/ ?modal-open/, '');
	
	    this.restoreLastFocus();
	  },
	
	  handleHidden: function handleHidden() {
	    this.setState({ exited: true });
	
	    this.onHide();
	
	    if (this.props.onExited) {
	      var _props3;
	
	      (_props3 = this.props).onExited.apply(_props3, arguments);
	    }
	  },
	
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	
	    this.props.onHide();
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (this.props.keyboard && e.keyCode === 27) {
	      this.props.onHide();
	    }
	  },
	
	  handleWindowResize: function handleWindowResize() {
	    this.setState(this._getStyles());
	  },
	
	  checkForFocus: function checkForFocus() {
	    if (_utilsDomUtils2['default'].canUseDom) {
	      try {
	        this.lastFocus = document.activeElement;
	      } catch (e) {} // eslint-disable-line no-empty
	    }
	  },
	
	  focusModalContent: function focusModalContent() {
	    var modalContent = _react2['default'].findDOMNode(this.refs.dialog);
	    var current = _utilsDomUtils2['default'].activeElement(this);
	    var focusInModal = current && _utilsDomUtils2['default'].contains(modalContent, current);
	
	    if (modalContent && this.props.autoFocus && !focusInModal) {
	      this.lastFocus = current;
	      modalContent.focus();
	    }
	  },
	
	  restoreLastFocus: function restoreLastFocus() {
	    if (this.lastFocus && this.lastFocus.focus) {
	      this.lastFocus.focus();
	      this.lastFocus = null;
	    }
	  },
	
	  enforceFocus: function enforceFocus() {
	    if (!this.isMounted()) {
	      return;
	    }
	
	    var active = _utilsDomUtils2['default'].activeElement(this);
	    var modal = _react2['default'].findDOMNode(this.refs.dialog);
	
	    if (modal && modal !== active && !_utilsDomUtils2['default'].contains(modal, active)) {
	      modal.focus();
	    }
	  },
	
	  iosClickHack: function iosClickHack() {
	    // IOS only allows click events to be delegated to the document on elements
	    // it considers 'clickable' - anchors, buttons, etc. We fake a click handler on the
	    // DOM nodes themselves. Remove if handled by React: https://github.com/facebook/react/issues/1169
	    _react2['default'].findDOMNode(this.refs.modal).onclick = function () {};
	    _react2['default'].findDOMNode(this.refs.backdrop).onclick = function () {};
	  },
	
	  _getStyles: function _getStyles() {
	    if (!_utilsDomUtils2['default'].canUseDom) {
	      return {};
	    }
	
	    var node = _react2['default'].findDOMNode(this.refs.modal);
	    var scrollHt = node.scrollHeight;
	    var container = getContainer(this);
	    var containerIsOverflowing = this._containerIsOverflowing;
	    var modalIsOverflowing = scrollHt > containerClientHeight(container, this);
	
	    return {
	      dialogStyles: {
	        paddingRight: containerIsOverflowing && !modalIsOverflowing ? getScrollbarSize() : void 0,
	        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? getScrollbarSize() : void 0
	      }
	    };
	  }
	
	});
	
	Modal.Body = _ModalBody2['default'];
	Modal.Header = _ModalHeader2['default'];
	Modal.Title = _ModalTitle2['default'];
	Modal.Footer = _ModalFooter2['default'];
	
	Modal.Dialog = _ModalDialog2['default'];
	
	Modal.TRANSITION_DURATION = 300;
	Modal.BACKDROP_TRANSITION_DURATION = 150;
	
	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	module.exports = __webpack_require__(20).Object.isFrozen;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var Portal = _react2['default'].createClass({
	
	  displayName: 'Portal',
	
	  propTypes: {
	    /**
	     * The DOM Node that the Component will render it's children into
	     */
	    container: _utilsCustomPropTypes2['default'].mountable
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderOverlay();
	    this._unmountOverlayTarget();
	  },
	
	  _mountOverlayTarget: function _mountOverlayTarget() {
	    if (!this._overlayTarget) {
	      this._overlayTarget = document.createElement('div');
	      this.getContainerDOMNode().appendChild(this._overlayTarget);
	    }
	  },
	
	  _unmountOverlayTarget: function _unmountOverlayTarget() {
	    if (this._overlayTarget) {
	      this.getContainerDOMNode().removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	  },
	
	  _renderOverlay: function _renderOverlay() {
	
	    var overlay = !this.props.children ? null : _react2['default'].Children.only(this.props.children);
	
	    // Save reference for future access.
	    if (overlay !== null) {
	      this._mountOverlayTarget();
	      this._overlayInstance = _react2['default'].render(overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	      this._unmountOverlayTarget();
	    }
	  },
	
	  _unrenderOverlay: function _unrenderOverlay() {
	    if (this._overlayTarget) {
	      _react2['default'].unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  },
	
	  render: function render() {
	    return null;
	  },
	
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }
	
	    if (this._overlayInstance) {
	      if (this._overlayInstance.getWrappedDOMNode) {
	        return this._overlayInstance.getWrappedDOMNode();
	      } else {
	        return _react2['default'].findDOMNode(this._overlayInstance);
	      }
	    }
	
	    return null;
	  },
	
	  getContainerDOMNode: function getContainerDOMNode() {
	    return _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
	  }
	});
	
	exports['default'] = Portal;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transition = __webpack_require__(75);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var Fade = (function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  // Explicitly copied from Transition for doc generation.
	  // TODO: Remove duplication once #977 is resolved.
	
	  Fade.prototype.render = function render() {
	    return _react2['default'].createElement(
	      _Transition2['default'],
	      _extends({}, this.props, {
	        className: 'fade',
	        enteredClassName: 'in',
	        enteringClassName: 'in'
	      }),
	      this.props.children
	    );
	  };
	
	  return Fade;
	})(_react2['default'].Component);
	
	Fade.propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  'in': _react2['default'].PropTypes.bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _react2['default'].PropTypes.bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2['default'].PropTypes.bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  duration: _react2['default'].PropTypes.number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _react2['default'].PropTypes.func
	};
	
	Fade.defaultProps = {
	  'in': false,
	  duration: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	exports['default'] = Fade;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var ModalDialog = _react2['default'].createClass({
	  displayName: 'ModalDialog',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	
	    /**
	     * A Callback fired when the header closeButton or non-static backdrop is clicked.
	     * @type {function}
	     * @required
	     */
	    onHide: _react2['default'].PropTypes.func.isRequired,
	
	    /**
	     * A css class to apply to the Modal dialog DOM node.
	     */
	    dialogClassName: _react2['default'].PropTypes.string
	
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'modal',
	      closeButton: true
	    };
	  },
	
	  render: function render() {
	    var modalStyle = { display: 'block' };
	    var bsClass = this.props.bsClass;
	    var dialogClasses = this.getBsClassSet();
	
	    delete dialogClasses.modal;
	    dialogClasses[bsClass + '-dialog'] = true;
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        title: null,
	        tabIndex: "-1",
	        role: "dialog",
	        style: modalStyle,
	        className: _classnames2['default'](this.props.className, bsClass)
	      }),
	      _react2['default'].createElement(
	        'div',
	        { className: _classnames2['default'](this.props.dialogClassName, dialogClasses) },
	        _react2['default'].createElement(
	          'div',
	          { className: bsClass + '-content', role: 'document' },
	          this.props.children
	        )
	      )
	    );
	  }
	});
	
	exports['default'] = ModalDialog;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ModalBody = (function (_React$Component) {
	  _inherits(ModalBody, _React$Component);
	
	  function ModalBody() {
	    _classCallCheck(this, ModalBody);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalBody.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
	      this.props.children
	    );
	  };
	
	  return ModalBody;
	})(_react2['default'].Component);
	
	ModalBody.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string
	};
	
	ModalBody.defaultProps = {
	  modalClassName: 'modal-body'
	};
	
	exports['default'] = ModalBody;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ModalHeader = (function (_React$Component) {
	  _inherits(ModalHeader, _React$Component);
	
	  function ModalHeader() {
	    _classCallCheck(this, ModalHeader);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  //used in liue of parent contexts right now to auto wire the close button
	
	  ModalHeader.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, this.props.modalClassName)
	      }),
	      this.props.closeButton && _react2['default'].createElement(
	        'button',
	        {
	          className: 'close',
	          onClick: this.props.onHide
	        },
	        _react2['default'].createElement(
	          'span',
	          { 'aria-hidden': "true" },
	          '×'
	        )
	      ),
	      this.props.children
	    );
	  };
	
	  return ModalHeader;
	})(_react2['default'].Component);
	
	ModalHeader.__isModalHeader = true;
	
	ModalHeader.propTypes = {
	  /**
	   * The 'aria-label' attribute is used to define a string that labels the current element.
	   * It is used for Assistive Technology when the label text is not visible on screen.
	   */
	  'aria-label': _react2['default'].PropTypes.string,
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string,
	  /**
	   * Specify whether the Component should contain a close button
	   */
	  closeButton: _react2['default'].PropTypes.bool,
	  /**
	   * A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically
	   * be propagated up to the parent Modal `onHide`.
	   */
	  onHide: _react2['default'].PropTypes.func
	};
	
	ModalHeader.defaultProps = {
	  'aria-label': 'Close',
	  modalClassName: 'modal-header',
	  closeButton: false
	};
	
	exports['default'] = ModalHeader;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ModalFooter = (function (_React$Component) {
	  _inherits(ModalFooter, _React$Component);
	
	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalFooter.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
	      this.props.children
	    );
	  };
	
	  return ModalFooter;
	})(_react2['default'].Component);
	
	ModalFooter.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string
	};
	
	ModalFooter.defaultProps = {
	  modalClassName: 'modal-footer'
	};
	
	exports['default'] = ModalFooter;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _Collapse = __webpack_require__(74);
	
	var _Collapse2 = _interopRequireDefault(_Collapse);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var Nav = _react2['default'].createClass({
	  displayName: 'Nav',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    activeHref: _react2['default'].PropTypes.string,
	    activeKey: _react2['default'].PropTypes.any,
	    bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
	    stacked: _react2['default'].PropTypes.bool,
	    justified: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    collapsible: _react2['default'].PropTypes.bool,
	    /**
	     * CSS classes for the wrapper `nav` element
	     */
	    className: _react2['default'].PropTypes.string,
	    /**
	     * HTML id for the wrapper `nav` element
	     */
	    id: _react2['default'].PropTypes.string,
	    /**
	     * CSS classes for the inner `ul` element
	     */
	    ulClassName: _react2['default'].PropTypes.string,
	    /**
	     * HTML id for the inner `ul` element
	     */
	    ulId: _react2['default'].PropTypes.string,
	    expanded: _react2['default'].PropTypes.bool,
	    navbar: _react2['default'].PropTypes.bool,
	    eventKey: _react2['default'].PropTypes.any,
	    pullRight: _react2['default'].PropTypes.bool,
	    right: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'nav',
	      expanded: true
	    };
	  },
	
	  render: function render() {
	    var classes = this.props.collapsible ? 'navbar-collapse' : null;
	
	    if (this.props.navbar && !this.props.collapsible) {
	      return this.renderUl();
	    }
	
	    return _react2['default'].createElement(
	      _Collapse2['default'],
	      { 'in': this.props.expanded },
	      _react2['default'].createElement(
	        'nav',
	        _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	        this.renderUl()
	      )
	    );
	  },
	
	  renderUl: function renderUl() {
	    var classes = this.getBsClassSet();
	
	    classes['nav-stacked'] = this.props.stacked;
	    classes['nav-justified'] = this.props.justified;
	    classes['navbar-nav'] = this.props.navbar;
	    classes['pull-right'] = this.props.pullRight;
	    classes['navbar-right'] = this.props.right;
	
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        role: this.props.bsStyle === 'tabs' ? 'tablist' : null,
	        className: _classnames2['default'](this.props.ulClassName, classes),
	        id: this.props.ulId,
	        ref: "ul"
	      }),
	      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
	    );
	  },
	
	  getChildActiveProp: function getChildActiveProp(child) {
	    if (child.props.active) {
	      return true;
	    }
	    if (this.props.activeKey != null) {
	      if (child.props.eventKey === this.props.activeKey) {
	        return true;
	      }
	    }
	    if (this.props.activeHref != null) {
	      if (child.props.href === this.props.activeHref) {
	        return true;
	      }
	    }
	
	    return child.props.active;
	  },
	
	  renderNavItem: function renderNavItem(child, index) {
	    return _react.cloneElement(child, {
	      role: this.props.bsStyle === 'tabs' ? 'tab' : null,
	      active: this.getChildActiveProp(child),
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
	      key: child.key ? child.key : index,
	      navItem: true
	    });
	  }
	});
	
	exports['default'] = Nav;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Navbar = _react2['default'].createClass({
	  displayName: 'Navbar',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    fixedTop: _react2['default'].PropTypes.bool,
	    fixedBottom: _react2['default'].PropTypes.bool,
	    staticTop: _react2['default'].PropTypes.bool,
	    inverse: _react2['default'].PropTypes.bool,
	    fluid: _react2['default'].PropTypes.bool,
	    role: _react2['default'].PropTypes.string,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _utilsCustomPropTypes2['default'].elementType,
	    brand: _react2['default'].PropTypes.node,
	    toggleButton: _react2['default'].PropTypes.node,
	    toggleNavKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    onToggle: _react2['default'].PropTypes.func,
	    navExpanded: _react2['default'].PropTypes.bool,
	    defaultNavExpanded: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'navbar',
	      bsStyle: 'default',
	      role: 'navigation',
	      componentClass: 'nav'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      navExpanded: this.props.defaultNavExpanded
	    };
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },
	
	  handleToggle: function handleToggle() {
	    if (this.props.onToggle) {
	      this._isChanging = true;
	      this.props.onToggle();
	      this._isChanging = false;
	    }
	
	    this.setState({
	      navExpanded: !this.state.navExpanded
	    });
	  },
	
	  isNavExpanded: function isNavExpanded() {
	    return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	    var ComponentClass = this.props.componentClass;
	
	    classes['navbar-fixed-top'] = this.props.fixedTop;
	    classes['navbar-fixed-bottom'] = this.props.fixedBottom;
	    classes['navbar-static-top'] = this.props.staticTop;
	    classes['navbar-inverse'] = this.props.inverse;
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      _react2['default'].createElement(
	        'div',
	        { className: this.props.fluid ? 'container-fluid' : 'container' },
	        this.props.brand || this.props.toggleButton || this.props.toggleNavKey != null ? this.renderHeader() : null,
	        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChild)
	      )
	    );
	  },
	
	  renderChild: function renderChild(child, index) {
	    return _react.cloneElement(child, {
	      navbar: true,
	      collapsible: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey,
	      expanded: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey && this.isNavExpanded(),
	      key: child.key ? child.key : index
	    });
	  },
	
	  renderHeader: function renderHeader() {
	    var brand = undefined;
	
	    if (this.props.brand) {
	      if (_react2['default'].isValidElement(this.props.brand)) {
	        brand = _react.cloneElement(this.props.brand, {
	          className: _classnames2['default'](this.props.brand.props.className, 'navbar-brand')
	        });
	      } else {
	        brand = _react2['default'].createElement(
	          'span',
	          { className: "navbar-brand" },
	          this.props.brand
	        );
	      }
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: "navbar-header" },
	      brand,
	      this.props.toggleButton || this.props.toggleNavKey != null ? this.renderToggleButton() : null
	    );
	  },
	
	  renderToggleButton: function renderToggleButton() {
	    var children = undefined;
	
	    if (_react2['default'].isValidElement(this.props.toggleButton)) {
	
	      return _react.cloneElement(this.props.toggleButton, {
	        className: _classnames2['default'](this.props.toggleButton.props.className, 'navbar-toggle'),
	        onClick: _utilsCreateChainedFunction2['default'](this.handleToggle, this.props.toggleButton.props.onClick)
	      });
	    }
	
	    children = this.props.toggleButton != null ? this.props.toggleButton : [_react2['default'].createElement(
	      'span',
	      { className: "sr-only", key: 0 },
	      'Toggle navigation'
	    ), _react2['default'].createElement('span', { className: "icon-bar", key: 1 }), _react2['default'].createElement('span', { className: "icon-bar", key: 2 }), _react2['default'].createElement('span', { className: "icon-bar", key: 3 })];
	
	    return _react2['default'].createElement(
	      'button',
	      { className: "navbar-toggle", type: "button", onClick: this.handleToggle },
	      children
	    );
	  }
	});
	
	exports['default'] = Navbar;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var NavItem = _react2['default'].createClass({
	  displayName: 'NavItem',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    linkId: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func,
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    href: _react2['default'].PropTypes.string,
	    role: _react2['default'].PropTypes.string,
	    title: _react2['default'].PropTypes.node,
	    eventKey: _react2['default'].PropTypes.any,
	    target: _react2['default'].PropTypes.string,
	    'aria-controls': _react2['default'].PropTypes.string
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var role = _props.role;
	    var linkId = _props.linkId;
	    var disabled = _props.disabled;
	    var active = _props.active;
	    var href = _props.href;
	    var title = _props.title;
	    var target = _props.target;
	    var children = _props.children;
	    var ariaControls = _props['aria-controls'];
	
	    var props = _objectWithoutProperties(_props, ['role', 'linkId', 'disabled', 'active', 'href', 'title', 'target', 'children', 'aria-controls']);
	
	    var classes = {
	      active: active,
	      disabled: disabled
	    };
	    var linkProps = {
	      role: role,
	      href: href,
	      title: title,
	      target: target,
	      id: linkId,
	      onClick: this.handleClick
	    };
	
	    if (!role && href === '#') {
	      linkProps.role = 'button';
	    }
	
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, props, { role: 'presentation', className: _classnames2['default'](props.className, classes) }),
	      _react2['default'].createElement(
	        _SafeAnchor2['default'],
	        _extends({}, linkProps, { 'aria-selected': active, 'aria-controls': ariaControls }),
	        children
	      )
	    );
	  },
	
	  handleClick: function handleClick(e) {
	    if (this.props.onSelect) {
	      e.preventDefault();
	
	      if (!this.props.disabled) {
	        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
	      }
	    }
	  }
	});
	
	exports['default'] = NavItem;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/prop-types: [2, {ignore: ["container", "containerPadding", "target", "placement", "children"] }] */
	/* These properties are validated in 'Portal' and 'Position' components */
	
	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Portal = __webpack_require__(95);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _Position = __webpack_require__(105);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _RootCloseWrapper = __webpack_require__(107);
	
	var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var _Fade = __webpack_require__(96);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Overlay = (function (_React$Component) {
	  _inherits(Overlay, _React$Component);
	
	  function Overlay(props, context) {
	    _classCallCheck(this, Overlay);
	
	    _React$Component.call(this, props, context);
	
	    this.state = { exited: !props.show };
	    this.onHiddenListener = this.handleHidden.bind(this);
	  }
	
	  Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.animation) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  };
	
	  Overlay.prototype.render = function render() {
	    var _props = this.props;
	    var container = _props.container;
	    var containerPadding = _props.containerPadding;
	    var target = _props.target;
	    var placement = _props.placement;
	    var rootClose = _props.rootClose;
	    var children = _props.children;
	    var Transition = _props.animation;
	
	    var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'rootClose', 'children', 'animation']);
	
	    if (Transition === true) {
	      Transition = _Fade2['default'];
	    }
	
	    // Don't un-render the overlay while it's transitioning out.
	    var mountOverlay = props.show || Transition && !this.state.exited;
	    if (!mountOverlay) {
	      // Don't bother showing anything if we don't have to.
	      return null;
	    }
	
	    var child = children;
	
	    // Position is be inner-most because it adds inline styles into the child,
	    // which the other wrappers don't forward correctly.
	    child = _react2['default'].createElement(
	      _Position2['default'],
	      { container: container, containerPadding: containerPadding, target: target, placement: placement },
	      child
	    );
	
	    if (Transition) {
	      var onExit = props.onExit;
	
	      // This animates the child node by injecting props, so it must precede
	      // anything that adds a wrapping div.
	      var onExiting = props.onExiting;
	      var onEnter = props.onEnter;
	      var onEntering = props.onEntering;
	      var onEntered = props.onEntered;
	      child = _react2['default'].createElement(
	        Transition,
	        {
	          'in': props.show,
	          transitionAppear: true,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.onHiddenListener,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        child
	      );
	    } else {
	      child = _react.cloneElement(child, {
	        className: _classnames2['default']('in', child.props.className)
	      });
	    }
	
	    // This goes after everything else because it adds a wrapping div.
	    if (rootClose) {
	      child = _react2['default'].createElement(
	        _RootCloseWrapper2['default'],
	        { onRootClose: props.onHide },
	        child
	      );
	    }
	
	    return _react2['default'].createElement(
	      _Portal2['default'],
	      { container: container },
	      child
	    );
	  };
	
	  Overlay.prototype.handleHidden = function handleHidden() {
	    this.setState({ exited: true });
	
	    if (this.props.onExited) {
	      var _props2;
	
	      (_props2 = this.props).onExited.apply(_props2, arguments);
	    }
	  };
	
	  return Overlay;
	})(_react2['default'].Component);
	
	Overlay.propTypes = _extends({}, _Portal2['default'].propTypes, _Position2['default'].propTypes, {
	  /**
	   * Set the visibility of the Overlay
	   */
	  show: _react2['default'].PropTypes.bool,
	  /**
	   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
	   */
	  rootClose: _react2['default'].PropTypes.bool,
	  /**
	   * A Callback fired by the Overlay when it wishes to be hidden.
	   */
	  onHide: _react2['default'].PropTypes.func,
	
	  /**
	   * Use animation
	   */
	  animation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _utilsCustomPropTypes2['default'].elementType]),
	
	  /**
	   * Callback fired before the Overlay transitions in
	   */
	  onEnter: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired as the Overlay begins to transition in
	   */
	  onEntering: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning in
	   */
	  onEntered: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired right before the Overlay transitions out
	   */
	  onExit: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired as the Overlay begins to transition out
	   */
	  onExiting: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning out
	   */
	  onExited: _react2['default'].PropTypes.func
	});
	
	Overlay.defaultProps = {
	  animation: _Fade2['default']
	};
	
	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsOverlayPositionUtils = __webpack_require__(106);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Position = (function (_React$Component) {
	  _inherits(Position, _React$Component);
	
	  function Position(props, context) {
	    _classCallCheck(this, Position);
	
	    _React$Component.call(this, props, context);
	
	    this.state = {
	      positionLeft: null,
	      positionTop: null,
	      arrowOffsetLeft: null,
	      arrowOffsetTop: null
	    };
	
	    this._needsFlush = false;
	    this._lastTarget = null;
	  }
	
	  Position.prototype.componentDidMount = function componentDidMount() {
	    this.updatePosition();
	  };
	
	  Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
	    this._needsFlush = true;
	  };
	
	  Position.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this._needsFlush) {
	      this._needsFlush = false;
	      this.updatePosition();
	    }
	  };
	
	  Position.prototype.componentWillUnmount = function componentWillUnmount() {
	    // Probably not necessary, but just in case holding a reference to the
	    // target causes problems somewhere.
	    this._lastTarget = null;
	  };
	
	  Position.prototype.render = function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	
	    var props = _objectWithoutProperties(_props, ['children', 'className']);
	
	    var _state = this.state;
	    var positionLeft = _state.positionLeft;
	    var positionTop = _state.positionTop;
	
	    var arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);
	
	    var child = _react2['default'].Children.only(children);
	    return _react.cloneElement(child, _extends({}, props, arrowPosition, {
	      positionTop: positionTop,
	      positionLeft: positionLeft,
	      className: _classnames2['default'](className, child.props.className),
	      style: _extends({}, child.props.style, {
	        left: positionLeft,
	        top: positionTop
	      })
	    }));
	  };
	
	  Position.prototype.getTargetSafe = function getTargetSafe() {
	    if (!this.props.target) {
	      return null;
	    }
	
	    var target = this.props.target(this.props);
	    if (!target) {
	      // This is so we can just use === check below on all falsy targets.
	      return null;
	    }
	
	    return target;
	  };
	
	  Position.prototype.updatePosition = function updatePosition() {
	    var target = this.getTargetSafe();
	    if (target === this._lastTarget) {
	      return;
	    }
	    this._lastTarget = target;
	
	    if (!target) {
	      this.setState({
	        positionLeft: null,
	        positionTop: null,
	        arrowOffsetLeft: null,
	        arrowOffsetTop: null
	      });
	
	      return;
	    }
	
	    var overlay = _react2['default'].findDOMNode(this);
	    var container = _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
	
	    this.setState(_utilsOverlayPositionUtils.calcOverlayPosition(this.props.placement, overlay, target, container, this.props.containerPadding));
	  };
	
	  return Position;
	})(_react2['default'].Component);
	
	Position.propTypes = {
	  /**
	   * Function mapping props to DOM node the component is positioned next to
	   */
	  target: _react2['default'].PropTypes.func,
	  /**
	   * "offsetParent" of the component
	   */
	  container: _utilsCustomPropTypes2['default'].mountable,
	  /**
	   * Minimum spacing in pixels between container border and component border
	   */
	  containerPadding: _react2['default'].PropTypes.number,
	  /**
	   * How to position the component relative to the target
	   */
	  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	};
	
	Position.defaultProps = {
	  containerPadding: 0,
	  placement: 'right'
	};
	
	exports['default'] = Position;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _domUtils = __webpack_require__(51);
	
	var _domUtils2 = _interopRequireDefault(_domUtils);
	
	var utils = {
	
	  getContainerDimensions: function getContainerDimensions(containerNode) {
	    var size = undefined,
	        scroll = undefined;
	
	    if (containerNode.tagName === 'BODY') {
	      size = {
	        width: window.innerWidth,
	        height: window.innerHeight
	      };
	      scroll = _domUtils2['default'].ownerDocument(containerNode).documentElement.scrollTop || containerNode.scrollTop;
	    } else {
	      size = _domUtils2['default'].getSize(containerNode);
	      scroll = containerNode.scrollTop;
	    }
	
	    return _extends({}, size, { scroll: scroll });
	  },
	
	  getPosition: function getPosition(target, container) {
	    var offset = container.tagName === 'BODY' ? _domUtils2['default'].getOffset(target) : _domUtils2['default'].getPosition(target, container);
	    var size = _domUtils2['default'].getSize(target);
	    return _extends({}, offset, size);
	  },
	
	  calcOverlayPosition: function calcOverlayPosition(placement, overlayNode, target, container, padding) {
	    var childOffset = utils.getPosition(target, container);
	
	    var _domUtils$getSize = _domUtils2['default'].getSize(overlayNode);
	
	    var overlayHeight = _domUtils$getSize.height;
	    var overlayWidth = _domUtils$getSize.width;
	
	    var positionLeft = undefined,
	        positionTop = undefined,
	        arrowOffsetLeft = undefined,
	        arrowOffsetTop = undefined;
	
	    if (placement === 'left' || placement === 'right') {
	      positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;
	
	      if (placement === 'left') {
	        positionLeft = childOffset.left - overlayWidth;
	      } else {
	        positionLeft = childOffset.left + childOffset.width;
	      }
	
	      var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);
	
	      positionTop += topDelta;
	      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
	      arrowOffsetLeft = null;
	    } else if (placement === 'top' || placement === 'bottom') {
	      positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;
	
	      if (placement === 'top') {
	        positionTop = childOffset.top - overlayHeight;
	      } else {
	        positionTop = childOffset.top + childOffset.height;
	      }
	
	      var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
	      positionLeft += leftDelta;
	      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
	      arrowOffsetTop = null;
	    } else {
	      throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
	    }
	
	    return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
	  }
	};
	
	function getTopDelta(top, overlayHeight, container, padding) {
	  var containerDimensions = utils.getContainerDimensions(container);
	  var containerScroll = containerDimensions.scroll;
	  var containerHeight = containerDimensions.height;
	
	  var topEdgeOffset = top - padding - containerScroll;
	  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;
	
	  if (topEdgeOffset < 0) {
	    return -topEdgeOffset;
	  } else if (bottomEdgeOffset > containerHeight) {
	    return containerHeight - bottomEdgeOffset;
	  } else {
	    return 0;
	  }
	}
	
	function getLeftDelta(left, overlayWidth, container, padding) {
	  var containerDimensions = utils.getContainerDimensions(container);
	  var containerWidth = containerDimensions.width;
	
	  var leftEdgeOffset = left - padding;
	  var rightEdgeOffset = left + padding + overlayWidth;
	
	  if (leftEdgeOffset < 0) {
	    return -leftEdgeOffset;
	  } else if (rightEdgeOffset > containerWidth) {
	    return containerWidth - rightEdgeOffset;
	  } else {
	    return 0;
	  }
	}
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsDomUtils = __webpack_require__(51);
	
	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);
	
	var _utilsEventListener = __webpack_require__(52);
	
	// TODO: Merge this logic with dropdown logic once #526 is done.
	
	// TODO: Consider using an ES6 symbol here, once we use babel-runtime.
	
	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);
	
	var CLICK_WAS_INSIDE = '__click_was_inside';
	
	function suppressRootClose(event) {
	  // Tag the native event to prevent the root close logic on document click.
	  // This seems safer than using event.nativeEvent.stopImmediatePropagation(),
	  // which is only supported in IE >= 9.
	  event.nativeEvent[CLICK_WAS_INSIDE] = true;
	}
	
	var RootCloseWrapper = (function (_React$Component) {
	  _inherits(RootCloseWrapper, _React$Component);
	
	  function RootCloseWrapper(props) {
	    _classCallCheck(this, RootCloseWrapper);
	
	    _React$Component.call(this, props);
	
	    this.handleDocumentClick = this.handleDocumentClick.bind(this);
	    this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
	  }
	
	  RootCloseWrapper.prototype.bindRootCloseHandlers = function bindRootCloseHandlers() {
	    var doc = _utilsDomUtils2['default'].ownerDocument(this);
	
	    this._onDocumentClickListener = _utilsEventListener2['default'].listen(doc, 'click', this.handleDocumentClick);
	    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
	  };
	
	  RootCloseWrapper.prototype.handleDocumentClick = function handleDocumentClick(e) {
	    // This is now the native event.
	    if (e[CLICK_WAS_INSIDE]) {
	      return;
	    }
	
	    this.props.onRootClose();
	  };
	
	  RootCloseWrapper.prototype.handleDocumentKeyUp = function handleDocumentKeyUp(e) {
	    if (e.keyCode === 27) {
	      this.props.onRootClose();
	    }
	  };
	
	  RootCloseWrapper.prototype.unbindRootCloseHandlers = function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	    }
	  };
	
	  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
	    this.bindRootCloseHandlers();
	  };
	
	  RootCloseWrapper.prototype.render = function render() {
	    // Wrap the child in a new element, so the child won't have to handle
	    // potentially combining multiple onClick listeners.
	    return _react2['default'].createElement(
	      'div',
	      { onClick: suppressRootClose },
	      _react2['default'].Children.only(this.props.children)
	    );
	  };
	
	  RootCloseWrapper.prototype.getWrappedDOMNode = function getWrappedDOMNode() {
	    // We can't use a ref to identify the wrapped child, since we might be
	    // stealing the ref from the owner, but we know exactly the DOM structure
	    // that will be rendered, so we can just do this to get the child's DOM
	    // node for doing size calculations in OverlayMixin.
	    return _react2['default'].findDOMNode(this).children[0];
	  };
	
	  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  };
	
	  return RootCloseWrapper;
	})(_react2['default'].Component);
	
	exports['default'] = RootCloseWrapper;
	
	RootCloseWrapper.propTypes = {
	  onRootClose: _react2['default'].PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _Object$keys = __webpack_require__(44)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _utilsCreateContextWrapper = __webpack_require__(109);
	
	var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);
	
	var _Overlay = __webpack_require__(104);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _reactLibWarning = __webpack_require__(70);
	
	var _reactLibWarning2 = _interopRequireDefault(_reactLibWarning);
	
	var _lodashObjectPick = __webpack_require__(110);
	
	/**
	 * Check if value one is inside or equal to the of value
	 *
	 * @param {string} one
	 * @param {string|array} of
	 * @returns {boolean}
	 */
	
	var _lodashObjectPick2 = _interopRequireDefault(_lodashObjectPick);
	
	function isOneOf(one, of) {
	  if (Array.isArray(of)) {
	    return of.indexOf(one) >= 0;
	  }
	  return one === of;
	}
	
	var OverlayTrigger = _react2['default'].createClass({
	  displayName: 'OverlayTrigger',
	
	  propTypes: _extends({}, _Overlay2['default'].propTypes, {
	
	    /**
	    * Specify which action or actions trigger Overlay visibility
	    */
	    trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),
	
	    /**
	     * A millisecond delay amount to show and hide the Overlay once triggered
	     */
	    delay: _react2['default'].PropTypes.number,
	    /**
	     * A millisecond delay amount before showing the Overlay once triggered.
	     */
	    delayShow: _react2['default'].PropTypes.number,
	    /**
	     * A millisecond delay amount before hiding the Overlay once triggered.
	     */
	    delayHide: _react2['default'].PropTypes.number,
	
	    /**
	     * The initial visibility state of the Overlay, for more nuanced visibility controll consider
	     * using the Overlay component directly.
	     */
	    defaultOverlayShown: _react2['default'].PropTypes.bool,
	
	    /**
	     * An element or text to overlay next to the target.
	     */
	    overlay: _react2['default'].PropTypes.node.isRequired,
	
	    /**
	     * @private
	     */
	    onBlur: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onClick: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onFocus: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onMouseEnter: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onMouseLeave: _react2['default'].PropTypes.func,
	
	    //override specific overlay props
	    /**
	     * @private
	     */
	    target: function target() {},
	    /**
	    * @private
	    */
	    onHide: function onHide() {},
	    /**
	     * @private
	     */
	    show: function show() {}
	  }),
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      trigger: ['hover', 'focus']
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      isOverlayShown: this.props.defaultOverlayShown == null ? false : this.props.defaultOverlayShown
	    };
	  },
	
	  show: function show() {
	    this.setState({
	      isOverlayShown: true
	    });
	  },
	
	  hide: function hide() {
	    this.setState({
	      isOverlayShown: false
	    });
	  },
	
	  toggle: function toggle() {
	    if (this.state.isOverlayShown) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._mountNode = document.createElement('div');
	    _react2['default'].render(this._overlay, this._mountNode);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    _react2['default'].unmountComponentAtNode(this._mountNode);
	    this._mountNode = null;
	    clearTimeout(this._hoverDelay);
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this._mountNode) {
	      _react2['default'].render(this._overlay, this._mountNode);
	    }
	  },
	
	  getOverlayTarget: function getOverlayTarget() {
	    return _react2['default'].findDOMNode(this);
	  },
	
	  getOverlay: function getOverlay() {
	    var overlayProps = _extends({}, _lodashObjectPick2['default'](this.props, _Object$keys(_Overlay2['default'].propTypes)), {
	      show: this.state.isOverlayShown,
	      onHide: this.hide,
	      target: this.getOverlayTarget,
	      onExit: this.props.onExit,
	      onExiting: this.props.onExiting,
	      onExited: this.props.onExited,
	      onEnter: this.props.onEnter,
	      onEntering: this.props.onEntering,
	      onEntered: this.props.onEntered
	    });
	
	    var overlay = _react.cloneElement(this.props.overlay, {
	      placement: overlayProps.placement,
	      container: overlayProps.container
	    });
	
	    return _react2['default'].createElement(
	      _Overlay2['default'],
	      overlayProps,
	      overlay
	    );
	  },
	
	  render: function render() {
	    var trigger = _react2['default'].Children.only(this.props.children);
	
	    var props = {
	      'aria-describedby': this.props.overlay.props.id
	    };
	
	    // create in render otherwise owner is lost...
	    this._overlay = this.getOverlay();
	
	    props.onClick = _utilsCreateChainedFunction2['default'](trigger.props.onClick, this.props.onClick);
	
	    if (isOneOf('click', this.props.trigger)) {
	      props.onClick = _utilsCreateChainedFunction2['default'](this.toggle, props.onClick);
	    }
	
	    if (isOneOf('hover', this.props.trigger)) {
	      _reactLibWarning2['default'](!(this.props.trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibilty of the overlay to just mouse users. ' + 'Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');
	
	      props.onMouseOver = _utilsCreateChainedFunction2['default'](this.handleDelayedShow, this.props.onMouseOver);
	      props.onMouseOut = _utilsCreateChainedFunction2['default'](this.handleDelayedHide, this.props.onMouseOut);
	    }
	
	    if (isOneOf('focus', this.props.trigger)) {
	      props.onFocus = _utilsCreateChainedFunction2['default'](this.handleDelayedShow, this.props.onFocus);
	      props.onBlur = _utilsCreateChainedFunction2['default'](this.handleDelayedHide, this.props.onBlur);
	    }
	
	    return _react.cloneElement(trigger, props);
	  },
	
	  handleDelayedShow: function handleDelayedShow() {
	    var _this = this;
	
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }
	
	    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;
	
	    if (!delay) {
	      this.show();
	      return;
	    }
	
	    this._hoverDelay = setTimeout(function () {
	      _this._hoverDelay = null;
	      _this.show();
	    }, delay);
	  },
	
	  handleDelayedHide: function handleDelayedHide() {
	    var _this2 = this;
	
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }
	
	    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;
	
	    if (!delay) {
	      this.hide();
	      return;
	    }
	
	    this._hoverDelay = setTimeout(function () {
	      _this2._hoverDelay = null;
	      _this2.hide();
	    }, delay);
	  }
	
	});
	
	/**
	 * Creates a new OverlayTrigger class that forwards the relevant context
	 *
	 * This static method should only be called at the module level, instead of in
	 * e.g. a render() method, because it's expensive to create new classes.
	 *
	 * For example, you would want to have:
	 *
	 * > export default OverlayTrigger.withContext({
	 * >   myContextKey: React.PropTypes.object
	 * > });
	 *
	 * and import this when needed.
	 */
	OverlayTrigger.withContext = _utilsCreateContextWrapper2['default'](OverlayTrigger, 'overlay');
	
	exports['default'] = OverlayTrigger;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(26)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	exports['default'] = createContextWrapper;
	
	var _react = __webpack_require__(2);
	
	/**
	 * Creates new trigger class that injects context into overlay.
	 */
	
	var _react2 = _interopRequireDefault(_react);
	
	function createContextWrapper(Trigger, propName) {
	  return function (contextTypes) {
	    var ContextWrapper = (function (_React$Component) {
	      _inherits(ContextWrapper, _React$Component);
	
	      function ContextWrapper() {
	        _classCallCheck(this, ContextWrapper);
	
	        _React$Component.apply(this, arguments);
	      }
	
	      ContextWrapper.prototype.getChildContext = function getChildContext() {
	        return this.props.context;
	      };
	
	      ContextWrapper.prototype.render = function render() {
	        // Strip injected props from below.
	        var _props = this.props;
	        var wrapped = _props.wrapped;
	        var context = _props.context;
	
	        var props = _objectWithoutProperties(_props, ['wrapped', 'context']);
	
	        return _react2['default'].cloneElement(wrapped, props);
	      };
	
	      return ContextWrapper;
	    })(_react2['default'].Component);
	
	    ContextWrapper.childContextTypes = contextTypes;
	
	    var TriggerWithContext = (function () {
	      function TriggerWithContext() {
	        _classCallCheck(this, TriggerWithContext);
	      }
	
	      TriggerWithContext.prototype.render = function render() {
	        var props = _extends({}, this.props);
	        props[propName] = this.getWrappedOverlay();
	
	        return _react2['default'].createElement(
	          Trigger,
	          props,
	          this.props.children
	        );
	      };
	
	      TriggerWithContext.prototype.getWrappedOverlay = function getWrappedOverlay() {
	        return _react2['default'].createElement(ContextWrapper, {
	          context: this.context,
	          wrapped: this.props[propName]
	        });
	      };
	
	      return TriggerWithContext;
	    })();
	
	    TriggerWithContext.contextTypes = contextTypes;
	
	    return TriggerWithContext;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(111),
	    bindCallback = __webpack_require__(124),
	    pickByArray = __webpack_require__(126),
	    pickByCallback = __webpack_require__(128),
	    restParam = __webpack_require__(134);
	
	/**
	 * Creates an object composed of the picked `object` properties. Property
	 * names may be specified as individual arguments or as arrays of property
	 * names. If `predicate` is provided it's invoked for each property of `object`
	 * picking the properties `predicate` returns truthy for. The predicate is
	 * bound to `thisArg` and invoked with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to pick, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.pick(object, 'user');
	 * // => { 'user': 'fred' }
	 *
	 * _.pick(object, _.isString);
	 * // => { 'user': 'fred' }
	 */
	var pick = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  return typeof props[0] == 'function'
	    ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	    : pickByArray(object, baseFlatten(props));
	});
	
	module.exports = pick;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(112),
	    isArguments = __webpack_require__(113),
	    isArray = __webpack_require__(119),
	    isArrayLike = __webpack_require__(114),
	    isObjectLike = __webpack_require__(118);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(114),
	    isObjectLike = __webpack_require__(118);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(115),
	    isLength = __webpack_require__(117);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(116);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(120),
	    isLength = __webpack_require__(117),
	    isObjectLike = __webpack_require__(118);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(121);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(122),
	    isObjectLike = __webpack_require__(118);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(123);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(125);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(127);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);
	
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}
	
	module.exports = pickByArray;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(123);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(129);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}
	
	module.exports = pickByCallback;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(130),
	    keysIn = __webpack_require__(132);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(131);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(127);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(113),
	    isArray = __webpack_require__(119),
	    isIndex = __webpack_require__(133),
	    isLength = __webpack_require__(117),
	    isObject = __webpack_require__(123);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 133 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 134 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var PageHeader = _react2['default'].createClass({
	  displayName: 'PageHeader',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'page-header') }),
	      _react2['default'].createElement(
	        'h1',
	        null,
	        this.props.children
	      )
	    );
	  }
	});
	
	exports['default'] = PageHeader;
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var PageItem = _react2['default'].createClass({
	  displayName: 'PageItem',
	
	  propTypes: {
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    title: _react2['default'].PropTypes.string,
	    disabled: _react2['default'].PropTypes.bool,
	    previous: _react2['default'].PropTypes.bool,
	    next: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    eventKey: _react2['default'].PropTypes.any
	  },
	
	  render: function render() {
	    var classes = {
	      'disabled': this.props.disabled,
	      'previous': this.props.previous,
	      'next': this.props.next
	    };
	
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes) }),
	      _react2['default'].createElement(
	        _SafeAnchor2['default'],
	        {
	          href: this.props.href,
	          title: this.props.title,
	          target: this.props.target,
	          onClick: this.handleSelect },
	        this.props.children
	      )
	    );
	  },
	
	  handleSelect: function handleSelect(e) {
	    if (this.props.onSelect || this.props.disabled) {
	      e.preventDefault();
	
	      if (!this.props.disabled) {
	        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
	      }
	    }
	  }
	});
	
	exports['default'] = PageItem;
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var Pager = _react2['default'].createClass({
	  displayName: 'Pager',
	
	  propTypes: {
	    onSelect: _react2['default'].PropTypes.func
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, 'pager') }),
	      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPageItem)
	    );
	  },
	
	  renderPageItem: function renderPageItem(child, index) {
	    return _react.cloneElement(child, {
	      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
	      key: child.key ? child.key : index
	    });
	  }
	});
	
	exports['default'] = Pager;
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _PaginationButton = __webpack_require__(139);
	
	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var Pagination = _react2['default'].createClass({
	  displayName: 'Pagination',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    activePage: _react2['default'].PropTypes.number,
	    items: _react2['default'].PropTypes.number,
	    maxButtons: _react2['default'].PropTypes.number,
	    ellipsis: _react2['default'].PropTypes.bool,
	    first: _react2['default'].PropTypes.bool,
	    last: _react2['default'].PropTypes.bool,
	    prev: _react2['default'].PropTypes.bool,
	    next: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    /**
	     * You can use a custom element for the buttons
	     */
	    buttonComponentClass: _utilsCustomPropTypes2['default'].elementType
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      activePage: 1,
	      items: 1,
	      maxButtons: 0,
	      first: false,
	      last: false,
	      prev: false,
	      next: false,
	      ellipsis: true,
	      buttonComponentClass: _SafeAnchor2['default'],
	      bsClass: 'pagination'
	    };
	  },
	
	  renderPageButtons: function renderPageButtons() {
	    var pageButtons = [];
	    var startPage = undefined,
	        endPage = undefined,
	        hasHiddenPagesAfter = undefined;
	    var _props = this.props;
	    var maxButtons = _props.maxButtons;
	    var activePage = _props.activePage;
	    var items = _props.items;
	    var onSelect = _props.onSelect;
	    var ellipsis = _props.ellipsis;
	    var buttonComponentClass = _props.buttonComponentClass;
	
	    if (maxButtons) {
	      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2);
	      startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
	      hasHiddenPagesAfter = startPage + maxButtons <= items;
	
	      if (!hasHiddenPagesAfter) {
	        endPage = items;
	        startPage = items - maxButtons + 1;
	        if (startPage < 1) {
	          startPage = 1;
	        }
	      } else {
	        endPage = startPage + maxButtons - 1;
	      }
	    } else {
	      startPage = 1;
	      endPage = items;
	    }
	
	    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
	      pageButtons.push(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        {
	          key: pagenumber,
	          eventKey: pagenumber,
	          active: pagenumber === activePage,
	          onSelect: onSelect,
	          buttonComponentClass: buttonComponentClass },
	        pagenumber
	      ));
	    }
	
	    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
	      pageButtons.push(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        {
	          key: 'ellipsis',
	          disabled: true,
	          buttonComponentClass: buttonComponentClass },
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'More' },
	          '...'
	        )
	      ));
	    }
	
	    return pageButtons;
	  },
	
	  renderPrev: function renderPrev() {
	    if (!this.props.prev) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'prev',
	        eventKey: this.props.activePage - 1,
	        disabled: this.props.activePage === 1,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'Previous' },
	        '‹'
	      )
	    );
	  },
	
	  renderNext: function renderNext() {
	    if (!this.props.next) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'next',
	        eventKey: this.props.activePage + 1,
	        disabled: this.props.activePage >= this.props.items,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'Next' },
	        '›'
	      )
	    );
	  },
	
	  renderFirst: function renderFirst() {
	    if (!this.props.first) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'first',
	        eventKey: 1,
	        disabled: this.props.activePage === 1,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'First' },
	        '«'
	      )
	    );
	  },
	
	  renderLast: function renderLast() {
	    if (!this.props.last) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'last',
	        eventKey: this.props.items,
	        disabled: this.props.activePage >= this.props.items,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'Last' },
	        '»'
	      )
	    );
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, this.getBsClassSet()) }),
	      this.renderFirst(),
	      this.renderPrev(),
	      this.renderPageButtons(),
	      this.renderNext(),
	      this.renderLast()
	    );
	  }
	});
	
	exports['default'] = Pagination;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsCreateSelectedEvent = __webpack_require__(140);
	
	var _utilsCreateSelectedEvent2 = _interopRequireDefault(_utilsCreateSelectedEvent);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var PaginationButton = _react2['default'].createClass({
	  displayName: 'PaginationButton',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    className: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    onSelect: _react2['default'].PropTypes.func,
	    disabled: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    buttonComponentClass: _utilsCustomPropTypes2['default'].elementType
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false,
	      disabled: false
	    };
	  },
	
	  handleClick: function handleClick(event) {
	    if (this.props.onSelect) {
	      var selectedEvent = _utilsCreateSelectedEvent2['default'](this.props.eventKey);
	      this.props.onSelect(event, selectedEvent);
	    }
	  },
	
	  render: function render() {
	    var classes = _extends({
	      active: this.props.active,
	      disabled: this.props.disabled
	    }, this.getBsClassSet());
	
	    var _props = this.props;
	    var className = _props.className;
	
	    var anchorProps = _objectWithoutProperties(_props, ['className']);
	
	    var ButtonComponentClass = this.props.buttonComponentClass;
	
	    return _react2['default'].createElement(
	      'li',
	      { className: _classnames2['default'](className, classes) },
	      _react2['default'].createElement(ButtonComponentClass, _extends({}, anchorProps, {
	        onClick: this.handleClick }))
	    );
	  }
	});
	
	exports['default'] = PaginationButton;
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = createSelectedEvent;
	
	function createSelectedEvent(eventKey) {
	  var selectionPrevented = false;
	
	  return {
	    eventKey: eventKey,
	
	    preventSelection: function preventSelection() {
	      selectionPrevented = true;
	    },
	
	    isSelectionPrevented: function isSelectionPrevented() {
	      return selectionPrevented;
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _Collapse = __webpack_require__(74);
	
	var _Collapse2 = _interopRequireDefault(_Collapse);
	
	var Panel = _react2['default'].createClass({
	  displayName: 'Panel',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    collapsible: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    header: _react2['default'].PropTypes.node,
	    id: _react2['default'].PropTypes.string,
	    footer: _react2['default'].PropTypes.node,
	    defaultExpanded: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool,
	    eventKey: _react2['default'].PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'panel',
	      bsStyle: 'default'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;
	
	    return {
	      expanded: defaultExpanded
	    };
	  },
	
	  handleSelect: function handleSelect(e) {
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.handleToggle();
	    }
	  },
	
	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, this.getBsClassSet()),
	        id: this.props.collapsible ? null : this.props.id, onSelect: null }),
	      this.renderHeading(),
	      this.props.collapsible ? this.renderCollapsibleBody() : this.renderBody(),
	      this.renderFooter()
	    );
	  },
	
	  renderCollapsibleBody: function renderCollapsibleBody() {
	    var collapseClass = this.prefixClass('collapse');
	
	    return _react2['default'].createElement(
	      _Collapse2['default'],
	      { 'in': this.isExpanded() },
	      _react2['default'].createElement(
	        'div',
	        {
	          className: collapseClass,
	          id: this.props.id,
	          ref: 'panel',
	          'aria-expanded': this.isExpanded() },
	        this.renderBody()
	      )
	    );
	  },
	
	  renderBody: function renderBody() {
	    var allChildren = this.props.children;
	    var bodyElements = [];
	    var panelBodyChildren = [];
	    var bodyClass = this.prefixClass('body');
	
	    function getProps() {
	      return { key: bodyElements.length };
	    }
	
	    function addPanelChild(child) {
	      bodyElements.push(_react.cloneElement(child, getProps()));
	    }
	
	    function addPanelBody(children) {
	      bodyElements.push(_react2['default'].createElement(
	        'div',
	        _extends({ className: bodyClass }, getProps()),
	        children
	      ));
	    }
	
	    function maybeRenderPanelBody() {
	      if (panelBodyChildren.length === 0) {
	        return;
	      }
	
	      addPanelBody(panelBodyChildren);
	      panelBodyChildren = [];
	    }
	
	    // Handle edge cases where we should not iterate through children.
	    if (!Array.isArray(allChildren) || allChildren.length === 0) {
	      if (this.shouldRenderFill(allChildren)) {
	        addPanelChild(allChildren);
	      } else {
	        addPanelBody(allChildren);
	      }
	    } else {
	
	      allChildren.forEach((function (child) {
	        if (this.shouldRenderFill(child)) {
	          maybeRenderPanelBody();
	
	          // Separately add the filled element.
	          addPanelChild(child);
	        } else {
	          panelBodyChildren.push(child);
	        }
	      }).bind(this));
	
	      maybeRenderPanelBody();
	    }
	
	    return bodyElements;
	  },
	
	  shouldRenderFill: function shouldRenderFill(child) {
	    return _react2['default'].isValidElement(child) && child.props.fill != null;
	  },
	
	  renderHeading: function renderHeading() {
	    var header = this.props.header;
	
	    if (!header) {
	      return null;
	    }
	
	    if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
	      header = this.props.collapsible ? this.renderCollapsibleTitle(header) : header;
	    } else {
	      var className = _classnames2['default'](this.prefixClass('title'), header.props.className);
	
	      if (this.props.collapsible) {
	        header = _react.cloneElement(header, {
	          className: className,
	          children: this.renderAnchor(header.props.children)
	        });
	      } else {
	        header = _react.cloneElement(header, { className: className });
	      }
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: this.prefixClass('heading') },
	      header
	    );
	  },
	
	  renderAnchor: function renderAnchor(header) {
	    return _react2['default'].createElement(
	      'a',
	      {
	        href: '#' + (this.props.id || ''),
	        'aria-controls': this.props.collapsible ? this.props.id : null,
	        className: this.isExpanded() ? null : 'collapsed',
	        'aria-expanded': this.isExpanded(),
	        onClick: this.handleSelect },
	      header
	    );
	  },
	
	  renderCollapsibleTitle: function renderCollapsibleTitle(header) {
	    return _react2['default'].createElement(
	      'h4',
	      { className: this.prefixClass('title') },
	      this.renderAnchor(header)
	    );
	  },
	
	  renderFooter: function renderFooter() {
	    if (!this.props.footer) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      this.props.footer
	    );
	  }
	});
	
	exports['default'] = Panel;
	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Popover = _react2['default'].createClass({
	  displayName: 'Popover',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    /**
	     * An html id attribute, necessary for accessibility
	     * @type {string}
	     * @required
	     */
	    id: _utilsCustomPropTypes2['default'].isRequiredForA11y(_react2['default'].PropTypes.string),
	
	    /**
	     * Sets the direction the Popover is positioned towards.
	     */
	    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	
	    /**
	     * The "left" position value for the Popover.
	     */
	    positionLeft: _react2['default'].PropTypes.number,
	    /**
	     * The "top" position value for the Popover.
	     */
	    positionTop: _react2['default'].PropTypes.number,
	    /**
	     * The "left" position value for the Popover arrow.
	     */
	    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * The "top" position value for the Popover arrow.
	     */
	    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * Title text
	     */
	    title: _react2['default'].PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right'
	    };
	  },
	
	  render: function render() {
	    var _classes;
	
	    var classes = (_classes = {
	      'popover': true
	    }, _classes[this.props.placement] = true, _classes);
	
	    var style = {
	      'left': this.props.positionLeft,
	      'top': this.props.positionTop,
	      'display': 'block'
	    };
	
	    var arrowStyle = {
	      'left': this.props.arrowOffsetLeft,
	      'top': this.props.arrowOffsetTop
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({ role: 'tooltip' }, this.props, { className: _classnames2['default'](this.props.className, classes), style: style, title: null }),
	      _react2['default'].createElement('div', { className: "arrow", style: arrowStyle }),
	      this.props.title ? this.renderTitle() : null,
	      _react2['default'].createElement(
	        'div',
	        { className: "popover-content" },
	        this.props.children
	      )
	    );
	  },
	
	  renderTitle: function renderTitle() {
	    return _react2['default'].createElement(
	      'h3',
	      { className: "popover-title" },
	      this.props.title
	    );
	  }
	});
	
	exports['default'] = Popover;
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/prop-types: [2, {ignore: "bsStyle"}] */
	/* BootstrapMixin contains `bsStyle` type validation */
	
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Interpolate = __webpack_require__(85);
	
	var _Interpolate2 = _interopRequireDefault(_Interpolate);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var ProgressBar = _react2['default'].createClass({
	  displayName: 'ProgressBar',
	
	  propTypes: {
	    min: _react.PropTypes.number,
	    now: _react.PropTypes.number,
	    max: _react.PropTypes.number,
	    label: _react.PropTypes.node,
	    srOnly: _react.PropTypes.bool,
	    striped: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    children: onlyProgressBar,
	    className: _react2['default'].PropTypes.string,
	    interpolateClass: _react.PropTypes.node,
	    isChild: _react.PropTypes.bool
	  },
	
	  mixins: [_BootstrapMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'progress-bar',
	      min: 0,
	      max: 100
	    };
	  },
	
	  getPercentage: function getPercentage(now, min, max) {
	    var roundPrecision = 1000;
	    return Math.round((now - min) / (max - min) * 100 * roundPrecision) / roundPrecision;
	  },
	
	  render: function render() {
	    if (this.props.isChild) {
	      return this.renderProgressBar();
	    }
	
	    var content = undefined;
	
	    if (this.props.children) {
	      content = _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChildBar);
	    } else {
	      content = this.renderProgressBar();
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'progress') }),
	      content
	    );
	  },
	
	  renderChildBar: function renderChildBar(child, index) {
	    return _react.cloneElement(child, {
	      isChild: true,
	      key: child.key ? child.key : index
	    });
	  },
	
	  renderProgressBar: function renderProgressBar() {
	    var percentage = this.getPercentage(this.props.now, this.props.min, this.props.max);
	
	    var label = undefined;
	
	    if (typeof this.props.label === 'string') {
	      label = this.renderLabel(percentage);
	    } else {
	      label = this.props.label;
	    }
	
	    if (this.props.srOnly) {
	      label = _react2['default'].createElement(
	        'span',
	        { className: "sr-only" },
	        label
	      );
	    }
	
	    var classes = _classnames2['default'](this.props.className, this.getBsClassSet(), {
	      active: this.props.active,
	      'progress-bar-striped': this.props.active || this.props.striped
	    });
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classes,
	        role: "progressbar",
	        style: { width: percentage + '%' },
	        'aria-valuenow': this.props.now,
	        'aria-valuemin': this.props.min,
	        'aria-valuemax': this.props.max }),
	      label
	    );
	  },
	
	  renderLabel: function renderLabel(percentage) {
	    var InterpolateClass = this.props.interpolateClass || _Interpolate2['default'];
	
	    return _react2['default'].createElement(
	      InterpolateClass,
	      {
	        now: this.props.now,
	        min: this.props.min,
	        max: this.props.max,
	        percent: percentage,
	        bsStyle: this.props.bsStyle },
	      this.props.label
	    );
	  }
	});
	
	/**
	 * Custom propTypes checker
	 */
	function onlyProgressBar(props, propName, componentName) {
	  if (props[propName]) {
	    var _ret = (function () {
	      var error = undefined,
	          childIdentifier = undefined;
	
	      _react2['default'].Children.forEach(props[propName], function (child) {
	        if (child.type !== ProgressBar) {
	          childIdentifier = child.type.displayName ? child.type.displayName : child.type;
	          error = new Error('Children of ' + componentName + ' can contain only ProgressBar components. Found ' + childIdentifier);
	        }
	      });
	
	      return {
	        v: error
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  }
	}
	
	exports['default'] = ProgressBar;
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Row = _react2['default'].createClass({
	  displayName: 'Row',
	
	  propTypes: {
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _utilsCustomPropTypes2['default'].elementType
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },
	
	  render: function render() {
	    var ComponentClass = this.props.componentClass;
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'row') }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/prop-types: [2, {ignore: "bsSize"}] */
	/* BootstrapMixin contains `bsSize` type validation */
	
	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _DropdownStateMixin = __webpack_require__(78);
	
	var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);
	
	var _Button = __webpack_require__(55);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ButtonGroup = __webpack_require__(61);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _DropdownMenu = __webpack_require__(79);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var SplitButton = _react2['default'].createClass({
	  displayName: 'SplitButton',
	
	  mixins: [_BootstrapMixin2['default'], _DropdownStateMixin2['default']],
	
	  propTypes: {
	    pullRight: _react2['default'].PropTypes.bool,
	    title: _react2['default'].PropTypes.node,
	    href: _react2['default'].PropTypes.string,
	    id: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    dropdownTitle: _react2['default'].PropTypes.node,
	    dropup: _react2['default'].PropTypes.bool,
	    onClick: _react2['default'].PropTypes.func,
	    onSelect: _react2['default'].PropTypes.func,
	    disabled: _react2['default'].PropTypes.bool,
	    className: _react2['default'].PropTypes.string,
	    children: _react2['default'].PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      dropdownTitle: 'Toggle dropdown'
	    };
	  },
	
	  render: function render() {
	    var groupClasses = {
	      'open': this.state.open,
	      'dropup': this.props.dropup
	    };
	
	    var button = _react2['default'].createElement(
	      _Button2['default'],
	      _extends({}, this.props, {
	        ref: "button",
	        onClick: this.handleButtonClick,
	        title: null,
	        id: null }),
	      this.props.title
	    );
	
	    var dropdownButton = _react2['default'].createElement(
	      _Button2['default'],
	      _extends({}, this.props, {
	        ref: "dropdownButton",
	        className: _classnames2['default'](this.props.className, 'dropdown-toggle'),
	        onClick: this.handleDropdownClick,
	        title: null,
	        href: null,
	        target: null,
	        id: null }),
	      _react2['default'].createElement(
	        'span',
	        { className: "sr-only" },
	        this.props.dropdownTitle
	      ),
	      _react2['default'].createElement('span', { className: "caret" }),
	      _react2['default'].createElement(
	        'span',
	        { style: { letterSpacing: '-.3em' } },
	        ' '
	      )
	    );
	
	    return _react2['default'].createElement(
	      _ButtonGroup2['default'],
	      {
	        bsSize: this.props.bsSize,
	        className: _classnames2['default'](groupClasses),
	        id: this.props.id },
	      button,
	      dropdownButton,
	      _react2['default'].createElement(
	        _DropdownMenu2['default'],
	        {
	          ref: "menu",
	          onSelect: this.handleOptionSelect,
	          'aria-labelledby': this.props.id,
	          pullRight: this.props.pullRight },
	        this.props.children
	      )
	    );
	  },
	
	  handleButtonClick: function handleButtonClick(e) {
	    if (this.state.open) {
	      this.setDropdownState(false);
	    }
	
	    if (this.props.onClick) {
	      this.props.onClick(e, this.props.href, this.props.target);
	    }
	  },
	
	  handleDropdownClick: function handleDropdownClick(e) {
	    e.preventDefault();
	
	    this.setDropdownState(!this.state.open);
	  },
	
	  handleOptionSelect: function handleOptionSelect(key) {
	    if (this.props.onSelect) {
	      this.props.onSelect(key);
	    }
	
	    this.setDropdownState(false);
	  }
	});
	
	exports['default'] = SplitButton;
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _utilsCreateChainedFunction = __webpack_require__(76);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var SubNav = _react2['default'].createClass({
	  displayName: 'SubNav',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    onSelect: _react2['default'].PropTypes.func,
	    active: _react2['default'].PropTypes.bool,
	    activeHref: _react2['default'].PropTypes.string,
	    activeKey: _react2['default'].PropTypes.any,
	    disabled: _react2['default'].PropTypes.bool,
	    eventKey: _react2['default'].PropTypes.any,
	    href: _react2['default'].PropTypes.string,
	    title: _react2['default'].PropTypes.string,
	    text: _react2['default'].PropTypes.node,
	    target: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'nav'
	    };
	  },
	
	  handleClick: function handleClick(e) {
	    if (this.props.onSelect) {
	      e.preventDefault();
	
	      if (!this.props.disabled) {
	        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
	      }
	    }
	  },
	
	  isActive: function isActive() {
	    return this.isChildActive(this);
	  },
	
	  isChildActive: function isChildActive(child) {
	    if (child.props.active) {
	      return true;
	    }
	
	    if (this.props.activeKey != null && this.props.activeKey === child.props.eventKey) {
	      return true;
	    }
	
	    if (this.props.activeHref != null && this.props.activeHref === child.props.href) {
	      return true;
	    }
	
	    if (child.props.children) {
	      var isActive = false;
	
	      _utilsValidComponentChildren2['default'].forEach(child.props.children, function (grandchild) {
	        if (this.isChildActive(grandchild)) {
	          isActive = true;
	        }
	      }, this);
	
	      return isActive;
	    }
	
	    return false;
	  },
	
	  getChildActiveProp: function getChildActiveProp(child) {
	    if (child.props.active) {
	      return true;
	    }
	    if (this.props.activeKey != null) {
	      if (child.props.eventKey === this.props.activeKey) {
	        return true;
	      }
	    }
	    if (this.props.activeHref != null) {
	      if (child.props.href === this.props.activeHref) {
	        return true;
	      }
	    }
	
	    return child.props.active;
	  },
	
	  render: function render() {
	    var classes = {
	      'active': this.isActive(),
	      'disabled': this.props.disabled
	    };
	
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      _react2['default'].createElement(
	        _SafeAnchor2['default'],
	        {
	          href: this.props.href,
	          title: this.props.title,
	          target: this.props.target,
	          onClick: this.handleClick },
	        this.props.text
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { className: "nav" },
	        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
	      )
	    );
	  },
	
	  renderNavItem: function renderNavItem(child, index) {
	    return _react.cloneElement(child, {
	      active: this.getChildActiveProp(child),
	      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
	      key: child.key ? child.key : index
	    });
	  }
	});
	
	exports['default'] = SubNav;
	module.exports = exports['default'];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectWithoutProperties = __webpack_require__(57)['default'];
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsValidComponentChildren = __webpack_require__(48);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _Nav = __webpack_require__(101);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _NavItem = __webpack_require__(103);
	
	var _NavItem2 = _interopRequireDefault(_NavItem);
	
	var panelId = function panelId(props, child) {
	  return child.props.id ? child.props.id : props.id && props.id + '___panel___' + child.props.eventKey;
	};
	var tabId = function tabId(props, child) {
	  return child.props.id ? child.props.id + '___tab' : props.id && props.id + '___tab___' + child.props.eventKey;
	};
	
	function getDefaultActiveKeyFromChildren(children) {
	  var defaultActiveKey = undefined;
	
	  _utilsValidComponentChildren2['default'].forEach(children, function (child) {
	    if (defaultActiveKey == null) {
	      defaultActiveKey = child.props.eventKey;
	    }
	  });
	
	  return defaultActiveKey;
	}
	
	var TabbedArea = _react2['default'].createClass({
	  displayName: 'TabbedArea',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    activeKey: _react2['default'].PropTypes.any,
	    defaultActiveKey: _react2['default'].PropTypes.any,
	    bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
	    animation: _react2['default'].PropTypes.bool,
	    id: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsStyle: 'tabs',
	      animation: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : getDefaultActiveKeyFromChildren(this.props.children);
	
	    return {
	      activeKey: defaultActiveKey,
	      previousActiveKey: null
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;
	
	    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
	      (function () {
	        // check if the 'previousActiveKey' child still exists
	        var previousActiveKey = _this.props.activeKey;
	        _react2['default'].Children.forEach(nextProps.children, function (child) {
	          if (_react2['default'].isValidElement(child)) {
	            if (child.props.eventKey === previousActiveKey) {
	              _this.setState({
	                previousActiveKey: previousActiveKey
	              });
	              return;
	            }
	          }
	        });
	
	        // if the 'previousActiveKey' child does not exist anymore
	        _this.setState({
	          previousActiveKey: null
	        });
	      })();
	    }
	  },
	
	  handlePaneAnimateOutEnd: function handlePaneAnimateOutEnd() {
	    this.setState({
	      previousActiveKey: null
	    });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var id = _props.id;
	
	    var props = _objectWithoutProperties(_props, ['id']);
	
	    function renderTabIfSet(child) {
	      return child.props.tab != null ? this.renderTab(child) : null;
	    }
	
	    var nav = _react2['default'].createElement(
	      _Nav2['default'],
	      _extends({}, props, { activeKey: this.getActiveKey(), onSelect: this.handleSelect, ref: "tabs" }),
	      _utilsValidComponentChildren2['default'].map(this.props.children, renderTabIfSet, this)
	    );
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      nav,
	      _react2['default'].createElement(
	        'div',
	        { id: id, className: "tab-content", ref: "panes" },
	        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPane)
	      )
	    );
	  },
	
	  getActiveKey: function getActiveKey() {
	    return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
	  },
	
	  renderPane: function renderPane(child, index) {
	    var previousActiveKey = this.state.previousActiveKey;
	
	    var shouldPaneBeSetActive = child.props.eventKey === this.getActiveKey();
	    var thereIsNoActivePane = previousActiveKey == null;
	
	    var paneIsAlreadyActive = previousActiveKey != null && child.props.eventKey === previousActiveKey;
	
	    return _react.cloneElement(child, {
	      active: shouldPaneBeSetActive && (thereIsNoActivePane || !this.props.animation),
	      id: panelId(this.props, child),
	      'aria-labelledby': tabId(this.props, child),
	      key: child.key ? child.key : index,
	      animation: this.props.animation,
	      onAnimateOutEnd: paneIsAlreadyActive ? this.handlePaneAnimateOutEnd : null
	    });
	  },
	
	  renderTab: function renderTab(child) {
	    var _child$props = child.props;
	    var eventKey = _child$props.eventKey;
	    var className = _child$props.className;
	    var tab = _child$props.tab;
	    var disabled = _child$props.disabled;
	
	    return _react2['default'].createElement(
	      _NavItem2['default'],
	      {
	        linkId: tabId(this.props, child),
	        ref: 'tab' + eventKey,
	        'aria-controls': panelId(this.props, child),
	        eventKey: eventKey,
	        className: className,
	        disabled: disabled },
	      tab
	    );
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },
	
	  handleSelect: function handleSelect(selectedKey) {
	    if (this.props.onSelect) {
	      this._isChanging = true;
	      this.props.onSelect(selectedKey);
	      this._isChanging = false;
	      return;
	    }
	
	    // if there is no external handler, then use embedded one
	    var previousActiveKey = this.getActiveKey();
	    if (selectedKey !== previousActiveKey) {
	      this.setState({
	        activeKey: selectedKey,
	        previousActiveKey: previousActiveKey
	      });
	    }
	  }
	});
	
	exports['default'] = TabbedArea;
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Table = _react2['default'].createClass({
	  displayName: 'Table',
	
	  propTypes: {
	    striped: _react2['default'].PropTypes.bool,
	    bordered: _react2['default'].PropTypes.bool,
	    condensed: _react2['default'].PropTypes.bool,
	    hover: _react2['default'].PropTypes.bool,
	    responsive: _react2['default'].PropTypes.bool
	  },
	
	  render: function render() {
	    var classes = {
	      'table': true,
	      'table-striped': this.props.striped,
	      'table-bordered': this.props.bordered,
	      'table-condensed': this.props.condensed,
	      'table-hover': this.props.hover
	    };
	    var table = _react2['default'].createElement(
	      'table',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	
	    return this.props.responsive ? _react2['default'].createElement(
	      'div',
	      { className: "table-responsive" },
	      table
	    ) : table;
	  }
	});
	
	exports['default'] = Table;
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsTransitionEvents = __webpack_require__(66);
	
	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);
	
	var TabPane = _react2['default'].createClass({
	  displayName: 'TabPane',
	
	  propTypes: {
	    active: _react2['default'].PropTypes.bool,
	    animation: _react2['default'].PropTypes.bool,
	    onAnimateOutEnd: _react2['default'].PropTypes.func,
	    disabled: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      animateIn: false,
	      animateOut: false
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.animation) {
	      if (!this.state.animateIn && nextProps.active && !this.props.active) {
	        this.setState({
	          animateIn: true
	        });
	      } else if (!this.state.animateOut && !nextProps.active && this.props.active) {
	        this.setState({
	          animateOut: true
	        });
	      }
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.state.animateIn) {
	      setTimeout(this.startAnimateIn, 0);
	    }
	    if (this.state.animateOut) {
	      _utilsTransitionEvents2['default'].addEndEventListener(_react2['default'].findDOMNode(this), this.stopAnimateOut);
	    }
	  },
	
	  startAnimateIn: function startAnimateIn() {
	    if (this.isMounted()) {
	      this.setState({
	        animateIn: false
	      });
	    }
	  },
	
	  stopAnimateOut: function stopAnimateOut() {
	    if (this.isMounted()) {
	      this.setState({
	        animateOut: false
	      });
	
	      if (this.props.onAnimateOutEnd) {
	        this.props.onAnimateOutEnd();
	      }
	    }
	  },
	
	  render: function render() {
	    var classes = {
	      'tab-pane': true,
	      'fade': true,
	      'active': this.props.active || this.state.animateOut,
	      'in': this.props.active && !this.state.animateIn
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        role: 'tabpanel',
	        'aria-hidden': !this.props.active,
	        className: _classnames2['default'](this.props.className, classes)
	      }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = TabPane;
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _SafeAnchor = __webpack_require__(90);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var Thumbnail = _react2['default'].createClass({
	  displayName: 'Thumbnail',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    alt: _react2['default'].PropTypes.string,
	    href: _react2['default'].PropTypes.string,
	    src: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'thumbnail'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	
	    if (this.props.href) {
	      return _react2['default'].createElement(
	        _SafeAnchor2['default'],
	        _extends({}, this.props, { href: this.props.href, className: _classnames2['default'](this.props.className, classes) }),
	        _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
	      );
	    } else {
	      if (this.props.children) {
	        return _react2['default'].createElement(
	          'div',
	          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	          _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt }),
	          _react2['default'].createElement(
	            'div',
	            { className: "caption" },
	            this.props.children
	          )
	        );
	      } else {
	        return _react2['default'].createElement(
	          'div',
	          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	          _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
	        );
	      }
	    }
	  }
	});
	
	exports['default'] = Thumbnail;
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var _utilsCustomPropTypes = __webpack_require__(43);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var Tooltip = _react2['default'].createClass({
	  displayName: 'Tooltip',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  propTypes: {
	    /**
	     * An html id attribute, necessary for accessibility
	     * @type {string}
	     * @required
	     */
	    id: _utilsCustomPropTypes2['default'].isRequiredForA11y(_react2['default'].PropTypes.string),
	
	    /**
	     * Sets the direction the Tooltip is positioned towards.
	     */
	    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	
	    /**
	     * The "left" position value for the Tooltip.
	     */
	    positionLeft: _react2['default'].PropTypes.number,
	    /**
	     * The "top" position value for the Tooltip.
	     */
	    positionTop: _react2['default'].PropTypes.number,
	    /**
	     * The "left" position value for the Tooltip arrow.
	     */
	    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * The "top" position value for the Tooltip arrow.
	     */
	    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * Title text
	     */
	    title: _react2['default'].PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right'
	    };
	  },
	
	  render: function render() {
	    var _classes;
	
	    var classes = (_classes = {
	      'tooltip': true
	    }, _classes[this.props.placement] = true, _classes);
	
	    var style = _extends({
	      'left': this.props.positionLeft,
	      'top': this.props.positionTop
	    }, this.props.style);
	
	    // eslint-disable-line react/prop-types
	    var arrowStyle = {
	      'left': this.props.arrowOffsetLeft,
	      'top': this.props.arrowOffsetTop
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({ role: 'tooltip' }, this.props, { className: _classnames2['default'](this.props.className, classes), style: style }),
	      _react2['default'].createElement('div', { className: "tooltip-arrow", style: arrowStyle }),
	      _react2['default'].createElement(
	        'div',
	        { className: "tooltip-inner" },
	        this.props.children
	      )
	    );
	  }
	});
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];
	// we don't want to expose the `style` property

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(27)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(37);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BootstrapMixin = __webpack_require__(41);
	
	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);
	
	var Well = _react2['default'].createClass({
	  displayName: 'Well',
	
	  mixins: [_BootstrapMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'well'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getBsClassSet();
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Well;
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	exports.__esModule = true;
	
	var _childrenValueInputValidation2 = __webpack_require__(60);
	
	var _childrenValueInputValidation3 = _interopRequireDefault(_childrenValueInputValidation2);
	
	exports.childrenValueInputValidation = _childrenValueInputValidation3['default'];
	
	var _createChainedFunction2 = __webpack_require__(76);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	exports.createChainedFunction = _createChainedFunction3['default'];
	
	var _CustomPropTypes2 = __webpack_require__(43);
	
	var _CustomPropTypes3 = _interopRequireDefault(_CustomPropTypes2);
	
	exports.CustomPropTypes = _CustomPropTypes3['default'];
	
	var _domUtils2 = __webpack_require__(51);
	
	var _domUtils3 = _interopRequireDefault(_domUtils2);
	
	exports.domUtils = _domUtils3['default'];
	
	var _ValidComponentChildren2 = __webpack_require__(48);
	
	var _ValidComponentChildren3 = _interopRequireDefault(_ValidComponentChildren2);
	
	exports.ValidComponentChildren = _ValidComponentChildren3['default'];

/***/ },
/* 154 */
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
/* 155 */
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
	
	var _alsc = __webpack_require__(4);
	
	var _reactBootstrap = __webpack_require__(8);
	
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
	                { className: 'sidebar', md: 4 },
	                _react2['default'].createElement(_reactBootstrap.Input, {
	                    type: 'text',
	                    placeholder: 'Enter key words...',
	                    label: 'Search',
	                    hasFeedback: true
	                })
	            );
	        }
	    }]);
	
	    return SideBar;
	})(_react2['default'].Component);
	
	exports['default'] = SideBar;
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/10.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(4);
	
	var ExampleManager = (function (_EventDispatcher) {
	    _inherits(ExampleManager, _EventDispatcher);
	
	    _createClass(ExampleManager, null, [{
	        key: 'instance',
	        get: function get() {
	            return new ExampleManager();
	        }
	    }]);
	
	    function ExampleManager() {
	        _classCallCheck(this, ExampleManager);
	
	        _get(Object.getPrototypeOf(ExampleManager.prototype), 'constructor', this).call(this);
	    }
	
	    _createClass(ExampleManager, [{
	        key: 'loadexample',
	        value: function loadexample() {}
	    }]);
	
	    return ExampleManager;
	})(_alsc.EventDispatcher);
	
	exports['default'] = ExampleManager.instance;
	module.exports = exports['default'];

/***/ },
/* 157 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2IyZTg0MDY5ZWNjOGQwMWQyODkiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9tYWluLmVzNn4iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVzNS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtd2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWxHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQm9vdHN0cmFwTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3N0eWxlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvQ3VzdG9tUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0FmZml4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9BZmZpeE1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9kb21VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0JhZGdlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbklucHV0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRCYXNlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWxJdGVtLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9UcmFuc2l0aW9uRXZlbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0NvbGxhcHNpYmxlTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU5hdi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duU3RhdGVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25NZW51LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9GYWRlTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9TdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0ludGVycG9sYXRlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9KdW1ib3Ryb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0xhYmVsLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1NhZmVBbmNob3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvaXMtZnJvemVuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvaXMtZnJvemVuLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL0ZhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsRGlhbG9nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsSGVhZGVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL05hdkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9vdmVybGF5UG9zaXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUm9vdENsb3NlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheVRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL29iamVjdC9waWNrLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2xhbmcvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvbGFuZy9pc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvbGFuZy9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9iaW5kQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvdXRpbGl0eS9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9ySW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL29iamVjdC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VJdGVtLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlU2VsZWN0ZWRFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1NwbGl0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9TdWJOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1RhYmJlZEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1RhYmxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJQYW5lLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9UaHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL1dlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9jb3JlL0V4YW1wbGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O2tDQUtLLENBQU87Ozs7c0NBQ1QsQ0FBZTs7OztLQUV6QixJQUFJLEdBQ0ssU0FEVCxJQUFJLEdBQ087MkJBRFgsSUFBSTs7QUFFRix3QkFBTSxNQUFNLENBQUMsOERBQU0sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDeEQ7O3NCQUdVLElBQUk7Ozs7Ozs7QUNkbkIsK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDR2tCLENBQU87Ozs7aUNBQ08sQ0FBTTs7MkNBRW5CLENBQW9COzs7O3lDQUN0QixDQUFrQjs7OzsyQ0FDaEIsR0FBb0I7Ozs7S0FFakMsR0FBRztlQUFILEdBQUc7O0FBQ00sY0FEVCxHQUFHLEdBQ1E7OzsrQkFEWCxHQUFHOztBQUVELG9DQUZGLEdBQUcsNkNBRU87O0FBRVIsYUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRTdCLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtBQUNwQyxpQkFBRyxNQUFLLE9BQU8sRUFBQztBQUNaLHVCQUFLLFFBQVEsRUFBRSxDQUFDO2NBQ25CO1VBQ0osQ0FBQyxDQUFDO01BQ047O2tCQVhDLEdBQUc7O2dCQWFHLG9CQUFFO0FBQ04sb0JBQU87QUFDSCxzQkFBSyxFQUFDO0FBQ0YsOEJBQVMsRUFBQyxNQUFNLENBQUMsV0FBVyxHQUFDLEVBQUU7a0JBQ2xDO2NBQ0o7VUFDSjs7O2dCQUVPLG9CQUFFO0FBQ04saUJBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7VUFDbEM7OztnQkFFZ0IsNkJBQUc7QUFDaEIsaUJBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1VBQ3ZCOzs7Z0JBRW1CLGdDQUFHO0FBQ25CLGlCQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7VUFDdkI7OztnQkFFSyxrQkFBRTs7QUFFSixpQkFBSSxHQUFHLEdBQ0g7O21CQUFLLFNBQVMsRUFBQyxLQUFLO2lCQUNoQjs7dUJBQUssU0FBUyxFQUFDLDZCQUE2QixFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU07cUJBQ2pFLG1FQUFVO3FCQUNWLGlFQUFRO3FCQUNSLG1FQUFVO2tCQUNSO2NBQ0osQ0FBQztBQUNYLG9CQUFPLEdBQUcsQ0FBQztVQUNkOzs7WUE1Q0MsR0FBRztJQUFTLG1CQUFNLFNBQVM7O3NCQStDbEIsR0FBRzs7Ozs7OztBQ3pEbEI7QUFDQTtBQUNBOztBQUVBLGtEOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVsakIsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQWtHLGFBQWE7QUFDL0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ25Ma0IsQ0FBTzs7OztpQ0FDTyxDQUFNOztLQUVoQyxNQUFNO2VBQU4sTUFBTTs7Y0FBTixNQUFNOytCQUFOLE1BQU07O29DQUFOLE1BQU07OztrQkFBTixNQUFNOztnQkFDRixrQkFBRTtBQUNKLG9CQUFPOzs7aUJBQ0s7Ozs7a0JBQWM7Y0FDVjtVQUNuQjs7O1lBTEMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQVFyQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NYSCxDQUFPOzs7OzJDQUNKLENBQWlCOzt5Q0FFbEIsR0FBbUI7Ozs7eUNBQ25CLEdBQW1COzs7O2lEQUVaLEdBQThCOzs7O0tBRW5ELElBQUk7ZUFBSixJQUFJOztjQUFKLElBQUk7K0JBQUosSUFBSTs7b0NBQUosSUFBSTs7O2tCQUFKLElBQUk7O2dCQUNBLGtCQUFFO0FBQ0osb0JBQVE7O21CQUFLLFNBQVMsRUFBQyxNQUFNO2lCQUNqQixpRUFBVztpQkFDWCxpRUFBVztjQUNUO1VBQ2pCOzs7WUFOQyxJQUFJO0lBQVMsbUJBQU0sU0FBUzs7c0JBU25CLElBQUk7Ozs7Ozs7QUNwQm5COztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCOzs7Ozs7QUM5WEE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLGVBQWUsc0ZBQXNGO0FB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QUFFRDtBQUNBLHFDOzs7Ozs7QUMzR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDckVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQzVDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQzVTQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsZUFBZSxvRUFBb0U7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNyREE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsZUFBZSxvRUFBb0U7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxRQUFPLGdDQUFnQztBQUN2QztBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ2hIQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLGtCQUFpQixlQUFlLG9FQUFvRTtBQUNwRztBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ25OQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQSwyQ0FBMEM7QUFDMUM7O0FBRUEsMENBQXlDO0FBQ3pDO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLG1EQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDN0xBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJDQUEwQyw4Q0FBOEMsVUFBVTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxzRUFBcUUseUJBQXlCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDekZ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLGFBQWE7QUFDekQsb0RBQW1ELFlBQVk7O0FBRS9EOzs7Ozs7O0FDL0JBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTyxtR0FBbUc7QUFDMUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLDRCQUE0QjtBQUNyQztBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDaEhBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDbk9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FB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QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLGFBQWE7QUFDcEI7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7QUMzZ0JBLG1CQUFrQix3RDs7Ozs7O0FDQWxCO0FBQ0EsMEQ7Ozs7OztBQ0RBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7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Q0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLG1DQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDcFNBOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3pEQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixlQUFlLDBFQUEwRTtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDakNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQiw0RUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ3JFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQiw0RUFBMkU7QUFDM0U7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ2pEQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHFDQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0Q7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsWUFBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStEO0FBQy9EO0FBQ0E7QUFDQSxVQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStEO0FBQy9EO0FBQ0E7QUFDQSxVQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStEO0FBQy9EO0FBQ0E7QUFDQSxVQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStEO0FBQy9EO0FBQ0E7QUFDQSxVQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQix5RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ3RPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTyx5REFBeUQ7QUFDaEUseUVBQXdFO0FBQ3hFLG9DQUFtQztBQUNuQztBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNwRkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDckJBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLG9CQUFtQixpQ0FBaUM7QUFDcEQsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSw0RUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU8sMEJBQTBCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUCwrQ0FBOEMsdUJBQXVCO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU8seUNBQXlDO0FBQ2hEO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsUUFBTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU8sd0NBQXdDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDeE9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0Isa0JBQWtCLGVBQWUsK0ZBQStGO0FBQ2hKLGdEQUErQyx3Q0FBd0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsVUFBUywrQkFBK0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxRQUFPLDZCQUE2QjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQy9HQSxrQ0FBaUMsa0JBQWtCO0FBQ25EOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsZUFBZSx1RUFBdUU7QUFDdkc7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQSwwQ0FBeUM7QUFDekM7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDektBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixlQUFlLGtFQUFrRTtBQUNsRztBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ2hEQSxrQ0FBaUMsaUJBQWlCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFVBQVMsdUJBQXVCO0FBQ2hDO0FBQ0E7QUFDQSxpREFBZ0QscUJBQXFCO0FBQ3JFO0FBQ0E7QUFDQSxVQUFTLFNBQVMseUJBQXlCLEVBQUU7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDdEpBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsZUFBZSxvRUFBb0U7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxtQkFBbUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUN4SkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FB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RVUsY0FOVCxjQUFjLEdBTUg7K0JBTlgsY0FBYzs7QUFPWixvQ0FQRixjQUFjLDZDQU9KO01BQ1g7O2tCQVJDLGNBQWM7O2dCQVVMLHVCQUFFLEVBRVo7OztZQVpDLGNBQWM7VUFGWCxlQUFlOztzQkFpQlQsY0FBYyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2xCcEIsQ0FBTzs7OztpQ0FDTyxDQUFNOztLQUVoQyxNQUFNO2VBQU4sTUFBTTs7Y0FBTixNQUFNOytCQUFOLE1BQU07O29DQUFOLE1BQU07OztrQkFBTixNQUFNOztnQkFDRixrQkFBRTtBQUNKLG9CQUFPLGdEQUFpQjtVQUMzQjs7O1lBSEMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQU1yQixNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGNiMmU4NDA2OWVjYzhkMDFkMjg5XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS83LzE2LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlldy9BcHAuanMnO1xuXG5jbGFzcyBNYWlue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvbWFpbi5lczZ+XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICdhbHNjJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9sYXlvdXQvSGVhZGVyLmpzJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9sYXlvdXQvQm9keS5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9sYXlvdXQvRm9vdGVyLmpzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNNb3VudCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHQtMTYgLy9kb2N1bWVudCBtYXJnaW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzTW91bnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNNb3VudCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLndpbmRvd1Jlc2l6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhcHAgPVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcHVsbC1jZW50ZXIgcGFwZXJcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvQXBwLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5FdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9kaXN0L0V2ZW50RGlzcGF0Y2hlci5qc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGV2ZW50c01hcCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCgpIDogXCJfX19ldmVudHNNYXBcIjtcblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnREaXNwYXRjaGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnREaXNwYXRjaGVyKTtcblxuICAgICAgICB0aGlzW2V2ZW50c01hcF0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIOa0vuWPkeS4gOS4quS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXG5cbiAgICBfY3JlYXRlQ2xhc3MoRXZlbnREaXNwYXRjaGVyLCBbe1xuICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50bWFwID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50bWFwKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub3RpZnlBcnJheShldmVudG1hcCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDov5Tlm57miYDmnInlm57osIPmlrnms5VcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJsaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXNbZXZlbnRzTWFwXVtldmVudF07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbi5jYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAgICAgKiBAcGFyYW0gcHJpb3JpdHlcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhZGRMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgcmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBudWxsLCBwcmlvcml0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnp7vpmaTkuIDlj6rkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZUxpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHVucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+mZpOaJgOacieS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZUFsbExpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2TLOeugOaYk+inpuWPkeWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZMs5ZSv5LiA6Kem5Y+R5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwib25jZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICAvL3RoaXMucmVtb3ZlQWxsTGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlcjtcbn0pKCk7XG5cbmZ1bmN0aW9uIHJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwYXJhbSwgcHJpb3JpdHksIG9uY2UpIHtcbiAgICAvLyxyZXNlcnZlPzphbnlcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgbm90aWZ5bWFwW25hbWVdID0gW107XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcblxuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xuICAgIHZhciBiaW47XG5cbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgcHJpb3JpdHkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmluID0gYXJyW2ldO1xuICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy/pmLLmraLph43lpI3mj5LlhaVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmluICYmIGluc2VydEluZGV4ID09IC0xICYmIGJpbi5wcmlvcml0eSA8IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW4gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGhpc09iamVjdDogdGhpc09iamVjdCwgcGFyYW06IHBhcmFtID8gcGFyYW0gOiBbXSwgcHJpb3JpdHk6IHByaW9yaXR5LCBvbmNlOiBvbmNlIH07XG4gICAgaWYgKGluc2VydEluZGV4ICE9IC0xKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2goYmluKTtcbiAgICB9XG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIHJldHVybjtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5bWFwW25hbWVdID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICByZXR1cm4gIShiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSkge1xuICAgICAgICAgICAgdmFyIGJpbiA9IGFycltpXTtcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkgcGFyYW0gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKSBwYXJhbSA9IGJpbi5wYXJhbS5jb25jYXQocGFyYW0pO1xuICAgICAgICAgICAgICAgIGJpbi5jYWxsYmFjay5hcHBseShiaW4udGhpc09iamVjdCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudERpc3BhdGNoZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnYWxzYyc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnRpdGxlPC9oMT5cclxuICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2luYy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9pbmMvU2lkZUJhci5qc1wiO1xyXG5cclxuaW1wb3J0IEV4YW1wbGVNYW5hZ2VyIGZyb20gJy4uLy4uL2NvcmUvRXhhbXBsZU1hbmFnZXIuanMnXHJcblxyXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0JvZHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS13aWxkY2FyZCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWNjb3JkaW9uMiA9IHJlcXVpcmUoJy4vQWNjb3JkaW9uJyk7XG5cbnZhciBfQWNjb3JkaW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjY29yZGlvbjIpO1xuXG5leHBvcnRzLkFjY29yZGlvbiA9IF9BY2NvcmRpb24zWydkZWZhdWx0J107XG5cbnZhciBfQWZmaXgyID0gcmVxdWlyZSgnLi9BZmZpeCcpO1xuXG52YXIgX0FmZml4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4Mik7XG5cbmV4cG9ydHMuQWZmaXggPSBfQWZmaXgzWydkZWZhdWx0J107XG5cbnZhciBfQWZmaXhNaXhpbjIgPSByZXF1aXJlKCcuL0FmZml4TWl4aW4nKTtcblxudmFyIF9BZmZpeE1peGluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4TWl4aW4yKTtcblxuZXhwb3J0cy5BZmZpeE1peGluID0gX0FmZml4TWl4aW4zWydkZWZhdWx0J107XG5cbnZhciBfQWxlcnQyID0gcmVxdWlyZSgnLi9BbGVydCcpO1xuXG52YXIgX0FsZXJ0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FsZXJ0Mik7XG5cbmV4cG9ydHMuQWxlcnQgPSBfQWxlcnQzWydkZWZhdWx0J107XG5cbnZhciBfQmFkZ2UyID0gcmVxdWlyZSgnLi9CYWRnZScpO1xuXG52YXIgX0JhZGdlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhZGdlMik7XG5cbmV4cG9ydHMuQmFkZ2UgPSBfQmFkZ2UzWydkZWZhdWx0J107XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluMik7XG5cbmV4cG9ydHMuQm9vdHN0cmFwTWl4aW4gPSBfQm9vdHN0cmFwTWl4aW4zWydkZWZhdWx0J107XG5cbnZhciBfQnV0dG9uMiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbjIpO1xuXG5leHBvcnRzLkJ1dHRvbiA9IF9CdXR0b24zWydkZWZhdWx0J107XG5cbnZhciBfQnV0dG9uR3JvdXAyID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwMik7XG5cbmV4cG9ydHMuQnV0dG9uR3JvdXAgPSBfQnV0dG9uR3JvdXAzWydkZWZhdWx0J107XG5cbnZhciBfQnV0dG9uSW5wdXQyID0gcmVxdWlyZSgnLi9CdXR0b25JbnB1dCcpO1xuXG52YXIgX0J1dHRvbklucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbklucHV0Mik7XG5cbmV4cG9ydHMuQnV0dG9uSW5wdXQgPSBfQnV0dG9uSW5wdXQzWydkZWZhdWx0J107XG5cbnZhciBfQnV0dG9uVG9vbGJhcjIgPSByZXF1aXJlKCcuL0J1dHRvblRvb2xiYXInKTtcblxudmFyIF9CdXR0b25Ub29sYmFyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvblRvb2xiYXIyKTtcblxuZXhwb3J0cy5CdXR0b25Ub29sYmFyID0gX0J1dHRvblRvb2xiYXIzWydkZWZhdWx0J107XG5cbnZhciBfQ2Fyb3VzZWwyID0gcmVxdWlyZSgnLi9DYXJvdXNlbCcpO1xuXG52YXIgX0Nhcm91c2VsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsMik7XG5cbmV4cG9ydHMuQ2Fyb3VzZWwgPSBfQ2Fyb3VzZWwzWydkZWZhdWx0J107XG5cbnZhciBfQ2Fyb3VzZWxJdGVtMiA9IHJlcXVpcmUoJy4vQ2Fyb3VzZWxJdGVtJyk7XG5cbnZhciBfQ2Fyb3VzZWxJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsSXRlbTIpO1xuXG5leHBvcnRzLkNhcm91c2VsSXRlbSA9IF9DYXJvdXNlbEl0ZW0zWydkZWZhdWx0J107XG5cbnZhciBfQ29sMiA9IHJlcXVpcmUoJy4vQ29sJyk7XG5cbnZhciBfQ29sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbDIpO1xuXG5leHBvcnRzLkNvbCA9IF9Db2wzWydkZWZhdWx0J107XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4yKTtcblxuZXhwb3J0cy5Db2xsYXBzaWJsZU1peGluID0gX0NvbGxhcHNpYmxlTWl4aW4zWydkZWZhdWx0J107XG5cbnZhciBfQ29sbGFwc2libGVOYXYyID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU5hdicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTmF2MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTmF2Mik7XG5cbmV4cG9ydHMuQ29sbGFwc2libGVOYXYgPSBfQ29sbGFwc2libGVOYXYzWydkZWZhdWx0J107XG5cbnZhciBfRHJvcGRvd25CdXR0b24yID0gcmVxdWlyZSgnLi9Ecm9wZG93bkJ1dHRvbicpO1xuXG52YXIgX0Ryb3Bkb3duQnV0dG9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duQnV0dG9uMik7XG5cbmV4cG9ydHMuRHJvcGRvd25CdXR0b24gPSBfRHJvcGRvd25CdXR0b24zWydkZWZhdWx0J107XG5cbnZhciBfRHJvcGRvd25NZW51MiA9IHJlcXVpcmUoJy4vRHJvcGRvd25NZW51Jyk7XG5cbnZhciBfRHJvcGRvd25NZW51MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duTWVudTIpO1xuXG5leHBvcnRzLkRyb3Bkb3duTWVudSA9IF9Ecm9wZG93bk1lbnUzWydkZWZhdWx0J107XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMiA9IHJlcXVpcmUoJy4vRHJvcGRvd25TdGF0ZU1peGluJyk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duU3RhdGVNaXhpbjIpO1xuXG5leHBvcnRzLkRyb3Bkb3duU3RhdGVNaXhpbiA9IF9Ecm9wZG93blN0YXRlTWl4aW4zWydkZWZhdWx0J107XG5cbnZhciBfRmFkZU1peGluMiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbjIpO1xuXG5leHBvcnRzLkZhZGVNaXhpbiA9IF9GYWRlTWl4aW4zWydkZWZhdWx0J107XG5cbnZhciBfR2x5cGhpY29uMiA9IHJlcXVpcmUoJy4vR2x5cGhpY29uJyk7XG5cbnZhciBfR2x5cGhpY29uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoaWNvbjIpO1xuXG5leHBvcnRzLkdseXBoaWNvbiA9IF9HbHlwaGljb24zWydkZWZhdWx0J107XG5cbnZhciBfR3JpZDIgPSByZXF1aXJlKCcuL0dyaWQnKTtcblxudmFyIF9HcmlkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dyaWQyKTtcblxuZXhwb3J0cy5HcmlkID0gX0dyaWQzWydkZWZhdWx0J107XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmV4cG9ydHMuSW5wdXQgPSBfSW5wdXQzWydkZWZhdWx0J107XG5cbnZhciBfSW50ZXJwb2xhdGUyID0gcmVxdWlyZSgnLi9JbnRlcnBvbGF0ZScpO1xuXG52YXIgX0ludGVycG9sYXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ludGVycG9sYXRlMik7XG5cbmV4cG9ydHMuSW50ZXJwb2xhdGUgPSBfSW50ZXJwb2xhdGUzWydkZWZhdWx0J107XG5cbnZhciBfSnVtYm90cm9uMiA9IHJlcXVpcmUoJy4vSnVtYm90cm9uJyk7XG5cbnZhciBfSnVtYm90cm9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0p1bWJvdHJvbjIpO1xuXG5leHBvcnRzLkp1bWJvdHJvbiA9IF9KdW1ib3Ryb24zWydkZWZhdWx0J107XG5cbnZhciBfTGFiZWwyID0gcmVxdWlyZSgnLi9MYWJlbCcpO1xuXG52YXIgX0xhYmVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xhYmVsMik7XG5cbmV4cG9ydHMuTGFiZWwgPSBfTGFiZWwzWydkZWZhdWx0J107XG5cbnZhciBfTGlzdEdyb3VwMiA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwJyk7XG5cbnZhciBfTGlzdEdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RHcm91cDIpO1xuXG5leHBvcnRzLkxpc3RHcm91cCA9IF9MaXN0R3JvdXAzWydkZWZhdWx0J107XG5cbnZhciBfTGlzdEdyb3VwSXRlbTIgPSByZXF1aXJlKCcuL0xpc3RHcm91cEl0ZW0nKTtcblxudmFyIF9MaXN0R3JvdXBJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RHcm91cEl0ZW0yKTtcblxuZXhwb3J0cy5MaXN0R3JvdXBJdGVtID0gX0xpc3RHcm91cEl0ZW0zWydkZWZhdWx0J107XG5cbnZhciBfTWVudUl0ZW0yID0gcmVxdWlyZSgnLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmV4cG9ydHMuTWVudUl0ZW0gPSBfTWVudUl0ZW0zWydkZWZhdWx0J107XG5cbnZhciBfTW9kYWwyID0gcmVxdWlyZSgnLi9Nb2RhbCcpO1xuXG52YXIgX01vZGFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsMik7XG5cbmV4cG9ydHMuTW9kYWwgPSBfTW9kYWwzWydkZWZhdWx0J107XG5cbnZhciBfTW9kYWxIZWFkZXIyID0gcmVxdWlyZSgnLi9Nb2RhbEhlYWRlcicpO1xuXG52YXIgX01vZGFsSGVhZGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsSGVhZGVyMik7XG5cbmV4cG9ydHMuTW9kYWxIZWFkZXIgPSBfTW9kYWxIZWFkZXIzWydkZWZhdWx0J107XG5cbnZhciBfTW9kYWxUaXRsZTIgPSByZXF1aXJlKCcuL01vZGFsVGl0bGUnKTtcblxudmFyIF9Nb2RhbFRpdGxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsVGl0bGUyKTtcblxuZXhwb3J0cy5Nb2RhbFRpdGxlID0gX01vZGFsVGl0bGUzWydkZWZhdWx0J107XG5cbnZhciBfTW9kYWxCb2R5MiA9IHJlcXVpcmUoJy4vTW9kYWxCb2R5Jyk7XG5cbnZhciBfTW9kYWxCb2R5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsQm9keTIpO1xuXG5leHBvcnRzLk1vZGFsQm9keSA9IF9Nb2RhbEJvZHkzWydkZWZhdWx0J107XG5cbnZhciBfTW9kYWxGb290ZXIyID0gcmVxdWlyZSgnLi9Nb2RhbEZvb3RlcicpO1xuXG52YXIgX01vZGFsRm9vdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsRm9vdGVyMik7XG5cbmV4cG9ydHMuTW9kYWxGb290ZXIgPSBfTW9kYWxGb290ZXIzWydkZWZhdWx0J107XG5cbnZhciBfTmF2MiA9IHJlcXVpcmUoJy4vTmF2Jyk7XG5cbnZhciBfTmF2MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdjIpO1xuXG5leHBvcnRzLk5hdiA9IF9OYXYzWydkZWZhdWx0J107XG5cbnZhciBfTmF2YmFyMiA9IHJlcXVpcmUoJy4vTmF2YmFyJyk7XG5cbnZhciBfTmF2YmFyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmJhcjIpO1xuXG5leHBvcnRzLk5hdmJhciA9IF9OYXZiYXIzWydkZWZhdWx0J107XG5cbnZhciBfTmF2SXRlbTIgPSByZXF1aXJlKCcuL05hdkl0ZW0nKTtcblxudmFyIF9OYXZJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkl0ZW0yKTtcblxuZXhwb3J0cy5OYXZJdGVtID0gX05hdkl0ZW0zWydkZWZhdWx0J107XG5cbnZhciBfT3ZlcmxheTIgPSByZXF1aXJlKCcuL092ZXJsYXknKTtcblxudmFyIF9PdmVybGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXkyKTtcblxuZXhwb3J0cy5PdmVybGF5ID0gX092ZXJsYXkzWydkZWZhdWx0J107XG5cbnZhciBfT3ZlcmxheVRyaWdnZXIyID0gcmVxdWlyZSgnLi9PdmVybGF5VHJpZ2dlcicpO1xuXG52YXIgX092ZXJsYXlUcmlnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXlUcmlnZ2VyMik7XG5cbmV4cG9ydHMuT3ZlcmxheVRyaWdnZXIgPSBfT3ZlcmxheVRyaWdnZXIzWydkZWZhdWx0J107XG5cbnZhciBfUGFnZUhlYWRlcjIgPSByZXF1aXJlKCcuL1BhZ2VIZWFkZXInKTtcblxudmFyIF9QYWdlSGVhZGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VIZWFkZXIyKTtcblxuZXhwb3J0cy5QYWdlSGVhZGVyID0gX1BhZ2VIZWFkZXIzWydkZWZhdWx0J107XG5cbnZhciBfUGFnZUl0ZW0yID0gcmVxdWlyZSgnLi9QYWdlSXRlbScpO1xuXG52YXIgX1BhZ2VJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VJdGVtMik7XG5cbmV4cG9ydHMuUGFnZUl0ZW0gPSBfUGFnZUl0ZW0zWydkZWZhdWx0J107XG5cbnZhciBfUGFnZXIyID0gcmVxdWlyZSgnLi9QYWdlcicpO1xuXG52YXIgX1BhZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VyMik7XG5cbmV4cG9ydHMuUGFnZXIgPSBfUGFnZXIzWydkZWZhdWx0J107XG5cbnZhciBfUGFnaW5hdGlvbjIgPSByZXF1aXJlKCcuL1BhZ2luYXRpb24nKTtcblxudmFyIF9QYWdpbmF0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2luYXRpb24yKTtcblxuZXhwb3J0cy5QYWdpbmF0aW9uID0gX1BhZ2luYXRpb24zWydkZWZhdWx0J107XG5cbnZhciBfUGFuZWwyID0gcmVxdWlyZSgnLi9QYW5lbCcpO1xuXG52YXIgX1BhbmVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsMik7XG5cbmV4cG9ydHMuUGFuZWwgPSBfUGFuZWwzWydkZWZhdWx0J107XG5cbnZhciBfUGFuZWxHcm91cDIgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXAyKTtcblxuZXhwb3J0cy5QYW5lbEdyb3VwID0gX1BhbmVsR3JvdXAzWydkZWZhdWx0J107XG5cbnZhciBfUG9wb3ZlcjIgPSByZXF1aXJlKCcuL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIyKTtcblxuZXhwb3J0cy5Qb3BvdmVyID0gX1BvcG92ZXIzWydkZWZhdWx0J107XG5cbnZhciBfUHJvZ3Jlc3NCYXIyID0gcmVxdWlyZSgnLi9Qcm9ncmVzc0JhcicpO1xuXG52YXIgX1Byb2dyZXNzQmFyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2dyZXNzQmFyMik7XG5cbmV4cG9ydHMuUHJvZ3Jlc3NCYXIgPSBfUHJvZ3Jlc3NCYXIzWydkZWZhdWx0J107XG5cbnZhciBfUm93MiA9IHJlcXVpcmUoJy4vUm93Jyk7XG5cbnZhciBfUm93MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdzIpO1xuXG5leHBvcnRzLlJvdyA9IF9Sb3czWydkZWZhdWx0J107XG5cbnZhciBfU2FmZUFuY2hvcjIgPSByZXF1aXJlKCcuL1NhZmVBbmNob3InKTtcblxudmFyIF9TYWZlQW5jaG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NhZmVBbmNob3IyKTtcblxuZXhwb3J0cy5TYWZlQW5jaG9yID0gX1NhZmVBbmNob3IzWydkZWZhdWx0J107XG5cbnZhciBfU3BsaXRCdXR0b24yID0gcmVxdWlyZSgnLi9TcGxpdEJ1dHRvbicpO1xuXG52YXIgX1NwbGl0QnV0dG9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NwbGl0QnV0dG9uMik7XG5cbmV4cG9ydHMuU3BsaXRCdXR0b24gPSBfU3BsaXRCdXR0b24zWydkZWZhdWx0J107XG5cbnZhciBfc3R5bGVNYXBzMiA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwczIpO1xuXG5leHBvcnRzLnN0eWxlTWFwcyA9IF9zdHlsZU1hcHMzWydkZWZhdWx0J107XG5cbnZhciBfU3ViTmF2MiA9IHJlcXVpcmUoJy4vU3ViTmF2Jyk7XG5cbnZhciBfU3ViTmF2MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1Yk5hdjIpO1xuXG5leHBvcnRzLlN1Yk5hdiA9IF9TdWJOYXYzWydkZWZhdWx0J107XG5cbnZhciBfVGFiYmVkQXJlYTIgPSByZXF1aXJlKCcuL1RhYmJlZEFyZWEnKTtcblxudmFyIF9UYWJiZWRBcmVhMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmJlZEFyZWEyKTtcblxuZXhwb3J0cy5UYWJiZWRBcmVhID0gX1RhYmJlZEFyZWEzWydkZWZhdWx0J107XG5cbnZhciBfVGFibGUyID0gcmVxdWlyZSgnLi9UYWJsZScpO1xuXG52YXIgX1RhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmxlMik7XG5cbmV4cG9ydHMuVGFibGUgPSBfVGFibGUzWydkZWZhdWx0J107XG5cbnZhciBfVGFiUGFuZTIgPSByZXF1aXJlKCcuL1RhYlBhbmUnKTtcblxudmFyIF9UYWJQYW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYlBhbmUyKTtcblxuZXhwb3J0cy5UYWJQYW5lID0gX1RhYlBhbmUzWydkZWZhdWx0J107XG5cbnZhciBfVGh1bWJuYWlsMiA9IHJlcXVpcmUoJy4vVGh1bWJuYWlsJyk7XG5cbnZhciBfVGh1bWJuYWlsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RodW1ibmFpbDIpO1xuXG5leHBvcnRzLlRodW1ibmFpbCA9IF9UaHVtYm5haWwzWydkZWZhdWx0J107XG5cbnZhciBfVG9vbHRpcDIgPSByZXF1aXJlKCcuL1Rvb2x0aXAnKTtcblxudmFyIF9Ub29sdGlwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rvb2x0aXAyKTtcblxuZXhwb3J0cy5Ub29sdGlwID0gX1Rvb2x0aXAzWydkZWZhdWx0J107XG5cbnZhciBfV2VsbDIgPSByZXF1aXJlKCcuL1dlbGwnKTtcblxudmFyIF9XZWxsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dlbGwyKTtcblxuZXhwb3J0cy5XZWxsID0gX1dlbGwzWydkZWZhdWx0J107XG5cbnZhciBfUG9ydGFsMiA9IHJlcXVpcmUoJy4vUG9ydGFsJyk7XG5cbnZhciBfUG9ydGFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcnRhbDIpO1xuXG5leHBvcnRzLlBvcnRhbCA9IF9Qb3J0YWwzWydkZWZhdWx0J107XG5cbnZhciBfUG9zaXRpb24yID0gcmVxdWlyZSgnLi9Qb3NpdGlvbicpO1xuXG52YXIgX1Bvc2l0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Bvc2l0aW9uMik7XG5cbmV4cG9ydHMuUG9zaXRpb24gPSBfUG9zaXRpb24zWydkZWZhdWx0J107XG5cbnZhciBfQ29sbGFwc2UyID0gcmVxdWlyZSgnLi9Db2xsYXBzZScpO1xuXG52YXIgX0NvbGxhcHNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNlMik7XG5cbmV4cG9ydHMuQ29sbGFwc2UgPSBfQ29sbGFwc2UzWydkZWZhdWx0J107XG5cbnZhciBfQ29sbGFwc2U0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2UyKTtcblxuZXhwb3J0cy5GYWRlID0gX0NvbGxhcHNlNFsnZGVmYXVsdCddO1xuXG52YXIgX0Zvcm1Db250cm9sczIgPSByZXF1aXJlKCcuL0Zvcm1Db250cm9scycpO1xuXG52YXIgX0Zvcm1Db250cm9scyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9Gb3JtQ29udHJvbHMyKTtcblxuZXhwb3J0cy5Gb3JtQ29udHJvbHMgPSBfRm9ybUNvbnRyb2xzO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsczIpO1xuXG5leHBvcnRzLnV0aWxzID0gX3V0aWxzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW5oZXJpdHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1vZGFsVGl0bGUgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsVGl0bGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsVGl0bGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsVGl0bGUpO1xuXG4gICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgTW9kYWxUaXRsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoNCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLm1vZGFsQ2xhc3NOYW1lKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBNb2RhbFRpdGxlO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbk1vZGFsVGl0bGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSBjc3MgY2xhc3MgYXBwbGllZCB0byB0aGUgQ29tcG9uZW50XG4gICAqL1xuICBtb2RhbENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbk1vZGFsVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBtb2RhbENsYXNzTmFtZTogJ21vZGFsLXRpdGxlJ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWxUaXRsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxUaXRsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPyBfT2JqZWN0JHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gJGRlZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5mdW5jdGlvbiBjaGVjayhPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgID8gZnVuY3Rpb24oYnVnZ3ksIHNldCl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgICAgc2V0KHt9LCBbXSk7XG4gICAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgICByZXR1cm4gTztcbiAgICAgICAgfTtcbiAgICAgIH0oKVxuICAgIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC1wcm90by5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBPcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYofmxlbmd0aCAmJiB0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfSByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQuYXNzaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIEVTNU9iamVjdCA9IHJlcXVpcmUoJy4vJC5lczUtb2JqZWN0JylcbiAgLCBlbnVtS2V5cyAgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0LCB0cnVlKVxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGkgPSAxO1xuICB3aGlsZShsID4gaSl7XG4gICAgdmFyIFMgICAgICA9IEVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcbiAgICAgICwga2V5cyAgID0gZW51bUtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgRVM1T2JqZWN0ID0gcmVxdWlyZSgnLi8kLmVzNS1vYmplY3QnKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCByZWFsU3RyaW5nKXtcbiAgcmV0dXJuIChyZWFsU3RyaW5nID8gT2JqZWN0IDogRVM1T2JqZWN0KShkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBjb2YgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gMCBpbiAkT2JqZWN0KCd6JykgPyAkT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6ICRPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lczUtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scylmb3IodmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KSwgaSA9IDAsIGtleTsgc3ltYm9scy5sZW5ndGggPiBpOyApe1xuICAgIGlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtd2lsZGNhcmQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1BhbmVsR3JvdXAgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXApO1xuXG52YXIgQWNjb3JkaW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBY2NvcmRpb24nLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYW5lbEdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgYWNjb3JkaW9uOiB0cnVlIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBY2NvcmRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0FjY29yZGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzIsIHtpZ25vcmU6IFwiYnNTdHlsZVwifV0gKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1N0eWxlYCB0eXBlIHZhbGlkYXRpb24gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBQYW5lbEdyb3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYW5lbEdyb3VwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjY29yZGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3BhbmVsLWdyb3VwJ1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRBY3RpdmVLZXkgPSB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlS2V5OiBkZWZhdWx0QWN0aXZlS2V5XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJQYW5lbClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclBhbmVsOiBmdW5jdGlvbiByZW5kZXJQYW5lbChjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG5cbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBic1N0eWxlOiBjaGlsZC5wcm9wcy5ic1N0eWxlIHx8IHRoaXMucHJvcHMuYnNTdHlsZSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICByZWY6IGNoaWxkLnJlZlxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY2NvcmRpb24pIHtcbiAgICAgIHByb3BzLmNvbGxhcHNpYmxlID0gdHJ1ZTtcbiAgICAgIHByb3BzLmV4cGFuZGVkID0gY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcbiAgICAgIHByb3BzLm9uU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSwga2V5KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUtleSA9PT0ga2V5KSB7XG4gICAgICBrZXkgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlS2V5OiBrZXlcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhbmVsR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhbmVsR3JvdXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBCb290c3RyYXBNaXhpbiA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogYm9vdHN0cmFwIGNsYXNzTmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYnNDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uQ0xBU1NFUyksXG4gICAgLyoqXG4gICAgICogU3R5bGUgdmFyaWFudHNcbiAgICAgKiBAdHlwZSB7KFwiZGVmYXVsdFwifFwicHJpbWFyeVwifFwic3VjY2Vzc1wifFwiaW5mb1wifFwid2FybmluZ1wifFwiZGFuZ2VyXCJ8XCJsaW5rXCIpfVxuICAgICAqL1xuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TVFlMRVMpLFxuICAgIC8qKlxuICAgICAqIFNpemUgdmFyaWFudHNcbiAgICAgKiBAdHlwZSB7KFwieHNtYWxsXCJ8XCJzbWFsbFwifFwibWVkaXVtXCJ8XCJsYXJnZVwifFwieHNcInxcInNtXCJ8XCJtZFwifFwibGdcIil9XG4gICAgICovXG4gICAgYnNTaXplOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ua2V5T2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFUylcbiAgfSxcblxuICBnZXRCc0NsYXNzU2V0OiBmdW5jdGlvbiBnZXRCc0NsYXNzU2V0KCkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICB2YXIgYnNDbGFzcyA9IHRoaXMucHJvcHMuYnNDbGFzcyAmJiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkNMQVNTRVNbdGhpcy5wcm9wcy5ic0NsYXNzXTtcbiAgICBpZiAoYnNDbGFzcykge1xuICAgICAgY2xhc3Nlc1tic0NsYXNzXSA9IHRydWU7XG5cbiAgICAgIHZhciBwcmVmaXggPSBic0NsYXNzICsgJy0nO1xuXG4gICAgICB2YXIgYnNTaXplID0gdGhpcy5wcm9wcy5ic1NpemUgJiYgX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFU1t0aGlzLnByb3BzLmJzU2l6ZV07XG4gICAgICBpZiAoYnNTaXplKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTaXplXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmJzU3R5bGUpIHtcbiAgICAgICAgaWYgKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU1RZTEVTLmluZGV4T2YodGhpcy5wcm9wcy5ic1N0eWxlKSA+PSAwKSB7XG4gICAgICAgICAgY2xhc3Nlc1twcmVmaXggKyB0aGlzLnByb3BzLmJzU3R5bGVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGFzc2VzW3RoaXMucHJvcHMuYnNTdHlsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH0sXG5cbiAgcHJlZml4Q2xhc3M6IGZ1bmN0aW9uIHByZWZpeENsYXNzKHN1YkNsYXNzKSB7XG4gICAgcmV0dXJuIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uQ0xBU1NFU1t0aGlzLnByb3BzLmJzQ2xhc3NdICsgJy0nICsgc3ViQ2xhc3M7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJvb3RzdHJhcE1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Cb290c3RyYXBNaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgc3R5bGVNYXBzID0ge1xuICBDTEFTU0VTOiB7XG4gICAgJ2FsZXJ0JzogJ2FsZXJ0JyxcbiAgICAnYnV0dG9uJzogJ2J0bicsXG4gICAgJ2J1dHRvbi1ncm91cCc6ICdidG4tZ3JvdXAnLFxuICAgICdidXR0b24tdG9vbGJhcic6ICdidG4tdG9vbGJhcicsXG4gICAgJ2NvbHVtbic6ICdjb2wnLFxuICAgICdpbnB1dC1ncm91cCc6ICdpbnB1dC1ncm91cCcsXG4gICAgJ2Zvcm0nOiAnZm9ybScsXG4gICAgJ2dseXBoaWNvbic6ICdnbHlwaGljb24nLFxuICAgICdsYWJlbCc6ICdsYWJlbCcsXG4gICAgJ3RodW1ibmFpbCc6ICd0aHVtYm5haWwnLFxuICAgICdsaXN0LWdyb3VwLWl0ZW0nOiAnbGlzdC1ncm91cC1pdGVtJyxcbiAgICAncGFuZWwnOiAncGFuZWwnLFxuICAgICdwYW5lbC1ncm91cCc6ICdwYW5lbC1ncm91cCcsXG4gICAgJ3BhZ2luYXRpb24nOiAncGFnaW5hdGlvbicsXG4gICAgJ3Byb2dyZXNzLWJhcic6ICdwcm9ncmVzcy1iYXInLFxuICAgICduYXYnOiAnbmF2JyxcbiAgICAnbmF2YmFyJzogJ25hdmJhcicsXG4gICAgJ21vZGFsJzogJ21vZGFsJyxcbiAgICAncm93JzogJ3JvdycsXG4gICAgJ3dlbGwnOiAnd2VsbCdcbiAgfSxcbiAgU1RZTEVTOiBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInLCAnbGluaycsICdpbmxpbmUnLCAndGFicycsICdwaWxscyddLFxuICBhZGRTdHlsZTogZnVuY3Rpb24gYWRkU3R5bGUobmFtZSkge1xuICAgIHN0eWxlTWFwcy5TVFlMRVMucHVzaChuYW1lKTtcbiAgfSxcbiAgU0laRVM6IHtcbiAgICAnbGFyZ2UnOiAnbGcnLFxuICAgICdtZWRpdW0nOiAnbWQnLFxuICAgICdzbWFsbCc6ICdzbScsXG4gICAgJ3hzbWFsbCc6ICd4cycsXG4gICAgJ2xnJzogJ2xnJyxcbiAgICAnbWQnOiAnbWQnLFxuICAgICdzbSc6ICdzbScsXG4gICAgJ3hzJzogJ3hzJ1xuICB9LFxuICBHTFlQSFM6IFsnYXN0ZXJpc2snLCAncGx1cycsICdldXJvJywgJ2V1cicsICdtaW51cycsICdjbG91ZCcsICdlbnZlbG9wZScsICdwZW5jaWwnLCAnZ2xhc3MnLCAnbXVzaWMnLCAnc2VhcmNoJywgJ2hlYXJ0JywgJ3N0YXInLCAnc3Rhci1lbXB0eScsICd1c2VyJywgJ2ZpbG0nLCAndGgtbGFyZ2UnLCAndGgnLCAndGgtbGlzdCcsICdvaycsICdyZW1vdmUnLCAnem9vbS1pbicsICd6b29tLW91dCcsICdvZmYnLCAnc2lnbmFsJywgJ2NvZycsICd0cmFzaCcsICdob21lJywgJ2ZpbGUnLCAndGltZScsICdyb2FkJywgJ2Rvd25sb2FkLWFsdCcsICdkb3dubG9hZCcsICd1cGxvYWQnLCAnaW5ib3gnLCAncGxheS1jaXJjbGUnLCAncmVwZWF0JywgJ3JlZnJlc2gnLCAnbGlzdC1hbHQnLCAnbG9jaycsICdmbGFnJywgJ2hlYWRwaG9uZXMnLCAndm9sdW1lLW9mZicsICd2b2x1bWUtZG93bicsICd2b2x1bWUtdXAnLCAncXJjb2RlJywgJ2JhcmNvZGUnLCAndGFnJywgJ3RhZ3MnLCAnYm9vaycsICdib29rbWFyaycsICdwcmludCcsICdjYW1lcmEnLCAnZm9udCcsICdib2xkJywgJ2l0YWxpYycsICd0ZXh0LWhlaWdodCcsICd0ZXh0LXdpZHRoJywgJ2FsaWduLWxlZnQnLCAnYWxpZ24tY2VudGVyJywgJ2FsaWduLXJpZ2h0JywgJ2FsaWduLWp1c3RpZnknLCAnbGlzdCcsICdpbmRlbnQtbGVmdCcsICdpbmRlbnQtcmlnaHQnLCAnZmFjZXRpbWUtdmlkZW8nLCAncGljdHVyZScsICdtYXAtbWFya2VyJywgJ2FkanVzdCcsICd0aW50JywgJ2VkaXQnLCAnc2hhcmUnLCAnY2hlY2snLCAnbW92ZScsICdzdGVwLWJhY2t3YXJkJywgJ2Zhc3QtYmFja3dhcmQnLCAnYmFja3dhcmQnLCAncGxheScsICdwYXVzZScsICdzdG9wJywgJ2ZvcndhcmQnLCAnZmFzdC1mb3J3YXJkJywgJ3N0ZXAtZm9yd2FyZCcsICdlamVjdCcsICdjaGV2cm9uLWxlZnQnLCAnY2hldnJvbi1yaWdodCcsICdwbHVzLXNpZ24nLCAnbWludXMtc2lnbicsICdyZW1vdmUtc2lnbicsICdvay1zaWduJywgJ3F1ZXN0aW9uLXNpZ24nLCAnaW5mby1zaWduJywgJ3NjcmVlbnNob3QnLCAncmVtb3ZlLWNpcmNsZScsICdvay1jaXJjbGUnLCAnYmFuLWNpcmNsZScsICdhcnJvdy1sZWZ0JywgJ2Fycm93LXJpZ2h0JywgJ2Fycm93LXVwJywgJ2Fycm93LWRvd24nLCAnc2hhcmUtYWx0JywgJ3Jlc2l6ZS1mdWxsJywgJ3Jlc2l6ZS1zbWFsbCcsICdleGNsYW1hdGlvbi1zaWduJywgJ2dpZnQnLCAnbGVhZicsICdmaXJlJywgJ2V5ZS1vcGVuJywgJ2V5ZS1jbG9zZScsICd3YXJuaW5nLXNpZ24nLCAncGxhbmUnLCAnY2FsZW5kYXInLCAncmFuZG9tJywgJ2NvbW1lbnQnLCAnbWFnbmV0JywgJ2NoZXZyb24tdXAnLCAnY2hldnJvbi1kb3duJywgJ3JldHdlZXQnLCAnc2hvcHBpbmctY2FydCcsICdmb2xkZXItY2xvc2UnLCAnZm9sZGVyLW9wZW4nLCAncmVzaXplLXZlcnRpY2FsJywgJ3Jlc2l6ZS1ob3Jpem9udGFsJywgJ2hkZCcsICdidWxsaG9ybicsICdiZWxsJywgJ2NlcnRpZmljYXRlJywgJ3RodW1icy11cCcsICd0aHVtYnMtZG93bicsICdoYW5kLXJpZ2h0JywgJ2hhbmQtbGVmdCcsICdoYW5kLXVwJywgJ2hhbmQtZG93bicsICdjaXJjbGUtYXJyb3ctcmlnaHQnLCAnY2lyY2xlLWFycm93LWxlZnQnLCAnY2lyY2xlLWFycm93LXVwJywgJ2NpcmNsZS1hcnJvdy1kb3duJywgJ2dsb2JlJywgJ3dyZW5jaCcsICd0YXNrcycsICdmaWx0ZXInLCAnYnJpZWZjYXNlJywgJ2Z1bGxzY3JlZW4nLCAnZGFzaGJvYXJkJywgJ3BhcGVyY2xpcCcsICdoZWFydC1lbXB0eScsICdsaW5rJywgJ3Bob25lJywgJ3B1c2hwaW4nLCAndXNkJywgJ2dicCcsICdzb3J0JywgJ3NvcnQtYnktYWxwaGFiZXQnLCAnc29ydC1ieS1hbHBoYWJldC1hbHQnLCAnc29ydC1ieS1vcmRlcicsICdzb3J0LWJ5LW9yZGVyLWFsdCcsICdzb3J0LWJ5LWF0dHJpYnV0ZXMnLCAnc29ydC1ieS1hdHRyaWJ1dGVzLWFsdCcsICd1bmNoZWNrZWQnLCAnZXhwYW5kJywgJ2NvbGxhcHNlLWRvd24nLCAnY29sbGFwc2UtdXAnLCAnbG9nLWluJywgJ2ZsYXNoJywgJ2xvZy1vdXQnLCAnbmV3LXdpbmRvdycsICdyZWNvcmQnLCAnc2F2ZScsICdvcGVuJywgJ3NhdmVkJywgJ2ltcG9ydCcsICdleHBvcnQnLCAnc2VuZCcsICdmbG9wcHktZGlzaycsICdmbG9wcHktc2F2ZWQnLCAnZmxvcHB5LXJlbW92ZScsICdmbG9wcHktc2F2ZScsICdmbG9wcHktb3BlbicsICdjcmVkaXQtY2FyZCcsICd0cmFuc2ZlcicsICdjdXRsZXJ5JywgJ2hlYWRlcicsICdjb21wcmVzc2VkJywgJ2VhcnBob25lJywgJ3Bob25lLWFsdCcsICd0b3dlcicsICdzdGF0cycsICdzZC12aWRlbycsICdoZC12aWRlbycsICdzdWJ0aXRsZXMnLCAnc291bmQtc3RlcmVvJywgJ3NvdW5kLWRvbGJ5JywgJ3NvdW5kLTUtMScsICdzb3VuZC02LTEnLCAnc291bmQtNy0xJywgJ2NvcHlyaWdodC1tYXJrJywgJ3JlZ2lzdHJhdGlvbi1tYXJrJywgJ2Nsb3VkLWRvd25sb2FkJywgJ2Nsb3VkLXVwbG9hZCcsICd0cmVlLWNvbmlmZXInLCAndHJlZS1kZWNpZHVvdXMnLCAnY2QnLCAnc2F2ZS1maWxlJywgJ29wZW4tZmlsZScsICdsZXZlbC11cCcsICdjb3B5JywgJ3Bhc3RlJywgJ2FsZXJ0JywgJ2VxdWFsaXplcicsICdraW5nJywgJ3F1ZWVuJywgJ3Bhd24nLCAnYmlzaG9wJywgJ2tuaWdodCcsICdiYWJ5LWZvcm11bGEnLCAndGVudCcsICdibGFja2JvYXJkJywgJ2JlZCcsICdhcHBsZScsICdlcmFzZScsICdob3VyZ2xhc3MnLCAnbGFtcCcsICdkdXBsaWNhdGUnLCAncGlnZ3ktYmFuaycsICdzY2lzc29ycycsICdiaXRjb2luJywgJ3llbicsICdydWJsZScsICdzY2FsZScsICdpY2UtbG9sbHknLCAnaWNlLWxvbGx5LXRhc3RlZCcsICdlZHVjYXRpb24nLCAnb3B0aW9uLWhvcml6b250YWwnLCAnb3B0aW9uLXZlcnRpY2FsJywgJ21lbnUtaGFtYnVyZ2VyJywgJ21vZGFsLXdpbmRvdycsICdvaWwnLCAnZ3JhaW4nLCAnc3VuZ2xhc3NlcycsICd0ZXh0LXNpemUnLCAndGV4dC1jb2xvcicsICd0ZXh0LWJhY2tncm91bmQnLCAnb2JqZWN0LWFsaWduLXRvcCcsICdvYmplY3QtYWxpZ24tYm90dG9tJywgJ29iamVjdC1hbGlnbi1ob3Jpem9udGFsJywgJ29iamVjdC1hbGlnbi1sZWZ0JywgJ29iamVjdC1hbGlnbi12ZXJ0aWNhbCcsICdvYmplY3QtYWxpZ24tcmlnaHQnLCAndHJpYW5nbGUtcmlnaHQnLCAndHJpYW5nbGUtbGVmdCcsICd0cmlhbmdsZS1ib3R0b20nLCAndHJpYW5nbGUtdG9wJywgJ2NvbnNvbGUnLCAnc3VwZXJzY3JpcHQnLCAnc3Vic2NyaXB0JywgJ21lbnUtbGVmdCcsICdtZW51LXJpZ2h0JywgJ21lbnUtZG93bicsICdtZW51LXVwJ11cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN0eWxlTWFwcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvc3R5bGVNYXBzLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9PYmplY3Qka2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG52YXIgQ3VzdG9tUHJvcFR5cGVzID0ge1xuXG4gIGlzUmVxdWlyZWRGb3JBMTF5OiBmdW5jdGlvbiBpc1JlcXVpcmVkRm9yQTExeShwcm9wVHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBpcyByZXF1aXJlZCB0byBtYWtlICcgKyBjb21wb25lbnROYW1lICsgJyBhY2Nlc3NpYmxlICcgKyAnZm9yIHVzZXJzIHVzaW5nIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgc3VjaCBhcyBzY3JlZW4gcmVhZGVycyBgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcCBwcm92aWRlcyBhIERPTSBlbGVtZW50XG4gICAqXG4gICAqIFRoZSBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gRGlyZWN0bHkgcGFzc2VkXG4gICAqIC0gT3IgcGFzc2VkIGFuIG9iamVjdCB0aGF0IGhhcyBhIGByZW5kZXJgIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBtb3VudGFibGU6IGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKSxcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIHByb3ZpZGVzIGEgdHlwZSBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGUgdHlwZSBvZiBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gdGFnIG5hbWUgKHN0cmluZylcbiAgICogLSBhIHJldHVybiB2YWx1ZSBvZiBSZWFjdC5jcmVhdGVDbGFzcyguLi4pXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfHVuZGVmaW5lZH1cbiAgICovXG4gIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIG1hdGNoZXMgYSBrZXkgb2YgYW4gYXNzb2NpYXRlZCBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAga2V5T2Y6IGNyZWF0ZUtleU9mQ2hlY2tlcixcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBvbmx5IG9uZSBvZiB0aGUgbGlzdGVkIHByb3BlcnRpZXMgaXMgaW4gdXNlLiBBbiBlcnJvciBpcyBnaXZlblxuICAgKiBpZiBtdWx0aXBsZSBoYXZlIGEgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAgc2luZ2xlUHJvcEZyb206IGNyZWF0ZVNpbmdsZVByb3BGcm9tQ2hlY2tlcixcblxuICBhbGw6IGFsbFxufTtcblxuZnVuY3Rpb24gZXJyTXNnKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbXNnQ29udGludWF0aW9uKSB7XG4gIHJldHVybiAnSW52YWxpZCBwcm9wIFxcJycgKyBwcm9wTmFtZSArICdcXCcgb2YgdmFsdWUgXFwnJyArIHByb3BzW3Byb3BOYW1lXSArICdcXCcnICsgKCcgc3VwcGxpZWQgdG8gXFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXFwnJyArIG1zZ0NvbnRpbnVhdGlvbik7XG59XG5cbi8qKlxuICogQ3JlYXRlIGNoYWluLWFibGUgaXNSZXF1aXJlZCB2YWxpZGF0b3JcbiAqXG4gKiBMYXJnZWx5IGNvcGllZCBkaXJlY3RseSBmcm9tOlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzAuMTEtc3RhYmxlL3NyYy9jb3JlL1JlYWN0UHJvcFR5cGVzLmpzI0w5NFxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBcXCcnICsgcHJvcE5hbWUgKyAnXFwnIHdhcyBub3Qgc3BlY2lmaWVkIGluIFxcJycgKyBjb21wb25lbnROYW1lICsgJ1xcJy4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb3VudGFibGVDaGVja2VyKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BzW3Byb3BOYW1lXS5yZW5kZXIgIT09ICdmdW5jdGlvbicgJiYgcHJvcHNbcHJvcE5hbWVdLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGVyck1zZyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsICcsIGV4cGVjdGVkIGEgRE9NIGVsZW1lbnQgb3IgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYHJlbmRlcmAgbWV0aG9kJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleU9mQ2hlY2tlcihvYmopIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wVmFsdWUpKSB7XG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoX09iamVjdCRrZXlzKG9iaikpO1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihlcnJNc2cocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCAnLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVQcm9wRnJvbUNoZWNrZXIoYXJyT2ZQcm9wcykge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgdXNlZFByb3BDb3VudCA9IGFyck9mUHJvcHMubWFwKGZ1bmN0aW9uIChsaXN0ZWRQcm9wKSB7XG4gICAgICByZXR1cm4gcHJvcHNbbGlzdGVkUHJvcF07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICAgIHJldHVybiBhY2MgKyAoY3VyciAhPT0gdW5kZWZpbmVkID8gMSA6IDApO1xuICAgIH0sIDApO1xuXG4gICAgaWYgKHVzZWRQcm9wQ291bnQgPiAxKSB7XG4gICAgICB2YXIgZmlyc3QgPSBhcnJPZlByb3BzWzBdO1xuICAgICAgdmFyIG90aGVycyA9IGFyck9mUHJvcHMuc2xpY2UoMSk7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gb3RoZXJzLmpvaW4oJywgJykgKyAnIGFuZCAnICsgZmlyc3Q7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgXFwnJyArIHByb3BOYW1lICsgJ1xcJywgb25seSBvbmUgb2YgdGhlIGZvbGxvd2luZyAnICsgKCdtYXkgYmUgcHJvdmlkZWQ6ICcgKyBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gYWxsKHByb3BUeXBlcykge1xuICBpZiAocHJvcFR5cGVzID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkYXRpb25zIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAoIShwcm9wVHlwZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgaWYgKHByb3BUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkYXRpb25zIHByb3ZpZGVkJyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcHJvcFR5cGVzW2ldKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGVyckJlZ2lubmluZyA9IGVyck1zZyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsICcuIEV4cGVjdGVkIGFuIEVsZW1lbnQgYHR5cGVgJyk7XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyQmVnaW5uaW5nICsgJywgbm90IGFuIGFjdHVhbCBFbGVtZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGVyckJlZ2lubmluZyArICcgc3VjaCBhcyBhIHRhZyBuYW1lIG9yIHJldHVybiB2YWx1ZSBvZiBSZWFjdC5jcmVhdGVDbGFzcyguLi4pJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ3VzdG9tUHJvcFR5cGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9DdXN0b21Qcm9wVHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNvcmUgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbiQuZWFjaC5jYWxsKCgnZnJlZXplLHNlYWwscHJldmVudEV4dGVuc2lvbnMsaXNGcm96ZW4saXNTZWFsZWQsaXNFeHRlbnNpYmxlLCcgK1xuICAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldFByb3RvdHlwZU9mLGtleXMsZ2V0T3duUHJvcGVydHlOYW1lcycpLnNwbGl0KCcsJylcbiwgZnVuY3Rpb24oS0VZLCBJRCl7XG4gIHZhciBmbiAgICAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGZvcmNlZCA9IDBcbiAgICAsIG1ldGhvZCA9IHt9O1xuICBtZXRob2RbS0VZXSA9IElEID09IDAgPyBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDEgPyBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAyID8gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDMgPyBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA0ID8gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNSA/IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xuICB9IDogSUQgPT0gNiA/IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xuICB9IDogSUQgPT0gNyA/IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQsIHRydWUpKTtcbiAgfSA6IElEID09IDggPyBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcbiAgfSA6IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKS5nZXQ7XG4gIHRyeSB7XG4gICAgZm4oJ3onKTtcbiAgfSBjYXRjaChlKXtcbiAgICBmb3JjZWQgPSAxO1xuICB9XG4gICRkZWYoJGRlZi5TICsgJGRlZi5GICogZm9yY2VkLCAnT2JqZWN0JywgbWV0aG9kKTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmdcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGdldE5hbWVzID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXM7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbmZ1bmN0aW9uIGdldFdpbmRvd05hbWVzKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9PYmplY3QoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIG1hcEZ1bmN0aW9uIHByb3ZpZGVkIGluZGV4IHdpbGwgYmUgbm9ybWFsaXNlZCB0byB0aGUgY29tcG9uZW50cyBtYXBwZWQsXG4gKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBtYXBGdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gbWFwQ29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIG1hcFZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IGluZGV4O1xuICAgICAgaW5kZXgrKztcbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jLlxuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgpO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgXCJ2YWxpZCBjb21wb25lbnRzXCIgaW4gdGhlIENoaWxkcmVuIGNvbnRhaW5lci5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG51bWJlck9mVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuKSB7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgQ2hpbGQgY29udGFpbmVyIGhhcyBvbmUgb3IgbW9yZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNWYWxpZENvbXBvbmVudChjaGlsZHJlbikge1xuICB2YXIgaGFzVmFsaWQgPSBmYWxzZTtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCFoYXNWYWxpZCAmJiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBoYXNWYWxpZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGFzVmFsaWQ7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgbWFwOiBtYXBWYWxpZENvbXBvbmVudHMsXG4gIGZvckVhY2g6IGZvckVhY2hWYWxpZENvbXBvbmVudHMsXG4gIG51bWJlck9mOiBudW1iZXJPZlZhbGlkQ29tcG9uZW50cyxcbiAgaGFzVmFsaWRDb21wb25lbnQ6IGhhc1ZhbGlkQ29tcG9uZW50XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQWZmaXhNaXhpbiA9IHJlcXVpcmUoJy4vQWZmaXhNaXhpbicpO1xuXG52YXIgX0FmZml4TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWZmaXhNaXhpbik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgQWZmaXggPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FmZml4JyxcblxuICBzdGF0aWNzOiB7XG4gICAgZG9tVXRpbHM6IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddXG4gIH0sXG5cbiAgbWl4aW5zOiBbX0FmZml4TWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBob2xkZXJTdHlsZSA9IHsgdG9wOiB0aGlzLnN0YXRlLmFmZml4UG9zaXRpb25Ub3AgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5hZmZpeENsYXNzKSxcbiAgICAgICAgc3R5bGU6IGhvbGRlclN0eWxlIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBZmZpeDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQWZmaXguanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBBZmZpeE1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBvZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgb2Zmc2V0Qm90dG9tOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZmZpeENsYXNzOiAnYWZmaXgtdG9wJ1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0UGlubmVkT2Zmc2V0OiBmdW5jdGlvbiBnZXRQaW5uZWRPZmZzZXQoRE9NTm9kZSkge1xuICAgIGlmICh0aGlzLnBpbm5lZE9mZnNldCkge1xuICAgICAgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O1xuICAgIH1cblxuICAgIERPTU5vZGUuY2xhc3NOYW1lID0gRE9NTm9kZS5jbGFzc05hbWUucmVwbGFjZSgvYWZmaXgtdG9wfGFmZml4LWJvdHRvbXxhZmZpeC8sICcnKTtcbiAgICBET01Ob2RlLmNsYXNzTmFtZSArPSBET01Ob2RlLmNsYXNzTmFtZS5sZW5ndGggPyAnIGFmZml4JyA6ICdhZmZpeCc7XG5cbiAgICB0aGlzLnBpbm5lZE9mZnNldCA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKS50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICByZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ7XG4gIH0sXG5cbiAgY2hlY2tQb3NpdGlvbjogZnVuY3Rpb24gY2hlY2tQb3NpdGlvbigpIHtcbiAgICB2YXIgRE9NTm9kZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdW5kZWZpbmVkLFxuICAgICAgICBzY3JvbGxUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIHBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIG9mZnNldEJvdHRvbSA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXggPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4VHlwZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXhQb3NpdGlvblRvcCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIFRPRE86IG9yIG5vdCB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NTm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBwb3NpdGlvbiA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKTtcblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09ICd0b3AnKSB7XG4gICAgICBwb3NpdGlvbi50b3AgKz0gc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIG9mZnNldFRvcCA9IHRoaXMucHJvcHMub2Zmc2V0VG9wICE9IG51bGwgPyB0aGlzLnByb3BzLm9mZnNldFRvcCA6IHRoaXMucHJvcHMub2Zmc2V0O1xuICAgIG9mZnNldEJvdHRvbSA9IHRoaXMucHJvcHMub2Zmc2V0Qm90dG9tICE9IG51bGwgPyB0aGlzLnByb3BzLm9mZnNldEJvdHRvbSA6IHRoaXMucHJvcHMub2Zmc2V0O1xuXG4gICAgaWYgKG9mZnNldFRvcCA9PSBudWxsICYmIG9mZnNldEJvdHRvbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvZmZzZXRUb3AgPT0gbnVsbCkge1xuICAgICAgb2Zmc2V0VG9wID0gMDtcbiAgICB9XG4gICAgaWYgKG9mZnNldEJvdHRvbSA9PSBudWxsKSB7XG4gICAgICBvZmZzZXRCb3R0b20gPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucGluICE9IG51bGwgJiYgc2Nyb2xsVG9wICsgdGhpcy51bnBpbiA8PSBwb3NpdGlvbi50b3ApIHtcbiAgICAgIGFmZml4ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRCb3R0b20gIT0gbnVsbCAmJiBwb3NpdGlvbi50b3AgKyBET01Ob2RlLm9mZnNldEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20pIHtcbiAgICAgIGFmZml4ID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRUb3AgIT0gbnVsbCAmJiBzY3JvbGxUb3AgPD0gb2Zmc2V0VG9wKSB7XG4gICAgICBhZmZpeCA9ICd0b3AnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZmZpeCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09IGFmZml4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5waW4gIT0gbnVsbCkge1xuICAgICAgRE9NTm9kZS5zdHlsZS50b3AgPSAnJztcbiAgICB9XG5cbiAgICBhZmZpeFR5cGUgPSAnYWZmaXgnICsgKGFmZml4ID8gJy0nICsgYWZmaXggOiAnJyk7XG5cbiAgICB0aGlzLmFmZml4ZWQgPSBhZmZpeDtcbiAgICB0aGlzLnVucGluID0gYWZmaXggPT09ICdib3R0b20nID8gdGhpcy5nZXRQaW5uZWRPZmZzZXQoRE9NTm9kZSkgOiBudWxsO1xuXG4gICAgaWYgKGFmZml4ID09PSAnYm90dG9tJykge1xuICAgICAgRE9NTm9kZS5jbGFzc05hbWUgPSBET01Ob2RlLmNsYXNzTmFtZS5yZXBsYWNlKC9hZmZpeC10b3B8YWZmaXgtYm90dG9tfGFmZml4LywgJ2FmZml4LWJvdHRvbScpO1xuICAgICAgYWZmaXhQb3NpdGlvblRvcCA9IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSAtIERPTU5vZGUub2Zmc2V0SGVpZ2h0IC0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0T2Zmc2V0KERPTU5vZGUpLnRvcDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFmZml4Q2xhc3M6IGFmZml4VHlwZSxcbiAgICAgIGFmZml4UG9zaXRpb25Ub3A6IGFmZml4UG9zaXRpb25Ub3BcbiAgICB9KTtcbiAgfSxcblxuICBjaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcDogZnVuY3Rpb24gY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLmNoZWNrUG9zaXRpb24sIDApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9vbldpbmRvd1Njcm9sbExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4od2luZG93LCAnc2Nyb2xsJywgdGhpcy5jaGVja1Bvc2l0aW9uKTtcbiAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcyksICdjbGljaycsIHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3ApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWZmaXhDbGFzcyA9PT0gdGhpcy5zdGF0ZS5hZmZpeENsYXNzKSB7XG4gICAgICB0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBZmZpeE1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9BZmZpeE1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBjYW5Vc2VEb20gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vKipcbiAqIEdldCBlbGVtZW50cyBvd25lciBkb2N1bWVudFxuICpcbiAqIEBwYXJhbSB7UmVhY3RDb21wb25lbnR8SFRNTEVsZW1lbnR9IGNvbXBvbmVudE9yRWxlbWVudFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBvd25lckRvY3VtZW50KGNvbXBvbmVudE9yRWxlbWVudCkge1xuICB2YXIgZWxlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShjb21wb25lbnRPckVsZW1lbnQpO1xuICByZXR1cm4gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIG93bmVyV2luZG93KGNvbXBvbmVudE9yRWxlbWVudCkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChjb21wb25lbnRPckVsZW1lbnQpO1xuICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3ID8gZG9jLmRlZmF1bHRWaWV3IDogZG9jLnBhcmVudFdpbmRvdztcbn1cblxuLyoqXG4gKiBnZXQgdGhlIGFjdGl2ZSBlbGVtZW50LCBzYWZlIGluIElFXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoY29tcG9uZW50T3JFbGVtZW50KTtcblxuICB0cnkge1xuICAgIHJldHVybiBkb2MuYWN0aXZlRWxlbWVudCB8fCBkb2MuYm9keTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0Y3V0IHRvIGNvbXB1dGUgZWxlbWVudCBzdHlsZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtDc3NTdHlsZX1cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkge1xuICByZXR1cm4gb3duZXJEb2N1bWVudChlbGVtKS5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50cyBvZmZzZXRcbiAqXG4gKiBUT0RPOiBSRU1PVkUgSlFVRVJZIVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IERPTU5vZGVcbiAqIEByZXR1cm5zIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldChET01Ob2RlKSB7XG4gIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnkoRE9NTm9kZSkub2Zmc2V0KCk7XG4gIH1cblxuICB2YXIgZG9jRWxlbSA9IG93bmVyRG9jdW1lbnQoRE9NTm9kZSkuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgYm94ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuICAvLyBJZiB3ZSBkb24ndCBoYXZlIGdCQ1IsIGp1c3QgdXNlIDAsMCByYXRoZXIgdGhhbiBlcnJvclxuICAvLyBCbGFja0JlcnJ5IDUsIGlPUyAzIChvcmlnaW5hbCBpUGhvbmUpXG4gIGlmICh0eXBlb2YgRE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgYm94ID0gRE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgcG9zaXRpb25cbiAqXG4gKiBUT0RPOiBSRU1PVkUgSlFVRVJZIVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBvZmZzZXRQYXJlbnRcbiAqIEByZXR1cm5zIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKGVsZW0sIG9mZnNldFBhcmVudCkge1xuICB2YXIgb2Zmc2V0ID0gdW5kZWZpbmVkLFxuICAgICAgcGFyZW50T2Zmc2V0ID0gdW5kZWZpbmVkO1xuXG4gIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgaWYgKCFvZmZzZXRQYXJlbnQpIHtcbiAgICAgIHJldHVybiB3aW5kb3cualF1ZXJ5KGVsZW0pLnBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgb2Zmc2V0ID0gd2luZG93LmpRdWVyeShlbGVtKS5vZmZzZXQoKTtcbiAgICBwYXJlbnRPZmZzZXQgPSB3aW5kb3cualF1ZXJ5KG9mZnNldFBhcmVudCkub2Zmc2V0KCk7XG5cbiAgICAvLyBHZXQgZWxlbWVudCBvZmZzZXQgcmVsYXRpdmUgdG8gb2Zmc2V0UGFyZW50XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AsXG4gICAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgLy8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSwgYmVjYXVzZSBpdCBpcyBpdHMgb25seSBvZmZzZXQgcGFyZW50XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIC8vIFdlIGFzc3VtZSB0aGF0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBhdmFpbGFibGUgd2hlbiBjb21wdXRlZCBwb3NpdGlvbiBpcyBmaXhlZFxuICAgIG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFvZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnRGdW5jKGVsZW0pO1xuICAgIH1cblxuICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICBvZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICBwYXJlbnRPZmZzZXQgPSBnZXRPZmZzZXQob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICBwYXJlbnRPZmZzZXQudG9wICs9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkuYm9yZGVyVG9wV2lkdGgsIDEwKTtcbiAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuICB9XG5cbiAgLy8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuICByZXR1cm4ge1xuICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5tYXJnaW5Ub3AsIDEwKSxcbiAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkubWFyZ2luTGVmdCwgMTApXG4gIH07XG59XG5cbi8qKlxuICogR2V0IGFuIGVsZW1lbnQncyBzaXplXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge3t3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldFNpemUoZWxlbSkge1xuICB2YXIgcmVjdCA9IHtcbiAgICB3aWR0aDogZWxlbS5vZmZzZXRXaWR0aCB8fCAwLFxuICAgIGhlaWdodDogZWxlbS5vZmZzZXRIZWlnaHQgfHwgMFxuICB9O1xuICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBfZWxlbSRnZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdmFyIHdpZHRoID0gX2VsZW0kZ2V0Qm91bmRpbmdDbGllbnRSZWN0LndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBfZWxlbSRnZXRCb3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0O1xuXG4gICAgcmVjdC53aWR0aCA9IHdpZHRoIHx8IHJlY3Qud2lkdGg7XG4gICAgcmVjdC5oZWlnaHQgPSBoZWlnaHQgfHwgcmVjdC5oZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbi8qKlxuICogR2V0IHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IGVsZW1cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gb2Zmc2V0UGFyZW50RnVuYyhlbGVtKSB7XG4gIHZhciBkb2NFbGVtID0gb3duZXJEb2N1bWVudChlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmIGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0VsZW07XG59XG5cbi8qKlxuICogQ3Jvc3MgYnJvd3NlciAuY29udGFpbnMoKSBwb2x5ZmlsbFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBpbm5lclxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoZWxlbSwgaW5uZXIpIHtcbiAgZnVuY3Rpb24gaWU4Q29udGFpbnMocm9vdCwgbm9kZSkge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBlbGVtICYmIGVsZW0uY29udGFpbnMgPyBlbGVtLmNvbnRhaW5zKGlubmVyKSA6IGVsZW0gJiYgZWxlbS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiA/IGVsZW0gPT09IGlubmVyIHx8ICEhKGVsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24oaW5uZXIpICYgMTYpIDogaWU4Q29udGFpbnMoZWxlbSwgaW5uZXIpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGNhblVzZURvbTogY2FuVXNlRG9tLFxuICBjb250YWluczogY29udGFpbnMsXG4gIG93bmVyV2luZG93OiBvd25lcldpbmRvdyxcbiAgb3duZXJEb2N1bWVudDogb3duZXJEb2N1bWVudCxcbiAgZ2V0Q29tcHV0ZWRTdHlsZXM6IGdldENvbXB1dGVkU3R5bGVzLFxuICBnZXRPZmZzZXQ6IGdldE9mZnNldCxcbiAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uLFxuICBnZXRTaXplOiBnZXRTaXplLFxuICBhY3RpdmVFbGVtZW50OiBnZXRBY3RpdmVFbGVtZW50LFxuICBvZmZzZXRQYXJlbnQ6IG9mZnNldFBhcmVudEZ1bmNcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2RvbVV0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhIG1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy92ZW5kb3Ivc3R1YnMvRXZlbnRMaXN0ZW5lci5qc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFRPRE86IHJlbW92ZSBpbiBmYXZvdXIgb2Ygc29sdXRpb24gcHJvdmlkZWQgYnk6XG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yODVcbiAqL1xuXG4vKipcbiAqIERvZXMgbm90IHRha2UgaW50byBhY2NvdW50IHNwZWNpZmljIG5hdHVyZSBvZiBwbGF0Zm9ybS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEV2ZW50TGlzdGVuZXIgPSB7XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGJ1YmJsZSBwaGFzZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0IERPTSBlbGVtZW50IHRvIHJlZ2lzdGVyIGxpc3RlbmVyIG9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHR5cGUsIGUuZy4gJ2NsaWNrJyBvciAnbW91c2VvdmVyJy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggYSBgcmVtb3ZlYCBtZXRob2QuXG4gICAqL1xuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFdmVudExpc3RlbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9FdmVudExpc3RlbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgQWxlcnQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FsZXJ0JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uRGlzbWlzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc21pc3NBZnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xvc2VMYWJlbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2FsZXJ0JyxcbiAgICAgIGJzU3R5bGU6ICdpbmZvJyxcbiAgICAgIGNsb3NlTGFiZWw6ICdDbG9zZSBBbGVydCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlckRpc21pc3NCdXR0b246IGZ1bmN0aW9uIHJlbmRlckRpc21pc3NCdXR0b24oKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJjbG9zZVwiLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHMuY2xvc2VMYWJlbCxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkRpc21pc3MgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtaGlkZGVuJzogXCJ0cnVlXCIgfSxcbiAgICAgICAgJ8OXJ1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICB2YXIgaXNEaXNtaXNzYWJsZSA9ICEhdGhpcy5wcm9wcy5vbkRpc21pc3M7XG5cbiAgICBjbGFzc2VzWydhbGVydC1kaXNtaXNzYWJsZSddID0gaXNEaXNtaXNzYWJsZTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcm9sZTogJ2FsZXJ0JywgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBpc0Rpc21pc3NhYmxlID8gdGhpcy5yZW5kZXJEaXNtaXNzQnV0dG9uKCkgOiBudWxsLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc21pc3NBZnRlciAmJiB0aGlzLnByb3BzLm9uRGlzbWlzcykge1xuICAgICAgdGhpcy5kaXNtaXNzVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucHJvcHMub25EaXNtaXNzLCB0aGlzLnByb3BzLmRpc21pc3NBZnRlcik7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZXIpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWxlcnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBCYWRnZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQmFkZ2UnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgaGFzQ29udGVudDogZnVuY3Rpb24gaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5oYXNWYWxpZENvbXBvbmVudCh0aGlzLnByb3BzLmNoaWxkcmVuKSB8fCBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxIHx8IHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ251bWJlcic7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAncHVsbC1yaWdodCc6IHRoaXMucHJvcHMucHVsbFJpZ2h0LFxuICAgICAgJ2JhZGdlJzogdGhpcy5oYXNDb250ZW50KClcbiAgICB9O1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCYWRnZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQmFkZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF9CdXR0b25JbnB1dCA9IHJlcXVpcmUoJy4vQnV0dG9uSW5wdXQnKTtcblxudmFyIF9CdXR0b25JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25JbnB1dCk7XG5cbnZhciBCdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJsb2NrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2SXRlbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5hdkRyb3Bkb3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB1c2UgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBIVE1MIGJ1dHRvbiB0eXBlIEF0dHJpYnV0ZVxuICAgICAqIEB0eXBlIHsoXCJidXR0b25cInxcInJlc2V0XCJ8XCJzdWJtaXRcIil9XG4gICAgICovXG4gICAgdHlwZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10udHlwZXMpXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24nLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMubmF2RHJvcGRvd24gPyB7fSA6IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciByZW5kZXJGdW5jTmFtZSA9IHVuZGVmaW5lZDtcblxuICAgIGNsYXNzZXMgPSBfZXh0ZW5kcyh7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgJ2J0bi1ibG9jayc6IHRoaXMucHJvcHMuYmxvY2tcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm5hdkl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlck5hdkl0ZW0oY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyRnVuY05hbWUgPSB0aGlzLnByb3BzLmhyZWYgfHwgdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy5uYXZEcm9wZG93biA/ICdyZW5kZXJBbmNob3InIDogJ3JlbmRlckJ1dHRvbic7XG5cbiAgICByZXR1cm4gdGhpc1tyZW5kZXJGdW5jTmFtZV0oY2xhc3Nlcyk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoY2xhc3Nlcykge1xuXG4gICAgdmFyIENvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3MgfHwgJ2EnO1xuICAgIHZhciBocmVmID0gdGhpcy5wcm9wcy5ocmVmIHx8ICcjJztcbiAgICBjbGFzc2VzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByb2xlOiBcImJ1dHRvblwiIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQnV0dG9uOiBmdW5jdGlvbiByZW5kZXJCdXR0b24oY2xhc3Nlcykge1xuICAgIHZhciBDb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzIHx8ICdidXR0b24nO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlIHx8ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2xhc3Nlcykge1xuICAgIHZhciBsaUNsYXNzZXMgPSB7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10obGlDbGFzc2VzKSB9LFxuICAgICAgdGhpcy5yZW5kZXJBbmNob3IoY2xhc3NlcylcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24uanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0Zvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG5cbnZhciBfRm9ybUdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Hcm91cCk7XG5cbnZhciBfSW5wdXRCYXNlMiA9IHJlcXVpcmUoJy4vSW5wdXRCYXNlJyk7XG5cbnZhciBfSW5wdXRCYXNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0QmFzZTIpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbicpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgQnV0dG9uSW5wdXQgPSAoZnVuY3Rpb24gKF9JbnB1dEJhc2UpIHtcbiAgX2luaGVyaXRzKEJ1dHRvbklucHV0LCBfSW5wdXRCYXNlKTtcblxuICBmdW5jdGlvbiBCdXR0b25JbnB1dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uSW5wdXQpO1xuXG4gICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQnV0dG9uSW5wdXQucHJvdG90eXBlLnJlbmRlckZvcm1Hcm91cCA9IGZ1bmN0aW9uIHJlbmRlckZvcm1Hcm91cChjaGlsZHJlbikge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBic1N0eWxlID0gX3Byb3BzLmJzU3R5bGU7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgdmFyIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydic1N0eWxlJywgJ3ZhbHVlJ10pO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0Zvcm1Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgIG90aGVyLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIEJ1dHRvbklucHV0LnByb3RvdHlwZS5yZW5kZXJJbnB1dCA9IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG5cbiAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjaGlsZHJlbicsICd2YWx1ZSddKTtcblxuICAgIHZhciB2YWwgPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogdmFsdWU7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9CdXR0b24yWydkZWZhdWx0J10sIF9leHRlbmRzKHt9LCBvdGhlciwgeyBjb21wb25lbnRDbGFzczogXCJpbnB1dFwiLCByZWY6IFwiaW5wdXRcIiwga2V5OiBcImlucHV0XCIsIHZhbHVlOiB2YWwgfSkpO1xuICB9O1xuXG4gIHJldHVybiBCdXR0b25JbnB1dDtcbn0pKF9JbnB1dEJhc2UzWydkZWZhdWx0J10pO1xuXG5CdXR0b25JbnB1dC50eXBlcyA9IFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddO1xuXG5CdXR0b25JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdidXR0b24nXG59O1xuXG5CdXR0b25JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoQnV0dG9uSW5wdXQudHlwZXMpLFxuICBic1N0eWxlOiBmdW5jdGlvbiBic1N0eWxlKHByb3BzKSB7XG4gICAgLy9kZWZlciB0byBCdXR0b24gcHJvcFR5cGVzIG9mIGJzU3R5bGVcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgY2hpbGRyZW46IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J10sXG4gIHZhbHVlOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b25JbnB1dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpWydkZWZhdWx0J107XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIEZvcm1Hcm91cCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRm9ybUdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGb3JtR3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm1Hcm91cCk7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBGb3JtR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdmb3JtLWdyb3VwJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSxcbiAgICAgICdmb3JtLWdyb3VwLWxnJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSAmJiB0aGlzLnByb3BzLmJzU2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgICdmb3JtLWdyb3VwLXNtJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSAmJiB0aGlzLnByb3BzLmJzU2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgICdoYXMtZmVlZGJhY2snOiB0aGlzLnByb3BzLmhhc0ZlZWRiYWNrLFxuICAgICAgJ2hhcy1zdWNjZXNzJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnc3VjY2VzcycsXG4gICAgICAnaGFzLXdhcm5pbmcnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICdoYXMtZXJyb3InOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdlcnJvcidcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10oY2xhc3NlcywgdGhpcy5wcm9wcy5ncm91cENsYXNzTmFtZSkgfSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBGb3JtR3JvdXA7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuRm9ybUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RhbmRhbG9uZTogZmFsc2Vcbn07XG5cbkZvcm1Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIHN0YW5kYWxvbmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgaGFzRmVlZGJhY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgYnNTaXplOiBmdW5jdGlvbiBic1NpemUocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuc3RhbmRhbG9uZSAmJiBwcm9wcy5ic1NpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignYnNTaXplIHdpbGwgbm90IGJlIHVzZWQgd2hlbiBgc3RhbmRhbG9uZWAgaXMgc2V0LicpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH0sXG4gIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXSksXG4gIGdyb3VwQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRm9ybUdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcblxudmFyIF9Gb3JtR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUdyb3VwKTtcblxudmFyIElucHV0QmFzZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSW5wdXRCYXNlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dEJhc2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0QmFzZSk7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBJbnB1dEJhc2UucHJvdG90eXBlLmdldElucHV0RE9NTm9kZSA9IGZ1bmN0aW9uIGdldElucHV0RE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XG4gIH07XG5cbiAgSW5wdXRCYXNlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3NlbGVjdCcgJiYgdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldElucHV0RE9NTm9kZSgpLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnQ2Fubm90IHVzZSBnZXRWYWx1ZSB3aXRob3V0IHNwZWNpZnlpbmcgaW5wdXQgdHlwZS4nO1xuICAgIH1cbiAgfTtcblxuICBJbnB1dEJhc2UucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiBnZXRDaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldElucHV0RE9NTm9kZSgpLmNoZWNrZWQ7XG4gIH07XG5cbiAgSW5wdXRCYXNlLnByb3RvdHlwZS5nZXRTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiBnZXRTZWxlY3RlZE9wdGlvbnMoKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmdldElucHV0RE9NTm9kZSgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKSwgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpIHx8IG9wdGlvbi5pbm5lckh0bWw7XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgSW5wdXRCYXNlLnByb3RvdHlwZS5pc0NoZWNrYm94T3JSYWRpbyA9IGZ1bmN0aW9uIGlzQ2hlY2tib3hPclJhZGlvKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgdGhpcy5wcm9wcy50eXBlID09PSAncmFkaW8nO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUuaXNGaWxlID0gZnVuY3Rpb24gaXNGaWxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICdmaWxlJztcbiAgfTtcblxuICBJbnB1dEJhc2UucHJvdG90eXBlLnJlbmRlcklucHV0R3JvdXAgPSBmdW5jdGlvbiByZW5kZXJJbnB1dEdyb3VwKGNoaWxkcmVuKSB7XG4gICAgdmFyIGFkZG9uQmVmb3JlID0gdGhpcy5wcm9wcy5hZGRvbkJlZm9yZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIiwga2V5OiBcImFkZG9uQmVmb3JlXCIgfSxcbiAgICAgIHRoaXMucHJvcHMuYWRkb25CZWZvcmVcbiAgICApIDogbnVsbDtcblxuICAgIHZhciBhZGRvbkFmdGVyID0gdGhpcy5wcm9wcy5hZGRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1hZGRvblwiLCBrZXk6IFwiYWRkb25BZnRlclwiIH0sXG4gICAgICB0aGlzLnByb3BzLmFkZG9uQWZ0ZXJcbiAgICApIDogbnVsbDtcblxuICAgIHZhciBidXR0b25CZWZvcmUgPSB0aGlzLnByb3BzLmJ1dHRvbkJlZm9yZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYnRuXCIgfSxcbiAgICAgIHRoaXMucHJvcHMuYnV0dG9uQmVmb3JlXG4gICAgKSA6IG51bGw7XG5cbiAgICB2YXIgYnV0dG9uQWZ0ZXIgPSB0aGlzLnByb3BzLmJ1dHRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1idG5cIiB9LFxuICAgICAgdGhpcy5wcm9wcy5idXR0b25BZnRlclxuICAgICkgOiBudWxsO1xuXG4gICAgdmFyIGlucHV0R3JvdXBDbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLmJzU2l6ZSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBpbnB1dEdyb3VwQ2xhc3NOYW1lID0gJ2lucHV0LWdyb3VwLXNtJzticmVhaztcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgaW5wdXRHcm91cENsYXNzTmFtZSA9ICdpbnB1dC1ncm91cC1sZyc7YnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZG9uQmVmb3JlIHx8IGFkZG9uQWZ0ZXIgfHwgYnV0dG9uQmVmb3JlIHx8IGJ1dHRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXShpbnB1dEdyb3VwQ2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAnKSwga2V5OiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgIGFkZG9uQmVmb3JlLFxuICAgICAgYnV0dG9uQmVmb3JlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhZGRvbkFmdGVyLFxuICAgICAgYnV0dG9uQWZ0ZXJcbiAgICApIDogY2hpbGRyZW47XG4gIH07XG5cbiAgSW5wdXRCYXNlLnByb3RvdHlwZS5yZW5kZXJJY29uID0gZnVuY3Rpb24gcmVuZGVySWNvbigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdnbHlwaGljb24nOiB0cnVlLFxuICAgICAgJ2Zvcm0tY29udHJvbC1mZWVkYmFjayc6IHRydWUsXG4gICAgICAnZ2x5cGhpY29uLW9rJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnc3VjY2VzcycsXG4gICAgICAnZ2x5cGhpY29uLXdhcm5pbmctc2lnbic6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgJ2dseXBoaWNvbi1yZW1vdmUnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdlcnJvcidcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzRmVlZGJhY2sgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXShjbGFzc2VzKSwga2V5OiBcImljb25cIiB9KSA6IG51bGw7XG4gIH07XG5cbiAgSW5wdXRCYXNlLnByb3RvdHlwZS5yZW5kZXJIZWxwID0gZnVuY3Rpb24gcmVuZGVySGVscCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5oZWxwID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogXCJoZWxwLWJsb2NrXCIsIGtleTogXCJoZWxwXCIgfSxcbiAgICAgIHRoaXMucHJvcHMuaGVscFxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUucmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXIgPSBmdW5jdGlvbiByZW5kZXJDaGVja2JveEFuZFJhZGlvV3JhcHBlcihjaGlsZHJlbikge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2NoZWNrYm94JzogdGhpcy5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnLFxuICAgICAgJ3JhZGlvJzogdGhpcy5wcm9wcy50eXBlID09PSAncmFkaW8nXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKGNsYXNzZXMpLCBrZXk6IFwiY2hlY2tib3hSYWRpb1dyYXBwZXJcIiB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUucmVuZGVyV3JhcHBlciA9IGZ1bmN0aW9uIHJlbmRlcldyYXBwZXIoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLndyYXBwZXJDbGFzc05hbWUsIGtleTogXCJ3cmFwcGVyXCIgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKSA6IGNoaWxkcmVuO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUucmVuZGVyTGFiZWwgPSBmdW5jdGlvbiByZW5kZXJMYWJlbChjaGlsZHJlbikge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2NvbnRyb2wtbGFiZWwnOiAhdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpXG4gICAgfTtcbiAgICBjbGFzc2VzW3RoaXMucHJvcHMubGFiZWxDbGFzc05hbWVdID0gdGhpcy5wcm9wcy5sYWJlbENsYXNzTmFtZTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmxhYmVsID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGFiZWwnLFxuICAgICAgeyBodG1sRm9yOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKGNsYXNzZXMpLCBrZXk6IFwibGFiZWxcIiB9LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgKSA6IGNoaWxkcmVuO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUucmVuZGVySW5wdXQgPSBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sJyksIHJlZjogXCJpbnB1dFwiLCBrZXk6IFwiaW5wdXRcIiB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sJyksIHJlZjogXCJpbnB1dFwiLCBrZXk6IFwiaW5wdXRcIiB9KSk7XG4gICAgICBjYXNlICdzdGF0aWMnOlxuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3AnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wtc3RhdGljJyksIHJlZjogXCJpbnB1dFwiLCBrZXk6IFwiaW5wdXRcIiB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuaXNDaGVja2JveE9yUmFkaW8oKSB8fCB0aGlzLmlzRmlsZSgpID8gJycgOiAnZm9ybS1jb250cm9sJztcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgcmVmOiBcImlucHV0XCIsIGtleTogXCJpbnB1dFwiIH0pKTtcbiAgfTtcblxuICBJbnB1dEJhc2UucHJvdG90eXBlLnJlbmRlckZvcm1Hcm91cCA9IGZ1bmN0aW9uIHJlbmRlckZvcm1Hcm91cChjaGlsZHJlbikge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9Gb3JtR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNDaGVja2JveE9yUmFkaW8oKSA/IFt0aGlzLnJlbmRlckxhYmVsKCksIHRoaXMucmVuZGVyV3JhcHBlcihbdGhpcy5yZW5kZXJJbnB1dEdyb3VwKHRoaXMucmVuZGVySW5wdXQoKSksIHRoaXMucmVuZGVySWNvbigpLCB0aGlzLnJlbmRlckhlbHAoKV0pXSA6IHRoaXMucmVuZGVyV3JhcHBlcihbdGhpcy5yZW5kZXJDaGVja2JveEFuZFJhZGlvV3JhcHBlcih0aGlzLnJlbmRlckxhYmVsKHRoaXMucmVuZGVySW5wdXQoKSkpLCB0aGlzLnJlbmRlckhlbHAoKV0pO1xuICB9O1xuXG4gIElucHV0QmFzZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtR3JvdXAoY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBJbnB1dEJhc2U7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuSW5wdXRCYXNlLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGhlbHA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYWRkb25CZWZvcmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYWRkb25BZnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBidXR0b25CZWZvcmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnV0dG9uQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnNTaXplOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJ10pLFxuICBoYXNGZWVkYmFjazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGdyb3VwQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbnB1dEJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0QmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHZhbHVlVmFsaWRhdGlvbjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBwcm9wTGlzdCA9IFsnY2hpbGRyZW4nLCAndmFsdWUnXTtcbnZhciB0eXBlTGlzdCA9IFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddO1xuXG5mdW5jdGlvbiB2YWx1ZVZhbGlkYXRpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBlcnJvciA9IF9DdXN0b21Qcm9wVHlwZXMuc2luZ2xlUHJvcEZyb20ocHJvcExpc3QpKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIGlmICghZXJyb3IpIHtcbiAgICB2YXIgb25lT2ZUeXBlID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUodHlwZUxpc3QpO1xuICAgIGVycm9yID0gb25lT2ZUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIEJ1dHRvbkdyb3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCdXR0b25Hcm91cCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2ZXJ0aWNhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGp1c3RpZmllZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYmxvY2sgYnV0dG9ucywgb25seSB1c2VmdWwgd2hlbiB1c2VkIHdpdGggdGhlIFwidmVydGljYWxcIiBwcm9wLlxuICAgICAqIEB0eXBlIHtib29sfVxuICAgICAqL1xuICAgIGJsb2NrOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uYWxsKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChwcm9wcy5ibG9jayAmJiAhcHJvcHMudmVydGljYWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIGJsb2NrIHByb3BlcnR5IHJlcXVpcmVzIHRoZSB2ZXJ0aWNhbCBwcm9wZXJ0eSB0byBiZSBzZXQgdG8gaGF2ZSBhbnkgZWZmZWN0Jyk7XG4gICAgICB9XG4gICAgfV0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24tZ3JvdXAnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cCddID0gIXRoaXMucHJvcHMudmVydGljYWw7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwLXZlcnRpY2FsJ10gPSB0aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cC1qdXN0aWZpZWQnXSA9IHRoaXMucHJvcHMuanVzdGlmaWVkO1xuICAgIGNsYXNzZXNbJ2J0bi1ibG9jayddID0gdGhpcy5wcm9wcy5ibG9jaztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvbkdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Hcm91cC5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIEJ1dHRvblRvb2xiYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvblRvb2xiYXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24tdG9vbGJhcidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJvbGU6IFwidG9vbGJhclwiLFxuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uVG9vbGJhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uVG9vbGJhci5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9HbHlwaGljb24gPSByZXF1aXJlKCcuL0dseXBoaWNvbicpO1xuXG52YXIgX0dseXBoaWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaGljb24pO1xuXG52YXIgQ2Fyb3VzZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Nhcm91c2VsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHNsaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5kaWNhdG9yczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGludGVydmFsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250cm9sczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHBhdXNlT25Ib3ZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHdyYXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2xpZGVFbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmVJbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdEFjdGl2ZUluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXJlY3Rpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydwcmV2JywgJ25leHQnXSksXG4gICAgcHJldkljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBuZXh0SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsaWRlOiB0cnVlLFxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgaW5kaWNhdG9yczogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldkljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9HbHlwaGljb24yWydkZWZhdWx0J10sIHsgZ2x5cGg6IFwiY2hldnJvbi1sZWZ0XCIgfSksXG4gICAgICBuZXh0SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0dseXBoaWNvbjJbJ2RlZmF1bHQnXSwgeyBnbHlwaDogXCJjaGV2cm9uLXJpZ2h0XCIgfSlcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVJbmRleDogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXggPT0gbnVsbCA/IDAgOiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IG51bGwsXG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGdldERpcmVjdGlvbjogZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKHByZXZJbmRleCwgaW5kZXgpIHtcbiAgICBpZiAocHJldkluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZJbmRleCA+IGluZGV4ID8gJ3ByZXYnIDogJ25leHQnO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPSBudWxsICYmIG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb246IG5leHRQcm9wcy5kaXJlY3Rpb24gIT0gbnVsbCA/IG5leHRQcm9wcy5kaXJlY3Rpb24gOiB0aGlzLmdldERpcmVjdGlvbihhY3RpdmVJbmRleCwgbmV4dFByb3BzLmFjdGl2ZUluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9LFxuXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpICsgMTtcbiAgICB2YXIgY291bnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgaWYgKGluZGV4ID4gY291bnQgLSAxKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVTZWxlY3QoaW5kZXgsICduZXh0Jyk7XG4gIH0sXG5cbiAgcHJldjogZnVuY3Rpb24gcHJldihlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgLSAxO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLndyYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pIC0gMTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlbGVjdChpbmRleCwgJ3ByZXYnKTtcbiAgfSxcblxuICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuICB9LFxuXG4gIHdhaXRGb3JOZXh0OiBmdW5jdGlvbiB3YWl0Rm9yTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuaXNQYXVzZWQgJiYgdGhpcy5wcm9wcy5zbGlkZSAmJiB0aGlzLnByb3BzLmludGVydmFsICYmIHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLm5leHQsIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVNb3VzZU92ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3ZlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTW91c2VPdXQ6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KCkge1xuICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBjYXJvdXNlbDogdHJ1ZSxcbiAgICAgIHNsaWRlOiB0aGlzLnByb3BzLnNsaWRlXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICAgIG9uTW91c2VPdmVyOiB0aGlzLmhhbmRsZU1vdXNlT3ZlcixcbiAgICAgICAgb25Nb3VzZU91dDogdGhpcy5oYW5kbGVNb3VzZU91dCB9KSxcbiAgICAgIHRoaXMucHJvcHMuaW5kaWNhdG9ycyA/IHRoaXMucmVuZGVySW5kaWNhdG9ycygpIDogbnVsbCxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtaW5uZXJcIiwgcmVmOiBcImlubmVyXCIgfSxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJJdGVtKVxuICAgICAgKSxcbiAgICAgIHRoaXMucHJvcHMuY29udHJvbHMgPyB0aGlzLnJlbmRlckNvbnRyb2xzKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcmV2OiBmdW5jdGlvbiByZW5kZXJQcmV2KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBcImxlZnQgY2Fyb3VzZWwtY29udHJvbFwiLCBocmVmOiBcIiNwcmV2XCIsIGtleTogMCwgb25DbGljazogdGhpcy5wcmV2IH0sXG4gICAgICB0aGlzLnByb3BzLnByZXZJY29uXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOZXh0OiBmdW5jdGlvbiByZW5kZXJOZXh0KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBcInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcIiwgaHJlZjogXCIjbmV4dFwiLCBrZXk6IDEsIG9uQ2xpY2s6IHRoaXMubmV4dCB9LFxuICAgICAgdGhpcy5wcm9wcy5uZXh0SWNvblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29udHJvbHM6IGZ1bmN0aW9uIHJlbmRlckNvbnRyb2xzKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy53cmFwKSB7XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgICB2YXIgY291bnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICByZXR1cm4gW2FjdGl2ZUluZGV4ICE9PSAwID8gdGhpcy5yZW5kZXJQcmV2KCkgOiBudWxsLCBhY3RpdmVJbmRleCAhPT0gY291bnQgLSAxID8gdGhpcy5yZW5kZXJOZXh0KCkgOiBudWxsXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RoaXMucmVuZGVyUHJldigpLCB0aGlzLnJlbmRlck5leHQoKV07XG4gIH0sXG5cbiAgcmVuZGVySW5kaWNhdG9yOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3IoY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGluZGV4ID09PSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgPyAnYWN0aXZlJyA6IG51bGw7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzLCBpbmRleCwgbnVsbCkgfSk7XG4gIH0sXG5cbiAgcmVuZGVySW5kaWNhdG9yczogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9ycygpIHtcbiAgICB2YXIgaW5kaWNhdG9ycyA9IFtdO1xuICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICBpbmRpY2F0b3JzLnB1c2godGhpcy5yZW5kZXJJbmRpY2F0b3IoY2hpbGQsIGluZGV4KSxcblxuICAgICAgLy8gRm9yY2Ugd2hpdGVzcGFjZSBiZXR3ZWVuIGluZGljYXRvciBlbGVtZW50cywgYm9vdHN0cmFwXG4gICAgICAvLyByZXF1aXJlcyB0aGlzIGZvciBjb3JyZWN0IHNwYWNpbmcgb2YgZWxlbWVudHMuXG4gICAgICAnICcpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ29sJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBcImNhcm91c2VsLWluZGljYXRvcnNcIiB9LFxuICAgICAgaW5kaWNhdG9yc1xuICAgICk7XG4gIH0sXG5cbiAgZ2V0QWN0aXZlSW5kZXg6IGZ1bmN0aW9uIGdldEFjdGl2ZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUluZGV4IDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgfSxcblxuICBoYW5kbGVJdGVtQW5pbWF0ZU91dEVuZDogZnVuY3Rpb24gaGFuZGxlSXRlbUFuaW1hdGVPdXRFbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBudWxsLFxuICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNsaWRlRW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TbGlkZUVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckl0ZW06IGZ1bmN0aW9uIHJlbmRlckl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuICAgIHZhciBpc0FjdGl2ZSA9IGluZGV4ID09PSBhY3RpdmVJbmRleDtcbiAgICB2YXIgaXNQcmV2aW91c0FjdGl2ZSA9IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsICYmIHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCA9PT0gaW5kZXggJiYgdGhpcy5wcm9wcy5zbGlkZTtcblxuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgcmVmOiBjaGlsZC5yZWYsXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgYW5pbWF0ZU91dDogaXNQcmV2aW91c0FjdGl2ZSxcbiAgICAgIGFuaW1hdGVJbjogaXNBY3RpdmUgJiYgdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ICE9IG51bGwgJiYgdGhpcy5wcm9wcy5zbGlkZSxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5zdGF0ZS5kaXJlY3Rpb24sXG4gICAgICBvbkFuaW1hdGVPdXRFbmQ6IGlzUHJldmlvdXNBY3RpdmUgPyB0aGlzLmhhbmRsZUl0ZW1BbmltYXRlT3V0RW5kIDogbnVsbFxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB2YXIgcHJldmlvdXNBY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCB0aGlzLmdldERpcmVjdGlvbihwcmV2aW91c0FjdGl2ZUluZGV4LCBpbmRleCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaW5kZXgsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUluZGV4ID09IG51bGwgJiYgaW5kZXggIT09IHByZXZpb3VzQWN0aXZlSW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gSWYgY3VycmVudGx5IGFuaW1hdGluZyBkb24ndCBhY3RpdmF0ZSB0aGUgbmV3IGluZGV4LlxuICAgICAgICAgIC8vIFRPRE86IGxvb2sgaW50byBxdWV1aW5nIHRoaXMgY2FuY2VsZWQgY2FsbCBhbmRcbiAgICAgICAgICAvLyBhbmltYXRpbmcgYWZ0ZXIgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIGhhcyBlbmRlZC5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVJbmRleDogaW5kZXgsXG4gICAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogcHJldmlvdXNBY3RpdmVJbmRleCxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDYXJvdXNlbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxudmFyIEdseXBoaWNvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnR2x5cGhpY29uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGdseXBoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uR0xZUEhTKS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdnbHlwaGljb24nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlc1snZ2x5cGhpY29uLScgKyB0aGlzLnByb3BzLmdseXBoXSA9IHRydWU7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gR2x5cGhpY29uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIENhcm91c2VsSXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ2Fyb3VzZWxJdGVtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkaXJlY3Rpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydwcmV2JywgJ25leHQnXSksXG4gICAgb25BbmltYXRlT3V0RW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0ZUluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0ZU91dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNhcHRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBpbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVBbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVBbmltYXRlT3V0RW5kKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQW5pbWF0ZU91dEVuZCAmJiB0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQW5pbWF0ZU91dEVuZCh0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgIT09IG5leHRQcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXJlY3Rpb246IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlICYmIHByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRoaXMuaGFuZGxlQW5pbWF0ZU91dEVuZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICE9PSBwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmltYXRpb24sIDIwKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRpb246IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYW5pbWF0ZUluIHx8IHRoaXMucHJvcHMuYW5pbWF0ZU91dCxcbiAgICAgIG5leHQ6IHRoaXMucHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYW5pbWF0ZUluICYmIHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAnbmV4dCcsXG4gICAgICBwcmV2OiB0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFuaW1hdGVJbiAmJiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiAmJiAodGhpcy5wcm9wcy5hbmltYXRlSW4gfHwgdGhpcy5wcm9wcy5hbmltYXRlT3V0KSkge1xuICAgICAgY2xhc3Nlc1t0aGlzLnN0YXRlLmRpcmVjdGlvbl0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgdGhpcy5wcm9wcy5jYXB0aW9uID8gdGhpcy5yZW5kZXJDYXB0aW9uKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDYXB0aW9uOiBmdW5jdGlvbiByZW5kZXJDYXB0aW9uKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtY2FwdGlvblwiIH0sXG4gICAgICB0aGlzLnByb3BzLmNhcHRpb25cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2Fyb3VzZWxJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9DYXJvdXNlbEl0ZW0uanNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvYWRkb25zL3RyYW5zaXRpb25zL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qc1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL0xJQ0VOU0VcbiAqIEFuIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvUEFURU5UU1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vKipcbiAqIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxuICogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiAqIGRlZmluZSB0aGF0IGV2ZW50LlxuICovXG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdtc1RyYW5zaXRpb24nOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuICAvLyBmcm9tIHRoZSBtYXBcbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gSWYgQ1NTIHRyYW5zaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkLCB0cmlnZ2VyIGFuIFwiZW5kIGFuaW1hdGlvblwiXG4gICAgICAvLyBldmVudCBpbW1lZGlhdGVseS5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvVHJhbnNpdGlvbkV2ZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9PYmplY3Qka2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBDb2wgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvbCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zIHlvdSB3aXNoIHRvIHNwYW5cbiAgICAgKlxuICAgICAqIGZvciBFeHRyYSBzbWFsbCBkZXZpY2VzIFBob25lcyAoPDc2OHB4KVxuICAgICAqXG4gICAgICogY2xhc3MtcHJlZml4IGBjb2wteHMtYFxuICAgICAqL1xuICAgIHhzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgeW91IHdpc2ggdG8gc3BhblxuICAgICAqXG4gICAgICogZm9yIFNtYWxsIGRldmljZXMgVGFibGV0cyAo4omlNzY4cHgpXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC1zbS1gXG4gICAgICovXG4gICAgc206IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucyB5b3Ugd2lzaCB0byBzcGFuXG4gICAgICpcbiAgICAgKiBmb3IgTWVkaXVtIGRldmljZXMgRGVza3RvcHMgKOKJpTk5MnB4KVxuICAgICAqXG4gICAgICogY2xhc3MtcHJlZml4IGBjb2wtbWQtYFxuICAgICAqL1xuICAgIG1kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgeW91IHdpc2ggdG8gc3BhblxuICAgICAqXG4gICAgICogZm9yIExhcmdlIGRldmljZXMgRGVza3RvcHMgKOKJpTEyMDBweClcbiAgICAgKlxuICAgICAqIGNsYXNzLXByZWZpeCBgY29sLWxnLWBcbiAgICAgKi9cbiAgICBsZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogTW92ZSBjb2x1bW5zIHRvIHRoZSByaWdodFxuICAgICAqXG4gICAgICogZm9yIEV4dHJhIHNtYWxsIGRldmljZXMgUGhvbmVzXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC14cy1vZmZzZXQtYFxuICAgICAqL1xuICAgIHhzT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBNb3ZlIGNvbHVtbnMgdG8gdGhlIHJpZ2h0XG4gICAgICpcbiAgICAgKiBmb3IgU21hbGwgZGV2aWNlcyBUYWJsZXRzXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC1zbS1vZmZzZXQtYFxuICAgICAqL1xuICAgIHNtT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBNb3ZlIGNvbHVtbnMgdG8gdGhlIHJpZ2h0XG4gICAgICpcbiAgICAgKiBmb3IgTWVkaXVtIGRldmljZXMgRGVza3RvcHNcbiAgICAgKlxuICAgICAqIGNsYXNzLXByZWZpeCBgY29sLW1kLW9mZnNldC1gXG4gICAgICovXG4gICAgbWRPZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIE1vdmUgY29sdW1ucyB0byB0aGUgcmlnaHRcbiAgICAgKlxuICAgICAqIGZvciBMYXJnZSBkZXZpY2VzIERlc2t0b3BzXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC1sZy1vZmZzZXQtYFxuICAgICAqL1xuICAgIGxnT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIG9yZGVyIG9mIGdyaWQgY29sdW1ucyB0byB0aGUgcmlnaHRcbiAgICAgKlxuICAgICAqIGZvciBFeHRyYSBzbWFsbCBkZXZpY2VzIFBob25lc1xuICAgICAqXG4gICAgICogY2xhc3MtcHJlZml4IGBjb2wteHMtcHVzaC1gXG4gICAgICovXG4gICAgeHNQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIG9yZGVyIG9mIGdyaWQgY29sdW1ucyB0byB0aGUgcmlnaHRcbiAgICAgKlxuICAgICAqIGZvciBTbWFsbCBkZXZpY2VzIFRhYmxldHNcbiAgICAgKlxuICAgICAqIGNsYXNzLXByZWZpeCBgY29sLXNtLXB1c2gtYFxuICAgICAqL1xuICAgIHNtUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBvcmRlciBvZiBncmlkIGNvbHVtbnMgdG8gdGhlIHJpZ2h0XG4gICAgICpcbiAgICAgKiBmb3IgTWVkaXVtIGRldmljZXMgRGVza3RvcHNcbiAgICAgKlxuICAgICAqIGNsYXNzLXByZWZpeCBgY29sLW1kLXB1c2gtYFxuICAgICAqL1xuICAgIG1kUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBvcmRlciBvZiBncmlkIGNvbHVtbnMgdG8gdGhlIHJpZ2h0XG4gICAgICpcbiAgICAgKiBmb3IgTGFyZ2UgZGV2aWNlcyBEZXNrdG9wc1xuICAgICAqXG4gICAgICogY2xhc3MtcHJlZml4IGBjb2wtbGctcHVzaC1gXG4gICAgICovXG4gICAgbGdQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIG9yZGVyIG9mIGdyaWQgY29sdW1ucyB0byB0aGUgbGVmdFxuICAgICAqXG4gICAgICogZm9yIEV4dHJhIHNtYWxsIGRldmljZXMgUGhvbmVzXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC14cy1wdWxsLWBcbiAgICAgKi9cbiAgICB4c1B1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgb3JkZXIgb2YgZ3JpZCBjb2x1bW5zIHRvIHRoZSBsZWZ0XG4gICAgICpcbiAgICAgKiBmb3IgU21hbGwgZGV2aWNlcyBUYWJsZXRzXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC1zbS1wdWxsLWBcbiAgICAgKi9cbiAgICBzbVB1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgb3JkZXIgb2YgZ3JpZCBjb2x1bW5zIHRvIHRoZSBsZWZ0XG4gICAgICpcbiAgICAgKiBmb3IgTWVkaXVtIGRldmljZXMgRGVza3RvcHNcbiAgICAgKlxuICAgICAqIGNsYXNzLXByZWZpeCBgY29sLW1kLXB1bGwtYFxuICAgICAqL1xuICAgIG1kUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBvcmRlciBvZiBncmlkIGNvbHVtbnMgdG8gdGhlIGxlZnRcbiAgICAgKlxuICAgICAqIGZvciBMYXJnZSBkZXZpY2VzIERlc2t0b3BzXG4gICAgICpcbiAgICAgKiBjbGFzcy1wcmVmaXggYGNvbC1sZy1wdWxsLWBcbiAgICAgKi9cbiAgICBsZ1B1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gdXNlIGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgY29tcG9uZW50Q2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRDbGFzczogJ2RpdidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICAgIF9PYmplY3Qka2V5cyhfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBzaXplID0gX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFU1trZXldO1xuICAgICAgdmFyIHByb3AgPSBzaXplO1xuICAgICAgdmFyIGNsYXNzUGFydCA9IHNpemUgKyAnLSc7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdPZmZzZXQnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctb2Zmc2V0LSc7XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSA+PSAwKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdQdXNoJztcbiAgICAgIGNsYXNzUGFydCA9IHNpemUgKyAnLXB1c2gtJztcbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdID49IDApIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ1B1bGwnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctcHVsbC0nO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0gPj0gMCkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZycpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nKTtcblxudmFyIHdhcm5lZCA9IGZhbHNlO1xuXG52YXIgQ29sbGFwc2libGVNaXhpbiA9IHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkZWZhdWx0RXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRFeHBhbmRlZCA9IHRoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZCA6IHRoaXMucHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMuZXhwYW5kZWQgOiBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICBleHBhbmRlZDogZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10oJ0NvbGxhcHNpYmxlTWl4aW4nLCAnQ29sbGFwc2UgQ29tcG9uZW50Jyk7XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgdmFyIHdpbGxFeHBhbmRlZCA9IG5leHRQcm9wcy5leHBhbmRlZCAhPSBudWxsID8gbmV4dFByb3BzLmV4cGFuZGVkIDogbmV4dFN0YXRlLmV4cGFuZGVkO1xuICAgIGlmICh3aWxsRXhwYW5kZWQgPT09IHRoaXMuaXNFeHBhbmRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGV4cGFuZGVkIHN0YXRlIGlzIGJlaW5nIHRvZ2dsZWQsIGVuc3VyZSBub2RlIGhhcyBhIGRpbWVuc2lvbiB2YWx1ZVxuICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciB0aGUgYW5pbWF0aW9uIHRvIHdvcmsgYW5kIG5lZWRzIHRvIGJlIHNldCBiZWZvcmVcbiAgICAvLyB0aGUgY29sbGFwc2luZyBjbGFzcyBpcyBhcHBsaWVkIChhZnRlciBjb2xsYXBzaW5nIGlzIGFwcGxpZWQgdGhlIGluIGNsYXNzXG4gICAgLy8gaXMgcmVtb3ZlZCBhbmQgdGhlIG5vZGUncyBkaW1lbnNpb24gd2lsbCBiZSB3cm9uZylcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcbiAgICB2YXIgdmFsdWUgPSAnMCc7XG5cbiAgICBpZiAoIXdpbGxFeHBhbmRlZCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKTtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSB2YWx1ZSArICdweCc7XG5cbiAgICB0aGlzLl9hZnRlcldpbGxVcGRhdGUoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIGNoZWNrIGlmIGV4cGFuZGVkIGlzIGJlaW5nIHRvZ2dsZWQ7IGlmIHNvLCBzZXQgY29sbGFwc2luZ1xuICAgIHRoaXMuX2NoZWNrVG9nZ2xlQ29sbGFwc2luZyhwcmV2UHJvcHMsIHByZXZTdGF0ZSk7XG5cbiAgICAvLyBjaGVjayBpZiBjb2xsYXBzaW5nIHdhcyB0dXJuZWQgb247IGlmIHNvLCBzdGFydCBhbmltYXRpb25cbiAgICB0aGlzLl9jaGVja1N0YXJ0QW5pbWF0aW9uKCk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX2FmdGVyV2lsbFVwZGF0ZTogZnVuY3Rpb24gX2FmdGVyV2lsbFVwZGF0ZSgpIHt9LFxuXG4gIF9jaGVja1N0YXJ0QW5pbWF0aW9uOiBmdW5jdGlvbiBfY2hlY2tTdGFydEFuaW1hdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKTtcblxuICAgIC8vIHNldHRpbmcgdGhlIGRpbWVuc2lvbiBoZXJlIHN0YXJ0cyB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb25cbiAgICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQoKSkge1xuICAgICAgcmVzdWx0ID0gdmFsdWUgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAnMHB4JztcbiAgICB9XG4gICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gcmVzdWx0O1xuICB9LFxuXG4gIF9jaGVja1RvZ2dsZUNvbGxhcHNpbmc6IGZ1bmN0aW9uIF9jaGVja1RvZ2dsZUNvbGxhcHNpbmcocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgd2FzRXhwYW5kZWQgPSBwcmV2UHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IHByZXZQcm9wcy5leHBhbmRlZCA6IHByZXZTdGF0ZS5leHBhbmRlZDtcbiAgICB2YXIgaXNFeHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZCgpO1xuICAgIGlmICh3YXNFeHBhbmRlZCAhPT0gaXNFeHBhbmRlZCkge1xuICAgICAgaWYgKHdhc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVFeHBhbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2hhbmRsZUV4cGFuZDogZnVuY3Rpb24gX2hhbmRsZUV4cGFuZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpcy5fcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gICAgICAvLyByZW1vdmUgZGltZW5zaW9uIHZhbHVlIC0gdGhpcyBlbnN1cmVzIHRoZSBjb2xsYXBzaWJsZSBpdGVtIGNhbiBncm93XG4gICAgICAvLyBpbiBkaW1lbnNpb24gYWZ0ZXIgaW5pdGlhbCBkaXNwbGF5IChzdWNoIGFzIGFuIGltYWdlIGxvYWRpbmcpXG4gICAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2luZzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVDb2xsYXBzZTogZnVuY3Rpb24gX2hhbmRsZUNvbGxhcHNlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpczIuX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2luZzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9hZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBfYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSkge1xuICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIF9yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKSB7XG4gICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgfSxcblxuICBkaW1lbnNpb246IGZ1bmN0aW9uIGRpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuZ2V0Q29sbGFwc2libGVEaW1lbnNpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uKCkgOiAnaGVpZ2h0JztcbiAgfSxcblxuICBpc0V4cGFuZGVkOiBmdW5jdGlvbiBpc0V4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmV4cGFuZGVkIDogdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZUNsYXNzU2V0OiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZUNsYXNzU2V0KGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKHN1YkNsYXNzZXMpIHtcbiAgICAgICAgaWYgKHN1YkNsYXNzZXMpIHtcbiAgICAgICAgICBjbGFzc2VzW3N1YkNsYXNzZXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xhc3Nlcy5jb2xsYXBzaW5nID0gdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuICAgIGNsYXNzZXMuY29sbGFwc2UgPSAhdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuICAgIGNsYXNzZXNbJ2luJ10gPSB0aGlzLmlzRXhwYW5kZWQoKSAmJiAhdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbGxhcHNpYmxlTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0NvbGxhcHNpYmxlTWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGlvbldhcm5pbmc7XG5cbnZhciBfcmVhY3RMaWJXYXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcblxudmFyIF9yZWFjdExpYldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RMaWJXYXJuaW5nKTtcblxuZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKG9sZG5hbWUsIG5ld25hbWUsIGxpbmspIHtcbiAgdmFyIG1lc3NhZ2UgPSBvbGRuYW1lICsgJyBpcyBkZXByZWNhdGVkLiBVc2UgJyArIG5ld25hbWUgKyAnIGluc3RlYWQuJztcblxuICBpZiAobGluaykge1xuICAgIG1lc3NhZ2UgKz0gJ1xcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0ICcgKyBsaW5rO1xuICB9XG5cbiAgX3JlYWN0TGliV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgbWVzc2FnZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB3YXJuaW5nXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vZW1wdHlGdW5jdGlvblwiKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCApIHtmb3IgKHZhciBhcmdzPVtdLCRfXzA9MiwkX18xPWFyZ3VtZW50cy5sZW5ndGg7JF9fMDwkX18xOyRfXzArKykgYXJncy5wdXNoKGFyZ3VtZW50c1skX18wXSk7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgL15bc1xcV10qJC8udGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgIHtyZXR1cm4gYXJnc1thcmdJbmRleCsrXTt9KTtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvd2FybmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGVtcHR5RnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uKGFyZykgeyByZXR1cm4gYXJnOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvZW1wdHlGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzZSA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBDb2xsYXBzaWJsZU5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ29sbGFwc2libGVOYXYnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvKlxuICAgICAqIHRoaXMucHJvcHMuY29sbGFwc2libGUgaXMgc2V0IGluIE5hdkJhciB3aGVuIGFuIGV2ZW50S2V5IGlzIHN1cHBsaWVkLlxuICAgICAqL1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/ICduYXZiYXItY29sbGFwc2UnIDogbnVsbDtcbiAgICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZU5hdkNoaWxkcmVuIDogdGhpcy5yZW5kZXJDaGlsZHJlbjtcblxuICAgIHZhciBuYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBldmVudEtleTogdGhpcy5wcm9wcy5ldmVudEtleSwgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzaWJsZSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQ29sbGFwc2UyWydkZWZhdWx0J10sXG4gICAgICAgIHsgJ2luJzogdGhpcy5wcm9wcy5leHBhbmRlZCB9LFxuICAgICAgICBuYXZcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4O1xuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgcmVmOiAnbm9jb2xsYXBzZV8nICsga2V5LFxuICAgICAga2V5OiBrZXksXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXg7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgYWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleSxcbiAgICAgIGFjdGl2ZUhyZWY6IHRoaXMucHJvcHMuYWN0aXZlSHJlZixcbiAgICAgIG9uU2VsZWN0OiBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10oY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAgcmVmOiAnY29sbGFwc2libGVfJyArIGtleSxcbiAgICAgIGtleToga2V5LFxuICAgICAgbmF2SXRlbTogdHJ1ZVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29sbGFwc2libGVOYXY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0NvbGxhcHNpYmxlTmF2LmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpWydkZWZhdWx0J107XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKTtcbn07XG5cbi8vIHJlYWRpbmcgYSBkaW1lbnNpb24gcHJvcCB3aWxsIGNhdXNlIHRoZSBicm93c2VyIHRvIHJlY2FsY3VsYXRlLFxuLy8gd2hpY2ggd2lsbCBsZXQgb3VyIGFuaW1hdGlvbnMgd29ya1xudmFyIHRyaWdnZXJCcm93c2VyUmVmbG93ID0gZnVuY3Rpb24gdHJpZ2dlckJyb3dzZXJSZWZsb3cobm9kZSkge1xuICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQ7XG59O1xuXG52YXIgTUFSR0lOUyA9IHtcbiAgaGVpZ2h0OiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgd2lkdGg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddXG59O1xuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25WYWx1ZShkaW1lbnNpb24sIGVsZW0pIHtcbiAgdmFyIHZhbHVlID0gZWxlbVsnb2Zmc2V0JyArIGNhcGl0YWxpemUoZGltZW5zaW9uKV07XG4gIHZhciBjb21wdXRlZFN0eWxlcyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldENvbXB1dGVkU3R5bGVzKGVsZW0pO1xuICB2YXIgbWFyZ2lucyA9IE1BUkdJTlNbZGltZW5zaW9uXTtcblxuICByZXR1cm4gdmFsdWUgKyBwYXJzZUludChjb21wdXRlZFN0eWxlc1ttYXJnaW5zWzBdXSwgMTApICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXNbbWFyZ2luc1sxXV0sIDEwKTtcbn1cblxudmFyIENvbGxhcHNlID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2xsYXBzZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sbGFwc2UocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGFwc2UpO1xuXG4gICAgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMub25FbnRlckxpc3RlbmVyID0gdGhpcy5oYW5kbGVFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FbnRlcmluZ0xpc3RlbmVyID0gdGhpcy5oYW5kbGVFbnRlcmluZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FbnRlcmVkTGlzdGVuZXIgPSB0aGlzLmhhbmRsZUVudGVyZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRXhpdExpc3RlbmVyID0gdGhpcy5oYW5kbGVFeGl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV4aXRpbmdMaXN0ZW5lciA9IHRoaXMuaGFuZGxlRXhpdGluZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRXhwbGljaXRseSBjb3BpZWQgZnJvbSBUcmFuc2l0aW9uIGZvciBkb2MgZ2VuZXJhdGlvbi5cbiAgLy8gVE9ETzogUmVtb3ZlIGR1cGxpY2F0aW9uIG9uY2UgIzk3NyBpcyByZXNvbHZlZC5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBlbnRlciA9IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSh0aGlzLm9uRW50ZXJMaXN0ZW5lciwgdGhpcy5wcm9wcy5vbkVudGVyKTtcbiAgICB2YXIgZW50ZXJpbmcgPSBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10odGhpcy5vbkVudGVyaW5nTGlzdGVuZXIsIHRoaXMucHJvcHMub25FbnRlcmluZyk7XG4gICAgdmFyIGVudGVyZWQgPSBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10odGhpcy5vbkVudGVyZWRMaXN0ZW5lciwgdGhpcy5wcm9wcy5vbkVudGVyZWQpO1xuICAgIHZhciBleGl0ID0gX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKHRoaXMub25FeGl0TGlzdGVuZXIsIHRoaXMucHJvcHMub25FeGl0KTtcbiAgICB2YXIgZXhpdGluZyA9IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSh0aGlzLm9uRXhpdGluZ0xpc3RlbmVyLCB0aGlzLnByb3BzLm9uRXhpdGluZyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfVHJhbnNpdGlvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiAndHJhbnNpdGlvbidcbiAgICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLnByb3BzWydpbiddLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuX2RpbWVuc2lvbigpID09PSAnd2lkdGgnID8gJ3dpZHRoJyA6ICcnLFxuICAgICAgICBleGl0ZWRDbGFzc05hbWU6ICdjb2xsYXBzZScsXG4gICAgICAgIGV4aXRpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgICAgZW50ZXJlZENsYXNzTmFtZTogJ2NvbGxhcHNlIGluJyxcbiAgICAgICAgZW50ZXJpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgICAgb25FbnRlcjogZW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmc6IGVudGVyaW5nLFxuICAgICAgICBvbkVudGVyZWQ6IGVudGVyZWQsXG4gICAgICAgIG9uRXhpdDogZXhpdCxcbiAgICAgICAgb25FeGl0aW5nOiBleGl0aW5nLFxuICAgICAgICBvbkV4aXRlZDogdGhpcy5wcm9wcy5vbkV4aXRlZFxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICAvKiAtLSBFeHBhbmRpbmcgLS0gKi9cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuXG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZ2V0U2Nyb2xsRGltZW5zaW9uVmFsdWUoZWxlbSwgZGltZW5zaW9uKTtcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyZWQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSBudWxsO1xuICB9O1xuXG4gIC8qIC0tIENvbGxhcHNpbmcgLS0gKi9cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRXhpdCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcblxuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMucHJvcHMuZ2V0RGltZW5zaW9uVmFsdWUoZGltZW5zaW9uLCBlbGVtKSArICdweCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiBoYW5kbGVFeGl0aW5nKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG5cbiAgICB0cmlnZ2VyQnJvd3NlclJlZmxvdyhlbGVtKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSAnMCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLl9kaW1lbnNpb24gPSBmdW5jdGlvbiBfZGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy5kaW1lbnNpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLnByb3BzLmRpbWVuc2lvbigpIDogdGhpcy5wcm9wcy5kaW1lbnNpb247XG4gIH07XG5cbiAgLy9mb3IgdGVzdGluZ1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5fZ2V0VHJhbnNpdGlvbkluc3RhbmNlID0gZnVuY3Rpb24gX2dldFRyYW5zaXRpb25JbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZzLnRyYW5zaXRpb247XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLl9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZSA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZShlbGVtLCBkaW1lbnNpb24pIHtcbiAgICByZXR1cm4gZWxlbVsnc2Nyb2xsJyArIGNhcGl0YWxpemUoZGltZW5zaW9uKV0gKyAncHgnO1xuICB9O1xuXG4gIHJldHVybiBDb2xsYXBzZTtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBleHBhbmQgb3IgY29sbGFwc2UgYW5pbWF0aW9uXG4gICAqL1xuICAnaW4nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGhlIGNvbXBvbmVudCAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiBpdCBpcyBjb2xsYXBzZWRcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUnVuIHRoZSBleHBhbmQgYW5pbWF0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMsIGlmIGl0IGlzIGluaXRpYWxseVxuICAgKiBzaG93blxuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgY29sbGFwc2UgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXRcbiAgICogZmluaXNoaW5nIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZFxuICAgKiBldmVudHMgYXJlIGNhbmNlbGVkXG4gICAqL1xuICBkdXJhdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGV4cGFuZHNcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGV4cGFuZFxuICAgKi9cbiAgb25FbnRlcmluZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZXhwYW5kZWRcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgY29sbGFwc2VzXG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGNvbGxhcHNlZFxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGRpbWVuc2lvbiB1c2VkIHdoZW4gY29sbGFwc2luZywgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAqIGRpbWVuc2lvblxuICAgKlxuICAgKiBfTm90ZTogQm9vdHN0cmFwIG9ubHkgcGFydGlhbGx5IHN1cHBvcnRzICd3aWR0aCchXG4gICAqIFlvdSB3aWxsIG5lZWQgdG8gc3VwcGx5IHlvdXIgb3duIENTUyBhbmltYXRpb24gZm9yIHRoZSBgLndpZHRoYCBDU1MgY2xhc3MuX1xuICAgKi9cbiAgZGltZW5zaW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2hlaWdodCcsICd3aWR0aCddKSwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgaGVpZ2h0IG9yIHdpZHRoIG9mIHRoZSBhbmltYXRpbmcgRE9NIG5vZGVcbiAgICpcbiAgICogQWxsb3dzIGZvciBwcm92aWRpbmcgc29tZSBjdXN0b20gbG9naWMgZm9yIGhvdyBtdWNoIHRoZSBDb2xsYXBzZSBjb21wb25lbnRcbiAgICogc2hvdWxkIGFuaW1hdGUgaW4gaXRzIHNwZWNpZmllZCBkaW1lbnNpb24uIENhbGxlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAqIGRpbWVuc2lvbiBwcm9wIHZhbHVlIGFuZCB0aGUgRE9NIG5vZGUuXG4gICAqL1xuICBnZXREaW1lbnNpb25WYWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG59O1xuXG5Db2xsYXBzZS5kZWZhdWx0UHJvcHMgPSB7XG4gICdpbic6IGZhbHNlLFxuICBkdXJhdGlvbjogMzAwLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG5cbiAgZGltZW5zaW9uOiAnaGVpZ2h0JyxcbiAgZ2V0RGltZW5zaW9uVmFsdWU6IGdldERpbWVuc2lvblZhbHVlXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2xsYXBzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sbGFwc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX09iamVjdCRrZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgVU5NT1VOVEVEID0gMDtcbmV4cG9ydHMuVU5NT1VOVEVEID0gVU5NT1VOVEVEO1xudmFyIEVYSVRFRCA9IDE7XG5leHBvcnRzLkVYSVRFRCA9IEVYSVRFRDtcbnZhciBFTlRFUklORyA9IDI7XG5leHBvcnRzLkVOVEVSSU5HID0gRU5URVJJTkc7XG52YXIgRU5URVJFRCA9IDM7XG5leHBvcnRzLkVOVEVSRUQgPSBFTlRFUkVEO1xudmFyIEVYSVRJTkcgPSA0O1xuXG5leHBvcnRzLkVYSVRJTkcgPSBFWElUSU5HO1xuXG52YXIgVHJhbnNpdGlvbiA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uKTtcblxuICAgIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG5cbiAgICB2YXIgaW5pdGlhbFN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICBpZiAocHJvcHNbJ2luJ10pIHtcbiAgICAgIC8vIFN0YXJ0IGVudGVyIHRyYW5zaXRpb24gaW4gY29tcG9uZW50RGlkTW91bnQuXG4gICAgICBpbml0aWFsU3RhdHVzID0gcHJvcHMudHJhbnNpdGlvbkFwcGVhciA/IEVYSVRFRCA6IEVOVEVSRUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxTdGF0dXMgPSBwcm9wcy51bm1vdW50T25FeGl0ID8gVU5NT1VOVEVEIDogRVhJVEVEO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0geyBzdGF0dXM6IGluaXRpYWxTdGF0dXMgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgfVxuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhciAmJiB0aGlzLnByb3BzWydpbiddKSB7XG4gICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIGlmIChuZXh0UHJvcHNbJ2luJ10pIHtcbiAgICAgIGlmIChzdGF0dXMgPT09IEVYSVRJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobmV4dFByb3BzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0KSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgICAgIC8vIFN0YXJ0IGVudGVyIHRyYW5zaXRpb24gaW4gY29tcG9uZW50RGlkVXBkYXRlLlxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihuZXh0UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UncmUgYWxyZWFkeSBlbnRlcmluZyBvciBlbnRlcmVkLlxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUV4aXQobmV4dFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSdyZSBhbHJlYWR5IGV4aXRlZCBvciBleGl0aW5nLlxuICAgICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIC8vIEVYSVRFRCBpcyBhbHdheXMgYSB0cmFuc2l0aW9uYWwgc3RhdGUgdG8gZWl0aGVyIEVOVEVSSU5HIG9yIFVOTU9VTlRFRFxuICAgICAgLy8gd2hlbiB1c2luZyB1bm1vdW50T25FeGl0LlxuICAgICAgaWYgKHRoaXMucHJvcHNbJ2luJ10pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBVTk1PVU5URUQgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIC8vIE5vdCB0aGlzLnByb3BzLCBiZWNhdXNlIHdlIG1pZ2h0IGJlIGFib3V0IHRvIHJlY2VpdmUgbmV3IHByb3BzLlxuICAgIHByb3BzLm9uRW50ZXIobm9kZSk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhub2RlKTtcblxuICAgICAgX3RoaXMub25UcmFuc2l0aW9uRW5kKG5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUkVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChwcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIC8vIE5vdCB0aGlzLnByb3BzLCBiZWNhdXNlIHdlIG1pZ2h0IGJlIGFib3V0IHRvIHJlY2VpdmUgbmV3IHByb3BzLlxuICAgIHByb3BzLm9uRXhpdChub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElUSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzMy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aGlzLnByb3BzLmR1cmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgX09iamVjdCRrZXlzKFRyYW5zaXRpb24ucHJvcFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgY2hpbGRQcm9wc1trZXldO1xuICAgIH0pO1xuXG4gICAgdmFyIHRyYW5zaXRpb25DbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leGl0ZWRDbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5lbnRlcmluZ0NsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZW50ZXJlZENsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRVhJVElORykge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZXhpdGluZ0NsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQoY2hpbGQsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lLCB0cmFuc2l0aW9uQ2xhc3NOYW1lKVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgYW5pbWF0aW9uXG4gICAqL1xuICAnaW4nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGhlIGNvbXBvbmVudCAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiBpdCBpcyBub3Qgc2hvd25cbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUnVuIHRoZSBlbnRlciBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XG4gICAqIHNob3duXG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLCB0byBlbnN1cmUgdGhhdCBmaW5pc2hpbmdcbiAgICogY2FsbGJhY2tzIGFyZSBmaXJlZCBldmVuIGlmIHRoZSBvcmlnaW5hbCBicm93c2VyIHRyYW5zaXRpb24gZW5kIGV2ZW50cyBhcmVcbiAgICogY2FuY2VsZWRcbiAgICovXG4gIGR1cmF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQ1NTIGNsYXNzIG9yIGNsYXNzZXMgYXBwbGllZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZXhpdGVkXG4gICAqL1xuICBleGl0ZWRDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQ1NTIGNsYXNzIG9yIGNsYXNzZXMgYXBwbGllZCB3aGlsZSB0aGUgY29tcG9uZW50IGlzIGV4aXRpbmdcbiAgICovXG4gIGV4aXRpbmdDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQ1NTIGNsYXNzIG9yIGNsYXNzZXMgYXBwbGllZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZW50ZXJlZFxuICAgKi9cbiAgZW50ZXJlZENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBDU1MgY2xhc3Mgb3IgY2xhc3NlcyBhcHBsaWVkIHdoaWxlIHRoZSBjb21wb25lbnQgaXMgZW50ZXJpbmdcbiAgICovXG4gIGVudGVyaW5nQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgY2xhc3NlcyBhcmUgYXBwbGllZFxuICAgKi9cbiAgb25FbnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJpbmdcIiBjbGFzc2VzIGFyZSBhcHBsaWVkXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlclwiIGNsYXNzZXMgYXJlIGFwcGxpZWRcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBjbGFzc2VzIGFyZSBhcHBsaWVkXG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRpbmdcIiBjbGFzc2VzIGFyZSBhcHBsaWVkXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIGNsYXNzZXMgYXJlIGFwcGxpZWRcbiAgICovXG4gIG9uRXhpdGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgJ2luJzogZmFsc2UsXG4gIGR1cmF0aW9uOiAzMDAsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcblxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG5cbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUcmFuc2l0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvVHJhbnNpdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYgIT0gbnVsbDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGYpIHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIG51bGwpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzIsIHtpZ25vcmU6IFwiYnNTaXplXCJ9XSAqL1xuLyogQm9vdHN0cmFwTWl4aW4gY29udGFpbnMgYGJzU2l6ZWAgdHlwZSB2YWxpZGF0aW9uICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9Ecm9wZG93bk1lbnUgPSByZXF1aXJlKCcuL0Ryb3Bkb3duTWVudScpO1xuXG52YXIgX0Ryb3Bkb3duTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bk1lbnUpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgRHJvcGRvd25CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Ecm9wZG93blN0YXRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRyb3B1cDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG5hdkl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBub0NhcmV0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYnV0dG9uQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGVcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyTWV0aG9kID0gdGhpcy5wcm9wcy5uYXZJdGVtID8gJ3JlbmRlck5hdkl0ZW0nIDogJ3JlbmRlckJ1dHRvbkdyb3VwJztcblxuICAgIHZhciBjYXJldCA9IHRoaXMucHJvcHMubm9DYXJldCA/IG51bGwgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBcImNhcmV0XCIgfSk7XG5cbiAgICByZXR1cm4gdGhpc1tyZW5kZXJNZXRob2RdKFtfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IFwiZHJvcGRvd25CdXR0b25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSgnZHJvcGRvd24tdG9nZ2xlJywgdGhpcy5wcm9wcy5idXR0b25DbGFzc05hbWUpLFxuICAgICAgICBvbkNsaWNrOiBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10odGhpcy5wcm9wcy5vbkNsaWNrLCB0aGlzLmhhbmRsZURyb3Bkb3duQ2xpY2spLFxuICAgICAgICBrZXk6IDAsXG4gICAgICAgIG5hdkRyb3Bkb3duOiB0aGlzLnByb3BzLm5hdkl0ZW0sXG4gICAgICAgIG5hdkl0ZW06IG51bGwsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBwdWxsUmlnaHQ6IG51bGwsXG4gICAgICAgIGRyb3B1cDogbnVsbCB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAnICcsXG4gICAgICBjYXJldFxuICAgICksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0Ryb3Bkb3duTWVudTJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcIm1lbnVcIixcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHB1bGxSaWdodDogdGhpcy5wcm9wcy5wdWxsUmlnaHQsXG4gICAgICAgIGtleTogMSB9LFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJNZW51SXRlbSlcbiAgICApXSk7XG4gIH0sXG5cbiAgcmVuZGVyQnV0dG9uR3JvdXA6IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbkdyb3VwKGNoaWxkcmVuKSB7XG4gICAgdmFyIGdyb3VwQ2xhc3NlcyA9IHtcbiAgICAgICdvcGVuJzogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgJ2Ryb3B1cCc6IHRoaXMucHJvcHMuZHJvcHVwXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b25Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgYnNTaXplOiB0aGlzLnByb3BzLmJzU2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgZ3JvdXBDbGFzc2VzKSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGRyZW4pIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bic6IHRydWUsXG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1lbnVJdGVtOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgb3B0aW9uIHNlbGVjdGlvbiBpZiBhbiBvblNlbGVjdCBwcm9wIGhhcyBiZWVuIHNldCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgb3IgaXQncyBjaGlsZCwgdGhpcyBhbGxvd3MgYSB1c2VyIG5vdCB0byBwYXNzIGFuIG9uU2VsZWN0XG4gICAgLy8gaGFuZGxlciBhbmQgaGF2ZSB0aGUgYnJvd3NlciBwcmVmb3JtIHRoZSBkZWZhdWx0IGFjdGlvbi5cbiAgICB2YXIgaGFuZGxlT3B0aW9uU2VsZWN0ID0gdGhpcy5wcm9wcy5vblNlbGVjdCB8fCBjaGlsZC5wcm9wcy5vblNlbGVjdCA/IHRoaXMuaGFuZGxlT3B0aW9uU2VsZWN0IDogbnVsbDtcblxuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAvLyBDYXB0dXJlIG9uU2VsZWN0IGV2ZW50c1xuICAgICAgb25TZWxlY3Q6IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXShjaGlsZC5wcm9wcy5vblNlbGVjdCwgaGFuZGxlT3B0aW9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVEcm9wZG93bkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVEcm9wZG93bkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoIXRoaXMuc3RhdGUub3Blbik7XG4gIH0sXG5cbiAgaGFuZGxlT3B0aW9uU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVPcHRpb25TZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25CdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duQnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgbm9kZSBpcyB3aXRoaW5cbiAqIGEgcm9vdCBub2RlcyB0cmVlXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHJvb3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIGlzTm9kZUluUm9vdChub2RlLCByb290KSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgRHJvcGRvd25TdGF0ZU1peGluID0ge1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHNldERyb3Bkb3duU3RhdGU6IGZ1bmN0aW9uIHNldERyb3Bkb3duU3RhdGUobmV3U3RhdGUsIG9uU3RhdGVDaGFuZ2VDb21wbGV0ZSkge1xuICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgdGhpcy5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogbmV3U3RhdGVcbiAgICB9LCBvblN0YXRlQ2hhbmdlQ29tcGxldGUpO1xuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEb2N1bWVudENsaWNrOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAvLyBJZiB0aGUgY2xpY2sgb3JpZ2luYXRlZCBmcm9tIHdpdGhpbiB0aGlzIGNvbXBvbmVudFxuICAgIC8vIGRvbid0IGRvIGFueXRoaW5nLlxuICAgIC8vIGUuc3JjRWxlbWVudCBpcyByZXF1aXJlZCBmb3IgSUU4IGFzIGUudGFyZ2V0IGlzIHVuZGVmaW5lZFxuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgaWYgKGlzTm9kZUluUm9vdCh0YXJnZXQsIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9LFxuXG4gIGJpbmRSb290Q2xvc2VIYW5kbGVyczogZnVuY3Rpb24gYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuXG4gICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdrZXl1cCcsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG4gIH0sXG5cbiAgdW5iaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25TdGF0ZU1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Ecm9wZG93blN0YXRlTWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgRHJvcGRvd25NZW51ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdEcm9wZG93bk1lbnUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bi1tZW51JzogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1tZW51LXJpZ2h0JzogdGhpcy5wcm9wcy5wdWxsUmlnaHRcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByb2xlOiBcIm1lbnVcIiB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTWVudUl0ZW0pXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNZW51SXRlbTogZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIC8vIENhcHR1cmUgb25TZWxlY3QgZXZlbnRzXG4gICAgICBvblNlbGVjdDogX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcblxuICAgICAgLy8gRm9yY2Ugc3BlY2lhbCBwcm9wcyB0byBiZSB0cmFuc2ZlcnJlZFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25NZW51O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Ecm9wZG93bk1lbnUuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZycpO1xuXG4vLyBUT0RPOiBsaXN0ZW4gZm9yIG9uVHJhbnNpdGlvbkVuZCB0byByZW1vdmUgZWxcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyk7XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzQW5kU2VsZihyb290LCBjbGFzc2VzKSB7XG4gIHZhciBlbHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY2xhc3Nlcy5qb2luKCcuJykpO1xuXG4gIGVscyA9IFtdLm1hcC5jYWxsKGVscywgZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFyb290LmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc2VzW2ldICsgJ1xcXFxiJykpKSB7XG4gICAgICByZXR1cm4gZWxzO1xuICAgIH1cbiAgfVxuICBlbHMudW5zaGlmdChyb290KTtcbiAgcmV0dXJuIGVscztcbn1cblxudmFyIHdhcm5lZCA9IGZhbHNlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10oJ0ZhZGVNaXhpbicsICdGYWRlIENvbXBvbmVudCcpO1xuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZhZGVJbjogZnVuY3Rpb24gX2ZhZGVJbigpIHtcbiAgICB2YXIgZWxzID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIFsnZmFkZSddKTtcblxuICAgICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgaW4nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2ZhZGVPdXQ6IGZ1bmN0aW9uIF9mYWRlT3V0KCkge1xuICAgIHZhciBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYodGhpcy5fZmFkZU91dEVsLCBbJ2ZhZGUnLCAnaW4nXSk7XG5cbiAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJpblxcYi8sICcnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQodGhpcy5faGFuZGxlRmFkZU91dEVuZCwgMzAwKTtcbiAgfSxcblxuICBfaGFuZGxlRmFkZU91dEVuZDogZnVuY3Rpb24gX2hhbmRsZUZhZGVPdXRFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2ZhZGVPdXRFbCAmJiB0aGlzLl9mYWRlT3V0RWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5fZmFkZU91dEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZmFkZU91dEVsKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICAvLyBGaXJlZm94IG5lZWRzIGRlbGF5IGZvciB0cmFuc2l0aW9uIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgc2V0VGltZW91dCh0aGlzLl9mYWRlSW4sIDIwKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBbJ2ZhZGUnXSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGFpbmVyICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKS5ib2R5O1xuXG4gICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZhZGVPdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2ZhZGVPdXRFbCk7XG4gICAgICB0aGlzLl9mYWRlT3V0RWwuYXBwZW5kQ2hpbGQoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAvLyBGaXJlZm94IG5lZWRzIGRlbGF5IGZvciB0cmFuc2l0aW9uIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgc2V0VGltZW91dCh0aGlzLl9mYWRlT3V0LCAyMCk7XG4gICAgfVxuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9GYWRlTWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgR3JpZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnR3JpZCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogVHVybiBhbnkgZml4ZWQtd2lkdGggZ3JpZCBsYXlvdXQgaW50byBhIGZ1bGwtd2lkdGggbGF5b3V0IGJ5IHRoaXMgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBBZGRzIGBjb250YWluZXItZmx1aWRgIGNsYXNzLlxuICAgICAqL1xuICAgIGZsdWlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB1c2UgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnZGl2J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcic7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSkgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEdyaWQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0dyaWQuanNcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLXdpbGRjYXJkJylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF9Gb3JtQ29udHJvbHMgPSByZXF1aXJlKCcuL0Zvcm1Db250cm9scycpO1xuXG52YXIgRm9ybUNvbnRyb2xzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0Zvcm1Db250cm9scyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZycpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nKTtcblxudmFyIElucHV0ID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIF9pbmhlcml0cyhJbnB1dCwgX0lucHV0QmFzZSk7XG5cbiAgZnVuY3Rpb24gSW5wdXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIElucHV0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSgnSW5wdXQgdHlwZT1zdGF0aWMnLCAnU3RhdGljVGV4dCcpO1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9scy5TdGF0aWMsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfSW5wdXRCYXNlLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gSW5wdXQ7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICB0eXBlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1N0YXRpYzIgPSByZXF1aXJlKCcuL1N0YXRpYycpO1xuXG52YXIgX1N0YXRpYzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0aWMyKTtcblxuZXhwb3J0cy5TdGF0aWMgPSBfU3RhdGljM1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpWydkZWZhdWx0J107XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuLi9JbnB1dEJhc2UnKTtcblxudmFyIF9JbnB1dEJhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXRCYXNlMik7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbicpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgU3RhdGljID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIF9pbmhlcml0cyhTdGF0aWMsIF9JbnB1dEJhc2UpO1xuXG4gIGZ1bmN0aW9uIFN0YXRpYygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljKTtcblxuICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIFN0YXRpYy5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4gOiB2YWx1ZTtcbiAgfTtcblxuICBTdGF0aWMucHJvdG90eXBlLnJlbmRlcklucHV0ID0gZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbC1zdGF0aWMnKSwgcmVmOiBcImlucHV0XCIsIGtleTogXCJpbnB1dFwiIH0pLFxuICAgICAgdGhpcy5nZXRWYWx1ZSgpXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gU3RhdGljO1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cblN0YXRpYy5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICBjaGlsZHJlbjogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RhdGljO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbHMvU3RhdGljLmpzXG4gKiogbW9kdWxlIGlkID0gODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vd3d3Lm5wbWpzLm9yZy9wYWNrYWdlL3JlYWN0LWludGVycG9sYXRlLWNvbXBvbmVudFxuLy8gVE9ETzogRHJvcCB0aGlzIGluIGZhdm9yIG9mIGVzNiBzdHJpbmcgaW50ZXJwb2xhdGlvblxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBSRUdFWFAgPSAvXFwlXFwoKC4rPylcXClzLztcblxudmFyIEludGVycG9sYXRlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbnRlcnBvbGF0ZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29tcG9uZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZm9ybWF0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1bnNhZmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7IGNvbXBvbmVudDogJ3NwYW4nIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcm1hdCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uaGFzVmFsaWRDb21wb25lbnQodGhpcy5wcm9wcy5jaGlsZHJlbikgfHwgdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IHRoaXMucHJvcHMuZm9ybWF0O1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudDtcbiAgICB2YXIgdW5zYWZlID0gdGhpcy5wcm9wcy51bnNhZmUgPT09IHRydWU7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNoaWxkcmVuO1xuICAgIGRlbGV0ZSBwcm9wcy5mb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcbiAgICBkZWxldGUgcHJvcHMudW5zYWZlO1xuXG4gICAgaWYgKHVuc2FmZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBmb3JtYXQuc3BsaXQoUkVHRVhQKS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIG1hdGNoLCBpbmRleCkge1xuICAgICAgICB2YXIgaHRtbCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgaHRtbCA9IG1hdGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSBwcm9wc1ttYXRjaF07XG4gICAgICAgICAgZGVsZXRlIHByb3BzW21hdGNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoaHRtbCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBpbnRlcnBvbGF0ZSBhIFJlYWN0IGNvbXBvbmVudCBpbnRvIHVuc2FmZSB0ZXh0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vICs9IGh0bWw7XG5cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCAnJyk7XG5cbiAgICAgIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0geyBfX2h0bWw6IGNvbnRlbnQgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHBhcmVudCwgcHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2lkcyA9IGZvcm1hdC5zcGxpdChSRUdFWFApLnJlZHVjZShmdW5jdGlvbiAobWVtbywgbWF0Y2gsIGluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBtYXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZCA9IHByb3BzW21hdGNoXTtcbiAgICAgICAgICBkZWxldGUgcHJvcHNbbWF0Y2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVtby5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHBhcmVudCwgcHJvcHMsIGtpZHMpO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEludGVycG9sYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9JbnRlcnBvbGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBKdW1ib3Ryb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0p1bWJvdHJvbicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiB1c2UgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHsgY29tcG9uZW50Q2xhc3M6ICdkaXYnIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2p1bWJvdHJvbicpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBKdW1ib3Ryb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0p1bWJvdHJvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIExhYmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMYWJlbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2xhYmVsJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMYWJlbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvTGFiZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBMaXN0R3JvdXAgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExpc3RHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdEdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0R3JvdXApO1xuXG4gICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgTGlzdEdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBpdGVtcyA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwgeyBrZXk6IGl0ZW0ua2V5ID8gaXRlbS5rZXkgOiBpbmRleCB9KTtcbiAgICB9KTtcblxuICAgIHZhciBjaGlsZHJlbkFuY2hvcnMgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGl2KGl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChfdGhpcy5pc0FuY2hvcihjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgICBjaGlsZHJlbkFuY2hvcnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW5BbmNob3JzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJEaXYoaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJVTChpdGVtcyk7XG4gICAgfVxuICB9O1xuXG4gIExpc3RHcm91cC5wcm90b3R5cGUuaXNBbmNob3IgPSBmdW5jdGlvbiBpc0FuY2hvcihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5ocmVmIHx8IHByb3BzLm9uQ2xpY2s7XG4gIH07XG5cbiAgTGlzdEdyb3VwLnByb3RvdHlwZS5yZW5kZXJVTCA9IGZ1bmN0aW9uIHJlbmRlclVMKGl0ZW1zKSB7XG4gICAgdmFyIGxpc3RJdGVtcyA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGl0ZW0sIHsgbGlzdEl0ZW06IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnKSB9KSxcbiAgICAgIGxpc3RJdGVtc1xuICAgICk7XG4gIH07XG5cbiAgTGlzdEdyb3VwLnByb3RvdHlwZS5yZW5kZXJEaXYgPSBmdW5jdGlvbiByZW5kZXJEaXYoaXRlbXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwJykgfSksXG4gICAgICBpdGVtc1xuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExpc3RHcm91cDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5MaXN0R3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX1NhZmVBbmNob3IgPSByZXF1aXJlKCcuL1NhZmVBbmNob3InKTtcblxudmFyIF9TYWZlQW5jaG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NhZmVBbmNob3IpO1xuXG52YXIgTGlzdEdyb3VwSXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTGlzdEdyb3VwSXRlbScsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnZGFuZ2VyJywgJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJ10pLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgbGlzdEl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2xpc3QtZ3JvdXAtaXRlbSdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzLmFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlO1xuICAgIGNsYXNzZXMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaHJlZiB8fCB0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckFuY2hvcihjbGFzc2VzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubGlzdEl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckxpKGNsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTcGFuKGNsYXNzZXMpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJMaTogZnVuY3Rpb24gcmVuZGVyTGkoY2xhc3Nlcykge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoY2xhc3Nlcykge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9TYWZlQW5jaG9yMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5oZWFkZXIgPyB0aGlzLnJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkgOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTcGFuOiBmdW5jdGlvbiByZW5kZXJTcGFuKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3RydWN0dXJlZENvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkge1xuICAgIHZhciBoZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLmhlYWRlcikpIHtcbiAgICAgIGhlYWRlciA9IF9yZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5oZWFkZXIsIHtcbiAgICAgICAga2V5OiAnaGVhZGVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmhlYWRlci5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0taGVhZGluZycpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgIHsga2V5OiAnaGVhZGVyJywgY2xhc3NOYW1lOiBcImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nXCIgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5oZWFkZXJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHsga2V5OiAnY29udGVudCcsIGNsYXNzTmFtZTogXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiIH0sXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHJldHVybiBbaGVhZGVyLCBjb250ZW50XTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RHcm91cEl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0uanNcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbi8qKlxuICogTm90ZTogVGhpcyBpcyBpbnRlbmRlZCBhcyBhIHN0b3AtZ2FwIGZvciBhY2Nlc3NpYmlsaXR5IGNvbmNlcm5zIHRoYXQgdGhlXG4gKiBCb290c3RyYXAgQ1NTIGRvZXMgbm90IGFkZHJlc3MgYXMgdGhleSBoYXZlIHN0eWxlZCBhbmNob3JzIGFuZCBub3QgYnV0dG9uc1xuICogaW4gbWFueSBjYXNlcy5cbiAqL1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIFNhZmVBbmNob3IgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNhZmVBbmNob3IsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNhZmVBbmNob3IocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2FmZUFuY2hvcik7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIFNhZmVBbmNob3IucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIFNhZmVBbmNob3IucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7IHJvbGU6IHRoaXMucHJvcHMuaHJlZiA/IHVuZGVmaW5lZCA6ICdidXR0b24nXG4gICAgfSwgdGhpcy5wcm9wcywge1xuICAgICAgb25DbGljazogX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKHRoaXMucHJvcHMub25DbGljaywgdGhpcy5oYW5kbGVDbGljayksXG4gICAgICBocmVmOiB0aGlzLnByb3BzLmhyZWYgfHwgJycgfSkpO1xuICB9O1xuXG4gIHJldHVybiBTYWZlQW5jaG9yO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVBbmNob3I7XG5cblNhZmVBbmNob3IucHJvcFR5cGVzID0ge1xuICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9TYWZlQW5jaG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfU2FmZUFuY2hvciA9IHJlcXVpcmUoJy4vU2FmZUFuY2hvcicpO1xuXG52YXIgX1NhZmVBbmNob3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2FmZUFuY2hvcik7XG5cbnZhciBNZW51SXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWVudUl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpdmlkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9TYWZlQW5jaG9yMlsnZGVmYXVsdCddLFxuICAgICAgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBocmVmOiB0aGlzLnByb3BzLmhyZWYsIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCB0YWJJbmRleDogXCItMVwiIH0sXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bi1oZWFkZXInOiB0aGlzLnByb3BzLmhlYWRlcixcbiAgICAgICdkaXZpZGVyJzogdGhpcy5wcm9wcy5kaXZpZGVyLFxuICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgIH07XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmhlYWRlcikge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuZGl2aWRlcikge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnJlbmRlckFuY2hvcigpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyByb2xlOiBcInByZXNlbnRhdGlvblwiLCB0aXRsZTogbnVsbCwgaHJlZjogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNZW51SXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvTWVudUl0ZW0uanNcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyplc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9PYmplY3QkaXNGcm96ZW4gPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2lzLWZyb3plbicpWydkZWZhdWx0J107XG5cbnZhciBfT2JqZWN0JGtleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF9Qb3J0YWwgPSByZXF1aXJlKCcuL1BvcnRhbCcpO1xuXG52YXIgX1BvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3J0YWwpO1xuXG52YXIgX0ZhZGUgPSByZXF1aXJlKCcuL0ZhZGUnKTtcblxudmFyIF9GYWRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGUpO1xuXG52YXIgX01vZGFsRGlhbG9nID0gcmVxdWlyZSgnLi9Nb2RhbERpYWxvZycpO1xuXG52YXIgX01vZGFsRGlhbG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsRGlhbG9nKTtcblxudmFyIF9Nb2RhbEJvZHkgPSByZXF1aXJlKCcuL01vZGFsQm9keScpO1xuXG52YXIgX01vZGFsQm9keTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEJvZHkpO1xuXG52YXIgX01vZGFsSGVhZGVyID0gcmVxdWlyZSgnLi9Nb2RhbEhlYWRlcicpO1xuXG52YXIgX01vZGFsSGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsSGVhZGVyKTtcblxudmFyIF9Nb2RhbFRpdGxlID0gcmVxdWlyZSgnLi9Nb2RhbFRpdGxlJyk7XG5cbnZhciBfTW9kYWxUaXRsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFRpdGxlKTtcblxudmFyIF9Nb2RhbEZvb3RlciA9IHJlcXVpcmUoJy4vTW9kYWxGb290ZXInKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjb3JyZWN0IGNsaWVudEhlaWdodCBvZiB0aGUgbW9kYWwgY29udGFpbmVyXG4gKiB3aGVuIHRoZSBib2R5L3dpbmRvdy9kb2N1bWVudCB5b3UgbmVlZCB0byB1c2UgdGhlIGRvY0VsZW1lbnQgY2xpZW50SGVpZ2h0XG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG52YXIgX01vZGFsRm9vdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsRm9vdGVyKTtcblxuZnVuY3Rpb24gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgY29udGV4dCkge1xuICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250ZXh0KTtcblxuICByZXR1cm4gY29udGFpbmVyID09PSBkb2MuYm9keSB8fCBjb250YWluZXIgPT09IGRvYy5kb2N1bWVudEVsZW1lbnQgPyBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcihjb250ZXh0KSB7XG4gIHJldHVybiBjb250ZXh0LnByb3BzLmNvbnRhaW5lciAmJiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUoY29udGV4dC5wcm9wcy5jb250YWluZXIpIHx8IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGV4dCkuYm9keTtcbn1cblxudmFyIGN1cnJlbnRGb2N1c0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIEZpcmVmb3ggZG9lc24ndCBoYXZlIGEgZm9jdXNpbiBldmVudCBzbyB1c2luZyBjYXB0dXJlIGlzIGVhc2llc3Qgd2F5IHRvIGdldCBidWJibGluZ1xuICogSUU4IGNhbid0IGRvIGFkZEV2ZW50TGlzdGVuZXIsIGJ1dCBkb2VzIGhhdmUgb25mb2N1c2luLCBzbyB3ZSB1c2UgdGhhdCBpbiBpZThcbiAqXG4gKiBXZSBvbmx5IGFsbG93IG9uZSBMaXN0ZW5lciBhdCBhIHRpbWUgdG8gYXZvaWQgc3RhY2sgb3ZlcmZsb3dzXG4gKlxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fEhUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxuICovXG5mdW5jdGlvbiBvbkZvY3VzKGNvbnRleHQsIGhhbmRsZXIpIHtcbiAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGV4dCk7XG4gIHZhciB1c2VGb2N1c2luID0gIWRvYy5hZGRFdmVudExpc3RlbmVyO1xuICB2YXIgcmVtb3ZlID0gdW5kZWZpbmVkO1xuXG4gIGlmIChjdXJyZW50Rm9jdXNMaXN0ZW5lcikge1xuICAgIGN1cnJlbnRGb2N1c0xpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgaWYgKHVzZUZvY3VzaW4pIHtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25mb2N1c2luJywgaGFuZGxlcik7XG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRldGFjaEV2ZW50KCdvbmZvY3VzaW4nLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlciwgdHJ1ZSk7XG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlciwgdHJ1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIGN1cnJlbnRGb2N1c0xpc3RlbmVyID0geyByZW1vdmU6IHJlbW92ZSB9O1xuXG4gIHJldHVybiBjdXJyZW50Rm9jdXNMaXN0ZW5lcjtcbn1cblxudmFyIHNjcm9sbGJhclNpemUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemUoKSB7XG4gIGlmIChzY3JvbGxiYXJTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gc2Nyb2xsYmFyU2l6ZTtcbiAgfVxuXG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzY3JvbGxEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzY3JvbGxEaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuXG4gIHNjcm9sbERpdiA9IG51bGw7XG4gIHJldHVybiBzY3JvbGxiYXJTaXplO1xufVxuXG52YXIgTW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsJyxcblxuICBwcm9wVHlwZXM6IF9leHRlbmRzKHt9LCBfUG9ydGFsMlsnZGVmYXVsdCddLnByb3BUeXBlcywgX01vZGFsRGlhbG9nMlsnZGVmYXVsdCddLnByb3BUeXBlcywge1xuXG4gICAgLyoqXG4gICAgICogSW5jbHVkZSBhIGJhY2tkcm9wIGNvbXBvbmVudC4gU3BlY2lmeSAnc3RhdGljJyBmb3IgYSBiYWNrZHJvcCB0aGF0IGRvZXNuJ3QgdHJpZ2dlciBhbiBcIm9uSGlkZVwiIHdoZW4gY2xpY2tlZC5cbiAgICAgKi9cbiAgICBiYWNrZHJvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYycsIHRydWUsIGZhbHNlXSksXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAgICovXG4gICAga2V5Ym9hcmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE9wZW4gYW5kIGNsb3NlIHRoZSBNb2RhbCB3aXRoIGEgc2xpZGUgYW5kIGZhZGUgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQSBDb21wb25lbnQgdHlwZSB0aGF0IHByb3ZpZGVzIHRoZSBtb2RhbCBjb250ZW50IE1hcmt1cC4gVGhpcyBpcyBhIHVzZWZ1bCBwcm9wIHdoZW4geW91IHdhbnQgdG8gdXNlIHlvdXIgb3duXG4gICAgICogc3R5bGVzIGFuZCBtYXJrdXAgdG8gY3JlYXRlIGEgY3VzdG9tIG1vZGFsIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBkaWFsb2dDb21wb25lbnQ6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZCByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGZhbHNlIGFzIGl0IG1ha2VzIHRoZSBNb2RhbCBsZXNzIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4tcmVhZGVycy5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBNb2RhbCB3aGlsZSBvcGVuLlxuICAgICAqIENvbnNpZGVyIGxlYXZpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZSwgYXMgaXQgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhlIE1vZGFsIHdvcmsgd2VsbCB3aXRoIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsXG4gICAgICogc3VjaCBhcyBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBlbmZvcmNlRm9jdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9KSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ21vZGFsJyxcbiAgICAgIGRpYWxvZ0NvbXBvbmVudDogX01vZGFsRGlhbG9nMlsnZGVmYXVsdCddLFxuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGtleWJvYXJkOiB0cnVlLFxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgZW5mb3JjZUZvY3VzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4geyBleGl0ZWQ6ICF0aGlzLnByb3BzLnNob3cgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb247XG4gICAgdmFyIGJhY2tkcm9wID0gX3Byb3BzLmJhY2tkcm9wO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjaGlsZHJlbicsICdhbmltYXRpb24nLCAnYmFja2Ryb3AnXSk7XG5cbiAgICB2YXIgb25FeGl0ID0gcHJvcHMub25FeGl0O1xuICAgIHZhciBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgdmFyIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyO1xuICAgIHZhciBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZztcbiAgICB2YXIgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkO1xuXG4gICAgdmFyIHNob3cgPSAhIXByb3BzLnNob3c7XG4gICAgdmFyIERpYWxvZyA9IHByb3BzLmRpYWxvZ0NvbXBvbmVudDtcblxuICAgIHZhciBtb3VudE1vZGFsID0gc2hvdyB8fCBhbmltYXRpb24gJiYgIXRoaXMuc3RhdGUuZXhpdGVkO1xuICAgIGlmICghbW91bnRNb2RhbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBEaWFsb2csXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgcmVmOiB0aGlzLl9zZXREaWFsb2dSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10oeyAnaW4nOiBzaG93ICYmICFhbmltYXRpb24gfSksXG4gICAgICAgIG9uQ2xpY2s6IGJhY2tkcm9wID09PSB0cnVlID8gdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrIDogbnVsbFxuICAgICAgfSksXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKVxuICAgICk7XG5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICBtb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRmFkZTJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcbiAgICAgICAgICAnaW4nOiBzaG93LFxuICAgICAgICAgIGR1cmF0aW9uOiBNb2RhbC5UUkFOU0lUSU9OX0RVUkFUSU9OLFxuICAgICAgICAgIG9uRXhpdDogb25FeGl0LFxuICAgICAgICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgICAgICAgIG9uRXhpdGVkOiB0aGlzLmhhbmRsZUhpZGRlbixcbiAgICAgICAgICBvbkVudGVyOiBvbkVudGVyLFxuICAgICAgICAgIG9uRW50ZXJpbmc6IG9uRW50ZXJpbmcsXG4gICAgICAgICAgb25FbnRlcmVkOiBvbkVudGVyZWRcbiAgICAgICAgfSxcbiAgICAgICAgbW9kYWxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICBtb2RhbCA9IHRoaXMucmVuZGVyQmFja2Ryb3AobW9kYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9Qb3J0YWwyWydkZWZhdWx0J10sXG4gICAgICB7IGNvbnRhaW5lcjogcHJvcHMuY29udGFpbmVyIH0sXG4gICAgICBtb2RhbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAvLyBUT0RPOiB1c2UgY29udGV4dCBpbiAwLjE0XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLl9faXNNb2RhbEhlYWRlcikge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIG9uSGlkZTogX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKF90aGlzLnByb3BzLm9uSGlkZSwgY2hpbGQucHJvcHMub25IaWRlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJCYWNrZHJvcDogZnVuY3Rpb24gcmVuZGVyQmFja2Ryb3AobW9kYWwpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGFuaW1hdGlvbiA9IF9wcm9wczIuYW5pbWF0aW9uO1xuICAgIHZhciBic0NsYXNzID0gX3Byb3BzMi5ic0NsYXNzO1xuXG4gICAgdmFyIGR1cmF0aW9uID0gTW9kYWwuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTjtcblxuICAgIC8vIERvbid0IGhhbmRsZSBjbGlja3MgZm9yIFwic3RhdGljXCIgYmFja2Ryb3BzXG4gICAgdmFyIG9uQ2xpY2sgPSB0aGlzLnByb3BzLmJhY2tkcm9wID09PSB0cnVlID8gdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrIDogbnVsbDtcblxuICAgIHZhciBiYWNrZHJvcCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogXCJiYWNrZHJvcFwiLFxuICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXShic0NsYXNzICsgJy1iYWNrZHJvcCcsIHsgJ2luJzogdGhpcy5wcm9wcy5zaG93ICYmICFhbmltYXRpb24gfSksXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgcmVmOiAnbW9kYWwnIH0sXG4gICAgICBhbmltYXRpb24gPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0ZhZGUyWydkZWZhdWx0J10sXG4gICAgICAgIHsgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSwgJ2luJzogdGhpcy5wcm9wcy5zaG93LCBkdXJhdGlvbjogZHVyYXRpb24gfSxcbiAgICAgICAgYmFja2Ryb3BcbiAgICAgICkgOiBiYWNrZHJvcCxcbiAgICAgIG1vZGFsXG4gICAgKTtcbiAgfSxcblxuICBfc2V0RGlhbG9nUmVmOiBmdW5jdGlvbiBfc2V0RGlhbG9nUmVmKHJlZikge1xuICAgIC8vIGlzc3VlICMxMDc0XG4gICAgLy8gZHVlIHRvOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMy4zL3NyYy9jb3JlL1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50LmpzI0w4NDJcbiAgICAvL1xuICAgIC8vIHdoZW4gYmFja2Ryb3AgaXMgYGZhbHNlYCByZWFjdCBoYXNuJ3QgaGFkIGEgY2hhbmNlIHRvIHJlYXNzaWduIHRoZSByZWZzIHRvIGEgdXNhYmxlIG9iamVjdCwgYi9jIHRoZXJlIGFyZSBubyBvdGhlclxuICAgIC8vIFwiY2xhc3NpY1wiIHJlZnMgb24gdGhlIGNvbXBvbmVudCAob3IgdGhleSBoYXZlbid0IGJlZW4gcHJvY2Vzc2VkIHlldClcbiAgICAvLyBUT0RPOiBSZW1vdmUgdGhlIG5lZWQgZm9yIHRoaXMgaW4gbmV4dCBicmVha2luZyByZWxlYXNlXG4gICAgaWYgKF9PYmplY3QkaXNGcm96ZW4odGhpcy5yZWZzKSAmJiAhX09iamVjdCRrZXlzKHRoaXMucmVmcykubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZnMuZGlhbG9nID0gcmVmO1xuXG4gICAgLy9tYWludGFpbnMgYmFja3dhcmRzIGNvbXBhdCB3aXRoIG9sZGVyIGNvbXBvbmVudCBicmVha2Rvd25cbiAgICBpZiAoIXRoaXMucHJvcHMuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMucmVmcy5tb2RhbCA9IHJlZjtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0ZWQ6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSBpZiAoIW5leHRQcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIC8vIE90aGVyd2lzZSBsZXQgaGFuZGxlSGlkZGVuIHRha2UgY2FyZSBvZiBtYXJraW5nIGV4aXRlZC5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0ZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5zaG93KSB7XG4gICAgICB0aGlzLmNoZWNrRm9yRm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgIHRoaXMub25TaG93KCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLnByb3BzLmFuaW1hdGlvbjtcblxuICAgIGlmIChwcmV2UHJvcHMuc2hvdyAmJiAhdGhpcy5wcm9wcy5zaG93ICYmICFhbmltYXRpb24pIHtcbiAgICAgIC8vb3RoZXJ3aXNlIGhhbmRsZUhpZGRlbiB3aWxsIGNhbGwgdGhpcy5cbiAgICAgIHRoaXMub25IaWRlKCk7XG4gICAgfSBlbHNlIGlmICghcHJldlByb3BzLnNob3cgJiYgdGhpcy5wcm9wcy5zaG93KSB7XG4gICAgICB0aGlzLm9uU2hvdygpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgdGhpcy5vbkhpZGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiBvblNob3coKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcbiAgICB2YXIgd2luID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJXaW5kb3codGhpcyk7XG5cbiAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2tleXVwJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwKTtcblxuICAgIHRoaXMuX29uV2luZG93UmVzaXplTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbih3aW4sICdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmZvcmNlRm9jdXMpIHtcbiAgICAgIHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyID0gb25Gb2N1cyh0aGlzLCB0aGlzLmVuZm9yY2VGb2N1cyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gY29udGFpbmVyLmNsYXNzTmFtZS5sZW5ndGggPyAnIG1vZGFsLW9wZW4nIDogJ21vZGFsLW9wZW4nO1xuXG4gICAgdGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZyA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCB0aGlzKTtcblxuICAgIHRoaXMuX29yaWdpbmFsUGFkZGluZyA9IGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQ7XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHRoaXMuX29yaWdpbmFsUGFkZGluZyB8fCAwLCAxMCkgKyBnZXRTY3JvbGxiYXJTaXplKCkgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmlvc0NsaWNrSGFjaygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCksIC8vZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5mb2N1c01vZGFsQ29udGVudCgpO1xuICAgIH0pO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge1xuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIHRoaXMuX29uV2luZG93UmVzaXplTGlzdGVuZXIucmVtb3ZlKCk7XG5cbiAgICBpZiAodGhpcy5fb25Gb2N1c2luTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG5cbiAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxQYWRkaW5nO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZSgvID9tb2RhbC1vcGVuLywgJycpO1xuXG4gICAgdGhpcy5yZXN0b3JlTGFzdEZvY3VzKCk7XG4gIH0sXG5cbiAgaGFuZGxlSGlkZGVuOiBmdW5jdGlvbiBoYW5kbGVIaWRkZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRlZDogdHJ1ZSB9KTtcblxuICAgIHRoaXMub25IaWRlKCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgdmFyIF9wcm9wczM7XG5cbiAgICAgIChfcHJvcHMzID0gdGhpcy5wcm9wcykub25FeGl0ZWQuYXBwbHkoX3Byb3BzMywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlQmFja2Ryb3BDbGljazogZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCkpO1xuICB9LFxuXG4gIGNoZWNrRm9yRm9jdXM6IGZ1bmN0aW9uIGNoZWNrRm9yRm9jdXMoKSB7XG4gICAgaWYgKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNhblVzZURvbSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgfSxcblxuICBmb2N1c01vZGFsQ29udGVudDogZnVuY3Rpb24gZm9jdXNNb2RhbENvbnRlbnQoKSB7XG4gICAgdmFyIG1vZGFsQ29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZGlhbG9nKTtcbiAgICB2YXIgY3VycmVudCA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmFjdGl2ZUVsZW1lbnQodGhpcyk7XG4gICAgdmFyIGZvY3VzSW5Nb2RhbCA9IGN1cnJlbnQgJiYgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMobW9kYWxDb250ZW50LCBjdXJyZW50KTtcblxuICAgIGlmIChtb2RhbENvbnRlbnQgJiYgdGhpcy5wcm9wcy5hdXRvRm9jdXMgJiYgIWZvY3VzSW5Nb2RhbCkge1xuICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBjdXJyZW50O1xuICAgICAgbW9kYWxDb250ZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlc3RvcmVMYXN0Rm9jdXM6IGZ1bmN0aW9uIHJlc3RvcmVMYXN0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMubGFzdEZvY3VzICYmIHRoaXMubGFzdEZvY3VzLmZvY3VzKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1cy5mb2N1cygpO1xuICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBlbmZvcmNlRm9jdXM6IGZ1bmN0aW9uIGVuZm9yY2VGb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uYWN0aXZlRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgbW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLmRpYWxvZyk7XG5cbiAgICBpZiAobW9kYWwgJiYgbW9kYWwgIT09IGFjdGl2ZSAmJiAhX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMobW9kYWwsIGFjdGl2ZSkpIHtcbiAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIGlvc0NsaWNrSGFjazogZnVuY3Rpb24gaW9zQ2xpY2tIYWNrKCkge1xuICAgIC8vIElPUyBvbmx5IGFsbG93cyBjbGljayBldmVudHMgdG8gYmUgZGVsZWdhdGVkIHRvIHRoZSBkb2N1bWVudCBvbiBlbGVtZW50c1xuICAgIC8vIGl0IGNvbnNpZGVycyAnY2xpY2thYmxlJyAtIGFuY2hvcnMsIGJ1dHRvbnMsIGV0Yy4gV2UgZmFrZSBhIGNsaWNrIGhhbmRsZXIgb24gdGhlXG4gICAgLy8gRE9NIG5vZGVzIHRoZW1zZWx2ZXMuIFJlbW92ZSBpZiBoYW5kbGVkIGJ5IFJlYWN0OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExNjlcbiAgICBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5iYWNrZHJvcCkub25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICB9LFxuXG4gIF9nZXRTdHlsZXM6IGZ1bmN0aW9uIF9nZXRTdHlsZXMoKSB7XG4gICAgaWYgKCFfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jYW5Vc2VEb20pIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpO1xuICAgIHZhciBzY3JvbGxIdCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG4gICAgdmFyIGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nO1xuICAgIHZhciBtb2RhbElzT3ZlcmZsb3dpbmcgPSBzY3JvbGxIdCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvZ1N0eWxlczoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IGdldFNjcm9sbGJhclNpemUoKSA6IHZvaWQgMCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICFjb250YWluZXJJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/IGdldFNjcm9sbGJhclNpemUoKSA6IHZvaWQgMFxuICAgICAgfVxuICAgIH07XG4gIH1cblxufSk7XG5cbk1vZGFsLkJvZHkgPSBfTW9kYWxCb2R5MlsnZGVmYXVsdCddO1xuTW9kYWwuSGVhZGVyID0gX01vZGFsSGVhZGVyMlsnZGVmYXVsdCddO1xuTW9kYWwuVGl0bGUgPSBfTW9kYWxUaXRsZTJbJ2RlZmF1bHQnXTtcbk1vZGFsLkZvb3RlciA9IF9Nb2RhbEZvb3RlcjJbJ2RlZmF1bHQnXTtcblxuTW9kYWwuRGlhbG9nID0gX01vZGFsRGlhbG9nMlsnZGVmYXVsdCddO1xuXG5Nb2RhbC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMzAwO1xuTW9kYWwuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvaXMtZnJvemVuXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9pcy1mcm96ZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuaXNGcm96ZW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvaXMtZnJvemVuLmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBQb3J0YWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnUG9ydGFsJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgRE9NIE5vZGUgdGhhdCB0aGUgQ29tcG9uZW50IHdpbGwgcmVuZGVyIGl0J3MgY2hpbGRyZW4gaW50b1xuICAgICAqL1xuICAgIGNvbnRhaW5lcjogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLm1vdW50YWJsZVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICB0aGlzLl91bm1vdW50T3ZlcmxheVRhcmdldCgpO1xuICB9LFxuXG4gIF9tb3VudE92ZXJsYXlUYXJnZXQ6IGZ1bmN0aW9uIF9tb3VudE92ZXJsYXlUYXJnZXQoKSB7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5VGFyZ2V0KSB7XG4gICAgICB0aGlzLl9vdmVybGF5VGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKS5hcHBlbmRDaGlsZCh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgX3VubW91bnRPdmVybGF5VGFyZ2V0OiBmdW5jdGlvbiBfdW5tb3VudE92ZXJsYXlUYXJnZXQoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpLnJlbW92ZUNoaWxkKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgICAgdGhpcy5fb3ZlcmxheVRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiBfcmVuZGVyT3ZlcmxheSgpIHtcblxuICAgIHZhciBvdmVybGF5ID0gIXRoaXMucHJvcHMuY2hpbGRyZW4gPyBudWxsIDogX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAvLyBTYXZlIHJlZmVyZW5jZSBmb3IgZnV0dXJlIGFjY2Vzcy5cbiAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbW91bnRPdmVybGF5VGFyZ2V0KCk7XG4gICAgICB0aGlzLl9vdmVybGF5SW5zdGFuY2UgPSBfcmVhY3QyWydkZWZhdWx0J10ucmVuZGVyKG92ZXJsYXksIHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbnJlbmRlciBpZiB0aGUgY29tcG9uZW50IGlzIG51bGwgZm9yIHRyYW5zaXRpb25zIHRvIG51bGxcbiAgICAgIHRoaXMuX3VucmVuZGVyT3ZlcmxheSgpO1xuICAgICAgdGhpcy5fdW5tb3VudE92ZXJsYXlUYXJnZXQoKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VucmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gX3VucmVuZGVyT3ZlcmxheSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVRhcmdldCkge1xuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgICB0aGlzLl9vdmVybGF5SW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBnZXRPdmVybGF5RE9NTm9kZTogZnVuY3Rpb24gZ2V0T3ZlcmxheURPTU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldE92ZXJsYXlET01Ob2RlKCk6IEEgY29tcG9uZW50IG11c3QgYmUgbW91bnRlZCB0byBoYXZlIGEgRE9NIG5vZGUuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX292ZXJsYXlJbnN0YW5jZSkge1xuICAgICAgaWYgKHRoaXMuX292ZXJsYXlJbnN0YW5jZS5nZXRXcmFwcGVkRE9NTm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcmxheUluc3RhbmNlLmdldFdyYXBwZWRET01Ob2RlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMuX292ZXJsYXlJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZ2V0Q29udGFpbmVyRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29udGFpbmVyRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLmJvZHk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQb3J0YWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BvcnRhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW5oZXJpdHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgRmFkZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmFkZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmFkZSk7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvLyBFeHBsaWNpdGx5IGNvcGllZCBmcm9tIFRyYW5zaXRpb24gZm9yIGRvYyBnZW5lcmF0aW9uLlxuICAvLyBUT0RPOiBSZW1vdmUgZHVwbGljYXRpb24gb25jZSAjOTc3IGlzIHJlc29sdmVkLlxuXG4gIEZhZGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfVHJhbnNpdGlvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2ZhZGUnLFxuICAgICAgICBlbnRlcmVkQ2xhc3NOYW1lOiAnaW4nLFxuICAgICAgICBlbnRlcmluZ0NsYXNzTmFtZTogJ2luJ1xuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gRmFkZTtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5GYWRlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGZhZGUgaW4gb3IgZmFkZSBvdXQgYW5pbWF0aW9uXG4gICAqL1xuICAnaW4nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGhlIGNvbXBvbmVudCAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiBpdCBpcyBmYWRlZCBvdXRcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUnVuIHRoZSBmYWRlIGluIGFuaW1hdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLCBpZiBpdCBpcyBpbml0aWFsbHlcbiAgICogc2hvd25cbiAgICovXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXQgZmluaXNoaW5nXG4gICAqIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZCBldmVudHMgYXJlXG4gICAqIGNhbmNlbGVkXG4gICAqL1xuICBkdXJhdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGZhZGVzIGluXG4gICAqL1xuICBvbkVudGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBmYWRlIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgaGFzIGNvbXBvbmVudCBmYWRlZCBpblxuICAgKi9cbiAgb25FbnRlcmVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBvdXRcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBvdXRcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZmFkZWQgb3V0XG4gICAqL1xuICBvbkV4aXRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG59O1xuXG5GYWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgJ2luJzogZmFsc2UsXG4gIGR1cmF0aW9uOiAzMDAsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRmFkZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvRmFkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKmVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgTW9kYWxEaWFsb2cgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsRGlhbG9nJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBoZWFkZXIgY2xvc2VCdXR0b24gb3Igbm9uLXN0YXRpYyBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICBvbkhpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQSBjc3MgY2xhc3MgdG8gYXBwbHkgdG8gdGhlIE1vZGFsIGRpYWxvZyBET00gbm9kZS5cbiAgICAgKi9cbiAgICBkaWFsb2dDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG5cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ21vZGFsJyxcbiAgICAgIGNsb3NlQnV0dG9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgbW9kYWxTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuICAgIHZhciBic0NsYXNzID0gdGhpcy5wcm9wcy5ic0NsYXNzO1xuICAgIHZhciBkaWFsb2dDbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBkZWxldGUgZGlhbG9nQ2xhc3Nlcy5tb2RhbDtcbiAgICBkaWFsb2dDbGFzc2VzW2JzQ2xhc3MgKyAnLWRpYWxvZyddID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgIHN0eWxlOiBtb2RhbFN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBic0NsYXNzKVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmRpYWxvZ0NsYXNzTmFtZSwgZGlhbG9nQ2xhc3NlcykgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IGJzQ2xhc3MgKyAnLWNvbnRlbnQnLCByb2xlOiAnZG9jdW1lbnQnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsRGlhbG9nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbERpYWxvZy5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW5oZXJpdHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1vZGFsQm9keSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWxCb2R5LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbEJvZHkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsQm9keSk7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBNb2RhbEJvZHkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMubW9kYWxDbGFzc05hbWUpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIE1vZGFsQm9keTtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Nb2RhbEJvZHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSBjc3MgY2xhc3MgYXBwbGllZCB0byB0aGUgQ29tcG9uZW50XG4gICAqL1xuICBtb2RhbENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbk1vZGFsQm9keS5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vZGFsQ2xhc3NOYW1lOiAnbW9kYWwtYm9keSdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsQm9keTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxCb2R5LmpzXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpWydkZWZhdWx0J107XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgTW9kYWxIZWFkZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsSGVhZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbEhlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxIZWFkZXIpO1xuXG4gICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLy91c2VkIGluIGxpdWUgb2YgcGFyZW50IGNvbnRleHRzIHJpZ2h0IG5vdyB0byBhdXRvIHdpcmUgdGhlIGNsb3NlIGJ1dHRvblxuXG4gIE1vZGFsSGVhZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLm1vZGFsQ2xhc3NOYW1lKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNsb3NlQnV0dG9uICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uSGlkZVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyAnYXJpYS1oaWRkZW4nOiBcInRydWVcIiB9LFxuICAgICAgICAgICfDlydcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBNb2RhbEhlYWRlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Nb2RhbEhlYWRlci5fX2lzTW9kYWxIZWFkZXIgPSB0cnVlO1xuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBpcyB1c2VkIHRvIGRlZmluZSBhIHN0cmluZyB0aGF0IGxhYmVscyB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgKiBJdCBpcyB1c2VkIGZvciBBc3Npc3RpdmUgVGVjaG5vbG9neSB3aGVuIHRoZSBsYWJlbCB0ZXh0IGlzIG5vdCB2aXNpYmxlIG9uIHNjcmVlbi5cbiAgICovXG4gICdhcmlhLWxhYmVsJzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBDb21wb25lbnRcbiAgICovXG4gIG1vZGFsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCBjb250YWluIGEgY2xvc2UgYnV0dG9uXG4gICAqL1xuICBjbG9zZUJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogQSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjbG9zZSBidXR0b24gaXMgY2xpY2tlZC4gSWYgdXNlZCBkaXJlY3RseSBpbnNpZGUgYSBNb2RhbCBjb21wb25lbnQsIHRoZSBvbkhpZGUgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAqIGJlIHByb3BhZ2F0ZWQgdXAgdG8gdGhlIHBhcmVudCBNb2RhbCBgb25IaWRlYC5cbiAgICovXG4gIG9uSGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG59O1xuXG5Nb2RhbEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICdhcmlhLWxhYmVsJzogJ0Nsb3NlJyxcbiAgbW9kYWxDbGFzc05hbWU6ICdtb2RhbC1oZWFkZXInLFxuICBjbG9zZUJ1dHRvbjogZmFsc2Vcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsSGVhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbEhlYWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW5oZXJpdHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1vZGFsRm9vdGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbEZvb3RlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWxGb290ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsRm9vdGVyKTtcblxuICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIE1vZGFsRm9vdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLm1vZGFsQ2xhc3NOYW1lKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBNb2RhbEZvb3Rlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBDb21wb25lbnRcbiAgICovXG4gIG1vZGFsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTW9kYWxGb290ZXIuZGVmYXVsdFByb3BzID0ge1xuICBtb2RhbENsYXNzTmFtZTogJ21vZGFsLWZvb3Rlcidcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsRm9vdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzZSA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ05hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0YWJzJywgJ3BpbGxzJ10pLFxuICAgIHN0YWNrZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBqdXN0aWZpZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzZXMgZm9yIHRoZSB3cmFwcGVyIGBuYXZgIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEhUTUwgaWQgZm9yIHRoZSB3cmFwcGVyIGBuYXZgIGVsZW1lbnRcbiAgICAgKi9cbiAgICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzZXMgZm9yIHRoZSBpbm5lciBgdWxgIGVsZW1lbnRcbiAgICAgKi9cbiAgICB1bENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogSFRNTCBpZCBmb3IgdGhlIGlubmVyIGB1bGAgZWxlbWVudFxuICAgICAqL1xuICAgIHVsSWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2YmFyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ25hdicsXG4gICAgICBleHBhbmRlZDogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gJ25hdmJhci1jb2xsYXBzZScgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubmF2YmFyICYmICF0aGlzLnByb3BzLmNvbGxhcHNpYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJVbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9Db2xsYXBzZTJbJ2RlZmF1bHQnXSxcbiAgICAgIHsgJ2luJzogdGhpcy5wcm9wcy5leHBhbmRlZCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICduYXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgICAgdGhpcy5yZW5kZXJVbCgpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJVbDogZnVuY3Rpb24gcmVuZGVyVWwoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXNbJ25hdi1zdGFja2VkJ10gPSB0aGlzLnByb3BzLnN0YWNrZWQ7XG4gICAgY2xhc3Nlc1snbmF2LWp1c3RpZmllZCddID0gdGhpcy5wcm9wcy5qdXN0aWZpZWQ7XG4gICAgY2xhc3Nlc1snbmF2YmFyLW5hdiddID0gdGhpcy5wcm9wcy5uYXZiYXI7XG4gICAgY2xhc3Nlc1sncHVsbC1yaWdodCddID0gdGhpcy5wcm9wcy5wdWxsUmlnaHQ7XG4gICAgY2xhc3Nlc1snbmF2YmFyLXJpZ2h0J10gPSB0aGlzLnByb3BzLnJpZ2h0O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJvbGU6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3RhYnMnID8gJ3RhYmxpc3QnIDogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLnVsQ2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMudWxJZCxcbiAgICAgICAgcmVmOiBcInVsXCJcbiAgICAgIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJOYXZJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0Q2hpbGRBY3RpdmVQcm9wOiBmdW5jdGlvbiBnZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmhyZWYgPT09IHRoaXMucHJvcHMuYWN0aXZlSHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQucHJvcHMuYWN0aXZlO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIHJvbGU6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3RhYnMnID8gJ3RhYicgOiBudWxsLFxuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgb25TZWxlY3Q6IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgbmF2SXRlbTogdHJ1ZVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXYuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIE5hdmJhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2YmFyJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZpeGVkVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZml4ZWRCb3R0b206IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzdGF0aWNUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbnZlcnNlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZmx1aWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICByb2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHVzZSBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGNvbXBvbmVudENsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gICAgYnJhbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0b2dnbGVCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0b2dnbGVOYXZLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBvblRvZ2dsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG5hdkV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE5hdkV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ25hdmJhcicsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCcsXG4gICAgICByb2xlOiAnbmF2aWdhdGlvbicsXG4gICAgICBjb21wb25lbnRDbGFzczogJ25hdidcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZFeHBhbmRlZDogdGhpcy5wcm9wcy5kZWZhdWx0TmF2RXhwYW5kZWRcbiAgICB9O1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVUb2dnbGU6IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblRvZ2dsZSkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKCk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYXZFeHBhbmRlZDogIXRoaXMuc3RhdGUubmF2RXhwYW5kZWRcbiAgICB9KTtcbiAgfSxcblxuICBpc05hdkV4cGFuZGVkOiBmdW5jdGlvbiBpc05hdkV4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm5hdkV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLm5hdkV4cGFuZGVkIDogdGhpcy5zdGF0ZS5uYXZFeHBhbmRlZDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG5cbiAgICBjbGFzc2VzWyduYXZiYXItZml4ZWQtdG9wJ10gPSB0aGlzLnByb3BzLmZpeGVkVG9wO1xuICAgIGNsYXNzZXNbJ25hdmJhci1maXhlZC1ib3R0b20nXSA9IHRoaXMucHJvcHMuZml4ZWRCb3R0b207XG4gICAgY2xhc3Nlc1snbmF2YmFyLXN0YXRpYy10b3AnXSA9IHRoaXMucHJvcHMuc3RhdGljVG9wO1xuICAgIGNsYXNzZXNbJ25hdmJhci1pbnZlcnNlJ10gPSB0aGlzLnByb3BzLmludmVyc2U7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5icmFuZCB8fCB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiB8fCB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsID8gdGhpcy5yZW5kZXJIZWFkZXIoKSA6IG51bGwsXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGQpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDaGlsZDogZnVuY3Rpb24gcmVuZGVyQ2hpbGQoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIG5hdmJhcjogdHJ1ZSxcbiAgICAgIGNvbGxhcHNpYmxlOiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsICYmIHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ID09PSBjaGlsZC5wcm9wcy5ldmVudEtleSxcbiAgICAgIGV4cGFuZGVkOiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsICYmIHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ID09PSBjaGlsZC5wcm9wcy5ldmVudEtleSAmJiB0aGlzLmlzTmF2RXhwYW5kZWQoKSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJIZWFkZXI6IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICB2YXIgYnJhbmQgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5icmFuZCkge1xuICAgICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLmJyYW5kKSkge1xuICAgICAgICBicmFuZCA9IF9yZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5icmFuZCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5icmFuZC5wcm9wcy5jbGFzc05hbWUsICduYXZiYXItYnJhbmQnKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyYW5kID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5icmFuZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IFwibmF2YmFyLWhlYWRlclwiIH0sXG4gICAgICBicmFuZCxcbiAgICAgIHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uIHx8IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgPyB0aGlzLnJlbmRlclRvZ2dsZUJ1dHRvbigpIDogbnVsbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVG9nZ2xlQnV0dG9uOiBmdW5jdGlvbiByZW5kZXJUb2dnbGVCdXR0b24oKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbikpIHtcblxuICAgICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy50b2dnbGVCdXR0b24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbi5wcm9wcy5jbGFzc05hbWUsICduYXZiYXItdG9nZ2xlJyksXG4gICAgICAgIG9uQ2xpY2s6IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSh0aGlzLmhhbmRsZVRvZ2dsZSwgdGhpcy5wcm9wcy50b2dnbGVCdXR0b24ucHJvcHMub25DbGljaylcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gIT0gbnVsbCA/IHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uIDogW19yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyBjbGFzc05hbWU6IFwic3Itb25seVwiLCBrZXk6IDAgfSxcbiAgICAgICdUb2dnbGUgbmF2aWdhdGlvbidcbiAgICApLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBcImljb24tYmFyXCIsIGtleTogMSB9KSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogXCJpY29uLWJhclwiLCBrZXk6IDIgfSksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IFwiaWNvbi1iYXJcIiwga2V5OiAzIH0pXTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6IFwibmF2YmFyLXRvZ2dsZVwiLCB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVRvZ2dsZSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2YmFyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX1NhZmVBbmNob3IgPSByZXF1aXJlKCcuL1NhZmVBbmNob3InKTtcblxudmFyIF9TYWZlQW5jaG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NhZmVBbmNob3IpO1xuXG52YXIgTmF2SXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2SXRlbScsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsaW5rSWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICdhcmlhLWNvbnRyb2xzJzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcm9sZSA9IF9wcm9wcy5yb2xlO1xuICAgIHZhciBsaW5rSWQgPSBfcHJvcHMubGlua0lkO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgYWN0aXZlID0gX3Byb3BzLmFjdGl2ZTtcbiAgICB2YXIgaHJlZiA9IF9wcm9wcy5ocmVmO1xuICAgIHZhciB0aXRsZSA9IF9wcm9wcy50aXRsZTtcbiAgICB2YXIgdGFyZ2V0ID0gX3Byb3BzLnRhcmdldDtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGFyaWFDb250cm9scyA9IF9wcm9wc1snYXJpYS1jb250cm9scyddO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydyb2xlJywgJ2xpbmtJZCcsICdkaXNhYmxlZCcsICdhY3RpdmUnLCAnaHJlZicsICd0aXRsZScsICd0YXJnZXQnLCAnY2hpbGRyZW4nLCAnYXJpYS1jb250cm9scyddKTtcblxuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICB9O1xuICAgIHZhciBsaW5rUHJvcHMgPSB7XG4gICAgICByb2xlOiByb2xlLFxuICAgICAgaHJlZjogaHJlZixcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgaWQ6IGxpbmtJZCxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tcbiAgICB9O1xuXG4gICAgaWYgKCFyb2xlICYmIGhyZWYgPT09ICcjJykge1xuICAgICAgbGlua1Byb3BzLnJvbGUgPSAnYnV0dG9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1NhZmVBbmNob3IyWydkZWZhdWx0J10sXG4gICAgICAgIF9leHRlbmRzKHt9LCBsaW5rUHJvcHMsIHsgJ2FyaWEtc2VsZWN0ZWQnOiBhY3RpdmUsICdhcmlhLWNvbnRyb2xzJzogYXJpYUNvbnRyb2xzIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXZJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZJdGVtLmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzIsIHtpZ25vcmU6IFtcImNvbnRhaW5lclwiLCBcImNvbnRhaW5lclBhZGRpbmdcIiwgXCJ0YXJnZXRcIiwgXCJwbGFjZW1lbnRcIiwgXCJjaGlsZHJlblwiXSB9XSAqL1xuLyogVGhlc2UgcHJvcGVydGllcyBhcmUgdmFsaWRhdGVkIGluICdQb3J0YWwnIGFuZCAnUG9zaXRpb24nIGNvbXBvbmVudHMgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Qb3J0YWwgPSByZXF1aXJlKCcuL1BvcnRhbCcpO1xuXG52YXIgX1BvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3J0YWwpO1xuXG52YXIgX1Bvc2l0aW9uID0gcmVxdWlyZSgnLi9Qb3NpdGlvbicpO1xuXG52YXIgX1Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Bvc2l0aW9uKTtcblxudmFyIF9Sb290Q2xvc2VXcmFwcGVyID0gcmVxdWlyZSgnLi9Sb290Q2xvc2VXcmFwcGVyJyk7XG5cbnZhciBfUm9vdENsb3NlV3JhcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb290Q2xvc2VXcmFwcGVyKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgX0ZhZGUgPSByZXF1aXJlKCcuL0ZhZGUnKTtcblxudmFyIF9GYWRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGUpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE92ZXJsYXkgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE92ZXJsYXksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE92ZXJsYXkocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3ZlcmxheSk7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgZXhpdGVkOiAhcHJvcHMuc2hvdyB9O1xuICAgIHRoaXMub25IaWRkZW5MaXN0ZW5lciA9IHRoaXMuaGFuZGxlSGlkZGVuLmJpbmQodGhpcyk7XG4gIH1cblxuICBPdmVybGF5LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0ZWQ6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSBpZiAoIW5leHRQcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIC8vIE90aGVyd2lzZSBsZXQgaGFuZGxlSGlkZGVuIHRha2UgY2FyZSBvZiBtYXJraW5nIGV4aXRlZC5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0ZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIE92ZXJsYXkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY29udGFpbmVyID0gX3Byb3BzLmNvbnRhaW5lcjtcbiAgICB2YXIgY29udGFpbmVyUGFkZGluZyA9IF9wcm9wcy5jb250YWluZXJQYWRkaW5nO1xuICAgIHZhciB0YXJnZXQgPSBfcHJvcHMudGFyZ2V0O1xuICAgIHZhciBwbGFjZW1lbnQgPSBfcHJvcHMucGxhY2VtZW50O1xuICAgIHZhciByb290Q2xvc2UgPSBfcHJvcHMucm9vdENsb3NlO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgVHJhbnNpdGlvbiA9IF9wcm9wcy5hbmltYXRpb247XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbnRhaW5lcicsICdjb250YWluZXJQYWRkaW5nJywgJ3RhcmdldCcsICdwbGFjZW1lbnQnLCAncm9vdENsb3NlJywgJ2NoaWxkcmVuJywgJ2FuaW1hdGlvbiddKTtcblxuICAgIGlmIChUcmFuc2l0aW9uID09PSB0cnVlKSB7XG4gICAgICBUcmFuc2l0aW9uID0gX0ZhZGUyWydkZWZhdWx0J107XG4gICAgfVxuXG4gICAgLy8gRG9uJ3QgdW4tcmVuZGVyIHRoZSBvdmVybGF5IHdoaWxlIGl0J3MgdHJhbnNpdGlvbmluZyBvdXQuXG4gICAgdmFyIG1vdW50T3ZlcmxheSA9IHByb3BzLnNob3cgfHwgVHJhbnNpdGlvbiAmJiAhdGhpcy5zdGF0ZS5leGl0ZWQ7XG4gICAgaWYgKCFtb3VudE92ZXJsYXkpIHtcbiAgICAgIC8vIERvbid0IGJvdGhlciBzaG93aW5nIGFueXRoaW5nIGlmIHdlIGRvbid0IGhhdmUgdG8uXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbjtcblxuICAgIC8vIFBvc2l0aW9uIGlzIGJlIGlubmVyLW1vc3QgYmVjYXVzZSBpdCBhZGRzIGlubGluZSBzdHlsZXMgaW50byB0aGUgY2hpbGQsXG4gICAgLy8gd2hpY2ggdGhlIG90aGVyIHdyYXBwZXJzIGRvbid0IGZvcndhcmQgY29ycmVjdGx5LlxuICAgIGNoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUG9zaXRpb24yWydkZWZhdWx0J10sXG4gICAgICB7IGNvbnRhaW5lcjogY29udGFpbmVyLCBjb250YWluZXJQYWRkaW5nOiBjb250YWluZXJQYWRkaW5nLCB0YXJnZXQ6IHRhcmdldCwgcGxhY2VtZW50OiBwbGFjZW1lbnQgfSxcbiAgICAgIGNoaWxkXG4gICAgKTtcblxuICAgIGlmIChUcmFuc2l0aW9uKSB7XG4gICAgICB2YXIgb25FeGl0ID0gcHJvcHMub25FeGl0O1xuXG4gICAgICAvLyBUaGlzIGFuaW1hdGVzIHRoZSBjaGlsZCBub2RlIGJ5IGluamVjdGluZyBwcm9wcywgc28gaXQgbXVzdCBwcmVjZWRlXG4gICAgICAvLyBhbnl0aGluZyB0aGF0IGFkZHMgYSB3cmFwcGluZyBkaXYuXG4gICAgICB2YXIgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nO1xuICAgICAgdmFyIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyO1xuICAgICAgdmFyIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nO1xuICAgICAgdmFyIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZDtcbiAgICAgIGNoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFRyYW5zaXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICAnaW4nOiBwcm9wcy5zaG93LFxuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgb25FeGl0OiBvbkV4aXQsXG4gICAgICAgICAgb25FeGl0aW5nOiBvbkV4aXRpbmcsXG4gICAgICAgICAgb25FeGl0ZWQ6IHRoaXMub25IaWRkZW5MaXN0ZW5lcixcbiAgICAgICAgICBvbkVudGVyOiBvbkVudGVyLFxuICAgICAgICAgIG9uRW50ZXJpbmc6IG9uRW50ZXJpbmcsXG4gICAgICAgICAgb25FbnRlcmVkOiBvbkVudGVyZWRcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gX3JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKCdpbicsIGNoaWxkLnByb3BzLmNsYXNzTmFtZSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZ29lcyBhZnRlciBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBhZGRzIGEgd3JhcHBpbmcgZGl2LlxuICAgIGlmIChyb290Q2xvc2UpIHtcbiAgICAgIGNoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Sb290Q2xvc2VXcmFwcGVyMlsnZGVmYXVsdCddLFxuICAgICAgICB7IG9uUm9vdENsb3NlOiBwcm9wcy5vbkhpZGUgfSxcbiAgICAgICAgY2hpbGRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BvcnRhbDJbJ2RlZmF1bHQnXSxcbiAgICAgIHsgY29udGFpbmVyOiBjb250YWluZXIgfSxcbiAgICAgIGNoaWxkXG4gICAgKTtcbiAgfTtcblxuICBPdmVybGF5LnByb3RvdHlwZS5oYW5kbGVIaWRkZW4gPSBmdW5jdGlvbiBoYW5kbGVIaWRkZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRlZDogdHJ1ZSB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICB2YXIgX3Byb3BzMjtcblxuICAgICAgKF9wcm9wczIgPSB0aGlzLnByb3BzKS5vbkV4aXRlZC5hcHBseShfcHJvcHMyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT3ZlcmxheTtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBfUG9ydGFsMlsnZGVmYXVsdCddLnByb3BUeXBlcywgX1Bvc2l0aW9uMlsnZGVmYXVsdCddLnByb3BUeXBlcywge1xuICAvKipcbiAgICogU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBPdmVybGF5XG4gICAqL1xuICBzaG93OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHRyaWdnZXIgb25IaWRlIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIG92ZXJsYXlcbiAgICovXG4gIHJvb3RDbG9zZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogQSBDYWxsYmFjayBmaXJlZCBieSB0aGUgT3ZlcmxheSB3aGVuIGl0IHdpc2hlcyB0byBiZSBoaWRkZW4uXG4gICAqL1xuICBvbkhpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVXNlIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGVdKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBPdmVybGF5IHRyYW5zaXRpb25zIGluXG4gICAqL1xuICBvbkVudGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFzIHRoZSBPdmVybGF5IGJlZ2lucyB0byB0cmFuc2l0aW9uIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBPdmVybGF5IGZpbmlzaGVzIHRyYW5zaXRpb25pbmcgaW5cbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCByaWdodCBiZWZvcmUgdGhlIE92ZXJsYXkgdHJhbnNpdGlvbnMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE92ZXJsYXkgYmVnaW5zIHRvIHRyYW5zaXRpb24gb3V0XG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIE92ZXJsYXkgZmluaXNoZXMgdHJhbnNpdGlvbmluZyBvdXRcbiAgICovXG4gIG9uRXhpdGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5pbWF0aW9uOiBfRmFkZTJbJ2RlZmF1bHQnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gT3ZlcmxheTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzT3ZlcmxheVBvc2l0aW9uVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL292ZXJsYXlQb3NpdGlvblV0aWxzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIFBvc2l0aW9uID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb3NpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9zaXRpb24pO1xuXG4gICAgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3NpdGlvbkxlZnQ6IG51bGwsXG4gICAgICBwb3NpdGlvblRvcDogbnVsbCxcbiAgICAgIGFycm93T2Zmc2V0TGVmdDogbnVsbCxcbiAgICAgIGFycm93T2Zmc2V0VG9wOiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMuX25lZWRzRmx1c2ggPSBmYWxzZTtcbiAgICB0aGlzLl9sYXN0VGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIFBvc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfTtcblxuICBQb3NpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgdGhpcy5fbmVlZHNGbHVzaCA9IHRydWU7XG4gIH07XG5cbiAgUG9zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fbmVlZHNGbHVzaCkge1xuICAgICAgdGhpcy5fbmVlZHNGbHVzaCA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBQb3NpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBQcm9iYWJseSBub3QgbmVjZXNzYXJ5LCBidXQganVzdCBpbiBjYXNlIGhvbGRpbmcgYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgLy8gdGFyZ2V0IGNhdXNlcyBwcm9ibGVtcyBzb21ld2hlcmUuXG4gICAgdGhpcy5fbGFzdFRhcmdldCA9IG51bGw7XG4gIH07XG5cbiAgUG9zaXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBwb3NpdGlvbkxlZnQgPSBfc3RhdGUucG9zaXRpb25MZWZ0O1xuICAgIHZhciBwb3NpdGlvblRvcCA9IF9zdGF0ZS5wb3NpdGlvblRvcDtcblxuICAgIHZhciBhcnJvd1Bvc2l0aW9uID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9zdGF0ZSwgWydwb3NpdGlvbkxlZnQnLCAncG9zaXRpb25Ub3AnXSk7XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIF9leHRlbmRzKHt9LCBwcm9wcywgYXJyb3dQb3NpdGlvbiwge1xuICAgICAgcG9zaXRpb25Ub3A6IHBvc2l0aW9uVG9wLFxuICAgICAgcG9zaXRpb25MZWZ0OiBwb3NpdGlvbkxlZnQsXG4gICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKGNsYXNzTmFtZSwgY2hpbGQucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2hpbGQucHJvcHMuc3R5bGUsIHtcbiAgICAgICAgbGVmdDogcG9zaXRpb25MZWZ0LFxuICAgICAgICB0b3A6IHBvc2l0aW9uVG9wXG4gICAgICB9KVxuICAgIH0pKTtcbiAgfTtcblxuICBQb3NpdGlvbi5wcm90b3R5cGUuZ2V0VGFyZ2V0U2FmZSA9IGZ1bmN0aW9uIGdldFRhcmdldFNhZmUoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRhcmdldCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMudGFyZ2V0KHRoaXMucHJvcHMpO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAvLyBUaGlzIGlzIHNvIHdlIGNhbiBqdXN0IHVzZSA9PT0gY2hlY2sgYmVsb3cgb24gYWxsIGZhbHN5IHRhcmdldHMuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIFBvc2l0aW9uLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldFRhcmdldFNhZmUoKTtcbiAgICBpZiAodGFyZ2V0ID09PSB0aGlzLl9sYXN0VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xhc3RUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBvc2l0aW9uTGVmdDogbnVsbCxcbiAgICAgICAgcG9zaXRpb25Ub3A6IG51bGwsXG4gICAgICAgIGFycm93T2Zmc2V0TGVmdDogbnVsbCxcbiAgICAgICAgYXJyb3dPZmZzZXRUb3A6IG51bGxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG92ZXJsYXkgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKS5ib2R5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZShfdXRpbHNPdmVybGF5UG9zaXRpb25VdGlscy5jYWxjT3ZlcmxheVBvc2l0aW9uKHRoaXMucHJvcHMucGxhY2VtZW50LCBvdmVybGF5LCB0YXJnZXQsIGNvbnRhaW5lciwgdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nKSk7XG4gIH07XG5cbiAgcmV0dXJuIFBvc2l0aW9uO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblBvc2l0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIG1hcHBpbmcgcHJvcHMgdG8gRE9NIG5vZGUgdGhlIGNvbXBvbmVudCBpcyBwb3NpdGlvbmVkIG5leHQgdG9cbiAgICovXG4gIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogXCJvZmZzZXRQYXJlbnRcIiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjb250YWluZXI6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5tb3VudGFibGUsXG4gIC8qKlxuICAgKiBNaW5pbXVtIHNwYWNpbmcgaW4gcGl4ZWxzIGJldHdlZW4gY29udGFpbmVyIGJvcmRlciBhbmQgY29tcG9uZW50IGJvcmRlclxuICAgKi9cbiAgY29udGFpbmVyUGFkZGluZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBIb3cgdG8gcG9zaXRpb24gdGhlIGNvbXBvbmVudCByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0XG4gICAqL1xuICBwbGFjZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSlcbn07XG5cblBvc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFpbmVyUGFkZGluZzogMCxcbiAgcGxhY2VtZW50OiAncmlnaHQnXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQb3NpdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUG9zaXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZG9tVXRpbHMgPSByZXF1aXJlKCcuL2RvbVV0aWxzJyk7XG5cbnZhciBfZG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tVXRpbHMpO1xuXG52YXIgdXRpbHMgPSB7XG5cbiAgZ2V0Q29udGFpbmVyRGltZW5zaW9uczogZnVuY3Rpb24gZ2V0Q29udGFpbmVyRGltZW5zaW9ucyhjb250YWluZXJOb2RlKSB7XG4gICAgdmFyIHNpemUgPSB1bmRlZmluZWQsXG4gICAgICAgIHNjcm9sbCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChjb250YWluZXJOb2RlLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfTtcbiAgICAgIHNjcm9sbCA9IF9kb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRhaW5lck5vZGUpLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgY29udGFpbmVyTm9kZS5zY3JvbGxUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpemUgPSBfZG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0U2l6ZShjb250YWluZXJOb2RlKTtcbiAgICAgIHNjcm9sbCA9IGNvbnRhaW5lck5vZGUuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc2l6ZSwgeyBzY3JvbGw6IHNjcm9sbCB9KTtcbiAgfSxcblxuICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9zaXRpb24odGFyZ2V0LCBjb250YWluZXIpIHtcbiAgICB2YXIgb2Zmc2V0ID0gY29udGFpbmVyLnRhZ05hbWUgPT09ICdCT0RZJyA/IF9kb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQodGFyZ2V0KSA6IF9kb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRQb3NpdGlvbih0YXJnZXQsIGNvbnRhaW5lcik7XG4gICAgdmFyIHNpemUgPSBfZG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0U2l6ZSh0YXJnZXQpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb2Zmc2V0LCBzaXplKTtcbiAgfSxcblxuICBjYWxjT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbiBjYWxjT3ZlcmxheVBvc2l0aW9uKHBsYWNlbWVudCwgb3ZlcmxheU5vZGUsIHRhcmdldCwgY29udGFpbmVyLCBwYWRkaW5nKSB7XG4gICAgdmFyIGNoaWxkT2Zmc2V0ID0gdXRpbHMuZ2V0UG9zaXRpb24odGFyZ2V0LCBjb250YWluZXIpO1xuXG4gICAgdmFyIF9kb21VdGlscyRnZXRTaXplID0gX2RvbVV0aWxzMlsnZGVmYXVsdCddLmdldFNpemUob3ZlcmxheU5vZGUpO1xuXG4gICAgdmFyIG92ZXJsYXlIZWlnaHQgPSBfZG9tVXRpbHMkZ2V0U2l6ZS5oZWlnaHQ7XG4gICAgdmFyIG92ZXJsYXlXaWR0aCA9IF9kb21VdGlscyRnZXRTaXplLndpZHRoO1xuXG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9IHVuZGVmaW5lZCxcbiAgICAgICAgcG9zaXRpb25Ub3AgPSB1bmRlZmluZWQsXG4gICAgICAgIGFycm93T2Zmc2V0TGVmdCA9IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3dPZmZzZXRUb3AgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICBwb3NpdGlvblRvcCA9IGNoaWxkT2Zmc2V0LnRvcCArIChjaGlsZE9mZnNldC5oZWlnaHQgLSBvdmVybGF5SGVpZ2h0KSAvIDI7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICBwb3NpdGlvbkxlZnQgPSBjaGlsZE9mZnNldC5sZWZ0IC0gb3ZlcmxheVdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb25MZWZ0ID0gY2hpbGRPZmZzZXQubGVmdCArIGNoaWxkT2Zmc2V0LndpZHRoO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9wRGVsdGEgPSBnZXRUb3BEZWx0YShwb3NpdGlvblRvcCwgb3ZlcmxheUhlaWdodCwgY29udGFpbmVyLCBwYWRkaW5nKTtcblxuICAgICAgcG9zaXRpb25Ub3AgKz0gdG9wRGVsdGE7XG4gICAgICBhcnJvd09mZnNldFRvcCA9IDUwICogKDEgLSAyICogdG9wRGVsdGEgLyBvdmVybGF5SGVpZ2h0KSArICclJztcbiAgICAgIGFycm93T2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09ICd0b3AnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHBvc2l0aW9uTGVmdCA9IGNoaWxkT2Zmc2V0LmxlZnQgKyAoY2hpbGRPZmZzZXQud2lkdGggLSBvdmVybGF5V2lkdGgpIC8gMjtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgcG9zaXRpb25Ub3AgPSBjaGlsZE9mZnNldC50b3AgLSBvdmVybGF5SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb25Ub3AgPSBjaGlsZE9mZnNldC50b3AgKyBjaGlsZE9mZnNldC5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0RGVsdGEgPSBnZXRMZWZ0RGVsdGEocG9zaXRpb25MZWZ0LCBvdmVybGF5V2lkdGgsIGNvbnRhaW5lciwgcGFkZGluZyk7XG4gICAgICBwb3NpdGlvbkxlZnQgKz0gbGVmdERlbHRhO1xuICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gNTAgKiAoMSAtIDIgKiBsZWZ0RGVsdGEgLyBvdmVybGF5V2lkdGgpICsgJyUnO1xuICAgICAgYXJyb3dPZmZzZXRUb3AgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGNPdmVybGF5UG9zaXRpb24oKTogTm8gc3VjaCBwbGFjZW1lbnQgb2YgXCInICsgcGxhY2VtZW50ICsgJ1wiIGZvdW5kLicpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBvc2l0aW9uTGVmdDogcG9zaXRpb25MZWZ0LCBwb3NpdGlvblRvcDogcG9zaXRpb25Ub3AsIGFycm93T2Zmc2V0TGVmdDogYXJyb3dPZmZzZXRMZWZ0LCBhcnJvd09mZnNldFRvcDogYXJyb3dPZmZzZXRUb3AgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0VG9wRGVsdGEodG9wLCBvdmVybGF5SGVpZ2h0LCBjb250YWluZXIsIHBhZGRpbmcpIHtcbiAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB1dGlscy5nZXRDb250YWluZXJEaW1lbnNpb25zKGNvbnRhaW5lcik7XG4gIHZhciBjb250YWluZXJTY3JvbGwgPSBjb250YWluZXJEaW1lbnNpb25zLnNjcm9sbDtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckRpbWVuc2lvbnMuaGVpZ2h0O1xuXG4gIHZhciB0b3BFZGdlT2Zmc2V0ID0gdG9wIC0gcGFkZGluZyAtIGNvbnRhaW5lclNjcm9sbDtcbiAgdmFyIGJvdHRvbUVkZ2VPZmZzZXQgPSB0b3AgKyBwYWRkaW5nIC0gY29udGFpbmVyU2Nyb2xsICsgb3ZlcmxheUhlaWdodDtcblxuICBpZiAodG9wRWRnZU9mZnNldCA8IDApIHtcbiAgICByZXR1cm4gLXRvcEVkZ2VPZmZzZXQ7XG4gIH0gZWxzZSBpZiAoYm90dG9tRWRnZU9mZnNldCA+IGNvbnRhaW5lckhlaWdodCkge1xuICAgIHJldHVybiBjb250YWluZXJIZWlnaHQgLSBib3R0b21FZGdlT2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExlZnREZWx0YShsZWZ0LCBvdmVybGF5V2lkdGgsIGNvbnRhaW5lciwgcGFkZGluZykge1xuICB2YXIgY29udGFpbmVyRGltZW5zaW9ucyA9IHV0aWxzLmdldENvbnRhaW5lckRpbWVuc2lvbnMoY29udGFpbmVyKTtcbiAgdmFyIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyRGltZW5zaW9ucy53aWR0aDtcblxuICB2YXIgbGVmdEVkZ2VPZmZzZXQgPSBsZWZ0IC0gcGFkZGluZztcbiAgdmFyIHJpZ2h0RWRnZU9mZnNldCA9IGxlZnQgKyBwYWRkaW5nICsgb3ZlcmxheVdpZHRoO1xuXG4gIGlmIChsZWZ0RWRnZU9mZnNldCA8IDApIHtcbiAgICByZXR1cm4gLWxlZnRFZGdlT2Zmc2V0O1xuICB9IGVsc2UgaWYgKHJpZ2h0RWRnZU9mZnNldCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lcldpZHRoIC0gcmlnaHRFZGdlT2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5leHBvcnRzWydkZWZhdWx0J10gPSB1dGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvb3ZlcmxheVBvc2l0aW9uVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpWydkZWZhdWx0J107XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxuLy8gVE9ETzogTWVyZ2UgdGhpcyBsb2dpYyB3aXRoIGRyb3Bkb3duIGxvZ2ljIG9uY2UgIzUyNiBpcyBkb25lLlxuXG4vLyBUT0RPOiBDb25zaWRlciB1c2luZyBhbiBFUzYgc3ltYm9sIGhlcmUsIG9uY2Ugd2UgdXNlIGJhYmVsLXJ1bnRpbWUuXG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBDTElDS19XQVNfSU5TSURFID0gJ19fY2xpY2tfd2FzX2luc2lkZSc7XG5cbmZ1bmN0aW9uIHN1cHByZXNzUm9vdENsb3NlKGV2ZW50KSB7XG4gIC8vIFRhZyB0aGUgbmF0aXZlIGV2ZW50IHRvIHByZXZlbnQgdGhlIHJvb3QgY2xvc2UgbG9naWMgb24gZG9jdW1lbnQgY2xpY2suXG4gIC8vIFRoaXMgc2VlbXMgc2FmZXIgdGhhbiB1c2luZyBldmVudC5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxcbiAgLy8gd2hpY2ggaXMgb25seSBzdXBwb3J0ZWQgaW4gSUUgPj0gOS5cbiAgZXZlbnQubmF0aXZlRXZlbnRbQ0xJQ0tfV0FTX0lOU0lERV0gPSB0cnVlO1xufVxuXG52YXIgUm9vdENsb3NlV3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm9vdENsb3NlV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm9vdENsb3NlV3JhcHBlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb290Q2xvc2VXcmFwcGVyKTtcblxuICAgIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXAgPSB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFJvb3RDbG9zZVdyYXBwZXIucHJvdG90eXBlLmJpbmRSb290Q2xvc2VIYW5kbGVycyA9IGZ1bmN0aW9uIGJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcblxuICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAnY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuICB9O1xuXG4gIFJvb3RDbG9zZVdyYXBwZXIucHJvdG90eXBlLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAvLyBUaGlzIGlzIG5vdyB0aGUgbmF0aXZlIGV2ZW50LlxuICAgIGlmIChlW0NMSUNLX1dBU19JTlNJREVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblJvb3RDbG9zZSgpO1xuICB9O1xuXG4gIFJvb3RDbG9zZVdyYXBwZXIucHJvdG90eXBlLmhhbmRsZURvY3VtZW50S2V5VXAgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5wcm9wcy5vblJvb3RDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBSb290Q2xvc2VXcmFwcGVyLnByb3RvdHlwZS51bmJpbmRSb290Q2xvc2VIYW5kbGVycyA9IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgUm9vdENsb3NlV3JhcHBlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICB9O1xuXG4gIFJvb3RDbG9zZVdyYXBwZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBXcmFwIHRoZSBjaGlsZCBpbiBhIG5ldyBlbGVtZW50LCBzbyB0aGUgY2hpbGQgd29uJ3QgaGF2ZSB0byBoYW5kbGVcbiAgICAvLyBwb3RlbnRpYWxseSBjb21iaW5pbmcgbXVsdGlwbGUgb25DbGljayBsaXN0ZW5lcnMuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IG9uQ2xpY2s6IHN1cHByZXNzUm9vdENsb3NlIH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgICk7XG4gIH07XG5cbiAgUm9vdENsb3NlV3JhcHBlci5wcm90b3R5cGUuZ2V0V3JhcHBlZERPTU5vZGUgPSBmdW5jdGlvbiBnZXRXcmFwcGVkRE9NTm9kZSgpIHtcbiAgICAvLyBXZSBjYW4ndCB1c2UgYSByZWYgdG8gaWRlbnRpZnkgdGhlIHdyYXBwZWQgY2hpbGQsIHNpbmNlIHdlIG1pZ2h0IGJlXG4gICAgLy8gc3RlYWxpbmcgdGhlIHJlZiBmcm9tIHRoZSBvd25lciwgYnV0IHdlIGtub3cgZXhhY3RseSB0aGUgRE9NIHN0cnVjdHVyZVxuICAgIC8vIHRoYXQgd2lsbCBiZSByZW5kZXJlZCwgc28gd2UgY2FuIGp1c3QgZG8gdGhpcyB0byBnZXQgdGhlIGNoaWxkJ3MgRE9NXG4gICAgLy8gbm9kZSBmb3IgZG9pbmcgc2l6ZSBjYWxjdWxhdGlvbnMgaW4gT3ZlcmxheU1peGluLlxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykuY2hpbGRyZW5bMF07XG4gIH07XG5cbiAgUm9vdENsb3NlV3JhcHBlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gIH07XG5cbiAgcmV0dXJuIFJvb3RDbG9zZVdyYXBwZXI7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm9vdENsb3NlV3JhcHBlcjtcblxuUm9vdENsb3NlV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIG9uUm9vdENsb3NlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUm9vdENsb3NlV3JhcHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyplc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9PYmplY3Qka2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ29udGV4dFdyYXBwZXInKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIpO1xuXG52YXIgX092ZXJsYXkgPSByZXF1aXJlKCcuL092ZXJsYXknKTtcblxudmFyIF9PdmVybGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXkpO1xuXG52YXIgX3JlYWN0TGliV2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG5cbnZhciBfcmVhY3RMaWJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TGliV2FybmluZyk7XG5cbnZhciBfbG9kYXNoT2JqZWN0UGljayA9IHJlcXVpcmUoJ2xvZGFzaC9vYmplY3QvcGljaycpO1xuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIG9uZSBpcyBpbnNpZGUgb3IgZXF1YWwgdG8gdGhlIG9mIHZhbHVlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG9uZVxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG9mXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgX2xvZGFzaE9iamVjdFBpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0UGljayk7XG5cbmZ1bmN0aW9uIGlzT25lT2Yob25lLCBvZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShvZikpIHtcbiAgICByZXR1cm4gb2YuaW5kZXhPZihvbmUpID49IDA7XG4gIH1cbiAgcmV0dXJuIG9uZSA9PT0gb2Y7XG59XG5cbnZhciBPdmVybGF5VHJpZ2dlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnT3ZlcmxheVRyaWdnZXInLFxuXG4gIHByb3BUeXBlczogX2V4dGVuZHMoe30sIF9PdmVybGF5MlsnZGVmYXVsdCddLnByb3BUeXBlcywge1xuXG4gICAgLyoqXG4gICAgKiBTcGVjaWZ5IHdoaWNoIGFjdGlvbiBvciBhY3Rpb25zIHRyaWdnZXIgT3ZlcmxheSB2aXNpYmlsaXR5XG4gICAgKi9cbiAgICB0cmlnZ2VyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pKV0pLFxuXG4gICAgLyoqXG4gICAgICogQSBtaWxsaXNlY29uZCBkZWxheSBhbW91bnQgdG8gc2hvdyBhbmQgaGlkZSB0aGUgT3ZlcmxheSBvbmNlIHRyaWdnZXJlZFxuICAgICAqL1xuICAgIGRlbGF5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBBIG1pbGxpc2Vjb25kIGRlbGF5IGFtb3VudCBiZWZvcmUgc2hvd2luZyB0aGUgT3ZlcmxheSBvbmNlIHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICBkZWxheVNob3c6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIEEgbWlsbGlzZWNvbmQgZGVsYXkgYW1vdW50IGJlZm9yZSBoaWRpbmcgdGhlIE92ZXJsYXkgb25jZSB0cmlnZ2VyZWQuXG4gICAgICovXG4gICAgZGVsYXlIaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIE92ZXJsYXksIGZvciBtb3JlIG51YW5jZWQgdmlzaWJpbGl0eSBjb250cm9sbCBjb25zaWRlclxuICAgICAqIHVzaW5nIHRoZSBPdmVybGF5IGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICAgKi9cbiAgICBkZWZhdWx0T3ZlcmxheVNob3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBlbGVtZW50IG9yIHRleHQgdG8gb3ZlcmxheSBuZXh0IHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgb3ZlcmxheTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uQmx1cjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25Gb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25Nb3VzZUVudGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbk1vdXNlTGVhdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIC8vb3ZlcnJpZGUgc3BlY2lmaWMgb3ZlcmxheSBwcm9wc1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGFyZ2V0OiBmdW5jdGlvbiB0YXJnZXQoKSB7fSxcbiAgICAvKipcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBvbkhpZGU6IGZ1bmN0aW9uIG9uSGlkZSgpIHt9LFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHt9XG4gIH0pLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmlnZ2VyOiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc092ZXJsYXlTaG93bjogdGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duID09IG51bGwgPyBmYWxzZSA6IHRoaXMucHJvcHMuZGVmYXVsdE92ZXJsYXlTaG93blxuICAgIH07XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9tb3VudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfcmVhY3QyWydkZWZhdWx0J10ucmVuZGVyKHRoaXMuX292ZXJsYXksIHRoaXMuX21vdW50Tm9kZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX21vdW50Tm9kZSk7XG4gICAgdGhpcy5fbW91bnROb2RlID0gbnVsbDtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX21vdW50Tm9kZSkge1xuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLnJlbmRlcih0aGlzLl9vdmVybGF5LCB0aGlzLl9tb3VudE5vZGUpO1xuICAgIH1cbiAgfSxcblxuICBnZXRPdmVybGF5VGFyZ2V0OiBmdW5jdGlvbiBnZXRPdmVybGF5VGFyZ2V0KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gIH0sXG5cbiAgZ2V0T3ZlcmxheTogZnVuY3Rpb24gZ2V0T3ZlcmxheSgpIHtcbiAgICB2YXIgb3ZlcmxheVByb3BzID0gX2V4dGVuZHMoe30sIF9sb2Rhc2hPYmplY3RQaWNrMlsnZGVmYXVsdCddKHRoaXMucHJvcHMsIF9PYmplY3Qka2V5cyhfT3ZlcmxheTJbJ2RlZmF1bHQnXS5wcm9wVHlwZXMpKSwge1xuICAgICAgc2hvdzogdGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93bixcbiAgICAgIG9uSGlkZTogdGhpcy5oaWRlLFxuICAgICAgdGFyZ2V0OiB0aGlzLmdldE92ZXJsYXlUYXJnZXQsXG4gICAgICBvbkV4aXQ6IHRoaXMucHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLnByb3BzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLnByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FbnRlcjogdGhpcy5wcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5wcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLnByb3BzLm9uRW50ZXJlZFxuICAgIH0pO1xuXG4gICAgdmFyIG92ZXJsYXkgPSBfcmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMub3ZlcmxheSwge1xuICAgICAgcGxhY2VtZW50OiBvdmVybGF5UHJvcHMucGxhY2VtZW50LFxuICAgICAgY29udGFpbmVyOiBvdmVybGF5UHJvcHMuY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfT3ZlcmxheTJbJ2RlZmF1bHQnXSxcbiAgICAgIG92ZXJsYXlQcm9wcyxcbiAgICAgIG92ZXJsYXlcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciB0cmlnZ2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMucHJvcHMub3ZlcmxheS5wcm9wcy5pZFxuICAgIH07XG5cbiAgICAvLyBjcmVhdGUgaW4gcmVuZGVyIG90aGVyd2lzZSBvd25lciBpcyBsb3N0Li4uXG4gICAgdGhpcy5fb3ZlcmxheSA9IHRoaXMuZ2V0T3ZlcmxheSgpO1xuXG4gICAgcHJvcHMub25DbGljayA9IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSh0cmlnZ2VyLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMub25DbGljayk7XG5cbiAgICBpZiAoaXNPbmVPZignY2xpY2snLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbkNsaWNrID0gX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKHRoaXMudG9nZ2xlLCBwcm9wcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPbmVPZignaG92ZXInLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBfcmVhY3RMaWJXYXJuaW5nMlsnZGVmYXVsdCddKCEodGhpcy5wcm9wcy50cmlnZ2VyID09PSAnaG92ZXInKSwgJ1tyZWFjdC1ib290c3RyYXBdIFNwZWNpZnlpbmcgb25seSB0aGUgYFwiaG92ZXJcImAgdHJpZ2dlciBsaW1pdHMgdGhlIHZpc2liaWx0eSBvZiB0aGUgb3ZlcmxheSB0byBqdXN0IG1vdXNlIHVzZXJzLiAnICsgJ0NvbnNpZGVyIGFsc28gaW5jbHVkaW5nIHRoZSBgXCJmb2N1c1wiYCB0cmlnZ2VyIHNvIHRoYXQgdG91Y2ggYW5kIGtleWJvYXJkIG9ubHkgdXNlcnMgY2FuIHNlZSB0aGUgb3ZlcmxheSBhcyB3ZWxsLicpO1xuXG4gICAgICBwcm9wcy5vbk1vdXNlT3ZlciA9IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSh0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uTW91c2VPdmVyKTtcbiAgICAgIHByb3BzLm9uTW91c2VPdXQgPSBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10odGhpcy5oYW5kbGVEZWxheWVkSGlkZSwgdGhpcy5wcm9wcy5vbk1vdXNlT3V0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNPbmVPZignZm9jdXMnLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbkZvY3VzID0gX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKHRoaXMuaGFuZGxlRGVsYXllZFNob3csIHRoaXMucHJvcHMub25Gb2N1cyk7XG4gICAgICBwcm9wcy5vbkJsdXIgPSBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10odGhpcy5oYW5kbGVEZWxheWVkSGlkZSwgdGhpcy5wcm9wcy5vbkJsdXIpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHByb3BzKTtcbiAgfSxcblxuICBoYW5kbGVEZWxheWVkU2hvdzogZnVuY3Rpb24gaGFuZGxlRGVsYXllZFNob3coKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlTaG93ICE9IG51bGwgPyB0aGlzLnByb3BzLmRlbGF5U2hvdyA6IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAoIWRlbGF5KSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlckRlbGF5ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICBfdGhpcy5zaG93KCk7XG4gICAgfSwgZGVsYXkpO1xuICB9LFxuXG4gIGhhbmRsZURlbGF5ZWRIaWRlOiBmdW5jdGlvbiBoYW5kbGVEZWxheWVkSGlkZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlIaWRlICE9IG51bGwgPyB0aGlzLnByb3BzLmRlbGF5SGlkZSA6IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAoIWRlbGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlckRlbGF5ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgX3RoaXMyLmhpZGUoKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBPdmVybGF5VHJpZ2dlciBjbGFzcyB0aGF0IGZvcndhcmRzIHRoZSByZWxldmFudCBjb250ZXh0XG4gKlxuICogVGhpcyBzdGF0aWMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhdCB0aGUgbW9kdWxlIGxldmVsLCBpbnN0ZWFkIG9mIGluXG4gKiBlLmcuIGEgcmVuZGVyKCkgbWV0aG9kLCBiZWNhdXNlIGl0J3MgZXhwZW5zaXZlIHRvIGNyZWF0ZSBuZXcgY2xhc3Nlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgeW91IHdvdWxkIHdhbnQgdG8gaGF2ZTpcbiAqXG4gKiA+IGV4cG9ydCBkZWZhdWx0IE92ZXJsYXlUcmlnZ2VyLndpdGhDb250ZXh0KHtcbiAqID4gICBteUNvbnRleHRLZXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAqID4gfSk7XG4gKlxuICogYW5kIGltcG9ydCB0aGlzIHdoZW4gbmVlZGVkLlxuICovXG5PdmVybGF5VHJpZ2dlci53aXRoQ29udGV4dCA9IF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMlsnZGVmYXVsdCddKE92ZXJsYXlUcmlnZ2VyLCAnb3ZlcmxheScpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBPdmVybGF5VHJpZ2dlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheVRyaWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpWydkZWZhdWx0J107XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQ29udGV4dFdyYXBwZXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IHRyaWdnZXIgY2xhc3MgdGhhdCBpbmplY3RzIGNvbnRleHQgaW50byBvdmVybGF5LlxuICovXG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0V3JhcHBlcihUcmlnZ2VyLCBwcm9wTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHRUeXBlcykge1xuICAgIHZhciBDb250ZXh0V3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKENvbnRleHRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gQ29udGV4dFdyYXBwZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZXh0V3JhcHBlcik7XG5cbiAgICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBDb250ZXh0V3JhcHBlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgICAgfTtcblxuICAgICAgQ29udGV4dFdyYXBwZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgLy8gU3RyaXAgaW5qZWN0ZWQgcHJvcHMgZnJvbSBiZWxvdy5cbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB3cmFwcGVkID0gX3Byb3BzLndyYXBwZWQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3Byb3BzLmNvbnRleHQ7XG5cbiAgICAgICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd3cmFwcGVkJywgJ2NvbnRleHQnXSk7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQod3JhcHBlZCwgcHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRleHRXcmFwcGVyO1xuICAgIH0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG4gICAgQ29udGV4dFdyYXBwZXIuY2hpbGRDb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICB2YXIgVHJpZ2dlcldpdGhDb250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFRyaWdnZXJXaXRoQ29udGV4dCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWdnZXJXaXRoQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIFRyaWdnZXJXaXRoQ29udGV4dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHRoaXMuZ2V0V3JhcHBlZE92ZXJsYXkoKTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgVHJpZ2dlcixcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBUcmlnZ2VyV2l0aENvbnRleHQucHJvdG90eXBlLmdldFdyYXBwZWRPdmVybGF5ID0gZnVuY3Rpb24gZ2V0V3JhcHBlZE92ZXJsYXkoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChDb250ZXh0V3JhcHBlciwge1xuICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB3cmFwcGVkOiB0aGlzLnByb3BzW3Byb3BOYW1lXVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBUcmlnZ2VyV2l0aENvbnRleHQ7XG4gICAgfSkoKTtcblxuICAgIFRyaWdnZXJXaXRoQ29udGV4dC5jb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICByZXR1cm4gVHJpZ2dlcldpdGhDb250ZXh0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRmxhdHRlbicpLFxuICAgIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2JpbmRDYWxsYmFjaycpLFxuICAgIHBpY2tCeUFycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGlja0J5QXJyYXknKSxcbiAgICBwaWNrQnlDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BpY2tCeUNhbGxiYWNrJyksXG4gICAgcmVzdFBhcmFtID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vcmVzdFBhcmFtJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2YgdGhlIHBpY2tlZCBgb2JqZWN0YCBwcm9wZXJ0aWVzLiBQcm9wZXJ0eVxuICogbmFtZXMgbWF5IGJlIHNwZWNpZmllZCBhcyBpbmRpdmlkdWFsIGFyZ3VtZW50cyBvciBhcyBhcnJheXMgb2YgcHJvcGVydHlcbiAqIG5hbWVzLiBJZiBgcHJlZGljYXRlYCBpcyBwcm92aWRlZCBpdCdzIGludm9rZWQgZm9yIGVhY2ggcHJvcGVydHkgb2YgYG9iamVjdGBcbiAqIHBpY2tpbmcgdGhlIHByb3BlcnRpZXMgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzXG4gKiBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwga2V5LCBvYmplY3QpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbnwuLi4oc3RyaW5nfHN0cmluZ1tdKX0gW3ByZWRpY2F0ZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyXG4gKiAgaXRlcmF0aW9uIG9yIHByb3BlcnR5IG5hbWVzIHRvIHBpY2ssIHNwZWNpZmllZCBhcyBpbmRpdmlkdWFsIHByb3BlcnR5XG4gKiAgbmFtZXMgb3IgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcsICdhZ2UnOiA0MCB9O1xuICpcbiAqIF8ucGljayhvYmplY3QsICd1c2VyJyk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqXG4gKiBfLnBpY2sob2JqZWN0LCBfLmlzU3RyaW5nKTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcgfVxuICovXG52YXIgcGljayA9IHJlc3RQYXJhbShmdW5jdGlvbihvYmplY3QsIHByb3BzKSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIHByb3BzWzBdID09ICdmdW5jdGlvbidcbiAgICA/IHBpY2tCeUNhbGxiYWNrKG9iamVjdCwgYmluZENhbGxiYWNrKHByb3BzWzBdLCBwcm9wc1sxXSwgMykpXG4gICAgOiBwaWNrQnlBcnJheShvYmplY3QsIGJhc2VGbGF0dGVuKHByb3BzKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL29iamVjdC9waWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9hcnJheVB1c2gnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIGFkZGVkIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nXG4gKiBmbGF0dGVuaW5nIGFuZCBzcGVjaWZ5aW5nIHRoZSBzdGFydCBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgZmxhdHRlbmluZyB0byBhcnJheXMtbGlrZSBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgaXNEZWVwLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgICAgICAoaXNTdHJpY3QgfHwgaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgaWYgKGlzRGVlcCkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgaXNEZWVwLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZsYXR0ZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlQdXNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2xhbmcvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2dldExlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNBcnJheSA9IGdldE5hdGl2ZShBcnJheSwgJ2lzQXJyYXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9sYW5nL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNOYXRpdmUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucGlja2Agd2hpY2ggcGlja3MgYG9iamVjdGAgcHJvcGVydGllcyBzcGVjaWZpZWRcbiAqIGJ5IGBwcm9wc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gcGljay5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHBpY2tCeUFycmF5KG9iamVjdCwgcHJvcHMpIHtcbiAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrQnlBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gb2JqZWN0IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VGb3JJbiA9IHJlcXVpcmUoJy4vYmFzZUZvckluJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnBpY2tgIHdoaWNoIHBpY2tzIGBvYmplY3RgIHByb3BlcnRpZXMgYHByZWRpY2F0ZWBcbiAqIHJldHVybnMgdHJ1dGh5IGZvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGlja0J5Q2FsbGJhY2sob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBiYXNlRm9ySW4ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBrZXksIG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrQnlDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL2Jhc2VGb3InKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9ySW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JJbihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvckluO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JJbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvckluYCBhbmQgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBvYmplY3RgIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBpbnZva2luZyBgaXRlcmF0ZWVgIGZvclxuICogZWFjaCBwcm9wZXJ0eS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5XG4gKiByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIGBfLmZvckluYCBvciBgXy5mb3JJblJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaXRlcmFibGUgPSB0b09iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9vYmplY3Qva2V5c0luLmpzXG4gKiogbW9kdWxlIGlkID0gMTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9+L2xvZGFzaC9pbnRlcm5hbC9pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGVcbiAqIGNyZWF0ZWQgZnVuY3Rpb24gYW5kIGFyZ3VtZW50cyBmcm9tIGBzdGFydGAgYW5kIGJleW9uZCBwcm92aWRlZCBhcyBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb24gdGhlIFtyZXN0IHBhcmFtZXRlcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0Z1bmN0aW9ucy9yZXN0X3BhcmFtZXRlcnMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNheSA9IF8ucmVzdFBhcmFtKGZ1bmN0aW9uKHdoYXQsIG5hbWVzKSB7XG4gKiAgIHJldHVybiB3aGF0ICsgJyAnICsgXy5pbml0aWFsKG5hbWVzKS5qb2luKCcsICcpICtcbiAqICAgICAoXy5zaXplKG5hbWVzKSA+IDEgPyAnLCAmICcgOiAnJykgKyBfLmxhc3QobmFtZXMpO1xuICogfSk7XG4gKlxuICogc2F5KCdoZWxsbycsICdmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJyk7XG4gKiAvLyA9PiAnaGVsbG8gZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnXG4gKi9cbmZ1bmN0aW9uIHJlc3RQYXJhbShmdW5jLCBzdGFydCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiAoK3N0YXJ0IHx8IDApLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHJlc3RbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoIChzdGFydCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIHJlc3QpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIHJlc3QpO1xuICAgIH1cbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHJlc3Q7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0UGFyYW07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvfi9sb2Rhc2gvZnVuY3Rpb24vcmVzdFBhcmFtLmpzXG4gKiogbW9kdWxlIGlkID0gMTM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgUGFnZUhlYWRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZUhlYWRlcicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAncGFnZS1oZWFkZXInKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDEnLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VIZWFkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VIZWFkZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfU2FmZUFuY2hvciA9IHJlcXVpcmUoJy4vU2FmZUFuY2hvcicpO1xuXG52YXIgX1NhZmVBbmNob3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2FmZUFuY2hvcik7XG5cbnZhciBQYWdlSXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZUl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJldmlvdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuZXh0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAncHJldmlvdXMnOiB0aGlzLnByb3BzLnByZXZpb3VzLFxuICAgICAgJ25leHQnOiB0aGlzLnByb3BzLm5leHRcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9TYWZlQW5jaG9yMlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAgaHJlZjogdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTZWxlY3QgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0IHx8IHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnZUl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VJdGVtLmpzXG4gKiogbW9kdWxlIGlkID0gMTM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBQYWdlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3BhZ2VyJykgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhZ2VJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUGFnZUl0ZW06IGZ1bmN0aW9uIHJlbmRlclBhZ2VJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBvblNlbGVjdDogX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfUGFnaW5hdGlvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vUGFnaW5hdGlvbkJ1dHRvbicpO1xuXG52YXIgX1BhZ2luYXRpb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnaW5hdGlvbkJ1dHRvbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF9TYWZlQW5jaG9yID0gcmVxdWlyZSgnLi9TYWZlQW5jaG9yJyk7XG5cbnZhciBfU2FmZUFuY2hvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TYWZlQW5jaG9yKTtcblxudmFyIFBhZ2luYXRpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2luYXRpb24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlUGFnZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgaXRlbXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heEJ1dHRvbnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGVsbGlwc2lzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlyc3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBsYXN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJldjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5leHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gdXNlIGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoZSBidXR0b25zXG4gICAgICovXG4gICAgYnV0dG9uQ29tcG9uZW50Q2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVQYWdlOiAxLFxuICAgICAgaXRlbXM6IDEsXG4gICAgICBtYXhCdXR0b25zOiAwLFxuICAgICAgZmlyc3Q6IGZhbHNlLFxuICAgICAgbGFzdDogZmFsc2UsXG4gICAgICBwcmV2OiBmYWxzZSxcbiAgICAgIG5leHQ6IGZhbHNlLFxuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICBidXR0b25Db21wb25lbnRDbGFzczogX1NhZmVBbmNob3IyWydkZWZhdWx0J10sXG4gICAgICBic0NsYXNzOiAncGFnaW5hdGlvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlclBhZ2VCdXR0b25zOiBmdW5jdGlvbiByZW5kZXJQYWdlQnV0dG9ucygpIHtcbiAgICB2YXIgcGFnZUJ1dHRvbnMgPSBbXTtcbiAgICB2YXIgc3RhcnRQYWdlID0gdW5kZWZpbmVkLFxuICAgICAgICBlbmRQYWdlID0gdW5kZWZpbmVkLFxuICAgICAgICBoYXNIaWRkZW5QYWdlc0FmdGVyID0gdW5kZWZpbmVkO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXhCdXR0b25zID0gX3Byb3BzLm1heEJ1dHRvbnM7XG4gICAgdmFyIGFjdGl2ZVBhZ2UgPSBfcHJvcHMuYWN0aXZlUGFnZTtcbiAgICB2YXIgaXRlbXMgPSBfcHJvcHMuaXRlbXM7XG4gICAgdmFyIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0O1xuICAgIHZhciBlbGxpcHNpcyA9IF9wcm9wcy5lbGxpcHNpcztcbiAgICB2YXIgYnV0dG9uQ29tcG9uZW50Q2xhc3MgPSBfcHJvcHMuYnV0dG9uQ29tcG9uZW50Q2xhc3M7XG5cbiAgICBpZiAobWF4QnV0dG9ucykge1xuICAgICAgdmFyIGhpZGRlblBhZ2VzQmVmb3JlID0gYWN0aXZlUGFnZSAtIHBhcnNlSW50KG1heEJ1dHRvbnMgLyAyKTtcbiAgICAgIHN0YXJ0UGFnZSA9IGhpZGRlblBhZ2VzQmVmb3JlID4gMSA/IGhpZGRlblBhZ2VzQmVmb3JlIDogMTtcbiAgICAgIGhhc0hpZGRlblBhZ2VzQWZ0ZXIgPSBzdGFydFBhZ2UgKyBtYXhCdXR0b25zIDw9IGl0ZW1zO1xuXG4gICAgICBpZiAoIWhhc0hpZGRlblBhZ2VzQWZ0ZXIpIHtcbiAgICAgICAgZW5kUGFnZSA9IGl0ZW1zO1xuICAgICAgICBzdGFydFBhZ2UgPSBpdGVtcyAtIG1heEJ1dHRvbnMgKyAxO1xuICAgICAgICBpZiAoc3RhcnRQYWdlIDwgMSkge1xuICAgICAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBtYXhCdXR0b25zIC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICAgIGVuZFBhZ2UgPSBpdGVtcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwYWdlbnVtYmVyID0gc3RhcnRQYWdlOyBwYWdlbnVtYmVyIDw9IGVuZFBhZ2U7IHBhZ2VudW1iZXIrKykge1xuICAgICAgcGFnZUJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHBhZ2VudW1iZXIsXG4gICAgICAgICAgZXZlbnRLZXk6IHBhZ2VudW1iZXIsXG4gICAgICAgICAgYWN0aXZlOiBwYWdlbnVtYmVyID09PSBhY3RpdmVQYWdlLFxuICAgICAgICAgIG9uU2VsZWN0OiBvblNlbGVjdCxcbiAgICAgICAgICBidXR0b25Db21wb25lbnRDbGFzczogYnV0dG9uQ29tcG9uZW50Q2xhc3MgfSxcbiAgICAgICAgcGFnZW51bWJlclxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgaWYgKG1heEJ1dHRvbnMgJiYgaGFzSGlkZGVuUGFnZXNBZnRlciAmJiBlbGxpcHNpcykge1xuICAgICAgcGFnZUJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdlbGxpcHNpcycsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgYnV0dG9uQ29tcG9uZW50Q2xhc3M6IGJ1dHRvbkNvbXBvbmVudENsYXNzIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ01vcmUnIH0sXG4gICAgICAgICAgJy4uLidcbiAgICAgICAgKVxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VCdXR0b25zO1xuICB9LFxuXG4gIHJlbmRlclByZXY6IGZ1bmN0aW9uIHJlbmRlclByZXYoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnByZXYpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICdwcmV2JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSAtIDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IDEsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0LFxuICAgICAgICBidXR0b25Db21wb25lbnRDbGFzczogdGhpcy5wcm9wcy5idXR0b25Db21wb25lbnRDbGFzcyB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdQcmV2aW91cycgfSxcbiAgICAgICAgJ+KAuSdcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5leHQ6IGZ1bmN0aW9uIHJlbmRlck5leHQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5leHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICduZXh0JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSArIDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPj0gdGhpcy5wcm9wcy5pdGVtcyxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QsXG4gICAgICAgIGJ1dHRvbkNvbXBvbmVudENsYXNzOiB0aGlzLnByb3BzLmJ1dHRvbkNvbXBvbmVudENsYXNzIH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ05leHQnIH0sXG4gICAgICAgICfigLonXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGaXJzdDogZnVuY3Rpb24gcmVuZGVyRmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZpcnN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgICBldmVudEtleTogMSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gMSxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QsXG4gICAgICAgIGJ1dHRvbkNvbXBvbmVudENsYXNzOiB0aGlzLnByb3BzLmJ1dHRvbkNvbXBvbmVudENsYXNzIH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ0ZpcnN0JyB9LFxuICAgICAgICAnwqsnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJMYXN0OiBmdW5jdGlvbiByZW5kZXJMYXN0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbGFzdCcsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID49IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0LFxuICAgICAgICBidXR0b25Db21wb25lbnRDbGFzczogdGhpcy5wcm9wcy5idXR0b25Db21wb25lbnRDbGFzcyB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdMYXN0JyB9LFxuICAgICAgICAnwrsnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5nZXRCc0NsYXNzU2V0KCkpIH0pLFxuICAgICAgdGhpcy5yZW5kZXJGaXJzdCgpLFxuICAgICAgdGhpcy5yZW5kZXJQcmV2KCksXG4gICAgICB0aGlzLnJlbmRlclBhZ2VCdXR0b25zKCksXG4gICAgICB0aGlzLnJlbmRlck5leHQoKSxcbiAgICAgIHRoaXMucmVuZGVyTGFzdCgpXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2luYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2luYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudCA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlU2VsZWN0ZWRFdmVudCcpO1xuXG52YXIgX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBQYWdpbmF0aW9uQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdpbmF0aW9uQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB1c2UgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBidXR0b25Db21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB2YXIgc2VsZWN0ZWRFdmVudCA9IF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQyWydkZWZhdWx0J10odGhpcy5wcm9wcy5ldmVudEtleSk7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50LCBzZWxlY3RlZEV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBfZXh0ZW5kcyh7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICB9LCB0aGlzLmdldEJzQ2xhc3NTZXQoKSk7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcblxuICAgIHZhciBhbmNob3JQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJ10pO1xuXG4gICAgdmFyIEJ1dHRvbkNvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5idXR0b25Db21wb25lbnRDbGFzcztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10oY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQnV0dG9uQ29tcG9uZW50Q2xhc3MsIF9leHRlbmRzKHt9LCBhbmNob3JQcm9wcywge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrIH0pKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdpbmF0aW9uQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdpbmF0aW9uQnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU2VsZWN0ZWRFdmVudDtcblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0ZWRFdmVudChldmVudEtleSkge1xuICB2YXIgc2VsZWN0aW9uUHJldmVudGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudEtleTogZXZlbnRLZXksXG5cbiAgICBwcmV2ZW50U2VsZWN0aW9uOiBmdW5jdGlvbiBwcmV2ZW50U2VsZWN0aW9uKCkge1xuICAgICAgc2VsZWN0aW9uUHJldmVudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaXNTZWxlY3Rpb25QcmV2ZW50ZWQ6IGZ1bmN0aW9uIGlzU2VsZWN0aW9uUHJldmVudGVkKCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGlvblByZXZlbnRlZDtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jcmVhdGVTZWxlY3RlZEV2ZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzZSA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZSk7XG5cbnZhciBQYW5lbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFuZWwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb290ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBkZWZhdWx0RXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAncGFuZWwnLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEV4cGFuZGVkID0gdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkIDogdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZGVkOiBkZWZhdWx0RXhwYW5kZWRcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUpIHtcbiAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGUsIHRoaXMucHJvcHMuZXZlbnRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVRvZ2dsZTogZnVuY3Rpb24gaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWQgfSk7XG4gIH0sXG5cbiAgaXNFeHBhbmRlZDogZnVuY3Rpb24gaXNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gbnVsbCA6IHRoaXMucHJvcHMuaWQsIG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgdGhpcy5yZW5kZXJIZWFkaW5nKCksXG4gICAgICB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZUJvZHkoKSA6IHRoaXMucmVuZGVyQm9keSgpLFxuICAgICAgdGhpcy5yZW5kZXJGb290ZXIoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVCb2R5OiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoKSB7XG4gICAgdmFyIGNvbGxhcHNlQ2xhc3MgPSB0aGlzLnByZWZpeENsYXNzKCdjb2xsYXBzZScpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0NvbGxhcHNlMlsnZGVmYXVsdCddLFxuICAgICAgeyAnaW4nOiB0aGlzLmlzRXhwYW5kZWQoKSB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjb2xsYXBzZUNsYXNzLFxuICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgIHJlZjogJ3BhbmVsJyxcbiAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuaXNFeHBhbmRlZCgpIH0sXG4gICAgICAgIHRoaXMucmVuZGVyQm9keSgpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KCkge1xuICAgIHZhciBhbGxDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGJvZHlFbGVtZW50cyA9IFtdO1xuICAgIHZhciBwYW5lbEJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIHZhciBib2R5Q2xhc3MgPSB0aGlzLnByZWZpeENsYXNzKCdib2R5Jyk7XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7IGtleTogYm9keUVsZW1lbnRzLmxlbmd0aCB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhbmVsQ2hpbGQoY2hpbGQpIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGdldFByb3BzKCkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYW5lbEJvZHkoY2hpbGRyZW4pIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGJvZHlDbGFzcyB9LCBnZXRQcm9wcygpKSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1heWJlUmVuZGVyUGFuZWxCb2R5KCkge1xuICAgICAgaWYgKHBhbmVsQm9keUNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFkZFBhbmVsQm9keShwYW5lbEJvZHlDaGlsZHJlbik7XG4gICAgICBwYW5lbEJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlZGdlIGNhc2VzIHdoZXJlIHdlIHNob3VsZCBub3QgaXRlcmF0ZSB0aHJvdWdoIGNoaWxkcmVuLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShhbGxDaGlsZHJlbikgfHwgYWxsQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJGaWxsKGFsbENoaWxkcmVuKSkge1xuICAgICAgICBhZGRQYW5lbENoaWxkKGFsbENoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFBhbmVsQm9keShhbGxDaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgYWxsQ2hpbGRyZW4uZm9yRWFjaCgoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlckZpbGwoY2hpbGQpKSB7XG4gICAgICAgICAgbWF5YmVSZW5kZXJQYW5lbEJvZHkoKTtcblxuICAgICAgICAgIC8vIFNlcGFyYXRlbHkgYWRkIHRoZSBmaWxsZWQgZWxlbWVudC5cbiAgICAgICAgICBhZGRQYW5lbENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbEJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgIG1heWJlUmVuZGVyUGFuZWxCb2R5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHlFbGVtZW50cztcbiAgfSxcblxuICBzaG91bGRSZW5kZXJGaWxsOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJGaWxsKGNoaWxkKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCAhPSBudWxsO1xuICB9LFxuXG4gIHJlbmRlckhlYWRpbmc6IGZ1bmN0aW9uIHJlbmRlckhlYWRpbmcoKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMucHJvcHMuaGVhZGVyO1xuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGhlYWRlcikgfHwgQXJyYXkuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZVRpdGxlKGhlYWRlcikgOiBoZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByZWZpeENsYXNzKCd0aXRsZScpLCBoZWFkZXIucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2libGUpIHtcbiAgICAgICAgaGVhZGVyID0gX3JlYWN0LmNsb25lRWxlbWVudChoZWFkZXIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLnByb3BzLmNoaWxkcmVuKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlciA9IF9yZWFjdC5jbG9uZUVsZW1lbnQoaGVhZGVyLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ2hlYWRpbmcnKSB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgIGhyZWY6ICcjJyArICh0aGlzLnByb3BzLmlkIHx8ICcnKSxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5wcm9wcy5pZCA6IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5pc0V4cGFuZGVkKCkgPyBudWxsIDogJ2NvbGxhcHNlZCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5pc0V4cGFuZGVkKCksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0IH0sXG4gICAgICBoZWFkZXJcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNvbGxhcHNpYmxlVGl0bGU6IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlVGl0bGUoaGVhZGVyKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2g0JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByZWZpeENsYXNzKCd0aXRsZScpIH0sXG4gICAgICB0aGlzLnJlbmRlckFuY2hvcihoZWFkZXIpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGb290ZXI6IGZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZm9vdGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByZWZpeENsYXNzKCdmb290ZXInKSB9LFxuICAgICAgdGhpcy5wcm9wcy5mb290ZXJcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFuZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhbmVsLmpzXG4gKiogbW9kdWxlIGlkID0gMTQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgUG9wb3ZlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUG9wb3ZlcicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBBbiBodG1sIGlkIGF0dHJpYnV0ZSwgbmVjZXNzYXJ5IGZvciBhY2Nlc3NpYmlsaXR5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICBpZDogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmlzUmVxdWlyZWRGb3JBMTF5KF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nKSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRpcmVjdGlvbiB0aGUgUG9wb3ZlciBpcyBwb3NpdGlvbmVkIHRvd2FyZHMuXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIFwibGVmdFwiIHBvc2l0aW9uIHZhbHVlIGZvciB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBwb3NpdGlvbkxlZnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBcInRvcFwiIHBvc2l0aW9uIHZhbHVlIGZvciB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBwb3NpdGlvblRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIFwibGVmdFwiIHBvc2l0aW9uIHZhbHVlIGZvciB0aGUgUG9wb3ZlciBhcnJvdy5cbiAgICAgKi9cbiAgICBhcnJvd09mZnNldExlZnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ0b3BcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFBvcG92ZXIgYXJyb3cuXG4gICAgICovXG4gICAgYXJyb3dPZmZzZXRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAvKipcbiAgICAgKiBUaXRsZSB0ZXh0XG4gICAgICovXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NlcztcblxuICAgIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge1xuICAgICAgJ3BvcG92ZXInOiB0cnVlXG4gICAgfSwgX2NsYXNzZXNbdGhpcy5wcm9wcy5wbGFjZW1lbnRdID0gdHJ1ZSwgX2NsYXNzZXMpO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLnBvc2l0aW9uVG9wLFxuICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snXG4gICAgfTtcblxuICAgIHZhciBhcnJvd1N0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0TGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0VG9wXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoeyByb2xlOiAndG9vbHRpcCcgfSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgc3R5bGU6IHN0eWxlLCB0aXRsZTogbnVsbCB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogXCJhcnJvd1wiLCBzdHlsZTogYXJyb3dTdHlsZSB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUgPyB0aGlzLnJlbmRlclRpdGxlKCkgOiBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJwb3BvdmVyLWNvbnRlbnRcIiB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUaXRsZTogZnVuY3Rpb24gcmVuZGVyVGl0bGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2gzJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBcInBvcG92ZXItdGl0bGVcIiB9LFxuICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQb3BvdmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9Qb3BvdmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzIsIHtpZ25vcmU6IFwiYnNTdHlsZVwifV0gKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1N0eWxlYCB0eXBlIHZhbGlkYXRpb24gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0ludGVycG9sYXRlID0gcmVxdWlyZSgnLi9JbnRlcnBvbGF0ZScpO1xuXG52YXIgX0ludGVycG9sYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ludGVycG9sYXRlKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUHJvZ3Jlc3NCYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Byb2dyZXNzQmFyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBtaW46IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG5vdzogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBsYWJlbDogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIHNyT25seTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHN0cmlwZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmU6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogb25seVByb2dyZXNzQmFyLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW50ZXJwb2xhdGVDbGFzczogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGlzQ2hpbGQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdwcm9ncmVzcy1iYXInLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDBcbiAgICB9O1xuICB9LFxuXG4gIGdldFBlcmNlbnRhZ2U6IGZ1bmN0aW9uIGdldFBlcmNlbnRhZ2Uobm93LCBtaW4sIG1heCkge1xuICAgIHZhciByb3VuZFByZWNpc2lvbiA9IDEwMDA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIG1pbikgLyAobWF4IC0gbWluKSAqIDEwMCAqIHJvdW5kUHJlY2lzaW9uKSAvIHJvdW5kUHJlY2lzaW9uO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgY29udGVudCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGRCYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5yZW5kZXJQcm9ncmVzc0JhcigpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3Byb2dyZXNzJykgfSksXG4gICAgICBjb250ZW50XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDaGlsZEJhcjogZnVuY3Rpb24gcmVuZGVyQ2hpbGRCYXIoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGlzQ2hpbGQ6IHRydWUsXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzQmFyKCkge1xuICAgIHZhciBwZXJjZW50YWdlID0gdGhpcy5nZXRQZXJjZW50YWdlKHRoaXMucHJvcHMubm93LCB0aGlzLnByb3BzLm1pbiwgdGhpcy5wcm9wcy5tYXgpO1xuXG4gICAgdmFyIGxhYmVsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgbGFiZWwgPSB0aGlzLnJlbmRlckxhYmVsKHBlcmNlbnRhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuc3JPbmx5KSB7XG4gICAgICBsYWJlbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcInNyLW9ubHlcIiB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSwge1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICdwcm9ncmVzcy1iYXItc3RyaXBlZCc6IHRoaXMucHJvcHMuYWN0aXZlIHx8IHRoaXMucHJvcHMuc3RyaXBlZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcbiAgICAgICAgc3R5bGU6IHsgd2lkdGg6IHBlcmNlbnRhZ2UgKyAnJScgfSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLnByb3BzLm5vdyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiB0aGlzLnByb3BzLm1pbixcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLnByb3BzLm1heCB9KSxcbiAgICAgIGxhYmVsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJMYWJlbDogZnVuY3Rpb24gcmVuZGVyTGFiZWwocGVyY2VudGFnZSkge1xuICAgIHZhciBJbnRlcnBvbGF0ZUNsYXNzID0gdGhpcy5wcm9wcy5pbnRlcnBvbGF0ZUNsYXNzIHx8IF9JbnRlcnBvbGF0ZTJbJ2RlZmF1bHQnXTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIEludGVycG9sYXRlQ2xhc3MsXG4gICAgICB7XG4gICAgICAgIG5vdzogdGhpcy5wcm9wcy5ub3csXG4gICAgICAgIG1pbjogdGhpcy5wcm9wcy5taW4sXG4gICAgICAgIG1heDogdGhpcy5wcm9wcy5tYXgsXG4gICAgICAgIHBlcmNlbnQ6IHBlcmNlbnRhZ2UsXG4gICAgICAgIGJzU3R5bGU6IHRoaXMucHJvcHMuYnNTdHlsZSB9LFxuICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEN1c3RvbSBwcm9wVHlwZXMgY2hlY2tlclxuICovXG5mdW5jdGlvbiBvbmx5UHJvZ3Jlc3NCYXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyb3IgPSB1bmRlZmluZWQsXG4gICAgICAgICAgY2hpbGRJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChwcm9wc1twcm9wTmFtZV0sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSAhPT0gUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICBjaGlsZElkZW50aWZpZXIgPSBjaGlsZC50eXBlLmRpc3BsYXlOYW1lID8gY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA6IGNoaWxkLnR5cGU7XG4gICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ0NoaWxkcmVuIG9mICcgKyBjb21wb25lbnROYW1lICsgJyBjYW4gY29udGFpbiBvbmx5IFByb2dyZXNzQmFyIGNvbXBvbmVudHMuIEZvdW5kICcgKyBjaGlsZElkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogZXJyb3JcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gJ29iamVjdCcpIHJldHVybiBfcmV0LnY7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHJvZ3Jlc3NCYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1Byb2dyZXNzQmFyLmpzXG4gKiogbW9kdWxlIGlkID0gMTQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBSb3cgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiB1c2UgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnZGl2J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3JvdycpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1Jvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsyLCB7aWdub3JlOiBcImJzU2l6ZVwifV0gKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1NpemVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4gPSByZXF1aXJlKCcuL0Ryb3Bkb3duU3RhdGVNaXhpbicpO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93blN0YXRlTWl4aW4pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfQnV0dG9uR3JvdXAgPSByZXF1aXJlKCcuL0J1dHRvbkdyb3VwJyk7XG5cbnZhciBfQnV0dG9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uR3JvdXApO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IHJlcXVpcmUoJy4vRHJvcGRvd25NZW51Jyk7XG5cbnZhciBfRHJvcGRvd25NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duTWVudSk7XG5cbnZhciBTcGxpdEJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU3BsaXRCdXR0b24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0Ryb3Bkb3duU3RhdGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkcm9wZG93blRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZHJvcHVwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHJvcGRvd25UaXRsZTogJ1RvZ2dsZSBkcm9wZG93bidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBncm91cENsYXNzZXMgPSB7XG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiBcImJ1dHRvblwiLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaWQ6IG51bGwgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKTtcblxuICAgIHZhciBkcm9wZG93bkJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogXCJkcm9wZG93bkJ1dHRvblwiLFxuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZHJvcGRvd24tdG9nZ2xlJyksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRHJvcGRvd25DbGljayxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGhyZWY6IG51bGwsXG4gICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgaWQ6IG51bGwgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5kcm9wZG93blRpdGxlXG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogXCJjYXJldFwiIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBzdHlsZTogeyBsZXR0ZXJTcGFjaW5nOiAnLS4zZW0nIH0gfSxcbiAgICAgICAgJ8KgJ1xuICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGJzU2l6ZTogdGhpcy5wcm9wcy5ic1NpemUsXG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10oZ3JvdXBDbGFzc2VzKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgfSxcbiAgICAgIGJ1dHRvbixcbiAgICAgIGRyb3Bkb3duQnV0dG9uLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwibWVudVwiLFxuICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLmhhbmRsZU9wdGlvblNlbGVjdCxcbiAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgICBwdWxsUmlnaHQ6IHRoaXMucHJvcHMucHVsbFJpZ2h0IH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZURyb3Bkb3duQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZURyb3Bkb3duQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZSghdGhpcy5zdGF0ZS5vcGVuKTtcbiAgfSxcblxuICBoYW5kbGVPcHRpb25TZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZU9wdGlvblNlbGVjdChrZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTcGxpdEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvU3BsaXRCdXR0b24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfU2FmZUFuY2hvciA9IHJlcXVpcmUoJy4vU2FmZUFuY2hvcicpO1xuXG52YXIgX1NhZmVBbmNob3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2FmZUFuY2hvcik7XG5cbnZhciBTdWJOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1N1Yk5hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDaGlsZEFjdGl2ZSh0aGlzKTtcbiAgfSxcblxuICBpc0NoaWxkQWN0aXZlOiBmdW5jdGlvbiBpc0NoaWxkQWN0aXZlKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVIcmVmID09PSBjaGlsZC5wcm9wcy5ocmVmKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2goY2hpbGQucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChncmFuZGNoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hpbGRBY3RpdmUoZ3JhbmRjaGlsZCkpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdhY3RpdmUnOiB0aGlzLmlzQWN0aXZlKCksXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfU2FmZUFuY2hvcjJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGhyZWY6IHRoaXMucHJvcHMuaHJlZixcbiAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSxcbiAgICAgICAgdGhpcy5wcm9wcy50ZXh0XG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcIm5hdlwiIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTmF2SXRlbSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgb25TZWxlY3Q6IF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdWJOYXY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1N1Yk5hdi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9OYXYgPSByZXF1aXJlKCcuL05hdicpO1xuXG52YXIgX05hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXYpO1xuXG52YXIgX05hdkl0ZW0gPSByZXF1aXJlKCcuL05hdkl0ZW0nKTtcblxudmFyIF9OYXZJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkl0ZW0pO1xuXG52YXIgcGFuZWxJZCA9IGZ1bmN0aW9uIHBhbmVsSWQocHJvcHMsIGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZC5wcm9wcy5pZCA/IGNoaWxkLnByb3BzLmlkIDogcHJvcHMuaWQgJiYgcHJvcHMuaWQgKyAnX19fcGFuZWxfX18nICsgY2hpbGQucHJvcHMuZXZlbnRLZXk7XG59O1xudmFyIHRhYklkID0gZnVuY3Rpb24gdGFiSWQocHJvcHMsIGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZC5wcm9wcy5pZCA/IGNoaWxkLnByb3BzLmlkICsgJ19fX3RhYicgOiBwcm9wcy5pZCAmJiBwcm9wcy5pZCArICdfX190YWJfX18nICsgY2hpbGQucHJvcHMuZXZlbnRLZXk7XG59O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWN0aXZlS2V5RnJvbUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBkZWZhdWx0QWN0aXZlS2V5ID0gdW5kZWZpbmVkO1xuXG4gIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGRlZmF1bHRBY3RpdmVLZXkgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IGNoaWxkLnByb3BzLmV2ZW50S2V5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmF1bHRBY3RpdmVLZXk7XG59XG5cbnZhciBUYWJiZWRBcmVhID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJiZWRBcmVhJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RhYnMnLCAncGlsbHMnXSksXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNTdHlsZTogJ3RhYnMnLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5IDogZ2V0RGVmYXVsdEFjdGl2ZUtleUZyb21DaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVLZXk6IGRlZmF1bHRBY3RpdmVLZXksXG4gICAgICBwcmV2aW91c0FjdGl2ZUtleTogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCAmJiBuZXh0UHJvcHMuYWN0aXZlS2V5ICE9PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlICdwcmV2aW91c0FjdGl2ZUtleScgY2hpbGQgc3RpbGwgZXhpc3RzXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2ZUtleSA9IF90aGlzLnByb3BzLmFjdGl2ZUtleTtcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2gobmV4dFByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSBwcmV2aW91c0FjdGl2ZUtleSkge1xuICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IHByZXZpb3VzQWN0aXZlS2V5XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiB0aGUgJ3ByZXZpb3VzQWN0aXZlS2V5JyBjaGlsZCBkb2VzIG5vdCBleGlzdCBhbnltb3JlXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwcmV2aW91c0FjdGl2ZUtleTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVBhbmVBbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVQYW5lQW5pbWF0ZU91dEVuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiBudWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGlkID0gX3Byb3BzLmlkO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydpZCddKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhYklmU2V0KGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucHJvcHMudGFiICE9IG51bGwgPyB0aGlzLnJlbmRlclRhYihjaGlsZCkgOiBudWxsO1xuICAgIH1cblxuICAgIHZhciBuYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9OYXYyWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgYWN0aXZlS2V5OiB0aGlzLmdldEFjdGl2ZUtleSgpLCBvblNlbGVjdDogdGhpcy5oYW5kbGVTZWxlY3QsIHJlZjogXCJ0YWJzXCIgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCByZW5kZXJUYWJJZlNldCwgdGhpcylcbiAgICApO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgbmF2LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGlkOiBpZCwgY2xhc3NOYW1lOiBcInRhYi1jb250ZW50XCIsIHJlZjogXCJwYW5lc1wiIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyUGFuZSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGdldEFjdGl2ZUtleTogZnVuY3Rpb24gZ2V0QWN0aXZlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcbiAgfSxcblxuICByZW5kZXJQYW5lOiBmdW5jdGlvbiByZW5kZXJQYW5lKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBwcmV2aW91c0FjdGl2ZUtleSA9IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVLZXk7XG5cbiAgICB2YXIgc2hvdWxkUGFuZUJlU2V0QWN0aXZlID0gY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMuZ2V0QWN0aXZlS2V5KCk7XG4gICAgdmFyIHRoZXJlSXNOb0FjdGl2ZVBhbmUgPSBwcmV2aW91c0FjdGl2ZUtleSA9PSBudWxsO1xuXG4gICAgdmFyIHBhbmVJc0FscmVhZHlBY3RpdmUgPSBwcmV2aW91c0FjdGl2ZUtleSAhPSBudWxsICYmIGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSBwcmV2aW91c0FjdGl2ZUtleTtcblxuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IHNob3VsZFBhbmVCZVNldEFjdGl2ZSAmJiAodGhlcmVJc05vQWN0aXZlUGFuZSB8fCAhdGhpcy5wcm9wcy5hbmltYXRpb24pLFxuICAgICAgaWQ6IHBhbmVsSWQodGhpcy5wcm9wcywgY2hpbGQpLFxuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRhYklkKHRoaXMucHJvcHMsIGNoaWxkKSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBhbmltYXRpb246IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgb25BbmltYXRlT3V0RW5kOiBwYW5lSXNBbHJlYWR5QWN0aXZlID8gdGhpcy5oYW5kbGVQYW5lQW5pbWF0ZU91dEVuZCA6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJUYWI6IGZ1bmN0aW9uIHJlbmRlclRhYihjaGlsZCkge1xuICAgIHZhciBfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgICB2YXIgZXZlbnRLZXkgPSBfY2hpbGQkcHJvcHMuZXZlbnRLZXk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9jaGlsZCRwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHRhYiA9IF9jaGlsZCRwcm9wcy50YWI7XG4gICAgdmFyIGRpc2FibGVkID0gX2NoaWxkJHByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX05hdkl0ZW0yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGxpbmtJZDogdGFiSWQodGhpcy5wcm9wcywgY2hpbGQpLFxuICAgICAgICByZWY6ICd0YWInICsgZXZlbnRLZXksXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogcGFuZWxJZCh0aGlzLnByb3BzLCBjaGlsZCksXG4gICAgICAgIGV2ZW50S2V5OiBldmVudEtleSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB9LFxuICAgICAgdGFiXG4gICAgKTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qoc2VsZWN0ZWRLZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGVkS2V5KTtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBleHRlcm5hbCBoYW5kbGVyLCB0aGVuIHVzZSBlbWJlZGRlZCBvbmVcbiAgICB2YXIgcHJldmlvdXNBY3RpdmVLZXkgPSB0aGlzLmdldEFjdGl2ZUtleSgpO1xuICAgIGlmIChzZWxlY3RlZEtleSAhPT0gcHJldmlvdXNBY3RpdmVLZXkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVLZXk6IHNlbGVjdGVkS2V5LFxuICAgICAgICBwcmV2aW91c0FjdGl2ZUtleTogcHJldmlvdXNBY3RpdmVLZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYmJlZEFyZWE7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1RhYmJlZEFyZWEuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBUYWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFibGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHN0cmlwZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBib3JkZXJlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNvbmRlbnNlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhvdmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzcG9uc2l2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAndGFibGUnOiB0cnVlLFxuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiB0aGlzLnByb3BzLnN0cmlwZWQsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiB0aGlzLnByb3BzLmJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogdGhpcy5wcm9wcy5ob3ZlclxuICAgIH07XG4gICAgdmFyIHRhYmxlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGFibGUnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLnJlc3BvbnNpdmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IFwidGFibGUtcmVzcG9uc2l2ZVwiIH0sXG4gICAgICB0YWJsZVxuICAgICkgOiB0YWJsZTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIFRhYlBhbmUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYlBhbmUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQW5pbWF0ZU91dEVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0ZUluOiBmYWxzZSxcbiAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVJbiAmJiBuZXh0UHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbmltYXRlSW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVPdXQgJiYgIW5leHRQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYW5pbWF0ZU91dDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0ZUluKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmltYXRlSW4sIDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRlT3V0KSB7XG4gICAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0aGlzLnN0b3BBbmltYXRlT3V0KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRlSW46IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0ZUluKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0ZUluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHN0b3BBbmltYXRlT3V0OiBmdW5jdGlvbiBzdG9wQW5pbWF0ZU91dCgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3RhYi1wYW5lJzogdHJ1ZSxcbiAgICAgICdmYWRlJzogdHJ1ZSxcbiAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlLmFuaW1hdGVPdXQsXG4gICAgICAnaW4nOiB0aGlzLnByb3BzLmFjdGl2ZSAmJiAhdGhpcy5zdGF0ZS5hbmltYXRlSW5cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByb2xlOiAndGFicGFuZWwnLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAhdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpXG4gICAgICB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVGFiUGFuZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvVGFiUGFuZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfU2FmZUFuY2hvciA9IHJlcXVpcmUoJy4vU2FmZUFuY2hvcicpO1xuXG52YXIgX1NhZmVBbmNob3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2FmZUFuY2hvcik7XG5cbnZhciBUaHVtYm5haWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RodW1ibmFpbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhbHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNyYzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3RodW1ibmFpbCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9TYWZlQW5jaG9yMlsnZGVmYXVsdCddLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBocmVmOiB0aGlzLnByb3BzLmhyZWYsIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiB0aGlzLnByb3BzLnNyYywgYWx0OiB0aGlzLnByb3BzLmFsdCB9KSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiY2FwdGlvblwiIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogdGhpcy5wcm9wcy5zcmMsIGFsdDogdGhpcy5wcm9wcy5hbHQgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUaHVtYm5haWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1RodW1ibmFpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIFRvb2x0aXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Rvb2x0aXAnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogQW4gaHRtbCBpZCBhdHRyaWJ1dGUsIG5lY2Vzc2FyeSBmb3IgYWNjZXNzaWJpbGl0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgaWQ6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5pc1JlcXVpcmVkRm9yQTExeShfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXJlY3Rpb24gdGhlIFRvb2x0aXAgaXMgcG9zaXRpb25lZCB0b3dhcmRzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBcImxlZnRcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgcG9zaXRpb25MZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ0b3BcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgcG9zaXRpb25Ub3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBcImxlZnRcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFRvb2x0aXAgYXJyb3cuXG4gICAgICovXG4gICAgYXJyb3dPZmZzZXRMZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgLyoqXG4gICAgICogVGhlIFwidG9wXCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBUb29sdGlwIGFycm93LlxuICAgICAqL1xuICAgIGFycm93T2Zmc2V0VG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgLyoqXG4gICAgICogVGl0bGUgdGV4dFxuICAgICAqL1xuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAncmlnaHQnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAgICd0b29sdGlwJzogdHJ1ZVxuICAgIH0sIF9jbGFzc2VzW3RoaXMucHJvcHMucGxhY2VtZW50XSA9IHRydWUsIF9jbGFzc2VzKTtcblxuICAgIHZhciBzdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5wb3NpdGlvblRvcFxuICAgIH0sIHRoaXMucHJvcHMuc3R5bGUpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgdmFyIGFycm93U3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRMZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRUb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7IHJvbGU6ICd0b29sdGlwJyB9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogX2NsYXNzbmFtZXMyWydkZWZhdWx0J10odGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLCBzdHlsZTogc3R5bGUgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IFwidG9vbHRpcC1hcnJvd1wiLCBzdHlsZTogYXJyb3dTdHlsZSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IFwidG9vbHRpcC1pbm5lclwiIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVG9vbHRpcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8gd2UgZG9uJ3Qgd2FudCB0byBleHBvc2UgdGhlIGBzdHlsZWAgcHJvcGVydHlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1Rvb2x0aXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgV2VsbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnV2VsbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3dlbGwnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gV2VsbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvV2VsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdCcpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSByZXF1aXJlKCcuL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24nKTtcblxudmFyIF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yKTtcblxuZXhwb3J0cy5jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24zWydkZWZhdWx0J107XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIpO1xuXG5leHBvcnRzLmNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24zWydkZWZhdWx0J107XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzMiA9IHJlcXVpcmUoJy4vQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0N1c3RvbVByb3BUeXBlczIpO1xuXG5leHBvcnRzLkN1c3RvbVByb3BUeXBlcyA9IF9DdXN0b21Qcm9wVHlwZXMzWydkZWZhdWx0J107XG5cbnZhciBfZG9tVXRpbHMyID0gcmVxdWlyZSgnLi9kb21VdGlscycpO1xuXG52YXIgX2RvbVV0aWxzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbVV0aWxzMik7XG5cbmV4cG9ydHMuZG9tVXRpbHMgPSBfZG9tVXRpbHMzWydkZWZhdWx0J107XG5cbnZhciBfVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSByZXF1aXJlKCcuL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF9WYWxpZENvbXBvbmVudENoaWxkcmVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yKTtcblxuZXhwb3J0cy5WYWxpZENvbXBvbmVudENoaWxkcmVuID0gX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4zWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzguXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxDb2wgY2xhc3NOYW1lPVwiY29udGVudCBcIiBtZD17OH0+PC9Db2w+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL0NvbnRlbnQuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvOC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ2Fsc2MnO1xyXG5pbXBvcnQge0NvbCxJbnB1dH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInNpZGViYXJcIiBtZD17NH0+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBrZXkgd29yZHMuLi4nXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2luYy9TaWRlQmFyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzEwLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ2Fsc2MnO1xyXG5cclxuY2xhc3MgRXhhbXBsZU1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhhbXBsZU1hbmFnZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGV4YW1wbGUoKXtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVNYW5hZ2VyLmluc3RhbmNlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvRXhhbXBsZU1hbmFnZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ2Fsc2MnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8Zm9vdGVyPjwvZm9vdGVyPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0Zvb3Rlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=