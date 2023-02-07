import React, { useEffect, useState } from 'react';
import { incNumber, decNumber } from '../reactRedux/action/index'
import { useSelector, useDispatch } from 'react-redux';
import { PlusIcon, DashIcon } from '@primer/octicons-react';
import { addToCart } from '../reactRedux/action/index';


export default function AddCart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

 const product =  useSelector((state) => {
      return state.addProductInCart;
  })
  
  useEffect(()=>{
    setData(product)
	}, [product]);
  
  useEffect(()=>{
   let price = product.reduce((acc,curr)=>{
      acc=acc+curr.price*curr.quantity;
      return acc;
    },0)
    setTotalPrice(price);
  },[product]);

  return (
    <div className='cart-product '>
      {data.map((data, index) => {
        return (
          <div className='card mt-2 m-5 ' style={{ width: 800 }} key={index}>
            <div className='card-body d-flex justify-content-center align-items-center gap-5' >
              <div className='d-flex gap-4 product-detail justify-content-center my-3'>
                <img src={data.image} className="card-img-top mx-auto d-block product-image" />
                <p>{data.title.substring(0, 35)}</p>
              </div>
              <div className='add-containt d-flex gap-3 py-5 justify-content-center'>
                <button onClick={() => dispatch(decNumber(data.id))}><DashIcon size={16} /></button>
                <h1>{data.quantity}</h1>
                <button onClick={() => dispatch(incNumber(data.id))}><PlusIcon size={24} /></button>
              </div>
              <div className='price d-flex gap-5 py-5 justify-content-center'>
                <p>Price: ${data.price}</p>
                <button onClick={() => { dispatch(addToCart(data, 'remove')) }}>remove</button>
              </div>
            </div>
          </div>
        )
      })}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  )
}