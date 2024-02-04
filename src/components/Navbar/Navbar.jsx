import React, { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const [open, setopen] = useState(false);

    const products = useSelector(state => state.cart.products);


    const [showMenu, setshowMenu] = useState(false)


    const toggleMenu = ()=>{
        setshowMenu(!showMenu);
        console.log(showMenu)
    }

  return (
   <>
   
   <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}><i class="fa-solid fa-bars"></i></div>
        <div className={`left ${showMenu ? 'show' : ''}`}>
            <Link to='/category/1' className='items'>Men</Link>
            <Link to='/category/2' className='items'>Women</Link>
            <Link to='/category/3' className='items'>Children</Link>
        </div>
        <div className="center">
        <Link to='/' className='mainTitle'>
            <h2>
            <span id="voilet">7</span>
            <span id="indigo">C</span>
            <span id="blue">O</span>
            <span id="green">L</span>
            <span id="yellow">O</span>
            <span id="orange">R</span>
            <span id="red">S</span>
            </h2></Link>
        </div>
        <div className="right">
           
           
            <div className="cart">
            <Link onClick={()=>setopen(!open)} className='cartLink' ><h3>Cart</h3><i className="fa-solid fa-cart-shopping" ></i></Link>
            
            <span>{products.length}</span>

            </div>
        </div>

   </div>
        {open && <Cart/>}
   
   
   
   
   </>
  )
}
