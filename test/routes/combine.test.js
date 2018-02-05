const combineHandle = require('../../src/routes/combine').handle;

describe('The handler should', () => {
  it('return a json object', (done) => {
    const promise = combineHandle();
    promise.then((res) => {
      const jsonObject = JSON.parse(res.payload.toString());
      expect(jsonObject.books.length > 0).toBeTruthy();
      done();
    });
  });
});
