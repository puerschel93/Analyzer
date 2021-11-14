import rules from "../../less";

describe('LESS - IF STATEMENT', () => {
	test('if vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.if);
	})

	test('if vs. valid if statement', () => {
		const str = '.sample(@condition, @argument1) when (@condition = true) {'
		expect(str).toMatch(rules.if);
	})

	test('if vs. valid if statement with multiple arguments', () => {
		const str = '.sample(@condition, @argument1, argument2) when (@condition = true) {'
		expect(str).toMatch(rules.if);
	})

	test('if vs. valid if statement with multiple conditions', () => {
		const str = '.sample(@condition1, @condition2, argument1) when (@condition1 = true && @condition2 = false) {'
		expect(str).toMatch(rules.if);
	})

	test('if vs. invalid if statement without parameters', () => {
		const str = 'if when (@condition = true) {'
		expect(str).not.toMatch(rules.if);
	})
})