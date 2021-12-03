import Analyzer from './analyzer';
import Decloner from './decloner';
import Logger from './utils/logger';

const start = async () => {
	for (const analyzer of Analyzer) {
		await analyzer.analyze();
	}
	Logger.success('All analyzers finished.\n');
};

const decloner = async () => {
	for (const decloner of Decloner) {
		await decloner.declone();
	}
};

//start();
decloner();
