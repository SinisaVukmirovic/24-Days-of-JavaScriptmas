//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number
const maxCounter = 100;

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * maxCounter);
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    for (let i = 0; i <= maxCounter; i++) {
        if (i == maxCounter) {
            i = 0;
        }

        if (pushed == true) {
            stop(i); //Trigger this function when the STOP button has been pushed
            break;
        } else {
            spinningElem.innerHTML = i;
            await sleep(75); //Paste this wherever you need to sleep the incrimentor 
        }       
    }    
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    let missedBy = Math.abs(targetInt - (i - 1));
    let resultMsg;

    if (missedBy == 0) {
        resultMsg = 'Bullseye! You WIN!';
    } else {
        resultMsg = `MISS! You missed by ${missedBy}`;
    }

    var result = document.getElementById('result'); //display your result message here
    result.innerHTML = resultMsg;        
}

//main
setTargetInt();
spin()