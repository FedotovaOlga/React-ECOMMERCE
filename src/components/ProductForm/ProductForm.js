import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductForm = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [id]);


  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  }

    
  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="m-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="title" value={product.title || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="m-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" name="price" value={product.price || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="m-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" name="description" value={product.description || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="m-3" controlId="thumbnail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image URL" name="thumbnail" value={product.thumbnail || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="m-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" />
      </Form.Group>

      <Form.Group className="m-3" controlId="inStock">
        <Form.Check type="checkbox" label="In stock" />
      </Form.Group>

      <Form.Group className="m-3" controlId="availableOnOrder">
        <Form.Check type="checkbox" label="Available On Order" />
      </Form.Group>

      <Form.Group className="m-3" controlId="featured">
        <Form.Check type="checkbox" label="Featured" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button> 
    </Form>
  );
}

export default ProductForm;
