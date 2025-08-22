import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Heart, Brain, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: 'Ancient Wisdom',
    description: 'Access profound teachings from sacred texts including Bhagavad Gita, Quran, Bible, Dhammapada, and Tao Te Ching.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Guidance',
    description: 'Our advanced AI analyzes your concerns and matches you with the most relevant spiritual wisdom for your situation.'
  },
  {
    icon: Heart,
    title: 'Personalized Support',
    description: 'Receive customized guidance that speaks to your heart and helps you navigate life\'s challenges with clarity.'
  },
  {
    icon: Sparkles,
    title: 'Karma System',
    description: 'Start with 150 Karma credits and use them to unlock personalized wisdom and spiritual conversations.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">About MindVersee</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            MindVersee is your personal spiritual companion, bridging ancient wisdom with modern technology. 
            We help you find peace, clarity, and guidance through the timeless teachings of the world's 
            most profound spiritual texts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-border/20 hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass border-border/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">
                Our Mission
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                In a world filled with uncertainty and stress, MindVersee serves as your beacon of light. 
                We believe that the ancient wisdom contained in sacred texts holds the keys to modern peace and happiness. 
                Our mission is to make this wisdom accessible, personalized, and relevant to your daily life, 
                helping you cultivate inner peace, emotional resilience, and spiritual growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};