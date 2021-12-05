/**
 * Created: 2021-12-05
 * Author: Florian Pürschel
 */
import Preprocessor from './enums/preprocessors';
import Reader from './reader';
import Logger from './utils/logger';
const { Select } = require('enquirer');

/**
 * The counter class is used to count the number of each syntax variant of the
 * collected stylus files.
 */
class Counter {
	files: string[];
	reader: Reader = new Reader(Preprocessor.STYLUS);
	counter: number = 0;
	alternativeSyntax: number = 0;
	classicSyntax: number = 0;
	corrupted: number = 0;

	constructor() {
		this.files = this.reader.readDirectory();
	}

	/**
	 * Main counting method to initialize the counting process.
	 * @returns {Promise<void>}
	 */
	async count(): Promise<void> {
		for (const file of this.files) {
			this.counter++;
			Logger.clear();
			const content = await this.reader.readFile(file);
			if (typeof content !== 'string') continue;
			await this.fileAnswer(content);
		}
		Logger.clear();
		Logger.info(`Classic: ${this.classicSyntax}`);
		Logger.info(`Alternative: ${this.alternativeSyntax}`);
		Logger.info(`Corrupted: ${this.corrupted}`);
	}

	/**
	 * The fileAnswer method is used to print the current stylus file and ask the
	 * user which syntax variant is used. The given answer is counted in each counting
	 * variable separately.
	 * @param file
	 * @returns {Promise<void>}
	 */
	async fileAnswer(file: string): Promise<void> {
		const prompt = new Select({
			name: 'syntax',
			message: 'Which syntax was used?',
			choices: ['alternative', 'classic', 'corrupted'],
		});

		Logger.log(file);

		Logger.info(`File ${this.counter}/${this.files.length}`);

		const answer = await prompt.run();
		if (answer === 'alternative') this.alternativeSyntax++;
		else if (answer === 'classic') this.classicSyntax++;
		else if (answer === 'corrupted') this.corrupted++;

		return;
	}
}

export default new Counter();
