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
	
	var AjaxProxy = (function (_EventDispatcher) {
	    _inherits(AjaxProxy, _EventDispatcher);
	
	    function AjaxProxy(method, url) {
	        _classCallCheck(this, AjaxProxy);
	
	        _get(Object.getPrototypeOf(AjaxProxy.prototype), "constructor", this).call(this);
	        this.method = method;
	        this.url = url;
	        this._query = [];
	        this._header = {};
	        this.header = {};
	        this._callbackFn = noop;
	        this._init();
	    }
	
	    _createClass(AjaxProxy, [{
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
	
	            if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
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
	
	            this.emit('request', this._toSuccess.bind(this));
	
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
	            this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
	            this.statusText = this.req.xhr.statusText;
	            this._setStatusProperties(this.xhr.status);
	
	            this.on("end", this.toS);
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
	        value: function _toSuccess(data) {
	            this._callback(null, data);
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
	            return new AjaxProxy(Method.GET, url);
	        }
	    }]);
	
	    return AjaxProxy;
	})(_eventsEventDispatcherJs2["default"]);
	
	exports["default"] = AjaxProxy;
	module.exports = exports["default"];

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
	                console.log(err, res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2FlMmVhMWM4Zjg0ODE5YzY4ZjkiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9tYWluLmVzNn4iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZGlzdC9ldmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvYWpheC9BamF4UHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvYWpheC91dGlscy5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0JvZHkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0Qm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2luYy9Db250ZW50LmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvRXhhbXBsZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7a0NBS0ssQ0FBTzs7OztzQ0FDVCxDQUFlOzs7O0tBRXpCLElBQUksR0FDSyxTQURULElBQUksR0FDTzsyQkFEWCxJQUFJOztBQUVGLHdCQUFNLE1BQU0sQ0FBQyw4REFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4RDs7c0JBR1UsSUFBSTs7Ozs7OztBQ2RuQiwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NHa0IsQ0FBTzs7OztpQ0FDTyxDQUFNOzsyQ0FFbkIsQ0FBb0I7Ozs7eUNBQ3RCLEVBQWtCOzs7OzJDQUNoQixFQUFvQjs7OztLQUVqQyxHQUFHO2VBQUgsR0FBRzs7QUFDTSxjQURULEdBQUcsR0FDUTs7OytCQURYLEdBQUc7O0FBRUQsb0NBRkYsR0FBRyw2Q0FFTzs7QUFFUixhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7QUFFN0IsZUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0FBQ3BDLGlCQUFHLE1BQUssT0FBTyxFQUFDO0FBQ1osdUJBQUssUUFBUSxFQUFFLENBQUM7Y0FDbkI7VUFDSixDQUFDLENBQUM7TUFDTjs7a0JBWEMsR0FBRzs7Z0JBYUcsb0JBQUU7QUFD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TyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO2NBQ3ZCLENBQUM7VUFDVDs7O1lBckJDLGNBQWM7OztzQkF3QkwsY0FBYyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQzNCcEIsQ0FBTzs7OztpQ0FDTyxDQUFNOztLQUVoQyxNQUFNO2VBQU4sTUFBTTs7Y0FBTixNQUFNOytCQUFOLE1BQU07O29DQUFOLE1BQU07OztrQkFBTixNQUFNOztnQkFDRixrQkFBRTtBQUNKLG9CQUFPLGdEQUFpQjtVQUMzQjs7O1lBSEMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQU1yQixNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNhZTJlYTFjOGY4NDgxOWM2OGY5XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS83LzE2LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlldy9BcHAuanMnO1xuXG5jbGFzcyBNYWlue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvbWFpbi5lczZ+XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICdhbHNjJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9sYXlvdXQvSGVhZGVyLmpzJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9sYXlvdXQvQm9keS5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9sYXlvdXQvRm9vdGVyLmpzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNNb3VudCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHQtMTYgLy9kb2N1bWVudCBtYXJnaW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzTW91bnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNNb3VudCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLndpbmRvd1Jlc2l6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhcHAgPVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcHVsbC1jZW50ZXIgcGFwZXJcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvQXBwLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5FdmVudERpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcIik7XHJcbmV4cG9ydHMuQWpheCAgPSByZXF1aXJlKFwiLi9kaXN0L2FqYXgvQWpheFByb3h5LmpzXCIpXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF91dGlsc0pzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbi8vdmFyIGV2ZW50c01hcCA9IHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCI/U3ltYm9sKCk6XCJfX2V2ZW50c01hcF9fXCI7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0pzKTtcblxudmFyIGV2ZW50c01hcCA9IFwiX19ldmVudHNNYXBfX1wiO1xuXG52YXIgRXZlbnREaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudERpc3BhdGNoZXIpO1xuXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICog5rS+5Y+R5LiA5Liq5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cblxuICAgIF9jcmVhdGVDbGFzcyhFdmVudERpc3BhdGNoZXIsIFt7XG4gICAgICAgIGtleTogXCJlbWl0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRtYXAgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRtYXApKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHV0aWxzLm5vdGlmeUFycmF5KGV2ZW50bWFwLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/lOWbnuaJgOacieWbnuiwg+aWueazlVxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImxpc3RlbmVyc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubWFwKGZ1bmN0aW9uIChiaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluLmNhbGxiYWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJoYXNMaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzW2V2ZW50c01hcF1bZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbZXZlbnRzTWFwXVtldmVudF0ubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOS4gOWPquS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB0aGlzT2JqZWN0XHJcbiAgICAgICAgICogQHBhcmFtIHByaW9yaXR5XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiYWRkTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCwgbnVsbCwgcHJpb3JpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56e76Zmk5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW1vdmVMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgICAgICAgICB1dGlscy51bnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnp7vpmaTmiYDmnInkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW1vdmVBbGxMaXN0ZW5lclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9kyznroDmmJPop6blj5HlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2TLOWUr+S4gOinpuWPkeWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uY2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIG51bGwsIG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlcjtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnREaXNwYXRjaGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHNjL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xOS5cclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlZ2lzdE5vdGlmeSA9IHJlZ2lzdE5vdGlmeTtcbmV4cG9ydHMudW5yZWdpc3ROb3RpZnkgPSB1bnJlZ2lzdE5vdGlmeTtcbmV4cG9ydHMubm90aWZ5ID0gbm90aWZ5O1xuZXhwb3J0cy5ub3RpZnlBcnJheSA9IG5vdGlmeUFycmF5O1xuXG5mdW5jdGlvbiByZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCwgcGFyYW0sIHByaW9yaXR5LCBvbmNlKSB7XG4gICAgLy8scmVzZXJ2ZT86YW55XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIG5vdGlmeW1hcFtuYW1lXSA9IFtdO1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG5cbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgaW5zZXJ0SW5kZXggPSAtMTtcbiAgICB2YXIgYmluO1xuXG4gICAgaWYgKHByaW9yaXR5ID09PSB1bmRlZmluZWQpIHByaW9yaXR5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJpbiA9IGFycltpXTtcbiAgICAgICAgaWYgKGJpbiAmJiBiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8v6Ziy5q2i6YeN5aSN5o+S5YWlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpbiAmJiBpbnNlcnRJbmRleCA9PSAtMSAmJiBiaW4ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xuICAgICAgICAgICAgaW5zZXJ0SW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluID0geyBjYWxsYmFjazogY2FsbGJhY2ssIHRoaXNPYmplY3Q6IHRoaXNPYmplY3QsIHBhcmFtOiBwYXJhbSA/IHBhcmFtIDogW10sIHByaW9yaXR5OiBwcmlvcml0eSwgb25jZTogb25jZSB9O1xuICAgIGlmIChpbnNlcnRJbmRleCAhPSAtMSkge1xuICAgICAgICBhcnIuc3BsaWNlKGluc2VydEluZGV4LCAwLCBiaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyci5wdXNoKGJpbik7XG4gICAgfVxuICAgIG5vdGlmeW1hcFtuYW1lXSA9IGFycjtcbn1cblxuZnVuY3Rpb24gdW5yZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKSByZXR1cm47XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIG5vdGlmeW1hcFtuYW1lXSA9IGFyci5maWx0ZXIoZnVuY3Rpb24gKGJpbikge1xuICAgICAgICAgICAgcmV0dXJuICEoYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5KG5vdGlmeW1hcCwgbmFtZSwgcGFyYW0pIHtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeUFycmF5KGFyciwgcGFyYW0pIHtcbiAgICBmb3IgKHZhciBpIGluIGFycikge1xuICAgICAgICBpZiAodHlwZW9mICtpID09PSBcIm51bWJlclwiICYmICFpc05hTigraSkpIHtcbiAgICAgICAgICAgIHZhciBiaW4gPSBhcnJbaV07XG4gICAgICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmICghcGFyYW0pIHBhcmFtID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGJpbi5wYXJhbSkgcGFyYW0gPSBiaW4ucGFyYW0uY29uY2F0KHBhcmFtKTtcbiAgICAgICAgICAgICAgICBiaW4uY2FsbGJhY2suYXBwbHkoYmluLnRoaXNPYmplY3QsIHBhcmFtKTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8xOS5cclxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9ldmVudHNFdmVudERpc3BhdGNoZXJKcyA9IHJlcXVpcmUoXCIuLi9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXCIpO1xuXG52YXIgX2V2ZW50c0V2ZW50RGlzcGF0Y2hlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50c0V2ZW50RGlzcGF0Y2hlckpzKTtcblxudmFyIF91dGlsc0pzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0pzKTtcblxudmFyIGVuZFNpZ24gPSBcImVuZFwiO1xuXG52YXIgTWV0aG9kID0ge1xuICAgIEdFVDogXCJnZXRcIixcbiAgICBQT1NUOiBcInBvc3RcIlxufTtcblxuaWYgKHR5cGVvZiBub29wICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbn1cblxuLy9UT0RPOuWPr+S7peWPguiAg3N1cGVyYWdlbnQgY2xpZW50LmpzXG5cbnZhciBBamF4UHJveHkgPSAoZnVuY3Rpb24gKF9FdmVudERpc3BhdGNoZXIpIHtcbiAgICBfaW5oZXJpdHMoQWpheFByb3h5LCBfRXZlbnREaXNwYXRjaGVyKTtcblxuICAgIGZ1bmN0aW9uIEFqYXhQcm94eShtZXRob2QsIHVybCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheFByb3h5KTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihBamF4UHJveHkucHJvdG90eXBlKSwgXCJjb25zdHJ1Y3RvclwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gW107XG4gICAgICAgIHRoaXMuX2hlYWRlciA9IHt9O1xuICAgICAgICB0aGlzLmhlYWRlciA9IHt9O1xuICAgICAgICB0aGlzLl9jYWxsYmFja0ZuID0gbm9vcDtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBamF4UHJveHksIFt7XG4gICAgICAgIGtleTogXCJzZXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZCwgdmFsKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJlbmRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuZChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHhociA9IHRoaXMueGhyIHx8IHV0aWxzLmdldFhIUigpO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja0ZuID0gZm4gfHwgbm9vcDtcblxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgLy8gSW4gSUU5LCByZWFkcyB0byBhbnkgcHJvcGVydHkgKGUuZy4gc3RhdHVzKSBvZmYgb2YgYW4gYWJvcnRlZCBYSFIgd2lsbFxuICAgICAgICAgICAgICAgIC8vIHJlc3VsdCBpbiB0aGUgZXJyb3IgXCJDb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbiBkdWUgdG8gZXJyb3IgYzAwYzAyM2ZcIlxuICAgICAgICAgICAgICAgIHZhciBzdGF0dXM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fdG9FcnJvcihcImNyb3NzRG9tYWluXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlbmQnLCB7IGRhdGE6IHhoci5yZXNwb25zZVRleHQgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBwcm9ncmVzc1xuICAgICAgICAgICAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgICAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci51cGxvYWQgJiYgdGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgzNzI0NS94bWxodHRwcmVxdWVzdC11cGxvYWQtdGhyb3dzLWludmFsaWQtYXJndW1lbnQtd2hlbi11c2VkLWZyb20td2ViLXdvcmtlci1jb250ZXh0XG5cbiAgICAgICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gICAgICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHV0aWxzLnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKSA/ICcmJyArIHF1ZXJ5IDogJz8nICsgcXVlcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgICAgICAgICAgICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VyaWFsaXplID0gdXRpbHMuc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzLl90b1N1Y2Nlc3MuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwidGhlblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGhlbihmdWxmaWxsLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuZChmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICBlcnIgPyByZWplY3QoZXJyKSA6IGZ1bGZpbGwocmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiX2luaXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgICAgICAgdGhpcy54aHIgPSB1dGlscy5nZXRYSFIoKTtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHx8IHR5cGVvZiB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnID8gdGhpcy54aHIucmVzcG9uc2VUZXh0IDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IHRoaXMucmVxLnhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uKFwiZW5kXCIsIHRoaXMudG9TKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIl9zZXRTdGF0dXNQcm9wZXJ0aWVzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0U3RhdHVzUHJvcGVydGllcyhzdGF0dXMpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAgICAgICAgICAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAgICAgICAgICAgLy8gYmFzaWNzXG4gICAgICAgICAgICB0aGlzLmluZm8gPSAxID09IHR5cGU7XG4gICAgICAgICAgICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICAgICAgICAgICAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVyRXJyb3IgPSA1ID09IHR5cGU7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gNCA9PSB0eXBlIHx8IDUgPT0gdHlwZSA/IHRoaXMuX3RvRXJyb3IoKSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBzdWdhclxuICAgICAgICAgICAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLmJhZFJlcXVlc3QgPSA0MDAgPT0gc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSA0MDQgPT0gc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiX3RvU3VjY2Vzc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3RvU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIl90b0Vycm9yXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9FcnJvcih0eXBlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NEb21haW5cIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJfY2FsbGJhY2tcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYWxsYmFjayhlcnIsIHJlcykge1xuICAgICAgICAgICAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2tGbjtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZU91dCgpO1xuICAgICAgICAgICAgZm4oZXJyLCByZXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiX2NsZWFyVGltZU91dFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NsZWFyVGltZU91dCgpIHt9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogXCJnZXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWpheFByb3h5KE1ldGhvZC5HRVQsIHVybCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQWpheFByb3h5O1xufSkoX2V2ZW50c0V2ZW50RGlzcGF0Y2hlckpzMltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFqYXhQcm94eTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2FqYXgvQWpheFByb3h5LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldFhIUiA9IGZ1bmN0aW9uIGdldFhIUigpIHtcbiAgICBpZiAocm9vdC5YTUxIdHRwUmVxdWVzdCAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sIHx8ICFyb290LkFjdGl2ZVhPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydHMuZ2V0WEhSID0gZ2V0WEhSO1xudmFyIHNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uIHNlcmlhbGl6ZU9iamVjdChvYmopIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgdmFyIHBhaXJzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59O1xuXG5leHBvcnRzLnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZU9iamVjdDtcbnZhciBzZXJpYWxpemVPYmogPSB7XG4gICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG59O1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemVPYmo7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgdmFyIHBhaXJzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2FqYXgvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnRpdGxlPC9oMT5cclxuICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2luYy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9pbmMvU2lkZUJhci5qc1wiO1xyXG5cclxuaW1wb3J0IEV4YW1wbGVNYW5hZ2VyIGZyb20gJy4uLy4uL2NvcmUvRXhhbXBsZU1hbmFnZXIuanMnXHJcblxyXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0JvZHkuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdEJvb3RzdHJhcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0Qm9vdHN0cmFwXCJcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzguXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxDb2wgY2xhc3NOYW1lPVwiY29udGVudCBcIiBtZD17OH0+PC9Db2w+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL0NvbnRlbnQuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvOC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sLElucHV0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic2lkZWJhclwiIG1kPXs0fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGtleSB3b3Jkcy4uLidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL1NpZGVCYXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTAuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtBamF4LCBFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5cclxuY2xhc3MgRXhhbXBsZU1hbmFnZXJ7XHJcblxyXG4gICAgc3RhdGljIF9pbnN0YW5jZTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKXtcclxuICAgICAgICBpZighKEV4YW1wbGVNYW5hZ2VyLl9pbnN0YW5jZSBpbnN0YW5jZW9mIEV4YW1wbGVNYW5hZ2VyKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhhbXBsZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEV4YW1wbGVNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZXhhbXBsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L295L6L5a2Q5pWw5o2uXHJcbiAgICBsb2FkZXhhbXBsZSgpe1xyXG4gICAgICAgIEFqYXguZ2V0KFwiZGlzdC9wb3N0X2RhdGEuanNvblwiKVxyXG4gICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKGVycixyZXMpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLHJlcylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZU1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvY29yZS9FeGFtcGxlTWFuYWdlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnYWxzYyc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxmb290ZXI+PC9mb290ZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvRm9vdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==