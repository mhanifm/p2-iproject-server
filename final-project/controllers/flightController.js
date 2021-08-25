const { Flight, User } = require('../models')

class FlightController {
    static async getAll(req, res, next) {
        try {
            const result = await Flight.findAll({
                include: [{
                    model: User,
                    attributes: {
                        exclude: [ "password", "createdAt", "updatedAt" ]
                    }
                }],
                order: [[ "id" ]]
            })
            res.status(200).json(result) 
        } catch (err) {
            next(err)
        }
    }

    static async findByPk(req, res) {
        const { id } = req.params
        try {
            const result = await Flight.findByPk(id)
            if (result) {
                res.status(200).json(result)
            } else throw ({ error : `not found` })
        } catch (err) {
            res.status(404).json(err)
        }
    }
    
    static async create(req, res, next) {
        // console.log(req)
        const { name, destination, price, imageUrl } = req.body
        try {
            const result = await Flight.create({ name, destination, price, imageUrl, authorId: req.user.id });
            console.log(result, "<<<<<<di result create>>>>")
            res.status(201).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async update(req, res, next) {
        const { name, destination, price, imageUrl, authorId } = req.body
        const { id } = req.params
        try {
            const flightEdit = await Flight.findByPk(id)
            if (flightEdit) {
                const result = await Flight.update({ name, destination, price, imageUrl, authorId }, { where: { id }, returning: true });
                res.status(200).json(result[1][0])
            } else {
                throw ({name: 'NotFound'})
            }
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params
        try {
            const flight = await Flight.findByPk(id)
            if (flight) {
                const result = await Flight.destroy({ where: { id } })
                res.status(200).json({ message: `ID ${id} has been deleted successfully` })
            } else {
                throw ({name: 'NotFound'})
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = FlightController