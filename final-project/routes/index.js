const router = require('express').Router()
const userRouter = require('./users')
const weatherRouter = require('./weathers')

router.use('/', userRouter)
router.use('/weathers', weatherRouter)

module.exports = router