import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import SavedImages from './SavedImages';
import SavedImagesPage from './pages/SavedImagesPage';
import Home from './pages/Home';
const RouteList = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/userImage' element={<SavedImagesPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default RouteList;
