import React, { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  // Cart Functions
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    addNotification(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Wishlist Functions
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    setWishlist((prevWishlist) => {
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
    addNotification(`${product.name} ${exists ? 'removed from' : 'added to'} wishlist!`);
  };

  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  // Auth Functions (Static Mock)
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    toggleWishlist,
    isInWishlist,
    isLoggedIn,
    user,
    login,
    logout,
    notifications,
    addNotification,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
