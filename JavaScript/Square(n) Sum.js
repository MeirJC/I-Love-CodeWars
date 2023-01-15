// DESCRIPTION:
//   Complete the square sum function so that it squares each
//   number passed into it and then sums the results together.
//
//   For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

let arrOfNums = [1, 2, 2];

function squareSum(numbers) {
  let res = numbers.reduce((acc, curr) => {
    return acc + Math.pow(curr, 2);
  },0)
  return res;
}

console.log(squareSum(arrOfNums)); // 9