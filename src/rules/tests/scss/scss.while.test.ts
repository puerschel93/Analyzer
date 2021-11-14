import rules from "../../scss";

describe('SCSS - WHILE', () => {
	test('while vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.while);
	})

	test('while vs. valid while loop', () => {
		const str = '@while 15px > $sample {'
		expect(str).toMatch(rules.while);
	})

	test('while vs. valid while loop with true as condition', () => {
		const str = '@while true {'
		expect(str).toMatch(rules.while);
	})

	test('while vs. valid while loop with !true as condition', () => {
		const str = '@while !true {'
		expect(str).toMatch(rules.while);
	})

	test('while vs. invalid while loop without break condition', () => {
		const str = '@while {'
		expect(str).not.toMatch(rules.while);
	})

	test('while vs. invalid while loop without identifier', () => {
		const str = 'while true {'
		expect(str).not.toMatch(rules.while);
	})
})