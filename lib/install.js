var Promise = require('bluebird');
var box = require('./boxContent.js');

module.exports = function() {
  var boxType = {
    title: 'Console NETATMO',
    ngcontroller: 'netatmoCtrl as vm',
    html: boxContent.html,
    footer: boxContent.footer,
    icon: 'fa fa-flash',
    type: 'box box-primary',
    view: 'dashboard'
  }

  var state = {
    uuid: '04a2565d-a0e1-40f8-a227-f1b45c27d9b7',
    name: "Alerte CO2",
    description: "Le niveau de CO2 dépasse la normale",
    service: "netatmoWeather",
    function: "alarmCO2",
  }
   
  // Create the box type
  gladys.boxType.create(boxType)
  .then(function() {
    return gladys.param.setValue({name: token_NETATMO, value: 'xxxxxxxx'});
  })
  .then(function() {
    return gladys.stateType.create(state);
  })
  .then(function() {
    sails.log.info('Netatmo : Module installed');
    return new Promise.resolve();
  })
  .catch(function(err) {
    sails.log.warn('Teleinfo : Failed to install module');
    sails.log.warn(err);
  });
}
