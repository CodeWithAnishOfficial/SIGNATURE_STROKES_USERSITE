import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useNavigate, Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/src/assets/home 1.jpg',
    subtitle: 'PREMIUM QUALITY CRICKET EQUIPMENT',
    title1: 'Seasonal sales &',
    title2: 'discount',
    title3: 'programs',
    title4: 'for regulars',
    product: {
      name: 'Cricket ball',
      price: '₹132.00',
      rating: 4,
      image: '/src/assets/ball.jpg'
    }
  },
  {
    id: 2,
    image: '/src/assets/home 2.jpg',
    subtitle: 'PREMIUM QUALITY CRICKET EQUIPMENT',
    title1: 'Cricket products',
    title2: 'for kids and',
    title3: 'junior',
    title4: 'league players',
    product: {
      name: 'Cricket bails',
      price: '₹59.00',
      rating: 4,
      image: '/src/assets/bails.jpg'
    }
  },
  {
    id: 3,
    image: '/src/assets/home 3.jpg',
    subtitle: 'PREMIUM QUALITY CRICKET EQUIPMENT',
    title1: 'Professional Gear',
    title2: 'for elite',
    title3: 'cricket',
    title4: 'performance',
    product: {
      name: 'Cricket bat',
      price: '₹299.00',
      rating: 5,
      image: '/src/assets/bat.jpg'
    }
  },
  {
    id: 4,
    image: '/src/assets/home4.jpg',
    subtitle: 'EXPLORE OUR COLLECTION',
    title1: 'Master your',
    title2: 'signature',
    title3: 'strokes with',
    title4: 'best gear',
    product: {
      name: 'Cricket helmet',
      price: '₹129.00',
      rating: 4,
      image: '/src/assets/helmet.jpg'
    }
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Changed to 4 seconds for a tighter feel
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1a1a1a]">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-10"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] scale-105"
            style={{ backgroundImage: `url("${slides[current].image}")` }}
          >
          </div>

          <div className="relative h-full flex flex-col justify-center pt-24 px-8 md:px-24">
            <div className="max-w-4xl text-white">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xs font-bold tracking-widest mb-4 uppercase drop-shadow-md"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 drop-shadow-lg"
              >
                {slides[current].title1}<br />
                {slides[current].title2}<br />
                {slides[current].title3}<br />
                {slides[current].title4}
              </motion.h1>
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => navigate('/shop')}
                className="bg-primary hover:bg-primary/90 text-white font-black py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-sm uppercase tracking-widest"
              >
                SHOP NOW
              </motion.button>
            </div>

            {/* Floating Product Card */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute right-24 top-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl rounded-xl w-80 hidden lg:block cursor-pointer group"
              onClick={() => {
                const slideProductIdMap = {
                  1: 1, // Ball
                  2: 5, // Bails
                  3: 4, // Bat
                  4: 3  // Helmet
                };
                const actualId = slideProductIdMap[slides[current].id];
                navigate(`/product/${actualId}`);
              }}
            >
              <div className="aspect-square mb-6 overflow-hidden flex items-center justify-center bg-gray-50 rounded-lg">
                <img src={slides[current].product.image} alt="" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-slate-900 group-hover:text-primary transition-colors">{slides[current].product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold text-lg">{slides[current].product.price}</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < slides[current].product.rating ? "currentColor" : "none"} strokeWidth={i < slides[current].product.rating ? 0 : 2} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-10 flex space-x-2">
        <button 
          onClick={prev}
          className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
