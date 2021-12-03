import fs from 'fs';

class Reader {
	filetype: string;
	path: string;

	constructor(type: string) {
		this.filetype = `.${type}`;
		this.path = `./src/input/${type}`;
	}

	readDirectory(): string[] {
		return fs
			.readdirSync(this.path)
			.filter((filename) => !filename.toLowerCase().includes('ds_store'));
	}

	readFile(filename: string): string | boolean {
		try {
			const file = fs.readFileSync(`${this.path}/${filename}`, 'utf-8');
			return file;
		} catch (error) {
			return false;
		}
	}
}

export default Reader;
