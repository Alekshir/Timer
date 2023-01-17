`at first self-executing function with argument as object with properties
"./src/index.js": function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");
    
    
    /***/ },

    inside this self-extracting function we have function __webpack_require__(moduleId) {}
    moduleId - this is the property name in the argument object. For example "./src/index.js"

    self-extracting function return  __webpack_require__(__webpack_require__.s = "./src/index.js");
    in other words we call __webpack_require__ function with entry point of webpack as argument.
`
// __webpack_require__ function
function __webpack_require__(moduleId) { //moduleId is property of argument object we pass to self-extractive function
    //for example "./src/index.js"
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

    //module function with argument "./src/index.js"

    function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__); // define __esModule on exports
        //call __webpack_require__ function with "./src/js/timer.js" argument
        /* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");
        
        
        /***/ }
        // __webpack_require__.r function with definition inside self-extracting function
        // define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
        

//module function with argument "./src/js/timer.js"
function(module, __webpack_exports__, __webpack_require__) {

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
      }




      //i can see how import used but i do not understand how export used(__webpack-require__.d)
      //all import and export with the help __webpack-require__
      //Explanation-Algorithm
      //when we import module we call __webpack_require__('pathToModule') It returns module exports as {} with properties
      //before it return module.exports with the help og __webpack_require__.d it sets properties wich module we call exports.


      //when we export as default export we use 
      //__webpack_require__.r(__webpack_exports__);
      //* harmony default export */ __webpack_exports__["default"] = (startTimer);

      //when we export as named export we use
      ///* harmony export (binding) */
      //__webpack_require__.r(__webpack_exports__);
      // __webpack_require__.d(__webpack_exports__, "diagramMoveFunc", function() { return diagramMoveFunc; });
/* harmony export (binding) */ 
//__webpack_require__.d(__webpack_exports__, "clearStyles", function() { return clearStyles; });

//there are not harmony export 
// module.exports = {"time-left":"css-timer__time-left--2pD8C"};
//module.exports = __webpack_require__.p + "audio/alarm.mp3";



//when we import named or default export 
/* harmony import */ //var _js_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");

//when we import pure file
/* harmony import */ //var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/spiner.css */ "./src/css/spiner.css");
/* harmony import */ //var _css_spiner_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_spiner_css__WEBPACK_IMPORTED_MODULE_0__);

/* harmony import */ //var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/alarm.mp3 */ "./src/audio/alarm.mp3");
/* harmony import */ //var _audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_audio_alarm_mp3__WEBPACK_IMPORTED_MODULE_2__);