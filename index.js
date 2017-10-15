module.exports = function(sails) {

    var install = require('./lib/install.js');
    var uninstall = require('./lib/uninstall.js');
    var recVid = require('./lib/recVid.js');
    var guardController = require('./controllers/guard.get.js');


    return {
        install: install,
        uninstall: uninstall,
        recVid: recVid,
<<<<<<< HEAD
        //Permet de récupérer le timestamp de la vidéo pour affichage sur la box
=======
        //Permet de récupérer le timestamp de la vidéo
>>>>>>> 6ed8b634e75018b27edbdac25d84fdacdca4d0bd
        routes: {
            after: {
                'GET /guard': guardController
            }
        }
    };
};
