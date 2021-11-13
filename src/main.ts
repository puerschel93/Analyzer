import Analyzer from './analyzer';
import scssrules from './rules/scss';

const analyzers = Analyzer;

const start = async () => {
	for (const analyzer of analyzers) {
		await analyzer.analyze();
	}
};

//start();

const str = '@mixin sample($argument1, $argument2) {';
console.log(scssrules.mixinsWithArguments.test(str));
