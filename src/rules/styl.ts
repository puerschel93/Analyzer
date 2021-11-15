import RuleSet from './rules';

/**
 * This is a RuleSet for the Stylus language.
 * Notes:
 *	- The mixinWithoutArguments doesn't require a specific RegEx pattern like
 *	  the Sass Preprocessor, because its syntax is equal to the mixin with arguments
 *	  syntax with paranthesis but without arguments.
 *	- Because the usage of Mixins is the same as the usage of built-in Functions all of the built-in Function
 *	  Keywords are excluded from the matching the mixins.
 */
class Rules implements RuleSet {
	extend: RegExp = new RegExp(/^@extend (\#*|\.*|\:{0,1})[a-zA-Z-0-9\[\]\' ]+/);
	mixinWithoutArguments: RegExp = new RegExp(/(?!)/)
  	mixinWithArguments: RegExp = new RegExp(/^[ ]*[a-zA-Z0-9\_\-\$]+(?<!\bred|\bblue|\bgreen|\balpha|\bdark|\blight|\bhue|\btransform|\bsaturation|\blightness|\bhsla|\bhsl|\brgba|\brgb|\bblend|\blighten|\bdarken|\bdesaturate|\bsaturate|\bcomplement|\binvert|\bspin|\bgrayscale|\bmix|\btint|\bshade|\bluminosity|\bcontrast|\btransparentify|\bbasename|\bextname|\bpathjoin|\bpush|\bpop|\bshift|\bunshift|\bindex|\bkeys|\bvalues|\blength|\blast|\btypeof|\bunit|\bpercentage|\babs|\bceil|\bfloor|\bround|\bsin|\bcos|\btan|\bmin|\bmax|\beven|\bodd|\bsum|\bavg|\brange|\bbase\-convert|\bmatch|\breplace|\bjoin|\bsplit|\bsubstr|\bslice|\bunquote|\bconvert|\bcalled\-from|\bcurrent\-media|\b\+cache|\b\+prefix\-classes|\blookup|\bdefine|\boperate|\bselector|\bselector-exists|\burl|\bcubic\-bezier|\b\:not|\b\:nth|\bvar|\bopposite-position|\bimage\-size|\bembedurl|\badd\-property|\bwarn|\berror|\bjson|\buse)\([^]+\)/)
	function: RegExp = new RegExp(/^[ ]*[a-zA-Z\: ]+\b([a-zA-Z0-9\-\_]+)\b(?<!\bred|\bblue|\bgreen|\balpha|\bdark|\blight|\bhue|\bsaturation|\blightness|\bhsla|\bhsl|\brgba|\brgb|\bblend|\blighten|\bdarken|\bdesaturate|\bsaturate|\bcomplement|\binvert|\bspin|\bgrayscale|\bmix|\btint|\bshade|\bluminosity|\bcontrast|\btransparentify|\bbasename|\bextname|\bpathjoin|\bpush|\bpop|\bshift|\bunshift|\bindex|\bkeys|\bvalues|\blength|\blast|\btypeof|\bunit|\bpercentage|\babs|\bceil|\bfloor|\bround|\bsin|\bcos|\btan|\bmin|\bmax|\beven|\bodd|\bsum|\bavg|\brange|\bbase\-convert|\bmatch|\breplace|\bjoin|\bsplit|\bsubstr|\bslice|\bunquote|\bconvert|\bcalled\-from|\bcurrent\-media|\b\+cache|\b\+prefix\-classes|\blookup|\bdefine|\boperate|\bselector|\bselector-exists|\bopposite-position|\bimage\-size|\bembedurl|\badd\-property|\bwarn|\berror|\bjson|\buse)\([^]+\)[^]*/)
	if: RegExp = new RegExp(/^[^]*(\bif)[ ]+[^]+/)
	else: RegExp = new RegExp(/^[\}]*[ ]*else[ ]*[\{]*/)
	elseif: RegExp = new RegExp(/^[\}]*[ ]*else if[ ]+[^]+[ ]*[\{]*/)
	each: RegExp = new RegExp(/(?!)/)
	while: RegExp = new RegExp(/(?!)/)
	for: RegExp = new RegExp(/^[^]*(\bfor)[^]+(\bin) [^]+/)
	variable: RegExp = new RegExp(/^[a-zA-Z0-9\_\-\$ ]+\=[^]+/)
	module: RegExp = new RegExp(/^[^]*(\bred|\bblue|\bgreen|\balpha|\bdark|\blight|\bhue|\bsaturation|\blightness|\bhsla|\bhsl|\brgba|\brgb|\bblend|\blighten|\bdarken|\bdesaturate|\bsaturate|\bcomplement|\binvert|\bspin|\bgrayscale|\bmix|\btint|\bshade|\bluminosity|\bcontrast|\btransparentify|\bbasename|\bextname|\bpathjoin|\bpush|\bpop|\bshift|\bunshift|\bindex|\bkeys|\bvalues|\blength|\blast|\btypeof|\bunit|\bpercentage|\babs|\bceil|\bfloor|\bround|\bsin|\bcos|\btan|\bmin|\bmax|\beven|\bodd|\bsum|\bavg|\brange|\bbase\-convert|\bmatch|\breplace|\bjoin|\bsplit|\bsubstr|\bslice|\bunquote|\bconvert|\bcalled\-from|\bcurrent\-media|\b\+cache|\b\+prefix\-classes|\blookup|\bdefine|\blist\-separator|\boperate|\bselector|\bselector-exists|\bopposite-position|\bimage\-size|\bembedurl|\badd\-property|\bwarn|\berror|\bjson|\buse)\([^]+\)[^]*/)
	operator: RegExp = new RegExp(/^[^]+[ ](\*|\+|\-|\%)[ ]{1,}[^]*/)
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