// This file shows user input through npm package yargs
const yargs = require("yargs");

yargs.version("0.0.1");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  handler: function() {
    console.log("Added a note");
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

console.log(yargs.argv);
