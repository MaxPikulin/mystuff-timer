var timer = {
	minutes: 0,
	seconds: 0,
	timestamp: 0,
	show: function() {
		return `${format(timer.minutes)}:${format(timer.seconds)}`;

		function format(n) {
			return (n+'').length<2?'0'+n:n;
		}
	},
	calculate: function() {
		if(timer.timestamp===0)
			timer.timestamp=Date.now();
		timer.seconds =  Math.round((Date.now()-timer.timestamp)/1000);
		if(timer.seconds>59){
		timer.minutes+=1;
		timer.seconds=0;
	}
	console.log(timer.show());
	}
}

setInterval(timer.calculate, 1000);

var timerDiv = document.querySelector('#timerInner');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var stopBtn = document.querySelector('#stopBtn');