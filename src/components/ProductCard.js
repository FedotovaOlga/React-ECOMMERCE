import React from 'react'

const ProductCard = ({ product, onDelete, onCopy }) => {
  return (
    <li key={product._id}>
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button onClick={() => onDelete(product._id)}>Supprimer</button>
    <button onClick={() => onCopy(product)}>Copier</button>
  </li>
  )
}

export default ProductCard