const rules = {
	extend: new RegExp(/@extend (\#*|\.*|\:{0,1})[a-zA-Z-0-9\[\]\']+\;*/g),
	mixinWithoutArguments: new RegExp(/\@mixin[ ]+[a-zA-Z]+[ ]*\{/g),
  	mixinWithArguments: new RegExp(/\@mixin[ ]+[a-zA-Z]+[ ]*\(\$[^]+\) \{/g),
	function: new RegExp(/\@function[ ]+[a-zA-Z]+[ ]*\([^]*\) \{/g),
	if: new RegExp(/\@if[ ]+[^]+[ ]*\{/g),
	else: new RegExp(/\}[ ]*\@else[ ]*\{/g),
	elseif: new RegExp(/\}[ ]*\@else if[ ]+[^]+[ ]*\{/g),
	each: new RegExp(/\@each[ ]+\$[a-zA-Z0-9]+[ ]+in[ ]+[a-zA-Z0-9\$\, ]+[ ]+\{/g),
};

export default rules;
