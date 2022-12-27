// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array
// (true means present).
//
// For example,
//
//   [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

let sheepArr = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]

function countSheeps(arr) {
 let count = 0;
    arr.forEach((sheep) => {sheep === true && count++});
    return count;
}

console.log(countSheeps(sheepArr)); // 17

// Clever solution ive seen after submitting my own:
// check out how COOL is it! 😲
//=======================================================
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
//=======================================================