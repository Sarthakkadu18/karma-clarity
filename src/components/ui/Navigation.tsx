import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/authStore';
import { Home, User, BarChart3, LogOut, Coins, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/home', label: 'Home', icon: Home },
    { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/profile', label: 'Profile', icon: User }
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-xl border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-display font-bold text-gradient"
              >
                MindVersee
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-spiritual-purple/20 text-spiritual-purple'
                      : 'text-text-secondary hover:text-text-primary hover:bg-dark-surface/50'
                  }`}
                >
                  <item.icon size={16} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {/* Karma Display */}
              <div className="hidden sm:flex items-center space-x-2 bg-dark-surface/50 px-3 py-2 rounded-lg">
                <Coins className="w-4 h-4 text-spiritual-gold" />
                <span className="text-sm font-semibold text-spiritual-gold">
                  {user?.karmaBalance || 0}
                </span>
                <span className="text-xs text-text-muted">Karma</span>
              </div>

              {/* User Avatar Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 border-2 border-gray-700 hover:border-gray-500 transition-colors flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 glass border-border/20" align="end">
                  <div className="p-2">
                    <p className="text-sm font-medium text-text-primary">{user?.username}</p>
                    <p className="text-xs text-text-muted">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User size={16} className="mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center">
                      <BarChart3 size={16} className="mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    <LogOut size={16} className="mr-2" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-primary/95 backdrop-blur-xl border-b border-border/20 md:hidden"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-spiritual-purple/20 text-spiritual-purple'
                      : 'text-text-secondary hover:text-text-primary hover:bg-dark-surface/50'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Karma Display */}
              <div className="flex items-center justify-center space-x-2 bg-dark-surface/50 px-4 py-3 rounded-lg mt-4">
                <Coins className="w-5 h-5 text-spiritual-gold" />
                <span className="font-semibold text-spiritual-gold">
                  {user?.karmaBalance || 0} Karma
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};