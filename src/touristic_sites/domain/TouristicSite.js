const uuid = require("uuid")

/**
 * Touristic site class
 */
class TouristicSite {
    /**
     * 
     * @param {String} name - Site name
     * @param {String} description - Site description
     * @param {String} country - Site country location
     */
    constructor({ name, description, country }) {
        this.uuid = uuid.v4()
        this.name = name
        this.description = description || "No presenta descripcion"
        this.country = country
    }
}

module.exports = TouristicSite