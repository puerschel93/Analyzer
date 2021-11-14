import rules from "../../less";

describe('LESS - MODULES', () => {
	test('module vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. plain color module usage', () => {
		const str = 'color("#aaa");'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain list module usage', () => {
		const str = 'append(@list, 3);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain math module usage (floor)', () => {
		const str = 'ceil(4.4);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain math module usage (floor)', () => {
		const str = 'floor(4.4);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain math module assigned to variable (sqrt)', () => {
		const str = '@sample: sqrt(9);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain type module usage (false)', () => {
		const str = 'isurl(7.8%);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain type module usage (true)', () => {
		const str = 'isurl("www.prshl.de");'
		expect(str).toMatch(rules.module);
	})


})