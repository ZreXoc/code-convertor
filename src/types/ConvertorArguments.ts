interface Argument {
	type: string;
	name: string;
	description?: string;
}

interface Input extends Argument {
	type: "input";
	then: Argument[];
}

interface List extends Argument {
	type: "list";
	choice: { label: string; value: any; description?: string }[];
	switch?: {
		[key: string]: Argument;
	};
}

export type ConvertorArgument = Input | List;
