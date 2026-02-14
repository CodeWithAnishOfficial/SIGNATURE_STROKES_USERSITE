import React, { useState } from 'react';
import { ShoppingBag, Search, Grid, Menu, X, Heart, User, LogOut, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { cart, cartCount, cartTotal, removeFromCart, isLoggedIn, logout, user } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setIsSearchOpen(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4">
      <header className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full transition-all duration-300 hover:shadow-2xl relative">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-0 rounded overflow-hidden">
              <img 
                src="/src/assets/signaturestrokeslogo.png" 
                alt="Signature Strokes Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.src = 'https://raw.githubusercontent.com/Anish-Kamali/cricket-assets/main/signature-strokes-logo.jpg';
                }}
              />
            </div>
            <span className="font-bold text-lg tracking-tighter uppercase text-slate-900 leading-tight hidden sm:block">
              SIGNATURE <span className="text-xs block leading-none font-normal text-gray-500">STROKES</span>
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm">
          <Link to="/" className={`font-bold transition-all ${isActive('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-700 hover:text-primary'}`}>HOME</Link>
          
          {/* Shop with Dropdown */}
          <div className="relative group py-2">
            <Link to="/shop" className={`flex items-center gap-1 font-bold transition-all ${isActive('/shop') ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-700 hover:text-primary'}`}>
              SHOP <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 rounded-2xl shadow-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <ul className="space-y-4">
                <li><Link to="/shop" className="text-white font-bold text-lg hover:text-primary transition-colors border-b-2 border-white pb-1 inline-block">Product List</Link></li>
                <li><Link to="/product/1" className="text-white hover:text-primary transition-colors block">Product Single</Link></li>
                <li><Link to="/cart" className="text-white hover:text-primary transition-colors block">Cart</Link></li>
                <li><Link to="/checkout" className="text-white hover:text-primary transition-colors block">Checkout</Link></li>
                <li><Link to="/wishlist" className="text-white hover:text-primary transition-colors block">Wishlist Page</Link></li>
              </ul>
            </div>
          </div>

          <Link to="/about" className={`font-semibold transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}>ABOUT US</Link>
          <Link to="/blogs" className={`font-semibold transition-colors ${isActive('/blogs') ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}>BLOGS</Link>
          <Link to="/contact" className={`font-semibold transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}>CONTACT US</Link>
        </nav>

        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full px-4 py-1 flex items-center shadow-lg w-48 sm:w-64 animate-in slide-in-from-right-4 duration-300">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none text-xs flex-1 py-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <X className="w-3 h-3 text-gray-400 cursor-pointer" onClick={() => setIsSearchOpen(false)} />
              </form>
            ) : (
              <Search 
                className="w-5 h-5 cursor-pointer text-slate-700 hover:text-primary transition-colors" 
                onClick={() => setIsSearchOpen(true)}
              />
            )}
          </div>

          <Link to="/wishlist" className="relative group">
            <Heart className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors" />
          </Link>

          <div className="relative cursor-pointer group" onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
            
            {/* Mini Cart Popup */}
            {isCartOpen && (
              <div className="absolute top-full right-0 mt-6 w-80 bg-zinc-900 rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                  <h3 className="text-white font-black uppercase tracking-widest text-sm">Shopping Cart</h3>
                  <X className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-white" onClick={() => setIsCartOpen(false)} />
                </div>
                
                {cart.length === 0 ? (
                  <p className="text-zinc-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="max-h-60 overflow-y-auto space-y-4 mb-6 scrollbar-hide">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 group">
                          <div className="w-20 h-20 bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-sm mb-1 leading-tight">{item.name}</h4>
                            <p className="text-zinc-400 text-xs">{item.quantity} × <span className="text-primary font-bold">₹{item.price.toFixed(2)}</span></p>
                          </div>
                          <X className="w-4 h-4 text-zinc-600 hover:text-primary cursor-pointer" onClick={() => removeFromCart(item.id)} />
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-zinc-800 pt-4 mb-6">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-white font-bold">Subtotal:</span>
                        <span className="text-primary font-black text-xl">₹{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => { navigate('/cart'); setIsCartOpen(false); }} className="bg-primary text-white font-black py-3 rounded-full hover:bg-primary/90 transition-all text-xs uppercase tracking-widest">View Cart</button>
                        <button onClick={() => { navigate('/checkout'); setIsCartOpen(false); }} className="border-2 border-white text-white font-black py-3 rounded-full hover:bg-white hover:text-zinc-900 transition-all text-xs uppercase tracking-widest">Checkout</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Auth Links / Profile Dropdown */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 border-2 border-white"
                >
                  {getInitials(user?.name)}
                </button>
                
                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-4 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <button 
                      onClick={() => { navigate('/profile'); setIsProfileOpen(false); }}
                      className="w-full text-left px-4 py-3 text-sm font-bold text-slate-700 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button 
                      onClick={() => { logout(); setIsProfileOpen(false); }}
                      className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4 border-l pl-4 border-gray-100">
                <Link to="/login" state={{ from: location.pathname }} className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-primary transition-colors">Login</Link>
                <Link to="/register" className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-primary transition-colors">Register</Link>
              </div>
            )}
          </div>
          
          <button 
            className="lg:hidden p-1 text-slate-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-2 bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 flex flex-col space-y-4 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <Link to="/" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/shop" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
            <Link to="/about" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
            <Link to="/blogs" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>BLOGS</Link>
            <Link to="/contact" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
            <Link to="/wishlist" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>WISHLIST</Link>
            <Link to="/cart" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>CART</Link>
            {!isLoggedIn && (
              <>
                <Link to="/login" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>
                <Link to="/register" className="font-bold text-slate-900 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>REGISTER</Link>
              </>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
