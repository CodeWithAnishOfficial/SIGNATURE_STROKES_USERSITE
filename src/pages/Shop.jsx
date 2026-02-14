import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { Heart, ShoppingCart, Eye, Grid, List, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Shop = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [category, setCategory] = useState('All categories');
  const [showCategory, setShowCategory] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const navigate = useNavigate();

  const categories = ['All categories', 'Uncategorized', 'Apparel', 'Balls', 'Bats'];
  const sizes = ['25 cm', '30 cm', '40 cm', 'L', 'M', 'S'];

  const filteredProducts = category === 'All categories' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 space-y-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            {/* Category Filter */}
            <div className="mb-10">
              <h3 
                className="text-xl font-bold mb-6 flex items-center justify-between border-b border-gray-100 pb-4 cursor-pointer tracking-tight text-slate-900"
                onClick={() => setShowCategory(!showCategory)}
              >
                Filter by category
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCategory ? 'rotate-180' : ''}`} />
              </h3>
              <div className={`overflow-hidden transition-all duration-300 ${showCategory ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li 
                      key={cat} 
                      className={`cursor-pointer hover:text-primary transition-colors text-sm font-semibold flex items-center gap-2 ${category === cat ? 'text-primary' : 'text-slate-500'}`}
                      onClick={() => setCategory(cat)}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${category === cat ? 'bg-primary scale-100' : 'bg-transparent scale-0'}`} />
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 
                className="text-xl font-bold mb-6 flex items-center justify-between border-b border-gray-100 pb-4 cursor-pointer tracking-tight text-slate-900"
                onClick={() => setShowSize(!showSize)}
              >
                Size
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showSize ? 'rotate-180' : ''}`} />
              </h3>
              <div className={`overflow-hidden transition-all duration-300 ${showSize ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button key={size} className="px-4 py-2 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all active:scale-95 text-slate-600 bg-gray-50/50">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-8 bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500">Showing 1–{filteredProducts.length} of {filteredProducts.length} results</p>
            <div className="flex items-center gap-4">
              <select className="bg-transparent border-none text-sm font-semibold focus:ring-0">
                <option>Sort by latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="group relative bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.stock === "Out of stock" && (
                    <span className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Out of stock</span>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                      className={`p-2 rounded-full shadow-md transition-colors ${isInWishlist(product.id) ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary hover:text-white'}`}
                    >
                      <Heart className="w-4 h-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                      className="p-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`); }}
                      className="p-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-gray-900">₹{product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="text-sm text-gray-400 line-through">₹{product.oldPrice.toFixed(2)}</span>}
                    </div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < product.rating ? "text-primary" : "text-gray-200"}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sidebar Quick Links from Image */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 z-40">
        <div className="w-12 h-12 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-colors rounded-l-md shadow-lg" onClick={() => navigate('/cart')}>
          <ShoppingCart className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-colors rounded-l-md shadow-lg">
          <Grid className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-colors rounded-l-md shadow-lg">
          <Eye className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
