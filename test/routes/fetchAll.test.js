// const server = require('../../src/index');
// const models = require('../../models');

// const { fetchAll } = require('../../src/routes/fetchAll');

// describe('The fetchAll handle should', () => {
//   let allBooks = [];
//   beforeAll((done) => {
//     models.books.destroy({ truncate: true })
//       .then(() => {
//         models.books.bulkCreate([
//           {
//             author: 'J K Rowling',
//             name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
//             rating: 4.38,
//             likes: null,
//           }, {
//             author: 'Sidney Sheldon',
//             name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
//             rating: 4.02,
//             likes: null,
//           },
//         ]).then(() => {
//           server.start(() => {
//             console.log('Server running at:', server.info.uri);
//             fetchAll().then((books) => {
//               allBooks = books;
//             });
//             done();
//           });
//         })
//           .catch(err => console.error(err));
//       });
//   });

//   console.log(allBooks);

//   it('return a json object with author names', () => {
//     expect(Object.keys(allBooks)).toMatchSnapshot();
//   });
//   it('each author should have books array', () => {
//     expect(allBooks[Object.keys(allBooks)[0]].length).toBeGreaterThan(0);
//   });
//   it('books array should have rating property', () => {
//     expect(allBooks[Object.keys(allBooks)[0]][0].rating).toBeDefined();
//   });
//   it('books array should have like property', () => {
//     expect(allBooks[Object.keys(allBooks)[0]][0].like).toBeDefined();
//   });
// });
