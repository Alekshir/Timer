/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/spiner.js":
/*!**************************!*\
  !*** ./src/js/spiner.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearStyles": () => (/* binding */ clearStyles),
/* harmony export */   "diagramMoveFunc": () => (/* binding */ diagramMoveFunc)
/* harmony export */ });
/* harmony import */ var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/spiner.css */ "./src/css/spiner.css");

let firstEl = document.getElementsByClassName('first')[0]; //red semicircle
let secondEl = document.getElementsByClassName('second')[0]; //red semicircle
let thirdEl = document.getElementsByClassName('third')[0]; //blue semicircle
let i = 0; //counter of seconds passed
let half = false; //is rotation more then 180 degrees or not.

/**
 * factory function returns fuction which take argument modifier and return function for diagram rotation
 * @param {*} firstEl -red semicircle
 * @param {*} secondEl -red semicircle
 * @param {*} thirdEl -blue semicircle
 * @returns fuction which take argument modifier and return function for diagram rotation
 */
const diagramMoveFactory = (firstEl, secondEl, thirdEl) => {
  return modifyer => {
    return () => {
      let rotateSize = i++ * modifyer; //rotation in degrees according to the passed time

      if (rotateSize > 180 && !half) {
        //if rotation between 180 and 360 degrees

        firstEl.style.background = 'blue';
        thirdEl.style.zIndex = 4; //put the third element at the top
        half = true;
      }
      secondEl.style.transform = "rotate(".concat(rotateSize, "deg)"); //rotate seond semicircle
    };
  };
};

const diagramMoveFunc = diagramMoveFactory(firstEl, secondEl, thirdEl); //reate function

const clearStyles = () => {
  //clears styles of the elements and sets i and half to the initial values 
  firstEl.style = '';
  secondEl.style = '';
  thirdEl.style = '';
  i = 0;
  half = false;
};


/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _spiner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spiner */ "./src/js/spiner.js");
/* harmony import */ var _css_timer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/timer.css */ "./src/css/timer.css");
/* harmony import */ var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/alarm.mp3 */ "./src/audio/alarm.mp3");

//import { clearStyles } from './spiner'


let pause = false; //pause timer when button stop cliked
let pauseTime = null; //time left to count button stop clicked

let timeToCount = 0; //time to count we set.
let timeLeftEl = document.getElementsByClassName('time-left')[0]; //html element, to show time count
let modifyer = null; //coefficient 1second/360deg
let diagramMove = null; //function return another function for diagram rotation.
let audio = new Audio();
audio.src = _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__["default"];
let btnStart = document.getElementsByClassName('start')[0]; //start button
let btnPause = document.getElementsByClassName('pause')[0]; //stop button
btnPause.disabled = true; //disable pause button

let worker = new Worker('worker.js'); //create worker

const startTimer = () => {
  //function to start timer
  timeToCount = Number(document.getElementById('timeInput').value); //input element to enter, show and count time
  modifyer = 360 / timeToCount; //calculate modifier
  diagramMove = (0,_spiner__WEBPACK_IMPORTED_MODULE_0__.diagramMoveFunc)(modifyer); //create function
  btnStart.disabled = true;
  btnPause.disabled = false;
  //timeToCount = Number(document.getElementById('timeInput').value);
  worker.postMessage(
  //worker postes message to the worker thread to start the timer
  {
    action: "start",
    timeToCount
  });
};
const stopTimer = () => {
  //function to stop timer (attached to the stop button)
  btnStart.disabled = false; //disable button start
  btnPause.disabled = true; //enable button stop
  worker.postMessage({
    action: "stop"
  }); //worker postes message to the worker thread to stop the timer.
};

worker.addEventListener('message', e => {
  //attach event listener to the events workers thread fires.
  if (e.data.action === "move") {
    //if move
    console.log(diagramMove);
    diagramMove(); //rotate diagram
    timeLeftEl.innerText = '' + e.data.time; //set inner text of the time left input to the time left value.
  } else {
    //othewise
    timeLeftEl.innerText = '' + 0; //set inner text of the time left input to zero.
    btnStart.disabled = false; //enable button start
    btnPause.disabled = true; //desable button stop
    (0,_spiner__WEBPACK_IMPORTED_MODULE_0__.clearStyles)(); //clear style attributes of the firstEl, secondEl, thirdEl html elements.
    audio.play();
  }
});
btnStart.addEventListener('click', startTimer); //on button start click start timer
btnPause.addEventListener('click', stopTimer); //on button stop click stop timer

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startTimer);

/***/ }),

/***/ "./src/audio/alarm.mp3":
/*!*****************************!*\
  !*** ./src/audio/alarm.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/alarm.mp3");

/***/ }),

/***/ "./src/css/spiner.css":
/*!****************************!*\
  !*** ./src/css/spiner.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"css-spiner__container--it1Tu","third":"css-spiner__third--OU41C","first":"css-spiner__first--j7DES","second":"css-spiner__second--sx3xt"});

/***/ }),

/***/ "./src/css/timer.css":
/*!***************************!*\
  !*** ./src/css/timer.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"time-left":"css-timer__time-left--hz_Ce"});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");

console.log(_js_timer__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;