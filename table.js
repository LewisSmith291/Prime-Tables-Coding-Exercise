// Takes an array of numbers, and returns a 2d array of numbers
// The 2d array output is a multiplication table of all the primes in the input array
export function buildTable(primes){
  if (primes.length === 0) throw new RangeError(`primes array must not be empty`);
  const output = [[null, ...primes]]; // Header row

  // Iterate through all the prime numbers
  primes.forEach(prime => {
    // Add base prime to begining of row
    // primes.map produces an array of p (all primes) * prime (current prime in foreach)
    const row = [prime, ...primes.map((p) => p * prime)];
    output.push(row);
  });
  return output;
}

// Takes a 2d array as input, and outputs a string of the table, formatted for a .md file
export function formatTable(grid){

}