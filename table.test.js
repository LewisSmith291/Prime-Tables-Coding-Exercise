import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import { buildTable, formatTable } from './table.js'

describe("Testing buildTable(primes) function", () => {
  describe("Input validation", () => {
    it("empty array input throws RangeError", () => {
      assert.throws(() => buildTable([]), RangeError);
    })
  })
  describe("Output tests", () => {
    it("base case of [2]", () => {
      assert.deepStrictEqual(buildTable([2]), [[null, 2], [2,4]]);
    })
    it("output of primes=[2,3,5] is correct", () =>{
      const expected = [
        [null, 2,3,5], 
        [2,4,6,10],
        [3,6,9,15],
        [5,10,15,25]
      ];
      assert.deepStrictEqual(buildTable([2,3,5]), expected);
    })
    it("grid size is (N+1) x (N+1)", () =>{
      const grid = buildTable([2, 3, 5]);
      assert.strictEqual(grid.length, 4); // rows
      for (const row of grid) assert.strictEqual(row.length, 4); // cols
    })
  })
})

describe("Testing formatTable(grid) function", () => {
  describe("Output tests", () => {
    it("n=3 ([2,3,5]) should produce 4x4 multiplication grid", () =>{
      const expected = [
        '|    |  2 |  3 |  5 |',
        '| -- | -- | -- | -- |',
        '|  2 |  4 |  6 | 10 |',
        '|  3 |  6 |  9 | 15 |',
        '|  5 | 10 | 15 | 25 |'
      ].join('\n');
      assert.strictEqual(formatTable(buildTable([2,3,5])), expected);
    });
    it("Testing each line is same length", () => {
      // These inputs give a mix of 1/2/3 digit numbers
      const lines = formatTable(buildTable([2,3,5,7,11])).split("\n");
      const length = lines[0].length;
      lines.forEach((line) => assert.strictEqual((line.length), length));
    })
  })
})