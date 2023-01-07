// Description:
//
//   Given an array of integers, find the one that appears an odd number of times.
//
//   There will always be only one integer that appears an odd number of times.
//   Examples
//
//   [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  //happy coding!
  let oddNumber = 0;
  let itemCount = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        itemCount++;
      }
    }
    if (itemCount % 2 !== 0) {
      oddNumber = A[i];
    }
    itemCount = 0;
  }
  return oddNumber;
}

//great solution from CodeWars:
// comparing the number of times a number appears with reduce and the OR operator
// The exclusive OR (^) operator compares each bit of the first operand to the corresponding bit of the second operand.
// If the bits are the same, it returns 0. If the bits are different, it returns 1
//-------------------------------------------------
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
//-------------------------------------------------
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5