import rules from "../../scss";

describe('SCSS - MODULES', () => {
	test('module vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. plain color module usage', () => {
		const str = 'color.scale(rebeccapurple, lightness: 50%);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain list module usage', () => {
		const str = 'list.append($list, $val: $seperator: auto);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain map module usage', () => {
		const str = 'map.get($config, a, b, c);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain math module usage', () => {
		const str = 'math.ceil(4);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain math module constant usage assigned to a variable', () => {
		const str = '$pi: math.$pi(4);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain meta module usage', () => {
		const str = 'meta.load-css($url, $with: null);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain selector module usage', () => {
		const str = 'selector.is-superselector($super, $sub);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain string module usage', () => {
		const str = 'string.quote(Helvetica);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain string module usage with quotes', () => {
		const str = 'string.quote("Helvetica");'
		expect(str).toMatch(rules.module);
	})

	test('module vs. sample fake module', () => {
		const str = 'sample.sampleFunction("Helvetica");'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. sample fake module', () => {
		const str = 'background-color: sample.sampleFunction("Helvetica");'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. other assignment containing color', () => {
		const str = 'border-bottom: solid 10px $color-primary;'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. file declaration', () => {
		const str = 'url(../../map.png)'
		expect(str).not.toMatch(rules.module);
	})

})