import { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/ui/Navigation';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { Navigate } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'chanakya';
  timestamp: Date;
}

const Pragmatism = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (messages.length === 0) {
      // Initial greeting from Chanakya
      setMessages([{
        id: '1',
        sender: 'chanakya',
        content: `Namaste ${user?.username || 'Seeker'}! I am Chanakya, your guide in the art of practical wisdom. Through the teachings of Niti Shastra, I shall help you navigate life's complexities with strategic thinking and righteous action. What challenge seeks your attention today?`,
        timestamp: new Date()
      }]);
    }
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response with Chanakya Niti wisdom
    setTimeout(() => {
      const chanakyaResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'chanakya',
        content: `Wisdom flows from understanding the true nature of your situation. As I have taught: "अतिसर्वत्र वर्जयेत्" - Excess in anything should be avoided. Your challenge requires both strategic thinking and measured action. Consider these three principles: First, assess your position truthfully without emotion clouding judgment. Second, identify the key stakeholders and their motivations - for understanding others' interests is the foundation of influence. Third, act with patience and persistence, for "क्षणे नष्टे कुतो दिनं" - when a moment is lost, how can the day be achieved? Time and timing are your greatest allies. What specific aspect of this guidance would you like to explore deeper?`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, chanakyaResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            Pragmatism
          </h1>
          <p className="text-muted-foreground">
            Strategic wisdom with Chanakya • Teachings of Niti Shastra
          </p>
        </motion.div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 mb-6">
          <CardContent className="p-6">
            <div className="space-y-4 h-96 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground ml-4' 
                      : 'bg-secondary/50 text-foreground mr-4'
                  }`}>
                    <div className="flex items-start gap-3">
                      {message.sender === 'chanakya' && (
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <MessageSquare className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <span className="text-xs opacity-70 mt-2 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary/50 text-foreground p-4 rounded-lg mr-4 max-w-[80%]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/30 backdrop-blur-sm border-primary/10">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your challenge for strategic guidance..."
                className="flex-1 bg-background/50 border-primary/20 focus:border-primary/40"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pragmatism;