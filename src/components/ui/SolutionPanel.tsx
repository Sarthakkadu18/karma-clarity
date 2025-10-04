import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Lightbulb } from 'lucide-react';
import { Solution } from '@/data/mockData';

interface SolutionPanelProps {
  isOpen: boolean;
  onClose: () => void;
  solution: Solution | null;
}

export const SolutionPanel: React.FC<SolutionPanelProps> = ({ isOpen, onClose, solution }) => {
  return (
    <AnimatePresence>
      {isOpen && solution && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '45%', opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full bg-dark-primary/95 backdrop-blur-sm border-l border-border/20 overflow-hidden"
        >
          <Card className="h-full glass border-border/20 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-spiritual-gold" />
                <CardTitle className="text-lg text-text-primary">Practical Solutions</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 hover:bg-spiritual-purple/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 overflow-y-auto max-h-[calc(100%-80px)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gradient mb-4">
                  {solution.title}
                </h3>
                <div className="space-y-3">
                  {solution.practicalPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-spiritual-purple/10 to-spiritual-gold/10 border border-spiritual-purple/20"
                    >
                      <div className="w-6 h-6 rounded-full bg-spiritual-purple/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-white">{index + 1}</span>
                      </div>
                      <p className="text-sm text-text-primary leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 rounded-lg bg-gradient-to-r from-spiritual-blue/10 to-spiritual-purple/10 border border-spiritual-blue/20"
                >
                  <p className="text-xs text-text-muted">
                    💡 <strong>Remember:</strong> These are practical suggestions based on universal wisdom. 
                    Take what resonates with you and adapt it to your unique situation. For serious issues, 
                    consider seeking professional help.
                  </p>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};