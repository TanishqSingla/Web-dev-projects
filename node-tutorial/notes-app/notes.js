//! This file contains different methods for the app
const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes...";
};

//* addNote method for the app
const addNote = (title, body) => {
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

const rmNote = title => {
  const notes = loadNote();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.blue.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const listNote = () => {
  const notes = loadNote();
  console.log(chalk.greenBright.inverse("Your Notes"));
  //? for in version (not good looking and a bit complex)
  // for (let note in notes) {
  //   console.log(notes[note].title);
  // }
  //? forEach version
  notes.forEach(note => {
    console.log(note.title);
  });
};

const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
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
