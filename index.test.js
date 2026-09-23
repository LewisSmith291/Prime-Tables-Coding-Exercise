import assert from 'node:assert/strict';
import {describe, it} from 'node:test';
import { parseN } from './index.js';

describe("Testing parseN(raw) function", () => {
  describe("Input validation", () =>{
    it("Type checks", () =>{
      assert.throws(() => parseN("a"), TypeError);
      assert.throws(() => parseN("   "), TypeError);
      assert.throws(() => parseN(""), TypeError);
      assert.throws(() => parseN("123abc"), TypeError);
      assert.throws(() => parseN("4.2"), TypeError);
      assert.throws(() => parseN(null), TypeError);
      assert.throws(() => parseN(undefined), TypeError);
    });
    it("Range checks", () =>{
        assert.throws(() => parseN("0"), RangeError);
        assert.throws(() => parseN("-5"), RangeError);
        assert.doesNotThrow(() => parseN("1"));
    })
  });
  describe("Output tests", () => {
    assert.strictEqual(parseN("1"), 1);
    assert.strictEqual(parseN("10"), 10);
    assert.strictEqual(parseN("100"), 100);
    assert.strictEqual(parseN("1000"), 1000);
  })
});