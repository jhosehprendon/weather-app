// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: "address",
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });
    
// 704166ba287072bf553537b514b77280

const request = require ('request');


request({
    url: 'https://api.darksky.net/forecast/704166ba287072bf553537b514b77280/37.67,-122.4233',
    json: true
}, (error, response, body) => {
    if(error) {
        console.log('Unable to connect to forecast server');
    } else if (response.satusCode === 400) {
        console.log('Unable to fetch weather');
    } else if(!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    }
});