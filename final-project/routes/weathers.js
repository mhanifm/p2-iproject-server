const router = require('express').Router()
const weatherController = require('../controllers/weathers')

router.get('/', weatherController.get)

module.exports = router