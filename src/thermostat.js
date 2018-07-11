'user strict';

function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
}

Thermostat.prototype.up = function(degrees){
  this.temperature += degrees;
};

Thermostat.prototype.down = function(degrees){
  if((this.temperature - degrees) < this.minTemp) {
    throw new Error('Cannot reduce temperature: temperature too low');
  }
  this.temperature -= degrees;
};

Thermostat.prototype.powerSavingMode = function(){
  this.maxTemp = 25;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.maxTemp = 32;
};
