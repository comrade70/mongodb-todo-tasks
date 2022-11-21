const { config } = require("dotenv")
const mongoose = require("mongoose")
config()

async function connect(uri){

    try {
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL)
        console.log("connected to MongoDb")

    } catch (error) {
        console.log(err.message)   
    } 
}

module.exports = connect;