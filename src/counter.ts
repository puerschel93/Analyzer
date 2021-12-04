import Preprocessor from './enums/preprocessors';
import Reader from './reader';
import Logger from './utils/logger';
const { Select } = require('enquirer');

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

	async count(): Promise<void> {
		for (const file of this.files) {
			this.counter++;
			Logger.clear();
			const content = await this.reader.readFile(file);
			if (typeof content !== 'string') continue;
			await this.fileAnswer(content);
		}
		Logger.clear();
		console.log(`Classic: ${this.classicSyntax}`);
		console.log(`Alternative: ${this.alternativeSyntax}`);
		console.log(`Corrupted: ${this.corrupted}`);
	}

	async fileAnswer(file: string): Promise<void> {
		const prompt = new Select({
			name: 'syntax',
			message: 'Which syntax was used?',
			choices: ['alternative', 'classic', 'corrupted'],
		});

		console.log(file);

		Logger.info(`File ${this.counter}/${this.files.length}`);

		const answer = await prompt.run();
		if (answer === 'alternative') this.alternativeSyntax++;
		else if (answer === 'classic') this.classicSyntax++;
		else if (answer === 'corrupted') this.corrupted++;

		return;
	}
}

export default new Counter();
