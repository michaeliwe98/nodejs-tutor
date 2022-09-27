const request = require('postman-request');


const url = 'http://api.weatherstack.com/current?access_key=f5f0bb08de6f91e1e8d681ffa99308b4&query=37.8267,-122.4233';
const urlErr = 'http://api.weatherstack.com/current?access_key=f5f0bb08de6f91e1e8d681ffa99308b4&query=';
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Cant connect to api.weatherstack.com');
    } else if (response.body.error) {
        console.log(response.body.error.info);
    } else {
        const data = response.body.current
        console.log(`Its currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out`);
    }
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bandung.json?access_token=pk.eyJ1IjoibWljaGFlbGl3ZSIsImEiOiJjbDViN2M2ODYwNHMxM2lzMDk0YW16OWozIn0.Q-VM0HlzFJq4f7jLmvFLbA';
const geoUrlErr = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bandung123123.json?access_token=pk.eyJ1IjoibWljaGFlbGl3ZSIsImEiOiJjbDViN2M2ODYwNHMxM2lzMDk0YW16OWozIn0.Q-VM0HlzFJq4f7jLmvFLbA';
request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Cant connect to api.mapbox.com');
    } else if (response.body.features.length === 0 ) {
        console.log('Location not found!')
    } else {
        const data = response.body.features[0].center
        console.log('Lat', data[0])
        console.log('Long', data[1])
    }
})
