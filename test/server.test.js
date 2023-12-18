const chai = require('chai'); 
const chaiHttp = require('chai-http'); // for API testing
const app = require('../server.js'); 

chai.use(chaiHttp);

const expect = chai.expect;


describe('GET /', () => {
  it('should return a status code of 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done(); // for async operations
      });
  });

  it('should return forecast object with specific keys', (done) => {
    chai.request(app)
    .get('/?json=true')

      .end((err, res) => {
        expect(res).to.have.status(200);

        expect(res.body).to.exist;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('object');
  
        // current
        let currentWeather = res.body.data.attributes.current_weather;
        expect(currentWeather).to.be.an('object');
        expect(currentWeather).to.have.property('last_updated');
        expect(currentWeather).to.have.property('temperature');
        expect(currentWeather).to.have.property('feels_like');
  
        // daily
        let dailyWeather = res.body.data.attributes.daily_weather;
        expect(dailyWeather).to.be.an('array');
        expect(dailyWeather[0]).to.have.property('date');
        expect(dailyWeather[0]).to.have.property('sunrise');
        expect(dailyWeather[0]).to.have.property('sunset');
  
        // hourly
        let hourlyWeather = res.body.data.attributes.hourly_weather;
        expect(hourlyWeather).to.be.an('array');
        expect(hourlyWeather[0]).to.have.property('time');
        expect(hourlyWeather[0]).to.have.property('temperature');
        expect(hourlyWeather[0]).to.have.property('conditions');
  
        done();
      });
  });  
});

describe('GET / header checks', () => {
  it('should contain correct content-type header for JSON response', (done) => {
    chai.request(app)
      .get('/?json=true') 
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', /json/);
        done();
      });
  });
});