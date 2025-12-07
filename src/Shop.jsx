import React, { useState, useEffect } from 'react'

function Shop() {
    const [data, setdata]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=20")
        .then(res=> res.json())
        .then(result=> setdata(result.products))
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
                        <div key={item.id} className='bg-amber-50 rounded-2xl mt-3 p-5 shadow-blue-300 hover:shadow-xl'>
                            <img 
                             src={item.thumbnail}
                             alt={item.title}
                             />
                             <h3 className='text-center font-bold'>{item.title}</h3>
                            <div className="flex justify-between px-4">
                                <h2>category : {item.category}</h2>
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
