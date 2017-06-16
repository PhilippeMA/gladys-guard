var Promise = require('bluebird');
var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function() {
  var boxId = { id: shared.boxIdent }

  //Suppression du répertoire de stockage des vidéos de surveillance
	fse.removeSync(shared.videoEmplacement);

  //Delete the box type
  gladys.boxType.delete(boxId);
  // Permet d'éviter les accès concurent à la webcam
	gladys.param.delete({name: 'GUARD_LAST_REC'});
	// Durée de l'enregistrement en seconde
	gladys.param.delete({name: 'GUARD_REC_DURATION'});
  // Caméra
  gladys.param.delete({name: 'GUARD_REC_DEVICE'});
  // Emplacement de sauvegarde des vidéos prises
  gladys.param.delete({name: 'GUARD_SAVE_LOCATION'});
  // Résolution : width
  gladys.param.delete({name: 'GUARD_RES_WIDTH'});
  // Résolution : height
  gladys.param.delete({name: 'GUARD_RES_HEIGHT'});
  // FPS
  gladys.param.delete({name: 'GUARD_VID_FPS'});

  sails.log.info('Guard : Module uninstalled');
  return Promise.resolve();

}
