import Preprocessor from "./enums/preprocessors";
import Reader from "./reader";

class Analyzer {
  preprocessor: Preprocessor;
  rules: Object;
  reader: Reader;
  files: string[];

  constructor(preprocessor: Preprocessor) {
    this.preprocessor = preprocessor;
    this.rules = this.getRules(preprocessor);
    this.reader = new Reader(preprocessor);
    this.files = this.reader.read();
  }

  /**
   * Analyze the given files from the input directory depending
   * on the preprocessor.
   */
  async analyze(): Promise<void> {
    console.log(
      "Analyzing " + this.preprocessor + ` (${this.files.length} files)`
    );
  }

  /**
   * Fetch set of rules for the given preprocessor.
   * @param preprocessor
   * @returns
   */
  getRules(preprocessor: Preprocessor): Object {
    return {};
  }

  static factory(preprocessor: Preprocessor): Analyzer {
    return new Analyzer(preprocessor);
  }

  static initialize(): Analyzer[] {
    const scss = this.factory(Preprocessor.SCSS);
    const less = this.factory(Preprocessor.LESS);
    const stylus = this.factory(Preprocessor.STYLUS);

    return [scss, less, stylus];
  }
}

export default Analyzer.initialize();
