const { TouristicSiteCreator } = require("../../application/TouristicSiteCreator")
const { TouristicSiteList } = require("../../application/TouristicSiteList")
const { TouristicSiteById } = require("../../application/TouristicSiteById")
const { TouristicSiteDeleteById } = require("../../application/TouristicSiteDeleteById")
const { TouristicSiteEditor } = require("../../application/TourisitcSiteEditor")


/**
 * Touristic site class controller
 */
class TouristicSiteController {

    /**
     * Constructor that recieve all use cases or operations to do
     * @param {Object} touristicSiteCreator  
     * @param {Object} touristicSiteList 
     * @param {Object} touristicSiteById 
     * @param {Object} touristicSiteDeleteById
     */
    constructor(touristicSiteCreator = new TouristicSiteCreator(),
        touristicSiteList = new TouristicSiteList(),
        touristicSiteById = new TouristicSiteById(),
        touristicSiteDeleteById = new TouristicSiteDeleteById(),
        touristicSiteEditor = new TouristicSiteEditor()) {

        this.touristicSiteCreator = touristicSiteCreator
        this.touristicSiteList = touristicSiteList
        this.touristicSiteById = touristicSiteById
        this.touristicSiteDeleteById = touristicSiteDeleteById
        this.touristicSiteEditor = touristicSiteEditor
    }

    /**
     * 
     * @param {Request} request 
     * @param {Request} response 
     */
    createTouristicSite = async (request, response) => {
        try {
            const touristicSiteToCreate = request.body
            const data = await this.touristicSiteCreator.registerTouristicSite(touristicSiteToCreate)
            response.send({ data })
            response.status(200)
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 
     * @param {Request} request 
     * @param {Request} response 
     */
    getAllTouristicSites = async (request, response) => {
        try {
            const data = await this.touristicSiteList.getAllTouristicSites()
            response.send({ data })
            response.status(200)
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 
     * @param {Request} request 
     * @param {Request} response 
     */
    getTouristicSiteById = async (request, response) => {
        try {
            const uuid = request.params.uuid
            const data = await this.touristicSiteById.getTouristicSiteById(uuid)
            response.send({ data })
            response.status(200)
        } catch (error) {
            console.log(error)
        }
    }

    removeTouristicSiteById = async (request, response) => {
        try {
            const uuid = request.params.uuid
            const data = await this.touristicSiteDeleteById.deleteTouristicSiteById(uuid)
            response.send({ data })
            response.status(200)
        } catch (error) {
            console.log(error)
        }
    }

    updateTouristicSite = async (request, response) => {
        try {
            const uuid = request.params.uuid
            const dataToUpdate = request.body
            const data = await this.touristicSiteEditor.updateTouristicSite(uuid, dataToUpdate)
            response.send({ data })
            response.status(200)
        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = { TouristicSiteController }