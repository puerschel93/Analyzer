import Preprocessor from './enums/preprocessors';
import Reader from './reader';
import Logger from './utils/logger';
import scss_rules from './rules/scss';
import less_rules from './rules/less';
import RuleSet from './rules/rules';

class Analyzer {
	preprocessor: Preprocessor;
	rules: RuleSet;
	reader: Reader;
	files: string[];

	constructor(preprocessor: Preprocessor) {
		this.preprocessor = preprocessor;
		this.rules = this.getRules(preprocessor);
		this.reader = new Reader(preprocessor);
		this.files = this.reader.readDirectory();
	}

	/**
	 * Analyze the given files from the input directory depending
	 * on the preprocessor.
	 */
	async analyze(): Promise<void> {
		Logger.info(this.preprocessor);
		for (const _file of this.files) {
			const file: any = this.reader.readFile(_file).split('\n');
			this.analyzeFile(file);
		}
	}

	/**
	 * Iteration method to analyze the given file line by line.
	 * This method passes each line to the analyzeLine method where
	 * all rules are tested on each line.
	 * @param content array with all lines of the file
	 */
	async analyzeFile(content: any): Promise<void> {
		for (const line of content) {
			await this.analyzeLine(line);
		}
	}

	/**
	 * Parse line and test by all given RegEx rules defined in the
	 * rule set.
	 * @param line
	 */
	async analyzeLine(line: string): Promise<void> {
		line = line.trim();
		for (const rule in this.rules.array) {
			const passed = await this.rules.array[rule].test(line);
			if (passed) {
				if (Object.keys(this.rules)[rule] === 'module') {
					Logger.success(Object.keys(this.rules)[rule]);
					console.log(line);
				}
			}
		}
	}

	/**
	 * Fetch set of rules for the given preprocessor.
	 * @param preprocessor
	 * @returns
	 */
	getRules(preprocessor: Preprocessor): RuleSet {
		switch (preprocessor) {
			case Preprocessor.SCSS:
				return scss_rules;
			case Preprocessor.LESS:
				return less_rules;
			default:
				return scss_rules;
		}
	}

	/**
	 * Factory method to create an instance of Analyzer.
	 * @param preprocessor
	 * @returns analyzer instance for the given preprocessor
	 */
	static factory(preprocessor: Preprocessor): Analyzer {
		return new Analyzer(preprocessor);
	}

	/**
	 * Initialize method to create three instances of Analyzers.
	 * @returns
	 */
	static initialize(): Analyzer[] {
		const scss = this.factory(Preprocessor.SCSS);
		const less = this.factory(Preprocessor.LESS);
		const stylus = this.factory(Preprocessor.STYLUS);

		return [scss, less, stylus];
	}
}

export default Analyzer.initialize();
