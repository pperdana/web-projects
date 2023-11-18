import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-500 my-auto mx-[-16px] py-[16px] px-[32px] shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
      <h1 className="text-white font-mc font-extralight text-[32px] flex items-center">
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
};

export default Header;
