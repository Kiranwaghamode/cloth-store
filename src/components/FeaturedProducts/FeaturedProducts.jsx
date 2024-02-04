import React, { useEffect, useState } from 'react'
import { Card } from '../card/Card'
import './FeaturedProducts.css'
import axios from 'axios'
import { productData } from '../../data/productData'


export const FeaturedProducts = ({type}) => {


    

  return (
    <>
    <h1 className='productTitle'>{type}</h1>
    <div className="productList">
    {productData.map((item, index)=>(
            <Card item={item} key={index}/>
        ))}
    </div>
    
     
    
    </>
  )
}
