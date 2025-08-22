import React, { useEffect } from 'react';
import { HeroSection } from '@/components/ui/HeroSection';
import { AuthSection } from '@/components/ui/AuthSection';
import { AboutSection } from '@/components/ui/AboutSection';
import { useAuthStore } from '@/stores/authStore';
import { Navigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  
  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  useEffect(() => {
    // Force dark mode for the app
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AuthSection />
      <AboutSection />
    </div>
  );
};

export default Landing;