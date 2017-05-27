var Promise = require('bluebird');
var box = require('./boxContent.js');

module.exports = function() {
	  var boxType = {
	    uuid: '44bda488-b675-4c0b-97e9-cfb897fc0fd1',
	    title: 'Gladys guard',
	    ngcontroller: '',
	    html: box.html,
	    footer: box.footer,
	    icon: ' fa fa-eye',
	    type: 'box box-primary',
	    view: 'dashboard'
	  };
	   
	  // Create the box type
	  gladys.boxType.create(boxType)
	  .then(function() {})
	  .then(function() {
	    sails.log.info('Guard : Module installed');
	    return new Promise.resolve();
	  })
	  .catch(function(err) {
	    sails.log.warn('Guard : Failed to install module');
	    sails.log.warn(err);
	  });
};
