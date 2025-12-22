import { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);
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
    <header className="flex justify-around items-center px-6 md:px-16 py-4 bg-white shadow sticky top-0 z-50">
   
    <h1 className="text-2xl font-bold text-blue-500">
  <Link to="/">
    Zakaria <span className="text-black">Elmi</span>
  </Link>
</h1>

      <nav className="hidden md:flex gap-8 font-medium">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div
        className="relative cursor-pointer hover:text-blue-500"
        onClick={() => navigate("/cart")}
      >
        <BiCart className="text-3xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      </div>
    </header>
  );
}

export default Header;
