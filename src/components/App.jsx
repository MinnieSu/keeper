import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

// create an add note functionality
// 1) create a const inputText
// 2) add an onChange event to trigger handleChange fn that stores the text entered by the user into inputText.
// 3) add an onClick event to trigger addItem fn that add new input to the array of ToDoItems.
// 4) map through all the items in the todoitems array.

// create the delete note functionality
// 1) identify the index of selected note when user clicks the delete button
// 2) pass the index to App
// 3) use filter() fn to render notes that do not have the same index.
