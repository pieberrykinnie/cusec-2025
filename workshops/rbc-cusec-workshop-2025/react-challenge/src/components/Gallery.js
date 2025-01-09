import React from 'react';
import Image from './Image';
import './Gallery.css';

const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

function Gallery() {
  return (
    <div className="Gallery">
      {imageList.map((image, index) => (
        <Image key={index} url={image} title={`image-${index}`} />
      ))}
    </div>
  );
}

export default Gallery;
