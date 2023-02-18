import { Convertor } from "../types/Convertor";
import { toCharCode, fromCharCode } from "./char-code";

export const convertors: Record<string, Convertor> = {
	toCharCode,
	fromCharCode,
};
