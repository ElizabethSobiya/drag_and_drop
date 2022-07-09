import React from 'react'
import './product.css'
import Navbar from '../Description/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function product() {
  // const [checked, setChecked] = useState(true);
  
  return (
    <>
    <Navbar/>
    <h1>Products</h1>
    <div className='products'>
      <div className='prdt'>
        <img src="./Images/1.jpg" alt="" style={{width:'200px', height:'200px'}}/>
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
        <p>Wheel 1</p>
        </div>
      </div>
      <div className='prdt'>
        <img src="./Images/2.jpg" style={{width:'200px', height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
        <p>Wheel 2</p>
        </div>
      </div>
      <div className='prdt'>
        <img src="./Images/3.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Background</p>
        </div>
        
      </div>
      <div className='prdt'>
        <img src="./Images/4.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Front-side</p>
        </div>
        
      </div>
      <div className='prdt'>
        <img src="./Images/5.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Engine</p>
        </div>
        
      </div>
      <div className='prdt'>
        <img src="./Images/6.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Back-Wheel</p>
        </div>
       
      </div>
      <div className='prdt'>
        <img src="./Images/7.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Light</p>
        </div>
       
      </div>
      <div className='prdt'>
        <img src="./Images/8.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Steering</p>
        </div>
       
      </div>
      <div className='prdt'>
        <img src="./Images/9.jpg" style={{width:'200px' , height:'200px'}} alt="" />
        <div className='checkbox'>
        <label>
      <input type="checkbox"   
      />
      Add!
    </label>
    <p>Head-Light</p>
        </div>
        
      </div>
    </div>
    <Link to={'/alignItems'}><button className='arrBtn'>Arrange</button></Link>
    </>
  )
}

export default product