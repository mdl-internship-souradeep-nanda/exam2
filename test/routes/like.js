const likeHandle = require('../../src/routes/like').handle;
const models = require('../../models');

describe('When like is called it should', () => {
  beforeAll(() => {
    models.books.destroy({ truncate: true });
  });
  it('like if not already liked', () => {
    likeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(1);
    });
  });
  it('stay same if liked again', () => {
    likeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(1);
    });
  });
});
