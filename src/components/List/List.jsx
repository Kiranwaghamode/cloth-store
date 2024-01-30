
import './List.css'
import { Card } from '../card/Card'
import useFetch from '../../hooks/useFetch'

export const List = ({subcat, maxPrice, sort , catId}) => {



    const {data } = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subcat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
      ).join("")}&[filters][price][$lte]=${maxPrice}&sort[0]=price:${sort}`)

 
  return (

     
    
    <div id='listContainer'>
        {data.map((item)=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}
