const router = require('express').Router()
const userRouter = require('./users')
const flightRouter = require('./flights')
const weatherRouter = require('./weathers')

router.use('/', userRouter)
router.use('/flights', flightRouter)
router.use('/weathers', weatherRouter)

module.exports = router