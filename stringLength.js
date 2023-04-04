/**
 * 
 * @param {String} string - String input
 * @returns {Number} Length of the string
 */
function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else if (string.length < 1) {
    throw new Error('The string is less than 1 character long');
  } else if (string.length > 10) {
    throw new Error('The string is more than 10 characters long');
  }
}

module.exports = stringLength;