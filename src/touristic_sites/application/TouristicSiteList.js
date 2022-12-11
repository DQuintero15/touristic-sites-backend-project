const { TouristicSiteRepository } = require("../domain/TouristicSiteRepository")

/**
 * List all touristic sites
 */
class TouristicSiteList {
    /**
     * 
     * @param {TouristicSiteRepository} touristicSiteRepo 
     */
    constructor(touristicSiteRepo = new TouristicSiteRepository()) {
        this.touristicSiteRepo = touristicSiteRepo
    }

    getAllTouristicSites = async () => {
        const touristicSites = await this.touristicSiteRepo.getAllTouristicSites()
        return touristicSites
    }

}

module.exports = { TouristicSiteList }