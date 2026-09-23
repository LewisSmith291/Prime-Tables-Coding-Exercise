import { generatePrimes } from "./prime"
import { buildTable, formatTable } from "./table"

export function parseN(raw){
  if (raw == null || String(raw).trim() === "") throw new TypeError(`n is required`);
  const n = Number(raw);
  if(!Number.isInteger(n)) throw new TypeError(`n must be a whole number, got: ${raw}`);
  if(n < 1) throw new RangeError(`n must be 1 or larger, got: ${raw}`);

  
}

try{

} catch (error){
  console.error(error.message);
  process.exitCode = 1;
}