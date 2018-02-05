const wreck = require('wreck');
const externals = require('./externals');

function combine(allBooks) {
  const booksWithRatings = JSON.parse(allBooks.toString()).books;

  booksWithRatings.map((book) => {
    const bookCopy = book;
    bookCopy.rating = 5;
    return bookCopy;
  });

  return booksWithRatings;
}

function handle() {
  return wreck.get(externals.allBooks)
    .then(res => res.payload)
    .then(allBooks => combine(allBooks));
}
/*
(allBooks) => {
  allBooks.map(book => wreck.get(`${externals.findBook}/${book.id}`)
    .then((ratingObject) => {
      book.rating = ratingObject.rating;
    }));
};
*/
module.exports.handle = handle;

module.exports.route = {
  path: '/combine',
  method: 'GET',
  handler: (req, res) => {
    handle().then((allBooks) => {
      res(allBooks);
    });
  },
};
