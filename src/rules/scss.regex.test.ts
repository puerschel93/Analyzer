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

describe('WHILE LOOP', () => {
	test('while vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.while);
	})

	test('while vs. valid while loop', () => {
		const str = '@while 15px > $sample {'
		expect(str).toMatch(rules.while);
	})

	test('while vs. valid while loop with true as condition', () => {
		const str = '@while true {'
		expect(str).toMatch(rules.while);
	})

	test('while vs. valid while loop with !true as condition', () => {
		const str = '@while !true {'
		expect(str).toMatch(rules.while);
	})

	test('while vs. invalid while loop without break condition', () => {
		const str = '@while {'
		expect(str).not.toMatch(rules.while);
	})

	test('while vs. invalid while loop without identifier', () => {
		const str = 'while true {'
		expect(str).not.toMatch(rules.while);
	})
})

describe('FOR LOOP', () => {
	test('for vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. valid for loop', () => {
		const str = '@for $i from 1 through 29 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. valid for loop with alternate variable name', () => {
		const str = '@for $sampleValue5 from 1 through 29 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. valid for loop with additional spaces', () => {
		const str = '@for $sampleValue5     from 1       through 29 {'
		expect(str).toMatch(rules.for);
	})

	test('for vs. invalid for loop with missing through', () => {
		const str = '@for $i from 1 {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong variable declaration', () => {
		const str = '@for i from 1 through 29 {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong from value', () => {
		const str = '@for $i from a through 29 {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong through value', () => {
		const str = '@for $i from 1 through z {'
		expect(str).not.toMatch(rules.for);
	})

	test('for vs. invalid for loop with wrong through value', () => {
		const str = '@for $i from 1 through z {'
		expect(str).not.toMatch(rules.for);
	})
})

describe('VARIABLES', () => {
	test('variable vs. random string', () => {
		const str = 'something'
		expect(str).not.toMatch(rules.variable);
	})

	test('variable vs. valid variable (rgba color)', () => {
		const str = '$sample: rgba(255, 255, 255, 1);'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (hex color)', () => {
		const str = '$sample: #FF0000;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (important hex color)', () => {
		const str = '$sample: #FF0000 !important;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (size in px)', () => {
		const str = '$sample: 15px;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (size in %)', () => {
		const str = '$sample: 15%;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (string)', () => {
		const str = '$sample: "content";'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. valid variable (other variable)', () => {
		const str = '$sample: $otherVariable;'
		expect(str).toMatch(rules.variable);
	})

	test('variable vs. invalid variable', () => {
		const str = '$sample: ;'
		expect(str).not.toMatch(rules.variable);
	})

	test('variable vs. invalid variable missing semicolon', () => {
		const str = '$sample: #FF0000'
		expect(str).not.toMatch(rules.variable);
	})
})