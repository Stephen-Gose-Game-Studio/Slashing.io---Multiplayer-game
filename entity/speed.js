var speedpickup = function (max_x, max_y, id) {
	this.x = getRndInteger(10, max_x - 10) ;
	this.y = getRndInteger(10, max_y - 10);
	this.id = id; 
	this.powerup; 
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = speedpickup; 