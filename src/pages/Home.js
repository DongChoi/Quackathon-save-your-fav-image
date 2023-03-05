import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '../components/Image/Image';

const Home = ({ images, handlePinClick, handleUnpin }) => {
  return (
    <div className='container'>
      <div className='image-container'>
        {images.map(image => (
          <Image
            key={image.id}
            image={image}
            handlePinClick={handlePinClick}
            handleUnpin={handleUnpin}
          />
        ))}
      </div>
      {/* {images.map(image => {
        return (
          <div key={image.id}>
            <img src={image.urls.small} alt='Random' />
            <button onClick={() => handlePinClick(image)}>Pin</button>
          </div>
        );
      })} */}
    </div>
  );
};

export default Home;
