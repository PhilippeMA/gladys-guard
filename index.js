module.exports = function(sails) {

    var install = require('./lib/install.js');
    var uninstall = require('./lib/uninstall.js');
    var recVid = require('./lib/recVid.js');

    return {
        install: install,
        uninstall: uninstall,
        recVid: recVid
    };
};
