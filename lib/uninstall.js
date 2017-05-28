var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function() {
  var boxId = { id: shared.boxIdent }

  //Delete the box type
  gladys.boxType.delete(boxId)
  .then(function() {
    sails.log.info('Guard : Module uninstalled');
    return Promise.resolve();
  });

}
