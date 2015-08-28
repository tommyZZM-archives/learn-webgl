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
	            //console.log(this._points,x,y,e.clientX,e.clientY,rect)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI3ZGYxNTUxODU2NmUyNTBjZDAiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjYtU2hhZGVyL0VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NqQ00sTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ0Esa0JBQUMsTUFBTSxFQUFDOzs7QUFDWixpQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGlCQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxPQUFPOztBQUV2QixpQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM3QyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQy9DLGlCQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFD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YyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7O0FBR3pFLG1CQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBQ2xDO1VBQ0o7OztZQWpHQyxNQUFNO0lBQVMsR0FBRyxDQUFDLFdBQVc7O0FBb0dwQyxPQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjdkZjE1NTE4NTY2ZTI1MGNkMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yNi5cclxuICovXHJcblxyXG5cclxuY2xhc3MgU2FtcGxlIGV4dGVuZHMgYXBwLlNhbXBsZUZpZWxke1xyXG4gICAgb25MYXVuY2goY2FudmFzKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5xdWVyeVswXTtcclxuICAgICAgICBpZighdGhpcy5jYW52YXMpcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG4gICAgICAgIHRoaXMuZ2xbXCJ2aWV3cG9ydFdpZHRoXCJdID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5nbFtcInZpZXdwb3J0SGVpZ2h0XCJdID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwwLHRoaXMuY2FudmFzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFNoYWRlcnModGhpcy5nbCwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vblNoYWRlcnNMb2FkKHRoaXMuZ2wpO1xyXG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hIYW5kZWxlciA9IHRoaXMub25Ub3VjaC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vblRvdWNoSGFuZGVsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uY2UoXCJkZXN0cnVjdFwiLCgpPT57dGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vblRvdWNoSGFuZGVsZXJ8fCgoKT0+e30pKX0pXHJcblxyXG4gICAgICAgIH0sW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6dGhpcy5zcmNQYXRoKFwiZ2xzbC92ZXJ0ZXguZ2xzbFwiKSwvL1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcInZlcnRleFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTp0aGlzLkNPTlNUQU5UUy5WXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgdXJsOnRoaXMuc3JjUGF0aChcImdsc2wvZnJhZ21lbnQuZ2xzbFwiKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJmcmFnbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTp0aGlzLkNPTlNUQU5UUy5GXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoKGUpe1xyXG4gICAgICAgIHZhciByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHZhciB4ID0gZS5jbGllbnRYOyAvLyB4IGNvb3JkaW5hdGUgb2YgYSBtb3VzZSBwb2ludGVyXHJcbiAgICAgICAgdmFyIHkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgICAgIHZhciBjdyA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdmFyIGNoID0gcmVjdC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHggPSAoKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLSBjdy8yKS8oY3cvMik7XHJcbiAgICAgICAgeSA9IChjaC8yIC0gKGUuY2xpZW50WSAtIHJlY3QudG9wKSkvKGNoLzIpO1xyXG5cclxuICAgICAgICB0aGlzLl9wb2ludHMucHVzaCh7eDp4LCB5Onl9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX3BvaW50cyx4LHksZS5jbGllbnRYLGUuY2xpZW50WSxyZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhZGVyc0xvYWQoZ2wpe1xyXG4gICAgICAgIHRoaXMucHJvZ2FtbWUgPSB0aGlzLmluaXRTaGFkZXIoZ2wpO1xyXG4gICAgICAgIGFwcC5BbmltYXRpb25NYW5hZ2VyLm9uTG9vcCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihnbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXBwLkFuaW1hdGlvbk1hbmFnZXIucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNoYWRlcihnbCl7XHJcbiAgICAgICAgdmFyIHZlcnRleFNoYWRlciA9IHRoaXMuc2hhZGVyc0RpY3RbXCJ2ZXJ0ZXhcIl07XHJcbiAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5zaGFkZXJzRGljdFtcImZyYWdtZW50XCJdO1xyXG5cclxuICAgICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTsgLy/lvJXlhaXpobbngrnnnYDoibLlmahcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpOy8v5byV5YWl54mH5YWD552A6Imy5ZmoXHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7Ly/liJ3lp4vljJZTaGFkZXLnqIvluo9cclxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGVycm9yKFwiQ291bGQgbm90IGluaXRpYWxpc2Ugc2hhZGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHJcbiAgICAgICAgZ2wuZGV0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgZ2wuZGV0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG4gICAgICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihnbCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclwiKVxyXG4gICAgICAgIHZhciBhX1Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9nYW1tZSxcImFfUG9zaXRpb25cIik7XHJcblxyXG4gICAgICAgIHZhciB1X0ZyYWdDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dhbW1lLFwidV9GcmFnQ29sb3JcIik7XHJcbiAgICAgICAgaWYodV9GcmFnQ29sb3Ipe1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtNGYodV9GcmFnQ29sb3IsMC4xLCAwLjczLCAwLjYxLCAxLjApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xyXG5cclxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgIC8vZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsMCwxKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5fcG9pbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIC8vIFBhc3MgdGhlIHBvc2l0aW9uIG9mIGEgcG9pbnQgdG8gYV9Qb3NpdGlvbiB2YXJpYWJsZVxyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIzZihhX1Bvc2l0aW9uLCB0aGlzLl9wb2ludHNbaV0ueCwgdGhpcy5fcG9pbnRzW2ldLnksIDAuMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEcmF3XHJcbiAgICAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2FtcGxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjYtU2hhZGVyL0VudHJ5LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==