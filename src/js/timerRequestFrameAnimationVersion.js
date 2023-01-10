import { diagramMoveFunc } from './spiner';
import { clearStyles } from './spiner'
import '../css/timer.css';
import audioFile from '../audio/alarm.mp3';

let btnStart = document.getElementsByClassName('start')[0];
let btnPause = document.getElementsByClassName('pause')[0];

let pause = false;
let pauseTime = null;

//disable need to do.
//

const startTimer = () => {
    btnStart.disabled=true;
    let timeToCount = Number(document.getElementById('timeInput').value);
    let timeLeftEl = document.getElementsByClassName('time-left')[0];
    let modifyer = 360 / timeToCount;
    let diagramMove = diagramMoveFunc(modifyer);
    let audio = new Audio();
    audio.src = audioFile;

    let prevTime = 0;
    let roundedPrevTime = 0;
    let t = 0;
    let startIteration = true;

    const checkTime = (timePassed) => {

        if (startIteration) {
            t = (pauseTime ? pauseTime : timeToCount);
            console.log(t);
            startIteration = false;
            prevTime = timePassed;
        } else {
            console.log(timePassed);
            console.log(prevTime);
            console.log(t);
            t = t - (timePassed - prevTime) / 1000;
            prevTime = timePassed;
            console.log(t);
        }

        let roundedTime = Math.round(t);

        if (pause) {
            pause = false;
            pauseTime = t;
            btnStart.disabled=false;
            btnPause.disabled=false;
            return;
        }

        if (Math.abs(roundedTime) === 0) {
            timeLeftEl.innerText = '' + 0;
            clearStyles();
            pauseTime = null;
            startIteration = true;
            audio.play();
            btnStart.disabled=false;
            return;
        }

        if (roundedTime !== roundedPrevTime) {
            roundedPrevTime=roundedTime;
            timeLeftEl.innerText = '' + roundedTime;
            console.log(t);
            diagramMove(timeToCount - roundedTime);
        }

        requestAnimationFrame(checkTime);
    }

    requestAnimationFrame(checkTime);
}

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', () => {pause = btnStart.disabled?true:false;});

export default startTimer;