// DESCRIPTION:
//   Write a function to convert a name into initials.
//   This kata strictly takes two words with one space in between them.
//
//   The output should be two capital letters with a dot separating them.
//
//   It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

let name1 = "Sam Harris";
let name2 = "patrick feeney";

function abbrevName(name){
  let nameArr = name.split(" ");
  return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`;
}

console.log(abbrevName(name1));
console.log(abbrevName(name2));
