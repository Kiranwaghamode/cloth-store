import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import useFetch from '../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'

export const Product = () => {

  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);

  const products = useSelector(state => state.cart.products);
  const {data} = useFetch(`/products/${id}?populate=*`)
  const isAdded = products.find((item)=> item.id === data.id);
  const dispatch = useDispatch()


  return (
    <div className='productMainDiv'>
      <div id="Productleft">
        <img src={`http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`} alt="" />
      </div>
      <div id="Productright">
        <h1>{data?.attributes?.title}</h1>
        <h2>Price: <span> &#8377;{data?.attributes?.price}</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum delectus nobis ratione magni totam. Cupiditate nesciunt praesentium, in sint aperiam alias eveniet provident eius recusandae sequi? Ipsa, facere maxime!</p>

        <button onClick={()=> setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
        {quantity}
        <button onClick={()=>setQuantity((prev) => (prev+1))}>+</button>


        <div className="addToCart" onClick={()=>{
          dispatch(
            addToCart({
            id: data?.id,
            title: data?.attributes?.title,
            img: data?.attributes?.image?.data?.attributes?.url,
            price: data?.attributes?.price,
            totalPrice: data?.attributes?.price * quantity,
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
