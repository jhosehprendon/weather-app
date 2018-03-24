const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyCT6nxqAPZ9gBcPgBNvGhUkb25m6zQyRiM',
    json: true
}, (error, response, body) => {
    console.log(`Longitud: ${body.results[0].geometry.location.lat}`);
});