/**
 * Dotenv configuration
 */
const dotenv = require("dotenv")
dotenv.config()

/**
 * Dependencies, database configurations and routes 
 */
const touristicSitesDB = require("./touristic_sites/infrastructure/config/mongoDbConfig")
const express = require("express")
const cors = require("cors")


const app = express()
const port = process.env.PORT || 3000

/**
 * Express configuration
 */
app.use(express.json())
app.use(cors())

/**
 * Database connections
 */
touristicSitesDB.mongoConnect()
app.listen(port)