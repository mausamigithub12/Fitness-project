import React from 'react'
import { IoMdCart, IoMdContact } from 'react-icons/io'

function Navbar() {
  return (
    <header classname="bg-primary fixed text-white w-full  px-6  shadow-md">
        <div className='bg-primary fixed w-full  text-white  py-5 mx-auto px-6 flex justify-between items-center'>
            <div className='text-2xl font-bold font-primary '>Fitness</div>
            <nav className='flex  gap-12 font-primary text-xl'>
                <a href="#" className="hover:text-orange-400 transition">Home</a>
           <a href="#" className="hover:text-orange-400 transition">About Us</a>
           <a href="#" className="hover:text-orange-400 transition">Services</a>
           <a href="#" className="hover:text-orange-400 transition">Contact</a>
          <a href="#" className="hover:text-orange-400 transition">FAQ</a>
            </nav>
            <div className='  flex gap-5 items-center font-primary font-bold'>
                <div className=' text-xl '>Login</div>
                <IoMdContact className='w-6 h-6' />
                <IoMdCart  className='w-6 h-6'/>
                

           
            </div>
        </div>
    </header>
    
  )
}

export default Navbar