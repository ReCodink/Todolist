const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todolist', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'todolist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "todolist_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
