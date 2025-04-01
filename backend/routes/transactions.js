const { addShares, getShares, deleteShares} = require('../controllers/shares');

const router = require('express').Router()

router.post('/add-shares', addShares)
    .get('/get-shares', getShares)
    .delete('/delete-shares/:id', deleteShares)

module.exports = router