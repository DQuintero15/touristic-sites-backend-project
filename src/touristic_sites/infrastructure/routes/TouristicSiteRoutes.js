const express = require("express")
const { TouristicSiteController } = require("../controllers/TouristicSiteController")
const { TouristicSiteDBRepository } = require("../repository/TouristicSiteDBRepository")
const { TouristicSiteCreator } = require("../../application/TouristicSiteCreator")
const { TouristicSiteList } = require("../../application/TouristicSiteList")
const { TouristicSiteById } = require("../../application/TouristicSiteById")
const { TouristicSiteDeleteById } = require("../../application/TouristicSiteDeleteById")

const touristicSitesRouter = express.Router()


/**
 * Database repositories
 */
const dbRepository = new TouristicSiteDBRepository()

/**
 * Application operations
 */
const touristicSiteCreator = new TouristicSiteCreator(dbRepository)
const touristicSiteList = new TouristicSiteList(dbRepository)
const touristicSiteById = new TouristicSiteById(dbRepository)
const touristicSiteDeleteById = new TouristicSiteDeleteById(dbRepository)

/**
 * Controller 
 */
const touristicSiteController = new TouristicSiteController(
    touristicSiteCreator,
    touristicSiteList,
    touristicSiteById,
    touristicSiteDeleteById)


/**
 * Create new touristic site route
 */
touristicSitesRouter.post("/", touristicSiteController.createTouristicSite)
touristicSitesRouter.get("/", touristicSiteController.getAllTouristicSites)
touristicSitesRouter.get("/:uuid", touristicSiteController.getTouristicSiteById)
touristicSitesRouter.delete("/:uuid", touristicSiteController.removeTouristicSiteById)



module.exports = { touristicSitesRouter }