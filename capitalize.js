/**
 * 
 * @param {String} string 
 * @returns {String}
 */
function capitalize(string) {
  let capitalized = string.toLowerCase();
  let words = capitalized.split(' ');
  words.forEach((word, index) => {
    words[index] = word[0].toUpperCase() + word.substring(1);
  });
  capitalized = words.join(' ');
  return capitalized;
}

module.exports = capitalize;