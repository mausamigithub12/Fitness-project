import React from 'react'
import { Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    
    <Routes>
       
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/hero" element={<Hero/>}/>

             

    </Routes>
  )
}

export default App