import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { Navigation } from '@/components/ui/Navigation';
import { useAuthStore } from '@/stores/authStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Edit, Save, Mail, Calendar, MapPin, Star, Award, Settings, Bell, Shield, Palette } from 'lucide-react';

const Profile: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: 'A seeker of wisdom and inner peace, dedicated to spiritual growth and mindful living.',
    location: 'Earth',
    joinDate: '2024-01-15'
  });

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    // Force dark mode for the app
    document.documentElement.classList.add('dark');
  }, []);

  const achievements = [
    { name: 'First Steps', description: 'Completed your first meditation', icon: '🧘', earned: true },
    { name: 'Wisdom Seeker', description: 'Read 10 spiritual quotes', icon: '📚', earned: true },
    { name: 'Community Spirit', description: 'Participated in discussions', icon: '💬', earned: true },
    { name: 'Streak Master', description: '7-day meditation streak', icon: '🔥', earned: true },
    { name: 'Karma Collector', description: 'Earned 500 karma points', icon: '💎', earned: false },
    { name: 'Enlightened', description: 'Reached advanced level', icon: '✨', earned: false }
  ];

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary">
      <Navigation />
      
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold text-gradient mb-2">
                Profile
              </h1>
              <p className="text-text-secondary text-lg">
                Manage your spiritual journey settings
              </p>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "default" : "outline"}
              className="hidden sm:flex"
            >
              {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="glass border-border/20">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="relative mx-auto mb-4 w-24 h-24">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 border-4 border-gray-700 hover:border-gray-500 transition-colors flex items-center justify-center group">
                    <svg className="w-12 h-12 text-gray-300 group-hover:text-gray-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  {isEditing && (
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Edit className="w-3 h-3" />
                    </Button>
                  )}
                </div>

                <h2 className="text-xl font-semibold text-text-primary mb-1">
                  {profileData.username}
                </h2>
                <p className="text-text-muted text-sm mb-4">Spiritual Seeker</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-spiritual-gold">{user?.karmaBalance || 0}</p>
                    <p className="text-xs text-text-muted">Karma Points</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-spiritual-purple">24</p>
                    <p className="text-xs text-text-muted">Sessions</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center text-text-secondary">
                    <Mail className="w-4 h-4 mr-2" />
                    {profileData.email}
                  </div>
                  <div className="flex items-center justify-center text-text-secondary">
                    <MapPin className="w-4 h-4 mr-2" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center justify-center text-text-secondary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {new Date(profileData.joinDate).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Edit Button */}
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "default" : "outline"}
              className="w-full mt-4 sm:hidden"
            >
              {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="glass border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal details and bio
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          value={profileData.username}
                          onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                        disabled={!isEditing}
                        className="mt-1 min-h-[100px]"
                        placeholder="Tell us about your spiritual journey..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card className="glass border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Achievements & Badges
                    </CardTitle>
                    <CardDescription>
                      Your spiritual milestones and accomplishments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div
                          key={achievement.name}
                          className={`p-4 rounded-lg border transition-colors ${
                            achievement.earned
                              ? 'bg-spiritual-purple/10 border-spiritual-purple/30'
                              : 'bg-dark-surface/30 border-border/10 opacity-60'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-text-primary">{achievement.name}</h4>
                                {achievement.earned && (
                                  <Badge variant="secondary" className="text-xs">
                                    Earned
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-text-secondary">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="glass border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Preferences
                    </CardTitle>
                    <CardDescription>
                      Customize your spiritual experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text-primary">Daily Reminders</h4>
                          <p className="text-sm text-text-secondary">Get notified for meditation sessions</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Bell className="w-4 h-4 mr-2" />
                          Configure
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text-primary">Theme Preferences</h4>
                          <p className="text-sm text-text-secondary">Customize your visual experience</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Palette className="w-4 h-4 mr-2" />
                          Customize
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-6">
                <Card className="glass border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Privacy & Security
                    </CardTitle>
                    <CardDescription>
                      Manage your privacy settings and security preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text-primary">Profile Visibility</h4>
                          <p className="text-sm text-text-secondary">Control who can see your profile</p>
                        </div>
                        <Badge variant="outline">Public</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text-primary">Activity Status</h4>
                          <p className="text-sm text-text-secondary">Show when you're active</p>
                        </div>
                        <Badge variant="outline">Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text-primary">Data Export</h4>
                          <p className="text-sm text-text-secondary">Download your spiritual journey data</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Profile;