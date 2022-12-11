const { TouristicSiteRepository } = require("../domain/TouristicSiteRepository")
const { TouristicSite } = require("../domain/TouristicSite")

/**
 * Create a new touristic site between repository
 */
class TouristicSiteCreator {

    /**
     * 
     * @param {TouristicSiteRepository} touristicSiteRepo 
     */
    constructor(touristicSiteRepo = new TouristicSiteRepository()) {
        this.touristicSiteRepo = touristicSiteRepo
    }

    /**
     * Async function to register a touristic site
     * @param {Object} param -  
     * @returns 
     */
    registerTouristicSite = async ({ name, description, country }) => {
        const newTouristicSite = new TouristicSite({ name, description, country })
        const touristicSiteCreated = await this.touristicSiteRepo.createTouristicSite(newTouristicSite)
        return touristicSiteCreated
    }
}

module.exports = { TouristicSiteCreator }