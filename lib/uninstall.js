var Promise = require('bluebird');

module.exports = function() {
  var boxId = {id: '44bda488-b675-4c0b-97e9-cfb897fc0fd0'  }
   
  //Delete the box type
  gladys.boxType.delete(boxId)
  .then(function() {
    sails.log.info('Guard : Module uninstalled');
    return new Promise.resolve();
  })
  .catch(function(err) {
    sails.log.warn('Guard : Failed to uninstall module');
    sails.log.warn(err);
  });
}
