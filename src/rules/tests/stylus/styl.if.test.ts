import rules from "../../styl";

describe('SCSS - IF STATEMENT', () => {
	test('if vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.if);
	})

	test('if vs. valid if statement', () => {
		const str = 'if value > 15px {'
		expect(str).toMatch(rules.if);
	})

	test('if vs. valid indeted if statement with single condition', () => {
		const str = '        if value > 15px'
		expect(str).toMatch(rules.if);
	})

	test('if vs. invalid if statement without condition', () => {
		const str = 'if value {'
		expect(str).toMatch(rules.if);
	})
})