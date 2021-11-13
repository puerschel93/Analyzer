const rules = {
	extend: new RegExp(/@extend (\#*|\.*|\:{0,1})[a-zA-Z-0-9\[\]\']+\;*/g),
	mixinWithoutArguments: new RegExp(/\@mixin[ ]+[a-zA-Z]+[ ]*\{/g),
  	mixinWithArguments: new RegExp(/\@mixin[ ]+[a-zA-Z]+[ ]*\(\$[^]+\) \{/g),
	function: new RegExp(/\@function[ ]+[a-zA-Z\-\_]+[ ]*\([^]*\) \{/g),
	if: new RegExp(/\@if[ ]+[^]+[ ]*\{/g),
	else: new RegExp(/\}[ ]*\@else[ ]*\{/g),
	elseif: new RegExp(/\}[ ]*\@else if[ ]+[^]+[ ]*\{/g),
	each: new RegExp(/\@each[ ]+\$[a-zA-Z0-9]+[ ]+in[ ]+[a-zA-Z0-9\$\,\(\)\.\% ]+[ ]*\{/g),
	while: new RegExp(/\@while[ ]+[a-zA-Z0-9\$ \,\<\>\=\!]+[ ]*\{/g),
	for: new RegExp(/\@for[ ]+\$[a-zA-Z0-9]+[ ]+from[ ]+[0-9]+[ ]+through[ ]+[0-9]+[ ]*\{/g),
	variable: new RegExp(/\$[a-zA-Z0-9 ]+\:[ ]*([a-zA-Z0-9\(\)\,\%\.\'\"\$\#\! ]{4,}|[a-zA-Z0-9]+)\;/g),
	module: new RegExp(/[^]*(color|list|math|map|meta|selector|string).[a-zA-Z0-9\-\_\$]+\(*[^]*/g),
	operator: new RegExp(/[^]+(\*|\+|\-|\%)[ ]{1,}[^]*/g)
};

export default rules;
