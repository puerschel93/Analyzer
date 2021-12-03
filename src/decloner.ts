import fs from 'fs';
import now from 'performance-now';
import Preprocessor from './enums/preprocessors';
import Reader from './reader';
import Logger from './utils/logger';

class Decloner {
	preprocessor: Preprocessor;
	reader: Reader;

	constructor(preprocessor: Preprocessor) {
		this.preprocessor = preprocessor;
		this.reader = new Reader(preprocessor);
	}

	async declone(): Promise<void> {
		let files: string[] = this.reader.readDirectory();
		for (const file of files) {
			const code = await this.reader.readFile(file);
			if (code) await this.findClones(code as string, file);
		}
	}

	async findClones(code: string, file: string): Promise<void> {
		const time1 = now();
		let files: string[] = this.reader.readDirectory();
		let duplicates: number = 0;
		for (const _file of files) {
			if (file === _file) continue;
			const code2 = await this.reader.readFile(_file);
			if (code2) {
				const res = await this.compare(code, code2);
				if (res) {
					duplicates++;
					await fs.rename(
						this.reader.path + '/' + _file,
						this.reader.path + '/clone/' + _file,
						(err) => console.log(err)
					);
				}
			}
		}
		const time2 = now() - time1;
		Logger.info(
			`The comparison took ${time2}ms\nNumber of duplicates: ${duplicates}\nNumber of files: ${files.length}`
		);
		return;
	}

	async compare(code: string, code2: string | boolean): Promise<boolean> {
		if (typeof code2 !== 'string') return false;
		return code === code2;
	}

	static initialize(): Decloner[] {
		return [
			new Decloner(Preprocessor.SCSS),
			new Decloner(Preprocessor.LESS),
			new Decloner(Preprocessor.STYLUS),
		];
	}
}

export default Decloner.initialize();
