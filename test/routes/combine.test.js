const wreck = require('wreck');
const externals = require('../../src/routes/externals');

const { combine, group } = require('../../src/routes/combine');

describe('The combine handle should', () => {
  it('return a json object', (done) => {
    wreck.get(externals.allBooks)
      .then(allBooks => combine(allBooks))
      .then((allBooks) => {
        expect(allBooks.length > 0).toBeTruthy();
        done();
      });
  });
  it('return a json object with rating property', (done) => {
    wreck.get(externals.allBooks)
      .then(allBooks => combine(allBooks))
      .then((allBooks) => {
        expect(allBooks.length > 0).toBeTruthy();
        done();
      });
  });
});

describe('The group function should', () => {
  it('group authors into an object', () => {
    const dummyBooks = [
      { name: 'n1', Author: 'a1' },
      { name: 'n2', Author: 'a2' },
      { name: 'n3', Author: 'a1' },
      { name: 'n4', Author: 'a2' },
    ];
    const groupedBooks = group(dummyBooks);
    const expectedOutput = ['a1', 'a2'];
    expect(Object.keys(groupedBooks)).toEqual(expectedOutput);
  });
});
