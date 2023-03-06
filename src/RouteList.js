import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SavedImagesPage from "./pages/SavedImagesPage";
import Home from "./pages/Home";

const RouteList = ({ userImages, images, handlePin, handleUnpin }) => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            images={images}
            handlePin={handlePin}
            handleUnpin={handleUnpin}
          />
        }
      />
      <Route
        exact
        path="/userImage"
        element={
          <SavedImagesPage
            images={userImages}
            handlePin={handlePin}
            handleUnpin={handleUnpin}
          />
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouteList;