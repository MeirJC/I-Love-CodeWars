//This is an older solution before I began kepping track of my solutions
//If you might have the original question please let me know.
//
// but basically the function takes in 3 parameters
// hours, minutes, seconds and returns the total number of milliseconds

function past(hours, minutes, seconds){
  return (seconds*10**3+minutes*60*(10**3)+hours*(60**2)*(10**3));
}
console.log(past(1,2,3.2)); // 3723200