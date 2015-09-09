//version:1fe54e

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
	        key: "onLaunch",
	        value: function onLaunch(canvas) {
	            this.canvas = canvas.query[0];
	            if (!this.canvas) return;
	
	            this.gl = this.canvas.getContext("webgl");
	            this.gl["viewportWidth"] = this.canvas.width;
	            this.gl["viewportHeight"] = this.canvas.height;
	            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
	        }
	    }, {
	        key: "onShadersLoad",
	        value: function onShadersLoad(gl) {}
	    }, {
	        key: "initShader",
	        value: function initShader(gl) {}
	    }, {
	        key: "initVertexBuffers",
	        value: function initVertexBuffers(gl) {}
	    }, {
	        key: "render",
	        value: function render(gl) {}
	    }]);
	
	    return Sample;
	})(app.SampleField);
	
	module.exports = Sample;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzQzYThiZTk5ZWNiZTAwZTU1ODAiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xUZXN0L3NyYy1wb3N0LzIwMTUvMDktMDktTGluZWFyQWxnZWJyYS9FbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbENNLE1BQU07ZUFBTixNQUFNOztjQUFOLE1BQU07K0JBQU4sTUFBTTs7b0NBQU4sTUFBTTs7O2tCQUFOLE1BQU07O2dCQUNBLGtCQUFDLE1BQU0sRUFBQztBQUNaLGlCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsaUJBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLE9BQU87O0FBRXZCLGlCQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLGlCQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQzdDLGlCQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDL0MsaUJBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUM5RDs7O2dCQUVZLHVCQUFDLEVBQUUsRUFBQyxFQUVoQjs7O2dCQUVTLG9CQUFDLEVBQUUsRUFBQyxFQUViOzs7Z0JBRWdCLDJCQUFDLEVBQUUsRUFBQyxFQUVwQjs7O2dCQUVLLGdCQUFDLEVBQUUsRUFBQyxFQUVUOzs7WUF6QkMsTUFBTTtJQUFTLEdBQUcsQ0FBQyxXQUFXOztBQTRCcEMsT0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzQzYThiZTk5ZWNiZTAwZTU1ODBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTUuXHJcbiAqL1xyXG5cclxuY2xhc3MgU2FtcGxlIGV4dGVuZHMgYXBwLlNhbXBsZUZpZWxke1xyXG4gICAgb25MYXVuY2goY2FudmFzKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5xdWVyeVswXTtcclxuICAgICAgICBpZighdGhpcy5jYW52YXMpcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG4gICAgICAgIHRoaXMuZ2xbXCJ2aWV3cG9ydFdpZHRoXCJdID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5nbFtcInZpZXdwb3J0SGVpZ2h0XCJdID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwwLHRoaXMuY2FudmFzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFkZXJzTG9hZChnbCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRTaGFkZXIoZ2wpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0VmVydGV4QnVmZmVycyhnbCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihnbCl7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNhbXBsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMVGVzdC9zcmMtcG9zdC8yMDE1LzA5LTA5LUxpbmVhckFsZ2VicmEvRW50cnkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9