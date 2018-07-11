describe('Thermostat', function() {

  beforeEach(function(){
    this.thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(this.thermostat.temperature).toEqual(20);
  });
});
