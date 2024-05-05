const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset')
const session = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
let myInterval; 
let state = true;

const sessionAmount = Number.parseInt(session.textContent)

const appTimer = () => {

    if(state) {
        state = false;
        let totalSeconds = sessionAmount * 60;
        const updateSeconds = () => {
            const minuteDiv = document.querySelector('.minutes');
            const secondDiv = document.querySelector('.seconds');

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;

            if(secondsLeft < 10) {
                secondDiv.textContent = '0' + secondsLeft;
            } else {
                secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`

            if(minutesLeft === 0 && secondsLeft === 0) {
                bells.play()
                clearInterval(myInterval);
            }
        }
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Session has already started.')
    }
}

const appStop = () => {
    clearInterval (myInterval);
    state = true;
}

const resetTimer = () => {
    clearInterval(myInterval);
    state = true;
    document.querySelector('.minutes').value = 25;
    document.querySelector('.seconds').value = '00';
}



startBtn.addEventListener('click', appTimer);
stopBtn.addEventListener('click', appStop)
resetBtn.addEventListener('click', resetTimer)