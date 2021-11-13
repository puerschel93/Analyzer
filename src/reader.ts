import fs from "fs";

class Reader {
  filetype: string;
  path: string;

  constructor(type: string) {
    this.filetype = `.${type}`;
    this.path = `./src/input/${type}`;
  }

  read(): string[] {
    return fs.readdirSync(this.path);
  }
}

export default Reader;
