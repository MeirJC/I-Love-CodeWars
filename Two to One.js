// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters -
// each taken only once - coming from s1 or s2.
//   Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//
//===============================================================================================

function longest(s1, s2) {
  let str = s1 + s2;
  let returnStr = "";
  for (let i = 0; i < str.length; i++) {
    if (returnStr.indexOf(str[i]) === -1) {
      returnStr += str[i];
    }
  }
  return returnStr.split("").sort().join("");
}
// longest("aretheyhere", "yestheyarehere")
console.log(longest("aretheyhere", "yestheyarehere"));
//==========================================================
// BETTER SOLUTIONS:
//   function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2)).sort().join('');
// }
//----------------------------------------------------------
// function longest(s1, s2) {
//   let str = new Set([...s1, ...s2]);
//   return [...str].sort().join('');
// }
//----------------------------------------------------------
