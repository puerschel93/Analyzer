interface RuleSet {
	extend: RegExp;
	mixinWithoutArguments: RegExp;
  	mixinWithArguments: RegExp;
	function: RegExp;
	if: RegExp;
	else: RegExp;
	elseif: RegExp;
	each: RegExp;
	while: RegExp;
	for: RegExp;
	variable: RegExp;
	module: RegExp;
	operator: RegExp;
	array: RegExp[];

	iteratable(): RegExp[];
}

export default RuleSet