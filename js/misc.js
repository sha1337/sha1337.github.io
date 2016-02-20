Math.TAU = Math.PI *2; // Might be usefull

function isDefined(a){
    if (typeof a == "undefined")
        return false;
    return true;
}

function getTime(){    // timestamp in seconds since 1970-01-01 00:00:00 UTC.
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
		var now = (new Date()).getTime()/1000;
		return now;
}

function generateArray(size,func){
	var array = new Array(size);
	for(var i = 0; i<size; i++ ){
		array[i] = func(i);
	}
	
	return array;
}

function Timer(){
	var t		= getTime();
	var dt		= 0;
	var running	= false;
	
	this.start = function(){
		if(!running){
			t = getTime()-dt;
			running = true;
		}
		recalc();
		return dt;
	};
	this.read = function(){
		recalc()
		return dt;
	};
	var recalc = function(){
		if (running){
			dt = getTime()-t;
		}
	}
	this.stop = function(){
		recalc()
		running = false;
		return dt;
	};
	this.reset = function(){
		t		= getTime();
		dt		= 0;
		running	= false;
	}
	this.isRunning = function(){
		return running;
	};
	this.startStop = function(){
		if (running)
			this.stop()
		else
			this.stop()
		return running;
	};
}// end Timer()
