import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="list1">
        <h3>Category</h3>
            <Link to='/category/1' className='listItems'>Men</Link>
            <Link to='/category/2' className='listItems'>Women</Link>
            <Link to='/category/3' className='listItems'>Children</Link>
      </div>

      <div className="list2">
        <h3>About</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, at?</p>
      </div>

      <div className="list3">
        <h3>Contact</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, autem?</p> 
      </div>



    </div>
  )
}
