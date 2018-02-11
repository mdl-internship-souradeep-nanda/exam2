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
  it('return 201 and 200 when entries are not created and not created', (done) => {
    request('http://localhost:8080/combineAndSave', (error1, response1, body1) => {
      const myObj1 = JSON.parse(body1);
      expect(myObj1.statusCode).toBe(201);
      request('http://localhost:8080/combineAndSave', (error2, response2, body2) => {
        const myObj2 = JSON.parse(body2);
        expect(myObj2.statusCode).toBe(200);
        done();
      });
    });
  }, 20000);
});
