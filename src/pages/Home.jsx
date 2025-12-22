import React from "react";
import { ArrowRight, ShoppingBag, Star, Shield, Truck, RefreshCw, ChevronRight } from "lucide-react";

function Home() {
  const categories = [
    {
      src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      alt: "Shoes",
      label: "Footwear",
      count: "120+ items"
    },
    {
      src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      alt: "Bags",
      label: "Bags",
      count: "85+ items"
    },
    {
      src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      alt: "Watches",
      label: "Watches",
      count: "65+ items"
    },
    {
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
      alt: "Clothes",
      label: "Apparel",
      count: "300+ items"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      title: "Premium Sneakers",
      category: "Footwear",
      price: 129.99,
      rating: 4.8,
      discount: 20
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      title: "Leather Backpack",
      category: "Bags",
      price: 89.99,
      rating: 4.6,
      bestseller: true
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
      title: "Luxury Watch",
      category: "Watches",
      price: 249.99,
      rating: 4.9,
      new: true
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?auto=format&fit=crop&w=600&q=80",
      title: "Designer Jacket",
      category: "Apparel",
      price: 179.99,
      rating: 4.7,
      discount: 15
    }
  ];

  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
    { icon: Shield, title: "Secure Payment", desc: "100% secure transactions" },
    { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
    { icon: Star, title: "Premium Quality", desc: "Curated collections" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80"
            alt="fashion-hero"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">New Collection Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Redefine Your
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Style Statement
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover curated fashion pieces that blend sophistication with contemporary trends
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Start Shopping
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            <button className="group border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Collection
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Collections</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked categories featuring the finest fashion essentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <img 
                src={cat.src} 
                alt={cat.alt} 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">{cat.label}</h3>
                <p className="text-gray-200 mb-4">{cat.count}</p>
                <button className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors">
                  Explore
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Trending this season</p>
          </div>
          <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-cyan-600 transition-colors">
            View All
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.src} 
                  alt={product.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Bestseller
                    </span>
                  )}
                  {product.new && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      New
                    </span>
                  )}
                </div>

                {/* Quick Add Button */}
                <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                  <ShoppingBag size={20} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.discount && (
                      <span className="text-gray-400 line-through ml-2">
                        ${(product.price / (1 - product.discount/100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
          </div>
          
          <div className="relative z-10 text-center py-20 px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Elevate
              <span className="block text-cyan-400">Your Style?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of fashion enthusiasts who trust us for their style journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl">
                Shop Men's Collection
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all">
                Shop Women's Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-gray-100 mb-8 text-lg">
            Subscribe to get exclusive access to new collections and special offers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-200 text-sm mt-6">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;