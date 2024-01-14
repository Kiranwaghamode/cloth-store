import React, { useEffect, useState } from 'react'
import './List.css'
import { Card } from '../card/Card'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

export const List = ({subcat, maxPrice, sort , catId}) => {

    const [listProducts, setListProducts] = useState([])


    const {data , error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subcat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
      ).join("")}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)


    // useEffect(() => {
      
    //   ;(async ()=> {
    //     try {
    //       const response = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][categories][id][$eq]=${catId}${subcat.map(
    //         (item) => `&[filters][sub_categories][id][$eq]=${item}`
    //         ).join("")}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);


    //       setListProducts(response.data.data);

    //     } catch (error) {
    //       console.log(error)
    //     }

    //   })()


    // }, [subcat, maxPrice, sort, catId])
  
    // /products?populate=*&[filters][categories][id][$eq]=${catId}${subcat.map(
    //   (item) => `&[filters][sub_categories][id][$eq]=${item}`
    //   ).join("")}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`

    console.log(data)


  return (

     
    
    <div id='listContainer'>
        {data.map((item)=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}
