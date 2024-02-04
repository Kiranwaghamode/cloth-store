import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

export const Card = ({item}) => {
  return (
    <> 
        
        <div className="cardContainer">
            <Link to={`/product/${item.catId}/${item.id}`} className='cardLink' >
            <img src={item.imageUrl} alt="none" />
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            </Link>
        </div>
        
    </> 
  )
}
