const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        const { email, password } = req.body
        try {
            const result = await User.create({ email, password, role: 'customer' })
            const access_token = signToken({ id: result.id, email: result.email, role: result.role})
            res.status(201).json({ id: result.id, email: result.email, role: result.role, access_token })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body
        try {
            const result = await User.findOne({ where: { email } })
            if(result) {
                const compare = checkPassword(password, result.password)
                if(compare){
                    const access_token = signToken({ id: result.id, email: result.email, role: result.role})
                    res.status(200).json({ access_token })
                } else {
                    throw ({ name: 'Unauthorized' })
                }
            } else {
                throw ({ name: 'Unauthorized' })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController