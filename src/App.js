import React, {  useState } from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from "./Component/Home";
import { Detail } from "./Component/Detail";
import { Cart } from "./Component/Cart";

function App() {

 



  return (
    <BrowserRouter>
    <Routes>
      <Route index  element={<Home/>} />
      <Route path="detail" element={<Detail/>} />
      <Route path="cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
