import React from 'react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { X, ShoppingCart, Heart } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <div className="max-w-md mx-auto">
          <Heart className="w-20 h-20 mx-auto text-gray-200 mb-6" />
          <h2 className="text-3xl font-black mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8">You haven't added any products to your wishlist yet.</p>
          <Link to="/shop" className="inline-block bg-primary text-white font-black px-8 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest">
            Start Exploring
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-20">
      {/* Header Banner */}
      <div className="bg-zinc-900 py-16 mb-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-black text-white mb-4 uppercase italic">Wishlist Page</h1>
          <div className="flex items-center justify-center text-gray-400 text-sm gap-3 font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>-</span>
            <span className="text-white">Wishlist Page</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Wishlist Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-6 w-10"></th>
                <th className="p-6 w-10"></th>
                <th className="p-6"></th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Product Name</th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Unit Price</th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Stock Status</th>
                <th className="py-6"></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id} className="border-b group hover:bg-gray-50 transition-colors">
                  <td className="p-6">
                    <input type="checkbox" className="accent-primary w-4 h-4" />
                  </td>
                  <td className="p-6">
                    <button onClick={() => toggleWishlist(item)} className="text-gray-300 hover:text-primary transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </td>
                  <td className="p-6">
                    <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="font-bold text-lg text-gray-900">{item.name} - Red</span>
                  </td>
                  <td className="py-6">
                    <span className="font-black text-gray-900">₹{item.price.toFixed(2)}</span>
                  </td>
                  <td className="py-6">
                    <span className="text-gray-900 font-bold">{item.stock || 'In stock'}</span>
                  </td>
                  <td className="py-6 text-right">
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-primary text-white font-black px-10 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-sm"
                    >
                      Add to cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Wishlist Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center border rounded-full px-6 py-4 bg-gray-50 w-full md:w-auto">
             <select className="bg-transparent border-none focus:ring-0 w-full md:w-40 font-bold">
               <option>Actions</option>
             </select>
             <button className="bg-primary text-white font-black px-8 py-3 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-xs ml-4">Apply Action</button>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-primary text-white font-black px-8 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-sm">
              Add Selected to Cart
            </button>
            <button className="flex-1 md:flex-none bg-primary text-white font-black px-8 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-sm">
              Add All to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
