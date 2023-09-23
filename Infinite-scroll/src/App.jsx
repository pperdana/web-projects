import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photosArray, setPhotosArray] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [ready, setReady] = useState(false);

  const count = 10;
  const apiKey = "Qm5r7U4Lck1w1Y1SW2AK6nNKmxsXjwrAphEixhu48is";
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  // Check if all images were loaded
  function imageLoaded() {
    setImagesLoaded((prevImagesLoaded) => prevImagesLoaded + 1);
  }

  // Helper Function to Set Attributes on JSX Elements
  function createImageJSX(photo) {
    return (
      <a key={photo.id} href={photo.links.html} target="blank">
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          title={photo.alt_description}
          onLoad={imageLoaded}
          className="img"
        />
      </a>
    );
  }

  // Get photos from Unsplash API
  async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotosArray((prevPhotosArray) => [...prevPhotosArray, ...data]);
    } catch (error) {
      // Catch Error Here
    }
  }

  // Check to see if scrolling near the bottom of the page, Load More Photos
  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1000 &&
      ready
    ) {
      setReady(false);
      getPhotos();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // On Load
    getPhotos();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ready]);

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setReady(true);
    }
  }, [imagesLoaded, totalImages]);

  return (
    <div>
      <div id="loader">{!ready ? "Loading..." : null}</div>
      <div className="gallery">
        {photosArray.map((photo) => createImageJSX(photo))}
      </div>
    </div>
  );
}

export default App;
