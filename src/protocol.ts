import Logger from './utils/logger';
import Preprocessor from './enums/preprocessors';
import fs from 'fs';

class Protocol {
	preprocessor: Preprocessor;
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
	cssVariable: number = 0;
	calc: number = 0;

	constructor(preprocessor: Preprocessor) {
		this.preprocessor = preprocessor;
	}

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
			case 'cssVariable':
				this.cssVariable++;
				break;
			case 'calc':
				this.calc++;
				break;
			default:
				Logger.error(`Unknown type: ${type}`);
		}
	}

	async write(): Promise<void> {
		// write file to directory
		await fs.writeFile(
			`./src/analysis/${this.preprocessor}.txt`,
			this.stringify(),
			(err) => (err ? console.log(err) : null)
		);
	}

	stringify(): string {
		return `
			EXTENSION: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			Extend: ${this.extend}

			%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			Mixins Total: ${this.mixins}
			Mixin without arguments: ${this.mixinWithoutArguments}
			Mixin with arguments: ${this.mixinWithArguments}

			FUNCTIONS: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			Function: ${this.function}
			
			CONDITIONALS: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			If: ${this.if}
			Else: ${this.else}
			Elseif: ${this.elseif}
			Each: ${this.each}

			ITERATION: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			While: ${this.while}
			For: ${this.for}

			VARIABLES: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			Variable: ${this.variable}

			BUILT-IN-FUNCTIONS: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			Module: ${this.module}
			Operator: ${this.operator}

			VANILLA CSS: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			CSS Variable: ${this.cssVariable}
			Calc(): ${this.calc}
		`
			.split('\n')
			.map((str) => str.trim())
			.join('\n');
	}
}

export default Protocol;
