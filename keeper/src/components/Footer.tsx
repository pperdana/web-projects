import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed text-center bottom-0 w-[calc(100%-16px)] h-[2.5rem]">
      <p className="text-[#ccc]">Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
