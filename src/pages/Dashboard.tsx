import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { Navigation } from '@/components/ui/Navigation';
import { useAuthStore } from '@/stores/authStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ReportDownloadCard } from '@/components/ui/ReportDownloadCard';
import { BarChart3, TrendingUp, Users, MessageCircle, Coins, Calendar, Target, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    // Force dark mode for the app
    document.documentElement.classList.add('dark');
  }, []);

  // Mock data for dashboard
  const stats = [
    { title: 'Total Karma', value: user?.karmaBalance || 0, icon: Coins, trend: '+12%', color: 'text-spiritual-gold' },
    { title: 'Sessions Completed', value: '24', icon: Target, trend: '+8%', color: 'text-spiritual-purple' },
    { title: 'Streak Days', value: '7', icon: Calendar, trend: '+3 days', color: 'text-spiritual-blue' },
    { title: 'Achievements', value: '12', icon: Award, trend: '+2 new', color: 'text-spiritual-green' }
  ];

  const recentActivity = [
    { action: 'Completed Meditation Session', time: '2 hours ago', karma: '+50' },
    { action: 'Daily Reflection', time: '1 day ago', karma: '+25' },
    { action: 'Wisdom Quote Shared', time: '2 days ago', karma: '+15' },
    { action: 'Community Discussion', time: '3 days ago', karma: '+30' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary">
      <Navigation />
      
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-display font-bold text-gradient mb-2">
            Dashboard
          </h1>
          <p className="text-text-secondary text-lg">
            Track your spiritual journey and progress
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={stat.title} className="glass border-border/20 group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm font-medium mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.trend}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-dark-surface/50 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <BarChart3 className="w-5 h-5 mr-2 text-spiritual-purple" />
                  Weekly Progress
                </CardTitle>
                <CardDescription>Your spiritual practice over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Meditation</span>
                      <span className="text-text-primary">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Reflection</span>
                      <span className="text-text-primary">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Learning</span>
                      <span className="text-text-primary">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Community</span>
                      <span className="text-text-primary">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Report Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-1"
          >
            <ReportDownloadCard />
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center text-text-primary">
                  <MessageCircle className="w-5 h-5 mr-2 text-spiritual-blue" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest spiritual actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-dark-surface/30 hover:bg-dark-surface/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-spiritual-purple mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">
                          {activity.action}
                        </p>
                        <p className="text-xs text-text-muted">{activity.time}</p>
                      </div>
                      <div className="text-spiritual-gold text-sm font-semibold">
                        {activity.karma}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="glass border-border/20">
            <CardHeader>
              <CardTitle className="flex items-center text-text-primary">
                <Target className="w-5 h-5 mr-2 text-spiritual-green" />
                Current Goals
              </CardTitle>
              <CardDescription>Your spiritual objectives and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-dark-surface/30 border border-border/10">
                  <h4 className="font-semibold text-text-primary mb-2">Daily Meditation</h4>
                  <p className="text-text-secondary text-sm mb-3">Meditate for 20 minutes daily</p>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-text-muted mt-2">5/7 days this week</p>
                </div>
                <div className="p-4 rounded-lg bg-dark-surface/30 border border-border/10">
                  <h4 className="font-semibold text-text-primary mb-2">Karma Collection</h4>
                  <p className="text-text-secondary text-sm mb-3">Earn 1000 karma points</p>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-text-muted mt-2">600/1000 points</p>
                </div>
                <div className="p-4 rounded-lg bg-dark-surface/30 border border-border/10">
                  <h4 className="font-semibold text-text-primary mb-2">Community Engagement</h4>
                  <p className="text-text-secondary text-sm mb-3">Participate in discussions</p>
                  <Progress value={40} className="h-2" />
                  <p className="text-xs text-text-muted mt-2">2/5 discussions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;