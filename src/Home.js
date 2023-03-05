import React, { useState, useEffect } from "react";
import axios from "axios";

const token1 = "h-JqYpjiPbIbpYbTW9E3yluBUrgU1tCjb2ysGQqM-O0";
const token2 = "qP9ixS0i7zK6raD2pGns_MFlRsvZ_z2c-ZhD_eIDLgc";


const Home = () => {
  const [images, setImages] = useState([]);

  // The initial value of userImages is an empty object
  // It may be populated with data from localStorage
  const [userImages, setUserImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchImagesOnLoad() {

    console.debug("fetchImagesOnLoad useEffect retreiving images from Unsplash")
    const numberOfImages = 3;
    const token = token2;
    async function fetchImages() {
      axios
        .get(
          `https://api.unsplash.com/photos/random?count=${numberOfImages}&client_id=${token}`
        )
        .then((response) => {
          setImages(response.data);
          setIsLoading(false);
        });
    }
    fetchImages();
  }, []);

  useEffect(function fetchUserImagesOnLoad() {
      async function fetchUserImages() {
        setUserImages(JSON.stringify(localStorage.getItem("userImages", userImages)));
      } 
      fetchUserImages();
  },[userImages]);

  function handlePinClick(src) {
    const sourceId = src.id;
    console.debug("A user clicked un/pin on src id: ", sourceId)
    let clickedImage = { [sourceId]: src.urls.small }

    // A user's pinned images are stored in localStorage as an object 
    // {userImages: {id: "123", url: "https://images.unsplash.com/photo-123"}, {id: "456", url: "https://images.unsplash.com/photo-456"}}

    if (localStorage.getItem("userImages") === null) {
      console.debug("No pinned images found in localStorage. Creating a userImages object in localStorage");

      console.log("ID to be added to userImages", clickedImage)
      localStorage.setItem("userImages", JSON.stringify(clickedImage));
      setUserImages(JSON.stringify(clickedImage));
    
    } else if (localStorage.getItem("userImages") !== null) {
        let storedImages = JSON.parse(localStorage.getItem("userImages"));
        console.log("storedImages", storedImages)

      if (storedImages[sourceId]){
        delete storedImages[sourceId];
        console.log("storedImages", storedImages) 
        localStorage.setItem("userImages", JSON.stringify(storedImages));
      
      } else {        
        let updatedPinnedImages = {...clickedImage, ...storedImages,};
        localStorage.setItem("userImages", JSON.stringify(updatedPinnedImages));
        console.log("updatedPinnedImages", updatedPinnedImages)
      }
    }
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
