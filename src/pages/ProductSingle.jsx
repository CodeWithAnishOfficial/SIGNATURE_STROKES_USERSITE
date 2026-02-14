import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { Heart, ShoppingBag, Share2, Star, ChevronRight, ChevronDown, Check, X, ZoomIn, ZoomOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('Beige');
  const [activeTab, setActiveTab] = useState('Description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Size price multiplier
  const sizeMultipliers = {
    'S': 0.9,
    'M': 1,
    'L': 1.1,
    'SH': 1.1,
    'H': 1,
    'Standard': 1
  };

  const basePrice = product.price;
  const currentPrice = basePrice * (sizeMultipliers[selectedSize] || 1);
  const totalPrice = currentPrice * quantity;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const toggleZoom = () => {
    if (isZoomed) {
      setZoomScale(1);
      setIsZoomed(false);
    } else {
      setZoomScale(1.5);
      setIsZoomed(true);
    }
  };

  return (
    <div className="bg-white pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mb-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center text-sm text-gray-500 gap-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-primary">{product.category}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Product Images */}
          <div className="w-full lg:w-1/2 flex gap-4">
            <div className="flex flex-col gap-4">
              {[1, 2].map(i => (
                <div 
                  key={i} 
                  onClick={toggleZoom}
                  className="w-20 h-20 border rounded-md overflow-hidden cursor-pointer hover:border-orange-500 transition-colors bg-gray-50"
                >
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div 
              className="flex-1 border rounded-xl overflow-hidden bg-gray-50 aspect-square relative cursor-zoom-in"
              onClick={toggleZoom}
            >
              <motion.img 
                animate={{ scale: zoomScale }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                {isZoomed ? <ZoomOut className="w-5 h-5 text-gray-900" /> : <ZoomIn className="w-5 h-5 text-gray-900" />}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-4xl font-black text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-500 mb-4">Brand: CA Sports</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-black text-gray-900">₹{totalPrice.toFixed(2)}</span>
                {quantity > 1 && <span className="text-gray-400 text-lg line-through">₹{(currentPrice * 1.2 * quantity).toFixed(2)}</span>}
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill={i < product.rating ? "currentColor" : "none"} />
                  ))}
                  <span className="text-gray-400 ml-2 text-sm">(1 review)</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm">or 4 interest-free installments by Afterpay.</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold mb-3 uppercase text-sm tracking-wider">Size</h4>
                <div className="flex gap-3">
                  {(product.size || ['L', 'M']).map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-10 border rounded-md flex items-center justify-center font-bold transition-all ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-600 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-full px-4 py-2 bg-gray-50">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-black transition-colors font-bold text-xl px-2">-</button>
                  <input type="number" value={quantity} readOnly className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold" />
                  <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-black transition-colors font-bold text-xl px-2">+</button>
                </div>
                <button 
                  onClick={() => { addToCart({...product, price: currentPrice}, quantity); navigate('/cart'); }}
                  className="flex-1 bg-primary text-white font-black py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Buy Now
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`w-14 h-14 border rounded-full flex items-center justify-center transition-all ${isInWishlist(product.id) ? 'bg-primary text-white border-primary' : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'}`}
                >
                  <Heart className="w-6 h-6" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Guaranteed safe checkout</p>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl flex items-center gap-4 border border-gray-100">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm">
                 <Share2 className="w-6 h-6" />
               </div>
               <div>
                 <p className="font-bold text-gray-900">Need Help? Call Us +1 255 854 55 26</p>
                 <p className="text-gray-500 text-sm">Monday - Friday 9:00 - 17:00</p>
               </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          <div className="flex gap-8 border-b mb-8">
            {['Description', 'Delivery Info', 'Reviews (1)'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xl font-black transition-all relative ${activeTab === tab ? 'text-gray-900' : 'text-gray-400'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>}
              </button>
            ))}
          </div>

          <div className="min-h-[200px] animate-in fade-in duration-500">
            {activeTab === 'Description' && (
              <div className="text-gray-500 leading-relaxed max-w-4xl">
                <p>{product.description} Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonumy eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore et dolore magna aliquyam.</p>
              </div>
            )}
            {activeTab === 'Delivery Info' && (
              <ul className="space-y-4 text-gray-500 list-disc pl-5">
                <li>Standard and Express delivery services are available for all items.</li>
                <li>Shipping costs are calculated at the checkout page (after delivery option & destination confirmation).</li>
                <li>Tracking is available for all delivery options.</li>
                <li>Items are delivered during standard business hours.</li>
              </ul>
            )}
            {activeTab === 'Reviews (1)' && (
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-black mb-6">Average rating</h3>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-6xl font-black text-primary">5.00</span>
                    <div className="flex flex-col">
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className="text-gray-400 text-sm">1 review</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map(stars => (
                      <div key={stars} className="flex items-center gap-4">
                        <span className="w-12 text-sm text-gray-500">{stars} stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary ${stars === 5 ? 'w-full' : 'w-0'}`}></div>
                        </div>
                        <span className="w-12 text-sm text-gray-400">{stars === 5 ? '100%' : '0%'}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                   <h3 className="text-2xl font-black mb-6">Add a review</h3>
                   <div className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="Name *" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                       <input type="email" placeholder="Email *" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary" />
                     </div>
                     <div className="flex items-center gap-2">
                       <span className="text-sm font-bold">Your rating *</span>
                       <div className="flex text-gray-300">
                         {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 cursor-pointer hover:text-orange-400 transition-colors" />)}
                       </div>
                     </div>
                     <textarea placeholder="Your review *" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary h-32"></textarea>
                     <button className="bg-primary text-white font-black px-12 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest shadow-lg shadow-primary/20">Submit</button>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-4xl font-black mb-10">Related products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <div key={p.id} className="group cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-gray-900 font-black">₹{p.price.toFixed(2)}</p>
                <div className="flex text-orange-400 mt-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < p.rating ? 'fill-current' : ''}`} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
