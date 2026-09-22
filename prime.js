export function generatePrimes(n){
  // Input validation
  if (!Number.isInteger(n)) throw new TypeError(`Expected integer parameter, got ${n}`);
  if (n <= 0) throw new RangeError(`parameter must be above 0, got ${n}`)
}