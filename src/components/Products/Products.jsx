import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

export const Products = () => {
  return (
    <>
    <h1 className="mainHeading">CATEGORIES</h1>
    <div className="Products">
      <img src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <Link className='menLink' to='/category/1'> MEN </Link> 
    </div>
    <div className="Products">
      <img src="https://images.pexels.com/photos/1201613/pexels-photo-1201613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <Link className='menLink'  to='/category/2'  >WOMEN </Link> 
    </div>
    <div className="Products">
      <img src="https://images.pexels.com/photos/5637816/pexels-photo-5637816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <Link className='menLink' to='/category/3'> CHILDERN </Link> 
    </div>
    
    
    
    
    
    </>
  )
}
