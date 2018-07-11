'user strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.up = function(degrees){
  this.temperature += degrees;
};

Thermostat.prototype.down = function(degrees){
  this.temperature -= degrees;
};
