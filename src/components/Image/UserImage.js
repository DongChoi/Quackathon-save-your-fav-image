const UserImage = ({ key, imageKey, image, handlePinClick, handleUnpin }) => {
  console.log("IMAGE VALUE", image[imageKey[0]]); //[key, ispinned]
  //   {ipCY-i4Quvs: 'https://plus.unsplash.com/premium_photo-1672127206…fHx8fHx8
  //    fDE2NzgwNDQwMDk&ixlib=rb-4.0.3&q=80&w=400', isPinned: true}
  console.log("key", imageKey);
  return (
    <div className="image-box">
      <img src={image[imageKey[0]]} alt="random" />
      {!image.isPinned ? (
        <button onClick={() => handlePinClick(imageKey, image[key][0])}>
          <i class="fa-regular fa-bookmark"></i>
        </button>
      ) : (
        <button onClick={() => handleUnpin(imageKey[0])}>
          <i class="fa-solid fa-bookmark"></i>
        </button>
      )}

      {/* <button onClick={() => handlePinClick(image)}>
          <i class='fa-regular fa-bookmark'></i>
        </button> */}
    </div>
  );
};

export default UserImage;
