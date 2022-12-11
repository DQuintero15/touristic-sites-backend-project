const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TouristicSiteSchema = new Schema({
    uuid: { type: String, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    country: { type: String, required: true },
})

const TouristicSiteModel = mongoose.model("TouristicSites", TouristicSiteSchema)

module.exports = { TouristicSiteModel }