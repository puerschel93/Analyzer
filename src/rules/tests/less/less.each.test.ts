import rules from "../../less";

describe('LESS - EACH', () => {
	test('each vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. valid each loop by variable', () => {
		const str = 'each(@set, {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. valid each loop by mixin', () => {
		const str = '  each(.set-2(), .(@v, @k, @i) {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. valid each loop by range', () => {
		const str = 'each(range(4), {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. misspelled each identifier', () => {
		const str = 'earch(range(4), {'
		expect(str).not.toMatch(rules.each);
	})
})