/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/worker.js ***!
  \**************************/
let pause = false; //flag for pause
let pauseTime = null; //time passed till pause
let timeToCount = null; //initial time to count

/**
 * function detect to end timer, pause or count time.
 * @param {*} t - time to count left
 * @returns 
 */
const checkTime = t => {
  if (pause) {
    //if pause
    pause = false; //timer was paused. Restore pause to false
    pauseTime = t; //save current time as pause time
    return;
  }
  if (t === 0) {
    //timer stops

    pauseTime = null; //clear pause time
    self.postMessage("end"); //worker posts "end" to the main thread
    return;
  }
  self.postMessage(
  //worker posts message "move" with current t to the main thread
  {
    action: "move",
    time: t
  });
  setTimeout(() => {
    checkTime(--t);
  }, 1000); //start checkTime over 1 second
};

self.addEventListener('message', function (e) {
  //add event listener to the events that come from the main thread

  if (e.data.action === "start") {
    timeToCount = e.data.timeToCount;
    checkTime(pauseTime !== null ? pauseTime : timeToCount); //if timer was paused resume from pauseTime.  otherwise start from timeToCount
  } else if (e.data.action === "stop") pause = true; //if event data is stop set pause to true
});
/******/ })()
;