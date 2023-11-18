import React, { useState } from "react";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";

interface Note {
  id: number;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <div className="">
      <Header />
      <CreateArea onAdd={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
};

export default App;
