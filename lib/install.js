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
	//Initialisation du paramètre qui stocke la date et heure du dernier enregistrement
	// Permet d'éviter les accès concurent à la webcam
	gladys.param.setValue({name: 'GUARD_LAST_REC', value: 'NULL'});
	// Durée de l'enregistrement en secondes
	gladys.param.setValue({name: 'GUARD_REC_DURATION', value: '20'});
	// Device camera
	gladys.param.setValue({name: 'GUARD_REC_DEVICE', value: '/dev/video0'});
	// Emplacement où seront sauvegardée toutes les vidéos
	gladys.param.setValue({name: 'GUARD_SAVE_LOCATION', value: '/home/pi/gladysGuardVideos/'});
	// Création du répertoire s'il n'existe pas
	fse.mkdirsSync('/home/pi/gladysGuardVideos/');
	// Résolution de la vidéo : width
	gladys.param.setValue({name: 'GUARD_RES_WIDTH', value: '1280'});
	// Résolution de la vidéo : height
	gladys.param.setValue({name: 'GUARD_RES_HEIGHT', value: '720'});
	// Nombre d'images par seconde
	gladys.param.setValue({name: 'GUARD_VID_FPS', value: '12'});
	
	sails.log.info('Guard : Module installed');
	return Promise.resolve();

}
