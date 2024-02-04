import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import useFetch from '../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import { productData } from '../../data/productData'
import { WomenData } from '../../data/womenData'
import { kidsData } from '../../data/kidsData'

export const Product = () => {

  const {productId, categoryId} = useParams();

  const catId = parseInt(categoryId);
  const id = parseInt(productId);
  
  let mainData = [];

  if(catId === 1){
    mainData = productData.find(item => item.id === id);
  }else if(catId === 2){
    mainData = WomenData.find(item => item.id === id);
  }else if(catId === 3){
    mainData = kidsData.find(item => item.id === id);
  }


  const [quantity, setQuantity] = useState(1);

  const products = useSelector(state => state.cart.products);
  const {data} = useFetch(`/products/${productId}?populate=*`)
  const isAdded = products.find((item)=> item.id === mainData.id);
  const dispatch = useDispatch()


  return (
    <div className='productMainDiv'>
      <div id="Productleft">
        <img src={mainData?.imageUrl} alt="" />
      </div>
      <div id="Productright">
        <h1>{mainData?.name}</h1>
        <h2>Price: <span> &#8377;{mainData?.price}</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum delectus nobis ratione magni totam.</p>

        <button onClick={()=> setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
        {quantity}
        <button onClick={()=>setQuantity((prev) => (prev+1))}>+</button>

 
        <div className="addToCart" onClick={()=>{
          dispatch(
            addToCart({
            id: mainData?.id,
            title: mainData?.name,
            img: mainData?.imageUrl,
            price: mainData?.price,
            totalPrice: mainData?.price * quantity,
            quantity
          }))
        }}>
        <i class="fa-solid fa-cart-shopping" ></i> {isAdded ? "ADDED TO CART" : "ADD TO CART"}
        </div>

        <div className="wishList">
        <i class="fa-regular fa-heart" ></i>ADD TO WISHLIST
        </div>

      </div>
    </div>
  )
}
