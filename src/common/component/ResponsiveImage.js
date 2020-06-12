import React from 'react';
import '../../App.css';

function ResponsiveImage({ src, alt, width, height }) {
  return (
    <div style={{width,}} className="responsive-image">
      <div style={{paddingBottom: (height / width * 100) + '%'}} />
      <img src={src} className="responsive-image__image" alt={alt} />
    </div>
  );
}

export default ResponsiveImage;