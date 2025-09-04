import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { Navigation } from '@/components/ui/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Heart, User } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { getIslamicResponse } from '@/utils/intelligentResponse';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'guide';
  timestamp: Date;
}

const Shifa: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `As-salamu alaykum ${user?.username || 'Brother/Sister'}! I am here to provide you with spiritual healing and guidance through the divine wisdom of the Quran. Allah (SWT) says: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" - And whoever fears Allah, He will make for him a way out. Share your concerns, and let us find solace in His guidance.`,
      sender: 'guide',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Get intelligent response based on user input
    setTimeout(() => {
      const response = getIslamicResponse(inputValue);
      const guideResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'guide',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, guideResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      <Navigation />
      
      <main className="pt-20 pb-4 px-4 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-spiritual-blue mr-3" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient">
              Shifa
            </h1>
          </div>
          <p className="text-lg text-text-secondary">
            Healing through Divine guidance • Wisdom of the Quran
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[60vh] flex flex-col"
        >
          <Card className="glass border-border/20 flex-1 flex flex-col">
            <CardContent className="p-0 flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-spiritual-teal' 
                          : 'bg-gradient-to-r from-spiritual-blue to-spiritual-teal'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Heart className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`p-4 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-spiritual-teal/20 border border-spiritual-teal/30'
                          : 'bg-gradient-to-r from-spiritual-blue/20 to-spiritual-teal/20 border border-spiritual-blue/30'
                      }`}>
                        <p className="text-text-primary leading-relaxed">{message.content}</p>
                        <span className="text-xs text-text-muted mt-2 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
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
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-spiritual-blue to-spiritual-teal flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-r from-spiritual-blue/20 to-spiritual-teal/20 border border-spiritual-blue/30">
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 bg-spiritual-blue rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-spiritual-blue rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-spiritual-blue rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-border/20">
                <div className="flex space-x-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Share your concerns and seek divine healing..."
                    className="flex-1 bg-dark-secondary/50 border-border/30 focus:border-spiritual-blue"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gradient-to-r from-spiritual-blue to-spiritual-teal hover:opacity-90 px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Shifa;