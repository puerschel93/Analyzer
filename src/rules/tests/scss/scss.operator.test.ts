import rules from "../../scss";

describe('SCSS - OPERATORS', () => {
	test('operator vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.operator);
	})

	test('operator vs. multiplication on variable assignment', () => {
		const str = '$variable: 12px * 3;'
		expect(str).toMatch(rules.operator);
	})

	test('operator vs. addition on variable assignment', () => {
		const str = '$variable: 12px + 3px;'
		expect(str).toMatch(rules.operator);
	})

	test('operator vs. subtraction on variable assignment', () => {
		const str = '$variable: 12px - 3px;'
		expect(str).toMatch(rules.operator);
	})

	test('operator vs. modulo on variable assignment', () => {
		const str = '$variable: 12px % 3px;'
		expect(str).toMatch(rules.operator);
	})

	test('operator vs. non operational assignment with minus', () => {
		const str = 'math.abs(-5px)'
		expect(str).not.toMatch(rules.operator);
	})

	test('operator vs. operational assignment with minus', () => {
		const str = '15px - 2px'
		expect(str).toMatch(rules.operator);
	})
})