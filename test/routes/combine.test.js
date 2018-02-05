const combineHandle = require('../../src/routes/combine').handle;

describe('The handler should', () => {
  it('return a json object', (done) => {
    const promise = combineHandle();
    promise.then((allBooks) => {
      expect(allBooks.length > 0).toBeTruthy();
      done();
    });
  });
  it('return a json object with rating property', (done) => {
    const promise = combineHandle();
    promise.then((allBooks) => {
      allBooks.map((book) => {
        expect(book.rating).toBeTruthy();
        return book;
      });
      done();
    });
  });
});
