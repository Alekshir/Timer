let worker = new Worker('worker.js');
let a=new Audio("./audio/alarm.mp3")
worker.postMessage("start");
worker.addEventListener('message', function(e) {
    console.log(e.data);
  });