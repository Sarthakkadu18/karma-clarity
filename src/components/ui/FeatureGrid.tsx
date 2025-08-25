import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'illumination',
    title: 'Illumination',
    description: 'Describe your problem',
    icon: (
      <motion.div 
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-600 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </motion.div>
    ),
    color: 'from-yellow-400/10 to-orange-500/10',
    borderColor: 'border-yellow-400/20',
    isModal: true
  },
  {
    id: 'kurukshetra',
    title: 'Kurukshetra',
    description: 'Chat with Krishna (Bhagavad Gita)',
    icon: (
      <motion.div 
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-700 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 16L3 8l9 4 9-4-2 8-9-4z"/>
          <path d="M12 12v8"/>
          <path d="M9 20h6"/>
        </svg>
      </motion.div>
    ),
    color: 'from-purple-500/10 to-blue-600/10',
    borderColor: 'border-purple-500/20',
    path: '/chat/kurukshetra'
  },
  {
    id: 'shifa',
    title: 'Shifa',
    description: 'Islamic wisdom guidance (Quran)',
    icon: (
      <motion.div 
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-700 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
    ),
    color: 'from-green-500/10 to-teal-600/10',
    borderColor: 'border-green-500/20',
    path: '/chat/shifa'
  },
  {
    id: 'iqra',
    title: 'Iqra',
    description: 'Christian teachings (Bible)',
    icon: (
      <motion.div 
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-700 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </motion.div>
    ),
    color: 'from-blue-500/10 to-indigo-600/10',
    borderColor: 'border-blue-500/20',
    path: '/chat/iqra'
  }
];

interface FeatureGridProps {
  onIlluminationClick?: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onIlluminationClick }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map((feature, index) => {
          const cardContent = (
            <motion.div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border ${feature.borderColor} p-8 text-center cursor-pointer group transition-all duration-500`}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)) 1',
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${feature.color.replace('/10', '/30')}`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    ],
                    backgroundPosition: ['-200% -200%', '200% 200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h3 
                  className="mb-4 text-2xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Animated bottom indicator */}
                <motion.div 
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          );

          if (feature.isModal) {
            return (
              <div key={feature.id} onClick={onIlluminationClick}>
                {cardContent}
              </div>
            );
          }

          return (
            <Link key={feature.id} to={feature.path}>
              {cardContent}
            </Link>
          );
        })}
      </div>

      {/* About Section */}
      <motion.div
        className="mt-24 text-center max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-display font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-12"
          whileInView={{ scale: [0.9, 1.05, 1] }}
          transition={{ duration: 0.6 }}
        >
          About MindVersee
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              MindVersee is your personal spiritual companion, drawing wisdom from the world's most profound sacred texts. 
              Our AI-powered platform analyzes your challenges and connects you with timeless teachings from the Bhagavad Gita, 
              Quran, Bible, and other spiritual treasures.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through advanced natural language processing, we understand your emotional state and provide personalized guidance 
              that speaks directly to your heart. Every interaction costs Karma - a sacred currency that values the profound 
              wisdom you receive.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: "4", label: "Sacred Texts", icon: "📚" },
              { number: "150", label: "Starting Karma", icon: "⚡" },
              { number: "∞", label: "Wisdom Depth", icon: "🔮" },
              { number: "24/7", label: "Guidance", icon: "🌟" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-800/50 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Mission Statement */}
        <motion.div
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm border border-gray-800/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            "To bridge ancient wisdom with modern challenges, providing solace, perspective, and actionable guidance 
            for those seeking inner peace and spiritual growth in our complex world."
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};