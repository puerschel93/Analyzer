import Preprocessor from "./enums/preprocessors";

interface Analyzer {
  preprocessor: Preprocessor;
  rules: Object;
}
