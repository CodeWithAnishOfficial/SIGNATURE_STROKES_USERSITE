import React from 'react';
import { Heart, Star, Eye, ShoppingCart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';

const ProductGrid = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-24 py-20 bg-gray-50/50">
      <div className="text-center mb-16">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">EXPLORE STYLES</p>
        <h2 className="text-6xl font-bold">Our products</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="relative aspect-square bg-white flex items-center justify-center p-4 mb-6 overflow-hidden shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1593766788306-28561086694e?q=80&w=2070&auto=format&fit=crop';
                }}
              />
              
              {/* Heart Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 ${isInWishlist(product.id) ? 'bg-primary text-white' : 'bg-white text-gray-400 hover:text-primary'}`}
              >
                <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
              </button>

              {/* Hover Action Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                <button 
                  onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`); }}
                  className="flex-1 h-full flex items-center justify-center hover:bg-gray-50 border-r border-gray-100 transition-colors"
                >
                  <Eye size={20} className="text-slate-800" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                  className="flex-1 h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ShoppingCart size={20} className="text-slate-800" />
                </button>
              </div>

              {(product.stock === "Out of stock" || product.oldPrice) && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold text-white z-10 ${product.oldPrice ? 'bg-blue-600' : 'bg-slate-800'}`}>
                  {product.oldPrice ? '-17%' : 'OUT OF STOCK'}
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-500 font-medium">₹{product.price.toFixed(2)}</span>
              {product.oldPrice && <span className="text-gray-400 line-through text-sm">₹{product.oldPrice.toFixed(2)}</span>}
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} strokeWidth={i < product.rating ? 0 : 2} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link to="/shop" className="bg-primary hover:bg-[#70A815] text-white font-bold py-4 px-10 rounded-full transition-all duration-300">
          VIEW COLLECTION
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
