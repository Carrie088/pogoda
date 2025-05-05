const express = require('express');
const fs = require('fs');
const { getWeather } = require('./weather');  
const app = express();
const port = 8080;

const logData = `
Data uruchomienia: ${new Date().toLocaleString('pl-PL')}
Autor: Natalia Jung
Nasłuchuje na porcie: ${port}
\n`;

fs.appendFileSync('log.txt', logData);

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
        return res.status(400).json({ error: 'Proszę podać miasto i kraj' });
    }

    try {
        const weather = await getWeather(city, country);
        res.json(weather);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Aplikacja nasłuchuje na porcie ${port}`);
});
