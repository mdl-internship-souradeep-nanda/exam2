const wreck = require('wreck');
const externals = require('./externals');

/**
 * Combines all books with their corresponding ratings
 * into a single JSON object
 * @param {Object} allBooks
 * @return {Promise}
 */
function combine(allBooks) {
  // Parse the response into a JSON object
  const booksWithRatings = JSON.parse(allBooks.payload.toString()).books;

  // Get the rating for each book
  return booksWithRatings.map((book) => {
    const bookCopy = book;

    // HTTP request string for the server
    const requestString = `${externals.findBook}${book.id}`;

    // When the server replies, modify the book object
    // and return it
    return wreck.get(requestString).then((res) => {
      const ratingObj = JSON.parse(res.payload.toString());
      bookCopy.rating = ratingObj.rating;
      return bookCopy;
    });
  });
}

/**
 * Groups all books by their authors
 * @param {Object} allBooks
 */
function groupByAuthor(allBooks) {
  const groupedBooks = allBooks.reduce((acc, a) => {
    const r = acc;
    r[a.Author] = r[a.Author] || [];
    r[a.Author].push(a);
    return r;
  }, Object.create(null));
  return groupedBooks;
}

/**
 * Returns a promise which has an object containing
 * all books with their ratings
 * @return {Object}
 */
function handle() {
  return wreck.get(externals.allBooks) // Get all books from server
    .then(allBooks => combine(allBooks)) // Combine ratings
    .then(allPromises => Promise.all(allPromises))
    .then(allBooks => groupByAuthor(allBooks)); // Wait for resolution
}
module.exports.handle = handle;
module.exports.combine = combine;
module.exports.group = groupByAuthor;

module.exports.route = {
  path: '/combine',
  method: 'GET',
  handler: (req, res) => {
    handle().then((allBooks) => {
      res(allBooks);
    });
  },
};
