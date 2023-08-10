const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const ScreenModel = new Schema({
    name: String,
    brand: String,
    prices: {
        parallel: Number,
        medium: Number,
        firstLine: Number,
    },
    description: String,
})

const Screen = mongoose.model('screnn', ScreenModel);

module.exports = Screen;