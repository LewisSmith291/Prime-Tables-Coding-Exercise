// Given 'n', generates n+1 number of prime numbers, starting from 2
export function generatePrimes(n){
  // Input validation
  if (!Number.isInteger(n)) throw new TypeError(`Expected integer parameter, got ${n}`);
  if (n <= 0) throw new RangeError(`parameter must be above 0, got ${n}`);


}
console.log(generatePrimes(4.2));