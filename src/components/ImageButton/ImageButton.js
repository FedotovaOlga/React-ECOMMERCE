import React from 'react';
import './ImageButton.css';
// import { Link } from 'react-router-dom';

function ImageButton ({image, text, onClick}) {
  return (
    <div className='image-button' onClick={onClick}>
        <img src={image} alt={text} className='image-button-image'/>
        <div className='image-button-text'>{text}</div>
    </div>
  )
}

export default ImageButton