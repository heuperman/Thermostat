describe('Thermostat', function() {

  beforeEach(function(){
    this.thermostat = new Thermostat();
  });

  describe('.temperature', function() {
    it('return the temperature', function() {
      expect(this.thermostat.temperature).toEqual(20);
    });
  });
});
