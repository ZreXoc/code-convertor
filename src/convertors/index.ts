import { Convertor } from "../types/Convertor";
import { toCharCodeConvertor, fromCharCodeConvertor } from "./char-code";
import { toBase64Convertor, fromBase64Convertor } from "./base64";

export const convertors: Record<string, Convertor> = {
	toCharCodeConvertor,
	fromCharCodeConvertor,
	toBase64Convertor,
	fromBase64Convertor,
};