import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./home.jsx";
import Register from "./register.jsx";
import Login from "./login.jsx";
function App() {
   

  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/home1' element={<Register/>} />
             <Route path='/home2' element={<Login/>} />
          </Routes>      
      </BrowserRouter>
      
    </>
  )
}

export default App
