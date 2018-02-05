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
});
