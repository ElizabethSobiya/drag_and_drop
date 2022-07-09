import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <>
     <h3>Product Details</h3>
     <div className='main'>
    <div className='description'>
   <h4>Tractor</h4>
   <img src ='./tractor.png' style={{width:'300px', height: '300px'}} alt=""/>
   <p></p>
   <Link to = '/product'><button className='startBtn'>Start</button></Link>
   </div>
   <div className='content'>
    <p>A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, 
     for the purposes of hauling a trailer or machinery such as that used in agriculture, mining or construction</p>
     <p>Tractor parts such as engine, front wheels, back wheels, seater, holder, headlight, smoke ejector.  </p>
   </div>
    </div>
    
    </>
  )
}

export default Main