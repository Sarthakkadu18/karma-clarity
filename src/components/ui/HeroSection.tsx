import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient orbs that follow mouse */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #1a1a1a 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Floating cosmic particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: `hsl(${280 + Math.random() * 60}, 100%, ${60 + Math.random() * 30}%)`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px hsl(${280 + Math.random() * 60}, 100%, ${60 + Math.random() * 30}%)`,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
        
        {/* Pulsing gradient rings */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, hsl(var(--spiritual-purple)/0.3), hsl(var(--spiritual-blue)/0.3), hsl(var(--spiritual-teal)/0.3), hsl(var(--spiritual-gold)/0.3), hsl(var(--spiritual-purple)/0.3))',
            filter: 'blur(30px)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'conic-gradient(from 180deg, hsl(var(--spiritual-gold)/0.4), hsl(var(--spiritual-teal)/0.4), hsl(var(--spiritual-blue)/0.4), hsl(var(--spiritual-purple)/0.4), hsl(var(--spiritual-gold)/0.4))',
            filter: 'blur(25px)',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, hsl(var(--spiritual-purple)) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, hsl(var(--spiritual-blue)) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, hsl(var(--spiritual-teal)) 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, hsl(var(--spiritual-gold)) 0%, transparent 50%)
            `,
            animation: 'nebula-drift 30s ease-in-out infinite',
          }}
        />
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--spiritual-purple)/0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--spiritual-purple)/0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'float 20s ease-in-out infinite',
            }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Background glow for title */}
          <motion.div
            className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.h1 
            className="relative font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              MindVersee
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light tracking-wide mb-8">
              Inner Peace and Wisdom
            </p>
            
            {/* Enhanced scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex justify-center mb-8"
            >
              <motion.div
                className="flex flex-col items-center text-text-muted cursor-pointer group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="text-sm mb-4 group-hover:text-spiritual-purple transition-colors"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Scroll to explore
                </motion.span>
                <motion.div
                  className="relative w-8 h-12 border-2 border-spiritual-purple/50 rounded-full flex items-start justify-center pt-2 group-hover:border-spiritual-purple transition-colors"
                  animate={{ 
                    boxShadow: [
                      '0 0 0px hsl(var(--spiritual-purple)/0.3)',
                      '0 0 20px hsl(var(--spiritual-purple)/0.6)',
                      '0 0 0px hsl(var(--spiritual-purple)/0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-3 bg-spiritual-purple rounded-full"
                    animate={{ 
                      y: [0, 8, 0],
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Animated divider */}
            <motion.div className="relative mx-auto w-32 h-2 mb-8">
              <motion.div
                className="absolute inset-0 bg-gradient-primary rounded-full"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-secondary rounded-full"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};