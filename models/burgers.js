var orm = require("../config/orm.js");

var burgerMdl = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, objCondition, cb) {
        orm.updateOne("burgers", objColVals, objCondition, function(res) {
            cb(res);
        });
    }
}

module.exports = burgerMdl;