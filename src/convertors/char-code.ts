import { Convertor } from "../types/Convertor";

export const toCharCode: Convertor = {
	name: "to char code",
	description: "",
	convert(s) {
		const result = [];
		for (let i = 0; i < s.length; i++) {
			result.push(s.charCodeAt(i));
		}
		return result.join(" ");
	},
};

export const fromCharCode: Convertor = {
	name: "from char code",
	description: "",
	convert(s) {
		return s.replace(/[0-9]+/g, (code) => String.fromCharCode(+code));
	},
	expect: {
		match: /[0-9]+/,
	},
};
