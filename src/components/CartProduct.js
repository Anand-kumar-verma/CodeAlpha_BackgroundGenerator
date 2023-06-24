import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';
import '../components/productsss.css'


export default function CartProduct(props) {
 
    const item = props.data.data;


   console.log(props)
  
   const dispatch = useDispatch();

   function deleteItem(){
    dispatch(remove(item.id));
    toast.error("Delete Item Successfully")
   }
  return (
    <div className='main_product_cart_'>
    <div className='image_div'>
        <img className='image_div_img' src={item.thumbnail} alt="" />
    </div>
    <div className='flex'>
            <div className='title_div'>{item.title}</div>
          <div className='brand_cat'>
              <div>{item.brand}</div>
              <div>{item.category}</div>
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
                <MdDelete onClick={deleteItem}/>
            }
            </div> 
    </div>
</div>

  )
}
