const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(express.json()); // middleware = parse JSON req

app.get('/', async (req, res) => {
  console.log('Request received');

  const locationQuery = req.query.location || "Denver, CO"; 
  const location = locationQuery.toUpperCase();
  
  try {
    const mapquestApiKey = process.env.MAPQUEST_API_KEY;
    const weatherApiKey = process.env.WEATHER_API_KEY;

    const mapquestApiUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${mapquestApiKey}&location=${location}`;
    const mapquestResponse = await axios.get(mapquestApiUrl);

    const lat = mapquestResponse.data.results[0].locations[0].latLng.lat;
    const lng = mapquestResponse.data.results[0].locations[0].latLng.lng;

    const weatherApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${lat},${lng}&days=5`;
    const weatherResponse = await axios.get(weatherApiUrl);
    
    const lastUpdated = new Date(weatherResponse.data.current.last_updated);
    const formattedLastUpdated = lastUpdated.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const formattedResponse = {
      data: {
        id: null,
        type: 'forecast',
        attributes: {
          current_weather: {
            last_updated: formattedLastUpdated,
            temperature: weatherResponse.data.current.temp_f, 
            feels_like: weatherResponse.data.current.feelslike_f, 
            humidity: weatherResponse.data.current.humidity,
            uv: weatherResponse.data.current.uv,
            visibility: weatherResponse.data.current.vis_miles,
            condition: weatherResponse.data.current.condition.text,
            icon: weatherResponse.data.current.condition.icon,
          },
          daily_weather: weatherResponse.data.forecast.forecastday
          
          .filter((item, index) => index < 5)
          .map((item) => {
            return {
              date: item.date,
              sunrise: item.astro.sunrise,
              sunset: item.astro.sunset,
              max_temp: item.day.maxtemp_f, 
              min_temp: item.day.mintemp_f, 
              condition: item.day.condition.text,
              icon: item.day.condition.icon,
            };
          }),
          hourly_weather: weatherResponse.data.forecast.forecastday[0].hour.map((item) => ({
            time: item.time,
            temperature: item.temp_f, 
            conditions: item.condition.text,
            icon: item.condition.icon,
          })),
        },
      },
    };

    if (req.query.json === 'true' || req.headers['accept'] === 'application/json') {
      res.json(formattedResponse); 
    } else {
      res.render('weather', { jsonData: formattedResponse, location });
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



module.exports = app;