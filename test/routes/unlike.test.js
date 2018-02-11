const unlikeHandle = require('../../src/routes/unlike').handle;
const models = require('../../models');

describe('When unlike is called it should', () => {
  beforeAll((done) => {
    models.books.destroy({ truncate: true });
    models.books.bulkCreate([
      {
        id: 1,
        name: 'name1',
        author: 'author1',
        rating: 5,
        like: 1,
      },
      {
        id: 2,
        name: 'name2',
        author: 'author2',
        rating: 5,
        like: 1,
      },
    ]).then(() => { done(); });
  });
  it('unlike the book', (done) => {
    unlikeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(0);
      done();
    });
  });
  it('stay same if unliked again', (done) => {
    unlikeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(0);
      done();
    });
  });
});
