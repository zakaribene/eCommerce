import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increase = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <h1 className="text-center mt-32 text-3xl font-bold text-gray-700">
        🛒 Your Cart is Empty
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 w-full sm:w-1/2">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-1">${item.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <button
                onClick={() => decrease(item.id)}
                disabled={item.qty <= 1}
                className={`px-3 py-1 rounded-lg font-bold ${
                  item.qty <= 1
                    ? "bg-gray-300 cursor-not-allowed text-gray-600"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                } transition`}
              >
                −
              </button>
              <span className="text-lg font-semibold">{item.qty}</span>
              
              <button
                onClick={() => increase(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <p className="font-bold text-green-600 mt-4 sm:mt-0">
              ${item.price * item.qty}
            </p>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 font-bold mt-4 sm:mt-0 hover:text-red-600 transition"
            >
                Delete
            </button>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-12 bg-gray-50 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">
          Total: <span className="text-green-600">${total}</span>
        </h2>
        <button className="mt-4 sm:mt-0 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
