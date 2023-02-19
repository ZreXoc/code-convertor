import * as assert from "assert";
import {
	fromCharCodeConvertor,
	toCharCodeConvertor,
} from "../../convertors/char-code";

suite("test convertors", () => {
	test("to char code", () => {
		assert.strictEqual("", toCharCodeConvertor.convert(""));
		assert.strictEqual("48", toCharCodeConvertor.convert("0"));
		assert.strictEqual("48 49", toCharCodeConvertor.convert("01"));
		assert.strictEqual("48 32 49", toCharCodeConvertor.convert("0 1"));
		assert.strictEqual("20320 22909", toCharCodeConvertor.convert("你好"));
	});

	test("from char code", () => {
		assert.strictEqual("0", fromCharCodeConvertor.convert("48"));
		assert.strictEqual("0 1", fromCharCodeConvertor.convert("48 49"));
		assert.strictEqual("0\n1", fromCharCodeConvertor.convert("48\n49"));
		assert.strictEqual("0, 1", fromCharCodeConvertor.convert("48, 49"));
		assert.strictEqual("你 好", fromCharCodeConvertor.convert("20320 22909"));
	});
});
