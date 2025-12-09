import React from 'react'
import { BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-around p-6'>
      <h1 className='text-3xl font-bold text-blue-500'>Zakaria <span className=''>Elmi</span></h1>
    <nav className='flex gap-6 text-2xl'>
      <Link to="/">Home</Link>
     <Link to="/shop">shop</Link>
      <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       {/* <Link to="/Footer">Footer</Link> */}
    </nav>

    <div>
      <BiCart  className='text-3xl'/>
    </div>
    
    </header>
  )
}

export default Header
