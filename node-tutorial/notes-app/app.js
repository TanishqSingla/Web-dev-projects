// This file shows user input through npm package yargs
const yargs = require("yargs");

yargs.version("0.0.1");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Content",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
  }
});

yargs.command({
  command: "remove",
  describe: "Removes a new note",
  handler: function() {
    console.log("Removed a note");
  }
});

yargs.command({
  command: "list",
  describe: "Lists the notes",
  handler: function() {
    console.log("Listed a note");
  }
});

yargs.command({
  command: "read",
  describe: "Reads a note",
  handler: function() {
    console.log("Read a note");
  }
});

yargs.parse();
