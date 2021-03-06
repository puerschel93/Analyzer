import rules from "../../scss";

describe('SCSS - MIXINS WITH ARGUMENTS', () => {
	test('mixinWithArguments vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});
	
	test('mixinWithArguments vs. valid mixin with one argument', () => {
		const str = '@mixin sample($argument1) {'
		expect(str).toMatch(rules.mixinWithArguments);
	});
	
	test('mixinWithArguments vs. valid mixin with two arguments', () => {
		const str = '@mixin sample($argument1, $argument2) {'
		expect(str).toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. valid named mixin without arguments', () => {
		const str = '@mixin sample() {'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. invalid named mixin without arguments', () => {
		const str = '@mixin () {'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. invalid named mixin with one argument', () => {
		const str = '@mixin ($argument1) {'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. invalid named mixin with two arguments', () => {
		const str = '@mixin ($argument1, $argument2) {'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});

	test('mixinWithArguments vs. invalid named mixin without arguments and parenthesis', () => {
		const str = '@mixin sample {'
		expect(str).not.toMatch(rules.mixinWithArguments);
	});
})
