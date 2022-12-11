const { TouristicSiteRepository } = require("../../domain/TouristicSiteRepository")
const { TouristicSiteModel } = require("../models/TouristicSiteModel")


/**
 * Mongodb repository 
 */
class TouristicSiteDBRepository extends TouristicSiteRepository {
    createTouristicSite = async (touristicSite) => {
        const newTouristicSite = await TouristicSiteModel.create(touristicSite)
        return newTouristicSite
    }

    getAllTouristicSites = async () => {
        const touristicSitesLists = await TouristicSiteModel.find({})
        return touristicSitesLists
    }

    getTouristicSiteById = async (uuid) => {
        const touristicSite = await TouristicSiteModel.findOne({ uuid })
        return touristicSite
    }

    deleteTouristicSiteById = async (uuid) => {
        const touristicSiteDeleted = await TouristicSiteModel.deleteOne({ uuid })
        return touristicSiteDeleted
    }
}

module.exports = { TouristicSiteDBRepository }