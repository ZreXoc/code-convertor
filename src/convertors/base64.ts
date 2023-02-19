import { Base64 } from "js-base64";
import { fromBase64, toBase64 } from "../core/base64";
import { createConvertor } from "../utils/createConvertor";

export const toBase64Convertor = createConvertor({
	label: "to base64",
	convert: toBase64,
});

export const fromBase64Convertor = createConvertor({
	label: "from base64",
	convert: fromBase64,
	expect: {
		match: (text: string) => Base64.isValid(text),
	},
});
