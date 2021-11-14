import rules from "../../styl";

describe('STYLUS - VARIABLE', () => {
	test('variable vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.variable);
	})

	test('variable vs. valid variable (rgba color)', () => {
		const str = 'sample = rgba(255, 255, 255, 1);'
		expect(str).toMatch(rules.variable);
	})

})