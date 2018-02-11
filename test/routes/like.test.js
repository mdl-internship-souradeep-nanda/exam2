const likeHandle = require('../../src/routes/like').handle;
const models = require('../../models');

describe('When like is called it should', () => {
  beforeAll((done) => {
    models.books.destroy({ truncate: true });
    models.books.bulkCreate([
      {
        id: 1,
        name: 'name1',
        author: 'author1',
        rating: 5,
        like: 0,
      },
      {
        id: 2,
        name: 'name2',
        author: 'author2',
        rating: 5,
        like: 0,
      },
    ]).then(() => { done(); });
  });
  it('like if not already liked', (done) => {
    likeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(1);
      done();
    });
  });
  it('stay same if liked again', (done) => {
    likeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(1);
      done();
    });
  });
});
