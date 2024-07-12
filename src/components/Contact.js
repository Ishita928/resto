import React from 'react'
import StarRating from './StarRating';
import "./Contact.css";
import coffee from"../assets/coffee.jpg"
import contact from "../assets/contact.png"
import { useState } from 'react';
const Contact = () => {
  const[formData,setFormData]=useState({FirstName:"",LastName:"",email:"",Street:"",State:"",
comments:"" ,Offers:false,Candidates:false,number:""})

function changeHandler(event){
  const{name,value,checked,type}=event.target
  setFormData(prevform=>{
    return{
      ...prevform,
      [name]:type==="checkbox"?checked:value
  
    }
  });
}


const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };


function submitHandler(event){
  event.preventDefault();
  console.log("printing data")
  console.log(formData)
}
  return (
    <div className='b  '>
      <form onSubmit={submitHandler} >
<div className='flex'>
      
        <div className='mainn'>
<h4 className='h4'>FirstName</h4>
<input className='ip'  type='text'
 placeholder=' Ishita'
 onChange={changeHandler} 
name='FirstName'
value={formData.FirstName}

></input>
<br/>
<br/>

<h4 className='h4'>LastName</h4>
<input className='ip' type='text'
 placeholder=' Malhotra'
 onChange={changeHandler} 
name='LastName'
value={formData.LastName}

></input>
<br/>
<br/>

<h4 className='h4'>Email Address</h4>
<input className='ip' type='email'
 placeholder=' ishi@mal.com'
 onChange={changeHandler} 
name='email'
value={formData.email}

></input>
<br/>
<br/>

<h4 className='h4'>Phone Number</h4>
<input className='ip' type='text'
 placeholder=' 91+'
 onChange={changeHandler} 
name='number'
value={formData.number}

></input>
<br/>
<br/>



<h4 className='h4'>Address</h4>
<input className='ip' type='text'
 placeholder=' 1234 main.st'
 onChange={changeHandler} 
name='Street'
value={formData.Street}

></input>
<br/>
<br/>

<h4 className='h4'>Feedback</h4>

<textarea className='ipp'
placeholder=' enter your feedback'
onChange={changeHandler}
name="comments"
value={formData.comments}
/>



<div className=' mt-8'>
        <label className='h4 ' htmlFor="rating">Rating:</label>
        <StarRating rating={rating} onRatingChange={handleRatingChange}  />
      </div>

      <div className='bot ml-[3rem] mt-8'>
  <span>SUBMIT</span>
</div>

      </div>
      <div>
        
        <img src={contact} width="150rem" className='imm'/>
        <img src={coffee} width="300rem" className='im' />
      </div>
      </div>
</form>
    </div>
  )
}

export default Contact
