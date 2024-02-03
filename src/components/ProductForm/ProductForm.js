import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inStock">
        <Form.Check type="checkbox" label="In stock" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="availableOnOrder">
        <Form.Check type="checkbox" label="Available On Order" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="featured">
        <Form.Check type="checkbox" label="Featured" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button> 
    </Form>
  );
}

export default ProductForm;
