import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onDelete, onCopy }) => {
  const imageUrl = product.thumbnail ? `${product.thumbnail}.jpg` : '';
  return (
    <li key={product._id}>
    <h3>{product.title}</h3>
    <img className='thumbnail' src={imageUrl} alt={product.title} />
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button onClick={() => onDelete(product._id)}>Supprimer</button>
    <button onClick={() => onCopy(product)}>Copier</button>
  </li>
  )
}

export default ProductCard