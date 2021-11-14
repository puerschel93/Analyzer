import RuleSet from './rules';

class Rules implements RuleSet {
	extend: RegExp = new RegExp(/@extend (\#*|\.*|\:{0,1})[a-zA-Z-0-9\[\]\']+\;*/);
	mixinWithoutArguments: RegExp = new RegExp(/\@mixin[ ]+[a-zA-Z]+[ ]*\{/);
  	mixinWithArguments: RegExp = new RegExp(/\@mixin[ ]+[a-zA-Z]+[ ]*\(\$[^]+\) \{/)
	function: RegExp = new RegExp(/\@function[ ]+[a-zA-Z\-\_]+[ ]*\([^]*\) \{/);
	if: RegExp = new RegExp(/\@if[ ]+[^]+[ ]*\{/)
	else: RegExp = new RegExp(/\}[ ]*\@else[ ]*\{/)
	elseif: RegExp = new RegExp(/\}[ ]*\@else if[ ]+[^]+[ ]*\{/)
	each: RegExp = new RegExp(/\@each[ ]+\$[a-zA-Z0-9]+[ ]+in[ ]+[a-zA-Z0-9\$\,\(\)\.\% ]+[ ]*\{/)
	while: RegExp = new RegExp(/\@while[ ]+[a-zA-Z0-9\$ \,\<\>\=\!]+[ ]*\{/)
	for: RegExp = new RegExp(/\@for[ ]+\$[a-zA-Z0-9]+[ ]+from[ ]+[0-9]+[ ]+through[ ]+[0-9]+[ ]*\{/)
	variable: RegExp = new RegExp(/\$[a-zA-Z0-9\-\_ ]+\:[ ]*[^]+\;/)
	module: RegExp = new RegExp(/[^]*(color|list|math|map|meta|selector|string)\.[a-zA-Z0-9\-\_\$]+\(+[^]*/)
	operator: RegExp = new RegExp(/[^]+[ ](\*|\+|\-|\%)[ ]{1,}[^]*/)
	array: RegExp[]

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