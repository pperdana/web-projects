import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

interface Note {
  title: string;
  content: string;
}

interface CreateAreaProps {
  onAdd: (newNote: Note) => void;
}

const CreateArea: React.FC<CreateAreaProps> = ({ onAdd }) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState<Note>({
    title: "",
    content: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitNote = (event: React.FormEvent) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note relative w-[480px] mt-[30px] mb-[20px] mx-auto bg-white p-[15px] rounded-[7px] shadow-[0_1px_5px_rgb(138,137,137)] md:w-[320px]">
        {isExpanded && (
          <input
            name="title"
            className="w-full font-semibold border-none p-[4px] outline-none text-[1.2em] resize-none"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          className="w-full border-none p-[4px] outline-none text-[1.2em] resize-none"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded} className="text-red">
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
