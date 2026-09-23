export const N_LIMIT = 1000;

export function parseN(raw){
  // null input
  if (raw == null || String(raw).trim() === "") throw new TypeError(`n is required`);
  // n must be a whole number
  const n = Number(raw);
  if(!Number.isInteger(n)) throw new TypeError(`n must be a whole number, got: ${raw}`);
  // n must be larger than 0
  if(n <= 0 || n > N_LIMIT) throw new RangeError(`n must be between 1 and ${N_LIMIT} (inclusive) got: ${raw}`);

  // All checks passed
  return n;
}
