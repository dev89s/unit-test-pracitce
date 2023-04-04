const stringLength = require('./stringLength');

test('String character length is working', () => {
  // Arrange
  const theString = '123';

  // Act
  const length = stringLength(theString);

  // Asses
  expect(length).toBe(3);
});

test('Throws the currect error', () => {
  // Arrange
  const theString = '';
  const secString = '12345678910';

  // Act
  const firstAsses = () => stringLength(theString);
  const secAsses = () => stringLength(secString);

  // Asses
  expect(firstAsses).toThrow(/^The string is less than 1 character long$/);
  expect(secAsses).toThrow(/^The string is more than 10 characters long$/);
});