import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  FileText, 
  BarChart3, 
  Calendar,
  Heart,
  MessageCircle,
  Brain
} from 'lucide-react';
import { 
  generateUserReport, 
  downloadReportAsJSON, 
  downloadReportAsText,
  getAllInteractions,
  type UserReport 
} from '@/utils/interactionTracker';
import { useToast } from '@/hooks/use-toast';

export const ReportDownloadCard: React.FC = () => {
  const [report, setReport] = useState<UserReport | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    generateReport();
  }, []);

  const generateReport = async () => {
    setIsGenerating(true);
    try {
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      const userReport = generateUserReport();
      setReport(userReport);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate report. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadJSON = () => {
    if (!report) return;
    downloadReportAsJSON(report);
    toast({
      title: "Report Downloaded",
      description: "Your spiritual journey report has been downloaded as JSON."
    });
  };

  const handleDownloadText = () => {
    if (!report) return;
    downloadReportAsText(report);
    toast({
      title: "Report Downloaded", 
      description: "Your spiritual journey report has been downloaded as text file."
    });
  };

  if (isGenerating) {
    return (
      <Card className="glass border-border/20">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-2 border-spiritual-purple border-t-transparent rounded-full animate-spin" />
            <p className="text-text-secondary">Generating your spiritual journey report...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!report || report.totalInteractions === 0) {
    return (
      <Card className="glass border-border/20">
        <CardHeader>
          <CardTitle className="flex items-center text-text-primary">
            <FileText className="w-5 h-5 mr-2 text-spiritual-purple" />
            Journey Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Brain className="w-12 h-12 mx-auto text-text-muted mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              No Journey Data Yet
            </h3>
            <p className="text-text-secondary mb-4">
              Start using our spiritual guidance features to track your journey!
            </p>
            <Button 
              onClick={generateReport}
              className="bg-gradient-primary hover:opacity-90 text-white"
            >
              Refresh Report
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const topEmotion = Object.entries(report.overallEmotionalProfile)
    .sort((a, b) => b[1] - a[1])[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="glass border-border/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-text-primary">
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-spiritual-purple" />
              Journey Report
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={generateReport}
              className="text-text-muted hover:text-text-primary"
            >
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Report Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-dark-surface/30">
              <div className="text-2xl font-bold text-spiritual-purple">
                {report.totalInteractions}
              </div>
              <div className="text-xs text-text-muted">Total Sessions</div>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-dark-surface/30">
              <div className="text-2xl font-bold text-spiritual-gold">
                {report.features.length}
              </div>
              <div className="text-xs text-text-muted">Features Used</div>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-dark-surface/30">
              <div className="text-2xl font-bold text-spiritual-blue">
                {Math.ceil((Date.now() - report.timeRange.start.getTime()) / (1000 * 60 * 60 * 24))}
              </div>
              <div className="text-xs text-text-muted">Days Active</div>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-dark-surface/30">
              <div className="text-2xl font-bold text-spiritual-green">
                {topEmotion ? topEmotion[0] : 'N/A'}
              </div>
              <div className="text-xs text-text-muted">Top Emotion</div>
            </div>
          </div>

          {/* Feature Breakdown */}
          <div className="space-y-3">
            <h4 className="font-semibold text-text-primary flex items-center">
              <Heart className="w-4 h-4 mr-2 text-spiritual-gold" />
              Feature Usage
            </h4>
            
            {report.features.map((feature, index) => (
              <div key={feature.featureName} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{feature.featureName}</span>
                  <span className="text-text-primary">{feature.totalSessions} sessions</span>
                </div>
                <Progress 
                  value={(feature.totalSessions / report.totalInteractions) * 100} 
                  className="h-2" 
                />
              </div>
            ))}
          </div>

          {/* Emotional Profile */}
          <div className="space-y-3">
            <h4 className="font-semibold text-text-primary flex items-center">
              <Brain className="w-4 h-4 mr-2 text-spiritual-purple" />
              Emotional Journey
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {Object.entries(report.overallEmotionalProfile)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map(([emotion, count]) => (
                  <Badge 
                    key={emotion} 
                    variant="secondary" 
                    className="bg-spiritual-purple/20 text-spiritual-purple"
                  >
                    {emotion} ({count})
                  </Badge>
                ))}
            </div>
          </div>

          {/* Time Range */}
          <div className="flex items-center text-sm text-text-muted">
            <Calendar className="w-4 h-4 mr-2" />
            Report covers: {report.timeRange.start.toLocaleDateString()} - {report.timeRange.end.toLocaleDateString()}
          </div>

          {/* Download Buttons */}
          <div className="flex space-x-3">
            <Button
              onClick={handleDownloadText}
              className="flex-1 bg-gradient-primary hover:opacity-90 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            
            <Button
              onClick={handleDownloadJSON}
              variant="outline"
              className="flex-1 border-border/30 hover:bg-dark-surface/50"
            >
              <FileText className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};