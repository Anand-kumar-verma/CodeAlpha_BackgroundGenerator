import './App.css';

import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import Category from './Pages/Category';
import Cart from './Pages/Cart';

function App() {
 return (
 <div className='app'>
   

    <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/category' element={<Category/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
   </Routes>
 </div>);
}

export default App;
