export type Convertor = {
	name: string;
	description?: string;

	convert: (s: string, option?: Record<string, any>) => string;
	expect?: {
		fileExt?: (string | RegExp)[];
		match?:
			| string
			| RegExp
			| ((s: string, option: Record<string, any>) => boolean);
	};
};

export type Collections = {
	name: string;
	description: string;
	convertors: Convertor[];
};
