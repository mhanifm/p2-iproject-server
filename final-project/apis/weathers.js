const axios = require('axios')

const openWeatherApi = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '5016d71829mshcb098cacbe76d2ap121972jsn80e8f6d6b237'
    }
})

module.exports = openWeatherApi