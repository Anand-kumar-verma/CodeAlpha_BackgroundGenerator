import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'
import {useSelector} from 'react-redux';
import CardItem from '../components/CardItem';
import '../components/Card_Item.css'

export default function Cart() {

    const {cart} = useSelector((state)=>state);
    console.log(cart);

  return (
    <div className='card_product_parent'>
        <Nav/>
        <div className='div_item'>
            {
              cart.length > 0 ? (
              <div  className='card_product_parent_'>
              {
                cart.map((data,index)=>{
                return <CardItem  key = {index} data = {data} />
               })
              }
              </div>
            ):(
                <div className='' >
                  
                  <p>Cart Empty</p>

                  <NavLink to='/'>
                    <div className=''>
                    <p>Shop Now</p>
                    </div>
                  </NavLink>

              </div>
            )
            }
          
        </div>
    </div>


   
  )
  }
