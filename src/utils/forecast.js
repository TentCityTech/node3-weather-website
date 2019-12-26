const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d7ed2f203ab84adee9437976c58c9939/' + latitude + ',' + longitude

    request ({url, json: true }, (error, { body }) => {
            if (error){
                callback('Unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, body.daily.data[0].summary  + ' It is currently ' + body.currently.temperature + ' out with a ' + body.currently.precipProbability + '% chance of rain ' + 'And a high of ' + body.daily.data[0].temperatureHigh + 'and a low of ' + body.daily.data[0].temperatureLow)

            }

    })
}

module.exports = forecast