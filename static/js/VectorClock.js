var VectorClock = function VectorClock() {
	this.values = {};
};

//exports.VectorClock = VectorClock;

VectorClock.prototype.get = function get(padid){
         if (this.values[padid]) {
		return this.values[padid]; 				
	 } else {
		return 0;
	 }
};

VectorClock.prototype.inc = function inc(padid){
	var res = this.values[padid];				

	if (! res) {
		res = 0;		
	} 
	res = res + 1;
	this.values[padid] = res;
	return res;
};
			
VectorClock.prototype.toStr = function toStr(){
	var res = " ";
   	
	for (var prop in this.values) {
       		res = res+'<'+prop+','+this.values[prop]+'> ; ';
    	}
	return res;
};
