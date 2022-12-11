const { TouristicSiteRepository } = require("../../domain/TouristicSiteRepository")
const { TouristicSiteModel } = require("../models/TouristicSiteModel")


/**
 * Mongodb repository class with methods
 */
class TouristicSiteDBRepository extends TouristicSiteRepository {

    /**
     * Async function to create a touristic site
     * @param {Object} touristicSite 
     * @returns Touristic site created
     */
    createTouristicSite = async (touristicSite) => {
        const newTouristicSite = await TouristicSiteModel.create(touristicSite)
        return newTouristicSite
    }

    /**
    * Async function to get all touristic sites
    * @returns Touristic touristic sites list
    */
    getAllTouristicSites = async () => {
        const touristicSitesLists = await TouristicSiteModel.find({})
        return touristicSitesLists
    }

    /**
     * Async function to get a touristic site
     * @param {String} uuid - Touristic site uuid
     * @returns Touristic site by uuid
     */
    getTouristicSiteById = async (uuid) => {
        const touristicSite = await TouristicSiteModel.findOne({ uuid })
        return touristicSite
    }

    /**
     * Async function to delete a touristic site
     * @param {String} uuid - Touristic site uuid
     * @returns Touristic site deleted
     */
    deleteTouristicSiteById = async (uuid) => {
        const touristicSiteDeleted = await TouristicSiteModel.deleteOne({ uuid })
        return touristicSiteDeleted
    }

    /**
     * Async function to update a touristic site
     * @param {String} uuid - Touristic site uuid
     * @returns Touristic site updated
     */
    updateTouristicSite = async (uuid, data) => {
        const touristicSiteUpdated = await TouristicSiteModel.findOneAndUpdate(uuid, data,
            { new: true })
        return touristicSiteUpdated
    }
}

module.exports = { TouristicSiteDBRepository }