import rules from "../../styl";

describe('STYLUS - ELSE', () => {
	test('else vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.else);
	})

	test('else vs. invalid else statement', () => {
		const str = 'else'
		expect(str).toMatch(rules.else);
	})
	
	test('else vs. invalid else statement with @ symbol', () => {
		const str = '} @else {'
		expect(str).not.toMatch(rules.else);
	})

	test('else vs. invalid else statement with condition', () => {
		const str = '} @else $value {'
		expect(str).not.toMatch(rules.else);
	})

	test('else vs. valid if statement with missing braces', () => {
		const str = '@else'
		expect(str).not.toMatch(rules.else);
	})

	test('else vs. invalid else statement ', () => {
		const str = 'else {'
		expect(str).toMatch(rules.else);
	})
})