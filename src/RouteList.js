import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import SavedImages from "./SavedImages";
import SavedImagesPage from "./pages/SavedImagesPage";
import Home from "./pages/Home";
const RouteList = ({ userImages, images, handlePin, handleUnpin }) => {
  // const navigate = useNavigate();
  console.log(images);
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

// if (Object.keys(userImages).length === 0) {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar>
//           <div>
//             <RouteList />
//           </div>
//         </NavBar>
//         <Home
//           images={images}
//           handlePinClick={handlePin}
//           handleUnpin={handleUnpin}
//         />
//       </BrowserRouter>
//     </div>
//   );
// } else {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar>
//           <div>
//             <RouteList />
//           </div>
//         </NavBar>
//         <SavedImagesPage />
//       </BrowserRouter>
//     </div>
//   );
// }
