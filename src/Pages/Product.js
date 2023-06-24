import React from 'react'
import { useState,useEffect } from 'react';
import Nav from '../components/Nav';
import Productsss from '../components/Productsss';
import './Product.css'

export default function Product() {
  const API_KEY = `https://dummyjson.com/products`;
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  
  async function getData(){

    setloading(true);
      const apidata = await fetch(API_KEY);
      const jsonData = await apidata.json();
      console.log(jsonData.products);
      setproduct(jsonData.products);
      // console.log(product);
      setloading(false);
  }
  useEffect(() => {
    getData();
  }, []);




  return (
    
    <div className='main-pro'>
    <div className='nav_div'>
    <Nav></Nav>
    </div>
        <div className='productsss_card'>
    {
      product.map((singleProduct,index)=>{
          return <Productsss key={singleProduct.id} singleProduct={singleProduct} index = {index}/>
      })
    }
    
    </div> 
    </div>   
      
  )
}
