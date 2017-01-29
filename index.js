module.exports = function(sails) {
    
    // Connexion aux ressources NETATMO
    var install = require('./lib/install.js');
    var uninstall = require('./lib/uninstall.js');
       
    return {
        install: install,
        uninstall: uninstall
    };
};
