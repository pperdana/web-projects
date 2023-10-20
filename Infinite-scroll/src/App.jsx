import React, { useState, useEffect, useRef } from "react";

function InfiniteScroll() {
  const [photosArray, setPhotosArray] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [ready, setReady] = useState(false);
  const imageContainerRef = useRef(null);
  const loaderRef = useRef(null);
  const count = 30;
  const apiKey = "EkuXiMb4NzKMP_c-NLHCi2EMJFHF4LKO8PjgkfshwTM"; // Replace with your API key
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setReady(true);
      loaderRef.current.hidden = true;
    }
  }, [imagesLoaded, totalImages]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 1000
    ) {
      if (ready) {
        setReady(false);
        getPhotos();
      }
    }
  };

  const imageLoaded = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
  };

  const setAttributes = (element, attributes) => {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  };

  const displayPhotos = () => {
    setImagesLoaded(0);
    setTotalImages(photosArray.length);

    photosArray.forEach((photo) => {
      const item = document.createElement("a");
      setAttributes(item, {
        href: photo.links.html,
        target: "_blank",
      });

      const img = document.createElement("img");
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
      });

      img.addEventListener("load", imageLoaded);
      item.appendChild(img);
      imageContainerRef.current.appendChild(item);
    });
  };

  const getPhotos = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotosArray([...photosArray, ...data]);
      displayPhotos();
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  return (
    <div>
      <div id="image-container" ref={imageContainerRef}></div>
      <div id="loader" ref={loaderRef}>
        Loading...
      </div>
    </div>
  );
}

export default InfiniteScroll;
