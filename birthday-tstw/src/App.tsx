import React, { useState } from "react";
import data from "./data";
import List from "./List";

interface Person {
  id: number;
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="container w-[90vw] max-w-[600px] my-[5rem] mx-0 bg-white rounded-[0.25rem] py-[1.5rem] px-[2rem] shadow-xl">
        <h3 className="mb-[2rem] text-[1.953rem]">
          {people.length} birthdays today
        </h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block w-full cursor-pointer text-white bg-[#d946ef] border-transparent rounded-[0.25rem] tracking-[1px] py-[0.375rem] px-[0.75rem] shadow-xl transition-all duration-300 ease-in-out capitalize inline-block hover:bg-[#a21caf] hover:shadow-2xl"
          onClick={clearAll}
        >
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
