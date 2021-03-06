const mongoose = require('mongoose')
const Schema = mongoose.Schema

const breadSchema = new Schema ({
    name: {type: String, required: true},
    tasty: Boolean,
    mouthfeel: {type: String, default: "moist"}
}, {
    timestamps: true
})

module.exports = mongoose.model("Bread", breadSchema)