/**
 * 
 * @param {String} string 
 * @returns {String}
 */
function reverseStr(string) {
  const rev = string.split('').reverse().join('');
  return rev;
}

module.exports = reverseStr;