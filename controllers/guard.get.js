
module.exports = {

  var vidDateTime;
  vidDateTime = gladys.param.getValue('GUARD_LAST_REC');

  // Retourne le timestamp d'enregistrement de la vidéo
  getTimestamp: function(req, res, next){
    return res.json(vidDateTime);
  };
}
