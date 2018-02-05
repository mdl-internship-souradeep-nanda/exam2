// const combineAndSaveHandle = require('../../src/routes/combineAndSave').handle;
const server = require('../../src/index');
const models = require('../../models');

describe('The handler should', () => {
  beforeAll(() => {
    models.books.destroy({ truncate: true });
  });
  it('return 201, when entries are created', () => {
    const req = {
      method: 'GET',
      url: '127.0.0.1:8080/combineAndSave',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(201);
    });
  });
  it('return 200, when entries are not created', () => {
    const req = {
      method: 'GET',
      url: '127.0.0.1:8080/combineAndSave',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
    });
  });
});
