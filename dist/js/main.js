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
	
	var _alsc = __webpack_require__(4);
	
	var _layoutHeaderJs = __webpack_require__(9);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(10);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(15);
	
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
	exports.Ajax  = __webpack_require__(7)

/***/ },
/* 5 */
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
	
	var _utilsJs = __webpack_require__(6);
	
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/19.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eventsEventDispatcherJs = __webpack_require__(5);
	
	var _eventsEventDispatcherJs2 = _interopRequireDefault(_eventsEventDispatcherJs);
	
	var _utilsJs = __webpack_require__(8);
	
	var utils = _interopRequireWildcard(_utilsJs);
	
	var endSign = "end";
	
	var Method = {
	    GET: "get",
	    POST: "post"
	};
	
	if (typeof noop !== "function") {
	    var noop = function noop() {};
	}
	
	//TODO:可以参考superagent client.js
	
	var AjaxRequest = (function (_EventDispatcher) {
	    _inherits(AjaxRequest, _EventDispatcher);
	
	    function AjaxRequest(method, url) {
	        _classCallCheck(this, AjaxRequest);
	
	        _get(Object.getPrototypeOf(AjaxRequest.prototype), "constructor", this).call(this);
	        this.method = method;
	        this.url = url;
	        this._query = [];
	        this._header = {};
	        this.header = {};
	        this._callbackFn = noop;
	        this._init();
	    }
	
	    _createClass(AjaxRequest, [{
	        key: "set",
	        value: function set(field, val) {
	            if (isObject(field)) {
	                for (var key in field) {
	                    this.set(key, field[key]);
	                }
	                return this;
	            }
	            this._header[field.toLowerCase()] = val;
	            this.header[field] = val;
	            return this;
	        }
	    }, {
	        key: "end",
	        value: function end(fn) {
	            var _this = this;
	
	            var xhr = this.xhr || utils.getXHR();
	            var query = this._query.join('&');
	            var data = this._data || "";
	
	            this._callbackFn = fn || noop;
	
	            xhr.onreadystatechange = function () {
	                if (4 != xhr.readyState) return;
	
	                // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	                // result in the error "Could not complete the operation due to error c00c023f"
	                var status;
	                try {
	                    status = xhr.status;
	                } catch (e) {
	                    status = 0;
	                }
	
	                if (0 == status) {
	                    return _this._toError("crossDomain");
	                }
	                _this.emit('end', { data: xhr.responseText });
	            };
	
	            // progress
	            var handleProgress = function handleProgress(e) {
	                if (e.total > 0) {
	                    e.percent = e.loaded / e.total * 100;
	                }
	                _this.emit('progress', e);
	            };
	            if (this.hasListeners('progress')) {
	                xhr.onprogress = handleProgress;
	            }
	            try {
	                if (xhr.upload && this.hasListeners('progress')) {
	                    xhr.upload.onprogress = handleProgress;
	                }
	            } catch (e) {}
	            // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	            // Reported here:
	            // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	
	            // querystring
	            if (query) {
	                query = utils.serializeObject(query);
	                this.url += ~this.url.indexOf('?') ? '&' + query : '?' + query;
	            }
	
	            xhr.open(this.method, this.url, true);
	
	            if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !utils.isHost(data)) {
	                // serialize stuff
	                var contentType = this.getHeader('Content-Type');
	                var serialize = utils.serialize[contentType ? contentType.split(';')[0] : ''];
	                if (serialize) data = serialize(data);
	            }
	
	            // set header fields
	            for (var field in this.header) {
	                if (null == this.header[field]) continue;
	                xhr.setRequestHeader(field, this.header[field]);
	            }
	
	            this.emit('request', this);
	
	            xhr.send(data);
	        }
	    }, {
	        key: "then",
	        value: function then(fulfill, reject) {
	            return this.end(function (err, res) {
	                err ? reject(err) : fulfill(res);
	            });
	        }
	    }, {
	        key: "_init",
	        value: function _init() {
	            this.xhr = utils.getXHR();
	            this.text = this.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
	            this.statusText = this.xhr.statusText;
	            this._setStatusProperties(this.xhr.status);
	
	            this.on("end", this._toSuccess.bind(this));
	        }
	    }, {
	        key: "_setStatusProperties",
	        value: function _setStatusProperties(status) {
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
	            this.error = 4 == type || 5 == type ? this._toError() : false;
	
	            // sugar
	            this.accepted = 202 == status;
	            this.noContent = 204 == status;
	            this.badRequest = 400 == status;
	            this.unauthorized = 401 == status;
	            this.notAcceptable = 406 == status;
	            this.notFound = 404 == status;
	            this.forbidden = 403 == status;
	        }
	    }, {
	        key: "_toSuccess",
	        value: function _toSuccess(res) {
	            this._callback(null, res);
	        }
	    }, {
	        key: "_toError",
	        value: function _toError(type) {
	            if (typeof type !== "string") return;
	            switch (type.toLowerCase()) {
	                default:
	                    {
	                        break;
	                    }
	                case "crossDomain":
	                    {
	                        break;
	                    }
	            }
	            this._callback();
	        }
	    }, {
	        key: "_callback",
	        value: function _callback(err, res) {
	            var fn = this._callbackFn;
	            this._clearTimeOut();
	            fn(err, res);
	        }
	    }, {
	        key: "_clearTimeOut",
	        value: function _clearTimeOut() {}
	    }], [{
	        key: "get",
	        value: function get(url) {
	            return new AjaxRequest(Method.GET, url);
	        }
	    }]);
	
	    return AjaxRequest;
	})(_eventsEventDispatcherJs2["default"]);
	
	exports["default"] = AjaxRequest;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,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QUksTUFBTSxDQUFDO0FBQ2xDLGdCQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUM5QixnQkFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO1NBQ2xDOzs7ZUFFUyxvQkFBQyxHQUFHLEVBQUM7QUFDWCxnQkFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUE7U0FDM0I7OztlQUVPLGtCQUFDLElBQUksRUFBQztBQUNWLGdCQUFHLE9BQU8sSUFBSSxLQUFHLFFBQVEsRUFBQyxPQUFPO0FBQ2pDLG9CQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDdEI7QUFBUTtBQUNKLDhCQUFNO3FCQUNUO0FBQUEsQUFDRCxxQkFBSyxhQUFhO0FBQUM7QUFDZiw4QkFBTTtxQkFDVDtBQUFBLGFBQ0o7QUFDRCxnQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1NBQ25COzs7ZUFFUSxtQkFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDO0FBQ2YsZ0JBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDMUIsZ0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixjQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCOzs7ZUFFWSx5QkFBRSxFQUVkOzs7ZUE5SlMsYUFBQyxHQUFHLEVBQUM7QUFDWCxtQkFBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3pDOzs7V0FmQyxXQUFXOzs7cUJBOEtGLFdBQVciLCJmaWxlIjoiYWpheC9BamF4UHJveHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTkuXHJcbiAqL1xyXG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcblxyXG52YXIgZW5kU2lnbiA9IFwiZW5kXCI7XHJcblxyXG52YXIgTWV0aG9kID0ge1xyXG4gICAgR0VUOlwiZ2V0XCIsXHJcbiAgICBQT1NUOlwicG9zdFwiXHJcbn07XHJcblxyXG5pZih0eXBlb2Ygbm9vcCAhPT0gXCJmdW5jdGlvblwiKXtcclxuICAgIHZhciBub29wID0gKCk9Pnt9XHJcbn1cclxuXHJcbi8vVE9ETzrlj6/ku6Xlj4LogINzdXBlcmFnZW50IGNsaWVudC5qc1xyXG5cclxuY2xhc3MgQWpheFJlcXVlc3QgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWV0aG9kLHVybCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9xdWVyeSA9ICBbXTtcclxuICAgICAgICB0aGlzLl9oZWFkZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrRm4gPSBub29wO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KHVybCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBamF4UmVxdWVzdChNZXRob2QuR0VULHVybClcclxuICAgIH1cclxuXHJcbiAgICBzZXQoZmllbGQsIHZhbCl7XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcclxuICAgICAgICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVuZChmbil7XHJcbiAgICAgICAgdmFyIHhociA9IHRoaXMueGhyfHx1dGlscy5nZXRYSFIoKTtcclxuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhfHxcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLl9jYWxsYmFja0ZuID0gZm4gfHwgbm9vcDtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpPT57XHJcbiAgICAgICAgICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXHJcbiAgICAgICAgICAgIC8vIHJlc3VsdCBpbiB0aGUgZXJyb3IgXCJDb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbiBkdWUgdG8gZXJyb3IgYzAwYzAyM2ZcIlxyXG4gICAgICAgICAgICB2YXIgc3RhdHVzO1xyXG4gICAgICAgICAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XHJcblxyXG4gICAgICAgICAgICBpZiAoMCA9PSBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90b0Vycm9yKFwiY3Jvc3NEb21haW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdlbmQnLHtkYXRhOiB4aHIucmVzcG9uc2VUZXh0fSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcHJvZ3Jlc3NcclxuICAgICAgICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSAoZSk9PntcclxuICAgICAgICAgICAgaWYgKGUudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcm9ncmVzcycsIGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XHJcbiAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIudXBsb2FkICYmIHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAvLyBBY2Nlc3NpbmcgeGhyLnVwbG9hZCBmYWlscyBpbiBJRSBmcm9tIGEgd2ViIHdvcmtlciwgc28ganVzdCBwcmV0ZW5kIGl0IGRvZXNuJ3QgZXhpc3QuXHJcbiAgICAgICAgICAgIC8vIFJlcG9ydGVkIGhlcmU6XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHF1ZXJ5c3RyaW5nXHJcbiAgICAgICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gdXRpbHMuc2VyaWFsaXplT2JqZWN0KHF1ZXJ5KTtcclxuICAgICAgICAgICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxyXG4gICAgICAgICAgICAgICAgPyAnJicgKyBxdWVyeVxyXG4gICAgICAgICAgICAgICAgOiAnPycgKyBxdWVyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIXV0aWxzLmlzSG9zdChkYXRhKSkge1xyXG4gICAgICAgICAgICAvLyBzZXJpYWxpemUgc3R1ZmZcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplID0gdXRpbHMuc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcclxuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBoZWFkZXIgZmllbGRzXHJcbiAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcclxuXHJcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlbihmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XHJcbiAgICAgICAgICAgIGVyciA/IHJlamVjdChlcnIpIDogZnVsZmlsbChyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KCl7XHJcbiAgICAgICAgdGhpcy54aHIgPSB1dGlscy5nZXRYSFIoKTtcclxuICAgICAgICB0aGlzLnRleHQgPSAoKHRoaXMubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnhoci5zdGF0dXNUZXh0O1xyXG4gICAgICAgIHRoaXMuX3NldFN0YXR1c1Byb3BlcnRpZXModGhpcy54aHIuc3RhdHVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbihcImVuZFwiLHRoaXMuX3RvU3VjY2Vzcy5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXRTdGF0dXNQcm9wZXJ0aWVzKHN0YXR1cyl7XHJcbiAgICAgICAgLy8gaGFuZGxlIElFOSBidWc6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gMjA0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHR5cGUgPSBzdGF0dXMgLyAxMDAgfCAwO1xyXG5cclxuICAgICAgICAvLyBzdGF0dXMgLyBjbGFzc1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XHJcblxyXG4gICAgICAgIC8vIGJhc2ljc1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcclxuICAgICAgICB0aGlzLm9rID0gMiA9PSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2xpZW50RXJyb3IgPSA0ID09IHR5cGU7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcclxuICAgICAgICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXHJcbiAgICAgICAgICAgID8gdGhpcy5fdG9FcnJvcigpXHJcbiAgICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHN1Z2FyXHJcbiAgICAgICAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5ub0NvbnRlbnQgPSAyMDQgPT0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMubm90QWNjZXB0YWJsZSA9IDQwNiA9PSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xyXG4gICAgfTtcclxuXHJcbiAgICBfdG9TdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sobnVsbCxyZXMpXHJcbiAgICB9XHJcblxyXG4gICAgX3RvRXJyb3IodHlwZSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHR5cGUhPT1cInN0cmluZ1wiKXJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSl7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImNyb3NzRG9tYWluXCI6e1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2soKVxyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjayhlcnIsIHJlcyl7XHJcbiAgICAgICAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2tGbjtcclxuICAgICAgICB0aGlzLl9jbGVhclRpbWVPdXQoKTtcclxuICAgICAgICBmbihlcnIsIHJlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9jbGVhclRpbWVPdXQoKXtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFqYXhSZXF1ZXN0OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/19.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var root = 'undefined' == typeof window ? undefined || self : window;
	
	var getXHR = function getXHR() {
	    if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
	        return new XMLHttpRequest();
	    } else {
	        try {
	            return new ActiveXObject('Microsoft.XMLHTTP');
	        } catch (e) {}
	        try {
	            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
	        } catch (e) {}
	        try {
	            return new ActiveXObject('Msxml2.XMLHTTP.3.0');
	        } catch (e) {}
	        try {
	            return new ActiveXObject('Msxml2.XMLHTTP');
	        } catch (e) {}
	    }
	    return false;
	};
	
	exports.getXHR = getXHR;
	var serializeObject = function serializeObject(obj) {
	    if (!isObject(obj)) return obj;
	    var pairs = [];
	    for (var key in obj) {
	        if (null != obj[key]) {
	            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	        }
	    }
	    return pairs.join('&');
	};
	
	exports.serializeObject = serializeObject;
	var serializeObj = {
	    'application/x-www-form-urlencoded': serialize,
	    'application/json': JSON.stringify
	};
	exports.serialize = serializeObj;
	
	function serialize(obj) {
	    if (!isObject(obj)) return obj;
	    var pairs = [];
	    for (var key in obj) {
	        if (null != obj[key]) {
	            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	        }
	    }
	    return pairs.join('&');
	}
	
	var isHost = function isHost(obj) {
	    var str = ({}).toString.call(obj);
	
	    switch (str) {
	        case '[object File]':
	        case '[object Blob]':
	        case '[object FormData]':
	            return true;
	        default:
	            return false;
	    }
	};
	exports.isHost = isHost;
	//# sourceMappingURL=data:application/json;base64,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Q3BCLG1CQUFPLElBQUksQ0FBQztBQUFBLEFBQ2hCO0FBQ0ksbUJBQU8sS0FBSyxDQUFDO0FBQUEsS0FDcEI7Q0FDSixDQUFBIiwiZmlsZSI6ImFqYXgvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTkuXHJcbiAqL1xyXG5cclxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XHJcbiAgICA/ICh0aGlzIHx8IHNlbGYpXHJcbiAgICA6IHdpbmRvdztcclxuXHJcbmV4cG9ydCB2YXIgZ2V0WEhSID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcclxuICAgICAgICAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sXHJcbiAgICAgICAgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cclxuICAgICAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICAgICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBzZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcclxuICAgIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcclxuICAgIHZhciBwYWlycyA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XHJcbiAgICAgICAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcclxuICAgICAgICAgICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcclxufTtcclxuXHJcbnZhciBzZXJpYWxpemVPYmogPSB7XHJcbiAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxyXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxyXG59O1xyXG5leHBvcnQge3NlcmlhbGl6ZU9iaiBhcyBzZXJpYWxpemV9O1xyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xyXG4gICAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xyXG4gICAgdmFyIHBhaXJzID0gW107XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcclxuICAgICAgICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxyXG4gICAgICAgICAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcnMuam9pbignJicpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGlzSG9zdCA9IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcclxuXHJcbiAgICBzd2l0Y2ggKHN0cikge1xyXG4gICAgICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxyXG4gICAgICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxyXG4gICAgICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

/***/ },
/* 9 */
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
/* 10 */
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
	
	var _reactBootstrap = __webpack_require__(11);
	
	var _incContentJs = __webpack_require__(12);
	
	var _incContentJs2 = _interopRequireDefault(_incContentJs);
	
	var _incSideBarJs = __webpack_require__(13);
	
	var _incSideBarJs2 = _interopRequireDefault(_incSideBarJs);
	
	var _coreExampleManagerJs = __webpack_require__(14);
	
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
/* 11 */
/***/ function(module, exports) {

	module.exports = window.ReactBootstrap;

/***/ },
/* 12 */
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
	
	var _reactBootstrap = __webpack_require__(11);
	
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
/* 13 */
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
	
	var _reactBootstrap = __webpack_require__(11);
	
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
/* 14 */
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
	                console.log(err, res, JSON.parse(res.data));
	            });
	        }
	    }]);
	
	    return ExampleManager;
	})();
	
	exports["default"] = ExampleManager.instance;
	module.exports = exports["default"];

/***/ },
/* 15 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA3YTAwNTNkNzkzODI4ODA3MDIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9tYWluLmVzNn4iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZGlzdC9ldmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvYWpheC9BamF4UHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvYWpheC91dGlscy5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0JvZHkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0Qm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2luYy9Db250ZW50LmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvRXhhbXBsZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7Ozs7Ozs7OztrQ0FLSyxDQUFPOzs7O3NDQUNULENBQWU7Ozs7S0FFekIsSUFBSSxHQUNLLFNBRFQsSUFBSSxHQUNPOzJCQURYLElBQUk7O0FBRUYsd0JBQU0sTUFBTSxDQUFDLDhEQUFNLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ3hEOztBQUdMLE9BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDOzs7Ozs7QUNkckIsK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDR2tCLENBQU87Ozs7aUNBQ08sQ0FBTTs7MkNBRW5CLENBQW9COzs7O3lDQUN0QixFQUFrQjs7OzsyQ0FDaEIsRUFBb0I7Ozs7S0FFakMsR0FBRztlQUFILEdBQUc7O0FBQ00sY0FEVCxHQUFHLEdBQ1E7OzsrQkFEWCxHQUFHOztBQUVELG9DQUZGLEdBQUcsNkNBRU87O0FBRVIsYUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRTdCLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtBQUNwQyxpQkFBRyxNQUFLLE9BQU8sRUFBQztBQUNaLHVCQUFLLFFBQVEsRUFBRSxDQUFDO2NBQ25CO1VBQ0osQ0FBQyxDQUFDO01BQ047O2tCQVhDLEdBQUc7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QUFJLENBQUMsV0FBVyxFQUFFLENBQUM7TUFDdEI7Ozs7a0JBYkMsY0FBYzs7Z0JBZ0JMLHVCQUFFO0FBQ1QsbUJBbkJBLElBQUksQ0FtQkMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQzFCLEdBQUcsQ0FBQyxVQUFTLEdBQUcsRUFBQyxHQUFHLEVBQUM7QUFDbEIsd0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2NBQzdDLENBQUM7VUFDVDs7O1lBckJDLGNBQWM7OztzQkF3QkwsY0FBYyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQzNCcEIsQ0FBTzs7OztpQ0FDTyxDQUFNOztLQUVoQyxNQUFNO2VBQU4sTUFBTTs7Y0FBTixNQUFNOytCQUFOLE1BQU07O29DQUFOLE1BQU07OztrQkFBTixNQUFNOztnQkFDRixrQkFBRTtBQUNKLG9CQUFPLGdEQUFpQjtVQUMzQjs7O1lBSEMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQU1yQixNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMwN2EwMDUzZDc5MzgyODgwNzAyXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS83LzE2LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlldy9BcHAuanMnO1xuXG5jbGFzcyBNYWlue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9tYWluLmVzNn5cbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ2Fsc2MnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2xheW91dC9IZWFkZXIuanMnO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL2xheW91dC9Cb2R5LmpzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2xheW91dC9Gb290ZXIuanMnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc01vdW50KXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodC0xNiAvL2RvY3VtZW50IG1hcmdpblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNNb3VudCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pc01vdW50ID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvL3RoaXMuc3RhdGUud2luZG93UmVzaXplZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFwcCA9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBwdWxsLWNlbnRlciBwYXBlclwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9BcHAuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcblxyXG5leHBvcnRzLkV2ZW50RGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qc1wiKTtcclxuZXhwb3J0cy5BamF4ICA9IHJlcXVpcmUoXCIuL2Rpc3QvYWpheC9BamF4UHJveHkuanNcIilcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2VudHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3V0aWxzSnMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcblxuLy92YXIgZXZlbnRzTWFwID0gdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIj9TeW1ib2woKTpcIl9fZXZlbnRzTWFwX19cIjtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzSnMpO1xuXG52YXIgZXZlbnRzTWFwID0gXCJfX2V2ZW50c01hcF9fXCI7XG5cbnZhciBFdmVudERpc3BhdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50RGlzcGF0Y2hlcik7XG5cbiAgICAgICAgdGhpc1tldmVudHNNYXBdID0ge307XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiDmtL7lj5HkuIDkuKrkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqL1xuXG4gICAgX2NyZWF0ZUNsYXNzKEV2ZW50RGlzcGF0Y2hlciwgW3tcbiAgICAgICAga2V5OiBcImVtaXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudG1hcCA9IHRoaXNbZXZlbnRzTWFwXVtldmVudF07XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudG1hcCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXRpbHMubm90aWZ5QXJyYXkoZXZlbnRtYXAsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6L+U5Zue5omA5pyJ5Zue6LCD5pa55rOVXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibGlzdGVuZXJzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50c01hcF1bZXZlbnRdID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24gKGJpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW4uY2FsbGJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImhhc0xpc3RlbmVyc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXNbZXZlbnRzTWFwXVtldmVudF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tldmVudHNNYXBdW2V2ZW50XS5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAgICAgKiBAcGFyYW0gcHJpb3JpdHlcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhZGRMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBudWxsLCBwcmlvcml0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnp7vpmaTkuIDlj6rkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZUxpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHV0aWxzLnVucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+mZpOaJgOacieS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbW92ZUFsbExpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2TLOeugOaYk+inpuWPkeWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZMs5ZSv5LiA6Kem5Y+R5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwib25jZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRXZlbnREaXNwYXRjaGVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudERpc3BhdGNoZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltVjJaVzUwY3k5RmRtVnVkRVJwYzNCaGRHTm9aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSMEVzV1VGQldTeERRVUZET3pzN096czdPenM3T3p0MVFrRkRWU3haUVVGWk96czdPMGxCUVhaQ0xFdEJRVXM3TzBGQlIycENMRWxCUVVrc1UwRkJVeXhIUVVGSExHVkJRV1VzUTBGQlF6czdTVUZETVVJc1pVRkJaVHRCUVVOT0xHRkJSRlFzWlVGQlpTeEhRVU5JT3poQ1FVUmFMR1ZCUVdVN08wRkJSV0lzV1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVONFFqczdPenM3T3pzN2FVSkJTRU1zWlVGQlpUczdaVUZWWWl4alFVRkRMRXRCUVVzc1JVRkJWenRCUVVOcVFpeG5Ra0ZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTNSRExHZENRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3YTBSQlJteENMRWxCUVVrN1FVRkJTaXgzUWtGQlNUczdPMEZCUjFnc2NVSkJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGQk8yRkJRM0JETzFOQlEwbzdPenM3T3pzN096dGxRVTlSTEcxQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOaUxHZENRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEY0VNc1owSkJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVTTdRVUZEVUN4elFrRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5hTEc5Q1FVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUTI1RE8wRkJRMFFzYlVKQlFVOHNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVExFZEJRVWNzUlVGQlF6dEJRVU16UWl4MVFrRkJUeXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETzJGQlEzWkNMRU5CUVVNc1EwRkJRenRUUVVOT096czdaVUZGVnl4elFrRkJReXhMUVVGTExFVkJRVU03UVVGRFppeG5Ra0ZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUXp0QlFVRkRMSFZDUVVGUExFdEJRVXNzUTBGQlF6dGhRVUZETzBGQlF6RkRMRzFDUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVU1zUTBGQlF5eERRVUZETzFOQlF6RkRPenM3T3pzN096czdPenRsUVZOVkxIRkNRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU12UXl4cFFrRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xTkJRM0JHT3pzN096czdPenM3TzJWQlVXRXNkMEpCUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFZRVUZWTEVWQlFVVTdRVUZEZUVNc2FVSkJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1UwRkRkRVU3T3pzN096czdPMlZCVFdkQ0xESkNRVUZETEV0QlFVc3NSVUZCUlR0QlFVTnlRaXhuUWtGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU12UWpzN096czdPenM3TzJWQlQwTXNXVUZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRk8wRkJRMmhDTEdsQ1FVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VTBGRGVFUTdPenM3T3pzN096dGxRVTlITEdOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVOc1FpeHBRa0ZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOb1JqczdPMWRCYmtaRExHVkJRV1U3T3p0eFFrRnpSazRzWlVGQlpTSXNJbVpwYkdVaU9pSmxkbVZ1ZEhNdlJYWmxiblJFYVhOd1lYUmphR1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEhKY2JpQXFJRU55WldGMFpXUWdZbmtnZEc5dGJYbGFXazBnYjI0Z01qQXhOUzg0THpRdVhISmNiaUFxTDF4eVhHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2NseHVhVzF3YjNKMElDb2dZWE1nZFhScGJITWdabkp2YlNCY0lpNHZkWFJwYkhNdWFuTmNJanRjY2x4dVhISmNiaTh2ZG1GeUlHVjJaVzUwYzAxaGNDQTlJSFI1Y0dWdlppQlRlVzFpYjJ3OVBUMWNJbVoxYm1OMGFXOXVYQ0kvVTNsdFltOXNLQ2s2WENKZlgyVjJaVzUwYzAxaGNGOWZYQ0k3WEhKY2JuWmhjaUJsZG1WdWRITk5ZWEFnUFNCY0lsOWZaWFpsYm5SelRXRndYMTljSWp0Y2NseHVZMnhoYzNNZ1JYWmxiblJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTmJaWFpsYm5SelRXRndYU0E5SUh0OU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZzVyUys1WStSNUxpQTVMaXE1THFMNUx1MlhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JoY21kelhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHVnRhWFFvWlhabGJuUXNJQzR1TG1GeVozTXBJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdaWFpsYm5SdFlYQWdQU0IwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZE8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNoQmNuSmhlUzVwYzBGeWNtRjVLR1YyWlc1MGJXRndLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NXViM1JwWm5sQmNuSmhlU2hsZG1WdWRHMWhjQ3dnWVhKbmN5bGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURvdjVUbG01N21pWURtbklubG01N29zSVBtbHJubXM1VmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2V5cDlYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJR3hwYzNSbGJtVnljeWhsZG1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1LQ0Z5WlhOMWJIUXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQmJYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0bGRtVnVkSE5OWVhCZFcyVjJaVzUwWFNBOUlISmxjM1ZzZER0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2RDNXRZWEFvWm5WdVkzUnBiMjRvWW1sdUtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdKcGJpNWpZV3hzWW1GamF6dGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm9ZWE5NYVhOMFpXNWxjbk1vWlhabGJuUXBlMXh5WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkS1h0eVpYUjFjbTRnWm1Gc2MyVTdmVnh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdselcyVjJaVzUwYzAxaGNGMWJaWFpsYm5SZExteGxibWQwYUQ0d08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZzVyZTc1WXFnNUxpQTVZK3E1TDZtNVpDczVabW9YSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaWFpsYm5SY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCallXeHNZbUZqYTF4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhSb2FYTlBZbXBsWTNSY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCd2NtbHZjbWwwZVZ4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCaFpHUk1hWE4wWlc1bGNpaGxkbVZ1ZEN3Z1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUXNJSEJ5YVc5eWFYUjVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RYUnBiSE11Y21WbmFYTjBUbTkwYVdaNUtIUm9hWE5iWlhabGJuUnpUV0Z3WFN3Z1pYWmxiblFzSUdOaGJHeGlZV05yTENCMGFHbHpUMkpxWldOMExDQnVkV3hzTENCd2NtbHZjbWwwZVNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEbnA3dnBtYVRrdUlEbGo2cmt2cWJsa0t6bG1haGNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUdOaGJHeGlZV05yWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZEdocGMwOWlhbVZqZEZ4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCeVpXMXZkbVZNYVhOMFpXNWxjaWhsZG1WdWRDd2dZMkZzYkdKaFkyc3NJSFJvYVhOUFltcGxZM1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQjFkR2xzY3k1MWJuSmxaMmx6ZEU1dmRHbG1lU2gwYUdselcyVjJaVzUwYzAxaGNGMHNJR1YyWlc1MExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURucDd2cG1hVG1pWURtbklua3ZxYmxrS3psbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J5WlcxdmRtVkJiR3hNYVhOMFpXNWxjaWhsZG1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTmJaWFpsYm5SelRXRndYVnRsZG1WdWRGMGdQU0JiWFR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSU9XOWt5em5yb0RtbUpQb3A2YmxqNUhsbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05oYkd4aVlXTnJYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJRzl1S0dWMlpXNTBMQ0JqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXlrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lEbHZaTXM1WlN2NUxpQTZLZW01WStSNVptb1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JqWVd4c1ltRmphMXh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J2Ym1ObEtHVjJaVzUwTENCallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFYwYVd4ekxuSmxaMmx6ZEU1dmRHbG1lU2gwYUdselcyVjJaVzUwYzAxaGNGMHNJR1YyWlc1MExDQmpZV3hzWW1GamF5d2diblZzYkN3Z2JuVnNiQ3dnYm5Wc2JDd2dkSEoxWlNrN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElFVjJaVzUwUkdsemNHRjBZMmhsY2pzaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWk5emIzVnlZMlV2SW4wPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Fsc2MvZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVnaXN0Tm90aWZ5ID0gcmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy51bnJlZ2lzdE5vdGlmeSA9IHVucmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy5ub3RpZnkgPSBub3RpZnk7XG5leHBvcnRzLm5vdGlmeUFycmF5ID0gbm90aWZ5QXJyYXk7XG5cbmZ1bmN0aW9uIHJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwYXJhbSwgcHJpb3JpdHksIG9uY2UpIHtcbiAgICAvLyxyZXNlcnZlPzphbnlcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgbm90aWZ5bWFwW25hbWVdID0gW107XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcblxuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xuICAgIHZhciBiaW47XG5cbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgcHJpb3JpdHkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmluID0gYXJyW2ldO1xuICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy/pmLLmraLph43lpI3mj5LlhaVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmluICYmIGluc2VydEluZGV4ID09IC0xICYmIGJpbi5wcmlvcml0eSA8IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW4gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGhpc09iamVjdDogdGhpc09iamVjdCwgcGFyYW06IHBhcmFtID8gcGFyYW0gOiBbXSwgcHJpb3JpdHk6IHByaW9yaXR5LCBvbmNlOiBvbmNlIH07XG4gICAgaWYgKGluc2VydEluZGV4ICE9IC0xKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2goYmluKTtcbiAgICB9XG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIHJldHVybjtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5bWFwW25hbWVdID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICByZXR1cm4gIShiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSkge1xuICAgICAgICAgICAgdmFyIGJpbiA9IGFycltpXTtcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkgcGFyYW0gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKSBwYXJhbSA9IGJpbi5wYXJhbS5jb25jYXQocGFyYW0pO1xuICAgICAgICAgICAgICAgIGJpbi5jYWxsYmFjay5hcHBseShiaW4udGhpc09iamVjdCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVYyWlc1MGN5OTFkR2xzY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenRCUVVsUExGTkJRVk1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkRMRWxCUVVrc1JVRkJSVHM3UVVGRGRFWXNVVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRekZETEZGQlFVa3NSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTVVJc1VVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTjRRaXhSUVVGSkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnlRaXhSUVVGSkxFZEJRVWNzUTBGQlF6czdRVUZGVWl4UlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6ZENMRmRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEWWl4WlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUlVGQlJUdEJRVU51UlN4dFFrRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdRVUZEUkN4WlFVRkpMRWRCUVVjc1NVRkJTU3hYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFVkJRVVU3UVVGRGNrUXNkVUpCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJrSTdTMEZEU2pzN1FVRkZSQ3hQUVVGSExFZEJRVWNzUlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRE8wRkJRemRITEZGQlFVa3NWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMjVDTEZkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnVReXhOUVVOSk8wRkJRMFFzVjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOcVFqdEJRVU5FTEdGQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03UTBGRGVrSTdPMEZCUlUwc1UwRkJVeXhqUVVGakxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wRkJRMnhGTEZGQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU1zVDBGQlR6dEJRVU0xUWl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHBRa0ZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVXl4SFFVRkhMRVZCUVVNN1FVRkRkRU1zYlVKQlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4TFFVRkxMRlZCUVZVc1EwRkJRU3hCUVVGRExFTkJRVUU3VTBGRGRrVXNRMEZCUXl4RFFVRkRPMHRCUTA0N1EwRkRTanM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJUdEJRVU16UXl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHRRa0ZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU40UWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObUxFMUJRVTA3UVVGRFNDeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RanREUVVOS096dEJRVVZOTEZOQlFWTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFppeFpRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNN1FVRkRjRU1zWjBKQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4blFrRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnlRaXh2UWtGQlNTeERRVUZETEV0QlFVc3NSVUZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEc5Q1FVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6bERMRzFDUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6RkRMRzlDUVVGSkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVTTdRVUZEVkN4MVFrRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JDTzJGQlEwbzdVMEZEU2p0TFFVTktPME5CUTBvaUxDSm1hV3hsSWpvaVpYWmxiblJ6TDNWMGFXeHpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMekU1TGx4eVhHNGdLaTljY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlaV2RwYzNST2IzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZEN3Z2NHRnlZVzBzSUhCeWFXOXlhWFI1TEc5dVkyVXBJSHN2THl4eVpYTmxjblpsUHpwaGJubGNjbHh1SUNBZ0lHbG1JQ2doYm05MGFXWjViV0Z3VzI1aGJXVmRLVzV2ZEdsbWVXMWhjRnR1WVcxbFhTQTlJRnRkTzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dVhISmNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdZWEp5TG14bGJtZDBhRHRjY2x4dUlDQWdJSFpoY2lCcGJuTmxjblJKYm1SbGVDQTlJQzB4TzF4eVhHNGdJQ0FnZG1GeUlHSnBianRjY2x4dVhISmNiaUFnSUNCcFppQW9jSEpwYjNKcGRIa2dQVDA5SUhWdVpHVm1hVzVsWkNsd2NtbHZjbWwwZVNBOUlEQTdYSEpjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdZbWx1SUQwZ1lYSnlXMmxkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05ySUQwOVBTQmpZV3hzWW1GamF5QW1KaUJpYVc0dWRHaHBjMDlpYW1WamRDQTlQVDBnZEdocGMwOWlhbVZqZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdMeS9wbUxMbXJhTHBoNDNscEkzbWo1TGxoYVZjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dKcGJpQW1KaUJwYm5ObGNuUkpibVJsZUNBOVBTQXRNU0FtSmlCaWFXNHVjSEpwYjNKcGRIa2dQQ0J3Y21sdmNtbDBlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5ObGNuUkpibVJsZUNBOUlHazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHSnBiaUE5SUh0allXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUTZJSFJvYVhOUFltcGxZM1FzSUhCaGNtRnRPaUJ3WVhKaGJTQS9JSEJoY21GdElEb2dXMTBzSUhCeWFXOXlhWFI1T2lCd2NtbHZjbWwwZVNBc2IyNWpaVHB2Ym1ObGZUdGNjbHh1SUNBZ0lHbG1JQ2hwYm5ObGNuUkpibVJsZUNBaFBTQXRNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHRnljaTV6Y0d4cFkyVW9hVzV6WlhKMFNXNWtaWGdzSURBc0lHSnBiaWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JoY25JdWNIVnphQ2hpYVc0cE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2JtOTBhV1o1YldGd1cyNWhiV1ZkSUQwZ1lYSnlPMXh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFc1eVpXZHBjM1JPYjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDRnViM1JwWm5sdFlYQmJibUZ0WlYwcGNtVjBkWEp1TzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dUlDQWdJR2xtSUNoaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCdWIzUnBabmx0WVhCYmJtRnRaVjBnUFNCaGNuSXVabWxzZEdWeUtHWjFibU4wYVc5dUtHSnBiaWw3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQWhLR0pwYmk1allXeHNZbUZqYXlBOVBUMGdZMkZzYkdKaFkyc2dKaVlnWW1sdUxuUm9hWE5QWW1wbFkzUWdQVDA5SUhSb2FYTlBZbXBsWTNRcFhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdWIzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1SUNBZ0lHbG1JQ2hoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0J1YjNScFpubEJjbkpoZVNoaGNuSXNJSEJoY21GdEtUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYm05MGFXWjVRWEp5WVhrb1lYSnlMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdabTl5SUNoMllYSWdhU0JwYmlCaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppaDBlWEJsYjJZZ0sya2dQVDA5SUZ3aWJuVnRZbVZ5WENJZ0ppWWdJV2x6VG1GT0tDdHBLU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaWFXNGdQU0JoY25KYmFWMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05yS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhCaGNtRnRLWEJoY21GdElEMGdXMTA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZbWx1TG5CaGNtRnRLWEJoY21GdElEMGdZbWx1TG5CaGNtRnRMbU52Ym1OaGRDaHdZWEpoYlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlhVzR1WTJGc2JHSmhZMnN1WVhCd2JIa29ZbWx1TG5Sb2FYTlBZbXBsWTNRc0lIQmhjbUZ0S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0dWIyNWpaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEp5TG5Od2JHbGpaU2hwTENBeEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0pkTENKemIzVnlZMlZTYjI5MElqb2lMM052ZFhKalpTOGlmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xOS5cclxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9ldmVudHNFdmVudERpc3BhdGNoZXJKcyA9IHJlcXVpcmUoXCIuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXCIpO1xuXG52YXIgX2V2ZW50c0V2ZW50RGlzcGF0Y2hlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50c0V2ZW50RGlzcGF0Y2hlckpzKTtcblxudmFyIF91dGlsc0pzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0pzKTtcblxudmFyIGVuZFNpZ24gPSBcImVuZFwiO1xuXG52YXIgTWV0aG9kID0ge1xuICAgIEdFVDogXCJnZXRcIixcbiAgICBQT1NUOiBcInBvc3RcIlxufTtcblxuaWYgKHR5cGVvZiBub29wICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbn1cblxuLy9UT0RPOuWPr+S7peWPguiAg3N1cGVyYWdlbnQgY2xpZW50LmpzXG5cbnZhciBBamF4UmVxdWVzdCA9IChmdW5jdGlvbiAoX0V2ZW50RGlzcGF0Y2hlcikge1xuICAgIF9pbmhlcml0cyhBamF4UmVxdWVzdCwgX0V2ZW50RGlzcGF0Y2hlcik7XG5cbiAgICBmdW5jdGlvbiBBamF4UmVxdWVzdChtZXRob2QsIHVybCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheFJlcXVlc3QpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEFqYXhSZXF1ZXN0LnByb3RvdHlwZSksIFwiY29uc3RydWN0b3JcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9xdWVyeSA9IFtdO1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tGbiA9IG5vb3A7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQWpheFJlcXVlc3QsIFt7XG4gICAgICAgIGtleTogXCJzZXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZCwgdmFsKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJlbmRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuZChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHhociA9IHRoaXMueGhyIHx8IHV0aWxzLmdldFhIUigpO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhIHx8IFwiXCI7XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrRm4gPSBmbiB8fCBub29wO1xuXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl90b0Vycm9yKFwiY3Jvc3NEb21haW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2VuZCcsIHsgZGF0YTogeGhyLnJlc3BvbnNlVGV4dCB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIHByb2dyZXNzXG4gICAgICAgICAgICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcyhlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnVwbG9hZCAmJiB0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICAgICAgLy8gUmVwb3J0ZWQgaGVyZTpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcblxuICAgICAgICAgICAgLy8gcXVlcnlzdHJpbmdcbiAgICAgICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gdXRpbHMuc2VyaWFsaXplT2JqZWN0KHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVybCArPSB+dGhpcy51cmwuaW5kZXhPZignPycpID8gJyYnICsgcXVlcnkgOiAnPycgKyBxdWVyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhdXRpbHMuaXNIb3N0KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemUgPSB1dGlscy5zZXJpYWxpemVbY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdIDogJyddO1xuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gICAgICAgICAgICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuXG4gICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInRoZW5cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRoZW4oZnVsZmlsbCwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgZXJyID8gcmVqZWN0KGVycikgOiBmdWxmaWxsKHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIl9pbml0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMueGhyID0gdXRpbHMuZ2V0WEhSKCk7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLm1ldGhvZCAhPSAnSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHx8IHR5cGVvZiB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnID8gdGhpcy54aHIucmVzcG9uc2VUZXh0IDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IHRoaXMueGhyLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG5cbiAgICAgICAgICAgIHRoaXMub24oXCJlbmRcIiwgdGhpcy5fdG9TdWNjZXNzLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiX3NldFN0YXR1c1Byb3BlcnRpZXNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRTdGF0dXNQcm9wZXJ0aWVzKHN0YXR1cykge1xuICAgICAgICAgICAgLy8gaGFuZGxlIElFOSBidWc6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IDIwNDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHR5cGUgPSBzdGF0dXMgLyAxMDAgfCAwO1xuXG4gICAgICAgICAgICAvLyBzdGF0dXMgLyBjbGFzc1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c1R5cGUgPSB0eXBlO1xuXG4gICAgICAgICAgICAvLyBiYXNpY3NcbiAgICAgICAgICAgIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMub2sgPSAyID09IHR5cGU7XG4gICAgICAgICAgICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSA0ID09IHR5cGUgfHwgNSA9PSB0eXBlID8gdGhpcy5fdG9FcnJvcigpIDogZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIHN1Z2FyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJfdG9TdWNjZXNzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9TdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIl90b0Vycm9yXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9FcnJvcih0eXBlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NEb21haW5cIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJfY2FsbGJhY2tcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYWxsYmFjayhlcnIsIHJlcykge1xuICAgICAgICAgICAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2tGbjtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZU91dCgpO1xuICAgICAgICAgICAgZm4oZXJyLCByZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiX2NsZWFyVGltZU91dFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NsZWFyVGltZU91dCgpIHt9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJnZXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWpheFJlcXVlc3QoTWV0aG9kLkdFVCwgdXJsKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBamF4UmVxdWVzdDtcbn0pKF9ldmVudHNFdmVudERpc3BhdGNoZXJKczJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBamF4UmVxdWVzdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1GcVlYZ3ZRV3BoZUZCeWIzaDVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3p0MVEwRkhORUlzT0VKQlFUaENPenM3TzNWQ1FVTnVReXhaUVVGWk96dEpRVUYyUWl4TFFVRkxPenRCUVVWcVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWEJDTEVsQlFVa3NUVUZCVFN4SFFVRkhPMEZCUTFRc1QwRkJSeXhGUVVGRExFdEJRVXM3UVVGRFZDeFJRVUZKTEVWQlFVTXNUVUZCVFR0RFFVTmtMRU5CUVVNN08wRkJSVVlzU1VGQlJ5eFBRVUZQTEVsQlFVa3NTMEZCU3l4VlFVRlZMRVZCUVVNN1FVRkRNVUlzVVVGQlNTeEpRVUZKTEVkQlFVY3NVMEZCVUN4SlFVRkpMRWRCUVU4c1JVRkJSU3hEUVVGQk8wTkJRM0JDT3pzN08wbEJTVXNzVjBGQlZ6dGpRVUZZTEZkQlFWYzdPMEZCUlVZc1lVRkdWQ3hYUVVGWExFTkJSVVFzVFVGQlRTeEZRVUZETEVkQlFVY3NSVUZCUXpzNFFrRkdja0lzVjBGQlZ6czdRVUZIVkN4dFEwRklSaXhYUVVGWExEWkRRVWRFTzBGQlExSXNXVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UVVGRGNrSXNXVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU03UVVGRFppeFpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkpMRVZCUVVVc1EwRkJRenRCUVVOc1FpeFpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOc1FpeFpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOcVFpeFpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVONFFpeFpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1MwRkRhRUk3TzJsQ1FWaERMRmRCUVZjN08yVkJhVUpXTEdGQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJRenRCUVVOWUxHZENRVUZKTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVOcVFpeHhRa0ZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGJrSXNkMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU0zUWp0QlFVTkVMSFZDUVVGUExFbEJRVWtzUTBGQlF6dGhRVU5tTzBGQlEwUXNaMEpCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRM2hETEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTjZRaXh0UWtGQlR5eEpRVUZKTEVOQlFVTTdVMEZEWmpzN08yVkJSVVVzWVVGQlF5eEZRVUZGTEVWQlFVTTdPenRCUVVOSUxHZENRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0QlFVTnVReXhuUWtGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYkVNc1owSkJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVVc1JVRkJSU3hEUVVGRE96dEJRVVV4UWl4blFrRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRPenRCUVVVNVFpeGxRVUZITEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzV1VGQlNUdEJRVU42UWl4dlFrRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4UFFVRlBPenM3TzBGQlNXaERMRzlDUVVGSkxFMUJRVTBzUTBGQlF6dEJRVU5ZTEc5Q1FVRkpPMEZCUVVVc01FSkJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkJPMmxDUVVGRkxFTkJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdRVUZCUlN3d1FrRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZCUlRzN1FVRkZjRVFzYjBKQlFVa3NRMEZCUXl4SlFVRkpMRTFCUVUwc1JVRkJSVHRCUVVOaUxESkNRVUZQTEUxQlFVc3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8ybENRVU4yUXp0QlFVTkVMSE5DUVVGTExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVTXNSVUZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExGbEJRVmtzUlVGQlF5eERRVUZETEVOQlFVTTdZVUZETjBNc1EwRkJRenM3TzBGQlIwWXNaMEpCUVVrc1kwRkJZeXhIUVVGSExGTkJRV3BDTEdOQlFXTXNRMEZCU1N4RFFVRkRMRVZCUVVjN1FVRkRkRUlzYjBKQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRFlpeHhRa0ZCUXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU40UXp0QlFVTkVMSE5DUVVGTExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVUlzUTBGQlF6dEJRVU5HTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdRVUZETDBJc2JVSkJRVWNzUTBGQlF5eFZRVUZWTEVkQlFVY3NZMEZCWXl4RFFVRkRPMkZCUTI1RE8wRkJRMFFzWjBKQlFVazdRVUZEUVN4dlFrRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3UVVGRE4wTXNkVUpCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXp0cFFrRkRNVU03WVVGRFNpeERRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZMRVZCU1ZZN096czdPenRCUVVGQkxFRkJSMFFzWjBKQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTFBc2NVSkJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM0pETEc5Q1FVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRelZDTEVkQlFVY3NSMEZCUnl4TFFVRkxMRWRCUTFnc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF6dGhRVU55UWpzN1FVRkZSQ3hsUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXpzN1FVRkZkRU1zWjBKQlFVa3NTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1VVRkJVU3hKUVVGSkxFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUczdRVUZGYWtjc2IwSkJRVWtzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03UVVGRGFrUXNiMEpCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE9VVXNiMEpCUVVrc1UwRkJVeXhGUVVGRkxFbEJRVWtzUjBGQlJ5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRla003T3p0QlFVZEVMR2xDUVVGTExFbEJRVWtzUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRNMElzYjBKQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNVMEZCVXp0QlFVTjZReXh0UWtGQlJ5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGJrUTdPMEZCUlVRc1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE96dEJRVVV6UWl4bFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEyeENPenM3WlVGRlJ5eGpRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRiRUlzYlVKQlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVTdRVUZEYUVNc2JVSkJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzQkRMRU5CUVVNc1EwRkJRenRUUVVOT096czdaVUZGU1N4cFFrRkJSVHRCUVVOSUxHZENRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEJRVU14UWl4blFrRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEJRVUZETEVGQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJSeXhOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRXRCUVVzc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4TFFVRkxMRTFCUVUwc1EwRkJRU3hCUVVGRExFbEJRVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmxCUVZrc1MwRkJTeXhYUVVGWExFZEJRMjVLTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hIUVVOeVFpeEpRVUZKTEVOQlFVTTdRVUZEV0N4blFrRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJRenRCUVVOMFF5eG5Ra0ZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03TzBGQlJUTkRMR2RDUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkJPMU5CUXpWRE96czdaVUZGYlVJc09FSkJRVU1zVFVGQlRTeEZRVUZET3p0QlFVVjRRaXhuUWtGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZPMEZCUTJwQ0xITkNRVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUTJoQ096dEJRVVZFTEdkQ1FVRkpMRWxCUVVrc1IwRkJSeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXpzN08wRkJSelZDTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEJRVU55UWl4blFrRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPenRCUVVkMlFpeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETzBGQlEzUkNMR2RDUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNN1FVRkRjRUlzWjBKQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF6dEJRVU0zUWl4blFrRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRPMEZCUXpkQ0xHZENRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRUZCUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVTTVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlEyWXNTMEZCU3l4RFFVRkRPenM3UVVGSFdpeG5Ra0ZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhIUVVGSExFbEJRVWtzVFVGQlRTeERRVUZETzBGQlF6bENMR2RDUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNN1FVRkRMMElzWjBKQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFMUJRVTBzUTBGQlF6dEJRVU5vUXl4blFrRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRPMEZCUTJ4RExHZENRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU03UVVGRGJrTXNaMEpCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEUxQlFVMHNRMEZCUXp0QlFVTTVRaXhuUWtGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRE8xTkJRMnhET3pzN1pVRkZVeXh2UWtGQlF5eEhRVUZITEVWQlFVTTdRVUZEV0N4blFrRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1UwRkRNMEk3T3p0bFFVVlBMR3RDUVVGRExFbEJRVWtzUlVGQlF6dEJRVU5XTEdkQ1FVRkhMRTlCUVU4c1NVRkJTU3hMUVVGSExGRkJRVkVzUlVGQlF5eFBRVUZQTzBGQlEycERMRzlDUVVGUkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdRVUZEZEVJN1FVRkJVVHRCUVVOS0xEaENRVUZOTzNGQ1FVTlVPMEZCUVVFc1FVRkRSQ3h4UWtGQlN5eGhRVUZoTzBGQlFVTTdRVUZEWml3NFFrRkJUVHR4UWtGRFZEdEJRVUZCTEdGQlEwbzdRVUZEUkN4blFrRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZCTzFOQlEyNUNPenM3WlVGRlVTeHRRa0ZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRE8wRkJRMllzWjBKQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03UVVGRE1VSXNaMEpCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dEJRVU55UWl4alFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEyaENPenM3WlVGRldTeDVRa0ZCUlN4RlFVVmtPenM3WlVFNVNsTXNZVUZCUXl4SFFVRkhMRVZCUVVNN1FVRkRXQ3h0UWtGQlR5eEpRVUZKTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzFOQlEzcERPenM3VjBGbVF5eFhRVUZYT3pzN2NVSkJPRXRHTEZkQlFWY2lMQ0ptYVd4bElqb2lZV3BoZUM5QmFtRjRVSEp2ZUhrdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUTNKbFlYUmxaQ0JpZVNCMGIyMXRlVnBhVFNCdmJpQXlNREUxTHpndk1Ua3VYSEpjYmlBcUwxeHlYRzVwYlhCdmNuUWdSWFpsYm5SRWFYTndZWFJqYUdWeUlHWnliMjBnWENJdUxpOWxkbVZ1ZEhNdlJYWmxiblJFYVhOd1lYUmphR1Z5TG1welhDSTdYSEpjYm1sdGNHOXlkQ0FxSUdGeklIVjBhV3h6SUdaeWIyMGdYQ0l1TDNWMGFXeHpMbXB6WENJN1hISmNibHh5WEc1MllYSWdaVzVrVTJsbmJpQTlJRndpWlc1a1hDSTdYSEpjYmx4eVhHNTJZWElnVFdWMGFHOWtJRDBnZTF4eVhHNGdJQ0FnUjBWVU9sd2laMlYwWENJc1hISmNiaUFnSUNCUVQxTlVPbHdpY0c5emRGd2lYSEpjYm4wN1hISmNibHh5WEc1cFppaDBlWEJsYjJZZ2JtOXZjQ0FoUFQwZ1hDSm1kVzVqZEdsdmJsd2lLWHRjY2x4dUlDQWdJSFpoY2lCdWIyOXdJRDBnS0NrOVBudDlYSEpjYm4xY2NseHVYSEpjYmk4dlZFOUVUenJsajYva3U2WGxqNExvZ0lOemRYQmxjbUZuWlc1MElHTnNhV1Z1ZEM1cWMxeHlYRzVjY2x4dVkyeGhjM01nUVdwaGVGSmxjWFZsYzNRZ1pYaDBaVzVrY3lCRmRtVnVkRVJwYzNCaGRHTm9aWEo3WEhKY2JseHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9iV1YwYUc5a0xIVnliQ2w3WEhKY2JpQWdJQ0FnSUNBZ2MzVndaWElvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGRHaHZaQ0E5SUcxbGRHaHZaRHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMblZ5YkNBOUlIVnliRHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDl4ZFdWeWVTQTlJQ0JiWFR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5b1pXRmtaWElnUFNCN2ZUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV1JsY2lBOUlIdDlPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMk5oYkd4aVlXTnJSbTRnUFNCdWIyOXdPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMmx1YVhRb0tUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZEdGMGFXTWdaMlYwS0hWeWJDbDdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCQmFtRjRVbVZ4ZFdWemRDaE5aWFJvYjJRdVIwVlVMSFZ5YkNsY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpaWFFvWm1sbGJHUXNJSFpoYkNsN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0dselQySnFaV04wS0dacFpXeGtLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdabWxsYkdRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBLR3RsZVN3Z1ptbGxiR1JiYTJWNVhTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDJobFlXUmxjbHRtYVdWc1pDNTBiMHh2ZDJWeVEyRnpaU2dwWFNBOUlIWmhiRHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVdSbGNsdG1hV1ZzWkYwZ1BTQjJZV3c3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlPMXh5WEc1Y2NseHVJQ0FnSUdWdVpDaG1iaWw3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSGhvY2lBOUlIUm9hWE11ZUdoeWZIeDFkR2xzY3k1blpYUllTRklvS1R0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnY1hWbGNua2dQU0IwYUdsekxsOXhkV1Z5ZVM1cWIybHVLQ2NtSnlrN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdSaGRHRWdQU0IwYUdsekxsOWtZWFJoZkh4Y0lsd2lPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5allXeHNZbUZqYTBadUlEMGdabTRnZkh3Z2JtOXZjRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdlR2h5TG05dWNtVmhaSGx6ZEdGMFpXTm9ZVzVuWlNBOUlDZ3BQVDU3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnMElDRTlJSGhvY2k1eVpXRmtlVk4wWVhSbEtTQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKYmlCSlJUa3NJSEpsWVdSeklIUnZJR0Z1ZVNCd2NtOXdaWEowZVNBb1pTNW5MaUJ6ZEdGMGRYTXBJRzltWmlCdlppQmhiaUJoWW05eWRHVmtJRmhJVWlCM2FXeHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSEpsYzNWc2RDQnBiaUIwYUdVZ1pYSnliM0lnWENKRGIzVnNaQ0J1YjNRZ1kyOXRjR3hsZEdVZ2RHaGxJRzl3WlhKaGRHbHZiaUJrZFdVZ2RHOGdaWEp5YjNJZ1l6QXdZekF5TTJaY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjM1JoZEhWek8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNua2dleUJ6ZEdGMGRYTWdQU0I0YUhJdWMzUmhkSFZ6SUgwZ1kyRjBZMmdvWlNrZ2V5QnpkR0YwZFhNZ1BTQXdPeUI5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9NQ0E5UFNCemRHRjBkWE1wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDkwYjBWeWNtOXlLRndpWTNKdmMzTkViMjFoYVc1Y0lpazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYldsMEtDZGxibVFuTEh0a1lYUmhPaUI0YUhJdWNtVnpjRzl1YzJWVVpYaDBmU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OGdjSEp2WjNKbGMzTmNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2FHRnVaR3hsVUhKdlozSmxjM01nUFNBb1pTazlQbnRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dVdWRHOTBZV3dnUGlBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsTG5CbGNtTmxiblFnUFNCbExteHZZV1JsWkNBdklHVXVkRzkwWVd3Z0tpQXhNREE3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJXbDBLQ2R3Y205bmNtVnpjeWNzSUdVcE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFHRnpUR2x6ZEdWdVpYSnpLQ2R3Y205bmNtVnpjeWNwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhob2NpNXZibkJ5YjJkeVpYTnpJRDBnYUdGdVpHeGxVSEp2WjNKbGMzTTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIUnllU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoNGFISXVkWEJzYjJGa0lDWW1JSFJvYVhNdWFHRnpUR2x6ZEdWdVpYSnpLQ2R3Y205bmNtVnpjeWNwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRhSEl1ZFhCc2IyRmtMbTl1Y0hKdlozSmxjM01nUFNCb1lXNWtiR1ZRY205bmNtVnpjenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdvWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJZMk5sYzNOcGJtY2dlR2h5TG5Wd2JHOWhaQ0JtWVdsc2N5QnBiaUJKUlNCbWNtOXRJR0VnZDJWaUlIZHZjbXRsY2l3Z2MyOGdhblZ6ZENCd2NtVjBaVzVrSUdsMElHUnZaWE51SjNRZ1pYaHBjM1F1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKbGNHOXlkR1ZrSUdobGNtVTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR2gwZEhCek9pOHZZMjl1Ym1WamRDNXRhV055YjNOdlpuUXVZMjl0TDBsRkwyWmxaV1JpWVdOckwyUmxkR0ZwYkhNdk9ETTNNalExTDNodGJHaDBkSEJ5WlhGMVpYTjBMWFZ3Ykc5aFpDMTBhSEp2ZDNNdGFXNTJZV3hwWkMxaGNtZDFiV1Z1ZEMxM2FHVnVMWFZ6WldRdFpuSnZiUzEzWldJdGQyOXlhMlZ5TFdOdmJuUmxlSFJjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklIRjFaWEo1YzNSeWFXNW5YSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIRjFaWEo1S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhGMVpYSjVJRDBnZFhScGJITXVjMlZ5YVdGc2FYcGxUMkpxWldOMEtIRjFaWEo1S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTFjbXdnS3owZ2ZuUm9hWE11ZFhKc0xtbHVaR1Y0VDJZb0p6OG5LVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUHlBbkppY2dLeUJ4ZFdWeWVWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUFuUHljZ0t5QnhkV1Z5ZVR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIaG9jaTV2Y0dWdUtIUm9hWE11YldWMGFHOWtMQ0IwYUdsekxuVnliQ3dnZEhKMVpTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2duUjBWVUp5QWhQU0IwYUdsekxtMWxkR2h2WkNBbUppQW5TRVZCUkNjZ0lUMGdkR2hwY3k1dFpYUm9iMlFnSmlZZ0ozTjBjbWx1WnljZ0lUMGdkSGx3Wlc5bUlHUmhkR0VnSmlZZ0lYVjBhV3h6TG1selNHOXpkQ2hrWVhSaEtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ6WlhKcFlXeHBlbVVnYzNSMVptWmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR052Ym5SbGJuUlVlWEJsSUQwZ2RHaHBjeTVuWlhSSVpXRmtaWElvSjBOdmJuUmxiblF0Vkhsd1pTY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYzJWeWFXRnNhWHBsSUQwZ2RYUnBiSE11YzJWeWFXRnNhWHBsVzJOdmJuUmxiblJVZVhCbElEOGdZMjl1ZEdWdWRGUjVjR1V1YzNCc2FYUW9KenNuS1Zzd1hTQTZJQ2NuWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITmxjbWxoYkdsNlpTa2daR0YwWVNBOUlITmxjbWxoYkdsNlpTaGtZWFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHZJSE5sZENCb1pXRmtaWElnWm1sbGJHUnpYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnWm1sbGJHUWdhVzRnZEdocGN5NW9aV0ZrWlhJcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzUxYkd3Z1BUMGdkR2hwY3k1b1pXRmtaWEpiWm1sbGJHUmRLU0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlR2h5TG5ObGRGSmxjWFZsYzNSSVpXRmtaWElvWm1sbGJHUXNJSFJvYVhNdWFHVmhaR1Z5VzJacFpXeGtYU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ0YVhRb0ozSmxjWFZsYzNRbkxDQjBhR2x6S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZUdoeUxuTmxibVFvWkdGMFlTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZEdobGJpaG1kV3htYVd4c0xDQnlaV3BsWTNRcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bGJtUW9ablZ1WTNScGIyNGdLR1Z5Y2l3Z2NtVnpLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1Z5Y2lBL0lISmxhbVZqZENobGNuSXBJRG9nWm5Wc1ptbHNiQ2h5WlhNcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lGOXBibWwwS0NsN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1NGFISWdQU0IxZEdsc2N5NW5aWFJZU0ZJb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuUmxlSFFnUFNBb0tIUm9hWE11YldWMGFHOWtJQ0U5SjBoRlFVUW5JQ1ltSUNoMGFHbHpMbmhvY2k1eVpYTndiMjV6WlZSNWNHVWdQVDA5SUNjbklIeDhJSFJvYVhNdWVHaHlMbkpsYzNCdmJuTmxWSGx3WlNBOVBUMGdKM1JsZUhRbktTa2dmSHdnZEhsd1pXOW1JSFJvYVhNdWVHaHlMbkpsYzNCdmJuTmxWSGx3WlNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRDhnZEdocGN5NTRhSEl1Y21WemNHOXVjMlZVWlhoMFhISmNiaUFnSUNBZ0lDQWdJQ0FnSURvZ2JuVnNiRHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSMWMxUmxlSFFnUFNCMGFHbHpMbmhvY2k1emRHRjBkWE5VWlhoME8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzTmxkRk4wWVhSMWMxQnliM0JsY25ScFpYTW9kR2hwY3k1NGFISXVjM1JoZEhWektUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV2YmloY0ltVnVaRndpTEhSb2FYTXVYM1J2VTNWalkyVnpjeTVpYVc1a0tIUm9hWE1wS1Z4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lGOXpaWFJUZEdGMGRYTlFjbTl3WlhKMGFXVnpLSE4wWVhSMWN5bDdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2FHRnVaR3hsSUVsRk9TQmlkV2M2SUdoMGRIQTZMeTl6ZEdGamEyOTJaWEptYkc5M0xtTnZiUzl4ZFdWemRHbHZibk12TVRBd05EWTVOekl2YlhOcFpTMXlaWFIxY201ekxYTjBZWFIxY3kxamIyUmxMVzltTFRFeU1qTXRabTl5TFdGcVlYZ3RjbVZ4ZFdWemRGeHlYRzRnSUNBZ0lDQWdJR2xtSUNoemRHRjBkWE1nUFQwOUlERXlNak1wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSaGRIVnpJRDBnTWpBME8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUhSNWNHVWdQU0J6ZEdGMGRYTWdMeUF4TURBZ2ZDQXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMeUJ6ZEdGMGRYTWdMeUJqYkdGemMxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkSFZ6SUQwZ2MzUmhkSFZ6TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRIVnpWSGx3WlNBOUlIUjVjR1U3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUdKaGMybGpjMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzVtYnlBOUlERWdQVDBnZEhsd1pUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtOXJJRDBnTWlBOVBTQjBlWEJsTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJ4cFpXNTBSWEp5YjNJZ1BTQTBJRDA5SUhSNWNHVTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpaWEoyWlhKRmNuSnZjaUE5SURVZ1BUMGdkSGx3WlR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WeWNtOXlJRDBnS0RRZ1BUMGdkSGx3WlNCOGZDQTFJRDA5SUhSNWNHVXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lEOGdkR2hwY3k1ZmRHOUZjbkp2Y2lncFhISmNiaUFnSUNBZ0lDQWdJQ0FnSURvZ1ptRnNjMlU3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUhOMVoyRnlYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZMk5sY0hSbFpDQTlJREl3TWlBOVBTQnpkR0YwZFhNN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIwTnZiblJsYm5RZ1BTQXlNRFFnUFQwZ2MzUmhkSFZ6TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1Ga1VtVnhkV1Z6ZENBOUlEUXdNQ0E5UFNCemRHRjBkWE03WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTUxYm1GMWRHaHZjbWw2WldRZ1BTQTBNREVnUFQwZ2MzUmhkSFZ6TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym05MFFXTmpaWEIwWVdKc1pTQTlJRFF3TmlBOVBTQnpkR0YwZFhNN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIzUkdiM1Z1WkNBOUlEUXdOQ0E5UFNCemRHRjBkWE03WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYjNKaWFXUmtaVzRnUFNBME1ETWdQVDBnYzNSaGRIVnpPMXh5WEc0Z0lDQWdmVHRjY2x4dVhISmNiaUFnSUNCZmRHOVRkV05qWlhOektISmxjeWw3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJGc2JHSmhZMnNvYm5Wc2JDeHlaWE1wWEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1gzUnZSWEp5YjNJb2RIbHdaU2w3WEhKY2JpQWdJQ0FnSUNBZ2FXWW9kSGx3Wlc5bUlIUjVjR1VoUFQxY0luTjBjbWx1WjF3aUtYSmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tIUjVjR1V1ZEc5TWIzZGxja05oYzJVb0tTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNmUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQmNJbU55YjNOelJHOXRZV2x1WENJNmUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZMkZzYkdKaFkyc29LVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUY5allXeHNZbUZqYXlobGNuSXNJSEpsY3lsN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdadUlEMGdkR2hwY3k1ZlkyRnNiR0poWTJ0R2JqdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOWpiR1ZoY2xScGJXVlBkWFFvS1R0Y2NseHVJQ0FnSUNBZ0lDQm1iaWhsY25Jc0lISmxjeWs3WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lGOWpiR1ZoY2xScGJXVlBkWFFvS1h0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZxWVhoU1pYRjFaWE4wT3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pTDNOdmRYSmpaUzhpZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Fsc2MvZGlzdC9hamF4L0FqYXhQcm94eS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xOS5cclxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciByb290ID0gJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHdpbmRvdyA/IHVuZGVmaW5lZCB8fCBzZWxmIDogd2luZG93O1xuXG52YXIgZ2V0WEhSID0gZnVuY3Rpb24gZ2V0WEhSKCkge1xuICAgIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0ICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2wgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0cy5nZXRYSFIgPSBnZXRYSFI7XG52YXIgc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24gc2VyaWFsaXplT2JqZWN0KG9iaikge1xuICAgIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydHMuc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplT2JqZWN0O1xudmFyIHNlcmlhbGl6ZU9iaiA9IHtcbiAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbn07XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZU9iajtcblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICAgIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxudmFyIGlzSG9zdCA9IGZ1bmN0aW9uIGlzSG9zdChvYmopIHtcbiAgICB2YXIgc3RyID0gKHt9KS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgICBzd2l0Y2ggKHN0cikge1xuICAgICAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICAgICAgY2FzZSAnW29iamVjdCBCbG9iXSc6XG4gICAgICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnRzLmlzSG9zdCA9IGlzSG9zdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUZxWVhndmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzBGQlNVRXNTVUZCU1N4SlFVRkpMRWRCUVVjc1YwRkJWeXhKUVVGSkxFOUJRVThzVFVGQlRTeEhRVU5vUXl4aFFVRlJMRWxCUVVrc1IwRkRZaXhOUVVGTkxFTkJRVU03TzBGQlJVNHNTVUZCU1N4TlFVRk5MRWRCUVVjc1UwRkJWQ3hOUVVGTkxFZEJRV1U3UVVGRE5VSXNVVUZCU1N4SlFVRkpMRU5CUVVNc1kwRkJZeXhMUVVObUxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4UFFVRlBMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlEzQkVMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlFTeEJRVUZETEVWQlFVVTdRVUZEZWtJc1pVRkJUeXhKUVVGSkxHTkJRV01zUlVGQlFTeERRVUZETzB0QlF6ZENMRTFCUVUwN1FVRkRTQ3haUVVGSk8wRkJRVVVzYlVKQlFVOHNTVUZCU1N4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0VFFVRkZMRU5CUVVNc1QwRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5zUlN4WlFVRkpPMEZCUVVVc2JVSkJRVThzU1VGQlNTeGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF6dFRRVUZGTEVOQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOdVJTeFpRVUZKTzBGQlFVVXNiVUpCUVU4c1NVRkJTU3hoUVVGaExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRUUVVGRkxFTkJRVU1zVDBGQlRTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTnVSU3haUVVGSk8wRkJRVVVzYlVKQlFVOHNTVUZCU1N4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0VFFVRkZMRU5CUVVNc1QwRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJUdExRVU5zUlR0QlFVTkVMRmRCUVU4c1MwRkJTeXhEUVVGRE8wTkJRMmhDTEVOQlFVTTdPenRCUVVWTExFbEJRVWtzWlVGQlpTeEhRVUZITEZOQlFXeENMR1ZCUVdVc1EwRkJXU3hIUVVGSExFVkJRVVU3UVVGRGRrTXNVVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVkQlFVY3NRMEZCUXp0QlFVTXZRaXhSUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEWml4VFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJUdEJRVU5xUWl4WlFVRkpMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYkVJc2FVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlF6VkNMRWRCUVVjc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6ZERPMHRCUTBvN1FVRkRSQ3hYUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkRNVUlzUTBGQlF6czdPMEZCUlVZc1NVRkJTU3haUVVGWkxFZEJRVWM3UVVGRFppeDFRMEZCYlVNc1JVRkJSU3hUUVVGVE8wRkJRemxETEhOQ1FVRnJRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTzBOQlEzSkRMRU5CUVVNN1VVRkRjMElzVTBGQlV5eEhRVUY2UWl4WlFVRlpPenRCUVVWd1FpeFRRVUZUTEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVN1FVRkRjRUlzVVVGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hQUVVGUExFZEJRVWNzUTBGQlF6dEJRVU12UWl4UlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRFppeFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJSVHRCUVVOcVFpeFpRVUZKTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGJFSXNhVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRelZDTEVkQlFVY3NSMEZCUnl4clFrRkJhMElzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRemRETzB0QlEwbzdRVUZEUkN4WFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRMEZETVVJN08wRkJSVTBzU1VGQlNTeE5RVUZOTEVkQlFVY3NVMEZCVkN4TlFVRk5MRU5CUVZrc1IwRkJSeXhGUVVGRk8wRkJRemxDTEZGQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVFc1IwRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSV2hETEZsQlFWRXNSMEZCUnp0QlFVTlFMR0ZCUVVzc1pVRkJaU3hEUVVGRE8wRkJRM0pDTEdGQlFVc3NaVUZCWlN4RFFVRkRPMEZCUTNKQ0xHRkJRVXNzYlVKQlFXMUNPMEZCUTNCQ0xHMUNRVUZQTEVsQlFVa3NRMEZCUXp0QlFVRkJMRUZCUTJoQ08wRkJRMGtzYlVKQlFVOHNTMEZCU3l4RFFVRkRPMEZCUVVFc1MwRkRjRUk3UTBGRFNpeERRVUZCSWl3aVptbHNaU0k2SW1GcVlYZ3ZkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUTNKbFlYUmxaQ0JpZVNCMGIyMXRlVnBhVFNCdmJpQXlNREUxTHpndk1Ua3VYSEpjYmlBcUwxeHlYRzVjY2x4dWRtRnlJSEp2YjNRZ1BTQW5kVzVrWldacGJtVmtKeUE5UFNCMGVYQmxiMllnZDJsdVpHOTNYSEpjYmlBZ0lDQS9JQ2gwYUdseklIeDhJSE5sYkdZcFhISmNiaUFnSUNBNklIZHBibVJ2ZHp0Y2NseHVYSEpjYm1WNGNHOXlkQ0IyWVhJZ1oyVjBXRWhTSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdhV1lnS0hKdmIzUXVXRTFNU0hSMGNGSmxjWFZsYzNSY2NseHVJQ0FnSUNBZ0lDQW1KaUFvSVhKdmIzUXViRzlqWVhScGIyNGdmSHdnSjJacGJHVTZKeUFoUFNCeWIyOTBMbXh2WTJGMGFXOXVMbkJ5YjNSdlkyOXNYSEpjYmlBZ0lDQWdJQ0FnZkh3Z0lYSnZiM1F1UVdOMGFYWmxXRTlpYW1WamRDa3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGaE5URWgwZEhCU1pYRjFaWE4wTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNCMGNua2dleUJ5WlhSMWNtNGdibVYzSUVGamRHbDJaVmhQWW1wbFkzUW9KMDFwWTNKdmMyOW1kQzVZVFV4SVZGUlFKeWs3SUgwZ1kyRjBZMmdvWlNrZ2UzMWNjbHh1SUNBZ0lDQWdJQ0IwY25rZ2V5QnlaWFIxY200Z2JtVjNJRUZqZEdsMlpWaFBZbXBsWTNRb0owMXplRzFzTWk1WVRVeElWRlJRTGpZdU1DY3BPeUI5SUdOaGRHTm9LR1VwSUh0OVhISmNiaUFnSUNBZ0lDQWdkSEo1SUhzZ2NtVjBkWEp1SUc1bGR5QkJZM1JwZG1WWVQySnFaV04wS0NkTmMzaHRiREl1V0UxTVNGUlVVQzR6TGpBbktUc2dmU0JqWVhSamFDaGxLU0I3ZlZ4eVhHNGdJQ0FnSUNBZ0lIUnllU0I3SUhKbGRIVnliaUJ1WlhjZ1FXTjBhWFpsV0U5aWFtVmpkQ2duVFhONGJXd3lMbGhOVEVoVVZGQW5LVHNnZlNCallYUmphQ2hsS1NCN2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owSUhaaGNpQnpaWEpwWVd4cGVtVlBZbXBsWTNRZ1BTQm1kVzVqZEdsdmJpaHZZbW9wSUh0Y2NseHVJQ0FnSUdsbUlDZ2hhWE5QWW1wbFkzUW9iMkpxS1NrZ2NtVjBkWEp1SUc5aWFqdGNjbHh1SUNBZ0lIWmhjaUJ3WVdseWN5QTlJRnRkTzF4eVhHNGdJQ0FnWm05eUlDaDJZWElnYTJWNUlHbHVJRzlpYWlrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNodWRXeHNJQ0U5SUc5aWFsdHJaWGxkS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGFYSnpMbkIxYzJnb1pXNWpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtHdGxlU2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNzZ0p6MG5JQ3NnWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0c5aWFsdHJaWGxkS1NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdjbVYwZFhKdUlIQmhhWEp6TG1wdmFXNG9KeVluS1R0Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCelpYSnBZV3hwZW1WUFltb2dQU0I3WEhKY2JpQWdJQ0FuWVhCd2JHbGpZWFJwYjI0dmVDMTNkM2N0Wm05eWJTMTFjbXhsYm1OdlpHVmtKem9nYzJWeWFXRnNhWHBsTEZ4eVhHNGdJQ0FnSjJGd2NHeHBZMkYwYVc5dUwycHpiMjRuT2lCS1UwOU9Mbk4wY21sdVoybG1lVnh5WEc1OU8xeHlYRzVsZUhCdmNuUWdlM05sY21saGJHbDZaVTlpYWlCaGN5QnpaWEpwWVd4cGVtVjlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdjMlZ5YVdGc2FYcGxLRzlpYWlrZ2UxeHlYRzRnSUNBZ2FXWWdLQ0ZwYzA5aWFtVmpkQ2h2WW1vcEtTQnlaWFIxY200Z2IySnFPMXh5WEc0Z0lDQWdkbUZ5SUhCaGFYSnpJRDBnVzEwN1hISmNiaUFnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYjJKcUtTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHNTFiR3dnSVQwZ2IySnFXMnRsZVYwcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRnBjbk11Y0hWemFDaGxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9hMlY1S1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0t5QW5QU2NnS3lCbGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb2IySnFXMnRsZVYwcEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J5WlhSMWNtNGdjR0ZwY25NdWFtOXBiaWduSmljcE8xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdkbUZ5SUdselNHOXpkQ0E5SUdaMWJtTjBhVzl1S0c5aWFpa2dlMXh5WEc0Z0lDQWdkbUZ5SUhOMGNpQTlJSHQ5TG5SdlUzUnlhVzVuTG1OaGJHd29iMkpxS1R0Y2NseHVYSEpjYmlBZ0lDQnpkMmwwWTJnZ0tITjBjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjF0dlltcGxZM1FnUm1sc1pWMG5PbHh5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMXR2WW1wbFkzUWdRbXh2WWwwbk9seHlYRzRnSUNBZ0lDQWdJR05oYzJVZ0oxdHZZbXBsWTNRZ1JtOXliVVJoZEdGZEp6cGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYSEpjYmlBZ0lDQWdJQ0FnWkdWbVlYVnNkRHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJQ0FnZlZ4eVhHNTlJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSXZjMjkxY21ObEx5SjlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2Rpc3QvYWpheC91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+dGl0bGU8L2gxPlxyXG4gICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9IZWFkZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vaW5jL0NvbnRlbnQuanNcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2luYy9TaWRlQmFyLmpzXCI7XHJcblxyXG5pbXBvcnQgRXhhbXBsZU1hbmFnZXIgZnJvbSAnLi4vLi4vY29yZS9FeGFtcGxlTWFuYWdlci5qcydcclxuXHJcbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvQm9keS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Qm9vdHN0cmFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIlxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvOC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPENvbCBjbGFzc05hbWU9XCJjb250ZW50IFwiIG1kPXs4fT48L0NvbD5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvQ29udGVudC5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2wsSW5wdXR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5cclxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJzaWRlYmFyXCIgbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIga2V5IHdvcmRzLi4uJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvU2lkZUJhci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xMC5cclxuICovXHJcblxyXG5pbXBvcnQge0FqYXgsIEV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnYWxzYyc7XHJcblxyXG5jbGFzcyBFeGFtcGxlTWFuYWdlcntcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlO1xyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCEoRXhhbXBsZU1hbmFnZXIuX2luc3RhbmNlIGluc3RhbmNlb2YgRXhhbXBsZU1hbmFnZXIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeGFtcGxlTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRXhhbXBsZU1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBFdmVudERpc3BhdGNoZXIoKTtcclxuICAgICAgICB0aGlzLmxvYWRleGFtcGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3kvovlrZDmlbDmja5cclxuICAgIGxvYWRleGFtcGxlKCl7XHJcbiAgICAgICAgQWpheC5nZXQoXCJkaXN0L3Bvc3RfZGF0YS5qc29uXCIpXHJcbiAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyLHJlcyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIscmVzLEpTT04ucGFyc2UocmVzLmRhdGEpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZU1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvY29yZS9FeGFtcGxlTWFuYWdlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnYWxzYyc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxmb290ZXI+PC9mb290ZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==