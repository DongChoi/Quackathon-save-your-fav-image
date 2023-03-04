import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";

function App() {
  const [images, setImages] = useState([]);
  const [userImages, setUserImages] = useState(
    localStorage.getItem("userImages") || []
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchImagesOnLoad() {
    async function fetchImages() {
      //imagesFromApi = api call to get images
      // setImages = imageFromApi
      setIsLoading(false);
    }
    fetchImages();
  }, []);

  function handlePinClick(src) {
    //setstate....
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <div>
            <RouteList></RouteList>
          </div>
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
