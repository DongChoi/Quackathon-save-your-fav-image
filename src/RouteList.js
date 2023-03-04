import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import SavedImages from "./SavedImages";
import Home from "./Home";
const RouteList=()=> {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userImage" />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default RouteList;
