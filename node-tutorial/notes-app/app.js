//! This is the notes app
const yargs = require("yargs");
const notes = require("./notes.js");
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
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: "remove",
	describe: "Removes a new note",
	builder: {
		title: {
			describe: 'used as --title=""',
			demandOption: true,
			type: "string"
		}
	},
	handler: function(argv) {
		notes.rmNote(argv.title);
	}
});

yargs.command({
	command: "list",
	describe: "Lists the notes",
	handler: function() {
		notes.listNote();
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
