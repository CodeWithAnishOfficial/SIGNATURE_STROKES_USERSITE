import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-6xl font-black text-gray-900 mb-6 uppercase italic tracking-tighter">Get In Touch</h1>
          <p className="text-gray-500 font-medium">Have questions about our gear or your order? We're here to help you hit that century.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            {[
              { icon: Phone, title: 'Call Us', detail: '+1 (255) 854-5526', desc: 'Mon-Fri from 9am to 6pm.' },
              { icon: Mail, title: 'Email Us', detail: 'hello@signaturestrokes.com', desc: 'Our team is here to help.' },
              { icon: MapPin, title: 'Visit Us', detail: '123 Cricket Lane, St. John\'s', desc: 'London, UK SW1 2PT' },
              { icon: Clock, title: 'Support Hours', detail: '24/7 Support', desc: 'For premium members.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-primary font-black text-sm mb-1">{item.detail}</p>
                  <p className="text-gray-400 text-xs font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <h2 className="text-3xl font-black text-white mb-10 uppercase italic">Send a Message</h2>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-4">Subject</label>
                  <select className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary transition-all appearance-none">
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Bulk Order</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-4">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-primary/90 transition-all uppercase tracking-[0.2em] shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;