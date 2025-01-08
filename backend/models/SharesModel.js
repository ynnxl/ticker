const mongoose = require('mongoose');

const SharesSchema = new mongoose.Schema({
    ticker: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    }, 
    amount: {
        type: Number,
        required: false,
        trim: true,
        maxLength: 6
    },
    date: {
        type: Date,
        required: false,
        trim: true,
        maxLength: 6
    }

}, {timestamps: true})

module.exports = mongoose.model('Shares', SharesSchema)