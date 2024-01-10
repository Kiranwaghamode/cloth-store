import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

export const Card = ({item}) => {
  return (
    <>
        
        <div className="cardContainer">
            <Link to={`/product/${item.id}`} className='cardLink' >
            <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" />
            <h4>{item.attributes.title}</h4>
            <p>Price: {item.attributes.price}</p>
            </Link>
        </div>
        
    </>
  )
}
