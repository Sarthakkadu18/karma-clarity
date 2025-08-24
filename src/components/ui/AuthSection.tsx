import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/stores/authStore';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export const AuthSection: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const { login } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would be an API call
    const mockUser = {
      id: '1',
      username: formData.username || formData.email.split('@')[0],
      email: formData.email,
      karmaBalance: 150,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.email}`
    };
    
    login(mockUser);
    
    // Redirect to home page
    window.location.href = '/home';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-spiritual-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-spiritual-teal/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              boxShadow: '0 25px 50px -12px hsl(var(--spiritual-purple) / 0.25)',
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="glass border-border/20 backdrop-blur-xl relative overflow-hidden group">
              {/* Card shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, hsl(var(--spiritual-purple)/0.1) 50%, transparent 70%)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              
              <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display text-gradient">
                {isLogin ? 'Welcome Back' : 'Join MindVersee'}
              </CardTitle>
              <CardDescription className="text-text-secondary">
                {isLogin 
                  ? 'Enter your credentials to access your spiritual journey' 
                  : 'Create your account and receive 150 Karma credits'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="username" className="text-text-secondary">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Choose a username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="bg-dark-surface/50 border-border/30 focus:border-spiritual-purple"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-secondary">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-dark-surface/50 border-border/30 focus:border-spiritual-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-text-secondary">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="bg-dark-surface/50 border-border/30 focus:border-spiritual-purple pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-text-muted hover:text-text-primary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </div>
                
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-2 text-sm text-spiritual-gold bg-spiritual-gold/10 p-3 rounded-lg"
                  >
                    <Sparkles size={16} />
                    <span>You'll receive 150 Karma credits upon signup!</span>
                  </motion.div>
                )}
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-spiritual-purple hover:text-spiritual-blue transition-colors"
                >
                  {isLogin 
                    ? "Don't have an account? Sign up" 
                    : "Already have an account? Sign in"}
                </button>
              </div>
            </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};