import { Base64 } from "js-base64";

export function toBase64(text: string) {
	return Base64.toBase64(text);
}

export function fromBase64(text: string) {
	return Base64.fromBase64(text);
}
