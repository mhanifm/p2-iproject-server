const { Flight } = require('../models')

const authorization = async (req, res, next) => {
    const id = req.params.id
    try {
        const foundFlight = await Flight.findByPk(id)
        if (foundFlight) {
            console.log('ini authorization')
            console.log(req.user)
            if (req.user.role === 'admin') {
                next()
            } else {
                throw({ name: 'Forbidden' })
            }
        } else {
            throw({ name: 'NotFound' })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authorization