import React from 'react';

const brands = [
  { name: 'name1', image: '/src/assets/name1.webp' },
  { name: 'name2', image: '/src/assets/name2.webp' },
  { name: 'name3', image: '/src/assets/name3.webp' },
  { name: 'name4', image: '/src/assets/name4.webp' },
  { name: 'name5', image: '/src/assets/name5.webp' },
];

const BrandLogos = () => {
  return (
    <div className="flex justify-between items-center px-24 py-16">
      {brands.map((brand, i) => (
        <div key={i} className="h-12 w-auto flex items-center justify-center cursor-pointer group">
          <img 
            src={brand.image} 
            alt={brand.name} 
            className="h-full w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-0 transition-all duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `<span class="text-3xl font-black tracking-tighter uppercase text-gray-300 group-hover:text-slate-900 transition-colors">${brand.name}</span>`;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;
