import React from "react";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";

const App: React.FC = () => {
  return (
    <main>
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;
