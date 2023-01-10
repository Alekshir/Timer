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

module.exports = __webpack_require__.p + "audio/alarm.mp3";

/***/ }),

/***/ "./src/css/spiner.css":
/*!****************************!*\
  !*** ./src/css/spiner.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"css-spiner__container--uWAT5","third":"css-spiner__third--y2c65","first":"css-spiner__first--Eqys7","second":"css-spiner__second--1oz7B"};

/***/ }),

/***/ "./src/css/timer.css":
/*!***************************!*\
  !*** ./src/css/timer.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"time-left":"css-timer__time-left--2pD8C"};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");


/***/ }),

/***/ "./src/js/spiner.js":
/*!**************************!*\
  !*** ./src/js/spiner.js ***!
  \**************************/
/*! exports provided: diagramMoveFunc, clearStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diagramMoveFunc", function() { return diagramMoveFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStyles", function() { return clearStyles; });
/* harmony import */ var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/spiner.css */ "./src/css/spiner.css");
/* harmony import */ var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_spiner_css__WEBPACK_IMPORTED_MODULE_0__);

let firstEl = document.getElementsByClassName('first')[0];
let secondEl = document.getElementsByClassName('second')[0];
let thirdEl = document.getElementsByClassName('third')[0];
let i = 0;
let half = false;
/*for(let i=1; i<=2; i++){
    let startTime=performance.now();
    let deltaTime=0;
    while(deltaTime<5000){
        console.log( `cycle${i}---perf${performance.now()} --- start ${startTime}`);
        deltaTime=performance.now()-startTime;
        console.log(secondEl.cloneNode());
    }
    secondEl.style.transform=`rotate(${i*50}deg)`;
    console.log(secondEl);
}*/

const diagramMoveFactory = (firstEl, secondEl, thirdEl) => {
  return modifyer => {
    console.log('i--' + i);
    return () => {
      let rotateSize = i++ * modifyer;
      console.log(i);
      console.log(rotateSize);
      /*rotateSize = ((rotateSize < 180.5) && (rotateSize > 179.5)) ? 180 : rotateSize;
      rotateSize = ((rotateSize < 360.5) && (rotateSize > 359.5)) ? 360 : rotateSize;*/

      if (rotateSize > 180 && !half) {
        firstEl.style.background = 'blue';
        thirdEl.style.zIndex = 4;
        half = true;
      }

      secondEl.style.transform = "rotate(".concat(rotateSize, "deg)");
    };
  };
};

const diagramMoveFunc = diagramMoveFactory(firstEl, secondEl, thirdEl);

const clearStyles = () => {
  firstEl.style = '';
  secondEl.style = '';
  thirdEl.style = '';
  i = 0;
  half = false;
}; //setInterval(diagramMove, 100);




/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spiner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spiner */ "./src/js/spiner.js");
/* harmony import */ var _css_timer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/timer.css */ "./src/css/timer.css");
/* harmony import */ var _css_timer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_timer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/alarm.mp3 */ "./src/audio/alarm.mp3");
/* harmony import */ var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__);




let pause = false;
let pauseTime = null;
let timeToCount = 0;
let timeLeftEl = document.getElementsByClassName('time-left')[0];
let modifyer;
let diagramMove;
let audio = new Audio();
audio.src = _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2___default.a;
let btnStart = document.getElementsByClassName('start')[0];
let btnPause = document.getElementsByClassName('pause')[0];
btnPause.disabled = true;
let worker = new Worker('worker.js');

const startTimer = () => {
  timeToCount = Number(document.getElementById('timeInput').value);
  modifyer = 360 / timeToCount;
  diagramMove = Object(_spiner__WEBPACK_IMPORTED_MODULE_0__["diagramMoveFunc"])(modifyer);
  btnStart.disabled = true;
  btnPause.disabled = false;
  timeToCount = Number(document.getElementById('timeInput').value);
  worker.postMessage({
    action: "start",
    timeToCount
  });
};

const stopTimer = () => {
  btnStart.disabled = false;
  btnPause.disabled = true;
  worker.postMessage({
    action: "stop"
  });
};

worker.addEventListener('message', function (e) {
  if (e.data.action === "move") {
    console.log(diagramMove);
    diagramMove();
    timeLeftEl.innerText = '' + e.data.time;
  } else {
    timeLeftEl.innerText = '' + 0;
    btnStart.disabled = false;
    btnPause.disabled = true;
    Object(_spiner__WEBPACK_IMPORTED_MODULE_0__["clearStyles"])();
    audio.play();
  }
});
/*const checkTime = (t) => {

    if (pause) {
        pause = false;
        pauseTime = t;
        return;
    }

    timeLeftEl.innerText = '' + t;
    console.log(t);

    if (t === 0) {

        clearStyles();
        pauseTime = null;
        audio.play();
        return;
    }

    diagramMove();

    setTimeout(() => { checkTime(--t) }, 1000)
}*/
//checkTime(pauseTime ? pauseTime : timeToCount);

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', stopTimer);
/* harmony default export */ __webpack_exports__["default"] = (startTimer);

/***/ })

/******/ });