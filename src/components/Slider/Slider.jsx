import React, { useState } from 'react'
import './Slider.css'

export const Slider = () => {

    const [currentSlide, setcurrentSlide] = useState(0);

    const imgData = [
        "https://img.mensxp.com/media/content/2019/Feb/amp-up-your-look-with-the-best-round-neck-t-shirts-for-men1200-1549284127.jpg",
        "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2020/06/03144012/summer-t-shirts-for-men.jpg?tr=w-1200,h-900",
        "https://imgeng.jagran.com/images/2023/jun/vicky%20kaushal1685962206086.jpg"
    ]



    const prevSlide = () =>{
        setcurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    }

    const nextSlide = () =>{
        setcurrentSlide(currentSlide === 2 ? 0 : currentSlide +1);
    }



  return (
    <div className="Slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={imgData[0]} alt="" />
        <img src={imgData[1]} alt="" />
        <img src={imgData[2]} alt="" />
        </div>

        <div className="buttons">
            <span onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></span>
            <span onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></span>
        </div>


    </div>
  )
}
