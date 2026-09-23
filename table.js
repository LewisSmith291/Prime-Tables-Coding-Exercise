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
  // Checks length of the bottom right number in grid
  // Primes are ascending, so last prime squared is always biggest
  const maxDigits = String(grid.at(-1).at(-1)).length;

  // Helper function for adding padding to start of number
  // if n is null, use "" instead
  const pad = (n) => String(n ?? "").padStart(maxDigits);

  // Helper function for generating .md formatted row
  const formatRow = (row) => "| " + row.map(pad).join(" | ") + " |";



}