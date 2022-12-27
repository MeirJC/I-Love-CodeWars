// Description:
//
//   This time no story, no theory. The examples below show you how to write function accum:
//   Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  return s
    .split("")
    .map(
      (letter, idx) => letter.toUpperCase() + letter.toLowerCase().repeat(idx)
    )
    .join("-");
}

console.log(accum("someStr")); // S-Oo-Mmm-Eeee-Sssss-Tttttt-Rrrrrrr
