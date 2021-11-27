import { parse, stringify } from 'scss-parser';
import fs from 'fs';
import Reader from './reader';


const readDirectory = () => {
	return fs
		.readdirSync('./input/scss')
		.filter((filename) => !filename.toLowerCase().includes('ds_store'));
}

const readFile = (filename: string) => {
	const file = fs.readFileSync(`./input/scss/${filename}`, 'utf-8');
	return file;
}

const main = () => {

	const arr = readDirectory();
	const file = readFile(arr[12345]);

	let ast = parse(file)
	for (const node of ast.value){
		console.log(node)
	}
}

main()

