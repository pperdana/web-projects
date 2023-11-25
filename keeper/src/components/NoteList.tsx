import React from "react";
import Note from "./Note";

interface NoteListProps {
  notes: { title: string; content: string }[];
  deleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
  return (
    <div className="flex flex-wrap mx-auto max-w-[1088px]  xl:w-[816px] lg:max-w-[546px] lg:justify-between md:justify-center mb-[80px]">
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
