import { useEffect, useState } from "react";
import { BiCart, BiMenu } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.qty, 0);
      setCount(total);
    };

    updateCount();
    window.addEventListener("cartUpdated", updateCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCount);
    };
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 md:px-16">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          <Link to="/">
            Zakaria <span className="text-black">Elmi</span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          
          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <BiCart className="text-3xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
