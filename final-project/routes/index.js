const router = require('express').Router()
const userRouter = require('./users')
const flightRouter = require('./flights')
const weatherRouter = require('./weathers')
const airlineRouter = require('./airlines')

router.use('/', userRouter)
router.use('/flights', flightRouter)
router.use('/weathers', weatherRouter)
router.use('/airlines', airlineRouter)

module.exports = router