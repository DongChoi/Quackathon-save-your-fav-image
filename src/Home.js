import React, {useState, useEffect} from "react";
import axios from "axios";

const Home=()=>{
    const [images, setImages] = useState([]);
    //I don't think we need a state variable for this because in the pinned page, we are looping through what is in localStorage
  const [userImages, setUserImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchImagesOnLoad() {
    async function fetchImages() {
      axios.get("https://api.unsplash.com/photos/random?count=5&client_id=h-JqYpjiPbIbpYbTW9E3yluBUrgU1tCjb2ysGQqM-O0")
            .then(response=>{
              setImages(response.data)
              setIsLoading(false);
            });
  }
    fetchImages();
  }, []);

  function handlePinClick(src) {
    // A user's pinned images are stored in localStorage as an array of objects
    // [{id: "123", url: "https://images.unsplash.com/photo-123"}, {id: "456", url: "https://images.unsplash.com/photo-456"}]

    // Does the user have any pinned images?
    if (localStorage.getItem("userImages") === null) {

      // If not, create an array with the new image
      localStorage.setItem("userImages", JSON.stringify([{id:src.id, url:src.urls.small}, ...userImages]));
    } else {

      // If so, look for the image's id in localStorage
      if (localStorage.getItem(src.id) === null){
        localStorage.setItem("userImages", JSON.stringify([{id:src.id, url:src.urls.regular}, ...userImages]));     
      } else {
        localStorage.removeItem(src.id);
        console.log("removed item", src.id)

      }
      
    } 

    
    //I don't think we need a state variable for this because in the pinned page, we are looping through what is in localStorage
    setUserImages([{id:src.id, url:src.urls.regular}, ...userImages]);
    console.log(userImages);
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