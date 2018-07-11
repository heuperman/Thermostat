'user strict';

describe('Thermostat', function() {

  beforeEach(function(){
    this.thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(this.thermostat.temperature).toEqual(20);
  });

  it("increases temperature", function() {
    this.thermostat.up(3);
    expect(this.thermostat.temperature).toEqual(23);
  });
});
