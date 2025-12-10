"use client"

import { useState } from "react"
import { BiCart } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex justify-around items-center p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
        Zakaria <span>Elmi</span>
      </h1>

      <nav className="hidden md:flex gap-6 text-lg md:text-2xl">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <BiCart className="text-2xl md:text-3xl cursor-pointer" />

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden flex flex-col gap-4 p-4 text-lg border-t">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
