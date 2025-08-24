import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lightbulb, Crown, Heart, Cross, MessageCircle } from 'lucide-react';

const features = [
  {
    id: 'illumination',
    title: 'Illumination',
    subtitle: 'Describe your problem',
    description: 'Share your challenges and receive personalized wisdom from ancient texts',
    icon: Lightbulb,
    gradient: 'from-spiritual-gold to-spiritual-teal',
    textColor: 'text-spiritual-gold',
    href: null, // This will open a modal/component on the same page
    action: 'open-illumination'
  },
  {
    id: 'kurukshetra',
    title: 'Kurukshetra',
    subtitle: 'Arjun (You) talks with Krishna',
    description: 'Engage in divine dialogue with Krishna using Bhagavad Gita wisdom',
    icon: Crown,
    gradient: 'from-spiritual-purple to-spiritual-blue',
    textColor: 'text-spiritual-purple',
    href: '/chat/kurukshetra',
    action: 'navigate'
  },
  {
    id: 'shifa',
    title: 'Shifa',
    subtitle: 'Healing through Divine guidance',
    description: 'Find spiritual healing and guidance through Quranic teachings',
    icon: Heart,
    gradient: 'from-spiritual-blue to-spiritual-teal',
    textColor: 'text-spiritual-blue',
    href: '/chat/shifa',
    action: 'navigate'
  },
  {
    id: 'iqra',
    title: 'Iqra',
    subtitle: 'Read and reflect',
    description: 'Discover wisdom and guidance through Biblical teachings',
    icon: Cross,
    gradient: 'from-spiritual-teal to-spiritual-gold',
    textColor: 'text-spiritual-teal',
    href: '/chat/iqra',
    action: 'navigate'
  }
];

interface FeatureGridProps {
  onIlluminationClick?: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onIlluminationClick }) => {
  const handleFeatureClick = (feature: typeof features[0]) => {
    if (feature.action === 'open-illumination' && onIlluminationClick) {
      onIlluminationClick();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.15,
            ease: "easeOut"
          }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              z: 50,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <Card className="glass border-border/20 h-full group cursor-pointer overflow-hidden relative">
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  background: [
                    `linear-gradient(45deg, hsl(var(--spiritual-purple)/0.1), hsl(var(--spiritual-blue)/0.1))`,
                    `linear-gradient(135deg, hsl(var(--spiritual-blue)/0.1), hsl(var(--spiritual-teal)/0.1))`,
                    `linear-gradient(225deg, hsl(var(--spiritual-teal)/0.1), hsl(var(--spiritual-gold)/0.1))`,
                    `linear-gradient(315deg, hsl(var(--spiritual-gold)/0.1), hsl(var(--spiritual-purple)/0.1))`,
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, hsl(var(--spiritual-gold)/0.1) 50%, transparent 70%)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              
              <CardContent className="p-8 h-full flex flex-col relative z-10">
                <motion.div 
                  className={`p-5 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 w-fit relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Icon glow effect */}
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
                    className={`text-2xl font-display font-bold mb-3 ${feature.textColor} group-hover:text-spiritual-gold transition-colors duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-text-secondary mb-4 font-medium group-hover:text-text-primary transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.subtitle}
                  </motion.p>
                  <motion.p 
                    className="text-text-secondary leading-relaxed mb-8 group-hover:text-text-primary transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
                
                {feature.href ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold relative overflow-hidden group/btn`}
                    >
                      <Link to={feature.href} className="flex items-center justify-center space-x-2">
                        {/* Button glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <MessageCircle size={16} className="relative z-10" />
                        <span className="relative z-10">Start Conversation</span>
                      </Link>
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => handleFeatureClick(feature)}
                      className={`w-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold relative overflow-hidden group/btn`}
                    >
                      {/* Button glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex items-center justify-center space-x-2 relative z-10">
                        <Lightbulb size={16} />
                        <span>Seek Guidance</span>
                      </div>
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};