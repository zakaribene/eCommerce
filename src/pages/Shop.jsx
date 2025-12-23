import React, { useEffect, useState } from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";

function Shop() {
  // ===============================
  // STATE: PRODUCTS
  // ===============================
  const [products, setProducts] = useState([]);

  // ===============================
  // STATE: SEARCH QUERY (NEW)
  // ===============================
  const [search, setSearch] = useState("");

  // ===============================
  // STATE: CART
  // ===============================
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // ===============================
  // FETCH PRODUCTS (UNCHANGED)
  // ===============================
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=24")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // ===============================
  // ADD TO CART (UNCHANGED)
  // ===============================
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

  // ===============================
  // FILTER PRODUCTS BY SEARCH (NEW)
  // ===============================
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20">
      {/* ===============================
          PAGE TITLE (UNCHANGED)
      =============================== */}
      <h1 className="text-4xl font-extrabold text-center text-green-600 my-10">
        Our Store Products
      </h1>

      {/* ===============================
          SEARCH BAR (NEW)
      =============================== */}
      <div className="w-11/12 mx-auto mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
        />
      </div>

      {/* ===============================
          PRODUCTS GRID (UNCHANGED)
      =============================== */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
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

        {/* ===============================
            NO RESULT MESSAGE (NEW)
        =============================== */}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}

export default Shop;
