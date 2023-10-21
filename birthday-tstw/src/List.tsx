import React from "react";
import Person from "./Person";

interface ListProps {
  people: Array<{ id: number; name: string; age: number; image: string }>;
}

const List: React.FC<ListProps> = ({ people }) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default List;
