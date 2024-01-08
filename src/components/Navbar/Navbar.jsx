import React, { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { Cart } from '../Cart/Cart';

export const Navbar = () => {

    const [open, setopen] = useState(false);



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
            <Link to='/'><i class="fa-solid fa-magnifying-glass" ></i></Link>
            <Link to='/'><i class="fa-regular fa-heart" ></i></Link>
            <Link to='/'><i class="fa-solid fa-user" ></i></Link>
            <div className="cart">
            <Link onClick={()=>setopen(!open)} ><i class="fa-solid fa-cart-shopping" ></i></Link>
            
            <span>0</span>

            </div>
        </div>

   </div>
        {open && <Cart/>}
   
   
   
   
   </>
  )
}
