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
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-spiritual-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [-200, 200, -200],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-spiritual-blue/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-gradient-primary opacity-20 blur-2xl rounded-full"
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
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              <motion.span 
                className="text-gradient inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                About MindVersee
              </motion.span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            MindVersee is your personal spiritual companion, bridging ancient wisdom with modern technology. 
            We help you find peace, clarity, and guidance through the timeless teachings of the world's 
            most profound spiritual texts.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 3,
                  boxShadow: '0 20px 40px -12px hsl(var(--spiritual-purple) / 0.3)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass border-border/20 h-full group cursor-pointer overflow-hidden relative">
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    animate={{
                      background: [
                        'linear-gradient(45deg, hsl(var(--spiritual-purple)/0.1), hsl(var(--spiritual-blue)/0.1))',
                        'linear-gradient(135deg, hsl(var(--spiritual-blue)/0.1), hsl(var(--spiritual-teal)/0.1))',
                        'linear-gradient(225deg, hsl(var(--spiritual-teal)/0.1), hsl(var(--spiritual-gold)/0.1))',
                        'linear-gradient(315deg, hsl(var(--spiritual-gold)/0.1), hsl(var(--spiritual-purple)/0.1))',
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className="p-4 bg-gradient-primary rounded-xl relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 10,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        {/* Icon background effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-xl"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <feature.icon className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3 
                          className="text-xl font-semibold mb-3 text-text-primary group-hover:text-spiritual-gold transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              boxShadow: '0 30px 60px -12px hsl(var(--spiritual-gold) / 0.3)',
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Card className="glass border-border/20 max-w-5xl mx-auto relative overflow-hidden group">
              {/* Background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, hsl(var(--spiritual-purple)) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, hsl(var(--spiritual-gold)) 0%, transparent 50%)
                  `,
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, transparent 20%, hsl(var(--spiritual-gold)/0.1) 50%, transparent 80%)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              
              <CardContent className="p-10 relative z-10">
                <motion.h3 
                  className="text-3xl font-display font-semibold mb-6 text-gradient"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Our Mission
                </motion.h3>
                <motion.p 
                  className="text-lg text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-500"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  In a world filled with uncertainty and stress, MindVersee serves as your beacon of light. 
                  We believe that the ancient wisdom contained in sacred texts holds the keys to modern peace and happiness. 
                  Our mission is to make this wisdom accessible, personalized, and relevant to your daily life, 
                  helping you cultivate inner peace, emotional resilience, and spiritual growth.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};