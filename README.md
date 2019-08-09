# amazon-product-delivery-checker-scrapper
It's package scrap you data from csv file, if delivery it's not Amazon save to file.csv

# Install 
`npm i amazon-product-delivery-checker-crawler`

# Sample
It's sample(sample.js)   
Sample using commander (`npm i commander --save`)
```
const ParserCSV = require("amazon-product-delivery-checker-crawler");
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

```
