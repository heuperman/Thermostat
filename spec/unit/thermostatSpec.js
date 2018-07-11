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

  it("throws an error when user sets temperature above maximum", function() {
    expect(function() { thermostat.up(14); }).toThrowError('Cannot increase temperature: temperature too high');
  });

  it("can turn power saving mode on", function() {
    thermostat.powerSavingModeOn();
    expect(thermostat.maxTemp).toEqual(25);
  });

  it("can turn power saving mode off", function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it("power saving mode is on by deault", function() {
    expect(thermostat.maxTemp).toEqual(25);
  });

  it("can reset temperature back to 20", function() {
    thermostat.down(3);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("knows when energy usage is low", function() {
    thermostat.down(5);
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
  });

  it("knows when energy usage is medium", function() {
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
  });

  it("knows when energy usage is high", function() {
    thermostat.powerSavingModeOff();
    thermostat.up(7);
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
  });


});
