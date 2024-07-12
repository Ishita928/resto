import React from 'react'
import Template from '../components/Template'
import "./login.css";
import loginImg from "../assets/login.png"
const Login = ({setIsLoggedIn}) => {
  return (
    <div className='text-white flex align-middle justify-center  log'>
    <Template
      title="Welcome Back"
      desc1="Unlock a personalized dining experience as you login to access"
      desc2=" online ordering, special offers, and updates tailored just for you."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default Login
