Math.TAU = Math.PI *2; // Might be usefull

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
