import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Bats and ball',
    price: '₹299.00',
    rating: 4,
    image: '/src/assets/ball and bat.jpg'
  },
  {
    id: 2,
    name: 'Professional Helmet',
    price: '₹129.00',
    rating: 5,
    image: '/src/assets/helmet.jpg'
  },
  {
    id: 3,
    name: 'Elite Cricket Pads',
    price: '₹89.00',
    rating: 4,
    image: '/src/assets/cricketpads.jpg'
  },
  {
    id: 4,
    name: 'Premium Leather Ball',
    price: '₹45.00',
    rating: 5,
    image: '/src/assets/ball.jpg'
  }
];

const FeaturedProducts = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-[600px]">
      <div className="w-full md:w-1/2 relative group overflow-hidden">
        <img 
          src="/src/assets/home 6.jpg" 
          alt="Featured" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-12">
          <p className="text-xs font-bold tracking-[0.2em] mb-6 uppercase">FEATURED PRODUCTS</p>
          <h2 className="text-5xl font-bold leading-tight mb-10 max-w-md">We offer premium quality cricket equipment</h2>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-primary hover:bg-primary/90 text-white font-black py-4 px-12 rounded-full transition-all duration-300 uppercase tracking-widest shadow-xl shadow-primary/20"
          >
            VIEW MORE
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-10 md:p-20 text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-xs w-full cursor-pointer group"
            onClick={() => navigate(`/product/${products[current].id}`)}
          >
            <div className="h-64 flex items-center justify-center mb-12">
              <img 
                src={products[current].image} 
                alt={products[current].name} 
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">{products[current].name}</h3>
            <p className="text-gray-500 font-medium text-lg mb-4">{products[current].price}</p>
            <div className="flex justify-center text-yellow-400 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < products[current].rating ? "currentColor" : "none"} 
                  strokeWidth={i < products[current].rating ? 0 : 2} 
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-3 mt-4">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === i ? "bg-primary w-4" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
