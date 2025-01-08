const { addShares } = require('../controllers/shares');

const router = require('express').Router()

router.post('/add-shares', addShares)

//router.get('')

module.exports = router