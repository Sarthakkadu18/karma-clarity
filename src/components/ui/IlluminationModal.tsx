import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/stores/authStore';
import { searchVerses, Verse } from '@/data/mockData';
import { 
  X, 
  Mic, 
  Send, 
  Heart, 
  Brain, 
  Smile, 
  Frown, 
  Angry, 
  AlertCircle,
  Volume2,
  Languages
} from 'lucide-react';

interface IlluminationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emotionIcons = {
  joy: Smile,
  sadness: Frown,
  anger: Angry,
  anxiety: AlertCircle,
  fear: AlertCircle,
  confusion: Brain
};

export const IlluminationModal: React.FC<IlluminationModalProps> = ({ isOpen, onClose }) => {
  const [problem, setProblem] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    emotions: string[];
    verse: Verse;
    guidance: string;
  } | null>(null);
  const [isListening, setIsListening] = useState(false);
  const { deductKarma } = useAuthStore();

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported in this browser');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setProblem(prev => prev + ' ' + transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
      alert('Voice recognition error. Please try again.');
    };

    recognition.start();
  };

  const analyzeEmotion = (text: string): string[] => {
    const emotions = [];
    const lowercaseText = text.toLowerCase();
    
    if (lowercaseText.includes('sad') || lowercaseText.includes('depressed') || lowercaseText.includes('down')) {
      emotions.push('sadness');
    }
    if (lowercaseText.includes('angry') || lowercaseText.includes('frustrated') || lowercaseText.includes('mad')) {
      emotions.push('anger');
    }
    if (lowercaseText.includes('anxious') || lowercaseText.includes('worried') || lowercaseText.includes('nervous')) {
      emotions.push('anxiety');
    }
    if (lowercaseText.includes('happy') || lowercaseText.includes('joy') || lowercaseText.includes('excited')) {
      emotions.push('joy');
    }
    if (lowercaseText.includes('scared') || lowercaseText.includes('afraid') || lowercaseText.includes('fear')) {
      emotions.push('fear');
    }
    if (lowercaseText.includes('confused') || lowercaseText.includes('lost') || lowercaseText.includes('uncertain')) {
      emotions.push('confusion');
    }
    
    return emotions.length > 0 ? emotions : ['confusion'];
  };

  const generateGuidance = (verse: Verse, userProblem: string): string => {
    return `Based on your situation and the wisdom from ${verse.source}, here's guidance for you:

The verse reminds us that ${verse.translation.toLowerCase()}. In your current challenge, this ancient wisdom suggests that you focus on what you can control rather than worrying about outcomes.

Remember, every difficulty is an opportunity for growth. The spiritual path teaches us that inner peace comes not from external circumstances, but from our response to them. Take this moment to breathe deeply, reflect on this wisdom, and trust that you have the strength within you to overcome this challenge.

Consider practicing mindfulness, connecting with your inner wisdom, and taking one small positive step forward today. The divine guidance you seek is already within you - you just need to listen with your heart.`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    if (!deductKarma(15)) {
      alert('Insufficient Karma! Please purchase more Karma to continue.');
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI processing
    setTimeout(() => {
      const emotions = analyzeEmotion(problem);
      const relevantVerses = searchVerses(problem);
      const selectedVerse = relevantVerses[0] || searchVerses('peace')[0];
      const guidance = generateGuidance(selectedVerse, problem);

      setResults({
        emotions,
        verse: selectedVerse,
        guidance
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReadAloud = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const resetForm = () => {
    setProblem('');
    setResults(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-auto"
      >
        <Card className="glass border-border/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-display text-gradient">
              Illumination - Seek Divine Guidance
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={20} />
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {!results ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Describe your problem or challenge
                  </label>
                  <div className="relative">
                    <Textarea
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      placeholder="Share what's troubling you... The universe is listening."
                      className="min-h-32 bg-dark-surface/50 border-border/30 focus:border-spiritual-purple resize-none"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={`absolute bottom-2 right-2 ${isListening ? 'text-red-500 animate-pulse' : 'text-text-muted hover:text-spiritual-purple'}`}
                      onClick={handleVoiceInput}
                    >
                      <Mic size={16} />
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!problem.trim() || isAnalyzing}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Seeking Divine Wisdom...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send size={16} />
                      <span>Seek Guidance (15 Karma)</span>
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                {/* Sentiment Analysis */}
                <Card className="bg-dark-surface/30 border-border/20">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-text-primary mb-3 flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-spiritual-purple" />
                      Detected Emotions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {results.emotions.map((emotion) => {
                        const IconComponent = emotionIcons[emotion as keyof typeof emotionIcons] || AlertCircle;
                        return (
                          <Badge key={emotion} variant="secondary" className="bg-spiritual-purple/20 text-spiritual-purple">
                            <IconComponent size={12} className="mr-1" />
                            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Retrieved Verse */}
                <Card className="bg-dark-surface/30 border-border/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-text-primary flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-spiritual-gold" />
                        Divine Wisdom
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleReadAloud(results.verse.translation)}
                        className="text-spiritual-purple hover:text-spiritual-blue"
                      >
                        <Volume2 size={16} />
                      </Button>
                    </div>
                    <blockquote className="text-lg text-text-primary mb-2 italic">
                      "{results.verse.translation}"
                    </blockquote>
                    <p className="text-sm text-spiritual-purple font-medium">
                      — {results.verse.source}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {results.verse.context}
                    </p>
                  </CardContent>
                </Card>

                {/* AI Guidance */}
                <Card className="bg-dark-surface/30 border-border/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-text-primary">
                        Personalized Guidance
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleReadAloud(results.guidance)}
                        className="text-spiritual-purple hover:text-spiritual-blue"
                      >
                        <Volume2 size={16} />
                      </Button>
                    </div>
                    <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                      {results.guidance}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-4">
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="flex-1 border-border/30 hover:bg-dark-surface/50"
                  >
                    Seek More Guidance
                  </Button>
                  <Button
                    onClick={onClose}
                    className="flex-1 bg-gradient-primary hover:opacity-90 text-white"
                  >
                    Thank You
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};