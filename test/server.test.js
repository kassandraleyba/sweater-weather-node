const chai = require('chai'); 
const chaiHttp = require('chai-http'); // for API testing
const app = require('../server.js'); 
// const nock = require('nock');

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

  // it('should return the correct data'), (done) => {
  //   chai.request(app)
  //   .get('/')
  //   .end((err, res) => {
      
  //   })
  // }
});