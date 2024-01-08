import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="list1">
        <h3>Category</h3>
            <Link to='/' className='listItems'>Men</Link>
            <Link to='/' className='listItems'>Women</Link>
            <Link to='/' className='listItems'>Children</Link>
            <Link to='/' className='listItems'>Accessories</Link>
      </div>

      <div className="list2">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est repellat eum facere, officiis exercitationem, voluptatibus itaque suscipit consequuntur sunt culpa ex quibusdam</p>
      </div>

      <div className="list3">
        <h3>Contact</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum saepe! Dolores nesciunt necessitatibus numquam, voluptates accusamus illum dolor et harum ipsa dignissimos</p> 
      </div>



    </div>
  )
}
