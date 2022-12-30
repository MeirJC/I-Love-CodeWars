// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
// contain anything but exactly 4 digits or exactly 6 digits.
//
//   If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
//
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
//

//-------------------------------------------------
// Other methods to solve with no regex
// str = "123a"  or "12.4"
// Number(str !== NaN && (str.length === 4 || str.length === 6) && Number(str) === parseInt(str))
//-------------------------------------------------

function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("1234")) // true
console.log(validatePIN("12345")) // false
console.log(validatePIN("a234")) // false
console.log(validatePIN("1234a")) // false
console.log(validatePIN("123456")) // true
console.log(validatePIN("1234.6")) // false