const SharesSchema = require("../models/SharesModel")


exports.addShares = async (req, res) => {
    const {title, amount, date} = req.body

    const shares = SharesSchema({
        title,
        amount,
        date,
    })
    try {
        if (!title || !amount || !date){
            return res.status(400).json({error: 'Something went wrong!'})
        }
    } catch (error){
        
    }


    consol.log(shares)
}