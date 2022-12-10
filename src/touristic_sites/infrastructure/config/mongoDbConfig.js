const mongoose = require("mongoose")

/**
 * Environment variables
 */
const host = process.env.MONGO_DB_HOST
const port = process.env.MONGO_DB_PORT
const db = process.env.MONGO_DB_NAME

/**
 * Database connection with Mongoose and environment variables
 */
exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`
    mongoose.connect(mongoStringConnection)
    mongoose.Promise = global.Promise
    const dbConnection = mongoose.connection
    dbConnection.on(
        "error",
        console.error.bind(console, "Mongodb connection error")
    )
}
mongoose.set("strictQuery", false)
