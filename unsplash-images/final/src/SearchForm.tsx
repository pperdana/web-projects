import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./context";

const SearchForm: React.FC = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="mt-12 capitalize font-bold text-7xl text-center	text-cyan-600 md:text-[46.8px]">
        unsplash images
      </h1>
      <p className="mt-2 text-center text-xl	text-stone-400 tracking-wider md:text-[14px] sm:mx-[30px]">
        Search beautiful images from Unsplash API
      </p>
      <form
        className="mt-6 text-center relative sm:mt-[12px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-98	h-11 rounded-[20px] pl-5 text-lg tracking-widest shadow-3xl hover:shadow-4xl active:shadow-4xl md:w-[269px] md:h-[28.6px] md:text-[11.7px] sm:w-[208px]"
          name="search"
          placeholder="Search Images"
        />
        <button
          type="submit"
          className="absolute w-[2.4rem]	h-[2.4rem] top-[22px]	left-1/2 translate-y-[-50%] translate-x-[433%] cursor-pointer	rounded-full bg-[#f4f09f] md:w-[24.9px] md:h-[24.9px] md:top-[14.3px] sm:top-[14px] sm:left-[43%]"
        >
          <FaSearch className="text-lg text-white ml-3 md:text-[11.7px] md:ml-[7.8px] sm:text-[12px]" />
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
