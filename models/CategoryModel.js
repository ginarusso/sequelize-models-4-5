const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")

//create the table
const Category = connectToDB.define('categorie', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      }
}, {
        timestamps: false
});

module.exports = Category;