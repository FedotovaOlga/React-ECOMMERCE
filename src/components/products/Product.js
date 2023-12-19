// import "../styles/Product.css";


function Product({productData, onDelete, handleClick}) {

  return (
    <article className="product">
      <h2>{productData.title}</h2>
      <p className="price"
      style={{color: productData.price > 50 ? "red" : "green"}}
      >{productData.price}€</p>
      <img src={productData.thumbnail} alt={productData.title}/>
      <p>{productData.description}</p>
      <button onClick={onDelete}>Supprimer</button>
      <a type="button"
      href={'http://localhost:3001/show/'+productData.id}
      onClick={handleClick}
      >Detail</a>

    </article>
  );
}


export default Product;