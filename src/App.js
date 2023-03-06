import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Home from "./pages/Home";
import { allImages } from "./images";
import SavedImages from "./SavedImages";
import SavedImagesPage from "./pages/SavedImagesPage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userImages, setUserImages] = useState(
    localStorage.getItem("userImages") === null
      ? {}
      : JSON.parse(localStorage.getItem("userImages"))
  );

  useEffect(() => {
    fetchImages();
    setIsLoading(false);
  }, []);

  // WE WILL CHANGE THIS TO FETCHING FROM THE API LATER ON TODAY BEFORE DEPLOYING IT
  const fetchImages = () => {
    const newData = Object.entries(allImages).map((img) => {
      img[1].isPinned = userImages[img[1].id] ? true : false;
      return img[1];
    });

    setImages(newData);

    // await axios
    //   .get(`https://api.unsplash.com/photos/random?count=${numberOfImages}&client_id=${token}`)
    //   .then(response => {
    //     const newData = Object.entries(response.data.splice(0, 10)).map(img => {
    //       img[1].isPinned = userImages[img[1].id] ? true : false;
    //       return img[1];
    //     });

    //     console.log(newData);

    //     setImages(newData);
    //     // setIsLoading(false);
    //     // console.log(response.data.splice(0, 10));
    //   });
  };

  // Handling Pin
  const handlePin = (imageId, imageUrl) => {
    setUserImages({ ...userImages, [imageId]: imageUrl });
    console.log(userImages);

    let userImagesLS = getUserImages();
    userImagesLS = { ...userImagesLS, [imageId]: imageUrl };
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

  // // const [userImages, setUserImages] = useState({});

  // useEffect(function fetchImagesOnLoad() {
  //   // console.debug(
  //   //   'fetchImagesOnLoad useEffect retreiving images from Unsplash'
  //   // );
  //   // const numberOfImages = 3;
  //   // const token = token2;
  //   // async function fetchImages() {
  //   //   axios
  //   //     .get(
  //   //       `https://api.unsplash.com/photos/random?count=${numberOfImages}&client_id=${token}`
  //   //     )
  //   //     .then(response => {
  //   //       setImages(response.data);
  //   //       setIsLoading(false);
  //   //     });
  //   // }
  //   // fetchImages();
  //   setImages(allImages);
  // }, []);

  // useEffect(
  //   function fetchUserImagesOnLoad() {
  //     async function fetchUserImages() {
  //       setUserImages(
  //         JSON.stringify(localStorage.getItem('userImages', userImages))
  //       );
  //     }
  //     fetchUserImages();
  //   },
  //   [userImages]
  // );

  // function handlePinClick(src) {
  //   const sourceId = src.id;
  //   console.debug('A user clicked un/pin on src id: ', sourceId);
  //   let clickedImage = { [sourceId]: src.urls.small };

  //   // A user's pinned images are stored in localStorage as an object
  //   // {userImages: {id: "123", url: "https://images.unsplash.com/photo-123"}, {id: "456", url: "https://images.unsplash.com/photo-456"}}

  //   if (localStorage.getItem('userImages') === null) {
  //     console.debug(
  //       'No pinned images found in localStorage. Creating a userImages object in localStorage'
  //     );

  //     console.log('ID to be added to userImages', clickedImage);
  //     localStorage.setItem('userImages', JSON.stringify(clickedImage));
  //     setUserImages(JSON.stringify(clickedImage));
  //   } else if (localStorage.getItem('userImages') !== null) {
  //     let storedImages = JSON.parse(localStorage.getItem('userImages'));
  //     console.log('storedImages', storedImages);

  //     // adding newly clicked images -- have to check for if it's in the userImages already, if it is then remove it
  //     setUserImages({ ...userImages, clickedImage });

  //     if (storedImages[sourceId]) {
  //       delete storedImages[sourceId];
  //       console.log('storedImages', storedImages);
  //       localStorage.setItem('userImages', JSON.stringify(storedImages));
  //     } else {
  //       let updatedPinnedImages = { ...clickedImage, ...storedImages };
  //       localStorage.setItem('userImages', JSON.stringify(updatedPinnedImages));
  //       console.log('updatedPinnedImages', updatedPinnedImages);
  //     }
  //   }
  // }
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
        {/* <Home
          images={images}
          handlePinClick={handlePin}
          handleUnpin={handleUnpin}
        /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
