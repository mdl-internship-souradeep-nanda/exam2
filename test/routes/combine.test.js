const wreck = require('wreck');
const externals = require('../../src/routes/externals');

const { combine, group } = require('../../src/routes/combine');

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
