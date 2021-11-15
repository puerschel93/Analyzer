import RuleSet from './rules';

/**
 * This is a RuleSet for the LESS language.
 * Notes: 
 * - This is not a complete set of LESS rules, only the rules that are needed
 *   for the bachelorthesis.
 * - The rules mixinWithoutArguments always return false, because there is no way
 *   to test either if a mixin or a class is defined by using regex.
 * - There is no working test for custom functions, because LESS does not support 
 *   custom functions without the additional use of plug-ins and/or JavaScript.
 * - There are no working test for else, else-if statements, for and while
 *   because LESS handles if else by multiple separate if statements combined with
 *   custom mixins.
 * - There is also an alternative built-in Function to the if-statement tested here,
 *   but the mixin-based approach is more accepted in the community. The alternative
 *   usage of the built-in Function version is tested in "module".
 */
class Rules implements RuleSet {
	extend: RegExp = new RegExp(/[^]+\:extend\([^]+\)\;/);
	mixinWithoutArguments: RegExp = new RegExp(/(?!)/);
  	mixinWithArguments: RegExp = new RegExp(/\.[^]+\(\@[a-zA-Z0-9\,\@ ]+\)[ ]*\{/);
	function: RegExp = new RegExp(/(?!)/);
	if: RegExp = new RegExp(/[^]+\(\@[^]+\)[ ]*when[ ]*\(\@[^]+\)[ ]*\{/);
	else: RegExp = new RegExp(/(?!)/);
	elseif: RegExp = new RegExp(/(?!)/);
	each: RegExp = new RegExp(/[^]*each\([a-zA-Z0-9\@\_\-\.\{\}\(\)\, ]+[ ]*\{/);
	while: RegExp = new RegExp(/(?!)/);
	for: RegExp = new RegExp(/(?!)/);
	variable: RegExp = new RegExp(/\@[a-zA-Z0-9\-\_ ]+\:[ ]*[^]+\;/)
	module: RegExp = new RegExp(/[^]*(if|list|escape|replace|length|extract|range|ceil|floor|percentage|round|sqrt|abs|append|sin|asin|cos|acos|tan|atan|pi|pow|mod|min|max|isnumber|isstring|iscolor|iskeyword|isurl|ispixel|isem|ispercentage|isunit|isruleset|isdefined|color|image-size|image-width|image-height|convert|data-uri|default|unit|get-unit|svg-gradient|hue|saturation|lightness|hsvhue|hsvsaturation|hsvvalue|red|green|blue|alpha|luma|luminance|saturate|desaturate|lighten|darken|fadein|fadeout|fade|spin|mix|tint|shade|greyscale|contrast|multiply|screen|overlay|softlight|hardlight|difference|exclusion|average|negation)+\([^]*\)[^]*/)
	operator: RegExp = new RegExp(/[^]+[ ](\*|\+|\-|\%)[ ]{1,}[^]*/)
	array: RegExp[];

	constructor() {
		this.array = this.iteratable()
	}

	iteratable(): RegExp[] {
		return [
			this.extend,
			this.mixinWithoutArguments,
			this.mixinWithArguments,
			this.function,
			this.if,
			this.else,
			this.elseif,
			this.each,
			this.while,
			this.for,
			this.variable,
			this.module,
			this.operator
		]
	}
};

const rules = new Rules();

export default rules;