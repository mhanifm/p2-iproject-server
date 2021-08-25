const openWeatherApi = require('../apis/weathers')

class WeatherController {
    static get(req, res, next) {
        const city = req.query.city || 'jakarta'
        openWeatherApi.get('/find', {
            params: {
                q: city,
                cnt: 1
            }
        })
        .then(({ data }) => {
            res.status(200).json({ data: {
                name: data.list[0].name,
                weather: data.list[0].weather
                } 
            })
        })
        .catch(err => {
            console.log(err, '>>> err')
        })
    }
}

module.exports = WeatherController