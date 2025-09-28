import { useState } from "react"
import {  Routes, Route } from "react-router-dom";
import React  from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import Mainboard from './components/Dashboard/Mainboard';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from "./components/Profile/Profile";
import Order from './components/Order/OrderList';
import Product from './components/Product/Product';
import Sales from "./components/Sales/Sales";
import Error from "./components/Error/Error";




const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='bg-white'>
      <div className="container  bg-gray-400 flex mx-auto min-h-screen">

    <div className={`absolute top-0  transition-all duration-200 ${isOpen ? 'left-[0%] ': 'left-[-100%]'} md:static`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    </div>
    
   
    <Routes>
    <Route path="/" element= {<Mainboard toggleSidebar={toggleSidebar}/>}>
      <Route path="/" index element={<Dashboard/>}/>
      <Route path="profile"  element={<Profile/>}/>
      <Route path="order"  element={<Order/>}/>
      <Route path="product"  element={<Product/>}/>
      <Route path="report"  element={<Sales/>}/>
      

     
      <Route path="*" element={<Error/>}/>

      </Route>
     
    </Routes>
    
    
    </div>
      
      
    </div>
  )
}

export default App
