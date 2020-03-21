//! This file contains different methods for the app
const fs = require("fs");

const getNotes = function() {
  return "Your Notes...";
};

//* addNote method for the app
const addNote = function(title, body) {
  const notes = loadNote();
  const duplicate = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicate.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);

    console.log("New note added");
  } else {
    console.log("Note already exist, please provide a different title");
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
  getNotes: getNotes
};
