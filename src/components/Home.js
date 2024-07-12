import React from 'react'
 import image from '../assets/image.webp'
 import "./Home.css";
 import { NavLink } from 'react-router-dom';
 import { IoFastFoodOutline } from "react-icons/io5";
 import gif from "../assets/Animation - 1719339403954.json"
import Lottie from "lottie-react"

const Home = () => {

  return (
    <div className='flex gap-10'>
      <div className='leftpage '>
     <div  className='text-zinc-50 title '>
     <p>Welcome to</p>
     
     <div className='mt-0'>
     <span class="letter">C</span>
  <span class="letter">u</span>
  <span class="letter">l</span>
  <span class="letter">i</span>
  <span class="letter">n</span>
  <span class="letter">a</span>
  <span class="letter">r</span>
  <span class="letter">y</span>
  <span class="letter">Q</span>
  <span class="letter">u</span>
  <span class="letter">i</span>
  <span class="letter">r</span>
  <span class="letter">k</span>
  <span class="letter">!!</span>
  </div>
     </div>
    
     <p className='text-zinc-400 summary'>
     where we invite you to embark on a gastronomic journey unlike any other. Nestled in the heart of India, our restaurant celebrates the art of culinary innovation and unconventional flavors.
     </p>
     <p className='text-zinc-400 summary'>
 Nestled in the heart of India our restaurant celebrates the art of culinary innovation and unconventional flavors.

 Our talented chefs blend traditional techniques with a creative twist, crafting dishes that surprise and delight the senses. From unexpected flavor pairings to inventive presentations, each dish tells a story of culinary adventure and experimentation.

Step inside our vibrant space and experience a dining atmosphere that is as unique as our menu. 
</p>

<div className='flex g-[2rem]'>
  <div>
<NavLink to="/Menu">
        <button className="buttonn text-black flex" role="button">Menu
       <IoFastFoodOutline />
        </button>
          </NavLink>
          </div>
          <div>
<NavLink to="/book">
        <button className='buttonn '> Book a Table</button>
           </NavLink>
</div>

</div>






     </div>

     <div className=' mt-[-20rem] ' style={{width:"40%"}}>
      <Lottie animationData={gif}/>
      </div>


    </div>
  )
}

export default Home
