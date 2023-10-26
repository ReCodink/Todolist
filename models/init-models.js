var DataTypes = require("sequelize").DataTypes;
var _todolist = require("./todolist");

function initModels(sequelize) {
  var todolist = _todolist(sequelize, DataTypes);


  return {
    todolist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
