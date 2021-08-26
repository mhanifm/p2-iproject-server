const axios = require('axios')

const codeAirlinesApi = axios.create({
    baseURL: 'https://iata-and-icao-codes.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'iata-and-icao-codes.p.rapidapi.com',
        'x-rapidapi-key': '5016d71829mshcb098cacbe76d2ap121972jsn80e8f6d6b237'
    }
})

module.exports = codeAirlinesApi