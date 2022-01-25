import CSSRules from './general';
import RuleSet from './rules';

class Rules extends CSSRules implements RuleSet {
	extend: RegExp = new RegExp(/^@extend (\#*|\.*|\:{0,1})[a-zA-Z-0-9\[\]\']+\;*/);
	mixinWithoutArguments: RegExp = new RegExp(/^[ ]*\@mixin[A-Za-z0-9\$\-\_\+\<\>\= ]+\{*/); // PREFERRED TO BE COUNTED WITH AST
  	mixinWithArguments: RegExp = new RegExp(/^[ ]*\@mixin[ ]+[A-Za-z0-9\$\-\_\+\=]+[ ]*\([A-Za-z0-9\$\-\_\+\=]+/);  // PREFERRED TO BE COUNTED WITH AST
	function: RegExp = new RegExp(/^\@function[ ]+[a-zA-Z\-\_]+[ ]*\([^]*\) \{/);
	if: RegExp = new RegExp(/^\}*[ ]*\@if[ ]+[A-Za-z0-9\$\-\_\+\-\*\<\>\= ]+[ ]*\{+/)
	else: RegExp = new RegExp(/^\}[ ]*\@else[ ]*\{/)
	elseif: RegExp = new RegExp(/^\}[ ]*\@else if[ ]+[^]+[ ]*\{/)
	unless: RegExp = new RegExp(/(?!)/)
	each: RegExp = new RegExp(/^\@each[ ]+\$[a-zA-Z0-9]+[ ]+in[ ]+[a-zA-Z0-9\$\,\(\)\.\% ]+[ ]*\{/)
	while: RegExp = new RegExp(/^\@while[ ]+[a-zA-Z0-9\$ \,\<\>\=\!]+[ ]*\{/)
	for: RegExp = new RegExp(/^\@for[ ]+\$[a-zA-Z0-9]+[ ]+from[ ]+[0-9]+[ ]+(through|to)[ ]+[0-9]+[ ]*\{/)
	variable: RegExp = new RegExp(/^\$[a-zA-Z0-9\-\_ ]+\:[ ]*[^]+\;/);  // PREFERRED TO BE COUNTED WITH AST
	module: RegExp = new RegExp(/^[^]*(\badjust|\badjust\-color|\badjust\-hue|\balpha|\bopacity|\bblackness|\bwhiteness|\bred|\bblue|\bgreen|\bchange|\bchange\-color|\bcomplement|\bdarken|\bdesaturate|\bgrayscale|\bsaturation|\blightness|\blighten|\bhwb|\bie\-hex\-str|\binvert|\bmix|\bopacify|\bfade\-in|\bsaturate|\btransparentize|\bfade\-out|\bscale|\bappend|\bindex|\bis\-bracketed|\bjoin|\blength|\blist\-separator|\bseparator|\bnth|\bset\-nth|\bslash|\bzip|\bmap\-get|\bget|\bhas\-key|\bmap\-has\-key|\bkeys|\bmerge|\bmap\-merge|\bmap\-remove|\bdeep\-merge|\deep\-remove|\bremove|\bset|\bvalues|\bset\-values|\bceil|\bclamp|\bfloor|\bmax|\bmin|\bround|\babs|\bhypot|\blog|\bpow|\bsqrt|\bcos|\bsin|\btan|\bacos|\basin|\batan|\batan2|\bcompatible|\bcomparable|\bis\-unitless|\bunitless|\bunit|\bdiv|\bpercentage|\brandom|\bload\-css|\bcalc\-args|\bcalc\-name|\bcall|\bcontent\-exists|\bfeature\-exists|\bfunction\-exists|\bget\-function|\bglobal\-variable\-exists|\binspect|\bkeywords|\bmixin\-exists|\bmodule\-functions|\bmodule\-variables|\btype\-of|\bis\-superselector|\bunquote|\bselector\-append|\bextend|\bselector\-extend|\bnest|\bselector\-nest|\bparse|\bselector\-parse|\breplace|\bselector\-replace|\bunify|\bselector\-unify|\bsimple\-selectors|\bquote|\bindex|\bstr\-index|\bstr\-insert|\binsert|\blength|\bstr\-length|\bslice|\bstr\-slice|\bto\-upper\-case|\bto\-lower\-case|\bunique\-id)+\(+[^]*/)
	colorModule: RegExp  = new RegExp(/^[^]*(\badjust|\badjust\-color|\badjust\-hue|\balpha|\bopacity|\bblackness|\bwhiteness|\bred|\bblue|\bgreen|\bchange|\bchange\-color|\bcomplement|\bdarken|\bdesaturate|\bgrayscale|\bsaturation|\blightness|\blighten|\bhwb|\bie\-hex\-str|\binvert|\bmix|\bopacify|\bfade\-in|\bsaturate|\btransparentize|\bfade\-out|\bscale)+\(+[^]*/)
	mathModule: RegExp = new RegExp(/^[^]*(\bceil|\bclamp|\bfloor|\bmax|\bmin|\bround|\babs|\bhypot|\blog|\bpow|\bsqrt|\bcos|\bsin|\btan|\bacos|\basin|\batan|\batan2\bcompatible|\bcomparable|\bis\-unitless|\bunitless|\bunit|\bdiv|\bpercentage|\brandom)+\(+[^]*/)
	/** Selector Module */
	pathModule: RegExp  = new RegExp(/^[^]*(\bis\-superselector|\bunquote|\bselector\-append|\bextend|\bselector\-extend|\bnest|\bselector\-nest|\bparse|\bselector\-parse|\breplace|\bselector\-replace|\bunify|\bselector\-unify|\bsimple\-selectors)+\(+[^]*/) 
	listModule: RegExp = new RegExp(/^[^]*(\bappend|\bindex|\bis\-bracketed|\bjoin|\blength|\blist\-separator|\bseparator|\bnth|\bset\-nth|\bslash|\bzip)+\(+[^]*/) 
	/** Utilized as misc. */
	unitModule: RegExp = new RegExp(/^[^]*(\bmap\-get|\bget|\bhas\-key|\bmap\-has\-key|\bkeys|\bmerge|\bmap\-merge|\bmap\-remove|\bremove|\bset|\bvalues)+\(+[^]*/) 
	stringModule: RegExp = new RegExp(/^[^]*(\bquote|\bindex|\bstr\-index|\bstr\-insert|\binsert|\blength|\bstr\-length|\bslice|\bstr\-slice|\bto\-upper\-case|\bto\-lower\-case|\bunique\-id)+\(+[^]*/) 
	utilModule: RegExp = new RegExp(/^[^]*(\bload\-css|\bcalc\-args|\bcalc\-name|\bcall|\bcontent\-exists|\bfeature\-exists|\bfunction\-exists|\bget\-function|\bglobal\-variable\-exists|\binspect|\bkeywords|\bmixin\-exists|\bmodule\-functions|\bmodule\-variables|\btype\-of)+\(+[^]*/) 
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