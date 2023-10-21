import React from "react";

interface PersonProps {
  image: string;
  name: string;
  age: number;
}

const Person: React.FC<PersonProps> = ({ image, name, age }) => {
  return (
    <article className="person grid grid-cols-[auto_1fr] gap-[0.75rem] mb-[1.5rem] items-center">
      <img
        src={image}
        alt={name}
        className="img w-[75px] h-[75px] rounded-[50%] shadow-2xl block object-cover"
      />
      <div>
        <h4 className="font-medium mb-[0.5rem] text-[1.563rem]">{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
