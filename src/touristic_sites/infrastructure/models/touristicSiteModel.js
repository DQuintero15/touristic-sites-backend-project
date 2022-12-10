const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TouristicSiteSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true },
})

const TouristicSiteModel = mongoose.model("TouristicSites", TouristicSiteSchema)

module.exports = { TouristicSiteModel }