import React, { useState } from "react";
import UserImage from "../components/Image/UserImage.js";

function SavedImagesPage({ images, handlePinClick, handleUnpin }) {
  function loopThroughObject(imagess) {
    //get keys, and loop through keys and get image.id
    /*{
    keaiofa-asdhi : link
  }*/
    const keys = Object.keys(imagess);
    console.log("KEYS ARE RIGHT HERE", keys);
    const arrayImages = keys.map((key) => {
      return { [key]: imagess[key], isPinned: true };
    });

    return arrayImages;
  }
  const arrayImages = loopThroughObject(images);
  console.log("ARRAY IMAGES AFTER LOOP", arrayImages);
  return (
    <div className="container">
      <div className="image-container">
        {arrayImages.map((image) => (
          <UserImage
            key={[image]}
            imageKey={Object.keys(image)}
            image={image}
            handlePinClick={handlePinClick}
            handleUnpin={handleUnpin}
          />
        ))}
      </div>
      {/* {images.map(image => {
        return (
          <div key={image.id}>
            <img src={image.urls.small} alt='Random' />
            <button onClick={() => handlePinClick(image)}>Pin</button>
          </div>
        );
      })} */}
    </div>
  );
}

export default SavedImagesPage;
