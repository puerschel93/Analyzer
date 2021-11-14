import rules from "../../scss";

describe('SCSS - ELSE', () => {
	test('else vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.else);
	})

	test('if vs. valid else statement', () => {
		const str = '} @else {'
		expect(str).toMatch(rules.else);
	})

	test('if vs. invalid else statement with condition', () => {
		const str = '} @else $value {'
		expect(str).not.toMatch(rules.else);
	})

	test('if vs. valid if statement with missing braces', () => {
		const str = '@else'
		expect(str).not.toMatch(rules.else);
	})

	test('if vs. invalid else statement ', () => {
		const str = '@else {'
		expect(str).not.toMatch(rules.else);
	})
})