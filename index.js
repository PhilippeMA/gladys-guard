module.exports = function(sails) {
    
    // Connexion aux ressources NETATMO
    var install = require('./lib/isntall.js');
       
    return {
        install: install
    };
};
