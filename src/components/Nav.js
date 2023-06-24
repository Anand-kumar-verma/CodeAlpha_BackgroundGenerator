import React from 'react'
import '../components/nav.css'
import { BsSearch ,BsCart2} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import MainLogo from '../images/Assests/photo_9_2023-05-07_10-29-07.jpg'
import parallel_icon from '../images/Assests/Iconcolor.png'
export default function Nav() {


  return (
    <div className='nav'>
 <img className='parallel_line_img_left' src={parallel_icon} alt="" />

     <NavLink to='/'>
     <div className='logo'>
        <img className='logo_img' src={MainLogo} alt="image" />
      </div>
     </NavLink>
      <div className='nav_item'>        
        <NavLink to='/' className="nav-link">
          <div className='item'>Home</div>
        </NavLink>
        <NavLink to='/product' className="nav-link">
          <div className='item'>Product</div>
        </NavLink>
        <NavLink to='/category' className="nav-link">
           <div className='item'>Category</div>
        </NavLink>
        
        <NavLink to='#' className="nav-link">
         <div className='item'>About</div>
        </NavLink>
        <NavLink to='#' className="nav-link">
          <div className='item'>Contact Us</div>
        </NavLink>

      </div>
     <img className='parallel_line_img' src={parallel_icon} alt="" />
      <div  className='nav_icon'>
      <BsSearch/>
      <NavLink to='/cart'>
         <BsCart2/>
      </NavLink>
      </div>
   </div>
  )
}
