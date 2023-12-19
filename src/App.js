import React from "react"; // dans les versions précédentes fallait importer, ici pas besoin
import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/products/ProductList";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NewProduct from "./components/products/NewProduct";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RouteLayout from "./components/RouteLayout";
import Show from "./components/products/Show";

export default function App() {

  const [name, setName] = useState("");

  async function postName(e){
    e.preventDefault();

    try {
      await fetch("http://localhost:4000/post_name", {
        name
    })
   } catch (error) {
      console.log(error);
      
    }
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayout/>,
      children:[
        {
          path: "",
          element: <Home/>,
        },

        {
          path: "contact",
          element: <Contact/>,
        },

        {
          path: "products",
          element: <ProductList />,
        },
    
        {
          path: "new",
          element: <NewProduct />,
        },

        {
          path: "show/:id",
          element: <Show />,
        },
      ]
    },


  ]);

  return(
    <div className="App">

    <form onSubmit={postName}>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button type="submit" value="Envoyer">Envoyer</button>
    </form>

      {/* <Header />  surtout pas placer ça ici, ça fait un router dans un autre router */}
      <RouterProvider router={router} />
    </div>
  );

  // import * as ReactDOM from "react-dom/client";
  // import {
  //   createBrowserRouter,
  //   RouterProvider,
  // } from "react-router-dom";

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);

  //
  // states
  // const [data, setData] = useState([]);
  // déclarations

  // methods
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // tableau vide =>il sa dit "je lance qu'une fois"

  // async function fetchData() {
  //   try {
  //     const response = await fetch("http://localhost:3000/products");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     console.log(jsonData);
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  // }

  // const handleDeleteProduct = (productId) => {
  //   fetch(`http://localhost:3000/products/${productId}`, {
  //     method: "DELETE",
  //   }).then((res) => fetchData());
  // };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const title = e.target.title.value;
  //   const price = e.target.price.value;
  //   const thumbnail = e.target.thumbnail.value;
  //   const description = e.target.description.value;

  //   const newProduct = {
  //     title,
  //     price,
  //     thumbnail,
  //     description,
  // };

  // fetch("http://localhost:3000/products/", {
  //   method: "POST",
  //   headers: {"Content-Type"  : "application/json",
  // },
  // body: JSON.stringify(newProduct),
  // }).then((res) => {
  //    // fetchData()
  // }

  // );

  // };

  // return (
  //   <div className="App">
  //     <main>

  // {
    /* <h1 style={{ textAlign: "center" }}>Liste des produits</h1>
<ProductList/>
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
          </form> */
  // }
  //       </main>
  //     </div>
  //   );
}
