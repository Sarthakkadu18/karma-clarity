import React from 'react';
import { motion } from 'framer-motion';
import { SplineEmbed } from './SplineEmbed';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SplineEmbed />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-primary/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-glow">
            <span className="text-gradient">MindVersee</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light tracking-wide"
          >
            Inner Peace and Wisdom
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8"
          >
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-text-muted">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-6 border-2 border-spiritual-purple rounded-full flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-spiritual-purple rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};