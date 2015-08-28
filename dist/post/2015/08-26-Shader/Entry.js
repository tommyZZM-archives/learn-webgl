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
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/26.
	 */
	
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sample = (function (_app$SampleField) {
	    _inherits(Sample, _app$SampleField);
	
	    function Sample() {
	        _classCallCheck(this, Sample);
	
	        _get(Object.getPrototypeOf(Sample.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Sample, [{
	        key: "onLaunch",
	        value: function onLaunch(canvas) {
	            var _this = this;
	
	            this.canvas = canvas.query[0];
	            if (!this.canvas) return;
	
	            this.gl = this.canvas.getContext("webgl");
	            this.gl["viewportWidth"] = this.canvas.width;
	            this.gl["viewportHeight"] = this.canvas.height;
	            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
	
	            this.loadShaders(this.gl, function () {
	                _this._points = [];
	                _this.onShadersLoad(_this.gl);
	                _this.onTouchHandeler = _this.onTouch.bind(_this);
	
	                _this.canvas.addEventListener("click", _this.onTouchHandeler);
	                _this.once("destruct", function () {
	                    _this.canvas.removeEventListener("click", _this.onTouchHandeler || function () {});
	                });
	            }, [{
	                url: this.srcPath("glsl/vertex.glsl"), //
	                name: "vertex",
	                type: this.CONSTANTS.V
	            }, {
	                url: this.srcPath("glsl/fragment.glsl"),
	                name: "fragment",
	                type: this.CONSTANTS.F
	            }]);
	        }
	    }, {
	        key: "onTouch",
	        value: function onTouch(e) {
	            var rect = e.target.getBoundingClientRect();
	
	            var x = e.clientX; // x coordinate of a mouse pointer
	            var y = e.clientY;
	
	            var cw = rect.width;
	            var ch = rect.height;
	
	            x = (e.clientX - rect.left - cw / 2) / (cw / 2);
	            y = (ch / 2 - (e.clientY - rect.top)) / (ch / 2);
	
	            this._points.push({ x: x, y: y });
	            console.log(this._points, x, y, e.clientX, e.clientY, rect);
	        }
	    }, {
	        key: "onShadersLoad",
	        value: function onShadersLoad(gl) {
	            var _this2 = this;
	
	            this.progamme = this.initShader(gl);
	            app.AnimationManager.onLoop(function () {
	                _this2.render(gl);
	            });
	            app.AnimationManager.run();
	        }
	    }, {
	        key: "initShader",
	        value: function initShader(gl) {
	            var vertexShader = this.shadersDict["vertex"];
	            var fragmentShader = this.shadersDict["fragment"];
	
	            var shaderProgram = gl.createProgram();
	            gl.attachShader(shaderProgram, vertexShader); //引入顶点着色器
	            gl.attachShader(shaderProgram, fragmentShader); //引入片元着色器
	            gl.linkProgram(shaderProgram); //初始化Shader程序
	            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	                error("Could not initialise shaders");
	            }
	            gl.useProgram(shaderProgram);
	
	            gl.detachShader(shaderProgram, vertexShader);
	            gl.detachShader(shaderProgram, fragmentShader);
	
	            gl.enable(gl.DEPTH_TEST);
	            return shaderProgram;
	        }
	    }, {
	        key: "render",
	        value: function render(gl) {
	            //console.log("render")
	            var a_Position = gl.getAttribLocation(this.progamme, "a_Position");
	
	            var u_FragColor = gl.getUniformLocation(this.progamme, "u_FragColor");
	            if (u_FragColor) {
	                gl.uniform4f(u_FragColor, 0.1, 0.73, 0.61, 1.0);
	            }
	
	            gl.clearColor(0.0, 0.0, 0.0, 1.0);
	
	            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	            //gl.drawArrays(gl.POINTS,0,1);
	            var length = this._points.length;
	            for (var i = 0; i < length; i++) {
	                // Pass the position of a point to a_Position variable
	                gl.vertexAttrib3f(a_Position, this._points[i].x, this._points[i].y, 0.0);
	
	                // Draw
	                gl.drawArrays(gl.POINTS, 0, 1);
	            }
	        }
	    }]);
	
	    return Sample;
	})(app.SampleField);
	
	module.exports = Sample;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjMzOTBjNzY0ZDJmMGQwNTlhNmIiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjYtU2hhZGVyL0VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NqQ00sTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ0Esa0JBQUMsTUFBTSxFQUFDOzs7QUFDWixpQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGlCQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxPQUFPOztBQUV2QixpQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM3QyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQy9DLGlCQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFD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QUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNqQyxrQkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUcsRUFBRTs7QUFFN0IsbUJBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7QUFHekUsbUJBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDbEM7VUFDSjs7O1lBakdDLE1BQU07SUFBUyxHQUFHLENBQUMsV0FBVzs7QUFvR3BDLE9BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGIzMzkwYzc2NGQyZjBkMDU5YTZiXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzI2LlxyXG4gKi9cclxuXHJcblxyXG5jbGFzcyBTYW1wbGUgZXh0ZW5kcyBhcHAuU2FtcGxlRmllbGR7XHJcbiAgICBvbkxhdW5jaChjYW52YXMpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzLnF1ZXJ5WzBdO1xyXG4gICAgICAgIGlmKCF0aGlzLmNhbnZhcylyZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcbiAgICAgICAgdGhpcy5nbFtcInZpZXdwb3J0V2lkdGhcIl0gPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmdsW1widmlld3BvcnRIZWlnaHRcIl0gPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkU2hhZGVycyh0aGlzLmdsLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uU2hhZGVyc0xvYWQodGhpcy5nbCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEhhbmRlbGVyID0gdGhpcy5vblRvdWNoLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uVG91Y2hIYW5kZWxlcik7XHJcbiAgICAgICAgICAgIHRoaXMub25jZShcImRlc3RydWN0XCIsKCk9Pnt0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uVG91Y2hIYW5kZWxlcnx8KCgpPT57fSkpfSlcclxuXHJcbiAgICAgICAgfSxbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDp0aGlzLnNyY1BhdGgoXCJnbHNsL3ZlcnRleC5nbHNsXCIpLC8vXHJcbiAgICAgICAgICAgICAgICBuYW1lOlwidmVydGV4XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOnRoaXMuQ09OU1RBTlRTLlZcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICB1cmw6dGhpcy5zcmNQYXRoKFwiZ2xzbC9mcmFnbWVudC5nbHNsXCIpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcImZyYWdtZW50XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOnRoaXMuQ09OU1RBTlRTLkZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2goZSl7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgdmFyIHggPSBlLmNsaWVudFg7IC8vIHggY29vcmRpbmF0ZSBvZiBhIG1vdXNlIHBvaW50ZXJcclxuICAgICAgICB2YXIgeSA9IGUuY2xpZW50WTtcclxuXHJcbiAgICAgICAgdmFyIGN3ID0gcmVjdC53aWR0aDtcclxuICAgICAgICB2YXIgY2ggPSByZWN0LmhlaWdodDtcclxuXHJcbiAgICAgICAgeCA9ICgoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAtIGN3LzIpLyhjdy8yKTtcclxuICAgICAgICB5ID0gKGNoLzIgLSAoZS5jbGllbnRZIC0gcmVjdC50b3ApKS8oY2gvMik7XHJcblxyXG4gICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKHt4OngsIHk6eX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3BvaW50cyx4LHksZS5jbGllbnRYLGUuY2xpZW50WSxyZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhZGVyc0xvYWQoZ2wpe1xyXG4gICAgICAgIHRoaXMucHJvZ2FtbWUgPSB0aGlzLmluaXRTaGFkZXIoZ2wpO1xyXG4gICAgICAgIGFwcC5BbmltYXRpb25NYW5hZ2VyLm9uTG9vcCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihnbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXBwLkFuaW1hdGlvbk1hbmFnZXIucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNoYWRlcihnbCl7XHJcbiAgICAgICAgdmFyIHZlcnRleFNoYWRlciA9IHRoaXMuc2hhZGVyc0RpY3RbXCJ2ZXJ0ZXhcIl07XHJcbiAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5zaGFkZXJzRGljdFtcImZyYWdtZW50XCJdO1xyXG5cclxuICAgICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTsgLy/lvJXlhaXpobbngrnnnYDoibLlmahcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpOy8v5byV5YWl54mH5YWD552A6Imy5ZmoXHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7Ly/liJ3lp4vljJZTaGFkZXLnqIvluo9cclxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGVycm9yKFwiQ291bGQgbm90IGluaXRpYWxpc2Ugc2hhZGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHJcbiAgICAgICAgZ2wuZGV0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgZ2wuZGV0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG4gICAgICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihnbCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclwiKVxyXG4gICAgICAgIHZhciBhX1Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9nYW1tZSxcImFfUG9zaXRpb25cIik7XHJcblxyXG4gICAgICAgIHZhciB1X0ZyYWdDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dhbW1lLFwidV9GcmFnQ29sb3JcIik7XHJcbiAgICAgICAgaWYodV9GcmFnQ29sb3Ipe1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtNGYodV9GcmFnQ29sb3IsMC4xLCAwLjczLCAwLjYxLCAxLjApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xyXG5cclxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgIC8vZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsMCwxKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5fcG9pbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIC8vIFBhc3MgdGhlIHBvc2l0aW9uIG9mIGEgcG9pbnQgdG8gYV9Qb3NpdGlvbiB2YXJpYWJsZVxyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIzZihhX1Bvc2l0aW9uLCB0aGlzLl9wb2ludHNbaV0ueCwgdGhpcy5fcG9pbnRzW2ldLnksIDAuMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEcmF3XHJcbiAgICAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2FtcGxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjYtU2hhZGVyL0VudHJ5LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==