var minutes,seconds,fractionsOfSecond;
var startTimestamp = 0;

function calculateTime() {
	var currentTimestamp, differenceInMs;
	if(startTimestamp==0) {
		startTimestamp=Date.now();
	}
	currentTimestamp=Date.now();
	differenceInMs=currentTimestamp-startTimestamp;
	minutes=Math.floor(differenceInMs/60000);
	seconds=Math.floor((differenceInMs/1000)%60);
	fractionsOfSecond=Math.floor((differenceInMs%1000)/100);
}

function formatZeros(n) {
	return n.toString().length>2 ? '0'+n : n;
}

function displayTime() {
	calculateTime();
	displayDiv.innerText=
		`${formatZeros(minutes)}:${formatZeros(seconds)}:${fractionsOfSecond}`;
}

setInterval(displayTime,100);

var displayDiv = document.querySelector('#timerInner');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var stopBtn = document.querySelector('#stopBtn');