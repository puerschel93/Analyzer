/**
 * Created: 2021-12-03
 * Author: Florian Pürschel
 */
import Preprocessor from './enums/preprocessors';
import Protocol from './protocol';
import Reader from './reader';
import less_rules from './rules/less';
import RuleSet from './rules/rules';
import scss_rules from './rules/scss';
import styl_rules from './rules/styl';
import Logger from './utils/logger';

/**
 * Analyzer class collects all methods that are used to analyzed
 * the collected preprocessor files.
 */
class Analyzer {
	preprocessor: Preprocessor;
	rules: RuleSet;
	reader: Reader;
	files: string[];
	protocol: Protocol;
	numberOfFiles: number = 0;
	numberOfVariableFiles: number = 0;
	numberOfLines: number = 0;

	constructor(preprocessor: Preprocessor) {
		this.preprocessor = preprocessor;
		this.rules = this.getRules(preprocessor);
		this.reader = new Reader(preprocessor);
		this.protocol = new Protocol(preprocessor);
		this.files = this.reader.readDirectory();
	}

	/**
	 * Analyze the given files from the input directory depending
	 * on the preprocessor.
	 */
	analyze(): void {
		Logger.info('Starting analysis of ' + this.preprocessor);

		/*const progress = new cliProgress.SingleBar(
			{},
			cliProgress.Presets.shades_classic
		);*/

		//progress.start(this.files.length + 1, 1);
		let count: number = 0;

		for (const _file of this.files) {
			const file: string | boolean = this.reader.readFile(_file);
			if (typeof file === 'boolean') continue;
			this.analyzeFile(file);
			//progress.update(++count);
		}
		Logger.info('Finished analysis of ' + this.preprocessor);
		Logger.info('Number of lines: ' + this.numberOfLines);
		//this.protocol.write();
		//progress.stop();
		return;
	}

	/**
	 * Iteration method to analyze the given file line by line.
	 * This method passes each line to the analyzeLine method where
	 * all rules are tested on each line.
	 * @param content array with all lines of the file
	 */
	private analyzeFile(content: string) {
		for (const line of content.split('\n')) {
			this.analyzeLine(line);
		}
	}

	/**
	 * Parse line and test by all given RegEx rules defined in the
	 * rule set.
	 * @param line
	 */
	private analyzeLine(line: string) {
		line = line.trim();
		this.numberOfLines++;
		for (const rule in this.rules.array) {
			const passed = this.rules.array[rule].test(line);
			if (passed) this.protocol.add(Object.keys(this.rules)[rule]);
		}
	}

	/**
	 * Get set of rules for the given preprocessor.
	 * @param preprocessor
	 * @returns
	 */
	private getRules(preprocessor: Preprocessor): RuleSet {
		switch (preprocessor) {
			case Preprocessor.SCSS:
				return scss_rules;
			case Preprocessor.LESS:
				return less_rules;
			case Preprocessor.STYLUS:
				return styl_rules;
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
