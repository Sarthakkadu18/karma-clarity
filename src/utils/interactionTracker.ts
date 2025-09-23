// User interaction tracking system for spiritual guidance platform

export interface UserInteraction {
  id: string;
  timestamp: Date;
  feature: 'illumination' | 'kurukshetra' | 'iqra' | 'shifa' | 'pragmatism' | 'gurugranth';
  type: 'emotion_analysis' | 'chat_message' | 'guidance_request';
  stateOfMind?: string;
  emotions?: string[];
  communication: string;
  response?: string;
  verseSource?: string;
  verseText?: string;
}

export interface FeatureReport {
  featureName: string;
  interactions: UserInteraction[];
  totalSessions: number;
  emotionalProfile: Record<string, number>;
  commonStateOfMind: string[];
  totalCommunications: number;
}

export interface UserReport {
  generatedAt: Date;
  totalInteractions: number;
  features: FeatureReport[];
  overallEmotionalProfile: Record<string, number>;
  timeRange: {
    start: Date;
    end: Date;
  };
}

// Storage key for localStorage
const STORAGE_KEY = 'spiritual_journey_interactions';

// Get all stored interactions
export function getAllInteractions(): UserInteraction[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const interactions = JSON.parse(stored);
    return interactions.map((interaction: any) => ({
      ...interaction,
      timestamp: new Date(interaction.timestamp)
    }));
  } catch (error) {
    console.error('Error loading interactions:', error);
    return [];
  }
}

// Save interaction to localStorage
export function trackInteraction(interaction: Omit<UserInteraction, 'id' | 'timestamp'>): void {
  try {
    const interactions = getAllInteractions();
    const newInteraction: UserInteraction = {
      ...interaction,
      id: crypto.randomUUID(),
      timestamp: new Date()
    };
    
    interactions.push(newInteraction);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(interactions));
  } catch (error) {
    console.error('Error tracking interaction:', error);
  }
}

// Analyze emotions from text
export function analyzeEmotionsForTracking(text: string): string[] {
  const emotions = [];
  const lowercaseText = text.toLowerCase();
  
  const emotionPatterns = {
    joy: ['happy', 'joy', 'excited', 'cheerful', 'delighted', 'pleased', 'content'],
    sadness: ['sad', 'depressed', 'down', 'melancholy', 'grief', 'sorrow', 'upset'],
    anger: ['angry', 'frustrated', 'mad', 'irritated', 'furious', 'rage', 'annoyed'],
    anxiety: ['anxious', 'worried', 'nervous', 'stressed', 'overwhelmed', 'panic'],
    fear: ['scared', 'afraid', 'fearful', 'terrified', 'nervous', 'apprehensive'],
    confusion: ['confused', 'lost', 'uncertain', 'unclear', 'puzzled', 'bewildered'],
    peace: ['calm', 'peaceful', 'serene', 'tranquil', 'relaxed', 'centered'],
    love: ['love', 'compassion', 'affection', 'care', 'devotion', 'kindness'],
    gratitude: ['grateful', 'thankful', 'blessed', 'appreciative']
  };
  
  Object.entries(emotionPatterns).forEach(([emotion, patterns]) => {
    if (patterns.some(pattern => lowercaseText.includes(pattern))) {
      emotions.push(emotion);
    }
  });
  
  return emotions.length > 0 ? emotions : ['neutral'];
}

// Detect state of mind from text
export function detectStateOfMind(text: string): string {
  const statePatterns = {
    'Seeking Guidance': ['help', 'guidance', 'advice', 'what should', 'confused', 'lost'],
    'Emotional Distress': ['hurt', 'pain', 'suffering', 'difficult', 'hard time', 'struggle'],
    'Spiritual Inquiry': ['meaning', 'purpose', 'spiritual', 'divine', 'god', 'soul'],
    'Gratitude': ['thank', 'grateful', 'blessed', 'appreciate', 'thankful'],
    'Reflection': ['thinking', 'pondering', 'reflecting', 'considering', 'wondering'],
    'Decision Making': ['decide', 'choice', 'option', 'should I', 'what if'],
    'Personal Growth': ['improve', 'better', 'grow', 'development', 'progress'],
    'Relationship Issues': ['family', 'friend', 'relationship', 'marriage', 'love'],
    'Life Challenges': ['problem', 'challenge', 'issue', 'difficulty', 'obstacle']
  };
  
  const lowercaseText = text.toLowerCase();
  
  for (const [state, patterns] of Object.entries(statePatterns)) {
    if (patterns.some(pattern => lowercaseText.includes(pattern))) {
      return state;
    }
  }
  
  return 'General Inquiry';
}

// Generate comprehensive report
export function generateUserReport(dateRange?: { start: Date; end: Date }): UserReport {
  const allInteractions = getAllInteractions();
  
  // Filter by date range if provided
  const filteredInteractions = dateRange
    ? allInteractions.filter(interaction => 
        interaction.timestamp >= dateRange.start && 
        interaction.timestamp <= dateRange.end
      )
    : allInteractions;
  
  // Group interactions by feature
  const featureGroups = filteredInteractions.reduce((groups, interaction) => {
    if (!groups[interaction.feature]) {
      groups[interaction.feature] = [];
    }
    groups[interaction.feature].push(interaction);
    return groups;
  }, {} as Record<string, UserInteraction[]>);
  
  // Generate feature reports
  const features: FeatureReport[] = Object.entries(featureGroups).map(([featureName, interactions]) => {
    const emotionalProfile = interactions.reduce((profile, interaction) => {
      interaction.emotions?.forEach(emotion => {
        profile[emotion] = (profile[emotion] || 0) + 1;
      });
      return profile;
    }, {} as Record<string, number>);
    
    const statesOfMind = interactions
      .filter(i => i.stateOfMind)
      .map(i => i.stateOfMind!)
      .reduce((states, state) => {
        states[state] = (states[state] || 0) + 1;
        return states;
      }, {} as Record<string, number>);
    
    const commonStateOfMind = Object.entries(statesOfMind)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([state]) => state);
    
    return {
      featureName: formatFeatureName(featureName),
      interactions,
      totalSessions: interactions.length,
      emotionalProfile,
      commonStateOfMind,
      totalCommunications: interactions.filter(i => i.type === 'chat_message').length
    };
  });
  
  // Calculate overall emotional profile
  const overallEmotionalProfile = filteredInteractions.reduce((profile, interaction) => {
    interaction.emotions?.forEach(emotion => {
      profile[emotion] = (profile[emotion] || 0) + 1;
    });
    return profile;
  }, {} as Record<string, number>);
  
  // Determine time range
  const timestamps = filteredInteractions.map(i => i.timestamp);
  const timeRange = {
    start: timestamps.length > 0 ? new Date(Math.min(...timestamps.map(t => t.getTime()))) : new Date(),
    end: timestamps.length > 0 ? new Date(Math.max(...timestamps.map(t => t.getTime()))) : new Date()
  };
  
  return {
    generatedAt: new Date(),
    totalInteractions: filteredInteractions.length,
    features,
    overallEmotionalProfile,
    timeRange
  };
}

// Helper function to format feature names
function formatFeatureName(featureName: string): string {
  const nameMap: Record<string, string> = {
    illumination: 'Divine Illumination',
    kurukshetra: 'Krishna\'s Wisdom',
    iqra: 'Biblical Guidance',
    shifa: 'Islamic Healing',
    pragmatism: 'Chanakya\'s Pragmatism',
    gurugranth: 'Guru Granth Sahib'
  };
  
  return nameMap[featureName] || featureName;
}

// Download report as structured JSON
export function downloadReportAsJSON(report: UserReport): void {
  // Create a more structured and readable JSON format
  const structuredReport = {
    metadata: {
      generatedAt: report.generatedAt.toISOString(),
      reportPeriod: {
        start: report.timeRange.start.toISOString(),
        end: report.timeRange.end.toISOString()
      },
      totalInteractions: report.totalInteractions,
      summary: {
        totalFeatures: report.features.length,
        mostActiveFeature: report.features.reduce((prev, current) => 
          prev.totalSessions > current.totalSessions ? prev : current
        ).featureName,
        dominantEmotion: Object.entries(report.overallEmotionalProfile)
          .sort((a, b) => b[1] - a[1])[0]?.[0] || 'neutral'
      }
    },
    emotionalOverview: {
      profile: report.overallEmotionalProfile,
      analysis: Object.entries(report.overallEmotionalProfile)
        .sort((a, b) => b[1] - a[1])
        .map(([emotion, count]) => ({
          emotion,
          occurrences: count,
          percentage: Math.round((count / report.totalInteractions) * 100)
        }))
    },
    featureBreakdown: report.features.map(feature => ({
      featureName: feature.featureName,
      statistics: {
        totalSessions: feature.totalSessions,
        totalCommunications: feature.totalCommunications,
        averageInteractionsPerSession: Math.round(feature.interactions.length / feature.totalSessions * 100) / 100
      },
      psychology: {
        commonStatesOfMind: feature.commonStateOfMind,
        emotionalProfile: feature.emotionalProfile
      },
      communications: {
        recent: feature.interactions.slice(-10).map(interaction => ({
          timestamp: interaction.timestamp.toISOString(),
          type: interaction.type,
          userMessage: interaction.communication,
          systemResponse: interaction.response ? interaction.response.substring(0, 200) + '...' : null,
          emotions: interaction.emotions,
          stateOfMind: interaction.stateOfMind,
          verseUsed: interaction.verseSource ? {
            source: interaction.verseSource,
            text: interaction.verseText
          } : null
        }))
      }
    })),
    rawData: report // Include original data for completeness
  };
  
  const dataStr = JSON.stringify(structuredReport, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json; charset=utf-8' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `spiritual_journey_report_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Download report as formatted text
export function downloadReportAsText(report: UserReport): void {
  const formatDate = (date: Date) => date.toLocaleDateString();
  const formatTime = (date: Date) => date.toLocaleString();
  
  let textReport = `╔═════════════════════════════════════════════════════════════════╗
║                    SPIRITUAL JOURNEY REPORT                     ║
╚═════════════════════════════════════════════════════════════════╝

📅 Generated: ${formatDate(report.generatedAt)}
📊 Report Period: ${formatDate(report.timeRange.start)} - ${formatDate(report.timeRange.end)}
💬 Total Interactions: ${report.totalInteractions}

┌─────────────────────────────────────────────────────────────────┐
│                    OVERALL EMOTIONAL PROFILE                    │
└─────────────────────────────────────────────────────────────────┘
`;
  
  const emotions = Object.entries(report.overallEmotionalProfile).sort((a, b) => b[1] - a[1]);
  if (emotions.length > 0) {
    textReport += `${'Emotion'.padEnd(15)} | ${'Count'.padEnd(8)} | Percentage\n`;
    textReport += `${'-'.repeat(15)} | ${'-'.repeat(8)} | ${'-'.repeat(10)}\n`;
    const total = emotions.reduce((sum, [, count]) => sum + count, 0);
    emotions.forEach(([emotion, count]) => {
      const percentage = Math.round((count / total) * 100);
      textReport += `${emotion.padEnd(15)} | ${count.toString().padEnd(8)} | ${percentage}%\n`;
    });
  } else {
    textReport += `No emotional data available.\n`;
  }
  
  textReport += `\n┌─────────────────────────────────────────────────────────────────┐
│                      FEATURE BREAKDOWN                          │
└─────────────────────────────────────────────────────────────────┘\n`;
  
  report.features.forEach((feature, index) => {
    textReport += `\n${index + 1}. ${feature.featureName.toUpperCase()}
${'═'.repeat(feature.featureName.length + 3)}
📊 Sessions: ${feature.totalSessions}
💬 Total Communications: ${feature.totalCommunications}

🧠 Common States of Mind:
`;
    if (feature.commonStateOfMind.length > 0) {
      feature.commonStateOfMind.forEach((state, i) => {
        textReport += `   ${i + 1}. ${state}\n`;
      });
    } else {
      textReport += `   No states of mind recorded.\n`;
    }
    
    textReport += `\n😊 Emotional Profile:
`;
    const featureEmotions = Object.entries(feature.emotionalProfile).sort((a, b) => b[1] - a[1]);
    if (featureEmotions.length > 0) {
      featureEmotions.forEach(([emotion, count]) => {
        textReport += `   • ${emotion}: ${count} times\n`;
      });
    } else {
      textReport += `   No emotional data recorded.\n`;
    }
    
    textReport += `\n💭 Recent Communications:
`;
    if (feature.interactions.length > 0) {
      feature.interactions
        .slice(-5) // Show last 5 interactions instead of 3
        .forEach((interaction, i) => {
          const truncatedComm = interaction.communication.length > 80 
            ? interaction.communication.substring(0, 80) + '...' 
            : interaction.communication;
          textReport += `   ${i + 1}. [${formatTime(interaction.timestamp)}]\n      "${truncatedComm}"\n`;
          if (interaction.response) {
            const truncatedResp = interaction.response.length > 80 
              ? interaction.response.substring(0, 80) + '...' 
              : interaction.response;
            textReport += `      Response: "${truncatedResp}"\n`;
          }
          textReport += `\n`;
        });
    } else {
      textReport += `   No communications recorded.\n`;
    }
    
    if (index < report.features.length - 1) {
      textReport += `${'-'.repeat(65)}\n`;
    }
  });
  
  textReport += `\n╔═════════════════════════════════════════════════════════════════╗
║  Thank you for using MindVersee for your spiritual journey! 🙏  ║
╚═════════════════════════════════════════════════════════════════╝`;
  
  const dataBlob = new Blob([textReport], { type: 'text/plain; charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `spiritual_journey_report_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}