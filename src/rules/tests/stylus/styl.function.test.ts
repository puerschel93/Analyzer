import rules from "../../styl";

describe('STYLUS - FUNCTIONS', () => {
	test('function vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.function);
	})

	/** WILL BE PARSED BY AST */

})