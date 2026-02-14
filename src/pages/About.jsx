import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Users, Shield, Zap, Target, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-0 bg-white font-sans overflow-x-hidden text-zinc-900">
      {/* Hero Section - Minimalist & Bold */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-primary rounded-full mb-6">
              <Award size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Est. 2015</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-zinc-950 mb-8 uppercase tracking-tighter leading-[0.9]">
              Crafting <span className="text-primary italic">Legacy</span> In Every Stroke.
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed font-medium max-w-xl">
              Signature Strokes was born from a singular obsession: to equip the modern cricketer with gear that bridges the gap between raw talent and legendary performance.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-1000" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-zinc-900/5 rounded-full blur-3xl group-hover:bg-zinc-900/10 transition-colors duration-1000" />
            
            {/* Main Image Container */}
            <div className="relative z-10 aspect-[4/5] bg-zinc-100 rounded-tr-[8rem] rounded-bl-[8rem] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80" 
                alt="Elite Cricket Performance" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Floating Text Overlay */}
              <div className="absolute bottom-12 left-12 right-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-white text-4xl font-black italic uppercase tracking-tighter leading-[0.85]">
                  <span className="block mb-1 opacity-80">Precision</span>
                  <span className="block mb-1 text-primary drop-shadow-2xl">Performance</span>
                  <span className="block opacity-80">Passion</span>
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl rotate-[-10deg] group-hover:rotate-0 transition-all duration-700">
                <Trophy className="text-primary w-6 h-6 mb-1" />
                <p className="text-[8px] font-black text-white uppercase tracking-widest">Premium Quality</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Clean Cards */}
      <section className="bg-zinc-950 py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-12 rounded-[2.5rem] border border-zinc-800">
              <Target className="text-primary mb-6" size={48} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                To engineer the world's most responsive cricket equipment. We merge traditional craftsmanship with cutting-edge materials to ensure that every bat, ball, and protective gear we produce empowers players to play their natural game with absolute confidence.
              </p>
            </div>
            <div className="bg-zinc-900 p-12 rounded-[2.5rem] border border-zinc-800">
              <Globe className="text-primary mb-6" size={48} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                To become the global standard for professional cricket gear. We envision a future where "Signature Strokes" is synonymous with innovation, safety, and the spirit of the game, supporting cricketers from their first practice to their final world-class match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modern Icons */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-4 italic">Core Excellence</h2>
          <h3 className="text-5xl font-black text-zinc-950 uppercase tracking-tighter">Why Choose Signature Strokes?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Trophy, title: 'Pro-Grade', desc: 'Equipment trusted by professionals for high-intensity international matches.' },
            { icon: Shield, title: 'Safety First', desc: 'Protective gear that exceeds global standards for player safety.' },
            { icon: Zap, title: 'Advanced Tech', desc: 'Leveraging aerodynamics and material science for superior handling.' },
            { icon: Heart, title: 'Hand-Crafted', desc: 'Our bats are hand-picked and crafted from the finest English Willow.' }
          ].map((val, i) => (
            <div key={i} className="group p-10 bg-zinc-50 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 text-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <val.icon size={32} />
              </div>
              <h4 className="text-lg font-black text-zinc-950 uppercase tracking-tight mb-4">{val.title}</h4>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Ethos - Split Section */}
      <section className="bg-zinc-50 py-32 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-black text-zinc-950 uppercase tracking-tighter mb-10 leading-none">
              More Than <br /> Just A <span className="text-primary italic">Brand.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Global Community</h4>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                    We support a thriving community of 50,000+ players worldwide, sharing insights, training tips, and match highlights.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Innovation Driven</h4>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                    Our R&D team works directly with active players to prototype gear that solves real on-field challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl transform hover:-rotate-3 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&q=80" alt="Training" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl bg-primary flex items-center justify-center text-white text-center p-8">
                <div>
                  <p className="text-4xl font-black italic mb-2 tracking-tighter">50K+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest">Players Empowered</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl bg-zinc-900 flex items-center justify-center text-white text-center p-8">
                <div>
                  <p className="text-4xl font-black italic mb-2 tracking-tighter">20+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest">Countries Reached</p>
                </div>
              </div>
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl transform hover:rotate-3 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80" alt="Bat Craft" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call - Elegant & Dark */}
      <section className="bg-zinc-950 py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Ready To Define Your <span className="text-primary italic">Signature?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 font-medium">
            Join thousands of cricketers who have already upgraded their game with elite equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-primary hover:bg-primary/90 text-white font-black px-12 py-5 rounded-full transition-all uppercase tracking-widest text-xs shadow-2xl shadow-primary/20">
              Browse Collection
            </Link>
            <Link to="/contact" className="bg-transparent border border-zinc-700 hover:border-white text-white font-black px-12 py-5 rounded-full transition-all uppercase tracking-widest text-xs">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
