const combineHandle = require('../../src/routes/combine').handle;

describe('The handler should', () => {
  it('return a string', () => {
    expect(combineHandle()).toBe('OK');
  });
});
