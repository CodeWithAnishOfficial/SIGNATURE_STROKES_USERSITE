import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Lock } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, isLoggedIn } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/checkout' }, replace: true });
    }
  }, [isLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'United States (US)',
    address: '',
    city: '',
    state: 'New York',
    zip: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="bg-white pt-24 pb-20">
      {/* Header Banner */}
      <div className="bg-[#111111] py-20 mb-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-[80px] font-black text-white mb-4 uppercase italic tracking-tighter leading-none">Checkout</h1>
          <div className="flex items-center justify-center text-[#8e99ad] text-xs gap-3 font-bold uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">-</span>
            <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
            <span className="text-gray-600">-</span>
            <span className="text-white">Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center text-gray-500 space-y-2">
           <p>Returning customer? <Link to="/login" className="text-gray-900 font-bold hover:text-primary underline underline-offset-4">Click here to login</Link></p>
           <p>Have a coupon? <Link to="/cart" className="text-gray-900 font-bold hover:text-primary underline underline-offset-4">Click here to enter your code</Link></p>
        </div>

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
            <div className="w-11 h-11 rounded-full bg-[#82b440] text-white flex items-center justify-center font-bold text-lg">2</div>
            <span className="font-bold text-[#1a2b3c] text-lg">Payment & Delivery Options</span>
          </div>
          <div className="text-gray-200">
            <ArrowRight className="w-5 h-5" strokeWidth={1} />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">3</div>
            <span className="font-bold text-[#6d7c90] text-lg">Order Received</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Billing Details */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-black mb-10">Billing details</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">First name *</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Last name *</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">Company name (optional)</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Country / Region *</label>
                <select className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary font-bold">
                  <option>United States (US)</option>
                  <option>United Kingdom (UK)</option>
                  <option>India</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Street address *</label>
                <div className="space-y-4">
                  <input type="text" placeholder="House number and street name" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Town / City *</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">State *</label>
                <select className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary font-bold">
                  <option>New York</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">ZIP Code *</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Phone *</label>
                  <input type="tel" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email address *</label>
                  <input type="email" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div className="pt-8 border-t mt-12">
                <h2 className="text-3xl font-black mb-6">Additional information</h2>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">Order notes (optional)</label>
                  <textarea placeholder="Notes about your order, e.g. special notes for delivery." className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary h-32"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Your Order */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-black mb-8">Your order</h2>
              <div className="space-y-4 mb-8">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm font-bold">
                    <span className="text-gray-600">{item.name} - L, Beige × {item.quantity}</span>
                    <span className="text-gray-900 font-black">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-4 mb-8">
                <div className="flex justify-between font-bold">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-black">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-gray-900">Total</span>
                  <span className="text-2xl font-black text-primary">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <h2 className="text-2xl font-black mb-6 pt-6 border-t">Payment</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-3">
                  <input type="radio" name="payment" id="cod" defaultChecked className="mt-1.5 accent-primary w-4 h-4" />
                  <label htmlFor="cod" className="cursor-pointer">
                    <span className="block font-bold">Cash on delivery</span>
                    <span className="text-sm text-gray-500">Pay with cash upon delivery.</span>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" id="paypal" className="accent-primary w-4 h-4" />
                  <label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer font-bold">
                    PayPal 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="" className="h-4" />
                    <span className="text-xs text-blue-500 font-normal">What is PayPal?</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-primary text-white font-black py-5 rounded-full hover:bg-primary/90 transition-all uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
