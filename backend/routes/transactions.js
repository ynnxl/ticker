const { addShares } = require('../controllers/shares');

const router = require('express').Router()

router.post('/add-shares', addShares)

module.exports = router