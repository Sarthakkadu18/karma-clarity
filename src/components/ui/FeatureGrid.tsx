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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="glass border-border/20 hover-lift h-full group cursor-pointer overflow-hidden">
            <CardContent className="p-6 h-full flex flex-col">
              <div className={`p-4 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 w-fit`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className={`text-2xl font-display font-bold mb-2 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3 font-medium">
                  {feature.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
              
              {feature.href ? (
                <Button 
                  asChild 
                  className={`w-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold`}
                >
                  <Link to={feature.href} className="flex items-center justify-center space-x-2">
                    <MessageCircle size={16} />
                    <span>Start Conversation</span>
                  </Link>
                </Button>
              ) : (
                <Button 
                  onClick={() => handleFeatureClick(feature)}
                  className={`w-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Lightbulb size={16} />
                    <span>Seek Guidance</span>
                  </div>
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};