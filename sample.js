const ParserCSV = require("./parserCSV");
const program = require("commander");

program
  .version("0.1.0")
  .option("-q, --quantity <n>", "Quantity pages")
  .option("-o, --output [value]", "Output file")
  .option("-s, --start <n>", "Start from")
  .option("-i, --input [value]", "Input file", "./query_result.csv")
  .option("-p, --proxy [value]", "Proxy")
  .parse(process.argv);

const { quantity, output, start, input, proxy } = program;

/**
 * Create new instance Parser CSV
 * @type {ParserCSV}
 */
const parser = new ParserCSV({
  start,
  outputFilename: output,
  quantityPages: quantity,
  inputFilename: input,
  proxy
});
parser.startScrapper();
