const fs = require("fs");
const csvWriter = require("csv-write-stream");

class WriterCSV {
  constructor(
    outputFilename,
    headers = ["name", "storefront_url", "productPage"]
  ) {
    if (outputFilename) {
      this.outputFilename = outputFilename;
      this.writer = csvWriter({ headers });
      this.writer.pipe(fs.createWriteStream(outputFilename, { flags: "a" }));
    }
  }

  /**
   * Write record
   * @param data e.g record = {name: 'name', storefront_url: 'google.com', productPage: 'google.com' }
   */
  writeRecord(data) {
    this.writer.write(data);
  }

  writeRecords(records) {
    for (let i = 0; i < records.length; i++) {
      this.writeRecord(records[i]);
    }
  }
}

module.exports = WriterCSV;
