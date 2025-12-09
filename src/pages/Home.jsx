import React from "react";

function Home() {
  return (
    <div className="space-y-20">

      {/* Section 1: Hero Banner */}
      <section className="relative bg-green-500 text-white h-[500px] flex items-center justify-center rounded-b-3xl overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/dc/8b/b8/dc8bb886d720b132cb5b92d4f08712ae.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        <div className="relative text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Zack Fashion & Style</h1>
          <p className="text-xl mb-6">Find Your Style, Shop Your Passion</p>
          <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Section 2: Categories */}
      <section className="max-w-6xl mx-auto px-6">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img 
      src="https://i.pinimg.com/1200x/2e/f7/de/2ef7de5875e232e789b660fe1984b692.jpg" 
      alt="shoes" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img 
      src="https://i.pinimg.com/1200x/f0/9e/82/f09e8202ae5aa7aaf6e4cf4448345d89.jpg" 
      alt="bag" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img 
      src="https://i.pinimg.com/736x/88/dc/1c/88dc1c3ab7fc882fd7d6e18fedb1efac.jpg" 
      alt="watch" 
      className="w-full h-full object-cover "
    />
  </div>

  <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img 
      src="https://i.pinimg.com/1200x/4a/20/84/4a2084610289132c1c2036586a9aa6aa.jpg" 
      alt="clothes" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </section>

      {/* Section 3: Featured Products */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={`https://i.pinimg.com/1200x/4a/20/84/4a2084610289132c1c2036586a9aa6aa.jpg`} alt="product" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Product {i}</h3>
                <p className="text-green-600 font-semibold">$ {50 + i*10}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: About / Promo */}
      <section className="bg-gray-100 py-16 px-6 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-700 mb-6 leading-7">
            Zack Fashion & Style brings you high-quality products with modern designs. We focus on style, comfort, and customer satisfaction.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 font-semibold rounded-full hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Section 5: Newsletter / Contact */}
      <section className="bg-green-500 text-white py-16 px-6 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">
            Get the latest updates, products, and offers straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto flex-1"
            />
            <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
