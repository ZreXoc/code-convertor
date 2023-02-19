import { Convertor } from "../types/Convertor";

export function createConvertor(options: Omit<Convertor, "token">): Convertor {
	const { label: name } = options;
	return {
		token: Symbol(name),
		...options,
	};
}
