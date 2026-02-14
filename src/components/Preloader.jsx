import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
    >
      <div className="relative w-24 h-24 mb-8">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-gray-100 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-4 border-primary rounded-full"
        />
        
        {/* Logo/Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h2 className="text-xl font-black text-gray-900 tracking-[0.3em] uppercase mb-2 italic">Signature Strokes</h2>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
