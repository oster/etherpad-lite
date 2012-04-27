var VectorClock = {};


var tab={};

VectorClock.get = function get(userId){
         if (tab[userId]) {
		return VectorClock.set[userId]; 				
	 } else {
		return 0;
	 }
};

VectorClock.inc = function inc(userId){				
	var res = tab[userId];

	if (! res) {
		res = 0;		
	} 
	res = res + 1;
	tab[userId] = res;
	return res;
};
			
VectorClock.toStr = function toStr(){
	var res = " ";
   	
	for (var prop in tab) {
       		res = res+'<'+prop+','+tab[prop]+'> ; ';
    	}
	return res;
};

exports.VectorClock = VectorClock;
