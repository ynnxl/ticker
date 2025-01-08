const SharesSchema = require("../models/SharesModel")


exports.addShares = async (req, res) => {
    const {ticker, amount, date} = req.body 

    const shares = SharesSchema({
        ticker,
        amount,
        date
    })
    try {
        if (!ticker || !amount || !date){
            return res.status(400).json({message: 'Something went wrong!'})
        }
        if (amount <=0 || !amount === 'number'){
            return res.status(400).json({message: 'Invalid amount input'})

        }
        await shares.save()
        res.status(200).json({message: 'Shares Added'})
    } catch (error){
        res.status(500).json({message: 'There was a problem'})
    }

    consol.log(shares);
}
exports.deleteShares = async (req, res) => {
    const {id} = req.params;

    SharesSchema.findByIdAndDelete(id)
        .then((shares) =>{
            res.status(200).json({message: 'Shares Removed'})
        })
}

exports.getShares = async (req, res) => {
    
    try {
        const shares = await SharesSchema.find().sort({createdAt: -1})
        res.status(200).json(shares)
        
    }catch(error) {
        res.status(500).json({message: 'Server Error'})
    }
}