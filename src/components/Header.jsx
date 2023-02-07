import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import {useSelector} from 'react-redux'


export default function Header() {
  const [addedCart,setAddedcart] = useState(0)
  const product =  useSelector((state) => {
      return state.addProductInCart;
  })
  useEffect(()=>{
    setAddedcart(product.length)
  },[product])
  
  return (
    <nav className="navbar navbar-expand-xl bg-body-tertiary py-2 nav sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Shopping Cart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="#">Features</Link>
            <Link className="nav-link" to="#">Pricing</Link>
          </div>
        </div>
        <Link className="nav-link" to="cart"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg><Badge bg="success">{addedCart}</Badge></Link>
      </div>
    </nav>
  )
}