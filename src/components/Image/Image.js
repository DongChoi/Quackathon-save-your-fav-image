import React from "react";
import DetailedImage from "./DetailedImage";

const Image = ({ image, handlePin, handleUnpin }) => {
  // function handleClickOnImage() {
  //   console.log("is it clicking?");
  //   return <DetailedImage image={image} />;
  // }

  return (
    <div className="image-box">
      <img src={image.urls.small} alt="random" />

      {!image.isPinned ? (
        <button onClick={() => handlePin(image.id, image)}>
          <i class="fa-regular fa-bookmark"></i>
        </button>
      ) : (
        <button onClick={() => handleUnpin(image.id)}>
          <i class="fa-solid fa-bookmark"></i>
        </button>
      )}
      {/* <button onClick={() => handlePinClick(image)}>
        <i class='fa-regular fa-bookmark'></i>
      </button> */}
    </div>
  );
};

export default Image;
