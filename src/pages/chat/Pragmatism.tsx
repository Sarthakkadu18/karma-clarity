import { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Lightbulb, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { SolutionPanel } from '@/components/ui/SolutionPanel';
import { Navigation } from '@/components/ui/Navigation';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { Navigate } from 'react-router-dom';
import { getChanakyaResponse } from '@/utils/intelligentResponse';
import { 
  trackInteraction, 
  analyzeEmotionsForTracking, 
  detectStateOfMind 
} from '@/utils/interactionTracker';
import { getSolutionByProblemType, searchSolutions, Solution } from '@/data/mockData';

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
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<Solution | null>(null);
  const [lastUserMessage, setLastUserMessage] = useState('');
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
    setLastUserMessage(inputValue);
    setInputValue('');
    setIsLoading(true);

    // Get intelligent response based on user input
    setTimeout(async () => {
      const response = await getChanakyaResponse(inputValue);
      
      // Track the interaction
      trackInteraction({
        feature: 'pragmatism',
        type: 'chat_message',
        stateOfMind: detectStateOfMind(inputValue),
        emotions: analyzeEmotionsForTracking(inputValue),
        communication: inputValue,
        response: response
      });
      
      const chanakyaResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'chanakya',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, chanakyaResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleSolutionRequest = () => {
    if (!lastUserMessage.trim()) return;

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
      
      trackInteraction({
        feature: 'pragmatism',
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
    }
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

        <div className="flex gap-4 h-96 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              width: isSolutionOpen ? '55%' : '100%'
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 mb-6 h-full">
              <CardContent className="p-6">
                <div className="space-y-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-primary' 
                        : 'bg-primary/20'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <MessageSquare className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className={`p-4 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/50 text-foreground'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                      <span className="text-xs opacity-70 mt-2 block">
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
                  onClick={handleSolutionRequest}
                  disabled={!lastUserMessage.trim() || isLoading}
                  className="bg-secondary hover:bg-secondary/90"
                  title="Get practical solutions"
                >
                  <Lightbulb className="w-4 h-4" />
                </Button>
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
        </motion.div>

        <SolutionPanel
          isOpen={isSolutionOpen}
          onClose={() => setIsSolutionOpen(false)}
          solution={currentSolution}
        />
      </div>
      </div>
    </div>
  );
};

export default Pragmatism;