// Given 'n', generates n number of prime numbers, starting from 2
// Uses sieve of Eratosthenes for algorithm
export function generatePrimes(n){
  // Input validation
  if (!Number.isInteger(n)) throw new TypeError(`Expected integer parameter, got ${n}`);
  if (n <= 0) throw new RangeError(`parameter must be above 0, got ${n}`);

  const limit = getUpperBound(n);

  // Initialise boolean list containing if numbers are composites
  const compositeList = new Array(limit + 1).fill(false);

  // Cross off composites
  // Go through each number p
  // If p has not been crossed off yet, it is prime, cross off all multiples of p
  for (let p = 2; p <= limit; p++){
    if (compositeList[p]) continue; // skip already crossed off numbers
    // Iterate through all multiples of p, starting at 2 * p
    for (let multiple = 2 * p; multiple <= limit; multiple += p) {
      // Change each multiple to true, as it can't be prime
      compositeList[multiple] = true;
    }
  }

  // Create output array
  const output = []
  // Start at i = 2 as 0 and 1 are not primes
  for (let i = 2; output.length < n; i++){
    // If false, add index to output array
    if (!compositeList[i]) output.push(i);
  }

  return output;
}

// This helper function generates an upper bound for the sieve to use
// Returns a number where the nth prime is guaranteed to be at or below
// Uses Rosser's theorem: for n >= 6: n(ln n + ln ln n)
export function getUpperBound(n){
  // Formula does not work for n < 6
  // 12 covers the first 5 primes
  if (n < 6){
    return 12;
  }
  // Formula is: n * (log(n) + log(log(n)))
  // Round up for usable index on array
  return Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));

}