# Sweater Weather
[Check it out!](https://young-refuge-34881-0294f9fc2b5b.herokuapp.com/)

<br />

## About The Project

Sweater Weather in Node.js is a weather API application following requirements [here](https://backend.turing.edu/module3/projects/sweater_weather/requirements).

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
![Heroku](https://img.shields.io/badge/Heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

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

 > > **Note:**
 > > - If you do not have node and npm installed, [here](https://mod0.turing.edu/computer-setup#install-node) is one resource you can use to get started.

<br />

_Follow the steps below to install and set up this app._

1. THIS REPO NEEDS A MAPQUEST API KEY AND A WEATHER API KEY. Get API Keys at:
   - [https://developer.mapquest.com/user/login/sign-up](https://developer.mapquest.com/user/login/sign-up)
   - [https://www.weatherapi.com/signup.aspx](https://www.weatherapi.com/signup.aspx)

  > > **Note:**
  > > - You will need to make an account and login before given an API key 
  > > - Mapquest API recently changed to $0.000045 per call 
  > > - Weather API is free
  > > - BOTH are required to run the application successfully

  <br />

3. Clone this Repository
   ```sh
   git clone git@github.com:kassandraleyba/sweater-weather-node.git
   ```
4. In your terminal, run the following commands:
    ```sh
    npm install
    ```
5. Add your Mapquest and Weather API key to the `.env` file
   ```.env
   MAPQUEST_API_KEY=enter_your_key
   WEATHER_API_KEY=enter_your_key
   ```
6. Run `node server.js` in your terminal and visit [http://localhost:3000/](http://localhost:3000/) to explore the end points for yourself!

<br />

### Testing

* This project utilizes mocha and chai testing
* After cloning this repo and following the steps above to install packages and API keys:
  * Run the entire test suite using the command `npx mocha test`

<br />

## Contributors:

<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/kassandraleyba" width="150" height="150"></td>
  </tr>
  <tr>
    <td>Kassandra Leyba</td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/kassandraleyba">GitHub</a> 
      <a href="https://www.linkedin.com/in/kassandra-leyba/">LinkedIn</a>
    </td>
  </tr>
</table>

<br />

## Acknowledgements
* ["The Best README Template" by Github User othneil](https://github.com/othneildrew/Best-README-Template)
