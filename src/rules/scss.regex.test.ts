import rules from './scss';

describe('MIXINS WITHOUT ARGUMENTS', () => {
	test('mixinWithoutArguments vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.mixinWithoutArguments);
	});

	test('mixinWithoutArguments vs. valid mixin', () => {
		const str = '@mixin sample {'
		expect(str).toMatch(rules.mixinWithoutArguments);
	});

	test('mixinWithoutArguments vs. valid named mixin with parenthesis', () => {
		const str = '@mixin sample() {'
		expect(str).not.toMatch(rules.mixinWithoutArguments);
	});

	test('mixinWithoutArguments vs. valid named mixin with parenthesis and one argument', () => {
		const str = '@mixin sample($argument1) {'
		expect(str).not.toMatch(rules.mixinWithoutArguments);
	});

	test('mixinWithoutArguments vs. valid named mixin with parenthesis and two arguments', () => {
		const str = '@mixin sample($argument1, $argument2) {'
		expect(str).not.toMatch(rules.mixinWithoutArguments);
	});
})

describe('MIXINS WITH ARGUMENTS', () => {
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

describe('EXTEND', () => {
	test('extend vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.extend);
	})

	test('extend vs. valid extension', () => {
		const str = '@extend .someClass;'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension without semicolon', () => {
		const str = '@extend .someClass'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension with multiple inputs', () => {
		const str = '@extend .someClass, a'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. valid extension with multiple inputs with semicolon', () => {
		const str = '@extend .sampleClass, a'
		expect(str).toMatch(rules.extend);
	})

	test('extend vs. invalid extension', () => {
		const str = '@extend'
		expect(str).not.toMatch(rules.extend);
	})
})

describe('FUNCTIONS', () => {
	test('function vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.function);
	})

	test('function vs. valid function', () => {
		const str = '@function sample() {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with space', () => {
		const str = '@function sample () {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with one argument', () => {
		const str = '@function sample($sample) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with space with one argument', () => {
		const str = '@function sample ($sample) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with one argument with default value', () => {
		const str = '@function sample($sample = 15px) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function with space with one argument with default value', () => {
		const str = '@function sample ($sample = 15px) {'
		expect(str).toMatch(rules.function);
	})

	test('function vs. valid function without parenthesis', () => {
		const str = '@function sample {'
		expect(str).not.toMatch(rules.function);
	})
})

describe('IF STATEMENT', () => {
	test('if vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.if);
	})

	test('if vs. valid if statement', () => {
		const str = '@if $value > 15px {'
		expect(str).toMatch(rules.if);
	})

	test('if vs. valid if statement with single condition', () => {
		const str = '@if $value {'
		expect(str).toMatch(rules.if);
	})

	test('if vs. valid if statement with missing brace', () => {
		const str = '@if $value > 15px'
		expect(str).not.toMatch(rules.if);
	})

	test('if vs. invalid if statement without condition', () => {
		const str = '@if {'
		expect(str).not.toMatch(rules.if);
	})
})

describe('ELSE STATEMENT', () => {
	test('else vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.else);
	})

	test('if vs. valid else statement', () => {
		const str = '} @else {'
		expect(str).toMatch(rules.else);
	})

	test('if vs. invalid else statement with condition', () => {
		const str = '} @else $value {'
		expect(str).not.toMatch(rules.else);
	})

	test('if vs. valid if statement with missing braces', () => {
		const str = '@else'
		expect(str).not.toMatch(rules.else);
	})

	test('if vs. invalid else statement ', () => {
		const str = '@else {'
		expect(str).not.toMatch(rules.else);
	})
})

describe('ELSE IF STATEMENT', () => {
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

describe('EACH LOOP', () => {
	test('each vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. valid each loop by variable', () => {
		const str = '@each $sample in $samples {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. valid each loop by value', () => {
		const str = '@each $sample in 15px {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. valid each loop by array', () => {
		const str = '@each $sample in 15px, 32px {'
		expect(str).toMatch(rules.each);
	})

	test('each vs. invalid each loop by array with wrong separator', () => {
		const str = '@each $sample in 15px; 32px {'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. invalid each loop (wrong variable declaration)', () => {
		const str = '@each sample in $samples {'
		expect(str).not.toMatch(rules.each);
	})

	test('each vs. invalid each loop missing @ identifier', () => {
		const str = 'each $sample in $samples'
		expect(str).not.toMatch(rules.each);
	})
})