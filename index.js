module.exports = function(sails) {

    var install = require('./lib/install.js');
    var uninstall = require('./lib/uninstall.js');
    var recVid = require('./lib/recVid.js');
    var guardController = require('./controllers/guard.get.js');


    return {
        install: install,
        uninstall: uninstall,
        recVid: recVid,
        //Permet de récupérer le timestamp de la vidéo pour affichage sur la box
        routes: {
            after: {
                'GET /guard': guardController
            }
        }
    };
};
