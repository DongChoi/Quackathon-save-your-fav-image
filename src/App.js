import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import { allImages } from "./images";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userImages, setUserImages] = useState(
    localStorage.getItem("userImages") === null
      ? {}
      : JSON.parse(localStorage.getItem("userImages"))
  );

  // React would like fetchImages as a dependency, but we're not calling it.
  useEffect(() => {
    fetchImages();
    setIsLoading(false);
  }, []);

  const fetchImages = () => {
    const newData = Object.entries(allImages).map((img) => {
      img[1].isPinned = userImages[img[1].id] ? true : false;
      return img[1];
    });

    setImages(newData);
  };

  // Handling Pin
  const handlePin = (imageId, image) => {
    setUserImages({ ...userImages, [imageId]: image });
    image["isPinned"] = true;
    let userImagesLS = getUserImages();
    userImagesLS = { ...userImagesLS, [imageId]: image };
    localStorage.setItem("userImages", JSON.stringify(userImagesLS));

    // Updating isPinned to true for the selected image inside images state
    const newImages = [...images];
    const selectedImage = newImages.find((a) => a.id === imageId);

    selectedImage.isPinned = true;
    setImages(newImages);
  };

  // Handling the Unpin
  const handleUnpin = (imageId) => {
    const newUserImages = userImages;
    delete newUserImages[imageId];
    setUserImages(newUserImages);

    // let userImagesLS = getUserImages();
    localStorage.setItem("userImages", JSON.stringify(userImages));

    // Updating isPinned to false for the selected image inside images state
    const newImages = [...images];
    const selectedImage = newImages.find((a) => a.id === imageId);

    selectedImage.isPinned = false;
    setImages(newImages);
  };

  // getting userImages from localStorage
  const getUserImages = () => {
    let images;

    if (localStorage.getItem("userImages") === null) {
      images = {};
    } else {
      images = JSON.parse(localStorage.getItem("userImages"));
    }

    return images;
  };

  if (isLoading) {
    return (
      <div className="loading" style={{ width: "3em", height: "3em" }}>
        Loading
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar userImages={userImages} />
        <div>
          <RouteList
            images={images}
            handlePin={handlePin}
            handleUnpin={handleUnpin}
            userImages={userImages}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
