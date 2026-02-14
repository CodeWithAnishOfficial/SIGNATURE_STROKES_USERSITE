import React from 'react';
import { useStore } from '../context/StoreContext';
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout, wishlist, cartCount } = useStore();
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: User, label: 'Personal Info', active: true, path: '/profile' },
    { icon: Package, label: 'My Orders', badge: '2', path: '/orders' },
    { icon: Heart, label: 'Wishlist', badge: wishlist.length.toString(), path: '/wishlist' },
    { icon: MapPin, label: 'Addresses', path: '#' },
    { icon: Settings, label: 'Settings', path: '#' }
  ];

  const mockOrders = [
    { id: '#ORD-7721', date: 'Feb 10, 2026', status: 'Delivered', total: 132.00, items: 1 },
    { id: '#ORD-6540', date: 'Jan 25, 2026', status: 'Shipped', total: 258.00, items: 3 }
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-gray-100">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-5xl font-black mb-6 shadow-2xl shadow-primary/20 border-4 border-white">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <h2 className="text-2xl font-black text-gray-900 uppercase italic">{user?.name || 'Guest User'}</h2>
                <p className="text-gray-500 font-medium text-sm">{user?.email || 'guest@example.com'}</p>
              </div>

              <div className="space-y-2">
                {sidebarItems.map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => item.path !== '#' && navigate(item.path)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-sm ${item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon size={18} />
                      {item.label}
                    </div>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] ${item.active ? 'bg-white text-primary' : 'bg-gray-200 text-gray-600'}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
                <button 
                  onClick={logout}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm mt-4"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Orders Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Orders', value: '12', icon: Package, color: 'text-blue-500' },
                { label: 'Wishlist Items', value: wishlist.length, icon: Heart, color: 'text-red-500' },
                { label: 'Cart Items', value: cartCount, icon: Settings, color: 'text-orange-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-3xl font-black text-gray-900 italic">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} bg-gray-50 p-4 rounded-2xl`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-black text-gray-900 uppercase italic">Recent Orders</h3>
                <button className="text-primary font-black text-xs uppercase tracking-widest hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {mockOrders.map((order, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-gray-400">
                        <Package size={24} />
                      </div>
                      <div>
                        <p className="font-black text-gray-900">{order.id}</p>
                        <p className="text-gray-400 text-xs font-medium">{order.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:gap-12">
                      <div className="text-center">
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Status</p>
                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Total</p>
                        <p className="font-black text-gray-900 italic">₹{order.total.toFixed(2)}</p>
                      </div>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Form */}
            <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="text-2xl font-black text-white uppercase italic mb-8 relative z-10">Personal Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-4">Display Name</label>
                  <input type="text" defaultValue={user?.name} className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-4">Email Address</label>
                  <input type="email" defaultValue={user?.email} className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary transition-all font-bold" />
                </div>
                <button className="md:col-span-2 bg-primary text-white font-black py-5 rounded-2xl hover:bg-primary/90 transition-all uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                  Save Changes
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;