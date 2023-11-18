import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, title, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="note">
      <h1 className="text-[1.1em] mb-[6px] font-semibold">{title}</h1>
      <p className="text-[1.1em] mb-[10px] whitespace-pre-wrap">{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
