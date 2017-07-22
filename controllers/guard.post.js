const shared = require('../lib/shared.js');

module.exports = function(req, res, next){
    shared.lastVideoRec.processUpdate(req.body);
    res.status(200).json({});
};
