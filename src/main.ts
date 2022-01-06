/**
 * Entrypoint for the analyzer.
 * Created: 2021-11-28
 * Author: Florian Pürschel
 */
import Analyzer from './analyzer';
import Counter from './counter';
import Decloner from './decloner';
import Logger from './utils/logger';

/**
 * Runs a function depending on the given command.
 */
const start = (): void => {
	const args = process.argv?.[2] ?? '';
	switch (args) {
		case 'analyze':
			analyze();
			break;
		case 'declone':
			declone();
			break;
		case 'count':
			Counter.count();
			break;
		default:
			Logger.error('Invalid command.\n');
	}
};

/**
 * Runs the analyzer on all files for all preprocessors.
 * @returns {Promise<void>}
 */
const analyze = async (): Promise<void> => {
	for (const analyzer of Analyzer) {
		await analyzer.analyze();
	}

	let merged: any = {};

	for (const analyzer of Analyzer) {
		for (const val of Object.keys(analyzer.result)) {
			merged[val]
				? (merged[val] += analyzer.result[val])
				: (merged[val] = analyzer.result[val]);
		}
	}

	console.log(merged);

	Logger.success('All analyzers finished.\n');
	return;
};

/**
 * Runs the decloner on all files for all preprocessors.
 * @returns {Promise<void>}
 */
const declone = async (): Promise<void> => {
	for (const decloner of Decloner) {
		await decloner.declone();
	}
	return;
};

/** Starts the program. */
start();
