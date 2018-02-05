const unlikeHandle = require('../../src/routes/unlike').handle;
const models = require('../../models');

describe('When like is called it should', () => {
  beforeAll(() => {
    models.books.destroy({ truncate: true });
  });
  it('like if not already liked', () => {
    unlikeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(0);
    });
  });
  it('stay same if liked again', () => {
    unlikeHandle(1).then(() => models.books.findOne({
      where: {
        id: 1,
      },
    })).then((book) => {
      expect(book.likes).toBe(0);
    });
  });
});
