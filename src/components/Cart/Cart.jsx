import React from 'react'
import './Cart.css'

export const Cart = () => {
    const data = [
        {
            "id": 1,
            "product": "Cotton T-shirt",
            "price": 199.99,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
            "overview": "Comfortable cotton tee for everyday wear."
          },
        {
            "id": 1,
            "product": "Cotton T-shirt",
            "price": 199.99,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
            "overview": "Comfortable cotton tee for everyday wear."
          },
        {
            "id": 1,
            "product": "Cotton T-shirt",
            "price": 199.99,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
            "overview": "Comfortable cotton tee for everyday wear."
          },
        {
            "id": 1,
            "product": "Cotton T-shirt",
            "price": 199.99,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
            "overview": "Comfortable cotton tee for everyday wear."
          },
        {
            "id": 1,
            "product": "Cotton T-shirt",
            "price": 199.99,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
            "overview": "Comfortable cotton tee for everyday wear."
          },
        {
            "id": 1,
            "product": "Cotton T-shirt",
            "price": 199.99,
            "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/b/r/j/m-cy0010-adv-black-cryptic-original-imagrva58f7auzzg.jpeg?q=90",
            "overview": "Comfortable cotton tee for everyday wear."
          },
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
          }
    ]
  return (
    <div className="mainCart">
        <h2>Products in your Cart</h2>
        
        {data?.map((item)=>(
            <div className="cartItem" key={item.id}>
            <div className="cartLeft">
            <img src={item.image} alt="" />
            </div>
            <div className="cartRight">
            <h3>Long sleeve graphic T-shirt</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
            <div className="spanner">
            <span>1x {item.price}</span>
            <i class="fa-solid fa-trash-can"></i>
            </div>
            </div>
        </div>
        ))}

        <div className="subtotal">
        <h4>SUBTOTAL:</h4>
        <h4 >&#8377;899</h4>
        </div>

        <div className="checkout">
            PROCEED TO CHECKOUT
        </div>
    </div>
  )
}
