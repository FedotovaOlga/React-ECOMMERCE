import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleCopy(product) {
    fetch("http://localhost:4000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setProducts([...products, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <main>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={handleDelete}
              onCopy={handleCopy}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
