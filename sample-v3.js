
const axios = require('axios')

// An api key is emailed to you when you sign up to a plan
// Get a free API key at https://api.the-odds-api.com/
const api_key = process.argv[2] || 'YOUR_API_KEY'

const sport_key = 'upcoming' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const region = 'uk' // uk | us | eu | au

const market = 'h2h' // h2h | spreads | totals


/*
    First get a list of in-season sports
        the sport 'key' from the response can be used to get odds in the next request

*/
axios.get('https://api.the-odds-api.com/v3/sports', {
    params: {
        api_key: api_key
    }
})
.then(response => {
    console.log(response.data.data)
})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})


/*
    Now get a list of live & upcoming games for the sport you want, along with odds for different bookmakers

*/
axios.get('https://api.the-odds-api.com/v3/odds', {
    params: {
        api_key: api_key,
        sport: sport_key,
        region: region,
        mkt: market,
    }
})
.then(response => {
    // response.data.data contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(JSON.stringify(response.data.data))

    // Check your usage
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])

})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})
