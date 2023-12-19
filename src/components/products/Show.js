import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from './Product';

export default function Show() {
const [product, setProduct] = useState({});
    const{id} = useParams();
    console.log(id);


    useEffect(()=>{
      fetch('http://localhost:3000/products/'+id)
      .then(response => response.json())
     .then(data =>{
      console.log(data);
      setProduct(data)
     })
     .catch ((error) => {
      console.log("error:", error);
    })
    }, [])

  return (
    <div>
    <h1>Product n° {product.title}</h1>
    
    <Product productData={product}/>
    </div>
  )
}
