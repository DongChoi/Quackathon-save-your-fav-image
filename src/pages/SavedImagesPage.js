import Image from "../components/Image/Image.js";


//Props Handed down from App -> RouteList -> SavedImagesPage
function SavedImagesPage({ images, handlePin, handleUnpin }) {
  
  //Turns SavedImages into array of Objects to reuse Image.js Component
  function loopThroughObject(imagess) {
    const keys = Object.keys(imagess);
    const arrayImages = keys.map((key) => {
      return imagess[key];
    });

    return arrayImages;
  }
  const arrayImages = loopThroughObject(images);
  
  return (
    <div className="container">
      <div className="image-container">
        {Object.keys(images).length === 0 ? <h1>No Saved Images Found.</h1> : null}
        {arrayImages.map((image) => (
          <Image
            key={image.id}
            image={image}
            handlePin={handlePin}
            handleUnpin={handleUnpin}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedImagesPage;
