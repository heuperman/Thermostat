$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updatePSM();
  $.get("http://api.openweathermap.org/data/2.5/weather?q=london&APPID=1fe31de9612083abc4be2d912d1df45e&units=metric", function(data) {
    $("#outside_temperature").text(data.main.temp);
  });

  $( "#increase_temperature" ).click(function() {
    if(thermostat.temperature >= thermostat.maxTemp) {
      alert( "Cannot increase temperature: maximum temperature reached" );
    }
    thermostat.up(1);
    updateTemperature();
  });

  $( "#decrease_temperature" ).click(function() {
    if(thermostat.temperature <= thermostat.MINIMUM_TEMPERATURE) {
      alert( "Cannot decrease temperature: minumum temperature reached" );
    }
    thermostat.down(1);
    updateTemperature();
  });

  $( "#PSM_on" ).click(function() {
    thermostat.powerSavingModeOn();
    updatePSM();
  });

  $( "#PSM_off" ).click(function() {
    thermostat.powerSavingModeOff();
    updatePSM();
  });

  $( "#reset_temperature" ).click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#city_form').submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1fe31de9612083abc4be2d912d1df45e&units=metric', function(data) {
      $('#outside_temperature').text(data.main.temp);
    });
  });

  function updateTemperature() {
  $("#display_temperature").text(thermostat.temperature);
  $("#display_energy_usage").text(thermostat.currentEnergyUsage());
  $('#display_temperature').attr('class', thermostat.currentEnergyUsage());
  }

  function updatePSM() {
  $("#display_PSM").text(thermostat.isPSMon());
  $('#display_temperature').attr('class', thermostat.currentEnergyUsage());
  }
});
