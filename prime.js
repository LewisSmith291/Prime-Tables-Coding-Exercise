// Given 'n', generates n number of prime numbers, starting from 2
export function generatePrimes(n){
  // Input validation
  if (!Number.isInteger(n)) throw new TypeError(`Expected integer parameter, got ${n}`);
  if (n <= 0) throw new RangeError(`parameter must be above 0, got ${n}`);

  const output = [];

  return output;
}

// This helper function generates an upper bound for the sieve to use
// Returns a number where the nth prime is guaranteed to be at or below
// Uses Rosser's theorem: for n >= 6: n(ln n + ln ln n)
export function getUpperBound(n){
  // Formula does not work for n < 6
  if (n < 6){
    return 12;
  }
  // Formula is: n * (log(n) + log(log(n)))
  // Round up for usable index on array
  return Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));

}