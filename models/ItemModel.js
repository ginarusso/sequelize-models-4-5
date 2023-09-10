
const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")
const Category = require("./CategoryModel")

const Item = connectToDB.define('item', {

    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
}, {
        timestamps: false
})

Item.belongsTo(Category, {
    foreignKey: "category_id",
    // onDelete: 'CASCADE'
})

module.exports = Item
