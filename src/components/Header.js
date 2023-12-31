import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/contact">Contact</Link>
            <br/>
            <Link to="/products">Products</Link>
            <br/>
            <Link to="/new">New Product</Link>
            <br/>
            {/* <Link to="/show">New Product</Link>
            <br/> */}
    </nav>
  )
}
