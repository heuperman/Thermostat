'user strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(degrees){
  if((this.temperature + degrees) > this.maxTemp) {
    throw new Error('Cannot increase temperature: temperature too high');
  }
  this.temperature += degrees;
};

Thermostat.prototype.down = function(degrees){
  if((this.temperature - degrees) < this.MINIMUM_TEMPERATURE) {
    throw new Error('Cannot reduce temperature: temperature too low');
  }
  this.temperature -= degrees;
};

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
  this.maxTemp = 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.isPSMon = function() {
  if(this.powerSavingMode == true) {
    return "on";
  } else {
    return "off";
  }
};

Thermostat.prototype.currentEnergyUsage = function() {
  if(this.temperature > 25) {
    return "high-usage";
  } else if(this.temperature < 18 ) {
    return "low-usage";
  } else {
    return "medium-usage";
  }
};
