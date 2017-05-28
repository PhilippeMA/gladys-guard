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

	//Création du répertoire de stockage des vidéos de surveillance
	fse.mkdirsSync(shared.videoEmplacement);

	// Création de la box
	gladys.boxType.create(boxGuard);
	sails.log.info('Guard : Module installed');
	return Promise.resolve();

}
