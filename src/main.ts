import Analyzer from './analyzer';
import Logger from './utils/logger';

const analyzers = Analyzer;

const start = async () => {
	for (const analyzer of analyzers) {
		await analyzer.analyze();
	}
	Logger.success('All analyzers finished.\n');
};

const test = async () => {
	analyzers[2].analyze();
};

test();
//start();
