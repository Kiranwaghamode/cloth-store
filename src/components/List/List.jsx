
import './List.css'
import { Card } from '../card/Card'
import { useEffect, useState } from 'react'
import { productData } from '../../data/productData'
import { WomenData } from '../../data/womenData'
import { kidsData } from '../../data/kidsData'

export const List = ({subcat, maxPrice, sort , catId}) => {

  let categoryData = []
  const [filteredData, setfilteredData] = useState([])

  


  useEffect(() => {

    if(catId === 1){
      categoryData = productData
    }else if(catId === 2){
      categoryData = WomenData
    }else if(catId === 3){
      categoryData = kidsData
    }



    const filtered = categoryData.filter(product => product.price <= maxPrice);
    

    const sortedProducts = [...filtered].sort((a, b) => {
      if (sort === 'asc') {
        return a.price - b.price;
      } else if (sort === 'desc') {
        return b.price - a.price;
      }
      return 0; 
    });

    setfilteredData(sortedProducts);
  }, [maxPrice , sort, catId]);



  
  return (

     
    
    <div id='listContainer'>
        {filteredData?.map((item)=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}
