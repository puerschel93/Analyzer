import rules from "../../scss";

describe('SCSS - FUNCTIONS', () => {
	test('function vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.function);
	})

	test('function vs. valid function', () => {
		const str = '@function sample() {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function name in kebabcase', () => {
		const str = '@function sample-function() {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function name in snakecase', () => {
		const str = '@function sample_function() {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with space', () => {
		const str = '@function sample () {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with one argument', () => {
		const str = '@function sample($sample) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with space with one argument', () => {
		const str = '@function sample ($sample) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with one argument with default value', () => {
		const str = '@function sample($sample = 15px) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with space with one argument with default value', () => {
		const str = '@function sample ($sample = 15px) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function without parenthesis', () => {
		const str = '@function sample {'
		expect(str).not.toMatch(rules.function);
	})
})