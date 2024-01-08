import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

export const Products = () => {
  return (
    <>
    <h1 className="mainHeading">CATEGORIES</h1>
    <div className="Products">
      <img src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <button> <Link className='menLink' to='/category/24'>MEN</Link> </button>
    </div>
    <div className="Products">
      <img src="https://images.pexels.com/photos/1201613/pexels-photo-1201613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <button> <Link className='menLink'  to='/category/24'>WOMEN</Link> </button>
    </div>
    <div className="Products">
      <img src="https://images.pexels.com/photos/5637816/pexels-photo-5637816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <button> <Link className='menLink' to='/category/24'>CHILDERN</Link> </button>
    </div>
    <div className="Products">
      <img src="https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <button> <Link className='menLink' to='/category/24'>ACCESSORIES</Link> </button>
    </div>
    
    
    
    
    </>
  )
}
