const { DataTypes } = require("sequelize");
const db = require("../Config/config");
const roles_model = require("./Roles.model");

const UsersModel = db.define(
  "Users",
  {
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: roles_model,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "Users",
  }
);

UsersModel.hasOne(roles_model, {
  foreignKey: "id",
});

module.exports = UsersModel;