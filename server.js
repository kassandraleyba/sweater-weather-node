const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.json()); // middleware = parse JSON req

app.get('/', async (req, res) => {
  console.log('Request received');

  const location = 'Denver, CO';
  // const location = 'Austin, TX';

 

  try {
    const mapquestApiKey = process.env.MAPQUEST_API_KEY;
    const weatherApiKey = process.env.WEATHER_API_KEY;

    const mapquestApiUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${mapquestApiKey}&location=${location}`;
    const mapquestResponse = await axios.get(mapquestApiUrl);

    // lat + long from api
    const lat = mapquestResponse.data.results[0].locations[0].latLng.lat;
    const lng = mapquestResponse.data.results[0].locations[0].latLng.lng;

    console.log('Latitude:', lat);
    console.log('Longitude:', lng);

    // const jsonData = { latitude: lat, longitude: lng };
    // res.render('index', { jsonData });

    console.log('weather API Key:', weatherApiKey);

    const weatherApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${lat},${lng}`;
    const weatherResponse = await axios.get(weatherApiUrl);

    console.log('weather API Response:', weatherResponse.data);

    // data set
    const formattedResponse = {
      data: {
        id: null,
        type: 'forecast',
        attributes: {
          current_weather: {
            last_updated: new Date().toLocaleString(),
            temperature: weatherResponse.data.current.temp_f, 
            feels_like: weatherResponse.data.current.feelslike_f, 
            humidity: weatherResponse.data.current.humidity,
            uvi: weatherResponse.data.current.uvi,
            visibility: weatherResponse.data.current.vis_km,
            condition: weatherResponse.data.current.condition.text,
            icon: weatherResponse.data.current.condition.icon,
          },
          daily_weather: weatherResponse.data.forecast.forecastday
            .filter((item, index) => index < 5)
            .map((item) => ({
              date: item.date,
              sunrise: item.astro.sunrise,
              sunset: item.astro.sunset,
              max_temp: item.day.maxtemp_f, 
              min_temp: item.day.mintemp_f, 
              condition: item.day.condition.text,
              icon: item.day.condition.icon,
            })),
          hourly_weather: weatherResponse.data.forecast.forecastday[0].hour.map((item) => ({
            time: item.time,
            temperature: item.temp_f, 
            conditions: item.condition.text,
            icon: item.condition.icon,
          })),
        },
      },
    };

    // res.json(formattedResponse);
    console.log(formattedResponse)
    res.render('weather', { jsonData: formattedResponse, location });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});









app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
