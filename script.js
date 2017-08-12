var timer = {
	minutes: 0,
	seconds: 0,
	show: function() {
		var m=this.minutes+'',s=this.seconds+'';
		if(m.length<2) m='0'+m;
		if(s.length<2) s='0'+s;
		return `${m}:${s}`;
	}
}

var timerDiv = document.querySelector('#timerInner');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var stopBtn = document.querySelector('#stopBtn');