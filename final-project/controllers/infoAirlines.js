const { response } = require('express')
const codeAirlinesApi = require('../apis/infoAirlines')

class AirlineController {
    static get (req, res, next) {
        const iata = req.query.iata || 'GA'
        codeAirlinesApi.get('/airline', {
            params: {
                iata_code: iata
            }
        })
        .then(response => {
            console.log(response)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err, '>>> err')
        })
    }
}

module.exports = AirlineController