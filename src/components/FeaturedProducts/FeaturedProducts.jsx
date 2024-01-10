import React, { useEffect, useState } from 'react'
import { Card } from '../card/Card'
import './FeaturedProducts.css'
import axios from 'axios'

export const FeaturedProducts = ({title}) => {


      


      const [Data, setData] = useState([])


      useEffect(() => {
        const fetchedData = async ()=>{
          try {
            const result = await axios.get("http://localhost:1337/api/products?populate=*")
            setData(result.data.data);
          } catch (error) {
            console.log(error)
          }
        }

        fetchedData()
      }, [])
      



  return (
    <>
    <h1 className='productTitle'>{title}</h1>
    <div className="productList">
    {Data.map((item, index)=>(
            <Card item={item} key={index}/>
        ))}
    </div>
    
    
    
    </>
  )
}
