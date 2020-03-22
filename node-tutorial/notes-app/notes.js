//! This file contains different methods for the app
const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
	return "Your Notes...";
};

//* addNote method for the app
const addNote = function(title, body) {
	const notes = loadNote();
	const duplicate = notes.filter(note => note.title === title);

	if (duplicate.length === 0) {
		notes.push({
			title: title,
			body: body
		});

		saveNotes(notes);

		console.log(chalk.green.inverse("New note added"));
	} else {
		console.log(chalk.red.inverse("Note title taken"));
	}
};

const rmNote = function(title) {
	const notes = loadNote();
	const notesToKeep = notes.filter(note => note.title !== title);

	if (notes.length > notesToKeep.length) {
		console.log(chalk.green.inverse("Note removed"));
	} else {
		console.log(chalk.red.inverse("No note found"));
	}
};

const listNote = () => {
	const notes = loadNote();
	for (let note = 0; note < notes.length; note += 1) {
		console.log(notes[note].title);
	}
};

const loadNote = function() {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

const saveNotes = function(notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

//? Exporting module
module.exports = {
	addNote: addNote,
	getNotes: getNotes,
	rmNote: rmNote,
	listNote: listNote
};
