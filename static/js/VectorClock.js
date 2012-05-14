//var VectorClock = {};


//var tab={};


function VectorClock() {
	this.tab = {};
}

VectorClock.prototype.get = function get(userId){
     if (this.tab[userId]) {
		return this.tab[userId]; 				
	 } else {
		return 0;
	 }
};

VectorClock.prototype.inc = function inc(userId){				
	var res = this.tab[userId];

	if (! res) {
		res = 0;		
	} 
	res = res + 1;
	this.tab[userId] = res;
	return res;
};
			
VectorClock.prototype.toStr = function toStr(){
        return JSON.stringify(this.tab);
/*
	var res = " ";
   	
	for (var prop in this.tab) {
       		res = res+'<'+prop+','+this.tab[prop]+'> ; ';
    	}
	return res;
*/
};

exports.VectorClock = VectorClock;
