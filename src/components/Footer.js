import React from 'react'
import MainLogo from '../images/Assests/photo_9_2023-05-07_10-29-07.jpg'
import Logo1 from "../images/Assests/photo_10_2023-05-07_10-29-07.jpg";
import Logo2 from "../images/Assests/photo_6_2023-05-07_10-29-07.jpg";
import Logo3 from "../images/Assests/photo_5_2023-05-07_10-29-07.jpg";
import Logo4 from "../images/Assests/photo_8_2023-05-07_10-29-07.jpg";
import "../components/Footer.css"
 const Footer = () => {
  return (
    <div className='wrapper'>
        <div className='box'>
            <div className="box_items">
                <div className="content_item">
                    <img className="content_item_img_1" src={MainLogo} alt="" />
                </div>
                <div className="content_item2">
                        <img className="content_item2_img" src={Logo1} alt="" />
                        <img className="content_item2_img" src={Logo2} alt="" />
                        <img className="content_item2_img" src={Logo3} alt="" />
                        <img className="content_item2_img" src={Logo4} alt="" />
                </div>
                <div className="content_item3">Address</div>
                <div className="content_item4">
                    <div className="content_item4_text">+123 654 987 877</div>
                    <div className="content_item4_text">The Bronx,</div>
                    <div className="content_item4_text "> NY 14568, USA</div>
                   
                    
                </div>
            </div>
            <div className="box_items2">
                        <div className="content_item3">Address</div>
                        <div className="content_item4">
                            <div className="content_item4_text">+123 654 987 877</div>
                            <div className="content_item4_text">The Bronx,</div>
                            <div className="content_item4_text"> NY 14568, USA</div>
                        </div>
            </div>
            <div className="box_items">
                        <div className="content_item3">Address</div>
                        <div className="content_item4">
                                <div className="content_item4_text">+123 654 987 877</div>
                                <div className="content_item4_text">The Bronx,</div>
                                <div className="content_item4_text"> NY 14568, USA</div>
                        </div>
            </div>
            <div className="box_items">
                        <div className="content_item3">Address</div>
                        <div className="content_item4">
                            <div className="content_item4_text">+123 654 987 877</div>
                            <div className="content_item4_text">The Bronx,</div>
                            <div className="content_item4_text"> NY 14568, USA</div>
                        </div>
            </div>
            <div className="box_items content_item4_text1">
                        <div className="content_item3">Address</div>
                        <div className="content_item4">
                            <div className="content_item4_text">+123 654 987 877</div>
                            <div className="content_item4_text">The Bronx,</div>
                            <div className="content_item4_text"> NY 14568, USA</div>
                        </div>
            </div>
        </div>
        <div className='copyright'>Copyright ©2020 INWOOD. All Rights Reserved</div>
    </div>

  )
}

export default Footer;