var Promise = require('bluebird');
var box = require('./boxContent.js');
var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function() {
	var boxGuard = {
		uuid: shared.boxIdent,
		title: 'Gladys guard',
		ngcontroller: '',
		html: box.html,
		footer: box.footer,
		icon: 'fa fa-eye',
		type: 'box box-primary',
		view: 'dashboard'
	}

	// Create the box type
	gladys.boxType.create(boxGuard)
		.then(function() {
			sails.log.info('Guard : Module installed');
			return Promise.resolve();
		})
		.catch(function(err) {
			sails.log.warn('Guard : Failed to install module');
			sails.log.warn(err);
			Promise.reject(err);
	});

	//Création du répertoire de stockage des vidéos de surveillance
	fse.mkdirsSync(shared.videoEmplacement);

	return boxGuard.title;

}
