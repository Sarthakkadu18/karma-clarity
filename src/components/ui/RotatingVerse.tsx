import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { getRandomVerse, Verse } from '@/data/mockData';
import { BookOpen, Languages } from 'lucide-react';

export const RotatingVerse: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  const [showTranslation, setShowTranslation] = useState(true);

  useEffect(() => {
    // Set initial verse
    setCurrentVerse(getRandomVerse());

    // Rotate verse every 5 seconds
    const interval = setInterval(() => {
      setCurrentVerse(getRandomVerse());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!currentVerse) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="glass border-border/20 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-spiritual-purple" />
                <span className="text-sm font-medium text-text-secondary">
                  {currentVerse.context}
                </span>
              </div>
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="flex items-center space-x-1 text-sm text-spiritual-purple hover:text-spiritual-blue transition-colors"
              >
                <Languages size={16} />
                <span>{showTranslation ? 'Original' : 'Translation'}</span>
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentVerse.id}-${showTranslation}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
                  {showTranslation ? (
                    <span className="text-text-primary font-medium">
                      "{currentVerse.translation}"
                    </span>
                  ) : (
                    <span className="font-display text-spiritual-gold font-medium">
                      {currentVerse.text}
                    </span>
                  )}
                </blockquote>
                
                <cite className="text-sm text-spiritual-purple font-semibold">
                  — {currentVerse.source}
                </cite>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {currentVerse.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-spiritual-purple/20 text-spiritual-purple rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};