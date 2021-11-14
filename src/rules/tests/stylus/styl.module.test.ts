import rules from "../../styl";

describe('SCSS - MODULES', () => {
	test('module vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. light built-in module function', () => {
		const str = 'light(rebeccapurple, lightness: 50%);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. hue built-in module function', () => {
		const str = 'hue(50deg, 100%, 80%);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. blend built-in module function', () => {
		const str = 'blend(rgba(200, 200, 200, 1), #000)'
		expect(str).toMatch(rules.module);
	})

	test('module vs. ceil built-in module function', () => {
		const str = 'ceil(4);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. floor built-in module function', () => {
		const str = 'floor(4.5);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. round built-in module function', () => {
		const str = 'round(5.5px);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. avg built-in module function', () => {
		const str = 'avg(1 2 3);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. replace built-in module function', () => {
		const str = 'replace(i, e, "green");'
		expect(str).toMatch(rules.module);
	})

	test('module vs. split built-in module function', () => {
		const str = 'split(_, sample_split_argument);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. list-separator built-in module function', () => {
		const str = 'list-separator(list);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. shift built-in module function', () => {
		const str = 'shift(list)'
		expect(str).toMatch(rules.module);
	})

	test('module vs. luminosity built-in module function', () => {
		const str = 'luminosity(white)'
		expect(str).toMatch(rules.module);
	})

	test('module vs. shade built-in module function', () => {
		const str = 'shade(green, 50%)'
		expect(str).toMatch(rules.module);
	})

})