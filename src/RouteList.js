import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import SavedImages from "./SavedImages";

function RouteList(/*{ savedImages }*/) {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/userImage" />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default RouteList;
