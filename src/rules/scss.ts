import RuleSet from './rules';
import CSSRules from './general';

class Rules extends CSSRules implements RuleSet {
	extend: RegExp = new RegExp(/^@extend (\#*|\.*|\:{0,1})[a-zA-Z-0-9\[\]\']+\;*/);
	mixinWithoutArguments: RegExp = new RegExp(/(?!)/);
  	mixinWithArguments: RegExp = new RegExp(/^[ ]*\@mixin[^]+/)
	function: RegExp = new RegExp(/^\@function[ ]+[a-zA-Z\-\_]+[ ]*\([^]*\) \{/);
	if: RegExp = new RegExp(/^\@if[ ]+[^]+[ ]*\{/)
	else: RegExp = new RegExp(/^\}[ ]*\@else[ ]*\{/)
	elseif: RegExp = new RegExp(/^\}[ ]*\@else if[ ]+[^]+[ ]*\{/)
	each: RegExp = new RegExp(/^\@each[ ]+\$[a-zA-Z0-9]+[ ]+in[ ]+[a-zA-Z0-9\$\,\(\)\.\% ]+[ ]*\{/)
	while: RegExp = new RegExp(/^\@while[ ]+[a-zA-Z0-9\$ \,\<\>\=\!]+[ ]*\{/)
	for: RegExp = new RegExp(/^\@for[ ]+\$[a-zA-Z0-9]+[ ]+from[ ]+[0-9]+[ ]+(through|to)[ ]+[0-9]+[ ]*\{/)
	variable: RegExp = new RegExp(/^\$[a-zA-Z0-9\-\_ ]+\:[ ]*[^]+\;/)
	module: RegExp = new RegExp(/^[^]*(adjust|adjust\-color|adjust\-hue|alpha|opacity|blackness|whiteness|red|blue|green|change|change\-color|complement|darken|desaturate|grayscale|saturation|lightness|lighten|hwb|ie\-hex\-str|invert|mix|opacify|fade\-in|saturate|transparentize|fade\-out|scale|append|index|is\-bracketed|join|length|list\-separator|separator|nth|set\-nth|slash|zip|map\-get|get|has\-key|map\-has\-key|keys|merge|map\-merge|map\-remove|remove|set|values|set\-values|ceil|clamp|floor|max|min|round|abs|hypot|log|pow|sqrt|cos|sin|tan|acos|asin|atan|atan2|compatible|comparable|is\-unitless|unitless|unit|div|percentage|random|load\-css|calc\-args|calc\-name|call|content\-exists|feature\-exists|function\-exists|get\-function|global\-variable\-exists|inspect|keywords|mixin\-exists|module\-functions|module\-variables|type\-of|is\-superselector|unquote|selector\-append|extend|selector\-extend|nest|selector\-nest|parse|selector\-parse|replace|selector\-replace|unify|selector\-unify|simple\-selectors|quote|index|str\-index|str\-insert|insert|length|str\-length|slice|str\-slice|to\-upper\-case|to\-lower\-case|unique\-id)+\(+[^]*/)
	operator: RegExp = new RegExp(/^[^]+[ ](\*|\+|\-|\%)[ ]{1,}[^]*/)
	array: RegExp[]

	constructor() {
		super()
		this.array = this.iteratable()
	}

	iteratable(): RegExp[] {
		return [
			...this.css(),
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