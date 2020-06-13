const assert = require('assert');
const fs = require('fs');

let employee = require('../controller/employee');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

// Test the view-employee route
describe('employee', () => {
    /* Test the /GET route  */
    describe('/GET employee', () => {
        it('it should GET all the employee', (done) => {
            chai.request(server)
                .get('/view_employee')
                .end((err, res) => {
                    console.log("API returned successful response");
                    res.should.have.status(200);
                    done();
                });
        });
    });
});

function iThrowError(msg) {
    throw new Error(msg);
}

// Test to check the package.json file
describe('check', function() {
    it('Check if package.json file exists or not', function(done) {
        const path = '././package.json';
        if (fs.existsSync(path)) {
            console.log("Package.json file is found");
            done();
        } else {
            assert.throw(iThrowError('Package.json file is not found'), Error, 'Error thrown');
        }
    })
});

// Test to check the swagger.json file
describe('checkswagger', function() {
    it('Check if swagger.json file exists or not', function(done) {
        const path = '././swagger/swagger.json';
        if (fs.existsSync(path)) {
            console.log("Swagger.json file is found");
            done();
        } else {
            assert.throw(iThrowError('Swagger.json file is not found'), Error, 'Error thrown');
        }
    })
});
