const Image = ({ image, handlePinClick }) => {
  return (
    <div className='image-box'>
      <img src={image.urls.small} alt='random' />
      <button onClick={() => handlePinClick(image)}>
        <i class='fa-regular fa-bookmark'></i>
      </button>
    </div>
  );
};

export default Image;
