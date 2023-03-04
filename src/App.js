import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Home from "./Home";

function App() {
  // const [images, setImages] = useState([]);
  // const [userImages, setUserImages] = useState(
  //   localStorage.getItem("userImages") || []
  // );

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(function fetchImagesOnLoad() {
  //   async function fetchImages() {
  //     axios.get("https://api.unsplash.com/photos/random?count=30&client_id=h-JqYpjiPbIbpYbTW9E3yluBUrgU1tCjb2ysGQqM-O0")
  //           .then(response=>{
  //             setImages(response.data)
  //           })
  //     setIsLoading(false);
  //   }
  //   fetchImages();
  // }, []);

  // function handlePinClick(src) {
  //   //setstate....
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <div>
            <RouteList></RouteList>
          </div>
        </NavBar>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
