const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
    let encodedAddress = encodeURIComponent(argv.a);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCT6nxqAPZ9gBcPgBNvGhUkb25m6zQyRiM`,
    json: true
}, (error, response, body) => {
    console.log(`Longitud: ${body.results[0].geometry.location.lat}`);
});