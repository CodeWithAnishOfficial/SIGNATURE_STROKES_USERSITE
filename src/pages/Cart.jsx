import React from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { X, ArrowRight, Minus, Plus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isLoggedIn } = useStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate('/checkout');
    } else {
      navigate('/login', { state: { from: '/checkout' } });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="w-20 h-20 mx-auto text-gray-200 mb-6" />
          <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/shop" className="inline-block bg-red-500 text-white font-black px-8 py-4 rounded-full hover:bg-red-600 transition-all uppercase tracking-widest">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-24 pb-20">
      {/* Header Banner */}
      <div className="bg-[#111111] py-20 mb-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-[80px] font-black text-white mb-4 uppercase italic tracking-tighter leading-none">Cart</h1>
          <div className="flex items-center justify-center text-[#8e99ad] text-xs gap-3 font-bold uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">-</span>
            <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
            <span className="text-gray-600">-</span>
            <span className="text-white">Cart</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-20 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#82b440] text-white flex items-center justify-center font-bold text-lg">1</div>
            <span className="font-bold text-[#1a2b3c] text-lg">Shopping Cart</span>
          </div>
          <div className="text-gray-200">
            <ArrowRight className="w-5 h-5" strokeWidth={1} />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">2</div>
            <span className="font-bold text-[#6d7c90] text-lg">Payment & Delivery Options</span>
          </div>
          <div className="text-gray-200">
            <ArrowRight className="w-5 h-5" strokeWidth={1} />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">3</div>
            <span className="font-bold text-[#6d7c90] text-lg">Order Received</span>
          </div>
        </div>

        {/* Cart Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Product</th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Price</th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Quantity</th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Subtotal</th>
                <th className="py-6 font-black uppercase text-sm tracking-widest text-gray-900">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b group hover:bg-gray-50 transition-colors">
                  <td className="py-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-lg text-gray-900">{item.name} - L, Beige</span>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="font-black text-gray-900">₹{item.price.toFixed(2)}</span>
                  </td>
                  <td className="py-6">
                    <div className="flex items-center border rounded-full px-4 py-2 w-max bg-gray-50">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-black transition-colors font-bold text-xl px-2"><Minus className="w-4 h-4" /></button>
                      <span className="w-8 text-center font-black">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-black transition-colors font-bold text-xl px-2"><Plus className="w-4 h-4" /></button>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="font-black text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </td>
                  <td className="py-6">
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20">
          <div className="flex items-center w-full md:w-auto">
            <div className="flex items-center border rounded-full px-6 py-4 bg-gray-50 flex-1 md:flex-none">
               <input type="text" placeholder="Coupon Code" className="bg-transparent border-none focus:ring-0 w-full md:w-40 font-bold" />
               <button className="font-black uppercase text-xs tracking-widest ml-4 hover:text-red-500 transition-colors">Apply Coupon</button>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Link to="/shop" className="flex-1 md:flex-none text-center bg-gray-100 text-gray-900 font-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all uppercase tracking-widest text-sm">
              Continue Shopping
            </Link>
            <button className="flex-1 md:flex-none text-center bg-gray-300 text-gray-600 font-black px-8 py-4 rounded-full cursor-not-allowed uppercase tracking-widest text-sm">
              Update Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="max-w-md ml-auto">
          <h2 className="text-3xl font-black mb-6">Cart totals</h2>
          <div className="border rounded-2xl overflow-hidden mb-8">
            <div className="flex justify-between p-6 border-b bg-gray-50">
              <span className="font-bold text-gray-600">Subtotal</span>
              <span className="font-black text-gray-900">₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between p-6 bg-white">
              <span className="font-bold text-gray-600">Total</span>
              <span className="font-black text-3xl text-primary">₹{cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-primary text-white font-black py-5 rounded-full hover:bg-primary/90 transition-all uppercase tracking-[0.2em] shadow-xl shadow-primary/20"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
