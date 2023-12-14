import React, {  useState } from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from "./Component/Home";
import { Detail } from "./Component/Detail";

function App() {

 



  return (
    <BrowserRouter>
    <Routes>
      <Route index  element={<Home/>} />
      <Route path="detail" element={<Detail/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
