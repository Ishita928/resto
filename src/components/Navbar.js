import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Recipe from './Recipe'
import BookTable from './BookTable'
import TechniquesDetails from './TechniquesDetails'
import "./Navbar.css";
import Logo from "../assets/logo.png"
import cookingTechniques from '../data'
import Techniques from './Techniques'
import Mealinfo from './Mealinfo'
const Navbar = () => {
  
  return (

    <div>
    <div className='flex justify-around text-white'>
      <div>
      <NavLink to="/">
        <img  className='logo' src={Logo} width="99px" />
      </NavLink>
      </div>
      <div className='flex gap-12'>
        <NavLink to="/">
        <button className="button-30" role="button">Home</button>
          </NavLink>
        <NavLink to="/About" >
        <button className="button-30" role="button">About</button>
          </NavLink>
        <NavLink to="/Menu">
        <button className="button-30" role="button">Menu</button>
          </NavLink>
        <NavLink to="/Contact">
        <button className="button-30" role="button">Contact Us</button>
          </NavLink>
       
      </div>
      <div  className='flex gap-6 '>
     

 <NavLink to="/Recipe">
 <button className='bn30' >
 Recipe Explorer
 </button>
 
 </NavLink>


 <NavLink  to="/Techniques">
 <button className='bn30'>
 Cooking Techniques Guide
 </button>
 
 </NavLink>

      </div>
    </div>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Menu" element={<Menu/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/book" element={<BookTable/>}/>

<Route  path="/Techniques" element={<Techniques/>}/>
<Route 
          path="/technique/:title" 
          element={<TechniquesDetails cookingTechniques={cookingTechniques} />} 
        />

<Route path="/Recipe" element={<Recipe/>}/>
<Route path="/Recipe/:mealid" element={<Mealinfo />} />
    </Routes>
    </div>
  )
}

export default Navbar
