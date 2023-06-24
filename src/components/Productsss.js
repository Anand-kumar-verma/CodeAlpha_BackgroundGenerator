import React from 'react'
import '../components/productsss.css'
import { useDispatch, useSelector } from 'react-redux';
import { remove,addData } from '../redux/Slices/CartSlice';
import { toast } from "react-hot-toast";

export default function Productsss(props) {
 const item = props.singleProduct;

 const subtitle = item.brand;
 const subtitlec = item.category;
 const resultb = subtitle.substring(0, 4);
 const resultc = subtitlec.substring(0, 6);

 const t = item.title;
 const tt = t.substring(0, 7);
 console.log(item)
 
 const {cart} = useSelector((state)=>state);
 // console.log(cart);

 const dispatch = useDispatch();

 function addToCart(e) {
   dispatch(addData(item));
   toast.success("Add to cart Successfully")
 }

 function removeFromCart(e) {
   dispatch(remove(item.id));
   toast.error("Removed Item from Cart")
 }

    console.log(props);
  return (
    <div className='main_product_cart_'>
              <div className='image_div'>
                  <img className='image_div_img' src={item.thumbnail} alt="" />
              </div>
              <div className='flex'>
                      <div className='title_div'>{tt}</div>
                    <div className='brand_cat'>
                        <div>{resultb}</div>
                        <div>{resultc}</div>
                    </div>
                    <div>
                      <div className='item_price'>
                          <div className='rupees_rating'>
                          <div>Rs.: {item.price}$</div>
                          <div>Rating : {item.rating}</div>
                          </div>
                          <div className='dis'>Dis.: {item.discountPercentage}<span>$</span></div>
                      </div>
                    </div>
                    <div>
                        {
                        cart.some((p) => p.id == item.id) ?
                        (<button
                        onClick={removeFromCart}>
                          Remove Item
                        </button>) :
                        (<button
                        onClick={addToCart}>
                          Add to Cart
                        </button>)
                          }
                        </div> 
              </div>
    </div>
  )
}
