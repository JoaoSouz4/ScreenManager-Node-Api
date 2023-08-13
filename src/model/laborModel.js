const mongoose = require('mongoose');

const LaborModel = new mongoose.Schema({
    laborValue: Number
});

const Labor = mongoose.model('labor', LaborModel);

module.exports = Labor