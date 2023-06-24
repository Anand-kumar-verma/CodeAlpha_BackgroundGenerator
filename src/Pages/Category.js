import React from 'react'
import './Category.css'
import Nav from '../components/Nav'
import { BsSearch} from 'react-icons/bs';
import Product from './Product'; 
import { useState,useEffect } from 'react';
import Productsss from '../components/Productsss'
import '../components/productsss.css'
export default function Category() {

  let API_KEY = `https://dummyjson.com/products/category/`;
  let CATEGORY_API = `https://dummyjson.com/products/categories`;
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [item,setitem] = useState([]);

  async function getcat(){
      const apidata = await fetch(CATEGORY_API);
      const jsonData = await apidata.json();
      console.log(jsonData);
      setitem(jsonData);
      console.log(item)
      setloading(false);
  }
  useEffect(() => {
    getcat();
  }, []);

  async function getData(props){
    console.log(props)
      API_KEY = `${API_KEY}${props}`
      console.log(API_KEY)
      const apidata = await fetch(API_KEY);
      const jsonData = await apidata.json();
      console.log(jsonData.products);
      setproduct(jsonData.products);
      // console.log(product);
      setloading(false);
  }
  useEffect(() => {
    getData();
    getcat();
  }, []);

  const [inputData, setInputData] = useState("");
  function handleInputChange(e){
    e.preventDefault();
    setInputData(e.target.value);
  }

  function clickHandler(){
    console.log(inputData);
     getData(inputData);
  }
 
  return (
   <div className='main_div'>
         <Nav></Nav>
         <div className='search_catigory'>
          <input type="search" list="programmingLanguages" className='search_input' placeholder='Search the items' value={inputData} onChange={handleInputChange} />
          <datalist id="programmingLanguages">
            
                  {
                    item.map((items)=>{
                      return <option value={items}>{items}</option>
                    })
                  }
                
                
            </datalist>
          <div className='bssearch' onClick={clickHandler}><BsSearch/></div>
         </div>
         <div>
           {
            product.length == 0 ? (<Product/>) : (
              <div className='productsss_card'>
                {
                  product.map((singleProduct,index)=>{
                    return <Productsss key={singleProduct.id} singleProduct={singleProduct} index = {index}/>
                  })
                }
              </div>
            )
           }
         </div>
   </div>
  )
}
