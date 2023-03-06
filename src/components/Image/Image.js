import "../../style/ImageStyle.css";

const Image = ({ image, handlePin, handleUnpin }) => {
  // function handleClickOnImage() {
  //   console.log("is it clicking?");
  //   return <DetailedImage image={image} />;
  // }

  return (
    <div className="image-box">
      <img className="homeImages" src={image.urls.small} alt="random" />
      {!image.isPinned ? (
        <button onClick={() => handlePin(image.id, image)}>
          <i className="fa-regular fa-bookmark"></i>
        </button>
      ) : (
        <button className="pin" onClick={() => handleUnpin(image.id)}>
          <i className="bookmark fa-solid fa-bookmark"></i>
        </button>
      )}
      {/* <button onClick={() => handlePinClick(image)}>
        <i className='fa-regular fa-bookmark'></i>
      </button> */}
    </div>
  );
};

export default Image;
