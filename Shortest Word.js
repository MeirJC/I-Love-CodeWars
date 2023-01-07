// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return s.split(" ").map(word => word.length).sort((a, b) => a - b)[0];
  // "Hello, how are you my friend?" => ["Hello,", "how", "are", "you", "my", "friend?"]
  // => [6, 3, 3, 3, 2, 7] => [2, 3, 3, 3, 6, 7] => 2
}

console.log(findShort("Hello, how are you my friend?")) // 2