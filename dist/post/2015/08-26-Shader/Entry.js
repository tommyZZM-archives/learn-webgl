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
	        key: "launch",
	        value: function launch(canvas) {
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
	    }]);
	
	    return Sample;
	})(app.SampleField);
	
	module.exports = Sample;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTQ5NjFmYzA0MTkzYzA3MzdiZGEiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDgtMjYtU2hhZGVyL0VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NsQ00sTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ0YsZ0JBQUMsTUFBTSxFQUFDOzs7QUFDVixpQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGlCQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxPQUFPOztBQUV2QixpQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM3QyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQy9DLGlCQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFD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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhNDk2MWZjMDQxOTNjMDczN2JkYVxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yNi5cclxuICovXHJcblxyXG5jbGFzcyBTYW1wbGUgZXh0ZW5kcyBhcHAuU2FtcGxlRmllbGR7XHJcbiAgICBsYXVuY2goY2FudmFzKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5xdWVyeVswXTtcclxuICAgICAgICBpZighdGhpcy5jYW52YXMpcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG4gICAgICAgIHRoaXMuZ2xbXCJ2aWV3cG9ydFdpZHRoXCJdID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5nbFtcInZpZXdwb3J0SGVpZ2h0XCJdID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwwLHRoaXMuY2FudmFzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFNoYWRlcnModGhpcy5nbCwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm9uU2hhZGVyc0xvYWQodGhpcy5nbCk7XHJcbiAgICAgICAgfSxbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDp0aGlzLnNyY1BhdGgoXCJnbHNsL3ZlcnRleC5nbHNsXCIpLC8vXHJcbiAgICAgICAgICAgICAgICBuYW1lOlwidmVydGV4XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOnRoaXMuQ09OU1RBTlRTLlZcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICB1cmw6dGhpcy5zcmNQYXRoKFwiZ2xzbC9mcmFnbWVudC5nbHNsXCIpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcImZyYWdtZW50XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOnRoaXMuQ09OU1RBTlRTLkZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhZGVyc0xvYWQoZ2wpe1xyXG4gICAgICAgIHRoaXMucHJvZ2FtbWUgPSB0aGlzLmluaXRTaGFkZXIoZ2wpO1xyXG4gICAgICAgIC8v57yT5Yay5Yy6XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHRoaXMuaW5pdFZlcnRleEJ1ZmZlcnMoZ2wpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICBhcHAuQW5pbWF0aW9uTWFuYWdlci5vbkxvb3AoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoZ2wpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFwcC5BbmltYXRpb25NYW5hZ2VyLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTaGFkZXIoZ2wpe1xyXG4gICAgICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLnNoYWRlcnNEaWN0W1widmVydGV4XCJdO1xyXG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IHRoaXMuc2hhZGVyc0RpY3RbXCJmcmFnbWVudFwiXTtcclxuXHJcbiAgICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7IC8v5byV5YWl6aG254K5552A6Imy5ZmoXHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTsvL+W8leWFpeeJh+WFg+edgOiJsuWZqFxyXG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pOy8v5Yid5aeL5YyWU2hhZGVy56iL5bqPXHJcbiAgICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBlcnJvcihcIkNvdWxkIG5vdCBpbml0aWFsaXNlIHNoYWRlcnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuICAgICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VmVydGV4QnVmZmVycyhnbCl7XHJcbiAgICAgICAgLy/pobbngrnmlbDmja5cclxuICAgICAgICB2YXIgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMC4wLCAwLjUsICAgLTAuMywgLTAuMywgICAwLjMsIC0wLjNcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy/liJvlu7rnvJPlhrLljLpcclxuICAgICAgICB2YXIgdmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgaWYgKCF2ZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgdGhlIGJ1ZmZlciBvYmplY3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57uR5a6a57yT5Yay5Yy6ICjnvJPlhrLljLrnm67moIcs57yT5Yay5Yy65a+56LGhKVxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgIC8vIOWDj+e8k+WGsuWMuuWGmeWFpemhtueCueaVsOaNrlxyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0aWNlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICB2YXIgYV9Qb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ2FtbWUsICdhX1Bvc2l0aW9uJyk7XHJcbiAgICAgICAgaWYgKGFfUG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIGFfUG9zaXRpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlsIbnvJPlhrLljLrmlbDmja7liIbphY3liLDpobbngrnnnYDoibLlmahcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfUG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIOW8gOWQr+S8oOWFpeeahOe8k+WGsuWMuuaVsOaNrueahGF0dHJpYnV0ZeWPmOmHj1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfUG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVydGljZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGdsKXtcclxuICAgICAgICB2YXIgdV9GcmFnQ29sb3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9nYW1tZSxcInVfRnJhZ0NvbG9yXCIpO1xyXG4gICAgICAgIGlmKHVfRnJhZ0NvbG9yKXsvL3JnYigyNDEsIDE5NiwgMTUpXHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm00Zih1X0ZyYWdDb2xvciwyNDEvMjU1LCAxOTYvMjU1LCAxNS8yNTUsIDEuMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcblxyXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbisrO1xyXG4gICAgICAgIHZhciByYWRpYW4gPSB0aGlzLnJvdGF0aW9uKnRoaXMuQ09OU1RBTlRTLkRFR19UT19SQUQ7XHJcbiAgICAgICAgdmFyIGNvc0IgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzaW5CID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuXHJcbiAgICAgICAgdmFyIHhmb3JtTWF0cml4ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIGNvc0IgLCBzaW5CICwgMCAsIDAsXHJcbiAgICAgICAgICAgIC1zaW5CLCBjb3NCICwgMCAsIDAsXHJcbiAgICAgICAgICAgIDAgLCAwICwgMSAsIDAsXHJcbiAgICAgICAgICAgIDAgLCAwICwgMCAsIDFcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdmFyIHVfeGZvcm1NYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9nYW1tZSxcInVfeGZvcm1NYXRyaXhcIik7XHJcbiAgICAgICAgaWYgKCF1X3hmb3JtTWF0cml4KSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdGYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIHVfeGZvcm1NYXRyaXgnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfeGZvcm1NYXRyaXgsZmFsc2UseGZvcm1NYXRyaXgpO1xyXG5cclxuICAgICAgICB2YXIgdV9UcmFuc2xhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dhbW1lLFwidV9UcmFuc2xhdGlvblwiKTtcclxuICAgICAgICBpZighdV9UcmFuc2xhdGlvbil7XHJcbiAgICAgICAgICAgIGVycm9yKCdGYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIHVfVHJhbnNsYXRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsLnVuaWZvcm00Zih1X1RyYW5zbGF0aW9uLDAuMCwwLjAsLTAuNiwxLjApO1xyXG5cclxuICAgICAgICAvL+aooeW8j++8jOi1t+Wni+e0ouW8leWAvO+8jOe7mOWItuaVsOmHj1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCB0aGlzLnZlcnRpY2VzLmxlbmd0aC8yKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTYW1wbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFRlc3Qvc3JjLXBvc3QvMjAxNS8wOC0yNi1TaGFkZXIvRW50cnkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9