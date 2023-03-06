import "../../style/ImageStyle.css";

const Image = ({ image, handlePin, handleUnpin }) => {
  return (
    <div className="image-box">
      <img className="homeImages" src={image.urls.small} alt="random" />

      {!image.isPinned ? (
        <button className="pin" onClick={() => handlePin(image.id, image.urls.small)}>
          <i class="bookmark fa-regular fa-bookmark"></i>
        </button>
      ) : (
        <button className="pin" onClick={() => handleUnpin(image.id)}>
          <i className="bookmark fa-solid fa-bookmark"></i>
        </button>
      )}
      {/* <button onClick={() => handlePinClick(image)}>
        <i class='fa-regular fa-bookmark'></i>
      </button> */}
    </div>
  );
};

export default Image;
