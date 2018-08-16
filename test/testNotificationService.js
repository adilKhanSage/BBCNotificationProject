const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../app');
const should = chai.should();
const username="user1";
const accessToken="accessToken1";
describe('Users', function() {

it('should register a SINGLE user on /bbc/api/v1/users POST', function(done) {
  chai.request(server)
    .post('/bbc/api/v1/users')
    .send({'username': username, 'accessToken': accessToken})
    .end(function(err, res){
      res.should.have.status(201);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('username');
      res.body.should.have.property('accessToken');
      res.body.should.have.property('creationTime');
      res.body.should.have.property('numOfNotificationsPushed');
	  res.body.username.should.equal('user1');
      res.body.accessToken.should.equal('accessToken1');
      res.body.numOfNotificationsPushed.should.equal(0);
      done();
    });
});

it('should list ALL users on /bbc/api/v1/users GET', function(done) {
  chai.request(server)
    .get('/bbc/api/v1/users')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body[0].should.be.a('object');
      res.body[0].should.have.property('username');
      res.body[0].should.have.property('accessToken');
      res.body[0].should.have.property('creationTime');
      res.body[0].should.have.property('numOfNotificationsPushed');
	  res.body[0].username.should.equal('user1');
      res.body[0].accessToken.should.equal('accessToken1');
      done();
    });
});

it('should Send a Notification to a user on /bbc/api/v1/notifications/{'+username+'} POST', function(done) {
  chai.request(server)
    .post('/bbc/api/v1/notifications/'+username+'')
    .end(function(err, res){
      res.should.have.status(201);
      done();
    });
});

});