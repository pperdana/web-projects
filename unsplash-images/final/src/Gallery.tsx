import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&per_page=15`;

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  links: {
    html: string;
  };
  alt_description: string;
}

const Gallery: React.FC = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isError } = useQuery(
    ["images", searchTerm],
    async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    }
  );

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data?.results || [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item: UnsplashImage) => {
        const imageUrl = item.urls.regular;
        return (
          <a
            href={item.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg transition-all duration-300 hover:shadow-5xl"
            key={item.id}
          >
            <img
              src={imageUrl}
              alt={item.alt_description}
              title={item.alt_description}
              className="block w-full	h-[260px] object-cover rounded-lg"
            />
          </a>
        );
      })}
    </section>
  );
};

export default Gallery;
