const request = require('request')

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCT6nxqAPZ9gBcPgBNvGhUkb25m6zQyRiM`,
            json: true
        }, (error, response, body) => {
        
            if(error) {
                reject('Unable to connect to Google server');
            } else if(body.status === 'ZERO_RESULTS') { 
                reject('Unable to find that address');
            } else if(body.status === 'OK') {
                resolve( {
                    address: body.results[0].formatted_address,
                    latitud: body.results[0].geometry.location.lat,
                    longitud: body.results[0].geometry.location.lng
                })
            }    
        });
    })
};

geocodeAddress('0000000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
});