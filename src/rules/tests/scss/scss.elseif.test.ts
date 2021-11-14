import rules from "../../scss";

describe('SCSS - ELSE IF', () => {
	test('else if vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.elseif);
	})

	test('else if vs. valid else if statement', () => {
		const str = '} @else if $value {'
		expect(str).toMatch(rules.elseif);
	})

	test('else if vs. invalid else statement without condition', () => {
		const str = '} @else if {'
		expect(str).not.toMatch(rules.elseif);
	})

	test('else if vs. invalid if statement with missing braces', () => {
		const str = '@else if'
		expect(str).not.toMatch(rules.elseif);
	})

	test('else if vs. valid else if statement without beginning brae', () => {
		const str = '@else if $value {'
		expect(str).not.toMatch(rules.elseif);
	})
})