import CSSRules from './general';
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
class Rules extends CSSRules implements RuleSet{
	extend: RegExp = new RegExp(/^[^]+\:extend\([^]+\)\;/);
	mixinWithoutArguments: RegExp = new RegExp(/(?!)/);
  	mixinWithArguments: RegExp = new RegExp(/^\.[^]+\(\@[a-zA-Z0-9\,\@ ]+\)[ ]*\{/);
	function: RegExp = new RegExp(/(?!)/);
	if: RegExp = new RegExp(/^[^]+\(\@[^]+\)[ ]*when[ ]*\(\@[^]+\)[ ]*\{/);
	else: RegExp = new RegExp(/[^]*\bif\([^]+/);
	elseif: RegExp = new RegExp(/(?!)/);
	unless: RegExp = new RegExp(/(?!)/)
	each: RegExp = new RegExp(/^[^]*each\([a-zA-Z0-9\@\_\-\.\{\}\(\)\, ]+[ ]*\{/);
	while: RegExp = new RegExp(/(?!)/);
	for: RegExp = new RegExp(/(?!)/);
	variable: RegExp = new RegExp(/^\@[a-zA-Z0-9\-\_ ]+\:[ ]*[^]+\;/)
	module: RegExp = new RegExp(/^[^]*(\bescape|\breplace|\blength|\bextract|\brange|\bceil|\bfloor|\bpercentage|\bround|\bsqrt|\babs|\bappend|\bsin|\basin|\bcos|\bacos|\btan|\batan|\bpi|\bpow|\bmod|\bmin|\bmax|\bisnumber|\bisstring|\biscolor|\biskeyword|\bisurl|\bispixel|\bisem|\bispercentage|\bisunit|\bisruleset|\bisdefined|\bcolor|\bimage-size|\bimage-width|\bimage-height|\bconvert|\bdata-uri|\bdefault|\bunit|\bget-unit|\bsvg-gradient|\bhue|\bsaturation|\blightness|\bhsvhue|\bhsvsaturation|\bhsvvalue|\bred|\bgreen|\bblue|\balpha|\bluma|\bluminance|\bsaturate|\bdesaturate|\blighten|\bdarken|\bfadein|\bfadeout|\bfade|\bspin|\bmix|\btint|\bshade|\bgreyscale|\bcontrast|\bmultiply|\bscreen|\boverlay|\bsoftlight|\bhardlight|\bdifference|\bexclusion|\baverage|\bnegation)+\([^]*\)[^]*/)
	colorModule: RegExp = new RegExp(/^[^]*(\bhue|\bsaturation|\blightness|\bhsvhue|\bhsvsaturation|\bhsvvalue|\bred|\bgreen|\bblue|\balpha|\bluma|\bluminance|\bsaturate|\bdesaturate|\blighten|\bdarken|\bfadein|\bfadeout|\bfade|\bspin|\bmix|\btint|\bshade|\bgreyscale|\bcontrast|\bmultiply|\bscreen|\boverlay|\bsoftlight|\bhardlight|\bdifference|\bexclusion|\baverage|\bnegation)+\([^]*\)[^]*/)
	mathModule: RegExp = new RegExp(/^[^]*(\bceil|\bfloor|\bpercentage|\bround|\bsqrt|\babs|\bappend|\bsin|\basin|\bcos|\bacos|\btan|\batan|\bpi|\bpow|\bmod|\bmin|\bmax)+\([^]*\)[^]*/)
	pathModule: RegExp = new RegExp(/(?!)/);
	listModule: RegExp = new RegExp(/^[^]*(\blength|\bextract|\brange)+\([^]*\)[^]*/)
	unitModule: RegExp = new RegExp(/^[^]*(\bisnumber|\bisstring|\biscolor|\biskeyword|\bisurl|\bispixel|\bisem|\bispercentage|\bisunit|\bisruleset|\bisdefined)+\([^]*\)[^]*/)
	stringModule: RegExp = new RegExp(/^[^]*(\bescape|\breplace)+\([^]*\)[^]*/)
	utilModule: RegExp = new RegExp(/^[^]*(\bcolor|\bimage-size|\bimage-width|\bimage-height|\bconvert|\bdata-uri|\bdefault|\bunit|\bget-unit|\bsvg-gradient)+\([^]*\)[^]*/)
	operator: RegExp = new RegExp(/^[^]+[ ](\*|\+|\-|\%)[ ]{1,}[^]*/)
	array: RegExp[];

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
			this.unless,
			this.each,
			this.while,
			this.for,
			this.variable,
			this.module,
			this.colorModule,
			this.mathModule,
			this.pathModule,
			this.listModule,
			this.unitModule,
			this.stringModule,
			this.utilModule,
			this.operator
		]
	}
};

const rules = new Rules();

export default rules;