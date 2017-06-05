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
  sails.log.info('Guard : Module uninstalled');
  return Promise.resolve();

}
