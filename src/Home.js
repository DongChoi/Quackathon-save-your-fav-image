import React, { useState, useEffect } from "react";
import axios from "axios";

//tokens:
// 1: h-JqYpjiPbIbpYbTW9E3yluBUrgU1tCjb2ysGQqM-O0
// 2: qP9ixS0i7zK6raD2pGns_MFlRsvZ_z2c-ZhD_eIDLgc
// 3:

const Home = () => {
  const [images, setImages] = useState([]);
  //I don't think we need a state variable for this because in the pinned page, we are looping through what is in localStorage

  const [userImages, setUserImages] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchImagesOnLoad() {
    async function fetchImages() {
      let storage = localStorage.getItem("userImages");
      if (storage) {
        setUserImages(JSON.parse(storage));
      }
      axios
        .get(
          "https://api.unsplash.com/photos/random?count=5&client_id=h-JqYpjiPbIbpYbTW9E3yluBUrgU1tCjb2ysGQqM-O0"
        )
        .then((response) => {
          setImages(response.data);
          setIsLoading(false);
        });
      setUserImages({});
    }
    fetchImages();
  }, []);

  useEffect(
    function fetchUserImagesOnLoad() {
      async function fetchUserImages() {
        localStorage.setItem("userImages", userImages);
      }
      fetchUserImages();
    },
    [userImages]
  );

  function handlePinClick(src) {
    const sourceId = src.id;

    // A user's pinned images are stored in localStorage as an array of objects
    // [{id: "123", url: "https://images.unsplash.com/photo-123"}, {id: "456", url: "https://images.unsplash.com/photo-456"}]

    // Does the user have any pinned images?
    if (localStorage.getItem("userImages") === null) {
      console.debug(
        "No pinned images found in localStorage. Creating a userImages object in localStorage"
      );

      // If not, create an array with the new image
      let updatedPinnedImages = { [sourceId]: src.urls.small };
      localStorage.setItem("userImages", JSON.stringify(updatedPinnedImages));
      setUserImages(updatedPinnedImages);
    } else {
      // If so, look for the image's id in localStorage object.
      // If it's not there, add it.
      if (userImages[sourceId] === undefined) {
        let updatedPinnedImages = {
          [sourceId]: src.urls.regular,
          ...userImages,
        };
        setUserImages(updatedPinnedImages);
        localStorage.setItem("userImages", JSON.stringify(updatedPinnedImages));
      } else {
        let newImages = userImages;
        delete newImages[sourceId];
        setUserImages(newImages);
        localStorage.setItem("userImages", JSON.stringify(newImages));
        console.log("target key", sourceId);
      }
    }
    //I don't think we need a state variable for this because in the pinned page, we are looping through what is in localStorage
    setUserImages({ [sourceId]: src.urls.small, ...userImages });
    console.log("UserImage State :", userImages);
  }
  return (
    <div>
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.urls.small} alt="Random" />
            <button onClick={() => handlePinClick(image)}>Pin</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
