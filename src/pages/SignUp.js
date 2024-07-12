import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div className='text-white log'>
    <Template
      title="Sign up today and indulge in a symphony of flavors"
      desc1="Embark on a journey tailored to your tastes and preferences as you create your account."
      desc2="Become part of our culinary community and unlock a world of benefit."
     image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default SignUp