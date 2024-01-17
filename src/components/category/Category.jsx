import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { List } from '../List/List';
import { Footer } from '../Footer/Footer';
import axios from 'axios';

export const Category = () => {

  const [maxPrice, setmaxPrice] = useState(1000);
  const catId = parseInt(useParams().id)
  const [sort, setsort] = useState('asc')
  const [data, setData] = useState([])
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  const [rangePrice, setrangePrice] = useState(1000)



  useEffect(() => {

    ;(async ()=>{
      try {
        const resoponse = await axios.get(`http://localhost:1337/api/sub-categories?[filters][categories][id][$eq]=${catId}`)
        setData(resoponse.data.data);
  
      } catch (error) {
        console.log(error);
        
      }

    })()



  }, [])
  

  const handleChange = (e) =>{
    const value = e.target.value ;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked 
      ? [...selectedSubCat, value] 
      : selectedSubCat.filter((item) => item !== value)
    )
      
  }




  return (
    <>
    <div className="catContainer">
        <div id="left">
          <div className="PrdouctCat">
          <h3>Product Categories</h3>

          {
            data?.map((item)=>(
              <div className="inputBox" key={item.id}>
                <input 
                  type="checkbox" 
                  id={item.id} 
                  value={item.id}
                  onChange={handleChange}
                  />
                <label htmlFor="input">{item.attributes.title}</label>
              </div>
            ))
          }
          
          </div>

          <div className="filter">
            <h3>Filter by Price</h3>
            <span>0</span>
            <input type="range" max={1000} min={0} onChange={(e)=>{
              setrangePrice(e.target.value);
            }} />
            <span>{rangePrice}</span>
            <button onClick={()=>{setmaxPrice(rangePrice)}} id='maxPrice'>Set Price</button>
          </div>

          <div className="sortby">
            <h3>Sort by Price</h3>
            <div className="inputBox">
            <input type="radio" name='sort'  value='lowest' onChange={(e)=>{
              setsort('asc');
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

            <List subcat={selectedSubCat} catId={catId} maxPrice={maxPrice} sort={sort}/>

        </div>
    </div>

    <Footer/>
    </>
  )
}
