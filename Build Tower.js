// Build a pyramid-shaped tower, as an array/list of strings,
// given a positive integer number of floors. A tower block is represented with "*" character.
//
//   For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
//
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }

function towerBuilder(nFloors) {
  let tower = [];
  for (let i=0; i<nFloors; i++) {
    let floor = " ".repeat(nFloors-i-1)+"*".repeat(2*i+1)+" ".repeat(nFloors-i-1);
    tower.push(floor);
  }
  return tower;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(4));
console.log(towerBuilder(5));