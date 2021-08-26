const router = require('express').Router()
const airlineController = require('../controllers/infoAirlines')

router.get('/', airlineController.get)

module.exports = router