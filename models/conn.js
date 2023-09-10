const {Sequelize} = require("sequelize")
// connect to DB
const connectToDB = new Sequelize("meats", "postgres", "", {
    host: "localhost",
    dialect: "postgres"
})

async function testConnection() {
    
    try {

        await connectToDB.authenticate()
        console.log("The connection worked!")
        return true

    } catch (error) {
        console.error("The connection didn't work!", error)
        return false
    }
}

// testConnection()

module.exports = {connectToDB, testConnection}