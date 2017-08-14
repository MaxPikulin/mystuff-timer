var minutes = 0,seconds = 0,fractionsOfSecond = 0, differenceInMs;
var startTimestamp = 0,intervalID = null, paused = false;

function calculateTime() {
	var currentTimestamp;
	if(startTimestamp==0) {
		startTimestamp=Date.now();
	} else if(paused) {
		paused=false;
		startTimestamp=Date.now()-differenceInMs-100;
	}
	currentTimestamp=Date.now();
	differenceInMs=currentTimestamp-startTimestamp;
	minutes=Math.floor(differenceInMs/60000);
	seconds=Math.floor((differenceInMs/1000)%60);
	fractionsOfSecond=Math.floor((differenceInMs%1000)/100);
}

function formatZeros(n) {
	var str = n.toString();
	return str.length<2 ? '0'+str : str;
}

function displayTime(z) {
	if(!z) {
		calculateTime();
		displayDiv.innerText=
		`${formatZeros(minutes)}:${formatZeros(seconds)}.${fractionsOfSecond}`;
	} else {
		displayDiv.innerText=
		`00:00.0`;
	}
}

function startBtnHandler() {
	if(intervalID===null) {
		intervalID=setInterval(displayTime,100);
	}
}

function stopBtnHandler() {
	clearInterval(intervalID);
	intervalID=null;
	paused=true;
}

function resetBtnHandler() {
	startTimestamp=0;
	differenceInMs=0;
	displayTime(true);
}

//setInterval(displayTime,100);

var displayDiv = document.querySelector('#timerInner');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var stopBtn = document.querySelector('#stopBtn');

startBtn.addEventListener('click',startBtnHandler);
stopBtn.addEventListener('click',stopBtnHandler);
resetBtn.addEventListener('click',resetBtnHandler);

displayTime(true);