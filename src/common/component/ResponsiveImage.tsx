import React from 'react';
import '../../App.css';

interface Props {
  src: string,
  alt: string,
  width: number,
  height: number
}

function ResponsiveImage(props: Props) {
  let src: string = props.src;
  let alt: string = props.alt;
  let width: number = props.width;
  let height: number = props.height;

  return (
    <div style={{ width, }} className="responsive-image">
      <div style={{ paddingBottom: (height / width * 100) + '%' }} />
      <img src={src} className="responsive-image__image" alt={alt} />
    </div>
  );
}

export default ResponsiveImage;