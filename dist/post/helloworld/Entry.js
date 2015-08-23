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
	 * Created by tommyZZM on 2015/8/15.
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
	
	            //console.log("hello",canvas);
	            this.canvas = canvas.query[0];
	
	            var gl = this.canvas.getContext("webgl");
	            gl["viewportWidth"] = this.canvas.width;
	            gl["viewportHeight"] = this.canvas.height;
	            gl.viewport(0, 0, this.canvas.width, this.canvas.height);
	            this.gl = gl;
	
	            this.loadShaders(this.gl, function () {
	                _this.onShadersLoad(_this.gl);
	            }, [{
	                url: this.srcPath("glsl/vertex.glsl"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGE1MDViNzZmOTkyNTU0YzdmMzYiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy1wb3N0L2hlbGxvd29ybGQvRW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ2xDTSxNQUFNO2VBQU4sTUFBTTs7Y0FBTixNQUFNOytCQUFOLE1BQU07O29DQUFOLE1BQU07OztrQkFBTixNQUFNOztnQkFDRixnQkFBQyxNQUFNLEVBQUM7Ozs7QUFFVixpQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUU5QixpQkFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3hDLGVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELGlCQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7QUFFYixpQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFB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RUFBRSxJQUFJLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFDbkIsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUNiLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsQ0FDaEIsQ0FBQyxDQUFDOztBQUVILGlCQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxlQUFlLENBQUMsQ0FBQztBQUN6RSxpQkFBSSxDQUFDLGFBQWEsRUFBRTtBQUNoQixzQkFBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7QUFDN0Qsd0JBQU87Y0FDVjtBQUNELGVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVyRCxpQkFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFDekUsaUJBQUcsQ0FBQyxhQUFhLEVBQUM7QUFDZCxzQkFBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDM0Qsd0JBQU87Y0FDVjs7QUFFRCxlQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDOzs7QUFHN0MsZUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztVQUMxRDs7O1lBN0hDLE1BQU07SUFBUyxHQUFHLENBQUMsV0FBVzs7QUFnSXBDLE9BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhhNTA1Yjc2Zjk5MjU1NGM3ZjM2XG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE1LlxyXG4gKi9cclxuXHJcbmNsYXNzIFNhbXBsZSBleHRlbmRzIGFwcC5TYW1wbGVGaWVsZHtcclxuICAgIGxhdW5jaChjYW52YXMpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJoZWxsb1wiLGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMucXVlcnlbMF07XHJcblxyXG4gICAgICAgIHZhciBnbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuICAgICAgICBnbFtcInZpZXdwb3J0V2lkdGhcIl0gPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICBnbFtcInZpZXdwb3J0SGVpZ2h0XCJdID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIGdsLnZpZXdwb3J0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkU2hhZGVycyh0aGlzLmdsLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMub25TaGFkZXJzTG9hZCh0aGlzLmdsKTtcclxuICAgICAgICB9LFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOnRoaXMuc3JjUGF0aChcImdsc2wvdmVydGV4Lmdsc2xcIiksXHJcbiAgICAgICAgICAgICAgICBuYW1lOlwidmVydGV4XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOnRoaXMuQ09OU1RBTlRTLlZcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICB1cmw6dGhpcy5zcmNQYXRoKFwiZ2xzbC9mcmFnbWVudC5nbHNsXCIpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcImZyYWdtZW50XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOnRoaXMuQ09OU1RBTlRTLkZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhZGVyc0xvYWQoZ2wpe1xyXG4gICAgICAgIHRoaXMucHJvZ2FtbWUgPSB0aGlzLmluaXRTaGFkZXIoZ2wpO1xyXG4gICAgICAgIC8v57yT5Yay5Yy6XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHRoaXMuaW5pdFZlcnRleEJ1ZmZlcnMoZ2wpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICBhcHAuQW5pbWF0aW9uTWFuYWdlci5vbkxvb3AoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoZ2wpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTaGFkZXIoZ2wpe1xyXG4gICAgICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLnNoYWRlcnNEaWN0W1widmVydGV4XCJdO1xyXG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IHRoaXMuc2hhZGVyc0RpY3RbXCJmcmFnbWVudFwiXTtcclxuXHJcbiAgICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7IC8v5byV5YWl6aG254K5552A6Imy5ZmoXHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTsvL+W8leWFpeeJh+WFg+edgOiJsuWZqFxyXG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pOy8v5Yid5aeL5YyWU2hhZGVy56iL5bqPXHJcbiAgICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBlcnJvcihcIkNvdWxkIG5vdCBpbml0aWFsaXNlIHNoYWRlcnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuICAgICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VmVydGV4QnVmZmVycyhnbCl7XHJcbiAgICAgICAgLy/pobbngrnmlbDmja5cclxuICAgICAgICB2YXIgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMC4wLCAwLjUsICAgLTAuMywgLTAuMywgICAwLjMsIC0wLjNcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy/liJvlu7rnvJPlhrLljLpcclxuICAgICAgICB2YXIgdmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgaWYgKCF2ZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgdGhlIGJ1ZmZlciBvYmplY3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57uR5a6a57yT5Yay5Yy6ICjnvJPlhrLljLrnm67moIcs57yT5Yay5Yy65a+56LGhKVxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgIC8vIOWDj+e8k+WGsuWMuuWGmeWFpemhtueCueaVsOaNrlxyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0aWNlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICB2YXIgYV9Qb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ2FtbWUsICdhX1Bvc2l0aW9uJyk7XHJcbiAgICAgICAgaWYgKGFfUG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIGFfUG9zaXRpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlsIbnvJPlhrLljLrmlbDmja7liIbphY3liLDpobbngrnnnYDoibLlmahcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfUG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIOW8gOWQr+S8oOWFpeeahOe8k+WGsuWMuuaVsOaNrueahGF0dHJpYnV0ZeWPmOmHj1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfUG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVydGljZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGdsKXtcclxuICAgICAgICB2YXIgdV9GcmFnQ29sb3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9nYW1tZSxcInVfRnJhZ0NvbG9yXCIpO1xyXG4gICAgICAgIGlmKHVfRnJhZ0NvbG9yKXsvL3JnYigyNDEsIDE5NiwgMTUpXHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm00Zih1X0ZyYWdDb2xvciwyNDEvMjU1LCAxOTYvMjU1LCAxNS8yNTUsIDEuMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcblxyXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbisrO1xyXG4gICAgICAgIHZhciByYWRpYW4gPSB0aGlzLnJvdGF0aW9uKnRoaXMuQ09OU1RBTlRTLkRFR19UT19SQUQ7XHJcbiAgICAgICAgdmFyIGNvc0IgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzaW5CID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuXHJcbiAgICAgICAgdmFyIHhmb3JtTWF0cml4ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIGNvc0IgLCBzaW5CICwgMCAsIDAsXHJcbiAgICAgICAgICAgIC1zaW5CLCBjb3NCICwgMCAsIDAsXHJcbiAgICAgICAgICAgIDAgLCAwICwgMSAsIDAsXHJcbiAgICAgICAgICAgIDAgLCAwICwgMCAsIDFcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdmFyIHVfeGZvcm1NYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9nYW1tZSxcInVfeGZvcm1NYXRyaXhcIik7XHJcbiAgICAgICAgaWYgKCF1X3hmb3JtTWF0cml4KSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdGYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIHVfeGZvcm1NYXRyaXgnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfeGZvcm1NYXRyaXgsZmFsc2UseGZvcm1NYXRyaXgpO1xyXG5cclxuICAgICAgICB2YXIgdV9UcmFuc2xhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dhbW1lLFwidV9UcmFuc2xhdGlvblwiKTtcclxuICAgICAgICBpZighdV9UcmFuc2xhdGlvbil7XHJcbiAgICAgICAgICAgIGVycm9yKCdGYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIHVfVHJhbnNsYXRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsLnVuaWZvcm00Zih1X1RyYW5zbGF0aW9uLDAuMCwwLjAsLTAuNiwxLjApO1xyXG5cclxuICAgICAgICAvL+aooeW8j++8jOi1t+Wni+e0ouW8leWAvO+8jOe7mOWItuaVsOmHj1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCB0aGlzLnZlcnRpY2VzLmxlbmd0aC8yKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTYW1wbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjLXBvc3QvaGVsbG93b3JsZC9FbnRyeS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=