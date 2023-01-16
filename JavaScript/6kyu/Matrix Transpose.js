// DESCRIPTION:
//   Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.
//
//   For example, the transpose of:
//
// | 1 2 3 |
// | 4 5 6 |
//
// is
//
// | 1 4 |
// | 2 5 |
// | 3 6 |

//
// The input to your function will be an array of matrix rows.
// You can assume that each row has the same length, and that the height and width of the matrix are both positive.

const matrix1 = [[1,2,3],[4,5,6]];
const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];


// Using nested for loops
//=========================================================
// transpose = (matrix) => {
//   let returnMatrix = [];
//  for (let i = 0; i < matrix[0].length; i++) {
//    let newRow = [];
//    for (let j = 0; j < matrix.length; j++) {
//      newRow.push(matrix[j][i]);
//    }
//    returnMatrix.push(newRow);
//  }
//   return returnMatrix;
// }

// console.log(transpose(matrix1)) // [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
// console.log(transpose(matrix2)) //[ [ 1, 5, 9 ], [ 2, 6, 10 ], [ 3, 7, 11 ], [ 4, 8, 12 ] ]

//=========================================================
// Using map inside map
// transpose = (matrix) => {
//   return matrix[0].map((columns, i) => {
//     return matrix.map(row => row[i])
//   });
// }

function transpose(matrix) {
  return matrix[0].map((columns, i) => {
    return matrix.map(row => row[i])
  });
}


console.log(transpose(matrix1)) // [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
console.log(transpose(matrix2)) //[ [ 1, 5, 9 ], [ 2, 6, 10 ], [ 3, 7, 11 ], [ 4, 8, 12 ] ]
