import React from 'react'
import { Card } from '../card/Card'
import './FeaturedProducts.css'

export const FeaturedProducts = ({title}) => {

    const products = [
        {
          "id": 1,
          "product": "Cotton T-shirt",
          "price": 199.99,
          "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
          "overview": "Comfortable cotton tee for everyday wear."
        },
        {
          "id": 2,
          "product": "Slim-fit Jeans",
          "price": 399.99,
          "image": "https://www.jiomart.com/images/product/original/rvuxggrdql/moulty-men-dark-blue-washed-denim-blend-slim-jeans-30-size-30-product-images-rvuxggrdql-0-202211101114.jpg?im=Resize=(1000,1000)",
          "overview": "Stylish slim-fit jeans for a modern look."
        },
        {
          "id": 3,
          "product": "Sport Track Pants",
          "price": 299.99,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDokWLVYIl1NSPG9d7fvzmKYykCod7ZpQqMOrTb9iZZPtRTNlHrPK3DPrtVgysPqTOKo&usqp=CAU",
          "overview": "Performance track pants for active lifestyles."
        },
        {
          "id": 4,
          "product": "Graphic Print Hoodie",
          "price": 499.99,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23F3rKzqB64z-J8cpTjvAV6m86pFfvarmhw&usqp=CAU",
          "overview": "Cozy hoodie with a trendy graphic print."
        },
        
        {
          "id": 5,
          "product": "Classic Polo Shirt",
          "price": 249.99,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWhsqL0BRnT2wYhY86JseVZlC-GrxbAYpYw&usqp=CAU",
          "overview": "Timeless polo shirt for a smart-casual style."
        }
      ]
      



  return (
    <>
    <h1 className='productTitle'>{title}</h1>
    <div className="productList">
    {products.map((item, index)=>(
            <Card item={item} key={index}/>
        ))}
    </div>
    
    
    
    </>
  )
}
