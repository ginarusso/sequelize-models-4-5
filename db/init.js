const {connectToDB} = require('../models/conn')
const Category = require('../models/CategoryModel')
const Item = require('../models/ItemModel')

async function initializeDB() {

    try {
        await connectToDB.authenticate()
        await Category.sync()
        await Item.sync()
        console.log("tables have been created")
        true

    } catch {
        console.error("table have not been created", error)
        return false
    }
}
initializeDB()