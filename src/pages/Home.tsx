import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { Navigation } from '@/components/ui/Navigation';
import { RotatingVerse } from '@/components/ui/RotatingVerse';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { IlluminationModal } from '@/components/ui/IlluminationModal';
import { useAuthStore } from '@/stores/authStore';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const [isIlluminationOpen, setIsIlluminationOpen] = useState(false);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              MindVersee
            </h1>
            <p className="text-xl text-gray-400">
              Find peace and guidance through the wisdom of ages
            </p>
          </motion.div>

          {/* Rotating Verse Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <RotatingVerse />
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
                Choose Your Path to Wisdom
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Explore our guided features to find the spiritual guidance that resonates with your heart.
              </p>
            </div>
            
            <FeatureGrid onIlluminationClick={() => setIsIlluminationOpen(true)} />
          </motion.div>
        </div>
      </main>

      {/* Illumination Modal */}
      <IlluminationModal
        isOpen={isIlluminationOpen}
        onClose={() => setIsIlluminationOpen(false)}
      />
    </div>
  );
};

export default Home;