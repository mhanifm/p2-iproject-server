const { PurchaseTicket, User, Flight } = require('../models')

class PurchaseTicketController {
    static async getAll(req, res, next) {
        const { id } = req.user
        try {
            const result = await PurchaseTicket.findAll({
                where: {
                    userId: id
                },
                include: [{
                    model: Flight,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },{
                    model: User,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"]
                    }
                }]
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        const flightId = req.params.id
        const userId = req.user.id
        try {
            const purchase = await PurchaseTicket.create({ flightId, userId })
            res.status(201).json(purchase)

        } catch (err) {
            next(err)
        }
    }
}

module.exports = PurchaseTicketController