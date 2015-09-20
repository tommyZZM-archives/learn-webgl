//version:7bab99

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
	                _this.onShadersLoad(_this.gl);
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
	        key: "onShadersLoad",
	        value: function onShadersLoad(gl) {
	            var _this2 = this;
	
	            this.progamme = this.initShader(gl);
	            //缓冲区
	            this.vertices = this.initVertexBuffers(gl);
	
	            this.rotation = 0;
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
	        key: "initVertexBuffers",
	        value: function initVertexBuffers(gl) {
	            //顶点数据
	            var vertices = new Float32Array([0.0, 0.5, -0.3, -0.3, 0.3, -0.3]);
	
	            //创建缓冲区
	            var vertexBuffer = gl.createBuffer();
	            if (!vertexBuffer) {
	                console.log('Failed to create the buffer object');
	                return -1;
	            }
	
	            // 绑定缓冲区 (缓冲区目标,缓冲区对象)
	            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	            // 像缓冲区写入顶点数据
	            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
	
	            var a_Position = gl.getAttribLocation(this.progamme, 'a_Position');
	            if (a_Position < 0) {
	                console.log('Failed to get the storage location of a_Position');
	                return -1;
	            }
	            // 将缓冲区数据分配到顶点着色器
	            gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
	
	            // 开启传入的缓冲区数据的attribute变量
	            gl.enableVertexAttribArray(a_Position);
	
	            return vertices;
	        }
	    }, {
	        key: "render",
	        value: function render(gl) {
	            var u_FragColor = gl.getUniformLocation(this.progamme, "u_FragColor");
	            if (u_FragColor) {
	                //rgb(241, 196, 15)
	                gl.uniform4f(u_FragColor, 241 / 255, 196 / 255, 15 / 255, 1.0);
	            }
	
	            gl.clearColor(0.0, 0.0, 0.0, 1.0);
	
	            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	            this.rotation++;
	            var radian = this.rotation * this.CONSTANTS.DEG_TO_RAD;
	            var cosB = Math.cos(radian);
	            var sinB = Math.sin(radian);
	
	            var xformMatrix = new Float32Array([cosB, sinB, 0, 0, -sinB, cosB, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	
	            var u_xformMatrix = gl.getUniformLocation(this.progamme, "u_xformMatrix");
	            if (!u_xformMatrix) {
	                error('Failed to get the storage location of u_xformMatrix');
	                return;
	            }
	            gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
	
	            var u_Translation = gl.getUniformLocation(this.progamme, "u_Translation");
	            if (!u_Translation) {
	                error('Failed to get the storage location of u_Translate');
	                return;
	            }
	
	            gl.uniform4f(u_Translation, 0.0, 0.0, -0.6, 1.0);
	
	            //模式，起始索引值，绘制数量
	            gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 2);
	        }
	
	        //onDestruct(){
	        //    var gl = this.gl;
	        //    var vertexShader = this.shadersDict["vertex"];
	        //    var fragmentShader = this.shadersDict["fragment"];
	        //    gl.detachShader(vertexShader);
	        //    gl.detachShader(fragmentShader);
	        //}
	    }]);
	
	    return Sample;
	})(app.SampleField);
	
	module.exports = Sample;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThjM2JjMDQ3ZmMzYjc0MzE5MjQiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjctQnVmZmVyLVNoYXBlL0VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NsQ00sTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ0Esa0JBQUMsTUFBTSxFQUFDOzs7QUFDWixpQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGlCQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxPQUFPOztBQUV2QixpQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM3QyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQy9DLGlCQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFB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Ozs7Ozs7OztZQWhJQyxNQUFNO0lBQVMsR0FBRyxDQUFDLFdBQVc7O0FBMklwQyxPQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhOGMzYmMwNDdmYzNiNzQzMTkyNFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yNi5cclxuICovXHJcblxyXG5jbGFzcyBTYW1wbGUgZXh0ZW5kcyBhcHAuU2FtcGxlRmllbGR7XHJcbiAgICBvbkxhdW5jaChjYW52YXMpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzLnF1ZXJ5WzBdO1xyXG4gICAgICAgIGlmKCF0aGlzLmNhbnZhcylyZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcbiAgICAgICAgdGhpcy5nbFtcInZpZXdwb3J0V2lkdGhcIl0gPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmdsW1widmlld3BvcnRIZWlnaHRcIl0gPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkU2hhZGVycyh0aGlzLmdsLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMub25TaGFkZXJzTG9hZCh0aGlzLmdsKTtcclxuICAgICAgICB9LFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOnRoaXMuc3JjUGF0aChcImdsc2wvdmVydGV4Lmdsc2xcIiksLy9cclxuICAgICAgICAgICAgICAgIG5hbWU6XCJ2ZXJ0ZXhcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6dGhpcy5DT05TVEFOVFMuVlxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHVybDp0aGlzLnNyY1BhdGgoXCJnbHNsL2ZyYWdtZW50Lmdsc2xcIiksXHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZnJhZ21lbnRcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6dGhpcy5DT05TVEFOVFMuRlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFkZXJzTG9hZChnbCl7XHJcbiAgICAgICAgdGhpcy5wcm9nYW1tZSA9IHRoaXMuaW5pdFNoYWRlcihnbCk7XHJcbiAgICAgICAgLy/nvJPlhrLljLpcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy5pbml0VmVydGV4QnVmZmVycyhnbCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgIGFwcC5BbmltYXRpb25NYW5hZ2VyLm9uTG9vcCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihnbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXBwLkFuaW1hdGlvbk1hbmFnZXIucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNoYWRlcihnbCl7XHJcbiAgICAgICAgdmFyIHZlcnRleFNoYWRlciA9IHRoaXMuc2hhZGVyc0RpY3RbXCJ2ZXJ0ZXhcIl07XHJcbiAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5zaGFkZXJzRGljdFtcImZyYWdtZW50XCJdO1xyXG5cclxuICAgICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTsgLy/lvJXlhaXpobbngrnnnYDoibLlmahcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpOy8v5byV5YWl54mH5YWD552A6Imy5ZmoXHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7Ly/liJ3lp4vljJZTaGFkZXLnqIvluo9cclxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGVycm9yKFwiQ291bGQgbm90IGluaXRpYWxpc2Ugc2hhZGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHJcbiAgICAgICAgZ2wuZGV0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgZ2wuZGV0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG4gICAgICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRWZXJ0ZXhCdWZmZXJzKGdsKXtcclxuICAgICAgICAvL+mhtueCueaVsOaNrlxyXG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAwLjAsIDAuNSwgICAtMC4zLCAtMC4zLCAgIDAuMywgLTAuM1xyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL+WIm+W7uue8k+WGsuWMulxyXG4gICAgICAgIHZhciB2ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBpZiAoIXZlcnRleEJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNyZWF0ZSB0aGUgYnVmZmVyIG9iamVjdCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5HlrprnvJPlhrLljLogKOe8k+WGsuWMuuebruaghyznvJPlhrLljLrlr7nosaEpXHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgLy8g5YOP57yT5Yay5Yy65YaZ5YWl6aG254K55pWw5o2uXHJcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHZlcnRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAgIHZhciBhX1Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9nYW1tZSwgJ2FfUG9zaXRpb24nKTtcclxuICAgICAgICBpZiAoYV9Qb3NpdGlvbiA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBnZXQgdGhlIHN0b3JhZ2UgbG9jYXRpb24gb2YgYV9Qb3NpdGlvbicpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWwhue8k+WGsuWMuuaVsOaNruWIhumFjeWIsOmhtueCueedgOiJsuWZqFxyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYV9Qb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g5byA5ZCv5Lyg5YWl55qE57yT5Yay5Yy65pWw5o2u55qEYXR0cmlidXRl5Y+Y6YePXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYV9Qb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoZ2wpe1xyXG4gICAgICAgIHZhciB1X0ZyYWdDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dhbW1lLFwidV9GcmFnQ29sb3JcIik7XHJcbiAgICAgICAgaWYodV9GcmFnQ29sb3Ipey8vcmdiKDI0MSwgMTk2LCAxNSlcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTRmKHVfRnJhZ0NvbG9yLDI0MS8yNTUsIDE5Ni8yNTUsIDE1LzI1NSwgMS4wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcclxuXHJcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uKys7XHJcbiAgICAgICAgdmFyIHJhZGlhbiA9IHRoaXMucm90YXRpb24qdGhpcy5DT05TVEFOVFMuREVHX1RPX1JBRDtcclxuICAgICAgICB2YXIgY29zQiA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgdmFyIHNpbkIgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG5cclxuICAgICAgICB2YXIgeGZvcm1NYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgY29zQiAsIHNpbkIgLCAwICwgMCxcclxuICAgICAgICAgICAgLXNpbkIsIGNvc0IgLCAwICwgMCxcclxuICAgICAgICAgICAgMCAsIDAgLCAxICwgMCxcclxuICAgICAgICAgICAgMCAsIDAgLCAwICwgMVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB2YXIgdV94Zm9ybU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dhbW1lLFwidV94Zm9ybU1hdHJpeFwiKTtcclxuICAgICAgICBpZiAoIXVfeGZvcm1NYXRyaXgpIHtcclxuICAgICAgICAgICAgZXJyb3IoJ0ZhaWxlZCB0byBnZXQgdGhlIHN0b3JhZ2UgbG9jYXRpb24gb2YgdV94Zm9ybU1hdHJpeCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV94Zm9ybU1hdHJpeCxmYWxzZSx4Zm9ybU1hdHJpeCk7XHJcblxyXG4gICAgICAgIHZhciB1X1RyYW5zbGF0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ2FtbWUsXCJ1X1RyYW5zbGF0aW9uXCIpO1xyXG4gICAgICAgIGlmKCF1X1RyYW5zbGF0aW9uKXtcclxuICAgICAgICAgICAgZXJyb3IoJ0ZhaWxlZCB0byBnZXQgdGhlIHN0b3JhZ2UgbG9jYXRpb24gb2YgdV9UcmFuc2xhdGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wudW5pZm9ybTRmKHVfVHJhbnNsYXRpb24sMC4wLDAuMCwtMC42LDEuMCk7XHJcblxyXG4gICAgICAgIC8v5qih5byP77yM6LW35aeL57Si5byV5YC877yM57uY5Yi25pWw6YePXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMudmVydGljZXMubGVuZ3RoLzIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb25EZXN0cnVjdCgpe1xyXG4gICAgLy8gICAgdmFyIGdsID0gdGhpcy5nbDtcclxuICAgIC8vICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLnNoYWRlcnNEaWN0W1widmVydGV4XCJdO1xyXG4gICAgLy8gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gdGhpcy5zaGFkZXJzRGljdFtcImZyYWdtZW50XCJdO1xyXG4gICAgLy8gICAgZ2wuZGV0YWNoU2hhZGVyKHZlcnRleFNoYWRlcik7XHJcbiAgICAvLyAgICBnbC5kZXRhY2hTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgLy99XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2FtcGxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjctQnVmZmVyLVNoYXBlL0VudHJ5LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==