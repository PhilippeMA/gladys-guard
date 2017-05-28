var Promise = require('bluebird');
var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function() {
  var boxId = { id: shared.boxIdent }

  //Suppression du répertoire de stockage des vidéos de surveillance
	fse.removeSync(shared.videoEmplacement);

  //Delete the box type
  gladys.boxType.delete(boxId);
  sails.log.info('Guard : Module uninstalled');
  return Promise.resolve();

}
