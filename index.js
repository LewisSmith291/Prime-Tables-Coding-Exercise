import { generatePrimes } from "./prime";
import { buildTable, formatTable } from "./table";
import { writeFileSync } from "node:fs";;

export function parseN(raw){
  // null input
  if (raw == null || String(raw).trim() === "") throw new TypeError(`n is required`);
  // n must be a whole number
  const n = Number(raw);
  if(!Number.isInteger(n)) throw new TypeError(`n must be a whole number, got: ${raw}`);
  // n must be larger than 0
  if(n <= 0) throw new RangeError(`n must be larger than 0, got: ${raw}`);

  // All checks passed
  return n;
}

try{

} catch (error){
  console.error(error.message);
  process.exitCode = 1;
}