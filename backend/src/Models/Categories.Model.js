const { DataTypes } = require("sequelize");
const db = require("../Config/config");

const CategoriesModel = db.define("Categories",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false,
    tableName: "Categories",
});

module.exports = CategoriesModel;