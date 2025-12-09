import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => {
        if (!res.ok) throw new Error("Network error!");
        return res.json();
      })
      .then((result) => setData(result.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pb-20">
      <h1 className="text-4xl text-green-500 font-extrabold text-center mt-8 mb-10">
        Our Store Products
      </h1>

      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.length === 0 ? (
          <h1 className="text-center text-xl font-bold">Loading...</h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{item.title}</h2>

                <p className="text-sm text-gray-600 mb-2">{item.category}</p>

                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  <FaStar /> <span className="text-black">{item.rating}</span>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-xl font-bold text-green-600">${item.price}</p>

                  <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
                    <FaCartPlus />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;
