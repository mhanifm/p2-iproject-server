const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        if(req.headers.access_token){
            const payload = verifyToken(req.headers.access_token)
            const foundUser = await User.findOne({
                where: {
                    email: payload.email
                }
            })
            if(foundUser){
                req.user = {
                    id: payload.id,
                    email: payload.email,
                    role: payload.role
                }
                next()
            } else {
                throw ({name: 'JsonWebTokenError'})
            }
        } else {
            throw ({name: 'JsonWebTokenError'})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authentication