import logo from './logo.svg';
import './App.css';
import Api from './Component/Api';
import Btn1 from "./Component/Btn1"
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart';

function App() {
  return (
   
    <Routes>
      <Route path='/'element={<Api/>}></Route>
       
        <Route path='/btn/:id' element={<Btn1/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      
     
    </Routes>
    
  );
}

export default App;
