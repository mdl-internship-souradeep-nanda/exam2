const groupByKey = require('../../src/helper/groupByKey');

describe('The group function should', () => {
  it('group authors into an object', () => {
    const dummyBooks = [
      { name: 'n1', Author: 'a1' },
      { name: 'n2', Author: 'a2' },
      { name: 'n3', Author: 'a1' },
      { name: 'n4', Author: 'a2' },
    ];
    const groupedBooks = groupByKey(dummyBooks, 'Author');
    const expectedOutput = ['a1', 'a2'];
    expect(Object.keys(groupedBooks)).toEqual(expectedOutput);
  });
});
