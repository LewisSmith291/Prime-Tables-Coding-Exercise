import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import { generatePrimes, getUpperBound } from './prime.js'

describe("Testing generatePrimes(n) function", () => {
  describe("Input validation", () => {
    it("non whole number n throws TypeError", () => {
      assert.throws(() => generatePrimes("a"), TypeError);
      assert.throws(() => generatePrimes(true), TypeError);
      assert.throws(() => generatePrimes(4.5), TypeError);
    })
    it("n <= 0 throws RangeError", () => {
      assert.throws(() => generatePrimes(-5), RangeError);
      assert.throws(() => generatePrimes(0), RangeError);
    })

  })
})

describe("Testing getUpperBound(n) function", () => {
  it("n < 6 returns 12", () => {
    assert.strictEqual(getUpperBound(1), 12);
    assert.strictEqual(getUpperBound(3), 12);
    assert.strictEqual(getUpperBound(5), 12);
    assert.strictEqual(getUpperBound(0), 12);
    assert.strictEqual(getUpperBound(-10), 12);
  })
  it("n >= 6 returns appropriate limit", () => {
    const knownPrimes = [[6,13], [10,29], [100, 541], [1000, 7919]];
    for (const [n, nthPrime] of knownPrimes){
      assert.ok(getUpperBound(n) >= nthPrime, `upper bound for n=${n} should be >= ${nthPrime}`);
    }
  })
})