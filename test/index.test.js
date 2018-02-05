const server = require('../src/index');

describe('200 response should be given by API endpoint', () => {
  it('/combine', () => {
    const req = {
      method: 'GET',
      url: '127.0.0.1:8080/combine',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
    });
  });
  it('/combineAndSave', () => {
    const req = {
      method: 'GET',
      url: '127.0.0.1:8080/combineAndSave',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
    });
  });
  it('/like/1', () => {
    const req = {
      method: 'GET',
      url: '127.0.0.1:8080/like/1',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
    });
  });
  it('/unlike/1', () => {
    const req = {
      method: 'GET',
      url: '127.0.0.1:8080/unlike/1',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
    });
  });
});
