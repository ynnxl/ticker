const mongoose = require('mongoose');

const SharesSchema = new mongoose.Schema({
    ticker: String,
    exchange: String,
    amount: Number,
    date: Date

}, {timestamps: true})

module.exports = mongoose.model('Shares', SharesSchema)