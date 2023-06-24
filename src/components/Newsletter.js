import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
     <div className='div'>
       <div className='div1 '>
        Div1 
       </div>
       <div className='div1 div2'>
        <div className='content_'>
            <div className="div_item_1">Join Our</div>
            <div className="div_item_2">Newsletter</div>
            <div className="div_item_3">Receive exclusive deals, discounts and many offers.</div>
            <div className="div_item_">
            <input  className="email" type="email" placeholder='Enter your email'></input>
            </div>
            <div className="div_item_4">Subscribe</div>
        </div>
       </div>
       </div>
        
    
  )
}
export default Newsletter