import { diagramMoveFunc } from './spiner';
import { clearStyles } from './spiner'
import '../css/timer.css';
import audioFile from '../audio/alarm.mp3';

let pause = false;
let pauseTime = null;

const startTimer = () => {
    let timeToCount = Number(document.getElementById('timeInput').value);
    let timeLeftEl = document.getElementsByClassName('time-left')[0];
    let modifyer = 360 / timeToCount;
    let diagramMove = diagramMoveFunc(modifyer);
    let audio = new Audio();
    audio.src = audioFile;

    const checkTime = (t) => {

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
    }
    checkTime(pauseTime ? pauseTime : timeToCount);
}

let btnStart = document.getElementsByClassName('start')[0];
let btnPause = document.getElementsByClassName('pause')[0];
btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', () => pause = true);

export default startTimer;