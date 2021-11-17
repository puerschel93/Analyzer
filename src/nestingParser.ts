import Preprocessor from './enums/preprocessors';

class NestingParser {
	content: string[];
	preprocessor: Preprocessor;

	constructor(content: any, preprocessor: Preprocessor) {
		this.content = content;
		this.preprocessor = preprocessor;
	}

	/**
	 * Parses the nesting of the given content.
	 */
	parse(): void {
		switch (this.preprocessor) {
			case (Preprocessor.SCSS, Preprocessor.LESS):
				this.bracedParsing();
			case Preprocessor.STYLUS:
				this.bracelessParsing();
			default:
				return;
		}
	}

	bracedParsing() {
		let open = false;
		for (const line of this.content) {
			if (line.includes('{')) open = open ? false : true;
		}
	}

	bracelessParsing() {
		this.content = this.content.map((str) => this.debrace(str));
	}

	/**
	 * This function cleares the content of files from the Stylus
	 * language to follow the indented syntax.
	 * @param content line of code to remove braces from
	 * @returns cleared string
	 */
	debrace(content: string): string {
		return content.replace(/^\{/, '').replace(/\}$/, '');
	}
}

export default NestingParser;
