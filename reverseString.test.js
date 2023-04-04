const reverseStr = require('./reverseString');

test('reverse string', () => {
  // Arrange
  const string = 'Hi!';

  // Act
  const rev = reverseStr(string);

  // Asses
  expect(rev).toBe('!iH');
});