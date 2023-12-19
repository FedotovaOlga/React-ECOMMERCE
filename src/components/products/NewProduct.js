import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const thumbnail = e.target.thumbnail.value;
    const description = e.target.description.value;
    

    const newProduct = {
      title,
      price,
      thumbnail,
      description,
    };


    fetch("http://localhost:3000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then((res) => {
      // fetchData()
    });

    // pour vider:
    e.target.title.value = "";
    e.target.price.value = "";
    e.target.thumbnail.value = "";
    e.target.description.value = "";
    navigate('/products')
    
  };

  return (
    <form method="post" onSubmit={handleChange}>
      <label for="title">Title :</label>
      <input type="text" id="title" name="title" />
      <br />
      <label for="price">Price :</label>
      <input type="text" id="price" name="price" />
      <br />
      <label for="thumbnail">Image :</label>
      <input type="text" id="thumbnail" name="thumbnail" />
      <br />
      <label for="description">Description :</label>
      <input type="text" id="description" name="description" />
      <br />

      <input type="submit" value="Envoyer"></input>
    </form>
  );
}


// Une version avec useState :
// import { useState } from "react";

// export default function NewProduct() {
//   const [titleValue, setTitleValue] = useState("");
//   const [priceValue, setPriceValue] = useState(0);
//   const [description, setDescription] = useState("");

//   function handleTitle(e) {
//     setTitleValue(e.target.value);
//   }
//   function handlePrice(e) {
//     setPriceValue(e.target.value);
//   }
//   function handleDescription(e) {
//     setDescription(e.target.value);
//   }

//   // sendData
//   const newProduct = (product) => {
//     fetch("http://localhost:3004/products", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(product),
//     })
//       .then((res) => {
//         console.log("produit envoyé");
//       })
//       .catch((err) => console.log(err));
//   };

//   function handleSubmit(e) {
//     e.preventDefault();

//     let product = {
//       title: titleValue,
//       price: priceValue,
//       description: description,
//     };
//     newProduct(product);
//     setTitleValue("")
//   }

//   return (
//     <>
//       <div id="form" className="mt-5 w-50 mx-">
//         <form onSubmit={handleSubmit}>
//           <input value={titleValue} onChange={handleTitle} />
//           <input type="number" value={priceValue} onChange={handlePrice} />
//           <input value={description} onChange={handleDescription} />

//           <button>Envoyer</button>
//         </form>
//       </div>
//     </>
//   );
// }