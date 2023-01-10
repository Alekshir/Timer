/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio/alarm.mp3":
/*!*****************************!*\
  !*** ./src/audio/alarm.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"audio/fb411e618a4cece578a291ed968210d4.mp3\";\n\n//# sourceURL=webpack:///./src/audio/alarm.mp3?");

/***/ }),

/***/ "./src/css/spiner.css":
/*!****************************!*\
  !*** ./src/css/spiner.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/spiner.css?");

/***/ }),

/***/ "./src/css/timer.css":
/*!***************************!*\
  !*** ./src/css/timer.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/timer.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer */ \"./src/js/timer.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/spiner.js":
/*!**************************!*\
  !*** ./src/js/spiner.js ***!
  \**************************/
/*! exports provided: diagramMoveFunc, clearStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diagramMoveFunc\", function() { return diagramMoveFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStyles\", function() { return clearStyles; });\n/* harmony import */ var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/spiner.css */ \"./src/css/spiner.css\");\n/* harmony import */ var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_spiner_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet firstEl = document.getElementsByClassName('first')[0];\r\nlet secondEl = document.getElementsByClassName('second')[0];\r\nlet thirdEl = document.getElementsByClassName('third')[0];\r\nlet i = 0;\r\nlet half=false;\r\n\r\n/*for(let i=1; i<=2; i++){\r\n    let startTime=performance.now();\r\n    let deltaTime=0;\r\n    while(deltaTime<5000){\r\n        console.log( `cycle${i}---perf${performance.now()} --- start ${startTime}`);\r\n        deltaTime=performance.now()-startTime;\r\n        console.log(secondEl.cloneNode());\r\n    }\r\n    secondEl.style.transform=`rotate(${i*50}deg)`;\r\n    console.log(secondEl);\r\n}*/\r\n\r\nconst diagramMoveFactory = (firstEl, secondEl, thirdEl) => {\r\n    \r\n\r\n    return (modifyer) => {\r\n\r\n        console.log('i--'+i);\r\n        return () => {\r\n            let rotateSize = (i++) * modifyer;\r\n            console.log(i);\r\n            console.log(rotateSize);\r\n        \r\n            /*rotateSize = ((rotateSize < 180.5) && (rotateSize > 179.5)) ? 180 : rotateSize;\r\n            rotateSize = ((rotateSize < 360.5) && (rotateSize > 359.5)) ? 360 : rotateSize;*/\r\n\r\n            if (rotateSize > 180&&!half) {\r\n\r\n                firstEl.style.background = 'blue';\r\n                thirdEl.style.zIndex = 4;\r\n                half=true;\r\n            }\r\n\r\n            secondEl.style.transform = `rotate(${rotateSize}deg)`;\r\n        }\r\n\r\n    }\r\n\r\n}\r\nconst diagramMoveFunc = diagramMoveFactory(firstEl, secondEl, thirdEl)\r\nconst clearStyles=()=>{\r\n    firstEl.style='';\r\n    secondEl.style='';\r\n    thirdEl.style='';\r\n    i=0;\r\n    half=false;\r\n}\r\n\r\n//setInterval(diagramMove, 100);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/spiner.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spiner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spiner */ \"./src/js/spiner.js\");\n/* harmony import */ var _css_timer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/timer.css */ \"./src/css/timer.css\");\n/* harmony import */ var _css_timer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_timer_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/alarm.mp3 */ \"./src/audio/alarm.mp3\");\n/* harmony import */ var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nlet pause = false;\r\nlet pauseTime = null;\r\n\r\nconst startTimer = () => {\r\n    let timeToCount = Number(document.getElementById('timeInput').value);\r\n    let timeLeftEl = document.getElementsByClassName('time-left')[0];\r\n    let modifyer = 360 / timeToCount;\r\n    let diagramMove = Object(_spiner__WEBPACK_IMPORTED_MODULE_0__[\"diagramMoveFunc\"])(modifyer);\r\n    let audio = new Audio();\r\n    audio.src = _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2___default.a;\r\n\r\n    const checkTime = (t) => {\r\n\r\n        if (pause) {\r\n            pause = false;\r\n            pauseTime = t;\r\n            return;\r\n        }\r\n\r\n        timeLeftEl.innerText = '' + t;\r\n        console.log(t);\r\n\r\n        if (t === 0) {\r\n\r\n            Object(_spiner__WEBPACK_IMPORTED_MODULE_0__[\"clearStyles\"])();\r\n            pauseTime = null;\r\n            audio.play();\r\n            return;\r\n        }\r\n\r\n        diagramMove();\r\n\r\n        setTimeout(() => { checkTime(--t) }, 1000)\r\n    }\r\n    checkTime(pauseTime ? pauseTime : timeToCount);\r\n}\r\n\r\nlet btnStart = document.getElementsByClassName('start')[0];\r\nlet btnPause = document.getElementsByClassName('pause')[0];\r\nbtnStart.addEventListener('click', startTimer);\r\nbtnPause.addEventListener('click', () => pause = true);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (startTimer);\n\n//# sourceURL=webpack:///./src/js/timer.js?");

/***/ })

/******/ });