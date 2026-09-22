import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import { generatePrimes } from './prime.js'

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