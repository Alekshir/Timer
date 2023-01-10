import '../css/spiner.css';

let firstEl = document.getElementsByClassName('first')[0];
let secondEl = document.getElementsByClassName('second')[0];
let thirdEl = document.getElementsByClassName('third')[0];
let i = 0;
let half=false;

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
    

    return (modifyer) => {

        console.log('i--'+i);
        return (i) => {
            let rotateSize = (i) * modifyer;
            console.log(i);
            console.log(rotateSize);
        
            /*rotateSize = ((rotateSize < 180.5) && (rotateSize > 179.5)) ? 180 : rotateSize;
            rotateSize = ((rotateSize < 360.5) && (rotateSize > 359.5)) ? 360 : rotateSize;*/

            if (rotateSize > 180&&!half) {

                firstEl.style.background = 'blue';
                thirdEl.style.zIndex = 4;
                half=true;
            }

            secondEl.style.transform = `rotate(${rotateSize}deg)`;
        }

    }

}
const diagramMoveFunc = diagramMoveFactory(firstEl, secondEl, thirdEl)
const clearStyles=()=>{
    firstEl.style='';
    secondEl.style='';
    thirdEl.style='';
    i=0;
    half=false;
}

//setInterval(diagramMove, 100);

export  {
    diagramMoveFunc,
    clearStyles
};