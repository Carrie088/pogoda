const https = require('https');

const API_KEY = 'a1c47b9ce9bf161e32bdbcce8e1f24ff'; 

function getWeather(city, country) {
    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=pl`;

        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                if (response.statusCode === 200) {
                    const weatherData = JSON.parse(data);

                    const weather = {
                        temperature: weatherData.main.temp,
                        description: weatherData.weather[0].description,
                        wind: weatherData.wind.speed,
                        feelslike: weatherData.main.feels_like,
                        city: weatherData.name,
                        country: weatherData.sys.country
                    };

                    resolve(weather);  
                } else {
                    reject(new Error('Błąd podczas pobierania pogody.'));
                }
            });
        }).on('error', (err) => {
            reject(new Error('Błąd połączenia z API.'));
        });
    });
}

module.exports = { getWeather };