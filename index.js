module.exports = function(sails) {
    
    // Connexion aux ressources NETATMO
    var connection = require('./lib/connection.js');
       
    return {
        connection
    };
};
