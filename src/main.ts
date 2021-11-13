import Analyzer from "./analyzer";

const analyzers = Analyzer;

const start = async () => {
  for (const analyzer of analyzers) {
    await analyzer.analyze();
  }
};

start();
