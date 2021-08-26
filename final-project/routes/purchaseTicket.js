const router = require('express').Router()
const purchaseTicketController = require('../controllers/purchaseTicket')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', purchaseTicketController.getAll)
router.post('/:id', purchaseTicketController.create)

module.exports = router