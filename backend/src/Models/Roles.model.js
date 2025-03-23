const { DataTypes } = require("sequelize");
const db = require("../Config/config");

const RolesModel = db.define(
  "Roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Roles",
  }
);

module.exports = RolesModel;