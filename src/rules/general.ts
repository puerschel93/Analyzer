class CSSRules {
	cssVariable: RegExp = new RegExp(/^\-\-[a-zA-Z0-9\-\_ ]+\:[^]+\;/);
	calc: RegExp = new RegExp(/^[^]*calc\([^]+\)[^]*/);

	css(): RegExp[] {
		return [
			this.cssVariable,
			this.calc
		];
	}
}

export default CSSRules