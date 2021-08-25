const router = require('express').Router()
const flightController = require('../controllers/flightController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const uploadImg = require('../middlewares/multer')
const imgKit = require('../middlewares/imageKit')

router.use(authentication)
router.get('/', flightController.getAll)
router.get('/:id', flightController.findByPk)
router.post('/', uploadImg, imgKit, flightController.create)
router.put('/:id', authorization, uploadImg, imgKit, flightController.update)
router.delete('/:id', authorization, flightController.delete)

module.exports = router