import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete, onCopy }) => {
  const imageUrl = product.thumbnail ? `${product.thumbnail}.jpg` : '';
  return (
    <li key={product._id}>
    <h3>{product.title}</h3>
    <img className='thumbnail' src={imageUrl} alt={product.title} />
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button onClick={() => onDelete(product._id)}>Delete</button>
    <button onClick={() => onCopy(product)}>Copy</button>
    <button>
      <Link to={`/edit/${product._id}`}>Modify</Link>
    </button>
  </li>
  )
}

export default ProductCard