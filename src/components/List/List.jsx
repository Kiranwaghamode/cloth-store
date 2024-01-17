import React, { useEffect, useState } from 'react'
import './List.css'
import { Card } from '../card/Card'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

export const List = ({subcat, maxPrice, sort , catId}) => {

    const [listProducts, setListProducts] = useState([])


    const {data , error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subcat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
      ).join("")}&[filters][price][$lte]=${maxPrice}&sort[0]=price:${sort}`)

      console.log(sort)
 
  return (

     
    
    <div id='listContainer'>
        {data.map((item)=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}
