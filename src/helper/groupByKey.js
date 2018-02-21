/**
 * Groups all books by their authors
 * @param {Object} allBooks
 */
function groupByKey(allBooks, key) {
  const groupedBooks = allBooks.reduce((acc, a) => {
    const r = acc;
    r[a[key]] = r[a[key]] || [];
    r[a[key]].push(a);
    return r;
  }, Object.create(null));
  return groupedBooks;
}

module.exports = groupByKey;
