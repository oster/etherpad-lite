var VectorClock = {};

VectorClock.get = function get(userId){
         if (VectorClock[userId]) {
		return VectorClock[userId]; 				
	 } else {
		return 0;
	 }
};

VectorClock.inc = function inc(userId){				
	var res = VectorClock[userId];

	if (! res) {
		res = 0;		
	} 
	res = res + 1;
	VectorClock[userId] = res;
	return res;
};
			
VectorClock.toStr = function toStr(){
	var res = " ";
   	
	for (var prop in VectorClock) {
       		res = res+'<'+prop+','+VectorClock[prop]+'> ; ';
    	}
	return res;
};

exports.VectorClock = VectorClock;
