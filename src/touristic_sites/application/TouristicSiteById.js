const { TouristicSiteRepository } = require("../domain/TouristicSiteRepository")


/**
 * Get touristic site by id
 */
class TouristicSiteById {

    /**
     * 
     * @param {TouristicSiteRepository} touristicSiteRepo 
     */
    constructor(touristicSiteRepo = new TouristicSiteRepository()) {
        this.touristicSiteRepo = touristicSiteRepo
    }

    getTouristicSiteById = async (uuid) => {
        const touristicSite = await this.touristicSiteRepo.getTouristicSiteById(uuid)
        return touristicSite
    }
}


module.exports = { TouristicSiteById }