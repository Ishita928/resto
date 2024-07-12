import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setInfo] = useState()
    console.log(mealid);

    const getInfo = async () =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if(info != ""){
        getInfo()
    }
  return (
     <div className="relative">
        { !info ? "Data Not Found" : 
        <div className='mealInfo'> 
     <img src={info.strMealThumb}/>
     <div className='info'>
        <h1 className='text-3xl mt-5 text-[#402d21] underline  '>Recipe Detail</h1>
        <button className='mt-2' >{info.strMeal}</button>
        <h3 className=' text-xl text-[#402d21] mt-2 '>INSTRUCTIONS:</h3>
        <p className='text-[#805b43] mb-[-6rem] '>{info.strInstructions}</p>
     </div>
    </div>
    }
    
     </div>
     
  )
}

export default Mealinfo
