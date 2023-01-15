// DESCRIPTION:
// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

export function even_or_odd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2));
console.log(even_or_odd(0));
console.log(even_or_odd(3));
