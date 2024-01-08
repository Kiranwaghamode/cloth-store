import React, { useState } from 'react'
import './Product.css'

export const Product = () => {

  const [Quantity, setQuantity] = useState(1);



  return (
    <div className='productMainDiv'>
      <div id="Productleft">
        <img src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div id="Productright">
        <h1>Long Sleeve Graphic T-shirt</h1>
        <h2>Price: <span> &#8377;899</span></h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ea, sint tempora fuga fugit tenetur nemo praesentium necessitatibus ipsa eligendi adipisci autem distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, inventore.</p>

        <button onClick={()=> setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
        {Quantity}
        <button onClick={()=>setQuantity((prev) => (prev+1))}>+</button>


        <div className="addToCart">
        <i class="fa-solid fa-cart-shopping" ></i> ADD TO CART
        </div>

        <div className="wishList">
        <i class="fa-regular fa-heart" ></i> ADD TO WISHLIST
        </div>

      </div>
    </div>
  )
}
