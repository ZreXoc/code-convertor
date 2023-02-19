export function toCharCode(s: string) {
	const result = [];
	for (let i = 0; i < s.length; i++) {
		result.push(s.charCodeAt(i));
	}
	return result.join(" ");
}

export function fromCharCode(s: string) {
	return s.replace(/[0-9]+/g, (code) => String.fromCharCode(+code));
}
