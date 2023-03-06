import React from "react";
import { useState } from "react";
const DetailedImage = ({ image }) => {
  console.log("********** IMAGE IN THE DETAILED IMAGE COPONENT", image);
  const [imageSize, setImageSize] = useState("small");
  function changeState(str) {
    setImageSize(str);
  }
  return (
    <div className="image-box">
      <img src={image.urls[imageSize]} alt="random" />
      <button onClick={changeState("small")}>small</button>
      <button onClick={changeState("regular")}>regular</button>
      <button onClick={changeState("full")}>large</button>
    </div>
  );
};

export default DetailedImage;
