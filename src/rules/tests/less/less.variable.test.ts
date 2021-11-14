import rules from "../../less";

describe('LESS - VARIABLE', () => {
	test('variable vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.variable);
	})

	test('variable vs. valid variable (rgba color)', () => {
		const str = '@sample: rgba(255, 255, 255, 1);'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (hex color)', () => {
		const str = '@sample: #FF0000;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable with kebabcase in name (hex color)', () => {
		const str = '@sample-primary: #FF0000;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable with snakecase in name (hex color)', () => {
		const str = '@sample_primary: #FF0000;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (important hex color)', () => {
		const str = '@sample: #FF0000 !important;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (size in px)', () => {
		const str = '@sample: 15px;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (url)', () => {
		const str = "@picture-bg-url:'../images/dark_wall.png';"
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (size in %)', () => {
		const str = '@sample: 15%;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (string)', () => {
		const str = '@sample: "content";'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (other variable)', () => {
		const str = '@sample: @otherVariable;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. invalid variable missing semicolon', () => {
		const str = '@sample: #FF0000'
		expect(str).not.toMatch(rules.variable);
	})

	test('variable vs. invalid variable missing value', () => {
		const str = '@sample:'
		expect(str).not.toMatch(rules.variable);
	})

	test('variable vs. assigned variable', () => {
		const str = 'background-color: @value;'
		expect(str).not.toMatch(rules.variable);
	})
})