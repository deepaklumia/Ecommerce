import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addToCart} from '../reactRedux/action/index';
export default function Home() {
  
  let [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
      .catch((error) => { console.log(error) })
  }, []);
 
  return (
    <>
      <div className='d-flex  flex-wrap mt-3 justify-content-center gap-3 '>
        {products.map((product) => {
          return (
            <div className="card  p-2 text-center box" style={{ width: 330, height: 430 }} key={product.id}>
              <img src={product.image} className="card-img-top mx-auto d-block " alt="..." style={{ width: 150, height: 200 }} />
              <div className="card-body">
                <h5 className="card-title">{(product.title).substring(0, 20)}</h5>
                <p className="card-text">{product.description.substring(0, 80)}...</p>
                <p>Price: ${product.price}</p>
                <a className="btn btn-primary" onClick={()=>{dispatch(addToCart(product,"add"))}}>Add to Card</a>
              </div>
            </div>
          )
        })}

      </div>
    </>

  )
}