var hours,
    minutes,
    seconds,
    differenceInMs;
var startTimestamp = 0,
    intervalID = null,
    paused = false;

function calculateTime() {
    var currentTimestamp;
    if (startTimestamp == 0) {
        startTimestamp = Date.now();
    } else if (paused) {
        paused = false;
        startTimestamp = Date.now() - differenceInMs - 100;
    }
    currentTimestamp = Date.now();
    differenceInMs = currentTimestamp - startTimestamp;
    hours = Math.floor(differenceInMs / 3600000);
    minutes = Math.floor(differenceInMs / 60000) - hours * 60;
    seconds = Math.floor((differenceInMs / 1000) % 60);
}

function formatZeros(n) {
    var str = n.toString();
    return str.length < 2 ? '0' + str : str;
}

function displayTime(z) {
    calculateTime();
    //console.time('DOM manipulation'); 
    //Looks like innerText works little bit faster than textContent.
    hoursV.innerText = formatZeros(hours);
    minutesV.innerText = formatZeros(minutes);
    secondsV.innerText = formatZeros(seconds);
    //console.timeEnd('DOM manipulation');

}

function startBtnHandler() {
    if (intervalID === null) {
        intervalID = setInterval(displayTime, 1000);
        displayTime();
    }
}

function stopBtnHandler() {
    clearInterval(intervalID);
    intervalID = null;
    paused = true;
}

function resetBtnHandler() {
    startTimestamp = 0;
    differenceInMs = 0;
    displayTime();
}

const hoursV = document.querySelector('#hours');
const minutesV = document.querySelector('#minutes');
const secondsV = document.querySelector('#seconds');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var stopBtn = document.querySelector('#stopBtn');

startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);
resetBtn.addEventListener('click', resetBtnHandler);