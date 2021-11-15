import rules from "../../scss";

describe('SCSS - MODULES', () => {
	test('module vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.module);
	})

	test('module vs. plain color module usage', () => {
		const str = 'scale(rebeccapurple, lightness: 50%);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain list module usage', () => {
		const str = 'append($list, $val: $seperator: auto);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain map module usage', () => {
		const str = 'get($config, a, b, c);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain math module usage', () => {
		const str = 'ceil(4);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain meta module usage', () => {
		const str = 'load-css($url, $with: null);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain selector module usage', () => {
		const str = 'is-superselector($super, $sub);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain string module usage', () => {
		const str = 'quote(Helvetica);'
		expect(str).toMatch(rules.module);
	})

	test('module vs. plain string module usage with quotes', () => {
		const str = 'str.quote("Helvetica");'
		expect(str).toMatch(rules.module);
	})

	test('module vs. sample fake module', () => {
		const str = 'sampleFunction("Helvetica");'
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