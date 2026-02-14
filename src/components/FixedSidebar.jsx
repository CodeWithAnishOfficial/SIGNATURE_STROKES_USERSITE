import React from 'react';
import { ShoppingCart, Image, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const FixedSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col space-y-px">
      <Link to="/cart" className="bg-[#EF4444] text-white p-4 hover:bg-[#DC2626] transition-colors rounded-l-md shadow-lg block">
        <ShoppingCart size={20} />
      </Link>
      <Link to="/shop" className="bg-[#EF4444] text-white p-4 hover:bg-[#DC2626] transition-colors rounded-l-md shadow-lg block">
        <Image size={20} />
      </Link>
      <Link to="/shop" className="bg-[#EF4444] text-white p-4 hover:bg-[#DC2626] transition-colors rounded-l-md shadow-lg block">
        <Layout size={20} />
      </Link>
    </div>
  );
};

export default FixedSidebar;
