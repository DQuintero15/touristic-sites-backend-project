const { TouristicSiteRepository } = require("../domain/TouristicSiteRepository")
const { TouristicSite } = require("../domain/TouristicSite")

/**
 * Create a new touristic site between repository
 */
class TouristicSiteCreator {

    constructor(touristicSiteRepo = new TouristicSiteRepository()) {
        this.touristicSiteRepo = touristicSiteRepo
    }

    listTouristicSites = async () => {
        return await this.touristicSiteRepo.getAllTouristicSites()
    }

    registerTouristicSite = async ({ data }) => {
        const newTouristicSite = TouristicSite(data)
        const touristicSiteCreated = await this.touristicSiteRepo.createTouristicSite(newTouristicSite)
        return touristicSiteCreated
    }
}

module.exports = { TouristicSiteCreator }