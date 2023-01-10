import '../css/spiner.css';

let firstEl = document.getElementsByClassName('first')[0]; //red semicircle
let secondEl = document.getElementsByClassName('second')[0]; //red semicircle
let thirdEl = document.getElementsByClassName('third')[0]; //blue semicircle
let i = 0; //counter of seconds passed
let half=false; //is rotation more then 180 degrees or not.

/**
 * factory function returns fuction which take argument modifier and return function for diagram rotation
 * @param {*} firstEl -red semicircle
 * @param {*} secondEl -red semicircle
 * @param {*} thirdEl -blue semicircle
 * @returns fuction which take argument modifier and return function for diagram rotation
 */
const diagramMoveFactory = (firstEl, secondEl, thirdEl) => {
    
    return (modifyer) => {

        return () => {
            let rotateSize = (i++) * modifyer; //rotation in degrees according to the passed time
            
            if (rotateSize > 180&&!half) { //if rotation between 180 and 360 degrees

                firstEl.style.background = 'blue';
                thirdEl.style.zIndex = 4; //put the third element at the top
                half=true;
            }

            secondEl.style.transform = `rotate(${rotateSize}deg)`; //rotate seond semicircle
        }
    }

}

const diagramMoveFunc = diagramMoveFactory(firstEl, secondEl, thirdEl); //reate function

const clearStyles=()=>{//clears styles of the elements and sets i and half to the initial values 
    firstEl.style='';
    secondEl.style='';
    thirdEl.style='';
    i=0;
    half=false;
}

export  {
    diagramMoveFunc,
    clearStyles
};