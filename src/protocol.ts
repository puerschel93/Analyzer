import Logger from './utils/logger';

class Protocol {
	extend: number = 0;
	mixins: number = 0;
	mixinWithoutArguments: number = 0;
	mixinWithArguments: number = 0;
	function: number = 0;
	if: number = 0;
	else: number = 0;
	elseif: number = 0;
	each: number = 0;
	while: number = 0;
	for: number = 0;
	variable: number = 0;
	module: number = 0;
	operator: number = 0;

	/**
	 * Workaround to match type index to expression to write to
	 * the protocol.
	 * @param type type of passed regex match
	 */
	add(type: string): void {
		switch (type) {
			case 'extend':
				this.extend++;
				break;
			case 'mixinWithoutArguments':
				this.mixinWithoutArguments++;
				this.mixins++;
				break;
			case 'mixinWithArguments':
				this.mixinWithArguments++;
				this.mixins++;
				break;
			case 'function':
				this.function++;
				break;
			case 'if':
				this.if++;
				break;
			case 'else':
				this.else++;
				break;
			case 'elseif':
				this.elseif++;
				break;
			case 'each':
				this.each++;
				break;
			case 'while':
				this.while++;
				break;
			case 'for':
				this.for++;
				break;
			case 'variable':
				this.variable++;
				break;
			case 'module':
				this.module++;
				break;
			case 'operator':
				this.operator++;
				break;
			default:
				Logger.error(`Unknown type: ${type}`);
		}
	}

	write(): void {
		Logger.info(`Extend: ${this.extend}`);
		Logger.info(`Mixins: ${this.mixins}`);
		Logger.info(`Mixin without arguments: ${this.mixinWithoutArguments}`);
		Logger.info(`Mixin with arguments: ${this.mixinWithArguments}`);
		Logger.info(`Function: ${this.function}`);
		Logger.info(`If: ${this.if}`);
		Logger.info(`Else: ${this.else}`);
		Logger.info(`Elseif: ${this.elseif}`);
		Logger.info(`Each: ${this.each}`);
		Logger.info(`While: ${this.while}`);
		Logger.info(`For: ${this.for}`);
		Logger.info(`Variable: ${this.variable}`);
		Logger.info(`Module: ${this.module}`);
		Logger.info(`Operator: ${this.operator}\n`);
	}
}

export default Protocol;
