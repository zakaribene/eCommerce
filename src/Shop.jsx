import React, { useState, useEffect } from 'react'

function Shop() {
    const [data, setdata]=useState([]);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then(res=> res.json())
        .then(result=> setdata(result.meals))
    })
  return (
    <div>
        <h1 className='text-4xl text-green-500 font-bold text-center mt-4'>Our Store Products</h1>
        <div className='w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                data.length===0? (
                    <h1>Loading...</h1>
                ):(
                    data.map((item)=>(
                        <div key={item.id} className='bg-gray-100 rounded-2xl mt-3 p-5 shadow-blue-300 hover:shadow-md transition-all '>
                            <img 
                             src={item.strMealThumb}
                             alt={item.title}
                             />
                             <h3 className='text-center font-bold'>{item.strMeal}</h3>
                            <div className="flex justify-between px-4 py-2">
                                <h2>category : {item.strCategory}</h2>
                                <p className='font-bold'>${item.price}</p>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
      
    </div>
  )
}

export default Shop
