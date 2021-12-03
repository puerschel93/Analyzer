/**
 * Created: 2021-11-27
 * Author: Florian Pürschel
 */
import fs from 'fs';

/**
 * The reader class is used to read the content of a file or
 * a directory.
 */
class Reader {
	filetype: string;
	path: string;

	constructor(type: string) {
		this.filetype = `.${type}`;
		this.path = `./src/input/${type}`;
	}

	/**
	 * Reads all files in a directory and returns an array of it.
	 * @returns An array of all files in the directory
	 */
	readDirectory(): string[] {
		return fs
			.readdirSync(this.path)
			.filter((filename) => !filename.toLowerCase().includes('ds_store'));
	}

	/**
	 * This function reads the content of a file and returns it.
	 * @param filename The name of the file to read
	 * @returns the content of the file or false if the file does not exist
	 */
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
