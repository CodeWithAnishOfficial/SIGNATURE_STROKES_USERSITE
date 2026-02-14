import React from 'react';
import { Mail, ArrowRight, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white font-sans">
      {/* Top Banner - Newsletter */}
      <div className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Join our legacy</h3>
            <p className="text-zinc-500 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-lg">
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-primary transition-all pr-32"
              />
              <button className="absolute right-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-0 rounded overflow-hidden">
                <img 
                  src="/assets/signaturestrokeslogo.png" 
                  alt="Signature Strokes Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    e.target.src = 'https://raw.githubusercontent.com/Anish-Kamali/cricket-assets/main/signature-strokes-logo.jpg';
                  }}
                />
              </div>
              <span className="font-bold text-lg tracking-tighter uppercase text-white leading-tight">
                SIGNATURE <span className="text-xs block leading-none font-normal text-zinc-500">STROKES</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Crafting excellence in every swing. Our equipment is designed for those who demand performance and style on the field.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary transition-all duration-300 border border-zinc-800">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-500">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'About Us', 'Blogs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-zinc-300 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-500">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-zinc-300">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                Shipping Policy
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                Returns & Exchanges
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                Terms & Conditions
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-500">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <p className="text-sm text-zinc-400">123 Cricket Avenue, Stadium District, London, UK</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <p className="text-sm text-zinc-400">+44 20 7123 4567</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <p className="text-sm text-zinc-400">support@signaturestrokes.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">
            © 2026 SIGNATURE STROKES. BUILT FOR CHAMPIONS.
          </p>
          <div className="flex gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-30 hover:opacity-100 transition-opacity grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-30 hover:opacity-100 transition-opacity grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-30 hover:opacity-100 transition-opacity grayscale" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
