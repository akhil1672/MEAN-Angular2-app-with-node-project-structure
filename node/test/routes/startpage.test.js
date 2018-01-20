let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../node-src/routes/startpage');
let should = chai.should();

chai.use(chaiHttp);

describe('/Home', function () {
    it('should return homepage', function () {
        chai.request(server).get('/').end((err, res) => {
            res.should.have.status(200);
            done();
        });
    })
})