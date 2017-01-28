var Promise = require('bluebird');
var box = require('./boxContent.js');

module.exports = function() {
  var boxType = {
    title: 'Console NETATMO',
    ngcontroller: '',
    html: box.html,
    footer: box.footer,
    icon: 'fa fa-sun-o',
    type: 'box box-primary',
    view: 'dashboard'
  }

  var state = {
    uuid: ,
    name: 'Alerte CO2',
    description: 'Le niveau de CO2 dépasse la normale',
    service: 'netatmoWeather',
    function: 'alarmCO2',
  }
   
  // Create the box type
  gladys.boxType.create(boxType)
  .then(function() {
    return gladys.param.createValue({name: 'NETATMO_token', value: 'xxxxxxxx'});
  })
  .then(function() {
    return gladys.stateType.create(state);
  })
  .then(function() {
    sails.log.info('Netatmo : Module installed');
    return new Promise.resolve();
  })
  .catch(function(err) {
    sails.log.warn('Netatmo : Failed to install module');
    sails.log.warn(err);
  });
}
