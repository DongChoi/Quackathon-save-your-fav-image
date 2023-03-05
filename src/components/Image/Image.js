const Image = ({ image, handlePinClick, handleUnpin }) => {
  return (
    <div className='image-box'>
      <img src={image.urls.small} alt='random' />
      {!image.isPinned ? (
        <button onClick={() => handlePinClick(image.id, image.urls.small)}>
          <i class='fa-regular fa-bookmark'></i>
        </button>
      ) : (
        <button onClick={() => handleUnpin(image.id)}>
          <i class='fa-solid fa-bookmark'></i>
        </button>
      )}

      {/* <button onClick={() => handlePinClick(image)}>
        <i class='fa-regular fa-bookmark'></i>
      </button> */}
    </div>
  );
};

export default Image;
