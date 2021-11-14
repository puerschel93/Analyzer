import rules from "../../styl";

describe('STYLUS - FOR', () => {
	test('for vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. valid for loop', () => {
		const str = 'for i in 1,2,3,4 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. valid for loop with range', () => {
		const str = 'for i in (1..5) '
		expect(str).toMatch(rules.for);
	})

	test('for vs. valid for loop with range with brace', () => {
		const str = 'for i in (1..5) {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. invalid misspelled for loop ', () => {
		const str = 'for i bin (1..5) {'
		expect(str).not.toMatch(rules.for);
	})

})