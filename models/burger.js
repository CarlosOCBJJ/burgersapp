// Import ORM 
var orm = require("../config/orm.js");

// use functions
var burger = {
    //display all of the burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    //Input new burger
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
};

//delete burger


// Export
module.exports = burger;