import React, {useState, useEffect} from "react";
import axios from "axios";

const Home=()=>{
    const [images, setImages] = useState([]);
    //I don't think we need a state variable for this because in the pinned page, we are looping through what is in localStorage
    const [userImages, setUserImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(function fetchImagesOnLoad() {
      async function fetchImages() {
        axios.get("https://api.unsplash.com/photos/random?count=5&client_id=qP9ixS0i7zK6raD2pGns_MFlRsvZ_z2c-ZhD_eIDLgc")
              .then(response=>{
                setImages(response.data)
                setIsLoading(false);
              });
    }
      fetchImages();
    }, []);

  function handlePinClick(src) {
    console.log("src id:", src.id);
    const sourceId = src.id
    
    // A user's pinned images are stored in localStorage as an array of objects
    // [{id: "123", url: "https://images.unsplash.com/photo-123"}, {id: "456", url: "https://images.unsplash.com/photo-456"}]

    // Does the user have any pinned images?
    if (localStorage.getItem("userImages") === null) {
      console.debug("No pinned images found in localStorage. Creating a userImages object in localStorage");

      // If not, create an array with the new image
      let updatedPinnedImages = { [sourceId] : src.urls.regular, ...userImages}
      localStorage.setItem("userImages", JSON.stringify(updatedPinnedImages));
    } else {
      // If so, look for the image's id in localStorage object.
      // If it's not there, add it.
      if (localStorage.getItem(src.id) === null){
        let updatedPinnedImages = { [sourceId] : src.urls.regular, ...userImages}
        localStorage.setItem("userImages", JSON.stringify(updatedPinnedImages));     
      } else {
        localStorage.removeItem([sourceId]);
        console.log("removed item", src.id)

      }
      
    } 

    
    //I don't think we need a state variable for this because in the pinned page, we are looping through what is in localStorage
    setUserImages([{[sourceId]: src.urls.regular}, ...userImages]);
    console.log("UserImage State :", userImages);
  }
    return(
        <div>
            {
                images.map(image=>{
                    return (
                        <div key={image.id}>
                        <img src={image.urls.regular} alt="Random"/>
                        <button onClick={e=>handlePinClick(image)}>Pin</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;