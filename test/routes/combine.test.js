const wreck = require('wreck');
const externals = require('../../src/routes/externals');

const { combine } = require('../../src/routes/combine');

describe('The combine handle should', () => {
  let allBooks = [];
  beforeAll((done) => {
    wreck.get(externals.allBooks)
      .then(books => combine(books))
      .then(promises => Promise.all(promises))
      .then((books) => {
        allBooks = books;
        done();
      });
  });

  it('return a json object with rating property', () => {
    expect(allBooks.length).toBeGreaterThan(0);
  });
  it('return a json object with rating property', () => {
    expect(allBooks[0].rating).toBeDefined();
  });
});
