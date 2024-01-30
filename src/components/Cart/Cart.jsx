import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'

export const Cart = () => {
  
  const products = useSelector(state => state.cart.products)
  // console.log(products)
  const total = products.reduce((acc, product) => acc + product.totalPrice, 0);

  const dispatch = useDispatch();

  return (
    <div className="mainCart">
        <h2>{products.length === 0 ? "YOUR CART IS EMPTY" : "Products in your Cart"}</h2> 
        
        {products?.map((item)=>(
            <div className="cartItem" key={item.id}>
            <div className="cartLeft">
            <img src={`http://localhost:1337${item.img}`} alt="" />
            </div>
            <div className="cartRight">
            <h3>{item?.title}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
            <div className="spanner">
            <span>{item.quantity}x{item.price}:{item.totalPrice}</span>
            <i class="fa-solid fa-trash-can" onClick={()=>{
              dispatch(
                removeItem(item.id)
              )
            }}></i>
            </div>
            </div>
        </div>
        ))}
      

        <div className="subtotal">
        <h4>SUBTOTAL:</h4>
        <h4 >&#8377;{total}</h4>
        </div>

        <div className="checkout">
            PROCEED TO CHECKOUT
        </div>
        <button id='resetCart' onClick={()=>{
          dispatch(resetCart())
        }}>RESET CART</button>
    </div>
  )
}
