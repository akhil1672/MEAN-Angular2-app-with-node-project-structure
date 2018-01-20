let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../node-src/routes/routes');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET', function () {
    it('should return students', function () {
        chai.request(server).get('/api/students').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    })
})

describe('/POST', function () {
    it('should post student', function () {
        chai.request(server).get('/api/students').end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            done();
        })
    })
})