import fs from "fs";

console.log("forrst");

fs.readFile("./main.ts", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
