const { DataTypes } = require("sequelize");
const db = require("../Config/config");
const categories_model = require("./Categories.Model");

const ShoesModel = db.define("Shoes",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: categories_model,
            key: "id",
        },
    },
},{
    timestamps: false,
    tableName: "Shoes",
});

ShoesModel.hasOne(categories_model, {
    foreignKey: "id",
});

module.exports = ShoesModel;