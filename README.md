# Sweater Weather
[Check it out!](https://young-refuge-34881-0294f9fc2b5b.herokuapp.com/)

<br />

## About The Project

Sweater Weather in NodeJS is a weather API application following requirements [here](https://backend.turing.edu/module3/projects/sweater_weather/requirements).

The learning goals for this project are:

* Take Ruby concepts and build an API application in Node.js

<br />

## Built With

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/Axios-%2345B8D8.svg?style=for-the-badge&logo=axios&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-%23E74C3C.svg?style=for-the-badge&logo=ejs&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-%238D6748.svg?style=for-the-badge&logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-%23A30701.svg?style=for-the-badge&logo=chai&logoColor=white)

<br />

## Getting Started

### Prerequisites

* Node
  ```sh
  Node 16.15.1
  ```

* Npm
  ```sh
  Npm 9.6.4
  ```

<br />

_Follow the steps below to install and set up this app._

1. THIS REPO NEEDS A MAPQUEST API KEY AND A WEATHER API KEY. Get free API Keys at:
   - [https://developer.mapquest.com/documentation/geocoding-api/](https://developer.mapquest.com/documentation/geocoding-api/)
   - [https://www.weatherapi.com/](https://www.weatherapi.com/)

3. Clone this Repository
   ```sh
   git clone git@github.com:kassandraleyba/sweater-weather-node.git
   ```
4. In your terminal, run the following commands:
    ```sh
    npm install
    ```
5. Add your Mapquest and Weather Api key to the `.env` file
   ```.env
   MAPQUEST_API_KEY=enter_your_key
   WEATHER_API_KEY=enter_your_key
   ```
6. Run `node server.js` in your terminal and visit [http://localhost:3000/](http://localhost:3000/) to explore the end points for yourself!

<br />

### Testing

* This project utilizes mocha and chai testing
* After cloning this repo and following the steps above to install all necessary gems and API keys:
  * Run the entire test suite using the command `npx mocha test`

<br />

## Endpoints

### Retrieve weather for a city
#### GET /api/v0/forecast?location=denver,co
