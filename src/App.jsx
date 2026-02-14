import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider, useStore } from './context/StoreContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedSidebar from './components/FixedSidebar';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import { CheckCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductSingle from './pages/ProductSingle';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

const NotificationList = () => {
  const { notifications } = useStore();
  
  return (
    <div className="fixed top-24 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      {notifications.map((n) => (
        <div 
          key={n.id} 
          className="bg-zinc-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-zinc-800 flex items-center gap-3 animate-in slide-in-from-right duration-300 pointer-events-auto"
        >
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="font-bold text-sm tracking-wide">{n.message}</span>
        </div>
      ))}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const hideHeaderFooter = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!['/login', '/register', '/forgot-password'].includes(location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-red-500 selection:text-white">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      <NotificationList />
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductSingle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <FixedSidebar />}
      {!hideHeaderFooter && <BackToTop />}
    </div>
  );
};

function App() {
  return (
    <StoreProvider>
      <Router>
        <AppContent />
      </Router>
    </StoreProvider>
  );
}

export default App;
