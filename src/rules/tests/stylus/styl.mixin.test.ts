import rules from "../../styl";

describe('STYLUS - MIXINS', () => {
	test('mixinWithArguments vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});
	
	test('mixinWithArguments vs. valid mixin with one argument', () => {
		const str = 'sample-mixin(argument1)'
		expect(str).toMatch(rules.mixinWithArguments);
	});
	
	test('mixinWithArguments vs. valid mixin with two arguments', () => {
		const str = 'sample-mixin(argument1, argument2)'
		expect(str).toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. invalid mixin with two arguments because already used by built-in functions', () => {
		const str = 'red(argument1, argument2)'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. invalid mixin with one argument because already used by built-in functions', () => {
		const str = 'alpha(n)'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. valid mixin with one argument but missing closing parens', () => {
		const str = 'sample-mixin(n'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. valid mixin with one argument but added space between mixin name and parenthesis', () => {
		const str = 'sample-mixin     (n)'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. valid mixin with one argument but added space between mixin name and parenthesis', () => {
		const str = 'sample_mixin(n)'
		expect(str).toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. valid mixin with one argument and standard css syntax', () => {
		const str = 'sample_mixin(n) {'
		expect(str).toMatch(rules.mixinWithArguments);
	});
})