import React from "react";
import Product from "./Product";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/products");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("error:", error);
    }
  }

  const handleDeleteProduct = (productId) => {
    if (!window.confirm("sûr?")) return ; // pour ne pas supprimer si le user n'a pas confirmé
    fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    }).then((res) => fetchData());
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Liste des produits</h1>
      {data.map((product) => (
        <Product
          key={product.id}
          productData={product}
          onDelete={
            () => {
              handleDeleteProduct(product.id);
            }}
            // on fait ici une fonction anonyme, parce que si on passe directement handleDeleteProduct, onDelete va nous supprimer tous les produits, car ça va appeler la fonction à chaque tour de boucle

        />
      ))}
    </div>
  );
}
