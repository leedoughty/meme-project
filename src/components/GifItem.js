import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img src={image.gif.url} alt="placeholder"/>
    </li>
  )
};

export default GifItem;
