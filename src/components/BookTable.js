import React from 'react'
import table from "../assets/table.jpg"
import { useState } from 'react'
import "./BookTable.css";
const BookTable = () => {

  const[formData,setFormData]=useState({FullName:"",email:"",Street:"",date:"",guest:"",
 Offers:false,time:"",number:""})
  
  function changeHandler(event){
    const{name,value,checked,type}=event.target
    setFormData(prevform=>{
      return{
        ...prevform,
        [name]:type==="checkbox"?checked:value
    
      }
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("printing data")
    console.log(formData)
  }

  return (
    <div>
  
      <div className='flex mt-[2rem]'>
        <div >
          <img src={table} width="600rem" className='book ml-6'/>
        </div>
      <div>
      <form onSubmit={submitHandler} >
<div>
<h4 className='h4'>Full Name</h4>
<input className='ip' type='text'
 placeholder=' Malhotra'
 onChange={changeHandler} 
name='FullName'
value={formData.FullName}

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


<div className='flex'>
<h4 className='h4'>Date:</h4>
<input className='ip w-[9rem] ' type='date'

 onChange={changeHandler} 
name='date'
value={formData.date}

></input>
<br/>
<br/>

<h4 className='h4'>Time:</h4>
<input className='ip w-[7rem]' type='time'

 onChange={changeHandler} 
name='time'
value={formData.time}

></input>
<br/>
<br/>
</div>
<h4 className='h4'>No. of Guests</h4>
<select className='ip'
onChange={changeHandler} 
name='guest'
value={formData.country}
id='guest'
>
<option value="India">1</option>
<option value="India">2</option>
<option value="India">3</option>
<option value="India">4</option>
<option value="India">5</option>
<option value="India">6</option>
<option value="India">More than 6</option>


</select>


</div>

    <div className="tooltip-container mt-[3rem] ml-[4rem]">
  <span className="tooltip">(^_^)</span>
 Reserve a Table
</div>
      </form>
      </div>


      </div>
    </div>
  )
}

export default BookTable
