import React from 'react'
import { Slider } from '../Slider/Slider'
import { FeaturedProducts } from '../FeaturedProducts/FeaturedProducts'
import { Products } from '../Products/Products'
import { Footer } from '../Footer/Footer'
import './Home.css'

export const Home = () => {
  return (
    <>
    <div className="main">
        <Slider/>
        <FeaturedProducts title='Featured Products'/>
        <Products/>
        <FeaturedProducts title='Trending Products' />
        <Footer/>
        </div>
    </>
  )
}
