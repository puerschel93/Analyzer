import rules from "../../styl";

describe('STYLUS - FUNCTIONS', () => {
	test('function vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.function);
	})

	test('function vs. valid function', () => {
		const str = 'padding: add(a, b)'
		expect(str).toMatch(rules.function);
	})

})