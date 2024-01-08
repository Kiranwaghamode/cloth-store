import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

export const Card = ({item}) => {
  return (
    <>
        
        <div className="cardContainer">
            <Link to={`/product/${item.id}`} className='cardLink' >
            <img src={item.image} alt="" />
            <h4>{item.product}</h4>
            <p>Price: {item.price}</p>
            </Link>
        </div>
        
    </>
  )
}
