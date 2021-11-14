import rules from "../../scss";

describe('SCSS - EXTEND', () => {
	test('extend vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.extend);
	})

	test('extend vs. valid extension', () => {
		const str = '@extend .someClass;'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension without semicolon', () => {
		const str = '@extend .someClass'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension with multiple inputs', () => {
		const str = '@extend .someClass, a'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension with multiple inputs with semicolon', () => {
		const str = '@extend .sampleClass, a'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. invalid extension', () => {
		const str = '@extend'
		expect(str).not.toMatch(rules.extend);
	})

	test('extend vs. valid extension with a non class or id based selector', () => {
		const str = '@extend a'
		expect(str).toMatch(rules.extend);
	})
})