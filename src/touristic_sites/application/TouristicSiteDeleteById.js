const { TouristicSiteRepository } = require("../domain/TouristicSiteRepository")


/**
 * Class to delete a touristic by uuid
 */
class TouristicSiteDeleteById {

    /**
     * 
     * @param {TouristicSiteRepository} touristicSiteRepo 
     */
    constructor(touristicSiteRepo = new TouristicSiteRepository()) {
        this.touristicSiteRepo = touristicSiteRepo
    }

    /**
     * Async function to delete a touristic site
     * @param {String} uuid - Touristic site uuid
     * @returns 
     */
    deleteTouristicSiteById = async (uuid) => {
        const touristicSiterRemoved = await this.touristicSiteRepo.deleteTouristicSiteById(uuid)
        return touristicSiterRemoved
    }
}

module.exports = { TouristicSiteDeleteById }