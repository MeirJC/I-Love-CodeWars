// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
  let arr = str.toLowerCase().split('');
  let set = new Set(arr);
  return arr.length === set.size;
}

let str1 = "Dermatoglyphics";
let str2 = "moose";
let str3 = "aba";

console.log(isIsogram(str1));
console.log(isIsogram(str2));
console.log(isIsogram(str3));