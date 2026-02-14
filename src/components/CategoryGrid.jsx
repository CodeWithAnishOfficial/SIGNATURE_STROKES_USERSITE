import React from 'react';
import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Apparel', image: '/assets/bat.jpg' }, 
  { name: 'Balls', image: '/assets/ball.jpg' },
  { name: 'Bats', image: '/assets/home 6.jpg' },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-24 pb-20">
      {categories.map((cat, i) => (
        <div 
          key={i} 
          className="group relative h-[380px] overflow-hidden cursor-pointer rounded-3xl"
          onClick={() => navigate('/shop')}
        >
          <img 
            src={cat.image} 
            alt={cat.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2073&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-bold mb-4 transition-transform duration-300 group-hover:-translate-y-2 drop-shadow-lg">{cat.name}</h3>
            <div className="flex items-center space-x-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <span className="font-bold text-lg">Shop Now</span>
              <MoveRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
