import React, { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    // const [cartCount, setcartCount] = useState(0)
    const [open, setopen] = useState(false);

    const products = useSelector(state => state.cart.products);

    // setcartCount(products.length)

  return (
   <>
   
   <div className="navbar">
        <div className="left">
            <Link to='/' className='items'>Men</Link>
            <Link to='/' className='items'>Women</Link>
            <Link to='/' className='items'>Children</Link>
            <Link to='/' className='items'>Accessories</Link>
        </div>
        <div className="center">
            <h2>LAMA STORE</h2>
        </div>
        <div className="right">
            <Link to='/' className='items'>Homepage</Link>
            <Link to='/' className='items'>About</Link>
            <Link to='/' className='items'>Contact</Link>
            <Link to='/' className='items'>Stores</Link>
            <Link to='/'><i className="fa-solid fa-magnifying-glass" ></i></Link>
            <Link to='/'><i className="fa-regular fa-heart" ></i></Link>
            <Link to='/'><i className="fa-solid fa-user" ></i></Link>
            <div className="cart">
            <Link onClick={()=>setopen(!open)} ><i className="fa-solid fa-cart-shopping" ></i></Link>
            
            <span>{products.length}</span>

            </div>
        </div>

   </div>
        {open && <Cart/>}
   
   
   
   
   </>
  )
}
