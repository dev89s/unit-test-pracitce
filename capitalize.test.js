const capitalize = require('./capitalize');

test('capitalize test', () => {
  // Arrange
  const string = 'sasan moshirabadi';

  // Act
  const capitalized = capitalize(string);

  // Asses
  expect(capitalized).toBe('Sasan Moshirabadi');
})