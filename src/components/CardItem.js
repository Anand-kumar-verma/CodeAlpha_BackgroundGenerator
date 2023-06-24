import React from 'react'
import CartProduct from './CartProduct'
import '../components/Card_Item.css'

export default function CardItem(props) {
  return (
    <div className='card_product_single'>
    <CartProduct data = {props}/>
    </div>
  )
}
