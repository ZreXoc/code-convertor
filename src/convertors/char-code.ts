import { fromCharCode, toCharCode } from "../core/char-code";
import { Convertor } from "../types/Convertor";
import { createConvertor } from "../utils/createConvertor";

export const toCharCodeConvertor = createConvertor({
	label: "to char code",
	convert: toCharCode,
});

export const fromCharCodeConvertor = createConvertor({
	label: "from char code",
	convert: fromCharCode,
	expect: {
		match: /[0-9]+/,
	},
	args: [
		{
			type: "list",
			name: "withSpace",
			choice: [
				{
					label: "no space",
					value: false,
				},
				{
					label: "split with space",
					value: true,
				},
			],
		},
	],
});
