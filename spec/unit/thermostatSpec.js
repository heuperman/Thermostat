'user strict';

describe('Thermostat', function() {

var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases temperature", function() {
    thermostat.up(3);
    expect(thermostat.temperature).toEqual(23);
  });

  it("increases temperature", function() {
    thermostat.down(3);
    expect(thermostat.temperature).toEqual(17);
  });

  it("it has a minimum temperature of 10 degrees", function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it("throws an error when user sets temperature below minimum", function() {
    expect(function() { thermostat.down(12); }).toThrowError('Cannot reduce temperature: temperature too low');
  });
});
