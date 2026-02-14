import React from 'react';
import { useStore } from '../context/StoreContext';
import { Package, ChevronRight, Clock, CheckCircle2, Truck, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  
  const mockOrders = [
    {
      id: '#ORD-7721',
      date: 'Feb 10, 2026',
      status: 'Delivered',
      total: 132.00,
      items: [
        { name: 'Cricket ball', price: 132.00, quantity: 1, image: '/src/assets/ball.jpg' }
      ]
    },
    {
      id: '#ORD-6540',
      date: 'Jan 25, 2026',
      status: 'Shipped',
      total: 258.00,
      items: [
        { name: 'Cricket helmet', price: 129.00, quantity: 2, image: '/src/assets/helmet.jpg' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-600';
      case 'Shipped': return 'bg-blue-100 text-blue-600';
      case 'Processing': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <CheckCircle2 size={16} />;
      case 'Shipped': return <Truck size={16} />;
      case 'Processing': return <Clock size={16} />;
      default: return null;
    }
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => navigate('/profile')}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter">My Orders</h1>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
              {/* Order Top Info */}
              <div className="p-8 border-b border-gray-50 flex flex-wrap justify-between items-center gap-4 bg-gray-50/50">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                    <Package size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Order ID</p>
                    <p className="font-black text-gray-900">{order.id}</p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="text-right hidden sm:block">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Placed On</p>
                    <p className="font-bold text-gray-900 text-sm">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Total Amount</p>
                    <p className="font-black text-primary text-lg italic">₹{order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Order Status Bar */}
              <div className="px-8 py-4 flex items-center gap-4">
                 <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(order.status)}`}>
                   {getStatusIcon(order.status)}
                   {order.status}
                 </div>
                 <div className="h-px flex-1 bg-gray-100"></div>
                 <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Track Order</button>
              </div>

              {/* Order Items */}
              <div className="p-8 space-y-6">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-gray-400 text-xs font-medium">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-gray-900">₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="px-8 py-6 bg-gray-50/30 border-t border-gray-50 flex justify-end gap-4">
                <button className="px-6 py-3 rounded-xl border border-gray-200 font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">Details</button>
                <button className="px-6 py-3 rounded-xl bg-zinc-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg">Buy Again</button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Mockup */}
        {mockOrders.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Package size={40} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase italic mb-4">No orders yet</h2>
            <p className="text-gray-500 mb-8 max-w-xs mx-auto">Looks like you haven't placed any orders. Time to gear up!</p>
            <Link to="/shop" className="bg-primary text-white font-black px-10 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest shadow-xl shadow-primary/20">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;