// const combineAndSaveHandle = require('../../src/routes/combineAndSave').handle;
const server = require('../../src/index');
const models = require('../../models');

const request = require('request');

describe('The handler should', () => {
  beforeAll((done) => {
    models.books.destroy({ truncate: true })
      .then(msg => console.log(msg))
      .catch(err => console.error(err));
    server.start(() => {
      console.log('Server running at:', server.info.uri);
      done();
    });
  });
  afterAll((done) => {
    server.stop(() => {
      done();
    });
  });
  it('return 201, when entries are created', (done) => {
    request('http://localhost:8080/combineAndSave', (error, response, body) => {
      const myObj = JSON.parse(body);
      expect(myObj.statusCode).toBe(201);
      done();
    });
  });
  it('return 200, when entries are not created', (done) => {
    request('http://localhost:8080/combineAndSave', (error, response, body) => {
      const myObj = JSON.parse(body);
      expect(myObj.statusCode).toBe(200);
      done();
    });
  });
});
