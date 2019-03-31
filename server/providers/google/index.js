const request = require('request');
const config = require('./config');

function geocode(address) {
    return new Promise(function (resolve, reject) {
        const components = `country:${config.RESTRICT_COUNTRY}`;
        const URL = `${config.GOOGLE_GEOCODE_JSON_API}?address=${address}&key=${config.API_KEY}`;

        console.log(URL)
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
                    const e = new Error('Empty results');
                    e.name = "EmptyError";
                    reject(e)
                }

            }
        });
    });

}




module.exports = {
    geocode: geocode
}