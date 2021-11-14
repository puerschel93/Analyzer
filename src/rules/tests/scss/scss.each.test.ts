import rules from "../../scss";

describe('SCSS - EACH', () => {
	test('each vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. valid each loop by variable', () => {
		const str = '@each $sample in $samples {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. valid each loop by value', () => {
		const str = '@each $sample in 15px {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. valid each loop by array', () => {
		const str = '@each $sample in 15px, 32px {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. invalid each loop by array with wrong separator', () => {
		const str = '@each $sample in 15px; 32px {'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. invalid each loop (wrong variable declaration)', () => {
		const str = '@each sample in $samples {'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. invalid each loop missing @ identifier', () => {
		const str = 'each $sample in $samples'
		expect(str).not.toMatch(rules.each);
	})
})