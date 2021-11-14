import rules from "../../less";

describe('LESS - EXTEND', () => {
	test('extend vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.extend);
	})

	test('extend vs. valid extension', () => {
		const str = '@:extend(.someClass);'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension without semicolon', () => {
		const str = '@:extend(.someClass);'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. invalid extension ', () => {
		const str = '@extend(.someClass, a);'
		expect(str).not.toMatch(rules.extend);
	})

	test('extend vs. valid extension without &', () => {
		const str = 'something:extend(.sampleClass all);'
		expect(str).toMatch(rules.extend);
	})
})