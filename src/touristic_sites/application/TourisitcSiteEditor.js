const { TouristicSiteRepository } = require("../domain/TouristicSiteRepository")


class TouristicSiteEditor {
    constructor(touristicSiteRepository = new TouristicSiteRepository()) {
        this.touristicSiteRepository = touristicSiteRepository
    }
    
    updateTouristicSite = async (uuid, data) => {
        const touristicSiteUpdated = await this.touristicSiteRepository.updateTouristicSite(uuid, data)
        return touristicSiteUpdated
    }
}

module.exports = { TouristicSiteEditor }