var shared = require('./shared.js');

module.exports = function init(){
    return gladys.param.getValue('GUARD_LAST_REC')
        .spread((lstVidRec) => {

            shared.lastVideoRec = lstVidRec;

          })
};
