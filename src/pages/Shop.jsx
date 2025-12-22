import React, { useEffect, useState } from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=24")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (exist) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="pb-20">
      <h1 className="text-4xl font-extrabold text-center text-green-600 my-10">
        Our Store Products
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={item.thumbnail}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold">{item.title}</h2>

              <div className="flex justify-between text-sm text-gray-600 my-1">
                <span>{item.category}</span>
                <span className="flex items-center gap-1 text-yellow-500">
                  <FaStar /> {item.rating}
                </span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="text-xl font-bold text-green-600">
                  ${item.price}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 cursor-pointer"
                >
                  <FaCartPlus /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
