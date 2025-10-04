import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { Navigation } from '@/components/ui/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { SolutionPanel } from '@/components/ui/SolutionPanel';
import { Send, Cross, User, Lightbulb } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { getBiblicalResponse } from '@/utils/intelligentResponse';
import { 
  trackInteraction, 
  analyzeEmotionsForTracking, 
  detectStateOfMind 
} from '@/utils/interactionTracker';
import { getSolutionByProblemType, searchSolutions, Solution } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'guide';
  timestamp: Date;
}

const Iqra: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Peace be with you, ${user?.username || 'beloved soul'}! I am here to offer you comfort and guidance through the timeless wisdom of the Bible. As Jesus said: "Come unto me, all ye that labor and are heavy laden, and I will give you rest." (Matthew 11:28). Share your burdens, and let us find hope and healing in God's word together.`,
      sender: 'guide',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<Solution | null>(null);
  const [lastUserMessage, setLastUserMessage] = useState('');
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
    setLastUserMessage(inputValue);
    setInputValue('');
    setIsLoading(true);

    // Get intelligent response based on user input
    setTimeout(() => {
      const response = getBiblicalResponse(inputValue);
      
      // Track the interaction
      trackInteraction({
        feature: 'iqra',
        type: 'chat_message',
        stateOfMind: detectStateOfMind(inputValue),
        emotions: analyzeEmotionsForTracking(inputValue),
        communication: inputValue,
        response: response
      });
      
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

  const handleSolutionRequest = () => {
    if (!lastUserMessage.trim()) {
      toast({
        title: "No message to analyze",
        description: "Please send a message first before requesting solutions.",
        variant: "destructive"
      });
      return;
    }

    const stateOfMind = detectStateOfMind(lastUserMessage);
    const emotions = analyzeEmotionsForTracking(lastUserMessage);
    
    let solution = getSolutionByProblemType(stateOfMind.toLowerCase()) || 
                  getSolutionByProblemType(emotions[0]?.toLowerCase() || '');
    
    if (!solution) {
      const searchResults = searchSolutions(lastUserMessage);
      solution = searchResults.length > 0 ? searchResults[0] : null;
    }

    if (solution) {
      setCurrentSolution(solution);
      setIsSolutionOpen(true);
      
      toast({
        title: "Solution Found!",
        description: solution.title,
      });
      
      trackInteraction({
        feature: 'iqra',
        type: 'solution_request',
        stateOfMind: stateOfMind,
        emotions: emotions,
        communication: lastUserMessage,
        response: `Solution provided: ${solution.title}`,
        solution: {
          problemType: solution.problemType,
          title: solution.title,
          pointsCount: solution.practicalPoints.length,
          practicalPoints: solution.practicalPoints
        }
      });
    } else {
      toast({
        title: "No specific solution found",
        description: "Try rephrasing your concern or ask about common issues like anxiety, relationships, or career.",
        variant: "destructive"
      });
    }
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
            <Cross className="w-8 h-8 text-spiritual-teal mr-3" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient">
              Iqra
            </h1>
          </div>
          <p className="text-lg text-text-secondary">
            Read and reflect • Wisdom of the Bible
          </p>
        </motion.div>

        {/* Chat and Solution Container */}
        <div className="h-[calc(100vh-16rem)] relative overflow-hidden">
          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: isSolutionOpen ? '-20%' : 0
            }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-0 w-[65%] h-full"
          >
            <Card className="glass border-border/20 flex-1 flex flex-col h-full overflow-hidden">
              <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 pr-4">
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
                            ? 'bg-spiritual-gold' 
                            : 'bg-gradient-to-r from-spiritual-teal to-spiritual-gold'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Cross className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`p-4 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-spiritual-gold/20 border border-spiritual-gold/30'
                            : 'bg-gradient-to-r from-spiritual-teal/20 to-spiritual-gold/20 border border-spiritual-teal/30'
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
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-spiritual-teal to-spiritual-gold flex items-center justify-center">
                          <Cross className="w-4 h-4 text-white" />
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-r from-spiritual-teal/20 to-spiritual-gold/20 border border-spiritual-teal/30">
                          <div className="flex space-x-1">
                            <motion.div
                              className="w-2 h-2 bg-spiritual-teal rounded-full"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-spiritual-teal rounded-full"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-spiritual-teal rounded-full"
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
                      placeholder="Share your burdens and seek God's comfort..."
                      className="flex-1 bg-dark-secondary/50 border-border/30 focus:border-spiritual-teal"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSolutionRequest}
                      disabled={!lastUserMessage.trim() || isLoading}
                      className="bg-gradient-to-r from-spiritual-gold to-spiritual-purple hover:opacity-90 px-4"
                      title="Get practical solutions"
                    >
                      <Lightbulb className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gradient-to-r from-spiritual-teal to-spiritual-gold hover:opacity-90 px-4"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isSolutionOpen ? 0 : '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 top-0 w-[50%] h-full"
          >
            <SolutionPanel
              isOpen={isSolutionOpen}
              onClose={() => setIsSolutionOpen(false)}
              solution={currentSolution}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Iqra;