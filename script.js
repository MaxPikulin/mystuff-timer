var timerDiv = document.querySelector('#timerInner');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var stopBtn = document.querySelector('#stopBtn');

var trail=n=>n.toString().length<2?'0'+n:n;
var secs = mins = 0;
var running = false;
var to;
timerDiv.innerText=`${trail(mins)}:${trail(secs)}`;

startBtn.addEventListener('click',function(e){
	startBtn.disabled=true;
	running = true; 
	timer();
});
resetBtn.addEventListener('click',function(e){
	mins = secs = 0;
	timerDiv.innerText=`${trail(mins)}:${trail(secs)}`;
});
stopBtn.addEventListener('click',function(e){
	clearTimeout(to);
	startBtn.disabled=false;
})

function timer(){
	secs++;
	if(secs>59){
		mins++;
		secs=0;
	}
	timerDiv.innerText=`${trail(mins)}:${trail(secs)}`;
	if(running)
		to = setTimeout(timer,1000);
	else
		clearTimeout(to);
}
//setTimeout(timer, 1000);