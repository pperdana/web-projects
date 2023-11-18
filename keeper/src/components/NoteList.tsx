import React from "react";
import Note from "./Note";

interface NoteListProps {
  notes: { title: string; content: string }[];
  deleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
  return (
    <div className="flex flex-wrap max-w-[820px] mx-auto lg:max-w-[576px] lg:justify-between md:justify-center">
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
