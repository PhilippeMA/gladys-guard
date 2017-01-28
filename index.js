module.exports = function(sails) {
    
    // Connexion aux ressources NETATMO
    var install = require('./lib/install.js');
       
    return {
        install: install
    };
};
