import rules from "../../scss";

describe('SCSS - FOR', () => {
	test('for vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. valid for loop', () => {
		const str = '@for $i from 1 through 29 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. valid for loop with alternate variable name', () => {
		const str = '@for $sampleValue5 from 1 through 29 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. valid for loop with additional spaces', () => {
		const str = '@for $sampleValue5     from 1       through 29 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. invalid for loop with missing through', () => {
		const str = '@for $i from 1 {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong variable declaration', () => {
		const str = '@for i from 1 through 29 {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong from value', () => {
		const str = '@for $i from a through 29 {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong through value', () => {
		const str = '@for $i from 1 through z {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong through value', () => {
		const str = '@for $i from 1 through z {'
		expect(str).not.toMatch(rules.for);
	})
})