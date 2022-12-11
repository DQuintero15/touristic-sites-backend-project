const express = require("express")
const { TouristicSiteController } = require("../controllers/TouristicSiteController")
const { TouristicSiteDBRepository } = require("../repository/TouristicSiteDBRepository")
const { TouristicSiteCreator } = require("../../application/TouristicSiteCreator")
const { TouristicSiteList } = require("../../application/TouristicSiteList")
const { TouristicSiteById } = require("../../application/TouristicSiteById")
const { TouristicSiteDeleteById } = require("../../application/TouristicSiteDeleteById")
const { TouristicSiteEditor } = require("../../application/TourisitcSiteEditor")

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
const touristicSiteEditor = new TouristicSiteEditor(dbRepository)

/**
 * Controller 
 */
const touristicSiteController = new TouristicSiteController(
    touristicSiteCreator,
    touristicSiteList,
    touristicSiteById,
    touristicSiteDeleteById,
    touristicSiteEditor)


/**
 * Create new touristic site route
 */
touristicSitesRouter.post("/", touristicSiteController.createTouristicSite)
touristicSitesRouter.get("/", touristicSiteController.getAllTouristicSites)
touristicSitesRouter.get("/:uuid", touristicSiteController.getTouristicSiteById)
touristicSitesRouter.delete("/:uuid", touristicSiteController.removeTouristicSiteById)
touristicSitesRouter.put("/:uuid", touristicSiteController.updateTouristicSite)



module.exports = { touristicSitesRouter }