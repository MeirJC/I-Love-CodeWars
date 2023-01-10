// A pangram is a sentence that contains every single letter of the alphabet at least
// once. For example, the sentence "The quick brown fox jumps over the lazy dog" is
// a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetSet = new Set(alphabet.split(""));
  let stringSet = new Set(string.toLowerCase().split(" ").join("").split(""));
  stringSet.forEach(letter => {
    if (alphabetSet.has(letter)) {
      alphabetSet.delete(letter);
    }
  });
  return alphabetSet.size === 0;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog"));