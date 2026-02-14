import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Cricket Bat: A Professional Guide",
    excerpt: "The weight, balance, and willow quality of your bat can make or break your game. Learn how to choose your perfect match.",
    content: "When selecting a professional cricket bat, several factors come into play. Firstly, the grade of English Willow (Grade 1 being the best) determines the performance and longevity. A Grade 1 willow bat typically features 6-10 straight grains and minimal blemishes. Secondly, the weight distribution or 'pickup' is crucial. A bat might weigh 2lb 9oz but pick up like a 2lb 7oz due to superior balancing. Finally, consider the handle type—treble spring cane handles offer the best shock absorption and feel.",
    author: "James Wilson",
    date: "May 15, 2024",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
  },
  {
    id: 2,
    title: "Top 5 Drills to Improve Your Cover Drive",
    excerpt: "Master the most elegant shot in cricket with these high-intensity drills designed for the modern player.",
    content: "The cover drive requires perfect synchronization of head, feet, and hands. Drill 1: The 'Static Ball' drill—focus on stepping towards the line and keeping the head over the ball. Drill 2: 'Drop Feed'—have a partner drop the ball in front of you to practice timing. Drill 3: 'Cone Target'—place cones in the covers to improve precision. Drill 4: 'High-Elbow' shadow batting. Drill 5: 'Target Hitting' against a bowling machine. Consistency in these drills will build the muscle memory needed for a flawless cover drive.",
    author: "Sarah Smith",
    date: "May 12, 2024",
    category: "Training",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80"
  },
  {
    id: 3,
    title: "How to Knock-in Your New Willow Properly",
    excerpt: "Knocking-in is essential for your bat's longevity. Discover the step-by-step process used by pros.",
    content: "Knocking-in is the process of compressing the wood fibers to prevent cracking. Start by applying a light coat of raw linseed oil to the face and edges. Let it dry for 24 hours. Use a wooden mallet to gently tap the face and edges, gradually increasing the force over 4-6 hours of manual knocking. Focus heavily on the edges and toe as these are high-impact areas. Once the edges are rounded and the face shows no indentations from the ball, start with throw-downs before taking it into a match.",
    author: "David Miller",
    date: "May 10, 2024",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&q=80"
  }
];

const Blogs = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-black text-gray-900 mb-6 uppercase italic tracking-tighter">Cricket <span className="text-primary">Insights</span></h1>
            <p className="text-gray-500 font-medium">Expert advice, gear reviews, and training tips from the pros at Signature Strokes.</p>
          </div>
          <div className="flex gap-4">
             {['All', 'Equipment', 'Training', 'Safety'].map(cat => (
               <button key={cat} className="px-6 py-2 rounded-full border border-gray-100 font-bold text-sm hover:bg-zinc-900 hover:text-white transition-all">
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="bg-zinc-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row group">
            <div className="w-full lg:w-1/2 overflow-hidden">
               <img 
                 src={blogPosts[0].image} 
                 alt="Featured" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
               />
            </div>
            <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
               <div className="flex items-center gap-4 mb-6">
                 <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Featured</span>
                 <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{blogPosts[0].date}</span>
               </div>
               <h2 className="text-4xl font-black text-white mb-6 uppercase italic leading-tight">{blogPosts[0].title}</h2>
               <p className="text-zinc-400 mb-10 leading-relaxed font-medium">{blogPosts[0].excerpt}</p>
               
               <AnimatePresence>
                 {expandedPost === blogPosts[0].id && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="overflow-hidden"
                   >
                     <p className="text-zinc-300 mb-10 leading-relaxed font-medium border-l-2 border-primary pl-6">
                       {blogPosts[0].content}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>

               <button 
                 onClick={() => toggleExpand(blogPosts[0].id)}
                 className="flex items-center gap-3 text-white font-black uppercase tracking-widest group/btn hover:text-primary transition-colors"
               >
                  {expandedPost === blogPosts[0].id ? 'Show Less' : 'Read Full Article'}
                  {expandedPost === blogPosts[0].id ? <ChevronUp size={20} /> : <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />}
               </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="group">
              <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-primary" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} className="text-primary" />
                  {post.author}
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase italic group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium line-clamp-2">
                {post.excerpt}
              </p>

              <AnimatePresence>
                {expandedPost === post.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mb-8 leading-relaxed font-medium p-6 bg-gray-50 rounded-2xl border-l-4 border-primary">
                      {post.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => toggleExpand(post.id)}
                className="flex items-center gap-3 text-gray-900 font-black uppercase tracking-widest group/btn hover:text-primary transition-colors"
              >
                  {expandedPost === post.id ? 'Show Less' : 'Read More'}
                  {expandedPost === post.id ? <ChevronUp size={18} /> : <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />}
               </button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="relative z-10">
             <h2 className="text-4xl font-black text-white mb-6 uppercase italic">Never Miss an Update</h2>
             <p className="text-white/80 font-medium mb-12 max-w-xl mx-auto">Get the latest training tips and gear releases delivered directly to your inbox every week.</p>
             <form className="max-w-md mx-auto flex gap-4 p-2 bg-white rounded-2xl shadow-2xl">
               <input 
                 type="email" 
                 placeholder="your@email.com"
                 className="flex-1 border-none bg-transparent px-6 py-4 focus:ring-0 font-bold"
               />
               <button className="bg-zinc-900 text-white font-black px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all uppercase tracking-widest text-sm">
                 Join
               </button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;