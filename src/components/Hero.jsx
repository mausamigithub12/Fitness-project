import React from 'react'
import girl from '../images/girl.png'
function Hero() {
  return (
    <div className='min-h-screen  bg-gradient-to-br from-primary via-secondary to-ternary text-white items-center flex flex-col md:flex-row md:px-12  gap-10'>
     <div className=' text-center md:text-left md:w-1/2'  ><h1 className=' text-white text-5xl font-extrabold leading-tight font-ternary mb-6'>Train<span className='text-[#FF5722]'> Harder</span> , Shop <span className='text-[#FF5722]'> Smarter</span><br/>
     Built For<span className='text-[#FF5722]'> Strength</span> <br/> Made For<span className='text-[#FF5722]'> You</span></h1>

     <p className="text-lg md:text-xl text-gray-200 mb-8">
         Discover top-quality supplements, and equipment designed for performance. Whether you're lifting, running, or recovering — <span className='text-gray-200 font-semibold' >gear up with confidence.</span>

        </p>
          <button className="bg-[#FF5722] hover:bg-[#e64a19] transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            Discover Now
          </button>
        </div> 
        <div className="md:w-1/2 flex justify-end bg-transparent ">
  <img
    src={girl}
    alt="Runner"
    className="rounded-2xl  z-40 w-full  object-cover h-aotu"
  />
</div>

    </div>
  )
}

export default Hero