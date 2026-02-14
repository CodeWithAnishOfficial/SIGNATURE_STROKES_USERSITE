import React from 'react';
import { Send, Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="relative py-32 bg-[#F8F9FA] flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[9vw] font-bold text-[#DEE2E6]/40 uppercase tracking-[0.05em] leading-none font-sans">
          newsletter
        </h1>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl">
        {/* Top Icon */}
        <div className="bg-red-500 p-5 rounded-full text-white mb-8 shadow-2xl shadow-red-600/20">
          <Send size={28} fill="currentColor" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-bold mb-12 text-[#1A1D23] max-w-xl leading-tight">
          Get the best blog stories into your inbox!
        </h2>
        
        {/* Input Container */}
        <div className="w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-sm border border-gray-100">
          <input 
            type="email" 
            placeholder="Enter Your Email Address" 
            className="flex-1 bg-transparent px-8 py-4 outline-none text-gray-500 placeholder:text-gray-400 text-lg"
          />
          <div className="h-8 w-[1px] bg-gray-200 mx-2" />
          <button className="flex items-center space-x-3 px-8 py-4 text-[#1A1D23] hover:text-red-500 transition-colors">
            <Send size={18} />
            <span className="font-bold tracking-widest text-[13px]">SUBSCRIBE</span>
          </button>
        </div>
        
        {/* Checkbox */}
        <div className="mt-10 flex items-center space-x-3">
          <input 
            type="checkbox" 
            id="newsletter-agree" 
            className="w-5 h-5 rounded border-gray-300 accent-red-500 cursor-pointer bg-white" 
          />
          <label htmlFor="newsletter-agree" className="text-gray-500 text-base cursor-pointer">
            I agree to the <a href="#" className="underline hover:text-[#1A1D23] transition-colors">Privacy Policy</a>.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
