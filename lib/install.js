var Promise = require('bluebird');
var box = require('./boxContent.js');

module.exports = function() {
  var boxType = {
    uuid: '44bda488-b675-4c0b-97e9-cfb897fc0fd0',
    title: 'Console NETATMO',
    ngcontroller: '',
    html: box.html,
    footer: box.footer,
    icon: 'fa fa-sun-o',
    type: 'box box-primary',
    view: 'dashboard'
  }
   
  // Create the box type
  gladys.boxType.create(boxType)
  .then(function() {
    return gladys.param.createValue({name: 'NETATMO_token', value: 'xxxxxxxx'});
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
