import React from 'react'
import '../components/explore_by_category.css';
import { BsSearch} from 'react-icons/bs';
import { AiOutlineArrowRight} from 'react-icons/ai';
import chair1 from '../images/halfkursi.jpg'
import chair2 from '../images/kusri1.jpg'
import up from '../images/images/Up_arrow.png'
import down from '../images/images/Down_arrow.png'
import { NavLink } from 'react-router-dom';
import ticket from '../images/images/Vector_.png'
import comma from '../images/images/Vector.png'
import { BsArrowRightShort } from 'react-icons/bs';
import chair3 from '../images/images/chair3.png'
import chair4 from '../images/images/chair4.png'



export default function Explore_by_category() {
  return (
    <div className='main_explore_class'>
        <div className='explore_text'>Explore By Category</div>
        <div className='grid_main'>
            <div className='search'>
                <div className='main_search'>
                    <div className="searchItem text_search">
                        <BsSearch/>
                        <input type="text" placeholder='Search bar...' className='input_search'/>
                    </div>
                    <div className='search_main_item_div'>
                        <div className="searchItem">Bedroom</div>
                        <div className="searchItem">Dyning Room</div>
                        <div className="searchItem">Meeting Room</div>
                        <div className="searchItem">WorkSpace</div>
                        <div className="searchItem">Living Room</div>
                        <div className="searchItem">Kitchen</div>
                    </div>

                    <div className='button search_button'>
                    <button className='butn'>Shop Now</button>
                    <AiOutlineArrowRight/>
                </div>
                </div>
            </div>
            <div className='items'>
                <div className="item_ item1">
                    <div className='bedroom'>Bedroom</div>
                    <div className='button'>
                        <button className='btn button1'>Shop Now</button>
                    </div>
                </div>
                <div className="item_"></div>
                <div className="item_"></div>
                <div className="item_"></div>
                <div className="item_"></div>
                <div className="item_"></div>
            </div>
        
        </div>
        <div className='popular_product'><p>Popular Products</p></div>
          {/* chair section */}
        <div className='root_'>
            <div className='left_div_image'>
            <img src={chair1} alt="" className='chair1' />
            </div>
            <div className='right_div_image'>
            <div className="item_image">
                <img src={chair4} alt="" />
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
                <img src={chair4} alt="" /> 
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
        {/* // second section */}
        <div className='root_1'>
            <div className='root_11'>
            <div className='left_div_image_'>
                    <div className='left_div_image_text'>
                        <div className='text1 t1'>Our</div>
                        <div className='text1 t1'>Own Creation</div>
                        <div className='text_3'>Design in our Studio</div>
                        <div className='grow_bar'>
                                <div><input className='range' type="range" id="vol" name="vol" min="0" max="50"/></div>
                                <div  className='range_icon'>
                                    <img src={up} alt="" className='up'/>
                                    <img src={down} alt="" className='down'/>
                                </div>
                        </div>
                    </div>
                    
            </div>
            <div className='right_div_image_'>
                <div className="item_image_ room_button">
                        <div className='explore_room'>Explore all Rooms</div>
                </div>
                <div className="item_image_"></div>
                <div className="item_image_"></div>
                <div className="item_image_"></div>
            </div>
            </div>

            <div className='benefit_section'>
             <p className='benifit'>Benefits for your expediency</p>
             <div className='benifit_items'>
                    <div className="b_item">
                        <img className='ticket' src={ticket} alt="" />
                        <div className='pay'>Payment Method</div>
                        <div className='offer'>We offer flexible payment
                            options, to make easier.</div>
                    </div>
                    <div className="b_item">
                    <img className='ticket' src={ticket} alt="" />
                        <div className='pay'>Payment Method</div>
                        <div className='offer'>We offer flexible payment
                            options, to make easier.</div>
                    </div>
                    <div className="b_item">
                    <img className='ticket' src={ticket} alt="" />
                        <div className='pay'>Payment Method</div>
                        <div className='offer'>We offer flexible payment
                            options, to make easier.</div>
                    </div>
            </div>
            </div>

            <div className='testimon_parent'>
                <div className='testi_child1'>Testimonials</div>
                <div className='testi_child2'>Over 15,000 happy customers.</div>
            </div>

            <div className='testi_text_parent'>
                <div className="testi_text_parent_item comma_part">
                    <div className='comm_parent'>
                        <div className='comma_img'>
                            <img className='commma_img_i' src={comma} alt="" />
                            <img className='commma_img_i' src={comma} alt="" />
                        </div>
                        <div className='comma_img'>
                        
                        </div>
                    </div>
                </div>
                <div className="testi_text_parent_item text_part">
                    <div>
                    “My experience with Mark is a complete
                                    sucess, from customer service, wide range of
                                    products, clean store, purchasing experience, the
                                    newsletter.Thank you.”
                    </div>
                </div>
                <div className="testi_text_parent_item icon_part">
                   <img src={up}  className='up_icon' alt="" />
                   <img src={down} className='down_icon' alt="" />
                </div>
            </div>
            <div className='t_bar'>
                    <div className='line_bar'></div>
                    <div className='see_all_review'>See all review<span className='see_all_review'><BsArrowRightShort/></span></div>
            </div>
            
        </div>
       
    </div>

  )
}
