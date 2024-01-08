import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { List } from '../List/List';

export const Category = () => {

  const [maxPrice, setmaxPrice] = useState(1000);
  const catId = parseInt(useParams().id)
  const [sort, setsort] = useState(null)




  return (
    <>
    <div className="catContainer">
        <div id="left">
          <div className="PrdouctCat">
          <h3>Product Categories</h3>

          <div className="inputBox">
          <input type="checkbox" />
          <label htmlFor="input">Hat</label>
          </div>
          <div className="inputBox">
          <input type="checkbox" />
          <label htmlFor="input">Shoe</label>
          </div>
          </div>

          <div className="filter">
            <h3>Filter by Price</h3>
            <span>0</span>
            <input type="range" max={1000} min={0} onChange={(e)=>{
              setmaxPrice(e.target.value);
            }} />
            <span>{maxPrice}</span>
          </div>

          <div className="sortby">
            <h3>Sort by Price</h3>
            <div className="inputBox">
            <input type="radio" name='sort' value='lowest' onChange={(e)=>{
              setsort('esc');
            }}/>
            <label htmlFor="input">Price (Lowest first)</label>
            </div>
            <div className="inputBox">
            <input type="radio" name='sort' value='highest' onChange={(e)=>{
              setsort('desc');
            }}/>
            <label htmlFor="input">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="banner">
              <img src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

            <List/>
            <List/>
            <List/>

        </div>
    </div>
    </>
  )
}
