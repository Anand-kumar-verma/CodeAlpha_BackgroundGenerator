import React from 'react'
import '../components/explore_by_category.css';

import chair1 from '../images/halfkursi.jpg'
import chair2 from '../images/kusri1.jpg'
import up from '../images/images/Up_arrow.png'
import down from '../images/images/Down_arrow.png'
import { NavLink } from 'react-router-dom';
export default function ChairSection() {
  return (
    <div className='root'>
    <div className='left_div_image'>
    <img src={chair1} alt="" className='chair1' />
    </div>


    <div className='right_div_image'>
    <div className="item_image">
        <img src={chair2} alt="" />
        <div className='text_div_image'>
            <div className='text1_'>Armchair</div>
            <div className='text2_'>Light Single Chair</div>
            <div  className='text3_'>$145</div>
        </div>
    </div>
    <div className="item_image">
        <img src={chair2} alt="" />
        <div className='text_div_image'>
            <div className='text1_'>Armchair</div>
            <div className='text2_'>Light Single Chair</div>
            <div  className='text3_'>$145</div>
        </div>
        </div>
    <div className="item_image">
        <img src={chair2} alt="" /> 
        <div className='text_div_image'>
            <div className='text1_'>Armchair</div>
            <div className='text2_'>Light Single Chair</div>
            <div  className='text3_'>$145</div>
        </div>
    </div>
    <div className="item_image">
        <img src={chair2} alt="" />
        <div className='text_div_image'>
            <div className='text1_'>Armchair</div>
            <div className='text2_'>Light Single Chair</div>
            <div  className='text3_'>$145</div>
        </div>
    </div>
    </div>

    <div className='bar'></div>
    <div className='btnbar'>
      <div className='inner_div'>
         <div className='explore-btn'><NavLink className="nav-link" to={'/product'}><div className='ex'>Explore Item</div></NavLink></div>
         <div className='arrow_button'>
          <img src={up} alt="" className='up'/>
          <img src={down} alt="" className='down'/>
         </div>
      </div>
     
   
   
    
    </div>

   


</div>
  )
}
