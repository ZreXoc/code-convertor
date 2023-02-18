import * as assert from "assert";
import { convertors } from "../../convertors";

suite("test convertors", () => {
	test("to char code", () => {
		assert.strictEqual("", convertors.toCharCode.convert(""));
		assert.strictEqual("48", convertors.toCharCode.convert("0"));
		assert.strictEqual("48 49", convertors.toCharCode.convert("01"));
		assert.strictEqual("48 32 49", convertors.toCharCode.convert("0 1"));
		assert.strictEqual("20320 22909", convertors.toCharCode.convert("你好"));
	});

	test("from char code", () => {
		assert.strictEqual("0", convertors.fromCharCode.convert("48"));
		assert.strictEqual("0 1", convertors.fromCharCode.convert("48 49"));
		assert.strictEqual("0\n1", convertors.fromCharCode.convert("48\n49"));
		assert.strictEqual("0, 1", convertors.fromCharCode.convert("48, 49"));
		assert.strictEqual("你 好", convertors.fromCharCode.convert("20320 22909"));
	});
});
