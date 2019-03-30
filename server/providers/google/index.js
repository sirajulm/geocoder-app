const request = require('request');
const config = require('./config');

// Provider should return response in valid format and throw error in other cases

function geocode(address) {
    // address should not be null or undefined
    return new Promise(function (resolve, reject) {
        const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.API_KEY}`;

        request(URL, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                const data = JSON.parse(body);
                if (data && data.results && data.results[0]) {
                    const responseData = {};
                    if (data.results[0].geometry) {
                        responseData['id'] = data.results[0].place_id;
                        responseData['address'] = data.results[0].formatted_address;
                        responseData['geometry'] = {
                            lat: data.results[0].geometry.location.lat,
                            lng: data.results[0].geometry.location.lng
                        }
                    }
                    resolve(responseData)
                } else {
                    reject(new Error('Empty results'))
                }

            }
        });
    });

}




module.exports = {
    geocode: geocode
}