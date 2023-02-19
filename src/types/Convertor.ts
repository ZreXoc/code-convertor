import { ConvertorArgument } from "./ConvertorArguments";

export type Convertor = {
	token: symbol;
	label: string;
	description?: string;

	convert: (s: string, option?: Record<string, any>) => string;
	expect?: {
		fileExt?: (string | RegExp)[];
		match?:
			| string
			| RegExp
			| ((s: string, option: Record<string, any>) => boolean);
	};
	args?: ConvertorArgument[];
};

export type Collections = {
	name: string;
	description: string;
	convertors: Convertor[];
};
