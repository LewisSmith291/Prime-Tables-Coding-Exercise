import { generatePrimes } from "./prime.js";
import { buildTable, formatTable } from "./table.js";
import { writeFileSync } from "node:fs";
import {parseN} from "./input.js";

try{

  const n = parseN(process.argv[2]);
  console.log(`Generating Prime Multiplication Table with ${n} prime numbers...`);
  
  const primeNumbers = generatePrimes(n);
  const output = formatTable(buildTable(primeNumbers));

  writeFileSync("primeTable.md", output, "utf8");
  console.log(`Wrote ${n} x ${n} Prime Multiplication Table to primeTable.md`);

} catch (error){
  console.error(error.message);
  process.exitCode = 1;
}