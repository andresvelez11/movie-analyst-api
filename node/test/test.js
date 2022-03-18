process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../serverAPI');
let should = chai.should();

chai.use(chaiHttp);

describe('API', () => {

/*
  * Test the /GET route
  */
  describe('/GET home', () => {
      it('Home is Working', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });

      it('Movies is Working', (done) => {
        chai.request(server)
            .get('/movies')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });

      it('Reviewers is Working', (done) => {
        chai.request(server)
            .get('/reviewers')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });

      it('Publications is Working', (done) => {
        chai.request(server)
            .get('/publications')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });


  });
    
});