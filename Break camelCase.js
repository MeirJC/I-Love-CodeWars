// Complete the solution so that the function will break up camel casing, using a space between words.
//   Example
//
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
  // [A-Z] matches any capital letter
  // g is a global search
  // $1 is the first group in the regex (the first capital letter)
  // " $1" (with added space between)
}

console.log(solution("camelCasing")); // "camel Casing"
console.log(solution("camelCasingFewWords")); // "camel Casing Few Words"
console.log(solution("identifier")); // "identifier"