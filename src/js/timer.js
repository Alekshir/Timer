import { diagramMoveFunc, clearStyles} from './spiner';
//import { clearStyles } from './spiner'
import timerCSS from '../css/timer.css';
import audioFile from '../audio/alarm.mp3';

let pause = false; //pause timer when button stop cliked
let pauseTime = null; //time left to count button stop clicked


let timeToCount = 0; //time to count we set.
let timeLeftEl = document.getElementsByClassName(timerCSS.timeLeft)[0];//html element, to show time count
let modifyer=null; //coefficient 1second/360deg
let diagramMove=null; //function return another function for diagram rotation.
let audio = new Audio();
audio.src = audioFile;

let btnStart = document.getElementsByClassName(timerCSS.start)[0]; //start button
let btnPause = document.getElementsByClassName(timerCSS.stop)[0]; //stop button
console.log("btn start");
console.log(btnStart);
btnPause.disabled = true; //disable pause button

let worker = new Worker('worker.js');//create worker


const startTimer = () => {//function to start timer
    timeToCount = Number(document.getElementById('timeInput').value);//input element to enter, show and count time
    modifyer = 360 / timeToCount; //calculate modifier
    diagramMove = diagramMoveFunc(modifyer); //create function
    btnStart.disabled = true;
    btnPause.disabled = false;
    //timeToCount = Number(document.getElementById('timeInput').value);
    worker.postMessage(//worker postes message to the worker thread to start the timer
        {
            action: "start",
            timeToCount,
        }
    );
}

const stopTimer = () => {//function to stop timer (attached to the stop button)
    btnStart.disabled = false;//disable button start
    btnPause.disabled = true; //enable button stop
    worker.postMessage({ action: "stop" }); //worker postes message to the worker thread to stop the timer.
};

worker.addEventListener('message',  (e)=> {//attach event listener to the events workers thread fires.
    if (e.data.action === "move") {//if move
        console.log(diagramMove);
        diagramMove();//rotate diagram
        timeLeftEl.innerText = '' + e.data.time;//set inner text of the time left input to the time left value.
    } else {//othewise
        timeLeftEl.innerText = '' + 0; //set inner text of the time left input to zero.
        btnStart.disabled = false; //enable button start
        btnPause.disabled = true; //desable button stop
        clearStyles();//clear style attributes of the firstEl, secondEl, thirdEl html elements.
        audio.play();
    }

});

btnStart.addEventListener('click', startTimer); //on button start click start timer
btnPause.addEventListener('click', stopTimer); //on button stop click stop timer

export default startTimer;